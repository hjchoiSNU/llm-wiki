---
title: "A forebrain neural substrate for behavioral thermoregulation (Jung, Lee, Kim … Kim SY 2022, Neuron)"
type: paper
created: 2026-10-03
updated: 2026-10-03
source: "raw/2022 Neuron. A forebrain neural substrate for behavioral thermoregulation.pdf"
authors: [Jung S, Lee M, Kim D-Y, Son C, Ahn BH, Heo G, Park J, Kim M, Park H-E, Koo D-J, Park JH, Lee JW, Choe HK, Kim S-Y]
year: 2022
journal: "Neuron 110:266–279.e1–e9 (2022-01-19 issue; received 2020-04-01, revised 2021-07-14, accepted 2021-09-20, online 2021-10-22); doi:10.1016/j.neuron.2021.09.039"
---

> [!takeaway] 연구 방향 관점의 핵심
> **섭식 노드로 알려진 [[concept-lateral-hypothalamus|LH]]^Vgat(GABA) 뉴런이 체온 동기 행동에도 필수다.** 이 집단을 화학유전으로 억제하면 자가가온 operant·온도 구배 선택·둥지 짓기·자세 신전이 모두 망가진다. 그런데 BAT 열생산·심부체온·꼬리 혈관수축·열 통각은 그대로다. 즉 LH^Vgat은 **자율성이 아니라 행동성 체온조절**의 전뇌 기질이다. 2광자 영상에서는 열 처벌에 흥분하고 열 보상에 억제되는 **thermal P&R 하위집단**이 따로 있었다. 이 집단은 레버 누르기(체온조절 행동)에도 흥분했고, 칼로리 보상 집단과는 대체로 겹치지 않았다(76개 중 17개). 열 행동과 열 보상 부호화에는 **LPB→LH 흥분성 입력**이 필요했지만 섭식과 칼로리 보상 부호화에는 필요하지 않았다.
> 사용자 연구에 주는 함의 세 가지. (1) **LH GABA는 온도와 영양을 함께 다루는 교차-항상성 동기 노드다. 그러나 단일세포 수준에서는 "공통 화폐"가 아니라 분리된 채널이다**(집단 벡터 각도: 칼로리–열 처벌 81°, 칼로리–열 보상 108°). LH^Vgat 전체 활성을 [[concept-need-motivation-pleasure-utility|NMPU]]의 Motivation으로 읽으면 체온 동기가 섞여 들어간다. (2) 같은 lab의 직계 후속작 [[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026]]은 바로 이 thermal P&R 집단이 **먹이 cue에도 반응하는 salience ensemble**이라고 다시 정의했다. 이 논문은 그 "열 처벌 ensemble"의 원전이다. (3) **LPB 세포체를 억제하면 열 행동은 망가지고 자유 섭식은 늘었다.** LPB→LH 경로만 끄면 섭식은 그대로였다. 체온조절과 에너지 섭취가 PB 출력 수준에서 갈라진다는 해부적 단서다. 교신은 SNU [[person-kim-sung-yon|김성연]] lab이다.

# Jung et al. 2022 — 행동성 체온조절의 전뇌 기질: LH^Vgat

## 한 줄 요약
Vgat-Cre 마우스에서 LH^Vgat을 화학유전으로 억제하면 서로 다른 네 체온조절 행동이 모두 손상됐고, 자율성 체온조절은 손상되지 않았다. fiber photometry와 2광자 영상에서 이 집단은 열 처벌에 흥분하고 열 보상에 억제되는 **양방향 부호화**를 보였다. 그 하위집단은 operant 체온조절 행동 중에 동원됐고 칼로리 보상 하위집단과는 대체로 분리됐다. 열 보상 부호화와 체온조절 행동에는 LPB의 흥분성 입력이 필요했다. 다양한 체온조절 행동에 일반적으로 필요한 전뇌 세포집단을 처음 제시한 연구다(SNU 김성연 lab, Neuron 2022).

## 핵심 내용

### 배경 — 저자가 던진 질문
- 자율성 반응(떨기·혈관수축·BAT 열생산)은 정형적이다. 행동성 체온조절은 동기화된 목표지향 행동으로 여러 형태를 띤다(따뜻한 곳으로 이동, 둥지 짓기, 열램프를 켜는 operant). 행동 전략이 자율성 반응보다 **에너지 효율적**이어서 동물이 선호하는 양식이라고 저자는 쓴다. 자율성 회로는 많이 연구됐지만 행동성 회로는 거의 모른다.
- 말초 온도 정보는 spinoparabrachial 경로를 타고 외측결합옆핵(LPB)으로 가고, LPB는 POA·DMH 등 전뇌로 투사한다. 그러나 병변 연구에서 **POA와 DMH는 대부분의 체온조절 행동에 불필요**했다. 수십 년 동안 다양한 체온조절 행동에 일반적으로 필요한 전뇌 영역이나 정의된 세포집단은 찾지 못했다.
- LH는 동기 행동의 중추이고, PB 입력을 받으며, VTA·PVT·PAG로 투사하므로 유력한 후보다. 그러나 1970년대 LH 병변 연구는 운동 결손이 동반되거나 결과가 엇갈렸다(무효과, 또는 오히려 체온조절 행동 증가). 저자는 LH의 세포 이질성이 병변 결과를 엇갈리게 했다고 보고, 동기 행동과의 연관이 축적된 **Vgat(GABA) 뉴런**을 세포타입 특이적으로 겨냥했다.

### 방법 요약
| 항목 | 내용 |
|---|---|
| 동물 | Vgat-Cre/+ (JAX 016962), C57BL/6J, Fos-iCreER(TRAP)×Ai14, Nts-Cre, Vgat-FlpO, Tac2-Cre. 암수, ≥8주령, 암기 시험. 열 전달을 위해 등 털을 제거. SNU IACUC 승인 |
| 손실 기능 | LH 양측 AAV8-hSyn-DIO-hM4D(Gi)-mCherry 200 nL. CNO 10 mg/kg i.p.(시험 45분 전), 대조는 mCherry. LPB는 hSyn-hM4Di(세포타입 비특이). LPB→LH 말단은 LH cannula로 CNO 1 mM 200 nL/반구 국소 주입 |
| 이득 기능 | hM3Dq, CNO 1 mg/kg |
| 자가가온 operant | 8°C 챔버. 활성 nose poke → IR 램프(250 W) 2 s. 하루 1 h 훈련, 활성 비율 >60%가 3일 연속이면 시험(Saline–CNO–Saline, 1일차로 정규화) |
| 온도 구배 | 90 cm 선형 챔버 바닥 구배 15–50°C(주변 8°C) 또는 15–40°C(주변 37°C). 1 h 중 마지막 30 min의 평균·최고 위치 온도 |
| 둥지 짓기 | 15°C, cotton nestlet, 90 min 후 남은 재료 면적 |
| 자세 신전 | 37°C, 40 min. 척추를 곧게 펴고 엎드린 자세의 누적 시간(수동 계수) |
| 자율성 | BAT 아래 또는 복강 telemetry(IPTT-300). 바닥 32°C 30 min 기저 → 2 min 동안 5°C로 냉각 → 35 min 유지. 꼬리 혈관수축은 IR 카메라 |
| 통각 | hot plate 52°C, 150 s(점프 수·첫 점프 잠복기) |
| Photometry | GCaMP6m, 470/405 nm. IR 램프 아래에 850 nm long-pass 필터를 달아 가시광 차단. operant에서는 nose poke와 heat 사이에 1 s 지연을 넣어 두 반응을 분리 |
| 2광자 | GRIN 렌즈(0.6 mm×7.3 mm 또는 0.5 mm×7.1 mm), head-fixed, Olympus FVMPE-RS, 5 Hz. 수냉식 thermal box로 주변 ~8°C/~37°C. 등에 IR 5 s, 입 안 액상 먹이 20 μL(120 μL/min, 24 h 절식). 10–20 trials, ITI 50–80 s 의사무작위. 세션 간 같은 뉴런은 ROI를 수동 추적 |
| 분석 | auROC(기저 vs 0–10 s), K-means(K = 2–10 중 Calinski–Harabasz 최대), 집단 벡터 각도, hypergeometric 겹침 검정(Corder 2019 방식) |
| 회로 | 단시냅스 [[concept-monosynaptic-rabies-tracing|rabies]](AAV8-DIO-TC66T-2A-oG + EnvA RVΔG), FISH(Slc17a6/Slc32a1), LPB ChR2 말단 자극(10 ms, 20 Hz, 2 h) 후 Fos |

### 결과 1 — LH^Vgat은 다양한 체온조절 행동에 필요 (Figure 1, S1)
- **자가가온 operant**(8°C): 억제 시 손상(p < 0.01).
- **온도 구배**: 저온(8°C)과 고온(37°C) 주변 모두에서 thermoneutral 위치로 이동하지 못했다(평균·최고 위치 온도).
- **둥지 짓기**(15°C) 손상, **자세 신전**(37°C) 감소.
- **자율성 반응은 정상**: BAT 열생산, 심부체온 유지, 꼬리 온도(기저와 한랭 모두). **열 통각**(hot plate)도 정상.
- 운동 결손 배제: 저자는 화학유전 억제를 포함한 LH^Vgat 손실 기능 조작이 이동을 바꾸지 않았다는 선행연구 3편(Jennings 2015, Navarro 2016, Sharpe 2017)을 근거로 든다.

### 결과 2 — 집단 활동: 체온조절 행동에 흥분, 열 보상에 억제 (Figure 2)
- **자가가온 operant**(8°C): nose poke에 일과성으로 흥분했고, 뒤이은 heat에 강하게 억제됐다. 8°C에서 열이 보상이라는 점은 thermal preference test와 접근 행동으로 확인했다(Figure S1B–C).
- **칼로리 보상은 반대 방향**: 48 h 절식 후 30% sucrose 자유 섭취와 FR1 operant sucrose(10 μL) 모두에서 흥분했다(Cassidy 2019와 일치). 저자도 열 보상에 대한 억제를 "예상 밖"이라고 썼다.
- **운동 통제**: wheel 운동 개시에 반응하지 않았고, open field 속도와의 상관은 약했다(r = 0.1093, p < 0.0001).

### 결과 3 — 열 처벌·보상의 양방향 부호화 (Figure 3)
- **IR heat 2 s**(1 min 간격, 30 min)를 주변 8·20·32·37°C에서 줬다. 8°C에서는 억제, 37°C에서는 흥분했다.
- **차가운 공기 10 s**(맞춤 제작 장치)는 반대였다. 8°C에서는 강하게 흥분, 37°C에서는 억제, 중간 온도에서는 중간 반응이었다.
- 결론: 자극의 물리 온도와 무관하게 **열 처벌에는 활성↑, 열 보상에는 활성↓**. LH^Vgat은 thermoneutrality를 기준으로 한 자극의 **동기적 속성**을 부호화한다. 저자는 동기 행동이 보상 추구와 처벌 회피의 두 형태라는 점(Berridge 1999 인용)에서 이 부호화가 체온조절에 핵심일 수 있다고 본다.

### 결과 4 — LPB가 LH^Vgat에 흥분성 온도 입력을 준다 (Figure 4, S2)
- 단시냅스 rabies 결과 전뇌에서 광범위한 입력이 확인됐다. 말초 쪽으로는 **LPB**에 강한 표지가 있었다. 표지된 PB 뉴런의 **~80%**가 외측 하위핵(LPBel·LPBs·LPBd·LPBc)에 있었다. Figure 4C 영역 목록에는 POA·ARC·DMH·DRN·섬엽·NAc·VTA 등도 있다(수치는 그림에만 제시).
- LH^Vgat으로 투사하는 LPB 뉴런은 대부분 **Slc17a6(Vglut2)+, Slc32a1(Vgat)−**였다. LPB 말단을 LH에서 ChR2로 자극하면 LH^Vgat에 Fos가 강하게 유도됐다. 즉 이 투사는 흥분성이다.
- Figure S2(TRAP): LPB에서는 뜨거운 처벌과 차가운 처벌을 **대체로 다른 집단**이 표상했다(기존에 보고된 warm/cold-sensitive LPB 뉴런에 대응한다고 추정). 반면 LH에서는 뜨거운 처벌 부호화 뉴런의 **약 절반**이 차가운 처벌에도 활성화됐다. 온도와 무관하게 처벌에 반응하는 성질의 기질 후보다.

### 결과 5 — PB 입력은 열 행동·열 보상 부호화에 필요하고 섭식에는 불필요 (Figure 5, S3)
- **LPB 세포체 억제**: 자가가온은 손상됐다. FR1 sucrose operant는 변하지 않았다. 절식 마우스의 ad libitum 섭식은 **증가**했다(PB 절제 결과와 유사, Nagai 1987).
- **동시 photometry**: LPB를 억제하자 LH^Vgat의 **열 보상 반응이 사라졌다**. 칼로리 보상(sucrose) 반응은 유지됐다.
- **LPB→LH 말단 억제**(국소 CNO): 자가가온만 선택적으로 손상됐고 sucrose operant와 자유 섭식은 그대로였다. 한랭 노출 시 BAT 열생산과 심부체온 유지도 정상이었다. 반면 LPB 세포체 억제는 BAT 열생산을 손상했다(Figure 5M, S3D).
- 해석: **LPB→LH는 행동성 체온조절 전용 경로**이고, LPB 자체는 행동성·자율성 모두에 필요하다. LH^Vgat은 섭식에도 필요하지만(Jennings 2015 인용), LPB→LH 경로는 체온조절 행동에만 필요하다.

### 결과 6 — 2광자 단일세포: thermal P&R 집단 vs 칼로리 보상 집단 (Figure 6, S4, S5)
- 실험 간 등록된 뉴런 **260개/12마리**.
- **반응 비율**

| 자극 | 흥분 | 억제 | 무반응 |
|---|---|---|---|
| 열 보상(8°C에서 IR heat 5 s) | 3% | **43%** | 54% |
| 열 처벌(37°C에서 IR heat 5 s) | **52%** | 4% | 44% |
| 칼로리 보상(액상 먹이 10 s) | **33%** | 12% | 55% |

- **집단 벡터 각도**: 칼로리–열 처벌 **81 ± 10°**, 칼로리–열 보상 **108 ± 9°**, 열 보상–열 처벌 **131 ± 7°**. 칼로리 벡터는 두 열 벡터와 거의 직교했다. 앙상블 수준에서 열과 칼로리의 표상이 다르다는 뜻이다.
- **K-means 3 클러스터**(거의 균등): cluster 1 n = 85(33%)는 열 P&R을 양방향으로 부호화하고 칼로리에는 무반응이었다. cluster 2 n = 85(33%)는 열에 비교적 조용하고 칼로리에 강하게 흥분했다. cluster 3 n = 90(34%)은 대부분 무반응이었다.
- **겹침 분석**: 열 보상에 억제된 뉴런(111 = 76 + 35)과 열 처벌에 흥분한 뉴런(136 = 76 + 60)의 교집합이 **76개**로 유의하게 컸다. 이 76개가 **thermal P&R 뉴런**이다(둘 다 아님 89). thermal P&R 76개와 칼로리 보상 흥분 86개의 교집합은 **17개**뿐으로 유의하게 분리됐다(둘 다 아님 115).
- **선호 부호화**: thermal P&R 뉴런은 열 자극에, 칼로리 뉴런은 칼로리 자극에 더 강하게 반응했다(Figure 6J).
- **선택성**(Figure S5): thermal P&R 뉴런 중 쓴맛(quinine 5 mM, 10 μL, 0.5 s)에 흥분한 것은 소수였다. 발 충격 누락(foot-shock omission)에 억제된 뉴런과도 유의한 겹침이 없었다. 따라서 열 자극에 "어느 정도" 튜닝돼 있다. 그러나 **thermal P&R 뉴런 전부가 발 충격(0.4 mA, 2 s)에 흥분**했으므로 다른 혐오 체감각 자극도 부호화할 수 있다.

### 결과 7 — thermal P&R 집단은 operant 체온조절 행동 중 동원 (Figure 7)
- head-fixed 레버 FR1 과제: 레버를 누르면 2 s 지연 후 IR heat 1 s(8°C). 최소 4일 훈련 후 30 min 영상. 등록 뉴런 **112개/7마리**.
- 레버 누름에 흥분 19%, 억제 1%, 무반응 80%. photometry에서 본 nose poke 흥분과 일치한다.
- **겹침**: thermal P&R 뉴런(열 보상 억제 ∩ 열 처벌 흥분) **27개 중 15개**가 레버에 흥분했다. 레버 흥분 뉴런 **21개 중 15개**가 thermal P&R이었다(유의).
- thermal P&R 뉴런은 평균적으로 레버 누름에 흥분했다. 레버 부호화 뉴런은 열 처벌·열 보상 모두에 유의하게 반응했다. 열 처벌 반응과 레버 반응의 크기 차이는 유의하지 않았다.

### 결과 8 — 이득 기능 실험과 하위집단 접근의 한계 (Figure S6, S7)
- **hM3Dq 활성화**(CNO 1 mg/kg)는 체온조절 행동을 유발·촉진하지 않고 **갉기(gnawing)**를 일으켰다(Navarro 2016, de Vrind 2019 재현). 저자는 이질적 하위집단을 비특이적으로 동원한 행동 교란일 수 있고, consummatory 하위집단 활성에 따른 소비 행동일 수도 있다고 본다([[concept-consumption-vigor]]).
- **분자(Nts·Tac2)·투사(PAG 투사 LH^Vgat)로 정의한 집단**은 열·칼로리 어느 쪽에도 선택적이지 않았거나, thermal P&R·칼로리 뉴런의 반응 프로필과 맞지 않았다.

> [!note] 작성 상태 (2026-10-03)
> 이 페이지는 결과 1–8까지 정리돼 있다. 저자 해석(Discussion)·한계·위키 내 긴장 절은 아직 쓰지 않았다. 해당 내용은 `raw/` 원문을 직접 확인할 것.

## 관련 페이지
- [[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles]] — 같은 lab의 직계 후속작(ref 15로 인용). 이 논문의 thermal P&R 집단이 먹이 cue에도 반응함을 보이고 salience ensemble로 재정의
- [[person-kim-sung-yon]] — 교신저자(SNU)
- [[concept-lateral-hypothalamus]] — LH hub. LH^Vgat이 섭식뿐 아니라 행동성 체온조절에도 필요하다는 근거
- [[concept-need-motivation-pleasure-utility]] — LH^Vgat 집단 활성을 Motivation으로 읽을 때 체온 동기 신호가 섞일 수 있다는 주의점
- [[concept-primary-reward-signals]] — "체온 primary reward?" 열린 질문에 대한 1차 자료(열 보상·열 처벌의 양방향 부호화)
- [[concept-parabrachial-cgrp-alarm]] — PB hub. LPB→LH 흥분성 입력은 체온조절 행동에만 필요하고 섭식에는 불필요
- [[concept-medial-preoptic-area]] — POA는 병변 문헌상 대부분의 체온조절 행동에 불필요했다는 배경(이 논문 서론)
- [[jia-2026-novelty-exploration-activated-ensemble-in]] — LH의 양가 salience 반응. 이 논문에서도 thermal P&R 뉴런 전부가 발 충격에 흥분
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — 사용자 lab LH 리뷰(섭식 관점)와의 대비: 같은 LH^Vgat의 비섭식 기능
- [[concept-consumption-vigor]] — hM3Dq 활성화가 체온조절 행동이 아니라 갉기를 유발
- [[concept-monosynaptic-rabies-tracing]] — LH^Vgat 입력 지도(LPB 등)에 쓴 방법
- **TRAP + synaptophysin-mRuby**: 열 처벌에 활성화된 LH 뉴런과 칼로리 보상(액상 먹이)에 활성화된 LH 뉴런의 투사 패턴은 **구분되지 않았다**. 투사 기반 표적화가