---
title: "[연구계획서] 비침습 시간간섭자극(tTIS)을 이용한 인간 시상하부·측좌핵 섭식·보상 회로 조절"
type: proposal
created: 2026-06-02
updated: 2026-06-02
---

> [!takeaway] 연구 방향 관점의 핵심
> 위키 [[overview-future-research-directions|향후 연구 방향]] Tier 3 #7의 구체화. 핵심 설계 원리: TI의 약점([[vieira-2024-temporal-interference-stimulation-disrupts|Vieira 2024]] — 인간 dose에서 발화율 불변·timing만·주로 **desynchronize**, tACS보다 ~80% 약)을 **이미 인간에서 확인된 병적 동기 표적**([[shivacharan-2022-pilot-study-of-responsive-nucleus|NAc 저주파=LOC eating biomarker]], [[talakoub-2017-lateral-hypothalamic-activity-indicates|LHA hunger=beta/gamma 리듬]])과 정합시켜 **"활성화"가 아닌 "병적 동기 차단"**으로 재정의. 즉 [[person-halpern-casey|Halpern]]의 침습 responsive NAc DBS를 **비침습 tTIS로 번역**. 사용자 lab의 심부 섭식회로 전문성·[[ha-2024-hypothalamic-neuronal-activation-non-human|NHP 플랫폼]]·인간 fMRI/iEEG 접근이 결정적 자산.

# [연구계획서] 비침습 tTIS 기반 인간 섭식·보상 회로 조절

## 1. 연구 제목
**시간간섭자극(temporal interference stimulation, tTIS)을 이용한 인간 측좌핵·내측시상하부의 비침습 폐루프 신경조절: 병적 동기 차단을 통한 난치성 과식 치료 플랫폼 개발**

## 2. 연구 배경 및 필요성
- 비만·loss-of-control(LOC) eating의 침습 신경조절은 효과가 입증되고 있으나([[shivacharan-2022-pilot-study-of-responsive-nucleus|Nat Med 2022]]: NAc 저주파 biomarker triggered rDBS로 LOC −80%대), **개두·이식의 침습성**이 보급의 근본 장벽이다([[concept-deep-brain-stimulation]]·[[concept-responsive-neurostimulation]]).
- **tTIS**([[concept-temporal-interference-stimulation]])는 두 kHz carrier의 차주파 envelope(Δf)으로 표층 피질을 보존하며 심부를 초점·조향 자극하는 유일한 비침습 심부자극 후보다. 인간 해마에서 표적·조향·기능 변화가 실증됐고([[violante-2023-non-invasive-temporal-interference|Violante 2023]]), 설치류 선조체에서 phasic 도파민 ~40%↓가 확인됐다([[kwak-2023-effect-of-temporal-interference|Kwak 2023]]).
- 그러나 TI/tTIS 문헌 전체([[zhu-2023-a-mini-review-recent-advancements]]·[[guo-2023-a-novel-non-invasive-brain]]·[[hummel-2024-non-invasive-deep-brain]])가 다룬 심부 표적은 **해마·선조체·STN뿐 — 시상하부·VTA·NAc 섭식·보상 회로는 어느 연구도 다루지 않은 완전 공백**이다. 이 공백이 본 연구의 기회다.

## 3. 선행연구 현황과 결정적 긴장(critical tension)
| 축 | 긍정 근거 | 냉정한 한계 |
|---|---|---|
| 심부 도달 | [[violante-2023-non-invasive-temporal-interference\|인간 해마 5 Hz 조향]] · cadaver 검증 | 인간 in-brain field <1 V/m([[guo-2023-a-novel-non-invasive-brain]]) |
| 신경조절 | [[kwak-2023-effect-of-temporal-interference\|선조체 DA ~40%↓]] | 영장류에서 발화율 불변·**timing만**([[vieira-2024-temporal-interference-stimulation-disrupts]]) |
| 효능 | 표적별 가소성·entrain·disrupt([[hummel-2024-non-invasive-deep-brain]]) | **tACS보다 ~80% 약**(HF shunting+불완전 demodulation) |
| 강화 기법 | [[luff-2024-pulse-width-modulated-temporal\|PWM-TI ~40%↑]]·multi-electrode focality +54–70% | PV 뉴런 무반응·기전 미해결 |

→ **설계적 결론**: 인간 dose tTIS는 심부 뉴런을 "켤" 수 없다(rate 불변). 그러나 Vieira는 tTIS가 **진행 중 리듬을 desynchronize**함을 보였다. 따라서 표적은 **"병적 동기(pathological synchrony)"**여야 한다. 다행히 인간 섭식·보상 회로에는 이미 두 개의 병적 동기 biomarker가 보고돼 있다:
1. **NAc 저주파(delta/theta)** = LOC eating 직전 biomarker([[shivacharan-2022-pilot-study-of-responsive-nucleus]]·[[concept-nucleus-accumbens]]).
2. **LHA beta/low-gamma** = 배고픔 상태 리듬(satiety=alpha)([[talakoub-2017-lateral-hypothalamic-activity-indicates]]).

## 4. 연구 가설
> **tTIS는 인간 NAc/내측시상하부의 병적 저주파·beta 동기를 비침습·초점·상태의존적으로 disrupt하여, 음식 cue 반응성과 LOC eating을 감소시킬 수 있다 — 침습 responsive DBS의 비침습 등가물.**

## 5. 연구 목표 (Specific Aims)

### Aim 1 — 표적 도달 가능성: montage·dose 최적화 + cadaver/phantom 검증 *(In silico/ex vivo)*
- 개인 머리 모델에서 NAc·medial hypothalamus로 envelope peak를 **조향**하는 multi-electrode montage 최적화(focality +54–70% 근거: [[guo-2023-a-novel-non-invasive-brain]]). **PWM-TI**([[luff-2024-pulse-width-modulated-temporal]])로 동일 전류 대비 field 강화.
- cadaver SEEG로 심부 envelope field 직접 검증(방법론 선례: [[violante-2023-non-invasive-temporal-interference]]).
- **성공 지표**: 두피 내약 전류(≤~7 mA, [[vieira-2024-temporal-interference-stimulation-disrupts]] 인간 한도)에서 표적 Δf field가 off-target 대비 유의 우세.

### Aim 2 — 기전 검증: NHP 단일뉴런 + FSCV + 폐루프 *(macaque)*
- [[ha-2024-hypothalamic-neuronal-activation-non-human|기존 macaque 플랫폼]]에서 NAc/LH에 tTIS 적용 + 동시 단일뉴런 기록·FSCV([[kwak-2023-effect-of-temporal-interference]] 방식)·국소 LFP.
- 검증 질문: (a) tTIS가 표적 병적 동기를 **desynchronize**하는가(Vieira 예측), (b) phasic DA·동기 행동을 조절하는가, (c) **biomarker-triggered 폐루프 > 상시 자극**인가([[concept-responsive-neurostimulation]] 논리), (d) **PWM-TI vs classic TI** 효율.
- **성공 지표**: 표적 oscillation PLV 감소 + food-motivated 행동 변화의 인과적 연결.

### Aim 3 — 인간 개념증명: MRI-유도 상태의존 tTIS pilot *(human)*
- 대상: 난치성 LOC eating/비만(또는 [[concept-hypothalamic-obesity|시상하부성 비만]] — [[lee-2023-obesity-mechanism-after-hypothalamic|HD 코호트]]에서 reward 회로 잔존 확인). 
- 설계: MRI-유도 NAc 저주파(또는 LHA beta) biomarker를 표적하는 **상태의존(closed-loop) tTIS**([[hummel-2024-non-invasive-deep-brain]] 권고), sham-controlled crossover.
- 판독: 음식 cue fMRI([[bae-2019-glucagon-like-peptide-1-receptor]]·[[lee-2023-obesity-mechanism-after-hypothalamic]] 패러다임), 포만 VAS, LOC 빈도, attention/억제(Go-NoGo).
- **성공 지표**: 표적 oscillation power↓ + 음식 cue 뇌반응·LOC episode 감소.

## 6. 예상 결과 및 해석
- Aim1: 인간 NAc/시상하부 조향 가능 montage + PWM-TI dose 확립(또는 도달 불가의 정량적 한계 규명).
- Aim2: tTIS가 보상회로 병적 동기를 비침습 disrupt하며 폐루프가 우월함을 영장류에서 인과 입증.
- Aim3: 비침습 tTIS가 인간 음식 cue 반응성·LOC을 줄이는 첫 증거 → DTx([[concept-digital-therapeutics]]) 병용 가능한 비침습 electroceutical.

## 7. 한계·위험 및 대응 (Risk & Mitigation)
| 위험 | 근거 | 대응 |
|---|---|---|
| 인간 field subthreshold | [[vieira-2024-temporal-interference-stimulation-disrupts\|~80% 약]] | "활성화" 아닌 **desynchronization** 표적(subthreshold로 달성 가능); PWM-TI·multi-electrode·최대 내약 전류 |
| 심부·정중선 표적 난이도 | NAc·시상하부 깊음 | 전류비 steering + 개인 머리 모델(Aim1) |
| off-target HF conduction block | [[guo-2023-a-novel-non-invasive-brain]] | montage 최적화 + NHP 검증(Aim2) |
| 기전 불확실·PV 무반응 | [[concept-temporal-interference-stimulation]] | NHP 단일뉴런으로 직접 측정 |
| 정동 부작용(시상하부) | [[parvizi-2022-complex-negative-emotions-induced\|복내측 시상하부 음성정동]] | NAc 우선·시상하부는 외측(LHA) 한정·affect 모니터링 |

## 8. 연구 일정 (5년)
- **Y1**: Aim1 모델링·phantom·cadaver.
- **Y2–3**: Aim2 NHP 기전·폐루프·PWM-TI.
- **Y3–5**: Aim3 인간 pilot(IRB·sham crossover).

## 9. 기대효과 및 의의
- **세계 최초 비침습 인간 섭식·보상 심부회로 신경조절** — [[person-halpern-casey|Halpern]] 침습 rDBS의 비침습 등가물.
- [[concept-need-motivation-pleasure-utility|NMPU]]의 Pleasure(NAc)·Need(시상하부) 축을 인간에서 **비침습 조작**하는 도구 → 이론 검증 + 치료 동시.
- DTx·약물([[concept-glp-1|GLP-1RA]])과 병용 가능한 회로 표적 electroceutical 플랫폼.
- 식락학 교재 [[overview-sikrakhak-book-project|Ch 25(비만 근본 치료)]]의 직접 연구 기반.

## 관련 페이지
- [[proposal-ttis-nrf-junggyeon]] — 본 과제의 한국연구재단 **중견연구** 제출 양식 버전.
- [[overview-future-research-directions]] — 본 계획서의 상위 로드맵(Tier 3 #7).
- [[concept-temporal-interference-stimulation]] · [[concept-responsive-neurostimulation]] · [[concept-deep-brain-stimulation]] — 핵심 방법 hub.
- [[vieira-2024-temporal-interference-stimulation-disrupts]] · [[violante-2023-non-invasive-temporal-interference]] · [[kwak-2023-effect-of-temporal-interference]] · [[luff-2024-pulse-width-modulated-temporal]] · [[hummel-2024-non-invasive-deep-brain]] — 근거 논문.
- [[shivacharan-2022-pilot-study-of-responsive-nucleus]] · [[talakoub-2017-lateral-hypothalamic-activity-indicates]] — 표적 biomarker 원전.
- [[concept-nucleus-accumbens]] · [[concept-lateral-hypothalamus]] · [[concept-hypothalamic-obesity]] — 표적 회로.
- [[person-grossman-nir]] · [[person-halpern-casey]] · [[person-choi-hyung-jin]] — 핵심 인물.
