---
title: "Explaining dopamine through prediction errors and beyond"
type: paper
created: 2026-04-30
updated: 2026-04-30
source: "raw/2024 Nature Neuroscience Explaining dopamine through prediction errors and beyond.pdf"
authors: [Gershman SJ, Assad JA, Datta SR, Linderman SW, Sabatini BL, Uchida N, Wilbrecht L]
year: 2024
journal: "Nature Neuroscience (Perspective)"
---

> [!takeaway] 연구 방향 관점의 핵심
> RPE 진영의 **현 시점 (2024) 종합 방어**. Schultz·Dayan·Montague 1997 이후 RPE 가설이 너무 단순함을 인정하고, "**generalized prediction error**" 로 확장. 3대 도전 (ramping, sensory feature 인코딩, action selection)은 모두 RPE framework 안에서 설명 가능 — but **ANCCR·perceived saliency·adaptive learning rate** 등 일부 새 데이터는 framework 밖. **Vector-valued PE** + **successor representation** + **average reward** 통합 framework 제안. [[adam-2026-dopamine-takes-hit-how-neuroscience|Adam 2026]] 의 Gershman 옹호 입장의 학술적 backbone. [[hamid-2016-mesolimbic-dopamine-signals-value-work|Hamid 2016]] 와 [[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation|Mohebi 2019]] 데이터를 모두 RPE 변형으로 흡수. NMPU 식 분해 모델과 호환 — Pleasure·Motivation 매개 신호가 단일 RPE 가 아닌 **다중 generalized value functions** (각자 분리된 striatal target) 으로 분산.

# Gershman et al. 2024 — Explaining Dopamine Through Prediction Errors and Beyond

## 한 줄 요약
RPE 가설은 원형 그대로는 부족하지만, **suitably generalized** (vector PE, successor representation, average reward 등)로 확장하면 대부분의 데이터를 흡수 가능. 단 일부 (ANCCR, perceived saliency)는 framework 밖.

## 핵심 주장 (이 논문의 진영)

### "Generalized RPE" 진영
- RPE = 단일 가설 아니라 **family of models**. RL framework 안에서 다양한 변형 가능.
- 모든 변형의 공통점: **temporal difference learning** + **prediction error**.
- "RPE 폐기는 시기상조" — Gershman 의 일관 입장.

### Adam 2026 의 두 진영 매핑
| Adam 2026 진영 | 본 논문과 관계 |
|---|---|
| RPE 옹호 (Gershman) | **본 논문** = Gershman lab 종합 |
| 다기능 modulator (Calipari) | **부분 인정** — generalized PE 로 흡수 시도 |
| ANCCR (Namboodiri) | **framework 밖** 인정 — challenge |
| 중도 (Dudman) | 본 논문이 인용 (Coddington 2023 adaptive learning rate) |

## 3대 도전과 RPE 답변

### 도전 1: Ramping ([[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation|Mohebi 2019]])
**문제**: 동물이 보상에 다가갈수록 DA ramps. RPE는 zero 여야 함.

**RPE 답변**:
- 보상 직전: RPE ≈ V의 시간 미분 (γ→1).
- V 함수가 **convex** 하면 RPE도 ramp.
- **State uncertainty**: 시간 추정 noise → optimal V 가 true V 를 overestimate → 이를 correction (decay 항 추가)하면 RPE가 ramp 형태로 수렴 (Mikhael 2022, Cell).
- **Pavlovian vs spatial navigation 차이**: Pavlovian 은 sensory feedback 없음 → ramping 없음 (no decay needed). Spatial 은 feedback ↑ → ramping.
- **Kim 2020 Cell 결정 실험**: virtual reality teleport. 같은 위치에 짧은/긴 distance 에서 teleport → V 이론은 같은 응답 예측, RPE 이론은 long distance 응답 ↑ 예측. **데이터: RPE 일치**.

**대안**:
- Hamid 2021 (wave-like DA, expert architecture).
- Internal model로 progress 계산 (Guru et al.).

### 도전 2: 비-보상 sensory feature 인코딩
**문제**: DA neuron 이 novelty, threat, sensory feature 인코딩.

**RPE 답변**:
- **Novelty bonus** (Kakade & Dayan 2002): exploration 권장 위해 V를 optimistic 초기화 → "novelty = positive RPE".
- **Generalized PE** (Gardner 2018, Lee 2022): scalar RPE 대신 **vector PE** — 각 sensory feature 별 PE.
- **Successor representation** (Dayan 1993, Gershman 2018): "predictive map" — 각 state 의 미래 occupancy 예측. Hippocampus 가 매개 가능.
- **Sensory preconditioning** (Sharpe 2017): A-B 학습 phase 의 DA 차단 → 후속 generalization 차단 → DA 가 **model-based** 학습 매개.
- **Identity unblocking** (Chang 2017): reinforcer 종류 변경시 unblocking → DA 가 sensory prediction 매개.

**구현**: 
- **Labeled-line code**: 다른 DA subpopulation 이 다른 feature PE 인코딩 (예: tail of striatum = threat PE; ventral striatum = reward PE) — Menegas 2017, Akiti 2022.
- **Distributed code**: Stalnaker 2019 — single DA neuron 은 reward identity 구별 못 함, but **ensemble** 은 가능 → demixing 필요.

### 도전 3: 행동 선택 (action selection)
**문제**: DA 가 행동·vigor 인코딩. 단순 학습 신호 아님.

**RPE 답변**:
- **Off-policy RL (Q-learning)** + action surprise (Lindsey & Litwin-Kumar 2022): DA 가 RPE + action surprise 합. 비특이적 motor surprise 설명.
- **Action prediction error** (Greenstreet 2022, tail of striatum): 익숙한 action 이 unfamiliar cue 에 의해 trigger → DA spike — value-free action PE.
- **Average reward 모델** (Niv 2007, Wan 2021): tonic DA = 평균 reward → vigor 조절. 식이 노력 비용 적정 수준 결정.
- **Goal-directed planning** (Bogacz 2020): RPE 가 ventral striatum 에서 V 학습 + dorsal striatum 에서 policy 학습 통합.
- **Phasic vs tonic 통합**: Wan 2021 평균 reward TD-learning — 같은 DA 신호가 두 역할 (Box 4).

## RPE Framework 안에서 설명되는 주요 현상

| 현상 | RPE 설명 |
|---|---|
| Schultz cue→reward transfer | Forward TD-learning |
| Aversion DA 반응 | Vector PE (threat channel) |
| Novelty | Optimistic initialization or novelty bonus |
| Heterogeneous tuning (Engelhard 2019) | Generalized PE / vector RPE |
| Ramping (Hamid 2016, Mohebi 2019) | Value decay + state uncertainty |
| Reinforcer identity (Stalnaker 2019) | Distributed PE ensemble |
| Action prediction (Greenstreet 2022) | Action surprise (Q-learning) |
| Vigor (Hamid 2016) | Average reward + RPE 통합 |
| Mohebi 2019 firing-release dissociation | Local control + broadcast 모두 framework 안 |

## "Beyond RPE" — Framework 밖 도전

### 1. Perceived saliency (Kutlu 2021, 2022)
- DA 가 stimulus saliency × attentional value 인코딩.
- 보상 누락 시 DA 증가 — RPE positive 이 아님 (보상 자체에 더 큰 응답).
- Latent inhibition: pre-exposure 동안 DA 자극이 후속 학습 가속 (RPE 예측: 학습 변화 없음 — 첫 trial 에 응답 동일).

### 2. ANCCR / 회고 인과 추론 (Jeong 2022 Science, Namboodiri)
- DA 가 "보상 → cue back-search" — RPE 의 forward 인과 역전.
- Uncued reward 가 반복되면 DA ↑ (RPE 예측: ↓ — context 학습 후 expected).
- 본 논문은 "Qian 2024 가 일부 ANCCR 주장 도전" 인용 — 논쟁 중.

### 3. Adaptive learning rate (Coddington 2023)
- DA 가 RPE 가 아닌 **adaptive learning rate** 신호 — preparatory + reactive 행동 통합.
- 학습 초기 cue·reward dynamics 분리 — RPE 예측과 달라.

## "Generalized prediction error" 통합 framework (Fig. 4)

```
Outcome (reward, movement, threat, salience, ...)
    ↓
Dopamine (vector PE for each cumulant)
    ↓
Striatum (generalized value functions per target)
    ↓
Cortex (state, world model)
```

- **Cumulants** (g_t): reward, movement, threat, salience 등 다양한 outcome 변수.
- **Generalized value function** (G_t): 각 cumulant 의 시간-할인 미래 합.
- **Vector PE** (δ_t): 각 cumulant 별 prediction error.
- 다른 striatal target 이 다른 PE 받음 (예: ventral = reward; tail = threat).

## 진영 비교 (재정리)

| 진영 | 본 논문과 입장 |
|---|---|
| **Schultz RPE 단순형 (1997)** | "원형 그대로는 부족" 인정, but framework 보존. |
| **Salamone effort/motivation** | Average reward 모델로 흡수 — tonic DA 가 vigor 매개. |
| **Hamid 2016 unified value** | RPE의 V signal 변형 — 호환. |
| **Mohebi 2019 dual-channel** | Framework 안에서 broadcast (firing) + local control (release) 양립. |
| **Morales 2017 heterogeneity** | Vector PE / generalized PE 의 anatomical 기반. |
| **ANCCR (Namboodiri)** | **Framework 밖** 인정 — 논쟁 중. |
| **Calipari modulator** | Generalized PE 로 부분 흡수 — but 단일 함수 거부 입장은 보존. |
| **Perceived saliency (Kutlu)** | **Framework 밖** 인정 — challenge. |

## 본 wiki 적용

### NMPU framework ([[kim-2024-unified-theoretical-framework-underlying-regulation]])
- **Generalized prediction error 의 vector 구성요소가 NMPU 4 성분에 매핑 가능**:
  - Need cumulant → ARC-hypothalamic input → DA tail 등.
  - Motivation cumulant → reward rate average → tonic DA.
  - Pleasure cumulant → hedonic feature PE → ventral NAc.
  - Utility cumulant → reward magnitude PE → mesolimbic core.
- → NMPU의 분해 모델이 generalized PE 의 vector 구조와 호환.

### Hijacked brain ([[lee-2025-hijacked-brain-modern-obesity-cue]])
- **5 maladaptive types** 가 다른 PE channel 에 매핑:
  - Cue-evoked: reward PE (forward TD-learning).
  - Habit: action prediction error (tail of striatum).
  - Addiction: average reward + reward PE 의 비정상 amplification.
  - Emotional: threat PE / saliency PE.
  - Restrained: cortical top-down — PE 자체는 정상.
- 식이 행동의 분자 표적은 **PE channel 별로 다른 striatal subregion**.

### 비만 D2R↓ 재해석
- D2R↓ → indirect pathway 약화 → policy 업데이트 비대칭.
- "negative PE 약화" 가 아닌 **action discouragement 약화** → 강박 식이.
- Jaskir & Frank 2023 opponent actor learning 의 임상 모델.

### Cue-induced relapse
- RPE 만으로 안 됨 — Gershman 도 인정.
- Generalized PE: cue 가 multi-feature PE evoke → forward 학습 + saliency.
- ANCCR 와 host 가능 — Gershman 은 "framework 밖" 인정 후 통합 시도 중.

## 한계 / 미해결 challenge

1. **"무엇이든 RPE 로 설명 가능"의 비판** — Salamone 2012 이 지적한 "ad hoc 변형" 위험. 
   - 본 논문은 "computational rationale 에 근거" 라고 방어 — 단순 fitting 아니라 normative argument.
2. **Negative RPE 약함**: pause duration 으로 negative RPE 가 강하게 인코딩되지 않음 (Mohebi 2019, 본 논문 인용).
3. **Hippocampus as predictive map** 미입증 — Stachenfeld 2017 모델 이론적.
4. **Synaptic-level resolution 부족**: 기능적 분리가 어디서 일어나는지 미해결.
5. **PKA signaling 시간 척도 (10 s)** vs phasic DA (ms): credit assignment 어려움.

## 관련 페이지
- [[adam-2026-dopamine-takes-hit-how-neuroscience]] — Gershman 의 RPE 옹호 입장 인용 source.
- [[hamid-2016-mesolimbic-dopamine-signals-value-work]] — value signal RPE 통합.
- [[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation]] — broadcast + local control framework.
- [[salamone-2012-mysterious-motivational-functions-mesolimbic]] — average reward 통합.
- [[morales-2017-ventral-tegmental-area-cellular-heterogeneity]] — vector PE anatomical.
- [[hjort-2026-prefrontal-to-ventral-tegmental-area]] — meta-RPE(RPE의 rolling-gain) 모델이 단순 RPE 변형들을 능가; contingency degradation (Nature 2026).
- [[concept-dopamine-reward-system]] — DA 회로.
- [[concept-need-motivation-pleasure-utility]] — NMPU 분해.
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] — NMPU framework.
- [[lee-2025-hijacked-brain-modern-obesity-cue]] — 5 maladaptive types.
