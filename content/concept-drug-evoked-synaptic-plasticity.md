---
title: 약물 유발 시냅스 가소성 (Drug-evoked synaptic plasticity)
type: concept
created: 2026-09-02
updated: 2026-09-02
aliases: [drug-evoked synaptic plasticity, CP-AMPAR, calcium-permeable AMPAR, metaplasticity, depotentiation, mGluR-LTD, dorsalization, spiraling connectivity, 약물 유발 가소성]
---

> [!takeaway] 연구 방향 관점의 핵심
> **중독을 "고칠 수 있는 것"으로 만드는 개념**. [[luscher-2021-consolidating-the-circuit-model-for|Lüscher & Janak 2021]]의 결론 — 중독은 신경퇴행이 아니라 **gain-of-function** — 은 이 페이지의 내용이 성립할 때만 유효하다: 병리가 **잘못 강화된(potentiated) 시냅스**라면, 그 시냅스를 **되돌리면(depotentiation)** 행동이 되돌아온다.
> 실제로 그렇게 된다. NAc D1R-MSN 입력을 depotentiate하면 cue 유발 추구가 소거되고(Pascoli 2012), OFC→DST를 depotentiate하면 [[concept-compulsion|강박]]이 줄며, 거꾸로 potentiate하면 강박이 **생긴다**(Pascoli 2018).
> 사용자에게 가장 실용적인 산출은 **"광유전학에서 착안한 DBS"의 3원칙**이다 — ① 고주파가 아닌 **간헐·저주파**, ② **D1R 길항제 병용**(전기자극은 도파민도 함께 방출시키므로), ③ 자극 중에만이 아니라 **지속되는(lasting) 효과**. [[concept-deep-brain-stimulation|DBS]]·[[concept-responsive-neurostimulation|폐루프 자극]]을 "증상 억제"가 아니라 **회로 재설정**으로 설계하려는 순간 필요한 설계 원리다.

# 약물 유발 시냅스 가소성 (Drug-evoked synaptic plasticity)

## 한 줄 요약
중독성 약물이 보상 회로의 흥분성 시냅스에 남기는 **지속적 강도 변화**. 이 변화가 약물-적응 행동(감작·cue 추구·[[concept-compulsion|강박]])의 기능적 기질이며, 인위적으로 **되돌리거나 만들어 낼 수 있다**는 점에서 인과적으로 검증돼 왔다.

## 기전 요소

### 1. Calcium-permeable AMPAR (CP-AMPAR) 삽입 — 시작 스위치
- 첫 약물 노출 수 시간 내 **VTA 도파민 뉴런의 흥분성 시냅스에 CP-AMPAR가 삽입**된다(GluA2 결손형 AMPAR).
- 기능은 그 자체의 행동 효과가 아니라 **permissive metaplasticity** — 이후 하류(NAc, 그다음 DST)에서 일어날 가소성을 **허용**하는 상태를 만든다.
- 제거 경로: **mGluR(대사성 글루탐산 수용체)** 가 CP-AMPAR 제거를 통제 → mGluR 작용제·PAM이 치료 후보가 되는 근거(Bellone & Lüscher 2006; McCutcheon 2011).

### 2. 단계적 확장 (staged process) — 배쪽에서 등쪽으로
```
VTA (수 시간)  →  NAc (수일)  →  DST (더 많은 피질선조체 루프 동원 후)
```
- VTA에서 며칠간 가소성이 유지되면 NAc의 흥분성 입력도 강화되고(Mameli 2009), 이후 등쪽 선조체까지 확장 = **dorsalization**.
- **전파 경로 = spiraling connectivity**(Haber 2000): NAc D1R-MSN → 중뇌 GABA 뉴런 강화 → tonic DA 발화↑ → VTA뿐 아니라 **SNc**까지 disinhibition → SNc → 더 등쪽 선조체. 이 나선형 되먹임이 배쪽 회로의 RPE를 등쪽으로 실어 나른다.
- 이것이 [[luscher-2021-consolidating-the-circuit-model-for|Lüscher & Janak 2021]] Figure 4의 조립 논리 — **양성강화(D1 축) + 음성강화(D2 축) → dorsalization → compulsion**.

### 3. 시냅스별 인과 실험 — 되돌리기와 만들어 내기 ★
| 시냅스 | 조작 | 행동 결과 | 출처 |
|---|---|---|---|
| mPFC→NAc D1R-MSN | **depotentiation** | cue 유발 추구 **소거** | Pascoli 2012 |
| LHb→RMTg (GluA1 삽입) | GluA1 막 전달 **차단** | 금단기 우울 유사 행동 **차단** | Meye 2015 |
| OFC→DST (D1·D2 SPN 모두) | D1R 차단 + LTD 프로토콜 = **depotentiation** | [[concept-compulsion|강박]] perseverance **감소** | Pascoli 2018 |
| OFC→DST (비강박 개체) | **인공 potentiation** | 강박 **유발** | Pascoli 2018 |

- OFC→DST potentiation의 분자 규칙: D1R·NMDA 공활성 → **ERK/MAPK** → AMPAR 삽입(Girault 2012). 단 DST의 통상 규칙(D1R은 강화 촉진, D2R은 억제)을 넘어 **D1·D2 SPN 양쪽에서 동시에** 일어난다는 점이 예외적.
- **시점**: 강박이 아직 발현되지 않은 단계에도 코카인-활성 입력 시냅스는 이미 더 강하다(Wall 2019, >100,000 시냅스 분석) → potentiation은 모든 개체에서 유도되고 **강박자에서만 복구되지 않는 것**일 가능성.

### 4. 치료로의 번역 — optogenetically inspired DBS ★
- 광유전 depotentiation을 임상 도구로 옮기려는 시도: **저주파 DBS + D1R 길항제(SCH 23390 / SCH 31166)** 병용이 locomotor sensitization을 광유전 depotentiation과 **동등하게** 역전(Creed 2015). 둘 다 **mGluR-LTD**에 의존하며, 전기자극은 도파민도 함께 방출시키므로 **D1R 차단이 필수**.
- 통상 DBS 프로토콜과 다른 3가지: ① **간헐·저주파**(고주파 연속 아님), ② **약리 보조제 병용**, ③ **지속적 효과**(자극 중에만이 아님).
- 한계: mGluR 접근은 이미 성립된 **compulsion에는 효과 근거가 없고**, 저자들은 "이 모델에 기반한 신규 중독 치료는 아직 등장하지 않았다"고 명시.
- 피질 표적은 **TMS**로도 접근 가능(Terraneo 2015 pilot); 쥐에서 **OFC >100 Hz DBS**가 morphine place preference 소거를 촉진·재발 차단(Fakhrieh-Asl 2020).

## 위키 안의 이웃 — 다른 문법의 가소성
- **[[piette-2026-striatal-endocannabinoids-drive-one-shot|eCB-LTP]]**: DLS SPN의 피질선조체 입력에서 **presynaptic CB1R + D2R 의존 LTP**가 단일 시행 학습을 각인. DMS에서는 유도 불가 → **부위별 가소성 규칙의 분업**. 여기서는 도파민이 보상 신호가 아니라 **가소성 규칙 자체를 gating**한다. → [[concept-one-shot-learning]]
- **[[concept-epigenetic-priming|후성유전 priming]]**: 시냅스 강도 대신 **크로마틴**에 잠재 취약성을 저장하는 병렬 기전(H3K4me1/SETD7). Lüscher & Janak은 강박 개체차의 유력 후보로 **compulsion 회로 뉴런의 후성유전 리모델링**을 지목한다 — 즉 두 층은 연결돼 있을 가능성이 높다.

## 관련 페이지
- [[luscher-2021-consolidating-the-circuit-model-for]] — 본 개념의 1차 소스(CP-AMPAR·dorsalization·depotentiation·DBS 3원칙).
- [[concept-compulsion]] — 이 가소성이 만들어 내는 최종 행동 표현형.
- [[concept-orbitofrontal-cortex]] — OFC→DST가 강박의 결정적 시냅스.
- [[concept-lateral-habenula]] — LHb→RMTg GluA1 삽입(금단기 정서의 시냅스 인과).
- [[concept-medium-spiny-neuron]] — D1/D2-MSN이 가소성의 무대.
- [[concept-nucleus-accumbens]] · [[concept-dopamine-reward-system]] — 배쪽 회로에서 시작되는 단계적 확장.
- [[concept-deep-brain-stimulation]] · [[concept-responsive-neurostimulation]] — depotentiation 원리를 임상 자극 프로토콜로 옮기는 경로.
- [[piette-2026-striatal-endocannabinoids-drive-one-shot]] · [[concept-one-shot-learning]] — 선조체의 또 다른 가소성 규칙(eCB-LTP).
- [[concept-epigenetic-priming]] — 시냅스 아래층에 취약성을 저장하는 병렬 기전.
- [[pascoli-2026-conditioned-accumbal-dopamine-transients]] — 같은 lab; 가소성의 상류 입력(cue 도파민)을 개체 수준에서 측정.
- [[person-luscher-christian]] — 이 연구 프로그램의 주도자.
- [[concept-incentive-sensitization]] — 감작의 행동 이론; 여기서는 그 시냅스 기질.
