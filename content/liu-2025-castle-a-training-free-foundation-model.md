---
title: "CASTLE: a training-free foundation-model pipeline for cross-species behavioral classification (Liu 2025)"
type: paper
created: 2026-08-15
updated: 2026-08-15
source: "raw/2026 bioRxiv. CASTLE- a training-free foundation-model pipeline for cross-species behavioral classification.pdf"
authors: [Yu-Shun Liu, Han-Yuan Yeh, Yu-Ting Hu, Bing-Shiuan Wu, Yi-Fang Chen, Jia-Bin Yang, Sureka Jasmin, Ching-Lung Hsu, Suewei Lin, Chun-Hao Chen, Yu-Wei Wu]
year: 2025
---

> [!takeaway] 연구 방향 관점의 핵심
> **라벨도 재학습도 없이(training-free) 영상에서 행동 클래스를 발견하는 파이프라인.** SAM(분할)+DeeAOT(추적)+DINOv2(시각 잠재특징)를 조합해 ROI별 "focused visual latent"를 뽑고, UMAP→DBSCAN 위계 군집으로 행동 클래스를 만든다. 사용자 lab 관점의 실용 포인트 세 가지: (1) **섭식 미세행동 발견** — reach-and-grasp에서 전문가가 놓친 *"food approaching mouth"·"food releasing at mouth"* 하위행동을 자동 분리해냈다. [[liu-2026-granular-motivational-interaction-and|granular motivational state]] 분해나 [[concept-need-motivation-pleasure-utility|NMPU]]의 consummatory 미세구조를 사람 손으로 라벨링하지 않고 얻을 여지. (2) **keypoint 없이도 신경 디코딩 정확도가 [[concept-computational-ethology|DeepLabCut]]과 동등**(R²≈0.855 vs 0.852) — 라벨링 노동을 줄여도 신경생리 해석이 손실되지 않는다는 벤치마크. (3) **질환 표현형 자동 검출** — MPTP/6-OHDA 파킨슨 모델의 rearing·immobility 변화를 라벨 없이 잡아냄 → DIO·GLP-1 투여 등 대사 모델의 행동 표현형 스크리닝에 그대로 옮길 수 있는 설계. 단, preprint·단일개체 검증·오케스트레이션 비용(회전 24배 추론)이 한계.

# CASTLE: a training-free foundation-model pipeline for cross-species behavioral classification

- **출처**: bioRxiv preprint, DOI 10.1101/2025.08.22.671685 (version posted **2025-08-27**). ⚠️ `raw/` 파일명은 "2026"이나 preprint 게시연도는 2025 — 본 위키는 2025로 표기.
- **소속**: Institute of Molecular Biology, Academia Sinica (Taipei) 외. 교신 **Yu-Wei Wu**.
- **CASTLE** = **C**ombined **A**pproach for **S**egmentation and **T**racking with **L**atent **E**xtraction.
- Figures 8 + Supplementary 6. Keywords: computational ethology, visual foundation models, unsupervised behavioral pattern discovery, cross-species, zero-shot.

## 한 줄 요약
사전학습된 시각 파운데이션 모델 3종(SAM·DeAOT·DINOv2)을 **아무 재학습 없이** 이어 붙여 ROI별 방향불변(orientation-invariant) 움직임 기술자를 만들고, 이를 위계적으로 군집해 마우스·초파리·예쁜꼬마선충의 행동 클래스를 라벨 없이 뽑아내는 end-to-end 파이프라인(+GUI).

## 핵심 내용

### 문제의식
- 행동을 신경활동만큼 엄밀히 정량하는 것이 시스템 신경과학·정신의학·신약개발의 과제이나, 현장은 여전히 **수작업 스코어링**이나 **과제별 pose-tracking**에 의존 → 데이터 수집과 생물학적 통찰 사이의 병목.
- keypoint 기반(DeepLabCut, Lightning Pose)은 동물을 **성긴 skeleton으로 환원** → 미리 정한 landmark 배치에 맞지 않는 예상 밖 행동 패턴을 발견하기 어려움.
- 시각 파운데이션 모델(VFM; Selfee, Animal-JEPA, VideoPrism, MouseGPT)이 zero-shot 특징추출을 열었으나, **대부분 과제별 fine-tuning/재학습을 요구**하고 VFM이 뽑은 풍부한 특징에는 과제와 무관한 성분(배경·위치·방향)이 섞여 잡음이 된다.
- 저자 주장: 분할 + 추적 + 잠재특징 군집을 **재학습 없이 한 파이프라인으로 통합**한 프레임워크는 아직 없다.

### 방법 — 파이프라인 4단계 (Fig. 1)
1. **분할(Segmentation)**: 사용자가 seed frame에서 **SAM**으로 ROI를 반자동 정의(마우스 앞발·코 등 해부학적 landmark에 대응).
2. **추적(Tracking)**: **DeAOT** video object segmentation으로 프레임 단위 ROI mask 추적 → 궤적 + ROI 면적 시계열.
3. **잠재특징 추출(Latent Extraction)**: **DINOv2**로 각 프레임을 **768차원** 시각 잠재특징으로 인코딩. ROI mask와 결합해 **"focused visual latent feature"** 생성(배경 잡음 제거, 해당 신체부위에 집중).
   - "focusing" 없이 원본 프레임에서 바로 뽑은 PC는 신체부위별 변화를 반영하지 못함(Fig. S1d) → focusing이 필수 단계임을 보임.
4. **잠재공간 탐색(Latent Exploration)**: ROI별 잠재신호를 시간축으로 concatenate → **UMAP** 임베딩 → **DBSCAN** 군집 → 초기 행동 클래스. 이를 다시 **위계적으로(UMAP 재적용) 세분** → 반복적·일관된 패턴 = 행동 클래스.
- 전 과정 **training-free / label-free**. 비전문가용 **GUI**(분할·추적 모듈, 잠재특징 추출 모듈, 잠재 탐색 모듈)로 제공.

### 방향(orientation) 중립화 — 핵심 기술 트릭
- DINOv2 잠재특징의 일부 차원은 **입력 프레임의 회전에 매우 민감** → 아무 처리 없이 군집하면 행동이 아니라 **절대 방향·위치로 군집**되어 품질이 무너짐.
- "focused" 추출만으로는 위치 정보만 제거돼 부분적 개선.
- 해결: 각 프레임을 **15°씩 24개 회전 복사본**으로 만들어 잠재 임베딩을 평균 → 방향 특이적 분산이 극적으로 감소, 군집이 훨씬 깨끗해짐. 평균 F1 > 0.9, 오분류는 대부분 **행동 전이 경계 프레임**에 국한.
- 자유행동 동물(특히 *C. elegans*)처럼 물리적 정렬이 불가능한 경우에 필수. 대가는 **추론 시간 증가**.

### 검증 1 — 마우스 reach-and-grasp (숙련 운동)
- 전문가 정의 5개 클래스("on perch", "lifting", "grabbing", "at mouth", "on stage")를 기준으로 검증.
- 전·측면 2뷰 × 768차원 = **1536차원** focused latent. 운동학 특징(위치·속도·면적)은 분류 품질을 크게 높이지 못했고, ablation은 **"focused ROI 추출"과 "visual latent" 둘 다 필요**함을 확인.
- **weighted F1 = 0.9015**. 혼동은 주로 "lifting"↔"grabbing"↔"at mouth" 전이 구간(전문가 라벨링 변동성).
- **신경 디코딩으로 객관 검증**: 감각운동피질 spiking 기반 2-layer GRU 디코더(36 trial). CASTLE 분류가 전문가 라벨보다 디코딩 정확도 **유의하게 우수** — "grabbing" R²=0.9193±0.0085 (수작업 f1 0.8459±0.0143), "at mouth" R²=0.9162±0.0080 vs 0.8770±0.0082 (모두 p<0.001).
- **신규 하위행동 발견**: 전문가가 놓친 **"food approaching mouth"**(grabbing→at mouth 전이 lift)와 **"food releasing at mouth"**(at mouth 이후)를 잠재공간이 뚜렷이 분리.

### 검증 2 — DeepLabCut 직접 비교 (앞발 추적)
- 궤적은 유사하나 **DLC가 정지/휴지 구간에서 jitter·pre-movement 변위가 크다**(수작업 ground truth의 미세 변동이 학습에 반영된 탓). CASTLE의 발 속도 표준편차가 유의하게 낮음(Wilcoxon signed-rank, p<0.0001).
- 앞발 위치 신경 디코딩 R²: **CASTLE 0.8554±0.0135 vs DLC 0.8524±0.0086** (n=10 독립 학습, t-test p=0.5791 → 차이 없음). 단 CASTLE 궤적으로 학습한 모델의 **MSE는 유의하게 낮음**.
- open field에서도 유사한 추적 성능(Fig. S3).

### 검증 3 — 마우스 open field test + 파킨슨 모델
- 30분·30 Hz 영상. body·tail-base ROI에서 각도·각속도 + focused latent(768×5차원).
- 순수 운동학 특징만으로는 명확한 클래스가 나오지 않음(Fig. S4d). 위계 UMAP으로 **grooming**을 먼저 분리(time window 5 frames, 167 ms), 2층 UMAP으로 **supported vs unsupported rearing** 구분. **walking↔immobility**는 시각적으로 너무 유사해 **4 mm/s 운동학 임계값**을 병용.
- 최종 5개 클래스: grooming, supported rearing, unsupported rearing, walking, immobility.
- **질환 표현형**: 경증 PD(급성 MPTP)는 walking 시간↑·supported/unsupported rearing 횟수↓. 중증 PD(6-OHDA hemi-PD)는 immobility↑·grooming↓·rearing↓·보행속도↓.

### 검증 4 — 초파리 (비지도 발견)
- 배경 제거→분할→추적→방향 중립화 후 10-frame snippet을 UMAP 임베딩, 밀도 기반 군집. **라벨·사전정의 행동 없음**.
- **7개 주요 행동 클래스** 도출(수작업 영상 검증). 기존 비지도 프레임워크가 수백 개 micro-syllable을 내놓는 것과 달리, 단일 UMAP 임베딩이 **해석 가능한 소수 클래스**로 요약.
- head grooming·wing grooming은 ROI 면적 변화·높은 각속도라는 운동학 서명을 가짐. 반면 **front leg grooming은 단순 운동학으로 구분 불가, 고차원 시각 잠재공간에서만 분리** — VFM 특징의 부가가치를 보여주는 사례.
- 궤적 색코딩: 보행 클래스는 아레나 전역, grooming·wing extension은 정지·국소 사건(주로 벽 근처 정지 시).

### 검증 5 — *C. elegans* (비지도 + 광유전학)
- 방향 중립화(mask당 24 rotation), 5-frame snippet UMAP → **5개 이산 상태**: Coiling(고곡률 말림), Looping(Ω-turn), Local search(빈번한 재정향의 국소 탐색), 그리고 extended search를 **Forward(global search)**·**Backward**로 세분(연속 변위벡터 비교로 방향 결정).
- **escape 회로 광유전 자극**(주황 광펄스, N=6): 지속적 forward roaming → looping·local search로 유의 전환. Looping pre 1.86±0.81% → post 10.82±3.12%; Local search 13.4±4.20% → 39.48±5.39%; Global search 72.47±7.77% → 31.40±5.43% (ART ANOVA 상호작용 p<0.001; post-hoc looping p<0.005, local p<0.001, global p<0.001).
- 이 전환은 고전 foraging 연구의 **"pirouette" 시퀀스**와 forward–reverse–turn 위계를 재현. skeleton 기반 body curvature로 클래스가 생역학적으로도 구별됨을 확인.
- 개체차 큼(어떤 개체는 20분 내내 coiling 없음)에도 **레퍼토리 자체는 일관**.

### 기존 도구와의 위치 (Discussion)
- **DLC / Lightning Pose**: ImageNet 사전학습을 활용하나 종·과제·카메라 기하가 바뀔 때마다 라벨과 fine-tuning 필요, 결국 성긴 좌표로 환원. CASTLE은 이 단계를 건너뛰고 **미세한 발 회전·손가락 벌림 같은 정보**를 밀집 기술자로 보존.
- **SLEAP / AlphaTracker**: 다개체 identity-aware 추적이 강점이나 주석 부담·identity swap 위험. CASTLE은 본 연구에서 **단일 개체 데이터셋만 검증**했고, category-agnostic 분할 기반이라 다개체 확장은 구조상 가능하되 **벤치마킹은 향후 과제**.
- **B-SOiD / MoSeq**: 라벨 없는 발견을 개척했으나 상류 skeletonization 제약을 물려받고 대개 **평평한 micro-syllable 집합**을 산출. CASTLE은 keypoint 모델 없이 **위계 UMAP→DBSCAN**으로 micro·macro 모티프를 한 워크플로에서.
- **Selfee / LabGym**: 전체론적 vision을 쓰되 새 도메인마다 GPU 학습·curated clip 필요. CASTLE은 사전학습 VFM prior를 **마우스→초파리→선충으로 최적화 없이** 이전.
- 자기 규정: *"B-SOiD/MoSeq만큼 label-free·발견지향적이면서 DLC만큼 공간적으로 정밀하고 VFM만큼 video-aware한 중간지대"*.

### 한계 (저자 명시)
1. zero-shot 분할이라도 사용자가 mask를 seed하고 가끔 drift를 교정해야 함(영상 1시간당 수 프레임 수준).
2. 방향 중립화가 군집을 개선하지만 **추론 시간 증가**.
3. 잠재공간이 **DINOv2의 편향을 상속** — whisker·wing micro-tremor 같은 과소표현 미세동작은 해상하기 어려움.
4. 시간 맥락을 프레임 임베딩 concatenation으로만 반영 → **장거리 시퀀스 순서**에 의존하는 행동은 video-native 파운데이션 모델이 유리할 수 있음.
5. 검증이 **단일 개체 녹화**에 국한. 다개체는 신뢰할 만한 multi-mask 분할·identity 유지가 선결.
6. (위키 주석) **preprint·미심사**. F1 0.90은 전문가 라벨 대비 일치도이지 절대적 정답률이 아니며, 전문가 라벨 자체의 변동성이 비교 기준에 섞여 있음.

### 향후 방향 (저자)
1. video-native/멀티모달 VFM으로 움직임 직접 인코딩 + 오디오·신경신호와 joint embedding.
2. **language grounding** — 군집에 자연어 기술자를 붙여 자동 발견과 사람이 읽는 ethogram을 연결.
3. **closed-loop 제어** — 저지연 라벨을 실험 하드웨어와 통합해 수십 ms 내 **state-contingent 자극**.
4. 사회행동 — 다개체 분할·추적 확장 후 SLEAP/AlphaTracker와 벤치마킹.

## 관련 페이지
- [[concept-computational-ethology]] — 행동 자동 정량화 방법론 hub. 본 논문은 "keypoint 없는 VFM 기반 label-free 발견" 갈래의 대표 사례.
- [[mueller-2025-privi-towards-general-purpose-video]] — 같은 VFM 계열 행동 정량화 도구. 다만 PriVi는 **도메인 사전학습(continue-pretraining) + 지도 classifier**로 NHP coarse action을 *인식*하고, CASTLE은 **재학습 전무 + 비지도 군집**으로 행동 클래스를 *발견*한다. 라벨 유무·발견 대 인식이라는 축에서 상보적.
- [[weinreb-2026-spontaneous-behavior-is-a]] — shMoSeq: pose→syllable→behavioral state 3층 위계 분해. 위계적 행동 분해라는 목표는 같으나 입력이 다름(깊이카메라 keypoint/MoSeq vs 시각 잠재특징). CASTLE의 UMAP 위계는 syllable 규모, Weinreb의 HHMM은 수 초 상태 규모.
- [[liu-2026-granular-motivational-interaction-and]] — 섭식을 seeking→approaching→consuming의 granular state로 분해하자는 framework. CASTLE이 발견한 *"food approaching mouth"·"food releasing at mouth"* 하위행동은 그 granularity를 라벨 없이 얻는 실증 사례.
- [[gruzdeva-2026-hunger-neurons-track-available-food]] — foraging 궤적을 toward/away run으로 나눠 AgRP 신호와 맞춘 연구. 그런 행동 세그먼트를 수작업 정의 대신 자동 발견하는 도구가 CASTLE.
- [[zong-2022-large-scale-two-photon-calcium]] — 자유행동 마우스 대규모 이미징(MINI2P). 신경 쪽 인프라와 행동 쪽 인프라의 짝; CASTLE의 "closed-loop 제어" 향후 방향과 결합 지점.
- [[wang-2026-multimodal-alignments-of-in]] — 또 다른 측정·정합 방법론 논문(활성↔분자정체). 도구 논문 계열로 나란함.
- [[ha-2024-hypothalamic-neuronal-activation-non-human]] — NHP 자유행동 섭식을 DeepLabCut으로 정량한 실험. 본 논문이 제시하는 label-free 대안의 적용 후보.
- [[concept-need-motivation-pleasure-utility]] — NMPU의 consummatory 미세구조(접근·물기·삼킴·해제)를 행동 클래스로 분해할 계측 수단.
