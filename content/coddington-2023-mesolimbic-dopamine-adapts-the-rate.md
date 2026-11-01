---
title: "Mesolimbic dopamine adapts the rate of learning from action (Coddington, Lindo & Dudman 2023, Nature)"
type: paper
created: 2026-11-01
updated: 2026-11-01
source: "raw/s41586-022-05614-z.pdf"
authors: [Luke T. Coddington, Sarah E. Lindo, Joshua T. Dudman]
year: 2023
journal: "Nature 614:294–302 (2023-02-09; 온라인 2023-01-18; 접수 2021-05-05, 채택 2022-11-30); doi:10.1038/s41586-022-05614-z; OA CC BY"
---

> [!takeaway] 연구 방향 관점의 핵심
> 위키 [[concept-dopamine-learning-rate|학습률 가설]]의 **원전**이다. 무경험 마우스의 trace conditioning 학습은 가치 학습(TD)보다 **행동 정책을 직접 고치는 정책 학습(policy learning)** 으로 더 잘 설명된다. 그 학습에서 phasic 중변연계 도파민은 오류의 **부호와 방향**이 아니라 **이번 시행에서 얼마나 크게 고칠지(적응적 학습률)** 를 정한다. 결정적 증거는 **폐루프 역설**이다. 보상 반응 크기로 보정한 VTA DA 자극을 "예기 핥기를 한 시행"에만 주면, 예기 핥기가 오히려 **줄었다**. 핥기를 안 한 시행에만 주면 늘었다. 도파민이 오류나 강화 신호라면 나올 수 없는 방향이다. 반면 현장 표준 수준의 **큰 자극(보상 반응의 3–5배)** 은 부호 있는 오류처럼 작동해 cue에 가치 같은 반응을 가르쳤다.
> 사용자 연구에 닿는 지점 셋. (1) **도파민 광자극 실험의 해석 규칙**: 생리적 크기로 보정하지 않은 VTA/NAc DA 자극 결과는 "가치·강화"로 읽히기 쉽지만, 같은 회로가 생리 범위에서는 다른 일(학습률)을 할 수 있다. 섭식 회로의 DA 조작 결과를 인용할 때 자극 크기·지속·보정 여부를 적어야 한다([[zhu-2025-hedonic-eating-is-controlled-by|Zhu 2025]]는 photometry 보정 자극을 쓴 사례). (2) **개체차의 역설**: 학습 초기 NAc DA 보상 반응이 **클수록** 최종 예기 행동이 **적고** 수거가 **느렸다**(r=0.81). 보상의 감각 자극에 강하게 반응하는 개체는 반응적(reactive) 행동이 강해져 준비적(preparatory) 정책 학습이 손해를 본다는 해석이다. 저자는 이를 약물 cue에 대한 과민성(중독)과 연결하고, 정책 학습의 반응 성분이 **유인 현저성의 획득**(발현은 아님)을 모델링할 수 있다고 제안한다. 음식 cue 과반응·[[concept-incentive-sensitization|유인 감작]] 연구에 쓸 틀이다. (3) cue에서 DA를 인위적으로 키워도 **그 시행의 예기 핥기는 변하지 않았다** → 이 과제에서 cue DA는 행동을 즉시 구동하지 않고 학습만 반영한다.

# Mesolimbic dopamine adapts the rate of learning from action (Coddington et al. 2023)

## 한 줄 요약
무경험 머리 고정 마우스의 trace conditioning을 "보상 수거 잠복기를 줄이는 행동 정책의 직접 학습"으로 기술하고, RNN 기반 정책 학습 모델 **ACTR**(adaptive rate, cost of performance to REINFORCE)로 행동과 도파민을 재현했다. 도파민을 학습률로 둔 모델만이 **보정된 폐루프 VTA DA 자극의 역설적 결과**를 예측했고, 실제 마우스가 그대로 따랐다.

## 핵심 내용

### 배경 — 정책 학습과 적응적 학습률
- RL에는 상태의 기대 가치를 배우는 **가치 학습**(RPE가 갱신 신호)과, 행동을 정하는 **정책**을 직접 고치는 **정책 학습**이 있다. 로봇·머신러닝의 체화된 학습 성공은 상당 부분 직접 정책 학습에서 나왔다. 정책 학습은 RPE 대신 **수행 오차(performance error, PE)** 로 구동될 수 있다.
- 정책 탐색은 학습 궤적이 지나치게 가변적이라는 약점이 있다. 해법은 시행마다 "이 시행이 학습에 얼마나 유용한가"에 따라 **갱신 크기**를 정하는 것, 곧 **적응적 학습률**이다(ADAM 같은 머신러닝 기법, Pearce–Hall 학습 모델).
- 저자의 가설: phasic mDA 활동은 새로움·현저성, 다가올 행동, 예측오차와 상관한다. 이 셋은 모두 "학습률을 올려야 할 순간"의 좋은 휴리스틱이다 → mDA = 적응적 학습률 신호일 수 있다. 대안은 조류 노래 학습처럼 mDA가 PE 자체를 싣는 것이다.

### Fig 1·ED1·ED2 — 행동: 준비 성분과 반응 성분, 정책 학습 모델이 이긴다
- 과제: 머리 고정·물 제한(1.2 mL/일) 수컷 마우스. 사전 shaping 없이, **trial 1이 그 장치에서 처음 받는 보상**이다. 0.5 s 10 kHz tone 후 1 s 지연, 사카린 물 **3 µl**. 10%는 cue 없는 probe, 3세션 후부터 10%는 누락 probe. ITI 지수분포 평균 ~25 s, 하루 100시행 × 8–10일. 보상은 행동과 무관하게 나오지만 마우스는 **보상 수거 잠복기**를 단조롭게 줄였다.
  - 하루 100시행은 일부러 정한 상한이다. 예비 실험에서 150–200시행부터 cue·보상 반응이 줄기 시작해, 동기적 관여를 균질하게 유지하려 했다.
- 행동 측정: 가속도계 바구니(몸), 100 Hz 얼굴 영상(핥기·수염·동공·코).
  - **준비(preparatory)** = cue–보상 지연 구간의 핥기·몸·수염·동공 활동량.
  - **반응(reactive)** = 보상 후 코·몸·수염 반응 개시 잠복기.
- 마우스별 GLM으로 수거 잠복기를 예측하면 r² = 0.69±0.11(셔플 0.01)이었다. 예기 핥기가 가장 일관된 예측변수였지만 **준비·반응 둘 다 있어야** 가장 잘 맞았다(Friedman P=0.0003; 준비만 r²=0.51, 반응만 0.46).
- 현재 시행의 준비·반응 변화는 **직전 시행의 PE(잠복기)** 와 관련됐다 → 수행 오차에 의한 직접 정책 갱신과 정합한다. 두 성분은 학습 시간경과가 달랐다(P<0.001) → 해리 가능한 과정이다.
- **모델 비교**: 자유 파라미터 수를 맞춘 저차원 정책 학습(REINFORCE계) vs TD 가치 학습(Mikhael 2022 모델). 9마리 모두에서 정책 학습이 더 잘 맞았다(ΔLL = −252.6±70.8, P<0.01). 파라미터 공간 전체의 중앙값으로 봐도 **덜 brittle**했다(ΔLL_median −3.8×10³).

### ACTR 모델 (Fig 1h–j, ED2, Methods)
- **행동 plant**: 휴지 ↔ 핥기(7 Hz) 두 상태. 정방향 전이율은 정책 π(t)가 정한다. 역방향 전이율은 물이 있을 때 줄어 소비 bout가 유지된다.
- **정책 = RNN 출력(준비 학습) + 감각 입력의 feedforward 경로(반응 학습)**. 최적 정책은 cue부터 보상까지 지속되는 준비 활동(=예기 핥기)이 필요했고, 이를 위해 긴 시간상수 동역학(결합계수 g ≳ 1.2)을 가진 RNN이 필요했다.
- **PE** = 실제 수거 잠복기 − 예측 잠복기(보상 시점 출력 단위 활동)로, 비용은 1 − exp(−Δt/500)로 정의했다.
  - 반응 학습: ΔS ≈ β × PE
  - 준비 학습: ΔW ≈ β × (eligibility trace) × ΔPE
  - eligibility trace는 node perturbation 방식이고(시간상수 500 ms), **도파민 burst 시점에 읽어 낸다**(DA가 eligibility trace를 가소성으로 전환한다는 선행 근거).
- ★ **적응적 학습률 β_DA** = 시그모이드(보상 시점의 정책 변화 Δπ + 반응적 감각 성분의 크기) + 기저(tonic) 성분. 이는 "보상 관련 행동 개시 명령의 efference copy + 보상 감각 증거"의 합이며, 이 과제의 mDA phasic 활동이 **행동 관련 성분 + 감각 관련 성분의 합**으로 잘 기술된다는 저자들의 선행 관찰(Coddington & Dudman 2018)과 의도적으로 평행하다.
- **변형 모델 비교**(Fig 1j; 시뮬레이션 n=24 vs 마우스 n=9): DA 유사 신호를 학습률이 아니라 **PE로** 쓰면 최종 수행이 크게 나빠졌다(P<2×10⁻⁷). 학습률 전체를 낮추면(도파민 고갈 유비) 나빠졌다(P<2×10⁻⁶). 기저 학습률만 두고 적응 성분을 없애면(phasic 신호 손실 유비) 나빠졌다(P=0.02).
- cue 있는 시행이 cue 없는 probe보다 빨리 수거된다. 모델 146±21 vs 205±7 ms, 마우스 176±26 vs 231±23 ms(ED2e).
- ACTR는 명시적 RPE 계산 없이도 **예상/비예상 보상 반응 차이 같은 RPE 상관**을 재현했다(Fig 4, ED7).

### Fig 2·ED3 — 도파민 기록과 개체차의 역설
- DAT-Cre::Ai32 마우스에 jRCaMP1b(복측 중뇌)를 쓰고, **NAc core**(n=9), VTA(n=3), 배측 선조체 DS(n=6)에서 기록했다.
- NAc DA **보상 반응은 정렬이 좋아졌지만 유의하게 줄지 않았다**(trials 1–100: 0.82±0.21 z → 700–800: 1.16±0.23 z, P=0.13). cue 반응은 꾸준히 늘었다. VTA 신호와 매우 닮았다. **DS DA는 훈련이 더 진행돼야** cue·보상 반응이 생겼다 → 초기 학습기에는 중변연계 신호가 관심 대상이다.
- ★ **초기 NAc DA 보상 반응**(trials 1–100)은 개체차가 컸고 광섬유 위치와 무관했다. 이 반응은:
  - 최종 **준비 행동과 음의 상관**(r = −0.85, P=0.004)
  - 최종 **수거 잠복기와 양의 상관**(r = 0.81, P=0.008) → 초기 DA가 클수록 **덜 배웠다**
  - 최종 반응 성분과는 무관(P=0.24)
  - 최종 **cue DA 반응과도 무관**(P=0.47)
  - 최종 행동으로부터 역으로 예측됐다(r = 0.99).
- 해석: DA 크기가 학습 갱신 오차를 정한다면 이 음의 상관은 나올 수 없다. ACTR에서 초기 보상 감각 입력을 키우면 초기 DA 예측치가 커지고, 준비적 핥기 정책 발달이 줄어 최종 잠복기가 늦어졌다(r=0.73, P=0.007). → **보상 감각에 대한 초기 민감도를 DA가 보고하고, 강한 반응 성분이 준비 학습을 방해한다.**

### ED4 — cue DA를 키워도 그 시행의 행동은 변하지 않는다
- 학습 후 cue 시점에 큰 VTA DA 자극을 일부 시행에 줬다. 그 시행의 예기 핥기는 2.3±1.1 vs 2.3±1.0 Hz로 변하지 않았다(P>0.99).
- 개체 간에는 cue DA 크기와 예기 핥기가 상관했다(r=0.78, p=0.01). 그러나 조작은 인과를 지지하지 않았다 → 이 맥락에서 cue DA는 **학습된 정책 변화와 상관할 뿐 준비 행동을 직접 조절하지 않는다**("다른 맥락에서는 그렇지 않을 수 있음"이라는 단서를 붙였다).

### Fig 3·ED5–6 — 보정 자극 vs 큰 자극: 가치 같은 cue 학습은 큰 자극에서만
- 새 과제: 0.5 s 빛 cue → 1 s 후 VTA DA 자극(물 없음), 5세션 × ~150시행.
  - **보정 자극**(150 ms, 30 Hz, 1–3 mW; 비예측 보상 반응의 1.4±0.3배; n=10) → NAc DA **cue 반응 생기지 않음**(0.0±0.2 z, P=0.8).
  - **큰 비보정 자극**(500 ms, 30 Hz, 10 mW; 5.5±0.8배; n=7) → cue 반응 형성(0.5±0.2 z, P=0.02).
- TD 가치 모델은 두 조건 모두 cue 학습을 예측한다. ACTR는 "큰 지속 자극 = 학습률의 큰 변조 + PE 편향"이라는 비선형성을 넣었을 때만 큰 자극의 cue 학습을 재현한다.
- 큰 자극으로 생긴 cue 반응도 **기대한 자극이 누락될 때 DA 억제를 동반하지 않았다**(가치 학습 모델 예측과 다름). 저자는 누락 억제가 동시 행동 통제나 행동 평가에 의존할 수 있다고 본다. 이 과제에서는 cue 학습에 짧은 몸 움직임만 동반됐다.
- 두 자극의 공간 프로파일(mPFC, 선조체 배복축)은 입출력 비가 비슷했다(ED6) → 큰 자극의 효과는 확산 범위가 아니라 **크기·지속시간** 때문이다.
- 결론: 이 과제에서 측정된 크기의 phasic 보상 DA는 예측 cue의 가치 같은 학습을 **구동하기에 충분하지 않다**. 하류에 훨씬 높은 DA 농도를 주는 큰 자극은 충분하다.

### Fig 5·ED8–9 — ★ 폐루프 역설: 학습률이냐 오류냐를 가르는 실험
- **논리**: 시행을 지연 구간 예기 핥기 유무로 나누면 **lick+ 시행은 평균적으로 음의 PE**(정책이 이미 좋으면 우연한 변동은 수행을 나쁘게만 만든다), **lick− 시행은 양의 PE**를 갖는다(ED8f, P<0.001).
  - 도파민이 **학습률**이면: lick+ 시행에서 DA를 올리면 음의 PE가 더 크게 반영돼 예기 핥기가 **줄어야** 하고, lick− 시행에서 올리면 **늘어야** 한다.
  - 도파민이 **오류(ACTR의 PE, TD on/off-policy의 RPE)나 단순 행동 강화**이면: 적어도 한 조건에서 반대 방향을 예측한다(Fig 5e, 다섯 모델 비교).
- **실험**: 보상 시점에 양측 VTA 자극(150 ms, 30 Hz, <3 mW; NAc 보상 DA ≈ 2배).
  - stimLick+(n=5): 보상 전 750 ms 안에 핥기가 있던 시행에 자극. 세션당 자극 시행은 최대 50%로 제한해 두 군의 자극 횟수를 맞췄다.
  - stimLick−(n=6): 핥기가 없던 시행에 자극.
  - 대조군 n=9.
- **결과**: 두 조건이 예기 핥기를 **반대 방향으로** 바꿨다. **stimLick+는 예기 핥기↓, stimLick−는 ↑**였다(trials 600–800, ANOVA F₁,₇₂=10.5, P=0.002). NAc DA cue 반응도 같은 방향이었다(stimLick+ 0.3±0.1 z vs stimLick− 2.6±0.7 z, F₁,₇₂=10.1, P=0.002). 기저(시행 간) 핥기는 학습 정도나 초기 DA와 무관해(P=0.9, 0.8), 변화가 cue에 의한 학습임을 확인했다.
- → **DA를 올렸는데 그 시행에서 하던 행동이 줄어든다.** DA가 오류나 강화라면 역설이지만, 학습률이라면 예측된 결과다.

### Fig 6 — 생리 범위를 넘는 자극은 오류처럼 작동한다
- stimLick+를 **큰 비보정 자극**(500 ms, 30 Hz, ~10 mW; stim+Lick+, n=4)으로 반복했다. 그러자 cue DA 반응↑(F₁,₆₆=11.7, P=0.001)과 예기 핥기↑(F₁,₆₀=7.1, P=0.01)로 **부호가 뒤집혔다**.
- ACTR에서 "큰 자극 = 학습률 변조 + 양의 PE 편향"으로 두면 이 결과가 재현된다. Fig 3의 큰 자극 cue 학습과 같은 해석이다.

### Discussion — 저자 해석
- 정책 학습에는 부호 있는 RPE가 필요 없으므로 mDA가 다른 양에 대응할 여지가 생긴다. 표준 actor–critic과의 차이는 두 가지다. ① 도파민의 기능(오류가 아닌 학습률), ② **복측 선조체가 'critic'이 아니라 정책을 정하는 'actor'의 일부**라는 제안.
- 핵심 구분은 알고리즘 종류보다 **부호 있는 오류 신호(학습 방향) vs 부호 없는 적응적 학습률(오류를 얼마나 반영할지)** 이다. 학습률 역할은 "자극이 대개 학습을 돕지만 어떤 조건에서는 역설적으로 늦춘다"를 예측한다. 행동과 무관하게 주는 통상의 자극 실험은 두 가설을 가르지 못하므로 **행동 상태에 맞춘 폐루프 보정 자극**이 필요했다.
- 현장 표준 파라미터의 비보정 자극(내인성의 3–5배)은 학습률 변조에 더해 **부호 있는 오류 편향**으로 설명됐다 → **도파민 의존적 cue 동기 가치 부여와 정책 학습률 조절은 같은 중변연계 회로 안에서 부분적으로 해리된다.** 저자는 이를 정책망과 가치망을 병렬로 둔 AlphaGo에 비유한다.
- **중독 연결**: 강하게 증폭된 DA 신호와 감각 입력 과민성은 모두 가치 같은 학습 쪽으로 치우쳐, 최적 행동을 희생하고 cue에 과도한 반응적 반응을 만든다. 이는 약물 예측 cue에 대한 후천적·선천적 과민성과 비슷하다. 정책 학습, 특히 ACTR의 반응 성분이 **유인 현저성의 획득**(발현은 아님; ED4)을 모델링하는 데 유용할 수 있다. 저자는 신경조절물질 조작을 생리 신호에 맞춰 보정하는 관행을 권하고, 중독의 부적응 학습은 장시간·고강도 DA 자극으로 모델링하는 것을 지지한다.
- 한계·확장: 단일 학습 과제만 다뤘다. 반응·준비 학습을 담당하는 여러 학습 규칙의 세포·회로 기전은 미검증이다. 다른 신경조절물질(세로토닌의 학습률 조절, Grossman 2022)도 상보적 역할을 할 수 있다.

### 방법 요약
- 24마리 수컷 DAT-Cre::Ai32(3–9개월). 대조 9, stimLick− 6, stimLick+ 5, stim+Lick+ 4. 빛 cue–자극 실험(보정 10, 큰 자극 7)과 cue 자극 세션(5)은 같은 마우스를 재배정해 진행했다(배정 순서는 Supplementary Table 1 — PDF 미포함).
- 수술 1회: VTA·SNc에 AAV-FLEX-jRCaMP1b, 양측 VTA 광섬유, 한쪽 DS·NAc core 광섬유. 100 Hz time-division photometry(LED 50–80 µW, ChR2 비활성화 확인). NAc·VTA 보상창 0–2 s, cue창 0–1 s, DS는 0–0.75 s. 분석창 설정 단계까지는 실험군을 가렸다(데이터 수집 중에는 가리지 않음).
- 보정 자극: 세션 첫 몇 시행의 최대 보상 과도반응과 비슷하게 NAc DA가 나오도록 1–3 mW로 맞췄고, 사후에 보상 DA 약 2배임을 확인했다.
- 통계: rank-sum·signed-rank·Friedman·2-way ANOVA·Pearson. 표본 크기 사전 계산 없음.
- 코드 github.com/dudmanj/RNN_learnDA, 데이터 doi:10.25378/janelia.c.6369111.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **섭식 DA 조작 문헌을 다시 읽는 기준**: 위키의 섭식 회로 DA 자극 결과 다수는 "강화·가치"로 해석돼 있다. 이 논문은 같은 VTA DA라도 **자극 크기·지속시간**에 따라 학습률(생리 범위)과 부호 있는 오류(초생리 범위)로 작동이 갈린다고 보고한다. 인용할 때 "보정 여부·보상 반응 대비 배수"를 함께 적는 것을 위키 규칙으로 삼을 만하다. [[zhu-2025-hedonic-eating-is-controlled-by|Zhu 2025]]의 photometry 보정 lick-contingent 자극은 이 기준을 충족하는 사례다.
- **음식 cue 과반응의 개체차 모델**: 초기 보상 DA가 큰 개체가 오히려 준비적 정책을 덜 배운다는 결과와, 큰 DA가 cue에 가치 같은 반응을 가르친다는 결과를 합치면 이런 가설이 나온다. **보상 감각 민감도가 높은 개체는 cue에 반응적으로 끌려가는 쪽으로 학습한다.** 고기호식에 대한 sign-tracking·유인 감작 개체차, [[concept-cue-reactivity|cue 반응성]] 기반 DTx의 표현형 정의에 연결해 검증할 수 있다.
- **"섭취 행동"을 정책으로 보기**: 이 논문의 학습 대상은 가치가 아니라 **보상을 빨리 수거하는 행동 정책**(예기 핥기·반응 잠복기)이다. 사용자 lab의 소비 행동 지표(핥기 개시·bout, [[concept-consumption-vigor]])는 정책 학습의 출력으로 모델링할 수 있다. 그러면 DA 조작의 효과를 "가치 변화"와 "학습 속도 변화"로 나눠 예측할 수 있다.
- **폐루프 설계의 이식**: 섭식 과제에서 "예기 접근이 있었던 시행 vs 없었던 시행"에만 보정 DA(또는 LH 입력) 자극을 주는 설계는, 그 회로 신호가 학습률인지 오류인지를 직접 가르는 실험이 된다. NMPU의 Pleasure 교사 신호가 어느 쪽인지 묻는 실험이기도 하다.

## ⚠️ 위키 내 충돌·긴장 (병기 — 덮어쓰지 않음)
- **학습 초기 NAc 보상 DA의 추세 — 같은 lab 안에서도 다르다**: 이 논문(Pavlovian, 800시행)에서는 NAc DA 보상 반응이 **유의하게 줄지 않았다**(0.82→1.16 z). [[grima-2026-a-global-dopaminergic-learning-rate|Grima 2026]](6선택지 foraging)·[[gong-2026-reward-magnitude-determines-reinforcement-learning|Gong 2026]](조작적 과제)에서는 **감쇠**했고, [[jeong-2022-mesolimbic-dopamine-release-conveys-causal|Jeong 2022]] Test 1(무예측 sucrose)에서는 **증가**했다. 학습률 진영 안에서도 "DA = 학습률"의 시간 모양이 과제에 따라 다르다. ACTR의 β는 정책 변화 + 감각 입력으로 정해지고, AQUA의 α(τ)는 방문 수에 따라 감쇠하는 함수다. 두 모델이 같은 양을 가리키는지 원전들은 정식으로 비교하지 않았다(Grima는 AQUA를 ACTR의 다선택지 "일반화"라고만 적는다).
- **누락 반응**: 이 논문은 기대한 자극의 누락에 DA 억제가 없었고, Pavlovian에서 누락 dip은 늦고 작다고 본다. Grima 2026은 다선택지 foraging에서 **가장 초기부터 깊은 누락 dip**을 보고하고, 이를 D2 pause 기반 β로 설명한다. 저자들 스스로 ACTR은 누락이 드문 단일 선택지 과제용이었다고 정리한다(Grima model discussion B).
- **긴·큰 DA 자극의 해석 — Gong 2026과의 긴장**: 이 논문에서 500 ms·10 mW 자극(내인성의 3–5배)은 **부호 있는 오류 편향**을 더해 Pavlovian cue에 가치 같은 학습을 일으킨다. [[gong-2026-reward-magnitude-determines-reinforcement-learning|Gong 2026]]은 비슷한 범위의 1 s·8–10 mW 자극을 ">50 µl 보상 반응을 모사하는 생리적 연장"으로 보고, 조작적 과제의 학습률·관여 증가로 해석한다. 같은 lab이 비슷한 자극을 과제에 따라 다르게 읽는다. 두 논문을 함께 인용할 때 과제(Pavlovian vs 조작적)와 자극 배수를 병기할 것.
- **Gong 2026 Pavlovian 결과와의 정합(연결 해석)**: Gong 2026에서 큰 보상(75 µl)은 Pavlovian 예기 핥기와 CS+/CS– 변별을 손상시켰다. 이 논문에서도 초기 보상 DA(=감각 반응)가 큰 개체가 예기 핥기를 덜 배웠다. 두 결과는 "강한 보상 감각 반응이 준비적 정책 학습을 방해한다"로 묶일 수 있다. 두 논문 모두 이 연결을 명시하지는 않는다.
- **cue DA와 행동 구동**: ED4에서는 cue DA를 키워도 그 시행의 예기 핥기가 변하지 않았다. "cue 도파민 = 주관적 가치·동기"로 행동과 선택을 예측한다는 [[pascoli-2026-conditioned-accumbal-dopamine-transients|Pascoli 2026]], DA = 일의 가치·활력이라는 [[hamid-2016-mesolimbic-dopamine-signals-value-work|Hamid 2016]]·[[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation|Mohebi 2019]]와 긴장이 있다. 저자도 "다른 맥락에서는 아닐 수 있다"고 단서를 달았다.

## 원문 내 불일치·주의 (기록)
- **Fig 5 예기 핥기 수치**: 본문은 "stimLick+ 낮고 stimLick− 높다"고 쓰면서 수치를 "stimLick+ 1.0 ± 0.7, stimLick− 0.6 ± 0.1"로 적는다(대조 대비 차이로 보이며, 텍스트 추출에서 음수 부호가 빠졌을 가능성이 있다). 방향은 본문 서술과 Fig 5d 설명을 따랐다.
- **큰 자극 출력**: Fig 3a legend는 12 mW, 본문·Methods는 10 mW.
- **그림 번호**: Fig 6 결과 문단이 "Fig. 5b"를 인용하고(Fig. 6b로 보임), Methods는 존재하지 않는 "Fig. 1k"·"Fig. 5i"를 언급한다(각각 Fig. 1j, Fig. 5e로 보임).
- Methods의 동물 문단은 "behaviour and juxtacellular recordings"라고 적지만, 본 논문 데이터는 photometry다(juxtacellular 체세포 기록은 선행 Coddington & Dudman 2018).
- 보충자료(Supplementary Table 1)는 PDF에 없다. Extended Data Fig. 1–10 legend는 PDF에서 읽었다.

## 관련 페이지
- [[concept-dopamine-learning-rate]] — ★ 이 논문을 원전으로 하는 학습률 가설 hub(판별표·서술 지도).
- [[grima-2026-a-global-dopaminergic-learning-rate]] — ACTR을 다선택지 foraging으로 일반화한 후속(AQUA, 전역 감쇠 α, D1=α/D2=β 제안; 이 논문의 150 ms 보정 자극 파라미터를 그대로 사용).
- [[gong-2026-reward-magnitude-determines-reinforcement-learning]] — 같은 lab 후속(Science 2026, 교신 Coddington·Dudman): 보상 크기 → 학습 효율. 긴 자극의 해석 긴장(위 절).
- [[person-dudman-joshua]] — 교신저자 인물 hub.
- [[gershman-2024-explaining-dopamine-prediction-errors-beyond]] — 이 논문을 "RPE framework 밖 도전(Adaptive learning rate)"으로 분류.
- [[adam-2026-dopamine-takes-hit-how-neuroscience]] — RPE 논쟁 속 Dudman의 "새 모델" 입장.
- [[concept-reward-prediction-error]] · [[concept-dopamine-reward-system]] — RPE 해석 hub. ACTR은 명시적 RPE 없이 RPE 상관을 재현한다.
- [[jeong-2022-mesolimbic-dopamine-release-conveys-causal]] · [[concept-anccr]] — 또 하나의 "RPE 상관은 부산물" 진영(회고적 인과). 무경험기 보상 DA 추세 비교.
- [[concept-incentive-sensitization]] · [[pascoli-2026-conditioned-accumbal-dopamine-transients]] — 초생리 DA → 가치 같은 cue 학습, 반응 성분 = 유인 현저성 획득 모델 후보, 중독 연결.
- [[zhu-2025-hedonic-eating-is-controlled-by]] — 섭식 회로에서 photometry 보정 DA 자극을 쓴 사례.
- [[hamid-2016-mesolimbic-dopamine-signals-value-work]] · [[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation]] — cue DA = 동기·가치 진영(ED4와 긴장).
- [[concept-medium-spiny-neuron]] · [[concept-nucleus-accumbens]] — "복측 선조체 = actor" 제안.
- [[overview-dopamine-roles-by-striatal-region]] — DS DA는 초기 학습기에 cue·보상 반응이 늦게 생긴다(ED3).
- [[concept-consumption-vigor]] · [[concept-cue-reactivity]] — 보상 수거 잠복기·예기 핥기를 정책 출력으로 보는 틀, cue 과반응 개체차.
