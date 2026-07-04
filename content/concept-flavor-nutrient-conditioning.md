---
title: Flavor-nutrient conditioning (FNC, 향미-영양 조건화)
type: concept
created: 2026-05-01
updated: 2026-05-01
---

> [!takeaway] 연구 방향 관점의 핵심
> Anthony Sclafani 1969–2018의 50년 paradigm — **칼로리 함량이 oral taste보다 식이 선호 결정에 우월**함을 밝힌 행동 패러다임. [[weber-2025-interoceptive-origin-reinforcement-learning|Weber 2025]] RL framework의 행동적 토대, [[grove-2025-lateralized-pathway-associating-nutrients|Grove 2025]]가 회로 정체 규명 (left aBLA). 사용자 연구 활용:
> 1. **사용자 임상 환자 행동 진단 도구** — "음식 선호가 어떻게 형성되었는가"의 회로별 분류.
> 2. **GLP-1·bariatric 후 식이 변화 측정 paradigm** — FNC 기반.
> 3. **Hijacked brain 5 type 중 'cue/habit'과 'food preference (post-ingestive 학습)' 구분**.

# Flavor-nutrient conditioning (FNC)

## 정의
동물이 **post-ingestive nutrient signal**에 따라 그와 짝 지어진 flavor에 선호를 형성하는 학습. Pavlovian conditioning의 한 형태.

## 핵심 원리 ([[grove-2025-lateralized-pathway-associating-nutrients|Grove 2025]] paradigm)
- 두 flavored solution (예: grape vs lime, 0.2% saccharin + 0.1% Kool-Aid)을 두고:
- **Flavor A**: 마우스가 lick 할 때마다 IG **glucose** 1 μL 주입.
- **Flavor B**: lick 시 IG **water** 1 μL 주입.
- 6일 학습 → 2-bottle test에서 flavor A 선호 ~80%로 상승.

→ Flavor 자체엔 칼로리 없음. **Post-oral nutrient만**이 선호 만듦.

## 핵심 발견들 (Sclafani et al. 50년)

### 1. Sweet taste 불필요·불충분
- Sweet taste-blind 마우스도 sugar로 FNC 형성 (de Araujo 2008).
- Sucralose (비영양 감미료)는 long-term FNC 유지 못함.
- → **Taste ≠ reinforcer**.

### 2. Glucose oxidation이 진짜 reinforcer
- 2DG (glucose antimetabolite, ATP 차단)이 FNC와 DA 방출 동시 차단 (Tellez 2013).
- Mannitol·fructose (SGLT1 비활성)은 FNC 안 됨.
- Galactose·MDG (SGLT1 활성)는 FNC 됨 ([[grove-2025-lateralized-pathway-associating-nutrients|Grove 2025]]).
- → **SGLT1 transporter** + **portal vein glucose oxidation**이 핵심 (Zhang 2018).

### 3. Fat의 평행 경로
- Upper intestine PPAR-α → vagus.
- GPR40/120 + CD36 차단으로 fat-FNC 차단.
- Sugar + fat **supra-additive** — calorie 동일 대비 둘 다 있는 음식이 더 강한 reinforcer ([[concept-dopamine-reward-system]] 비만 단서).
- **미각 비의존 gut-brain 지방 선호** ([[li-2022-gut-brain-circuits-for-fat-preference|Li 2022, Zuker]]): TRPM5-KO(지방 맛맹)도 지방 선호 형성; 두 병렬 미주 경로(CCK-의존 VIP generalist·CCK-비의존 TRPA1 fat-only). 장 수용체는 **[[concept-free-fatty-acid-receptors|GPR40/GPR120]] 필수, [[concept-cd36|CD36]] 불요**(CRISPR) — 구강 미뢰 CD36([[laugerette-2005-cd36-involvement-in-orosensory-detection|Laugerette 2005]])와 부위별 분리.

### 4. Lever press 안 됨, lick만
- 동물은 IG nutrient 받기 위해 lever press 안 함, **lick** 행동만 한다 (Holman 1969).
- → "Privileged pathway" — flavor와 nutrient 사이 hardwired 연결 시사. 이걸 [[grove-2025-lateralized-pathway-associating-nutrients|Grove 2025]]가 회로 정체로 해명.

### 5. CTA와 분리
- Conditioned **taste aversion** (LiCl pairing)은 VTA-DA 침묵·aBLA 침묵에 영향 없음 ([[grove-2025-lateralized-pathway-associating-nutrients|Grove 2025]]).
- → FNC와 CTA는 별도 회로 (BLA의 anterior=appetitive, posterior=aversive).

## 회로 정체 ([[grove-2025-lateralized-pathway-associating-nutrients|Grove 2025]] 결정작)

```
Sugar → SGLT1 → vagus → nodose →    
                                  → hindbrain → VTA-DA-CCK → left aBLA D1R
Fat   → GPR40/120 + CD36 → vagus →   
```

- **VTA-DA**: 필요 (silencing → 학습 차단).
- **NAc-DA**: 무관 (silencing → 학습 정상; VTA→NAc 자극 → 학습 안 일어남).
- **aBLA-D1R**: 필요 (silencing → 학습 차단).
- **VTA→aBLA 자극**: 충분 (학습 유발).

## RL framework 안의 FNC ([[weber-2025-interoceptive-origin-reinforcement-learning|Weber 2025]])

- FNC는 **proxy reward (oral taste) → primary reward (post-oral nutrient)** 학습.
- Flavor가 secondary reward 아님 — primary와 직접 연결.
- 따라서 RL의 standard "TD learning over CS-US"의 변형 — **shaping** 역할에 가까움.
- Credit assignment 문제 (분~시간 지연된 nutrient signal을 lick 행동에 어떻게 부여?) 의 자연 실험.

## Storage 가설 ([[weber-2025-interoceptive-origin-reinforcement-learning|Weber 2025]])

- **저장 가능 자원** (food = fat 저장): 만복 후에도 reinforcing → over-consumption 진화적 압력 → **비만**.
- **저장 불가 자원** (water): 결핍 시점에만 reinforcing → over-drinking 안 일어남.
- → FNC가 식이 회로에 작동하는 방식과 water reward 회로 ([[grove-2022-dopamine-subsystems-track-internal|Grove 2022]])의 차이를 진화적으로 설명.

## Flavor-toxin avoidance (CTA)와의 분리

| 측면 | FNC | CTA |
|---|---|---|
| Outcome | 영양 → 선호 ↑ | LiCl·toxin → 회피 |
| 학습 시간 | 분 ~ 시간 (slow) | 빠름 (one-trial) |
| 시간 지연 허용 | 짧아야 함 (overlap 필요) | 김 (수 시간 OK) |
| VTA-DA | 필요 | 불필요 |
| BLA 부위 | Anterior | Posterior (Grove 2025) |
| Vagal afferent | 필요 (sugar/fat sensor) | LiCl: AP·NTS 별도 회로 |

## 임상·DTx 응용

### 진단
- 환자의 비만 표현형을 FNC 회로 단위로 분류:
- "**Cue-reactive type**" ([[lee-2025-hijacked-brain-modern-obesity-cue|Hijacked brain]]) — secondary reward 과대.
- "**Postingestive learner type**" — FNC 과대 활성, aBLA-D1R 강화 가설.

### GLP-1 agonist 효과 측정
- Semaglutide·tirzepatide가 FNC를 약화시키는지? (직접 측정 가능 paradigm.)
- DMH GLP-1R cognitive satiation ([[park-2025-glucagon-like-peptide-1-and-hypothalamic]])이 FNC와 어떻게 연결?

### Bariatric 후 변화
- RYGB 후 sweet preference 감소·fat aversion 증가 — FNC 회로 재구성.
- 회로 단위 측정 paradigm 후보.

## 주요 paradigm variant
- **Closed-loop FNC** ([[grove-2025-lateralized-pathway-associating-nutrients|Grove 2025]]): lick-triggered IG infusion. 자연 행동 가까움.
- **Delayed FNC**: flavor consumption 후 한참 뒤 IG infusion → 학습 안 됨 (overlap 필요, Grove 2025 Extended Fig 9a).
- **Optogenetic FNC**: VTA→aBLA 자극이 nutrient signal 대체 → 학습 충분.

## 관련 페이지
- [[grove-2025-lateralized-pathway-associating-nutrients]] — 회로 정체 규명.
- [[li-2022-gut-brain-circuits-for-fat-preference]] — 미각 비의존 gut-brain 지방 선호·두 병렬 미주 경로 (Nature 2022, Zuker).
- [[concept-fat-taste]] — 구강 지방 감지(proxy) — post-oral과 대비.
- [[concept-cd36]] · [[concept-free-fatty-acid-receptors]] — 지방 sensor(구강 CD36 vs 장 GPR40/120).
- [[aitken-2024-negative-feedback-control-of-hypothalamic]] — 맛(sweet/fat) vs 칼로리 분리; 영양분이 DMH^LepR 맛 응답을 시간에 걸쳐 potentiate (Neuron 2024, Knight lab).
- [[weber-2025-interoceptive-origin-reinforcement-learning]] — RL framework.
- [[concept-basolateral-amygdala]] — aBLA가 학습 hub.
- [[concept-primary-reward-signals]] — FNC가 primary reward의 prototype 행동.
- [[concept-dopamine-reward-system]] — DA의 자원·표적별 분리.
- [[concept-vagal-afferent-neurons]] — sensor → vagus → 회로.
- [[concept-enteroendocrine-cells]] — sugar/fat sensor.
- [[concept-cck]] — fat 회로의 핵심 + VTA-DA-CCK marker.
- [[concept-interoception]] — interoceptive learning prototype.
- [[lee-2025-hijacked-brain-modern-obesity-cue]] — 임상 type 분류.
- [[park-2025-glucagon-like-peptide-1-and-hypothalamic]] — GLP-1 cognitive satiety와 평행.
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] — NMPU의 Utility 회로.
- [[steinert-2017-ghrelin-cck-glp-1-pyy-secretory]] — gut hormone 종합 (FNC sensor 분자).
- [[proposal-oral-fat-taste-pleasure-desire]] — taste≠reinforcer(sucralose) 논리를 구강 지방에 적용; oral vs post-oral 지방 신호 분리 연구계획서.
- [[woods-1991-the-eating-paradox-how]] — 맛-대사결과 학습(cephalic 조건화)의 이론 배경.
