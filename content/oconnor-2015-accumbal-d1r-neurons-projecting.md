---
title: "Accumbal D1R neurons projecting to lateral hypothalamus authorize feeding (O'Connor et al. 2015, Neuron)"
type: paper
created: 2026-10-03
updated: 2026-10-03
source: "raw/2015 Neuron. Accumbal D1R Neurons Projecting to Lateral Hypothalamus Authorize Feeding.pdf"
authors: [Eoin C. O'Connor, Yves Kremer, Sandrine Lefort, Masaya Harada, Vincent Pascoli, Clément Rohner, Christian Lüscher]
year: 2015
journal: "Neuron 88(3):553–564 (2015-11-04); doi:10.1016/j.neuron.2015.09.038"
---

> [!takeaway] 연구 방향 관점의 핵심
> **위키 전반에서 "NAc D1R-MSN→LHA GABA feeding authorization gate"로 반복 인용되는 1차 원전.** Lüscher lab(제네바)은 Kelley 계열의 20년 묵은 약리 모델("NAcSh→LH 억제성 투사가 섭식의 sensory sentinel")을 세포 수준에서 분해했다. ① LH로 가는 accumbens shell 투사는 **D1R-MSN이 압도적**(CTB 역추적 **93.6%**, D2R은 5.2%)이고, 같은 LH 표적을 가진 **BNST에서는 부호가 뒤집힌다**(D1R 15–23%). ② 자유 섭식 중 광유전 동정된 D1R-MSN은 **섭취 개시에 발화가 떨어지고 종료와 함께 다시 오른다**(9개 중 5개 p<0.05 / 8개 offset p<0.05). ③ 인과: NAcSh D1R-MSN **광억제 → 배부른 마우스도 지방 섭취↑**, LH 말단 **광자극 → 24 h 금식 마우스에서도 섭취 억제**(자유급식에서는 closed-loop 자극이 진행 중 licking을 한 lick 단위로 중단). ④ 하류 표적은 orexin·MCH 뉴런이 **아니라 LH GABA 뉴런**(78% 연결, rabies 입력의 97%가 D1R-MSN)이고, **LH^Vgat 직접 광억제가 같은 결과를 완전히 재현**한다.
> 사용자 연구에 닿는 지점 넷. (1) **[[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]]의 Motivation 축에 "허가(authorization) 게이트"라는 상류 층이 추가된다** — Need(AgRP)·Motivation(LH^LepR)이 아무리 높아도 NAc D1R-MSN이 켜지면 섭취가 멈춘다. 즉 [[kim-2024-normative-framework-dissociates-need|Kim 2024]]의 threshold K를 **외부 자극이 순간적으로 올리는 기전**의 회로 후보다. (2) **[[lee-2023-lateral-hypothalamic-leptin-receptor|LH^LepR]](LH GABA의 소수 아집단)가 이 D1R 억제를 받는지**가 사용자 lab이 바로 검증할 수 있는 질문이다 — 본 논문은 LH^Vgat 전체(78% 연결)만 보았고 분자 정체는 열어 두었다. (3) 섭취 중단을 유발한 조작이 **"내적 포만"이 아니라 "외부 방해자극(distractor)"과 동일한 효과**를 냈다는 점은 [[concept-cue-reactivity|cue reactivity]]·DTx의 "먹기를 멈추는 능력"을 회로 표현형으로 정의할 근거다. (4) 저자들이 제시한 임상 가설(anorexia = 조기 섭취 종료, 비만 = 종료 실패)은 [[concept-loss-of-control-eating|loss-of-control eating]]을 **"개시 과잉"이 아니라 "종료 신호 결손"** 으로 읽는 축을 제공한다.

# Accumbal D1R neurons projecting to lateral hypothalamus authorize feeding (O'Connor et al. 2015)

- **저널**: Neuron 88(3):553–564 (2015-11-04 발행; 접수 2015-05-29, 수정 09-01, 채택 09-17, 온라인 10-22). DOI: 10.1016/j.neuron.2015.09.038.
- **소속**: 1저자~6저자 중 O'Connor·Kremer·Lefort·Pascoli·Rohner는 University of Geneva 의학부 기초신경과학과(소속1), M. Harada는 Kyoto University 의학대학원 Medical Innovation Center CREST(소속2). 교신 **Christian Lüscher**는 소속1 + Geneva University Hospital 임상신경과학과 신경과(소속3) 겸임 (christian.luscher@unige.ch) → [[person-luscher-christian]].
- **지원**: Swiss National Science Foundation, NCCR **SYNAPSY**, ERC advanced grant *MeSSI*.
- **모델·방법**: C57BL/6J, Drd1a-tdTomato, Drd2-eGFP, D1RCre, D2RCre, GADCre, VGaTCre, **VGaTCre × Drd1a-tdTomato** 라인. CTB 역추적(LH: AP −1.2 / ML +1.2 / DV −4.75), AAV-DIO-ChR2(H134R)·AAV5-EF1a-eArch3.0-eYFP, ex vivo whole-cell + 광유전 회로 지도(biocytin 충전), **modified rabies**(AAV5-Flex-TVA-mCherry + AAV8-Flex-RG → SADΔG-EGFP(EnvA)), 광유전 동정 in vivo unit recording, 그리고 **lickometer 기반 closed-loop 광유전**.
- **섭식 과제**: operant chamber의 sipper tube에서 **5% v/v Lipofundin 지방유탁액**(7,990 kJ/l) 또는 10% w/v sucrose를 1 h 자유 섭취. **burst = ILI ≤1 s인 연속 3 lick 이상**. 10 min light-off / light-on 블록 교대.

## 한 줄 요약
NAc shell에서 LH로 가는 억제성 투사는 거의 전부 **D1R-MSN**이며, 이 세포들은 섭취 중 발화를 **낮춤으로써 섭식을 허가**하고 종료 시 다시 올려 섭식을 끊는다. 그 표적은 orexin·MCH가 아닌 **LH GABA 뉴런**이고, 이 경로의 활성은 **배고픔(24 h 금식)조차 무시하고 섭취를 억제**하며, 자유급식 상태에서는 진행 중인 licking을 한 lick 단위로 끊는다(closed-loop).

## 핵심 내용

### Figure 1 — LH 투사 accumbens 뉴런의 93.6%가 D1R-MSN
- CTB(-488/-555/-647) 100–200 nl을 **peduncular LH**(fornix 바로 외측, zona incerta 복측)에 단측 주입하고 11일 후 NAcSh 관상절편에서 공국재를 셌다.
- **Drd1a-tdTomato (n=3)**: medial NAcSh 전후축 전체에서 CTB⁺(=LH 투사) 세포 **1,246개** 중 **1,173개(93.6% ± 0.8%)가 tdTomato⁺**. 가장 rostral·caudal 부위에서도 최소 **89.7%**가 D1R-MSN → **전후축 gradient 없음**.
- 역방향 수치도 보고: **D1R-MSN의 60.3% ± 7.7%는 CTB⁻** (LH 외 표적으로 투사하거나 주입이 LH 전체를 덮지 못함).
- **Drd2-eGFP (n=2)**: CTB⁺ 593개 중 eGFP⁺는 **29개(5.2% ± 1.1%)** 뿐.
- **BNST 대조(n=5)**: 같은 LH 주입에서 BNST의 LH 투사 뉴런 중 D1R⁺는 **dorsal 15.1% ± 3.1% / ventral 22.8% ± 3.5%** → caudal NAcSh와 연속된 구조인데도 **수용체 정체가 뒤집힌다**.
- **Ex vivo 광유전 회로 지도**: D1RCre에 DIO-ChR2 → LH 뉴런 무작위 patch에서 **56%(15/27, n=3 mice)** 가 청색광 유발 IPSC(평균 **630 ± 334 pA**, picrotoxin 50 μM로 차단). D2RCre는 **17%(5/29, n=3)**, **177 ± 79 pA**. D2RCre 마우스의 LH에는 ChR2-eYFP 섬유 자체가 희박했다.
- 저자 비교: rat 아창백 뉴런의 52.5%가 accumbal 억제를 받는다는 Mogenson 1983 in vivo 기록과 일치.

### Figure 2 — D1R-MSN은 섭취 개시에 발화↓, 종료에 발화↑
- D1RCre/D2RCre에 DIO-ChR2 + NAcSh 고정 전극(광섬유 일체형). 1 s 연속 청색광(0.5–2 mW)으로 optotagging(교차상관 >0.98, 10–20 ms 잠복).
- **D1R-MSN(광반응 9 units)**: 섭취 onset에 활성 감소 **5/9 (p<0.05)** + **2/9 (p<0.1 경향)**, 섭취 offset에 활성 증가 **8/9 (p<0.05)** (Wilcoxon rank-sum; onset = bout 직전 3 s vs bout 첫 1 s, offset = bout 마지막 1 s vs 종료 후 3 s).
- **비광반응 units (n=2)**: onset·offset 모두 무변.
- **광억제 units (n=4)**: 절반은 onset 감소·offset 증가(p<0.05) — 저자들은 D1R-MSN 간 **recurrent collateral 억제**(Taverna 2008)로 추정하되 정체는 미확정.
- **D2R-expressing NAcSh 뉴런(4 units)**: onset(최소 p=0.33, 3/4)·offset(최소 p=0.08, 4/4) 모두 **신뢰할 만한 변화 없음**.
- → "D1R-MSN 활성 감소 = 섭식 허가, 활성 증가 = 섭식 중단·행동 전환"이라는 작업가설. 단 이 단계는 **상관**이다.

### Figure 3 — NAcSh D1R-MSN 광억제: 포만 상태에서도 섭취↑, 방해자극이 안 통한다
- eArch3.0(주황광 proton pump)을 D1R-MSN에 발현. Ex vivo에서 전류 유발 발화가 광에 의해 억제됨을 확인.
- **자유급식(ad libitum) 상태**에서 NAcSh 광억제 → 지방 섭취 유의 증가. ANOVA condition(D1RCre− n=10 / D1RCre+ n=11) × light(off/on) **F(1,19)=5.55, p<0.05**. → **즉각적 대사 요구가 없어도** 기호성 음식 섭취가 늘어난다.
- **Stimulus distraction test**: 1 h 세션을 10 min 블록으로 나누고, 실시간으로 burst 개시(ILI ≤1 s인 3 lick)를 탐지해 **500 ms 청·시각 방해자극**을 주었다. 대조군에서는 방해자극이 한 lick에서 다음 lick 사이에 섭취를 끊어 **3-lick burst의 빈도를 올렸다**.
- D1R-MSN 광억제는 이 **방해자극의 중단 효율을 유의하게 떨어뜨렸다**: condition × light **F(1,19)=8.36, p<0.01**; 3-lick burst 분포 **F(1,19)=16.55, p≤0.001** (Bonferroni 보정 후 #p<0.025).
- **D2R 뉴런 eArch 광억제(대조)**: 방해자극 효율 변화 없음 → unit recording의 무반응성과 일관.
- → D1R-MSN이 Kelley의 **sensory sentinel** 역할을 실제로 담당한다. 섭식을 "멈추게 하는" 외부 신호가 이 세포를 거친다.

### Figure 4 — LH 말단 광자극: 배고픔을 무시하고 licking을 한 lick 단위로 끊는다
- ChR2(H134R)를 NAcSh D1R-MSN에 발현시키고 **광섬유를 LH 말단에** 두었다(20 Hz, 4 ms pulse).
- **자유급식 D1RCre+**: 지방 섭취 **강하게 억제**(ANOVA condition × light p<0.01; 총 섭취 ***p≤0.001). 액상 **sucrose에서도 재현**(별도 cohort). **24 h 금식 후에도 억제가 유지**된다 → *immediate metabolic need를 override*.
- **D2R 말단 자극**: 효과 없음. **GADCre+**(NAcSh의 모든 GABA성 LH 투사) 자극: D1R과 동일하게 섭취 억제 → D1R-MSN이 그 효과의 주 담체.
- **Closed-loop 광유전**(자유급식 상태, Figure 4E): burst 개시(3 lick) 탐지 → **500 ms 20 Hz 광 train**. 3-lick burst 빈도가 light-on에서 유의 증가(condition × light **F(1,19)=6.26, p<0.05**) → **진행 중 licking을 즉시 중단**.
- **단일 4 ms pulse만** 주면 효과 없음 → 섭취를 끊으려면 **비교적 지속적인 LH 억제**가 필요.

### Figure 5 — accumbens는 orexin·MCH 뉴런을 표적하지 않는다
- 야생형에 **non-floxed ChR2**를 NAcSh에 발현, LH 뉴런을 biocytin으로 충전하며 광 유발 IPSC를 기록 후 면역조직화학으로 정체를 확인.
- 총 **62개 LH 뉴런** 중 **29개(47%)** 가 연결됨. 연결·비연결 세포는 LH 전후축에 **섞여 분포**.
- **MCH 염색(25 cells)**: 연결 14개 중 **MCH⁺는 0개**. MCH⁺는 2개뿐이고 둘 다 비연결.
- **Orexin-A 염색(27 cells)**: 연결 10개 중 **orexin⁺ 0개**. orexin⁺ 1개는 비연결.
- 일부 연결 뉴런은 인접 MCH·orexin 뉴런과 **appositions**를 형성 → 연결 뉴런이 accumbal 입력과 펩타이드 뉴런 사이의 **추가 게이트**일 가능성(Sano & Yokoi 2007과 일치).

### Figure 6 — 표적은 LH GABA 뉴런이고, 그 직접 억제가 모든 결과를 재현한다
- **연결성**: VGaTCre+ LH에 floxed 형광 리포터 + NAcSh에 non-floxed ChR2. 기록된 LH GABA 뉴런의 **78%(28/36, n=3 mice)** 가 연결, 평균 **803 ± 217 pA** → LH^Vgat가 accumbal 억제의 **농축 표적**.
- **Modified rabies(VGaTCre × Drd1a-tdTomato)**: LH GABA 뉴런을 starter로 단시냅스 역추적 → NAcSh에 spiny 형태 EGFP⁺ 뉴런, 그중 **97%가 tdTomato⁺ = D1R-MSN**(n=2 mice). → **D1R-MSN → LH^Vgat 단시냅스 억제** 확정.
- **충분성**: LH^Vgat에 eArch3.0 발현, **24 h 금식** 후 LH GABA 직접 광억제 → 지방 섭취 억제. ANOVA condition(control/eArch) × light **F(1,9)=8.64, p<0.05**; 총 섭취 **p<0.01**.
- **Closed-loop**: 500 ms LH^Vgat 광억제만으로도 **진행 중 섭취가 한 lick 단위로 중단**. 3-lick burst 분포 **F(1,9)=86.6, p<0.001**.
- → D1R-MSN 말단 자극의 효과가 **후시냅스 세포 직접 억제로 완전히 재현**된다. 단 저자들은 VP 등 다른 **collateral의 기여를 형식적으로 배제하지 못한다**고 명시한다(Tripathi 2010의 단일축삭 분지).

### Discussion — 저자들이 직접 배제·유보한 것
- **VP 대안**: D1R-MSN은 VP(Kupchik 2015)·VTA(Bocklisch 2013)로도 투사한다. VP는 섭식에서 오래 기술되었으나 D1/D2 분업이 불명. "LH 투사 MSN과 VP 투사 MSN 사이에 기능적 collateral이 얼마나 있는가"는 미해결.
- **VTA 대안은 배제**: ① medial NAcSh에서 VTA는 LH보다 소수 출력(Thompson & Swanson 2010), ② **VTA GABA 뉴런 직접 활성은 섭취를 멈춘다**(van Zessen 2012) — 본 논문의 "D1R-MSN 활성↓ = 섭식 촉진"과 **부호가 반대**라서 VTA 경로로는 설명 불가.
- **Rostro-caudal gradient 문제**: Richard & Berridge 2011은 rostral NAcSh의 AMPAR 길항이 D1R 의존 섭식, caudal은 D1R+D2R 의존 공포를 낸다고 보고했다. 본 논문의 투사 조성은 rostral·caudal 모두 D1R 우세였으므로, 그 기능 gradient는 **caudal NAcSh에 인접한 BNST가 섞여 들어간 결과**일 수 있다(BNST는 D1R 소수 + LH glutamate 뉴런 억제로 섭식↑, Jennings 2013).
- **임상 가설**: NAcSh→LH 경로의 오조정이 **anorexia의 조기 섭취 종료**(Sunday & Halmi 1996) 또는 **기호성 음식의 반복·연장 bout → 비만**(Spiegel 2000)에 기여할 수 있다. 근거로 ① 만성 구속 스트레스 유발 anorexia에서 **D1R-MSN에 선택적인 흥분성 전달 변화**(Lim 2012), ② 비만 성향 rat의 고지방·고당 식이 후 **NAcSh D1R mRNA 하향**(Alsiö 2010)을 든다. 둘 다 **상관 수준**이다.
- **범위 한계**: NAcSh→LH 투사는 섭취 통제에 국한되지 않을 것이며(조건강화·PIT·혐오·공포·사회적 놀이), LH GABA 뉴런도 기능적으로 이질적(Jennings 2015)이므로 **대규모 집단 기록**이 필요하다고 명시한다.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **NMPU의 threshold K를 움직이는 회로**: [[kim-2024-normative-framework-dissociates-need|Kim 2024]]의 모델에서 행동은 Motivation M(t)이 threshold K를 넘을 때 개시된다. 본 논문의 D1R-MSN→LH^Vgat 게이트는 **Need·Motivation을 건드리지 않고 K만 순간적으로 올리는** 외부-자극 채널로 해석할 수 있다. 검증: AgRP 광자극으로 Need를 올린 상태에서 D1R-MSN 말단을 자극하면 **섭식이 중단되지만 자극 종료 후 즉시 재개**되어야 한다(Need는 유지되므로). 본 논문은 금식 조건(Figure S5C)에서 세션 전체의 섭취 억제만 보였고 **자극 종료 후 재개 동역학을 보고하지 않았다**.
- **LH^LepR가 이 억제를 받는가**: 본 논문의 표적은 LH^Vgat 전체(78% 연결)다. [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]의 LH^LepR는 LH GABA의 4%지만 food-specific 집단의 79%를 차지한다. **D1R-MSN → LH^LepR 단시냅스 억제가 있는지**(rabies 또는 LepR-Cre 조건 기록), 그리고 그것이 seeking subset과 consummatory subset 중 어디에 붙는지가 직접 실험 가능한 질문이다. 예측: 본 논문의 효과가 **섭취(consummatory)에 즉각적**이므로 consummatory subset 우세.
- **NPY disinhibition gate와 2단 게이트 가설**: Lee 2023은 AgRP/NPY → NPYR⁺ LH 개재뉴런 → **LH^LepR 탈억제**(상류 허가)를 보였다. 본 논문은 NAc D1R-MSN → LH^Vgat **직접 억제**(하류 차단)를 보였다. 두 게이트가 직렬이면 "배고픔이 문을 열고, 외부 자극이 문을 닫는다"는 **2단 AND-NOT 구조**가 된다 — [[concept-appetitive-consummatory-phases]]의 phase 전환을 회로로 쓸 수 있는 틀.
- **"먹기를 멈추는 능력"의 회로 표현형**: 방해자극 효율(3-lick burst 빈도 증가분)은 **섭취 중단 가능성의 정량 지표**다. 사람 쪽 [[concept-inhibitory-control-demand|억제통제 부하]]·[[concept-cue-reactivity|cue reactivity]] 측정에 "식사 중 외부 방해자극에 대한 중단 잠복"을 넣으면 같은 축을 잴 수 있다. [[concept-digital-therapeutics|DTx]]에서 meal-interruption 과제의 설계 근거.
- **Loss-of-control eating = 종료 신호 결손**: [[concept-loss-of-control-eating]]·[[concept-compulsion]]은 대개 "개시·추구의 과잉"으로 조작화된다. 본 논문은 같은 표현형이 **종료 신호(D1R-MSN 재활성) 결손**으로도 생길 수 있음을 함축한다. [[guillaumin-2023-disentangling-the-role-of-nac|Guillaumin 2023]]의 lick microstructure(bout 길이 = liking, bout 수 = wanting) 지표와 결합하면 "bout 길이 연장 = 종료 결손 / bout 수 증가 = 개시 과잉"으로 분해해 볼 수 있다(원문은 bout 길이를 liking으로 해석하지 않는다).
- **GLP-1RA와의 접점은 미측정**: 본 논문의 게이트는 호르몬 조작 없이 **외부 자극**만으로 작동했다. [[lee-2026-distinct-lateral-hypothalamic-gabaergic|Lee 2026]]은 Ex-4가 LH^Vgat의 cue·섭취 반응을 둘 다 깎음을 보였다. 두 결과를 합치면 **GLP-1RA가 "LH^Vgat 신호 크기"를 줄이는 쪽이고, D1R 게이트는 "언제 끊을지"를 정하는 쪽**이라는 분업 가설이 가능하다 — 같은 하류 세포에서 두 조작이 가산적인지 상호작용적인지는 미검증.

## ⚠️ 위키 내 충돌·긴장 (병기 — 덮어쓰지 않음)
- **[[mingote-2019-dopamine-glutamate-neuron-projections-to]] — SPN 활성의 부호가 반대**: Mingote 도식은 NAc medial shell **SPN 활성 = Stay on task(현행 행동 지속)**, DA-GLU 버스트에 의한 **순 SPN 억제 = 과제 전환**이다. 본 논문은 **D1R-MSN 활성 = 섭식 중단(= 전환)**, **억제 = 섭식 지속**이다. 진행 중 과제가 섭식이면 두 설명은 medial shell SPN 활성의 결과를 **정반대로 예측**한다. 해소 후보: (i) 본 논문의 세포는 **LH 투사 shell SPN**이고 Mingote의 대상은 medial shell SPN 전체라는 아집단 차이, (ii) 시간척도(수 초 bout vs sub-second 버스트). 위키 두 페이지 모두 이 긴장을 이미 명시하고 있다 — 본 페이지는 **1차 데이터 쪽 수치**(93.6% D1R·56% 연결·closed-loop)를 제공한다.
- **[[rossi-2018-overlapping-brain-circuits-for]] Table 2의 부호 표기 — 본 원전으로 확인**: 그 페이지는 "추출 텍스트에서 NAc D1R→LHA ChR2 행 food intake가 '+'로 읽힌다"며 원 PDF 확인이 필요하다고 ⚠️ 표시했다. **본 원전 Figure 4C–4D(지방, 자유급식) + Figure S5A–S5B(sucrose) + Figure S5C(24 h 금식)는 D1R-MSN 말단 ChR2 자극이 섭취를 모두 억제(−)** 함을 명확히 보여 준다. 따라서 그 '+' 표기는 **표 오기 또는 추출 오류**로 판정할 근거가 생겼다. Table 1의 "NAc D1R 억제 = +"는 본 논문 Figure 3B와 **일치**한다.
- **[[sharpe-2024-the-cognitive-lateral-hypothalamus]] — 학습 locus 논쟁**: Sharpe는 본 논문([49])을 "**학습은 PL·NAc 같은 상위 구조가 하고 LH는 선천적 섭식 추동일 뿐**"이라는 모델의 대표 사례로 들어 비판한다. 다만 **본 논문 자체는 학습에 대한 주장을 하지 않는다** — 다루는 것은 학습된 cue가 아니라 **무예고 방해자극과 광유전 조작에 대한 순간적 섭취 통제**다. 즉 Sharpe의 비판 대상은 본 논문 결과가 아니라 그것이 함축한다고 읽힌 **위계 모델**이다. 두 주장은 섭식 on/off 데이터에서는 양립하며, 충돌은 **"cue–음식 연합이 어디서 저장되는가"** 에 한정된다(병기).
- **[[jennings-2013-the-inhibitory-circuit-architecture]] — 같은 LH, 반대 부호의 두 억제성 입력**: Jennings 2013(Stuber lab)은 **BNST^GABA → LH^Vglut2 억제 → 섭식 개시**를 보였다. 본 논문은 **NAcSh D1R → LH^Vgat 억제 → 섭식 중단**(역으로 D1R 억제 → 섭식 개시)을 보인다. 본 논문의 CTB 데이터가 그 분자적 근거를 제공한다: **LH 투사 뉴런의 D1R 발현이 NAcSh(93.6%)와 BNST(15–23%)에서 뒤집힌다.** 두 경로는 모순이 아니라 **표적 세포형(Vglut2 vs Vgat)이 다른 병렬 게이트**다.
- **[[jennings-2015-visualizing-hypothalamic-network-dynamics]]·[[lee-2026-distinct-lateral-hypothalamic-gabaergic]] — "LH^Vgat"를 단일 집단으로 취급한 한계**: 본 논문은 LH^Vgat의 78%가 accumbal 억제를 받고, 그 직접 억제가 섭취를 멈춘다고 본다. 그러나 Jennings 2015는 LH^Vgat 안에 appetitive/consummatory 비중첩 subset이 있음을, Lee 2026(SNU 김성연 lab)은 **valence 무관 salience ensemble vs value-scaled consumption ensemble**이 있음을 보였다. 따라서 본 논문의 "LH^Vgat 억제 = 섭취 중단"은 **ensemble 평균 효과**이며, 어느 ensemble이 D1R 입력을 받는지는 미해결이다(병기).
- **[[gordon-2026-lateral-hypothalamic-control-of]]·[[stuber-2025-the-neurobiology-of-overeating]] — "게이트"가 유일한 LH 기능이 아니다**: Stuber 2025 리뷰는 본 논문을 "feeding authorization"으로 확정 기술한다. Gordon 2026은 같은 LH^GABA/Glut 균형이 **선조체 DA 지형을 설정하는 조절기**로 작동하고, 그 DA는 섭취 **개시만** 강화함을 보였다. 본 논문의 on/off 게이트 프레임과 Gordon의 연속 조절기 프레임은 **층위가 다른 상보 기술**로 병기한다. 또한 본 논문은 **NAc → LH 방향**이고 Gordon은 **LH → 선조체 DA 방향**이라, 둘을 합치면 Stuber 2016이 그린 **LH^GABA → VTA → NAc → LH^GABA 음성 되먹임 고리**의 두 변이 각각 1차 데이터로 채워진다.
- **[[onimus-2026-dopamine-ensembles-regulating-appetite]] — D1R-SPN→LH의 부호가 보고마다 다르다**: 그 리뷰는 D1R-SPN 활성화가 "대체로 food intake↓"이지만 상반 보고(감미료에 활성, rostral NAc AMPA 차단 시 D1R만으로 food seeking)도 있다고 병기하고, **NAc^Sh D1R^Serpinb2 → LH LepR 투사가 leptin의 anorectic 효과를 override**(Liu 2024 Nat Metab)한다고 소개한다. 후자는 "D1R→LH 활성 = 섭식 억제"와 **부호가 반대**로 읽힌다. 아집단(Serpinb2⁺) 차이·표적 세포형(LepR vs Vgat 전체)·조작 시간척도가 모두 달라 직접 비교는 안 되며, 본 논문은 **D1R-MSN을 아집단으로 쪼개지 않았다**(병기).
- **D1/D2 = direct/indirect 이분법의 한계(원문 인용)**: 저자들이 직접 인용한 **Kupchik 2015**(Nat Neurosci 18:1230)는 "accumbens 투사에서 D1/D2의 direct/indirect 부호화는 성립하지 않는다"고 보고한다. 따라서 본 논문의 "93.6% D1R"은 **direct pathway 소속의 증거가 아니라 수용체 표지의 분포**로 읽어야 한다 → [[concept-medium-spiny-neuron]]의 이분법 서술과 함께 병기.

## 관련 페이지
- [[concept-lateral-hypothalamus]] — 개념 hub. 본 논문이 LH^Vgat의 **상류 억제 게이트**(NAcSh D1R)를 처음 세포 수준에서 정의.
- [[concept-nucleus-accumbens]] — "NAc shell → LH hedonic eating 회로(Kelley·O'Connor)" 서술의 1차 원전. CTB 93.6%·IPSC 56%·BNST 부호 반전 수치 제공.
- [[concept-medium-spiny-neuron]] — D1R/D2R-MSN 정체. ⚠️ 원문이 인용한 Kupchik 2015는 accumbens에서 direct/indirect 이분법이 성립하지 않는다고 본다.
- [[stuber-2025-the-neurobiology-of-overeating]] — 본 논문을 "feeding authorization gate"(ref47)로 확정 기술한 리뷰(Lüscher 공저). 급성 식이제한이 이 시냅스를 depress시킨다는 후속(Thoeni 2020)도 그쪽에 정리됨.
- [[stuber-2016-lateral-hypothalamic-circuits-for]] — 본 논문 결과를 LHA 입력 지도에 배치한 리뷰(D1R 섬유가 LHA 복외측 지배, Orx·MCH 비표적).
- [[sharpe-2024-the-cognitive-lateral-hypothalamus]] — ⚠️ 본 논문([49])을 "상위 구조가 LH 스위치를 지시한다" 모델의 사례로 비판. 학습 locus 쟁점 병기.
- [[mingote-2019-dopamine-glutamate-neuron-projections-to]] — ⚠️ medial shell SPN 활성의 부호 상반(Stay on task vs 섭식 중단).
- [[jennings-2013-the-inhibitory-circuit-architecture]] — BNST^GABA → LH^Vglut2 억제 = 섭식 개시. 본 논문의 BNST D1R 15–23% 데이터가 두 경로의 분자적 분기점.
- [[jennings-2015-visualizing-hypothalamic-network-dynamics]] — LH^Vgat의 appetitive/consummatory 비중첩 subset. 본 논문이 표적을 LH^Vgat 전체로 다룬 한계의 대조점.
- [[lee-2026-distinct-lateral-hypothalamic-gabaergic]] — LH^Vgat의 salience vs value-scaled consumption ensemble(SNU 김성연 lab). 어느 ensemble이 D1R 입력을 받는지가 다음 질문.
- [[gordon-2026-lateral-hypothalamic-control-of]] — LH^GABA/Glut 균형 → 선조체 DA 지형(Stuber lab 2026). 본 논문과 **반대 방향**의 LH↔선조체 축.
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] — 사용자 lab LH^LepR seeking/consummatory 2 subpopulation + NPY disinhibition gate. 본 논문 D1R 억제의 분자 표적 후보.
- [[kim-2024-normative-framework-dissociates-need]] · [[kim-2024-unified-theoretical-framework-underlying-regulation]] · [[concept-need-motivation-pleasure-utility]] — threshold K를 외부 자극이 올리는 기전 후보로서의 게이트.
- [[liu-2026-granular-motivational-interaction-and]] — "NAc^D1-MSN → LH^GABA 억제(licking 차단)" 서술의 원전. feeding phase별 전용 회로 분해 프레임.
- [[guillaumin-2023-disentangling-the-role-of-nac]] — NAc shell D1/D2 세포와 lick microstructure(bout 수 = wanting, bout 길이 = liking). 본 논문 closed-loop의 3-lick burst 지표와 같은 계열.
- [[rossi-2018-overlapping-brain-circuits-for]] — ⚠️ 그 페이지의 Table 2 부호 표기 의문을 본 원전으로 해소(ChR2 말단 자극 = 섭취 억제).
- [[onimus-2026-dopamine-ensembles-regulating-appetite]] — ⚠️ D1R-SPN→LH 부호의 보고 간 불일치(Serpinb2⁺ → LH LepR가 leptin anorexia override).
- [[person-luscher-christian]] — 교신저자. 중독 회로·시냅스 가소성 프로그램에서 섭식으로 확장한 지점.
- [[concept-appetitive-consummatory-phases]] — 섭취 종료(offset) 신호를 가진 상류 게이트. phase 전환의 회로 후보.
- [[concept-loss-of-control-eating]] · [[concept-compulsion]] — 과식을 "개시 과잉"이 아니라 **종료 신호 결손**으로 읽는 축(연결 가설).
- [[concept-orexin-neurons]] — 본 논문이 명확히 **비표적**으로 배제한 집단(연결 10개 중 orexin⁺ 0개). MCH도 동일.
- [[thoeni-2020-depression-of-accumbal-to]] — ★ **직계 후속**(Neuron 2020, 같은 lab·2저자 O'Connor 공저). 본 논문이 세운 게이트에 **시간축(가소성)** 을 붙였다: 자유급식에서는 FSK가 D1-MSN→LH 억제성 i-LTP를 못 만들지만(같은 동물의 D1-MSN→VP는 만든다), **하룻밤 급성 식이제한 또는 3일 고지방식 뒤에는 i-LTP가 드러난다**(t36=2.72 / t40=2.69, p<0.05) = 그 상태에서 시냅스가 이미 **eCB–CB1R 의존적으로 depress**되어 있었다는 뜻. 체중 회복 후 1주면 소실. CB1R 길항(전신 10 mg/kg 또는 **LH 국소 1.5 µg/side**)이 가소성과 과식을 함께 막고, 반대로 **in vivo HFS로 이 시냅스를 potentiate하면 24 h 금식 마우스도 덜 먹는다**(lick t6=6.534, p<0.001). 본 논문의 "순간 게이트"가 **수일 단위로 세팅이 바뀐다**는 확장. ⚠️ LH 투사 NAcSh 뉴런의 D1 비율이 그쪽에서는 **76.5–89.5%**(코호트별)로, 본 논문의 **93.6%**와 다르다 — 주입 좌표·이중 주입 설계 차이로 추정(병기).
- [[harris-2005-a-role-for-lateral]] — ⚠️ 본 논문이 **비표적으로 배제한 orexin 뉴런이 독립적으로 cue 유발 추구·재발을 구동한다**는 원전(Nature 2005, Aston-Jones lab): LH orexin Fos가 morphine·cocaine·food CPP 선호와 **R=0.72–0.90** 비례하고, LH 국소 Y4 작용제(rPP)·**VTA orexin A 주입**이 소거된 장소선호를 복원하며 **OX1R 길항제가 차단**한다. 본 논문의 결과(biocytin 충전 62개 중 연결 29개에서 **MCH⁺·orexin⁺ 0개**)와 합치면 **두 배선의 역할 분리 가설**이 선다 — **NAcSh D1R→LH^Vgat = 섭취의 순간 단위 허가/중단**, **LH orexin→VTA = 학습된 cue에 의한 추구 개시·재발**. ⚠️ 이는 [[meye-2014-feelings-about-food-the|Meye & Adan 2014]]가 적은 "NAc 오피오이드→LH orexin→VTA가 고지방 섭식에 필수"라는 경로와 긴장하므로, 'NAc→orexin'은 **직접 시냅스가 아닌 다중시냅스 경로**로 한정 인용해야 한다(병기).
- [[liu-2023-an-iterative-neural-processing]] — 같은 LH^GABA(GAD2)를 자유행동에서 **섭식 조각 개시 노드**로 그린 연구(Neuron 2023, Wang lab). ⚠️ 본 논문의 "NAc D1R→LH^Vgat = 허가·종료 게이트"와 측정 축이 다르다(개시 vs 종료). 그쪽 Liu도 NAc D1R→LH^GABA를 개시 억제 상류 후보로 인용(병기).
- [[siemian-2021-lateral-hypothalamic-lepr-neurons]] — NAcSh D1R-MSN→LH^Vgat 억제가 섭취를 멈추는 하류 게이트. Siemian 2021의 "LH^LepR subset은 섭취 비구동·appetitive 학습 전담"은 그 순간 단위 섭취 게이트의 표적이 LepR 부분집합은 아닐 가능성을 시사(연결 가설).
