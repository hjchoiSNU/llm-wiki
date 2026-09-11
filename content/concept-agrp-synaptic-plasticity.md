---
title: AgRP 시냅스 가소성 (AgRP synaptic plasticity)
type: concept
created: 2026-09-11
updated: 2026-09-11
aliases: [AgRP synaptic plasticity, AgRP 시냅스 가소성, fasting-induced synaptic plasticity, hunger synapse, 배고픔 시냅스]
---

> [!takeaway] 연구 방향 관점의 핵심
> **AgRP 뉴런의 "배고픔 신호 크기"는 고정된 배선의 출력이 아니라, 시냅스 강도라는 조절 가능한 변수다.** 단식·체중 감소는 AgRP로 들어오는 흥분성 시냅스를 강화하고, 그 강화는 **자극이 사라진 뒤에도 수 시간–수 주 남으며**, 강화를 막으면 **섭식과 체중 재증가가 무너진다**.
> 사용자 lab에 이 개념이 필요한 이유는 명확하다 — [[kim-2024-normative-framework-dissociates-need|AgRP=Need]] 이론은 *어떤 변수를 부호화하는가*를 답했지만, **그 신호의 gain이 왜 상태에 따라 달라지고 왜 느리게 꺼지는가**는 답하지 못한다. 이 페이지의 내용이 그 자리를 채운다. 임상 출구는 **[[concept-weight-regain-defended-adiposity|다이어트·약물 중단 후 체중 재증가]]** 이며, 유일하게 약리적으로 손이 닿아 있는 마디는 **NMDAR**과 **μ-오피오이드(naltrexone)** 다.

# AgRP 시냅스 가소성

## 한 줄 요약
에너지 결핍이 ARC^AgRP 뉴런의 **흥분성 시냅스 입력을 지속적으로 강화**하는 현상, 그리고 그 유도·유지·소거 규칙.

## 왜 별도 개념인가
AgRP 회로 연구의 대부분은 **누가 누구에게 투사하는가**(배선)와 **무엇에 반응하는가**(부호화)를 다룬다. 그러나 같은 배선·같은 입력이라도 **시냅스 강도가 달라지면 같은 자극이 다른 크기의 배고픔을 만든다**. 실제로 AgRP 뉴런의 단식 유발 발화 상승은 **글루타메이트성 입력을 차단하면 사라진다**([[yang-2011-hunger-states-switch-a-flip-flop|Yang 2011]]) — 즉 상태 의존 활성의 상당 부분이 **세포 내재 흥분성이 아니라 시냅스**에 있다.

## 4개의 축 (서로 배타적이지 않음)

| 축 | 위치 | 유도 신호 | 분자 | 1차 출처 |
|---|---|---|---|---|
| **전시냅스 AMPK 되먹임** | 말단 | **ghrelin**(호르몬) | Ghsr1→CAMKK→**AMPK**→cADPR→RyR→Ca²⁺ | [[yang-2011-hunger-states-switch-a-flip-flop\|Yang 2011]] |
| **후시냅스 NMDAR·spinogenesis** | 가시 | 단식 | **NMDAR**, 가시 수 **+67%** | [[liu-2012-fasting-activation-of-agrp-neurons\|Liu 2012]] |
| **후시냅스 AMPK–PAK** | 가시 | 단식 | AMPK→p21-activated kinase | Kong 2016 Neuron (Lowell lab) |
| **입력 특이적 활성 의존 증폭** | PVH^TRH 말단 | **상류 뉴런 활성**(호르몬 비의존) | **NMDAR** 의존, 방출 부위 수↑ | [[grzelka-2023-a-synaptic-amplifier-of-hunger\|Grzelka 2023]] |

> ⚠️ Kong 2016은 위 논문들이 **인용한 문헌**이며 본 위키에 원본 페이지가 아직 없다. 수치·세부 주장을 인용하려면 원본 확보가 필요하다. (Liu 2012는 2026-09-11 원본 확보 완료.)
> **서지**: Kong D, Dagon Y, Campbell JN, Guo Y, Yang Z, Yi X, Aryal P, Wellenstein K, Kahn BB, Sabatini BL, Lowell BB (2016). *A postsynaptic AMPK→p21-activated kinase pathway drives fasting-induced synaptic plasticity in AgRP neurons.* **Neuron 91, 25–33.** doi:10.1016/j.neuron.2016.05.025 — 제목이 **"postsynaptic AMPK"** 를 명시하므로, [[yang-2011-hunger-states-switch-a-flip-flop|Yang 2011]]의 "후시냅스 AMPK 조작 무효" 결과와 직접 부딪힌다. 아래 "분자 실행자" 절의 논증 3을 판정하려면 이 원본이 필요하다.

## ★★ 미해결 쟁점 — 전시냅스인가 후시냅스인가

세 논문이 **같은 관찰**을 보고한다: 단식이 AgRP의 AMPAR-매개 EPSC **빈도를 약 2배** 올리고 **진폭은 바꾸지 않는다**. 해석이 갈린다.

| | [[yang-2011-hunger-states-switch-a-flip-flop\|Yang 2011]] (Sternson) | [[liu-2012-fasting-activation-of-agrp-neurons\|Liu 2012]] (Lowell) |
|---|---|---|
| **결론** | 전시냅스 **방출 증가** | 후시냅스 **시냅스 수 증가** |
| 기전 | ghrelin→Ghsr1→AMPK 되먹임 | 단식→NMDAR→가시형성 |
| PPR | 0.5 mM Ca²⁺에서 ghrelin이 **감소**시킴 (2 mM에선 불변) | 단식으로 **불변** (fed 0.67 vs fasted 0.66) |
| 결정 실험 | AgRP 세포 **내부** AMPK 조작은 무효 → 전시냅스 | 후시냅스 **NMDAR 삭제**로 빈도 증가 소실 → 후시냅스 |
| 구조 근거 | — | 가시 **+67%**, 재급식 시간 경과가 EPSC와 일치 |

Liu는 전시냅스 설명을 **명시적으로 기각**한다(PPR 불변 · 후시냅스 NMDAR 필요 · 가시형성 동반의 세 근거). 다만 배제할 수는 없으며 **두 기전이 동시에 작동할 수 있다**고 덧붙인다.

**위키의 판단**: 배타적이지 않을 가능성이 높다.
- **시간척도가 다르다** — Yang의 ghrelin 효과는 **분 단위 약리**(절편 5분 노출), Liu의 가시형성은 **24시간 구조 변화**.
- **측정 조건이 다르다** — Yang이 PPR 감소를 본 것은 방출확률 천장을 낮춘 **0.5 mM Ca²⁺**에서였고, 생리적 2 mM에서는 Yang도 PPR 불변을 보고했다. Liu의 측정은 표준 조건이다. **같은 지표의 다른 조건**이므로 직접 충돌이 아니다.
- **Grzelka가 같은 자리에 선다** — [[grzelka-2023-a-synaptic-amplifier-of-hunger|Grzelka 2023]]은 PPR·CV·AMPA/NMDA 비가 모두 불변인 채 양자 빈도만 오르는 것을 **"기능적 방출 부위 수 증가"** 로 읽으면서, **그것이 가시 수 증가인지 방출 부위 증가인지 구분할 수 없다**고 한계를 명시한다.
- **아직 아무도 하지 않은 실험**: 같은 동물에서 가시 수와 PPR·양자 빈도를 **동시에** 측정하고, 전시냅스 AMPK와 후시냅스 NMDAR을 **교차로** 차단하는 설계.

> **인용 규칙**: "단식이 AgRP 흥분성 입력을 늘린다"까지는 3편 합의. **그 변화의 자리가 전인지 후인지는 미해결**로 쓸 것. 한쪽만 인용해 단정하지 않는다.

## 핵심 원리 5가지

### 1. 세포타입 특이적이고 방향이 반대다
단식은 **AgRP 흥분성 입력을 올리고**(mEPSC 빈도 1.4→3.0 s⁻¹) **[[concept-pomc-neurons|POMC]] 입력은 내린다**(3.3→1.8 s⁻¹). 같은 핵, 같은 단식, 정반대 부호 ([[yang-2011-hunger-states-switch-a-flip-flop|Yang 2011]]).

### 2. 입력마다 기전이 다르다 (균일한 가소성이 아니다)
[[grzelka-2023-a-synaptic-amplifier-of-hunger|Grzelka 2023]]이 같은 AgRP 뉴런에서 두 입력을 나란히 측정:
- **PVH^TRH → AgRP**: 양자 **빈도**↑(진폭·PPR·CV·AMPA/NMDA비 불변) = **전시냅스 방출 부위 수 증가**.
- **DMH^Vglut2 → AgRP**: 양자 **진폭**↑ = **후시냅스 전도도 증가**.

→ "단식이 AgRP 흥분성 입력을 올린다"를 **하나의 현상으로 뭉뚱그리면 안 된다**.

### 3. 유발 신호보다 오래 간다 (hysteresis)
- ghrelin **5분** 노출 후 수용체를 완전히 차단해도 **3–5시간 지속**; AMPK·CAMKK 억제로 **즉시 붕괴** → 흔적이 아니라 **능동 유지되는 되먹임 고리** ([[yang-2011-hunger-states-switch-a-flip-flop|Yang 2011]]). → [[concept-circuit-bistability-hysteresis]]
- 생체 내: 재급식 **24시간 후에도 상승**, 48시간에 복귀.
- **체중 축에서는 훨씬 길다**: 저체중이 유지되는 한(CMP 1주·CR 1주) 증폭이 **계속 유지**되고, **체중이 회복되면 비로소 기저 복귀**([[grzelka-2023-a-synaptic-amplifier-of-hunger|Grzelka 2023]]).

### 4. 짧은 활동 한 번으로 유도된다 — 그리고 NMDAR이 관문
- **10분** 50 Hz 광자극 1회 또는 **CNO 1회**로 증폭 성립 → **24시간 과식**, **수주 지속 체중 증가**.
- **D-AP5·MK-801로 전부 차단**. 시간 분해가 중요하다: **급성(1–4시간) 섭식은 NMDAR 없이도 일어나고, 8–24시간 이후의 과식과 체중 증가만 NMDAR 의존**([[grzelka-2023-a-synaptic-amplifier-of-hunger|Grzelka 2023]]).
- 비교: [[concept-one-shot-learning|단일시행 학습]]의 "짧은 경험 ≠ 고전 LTP" 문제와 같은 질문 구조이나, 여기서는 **고전적 NMDA 의존 규칙이 작동**한다.

### 5. 끄는 신호가 따로 있다 (자동 소멸이 아니다)
[[concept-leptin|Leptin]]은 AgRP 시냅스에 **직접 작용하지 않는다**(절편 직접 투여 무효). 대신 **[[concept-pomc-neurons|POMC]] 뉴런의 오피오이드(β-endorphin 추정)** 가 전시냅스 AMPK를 불활성화한다 — POMC 광자극이 AgRP mEPSC를 낮추고 **naltrexone이 이를 차단**. 멜라노코르틴(MTII)은 무효 ([[yang-2011-hunger-states-switch-a-flip-flop|Yang 2011]]).

> 임상적 함의: **naltrexone(bupropion–naltrexone)** 은 이 reset을 *방해*하는 방향으로 작용할 수 있다 — 아직 검증되지 않은 예측이지만, 위키 내 자료로 가설을 명시할 수는 있다.

## ★ 분자 실행자는 누구인가 — CaMKII 후보 논리와 그 균열

후시냅스 축의 분자 기전은 **미규명**이다([[grzelka-2023-a-synaptic-amplifier-of-hunger|Grzelka 2023]] 저자 명시). 저자들이 CaMKII를 후보로 든 논증은 **네 갈래**이고, 뒤 두 갈래에 인용 문제가 있다.

### 논증 1 — 상류가 NMDAR이면 하류는 Ca²⁺ 의존 키나아제여야 한다 (구조적 제약)
[[liu-2012-fasting-activation-of-agrp-neurons|Liu 2012]]에서 단식 반응 전체가 후시냅스 `Grin1` 삭제로 소실되고, Grzelka에서 회로 활성 유발 증폭이 D-AP5·MK-801로 차단된다. NMDAR의 정의적 기능은 **Ca²⁺ 유입**이므로, 후보는 자동으로 **후시냅스 구획의 Ca²⁺ 활성 키나아제**로 좁혀진다. 이 단계는 CaMKII 특이적 증거가 아니라 **후보군을 좁히는 제약**이다.

### 논증 2 — 설명해야 할 표현형이 "유지"이고, LTP 분야에서 유지를 맡는 효소가 CaMKII다
Grzelka가 설명해야 하는 것은 유도가 아니라 **수일–수주 지속**이다(저체중이 유지되는 한 증폭 유지, CNO 1회로 7일 체중 증가). 저자들이 인용한 4편은 그 자체로 논증을 담고 있다:

| 인용 | 주장 |
|---|---|
| Tao 2021 *eLife* | **"Synaptic memory requires CaMKII"** |
| Incontro 2018 *Nat Commun* | CaMKII/NMDAR 복합체가 해마 전달을 통제(키나아제 의존·비의존 두 기전) |
| Herring & Nicoll 2016 *Annu Rev Physiol* | LTP: CaMKII에서 AMPA 수용체 트래피킹까지 |
| Lledo 1995 *PNAS* | CaMKII와 LTP가 **같은 기전으로** 시냅스 전달을 강화 |

즉 "유지 국면 = CaMKII"는 해마 LTP 분야의 표준 귀속이고, Grzelka는 **그 귀속을 시상하부로 유비 이식**한다. 논증의 힘은 유비의 강도에 달려 있다.

> ⚠️ CaMKII가 유지를 담당하는 **분자 스위치 기전**(자가인산화→Ca²⁺ 비의존 자율 활성 등)의 구체적 내용은 본 위키의 `raw/` 원본에 없다. 위 4편은 Grzelka의 인용 목록에서 서지만 확인된 상태이며 원문 미확보.

### 논증 3 — CaMKII가 AMPK를 활성화하므로 기존 AMPK 노드와 연결된다 ⚠️ **인용 불일치**
Grzelka 본문: "CaMKII increases the activity of the AMP-activated protein kinase(ref 69)". 그런데 **ref 69는 Hawley 2005 *Cell Metab*, "Calmodulin-dependent protein kinase kinase-**beta** is an alternative upstream kinase for AMP-activated protein kinase"** — 즉 **CaMKKβ(CaMKK2)** 논문이지 CaMKII 논문이 아니다. 두 효소는 다르다.

### 논증 4 — 유전·약리 조작이 AgRP 발현·섭식·체중을 바꾼다 ⚠️ **인용 불일치**
Grzelka 본문: "genetic deletion of CaMKII downregulates AgRP gene expression and reduces feeding after fasting, and pharmacological inhibition of CaMKII promotes weight loss(ref 70)". **ref 70은 Anderson 2008 *Cell Metab*, "Hypothalamic **CaMKK2** contributes to the regulation of energy balance"** — 역시 CaMKK2다.

### ★ 결론 — 두 효소를 분리해서 읽어야 한다

| | **CaMKII** | **CaMKK2 (CaMKKβ)** |
|---|---|---|
| 역할 | LTP **유지** 국면 | **AMPK의 상류** 키나아제 |
| 섭식 회로 직접 증거 | **위키 자료 없음** | 있음 |
| 약리 | (본 위키 원본에 억제제 자료 없음) | **STO-609** |
| AgRP 시냅스에서 검증된 것 | — | [[yang-2011-hunger-states-switch-a-flip-flop\|Yang 2011]]: STO-609가 ghrelin 유발 f<sub>mEPSC</sub> 증가를 차단. AICAR는 STO-609 후에도 작동 → **CAMKK가 AMPK의 상류** 확정 |
| 대사 표현형 | — | Anderson 2008: 시상하부 CaMKK2가 에너지 균형 조절 |

**따라서 현재 상태**: 섭식 회로에서 실제 직접 증거(약리 차단 + 유전 조작 + 대사 표현형)를 가진 효소는 **CaMKK2**이고, 그 자리는 [[yang-2011-hunger-states-switch-a-flip-flop|Yang 2011]]에서 **전시냅스**로 배정됐다. **CaMKII는 후시냅스 후보이되, AgRP 시냅스에서의 직접 증거는 본 위키 자료 범위에 없다** — 해마 LTP로부터의 유비다.

> 논증 3이 성립하려면 **후시냅스 AMPK가 실제로 작동해야** 하는데, 바로 그 지점이 논쟁 중이다. [[yang-2011-hunger-states-switch-a-flip-flop|Yang 2011]]은 AgRP 뉴런 **내부로** AMPK 활성제·억제제를 투석해도 f<sub>mEPSC</sub>가 변하지 않는다고 보고했다(후시냅스 AMPK 무효). 반면 Grzelka가 ref 21로 인용한 **Kong 2016 *Neuron*의 제목 자체가 "A postsynaptic AMPK→p21-activated kinase pathway drives fasting-induced synaptic plasticity in AgRP neurons"** 다. 즉 **AMPK의 구획조차 미해결**이며, CaMKII→AMPK 논증은 그 미해결 위에 얹혀 있다. (Kong 2016 원본 미확보 — 위 "4개의 축" 표의 경고 참조.)

### 구별 실험 설계 (위키가 제안하는 것)
1. **구획 검증**: Yang 2011이 AMPK에 쓴 방법을 그대로 이식 — 기록 중인 AgRP 뉴런 **내부로** CaMKII 억제제를 투석. 후시냅스·CaMKII 의존이라면 증폭이 차단돼야 하고, Yang의 AMPK 음성 대조와 직접 비교된다.
2. **Occlusion/epistasis**: Yang 2011의 논리(STO-609 후에도 AICAR가 작동 → CAMKK가 AMPK 상류)를 CaMKII에 적용. CaMKII 억제 후 AMPK 활성제가 증폭을 구제하면 CaMKII는 AMPK 상류, 구제하지 못하면 별도 경로.
3. **효소 분리**: STO-609(CaMKK)와 CaMKII 선택적 억제를 **같은 실험에서 나란히** 적용. 현재 문헌이 두 효소를 섞어 쓰고 있으므로 이 대조가 없으면 결론이 갈리지 않는다.
4. **도구는 이미 있다**: Grzelka 저자들이 명시하듯, `Trh-p2a-Dre` × `Agrp-ires-Cre` **교차 recombinase** 접근이 "이 분자 기전을 경로 특이적으로 심문할 선택적 수단"을 제공한다. 상류 PVH^TRH 활성화와 하류 AgRP 분자 조작을 한 동물에서 결합할 수 있다.

## 열려 있는 질문
- 두 축(ghrelin–AMPK / 활성–NMDAR)이 **같은 시냅스에서 어떻게 상호작용**하는가. Grzelka는 하류 분자로 CaMKII·AMPK를 추정만 했다.
- 빈도 증가가 **가시 수 증가인지 방출 부위 증가인지** 미해결(Grzelka 저자 명시). → 위 "미해결 쟁점" 절.
- **새로 생긴 시냅스를 나중에 누가 제거하는가**. [[liu-2012-fasting-activation-of-agrp-neurons|Liu 2012]]에서 가시는 재급식 3일 내에 기저로 돌아간다. 다른 회로에서 그 일을 하는 것은 미세아교세포지만, 시상하부 섭식 회로에서는 **위키에 자료 없음**. → [[concept-glia-stress-plasticity]]
- **인간에서 측정 가능한가** — 현재로선 불가. 대리 지표(다이어트 후 식욕 항진의 시간 경과, GLP-1RA 중단 후 rebound 속도)로만 접근.
- 억제성 입력([[garfield-2016-dynamic-gabaergic-afferent-modulation|vDMH^LepR]]·[[kim-2024-glp-1-increases-preingestive-satiation|DMH^GLP-1R]])에도 대응하는 가소성이 있는가 — **미탐색 영역**이며 사용자 lab의 GLP-1R 회로 전문성과 정확히 겹친다.

## 관련 페이지
- [[yang-2011-hunger-states-switch-a-flip-flop]] — 전시냅스 AMPK 양성 되먹임·hysteresis·오피오이드 reset (Cell 2011, Sternson lab).
- [[grzelka-2023-a-synaptic-amplifier-of-hunger]] — 입력 특이적 활성 의존 증폭·NMDAR·체중 재증가 인과 (Cell Metab 2023, Fenselau·Lowell).
- [[concept-circuit-bistability-hysteresis]] — 이력·양안정 상태의 일반 논리.
- [[concept-weight-regain-defended-adiposity]] — 이 가소성의 **임상 표현형**.
- [[concept-npy-agrp-neurons]] — 본 가소성의 무대. 입력 회로 지도와 함께 읽을 것.
- [[concept-pomc-neurons]] — 반대 방향 가소성 + reset 오피오이드 공급원.
- [[concept-ghrelin]] · [[concept-leptin]] — set·reset 호르몬.
- [[concept-hypothalamic-ampk]] — AMPK의 **시냅스 전말단** 작용 층.
- [[concept-paraventricular-nucleus]] · [[krashes-2014-an-excitatory-paraventricular-nucleus-to]] · [[walker-2026-a-hypothalamic-circuit-for]] — 증폭이 일어나는 PVH→AgRP 경로의 배선·예측 신호.
- [[concept-dorsomedial-hypothalamus]] — DMH 입력은 후시냅스형 가소성을 보이되 체중 재증가에는 불필요.
- [[concept-drug-evoked-synaptic-plasticity]] — **가장 가까운 이웃 개념**: 병리적 행동을 "잘못 강화된 시냅스"로 보고 **되돌리는** 전략. 중독 회로에서 확립된 depotentiation 논리를 섭식 회로로 옮길 때의 참조 틀.
- [[concept-one-shot-learning]] — 짧은 경험이 긴 흔적을 남기는 가소성 규칙 비교.
- [[concept-need-motivation-pleasure-utility]] · [[kim-2024-normative-framework-dissociates-need]] — Need 신호의 **gain·시간 상수**.
- [[person-sternson-scott]] · [[person-fenselau-henning]] · [[person-lowell-bradford]] — 이 분야를 만든 세 그룹.
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
- [[liu-2012-fasting-activation-of-agrp-neurons]] — 후시냅스 **NMDAR·spinogenesis** 축의 1차 출처. AgRP는 가시가 풍부하고 POMC는 사실상 없다는 구조적 비대칭, 단식 가시 +67%, `Grin1` 삭제 시 단식 반응 전체 소실 (Neuron 2012, Lowell lab).
- [[concept-glia-stress-plasticity]] — 시냅스를 **제거하는** 쪽 기전(미세아교세포 가지치기). 본 페이지의 미결 질문 중 하나.
