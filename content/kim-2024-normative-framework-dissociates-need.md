---
title: "Kim et al. 2024 — A normative framework dissociates need and motivation in hypothalamic neurons"
type: paper
created: 2026-05-25
updated: 2026-10-03
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
- [[sumarli-2026-multidimensional-control-of-ingestive-behavior]] — LH^Nts가 Need도 value도 아닌 **Motivation의 운동·각성 성분**을 표상한다는 대비 사례(VTA-DA의 value coding과 거의 반대 부호) (bioRxiv 2026).
- [[gordon-2026-lateral-hypothalamic-control-of-the]] — LH^GABA/LH^Glut **비율(LHA^Ratio)** 이 섭취물 가치·valence를 연속축으로 추적하고 선조체 DA 지형을 인과 설정 → **Motivation 축의 회로 readout** 후보. LH^LepR(GABA 아집단)이 FR:Suc의 value-scaling을 나르는지가 검증 질문 (Neuron 2026, Stuber lab).
- [[liu-2023-an-iterative-neural-processing]] — 넓은 arena 자유섭식에서 접근·접촉 시 AgRP↓·LH^GABA↑, 먹이를 떠난 탐색 중 AgRP 재상승(배고플 때만) — 본 normative model(predicted gain/loss)과 같은 방향의 독립 데이터(Neuron 2023, Wang lab; 저자 해석은 "섭식 관련성의 실시간 평가"). 금식 쥐도 접촉 뒤 75.4% 이탈하는 **조각난 섭식(C-W-n(E-W)-C)** 은 M=∫[a·N−Leak]dt, B=M−K의 leak·역치 파라미터를 적합할 행동 미세구조 데이터다(연결 가설).
- [[siemian-2021-lateral-hypothalamic-lepr-neurons]] — 독립 lab(NIDA Aponte)에서 같은 LH^LepR를 ablation·opto·chemo로 조작했을 때 **섭취·체중은 전혀 변하지 않고 appetitive만 변했다**(Pavlovian cue 변별 학습 완전 실패, RTPP 양방향, sucrose CPP 차단; cocaine CPP는 무효). "Motivation은 소비 집행이 아니라 접근·학습 단계 변수"라는 본 논문 매핑과 방향이 같다. 단일세포에서 **LH^LepR만 CS+/CS−를 변별**(CS+ 선택성 centroid 2.00 vs LH^Vgat 1.26)하고, **LH^LepR→VTA 억제는 학습을 강화**해 Utility→Motivation 되먹임 회로 후보가 된다(연결 가설) (Cell Rep 2021).
- [[jennings-2015-visualizing-hypothalamic-network-dynamics]] — LH^Vgat 활성 → seeking·consumption·reward를 세운 foundational paper(Cell 2015). 본 논문이 LH^LepR=Motivation을 정량 입증하기 전, LH GABAergic이 동기·소비 hub임을 광유전·ablation·단일세포 영상으로 확립. ⚠️ Jennings의 bulk hM3Dq는 소비를 지속 편향(break point 불변)시킨 반면 본 논문 LH^LepR 광활성은 종료와 함께 섭식 즉시 중단(Motivation=즉시 효과) — 세포타입·조작 양식 차이로 병기.
- [[de-vrind-2019-effects-of-gaba-and]] — 포만(ad lib) 상태에서 LH^LepR를 수 시간 화학유전 활성 → 바닥 chow 섭취↓·운동↑·체온↑·체중↓ (Obesity 2019, Adan lab). Need 없이 Motivation 노드만 켜면 '목표 없는 seeking'(운동)과 에너지 소비가 나타난다는 해석 후보(연결 가설). 본 논문의 10 s 광활성 → 즉시 섭식과는 시간척도·조작이 다름.
- [[sharpe-2017-lateral-hypothalamic-gabaergic-neurons]] — rat LH^GABA→VTA가 **행동을 구동하지 않고 학습률만 조절**(말단 억제 → cue 학습 촉진)한다는 원전(Curr Biol 2017). 본 논문이 LH^LepR를 **Motivation(accumulated need)** 으로 고정한 것과 층위가 다르다 — NMPU의 **Utility→Motivation 되먹임** 회로 후보로 읽을 수 있고, 본 논문의 normative model을 Pavlovian cue 과제에 적용하면 "학습 asymptote가 억제군에서 더 높아야 한다"는 검증 가능한 예측이 나온다(연결 가설).
- [[leinninger-2009-leptin-acts-via-leptin]] — LH^LepR라는 세포 집단 자체를 정의한 **해부·약리 원전**(Cell Metab 2009, Myers lab): LHA LepRb = MCH·OX와 비중첩 **GABAergic** 집단, **VTA 조밀 투사**(선조체·NAc 투사 없음), intra-LHA leptin → 섭식·체중↓, *Lep^ob/ob*에 250 pg → 동측 **VTA *Th* ~2.5배·NAc DA ~40%↑**. 연결 가설: 본 논문이 **Motivation(누적 need)** 으로 고정한 노드가 mesolimbic DA의 **장기 생산 용량(설정값)** 까지 정한다면, Motivation 변수는 phasic 출력뿐 아니라 하류 Pleasure/Utility 회로의 **gain 파라미터**도 바꾸는 셈이다(검증: LH^LepR 조작 24 h–수일 후 VTA *Th*·NAc DA 함량 측정). ⚠️ 단 그 논문에서 **36 h 단식은 LHA LepRb c-Fos를 낮췄다**(12%→5%, p=0.05) — 본 논문의 Motivation 누적은 사건 시점 Ca²⁺ 동역학이므로 tonic Fos와 층위가 다르다(병기).
- [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal]] — 같은 LH^LepR에 **"안전(불안) 축"** 을 더하는 독립 lab 1차 자료(Nat Neurosci 2025, Korotkova lab). 이 세포는 anxiogenic 자극(EPM open arm·밝은 중앙·새 arena의 먹이) 자체에 흥분하고, 활성화하면 불안이 줄며(open arm 체류 P=0.0386 opto / 0.0028 chemo) **anxiogenic 맥락에서만** 섭식 개시를 앞당긴다(P=0.0286; 익숙·어두운 맥락 무효). 연결 가설 — 본 논문의 *accumulated need = Motivation* 산출을 `Behavior ∝ Motivation × g(안전도)`로 확장하고 **g를 LH^LepR 활동으로 읽는다**: naturalistic 과제의 밝기·개방도를 파라메트릭하게 바꾸면 Motivation 축적 기울기는 유지된 채 **행동 임계값만 이동**할 것이라는 예측이 세워진다(원문 주장 아님).
