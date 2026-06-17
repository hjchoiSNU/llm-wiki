---
title: "Dopamine-mediated interactions between short- and long-term memory dynamics"
type: paper
created: 2026-04-30
updated: 2026-04-30
source: "raw/2024 Nature. Dopamine-mediated interactions between short- and long-term memory dynamics.pdf"
authors: [Huang C, Luo J, Woo SJ, Roitman LA, Li J, Pieribone VA, Kannan M, Vasan G, Schnitzer MJ]
year: 2024
journal: "Nature (Accelerated Article Preview, 2024)"
---

> [!takeaway] 연구 방향 관점의 핵심
> 도파민 회로에 대한 RPE 논쟁([[adam-2026-dopamine-takes-hit-how-neuroscience|Adam 2026]])에 **무척추 측면 데이터** — Drosophila mushroom body PPL1-DANs가 **innate + learnt valence를 bi-directional로 통합**하며, **short-term memory (STM) unit이 long-term memory (LTM) 형성을 gate**한다는 직접 증거. 핵심 함의: ① DAN heterogeneity가 진화적으로 보존된 원리 ([[morales-2017-ventral-tegmental-area-cellular-heterogeneity|Morales 2017]] 포유류 VTA와 평행). ② **Anti-Hebbian bi-directional plasticity** — DAN 억제가 시냅스를 *강화* — [[gershman-2024-explaining-dopamine-prediction-errors-beyond|Gershman 2024]]의 dual-channel·negative-RPE 인코딩과 호환. ③ **Extinction의 paradox**: 학습 직후(10분) extinction 시도가 LTM을 *강화* — "habit이 왜 끊기 어려운가" ([[lee-2025-hijacked-brain-modern-obesity-cue|Hijacked brain]]의 5 maladaptive types 중 habit·addiction 핵심)에 분자/회로 단서. ④ **Spacing effect** (~360s ISI 최적) — 식이 관련 cue-context 학습에 임상 함의 ([[concept-appetitive-consummatory-phases|appetitive-consummatory]] 학습 패러다임 설계). ⑤ Voltage-imaging은 GCaMP가 놓치는 **bi-directional spiking** (excitation·suppression 모두) 를 잡아냄 — 포유류 fiber photometry 데이터의 재해석 필요.

# Huang, Luo, ..., Schnitzer 2024 — DA-mediated STM↔LTM interactions in fly MB

## 한 줄 요약
Drosophila mushroom body PPL1 dopamine neurons가 voltage-imaging로 측정 시 innate와 learnt valence를 bi-directional 통합하며, **MBON-α1pedc>α/β의 STM-trace가 PPL1-α'2α2 / PPL1-α3로의 inhibitory feedback을 약화시켜 LTM 형성을 gate**한다.

## 핵심 진영
포유류 [[concept-dopamine-reward-system|VTA]] 연구가 fiber photometry · GCaMP에 의존해 *excitation* 위주 신호를 보는 것에 대해, 본 논문은 **무척추 voltage-imaging로 ms 단위 spike + suppression** 을 측정. 결과적으로 DAN이 innate odor preference에 따라 **excit·suppress** 양방향으로 반응함을 입증 — Ca2+ imaging이 놓친 음의 신호.

이는 [[adam-2026-dopamine-takes-hit-how-neuroscience|Adam 2026 Nature Feature]] 논쟁의 fly-side 핵심 데이터이며, [[morales-2017-ventral-tegmental-area-cellular-heterogeneity|VTA cellular heterogeneity (Morales 2017)]]의 진화적 보존을 보강한다.

## 방법

### Voltage-imaging
- pAce: Acetabularia opsin 기반 positive-polarity FRET-opsin voltage indicator (Schnitzer lab 자체 개발).
- 1 kHz imaging — neural spike + suppression을 ms 해상도로 추적.
- **>500 flies** 대규모 — 생리·행동 변이성 평가 가능.
- 5 PPL1-DAN subtype (PPL1-α1pedc, -α'2α1, -α'2α2, -α3, -α'3) + 6 MBON-subtype.

### Behavioral assay
- Head-fixed fly + trackball + olfactory delivery.
- 6 training bouts: CS+ odor (30 s) ↔ pulsed thoracic shock (30 s) pairing.
- 5개 odor (강한 attraction → 강한 avoidance) — innate valence range 확보.

## 핵심 발견

### 1. PPL1-DAN의 bi-directional, heterogeneous valence coding
- **Shock**: PPL1-α1pedc, -α'2α1, -α3 spike↑ (시작 시), shock 종료 시 spike↓.
- **Sucrose reward**: PPL1-α1pedc, -α'2α1, -α'2α2, -α3 spike↓.
- **Odor (innate valence)**: PPL1-DAN spiking이 odor의 행동 선호와 **양방향 상관** — attractive odor → 일부 PPL1 spiking↓, repulsive → spiking↑. 예외: PPL1-α'3는 거의 항상 excitation.
- → DANs는 reward·shock 외에도 **innate sensory valence를 다양한 부호로 인코딩** — Ca2+ imaging이 놓친 *suppression* 가지 발견.

### 2. Conditioning에 의한 plasticity 분배
- **MBON-α1pedc>α/β**: CS+ evoked 응답 깊은 depression, 그러나 ~1 hr 후 baseline 복귀 → STM.
- **MBON-α3**: CS+ evoked depression이 **>24 hr 지속** → LTM.
- **PPL1-α'2α2, PPL1-α3**: CS+ evoked 응답이 학습 중 spiking 감소 → 증가 → 다시 감소로 진행 (**transient potentiation** 3-6 bout 사이).

### 3. STM이 LTM을 gate — feedback 회로
**핵심 회로**:
1. 초기 conditioning: PPL1-α1pedc, -α'2α1이 KC→MBON-α1pedc>α/β depression 유도 → STM.
2. MBON-α1pedc>α/β의 spiking ↓ → PPL1-α'2α2와 PPL1-α3로의 inhibitory feedback 약화.
3. 이로 인해 PPL1-α'2α2, -α3가 CS+ evoked **net valence** (innate + learnt) 신호 증폭 가능.
4. 이 증폭된 DAN 신호가 KC→MBON-α3 plasticity를 gate → LTM.

**검증**:
- GABA-A receptor knockdown in PPL1-α3 → innate valence coding range 손상.
- MBON-α1pedc>α/β neurotransmission block → PPL1-α3가 학습으로 신호 변하지 않음 → MBON-α3 LTM plasticity 차단.
- MBON-α1pedc>α/β optogenetic activation (학습 중 inhibition 유지) → 5분 memory 정상, **3 hr memory 손상** — STM은 정상이지만 LTM 형성 차단.

### 4. Computational model — connectome + spike data
- 9-neuron 3-module model (α1, α'2, α3) — fly connectome 기반.
- **Anti-Hebbian bi-directional plasticity**: KC + DAN excitation → KC→MBON 시냅스 약화. KC + DAN suppression → KC→MBON 시냅스 강화.
- α1: ~30 min plasticity decay. α'2, α3: ~100 min. α 보합: 3 hr 후 별도의 더 느린 시간상수.
- Spacing effect 자연 발생 — **360 s ISI 최적** (sensory adaptation vs MBON-α1 feedback 균형).

### 5. 검증된 예측

**A. Spacing effect**:
- 6 training bouts × 360 s ISI vs 60 s 또는 900 s ISI → MBON-α3 24 hr depression 360 s에서 최강 — 모델 예측 일치.
- Cf. 인간 학습 spacing effect (vocab, motor skill).

**B. Extinction의 valence- · time-dependence**:
- Attractive odor conditioning 후, 60분 시점 extinction은 MBON-α3 plasticity 소거; 30분 이전 extinction은 효과 없음.
- Repulsive odor: extinction 효과 약함.

**C. Paradoxical extinction enhancement** (★):
- Conditioning 직후 (10분) extinction → 35분 시점 MBON-α3 plasticity *강화*.
- 메커니즘: PPL1-α3가 학습된 aversive valence를 CS+에 attach → unpaired CS+ presentation도 **self-reinforcer**로 작동 → LTM 강화.
- → "habit이 끊기 어려운 이유" 의 회로 수준 설명.

## 이론적 함의

### Anti-Hebbian bi-directional plasticity
- DAN 억제 = 시냅스 강화 → 포유류의 negative dopamine signal이 negative prediction error를 인코딩한다는 가설 ([[gershman-2024-explaining-dopamine-prediction-errors-beyond|Gershman 2024]]) 과 직접 호환.
- PAM-β'2α DAN의 inactivation/activation이 appetitive/aversive 학습을 인위적 강화한다는 선행 결과와 일치 — PPL1-DAN 측 평행 실험 필요.

### STM → LTM gating ≠ memory transfer
- 기존 모델: offline consolidation 동안 STM → LTM 전송.
- 본 모델: **memory가 전송되지 않음**. STM module의 feedback이 학습 중 LTM module의 plasticity를 gate. 이것이 빠른 LTM 형성과 reliable repeat 검출을 가능하게 함.

### Heterogeneous DAN
- 서로 다른 PPL1 subtype이 다른 valence·시간 척도·학습 알고리즘을 매개.
- α1: STM, fast, CS+US coincidence detection.
- α'2, α3: slower, prediction-based (CS+의 누적 학습 valence를 통합).
- → 포유류 [[morales-2017-ventral-tegmental-area-cellular-heterogeneity|VTA heterogeneity]]·[[lee-2024-feature-specific-prediction-error|feature-specific RPE (Lee 2024)]] 와 평행.

### Net valence integration
- 포유류 RPE가 단일 reward signal 인 것에 대해, 본 논문 PPL1은 cue·US·feedback의 **net signed sum**을 인코딩.
- Innate appetitive cue + aversive US 짝짓기는 PPL1 신호를 약화 → 모순적 학습 억제 (예: 익숙한 음식이 갑자기 punishment를 유발하는 경우, 학습이 약함).
- → [[concept-need-motivation-pleasure-utility|NMPU framework]]의 Motivation·Utility 통합 신경기질로 해석 가능.

## 진영 비교

| 진영 | 본 논문과의 관계 |
|---|---|
| **Schultz RPE** | 호환 — DAN이 prediction error 신호 portion 가짐, but innate valence 통합으로 확장. |
| **Berridge wanting/liking** | 호환 — DAN suppression이 시냅스를 강화 (anti-Hebbian) → DA의 단순 hedonia 신호 부정. |
| **[[salamone-2012-mysterious-motivational-functions-mesolimbic|Salamone effort]]** | 약한 호환 — DAN multi-function 공유. |
| **[[gershman-2024-explaining-dopamine-prediction-errors-beyond|Gershman 2024 belief-state]]** | 강한 호환 — bi-directional·negative RPE 인코딩 공유. |
| **[[blanco-pozo-2024-dopamine-independent-effect-rewards-choices|Blanco-Pozo 2024]]** | 보완 — Blanco-Pozo는 mammalian outcome-time DA가 학습에 인과 무영향, 본 논문은 fly에서 PPL1-DAN이 학습에 인과 충분 (knockdown으로 검증). 종 간 차이 가능 또는 task-dependent. |
| **[[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation|Mohebi 2019]]** | 호환 — DA 신호의 다중 시간 척도 공유. |
| **[[hamid-2016-mesolimbic-dopamine-signals-value-work|Hamid 2016]]** | 호환 — value broadcast의 fly 평행. |
| **[[lee-2024-feature-specific-prediction-error|Lee 2024 feature-specific RPE]]** | 강한 호환 — DAN heterogeneous feature 인코딩의 진화적 보존. |
| **[[morales-2017-ventral-tegmental-area-cellular-heterogeneity|Morales 2017 VTA]]** | 강한 호환 — heterogeneity가 진화적 원리. |
| **ANCCR (Namboodiri)** | 부분 호환 — backward causal inference 측면은 본 논문 self-reinforcer 효과와 사상적 친척. |
| **[[adam-2026-dopamine-takes-hit-how-neuroscience|Adam 2026]] 종합** | 핵심 fly-side 데이터 — 진화적 보존 입증. |

## 본 wiki 적용

### Hijacked brain — 5 maladaptive eating types ([[lee-2025-hijacked-brain-modern-obesity-cue]])
- **Habit / addiction**: 본 논문 paradoxical enhancement (10분 후 extinction이 LTM을 강화) 가 핵심 회로 단서. 식이 cue exposure를 부주의하게 시도하면 habit·addiction LTM이 *강화*될 수 있음 → DTx 설계에 시간 변수 critical.
- **Cue-evoked**: 360 s ISI 최적이 cue 학습에 일반화 가능 — DTx 패러다임의 cue exposure spacing 설계.
- **Restrained**: 학습된 valence가 CS+ self-reinforcer로 작동 → restrained eater의 "참았다 폭식" 사이클의 회로 가설.

### NMPU framework ([[kim-2024-unified-theoretical-framework-underlying-regulation]])
- **Motivation·Utility 통합**: PPL1이 innate + learnt valence를 net signed sum 으로 인코딩 — Motivation·Utility 합산 신경기질 후보.
- **Pleasure**: DAN suppression이 시냅스 강화를 일으키는 anti-Hebbian이 Pleasure 신호 직접 부정 (Salamone 입장 강화).
- **Need**: 본 논문 직접 다루지 않음 (fly homeostasis는 별도).

### Appetitive-consummatory ([[concept-appetitive-consummatory-phases]])
- Cue 학습은 appetitive phase 직접 매개 — 본 논문이 cue valence 통합의 회로 매커니즘 제공.

### Dopamine reward system ([[concept-dopamine-reward-system]])
- 진화적으로 보존된 heterogeneous DA 회로 원리.
- Voltage-imaging 우월성 — fiber photometry 데이터 재해석 필요.
- Anti-Hebbian bi-directional plasticity → mammal NAc 데이터에 적용 시 새로운 모델 생성 가능.

## 한계

1. **종 차이**: Drosophila MB ≠ mammalian basal ganglia — 회로 구조·뉴런 수·진화적 거리. 일반화는 가설 수준.
2. **Voltage ≠ release**: DAN spiking을 측정했지만 dopamine release를 직접 측정 못함. α'2 module의 plasticity 해석 불완전.
3. **Aversive 위주**: appetitive conditioning module (PAM 등) 미다룸. PAM-DAN 평행 실험 필요.
4. **Single voltage indicator**: pAce의 limitations (FRET 동역학, photobleaching) — 향후 다른 indicator 와 cross-validation 필요.
5. **연결체 의존**: Hemibrain connectome 기반 model — 다른 fly strain 과 차이 가능.

## 관련 페이지
- [[concept-dopamine-reward-system]] — DA 회로 일반.
- [[adam-2026-dopamine-takes-hit-how-neuroscience]] — RPE 도전 종합. 본 논문은 fly-side 핵심 데이터.
- [[morales-2017-ventral-tegmental-area-cellular-heterogeneity]] — VTA heterogeneity의 진화적 보존.
- [[gershman-2024-explaining-dopamine-prediction-errors-beyond]] — bi-directional / negative RPE 호환.
- [[lee-2024-feature-specific-prediction-error]] — DA 다양 feature 인코딩.
- [[blanco-pozo-2024-dopamine-independent-effect-rewards-choices]] — DA 학습 인과성에 대한 보완 (mammal vs fly).
- [[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation]] — 다중 시간 척도 DA.
- [[hamid-2016-mesolimbic-dopamine-signals-value-work]] — value broadcast.
- [[salamone-2012-mysterious-motivational-functions-mesolimbic]] — DA multi-function.
- [[concept-need-motivation-pleasure-utility]] — valence 통합 신경기질.
- [[lee-2025-hijacked-brain-modern-obesity-cue]] — habit 끊기 어려움의 분자 단서.
- [[concept-appetitive-consummatory-phases]] — appetitive cue 학습 매커니즘.
