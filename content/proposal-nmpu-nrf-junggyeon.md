---
title: "[중견연구 연구계획서] NMPU 4-component 동기 framework의 인간 번역"
type: proposal
created: 2026-06-02
updated: 2026-06-02
---

> [!takeaway] 연구 방향 관점의 핵심
> [[proposal-nmpu-human-translation|NMPU 인간 번역 연구계획서]]를 **한국연구재단 중견연구**(개인기초, 최대 5년·연 3억 이내) 제출 양식으로 재구성한 초안. 과학 핵심(자체 이론 [[concept-need-motivation-pleasure-utility|NMPU]]의 마우스→인간 번역, 4축 분리 매핑, 비만 정밀 분류)은 동일하며, 본 페이지는 **필요성→독창성→연차별 목표·내용·방법→추진전략→연구역량→기대효과→연구비** grant 섹션 구조로 정리. 연구비·일정 수치는 양식 예시(작성 시 조정).

# [중견연구] NMPU 4-component 동기 framework의 인간 번역

- **국문 과제명**: Need–Motivation–Pleasure–Utility(NMPU) 동기 framework의 인간 신경 substrate 규명 — 침습 전기생리·7T fMRI·계산모델 통합을 통한 섭식 동기 분해와 비만 정밀 분류
- **영문 과제명**: Human translation of the Need–Motivation–Pleasure–Utility (NMPU) framework: dissociating feeding motivation via intracranial electrophysiology, 7T fMRI and computational modeling
- **사업유형**: 개인기초연구 — **중견연구** (5년, 연 3억원 이내 가정) · **연구책임자**: [[person-choi-hyung-jin|최형진]] (서울대 의대)
- **연구분야**: 신경과학 / 동기·보상 / 계산신경과학 / 비만

---

## 1. 연구개발과제의 필요성

### 1-1. 국내외 연구개발 동향
- 동기·보상 신경과학은 오랫동안 **보상을 단일 스칼라**로 다뤄왔으나, 최근 다요소 분해가 부상([[liu-2026-granular-motivational-interaction-and|granular motivational states]]·[[weber-2025-interoceptive-origin-reinforcement-learning|interoceptive RL]]·[[gershman-2024-explaining-dopamine-prediction-errors-beyond|belief-state RPE]]).
- 연구책임자 lab은 동기를 **Need·Motivation·Pleasure·Utility** 4 component로 분해한 **NMPU framework**를 제안([[kim-2024-unified-theoretical-framework-underlying-regulation|BioEssays 2024]]·[[concept-need-motivation-pleasure-utility]])하고, **마우스에서 정량 검증**([[kim-2024-normative-framework-dissociates-need|Sci Adv 2024]]: AgRP=Need, [[lee-2023-lateral-hypothalamic-leptin-receptor|LH LepR=Motivation]]).
- 인간 침습 전기생리는 개별 노드를 이미 관찰 — NAc([[shivacharan-2022-pilot-study-of-responsive-nucleus]]·[[parker-2022-appetitive-mapping-of-the-human]]), OFC([[nho-2026-human-orbitofrontal-neural-activity-is]]), insula([[huang-2021-the-insulo-opercular-cortex-encodes]]), dlHPC([[barbosa-2023-an-orexigenic-subnetwork-within-the]]).

### 1-2. 필요성
NMPU가 이론을 넘어 **임상 표적**이 되려면 각 component의 **인간 신경 biomarker**가 필요하다. 이는 비만 환자를 "어느 축이 망가졌는가"로 분류해 맞춤 치료([[proposal-ttis-feeding-reward-circuits|tTIS]]·DTx·약물)를 매칭하는 정밀의학의 전제이며, 현재 미확립이다.

## 2. 독창성·창의성 및 차별성

> **핵심 차별성** — ① **연구책임자 자체 이론**(BioEssays 2024)을 검증하는 연구로 독창성·주도권 명확. ② 보상을 스칼라로 보는 주류와 달리 **4축 분해**를 인간에서 직접 검증. ③ **계산모델 + 7T fMRI + 인간 침습 전기생리 + NHP**의 4중 방법 삼각측량. ④ 마우스([[kim-2024-normative-framework-dissociates-need]])→NHP([[ha-2024-hypothalamic-neuronal-activation-non-human]])→인간의 종간 검증 사슬 보유.

- 마우스 검증의 인간 번역이라는 명확한 **연속선상 후속**.
- 결과물(component-특이 biomarker)이 자매 과제([[proposal-ttis-feeding-reward-circuits|tTIS]] 표적 선정, DTx 층화)의 **공통 기반**.

## 3. 연구개발 목표

### 3-1. 최종 목표
NMPU 4 component(Need·Motivation·Pleasure·Utility)의 **인간 신경 substrate**를 규명하고, 이를 parameterize한 계산모델로 개인의 섭식 행동·비만 위험을 예측하며, **component-특이 biomarker로 비만을 정밀 분류**한다.

### 3-2. 연차별 목표 (5년)
| 연차 | 목표 | 대응 Aim |
|---|---|---|
| **1–2년** | 4축을 분리하는 계산모델 + 인간 행동 패러다임 확립 | Aim 1 |
| **2–4년** | 7T fMRI로 4축의 비침습 신경 지도(시상하부 아핵 포함) | Aim 2 |
| **3–5년** | 인간 침습 전기생리 component biomarker + NHP 세포 접지 | Aim 3 |

## 4. 연구개발 내용 및 방법 (연차별)

### Aim 1 (1–2년) — 계산모델 + 행동 패러다임
- **내용**: [[kim-2024-normative-framework-dissociates-need|normative model]]을 인간 확장, [[weber-2025-interoceptive-origin-reinforcement-learning|interoceptive RL]]·belief-state([[blanco-pozo-2024-dopamine-independent-effect-rewards-choices]]) 통합; Need(공복)·Motivation(노력)·Pleasure(쾌락)·Utility(가치-비용)를 분리하는 과제 설계.
- **성공지표**: 4 component identifiable 분리(parameter recovery 통과) + 행동 readout.

### Aim 2 (2–4년) — 7T fMRI 비침습 매핑
- **내용**: 건강인+비만([[lee-2023-obesity-mechanism-after-hypothalamic|HD 코호트]] 포함)에서 7T로 시상하부 아핵(ARC/DMH/LH) 분해, 4축 가설 매핑([[bae-2019-glucagon-like-peptide-1-receptor]]·[[thanarajah-2019-food-intake-recruits-orosensory]] 패러다임).
- **성공지표**: 마우스 유래 축 배정의 인간 재현(또는 인간 특이 재배치 정량).

### Aim 3 (3–5년) — 인간 침습 + NHP 접지
- **내용**: 이식 전극 환자([[person-halpern-casey|Halpern]] 협업) NAc·OFC·(가능 시)시상하부 기록으로 component biomarker 검증; [[ha-2024-hypothalamic-neuronal-activation-non-human|NHP]] 단일뉴런으로 세포 접지.
- **성공지표**: 4축 인간 침습 biomarker 확립 + NHP 정합.

## 5. 연구 추진전략 및 위험관리
- **전략**: 계산모델(Aim1)→비침습 영상(Aim2)→침습·세포(Aim3)의 해상도 상향. 마우스·NHP·인간 종간 삼각.
- **위험·대응**:
  - 인간 시상하부 심부·소형 → 7T fMRI·NHP 세포 접지.
  - component 표상 중첩([[liu-2026-granular-motivational-interaction-and]]) → 과제 직교화 + 모델 identifiability 분석.
  - 인간 iEEG 접근 제한([[person-halpern-casey]]) → 수술 환자 piggyback·국제 협업.

## 6. 연구역량 및 인프라
- **연구책임자([[person-choi-hyung-jin|최형진]])**: NMPU 이론 제안자([[kim-2024-unified-theoretical-framework-underlying-regulation]])·마우스 검증([[kim-2024-normative-framework-dissociates-need]]·[[lee-2023-lateral-hypothalamic-leptin-receptor]])·NHP([[ha-2024-hypothalamic-neuronal-activation-non-human]])·인간 fMRI([[bae-2019-glucagon-like-peptide-1-receptor]]·[[lee-2023-obesity-mechanism-after-hypothalamic]]) 전 라인 보유.
- **협력**: 인간 침습 신경조절([[person-halpern-casey|Halpern]]), 계산신경과학(RL 모델).
- **인프라**: 7T MRI, NHP 시설, 임상 비만 코호트, 계산 클러스터.

## 7. 기대효과 및 활용방안
- **학술**: 동기의 다요소 분해를 인간에서 검증한 첫 통합 연구 — NMPU의 인간 정착.
- **임상**: component-특이 biomarker → 비만 **정밀 분류·맞춤 치료** 매칭(tTIS·DTx·약물).
- **확산**: 자매 과제([[proposal-ttis-feeding-reward-circuits]]·[[proposal-glp1ra-rebound-microbiota]]·[[proposal-food-insecurity-cross-species]])의 공통 이론·측정 기반; 식락학 교재 [[overview-sikrakhak-book-project|Ch 13–15]] 연계.

## 8. 연구비 (예시 — 작성 시 조정)
- 규모: 중견연구 가정 **연 ~1.5–2억원 × 5년**.
- 항목: 인건비(박사후·대학원생·계산 연구원), 7T MRI 사용료, NHP 사육·실험, 인간 iEEG 임상(IRB·피험자), 전산(모델링·클러스터).

## 9. 참고문헌 (wiki 내 근거)
[[kim-2024-unified-theoretical-framework-underlying-regulation]] · [[kim-2024-normative-framework-dissociates-need]] · [[lee-2023-lateral-hypothalamic-leptin-receptor]] · [[weber-2025-interoceptive-origin-reinforcement-learning]] · [[gershman-2024-explaining-dopamine-prediction-errors-beyond]] · [[blanco-pozo-2024-dopamine-independent-effect-rewards-choices]] · [[liu-2026-granular-motivational-interaction-and]] · [[shivacharan-2022-pilot-study-of-responsive-nucleus]] · [[parker-2022-appetitive-mapping-of-the-human]] · [[nho-2026-human-orbitofrontal-neural-activity-is]] · [[huang-2021-the-insulo-opercular-cortex-encodes]] · [[barbosa-2023-an-orexigenic-subnetwork-within-the]] · [[ha-2024-hypothalamic-neuronal-activation-non-human]] · [[bae-2019-glucagon-like-peptide-1-receptor]] · [[lee-2023-obesity-mechanism-after-hypothalamic]]

## 관련 페이지
- [[proposal-nmpu-human-translation]] — 동일 과제의 과학 상세(가설·Aim·기전) 버전.
- [[overview-future-research-directions]] — 상위 로드맵(Tier 2 #4).
- [[concept-need-motivation-pleasure-utility]] — 본 과제가 인간으로 옮기는 framework.
- [[person-choi-hyung-jin]] · [[person-halpern-casey]] — 연구진·협력.
- [[proposal-ttis-nrf-junggyeon]] — 자매 과제의 중견연구 양식 버전.
