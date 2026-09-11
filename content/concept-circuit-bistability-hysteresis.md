---
title: 회로 양안정성과 이력현상 (Bistability & hysteresis)
type: concept
created: 2026-09-11
updated: 2026-09-11
aliases: [bistability, hysteresis, flip-flop, SR latch, positive feedback, set range, 양안정성, 이력현상, 양성 되먹임, set point]
---

> [!takeaway] 연구 방향 관점의 핵심
> **항상성 회로가 반드시 "set point 비교기"일 필요는 없다.** [[yang-2011-hunger-states-switch-a-flip-flop|Yang 2011]]이 제시한 대안은 **SR flip-flop** — 두 개의 별도 신호(set = [[concept-ghrelin|ghrelin]], reset = [[concept-leptin|leptin]])가 회로를 두 안정 상태 사이로 **던져 놓고**, 그 사이에는 아무것도 비교하지 않는다. 이 구분은 말장난이 아니라 **실험 예측이 다르다**: set point 모델은 편차에 비례한 교정을 예측하고, flip-flop 모델은 **역치를 넘기 전까진 아무 일도 없다가 넘으면 통째로 전환되고 그 상태가 유지된다**고 예측한다.
> 사용자 lab에 중요한 이유: **[[concept-need-motivation-pleasure-utility|NMPU]]의 Need가 "연속 오차 신호"인지 "래치된 상태"인지**가 곧 실험 설계(자극 강도·지속시간·측정 시점)를 바꾸고, **[[concept-weight-regain-defended-adiposity|체중 재증가]]** 를 "설정점 방어"가 아니라 **"reset 신호 부족"** 으로 재프레임하면 치료 표적이 달라진다.

# 회로 양안정성과 이력현상

## 한 줄 요약
양성 되먹임을 가진 회로가 **두 개의 안정 상태**를 갖고, 어느 상태에 있는지가 **현재 입력이 아니라 과거 이력**으로 결정되는 성질.

## 용어 정리

| 용어 | 뜻 | 섭식 회로 사례 |
|---|---|---|
| **양성 되먹임(positive feedback)** | 출력이 자기 입력을 다시 키움 | AMPK→cADPR→RyR→Ca²⁺→CAMKK→**AMPK** |
| **양안정성(bistability)** | 같은 입력에서 두 개의 안정 상태 | AgRP 시냅스의 고활성/저활성 |
| **이력현상(hysteresis)** | 켜는 역치 ≠ 끄는 역치; 상태가 유지됨 | ghrelin 5분 노출 후 3–5시간 지속 |
| **초민감성(ultrasensitivity)** | S자형 급경사 용량-반응 | AICAR·Compound C·STO-609 곡선 |
| **SR 래치(flip-flop)** | set·reset 두 입력이 상태를 전환 | set=ghrelin, reset=leptin→POMC 오피오이드 |
| **set range** | 기준값이 아니라 **두 역치 사이 구간** | 위 래치의 논리적 귀결 |

## 어떻게 증명하는가 (검증 체크리스트)
[[yang-2011-hunger-states-switch-a-flip-flop|Yang 2011]]이 쓴 논증 구조는 다른 회로에 그대로 이식 가능하다:

1. **일시 자극 후 지속**: 유발 신호를 5분만 주고 **수용체까지 차단**한 뒤에도 상태가 남는가. (잔여 리간드 배제가 핵심 — 여기서는 Ghsr1 역작용제 사용.)
2. **고리의 다른 마디로도 켜지는가**: 카페인(RyR 직접 활성)만으로 같은 상태 유도.
3. **고리를 끊으면 즉시 꺼지는가**: AMPK·CAMKK 억제 시 10분 내 붕괴 → **능동 유지**임을 증명(수동적 흔적과 구별).
4. **초민감 용량-반응**: 되먹임의 정량적 서명.
5. **끄는 신호의 동정**: 자동 소멸이 아니라 **별도 reset 신호**가 있는가.

> 3번이 결정적이다. "오래 간다"만으로는 **느리게 사라지는 흔적**과 **능동 유지되는 상태**를 구별할 수 없다.

## set point vs set range — 왜 중요한가
- **set point 모델**: 어떤 조절 변수(지방량·혈당)를 기준치와 계속 비교해 편차에 비례한 교정 출력을 낸다. 비만 문헌에서 "defended body weight"의 표준 설명.
- **flip-flop 모델**: 비교기가 없다. **set 역치를 넘으면 hunger 상태로 래치**되고, **reset 역치를 넘을 때까지 유지**된다. 말초 내분비 세포는 통합 에너지 수지를 계산할 필요 없이 **결핍/잉여만 보고**하면 된다.
- **실무적 차이**:
  - 회로 반응성이 **유발 호르몬의 반감기를 넘어 연장**된다(ghrelin은 재급식 후 1–2시간 내 기저로 돌아가지만 시냅스 상태는 24시간 유지).
  - **set과 reset이 동시에 높으면 기억이 성립하지 않는다** — fed 마우스(오피오이드 tone↑)에 ghrelin을 줘도 지속 상태가 안 생기는 관찰과 일치.
  - 역치를 움직이면(호르몬·오피오이드 tone 조절) **set range 자체가 이동**한다 → 체중 조절 표적으로서의 의미.

## 섭식·대사 회로에서의 사례
- **AgRP 시냅스 flip-flop** — [[yang-2011-hunger-states-switch-a-flip-flop|Yang 2011]]. 본 개념의 원전.
- **체중 재증가의 "증폭기 유지"** — [[grzelka-2023-a-synaptic-amplifier-of-hunger|Grzelka 2023]]: 저체중이 지속되는 한 시냅스 증폭이 유지되고 **체중이 회복되어야 꺼진다**. 래치의 reset 조건이 *호르몬*이 아니라 *체중 회복*이라는 점이 중요.
- **중독의 gain-of-function 가소성** — [[concept-drug-evoked-synaptic-plasticity]]: 병리 상태가 시냅스 강도에 래치되고, **depotentiation으로 되돌릴 수 있다**.
- **강박의 개체 양봉 분포** — [[concept-compulsion]]: 처벌 도입 후 집단이 두 봉우리로 갈리는 현상은 개체 수준 양안정성의 행동 표현일 수 있다. (해석 주의: 분포의 양봉성은 회로 양안정성의 증거가 아니다.)

## 해석 주의
- **행동의 지속은 회로 양안정성의 증거가 아니다**. 느린 호르몬 동역학, 위장관 신호, 학습 모두 지속성을 만든다. 위 체크리스트 1–3을 통과해야 한다.
- 양안정성은 **측정 수준에 의존**한다 — 단일 시냅스가 양안정이 아니어도 집단 평균이 계단형으로 보일 수 있다.
- Yang 2011의 flip-flop은 **시냅스 수준 모델**이며, 개체 수준 체중 조절이 set point인지 set range인지에 대한 직접 증거는 아니다.

## 관련 페이지
- [[yang-2011-hunger-states-switch-a-flip-flop]] — 원전(SR flip-flop·hysteresis·set range).
- [[grzelka-2023-a-synaptic-amplifier-of-hunger]] — 체중 축에서의 긴 시간척도 래치.
- [[concept-agrp-synaptic-plasticity]] — 이 성질이 구현되는 시냅스 기질.
- [[concept-weight-regain-defended-adiposity]] — "defended adiposity"를 set point로 읽을지 set range로 읽을지의 분기점.
- [[concept-drug-evoked-synaptic-plasticity]] — 되돌릴 수 있는 래치(중독판)·depotentiation.
- [[concept-ghrelin]] · [[concept-leptin]] · [[concept-pomc-neurons]] — set·reset 신호와 그 중계.
- [[concept-need-motivation-pleasure-utility]] — Need를 연속 오차 신호로 볼지 래치된 상태로 볼지.
- [[concept-one-shot-learning]] — 짧은 입력이 긴 상태를 만드는 또 다른 규칙 계열.
- [[xu-2020-behavioral-state-coding-by]] — 행동 "상태"를 앙상블이 부호화한다는 상보적 관점(상태의 표상 vs 상태의 유지 기전).
- [[overview-appetite-energy-homeostasis]] — 항상성 제어 이론의 자리.
