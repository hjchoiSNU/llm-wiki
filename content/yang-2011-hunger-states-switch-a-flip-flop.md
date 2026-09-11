---
title: "배고픔 상태가 시냅스 AMPK 양성 되먹임으로 flip-flop 기억회로를 전환한다 (Yang 2011)"
type: paper
created: 2026-09-11
updated: 2026-09-11
source: "raw/2011 Cell. Hunger States Switch a Flip-Flop Memory Circuit via a Synaptic AMPK-Dependent Positive Feedback Loop.pdf"
authors: [Yunlei Yang, Deniz Atasoy, Helen H. Su, Scott M. Sternson]
year: 2011
---

> [!takeaway] 연구 방향 관점의 핵심
> **배고픔은 호르몬이 있는 동안만 켜져 있는 상태가 아니라, 시냅스가 "기억"하는 상태다.** ARC^AgRP로 들어오는 흥분성 시냅스는 ghrelin 5분 노출만으로 **수 시간 지속되는 고활성 상태로 넘어가고**(hysteresis), leptin이 [[concept-pomc-neurons|POMC]]의 **오피오이드(β-endorphin 추정)** 를 통해서만 그 상태를 끈다. 저자들은 이를 전자회로의 **SR flip-flop(set=ghrelin / reset=leptin)** 으로 모델링하고, 이 회로가 **set point가 아니라 set range**를 구현한다고 주장한다.
> 사용자 lab에 세 갈래로 직결된다 — ① [[kim-2024-normative-framework-dissociates-need|AgRP=Need]]의 **시간 상수 문제**: Need가 왜 자극이 사라진 뒤에도 유지되는지에 대한 시냅스 기질(호르몬 신호보다 훨씬 느리게 꺼진다). ② **[[concept-weight-regain-defended-adiposity|체중 재증가]]·GLP-1RA 중단 rebound**: "무엇이 회로를 원래대로 reset하는가"라는 질문이 여기서는 **오피오이드 reset 신호**로 구체화된다 — naltrexone(bupropion–naltrexone)이 이 reset을 막는다는 예측이 따라 나온다. ③ [[proposal-pomc-endorphin-food-pleasure|POMC β-endorphin 연구계획서]]에 **쾌락과 무관한 두 번째 β-endorphin 기능**(AgRP 시냅스 reset)을 추가한다.

# 배고픔 상태가 시냅스 AMPK 양성 되먹임으로 flip-flop 기억회로를 전환한다

- **저널/연도**: *Cell* 146:992–1003 (2011년 9월 16일). DOI: 10.1016/j.cell.2011.07.039
- **소속**: Janelia Farm Research Campus, HHMI. 교신 **[[person-sternson-scott|Scott M. Sternson]]**. 제1저자 Yunlei Yang.

## 한 줄 요약
단식이 ARC^AgRP 뉴런으로 들어오는 흥분성 시냅스의 **전시냅스 글루타메이트 방출을 증가**시키며, 이는 **ghrelin → Ghsr1 → CAMKK → AMPK → cADP ribose → RyR → Ca²⁺ → (다시) CAMKK** 의 **양성 되먹임 고리**로 유지되어 호르몬이 사라진 뒤에도 수 시간 지속(hysteresis)되고, **leptin이 POMC 뉴런의 오피오이드 방출을 통해** 이 고리를 끈다.

## 핵심 내용

### 1. 단식이 만드는 것은 전시냅스 변화다 (세포타입 특이)
- 24시간 단식 후 AgRP 뉴런의 **mEPSC 빈도가 약 2배**(fed 1.4±0.1 → dep 3.0±0.2 s⁻¹), **진폭은 불변** → 전시냅스 방출 증가. AMPA/NMDA 비·정류도 불변.
- **POMC 뉴런은 정반대**로 감소(3.3 → 1.8 s⁻¹) — 같은 핵 안에서 **세포타입 특이적 가소성**.
- 단식 후 AgRP **자발 발화도 상승**하며 CNQX로 fed 수준까지 떨어짐 → 흥분성 시냅스 입력이 발화 상승의 **필요조건**.
- 명암주기 전환(dark period 시작) 시에도 fed 마우스에서 같은 상승 → "먹으려는 경향"과 동조.

### 2. 신호 경로 — ghrelin이 필요하고 충분하다
- **충분**: 뇌절편에 ghrelin 30 nM → fmEPSC가 단식 수준으로 상승(수 분 내). 복강 ghrelin 주사(fed 마우스)도 동일.
- **필요**: 24시간 단식 중 **i.c.v. Ghsr1 길항제 D-Lys3-GHRP6** 투여 → 단식 유발 상승 차단.
- **Ca²⁺ 출처는 세포내 저장고**: BAPTA-AM·**ryanodine**이 단식 유발 상승을 차단. VGCC 차단(CdCl₂)은 기여하나 필수는 아님. 카페인(RyR 활성)만으로도 상승 재현.

### 3. AMPK — 전시냅스 작용 부위
- AMPK 활성제 **AICAR**는 fed 마우스에서만 fmEPSC를 올리고(이미 높은 단식군에선 무효), 길항제 **Compound C**는 단식군에서만 내린다 — 즉 **양방향 occlusion**.
- 결정적 대조: 기록 중인 AgRP 뉴런 **내부로** AMPK 활성제(ZMP)·길항제(Cpd C)를 투석해도 fmEPSC는 변하지 않음 → **후시냅스가 아니라 전시냅스 AMPK**.
- 상류 키나아제는 **CAMKK**(STO-609로 차단), 하류는 **cADP ribose → RyR**(8-Br-cADP ribose로 차단).
- 방출확률 변화 확인: 생리적 2 mM Ca²⁺에선 PPR 불변(방출확률 천장 효과)이나, **0.5 mM Ca²⁺에서 ghrelin이 PPR을 낮추고 Cpd C가 올린다**.

### 4. ★ Hysteresis — 시냅스가 상태를 기억한다
- **ghrelin 5분 노출 → 세척 → Ghsr1 역작용제(SP*)로 잔여 신호 차단 → 3–5시간 후 기록**: fmEPSC가 **여전히 상승**. 즉 유발 신호가 완전히 사라진 뒤에도 상태가 유지된다.
- 이 지속 상태는 **AMPK 억제(Cpd C)로 10분 내 즉시 붕괴**하고, CAMKK 억제(STO-609)로도 붕괴 → 되먹임 고리가 **지속적으로 능동 유지**되고 있음(단순 흔적이 아님).
- 카페인 5분 노출(RyR 직접 활성)로도 동일한 지속 상태가 만들어지고 Cpd C로 되돌아감 → **고리의 어느 마디를 건드려도 켜지고, 어느 마디를 끊어도 꺼진다** = 양성 되먹임의 표준 검증.
- AICAR·Cpd C·STO-609의 **용량-반응 곡선이 ultrasensitive** — 양성 되먹임과 정합.
- **생체 내 시간척도**: 재급식 후 **24시간에도 여전히 상승**(발화율도 상승, 글루타메이트성 입력 의존), **48시간에 기저 복귀**.

### 5. Off-switch — leptin이 POMC 오피오이드를 통해 reset한다
- 복강 **leptin**이 단식 마우스의 fmEPSC를 낮춤. 그러나 **절편에 leptin을 직접 넣으면 무효** → 간접 경로.
- **멜라노코르틴 아님**: MC 작용제 MTII 무효.
- **오피오이드 맞음**: μ-오피오이드 작용제 **DAMGO**가 fmEPSC를 낮추고, 세척 후 시냅스를 **다시 AICAR 감수성으로 되돌림**(= AMPK가 불활성화된 상태). **naltrexone(NTX)** 전처치는 leptin의 효과를 차단.
- **POMC 뉴런이 그 오피오이드 공급원**: POMC^ChR2 광자극이 AgRP 뉴런의 fmEPSC를 낮추고, 이 효과는 **NTX로 차단**된다. 저자 추정 분자는 **β-endorphin**.
- **기저 오피오이드 tone도 충분**: fed 마우스에 ghrelin 단독 주사는 3시간 뒤 효과가 사라지지만, **ghrelin+NTX 병용**은 3시간 뒤에도 상승을 유지 → 평상시 오피오이드 tone이 ghrelin 소실 후 스위치를 끄고 있었다.

### 6. 모델 — SR flip-flop, 그리고 set point가 아닌 set range
- 회로 등가물: 상호 연결된 두 NOR 게이트의 **SR(set/reset) 래치**. **S = ghrelin**(AgRP와 그 전시냅스 말단), **R = leptin**(POMC 경유).
- 래치의 논리적 귀결: **S가 사라져도 R이 올 때까지 상태가 유지**되는 "until" 루프. 물리량을 기준치와 계속 비교하는 **set point 제어가 아니라**, S·R 각각의 **역치로 정의되는 set range**.
- **S와 R이 동시에 높으면 기억이 성립하지 않는다** — 실제로 fed 마우스(오피오이드 tone 높음)에 ghrelin을 줘도 지속 상태가 안 만들어지는 관찰과 일치.
- 저자 주장: 이 구조 덕분에 말초 내분비 세포는 **통합된 에너지 수지를 계산할 필요 없이** 결핍/잉여만 보고하면 되고, 회로의 반응성은 **유발 호르몬의 수명을 넘어 연장**된다.

## 한계·해석 주의
- 지속 상태의 대부분은 **뇌절편 실험**(3–5시간)이며, 생체 내 24시간 지속은 fmEPSC·발화율로 간접 확인.
- **ghrelin 민감 글루타메이트성 입력의 세포 정체는 미규명**(저자 명시). 이후 [[krashes-2014-an-excitatory-paraventricular-nucleus-to|Krashes 2014]]가 PVH TRH/PACAP를, [[grzelka-2023-a-synaptic-amplifier-of-hunger|Grzelka 2023]]이 그 하위 PVH^TRH 경로의 활성 의존 증폭을 채운다.
- β-endorphin은 **추정**(NTX 민감성·POMC 광자극 기반)이며 이 논문에서 분자 동정은 안 됨.

## 관련 페이지
- [[grzelka-2023-a-synaptic-amplifier-of-hunger]] — **같은 시냅스의 다른 유도 규칙**: 본 논문이 *호르몬(ghrelin)→전시냅스 AMPK* 축을 정의했다면, Grzelka는 *상류 뉴런 활성→NMDAR 의존* 축으로 **입력 특이적(PVH^TRH 한정) 증폭**과 **체중 재증가까지의 인과**를 보인다. 두 논문이 [[concept-agrp-synaptic-plasticity]]의 양대 기둥.
- [[concept-agrp-synaptic-plasticity]] — 본 논문이 창시한 "AgRP 시냅스 가소성" 개념 hub(전시냅스 AMPK·후시냅스 NMDAR·입력 특이성 정리).
- [[concept-circuit-bistability-hysteresis]] — 본 논문의 SR flip-flop·hysteresis·set range 논리를 일반화한 개념 hub.
- [[concept-npy-agrp-neurons]] — 본 논문의 표적 세포; 단식이 AgRP 흥분성 입력을 올리고 POMC 입력을 내린다는 세포타입 특이 가소성.
- [[concept-pomc-neurons]] — **reset 신호의 공급원**. α-MSH(멜라노코르틴)가 아니라 **오피오이드**로 AgRP 시냅스를 끈다는 비정규 기능.
- [[concept-ghrelin]] — set 신호. 본 논문은 ghrelin의 AgRP 작용이 세포체 직접 흥분만이 아니라 **전시냅스 말단**에서 일어남을 보임.
- [[concept-leptin]] — reset 신호. 단 **직접 작용이 아니라 POMC 오피오이드 경유**(절편 직접 투여 무효).
- [[concept-hypothalamic-ampk]] — 본 논문은 시상하부 AMPK의 작용점에 **시냅스 전말단**을 추가한다(대사 유전자 발현·지방산 산화와 구별되는 층).
- [[concept-arcuate-nucleus]] — AgRP/POMC 상호 길항이 **시냅스 수준에서도 반대 방향**으로 작동.
- [[proposal-pomc-endorphin-food-pleasure]] — β-endorphin의 **두 번째 기능**(쾌락 부호화와 별개로 AgRP 시냅스 reset)을 제안에 추가할 근거.
- [[concept-weight-regain-defended-adiposity]] — "체중 감량 후 회로가 왜 원래로 안 돌아가는가"의 시냅스 기질 후보.
- [[krashes-2014-an-excitatory-paraventricular-nucleus-to]] — 본 논문이 미규명으로 남긴 **ghrelin 민감 흥분성 입력의 정체**를 PVH TRH/PACAP로 좁힌 후속.
- [[kim-2024-normative-framework-dissociates-need]] — AgRP=Need. 본 논문은 그 Need가 **자극보다 오래 유지되는 이유**(시냅스 기억)를 제공.
- [[concept-need-motivation-pleasure-utility]] — Need 축의 시간 상수·이력 의존성.
- [[concept-drug-evoked-synaptic-plasticity]] — **되돌릴 수 있는 가소성**이라는 같은 논리 구조(중독 회로판). 여기서는 오피오이드가 depotentiation 역할.
- [[person-sternson-scott]] — 교신저자 인물 hub.
- [[betley-2013-parallel-redundant-circuit-organization-for]] · [[xu-2020-behavioral-state-coding-by]] — 같은 lab의 AgRP 출력 배선·PVH 상태 부호화.
- [[overview-appetite-energy-homeostasis]] — 큰 그림(항상성 제어의 set point vs set range).
- [[liu-2012-fasting-activation-of-agrp-neurons]] — ★ **본 논문의 전시냅스 해석을 명시적으로 기각하는 후속**(Lowell lab, Neuron 2012). 같은 관찰(mEPSC 빈도 2배·진폭 불변)을 **후시냅스 시냅스 수 증가**로 읽으며 세 근거를 든다: 단식이 PPR을 바꾸지 않음(fed 0.67 vs fasted 0.66, 표준 조건), 후시냅스 NMDAR 삭제 시 빈도 증가 소실, 단식이 가시를 **67% 증가**시킴. 단 Liu도 전시냅스 기전을 배제하지 않으며 두 기전의 공존 가능성을 인정한다. 상세 대조표는 [[concept-agrp-synaptic-plasticity]]의 "미해결 쟁점" 절.
- [[concept-hypothalamic-ampk]] "상류 키나아제" 절 — 본 논문의 **STO-609 실험**(CaMKK 억제가 ghrelin 효과를 차단하되 AICAR는 여전히 작동 → CaMKK가 AMPK 상류)이 AgRP 시냅스에서 **CaMKK2**의 직접 증거로 정리된 자리. [[grzelka-2023-a-synaptic-amplifier-of-hunger|Grzelka 2023]]이 후시냅스 후보로 든 CaMKII와 혼동하지 말 것.
