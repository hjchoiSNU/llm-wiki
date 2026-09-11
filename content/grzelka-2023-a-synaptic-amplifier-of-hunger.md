---
title: "체중을 되찾기 위한 시상하부의 배고픔 시냅스 증폭기 (Grzelka 2023)"
type: paper
created: 2026-09-11
updated: 2026-09-11
source: "raw/2023 Cell Mtabolism. A synaptic amplifier of hunger for regaining body weight in the hypothalamus.pdf"
authors: [Katarzyna Grzelka, Hannah Wilhelms, Stephan Dodt, Marie-Luise Dreisow, Joseph C. Madara, Samuel J. Walker, Chen Wu, Daqing Wang, Bradford B. Lowell, Henning Fenselau]
year: 2023
---

> [!takeaway] 연구 방향 관점의 핵심
> **"다이어트 후 왜 다시 찌는가"에 회로 수준의 답을 처음 내놓은 논문.** 체중 감소는 AgRP로 들어오는 흥분성 입력을 **골고루** 키우는 게 아니라, **PVH^TRH → ARC^AgRP 하나만** 골라 강화한다(입력 특이성). 이 증폭은 **잃은 체중을 되찾을 때까지 능동적으로 유지**되고, 단 **10분의 고빈도 자극 한 번** 또는 **CNO 1회**만으로도 **NMDAR 의존적으로** 만들어져 **수주간 지속되는 체중 증가**를 일으킨다.
> 사용자 lab 관점의 값어치는 세 가지다 — ① [[concept-weight-regain-defended-adiposity|체중 재증가]]를 "호르몬이 돌아와서"가 아니라 **"시냅스가 강화된 채 남아서"** 로 재정의하고, **끊을 수 있는 표적**(PVH^TRH→AgRP, NMDAR)을 제시한다. ② [[concept-glp1ra-response-variability|GLP-1RA 중단 rebound]]의 기전 가설이 [[proposal-glp1ra-rebound-microbiota|기존 제안]]의 microbiota·set-point 축 옆에 **시냅스 가소성 축**을 추가한다. ③ [[walker-2026-a-hypothalamic-circuit-for|Walker 2026]]·[[krashes-2014-an-excitatory-paraventricular-nucleus-to|Krashes 2014]]와 **같은 PVH→AgRP 경로**이므로, 사용자 lab의 [[kim-2024-normative-framework-dissociates-need|Need]] 회로 연구에 **"Need의 gain을 결정하는 가소성 층"** 을 직접 붙일 수 있다.

# 체중을 되찾기 위한 시상하부의 배고픔 시냅스 증폭기

- **저널/연도**: *Cell Metabolism* 35:770–785 (2023년 5월 2일). DOI: 10.1016/j.cmet.2023.03.002. Open access (CC BY-NC-ND).
- **소속**: Max Planck Institute for Metabolism Research(Cologne) · BIDMC/Harvard. 교신 **[[person-fenselau-henning|Henning Fenselau]]** · **[[person-lowell-bradford|Bradford B. Lowell]]**.

## 한 줄 요약
칼로리 결핍에 의한 체중 감소가 **PVH^TRH → ARC^AgRP 글루타메이트성 시냅스만 선택적으로** 강화(기능적 방출 부위 수 증가)하며, 이 강화는 **상류 PVH^TRH 활성에 의해 유도·유지**되고 **NMDAR 의존적**이며, **잃은 체중을 되찾는 데 필요하고 충분**하다.

## 핵심 내용

### 1. 입력 특이적 가소성 — 같은 AgRP 뉴런, 다른 입력, 다른 변화
광유전 **le-qEPSC**(Sr²⁺ 치환으로 방출을 비동기화 → 양자 단위 측정)로 두 흥분성 입력을 나란히 비교:

| 입력 | 단식 후 변화 | 해석 |
|---|---|---|
| **PVH^TRH → AgRP** | **빈도 2배↑**, 진폭 불변 | **전시냅스**(기능적 방출 부위/시냅스 수 증가) |
| **DMH^Vglut2 → AgRP** | **진폭↑**, 빈도 불변 | **후시냅스**(이온 전도도 증가) |

- PVH^TRH 입력에서는 **PPR·CV·AMPAR/NMDAR 비 모두 불변** → 방출확률 변화나 수용체 비 변화가 아니라 **시냅스 접속 수**가 늘었다는 세 겹의 독립 증거.
- 함의: "단식이 AgRP 흥분성 입력을 올린다"는 기존 통설([[yang-2011-hunger-states-switch-a-flip-flop|Yang 2011]]의 sEPSC 상승)이 **입력마다 다른 기전으로 일어난다** — 균일한 가소성이 아니다.

### 2. 어느 입력이 체중 재증가에 필요한가 — PVH^TRH만
- 화학유전 억제(AAV-FLEX-**hGlyR** + 전신 ivermectin, 1회로 2–3일 지속)를 **단식 동안** 적용:
  - **PVH^TRH 침묵** → 재급식 **8·24시간 식이 감소**, 이후 1주간 **잃은 체중의 회복이 뚜렷이 감소**. 급성(1·4시간) 식이는 불변.
  - **DMH^Vglut2 침묵** → 식이·체중 재증가 **무영향**.
- PVH^TRH 침묵은 **단식 유발 sEPSC 빈도 증가 자체를 없앤다** → 상류 활성이 증폭의 **필요조건**.
- 단식이 활성화하는 PVH^TRH는 **PACAP(`Adcyap1`) 공발현** 집단(FISH·Fos). 저자들이 `Trh`/`Adcyap1` 공발현으로 좁힌 이유: 이들이 **AgRP 투사 PVH 뉴런**이고 신경내분비 TRH 뉴런(단식에 오히려 억제됨)과 구별되기 때문.

### 3. 상류 활성만으로 증폭이 일어난다 (호르몬·영양 신호와 분리)
- fed 마우스에서 PVH^TRH를 **hM3Dq로 한쪽만(편측)** 활성화 → 4시간 뒤 **동측 AgRP 뉴런에서만** sEPSC 빈도↑, **반대측은 불변**.
  → 순환 호르몬·영양 신호로는 설명 불가한 **회로 특이·활성 의존** 현상.
- le-qEPSC로도 확인: CNO 후 **양자 빈도↑, 진폭 불변** — 단식이 만든 변화와 동일한 서명.

### 4. 지속성 — "체중을 되찾을 때까지" 유지된다
- 하룻밤 단식 후 재급식: 식이 증가가 **4일간** 지속되다 7일에 소멸, 체중도 그에 맞춰 회복.
- le-qEPSC 빈도는 **재급식 2일째 상승 유지**, **7일째(체중 회복 완료) 기저 복귀**.
- **CMP(caloric maintenance paradigm, 단식 전 24시간 섭취량만 매일 공급해 저체중 유지)** 1주 후: le-qEPSC 빈도가 **여전히 상승**(재급식 1일째와 차이 없음), 이후 자유 급식 시 **과식**.
- **CR(7일 칼로리 제한, ~75%)** 에서도 PVH^TRH(PACAP⁺)·AgRP의 **Fos 상승**과 AgRP sEPSC 증가.
- 결론: 증폭기는 사건 직후의 흔적이 아니라 **칼로리 결핍이 해소될 때까지 능동적으로 유지**되는 상태다.

### 5. 유도 규칙 — 짧은 고빈도 활동 + NMDAR
- **HFpS**(ARC 내 PVH^TRH 종말에 50 Hz, **10분**) — 절편에서 2–3시간 뒤 le-qEPSC **빈도↑**(진폭 불변), **D-AP5** 존재 시 실패.
- **생체 내 1회 HFpS(10분)** → 4시간 뒤 절편에서 증폭 확인, **24시간 식이 유의 증가**; **MK-801** 전처치로 차단.
- 화학유전 활성(CNO) + **MK-801**: le-qEPSC 빈도 증가 차단, 24시간 식이에서 **후반(8–24시간) 증가분이 완전 소실**(초기 1–4, 4–8시간은 부분적 감소만).
  → **급성 섭식은 NMDAR 없이도 일어나지만, 장기 과식은 NMDAR 의존 가소성이 있어야 한다**는 시간 분해.

### 6. 회로 인과 — 하류 AgRP와 글루타메이트 방출이 모두 필요
- **교차 유전 조작**(`Trh-p2a-Dre` × `Agrp-ires-Cre`): PVH^TRH에 Dre 의존 hM3Dq + ARC AgRP에 Cre 의존 hGlyR → **AgRP를 동시에 침묵시키면 과식이 소실**.
- **글루타메이트 특이성**(`Trh-p2a-Dre` × `Slc17a6^fl/fl`): PVH^TRH에서 **Vglut2 삭제 시 급성·장기 섭식 증가 모두 소실** → 펩타이드가 아니라 **글루타메이트 방출**이 매개.

### 7. 체중 — 단 한 번의 자극이 수주간 남는다
- hM3Dq **CNO 1회** → 24시간 체중 **+약 5%**; **MK-801 병용 시 완전 차단**.
- 식이 증가는 2–3일째까지 검출되고, **7일째 체중 +약 2 g 유지**(대조군 대비).
- **2주 간격 CNO 반복** → 계단식으로 **6주에 약 +10%** 체중 증가; MK-801 병용 시 차단.
- 저자 논증: hM3Dq 신경활성은 보통 **약 8시간**만 지속되므로, 수주간의 체중 증가는 **PVH^TRH→AgRP 시냅스의 장기 가소성**으로 설명된다(AgRP 자체를 직접 hM3Dq로 자극하면 마지막 CNO 후 체중 효과가 곧 사라지는 것과 대비).

## 한계 (저자 명시)
- 광유전 기반 시냅스 측정은 **ChR2 발현량·광강도·기록 위치**에 의존.
- le-qEPSC 빈도 증가가 **가시(spine) 수 증가인지 기존 시냅스의 방출 부위 증가인지** 구분 불가 — 구조적 검증은 향후 과제.
- 분자 기전 미규명(저자 추정: Ca²⁺ 유입 후 **CaMKII**·**AMPK** 동원).

## 관련 페이지
- [[yang-2011-hunger-states-switch-a-flip-flop]] — **짝 논문**: 같은 AgRP 흥분성 시냅스를 *호르몬(ghrelin)→전시냅스 AMPK→양성 되먹임* 축으로 설명. 본 논문은 *상류 활성→NMDAR* 축이며 **입력 특이성과 체중 결과**까지 연결. 두 축은 배타적이지 않고 같은 시냅스의 서로 다른 유도 경로.
- [[concept-agrp-synaptic-plasticity]] — 두 논문을 포함한 AgRP 시냅스 가소성 개념 hub(전시냅스 AMPK / 후시냅스 NMDAR·spinogenesis / 입력 특이 증폭).
- [[concept-weight-regain-defended-adiposity]] — 본 논문이 제공하는 **회로 기질**. "defended adiposity"를 시냅스 강도로 번역.
- [[krashes-2014-an-excitatory-paraventricular-nucleus-to]] — 본 회로의 **발견 논문**(PVH TRH/PACAP→AgRP 흥분성). 본 논문은 그 시냅스에 **가소성 축**을 추가.
- [[walker-2026-a-hypothalamic-circuit-for]] — 같은 PVH→AgRP 경로의 **예측 신호 축**(PVH^Sim2가 미래 결핍 cue에 반응). Grzelka는 같은 경로의 **gain(강도) 축**. 공저자 Samuel J. Walker가 두 논문에 모두 참여.
- [[garfield-2016-dynamic-gabaergic-afferent-modulation]] — 같은 lab 계열의 **억제성 입력**(vDMH^LepR/pDYN). 본 논문의 DMH^Vglut2(흥분·후시냅스형)와 구별할 것.
- [[concept-npy-agrp-neurons]] — 하류 표적. 입력 회로 지도에 **가소성 열**을 추가.
- [[concept-paraventricular-nucleus]] — PVH^TRH/PACAP 집단이 satiety 뉴런과 분리된 orexigenic 축임을 재확인.
- [[concept-dorsomedial-hypothalamus]] — DMH^Vglut2→AgRP는 단식에 **진폭(후시냅스)** 으로 반응하되 체중 재증가에는 불필요 — DMH 입력의 기능 분업.
- [[concept-circuit-bistability-hysteresis]] — "결핍이 해소될 때까지 유지되는 상태"라는 이력 의존 구조.
- [[concept-hypothalamic-ampk]] — 저자 추정 하류 분자(CaMKII·AMPK).
- [[aronne-2023-continued-treatment-with-tirzepatide-for]] — 임상 rebound 앵커(SURMOUNT-4: 중단 후 52주 +14%). 본 논문은 그 rebound의 **회로 후보 기전**.
- [[proposal-glp1ra-rebound-microbiota]] · [[proposal-glp1ra-rebound-nrf-junggyeon]] — 사용자 lab 제안에 **PVH^TRH→AgRP 가소성·NMDAR**을 추가 축으로 편입할 근거.
- [[petersen-2026-the-evolving-landscape-of]] — 약물개발 지형의 **유지생물학(defended adiposity)·부위특이 NMDA 길항** 항목과 직접 대응.
- [[davila-2026-agrp-neurons-are-required-for]] — GLP-1RA 체중 감량에 AgRP 회로가 필요하다는 반대 방향 증거. 감량과 재증가 양쪽에서 AgRP가 관문.
- [[kim-2024-normative-framework-dissociates-need]] · [[concept-need-motivation-pleasure-utility]] — Need의 **gain을 설정하는 가소성 층**.
- [[person-fenselau-henning]] · [[person-lowell-bradford]] — 교신저자 인물 hub.
- [[overview-appetite-energy-homeostasis]] — 큰 그림(체중 유지 실패의 회로 설명).
- [[liu-2012-fasting-activation-of-agrp-neurons]] — ★ **본 논문 NMDAR 축의 직접 선행**(같은 Lowell lab, Neuron 2012). AgRP `Grin1` 삭제가 단식 반응 전체(가시형성·EPSC 빈도·발화·`Agrp`/`Npy` mRNA)를 없앤다. 본 논문이 "양자 빈도 증가가 가시 수 증가인지 방출 부위 증가인지 구분 못 한다"고 남긴 한계는, Liu의 **가시 +67%** 관찰과 같은 자리를 가리킨다.
- [[concept-agrp-synaptic-plasticity]] "분자 실행자" 절 — ★ 본 논문 Discussion의 **CaMKII 후보 논증 4갈래를 분해**하고, 그중 2갈래(CaMKII→AMPK / 유전·약리 대사 표현형)의 인용이 실제로는 **CaMKK2(CaMKKβ)** 논문(Hawley 2005·Anderson 2008)임을 명시. 두 효소를 구별해 읽어야 한다.
- [[concept-hypothalamic-ampk]] "상류 키나아제" 절 — CaMKK2가 AMPK 상류라는 근거와 AgRP 시냅스에서의 STO-609 증거.
