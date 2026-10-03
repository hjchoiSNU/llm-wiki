---
title: "Expansion-Assisted Iterative-FISH defines lateral hypothalamus spatio-molecular organization (Wang 2021, bioRxiv)"
type: paper
created: 2026-10-03
updated: 2026-10-03
source: "raw/2021 bioRxiv Expansion-Assisted Iterative-FISH defines lateral hypothalamus spatio-molecular organization.pdf"
authors: [Yuhan Wang, Mark Eddison, Greg Fleishman, Martin Weigert, Shengjin Xu, Fredrick E. Henry, Tim Wang, Andrew L. Lemire, Uwe Schmidt, Hui Yang, Konrad Rokicki, Cristian Goina, Karel Svoboda, Eugene W. Myers, Stephan Saalfeld, Wyatt Korff, Scott M. Sternson, Paul W. Tillberg]
year: 2021
journal: "bioRxiv 2021.03.08.434304 (posted 2021-03-08; preprint, 동료심사 전, CC BY-NC-ND 4.0); doi:10.1101/2021.03.08.434304 — 출판판: Cell 184(26):6361–6377.e24 (2021), doi:10.1016/j.cell.2021.11.024 (제목 'EASI-FISH for thick tissue defines…'; 위키 미수록, 서지는 PDF 밖 정보)"
---

> [!takeaway] 연구 방향 관점의 핵심
> **"LH에는 해부학적 하위구역이 없다"는 통념을 분자 지도로 깬 논문.** Janelia(Sternson·Tillberg lab)가 300 µm 두께 절편에서 24개 유전자를 10라운드로 찍는 **EASI-FISH**를 만들고, 이를 tuberal LHA(마우스 3마리, 뉴런 36,423개)에 적용했다. 결과는 세 가지다. ① 발생 전사인자 **Otp/Meis2 × Vglut2/Vgat** 네 유전자만으로 LHA가 재현성 있게 나뉜다. 비스듬히 달리는 **diagonal band**(LHAd-db·LHAs-db)와 쐐기형 LHAdl 등 **9개 spatio-molecular 하위구역**이 나오고, 48개 세포타입 중 45개가 특정 구역에 농축된다. ② 하위구역마다 **받는 축삭 입력이 다르다**(CEA→LHAd-db, VTA→LHAdl, MEA→LHAfm, MM·NDB→LHAfl). ③ Pmch·Trh·Sst·Nts처럼 **펩타이드 하나로 묶던 집단이 위치·soma 크기가 다른 2–4개 아형으로 쪼개진다**.
> 사용자 연구에 닿는 지점은 셋이다. (1) [[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]]의 **좌표 격자형 4 subdivision**(amLH·alLH·pmLH·plLH)은 이 논문의 **비스듬한 분자 층판**과 경계 논리가 다르다. 같은 주입 좌표가 서로 다른 분자 구역을 섞어 칠 수 있다. (2) 패널에 **Lepr가 없다**. [[lee-2023-lateral-hypothalamic-leptin-receptor|LH^LepR]]이 어느 구역·어느 Inh 클러스터에 속하는지는 열린 질문이다. 이 방법은 보관 샘플에 유전자를 추가로 재탐침할 수 있어 바로 검증할 수 있다. (3) 300 µm 두께는 GRIN·2-photon 영상 뒤 사후 분자정체를 붙이는 [[concept-activity-molecular-registration|활성–분자 정합]]과 맞물린다. 이는 [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]] 축을 LH 세포타입·하위구역에 매핑하는 실험의 기반이 된다.

# Expansion-Assisted Iterative-FISH defines lateral hypothalamus spatio-molecular organization (Wang et al. 2021, bioRxiv)

- **형태**: bioRxiv preprint (2021-03-08 게시, doi:10.1101/2021.03.08.434304). 이후 Cell 2021에 출판됐다(위 frontmatter, 위키 미수록). 이 페이지는 **preprint 본문 기준**이다.
- **소속**: HHMI Janelia Research Campus(multiFISH Project Team) + MPI-CBG Dresden(Weigert·Schmidt·Myers — 분할 알고리즘). 교신 **Scott M. Sternson**·**Paul W. Tillberg**(공동 지도). Hahn(USC)에게 LHA 해부를 자문받았다.
- **데이터·코드**: github.com/multiFISH/EASI-FISH, github.com/JaneliaSciComp/multifish (Nextflow 파이프라인), github.com/multiFISH/LHA_analysis, figshare doi:10.25378/janelia.c.5276708.
- **자료 범위**: Drive 사본에서 본문·Figure 1–7·S1–S7 범례·Methods 앞부분(“Assessment of EASI-FISH method”까지)을 읽었다. 공간 분석 Methods 후반·Table S1–S7·참고문헌은 추출 텍스트에 없었다.

## 한 줄 요약
팽창현미경(ExM) 기반의 다라운드 HCR-FISH와 자동 분석 파이프라인(EASI-FISH)으로 마우스 tuberal LHA의 24개 marker 유전자를 3D 단일세포 해상도로 매핑했다. **Otp/Meis2 × Slc17a6/Slc32a1 조합으로 정의되는 9개의 분자·공간 하위구역**과 하위구역별 축삭 입력 차이, 그리고 펩타이드 집단 내부의 위치·형태 이질성(예: **Oxt⁺ 대형 Slc17a6/Gal 아형**)을 보고했다.

## 핵심 내용

### Figure 1 — EASI-FISH 프로토콜: 두꺼운 조직에서 정량 FISH
- exFISH(Chen 2016)를 개량했다. 조직을 hydrogel에 묻어 **2× 선형 팽창**시키면 자가형광이 **95% 감소**하고 굴절률이 물 대물렌즈와 맞는다.
- **RNA 고정자**: Label-IT 대신 alkylating agent **Melphalan**(+Acryloyl-X → "MelphaX")을 썼다. 가격은 1/50이고 RNA 보존(spot 수)은 동등했다. spot 밝기는 높아지고 배경은 줄어 **SNR이 25% 상승**했다.
- 단백분해 단계에 SDS를 넣고 염 농도를 낮춰 **300 µm 두께 투명화·시약 침투**를 개선했다. 증폭은 **HCR v3.0**(짧은 50–100 nt probe, 인접 probe 쌍 요구 → 비특이 spot↓)을 썼다. RNAscope는 두꺼운 조직에 침투하지 못했다(Fig S1C–D).
- 영상은 상용 light-sheet(Zeiss Z.1)로 찍었다. confocal보다 약 **100배 빠르다**. HCR spot이 빛에 조각나 움직이는 "wiggler"가 생겨 광량을 줄였다. AF-647이 빨리 표백돼 **JF-669**로 hairpin을 직접 표지했다.
- 라운드당 3유전자. DNase I로 probe·증폭산물을 지우고 재탐침한다. DNase 처리 뒤 DAPI가 세포질 RNA를 염색하는 **cytoDAPI**(Xu 2020)를 정합·분할 채널로 썼다. 처리 단위는 **1 mm × 1 mm × 0.3 mm**(팽창 전)다.

### Figure 2 — 분석 파이프라인 (스티칭 → 정합 → 분할 → spot 검출)
- **스티칭**: Spark 기반 flat-field 보정 + phase-correlation(Gao 2019).
- **라운드 간 정합(Bigstream)**: RANSAC 특징점 affine → 블록별 affine → 블록별 deformable(Greedy). 고정 볼륨과 9개 이동 볼륨의 구조유사도가 **99% ± 0.8%**였고, ANTs보다 **10배 이상 빠르다**. 정합이 정확해 한 라운드의 분할 mask를 모든 라운드에 쓸 수 있다.
- **3D 분할(Starfinity)**: StarDist의 거리 예측을 pixel affinity로 모은 뒤 watershed를 적용한다. star-convex 제약이 없어 비볼록 soma도 분할된다. 수동 검수 결과(4 샘플, 80,000개 중 ~4,000개) 정확 93%, 과분할 4%, 과소분할 1%, 이웃 오염 2%였다. 과분할의 62%를 사후에 **반자동**으로 교정해(발현 상관·중심 거리·크기 기준으로 자동 표지·병합하고, 표지된 쌍의 15% 미만은 수동 검수; 과분할 오류 <2%로 감소) **최종 정확도는 95.5%**다.
- **Spot 검출(hAirlocalize)**: Airlocalize를 블록 병렬화했다. 발현이 높아 spot이 겹치는 세포는 **총 형광/단일 spot 형광**으로 개수를 환산했다(Slc32a1 검증 slope 1.03, R² 0.93). 기준은 spot 밀도 0.01/voxel 초과다.
- 예시 데이터 35 GB 기준 워크스테이션(128 GB RAM·40 core) **8 h**, LSF 클러스터 **3 h**. 10 TB 이상도 처리했다. 컨테이너화되어 클라우드에서도 돌아간다.

### EASI-FISH 성능 (Fig S1)
- **검출 효율 81%**: Gad1 교차 probe set 두 개의 공국재 65 ± 2%의 제곱근. 본문은 "81% ± 14%", Methods는 "81 ± 1.4%"로 오차가 다르게 적혀 있다.
- **위음성**: Pmch⁺ 뉴런에서 저발현 유전자 **Klhl13 34/34(100%)**, **Igf1 38/41(93%)** 검출(평균 spot 195·41개; scRNA-seq UMI 평균 48·15).
- **위양성**: HCR 오증폭 1/3000 µm³. 상호배타 유전자쌍(Pdyn↔Tacr3)의 교차 spot은 1/50 µm³(세포당 ~30개)로 낮다.
- scRNA-seq와 상관 r=0.96(p=0.0081, 4유전자). **7라운드·40일 이상 지나도 RNA 93.5% 보존**(4유전자, 6마리, LHA·CEA).

### Figure 3 — LHA 24-plex 프로파일링: 뉴런 36,423개, 46개 분자 클러스터
- **scRNA-seq 기준 세트**: 자체 수작업 수집 데이터(LHA, 1,507 cells → 뉴런 1,425; Hcrt 70%·Sparcl1 15%·Nts 10%·Pmch 4.5%)에 Mickelsen 2019(4,418 cells)·[[rossi-2019-obesity-remodels-activity-and|Rossi 2019]](대조군 2,087 cells)를 통합했다. **흥분성 17개(e1–e17) + 억제성 17개(i1–i17)** consensus 클러스터가 나왔고, 여기서 marker **24개**를 골랐다. 자체 데이터는 수작업 선별 편향으로 Hcrt가 과다하고 억제성이 과소하다.
  - 해부 표적은 **Agrp-IRES-Cre × Ai9** 마우스의 tdTomato AgRP 축삭 다발로 정했다. AgRP 축삭이 suprafornical LHA로 뻗는다([[betley-2013-parallel-redundant-circuit-organization-for|Betley 2013]]).
- **EASI-FISH 표본**: 8주령 수컷 C57BL/6J **3마리**, tuberal LHA(Bregma 약 −1.16 ~ −1.36), **10라운드 × 3-plex**. 1라운드 대비 9라운드 RNA 보존 90%. 24유전자 spot 수와 scRNA-seq UMI의 상관 **r=0.86(p=8.4×10⁻⁸)**. 세포당 검출 분자 수는 UMI의 **13(±1.6)배**다.
- 세포 ~86,000개 중 온전한 **66,488개(77%)**를 분석했다. 그중 **Map1b⁺ 뉴런 55%(36,423개)**.
- **Vglut2/Vgat 이분**: scRNA-seq처럼 **Slc17a6⁺ 45%(16,394) vs Slc32a1⁺ 55%(20,029)**로 갈린다. marker 조합으로 79%를 분류했다(미분류 Ex-25: Slc17a6⁺의 7%, n=2,787 / Inh-23: Slc32a1⁺의 14%, n=5,034).
- **흥분성 24개 + 억제성 22개 클러스터**가 나왔다. Inh-1을 빼면 세 마리 모두에서 검출됐고 개체 간 상관이 높아 batch 효과가 없다. ZI 우세 클러스터(Inh-3·15·21)와 EP 우세 클러스터(Ex-12·23)도 섞여 있다. 모든 scRNA-seq 클러스터가 FISH 데이터에 대응했다(p<0.05).

### Figure 4 — 자동 parcellation: Otp/Meis2 × Vglut2/Vgat → 9 하위구역
- 세포타입은 심하게 섞여 있다. 반경 50 µm 안에 평균 **16개 세포타입**이 있고, 최다 타입의 비율도 평균 **27%**뿐이다(Fig S5A–B).
- **알고리즘**: ① Otp/Meis2·Slc17a6/Slc32a1 이웃 농축으로 뉴런을 4 class로 나눈다. ② Gaussian mixture로 3D 분할한다. ③ 세 마리를 rigid 정합한다(ZI·EP·fornix 랜드마크 IoU 0.71·0.76). ④ **STAPLE**로 consensus를 만든다.
- **결과**: 4유전자만으로 **5개 zone**이 나왔다. 대부분 보고된 적 없는 구역이다.
  - **LHAd-db**(dorsal diagonal band): ZI 바로 아래, 흥분성 우세.
  - **LHAs-db**(suprafornical diagonal band): fornix 등쪽·외측, 억제성 우세. LHAd-db와 서로 약 60° 각도를 이루며 비스듬히 달리는 띠다(원문은 '교차'가 아니라 "at an approximately 60-degree angle from each other"이며, 두 띠가 LHAdl 쐐기를 둘러싼다).
  - **LHAdl**: 두 띠 사이의 Meis2 쐐기형 흥분성 구역, 외측에 EP가 있다.
  - **LHAfm**(medial fornical): 혼합, 억제성 비율이 더 높다.
  - **LHAfl**(lateral fornical): 흥분성 우세.
  - 꼬리쪽에는 Hcrt⁺가 LHAd-db와 같은 방향의 띠를 이룬다 → **LHAhcrt-db**(6번째).
- 세포타입 분포로 LHAs-db를 내측/외측, LHAfl을 mv/dl/vl로 더 나누면 **총 9개 하위구역**이다.
- 쥐에서 세포밀도로 정의된 "suprafornical LHA"(Hahn & Swanson)는 분자 기준으로 **LHAfm·LHAs-db·LHAd-db 세 층판**으로 갈라진다.

### Figure 5 — 하위구역별 세포타입 구성과 축삭 입력
- 세포타입은 무작위로 분포하지 않는다(Complete Spatial Randomness p<0.05). **48개 중 45개**가 하나 이상의 하위구역에 농축됐다(χ², p<0.05). 개체 간 상관도 높았다.
- 4유전자 없이 **공간 중첩·평균 최근접이웃(ANN) 거리**로 묶어도 같은 구역 그룹이 나온다(Fig S6A–C). → parcellation이 네 유전자에 의존한 인공물이 아니다.
- 대표 구성:
  - **LHAd-db**: Ex-13(Gpr101/Calb1–), Ex-15(Th/Trh–), Ex-19(Nrgn/Otp), Ex-22. Ex-10(Gal/Slc17a6)은 띠 둘레를 감싼다.
  - **LHAs-db**: Inh-2(Sst/Th), Inh-6(Tac2/Tac1), Inh-12(Tac2/Nrgn), Inh-20이 거의 이곳에만 있다. Inh-9(Nts/Meis2)·Inh-13·17·19는 ZI와 공유한다.
  - **LHAdl**: EP와 비슷한 흥분성 타입(Ex-14 Gad1/Meis2, Ex-18, Ex-20, Ex-23).
  - **LHAfm**: Inh-1(Sst/Otp), Inh-8(Col25a1), Inh-18(Nts), Inh-22(Calb1^high) + Ex-3(Trh/Tac1)·Ex-9·Ex-17.
  - **LHAfl**: Trh⁺ Ex-4·8·11, Ex-5(Sst/Slc17a6), Ex-6, Ex-7.
- 같은 구역 안에서도 **전사적으로 먼 클러스터들이 공존**한다(예: LHAfl의 Trh⁺ Ex-4와 Tac1⁺ Ex-6). 흥분·억제 타입도 섞여 있다(LHAfm의 Ex-3+Inh-8). 반대로 한 scRNA-seq 클러스터(seq-e9, Otp/Gpr101)가 공간적으로 Ex-13·Ex-19 둘로 갈리기도 한다.
- **단일 marker는 구역을 정하지 못한다**(Hcrt 예외). random forest로 24유전자에서 위치(x,y,z)를 예측하면 **분산의 60 ± 2%**를 설명한다. Hcrt·Pmch·Trh를 각각 빼도 ~5%만 떨어지고, Otp/Meis2/Slc17a6/Slc32a1을 모두 빼도 **54 ± 2%**다.
- **축삭 입력(Allen Connectivity Atlas를 CCF에 정합)**: 대부분의 입력은 LHA 전체에 퍼지지 않는다. **CEA→LHAd-db, VTA→LHAdl, MEA→LHAfm, MM·NDB→LHAfl**. 특히 LHAdl과 LHAfl은 입력 패턴이 거의 상호배타적이다.

### Figure 6 — 펩타이드 집단의 분자·공간 아형
- **Pmch(MCH)**: 영상 볼륨 안에서 83%는 LHA, 17%는 ZI에 있다. **Cartpt⁺ 77%(388/501) vs Cartpt– 22%(113/501)**이고, ZI의 Pmch는 99%가 Cartpt⁺다. LHA 안에서 **Pmch/Cartpt–는 LHAdl**, Pmch/Cartpt⁺는 내측·복외측 두 무리로 나뉜다. **92% 이상이 Gad1과 Slc17a6을 함께 발현**한다(van den Pol 2004와 정합). 77%가 비만 관련 GPCR **Gpr83**을 발현한다(Cartpt⁺ 87% vs Cartpt– 43%).
- **Hcrt(orexin)**: LHAd-db 꼬리쪽의 등쪽 diagonal band에 국한된다. **Calb2⁺ 93%(593/640)**, **Nts⁺ 5%(31/640)**, 둘 다 음성 2%(16/640, 더 꼬리쪽)다. 아형끼리는 대체로 섞여 있다.
- **Trh**: 네 흥분성 타입이 있다. **Ex-3**(LHAfm, Trh 고발현, Calb1·Tac1), **Ex-4**(LHAfl-mv, Th·Calb2), **Ex-8**(LHAfl-dl, Gpr83), **Ex-11**(LHAfl-dl, Synpr). **97.6%(1,483/1,519)가 Otp⁺**이고 Otp zone(LHAfm·LHAfl)에 있다. scRNA-seq는 Trh 클러스터를 2개만 찾았다. soma는 Ex-3·Ex-8이 크다.
- **Sst**: 흥분성 Ex-5(LHAs-db·LHAfl)와 억제성 Inh-1(LHAfm, Sst 최고, Gpr101·Nrgn), Inh-2(LHAs-db), Inh-5(분산)가 있다. Ex-5와 Inh-2의 soma가 크고, Ex-5는 덜 볼록하다.
- **Nts**: 흥분성 1개 + 억제성 3개다. **Ex-16**(등내측·더 앞쪽), **Inh-9**(ZI·LHAs-db, Meis2), **Inh-14**(Hcrt 띠와 **33% 공간 중첩**, Gpr101·**Galanin** 공발현), **Inh-18**(분산).
- **Vglut2/Vgat 공발현**: Ex-12는 대부분 **EP**에 있고(EP의 Slc17a6/Slc32a1 뉴런 중 62%(742/1,188)가 Sst⁺), **LHAd-db 앞쪽에 작은 무리**가 있다(Fig S7A–C).

### Figure 7 — 형태 다양성과 반복 정제(iterative refinement)로 찾은 Oxt⁺ 아형
- **대형 뉴런**: Pmch⁺ **3,412±76.1 µm³**, Hcrt⁺ **3,690±40.6 µm³**. 나머지 LHA 평균은 1,533±3.5 µm³로 약 2.5배 차이다. 이 둘을 빼면 **Slc17a6⁺ 1,624±6 > Slc32a1⁺ 1,389±3 µm³**(p<0.0001). soma 부피는 cytoDAPI 총 RNA(r=0.93)·Map1b(r=0.82)와 상관한다.
- **비정형 soma**(aspect ratio <0.7 & solidity <0.7)는 Slc17a6⁺ 6% vs Slc32a1⁺ 2%이고, LHAfl에 농축된다.
- **Ex-10(Slc17a6/Gal)**은 soma 크기 분포에 큰 꼬리가 있고 두 곳(LHAd-db·LHAfl-vl)에 분포한다. 큰 세포는 LHAfl-vl에 있다. → 대응 scRNA-seq 클러스터를 다시 나누자 **Oxt(oxytocin)**가 최상위 차등 유전자로 나왔다. → 새 샘플에 Slc17a6·Gal·Oxt를 탐침하자 복외측 LHA에서 **대형(3,089±140 µm³) Oxt⁺ 뉴런**이 검증됐고, **13/13이 Slc17a6·Gal을 공발현**했다.
- 공간·형태 이상치 → scRNA-seq 재분석 → 새 marker 재탐침으로 이어지는 **EASI-FISH ↔ scRNA-seq 반복 루프**로 희귀 아형을 찾은 사례다. Discussion에서는 Ex-10을 "(Th/Gal)"로 적어 본문 표기와 다르다.

### Discussion 요점·한계
- 비바코드 순차 탐침을 택했다. 유전자 수는 라운드에 비례해 늘지만, 발현량 제약이 없고 voxel 단위 정합이 필요 없어 **일반 lab이 채택하기 쉽다**.
- **300 µm 두께는 개체 간 정렬과 consensus parcellation에 결정적**이었다. 저자들은 LHA 분자 구역에 개체 간 구조 변이가 있다고 보고, 공통 특징을 찾는 데 두께가 필요했다고 쓴다. 이 두께는 slice 기록·in vivo 2-photon 영상(Xu 2020)과 결합할 수 있다.
- LHA 연구가 회로 원리로 나아가지 못한 이유로 **해부 정의의 부재**와 **단일 marker가 세포타입을 대표하지 못함**을 든다. 세포타입 분포를 parcellation 원리로 삼아야 한다고 주장한다.
- **한계(본문·설계에서 읽히는 것)**: tuberal LHA의 한 AP 구간만 다뤘고, 경계는 AP 축을 따라 변한다고 저자들 스스로 쓴다. 수컷만 썼다. 패널은 24유전자다(본문에 **Lepr·Crh·Penk·Pdyn 등은 없다**). LHAfm은 scRNA-seq 해부 경계에 걸려 미분류 세포가 많다. 기능 데이터가 없다. 축삭 입력은 같은 동물이 아닌 Allen atlas 정합 결과다.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **좌표 격자 vs 분자 층판**: [[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]]의 4 subdivision은 AP −1.5·ML 1.0을 경계로 하는 직교 격자다. 이 논문의 표본(Bregma 약 −1.2 ~ −1.4)은 그중 **amLH/alLH 띠**에 해당한다. 그 안에서 분자 구역은 **약 60°로 기운 띠**로 ML 1.0 경계를 가로지른다. → 같은 "amLH 주입"이라도 fornix·ZI 기준 위치에 따라 LHAs-db(억제성 우세)나 LHAfl(흥분성·Trh 우세)을 다르게 칠 수 있다. 주입 위치를 **fornix·ZI 랜드마크 기준**으로 함께 보고하자는 제안의 근거가 된다.
- **LH^LepR의 분자 주소 찾기**: [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]의 LH^LepR(GABA 우세, seeking/consummatory 두 아집단)은 이 패널에 없다. 후보는 Cheon 2025의 "LepR–Nts–Gal" 공발현 서술에 비추어 **Inh-14(Nts/Gal/Gpr101, Hcrt 띠와 33% 중첩)**와 LHAfl의 **Inh-11(Gal)**이다. RNA가 40일 이상 안정적이라 **Lepr probe를 한 라운드 추가**하면 검증된다. 단 Lee 2023의 pmLH(AP −1.5 ~ −2.2)는 이 표본보다 뒤쪽이라 직접 매핑할 수 없다.
- **NMPU × 하위구역 입력 가설**: 하위구역별 입력이 갈린다는 결과(CEA→LHAd-db, MEA→LHAfm, VTA→LHAdl)를 [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]]에 겹쳐 볼 수 있다. 예컨대 **LHAd-db = 정서·위협(CEA) 변조를 받는 Motivation 조절 구역**, **LHAfm = 사회·성 신호(MEA)와 Need를 통합하는 구역**이라는 가설이다. [[korotkova-2026-balancing-acts-lateral-hypothalamic|Korotkova 2026]]의 hunger×anxiety×social arbitration을 해부학적으로 분업하는 후보다. 검증은 하위구역별 표적 주입 + 상태(금식·스트레스·사회) 조작이다.
- **활성–분자 정합 실험 설계**: [[lee-2026-distinct-lateral-hypothalamic-gabaergic|Lee 2026]]의 salience vs consumption ensemble이나 Lee 2023의 seeking vs consummatory LepR 아집단은 **2-photon/GRIN 기록 후 300 µm 절편 EASI-FISH**로 사후 정체를 붙일 수 있다([[xu-2020-behavioral-state-coding-by|CaRMA]] 계보). 이때 "기능 ensemble이 분자 클러스터와 일치하는가, 하위구역과 일치하는가"를 분리해 물을 수 있다. [[proposal-lh-nac-nmpu-neuron-discovery]]의 사후 분자정체 단계에 바로 들어가는 선택지다.
- **MCH 아형과 consummatory 'sustain'**: Cheon 2025의 "Mch = consumption sustain"은 Pmch를 한 집단으로 본 서술이다. 이 논문은 **Cartpt⁺(Gpr83 87%) vs Cartpt–(LHAdl, Gpr83 43%)**의 공간·분자 분리를 보인다. 섭식 중 MCH 반응이 두 아형 중 한쪽에서만 나오는지가 검증 가능한 질문이다.
- **인간 번역**: 발생 전사인자(Otp·Meis2)로 정의된 구역은 종간 보존 가능성이 높다. [[yang-2026-spatial-transcriptomics-identifies-the-molecular|인간 시상하부 공간전사체]]에서 LH 구획을 정렬할 앵커 유전자 후보다.

## ⚠️ 위키 내 충돌·긴장
- **[[concept-lateral-hypothalamus]]의 "단일 세포가 Vgat·Vglut2 동시 발현 (Wang 2021 Cell EASI-FISH) — 전통적 dichotomy 약화"** 서술과의 긴장. preprint 본문은 오히려 "scRNA-seq처럼 **Slc17a6/Slc32a1 이분이 있다**"고 쓰고 뉴런을 45:55로 나눴다. 공발현 클러스터(Ex-12)는 **대부분 EP**에 있고 LHA(LHAd-db 앞쪽)에는 **작은 무리**뿐이다. Pmch⁺의 이중 marker는 **Gad1**+Slc17a6이지 Slc32a1이 아니다. → "이분법은 대체로 유지되고, 소수 예외(EP 인접 Ex-12, MCH)가 있다"로 병기하는 편이 원문에 가깝다. 출판판(Cell) 서술은 확인하지 못했다. (concept 페이지 수정은 synthesis 단계에 맡김.)
- **MCH의 전달물질 분류** — [[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]]는 Mch를 Glutamatergic(Vglut1·2) 행에, [[chen-2025-the-integrated-function-of-the|Chen 2025]]는 LHA^Vglut2 subgroup에 둔다. 이 논문에서는 **Pmch⁺의 92% 이상이 Gad1과 Slc17a6을 함께 발현**한다. 분류는 GABA marker를 Gad1으로 보느냐 Slc32a1(Vgat)로 보느냐에 따라 달라진다(병기).
- **Nts–Gal 공발현 비율** — Cheon 2025는 "Nts 뉴런 95%가 Gal 공발현, ~80% Vgat/~20% Vglut2"라고 적는다. 이 논문의 Nts는 흥분성 1 + 억제성 3 클러스터로 갈리고, **Gal 공발현이 명시된 것은 Inh-14 하나**다. 다만 원문은 Nts 내 Gal 비율을 제시하지 않았고 tuberal 한 구간만 봤다. 수치 충돌로 단정할 수 없어 병기한다.
- **해부 구획 체계의 차이** — 위키의 LH 구획 표준인 Cheon 2025 4 subdivision(좌표 격자)과 이 논문의 9 하위구역(분자 층판, 비스듬한 띠)은 경계 논리가 다르다. 모순이 아니라 **다른 해상도·다른 기준**이지만, 두 체계 사이의 대응표는 없다.
- **Rossi 2019 scRNA-seq 해상도** — [[rossi-2019-obesity-remodels-activity-and|Rossi 2019]]는 같은 데이터에서 뉴런 클러스터 4개(Vglut2·Vgat·Mch·Orx)를 명명했다. 이 논문은 그 대조군을 통합해 17+17 클러스터로 재분할했다. 충돌이 아니라 해상도 차이다.
- **Th의 소속** — [[chen-2025-the-integrated-function-of-the|Chen 2025]]는 Th를 LHA^Vgat subgroup에 둔다. 이 논문에서 Th는 흥분성(Ex-4 Trh/Th, Ex-15)과 억제성(Inh-2 Sst/Th) 양쪽에 나온다(병기).

## 관련 페이지
- [[concept-lateral-hypothalamus]] — 개념 hub. 분자 하위구역 9개·세포타입 46개 지도를 더하는 근거 논문.
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — 사용자 lab LH 리뷰의 4 subdivision·세포타입 표. 좌표 격자 vs 분자 층판, MCH·Nts 서술과 병기.
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] — 사용자 lab LH^LepR. 패널에 Lepr 없음 → 분자 주소는 미해결(Inh-14·Inh-11 후보 가설).
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] · [[kim-2024-normative-framework-dissociates-need]] — NMPU 축을 하위구역·입력에 매핑하는 가설.
- [[lee-2026-distinct-lateral-hypothalamic-gabaergic]] — LH^Vgat 기능 ensemble. 분자 정체(Lepr·Nts·Crh·Gal)는 미해결로 남겼고, EASI-FISH가 그 해결 방법 후보.
- [[concept-spatial-transcriptomics]] · [[concept-hypomap]] — 공간전사체·단일세포 atlas 방법론 맥락.
- [[concept-activity-molecular-registration]] · [[xu-2020-behavioral-state-coding-by]] — 같은 Sternson lab의 CaRMA·cytoDAPI 계보. 300 µm 사후 정합.
- [[proposal-lh-nac-nmpu-neuron-discovery]] — LH 세포 발굴 계획서의 사후 분자정체 단계 대안.
- [[person-sternson-scott]] — 교신저자.
- [[rossi-2019-obesity-remodels-activity-and]] — 통합에 쓰인 LHA scRNA-seq 데이터셋(대조군 2,087 cells).
- [[chen-2025-the-integrated-function-of-the]] · [[rossi-2023-control-of-energy-homeostasis]] — LHA 세포타입 리뷰. Vgat/Vglut2 subgroup 분류와 비교.
- [[concept-orexin-neurons]] — Hcrt diagonal band(LHAhcrt-db), Calb2 93%·Nts 5% 아형, 대형 soma.
- [[concept-neurotensin]] — LH Nts의 4 클러스터(Ex-16·Inh-9·Inh-14·Inh-18) 분해.
- [[concept-zona-incerta]] — LHAs-db와 억제성 타입 공유, ZI의 Pmch는 99% Cartpt⁺.
- [[betley-2013-parallel-redundant-circuit-organization-for]] — scRNA-seq 해부 표적으로 쓴 AgRP→suprafornical LHA 축삭.
- [[korotkova-2026-balancing-acts-lateral-hypothalamic]] — 다중 동기 arbitration의 해부학적 분업 후보(하위구역별 입력).
- [[yang-2026-spatial-transcriptomics-identifies-the-molecular]] — 인간 시상하부 공간 아틀라스. Otp/Meis2 구역의 종간 정렬 후보.
- [[mickelsen-2019-single-cell-transcriptomic-analysis-of]] — 통합 consensus 클러스터에 들어간 **Mickelsen 2019(4,418 cells)** 의 원전 페이지(Nat Neurosci 2019, Jackson lab). 그쪽은 흥분성 15 + 억제성 15로 센다(해상도·알고리즘·샘플 영역 차이 — caudal LHA+tuberal vs tuberal LHA). Sst의 구조는 **흥분성 1 + 억제성 3**으로 두 논문이 일치하지만 하위 이름 대응표는 없다. ⚠️ Vgat/Vglut2 이분법 긴장에 **셋째 패턴**을 추가: Mickelsen은 **Slc17a6⁺·Slc32a1⁻이면서 Gad1 강발현인 LHA^Glut 클러스터 4개**(Pmch 포함)를 보고하고 Gad2가 Gad1보다 Slc32a1 패턴과 잘 맞는다고 적는다 → "GABA marker를 Gad1으로 잡으면 공발현이 흔해 보이고 Slc32a1로 잡으면 드물어 보인다"는 이 페이지의 MCH 분류 긴장과 같은 뿌리(병기).
- [[jennings-2015-visualizing-hypothalamic-network-dynamics]] — **기능 쪽에서 본 "LH는 섞여 있다"의 선행 관찰**(Cell 2015, Stuber lab): LH^Vgat 743 뉴런의 cell map에서 음식 구역 흥분(FZe)·억제(FZi), appetitive·consummatory 반응 세포가 **공간적으로 뒤섞여 클러스터로 분리되지 않았다**. 본 논문의 "반경 50 µm 안에 평균 16개 세포타입, 최다 타입도 27%"가 그 기능적 섞임의 분자적 대응이다. ⚠️ 단 본 논문은 그 섞임 **위에** Otp/Meis2 × Vglut2/Vgat의 재현성 있는 층판(diagonal band)이 있다고 보므로, 그쪽의 "해부학적 패턴 없음"은 **단일 FOV·GRIN 시야 한계** 안의 진술로 한정해 병기할 것.
