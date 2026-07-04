---
title: "Ravichandran et al. 2026 — Spatiomolecular mapping reveals anatomical organization of heterogeneous cell types in the human nucleus accumbens"
type: paper
created: 2026-07-04
updated: 2026-07-04
source: raw/2026 Neuron. Spatiomolecular mapping reveals anatomical  organization of heterogeneous cell types in the  human nucleus accumbens.pdf
authors: [Ravichandran P, Bach SV, Phillips RA III, et al. (Martinowich K, Hicks SC, Maynard KR)]
year: 2026
---

> [!takeaway] 연구 방향 관점의 핵심
> **사후 인간 [[concept-nucleus-accumbens|NAc]]의 통합 공간전사체(Visium SRT) + snRNA-seq 아틀라스**. 최형진 교수 연구(보상·동기·항비만) 관점에서 두 가지가 핵심. (1) NAc의 D1/D2 [[concept-medium-spiny-neuron|MSN]] subtype이 core/shell 이분법이 아니라 **연속적 공간 gradient**로 조직되며, **OPRM1+ D1 island(오피오이드 수용체 밀집 '섬')**이 medial ventral border에 존재해 [[concept-hedonic-hotspot|hedonic hotspot]]·오피오이드 쾌락 회로의 인간 해부학적 기질로 지목됨 — mouse에서만 다루던 hedonic eating 회로를 인간 조직에서 검증할 좌표. (2) **rodent morphine/cocaine 반응 전사 프로그램을 인간 SRT에 transfer learning으로 투영**해 약물 취약 MSN subtype의 공간 위치를 예측 — 동물 중독·과식 회로 데이터를 인간 번역하는 방법론 template.

# Ravichandran et al. 2026 — Spatiomolecular mapping reveals anatomical organization of heterogeneous cell types in the human nucleus accumbens

## 한 줄 요약
10명 대조군 기증자(6M/4F)의 사후 인간 NAc 조직에서 **Visium 공간전사체(SRT)와 snRNA-seq을 짝지어 통합**한 spatiomolecular 아틀라스. 20개 전사적으로 구별되는 세포타입과 8개 공간 도메인(SpD)을 정의하고, MSN subtype이 **연속적 공간 gradient**로 조직됨을 보이며, **OPRM1+ D1 island**를 진화적으로 보존된 오피오이드 처리 구획으로 규정하고, 정신질환·중독 GWAS 위험과 약물반응 프로그램을 공간에 매핑했다. Lieber Institute(Maynard/Hicks/Martinowich, Johns Hopkins). Neuron NeuroResource.

## 핵심 내용

### Background
- NAc는 mesolimbic 도파민계의 핵심으로 [[concept-dopamine-reward-system|보상]]·동기·목표지향 행동에 중심적이며, SCZ·우울·불안·[[concept-food-addiction|물질사용장애(SUD)]]에 연루된다.
- GABAergic [[concept-medium-spiny-neuron|MSN]]이 주 출력 뉴런이며 **DRD1 발현 direct pathway MSN**과 **DRD2 발현 indirect pathway MSN**으로 나뉜다(전통적 core/shell + direct/indirect 이분법).
- 인간 NAc가 뚜렷한 core/shell 경계를 갖는지, mouse/NHP에서 보고된 spatiomolecular code가 인간에도 존재하는지는 불명확했다. Ventromedial border의 **interface island(D1 island)**의 세포 조성·공간 정체성도 미상이었다.

### Method
- 10 기증자, 인접 절편에서 **paired Visium SRT + snRNA-seq**. 기증자당 2–5 capture array(총 n=38)로 anterior/intermediate/posterior(A-P) 및 dorsoventral 축 정렬.
- snRNA-seq: PI-sorted(핵) + PI+NeuN+(뉴런 농축) 샘플(n=20). QC 후 **103,785 핵** 유지.
- 분석: 세포타입 클러스터링, 데이터 기반 공간도메인(**PRECAST**), spot deconvolution(**RCTD**), 연속 gradient(**MERINGUE**, **NMF**), cell-cell communication(**LIANA**), 유전율 분석(**s-LDSC**), 약물반응 transfer learning.
- 검증: **Xenium**(단세포 해상도), smFISH. 방법론 hub: [[concept-spatial-transcriptomics]].

### Result — 세포타입 및 공간도메인
- **20개 세포타입**: DRD1_MSN_A–D(4), DRD2_MSN_A/B(2), 억제뉴런 Inh_A–F(CHAT+ 콜린성 Inh_D, KIT+ PV Inh_A, SST+/CORT+ Inh_B/E, VIP+ Inh_F, GLP1R+/TAC3+ Inh_C 포함), excitatory, astrocyte A/B, ependymal, microglia, oligo, OPC, endothelial.
- **8개 공간도메인(SpD)**: MSN_1, MSN_2, MSN_3, D1 islands, excitatory, inhibitory, endothelial/ependymal, WM. A-P 축에 걸쳐 일관.
- MSN SpD는 **discrete가 아니라 gradient-like transition**을 보임(core vs shell 마커 CALB1·ADORA2A는 lateral MSN_1에, shell 마커 CARTPT는 MSN_3에 편향되나 one-to-one 매핑은 아님).

### Result — D1 islands (OPRM1+ 오피오이드 섬)
- Ventromedial border의 **DRD1 MSN 전용 island**로, **OPRM1(μ-opioid receptor)**·OPRK1 발현. rodent·NHP hedonic hotspot 및 팔라터블 음식 오피오이드 반응 부위와 중첩.
- 내부에 **DRD1_MSN_B, DRD1_MSN_C, DRD1_MSN_D** 등 discrete subpopulation 및 astrocyte/oligo 기여. **RXFP1·CPNE4** 발현으로 heterogeneous.
- 진화적 보존: rodent Grm8 MSN, NHP D1 NUDAP/ICj 특화 population에 매핑 → **종간 보존 오피오이드 처리 구획**.
- **CHAT+ 콜린성 뉴런(Inh_D)**이 D1 island 인접에 높은 prevalence.

### Result — 연속 gradient & 세포조성
- **MERINGUE** consensus pattern(MCP)로 MSN SpD 전반의 gradient 확인(medial-lateral 축). **NMF** factor가 도파민 신호(PDE10A, RASD2), 오피오이드/serotonin 수용체, glial-MSN 상호작용 등 공간조직 프로그램 포착.
- **RCTD**로 MSN_1=lateral(DRD1_MSN_A/DRD2_MSN_A), MSN_3=medial(DRD1_MSN_C) 편향. Xenium이 gradient 재현.

### Result — 질환 유전율 & LR 상호작용
- **s-LDSC**: MSN_1/MSN_2 SpD가 SCZ·양극성·neuroticism 유전율 농축, MSN_3는 drinks per week·금연. D1 island NMF factor는 우울·SCZ·BPD 위험 농축.
- **LIANA** LR 분석: **PENK-OPRM1** 및 **PDYN-OPRM1** 오피오이드 paracrine 신호를 공간 매핑. PENK ligand는 주로 DRD2_MSN_A에서, PDYN은 DRD1_MSN_A에서 발원해 D1 island의 OPRM1+ DRD1_MSN_B/D를 표적. **CRH-CRHR1**(스트레스 호르몬) 신호는 콜린성 뉴런이 주 sender, D1 island가 수용.

### Result — 약물반응 transfer learning (claim)
- rodent **acute/volitional morphine** 및 **cocaine** snRNA-seq DEG/NMF factor를 인간 SRT에 투영. Morphine DEG는 MSN_1–MSN_3 SpD에 농축(Ntrk2/BDNF, Pde7b 등). Cocaine 반응은 Drd1 MSN에 집중, MSN_1/MSN_3 SpD에 농축(PDE7B, ARPP21, GRIN1).
- **claim**: MSN subtype의 공간 위치가 약물반응 프로그램의 공간 조직을 규정하며, 이 회로들이 약물 취약성을 갖는다.

### Discussion 요지
- 인간 NAc는 classical core/shell·direct/indirect 이분법으로 완전히 포착되지 않으며 **discrete cluster + 연속 gradient**의 복합 구조. D1 island는 **진화적으로 보존된, 오피오이드·neuromodulatory 신호 처리 구획**으로 rodent rostrodorsal hedonic hotspot과 medial bias 공유.
- 데이터·코드: GEO GSE307586/307587/325489, GitHub LieberInstitute/spatial_NAc, 인터랙티브 웹 리소스.

## 관련 페이지
- [[concept-nucleus-accumbens]] — 본 논문이 분자·공간 해상도로 재정의한 대상 구조물(인간 NAc 아틀라스).
- [[concept-medium-spiny-neuron]] — 본 논문이 인간에서 최초로 상세 정의한 D1/D2 MSN subtype hub.
- [[concept-dopamine-reward-system]] — D1/D2 MSN이 구성하는 mesolimbic 표적; 도파민 신호 gradient.
- [[concept-hedonic-hotspot]] — OPRM1+ D1 island가 rodent medial shell 오피오이드 hedonic hotspot의 인간 해부학적 상관.
- [[concept-food-addiction]] — 물질사용장애(SUD)·drinks per week 유전율이 특정 MSN SpD에 농축, 약물반응 회로의 취약성.
- [[concept-spatial-transcriptomics]] — 사용된 Visium/Xenium/RCTD/NMF 등 방법론 hub.
- [[yang-2026-spatial-transcriptomics-identifies-the-molecular]] — 동일 계열(인간 SRT+snRNA-seq 아틀라스)로 시상하부 대상; rodent→human 번역·GWAS 공간 매핑 방법론 공유.
- [[littleton-2025-from-identity-to-function-unveiling]] — single-cell atlas era의 종간 번역 roadmap; 인간-mouse subtype 차이라는 공통 주제.
- [[guillaumin-2023-disentangling-the-role-of-nac]] — NAc shell D1/D2 MSN의 기능 해리; 본 논문은 그 subtype의 인간 분자·공간 정체성 제공.
- [[pascoli-2026-conditioned-accumbal-dopamine-transients]] — NAc 도파민·중독 취약성; 본 논문은 약물반응 MSN subtype을 공간 매핑.
- [[chen-2026-striatal-control-of-amygdalar]] — NAc D1/D2-MSN 회로 기능; 본 논문은 그 세포타입의 인간 heterogeneity를 규명.
