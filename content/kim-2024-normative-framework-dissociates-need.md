---
title: "Kim et al. 2024 — A normative framework dissociates need and motivation in hypothalamic neurons"
type: paper
created: 2026-05-25
updated: 2026-05-30
source: raw/2024 Science Advances. A normative framework dissociates need and motivation in hypothalamic neurons.pdf
authors: [Kyu Sik Kim, Young Hee Lee, Jong Won Yun, Yu-Been Kim, Ha Young Song, Joon Seok Park, Sang-Ho Jung, Jong-Woo Sohn, Ki Woo Kim, HyungGoo R. Kim, Hyung Jin Choi]
year: 2024
journal: Science Advances
---

> [!takeaway] 연구 방향 관점의 핵심
> **사용자 lab의 NMPU framework foundational 실험 자료.** 계산 normative model로 ARC AgRP = **Need (predicted deficit)**, LH LepR = **Motivation (accumulated need)** 임을 in vivo 광계측 + 광유전으로 입증. wiki 전반의 NMPU 회로 매핑 근거. HyungGoo Kim (SKKU·IBS) 협업으로 computational neuroscience 합류.

# A normative framework dissociates need and motivation in hypothalamic neurons

## 한 줄 요약
ARC AgRP 뉴런과 LH LepR 뉴런의 in vivo 활성을 정량 normative model fitting으로 분석 → **AgRP = Need (예측된 결핍), LH LepR = Motivation (need 누적)**로 분리. 사용자 lab (서울대 의대 최형진 교수 + SKKU HyungGoo Kim).

## 핵심 framework

### 정의
- **Deficit** Df(Ht) = 현재 결핍.
- **Predicted change** PCf(Ht) = external information 으로 예측한 미래 결핍 변화.
- **Predicted deficit** PDf(Ht) = D + PC = **Need** Nf(t).
- **Motivation** Mf(t) = ∫ [a·Nf(t) − Leak] dt — need의 누적.
- **Behavior** Bf(t) = Mf(t) − K, motivation이 threshold K를 넘으면 행동 개시.

### Need vs Motivation 시뮬레이션
- Need만으로 행동 driver = 행동 초조하게 끊김 (oscillation).
- Need가 motivation으로 **누적**되면 = 지속적·효율적 행동 → 진화적 우위.

## 실험 paradigm (Naturalistic + computational)

### Predicted gain tests (Need 감소, Motivation 증가)
1. **Test 1 — Seeking initiation**: 쥐가 shelter에서 voluntarily 나가는 순간.
2. **Test 2 — Contact**: 음식에 신체 접촉 순간.
→ 두 event에서 AgRP 활성 ↓, LH LepR 활성 ↑ (Need 감소 + Motivation 증가).

### Predicted loss tests (Need 증가)
1. **Test 1 — Inaccessibility**: 음식 도달 후 문 닫힘 (장기 starvation 예측). AgRP ↑, LH LepR 변화 없음 (motivation은 접근 불가시 0).
2. **Test 2 — Abandon**: 도달 불가능 (높이 11 cm) 음식 voluntarily 포기. AgRP ↑ + sustained, LH LepR ↓.

### Multi-predicted gain/loss test (★)
- 한 trial에 multiple sequential event (accessibility → seeking → proximate → contact → consumption end → inaccessibility).
- Single trial 분석 + leave-one-out cross-validation.
- AIC로 Need model vs Motivation model vs **inverted models** 비교.
- 결과: AgRP = Need model 압도적 적합, LH LepR = Motivation model 압도적 적합. Inverted control도 통과.

## 광유전 검증 (causality)

### 예측 vs 결과
- **AgRP ChR2 활성 (10초)**: 자극 후 식이가 **sustained** (need가 motivation으로 누적되어 threshold 위로 유지).
- **LH LepR ChR2 활성 (10초)**: 자극 종료와 함께 식이 즉시 중단 (motivation이 즉시 threshold 아래로).
- 두 dynamics가 model-fit best-fit 으로 정확히 예측.

→ Optogenetic dynamics 자체가 **Need (지속 accumulation 필요) vs Motivation (즉시 효과)** 정체성 확정.

## Mathematical formulation (간략)

```
Need:        N(t) = N(t₀) − R(t)         [stepwise on events]
Motivation:  M(t) = ∫ [a·N(t) − Leak] dt
Behavior:    B(t) = M(t) − K              [threshold initiation]
```

GCaMP6s kernel 합성곱 후 raw photometry trace와 비교. AIC = N·ln(RSS/N) + 2K로 model 비교.

## 추가 분석 기법
- **PCA + t-SNE**: AgRP vs LH LepR neural trajectory 분리.
- **CEBRA** (Schneider 2023 Nature) — nonlinear latent embedding으로 두 회로 분리 검증.
- **LOO cross-validation**: overfitting 차단.
- **Permutation test**: random shuffle data 대비 model 우월.

## 사용자 lab framework backbone
이 paper가 [[kim-2024-unified-theoretical-framework-underlying-regulation|Kim YB 2024 BioEssays NMPU framework]]의 **실험 backbone**.
- BioEssays = 4-component (NMPU) 이론 정립.
- Sci Adv = AgRP = Need + LH LepR = Motivation **회로 입증**.

## NMPU framework 매핑
- **AgRP = Need** = ARC orexigenic first-order, sensory cue로 즉시 갱신.
- **LH LepR = Motivation** = ARC AgRP downstream + 다양한 input integrator.
- Pleasure = NAc DA, IC, VP (이 paper 범위 밖).
- Utility = NTS, VMH, BLA (이 paper 범위 밖).

## 함의 (논의)
- Drive-reduction theory (Hull 1943)의 **quantitative 정량화** — neural substrate 식별 가능.
- Subfornical organ thirst neuron (Augustine·Oka)도 normative model 적용 가능 시사.
- Competing need (food vs water, Richman 2023 Nature)도 motivation accumulation으로 설명 가능.
- Goal-directed vs habit, model-free vs model-based 통합 가능성.
- Metabolic change → vagal afferent → NTS → hypothalamus가 current deficit 신호 전달 (Aklan 2020).

## 임상 함의
- 비만 = NMPU 어디가 망가졌나? (Need 과잉? Motivation accumulation 과다? Leak ↓?)
- DTx ([[lee-2025-hijacked-brain-modern-obesity-cue|Lee 2025]]) 회로별 표적 정량화 path.
- AN = Motivation accumulation 결손 모델 가능 ([[korotkova-2026-balancing-acts-lateral-hypothalamic|Korotkova 2026]] LepR LH 회로와 정합).

## 관련 페이지
- [[concept-need-motivation-pleasure-utility]] — NMPU framework 본문.
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] — NMPU 이론판 (BioEssays 2024).
- [[concept-npy-agrp-neurons]] — Need 회로.
- [[lee-2019-food-craving-seeking-and]] — AgRP=appetitive-only / Need vs Motivation 해리의 행동학적 phase framework 원전 (본 lab).
- [[concept-lateral-hypothalamus]] — Motivation 회로.
- [[concept-arcuate-nucleus]] — AgRP 위치.
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — 사용자 lab LH review (이 paper의 회로적 base).
- [[lee-2025-hijacked-brain-modern-obesity-cue]] — 임상 응용.
- [[korotkova-2026-balancing-acts-lateral-hypothalamic]] — LH 3-drive arbitration framework.
- [[faour-2025-emerging-role-of-agrp]] — AgRP 4-modality integrator (Need 회로 확장).
- [[johansen-2025-brain-control-of-energy]] — 본 논문을 LH LepR NMPU 정량 근거로 인용 (Cell 2025).
- [[proposal-nmpu-human-translation]] — 본 마우스 normative model을 인간으로 번역하는 연구계획서.
- [[proposal-hunger-need-encoding-human-translation]] — 본 논문의 Need(AgRP)만을 심화: 영양소 정체 항을 더한 확장 normative model + 배고픔 인간 biomarker 연구계획서.
- [[stuber-2025-the-neurobiology-of-overeating]] — 본 framework를 medial(need)/lateral(motivation) 분리로 인용 (Neuron 2025, ref61).
- [[walker-2026-a-hypothalamic-circuit-for]] — AgRP=Predicted Deficit를 **공급하는 상류 회로**(PVH^Sim2→AgRP가 인지·맥락 예측 cue로 단식 초기 빠른 활성 구동); Need 예측 신호의 회로 기질 (Neuron 2026, Lowell lab).
- [[seiler-2026-dual-activation-of-mc3r-and]] — AgRP(=Need encoder) 하류 MC3R/MC4R 수용체 약리; dual-agonism NHP 감량 (Nat Commun 2026).
- [[person-choi-hyung-jin]] — 교신저자 (사용자 본인).
- [[petzold-2023-complementary-lateral-hypothalamic-populations]] — LH^LepR=Motivation을 다중 욕구 arbitration까지 확장.
- [[gruzdeva-2026-hunger-neurons-track-available-food]] — Predicted Deficit(Need)의 **공간 축**: 접근=predicted gain→AgRP↓, 이탈=predicted loss→AgRP↑. Need가 시간적 예측뿐 아니라 "먹이까지의 학습된 거리"로도 갱신됨을 시사 (bioRxiv 2026).
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
