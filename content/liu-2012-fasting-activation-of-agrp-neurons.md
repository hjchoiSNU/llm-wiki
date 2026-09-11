---
title: "단식에 의한 AgRP 활성화는 NMDA 수용체를 필요로 하며 가시형성을 동반한다 (Liu 2012)"
type: paper
created: 2026-09-11
updated: 2026-09-11
source: "raw/2012 Neuron. Fasting Activation of AgRP Neurons Requires NMDA Receptors and Involves Spinogenesis and Increased Excitatory Tone.pdf"
authors: [Tiemin Liu, Dong Kong, Bhavik P. Shah, Chianping Ye, Shuichi Koda, Arpiar Saunders, Jun B. Ding, Zongfang Yang, Bernardo L. Sabatini, Bradford B. Lowell]
year: 2012
---

> [!takeaway] 연구 방향 관점의 핵심
> **단식이 AgRP를 켜는 마지막 단계가 "새 시냅스를 만드는 것"이라는 주장** — 24시간 단식이 AgRP 수상돌기 가시를 **67% 늘리고**, 이 가시형성과 뒤따르는 흥분성 입력 증가·발화 상승·`Agrp`/`Npy` mRNA 상승·c-Fos가 **전부 후시냅스 NMDA 수용체를 지워버리면 사라진다**.
> 이 논문의 위키 내 최대 값어치는 **[[yang-2011-hunger-states-switch-a-flip-flop|Yang 2011]]과 정면으로 부딪힌다는 점**이다. 같은 관찰(단식 → mEPSC 빈도 2배, 진폭 불변)을 Yang은 **전시냅스 방출 증가**로, Liu는 **후시냅스 시냅스 수 증가**로 읽는다. Liu는 세 가지 근거를 들어 전시냅스 설명을 명시적으로 기각한다. → 상세 대조는 [[concept-agrp-synaptic-plasticity]]
> 사용자 lab에는 두 가지가 직결된다 — ① **AgRP는 가시가 풍부하고 POMC는 사실상 가시가 없다**는 구조적 비대칭이, 왜 가소성·NMDAR 조작이 AgRP에서만 대사 표현형을 만드는지를 설명한다. ② NMDAR 결손 AgRP 마우스가 **저체중·저지방·저섭취 + RER 감소(지질 산화 우위)** 를 보인다는 것은, [[concept-weight-regain-defended-adiposity|체중 유지]]의 약리 표적으로 거론되는 **부위특이 NMDA 길항**의 가장 오래된 근거다.

# 단식에 의한 AgRP 활성화는 NMDA 수용체를 필요로 하며 가시형성을 동반한다

- **저널/연도**: *Neuron* 73:511–522 (2012년 2월 9일). DOI: 10.1016/j.neuron.2011.11.027
- **소속**: BIDMC·Harvard Medical School(내분비) + Sabatini lab(HHMI/Harvard 신경생물학). 교신 **[[person-lowell-bradford|Bradford B. Lowell]]**. 제1저자 4인 공동(Tiemin Liu, Dong Kong, Bhavik P. Shah, Chianping Ye).

## 한 줄 요약
AgRP 뉴런에서만 `Grin1`(NMDAR NR1 subunit)을 지우면 **체중·지방·섭취가 감소**하고 **단식에 대한 모든 반응(가시형성·흥분성 입력 증가·탈분극·발화·c-Fos·`Agrp`/`Npy` mRNA)이 소실**되는 반면, POMC 뉴런에서 지우면 대사 표현형이 **전혀 없다**.

## 핵심 내용

### 1. 유전 모델과 대사 표현형 — AgRP에만 있고 POMC에는 없다

| 조작 | 체중·지방 | 섭취 | 비고 |
|---|---|---|---|
| `Agrp-ires-Cre; Grin1^lox/lox` | **뚜렷이 감소**(암수 모두) | ad lib 24시간 섭취↓, **단식 후 재급식 1·2·4·24시간 모두↓** | **RER 감소**(지질 산화 우위). 에너지소비·운동량은 정상 |
| `Pomc-Cre; Grin1^lox/lox` | **변화 없음** | 변화 없음 | POMC에서 NMDAR은 에너지 균형에 역할 없음 |

- 전기생리 검증: 두 모델 모두 유발 NMDAR-EPSC와 자발 NMDAR-sEPSC가 소실(NMDAR/AMPAR 비 붕괴). AgRP에서 `Grin1` 삭제는 **AMPAR-sEPSC의 빈도·진폭을 바꾸지 않는다**(기저 흥분성 전달은 보존).

### 2. ★ 구조적 비대칭 — AgRP는 가시가 많고 POMC는 사실상 없다
- AAV-DIO-mCherry로 형태를 본 결과 **AgRP 수상돌기는 가시가 풍부**, **POMC는 essentially aspiny**.
- AgRP에서 NMDAR을 지우면 가시 수가 **약 50% 감소**하고, 가시 머리 크기·목 길이도 소폭 감소 → NMDAR이 가시의 **수와 형태를 유지**한다.
- 저자 해석: 이 구조 차이가 **왜 NMDAR 조작이 AgRP에서만 대사 표현형을 만드는지**를 설명할 수 있다. 가시는 흥분성 입력을 받는 자리이자 가소성 신호가 격리되는 구획이다.

### 3. 단식 반응 전체가 NMDAR 의존
- **c-Fos**: 단식 시 AgRP c-Fos⁺ 비율 상승 → KO에서 감쇠.
- **mRNA**: 단식 시 `Agrp`↑·`Npy`↑ → KO에서 크게 감쇠. 반면 단식 시 `Pomc`↓는 **POMC의 NMDAR과 무관**(POMC KO에서도 정상적으로 감소).
- **전기생리**: 단식이 AMPAR-sEPSC·mEPSC **빈도를 2배**로 올리되 **진폭은 불변** → KO에서 소실.
- **흥분성**: 단식이 막전위를 탈분극(약 −58 → −50 mV)시키고 발화율을 올림(약 0.9 → 2.9 Hz) → KO에서 소실.

### 4. ★ 가시형성 — 구조 변화가 기능 변화와 같이 간다
- 24시간 단식이 AgRP 가시 수를 **67% 증가**시킨다. 이 증가는 `Grin1` 결손 시 크게 감쇠.
- **가역성·시간 경과 일치**: 24시간 단식 후 재급식하면 섭취는 **2일까지 상승, 3일째 정상**. sEPSC 빈도와 가시 수도 **1일째 중간 수준, 3일째 정상**으로 같은 궤적을 그린다.
- 저자 모델: **단식 → 가시형성 → 새 흥분성 시냅스 형성 → 글루타메이트 전달 증가 → AgRP 활성화**. 가시형성 단계 자체가 후시냅스 NMDAR("가소성 구동" 수용체)을 요구한다.

### 5. ★★ Yang 2011과의 충돌 — 같은 데이터, 다른 해석
[[yang-2011-hunger-states-switch-a-flip-flop|Yang 2011]]은 동일한 관찰(단식 시 mEPSC 빈도 2배·진폭 불변)을 **ghrelin→전시냅스 AMPK→글루타메이트 방출 증가**로 설명했다. Liu는 이를 인용하면서 **전시냅스 기전을 지지하지 않는다**고 명시하고 세 근거를 든다:

1. **단식이 PPR을 바꾸지 않는다** — fed 0.67 ± 0.04 (n=23) vs fasted 0.66 ± 0.05 (n=20). 방출확률이 올랐다면 PPR이 내려가야 한다.
2. **후시냅스 NMDAR이 필요하다** — 전시냅스 현상이라면 후시냅스 수용체를 지워도 빈도 증가가 남아야 하는데, 사라진다.
3. **가시형성이 동반된다** — 새 가시는 새 시냅스를 뜻하고, 새 시냅스는 진폭 변화 없는 빈도 증가를 그 자체로 설명한다.

저자들은 대안으로 **후시냅스 unsilencing**(침묵 시냅스의 AMPAR 삽입)도 거론하되 시상하부 회로에서 보고된 바 없다고 하고, **전시냅스 기전을 배제할 수는 없으며 두 기전이 동시에 작동할 수도 있다**고 덧붙인다.

> **위키의 판단**: 두 논문은 배타적이지 않을 가능성이 높다. Yang의 효과는 **분 단위·약리(ghrelin 5분)** 이고 Liu의 효과는 **24시간·구조(가시형성)** 다. 결정적으로 [[grzelka-2023-a-synaptic-amplifier-of-hunger|Grzelka 2023]]은 PPR·CV·AMPA/NMDA 비가 모두 불변인 채 양자 빈도만 오르는 것을 **"기능적 방출 부위 수 증가"** 로 읽으면서, **그것이 가시 수 증가인지 방출 부위 증가인지 구분할 수 없다**고 스스로 한계를 명시한다 — 즉 Liu의 해석과 같은 자리에 서 있다. 인용 시 "단식이 AgRP 흥분성 입력을 늘린다"까지는 3편 합의, **그 자리가 전인지 후인지는 미해결**로 쓰는 것이 안전하다.

## 한계·해석 주의
- `Grin1` 삭제는 **발달기부터** 일어나므로(Cre의 subthreshold 발현 포함), 성체기 급성 기능과 발달 효과가 섞여 있을 수 있다. 저자들은 `Agrp^ires-Cre/+; Grin1^lox/lox`에서 배아기 조기 삭제는 배제했다고 보고.
- 체중·체조성이 달라진 동물에서 에너지소비를 정규화하는 문제(Butler & Kozak 2010) 때문에 **에너지소비 결론은 내리지 않는다**고 저자가 명시.
- 가시는 공초점 현미경 계수이며 시냅스의 전자현미경 확인은 아니다.
- 흥분성 입력의 **출처 뉴런은 미규명**(저자가 향후 과제로 명시) — 이후 [[krashes-2014-an-excitatory-paraventricular-nucleus-to|Krashes 2014]]가 PVH TRH/PACAP로, [[grzelka-2023-a-synaptic-amplifier-of-hunger|Grzelka 2023]]이 그 입력의 가소성으로 채운다.

## 관련 페이지
- [[concept-agrp-synaptic-plasticity]] — 본 논문이 **후시냅스 NMDAR·spinogenesis 축**의 1차 출처. 네 축 비교표의 두 번째 행.
- [[yang-2011-hunger-states-switch-a-flip-flop]] — ★ **직접 충돌하는 짝 논문**. 같은 현상의 전시냅스(ghrelin–AMPK) 설명. 본 논문은 PPR 불변·후시냅스 NMDAR 필요·가시형성 동반 세 근거로 이를 기각한다.
- [[grzelka-2023-a-synaptic-amplifier-of-hunger]] — 본 논문의 NMDAR 축을 **입력 특이성과 체중 결과**로 확장(같은 lab 계열). 단회 자극→수주 체중 증가가 MK-801로 차단되는 것은 본 논문 결론의 행동 수준 확인.
- [[concept-npy-agrp-neurons]] — AgRP 가시·NMDAR·단식 반응의 세포 hub.
- [[concept-pomc-neurons]] — **대조군으로서의 POMC**: 사실상 aspiny이고 NMDAR 삭제에도 대사 표현형이 없다. AgRP와 POMC가 길항 짝이라는 통념에 **가소성 축에서는 비대칭**이라는 단서를 더한다.
- [[concept-arcuate-nucleus]] — 같은 핵의 두 세포가 구조·가소성에서 갈리는 사례.
- [[concept-weight-regain-defended-adiposity]] — AgRP NMDAR 결손이 저체중·저지방을 만든다는 것이 **부위특이 NMDA 길항** 전략의 최초 근거.
- [[concept-circuit-bistability-hysteresis]] — 단식 상태가 재급식 후 3일에 걸쳐 풀리는 시간 경과(섭취·sEPSC·가시가 함께 움직임).
- [[krashes-2014-an-excitatory-paraventricular-nucleus-to]] — 본 논문이 미규명으로 남긴 **흥분성 입력의 출처**를 PVH TRH/PACAP로 동정한 후속(같은 lab).
- [[person-lowell-bradford]] — 교신저자 인물 hub.
- [[person-sternson-scott]] — 충돌하는 해석을 낸 상대 그룹.
- [[concept-need-motivation-pleasure-utility]] · [[kim-2024-normative-framework-dissociates-need]] — Need 신호의 gain이 구조적으로(시냅스 수) 조절된다는 함의.
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
