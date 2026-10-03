---
title: "Garret D. Stuber"
type: person
created: 2026-10-03
updated: 2026-10-03
aliases: [Stuber, Garret Stuber, Stuber lab]
---

> [!takeaway] 연구 방향 관점의 핵심
> Stuber lab은 사용자 lab과 **같은 구조(외측시상하부)에서 같은 질문(동기·소비)** 을 다루되, 축이 하나 다르다 — **"어떤 LH 세포가 섭식을 켜는가"가 아니라 "LH가 하류 도파민계에 무엇을 보내는가"**. 2013–2016년에 **LHA^GABA→VTA(섭식 촉진) / LHA^Glut→LHb(혐오·억제)** 라는 지금의 교과서 구도를 세운 그룹이고, 2026년에는 그 구도를 **"두 집단의 비가 선조체 전역 도파민 지형을 세운다"** 로 다시 썼다([[gordon-2026-lateral-hypothalamic-control-of-the|Gordon 2026]]). 사용자에게 실질적인 접점 셋: (1) **머리고정 다중-spout 미각 과제(OHRBETS)** 라는 오픈소스 행동 플랫폼 — 가치와 운동을 분리하는 설계가 NMPU 검증에 바로 쓰인다. (2) [[stuber-2025-the-neurobiology-of-overeating|과식 리뷰]]에서 사용자 lab의 **medial(Need)/lateral(Motivation) 분해를 인용·채택**했다 — 이미 열려 있는 인용 채널. (3) **Daniela Witten(통계)·Nick Steinmetz 등과의 상시 협업** 구조가, 다중 광섬유·GLM·permutation 검정 같은 분석 인프라를 논문마다 재사용하게 만든다.

# Garret D. Stuber

## 한 줄 요약
University of Washington(Seattle)의 신경과학자. **Center for the Neurobiology of Addiction, Pain, and Emotion(NAPE)** 소속으로 마취통증의학과·약리학과 겸임. 시상하부–중뇌–선조체를 잇는 **동기·보상·혐오 회로**를 세포타입·투사 특이 도구(광유전·화학유전·다중 fiber photometry·단일세포 전사체·holographic 자극)로 해부한다.

## 핵심 내용

### 1. LHA 세포타입 → 하류 회로 분업 (분야의 표준 구도를 만든 라인)
- **LHA GABA성 뉴런의 억제 회로 구조가 섭식을 조직**한다 (Jennings, Rizzi, Stamatakis, Ung & Stuber, Science 2013).
- **LHA 글루타메이트 뉴런 → 외측고삐핵(LHb)** 투사가 섭식·보상을 조절(Stamatakis …, Stuber, J Neurosci 2016); LHb→중뇌 입력 활성이 회피를 만든다(Stamatakis & Stuber, Nat Neurosci 2012).
- **LHA^Glut 내부의 전사·기능 분기**: LHb 투사 집단과 VTA 투사 집단이 서로 다르다(Rossi …, Deisseroth, Stuber, Neuron 2021).
- 종설: **Stuber & Wise, "Lateral hypothalamic circuits for feeding and reward", Nat Neurosci 2016** — 위키의 [[concept-lateral-hypothalamus|LH]] 서술 상당 부분의 원류.
- 2026: [[gordon-2026-lateral-hypothalamic-control-of-the|Gordon et al., Neuron]] — **LHA^GABA/LHA^Glut의 "비"** 가 가치·valence를 연속 변수로 싣고, 선조체 **전후축 도파민 지형**을 인과적으로 세운다. LHA를 "먹을지 말지의 스위치"에서 **"도파민을 어디에 배치할지의 통제기"** 로 재정의.

### 2. 피질–중뇌 도파민의 인지 유연성
- [[hjort-2026-prefrontal-to-ventral-tegmental-area|Hjort et al., Nature 2026]]: mPFC↔VTA 도파민 루프가 **contingency degradation**을 **meta-RPE**(RPE의 rolling-gain)로 표상·구동. holographic SLM 광유전으로 ensemble 인과 검증.
- 그 이전: OFC 뉴런이 행동 적응을 이끄는 **장기 기억**을 획득·유지한다(Namboodiri …, Stuber, Nat Neurosci 2019) — ANCCR 라인([[jeong-2022-mesolimbic-dopamine-release-conveys-causal|Namboodiri]])과 인적 계보가 겹친다.

### 3. 과식·중독의 회로 모델
- [[stuber-2025-the-neurobiology-of-overeating|Stuber, Schwitzgebel & Lüscher, Neuron 2025]]: 과식을 **약물중독의 시냅스 가소성 회로 모델**로 해석하되 **"food addiction"은 신경생물학적으로 미입증**이라 신중해야 한다고 명시. 사용자 lab의 [[kim-2024-normative-framework-dissociates-need|Kim 2024 Sci Adv]](AgRP=Need / LH^LepR=Motivation)를 본문에서 비중 있게 인용.
- 종설: Gordon-Fennell & Stuber, *Illuminating subcortical GABAergic and glutamatergic circuits for reward and aversion*, Neuropharmacology 2021.

### 4. 도구·플랫폼
- **OHRBETS**(Open-Source Head-fixed Rodent Behavioral Experimental Training System): Arduino 기반 머리고정 operant·consummatory 플랫폼, 5-spout 회전 헤드로 **용액 정체를 모르는 상태에서 핥아야 알게 하는** brief-access 과제를 구현(Gordon-Fennell …, Roitman, Stuber, eLife 2023). 설계·조립 공개.
- **다중 fiber photometry**(한 마리에 6–10개 광섬유) + **GRAB 센서** + 세포타입 특이 opsin의 조합을 표준 작업 흐름으로 쓴다.
- **통계 협업**: [[gordon-2026-lateral-hypothalamic-control-of-the|Gordon 2026]]·[[hjort-2026-prefrontal-to-ventral-tegmental-area|Hjort 2026]] 모두 **Daniela Witten**(UW 생물통계) 그룹과 공저 — GLM 설계, circular-shift permutation 영분포, 교차검증이 논문 간 재사용된다.

## 사용자 lab과의 접점
- **구조 겹침**: LHA GABA/Glut. 사용자 lab은 **LH^LepR**([[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]])·**NHP 화학유전**([[ha-2024-hypothalamic-neuronal-activation-non-human|Ha 2024]])으로, Stuber lab은 **전달물질 정체 × 하류 도파민 지형**으로 접근 — 같은 구조의 **보완적 좌표계**.
- **인용 채널이 이미 열려 있다**: [[stuber-2025-the-neurobiology-of-overeating|Neuron 2025 리뷰]]가 NMPU의 need/motivation 분해를 채택.
- **방법 수입 후보**: OHRBETS 과제 설계, lick kernel GLM, trial *n* 신호 → trial *n+1* 행동 로지스틱 회귀, 전후축 다점 photometry.
- **같은 대학 인접 그룹**: [[person-soden-marta|Marta Soden]] lab의 [[sumarli-2026-multidimensional-control-of-ingestive-behavior|LH^Nts 연구]]에 Stuber가 공저로 참여 — 동일 과제 플랫폼에서 세포타입별 변수 분업을 비교할 수 있는 드문 조건.

## 관련 페이지
- [[gordon-2026-lateral-hypothalamic-control-of-the]] — 교신저자. LHA ratio → 선조체 도파민 지형 (Neuron 2026).
- [[hjort-2026-prefrontal-to-ventral-tegmental-area]] — 교신저자. mPFC→VTA meta-RPE (Nature 2026).
- [[stuber-2025-the-neurobiology-of-overeating]] — 제1저자. 과식의 중독 회로 모델 (Neuron 2025).
- [[sumarli-2026-multidimensional-control-of-ingestive-behavior]] — 공저(Soden lab). LH^Nts 다차원 섭취 조율.
- [[concept-lateral-hypothalamus]] — 주 연구 구조.
- [[concept-striatal-dopamine-gradient]] — 2026년 기여가 만든 개념 hub.
- [[concept-dopamine-reward-system]] · [[concept-nucleus-accumbens]] — 하류 표적.
- [[person-luscher-christian]] — 과식 리뷰 공저자; 중독 시냅스 가소성 모델의 상대편 축.
- [[person-soden-marta]] — 같은 대학(UW)·같은 행동 플랫폼의 인접 lab.
- [[person-korotkova-tatiana]] · [[person-knight-zachary]] · [[person-sharpe-melissa]] — LH·시상하부-중뇌 동기 회로의 경쟁·보완 라인.
- [[person-choi-hyung-jin]] — 사용자 lab(인용 관계 성립).
