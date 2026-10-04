---
title: "Hypothalamic melanin concentrating hormone neurons communicate the nutrient value of sugar (Domingos 2013, eLife)"
type: paper
created: 2026-10-03
updated: 2026-10-03
source: "raw/2013 Elife. Hypothalamic melanin concentrating hormone neurons communicate the nutrient value of sugar.pdf"
authors: [Ana I. Domingos, Aylesse Sordillo, Marcelo O. Dietrich, Zhong-Wu Liu, Luis A. Tellez, Jake Vaynshteyn, Jozelia G. Ferreira, Mats I. Ekstrand, Tamas L. Horvath, Ivan E. de Araujo, Jeffrey M. Friedman]
year: 2013
journal: "eLife 2:e01462 (published 2013-12-31); doi:10.7554/eLife.01462 (Open Access CC BY)"
---

> [!takeaway] 연구 방향 관점의 핵심
> **LH의 MCH 뉴런이 설탕의 "영양 가치(nutrient value)"를 선조체 도파민으로 넘기는 연결고리**라는 주장을 처음 세운 Friedman lab 논문이다. 세 가지 실험이 축이다. ① 인공감미료 sucralose를 핥는 동안 MCH 뉴런을 광자극(20 Hz)하면 **sucrose 선호(82%)가 sucralose 선호(sucrose 20%)로 뒤집히고**, 선조체 DA가 기저 대비 **+69%** 오른다. ② MCH 뉴런을 DT로 제거하면 **sucrose 섭취 중 선조체 DA 상승(+118%)이 사라지고** sucrose↔sucralose 선호가 **무차별(40%)**이 된다. 그러나 단맛 선호(감미료 vs 물)는 그대로다. ③ 단맛을 못 느끼는 **Trpm5⁻/⁻** 마우스에서도 MCH 제거 시 **post-ingestive 조건화가 사라진다**(70–79% → 50%). 다만 **MCH 자극만으로는 보상이 아니다**(물+광자극은 선호되지 않음). 단맛 같은 미각 맥락이 있을 때만 가치를 "더한다".
> 사용자 연구와 닿는 지점: (1) [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]]에서 **Utility(섭취 후 결과) 신호의 LH 경로 후보**가 된다. 단 "미각 맥락이 있어야만 작동"하므로 Pleasure × Utility의 **곱셈적 결합**을 시사한다. (2) [[lee-2023-lateral-hypothalamic-leptin-receptor|LH^LepR]](GABA, Motivation)와 **분자적으로 겹치지 않는 별개 LH 채널**이다. 저자들도 MCH가 LepR를 발현하지 않는다고 본다(Leinninger 2011 인용). (3) 모든 행동 실험이 **절수(16–23 h) 상태**에서 이뤄졌다. 배고픔(AgRP Need)이 MCH의 가치 신호를 키우는지는 [[kim-2024-normative-framework-dissociates-need|Kim 2024]] 틀로 검증할 빈칸이다. (4) [[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]]의 "Mch = consumption sustain"에 대한 **인과적 원전 중 하나**다.

# Hypothalamic melanin concentrating hormone neurons communicate the nutrient value of sugar (Domingos et al. 2013)

- **저널**: eLife 2, e01462 (접수 2013-09-02, 채택 11-19, 게재 12-31). DOI: 10.7554/eLife.01462. Reviewing editor Jeremy Nathans.
- **소속**: Rockefeller University 분자유전학 연구실·HHMI(**Jeffrey M. Friedman lab**, 교신) + Yale 비교의학(Tamas Horvath — 전기생리·전자현미경) + JB Pierce Lab/Yale 정신과(**Ivan de Araujo** — microdialysis·Trpm5 조건화). 1저자 **Ana I. Domingos**(교신 공동, 당시 Gulbenkian Science Institute로 이동).
- **모델·방법**: 직접 만든 **BAC 형질전환 Pmch-CRE**(RP23-129A21, NLS-Cre가 Pmch exon 1 ATG를 대체) × Rosa26-LSL-ChR2(H134R)-YFP(Ai32) 또는 Rosa26-LSL-DTR(iDTR). LH 광섬유 + lick 연동 광자극, 선조체 microdialysis(HPLC-ECD), 전자현미경, Trpm5⁻/⁻(Zuker 제공) 조건화. sucrose **0.4 M** vs sucralose **1.5 mM**(감미료 대 물 용량-반응 곡선의 plateau, Domingos 2011 기준). 모든 행동 시험은 **16–23 h 절수** 뒤 10분 two-bottle, 실험자 blind.

## 한 줄 요약
LH MCH 뉴런을 sucralose 섭취와 짝지어 활성화하면 선조체 DA가 오르고 sucrose 선호가 sucralose로 역전된다. 반대로 MCH 뉴런을 제거하면 sucrose의 DA 방출과 sucrose-over-sucralose 선호, 그리고 미각 없는(Trpm5⁻/⁻) 영양 조건화가 사라진다. 저자들은 이를 근거로 MCH 뉴런을 **포도당 감지와 설탕 보상을 잇는 필요·충분 요소**로 제시한다.

## 핵심 내용

### 배경 — 왜 MCH인가
- 사람·동물은 sucralose보다 sucrose를 선호한다. 원인은 단맛이 아니라 **post-ingestive 보상 효과**다. 위내·정맥 포도당과 짝지은 무열량 용액이 선호되고(de Araujo 2008; Ren 2010; Sclafani 2011), 단맛을 못 느끼는 Trpm5⁻/⁻ 마우스도 sucrose의 영양 가치를 감지한다(de Araujo 2008). sucrose는 미각 없이도 중뇌·선조체 DA를 올린다.
- 저자들의 선행 연구(Domingos 2011 Nat Neurosci): **DA 뉴런 광자극**을 sucralose에 짝지으면 sucralose가 sucrose보다 선호된다. 그러나 post-ingestive 보상을 DA로 전달하는 **상류 회로는 미지**였다.
- 후보 근거 두 가지: ① LH MCH 뉴런은 **세포외 포도당이 오르면 흥분**한다(Burdakov 2005; Kong 2010 — K_ATP·UCP2 의존). ② MCH 뉴런은 선조체·중뇌 DA 영역으로 조밀하게 투사한다. Pmch KO와 MCH 뉴런 제거는 체중을 줄인다(Shimada 1998; Alon & Friedman 2006; Whiddon & Palmiter 2013).

### Figure 1 — Pmch-CRE 검증과 광유전 제어
- **특이성·침투도**: MCH⁺ 뉴런의 **97 ± 3%**가 ChR2-YFP를 발현했다. YFP⁺ 뉴런의 **92 ± 8%**가 MCH⁺였다(**n = 1,200 cells / 4 mice**). 즉 표지 세포의 약 8%는 MCH 음성이다.
- **Slice whole-cell**(30–50일령, 34°C, bath glucose 2.5 mM): 5·10·20 Hz(1 ms 펄스 20개) 광자극에 스파이크가 따라왔다. 발화율은 **20 Hz > 5 Hz**였다. 1 s 연속광을 10회 반복해도 막전위 변화가 유지됐다. 연속광 중 스파이크 감쇠 양상은 **포도당 유발 고빈도 burst**(Burdakov 2005)와 비슷하다고 저자들은 보았다.

### Figure 2 — MCH 활성화가 sucrose→sucralose로 선호를 뒤집는다 (n = 4)
- **Lick 연동 프로토콜**: 지정 sipper에서 연속 5회 핥으면 1 s 광자극, 이어 1 s 불응기. 시험 전 이틀간 각 자극에 10분씩 미리 노출시켜 novelty 효과를 막았다.
- **물+광 vs 물**: ChR2(+)와 ChR2(−) 모두 5 Hz·20 Hz·연속광 **어느 조건에서도 선호 변화가 없었다**. → **MCH 활성화 자체는 보상이 아니다.**
- **sucralose+광 vs sucrose**:
  - 5 Hz: 두 군 모두 여전히 sucrose를 선호했다(역전 없음).
  - **20 Hz**: ChR2(−) sucrose 선호 **82.2 ± 3%** vs ChR2(+) **20.0 ± 4%**(50% 대비 p<0.0001).
  - **연속광**: ChR2(−) **76.7 ± 3%** vs ChR2(+) **26.8 ± 5%**(50% 대비 p<0.0007).
  - 군간 비교 ***p<0.0001(t test). 물 섭취량은 MCH 자극으로 변하지 않았다(Fig 2–S2).
- 해석: "등선호"가 아니라 **역전**이 나온 것은 단맛과 post-ingestive 신호의 **시너지** 때문이라고 저자들은 본다(sucralose 농도를 낮추면 등선호가 될 수도 있다).

### Figure 3 — MCH 활성화가 sucralose 섭취 중 선조체 DA를 올린다 (n = 4)
- LH 광섬유 + **선조체 microdialysis**(CMA-7 2 mm 탐침, 1.2 μL/min, 6분 간격 시료, 30분 sucralose 접근). 같은 동물에서 광 OFF/ON을 비교했다.
- **광 OFF**: sucralose를 마셔도 DA 변화 **+8.2 ± 2.6%**로 기저와 차이가 없었다(p>0.05).
- **광 ON(20 Hz)**: DA **+68.7 ± 9%**(S1–S5 평균; 기저 대비 **p<0.008). 이 증가는 **섭취 없이 같은 수(평균 201 ± 40개)의 펄스를 실험자가 준 조건**보다도 유의하게 컸다(****p<5.7×10⁻⁷, Bonferroni).
- 광 ON에서 sucralose **누적 lick 증가**(*p<0.05).
- → DA 증가에는 **MCH 활성화와 sucralose 섭취가 함께** 필요하다.
- **Fig 3–S1(해부)**: MCH 축삭이 선조체와 복측 중뇌를 조밀하게 지배한다. 전자현미경(anti-GFP 은-금 강화 DAB + anti-TH)으로 **TH⁺ DA 뉴런 위의 MCH 시냅스**를 확인했다.
- **Fig 3–S2**: sucrose vs sucralose 선호에 **DA 전달이 필요**하다(보충 그림 제목만 본문에 있음).

### Figure 4 — MCH 뉴런 제거 시 sucrose 유발 DA 방출이 사라진다 (n = 4)
- Pmch-CRE;LSL-DTR에 DT를 **뇌내 1 ng/g** 주사하면 MCH 뉴런이 **완전히 소실**됐다(용량 적정은 Fig 4–S1). 대조군은 Pmch-CRE;LSL-DTR+vehicle과 LSL-DTR+DT.
- **0.4 M sucrose 섭취 중 선조체 DA**: 대조군 **+118.3 ± 0.3%**(S1–S5 평균; ***p<1.98×10⁻⁹; 기저 대비 p<0.0018). MCH 제거군은 **거의 변화 없음**(기저 대비 p>0.4). 시간 경과 비교 **p<0.008(ANOVA).
- 기저 DA는 두 군이 같았다. 물 섭취도 같았다(무음증 아님, Fig 4–S2).
- MCH 제거군은 자유 접근에서 **sucrose를 덜 마셨다**(*p<0.05, ANOVA).

### Figure 5A–C — 영양 선호는 사라지지만 단맛 선호는 남는다 (n = 8)
- **sucrose vs sucralose 선호**: Pmch-CRE;LSL-DTR+veh **77.1 ± 7%**, LSL-DTR+DT **82.0 ± 4%**, **MCH 제거군 39.9 ± 5%**. 본문 p값은 *p<0.0012, ¥p<0.009(Bonferroni), 그림 범례 p값은 *p<0.03, ¥p<0.011로 **서로 다르게 적혀 있다**.
- **sucrose vs 물, sucralose vs 물**: 모든 군이 감미료를 선호했다. → MCH는 **단맛 선호에는 불필요**하고 **post-ingestive 효과**에만 필요하다.
- **혈당 통제**(Fig 5–S2): 24 h 금식 뒤 10% 포도당 i.p.(10 mL/kg) 후 최고 혈당, sucrose 섭취 후 혈당이 정상이었다. → 선호 변화는 혈당 차이 때문이 아니다.

### Figure 5D — 미각 없는(Trpm5⁻/⁻) 마우스에서도 MCH가 필요하다 (n = 8)
- 4일 조건화: 매일 30분 one-bottle 강제 섭취, sucrose와 sucralose를 **반대쪽 자리**에 하루씩 번갈아 제시. 5일째 **물 vs 물** 10분 two-bottle로 자리 편향을 시험했다.
- Trpm5⁻/⁻ 대조군 sucrose 자리 선호: Pmch-CRE;LSL-DTR+veh **70 ± 3%**, LSL-DTR+DT **79 ± 5%**. **Trpm5⁻/⁻ MCH 제거군 50 ± 7%**(무차별). 통계는 *p<0.045, ¥p<0.099(Bonferroni t test). ¥ 표시 비교(어느 대조군 쌍인지는 본문에 명시되지 않음)는 **0.05 기준으로 유의하지 않다**.
- **Fig 5–S3**: Trpm5⁻/⁻에서 sucrose 후 **VTA DA 뉴런 cFos가 MCH 제거군에서 감소**했다. 조건화 크기와 DA 뉴런 cFos가 양의 상관을 보였다.

### Discussion 요점
- **포도당 감지 위치는 미정**: MCH 뉴런이 직접 포도당을 감지할 수도 있고, 위장관 등 다른 감지기가 MCH에 정보를 줄 수도 있다. MCH는 **영양소·혀 미각·(가능하면) 장 등 다른 포도당 감지 부위의 신호를 통합하는 보상 부호화 네트워크의 구성요소**라고 정리한다(설측 미뢰에서 시작한 바이러스 추적에서 MCH가 미각 회로에 포함됨, Pérez 2011).
- **DA 뉴런과의 대비**: DA 뉴런 광자극은 물에 짝지어도 보상이 되지만(Domingos 2011), MCH 자극은 그렇지 않다.
- **orexin도 포도당을 감지**하므로(Burdakov 2005; Karnani & Burdakov 2011 — 억제되는 반대 방향이라는 점은 원문에 명시되지 않음) 다른 LH 집단이 설탕 가치에 기여할 수 있다.
- **psychostimulant와의 긴장**: MCH KO·MCH 제거 마우스는 psychostimulant에 **운동 반응이 커지고**(Pissios 2008; Whiddon & Palmiter 2013), Mchr1 KO도 d-amphetamine에 과민하다(Smith 2005). 이번 결과(sucrose DA 소실)와 방향이 반대다. 저자들은 MCHR-1이 있는 복측 선조체와 sucrose 선호 영역이 다를 수 있다고 본다. **MCH 펩타이드 자체인지 공동전달물질인지도 미정**이다.
- **직접 vs 간접**: MCH→DA 뉴런 시냅스는 있지만, DA 방출 조절이 직접인지 간접인지는 이 자료로 판정할 수 없다.
- **Leptin**: MCH 뉴런은 LepR를 발현하지 않는 것으로 보인다(Leinninger 2011). leptin이 LH^Nts 뉴런을 거쳐 MCH를 간접 억제할 가능성을 제기한다. MCH 제거가 *ob/ob* 비만을 줄인다(Alon & Friedman 2006) → MCH는 leptin 작용의 하류다. MCH 제거의 저식·마름은 **영양소 보상 가치 상실**의 결과일 수 있다.
- **번역 제안**: MCH 활성 억제로 설탕 소비를 줄이거나, **MCH를 흥분시키는 인공감미료**를 개발할 수 있다고 제안한다.

### 방법상 한계 (위키 정리자 주석)
- 광유전·microdialysis는 **군당 n = 4**다. 선호 시험은 각 동물을 3회 반복했다.
- microdialysis 위치가 "striatum"으로만 적혀 있다. **배측(DS) vs 복측(VS)** 구분이 없어 [[tellez-2016-separate-circuitries-encode-hedonic-nutritional|Tellez 2016]](같은 de Araujo 계열)의 "영양 = DS DA" 결과와 직접 대응시키기 어렵다.
- **생체 내 MCH 활동 기록이 없다.** sucrose 섭취 중 MCH가 실제로 활성화되는지는 slice의 포도당 반응으로 추론했을 뿐이다. 효과는 **20 Hz·연속광**에서만 나왔다. 이는 REM 수면 중 MCH 최대 발화(3–12 Hz, [[bonnavion-2016-hubs-and-spokes-of|Bonnavion 2016]] 정리)보다 높다.
- DT 뇌내 주사의 정확한 부위·범위가 본문에 없다. ZI의 Pmch 집단([[concept-zona-incerta]])이 함께 제거됐을 수 있다.
- "필요충분"이라는 표현은 강하다. **충분성은 미각 맥락이 있을 때만** 성립한다. Fig 5D의 한 비교는 p<0.099이다.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **NMPU 매핑 — Utility인가, Pleasure×Utility 곱인가**: MCH 경로는 "섭취 후 영양 결과"를 DA로 전한다는 점에서 [[concept-need-motivation-pleasure-utility|NMPU]]의 **Utility(지연 결과 교사)** LH 경로 후보다. 그러나 효과가 10분 세션 안에서, **핥는 순간에 맞춘 자극**으로 나타나고, **미각 없이는 자극만으로 보상이 아니다**. 그래서 순수 Utility라기보다 **orosensory Pleasure 신호에 영양 Utility를 곱하는 게이트**로 읽는 것이 자료와 더 맞는다. 검증 설계: Trpm5⁻/⁻ 또는 위내 주입으로 미각을 제거한 상태에서 MCH 광자극에 맛 cue만 따로 짝지어 본다(곱셈이면 cue 없이는 효과 0).
- **LH 병렬 채널 — LepR(GABA) vs MCH**: [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]의 LH^LepR는 GABAergic이고 MCH와 겹치지 않는다([[leinninger-2009-leptin-acts-via-leptin|Leinninger 2009]]). 가설: **LepR = need가 누적된 Motivation(추구)**, **MCH = 섭취물의 영양 가치 판정**. Lee 2023의 consummatory LepR subset이 sucrose와 sucralose를 **섭취 후 수 분 시간척도**에서 구분하는지, MCH(Pmch-Cre photometry)와 비교하면 두 채널이 분리될 것이다.
- **Need 의존성 빈칸**: 이 논문의 행동 실험은 모두 **절수** 상태였다. [[kim-2024-normative-framework-dissociates-need|Kim 2024]]의 AgRP Need 축을 올리면(금식) MCH 의존 sucrose 가치가 커지는지, 포만에서 사라지는지 확인해야 한다. MCH가 Need×nutrient 곱을 계산하는지 판정하는 실험이다.
- **"Mch = consumption sustain"의 인과 근거**: [[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]] 시간 동역학 표의 MCH consummatory sustained ↑와 맞는다. 활성화는 sucralose lick을 늘리고(Fig 3F), 제거는 sucrose lick을 줄인다(Fig 4G). 다만 활동 기록이 아니라 조작 결과다.
- **LH→선조체 DA 지형의 세 번째 채널**: [[gordon-2026-lateral-hypothalamic-control-of-the|Gordon 2026]]은 LH^GABA/LH^Glut 비율이 섭취 중 선조체 DA 지형을 정한다고 보였다. MCH는 Gad1+Slc17a6 공발현 집단이라([[wang-2021-expansion-assisted-iterative-fish-defines-lateral|Wang 2021]]) 그 이분법 바깥에 있다. 영양(칼로리) 축의 DA 신호가 MCH를 거쳐 따로 들어오는지 확인하는 것이 다음 질문이다. Gordon의 FR:Suc 조건에 MCH 제거를 더하면 된다.
- **GLP-1RA·DTx**: 저자들의 "MCH 억제로 설탕 소비↓" 제안은 GLP-1RA의 설탕 선호 감소 기전 후보로 이어진다(원문에 GLP-1 언급 없음). [[concept-glp-1]] 계열 약물이 MCH 활동을 낮추는지는 위키에 자료가 없다.
- **인간 번역**: [[barbosa-2023-an-orexigenic-subnetwork-within-the|Barbosa 2023]]이 인간 LH→dlHPC MCH⁺ 투사를 보였다. 인간에서 **설탕 vs 무열량 감미료** 선호·선조체 반응을 비교하면 MCH 축의 간접 지표가 될 수 있다.

## ⚠️ 위키 내 충돌·긴장
- **MCH의 LepR 공발현 — [[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]] vs Leinninger 계열**: Cheon 2025 분자 절은 "Mch 뉴런: Cart, Npy5r, Mc4r, **Lepr 공발현**"이라고 쓴다. 반면 [[leinninger-2009-leptin-acts-via-leptin|Leinninger 2009]]는 LepRb^EGFP와 MCH의 공존을 검출하지 못했다(고용량 leptin pSTAT3도 MCH에 없음). [[leinninger-2011-leptin-action-via-neurotensin|Leinninger 2011]]은 LH^Nts→MCH trans-synaptic 표지도 없었다. 본 논문도 "MCH 뉴런은 LepR를 발현하지 않는 것으로 보인다"고 쓴다. 두 서술을 **병기**한다. leptin→MCH 조절은 직접 경로가 아니라 간접 경로일 가능성이 크다.
- **영양 가치 DA의 표적 부위 — [[grove-2025-lateralized-pathway-associating-nutrients|Grove 2025]]·[[concept-flavor-nutrient-conditioning]] vs 본 논문 vs [[tellez-2016-separate-circuitries-encode-hedonic-nutritional|Tellez 2016]]**: Grove 2025는 영양-향미 학습이 **vagus→VTA DA→left aBLA**를 거치며 **NAc DA 침묵은 학습을 막지 못한다**고 보였다. Tellez 2016은 영양 가치를 **배측 선조체 DA**에 둔다. 본 논문은 **MCH 의존 "선조체" DA**를 주장하고, 상류로 vagus 대신 **LH MCH**를 둔다. 패러다임이 다르다(구강 sucrose vs 위내 주입, 단일 세션 vs 다일 조건화, Trpm5⁻/⁻ vs WT). 그래서 모순이라기보다 **같은 "영양 보상"에 대한 세 후보 경로**로 병기한다. MCH가 vagal-hindbrain 경로와 직렬인지 병렬인지는 미검증이다.
- **sucralose 단독의 선조체 DA — [[tellez-2016-separate-circuitries-encode-hedonic-nutritional|Tellez 2016]] vs 본 논문**: 본 논문에서 sucralose만 마시면 선조체 DA 변화는 **+8.2 ± 2.6%로 무의미**했다. Tellez 2016(같은 de Araujo 계열, Tellez가 본 논문 공저)은 sucralose licking만으로 **복측 선조체(VS) DA가 오른다**고 보고했다. 본 논문 탐침이 배측(DS)에 있었다면 두 결과는 정합한다(DS DA는 영양 의존). VS에 있었다면 서로 어긋난다. 부위가 명시되지 않아 판정할 수 없으므로 병기한다.
- **무열량 감미료의 DA — [[gordon-2026-lateral-hypothalamic-control-of-the|Gordon 2026]] vs 본 논문**: Gordon 2026(GRAB-DA, 초 단위)은 **saccharin이 sucrose보다 전측 선조체(NAc) DA를 더 올리고**, DMS·DLS에서는 sucrose가 더 높다고 보고한다. 본 논문(microdialysis 6분 bin, 30분)은 sucralose 단독 DA 변화가 무의미하다고 보고한다. **빠른 orosensory 성분 vs 느린 post-ingestive 성분**의 시간척도 차이로 병기한다. MCH 의존성은 느린 성분, 그리고 아마 배측 성분에 한정될 가능성이 있다(미검증).
- **"LH 활성 = 보상" 일반화와의 차이 — [[jennings-2015-visualizing-hypothalamic-network-dynamics|Jennings 2015]]**: LHA^Vgat 광자극은 그 자체로 자기자극(보상)을 일으킨다. 반면 MCH 광자극은 **물과 짝지으면 선호되지 않는다**. 두 집단은 0% 중첩이므로 모순이 아니다. 그러나 [[concept-lateral-hypothalamus]]의 "LH→VTA/NAc 보상" 서술을 MCH에 그대로 적용하면 안 된다.
- **MCH 발화 상태 — [[bonnavion-2016-hubs-and-spokes-of|Bonnavion 2016]] vs 본 논문**: Bonnavion 2016은 MCH 뉴런이 **각성 중 침묵하고 REM에서 최대(3–12 Hz)**라는 수면 문헌(Jego 2013 등)을 정리한다. 본 논문은 **깨어 섭취하는 동안 20 Hz** MCH 활성화가 가치를 전한다고 가정한다. Cheon 2025의 "consumption 중 sustained ↑"가 맞다면 MCH는 섭취 중에도 활동하는 셈이다. 그러나 본 논문 자체는 생체 내 활동을 기록하지 않았다. 생리적 발화 범위와 자극 주파수의 차이를 **병기**한다.
- **DA 민감성의 방향 — 원문 내부 긴장**: MCH 결손 마우스는 psychostimulant 운동 반응이 **과민**하다(Pissios 2008; Whiddon & Palmiter 2013). 그런데 본 논문에서는 sucrose DA 방출이 **소실**됐다. 저자들은 MCHR-1 발현 복측 선조체와 sucrose 선호 회로가 다를 것으로 추정할 뿐 해소하지 않았다.
- **MCH 전달물질 분류**: [[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]]·[[chen-2025-the-integrated-function-of-the|Chen 2025]]는 MCH를 glutamatergic 행에 둔다. [[wang-2021-expansion-assisted-iterative-fish-defines-lateral|Wang 2021]]은 Pmch⁺의 92% 이상이 Gad1+Slc17a6 공발현이라고 보고한다. 본 논문은 어떤 전달물질(MCH 펩타이드·glutamate·GABA)이 DA 효과를 매개하는지 **판정하지 않는다**.

## 관련 페이지
- [[concept-lateral-hypothalamus]] — 개념 hub. LH MCH = 설탕 영양 가치 → 선조체 DA 연결고리.
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — 사용자 lab LH 리뷰. "Mch = consumption sustain"의 인과 근거. ⚠️ MCH–Lepr 공발현 서술과 긴장.
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] — 사용자 lab LH^LepR. MCH와 분자적으로 별개인 병렬 채널(Motivation vs 영양 가치) 가설.
- [[kim-2024-normative-framework-dissociates-need]] — Need(AgRP)–Motivation(LepR) 틀. MCH 가치 신호의 Need 의존성 검증 빈칸(본 논문은 절수 상태만).
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] · [[concept-need-motivation-pleasure-utility]] — Utility 경로 후보, 또는 Pleasure×Utility 곱셈 게이트.
- [[tellez-2016-separate-circuitries-encode-hedonic-nutritional]] — 같은 de Araujo 계열. 당의 영양 가치 = 배측 선조체 DA. MCH가 그 상류 후보.
- [[grove-2025-lateralized-pathway-associating-nutrients]] · [[concept-flavor-nutrient-conditioning]] — vagus→VTA DA→left aBLA 경로와 병기할 영양 보상 경로.
- [[concept-primary-reward-signals]] · [[weber-2025-interoceptive-origin-reinforcement-learning]] — post-ingestive 1차 보상 신호의 LH 경유 후보.
- [[gordon-2026-lateral-hypothalamic-control-of-the]] — LH가 섭취 중 선조체 DA 지형을 정한다. MCH는 GABA/Glut 비율 바깥의 세 번째 채널 후보.
- [[jennings-2015-visualizing-hypothalamic-network-dynamics]] — LHA^Vgat(MCH와 0% 중첩)는 자극만으로 보상. MCH는 그렇지 않음.
- [[bonnavion-2016-hubs-and-spokes-of]] — LHA 세 펩타이드 집단 분류. MCH의 섭식·수면·전달물질 서술. Domingos 2013 인용.
- [[leinninger-2009-leptin-acts-via-leptin]] · [[leinninger-2011-leptin-action-via-neurotensin]] — MCH는 LepR⁻이고 LH^Nts의 trans-synaptic 표적도 아님. leptin→MCH 간접 경로 쟁점.
- [[wang-2021-expansion-assisted-iterative-fish-defines-lateral]] · [[mickelsen-2019-single-cell-transcriptomic-analysis-of]] — Pmch 뉴런 분자 정체(Cartpt 아형, Gad1+Slc17a6 공발현).
- [[chen-2025-the-integrated-function-of-the]] — MCH = 포도당에 탈분극(orexin과 반대), food cue 활성.
- [[yamanaka-2003-hypothalamic-orexin-neurons-regulate]] · [[concept-orexin-neurons]] — 포도당에 억제되는 LH orexin. MCH와 반대 방향 포도당 감지.
- [[rossi-2018-overlapping-brain-circuits-for]] — LH 하위집단(MCH·LepR)의 VTA 투사·DA 영향 정리.
- [[barbosa-2023-an-orexigenic-subnetwork-within-the]] · [[concept-hippocampus-feeding]] — 인간 LH MCH⁺→dlHPC 투사. 번역 다리.
- [[concept-zona-incerta]] — ZI의 Pmch 집단(DT 제거 범위 해석).
- [[person-friedman-jeffrey]] — 교신 lab(Rockefeller). Alon & Friedman 2006 MCH 제거 → 마름의 후속.
- [[person-zuker-charles]] — Trpm5⁻/⁻ 마우스 제공. 미각(liking)과 gut-brain 영양 신호 분리의 다른 축.
- [[concept-dopamine-reward-system]] · [[concept-liking-wanting]] — 단맛 선호(MCH 불필요) vs 영양 선호(MCH 필요)의 분리.
- [[subramanian-2023-hypothalamic-melanin-concentrating-hormone-neurons]] — ★ 본 논문을 ref 28로 인용하며 **같은 결론을 rat·행동 단계별로 확장한 10년 뒤 논문**(Nat Commun 2023, Kanoski lab). MCH promoter GCaMP6s로 학습된 cue(CS+>CS−, P=0.0042)·음식 맥락 진입(P=0.0001)과 **섭취 중 반응**(식사 초기 최대·bout 내 ΔCa vs 누적 칼로리 R²=0.9299)을 함께 보이고, DREADDs 활성이 PIT·CPP·식사량(P=0.0277)·**IG glucose 짝 비칼로리 향미 선호**(P=0.0028)를 키운다 → MCH를 Sclafani의 **appetition**(식사 초기 양성 되먹임) 신호로 해석한다. ⚠️ 본 논문에서 **MCH 자극의 충분성**은 구강 미각 맥락이 있어야 나타났다(물+광자극은 비선호). 반면 **MCH의 필요성**은 미각 없는 Trpm5⁻/⁻에서도 유지됐다(MCH 제거 시 sucrose 조건화 소실). 그쪽은 **미각과 분리된 위내 glucose** 짝짓기에서도 MCH 활성으로 선호 증폭을 얻었다 — 두 결과를 합치면 "구강×식후 신호의 곱" 가설이 되지만, 그쪽도 구강 쾌락 증폭과 식후 처리 증폭을 구분하지 못한다고 명시(병기).
