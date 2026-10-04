---
title: "Past experience shapes the neural circuits recruited for future learning (Sharpe 2021, Nat Neurosci)"
type: paper
created: 2026-10-03
updated: 2026-10-03
source: "raw/2021 Nature Neuroscience. Past experience shapes the neural circuits recruited for future learning.pdf"
authors: [Melissa J. Sharpe, Hannah M. Batchelor, Lauren E. Mueller, Matthew P. H. Gardner, Geoffrey Schoenbaum]
year: 2021
journal: "Nature Neuroscience 24:391–400 (2021); doi:10.1038/s41593-020-00791-4"
---

> [!takeaway] 연구 방향 관점의 핵심
> **같은 뉴런 집단이 "무엇을 배우는 데 필요한가"가 그 동물의 과거 경험에 따라 바뀐다**는 것을 보인 논문. [[sharpe-2017-lateral-hypothalamic-gabaergic-neurons|Sharpe 2017]]과 **동일한 도구·동일한 cue 한정 광억제 프로토콜**(GAD-Cre rat, LH^GABA NpHR, cue 구간만 532 nm)을 6개 과제에 돌려 두 축의 결과를 얻었다. ① **경험 의존적 모집(recruitment)**: 실험적으로 naive한 rat에서 LH^GABA 억제는 공포 학습에 **아무 영향이 없지만**(n=4/4), 먼저 cue–수크로스 학습을 겪은 rat에서는 같은 억제가 공포 학습을 **약화시킨다**(완전 차단은 아님 — 일부 학습은 남는다). 저자들은 이 모집이 장치·식이제한·cue 노출 같은 다른 실험 요인이 아니라 **cue–보상 수반성(contingency) 경험**의 결과라고 결론짓는다(맥락을 분리한 2×2 설계). 단 naive 군은 보상을 전혀 받지 않았으므로 "수반성 없는 단순 보상 노출" 대조는 없다(저자 명시). ② **경험과 무관한 반대(opposition)**: 반대로 **중립 cue끼리 짝짓는 학습**(sensory preconditioning)·**보상 원위 cue 학습**(second-order conditioning)에서는 같은 억제가 학습을 **촉진**하고, **latent inhibition**(무관한 cue의 처리 하향)은 **소실**시킨다. 즉 LH^GABA는 평소 "지금 동기적으로 중요한 것을 직접 예측하지 않는 정보"의 학습을 **능동적으로 억누르고 있다**.
> 사용자 연구에 닿는 지점 (**연결 가설 — 원문 주장 아님**; 상세는 아래 동명 절): (1) **[[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]]에서 LH를 Motivation hub로만 두는 매핑에 "학습 자원 배분기(arbitrator)" 층을 더한다** — 이 논문은 섭취량을 측정하지 않았고, 효과가 레이저 없는 시험에서 유지되어 수행이 아닌 학습 효과로 해석된다. 이를 근거로 LH^GABA가 **무엇이 Utility 계산에 들어갈 자격이 있는지**를 정한다고 읽을 수 있다. (2) **사용자 lab 과제 설계에 바로 이식 가능한 "경험 변수"**: [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]·[[kim-2024-normative-framework-dissociates-need|Kim 2024]]의 LH^LepR 결과는 모두 **이미 음식 학습을 끝낸** 마우스에서 얻은 것이다. 이 논문의 논리를 받아들이면 "LH^LepR가 X에 필요하다"는 진술은 **그 동물의 사전 경험에 조건부**가 된다 — naive vs trained를 군으로 나눈 반복이 필요하다는 뜻이다. (3) **비만·cue reactivity의 '학습 편향' 해석**: 음식 보상 경험이 쌓인 개체에서 LH가 **원래 담당하지 않던 학습까지 끌어들인다면**, 고열량 식이 경험은 LH를 통해 **비음식 정보 학습까지 재배선**할 수 있다([[concept-cue-reactivity]]·[[lee-2025-hijacked-brain-modern-obesity-cue|hijacked brain]]의 회로 수준 가설). (4) [[sharpe-2024-the-cognitive-lateral-hypothalamus|Sharpe 2024]] Opinion의 "학습 편향 dial"(과활성=중독, 저활성=조현병) 이론은 **이 논문의 6개 실험을 핵심 실험적 근거로 삼는다**(본 논문 자체는 중독·조현병을 "학습 균형 변화가 지목돼 온 질환"으로만 언급하고 방향성 예측은 하지 않는다) — 원전을 보면 그 dial이 얼마나 작은 n에서 나왔는지도 함께 보인다.

# Past experience shapes the neural circuits recruited for future learning (Sharpe et al. 2021)

- **저널**: Nature Neuroscience 24, 391–400 (2021). 접수 2020-02-10, 채택 2020-12-23. DOI: 10.1038/s41593-020-00791-4. Peer review: Stan Floresco + 익명 심사자.
- **소속**: **UCLA 심리학과**(제1저자 Melissa J. Sharpe; 데이터 수집 2017-06~2018-09, 동물 프로토콜은 NIDA IRP ACUC 승인 — 실험은 Schoenbaum lab에서 수행) + **NIDA IRP**(Baltimore; Batchelor, Mueller, Gardner, **Geoffrey Schoenbaum**). 교신 M.J. Sharpe · G. Schoenbaum. 지원 R01-MH098861(G.S.), ZIA-DA000587(NIDA IRP), NHMRC CJ Martin Fellowship(M.J.S.).
- **동물·도구**: **Long-Evans GAD1-Cre(GAD-Cre) rat 총 106마리**(수컷·암컷, 수술 전 2–5개월). 양측 LH에 1 µl **AAV5-EF1α-DIO-eNpHR3.0-eYFP (n=48)** 또는 **AAV5-EF1α-DIO-eYFP (n=58)**(UNC Vector Core). 좌표 AP −2.4, ML ±3.5, DV −8.4(암)/−9.0(수), 정중선 쪽 10°. 광섬유(200 µm) DV −7.9(암)/−8.5(수). **532 nm, 16 mW**(실험 6은 16–18 mW). 계통은 [[sharpe-2017-lateral-hypothalamic-gabaergic-neurons|Sharpe 2017]]에서 공개된 것이고, 본 논문은 발현 검증을 그 논문에 위임한다(Fig 1은 대표 이미지, Extended Data Fig 1은 발현·섬유 위치 지도).
- **공통 설계 원칙 (논문 전체의 논리적 축)**: 광억제는 **항상 cue 구간에만** 걸린다 — cue onset 500 ms 전에 켜고 offset 500 ms 후에 끈다. **결과(shock·pellet) 전달 구간에는 레이저가 없다**. cue와 결과 사이에 1초 간격을 둔 것도 억제 해제 후 rebound를 피하기 위한 Sharpe 2017의 설계를 그대로 가져온 것이다(원문은 10초 억제 후 halorhodopsin rebound가 없다는 Mahn 2016을 근거로 든다). 그리고 **결정적 시험은 거의 항상 레이저 없는 상태**에서 치러진다 → 학습 결손과 수행 결손을 분리한다.

## 한 줄 요약
LH^GABA 광억제는 **naive rat의 공포 학습에는 영향이 없지만 cue–보상 학습을 먼저 겪은 rat의 공포 학습은 유의하게 약화시키고**(즉 과거 경험이 회로를 새 학습에 모집한다), 반대로 **중립 cue끼리의 연합·보상 원위 cue 학습은 경험과 무관하게 촉진하며 latent inhibition은 없앤다** — LH^GABA는 "지금 중요한 것을 직접 예측하는 정보"로 학습을 몰아주는 **배분기**라는 결론.

## 핵심 내용

### 실험 1 (Fig 2a,b) — naive rat: LH^GABA는 공포 학습에 필요하지 않다
- NpHR **n=4** / eYFP **n=4**. 실험 1만 **자유 섭식 유지**(다른 실험은 ~85% 체중 제한).
- 절차: day 1 맥락 습관화 45분 → day 2 조건화(**10 s tone → 1 s 간격 → 1 s, 0.5 mA 발바닥 shock, 3회**, ITI 평균 7분; tone 구간에만 레이저) → day 3 맥락 소거 45분 → day 4·5 각각 **tone 5회 무보강 시험(레이저 없음)**.
- 조건화 중 두 군 모두 freezing 증가, 군차 없음: trial **F(2,12)=5.812, P=0.017**; trial×group F(2,12)=0.187, P=0.831; **group F(1,6)=0.377, P=0.562**.
- cue 전 맥락 freezing도 차이 없음(eYFP 45%±22.17, NpHR 35%±15; F(1,6)=0.140, P=0.722).
- 레이저 없는 소거 시험에서도 군차 없음: **group F(1,6)=0.206, P=0.666**.
- → "LH는 보상·섭식 영역"이라는 통념과 정합하는 **예상된 null**. 단 **n=4/4**로 검정력이 매우 낮다(아래 한계 참조).

### 실험 2 (Fig 2c,d) — 보상 학습 경험 후: 같은 억제가 공포 학습을 유의하게 약화시킨다
- NpHR **n=7** / eYFP **n=6**. 먼저 **7일 식욕 학습**(청각 cue 하나 → 수크로스, 다른 cue는 무보강; 매일 각 6회, ITI 5분) → 식이제한 유지 → 공포 조건화.
- 앞선 학습에서 청각 cue를 써버렸기 때문에 공포 cue는 **점멸 광(light)**으로 바꾸고 shock은 **0.35 mA**로 낮췄다. 광 cue 구간에만 LH^GABA 억제.
- eYFP는 조건화가 진행되며 freezing 증가. **NpHR은 증가가 유의하게 둔화**: trial **F(2,22)=17.886, P=0.000**; **trial×group F(2,22)=9.133, P=0.001**; **group F(1,11)=29.615, P=0.000**.
- 맥락 freezing은 군차 없음(eYFP 36.67%±18.20, NpHR 14.28%±14.28; F(1,11)=0.962, P=0.348).
- **레이저 없는 소거 시험에서 결손 유지**: **group F(1,11)=5.553, P=0.038** → 일시적 공포 표현 억제가 아니라 **학습 결손**.
- → 같은 뉴런, 같은 조작, 같은 종류의 결과(shock)인데 **사전 경험만으로 필요성이 생겼다**.

### 실험 3 (Fig 3) — 모집의 원인은 "cue–보상 수반성 경험"이다 (2×2, 맥락 분리)
- 네 군, 각 **n=6**(총 24마리): NpHR learners / eYFP learners / NpHR naive / eYFP naive.
- 실험 2의 해석에는 두 대안이 있다. ① 보상 경험이 아니라 **조작·장치·식이제한 등 다른 실험 요인**의 효과일 수 있다. ② LH^GABA가 **선행 보상 기억을 새 공포 기억과 분리(segregate)**하는 일을 할 수도 있다. 둘을 배제하려고 **맥락 A(식욕)와 맥락 B(혐오)를 바닥재·벽지·냄새로 분리**하고, naive 군에는 **같은 광 cue를 보상 없이** 제시했다.
- 식욕 단계(맥락 A, 5일, 매일 **광 cue→수크로스 12회**, ITI 4분): learners 두 군 모두 학습, 군차 없음 — session **F(4,40)=11.171, P=0.000**; session×group F(4,40)=0.174, P=0.951; group F(1,10)=1.498, P=0.249. naive 두 군은 학습하지 않음 — session F(4,40)=0.498, P=0.737; session×group F(4,40)=0.951, P=0.445; group F(1,10)=0.263, P=0.620. (식욕 훈련 중 맥락 B에도 교대로 노출시켜 맥락 변별을 강화했다.)
- 공포 단계(맥락 B, **10 s, 77 dB tone → 0.35 mA shock, 3회**, tone 구간만 억제): 맥락 A/B를 분리한 탓에 **모든 rat이 맥락 자체에도 높은 freezing**을 보였다 — 즉 **맥락이 shock의 경쟁 예측자**가 되었다.
- 핵심 통계: tone vs 맥락 freezing의 **tone×context×virus×condition 4원 상호작용 F(1,20)=3.913, P=0.031** (⚠️ 이 F·df의 양측 P는 ≈0.062 — 보고된 0.031은 **단측 검정** 값으로, 핵심 상호작용이 양측 기준으로는 유의하지 않다). 사후 단순효과 — **NpHR learners만 tone보다 맥락에 더 많이 freezing**(F(1,20)=4.831, **P=0.040**). eYFP learners F(1,20)=0.773, P=0.390 / NpHR naive F(1,20)=0.435, P=0.517 / eYFP naive F(1,20)=0.048, P=0.828. 조건화 말기 tone·맥락 전체 수준 자체는 군차 없음(F(1,20)=0.193, P=0.665).
- 맥락 소거 1세션 후 **tone 시험(LH^GABA 온전)**: NpHR learners만 tone 반응이 유의하게 낮음 — **group F(1,10)=6.085, P=0.033**. naive 쌍은 차이 없음(F(1,10)=0.303, P=0.594).
- Extended Data Fig 2: NpHR learners는 맥락 소거 세션에서도 맥락 freezing이 높게 유지됐으나(group F(1,10)=5.939, P=0.035), tone 시험 시작 시점에는 두 군 모두 낮아 **맥락 공포 교란이 제거된 상태에서 tone 결손을 측정**했음을 확인(session×time×group F(14,140)=1.697, P=0.032 — 양측 환산 ≈0.063, 단측 값으로 보임; tone 시험 직전 맥락 freezing 군차 없음 F(1,10)=1.943, P=0.194).
- → 모집은 **cue와 보상의 수반성을 겪은 결과**이며, 보상 맥락을 떠올리는 일(맥락 일반화)로는 설명되지 않는다.

### Fig 4 — 계산 모델: "cue에 쌓이는 연합 가중치 업데이트를 70% 막는다"로 두 실험이 동시에 설명된다
- **TD(λ)**(Seijen & Sutton 2014) + **Mackintosh(1975) 주의 모델**(예측이 더 좋은 cue는 α↑, 나쁜 cue는 α↓) 결합. 선형 함수 근사·replacing eligibility traces.
- 광억제 모형화: 가중치 업데이트 Δw = **η**·α·ε·δ 에서 **η = 0.3 (laser on) / 1 (off)** — 즉 **업데이트의 70% 차단**. 이 값은 저자 lab의 ex vivo 세포체 halorhodopsin 억제율(~70%)에 맞춘 것이다.
- 파라미터: θ=0.2, tone의 초기 α=0.3, λ=0.7, γ=0.95. 반응(freezing)은 로지스틱 C(s)=c/(1+e^(−b(V−a))), c=90, a=0.4, b=5.
- 모델이 재현한 두 가지: ① cue에 쌓이는 학습 감소, ② **실험 2(맥락 공포 불변) vs 실험 3(맥락 공포 증가)의 차이**. 실험 3에서는 cue 학습이 막히므로 shock이 만든 학습이 **레이저가 걸리지 않은 맥락 cue로 넘어간다**. 실험 2에서는 같은 맥락에서 보상 학습이 이미 일어났기 때문에 맥락의 α가 낮거나(model 1) 맥락이 **식욕 가치**를 얻어(model 2) 혐오 학습을 느리게 흡수한다.
- 저자들은 이 모델 결과를 **실험 3의 맥락 분리 설계가 타당했다는 사후 검증**으로도 쓴다(맥락 일반화가 낮았다는 뜻).
- 코드: https://github.com/mphgardner/LH_Inact_Model/

### 실험 4 (Fig 5) — second-order conditioning: 억제가 cue–cue 학습을 **촉진**한다
- NpHR **n=8** / eYFP **n=12**. ① 7일 조건화: **A2→수크로스 2알(45 mg)**, B2는 무보강(매일 12 trial, ITI 5분; A2/B2는 tone·siren 역균형). ② 2일 second-order: **A1→(1 s)→A2**, **B1→B2** 각 6회(A1/B1은 clicker·white noise 역균형). **A1 구간에만 11초 레이저**.
- 조건화 단계는 군차 없음(Extended Data Fig 3; stimulus F(1,18)=12.383, P=0.002; stimulus×group F(1,18)=1.151, P=0.298; session×group F(6,108)=1.008, P=0.424; stimulus×session×group F(6,108)=0.233, P=0.965).
- 결과: **NpHR이 A1에 대한 반응을 B1보다 더 크게 늘렸다** — stimulus **F(1,18)=10.576, P=0.004**; **stimulus×group F(1,18)=4.657, P=0.045**; stimulus×session F(2,36)=0.368, P=0.695(= 학습 단계와 **레이저 없는 probe test**에서 효과 크기가 다르지 않다 → 수행 효과가 아니다).
- 사후: NpHR A1 vs B1 **F(1,18)=12.195, P=0.003**; eYFP는 유의하지 않음 **F(1,18)=0.748, P=0.398**(⚠️ Fig 5 legend에는 같은 비교가 "P=0.05"로 적혀 있다 — **원문 내부 불일치**).
- 저자 해설: 이 실험에서 eYFP가 유의한 SOC를 보이지 않은 것은 cue 사이에 넣은 **1초 간격**이 연합을 약화시켰기 때문일 것이며(likely), 그 바닥 효과가 오히려 **촉진을 탐지할 여유**를 만들었다.

### 실험 5 (Fig 6) — sensory preconditioning: 보상 경험이 **없어도** 촉진된다
- NpHR **n=8** / eYFP **n=12**. ① 2일 **A1→A2 / B1→B2**(모두 중립, 각 6회, A1 구간만 11초 레이저) → ② 6일 조건화 **A2→수크로스 2알**, B2 무보강 → ③ **probe test: A1·B1 단독 무보강**.
- 이 절차의 요점은 **cue–cue 학습이 보상 경험보다 먼저 일어난다**는 것이다(단 자기 급식 훈련(magazine training)은 선행 — 저자들이 한계로 명시).
- 조건화 단계 군차 없음(Extended Data Fig 4; stimulus F(1,18)=3.553, P=0.076; stimulus×session F(2,36)=8.281, P=0.001; stimulus×group F(1,18)=0.13, P=0.911; A2 상승 F(2,17)=8.860, P=0.002, B2는 아님 F(2,17)=1.953, P=0.172).
- Probe: 전체적으로 A1 > B1 — cue **F(1,18)=15.438, P=0.001**; **cue×group F(1,18)=5.691, P=0.028**. 사후 — **NpHR A1 vs B1 F(1,18)=16.615, P=0.001**, eYFP는 유의하지 않음 **F(1,18)=1.489, P=0.238**.
- → cue–cue 연합에 대한 **반대는 사전 보상 경험에 의존하지 않는다**. 즉 "모집"은 선택적이고(공포에만), "반대"는 일반적이다.

### 실험 6 (Fig 7) — latent inhibition: 억제가 **무관한 cue의 하향조절을 없앤다**
- NpHR **n=9** / eYFP **n=10**. ① 3일 **S1 사전노출**(매일 12회, S1 구간마다 11초 레이저; S1/S2는 Arduino로 만든 warp·chime 역균형) → ② **단일 결정적 조건화 세션**: S1과 S2를 각 6회 수크로스 2알과 짝지음.
- 첫 trial(결과를 아직 모르는 무조건 반응)에서는 차이 없음: cue F(1,17)=0.007, P=0.933; cue×group F(1,17)=0.267, P=0.612; group F(1,17)=1.436, P=0.247.
- 이후 모든 trial: cue F(1,17)=2.246, P=0.152(주효과 없음)이지만 **cue×group F(1,17)=6.333, P=0.022**. 사후 — **eYFP는 S1 < S2(= 정상 latent inhibition) F(1,17)=8.508, P=0.010**, **NpHR은 S1 ≈ S2 F(1,17)=0.492, P=0.492**.
- 군 간 S1 반응 차이 없음(F(1,17)=0.001, P=0.980), S2도 없음(F(1,17)=2.263, P=0.151), 전체 반응 수준도 없음(F(1,17)=0.667, P=0.425).
- **논리적 역할**: 이 결과는 실험 4·5의 촉진을 "LH 억제가 cue 변별력을 좋게 만들었다"로 설명하는 대안을 **배제**한다. 변별이 좋아졌다면 S1과 S2의 차이는 **더 커져** latent inhibition이 강해졌어야 한다.

### Discussion 요점
- 본 논문은 LH^GABA를 **공포 학습의 가소성 장소**로 주장하지 않는다. 억제 하에서도 일부 학습이 남는다는 점과 함께, 저자들은 **"학습의 중재자(arbitrator)"** 쪽 해석을 명시적으로 열어 둔다 — 가소성은 편도체 회로에 있을 수 있다(Fanselow & LeDoux 1999, Maren 1999, Ressler & Maren 2019). LH^GABA가 알려진 공포 회로와 어떻게 상호작용하는지는 **미해결**이라고 적는다.
- **SOC와 SPC는 보통 서로 다른 학습 현상**으로 취급된다(SOC = 보상 가치의 역전파, SPC = 가치와 무관한 정보 연쇄). 두 절차에서 **같은 방향의 촉진**이 나왔다는 것은 LH^GABA가 연합 구조의 종류를 가리지 않고 **"지금 중요한 것을 직접 예측하는가"**에만 반응한다는 뜻이다.
- 두 가지 일반적 함의: ① 보상 영역으로 알려진 집단이 **경험만으로 혐오 학습에 모집**된다면, **fear engram을 전통적 공포 회로 밖에서도 찾아야 한다**. ② 한 영역이 **cue–cue 학습에 반대해 동기적으로 중요한 사건 쪽으로 학습을 몰아준다**는 보고는 저자들이 아는 한 처음이며, 이 균형의 변화는 **중독**(Ersche 2016, Everitt & Robbins 2005)과 **조현병**(Corlett & Fletcher 2015, Powers 2017)에서 이미 지목돼 왔다.
- 저자들이 남긴 다음 질문: **보상 학습 후에만 shock 예측 cue에 LH^GABA 활동이 증가하는가?**(활동 기록 미실시) 그리고 모집의 **경계 조건**은 무엇인가 — 현재 결과를 아우르는 모델은 **표준 강화학습 틀 밖**을 봐야 할 수도 있다고 적는다.

### 한계 (원문 명시 + 읽기 주의)
- **활동 기록이 전혀 없다.** 전 실험이 광억제 + 행동이다. "모집"은 필요성의 변화로만 정의되며, 경험 후 LH^GABA의 cue 반응이 실제로 달라지는지는 **측정하지 않았다**(저자들이 직접 미래 과제로 적음).
- **표본이 작다.** 실험 1은 **n=4/4**로, "naive rat에서 영향 없음"은 **null 결과이고 검정력 근거가 없다**. 원문은 **공식 power 분석을 하지 않았다**고 적는다(선행 연구 관행 기준).
- **naive 군을 실제로 음식 보상에 노출시키지 않았다.** 공포 실험의 naive 군은 음식 학습이 생길까 봐 보상을 전혀 주지 않았다 — 따라서 "경험"의 어떤 성분이 결정적인지는 수반성 vs 단순 보상 노출 수준에서 완전히 분해되지 않는다(저자 명시). 또 sensory preconditioning 군도 **magazine training을 통해 pellet을 접했다**.
- **통계 관행**: 예상 방향의 상호작용에는 **단측 검정**을 사용했다(Howell 2012 인용). 정규성은 가정하고 **등분산은 검정하지 않았다**. 데이터 수집·분석은 **blind가 아니었고**, freezing 채점과 조직학만 blind였다(두 채점자 간 일치 ~90% 이내). within-subject s.e.m.은 Loftus & Masson 절차로 계산.
- **제외**: 총 106마리 중 조직학(조직 손상·섬유 오위치·단측/최소 발현) **6마리**, 질병 **1마리** 제외. 추가로 sensory preconditioning에서 **NpHR 4마리가 A1 대신 B1→B2 trial에 레이저를 받는 사고**가 있어 전 분석에서 제외했다(사전 규정 아님, 원문이 사고로 명시).
- **실험 간 파라미터가 섞여 있다**: 실험 1만 자유 섭식·0.5 mA·tone, 실험 2는 0.35 mA·광 cue, 실험 3은 0.35 mA·tone. 즉 실험 1 vs 2의 비교는 **경험 외에 cue modality와 shock 강도도 다르다** — 실험 3이 이 교란을 정리하도록 설계된 이유다(실험 3 안에서는 learners/naive가 동일 파라미터).
- **원문 내부 불일치(주의)**: ① 본문(Results)은 tone을 **70 dB**로(실험 1·3 서술), Methods는 **77 dB**로 적는다(초록에는 dB 표기 없음). ② Fig 5 legend의 eYFP A1 vs B1는 **P=0.05**, 본문은 **P=0.398**이다. ③ 본문·Extended Data legend의 그림 번호가 실제 그림 번호와 **한 칸 어긋난다**(second-order 결과를 "Fig. 4"로 지시하지만 Fig 4는 모델링이고 SOC는 Fig 5, SPC는 Fig 6, latent inhibition은 Fig 7). ④ Methods는 "Figs. 5 and 6의 자극 배정"을 A1/B1·A2/B2로 적은 뒤 곧바로 "Fig. 6의 자극 배정"을 S1/S2로 적는다.
- **성차 분석 없음**(암수 혼용, 군을 성·연령으로 matching만 함). 데이터 수집 기간 2017-06-06 ~ 2018-09-10. 데이터·커스텀 코드는 요청 시 제공(2021년 관행), 모델 코드만 GitHub 공개.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **"사전 경험"을 사용자 lab 과제의 독립 변수로 올리기**: [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]·[[kim-2024-normative-framework-dissociates-need|Kim 2024]]의 LH^LepR 결과는 모두 **훈련을 마친** 마우스에서 얻었다. 본 논문의 논리를 적용하면 "LH^LepR = Motivation 신호"라는 결론조차 **그 동물이 cue–음식 수반성을 배운 뒤라는 조건부**일 수 있다. 가장 값싼 검증은 Kim 2024의 normative 과제를 **naive 군과 사전 보상 훈련 군으로 나눠** 같은 LepR 조작을 반복하는 것이다 — 모집 가설이 맞으면 **naive 군에서 효과 크기가 작아야** 한다.
- **NMPU에 '학습 자원 배분' 축을 더한다**: [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]]는 Need·Motivation·Pleasure·Utility의 **값 계산**을 다룬다. 본 논문의 LH^GABA는 값을 바꾸지 않고 **어떤 cue가 값 계산에 들어갈 자격을 얻는지**를 정한다(실험 4·5의 촉진은 값이 아니라 **연합 형성**의 변화다). NMPU의 Utility 항을 "지연 결과 교사"로 둘 때, 그 교사가 **무엇을 가르칠지 고르는 게이트**로 LH를 배치하는 확장이 가능하다 — [[sharpe-2017-lateral-hypothalamic-gabaergic-neurons|Sharpe 2017]]의 LH^GABA→VTA 기대값 relay와 **같은 영역의 두 번째 역할**이다.
- **고열량 식이·cue 경험의 '학습 재배선' 가설**: 본 논문은 **보상 학습 경험 하나로** LH가 공포 학습에 모집됨을 보였다. [[concept-cue-reactivity|cue reactivity]]·[[lee-2025-hijacked-brain-modern-obesity-cue|hijacked brain]]·[[concept-food-addiction|food addiction]] 맥락에서 이는 **식품 cue 경험이 많은 개체에서 LH가 비음식 학습까지 끌어들인다**는 검증 가능한 예측을 준다(예: DIO/HFD 경험 마우스에서 공포·혐오 학습의 LH 의존성 증가 여부). 반대 방향으로는 **latent inhibition 소실**이 임상 종결점 후보다 — 무관한 cue를 걸러내는 능력의 저하는 식품 환경에서 **cue 과부하**로 직결된다.
- **DTx 종결점으로서 '학습 편향' 지표**: [[concept-digital-therapeutics|DTx]] 설계에서 총 섭취량·체중 대신 **"보상 근접 cue 학습 vs 원위/중립 cue 학습의 비"**를 종결점으로 쓸 수 있다. 본 논문은 그 비를 **동일 동물에서 양방향으로 움직인** 유일한 데이터셋이다(같은 조작이 한쪽은 ↓, 다른 쪽은 ↑). 인간 번역에서는 sensory preconditioning·latent inhibition 과제가 이미 표준화되어 있어 이식 비용이 낮다.
- **사용자 lab 영상 자료의 재분석 지점**: 본 논문이 열어 둔 "경험 후 LH^GABA의 shock-cue 반응이 증가하는가"는 **활동 기록으로만** 답할 수 있다. [[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026]](SNU 김성연 lab)이 이미 **혐오 열자극에 반응하는 LH^Vgat ensemble**을 보고했으므로, 거기에 **사전 보상 경험 유무를 군으로 넣는 설계**가 본 논문의 공백을 직접 메운다 — 모집 가설은 "naive 마우스에서는 혐오 반응 ensemble이 작아야 한다"를 예측한다.

## ⚠️ 위키 내 충돌·긴장
- **[[sharpe-2017-lateral-hypothalamic-gabaergic-neurons|Sharpe 2017]]과의 방향 반전(같은 lab·같은 도구)** — 2017은 cue 구간 LH^GABA 억제가 **cue–음식 학습을 차단**한다고 보고했고, 본 논문은 같은 억제가 **cue–cue 학습을 촉진**한다고 보고한다. 저자들은 이를 모순이 아니라 **"보상 근접도에 따른 부호 반전"**으로 봉합한다(= [[sharpe-2024-the-cognitive-lateral-hypothalamus|Sharpe 2024]]의 dial 이론). ⚠️ 그러나 두 결과를 하나의 계산으로 설명하는 모델은 **아직 없다** — 본 논문의 TD(λ) 모델은 공포 데이터만 다루고, 촉진은 "다른 영역이 과학습한다"는 서술적 설명에 머문다. 저자들 자신이 "표준 강화학습 틀 밖을 봐야 할 수도 있다"고 적는다.
- **[[siemian-2021-lateral-hypothalamic-lepr-neurons|Siemian 2021]](마우스 LH^Vgat·LH^LepR)와의 종·세포 정의 불일치** — 본 논문의 LH^GABA는 **rat GAD1-Cre 전체 GABA 집단**이고, Siemian의 결과는 "**LepR 부분집합만 cue를 변별**하고 전체 Vgat는 변별하지 않는다"이다. 본 논문의 공포 모집·cue–cue 반대가 **어느 분자 하위집단의 속성인지는 미검증**이다. Siemian이 LH^LepR ablation에서 **섭취·체중은 불변, 학습만 변화**를 보고한 것은 본 논문의 "학습 전담" 그림과 방향이 같지만, 종(rat vs mouse)·opsin(NpHR vs ArchT)·과제가 모두 달라 **확정 불가. 병기**.
- **[[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]·[[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]]의 "LH = 섭식·동기 실행" 서술과의 층위 차** — 사용자 lab 계열은 LH 조작의 1차 종결점을 **섭취·food-seeking**으로 둔다. 본 논문의 조작은 **섭취를 전혀 측정하지 않고**(공포 실험은 food port가 없는 챔버) 학습 지표만 본다. 두 문헌은 **모순이 아니라 서로 다른 종결점**이지만, "LH^GABA 억제 → 섭식 ↓"라는 요약과 "LH^GABA 억제 → (중립 정보) 학습 ↑"라는 요약을 같은 문장에 나란히 쓰면 독자가 혼동한다. **종결점을 반드시 병기**할 것.
- **[[hoang-2021-the-basolateral-amygdala-and|Hoang & Sharpe 2021]] 리뷰의 요약과 원전의 범위 차이** — 그 리뷰는 본 논문을 [10••]로 인용하며 **sensory preconditioning·second-order conditioning 두 결과만** 요약하고, "LH는 보상 원위 cue 학습에 반대한다"는 결론을 끌어낸다. ⚠️ 원전의 **공포 모집(실험 1–3)과 latent inhibition(실험 6)**은 그 요약에 들어 있지 않다. 또 그 리뷰는 BLA를 "원위 cue를 이미 유의할 때만(SOC) 학습"으로 두는데, 본 논문은 **SOC에서도 LH 억제가 학습을 촉진**했다 — 두 영역의 분업 도식은 **같은 절차에서 반대 부호**를 가진다는 점이 리뷰 본문에서 충분히 강조되지 않는다(병기).
- **[[sharpe-2024-the-cognitive-lateral-hypothalamus|Sharpe 2024]] Opinion의 dial 이론과 실험적 기반의 비대칭** — 그 Opinion은 "LH 과활성 = 중독, 저활성 = 조현병"을 예측하지만, 실험 근거는 **본 논문의 억제 실험 한 방향뿐**이다(활성화 실험 없음, 질환 모델 없음, 활동 기록 없음). 특히 조현병 예측의 핵에 있는 **latent inhibition 소실**은 본 논문 실험 6(n=9/10)에서 **단일 조건화 세션**으로 측정된 결과 하나에 의존한다. 이론의 범위와 데이터의 범위를 **분리해 읽을 것**.
- **[[concept-basolateral-amygdala|BLA]]·[[concept-dopamine-reward-system|도파민 RPE]] 틀과의 관계** — 저자들은 공포 가소성을 편도체에 두고 LH를 **중재자**로 남기지만, [[sharpe-2017-lateral-hypothalamic-gabaergic-neurons|Sharpe 2017]]은 LH^GABA가 **기대값을 저장해 VTA로 보낸다**고 주장한다. "저장소"와 "중재자"는 양립 가능하지만 **같은 집단에 대한 두 설명이 위키에 병존**하고, 본 논문은 둘 중 어느 쪽인지 가리지 않는다(원문이 명시적으로 열어 둠).
- **[[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026]]·[[figge-schlensok-2025-a-lateral-hypothalamic-neuronal|Figge-Schlensok 2025]]의 "LH는 혐오 자극에도 반응한다"와의 긴장** — 두 영상 연구는 **naive에 가까운 마우스에서도** LH^Vgat/LH^LepR이 혐오 자극(열 처벌·불안 공간)에 **이미 반응**함을 보인다. 본 논문은 naive rat의 공포 학습에 LH^GABA가 **필요하지 않다**고 한다. ⚠️ 활동(반응 있음)과 필요성(없음)은 층위가 다르므로 모순이 아니지만, "경험 전에는 LH가 혐오 정보를 다루지 않는다"로 읽으면 **과잉 해석**이다. 종·세포 정의·자극 종류(전기 shock vs 열·불안 맥락)도 모두 다르다(병기).
- **[[harris-2005-a-role-for-lateral|Harris 2005]]의 "LH orexin은 발바닥 전기충격에 반응하지 않는다"와의 세포형 분리** — 본 논문의 집단은 GAD1⁺ GABA 뉴런이며, [[sharpe-2017-lateral-hypothalamic-gabaergic-neurons|Sharpe 2017]]의 검증에서 **ORX <1%, MCH 1.2%**로 orexin·MCH와 거의 겹치지 않는다. 따라서 "LH가 공포 학습에 모집된다"는 결론은 **orexin 집단에 대한 Harris의 음성 결과와 충돌하지 않는다** — 다만 LH 안에서 **세포형별로 혐오 정보 처리가 갈린다**는 뜻이므로, "LH가 통증을 다룬다"는 요약은 세포형을 명기해야 한다.
- **[[gershman-2024-explaining-dopamine-prediction-errors-beyond|Gershman 2024]] 등이 인용하는 "Sharpe 2017"과의 혼동 주의** — Sharpe lab은 **2017년에 두 편**(Curr Biol LH 논문, Nat Neurosci 도파민 transient 논문)을 냈고, 본 논문(2021 Nat Neurosci)은 그 도파민 논문과 **저널·연도가 비슷해 혼동되기 쉽다**. 본 논문의 참고문헌 [21][23]이 바로 그 도파민 계열이다(위키에 원전 페이지 없음 — 자료 없음).

## 관련 페이지
- [[person-sharpe-melissa]] — 인물 hub. **UCLA 독립 lab 시기의 첫 LH 논문**이며 "cognitive LH" 2단계(반대·모집)의 원전.
- [[sharpe-2017-lateral-hypothalamic-gabaergic-neurons]] — 같은 도구·같은 cue 한정 억제 프로토콜의 **1단계 원전**. 부호가 반대(cue–음식 학습 차단 vs cue–cue 학습 촉진)인 짝 논문.
- [[sharpe-2024-the-cognitive-lateral-hypothalamus]] — 본 논문의 6개 실험을 **학습 편향 dial 이론**으로 종합한 Opinion(Trends Cogn Sci 2024). Box 2(naive vs primed 공포 학습)·근접 예측자 편향 절이 전부 본 논문 [42]에서 나온다.
- [[hoang-2021-the-basolateral-amygdala-and]] — 같은 lab 리뷰(Curr Opin Behav Sci 2021)가 본 논문을 [10••]로 요약. ⚠️ SPC·SOC만 다루고 공포 모집·latent inhibition은 빠뜨린다(병기).
- [[hoang-2026-methamphetamine-potentiates-the-use-of]] — 같은 lab, 역방향 VTA^DA→LH. 본 논문과 함께 "LH는 학습 내용을 고르는 노드"라는 그림의 다른 축(specific PIT).
- [[siemian-2021-lateral-hypothalamic-lepr-neurons]] — 마우스 LH^LepR는 **섭취를 바꾸지 않고 학습만 바꾼다**. 본 논문 집단의 **분자 하위집단 후보**이자 종·세포 정의 차이의 병기 지점.
- [[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles]] — LH^Vgat에 **혐오 열자극 반응 ensemble**이 있음을 단일세포로 보임. 본 논문의 "경험 전에는 공포 학습에 불필요"와 층위가 다른 데이터(활동 vs 필요성).
- [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal]] — LH^LepR가 불안 자극에 반응·불안 맥락에서만 섭식 허가. 혐오 정보와 LH의 관계를 **분자 하위집단**에서 본 짝.
- [[jennings-2015-visualizing-hypothalamic-network-dynamics]] — LH^Vgat appetitive/consummatory 분업의 foundational paper. 본 논문이 재해석 대상으로 삼는 "LH = 섭식·보상" 통념의 영상 근거.
- [[nieh-2016-inhibitory-input-from-the]] — 본 논문 서론이 인용하는 ref [9]. LH^GABA→VTA disinhibition = behavioral activation 모델. ⚠️ 본 논문의 "학습 배분기" 해석과 층위가 다름(행동 구동 vs 학습).
- [[concept-lateral-hypothalamus]] — 개념 hub. "LH^GABA = 학습 중재자" 서술의 원전.
- [[concept-basolateral-amygdala]] — 본 논문이 공포 가소성의 자리로 지목한 회로(Fanselow & LeDoux 1999 등). LH와의 분업은 미해결.
- [[concept-dopamine-reward-system]] — 억제가 "cue에 쌓이는 연합 가중치 업데이트를 70% 막는다"는 TD(λ) 모형화의 배경 틀.
- [[concept-cue-reactivity]] — latent inhibition 소실 = **무관한 cue를 걸러내지 못함**. 식품 환경의 cue 과부하와 직결되는 지표 후보.
- [[concept-appetitive-consummatory-phases]] — cue 구간만 억제하고 결과 전달 구간은 보존하는 설계의 모범(Sharpe 2017과 공유).
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] · [[kim-2024-normative-framework-dissociates-need]] — 사용자 lab LH^LepR. **사전 경험을 군 변수로 올린 반복**의 이식 대상.
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — 사용자 lab LH 리뷰. "LH GABAergic도 cue–food 연합 학습에 필수"의 맥락에 **반대 방향(중립 cue 학습 촉진)**을 추가.
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] · [[concept-need-motivation-pleasure-utility]] — NMPU에 "학습 자원 배분" 축을 더하는 연결 가설.
- [[harris-2005-a-role-for-lateral]] — LH orexin은 전기충격에 반응하지 않는다(DMH·PFA만). 본 논문 GABA 집단과의 **세포형 분리** 근거.
- [[gershman-2024-explaining-dopamine-prediction-errors-beyond]] — ⚠️ "Sharpe 2017"(Nat Neurosci 도파민 transient)과 본 논문(2021 Nat Neurosci)의 **인용 혼동 주의** 지점.
- [[de-vrind-2019-effects-of-gaba-and]] — 같은 LH^Vgat/LH^LepR을 **대사·섭취 종결점**으로만 본 대조 사례. 본 논문의 학습 종결점과 나란히 두면 "LH 조작의 종결점 선택이 결론을 만든다"가 드러난다.
- [[concept-early-life-adversity]] — 본 논문 서론이 출발점으로 삼은 선행 문헌(외상 경험이 공포 회로를 priming한다, Rau & Fanselow). 본 논문은 **비병리적 경험(보상 학습)도 같은 일을 한다**로 확장한다.
