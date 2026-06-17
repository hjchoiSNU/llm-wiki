---
title: Appetite & energy homeostasis — synthesis
type: overview
created: 2026-04-29
updated: 2026-05-31
---

> [!takeaway] 연구 방향 관점의 핵심
> 섭식·에너지 항상성을 **세 layer로 통합**: (1) **이론** — Need-Motivation-Pleasure-Utility framework ([[kim-2024-unified-theoretical-framework-underlying-regulation|Kim 2024]]); (2) **회로** — Gut → Vagus → DVC → ARC ↔ LH ↔ VTA/NAc; (3) **약리·임상** — GLP-1RA / 5 maladaptive eating types / DTx·electroceutical. 사용자 lab 4편 ([[kim-2024-unified-theoretical-framework-underlying-regulation|BioEssays]] · [[cheon-2025-lateral-hypothalamus-and-eating-cell|EMM]] · [[park-2025-glucagon-like-peptide-1-and-hypothalamic|DMJ]] · [[lee-2025-hijacked-brain-modern-obesity-cue|JOMES]] + [[de-lartigue-2026-critical-role-gut-brain-signalling|NRGH]] 공저)이 본 framework의 spine.

# Appetite & energy homeostasis (synthesis)

## Layer 1 — 이론 framework

[[concept-need-motivation-pleasure-utility|Need-Motivation-Pleasure-Utility (NMPU)]]:

| Component | 음식 맥락 | 신경기질 후보 |
|---|---|---|
| **Need** | 예측된 결핍 | [[concept-npy-agrp-neurons\|ARC AgRP]] |
| **Motivation** | 행동 driver | [[concept-lateral-hypothalamus\|LH]], [[concept-dopamine-reward-system\|VTA·NAc]] |
| **Pleasure** | 즉각 결과 | NAc·VP·IC, dopamine |
| **Utility** | 지연 결과 | NTS, VMH, BLA dopamine |

**Bidirectional cycle**: Sensory cue → Need → Motivation → Behavior → Pleasure → next Motivation; 그리고 Utility → Pleasure·Need·Motivation 알고리즘 reshape.

**자매 framework — granular motivational states** ([[liu-2026-granular-motivational-interaction-and|Liu·Wang 2026 Neuron]]): NMPU가 동기의 *구성요소*(축)를 분해한다면, 이 리뷰는 동기의 *시간적 sub-state*(food seeking→approaching→investigation→sustained eating→satiation→aversion)를 분해하고 5 phase(preparation·initiation·maintenance·interruption·termination)별 전용 회로를 매핑. 둘은 경쟁이 아닌 **직교 보완** — NMPU의 Motivation 축이 preparation·initiation phase로 시간 전개됨.

## Layer 2 — 회로

### Gut → Brain
[[de-lartigue-2026-critical-role-gut-brain-signalling|NRGH 2026]]: [[concept-vagal-afferent-neurons|VANs]]가 1차 conduit. Mechanosensors (Glp1r⁺·Oxtr⁺) + chemosensors (Cckar⁺·Gpr65⁺·Vip⁺·TRPA1⁺) + 4 signaling mode (endocrine·neurocrine·paracrine·**neuropod**).

### 호르몬 phase별 ([[steinert-2017-ghrelin-cck-glp-1-pyy-secretory|Steinert 2017]])

| Phase | 시간척도 | 주 신호 | 출처 | 1차 작용 |
|---|---|---|---|---|
| 식전 (premeal) | 분~시간 | [[concept-ghrelin\|Ghrelin]] | 위 oxyntic | NPY/AgRP↑ |
| 식사 중 (intra-meal) | 분 | [[concept-cck\|CCK]] | I-cells (근위 소장) | Vagal→NTS satiation |
| 식후 (postprandial) | 30분~수시간 | [[concept-glp-1\|GLP-1]], [[concept-pyy-3-36\|PYY(3-36)]] | L-cells (원위 소장) | β-cell, 위 배출, NTS |
| 장기 (tonic) | 일~주 | [[concept-leptin\|Leptin]] | 지방조직 | POMC↑, NPY/AgRP↓ |

### 시상하부 통합

```
        Sensory cue (sight/smell/taste of food)
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
      DMH GLP-1R   DMH LepR    LH^Vglut2
          │            │            │
          └────────────┴───→ ARC AgRP
                              (feed-forward 억제)
                              = Need 갱신

   Gut hormones ──→ ARC AgRP / POMC ──→ PVH / DMH / LH
                                            │
                                            ▼
                                      VTA → NAc
                                        (Motivation/Pleasure)
```

[[park-2025-glucagon-like-peptide-1-and-hypothalamic|DMJ 2025]]: DMH GLP-1R 뉴런이 음식 인지 단계 satiation 매개.

### LH 통합 ([[cheon-2025-lateral-hypothalamus-and-eating-cell|EMM 2025]])
- 4 subdivisions × 다양한 cell type (Vgat·Vglut2·Lepr·Orx·Mch·Nts·Penk).
- **Appetitive vs consummatory** ([[concept-appetitive-consummatory-phases]]) — 별도 ensemble.
- LH GABAergic → VTA disinhibition → NAc DA → **pleasure-induced eating**.
- LH-VTA glutamatergic 강화 → **stress-induced eating**.

### 인간 입증 현황 (Steinert 2017 Table 5)

| 호르몬 | 식이 | GI 운동성 | 혈당 |
|---|---|---|---|
| Ghrelin | ?/? | ?/? | ?/? |
| **CCK** | **YES/YES** ✓ | Yes/Yes | YES/No |
| GLP-1 | YES/No | Yes/Yes | **YES/YES** ✓ |
| PYY(3-36) | No/? (illness) | Yes/? | ?/? |

→ CCK satiation과 GLP-1 incretin만 인간에서 완전 입증.

### Local signaling 한계
[[concept-enteroendocrine-cells]]: 농도 hierarchy (neuropod > vagal > paracrine > portal > systemic). 인간 IV로 paracrine·neuropod 재현 불가 — 동물에서만.

### RYGB 자연 실험
- CCK ↑(~2배), GLP-1 ↑↑↑(>10배), PYY ↑↑.
- 인간 GLP-1 매개 대사 효과 명확; 동물 RYGB는 다른 기전.

## Layer 3 — 임상·약리·DTx

### 5 Maladaptive eating types ([[lee-2025-hijacked-brain-modern-obesity-cue|JOMES 2025]])

| Type | 회로 dysregulation |
|---|---|
| **Cue-evoked** | OFC·ventral striatum hyperactive, dlPFC ↓ |
| **Habitual-context** | dorsolateral striatum ↑, vmPFC·caudate ↓ |
| **Food addiction** | VTA→NAc DA, OFC, amygdala; D2R ↓ |
| **Emotional eating** | amygdala·insula·vmPFC ↑, dlPFC ↓; HPA·cortisol → leptin 저항 |
| **Restrained eating** | ACC·dlPFC·OFC·NAc·insula 동시 ↑ — 통제 vs 보상 충돌 |

### 약물
| 표적 | 약물 | NMPU |
|---|---|---|
| 일반 비만 | **GLP-1RA** (semaglutide) | Need·Motivation ↓ |
| GIP/GLP-1 dual | tirzepatide | + 더 강함 |
| GLP-1/GIP + PPARα/γ/δ | 5중작용제 ([[liskiewicz-2026-glp-1r-gipr-ppar\|Liskiewicz 2026]]) | incretin Need·Motivation↓ + PPAR 대사 (전임상) |
| MC4R | setmelanotide | Utility downstream |
| Pleasure | bupropion-naltrexone | NAc opioid |
| Anorexia | ghrelin agonist | Need ↑ |
| Leptin 결핍 | metreleptin | Need 회복 |

### DTx (digital therapeutics)
- CBT 기반 + EMA 실시간 + AI 코칭 + VR cue exposure.
- 본 lab Kim 2020 RCT (multidimensional CBT-DTx).

### Electroceuticals
- tDCS·rTMS (dlPFC) → cue·habit 억제.
- TIS·tFUS → 심부 회로 (NAc·LH).
- taVNS → vagal interoception 회복.

### 3-stage diet-induced obesity
[[de-lartigue-2026-critical-role-gut-brain-signalling|NRGH 2026]]:
1. Reinforcement-driven (DA reinforcement)
2. Compensatory (vagal mechano titration — 보호)
3. **Vagal dysfunction** (terminal remodelling, leptin resistance, CART ↓) — 돌이킬 수 없는 시점

## 핵심 lessons

1. **NMPU framework**가 회로·약물·임상 표현형을 통합하는 lens.
2. **인간 ↔ 동물 차이**: leptin·ghrelin은 큼; GLP-1·CCK는 비교적 일관.
3. **Cognitive satiation** (DMH GLP-1R)이 GLP-1RA 효과의 인지 차원 — 단순 위장 작용 X.
4. **Vagal dysfunction**이 비만의 sustained driver — GLP-1RA 우회로는 근본 미해결.
5. **5 maladaptive eating types**별 personalized 표적이 차세대 임상.
6. **도파민 ≠ pure RPE** ([[adam-2026-dopamine-takes-hit-how-neuroscience]]) — multi-function 재정의 진행 중.

## 정리된 페이지

### 논문 (26)
- [[gao-2026-semaglutide-drives-weight-loss-through]] — Nat Metab 2026 (Krashes lab); 세마글루타이드 1차 표적=area postrema·Gs–cAMP 필수·Gq permissive·PDE4·downstream elPBN.
- [[liskiewicz-2026-glp-1r-gipr-ppar]] — Nature 2026 (Müller lab); GLP-1R–GIPR 이중 펩타이드(MAR709)+PPARα/γ/δ(lanifibranor) 공유결합 5중작용제; 두 incretin 수용체+PPAR 모두 체중·당대사 기여, ARC POMC 활성 강화·BBB 미투과 (hindbrain AP/NTS 작용).
- [[duran-2026-the-central-amygdala-integrates]] — bioRxiv 2026 (Hardaway lab); CeA가 말초 GLP-1RA(Ex-4) 통합 노드; Prkcd^CeA=hypophagia, Glp1r^CeA=hedonic feeding 전담 (사용자 Kim 2024 Science 인용).
- [[johansen-2025-brain-control-of-energy]] — Cell 2025 field-spanning 종합 리뷰 (비만 원인론→회로→neuroplasticity→약물); 사용자 lab 3편 인용.
- [[stuber-2025-the-neurobiology-of-overeating]] — Neuron 2025 (Lüscher·Stuber); 과식의 addiction-circuit·시냅스 가소성 모델; food addiction 신중론; 사용자 Kim 2024 인용.
- [[liu-2026-granular-motivational-interaction-and]] — Neuron 2026 (Liu·Wang); 섭식을 granular motivational states로 분해, 5 phase별 회로 지도 + BBQSM/AI 자연주의 패러다임; NMPU의 자매 framework; 사용자 Lee 2023 인용.
- [[godschall-2026-a-brain-reward-circuit-inhibited]] — Nature 2026; small-molecule GLP1RA가 NTS→CeA→VTA→NAc DA↓로 hedonic feeding 억제; 사용자 Kim 2024 Science 인용.
- [[seiler-2026-dual-activation-of-mc3r-and]] — Nat Commun 2026 (Endevica Bio); 경구 MC3R/MC4R dual agonist 710GO가 비만 macaque에서 지방 선택적·제지방 보존 감량·semaglutide 시너지; MC3R=rheostat/MC4R=driver division of labor.
- [[cummings-2001-preprandial-rise-in-plasma-ghrelin]] · [[perakakis-2021-leptin-in-leanness-and-obesity]] · [[steinert-2017-ghrelin-cck-glp-1-pyy-secretory]]
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] (사용자 lab) — NMPU
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] (사용자 lab) — LH
- [[park-2025-glucagon-like-peptide-1-and-hypothalamic]] (사용자 lab) — GLP-1 cognitive satiation
- [[de-lartigue-2026-critical-role-gut-brain-signalling]] (사용자 공저) — gut-brain
- [[lee-2025-hijacked-brain-modern-obesity-cue]] (사용자 lab) — hijacked brain
- [[namkoong-2017-central-administration-of-glp-1]] (사용자 lab) — ICV GLP-1/GIP 중추 식욕억제·incretin 병용 첫 신경기전 (BBRC 2017)
- [[lee-2017-glp-1-based-combination-therapy]] (사용자 lab) — GLP-1 병용요법(GIP·glucagon·PYY 등) 종합 editorial; tirzepatide·triagonist 선행 비전 (JOMES 2017)
- [[bae-2019-glucagon-like-peptide-1-receptor]] (사용자 lab) — 인체 lixisenatide fMRI; lean/obese T2DM food cue 뇌활성 차별 조절 (DMJ 2019)
- [[kim-2025-mechanisms-of-glucagon-like-peptide]] (사용자 lab) — 뇌 GLP-1R brain-wide 작용 종합 리뷰; cAMP-PKA 신호·부위별(AP/NTS/DMH/ARC) 활성·약물 발전사·비만 너머 응용 (APEM 2025)
- [[adam-2026-dopamine-takes-hit-how-neuroscience]] — dopamine 논쟁
- [[thanarajah-2019-food-intake-recruits-orosensory]] — 인체 PET(rDA); 즉시 orosensory DA vs 지연 post-ingestive DA 분리, wanting의 도파민 기질 (Cell Metab 2019)
- [[onimus-2026-the-gut-brain-vagal-axis-governs]] — Sci Adv 2026 (Gangarossa); SDV가 mesolimbic VTA→NAc DA·음식/약물 보상을 약화(DS 보존, 시상하부 항상성 노드 불변); 미주 tone이 보상 DA를 gating

### 호르몬
[[concept-ghrelin]] · [[concept-leptin]] · [[concept-cck]] · [[concept-glp-1]] · [[concept-pyy-3-36]]

### 회로/세포
[[concept-arcuate-nucleus]] · [[concept-npy-agrp-neurons]] · [[concept-pomc-neurons]] · [[concept-lateral-hypothalamus]] · [[concept-vagal-afferent-neurons]] · [[concept-dorsal-vagal-complex]] · [[concept-enteroendocrine-cells]] · [[concept-dopamine-reward-system]]

### 메커니즘·framework
[[concept-incretin-effect]] · [[concept-need-motivation-pleasure-utility]] · [[concept-appetitive-consummatory-phases]]

### 인물
[[person-choi-hyung-jin]]

### 교재
[[overview-sikrakhak-ch18-appetite-hormones]] — 사용자 저작 식락학 Ch 18(식욕·포만 호르몬)의 교육용 정리; 본 spine overview를 교재 narrative로 직조.

### 향후 방향
[[overview-future-research-directions]] — 본 wiki gap에서 도출한 사용자 lab 연구 로드맵(Tier 1–3).
