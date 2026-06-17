---
title: "Lee, Kim, Kim, Jang et al. 2023 — Lateral hypothalamic leptin receptor neurons drive hunger-gated food-seeking and consummatory behaviours in male mice"
type: paper
created: 2026-05-25
updated: 2026-05-30
source: raw/2023 Nature Communications. Lateral hypothalamic leptin receptor neurons drive hunger-gated food-seeking and consummatory behaviours in male mice.pdf
authors: [Young Hee Lee, Yu-Been Kim, Kyu Sik Kim, Mirae Jang, Ha Young Song, Sang-Ho Jung, Dong-Soo Ha, Joon Seok Park, Jaegeon Lee, Kyung Min Kim, Deok-Hyeon Cheon, Inhyeok Baek, Min-Gi Shin, Eun Jeong Lee, Sang Jeong Kim, Hyung Jin Choi]
year: 2023
journal: Nature Communications
---

> [!takeaway] 연구 방향 관점의 핵심
> 사용자 lab의 **LH LepR 회로 정의 paper**. LH GABA 뉴런의 4%에 불과한 LH LepR이 **food-specific LH GABA subpopulation의 79%**를 차지함을 발견. Microendoscopy로 **seeking vs consummatory 2 subpopulations 분리** — phase-specific paradigm의 중요성 정립. **NPY가 GABAergic disinhibition으로 LH LepR을 permissive gate**. NMPU의 Motivation 회로 분자·세포 기반.

# Lateral hypothalamic leptin receptor neurons drive hunger-gated food-seeking and consummatory behaviours

## 한 줄 요약
**LH LepR 뉴런이 seeking과 consummatory phase에 분리된 2 subpopulation으로 작동**하며, AgRP/NPY 뉴런이 NPY로 disinhibition gating을 통해 LH LepR을 활성화. 사용자 lab 대표 LH 회로 paper.

## 5가지 핵심 발견

### 1. LH LepR = food-specific LH GABA subpopulation (★)
- LH GABA 뉴런 중 **8%만 food-specific** (chocolate에 활성, Lego에는 비활성).
- LH LepR 뉴런은 LH GABA의 **4%에 불과**하지만, 중 **63%가 food-specific**.
- → **food-specific LH GABA 뉴런의 79% (63/80)가 LH LepR**. 극소수가 전체 식이 회로 거의 대부분 매개.
- Single-cell RNA-seq (Mickelsen 2019): LH LepR의 92%가 GABA. NPYR-expressing LH는 별도 GABA subpopulation.

### 2. Photometry — LH LepR 활성이 seeking·consummatory 모두 timestamp
- Fasted mouse에서 food contact 즉시 활성 ↑.
- **Voluntary seeking 초기에 이미 ↑** — seeking 시작 약 6초 전부터 활성 onset (3rd derivative analysis로 정밀 측정).
- Multi-phase test: pre-conditioning에서는 non-goal-directed locomotion에 비활성. Post-conditioning에서 goal-directed seeking과 consummatory 모두 활성.
- → LH LepR이 **seeking의 driver이지 consequence가 아님** (시간 인과성).

### 3. Microendoscopy — 2 distinct subpopulations (★)
- 단일세포 calcium imaging (GRIN lens).
- Food-trial vs no-food trial (same seeking 가능, food 부재).
- **25% Seeking LH LepR neurons**: seeking에만 활성, consummatory에 비활성.
- **39% Consummatory LH LepR neurons**: consummatory에만 활성, seeking에 비활성.
- 16% ambiguous, 20% non-responsive.
- → 두 subpopulation이 **sequential·exclusive 활성** (동시 활성 아님). 단일 LH LepR이 두 phase를 cover하는 게 아니라 분리된 cell이 cover.

### 4. Optogenetic — Phase-specific paradigm 중요성
**왜 이전 연구가 모순적이었나** 해명:
| Paradigm | Activation 결과 | 해석 |
|---|---|---|
| Seeking+consummatory **동시 가능** (large chamber) | **효과 없음** | 두 subpop 동시 활성이 unphysiological → 행동 선택 경쟁 |
| **Seeking phase isolated** (hidden food, bedding) | digging·food zone entry·locomotion ↑ | seeking subpop 활성 충분 |
| **Consummatory phase isolated** (small chamber, proximate food) | consumption ↑ + 식이량 ↑ | consummatory subpop 활성 충분 |

- **NpHR 억제**: consummatory phase isolation에서 식이 ↓ (필요성). Seeking phase 효과는 부재.
- → 이전 controversial 결과 (Siemian 2021 no effect; de Vrind 2019 decreased; Leinninger 2009 decreased after leptin; Shin 2023 increased via vlPAG)이 paradigm 차이로 해명됨.

### 5. NPY는 LH LepR의 permissive gate (disinhibition)
- 가설 근거: AgRP/NPY → LH 투사 + NPY receptor LH 발현 + NPY LH 주입 식이 ↑ + Chen 2019 NPY가 sustained hunger 매개.
- Ex vivo: NPY → LH LepR calcium ↑. NPY antagonist (Y1·Y5)로 완전 차단.
- **메커니즘**: LH LepR이 NPYR 직접 발현 거의 안 함. NPYR+ LH GABA interneuron이 LH LepR을 tonic inhibit. NPY → interneuron Gi 활성 → LH LepR disinhibition.
- sIPSC frequency ↓ (NPY 적용 후), amplitude 변화 없음 → presynaptic mechanism.
- Leptin도 LH LepR을 활성 (5/9 cells); 일부 (1/9) 억제 — heterogeneous, 이전 결과와 정합.

→ **Sated 상태** (낮은 AgRP/NPY 활성 → 낮은 NPY) = tonic inhibition으로 LH LepR locked → 식이 cue 무반응.
→ **Fasted 상태** (높은 AgRP/NPY 활성 → 높은 NPY) = disinhibition → LH LepR이 cue에 반응 가능.

## NMPU framework 매핑 (★)

이 paper가 [[kim-2024-normative-framework-dissociates-need|Kim 2024 Sci Adv]] (normative framework) **이전 발견**으로, 후속 framework가 build 된 회로 기반:

- **Motivation 회로 분자·세포 정의**: LH LepR = Motivation encoder (Kim 2024 Sci Adv가 광계측·model fitting으로 더 발전).
- **Seeking vs Consummatory subpopulation** 분리 = NMPU의 appetitive vs consummatory phase 회로 substrate.
- **NPY permissive gate** = NMPU의 **Need → Motivation 전환** 분자 메커니즘. AgRP (Need encoder) → NPY → LH LepR (Motivation enabler).

## 사용자 lab 후속 연구 연결
- [[kim-2024-normative-framework-dissociates-need|Kim 2024 Sci Adv]] = LH LepR이 Motivation encoder 정량 입증 (이 paper 직접 후속).
- [[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025 EMM]] = LH 전체 cell type review에서 LepR subset 정리.
- [[park-2025-glucagon-like-peptide-1-and-hypothalamic|Park 2025 DMJ]] · [[kim-2024-glp-1-increases-preingestive-satiation|Kim 2024 Science]] = DMH GLP-1R → ARC AgRP → (NPY) → LH LepR 회로 연결.
- [[lee-2025-hijacked-brain-modern-obesity-cue|Lee 2025 JOMES]] = 5 maladaptive eating type 임상 응용.

## 외부 정합
- [[korotkova-2026-balancing-acts-lateral-hypothalamic|Korotkova 2026]] — LepR LH가 hunger × anxiety × social 3-drive arbitration; **본 paper의 seeking·consummatory subpopulation framework와 정합**. Petzold 2023 Cell Metab (Korotkova lab) cites 사용자 lab의 본 paper.
- Faour 2025 — AgRP→LH 식이·iBAT.
- Chen 2019 eLife — NPY sustained hunger 매개 (본 paper의 NPY gate 가설 근거).

## 임상 함의
- **Phase-specific 약물 표적**: GLP-1RA = preingestive·Need 단계 (DMH), 다른 약물 = Motivation 단계 (LH LepR) — 사용자 lab의 5 type personalized DTx 분자 path.
- **NPY antagonist** = hunger 차단 표적 (sated lock 유지).
- **AN treatment**: LepR LH 활성이 anxiety 감소·excessive exercise 차단 ([[korotkova-2026-balancing-acts-lateral-hypothalamic|Korotkova 2026]] Figge-Schlensok 2025).

## 관련 페이지
- [[onimus-2026-dopamine-ensembles-regulating-appetite]] — NAc^Sh D1R^Serpinb2→LH LepR이 leptin anorexia를 override; 본 LH^LepR 회로의 mesolimbic 상류 입력 (TEM 2026).
- [[concept-lateral-hypothalamus]] — 본문 통합.
- [[concept-leptin]] — LepR.
- [[concept-need-motivation-pleasure-utility]] — Motivation 회로 기반.
- [[concept-npy-agrp-neurons]] — NPY upstream.
- [[concept-appetitive-consummatory-phases]] — seeking·consummatory phase 정의.
- [[lee-2019-food-craving-seeking-and]] — 본 논문이 광유전적으로 분리한 seeking·consummatory phase의 framework 원전 (동일 제1저자 Lee YH).
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — LH 전체 review.
- [[kim-2024-normative-framework-dissociates-need]] — 후속 framework.
- [[kim-2024-glp-1-increases-preingestive-satiation]] — DMH GLP-1R 회로.
- [[korotkova-2026-balancing-acts-lateral-hypothalamic]] — LH arbitration framework (cited).
- [[lee-2025-hijacked-brain-modern-obesity-cue]] — 임상.
- [[faour-2025-emerging-role-of-agrp]] — AgRP→LH.
- [[johansen-2025-brain-control-of-energy]] — 본 LH^LepR 논문을 인용 (ref229); 회로 종합 (Cell 2025).
- [[stuber-2025-the-neurobiology-of-overeating]] — NAc D1R-MSN→LHA GABA gate가 본 LH^LepR seeking/consummatory의 mesolimbic 상류 입력 후보 (Neuron 2025).
- [[person-choi-hyung-jin]] — 교신저자.
- [[jia-2026-novelty-exploration-activated-ensemble-in]] — LH cell-type/projection 분업을 통증·정서 축에서 보여주는 또 다른 사례 (Nat Commun 2026).
- [[liu-2026-granular-motivational-interaction-and]] — 본 LH^LepR 논문을 인용(ref159); LH^GABA를 feeding initiation phase hub로 배치 (Neuron 2026).
- [[namkoong-2017-central-administration-of-glp-1]] — 1저자 Young Hee Lee 공저; 동일 lab 초기 GLP-1/GIP 중추 paper (BBRC 2017).
- [[thanarajah-2019-food-intake-recruits-orosensory]] — 인체 PET; 즉시(감각) 단계 시상하부(LH 추정) DA — 본 LH^LepR seeking 회로와 시간적 호응 (Cell Metab 2019).
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
