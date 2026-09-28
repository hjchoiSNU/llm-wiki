---
title: "Mesolimbic dopamine release conveys causal associations (Jeong et al. 2022, Science)"
type: paper
created: 2026-09-28
updated: 2026-09-28
source: "raw/2022 Science (정희정)_표시 Mesolimbic dopamine release conveys causal associations.pdf"
authors: [Jeong H, Taylor A, Floeder JR, Lohmann M, Mihalas S, Wu B, Zhou M, Burke DA, Namboodiri VMK]
year: 2022
journal: Science
doi: 10.1126/science.abq6740
aliases: [Jeong 2022, ANCCR paper, 정희정 2022]
---

> [!takeaway] 연구 방향 관점의 핵심
> **ANCCR 원전.** 도파민 학습 이론의 방향을 뒤집는다. 동물은 “cue 뒤에 보상이 오는가”(전향적 예측, RPE)를 배우는 대신 **“보상 앞에 무엇이 있었나”(후향적 인과)** 를 배울 수 있고, NAc core(NAcc) 도파민 방출은 **RPE가 아니라 ANCCR**(adjusted net contingency for causal relations; “앵커”)를 신호한다고 주장. 두 이론은 표준 조건화에서는 거의 같은 예측을 하므로, 저자들은 **예측이 반대로 갈리는 11개 검증**을 설계했고 **모두 ANCCR 쪽**으로 나왔다. 핵심 반례 셋: ① 처음 받는 설탕에 대한 도파민 반응이 **경험할수록 커짐**(RPE는 감소 예측) ② cue 도파민이 **행동 학습보다 먼저, 점진적으로** 형성(행동은 급격히 나타남 — 도파민≠행동 가치) ③ **소거 후에도 cue 도파민 반응이 양성 유지**. [[concept-need-motivation-pleasure-utility|NMPU]]의 **Utility**(결과에서 원인 구조를 재구성) 축에 가장 직접적인 도파민 모델. 섭식 함의: 첫 설탕 경험의 도파민 증가는 [[concept-primary-reward-signals|섭취 후 1차 보상]] 학습으로도 읽힐 여지가 있음(아래 ‘비판적 읽기’).

# Mesolimbic dopamine release conveys causal associations (Jeong et al. 2022)

## 한 줄 요약
후향적 인과 학습 알고리즘 **ANCCR**을 제안하고, 생쥐 NAcc 도파민 방출(dLight1.3b 광섬유 측광)이 11개 판별 검증에서 TDRL RPE가 아니라 ANCCR과 일치함을 보였다 (UCSF Namboodiri lab; 제1저자 정희정).

## 핵심 내용

### 문제 설정 — 전향적 vs 후향적 연합
- **전향적(prospective)**: “cue 뒤에 보상이 얼마나 자주 오는가?” → cue에서 앞을 보고 예측, 틀리면 RPE로 갱신. Rescorla-Wagner → **TDRL**(cue–보상 지연을 연속 ‘상태’로 쪼개 예측을 전파).
- **후향적(retrospective)**: “보상 앞에 cue가 우연 이상으로 있었나?” → 드문 **의미 있는 사건**(보상)이 일어났을 때 기억을 뒤져 원인을 추론. 미래 예측보다 계산이 가벼움(과거 기억만 필요).
- 저자 가설: 도파민은 RPE가 아니라 **현재 사건이 ‘의미 있는 인과 표적(meaningful causal target)’인지**를 신호한다.

### ANCCR 알고리즘 (Fig. 1–2)
1. 각 자극에 대해 지수 감쇠하는 **eligibility trace**를 유지 → 경험한 사건 발생률을 온라인 계산.
2. 보상 시점에 **cue가 보상 앞에 있던 비율 − 우연 기대치(기저율)** = 후향적 연합(predecessor representation).
3. **베이즈 규칙**으로 전향적 예측으로 변환(successor ↔ predecessor; S. Gu의 통찰).
4. cue–보상 **순 유관성(net contingency)** 으로 인과 인지 지도 구축. 이를 조정한 값이 ANCCR.
- 시뮬레이션: 보상 크기·확률, blocking·unblocking·overexpectation·조건 억제, 보상 시점 도파민 억제에 의한 소거, 시행별 행동 변화 등 **RPE를 지지하던 고전 결과를 모두 재현**. 음의 “RPE”(dip)가 양의 것보다 약한 비대칭도 바닥 효과 가정 없이 설명.
- TDRL과 달리 **시간척도 불변**(두 자릿수 범위의 시간척도에서 인과 구조 학습).

### 실험 설정
- 생쥐, head-fixed, **NAc core 도파민 방출**(dLight1.3b, fiber photometry). NAcc를 고른 이유: RPE 가설의 **가장 강한 근거가 나온 투사**이기 때문.
- 보상 = 15% 설탕물.

### 11개 판별 검증

| Test | 과제 | RPE 예측 | ANCCR 예측 | 관찰 |
|---|---|---|---|---|
| 1 | 경험 없는 생쥐에게 예측 불가 설탕(IRI 평균 12 s) | 첫 보상 반응 최대 → 반복 시 **감소** | 처음 낮고 경험 따라 **증가** | **증가** 후 양성 점근 (n = 8, P = 0.0031). 첫 보상부터 활발히 핥음 → 가치 학습 지연으로 설명 불가 |
| 2 | 같은 과제, 직전 보상 간격(IRI)과 반응 상관 | **음**의 상관(빨리 오면 더 놀라움) | **양**의 상관(기저율 차감 항) | **양의 상관** (P = 5.7×10⁻⁴), 800회 이상 유지 |
| 3 | cue(3 s 후 보상) 학습 | 도파민 학습과 행동 학습이 **동행** | 도파민이 **먼저·점진적**, 행동은 뒤에 **급격히**(역치 교차 후 지연 학습) | 도파민 cue 반응이 예기 핥기보다 훨씬 먼저(예: 4일 vs 12일), 행동 획득 시점엔 이미 최고치 (n = 7) |
| 4 | cue–보상 지연 영구 연장(3 → 9 s) | 시간할인으로 cue 반응 **감소** | 거의 불변 | 행동은 빨리 적응, 도파민 cue 반응 **변화 없음** |
| 5 | 같은 조건, 옛 지연(3 s) 시점 | 보상 없음 → **음의 dip** | 새 지연으로 모델 갱신 → dip 없음 | **dip 없음** (실제 누락 조건에서는 dip 관찰 — 검출력 문제 아님) |
| 6 | 소거 | cue 가치 → 0, 행동과 함께 반응 소멸 | 후향적 연합은 보상 없이 갱신 안 됨 → **양성 유지** | 행동 소거 후에도 도파민 cue 반응 **유의한 양성 유지** |
| 7 | cue 뒤 보상 유지 + 시행 간 무작위 보상 추가(후향 연합만 약화) | 시행 구간만 보면 **변화 없음** | **빠르게 감소** | 양성 유지하나 **소거보다 빨리 감소** (P = 0.0126) |
| 8 | “시행 없는” 과제: 250 ms cue가 무작위 간격(평균 33 s)으로, 항상 3 s 뒤 보상 | 이전 보상 전에 새 cue가 오면 **음의 RPE** | 약하지만 **양성** | 음의 반응 없음, **약한 양성** |
| 9 | trace 조건화 획득 중 반응 위치 | 보상 직전 → cue로 **역전파** | 역전파 없음 | 역전파 bump 없음, cue 반응이 시행 따라 증가 |
| 10 | 순차 조건화 (cue1 → cue2 → 보상) | cue2 먼저, cue1 나중 | 둘이 **함께** 오르다 나중에 분리 | 함께 증가 후 분리 |
| 11 | cue2 → 보상 구간 도파민 세포체 광억제 (DAT-Cre; 보상 반응의 ~0.6배 억제) | 학습 **불가**, cue1에 강한 음성 반응 | cue1 학습 대체로 **유지**(느려짐) | **모든 실험 동물이 학습**, cue1 도파민 양성 획득 |

### 저자 결론과 스스로 밝힌 한계
- NAcc 도파민 방출은 **통상적 상태공간 가정의 TDRL RPE와 불일치**하고 인과 학습 알고리즘과 일치.
- **예측오차 일반을 부정하지는 않는다** — 사건 발생률에 대한 “예측오차”는 ANCCR 안에 들어 있음(Suppl. Note 4).
- 추가로 설명한다고 주장하는 것: 완전 예측된 지연 보상에도 남는 양성 반응(시간 불확실성 가정 불필요), 학습 초기 보상 반응의 일시 증가(Coddington & Dudman 2018), 처벌 반응의 비일관성([[adam-2026-dopamine-takes-hit-how-neuroscience|Kutlu 2021]]), 도파민 ramp(Kim 2020 Cell), model-free TDRL을 위반하는 도파민 학습 효과(Sharpe 2017·2020 — [[person-sharpe-melissa]]).
- **한계(원문 명시)**: ① TDRL 상태공간 가정은 무한히 유연해 **현재로선 반증 불가** — “통상적 가정의 TDRL”만 기각 ② **NAcc만 측정** — 다른 투사 영역은 미검증 ③ 후향적 정보의 출처는 **OFC→VTA**로 추정(Namboodiri 2019) ④ 시간척도 설정은 평균 보상 간격을 안다고 가정 ⑤ 모든 연합 학습이 인과 추론인지는 미해결.
- 데이터 공개: DANDI 000351, 코드 github.com/namboodirilab/ANCCR.

## 비판적 읽기 (위키 해석 — 원문 주장 아님)
1. **Test 1의 대안 설명 — 섭취 후 1차 보상**: 저자는 첫 보상부터 활발한 핥기를 근거로 “설탕 가치는 처음부터 높았다”고 본다. 그러나 핥기는 **구강(proxy) 보상**을 반영할 뿐이고, 설탕의 **섭취 후(post-ingestive) 가치**는 반복 경험으로 학습된다(저자 스스로 인용한 Tan 2020, gut-brain sugar preference). [[weber-2025-interoceptive-origin-reinforcement-learning|Weber 2025]]의 proxy/primary 구분과 [[yang-2026-a-sync-state-in-the|Yang 2026]]의 섭취 후 credit assignment로 보면, 경험에 따른 도파민 증가는 **RPE와 모순되지 않는 ‘보상 값 r 자체의 학습’** 일 수 있다. 영양소 없는 감미료로 Test 1을 반복하면 두 해석을 가를 수 있다.
2. **Test 3·6·11 — 도파민과 행동의 분리**: 도파민 cue 반응이 행동보다 앞서고, 소거 후에도 남고, 억제해도 학습이 된다. [[blanco-pozo-2024-dopamine-independent-effect-rewards-choices|Blanco-Pozo 2024]](outcome 시점 도파민 조작이 선택을 바꾸지 않음)와 같은 방향 — **NAcc 도파민은 행동 학습의 필수 교사 신호가 아닐 수 있다**. 해석은 둘로 갈린다: ANCCR(도파민=인과 지도 신호, 행동은 별도 역치) vs 비학습 기능([[hamid-2016-mesolimbic-dopamine-signals-value-work|가치 방송]]·[[berridge-2023-separating-desire-from-prediction-of|유인 현저성]]).
3. **Test 6(소거 후 잔존)의 임상 함의**: 소거된 cue가 도파민 수준에서 “원인”으로 남는다는 것은 **자발 회복·재발**(흡연·음식 cue)의 기제 후보. [[concept-cue-reactivity]] · [[concept-food-addiction]]. 단 [[berridge-2023-separating-desire-from-prediction-of|유인 현저성]]도 같은 현상을 예측하므로 판별 근거는 아님.
4. **Test 7(배경 보상)** = contingency degradation. 이후 이 영역이 ANCCR의 가장 큰 쟁점이 됨 — 아래 ‘위키 내 연결·긴장’.

## ⚠️ 위키 내 연결·긴장
- **[[hamid-2016-mesolimbic-dopamine-signals-value-work|Hamid 2016]] · [[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation|Mohebi 2019]]**: 같은 NAc core. Hamid의 V(t)는 전향적 가치 — ANCCR과 방향이 반대. 본 논문은 ramp도 ANCCR로 설명된다고 주장(시뮬레이션만). Mohebi는 저자 감사의 글에 있음(측광 셋업 자문).
- **[[gershman-2024-explaining-dopamine-prediction-errors-beyond|Gershman 2024]] · [[lee-2024-feature-specific-prediction-error|Lee 2024]]**: 일반화 RPE 진영은 ANCCR을 “framework 밖”으로 인정. 본 논문의 ‘상태공간 무한 유연 → 반증 불가’ 비판이 바로 이 확장 전략을 겨냥.
- **Qian 2024 bioRxiv / 2025 Nat Neurosci (위키 밖, Uchida·Gershman 계열)**: 적절한 대조를 둔 contingency degradation 과제에서 ANCCR 예측이 실패하고 **전향적 유관성**이 행동·도파민을 모두 설명한다고 반박. 본 논문 Test 7과 같은 영역. 원문 미수록 — 판정 보류.
- **[[hjort-2026-prefrontal-to-ventral-tegmental-area|Hjort 2026]]**: 같은 contingency degradation을 **meta-RPE**(전향적 RPE의 gain 조절)로 설명 — ANCCR이 아닌 제3의 답. 본 논문은 후향 정보 출처를 OFC→VTA로, Hjort는 mPFC→VTA를 인과 노드로 제시 — **피질→VTA 입력이라는 공통 구조, 계산 해석은 상반**. (Namboodiri는 Stuber lab 출신, Hjort는 본 논문 감사의 글에 있음.)
- **[[blanco-pozo-2024-dopamine-independent-effect-rewards-choices|Blanco-Pozo 2024]]**: 학습을 PFC hidden-state inference에 귀속. ANCCR의 ‘인과 지도’도 일종의 상태 추론이라 간접 호환.
- **[[grove-2022-dopamine-subsystems-track-internal|Grove 2022]] · [[weber-2025-interoceptive-origin-reinforcement-learning|Weber 2025]]**: 섭식 연구의 도파민 채널 구분(구강 vs 섭취 후). 본 논문은 NAcc 한 채널만 봤고 보상은 설탕 — 비판적 읽기 1번 참조.

## 관련 페이지
- 개념: [[concept-anccr-retrospective-causal-learning]] (ANCCR hub) · [[concept-dopamine-reward-system]] · [[concept-nucleus-accumbens]] · [[concept-orbitofrontal-cortex]] (후향 정보 출처 후보)
- 비교: [[overview-dopamine-function-theories]] (§0·§1 ANCCR 행, §2.2 전향 vs 후향, §5 판별 실험)
- 보도: [[adam-2026-dopamine-takes-hit-how-neuroscience]] (흡연 cue 재발 함의)
- 동기 틀: [[concept-need-motivation-pleasure-utility]] · [[kim-2024-unified-theoretical-framework-underlying-regulation]]
