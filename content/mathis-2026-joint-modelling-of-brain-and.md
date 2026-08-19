---
title: "Joint modelling of brain and behaviour dynamics with artificial intelligence (Mathis & Mathis 2026, Nature Reviews Neuroscience)"
type: paper
created: 2026-08-19
updated: 2026-08-19
source: "raw/2026 NRN Joint modelling of brain and behaviour dynamics with artificial intelligence (1).pdf"
authors: [Mathis MW, Mathis A]
year: 2026
journal: Nature Reviews Neuroscience
---

> [!takeaway] 연구 방향 관점의 핵심
> **"신경활동 ↔ 행동"을 따로 분석하지 말고 하나의 latent 공간에서 함께 모델링하라**는 방법론 지도. 사용자 lab에 직접 걸리는 지점은 [[concept-computational-ethology|계산 동물행동학]] 페이지가 이미 지적한 병목 — 회로 조작 해상도는 높은데 행동 지표가 "총 섭취량(g)" 수준이라는 비대칭 — 을 **모델 쪽에서 푸는 처방**을 준다는 것. 특히 **CEBRA류 contrastive 접근**은 "AgRP 활성이 Need를 부호화한다" 같은 가설을 **latent 정렬로 직접 검정**할 수 있게 하고(가설 유도 auxiliary label 사용), [[concept-need-motivation-pleasure-utility|NMPU]] 축들이 실제로 신경 latent에서 분리되는지를 묻는 실험 설계로 이어진다. 저자들의 가장 실무적인 경고: **디코딩 정확도만으로 모델을 고르지 마라** — consistency·identifiability·robustness를 함께 재는 **scorecard**를 제안한다. 99% 디코딩 정확도가 기전 통찰을 전혀 안 줄 수 있다는 지적은 섭식 회로 해석에도 그대로 적용된다.

# Joint modelling of brain and behaviour dynamics with artificial intelligence (Mathis & Mathis 2026)

## 한 줄 요약
신경-행동 결합 모델링의 세 계열(**discriminative / generative / contrastive**)을 목적·손실함수·한계 기준으로 정리하고, 성능뿐 아니라 **신뢰성·해석가능성 지표**로 모델을 평가하자고 제안하는 방법론 리뷰.

## 핵심 내용

### 문제 설정
- 신경 쪽(Neuropixels·칼슘 이미징·수천 뉴런 동시기록)과 행동 쪽(마커리스 pose 추정·관성센서·고해상 영상)이 각각 폭발적으로 발전 → 하지만 **분석적으로 통합되지 않으면** 의미가 없다.
- 모델링 목표를 `P(behaviour, neural)` 결합분포로 두고 세 갈래로 분해:
  - **디코딩** `P(behaviour | neural)`
  - **인코딩** `P(neural | behaviour)`
  - **잠재(latent) 모델** `P(neural)` — 자기지도 학습으로 latent z를 얻고 행동과 관계를 봄
  - **결합(joint) 모델** — `P(behaviour, neural)`를 직접 모델링

### 세 가지 계산 목표

| 계열 | 목표 | 대표 손실 | 대표 방법 | 강점 / 한계 |
|---|---|---|---|---|
| **Discriminative** | 신경→행동 예측 | MSE, cross-entropy | CNN·RNN·**transformer** | 계산 효율·BMI에 최적 / 생물학적으로 비현실적 변환도 허용해 **기전 통찰 부족** |
| **Generative** | 입력 재구성 | reconstruction (MSE, NLL), ELBO | **VAE**, **LFADS**, **SLDS**, diffusion, state-space | 불확실성 정량화·합성 데이터 생성·session stitching / **재구성 지표와 의미 있는 latent 구조가 어긋남**, 결과 일관성 부족 |
| **Contrastive** | 재구성 없이 latent 학습 | **InfoNCE**/NCE | **CEBRA**, MARBLE, dynamic contrastive | Poisson/픽셀 유사도 가정 불필요·**identifiability 보장**·가설 유도 가능 / 시간창(time window) 단일 스케일 한계 |

### 왜 contrastive가 특별한가 — identifiability
- **Box 1의 핵심 개념**: 표현 z=f(x)가 "identifiable"하다는 건 서로 다른 seed·세션·개체로 학습해도 latent가 **선형 변환까지 동일**하게 복원된다는 뜻.
- 비선형 ICA는 보조정보(시간·클래스 라벨·다중 view) 없이는 원리적으로 identifiable하지 않다 — 무한히 많은 매핑이 같은 분포를 설명.
- InfoNCE로 학습한 embedding은 온화한 가정 하에 **선형 관계로 서로 연결됨** → 세션 간·개체 간·모달리티 간 비교가 의미를 갖는다. VAE는 이 보장이 없어 cross-session 일관성이 떨어진다.
- **CEBRA**: 시간 인지(time-aware) contrastive loss + **auxiliary label**(행동 변수)로 positive pair를 설계 → "이 행동 변수가 신경 latent에 실제로 부호화되는가"를 **가설 검정처럼** 물을 수 있다. 저자들은 행동-신경 조건분포가 실제로는 무관할 때 contrastive 제약이 **풀리지 않는 최적화 문제**가 되어 embedding이 초구면 위 균일분포로 붕괴한다는 점(즉 음성 결과가 해석 가능)도 짚는다.

### 행동 분석 쪽 — 위계와 다중모달
- 행동은 본질적으로 **위계적**: activity(self-care·Freudensprung·social) → action(groom·locomote·bow down) → **motion primitive**. 게다가 이산적이지 않고 연속적.
- 파이프라인: localization/detection(MegaDetector·Segment Anything) → 2D pose(DeepLabCut·SLEAP) → **3D pose**(다중카메라·depth·단일카메라 lifting) → 행동 식별(rule-based / supervised / unsupervised).
- 비지도 분해: MoSeq류 "syllable" — 대부분 **단일 시간척도** 가정이 약점. hBehaveMAE(위계 masked autoencoder), 다중척도 contrastive가 이를 개선.
- LLM/VLM 활용: AmadeusGPT는 자연어 입력에서 rule-based 분석 코드를 생성. BLIP·Qwen류 vision-language 모델이 **모달리티 정렬**의 청사진 제공.
- **합성 데이터**: Shot7M2(합성 농구) 같은 벤치마크로 위계 행동 latent를 검증.

### 제안 — trustworthiness scorecard (Table 1)
성능 지표만으로 벤치마킹하는 관행을 끝내자는 것이 이 리뷰의 규범적 주장.

| 범주 | 지표 | 의미 |
|---|---|---|
| 성능 | spike prediction (R², log-likelihood) · 행동 디코딩 점수 | 예측 정확도 |
| **신뢰성** | **consistency** (seed·데이터 부분집합 간 embedding 안정성) | 재현성 |
| | **robustness** (노이즈·결측·adversarial) | 실사용 신뢰도 |
| | **identifiability** (선형 identifiability 테스트) | 교차비교 타당성 |
| **해석가능성** | XAI attribution 일관성 (Shapley·saliency) | 설명의 재현성 |
| | representational similarity (CCA·RSA·CKA·**Procrustes shape metric**·dynamic similarity) | latent 공간 정렬 |

### 열린 과제
- **이질적 데이터 타입**(spike·fMRI·영상 pose)의 샘플링률·노이즈·생성기전 차이 → 비동기·불완전·잡음 다중모달 스트림 통합 프레임 부재.
- **모델 선택 문제**: ground-truth latent가 없으므로 학습된 latent가 의미 있는지 판정 곤란. 재구성 오차·디코딩 정확도로는 불충분.
- 자연주의 실험이 늘수록 행동 변수 수와 변동성이 커짐 → **현실성 vs 과적합**의 근본 긴장.
- 대형 transformer·파운데이션 모델은 신경과학 기반 사전지식(inductive bias)으로 제약하지 않으면 출력이 기전에서 유리될 위험.
- 저자들의 장기 전망: 결합 모델을 넘어 **신경계가 정보를 부호화·변환하는 emergent law**(물리학의 보존법칙에 해당하는 것) 발견.

## 관련 페이지
- [[mathis-2026-leveraging-insights-from-neuroscience-to]] — 같은 저자의 짝 논문(Nat Neurosci Perspective). 본 리뷰가 "뇌·행동을 AI로 어떻게 모델링할 것인가"라면, 그쪽은 역방향 — **뇌에서 배워 적응형 AI를 어떻게 만들 것인가**.
- [[concept-joint-brain-behaviour-modelling]] — 본 논문이 정의한 discriminative/generative/contrastive 3분류와 scorecard의 개념 hub.
- [[concept-computational-ethology]] — 행동 정량화 도구 계보; 본 리뷰는 그 출력을 신경 데이터와 **함께 모델링**하는 단계를 다룸.
- [[weinreb-2026-spontaneous-behavior-is-a]] — shMoSeq의 3층 시간 위계는 본 리뷰가 지적한 "단일 시간척도 syllable" 한계에 대한 구체적 대응.
- [[liu-2025-castle-a-training-free-foundation-model]] · [[mueller-2025-privi-towards-general-purpose-video]] — 파운데이션 모델 기반 행동 인코더; Box 2의 논의 대상.
- [[concept-need-motivation-pleasure-utility]] — auxiliary label 기반 contrastive 검정의 자연스러운 적용 대상(Need/Motivation/Pleasure가 latent에서 분리되는가).
- [[zong-2022-large-scale-two-photon-calcium]] — 대규모 자유행동 신경 기록; 결합 모델의 입력 측 인프라.
- [[wang-2026-multimodal-alignments-of-in]] — 활성↔분자정체 정합; "다중모달 정렬"의 또 다른 축.
- [[gershman-2024-explaining-dopamine-prediction-errors-beyond]] — belief-state RPE; latent 상태 추론을 모델 쪽에서 다룬 대응 문헌.
- [[weber-2025-interoceptive-origin-reinforcement-learning]] — AI×Neuroscience 카테고리 인접.
