---
title: "A lateralized pathway for associating nutrients with flavors"
type: paper
created: 2026-05-01
updated: 2026-05-01
source: "raw/2025 bioRxiv (Knight) A lateralized pathway for associating nutrients with flavors.pdf"
authors: [Grove JCR, Li Q, Backes H, Kuzmanovic B, Choi J, Ubadiah V, Qiu L, Zhang J, Liu Z, Small DM, Tittgemeyer M, Knight ZA]
year: 2025
journal: "bioRxiv 2025.02.09.637334 (preprint)"
---

> [!takeaway] 연구 방향 관점의 핵심
> ★★ **flavor-nutrient learning의 회로 정체 규명**. Knight 랩의 결정타 — VTA-DA 뉴런이 **NAc(canonical reward)가 아닌 left anterior basolateral amygdala (aBLA)** 로 보내는 분리된 신호로 nutrient 가치 학습을 매개. 게다가 mouse·human 모두 **left hemisphere lateralized**. 사용자 lab 관점:
> 1. **[[lee-2025-hijacked-brain-modern-obesity-cue|Hijacked Brain]] 회로 분리**의 실증 — cue/habit (NAc DA) vs nutrient 가치 (BLA DA) 두 채널 분리 → DTx·electroceutical 표적이 회로별로 달라짐.
> 2. **CCK+ VTA-DA 뉴런** subset이 source — [[concept-cck|CCK]]가 이 회로의 분자 marker. CCK 길항제(devazepide)로 lipid의 BLA DA 차단됨을 실증.
> 3. **GLP-1 agonist의 행동 변화 기전** 후보 — anti-obesity 약물의 식이 선호 변화는 NAc보다 이 BLA-D1R 회로 매개일 가능성. ARC AgRP 회로([[park-2025-glucagon-like-peptide-1-and-hypothalamic|Park 2025]])와 평행 검증 필요.
> 4. **Sugar+fat supra-additive** ([[concept-dopamine-reward-system]])의 회로 단위 설명 — sugar(SGLT1)·fat(GPR40/120/CD36) 각각 vagal→nodose→hindbrain→VTA-DA-CCK→aBLA로 평행 전달, aBLA에서 통합.

# A lateralized pathway for associating nutrients with flavors

## 한 줄 요약
VTA-DA neurons → CCK+ subset → **left anterior BLA D1R 뉴런**으로 가는 lateralized 회로가 flavor-nutrient learning을 전담 — NAc도파민·우반구 BLA과는 무관.

## 핵심 내용

### Background
- 동물은 post-ingestive nutrient에 따라 flavor 선호를 학습 ([[concept-flavor-nutrient-conditioning]]).
- 이 학습이 oral taste signals와 gut nutrient signals의 통합을 요구한다는 점은 알려졌으나, 회로 정체 미상.

### Method
- DAT-cre, CCK-cre × DAT-flp 마우스 + 광유전학 (stGtACR 억제, ChR2 자극), photometry (GRAB-DA), miniscope/2-photon imaging, intragastric (IG) catheter, fiber photometry, 인간 [11C]raclopride PET 재분석 + 새 fMRI.

### Result 1 — VTA-DA는 nutrient 학습엔 필수, toxin 학습엔 무관
- VTA-DA 침묵 → flavor-nutrient conditioning 완전 차단 (CS+ pref 35%→81% in control vs 48%→53% in GtACR).
- VTA-DA 침묵 → conditioned taste **aversion** (LiCl pairing)에는 무영향. → **DA는 nutrient-specific**.

### Result 2 — Nutrient 유발 DA 방출은 BLA에만 (NAc·DLS 아님)
- IG Ensure 주입 → BLA에서 DA 18.2±3.5% 상승 (48±11 s 후 시작, 9분 지속). NAc/DLS는 거의 무반응.
- 이는 [[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation|Mohebi 2019]]의 spike/release 분리와 결이 다른 새 차원: **BLA가 별개 표적**.
- 자연 섭취 시도 NAc는 immediate phasic, BLA는 1분 ramp + 지속.

### Result 3 — Anterior BLA에 한정 (posterior BLA는 다른 신호)
- aBLA: nutrient에 강한 DA. pBLA: aversive (LiCl, LPS) 신호에 DA. Lick 자체에는 양쪽 동등 → 기술적 인공물 아님.

### Result 4 — Gut sensor specificity
- Sugar: SGLT1 의존 (mizagliflozin이 차단). Fructose·mannitol(SGLT1 비활성)은 무반응.
- Fat: GPR40/120/CD36 의존 (3중 차단으로 BLA DA 소실). [[steinert-2017-ghrelin-cck-glp-1-pyy-secretory|Steinert 2017]]의 EEC 화학감지기와 일치.
- → BLA DA는 flavor-nutrient learning을 매개하는 **그 동일 gut sensor**들에 의존.

### Result 5 ★ — **Left hemisphere lateralization**
- 같은 마우스에서 양쪽 동시 기록: IG Ensure에 left BLA 18.2% vs right BLA 5.3% (p=5.3e-4).
- Lick 단기 phasic은 right>left (정반대) → 기술 결함 아님.
- **인간 PET 재분석** ([[salamone-2012-mysterious-motivational-functions-mesolimbic|Sandoval/Thanarajah 2019]] 데이터): milkshake 후 DA 방출이 left BLA anterior에 한정.
- **인간 fMRI** (저자 신규): glucose vs water 섭취 시 left aBLA 활성. → **진화 보존**.

### Result 6 — CCK+ VTA-DA 뉴런이 source
- VTA-DA 중 11%만 IG nutrient에 반응. CCK-cre × DAT-flp으로 marker 동정.
- VTA-DA-CCK 뉴런의 61%가 nutrient 활성화. 두 cluster: transient (infusion 동안) + sustained (after).
- VTA-DA-CCK 뉴런은 BLA로 투사 (Poulin 2018 + 본 confirm).

### Result 7 — VTA→aBLA 자극 = flavor 학습 충분, food intake 무관
- aBLA 자극: CS+ pref 50%→90% (학습), but **Ensure intake·self-stimulation 무영향**.
- pBLA·NAc 자극: 학습 무영향. NAc만 self-stim 동기·식이 증가 (canonical role).
- → **이중 분리 (double dissociation)**: NAc=motivation/cue 학습 / aBLA=nutrient 가치 학습.

### Result 8 — aBLA-D1R 뉴런이 oral × gut 신호 통합 + 학습에 필요
- 2-photon: 58%의 aBLA-D1R 뉴런이 sucrose lick에 phasic 활성, IG sucrose에 ramp 활성.
- 같은 cell이 양 신호 인코딩 (Model 1: convergent, 학습은 aBLA 내부에서 일어남).
- aBLA-D1R 침묵 → flavor-nutrient learning 차단, but Ensure 섭취·CTA 정상.

### Claim — Sequential learning model
- (1차) flavor ↔ nutrient: VTA→aBLA 매개.
- (2차) cue ↔ flavor: VTA→NAc 매개.
- 식이 학습은 두 단계의 위계.

## 사용자 lab과의 직접 연결
- **NMPU framework** ([[kim-2024-unified-theoretical-framework-underlying-regulation]]): aBLA = "Utility" (action-outcome 가치) 회로, NAc = "Motivation" (effort/cue) 회로의 분자 정체 후보.
- **DMH GLP-1R cognitive satiation** ([[park-2025-glucagon-like-peptide-1-and-hypothalamic]]): cognitive 만복은 ARC AgRP 억제 + aBLA-D1R 학습 두 경로 가능성.
- **Hijacked brain 5 maladaptive types** ([[lee-2025-hijacked-brain-modern-obesity-cue]]): cue/habit/addiction → NAc, food preference (postingestive 학습) → aBLA. 임상적으로 분리된 표적.
- **Lateralization**의 임상 함의: bariatric 후 좌측 BLA 변화 가능성, 좌측 SES (Klüver-Bucy)의 식이 변화 분자 설명.

## 관련 페이지
- [[concept-flavor-nutrient-conditioning]] — Sclafani 50년 paradigm. 본 논문이 회로 정체 규명.
- [[concept-basolateral-amygdala]] — 본 논문이 만든 새 hub 페이지.
- [[concept-dopamine-reward-system]] — VTA-DA 다원화의 결정적 증거.
- [[concept-cck]] — CCK+가 VTA-DA subset marker로 격상.
- [[concept-vagal-afferent-neurons]] — gut sensor → vagus → nodose → hindbrain → VTA 경로.
- [[concept-interoception]] — 본 논문은 interoceptive learning의 정점 사례.
- [[grove-2022-dopamine-subsystems-track-internal]] — 같은 그룹의 직접 전작 (water/osmolarity).
- [[aitken-2024-negative-feedback-control-of-hypothalamic]] — 같은 Knight lab의 orosensory 짝: 맛→DMH^LepR→AgRP 음성 피드백(본 논문은 post-oral nutrient→VTA-DA) (Neuron 2024).
- [[person-knight-zachary]] — 교신저자 인물 hub.
- [[weber-2025-interoceptive-origin-reinforcement-learning]] — RL 이론적 framework로 본 논문 결과를 통합.
- [[knight-liberles-2025-interoception]] — 같은 호 editorial.
- [[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation]] — DA 신호의 다채널성 또 다른 차원.
- [[lee-2024-feature-specific-prediction-error]] — DA heterogeneity의 RPE 변형 (이 BLA 채널은 RPE 아닐 가능성).
- [[lee-2025-hijacked-brain-modern-obesity-cue]] — 5 maladaptive types의 회로 분리.
- [[park-2025-glucagon-like-peptide-1-and-hypothalamic]] — DMH GLP-1R cognitive satiation과 평행.
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] — NMPU framework의 회로 매핑.
- [[thanarajah-2019-food-intake-recruits-orosensory]] — 인체 PET; 지연 post-ingestive DA·BLA 소견이 본 설치류 VTA-DA-CCK→aBLA 회로와 호응 (Cell Metab 2019).
- [[proposal-oral-fat-taste-pleasure-desire]] — 본 fat post-oral 회로(GPR40/120/CD36→aBLA)를 구강(orosensory) 지방 신호와 분리·대조하는 연구계획서.
