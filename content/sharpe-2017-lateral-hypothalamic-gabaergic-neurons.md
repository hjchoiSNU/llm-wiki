---
title: "Lateral hypothalamic GABAergic neurons encode reward predictions that are relayed to the VTA to regulate learning (Sharpe 2017, Curr Biol)"
type: paper
created: 2026-10-03
updated: 2026-10-03
source: "raw/2017 Current Biology. Lateral Hypothalamic GABAergic Neurons Encode Reward Predictions that Are Relayed to the Ventral Tegmental Area to Regulate Learning.pdf"
authors: [Melissa J. Sharpe, Nathan J. Marchant, Leslie R. Whitaker, Christopher T. Richie, Yajun J. Zhang, Erin J. Campbell, Pyry P. Koivula, Julie C. Necarsulmer, Carlos Mejias-Aponte, Marisela Morales, James Pickel, Jeffrey C. Smith, Yael Niv, Yavin Shaham, Brandon K. Harvey, Geoffrey Schoenbaum]
year: 2017
journal: "Current Biology 27:2089–2100 (2017-07-24; online 2017-07-06); doi:10.1016/j.cub.2017.06.024"
---

> [!takeaway] 연구 방향 관점의 핵심
> **위키 곳곳에서 "Sharpe 2017"로 인용되던 원전.** LH^GABA를 "먹게 하는 출력 스위치"에서 **"cue–보상 연합을 저장하고 그 기대값을 VTA로 내보내 학습을 조절하는 인지 노드"**로 뒤집은 논문이다. 설계의 핵심은 **cue 제시 구간에만** 광억제를 걸고 **보상 전달·섭취 구간은 건드리지 않은 것**이다. 결과는 셋이다. ① 학습 중 LH^GABA 체세포 억제 → CS+ 반응 획득 실패, **그러나 직후 pellet 섭취는 정상**이고 결손은 **레이저 없는 소거 시험까지 지속**(= 동기·운동·감각의 일시 저하가 아니라 연합 획득 실패). ② 정상 학습 후 시험 때만 억제 → cue가 food-seeking을 끌어내지 못함(= 저장·인출에도 필요). ③ **LH^GABA의 VTA 말단만 억제하면 학습이 오히려 빨라진다** — "기대값 전달을 끊으면 VTA 도파민 오차가 과대하게 유지된다"는 해석.
> 사용자 연구에 닿는 지점: (1) [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]]에서 LH를 Motivation hub로만 두는 매핑에 **Utility(지연 결과 교사)→Motivation 되먹임의 회로 후보**를 추가한다 — LH^GABA→VTA는 행동을 구동하지 않고 **학습률만 조절**한다. (2) [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]·[[kim-2024-normative-framework-dissociates-need|Kim 2024]]의 LH^LepR는 이 rat LH^GABA 모집단의 분자 부분집합 후보이며, [[siemian-2021-lateral-hypothalamic-lepr-neurons|Siemian 2021]]이 마우스에서 그 검증을 시도해 **부분 재현·부분 불일치**로 끝났다. (3) [[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]] 리뷰의 "LH GABAergic도 cue-food 연합 학습 필수" 한 줄의 실험적 근거가 여기다. (4) 도구 자체가 자산 — **GAD-Cre rat**(LE-Tg(GAD1-iCre)3Ottc, RRRC#751)이 이 논문에서 처음 공개됐고, 이후 [[hoang-2026-methamphetamine-potentiates-the-use-of|Hoang 2026]]을 포함한 Sharpe lab의 rat 연구가 이 계통을 쓴다(원문은 계통 공개만 보고 — "전부"는 위키의 관찰).

# Lateral Hypothalamic GABAergic Neurons Encode Reward Predictions that Are Relayed to the Ventral Tegmental Area to Regulate Learning (Sharpe et al. 2017)

- **저널**: Current Biology 27, 2089–2100 (2017-07-24 호; 접수 2017-03-27, 수정 05-08, 채택 06-09, 온라인 07-06). DOI: 10.1016/j.cub.2017.06.024
- **소속**: NIDA IRP(Baltimore) 주축 — **Geoffrey Schoenbaum** lab + **Brandon K. Harvey**(NIDA Optogenetics and Transgenic Technology Core) + Princeton Neuroscience Institute(**Yael Niv**) + NIAAA·NIMH·NINDS·U. Melbourne Florey·U. Newcastle·UMD·Johns Hopkins. 제1저자 **Melissa J. Sharpe**(당시 NIDA/Princeton 박사후). 교신 M.J. Sharpe · B.K. Harvey · G. Schoenbaum. 지원 ZIA DA000587.
- **공개 자원**: GAD-Cre rat = **LE-Tg(GAD1-iCre)3Ottc** (RRRC#751, RGD ID 9588593 — Key Resources Table은 9588593, Methods 본문은 9588591로 적는 **원문 내부 불일치**). 플라스미드 AAV EF1a DIO Mem-AcGFP(Addgene #75081)·Nuc-eYFP(#75082). 데이터는 lead contact 요청 제공(2017년 관행).
- **주의**: 저자들의 핵심 주장(실험 3의 "도파민 오차 과대" 해석)은 **도파민을 직접 측정하지 않은 추론**이다. 원문도 "an effect we interpret as…"로 명시한다.

## 한 줄 요약
새로 만든 GAD-Cre 랫트에서 **cue 구간에만** LH^GABA를 광억제했더니 cue–음식 연합의 **획득과 발현이 모두** 무너졌고(섭취는 정상), 반대로 같은 뉴런의 **VTA 말단만** 억제하자 cue 학습이 **촉진**되었다 — LH^GABA가 cue가 유발한 보상 기대를 저장하고 그것을 VTA로 보내 **도파민 교사 신호의 크기를 깎는다**는 그림.

## 핵심 내용

### Figure 1 — GAD-Cre 랫트의 제작과 검증
- rat **GAD1** 유전자(245 kb BAC, CH230-24D16)의 start codon 자리에 **iCre**를 recombineering으로 끼워 넣고 배아에 미세주입 → **founder 75마리 중 3계통**. 그중 Cre transgene **단일 복제**를 가진 line 3을 채택(LE-Tg(GAD1-iCre)3Ottc).
- **Cre × GAD1 mRNA 공발현**(RNAscope): 중뇌 **76 ± 11%**, **LH 80 ± 6%**, 뇌간 **85 ± 6%**. 반면 **anterior cingulate cortex는 32 ± 8%**로 낮다 → 계통은 영역별로 따로 검증해야 한다고 저자들이 명시.
- Cre 의존 nYFP 주입 후 LH에서 **nYFP⁺ 세포의 87 ± 10%가 GAD1 mRNA⁺**, **GAD2·VGAT와 91 ± 7% 공편재**. 내인성 공편재는 GAD1/GAD2 **100 ± 0%**, GAD1/VGAT **100 ± 0%**, GAD2/VGAT **98 ± 2%**, **VGAT/VGLUT2는 1 ± 1%** → LH의 GABA 뉴런과 글루탐산 뉴런은 **분리된 집단**.
- **MCH·ORX와 거의 겹치지 않는다**: eYFP⁺ 중 MCH 염색 **1.2%**(n=6), ORX **<1%**(n=3). 즉 이 논문의 "LH GABA"는 [[concept-orexin-neurons|orexin]]·MCH 펩타이드 계통이 아니다.

### Figure 2 — 광억제·GABA 방출의 ex vivo 검증
- NpHR-eYFP⁺ LH 뉴런은 탈분극 전류 주입 중 광 조사에 **발화 97.92 ± 2.1% 억제**, eYFP⁻는 6.7 ± 4.1%(t(5)=21.4, **p<0.0001**).
- 안정막전위: eYFP⁺ **−15.23 ± 3.2 mV** 과분극, eYFP⁻ −0.22 ± 0.25 mV(t(8)=5.9, p=0.003).
- ChR2로 LH GABA 말단을 자극하면 **VTA 뉴런에서 IPSC**(진폭 182.26 ± 39.62 pA)가 유발되고 **picrotoxin으로 8.15 ± 1.72 pA까지 차단**(t(4)=4.37, p=0.01) → LH^GABA→VTA는 **기능적 GABA 시냅스**.

### Figure 3 — LH GABA 투사의 전뇌 지도 (TissueCyte serial two-photon)
- 일측 LH에 AAV1-DIO-Mem-AcGFP 주입 후 170개 관상 절편(100 μm 간격) 전뇌 영상. 동측성 표지.
- 표지 표적: **LH 국소·외측고삐핵(LHb)·편도체·BNST·중격(septum)·VTA(특히 parabrachial pigmented area)·복외측 PAG·IL/PL(mPFC)**.
- → VTA는 여러 표적 중 하나일 뿐이다(실험 3의 해석 범위를 제한하는 사실).

### 공통 행동 과제 (Pavlovian conditioning)
- 수컷 24 + 암컷 28 = **총 52마리** Long-Evans GAD-Cre 랫트. NpHR 25 / eYFP 27. 체중을 자유섭식 대비 **85%**로 유지.
- 좌표: LH AP −2.4, ML ±3.5, DV −8.4(암)/−9.0(수), 내측 10° 경사. 광섬유는 LH(DV −7.9/−8.5) 또는 **VTA**(AP −5.3, ML ±2.61, DV −7.05/−7.55, 15°).
- 구조: food-port 훈련(45 mg 수크로스 30개/1시간) → 조건화 **12세션**(실험 1·2, 하루 2회) 또는 **14세션**(실험 3, 하루 1회). 매 세션 **10 s 청각 cue(tone/siren, 역균형) 각 6회**, ITI 평균 6분(4–8분). **CS+ 종료 1초 뒤 수크로스 pellet 2개**, CS−는 무보상. 종속변수 = **food port 체류 시간 비율**(cue 마지막 5초 / pellet 후 2초).
- 광: **532 nm, 16–18 mW, cue 시작 500 ms 전 ~ 종료 500 ms 후 연속** — **보상 전달·섭취 구간에는 레이저가 없다**. 이 시간 분리가 논문 전체의 논리적 핵심이다. 실험 1·3은 조건화 중, 실험 2는 cue 시험에만 같은 파라미터로 조사.
- 시험 회차: 실험 1은 cue 각 **6회**, 실험 2는 각 **8회**(무보상).
- **원문 내부 불일치(주의)**: Methods는 실험 3을 **14세션**으로 적지만, 실험 3 조건화 ANOVA의 session df(6,108)는 **분석된 레이저 세션이 7개**임을 뜻한다(이어지는 무레이저 8세션과 합쳐도 14와 맞지 않는다). 원문이 조정하지 않은 불일치.

### Figure 5 (실험 1) — 학습 중 LH^GABA 억제 → cue 학습 실패, 섭취는 정상
- 원문이 보고하는 **NpHR 16 / eYFP 16**은 실험 1·2를 **합산한 32마리**("Thirty-two Long-Evans GAD-Cre rats were trained in these experiments")다. 실험 1 단독의 df(1,14)는 **n=16, 군당 8**을 뜻한다(실험 1·2가 각각 8/8로 쪼개지면 전체 52마리의 NpHR 25 / eYFP 27과 합산이 맞는다 — 군당 8은 df에서 나온 추론).
- eYFP는 CS+ > CS− > pre-CS baseline으로 분화. NpHR은 **CS+ 반응이 조건화 내내 유의하게 낮고**, **CS− 반응도 함께 낮았다**(CS−에 대한 일반화 반응 역시 학습된 것이므로 예상되는 결과라고 저자 설명). **pre-CS baseline은 두 군 차이 없음**.
- 3요인 ANOVA(cue×session×group): cue **F(2,28)=56.3, p<0.01**; session F(11,154)=2.5, p<0.01; group **F(1,14)=5.2, p<0.04**; cue×group F(2,28)=3.6, p<0.05; cue×session F(22,308)=3.2, p<0.01. 사후: CS+ 군간차 **F(1,14)=5.8, p<0.05**, CS− 경향 F(1,14)=3.9, p<0.07, baseline p>0.1. 마지막 날 2요인(cue×group): cue F(1,14)=8.8 p<0.01, **group 주효과 F(1,14)=5.9 p<0.05**, cue×group 상호작용 없음(p>0.1).
- **결정적 대조**: CS+ 종료 **직후 pellet 전달 구간의 food port 체류는 두 군이 동일**(cue 주효과 F(1,14)=11.7, p=0.004; group·상호작용 모두 p>0.1). 즉 NpHR 랫트도 cue와 보상을 시간적으로 인접하게 경험했고 먹었다.
- **레이저 없는 소거 시험**: NpHR은 여전히 CS+·CS− 모두에서 유의하게 낮음(cue F(1,14)=15.7, p<0.01; group **F(1,14)=15.7, p<0.01**; 상호작용 없음) → 결손은 **일시적 동기·운동·주의 저하가 아니라 연합 획득 실패**.

### Figure 6 (실험 2) — 정상 학습 후 시험 때만 억제 → cue가 행동을 끌어내지 못함
- 조건화는 레이저 없이 진행했고 군차가 없었다(cue F(2,28)=57.6, session F(11,154)=3.8, group p>0.1; 마지막 날 cue F(1,14)=30.0; 보상 구간 cue F(1,14)=81.9, 군차 없음).
- **소거 시험에서만 LH^GABA 억제** → NpHR은 CS+·CS− 반응이 모두 유의하게 감소(cue F(1,14)=15.9, p<0.01; group **F(1,14)=5.2, p<0.05**; 상호작용 없음).
- → LH^GABA는 획득뿐 아니라 **저장된 연합의 발현(인출)**에도 필요. 실험 1의 결손이 "하류 학습 손실"의 2차 효과가 아님을 보강.

### Figure S4 — 운동량 대조
- NpHR 양측 발현 랫트 3마리, 적외선 광빔 4개 챔버, 25분 세션 ×3, **10 s 레이저 ×8회**(ITI 평균 3분). 레이저 구간 vs 직전·직후 10초 비교에서 **차이 없음(F<1)**.

### Figure 7 (실험 3) — VTA 말단만 억제하면 학습이 **빨라진다**
- 논리: VTA 도파민은 **실제−예측 보상의 차이(RPE)**에 비례해 발화한다(Schultz 1997). LH^GABA가 그 "예측"을 VTA에 전달한다면, **말단만 끊었을 때** VTA는 예측을 받지 못해 **오차가 과대하게 유지**되고, 체세포는 온전하므로 LH(및 BLA·NAc 등)는 그 과대 오차로 **더 많이 학습**할 수 있다 → **학습 촉진**을 예측.
- 랫트 20마리(**NpHR n=9, eYFP n=11**), LH에 바이러스·VTA에 광섬유. 학습 속도를 늦춰 촉진을 보기 위해 **하루 1세션**으로 변경.
- 두 군 모두 학습했으나 **NpHR의 CS+ 반응이 후반 세션에서 더 높았다**: cue F(1,18)=28.8 p<0.001, session F(6,108)=7.5 p<0.001, cue×session F(6,108)=14.1 p<0.001, **cue×group×session F(6,108)=3.0, p<0.02**. 마지막 세션 cue F(1,18)=36.7 p<0.001, cue×group **F(1,18)=6.8, p<0.02**(group 주효과는 F(1,18)=2.8, p=0.11).
- **보상 전달 구간은 군차 없음**(cue F(1,18)=112.3 p<0.001; group p=0.27, 상호작용 p=0.38) → 증가한 cue 반응이 보상 반응의 상승효과가 아니다.
- **레이저를 끈 뒤 8세션 추가 조건화**:
  - 초기 — NpHR의 상승이 **유지**(cue F(1,18)=33.7 p<0.001, cue×group F(1,18)=6.4 p<0.021, group×laser 상호작용 없음 p=0.524) → 일시적 수행 효과가 아니라 **학습에 남은 효과**.
  - 후기 — **대조군이 따라붙었다**(cue F(1,18)=27.6 p<0.001, cue×laser F(1,18)=12.6 p<0.02, **cue×group×laser F(1,18)=9.5, p<0.01**). 즉 레이저를 끈 뒤 eYFP는 계속 늘었고 **NpHR은 더 늘지 않았다**(원문 표현: "these rats ceased learning").
- → 저자 결론: LH^GABA는 **cue가 유발한 보상 기대를 VTA로 relay**하고, 이 신호가 **진행 중인 학습의 크기를 조절**한다.

### Discussion 요점
- **고전 LH 자극 실험의 재해석**: 전기·광유전 LH 자극이 섭식을 늘린다는 결과는 "선천적 섭식 구동"이 아니라 **장소–음식 연합의 표상 강화**로 읽을 수 있다. 근거로 ① 자극 효과는 **그 환경에서 먹어 본 경험이 있어야** 나타나고, ② 자극과 짝지어진 음식을 **이후에도 선호**하며, ③ [[jennings-2015-visualizing-hypothalamic-network-dynamics|Jennings 2015]]에서 LH^GABA 활동이 **경험이 쌓이며 증가**했다는 점을 든다.
- **Nieh 2015와의 양립**: Nieh의 LH→VTA 자극은 shock grid를 건너는 의지를 바꿨지만, **LH GABA 투사에 한정한 더 선택적 자극은 진행 중 행동을 바꾸지 못했다**. 저자들은 이를 "LH^GABA→VTA는 **학습을 위한 예측 전달 회로이지 행동 구동 회로가 아니다**"의 증거로 삼는다.
- **VTA 입력의 질적 다양성**: OFC는 추론이 필요한 과제 구조(Takahashi 2009), 복측 선조체는 과제 상태의 **지속 시간**(Takahashi 2016)을 VTA에 준다. LH^GABA는 또 다른 종류(기대 보상)를 준다 → "도파민 입력은 분산·혼합되어 구분되지 않는다"(Tian 2016)는 주장에 대한 반례.
- **일반화 예측**: cue가 인공 자극이 아니라 **음식 자체의 감각 속성**일 때에도 LH^GABA 억제는 학습을 줄일 것이라고 예측.

### 한계 (원문 명시 + 읽기 주의)
- 도파민·VTA 활동을 **측정하지 않았다**. "과대 RPE" 해석은 전적으로 행동 추론이다.
- LH^GABA 투사는 VTA 외에도 LHb·BNST·편도체·PAG·mPFC로 간다. 말단 광억제는 **지나가는 축삭·측부지(collateral)** 영향을 배제하지 못한다. ⚠️ 단 이 한계는 **원문이 적지 않은 읽기 주의**다 — 원문은 Mahn 2016(말단 NpHR 억제의 생물물리학적 제약)을 **NpHR 벡터 인용**으로만 달았고, 본문·Discussion에서 말단 억제의 비특이성이나 측부지 문제를 논의하지 않는다(별도 Limitations 절도 없다).
- 통계: 데이터 정규성을 가정했고 **등분산은 검정하지 않았다**. 조직학 외 분석은 **blind가 아니었다**. **공식 power 분석 없음**(선행 연구 관행 기준으로 표본 결정).
- 암수를 섞어 썼으나 **성차 분석이 없다**.
- GAD-Cre 계통의 Cre/GAD1 일치도는 **LH 80%**이며 100%가 아니다. ACC 32%는 이 계통을 다른 영역에 쓸 때의 경고.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **NMPU에서 LH의 두 번째 역할**: [[concept-need-motivation-pleasure-utility|NMPU]]와 [[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]]는 LH를 **Motivation 통합 hub**(Need를 받아 행동으로 번역)로 둔다. 본 논문의 LH^GABA→VTA는 행동을 구동하지 않고 **학습률만 바꾼다** — 즉 같은 영역이 **Utility(지연 결과 교사)가 Motivation을 갱신하는 되먹임 경로**도 겸한다는 가설이 가능하다. [[siemian-2021-lateral-hypothalamic-lepr-neurons|Siemian 2021]]이 마우스 LH^LepR→VTA에서 같은 해석을 명시적으로 채택했다.
- **사용자 lab 과제 설계로의 직접 이식**: [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]·[[kim-2024-normative-framework-dissociates-need|Kim 2024]]는 **seeking/consummatory phase 분리**와 **normative model**을 갖췄지만 과제가 모두 "이미 학습된" 상태를 전제한다. 본 논문의 **cue 구간 한정 억제 + 보상 구간 무개입 + 레이저 없는 소거 시험** 3종 세트를 LH^LepR에 적용하면 "LH^LepR = Motivation(수행)인가 학습(연합 저장)인가"를 Kim 2024의 모델 안에서 직접 판정할 수 있다. 특히 실험 3의 **말단 억제 → 학습 가속** 설계는 NMPU의 Utility 항을 **행동으로 측정 가능한 예측**으로 바꿔 준다(억제군의 학습 asymptote가 대조군을 넘어야 한다).
- **cue 반응의 음식 특이성 검증 지점**: 본 논문은 CS+ 억제가 **CS− 반응까지 함께 깎았다**고 보고한다. 저자는 "CS− 일반화 반응도 학습된 것"으로 설명하지만, [[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026]]의 "LH^Vgat cue 세포 = valence 무관 salience 코더"·[[siemian-2021-lateral-hypothalamic-lepr-neurons|Siemian 2021]]의 "LH^Vgat는 CS+/CS− 미변별, LepR만 변별"과 합치면 **"LH^GABA 모집단은 비변별적 salience/기대, 변별은 LepR 같은 부분집합"**이라는 통합 그림이 나온다. 사용자 lab의 microendoscopy 자료에서 **CS+ 선택성 지수**를 LepR vs 전체 GABA로 재계산하면 바로 검증된다.
- **DTx·cue reactivity 종결점**: cue 구간 개입만으로 섭취를 바꾸지 않은 채 **cue의 행동 통제력**을 없앨 수 있다는 것은, [[lee-2025-hijacked-brain-modern-obesity-cue|hijacked brain]]·[[concept-digital-therapeutics|DTx]]에서 **총 섭취량이 아니라 cue→접근 학습의 강도**를 1차 종결점으로 삼아야 한다는 근거가 된다([[siemian-2021-lateral-hypothalamic-lepr-neurons|Siemian 2021]] 페이지와 같은 결론, 다른 종).
- **도구 측면**: GAD-Cre rat(RRRC#751)은 마우스 Vgat-Cre로 재현되지 않은 결과를 **rat에서** 확인하거나, 더 복잡한 의사결정 과제(PIT·devaluation·sensory preconditioning)를 요구하는 LH 실험을 설계할 때의 표준 계통이다. 사용자 lab이 LH 결과를 **학습·의사결정 언어**로 확장하려 할 때의 실질적 진입점.

## ⚠️ 위키 내 충돌·긴장 (병기 — 덮어쓰지 않음)
- **[[siemian-2021-lateral-hypothalamic-lepr-neurons|Siemian 2021]](마우스 LH^Vgat·LH^LepR)와의 이중 불일치** — ① **체세포**: 본 논문(rat)은 조건화 중 LH^GABA 억제 결손이 **레이저 없는 소거 시험까지 지속**했다. Siemian의 마우스 LH^Vgat·LH^LepR 체세포 조작은 **지속되지 않고** cue 시기 반응만 교란했다(저자들 자신이 이 차이를 명시). ② **VTA 말단**: 본 논문은 LH^GABA→VTA 억제가 **학습을 촉진**했다. Siemian의 **LH^Vgat→VTA** ArchT는 조건화 중 변별을 오히려 **실패**시키고 소거에서는 정상으로 돌아왔으며, 본 논문과 같은 **지속적 학습 촉진은 LH^LepR→VTA에서만** 나왔다. → "Sharpe 2017의 효과를 나르는 것은 LH^GABA 전체가 아니라 LepR 부분집합"이라는 해석이 가능하지만, 종(rat vs mouse)·억제 opsin(NpHR vs ArchT)·과제(세션 수·보상량)가 모두 달라 **확정 불가. 병기**.
- **[[concept-lateral-hypothalamus]]·[[stuber-2025-the-neurobiology-of-overeating|Stuber 2025]]의 "LH GABA→VTA GABA 억제 → DA 탈억제 → NAc DA↑ → 섭식↑"(Nieh 2015·2016, Jennings 2013) 통념과의 기전적 긴장** — 그 모델대로라면 LH GABA 말단을 **끄면** VTA DA가 줄고 학습도 줄어야 한다. 본 논문은 정반대(**학습 촉진**)를 보고하고, 이를 "기대값 전달 차단 → RPE 과대 유지"로 설명한다. 두 모델은 **DA 변화의 부호를 반대로 예측**한다. 원문은 이 긴장을 "LH^GABA→VTA는 학습용 예측 전달이지 행동 구동이 아니다"(Nieh 2015에서 LH GABA 투사 선택 자극이 진행 중 행동을 못 바꿨다는 사실)로 봉합하지만, **도파민을 측정하지 않았으므로 미해결**이다. ⚠️ 이 쟁점 절의 정리는 후속 synthesis 단계 담당.
- **[[grove-2022-dopamine-subsystems-track-internal|Grove 2022]] "LH GABAergic → VTA DA가 systemic 수분 균형을 추적하는 water reward source"** — 같은 해부 경로에 **다른 내용**을 싣는다(내부 상태 = primary reward vs cue 기대값 = teaching signal 조절). 상호 배타적이지 않지만, **하나의 LH^GABA→VTA 채널이 두 신호를 어떻게 다중화하는가**는 열린 문제다. Grove는 음수(water), 본 논문은 음식(sucrose) 맥락이라는 점도 병기.
- **[[hoang-2026-methamphetamine-potentiates-the-use-of|Hoang 2026]](같은 Sharpe lab, 역방향 VTA^DA→LH)의 disconnection 결과와의 관계** — Hoang은 **LH^GABA ↔ VTA 차단 시 specific PIT가 정상**이고 **LH ↔ VTA^DA 차단에서만 소실**된다고 보고했다. 즉 VTA 도파민 입력을 받는 LH 표적은 **LH^GABA가 아닌 다른 집단**이다. 본 논문의 LH^GABA→VTA(정방향)와 Hoang의 VTA^DA→LH(역방향)는 **같은 두 핵을 잇는 평행·분리된 스트림**으로 보아야 한다 — 하나의 양방향 루프로 서술하지 말 것.
- **[[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026]](SNU 김성연 lab) "LH^Vgat cue 반응 ensemble = 혐오 열자극에도 반응하는 valence 무관 salience"** — 본 논문의 CS+·CS− **동시** 감소는 이 그림과 정합적으로 읽힐 수 있다(비변별 기대/salience 신호의 차단). 그러나 본 논문은 **혐오 자극을 전혀 쓰지 않았고**(rat, 자유행동, 광억제) Lee 2026은 **인과 조작이 없다**(마우스, head-fixed, 2-photon). **수렴 가설일 뿐 검증은 미실시**.
- **[[jennings-2015-visualizing-hypothalamic-network-dynamics|Jennings 2015]]의 "appetitive vs consummatory 세포 분업"과의 해석 차** — 본 논문은 Jennings의 "경험에 따라 증가하는 음식 위치 LH^GABA 활동"을 **appetitive 반응 부호화가 아니라 연합 정보 획득**으로 재해석한다. 같은 데이터에 대한 **상위 해석의 경쟁**이며, 어느 쪽도 상대를 배제하지 않는다.
- **[[dong-2026-reward-prediction-is-encoded-by|Dong 2026]](rat orexin 뉴런이 reward prediction 부호화)와의 분리** — 본 논문의 LH GABA 집단은 **ORX <1%, MCH 1.2%**로 orexin과 거의 겹치지 않는다. 따라서 LH 안에 **서로 다른 세포형이 각자의 "보상 예측" 신호**를 갖는 셈이다. 두 신호가 같은 것을 중복 표상하는지, 서로 다른 양(기대값 vs 노력 요구)인지는 미검증.
- **연도 주의** — 위키의 [[gershman-2024-explaining-dopamine-prediction-errors-beyond|Gershman 2024]]가 sensory preconditioning 맥락에서 인용한 "Sharpe 2017"은 **본 논문이 아니라** 같은 해 Nature Neuroscience의 도파민 transient 논문이다. **Sharpe 2017이 두 편**임에 주의(위키에는 그쪽 원전 페이지가 아직 없다 — 자료 없음).

## 관련 페이지
- [[person-sharpe-melissa]] — "cognitive lateral hypothalamus" 가설의 **원전 실험**. 인물 hub.
- [[concept-lateral-hypothalamus]] — 개념 hub. "LH GABAergic 광유전 억제는 cue 학습 자체 차단(Sharpe 2017)" 한 줄의 근거.
- [[siemian-2021-lateral-hypothalamic-lepr-neurons]] — 마우스 LH^Vgat/LH^LepR 재검. ⚠️ 체세포 지속성·말단 방향 모두 부분 불일치.
- [[hoang-2026-methamphetamine-potentiates-the-use-of]] — 같은 lab, 역방향 VTA^DA→LH. 본 논문의 정방향과 **평행 스트림**.
- [[grove-2022-dopamine-subsystems-track-internal]] — 같은 LH^GABA→VTA에 다른 내용(수분 균형 = state-driven primary reward).
- [[gordon-2026-lateral-hypothalamic-control-of-the]] — LH^GABA/Glut 균형이 선조체 DA 지형을 설정. 본 논문의 "LH→VTA = 학습 조절"과 **DA 하류 효과의 층위**가 다름.
- [[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles]] — LH^Vgat cue 세포 = valence 무관 salience. CS+/CS− 동시 감소와 수렴 가능.
- [[jennings-2015-visualizing-hypothalamic-network-dynamics]] — 본 논문이 재해석하는 통념의 원전(LH^GABA 활동의 경험 의존 증가).
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] · [[kim-2024-normative-framework-dissociates-need]] — 사용자 lab LH^LepR. 본 논문 과제 3종 세트의 이식 대상.
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — 사용자 lab LH 리뷰. "LH GABAergic도 cue-food 연합 학습 필수"의 출처.
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] · [[concept-need-motivation-pleasure-utility]] — LH^GABA→VTA를 Utility→Motivation 되먹임 후보로.
- [[concept-dopamine-reward-system]] — RPE 틀에서 "예측 입력을 끊으면 오차가 커진다"는 핵심 논리.
- [[dong-2026-reward-prediction-is-encoded-by]] — LH orexin의 reward prediction. 본 논문 GABA 집단과 **분자적으로 분리**(ORX <1%).
- [[concept-appetitive-consummatory-phases]] — cue(appetitive) 구간만 끊고 consummatory는 보존한 설계의 모범.
- [[concept-orexin-neurons]] — LH GABA ≠ orexin/MCH라는 계통 검증 근거.
- [[sharpe-2024-the-cognitive-lateral-hypothalamus]] — 같은 저자의 이론 종합(Trends Cogn Sci 2024). 본 논문의 실험 1·2를 "LH는 보상 기억을 부호화한다" 절과 Box 1(extinction test로 학습/수행 분리)의 핵심 근거로 쓰고, Sharpe 2021의 중립·원위 cue 학습 ↑ 결과와 묶어 **근접 예측자 편향 dial** 이론으로 확장한다. ⚠️ Box 3은 LH→VTA 순 효과를 'DA 발화 증가'로 서술하며 본 논문을 함께 인용한다. 그러나 본 논문 실험 3(말단 억제 → 학습 촉진)의 'RPE 과대' 해석과는 DA 효과 부호가 맞지 않고, Opinion은 이를 조정하지 않는다(병기).
- [[nieh-2016-inhibitory-input-from-the]] — ⚠️ 같은 LH^GABA→VTA를 "disinhibition→DA↑→행동 구동"으로 보는 Tye lab 원전(Neuron 2016). 본 논문의 "학습률 조절(teaching signal)·VTA 말단 억제→학습 촉진"과 DA 변화 부호를 반대로 예측(병기).
- [[hoang-2021-the-basolateral-amygdala-and]] — 같은 lab 리뷰(Curr Opin Behav Sci 2021)가 본 논문을 원문 [26]으로 요약하고, BLA→LH→VTA 학습 편향 회로의 **마지막 단계**(LH^GABA→VTA 기대값 relay → 예상 보상에서 PE 억제)의 근거로 쓴다. ⚠️ 그 리뷰는 cFos 시간차를 들어 'LH는 수반성 자체를 배우지 않고 관련성을 평가한다'는 해석도 제시한다. 본 논문의 'LH^GABA가 보상 예측을 부호화·저장한다'는 결론과 서술이 어긋난다(병기).
- [[sharpe-2021-past-experience-shapes-the]] — 같은 lab·같은 GAD-Cre rat·같은 cue 한정 광억제 프로토콜을 쓴 **후속 짝 논문**(Nat Neurosci 2021). 본 논문이 보인 "cue–음식 학습 차단"과 **부호가 반대**인 결과를 같은 조작에서 얻었다: 중립 cue끼리(sensory preconditioning)·보상 원위 cue(second-order) 학습은 **촉진**되고 latent inhibition은 **소실**된다. 또 **naive rat의 공포 학습에는 영향이 없다가(n=4/4) cue–보상 수반성 경험 후에는 공포 학습이 무너진다**(맥락 분리 2×2, tone×context×virus×condition F(1,20)=3.913, P=0.031). ⚠️ 두 논문을 하나의 계산으로 묶는 모델은 아직 없다 — 그쪽 TD(λ) 모델은 공포 데이터만 다루고 촉진은 서술적 설명에 머문다(병기).

