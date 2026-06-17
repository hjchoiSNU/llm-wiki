---
title: "A unified theoretical framework underlying the regulation of motivated behavior"
type: paper
created: 2026-04-30
updated: 2026-04-30
source: "raw/2024 BioEssays. A unified theoretical framework underlying the regulation of motivated behavior.pdf"
authors: [Kim YB, Lee YH, Park SJ, Choi HJ]
year: 2024
journal: "BioEssays e2400016"
---

> [!takeaway] 연구 방향 관점의 핵심
> **사용자 본인 lab의 이론적 기둥(theoretical backbone) 논문.** 동기 행동을 4개의 구분된 심리 구성요소로 분리: **Need (예측된 결핍 알람) → Motivation (직접 행동 구동력) → Pleasure (즉각 결과 교사) → Utility (지연 결과 교사)**. 이 framework가 wiki의 다른 모든 회로 페이지(NPY/AgRP, LH, VTA, NAc 등)에 의미 부여하는 lens. 이후 [[kim-2024-unified-theoretical-framework-underlying-regulation|본 BioEssays 논문]]을 출발점으로 [[cheon-2025-lateral-hypothalamus-and-eating-cell|LH (EMM 2025)]], [[park-2025-glucagon-like-peptide-1-and-hypothalamic|GLP-1 hypothalamus (DMJ 2025)]], [[de-lartigue-2026-critical-role-gut-brain-signalling|gut-brain (NRGH 2026)]], [[lee-2025-hijacked-brain-modern-obesity-cue|hijacked brain (JOMES 2025)]]가 모두 본 framework를 적용·확장.

# Kim et al. 2024 — Need-Motivation-Pleasure-Utility framework

## 한 줄 요약
동기 행동의 심리 구성요소를 **Need · Motivation · Pleasure · Utility** 4개로 분리·통합한 이론 framework. 각 component에 후보 신경기질을 매핑.

## 4개 component (Figure 1·2)

| Component | 역할 | 시간척도 | 음식 맥락 신경기질 후보 |
|---|---|---|---|
| **Need** | 예측된 결핍 알람 (predicted deficiency) | 분~시간 | [[concept-npy-agrp-neurons\|ARC AgRP 뉴런]] |
| **Motivation** | 직접 행동 구동력 (need의 누적) | 분 | LH 뉴런, [[concept-arcuate-nucleus\|ARC]] 회로, ZI 도파민, [[concept-dopamine-reward-system\|VTA DA / NAc]] |
| **Pleasure** | 즉각 결과 교사 (immediate outcome) | 초 | NAc, ventral pallidum (VP), insular cortex (IC), 도파민 |
| **Utility** | 지연 결과 교사 (final delayed outcome) | 시간~일 | NTS (post-ingestive sensing), VMH (glucose), LH^HON (amino acid), BLA 도파민 |

## 핵심 통찰

### Need vs Motivation의 분리 (Box 2)
- 둘은 자주 혼용되나 **분리 가능**.
- 전쟁터 군인은 에너지 결핍(need)이 있어도 식욕(motivation) 없음.
- 식후 만복 상태에서 맛있는 케이크가 motivation 유발 (need 없음).
- → 별도 신경 회로로 인코딩되어야 함.
- 이후 [[kim-2024-normative-framework-dissociates-need|Kim KS et al. 2024 Sci Adv]]에서 ARC AgRP 뉴런이 **need (예측된 결핍)** 를 인코딩하고, motivation은 별도 회로 ([[concept-lateral-hypothalamus|LH]] 등)임을 실험적 입증.

### Pleasure vs Utility의 분리 (Box 4)
- 보상의 두 측면: 즉각 (단맛) vs 지연 (혈당 상승).
- Pleasure는 한 번의 행동 단위 결과; Utility는 며칠에 걸친 영양 결과.
- **Utility가 Pleasure 디코딩 알고리즘을 reshape** — 학습으로 처음엔 쓴 커피가 나중엔 즐거워짐. 식중독 후 굴이 혐오로 바뀜.

### 양방향 상호작용 (Figure 3)
- Forward: Need → Motivation → Pleasure → Utility → 다음 Need (reshape).
- Reverse: 현재 Pleasure가 부족하면 → 현재 Motivation 즉시 하강 → 행동 중단.
- Reward Prediction Error (RPE)는 Pleasureₙ → Motivationₙ₊₁ 매개.

### 고전 행동주의 실험 재해석
- **Pavlovian conditioning**: Utility가 Need를 reshape (cue가 결핍 예측 신호로 바뀜).
- **Operant conditioning**: Pleasure/Utility가 Motivation을 reshape.
- **Conditioned taste aversion**: Utility (해로움)가 Pleasure (단맛)를 reshape.

## 회로 매핑 (음식 맥락)

```
                 NEED (predicted deficiency alarm)
                  └─ ARC AgRP neurons ✦
                          ↓
                 MOTIVATION (behavior driver)
                  ├─ LH neurons (Lepr, Vgat, Vglut2 ...) ✦
                  ├─ ZI dopamine
                  └─ VTA DA → NAc
                          ↓
                  ── Behavior (eating) ──
                          ↓
        ┌───────────────────────────────────┐
        ▼                                   ▼
   PLEASURE                              UTILITY
   (immediate)                           (delayed)
   - NAc, VP, IC                          - NTS (sugar/fat sensing)
   - dopamine                             - VMH (glucose)
                                          - LH^HON (NEAA)
                                          - BLA dopamine
                                          - 후식기 호르몬 (CCK·GLP-1·PYY) ⇄ vagus
```

## 함의

- 회로 연구의 **공통 언어** — 어떤 ARC/LH/VTA 회로 데이터든 4 component 중 어느 것을 인코딩하는지 물을 수 있음.
- 비만 약물의 정밀 표적화 ([[lee-2025-hijacked-brain-modern-obesity-cue|Lee 2025 JOMES]]):
  - GLP-1RA → motivation 감소 (DMH GLP-1R 매개 cognitive satiation, [[park-2025-glucagon-like-peptide-1-and-hypothalamic]])
  - MC4R agonist (setmelanotide) → utility 회로
  - Bupropion-naltrexone → pleasure (NAc opioid)
- Eating 외 갈증·체온·사회 행동에도 일반화.

## 관련 페이지
- [[concept-need-motivation-pleasure-utility]] — 본 framework의 개념 hub.
- [[person-choi-hyung-jin]] — 본 lab.
- [[concept-npy-agrp-neurons]] — Need 인코딩.
- [[concept-lateral-hypothalamus]] — Motivation 통합.
- [[concept-dopamine-reward-system]] — Pleasure / Motivation.
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — LH 세부.
- [[park-2025-glucagon-like-peptide-1-and-hypothalamic]] — GLP-1 cognitive satiation.
- [[de-lartigue-2026-critical-role-gut-brain-signalling]] — gut-brain의 utility 신호.
- [[lee-2025-hijacked-brain-modern-obesity-cue]] — framework 임상 응용.
- [[liu-2026-granular-motivational-interaction-and]] — 자매 framework: NMPU(동기 구성요소)와 직교 보완하는 동기의 시간적 sub-state(seeking→satiation) 분해 (Neuron 2026).
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
