---
title: "Depression of accumbal to lateral hypothalamic synapses gates overeating (Thoeni & Lüscher 2020, Neuron)"
type: paper
created: 2026-10-03
updated: 2026-10-03
source: "raw/2020 Neuron. Depression of Accumbal to Lateral Hypothalamic Synapses Gates Overeating.pdf"
authors: [Sarah Thoeni, Michaël Loureiro, Eoin C. O'Connor, Christian Lüscher]
year: 2020
journal: "Neuron 107:1–15.e1–e4 (2020-07-08; in-press 페이지 표기); doi:10.1016/j.neuron.2020.03.029"
---

> [!takeaway] 연구 방향 관점의 핵심
> **[[oconnor-2015-accumbal-d1r-neurons-projecting|O'Connor 2015]]의 "섭식 허가 게이트"에 시간축을 붙인 후속.** 같은 Lüscher lab(제네바)이 묻는다 — 그 게이트는 순간순간만 열리고 닫히는가, 아니면 **며칠 단위로 세팅이 바뀌는가**. 답은 후자다. ① 자유급식 naive 마우스에서 NAcSh D1-MSN→LH 억제성 시냅스는 forskolin(FSK)으로 **i-LTP가 유도되지 않는다**(같은 동물의 D1-MSN→VP 시냅스는 유도됨). ② 그런데 **하룻밤 급성 식이제한(AFR)** 또는 **3일 고지방식(HFD)** 뒤에는 FSK가 **robust한 i-LTP를 드러낸다** — 즉 과식이 유리한 상태에서 이 시냅스는 **이미 depress되어 있었다**(i-LTD로 occlusion 해제). 체중이 회복된 AFR 1주 후에는 사라진다. ③ 유도 기전은 **endocannabinoid–CB1R**: CB1R 작용제 WIN55,212-2가 ad libitum 슬라이스에서 i-LTD를 만들고, 길항제 SR141716A는 AFR 슬라이스에서 i-LTP를 드러낸다. ④ 인과: 전신 SR141716A가 AFR 가소성과 **보상 과식을 함께** 막고, HFD 체중 증가·섭취도 줄인다. **LH 국소 주입**으로 충분·필요성 확인. ⑤ 반대 방향 — **in vivo 광유전 HFS로 D1-MSN→LH 시냅스를 potentiate하면 금식 마우스의 섭취가 줄어든다**(자극은 식사 15분 전에만, 식사 중에는 무자극).
> 사용자 연구에 닿는 지점 넷. (1) **[[kim-2024-normative-framework-dissociates-need|NMPU]]의 threshold K에 "가소성 기억"이 생긴다** — O'Connor 2015의 게이트가 *순간* K를 올리는 채널이었다면, 본 논문은 결핍 경험이 **K의 기저값 자체를 며칠 동안 내려놓는** 기전을 제시한다. 다이어트 후 과식을 "의지 문제"가 아니라 **시냅스 상태**로 쓸 수 있는 1차 근거다. (2) [[concept-weight-regain-defended-adiposity|체중 재증가]]의 시냅스 기질이 **두 개**가 된다 — 배고픔 입력 쪽 NMDAR 의존 증폭([[grzelka-2023-a-synaptic-amplifier-of-hunger|Grzelka 2023]] PVH^TRH→AgRP)과 허가 게이트 쪽 **CB1R 의존 depression**(본 논문). 둘 다 "저체중이 유지되는 동안만" 지속된다. (3) [[lee-2023-lateral-hypothalamic-leptin-receptor|LH^LepR]]가 이 i-LTD를 받는지가 사용자 lab이 바로 검증할 수 있는 질문이다(본 논문은 LH^Vgat·LH^VGluT2까지만 내려갔다). (4) 치료 번역의 양면 — CB1R 길항(rimonabant 계열)의 정신과 부작용 때문에 **말초 한정 CB1 길항** 또는 **시냅스 선택적 potentiation**(본 논문은 100 Hz 광유전 HFS로 구현)이 대안이 되며, 후자는 [[concept-drug-evoked-synaptic-plasticity|광유전학에서 착안한 DBS]] 3원칙과 직접 맞물린다.

# Depression of accumbal to lateral hypothalamic synapses gates overeating (Thoeni et al. 2020)

- **저널**: Neuron 107:1–15.e1–e4 (발행 2020-07-08; 접수 2019-04-19, 수정 2020-02-21, 채택 2020-03-25, 온라인 2020-04-24). DOI: 10.1016/j.neuron.2020.03.029. PDF는 in-press 조판이라 권 내 페이지가 "107, 1–15"로 표기된다.
- **소속**: University of Geneva 기초신경과학과 + Geneva University Hospital 임상신경과학과 신경과. 교신 **Christian Lüscher** (christian.luscher@unige.ch) → [[person-luscher-christian]]. 1·2·3저자 동등 기여. E.C. O'Connor의 현 소속(Present address)은 F. Hoffmann-La Roche(Basel).
- **지원**: Swiss National Science Foundation CRSII5_183524, ERC advanced grant *MeSSI*. 원자료 Zenodo 10.5281/zenodo.3712745.
- **모델**: D1^Cre, VGAT^Cre, VGluT2^Cre, Drd1a-tdTomato, Drd1a-tdTomato × VGluT2^Cre, C57BL/6J. **암·수 혼용**(3주 이상, littermate 무작위 배정). 성차 보정은 체중·섭취량을 baseline 정규화로 처리.
- **좌표**: NAcSh AP +1.5 / ML ±0.7 / DV −4.4. LH AP −1.17 / ML ±1.17 / DV −4.9(광섬유는 ML ±1.2, DV −4.6; cannula는 10° 각도 ML ±2.0).
- **방법**: AAV5-EF1A-DIO-ChR2(H134R)-eYFP(ex vivo 광자극) / AAV5-EF1A-DIO-ChETA-EYFP(in vivo HFS) / AAV5-hSyn-ChR2(비floxed) + LH의 DIO-mCherry·tdTomato(세포 식별). 이중 CTB 역추적, **단시냅스 rabies**(AAV5-Flex-TVA-mCherry + AAV8-Flex-RG → SADΔG-EGFP(EnvA)). Whole-cell IPSC(2×4 ms 470 nm, 50 ms 간격; kynurenic acid 2 mM 존재; 34°C). 약물: FSK 10 µM, WIN55,212-2 2 µM, SR141716A 5 µM(슬라이스)·10 mg/kg i.p.(전신)·1.5 µg/side(LH), SKF38393 10 µM.
- **섭식 과제**: **Lipofundin 5% v/v** 지방유탁액을 1 h/일 lickometer 세션으로 섭취. **bout = ILI < 1 s인 연속 3 lick 이상**. 해석 규칙은 Dwyer 2012을 따른다 — **bout 수 = 동기 추동**, **bout당 lick 수 = 기호성(palatability)**.

## 한 줄 요약
NAc shell D1-MSN에서 LH로 가는 억제성 시냅스는 **과식이 유리한 상태(급성 식이제한·3일 고지방식)에서 endocannabinoid–CB1R 의존적으로 depress되어 있고**, 이 depression이 보상 과식·HFD 체중 증가의 게이트를 연다. CB1R을 막으면 가소성과 과식이 함께 사라지고, 반대로 이 시냅스를 in vivo에서 potentiate하면 **배고픈 동물도 덜 먹는다**.

## 핵심 내용

### Figure 1 — "과식이 유리한 상태"에서만 가소성이 드러난다
- **논리 장치**: D1-MSN 말단의 억제성 i-LTP는 **전시냅스 PKA/D1R 의존**(Bocklisch 2013 VTA, Creed 2016 VP)이므로, adenylyl cyclase를 직접 켜는 **FSK**가 i-LTP를 만들 수 있는지는 "그 시냅스가 이미 potentiate되어 있는가(occlusion)"의 리드아웃이 된다.
- **naive 자유급식**: D1-MSN→LH에서 FSK는 i-LTP를 **유도하지 못했다**(ANOVA treatment F(1,34)=6.899, p<0.05; region×treatment F(1,34)=3.781, p=0.06). 같은 준비에서 **D1-MSN→VP는 기록한 모든 세포에서 i-LTP**(unpaired t, t34=2.664, p<0.05). → LH 투사만의 고유 성질.
- **급성 식이제한(AFR, 하룻밤)**: 체중 유의 감소(t10=−4.97, p<0.01). 이 슬라이스에서 **FSK가 robust i-LTP**를 만들었다(t36=2.72, p<0.05). IPSC 진폭의 **변동계수(CV)도 증가**(t35=2.309, p<0.05) → 전시냅스 발현 부위.
- **가역성**: **AFR 1주 후**(체중 회복 시점)에는 FSK-i-LTP가 **사라진다**(Fig S1) → depression은 과식이 유리한 상태에 **한정**된다.
- **3일 고지방식(HFD)**: chow 대비 체중 증가(diet×time F(2,18.9)=10.2, p<0.01; day 3 t14=3.78, p<0.01; HFD 내 day3 vs day1 paired t7=85.7, p<0.01). 이 슬라이스에서도 **FSK-i-LTP**(t40=2.69, p<0.05)와 **CV 증가**(t40=2.063, p<0.05).
- → **서로 다른 두 자극(칼로리 결핍 / 칼로리 과잉·기호성)**이 같은 시냅스에서 같은 방향(i-LTD)의 변화를 만든다.

### Figure 2 — LH 투사 D1-MSN은 VP·VTA 투사와 거의 겹치지 않는다
- Drd1a-tdTomato 마우스에 CTB-488/647을 쌍으로 주입, NAcSh 전후축 4지점 × 2(배·복)=8 영상/마우스를 confocal로 정량.
- **LH vs VP 코호트(n=5, CTB 표지 1,559 세포)**: **중복 표지 3.6% ± 1.0%**뿐. D1-MSN 비율은 **VP 투사 45.6% ± 6.9% vs LH 투사 81.3% ± 4.3%**(paired t, p<0.05) — VP 투사는 D1·D2가 거의 반반(Kupchik 2015·Creed 2016 재현), LH 투사는 D1 우세. ⚠️ LH/VP 투사 세포의 **비율 수치 자체는 본문과 Fig 2D 범례에서 서로 바뀌어 적혀 있다**(본문 "LH 69.2% / VP 34.4%", 범례 "LH 34.4% / VP 69.2%") — 아래 ⚠️절 참조.
- **LH vs VTA 코호트(n=6, 1,127 세포)**: LH 63.6% ± 3.2%, VTA 47.5% ± 3.1%, **중복 11.1% ± 1.2%**. D1-MSN 비율은 **VTA 투사 96.6% ± 2.0% vs LH 투사 76.5% ± 4.3%**(paired t, p<0.05).
- **aLH vs pLH(Fig S3; n=10, 3,219 세포)**: aLH 46.1% ± 8.1%, pLH 67.9% ± 6.7%, 중복 13.9% ± 2.9%. D1 비율 **pLH 89.5% ± 0.7% > aLH 80.9% ± 3.5%**(p<0.05).
- **일반 규칙 제시**: 표적이 NAcSh에서 **더 멀어질수록 D2-MSN 기여가 줄고 D1-MSN이 지배**한다. 추정 D2-MSN의 LH 투사는 **가장 caudal NAcSh**에 몰린다.
- → 같은 세포체 영역에 섞여 있어도 **LH 투사군은 VP·VTA 투사군과 별개 집단**이라는 해부학적 근거. 저자들은 이것을 "왜 LH 투사에서만 i-LTP가 기본적으로 없는가"의 설명 후보로 든다.

### Figure 3 — LH^Vgat와 LH^VGluT2 **양쪽** 시냅스가 함께 depress된다
- **LH^Vgat 표적**(VGAT^Cre의 LH에 DIO-mCherry + NAcSh에 비floxed ChR2): FSK-i-LTP가 **식이제한 동물에서만**(t(21)=2.91, p<0.01). CV는 증가 경향이되 비유의(t21=1.226, p=0.23).
- **LH^VGluT2도 D1-MSN 억제를 받는다**(신규 발견):
  - Drd1a-tdTomato × VGluT2^Cre에서 **LH^VGluT2 starter 단시냅스 rabies** → NAcSh의 EGFP⁺ 입력 세포 **44개 중 43개(97%)가 tdTomato⁺ = D1R-MSN**(n=2 mice).
  - 기능 연결: 기록한 **LH^VGluT2 뉴런의 65%(28/43 cells, n=5 mice)** 가 광유발 IPSC를 받았다.
  - 가소성: 역시 **AFR에서만 FSK-i-LTP**(t(17)=2.725, p<0.05). CV 변화 없음(t17=0.63, p=0.54).
- → 후시냅스 세포 정체(비식별·Vgat⁺·VGluT2⁺)와 **무관하게** 가소성이 나타난다 = **전시냅스 발현**의 추가 증거. 저자들은 LH^Vgat과 LH^VGluT2가 섭식에서 반대 역할을 한다는 통념([[jennings-2013-the-inhibitory-circuit-architecture|Jennings 2013]])에 비춰 "다소 의외"라고 명시하고, Mickelsen 2019의 **LH GABA·glutamate 30여 아집단**을 해소 후보로 든다.

### Figure 4 — 기전은 endocannabinoid–CB1R (슬라이스 약리)
- **CB1R 작용제 WIN55,212-2(2 µM)**: ad libitum 마우스 슬라이스에서 D1-MSN→LH 시냅스에 **robust i-LTD**(ANOVA F(2,24)=10.9, p<0.01; vehicle vs WIN t(24)=4.229, p<0.001; WIN vs SR t(24)=3.918, p<0.01). CV는 불변.
- **CB1R 길항제 SR141716A(5 µM) 단독**: ad libitum 슬라이스에서는 IPSC 진폭 **무변화**(CV도 불변) → (정리자 추론) 자유급식 상태에는 tonic eCB 억제가 없음을 시사.
- **AFR 슬라이스에 SR141716A**: IPSC 진폭과 변동이 **함께 증가**(t(22)=3.050, p<0.01; 1/CV² t21=2.113, p<0.05) → **FSK 없이도 i-LTP가 드러난다**. 즉 식이제한 상태에서는 **tonic CB1R 신호가 이 시냅스를 눌러 두고 있다**.

### Figure 5 — CB1R 차단이 가소성과 과식을 동시에 막는다 (in vivo)
- **전신 투여 프로토콜**: SR141716A 10 mg/kg i.p.를 AFR 시작(≈18:00)과 다음 아침(기록·시험 1 h 전) 2회.
- **가소성 차단**: ad libitum(vehicle/SR) 두 군은 FSK-i-LTP 없음, **AFR+vehicle은 robust i-LTP**, **AFR+SR은 i-LTP 소실**(feeding×treatment F(1,76)=5.09, p<0.05). 체중은 AFR에서 감소(F(1,28)=259.22, p<0.01)하고 SR도 체중을 낮추지만 **두 군에서 동등**(상호작용 비유의) → 체중 효과로는 설명 불가.
- **보상 과식 차단**(2×2 within-subject crossover, 조건 간 1주 회복): AFR+vehicle에서 **총 lick 수 증가**(feeding×treatment F(1,13)=44.63, p<0.01)가 **SR로 유의 감소**. 증가의 실체는 **bout 수**(F(1,13)=8.83, p<0.05)이고 **bout당 lick 수는 불변** → **동기 추동의 증가이지 기호성 변화가 아니다**.
- **LH 국소**(양측 cannula; SR141716A 1.5 µg/side — WIN 용량은 원문 미기재; 무작위 순서·최소 1주 간격):
  - AFR + **intra-LH SR** → lick·bout **감소**.
  - ad libitum + **intra-LH WIN** → lick·bout **증가**.
  - lick F(1,10)=75.61, p<0.001; bout F(1,10)=51.22, p<0.001; **bout당 lick 수는 어느 조건에서도 불변**.
  - → LH 내 CB1R 신호의 **필요성과 충분성**.
- **HFD 과식·체중 증가도 차단**: C57BL/6J에 3일 HFD + SR141716A 10 mg/kg를 12 h마다. 체중(treatment×day F(2,26)=27.728, p<0.01; day 3 t13=−5.797, p<0.01)과 **3일 총 고지방식 섭취량**(t13=−3.90, p<0.01)이 모두 감소.

### Figure 6 — 시냅스를 potentiate하면 배고픈 동물이 덜 먹는다
- D1^Cre NAc에 **ChETA**, LH에 양측 광섬유. **HFS 프로토콜 = 4 ms 펄스 100 Hz × 100 pulse, 20 s 간격으로 4회**(Creed 2016의 억제성 시냅스 potentiation 프로토콜).
- **24 h 식이제한 후, 60분 섭취 세션 15분 전에만 자극**(세션 중에는 자극 없음). 첫 시험은 mock 자극으로 비가역 효과를 배제.
- 결과: **lick 수 감소**(t6=6.534, p<0.001), **bout 수 감소**(t6=3.413, p<0.05). 24 h 제한 후 체중 감소율은 Fig 6C에 제시(조건 간 통계 비교는 원문에 없음).
- **Ex vivo 대조(Fig S4)**: 같은 HFS가 AFR 슬라이스에서는 i-LTP를 **만들지 못하고**, **D1 작용제 SKF38393(10 µM)을 함께 넣어야** 성립 → i-LTP는 **전시냅스 D1 수용체 활성**을 요구하며, in vivo에서는 내인성 도파민이 그 역할을 한다(슬라이스에는 없다)는 해석.

### Discussion — 저자들이 명시한 해석과 유보
- 모델: **결핍(또는 고지방식) → LH 내 eCB 상승 → CB1R 매개 전시냅스 i-LTD → D1-MSN의 LH 억제력 약화 → 음식이 다시 주어질 때 과식 허가**.
- **eCB 세포 출처는 미확정**. 억제성 전달의 직접 결과일 가능성은 낮다고 본다(2-AG·anandamide는 **탈분극 의존 Ca²⁺ 방출**로 나온다). "CB1R이 LH 내 D1R-MSN 말단에 있을 것"은 **추정(tempting to speculate)**으로만 적는다. 전신+국소 약물만 썼으므로 수용체의 정확한 세포 위치는 특정 불가.
- 근거 맥락: 3일 HFD가 시상하부 **2-AG를 올린다**(Higuchi 2011), 단식이 NAc·시상하부 eCB를 올린다(Kirkham 2002), 단식 유발 과식이 **CB1R-KO에서 감소**(Di Marzo 2001, Poncelet 2003).
- **대조 사례**: Crosby 2011(Neuron)은 **DMH**에서 식이결핍이 glucocorticoid 매개로 GABA성 시냅스의 **CB1R을 소실**시켜 **i-LTP**를 만들고, 그 결과 포만 신호 세포가 더 강하게 억제된다고 보고했다. 즉 같은 eCB 시스템이 **부위별로 반대 부호**로 과식에 기여할 수 있다.
- **열린 질문**(원문): 만성 HFD에서도 이 depression이 유지되는가? HFD 철회 시 회복 동역학은? 이 가소성이 비만으로 가는 지속 과식에 어떻게 기여하는가? **NAcSh→LH의 만성 hypoactivity가 지속 과식의 취약점**일 수 있다는 가설을 제시하고, 섭식장애 맥락과 **경로 강도 회복을 노리는 치료 접근**을 제안한다.
- 임상 맥락: CB1R 작용제는 섭취를 늘리고 길항제는 식욕 억제적이며 비만 치료 후보였다(Ravinet Trillou 2003; Christensen 2007 rimonabant 메타분석) — 저자들은 효능 쪽 근거로만 인용한다.
- 범위 유보: NAcSh→LH 가소성이 **다른 동기 행동·약물 적응 행동**(Gibson 2018 알코올)에서 어떤 역할인지는 미검증.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **threshold K의 "느린 성분"**: [[kim-2024-normative-framework-dissociates-need|Kim 2024]] 모델에서 행동은 Motivation M(t) > threshold K에서 개시된다. [[oconnor-2015-accumbal-d1r-neurons-projecting|O'Connor 2015]]는 외부 자극이 **초 단위로 K를 올리는** 채널을 제시했고, 본 논문은 결핍·기호성 경험이 **K의 기저값을 수일간 내려놓는** 기전을 제시한다. 검증 설계: AFR 전후에 LH 말단 자극 강도-반응 곡선(섭취 중단 역치)을 재면 **같은 광량으로 중단시키기가 AFR 후에 더 어려워야** 한다. 원문은 중단 역치를 측정하지 않았다.
- **체중 재증가의 두 시냅스 기질**: [[concept-weight-regain-defended-adiposity]] 축은 현재 **PVH^TRH→AgRP의 NMDAR 의존 증폭**([[grzelka-2023-a-synaptic-amplifier-of-hunger|Grzelka 2023]])으로 설명된다. 본 논문은 같은 "저체중 동안만 유지되고 체중 회복 시 꺼진다"는 특성을 **허가 게이트 쪽 CB1R 의존 depression**에서 보였다. 가설: 두 가소성은 **직렬**이다 — 배고픔 신호 gain↑(AgRP)과 중단 신호 약화(NAc→LH)가 곱해져 다이어트 후 과식을 만든다. 분자 관문이 다르므로(**NMDAR vs CB1R**) 병용 차단의 가산성이 검증 가능하다.
- **LH^LepR가 이 i-LTD를 받는가**: 본 논문은 LH^Vgat·LH^VGluT2까지만 내려갔고 **분자 정체를 열어 두었다**. [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]의 LH^LepR(LH GABA의 4%, food-specific 집단의 79%)에서 같은 FSK-occlusion 실험을 하면 "결핍 기억이 어느 아집단에 저장되는가"를 특정할 수 있다. 예측: 본 논문의 과식 증가가 **bout 수(동기)** 에만 나타났으므로 **seeking subset 우세**.
- **GLP-1RA × eCB 이중 표적**: [[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026]](SNU 김성연 lab)은 exendin-4가 LH^Vgat의 cue·섭취 반응 **진폭**을 깎음을 보였다. 본 논문은 CB1R 차단이 **LH로 들어오는 억제 입력의 강도**를 복원함을 보였다. 둘은 같은 LH 세포에서 **입력 쪽(억제 복원)과 출력 쪽(반응 진폭 축소)** 으로 분업하므로, GLP-1RA + 말초 한정 CB1 길항([[concept-endocannabinoid-system]]의 URB447 계열)의 가산성은 직접 검증 가능한 조합 가설이다.
- **인간 리드아웃: bout 수 vs bout당 lick 수**: 본 논문에서 결핍 유발 과식과 그 차단은 **전부 bout 수에서만** 나타났고 bout당 lick 수는 어느 조건에서도 변하지 않았다. [[guillaumin-2023-disentangling-the-role-of-nac|Guillaumin 2023]]의 microstructure 지표(bout 수 = wanting, bout 길이 = liking)와 결합하면, 다이어트 후 재발 표현형을 **"wanting 상승형"과 "liking 상승형"** 으로 나누는 측정 틀이 된다 — [[concept-digital-therapeutics|DTx]]에서 식사 microstructure(한입 간격·폭식 bout 수)를 수집할 설계 근거.
- **자극 설계 원리의 역설**: 본 논문의 in vivo HFS는 **식사 15분 전 자극만으로 식사 중 섭취를 줄였다**(지속 효과) — [[concept-drug-evoked-synaptic-plasticity]]의 "광유전학에서 착안한 DBS" 3원칙 중 **③ 지속 효과**의 섭식판 사례다. 단 ①②와는 **부호가 반대**다: Creed 2015의 depotentiation은 **D1R 길항제 병용**이 필수였는데, 본 논문의 억제성 i-LTP는 **전시냅스 D1R 활성이 필요**하다(SKF38393 없이는 슬라이스에서 유도 실패). 즉 **흥분성 시냅스를 되돌릴 때와 억제성 시냅스를 강화할 때 도파민 보조제의 방향이 뒤집힌다** — [[concept-deep-brain-stimulation|DBS]] 프로토콜 설계에서 표적 시냅스의 극성을 먼저 정해야 한다는 뜻이다.

## ⚠️ 위키 내 충돌·긴장 (병기 — 덮어쓰지 않음)
- **원문 내부 수치 표기 불일치(인용 시 주의)**: Fig 2D의 LH·VP 투사 세포 비율이 **본문과 범례에서 서로 반대로** 적혀 있다(본문 "LH 69.2% ± 3.8% / VP 34.4% ± 3.9%", 범례 "LH 34.4% ± 3.9% / VP 69.2% ± 3.8%"). LH vs VTA 코호트(LH 63.6% / VTA 47.5%)와 aLH vs pLH(aLH 46.1% / pLH 67.9%)의 패턴에 비추면 **범례 쪽(LH < VP)이 아니라 본문 쪽(LH > VP)이 다른 코호트와 정합**하지만, 원문만으로는 확정할 수 없다. **중복 비율(3.6%)과 D1 비율(VP 45.6% vs LH 81.3%)은 본문·범례가 일치**하므로, 위키에서는 이 두 수치만 인용하는 것이 안전하다.
- **[[oconnor-2015-accumbal-d1r-neurons-projecting|O'Connor 2015]]의 "93.6% D1R" vs 본 논문의 76–89%**: 같은 lab이 같은 CTB 전략으로 측정한 LH 투사 NAcSh 뉴런의 D1 비율이 **93.6% ± 0.8%**(2015)와 **81.3% ± 4.3% / 76.5% ± 4.3% / pLH 89.5% ± 0.7%**(2020)로 다르다. 주입 부위(2015 = peduncular LH 단일 / 2020 = 코호트별 aLH·pLH·일반 LH)와 이중 주입 설계 차이가 후보다. 두 수치 모두 "D1 지배"라는 결론은 바꾸지 않으므로 **병기**하되, 비율을 논거로 쓸 때는 좌표를 함께 적어야 한다.
- **"LH^Vgat = engine / LH^Vglut2 = brake" 프레임과의 긴장**: [[concept-lateral-hypothalamus]]·[[jennings-2013-the-inhibitory-circuit-architecture|Jennings 2013]]·[[rossi-2019-obesity-remodels-activity-and|Rossi 2019]]는 두 집단을 반대 부호의 섭식 노드로 본다. 본 논문은 **두 집단으로 가는 D1-MSN 억제가 똑같이 depress된다**고 보고한다(LH^VGluT2 연결 65%, rabies 입력 97%가 D1R-MSN). 단순 합산하면 **engine 탈억제(과식 ↑)와 brake 탈억제(과식 ↓)가 상쇄**되어야 하므로 순효과가 과식인 이유가 설명되지 않는다. 저자 자신이 "의외"라고 적고 Mickelsen 2019의 30여 아집단을 해소 후보로 든다. 해소 후보 추가: ⑴ 두 집단에 가는 **억제의 절대 크기 차이**(O'Connor 2015의 LH^Vgat IPSC 803 ± 217 pA vs 본 논문은 VGluT2 쪽 진폭을 보고하지 않음), ⑵ [[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026]]의 salience/consumption ensemble 분해. **미해결로 병기**.
- **[[marcus-2026-endocannabinoids-facilitate-reward-engagement-through|Marcus 2026]]과 eCB 작용의 부호·지표 차이**: 두 논문 모두 "전시냅스 CB1R 매개 억제가 섭취 행동을 촉진"이라는 방향에서 수렴하지만 **시냅스와 리드아웃이 다르다**. Marcus는 **NAc로 들어오는 흥분성 입력**(aPVT^NTS→NAc)의 CB1R gain control이고, `Cnr1` 결손이 **총 lick 수는 바꾸지 않고 관여(engagement)의 시간 구조만** 바꿨다. 본 논문은 **NAc에서 나가는 억제성 출력**(D1-MSN→LH)이고, CB1R 차단이 **총 lick 수와 bout 수를 줄였다**(bout당 lick 수는 불변). 따라서 "CB1R 차단이 섭취 총량에 영향을 주는가"는 **표적 시냅스에 따라 답이 다르다** — 전신 CB1 길항의 행동 효과를 단일 기전으로 환원하면 안 된다는 뜻으로 병기.
- **[[piette-2026-striatal-endocannabinoids-drive-one-shot|Piette 2026]]·[[concept-endocannabinoid-system]]의 eCB-LTP와 규칙이 다르다**: Piette의 DLS eCB-LTP는 **흥분성** corticostriatal 시냅스의 **강화**이고 **CB1R + D2R 공동 필요**다. 본 논문은 **억제성** D1-MSN 말단의 **약화(i-LTD)** 이고, 반대 방향(i-LTP)에 **D1R**이 필요하다. 같은 리간드·수용체가 **시냅스 종류·부위별로 정반대 규칙**을 쓴다는 점에서 상보적이며, [[concept-endocannabinoid-system]]의 "두 번째 얼굴(중추 학습 규칙)" 절에 **세 번째 규칙(억제성 시냅스의 상태 의존 i-LTD)** 으로 추가될 수 있다.
- **rimonabant 번역의 양면**: [[concept-endocannabinoid-system]]은 전신 CB1 역작용제가 **정신과 부작용으로 철회**됐음을 명시하고, 그 이유의 회로 설명으로 **중추 학습 규칙을 함께 끄는 것**(Piette 2026)을 든다. 본 논문은 같은 약물(SR141716A = rimonabant)을 **전신 10 mg/kg**으로 쓰고 과식·HFD 체중 증가 억제 효능만 보고한다(행동 부작용 평가 없음; 2020년 시점에 Christensen 2007 메타분석을 "promise"로 인용). 두 서술은 **같은 약물의 효능과 안전성 평가**로 병기해야 하며, 본 논문의 **LH 국소 1.5 µg/side 데이터**는 오히려 "전신이 아니라 국소·말초 한정 접근이 필요하다"는 근거로 읽는 것이 정합적이다.
- **[[stuber-2025-the-neurobiology-of-overeating|Stuber, Schwitzgebel & Lüscher 2025]] 요약의 정밀화**: 그 리뷰는 본 논문을 "acute restriction → gate depression"으로 한 줄 요약한다. 본 논문은 그 외에 ⑴ **3일 HFD도 같은 depression을 만든다**(결핍 없이도), ⑵ **체중 회복 시 1주 내 소실**(가역), ⑶ **in vivo potentiation이 금식 섭취를 줄인다**(역방향 인과), ⑷ **LH^VGluT2도 표적**이라는 네 결과를 더 갖는다. 리뷰 요약만 인용하면 ⑵⑶이 빠진다 — 특히 ⑵는 "yo-yo dieting의 시냅스 기질" 주장을 **저체중 유지 기간에 한정**시키는 제약이다.
- **[[concept-medium-spiny-neuron]]의 D1/D2 = direct/indirect 이분법**: 본 논문은 D1-MSN 출력이 **표적별로 별개 세포군**(LH vs VP vs VTA, 중복 3.6–11.1%)이고 **표적별로 가소성 규칙이 다르다**(LH는 i-LTP 불가, VP는 가능)고 보고한다. 즉 "D1-MSN"은 가소성 수준에서 단일 집단이 아니다. 또한 저자들이 든 Pardo-Garcia 2019는 **VP·VTA 투사는 서로 크게 겹친다**고 보고했으므로, 분리는 **LH 투사에 특유**하다. 개념 페이지의 이분법 서술과 병기.

## 관련 페이지
- [[oconnor-2015-accumbal-d1r-neurons-projecting]] — ★ 직계 선행. 본 논문은 그 "feeding authorization gate"에 **가소성(시간축)** 을 붙였다. ⚠️ LH 투사 D1 비율(93.6% vs 76–89%) 병기.
- [[person-luscher-christian]] — 교신저자. 중독 시냅스 가소성 프로그램(i-LTP·depotentiation)을 섭식 게이트에 적용한 지점.
- [[stuber-2025-the-neurobiology-of-overeating]] — 본 논문을 "acute restriction → gate depression"으로 요약한 리뷰(Lüscher 공저). ⚠️ 가역성·역방향 인과·LH^VGluT2는 그 요약에서 빠져 있음.
- [[concept-endocannabinoid-system]] — 기전 hub. 본 논문은 **억제성 시냅스의 상태 의존 i-LTD**라는 세 번째 작용 규칙을 더한다. ⚠️ rimonabant 안전성 서술과 병기.
- [[marcus-2026-endocannabinoids-facilitate-reward-engagement-through]] — ⚠️ 같은 CB1R, 반대편 시냅스(NAc **입력** 흥분성). `Cnr1` 결손은 총 섭취 불변·시간 구조만 변화 / 본 논문 CB1R 차단은 총 lick·bout 감소.
- [[piette-2026-striatal-endocannabinoids-drive-one-shot]] — ⚠️ eCB가 **흥분성 LTP**(CB1R+D2R)를 만드는 규칙. 본 논문의 억제성 i-LTD(i-LTP는 D1R 의존)와 부호·요건이 반대.
- [[concept-nucleus-accumbens]] — NAc shell → LH 경로의 출력 쪽 1차 데이터. 표적별 투사군 분리(중복 3.6%)와 표적별 가소성 규칙 차이.
- [[concept-medium-spiny-neuron]] — ⚠️ "D1-MSN"이 가소성 수준에서 단일 집단이 아님(LH 투사만 i-LTP 불가). Pardo-Garcia 2019의 VP·VTA 중복과 대비.
- [[concept-weight-regain-defended-adiposity]] — 다이어트 후 과식의 **두 번째 시냅스 기질**(CB1R 의존, 저체중 동안만 유지, 1주 내 가역).
- [[grzelka-2023-a-synaptic-amplifier-of-hunger]] — 첫 번째 기질(PVH^TRH→AgRP, NMDAR 의존). 분자 관문이 달라 병용 차단 가산성 검증 가능.
- [[concept-drug-evoked-synaptic-plasticity]] · [[concept-deep-brain-stimulation]] — in vivo HFS의 **식사 전 자극 → 지속 효과** 사례. ⚠️ Creed 2015의 "D1R 길항제 병용"과 **도파민 보조제 방향이 반대**(억제성 i-LTP는 D1R 활성 필요).
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] — 사용자 lab LH^LepR. 본 논문이 열어 둔 **분자 정체**의 1순위 검증 대상(예측: seeking subset).
- [[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles]] — LH^Vgat의 salience vs value-scaled consumption ensemble(SNU 김성연 lab). 어느 ensemble이 depress된 D1 입력을 받는지가 다음 질문.
- [[jennings-2013-the-inhibitory-circuit-architecture]] — ⚠️ "LH^Vglut2 = brake" 프레임. 본 논문은 **그 brake로 가는 D1 억제도 함께 depress**된다고 보고(순효과 상쇄 문제).
- [[rossi-2019-obesity-remodels-activity-and]] — 만성 HFD가 LHA^Vglut2 brake를 둔화시킨다. 본 논문의 **3일 HFD → 입력 억제 depression**과 시간척도·층위가 다른 상보 기전.
- [[guillaumin-2023-disentangling-the-role-of-nac]] — lick microstructure 지표(bout 수 = wanting, bout 길이 = liking). 본 논문 효과가 **bout 수에만** 나타난 결과의 해석 틀.
- [[gordon-2026-lateral-hypothalamic-control-of-the]] — 선조체 DA가 섭취 **개시(bout 수)만** 강화. 본 논문의 "bout 수 선택적" 과식과 지표 수준에서 수렴.
- [[kim-2024-normative-framework-dissociates-need]] · [[kim-2024-unified-theoretical-framework-underlying-regulation]] · [[concept-need-motivation-pleasure-utility]] — threshold K의 **느린(가소성) 성분** 후보.
- [[concept-lateral-hypothalamus]] — 개념 hub. LH로 들어오는 억제 입력의 **상태 의존 가소성**.
- [[concept-ventral-pallidum]] — 같은 D1-MSN의 다른 표적. 본 논문의 내부 대조군(FSK-i-LTP가 정상 작동).
- [[concept-monosynaptic-rabies-tracing]] — LH^VGluT2 starter → NAcSh D1R-MSN 97%(43/44) 확인에 쓰인 방법.
- [[concept-food-addiction]] — 과식을 시냅스 가소성으로 읽는 축. ⚠️ Stuber, Schwitzgebel & Lüscher 2025의 "food addiction 신중론"과 함께 읽을 것.
- [[concept-digital-therapeutics]] — 식사 microstructure(bout 수) 수집의 전임상 근거.
