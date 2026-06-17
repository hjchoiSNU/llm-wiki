---
title: 반응성 신경자극 / 폐루프 DBS (Responsive / Closed-loop DBS)
type: concept
created: 2026-06-01
updated: 2026-06-01
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
- **프로토콜**: [[wu-2020-brain-responsive-neurostimulation-for-loss]] (NCT03868670, acronym "BITES") — 양측 NAc rDBS, 난치성 고도비만+LOC eating, 1차 종결점=LOC 빈도≥50% 감소.
- **pilot 결과**: [[shivacharan-2022-pilot-study-of-responsive-nucleus]] — 2인, NAc 저주파 detection으로 자극(125 Hz, ~400 detection/day), 6개월 LOC −80%/−87%, 체중 감소. FDA IDE G180079.
- **수술 중 mapping**: [[parker-2022-appetitive-mapping-of-the-human]] — 깨어있는 환자에서 appetitive unit·자극 유발 기분 상승으로 표적 engagement 확인.
- **개인맞춤 표적화 + 1례 효능**: [[barbosa-2022-aberrant-impulse-control-circuitry]] — vmPFC→NAc shell tractography로 표적을 개인화, 폐루프 NAc-shell DBS 1례에서 LOC eating↓.

### 왜 폐루프인가 (cDBS 대비 우월성)
- [[wu-2022-local-accumbens-in-vivo]] (PNAS 2022) — 마우스에서 **상시(cDBS)는 시간이 지나며 효과 소실(습관화)되지만 responsive(rDBS)는 ~1/10 전류로 지속 효과**. 자극 중 photometry로 NAc D1-MSN ramp 차단을 직접 관찰. rDBS가 행동 특이성·부작용 면에서도 우월.
- **경제성**: [[mahajan-2022-can-responsive-deep-brain]] — rDBS가 위우회술 대비 비용효과적이 되는 BMI 감소 임계값(≈13.7–15.2 kg/m²/5년) 산출.

### 인간 적용 (강박, 확장)
- [[nho-2026-human-orbitofrontal-neural-activity-is]] (Cell 2026) — trOCD에서 **amOFC low-gamma**를 새 biomarker로, NAc-VeP 자극이 그 신호·증상을 동반 감소. closed-loop 논리를 섭식→강박으로 이식. (선행: Nho 2023 Neuron, NAc-VeP responsive DBS 단일 OCD 환자.)

### 정신과 일반으로
- Scangos et al. (2021, Nat Med) — 난치성 우울증의 개인화 closed-loop neuromodulation. Halpern 식이 biomarker 작업과 같은 패러다임 계열.

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
