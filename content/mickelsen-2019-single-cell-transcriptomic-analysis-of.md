---
title: "Single-cell transcriptomic analysis of the lateral hypothalamic area reveals molecularly distinct populations of inhibitory and excitatory neurons (Mickelsen 2019, Nat Neurosci)"
type: paper
created: 2026-10-03
updated: 2026-10-03
source: "raw/2019 Nature Neuroscience. Single-cell transcriptomic analysis of the lateral hypothalamic area reveals molecularly distinct populations of inhibitory and excitatory neurons.pdf"
authors: [Laura E. Mickelsen, Mohan Bolisetty, Brock R. Chimileski, Akie Fujita, Eric J. Beltrami, James T. Costanzo, Jacob R. Naparstek, Paul Robson, Alexander C. Jackson]
year: 2019
journal: "Nature Neuroscience 22(4):642–656 (2019-04); doi:10.1038/s41593-019-0349-8 (Resource). 원자료 GEO GSE125065"
---

> [!takeaway] 연구 방향 관점의 핵심
> **위키가 LH 세포타입을 말할 때 거의 항상 밑에 깔려 있는 1차 census가 이 논문이다.** 마우스 LHA를 microdissection해 droplet scRNA-seq(10× Chromium)으로 7,129 세포를 읽고, 뉴런을 **glutamatergic 15개 + GABAergic 15개 클러스터**로 나눴다. 그리고 각 클러스터의 marker를 **FISH(RNAscope) + FACS 정렬 단일세포 qPCR**로 교차검증했다 — 이 "클러스터 → 2개 독립 기법 검증" 설계가 이 논문이 단순 데이터셋이 아니라 reference가 된 이유다.
> 사용자 연구에 직접 닿는 지점 넷. (1) **[[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]의 "LH^LepR의 92%가 GABA"의 출처**가 이 논문이다 — 단 원문 본문은 *"Lepr 발현 LH 뉴런의 대다수가 GABAergic(Slc32a1⁺·Gad1⁺·Gad2⁺)이고 Nts·Gal·Cartpt가 풍부"* 라는 **sc-qPCR 기반 질적 서술**이며(Lepr-Cre;EYFP, 마우스 2마리), 동시에 **scRNA-seq에서는 LHA^GABA 전반에 Lepr·Mc4r 전사체가 낮거나 희박**하다고 명시한다. 즉 사용자 lab이 인용하는 수치의 근거는 전사체 count가 아니라 정렬세포 qPCR이다. (2) **LH^Nts는 하나가 아니다** — binarize한 Nts⁺ 세포의 **70.8%가 GABA, 29.2%가 glutamate**, 그리고 Nts⁺ 중 Cartpt 공발현은 **19.5%뿐**이다(FISH 18.1%). Nts⁺ 안에서 **Crh형과 Tac1형이 거의 상호배타**(둘 다 9.9%)로 갈린다. (3) **Sst⁺ LHA 뉴런 4집단 + perifornical/tuberal 지형**: perifornical은 GABA 56% : Glut 44%로 섞이고 tuberal은 **97.3%가 GABA**다. 화학유전 활성화는 **비식용 물체 물어뜯기(gnawing)** 를 끌어냈다 — [[ha-2024-hypothalamic-neuronal-activation-non-human|Ha 2024]]가 "설치류 LHA 자극의 aberrant gnawing"으로 인용하는 현상의 세포타입 해상도 버전이다. (4) 2019년의 15+15 census는 뒤에 [[wang-2021-expansion-assisted-iterative-fish-defines-lateral|EASI-FISH(17+17)]]·[[rossi-2019-obesity-remodels-activity-and|Rossi 2019]]와 통합돼 **LHA consensus 클러스터**가 됐다. 사용자 lab의 LH^LepR·NMPU 세포를 분자 주소로 옮길 때의 좌표계다 → [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]].

# Single-cell transcriptomic analysis of the lateral hypothalamic area (Mickelsen et al. 2019)

- **저널**: Nature Neuroscience 22(4):642–656 (2019-04; 접수 2018-03-17, 채택 2019-01-30). DOI: 10.1038/s41593-019-0349-8. 유형은 **Resource**.
- **소속**: University of Connecticut, Dept. of Physiology & Neurobiology + CT Institute for the Brain and Cognitive Sciences (**Alexander C. Jackson** lab) × The Jackson Laboratory for Genomic Medicine (**Paul Robson** lab, 단일세포 플랫폼). 공동 제1저자 L.E. Mickelsen·M. Bolisetty. 교신 paul.robson@jax.org / alexander.jackson@uconn.edu.
- **데이터**: GEO **GSE125065**. 전용 분석 코드는 없고 CellView RShiny로 탐색.
- **대상·방법**: P30 C57BL/6 수컷 3 + 암컷 2(동배). Bregma −1.34·−1.58·−1.82 mm의 225 μm 절편에서 LHA를 1.0 mm biopsy punch + iridectomy scissors로 양측 microdissection(fornix 포함, mammillothalamic tract 복측, cerebral peduncle 복내측). 저자 정의로 이 영역은 **caudal LHA + tuberal nucleus 일부**(Paxinos의 peduncular LH·medial tuberal·terete hypothalamic nucleus)이고 일부 표본에 **VZI·DMH 외측이 섞일 수 있다**고 명시한다. 검증은 RNAscope 2.5 FISH(수컷 P25–38, 30마리)와 FACS 정렬 단일세포 qPCR(TaqMan 30 유전자, Fluidigm Biomark 48.48).

## 한 줄 요약
마우스 LHA의 첫 종합 단일세포 전사체 census로, **비뉴런 + GABAergic 15 + glutamatergic 15 클러스터**를 정의하고 각 클러스터의 marker를 FISH·sc-qPCR로 검증했다. 알려진 집단(Hcrt·Pmch·Trh·Nts)의 **내부 하위분할**까지 보였고, 새로 찾은 **Sst⁺ 4집단**을 해부·전기생리·화학유전·투사추적으로 추적해 **perifornical LHA^Glut Sst → dorsal lateral septum(dLS)** 투사와 반복 운동(gnawing·digging·rearing) 표현형을 보고했다.

## 핵심 내용

### Fig 1 — 세포 분리와 뉴런/비뉴런 구분
- 초기 7,218 세포(수컷 3,784 + 암컷 3,434). **UMI < 500 또는 미토콘드리아 reads > 40%** 인 89 세포를 버려 **7,129 세포**. 세포당 중위 유전자 **2,799개**, 중위 UMI **6,079개**.
- 상위 분산 유전자 1,000개 → t-SNE(Barnes-Hut) → **DBSCAN** 군집화로 20개 1차 클러스터. **pan-neuronal marker 4종(Snap25·Syp·Tubb3·Elavl2)** 의 클러스터별 중위 발현을 Gaussian mixture model로 이분해 뉴런/비뉴런을 가름(양쪽으로 분류된 185 세포 폐기, n=6,944).
- 비뉴런은 유전자·전사체 수가 유의하게 낮다(평균 유전자 1,737 / UMI 4,156 vs 뉴런 3,442 / 8,791) — Fig 1c의 쌍봉 분포가 이것으로 설명된다.
- 뉴런 재군집화(n=3,589)에서 **Slc17a6(VGLUT2) vs Slc32a1(VGAT)** 의 클러스터별 중위 발현 대소로 glutamatergic/GABAergic을 지정했다. Gad2가 Gad1보다 Slc32a1 패턴과 더 잘 맞았다. 30 클러스터 중 미배정·무차이 세포 803개를 폐기.
- **성차는 거의 없었다**: 모든 클러스터가 양성 세포를 함께 포함했다(Supplementary Fig 1).
- ⚠️ 본문은 비뉴런을 **13개 집단**으로 적고 Discussion은 **11개 비뉴런 타입**이라고 적는다(원문 내 불일치, 병기).

### Fig 2 — LHA^Glut 15 클러스터 / LHA^GABA 15 클러스터
- **LHA^Glut n=1,537 세포 / 15 클러스터**. 1 Pmch+Gad1, 2 Nrgn+Gda, 3 Zic1+Gad1, 4 Tac1+Pitx2, 5 Ebf3+Otp, 6 Hcrt, 7 Gpr101+Tcf4, 8 Trh+Cbln2, 9 Synpr+Gad1, 10 Grp+Cck, 11 Calca+Col27a1, 12 Trh+Syt2, 13 Syt2+Meis2+Gad1, 14 Otp+Gpr101, 15 Sst.
  - **Slc17a6⁺·Slc32a1⁻이면서 Gad1을 강하게 발현하는 클러스터가 4개**(이름에 Gad1을 붙였다) — GABA 합성효소 발현이 전달물질 표현형과 어긋나는 사례.
  - cluster 10(Grp+Cck, Pdyn·Nkx2-1 동반), cluster 11(Calca = calcitonin/CGRP, Otp·Ebf3·Tcf4·Cbln2), cluster 4(Tac1+**Pitx2** 선택적) 등을 주목할 집단으로 기술한다(원문은 "알려진·신규 집단"을 함께 소개할 뿐 클러스터별 신규 여부를 명시하지 않는다).
- **LHA^GABA n=1,900 세포 / 15 클러스터**. 1 Gal+Dlk1, 2 Npy+Npw, 3 Nts+Cartpt, 4 unassigned(유전자·UMI 수 유의하게 낮은 이상치), 5 Meis2+Calb2, 6 Sst+Col25a1, 7 Tac2+Serpini1, 8 Lhx6+Tcf4, 9 Cbln2+Calb1, 10 Sst+Meis2, 11 Col25a1+Otp, 12 Th+Slc18a2, 13 Sst+Otp, 14 Atp1a2, 15 Calb1+Cbln4.
  - cluster 1(Gal/Dlk1)과 cluster 3(Nts/Cartpt)은 **Dlk1 고발현을 공유**하고, cluster 3만 Tac1·Calcr·Cbln2를 선택적으로 공발현한다. cluster 1도 Nts를 발현한다.
  - cluster 12는 **Th·Ddc·Slc18a2**(도파민 합성·포장) 공발현. cluster 8의 **Lhx6**는 ZI의 수면촉진 GABA 집단 marker와 같다(Liu 2017 Nature).
- Marker 선정은 **2배 이상 발현 + AUROC 분류점수 85% 초과** 기준, 차등발현은 edgeR.
- ⚠️ **Pmch·Hcrt는 모든 클러스터에서 낮게 검출**된다. 저자들은 해리 과정에서 손상된 뉴런의 ambient mRNA 때문으로 본다 — 다른 데이터셋에서 "Pmch⁺/Hcrt⁺ 세포 비율"을 읽을 때의 함정.

### Fig 3 — Hcrt(orexin) 뉴런: marker는 많고 하위구조는 안 보인다
- LHA^Glut cluster 6(n=162 세포). 차별 marker **Pdyn·Nptx2·Lhx9·Rfx4·Pcsk1·Nek7·Plagl1** + 덜 선택적인 Scg2·Cbln1·Vgf·Slc2a13. 상당수가 기존 bulk TRAP 결과(Dalal 2013)와 일치.
- **sc-qPCR**(Ox-EGFP, 100 세포/11 마우스): Slc32a1 **4.0%**, Slc17a6 **93.0%**, Scg2 100%, Slc2a13 100%, Nptx2 99.0%, Nek7 84.0%.
- **FISH**: Hcrt⁺ 중 Rfx4 **88.6%**(675 세포/4 마우스), Nptx2 **99.5%**(203/4), Pcsk1 **91.3%**(675/3), Scg2 100%, Slc2a13 98.4%.
- **하위군집은 실패**: Hcrt⁺만 재군집화하면 경계가 불분명한(poorly defined) 두 subcluster가 나오고, 이들은 성 특이 유전자(Ddx3y / Xist)와 즉시초기유전자 **Fos** 등으로 가장 잘 구분된다. 저자들은 "진짜 분자 이질성을 보려면 표본 크기와 Hcrt field 전체의 체계적 샘플링이 필요"라고 한정한다 — 기능적 orexin 이질성(투사·전기생리)이 **전사체로 바로 번역되지 않는다**는 음성 결과다.

### Fig 4 — Pmch(MCH) 뉴런: Cartpt로 갈리는 두 하위집단
- LHA^Glut cluster 1(n=119). marker Cartpt·Tacr3·Chodl·Zic1·Otx1·Parpbp·Igf1·Pcdh8·Nptx1·Ntm. **Zic1은 신규 marker**이고 cluster 3과만 공유한다(cluster 3은 Pmch 기저 이상·Gad1·Cartpt·Cbln1·Nkx2-1을 함께 보여 Pmch 하위집단 혹은 공통 발생계보로 추정).
- **sc-qPCR**(Pmch-Cre;EYFP, 19 세포/3 마우스): Slc17a6 **100%**, Slc32a1 **검출 안 됨**, Ntm 94.7%, Zic1 94.7%, Cartpt·Tacr3는 약 1/3.
- **FISH**: Zic1 82.5%(251/4), Chodl 88.8%(206/3), Otx1 97.1%(748/3).
- **두 subcluster**: ① Cartpt·Tacr3·Nptx1·Lypd1·Parm1·Amigo2 ② Cartpt 음성 + Scg2·Nrxn3. 삼중 FISH로 Pmch⁺Cartpt⁺ 세포 중 **Tacr3 71.1%**(283/3)·**Nptx1 69.0%**(261/3)인데 **Nrxn3는 28.0%**(309/3)였다.
- 이 이분법은 rat 신경해부(MCH의 약 절반이 CART 공발현, Tacr3는 CART⁺ MCH에 분포, 출생순서·투사 패턴 상이)와 정합한다.

### Fig 5 — Trh 뉴런: Syt2형(전측) vs Cbln2형(후측)
- LHA^Glut cluster 8(Trh+Cbln2)·12(Trh+Syt2), 합 n=131. 두 집단 모두 **Otp·Onecut2** 발현(공통 발생계보 시사). Onecut2는 Trh 두 집단에만, Otp는 다른 4개 LHA^Glut에도 나온다. Asic4·Sall3·Mdga1도 공통.
- **FISH**: Trh⁺ 중 Slc17a6 **93.6%**(299/3), Otp **80.7%**(732/4), Onecut2 **67.9%**(274/3).
- 구분 marker: cluster 8 = Cbln2·Gpr101, cluster 12 = **Syt2·Cplx1**(둘 다 시냅스 단백질 — 전달물질 방출 특성의 세포타입 특이성을 시사).
- **삼중 FISH(1,177 세포/4 마우스)**: Syt2·Cbln2 중 하나 이상을 발현한 Trh⁺ 중 **둘 다 11.5%, Syt2만 33.4%, Cbln2만 55.1%**. **전후축 구배** — Trh/Syt2는 전측, Trh/Cbln2는 후측 우세(Supplementary Fig 7).

### Fig 6 — Nts/Cartpt GABA 뉴런과 Lepr의 실체
- LHA^GABA cluster 3(Nts+Cartpt, n=75). marker Gal·Calcr·Rasgrp1·Acvr1c·Serpina3n·Crem·Gpr101·Jak1. Slc32a1·Gad1·Gad2 강발현, Slc17a6 미미 = 전형적 GABA 표현형.
- **sc-qPCR**(Nts-Cre;EYFP, 73 세포/3 마우스): Jak1 **98.6%**, Gpr101 **79.5%**, Gal **67.1%**, Cartpt **45.2%**, Slc32a1 **78.1%**, 그런데 **Slc17a6 26.0%**.
- 이 예상 밖 결과를 scRNA-seq에서 재검: Nts 발현을 Gaussian mixture로 이분하자 Nts⁺ 세포의 **70.8%가 GABA·29.2%가 glutamate**였다. Nts는 단일 LHA^Glut 클러스터의 marker로는 뜨지 않지만 여러 Glut 클러스터에 **얇게 퍼져** 있다.
- **FISH**: Nts⁺ 중 Gpr101 68.5%(553/3), Jak1 78.7%(361/3), **Cartpt는 18.1%**(408/3). scRNA-seq 재분석에서도 Nts⁺Cartpt⁺는 전체 Nts⁺의 **19.5%** 뿐 → **"Nts/Cartpt 공발현"은 Nts⁺ GABA의 한 부분집합의 서명**이다. 공발현 비율은 전후축에서 변하고 **mid-LHA에서 최대**다.
- **cluster 3 내부도 둘로 갈린다**: subcluster 1 = **Crh**, subcluster 2 = **Tac1**(Gal은 구분력 없음). 삼중 FISH(1,016 세포/3 마우스): **둘 다 9.9%, Tac1만 50.4%, Crh만 39.7%** → 거의 상호배타. Gal은 Nts⁺Slc32a1⁺의 **59.0%**에, Nts⁺Slc32a1⁻에서는 **0%**(308/3)로 GABA 쪽에 선택적이다.
- **Lepr·Mc4r(★ 사용자 lab 연결점)**: 기존 해부 연구는 LHA의 Nts·Gal 뉴런이 LepRb·MC4R을 상당히 공발현한다고 보고했다. 그러나 이 논문의 scRNA-seq에서는 **cluster 3을 포함해 LHA^GABA 전반에서 Lepr·Mc4r 발현이 낮거나 희박**했다(Supplementary Fig 9a). 저자들은 Lepr 풍부 영역을 다룬 선행 시상하부 scRNA-seq(Romanov 2017)에서도 같은 저검출이 있었다고 적고, **Lepr-Cre;EYFP FACS + sc-qPCR**(마우스 2마리)로 우회해 **Lepr 발현 LHA 뉴런의 대다수가 GABAergic(Slc32a1⁺·Gad1⁺·Gad2⁺)이고 Nts·Gal·Cartpt가 풍부**함을 보였다 = 선행 해부 결과의 광범위한 재확인.

### Fig 7 — Sst⁺ 뉴런 4집단과 perifornical/tuberal 지형
- **4개 Sst⁺ 집단**: LHA^Glut cluster 15(Sst; n=40) + LHA^GABA cluster 6(Sst+Col25a1; n=27), 10(Sst+Meis2; n=60), 13(Sst+Otp; n=70).
  - Glut cluster 15: Ebf3·Tcf4·Nkx2-1 고발현 + **4833423E24Rik·Prokr1·Prlr(prolactin receptor)** 선택적. 특이하게 **Npy·Npw를 함께** 발현한다(그 조합은 LHA^GABA cluster 2를 정의한다).
  - GABA 6: Col25a1·Otp·Cbln4 / GABA 10: Meis2·Cbln2·Dlk1·Tac1·Calb2·Gda / GABA 13: Otp·Dlk1·Calb1·Ptk2b·Pthlh·Nrgn·Rprml·Icam5.
- Sst⁺ 전체(n=197) 재군집화의 1차 분기는 **전달물질 표현형**이고, Slc32a1⁺(n=157)은 다시 3개로 갈려 1차 군집화를 재현했다.
- **sc-qPCR**(Sst-Cre;EYFP, 87 세포/3 마우스): Slc32a1 **73.6%**, Slc17a6 **32.6%**(거의 상호배타), Meis2 **51.7%**(GABA 쪽에 치우치고 Slc17a6⁺에서는 사실상 없음). Npy·Npw는 Sst⁺Slc17a6⁺에서 거의 검출되지 않았다(→ cluster 15 서명의 FISH·qPCR 재현성 한계).
- **FISH 지형(★)**: **perifornical LHA** Sst⁺ = Slc32a1⁺ **56.1%** / Slc17a6⁺ **43.6%** / 둘 다 0.3%(952 세포/5 마우스), 후측으로 가면 Slc17a6⁺가 **최대 71.1%**. **tuberal 영역** Sst⁺ = Slc32a1⁺ **97.3%** / Slc17a6⁺ **1.6%** / 둘 다 1.1%(1,116 세포/5 마우스).
- Meis2(GABA cluster 10 marker)는 perifornical Sst⁺Slc32a1⁺의 **50.4%** 에 있고 tuberal에서는 검출되지 않았다 → tuberal에는 cluster 6·13만 있다는 추론. 반면 Sst⁺Slc17a6⁺의 Nkx2-1 **7.8%**·Npy **5.8%**·Calcr **12.6%** 로 낮아 "marker가 나쁘거나 FISH 검출한계 이하"라고 저자들이 직접 한정한다.
- **전기생리**(Sst-Cre;EYFP; perifornical 40 세포 vs tuberal 19 세포, 각 수컷 4·암컷 4 — Methods 첫 문장·Reporting Summary는 동물 수를 수컷 4·암컷 6으로 적는다): perifornical 뉴런이 **AP half-width가 짧고 decay가 빠르고 AHP가 깊으며**, repolarization latency가 낮고 최대 발화율이 높다(unpaired two-sample Wilcoxon). 전사체 비율 차이와 정합하는 내재적 성질 차이다.

### Fig 8 — Sst⁺ 뉴런 화학유전 활성화와 dLS 투사
- **화학유전**(Sst-Cre, AAV-DIO-hM3Dq-mCherry **n=4** vs AAV-DIO-mCherry **n=6**, CNO 1 mg/kg i.p., **빛/비활동기 8:00–13:00**, 24 h 순화, 주입 전 1 h vs 주입 15분 후 1 h 비교, 측면 카메라 10개 행동 수동 채점·채점자 blind).
  - 이동거리 유의 증가: center-point **P=0.038**, nose-point **P=0.009**.
  - resting **감소**, **rearing·digging·eating·gnawing 증가**. 그중 **gnawing**(우리의 manzanita 막대·나무 스틱을 수 분간 반복해 물어뜯음) **P=0.011**.
  - 저자 해석: **정상적으로 수면압이 높은 시간대에 특정 운동 프로그램을 끌어낸다** + 섭취·탐색의 완만한 증가. LHA^GABA 집단 전체 활성화 표현형의 부분집합과 닮았다.
- **투사**(AAV-DIO-ChR2-EYFP; Sst-Cre n=3, Vglut2-Cre n=2, Vgat-Cre n=5 — Reporting Summary에는 Vgat-Cre 4마리로 적혀 원문 내 불일치): **dorsal lateral septum(dLS)** 에 Sst-Cre·Vglut2-Cre는 조밀한 섬유, **Vgat-Cre는 희박**.
- **역행 추적**(dLS에 0.5% CTb, 3 마우스; CTb IHC + Sst/Slc32a1/Slc17a6 FISH): perifornical의 CTb⁺Sst⁺ 중 **Slc17a6⁺ 75.3%**(81 세포) vs Slc32a1⁺ **16.4%**(67 세포). tuberal에서는 Slc17a6⁺ **15.0%**(40) vs Slc32a1⁺ **51.1%**(45).
- → **perifornical LHA^Glut Sst 뉴런이 dLS를 선택적으로 신경지배**한다는 결론. dLS→LHA 경로가 섭취와 분리된 **food seeking**에 관여한다는 Carus-Cadavieco 2017과 맞물리는 상행 짝이다.

### Discussion 요점
- census = **비뉴런 11 + GABA 15 + Glut 15**(위 ⚠️ 불일치 참조). 클러스터 정체는 전달물질 + 신경펩타이드 + 전사인자 + 시냅스 단백질의 **조합**으로 지정되고, 이는 발생계보·신경화학·기능적 연결성의 수렴을 반영할 가능성이 높다.
- 다수 클러스터가 신경펩타이드 전사체를 공발현한다 → **LHA 전반의 펩타이드-빠른전달물질 co-transmission**을 예측한다(Hcrt에서만 실증됨).
- 전사인자: **Meis2**(LHA^Glut 1개 + LHA^GABA 3개, entopeduncular nucleus의 Sst/Slc17a6 집단 marker와 공유), **Lhx6**(LHA·DMH·ventral ZI; ZI에서는 수면촉진 GABA)가 세포타입 축으로 반복 등장한다.
- LHA^GABA 쪽에서는 **Gal·Nts 집단**(LepRb·MC4R 공발현 보고, 섭식·에너지 균형·보상·스트레스 관련)의 분자 해상도를 올렸고, LHA^Glut 쪽에서는 **Trh 2집단**(ARC AgRP·POMC 입력을 받음)이 섭식 관련 후보로 지목된다.
- Sst⁺ 화학유전 표현형은 LHA^GABA 활성화 문헌의 각성·섭취·탐색 표현형 + **고전 LHA 자극 실험의 비식용 물체 물어뜯기**, CeA 자극의 유사 gnawing(Han 2017), tuberal Sst GABA 활성화의 섭식 유도(Luo 2018 Science)와 나란히 놓인다.
- **한계(원문 명시 + 설계상)**: ① P30 juvenile 단일 시점, ② microdissection에 VZI·DMH 외측이 섞일 수 있음, ③ 2019년형 droplet scRNA-seq의 저검출(Lepr·Mc4r), ④ scRNA-seq는 양성·sc-qPCR/FISH/행동은 대부분 수컷, ⑤ 행동·추적의 n이 작다(hM3Dq 4 vs 6; 투사 2–5마리), ⑥ Sst⁺ 조작은 **4개 하위집단을 한꺼번에** 켠 것이어서 어느 집단이 어느 행동을 내는지 미분해, ⑦ 표본 크기를 사전 산정하지 않고 정규성도 검정하지 않았다(모두 Wilcoxon rank-sum).

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **"LH^LepR 92% GABA"의 근거 등급을 낮춰 인용해야 한다**: 이 논문에서 Lepr의 GABA 편중은 **Lepr-Cre;EYFP 정렬세포 qPCR(마우스 2마리)** 에서 나오고, 같은 논문의 scRNA-seq는 LHA^GABA에서 Lepr을 거의 못 잡았다. 따라서 "전사체가 92% GABA"가 아니라 "**Lepr-Cre 계통으로 표지된 LHA 뉴런의 대다수가 GABA 표현형**"이 정확한 진술이다. [[rossi-2021-transcriptional-and-functional-divergence|Rossi 2021]]의 LHA^Vglut2 투사뉴런 내 Lepr⁺ subset과도 그래서 양립 가능하다(검출감도 문제 + Cre 계통 범위 문제).
- **LH^LepR의 분자 주소 후보 좁히기**: 이 논문의 LHA^GABA cluster 3(Nts/Cartpt, Gal·Calcr·Gpr101·Jak1)과 cluster 1(Gal/Dlk1)이 사용자 lab LH^LepR의 1차 후보다. 특히 **cluster 3 내부의 Crh형 vs Tac1형 상호배타 분할**은 [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]의 **seeking(25%) vs consummatory(39%) subpopulation**과 수가 맞아떨어질 수 있다 — Crh/Tac1 중 어느 쪽이 seeking인지 **LepR-Cre × Crh/Tac1 이중 FISH + phase-isolated 영상**으로 바로 검증 가능한 가설이다(원문은 두 subcluster의 기능을 전혀 보지 않았다).
- **NMPU 축 매핑 가설**: [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]]의 Motivation 노드를 분자 클러스터로 내리면, Need 의존 gate 후보는 Lepr·Calcr·Prlr 같은 **호르몬 수용체 보유 클러스터**(GABA 3·1, Glut 15)이고, 운동 출력 쪽은 Sst/dLS 축이다. [[kim-2024-normative-framework-dissociates-need|Kim 2024]]의 need/motivation 분리를 **수용체 발현 프로파일로 사전 예측**하는 설계가 가능하다.
- **gnawing = "consummatory 운동 프로그램"의 분자 핸들**: [[ha-2024-hypothalamic-neuronal-activation-non-human|Ha 2024]]가 NHP에서 **없다**고 보고한 aberrant gnawing이, 설치류에서는 **LHA Sst⁺ 4집단 혼합 활성화**로 재현된다. 종간 차이를 "자기통제"로만 설명하기 전에, **tuberal/perifornical Sst 비율과 Meis2 아형의 종간 차이**를 먼저 확인할 필요가 있다는 가설이 선다. [[liu-2023-an-iterative-neural-processing|Liu 2023]]의 "비식용 물체 탐침 충동"과도 같은 현상의 다른 해석이다.
- **LH→dLS 상행 축의 세포타입 해상도**: [[concept-lateral-septum|LS]] 페이지는 LHA→LS 상행을 "LHAsf → LS^Crhr2"로, 하행을 DLS^Pdyn→LHA^Vgat·LS^Nts→LH로 적는다. 이 논문은 그 상행 섬유의 **분자 정체가 perifornical LHA^Glut Sst**일 가능성을 준다(CTb⁺Sst⁺의 75.3%가 Slc17a6⁺). dLS→LHA(식이 추구)와 LHA^Sst→dLS가 **되먹임 고리**인지가 미검증 질문이다.
- **Trh 전후축 구배와 LH 하위구역**: Trh/Syt2(전측) vs Trh/Cbln2(후측)는 [[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]]의 am/al vs pm/pl 격자와 **같은 축으로 정렬**된다. 사용자 lab이 쓰는 좌표 구획을 분자 marker로 "주소 확인"하는 데 쓸 수 있는 몇 안 되는 쌍이다.
- **Prlr·Prokr1 보유 Sst^Glut**: prolactin receptor를 가진 LHA 흥분성 집단은 모체 섭식·수유기 과식 연구([[concept-lateral-hypothalamus|LH]] 모체 비만 항목)의 후보 노드다. 원문은 발현만 보고했고 기능은 보지 않았다.

## ⚠️ 위키 내 충돌·긴장
- **"LH LepR의 92%가 GABA"([[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]] §1)의 출처 정밀화** — 위키는 이 수치를 "Mickelsen 2019 scRNA-seq"로 적는다. 원문 **본문에는 92%라는 숫자가 없고**, 해당 근거는 Supplementary Fig 9의 **Lepr-Cre;EYFP sc-qPCR**(마우스 2마리)이며 본문은 "대다수(large majority)"로만 서술한다. 더구나 같은 논문이 **scRNA-seq에서는 LHA^GABA의 Lepr이 낮거나 희박**하다고 명시한다. 수치를 지우지 말고 **"출처는 sc-qPCR, 전사체 검출은 낮음"을 병기**하는 것이 정확하다. ([[rossi-2021-transcriptional-and-functional-divergence|Rossi 2021]]의 glutamatergic Lepr⁺ 병기와 같은 방향.)
- **LH^Nts의 전달물질 비율** — [[concept-neurotensin]]·[[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]]는 "LH^Nts 약 80% Vgat / 20% Vglut2, Nts의 95%가 Gal 공발현"으로 적는다. 이 논문은 **70.8% GABA / 29.2% Glut**(scRNA-seq binarize; sc-qPCR Slc32a1 78.1% / Slc17a6 26.0%)이고, **Gal 공발현은 Nts⁺Slc32a1⁺의 59.0%**(Nts⁺ 전체 기준 아님)다. 80/20은 대략 맞지만 **95% Gal은 이 논문 수치보다 높다** — 기준 집합(Nts⁺ 전체 vs Nts⁺GABA)과 기법(FISH 검출한계)이 달라 단정 불가, 병기한다. [[wang-2021-expansion-assisted-iterative-fish-defines-lateral|Wang 2021]]도 "Gal 공발현이 명시된 Nts 클러스터는 Inh-14 하나"로 같은 방향의 긴장을 이미 기록해 두었다.
- **"Nts/Cartpt"를 하나의 집단처럼 인용하는 관행** — 이 논문의 cluster 3 이름이 Nts+Cartpt여서 종종 "LH Nts 뉴런 = Cartpt 공발현"으로 읽힌다. 원문 수치는 그 반대로, **Nts⁺ 전체의 18.1%(FISH)·19.5%(scRNA-seq)만 Cartpt⁺**다. 클러스터 이름은 **그 클러스터를 구분하는 marker**이지 **집단 전체의 공발현율**이 아니다.
- **Vgat/Vglut2 이분법의 예외 처리** — [[concept-lateral-hypothalamus]]는 "단일 세포의 Vgat·Vglut2 동시 발현(Wang 2021)"으로 이분법 약화를 적고, [[wang-2021-expansion-assisted-iterative-fish-defines-lateral|Wang 2021]] 페이지는 이를 "이분법은 대체로 유지"로 정정해 두었다. 이 논문은 **셋째 패턴**을 더한다: **Slc17a6⁺·Slc32a1⁻이면서 Gad1을 강하게 발현하는 LHA^Glut 클러스터 4개**(Pmch 포함), 그리고 Gad2가 Gad1보다 Slc32a1과 잘 맞는다는 관찰. 즉 **"GABA marker"를 Gad1으로 잡으면 공발현이 흔해 보이고 Slc32a1로 잡으면 드물어 보인다** — [[wang-2021-expansion-assisted-iterative-fish-defines-lateral|Wang 2021]] 페이지의 MCH 분류 긴장과 같은 뿌리다(병기).
- **클러스터 수의 "정답"은 없다** — 이 논문 15+15, [[rossi-2019-obesity-remodels-activity-and|Rossi 2019]] 뉴런 4개(Vglut2·Vgat·Mch·Orx), [[wang-2021-expansion-assisted-iterative-fish-defines-lateral|Wang 2021]]의 통합 consensus **흥분성 17 + 억제성 17**. 모순이 아니라 **해상도·알고리즘(DBSCAN on t-SNE vs Seurat/통합)·샘플 영역(caudal LHA+tuberal vs tuberal LHA)** 의 차이다. 특정 숫자를 "LHA의 세포타입 수"로 인용하지 말 것. 또한 이 논문 자체도 **비뉴런을 본문 13 / Discussion 11**로 다르게 적는다.
- **orexin 이질성** — [[concept-orexin-neurons]]와 [[rossi-2021-transcriptional-and-functional-divergence|Rossi 2021]](Pdyn/Hcrt 투사 아형)은 Hcrt 집단의 기능·투사 이질성을 전제한다. 이 논문은 **전사체만으로는 Hcrt⁺ 내부를 성별·Fos 이상으로 쪼개지 못했다**는 음성 결과를 남겼다(표본 162 세포). "기능적 아형이 있다"와 "전사체 아형이 안 보인다"는 **층위가 다른 결과**이므로 병기한다.
- **Sst의 전달물질 소속** — [[wang-2021-expansion-assisted-iterative-fish-defines-lateral|Wang 2021]]은 Sst를 흥분성 Ex-5 + 억제성 Inh-1/2/5로, 이 논문은 흥분성 1개(cluster 15) + 억제성 3개(6·10·13)로 센다. **"흥분성 1 + 억제성 3"이라는 구조는 두 논문이 일치**하지만 하위 이름·marker 대응표는 없다. 또 이 논문의 perifornical/tuberal 비율(56:44 vs 2:97)은 **영역을 섞어 샘플링하면 Sst의 전달물질 비율이 임의로 바뀜**을 뜻한다 — [[leow-2026-a-cortical-hypothalamic-neural|Leow 2026]]의 **TN^SST**(tuberal nucleus Sst)는 이 논문 기준으로 거의 순수 GABA 집단(97.3%)에 해당하므로, perifornical LHA Sst 결과와 직접 비교하면 안 된다(병기).

## 관련 페이지
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] — 사용자 lab LH^LepR 원저. 본 논문이 "LH LepR 92% GABA"의 인용 출처다(⚠️ 근거는 sc-qPCR, scRNA-seq에서는 Lepr 저검출 — 병기). cluster 3의 Crh/Tac1 상호배타 분할이 seeking/consummatory subpopulation 후보.
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — 사용자 lab LH 리뷰. 세포타입 표(Nts 80/20·95% Gal, Mch, Crh 82% Vgat 등)의 1차 출처 다수가 본 논문 계열. Trh 전후축 구배가 am/pm 격자와 정렬.
- [[wang-2021-expansion-assisted-iterative-fish-defines-lateral]] — 본 논문 4,418 cells가 통합돼 LHA consensus 17+17 클러스터가 됐다. 공간 주소·soma 크기·하위구역을 더한 후속.
- [[rossi-2019-obesity-remodels-activity-and]] — 같은 시기 독립 LHA scRNA-seq(Stuber lab; 본 논문을 note added in proof로 인용). 대조군 2,087 cells가 같은 통합에 들어갔다.
- [[rossi-2021-transcriptional-and-functional-divergence]] — LHA^Vglut2 투사 아형. ⚠️ Lepr mRNA가 glutamatergic 투사뉴런 일부에 있다는 결과로 본 논문의 "Lepr=GABA 대다수" 서술을 보완·긴장.
- [[siemian-2021-lateral-hypothalamic-lepr-neurons]] — LH^LepR 인과 데이터(Aponte lab). 본 논문이 남긴 "Lepr 클러스터의 분자 정체" 공백 쪽.
- [[heyward-2025-single-nucleus-transcriptional-and-chromatin]] — LepR 시상하부 뉴런 39아형(snRNA+snATAC). 본 논문이 scRNA-seq로 못 잡은 Lepr을 LepR 표지 기반으로 해결한 후속 계열.
- [[lee-2026-distinct-lateral-hypothalamic-gabaergic]] — LH^Vgat 기능 ensemble(salience vs value-scaled consumption). 그 논문이 미해결로 남긴 **분자 정체(Lepr·Nts·Crh·Gal)** 의 참조 census가 본 논문이다.
- [[concept-neurotensin]] — LH^Nts 분해. ⚠️ 70.8% GABA / 29.2% Glut, Cartpt 공발현 18–19%, Crh형 vs Tac1형 상호배타.
- [[concept-orexin-neurons]] — Hcrt marker(Rfx4·Nptx2·Pcsk1·Slc2a13)와 ⚠️ "전사체로는 하위집단이 안 보인다"는 음성 결과.
- [[concept-lateral-septum]] — perifornical LHA^Glut Sst → dLS 투사(CTb⁺Sst⁺의 75.3% Slc17a6⁺). LS↔LHA 상호 회로의 상행 섬유 분자 정체 후보.
- [[concept-hypomap]] — 시상하부 단일세포 atlas 계보. 본 논문(GSE125065)은 HypoMap 통합에 들어간 LHA 단독 census 중 하나.
- [[ha-2024-hypothalamic-neuronal-activation-non-human]] — ⚠️ NHP에서 aberrant gnawing 부재. 본 논문은 설치류 gnawing을 LHA Sst⁺ 활성화로 재현(P=0.011)해 종간 차이 해석에 세포타입 변수를 추가한다.
- [[liu-2023-an-iterative-neural-processing]] — LH^GABA 활성 시 비식용 물체 물어뜯기("탐침 충동"). 본 논문의 Sst⁺ gnawing과 같은 현상군.
- [[leow-2026-a-cortical-hypothalamic-neural]] — TN^SST(tuberal nucleus Sst). ⚠️ 본 논문 기준 tuberal Sst는 97.3%가 GABA로 perifornical(56%)과 다르다 — 직접 비교 금지.
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] · [[kim-2024-normative-framework-dissociates-need]] — NMPU 축을 수용체 보유 클러스터(Lepr·Calcr·Prlr)로 내리는 매핑 가설.
- [[concept-zona-incerta]] — microdissection에 VZI가 섞일 수 있고, LHA^GABA cluster 8의 **Lhx6**는 ZI 수면촉진 GABA 집단 marker와 같다.
- [[concept-spatial-transcriptomics]] · [[concept-activity-molecular-registration]] — 본 논문의 해리 기반 census가 잃은 공간 정보를 되찾는 방법론 계보.
- [[bonnavion-2016-hubs-and-spokes-of]] — **같은 lab(Mickelsen·Jackson)의 직계 선행 리뷰**(J Physiol 2016). 이 census가 답한 "LHA 세포타입 taxonomy" 질문을 제기하고, LepRb/Nts/Gal/MC4R "세 번째 집단"을 해부·리포터로 스케치했다(본 논문이 전사체로 재정량).
- [[subramanian-2023-hypothalamic-melanin-concentrating-hormone-neurons]] — 본 논문 Fig 4가 분자적으로 해부한 **Pmch 뉴런의 행동 기능** 쪽 짝(Nat Commun 2023, Kanoski lab, rat): MCH promoter 기반 광계측·DREADDs로 cue 유발 추구와 섭취 중 **appetition** 신호를 동시에 보인다. ⚠️ 본 논문의 **Pmch = Slc17a6 100% / Slc32a1 검출 안 됨**(glutamatergic)은, 위키의 "LH^Vglut2 = 섭식 brake" 요약에 대한 **예외**로 읽어야 함을 분명히 한다 — MCH는 glutamatergic 계열이면서 섭식을 **촉진**한다. 또 본 논문이 보인 **Cartpt⁺/Cartpt⁻ 두 하위집단**은 Kanoski 논문이 섞어 조작한 집단이므로, appetitive·consummatory 성분이 그 분자 축으로 갈리는지는 미검증(연결 가설).
- [[jennings-2015-visualizing-hypothalamic-network-dynamics]] — 이 census가 답해 준 질문을 **기능 쪽에서 제기한 원전**(Cell 2015, Stuber lab, 같은 Vgat-IRES-Cre 계열). LH^Vgat을 단일 집단으로 조작하면 섭식·보상이 양방향으로 움직이지만, 단일세포 영상에서는 appetitive·consummatory 반응 세포가 거의 비중첩이고, 저자들은 이 Vgat 집단이 **Neurotensin·Galanin 등을 담을 가능성을 배제하지 못한다**고 적었다. 본 논문의 LHA^GABA 15 클러스터(1 Gal+Dlk1, 3 Nts+Cartpt …)가 바로 그 후보 목록이다. ⚠️ 단 본 논문은 LHA^GABA 전반에서 **Lepr·Mc4r 전사체가 거의 검출되지 않는다**고 보고하므로, 그 기능 subset을 LepR로 좁히는 [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]] 노선과는 **검출 감도 문제로 병기**해야 한다.
- [[de-vrind-2019-effects-of-gaba-and]] — 본 논문의 두 축이 동시에 걸리는 인과 실험(Obesity 2019, Adan lab): ① `LepRb-cre` hM3Dq 활성이 섭취↓·운동↑·체온↑·체중↓를 내는데, 그 해석은 "Lepr 표지 LHA 뉴런 대다수가 GABA(Nts·Gal 풍부)"라는 본 논문의 sc-qPCR 서술에 의존한다 — ⚠️ 전사체에서는 Lepr 저검출이라는 단서를 함께 읽어야 한다. ② LH^Vgat hM3Dq 활성이 만든 **비식용 물체 갉기**는 본 논문 LHA^Sst 화학유전 활성의 gnawing과 같은 현상이고, 그쪽은 chow 가루 칭량으로 **실제 섭취는 불변**임을 보여 gnawing을 섭취로 오독하지 말라는 정량 근거를 보탠다.
