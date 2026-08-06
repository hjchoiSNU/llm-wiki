---
title: Computational phenotyping of effort-based decision-making in T2D on/off semaglutide (Mehrhof 2026)
type: paper
created: 2026-08-05
updated: 2026-08-05
source: raw/2026 Neuropsychopharmacology. Computational phenotyping of effort-based decision-making in type-2 diabetes on and off semaglutide.pdf
authors: [Sara Z. Mehrhof, Hugo Fleming, Camilla L. Nord]
year: 2026
---

> [!takeaway] 연구 방향 관점의 핵심
> **2형 당뇨(T2D) 환자는 보상을 위해 노력을 들이려는 성향(acceptance bias)이 낮다** — 즉 대사 악화가 "에너지 절약(energy conservation)" 쪽으로의 인지 편향을 동반하고, 이것이 우울의 apathy/anhedonia와 **평행하되 정신증상과는 독립적**. 그리고 결정적으로 **semaglutide 치료로도 이 effort 편향은 회복되지 않았다**. 사용자 [[concept-glp-1|GLP-1]]·NMPU 연구에 중요한 반례/뉘앙스: GLP-1RA가 식욕·[[concept-dopamine-reward-system|도파민 보상]]을 바꾼다는 결과와 달리, **동기적 effort 의사결정은 (적어도 단면적으로) semaglutide로 정상화되지 않음** → GLP-1의 "reward vs effort" 효과 분리, [[concept-need-motivation-pleasure-utility|NMPU Utility/Motivation]] 축의 약물반응성 검증 과제. 같은 Nord 랩 [[fleming-2026-metabolism-and-the-mind|glucose-RL]]·[[hickman-2025-breaking-through-the-mind-body|interoception]]와 3부작.

# Computational phenotyping of effort-based decision-making in T2D on/off semaglutide (Mehrhof 2026)

## 한 줄 요약
사전등록 온라인 실험(4군, 각 N≈54–58): **T2D(±semaglutide) vs BMI-매칭 비당뇨 vs 정상BMI 비당뇨**. [[concept-effort-based-decision-making|effort-based decision-making]] 과제 + 계산모델로 **acceptance bias**(노력을 받아들이려는 일반 편향)를 추정. **T2D는 acceptance bias↓(blunted)**, 당뇨위험(FINDRISC)↑는 선형으로 acceptance bias↓. 이 효과는 신경정신 증상과 대체로 **독립적**이며 **semaglutide로 회복되지 않음** → 대사 악화가 동반하는 "에너지 절약" 인지 shift.

## 핵심 내용

### 배경·가설
- 동기는 도파민(VTA→복측선조체)에 의존; 이 경로 뉴런은 인슐린 수용체 발현 → 대사가 [[concept-effort-based-decision-making|effort-based decision-making]]을 조율(allostatic energy regulation). 인슐린 저항이 도파민·동기를 교란.
- 대사질환(T2D)–정신질환 공존; 에너지 절약 쪽 shift가 공통 기전일 가능성. **poor metabolic health 단독으로 동기 저하를 일으키는가? semaglutide는 회복시키는가?**

### 방법
- 4군(Prolific, 미국·영국): (1) T2D on semaglutide N=58, (2) T2D off semaglutide N=54, (3) 비당뇨 BMI-매칭 N=58, (4) 비당뇨 정상BMI(18.5–25) N=58. age·gender·physical activity·BMI 매칭.
- **Effort-expenditure 과제**(clicking, 4 effort × 4 reward level, adaptive staircase 64 trial): 각 offer(reward 2/3/4/5점, effort 1–4)를 accept/reject.
- 계산모델: 주관가치 **SV = βR·R − βE·E**, accept 확률 = softmax(SV + a). 절편 **a = acceptance bias**(effort로 향하는 일반 편향), βE=effort sensitivity, βR=reward sensitivity. parabolic discounting+3 파라미터 모델 최적.
- within-subject: on-semaglutide 25명을 주사 후 1일(고농도) vs 6일(반감)에 재검사.
- 설문: SHAPS(anhedonia), AES(apathy), FINDRISC, BDI, OCI-R, TFEQ 등.

### 주요 결과
- **군 주효과 on acceptance bias**(F(3,224)=5.025, p=0.002): 정상BMI 비당뇨가 최고, **T2D-on-semaglutide가 최저**. 사후: T2D-on-sema < 비당뇨 두 군.
- **effort sensitivity·reward sensitivity는 군차 없음** → 특정 tradeoff 민감도가 아니라 **일반 동기 편향**의 저하.
- **당뇨위험(FINDRISC)이 acceptance bias를 선형 예측**(b=−0.129, p=0.014); 항우울제 사용 통제 후에도 유지, 정신과 병력 통제 후 marginal(다중공선성).
- **정신증상과 대체로 독립**: 군효과가 항우울제·정신과 병력 통제에도 robust(SHAPS·AES 군차 없음). → 대사·신경정신이 effort-DM에 **평행(parallel)** 효과.
- **semaglutide 무효과**: on vs off T2D 간 계산·설문 지표 차이 없음; 주사 후 시간(1일 vs 6일)도 무효. (단, on-sema 군이 질병진행 더 진행된 표본일 가능성 = confound.)

### 해석
- 대사 악화 → **effortful 행동에서 멀어지는 인지 편향(에너지 보존)** = 우울의 동기결손을 mimic하되 독립. 양방향 피드백(동기↓→운동↓→체중↑→대사↓) 가능.
- **GLP-1 뉘앙스**: semaglutide가 식욕↓·도파민 보상신호↑(Kooij 2023)에도 **effort-DM은 정상화 안 됨**. GLP-1–reward 연구가 대부분 음식 보상에 집중된 것과 달리 여기선 domain-general(점수) 보상 사용 → 효과가 음식 넘어 일반화되지 않을 수 있음. RCT·종단 필요.
- 단면·자가보고·온라인 한계; 생리적 인슐린감수성 미측정.

## 관련 페이지
- [[concept-effort-based-decision-making]] — 이 논문의 핵심 패러다임·계산 파라미터(acceptance bias) hub.
- [[concept-metabolic-interoception]] — 대사→동기/인지 shift(energy allostasis) 프레임.
- [[mehrhof-2025-an-interoceptive-model-of-energy]] — 같은 제1저자; 본 결과를 담는 energy-allostasis 이론 리뷰.
- [[fleming-2026-metabolism-and-the-mind]] — 같은 Nord 랩; 대사→보상학습(도파민)의 자매 축.
- [[hickman-2025-breaking-through-the-mind-body]] — 같은 Nord 랩; interoception 당사자 우선순위.
- [[person-nord-camilla]] — 교신 senior; 계산정신의학·동기·metabolic-mental health.
- [[concept-glp-1]] — semaglutide; effort-DM 비회복이라는 반례.
- [[concept-need-motivation-pleasure-utility]] — Motivation/Utility(effort·미래가치) 축의 대사적 손상.
- [[concept-dopamine-reward-system]] — effort·vigor의 VTA→선조체 도파민 기질.
- [[hamid-2016-mesolimbic-dopamine-signals-value-work]] — 중변연 도파민 = "일(work)의 가치"; effort 동기의 신경신호.
- [[concept-anhedonia]] — apathy/anhedonia와 acceptance bias 저하의 평행.
