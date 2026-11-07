---
title: 노력 기반 의사결정 (Effort-based decision-making)
type: concept
created: 2026-08-05
updated: 2026-11-03
---

> [!takeaway] 연구 방향 관점의 핵심
> "보상이 노력을 들일 값어치가 있는가"를 계산하는 비용-편익 의사결정. 중변연 도파민(VTA→ventral striatum)이 **"일할 의지(vigor·activation)"**를 부호화하며, 이 편향의 저하가 apathy·anhedonia·우울의 transdiagnostic 표지. 사용자 [[concept-need-motivation-pleasure-utility|NMPU]]의 **Motivation/Utility 축을 정량화하는 인간 계산 패러다임**이자, [[concept-glp-1|GLP-1]]·대사 개입이 "식욕"뿐 아니라 **동기적 effort**를 바꾸는지 검증하는 도구. [[mehrhof-2026-computational-phenotyping-of-effort|Mehrhof 2026]]은 T2D에서 effort 수용편향↓(에너지 절약)를 보였고 semaglutide로 회복 안 됨을 보고.

# 노력 기반 의사결정 (Effort-based decision-making)

## 한 줄 요약
행동의 **노력(effort) 비용 vs 보상(reward) 편익**을 통합해 "할지/말지"를 결정하는 과정. effort-expenditure 과제(EEfRT류)와 계산모델로 측정하며, 중변연 도파민이 노력 동기를 구동한다. 손상 시 apathy·anhedonia로 나타나고, 대사 악화도 이를 blunt시킨다.

## 핵심 내용

### 계산 구조
- 주관가치 **SV = βR·R − βE·E** (reward 크기 R를 βR로 가중, effort E를 βE로 가중). accept 확률 = softmax(SV + a).
- **acceptance bias (a)** = 절편, effortful 행동으로 향하는 **일반 동기 편향**(특정 tradeoff와 무관). apathy·anhedonia·우울에서 낮아짐([[mehrhof-2026-computational-phenotyping-of-effort]]).
- **effort sensitivity(βE)**·**reward sensitivity(βR)** = 각각 노력·보상 크기 변화에 대한 반응성. discounting은 parabolic(또는 linear).

### 신경 기질
- **VTA→ventral striatum 도파민**이 노력 동원(effort mobilization)·vigor·activation을 부호화. 도파민 저하는 "고노력-고보상" 회피·"저노력" 선호로 이동(Salamone).
- 도파민은 [[hamid-2016-mesolimbic-dopamine-signals-value-work|"일(work)의 가치"]]를 신호([[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation|motivation vs learning 이중 동역학]]).
- **들인 노력이 보상 도파민을 키운다(effort paradox의 국소 기전)**: [[touponse-2026-cholinergic-modulation-of-dopamine-release|Touponse 2026]] — 마우스가 같은 설탕물을 FR1→FR46으로 더 많이 일해 얻을수록 NAc core 보상 도파민이 커졌다. 이 증폭은 VTA 세포체 활동이 아니라 **NAc 콜린성 interneuron의 ACh → 도파민 축삭 α4/α6 nAChR**가 만든다([[concept-striatal-cholinergic-interneuron]]). 이 경로를 막으면 고노력 블록에서만 도파민과 보상 획득이 줄고 저노력 섭취는 그대로였다. ACh는 노력만, 도파민은 크기 + 노력을 싣는다.
  - 위 SV 식은 **앞으로 들 노력**을 비용으로 뺀다. Touponse는 **이미 들인 노력**이 보상 신호를 더한다는 결과다. 시점이 달라 모순은 아니지만, 사람 과제에서 "노력 후 보상의 주관 가치"를 따로 재야 한다는 설계 요구가 생긴다(연결 해석).
- 인슐린 수용체가 이 경로에 발현 → **대사상태가 effort 동기를 조율**(allostatic energy regulation): 대사 악화 시 에너지 절약 쪽 shift.

### 임상·transdiagnostic
- **apathy·anhedonia**(우울·조현병·파킨슨 등)의 공통 계산표지 = acceptance bias↓, effort discounting↑.
- **대사 축**: T2D·당뇨위험↑에서 acceptance bias↓([[mehrhof-2026-computational-phenotyping-of-effort]]), 정신증상과 평행하나 독립. GLP-1(semaglutide)로는 (단면적) 미회복.

## 관련 페이지
- [[mehrhof-2026-computational-phenotyping-of-effort]] — T2D effort acceptance bias↓·semaglutide 비회복(핵심 원전).
- [[hamid-2016-mesolimbic-dopamine-signals-value-work]] — 중변연 도파민 = 일의 가치(effort 동기 신호).
- [[touponse-2026-cholinergic-modulation-of-dopamine-release]] — 들인 노력이 NAc 보상 도파민을 키우는 국소 ACh–nAChR 기전과 그 차단 시 고노력 행동 감소(Nature 2026).
- [[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation]] — 학습 vs 동기(vigor) 도파민 동역학 분리.
- [[concept-need-motivation-pleasure-utility]] — NMPU Motivation/Utility 축의 계산적 구현.
- [[concept-dopamine-reward-system]] — effort·vigor의 도파민 기질.
- [[concept-anhedonia]] — anhedonia/apathy와 effort 편향 저하.
- [[concept-metabolic-interoception]] — 대사→동기(effort) shift의 상위 프레임.
- [[concept-glp-1]] — GLP-1이 effort 동기를 바꾸는지(반례) 검증 대상.
- [[holton-2026-the-adaptive-value-of-stubborn]] · [[concept-goal-commitment]] — **apathy = 이탈 실패(over-persistence)로도 나타남**: 특성 apathy가 행동 서열에 과도 지속, apathy↔충동성 상관. effort 과제에 switch/abandon 조건을 넣어 동기 결손과 감시 결손을 분리할 필요.
- [[kang-2011-dopamine-system-and-antipsychotic-drugs]] — 레버–설탕 vs 무노력 사료 선택 도식과 '의지(will) = tonic 도파민, 의욕(volition) = phasic 도파민' 가설.
- [[gong-2026-reward-magnitude-determines-reinforcement-learning]] — 노력(joystick 저항 2–20 g) 과제에서 큰 보상 끼워 넣기와 0.5 s DA 자극이 고부하 성공 학습을 빠르게 했지만 점근 활력(vigor)은 같았다.
- [[concept-will-volition-motivation]] — acceptance bias를 '의지' 첫째 뜻(대상 없는 기본 준비성, Kang의 will)의 정량 표지로 놓은 개념 hub.
