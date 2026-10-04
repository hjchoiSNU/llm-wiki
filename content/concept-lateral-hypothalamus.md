---
title: Lateral hypothalamus (LH)
type: concept
created: 2026-04-30
updated: 2026-10-03
aliases: [LH, lateral hypothalamus, lateral hypothalamic area, LHA]
---

> [!takeaway] 연구 방향 관점의 핵심
> LH는 **[[kim-2024-unified-theoretical-framework-underlying-regulation|Need-Motivation-Pleasure-Utility framework]]에서 Motivation의 통합 hub**. ARC AgRP의 need 신호 + 외부 cue + 호르몬을 받아 VTA/NAc 보상 회로로 전달. Cell type (GABAergic, glutamatergic, Lepr, Orx, Mch, Nts, Penk, Gal 등) × 4 anatomical subdivision (am·al·pm·plLH) × 시간 phase (appetitive vs consummatory)의 3차원 복잡성. Homeostatic·pleasure·stress eating 모두 매개. 사용자 lab의 EMM 2025 review가 정립.
>
> ★ **2026 framework 확장** ([[korotkova-2026-balancing-acts-lateral-hypothalamic|Korotkova 2026]]): LH가 **hunger × anxiety × loneliness 3 motivational drive의 arbitration node**. LepR LH 뉴런이 moderate hunger에서 식이 억제 + anxiety 감소 + social 촉진 + **anorexia nervosa 회로 매개**. Tac1·Galanin·Opcml·Ebf1 공발현 subset이 ED·anxiety 분자 substrate.

> [!info] 심화 종합: [[overview-lateral-hypothalamus-synthesis]] — 세포 유형·시간 동역학·Need/Motivation·학습·가소성·회로 통합 분석 (2026-10)

# Lateral hypothalamus (LH)

## 위치
시상하부 lateral 영역. 사용자 lab 기준 4 subdivisions ([[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025 EMM]]):
- **amLH** (anteromedial): AP −0.8~−1.5, ML <1.0
- **alLH** (anterolateral): AP −0.8~−1.5, ML >1.0
- **pmLH** (posteromedial): AP −1.5~−2.2, ML <1.0
- **plLH** (posterolateral): AP −1.5~−2.2, ML >1.0

## 주요 cell types

### Neurotransmitter 기반
- **GABAergic** (Vgat) — 식이 ↑. ⚠️ 단일 레이블로 쓰기 어렵다: 같은 집단이 **행동성 체온조절에도 필수**이고([[jung-2022-a-forebrain-neural-substrate-for|Jung 2022]]) 이득 기능 조작은 섭식이 아니라 **갉기**를 유발한다. 아래 "기능 정의 ensemble" 절 참조
- **Glutamatergic** (Vglut2) — 식이 ↓ ("brake")
- **Camk2a** — 대부분 Vglut2
  - ⚠️ **세포 유형이 아니라 프로모터로 정의된 농축 표지다** → [[concept-lh-camkii-neurons]]. `AAV-CaMKIIα` 프로모터는 *Camk2a*에는 충실하나(mCherry⁺의 95.6 ± 0.4%가 *Camk2a* mRNA⁺) 같은 라벨이 **Vglut2⁺ 78.7% / Vgat⁺ 33%(IHC Gad2⁺ 20.1%)** 혼합이고([[heiss-2024-distinct-lateral-hypothalamic-camkiia|Heiss 2024]]), 같은 프로모터·거의 같은 좌표를 쓴 [[tan-2022-lateral-hypothalamus-calcium-calmodulin-dependent-protein|Tan 2022]]은 GABA와 **"거의 비중첩"(수치 없음)** 이라 적고 vGluT2⁻ **36.13%** 미확인 분획에 기능을 귀속시킨다. **GABA 분율은 보고에 따라 0%(정성)~33%** 로 병기하고, Mickelsen 15+15 census의 어느 클러스터에도 대응되지 않는다.

**1차 census (2026-10 추가)**
- Tuberal LHA EASI-FISH 36,423 뉴런에서 **Slc32a1⁺ 55% vs Slc17a6⁺ 45%** ([[wang-2021-expansion-assisted-iterative-fish-defines-lateral|Wang 2021]]) — 즉 이분법은 수치상 대체로 유지된다.
- **세포타입 '총 개수'에는 정답이 없다**: [[mickelsen-2019-single-cell-transcriptomic-analysis-of|Mickelsen 2019]] 7,129 세포 → 흥분성 15 + 억제성 15, [[rossi-2019-obesity-remodels-activity-and|Rossi 2019]] 20,194 세포 → 뉴런 4 클러스터, [[wang-2021-expansion-assisted-iterative-fish-defines-lateral|Wang 2021]]은 두 데이터셋+자체 1,425 뉴런 통합으로 consensus 17+17(FISH 기준 24+22=46), 리뷰([[rossi-2023-control-of-energy-homeostasis|Rossi 2023]]·[[chen-2025-the-integrated-function-of-the|Chen 2025]])는 ">30 subtype". 차이는 해상도·군집 알고리즘·샘플 영역의 차이다.
- **전달물질 귀속은 marker 선택에 달려 있다** — GABA를 Gad1으로 잡는가 Slc32a1로 잡는가. Mickelsen은 Slc17a6⁺·Slc32a1⁻이면서 Gad1 강발현인 LHA^Glut 클러스터 4개(Pmch 포함)를 보고하고 Gad2가 Gad1보다 Slc32a1 패턴에 더 일치한다고 본다. MCH 분류 논쟁의 뿌리 ([[bonnavion-2016-hubs-and-spokes-of|Bonnavion 2016]]: rat MCH-IR 대다수 GAD67⁺이나 LC 말단 VGAT 공존은 약 6%).
- **좌표 격자가 아니라 발생 전사인자 기반 분자 층판**: Otp/Meis2 × Slc17a6/Slc32a1 네 유전자로 5 zone, 세포타입 분포로 세분하면 9개(LHAd-db·LHAs-db가 약 60° 각도, 그 사이 Meis2 쐐기, 꼬리쪽 LHAhcrt-db). 48 세포타입 중 45개가 특정 zone에 농축되고, Allen Connectivity와 정합(CEA→LHAd-db, VTA→LHAdl, MEA→LHAfm, MM·NDB→LHAfl). 24유전자로 위치 분산의 60±2% 설명 ([[wang-2021-expansion-assisted-iterative-fish-defines-lateral|Wang 2021]]).
- 그러면서도 **국소적으로는 심하게 섞여 있다** — 반경 50 µm 안 평균 16개 타입, 최다 타입도 27%. 기능 쪽 대응으로 [[jennings-2015-visualizing-hypothalamic-network-dynamics|Jennings 2015]]의 743 LH^Vgat 뉴런에서도 appetitive/consummatory 세포가 공간 클러스터로 분리되지 않았다.
- ⚠️ **ZI 경계는 분자적으로 연속** — LHAs-db가 Inh-9(Nts/Meis2)·Inh-13·17·19를 ZI와 공유하고, 영상 볼륨 내 Pmch⁺의 17%가 ZI다. LH 좌표 주입의 'ZI 확산 기여는 작다'는 판단은 보류해야 한다([[de-vrind-2019-effects-of-gaba-and|de Vrind 2019]]도 ZI 확산을 보고하면서 Zhang & van den Pol 2017과 패턴이 반대라는 논거로 기여를 작게 보았다). [[concept-zona-incerta]] 참조.
- **LHA Sst**는 아영역에 전적으로 의존: perifornical Sst⁺는 Slc32a1 56% / Slc17a6 44%(후측에선 Slc17a6 최대 71%)인데 tuberal Sst⁺는 Slc32a1 97%. dorsal lateral septum으로 가는 perifornical Sst는 75%가 Slc17a6⁺이고, 활성 시 비식용 물체 갉기·이동거리↑ ([[mickelsen-2019-single-cell-transcriptomic-analysis-of|Mickelsen 2019]]; [[concept-lateral-septum]]).

### Neuropeptide 기반
| Cell type | 특성 | 식이 효과 |
|---|---|---|
| **Lepr** | LH GABAergic의 **~20%**([[cheon-2025-lateral-hypothalamus-and-eating-cell\|Cheon 2025]] 리뷰) ↔ 사용자 lab 원저 실측 **4%**([[lee-2023-lateral-hypothalamic-leptin-receptor\|Lee 2023]]; 논문은 '4–20%' 병기, LepR의 63%가 food-specific, food-specific LH GABA의 79%가 LepR); Crh와 ~50/52% 상호 공발현; pmLH 우세 | 조건 의존 — phase-isolated에서 seeking·consummatory ↑(Lee 2023, pmLH) vs 급성 제한 후 다중자극 조건에서 섭취 ↓([[petzold-2023-complementary-lateral-hypothalamic-populations\|Petzold 2023]], amLH). 아래 쟁점 절 참조 |
| **Orx** (orexin / hypocretin) | Vglut1·2; Pdyn·Penk 공발현 | foraging·anticipation ↑; consumption 시 즉시 ↓ |
| **Mch** (melanin-concentrating hormone) | Vglut1·2 또는 Gad67; Cart 공발현 | consumption sustain (Orx과 정반대) |
| **Nts** (neurotensin) | 80% Vgat / 20% Vglut2, 95% Gal 공발현, **MC4R 뉴런의 ~75%가 Nts 공발현**(방향 주의) | amLH 집단 활성화 시 식이 ↑([[cheon-2025-lateral-hypothalamus-and-eating-cell\|Cheon 2025]]) — 단 LH^Nts 전체를 TeTox로 침묵시키면 총 먹이 섭취는 거의 불변이고 음수·각성·자발운동이 손상([[sumarli-2026-multidimensional-control-of-ingestive-behavior\|Sumarli 2026]]) |
| **Crh** | 82% Vgat | amLH에서 VTA·LC projection으로 식이 ↑ |
| **Penk** | 52% Vglut2, 42% Vgat | plLH→PAG에서 stress eating ↑ |
| **Gal** | ~50% Vgat | 식이 ↑ |

> 단일 세포가 Vgat·Vglut2 동시 발현하는 경우도 발견 (Wang 2021 Cell EASI-FISH) — 전통적 dichotomy 약화.
>
> ⚠️ **병기** ([[wang-2021-expansion-assisted-iterative-fish-defines-lateral|Wang 2021]] 원문 기준): 위 서술은 원문보다 강하다. 공발현 클러스터 **Ex-12는 대부분 entopeduncular nucleus 소재**이고 LHA에는 LHAd-db 앞쪽의 작은 무리뿐이며, Pmch의 이중 marker는 **Gad1+Slc17a6**(Slc32a1 아님)이다. 즉 이분법 자체는 유지되고, 흔들리는 것은 **'GABA'를 어떤 marker로 정의하는가**다.

### 2026-10 추가 — 분자 정체의 재정량

- **LH^LepR의 분자 주소는 아직 확정되지 않았다**: [[mickelsen-2019-single-cell-transcriptomic-analysis-of|Mickelsen 2019]] scRNA-seq은 LHA^GABA 전반에서 *Lepr*·*Mc4r* 발현이 낮거나 희박하다고 명시하고 Lepr-Cre;EYFP FACS 단일세포 qPCR로 우회했다(흔히 인용되는 '92% GABA'라는 수치는 원문 본문에 없다). [[wang-2021-expansion-assisted-iterative-fish-defines-lateral|Wang 2021]]의 24-유전자 EASI-FISH 패널에도 *Lepr*·*Crh*·*Penk*·*Pdyn*가 없다(후보는 Inh-14 Nts/Gal/Gpr101, Inh-11 Gal).
- **Lepr⁺ LH 뉴런은 최소 두 분자 하위집단** — *Gal*⁺/*Ebf1*⁺ 와 *Tac1*⁺/*Htr2c*⁺/*Opcml*⁺ — 이고 **Ebf1·Opcml은 anorexia nervosa 위험 유전자**다. LepR⁺Ebf1⁺ 공발현이 클수록 불안이 낮다(RNAscope P=0.029) ([[figge-schlensok-2025-a-lateral-hypothalamic-neuronal|Figge-Schlensok 2025]]; [[korotkova-2026-balancing-acts-lateral-hypothalamic|Korotkova 2026]]).
- **LHA LepRb와 LHA Nts는 별개 집단이 아니다** — LepRb의 약 60%가 Nts⁺, Nts의 약 30%가 LepRb⁺이고 이 공존은 LHA에만 국한된다 ([[leinninger-2011-leptin-action-via-neurotensin|Leinninger 2011]]). 즉 **LH^LepR 문헌과 LH^Nts 문헌은 상당 부분 같은 세포를 다른 Cre로 조작하고 있다**.
- **LHA LepRb는 MCH·orexin과 완전 비중첩인 GABAergic 집단**이고(pSTAT3⁺의 81±4%가 LepRb-EGFP⁺, 전부 GAD67⁺) VTA로 조밀 투사하되 선조체·NAc로는 투사하지 않는다 — 단 이는 **dorsal perifornical LHA에 국한된 추적**이다 ([[leinninger-2009-leptin-acts-via-leptin|Leinninger 2009]]). 같은 좌표에 orexigenic OX/MCH와 anorexigenic LepRb가 **상호 배타적으로 공존**한다는 점이 비선택적 자극·DBS 결과 비일관성의 해부학적 근거다.
- ⚠️ **LepR-Cre 조작의 순도 confound**: *Lepr* mRNA는 LHA^Vglut2 투사뉴런 일부에도 있고 LHb 투사에서 비율이 유의하게 높다(X²=121.67, p<0.0001; *Ghsr*은 차이 없음) ([[rossi-2021-transcriptional-and-functional-divergence|Rossi 2021]]).
- **LH^Nts는 하나가 아니다** — 전달물질은 약 **70:30**(GABA:Glut; Mickelsen sc-qPCR Slc32a1 78% / Slc17a6 26%)이고 공간적으로 흥분성 1 + 억제성 3 클러스터이며, cluster 내부는 **Crh형 vs Tac1형으로 거의 상호배타**(둘 다 9.9%, Tac1만 50.4%, Crh만 39.7%)다 ([[mickelsen-2019-single-cell-transcriptomic-analysis-of|Mickelsen 2019]]·[[wang-2021-expansion-assisted-iterative-fish-defines-lateral|Wang 2021]]; [[concept-neurotensin]]).
- ⚠️ **위 표의 'Nts 95% Gal 공발현'은 리포터·IHC 기반 리뷰 수치**([[bonnavion-2016-hubs-and-spokes-of|Bonnavion 2016]]가 정리한 Laque 2013)이고, 1차 census에서는 **Gal 공발현이 Nts⁺Slc32a1⁺의 59.0%**이며 Nts⁺Slc32a1⁻에서는 0%다. Cartpt 공발현도 Nts⁺ 전체의 18–20%에 그친다 — 'Nts = Nts/Cartpt 집단'이라는 등치도 과대다 ([[mickelsen-2019-single-cell-transcriptomic-analysis-of|Mickelsen 2019]]). 같은 이유로 **MC4R⁺의 약 75%가 Nts**(Cui 2012)·LepRb 중 Gal⁺ 20–44% 같은 수치도 근거 종류를 밝혀 인용해야 한다([[concept-mc4r]]).
- **Orexin 뉴런은 거의 순수 glutamatergic이고 분자 이질성이 작다** — sc-qPCR Slc17a6 93% / Slc32a1 4%, Hcrt⁺ 재군집화는 성 특이 유전자와 Fos로만 갈린다. 공간적으로도 꼬리쪽 **LHAhcrt-db 단일 하위구역**에 국한되고 Calb2⁺ 93%, soma 부피는 LHA 평균의 약 2.4배다. ⚠️ 따라서 **'LH=보상 / PFA·DMH=각성'이라는 orexin 기능 이분법은 fornix 기준 좌표 구획이고 분자 구획으로는 지지되지 않는다**([[harris-2005-a-role-for-lateral|Harris 2005]]의 Fos-선호 상관은 LH orexin에만 성립) ([[mickelsen-2019-single-cell-transcriptomic-analysis-of|Mickelsen 2019]]·[[wang-2021-expansion-assisted-iterative-fish-defines-lateral|Wang 2021]]; [[concept-orexin-neurons]]).
- **MCH 뉴런은 Cartpt 기준으로 두 아형**: LHA 내 Cartpt⁺ 77% vs Cartpt⁻ 22%(Cartpt⁻는 LHAdl에 모여 있음), 비만 관련 GPCR *Gpr83*을 아형별로 다르게 발현(Cartpt⁺ 87% vs Cartpt⁻ 43%) ([[wang-2021-expansion-assisted-iterative-fish-defines-lateral|Wang 2021]]).
- ⚠️ **해리 기반 단일세포 데이터 함정**: *Pmch*·*Hcrt* 전사체는 손상 뉴런의 ambient mRNA로 모든 클러스터에 번지므로 '%Pmch⁺/%Hcrt⁺ 세포'를 그대로 읽으면 안 된다([[mickelsen-2019-single-cell-transcriptomic-analysis-of|Mickelsen 2019]]·[[rossi-2019-obesity-remodels-activity-and|Rossi 2019]] 상호 인용).
- **LH^Vgat의 기능 ensemble과 분자 정체는 아직 연결되지 않았다**: Vgat-eYFP는 MCH·Orexin과 **0% 중첩**이고([[jennings-2015-visualizing-hypothalamic-network-dynamics|Jennings 2015]]), 두 기능 ensemble(salience vs value-scaled consumption)은 Cal-Light 투사 추적으로도 구분되지 않았다([[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026]]).
- **LH^Vglut2 '단일 섭식 브레이크'는 최소 두 투사 정의 집단의 합**이다 — 전측 *Pax6*⁺/*Sostdc1*⁺→**LHb**, 후측 *Pdyn*⁺/*Hcrt*⁺→**VTA**(106 DEG). LHb 투사가 더 흥분성이고, **leptin이 두 경로를 반대 부호로 민다**(LHb 투사 반응↓·VTA 투사 반응↑, interaction p=1.6e-14) ([[rossi-2021-transcriptional-and-functional-divergence|Rossi 2021]]).

## 시간 동역학 (appetitive vs consummatory)

[[concept-appetitive-consummatory-phases]] 참조. 핵심 ([[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]] Figure 3):

| Cell type | Appetitive | Consummatory |
|---|---|---|
| LH^Vgat | ↑ peak at food contact (one subset) | sustained ↑ (다른 subset) |
| LH^Lepr | ↑ during seeking (Lee YH 2023) | sustained ↑ during eating |
| LH^Vglut2 | sharp peak at contact (brake) | strong response to aversive |
| LH^Camk2a | hunting 중 ↑ | rapid baseline 회복 |
| LH^Orx | sustained ↑ throughout appetitive | 식사 시작 시 즉시 ↓ |
| LH^Mch | weak ↑ | **sustained ↑** (Orx과 정반대) |

→ **LH GABAergic은 별도의 appetitive vs consummatory subset** 보유 (Jennings 2015 Cell).

> ⚠️ **병기** ([[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026 Cell Rep]], SNU 김성연 lab): 같은 LH^Vgat 뉴런을 세션마다 추적한 2-photon 결과, cue 반응 subset은 **혐오 열자극(37°C IR heat)에도 흥분하는 valence 무관 motivational salience** ensemble이었다(중립 tone엔 무반응). Consummatory subset은 먹이·물·고형식에 일반화되고 금식·영양 농도·Ex-4에 따라 value-scaled된다. "LH^Vgat appetitive = 음식 추구" 서술과 긴장하지만, 이는 활동 상관 결과다.

### 2026-10 추가 — phase 분해의 1차 근거와 경계조건

- **1차 출처**: 자유행동 PR3 과제에서 LH^Vgat 743 뉴런 중 nose-poke-excited 168 / 첫 lick-excited 75가 **거의 겹치지 않는 별개 subset**이었다 ([[jennings-2015-visualizing-hypothalamic-network-dynamics|Jennings 2015]]). 위키 전반의 'phase 분업' 서술은 이 결과에 기반한다.
- **LH^LepR는 seeking 전용(25%)·consummatory 전용(39%)으로 순차·배타적으로 작동**하고, seeking 활성은 자발적 seeking 개시 **약 6초 전**에 이미 상승한다(구동자이지 결과가 아님) ([[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]).
- **Phase-isolated 과제에서만 LH^LepR 광유전 효과가 드러난다**: seeking 전용(숨긴 먹이)에서 digging·food zone↑, consummatory 전용(소형 챔버)에서 섭취↑, 두 phase가 동시 가능한 대형 챔버에서는 활성·억제 모두 무효. NpHR 억제는 consummatory-isolated 조건에서만 섭취↓(필요성) ([[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]).
- ⚠️ **단일세포 수준에서 cue를 변별하는 것은 LH^LepR뿐**이고 LH^Vgat 모집단의 cue 세포는 CS+/CS−를 구분하지 못한다(CS+ centroid 비 **LepR 2.00 vs Vgat 1.26**, 선택성 p=0.0034) ([[siemian-2021-lateral-hypothalamic-lepr-neurons|Siemian 2021]]). → appetitive 축 = **비변별 salience 다수 + 변별적 예측 소수**.
- **consumption ensemble은 '섭취 모드' 공통 표상**: 먹이·물 공통(F-Exc 143 / W-Exc 126 / 둘 다 90, r=0.62)·고형식 일반화(r=0.54)이고 진폭이 금식·영양 농도·exendin-4에 따라 value-scaled된다 ([[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026]]).
- **LH^GABA = 섭식 조각의 '개시' 신호, 유지는 DR^GABA** — 접촉 지속과의 반응 지속 상관이 LH^GABA R=0.387(긴 접촉에선 종료 전 소실) vs DR^GABA R=0.908. 실시간 폐쇄회로 억제는 접촉 잠복기↑·물기 비율↓↓이고 15분 연속 억제 시 섭취가 완전히 차단된다 ([[liu-2023-an-iterative-neural-processing|Liu 2023]]·[[liu-2026-granular-motivational-interaction-and|Liu 2026]]).
- **LH^GABA는 비식용 물체에도 먹이와 같은 접근·접촉 반응**을 보여 '표적 탐침 충동'을 부호화한다(플라스틱 물체 접촉 지속 상관 R=0.556 > 먹이 R=0.387) ([[liu-2023-an-iterative-neural-processing|Liu 2023]]).
- **가치·valence의 연속축**: 섭취 중 LH^GABA의 sustained 활동은 섭취물 가치에 비례하고 LH^Glut는 혐오 용액에서 반비례해, 두 집단의 **비율(LHA^Ratio)** 이 하나의 축으로 가치를 표현한다. 섭취 중 LH^GABA 광억제 → 물 섭취↓, LH^Glut 광억제 → NaCl 섭취↑ ([[gordon-2026-lateral-hypothalamic-control-of-the|Gordon 2026]]).
- **선조체 DA는 섭취의 '개시(bout 수)'만 강화하고 '지속(bout 길이)'은 강화하지 않는다** → 지속은 비선조체 회로 담당 ([[gordon-2026-lateral-hypothalamic-control-of-the|Gordon 2026]]; [[concept-liking-wanting]]·[[concept-consumption-vigor]]).
- **LH^Vgat는 개시 노드만이 아니라 진행 중 섭취의 허가 대상**이다: 상류 NAcSh **D1R-MSN** 입력이 섭취 개시에 꺼지고 종료에 켜지며(LH 투사 NAcSh 세포의 93.6%가 D1R-MSN), LH^Vgat 억제는 24 h 금식에도 진행 중 licking을 끊는다 ([[oconnor-2015-accumbal-d1r-neurons-projecting|O'Connor 2015]]).
- ⚠️ **먹이통 무게 단일 지표는 phase를 혼동시킨다**: LH^Vgat hM3Dq의 'chow 섭취↑'는 **갉기 spillage**였고(나무 블록도 갉음, chow 가루 분리 칭량 시 실제 섭취 불변) lard 섭취·palatable 선호는 오히려 ↓, 수평 운동도 ↓였다. 같은 좌표·같은 hM3Dq로 **LepR subset**을 켜면 바닥 chow 섭취↓(7 h P=5.3e-8)·운동↑·체온↑로 **부호가 갈린다** ([[de-vrind-2019-effects-of-gaba-and|de Vrind 2019]]).
- ⚠️ **대량(bulk) 활성 조작은 phase 다양성을 덮어쓴다**: hM3Dq/CNO는 lick(소비)만 크게 올리고 nose poke·break point는 바꾸지 못하는데, taCasp3 ablation은 lick·nose poke·break point를 모두 떨어뜨린다 ([[jennings-2015-visualizing-hypothalamic-network-dynamics|Jennings 2015]]). 조작 양식이 phase 결론을 만든다.
- **LH^Vglut2 brake의 consummatory 반응은 포만에서 더 크고**(prefed > 24 h fast, lick rate와 무관) **만성 HFD 12주에 둔화**된다 → brake는 고정 속성이 아니다 ([[rossi-2019-obesity-remodels-activity-and|Rossi 2019]]). ⚠️ 투사 정의 집단에서는 방향이 반대로 보고됐다(fasted>fed, [[rossi-2021-transcriptional-and-functional-divergence|Rossi 2021]]) — 병기.
- **brake 해제는 섭식 개시 latency를 주파수 의존적으로 단축**한다 — LH 안에 섭식을 켜는 길이 최소 둘(engine 켜기 vs brake 떼기) ([[jennings-2013-the-inhibitory-circuit-architecture|Jennings 2013]]).
- **LH^Nts는 consummatory 운동량(lick rate) 채널**이며 거의 **inverse value coding**(물 > 20% sucrose)인데, TeTox로 침묵시켜도 24 h 총 섭취·meal 구조는 불변이고 음수·체온·체중·지방량·자발운동이 손상된다. omission trial 무반응(RPE 아님) ([[sumarli-2026-multidimensional-control-of-ingestive-behavior|Sumarli 2026]]). 15년 전 Nts-LepRbKO의 운동·에너지 지출 감소와 같은 방향이다([[leinninger-2011-leptin-action-via-neurotensin|Leinninger 2011]]). ⚠️ 두 연구 모두 Nts-Cre 계열이고 *Nts^cre/+* 대립유전자 자체가 체중·지방량을 낮춘다.
- **Orexin은 'anticipation 전용' 패턴**: 포도당에 억제·leptin에 억제·ghrelin에 흥분([[yamanaka-2003-hypothalamic-orexin-neurons-regulate|Yamanaka 2003]]), CPP 표현 중 LH orexin Fos 48–52%가 선호와 R=0.72–0.90 비례([[harris-2005-a-role-for-lateral|Harris 2005]]), PR 요구 노력에 비례 상승 후 보상 수령 시 감소([[dong-2026-reward-prediction-is-encoded-by|Dong 2026]]).
- **MCH는 'consummatory 전담'이 아니라 통합형**: 학습된 cue CS+>CS−, 음식 맥락 진입, cue 반응이 핥기 잠복 예측(R²=0.50), 섭취 중 식사 초기 최대 후 감쇠하며 **누적 칼로리를 예측**(R²=0.93) ([[subramanian-2023-hypothalamic-melanin-concentrating-hormone-neurons|Subramanian 2023]]). ⚠️ 기능 상실 실험 없음.
- **상류 Need 신호도 조각난다**: 섭식 중 AgRP는 평탄히 꺼지는 게 아니라 **bout 단위로 진동**한다([[liu-2023-an-iterative-neural-processing|Liu 2023]]·[[aitken-2024-negative-feedback-control-of-hypothalamic|Aitken 2024]]: 각 licking bout마다 time-locked dip, τ≈9.5 s; dip을 막으면 satiation 지연·섭취↑).
- **Need vs Motivation 분리는 광유전 시간 동역학 자체로 확인**된다 — AgRP 10 s 활성은 자극 후에도 섭식이 지속되지만 LH^LepR 10 s 활성은 **자극 종료와 함께 섭식이 즉시 중단**된다 ([[kim-2024-normative-framework-dissociates-need|Kim 2024]]; [[concept-need-motivation-pleasure-utility]]).
- **appetitive→consummatory 전이는 drift-to-threshold로 읽을 수 있다** — 선조체 pVLS dSPN ramping 기울기가 licking 개시 시점을 예측하고(p=4.3e-11), 글루탐산 입력에는 ramping이 없어 선조체 국소 변환이다 ([[zhang-2026-inherited-input-and-local-transformations|Zhang 2026]]).
- **GLP-1RA는 두 phase를 동시에 깎는다**: Ex-4가 LH^Vgat의 cue 반응 진폭과 섭취 흥분·억제 진폭을 모두 감소시키되 class 비율은 바꾸지 않는다 ([[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026]]). 후보 상류는 dLS^GLP-1R→LHA 억제 강화([[lu-2024-dorsolateral-septum-glp-1r-neurons|Lu 2024]]); 사용자 lab의 식전 포만([[kim-2024-glp-1-increases-preingestive-satiation|Kim 2024]])과 병렬인 LH 작용점이다.
- **영장류 번역**: LHA GABA 비선택적 화학유전 활성화는 **palatable food 한정**으로 goal-directed 섭식·동기를 늘리고 설치류식 비정상 갉기를 만들지 않는다 ([[ha-2024-hypothalamic-neuronal-activation-non-human|Ha 2024]]) — bulk 조작의 phase 편향이 종에 따라 다를 수 있다.

## 기능 정의 ensemble ↔ 분자·투사 정의 집단 — 대응 미해결 ★

위 표들은 **분자 마커**로 LH를 가른다. 그런데 2022–2026년 단일세포·앙상블 연구들은 같은 LH^Vgat을 **기능 축**으로 가르고, 두 좌표계의 대응은 아직 풀리지 않았다. 사용자 lab의 분자 정의 집단(LH^LepR)이 어느 기능 ensemble에 속하는지가 직접 걸린 문제다.

| 연구 | 나눈 축 | 결과 | 분자 대응 |
|---|---|---|---|
| [[jung-2022-a-forebrain-neural-substrate-for\|Jung 2022]] (김성연) | 열 자극 vs 칼로리 | **thermal P&R 76개** vs 칼로리 보상 86개, 겹침 17개뿐. 집단 벡터가 거의 직교(칼로리–열 처벌 81°) | **실패** — Nts·Tac2·PAG 투사로 정의한 집단이 어느 쪽 반응 프로필과도 안 맞음 |
| [[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles\|Lee 2026]] (김성연) | salience vs 섭취 | **salience ensemble**(혐오 열 + 먹이 cue) vs **ingestion ensemble**(먹이·물·고형식 일반화, 가치 스케일) | **미시도** — 저자가 post hoc 전사체를 다음 단계로 제시 |
| [[gordon-2026-lateral-hypothalamic-control-of-the\|Gordon 2026]] (Stuber) | GABA vs Glut의 **비** | 가치에 대해 부호가 반대(GABA 양 / Glut 음). 비가 선조체 전후축 DA 지형을 설정 | 해당 없음(전달물질 수준) |

**★ 투사 기반 표적화 경고 — 독립적으로 두 번 나왔다**
- Jung 2022 Figure S7: 열 처벌 활성 뉴런과 칼로리 보상 활성 뉴런의 **투사 패턴이 구별되지 않았다**.
- Lee 2026 Cal-Light: salience 태깅 집단과 섭취 태깅 집단의 투사(DBB·VTA·DRN·PAG·periLC)가 **정성적으로 유사**했다.
- → 서로 다른 lab·다른 태깅 기법·다른 자극 축에서 같은 결론이다. [[proposal-lh-nac-nmpu-neuron-discovery]]의 투사 기반 전략은 두 ensemble을 섞어 잡을 위험이 있고, **분자정체 또는 기능 태깅**이 더 직접적이다([[concept-activity-molecular-registration]]).

**남은 질문**
1. [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]의 food-specific LH^LepR(LH GABA의 4%)은 Lee 2026의 ingestion ensemble인가, 아니면 먹이에만 반응하는 모달리티 특이 소수 채널인가. 정의 축이 달라 직접 비교가 안 된다(먹이 vs 레고 ≠ 먹이 vs 물).
2. Jung 2022의 thermal P&R 집단과 Lee 2026의 salience ensemble은 같은 집단으로 보이나(저자들이 그렇게 연결), **열 영역 안에서는 부호가 있는 반응**(열 보상에 억제)이라 "valence 무관 salience"로 전부 읽기는 어렵다.
3. 집단 광도측정에서 보이는 "양가 salience hub"([[jia-2026-novelty-exploration-activated-ensemble-in|Jia 2026]])가 실은 분리된 두 ensemble의 합일 수 있다 — 단일세포 해상도에서 재검토 필요.

## 회로

### Upstream
- ARC AgRP → amLH/alLH (식이 ↑, positive reinforcement, Betley 2013 Cell)
- mPFC, IC, PBN, LS → 다양한 subregion (식이 억제)
- BNST Vglut2 → pmLH (식이 ↑)
- MPOA CaMKII → amLH (식이 ↑)

**2026-10 추가 — 세포타입이 지정된 상류**
- ⚠️ **'LH^Vgat = 섭식 engine'의 상류는 BNST가 아니다**: BNST의 억제성 입력은 **LH^Vglut2를 선택적으로** 겨냥한다(강하게 innervated 세포의 *Vglut2* 발현↑ U=169.0 P=0.016; rabies로 Vglut2^LH→BNST 조밀·Vgat^LH→BNST 최소 F1,20=38.50). Vgat^BNST→LH 광활성은 포만 마우스를 수 초 내 폭식시키고 자가자극까지 지지하지만, **같은 BNST의 VTA 투사는 섭식을 유발하지 않는다** ([[jennings-2013-the-inhibitory-circuit-architecture|Jennings 2013]]; [[concept-bed-nucleus-stria-terminalis]]).
- **NAcSh D1R-MSN → LH 단시냅스 억제 = '섭식 허가' 게이트**: LH 투사 NAcSh 세포의 93.6%가 D1R-MSN이고 LH^Vgat의 78%가 광유발 IPSC를 받는다(표적에 orexin·MCH는 없음). D1R 광억제는 포만에서 섭취를 개시시키고, LH 말단 자극은 24 h 금식에도 섭취를 끊는다 ([[oconnor-2015-accumbal-d1r-neurons-projecting|O'Connor 2015]]; [[stuber-2025-the-neurobiology-of-overeating|Stuber 2025]]).
- **그 게이트는 상태 의존 가소성을 갖는다**: 급성 식이제한 또는 3일 고지방식이 D1-MSN→LH 억제 시냅스를 **eCB–CB1R 의존적으로 depress**시켜 과식 게이트를 열고, 체중 회복 1주 후 사라진다. CB1R 차단(전신·LH 국소)은 결핍 유발 과식을 막고, in vivo HFS로 그 시냅스를 potentiate하면 금식 마우스가 **덜 먹는다** ([[thoeni-2020-depression-of-accumbal-to|Thoeni 2020]]; [[concept-endocannabinoid-system]]).
- **PVN^CRH → LHA^Glu**: 해부학적으로는 흥분성 단시냅스지만 회로 **순효과는 LHA^Glu 억제**이고, 만성 HFD 불안-취약군에서 이 disinhibition이 과식을 만든다. LHA의 **CRHR2(CRHR1 아님)** 차단은 **과식만** 없애고 불안은 건드리지 않는다 ([[wang-2026-a-hypothalamic-circuit-links|Wang 2026]]; [[concept-paraventricular-nucleus]]).
- **mPFC → LH는 LH^LepR를 억제하는 anxiogenic 경로**이고 그 억제는 **고불안 개체에서만** 나타난다(억제 크기 ↔ 불안 점수 R=−0.86) ([[figge-schlensok-2025-a-lateral-hypothalamic-neuronal|Figge-Schlensok 2025]]). ⚠️ 저자들도 다시냅스 가능성을 명시.
- **LS → LH 하행 억제는 최소 세 개의 평행 분자 채널**: LS^Nts([[azevedo-2020-a-limbic-circuit-selectively-links|Azevedo 2020]]), DLS^Pdyn([[goode-2026-a-dorsal-hippocampus-prodynorphinergic-dorsolateral|Goode 2026]]), dLS^GLP-1R([[lu-2024-dorsolateral-septum-glp-1r-neurons|Lu 2024]]) — 모두 LH를 눌러 섭취를 줄인다. 상행 짝(LHAsf→LS)과 합쳐 **LS↔LHA 상호 회로** ([[bhatti-mazo-2026-feature-specific-threat-coding-in|Bhatti Mazo 2026]]).
- **LH 내부 micro-circuit**: LH^LepR는 국소 orexin 뉴런과 연결되어 단식 시 orexin 활성화를 gating한다(trans-synaptic WGA가 OX-IR⁺ 뉴런에서 관찰·MCH에서는 전무; Nts-LepRbKO에서 26 h 단식이 OX c-Fos를 올리지 못함) ([[leinninger-2011-leptin-action-via-neurotensin|Leinninger 2011]]). ⚠️ 단시냅스 확정은 아니고, 같은 원문에 자기 반증(KO 자유급식 상태에서도 OX가 켜져 있지 않다)이 있다.

### Downstream
- LH GABAergic → **VTA GABAergic 억제** → DA disinhibition → NAc DA ↑ (pleasure-induced eating) (Nieh 2015·2016)
- LH^Vglut2 → LHb/PBN (aversive, 식이 ↓)
- LH → PVH·DMH·DBB (다양한 효과)

**2026-10 추가 — 출력 분지와 도파민 인터페이스**
- **기전 확정**: LH^GABA→VTA 말단 자극은 VTA GABA 개재뉴런을 DA 뉴런보다 더 강하게 억제해 DA를 **탈억제**하고 NAc DA를 올리며, 접근·장소선호·ICSS·사회 상호작용·물체 조사를 가로질러 행동을 활성화한다. LH^Glut→VTA는 반대로 회피·NAc DA 감소를 만든다 ([[nieh-2016-inhibitory-input-from-the|Nieh 2016]]).
- ⚠️ **출력은 VTA 단일 표적이 아니다**: 전뇌 지도에서 LH^GABA는 LH 국소·LHb·편도·BNST·중격·VTA(PBP)·vlPAG·IL/PL mPFC로 분기한다 — 말단 조작 결과의 해석 범위를 제한해야 한다 ([[sharpe-2017-lateral-hypothalamic-gabaergic-neurons|Sharpe 2017]]; [[stuber-2016-lateral-hypothalamic-circuits-for|Stuber 2016]]).
- **LH^GABA/LH^Glut 비율이 선조체 DA를 전후축 gradient로 인과 설정**한다: GABA→전측(NAc) DA↑, Glut→전측↓·tail of striatum↑ (223 fibers/47 mice/7 subregions) ([[gordon-2026-lateral-hypothalamic-control-of-the|Gordon 2026]]).
- **LH^MCH는 선조체 DA로 설탕의 '영양 가치'를 전달**한다 — MCH 자극+sucralose가 sucrose 선호를 82%→20%로 역전시키고 선조체 DA를 +69% 올리며, MCH 제거는 sucrose 유발 DA와 영양 조건화를 없앤다. 단 **MCH 자극 자체는 보상이 아니다** ([[domingos-2013-hypothalamic-melanin-concentrating-hormone|Domingos 2013]]).
- **LH orexin→VTA는 학습된 소비성 보상 cue에 의한 추구·재발 채널**(NAc D1R→LH^Vgat 게이트와 비중첩): LH 국소 orexin이 소거된 morphine CPP를 복원하고 SB-334867로 완전 차단, VTA 내 orexin A 단독으로도 복원 ([[harris-2005-a-role-for-lateral|Harris 2005]]).
- **LH^Lepr의 출력 분지가 기능을 가른다**: 초기역경 모델에서 폭식을 구동하는 것은 **LH^Lepr→vlPAG^Penk** 탈억제이고 VTA·MPA 분지는 무효다 ([[shin-2023-early-adversity-promotes-binge-like-eating|Shin 2023]]).
- ⚠️ **투사 표적별 기능 부호는 측정 축에 따라 뒤집힌다**: 통증 축에서 LH^Glu→LHb는 통각과민이지만 →VTA·LPO·LPAG는 진통이고, LH^GABA→LHb는 진통이다 ([[jia-2026-novelty-exploration-activated-ensemble-in|Jia 2026]]; [[concept-lateral-habenula]]).
- ⚠️ **세포체 조작의 음성 결과 ≠ 기능 없음**: GABA 지배 구조(LS)에서 세포체 hM3Dq가 일관된 효과를 못 내는 이유가 **국소 collateral 억제**였고, 투사 특이 조작에서만 섭취 효과가 드러났다 ([[lu-2024-dorsolateral-septum-glp-1r-neurons|Lu 2024]]) — LH 조작 설계에도 같은 교훈이 적용된다(투사 특이 조작 + 종말 광자극을 쌍으로).

## 3가지 eating 매개

| Type | 핵심 LH 회로 |
|---|---|
| **Homeostatic** | Lepr·Orx → leptin·ghrelin signaling; ARC AgRP → LH positive reinforcement |
| **Pleasure-induced** | GABAergic → VTA → NAc DA; palatability 인코딩 (calorie 아님, Garcia *Front Neurosci* 14:608047 — [[jung-2022-a-forebrain-neural-substrate-for\|Jung 2022]]는 2021, [[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles\|Lee 2026]]은 2020으로 인용). ⚠️ Lee 2026의 위내 먹이 반응(구강과 r = 0.40 겹침)이 "calorie 아님"과 긴장 |
| **Stress-induced** | LH-VTA glutamatergic 강화 (Linders 2022); LH Penk → predator odor → high-fat 과식 (You 2023) |

## Korotkova 2026 framework — 3 motivational drive arbitration

LH가 **hunger × safety (anxiety) × social (loneliness)** 사이의 우선순위 결정 node.

### 행동 전환 메커니즘
- **Beta oscillation (15–30 Hz) + "transition cells"** 가 행동 전환 ~2초 전 LH에서 시작 (Chen 2024 Nat Neurosci).
- **Gamma (30–90 Hz)** = food approach 매개 (Carus-Cadavieco 2017 Nature).
- LH→PAG (GABA) = 사냥, LH→PAG (Glut) = 도피 (Li 2018).

### LepR LH 뉴런 (★)
- **Moderate hunger** 에서만 feeding 억제 — sated·strong hunger 효과 없음 (Petzold 2023 Cell Metab).
- **Social interaction 촉진** + **conspecific sex 인코딩**.
- **Anxiety 감소** (Figge-Schlensok 2025 Nat Neurosci) — EPM·anxiogenic 상황에서 활성.
- **Tac1·Galanin·Opcml·Ebf1** 공발현 subset.
- **Anorexia nervosa 회로**: ABA 모델에서 LepR LH chemogenetic 활성 → excessive exercise 차단.

#### ⚠️ 미해결 쟁점 — LH^LepR 활성화는 섭취를 늘리는가 줄이는가

같은 세포집단인데 인과 조작 결과의 **부호가 반대**다. 조건을 붙이지 않고 한쪽만 인용하면 안 된다.

| 출처 | 조작·과제 조건 | 섭취 결과 |
|---|---|---|
| [[lee-2023-lateral-hypothalamic-leptin-receptor\|Lee 2023]] (사용자 lab, 수컷) | **ad libitum(포만) 마우스** ChR2, **phase-isolated** 과제(숨긴 먹이 seeking 전용 / 소형 챔버 consummatory 전용). 좌표 AP −1.5·ML 0.9 | seeking·consummatory **각각 ↑**(섭취량 ↑). 두 phase가 동시에 가능한 대형 챔버(33×33×33 cm)에서는 **활성·억제 모두 효과 없음** |
| [[petzold-2023-complementary-lateral-hypothalamic-populations\|Petzold 2023]] (Korotkova lab, 양성) | **급성 식이제한 직후** 재급식, 먹이·물·물체가 있는 자유접근 인클로저 ChR2. 좌표 AP −1.3·ML 0.9–1.0 | feeding rebound **억제**(먹이 구역 체류·섭취 ↓). **만성(5일) 제한 후·포만 상태에서는 무효**. 급성 갈증에서는 음수 억제 |
| [[korotkova-2026-balancing-acts-lateral-hypothalamic\|Korotkova 2026]] | 위 결과를 배고픔 강도로 요약 | **중등도 배고픔에서만** 억제, 만복에서는 무효 |
| [[siemian-2021-lateral-hypothalamic-lepr-neurons\|Siemian 2021]] (Aponte lab, 수컷+암컷) | ablation·opto·chemo 전부. 좌표 AP −0.9~−1.5·ML ±1.10(alLH 경계) | **전부 무변** — 체중 p=0.95, 일일 섭취 p=0.90, lick p=0.75, ChR2 섭식 p=0.21, NpHR 섭식 p=0.32. 대신 **Pavlovian cue 변별 학습 완전 실패**(block 5 p=0.50)·RTPP 양방향·sucrose CPP 차단(cocaine CPP는 정상) |
| [[de-vrind-2019-effects-of-gaba-and\|de Vrind 2019]] (Adan lab, 수컷 n=8) | hM3Dq로 수 시간 비-phase 특이 활성, ad lib. 좌표 AP −1.2 | **바닥 chow 섭취↓**(7 h P=5.3e-8) + 운동↑·체온↑·3일 반복 체중↓. **cage-top chow에서는 섭취 무변** |
| [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal\|Figge-Schlensok 2025]] (Korotkova lab, 암컷 중심) | hM3Dq/ChR2. 좌표 AP −1.3·ML ±0.9(amLH) | **anxiogenic NSFT에서만 섭식 개시 앞당김**(P=0.0286). 익숙·어두운 우리 free feeding에서는 광활성이 섭식 지연을 전혀 바꾸지 못함 |

조건 차이 후보(모두 원문에 기록됨): ① **과제 구조** — phase-isolated vs 다중자극 자유행동, ② **배고픔 상태** — Lee의 활성화 실험은 포만, Petzold는 급성 제한 직후, ③ **급성 vs 만성 제한**, ④ **LH 아영역** — [[cheon-2025-lateral-hypothalamus-and-eating-cell\|Cheon 2025]]는 Petzold를 **amLH(활성화→식이 ↓)**, Lee 2023을 **pmLH(활성화→seeking·consummatory ↑)** 로 분류한다(AP 0.2 mm 차이의 경계선상 구분), ⑤ 성별(Lee는 수컷 only).

⑥ **맥락의 불안 유발도** — [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal|Figge-Schlensok 2025]]는 같은 조작이 anxiogenic 맥락에서만 작동함을 보였다. ⑦ **종결점 선택** — [[siemian-2021-lateral-hypothalamic-lepr-neurons|Siemian 2021]]처럼 학습 지표를 함께 재면 '섭취 무효 + 학습 전담'이 나오고, [[de-vrind-2019-effects-of-gaba-and|de Vrind 2019]]처럼 대사 지표를 재면 '에너지 균형 조절자'가 된다. ⑧ **분자 비율의 미해결**(LH GABA의 4% vs ~20%) — 사용자 lab의 농축 논증은 '소수 세포가 food-specific 기능의 다수(79%)를 설명한다'는 **기능적** 농축이고, 리뷰([[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]])·[[siemian-2021-lateral-hypothalamic-lepr-neurons|Siemian 2021]]이 채택한 ~20%와 병기해야 한다.

→ Cheon 2025 본문도 "LH Lepr 뉴런의 역할은 논쟁 중이며, 그 원인은 appetitive/consummatory를 검사하는 실험 설계의 불일치"라고 명시한다. 검증 설계는 **동일 계통·동일 자극 세트에서 phase-isolated 조건과 다중욕구 조건, 그리고 amLH/pmLH 좌표를 교차**시키는 것. ([[chen-2025-the-integrated-function-of-the]]·[[rossi-2023-control-of-energy-homeostasis]]도 각각 한쪽 서술만 채택하고 있음에 유의.)

### Orexin
- ACC theta → empathy·prosocial (Kim JG 2026 Science).
- LH→lateral habenula = aggression·status loss 매개 (Flanigan 2020, Fan 2023).
- 인간 panic disorder에서 CSF orexin ↑.

## 모체 비만 (Freire-Agulleiro 2026)
- VMH(SF1/BDNF) → LH connectivity **강화** in 자손 — 비만 predisposition.
- Orexin leptin sensitivity ↑ at P16.
- BNST → LH glutamatergic synapse 강화 (Shrivastava 2023).

## Associative learning

LH는 **food cue ↔ reward 연합 학습의 hub**:
- LH^Vglut2 → DMH Lepr → ARC AgRP 회로가 cue가 AgRP를 빠르게 inhibit하는 학습 매개 (Berrios 2021).
- LH GABAergic 광유전 억제는 cue 학습 자체 차단 (Sharpe 2017).
- [[person-sharpe-melissa|Sharpe]] 2024 Trends Cogn Sci: "the cognitive (lateral) hypothalamus" — LH가 **보상 근접 예측자**로 학습을 편향시키고 중립 정보 학습은 능동적으로 억제.
- ★ **VTADA → LH 역방향 회로** ([[hoang-2026-methamphetamine-potentiates-the-use-of|Hoang 2026 Neuron]]): LH-투사 VTA 뉴런 ~64%가 도파민성; 이 입력이 cue–**특정 결과(outcome-specific)** 학습·의사결정(PIT)에 필요·충분(D1/D2 국소 조절). LH 도파민은 cue-onset RPE가 아니라 **보상 근접 ramp**. **메스암페타민**이 LH-VTA를 양방향 강화해 cue의 결과-특이적 통제력↑(중독 habit 이론 반박). 단, VTADA 입력을 받는 LH 표적은 **LH^GABA가 아닌 다른 집단**(LH 내 송신/수신 평행 스트림).

## 학습·인지 (cognitive LH)

LH를 '섭식 스위치'가 아니라 **무엇을 배울지 정하는 중재자(arbitrator)** 로 읽는 계보 (Sharpe·Schoenbaum / Hoang 계열). "homeostatic LH" 프레임과 대조해서 읽어야 한다.

### 설계 표준 — cue 구간 한정 개입
cue onset 500 ms 전 ~ offset 500 ms 후만 광억제하고 **보상 전달 구간은 건드리지 않는** 설계가 이 계보의 표준이다([[sharpe-2017-lateral-hypothalamic-gabaergic-neurons|Sharpe 2017]], GAD-Cre rat eNpHR3.0 532 nm 16–18 mW). 결손이 **레이저 없는 소거 시험까지 지속**되므로 수행 저하가 아니라 **학습 결손**으로 읽는다. 조작된 LH GABA 집단은 ORX <1%·MCH 1.2%로 펩타이드 계통과 거의 겹치지 않는다 — 즉 'cognitive LH'와 'LH orexin = 보상 cue/재발'([[harris-2005-a-role-for-lateral|Harris 2005]]) 문헌은 **서로 다른 세포군**에 관한 주장이다.

### 핵심 결과
- **cue–음식 연합의 획득과 발현이 모두 무너지지만 직후 보상 섭취는 정상**이다(CS+ 직후 pellet 구간 food-port 체류는 두 군 동일) — 섭식 출력이 아니라 연합 학습 자체가 표적 ([[sharpe-2017-lateral-hypothalamic-gabaergic-neurons|Sharpe 2017]]).
- ★ **VTA 말단만 억제하면 cue 학습이 오히려 촉진**되고 그 효과가 레이저 종료 후에도 남는다 → 이 경로는 행동 구동이 아니라 **교사 신호(기대값) relay**로 학습률을 조절한다는 해석 ([[sharpe-2017-lateral-hypothalamic-gabaergic-neurons|Sharpe 2017]]). ⚠️ 도파민을 측정하지 않은 행동 추론이며 원문도 'an effect we interpret as…'로 한정한다.
- **부호가 과제에 따라 반전된다**: 같은 cue 한정 억제가 보상 근접 cue 학습은 깎고 **중립·원위 cue 학습(second-order conditioning·sensory preconditioning)은 촉진**한다 ([[sharpe-2021-past-experience-shapes-the|Sharpe 2021]]).
- **latent inhibition 소실** — LH^GABA가 '무관 정보 걸러내기'에 능동적으로 관여한다는 증거이자, '억제가 단지 cue 변별력을 높였다'는 대안 설명의 배제 ([[sharpe-2021-past-experience-shapes-the|Sharpe 2021]]). ⚠️ 단일 세션·n=9/10 하나에 의존.
- **경험 의존적 모집**: naive rat의 공포 학습에는 LH^GABA가 불필요하지만(n=4/4 null), 7일 cue–수크로스 학습을 겪은 rat에서는 필요해진다(group F(1,11)=29.615) ([[sharpe-2021-past-experience-shapes-the|Sharpe 2021]]). ⚠️ 실험 1·2는 cue modality와 shock 강도도 다르고 일부 핵심 P가 단측값이다 → 고열량 cue 경험이 많은 개체에서 LH가 **비음식 학습까지 재배선**할 수 있다는 예측은 아직 약한 근거다([[concept-cue-reactivity]]).
- **VTA^DA→LH 역방향 투사가 cue–특정결과 연합의 학습과 사용 양쪽에 필요·충분**하다(unblocking 충분성, 결정 시점 억제 시 specific PIT 소실) ([[hoang-2026-methamphetamine-potentiates-the-use-of|Hoang 2026]]).
- ⚠️ **두 스트림은 하나의 양방향 루프가 아니다**: disconnection 이중 해리에서 LH^GABA↔VTA 차단은 specific PIT를 유지하고 **LH↔VTA^DA 차단에서만** 소실된다 — [[sharpe-2024-the-cognitive-lateral-hypothalamus|Sharpe 2024]] Box 3이 '가장 간명한 설명'으로 제시한 LH^GABA–DA 양방향 microcircuit 가설과 어긋난다(그 Opinion은 preprint 단계 근거에 기반) ([[hoang-2026-methamphetamine-potentiates-the-use-of|Hoang 2026]]).
- **분자 사례**: [[siemian-2021-lateral-hypothalamic-lepr-neurons|Siemian 2021]]의 LH^LepR는 섭취·체중·운동·불안을 전혀 바꾸지 않으면서 **Pavlovian cue 변별 학습만** 담당한다 — 'LH = 학습 전담' 주장의 가장 깨끗한 사례. LH^LepR→VTA ArchT는 학습을 강화하고(extinction까지 지속) ChR2는 지운다 → rat LH^GABA→VTA의 '기대값 relay' 예측이 마우스 **LepR 부분집합**에서 재현. ⚠️ 같은 논문에서 LH^Vgat→VTA는 지속 효과가 없었고, LepR 체세포 조작의 결손도 extinction까지 지속되지 않아 저자들이 rat 결과와의 불일치를 직접 명시한다.
- **BLA와 LH는 원위 예측자에서 반대 부호**다 — BLA는 원위 cue가 이미 동기적으로 유의할 때만 동원되는데, LH^GABA는 유의성과 무관하게 원위 cue 학습에 항상 반대한다. 제안 회로는 BLA(phasic salience + 감각 특이 정보) → LH(동기 상태 관련성·결과 근접도) → VTA(기대값 relay) ([[hoang-2021-the-basolateral-amygdala-and|Hoang & Sharpe 2021]]; [[concept-basolateral-amygdala]]). ⚠️ 신규 데이터 없는 종합이고 BLA→LH 투사를 직접 조작한 학습 실험은 없다.
- ⚠️ **단일세포 수준에서는 '분업 도식'이 단순화**다: LH^Vgat 안에 cue-onset phasic ensemble(67)과 보상까지 ramp하는 ensemble(60)이 공존하며, ramp 쪽은 [[hoang-2026-methamphetamine-potentiates-the-use-of|Hoang 2026]]의 LH DA 보상 근접 ramp와 정합한다 ([[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026]], 상관 관찰).
- **약물 경험은 cue의 통제력을 '결과 표상을 담은 형태로' 키운다** — 메스암페타민 자가투여 후 specific PIT가 선택적으로 강화(자가투여량 ↔ PIT 크기 R²=0.908)되어 '무표상 habit'으로서의 중독 모델에 직접 반례다 ([[hoang-2026-methamphetamine-potentiates-the-use-of|Hoang 2026]]). 수렴 지표로 junk food는 양성 예측 CS에 대한 접근만 선택적으로 키운다([[derman-2018-junk-food-enhances-conditioned-food-cup|Derman 2018]]; [[concept-food-addiction]]).

### ⚠️ 이론 범위 경고
'LH 억제 → 보상 학습↓ + 중립 학습↑'을 근거로 한 **dial 이론(과활성=중독, 저활성=조현병)** 은 이론 범위가 데이터 범위를 크게 초과한다. [[sharpe-2024-the-cognitive-lateral-hypothalamus|Sharpe 2024]]는 단독 저자 Opinion(신규 데이터·통계 없음)이고, 핵심 해리는 같은 lab의 rat 광유전 두 편([[sharpe-2017-lateral-hypothalamic-gabaergic-neurons|2017]]·[[sharpe-2021-past-experience-shapes-the|2021]])에 기댄다. 활성화 실험·활동 기록·질환 모델이 없고, 조현병 예측의 핵인 latent inhibition 소실은 단일 조건화 세션 결과 하나다 ([[person-sharpe-melissa]]).

### 종결점 선택이 결론을 만든다
같은 LH^Vgat/LH^LepR 계열을 **학습 지표**로 읽으면 '학습 전담'([[sharpe-2021-past-experience-shapes-the|Sharpe 2021]]은 섭취를 아예 측정하지 않는다·[[siemian-2021-lateral-hypothalamic-lepr-neurons|Siemian 2021]]), **섭취·대사 지표**로 읽으면 '에너지 균형 조절자'([[de-vrind-2019-effects-of-gaba-and|de Vrind 2019]])가 된다. 두 프레임은 모순이 아니라 **측정 축이 다를 뿐**이며, 어느 쪽을 인용하든 종결점을 함께 밝혀야 한다.

## LH GABAergic → VTA: water reward source ★

[[grove-2022-dopamine-subsystems-track-internal|Grove 2022 Nature]] 결정작 — **LH GABAergic 뉴런이 systemic fluid balance를 추적**하여 VTA DA subset에 입력. 이 channel이 water reinforcement 학습에 필요·충분.

→ LH의 위상이 **motivation hub**에서 **reward 회로 input source**로 격상 ([[concept-primary-reward-signals|primary reward]] state-driven type 매개).

[[weber-2025-interoceptive-origin-reinforcement-learning|Weber 2025]] RL framework가 통합 — drive (SFO) ≠ primary reward (LH→VTA), 두 신호 분리.

함의: 사용자 lab의 LH 연구 ([[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025 EMM]], LH chemogenetic gene therapy Ha 2024)가 **단순 motivation 출력만이 아닌 reward channel input source**를 다룬다는 강한 정당성 — DTx·electroceutical 표적으로서의 가치 상승.

## 비만·스트레스에 의한 LH 가소성 (2026-10 추가)

비만과 스트레스는 LH의 **세포 구성**을 바꾸는 것이 아니라 **같은 뉴런·같은 시냅스의 이득**을 바꾼다. 저장 매체가 성체 시냅스와 발달기 전사 두 층위로 나뉜다.

- **만성 HFD는 brake를 점진적으로 둔화시킨다**: 같은 LHA^Vglut2 뉴런을 0/2/12주 추적해 sucrose 반응·휴지기 활동·내재 흥분성이 모두 감소함을 보였다(식이 decoding 정확도는 12주에 최대) ([[rossi-2019-obesity-remodels-activity-and|Rossi 2019]]).
- ★ **비만의 분자·유전 신호는 GABA engine보다 glutamate brake 쪽에 몰린다**: LHA 14 클러스터 중 HFD에 의한 전사체 변화 정도와 **인간 BMI gene-level 유전 연관이 모두 LHA^Vglut2에서 최대**였다(UK Biobank; GEO GSE130597) ([[rossi-2019-obesity-remodels-activity-and|Rossi 2019]]; [[concept-obesity-genetics]]). ⚠️ brake 둔화가 **어느 투사**에서 일어나는지는 미해결이다([[rossi-2021-transcriptional-and-functional-divergence|Rossi 2021]]의 LHb/VTA 이분).
- **PVN^CRH→LHA^Glu disinhibition + CRHR2**가 불안-취약 아형의 과식을 선택적으로 만든다(불안은 무변) ([[wang-2026-a-hypothalamic-circuit-links|Wang 2026]]).
- ★ **총 80초의 사회 패배가 LHA^glut→VTA^DA 시냅스를 후시냅스 GluA1-AMPAR 증가로 강화**하고, 이 강화가 기호성 지방 과식의 **충분조건**(20 Hz HFS·VTA 내 dexamethasone로 모사)이며 **1 Hz 저주파 depotentiation이 그 과식을 없앤다**(필요조건). 가소성은 **mPFC 투사 VTA^DA에 한정**되고 NAc medial shell 투사에서는 일어나지 않는다 ([[linders-2022-stress-driven-potentiation-of-lateral|Linders 2022]]; [[concept-drug-evoked-synaptic-plasticity]]). ⚠️ NAc lateral shell 미측정, mPFC D1R가 과식을 매개한다는 인과는 미검증.
- **NAcSh D1-MSN→LH 억제 시냅스의 eCB 의존 depression**이 결핍·단기 HFD에서 과식 게이트를 열고 체중 회복 1주 후 사라진다 ([[thoeni-2020-depression-of-accumbal-to|Thoeni 2020]]; [[concept-weight-regain-defended-adiposity]]).
- **지표 수준의 수렴**: 결핍 유발 과식과 그 약리적 차단은 전부 **bout 수(wanting)** 에만 나타나고 **bout당 lick 수(liking)** 는 어느 조건에서도 변하지 않는다 — 다이어트 후 재발은 liking이 아니라 wanting 축의 현상이다 ([[thoeni-2020-depression-of-accumbal-to|Thoeni 2020]]·[[gordon-2026-lateral-hypothalamic-control-of-the|Gordon 2026]]·[[guillaumin-2023-disentangling-the-role-of-nac|Guillaumin 2023]]; [[concept-liking-wanting]]).
- **초기 역경은 LH *Lepr*을 선택적으로 하향조절**해 LH^Lepr 흥분성을 높이고, LH^Lepr→vlPAG^Penk 재편으로 성체 HFD 재노출 시 폭식·비만을 만든다(LH *Lepr* shRNA/CRISPR KO만으로도 ELT 없이 폭식 재현) ([[shin-2023-early-adversity-promotes-binge-like-eating|Shin 2023]]·[[kim-2026-early-life-stress-alters-h3k4me1|Kim 2026]]; [[concept-early-life-adversity]]).
- **연결 가설**: brake만 둔화되면 [[gordon-2026-lateral-hypothalamic-control-of-the|LHA^Ratio]]가 위로 치우쳐 전측(NAc) 가치 채널이 과대 설정된다는 예측이 나온다 — ⚠️ 비만 상태에서의 직접 검증은 아직 없다.

## 임상

- **Bilateral LH DBS**: 난치성 비만 임상 ([[whiting-2013-lateral-hypothalamic-area-deep|Whiting 2013]], [[whiting-2019-deep-brain-stimulation-of|Whiting 2019]]) — 안전성 입증 + **자극이 식욕보다 휴식대사율(RMR)을 16–28% 증가**. 단 [[franco-2018-assessment-of-safety-and|Prader-Willi(Franco 2018)]]·[[dassen-2023-could-deep-brain-stimulation|HO 종합(Dassen 2023)]]에선 LHA DBS가 비효과(때로 체중 증가) — homeostatic 표적의 한계. 파형 의존: 마우스 LH orexin은 120 Hz 정현파 자극으로 억제돼 항불안 효과([[li-2022-hypothalamic-deep-brain-stimulation|Li 2022]]).
- **Chemogenetic gene therapy** (LH GABAergic in non-human primate): 사용자 lab Ha 2024 Neuron — 새로운 비만 치료 path.
- 인간 단일유전자 비만 (MC4R 변이)에서 LH 회로 영향.

**2026-10 추가**
- ⚠️ **RMR 수치 병기**: [[whiting-2019-deep-brain-stimulation-of|Whiting 2019]] 원문은 급성 휴식대사율 **+20%(subject 1)·+16%(subject 2)** 와 야간 수면 에너지소비 **+10.4–10.5% / +4.8%** 를 보고한다(n=2, 둘 다 폐경 여성). **자극을 끄면 즉시 기저로 복귀**하고, 최적 설정은 개인마다 달라(185 Hz/5.5 V vs 60 Hz/3.8 V) **주파수보다 contact 위치·최대 내약 전압이 중요**했다. 체중·임상 효과는 평가되지 않았다 — 위 '16–28%'는 다른 요약 경로의 수치이므로 병기한다.
- **열생산의 세포 후보**: LH^Vgat·LH^LepR 활성 모두 눈 온도(체온 proxy)를 올리고 3일 반복으로 체중을 줄이며, LH^Vgat에서는 **수평 운동이 줄어도 체온이 올라** 운동과 독립된 열생산을 시사한다(저자 제시 기전은 caudal PAG 경유 BAT thermogenesis) ([[de-vrind-2019-effects-of-gaba-and|de Vrind 2019]]). ⚠️ 눈 표면 온도 proxy이고 BAT 온도·UCP1·간접 열량 측정이 없다 → 인간 LHA DBS의 RMR↑를 매개할 **후보**일 뿐이다.
- **인간 LHA 진동 서명**: 배고픔 중 food 이미지에 beta/low-gamma↑·theta↓, 포만에서 alpha↑·beta↓. 포만 리듬을 모사한 **8 Hz 자극은 주관적 fullness만 만들고 craving·실제 섭취량은 바꾸지 못했다** — homeostatic 포만과 non-homeostatic craving의 분리 ([[talakoub-2017-lateral-hypothalamic-activity-indicates|Talakoub 2017]], n=1 PWS; [[concept-responsive-neurostimulation]]·[[concept-loss-of-control-eating]]).
- **인간 LH–배외측 해마(dlHPC) orexigenic 축**: 7T tractography로 LH streamline이 dlHPC에 수렴하고, 침습 전극에서 sweet-fat cue anticipation에 저주파(4–6 Hz)가 특이적으로 상승하며, LH↔dlHPC 양방향 evoked potential과 post-mortem MCH⁺ 투사가 확인된다. **폭식 경향군에서 LH–dlHPC 연결성이 감소**해 있고 독립 비만 예측인자다 ([[barbosa-2023-an-orexigenic-subnetwork-within-the|Barbosa 2023]]; [[concept-hippocampus-feeding]]). 표적화 쪽 짝은 NAc→LH tractography ([[parker-2022-appetitive-mapping-of-the-human|Parker 2022]]).
- **영장류 cell-type 특이 path**: AAV9-hDlx-hM3Dq CED + MRI 가이드로 LHA GABA를 활성화하면 **palatable food 한정**으로 goal-directed 섭식·동기가 늘고(unpalatable·물·비식품·만복·CNO 단독에서는 전부 무효), [18F]flumazenil PET·7T MRS로 생물학적 효능이 검증됐으며 설치류식 aberrant gnawing은 없었다 ([[ha-2024-hypothalamic-neuronal-activation-non-human|Ha 2024]], n=3). ⚠️ LH^Vgat 전체 비선택적 조작이고 rs-fMRI 소견은 상관 수준.
- **GLP-1RA 시대의 접점**: 실사용 코호트에서 반응 개인차가 임상·유전 요인으로 약 25%만 설명된다 — 나머지가 행동 표현형·회로 마커가 들어갈 자리이고, **Ex-4에 의한 LH^Vgat cue·섭취 반응 진폭 감쇠 폭**이 후보 지표다([[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026]]) ⚠️ 인간에 직접 측정된 바 없는 **연결 가설** ([[concept-glp1ra-response-variability]]·[[concept-glp-1]]).

## 관련 페이지
- [[concept-lh-camkii-neurons]] — ⚠️ **"LH^CaMKIIα"는 세포 유형인가 프로모터 표지인가** — 같은 프로모터·같은 부위를 쓴 Heiss 2024(각성 vs LMA)와 Tan 2022(포식 섭취)이 GABA 혼입을 반대로 결론하는 재현 불가 문제, 그리고 프로모터 라벨의 인용·설계 규칙.
- [[onimus-2026-dopamine-ensembles-regulating-appetite]] — LH를 DA ensemble의 intermediary hub로 위치시키고, NAc D1R^Serpinb2→LH LepR이 leptin anorexia를 override (TEM 2026).
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — 1차 reference.
- [[chen-2025-the-integrated-function-of-the]] — LHA 세포타입(>30 subtype)·기능 종합 리뷰; Vgat("engine")/Vglut2("brake")/orexin 프레임, LHA^Lepr social·LHA^Nts thirst 우선순위 (Cells 2025, 비-사용자 lab 레퍼런스).
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] — Motivation hub로서의 LH.
- [[concept-arcuate-nucleus]] — 핵심 입력원 (AgRP).
- [[concept-npy-agrp-neurons]] — DMH Lepr 매개 LH^Vglut2 → AgRP 회로.
- [[concept-leptin]] — LH Lepr 직접 작용.
- [[concept-ghrelin]] — Orx 활성.
- [[concept-dopamine-reward-system]] — LH→VTA→NAc.
- [[concept-appetitive-consummatory-phases]] — phase 정의.
- [[park-2025-glucagon-like-peptide-1-and-hypothalamic]] — LH GLP-1R.
- [[lee-2025-hijacked-brain-modern-obesity-cue]] — 임상.
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] — LH^LepR seeking·consummatory 분리 (사용자 lab).
- [[kim-2024-normative-framework-dissociates-need]] — LH^LepR=Motivation 입증 (사용자 lab).
- [[proposal-lh-nac-nmpu-neuron-discovery]] — LH·NAc NMPU 식욕 세포타입을 CaRMA·TRU-FACT·Cal-Light로 발굴하는 연구계획서.
- [[ha-2024-hypothalamic-neuronal-activation-non-human]] — NHP chemogenetic LH GABA 활성화 (사용자 lab).
- [[grove-2022-dopamine-subsystems-track-internal]] — LH GABAergic → VTA water reward (정방향; Hoang 2026의 역방향 짝).
- [[hoang-2026-methamphetamine-potentiates-the-use-of]] — VTADA→LH가 outcome-specific 학습·결정을 구동; 메스암페타민이 LH-VTA 강화 (Neuron 2026, Sharpe lab).
- [[person-sharpe-melissa]] — "cognitive LH" framework 원전 인물 hub.
- [[stuber-2025-the-neurobiology-of-overeating]] — NAc D1R-MSN→LHA GABA "feeding authorization" gate·LHA glutamate 억제 (Neuron 2025).
- ★ [[gordon-2026-lateral-hypothalamic-control-of-the]] — **LHA의 위상 재정의**: LH^GABA/LH^Glut를 한 마우스에서 동시 기록하고 선조체 6–7곳 DA를 함께 측정했다. GABA/Glut를 "engine vs brake" 스위치가 아니라 **두 집단의 비(LHA^Ratio)라는 연속 gain 변수**로 보며, 이 비가 섭취물 가치·valence를 연속축으로 추적하고 선조체 **전후축 도파민 지형**(전방 가치 / 후방 감각운동 / TS 평행)을 인과적으로 세운다(GABA=전방 NAc DA↑, Glut=전반 DA↓·**TS DA↑**). 소비 중 GABA는 가치와 양으로(FR:Suc·WR:NaCl에서 뚜렷), Glut는 혐오 용액 조건(WR:NaCl)에서 음으로 scaling. 하류 도파민은 핥기의 **개시**를 강화한다. LH를 "먹을지 스위치"에서 "선조체 어디에 DA를 뿌릴지 조절기"로 재정의 (Neuron 2026, Stuber lab). 개념 [[concept-striatal-dopamine-gradient]] · 인물 [[person-stuber-garret]].
- [[weber-2025-interoceptive-origin-reinforcement-learning]] — RL framework로 LH→VTA 통합.
- [[concept-primary-reward-signals]] — LH→VTA가 매개하는 state-driven reward.
- [[concept-interoception]] — LH가 fluid interoception → reward 변환.
- [[knight-liberles-2025-interoception]] — frontier overview.
- [[person-choi-hyung-jin]] — 본 lab.
- [[korotkova-2026-balancing-acts-lateral-hypothalamic]] — 3 motivation arbitration framework.
- [[jia-2026-novelty-exploration-activated-ensemble-in]] — LH Fos "novelty ensemble"이 통증·정서·보상을 아우르는 general salience hub; opioid 비의존 진통·항불안 (Nat Commun 2026).
- [[liu-2026-granular-motivational-interaction-and]] — LH^GABA=feeding initiation hub, LH^VGLUT2=brake/interruption; 두 집단의 antagonistic 미세조정 (Neuron 2026).
- [[person-korotkova-tatiana]] — 동행 lab.
- [[barbosa-2023-an-orexigenic-subnetwork-within-the]] — 인간 LH→배외측 해마(dlHPC) MCH orexigenic 투사; 비만에서 연결성↓ (Halpern, Nature 2023).
- [[parker-2022-appetitive-mapping-of-the-human]] — 인간 NAc→LH tractography로 rDBS 표적화 (Halpern).
- [[concept-hippocampus-feeding]] — LH–dlHPC orexigenic 축 개념 hub.
- [[concept-nucleus-accumbens]] — NAc shell→LH hedonic eating 회로.
- [[freire-agulleiro-2026-early-life-programming-of]] — maternal obesity LH connectivity 강화.
- [[lopez-2026-hypothalamic-regulation-of-energy]] — editorial.
- [[kim-2025-mechanisms-of-glucagon-like-peptide]] — 뇌 GLP-1R brain-wide 리뷰; LH 포함 GLP-1R 부위별 활성 정리 (APEM 2025, 본 lab).
- [[thanarajah-2019-food-intake-recruits-orosensory]] — 인체 PET; 식이 즉시(감각) 단계에 시상하부(LH 추정) DA 분비 검출 (Cell Metab 2019).
- [[concept-central-amygdala-glp1r]] — hedonic feeding의 또 다른 mesolimbic 상류(CeA^Glp1r→VTA→NAc)와 대비.
- [[concept-deep-brain-stimulation]] — LHA를 표적하는 침습 DBS hub.
- [[whiting-2013-lateral-hypothalamic-area-deep]] · [[whiting-2019-deep-brain-stimulation-of]] — 인간 LHA DBS(RMR↑).
- [[franco-2018-assessment-of-safety-and]] — PWS LHA DBS(비효과).
- [[li-2022-hypothalamic-deep-brain-stimulation]] — LH orexin 파형 의존 항불안(마우스).
- [[person-whiting-donald]] — LHA DBS for obesity 임상 주도.
- [[talakoub-2017-lateral-hypothalamic-activity-indicates]] — 인간 LHA LFP: hunger=beta/gamma, satiety=alpha; 8 Hz 자극이 fullness 유발(craving 불변).
- [[concept-bed-nucleus-stria-terminalis]] · [[guerrero-hreins-2026-bed-nucleus-of-the-stria]] — BNST→LH GABAergic 투사가 포만 상태에서도 기호식 섭취 구동(Jennings 2013); 인간 BNST stress 매핑.
- [[woods-2016-regulation-of-the-motivation]] — LH를 "hunger center"가 아닌 항상성·보상 통합 hub로 정리(orexin→VTA→NAc·LH→PVT) (book chapter 2016).
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
- [[dong-2026-reward-prediction-is-encoded-by]] — LH orexin의 reward prediction 부호화.
- [[concept-orexin-neurons]] — LH 소재 orexin 뉴런 hub.
- [[petzold-2023-complementary-lateral-hypothalamic-populations]] — LH^LepR·LH^Nts 상보 arbitration(영양 vs social).
- [[rossi-2023-control-of-energy-homeostasis]] — LHA ≥30 세포타입·Vgat/Vglut2 회로 종합 리뷰.
- [[shin-2023-early-adversity-promotes-binge-like-eating]] — LH^Lepr(GABA)→vlPAG^Penk 초기역경 폭식 회로.
- [[murray-2014-hormonal-and-neural-mechanisms]] — LHA leptin/neurotensin→도파민·섭식 조절.
- [[sumarli-2026-multidimensional-control-of-ingestive-behavior]] — LH^Nts가 licking 운동량·음수·각성·자발적 운동을 조율하되 총 섭식은 불변; TeTox silencing 다차원 표현형 (bioRxiv 2026, Soden lab).
- [[concept-neurotensin]] — LH-Nts 세포타입의 상위 펩타이드 개념 hub.
- [[person-soden-marta]] — LH-Nts↔VTA 신경펩타이드 회로 연구자.
- [[concept-zona-incerta]] · [[leow-2026-a-cortical-hypothalamic-neural]] — 인접 orexigenic 노드 ZI; rZI^GABA는 강박 섭식 전담(LH^GABA→VTA sucrose seeking과 병렬, TN^SST 일반 식욕과 해리).
- [[concept-medial-preoptic-area]] · [[jamieson-2026-neural-circuits-for-mammalian-parental]] — LH가 중재하는 drive 목록의 **바깥쪽 확장**: 양육이 섭식과 경쟁하며, MPOA가 그 중재 노드. LH→PVN^OT 흥분성 입력이 부성 양육 전환에 관여 (NRN 2026).
- [[bhatti-mazo-2026-feature-specific-threat-coding-in]] — **LHA subfornical area(LHAsf)→외측중격(LS)** 이 LH의 새 출력 표적으로 확인. 이 상행 투사는 위협 회피에서 **행동 예고 신호**(CS 내내 ramp → Av-run까지)를 나르며, 억제 시 회피 확률↓. 시상하부 입력 전반이 LS에 **bottom-up 행동·현저성** 축을 공급한다 (Nature 2026, Fishell lab).
- [[concept-lateral-septum]] — LH와 상호 연결되는 변연계 평가 노드. [[gruzdeva-2026-hunger-neurons-track-available-food|Gruzdeva 2026]]의 해마→LS→LH→DMH→AgRP 가설과 방향성 쟁점.
- [[goode-2026-a-dorsal-hippocampus-prodynorphinergic-dorsolateral]] — **LHA^Vgat 뉴런이 외측중격 DLS^Pdyn의 단시냅스 억제 표적**(광유발 IPSC, EPSC 없음; orexin·VTA는 비표적). 이 억제가 **맥락에 따라 얼마나 먹을지**를 정한다. [[bhatti-mazo-2026-feature-specific-threat-coding-in|Bhatti Mazo 2026]]의 LHA→LS 상행과 합쳐 **LS↔LHA 상호 회로** 성립 (Neuron 2026).
- [[azevedo-2020-a-limbic-circuit-selectively-links]] — LS^Nts→LH 종말 광자극만으로 섭취가 가역적으로 감소. LS→LH 억제의 **두 번째 병렬 채널**(DLS^Pdyn와 세포군 거의 비중첩) (eLife 2020).
- [[concept-lateral-habenula]] — LH→LHb 공격성·서열 상실 투사의 하류 구조 개념 hub(혐오·음성강화 축).
- [[wang-2015-whole-brain-mapping-of-the-direct]] — **LH가 멜라노코르틴 세 갈래 모두에 직접 투사하는 12개 공통 상류 핵** 중 하나. ARC POMC·AgRP의 주요 시상하부 입력원이자 두 집단 축삭의 조밀한 표적 = 상호 연결. LH를 ARC의 하류로만 그리면 안 된다는 해부 근거 (Front Neuroanat 2015).
- [[mingote-2019-dopamine-glutamate-neuron-projections-to]] — NAc medial shell SPN이 **순 억제**될 때 탈억제되는 하류 표적. O'Connor 2015의 D1-SPN→LHA 섭식 게이팅이 이 모델의 '섭식판'이며, 두 설명은 SPN 활성의 부호에서 반대 예측을 내므로 병기 필요.
- ★ [[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles]] — 같은 LH^Vgat 뉴런을 세션 간 2-photon으로 추적해 **두 기능 ensemble**로 분해했다: 혐오 열자극·먹이 cue·학습 cue에 함께 반응하는 **motivational salience ensemble**(중립 tone엔 무반응) vs 먹이·물·고형식 섭취에 공통으로 반응하며 금식·농도·Ex-4에 따라 진폭이 조절되는 **value-scaled ingestion(consumption) ensemble** (Cell Rep 2026, SNU 김성연 lab). ⚠️ 긴장 둘: 위내 먹이 주입에도 반응해 "calorie 아님" 서술과 맞지 않고, LH^Vgat 일부가 혐오 자극에 흥분해 "GABAergic = 식이 ↑" 단순 서술과도 맞지 않는다(활동 상관 vs 인과 조작 — 층위가 달라 병기).
- [[person-kim-sung-yon]] — SNU. LH^Vgat의 체온조절 행동·salience/ingestion ensemble 연구(Jung 2022, Lee 2026)
- [[jung-2022-a-forebrain-neural-substrate-for]] — LH^Vgat이 **행동성 체온조절**(자가가온 operant·온도 선택·둥지 짓기·자세 신전)에 필요하고 자율성 체온조절에는 불필요; 열 자극 하위집단과 칼로리 보상 하위집단이 분리; LPB→LH 입력은 체온조절 행동에만 필요 (Neuron 2022, SNU [[person-kim-sung-yon|김성연]] lab)
- [[wang-2026-a-hypothalamic-circuit-links]] — ★ LHA^Glu(섭식억제 통설)가 **과식 성분 전용** 하류: 만성 HFD-취약군에서 PVNCRH가 LHAGlu를 **억제→brake 해제=과식**(disinhibition), 불안은 안 건드림. **CRHR2(not CRHR1)** 가 LHAGlu에 특이 발현해 과식만 매개(Astressin 2B·shRNA knockdown 모두 과식↓·불안 무변). 통설(Vglut2=brake)을 유지하되 부호를 뒤집어 읽음 (Nat Commun 2026).

### 2026-10 대량 ingest — 주제별

**세포 유형·분자 정체·아틀라스**
- [[wang-2021-expansion-assisted-iterative-fish-defines-lateral]] — EASI-FISH 36,423 뉴런 공간 아틀라스. Slc32a1 55% vs Slc17a6 45%로 **이분법은 유지**되고, LHA는 좌표 격자가 아니라 **Otp/Meis2 기반 비스듬한 분자 층판 9구역**으로 분할되며 구역마다 받는 축삭 입력이 다르다. Hcrt·Pmch의 공간·분자 하위구역, ZI–LHA 연속성, 국소 혼합(반경 50 µm 안 16개 타입) (Cell 2021).
- [[mickelsen-2019-single-cell-transcriptomic-analysis-of]] — LHA scRNA-seq 1차 census(흥분성 15 + 억제성 15) + 삼중 FISH 검증. Nts 70:30·Crh형/Tac1형 상호배타, Gal 공발현 59%, orexin 93% Slc17a6, Sst의 아영역 의존성, **Lepr·Mc4r는 잡히지 않음**(ambient mRNA 함정 명시) (Nat Neurosci 2019).
- [[bonnavion-2016-hubs-and-spokes-of]] — "hubs and spokes" Topical Review. 자주 인용되는 공발현 수치(LepRb 60% Nts, Nts–LepRb 95% Gal, MC4R 75% Nts, LepRb→Hcrt 30% 접촉)의 **출처 정리** — 모두 리포터·IHC 근거이고 Mickelsen 2019가 전사체로 재정량했다 (J Physiol 2016).
- [[rossi-2021-transcriptional-and-functional-divergence]] — LHA^Vglut2 brake가 **투사 표적에 따라 둘로 갈린다**: 전측 Pax6⁺→LHb, 후측 Pdyn/Hcrt⁺→VTA. **leptin이 두 경로를 반대 부호로** 민다(p=1.6e-14). Lepr mRNA가 LHb 투사에 더 많아 LepR-Cre 순도 confound (Neuron 2021, GSE169176).
- [[leinninger-2009-leptin-acts-via-leptin]] — LHA LepRb가 MCH·orexin과 **완전 비중첩인 GABAergic 집단**이고 VTA로 조밀 투사(선조체·NAc 투사 없음). 같은 좌표에 orexigenic·anorexigenic 세포가 상호배타적으로 섞여 있다는 원전 (Cell Metab 2009).
- [[leinninger-2011-leptin-action-via-neurotensin]] — LHA LepRb의 약 60%가 Nts⁺. Nts-LepRbKO는 섭식보다 **운동·에너지 지출**을 바꾸고 조기 비만. LH 내부 LepR→orexin micro-circuit 추적 (Cell Metab 2011).
- [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal]] — LH^LepR의 **anxiety 축**: Gal/Ebf1형 vs Tac1/Htr2c/Opcml형 두 분자 하위집단(Ebf1·Opcml은 AN 위험 유전자), mPFC→LH 억제가 고불안 개체에서만, **anxiogenic 맥락에서만** 섭식 개시 앞당김 (Nat Neurosci 2025).

**Phase·동역학·기능 ensemble**
- [[jennings-2015-visualizing-hypothalamic-network-dynamics]] — LH^Vgat 743 뉴런 miniscope. **appetitive(168) vs consummatory(75) 세포가 거의 비중첩** = 위키 phase 분업 서술의 1차 출처. ⚠️ hM3Dq는 소비만 올리고 ablation은 모든 지표를 떨어뜨린다(조작 양식이 결론을 만든다) (Cell 2015).
- [[jennings-2013-the-inhibitory-circuit-architecture]] — BNST GABA 입력이 **LH^Vglut2를 선택 표적**해 brake를 떼는 방식으로 섭식을 켠다. 섭식 개시 latency의 주파수 의존 단축 = 'engine 켜기'와 구별되는 두 번째 경로 (Science 2013).
- [[liu-2023-an-iterative-neural-processing]] — LH^GABA = 섭식 조각의 **개시** 신호(유지는 DR^GABA), 비식용 물체에도 같은 접근·접촉 반응(표적 탐침 충동), 섭식 중 AgRP의 **bout 단위 진동** (Neuron 2023).
- [[sumarli-2026-multidimensional-control-of-ingestive-behavior]] — (기존 링크) LH^Nts의 inverse value coding·총 섭취 불변 — 위 Leinninger 2011과 15년 간격의 같은 방향.
- [[yamanaka-2003-hypothalamic-orexin-neurons-regulate]] — orexin 뉴런의 포도당·leptin 억제 / ghrelin 흥분과 ataxin-3 ablation의 단식성 각성 소실 — orexin anticipation 패턴의 생리 기반 (Neuron 2003).
- [[harris-2005-a-role-for-lateral]] — LH orexin Fos가 morphine·cocaine·food CPP 선호와 R=0.72–0.90 비례(PFA·DMH는 무상관), LH·VTA 내 orexin이 소거된 CPP 복원. **'LH=보상 / PFA·DMH=각성' 구획의 원전** (Nature 2005).
- [[domingos-2013-hypothalamic-melanin-concentrating-hormone]] — MCH가 **선조체 DA로 설탕의 영양 가치를 전달**(선호 82%→20% 역전, DA +69%). MCH 자극 자체는 보상이 아니다 (eLife 2013).
- [[subramanian-2023-hypothalamic-melanin-concentrating-hormone-neurons]] — MCH는 consummatory 전담이 아니라 **cue+섭취 통합형**이고 섭취 중 반응이 누적 칼로리를 예측(R²=0.93) (Nat Commun 2023).
- [[zhang-2026-inherited-input-and-local-transformations]] — appetitive→consummatory 전이를 **drift-to-threshold**로 읽는 선조체 쪽 근거(pVLS dSPN ramp 기울기가 lick 개시 예측, 글루탐산 입력에는 ramp 없음).
- [[aitken-2024-negative-feedback-control-of-hypothalamic]] — 각 licking bout마다 AgRP의 time-locked dip(τ≈9.5 s); dip을 막으면 satiation 지연 — Need 신호도 phase 분해된다.

**학습·인지 (cognitive LH)**
- [[sharpe-2017-lateral-hypothalamic-gabaergic-neurons]] — cue 구간 한정 LH^GABA 광억제가 **연합 학습 자체**를 막되 보상 섭취는 건드리지 않는다. VTA 말단만 억제하면 학습이 **촉진** → '기대값 relay' 가설. 전뇌 출력 지도로 **VTA는 여러 표적 중 하나**임도 명시 (Neuron 2017).
- [[sharpe-2021-past-experience-shapes-the]] — 같은 억제가 보상 근접 cue 학습은 깎고 **중립·원위 cue 학습은 촉진**하며 latent inhibition을 없앤다. 공포 학습에서의 **경험 의존적 모집**(naive는 무영향) (Nat Neurosci 2021). ⚠️ 군당 n이 작고 일부 P가 단측값.
- [[sharpe-2024-the-cognitive-lateral-hypothalamus]] — 위 두 편을 '학습 편향 dial'(과활성=중독, 저활성=조현병)로 확장한 Opinion. ⚠️ 신규 데이터 없음 — 이론 범위가 데이터 범위를 초과 (Trends Cogn Sci 2024).
- [[hoang-2021-the-basolateral-amygdala-and]] — BLA(phasic salience)와 LH(동기 관련성·결과 근접도)가 **원위 예측자에서 반대 부호**로 갈린다는 종합. ⚠️ 신규 데이터 없고 BLA→LH 직접 조작 없음.
- [[siemian-2021-lateral-hypothalamic-lepr-neurons]] — LH^LepR는 섭취·체중·운동·불안 **전부 무변**인데 Pavlovian cue 변별 학습만 실패. 단일세포 수준에서 **LepR만 CS+/CS− 변별**(Vgat는 비변별 salience), LepR→VTA 억제는 학습 강화·활성은 소멸. sucrose CPP는 막되 cocaine CPP는 정상 (Cell Rep 2021, Aponte lab).
- [[derman-2018-junk-food-enhances-conditioned-food-cup]] — junk food 경험이 **양성 예측 CS에 대한 접근만** 선택적으로 키우고 PR breakpoint는 오히려 낮춘다 — cue 통제력 강화의 음식판 대응.

**회로·도파민 인터페이스**
- [[nieh-2016-inhibitory-input-from-the]] — LH^GABA→VTA가 **VTA GABA 개재뉴런을 더 강하게 억제**해 DA를 탈억제(NAc DA↑·ICSS·선호), LH^Glut→VTA는 회피·DA↓ (Neuron 2016).
- [[oconnor-2015-accumbal-d1r-neurons-projecting]] — NAcSh **D1R-MSN→LH^Vgat 단시냅스 억제 = 섭식 허가 게이트**(LH 투사 NAcSh의 93.6%가 D1R; 표적에 orexin·MCH 없음). 말단 자극은 24 h 금식에도 섭취를 끊는다 (Neuron 2015).
- [[thoeni-2020-depression-of-accumbal-to]] — 그 게이트의 **eCB–CB1R 의존 상태 가소성**: 결핍·3일 HFD가 depress시켜 과식 게이트를 열고, in vivo HFS potentiation은 금식 마우스의 섭취를 줄인다. 효과는 전부 **bout 수**에만 (Neuron 2020).
- [[linders-2022-stress-driven-potentiation-of-lateral]] — 총 80초 사회 패배가 **LHA^glut→VTA^DA(mPFC 투사 한정)** 를 GluA1-AMPAR로 강화해 지방 과식을 만들고, **1 Hz depotentiation이 그 과식을 없앤다** (Nat Neurosci 2022).
- [[rossi-2019-obesity-remodels-activity-and]] — 만성 HFD가 같은 LHA^Vglut2 뉴런의 반응·흥분성을 12주에 걸쳐 둔화시키고, **HFD 전사체 변화와 인간 BMI 유전 연관이 모두 Vglut2 클러스터에서 최대** (Science 2019, GSE130597).
- [[lu-2024-dorsolateral-septum-glp-1r-neurons]] — dLS^GLP-1R→LHA GABA 억제를 **Ex-4가 시냅스 전 기전으로 강화**. 세포체 chemogenetic 음성 결과가 국소 collateral 억제의 산물일 수 있다는 방법론 교훈도 제공 (Mol Metab 2024).
- [[rossi-2018-overlapping-brain-circuits-for]] — homeostatic·hedonic feeding 회로의 중첩 종합 리뷰(LH를 두 축의 교차점으로 배치) (Science 2018).
- [[stuber-2016-lateral-hypothalamic-circuits-for]] — LH 입출력 회로의 표준 리뷰 — 말단 조작 해석 범위의 기준선 (Nat Neurosci 2016).
- [[guillaumin-2023-disentangling-the-role-of-nac]] — NAc의 섭취 지표 분해(bout 수 vs bout당 lick) — liking/wanting 지표 수준 수렴의 참조점.
- [[kim-2026-early-life-stress-alters-h3k4me1]] — 초기 스트레스의 후성유전 저장 층위 — Shin 2023의 LH *Lepr* 하향조절과 짝.
- [[kim-2024-glp-1-increases-preingestive-satiation]] — 사용자 lab의 식전 포만(DMH GLP-1R)과 LH^Vgat Ex-4 반응 감쇠의 병렬 작용점.
