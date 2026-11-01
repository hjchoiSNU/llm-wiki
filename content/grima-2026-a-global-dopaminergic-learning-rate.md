---
title: "A global dopaminergic learning rate enables adaptive foraging across many options (Grima et al. 2026, Neuron)"
type: paper
created: 2026-11-01
updated: 2026-11-01
source: "raw/1-s2.0-S0896627326002795-main.pdf"
authors: [Laura L. Grima, Yipei Guo, Lakshmi Narayan, Ann M. Hermundstad, Joshua T. Dudman]
year: 2026
journal: "Neuron 114:3443–3458 (2026-09-16; 온라인 2026-05-08; 접수 2025-01-27, 채택 2026-04-07); doi:10.1016/j.neuron.2026.04.010; OA CC BY"
---

> [!takeaway] 연구 방향 관점의 핵심
> **학습 초기 NAc core 도파민은 "무엇이 좋은가"(선택지별 RPE)가 아니라 "지금 얼마나 빨리 배울까"(모든 선택지에 공통인 전역 학습률 α)를 싣는다.** 무경험 마우스를 2 m 경기장의 6개 물 꼭지(보상률 최대 80배 차이)에 풀어 놓으면, 3시간 안에 보상 비율에 맞춰 선택을 배분(matching)하고 omniscient 수준에 근접한다. 이를 재현하는 모델 **AQUA**의 핵심은 방문마다 지수적으로 감쇠하는 **전역 학습률 α(τ)** 다. NAcC DA 보상 반응은 선택지 질과 무관하게 **모든 꼭지에서 같은 속도로 감쇠**해 α(τ)와 겹친다. 회귀 dropout에서도 RPE보다 α가 더 많이 설명한다. 반면 DMS DA는 어느 쪽과도 맞지 않는다. 일부 꼭지에서만 보정 광자극을 주면 학습률의 전역 일관성이 깨져 선택이 치우치고, 모든 꼭지에서 주면 환경 변화 후 회복이 빨라진다. 둘 다 모델 예측대로였다.
> 사용자 연구에 닿는 지점 셋. (1) **섭식 탐색(foraging) 학습의 계산 틀**: 위치·거리 비용을 가진 다중 먹이원 선택을 stay/leave(MVT)와 Q-learning을 합친 모델로 기술한다. LH·VTA 회로를 "탐색 과제"로 조작할 때 쓸 수 있는 행동 판독치(matching sensitivity, 36-전이 행렬)를 제공한다. (2) **포만이 학습률을 낮출 것**이라는 저자 추측(STAR model discussion A)은 NMPU의 Need가 학습 속도를 조절한다는 가설로 이어진다. 사용자 lab의 금식·포만 조작으로 바로 검증할 수 있다(연결 가설). (3) 학습률(α, 곱셈·부호 없음) vs RPE(δ, 덧셈·부호 있음)를 **D1 SPN = α(보상 burst) / D2 SPN = β(누락 pause)** 로 구현하는 기전 제안은, 섭식 회로의 D1/D2 MSN 조작 결과를 해석하는 다른 틀이 된다. ⚠️ 저자도 광유전 결과만으로는 학습률과 RPE를 **확정적으로 구분할 수 없다**고 Limitations에 적었다.

# A global dopaminergic learning rate enables adaptive foraging across many options (Grima et al. 2026)

## 한 줄 요약
6개 선택지 자유 foraging 과제(**FoMO**)에서 무경험 마우스는 수십 분 만에 보상 비율 matching을 배운다. 그 학습은 **stay/leave 분리 + 거리 가중 효용 + 지수 감쇠하는 전역 학습률**을 가진 RL 모델(AQUA)로 정량 재현된다. NAc core 도파민 보상 반응은 RPE보다 이 **전역 동적 학습률**과 일치하고, 보정된 VTA DA 자극은 모델 예측대로 학습을 양방향으로 바꾼다.

## 핵심 내용

### 배경
- 고전 foraging 이론(Charnov의 **marginal value theorem, MVT**)은 "머물 것인가 떠날 것인가"를 핵심 결정으로 본다. 그러나 환경 통계에 대한 사전 지식을 가정하므로 실험실에서 MVT에 맞는 행동을 보려면 긴 훈련이 필요했다.
- RL 모델은 선택지 질의 running estimate를 갱신해 시행별 예측을 만든다. midbrain DA phasic 활동 = TD의 RPE라는 연결도 이 틀에서 나왔다. 그러나 대부분 **훈련된 동물의 이지선다**에서 검증됐다.
- 다선택지(>2)는 모델 판별력이 높고, 복잡한 환경에서 동물이 역설적으로 더 빨리 배우는 현상(Rosenberg 2021 미로)을 활용할 수 있다. 무엇보다 **선택지별 갱신(국소)** 과 **모든 선택지에 공통인 변수(전역)** 를 대비할 수 있다.

### Fig 1 — FoMO: 무경험 마우스가 6개 선택지를 빠르게 배운다
- 213×45 cm(~2 m) 반암실 경기장의 벽에 6개 핥기 꼭지를 배치했다. 3시간 세션이 하루 물의 유일한 공급원이었다. 각 꼭지는 **결정론적·무cue 간격**(최선 30 s ~ 최악 2,400 s)으로 4 µl 보상이 재충전된다. 보상은 **누적되지 않아** 놓치면 사라지고(기회비용), 세션당 최대 ~700개다. 공간 배치는 두 가지(config 1·2).
- 이동 gantry 카메라가 폐루프로 마우스를 따라가며 궤적을 기록하고 photometry 광섬유를 함께 옮긴다.
- 세션 1: 방문 ~800(±360 SD)회, 보상 ~350(±105)개. 세션 2: 보상 ~430(±58)개.
- 누적 보상이 무작위 정책과 갈라지는 시점은 대부분 **60분 안(보상 방문 ~50회)** 이었다. 이 시점은 6개 꼭지를 모두 발견한 시간과 상관했다(Spearman ρ=0.62, p<0.004). win-stay lose-shift(WSLS)는 무작위보다 별로 낫지 않았다. 일부 개체는 첫 세션에 이미 omniscient 시뮬레이션(경험적 방문 시점에 보상이 있는 꼭지를 고르는 상한)의 수익률에 근접했다.
- KL divergence 비(무작위 대비 omniscient 유사성)로 보면 다수가 세션 1에, 나머지는 세션 2에 omniscient 쪽으로 넘어갔다.

### Fig 2·S2–S5 — matching, 거리 민감성, 시간 추정 안 함
- 무작위 같은 초기 표집 뒤, 방문을 보상 일정의 순위대로 배분하는 **matching**을 보였다. 초기에는 **undermatching**(종간 공통 관찰)이었고, 경험에 따라 세션 안·세션 간 모두 완전 matching에 가까워졌다.
- 꼭지 간 **물리적 거리에 민감**했다. 6개 선택지가 아니라 **36개 전이(transition)** 의 집합으로 과제를 다뤘고, 현재 위치에 조건화한 matching은 완전 matching에 더 가까웠다. 보상률 최대화 전이 정책 시뮬레이션이 조건부 matching을 재현했다 → near-optimal 전략.
- 꼭지별 간격을 **시간으로 추정하지 않았다**. 경험한 보상률은 실제보다 변동이 컸고, 방문 시점이 결정론적 일정과 맞지 않았다. 같은 평균 확률의 **확률 일정** 변형(n=4)에서도 학습·선택이 구분되지 않았다 → 마우스는 보상 **확률**을 추정했다.
- (STAR behavior discussion A) 거리 효과는 비선형이었다. 이동 경로 길이는 첫 세션 안에서 줄었지만 둘째 날 다시 늘었다 → **matching이 경로 최적화보다 먼저 나타난다**.

### Fig 3 — AQUA 모델
**AQUA = Adaptive rate Q-learning of Utilities for Apportioning actions**. 구성 요소 넷:
1. **stay 확률을 따로 추정**: 같은 꼭지에 머무는 경우의 보상 확률을 별도로 갱신한다(MVT의 stay/leave).
2. **선택지별 보상 확률 running estimate**: `P(R|O_N)_t = α(τ)·R_t + (1−α(τ))·P(R|O_N)_{t−1}`. 이 식은 RPE 항을 쓰는 형태 `P_{t−1} + α(τ)·(R_t − P_{t−1})`와 **대수적으로 동치**다. 창 크기 ~1/α의 이동 표본평균에 해당한다.
3. ★ **전역 동적 학습률**: α(τ)는 **총 방문 수 τ**에 따라 지수 감쇠하고(α_peak·α_τ·α_offset), **모든 선택지가 공유**한다. 확률적 경사하강으로 최적 α(τ)를 찾았더니 지수 감쇠형이 최적이었다(fig. S7). 선택지별(국소) 학습률은 옵션 질 추정에 **편향**을 만든다(fig. S6). 큰 값에서 작은 값으로 이완하는 학습률은 머신러닝의 ADAM, Atari DQN의 explore→exploit 전환과 같은 성질이다.
4. **거리 비용**: Fitts 법칙형 `D = (distance/2)^Θ`(대부분 Θ≈1이라 사실상 고정). 선택은 `P(R|O_N)/D` = **효용**에 비례하는 표집기(ε=0.1)로 정한다. 저자는 거리 가중이 노력 비용이라기보다 먼 목표에 정확히 도달하는 **항법 비용**일 수 있다고 추측한다.
- 성능: 36차원 전이 행렬 분산의 다수를 설명했다(세션 2 r² = **74.8±8.2%**, ~20마리). 세션 내·세션 간 undermatching과 그 감소, 초기 vs 안정기 변화, GLM 계수 구조와 교차검증 정확도까지 마우스와 구분되지 않았다. 표준 Q-learning·WSLS·무작위·omniscient보다 전이 행렬 설명력과 총 보상 예측이 가장 좋았다.
- 확장(fig. S15): 고갈형 patch에서 **MVT 같은 행동**을 보이고, 이지선다 bandit에서 matching을 재현한다. 시간 경과나 보상률 추정 없이도 MVT 같은 예측이 나온다.

### Fig 4·S8–S14 — NAcC DA는 AQUA의 전역 학습률을 반영한다
- 기록: DAT-cre에 **GCaMP8m**(VTA/SNc 말단 칼슘) 또는 WT에 **dLight1.3b**(방출)를 쓰고 **NAc core(NAcC)·DMS**에서 쟀다. 두 방식의 신호가 비슷해 합쳐 분석했다.
- 두 부위 모두 보상 방문에 강하게 반응했다. Pavlovian에서는 누락 반응이 학습 후기에야 천천히 생기는 반면, 여기서는 **학습 가장 초기부터 뚜렷한 누락 dip**이 나타났다.
- ★ 세션 1에서 보상 반응은 **선택지의 객관적 질(보상률 최대 80배 차이)에 따른 순위 scaling이 없었다**. 최선·최악 꼭지 반응이 거의 겹쳤다. 질에 따라 선택을 배분하기 시작한 뒤로 한정해도 같았다. 경험한 보상률(주관적 질 추정)과도 일관된 상관이 없었고, 확률 일정에서도 마찬가지였다(fig. S10–S11). 훈련된 동물에서 DA가 선택지 가치를 부호화한다는 기존 관찰(Lak 2016)과 다르다. 저자는 그런 상관이 **장기 훈련 뒤에야** 나타날 수 있다고 본다.
- ★ NAcC 보상 반응 크기는 **방문 수에 따라 모든 선택지에서 비슷한 속도로 감쇠**했다. AQUA의 지수 감쇠 α(τ)와 닮은 모양이다. 비보상 dip도 선택지 질 순서를 대략 따르며, 세션 초에 가장 깊고 경험에 따라 얕아졌다.
- 이 감쇠는 세션 동안의 engagement 변화와 해리됐고(fig. S13), bleaching으로도 설명되지 않았다(fig. S14).
- 전 방문 회귀: NAcC에서 **보상 여부는 큰 양의 영향, 선택지 질은 영향 없음**. 행동 예측변수 중에는 학습 단계(무작위 기간 이후)만 유의했다(반응 감소, 특히 세션 1).
- ★ 보상 방문 GLM에 AQUA의 **α 예측변수와 RPE 예측변수를 함께** 넣었다(두 식이 대수적으로 동치라 둘 다 뽑을 수 있다). NAcC는 둘 다로 어느 정도 예측됐지만, **dropout에서 α를 빼면 RPE를 뺄 때보다 교차검증 설명분산이 더 크게 줄었다**(세션 1·2 모두; α만 유의, p=0.02, BH 보정). 확률 일정 기록에서도 확인됐다(fig. S11D).
- DMS: 어느 예측변수를 빼도 설명력이 거의 변하지 않았다. 이동 중 DMS 반응이 NAcC보다 **공간적으로 더 넓게 분포**했다(fig. S12D). 저자는 DMS DA가 꼭지 사이 이동의 운동 측면을 조절할 수 있다고 추측한다(미검증).
- **"α == DA"**: NAcC 보상 반응을 α(τ)와 같은 매개함수로 개체별 적합해 그 파라미터로 AQUA를 돌리면, 최적 적합 α(τ)와 **동등하게** 행동을 설명했다(Fig. 4G–H).

### Fig 5 — 보정된 VTA DA 광자극이 모델 예측대로 학습을 바꾼다
- DAT-Cre::Ai32(n=7), 양측 VTA 광섬유. 30 Hz × 5 pulse = **150 ms**, ~2 mW/측([[coddington-2023-mesolimbic-dopamine-adapts-the-rate|Coddington 2023]] 파라미터). 사전 보정 세션에서 NAcC dLight로 **보상 DA 과도반응이 약 2배**가 되도록 LED 출력을 맞췄다.
- **실험 1 — 국소 교란**: 최악 4개 꼭지의 보상 방문에서만 자극했다. 선택이 그 꼭지들로 치우쳤고, 시간이 지나며 **matching 민감도가 손상**됐다. 4개 꼭지의 학습률 감쇠만 늦춘 AQUA 시뮬레이션과 정량적으로 일치했다(Mann-Whitney). 몇 배의 학습률 변화도 보상을 더하는 효과보다 **미묘한 편향**만 만든다는 예측과 맞았다.
- **실험 2 — 전역 증강**: 환경 변화(contingency change) 뒤 **모든 보상 방문**에서 자극했다. **선택 민감도 회복이 빨라졌다**. Discussion은 이를 "학습률 감쇠를 늦춰 회복을 가속"한 것으로, AQUA 예측과 같다고 서술한다.
- 저자 결론: 이 단계의 무경험 학습은 중변연계 DA에 의존한다. Pavlovian 초기 학습 궤적을 보정 DA 자극이 양방향으로 바꾼다는 선행 결과(Coddington 2023)와 정합한다.

### Fig 6 — 날마다 바뀌는 환경: 마우스·AQUA·NAcC DA가 함께 추적
- config 1 마우스에게 세션 3–5에서 꼭지별 질 배정을 바꿨다. 마우스와 AQUA 모두 matching을 유지하며 빠르게 적응했고, 선택 확률 변화(KL)는 세션 3의 **첫 ~50 방문 안에서 최고**였다.
- NAcC DA 보상 반응은 매 세션 초에 높았다가 감쇠했다. **세션 2→3 전환(질 변화)에서의 상승이 모든 마우스에서 특이적으로 신뢰할 만했다.** 1→2(변화 없음)와 4→5(작은 변화)에서는 그렇지 않았다.
- 그러나 **꼭지별 기대–결과 불일치(국소 오차)는 DA에 나타나지 않았다**. 이전에 좋던 꼭지의 보상 반응이나 누락 dip이 차등적으로 변하지 않았다 → DA는 국소 불일치보다 **환경 전체의 전역 변화**를 반영한다.
- 높은 학습률은 선택을 최근 보상 이력에 민감하게(=더 가변적으로) 만든다. 예측 순위는 세션 2 후반(α 낮음·안정) < 세션 2 초반(α 상대적으로 높음) < 세션 3 초반(α 높음 + 질 변화)이다. α를 스케일한 시뮬레이션이 이 순위를 확인했고, **α 대신 관찰된 DA 반응을 넣어도** 같은 상관이 성립했다(Fig. 6G).

### Discussion·STAR model discussion — 저자의 해석과 기전 제안
- FoMO의 학습은 이지선다 연구보다 **최소 한 자릿수 빠르다**. MVT만으로도, 고정 소학습률 RL만으로도 이 속도를 설명하지 못한다. 동적 학습률이 빠른 초기 개선과 이후 안정을 함께 만든다.
- **재분석**(fig. S16): 잘 훈련된 쥐의 3선택지 탐색 데이터(Krausz 2023)에서도 보상 반응 감소 성분이 RPE 상관만큼 NAcC DA 분산을 설명했다. 저자 해석: **DA는 경험이 쌓이며 점점 선택지별 RPE를 반영하게 되지만, 무경험기에는 주로 학습률과 상관하고 이를 매개한다.** RPE 상관 없이도 빠른 DA 의존 학습이 일어날 수 있다.
- **Limitations**: (1) AQUA의 상태공간은 인지 그래프 같은 간결한 표상이다. cue→지연 보상 구조를 쓰는 TD 모델이나 회고적 정보를 쓰는 틀([[concept-anccr|ANCCR]] 계열)이 cue–보상 구조 없는 환경에 어떻게 적용될지는 불명이다. 대안 상태 표상이 접근 중 DA나 DMS 신호를 더 설명할 수도 있다. (2) **광유전 결과는 학습률 설명과 정합하지만, 그것만으로는 학습률과 RPE를 확정적으로 구분하지 못한다**(특히 가치→행동 사상이 비선형일 때). 다만 내인성 NAcC DA는 정준 RPE 모델과 강하게 불일치했다.
- **감쇠 기전 후보**(model discussion A): 경험에 따라 줄어드는 새로움 반응, VTA로 단시냅스 투사하는 전전두의 환경 변동성 상관 활동, 보상 수거 중 감각운동 입력 변화, **포만**(성공적 보상 획득이 이어질수록 학습률을 낮춰 행동을 안정시킬 것; Beeler 2012 인용).
- **기전 제안**(model discussion B; Coddington 2023의 "학습률 가설"을 다선택지로 일반화):
  - phasic DA는 피질선조체 가중치 변화의 **비례상수(α)** 를 정하지만 **부호나 크기를 직접 정하지는 않는다**. 부호와 크기는 피질선조체 활동 상관·eligibility trace가 정한다. 알고리즘 수준의 차이는 DA가 **부호 있는 덧셈 성분(δ)** 이냐 **부호 없는 곱셈 성분(α)** 이냐다.
  - 비보상 방문에서 추정치를 깎는 β(≈1−α)는 **DA pause → D2⁺ SPN 입력 가소성**으로, 보상 방문의 α는 **DA burst → D1⁺ SPN 입력 가소성**으로 구현될 수 있다(D1은 DA 증가에, D2는 감소에 PKA로 반응; Lee 2021; D2 pause가 변별 학습에 필수라는 Iino 2020). 선택 ≃ W_D1 − W_D2 형태로, OpAL과 개념적으로 비슷하다.
  - **판별 예측**: 높은 학습률은 **보상 시 큰 양의 반응과 누락 시 깊은 dip을 동시에** 예측한다. RPE는 양의 반응이 클 때 누락 dip이 작거나 없고, 누락 dip이 학습에 따라 **천천히 획득**되며, 선택지마다 다른 반응을 예측한다. FoMO 데이터는 앞쪽(학습률)과 맞는다.
  - 이전 모델 **ACTR**([[coddington-2023-mesolimbic-dopamine-adapts-the-rate|Coddington 2023]])은 단일 선택지 Pavlovian(누락이 드묾)을 다뤘다. AQUA는 누락이 흔하고 학습에 결정적인 다선택지로 그 틀을 일반화한 것이다.

### 방법 요약
- 34마리: DAT-cre 19(암 7; GCaMP8m), WT 8(암 2; dLight1.3b), DAT-cre::Ai32 7(암 3; 광유전). 3개월–1년령. config 1 20마리(간격 일정 photometry 전부와 확률 일정·광유전 개체 포함). **성별은 분석 요인에 넣지 않았다.**
- 물 제한 2 mL/일(체중 80% 미만 시 완화). 방문 정의: 다른 꼭지로 전환하거나, 같은 꼭지에서 핥기 간격 >1 s(확률 일정은 과제 코드에서 >2 s).
- 다항 로지스틱 회귀(5-fold CV), ridge 회귀로 시점별 DA 계수를 구했고 Benjamini–Hochberg 보정했다. 비모수 Wilcoxon·Mann-Whitney를 썼다. 표본 크기 사전 계산은 없고, 수행 기준으로 제외한 개체도 없다.
- 데이터: Figshare doi:10.25378/janelia.31807939. 코드: github.com/lauralgrima/FoMO_code.
- ⚠️ **보충 그림 S1–S16은 PDF에 포함되지 않았다**(온라인 전용). 이 페이지의 fig. S 관련 서술은 본문·STAR Methods가 그 그림을 설명한 문장에 근거하고, 그림 자체는 확인하지 못했다.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **NMPU에 학습률 축 추가 검토**: NMPU는 Need·Motivation·Pleasure·Utility의 **값**을 다룬다. 이 논문은 같은 보상이라도 **얼마나 배우는지(α)** 가 별도의 전역 변수이고 NAc DA가 그것을 실을 수 있다고 본다. 저자의 "포만 → 학습률↓" 추측이 맞다면 Need 상태는 Motivation뿐 아니라 **학습 속도**도 바꾼다. 금식 정도별로 같은 FoMO형 과제의 α(τ) 적합값과 NAcC DA 감쇠 속도를 비교하는 실험이 바로 설계된다.
- **음식 foraging 과제로의 이식**: 물 대신 음식 펠릿·기호식을 6개 지점에 주면 "기호식 꼭지 vs 영양 꼭지" 같은 질의 차원을 추가할 수 있다. 위키의 섭취 후 강화([[yang-2026-a-sync-state-in-the|Yang 2026]] sync state, [[grove-2022-dopamine-subsystems-track-internal|Grove 2022]])는 수 분 단위의 지연 신호이므로, AQUA의 즉각 갱신과는 다른 시간척도의 학습 항이 필요할 것이다.
- **D1/D2 해석 틀**: 섭식 회로에서 NAc D1/D2 MSN 조작 결과([[guillaumin-2023-disentangling-the-role-of-nac|Guillaumin 2023]] 등)를 "가치 부호(δ)" 대신 "보상 시 α / 누락 시 β 가소성"으로 읽으면 예측이 달라진다. 예: D2 경로 억제는 RPE 틀에서는 음의 가치 학습 결손이고, 이 틀에서는 누락 후 포기 속도 저하다.
- **판별 실험 체크리스트에 추가**: (a) 학습 초기 누락 dip의 크기와 출현 시점, (b) 질이 다른 선택지들 사이 보상 반응의 순위 scaling 유무, (c) 환경 변화 직후 DA 상승이 국소(변한 선택지)인지 전역(모든 선택지)인지. 이 셋이 학습률과 RPE를 가른다(→ [[concept-dopamine-learning-rate]] 판별표).

## ⚠️ 위키 내 충돌·긴장 (병기 — 덮어쓰지 않음)
- **원전 ACTR과의 차이**: [[coddington-2023-mesolimbic-dopamine-adapts-the-rate|Coddington 2023]](Pavlovian, 800시행)에서는 NAc 보상 DA가 학습 중 **유의하게 줄지 않았고**(0.82→1.16 z), 기대한 자극의 누락에 DA 억제가 없었다. 이 논문의 "방문 수에 따른 감쇠"와 "가장 초기부터 깊은 누락 dip"은 과제(누락이 흔한 다선택지)의 차이로 설명되지만, ACTR의 β(정책 변화 + 감각 입력)와 AQUA의 α(τ)(지수 감쇠)가 같은 양인지는 정식 비교되지 않았다.
- **무경험기 보상 DA 추세**: 이 논문(그리고 [[gong-2026-reward-magnitude-determines-reinforcement-learning|Gong 2026]])에서 NAcC DA 보상 반응은 방문·훈련에 따라 **감쇠**한다. [[jeong-2022-mesolimbic-dopamine-release-conveys-causal|Jeong 2022]] Test 1에서는 무경험 머리 고정 마우스의 반복 무예측 sucrose 반응이 **증가**한다. 과제(자기 개시 foraging vs 무예측 전달), 보상 간격(수 초–수십 분 재충전 vs 평균 12 s), 보상(물 vs sucrose)이 다르다. 흥미롭게도 Jeong 2022의 ANCCR 시뮬레이션도 무경험 동물에 **α가 0.25에서 0.02로 지수 감쇠**하는 학습률을 가정한다 → "감쇠하는 학습률"은 두 진영이 공유하는 가정이고, 그것을 DA가 **직접 싣는지**가 쟁점이다.
- **DA = 선택지 가치?**: [[gordon-2026-lateral-hypothalamic-control-of-the|Gordon 2026]]·[[pascoli-2026-conditioned-accumbal-dopamine-transients|Pascoli 2026]] 등 위키의 "전방·복측 DA = 가치·주관적 가치" 서술([[concept-striatal-dopamine-gradient]])은 대부분 훈련된 동물이나 용액 가치 차이에서 나왔다. 이 논문은 **학습 초기 다선택지**에서 NAcC 보상 반응이 선택지 질(최대 80배)을 반영하지 않는다고 본다. 학습 단계를 적지 않으면 두 서술이 충돌하는 것처럼 읽힌다.
- **mPFC 기원 가능성과 Hjort 2026**: 저자는 학습률 조절 입력 후보로 VTA로 투사하는 전전두의 환경 변동성 상관 활동을 든다. [[hjort-2026-prefrontal-to-ventral-tegmental-area|Hjort 2026]]은 mPFC→VTA가 RPE의 rolling-average gain(meta-RPE)을 조절해 contingency degradation을 구동한다고 보고했고, 그 모델 비교에서 Pearce–Hall·이중 학습률(RPE2α) 같은 학습률 적응 모델은 mRPE에 졌다. "gain 조절"이라는 공통 개념 아래 두 lab의 모델이 같은 것을 가리키는지는 위키 자료로 판단할 수 없다(자료 없음).
- **DMS DA**: [[overview-dopamine-roles-by-striatal-region]]은 DMS를 목표지향(A–O)·칼로리 가치로 정리한다. 이 논문의 무경험 foraging에서 DMS DA는 학습률·RPE 어느 쪽과도 맞지 않고 공간에 넓게 분포했다. 과제·단계 차이로 병기한다.

- **시간 대 방문 수**: [[burke-2026-duration-between-rewards-controls-the|Burke 2026]](Pavlovian cue–보상)에서는 보상당 학습률이 **보상 간격(시간)**에 비례했고 보상 종류별로 따로 계산됐다. 이 논문에서 마우스는 꼭지별 재충전 간격을 시간으로 추정하지 않았고, AQUA의 α는 **방문 수**로 감쇠한다. 과제와 "학습률"의 대상이 다르다. Burke의 학습 초기 보상 DA는 증가했다(이 논문의 감쇠와 반대).

## 관련 페이지
- [[coddington-2023-mesolimbic-dopamine-adapts-the-rate]] — ★ 학습률 가설 원전(ACTR, Pavlovian 정책 학습, 보정 폐루프 자극 역설). 본 논문은 그 다선택지 일반화이며 150 ms 보정 자극 파라미터를 이어받았다.
- [[person-dudman-joshua]] — 교신저자 인물 hub.
- [[gong-2026-reward-magnitude-determines-reinforcement-learning]] — ★ **같은 lab의 짝 논문**(Science 2026; 본 논문 bioRxiv판을 ref 18로 인용): 보상 크기가 학습 효율을 정하고, 소비 중 DA 지속이 학습률·관여를 올린다.
- [[concept-dopamine-learning-rate]] — 학습률 가설 개념 hub.
- [[concept-reward-prediction-error]] · [[gershman-2024-explaining-dopamine-prediction-errors-beyond]] · [[adam-2026-dopamine-takes-hit-how-neuroscience]] — RPE 논쟁. Gershman 2024가 "framework 밖 도전"으로 든 Coddington 2023 학습률 모델의 다선택지 확장.
- [[jeong-2022-mesolimbic-dopamine-release-conveys-causal]] · [[concept-anccr]] — 무경험기 DA 추세의 반대 방향, 공유된 "감쇠 학습률" 가정(위 긴장 절).
- [[hjort-2026-prefrontal-to-ventral-tegmental-area]] — mPFC→VTA의 RPE gain 조절(meta-RPE). 학습률 조절 입력 후보와 연결.
- [[overview-dopamine-roles-by-striatal-region]] · [[concept-striatal-dopamine-gradient]] · [[concept-nucleus-accumbens]] — NAcC vs DMS 차이.
- [[concept-medium-spiny-neuron]] — D1 = α(burst) / D2 = β(pause) 가소성 구현 제안.
- [[concept-goal-commitment]] · [[holton-2026-the-adaptive-value-of-stubborn]] — foraging patch-leaving/MVT를 목표 감시 알고리즘의 생태학적 원형으로 다룬 페이지. AQUA는 MVT의 stay/leave를 RL에 넣은 구현이다.
- [[sharpe-2017-lateral-hypothalamic-gabaergic-neurons]] — LH^GABA→VTA가 행동이 아니라 cue 학습률을 조절한다는 rat 결과. 학습률을 조절하는 상류 회로 후보.
- [[mathis-2026-leveraging-insights-from-neuroscience-to]] — 미로 마우스의 few-shot 학습. 본 논문은 "복잡한 환경에서 더 빠른 학습"의 근거로 Rosenberg 2021 미로 연구(ref 21)를 인용한다. Mathis 페이지의 미로 서술이 같은 연구를 가리키는지는 그 페이지에 출처 표기가 없어 확인하지 못했다.
- [[burke-2026-duration-between-rewards-controls-the]] — 보상당 학습률을 시간 간격이 정한다는 반대 결과(과제 다름), 학습 초기 보상 DA 증가.
