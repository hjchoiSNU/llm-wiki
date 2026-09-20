---
title: 체중 재증가와 방어되는 지방량 (Weight regain & defended adiposity)
type: concept
created: 2026-09-11
updated: 2026-09-19
aliases: [weight regain, rebound, 요요, 체중 재증가, defended adiposity, weight maintenance, 유지생물학]
---

> [!takeaway] 연구 방향 관점의 핵심
> **비만 치료의 실패는 감량 실패가 아니라 유지 실패다.** 다이어트든 약물이든 감량 자체는 이제 잘 되고, 문제는 **끊으면 되돌아온다**는 것 하나로 수렴한다. 그동안 이 현상은 "설정점을 방어한다"는 **서술적 은유**로만 설명돼 왔는데, [[grzelka-2023-a-synaptic-amplifier-of-hunger|Grzelka 2023]]이 여기에 처음으로 **끊을 수 있는 회로 표적**을 붙였다 — **PVH^TRH → ARC^AgRP 시냅스 증폭기**, 그리고 그 유도 관문인 **NMDAR**.
> 이 페이지는 위키 곳곳에 흩어져 있던 세 갈래(임상 rebound 수치 / 회로·시냅스 기전 / 약물개발의 "유지생물학")를 한 곳에 모은다. 사용자 lab에는 [[proposal-glp1ra-rebound-microbiota|GLP-1RA rebound 연구계획서]]의 **기전 축을 하나 더 확보**하는 의미가 가장 크다 — 기존 microbiota·set-point 축 옆에 **시냅스 가소성 축**이 선다.

# 체중 재증가와 방어되는 지방량

## 한 줄 요약
감량된 체중이 개입 종료 후 되돌아오는 현상과, 그 배후에서 **에너지 결핍이 해소될 때까지 배고픔 회로를 강화된 상태로 유지**하는 생물학.

## 층위 1 — 임상 사실 (얼마나, 얼마나 빨리)

| 근거 | 개입 | 재증가 |
|---|---|---|
| [[aronne-2023-continued-treatment-with-tirzepatide-for\|SURMOUNT-4]] | 티르제파타이드 36주(−20.9%) 후 위약 전환 | 52주간 **+14.0%** (지속군 −5.5%, 군간 차 −19.4%p) |
| [[barros-2026-from-diet-to-hypothalamic-dysfunction\|Barros 2026]]이 인용한 Wang 2026 (**3차 인용, 원논문 미확보**) | 세마글루타이드 중단 | **여성 28명 전향 연구에서 71.4%가 중단 12주 내 유의한 체중 재증가** — 재증가한 *사람의 비율*이지 재증가한 *체중의 %가 아님*. 재증가 폭은 이 출처로 말할 수 없다. |
| [[hankir-2015-distinctive-striatal-dopamine-signaling-after\|Hankir 2015]] | 다이어트 vs 위우회술 | 다이어트만 **중변연계 도파민 tone 우세 → 요요**; RYGB는 등쪽 우세로 재설정 |

> 유지 지표를 기록할 때는 **"감량분의 몇 %를 유지했는가"** 와 **"기저 대비 최종 체중"** 을 구분할 것. SURMOUNT-4에서 위약군도 종료 시점에 기저 대비 −9.9%였다(legacy effect 논쟁).

> ⚠️ 위 표에서 인용 단위를 섞지 말 것. SURMOUNT-4의 **+14.0%**는 *체중 변화율*이고, Wang 2026의 **71.4%**는 *재증가한 환자의 비율*(여성 28명 중)이다. 후자는 [[barros-2026-from-diet-to-hypothalamic-dysfunction|Barros 2026]] §6을 거친 3차 인용(원출처: Wang N et al., *Diabetes Obes Metab* 2026 — Barros 참고문헌 191)이며 원논문이 `raw/`에 없으므로, 강의·논문에 쓰려면 원문 확보가 먼저다.

## 층위 2 — 회로·시냅스 기전 (왜 되돌아오는가)

### 배고픔 시냅스가 강화된 채 남는다 ★
[[grzelka-2023-a-synaptic-amplifier-of-hunger|Grzelka 2023]]의 핵심 논리 4단계:
1. 칼로리 결핍이 **PVH^TRH → AgRP 시냅스만 선택적으로** 강화(기능적 방출 부위 수↑). 이웃한 DMH^Vglut2 입력은 다른 기전(후시냅스 진폭↑)으로 변하고 **체중 재증가에는 불필요**.
2. 이 증폭은 **저체중이 유지되는 한 계속 유지**되고(칼로리 유지식 1주·칼로리 제한 1주), **체중이 회복되어야 꺼진다**.
3. 단식 중 PVH^TRH를 침묵시키면 **증폭도, 재급식 후 과식도, 잃은 체중 회복도 무너진다**.
4. 역방향: **10분 고빈도 자극 1회** 또는 **CNO 1회**만으로 증폭이 생겨 **수주 지속 체중 증가**(2주 간격 반복 시 6주에 약 +10%). **MK-801(NMDAR 길항)이 전부 차단**.

### 함께 읽을 축
- **호르몬 래치**: [[yang-2011-hunger-states-switch-a-flip-flop|Yang 2011]] — ghrelin이 켠 시냅스 상태가 호르몬이 사라진 뒤에도 유지되고, **leptin이 POMC 오피오이드를 통해서만** 끈다. → [[concept-circuit-bistability-hysteresis|set point가 아니라 set range]].
- **AgRP가 감량 자체에도 필요**: [[davila-2026-agrp-neurons-are-required-for|d'Ávila 2026]] — 세마글루타이드는 AgRP를 **모집**하며, AgRP 회로가 망가지면 식이 억제는 남되 **체중 감량이 무너지고 기저 체중으로 rebound**(암컷 특이). 즉 AgRP는 **감량과 재증가 양쪽의 관문**이다.
- **microbiota·담즙산 reset 실패**: [[barros-2026-from-diet-to-hypothalamic-dysfunction|Barros 2026]] — 중단 시 microbiota·SCFA·TGR5·시상하부 AgRP/POMC가 **동시에** 원상 복귀.
- **보상계 재설정 방향**: [[hankir-2015-distinctive-striatal-dopamine-signaling-after|Hankir 2015]] — 감량 *방식*이 선조체 도파민 tone의 방향을 가른다.
- **쾌락 가치의 변화**: [[concept-hedonic-devaluation]] — 만성 고지방식·비만에서의 쾌락 가치 하락과 그 회복.

### 상류 세포체를 끄면 12주 동안 유지된다 ★
[[walker-2026-a-hypothalamic-circuit-for|Walker 2026]]은 Grzelka가 측정한 바로 그 시냅스의 **상류 세포**(PVH^Sim2 = PVH^TRH/PACAP의 분자적 부분집합)를 만성 침묵(TeNT)시켰다:
- **12주에 걸쳐 섭취·체중 증가·체지방이 지속 감소**(수컷에서 강함). 암컷은 섭취는 줄지만 EE·운동량이 동반 감소해 체중은 보상됨.
- 줄어든 EE는 섭취 감소의 *원인이 아니라 적응적 결과*.
- 저자들이 결론에서 명시: **다이어트 후 감소한 체중을 *유지*하는 cell-type 특이 치료 표적 후보**.

→ 즉 이 축의 치료 진입점은 두 개다. ① **시냅스 유도 관문 = NMDAR**([[grzelka-2023-a-synaptic-amplifier-of-hunger|Grzelka]]), ② **상류 세포타입 출력 자체 = PVH^Sim2/TRH**(Walker). ②는 감량 직후가 아니라 **유지기 전 구간**에 걸린다는 점에서 ①과 시간 창이 다르다.

## 층위 3 — 약물개발에서의 "유지생물학"
[[petersen-2026-the-evolving-landscape-of|Petersen 2026]]은 이를 **defended adiposity**로 명명하고 세 갈래 대응을 정리한다:
- **leptin 재감작** — 감량 후 저하된 leptin 신호를 되살려 reset 신호를 공급.
- **LEAP2 유사체** — 내인성 ghrelin 수용체 길항으로 set 신호를 차단.
- **부위특이 NMDA 길항**(GLP-1–NMDA 길항 [[concept-peptide-drug-conjugate|PDC]]) — **Grzelka의 NMDAR 관문과 정확히 같은 표적**. 위키 안에서 전임상 회로 근거와 임상 창약 전략이 직접 맞물리는 드문 지점이다.
- 임상 운영 측면: [[aronne-2023-continued-treatment-with-tirzepatide-for|SURMOUNT-4]]의 결론은 **비만=만성질환, 장기 투약**이며, [[gonzalez-rellan-2026-weight-loss-independent-actions-of|González-Rellán 2026]]은 **체중만 1차 지표로 쓰면 유효 치료를 조기 중단하게 된다**고 경고한다.

## 사용자 lab이 바로 쓸 수 있는 각도
1. **[[proposal-glp1ra-rebound-microbiota|rebound 연구계획서]]에 시냅스 축 추가** — Aim에 "중단 후 PVH^TRH→AgRP le-qEPSC 빈도 추적 + MK-801/부위특이 NMDAR 조작으로 rebound 차단" 을 넣으면, microbiota 축과 **독립적으로 검증 가능한 두 번째 기전 가설**이 된다.
2. **reset 신호 쪽 공략** — Yang 2011의 오피오이드 reset은 **naltrexone으로 방해된다**. bupropion–naltrexone 사용자에서 유지 곡선이 다른지는 기존 임상 데이터로 물을 수 있는 질문이다.
3. **[[concept-need-motivation-pleasure-utility|NMPU]] 번역** — 재증가기를 "Need의 gain이 올라간 기간"으로 정의하고, [[kim-2024-normative-framework-dissociates-need|Need 정량 패러다임]]으로 감량 전/감량 중/유지기의 Need 곡선을 측정.
4. **[[concept-digital-therapeutics|DTx]] 표적 시점** — 증폭기가 "체중이 회복될 때까지 유지"된다면, **유지기 개입의 생물학적 창**이 명확해진다(감량 직후가 아니라 저체중이 유지되는 전 기간).

## 열려 있는 질문
- 인간에서 이 증폭기를 **측정할 대리 지표**가 없다. 현재는 행동(식욕 항진)·체중 곡선뿐.
- 약물 유도 감량(GLP-1RA)이 **칼로리 제한과 같은 시냅스 변화**를 만드는지 직접 비교한 연구가 위키에 없다. d'Ávila 2026은 AgRP **모집**을 보고했으므로 방향이 단순하지 않다.
- 반복된 감량–재증가(요요)가 증폭기를 **누적적으로 바꾸는지** 미확인.

## 관련 페이지
- [[grzelka-2023-a-synaptic-amplifier-of-hunger]] — 본 개념의 회로 기질(PVH^TRH→AgRP 증폭기·NMDAR).
- [[yang-2011-hunger-states-switch-a-flip-flop]] — 호르몬 래치와 오피오이드 reset.
- [[concept-agrp-synaptic-plasticity]] · [[concept-circuit-bistability-hysteresis]] — 기전 개념 hub 2종.
- [[aronne-2023-continued-treatment-with-tirzepatide-for]] — 임상 rebound 앵커(SURMOUNT-4).
- [[barros-2026-from-diet-to-hypothalamic-dysfunction]] — microbiota·담즙산 reset 실패 축.
- [[davila-2026-agrp-neurons-are-required-for]] — AgRP가 GLP-1RA 감량에도 필요(rebound 포함).
- [[hankir-2015-distinctive-striatal-dopamine-signaling-after]] — 다이어트 vs 수술의 도파민 재설정 방향 차이.
- [[petersen-2026-the-evolving-landscape-of]] — 유지생물학·defended adiposity·부위특이 NMDA 길항.
- [[gonzalez-rellan-2026-weight-loss-independent-actions-of]] — 체중을 1차 지표로만 쓰는 것의 위험.
- [[concept-glp1ra-response-variability]] — 반응 이질성의 시간 축(중단 후 재증가 속도의 개인차).
- [[proposal-glp1ra-rebound-microbiota]] · [[proposal-glp1ra-rebound-nrf-junggyeon]] — 사용자 lab 연구계획서 2종.
- [[concept-npy-agrp-neurons]] · [[concept-paraventricular-nucleus]] — 회로 무대.
- [[concept-ghrelin]] · [[concept-leptin]] — set·reset 호르몬(LEAP2·leptin 재감작 전략의 표적).
- [[concept-hedonic-devaluation]] · [[concept-loss-of-control-eating]] — 유지기 섭식 행동 표현형.
- [[concept-digital-therapeutics]] — 유지기 개입 도구.
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
- [[walker-2026-a-hypothalamic-circuit-for]] — PVH^Sim2(=PVH^TRH 부분집합) 만성 silencing이 **12주간 섭취·체지방 감소를 유지**; 저자가 '다이어트 후 체중 유지' 표적으로 제시. 증폭기 축의 **상류 세포타입 진입점** (Neuron 2026, Lowell lab).
