---
title: "Dopamine-independent effect of rewards on choices through hidden-state inference"
type: paper
created: 2026-04-30
updated: 2026-04-30
source: "raw/2024 Nature Neuroscience. Dopamine-independent effect of rewards on choices through hidden-state inference (1).pdf"
authors: [Blanco-Pozo M, Akam T, Walton ME]
year: 2024
journal: "Nature Neuroscience 27:286–297"
---

> [!takeaway] 연구 방향 관점의 핵심
> RPE 논쟁에 가장 강력한 **인과적 도전**. DA 신호는 inferred-value RPE 처럼 보이지만, 가장 큰 DA 반응이 일어나는 outcome 시점의 광유전 자극·억제가 **다음 trial 선택에 영향 없음** (Bayes factor 0.048, "strong evidence" against). 즉, DA-RPE 가 행동 학습을 매개하지 않는다는 직접 증거. 학습은 **PFC recurrent network 의 hidden-state inference** 가 매개. DA 는 (1) RPE-like signal, (2) reward rate, (3) lateralized movement 의 세 분리 신호를 나르지만, 이 task 의 학습은 DA-독립. → [[gershman-2024-explaining-dopamine-prediction-errors-beyond|Gershman 2024]] 의 belief-state RPE 와 호환 (RPE 신호는 inferred value 사용) 하지만 [[hamid-2016-mesolimbic-dopamine-signals-value-work|Hamid 2016]]·[[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation|Mohebi 2019]] 의 "DA 가 학습 신호" 가정에 도전. NMPU framework 에서: motivation·utility 의 trial-to-trial update 가 **반드시 DA 매개일 필요 없음** — cortical recurrent 회로가 동등한 역할 가능. Hijacked brain 의 cue-induced relapse 도 DA-독립 cortical state inference 로 부분 설명 가능.

# Blanco-Pozo, Akam, Walton 2024 — Dopamine-Independent Hidden-State Inference

## 한 줄 요약
Two-step task 에서 DA 는 inferred-value RPE 를 보이지만, **outcome 시점 광유전 자극·억제가 다음 trial 선택에 영향 없음** → 보상의 학습 효과는 DA-RPE 가 아니라 cortical hidden-state inference 가 매개.

## 핵심 주장 (이 논문의 진영)

### "Two-process" framework
- **Cortex (PFC) recurrent network**: 관측 history 로 hidden state 추론, 선택을 trial-to-trial 로 조절. **DA-독립**.
- **Basal ganglia feedforward network**: DA-RPE 로 long-timescale value·policy 학습. 빠른 trial-to-trial 행동 변화는 매개 안 함.
- → DA 는 RPE 처럼 *보이지만*, 실험적 reward 가 행동에 미치는 효과는 DA-RPE 의 결과 아님.

## 핵심 실험 — Two-step task in mice

### Task 구조
- 첫 단계: 좌·우 nose-poke 선택.
- 80% common / 20% rare 로 두 second-step state (up·down) 중 하나 도달.
- 보상 확률은 두 second-step state 에서 **anticorrelated**: 0.8/0.2 ↔ 0.2/0.8 (block 별 reverse).
- → 단일 hidden variable (어느 port 가 우세) 추론으로 task 풀 수 있음.

### Behavioral signature — inference-consistent
- **Common transition + reward** → 같은 first-step 반복 (stay).
- **Rare transition + reward** → 다른 first-step 으로 switch (보상이 *commonly leads to* 한 행동을 강화).
- **Reward 와 omission 의 비대칭**: omission 은 약함, reward 가 강한 영향.
- Single-strategy fit: asymmetric model-based RL 와 asymmetric Bayesian inference 둘 다 데이터 잘 설명 (행동만으로 구분 불가).

## DA 측정 — fiber photometry (GCaMP, dLight)

VTA cell body GCaMP, NAc·DMS axon GCaMP, NAc·DMS dLight (DA release).

### 결정적 발견 1: Inferred-value RPE
- 이전 trial 에서 보상 받은 second-step state 가 *현재 trial* 에 도달하면 → DA ↑.
- 이전 trial 에서 보상 받은 *다른* second-step state 가 도달하면 → DA ↓.
- 후자는 **standard model-based RL 예측과 모순**, **Bayesian inference 예측과 일치**.
- → DA 는 inferred value 를 사용한 RPE.

### 결정적 발견 2: Biphasic NAc DA
- Second-step state 도달 시 + 반응, outcome 시 − 반응 (NAc dLight 에서 가장 뚜렷).
- = 표준 RPE: δ = r + γV_{t+1} − V_t.
- VTA 에서는 outcome 시 negative phase 약함.

### 결정적 발견 3: 세 분리 신호
| 신호 | 시간 척도 | 영역 | 회귀 분석 |
|---|---|---|---|
| **State/action value (RPE)** | Trial event 에 시간잠금 | NAc>VTA>DMS | Biphasic |
| **Reward rate** | Trial 전체에 균일 (sustained) | 모든 영역 | 양의 상수 효과 |
| **Lateralized movement** | Choice·second-step 시점 | DMS (choice), VTA·NAc (return) | Contralateral ↑ |

- → DA 가 단일 함수 아님 ([[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation|Mohebi 2019]] 의 reward rate 발견 직접 재현).

## 결정적 발견 4: 광유전 manipulation — DA-RPE 의 인과적 무력함

### 자극 (ChR2 in VTA DA)
- **Intracranial self-stim**: 강력 작동 (positive control).
- **Choice 후 자극**: 다음 trial 같은 first-step 반복 ↑ (β=0.091, P=0.008) — action reinforcement.
- **Outcome 시점 자극**: 다음 trial 선택에 **영향 전혀 없음** (Bayes factor B=0.048, "strong evidence against" task reward 처럼 작동).
  - DA 반응이 가장 큰 시점인데도.

### 억제 (GtACR2 in VTA DA)
- 2-AFC bias control: 선택 억제 작동 (positive control).
- **Outcome 시점 억제**: 다음 trial 선택에 영향 없음 (B=0.062).
- → 자연 보상의 효과를 차단하지 못함.

### 함의
- DA-RPE 가 outcome 학습 신호의 **충분조건도 필요조건도 아님** — 적어도 이 task 의 hidden-state-driven 행동에서.
- "DA stimulation = reward replacement" 의 textbook 가정이 강력 도전 받음.

## Neural network model — PFC + BG

### 구조
- PFC: gated recurrent units (16개), 다음 관측 예측으로 학습 (unsupervised, gradient descent).
- BG: feedforward ReLU + actor-critic, RPE 로 value·policy 학습.
- 결과: PFC activity 가 hidden-state 추적, BG 가 적절한 행동 선택.

### 핵심 시뮬레이션 결과
- **Reward 가 PFC recurrent activity 변화** → 다음 trial 행동 변화 (BG 가중치 변화 *없이*).
- **Optogenetic stim simulation**: positive RPE 로 BG weight update 모델링.
  - Choice 후 stim → 같은 행동 반복 ↑ (실험 재현).
  - Outcome 후 stim → 다음 trial 선택 무영향 (실험 재현).
- → Cortex 의 빠른 inference + BG 의 느린 RL 이라는 **두 시간척도** framework 가 데이터 설명.

## 진영 비교

| 진영 | 본 논문과의 관계 |
|---|---|
| **Schultz RPE (Montague-Dayan-Schultz)** | **부분 도전** — DA signal 은 RPE 모양 맞음, but 인과적으로 학습 매개 안 함 (이 task 에서). |
| **Belief-state RPE / [[gershman-2024-explaining-dopamine-prediction-errors-beyond|Gershman 2024]]** | **완전 호환** — DA 가 inferred value 로 RPE 계산. 단, 학습 인과성은 본 논문이 더 보수적. |
| **Berke unified value ([[hamid-2016-mesolimbic-dopamine-signals-value-work|Hamid 2016]])** | **부분 도전** — "DA 가 V 신호 broadcast" 는 일부 맞음 (NAc reward rate). 그러나 V→choice 인과는 부정. |
| **[[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation|Mohebi 2019]] dual-channel** | **강력 호환** — reward rate signal 의 firing-독립성과 영역 특이성 재현. |
| **[[salamone-2012-mysterious-motivational-functions-mesolimbic|Salamone effort]]** | 직접 비교 안 함 — but reward rate signal 이 motivation/opportunity cost 와 정합. |
| **Wang 2018 PFC meta-RL** | **개념적 친척** — PFC recurrent 가 빠른 적응. 단 본 논문은 cortex/BG 를 학습 종류로 분리 (unsupervised vs RL). |
| **[[lee-2024-feature-specific-prediction-error|Lee 2024 feature-specific RPE]]** | 호환 — VTA DA 가 inferred value 의 feature 별 분해 가능, but 본 논문 task 는 단일 hidden state. |
| **[[morales-2017-ventral-tegmental-area-cellular-heterogeneity|Morales 2017 heterogeneity]]** | 호환 — 영역별 DA dissociation 재현. |
| **ANCCR (Namboodiri)** | **간접 호환** — backward causal inference 도 cortical state inference 의 한 형태. ANCCR 은 학습 메커니즘, 본 논문은 그 학습이 DA-독립일 수 있음을 보임. |
| **Pharmacological DA studies (Grogan, Eisenegger)** | 일관 — DA 약리 manipulation 이 학습에 약한 효과 보고. |

## 이론적 함의

### "DA 학습 → 행동" 의 직접 인과는 task-dependent
- Action-time stimulation 은 작동 (choice 후 자극 = reinforcement).
- Outcome-time stimulation 은 작동 안 함 (이 task 에서).
- → DA-RPE 가 outcome 신호로서 학습을 매개한다는 가정은 **단순 task 에서만 유효**, hidden-state task 에서는 cortex 의 inference 가 우선.

### Cortex 의 dual role
- **PFC**: state inference, fast trial-to-trial 행동 조절.
- **BG (DA + striatum)**: long-timescale value·policy 학습.
- Bari 2019, Hattori-Komiyama 2022 의 medial frontal/retrosplenial activity 가 reward probability 추적과 정합.

### Tonic DA = reward rate 가설 부분 지지
- DA 가 reward rate 와 sustained 양의 상관 (Niv 2007 opportunity cost theory 부분 지지).
- 단, VTA spike 도 NAc release 와 함께 reward rate 추적 — Mohebi 2019 의 "VTA spike 변화 없음" 결과와 부분 충돌, 가능한 설명: VTA GCaMP 가 dendrite 에서 측정되어 spike 독립.

## 본 wiki 적용

### NMPU framework ([[kim-2024-unified-theoretical-framework-underlying-regulation]])
- **Motivation·Utility 의 trial-to-trial update** 가 DA-RPE 로 매개될 필요 없음 — cortical recurrent 가 동등한 역할.
- Reward rate signal 은 motivation 의 sustained 성분 (effort threshold) 으로 자연스럽게 매핑.
- D2R↓ 비만 모델 재해석: dopaminergic 학습 결손 *외에* cortical state-inference 결손도 별도로 평가 필요.

### Hijacked brain ([[lee-2025-hijacked-brain-modern-obesity-cue]])
- **Cue-evoked**: VTA→NAc DA-RPE 는 cue prediction 학습에 작동 (단순 Pavlovian 측면).
- **Cue-induced relapse**: 흡연·약물 끊은 후 cue 가 강한 association 유지 — DA-independent cortical hidden-state representation 으로 설명 가능. Cortex 가 "use state" 를 inferring → relapse.
- **Habit, restrained**: BG-mediated 일 가능성 ↑ (느린 학습).
- **Emotional, addiction**: cortical state inference 이상이 별도 표적.
- → 5 maladaptive types 에 *cortex vs DA* 차원 추가.

### 비만 D2R↓
- D2R↓ → BG slow learning 결손 — but 빠른 cue 반응성과 cortical relapse 회로는 별도.
- → 약리 표적 분리: DA 약리 (slow learning) vs cortical 회로 약리 (state inference, top-down control).

### Cue-induced relapse 메커니즘 통합
- **DA 모델 단독**: forward TD 로는 cue→drug 연합이 negative PE 누적으로 약화 예측 — 실제와 충돌.
- **ANCCR**: backward causal — 가능.
- **본 논문 cortical inference**: cue 가 hidden "use state" 를 inferring — DA 학습 없이도 강한 행동 영향 가능. 흡연자 cue exposure 효과의 신경기질 후보.

## 한계

1. **단일 task**: 이 task 는 hidden-state inference 가 강하게 유리. 단순 Pavlovian, deterministic instrumental 에서는 DA-RPE 가 학습 매개일 가능성 (Steinberg 2013, Pan 2021).
2. **Outcome-time DA stim 의 인과 무영향이 일반화될지 미확실**: 다른 task structure, deeper neural manipulation 필요.
3. **Cortex-BG 분리**: 본 모델은 anatomically simplified — 실제 PFC 와 striatum 회로 간 상호작용 미반영.
4. **반복 reward 의 누적 효과**: 단일 trial stim 만 검증 — 만성·반복 stim 의 효과 미평가.
5. **Sex 검증**: 7F/5M 균형이지만 sex difference 분석 안 됨.
6. **Strain limitation**: 모두 DAT-Cre 또는 WT C57BL/6 — 다른 종 (rat, primate)에서 재현 필요.
7. **Negative RPE 약함**: omission 효과 약함 — Bayer-Glimcher pause coding 가설과 충돌. lateral habenula 등 비-DA 회로 가능성 남음.

## 관련 페이지
- [[gershman-2024-explaining-dopamine-prediction-errors-beyond]] — belief-state RPE framework. 본 논문이 DA signal 측면에서 지지, 학습 인과 측면에서 보완.
- [[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation]] — reward rate signal 의 firing-독립성 재현.
- [[hamid-2016-mesolimbic-dopamine-signals-value-work]] — unified value 가설. 본 논문의 reward rate 발견과 호환, 학습 인과 측면에서 도전.
- [[salamone-2012-mysterious-motivational-functions-mesolimbic]] — motivation 진영. Reward rate signal 이 effort/opportunity cost 와 정합.
- [[morales-2017-ventral-tegmental-area-cellular-heterogeneity]] — VTA·striatum 영역별 dissociation 의 anatomical 기반.
- [[lee-2024-feature-specific-prediction-error]] — VTA DA 의 feature-별 분해.
- [[adam-2026-dopamine-takes-hit-how-neuroscience]] — RPE 도전 진영의 종합. 본 논문은 핵심 인과 증거.
- [[concept-dopamine-reward-system]] — DA 회로 (cortex-BG framework 추가).
- [[concept-need-motivation-pleasure-utility]] — NMPU 분해 (cortical vs DA 차원 추가).
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] — NMPU framework.
- [[lee-2025-hijacked-brain-modern-obesity-cue]] — cue·habit·addiction 의 cortex vs DA 분리.
