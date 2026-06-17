---
title: "Hypothalamic neuronal activation in non-human primates drives naturalistic goal-directed eating behavior"
type: paper
created: 2026-05-25
updated: 2026-05-30
source: "raw/2024 Neuron. Hypothalamic neuronal activation in non-human primates drives naturalistic goal-directed eating behavior.pdf"
authors: [Ha LJ, Yeo HG, Kim YG, Baek I, Baeg E, Lee YH, Won J, Jung Y, Park J, Jeon CY, Kim K, Min J, Song Y, Park JH, Nam KR, Son S, Yoo SBM, Park S, Choi WS, Lim KS, Choi JY, Cho JH, Lee Y, Choi HJ]
year: 2024
journal: "Neuron 112:1–13"
---

> [!takeaway] 연구 방향 관점의 핵심
> ★★★ **사용자 lab의 NHP chemogenetic gene therapy 입증작**. 결정작:
> 1. **NHP에서 처음으로 LHA GABAergic 광선택적 활성화 입증** (AAV-hDlx-hM3Dq, 3 macaques) — rodent→human 번역 다리.
> 2. **자연주의 goal-directed 식이 행동 ↑** for **palatable food only** (cherry tomato, HFHS). Unpalatable food·water·non-food object엔 효과 없음 — high-reward specificity.
> 3. **In vivo functional validation**: GABA PET ([18F]flumazenil) + 7T MRS (GABA/tCr) — biological efficacy 증명.
> 4. **Operant conditioning (CANTAB FR1)**: 동기 ↑ for sweet pellet (latency ↓, success ↑, anticipatory ↑). Water reward는 inconclusive (낮은 baseline motivation 가설).
> 5. **rs-fMRI**: **LHA-frontal FC ↑, intra-frontal FC ↓** → top-down inhibitory control 감소가 motivation 증가의 회로 메커니즘.
> 6. **Rodent와 달리 aberrant gnawing 없음** — primate higher self-control 가설.
> 사용자 활용:
> - **Chemogenetic gene therapy** 임상 path를 NHP에서 입증 — 비만 치료 차세대 modality ([[lee-2025-hijacked-brain-modern-obesity-cue|Hijacked Brain]] electroceutical/gene therapy backbone).
> - **LH electroceutical** (Whiting 2019 LHA DBS) 임상에 cell type specificity 추가.
> - 본 페이지 + [[kim-2024-normative-framework-dissociates-need|Kim KS 2024]] + [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee YH 2023]] 3편이 사용자 lab의 **rodent→NHP→human translational pipeline 완성**.

# Hypothalamic neuronal activation in non-human primates drives naturalistic goal-directed eating behavior

## 한 줄 요약
**Macaque LHA GABAergic chemogenetic 활성화**가 palatable food 자연주의 goal-directed 행동·동기를 specifically 증가. LHA-frontal FC ↑ + intra-frontal FC ↓ 메커니즘.

## 핵심 내용

### Background
- LHA가 70년+ 식이 회로 hub (Anand & Brobeck 1951).
- Rodent에서 LHA GABA가 motivation·feeding 매개 입증 (Jennings 2015, Nieh 2015·2016, Qualls-Creekmore 2017, Siemian 2021, [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee YH 2023]]).
- 그러나 **NHP·인간 임상 번역 증거 부재**. Rodent LHA 자극은 aberrant gnawing (Navarro 2016, de Vrind 2019, Nieh 2015).
- LHA DBS 인간 임상 (Whiting 2013, 2019) 효과 있으나 cell type specificity 부재.

### Method
- **AAV9-hDlx-hM3Dq-dTomato** (Gq DREADD) in LHA via convection-enhanced delivery + gadolinium MRI guidance.
- 3 female rhesus macaques (A, B, C) + pilot (D). 7주 후 CNO 10 mg/kg i.m.
- **Validation**:
  - IHC (GAD67·dTomato co-loc, c-Fos for activation).
  - GABA PET ([18F]flumazenil) — GABA-A receptor density.
  - 1H-MRS @ 7T (sLASER, GABA/tCr ratio).
- **Behaviour**:
  - Naturalistic chamber (translucent tunnel) + cherry tomato / HFHS / unpalatable food / water / non-food.
  - Manual analysis (approach hands, bring to mouth, food peeling) + **DeepLabCut** auto-extraction (tray approach, bout, food zone duration).
  - Operant FR1 (CANTAB touchscreen) — sweet pellet vs water.
- **rs-fMRI** with MION T2 contrast, 198 ROI parcellation (D99 atlas).

### Result 1 — Virus + chemogenetic validation
- Transduction efficacy 60–90% (dTomato+/GAD67+ cells in LHA).
- Specificity 80–90% (GAD67+/dTomato+).
- CNO → c-Fos·dTomato co-loc 유의 증가 (functional activation).
- PET: hypothalamic [18F]flumazenil binding 증가 (3/3 monkeys, paired analysis).
- MRS: LHA GABA/tCr 유의 증가 with CNO vs control vs pre.
- → **chemogenetic의 분자·기능 검증**.

### Result 2 — Palatable food goal-directed 행동 증가
- Cherry tomato:
  - 식이 zone 체류 시간 ↑, low locomotion (식이 자세) ↑.
  - Approach hands ↑, bring to mouth ↑, food peeling ↑, food intake ↑.
- HFHS diet (2 monkeys × 2 trials): 일관 효과 — approach·bring to mouth·intake 증가.
- DeepLabCut: tray approach·bout·food zone duration 일관 증가.

### Result 3 — Specificity (palatable only)
- **Unpalatable food (eggplant)**: 효과 없음.
- **Water**: 효과 없음.
- **Non-food object** (lighting ball): 효과 없음.
- **Fed (만복) state**: cherry tomato에도 효과 없음 → effect requires baseline motivation.
- **CNO control** (virus 없이 CNO만): 효과 없음 → 약물 자체 효과 아님.
- → **High motivational state + high reward**일 때만 작동.

### Result 4 — Operant motivation 증가 (sweet pellet)
- FR1 paradigm: touch screen object → reward.
- LHA activation 시:
  - Object-touch latency ↓ (4.52e-7).
  - Touch-door open latency ↓.
  - Success trial 수 ↑.
  - Anticipatory behavior (no-reward periodic door touch) ↑.
- Water reward는 paradoxical (touch-lick latency 무변화, anticipatory 감소) — 낮은 baseline motivation 가설.

### Result 5 — rs-fMRI: 회로 메커니즘
- **LHA seed-based FC**: LHA-**frontal cortex FC 증가**.
- **Whole-brain network FC**: **intra-frontal FC 감소** (특히 frontal-frontal).
- 가설: LHA GABA 활성화 → frontal-LHA 연결 강화 + frontal top-down inhibition 약화 → impulsive goal-directed motivation 증가.
- PET·MRS GABA 증가가 downstream (hippocampus, insula, cortex)에도 확장.

### Result 6 — Rodent와의 차이
- Rodent: aberrant gnawing (wood, non-nutritive), excess chewing (Navarro 2016, de Vrind 2019).
- **Macaque에선 aberrant gnawing 없음** — palatable food에 집중.
- 가설: higher self-control, larger brain size, different cell type characteristics, lower virus transduction efficiency.
- → 임상적으로 더 안전한 path.

### Claim
- LHA GABAergic 활성화가 NHP에서 specific하게 palatable food goal-directed 행동·동기를 증가.
- 회로: LHA → frontal cortex 강화 + intra-frontal 약화.
- **Chemogenetic = drug-controlled gene therapy** as preclinical proof-of-concept for human obesity.

## 사용자 lab과의 직접 연결

### Translational pipeline 완성
- Rodent: [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee YH 2023]] (LH^LepR 회로 정의) + [[kim-2024-normative-framework-dissociates-need|Kim KS 2024]] (NMPU framework 입증).
- NHP: **본 paper** (chemogenetic in macaque, palatable food specificity).
- Human: 향후 임상 시험 (chemogenetic gene therapy, LHA DBS 후속).

### NMPU framework 검증
- LHA GABA = **Motivation** ([[kim-2024-normative-framework-dissociates-need|Kim KS 2024]]).
- 본 paper의 결과: palatable food (high reward, 고동기 stimulus) 에만 효과 + baseline motivation 의존 → NMPU의 motivation accumulation 모델 행동적 일치.

### Hijacked Brain의 임상 회로
- [[lee-2025-hijacked-brain-modern-obesity-cue|Hijacked Brain]]의 5 maladaptive types 중 일부 (특히 cue·craving·addiction) → LH electroceutical/gene therapy로 표적.
- 본 paper가 cell type specific intervention 임상 path 입증.

### Frontal-LHA FC 회로의 임상 의의
- 비만에서 frontal top-down inhibition 약화는 알려진 현상.
- 본 paper가 LHA 자극이 그 회로를 mimic함을 보임 — 비만 발병 메커니즘 + 치료 표적 동시 시사.

## 한계
- N=3 (+ pilot). 통계 보수적.
- DREADD agonist (CNO) 자체 부작용 가능성 (CNO control 추가로 부분 해결).
- 비-cell-type specific LH GABAergic (Vgat+) 전체 자극 — LH^LepR vs Vglut2 등 sub-population 미구분 (rodent와 달리 NHP에서 specific 유전체 결여 가능).

## 관련 페이지
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] — rodent LH^LepR 회로 (NHP 본 paper의 rodent counterpart).
- [[kim-2024-normative-framework-dissociates-need]] — NMPU motivation 입증.
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] — NMPU framework.
- [[concept-lateral-hypothalamus]] — LH cell type 종합.
- [[concept-need-motivation-pleasure-utility]] — NMPU.
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — LH review.
- [[concept-dopamine-reward-system]] — LH→VTA 회로.
- [[lee-2025-hijacked-brain-modern-obesity-cue]] — Hijacked Brain 임상 응용.
- [[park-2025-glucagon-like-peptide-1-and-hypothalamic]] — DMH GLP-1R (사용자 lab 평행).
- [[johansen-2025-brain-control-of-energy]] — 본 NHP 논문을 LH^GABA→goal-directed eating 표준 reference로 인용 (Cell 2025).
- [[seiler-2026-dual-activation-of-mc3r-and]] — 동일 cynomolgus macaque 비만·식이 번역 platform (MC3R/MC4R dual agonist 약리).
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
- [[person-choi-hyung-jin]] — 사용자 lab.
