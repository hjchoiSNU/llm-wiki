---
title: "Reward magnitude determines reinforcement learning efficiency (Gong et al. 2026, Science)"
type: paper
created: 2026-11-01
updated: 2026-11-01
source: "raw/science.aeb0813.pdf"
source_suppl: "raw/science.aeb0813_sm.pdf"
source_alt: "raw/2026 Science. Reward magnitude determines reinforcement learning efficiency (4).pdf"   # 같은 논문 Research Article Summary 포함본(Xodo로 재저장, md5 다름)
authors: [Sheng Gong, Alyssa Martell, Joshua T. Dudman, Luke T. Coddington]
year: 2026
journal: "Science 392(6800):eaeb0813 (21 May 2026; 투고 2025-07-31, 채택 2026-02-17); doi:10.1126/science.aeb0813"
---

> [!takeaway] 연구 방향 관점의 핵심
> **보상 한 번의 크기가 학습 속도를 정한다.** 세션당 총 보상량을 같게 두고 5 µl를 여러 번 주는 대신 100 µl를 몇 번 주면, 마우스는 공간 탐색·노력이 드는 운동기술·지각 의사결정(IBL 과제)을 **강화 횟수 기준 최소 10배 적은 경험으로** 배운다. 표준 TDRL·Rescorla–Wagner에서 학습률 α는 보상 크기와 무관한 자유 파라미터다. 이 결과는 **NAc 도파민이 보상 크기에 비례해 학습률을 싣는다**는 Dudman lab의 [[concept-dopamine-learning-rate|학습률 가설]]을 지지한다.
> 사용자 연구에 닿는 지점 셋. (1) **소비 중 도파민이 얼마나 오래 지속되는지가 핵심 변수다.** 큰 보상은 핥기 bout와 함께 수 초짜리 DA plateau를 만든다. 이를 광자극으로 1 s 늘리면 학습률이 오르고 **상태형 이탈(disengagement)이 사라진다**. 150 ms 자극은 학습률만 올린다. 소비 국면 도파민([[zhu-2025-hedonic-eating-is-controlled-by|Zhu 2025]]·[[gordon-2026-lateral-hypothalamic-control-of-the|Gordon 2026]])을 "가치" 대신 "얼마나 배울지"로 읽을 선택지가 생긴다. (2) 학습 효율을 **학습률 × 세션 간 보존(capture) × 관여 유지(engagement)** 세 성분으로 나누면 개체차의 82%가 설명되고, 개체차의 가장 큰 원천은 학습률이 아니라 **engagement**였다. NMPU의 Motivation 지속성, 그리고 engagement를 도파민이 아닌 2-AG로 설명한 [[marcus-2026-endocannabinoids-facilitate-reward-engagement-through|Marcus 2026]]과 맞대어 볼 축이다. (3) 실무적으로는 lab 행동 훈련의 보상 배분(희소한 큰 보상 끼워 넣기)과 DTx 보상 스케줄 설계에 참고할 수 있다(연결 가설). ⚠️ 다만 **Pavlovian cue 변별에서는 큰 보상이 오히려 예기 핥기와 CS+/CS– 도파민 변별을 망쳤다.**

# Reward magnitude determines reinforcement learning efficiency (Gong et al. 2026)

## 한 줄 요약
같은 총 보상을 **소수의 큰 보상**으로 나눠 주면 무경험 마우스의 조작적 학습(탐색·운동기술·의사결정)이 크게 빨라지고 개체차가 줄어든다. NAc 도파민 보상 반응은 크기와 지속시간 모두 보상량에 비례해 커진다. VTA 도파민 반응을 광유전학으로 연장하면 효과의 상당 부분(학습률·관여)이 재현되지만 **세션 간 보존(capture)은 재현되지 않는다**.

## 핵심 내용

### 배경 — 학습률은 보상 크기와 무관한가
- RL 모델에서 학습률(α, step size)은 수렴 속도를 정하는 자유 파라미터이고 보상 크기와 독립적이라고 가정돼 왔다. 그래서 학습은 주로 **경험(보상 횟수)의 양**에 달려 있다고 여겨졌다.
- 그런데 최근 Dudman lab 모델은 중변연계 도파민이 획득기의 **학습률**을 구현한다고 제안하고([[coddington-2023-mesolimbic-dopamine-adapts-the-rate|Coddington 2023 Nature]], ref 17; [[grima-2026-a-global-dopaminergic-learning-rate|Grima 2026]], ref 18), 도파민은 고전적으로 보상 크기와 상관한다. 두 사실을 합치면 **보상 크기가 학습 효율을 정할 수 있다**는 가설이 나온다.
- 현장의 보상 크기는 매우 좁은 범위에 몰려 있고 마우스 하루 필요량의 <1%에 불과하다. 20 µl도 하루 섭취의 ≤0.5%다.

### Fig 1·S2 — 확장된 보상 범위에서 NAc 도파민은 크기와 지속시간이 모두 커진다
- 머리 고정 갈증 마우스 NAc에서 **dLight1.3b(n=5)·GRAB-rDA3m(n=8)** 로 무예측 보상 5–100 µl에 대한 반응을 측정했다. 반응은 보상 후 **10 s 적분**으로 정량해 큰 보상의 연장된 상승까지 포함했다.
- 선행연구(Eshel 2016, ref 19)에서는 VTA DA 반응이 1→20 µl 범위에서 포화(plateau)했다. 확장 범위의 반응은 ≤20 µl에 맞춘 포화(Hill) 함수가 예측하는 것보다 **크기를 더 충실히 부호화**했다(fig. S2C). 두 센서는 겉보기 크기와 동역학은 달랐지만 확장 범위를 비슷하게 부호화했다.
- **≥50 µl에서는 소비 핥기 bout가 길어지고 이와 함께 DA 방출이 연장된 plateau를 보였다**. 저자는 이를 소비 핥기 통제가 DA 보상 반응을 조절한다는 기존 결과(ref 17·23·24)와 정합한다고 본다.

### Fig 1 — 숨은 표적 탐색: 같은 총량이면 소수의 큰 보상이 훨씬 빠르다
- 과제: 75×75 cm 경기장 중앙 근처의 **표시 없는 14×18 cm 표적 구역**에 들어가면, 벽면 고정 보상구에서 사카린 물 보상이 나온다(사전 shaping 없음).
- 같은 총 보상을 **5 µl × 180회** 또는 **100 µl × 9회**로 배분했다(각 N=14). 큰 보상군은 강화 횟수가 훨씬 적었는데도 **훨씬 빨리 배웠다**.
- 학습 효율은 **최종 수행의 90%에 도달하기까지의 강화 횟수(time to asymptote)** 로 정의했다. 5–100 µl 전 범위에서 보상당 배분량의 가파른 함수였고, **>50 µl(현장 표준의 ≥10배)** 에서야 최대에 도달했다(Fig. 1E). 일부 마우스는 **강화 몇 번 만에** 과제를 익혔다(표준 크기라면 수백–수천 번).
- 표준군은 개체 간 분산이 훨씬 컸다(F test P<0.01).
- 큰 보상은 궤적 실행의 **일관성과 속도**를 높였고, 표적 도달 확률(정확도)의 향상은 두 군이 같았다 → 운동기술 학습의 전형(속도↑·변동↓, 정확도 유지).
- NAc DA 보상 반응은 두 군 모두 훈련에 따라 감소했다. 두 군 모두 **실패한 시도 뒤 보상구에 돌아왔을 때 phasic 감소**가 나타났다.
- **Downshift 프로토콜**(fig. S3, n=5): 첫날만 100 µl(9회), 이후 5 µl(180회). 학습 효율은 표준군보다 빠르고 큰 보상만 받은 군과 같았다(ANOVA F=18.6, p<0.001; 표준 vs downshift p=0.001; downshift vs 100 µl p=0.9). → 큰 보상이 만든 개선은 **지속되는 학습**이지 즉각적 "동기·유인" 효과가 아니다. 동시에 분석용 시행 수도 확보할 수 있는 훈련법이다.

### Fig 2 — 세션 안 U자 곡선과 상태형 이탈: 학습 효율의 세 성분
- 표준군의 세션 안 수행은 **U자형**이었다(2차 적합 adj R² 0.45±0.15, 선형 대비 sign test P<0.001; N=14). 처음에는 개선되다가 세션 후반에 나빠지며, 세션 내 최적점은 세션의 41±18% 지점에 왔다.
- 세션 1의 초기 개선 속도(I)는 개체 차가 컸다. 세션 최적점은 다음 세션 시작에서 완전히 보존되지 않았다(감소, sign test P<0.01). 반면 **큰 보상군은 매 세션 시작이 직전 세션 최적점보다 오히려 좋았다**(군 효과 F=7.845, P<1×10⁻⁵).
- 최적점 뒤의 하락은 평균하면 연속적이지만, 개별 세션에서는 **갑작스럽고 상태 같은 전환**이었고 세션 끝까지 지속됐다 → **상태형 이탈(state-like disengagement)** 로 명명했다. 정의: 20시행 이동 중앙값으로 평활한 표적 잠복기가 세션 내 최적의 2배 이상으로 올라 끝까지 유지되는 경우.
- 이탈 확률은 **보상 크기에 강하게 의존**했다. 큰 보상군은 각 세션 첫 몇 번의 강화로 많은 물을 빨리 받았는데도 **이탈하지 않는 것처럼 보였다**. downshift 이후에는 이탈이 다시 나타났다.
- 세션 안에서 NAc DA 보상 반응은 꾸준히 줄었고, **DA 감소가 수행 저하보다 먼저 왔다**(교차상관, sign-rank P=0.006).
- ★ 관찰된 학습 효율은 **(I) 몰입 시 초기 학습 속도 + (II) 세션 간 개선 보존(capture) + (III) 이탈 확률**의 선형결합으로 설명됐다(**R²=0.82**; F(14,10)=15.0, P<0.001). 가장 큰 보상은 세 성분 모두를 개선했고, 특히 **보존을 크게 늘리고 이탈을 사실상 없앴다**.

### Fig 3·S4 — VTA DA 광자극: 짧은 자극은 학습률을, 긴 자극은 학습률과 관여를 올린다
- DAT-Cre::Ai32 마우스. 표준 5 µl 보상의 성공 시행 90%에서 **첫 소비 핥기에 맞춰** VTA DA를 자극했다(25 Hz).
  - **brief stim**: 150 ms, ≤3 mW — 5 µl 보상 반응을 재현.
  - **prolonged stim**: 1 s, 8–10 mW — >50 µl의 NAc DA 반응을 모사.
  - 각 N=5, 대조 n=14.
- 결과(자극 강도 의존적 학습 효율↑):
  - **(I) 초기 세션 내 학습**: 두 자극 모두 대조군 일부 개체의 느린 학습을 사실상 없앴다(brief F(13,4)=34.57, P=0.004; prolonged F(13,4)=480.3, P<0.001).
  - 궤적 속도↑는 **즉각적 활성화가 아니다**. 직전 시행에 자극을 빼는 probe에서도 속도가 같았다(P>0.5). 8세션째에는 대조군과 속도 차이가 없었다 → 속도는 기술 학습의 척도이고, 학습이 DA 증강으로 빨라졌다.
  - 두 자극 모두 보상 소비 뒤 **다음 시행 개시 잠복기**를 줄였다(fig. S4; 7세션 뒤에도 남은 차이는 이 지표뿐, ANOVA F=3.9 p=0.04, control vs prolonged p=0.03).
  - **(III) 이탈**: brief는 유의한 효과가 없었고(P=0.1), **prolonged는 이탈을 유의하게 줄였다**(P=0.007).
  - **(II) 보존(capture)**: **어느 자극도 재현하지 못했다**(F=0.37, P=0.7). 큰 보상의 가장 강한 효과 중 하나가 도파민 자극으로는 나오지 않았다.

### Fig 4·S5 — 노력 기반 reach-to-pull joystick 과제
- 머리 고정 마우스가 cue 후 오른앞발로 joystick을 거리 역치 이상 당기면 1 s 뒤 물 보상을 받는다. 저항(countermass) 2–20 g, 저부하 블록 2/7/11 g, 고부하 블록 11/16/20 g, 세션당 최대 120 성공 시행.
- 표준(N=11) vs **큰 보상 끼워 넣기**(N=7; 50 µl를 무작위 10–15% 시행에서 주다가 20 g 성공 5회 이상이면 5–8%로 축소): 학습 효율↑, **고부하 성공률↑**(rank-sum P<0.01).
- 광자극(보상 시점; brief 150 ms <3 mW vs prolonged 500 ms >10 mW; 대조 n=11, brief n=4, prolonged n=5): **prolonged만 학습 효율↑**(one-way ANOVA P<0.01; Tukey control vs brief P>0.05, control vs prolonged P<0.01), 전 난이도에서 성공↑.
- 최종 점근 수행의 활력(vigor)은 군 간 차이가 없었다(fig. S5) → 많은 모델이 예측하는 "총 보상↑ → 움직임 활력↑"과 달리, 학습률 변화는 **같은 활력으로 수렴하면서 학습만 빠르게** 할 수 있다(Supplementary Note).

### Fig 5 — IBL 지각 의사결정 과제
- IBL 표준 프로토콜은 3 µl로 시작해 훈련이 진행될수록 1.5 µl까지 **보상을 줄인다**. 이번 연구의 변경점은 표준 5 µl를 줄이지 않은 것과 오류 timeout을 2→4 s로 늘린 것이다.
- 큰 보상군(성공 시행 일부에 추가 45–50 µl)은 표준군과 **7개 lab의 공개 IBL 코호트(n=139)** 모두보다 빨리 배웠다. 표준군 학습곡선은 공개 코호트의 신뢰구간 안에 있었다 → 원 프로토콜 재현에 성공했다는 근거.
- 최종 수행: 심리측정 역치 **11.4±4.5% contrast**(IBL 17.8±11.7%), lapse **7.5±4.4%**(IBL 9.5±3.6%), 약 4,000시행 후. IBL에서 흔한 지속적 side bias(전문가 마우스도 오답의 ~25–30%)는 **9.8±3.7%** 로 줄었다. 마지막 10% 시행의 수행 분산도 줄었다(P=0.04).
- 탐색 과제(Fig. 1·2)·운동기술(Fig. 4)과 같은 패턴이다: 큰 보상 → 학습 효율↑·전문가 단계에서도 높은 관여·개체 분산↓.

### Fig 6·S6·S7 — Pavlovian 연합학습에서는 큰 보상이 도움이 안 되거나 해가 된다
- **자유 이동 trace conditioning, 시행 수 일치**(fig. S6A–D; 10 vs 200 µl, 하루 4시행): 큰 보상(총량도 큼)은 cue 후 보상 수거를 빠르게 하고 NAc DA cue 반응을 3세션 만에 키웠다. 다만 이 설계는 학습과 수행(총 보상 차이에 따른 유인 효과)을 가르지 못한다(fig. S6E).
- **총 보상량 일치**(fig. S6F–L; 10 vs 200 µl, n=4/4): **행동 학습 효율은 차이 없음**(cue 후 보상 수거 시간). 그러나 **NAc DA cue 반응의 학습은 현저히 빨라졌다**(90% 도달 시행 수, paired t-test p<0.001) → 도파민 학습과 행동 학습이 해리된다. 표준군은 cue 전부터 보상구 근처에서 기다리는 전략을 발달시켰다(S6L, p=0.01).
- **머리 고정 3-cue 변별**(Fig. 6; GRAB-rDA3m): CS+ 5 µl, CS– 무보상, CS++ 15 µl(표준 범위군) 또는 75 µl(큰 범위군). ITI를 길게, 시행 수는 일치시켰다.
  - 표준 범위군: NAc DA가 cue·보상 시점에 **상대적 예측 보상 차이**를 반영했고, CS– 뒤 누락에 **음의 반응**을 보였다(보상 예측 상관).
  - 큰 범위군: cue DA 반응은 똑같이 빨리 생겼지만 **CS+와 CS–의 변별이 사라졌고**, 예기 핥기 발달이 손상됐으며(cued licking P=0.02), **누락 시점의 억제가 없었다**.
  - → 매우 큰 보상을 가능한 결과로 넣으면 cue 변별 학습은 빨라지지 않고, **NAc DA가 cue·보상의 상대적 가치를 반영하는 충실도가 달라진다**.

### Supplementary Note — TDRL은 보상 크기에 대해 "애매하다(equivocal)"
- 기본 갱신식 **V_{t+1} = α·R_t + (1−α)·V_t** 는 V=R로 수렴한다. 점근에 도달하는 시행 수는 **α가 정하고 R과는 무관하다**. TD 시뮬레이션에서 R=1과 R=10은 시행당 같은 속도로 cue 쪽으로 역전파되고, α를 3배로 하면 수렴이 시행 400 → 150 수준으로 빨라진다.
- **"학습 속도"의 측정법이 결론을 바꾼다**: 임의의 **역치 통과** 시점으로 재면 α↑와 R↑ 모두 빨라 보여 둘을 구분할 수 없다(Gallistel의 "최초 이탈" 방식). **점근 도달 시간**으로 재면 α만 효과가 있다. 이 연구는 후자로 정의했다.
- 행동은 학습된 가치의 직접 함수일 수 없다. 작은 보상에서도 예기 핥기가 포화(~7 Hz)에 이르므로 가치→행동 사상에는 **정규화(policy)** 가 필요하고, 보상 크기 민감성은 이 policy 구현에서 들어온다.
- 다중 행동(Q-learning, grid world)에서 greedy·ε-greedy 선택은 **상대적** Q만 보므로 R과 무관하게 같은 속도로 배운다(α를 바꾸면 크게 달라진다). 반면 선택 확률이 **절대** Q 차이에 비례하는 policy(2AFC 모델 일부, ref 38·46)는 R↑ → 겉보기 학습↑를 예측한다.
- → "RPE 기반 RL 모델은 보상 크기 효과에 대해 정식화에 따라 예측이 갈린다."

### Discussion — 저자의 작업 가설(부분적으로 해리 가능한 세 기전)
- **학습률**: 무경험 식욕 학습기의 작은 phasic DA burst는 주로 학습률을 조절한다(ref 17·18; ref 27 = [[jeong-2022-mesolimbic-dopamine-release-conveys-causal|Jeong 2022]]도 "phasic DA = 이산화된 적응적 학습률"로 분류해 인용). 이는 DA가 다른 선조체 회로가 계산한 **eligibility trace를 포획**한다는 전기생리·모델과 정합한다. 오류 기반 DA 기전은 장기 훈련 후 나중에 나타날 수 있다.
- **보존(capture)**: systems consolidation과 유사하다. 해마·고위 시상·전두피질은 도파민 투사가 조밀하지 않으므로 **ACh·NE 같은 "도파민 밖 RL(extradopaminergic RL)"** 이 충분조건이거나 필수 보조일 가능성이 있다. 대안으로, 항상성 욕구가 채워질 때의 **수 초–수 분짜리 느린 DA 역학**(ref 77–80: 소뇌 포만 네트워크, 장내미생물 경로, [[grove-2022-dopamine-subsystems-track-internal|Grove 2022]], [[zhu-2025-hedonic-eating-is-controlled-by|Zhu 2025]])이 **수분 상태 신호**를 통해 보존에 관여할 수 있다고 추측한다. 이번 자극 패러다임은 그런 장기 신호를 재현하지 못했을 것이다.
- **관여(engagement)**: 관여의 회로 기전은 거의 제안된 바 없다. 저자는 시상하부·망상체·PAG가 전뇌와 독립적으로 행동을 지배할 수 있으므로, **지속적 DA 방출이 하행 전뇌 출력을 강화해 행동 통제를 전뇌 쪽으로 기울인다**고 추측한다. 수백 ms를 넘는 DA 자극부터 즉각적 동기 유사 효과 같은 새로운 행동 결과가 나타난다는 선행 관찰(ref 23·64·65)과 같은 축이다.
- **실무**: 보상 크기를 체계적으로 탐색하면 마우스 행동 실험의 효율이 오른다. 다만 큰 보상은 식욕적 접근 행동의 학습을 바꾸되 개선하지는 않았고(fig. S5), Pavlovian cue 변별 효율도 올리지 않았다. cue 변별에는 덜 가치 있는 자극에 대한 반응 **억제**를 배우는 요소가 있는데, 관여 증가는 이를 돕지 않거나 오히려 방해할 수 있다. 오반응에 벌이 있는 명시적 의사결정 과제(IBL)에서는 이득이 남았다.
- **ADHD 유비(추측)**: 이탈이 잦은 개체의 겉보기 학습 효율은 몰입 구간의 "진짜" 학습 속도보다 훨씬 느렸다. methylphenidate는 DA 재흡수 억제제이고 재흡수는 phasic 방출의 지속시간을 정한다 → 그 효과는 큰 보상 소비나 연장 자극이 만든 **수 초짜리 phasic 방출**과 비슷할 수 있다. 검증은 향후 과제로 남겼다.

### 방법 요약
- 총 93마리(3–8개월), DAT-Cre::Ai32·DAT-Cre. 물 제한 1.2 mL/일(체중 75% 미만이면 완화). 보상은 0.05 mg/mL 사카린 물. Janelia IACUC.
- 숨은 표적 과제는 하루 1세션이며, 누적 보상 0.8 mL를 받으면 종료했다(초기 세션은 3 h 상한).
- photometry: NAc core에 dLight1.3b(+tdTomato) 또는 GRAB-rDA3m(+GFP). 100 Hz time-division, ΔF/F z-score. 분석창은 평균 반응 전체를 덮도록 잡았다.
- 통계: rank-sum·signed-rank, 1·2-way ANOVA(Kruskal–Wallis로 확인), Pearson. n은 생물학적 반복.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **소비 국면 도파민의 재해석 축**: 위키는 소비 중 VTA/NAc 도파민을 기호성에 따른 bout 지속([[zhu-2025-hedonic-eating-is-controlled-by|Zhu 2025]])이나 bout 개시 강화([[gordon-2026-lateral-hypothalamic-control-of-the|Gordon 2026]])로 읽는다. 이 논문은 같은 시간창의 **DA 지속시간**이 학습률과 관여를 정한다고 본다. 섭식 photometry에서 "bout 동안 DA plateau의 길이"를 **학습 지표**(다음 세션 수행 개선)와 함께 회귀하면 세 해석을 가를 수 있다.
- **배고픔 상태 × 보상 크기**: 이 연구는 물 제한 상태에서 물 보상의 크기만 바꿨다. NMPU의 Need가 학습률을 바꾸는지(예: 금식 정도에 따라 같은 음식 보상의 DA plateau와 학습 속도가 달라지는지)는 위키 자료에 없다. [[grima-2026-a-global-dopaminergic-learning-rate|Grima 2026]]이 "포만이 학습률을 낮출 것"이라고 추측했을 뿐이다. 사용자 lab의 금식 패러다임으로 바로 검증할 수 있는 질문이다.
- **engagement의 두 기질**: 이 논문은 sustained phasic DA가 세션 수준의 상태형 이탈을 막는다고 본다. [[marcus-2026-endocannabinoids-facilitate-reward-engagement-through|Marcus 2026]]은 sipper 관여의 bout 수준 지속을 aPVT→NAc 2-AG gain control로 설명하고 "개시=도파민 / 지속=eCB" 분업을 시사한다. 두 "engagement"는 시간척도(세션 내 수십 분 vs bout 수 초)와 측정이 다르다. 같은 개체에서 DA plateau와 2-AG를 동시에 재야 정리된다.
- **DTx·인간 행동 개입**: "희소한 큰 보상이 학습을 빠르게 하고 이탈을 줄인다"는 결과를 보상 기반 DTx(예: 식행동 교정 앱의 보상 스케줄)로 옮기려면, 인간의 보상 크기 ↔ 학습률 관계와 cue 변별 손상 위험(Fig. 6)을 함께 검증해야 한다. 이식은 아직 가설이다.
- **실험 설계 실무**: lab의 조작적 섭식 과제 훈련이 느리다면, 총 보상량을 유지한 채 **첫날 큰 보상(downshift)** 또는 **큰 보상 5–15% 끼워 넣기**가 시행 수를 지키면서 훈련 기간을 줄이는 방법이 된다. 단 Pavlovian cue 변별이 주 종속변수라면 피해야 한다.

## ⚠️ 위키 내 충돌·긴장 (병기 — 덮어쓰지 않음)
- **학습 초기 보상 DA의 추세**: 이 논문과 [[grima-2026-a-global-dopaminergic-learning-rate|Grima 2026]]에서는 조작적 과제의 NAc DA 보상 반응이 세션 안·훈련에 걸쳐 **감소**한다. [[jeong-2022-mesolimbic-dopamine-release-conveys-causal|Jeong 2022]] Test 1에서는 무경험 머리 고정 마우스의 반복 무예측 sucrose 반응이 **증가**한다. 과제(자기 개시 조작 vs 무예측 전달)·보상(물 vs sucrose)·IRI 구조가 달라 직접 모순은 아니다. 다만 "학습 초기 DA 추세"를 판별 변수로 쓸 때는 과제 구조를 함께 적어야 한다([[concept-reward-prediction-error]] 판별표).
- **engagement의 신경 통화**: 위 함의 절 참조. [[marcus-2026-endocannabinoids-facilitate-reward-engagement-through|Marcus 2026]]의 aPVT^NTS 말단 활동은 관여와 음의 상관을 보이고, 그 통화는 2-AG다. 이 논문은 DA 지속을 관여의 충분조건으로 제시한다(광자극). 두 결과는 양립할 수 있지만 "engagement = 도파민 아님"으로 일반화하면 안 된다.
- **보상 크기와 DA 포화**: Eshel 2016(ref 19, 위키에 원전 없음)은 VTA DA 반응이 1–20 µl에서 포화한다고 보고했다. 이 논문은 10 s 적분으로 재면 5–100 µl에서 포화하지 않는다고 본다. **측정 창(peak vs 적분)과 수준(VTA 발화 vs NAc 방출)** 이 다르다. [[concept-reward-prediction-error]] §6("측정 수준과 시간창이 해석을 바꾼다")과 같은 문제다.
- **cue 학습의 행동–도파민 해리**: 총량을 맞춘 trace conditioning에서 DA cue 반응은 빨리 배웠는데 행동은 같았다(fig. S6). "cue DA = 행동 학습의 판독치"라는 가정을 쓰는 페이지(예: cue 도파민 = 주관적 가치, [[pascoli-2026-conditioned-accumbal-dopamine-transients|Pascoli 2026]])에 적용할 때 주의한다.

- **긴 DA 자극의 해석 — 같은 lab의 원전과의 긴장**: 이 논문은 1 s·8–10 mW VTA 자극을 ">50 µl 보상 반응의 생리적 모사"로 보고 학습률·관여 증가로 읽는다. [[coddington-2023-mesolimbic-dopamine-adapts-the-rate|Coddington 2023]]은 비슷한 범위의 500 ms·10 mW 자극(내인성의 3–5배)을 **학습률 + 부호 있는 오류 편향**으로 해석했고, Pavlovian cue에 가치 같은 학습을 일으킨다고 보고했다. 과제(조작적 vs Pavlovian) 차이일 수 있으나 두 원전은 이를 비교하지 않는다.
- **이 논문의 Pavlovian 결과와 원전의 개체차(연결 해석)**: 큰 보상이 Pavlovian 예기 핥기·CS+/CS– 변별을 손상시킨 결과(Fig. 6)는, [[coddington-2023-mesolimbic-dopamine-adapts-the-rate|Coddington 2023]]에서 초기 보상 DA(감각 반응)가 큰 개체일수록 예기 핥기를 덜 배운 결과(r=0.81)와 "강한 보상 감각 반응이 준비적 정책 학습을 방해한다"로 묶일 수 있다. 두 논문 모두 이 연결을 명시하지 않는다.

- **보상 간격 혼입 가능성**: ref 50 preprint의 게재판 [[burke-2026-duration-between-rewards-controls-the|Burke 2026]]은 보상당 학습률이 보상 간격(IRI)에 비례하고, 30–600 s에서 학습 총 시간이 시행 수와 무관함을 보였다. 숨은 표적 과제의 5 µl × 180 vs 100 µl × 9는 세션당 보상 횟수가 20배 달라 간격도 달랐을 가능성이 높다(이 논문에 IRI 자료 없음). 크기 효과의 일부가 간격 효과일 수 있다. 반면 joystick·IBL·광자극 실험은 시행 간격을 유지하고 크기만 바꿨다. Burke는 Pavlovian 과제라 그대로 옮길 수 없다.

## 원문 내 불일치·주의 (기록)
- **숨은 표적 과제의 세션 총량**: 본문은 "5 µl × 180 = 100 µl × 9"(= 0.9 mL)로 적고, Methods는 "누적 0.8 mL 수집 시 세션 종료"로 적는다.
- **IBL 군 크기·큰 보상 규칙**: Fig. 5B legend는 표준 n=6·큰 보상 n=4·"성공 시행 무작위 5–10%에 50 µl"로, 그림 라벨은 큰 보상 n=6·표준 n=4로, Methods는 "**매 5번째** 성공 시행에 추가 45 µl"로 적는다. 총 10마리는 일치한다.
- **joystick 과제 자극 시점**: Fig. 4E legend는 "첫 소비 핥기", Methods는 "성공 당김 1 s 후"(보상 전달 시점)로 적는다.
- **IBL 공개 데이터**: 현재 IBL 데이터베이스에는 원논문 태그가 154마리로 원논문(140)과 다르다. 저자는 첫 20–50시행부터 전문가 수준이던 16마리를 빼고 139마리를 썼다(무경험과 불일치). 저자는 이 때문에 IBL 코호트의 학습 효율이 오히려 **과대평가**됐을 것이라고 본다.

## 관련 페이지
- [[coddington-2023-mesolimbic-dopamine-adapts-the-rate]] — ★ 학습률 가설 원전(ref 17; 같은 교신저자 Coddington·Dudman): Pavlovian 정책 학습 ACTR, 보정 폐루프 자극 역설. 긴 자극 해석 긴장(위 절).
- [[person-dudman-joshua]] — 교신저자 인물 hub.
- [[grima-2026-a-global-dopaminergic-learning-rate]] — ★ **같은 lab의 짝 논문**(본 논문 ref 18): 6선택지 foraging에서 NAc core DA = 전역·동적 학습률 α(τ)(AQUA 모델). 본 논문은 그 가설의 "보상 크기" 예측을 검증한다.
- [[concept-dopamine-learning-rate]] — 학습률 가설 개념 hub(정의·판별 예측·위키 내 학습률 서술 지도).
- [[concept-reward-prediction-error]] · [[gershman-2024-explaining-dopamine-prediction-errors-beyond]] · [[adam-2026-dopamine-takes-hit-how-neuroscience]] — RPE 논쟁. Dudman lab의 "중도/새 모델" 입장의 실험적 근거.
- [[jeong-2022-mesolimbic-dopamine-release-conveys-causal]] · [[concept-anccr]] — ref 27로 인용. 무경험 보상 DA 추세는 반대 방향(위 긴장 절).
- [[zhu-2025-hedonic-eating-is-controlled-by]] · [[gordon-2026-lateral-hypothalamic-control-of-the]] · [[concept-consumption-vigor]] — 소비 국면 도파민. 본 논문은 그 지속시간을 학습률·관여로 읽는다.
- [[marcus-2026-endocannabinoids-facilitate-reward-engagement-through]] — engagement의 eCB 기질(대조).
- [[grove-2022-dopamine-subsystems-track-internal]] — Discussion이 "항상성 충족 중 느린 DA 역학"의 예로 인용(ref 79).
- [[mathis-2026-leveraging-insights-from-neuroscience-to]] — 미로 마우스는 몇 번의 시행만으로 물 보상 지점을 찾는다(2AFC 대비 학습률 1,000배로 서술). 이 논문의 IBL 결과는 기존 2AFC의 느린 학습이 과제 구조뿐 아니라 **작은 보상** 탓일 수도 있음을 보여 주는 짝 자료다.
- [[concept-effort-based-decision-making]] — joystick 저항 과제. 큰 보상이 고부하 성공을 늘렸지만 점근 활력은 같았다.
- [[hamid-2016-mesolimbic-dopamine-signals-value-work]] — ref 37로 인용(DA와 work·자기 개시 잠복기). 본 논문의 광자극도 다음 시행 개시 잠복기를 줄였다.
- [[concept-nucleus-accumbens]] · [[concept-dopamine-reward-system]] — 측정 부위(NAc core)와 상위 hub.
- [[concept-digital-therapeutics]] — 보상 스케줄 설계로의 이식 가설(위 함의 절).
- [[touponse-2026-cholinergic-modulation-of-dopamine-release]] — 이 논문이 '도파민 밖 RL' 후보로 든 ACh가 NAc에서는 **도파민 방출 자체를 노력에 따라 증폭**한다(보상 크기에는 무반응). 큰 보상 모사 자극의 실제 방출량이 과제 노력에 따라 달라질 가능성(연결 해석).
- [[burke-2026-duration-between-rewards-controls-the]] — ref 50 preprint의 게재판(추정). 보상당 학습률 ∝ 보상 간격 → 숨은 표적 과제의 간격 혼입 긴장.
