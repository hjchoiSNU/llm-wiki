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
| **후시냅스 NMDAR·spinogenesis** | 가시 | 단식 | **NMDAR**, 가시 수 증가 | Liu 2012 Neuron (Lowell lab) |
| **후시냅스 AMPK–PAK** | 가시 | 단식 | AMPK→p21-activated kinase | Kong 2016 Neuron (Lowell lab) |
| **입력 특이적 활성 의존 증폭** | PVH^TRH 말단 | **상류 뉴런 활성**(호르몬 비의존) | **NMDAR** 의존, 방출 부위 수↑ | [[grzelka-2023-a-synaptic-amplifier-of-hunger\|Grzelka 2023]] |

> ⚠️ Liu 2012·Kong 2016은 위 두 1차 논문이 **인용한 문헌**이며 본 위키에 원본 페이지가 아직 없다. 수치·세부 주장을 인용하려면 원본 확보가 필요하다.

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

## 열려 있는 질문
- 두 축(ghrelin–AMPK / 활성–NMDAR)이 **같은 시냅스에서 어떻게 상호작용**하는가. Grzelka는 하류 분자로 CaMKII·AMPK를 추정만 했다.
- 빈도 증가가 **가시 수 증가인지 방출 부위 증가인지** 미해결(Grzelka 저자 명시).
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
