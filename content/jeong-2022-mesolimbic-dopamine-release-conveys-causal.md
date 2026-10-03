---
title: "Mesolimbic dopamine release conveys causal associations (Jeong … Namboodiri 2022, Science)"
type: paper
created: 2026-10-03
updated: 2026-10-03
source: "raw/2022 Science (정희정) Mesolimbic dopamine release conveys causal associations.pdf"
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

### ANCCR 알고리즘 (본문·Fig. 1C 수준; 세부 식은 보충자료)
- **Eligibility trace**: 각 자극의 기억 흔적을 **지수 감쇠 eligibility trace**로 유지 [77] → 그 자극의 경험된 발생률(rate)을 온라인으로 계산 [78].
- **Predecessor representation contingency (PRC)**: `PRC(c←r) = M(c←r) − M(c←−)`
  - `M(c←r)` = **보상 시점들**에서 평균한 cue eligibility trace,
  - `M(c←−)` = **무작위 시점**에서 평균한 cue eligibility trace(= baseline),
  - 의미: "각 보상 앞에 (할인된) cue가 우연보다 몇 개 더 있었는가". 즉 **cue가 우연 이상으로 보상에 선행하는가**의 검정.
- **Successor representation contingency (SRC)**: PRC를 **Bayes 규칙**으로 전향적 예측 신호로 변환(fig. S3, Supplementary Note 1). 감사의 글에 "successor representation이 Bayes 규칙으로 predecessor representation과 관련될 수 있다"는 착상(S. Gu)이 이 정식화에 결정적이었다고 명시.
- **Net contingency** = PRC와 SRC의 가중합 → 이를 이용해 **인과 연합의 cognitive map**을 구축 [20].
- **ANCCR** = 이 net contingency를 조정한 값으로, 경험된 자극이 **meaningful causal target**인지 신호(fig. S4). 원문 가설: **중변연계 도파민이 ANCCR를 전달한다.** (조정의 구체 형태·파라미터는 보충자료 fig. S4/Methods에 있으며 raw PDF에 포함돼 있지 않음 — 자료 없음.)
- **Meaningful causal target**: 그 원인을 학습해야 할 자극. 보상처럼 **선천적으로** 의미 있거나, 보상을 일으킨다는 것을 학습해 **획득적으로** 의미를 얻는다(보상 예측 cue). 처벌도 meaningful causal target이다(Supplementary Note 8).
- **보상 자체의 ANCCR** (Fig. 3B): `M(r←r) − M(r←−)` — 보상 시점에서 계산한 과거 보상률(현재 보상 포함) − baseline 평균 보상률. 점근값은 **sucrose incentive value의 ~1배**.
- **행동 출력**: ANCCR가 **임계값을 넘어야** "cue가 보상을 일으킨다"는 인과 모델이 서고, 그 다음 **지연을 별도로 학습**("3 s 뒤에")해야 시간 맞춘 결정 신호가 생긴다 → 도파민 학습과 행동 학습이 lockstep이 아니다(fig. S2).
- **시간척도**: TDRL의 state 타일링은 시간의 **비확장적(non-scalable) 표상**이라 단순한 100% cue→보상 환경조차 구조를 잘못 학습한다(fig. S6). ANCCR는 **두 자릿수(10²) 범위의 시간척도**에서 인과 구조를 학습하고 학습의 시간척도 불변성을 설명(figs. S5–S6). 단 현재는 **동물이 평균 보상 간격(IRI)으로 환경 시간척도를 정한다고 가정**한다.
- **"prediction error" 일반을 부정하지 않음**: 사건 발생률(rate)에 관한 예측오차는 프레임워크의 일부(Supplementary Note 4). 부정되는 것은 **관습적 state space를 가진 TDRL RPE**.

### 고전 RPE 결과의 재현 (Fig. 2, 시뮬레이션)
ANCCR 시뮬레이션은 RPE 지지 근거로 쓰여 온 결과들을 질적으로 재현한다: 학습 전후 cue↑/보상↓, 보상 누락 시 음성 반응(A); 보상 확률(B)·크기(C)에 따른 반응; conditioned inhibition(D), blocking(E), overexpectation(F); 보상 시점 도파민 억제 → 학습된 행동의 소거(G) [Lee 2020 유사]; 보상 시점 억제 → trial-by-trial 행동 변화(H) [Parker 2016 유사]; blocking 중 보상 시점 도파민 자극 → unblocking(I) [Steinberg 2013 유사]. 또한 **"음의 RPE"가 같은 크기의 양의 RPE보다 약한 비대칭**을 floor effect 가정 없이 설명. → 저자 결론: 지금까지 도파민은 **두 가설이 같은 예측을 하는 조건에서만** 검증돼 왔다.

### 측정
- 마우스 **NAcc**에 **CAG-dLight1.3b** 발현, **fiber photometry**로 초 이하(sub-second) 도파민 방출 측정 [7, 35]. NAcc를 고른 이유: RPE 지지가 **가장 강한** 투사이자 Pavlovian 학습을 매개하는 부위(저자 주장; 반례 [34] Kutlu 2021 병기).
- 보상 반응 = 보상 구간과 baseline 구간 형광 trace의 **AUC 차이**(Methods). 행동 = 보상 전 **anticipatory licking**.
- Test 11은 **DAT-Cre** 마우스 VTA에 **SIO-stGtACR2-FusionRed**(세포체 억제) + NAc dLight1.3b; 대조는 **WT(no-opsin)** 에 같은 레이저.
- 데이터: DANDI 000351, 코드: GitHub `namboodirilab/ANCCR`.

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
| 9 | trace conditioning 습득 중 trial 내 | 보상 직전 → cue onset으로 **backpropagation** | backprop **없음**(지연을 state로 쪼개지 않음) | backprop **없음**; cue 반응이 trial에 걸쳐 커짐 | early(0–1 s) vs late(2–3 s) 차이 n.s.(trial 1–100) |
| 10 | 순차 조건화 CS1(1.5 s)→CS2(1.5 s)→보상, 대조군 | **CS2 먼저**, 이후 CS1 | 둘이 **함께** 증가 후 분기(CS1→CS2 학습 시) | **함께 증가 후 분기** | 초기(trial 1–50) CS2−CS1 n.s. |
| 11 | 같은 과제, **CS2→보상 구간 VTA DA 세포체 광억제**(억제 크기 day 1 보상 반응의 ~0.6배) | 행동 학습 **없음**, CS1에 **강한 음성** | CS1 학습 대체로 보존(느리고 작음) — CS1→CS2 연합만 막힘 | **모든 실험 개체가 학습**, CS1 DA **양성 획득** | Fig. 6I (Supplementary Note 10) |

- Test 1 대안 설명 배제: 첫 보상부터 고빈도로 핥아 sucrose 가치가 처음부터 높았음(설탕의 선천적 보상성 [37] Tan 2020), **스트레스**(Supplementary Note 3)·**lick bout onset**의 비특이 증가(fig. S8) 배제. 예시 Animal 2의 초기 **음성** sucrose 반응도 ANCCR로 설명 가능(fig. S8, 저자: 처음 예측한 것은 아님). 보상 직전 IRI <3 s인 보상은 진행 중 licking 혼입을 피하려 제외.
- Test 2 대안 배제: 양의 상관이 **800회 이상(8 세션)** 일관; 마우스는 평균 IRI를 **최대 2 세션 내** 학습(fig. S8); 설치류는 지수 스케줄 보상률 변화 탐지가 Bayesian 이상 관찰자만큼 빠름 [38].
- 시뮬레이션(각 n=100): Test 1 RPE(CSC) t(99)=−65.74, RPE(MS) −27.57, ANCCR 18.60; Test 2 RPE(CSC) −1.7×10³, RPE(MS) −151.28, ANCCR 335.03; Test 8 cue 비 RPE(CSC) −114.74, RPE(MS) −181.32, ANCCR 322.53.

### Discussion — 저자 주장
- 결론: NAcc 도파민 방출 역학은 여러 실험에서 TDRL RPE와 **불일치**, 인과 학습 알고리즘과는 **일치**.
- **통합 설명 범위**: (i) 완전히 예측된 지연 보상에도 도파민이 양성으로 남는 현상 — 통상 시간 불확실성으로 설명하지만 ANCCR는 시간 불확실성 없이 설명(Fig. 2A), 시간 불확실성과 상관없다는 보고 [57]와 부합. (ii) cue–보상 학습 초기에 보상 반응이 **올랐다가 내려가는** 관찰 [54 Coddington & Dudman 2018] — 실험 맥락에서 보상 경험이 없었다면 ANCCR에서 자연 발생(fig. S13). (iii) 예측된 처벌에 대한 NAc 도파민 증가와 반복 처벌에 대한 감소 [34 Kutlu 2021]. (iv) RPE 근거로 쓰인 **도파민 ramp** [58 Kim 2020 Cell]도 설명(fig. S13), ramp가 행동–보상 인과 연합을 반영한다는 견해 [59 Hamid 2021]와 부합. (v) model-free TDRL을 위반하는 도파민 의존 학습 [17, 60–63; Sharpe 2017·2020, Seitz 2022 등] — "도파민이 cue를 meaningful causal target으로 만들어 그 원인 학습을 촉진"으로 설명.
- **열린 질문(원문)**: ① 회고적 정보의 공급원 → **OFC** 후보(OFC→VTA 뉴런의 장기 기억 [19 Namboodiri 2019]; fig. S14). ② 환경 시간척도 추론 → 현재는 IRI 가정; 서로 다른 시간상수를 가진 병렬 계 [64–67]가 원리적 해법 후보. ③ TDRL을 맞출 미지의 state space 가정? → state space 가정의 무한 유연성 때문에 **현재로선 반증 불가**(fig. S15 참조); 관습적 가정의 TDRL은 데이터를 설명 못함. ④ NAc 외 영역의 도파민도 RPE가 아닐 것으로 보지만 **미검증**. ⑤ 행동-조건적 cognitive map을 포함한 모든 연합학습이 인과 추론의 산물인가?

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **섭식 photometry 분석 프로토콜**: Test 1–2는 "음식 보상 도파민 = 예상외 정도"라는 해석이 **맥락 노출 이력과 보상 간격**에 의해 뒤집힐 수 있음을 보인다. 사용자 lab의 pellet/lick 기반 NAc 도파민 실험에서 (a) 세션 간 보상 반응 증가를 곧바로 "hedonic 가치 상승·감작"으로 해석하지 말고 **보상률 학습(ANCCR 상승)** 대안을 배제하고, (b) **직전 IRI와의 상관 부호**를 RPE(음) vs ANCCR(양) 판별 지표로 쓸 수 있다. 섭취 중 lick 자체의 도파민은 [[gordon-2026-lateral-hypothalamic-control-of-the|Gordon 2026]]의 LHA GABA–Glu → 선조체 도파민 gradient와 겹칠 수 있어, 본 논문이 배제한 "lick bout onset" 성분을 사용자 과제에서도 따로 분리해야 한다.
- **음식 cue 소거와 재발**: Test 6(행동 소거 후 cue 도파민 잔존)은 [[concept-cue-reactivity]]·[[concept-food-addiction]]의 재발 취약성을 "회고적 인과 꼬리표가 지워지지 않음"으로 설명할 후보다. Test 7은 **보상을 cue 없이도 주어 회고적 연합을 희석**하는 contingency degradation이 소거보다 cue 도파민을 빨리 낮춤을 보였다 → cue exposure 단독 [[concept-digital-therapeutics|DTx]] 설계의 한계와 대안 축을 시사. 다만 인간 음식 cue에서 "무엇을 cue 없이 줄 것인가"의 구현형은 미검증. [[huang-2024-dopamine-mediated-interactions-between-short|Huang 2024]]의 "소거 시점이 오히려 LTM을 강화"와 함께 DTx 소거 모듈의 시간·형식 변수로 묶어 볼 만하다.
- **DA 학습이 행동을 선행**(Test 3, 예시에서 약 8일): 음식 cue 학습의 **조기 biomarker**로서 도파민(또는 인간 NAc 신호)이 행동보다 먼저 변한다는 논리 — [[pascoli-2026-conditioned-accumbal-dopamine-transients|Pascoli 2026]]의 "cue 도파민이 이후 compulsion을 예측"과 같은 방향.
- **NMPU 대응**: [[concept-need-motivation-pleasure-utility|NMPU]]는 Pleasure를 "Forward: 다음 motivation에 영향(RPE)"으로 적어 왔다. ANCCR는 즉각 결과(Pleasure)가 **"이 사건의 원인을 찾아라"는 회고적 교사 신호**로 작동할 수 있음을 제시한다. 특히 **Utility(시간~일 지연 결과)** 는 TDRL의 state 타일링으로는 비현실적이지만, eligibility trace 기반 회고적 추론은 시간척도 확장성을 주장한다(figs. S5–S6) → [[concept-flavor-nutrient-conditioning]]·[[concept-conditioned-taste-aversion]]·[[yang-2026-a-sync-state-in-the|sync state credit assignment]]의 지연 학습 알고리즘 후보. 단 본 논문 검증 범위는 수 초–~100 s이며, 보충 참고문헌 목록에 24시간 CS–US CTA(Etscorn & Stephens 1973 [91])가 있으나 그 사용 맥락은 raw PDF에 없음(자료 없음).
- **"incentive value × 인과성"**: ANCCR의 점근값이 incentive value에 비례한다는 설정은 [[berridge-2023-separating-desire-from-prediction-of|Berridge]]의 "갈망≠예측"과도, Pascoli의 "cue 도파민=주관적 가치"와도 접점이 있다 — 도파민 크기가 **가치 × 인과 표적성**의 곱이라면 비만에서의 cue 도파민 과반응은 가치 상승과 인과 연합 강화 중 어느 쪽인지 분리 검정이 필요.

## ⚠️ 위키 내 충돌·긴장
- **[[adam-2026-dopamine-takes-hit-how-neuroscience]] · [[concept-dopamine-reward-system]]**: ANCCR를 "보상이 도파민 burst를 일으켜 거꾸로 cue를 검색"으로 요약. 원문에서 회고적 탐색은 **eligibility trace(기억)** 가 수행하고, 도파민은 **그 사건이 meaningful causal target인지(ANCCR 값)** 를 신호해 원인 학습을 촉진하는 역할이다 — 큰 방향은 맞지만 "도파민 = 검색 행위"는 단순화. 또 **흡연 cue relapse** 사례는 Adam 2026 기사의 해설이며 원문 논문에는 없다; 원문의 가장 가까운 근거는 Test 6(소거 후 cue 도파민 잔존).
- **[[hamid-2016-mesolimbic-dopamine-signals-value-work]]**: "Jeong 2022는 forward 학습 자체를 부정 … ANCCR과 양립 불가"는 **과장**. 원문 ANCCR는 회고적 PRC를 Bayes 규칙으로 **전향적 SRC로 변환**해 net contingency에 합치며, 저자들은 "prediction error 일반과 불일치하지 않는다"고 명시한다. 또 도파민 **ramp**를 ANCCR로 설명(fig. S13)하고 Hamid **2021**(행동–보상 인과 연합으로서의 ramp)과 부합한다고 본다. Hamid 2016의 instrumental value-ramp는 본 논문에서 직접 검증되지 않음.
- **[[gershman-2024-explaining-dopamine-prediction-errors-beyond]]**: "uncued reward 반복 시 DA↑"는 원문 Test 1과 일치(단 **실험 무경험 동물**에서). 긴장점: Gershman 페이지는 Kim 2020 Cell(VR teleport)을 ramp의 **RPE 결정 실험**으로 두지만, 원문은 바로 그 Kim 2020 ramp도 ANCCR가 설명한다고 주장(fig. S13, 보충자료라 raw에서 세부 확인 불가). "Qian 2024의 ANCCR 반박"은 위키에 원전 없음(자료 없음).
- **[[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation]] · [[rice-2019-closing-in-on-what-motivates]]**: "backward causal search도 NAc 국소 메커니즘으로 자연스러움"은 위키 측 추론이다. 원문은 회고적 정보의 공급원으로 **OFC(→VTA)** 를 제시하고(fig. S14), Test 11에서 조작한 것도 **VTA 세포체**다. 본 논문은 **방출만 측정**해 firing–release 해리 문제는 다루지 않는다.
- **[[luscher-2021-consolidating-the-circuit-model-for]]**: "자연 보상 도파민은 예측되면 감쇠(RPE)"는 **cue로 예측된** 보상에서는 ANCCR도 같은 예측(Fig. 2A)이지만, **맥락 속 반복 무예측 보상**에서는 반대로 증가(Test 1). 약물 vs 자연 보상 대비의 전제는 cue-예측 조건에 한정해 읽어야 한다.
- **[[hjort-2026-prefrontal-to-ventral-tegmental-area]]**: contingency degradation을 **meta-RPE**로 설명. 본 논문 Test 7은 고전적 CD 조작(ITI 무예측 보상)을 **회고적 연합 감소**로 설명 — 같은 현상에 대한 경쟁 알고리즘. 측정 부위(mPFC·VTA→mPFC DA vs NAcc DA)와 CD 조작 형태가 달라 직접 충돌은 아님.
- **trial 내 backpropagation**: 원문은 Amo 2022(Uchida lab, 점진적 시간 이동 관찰 [50])와 불일치하는 Test 9 결과의 이유를 Supplementary Note 9에서 논의 — 위키에 Amo 2022 원전 없음(자료 없음).
- 표기 차이: 본문은 "causal **relations**", Fig. 1C는 "causal **Relationships**".

## 한계 (원문 범위)
- head-fixed 마우스, **NAcc 한 부위**, 개체 수 n=7–8. 다른 선조체·피질 표적은 미검증(저자 인정).
- ANCCR의 정확한 수식·"adjustment"·임계값·파라미터, Supplementary Notes 1–10, figs. S1–S15는 raw PDF(본문 first-release판)에 **없음** → 위 수식 수준 이상은 자료 없음.
- 시간척도는 IRI로 설정된다고 **가정**.
- TDRL의 모든 state space를 배제할 수는 없음(저자 인정: 반증 불가 문제).

## 관련 페이지
- [[concept-anccr]] — 본 논문 알고리즘의 개념 hub(용어·RPE 대조·위키 내 지지/도전 지도).
- [[concept-dopamine-reward-system]] — 도파민 RPE 논쟁 hub; ANCCR 절의 원전.
- [[adam-2026-dopamine-takes-hit-how-neuroscience]] — ANCCR를 대중적으로 소개한 Nature Feature(2차 서술).
- [[gershman-2024-explaining-dopamine-prediction-errors-beyond]] — 일반화 RPE 진영; ANCCR를 "framework 밖"으로 분류. Kim 2020 ramp 해석에서 긴장.
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
