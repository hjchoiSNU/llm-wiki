---
title: "Littleton et al. 2025 — From identity to function: unveiling the cellular complexity of hypothalamic feeding circuits"
type: paper
created: 2026-05-25
updated: 2026-05-25
source: raw/2026 From identity to function unveiling the cellular complexity of hypothalamic feeding circuits.pdf
authors: [Sheridan H. Littleton, John A. Tadross, Giles S. H. Yeo]
year: 2025
journal: Reviews in Endocrine and Metabolic Disorders
---

> [!takeaway] 연구 방향 관점의 핵심
> 시상하부 single-cell atlas era의 **methodological·conceptual roadmap**. **HypoMap mouse** (Steuernagel 2022, 385k 세포) + **인간 atlas** (Tadross 2025 Nature, 433k 세포)가 신경내분비 연구의 새 standard. 종간 차이 (인간 POMC = LepR+GLP1R **co-express**, 마우스는 분리) — **GLP-1·dual agonist 인간 임상 효과의 분자 기반**. 사용자 lab의 인간 → 임상 번역 시 필수 reference.

# From identity to function: unveiling the cellular complexity of hypothalamic feeding circuits

## 한 줄 요약
HypoMap (mouse) + 인간 hypothalamus spatio-cellular atlas (Tadross 2025 Nature)를 중심으로 시상하부 cell type 정의 기술과 functional 발견을 종합. Yeo lab.

## 핵심 기술 (Fig 2)

### Cell mapping
- **Whole-brain imaging** — iDISCO·CUBIC·CLARITY tissue clearing + light-sheet.
- **Single-neuron projectomics** (Jiao 2025 Nat Neurosci): 7,180 시상하부 peptidergic 뉴런의 whole-brain projection map. 31 distinct projection types. POMC → 뇌간/midbrain, AgRP → 시상하부+median eminence.
- **Molecular connectomics** (RAMPANT, Webster 2024 Nat Metab) ★: AgRP 뉴런으로의 synaptic input을 single-nucleus RNA-seq로. **14 input neuron types** — 그 중 **Trh+/Glp1r+/Lepr+ caudal ARC inhibitory subset**이 새로 발견. Liraglutide의 satiation·체중 감소 효과를 직접 매개.

### Single-cell 'omics
- scRNA-seq vs snRNA-seq — snRNA가 뇌조직에서 표준 (dissociation 편향 감소, 동결 sample 사용 가능).
- **HypoMap (Steuernagel 2022, Yeo·Brüning lab)**: 18 데이터셋, 384,925 세포, 465 cluster. Glp1r+·Pnoc+ subset cross-region 분포 매핑.
- Single-cell proteomics (SUM-PAINT, cycleHCR): 아직 시상하부 적용 안 됨.
- Single-cell epigenomics (chromatin accessibility, methylation) — sex-specific ARC pattern (MacKay 2022).

### Spatial transcriptomics
- Xenium·MERFISH·TRISCO (이미지 기반), Visium·Slide-seq·Stereo-seq·DBiT-seq (sequencing 기반).
- 시상하부 적용: macaque (Lei 2024 Cell Metab), mouse, **human (Tadross 2025 Nature)**.

## 3D Multiomic Atlas

### Non-human primate (Lei 2024 Cell Metab)
- 8 macaque, 465,632 세포 (3 control + 3 obese + 2 T2DM).
- 48 neuronal subcluster.
- Cross-species: macaque CRH = glutamatergic vs mouse = GABAergic. NTS는 macaque/human ependymal, mouse neuronal.
- **Obesity-specific 전사 변화** in AGRP·GHRH·POMC·GALP·KISS1 (INF/ARC).
- **T2DM-specific** in AVP·NPY·CRH·OXT (PVN).

### Human hypothalamus atlas (Tadross 2025 Nature)
- 11 BMI-normal donors, 433,369 세포, 9 antero-posterior 절편.
- 5 level multi-cluster (452 unique clusters).
- DMH가 mouse보다 **더 heterogeneous**.
- **★ POMC neurons 인간 = LepR + GLP1R 공발현** (마우스는 분리 cluster).
- GLP1R+/GIPR+ → PVN·SON.
- GLP1R+/SIM1+/AVP+ → PVN.
- 인간 SST+/GAL+/CALCR+/GLP1R+ ↔ mouse cluster GLP1R 음성 — receptor profile 종간 발산.
- → **rodent atlas만으로 인간 임상 약물 표적 예측 부족**.

## Functional 발견 (Animal models)

### Maternal HFD (Huang 2024 Nat Commun)
- P15 자손 시상하부 snRNA-seq: 30 neuronal subpop, AVP/Rorb·histamine·AgRP/NPY가 male-특이 변화.

### Sexual dimorphism — VMH
- ERα 매개 distinct neuron pop (Hpcal1·Tac1·Pdyn·Gal·Sst·Rprm).
- Tac1·Rprm female-enriched, Pdyn male-enriched (ERα가 발달 시 설정, testosterone이 성체 유지).
- Rprm 감소 → core temp ↑ (female), 증가 → ↓ (male) — sexually dimorphic thermogenesis.

### Circadian feeding (Douglass 2024 Cell Metab)
- AgRP 활성이 ad libitum feeding 전에 감소.
- **SCN→DMH^Trh→AgRP feed-forward** circuit — circadian rhythm AgRP 활성 매개.
- 예측적 homeostasis (reactive 아닌 anticipatory).

### Weight-loss drug brain activation (Hansen 2021, Dedic 2024)
- Semaglutide, setmelanotide, lorcaserin, rimonabant, bromocriptine, sibutramine, ulotaront 등이 PVN·DMH·ARC·LHA activation pattern 차별.

### Neuropeptide 시간동역학 (Zhang 2025 Nature)
- NPY·α-MSH 분비 = all-or-none stochastic, ~100µm 확산.
- NPY → PVN^MC4R cAMP ↓, α-MSH → cAMP ↑.

### VMH^BDNF → feeding (Kosse 2024 Nature)
- VMH^BDNF Glut 뉴런이 ARC AgRP·POMC downstream + 뇌간 premotor jaw movement 표적 → **homeostatic + hedonic feeding 동시 억제** ★.
- BDNF/TrkB 인간 변이 비만 메커니즘 해명.

### AgRP·POMC 동시 조절 (De Solis 2024 Nat Metab)
- AgRP 활성 + POMC 억제 = food intake. 그러나 insulin·gluconeogenesis는 segregated.
- PVN^Npy1R → NTS^Th+ 매개.

### 새 cell types
- **BNC2+/Lepr+ ARC GABA** (Tan HL 2024 Nature, Friedman lab) ★: leptin 활성, 식이 cue 반응, **AgRP보다 빠른 식이 억제** + AgRP/NPY 직접 억제.
- **Pnoc+** (Solheim 2025 Cell, Brüning): diet-induced hyperphagia 매개.
- **LH GABA** in macaque (Ha 2024 Neuron) — non-human primate에서 palatable goal-directed eating 증명.

### Forward genetic 비만 유전자
- **Gpr75** (Jiang 2024 JCI): ciliary GPR75 = lean phenotype. 인간 GPR75 PTV 비만 보호 (Akbari 2021).
- **Gpr45** (Xun 2025 Science): PVN cilia → MC4R 신호 강화 → 식이 억제.

## Cell culture
- iPSC → hypothalamic neuron / arcuate organoid.
- 환자 specific disease modeling: BBS, Prader-Willi.
- BMI-GWAS variant 검증: **BSN** PTV (Zhao 2024 Nat Genet), **FAIM2** 3'UTR (Littleton 2024 Cell Genom).
- m6A (METTL14·YTHDC1) — 인간 ARC 발달 필수.

## 사용자 lab 직격 함의
- **HypoMap + 인간 atlas**가 사용자 lab의 LH·DMH·ARC 회로 연구에 cell type-level resolution 제공.
- **인간 POMC = LepR+GLP1R co-express** → 사용자 lab의 GLP-1 cognitive satiation ([[park-2025-glucagon-like-peptide-1-and-hypothalamic|Park 2025]])의 인간 번역 가능성 강화.
- Webster 2024 **Trh/Glp1r/Lepr → AgRP inhibitory subset** = liraglutide·semaglutide 회로 → 사용자 lab 향후 DTx 약물 표적.
- VMH^BDNF (Kosse 2024) = ARC downstream + premotor — 사용자 lab의 [[concept-arcuate-nucleus|ARC]] → premotor 회로 새 path.
- 인간 atlas resource = 사용자 lab 인간 sample 분석 시 ground truth.

## 관련 페이지
- [[concept-hypomap]] — mouse + human atlas 자세히.
- [[yang-2026-spatial-transcriptomics-identifies-the-molecular]] — 인간 시상하부 공간전사체 3D 아틀라스(독립 group, Jun Yan lab); DMH 비보존·Ltu 인간특이·GWAS niche (preprint 2026).
- [[concept-arcuate-nucleus]] — 본 paper 핵심 영역.
- [[concept-paraventricular-nucleus]] — PVN MC4R·OXT·CRH.
- [[concept-ventromedial-hypothalamus]] — VMH^BDNF / SF1.
- [[concept-dorsomedial-hypothalamus]] — DMH heterogeneity in human.
- [[concept-pomc-neurons]] · [[concept-npy-agrp-neurons]] — 본문 대상.
- [[concept-glp-1]] — Trh/Glp1r AgRP-inhibitory 신회로.
- [[jouque-2025-beyond-satiety-unraveling-the]] — POMC heterogeneity 자세히.
- [[lopez-2026-hypothalamic-regulation-of-energy]] — 동반 editorial.
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
- [[person-yeo-giles]] — 저자.
