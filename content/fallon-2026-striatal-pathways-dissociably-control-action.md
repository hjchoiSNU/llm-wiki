---
title: Striatal pathways dissociably control action counting and goal-directed steering
type: paper
created: 2026-07-04
updated: 2026-08-19
source: raw/2026 Nature Neuroscience. Striatal pathways dissociably control action counting and goal-directed steering.pdf
authors: [Fallon IP, Roshchina M, Hong F, Fernandez S, Ruan S, Yin HH]
year: 2026
---

> [!takeaway] 연구 방향 관점의 핵심
> Basal ganglia의 direct(dSPN, D1)·indirect(iSPN, D2) 두 경로가 **연속 운동(steering)뿐 아니라 "행동 횟수 세기(action counting)"라는 추상적 목표 진행도**를 push–pull로 함께 제어한다. dSPN은 카운트를 늘리고(accumulator) iSPN은 카운트를 종료(leak/discharge)하며, 둘의 **차이(net output)가 목표 근접도**를 나타낸다. 최형진 랩의 식욕·보상 행동을 "몇 번의 lever press/approach로 구성된 action sequence"로 볼 때, 동기가 단순 on/off 선택이 아니라 **목표 근접도를 추적하는 D1/D2 분업**으로 구현된다는 회로 프레임을 제공한다.

# Striatal pathways dissociably control action counting and goal-directed steering

## 한 줄 요약
생쥐가 보상을 얻으려면 **정확한 횟수의 lever press** 뒤 reward port에 진입해야 하는 신규 operant counting task에서, 등외측 선조체(DLS)의 direct(dSPN)·indirect(iSPN) 경로가 **공간적 방향 조종(steering)과 이산 행동 횟수 세기(counting)를 양방향·해리적으로** 동시에 제어함을 보인 연구(Fallon·Yin, Nat Neurosci 2026). 두 경로 활동의 차이가 물리적·추상적 목표 근접도를 부호화한다.

## 핵심 내용

**Background**
- Basal ganglia(BG) 기능에 두 관점: ① focused selection(direct=선택, indirect=경쟁 억제), ② 연속 kinematics(velocity·position) 지정. 상호배타로 여겨졌으나 자연 행동은 공간 위치 + **sequence 내부 진행도(완료 action 수)** 추적 필요.

**Method**
- 신규 **operant counting task**: 정해진 횟수(count-5; 3/7 검증) lever press 뒤 port 진입해야 보상. 세 phase 순환(steer→lever / press count / steer→port). 이산 press + 연속 kinematics(DeepLabCut) 동시 측정.
- press 분포가 요구치에 비례 + **scalar property**(변산성∝평균) → 진짜 counting. **Outcome devaluation**: press rate↓·지속시간↑이나 **count 불변** → 시간이 아닌 press 수(goal-directed) 기반.
- Pathway-specific **optogenetics**(stGtACR2/ChR2, D1-Cre·A2a-Cre) + **calcium imaging**(miniscope).

**Result — 광유전 조작(양방향·해리)**
- **Steering**: dSPN 활성→contraversive(lever쪽)·sequence 연장; iSPN 활성→ipsiversive(port쪽)·조기 종료.
- **Counting**: dSPN 억제·iSPN 흥분→count 감소; iSPN 억제만 count 증가(dSPN 흥분은 count 증가 아님) → steering과 counting 부분 해리.
- **Count-의존성**: 같은 자극도 press 5(늦게)에서 효과 큼 → 순수 steering 아닌 현재 count 의존. dSPN 자극=internal count 부분 리셋(sequence 연장), iSPN 자극=카운트 완료처럼 종료.

**Result — Calcium imaging(두 집단)**
- **Lever-approach 집단**: dSPN 먼저(velocity 양상관), iSPN 늦게(음상관).
- **Count 집단**: dSPN ramping-down, iSPN ramping-up(port 직전 peak); peak 크기가 count 반영 → accumulator(dSPN)–discharge(iSPN) 동역학.
- 두 집단은 dSPN/iSPN 모두 포함, 공간적으로 **뒤섞여(intermixed)** 분포(학습으로 형성).
- **Net output = dSPN − iSPN**: lever·port까지 거리·count 완료와 상관 → BG 순출력이 **목표 근접도** 표상.

**Claim**
- BG는 이산 선택에도 연속 kinematics에도 국한되지 않고, **목표 근접도를 나타내는 공통 제어 신호**를 생성. dSPN=accumulator, iSPN=leak/discharge인 **leaky integrator + push–pull controller**로, 학습된 기준(count 5)에 따라 dynamic gating으로 sequence 종료. categorical selection·continuous control 모델을 잇는 통합 관점.

## 관련 페이지
- [[concept-medium-spiny-neuron]] — dSPN(D1)/iSPN(D2)가 곧 MSN 두 계열; 본 연구는 그 기능 분업을 counting vs steering으로 확장.
- [[chen-2026-striatal-control-of-amygdalar]] — 같은 Yin lab 계열 striatal D1/D2 경로 해리 자매 연구.
- [[giovanniello-2025-a-dual-pathway-architecture-for]] — direct/indirect dual-pathway가 행동을 양방향 제어한다는 공통 아키텍처.
- [[redish-2016-the-computational-complexity-of-valuation]] — action sequence·내부 진행도 추적을 계산론적 valuation 틀에서 조명.
- [[concept-dopamine-reward-system]] — 도파민이 dSPN↑/iSPN↓로 net BG 출력·목표접근 velocity를 편향한다는 discussion 연결.
- [[concept-computational-ethology]] — 본 논문의 DeepLabCut kinematics 측정이 속한 도구 계열 hub; 이산 press와 연속 운동학을 함께 다루는 계측 문제.
- [[piette-2026-striatal-endocannabinoids-drive-one-shot]] — 같은 DLS의 **입력단**: dSPN/iSPN이 출력을 나눈다면, 그 corticostriatal 입력 시냅스는 eCB-LTP(짧은 1회 경험)/NMDA-LTP(반복 경험)로 가소성 규칙을 나눈다. presynaptic D2R 결손이 두 논문 모두에서 핵심 (Nat Neurosci 2026).
- [[concept-one-shot-learning]] — DLS 시냅스의 비고전적 가소성 규칙 개념 hub.
- [[zhang-2026-inherited-input-and-local-transformations]] — 같은 dSPN/iSPN 분업을 **신호의 기원**(상속 vs 국소 변환) 측면에서 물음. 본 논문이 인과 조작으로 출력을 보였다면, 저쪽은 입력 대조로 계산 위치를 특정 (bioRxiv 2026, Howe lab).
