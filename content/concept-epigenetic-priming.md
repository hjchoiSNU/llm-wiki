---
title: Epigenetic priming (후성유전적 priming)
type: concept
created: 2026-08-15
updated: 2026-08-19
aliases: [epigenetic priming, chromatin priming, H3K4me1, SETD7, primed enhancer, latent gene expression, 잠재 취약성]
---

> [!takeaway] 연구 방향 관점의 핵심
> **"기저 상태는 정상인데 두 번째 자극이 오면 반응이 증폭된다"** — 초기 경험이 남기는 잠재적 취약성의 저장 매체를 크로마틴에서 찾는 개념. 실행 단위는 **허용적(permissive) 히스톤 변형**, 특히 primed enhancer 표지인 **H3K4me1**과 그 단일메틸화 효소 **SETD7**. 최형진 lab 관점: [[concept-early-life-adversity]]가 행동·회로 수준에서 기술해 온 "잠재 취약성"(평소 정상 → HFD·스트레스 노출 시 폭식 발현)에 **분자 수준의 저장 기전**을 제공하며, 개입 시점을 "발현 후"에서 **"priming 해제"**로 앞당길 수 있는지를 묻게 한다.

# Epigenetic priming (후성유전적 priming)

## 한 줄 요약
발달기 경험이 크로마틴을 더 열려 있고 반응하기 쉬운 상태로 남겨, **그 자체로는 유전자 발현을 바꾸지 않되 훗날의 자극에 대한 전사·생리·행동 반응을 증폭**시키는 분자 기억 기전.

## 핵심 내용

### 정의와 논리 구조
- 크로마틴은 발달·환경 신호에 동적으로 반응하는 **분자 기억의 기질**로 작동하며, 반복 자극에 대한 적응적 발현 반응을 촉진한다.
- 핵심은 **두 단계(two-hit) 구조**: ① 발달기 경험이 크로마틴 상태를 바꿔 놓는다(priming) → ② 기저 상태에서는 아무 표현형이 없다 → ③ 두 번째 자극(스트레스·고지방식 등)이 왔을 때 **반응의 크기·방향이 달라진다**.
- 따라서 **"잠재적 gene expression 변화"**(baseline 차이 없음, 2차 자극 후에만 드러남)라는 관찰과 직접 맞물린다.

### 표지 — 무엇이 "허용적"인가
- **H3K4me1**: 열린 크로마틴과 **primed/active enhancer**의 표지. Di/tri 메틸화(H3K4me2/me3, 주로 프로모터)와 구별.
- 그 밖의 permissive 표지: H3K4me3, H3K9Ac, H3K23Ac, H3K79me2, H4 아세틸화 다수, H2A.1 아세틸화/단일메틸화.
- 억제성 표지의 대표는 H3K27me3(polycomb). [[kim-2026-early-life-stress-alters-h3k4me1]]에서 ELS는 **H3K27–K36 영역을 바꾸지 않았다** — 변화가 억제 축이 아니라 허용 축에 몰렸다는 점이 "priming" 해석의 근거.
- 흥미로운 예외: ELS는 **H3K9me3·H3K36me2 같은 통상 억제성 표지도 증가**시켰다. H3K9/H3K36 메틸화의 공존이 배아줄기세포에서 미래 전사를 위해 enhancer를 "bookmark"한다는 가설이 있으나, **출생 후 뇌에서 같은 기능을 하는지는 미확인**.

### 효소 — SETD7 (SET7/9, KMT7)
- **H3K4를 단일메틸화만** 촉매하는 특이 효소(MLL1-4·SET1A/B가 연속적 di/tri를 하는 것과 대비).
- [[kim-2026-early-life-stress-alters-h3k4me1]]: ELS가 성체 VTA에서 **Setd7 ↑**·**Kmt2a(Mll1) ↓**; **성체 만성 스트레스로는 안 바뀜**(발달기 특이). Setd7은 VTA·흑질에 고발현이며 주로 도파민 뉴런.
- 바이러스 조작으로 **양방향 인과** 성립:
  - **Setd7-OE**(P14) → H3K4me1 34%↑(H3K4me3·H3K27Ac 불변) → 성체 스트레스에 대한 **전사 반응 방향 반전**(대조는 94% 하향 vs OE는 94% 상향), **도파민 뉴런 흥분성·I_h ↑**(비스트레스 상태에서는 무효), **사회회피·불안 취약성 ↑** — ELS 없이도 ELS 유사 표현형(**충분**).
  - **Setd7-KD**(ELS 후 P14) → H3K4me1 37%↓ → ELS의 도파민 흥분성 증가·행동 취약성 **차단**, resilient 비율 0%→33%(**필요**).
- 반대편 축: H3K4 **탈**메틸효소 **LSD1(Kdm1a)**은 성체 스트레스 반응에 관여 — 감소 시 Egr1·Fos 즉시조기유전자↓, 통증 과민 완화. → **H3K4 메틸화 조절은 전 생애에 걸친 스트레스 반응 축**.

### 방법론
- **Bottom-up LC-MS/MS 히스톤 질량분석**: 히스톤 tail을 분절해 개별 변형뿐 아니라 **같은 조각 내 조합 변형**(예: H3K9Ac-K14Ac)을 동시 정량. 항체 기반 ChIP가 놓치는 조합 상태를 잡는다.
- **바이러스 매개 epigenome editing**(효소 OE/KD): 빠르고 세포집단 지정이 가능하나, **H3K4me1이 게놈 어디에 놓이는지 통제할 수 없다**(이미 열린 영역에 편향될 가능성). 다음 단계는 **CRISPR-dCas9 기반 표적 epigenetic editing**.
- **읽어내기**: bulk RNA-seq(2차 자극 후 반응성 비교) + RRHO(rank-rank hypergeometric overlap)로 "priming이 스트레스 전사 반응의 방향을 뒤집는가"를 검정.

### 인접 개념 — 대사가 히스톤을 바꾸는 축
- 스트레스만이 히스톤 코드를 쓰는 게 아니다. 이 위키에는 **성상교세포→뉴런 젖산이 H3K9 젖산화를 유도**하는 대사–후성유전 축([[concept-astrocyte-neuron-lactate-shuttle]], [[du-2026-oral-glp1-receptor-agonist-promotes]])이 이미 있다.
- 모체 대사 상태가 자손 시상하부를 프로그램하는 축([[concept-maternal-programming-hypothalamus]])도 같은 문법의 산전 버전.

## 열린 질문 (연구 시사)
- **양의 방향으로도 priming이 되는가**: VTA 도파민 뉴런은 예상 밖의 혐오와 보상을 **둘 다** 부호화한다. H3K4me1 priming이 풍요·긍정 경험에 대한 민감성도 높인다면, 아동기 역경 경험자에 대한 **enrichment 개입**의 분자 근거가 된다(원 논문의 마지막 제안).
- **섭식으로의 이식**: [[shin-2023-early-adversity-promotes-binge-like-eating]]의 ELS→LH^Lepr 폭식 회로도 동일한 two-hit 구조를 갖는다. 그 회로에 **크로마틴 priming 층이 있는지는 이 위키의 자료 범위 내에서 검증되지 않았다** — 직접 물어볼 만한 공백.
- **개입 창(window)**: Setd7-KD가 **ELS 시작 후**(P14) 주입에도 효과가 있었다는 점은, priming이 이미 시작된 뒤에도 되돌릴 여지가 있음을 시사.

## 관련 페이지
- [[kim-2026-early-life-stress-alters-h3k4me1]] — 본 개념의 1차 출처(Neuron 2026, Peña·Creed lab).
- [[concept-early-life-adversity]] — 잠재 취약성을 행동·회로 수준에서 정의한 상위 hub.
- [[shin-2023-early-adversity-promotes-binge-like-eating]] — 같은 two-hit 구조의 섭식 버전(회로 저장).
- [[concept-dopamine-reward-system]] — priming의 무대(VTA 도파민 뉴런 흥분성·I_h).
- [[concept-astrocyte-neuron-lactate-shuttle]] — 대사 신호가 히스톤 변형을 쓰는 평행 축(H3K9 젖산화).
- [[concept-maternal-programming-hypothalamus]] — 산전 모체 프로그래밍(발달 programming 자매 축).
- [[concept-emotional-eating]] — priming된 스트레스 민감성이 임상적으로 발현되는 경로.
- [[concept-spatial-transcriptomics]] — 조직 내 분자 상태를 위치와 함께 읽는 상보적 방법론 hub.
- [[ochan-2026-dopamine-drives-persistent-remodelling-of]] — 같은 문법의 다른 변형: 산후 스트레스 → **도파민 동역학 변화 → H3 dopaminylation** → dHF 전사·행동의 지속 재편 (Nature 2026, Maze lab).
