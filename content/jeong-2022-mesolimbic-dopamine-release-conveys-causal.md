---
title: "Mesolimbic dopamine release conveys causal associations (Jeong … Namboodiri 2022, Science)"
type: paper
created: 2026-10-03
updated: 2026-10-11
source: "raw/2022 Science (정희정) Mesolimbic dopamine release conveys causal associations.pdf"
source_suppl: "raw/2022 Science (정희정 suppl) Mesolimbic dopamine release conveys causal associations.pdf"
authors: [Jeong H, Taylor A, Floeder JR, Lohmann M, Mihalas S, Wu B, Zhou M, Burke DA, Namboodiri VMK]
year: 2022
journal: "Science (First release 8 Dec 2022); doi:10.1126/science.abq6740 — UCSF Namboodiri lab × Allen Institute (Mihalas)"
---

> [!takeaway] 연구 방향 관점의 핵심
> **위키 전체가 인용해 온 ANCCR의 원전.** 측좌핵 core(NAcc)의 도파민 방출은 "보상이 예상과 얼마나 다른가(TDRL RPE)"가 아니라 **"방금 일어난 사건이 그 원인을 학습해야 할 의미 있는 인과 표적(meaningful causal target)인가"** 를 신호한다는 주장 — 동물은 앞을 내다보며 보상을 예측(prospective)하는 대신, **의미 있는 사건이 오면 기억(eligibility trace)을 거슬러 그 원인을 찾는다(retrospective)**. 두 모델의 예측이 **질적으로 다르거나 흔히 반대**가 되도록 설계한 11개 검증에서 dLight1.3b 신호는 저자 판정상 모두 ANCCR 쪽이었다(개념 hub: [[concept-anccr]]).
> 섭식·보상 연구자에게 가져갈 것 세 가지: (1) **음식 보상의 NAc 도파민 크기는 "놀람"의 척도가 아니다** — 무예측 sucrose를 반복할수록 도파민은 줄지 않고 **커지며**, 직전 보상 간격(IRI)이 **길수록** 커진다(RPE와 정반대). pellet/lick 단위 photometry 분석에서 IRI 공변량을 반드시 넣어야 한다. (2) **음식 cue 도파민은 행동보다 먼저 생기고, 행동이 소거된 뒤에도 남는다** — cue 소거형 [[concept-digital-therapeutics|DTx]]가 행동을 꺼도 도파민 "인과 꼬리표"는 남을 수 있어 [[concept-cue-reactivity|재발]] 취약성의 회로 근거가 된다. 반면 **보상을 cue 없이도 자주 주어 회고적 연합을 희석(contingency degradation)** 하면 소거보다 빨리 떨어졌다. (3) [[concept-need-motivation-pleasure-utility|NMPU]]의 Pleasure/Utility "교사 신호"를 RPE로만 읽어 온 위키의 기본 전제에 **회고적 credit assignment라는 대안 알고리즘**을 준다(연결 가설).

# Mesolimbic dopamine release conveys causal associations (Jeong et al. 2022)

## 한 줄 요약
보상의 **회고적 원인(retrospective cause)** 을 학습하는 알고리즘 **ANCCR**(adjusted net contingency for causal relations, "anchor")을 제안하고, 무예측 보상·cue–보상 학습·지연 연장·소거·background 보상·"trial-less" 과제·trial 내 backpropagation·순차 조건화+광유전 억제까지 **11개 검증**에서 head-fixed 마우스 NAcc 도파민 방출(dLight1.3b photometry)이 **TDRL RPE가 아니라 ANCCR와 일치**함을 보인 Science 논문 (UCSF Namboodiri lab).

## 핵심 내용

### Background — 왜 "회고적" 학습인가
- 지배 이론: cue 뒤에 보상이 얼마나 자주 오는지를 **전향적(prospective)** 으로 예측하고, 결과가 예측과 다를 때 RPE로 갱신(Rescorla-Wagner → TDRL). TDRL은 cue–보상 지연을 **순차적 "state"(CSC·microstimulus 등)** 로 타일링해 예측을 cue까지 전파한다. TDRL RPE는 도파민 세포체 활동과 NAc 방출을 잘 설명해 왔다 [4–13].
- 대안: **원인은 결과보다 앞선다** → "보상이 cue 뒤에 오는가"가 아니라 **"cue가 보상 앞에 오는가"** 를 배우면 된다. cue가 많은 환경에서 미래를 예측하는 것은 비싸지만, **드문 의미 있는 결과(보상)의 원인을 추론**하는 데에는 과거의 기억만 있으면 된다.
- 두 연합은 대부분 과제에서 강하게 상관해 구분이 어렵다. Fig. 1A의 예: cue 뒤 보상 확률 10%(prospective = 10%)라도 **모든 보상이 cue 뒤에만 온다면** retrospective 연합은 100%.

### ANCCR 알고리즘 (본문·Fig. 1C 수준; 정식 식은 아래 "정식 수식" 절 — suppl. Methods)
- **Eligibility trace**: 각 자극의 기억 흔적을 **지수 감쇠 eligibility trace**로 유지 [77] → 그 자극의 경험된 발생률(rate)을 온라인으로 계산 [78].
- **Predecessor representation contingency (PRC)**: `PRC(c←r) = M(c←r) − M(c←−)`
  - `M(c←r)` = **보상 시점들**에서 평균한 cue eligibility trace,
  - `M(c←−)` = **무작위 시점**에서 평균한 cue eligibility trace(= baseline),
  - 의미: "각 보상 앞에 (할인된) cue가 우연보다 몇 개 더 있었는가". 즉 **cue가 우연 이상으로 보상에 선행하는가**의 검정.
- **Successor representation contingency (SRC)**: PRC를 **Bayes 규칙**으로 전향적 예측 신호로 변환(fig. S3, Supplementary Note 1). 감사의 글에 "successor representation이 Bayes 규칙으로 predecessor representation과 관련될 수 있다"는 착상(S. Gu)이 이 정식화에 결정적이었다고 명시.
- **Net contingency** = PRC와 SRC의 가중합 → 이를 이용해 **인과 연합의 cognitive map**을 구축 [20].
- **ANCCR** = 이 net contingency를 조정한 값으로, 경험된 자극이 **meaningful causal target**인지 신호(fig. S4). 원문 가설: **중변연계 도파민이 ANCCR를 전달한다.** (조정의 구체 형태 = "i 자체가 다른 사건 k에 의해 일어난 경우, 최근 k가 i에 앞섰다면 k의 ANCCR만큼 빼 준다" — 식 15, 아래 정식 수식 절; suppl. Methods·fig. S4.)
- **Meaningful causal target**: 그 원인을 학습해야 할 자극. 보상처럼 **선천적으로** 의미 있거나, 보상을 일으킨다는 것을 학습해 **획득적으로** 의미를 얻는다(보상 예측 cue). 처벌도 meaningful causal target이다(Supplementary Note 8).
- **보상 자체의 ANCCR** (Fig. 3B): `M(r←r) − M(r←−)` — 보상 시점에서 계산한 과거 보상률(현재 보상 포함) − baseline 평균 보상률. 점근값은 **sucrose incentive value의 ~1배**.
- **행동 출력**: ANCCR가 **임계값을 넘어야** "cue가 보상을 일으킨다"는 인과 모델이 서고, 그 다음 **지연을 별도로 학습**("3 s 뒤에")해야 시간 맞춘 결정 신호가 생긴다 → 도파민 학습과 행동 학습이 lockstep이 아니다(fig. S2). (suppl. fig. S2: Step 1.1 PRC 학습 → 1.2 SRC 변환 → 1.3 net contingency 임계 교차 → 1.4 cognitive map 구축, 그 뒤 Step 2 "인과 사건 간 지연 학습" → 시간 맞춘 행동. **지연 학습 알고리즘 자체는 제안하지 않는다**고 명시.)
- **시간척도**: TDRL의 state 타일링은 시간의 **비확장적(non-scalable) 표상**이라 단순한 100% cue→보상 환경조차 구조를 잘못 학습한다(fig. S6). ANCCR는 **두 자릿수(10²) 범위의 시간척도**에서 인과 구조를 학습하고 학습의 시간척도 불변성을 설명(figs. S5–S6). 단 현재는 **동물이 평균 보상 간격(IRI)으로 환경 시간척도를 정한다고 가정**한다 (suppl.: eligibility trace 시간상수 **T = 1.2 × 평균 IRI**로 "단순화를 위해" 고정; 실제로는 IRI로부터 학습되거나 시간상수 pool에서 선택돼야 한다고 저자 인정).
- **"prediction error" 일반을 부정하지 않음**: 사건 발생률(rate)에 관한 예측오차는 프레임워크의 일부(Supplementary Note 4). 부정되는 것은 **관습적 state space를 가진 TDRL RPE**.

### 정식 수식 — Model 2: 회고적 인과 학습 (suppl. Methods 식 7–20)
표기: `←` 는 "앞섬(retrospective)", `→` 는 "뒤따름(prospective)", `↔` 는 net, `−` 는 **무작위 시점**, `≡` 는 갱신(update) 연산. `M←ij` 는 "i가 j에 앞서는" predecessor representation 행렬의 원소.

| 식 | 내용 (말로) | 기호 |
|---|---|---|
| (7) eligibility trace | 사건 i의 과거 발생마다 지수 감쇠한 흔적의 합 — 타임스탬프를 저장하지 않고도 평균 발생률을 온라인 계산 | `E←i(t) = Σ_{ti≤t} exp(−(t−ti)/T)` |
| (8) meaningful causal target(MCT) | 학습된 기여(DA_j) + 선천적 기여(b_j)가 임계 θ를 넘으면 MCT | `I(j∈MCT) = I(DA_j + b_j > θ)`, **θ = 0.6**; 보상 **b = 1**, 모든 비보상 자극 **b = 0**(단순화; 매우 큰 소리 등은 원리상 b>0 가능) |
| (9) PR 갱신 | MCT j가 일어날 때마다 다른 모든 사건 i의 그 순간 trace로 갱신 | `M←ij ≡ M←ij + α[E←ij − M←ij]·I(j∈MCT)`, `E←ij = E←i(t=tj)` |
| (10) baseline PR | 무작위 시점(단순화로 **0.2 s마다** 연속 갱신)의 trace 평균 = i의 기저율 × T | `M←i− ≡ M←i− + kα[E←i− − M←i−]` |
| (11) **PRC** | "j의 각 발생 앞에 선택적으로(우연 이상) 있었던 i의 할인된 평균 개수" | `C←ij = M←ij − M←i−` |
| (12) **SRC** (Bayes) | "i의 각 발생 뒤에 선택적으로 따라온 j의 할인된 평균 개수" | `C→ij = C←ij · M←j− / M←i−` |
| (13) **net contingency** | SRC와 PRC의 가중합 | `C↔ij = w·C→ij + (1−w)·C←ij` |
| (14) 추정 인과 관계 | net contingency가 θ를 넘으면 putative cause | `I(i↔j) = I(C↔ij > θ)` |
| (15) **ANCCR** | net contingency × causal weight에서, **i의 원인 k가 최근 i에 앞섰다면 k의 ANCCR만큼 차감** | `Ĉ↔ij = C↔ij·Rij − Σ_{k≠i} Ĉ↔kj·Δk←i·I(k↔i)` |
| (16) recency Δ | 직전 1회 발생만 보는 **비누적** eligibility trace | `Δi←j = exp(−(tj − ti)/T)` |
| (17) **도파민** | 사건 i의 도파민 = 모든 MCT j에 대한 ANCCR의 합 | `DA_i = Σ_j Ĉ↔ij·I(j∈MCT)` |
| (18–19) causal weight R | `Rjj = R0(j)`(외부 신호된 보상 크기; 비보상 자극은 0), MCT j 시점에 delta rule | `Rij ≡ Rij + αR·δij` |
| (20) δ의 부호 의존 | DA_j ≥ 0이면 `δij = Rjj − Rij`; **DA_j < 0이면 j가 "과대인과(overcaused/overexpected)"** → 최근(Δ)·추정 원인(I)인 i들의 R을 **경험 횟수 역수(n_i⁻¹, 불확실성)** 비례로 낮춤 | `δij = (0 − Rij)·[n_i⁻¹Δi←j I(i↔j)] / Σ_{k≠j}[n_k⁻¹Δk←j I(k↔j)]`, `n_i = E←i(T=∞)` |

- **N² → N×(MCT 수)**: 식 9–12만으로 모든 쌍 연합을 배울 수 있으나, 학습을 MCT가 일어날 때로 한정해 기억·계산 비용을 줄이는 것이 나머지 식의 목적(저자).
- **조정항의 유도 (suppl. "Derivation")**: cue1→cue2→보상만 경험한 경우, "직전 cue가 보상을 직접 일으킨다"는 **귀납 편향**으로 가능한 4개 인과 모델 중 **CM2(cue1→cue2→보상)** 를 추론(fig. S4B). Pearl의 **direct causal effect(DCE)** 로 보면 DCE(c1,r)=0, DCE(c2,r)=C↔c2r·Rc2r. "한 trial의 ANCCR 합 = DCE 합"을 요구하면 `Ĉ↔c1r = C↔c1r·R`, `Ĉ↔c2r = (C↔c2r − Δc1←c2·C↔c1r)·R` — trial 지표를 Δ로 바꾼 것("동물은 trial을 경험하지 않는다")이 식 15. 보상 자신의 ANCCR도 `Ĉ↔rr = C↔rr·Rrr − Ĉ↔c1r·Δc1←r·I(c1↔r) − Ĉ↔c2r·Δc2←r·I(c2↔r)` → cue가 원인으로 학습되면 **보상 반응이 줄어든다**(fig. S4D).
- **"과대인과" ⇔ DA_r < 0 (suppl. 식 28–34)**: 보상률 = Σ(원인율 × DCE) + 보상 자기인과 + 무예측 기저율이며 기저율 ≥ 0이라는 제약에서, ANCCR가 원인 기여를 적절히 반영하도록 **w를 고르면**(시간 할인 없이 설명 안 된 원인만 있을 땐 w=0, 즉 PRC 쪽 편향) 과대인과 조건은 `C↔rr·R − Σ Ĉ↔ir·Δi←r·I(i↔r) < 0`, 즉 좌변 = `Ĉ↔rr < 0`이 된다. `Ĉ↔rr ≤ DA_r`(보상이 다른 보상성 MCT를 일으키지 않으면 등호)이므로, 저자는 **보상 시점 도파민 DA_r < 0을 "보상이 과대 예측됐다"는 판정 기준**으로 식 20에 쓴다. 완전 주기적 보상에서 C↔rr = 0.5(T=∞).
- **행동 (suppl.)**: 사건의 value = Σ(미래 사건에 대한 **SRC × causal weight**), 즉 cue value `Vi = C→ir·Rir − action cost` → **softmax** `p(action|cue_i) = e^{Vi/T} / Σ_j e^{Vj/T}`(T=temperature, null action V0=0). "행동은 표준 TDRL과 비슷하게 제어된다"고 명시 — 전향적 value는 행동 단에서 쓰인다. 단 실제 행동 선택은 지연을 별도로 학습해야 한다는 단서.
- **파라미터 (자체 실험 시뮬레이션 공통)**: **T = 1.2 × IRI, α = 0.02, k = 1, w = 0.5, αR = 0.2, θ = 0.6**. 보상 첫 경험 동물은 α가 **0.25에서 시작해 감쇠상수 0.1로 지수 감소해 0.02**에 도달(새 실험 상자 도입 같은 급변 뒤 학습률 감쇠 가정). Fig. 2·S13의 기존 실험 재현에서는 실험마다 조정: k=0.01(Fig. 2A·B·E·F, 기저율 안정 추정), w=0.6(Fig. 2A·B, 전향 쪽 약간 편향), T=IRI 및 **보상 누락을 학습된 state로 취급**(Fig. 2A; 누락 반응 = 누락 state와 보상의 net contingency), θ=0.8(Fig. 2D conditioned inhibition), αR=0.85(Fig. 2H trial-by-trial 행동 변화), 보상 시점 DA를 −0.5(2G)·−1(2H)·+1(2I)로 대체해 억제·자극 모사. Fig. 2 시뮬레이션은 각 20 iteration(Table S1: 2D t=4.42, P=3.0×10⁻⁴; 2E t=7.32, P=9.2×10⁻⁷; 2F t=4.09, P=6.2×10⁻⁴; 2H t=7.06, P=1.0×10⁻⁶; 2I t=−6.33, P=2.0×10⁻⁷).

### 비교 모델 — Model 1: 전향적 TDRL (suppl. Methods 식 1–6)
- **linear TD(λ)**: `Vt(x) = wtᵀxt = Σ_{i=1..m} wt(i)·xt(i)`; RPE `δt = rt + γVt(xt) − Vt(xt−1)`; `w(i)t+1 = w(i)t + α·δt·e(i)t`; `e(i)t+1 = γλ·e(i)t + x(i)t`.
- **CSC**(대표 모델): 매 순간이 완전히 구별되는 state — state size 0.2 s, α=0.05, γ=0.95.
- **Microstimulus**: 지수 감쇠 기억 `yt+1 = yt·d` 위에 Gaussian state `xt(i) = (1/√2π)·exp(−(yt − i/m)²/(2σ²))` — state size 0.2 s, α=0.05, γ=0.95, λ=0.95, m=20, σ=0.08, d=0.99 (Exp 1 시뮬레이션은 α=0.02, γ=0.98).
- 이전 사건 후 간격이 **자극간 간격의 3배**에 이르면 state space를 절단. 결과 규모가 Model 2와 크게 어긋나면 **Model 1 파라미터만 조정**(Model 2는 고정)했다고 명시.
- 시뮬레이션 규모: Exp 1은 CSC 50,000 / microstimulus 20,000 / ANCCR 2,000 trial(학습 속도 차이), 100회 반복; Exp 2–6은 Exp 1로 선학습 후 CS+·CS− 각 2,000 trial(+조건 변경 후 2,000), 100회 반복; Exp 7은 Model 1 800 / Model 2 400 trial, 억제 크기 상수 −0.6(Fig. 6) 또는 0→−0.6 선형 감소(fig. S12), Model 1 λ = 0·0.5·0.95(Fig. 6은 0.95).

### 고전 RPE 결과의 재현 (Fig. 2, 시뮬레이션)
ANCCR 시뮬레이션은 RPE 지지 근거로 쓰여 온 결과들을 질적으로 재현한다: 학습 전후 cue↑/보상↓, 보상 누락 시 음성 반응(A); 보상 확률(B)·크기(C)에 따른 반응; conditioned inhibition(D), blocking(E), overexpectation(F); 보상 시점 도파민 억제 → 학습된 행동의 소거(G) [Lee 2020 유사]; 보상 시점 억제 → trial-by-trial 행동 변화(H) [Parker 2016 유사]; blocking 중 보상 시점 도파민 자극 → unblocking(I) [Steinberg 2013 유사]. 또한 **"음의 RPE"가 같은 크기의 양의 RPE보다 약한 비대칭**을 floor effect 가정 없이 설명. → 저자 결론: 지금까지 도파민은 **두 가설이 같은 예측을 하는 조건에서만** 검증돼 왔다.

### 측정
- 마우스 **NAcc**에 **CAG-dLight1.3b** 발현, **fiber photometry**로 초 이하(sub-second) 도파민 방출 측정 [7, 35]. NAcc를 고른 이유: RPE 지지가 **가장 강한** 투사이자 Pavlovian 학습을 매개하는 부위(저자 주장; 반례 [34] Kutlu 2021 병기).
- 보상 반응 = 보상 구간과 baseline 구간 형광 trace의 **AUC 차이**(Methods). 행동 = 보상 전 **anticipatory licking**.
- Test 11은 **DAT-Cre** 마우스 VTA에 **SIO-stGtACR2-FusionRed**(세포체 억제) + NAc dLight1.3b; 대조는 **WT(no-opsin)** 에 같은 레이저.
- 데이터: DANDI 000351, 코드: GitHub `namboodirilab/ANCCR`.

#### 방법 세부 (suppl. Materials and Methods)
- **동물**: Exp 1–6 = 성체 WT C57BL/6 **8마리(수컷 6)**; 그중 수컷 1마리는 Exp 1에만 사용 → Exp 1 n=8, Exp 2–6 n=7. Exp 7(순차 조건화) = 별도 코호트 **DAT-Cre het 7마리(전부 수컷) + WT 7마리(수컷 3)**; DAT-Cre 1마리는 day 1 보상 반응이 억제로 음수여서 Fig. 6 집단분석에서 제외(fig. S12D–E). fig. S8L용 별도 WT 6마리(수컷 4). 수술 후 단독 사육, 12 h 명암. **표본 수**: 시뮬레이션상 "개체 내에서 >80% 검정력"이 예상돼 분야 통상 크기로 정함; **실험자 비맹검**.
- **수술**: isoflurane(유도 3–5%, 유지 1–2%). dLight1.3b(AAVDJ-CAG-dLight1.3b, 2.4×10¹³ GC/ml, 1:10 희석) **500 nL, NAcc AP +1.3, ML ±1.4, DV −4.55**, 100 nL/min, 주입 후 10 min 대기; 광섬유(NA 0.66, 400 μm) 주입부 **350 μm 위** + head ring. Exp 7: AAV1-hSyn1-SIO-stGtACR2-FusionRed(1×10¹³ GC/ml, 1:2) 500 nL **양측 VTA AP −3.2, ML ±0.99, DV −4.51(5° 각)**, 광섬유(NA 0.39, 200 μm) 100–200 μm 위. 회복 ≥1주 후 **절수**(체중 >82%, 대개 ~85–88% 유지). 섬유 위치는 전원 NAcc·VTA로 확인(fig. S7).
- **Photometry**: 주입 3주 후. Doric 시스템(405 nm isosbestic·470 nm를 209·530 Hz 정현 변조, 12 kHz 샘플 → 복조·120 Hz) 또는 pyPhotometry(130 Hz 시분할 교대). patch cord 끝 **40 μW**. 200 ms 평활 → least-squares 또는 **airPLS** 기저선 보정 → 405를 470에 선형회귀 정렬 → `ΔF/F = (470 − fitted 405)/fitted 405`.
- **과제(실험 번호 ↔ Test 대응)**: Exp 1 무작위 보상(Tests 1–2) → Exp 2 변별 Pavlovian(Tests 3·9) → Exp 3 cue 2→8 s(Tests 4–5) → Exp 5 background 보상(Test 7) → Exp 3 재훈련 2–3 세션 → Exp 4 소거(Test 6) → 재습득 1–2 세션 → Exp 6 trial-less(Test 8); Exp 7 순차 조건화(Tests 10–11). **보충자료의 "Experiment" 번호는 본문 Test 번호·실험 순서와 다르다.**
  - Exp 1: 3 μl 15% sucrose, IRI 지수분포 평균 12 s, 세션당 ~100회, 4–11 세션(7 ± 2.1). 실험 전 sucrose 경험 없음.
  - Exp 2: 2 s 음(12 kHz 연속음 vs 3 kHz 단속음, CS+ 배정 counterbalance) + 1 s trace → CS+만 보상; 결과 후 3 s 고정 뒤 ITI(절단 지수, 평균 30 s·최대 90 s); 세션당 100 trial(CS+ 50/CS− 50); 예기 lick 확립 후 ≥2 세션 추가(총 13.3 ± 2.7 세션).
  - Exp 3: cue 8 s(4.3 ± 0.8 세션). Exp 5: ITI 중 평균 6 s 간격 background 보상, 마지막 background 보상–다음 cue ≥6 s 강제, 포만 방지로 40 trial(20/20)(8.1 ± 2.5 세션). Exp 4: CS+ 보상 누락(2.6 ± 0.8 세션).
  - Exp 6: 250 ms cue(같은 CS+), inter-cue interval 절단 지수 **평균 33 s(최소 250 ms, 최대 99 s)**, 각 cue 3 s 후 보상. (fig. S11A 도식은 "0<t<90 s, mean=30 s"로 표기 — 보충자료 내 표기 차이.)
  - Exp 7: Exp 1 1세션(lick 훈련, 무억제) 후, **CS1·CS2 각 1 s 음(12·5 kHz, counterbalance), 사이 0.5 s, CS2 offset 후 0.5 s trace → 보상**(cue onset 간·CS2 onset–보상 각 1.5 s); ITI 지수 평균 60 s·최대 180 s; **473 nm ~11 mW를 CS2 onset부터 보상까지 VTA에 조사**; 점근 행동까지 WT 5.6 ± 2.4, DAT-Cre 7.1 ± 0.7 세션, 세션당 ~50 trial.
- **분석창·제외 기준**:
  - Exp 1 보상 반응 = **보상 후 첫 lick 기준 −0.5~+1 s** ΔF/F AUC − 그 직전 1.5 s AUC(첫 lick 기준인 이유: 보상 반응 잠복기(latency)가 trial마다 다르고, 후기 세션엔 첫 lick 전부터 도파민이 오름). lick bout = 간격 <1 s 묶음; 보상 후 **첫 bout = consummatory**, 나머지 = non-consummatory. **직전 IRI <3 s 보상(22.6 ± 2.4%)** 과 **다음 보상까지 lick 없는 보상(5.7 ± 0.1%)** 제외. Baseline 도파민 사건 = 첫 세션 상위 5% peak의 20% 초과이며 lick에서 >0.5 s·보상에서 >2 s 떨어진 자발 peak.
  - Exp 2–5: 예기 lick = CS+ onset 후 2 s lick rate − 직전 1 s; DA = CS+ onset 후 2 s AUC(baseline 정규화); Exp 3은 cue·trace 중 lick onset 중앙값 시각 사용. 누적합이 대각선에서 가장 먼 trial = **change trial**, 그 거리 = **abruptness**. Exp 3 변화 유무는 Weibull 변화모형 `Response = A(1 − 2^{−(trial/L)²}) + b` vs 상수모형을 **AIC = 2k + n·ln(RSS)** 로 비교(→ 본문 ΔAIC). Test 5 누락 반응 = 8 s cue trial의 cue onset 후 3–4 s AUC vs 소거 시 trace offset 후 1 s AUC. Test 9 = cue onset 후 1 s(early) vs 보상 전 1 s(late), **처음 400 trial(8 세션)**, 마지막 50 trial early 반응으로 정규화.
  - Exp 6: cue 후 0.5 s·보상 후 첫 lick 후 0.5 s AUC, baseline = 이전 cue 전 0.5 s; 창 겹침(<0.5 s) 제외; 유의한 예기 lick 이후 세션만; 추가로 cue 직전 값을 뺀 **peak** 분석.
  - Exp 7: CS1·CS2 AUC를 처음 200 trial(8 세션)에서 마지막 50 trial CS1 반응으로 정규화. 억제 크기 = day 1 CS2 구간(−0.5~2 s, 0.5 s bin)을 같은 세션 보상 반응으로, 보상 반응(첫 lick 후 1 s)을 사전 무작위 보상 세션 반응으로 정규화.

### 11개 검증 요약

| Test | 실험 | TDRL RPE 예측 | ANCCR 예측 | NAcc 도파민 관찰 | 통계 (n) |
|---|---|---|---|---|---|
| 1 | **무경험(naïve)** head-fixed 마우스에 무예측 15% sucrose, 지수분포 IRI 평균 12 s, 세션당 100회 | 처음 크고, IRI state가 가치를 얻으며 **감소** | 처음 낮고 **증가**, 점근 ≈1×incentive value | **모든 개체에서 증가**해 높은 양의 점근 | 보상 수–DA 상관 t(7)=4.40, P=0.0031 (n=8; 예시 개체 r=0.42) |
| 2 | 같은 실험, 직전 IRI와의 관계 | **음**의 상관(일찍 올수록 더 놀람) | **양**의 상관(baseline 보상률 차감 항이 IRI 길수록 작아짐) | **양**의 상관 | t(7)=5.95, P=5.7×10⁻⁴ (n=8; 예시 세션 r=0.36) |
| 3 | CS+ 음(2 s)+1 s trace→sucrose(3 s), CS− 무결과 | DA 학습과 행동 학습이 **동반** | DA cue 반응이 **먼저·점진적**, 행동은 임계 교차로 **급격** | DA가 행동을 크게 **선행**(예시: DA Day 4 vs lick Day 12); 행동 습득 시 DA cue 반응은 이미 정점 | 급격도 t(6)=9.06, P=1.0×10⁻⁴; 변화 trial t(6)=−2.93, P=0.0263 (n=7) |
| 4 | cue 2→8 s로 영구 연장(trace 1 s 유지 → 지연 3→9 s, ITI ~33 s) | temporal discounting으로 DA cue 반응 **감소** | 거의 **불변**(긴 ITI 대비 지연은 여전히 짧음) | 행동은 빠르게 재학습, **DA 불변** | lick 급격도 t(6)=22.92, P=4.52×10⁻⁷; ΔAIC lick t(6)=7.49, P=2.9×10⁻⁴ vs DA t(6)=−0.86, P=0.4244 (n=7) |
| 5 | 같은 실험, 옛 지연(3 s) 시점 | 3 s에 **음의 RPE(dip)** | 지연 표상이 갱신돼 **dip 없음** | 3 s dip **없음**(실제 보상 누락 실험에서는 dip 관찰) | — |
| 6 | **소거(extinction)** | 행동과 함께 DA cue 반응 → **0** | 회고적 연합은 보상 없이 갱신되지 않아 **양성 유지**(맥락 기저 보상률=0을 통해 행동만 소거) | 행동 소거 후에도 **오래 유의한 양성** | 급격도 t(6)=5.67, P=0.0013; 변화 trial t(6)=−2.40, P=0.0531 (n=7) |
| 7 | cue→보상은 유지 + **ITI에 무예측 background 보상** (prospective 유지·retrospective↓) | trial 구간만 보면 **변화 없음** | **급속 감소** | 양성이지만 **소거보다 빠르게** 감소 | 소거 대비 paired t(6)=−3.51, P=0.0126 (n=7) |
| 8 | **trial-less**: 250 ms cue, 3 s trace, inter-cue interval 지수분포 0–99 s(평균 33 s); 이전 cue의 보상 전에 "intermediate cue" 출현 | 새 trial로 reset → **음의 RPE** | 같은 인과 의미 + 국소 cue율↑ → **약하지만 양성** | 음성 반응 **없음**, 양성이나 약함 | intermediate/previous cue 비 >0: t(6)=6.64, P=5.6×10⁻⁴; 보상 반응 비 >1: t(6)=2.95, P=0.0256 (두 모델 공통 예측) (n=7) |
| 9 | trace conditioning 습득 중 trial 내 | 보상 직전 → cue onset으로 **backpropagation** | backprop **없음**(지연을 state로 쪼개지 않음) | backprop **없음**; cue 반응이 trial에 걸쳐 커짐 | early(0–1 s) vs late(2–3 s) 차이 n.s.(trial 1–100) — suppl. Table S1: t=−0.16, P=0.8771 (n=7) |
| 10 | 순차 조건화 CS1→CS2→보상(onset 간격 각 1.5 s; suppl.: 각 cue 1 s + 0.5 s 간격/trace), 대조군 | **CS2 먼저**, 이후 CS1 | 둘이 **함께** 증가 후 분기(CS1→CS2 학습 시) | **함께 증가 후 분기** | 초기(trial 1–50) CS2−CS1 n.s. — suppl. Table S1: t=−0.03, P=0.9752 (n=7) |
| 11 | 같은 과제, **CS2→보상 구간 VTA DA 세포체 광억제**(억제 크기 day 1 보상 반응의 ~0.6배) | 행동 학습 **없음**, CS1에 **강한 음성** | CS1 학습 대체로 보존(느리고 작음) — CS1→CS2 연합만 막힘 | **모든 실험 개체가 학습**, CS1 DA **양성 획득** | Fig. 6I (Supplementary Note 10) — suppl. Table S1: 억제 확인 DAT-Cre vs WT 보상 전 0.5 s t=−5.74, P=1.3×10⁻⁴·보상 후 1 s t=−3.99, P=0.0021 (n=13); 세션에 따른 CS1 DA 증가 WT t=5.49, P=4.35×10⁻⁶ · DAT-Cre t=2.55, P=0.0166, 행동 WT t=3.61, P=9.9×10⁻⁴ · DAT-Cre t=4.92, P=3.40×10⁻⁵; 마지막 세션 CS1 DA는 DAT-Cre가 낮음(t=2.80, P=0.0171), 행동 차이 n.s.(t=0.88, P=0.3999) |

- Test 1 대안 설명 배제: 첫 보상부터 고빈도로 핥아 sucrose 가치가 처음부터 높았음(설탕의 선천적 보상성 [37] Tan 2020), **스트레스**(Supplementary Note 3)·**lick bout onset**의 비특이 증가(fig. S8) 배제. 예시 Animal 2의 초기 **음성** sucrose 반응도 ANCCR로 설명 가능(fig. S8, 저자: 처음 예측한 것은 아님). 보상 직전 IRI <3 s인 보상은 진행 중 licking 혼입을 피하려 제외.
- Test 2 대안 배제: 양의 상관이 **800회 이상(8 세션)** 일관; 마우스는 평균 IRI를 **최대 2 세션 내** 학습(fig. S8); 설치류는 지수 스케줄 보상률 변화 탐지가 Bayesian 이상 관찰자만큼 빠름 [38].
- 시뮬레이션(각 n=100): Test 1 RPE(CSC) t(99)=−65.74, RPE(MS) −27.57, ANCCR 18.60; Test 2 RPE(CSC) −1.7×10³, RPE(MS) −151.28, ANCCR 335.03; Test 8 cue 비 RPE(CSC) −114.74, RPE(MS) −181.32, ANCCR 322.53. (suppl. Table S1: Test 8 보상 반응 비 >1은 RPE(CSC) 87.67, RPE(MS) 62.86, ANCCR 16.78로 **세 모델 공통 예측**.)
- **Test 1–2 대안 배제의 수치 (suppl. fig. S8·Table S1)**: 첫 7 세션 lick rate 변화 없음(전체 t=−0.79, P=0.4389; consummatory·non-consummatory 모두 n.s.); consummatory lick rate–DA 보상 반응 상관 없음(t=0.23, P=0.8245); **lick bout onset DA는 consummatory bout에서 양성(t=3.03, P=0.0191)·보상 없는 dry bout에서 약한 음성(t=−2.55, P=0.0379)** → 보상 반응 증가가 비특이적 lick 성분일 수 없음; baseline 도파민 사건은 세션에 따라 불변(t=0.11, P=0.9190)이고 보상 반응 변화와 무상관(r=−0.06, P=0.843) → 구속 스트레스 설명 배제; DA–직전 IRI 양의 상관은 세션 내내 유지(세션 효과 t=−0.04, P=0.9707). **별도 6마리에 IRI 6·12·30 s를 세션별로 주자 non-consummatory lick이 IRI에 따라 달라짐(t=−2.73, P=0.0147)** → 평균 보상률을 ≤2 세션 안에 학습. Animal 2의 초기 음성 반응은 **T를 1.2×IRI에서 10×IRI로 늘리면** 재현(fig. S8J).
- **Test 3·5·8 보충 (suppl. figs. S10–S11)**: 행동 습득 시점(첫 예기 lick 세션)에 DA cue 반응은 이미 마지막 세션의 **93%**(직전 두 세션 평균 대비 ~100%) — Supplementary Note 5의 근거. cue 연장(Test 5) 후 옛 보상 시점 반응은 어느 개체도 pre-cue 대비 음수가 아니었으나 소거에서는 음수(누적합 차이 t=3.37, P=0.0150, n=7). Test 8 intermediate cue 반응은 **cue 직전 국소 baseline·peak 기준으로도 양성**(t=10.42, P=4.6×10⁻⁵) — baseline 차감 인공물 아님. Exp 5(background 보상)에서 baseline lick은 늘었지만 cue 구간 lick은 늘지 않음(fig. S9).
- **Test 10–11 보충 (suppl. fig. S12)**: TDRL(CSC·microstimulus, λ = 0·0.5·0.95)은 CS2 점근 반응 ≈0, 억제를 **음으로 ramp하는 RPE**로 가정해도 CS1 반응은 음수 예측(S12C). pre-CS2 예기 lick(억제 시작 전 보상 추구)은 두 유전형 모두 세션에 따라 증가(session F=9.07, P=0.0118; genotype F=0.25, P=0.6241; 상호작용 P=0.7915; one-tailed). 시뮬레이션 CS1 반응의 DAT-Cre vs WT 차이: RPE t=−379.13, P=1.3×10⁻⁶⁹ vs ANCCR t=−10.22, P=1.9×10⁻¹² (n=20 iterations).

### Discussion — 저자 주장
- 결론: NAcc 도파민 방출 역학은 여러 실험에서 TDRL RPE와 **불일치**, 인과 학습 알고리즘과는 **일치**.
- **통합 설명 범위**: (i) 완전히 예측된 지연 보상에도 도파민이 양성으로 남는 현상 — 통상 시간 불확실성으로 설명하지만 ANCCR는 시간 불확실성 없이 설명(Fig. 2A), 시간 불확실성과 상관없다는 보고 [57]와 부합. (ii) cue–보상 학습 초기에 보상 반응이 **올랐다가 내려가는** 관찰 [54 Coddington & Dudman 2018] — 실험 맥락에서 보상 경험이 없었다면 ANCCR에서 자연 발생(fig. S13). (iii) 예측된 처벌에 대한 NAc 도파민 증가와 반복 처벌에 대한 감소 [34 Kutlu 2021]. (iv) RPE 근거로 쓰인 **도파민 ramp** [58 Kim 2020 Cell]도 설명(fig. S13), ramp가 행동–보상 인과 연합을 반영한다는 견해 [59 Hamid 2021]와 부합. (v) model-free TDRL을 위반하는 도파민 의존 학습 [17, 60–63; Sharpe 2017·2020, Seitz 2022 등] — "도파민이 cue를 meaningful causal target으로 만들어 그 원인 학습을 촉진"으로 설명.
- **열린 질문(원문)**: ① 회고적 정보의 공급원 → **OFC** 후보(OFC→VTA 뉴런의 장기 기억 [19 Namboodiri 2019]; fig. S14). ② 환경 시간척도 추론 → 현재는 IRI 가정; 서로 다른 시간상수를 가진 병렬 계 [64–67]가 원리적 해법 후보. ③ TDRL을 맞출 미지의 state space 가정? → state space 가정의 무한 유연성 때문에 **현재로선 반증 불가**(fig. S15 참조); 관습적 가정의 TDRL은 데이터를 설명 못함. ④ NAc 외 영역의 도파민도 RPE가 아닐 것으로 보지만 **미검증**. ⑤ 행동-조건적 cognitive map을 포함한 모든 연합학습이 인과 추론의 산물인가?

## 보충자료 (Supplementary Notes 1–10 요지)
출처: `source_suppl` (Materials and Methods, Notes 1–10, figs. S1–S15, Table S1). 아래는 모두 **저자 주장**이다.

1. **Note 1 — 연속 시간에서의 Bayes 규칙**: SR `M→cr = Σ_c Σ_r e^{−Δt_cr/T} / n_c`(cue 발생에 대해 평균), PR `M←cr = (같은 분자) / n_r`(보상 발생에 대해 평균). 정상(stationary) 환경에서 분자가 같으므로 `M→cr = M←cr · M←r− / M←c−`(fig. S3B; 이산 Markov chain판은 S3A: `M←·D_z = D_z·M→`). eligibility trace 하나(발생 시 +1, 지수 감쇠)만으로 PR을 배우고 SR을 계산할 수 있으며, trace 감쇠 상수가 곧 전향적 할인 상수가 된다.
2. **Note 2 — semi-Markov state space?** Daw 2006의 semi-Markov 모델은 무작위 보상에서 학습 후 RPE ∝ 크기 × (1 − 직전 IRI/평균 IRI)를 예측 → 경험에 따라 보상 반응 감소·긴 IRI 뒤 감소를 예측해 Tests 1–2로 **배제**. 지연 분포를 가치 학습과 따로 배운다는 점은 ANCCR와 비슷하지만, semi-Markov는 **지연을 먼저** 배우고 ANCCR는 **연합을 먼저, 지연은 나중에** 배운다(fig. S2). Test 1 RPE 예측은 맥락 가치 학습을 전제하지 않아도(IRI를 state로 표상하기만 하면) 성립; Test 2에서 IRI 단축은 "예상외 가치 증가"라 RPE가 더 크다.
3. **Note 3 — 스트레스로 설명되나?** 아니라는 6개 근거: lick rate 불변(consummatory는 오히려 감소), 15% sucrose는 스트레스 완화, head-fixed RPE 측정이 표준, 구속 스트레스는 baseline DA를 올리지만 baseline 변화와 보상 반응 변화 무상관(fig. S8), 습관화 후에도 보상 무경험이면 초기 상승(Coddington & Dudman 2018), 급성 스트레스는 NAc 보상 방출을 바꾸지 않음. 정밀한 무작위 보상(Tests 1–2)은 자유 행동·구강 cannula로는 어렵다.
4. **Note 4 — 다른 예측오차 모델**: "보상률 예측오차"는 Test 2는 설명하나 소거(빠른 cue 반응 소실 예측)와 불일치. 온라인 평균 갱신(새 평균 = 옛 평균 + step × (표본 − 옛 평균)) 자체가 PE형 규칙이며 PR 갱신(식 9)도 그렇다 — 반대 대상은 TDRL 특유의 `δ = r(t) + γV(s_t) − V(s_{t−1})`. ANCCR는 학습량이 회고적이고 전향 예측은 유도되므로 **model-based 학습에 가깝지만**, 지연 구간에 Markov state를 만들 필요 없이 **인과 그래프에서 Markov 성질**만 요구한다.
5. **Note 5 — TDRL value에도 임계를 두면?** 행동 출현 시 DA cue 반응이 이미 최대의 >93%(fig. S10C)라 임계가 매우 높아야 하고, 그러면 부분 강화 학습이 불가능해진다(fig. S5B 시뮬레이션은 TDRL에 낮은 임계 필요). model-free RL은 결정변수를 직접 저장하는 것이 요점이므로 통계적 임계는 **세계 모델을 세우는 인과 학습**에 더 자연스럽다; 가치 평가는 통합 경제적 가치가 아닌 휴리스틱일 수도.
6. **Note 6 — 일반성 손실 없는 cue–보상 학습**: 흔한 실험은 "다음 cue는 현재 결과 뒤에만"이라는 **trial 가정**을 강제하며, 이것이 지연을 내부 state로 쪼개고 cue마다 reset하는 TD state space를 가능케 한다. 이 제약을 풀면 100% cue→보상조차 학습 실패(fig. S6A) — Fig. 4/5(Test 8)가 검증·배제한 가정. belief-state POMDP도 cue에서 reset. 정확한 비-reset state space(fig. S15)는 과제 구조를 미리 알아야 함.
7. **Note 7 — 회고 계산에도 무한한 cue가 필요하지 않나?** TDRL은 보상을 예측할 수 있는 모든 자극이 자기 지연 state를 띄워야 하므로, salience 임계를 전향적으로 정하면 너무 낮으면 폭증·너무 높으면 연합을 놓친다. 회고적 학습은 최근 경험의 timeline(eligibility trace 집합)이 있으므로 **salience 순으로 과거 자극을 평가**해 임계를 적응적으로 둘 수 있다 — 24 h CTA 예. 기억 요구량: trial을 아는 Rescorla-Wagner형은 자극당 가중치·trace 1개(ANCCR와 동급)지만 trial 가정이 문제; CSC·microstimulus형은 자극당 T/Δ개 state가 필요해 **지연에 선형 증가**.
8. **Note 8 — 처벌 반응**: 처벌도 MCT. ANCCR × 강도(부호 있는 incentive value 또는 그 절댓값=salience). 부호 있는 쪽은 incentive salience(접근/회피 안내) 신호로 쓰일 수 있고, NAc core vs medial shell 도파민계가 둘을 달리 신호해 학습/동기에 다르게 기여할 수 있다(추측).
9. **Note 9 — backprop bump 부재**: Amo 2022와의 차이를 후각(onset/offset 불명확, 탐지 향상) vs 청각 자극 차이로 설명(위 충돌 절).
10. **Note 10 — Fig. 6 억제 크기**: 1.5 s 억제 동안 dLight가 선형 감소 → 잔여 도파민 결합으로 해석, RPE 시뮬레이션에는 1.5 s 시점 최종값(**보상 반응의 ~0.6배**) 사용; 선형 감소 음성 RPE로 가정해도 TDRL은 CS1 음성 예측(fig. S12C). ANCCR 단서 두 가지: ① 실험군 보상 반응이 대조군 학습 후 점근 수준만큼 낮아 **행동 학습이 느려야** 함, ② CS2가 억제로 MCT가 되지 못해 CS1→CS2 연합이 깨지고 CS2가 "설명 안 된" 보상 원인으로 취급 → 과대예측 → **CS1 점근 반응이 낮아야** 함. 관찰: 실험군 전원이 (느리게) 학습했고 CS1 도파민도 전원 양성이지만 점근은 대조군보다 낮음.

### 보충 그림 (figs. S1–S15) 핵심
- **S1–S2**: 개념 도식 — 무경험 동물엔 보상 같은 선천적 MCT만 있고, 학습 후 그 예측 자극도 MCT가 됨; 도파민은 "현재 자극의 **학습된 의미**"를 전달(그래서 선천적 MCT인 보상도 학습에 따라 반응이 변함). 학습 4+1 단계(위 행동 출력 항).
- **S3**: SR–PR Bayes 관계(Note 1).
- **S4**: 인과 cognitive map 추론 — 쌍별 net contingency 구조 A로 Bayes `P(CM|A) ∝ P(A|CM)P(CM)`; 예 1(c1→c2→r: CM2 선택, c2 ANCCR에서 c1 기여 차감), 예 2(c1·c2 독립 예측: 차감 없음), 예 3(c1→r: 보상은 자기 예측자이며 cue가 원인으로 학습되면 보상 반응 감소). **확률을 낮추면 누락이 state로 추론돼 누락 반응이 생기지만, 지연을 영구 연장하면 지연 추정만 갱신해 누락 state가 생기지 않는다** → Test 5의 예측 근거.
- **S5**: 시간척도 불변성 — Gallistel & Gibbon 2000 행동 데이터처럼 ITI를 지연에 비례(10×)해 늘리면 습득 trial 수 불변(고정 ITI면 증가), 부분 강화에서 습득까지의 **보상 수** 불변. ANCCR는 재현, TDRL은 실패(습득 기준: 30-trial 이동평균이 임계 0.08(TDRL)·0.6(ANCCR) 교차).
- **S6**: 일반성 — (A) 지연 X / inter-cue Y = 0.05–5 전 범위에서 ANCCR cue 반응 유의 양성, TDRL은 무연합 대조보다도 낮을 때가 많음; (B) 1·10·100 s 지연 세 연합 동시 학습; (C) 3개 연합 + 방해 cue 4개에서 net contingency 행렬이 참 구조를 완전 복원(모든 사건을 MCT로 가정, α 갱신 대신 정확 평균 사용).
- **S7**: 섬유 위치(NAcc·VTA)·조직·photometry 보정 단계.
- **S8**: Test 1–2 대안 배제(위 수치). **S9**: 개체별 데이터. **S10**: Fig. 4 실험의 TDRL vs ANCCR 동역학(Exp 3 시뮬레이션에 짧은 ITI(평균 6 s) 가상 실험을 넣어 "지연에 따른 도파민 스케일링" 보고도 재현; Exp 5는 ITI state 없는 TDRL도 검토), 누락 반응, 93%. **S11**: Test 8 국소 baseline 분석.
- **S12**: Test 10–11의 TDRL 예측(λ 무관하게 CS2 점근 ≈0, CS1 음성), 제외 개체, pre-CS2 lick.
- **S13**: (A–D) Kim 2020 ramp·teleport·속도 변화를 ANCCR 시뮬레이션으로 재현(추가 가정 포함, 위 충돌 절); (E) 실험 맥락에서 보상 경험이 없으면 cue–보상 학습 초기 보상 반응이 **올랐다가 더 작은 양의 점근으로** 내려감(1.5 s 지연, ITI 평균 28 s) — Coddington & Dudman 2018 관찰, RPE와 불일치; (F) "사건 시점 도파민 억제 = 그 사건의 원인 학습 차단" 도식으로 ① 학습 후에도 남는 양의 보상 반응(Kim 2020; Coddington & Dudman 2018; Lee 2020), ② backward conditioning(Seitz 2022), ③ sensory preconditioning(Sharpe 2017), ④ second-order conditioning(Maes 2020)을 설명 — 단 원 실험들이 투사 특이적이지 않아 "보상 연합 이전부터 매우 현저한 cue(놀람 반응 유발 등)를 의미 있다고 신호하는 도파민계도 함께 조작됐다"는 가정을 둠.
- **S14**: 회로 가설 LEC → 해마 → OFC(PRC)/PL(SRC) → 중뇌 DA(ANCCR) → NAc(행동 통합·임계 교차).
- **S15**: TDRL state space 강건성(위 충돌 절).

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **섭식 photometry 분석 프로토콜**: Test 1–2는 "음식 보상 도파민 = 예상외 정도"라는 해석이 **맥락 노출 이력과 보상 간격**에 의해 뒤집힐 수 있음을 보인다. 사용자 lab의 pellet/lick 기반 NAc 도파민 실험에서 (a) 세션 간 보상 반응 증가를 곧바로 "hedonic 가치 상승·감작"으로 해석하지 말고 **보상률 학습(ANCCR 상승)** 대안을 배제하고, (b) **직전 IRI와의 상관 부호**를 RPE(음) vs ANCCR(양) 판별 지표로 쓸 수 있다. 섭취 중 lick 자체의 도파민은 [[gordon-2026-lateral-hypothalamic-control-of-the|Gordon 2026]]의 LHA GABA–Glu → 선조체 도파민 gradient와 겹칠 수 있어, 본 논문이 배제한 "lick bout onset" 성분을 사용자 과제에서도 따로 분리해야 한다. 원전 보충 Methods의 분석 규칙(보상 후 **첫 lick 기준 −0.5~+1 s AUC − 직전 1.5 s**, lick bout = 간격 <1 s, 보상 후 첫 bout = consummatory, **직전 IRI <3 s 보상 제외**, consummatory/dry bout onset 반응 분리, lick·보상과 떨어진 자발 peak로 baseline 도파민 추세 별도 확인)은 그대로 참고 프로토콜로 쓸 수 있다. 또 마우스가 평균 보상률을 ≤2 세션 안에 학습한다는 fig. S8L은 **세션 간 보상 간격 조건 변경 시 최소 2 세션 적응**을 두는 설계 근거가 된다.
- **음식 cue 소거와 재발**: Test 6(행동 소거 후 cue 도파민 잔존)은 [[concept-cue-reactivity]]·[[concept-food-addiction]]의 재발 취약성을 "회고적 인과 꼬리표가 지워지지 않음"으로 설명할 후보다. Test 7은 **보상을 cue 없이도 주어 회고적 연합을 희석**하는 contingency degradation이 소거보다 cue 도파민을 빨리 낮춤을 보였다 → cue exposure 단독 [[concept-digital-therapeutics|DTx]] 설계의 한계와 대안 축을 시사. 다만 인간 음식 cue에서 "무엇을 cue 없이 줄 것인가"의 구현형은 미검증. [[huang-2024-dopamine-mediated-interactions-between-short|Huang 2024]]의 "소거 시점이 오히려 LTM을 강화"와 함께 DTx 소거 모듈의 시간·형식 변수로 묶어 볼 만하다.
- **DA 학습이 행동을 선행**(Test 3, 예시에서 약 8일): 음식 cue 학습의 **조기 biomarker**로서 도파민(또는 인간 NAc 신호)이 행동보다 먼저 변한다는 논리 — [[pascoli-2026-conditioned-accumbal-dopamine-transients|Pascoli 2026]]의 "cue 도파민이 이후 compulsion을 예측"과 같은 방향.
- **NMPU 대응**: [[concept-need-motivation-pleasure-utility|NMPU]]는 Pleasure를 "Forward: 다음 motivation에 영향(RPE)"으로 적어 왔다. ANCCR는 즉각 결과(Pleasure)가 **"이 사건의 원인을 찾아라"는 회고적 교사 신호**로 작동할 수 있음을 제시한다. 특히 **Utility(시간~일 지연 결과)** 는 TDRL의 state 타일링으로는 비현실적이지만, eligibility trace 기반 회고적 추론은 시간척도 확장성을 주장한다(figs. S5–S6) → [[concept-flavor-nutrient-conditioning]]·[[concept-conditioned-taste-aversion]]·[[yang-2026-a-sync-state-in-the|sync state credit assignment]]의 지연 학습 알고리즘 후보. 단 본 논문 실험 검증 범위는 수 초–~100 s다. **(suppl. Note 7)** 저자들은 24시간 CS–US 간격 CTA(saccharin → 24 h 뒤 질병; Etscorn & Stephens 1973)를 직접 예로 들어, 전향적 TDRL은 saccharin급 salience의 모든 자극마다 다른 결과에 끊기지 않는 ≥24 h state space를 유지해야 해 "매우 비현실적"이지만, 회고적 학습은 **질병 시점에서 최근 자극을 salience 순으로 정렬해 빠르게 credit을 줄 수 있다**고 주장한다 — 원문 논증이며 CTA 시뮬레이션·실험은 없다. 시뮬레이션 수준에서는 단일 T(=5×IRI)로 **1·10·100 s** 지연의 세 연합을 동시에 학습(fig. S6B; 100 s 연합의 예측 반응은 가장 낮지만 무연합 대조보다 높음).
- **"incentive value × 인과성"**: ANCCR의 점근값이 incentive value에 비례한다는 설정은 [[berridge-2023-separating-desire-from-prediction-of|Berridge]]의 "갈망≠예측"과도, Pascoli의 "cue 도파민=주관적 가치"와도 접점이 있다 — 도파민 크기가 **가치 × 인과 표적성**의 곱이라면 비만에서의 cue 도파민 과반응은 가치 상승과 인과 연합 강화 중 어느 쪽인지 분리 검정이 필요. **(suppl. Note 8)** 저자들도 ANCCR에 곱하는 강도를 **부호 있는 incentive value**(→ 접근/회피를 이끄는 incentive salience 신호) 또는 **그 절댓값(salience)** 으로 둘 수 있고, NAc **core vs medial shell** 투사 도파민계가 이 둘을 달리 신호해 학습 vs 동기에 다르게 기여할 수 있다고 추측한다(검증 없음) — [[concept-nucleus-accumbens]] 아구역별 섭식 도파민 해석의 틀로 쓸 수 있다.

## ⚠️ 위키 내 충돌·긴장
- **[[adam-2026-dopamine-takes-hit-how-neuroscience]] · [[concept-dopamine-reward-system]]**: ANCCR를 "보상이 도파민 burst를 일으켜 거꾸로 cue를 검색"으로 요약. 원문에서 회고적 탐색은 **eligibility trace(기억)** 가 수행하고, 도파민은 **그 사건이 meaningful causal target인지(ANCCR 값)** 를 신호해 원인 학습을 촉진하는 역할이다 — 큰 방향은 맞지만 "도파민 = 검색 행위"는 단순화. 또 **흡연 cue relapse** 사례는 Adam 2026 기사의 해설이며 원문 논문에는 없다; 원문의 가장 가까운 근거는 Test 6(소거 후 cue 도파민 잔존).
- **[[hamid-2016-mesolimbic-dopamine-signals-value-work]]**: "Jeong 2022는 forward 학습 자체를 부정 … ANCCR과 양립 불가"는 **과장**. 원문 ANCCR는 회고적 PRC를 Bayes 규칙으로 **전향적 SRC로 변환**해 net contingency에 합치며, 저자들은 "prediction error 일반과 불일치하지 않는다"고 명시한다. 또 도파민 **ramp**를 ANCCR로 설명(fig. S13)하고 Hamid **2021**(행동–보상 인과 연합으로서의 ramp)과 부합한다고 본다. Hamid 2016의 instrumental value-ramp는 본 논문에서 직접 검증되지 않음. **(suppl. 보강)** 보충 Methods는 행동을 "value = Σ SRC × causal weight − action cost → softmax"로 모델링해 **전향적 value를 행동 선택에 명시적으로 쓰고**, fig. S14 회로 가설에서도 전향 연합(SRC)을 PL이 계산한다고 둔다 → "forward 학습 자체 부정"이라는 서술은 원전과 더 멀어진다. 다만 ramp 설명(fig. S13A–D)은 **연쇄 cue로 근사한 시뮬레이션**이며 instrumental 보상률 ramp는 다루지 않는다.
- **[[gershman-2024-explaining-dopamine-prediction-errors-beyond]]**: "uncued reward 반복 시 DA↑"는 원문 Test 1과 일치(단 **실험 무경험 동물**에서). 긴장점: Gershman 페이지는 Kim 2020 Cell(VR teleport)을 ramp의 **RPE 결정 실험**으로 두지만, 원문은 바로 그 Kim 2020 ramp도 ANCCR가 설명한다고 주장. **(suppl. fig. S13A–D로 세부 확인)** 근거는 **데이터 재분석이 아닌 ANCCR 시뮬레이션**이다: 1 s cue 8개가 이어지고 첫 cue 후 9 s에 보상(ITI 평균 9 s), 2,000 trial 훈련 후 2,000 test trial. teleport(2·4·6번째 cue에서 다음 cue를 건너뜀, 각 1%) 시 predicted DA가 표준보다 큼(T1·T2·T3 vs 표준 t=4.36·23.42·29.75, n=100 iterations), 속도 0.5×·2×(각 10%)에서 느림↓·빠름↑(t=−129.07·109.14). 단 속도 조건은 **"동물이 속도 변화를 빨리 알아채 net contingency에 표준 대비 상대 속도를 곱한다"는 추가 가정**에 의존한다. → 판정 갱신: Kim 2020 teleport는 Gershman 페이지대로 **V(가치) vs RPE**는 가르지만, 원전 주장에 따르면 **RPE vs ANCCR의 결정 실험은 아니다**(ANCCR 쪽은 이산 cue 근사 + 추가 가정 하의 시뮬레이션 재현 수준). 또 Gershman 페이지가 RPE 확장으로 드는 **average reward** 와 관련해, suppl. Note 4는 "보상률 예측오차(평균 보상률 delta)"가 Test 2(직전 IRI와 양의 상관)는 설명하고 무작위 보상 실험에서는 ANCCR 계산과 거의 같지만 **소거 시 cue 반응이 빠르게 0이 될 것**이라 나머지 데이터와 맞지 않는다고 본다(Gershman이 말한 average-reward TD 모델과 같은 것인지는 원문에 언급 없음). "Qian 2024의 ANCCR 반박"은 보충자료(2022)보다 뒤라 여전히 위키에 원전 없음(자료 없음).
- **[[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation]] · [[rice-2019-closing-in-on-what-motivates]]**: "backward causal search도 NAc 국소 메커니즘으로 자연스러움"은 위키 측 추론이다. 원문은 회고적 정보의 공급원으로 **OFC(→VTA)** 를 제시하고(fig. S14), Test 11에서 조작한 것도 **VTA 세포체**다. 본 논문은 **방출만 측정**해 firing–release 해리 문제는 다루지 않는다. **(suppl. fig. S14)** 원전의 회로 가설은 더 구체적이다: **LEC = 기억 버퍼(eligibility trace) → 해마 = 연합 증거(SR·PR) → OFC = 회고 연합(PRC·임계) / PL = 전향 연합(SRC·임계) → 중뇌 도파민 뉴런 = 학습된 MCT(ANCCR) → NAc = 도파민을 행동으로 통합(임계 교차)**. 즉 원전에서 NAc는 회고적 탐색의 장소가 아니라 **하류 통합기**다. 또 suppl. Note 10은 VTA 세포체 억제 중 dLight 신호가 1.5 s에 걸쳐 선형 감소한 것을 "NAcc에 남은 도파민의 결합"으로 해석하고 **방출 자체는 laser onset부터 급감**했다고 가정한다(방출–결합 동역학에 대한 저자 가정).
- **[[luscher-2021-consolidating-the-circuit-model-for]]**: "자연 보상 도파민은 예측되면 감쇠(RPE)"는 **cue로 예측된** 보상에서는 ANCCR도 같은 예측(Fig. 2A)이지만, **맥락 속 반복 무예측 보상**에서는 반대로 증가(Test 1). 약물 vs 자연 보상 대비의 전제는 cue-예측 조건에 한정해 읽어야 한다.
- **[[hjort-2026-prefrontal-to-ventral-tegmental-area]]**: contingency degradation을 **meta-RPE**로 설명. 본 논문 Test 7은 고전적 CD 조작(ITI 무예측 보상)을 **회고적 연합 감소**로 설명 — 같은 현상에 대한 경쟁 알고리즘. 측정 부위(mPFC·VTA→mPFC DA vs NAcc DA)와 CD 조작 형태가 달라 직접 충돌은 아님.
- **trial 내 backpropagation (Amo 2022와의 불일치)**: Amo 2022(Uchida lab, Nat Neurosci; 복측 선조체 photometry로 초기 학습 중 점진적 시간 이동 관찰 [50])는 같은 측정법인데 Test 9는 backprop이 없었다. **(suppl. Note 9)** 저자 설명: Amo 2022는 **후각 자극**, 본 논문은 **청각 자극**을 썼다. 냄새는 비강에 남아 offset이 불분명하고, 탐지가 호흡에 의존하는 능동 과정이라 onset도 불분명하다 → 학습이 진행되며 냄새 탐지가 실제 제시 시점에 점점 가까워지면, 도파민이 "탐지 순간"에만 반응해도 trial 내 backprop처럼 보일 수 있다. 이는 **저자의 대안 가설이며 검증되지 않았다**; Amo 2022 원전은 여전히 위키에 없어 그쪽 반론은 확인 불가(자료 없음).
- **TDRL state space 변형 (suppl. Note 2·6, fig. S15)**: "알 수 없는 state space를 가정하면 TDRL도 맞출 수 있다"는 반론에 대해 보충자료는 범위를 나눠 답한다. (a) **Tests 1–2**: 무작위 보상 과제에서 합리적 state space 4종(state 없음 — fig. S8L의 IRI 학습으로 배제 / IRI를 1개 또는 여러 state로 / semi-Markov 지수 체류) 모두 Tests 1–2와 불일치(fig. S15A). 특히 **semi-Markov 모델**(Daw 2006 [36])은 학습 후 RPE ∝ 보상 크기 × (1 − 직전 IRI/평균 IRI)를 원 논문에 명시적으로 예측하므로 데이터로 **배제**(Note 2). (b) **trial-less 과제(Test 8 유형; fig. S6A 사고실험, Y=12 s)**: TD 시뮬레이션(γ=0.95, 학습률 0.05, 2M step)에서는 CSC 변형 state space들은 물론 최소 Markov state space조차 지연 X가 inter-cue 간격 Y보다 충분히 짧을 때만 연합을 구분했다(저자: 상수 학습률의 편향 탓으로 추정). 그러나 **과제를 정확히 기술하는 최소 Markov state space**(아직 보상받지 않은 cue 시각들의 집합)의 정확한 value 함수로 계산하면 해석적 cue RPE = `γ^{X/dt}·(1 − dt/Y)` 로 양수이며 이력과 무관 — γ=0.986이면 0.43 — 이므로 **"이 경우 ANCCR와 질적으로 비슷하게 구분할 수 있다"고 저자 스스로 인정**한다. 남는 반론은 그런 state space를 **a priori로 알아야 하고**, state 수가 `2^{X/dt} ≈ 10¹⁸` 으로 폭증해 온라인 학습이 실패하거나 매우 느리다는 **간결성·표본효율 논증**이다(Note 6: belief-state POMDP도 cue마다 reset되는 "trial 기반"). → 판정: Tests 1–2의 반증은 state space 선택에 강건하다는 것이 원전 주장이고, Test 8류 반증은 **관습적(trial 기반·reset) state space**에 한정된다. 본문 "TDRL은 현재로선 반증 불가"라는 열린 질문 ③과 함께 읽을 것; [[gershman-2024-explaining-dopamine-prediction-errors-beyond|Gershman 2024]]의 "suitably generalized RPE" 논쟁의 실제 쟁점이 여기다.
- 표기 차이: 본문은 "causal **relations**", Fig. 1C는 "causal **Relationships**".

## 한계 (원문 범위)
- head-fixed 마우스, **NAcc 한 부위**, 개체 수 n=7–8. 다른 선조체·피질 표적은 미검증(저자 인정).
- ~~ANCCR 수식·파라미터는 자료 없음~~ → 2026-10-03 보충자료(`source_suppl`) 추가로 해소(위 "정식 수식" 절). 보충자료로도 남는 한계:
  - 시간척도는 **T = 1.2 × IRI로 고정 가정**(실험마다 조정: Animal 2 재현은 10×IRI, fig. S6B는 5×IRI). 시간상수 학습·다중 시간상수 pool은 미구현.
  - **지연(delay) 학습 알고리즘은 제안하지 않음**(fig. S2 Step 2) — 시간 맞춘 행동이 어떻게 나오는지는 미정식화.
  - 인과 모델 선택은 "직전 cue가 보상을 직접 일으킨다"는 **귀납 편향**과 binary 연합 구조를 가정(fig. S4); 비보상 자극의 선천적 의미 b=0 단순화.
  - Fig. 2·S13 기존 실험 재현은 **실험별로 파라미터를 조정**(k·w·θ·αR·T)했고, TDRL(Model 1)도 규모가 어긋날 때 파라미터를 조정 — 모델 비교가 완전히 고정 파라미터는 아님.
  - 성비 불균형(Exp 1–6 수컷 6/8; Exp 7 DAT-Cre 전원 수컷, WT 수컷 3/7), **실험자 비맹검**, Exp 7 DAT-Cre 1마리 제외.
  - Kim 2020 ramp·Coddington & Dudman 2018 초기 보상 반응 상승 등은 **시뮬레이션 재현**이지 원데이터 재분석이 아님(fig. S13).
- TDRL의 모든 state space를 배제할 수는 없음(저자 인정: 반증 불가 문제).

## 관련 페이지
- [[concept-anccr]] — 본 논문 알고리즘의 개념 hub(용어·RPE 대조·위키 내 지지/도전 지도).
- [[concept-dopamine-reward-system]] — 도파민 RPE 논쟁 hub; ANCCR 절의 원전.
- [[adam-2026-dopamine-takes-hit-how-neuroscience]] — ANCCR를 대중적으로 소개한 Nature Feature(2차 서술).
- [[gershman-2024-explaining-dopamine-prediction-errors-beyond]] — 일반화 RPE 진영; ANCCR를 "framework 밖"으로 분류. Kim 2020 ramp 해석에서 긴장(suppl. fig. S13: ANCCR 시뮬레이션 재현 + 추가 가정) · state space 일반화 논쟁(suppl. fig. S15).
- [[hamid-2016-mesolimbic-dopamine-signals-value-work]] — NAc value ramp; "forward 학습 부정" 서술의 교정 대상.
- [[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation]] — 본 논문이 인용한 NAc 방출 RPE 근거 [7]; 음의 RPE 약함(ANCCR가 floor 없이 설명).
- [[rice-2019-closing-in-on-what-motivates]] — firing≠release; 본 논문은 방출만 측정.
- [[hjort-2026-prefrontal-to-ventral-tegmental-area]] — contingency degradation의 meta-RPE 설명(경쟁 알고리즘).
- [[lee-2024-feature-specific-prediction-error]] · [[blanco-pozo-2024-dopamine-independent-effect-rewards-choices]] · [[huang-2024-dopamine-mediated-interactions-between-short]] · [[morales-2017-ventral-tegmental-area-cellular-heterogeneity]] · [[salamone-2012-mysterious-motivational-functions-mesolimbic]] — 도파민 기능 진영 비교표에서 ANCCR를 다룬 페이지들.
- [[person-sharpe-melissa]] — model-free TDRL 위반 도파민 학습(Sharpe 2017·2020, Seitz 2022)을 본 논문이 ANCCR로 설명.
- [[concept-orbitofrontal-cortex]] — 회고적 정보의 제안된 공급원(OFC→VTA).
- [[concept-nucleus-accumbens]] — 측정 부위(NAc core).
- [[concept-lateral-habenula]] — 음의 RPE 비대칭의 대안 기질; ANCCR는 비대칭을 floor 없이 설명.
- [[luscher-2021-consolidating-the-circuit-model-for]] — "자연 보상 DA는 예측되면 감쇠" 전제의 적용 범위.
- [[pascoli-2026-conditioned-accumbal-dopamine-transients]] — cue NAc 도파민의 예측력; 가치 × 인과성 분리 문제.
- [[berridge-2023-separating-desire-from-prediction-of]] — 도파민≠예측의 또 다른 진영.
- [[gordon-2026-lateral-hypothalamic-control-of-the]] — 섭취(consumption) 중 선조체 도파민의 LH 제어; 보상 반응 속 lick 성분 분리 문제.
- [[concept-need-motivation-pleasure-utility]] · [[kim-2024-unified-theoretical-framework-underlying-regulation]] — Pleasure/Utility 교사 신호의 회고적 대안.
- [[concept-cue-reactivity]] · [[concept-food-addiction]] · [[concept-digital-therapeutics]] · [[lee-2025-hijacked-brain-modern-obesity-cue]] — 소거 저항 cue 도파민과 재발·DTx 설계.
- [[concept-flavor-nutrient-conditioning]] · [[concept-conditioned-taste-aversion]] · [[yang-2026-a-sync-state-in-the]] — 긴 지연 학습(Utility)의 알고리즘 후보로서의 회고적 추론.
- [[overview-sikrakhak-ch20-opioid-dopamine-liking-wanting]] — 식락학 Ch 20(사용자 집필) 2026-10-11 개정판 20.4.3 — ANCCR(회고적 인과 학습) 설명의 근거.
