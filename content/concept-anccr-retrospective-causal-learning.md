---
title: ANCCR — 후향적 인과 학습 (Retrospective causal learning)
type: concept
created: 2026-09-28
updated: 2026-09-28
aliases: [ANCCR, adjusted net contingency for causal relations, retrospective causal inference, 후향적 인과 추론, predecessor representation, 앵커 모델]
---

> [!takeaway] 연구 방향 관점의 핵심
> **ANCCR**(“앵커”) = 보상 같은 의미 있는 사건이 일어난 **뒤에** 기억을 뒤져 “무엇이 이것을 일으켰나”를 추론하는 학습 알고리즘, 그리고 NAc 도파민이 이 신호를 나른다는 가설(Namboodiri lab). RPE/TDRL이 **cue에서 앞을 보는** 학습이라면 ANCCR은 **보상에서 뒤를 보는** 학습이다. 두 이론은 대부분의 과제에서 같은 도파민 반응을 예측하므로, 논쟁은 **예측이 갈리는 특수 과제**(첫 보상 경험, 소거, 배경 보상, 시행 없는 과제)에서만 판가름난다. 현재 위키의 판단: 원전 11개 검증은 ANCCR 쪽, 그러나 contingency degradation에서 반박(Qian 2025, 위키 밖)과 대안(meta-RPE, [[hjort-2026-prefrontal-to-ventral-tegmental-area|Hjort 2026]])이 나와 **미결**.

# ANCCR — 후향적 인과 학습

## 정의
- **Adjusted Net Contingency for Causal Relations.** 사건 B(보상)가 일어났을 때, 사건 A(cue)가 B 앞에 **우연 기대 이상으로** 있었는지(후향적 연합, predecessor representation)를 계산하고, 베이즈 규칙으로 전향적 예측으로 바꾼 뒤, 순 유관성으로 인과 지도를 만든다 ([[jeong-2022-mesolimbic-dopamine-release-conveys-causal|Jeong 2022]]).
- 기억 기제: 자극별 지수 감쇠 **eligibility trace** → 사건 발생률의 온라인 추정.
- 도파민의 역할(가설): 현재 사건이 **“의미 있는 인과 표적”** 인지 신호 → 그 원인을 학습하도록 촉진.

## RPE/TDRL과 비교

| 항목 | RPE / TDRL | ANCCR |
|---|---|---|
| 학습 방향 | 전향적 (cue → 보상 예측) | 후향적 (보상 → 원인 검색) |
| 시간 표현 | 지연을 연속 ‘상태’로 쪼갬 — 시간척도 확장 어려움 | 발생률 기반 — 시간척도 불변 |
| 도파민 = | 예측오차 δ | 인과 표적 여부(조정된 순 유관성) |
| 소거 | cue 가치 → 0 | 후향 연합은 보상 없이 갱신 안 됨 → cue 반응 잔존 |
| 첫 보상 경험 | 반응 최대 후 감소 | 반응 작게 시작해 증가 |
| 역전파 | 보상 직전 → cue로 이동 | 없음 |
| 약점 | 상태공간 가정이 무한 유연 → 반증 어려움 | contingency degradation 판별 과제에서 반박 제기 |

## 근거와 반론
- **지지**: [[jeong-2022-mesolimbic-dopamine-release-conveys-causal|Jeong 2022 Science]] — NAc core 도파민, 11개 판별 검증 모두 ANCCR과 일치. 흡연 cue 재발 설명([[adam-2026-dopamine-takes-hit-how-neuroscience|Adam 2026]] 보도).
- **반론(위키 밖)**: Qian 2024 bioRxiv / 2025 Nat Neurosci — 적절한 대조의 contingency degradation에서 ANCCR 실패, 전향적 유관성이 설명. 원문 ingest 필요.
- **대안**: [[hjort-2026-prefrontal-to-ventral-tegmental-area|Hjort 2026]] meta-RPE — 같은 현상을 전향적 RPE의 gain 조절로.
- **RPE 진영 입장**: [[gershman-2024-explaining-dopamine-prediction-errors-beyond|Gershman 2024]] · [[lee-2024-feature-specific-prediction-error|Lee 2024]] — ANCCR은 일반화 RPE “framework 밖”으로 인정.
- **호환 가능 진영**: [[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation|Mohebi 2019]](국소 방출 채널) · [[blanco-pozo-2024-dopamine-independent-effect-rewards-choices|Blanco-Pozo 2024]](학습=피질 상태 추론) · [[huang-2024-dopamine-mediated-interactions-between-short|Huang 2024]].

## 섭식·중독에 대한 함의 (해석)
- **cue 재발**: 소거 후에도 도파민 수준에서 cue가 원인으로 남음 → 음식 cue 노출 치료가 행동만 줄이고 도파민 연합은 못 지울 가능성. [[concept-cue-reactivity]] · [[concept-food-addiction]].
- **첫 음식 경험**: 새 음식의 도파민 반응이 반복될수록 커지는 현상은 ANCCR로도, 섭취 후 1차 보상 학습([[concept-primary-reward-signals]] · [[weber-2025-interoceptive-origin-reinforcement-learning|Weber 2025]])으로도 설명 가능 — 판별 실험 필요.
- **Utility 축**: [[concept-need-motivation-pleasure-utility|NMPU]]의 Utility(결과로 행동 규칙 재구성) = 원인 구조 학습과 개념상 가장 가까움.

## 관련 페이지
- [[overview-dopamine-function-theories]] — 전체 이론 비교 (ANCCR 행)
- [[concept-dopamine-reward-system]] · [[concept-orbitofrontal-cortex]] (후향 정보 출처 후보, OFC→VTA)
- [[concept-goal-commitment]] — contingency 변화에 따른 목표 이탈과의 연결
