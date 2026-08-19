---
title: 신경-행동 결합 모델링 (Joint brain–behaviour modelling)
type: concept
created: 2026-08-19
updated: 2026-08-19
aliases: [joint modelling, joint brain-behaviour model, CEBRA, LFADS, contrastive learning, latent dynamics, identifiability, neural decoding]
---

> [!takeaway] 연구 방향 관점의 핵심
> [[concept-computational-ethology|계산 동물행동학]]이 "행동을 어떻게 자동으로 측정할 것인가"를 다룬다면, 이 페이지는 **그렇게 얻은 행동을 신경 데이터와 어떻게 함께 모델링할 것인가**를 다룬다. 사용자 lab에 걸리는 지점은 명확하다 — "AgRP 활성 = Need"([[kim-2024-normative-framework-dissociates-need]]) 같은 주장은 지금까지 **평균 상관·회귀**로 뒷받침돼 왔는데, contrastive 결합 모델(CEBRA류)은 **행동 변수를 auxiliary label로 넣어 latent 정렬 여부를 직접 검정**할 수 있다. 정렬이 안 되면 embedding이 붕괴하므로 **음성 결과도 해석 가능**하다는 점이 특히 유용하다. 반대로 가장 중요한 경계도 여기서 나온다 — **디코딩 정확도는 기전 통찰의 증거가 아니다**. 99% 정확도로 AgRP 활성에서 섭취량을 맞혀도 그것이 "AgRP가 Need를 부호화한다"를 뜻하지 않는다.

# 신경-행동 결합 모델링 (Joint brain–behaviour modelling)

## 한 줄 요약
신경활동과 행동을 각각 분석하지 않고 **하나의 잠재(latent) 공간에서 함께 모델링**해, 둘이 공유하는 구조를 추출하는 방법론 계열.

## 네 가지 모델링 목표
결합분포 `P(behaviour, neural)`를 어떻게 쪼개느냐로 갈린다.

| 목표 | 형식 | 전형적 용도 |
|---|---|---|
| **디코딩** | `P(behaviour \| neural)` | BMI, 신경 표상 내용 추정 |
| **인코딩** | `P(neural \| behaviour)` | 튜닝·수용장 모델 |
| **잠재 모델** | `P(neural)` → latent z | 자기지도로 신경 동역학 구조 발견 |
| **결합 모델** | `P(behaviour, neural)` 직접 | 공유 구조 추출, 가설 검정 |

## 세 계열 (계산 목표 기준)

### 1. Discriminative — 직접 디코딩
- **손실**: MSE(연속), cross-entropy(이산).
- **아키텍처**: CNN·RNN(GRU/LSTM)·**transformer**(현재 최고 성능)·state-space model.
- **강점**: 계산 효율, 특정 예측 과제에 최적, BMI 실전 배치.
- **한계**: 생물학적으로 비현실적인 변환도 허용 → **성능이 높아도 기전 통찰이 없다**. 대형 transformer는 학습 비용·엣지 배치 문제.

### 2. Generative — 재구성으로 latent 학습
- **손실**: reconstruction (MSE, negative log-likelihood, Poisson loss), **ELBO**.
- **대표**: **VAE**, **LFADS**(VAE+RNN으로 신경 동역학을 동역학계로 모델링, trial별 latent 궤적 + 추정 입력), **SLDS**(이산 상태 전이 — 뇌 상태 전환·인지 모드 전환을 드러냄), diffusion model, state-space model.
- **강점**: 불확실성 정량화, 합성 데이터 생성, **다세션 stitching**.
- **한계**: 재구성이 좋은 것과 **의미 있는 latent 구조**가 어긋난다(픽셀 유사도가 지각 품질이 아니듯). Poisson·픽셀 거리 같은 **가정된 메트릭**을 강요. 실행마다 결과가 달라 일관성이 낮다.

### 3. Contrastive — 재구성 없이 latent 학습
- **손실**: **InfoNCE**/NCE — 시간적으로 가까운 표본을 positive pair, 먼 표본을 negative pair로 두고 끌어당기고 밀어낸다.
- **대표**: **CEBRA**(시간 인지 + auxiliary label), **MARBLE**(스파이킹 패턴을 다양체 embedding으로 전처리 후 contrastive), dynamic contrastive learning(SLDS 동역학 사전지식 결합).
- **강점**: 생성 가정 불필요, **identifiability 보장**, **가설 유도 설계 가능**.
- **한계**: 시간창(time window)이 조율 가능하지만 **단일 시간척도**로 제한 — 위계적 time bin으로 확장이 과제.

## 핵심 개념 — identifiability (왜 중요한가)
- 표현 z=f(x)가 **identifiable**하다: 다른 seed·데이터 부분집합·개체로 학습해도 latent가 **선형 변환까지 동일**하게 복원됨.
- 비선형 ICA는 보조정보(시간·클래스 라벨·다중 view) 없이는 **원리적으로 identifiable하지 않다** — 무한히 많은 매핑이 같은 분포를 설명.
- InfoNCE로 최적 학습된 두 모델 f, f̃는 선형변환 L로 f̃(x)=Lf(x) 관계 → **세션 간·개체 간·모달리티 간 비교가 의미를 갖는다**.
- VAE는 이 보장이 없어(구조적 prior·보조변수·지도 목적을 추가하지 않는 한) cross-session 일관성이 떨어진다.

## 가설 검정으로서의 결합 모델
CEBRA류에서 positive pair를 **행동 변수 기준**으로 만들면, "이 행동 변수가 신경 latent에 부호화되는가"를 직접 물을 수 있다.
- 예: "공간이 이 신경집단에 부호화된다"는 가설 → 동물의 위치가 가까운 표본을 positive, 먼 표본을 negative로 샘플링.
- **행동과 신경 사이에 그런 관계가 없으면** contrastive 제약이 동시에 만족될 수 없어 **embedding이 초구면 위 균일분포로 붕괴** → 음성 결과가 해석 가능한 형태로 나온다.

## 평가 — trustworthiness scorecard
성능만으로 벤치마킹하지 말자는 규범적 제안([[mathis-2026-joint-modelling-of-brain-and|Mathis & Mathis 2026]] Table 1).

| 범주 | 지표 |
|---|---|
| 성능 | spike prediction (R², log-likelihood), 행동 디코딩 점수 |
| **신뢰성** | consistency(seed·부분집합 간 embedding 안정성) · robustness(노이즈·결측·adversarial) · **identifiability**(선형 identifiability 테스트) |
| **해석가능성** | XAI attribution 일관성(Shapley·saliency) · representational similarity(CCA · RSA · **CKA** · Procrustes shape metric · dynamic similarity analysis) |

## 열린 과제
- **이질적 데이터 타입** 통합: spike·fMRI·pose 영상의 샘플링률·노이즈 특성·생성기전이 전부 다르다. 비동기·불완전 스트림을 다룰 프레임 부재.
- **모델 선택**: ground-truth latent가 없으므로 학습된 latent가 의미 있는지 판정할 원리적 기준이 없다.
- **현실성 vs 과적합**: 자연주의 실험일수록 행동 변수 수·변동성이 커져 더 복잡한 모델이 필요하지만, 데이터 한계는 더 단순한 모델을 요구한다.
- **inductive bias**: 파운데이션 모델이 커질수록 신경과학 기반 사전지식으로 제약하지 않으면 출력이 기전에서 유리된다.

## 섭식 신경과학 적용 아이디어 (미검증 — 설계 메모)
- **NMPU 분리 검정**: Need(AgRP 활성)·Motivation(LH^LepR)·Pleasure를 각각 auxiliary label로 두고 latent 정렬을 비교 → 세 축이 실제로 분리 가능한 신경 부분공간인지.
- **약물 조건 정렬**: 세마글루타이드 투여 전/후 동일 동물의 신경-행동 latent를 identifiability 테스트로 비교 → 약물이 **표상을 바꾸는지, 같은 표상 위 동작점만 옮기는지** 구분.
- **행동 위계 ↔ 신경 위계**: shMoSeq의 pose→syllable→state 3층을 latent 위계와 대응시켜 "행동 클래스가 신경신호와 정렬되는지" 검증([[concept-computational-ethology]]가 제기한 라벨 타당성 문제).

## 관련 페이지
- [[mathis-2026-joint-modelling-of-brain-and]] — 본 개념의 1차 출처(NRN 2026 리뷰); 3계열 분류·identifiability·scorecard.
- [[mathis-2026-leveraging-insights-from-neuroscience-to]] — 짝 논문(Nat Neurosci); 역방향(뇌→적응형 AI)·prediction error 기반 agentic 아키텍처.
- [[concept-computational-ethology]] — 입력 측 행동 정량화; 본 페이지는 그 출력을 신경과 결합하는 단계.
- [[weinreb-2026-spontaneous-behavior-is-a]] — shMoSeq 3층 시간 위계; "단일 시간척도 syllable" 한계에 대한 대응.
- [[liu-2025-castle-a-training-free-foundation-model]] · [[mueller-2025-privi-towards-general-purpose-video]] — 파운데이션 모델 인코더.
- [[zong-2022-large-scale-two-photon-calcium]] — 대규모 자유행동 신경 기록(입력 측 인프라).
- [[wang-2026-multimodal-alignments-of-in]] — 활성↔분자정체 정합; 다중모달 정렬의 다른 축.
- [[concept-activity-molecular-registration]] — 인접 방법론 hub.
- [[concept-need-motivation-pleasure-utility]] — 검정 대상이 될 이론 틀.
- [[kim-2024-normative-framework-dissociates-need]] — AgRP=Need / LH LepR=Motivation 주장; 결합 모델로 재검정할 1순위 대상.
- [[gershman-2024-explaining-dopamine-prediction-errors-beyond]] — belief-state 잠재 추론; 모델 쪽 대응 문헌.
