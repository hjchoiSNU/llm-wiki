---
title: Hypothalamic AMPK
type: concept
created: 2026-05-25
updated: 2026-09-11
aliases: [hypothalamic AMP-activated protein kinase, AMPK]
---

> [!takeaway] 연구 방향 관점의 핵심
> AMPK = **시상하부 호르몬·영양 신호의 master cellular integrator**. López lab의 핵심 framework — fatty acid metabolism·ceramide·BAT·간·thyroid·estrogen·anti-psychotic 모두 매개. **sEV (small extracellular vesicle) 기반 AMPK 표적 약물**이 anti-obesity 차세대 path (Milbank 2021 Nat Metab). 사용자 lab의 약물 path 후보.

# Hypothalamic AMPK

## 개요
- AMP-activated protein kinase (αβγ heterotrimer).
- Cellular AMP/ATP 비율 감지 → metabolic master switch.
- López lab (2016 Nat Rev Endocrinol)의 framework: **시상하부 AMPK = whole-body energy balance canonical regulator**.

## 시상하부 작용
- **식이**: Andersson 2004, Minokoshi 2004 Nature — AMPK가 leptin·ghrelin downstream.
- **Fatty acid sensing**: malonyl-CoA·CPT1·ceramide 매개 (Lam·Rossetti, Casals·Lopaschuk·Hegardt).
- **BAT thermogenesis**: 시상하부 VMH AMPK ↓ → BAT ↑ (López lab series).
- **Thyroid hormone**: AMPK-ER stress-JNK1 매개 (Martínez-Sánchez 2017 Cell Metab).
- **Estradiol**: AMPK 매개 BAT thermogenesis (Martínez de Morentin 2014).
- **Ghrelin**: AMPK가 fatty acid metabolism 통해 orexigenic 매개 (Lopez 2008 Cell Metab).
- **BMP8B**: orexin neuron AMPK → BAT (Martins 2016).
- **Kisspeptin**: AMPK가 puberty onset 매개 (Roa 2018).
- **CRH PVH**: AMPK 활성 → carbohydrate preference (Okamoto 2018).

## 상류 키나아제 — CaMKK2 (CaMKKβ), 그리고 CaMKII와의 혼동 주의
- **CaMKK2(CaMKKβ)가 AMPK의 직접 상류 활성 키나아제**다(Hawley 2005 *Cell Metab*). 즉 Ca²⁺/칼모듈린 신호가 AMP/ATP 비와 **별개의 경로로** AMPK를 켤 수 있다 — 시냅스에서 AMPK가 작동하는 근거의 핵심.
- **AgRP 시냅스에서의 직접 증거**: [[yang-2011-hunger-states-switch-a-flip-flop|Yang 2011]]이 CaMKK 억제제 **STO-609**로 ghrelin 유발 f<sub>mEPSC</sub> 증가를 차단했고, STO-609 처리 후에도 AICAR(AMPK 활성제)는 여전히 작동해 **CaMKK가 AMPK의 상류**임을 확정했다. (고농도 STO-609는 AMPK를 직접 억제하는 off-target이 있으므로 용량-반응 필수.)
- **대사 표현형**: 시상하부 CaMKK2가 에너지 균형 조절에 기여(Anderson 2008 *Cell Metab*) — ghrelin 매개 섭식에 중요.
- ⚠️ **CaMKII ≠ CaMKK2**. [[grzelka-2023-a-synaptic-amplifier-of-hunger|Grzelka 2023]] 논의는 후시냅스 후보로 **CaMKII**를 지목하면서 근거로 위 두 편(Hawley 2005·Anderson 2008)을 인용하는데, 둘 다 **CaMKK2** 논문이다. 섭식 회로에서 약리·유전 증거를 가진 쪽은 CaMKK2이고, CaMKII는 해마 LTP로부터의 유비다. → 상세 대조는 [[concept-agrp-synaptic-plasticity]]의 "분자 실행자" 절.

## 약물·임상
- **sEV (small extracellular vesicles) 기반 AMPK 표적** ★:
  - sEV-AMPKα1 → BAT activation → 비만 치료 (Milbank 2021 Nat Metab).
  - sEV-AMPKα1 → leptin receptor 결손 마우스에서도 효과 (Milbank 2023).
  - sEV-AMPKα2 → cerebral ischemia 보호 (Ouro 2025).
  - López = **Gazella Biotech·Lyrea Biotech scientific director**.
- Antipsychotic (olanzapine) 부작용: AMPK 매개 hyperphagia·체중 ↑.
- 적응증 확장: hyperthyroidism, rheumatoid arthritis, cancer cachexia.

## 사용자 lab 함의
- **sEV-AMPK 약물 path** = 사용자 lab의 LH gene therapy / DTx와 다른 도구 (분자 표적).
- 사용자 lab의 **DMH GLP-1R cognitive satiation** ([[park-2025-glucagon-like-peptide-1-and-hypothalamic|Park 2025]])의 downstream 회로 — GLP-1 receptor agonist가 AMPK 매개.
- Estrogen·thyroid·BAT 회로 통합 — 임상 비만 환자의 호르몬 status 평가에 활용.

## 관련 페이지
- [[concept-arcuate-nucleus]] · [[concept-ventromedial-hypothalamus]] — 핵심 거점.
- [[concept-pomc-neurons]] · [[concept-npy-agrp-neurons]] — AMPK 활성 cell types.
- [[concept-ghrelin]] · [[concept-leptin]] · [[concept-glp-1]] — upstream hormones.
- [[lopez-2026-hypothalamic-regulation-of-energy]] — López editorial 자세히.
- [[barros-2026-from-diet-to-hypothalamic-dysfunction]] — semaglutide POMC GPR43-AMPK 회로.
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
- [[person-lopez-miguel]] — 저자.
- [[yang-2011-hunger-states-switch-a-flip-flop]] — ★ **AMPK 작용점에 "시냅스 전말단"을 추가**한 논문. 기존 framework(지방산 대사·유전자 발현·BAT)와 다른 층에서, ARC^AgRP로 들어오는 흥분성 말단의 **AMPK가 글루타메이트 방출을 직접 조절**한다. 경로는 **ghrelin→Ghsr1→CAMKK→AMPK→cADP ribose→RyR→Ca²⁺**이며 이 고리가 **양성 되먹임**을 이뤄 배고픔 상태를 수 시간 유지한다. 결정적 대조: AgRP 뉴런 **내부**로 AMPK 활성제·억제제를 투석해도 무효 = **후시냅스가 아니라 전시냅스** (Cell 2011, Sternson lab).
- [[concept-agrp-synaptic-plasticity]] — 전시냅스 AMPK 축이 속한 개념 hub.
- [[concept-circuit-bistability-hysteresis]] — AMPK 되먹임이 만드는 양안정·이력 구조.
- [[grzelka-2023-a-synaptic-amplifier-of-hunger]] — PVH^TRH→AgRP 활성 의존 증폭의 하류 분자로 **CaMKII·AMPK**를 추정(저자 논의; 미검증). ⚠️ 단 저자가 CaMKII 근거로 든 인용 2건은 실제로는 **CaMKK2(CaMKKβ)** 논문(Hawley 2005·Anderson 2008)이다 — 두 효소 구별은 [[concept-agrp-synaptic-plasticity]]의 "분자 실행자" 절 참조 (Cell Metab 2023).
