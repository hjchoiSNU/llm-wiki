---
title: ANCCR — 회고적 인과 학습 (Adjusted Net Contingency for Causal Relations)
type: concept
created: 2026-10-03
updated: 2026-10-03
aliases: [ANCCR, anchor, retrospective causal learning, 회고적 인과 학습, predecessor representation, meaningful causal target]
---

> [!takeaway] 연구 방향 관점의 핵심
> 위키 12개 이상 페이지가 "RPE의 대안"으로 스쳐 언급하던 **ANCCR의 개념 hub**. 핵심은 한 문장이다: **동물은 "이 cue 뒤에 보상이 올까?"(prospective)가 아니라 "이 보상 앞에 무엇이 있었나?"(retrospective)를 먼저 배우고, 중변연계 도파민은 "지금 이 사건이 그 원인을 학습해야 할 의미 있는 인과 표적인가"를 신호한다.** 원전 [[jeong-2022-mesolimbic-dopamine-release-conveys-causal|Jeong 2022 Science]].
> 사용자 연구에 필요한 이유: (1) 음식 보상·음식 cue의 NAc 도파민을 읽는 **판별 지표**(직전 보상 간격과의 상관 부호, 맥락 노출에 따른 보상 반응의 증감, 소거 후 cue 반응 잔존)를 준다. (2) [[concept-need-motivation-pleasure-utility|NMPU]]의 Pleasure/Utility "교사 신호"를 RPE 하나로 고정하지 않게 해 준다 — 특히 **시간~일 지연의 Utility 학습**에 대해 state 타일링 없이 확장되는 알고리즘 후보(연결 가설). (3) 소거 vs contingency degradation의 차이는 [[concept-digital-therapeutics|DTx]] cue 모듈 설계 변수다.

# ANCCR — 회고적 인과 학습

## 한 줄 요약
자극마다 지수 감쇠 **eligibility trace**를 유지하고, 의미 있는 사건(보상)이 일어날 때 그 앞에 특정 cue가 **우연 이상으로** 있었는지(predecessor representation contingency)를 계산한 뒤, Bayes 규칙으로 **전향적 예측**(successor representation contingency)으로 변환·가중합해 인과 연합의 cognitive map을 만드는 학습 알고리즘. 그 조정된 순 유관성(ANCCR) 값이 "meaningful causal target" 신호이며, 원전은 이것이 NAc 도파민 방출의 내용이라고 주장한다 (Namboodiri lab; [[jeong-2022-mesolimbic-dopamine-release-conveys-causal]]).

## 핵심 내용

### 용어 사전 (원전 본문·Fig. 1C + 보충 Methods)
| 용어 | 정의 (말로 쓴 식) |
|---|---|
| **Prospective association** | cue 뒤에 보상이 오는 정도 — "보상이 cue를 따르는가?" (TDRL의 cue value) |
| **Retrospective association** | 보상 앞에 cue가 있는 정도 — "cue가 보상에 앞서는가?" |
| **Eligibility trace E(cue)** | 자극 발생 때마다 오르고 지수적으로 감쇠하는 기억 흔적; 경험된 자극률의 온라인 추정 |
| **M(c←r)** | 보상 시점들에서 평균한 cue eligibility trace |
| **M(c←−)** | 무작위 시점에서 평균한 cue eligibility trace(= baseline) |
| **PRC(c←r)** (predecessor representation contingency) | M(c←r) − M(c←−) = "각 보상 앞에 우연보다 더 있었던 (할인된) cue의 수" |
| **SRC** (successor representation contingency) | PRC를 Bayes 규칙으로 변환한 전향적 예측 신호 |
| **Net contingency** | PRC와 SRC의 가중합 → 인과 cognitive map 구축에 사용. `C↔ = w·SRC + (1−w)·PRC`, 임계 θ를 넘으면 putative cause |
| **ANCCR** | 조정된 net contingency; 사건이 **meaningful causal target**인지의 신호. 조정 = **i의 원인 k가 최근 i에 앞섰다면 k의 ANCCR만큼 차감**: `Ĉ↔ij = C↔ij·Rij − Σ_{k≠i} Ĉ↔kj·Δk←i·I(k↔i)` (suppl. 식 15, fig. S4) |
| **Δ (recency)** | 직전 1회 발생만 보는 비누적 trace `exp(−(tj − ti)/T)` — "이번에 k가 i 바로 앞에 있었나"를 trial 개념 없이 표현 |
| **Causal weight R** | 보상 크기를 반영하는 연결 가중치; DA_j ≥ 0이면 delta rule로 보상 크기에 수렴, **DA_j < 0이면 "과대인과"로 판정해 최근 추정 원인들의 R을 경험 횟수 역수 비례로 낮춤** (suppl. 식 18–20) |
| **도파민 (모델 정의)** | `DA_i = Σ_j Ĉ↔ij·I(j∈MCT)` — 모든 MCT에 대한 ANCCR의 합 (suppl. 식 17) |
| **Meaningful causal target (MCT)** | 원인을 학습해야 할 자극. 선천적(보상·처벌) 또는 획득적(보상을 일으킨다고 학습된 cue). 정식: `DA_j + b_j > θ`(θ=0.6; 보상 b=1, 비보상 자극 b=0 단순화) (suppl. 식 8) |
| **보상 자체의 ANCCR** | M(r←r) − M(r←−): 보상 시점의 최근 보상률(현재 포함) − baseline 보상률; 점근 ≈ 1×incentive value |

> 주의: 여기의 SRC는 TD 학습으로 미래 점유를 예측하는 **SR(successor representation) 모델**(Stachenfeld 2017 등, [[lee-2024-feature-specific-prediction-error]]에서 VTA 데이터 설명 실패로 평가)과 이름이 같지만, 원전에서는 **회고적 PRC로부터 Bayes 변환으로 유도**되는 양이다. 같은 대상으로 취급하지 말 것.

### 정식 식·파라미터 요약 (원전 보충 Methods; 전체 표는 [[jeong-2022-mesolimbic-dopamine-release-conveys-causal|원전 페이지]] "정식 수식" 절)
- **핵심 6식**: eligibility trace `E←i(t) = Σ exp(−(t−ti)/T)` → MCT j 시점마다 `M←ij ≡ M←ij + α[E←i(tj) − M←ij]`, 무작위 시점(0.2 s마다) `M←i− ≡ M←i− + kα[E←i− − M←i−]` → **PRC** `C←ij = M←ij − M←i−` → **SRC** `C→ij = C←ij · M←j−/M←i−`(Bayes; suppl. Note 1·fig. S3) → **net** `C↔ij = w·C→ij + (1−w)·C←ij` → **ANCCR**(위 조정식) → **DA**.
- **파라미터(원전 자체 실험 시뮬레이션 공통)**: **T = 1.2 × 평균 IRI, α = 0.02, k = 1, w = 0.5, αR = 0.2, θ = 0.6**; 보상 첫 경험 시 α는 0.25에서 0.02로 지수 감쇠(상수 0.1). 기존 실험 재현(Fig. 2·S13)에서는 실험별로 k·w·θ·αR·T를 조정.
- **조정항의 근거**: cue1→cue2→보상 경험에서 "직전 cue가 보상을 직접 일으킨다"는 귀납 편향으로 인과 모델 cue1→cue2→보상을 추론하고, 한 "trial"의 ANCCR 합 = Pearl의 direct causal effect 합이 되도록 cue2에서 cue1 몫을 차감; trial 지표를 recency Δ로 대체. 보상 자신의 ANCCR도 같은 방식으로 학습된 cue 몫이 빠져 **cue 학습 후 보상 반응이 줄어든다**.
- **행동**: cue value = `SRC × R − action cost` → softmax. 즉 **전향적 value는 행동 선택 단에서 쓰인다**(원전: "행동은 표준 TDRL과 비슷하게 제어"); 단 시간 맞춘 행동에는 별도의 지연 학습이 필요하며 그 알고리즘은 제안되지 않음.
- **효율 주장**: 쌍별 연합 N²개를 MCT 시점 학습으로 N×(MCT 수)로 줄임; CSC형 TD는 자극당 지연/Δ개 state가 필요해 기억이 지연에 선형 증가(suppl. Note 7).

### 알고리즘 흐름 (말로)
1. 모든 자극의 eligibility trace를 유지한다(과거 기억만 필요 — 미래 state 타일링 불필요).
2. 의미 있는 사건이 오면, 각 후보 cue의 trace가 **무작위 시점 대비 높았는지** 누적 평가(PRC).
3. PRC를 전향적 예측(SRC)으로 변환하고 가중합해 **net contingency** → 인과 지도 갱신.
4. ANCCR가 높은 자극은 그 자체가 새 meaningful causal target이 되어(DA + b > θ), **그 원인**을 다시 학습하게 한다(순차 조건화에서 CS1→CS2 연쇄). 따라서 **사건 시점의 도파민 억제 = 그 사건의 원인 학습 차단**(원전 fig. S13F: backward·second-order conditioning, sensory preconditioning 설명의 핵심).
5. 행동: ANCCR가 **임계값을 넘으면** "cue가 보상을 일으킨다"는 인과 모델이 서고, 이어서 **지연을 따로 학습**해 시간 맞춘 반응이 나온다 → 도파민 학습은 점진·선행, 행동 학습은 급격·지연.
6. 소거: 보상이 없으면 회고적 연합(PRC)은 **갱신되지 않는다** → cue의 도파민 반응은 남고, 행동은 "맥락의 기저 보상률=0" 학습으로 꺼진다.
7. 과대인과: 보상 시점 DA < 0이면 보상이 원인들로 **과대 예측**된 것으로 보고, 최근의 추정 원인들의 causal weight를 덜 경험된(불확실한) 원인일수록 크게 낮춘다(suppl. 식 20, 28–34). 보상 **누락 반응**은 누락이 하나의 state로 추론될 때만 생긴다 — 확률을 낮추면 생기지만, 지연을 영구 연장하면 지연 추정만 갱신되어 생기지 않는다(fig. S4D → 원전 Test 5).

### TDRL RPE와의 대조
| 축 | TDRL RPE | ANCCR |
|---|---|---|
| 학습 방향 | 전향적: cue에서 앞을 보고 예측, 틀리면 갱신 | 회고적: 의미 있는 사건에서 뒤를 보고 원인 추론 → 전향 예측은 유도 |
| 시간 표상 | 지연을 state(CSC·microstimulus)로 타일링 — 비확장적 | eligibility trace·사건률 — 원전은 두 자릿수 시간척도 불변성 주장 (IRI로 시간척도 설정 가정) |
| 도파민의 내용 | 예측과 결과의 차이 | 사건이 meaningful causal target인지 (incentive value로 스케일) |
| 같은 예측을 하는 조건 | cue 학습 전후 cue↑/보상↓, 누락 dip, 확률·크기, blocking·unblocking·overexpectation·conditioned inhibition | (동일 — 원전 Fig. 2 시뮬레이션) |
| 갈리는 조건 (원전 검증) | 무예측 보상 반복 → ↓; 직전 IRI와 음의 상관; 소거 → cue 0; 지연 연장 → cue↓·옛 시점 dip; trial-less intermediate cue 음성; backprop; CS2 먼저 | ↑; 양의 상관; cue 양성 유지; 불변·dip 없음; 약한 양성; backprop 없음; CS1·CS2 동반 |
| "prediction error" | 핵심 교사 신호 | 사건률 관련 예측오차는 포함, **관습적 TDRL RPE만** 부정 (suppl. Note 4: 보상률 예측오차는 Test 2만 설명, 소거와 불일치) |
| state space 의존성 (suppl. fig. S15) | 무작위 보상(Tests 1–2)은 합리적 state space 4종·semi-Markov(Daw 2006) 모두 불일치; trial-less 과제는 **정확한 최소 Markov state space를 a priori로 알면** 해석적으로 구분 가능(저자 인정) — 단 state 수 `2^{X/dt}`(예: ≈10¹⁸) | 사전 state space 없이 동작한다는 **간결성·표본효율** 주장 |

### 위키 내 증거·서술 지도
| 페이지 | ANCCR와의 관계 | 비고 |
|---|---|---|
| [[jeong-2022-mesolimbic-dopamine-release-conveys-causal]] | **원전**: 11개 검증, NAcc dLight1.3b | 유일한 1차 자료 (본문 + 2026-10-03 추가된 보충자료: 식·파라미터·Notes 1–10·figs. S1–S15) |
| [[gershman-2024-explaining-dopamine-prediction-errors-beyond]] | 일반화 RPE 진영이 "framework 밖"으로 분류 | Kim 2020 ramp를 RPE 결정 실험으로 보나, 원전은 그 ramp도 ANCCR로 설명한다고 주장 — suppl. fig. S13A–D 확인 결과 **이산 cue 계열로 근사한 시뮬레이션 재현**(teleport·속도 변화 포함, 속도 조건은 "상대 속도를 net contingency에 곱한다"는 추가 가정)이며 데이터 재분석은 아님 |
| [[hjort-2026-prefrontal-to-ventral-tegmental-area]] | contingency degradation의 **경쟁 알고리즘**(meta-RPE) | 원전 Test 7은 CD를 회고적 연합 감소로 설명 |
| [[adam-2026-dopamine-takes-hit-how-neuroscience]] · [[concept-dopamine-reward-system]] | 2차 서술("보상 → 거꾸로 cue 검색", 흡연 cue relapse) | relapse 사례는 기사 해설이며 원전에 없음 |
| [[hamid-2016-mesolimbic-dopamine-signals-value-work]] | "forward 학습 부정·양립 불가"로 서술 | 원전은 전향 예측을 유도(SRC)하고 행동은 SRC 기반 value의 softmax로 모델링하며 ramp도 설명 — 과장 |
| [[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation]] · [[rice-2019-closing-in-on-what-motivates]] | "NAc 국소 메커니즘으로 호환" | 위키 측 추론; 원전은 OFC→VTA를 공급원 후보로 제시하고, suppl. fig. S14에서 NAc를 계산 장소가 아닌 **"도파민을 행동으로 통합(임계 교차)"하는 하류**로 둠 |
| [[lee-2024-feature-specific-prediction-error]] | forward TD 가정이라 framework 밖 | — |
| [[blanco-pozo-2024-dopamine-independent-effect-rewards-choices]] · [[huang-2024-dopamine-mediated-interactions-between-short]] · [[morales-2017-ventral-tegmental-area-cellular-heterogeneity]] · [[salamone-2012-mysterious-motivational-functions-mesolimbic]] | 진영 비교표의 한 행(간접·부분 호환) | 원전 직접 검증 없음 |
| [[person-sharpe-melissa]] | model-free TDRL 위반 도파민 학습(Sharpe 2017·2020, Seitz 2022)을 원전이 ANCCR로 설명 | 원전 fig. S13 (보충자료) |
| [[concept-orbitofrontal-cortex]] | 회고적 정보 공급원 후보(OFC→VTA 장기 기억, Namboodiri 2019) | 위키에 Namboodiri 2019 원전 없음. suppl. fig. S14 회로 가설: **LEC(eligibility trace 버퍼) → 해마(SR·PR 증거) → OFC(PRC·임계) / PL(SRC·임계) → 중뇌 DA(ANCCR) → NAc(행동 통합)** |

### 열린 문제 (원전 Discussion + 위키 관점)
- 회고적 정보는 어디서 오는가 — OFC 후보(원전), 다른 경로 미검증.
- 시간척도 추론: 현재는 평균 IRI 가정(T = 1.2×IRI 고정). 다중 시간상수 계가 원리적 해법 후보.
- **지연 학습 알고리즘 부재**: 인과 지도 뒤 "인과 사건 간 지연"을 배우는 단계(suppl. fig. S2 Step 2)는 제안되지 않음.
- **trial 내 backprop 불일치**: Amo 2022(후각 cue, 복측 선조체 photometry)의 점진적 시간 이동 vs 원전 Test 9(청각 cue, backprop 없음) — 원전은 후각 자극의 onset/offset 불명확·탐지 향상으로 설명(suppl. Note 9, 미검증). Amo 2022 원전은 위키에 없음.
- **처벌·아구역**: ANCCR에 부호 있는 incentive value vs 절댓값(salience)을 곱하느냐에 따라 NAc core vs medial shell 도파민이 학습 vs 동기에 다르게 기여할 수 있다는 추측(suppl. Note 8) — 미검증.
- NAc core 외 영역(DLS·tail·BLA·mPFC)의 도파민도 ANCCR인가 — 미검증. 위키의 [[grove-2022-dopamine-subsystems-track-internal|자원별 DA sub-system]]·[[weber-2025-interoceptive-origin-reinforcement-learning|primary/proxy/secondary]] 틀과의 관계는 자료 없음.
- TDRL state space의 무한 유연성 → 반증 가능성 문제(원전 인정).
- 행동-조건적(instrumental) cognitive map까지 인과 추론으로 설명되는가.

## 사용자 연구 연결 (연결 가설 — 원전 주장 아님)
- **판별 지표 체크리스트** (음식 보상 photometry): ① 무경험 맥락에서 반복 무예측 보상의 도파민 추세(↑ = ANCCR, ↓ = RPE), ② 직전 보상 간격과의 상관 부호(양 = ANCCR, 음 = RPE), ③ 소거 후 cue 반응 잔존, ④ 지연 변경 시 cue 반응 불변 여부. 섭취 중 lick 성분은 [[gordon-2026-lateral-hypothalamic-control-of-the|LH 제어 선조체 도파민]]과 분리 필요.
- **NMPU**: Pleasure의 "forward RPE" 서술 옆에 **회고적 credit assignment**를 병기할 근거. Utility(지연 결과)의 [[concept-flavor-nutrient-conditioning]]·[[concept-conditioned-taste-aversion]]·[[yang-2026-a-sync-state-in-the|sync state]] 학습에 eligibility-trace형 회고 추론이 후보가 될 수 있으나, 원전 실험 검증은 수 초–~100 s 범위. 원전 suppl. Note 7은 **24 h 지연 CTA**를 직접 예로 들어 "질병 시점에서 최근 자극을 salience 순으로 정렬해 credit 부여"를 회고 학습의 장점으로 논증(시뮬레이션·실험 없음).
- **재발·DTx**: 소거 후에도 남는 cue 도파민([[concept-cue-reactivity]]·[[concept-food-addiction]]) vs 회고적 연합을 희석하는 contingency degradation — [[concept-digital-therapeutics|DTx]] cue 모듈의 대안 축.
- **가치 × 인과성**: ANCCR는 incentive value로 스케일 → [[pascoli-2026-conditioned-accumbal-dopamine-transients|cue 도파민=주관적 가치]]·[[berridge-2023-separating-desire-from-prediction-of|갈망≠예측]]과의 분리 검정이 필요.

## 관련 페이지
- [[jeong-2022-mesolimbic-dopamine-release-conveys-causal]] — 원전(11개 검증, 통계, 한계).
- [[concept-dopamine-reward-system]] — 도파민 RPE 논쟁 hub.
- [[gershman-2024-explaining-dopamine-prediction-errors-beyond]] — 일반화 RPE 진영의 대응.
- [[hjort-2026-prefrontal-to-ventral-tegmental-area]] — contingency degradation의 meta-RPE 대안.
- [[adam-2026-dopamine-takes-hit-how-neuroscience]] — 대중 서술(2차).
- [[hamid-2016-mesolimbic-dopamine-signals-value-work]] · [[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation]] · [[rice-2019-closing-in-on-what-motivates]] — NAc 도파민 ramp·방출 진영.
- [[lee-2024-feature-specific-prediction-error]] · [[blanco-pozo-2024-dopamine-independent-effect-rewards-choices]] · [[huang-2024-dopamine-mediated-interactions-between-short]] · [[morales-2017-ventral-tegmental-area-cellular-heterogeneity]] · [[salamone-2012-mysterious-motivational-functions-mesolimbic]] — 진영 비교에서 ANCCR를 다룬 페이지.
- [[person-sharpe-melissa]] — model-based 도파민 학습 진영.
- [[concept-orbitofrontal-cortex]] — 회고적 정보 공급원 후보.
- [[concept-nucleus-accumbens]] — 원전 측정 부위.
- [[concept-one-shot-learning]] — eligibility trace로 시간적으로 떨어진 사건을 잇는 다른 사례(eCB-LTP).
- [[concept-need-motivation-pleasure-utility]] — 교사 신호 알고리즘의 대안.
- [[concept-cue-reactivity]] · [[concept-digital-therapeutics]] — 소거 저항 cue 도파민과 개입 설계.
- [[gordon-2026-lateral-hypothalamic-control-of-the]] — 섭취 중 선조체 도파민(LH 제어).
