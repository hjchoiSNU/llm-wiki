---
title: "An excitatory paraventricular nucleus to AgRP neuron circuit that drives hunger (Krashes 2014)"
type: paper
created: 2026-06-17
updated: 2026-06-17
source: "raw/2014 Nature. An excitatory paraventricular nucleus to AgRP neuron circuit that drives hunger.pdf"
authors: [Michael J. Krashes, Bhavik P. Shah, Joseph C. Madara, David P. Olson, David E. Strochlic, Alastair S. Garfield, Linh Vong, Hongjuan Pei, Mitsuko Watabe-Uchida, Naoshige Uchida, Stephen D. Liberles, Bradford B. Lowell]
year: 2014
---

> [!takeaway] 연구 방향 관점의 핵심
> **"PVH = satiety center"라는 통설을 뒤집은 고전** — PVH 안에 AgRP hunger 뉴런을 *흥분*시켜 섭식을 유도하는 **TRH⁺/PACAP⁺ 글루타메이트성 소집단**이 있음을 회로·광유전·화학유전으로 입증. 이 회로가 방금 ingest한 [[walker-2026-a-hypothalamic-circuit-for|Walker 2026(PVH^Sim2)]]의 **직접 모태**(PVH^Sim2 = 이 Trh⁺/Adcyap1⁺ 뉴런의 분자적 정제 부분집합)이고, [[garfield-2016-dynamic-gabaergic-afferent-modulation|Garfield 2016(vDMH^LepR 억제)]]과 함께 같은 Lowell lab의 AgRP 회로 3부작 중 **흥분성 입력의 출발점**. 사용자 lab의 [[concept-paraventricular-nucleus|PVH]]·[[concept-npy-agrp-neurons|AgRP]] 회로 연구의 backbone 1차 자료.

# An excitatory paraventricular nucleus to AgRP neuron circuit that drives hunger

- **저널/연도**: Nature 507:238–242 (2014). DOI: 10.1038/nature12956
- **소속**: BIDMC·Harvard Medical School 외. 교신 **[[person-lowell-bradford|Bradford B. Lowell]]**. 제1저자 Michael J. Krashes(현 NIH PI). 공저 Stephen D. Liberles·Naoshige Uchida·Alastair S. Garfield([[garfield-2016-dynamic-gabaergic-afferent-modulation|Garfield 2016]] 제1저자) 등.

## 한 줄 요약
Cre-기반 세포특이 회로 매핑으로, 시상하부 PVH의 **TRH·PACAP(Adcyap1) 발현 글루타메이트성 뉴런**이 ARC^AgRP hunger 뉴런에 강력한 단일시냅스 흥분성 입력을 주어 섭식을 구동하며, AgRP는 역으로 PVH satiety 뉴런을 GABA로 억제하는 **상호(reciprocal) hunger 회로**를 형성함을 입증.

## 핵심 내용

### 1. AgRP의 흥분성 입력 출처 — 광범위 추적
- AgRP 뉴런 출발 **광견병 monosynaptic tracing**(Agrp-IRES-Cre): 최대 입력은 ARC 국소(38%), 원거리는 **DMH(26%, glutamatergic+GABAergic)**·**PVH(18%, 주로 glutamatergic)**.
- CRACM(ChR2-assisted circuit mapping): **VGLUT2^PVH→AgRP**·**VGLUT2^DMH→AgRP** 둘 다 단일시냅스 글루타메이트성(CNQX 차단). VMH·LH는 무연결.
- **PVH 입력이 DMH보다 ~3배 큰 진폭·0% failure**(DMH는 ~32% failure) → PVH→AgRP가 **활성전위를 ~75% 유발**하는 강력 흥분성. (DMH 입력은 EPSC는 유발하나 발화는 거의 못 시킴.)

### 2. 어느 PVH 뉴런인가 — TRH⁺·PACAP⁺ (satiety 마커 아님)
- Sim1^PVH→AgRP 전부 연결. PVH 마커별 CRACM: **PDYN·OXT·AVP·CRH는 AgRP에 무연결**. **TRH^PVH→AgRP**(전부)·**PACAP^PVH→AgRP**(전부) 연결 = 흥분성 입력은 **TRH·PACAP 뉴런**(둘은 부분 중첩, TRH mRNA 뉴런의 37%가 PACAP⁺).
- **PACAP(neuropeptide)도 직접 작용**: PACAP1-38이 격리된 AgRP 뉴런을 depolarize·발화↑(PAC1 수용체 차단제 PACAP6-38이 봉쇄) → PVH→AgRP는 글루타메이트 fast + PACAP-PAC1 느린 흥분의 이중 전달.

### 3. 회로 선택성·상호성(fidelity)
- TRH/PACAP^PVH는 AgRP만 흥분, **POMC(satiety)는 무연결**(선택적).
- **역방향**: AgRP^ARC → SIM1^PVH satiety 뉴런에 GABAergic 억제(55% IPSC, PTX 차단) — AgRP는 PVH satiety를 끄고 자신을 켜는 흥분성 입력을 받는 **상호 hunger 회로**. (이 reciprocal 억제가 과거 연구가 PVH의 orexigenic 역할을 놓친 이유.)

### 4. 기능 — 충분·필요
- 화학유전 hM3Dq로 **TRH^PVH 또는 PACAP^PVH 활성 → AgRP Fos↑ + 강력한 섭식**(light cycle). 단식 후엔 이미 흥분 구동이 높아 효과 소실.
- **Occlusion**: TRH^PVH 활성 + 동시에 AgRP^ARC 억제(hM4Di) → 섭식 약화 ⇒ **PVH의 섭식 효과가 AgRP를 경유**.
- hM4Di로 **TRH^PVH 억제 → dark-cycle 섭식 감소**(필요성).
- 모델: **PVH TRH/PACAP(흥분) → AgRP(hunger)**; AgRP →(GABA) PVH satiety. Reciprocal.

### 의의
- PVH를 단일 satiety 중추가 아니라 **흥분/억제 세포타입이 공존하는 양극 회로**로 재정의. AgRP를 켜는 상류 흥분성 입력의 분자 정체(TRH·PACAP)를 최초로 확립 → 이후 [[garfield-2016-dynamic-gabaergic-afferent-modulation|Garfield 2016]](억제 입력 vDMH^LepR)·[[walker-2026-a-hypothalamic-circuit-for|Walker 2026]](PVH^Sim2 정제·예측 신호)으로 그림이 완성됨.

## 관련 페이지
- [[walker-2026-a-hypothalamic-circuit-for]] — **직접 후속**(같은 Lowell lab): 본 논문의 TRH⁺/PACAP⁺ PVH→AgRP 흥분성 뉴런을 **Sim2** 전사인자로 정제(PVH^Sim2)하고, 그 입력이 미래 에너지 결핍을 예측하는 인지·맥락 cue에 반응함을 보임 (Neuron 2026).
- [[garfield-2016-dynamic-gabaergic-afferent-modulation]] — 같은 lab의 짝: 본 논문이 AgRP **흥분성** PVH 입력을 정의했고, Garfield는 AgRP **억제성** vDMH^LepR 입력을 정의 (Nat Neurosci 2016).
- [[concept-paraventricular-nucleus]] — PVH를 satiety 중추가 아닌 양극(흥분 TRH/PACAP + 억제 satiety) 회로로 재정의한 1차 근거.
- [[concept-npy-agrp-neurons]] — 본 회로의 하류 표적; AgRP→PVH GABA 역방향 포함.
- [[concept-arcuate-nucleus]] — AgRP가 받는 PVH·DMH 글루타메이트성 입력.
- [[concept-dorsomedial-hypothalamus]] — DMH→AgRP 글루타메이트성 입력도 동정(PVH보다 약함).
- [[person-lowell-bradford]] — 교신저자 인물 hub.
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
