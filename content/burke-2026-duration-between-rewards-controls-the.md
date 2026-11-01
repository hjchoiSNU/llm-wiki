---
title: "Duration between rewards controls the rate of behavioral and dopaminergic learning (Burke et al. 2026, Nature Neuroscience)"
type: paper
created: 2026-11-01
updated: 2026-11-01
source: "raw/2026 Nature Neuroscience. Duration between rewards controls the rate of behavioral and dopaminergic learning.pdf"
authors: [Dennis A. Burke, Annie Taylor, Huijeong Jeong, SeulAh Lee, Leo Zsembik, Brenda Wu, Joseph R. Floeder, Gautam A. Naik, Ritchie Chen, Vijay Mohan K. Namboodiri]
year: 2026
journal: "Nature Neuroscience (접수 2025-06-23, 채택 2026-01-13; 받은 PDF는 게재일이 'xx xx xxxx'로 비어 있는 온라인 선공개판); doi:10.1038/s41593-026-02206-2; OA CC BY 4.0; 자료 DANDI 001632, 코드 GitHub namboodirilab"
---

> [!takeaway] 연구 방향 관점의 핵심
> cue–보상 학습에서 **한 번의 보상이 가르치는 양은 보상 사이 시간(IRI)에 정비례**한다. 보상 간격을 10배 늘리면 10배 적은 시행으로 배운다. 그래서 30–600 s 범위에서는 **학습에 걸리는 총 시간이 시행 수와 무관하게 같았다**(20배 범위). 행동(예기 핥기)과 NAc core 도파민 cue 반응이 같은 규칙을 따랐다. 같은 시간 안에 짝짓기를 더 많이 해도 더 배우지 않는다. "시행(trial)이 경험의 기본 단위"라는 RL의 암묵 가정이 흔들린다. 저자는 이 규칙을 [[concept-anccr|ANCCR]]의 Bayes 정규화에서 유도했고, 비교한 TDRL·SOP 모델은 이 비례를 재현하지 못했다.
> 사용자 연구에 닿는 지점 셋. (1) **음식 cue 학습의 시간 단위**: 이 규칙은 보상 **종류별**로 적용됐다(초콜릿 우유를 사이에 끼워도 설탕물 학습 속도가 거의 유지됨, 단맛 액체끼리는 일부 일반화). 자주 먹는 간식과 가끔 먹는 음식이 cue를 다르게 가르칠 수 있다는 가설로 이어진다. (2) **불규칙·부분 보상이 보상당 학습을 키운다**: 보상 확률을 50%로 낮추면 IRI가 두 배가 되고 필요한 보상 수가 절반이 됐다. [[myers-2022-chronic-experience-with-unpredictable|Myers 2022]](불규칙 급식 → food reward↑)와 [[concept-food-insecurity|식품 불안정]] 모델을 해석할 새 축이다(연결 가설). (3) **실험·DTx 설계**: 같은 시간에 시행을 몰아넣어도 학습이 늘지 않는다. photometry 실험의 ITI 선택이 필요한 시행 수를 정하고, [[concept-digital-therapeutics|DTx]]의 보상 빈도는 횟수보다 간격이 중요할 수 있다.

# Duration between rewards controls the rate of behavioral and dopaminergic learning (Burke et al. 2026)

## 한 줄 요약
머리 고정 마우스의 청각 cue → 설탕물 trace conditioning에서 ITI만 30·60·300·600·3,600 s로 바꿨다. 학습까지의 시행 수는 IRI에 반비례했다(log–log 기울기 −1.06, R²=0.9992). 학습까지의 총 조건화 시간은 30–600 s에서 같았다. 시행 수·맥락 소거·청각 자극률·전체 보상률로는 설명되지 않았고, 부분 강화는 IRI를 늘려 보상당 학습을 키웠다. 회고적 인과 학습 모델 ANCCR이 이 비례를 원리적으로 유도한다.

## 핵심 내용

### 배경 — "많이 겪을수록 더 배운다"는 가정
- TDRL은 결정론적 cue–보상 환경에서 학습률을 자유 파라미터로 둔다. 시행 간격에 대한 수학적 규칙을 예상하지 않는다.
- 간격을 둔 학습이 효과적이라는 **간격 효과(spacing effect)** 는 널리 알려졌다. 대부분의 시연은 짧은 ITI(ITI:지연 < 10)의 "몰아치기"와 표준 ITI를 비교했고 정량 규칙은 내놓지 않았다. 메타분석에서 학습률이 "시행 간격/cue–보상 지연" 비에 비례한다는 제안(Gibbon & Balsam 1981, Gallistel & Gibbon 2000)이 있었지만 일반성은 논쟁 중이다.
- 세 가설: (1) 간격 효과 없음 → 학습 시행 수 일정, 총 시간은 ITI에 비례해 증가. (2) 정성적 간격 효과 → 시행 수 조금 감소, 총 시간은 여전히 증가. (3) **비례 관계** → 시행 간격 10배면 시행당 학습 10배, 총 시간 일정.

### Fig 1·ED1·ED2 — 10배 간격이면 1/10 시행으로 배운다
- **과제**: 물 제한(체중 85–90%) 머리 고정 C57BL/6J 암수. 0.25 s 12 kHz tone → 1 s trace → 15% 설탕물 2–3 µl, 이후 고정 3 s 소비 구간. 하루 ~1 h. 머리 고정·설탕물 사전 순응을 **하지 않았다**(무예측 보상 노출이 회고적 contingency 계산에 영향을 줄 수 있다는 가설 때문). 대부분 개체에게 첫 시행이 첫 설탕물 경험이었다. 분석의 "trial 1"은 보상 후 5 s 안에 처음 핥아 먹은 시행이다.
- 60 s ITI(하루 50시행) vs 600 s ITI(하루 6시행), 각 n=19.
- **학습 시점**: cue 유발 핥기의 누적합(cumsum)에 대각선을 긋고, 최대 거리의 75% 안에 처음 드는 시행을 "learned trial"로 잡았다(80–95%·최대 거리로 바꿔도 결론 같음).
  - 600 s: **8.8 ± 0.6시행**, 60 s: **94 ± 7시행**(P<0.0001).
  - 학습까지 **총 조건화 시간은 같았다**(P=0.70). 600 s군의 1시행은 학습 내내 60 s군의 10시행만큼의 가치였다.
- 점근 핥기(4.06 vs 3.80 Hz), cue 반응 확률, 변화의 급격성은 같았다. 단 60 s군은 **개체 간 분산이 더 컸다**(점근 핥기 P<0.01, 학습 시행 수 P<0.0001). 60 s군 2마리는 끝내 배우지 못했다. 저자 해석: 학습의 개체차 일부는 타고난 능력이 아니라 환경 요인이다.

### Fig 2·ED3·ED4 — 도파민 학습도 같은 비례를 따른다
- **NAc core dLight1.3b**(60 s n=5, 600 s n=7): cue 유발 DA는 훈련에 따라 생겼고 핥기보다 먼저 나타났다.
  - cue DA 출현: 600 s **3.6 ± 0.4시행** vs 60 s **36 ± 7시행**(P<0.05). 핥기보다 앞선 시행 수: 5.0 ± 0.7 vs 59 ± 7(P<0.01). 출현까지 총 시간은 같았다(P=0.41).
  - 출현 시점은 비례했지만, 점근에는 600 s군이 더 빨리 도달했다.
- **보상 DA는 초기 조건화 동안 증가**해 행동 출현 전에 최고에 이르렀다(ED4g,h). [[jeong-2022-mesolimbic-dopamine-release-conveys-causal|Jeong 2022]]의 관찰과 같다.
- DA 측정: cue 후 0.5 s AUC − 직전 0.5 s 기저. 개체별 **최대 보상 반응 3개 평균**으로 정규화했다(보상 반응이 초기에 커지므로 첫 반응이 아닌 최대값 사용).

### ED5 — 혐오 학습에도 같은 규칙
- 자유 이동 cue–충격 조건화(15 s tone, 2 s trace, 0.3 mA 1 s). 충격 간 간격(ISI) 45 s(하루 13시행, n=8) vs 135 s(하루 5시행, n=7), 3일.
- ISI 3배 → 얼어붙기 학습 시행 수 약 1/3(P<0.01). 학습까지 총 시간은 같았다.
- NAc core DA: cue 반응은 학습에 따라 커지는 **감소(dip)**, 충격 반응은 **양성**이었다(저자: 선행 결과 재현). DA cue 반응 출현도 같은 비례를 따랐다.

### Fig 3 — 30–600 s에서 학습률 ∝ IRI
- 30 s ITI(하루 100시행) vs 300 s ITI(하루 11시행), 각 n=6: 176 ± 36 vs 16.7 ± 4.1시행(P<0.05). 점근 핥기는 같았다.
- 네 군(30·60·300·600 s)의 log(학습 시행 수)–log(IRI) 기울기 **−1.06**(−1과 차이 없음, P=0.106; R²=0.9992). IRI = 평균 ITI + 4.25 s(시행 1.25 s + 소비 3 s).
- 도파민 학습의 기울기 −1.04(60·600 s 두 군). 네 군의 학습까지 총 시간은 통계적으로 같았다(P=0.94).

### Fig 4·ED6 — 극단 간격(3,600 s)에서는 비례가 깨진다
- 3,600 s ITI(하루 2시행, 세션 ~2 h, n=5): 비례 규칙은 1.3시행을 예측했지만 실제 **3.6시행**이었다(P<0.001). 그래도 600 s군보다는 유의하게 적었다. DA cue 반응은 약 2시행 만에 나타났다.
- **점근 cue DA**(최대 보상 반응 대비): 3,600 s **0.98** > 600 s **0.47** > 60 s **0.31**(각 비교 유의). 점근 핥기는 다르지 않았다. → 긴 IRI는 학습률과 점근 DA를 높이지만, 극단에서는 비례가 아니다.

### Fig 5·ED7 — 비례를 재현한 모델은 ANCCR뿐
- **유도(직관판; 정식은 Supplementary Note 1, PDF에 없음)**: ANCCR은 회고적 연합 M←cr("보상 앞에 cue가 얼마나 자주 있었나")를 Bayes식으로 전향적 연합 M→cr = M←cr · M←r− / M←c−로 바꾼다. 정규화가 비정상 환경에서 성립하려면 **분자·분모가 같은 과거 시간창**에서 계산돼야 한다(1 h 동안의 M←cr를 최근 1 min의 기저율로 나누면 안 된다).
  - 기저율 M←x−는 매 시간 단계(dt)마다 학습률 α0로 갱신된다. M←cr는 **보상 때만** 학습률 α로 갱신된다.
  - 두 시간창을 같게 놓으면 **α = 1 − (1 − α0)^(IRI/dt)** → 보상당 학습률이 IRI에 비례한다(작은 α0 근사). eligibility trace 시간상수도 **T = k × IRI**로 둔다.
- **비교**(30–3,600 s 조건을 실제 시행 수만큼 시뮬레이션, 각 20회; 파라미터 격자 탐색 후 RSS 최소 조합; AIC는 파라미터 수 벌점 없이 계산 → ANCCR에 불리한 보수적 비교):
  - **microstimulus TDRL**(ITI 상태도 가치를 얻어 간격 효과의 기전을 가짐): 가치·RPE 모두 비례 없음, 간격이 길수록 총 시간 증가(AIC 445.5).
  - **Wagner SOP**(비도파민 연합 모델, 간격 효과 설명 후보): 정성적 간격 효과만, 총 시간 증가(AIC 373.5).
  - **ANCCR**: 비례와 점근 DA cue 반응을 모두 재현하고 30–600 s에서 총 시간 일정(AIC 347.2; 최적 threshold 0.4, α0 4×10⁻⁵, k 0.5).
  - TDRL에 ANCCR에서 유도한 IRI 학습률(α = 1 − e^(−k·IRI))을 **임의로** 넣으면 행동은 근사했지만(AIC 352.7), 간격에 따른 총 시간 증가가 남고 점근 DA cue 반응을 재현하지 못했다. 저자: TD 갱신은 매 시간 단계에 일어나므로 IRI 비례를 줄 원리적 근거가 없다.

### Fig 6·ED8·ED9 — 네 가지 교란 배제
- **하루 시행 수·포만·하룻밤 공고화**: "60 s ITI-few"(ITI 60 s, 하루 6시행, 세션 ~6.5분, n=18)는 60 s군처럼 느렸다(trial 36–40 핥기 0.9 vs 600 s 3.7 Hz, P<0.0001; DA도 600 s보다 낮음). 포만이 같은 첫날 첫 6시행에서도 cue DA는 600 s군에서만 올랐다. 짧은 ITI군의 세션 내 소비 bout 길이는 일정했다.
- **맥락 소거**: 60 s ITI-few 뒤 ~55분 맥락에 더 머물게 해도(n=6) 60 s군처럼 느렸다. 군 안에서는 ITI 핥기가 많을수록 오히려 빨리 배웠다 → 맥락 소거가 주 원인이 아니다.
- **청각 자극률·재생(replay)**: 600 s 간격 사이에 보상 없는 CS−(3 kHz)를 ~60 s마다 넣어도(n=6) 600 s군처럼 빨리 배웠다(9시행). 저자는 이 결과가 "긴 간격 동안의 replay가 가상 시행을 제공한다"는 설명에도 반한다고 본다.
- **전체 보상률**: 600 s 간격 사이에 무단서 초콜릿 우유 2회를 넣으면(n=6) **12 ± 1시행**. 전체 IRI 예측(26.8)보다 훨씬 적고, 종류 특이 IRI 예측(8.5)·600 s군보다는 많았다 → **보상 종류별 IRI**로 학습률이 정해지고, 단맛 액체 사이에 약간의 일반화가 있다.

### Fig 7·ED10 — 부분 강화는 IRI를 늘려 보상당 학습을 키운다
- 100% 강화에서는 IRI와 cue 간 간격(ICI)이 같다. 이를 가르려고 ITI 60 s에 **보상 확률 50%**(IRI ~120 s, ICI 불변; n=10, 12일)를 줬다.
  - 행동 학습까지 **보상 45 ± 4회**. IRI 예측(43.8)과 같고 ICI 예측(91.2)·60 s군보다 유의하게 적다. 시행(cue) 수로는 87 ± 6으로 60 s군과 같았다.
  - DA 학습도 같은 방향: 보상 22 ± 3회(IRI 예측 17.8, ICI 예측 36.4).
  - **행동–도파민 해리**: 학습한 개체의 점근 핥기는 60 s군의 절반 이하(1.65 vs 4.5 Hz, P<0.01)였지만 cue DA는 같았다(0.28 vs 0.31). 행동상 비학습 개체 2마리도 cue DA는 생겼다 → 행동은 연합 증거의 **역치 통과**가 필요하고, cue DA가 학습의 더 민감한 측정치다.
- **10% 강화**(IRI ~600 s, n=10, 32일): 행동 학습 중앙값 16 보상(600 s군 8, 60 s군 89). cue DA는 중앙값 **5 보상** 만에 나타났다(600 s군 4, P=0.10).

### Fig 8 — 누락 dip은 cue 반응보다 훨씬 늦게 나타난다
- TDRL에서는 cue 반응과 보상 누락 dip이 함께 발달하거나, RPE가 시행 안에서 점진적으로 거꾸로 전파(backpropagation)되면 dip이 먼저 나타나야 한다. ANCCR에서는 연합이 역치를 넘은 뒤에야 누락이 의미 있는 사건이 된다.
- 50% 강화 군(n=6): cue DA는 누락 시행 **25 ± 4회** 뒤, 누락 dip은 **107 ± 15회** 뒤 나타났다(P<0.01). cue 반응이 점근의 95%(135회)에 이른 뒤에야 dip이 반최대(176회)에 도달했다 → 정형 TDRPE와 맞지 않는다. 저자도 보상 시점을 연합 뒤에 따로 배우는 TDRPE 변형은 설명할 수 있다고 인정한다.

### Discussion — 저자 해석
- 같은 시간 안에서 짝짓기를 늘려도 전체 학습이 늘지 않는다. "시행이 경험의 기본 단위"라는 가정을 재평가해야 한다. ANCCR은 실험자가 정의한 시행이 필요 없어 자연 환경 학습에 적합하다.
- **잠재 억제(latent inhibition)**: 보상만이 회고적 갱신을 일으킨다면 cue 단독 선노출의 학습 지연을 설명할 수 있는가? ANCCR에서 cue 선노출은 cue 기저율을 높여 회고적 contingency를 낮추므로 학습이 느려진다(ED10l 시뮬레이션).
- **시간척도 불변성과의 관계**: 100% 강화 자료는 시간척도 불변성(전체 시간축을 같은 배율로 늘리면 학습 시행 수 불변)과 대체로 맞는다. 그러나 **부분 강화가 보상당 학습을 비례적으로 늘린다는 결과는 시간척도 불변성과 이를 설명하려는 정보 이론적 설명과 맞지 않는다**(이들은 변화 없음을 예측). 보상이 촉발하는 정보 이론적 설명은 제안된 바 있다.
- **도파민 = 학습률 조절 계열**: Kutlu–Calipari–Schmajuk 모델(도파민 = 지각된 현저성 → 연합 가능성), Dudman lab 정책 학습 모델([[coddington-2023-mesolimbic-dopamine-adapts-the-rate|Coddington 2023]]), ANCCR 모두 도파민이 TDRPE 대신 **학습률을 조절**한다고 본다(학습률의 유일한 결정자는 아님). 그러나 IRI 비례를 설명하는 것은 ANCCR뿐이다.
- "연습이 완벽을 만든다"는 원칙에 도전한다. 기술 학습의 반복 의존성은 감각·운동 변별 요구(예: 440 vs 444 Hz)에서 올 것이라고 추측한다.

### 방법 요약
- 마우스 101마리, 13개 실험군. 성차는 가장 표본이 큰 60·600 s군에서 학습 시행 수 차이가 없어 합쳤다.
- dLight1.3b, NAc core(AP 1.3, ML ±1.4, DV −4.55), 편측. Doric 또는 pyPhotometry. 혐오 실험은 RWD 시스템.
- 4개 코호트에 걸쳐 10개월 동안 수집한 60·600 s군이 질적으로 같은 결과를 보였다(완전한 재현 실험은 없음). 수집 중 맹검 불가, 분석 중 비맹검(조직 확인만 맹검).
- 저자 기여: D.A.B.·V.M.K.N. 구상, A.T.·H.J. 시뮬레이션. 교신 Namboodiri(UCSF). 감사의 글에 C. R. Gallistel, J. Berke, G. D. Stuber, A. Mohebi 등.
- 이 논문은 [[gong-2026-reward-magnitude-determines-reinforcement-learning|Gong 2026]]이 ref 50으로 인용한 bioRxiv preprint "Reward timescale controls the rate of behavioural and dopaminergic learning"(Burke, Taylor, Jeong, Lee, Wu, Floeder, Namboodiri)의 게재판으로 보인다. 저자가 겹치고 주제가 같지만 제목이 바뀌어, 같은 연구라는 것은 위키의 추정이다.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **보상 종류별 시계**: 학습률이 종류 특이 IRI를 따른다면, 같은 간식을 자주 먹는 사람에게 그 간식 cue는 섭취당 적게 배우고, 드물게 먹는 음식은 한 번에 크게 배울 수 있다. 단맛 액체 사이의 부분 일반화는 "가공식품 간 감각 유사성"이 학습 시계를 공유하게 만드는지라는 질문으로 이어진다. 사람 자료는 위키에 없다.
- **불규칙성과 보상당 학습**: 50%·10% 강화에서 보상당 학습이 커졌다. [[myers-2022-chronic-experience-with-unpredictable|Myers 2022]]의 불규칙 급식(총량 동일) → palatable food 동기↑를 "보상 간격이 길어진 상태의 강한 학습"으로 읽을 수 있는지 시험할 만하다. Myers는 섭식 동기, Burke는 cue 학습이라 대상이 다르다.
- **보상 크기 vs 보상 간격**: [[gong-2026-reward-magnitude-determines-reinforcement-learning|Gong 2026]]은 같은 총량을 큰 보상으로 나누면 학습이 빨라진다고 보고했다. Burke는 크기가 아니라 간격만으로 보상당 학습이 바뀐다고 본다. DTx·행동 실험의 보상 스케줄은 **크기·간격·종류**를 따로 통제해야 두 효과를 가를 수 있다.
- **cue DA를 비교할 때의 주의**: 점근 cue DA가 IRI에 따라 3배 달랐다(0.31→0.98). [[pascoli-2026-conditioned-accumbal-dopamine-transients|Pascoli 2026]]처럼 cue DA를 주관적 가치로 읽는 연구를 시행 간격이 다른 조건끼리 비교하면 간격 효과가 섞일 수 있다.
- **NMPU**: [[concept-need-motivation-pleasure-utility|NMPU]]의 Pleasure(즉각 결과)가 회고적 교사 신호로 작동한다는 [[concept-anccr|ANCCR]] 해석에, "그 교사 신호의 강도가 같은 결과가 얼마나 드물게 오는지에 비례한다"는 정량 규칙이 붙는다.

## ⚠️ 위키 내 충돌·긴장 (병기 — 덮어쓰지 않음)
- **Jeong 2022 보충 S5와 부분 강화**: 위키의 [[jeong-2022-mesolimbic-dopamine-release-conveys-causal|Jeong 2022]] 페이지는 suppl. fig. S5를 "Gallistel & Gibbon 2000처럼 부분 강화에서 습득까지의 **보상 수 불변** — ANCCR 재현"으로 적는다. 이 논문은 실험에서 50% 강화가 습득까지의 보상 수를 **절반**으로 줄였다고 보고하고(시행 수는 불변), 보상 수 불변을 예측하는 이론(Gallistel & Gibbon)과 대비시킨다. 이 논문의 ANCCR은 학습률을 IRI에 비례시키는 판(α = 1 − (1 − α0)^(IRI/dt), T = 0.5 × IRI)이다. 2022판 파라미터는 고정 α = 0.02, T = 1.2 × 평균 IRI였다([[concept-anccr]]). 같은 모델 이름 아래 판이 다르다.
- **Gong 2026 숨은 표적 과제의 간격 혼입**: [[gong-2026-reward-magnitude-determines-reinforcement-learning|Gong 2026]]은 같은 총량을 5 µl × 180회 vs 100 µl × 9회로 나눠 큰 보상군이 강화 횟수 기준 ≥10배 빨리 배웠다고 보고한다. 이 설계에서는 세션당 보상 횟수가 20배 달라서 보상 간격도 크게 달라졌을 가능성이 높다(Gong에 IRI 자료는 없다). 그렇다면 Burke의 규칙만으로도 보상당 학습이 크게 빨라질 수 있다. 다만 Gong의 joystick·IBL·광자극 실험은 시행 간격을 유지한 채 크기만 바꿨고, Burke는 Pavlovian 과제다. Gong은 이 preprint를 "긴 ITI에서 cue 학습이 빠르다"의 근거로 직접 인용했다.
- **Grima 2026의 시간 대 방문 수**: [[grima-2026-a-global-dopaminergic-learning-rate|Grima 2026]]의 AQUA에서 학습률 α는 **방문 수**에 따라 감쇠하고, 마우스는 꼭지별 재충전 간격을 시간으로 추정하지 않고 확률을 추정했다. Burke에서는 보상당 학습률이 **시간 간격**에 비례한다. 과제(자유 foraging 선택 vs cue–보상 연합)와 "학습률"의 대상이 다르다.
- **학습 초기 보상 DA 추세**: 이 논문에서 보상 DA는 초기에 **증가**해 행동 직전에 최고였다(Jeong 2022 Test 1과 같음). [[grima-2026-a-global-dopaminergic-learning-rate|Grima 2026]]·Gong 2026은 감쇠, [[coddington-2023-mesolimbic-dopamine-adapts-the-rate|Coddington 2023]]은 유지·소폭 증가를 보고했다([[concept-dopamine-learning-rate]] §8의 기존 긴장에 자료 1개 추가).
- **"학습률"의 두 뜻**: [[concept-dopamine-learning-rate|Dudman lab 학습률 가설]]에서 학습률은 **도파민 신호의 크기**가 정한다. 이 논문에서 IRI 비례 학습률은 **알고리즘이 보상 간격에서 정하는 값**이다(도파민은 회고적 학습을 gating). 저자는 두 계열을 "도파민 = 학습률 조절"로 묶지만, IRI 비례를 설명하는 것은 ANCCR뿐이라고 본다.
- **cue DA와 행동의 해리**: 부분 강화에서 cue DA는 같고 핥기만 줄었다. [[gong-2026-reward-magnitude-determines-reinforcement-learning|Gong 2026]] fig. S6(cue DA는 빨리 배웠으나 행동은 같음), [[coddington-2023-mesolimbic-dopamine-adapts-the-rate|Coddington 2023]] ED4(cue DA를 키워도 그 시행 핥기 불변)와 같은 방향이다. "cue DA = 행동 학습의 판독치"라는 가정을 쓰는 페이지에 적용할 때 주의한다.

## 원문 내 불일치·주의 (기록)
- Methods: 3,600 s ITI군 "n = 5; … 3 F/3 M"(합이 6).
- 본문 Fig 7e 수치: 정규화 DA 값(0.28 ± 0.04)에 "Hz" 단위가 붙어 있다.
- Fig 6i·6l 범례: "\*\*\*P < 0.01"(별표와 P 기준 불일치).
- 수술 시 나이: Methods ">7.5주(중앙 9주)", reporting summary ">8주(중앙 9.5주)". 제외 기준이 가리키는 그림 번호도 둘이 다르다(Methods "Figs. 7c, 8d–f" vs summary "Fig. 6c,n-p").
- 참고문헌 57·58 줄이 추출 중 섞였다(57 Kutlu 등, 58은 초파리 연구).
- Supplementary Note 1(정식 유도)과 Supplementary Table 1(전체 통계)은 PDF에 없다.

## 위키에 없는 것 (자료 없음)
- Gallistel & Gibbon 2000, Gibbon & Balsam 1981, Harris & Gallistel 2024(정보 이론 계열) — 원전 없음.
- Floeder 2025 *eLife*(도파민 ramp가 환경 시간척도를 반영, ref 72), Amo 2022(점진적 시간 이동, ref 48), Kalmbach 2022, Sharpe 2020, Carter 2024, Mah 2024(학습률과 무관한 RPE) — 원전 없음.
- 사람·음식 보상에서 IRI 비례 규칙을 시험한 자료.

## 관련 페이지
- [[jeong-2022-mesolimbic-dopamine-release-conveys-causal]] — ANCCR 원전. 이 논문은 같은 lab의 후속으로, ANCCR의 Bayes 정규화에서 IRI 비례 학습률을 유도했다.
- [[concept-anccr]] — 개념 hub. 학습률·trace 시간상수의 IRI 스케일링(T = k × IRI, α ∝ IRI).
- [[concept-reward-prediction-error]] — TDRL RPE vs ANCCR 판별표(누락 dip의 출현 순서, IRI와 학습 속도).
- [[concept-dopamine-learning-rate]] · [[coddington-2023-mesolimbic-dopamine-adapts-the-rate]] · [[grima-2026-a-global-dopaminergic-learning-rate]] — "도파민 = 학습률" 계열과 다른 의미의 학습률.
- [[gong-2026-reward-magnitude-determines-reinforcement-learning]] — 보상 크기 효과. 이 논문의 preprint를 인용하고, 숨은 표적 과제에서 간격 혼입 가능.
- [[gershman-2024-explaining-dopamine-prediction-errors-beyond]] — RPE 논쟁 리뷰. 이 논문은 trial 기반 RL 틀 자체를 문제 삼는다.
- [[chen-2021-neuromodulation-a-model-for-dopamine]] — Kutlu–Calipari–Schmajuk(지각된 현저성) 모델. 저자가 "도파민 = 학습률 조절" 계열로 묶은 모델.
- [[hamid-2016-mesolimbic-dopamine-signals-value-work]] · [[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation]] — 저자가 TDRPE 바깥의 도파민 근거로 인용(ref 60, 34).
- [[pascoli-2026-conditioned-accumbal-dopamine-transients]] — cue DA = 주관적 가치. 시행 간격이 다른 조건 비교 시 주의.
- [[myers-2022-chronic-experience-with-unpredictable]] · [[concept-food-insecurity]] — 불규칙 급식과 보상당 학습 증가의 연결 가설.
- [[concept-digital-therapeutics]] — 보상 스케줄 설계(횟수보다 간격).
- [[overview-dopamine-roles-by-striatal-region]] — NAc core ANCCR 칸.
- [[concept-need-motivation-pleasure-utility]] — Pleasure의 회고적 교사 신호 해석에 정량 규칙 추가.
