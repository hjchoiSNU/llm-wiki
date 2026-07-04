---
title: Primary reward signals (1차 보상 신호)
type: concept
created: 2026-05-01
updated: 2026-05-01
---

> [!takeaway] 연구 방향 관점의 핵심
> [[weber-2025-interoceptive-origin-reinforcement-learning|Weber 2025]] 가 RL framework에 추가한 핵심 정의 — **primary reward는 외부 자극이 아니라 신체 내부 (post-oral interoceptive) 신호**. 사용자 연구 직격:
> 1. **NMPU의 Utility 성분**과 등가 — 행동 결과 (action-outcome 가치).
> 2. **Sugar/fat/water 분리** 회로로 분자 정체 ([[grove-2022-dopamine-subsystems-track-internal|Grove 2022]] water, [[grove-2025-lateralized-pathway-associating-nutrients|Grove 2025]] sugar/fat).
> 3. **State-driven vs Event-driven** 분류로 음식 vs 음수 회로 차이 설명.

# Primary reward signals (1차 보상 신호)

## 정의 ([[weber-2025-interoceptive-origin-reinforcement-learning|Weber et al. 2025]])

> "a reward signal capable of directly reinforcing behavior by activating the brain's dopamine system without dependence on another underlying reward signal or prior learning (unconditioned stimulus)"

**Primary**:
- 학습 없이 직접 행동 강화.
- DA system 활성.
- Other underlying signal에 의존 안 함.

대조:
- **Secondary reward**: 학습된 신호 (predictive cue, conditioned stimulus). Primary 없으면 reinforcement 유지 못 함.
- **Proxy reward**: oral taste·flavor — 즉시 dopamine·affective 반응 일으키지만 **혼자선 sustainable reinforcement 불가**. "Early affective draft" of expected primary value (Dayan 2022).

## 핵심 명제 ([[weber-2025-interoceptive-origin-reinforcement-learning|Weber 2025]])

음식·음수의 **진짜 reinforcer는 oral taste가 아닌 post-oral interoceptive signal** — 칼로리·영양·수분의 신체 내 효과.

증거:
1. Sweet taste-blind 마우스도 sugar로 flavor 학습 (de Araujo 2008).
2. Sucralose는 long-term DA·flavor 학습 유지 못함 (Tellez 2013).
3. 2DG (ATP 차단)으로 sugar reward 차단 — **glucose oxidation = ATP 생성**이 진짜 reinforcer.
4. IG nutrient 직접 주입만으로 flavor 학습 가능 ([[concept-flavor-nutrient-conditioning|FNC]], Holman 1969).
5. Vagotomy로 fat reward 차단 (Tellez 2013).

## 두 type — State-driven vs Event-driven

### State-driven primary reward (Box 3 Weber 2025)

- 정의: **내부 state의 beneficial change** 자체가 reward.
- Trigger: 결핍이 있을 때만 (homeostatic drive reduction).
- 예: **Water** ([[grove-2022-dopamine-subsystems-track-internal|Grove 2022]]).
  - Hypertonic solution은 reward 안 일으킴.
  - Systemic osmolarity 회복 시점에만 VTA DA 반응.
  - LH GABAergic 뉴런이 fluid balance 추적해서 VTA에 전달.
- Drive (SFO 갈증) ≠ reward — drive는 amplifier만.

### Event-driven primary reward (Box 3 Weber 2025)

- 정의: **physiological event** (예: glucose oxidation) 자체가 reward, state 무관.
- Trigger: 결핍 없어도 작동 ("appetition", Sclafani 2018).
- 예: **Sugar, fat**.
  - 만복 후에도 sugar/fat reinforcing (over-consumption 가능).
  - SGLT1 (sugar) / GPR40+GPR120+CD36 (fat) sensors → vagus → nodose → hindbrain → VTA-DA → DS·**aBLA** ([[grove-2025-lateralized-pathway-associating-nutrients|Grove 2025]]).
- Drive (AgRP hunger) → primary reward gain modulator만, reward 자체 아님.

### 가설: storage capacity가 architecture 결정
- 저장 가능 (food = fat depot) → event-driven, 만복 무관 reinforce → **비만 진화적 압력**.
- 저장 불가 (water = osmolarity 좁은 범위) → state-driven, 결핍 시만 reinforce → over-drinking 안 일어남.
- 함의: money, social reward 등 storable secondary reinforcer는 food와 회로 공유 가능.

## 회로 정체

| Resource | Sensor | Pathway | DA target |
|---|---|---|---|
| Glucose | Hepatoportal vein, upper intestine SGLT1 | Vagus → nodose → hindbrain | DS, **left aBLA** |
| Fat | Upper intestine PPAR-α, GPR40/120, CD36 | Vagus → nodose → hindbrain | DS, **left aBLA** |
| Water | Systemic osmolarity sensor (?) | LH GABAergic → VTA | VTA |

핵심:
- Sugar/fat **separate but parallel** subpopulations (McDougle 2024).
- Sugar+fat **supra-additive** (DiFeliceantonio 2018).
- Water는 별도 architecture (LH input).
- **Left aBLA가 nutrient (sugar/fat) 학습 hub**, NAc는 cue/effort.

## Drive와의 분리 (Box 3 Weber 2025)

| 측면 | Drive 뉴런 (anticipatory) | Primary reward |
|---|---|---|
| 신호 | Expected future deficit | Actual benefit (state change or event) |
| 예 | AgRP, SFO | VTA DA subsets |
| Cue로 inhibit | 즉시 inhibit (Chen 2015) | Cue로 직접 변화 안 함 |
| Allostatic vs ground-truth | Allostatic prediction | Ground-truth correction |
| RL 역할 | Modulator (gain) | TD error 본체 |

→ 사용자 lab의 [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]] 의 **Need (anticipated deficit)** vs **Utility (action-outcome)** 분리와 동일.

## NMPU 매핑 ([[concept-need-motivation-pleasure-utility]])

- **Need** = anticipatory drive (AgRP/SFO) → primary reward의 modulator.
- **Pleasure** = oral proxy reward (taste hedonic).
- **Utility** = primary reward (post-oral)
- **Motivation** = secondary reward + effort (NAc DA dynamics).

## 임상 함의

### 비만의 primary reward 차원
- 현대 음식: sugar+fat 동시 (supra-additive primary reward).
- "Hedonic eating"은 misnomer — 사실 post-oral primary reward 강박일 수 있음 ([[lee-2025-hijacked-brain-modern-obesity-cue|Hijacked Brain]]의 addiction type).

### GLP-1 agonist의 primary reward 영향
- Semaglutide·tirzepatide가 primary reward 직접 약화 vs proxy 약화 — 측정 paradigm 필요 ([[concept-flavor-nutrient-conditioning|FNC]]).

### Bariatric 후 변화
- RYGB 후 sugar primary reward 약화 가능성. EEC redistribute → vagal sensor 변화 ([[de-lartigue-2026-critical-role-gut-brain-signalling|de Lartigue 2026]]).

## Outstanding questions ([[weber-2025-interoceptive-origin-reinforcement-learning|Weber 2025]])
- Protein, Na, vitamin의 primary reward 신호?
- 호흡, 체온, 성, 사회적 자원의 primary reward?
- Storable secondary reinforcer (money)가 food와 회로 공유?
- Multi-dimensional RPE ([[lee-2024-feature-specific-prediction-error|Lee 2024]])와 multiple primary reward의 관계?
- Primary reward의 cognitive goal 일반화 가능성?

## 관련 페이지
- [[weber-2025-interoceptive-origin-reinforcement-learning]] — 본 개념의 정의 출처.
- [[grove-2022-dopamine-subsystems-track-internal]] — water (state-driven) prototype.
- [[grove-2025-lateralized-pathway-associating-nutrients]] — sugar/fat (event-driven) 회로.
- [[li-2022-gut-brain-circuits-for-fat-preference]] — 지방 event-driven primary reward의 gut-brain 회로·수용체(GPR40/120) (Nature 2022, Zuker).
- [[concept-fat-taste]] — 구강 지방(proxy) vs 장 지방(primary) 감지.
- [[concept-cd36]] · [[concept-free-fatty-acid-receptors]] — 지방 sensor 분자.
- [[concept-flavor-nutrient-conditioning]] — primary reward의 행동 paradigm.
- [[concept-interoception]] — primary reward는 interoceptive.
- [[concept-basolateral-amygdala]] — sugar/fat primary reward target.
- [[concept-dopamine-reward-system]] — DA의 자원별 분리.
- [[concept-need-motivation-pleasure-utility]] — NMPU 매핑.
- [[concept-vagal-afferent-neurons]] — peripheral sensor → vagal pathway.
- [[concept-enteroendocrine-cells]] — chemosensor 분자.
- [[concept-lateral-hypothalamus]] — water reward의 LH input.
- [[concept-arcuate-nucleus]] · [[concept-npy-agrp-neurons]] — drive (anticipatory) 분리.
- [[gershman-2024-explaining-dopamine-prediction-errors-beyond]] — RPE framework 호환.
- [[lee-2024-feature-specific-prediction-error]] — multi-dim RPE 호환.
- [[lee-2025-hijacked-brain-modern-obesity-cue]] — 임상 type 분류.
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] — NMPU framework.
- [[proposal-oral-fat-taste-pleasure-desire]] — proxy(구강 지방 맛) vs primary(post-oral 영양) reward 분리를 지방에서 인과 검증하는 연구계획서.
- [[dong-2026-reward-prediction-is-encoded-by]] — 보상 예측 vs 보상 수령 활성 구분.
