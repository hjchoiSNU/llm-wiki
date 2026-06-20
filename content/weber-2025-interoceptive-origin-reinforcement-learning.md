---
title: "The interoceptive origin of reinforcement learning"
type: paper
created: 2026-05-01
updated: 2026-05-01
source: "raw/2025 Trends in Cognitive Sciences. The interoceptive origin of reinforcement learning.pdf"
authors: [Weber LA, Yee DM, Small DM, Petzschner FH]
year: 2025
journal: "Trends Cogn Sci 29(9):840–854"
---

> [!takeaway] 연구 방향 관점의 핵심
> ★★ **NMPU framework의 RL 이론적 동맹**. RL이 30년간 무시한 "reward는 어디서 오는가" 질문에 답: **post-oral interoceptive primary reward signal이 진짜 reinforcer**, oral taste·외부 cue는 보조. 사용자 lab 관점:
> 1. **[[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU framework]]와 직접 호환** — Weber의 "primary reward (post-oral) + proxy reward (oral) + secondary reward (cue)" 3-tier 분류는 NMPU의 4 성분 (Need-Motivation-Pleasure-Utility) 안에 깔끔히 매핑. NMPU 다음 이론적 move 후보.
> 2. **State-driven (water=drive 감소) vs Event-driven (sugar/fat=appetition)** 구분이 식이 vs 음수 회로 분리 정당화. AgRP=hunger drive (anticipatory), VTA-DA=primary reward (ground-truth) — 두 신호가 다름을 명시.
> 3. **VS=hedonic/proxy, DS=action/primary** 분리는 [[grove-2025-lateralized-pathway-associating-nutrients|Grove 2025]]의 NAc/aBLA 분리와 연결 — DS 안에 aBLA가 추가됨.
> 4. **Storable (food)** vs **non-storable (water)** architecture 가설 → 비만 메커니즘 (만복 후에도 reinforcing)의 진화적 설명.

# The interoceptive origin of reinforcement learning

## 한 줄 요약
**Reward는 외부 스칼라가 아니라 신체 내부에서 생성된다** — RL framework를 interoception 기반으로 재정의.

## 핵심 내용

### 핵심 명제
- 전통 RL: reward는 외부에서 주어지는 객관적 신호 (juice 양, 점수).
- 본 review: **biological reward는 organism 내부에서 생성됨**. 음식 reward의 critical signal은 oral taste가 아니라 digestion·absorption 동안의 **post-oral interoceptive signal**.

### Primary reward의 3 사례

**Sugar (carbohydrate)**:
- 비영양 감미료(sucralose)는 long-term DA 방출·flavor 학습 유지 못함.
- Sweet taste-blind 마우스도 sugar-conditioned 선호 형성 → **sweetness 불필요·불충분**.
- 메커니즘: **glucose oxidation → ATP 생성**이 reinforcing. 2DG (글루코스 antimetabolite)가 DA 방출·licking 모두 차단.
- 위치: **hepatoportal vein**의 energy sensor → vagus → DS dopamine. + upper intestine sensor (역할 분리 미상).

**Fat (lipid)**:
- Upper intestine **PPAR-α** 활성 → vagus → nodose → substantia nigra/VTA → DS DA.
- Sugar/fat 경로는 평행하되 **distinct subpopulations** (nodose, hindbrain, midbrain).
- Vagotomy로 차단됨. Sugar+fat의 **supra-additive** 효과 (calorie 동일 대비) — 비만 음식의 strong reinforcer 설명.

**Water**:
- VTA dopamine subset이 systemic osmolarity 변화에 반응 → 수분 균형 추적.
- LH GABAergic 뉴런이 이 VTA subset 구동 ([[grove-2022-dopamine-subsystems-track-internal|Grove 2022]]).
- 수분 보충 시점에 정확히 reinforcing. 탈수 hypertonic solution은 reward 안 일으킴.

### Reward 위계 — Primary, Proxy, Secondary

| 타입 | 신호 | 시점 | 학습 필요 | DA 부위 |
|---|---|---|---|---|
| **Primary** | Post-oral GI/systemic | 분~시간 지연 | 무 | DS |
| **Proxy** | Taste, oral somatosensation | 즉시 | 일부 | VS |
| **Secondary** | Sight, smell (cue) | Pre-oral | 학습 필요 | VS phasic shift |

- **Proxy reward**의 역할: credit assignment + "early affective draft" → primary가 도달하기 전 학습 가속 ("shaping" in RL terms, Dayan 2022).
- 영장류 (Huang & Grabenhorst 2023): trial-by-trial RL이 oral nutrient property에 의존.

### State-driven vs Event-driven primary reward (Box 3)

**State-driven**:
- 수분이 본질적 예 — 내부 state (osmolarity) 개선이 reward.
- 결핍 상태에서만 작동 (탈수가 없으면 물은 reinforcing 안 함).
- Drive (SFO 갈증 뉴런) 별도 회로 — drive는 anticipatory (allostatic), reward는 ground-truth.

**Event-driven**:
- Sugar/fat은 "absolute" 신호 — appetition events.
- 만복 후에도 reinforcing (reward beyond satiation).
- Drive (AgRP)는 modulator일 뿐, primary reward 자체는 결핍 없이 발생.

→ 가설: storable (food) vs non-storable (water) 자원 차이가 회로 architecture 결정. **저장 가능 자원은 결핍 무관 reinforcing → 비만 진화적 압력**.

### Drive의 역할 재정의 (Box 3)
- Hunger neurons (AgRP): cue로 즉시 inhibit ([[concept-npy-agrp-neurons]]) → 실제 칼로리 결핍 아닌 **expected future state** 인코딩 (Reed 2022, Sterling allostasis).
- Thirst (SFO): 동일 패턴.
- 따라서 hunger/thirst 자극이 직접 DA 안 일으킴 — primary reward에 곱해지는 modulator (gain).

### Extended RL framework (Fig. 3)

전통 RL (외부 reward) → 확장 framework:
- **Body**가 environment의 일부로 명시.
- 내부 state는 noisy sensory observation (interoception)으로 추론된 subjective estimate.
- Reward = 1) state distance to goal 감소 (state-driven) 또는 2) physiological event 발생 (event-driven), drive로 amplify.
- **Multi-dimensional RPE** ([[lee-2024-feature-specific-prediction-error|Lee 2024]], Gardner 2018, Dabney 2020)와 호환 — 자원별 분리 채널.

### 미해결 outstanding questions
- 단백질·micronutrient의 primary reward 신호?
- Interoceptive reward와 의사결정 회로 통합 방식?
- 호흡·심혈관 interoception이 reward와 상호작용?
- Money 등 storable secondary reinforcer가 food와 회로 공유?
- Primary reward의 hippocampal credit assignment 기전?

## 사용자 lab과의 직접 연결
- **NMPU 4 성분의 회로 매핑**:
  - Need = AgRP/SFO drive (anticipatory state)
  - Motivation = NAc/cue learning (Mohebi 2019)
  - Pleasure = oral proxy / VS hedonic
  - Utility = post-oral primary / DS / **aBLA** ([[grove-2025-lateralized-pathway-associating-nutrients]])
- **GLP-1 agonist의 RL 효과**: cognitive satiation([[park-2025-glucagon-like-peptide-1-and-hypothalamic]])이 primary reward signal을 직접 조절 vs proxy 조절인지 구분 필요.
- **Hijacked brain 5 types** ([[lee-2025-hijacked-brain-modern-obesity-cue]])의 RL 진단:
  - Cue type → secondary reward 과대
  - Habit type → proxy 과대 (taste-driven)
  - Addiction type → primary 과대 (post-oral 보상)
  - 각 type별 DTx 표적 다름.

## 관련 페이지
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] — NMPU framework, 본 논문과 동일 정신.
- [[concept-need-motivation-pleasure-utility]] — NMPU hub.
- [[concept-interoception]] — 본 논문의 토대 개념.
- [[concept-primary-reward-signals]] — 본 논문이 정의한 핵심.
- [[concept-flavor-nutrient-conditioning]] — primary reward의 행동 paradigm.
- [[grove-2022-dopamine-subsystems-track-internal]] — water primary reward의 실험적 출발점.
- [[grove-2025-lateralized-pathway-associating-nutrients]] — DS 안의 aBLA 회로 추가.
- [[concept-dopamine-reward-system]] — RPE → multi-dim RPE 확장의 RL 측면.
- [[gershman-2024-explaining-dopamine-prediction-errors-beyond]] — belief-state RPE와 호환.
- [[lee-2024-feature-specific-prediction-error]] — multi-dim RPE의 분자 증거.
- [[hamid-2016-mesolimbic-dopamine-signals-value-work]] · [[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation]] — value/motivation 진영.
- [[concept-vagal-afferent-neurons]] — gut→portal/intestine→vagus 경로.
- [[concept-lateral-hypothalamus]] — water reward 회로 hub (LH GABAergic).
- [[concept-arcuate-nucleus]] · [[concept-npy-agrp-neurons]] — drive 인코딩 (anticipatory).
- [[knight-liberles-2025-interoception]] — 같은 분야 frontier overview.
- [[lee-2025-hijacked-brain-modern-obesity-cue]] — RL 분류와 임상 type 매핑.
- [[thanarajah-2019-food-intake-recruits-orosensory]] — 인체 PET; post-ingestive 내수용 신호의 보상 변환(primary reward)을 인체에서 시간분해로 포착 (Cell Metab 2019).
- [[onimus-2026-the-gut-brain-vagal-axis-governs]] — 내수용(미주) tone이 mesolimbic DA를 gating; interoception→reward 변환의 인과 회로 (Sci Adv 2026).
- [[redish-2016-the-computational-complexity-of-valuation]] — value/prediction 단일환원 거부의 계산 관점(가치 다중성·다중 의사결정계) — 같은 가족.
