---
title: "스트레스 민감화를 gate하는 편도체→전시상하부핵(AHN) 회로 (Pennington 2026)"
type: paper
created: 2026-10-25
updated: 2026-10-25
source: "raw/2026 Nature. An amygdala to anterior hypothalamic circuit gates stress sensitivity.pdf"
authors: [Zachary T. Pennington, Alexa R. LaBanca, Afra N. Mahmud, Shereen D. Abdel-Raheim, Madeline E. Bacon, Patlapa Sompolpong, BumJin Ko, Austin M. Baggetta, Yosif Zaki, Yu Feng, Zhe Dong, Alexander C. W. Smith, Tristan Shuman, Paul J. Kenny, Denise J. Cai]
year: 2026
journal: "Nature (2026) · open access(CC BY 4.0) · 접수 2025-03-17 / 게재확정 2026-08-24 / 온라인 게재일은 PDF에 'xx xx xxxx'로 미표기"
doi: 10.1038/s41586-026-11075-5
affiliation: "Nash Family Department of Neuroscience, Icahn School of Medicine at Mount Sinai(전원) · Kenny는 같은 기관 Department of Pharmacology 겸임 · Smith는 Medical University of South Carolina 겸임. 교신 Zachary T. Pennington · Denise J. Cai"
aliases: [AHN stress sensitization, Pennington 2026, amygdala-AHN circuit, BLA-AHN]
---

> [!takeaway] 연구 방향 관점의 핵심
> **과거 스트레스가 "다음 스트레스에 더 크게 반응하는 뇌"를 만드는 자리로 전시상하부핵(anterior hypothalamic nucleus, AHN)을 지목**했다. 뇌 전역 c-Fos(편향 없는 탐색)에서 Miniscope를 거쳐 광유전·화학유전 인과 검증으로 이어지는 설계다. 기전의 핵심은 개별 뉴런이 더 세게 반응하는 것이 아니라 **스트레스에 반응하는 AHN^GAD 앙상블이 커지는 것**(Stressor2 반응 뉴런 24.2%→36.1%)이다. 이 뉴런들은 음성 valence에 비례해 반응하고(충격 강도↑에 흥분, sucrose·물에 억제), 편도체(주로 [[concept-basolateral-amygdala|BLA]]) 입력을 끄면 민감화된 freezing이 줄어든다.
> 사용자 lab 관점: 섭식 시상하부와 맞닿은 핵이 **경험 이력에 따라 음성 valence의 gain을 바꾼다**는 회로 모델이다. 또한 "앙상블 크기 vs 뉴런당 이득"을 가르는 Miniscope 분석과 **valence vs salience 판별 과제**(액체 3종 + 강도별 충격)는 스트레스-섭식 연구에 바로 옮길 수 있는 템플릿이다. 단, 섭식은 전혀 시험하지 않았다.

# 스트레스 민감화를 gate하는 편도체→전시상하부핵(AHN) 회로

## 한 줄 요약
강한 족부충격(Stressor1)을 겪은 마우스는 10일 뒤 약한 청각 스트레스(Stressor2)에 더 오래 얼어붙는다. 뇌 전역 c-Fos 지도에서는 이 민감화된 반응과 함께 **AHN 과활성**과 위협 관련 망과의 상관 증가가 나타났다. AHN의 GABA성 뉴런(AHN^GAD)은 **음성 valence에 비례**해 반응하고, 과거 스트레스는 **반응 뉴런의 비율**을 늘린다. AHN^GAD 억제는 민감화의 **유도와 발현** 모두를 줄이고, 활성화는 청각 스트레스에 대한 freezing만 키운다. AHN으로 투사하는 BLA 뉴런도 혐오 자극 강도에 비례해 반응하며, **편도체→AHN 말단 억제**는 민감화된 freezing을 줄인다 (Nature 2026, Cai lab, Mount Sinai).

## 핵심 내용

### 배경
- 과거 역경은 이후 스트레스에 대한 민감도를 높인다. 인간에서는 이전 외상 경험이 PTSD·우울 위험을 높이고, PTSD의 핵심 증상인 과각성(hypervigilance)은 사소한 스트레서에 대한 과반응을 포함한다. 이 **stress sensitization**은 여러 종에서 관찰되지만 신경계에 어떻게 새겨지는지는 불분명하다.
- 기존 연구는 편도체·전전두피질·해마·중뇌 도파민계에 집중했다. 편도체의 스트레스 유발 가소성과 글루타메이트 수용체 증가가 장기 민감화 확립에 필수라는 것(저자 전작 ref 11 포함)은 알려졌지만, 편도체가 **더 넓은 뇌 활동을 어떻게 조율**하는지는 모른다. 그래서 편향 없는 탐색 접근을 택했다.
- AHN은 체온조절·심혈관 조절·수면·공격·방어행동에 관여한다고 알려져 왔으나, 지속적인 스트레스 유발 행동 변화에 대한 기여는 거의 연구되지 않았다.

### 패러다임과 동물
- **Stressor1**: 5분 기저 뒤 **1 s·1 mA scrambled footshock 10회**(간격 30 s). 밝은 조명·grid floor·5% Simple Green 맥락. NS군은 같은 맥락에 두되 충격 없음. iDISCO 실험에서는 같은 10회를 60분 세션에 의사무작위로 배치했다.
- **Stressor2**: 전혀 다른 맥락(어두운 방·평판 바닥·곡면 벽·1% 초산)에서 3분 기저 뒤 **3 s, 125–130 dB white noise 1회**, 10초 뒤 꺼냄(eOPN3 실험은 180 s). iDISCO 실험은 운반 유발 c-Fos를 피하려고 홈케이지에서 제시했다.
- 측정은 주로 **freezing**(0.5 s 이상 정지; Video Freeze 또는 ezTrack). 불안 관련 행동은 light-dark test로 따로 쟀다.
- 동물: C57BL/6J 배경, 시험 시작 시 약 2–6개월, 명기(light phase)에 시험. **GAD2-IRES-Cre 실험은 암수 거의 동수**, C57BL/6J 실험(뇌 전역 c-Fos·pan-neuronal 억제·말단 억제)은 **수컷만**. 성차가 보이지 않아 최종 분석에서 성별 변수를 뺐다. 데이터·코드는 GitHub(ZachPenn/2026_Nature)·Zenodo 공개.

### 결과 1 — 뇌 전역 c-Fos: AHN 과활성과 위협망 결합 증가 (상관)
- 설계: Ctrl(Stressor2 없음, n=8) · NS(n=10) · S(n=10). Stressor2 60분 뒤 관류 → iDISCO+ 투명화·light-sheet → Allen Atlas 정렬(ClearMap2). 452개 영역 중 군 간 변이가 있는 **90개 영역**(BH-FDR)을 먼저 추린 뒤 S vs NS를 대비했다.
- 행동: S군은 Stressor1 동안(F1,18=113.5, P<0.001)과 **Stressor2 후 3분**(F1,18=4.8, P=0.04) 모두 freezing이 높았다.
- S군의 지도 = **광범위한 피질 저활성**(특히 표층 전전두·체성운동 피질층) + **AHN과 pontine central grey(PCG; 청각 놀람반응에 중요한 영역) 과활성**.
- 상관망: S군에서 AHN과 다른 영역(특히 편도·해마·mPFC) 사이 **유의한 양의 상관 수가 증가**했다(Fisher P<0.001; FDR 보정에서도 P<0.01). NS vs Ctrl은 차이 없음(P=0.16).
- 위계 군집에서 AHN은 **Cluster 1**에 속한다 — BLAa·BLAp·BMA·CEA·COAp·MEA, CA1·CA3·SUB, PAG, [[concept-lateral-hypothalamus|LHA]], SNr·SNc를 포함하는 스트레스 관련 망. Cluster 1 내부 양의 상관 수는 S > NS(Fisher P<0.001)였고, 뇌 전체 상관 행렬에서는 오히려 NS군이 S군보다 양의 상관이 많아(ED 2c) **증가가 Cluster 1에 특이적**이었다.
- ⚠️ 저자도 이 결과가 AHN의 인과적 기여를 다루지 않는다고 명시한다. AHN c-Fos 수와 Stressor2 freezing의 관계는 **경향 수준**이었다(t18=1.9, p=0.076).

### 결과 2 — Miniscope: AHN^GAD는 음성 valence에 비례, 과거 스트레스는 "반응 뉴런 수"를 늘린다
- GABA성 뉴런을 고른 이유: AHN 뉴런의 약 85%(인용 근거)이고 다수가 하류로 투사한다. GAD2-IRES-Cre + Cre 의존 GCaMP6f, GRIN lens(0.6 mm), UCLA Miniscope v4.4, Minian(CNMF). 반응성 판정은 자극 후 5 s와 전 5 s의 차이를 원형 셔플 1,000회 귀무분포의 95 백분위와 비교했다.
- **Stressor2(Stressor1 10–14일 뒤, 소리 5회)**: 반응 뉴런 비율 **NS 24.2%(47/194) vs S 36.1%(86/238)**(Fisher P<0.01). 전체 뉴런 평균 반응도 S군이 높았다(Group×Time F24,10320=3.7, P=0.02). 그러나 **반응 뉴런만 보면 반응 크기는 같았다**(Group F1,131=0.3, P=0.57). 저자 해석: 민감화는 **더 큰 앙상블의 동원**이지 뉴런당 반응 증폭이 아니다.
- **강도 부호화**(소리 100·130 dB, 충격 0.25·1 mA, 각 2 s; 295 뉴런): 약 50%가 충격 및/또는 소리에 반응했다. 소리 반응 뉴런의 70%가 충격에도 반응했다(원문 표기 "8% of all neurons"). 소리 반응(n=36; F1,35=15.7, P<0.001)과 충격 반응(n=123; F1,122=46.6, P<0.001) 뉴런 모두 **강도에 비례**했고, PCA의 PC1(분산 26%)이 강도를 반영했다(충격>소리, 강>약). S군의 반응 뉴런 비율이 더 높았으나(Fisher p<0.001) 반응 뉴런 안의 강도 비례는 군 간 차이가 없었다(ED 3).
- **valence vs salience 판별**: 물 제한 마우스가 세 포트에서 **20% sucrose·물·0.5 mM quinine**(5 µl)을 핥은 뒤 충격(0.25·1 mA 각 6회)을 받는 과제(254 뉴런). 핥기는 sucrose>물>quinine 순이었다(Port F2,22=12.8, P=0.001). 충격에는 약 절반이 반응했으나 액체에 반응한 뉴런은 매우 적었다. 충격 반응 뉴런(n=126)은 **sucrose(t125=−3.8, P<0.001)와 물(t125=−5.1, P<0.001)에 기저 이하로 억제**되고 quinine에는 변화가 없었으며(P=0.21), 충격에는 강도 의존적으로 흥분했다. 저자 결론은 **salience가 아니라 valence이며 음성 쪽으로 치우친다**는 것이다. 액체 보상에 의한 억제는 독립 3개 코호트에서 재현됐다(reporting summary).
- ⚠️ 원문이 스스로 단 단서: quinine에 흥분하지 않았지만, 마우스가 마시기를 멈추지 않도록 **아주 약한 농도**를 썼다. sucrose와 물의 차이도 유의하지 않았는데(F=0, P=0.89), 기저 칼슘 transient가 드물어 감소 폭을 관찰할 여지가 작았을 가능성을 저자가 든다.

### 결과 3 — 인과: AHN^GAD는 민감화의 유도와 발현에 필요하고, 활성화는 스트레스 반응만 키운다
- **유도(Stressor1 동안 억제)**: GAD2-IRES-Cre에 stGtACR1(473 nm, 20 Hz, 20 ms, 5 mW), mCherry n=13·GtACR n=14. 충격 중 freezing↓(F1,25=17.1, P<0.001), 이틀 뒤 빛 없는 **Stressor1 recall↓**(F1,25=24.9, P<0.001), 이후 **Stressor2 recall↓**(F1,25=8, P<0.01). ⚠️ **Stressor2 직후 freezing은 차이 없음**(F1,25=0.6, P=0.44). 본문은 "Stressor2와 Stressor2 recall 반응을 줄였다"고 쓰지만 그림 범례는 Stressor2 직후 효과가 없다고 적는다(원문 내부 불일치).
- **pan-neuronal 억제**(C57BL/6J, hSyn-Cre + SIO-stGtACR1; mCherry 11·GtACR 14): Stressor1(F1,23=30.7)·Stressor1 recall(F1,23=20.2)·Stressor2 후 freezing(F1,23=7.8, p=0.01)·Stressor2 recall(F1,23=4.5, p=0.04)이 모두 줄었다.
- **발현(재노출 때 억제)**: mCherry n=13·GtACR n=12. Stressor1에서는 차이 없음. Stressor1 recall에서 2분 간격으로 빛을 껐다 켜면 **켤 때만 freezing↓**(on: F1,23=30.8, P<0.001; off: P=0.72)이고 끄면 곧바로 돌아왔다. Stressor2 중 억제도 freezing을 줄였고(F1,23=12.4, P<0.01), 다음 날 빛 없는 Stressor2 recall도 줄었다(F1,23=23.2, P<0.001). 저자 결론: AHN은 장기 스트레스 유발 방어행동의 **유도와 발현 모두에 필요**.
- **충분성(화학유전 활성)**: HM3Dq n=9·mCherry n=12, CNO 3 mg/kg i.p.(30–45분 전) 후 청각 스트레스 → **스트레스 후 freezing↑**(F1,19=7.8, P=0.01). 스트레스 전 freezing은 저자가 "효과 없음"으로 쓰지만 수치는 **경계값**이다(F1,19=4.2, P=0.054). 그림 3n 도식에는 Stressor1 단계가 없다.
- **불안 관련 행동은 불변**: 활성화(light-dark, Virus F1,19=2.7, p=0.12)도, 비스트레스 마우스의 억제(F1,25=0, p=0.91)도 light-dark test를 바꾸지 않았다. 저자 해석: AHN^GAD는 스스로 스트레스 반응을 만들기보다 **외부 스트레서에 대한 반응을 조절**한다.

### 결과 4 — 편도체→AHN: 혐오 자극 강도를 나르고, 끄면 민감화된 freezing이 준다
- **어느 편도체인가**: 기록 대상은 **BLA**의 AHN 투사 뉴런(BLA^AHN; AHN에 AAVrg-Cre, BLA에 DIO-GCaMP6f)이다. 이 집단은 드물고 측뇌실 근처에 몰려 있어 조직 움직임을 줄이려고 **head-fixed**로 기록했다(n=40 뉴런). 말단 억제용 eOPN3는 "amygdala"에 주입했고 **주로 BLA를 겨냥했으나 BMA·MEA·CEA로 번졌다**. 그래서 조작 결과는 "amygdala→AHN"으로 써야 정확하다.
- **BLA^AHN 기록**(소리 100·130 dB, 충격 0.25·**0.5** mA, 꼬리·앞발 전극): 대부분이 혐오 자극에 강하게 반응했다. 소리 반응(n=13; F1,12=7.6, P=0.02)과 충격 반응(n=20; F1,19=13.1, P<0.01) 모두 강도에 비례했고, PC1(25%)이 강도를 반영했다. ⚠️ BLA에 양성·음성 valence 집단이 따로 있다는 선행연구 때문에 **음성 자극만 시험**했다. 따라서 BLA^AHN이 valence인지 salience인지는 이 데이터로 갈리지 않으며, 저자도 "probably valence, based upon past findings"라고 쓴다.
- **말단 광억제(인과)**: AAV5-CaMKII-eOPN3(축삭 표적 억제성 대사형 수용체), 광섬유는 AHN 위(0.1 Hz, 500 ms, 10 mW). 모든 마우스가 Stressor1·recall을 거친 뒤 Stressor2 때 절반만 빛을 받았다(L n=11, NL n=13). Stressor1·recall에서는 군 차이 없음. **Stressor2 후 freezing↓**(post: F1,22=6.2, P=0.02; Group×Time F1,22=9.7, P<0.01; pre: P=0.66). Stressor1 recall 후반 5분 억제도 freezing을 줄였다(F1,22=6, p=0.02). 스트레스와 짝지어지지 않은 환경의 이동량은 그대로였고(본문은 "familiar", ED 5 범례는 "novel environment"로 표기), eOPN3 없이 빛만 준 EGFP 대조(10·10)는 효과가 없었다.
- **투사 특이성(화학유전)**: AHN에 rgAAV-Cre + BLA 또는 vHC에 DIO-hM4Di(mCherry 14·BLA 9·vHC 11). Stressor2 중 억제 → 다음 날 **Stressor2 recall freezing은 BLA 군만 감소**(F1,21=6.9, p=0.02; vHC F1,23=0.7, p=0.42). vHC 입력 억제는 light-dark의 어두운 쪽 체류를 줄였으나, omnibus 상호작용이 유의하지 않은 상태의 사후검정이다(F1,10=5.6, p=0.04; omnibus p=0.08). ⚠️ 이 화학유전 실험에서는 **Stressor2 당일 freezing(ED 6f)과 Stressor1 recall(ED 6e)에 효과가 없었다** — 광유전 말단 억제와 결과가 완전히 일치하지는 않는다.
- **저자 모델(Fig. 5)**: 스트레스-naive 상태에서도 편도체가 음성 valence 신호를 AHN으로 보내고, AHN이 이를 조절해 방어 출력을 낸다. 과거 스트레스 뒤에는 **더 많은 valence-민감 AHN 뉴런이 동원**되어 방어 출력이 커진다.

### Discussion의 맥락 (저자 주장)
- AHN은 [[concept-ventromedial-hypothalamus|VMH]]·dorsal premammillary nucleus와 함께 **내측 시상하부 방어 회로**의 일부로 제안돼 왔다. 하위 집단 연구로는 PV 글루타메이트성 뉴런(도피)과 GABA성 AHN→PAG(통증성·기계 자극 유발 공격)가 있다(인용문헌 33·37의 제목과 본문 기준). 저자는 본 연구가 이를 즉각 위협에 대한 선천 반응이 아니라 **과거 역경이 미래 스트레스 민감도를 재설정하는 축**으로 넓혔다고 주장한다.
- 치료 표적 후보로 AHN의 신경펩타이드 — **PACAP(PTSD 연관), TRH, galanin, tachykinin2(Tac2)** — 를 든다. 개별 펩타이드 세포의 역할은 미검증이다.
- 출력: AHN은 [[concept-paraventricular-nucleus|PVN]]으로 직접 투사해 스트레스 호르몬 방출을 조절할 수 있고, [[concept-lateral-septum|외측중격]]·PAG·편도체로도 단시냅스 투사한다(인용 근거). 이 출력들은 본 논문에서 조작하지 않았다.

### 한계 (원문 기반 정리)
- 행동 판독은 **freezing**(+light-dark) 하나다. 섭식·사회행동·자율신경·HPA 지표는 재지 않았다.
- c-Fos 망은 개체 간 상관(군당 n=10; 그림의 AHN 상관은 비보정 P<0.05 기준)이며 인과가 아니다.
- AHN^GAD 전체를 조작했다. PV·펩타이드 하위 집단, AHN 안에서 BLA 입력을 받는 세포의 정체, AHN의 하류 출력은 미해결이다.
- HM3Dq 발현이 때때로 전방 MPO·후방 [[concept-dorsomedial-hypothalamus|DMH]]·배측 시상으로 번졌다(ED 4n).
- 말단 억제 실험에는 NS군이 없어 "민감화된 반응에 특이적"인지가 직접 대조되지 않았다. 초록의 "abolished"는 실제 결과(감소)보다 강한 표현이다.
- 영상 실험의 동물 수는 본문에 없고 Supplementary Table 3에만 있다(본문은 뉴런 수만 보고). 실험자는 바이러스 조건에는 blind였으나 스트레스군·레이저 조건에는 blind가 불가능했다(분석은 자동화·blind).

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **NMPU의 음성 valence 축**: [[concept-need-motivation-pleasure-utility|NMPU]]가 주로 양성 쪽(Need·Pleasure)을 다뤄 왔다면, AHN^GAD는 "보상에는 억제, 혐오에는 강도 비례 흥분"하는 음성 valence 노드이고 그 gain이 경험으로 바뀐다. 스트레스 이력이 섭식 회로의 비용(cost) 쪽 가중치를 바꾸는 경로 후보다 — 단 본 논문은 섭식을 시험하지 않았다.
- **스트레스-섭식 설계**: [[concept-emotional-eating|정서적 섭식]] 연구에 "강한 스트레스 → 일정 기간 뒤 약한 스트레스"의 two-stressor 설계를 쓰고, Miniscope 분석에서 **반응 뉴런 비율(앙상블 크기)과 반응 뉴런 내 이득을 분리**하는 본 논문의 분해법을 적용할 수 있다.
- **valence vs salience 판별 과제의 이식**: sucrose·물·quinine과 강도별 충격을 한 세션에 넣어 "보상에 억제되면 valence, 흥분되면 salience"로 가르는 설계는 LH·PVN 등 사용자 관심 핵의 cell-type Miniscope 기록에 바로 쓸 수 있다.
- **two-hit의 성체판**: [[concept-early-life-adversity]]·[[kim-2026-early-life-stress-alters-h3k4me1|Kim 2026]]·[[shin-2023-early-adversity-promotes-binge-like-eating|Shin 2023]]의 "기저 정상 → 2차 hit에서 발현" 구조가 **성체의 두 스트레스 사이(10일)**에서도 성립하며, 저장 단위가 **앙상블 동원 크기**로 관찰된다. 크로마틴(Kim)·시냅스([[linders-2022-stress-driven-potentiation-of-lateral|Linders 2022]])·앙상블(본 논문)은 경쟁이 아니라 층위가 다른 저장으로 읽는 것이 안전하다.
- **인접 시상하부 조작의 실무 경고**: AHN은 PVN·[[concept-medial-preoptic-area|MPO]]·DMH와 맞닿아 있다. 섭식 시상하부 조작에서 바이러스가 AHN까지 번지면 스트레스 반응성 변화가 섭식 효과로 오인될 수 있다.

## ⚠️ 위키 내 충돌·긴장
- **BLA 신호의 성격**: [[chen-2026-striatal-control-of-amygdalar|Chen 2026]]은 BLA의 **ACh가 valence-free 현저성(salience)**을 표상한다고 본다. 본 논문은 BLA^AHN에 음성 자극만 줬으므로, "편도체가 AHN에 음성 valence를 보낸다"는 Fig. 5 모델은 BLA^AHN 수준에서는 **추정**이다. 측정 대상(ACh 방출 vs 투사 뉴런 칼슘)이 달라 직접 모순은 아니다.
- **BLA 전후축**: [[concept-basolateral-amygdala]]는 Grove 2025를 근거로 aBLA=영양 학습, pBLA=혐오 학습으로 나눈다. 본 논문의 BLA 좌표는 AP −1.6(영상)·−1.4(조작)이고 BLA^AHN의 전후 구획을 따로 분류하지 않아, 이 분업과의 대응은 **판단 불가**다.
- **스트레스 대처 양식**: [[azevedo-2020-a-limbic-circuit-selectively-links|Azevedo 2020]]은 스트레스-섭식 회로가 능동 도피와 부동에서 갈린다고 보였다. 본 논문의 민감화 지표는 **freezing뿐**이라, 능동 대처 쪽 민감화에 AHN이 관여하는지는 알 수 없다.

## 관련 페이지
- [[concept-basolateral-amygdala]] — AHN 상류. BLA^AHN 투사 뉴런은 혐오 자극 강도에 비례 반응하고, 편도체(주로 BLA, BMA·MEA·CEA로 번짐)→AHN 말단 억제가 민감화된 freezing을 줄인다.
- [[concept-paraventricular-nucleus]] — AHN→PVN 직접 투사를 통한 스트레스 호르몬 조절 가능성(저자 discussion, 미검증).
- [[concept-ventromedial-hypothalamus]] — AHN과 함께 내측 시상하부 방어 회로로 묶이는 핵. Stressor2는 Ctrl 대비 VMH c-Fos도 높였다(ED 1g).
- [[concept-lateral-septum]] · [[bhatti-mazo-2026-feature-specific-threat-coding-in]] — 저자가 꼽은 AHN의 단시냅스 출력처이자, Bhatti Mazo에서 LS^Crhr2의 시상하부 입력원으로 함께 기록된 핵. 위협 처리 망의 접점.
- [[concept-lateral-hypothalamus]] — Cluster 1 구성원(LHA). Stressor2가 Ctrl 대비 LHA c-Fos를 높였다.
- [[concept-medial-preoptic-area]] · [[concept-dorsomedial-hypothalamus]] — AHN 인접 핵이자 HM3Dq 번짐 범위(MPO 전방·DMH 후방).
- [[concept-early-life-adversity]] · [[concept-epigenetic-priming]] — two-hit 민감화 구조. 본 논문은 성체 두 스트레스판이고 저장 단위는 앙상블 크기다.
- [[kim-2026-early-life-stress-alters-h3k4me1]] — 같은 stress sensitivity priming의 크로마틴(VTA SETD7/H3K4me1) 버전.
- [[linders-2022-stress-driven-potentiation-of-lateral]] — 성체 급성 스트레스가 LH→VTA 시냅스에 저장되는 사례. 시냅스 vs 앙상블 저장의 층위 비교.
- [[sharpe-2021-past-experience-shapes-the]] — 과거 경험이 시상하부(LH^GABA)의 공포 학습 관여 여부를 바꾼다는 선례. "경험 의존적 시상하부 모집"이라는 같은 주제.
- [[chen-2026-striatal-control-of-amygdalar]] — valence vs salience 구분 논리 대비(BLA ACh=salience).
- [[concept-emotional-eating]] — 스트레스 이력이 섭식을 바꾸는지 검증할 다음 질문의 hub(본 논문은 섭식 미시험).
- [[azevedo-2020-a-limbic-circuit-selectively-links]] — 스트레스 대처 양식(능동 도피 vs 부동) 층화의 필요성.
- [[concept-negative-reinforcement-hyperkatifeia]] — "음성 valence 처리의 팽창"이라는 본 논문의 민감화 해석과 hyperkatifeia(부정 정서 상태 증폭) 프레임의 개념적 접점(연결 가설).
