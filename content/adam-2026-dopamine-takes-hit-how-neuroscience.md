---
title: "What does dopamine actually do?"
type: paper
created: 2026-04-30
updated: 2026-08-19
source: "raw/2026 Nature. Dopamine takes a hit- how neuroscience is rethinking the ‘feel-good’ chemical.pdf"
authors: [Adam D]
year: 2026
journal: "Nature 651:572–574 (Feature)"
---

> [!takeaway] 연구 방향 관점의 핵심
> **Nature Feature 기사** — Reward Prediction Error (RPE) 가설이 흔들리고 있다. 30년간 신경과학을 지배했던 RPE/TDRL 모델을 도전하는 새 데이터들 (Calipari, Namboodiri, Engelhard 등). 도파민이 보상 외에 **action prediction, threat, novelty, movement, attention, working memory**까지 인코딩한다는 증거. **Namboodiri의 ANCCR** (retrospective causal inference) 모델은 RPE의 "역방향" — 보상 후 cue를 거꾸로 찾아 학습. ADHD·중독·정신분열의 임상 모델에 함의. [[kim-2024-unified-theoretical-framework-underlying-regulation|Need-Motivation-Pleasure-Utility framework]]에서 도파민의 역할을 motivation·pleasure 둘 다 또는 그 이상으로 확장 가능성.

# Adam 2026 — What does dopamine actually do? (Nature Feature)

## 한 줄 요약
2026년 5월 Seville Dopamine Society Session 31에서 도파민이 reward만 인코딩하는지 토론 예정. 새 데이터들이 RPE의 **단일 설명력에 도전**.

## RPE 모델 (classic, 1997-)

- **Schultz, Dayan, Montague 1997 Science** (cited 1): 원숭이 도파민 뉴런이 unexpected reward → spike → cue로 transfer → no signal at expected reward → dip if missed.
- 이후 **TDRL** (Temporal Difference Reinforcement Learning)로 확장 — cue→reward 시간 격차 학습.
- 30년간 computational neuroscience의 "shining highlight" (Daw, Princeton).

## 도전 #1: 비-보상 변수 인코딩

- **Engelhard 2019 Nature**: 도파민 뉴런이 maze position·speed 인코딩.
- **Brown 2026 Nature**: 도파민이 goal 가까움 (movement-to-goal) 인코딩, value 자체 아님.
- **Roeser 2023 Nature**: 다중 reward 우선순위 동시 인코딩 (목마른 새는 물 reward만, 짝짓기 시 노래 reward로 retune).

## 도전 #2: 비-보상 자극

- **Kutlu 2021 (Calipari, Vanderbilt)**: foot shock에 도파민 분비 (stress).
- **Menegas 2018 Nat Neurosci**: threat 예측.
- **Kutlu 2022 Nat Neurosci**: 새로움 (novelty).
- **Greenstreet 2025 Nature**: action prediction 인코딩 → 반복 행동·중독 습관 설명 가능.

## 도전 #3: ANCCR (Namboodiri, UCSF)

- **Jeong 2022 Science**: RPE의 역방향 모델 — 보상이 도파민 burst 일으켜 **거꾸로 cue 검색** (memory search).
- 임상 함의: 흡연 중단 후 다른 사람 흡연 cue로 relapse — RPE는 negative prediction error로 약화 예측, 실제는 강한 association 유지. ANCCR은 "보상 → cue back-search"로 설명.
- "I haven't spoken to anyone who understands that model" (Humphries) — 논쟁 중.

## 도전 #4: Calipari의 입장

- 도파민은 단일 기능 아님 — **신경계가 효율적으로 학습하도록 돕는 modulator**.
- 단순 수학 모델은 '인간 뇌'에 직접 적용 어려움.
- "I think it plays a role in whatever you're studying."

## RPE 옹호 (Gershman, Harvard)

- **Gershman 2014 Neural Comput**: dopamine ramping (cue→reward 동안 점진 ↑)도 TDRL 변형으로 설명 가능.
- "ad hoc"이 아니고 의미 있는 수정.

## Dudman (Janelia)의 중도 입장

- "open to trying something quite different" — 새 모델 가능성.
- 측정 기술 (genetically encoded sensors + optical fiber) 발달로 다양한 맥락 측정 가능 → 모델 한계 노출.

## 임상 함의

- **ADHD**: stimulant (methylphenidate)의 도파민 ↑ 작용. RPE 모델이 부정확하면 치료 가설 재검토.
- **중독**: 단순 reward override 아닌 cue-relapse 메커니즘 (ANCCR)으로 치료 표적 변화.
- **정신분열·우울**: motivational deficit 해석 변화.

## 본 wiki 적용

- [[concept-dopamine-reward-system]] 페이지에서 "RPE만"이 아닌 **multi-function dopamine** 관점 명시 필요.
- [[kim-2024-unified-theoretical-framework-underlying-regulation|Kim 2024 framework]]의 **Pleasure** 신경기질이 도파민 단독 아님 시사 — Need·Motivation·Utility까지 도파민이 분담 가능.
- [[lee-2025-hijacked-brain-modern-obesity-cue|Lee 2025 JOMES]]의 food addiction·cue·habit 회로 해석에 직접 영향.

## 관련 페이지
- [[onimus-2026-dopamine-ensembles-regulating-appetite]] — 'reward chemical' 회의론과 같은 패러다임 전환; DA를 분산 ensemble로 재정의 (TEM 2026).
- [[concept-dopamine-reward-system]] — DA 회로 (도전적 관점 포함).
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] — Pleasure component.
- [[lee-2025-hijacked-brain-modern-obesity-cue]] — addiction·cue.
- [[salamone-2012-mysterious-motivational-functions-mesolimbic]], [[morales-2017-ventral-tegmental-area-cellular-heterogeneity]], [[hamid-2016-mesolimbic-dopamine-signals-value-work]], [[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation]], [[gershman-2024-explaining-dopamine-prediction-errors-beyond]], [[lee-2024-feature-specific-prediction-error]], [[blanco-pozo-2024-dopamine-independent-effect-rewards-choices]], [[huang-2024-dopamine-mediated-interactions-between-short]], [[hjort-2026-prefrontal-to-ventral-tegmental-area]], [[rice-2019-closing-in-on-what-motivates]] — 논쟁의 핵심 1차 자료들 (Hjort 2026은 meta-RPE 대안, Rice 2019는 firing≠release 균열).
- [[thanarajah-2019-food-intake-recruits-orosensory]] — 인체 PET; DA를 'nutritional sensor'로 보는 관점 — orosensory vs post-ingestive 시간창 분리 (Cell Metab 2019).
- [[onimus-2026-the-gut-brain-vagal-axis-governs]] — DA를 말초 내수용 신호에 의존하는 'interoceptive gating' 관점으로 재정의 (Sci Adv 2026).
- [[berridge-2023-separating-desire-from-prediction-of]] — 도파민='갈망(incentive salience)'이며 예측가치로 환원 불가; TD/예측처리 진영에 대한 동기-기반 반론 (TiCS 2023).
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
- [[ochan-2026-dopamine-drives-persistent-remodelling-of]] — 도파민 프레임 확장의 구체 사례: 수용체 신호가 아닌 **히스톤 공유결합(H3 dopaminylation)** 이 전사·행동을 인과 매개 (Nature 2026).
- [[concept-h3-dopaminylation]] — 그 작용 양식의 개념 hub.
