---
title: "Dissociable dopamine dynamics for learning and motivation"
type: paper
created: 2026-04-30
updated: 2026-04-30
source: "raw/2019 Nature. Dissociable dopamine dynamics for learning and motivation.pdf"
authors: [Mohebi A, Pettibone JR, Hamid AA, Wong JT, Vinson LT, Patriarchi T, Tian L, Kennedy RT, Berke JD]
year: 2019
journal: "Nature 570:65–70"
---

> [!takeaway] 연구 방향 관점의 핵심
> **Berke lab의 자기 수정** — [[hamid-2016-mesolimbic-dopamine-signals-value-work|Hamid 2016]] 의 단일 V 가설을 **수정**하는 결정적 데이터. NAc DA release 와 VTA DA neuron firing이 **분리됨**: cue·reward 자극은 둘 다 동반 (RPE 학습 신호), 그러나 motivation ramping (reward rate 변동)은 **DA release 만, firing 변화 없이** 일어남. 결론: **"broadcast burst signals promote learning, whereas local control drives motivation"** — Schultz RPE (firing) 와 Salamone motivation (release) 진영 둘 다 맞고, **메커니즘이 다른 두 채널**. [[morales-2017-ventral-tegmental-area-cellular-heterogeneity|Morales 2017]] heterogeneity 가 사실상 입증됨. NMPU framework 의 motivation 성분은 VTA spike 가 아닌 **NAc 국소 회로** (cholinergic interneuron 등) 에서 매개될 가능성. [[adam-2026-dopamine-takes-hit-how-neuroscience|Adam 2026]] 의 multi-channel modulator 입장에 강력 증거.

# Mohebi et al. 2019 — Dissociable Dopamine Dynamics

## 한 줄 요약
같은 행동 task 에서 동시 측정 → **VTA firing = 학습 신호 (RPE)**, **NAc release = 학습 + motivation (V)**. Motivation 신호는 firing 없이 NAc 국소 발생.

## 핵심 주장 (이 논문의 진영)

### "Dual-channel" DA 가설
| Channel | 메커니즘 | 기능 | 시간 척도 |
|---|---|---|---|
| **Broadcast burst** | VTA DA neuron burst → axon → terminal release | RPE / 학습 | <100 ms |
| **Local control** | NAc 국소 (cholinergic interneuron 등) → terminal release | Motivation / value | 초·분 단위 ramping |

이는 **Hamid 2016 의 단일 V signal 가설**을 부분 수정 — V 신호는 NAc 에 있지만, VTA firing 에는 없음. 두 채널이 **NAc 에서 합쳐져** 단일 release 신호처럼 보일 뿐.

## 핵심 실험 — 같은 task, 다중 측정

### 1. Microdialysis 광역 매핑 (DA × 7 영역)
- **NAc core**: DA ↔ reward rate 강한 상관 (R²≈0.15) — Hamid 2016 재현.
- **NAc shell, dorsal-medial striatum**: 무관계.
- **Ventral prelimbic cortex (vPL)**: 상관 있음.
- **dPL, IL, ACC**: 무관계.
- → **Broadcast 모델 부정** — DA가 모든 axon arbor에 균일 분포 안 함.
- 인간 fMRI subjective value 가 NAc + ventromedial PFC 에 위치 (Bartra 2013) — **종간 일관성**.

### 2. Optogenetic-tagged VTA-l DA neuron 기록
- ChR2-DIO + TH-Cre rat. n = 27 광유전 식별 DA cell.
- Block 별 reward rate 변화에도 **tonic firing rate 변화 없음**:
  - Low vs high reward block 간 firing rate 차이 없음 (개별 cell, 평균, burst rate, ISI 분포 모두).
- Cue·reward 시 **phasic burst 강함** — Schultz RPE 정상 작동.
- Cue 가 더 예측되면 burst 약화 (RPE 표준).
- **결론**: motivation-related DA release 변화는 VTA firing 변화 때문이 아님.

### 3. dLight (genetically encoded DA sensor) 측정
- NAc dLight signal 이 **state value V** 와 RPE δ 보다 더 강하게 상관 (Hamid 2016 voltammetry 재현).
- Block transition 시 dLight 가 1분 단위 reward rate 추적.
- 초 단위 ramping — within-trial value dynamics 매끄럽게.

### 4. 결정적 분리: cue-evoked vs approach-ramping
- **Cue-evoked (light-on)**: VTA firing burst + dLight burst — 둘 다.
- **Approach ramping (light-on → center-in 사이 long latency)**: 
  - dLight 점진 ↑ (motivation 매개).
  - VTA firing **변화 없음** (Fig. 4d-f).
- → 같은 NAc release 안에서도 **cue burst (firing-driven)** 과 **ramping (firing-independent)** 분리 가능.

### 5. 부정적 RPE 약함
- Reward 누락 시 DA cell 잠시 firing 감소 — but 약함 (29 cell 중 2 cell 만 pause duration 으로 negative RPE 인코딩).
- dLight 도 negative RPE 가 positive 보다 약함.
- → 양·음 RPE 비대칭 — Bayer & Glimcher 2007 의 "pause duration encodes negative RPE" 가설 도전.

## 진영 비교

| 진영 | 본 논문과 입장 |
|---|---|
| **Schultz RPE** | **Phasic burst 부분 입증** — cue·reward firing burst 는 RPE 일관. **약점 노출**: negative RPE 약함, ramping 미설명, broadcast 부정. |
| **Salamone motivation** | **강력 지지** — DA가 motivation 매개 맞고, firing-독립으로 작동 가능 → tonic vs phasic 이분법보다 더 깊은 분리. |
| **Niv–Daw–Dayan tonic DA** | **부분 수정** — reward rate ↔ DA release 맞지만, "tonic firing" 에서 안 옴 (firing 변화 없음). 신호는 phasic 이지만 국소 발생. |
| **Hamid 2016 unified value (Berke lab 자체)** | **자기 수정** — unified는 release 에서만 성립. Firing은 RPE 만. 두 channel 분리 인정. |
| **Morales 2017 VTA heterogeneity** | **강력 정합** — 부위별 DA 분포 차이. NAc core ≠ NAc shell ≠ dorsal striatum. |
| **ANCCR (Namboodiri)** | **호환 가능** — 보상 후 backward causal search 도 NAc 국소 메커니즘으로 자연스러움. |
| **Calipari modulator (Adam 2026)** | **이론적 토대** — DA 가 단일 함수 아닌 multi-channel modulator. |

## 이론적 함의

### "Tonic vs phasic" 폐기
- "Tonic" 신호는 사실상 **빠른 fluctuation 의 평균** — 분 단위로 측정하니 매끄러워 보일 뿐, 초 단위 ramping의 합.
- "Tonic firing change drives tonic release change" 는 **틀림**.
- Computational neuroscience의 prior tonic theories (Niv 2007 등) 재검토 필요.

### NAc 국소 조절 메커니즘 후보
- **Cholinergic interneuron** → α7/β2 nicotinic receptor → DA release (Threlfell 2012, Cachope 2012).
- **Basolateral amygdala** → NAc DA release (Floresco 1998, Jones 2010 — VTA 차단해도 BLA 자극으로 release).
- VTA non-DA neuron firing이 ramp — 국소 입력 후보.
- 국소성 한계: 측정 해상도 100 µm — 더 작은 scale 에서 더 분산 가능.

### Ramping 가설들의 검증
- Gershman 2014: ramping = TDRL 변형 (warped state representation).
- Morita & Kato 2014: forgetting 으로 설명.
- 본 논문: ramping이 **trial-by-trial 빠르게 modulated** (rewarded sequence 중 RPE↓, ramping↑) → 단순 forgetting/warping 부족.

### NAc core 의 특수 역할
- "NAc core 는 잘 학습된 cue 반응에 불필요, 하지만 **시간·노력 투자 결정**에 필수" (Nicola 2010 flexible approach).
- 본 논문이 정량 입증: V signal 이 motivation을 매개.

## 본 wiki 적용

### NMPU framework ([[kim-2024-unified-theoretical-framework-underlying-regulation]])
- **Motivation** 성분 = V signal in NAc core release (broadcast 아님).
- **신경기질이 VTA spike 가 아닌 NAc 국소** — NMPU 의 4-component 분리에 anatomical 깊이 추가.
- D2R↓ 비만 모델: VTA neuron 변화 보다 **NAc 국소 회로 변화**로 재해석 가능.

### Hijacked brain ([[lee-2025-hijacked-brain-modern-obesity-cue]])
- **Cue-evoked eating**: VTA burst → broadcast → NAc release. Schultz RPE 작동.
- **Habit, restrained**: NAc 국소 ramping — VTA 자극으로 보존.
- **Food addiction**: NAc 국소 sensitization 이 hyperdopaminergic 보다 더 정확한 표적.
- **Restrained**: NAc V signal 정상 + dlPFC 통제 우세 — V 자체 결손 아님.
- **5 type별 회로 분리**의 정량 framework.

### Cue-induced relapse 재해석
- 흡연 끊은 후 cue 보면 강한 association 유지 — RPE forward 학습으로는 negative PE 누적 → 약화 예측, 실제는 안 약화.
- **NAc 국소 V signal이 cue 에 강하게 반응** — VTA firing 안 변해도 release 가능.
- ANCCR 와 양립 — backward causal search 도 NAc 국소 메커니즘.

## 한계

1. **NAc-VTA 단일 회로 한정**: 다른 striatal 영역 (DLS), 다른 DA target (amygdala, hippocampus, mPFC) 미측정.
2. **공간 해상도 ~100 µm**: 더 작은 scale 의 국소 조절 가능성 미해결.
3. **수컷 rat만**: 성차 미검증.
4. **Pavlovian과의 비교 부족**: head-fixed Pavlovian에서 ramping이 약한 이유는 본 논문에서 부분 설명 (discrete state, instrumental component 부족) 만.
5. **Negative RPE 약함의 의미**: dopamine pause 가 negative RPE 인코딩한다는 가설이 흔들림 — 보상 누락 학습이 다른 메커니즘 (lateral habenula 등)에 의존할 가능성.

## 관련 페이지
- [[hamid-2016-mesolimbic-dopamine-signals-value-work]] — Berke lab 의 이전 unified 가설 (본 논문이 부분 수정).
- [[rice-2019-closing-in-on-what-motivates]] — 본 논문의 Nature N&V 해설.
- [[salamone-2012-mysterious-motivational-functions-mesolimbic]] — motivation 진영.
- [[morales-2017-ventral-tegmental-area-cellular-heterogeneity]] — VTA heterogeneity.
- [[adam-2026-dopamine-takes-hit-how-neuroscience]] — multi-channel modulator.
- [[hjort-2026-prefrontal-to-ventral-tegmental-area]] — DA를 meta 수준 gain 조절(meta-RPE)로 해석; dual-channel dynamics 관점 확장 (Nature 2026).
- [[concept-dopamine-reward-system]] — DA 회로 (dual-channel 추가).
- [[concept-need-motivation-pleasure-utility]] — Motivation 성분.
- [[lee-2025-hijacked-brain-modern-obesity-cue]] — cue·habit·restrained.
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] — NMPU.
