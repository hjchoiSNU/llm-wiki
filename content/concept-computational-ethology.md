---
title: 계산 동물행동학 (Computational Ethology) — 행동 자동 정량화
type: concept
created: 2026-08-15
updated: 2026-08-15
aliases: [computational ethology, 행동 정량화, markerless tracking, pose estimation, behavioral syllable]
---

> [!takeaway] 연구 방향 관점의 핵심
> 회로 조작(광유전·chemogenetic)의 해상도는 이미 높은데 **읽어내는 행동 지표는 여전히 "총 섭취량(g)"·"bout 수" 수준**이라는 비대칭이 사용자 lab을 포함한 섭식 신경과학의 병목이다. 이 페이지는 그 비대칭을 좁히는 도구 계열을 한자리에 모은 hub — keypoint 지도학습(DeepLabCut·SLEAP), 비지도 syllable 분해(MoSeq·B-SOiD), 그리고 재학습 없는 파운데이션 모델([[mueller-2025-privi-towards-general-purpose-video|PriVi]]·[[liu-2025-castle-a-training-free-foundation-model|CASTLE]]). 실무 함의: [[concept-need-motivation-pleasure-utility|NMPU]]의 Need/Motivation/Pleasure를 행동으로 분해하려면 **초 단위 미세행동 라벨**이 필요하고, 지금은 그 라벨을 사람 손 없이 얻을 수 있는 단계에 들어섰다. 반대 방향의 함의도 있다 — 도구가 만든 클래스가 **실제로 신경신호와 정렬되는지**를 디코딩으로 검증하지 않으면, 편리한 라벨이 곧 타당한 라벨은 아니다.

# 계산 동물행동학 (Computational Ethology)

## 한 줄 요약
영상에서 동물 행동을 **자동으로 추적·분류·발견**하는 계산 도구 전반. "행동을 신경활동만큼 엄밀히 정량한다"는 목표 아래, 지도학습 keypoint 추적 → 비지도 행동 분해 → 파운데이션 모델 기반 label-free 발견으로 진화해 왔다.

## 세대별 지형

### 1세대 — 지도학습 keypoint / pose estimation
- **DeepLabCut(DLC)**, **Lightning Pose**, **SLEAP**, **AlphaTracker**.
- ImageNet 사전학습 backbone에 소량 수작업 landmark 라벨로 transfer learning → markerless 관절 좌표.
- 강점: 공간적으로 정밀, 다개체 identity 추적(SLEAP/AlphaTracker).
- 약점: **종·과제·카메라 기하가 바뀔 때마다 재라벨·fine-tuning**. 동물을 성긴 skeleton으로 환원해 **예상 밖 행동은 발견 불가**. 정지 구간 jitter([[liu-2025-castle-a-training-free-foundation-model|Liu 2025]] 정량 비교).
- 위키 내 사용례: [[ha-2024-hypothalamic-neuronal-activation-non-human]](NHP 섭식 tray approach·bout), [[leow-2026-a-cortical-hypothalamic-neural]](binge 세션 종단 추적), [[fallon-2026-striatal-pathways-dissociably-control-action]](operant counting task kinematics).

### 2세대 — 비지도 행동 분해 (behavioral syllable)
- **MoSeq**(깊이카메라 3D pose → sub-second syllable), **B-SOiD**(keypoint dynamics 군집), **Keypoint-MoSeq**.
- 사전 정의 카테고리 없이 반복되는 행동 모티프를 찾음 → 조작이 유발한 **새 행동**을 발견하는 데 유리.
- 약점: 상류 skeletonization 제약을 그대로 상속, 대개 수백 개의 **평평한 micro-syllable** 목록을 산출해 해석 부담.
- 위키 내 사용례: [[godschall-2026-a-brain-reward-circuit-inhibited]](SLEAP+Keypoint-MoSeq로 home-cage 91 syllable, LiCl='nausea'/pre-fed='satiety' 참조축), [[weinreb-2026-spontaneous-behavior-is-a]](**shMoSeq** — syllable을 HHMM으로 묶어 pose→syllable→**수 초 behavioral state** 3층 위계로 확장).

### 3세대 — 시각 파운데이션 모델 (VFM)
- 대규모 self-supervised 시각 모델(DINOv2, V-JEPA, VideoPrism)의 표현을 그대로 행동 분석에 전용.
- **[[mueller-2025-privi-towards-general-purpose-video|PriVi]]**: primate 영상으로 domain-level continue-pretraining한 V-JEPA encoder를 **frozen**으로 두고 220k param 경량 attentive classifier만 학습 → 소량 라벨로 NHP coarse action **인식**.
- **[[liu-2025-castle-a-training-free-foundation-model|CASTLE]]**: SAM(분할)+DeAOT(추적)+DINOv2(잠재특징)를 **재학습 없이** 연결, ROI별 focused latent를 UMAP→DBSCAN으로 위계 군집해 행동 클래스를 **발견**. 마우스·초파리·선충에 최적화 없이 이전.
- 공통 과제: VFM 특징에는 **행동과 무관한 성분(배경·절대 위치·방향)**이 섞임. CASTLE은 mask focusing + **24회전 평균**으로 방향 중립화; PriVi는 primate-centric cropping.

## 반복되는 방법론 쟁점

**(1) 인식(recognition) vs 발견(discovery)**
사전 정의 클래스에 영상을 배정할 것인가, 클래스 자체를 데이터에서 찾을 것인가. 조작이 유발한 **새로운** 행동을 볼 목적이라면 발견 쪽이 필수 — 지도학습은 정의상 이미 아는 것만 센다.

**(2) 라벨 타당성 검증 — 신경 디코딩을 기준으로**
전문가 라벨은 골드 스탠더드가 아니라 **또 하나의 변동원**이다. [[liu-2025-castle-a-training-free-foundation-model|CASTLE]]은 감각운동피질 spiking으로부터의 디코딩 정확도를 심판으로 삼아, 자동 분류가 전문가 라벨보다 신경 표상과 더 잘 정렬됨을 보였다(grabbing·at mouth 모두 p<0.001). "사람이 붙인 이름"과 "뇌가 구분하는 상태"가 다를 수 있다는 점을 다루는 실용적 기준.

**(3) 시간 규모의 위계**
밀리초 pose → sub-second syllable → 수 초 behavioral state → 수 분~수 시간 내부상태(hunger·thirst). [[weinreb-2026-spontaneous-behavior-is-a]]는 중간 3층을 명시적으로 모델링하고, 배고픔 같은 긴 항상성 상태는 이와 **구별되는 층**임을 강조한다. 섭식 연구에서는 이 최상위 층이 곧 관심 변수라, 도구가 다루는 층과 가설이 사는 층을 맞추는 일이 중요.

**(4) 운동학만으로 부족한 지점**
속도·각속도·면적 같은 단순 운동학은 보행/부동 구분엔 충분하지만, 초파리 front leg grooming처럼 **국소적·미세한 자세 변화**는 고차원 시각 잠재공간에서만 분리된다. 반대로 시각적으로 동일한 walking↔immobility는 운동학 임계값이 필요 — 두 특징군은 **경쟁이 아니라 보완**.

**(5) 폐루프(closed-loop)로 가는 길**
저지연 자동 라벨 + 자극 하드웨어 = 수십 ms 내 **state-contingent stimulation**. 이는 [[concept-responsive-neurostimulation|responsive neurostimulation]]·[[concept-digital-therapeutics|DTx]]의 동물 대응물이며, "행동 상태를 실시간으로 읽어 그 순간에만 개입한다"는 설계를 전임상에서 검증할 통로.

## 사용자 연구 맥락에서의 활용선
- **섭식 미세구조 분해**: 접근–물기–저작–삼킴–이탈을 라벨 없이 클래스화 → [[liu-2026-granular-motivational-interaction-and|granular motivational state]] 및 [[concept-appetitive-consummatory-phases|appetitive/consummatory 이분법]]의 실증적 세분화.
- **foraging 세그먼트 자동화**: [[gruzdeva-2026-hunger-neurons-track-available-food]]의 toward/away run 같은 궤적 분해를 수작업 규칙 대신 데이터에서.
- **약물·모델 표현형 스크리닝**: 파킨슨 모델에서 rearing·immobility 변화를 잡아냈듯, GLP-1 작용제·DIO 모델의 행동 표현형을 **총 섭취량 이외의 다차원 지표**로.
- **주의점**: 어떤 도구든 preprint 단계·단일개체 검증·사람 라벨과의 일치도(F1)만 보고된 경우가 많다. 자기 데이터에 옮길 때는 **신경신호 또는 독립적 행동 결과와의 정렬**을 스스로 확인하는 단계가 필요.

## 관련 페이지
- [[liu-2025-castle-a-training-free-foundation-model]] — training-free VFM 파이프라인(SAM+DeAOT+DINOv2), 라벨 없는 행동 클래스 발견.
- [[mueller-2025-privi-towards-general-purpose-video]] — primate 영상 video foundation model(V-JEPA), frozen encoder + 경량 classifier.
- [[weinreb-2026-spontaneous-behavior-is-a]] — shMoSeq, 행동의 3층 시간 위계와 dmPFC 상태 부호화.
- [[godschall-2026-a-brain-reward-circuit-inhibited]] — SLEAP+Keypoint-MoSeq로 비만약 효과를 nausea/satiety 행동축에 투사한 사례.
- [[ha-2024-hypothalamic-neuronal-activation-non-human]] · [[leow-2026-a-cortical-hypothalamic-neural]] · [[fallon-2026-striatal-pathways-dissociably-control-action]] — DeepLabCut 실사용례.
- [[liu-2026-granular-motivational-interaction-and]] — 섭식 행동을 granular state로 분해하자는 개념적 요구; 본 도구군이 그 계측 수단.
- [[zong-2022-large-scale-two-photon-calcium]] — 자유행동 대규모 신경 이미징(MINI2P); 행동 정량화와 짝을 이루는 신경 측 인프라.
- [[wang-2026-multimodal-alignments-of-in]] — 활성↔분자정체 정합; 같은 "측정 인프라" 계열.
- [[concept-need-motivation-pleasure-utility]] — 분해된 행동 클래스가 매핑될 이론 틀.
- [[concept-appetitive-consummatory-phases]] — 고전 ethology의 이분법; 계산 도구가 이를 얼마나 세분할 수 있는지가 쟁점.
