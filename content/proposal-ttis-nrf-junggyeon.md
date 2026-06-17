---
title: "[중견연구 연구계획서] 비침습 tTIS 기반 인간 섭식·보상 회로 폐루프 신경조절"
type: proposal
created: 2026-06-02
updated: 2026-06-02
---

> [!takeaway] 연구 방향 관점의 핵심
> [[proposal-ttis-feeding-reward-circuits|tTIS 연구계획서]]를 **한국연구재단 중견연구**(개인기초, 최대 5년·연 3억 이내) 제출 양식으로 재구성한 초안. 과학적 핵심(병적 동기 차단 frame, Halpern 침습 rDBS의 비침습 등가물)은 동일하며, 본 페이지는 **필요성→독창성→연차별 목표·내용·방법→추진전략→연구역량→기대효과→연구비** 의 grant 섹션 구조로 정리. 모든 근거는 wiki 내부 페이지로 연결. 연구비·일정 수치는 양식 예시(작성 시 조정).

# [중견연구] 비침습 tTIS 기반 인간 섭식·보상 회로 폐루프 신경조절

- **국문 과제명**: 시간간섭자극(tTIS)을 이용한 인간 측좌핵·내측시상하부 병적 동기의 비침습 폐루프 차단과 난치성 과식 치료 플랫폼 개발
- **영문 과제명**: Non-invasive closed-loop temporal interference stimulation (tTIS) of human nucleus accumbens and medial hypothalamus for pathological-synchrony disruption in refractory overeating
- **사업유형**: 개인기초연구 — **중견연구** (5년, 연 3억원 이내 가정) · **연구책임자**: [[person-choi-hyung-jin|최형진]] (서울대 의대)
- **연구분야**: 신경과학 / 신경조절 / 비만·대사

---

## 1. 연구개발과제의 필요성

### 1-1. 국내외 연구개발 동향
- **침습 신경조절의 효능과 장벽**: 난치성 LOC(loss-of-control) eating에 측좌핵(NAc) 폐루프 심부자극이 LOC −80%대를 보였으나([[shivacharan-2022-pilot-study-of-responsive-nucleus]]·[[concept-responsive-neurostimulation]]), 개두·이식의 침습성이 보급 장벽([[concept-deep-brain-stimulation]]).
- **비침습 심부자극의 부상**: tTIS([[concept-temporal-interference-stimulation]])는 두 kHz carrier의 차주파 envelope으로 표층 보존·심부 초점·조향이 가능한 유일한 비침습 심부자극. 인간 해마 조향([[violante-2023-non-invasive-temporal-interference]]), 설치류 선조체 도파민 ~40%↓([[kwak-2023-effect-of-temporal-interference]]), 분야 전망([[hummel-2024-non-invasive-deep-brain]])이 보고됨.
- **결정적 공백**: TI/tTIS 문헌([[zhu-2023-a-mini-review-recent-advancements]]·[[guo-2023-a-novel-non-invasive-brain]])이 다룬 심부 표적은 **해마·선조체·STN뿐 — 시상하부·NAc 섭식·보상 회로는 전무**.

### 1-2. 필요성
GLP-1RA 등 약물 시대에도 **약물 무반응·중단 후 rebound·hedonic 과식**은 미충족 수요다. 비침습·표적·가역 신경조절은 약물·DTx와 병용 가능한 새 치료축이 될 수 있으나, 섭식·보상 심부회로에 적용된 바 없다.

## 2. 독창성·창의성 및 차별성

> **핵심 차별성 — TI의 약점을 표적 원리로 전환.** [[vieira-2024-temporal-interference-stimulation-disrupts|Vieira 2024]]는 인간 dose tTIS가 발화율을 바꾸지 못하고 **timing만·주로 desynchronize**하며 tACS보다 ~80% 약함을 보였다. 본 연구는 "회로를 켠다"는 비현실적 목표 대신, **이미 인간에서 확인된 병적 동기(pathological synchrony)를 차단**한다:
> - **NAc 저주파(delta/theta)** = LOC eating 직전 biomarker([[shivacharan-2022-pilot-study-of-responsive-nucleus]]·[[concept-nucleus-accumbens]])
> - **외측시상하부 beta/low-gamma** = 배고픔 상태 리듬(포만=alpha)([[talakoub-2017-lateral-hypothalamic-activity-indicates]])
>
> ⟹ tTIS = [[person-halpern-casey|Halpern]] 침습 responsive NAc DBS의 **비침습 등가물**. 이는 TI 분야 최초의 "desynchronization 표적" 설계이자, 섭식·보상 회로 최초 적용.

- **이론적 차별성**: [[concept-need-motivation-pleasure-utility|NMPU]]의 Pleasure(NAc)·Need(시상하부) 축을 인간에서 비침습 조작 → 치료이자 이론 검증.
- **방법적 차별성**: PWM-TI([[luff-2024-pulse-width-modulated-temporal]])·multi-electrode로 field 강화 + 상태의존 폐루프([[hummel-2024-non-invasive-deep-brain]]).

## 3. 연구개발 목표

### 3-1. 최종 목표
비침습 tTIS로 인간 NAc·내측시상하부의 병적 동기를 상태의존적으로 차단하여 음식 cue 반응성·LOC eating을 감소시키는 **폐루프 electroceutical 플랫폼**을 개발하고 개념증명(proof-of-concept)한다.

### 3-2. 연차별 목표 (5년)
| 연차 | 목표 | 대응 Aim |
|---|---|---|
| **1년** | 개인 머리모델 기반 NAc·시상하부 조향 montage·PWM-TI dose 확립, cadaver 검증 | Aim 1 |
| **2–3년** | NHP에서 tTIS의 표적 동기 disrupt·DA 조절·폐루프 우월성 인과 검증 | Aim 2 |
| **3–5년** | 환자 대상 MRI-유도 상태의존 tTIS 개념증명(sham crossover) | Aim 3 |

## 4. 연구개발 내용 및 방법 (연차별)

### Aim 1 (1년) — 표적 도달성: montage·dose 최적화 + cadaver 검증
- **내용**: 다전극 montage 최적화로 envelope peak를 NAc·medial hypothalamus에 조향(focality +54–70% 근거 [[guo-2023-a-novel-non-invasive-brain]]); PWM-TI로 동일 전류 대비 field 강화([[luff-2024-pulse-width-modulated-temporal]]).
- **방법**: 개인 MRI 기반 FEM E-field 모델링 → phantom → cadaver SEEG 직접 측정(선례 [[violante-2023-non-invasive-temporal-interference]]).
- **성공지표**: 내약 두피전류(≤~7 mA, [[vieira-2024-temporal-interference-stimulation-disrupts]] 한도)에서 표적 Δf field가 off-target 대비 유의 우세.

### Aim 2 (2–3년) — 기전: NHP 단일뉴런 + FSCV + 폐루프
- **내용**: tTIS가 표적 병적 동기를 desynchronize하는지, phasic DA·동기행동을 조절하는지, **biomarker-triggered 폐루프 > 상시**인지, PWM-TI vs classic TI 효율을 검증.
- **방법**: [[ha-2024-hypothalamic-neuronal-activation-non-human|기존 macaque 플랫폼]]에서 NAc/LH 단일뉴런·LFP·FSCV([[kwak-2023-effect-of-temporal-interference]] 방식) 동시 기록.
- **성공지표**: 표적 oscillation PLV 감소 + food-motivated 행동 변화의 인과 연결.

### Aim 3 (3–5년) — 인간 개념증명: MRI-유도 상태의존 tTIS
- **대상**: 난치성 LOC eating/비만(또는 [[concept-hypothalamic-obesity|시상하부성 비만]] — [[lee-2023-obesity-mechanism-after-hypothalamic|HD 코호트]]에서 reward 회로 잔존 확인).
- **방법**: MRI-유도 NAc 저주파(또는 LHA beta) biomarker 표적 **상태의존 tTIS**, sham-controlled crossover. 판독: 음식 cue fMRI([[bae-2019-glucagon-like-peptide-1-receptor]]·[[lee-2023-obesity-mechanism-after-hypothalamic]] 패러다임), 포만 VAS, LOC 빈도, Go/NoGo.
- **성공지표**: 표적 oscillation power↓ + 음식 cue 뇌반응·LOC episode 유의 감소.

## 5. 연구 추진전략 및 위험관리
- **전략**: in silico→ex vivo(Aim1) → NHP 인과검증(Aim2) → 인간 pilot(Aim3)의 단계적 위험 감축. PWM-TI·다전극·폐루프를 효능 강화 3축으로 병행.
- **위험·대응**:
  - field subthreshold([[vieira-2024-temporal-interference-stimulation-disrupts]]) → "활성화" 아닌 **desynchronization**(subthreshold 달성 가능) 표적, PWM-TI·최대 내약 전류.
  - 심부·정중선 표적 → 전류비 steering + 개인 머리모델.
  - 정동 부작용([[parvizi-2022-complex-negative-emotions-induced|복내측 시상하부 음성정동]]) → NAc 우선·외측(LHA) 한정·affect 모니터링.

## 6. 연구역량 및 인프라
- **연구책임자([[person-choi-hyung-jin|최형진]])**: 시상하부 섭식회로([[lee-2023-lateral-hypothalamic-leptin-receptor]]·[[kim-2024-glp-1-increases-preingestive-satiation]])·NMPU 이론([[kim-2024-normative-framework-dissociates-need]])·NHP 번역([[ha-2024-hypothalamic-neuronal-activation-non-human]])·인간 fMRI·DTx([[concept-digital-therapeutics]]) 다층 역량.
- **협력**: 비침습 자극 공학([[person-grossman-nir|Grossman]] 계열 TI/PWM-TI), 인간 침습 신경조절([[person-halpern-casey|Halpern]] 계열 biomarker), 신경외과·정신과·내분비.
- **인프라**: NHP 시설, 7T/3T MRI, 임상 비만 코호트·DTx 플랫폼.

## 7. 기대효과 및 활용방안
- **학술**: 세계 최초 비침습 인간 섭식·보상 심부회로 신경조절; TI 분야 desynchronization-표적 패러다임 정립.
- **임상·산업**: 약물·DTx 병용 가능한 비침습 electroceutical → 난치성 과식·시상하부성 비만의 새 치료축.
- **이론**: [[concept-need-motivation-pleasure-utility|NMPU]] 인간 비침습 검증 도구.
- **교육·확산**: 식락학 교재 [[overview-sikrakhak-book-project|Ch 25(비만 근본 치료)]] 연구 기반.

## 8. 연구비 (예시 — 작성 시 조정)
- 규모: 중견연구 가정 **연 ~1.5–2억원 × 5년**.
- 주요 항목: 인건비(박사후·대학원생), NHP 사육·실험, MRI 사용료, tTIS 장비·전극, 임상시험(IRB·피험자), 전산(E-field 모델링).
- *(실제 금액·항목은 공고 기준 및 기관 규정에 맞춰 확정.)*

## 9. 참고문헌 (wiki 내 근거 — 각 항목은 해당 출판 논문)
[[shivacharan-2022-pilot-study-of-responsive-nucleus]] · [[talakoub-2017-lateral-hypothalamic-activity-indicates]] · [[violante-2023-non-invasive-temporal-interference]] · [[kwak-2023-effect-of-temporal-interference]] · [[vieira-2024-temporal-interference-stimulation-disrupts]] · [[luff-2024-pulse-width-modulated-temporal]] · [[hummel-2024-non-invasive-deep-brain]] · [[guo-2023-a-novel-non-invasive-brain]] · [[zhu-2023-a-mini-review-recent-advancements]] · [[ha-2024-hypothalamic-neuronal-activation-non-human]] · [[kim-2024-normative-framework-dissociates-need]] · [[kim-2024-glp-1-increases-preingestive-satiation]] · [[lee-2023-obesity-mechanism-after-hypothalamic]] · [[parvizi-2022-complex-negative-emotions-induced]]

## 관련 페이지
- [[proposal-ttis-feeding-reward-circuits]] — 동일 과제의 과학 상세(가설·Aim·기전) 버전.
- [[overview-future-research-directions]] — 상위 로드맵(Tier 3 #7).
- [[concept-temporal-interference-stimulation]] · [[concept-responsive-neurostimulation]] · [[concept-nucleus-accumbens]] · [[concept-lateral-hypothalamus]] — 핵심 방법·표적 hub.
- [[person-choi-hyung-jin]] · [[person-halpern-casey]] · [[person-grossman-nir]] — 연구진·협력.
