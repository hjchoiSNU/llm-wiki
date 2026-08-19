---
title: Single-nucleus transcriptional and chromatin accessibility profiling of mouse hypothalamic LepRb neurons reveals cell type-specific cis-regulatory elements linked to human obesity
type: paper
created: 2026-08-19
updated: 2026-08-19
source: "raw/2025 bioRxiv. Single-nucleus transcriptional and chromatin accessibility profiling of mouse hypothalamic LepRb neurons reveals cell type-specific cis-regulatory elements linked to human obesity.pdf"
authors: [Heyward FD, Pan H, Dreyfuss JM]
year: 2025
journal: bioRxiv (preprint)
doi: 10.1101/2025.10.06.680592
---

> [!takeaway] 연구 방향 관점의 핵심
> 시상하부 세포타입 연구의 **다음 층위를 여는 자원** — 지금까지의 atlas가 "어떤 세포가 있는가"(전사체)를 답했다면, 이 연구는 같은 핵에서 **"그 세포의 유전자를 무엇이 켜는가"(열린 크로마틴·cis-조절요소)** 를 함께 읽었다. 결정적으로 그 마우스 조절요소를 **인간 게놈으로 liftOver → 비만 GWAS/eQTL/HuGE 점수와 교차**시켜, 비만 유전 변이를 **특정 시상하부 세포아형에 귀속**시키는 다리를 놓는다.
> 최형진 lab 관점: (1) [[concept-glp1ra-response-variability|GLP-1RA 반응 이질성]]의 유전 성분을 "어느 유전자"가 아니라 **"어느 세포에서 작동하는 어느 enhancer"** 수준으로 내려서 물을 수 있는 틀. (2) DMH·ARC의 **Lepr×Glp1r 공발현 뉴런**이 세 개의 분자적으로 구별되는 아형(Ebf1 / Trh / Tbx19)으로 쪼개지며, 그중 DMH의 **Ebf1형이 Glp1r 최고 발현** — liraglutide 포만 매개 세포의 후보를 좁힌다. (3) AgRP가 **Sst형 / Acvr1c형** 두 아형으로 갈리고 Acvr1c는 인간에서 저체중 연관 변이가 알려진 유전자다.

# Single-nucleus transcriptional and chromatin accessibility profiling of mouse hypothalamic LepRb neurons (Heyward et al. 2025, bioRxiv)

## 한 줄 요약
NuTRAP^LepR 마우스에서 **LepR 발현 시상하부 핵만 선별(FANS)** 한 뒤 snRNA-seq + snATAC-seq **multiome**(22,581 핵)으로 39개 세포 클러스터를 정의하고, 각 클러스터 특이 **열린 크로마틴 영역(OCR)** 을 인간 게놈으로 보존 매핑해 **비만 GWAS·시상하부 eQTL·HuGE 점수와 겹치는 세포타입 특이적 조절 변이**를 지목한 연구 (Heyward, UT Southwestern).

## 핵심 내용

**Background**
- Leptin 작용의 핵심 표적은 시상하부 LepR 뉴런이지만, 이들에 대한 **세포타입 해상도의 크로마틴 접근성 지도**가 없었다.
- 기존 접근의 한계: Inoue 2019는 bulk RNA/ATAC으로 LepR 뉴런 **전체**의 CRE만 봄. Heyward 2024는 AgRP 뉴런 한정. 시상하부 single-cell ATAC 데이터셋은 발생기(E11–P8)나 절식/재급식 조건에 국한.
- **LepR 양성 세포를 선별 농축한 뒤 single-cell 크로마틴 프로파일링을 한 사례는 없었다** — 희귀 아형의 CRE 이질성이 통째로 가려져 있었다.

**Method**
- **LepR-ires-Cre × NuTRAP** 교배 → Cre 의존 eGFP 핵 표지. 1년령 암컷 6마리 시상하부 pooling, FANS로 120,000 핵 분리.
- 10x **Chromium Next GEM Single Cell Multiome ATAC + Gene Expression**, 4 라이브러리 병렬(각 ~5,000 핵) → QC 후 **22,581 핵**.
- RNA(PCA 53 PC) + ATAC(LSI 100) → **WNN 통합 + Louvain 클러스터링** → **39 클러스터**. 클러스터당 51,011–129,838 peak.
- **HypoMap**([[concept-hypomap]]) label transfer로 19개 클러스터가 기존 주석과 대응 확인.
- **Xenium 공간전사체**로 주요 아형(AgRP 2종, Lepr/Glp1r/Bnc2 3종)을 독립 검증.
- **BETA** (Binding and Expression Target Analysis): TSS ±100 kb 내 peak 근접·농축을 통합해 유전자별 regulatory potential(RP) 산출.
- **인간 연결 3층**: mm10 OCR → hg38 **liftOver** → ① **HuGE 점수**(BMI·체중·WHR·T2D) 근접 유전자, ② **NHGRI-EBI GWAS Catalog** 변이 + 1000 Genomes EUR LD proxy(±1 Mb, r²≥0.8) 중첩, ③ **GTEx v8 Brain_Hypothalamus eQTL**(p<1×10⁻⁵) 직접 염기 중첩. Circos plot으로 통합.

**Result 1 — 39개 LepR^Hypo 클러스터**
- **VMH**: Nr5a1(SF-1) 3종(cluster 0, 1, 14), Qrfpr(31), Foxb1(26, ventral medial 추정).
- **ARC**: Pomc 2종 — **cluster 2: Pomc/Glipr1**(저 LepR), **cluster 7: Pomc/Prdm12**(cluster 2의 ~4배 LepR). AgRP 2종(아래), KNDy(Kiss1/Pdyn/Tac2; 16, 20), Ghrh(27), Pnoc/Htr3b(28), Tbx19/Anxa2(19), PNOC/NPY^ARC(33; Agrp 음성·Sst 최고).
- **PVH**: Sim1 3종(4, 22, 23), AVP(37; **Glp1r 크게 농축**), Adcyap1/PACAP(12).
- **DMH**: Prlh(8), Ppp1r17(24). **LH**: Nts(3), Tcf7l2(9, DMH와 공유), Meis2/Sst(21).
- 기타: Irx5/Irx3 ventral premammillary 3종(5, 17, 29), Irx5/Elt4(25), Lef1/Tmem114(11; 인간 시상하부에서 보고된 집단의 마우스 대응 가능성), Hdc(34, tuberomammillary), Arx/Nr5a2(35), Pde11a(30, 신규), Bcl11b(32, 신규), ependymal(36; 비신경 LepR 세포), unknown(38).
- 신경전달물질: glutamatergic 0,1,5,9,12,14,16,17,20,22,23,24,25,26,29,31,37 / GABAergic 3,6,10,11,13,15,18,19,21,27,28,30,32,33,34,35,38. **POMC 클러스터(2,7)는 Gad1/2 상당량 + Slc17a6 소량** — POMC 뉴런의 ~40%가 GABAergic이라는 보고와 일치.

**Result 2 — AgRP 두 아형**
- **cluster 6: Agrp/Sst** (Sst·zfp804a·cntn5 농축, ARC **배측** 편향).
- **cluster 13: Agrp/Acvr1c** (**Acvr1c = ALK7**, ARC **복측** 편향). 기존 Agrp/Gm8773 아형에 해당.
- **Xenium 검증**: Agrp⁺ 뉴런의 ~42%가 Sst, ~42%가 Acvr1c, ~10%가 둘 다, ~7%가 둘 다 없음.
- 함의: 마우스 **Acvr1c 기능상실은 식이유발비만에 방어적**이고 **인간 ACVR1C SNP는 낮은 체중과 연관** — 지방조직 밖 **AgRP 뉴런 내 Acvr1c 신호**가 에너지 항상성에 관여할 가능성.

**Result 3 — Lepr×Glp1r 뉴런 = Bnc2/Nkx2-4/Glp1r 3형제**
- cluster **10, 15, 18**이 Lepr 최고 발현이며 **Bnc2**(Friedman lab이 보고한 leptin 활성 ARC GABA 집단 표지)와 **Nkx2-4**를 배타적으로 공발현.
- **Lepr 발현**: 15 > 10 > 18. **Glp1r 발현 최고**: cluster 10.
- 구별 표지: **10 = Ebf1**, **15 = Trh/Cxcl12**, **18 = Tbx19**.
- **Xenium 공간 검증**
  - **ARC/VMH**: Lepr/Glp1r 공발현 뉴런의 ~68%가 Bnc2⁺. Bnc2⁺ 중 74.4% Trh, ~13% Tbx19, **0% Ebf1**.
  - **DMH**: Lepr/Glp1r 공발현의 ~58%가 Bnc2⁺. Bnc2⁺ 중 **~60% Ebf1**, ~12% Trh, ~3% Tbx19.
  - → **Trh/Tbx19형 = ARC 편중, Ebf1형 = DMH 편중**.
- 저자 추론: [[rupp-2023-suppression-of-food-intake-by|LepRb^Glp1r]] 및 liraglutide 포만을 매개하는 **DMH LepR 뉴런**의 정체는 **Ebf1 농축 Bnc2/Nkx2-4/Glp1r 아형**일 가능성이 가장 높다(DMH 내 최다 LepR^Glp1r 유형 + 최고 Glp1r 발현). 미검증 예측으로 명시.
- 저자가 짚은 긴장: Bnc2^ARC 뉴런이 **GLP-1에 반응하지 않는다**는 선행 보고(Tan 2024)는 이 집단의 Glp1r 농축과 어긋난다 → Bnc2 계열 내부의 이질성(Ebf1/Trh/Tbx19)이 GLP-1 반응성 차이를 만들 가능성.

**Result 4 — 세포타입 특이 OCR과 발현 예측력**
- 39 클러스터 각각에서 클러스터/클러스터-family 특이 OCR 정의(AgRP, POMC, LepR/Glp1r, Kiss1 family + 주석 유전자 ±1 Mb).
- **BETA**: 20개 클러스터에서 상향 유전자의 RP 점수가 하향·비유의 유전자보다 유의하게 높음(KS test p<0.05) → **크로마틴 접근성이 발현을 실제로 예측**. 클러스터당 유의 BETA OCR 100–2,344개.
- OCR 위치 분포: **intergenic 36–45%, intronic 43–50%, promoter(TSS 상류 <1 kb) 3–11%** → 조절 정보의 대부분이 **원위 enhancer**에 있음.

**Result 5 — 인간 비만 유전학과의 교차**
- liftOver로 클러스터별 수천 개의 인간 orthologous OCR 확보(총 OCR 수와 비례하지 않음).
- **HuGE 점수** 층(Moderate ≥3 / Strong ≥10 / Very Strong ≥30 / Extreme ≥100 / Compelling ≥350)으로 근접 유전자 주석 → 보존된 조절 이웃 정량화.
- **GWAS**: BMI·체중·WHR·T2D 연관 변이(p<1×10⁻⁵) + LD proxy와 염기 중첩. OCR별 최강 −log₁₀p와 최대 r² 기록.
- **eQTL**: GTEx **Brain_Hypothalamus** eQTL과 직접 중첩 → 조직 관련 조절 타당성 확보(단, bulk eQTL은 세포타입 미분해).
- **수렴 클러스터**: **cluster 7 (Pomc/Prdm12), 13 (Agrp/Acvr1c), 15 (Bnc2/Nkx2-4/Glp1r/Trh)** 이 클러스터 특이 OCR × 유의 eQTL × 높은 HuGE 점수의 중첩이 두드러짐 → **공통 기능 변이가 세포아형 특이적으로 에너지 균형·비만 위험에 영향을 줄 후보 지점**.
- 예시: **cluster 9 (Tcf7l2) 특이 OCR**이 **Nup210** 유전자 도메인 내에 위치. Nup210은 BMI·T2D·체중 HuGE 45("Very Strong"), 해당 인간 영역은 BMI·T2D 연관 LD SNP와 높은 r²로 중첩.

**한계 (저자 명시)**
- **LepR-ires-Cre 발현 세포만** 프로파일링 — 체중을 조절하는 **비-LepR ARC GABA 뉴런** 등이 분석에서 제외됨.
- 시상하부 밖·인간 조직과의 크로마틴 비교가 없어, 보고된 OCR이 **진짜 세포타입 특이적**인지는 추가 검증 필요.
- **기저(ad libitum chow) 상태 단일 조건** — 저자 선행 연구에서 AgRP 뉴런에 절식 개방 2,452개·leptin 개방 203개 OCR이 있었듯, **자극 후에만 열리는 masked enhancer**는 잡히지 않음.
- GWAS/eQTL 중첩은 **상관 수준**. 특정 SNP·eQTL이 실제로 발현·에너지 항상성·DIO 감수성을 바꾸는지는 in vitro/in vivo 검증 미수행.
- eQTL은 bulk 시상하부 — 세포타입 귀속은 OCR 특이성에 의존한 **추론**.
- Xenium에서 ARC·DMH Lepr/Glp1r 뉴런의 30–43%가 Bnc2 음성 — 검출 민감도 문제인지 진짜 이질성인지 미해결.

## 사용자 lab 관점 함의

- **DMH GLP-1R 노선의 분자 정체**: 사용자 lab의 [[park-2025-glucagon-like-peptide-1-and-hypothalamic|DMH GLP-1R cognitive satiation]]과 [[rupp-2023-suppression-of-food-intake-by|Rupp 2023]] LepRb^Glp1r 결과가 가리키는 세포가 **Bnc2/Nkx2-4/Glp1r/Ebf1** 아형인지가 검증 가능한 1차 가설이 됐다. Ebf1은 DMH 특이·Glp1r 최고 — Cre driver 설계의 후보 표지.
- **유전 층위 접속**: [[su-2026-genetic-predictors-of-glp1-receptor|Su 2026]]이 GLP-1RA 반응 분산의 ~4%p만 유전으로 설명하고 ~75%가 미설명임을 보였다. 본 연구의 **세포타입 특이 CRE 지도**는 그 미설명분을 "코딩 변이"가 아닌 **비코딩 조절 변이 × 세포아형** 축으로 탐색할 좌표계를 준다.
- **AgRP 이질성**: [[takacs-2026-transcriptome-profiling-of-human-hypothalamic|Takács 2026]]이 **인간 AgRP에서 ACVR1C 고발현**을 보고했고, 본 연구가 마우스 AgRP를 **Sst형 / Acvr1c형**으로 분할했다. 두 결과가 서로를 보강 — Acvr1c/ALK7가 종을 넘는 AgRP 아형 축일 가능성.
- **방법론 상보성**: [[concept-hypomap|HypoMap]]·인간 atlas가 전사체 정체를, [[takacs-2026-transcriptome-profiling-of-human-hypothalamic|LCM-Seq]]가 깊이를 담당한다면, 본 연구는 **조절 문법(regulatory grammar)** 층을 추가한다. 세 층이 같은 세포를 다른 각도로 본다.
- **주의**: 1년령 **암컷 pooling 단일 조건**·전임상 preprint(2025-10-07 posted, 미심사). 클러스터 경계와 인간 교차는 후속 검증 전까지 잠정으로 다뤄야 한다.

## 관련 페이지
- [[concept-leptin]] — LepR 뉴런의 상위 개념. 본 연구는 그 뉴런 집단을 39개 아형으로 해부.
- [[concept-hypomap]] — label transfer reference. 본 연구는 atlas에 **크로마틴 접근성** 층을 추가.
- [[concept-npy-agrp-neurons]] — AgRP **Sst형 / Acvr1c형** 두 아형과 공간 분리(배측/복측).
- [[concept-pomc-neurons]] — POMC **Glipr1형(저 LepR) / Prdm12형(고 LepR)** 분할; GABAergic 성분 확인.
- [[concept-arcuate-nucleus]] — 대부분 아형의 소재지. Trh/Tbx19형 Lepr^Glp1r 편중.
- [[concept-dorsomedial-hypothalamus]] — **Ebf1형 Lepr^Glp1r**의 소재지. liraglutide 포만 매개 세포 후보.
- [[rupp-2023-suppression-of-food-intake-by]] — DMH LepRb^Glp1r 뉴런의 기능적 원전. 본 연구가 그 분자 정체를 3분할.
- [[concept-glp-1]] — Glp1r 발현 세포아형 지도.
- [[concept-glp1ra-response-variability]] — 반응 이질성의 **조절 변이 × 세포아형** 층 추가.
- [[su-2026-genetic-predictors-of-glp1-receptor]] — 인간 유전학 측 대응. 코딩 변이(GLP1R p.Pro7Leu 등) vs 본 연구의 비코딩 CRE.
- [[takacs-2026-transcriptome-profiling-of-human-hypothalamic]] — 인간 AgRP의 **ACVR1C·NR3C1** 고발현. 본 연구의 Agrp/Acvr1c 아형과 종간 수렴.
- [[concept-cis-regulatory-element-obesity]] — 본 연구가 정립한 방법 축(OCR→liftOver→GWAS/eQTL/HuGE)의 개념 hub.
- [[concept-spatial-transcriptomics]] — Xenium 검증에 사용된 방법론 hub.
- [[concept-ventromedial-hypothalamus]] — Nr5a1(SF-1) 3종 아형.
- [[concept-neurotensin]] — LH Nts 클러스터(cluster 3).
- [[concept-ghost-pomc-neurons]] — POMC 아형 이질성 논의의 인접 개념.
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
