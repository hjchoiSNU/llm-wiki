---
title: "Dopamine subsystems that track internal states"
type: paper
created: 2026-05-01
updated: 2026-05-30
source: "raw/2022 Nature. (Knight) Dopamine subsystems that track internal states.pptx"
authors: [Grove JCR, Gray LA, La Santa Medina N, Sivakumar N, Ahn JS, Corpuz TV, Berke JD, Kreitzer AC, Knight ZA]
year: 2022
journal: "Nature 608:374–380"
---

> [!takeaway] 연구 방향 관점의 핵심
> Knight 랩이 **VTA-DA 시스템의 internal-state 추적 기능**을 처음 분자·회로 수준으로 입증한 결정작. 핵심: VTA DA는 단일 RPE가 아니라 **자원별 (수분/영양) sub-system**으로 분리되며, 각각 별도 **시상하부 입력**으로 internal state에 반응. 사용자 lab 관점:
> 1. **[[concept-lateral-hypothalamus|LH]] GABAergic → VTA DA**가 정확히 systemic 수분 균형을 추적 — LH가 motivation hub일 뿐 아니라 reward 회로의 source.
> 2. **[[concept-dopamine-reward-system|DA의 자원별 분리]]** 패러다임의 출발 — 같은 그룹의 [[grove-2025-lateralized-pathway-associating-nutrients|Grove 2025]]에서 nutrient용 aBLA 회로 추가, [[weber-2025-interoceptive-origin-reinforcement-learning|Weber 2025]]가 RL framework로 일반화.
> 3. **State-driven primary reward** ([[weber-2025-interoceptive-origin-reinforcement-learning|Weber 2025]]) 의 첫 신경회로 증거 — 탈수 시에만 작동, 수분 보충 시점에 reinforcing.
> 4. NMPU framework ([[kim-2024-unified-theoretical-framework-underlying-regulation]])의 "drive-modulated reward"의 분자 정체.

> [!note] 자료 형태
> raw/는 .pptx (저자 발표 슬라이드 데크). 본 페이지는 다른 wiki 자료의 cross-citation으로 재구성: [[grove-2025-lateralized-pathway-associating-nutrients|Grove 2025 bioRxiv]] (ref 11/41), [[weber-2025-interoceptive-origin-reinforcement-learning|Weber 2025]] (ref 41), Berthold 2024, Reichenbach 2022 등이 본 논문의 핵심 발견을 광범위 인용. 추가 정확한 detail 필요시 원 Nature paper PDF를 raw/에 추가 권장.

# Dopamine subsystems that track internal states

## 한 줄 요약
VTA DA의 한 subset이 **systemic osmolarity 변화**에 반응 — water reinforcement에 필요·충분, **LH GABAergic 뉴런**이 입력. DA가 internal state를 추적함을 첫 분자 입증.

## 핵심 내용 (재구성된 요약 — Weber 2025, Grove 2025 인용 기반)

### Background
- 수분 결핍 시 음수 행동 reinforce되지만, primary reward signal의 분자 회로 미상.
- 가설: VTA DA 일부가 internal state (수분 균형) 변화를 감지하면, 음수 → reward 신호 생성.

### Method (재구성)
- 마우스 photometry / 광유전학 / IG 주입 / 행동.
- VTA-DA 단일세포 imaging.

### Result (재구성, Weber 2025·Grove 2025 인용 기반)

**1. VTA DA 일부가 systemic osmolarity 변화에 반응**
- Water-deprived 동물에서 음수 시 두 단계 DA: phasic (입에서 licking) + 두 번째 sustained (위 도착, 흡수).
- Hypertonic solution은 sustained 반응 없음 — **수분 흡수가 진짜 trigger**.
- Stomach 직접 주입에서도 sustained 반응 — oral 우회.

**2. Post-absorptive DA 침묵 → water reinforcement 학습 차단**
- VTA DA neurons의 post-absorptive phase 침묵이 음수 강화 학습 막음.
- 단순 motor 기능 회복(DA-deficient 마우스에서 DS DA 복원 - Szczypka 2001)을 넘어선 학습 자체에 필요.

**3. LH GABAergic 뉴런이 source**
- LH GABAergic → VTA DA 입력이 fluid balance 추적.
- LH 자극은 자연 탈수 모방 — DA 반응·행동 변화.
- [[concept-lateral-hypothalamus|LH]]가 단순 motivation hub가 아니라 **reward 회로의 input source** 격상.

**4. Drive (SFO 갈증) vs Reward 분리**
- Drive 자체 자극은 직접 DA 안 일으킴 (Weber 2025 Box 3 인용).
- Drive는 modulator, reward는 ground-truth corrective feedback.

### Claim
- Single scalar RPE ≠ 모든 DA. 
- DA는 **자원별 sub-system**으로 분리되며 internal state 추적이 한 channel.
- Homeostatic RL (Keramati & Gutkin 2014)의 분자 증거.

## 사용자 lab과의 직접 연결
- **NMPU 검증**: drive (Need) ≠ reward — NMPU의 Need vs Pleasure 분리 정당화.
- **LH의 위상 격상**: [[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]] 의 LH 회로 종합에 reward source 차원 추가.
- **수분 vs 식이 회로 분리**: water = state-driven, food = event-driven ([[weber-2025-interoceptive-origin-reinforcement-learning|Weber 2025]]). 분리 가능 표적.
- **사용자 lab의 LH 연구 정당성**: LH가 reward circuitry의 핵심 input — DTx/electroceutical로서의 가치 ([[lee-2025-hijacked-brain-modern-obesity-cue|Hijacked Brain]]).

## 관련 페이지
- [[onimus-2026-dopamine-ensembles-regulating-appetite]] — 본 논문의 'DA가 internal state 추적' 논지를 ensemble 통합 framework로 확장 (TEM 2026, ref 38).
- [[grove-2025-lateralized-pathway-associating-nutrients]] — 같은 그룹의 nutrient용 aBLA 회로 후속작.
- [[weber-2025-interoceptive-origin-reinforcement-learning]] — 본 논문을 RL framework로 일반화.
- [[knight-liberles-2025-interoception]] — Knight의 frontier overview.
- [[person-knight-zachary]] — 교신저자 인물 hub.
- [[concept-lateral-hypothalamus]] — LH GABAergic → VTA 회로의 입증.
- [[concept-dopamine-reward-system]] — DA 자원별 분리 패러다임의 출발.
- [[concept-interoception]] — interoceptive primary reward 첫 분자 증거.
- [[concept-primary-reward-signals]] — state-driven reward의 prototype.
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — LH 종합에 본 회로 추가.
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] — NMPU의 Need vs Pleasure 분리 검증.
- [[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation]] — DA 다채널성 (다른 차원).
- [[lee-2024-feature-specific-prediction-error]] — heterogeneity의 RPE 변형 (이 channel은 RPE 아님).
- [[onimus-2026-the-gut-brain-vagal-axis-governs]] — vagal→hindbrain→mesolimbic DA gating; 자원별 DA sub-system과 상보 (Sci Adv 2026).
- [[hoang-2026-methamphetamine-potentiates-the-use-of]] — 본 회로의 **역방향**(VTADA→LH)을 인과로 추가; LH가 reward channel의 source(LH→VTA)이자 outcome-specific 학습의 target(VTA→LH) 양쪽 (Neuron 2026, Sharpe lab).
- [[tellez-2016-separate-circuitries-encode-hedonic-nutritional]] — 도파민 하위계의 내부 대사상태 추적(상보).
