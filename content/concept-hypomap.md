---
title: HypoMap — single-cell hypothalamus atlas
type: concept
created: 2026-05-25
updated: 2026-05-25
aliases: [HypoMap, hypothalamus single-cell atlas, human hypothalamus atlas]
---

> [!takeaway] 연구 방향 관점의 핵심
> **시상하부 single-cell sequencing era의 표준 resource**. Mouse HypoMap (Steuernagel 2022 Nat Metab) + 인간 atlas (Tadross 2025 Nature)가 cell type-level resolution 제공. 사용자 lab의 LH·DMH·ARC 회로를 분자 cluster 수준으로 정의 + **인간에서 GLP-1R·LepR 공발현 POMC** 등 종간 차이 확립 → 약물 표적 인간 번역 ground truth.

# HypoMap & 인간 hypothalamus atlas

## Mouse HypoMap (Steuernagel et al. 2022 Nat Metab)
- 18 single-cell/single-nucleus RNA-seq dataset 통합.
- **384,925 세포**, 465 unique cluster.
- 전 시상하부 영역 (preoptic → ventroposterior).
- Annotation: glutamatergic·GABAergic neuron + astrocyte·ependymal·oligodendrocyte·microglia·endothelial.
- bacTRAP으로 Glp1r+·Pnoc+ 등 cross-region heterogeneity 매핑.
- Yeo·Brüning lab.

## 인간 hypothalamus atlas (Tadross et al. 2025 Nature)
- BMI-normal donor **11명**.
- snRNA-seq **433,369 세포** + 10X Visium spatial transcriptomics (9 antero-posterior slice).
- 5 level multi-cluster, **452 unique cluster**.
- 3D spatial 매핑 완료.

## 종간 비교 핵심 발견
| 비교 | Mouse | Human |
|---|---|---|
| ARC neuron well-shared | AgRP·POMC·AVP 등 | 동일 |
| DMH heterogeneity | 단순 | **더 복잡** |
| ARC·VMH·DMH cluster | 33% 인간-specific | — |
| **POMC LepR·GLP1R** | **분리된 cluster** | **co-express** ★ |
| Sst+/Glp1r+ | Glp1r 있음 | Glp1r **없음** |
| SST+/GAL+/CALCR+/GLP1R+ | Glp1r 없음 | 있음 |
| Mouse Glp1r POMC cluster | Glp1r marker | 인간 매칭은 **CALCR** 발현 |

→ **약물 표적 종간 발산** — rodent atlas만으로 인간 임상 예측 부족.

## Macaque atlas (Lei 2024 Cell Metab)
- 8 male macaque, **465,632 세포** (3 control + 3 obese + 2 T2DM).
- Obesity vs T2DM 별 differential expression — INF·PVN·neuron·microglia·tanycyte 모두 변화.
- POMC+/TBX3+ in INF (인간 ARC 대응).
- CRH+ macaque = glutamatergic vs mouse GABAergic.

## Functional 신회로
HypoMap·atlas 시대의 발견:
- **Webster 2024 Nat Metab** (RAMPANT): AgRP synaptic input 14 type, **Trh+/Glp1r+/Lepr+ caudal ARC subset**이 liraglutide 매개.
- **BNC2+/Lepr+ ARC GABA** (Tan HL 2024 Nature, Friedman lab): leptin 활성 신규 anorexigenic cluster.
- **Pnoc+** (Solheim 2025 Cell, Brüning): diet-induced hyperphagia.
- **VMH^BDNF** (Kosse 2024 Nature): premotor jaw movement 식이.

## Single-cell methodology Fig 2 (Littleton 2025)
| Method | 용도 |
|---|---|
| Whole-brain imaging | tissue clearing + light-sheet |
| Projectomics | 7,180 peptidergic neuron projection (Jiao 2025) |
| RAMPANT | 시상하부 input neuron snRNA-seq (Webster 2024) |
| scRNA / snRNA-seq | transcriptome |
| SUM-PAINT / cycleHCR | single-protein imaging |
| Spatial: Xenium·MERFISH·TRISCO | image-based |
| Spatial: Visium·Slide-seq·Stereo-seq | sequencing-based |

## 사용자 lab 직격 함의
- **LH 4 subdivision × cell type** ([[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]])를 HypoMap·인간 atlas로 cross-validation 가능.
- **DMH GLP-1R cognitive satiation** ([[park-2025-glucagon-like-peptide-1-and-hypothalamic|Park 2025]])의 cluster identity가 atlas에서 정의됨.
- **인간 POMC = LepR+GLP1R co-express**: 사용자 lab GLP-1 임상 연구의 분자 정당성.
- 사용자 lab이 인간 sample 분석 시 직접 reference.

## 관련 페이지
- [[concept-arcuate-nucleus]] · [[concept-paraventricular-nucleus]] · [[concept-ventromedial-hypothalamus]] · [[concept-dorsomedial-hypothalamus]] · [[concept-lateral-hypothalamus]] — 매핑된 영역.
- [[concept-pomc-neurons]] · [[concept-npy-agrp-neurons]] — heterogeneity.
- [[concept-ghost-pomc-neurons]] — atlas-defined subtype.
- [[littleton-2025-from-identity-to-function-unveiling]] — 본 atlas review.
- [[jouque-2025-beyond-satiety-unraveling-the]] — POMC atlas integration.
- [[lopez-2026-hypothalamic-regulation-of-energy]] — editorial.
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
- [[person-yeo-giles]] — atlas 책임자.
