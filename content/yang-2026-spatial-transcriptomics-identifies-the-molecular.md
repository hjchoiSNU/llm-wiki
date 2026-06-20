---
title: "Yang et al. 2026 — Spatial transcriptomics identifies the molecular and disease landscapes of adult human hypothalamus"
type: paper
created: 2026-06-20
updated: 2026-06-20
source: raw/2026 Spatial transcriptomics identifies the molecular and disease landscapes of adult human hypothalamus.pdf
authors: [Qiaoqiao Yang, Haifang Wang, Le Gao, Xiaobiao Zhang, Tao Xie, Yichi Xu, Wensheng Li, Jun Yan]
year: 2026
journal: Research Square (preprint)
---

> [!takeaway] 연구 방향 관점의 핵심
> **성인 인간 시상하부의 3D 공간전사체 아틀라스**(serial-section Visium ST + Visium HD + MERFISH + snRNA-seq 243,223 세포)를 MRI 좌표에 정렬해 구축. **인간 신경 subtype이 마우스보다 공간적으로 더 분리(segregated)**되어 있고, 핵·소구역 명명이 마우스와 상당히 다름 — [[concept-hypomap|HypoMap]]·[[littleton-2025-from-identity-to-function-unveiling|Littleton 2025]]·Tadross 2025와 함께 **rodent→human 번역의 ground truth**. 특히 **DMH는 종간 비보존**, **외측결절핵(Ltu)은 인간/영장류 특이적이며 비만(체간지방)과 연관**, GWAS를 공간에 매핑해 **MC4R·VEGFA·NFAT5·MYO3B 등 질환 유전자의 시상하부 niche**를 지정. 사용자 lab의 [[concept-arcuate-nucleus|ARC]]·[[concept-dorsomedial-hypothalamus|DMH]]·[[concept-lateral-hypothalamus|LH]] 회로를 인간 sample에서 해석할 때 직접 참조할 분자-공간 지도.

# Spatial transcriptomics identifies the molecular and disease landscapes of adult human hypothalamus

## 한 줄 요약
인간 시상하부(0.3% 뇌부피, ~4 cm³)의 **공간전사체 + snRNA-seq + 조직학 통합 3D 아틀라스**를 MRI 정렬로 구축하고, 마우스와 cross-species 비교 + GWAS 질환 매핑까지 수행. Jun Yan lab (CAS/Fudan, 상하이). 25개 시상하부 영역·59 뉴런타입을 분자로 정의하고 웹(yanlab.org.cn:30110)으로 공개.

## 배경
- 인간 시상하부 기능 지식은 대부분 설치류 기반이나 **종간 구조·명명 불일치**로 직접 적용 한계. 기존 인간 공간전사체는 절편 수 제한으로 coarse-grained, SCN(시교차상핵) 정도만 조밀 재구성된 상태였음.
- 목표: serial-section ST + snRNA-seq로 **단세포 해상도 + 정밀 공간 분자 조직** 동시 확보, MRI 기반 인간 뇌 아틀라스와 호환.

## 방법
- **공간전사체**: 3 기증자 FFPE 블록 → 34개 절편 10x Visium ST(55 µm spot); 대표 절편 **Visium HD(2 µm, 단세포급)**; 별도 sample **MERFISH** 검증. och(시신경교차) 기준 공통좌표.
- **snRNA-seq**: 12 기증자, 27 sample, **243,223 고품질 단핵 전사체** → 14 major cell type, **59 뉴런타입(34 GABA, 23 Glut, 1 도파민, 1 히스타민)**.
- 머신러닝 H&E 세포 분할로 영역별 neuron/glia 비율·세포 크기 정량. MRI 아틀라스 정합 3D 모델.

## 핵심 결과
### 분자 기반 해부 — 25 영역
- 무감독 15 ST cluster → Allen·Mai 아틀라스 큐레이션으로 **25 시상하부 영역** 확정. 개인·플랫폼 간 일관.
- 세포 분포: 뉴런은 uncinate nucleus(UnN)에서 최고밀도, MMl·[[concept-lateral-hypothalamus|LH]]에서 희박; 최대 뉴런은 **[[concept-paraventricular-nucleus|PVH]]·SON 거대세포 내분비 뉴런**.
- 인간은 마우스보다 **microglia 비율↑**(IHC 검증).

### Cross-species — 모자이크형 보존
- 인간 Visium ↔ 마우스 Stereo-seq 16 homo-cluster: **SCN·PVH/SON·ependyma·ARC/TMN**은 양종에서 restricted(고보존); preoptic·infundibulo-tuberal은 저보존.
- **상위(세포종류) 보존 vs 하위(subtype) 대규모 재편** — 인간 뉴런 subtype이 마우스보다 **공간적으로 더 분리**.
- **DMH는 마우스 supertype이 인간 DMH에 신뢰성 있게 매핑되지 않음 → 종간 비보존** ★ (사용자 lab DMH 연구에 직접 함의; Tadross 2025의 "인간 DMH 더 heterogeneous"와 정합).
- 발달기 보존 전사인자 **FOXG1·POU2F2·DLX5·TBX3·SIM2·PITX2·FOXA1**이 성체 인간에서도 AP축(preoptic→anterior→tuberal→mammillary→supramammillary) 순차 발현 유지.

### 핵·소구역 세분
- **POA**: 12 소구역. 인간에서 글루탐산(배측)·GABA(복측) 분리가 뚜렷(마우스는 불명확). UnN(=INAH3,4) NTS/ESR1/GAL GABA 뉴런 = 마우스 MPN 상동(성적동기); IMH(=INAH1, GAL+) = 설치류 VLPO 상동(수면).
- **[[concept-paraventricular-nucleus|PVH]]**: 6 소구역 + snRNA 15 subtype. 거대세포 AVP(내측)·OXT(배측), 신경내분비 parvocellular **CRH/TRH/SST**. hPVH03.PCSK1/OXT 최대 세포크기. magnocellular↔parvocellular 유전자 시그니처 분리.
- **Infundibulo-tuberal(ARC/VMH/Ltu)**: ARC 4 소구역이 VMH·Ltu와 **양파형(onion-like)** 배열. ARC 18 subtype — **AGRP/NPY·POMC/PBX3·KISS1/TAC3·GAL/GHRH·KCTD8/SST가 마우스와 1:1 대응**([[concept-npy-agrp-neurons]]·[[concept-pomc-neurons]]). 인간 ARC에서 **QFRP·TAC1 신경펩타이드 상향**(에너지 항상성·식이 조절 관여, 인간 특이 기능 시사).
- **외측결절핵(Lateral tuberal nucleus, Ltu)** ★: 인간/고등영장류 특이. ARC 외측 2–3개 신경절형 구조. GABAergic MYO3B/ZNF831(snRNA)·GABAR5(HD/MERFISH). 마우스 ARC 주변 Sst/Pthlh GABA 상동. **K⁺/Ca²⁺ 채널·GABA 시냅스 전달 유전자 특이 강화** → 인간 Ltu 이온채널·시냅스 특화.
- **유두체(MB)**: 10 소구역. 인간 MM이 마우스보다 비대·내측(MMm)/외측(MMl) 분리. 마우스의 **내외측 세분이 인간에서 전후축 세분으로 재배향**. 기존 "인간 SUM"으로 명명된 MB_8은 실제 마우스 **PM 상동**으로 재해석.

### 질환 지형 (GWAS 매핑) ★
- EBI GWAS Catalog를 영역 공간전사체에 매핑 → 6 질환범주가 특정 영역과 연관.
- **비만(체간지방)** = **Ltu**(+ARC)와 강한 연관; **고요산혈증** = VMH; **수면(주간낮잠·불면)** = POA 핵.
- 질환 후보 유전자: VMH **VEGFA·NFAT5**(고요산혈증), Ltu **[[concept-mc4r|MC4R]]·NEGR1·MYO3B**(비만).
- CellChat 신경펩타이드 신호망 = 대사질환 모듈(VMH·ARC·Ltu)과 정신질환 모듈(IMH·UnN·MPOL/MPOM/MPO)로 분리 → 기능 분절.

## 사용자 lab 관점
- **인간 ground truth**: 사용자 lab의 [[concept-arcuate-nucleus|ARC]]·[[concept-dorsomedial-hypothalamus|DMH]]·[[concept-lateral-hypothalamus|LH]]·[[concept-paraventricular-nucleus|PVH]] 회로를 인간 sample에서 cell-type·공간 해상도로 해석할 분자 지도. [[concept-hypomap|HypoMap]]·[[littleton-2025-from-identity-to-function-unveiling|Littleton 2025]]와 상보적.
- **DMH 비보존 경고**: 사용자 lab의 [[kim-2024-glp-1-increases-preingestive-satiation|DMH GLP-1R cognitive satiation]] 등 마우스 DMH 발견을 인간 번역 시 **DMH가 종간 비보존**이라는 점을 반드시 고려.
- **Ltu = 인간 비만 신규 표적**: 마우스에 잘 대응하지 않는 인간/영장류 특이 핵이 비만 GWAS와 연관 → 인간 특이 항비만 회로 후보.
- **방법론**: serial ST + HD + MERFISH + snRNA + MRI 정합은 사용자 lab의 인간 조직 분석·[[concept-activity-molecular-registration|활성–분자정체 정합]] 설계에 참조.
- 주의: **Research Square 프리프린트(2026-06-05, 미peer-review)** — 인용 시 검증 상태 명시.

## 관련 페이지
- [[concept-hypomap]] — mouse+인간 시상하부 단세포 아틀라스(본 논문과 상보).
- [[littleton-2025-from-identity-to-function-unveiling]] — 시상하부 atlas era roadmap(Tadross 2025 인간 atlas 포함).
- [[concept-arcuate-nucleus]] — ARC 4 소구역·AGRP/POMC/KISS1 1:1 대응.
- [[concept-dorsomedial-hypothalamus]] — DMH 종간 비보존 핵심 소견.
- [[concept-paraventricular-nucleus]] — PVH 6 소구역·magno/parvocellular 분리.
- [[concept-ventromedial-hypothalamus]] — VMH(고요산혈증 GWAS niche).
- [[concept-lateral-hypothalamus]] — LH 저밀도 뉴런 영역.
- [[concept-npy-agrp-neurons]] · [[concept-pomc-neurons]] — ARC 보존 subtype.
- [[concept-mc4r]] · [[concept-melanocortin-system]] — Ltu 비만 후보 유전자.
- [[concept-activity-molecular-registration]] — 공간전사체(Visium/MERFISH) 방법 계열.
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
