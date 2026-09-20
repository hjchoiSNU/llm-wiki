---
title: 반응성 신경자극 / 폐루프 DBS (Responsive / Closed-loop DBS)
type: concept
created: 2026-06-01
updated: 2026-09-19
---

> [!takeaway] 연구 방향 관점의 핵심
> Responsive DBS(rDBS)는 **"biomarker가 뜰 때만 자극하는"** 폐루프 신경조절 패러다임이다. 사용자의 electroceutical/DTx 임상 비전([[lee-2025-hijacked-brain-modern-obesity-cue]], [[concept-digital-therapeutics]])에 직접 닿는 치료 modality이며, **동물에서 정의한 회로 biomarker(예: NAc delta)를 인간 치료기로 옮기는 다리**다. 핵심 통찰: 발작적(episodic) 식이·강박 행동은 상시 자극이 아니라 **행동 직전 신호를 검출해 그 순간만 차단**하는 것이 특이적·효율적.

# 반응성 신경자극 / 폐루프 DBS (Responsive / Closed-loop DBS)

## 한 줄 요약
이식형 전극이 **신경 biomarker(특정 주파수 대역 전력 등)를 실시간 검출**하고, 사전 정의한 임계를 넘으면 자동으로 고주파 자극을 발사하는 closed-loop 신경조절. 상시(open-loop) DBS와 달리 행동/증상 발생 직전에만 개입 → 부작용·습관화·배터리 부담↓, 행동 특이성↑. 대표 기기: **NeuroPace RNS**(원래 난치성 뇌전증 FDA 승인 기기를 정신·식이 적응증에 IDE로 사용).

## 핵심 내용

### 작동 원리 (마우스 → 인간)
- **biomarker 검출**: 표적 핵의 LFP에서 행동을 예고하는 신호를 정의. Halpern 라인에서는 **NAc 저주파(delta 1–4 Hz / delta–theta ≤7–8 Hz) 전력 ramp-up**.
- **trigger 자극**: 임계 초과 시 고주파 burst(예: 125–130 Hz, 짧은 버스트). [[wu-2018-closing-the-loop-on]]에서 마우스 delta-threshold RNS(130 Hz, 0.1 mA, 10 s)가 고지방 binge만 차단(사회·이동 보존, 보상·혐오 없음).
- **일상 추적(ambulatory)**: 인간 RNS는 환자가 자석을 기기에 swipe해 iEEG 구간을 저장("magnet swipe"). 250 Hz 샘플, bipolar 재참조. 이로써 실험실 밖 craving 순간의 회로 신호를 수집([[choi-2025-brain-activity-associated-with-breakthrough]]).

### 인간 적용 (식이)
- **프로토콜**: [[wu-2020-brain-responsive-neurostimulation-for-loss]] (NCT03868670, acronym "BITES") — 양측 NAc rDBS, 난치성 고도비만+LOC eating, 1차 종결점=6개월 시점 **주당 LOC episode ≥1회 감소(28일 평균)가 피험자의 ≥50%에서 달성**(빈도 50% 감소가 아님 — [[wu-2020-brain-responsive-neurostimulation-for-loss]] 참조).
- **pilot 결과**: [[shivacharan-2022-pilot-study-of-responsive-nucleus]] — 2인, NAc 저주파 detection으로 자극(125 Hz, ~400 detection/day), 6개월 LOC −80%/−87%, 체중 감소. FDA IDE G180079.
  > ⚠️ 인간 pilot의 검출기는 LOC 전용 biomarker 분류기가 아니라 **RNS의 범용 저주파(Area/AUC) 검출기 + 환자별 임계(63–100%)·좌우 동시 조건**이었고, 보고된 specificity는 subject 1 **48.3%** / subject 2 **58.8%**(sensitivity 82.4%/67.8%, accuracy 54.6%/59.7%)에 그쳤다([[shivacharan-2022-pilot-study-of-responsive-nucleus]] Supplementary Fig. S1–S2). [[barbosa-2022-aberrant-impulse-control-circuitry]]도 인간용 binge 맞춤 검출기가 아직 개발되지 않았음을 명시한다. 게다가 자극은 하루 약 400회(상한 700 bout≈117분/일) 발사됐다. 따라서 '행동 직전 신호를 검출해 그 순간만 차단'은 현재 **마우스([[wu-2018-closing-the-loop-on]]·[[wu-2022-local-accumbens-in-vivo]])에서 입증된 기전**이며, 인간에서는 biomarker 특이성 확보가 미해결 과제다.
- **수술 중 mapping**: [[parker-2022-appetitive-mapping-of-the-human]] — 깨어있는 환자에서 appetitive unit·자극 유발 기분 상승으로 표적 engagement 확인.
- **개인맞춤 표적화 + 1례 효능**: [[barbosa-2022-aberrant-impulse-control-circuitry]] — vmPFC→NAc shell tractography로 표적을 개인화, 폐루프 NAc-shell DBS 1례에서 LOC eating↓. ⚠️ 이 1례는 위 pilot의 **subject 2와 동일 인물의 12주 시점 결과**로 판단됨(연령 56세·RYGB 병력·0.5 mA 단측 맹검→off→양측 스케줄 일치) — 인간 폐루프 자극 효능 데이터는 합쳐서 n=2.

### 왜 폐루프인가 (cDBS 대비 우월성)
- [[wu-2022-local-accumbens-in-vivo]] (PNAS 2022) — 마우스에서 **상시(cDBS)는 시간이 지나며 효과 소실(습관화)되지만 responsive(rDBS)는 같은 진폭(0.1 mA)에서 누적 자극시간 ~1/10(3시간 중 10.7%)만으로 지속 효과**(진폭 감소가 아니라 총 전달 전하량 감소). 자극 중 photometry로 NAc D1-MSN ramp 차단을 직접 관찰. rDBS가 행동 특이성·부작용 면에서도 우월.
- **경제성**: [[mahajan-2022-can-responsive-deep-brain]] — rDBS가 위우회술 대비 비용효과적이 되는 BMI 감소 임계값(≈13.7–15.2 kg/m²/5년) 산출.
  > ⚠️ 이 임계는 폐루프 인간 데이터로 뒷받침되지 않는다: [[shivacharan-2022-pilot-study-of-responsive-nucleus]] 6개월 체중 −5.9 kg(−4.5%)/−8.2 kg(−5.8%), [[barbosa-2022-aberrant-impulse-control-circuitry]] 12주 BMI 48.9→48.1. Mahajan의 '달성 가능' 판단이 기댄 것은 상시(open-loop) 비만 DBS 사례 시리즈(n=8, 9–16개월 BMI 5–16 감소; [[rezai-2018-feasibility-of-nucleus-accumbens]] 등 [[concept-deep-brain-stimulation]] 참조)이며, rDBS 임상의 1차 결과변수는 체중이 아니라 LOC 빈도다([[wu-2020-brain-responsive-neurostimulation-for-loss]]).

### 인간 적용 (강박, 확장)
- [[nho-2026-human-orbitofrontal-neural-activity-is]] (Cell 2026) — trOCD에서 **amOFC low-gamma**를 새 biomarker로, NAc-VeP 자극이 그 신호·증상을 동반 감소. closed-loop 논리를 섭식→강박으로 이식. (선행: Nho 2023 Neuron, NAc-VeP responsive DBS 단일 OCD 환자.)

### 정신과 일반으로
- Scangos et al. (2021, Nat Med) — 난치성 우울증의 개인화 closed-loop neuromodulation. Halpern 식이 biomarker 작업과 같은 패러다임 계열.

### 근거 등급표 (위키 내 자료 기준)

| 등급 | 내용 | 페이지 | 비고 |
|---|---|---|---|
| 마우스 인과(폐루프 구동) | delta-triggered RNS가 고지방 binge 선택 차단; rDBS가 cDBS보다 지속·저용량 | [[wu-2018-closing-the-loop-on]] · [[wu-2022-local-accumbens-in-vivo]] | 검출 sens 0.693/spec 0.644(마우스) |
| 인간 폐루프 구동(효능) | 양측 NAc rDBS 6개월 LOC −80%/−87%, 체중 −5.9/−8.2 kg | [[shivacharan-2022-pilot-study-of-responsive-nucleus]] (+[[barbosa-2022-aberrant-impulse-control-circuitry]]=동일 subject 2의 12주) | **n=2**, open-label(맹검 1주 on/1주 off), 식이 지시 없음, 검출기 specificity 48–59% |
| 인간 기록만(자극 없음) | tirzepatide 중 delta–theta biomarker와 food preoccupation 돌파 | [[choi-2025-brain-activity-associated-with-breakthrough]] | n=1, 비대조 |
| 인간 급성 open-loop 자극 | 수술 중 NAc 자극→positive affect(1인); OCD NAc-VeP 1회 자극→amOFC gamma·고통↓(3인) | [[parker-2022-appetitive-mapping-of-the-human]] · [[nho-2026-human-orbitofrontal-neural-activity-is]] | closed-loop 미구현 |
| 인간 sEEG 관찰(뇌전증 환자) | insula·dlHPC 음식 cue 부호화 | [[huang-2021-the-insulo-opercular-cortex-encodes]] · [[barbosa-2023-an-orexigenic-subnetwork-within-the]] | 자극 없음, 섭식장애 아닌 뇌전증 코호트 |
| 모델링 | 비용효과 임계 BMI −13.7~15.2/5년 | [[mahajan-2022-can-responsive-deep-brain]] | 폐루프 데이터로 미검증 |

> 계획서([[proposal-ttis-feeding-reward-circuits]] · [[proposal-nmpu-human-translation]])에서 인간 pilot을 인용할 때는 '입증'이 아니라 **'n=2 open-label pilot'** 수준으로 표기할 것.

## 관련 페이지
- [[person-halpern-casey]] — 식이/강박 rDBS 프로그램 주도.
- [[concept-nucleus-accumbens]] — rDBS의 1차 표적·biomarker 발생지.
- [[concept-loss-of-control-eating]] — rDBS 식이 임상의 표적 행동.
- [[concept-digital-therapeutics]] · [[lee-2025-hijacked-brain-modern-obesity-cue]] — electroceutical/neuromodulation을 비만 치료 스펙트럼에 두는 사용자 lab 관점.
- [[concept-orbitofrontal-cortex]] — 강박 rDBS의 신규 biomarker 회로.
- [[concept-deep-brain-stimulation]] — 상시(open-loop) DBS를 포함한 침습 신경조절 일반 hub.
- [[wu-2022-local-accumbens-in-vivo]] — cDBS 대비 rDBS 우월성의 마우스 mechanism.
- [[barbosa-2022-aberrant-impulse-control-circuitry]] — 개인맞춤 NAc-shell rDBS(vmPFC 회로 표적).
- [[mahajan-2022-can-responsive-deep-brain]] — rDBS의 비용효과 임계값.
