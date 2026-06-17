---
title: "[연구계획서] NMPU 4-component 동기 framework의 인간 번역 — 침습 전기생리·7T fMRI·계산모델"
type: proposal
created: 2026-06-02
updated: 2026-06-02
---

> [!takeaway] 연구 방향 관점의 핵심
> [[overview-future-research-directions|향후 연구 방향]] Tier 2 #4의 구체화이자 **사용자 lab의 가장 signature한 베팅** — 자체 이론 [[concept-need-motivation-pleasure-utility|NMPU]](Need·Motivation·Pleasure·Utility)를 **마우스 검증**([[kim-2024-normative-framework-dissociates-need|AgRP=Need, LH LepR=Motivation]])에서 **인간 신경 substrate**로 옮긴다. 가설: NMPU 4축이 인간 뇌에서 분리 가능한 신호(Need=내측시상하부, Motivation=LH, Pleasure=NAc, Utility=OFC/BLA)로 매핑되며, 이를 parameterize한 계산모델이 섭식·비만을 예측. [[person-halpern-casey|Halpern]] 인간 침습 전기생리 + 7T fMRI + [[weber-2025-interoceptive-origin-reinforcement-learning|interoceptive RL]]/belief-state 모델을 결합. 성공 시 **"어느 축이 망가졌는가"로 환자를 분류**해 맞춤 치료(DTx·약물·[[proposal-ttis-feeding-reward-circuits|tTIS]])를 매칭하는 정밀의학 기반.

# [연구계획서] NMPU 4-component 동기 framework의 인간 번역

## 1. 연구 제목
**Need–Motivation–Pleasure–Utility(NMPU) 동기 framework의 인간 신경 substrate 규명: 침습 전기생리·7T fMRI·계산모델 통합을 통한 섭식 동기의 분해와 비만 정밀 분류**

## 2. 배경 및 필요성
- **NMPU framework**: 동기 행동을 **Need(예측된 결핍)·Motivation(행동 추동)·Pleasure(쾌락)·Utility(가치·비용 통합)** 4 component로 분해한 사용자 lab 이론([[kim-2024-unified-theoretical-framework-underlying-regulation|BioEssays 2024]]·[[concept-need-motivation-pleasure-utility]]).
- **마우스 검증 완료**: [[kim-2024-normative-framework-dissociates-need|Sci Adv 2024]] — normative model fitting + 광유전으로 **ARC AgRP=Need(motivation 아님)**, **LH LepR=Motivation**([[lee-2023-lateral-hypothalamic-leptin-receptor]]) 분리. [[liu-2026-granular-motivational-interaction-and|granular motivational states]]가 자매 framework.
- **인간 substrate의 공백**: 4 component가 인간 뇌에서 어떻게 분리·표상되는지 미확립. 다만 인간 침습 전기생리가 개별 노드를 이미 들여다봄 — NAc(Pleasure, [[shivacharan-2022-pilot-study-of-responsive-nucleus]]·[[parker-2022-appetitive-mapping-of-the-human]]), OFC(Utility/value, [[nho-2026-human-orbitofrontal-neural-activity-is]]), insula(내수용, [[huang-2021-the-insulo-opercular-cortex-encodes]]), dlHPC(orexigenic, [[barbosa-2023-an-orexigenic-subnetwork-within-the]]), vmPFC→NAc(충동조절, [[barbosa-2022-aberrant-impulse-control-circuitry]]).
- **필요성**: NMPU가 단일 이론을 넘어 **인간 치료 표적**이 되려면, 각 component의 인간 신경 biomarker가 필요하다. 이는 [[proposal-ttis-feeding-reward-circuits|tTIS]]·DTx 표적 선정의 전제.

## 3. 연구 가설
> **NMPU 4 component는 인간 뇌에서 분리 가능한 신경 substrate로 매핑된다 — Need=내측시상하부(ARC/DMH), Motivation=외측시상하부(LH), Pleasure=측좌핵(NAc), Utility=안와전두/기저외측편도(OFC/BLA) — 그리고 이를 parameterize한 계산모델이 개인의 섭식 행동·비만 위험을 예측한다.** ([[weber-2025-interoceptive-origin-reinforcement-learning|interoceptive RL]]·belief-state RPE를 모델 backbone으로.)

## 4. 연구 목표 (Specific Aims)

### Aim 1 — 계산모델 + 행동 패러다임: 4축 분리 *(computational + behavior)*
- **모델**: [[kim-2024-normative-framework-dissociates-need|normative model]]을 인간으로 확장, [[weber-2025-interoceptive-origin-reinforcement-learning|interoceptive RL]](primary/proxy/secondary reward, state- vs event-driven)·belief-state RPE([[gershman-2024-explaining-dopamine-prediction-errors-beyond]]·[[blanco-pozo-2024-dopamine-independent-effect-rewards-choices]]) 통합.
- **과제**: 인간에서 **Need(공복 조작)·Motivation(노력/willingness-to-work)·Pleasure(쾌락 평정)·Utility(가치-비용 선택)**를 분리 측정하는 행동 패러다임 설계.
- **성공지표**: 4 component를 식별가능(identifiable)하게 분리하는 모델 + 행동 readout 확립.

### Aim 2 — 7T fMRI: 4축의 비침습 신경 매핑 *(human imaging)*
- **대상**: 건강인 + 비만(또는 [[lee-2023-obesity-mechanism-after-hypothalamic|HD 코호트]]) — 7T 고해상으로 **시상하부 아핵(ARC/DMH/LH)** 분해.
- **방법**: Aim1 과제 중 [[bae-2019-glucagon-like-peptide-1-receptor]]·[[thanarajah-2019-food-intake-recruits-orosensory]] 패러다임으로 Need=내측시상하부, Motivation=LH, Pleasure=NAc, Utility=OFC/BLA 가설 매핑 검증.
- **성공지표**: 마우스 유래 축 배정이 인간 BOLD에서 분리 재현(또는 인간 특이적 재배치 정량).

### Aim 3 — 인간 침습 전기생리 + NHP 세포 접지 *(intracranial + NHP)*
- **인간**: 이식 전극(DBS/sEEG) 환자에서([[person-halpern-casey|Halpern]] 협업) NAc·OFC·(가능 시)시상하부 기록 — component-특이 신호 검증(NAc 저주파=Pleasure/Need biomarker [[shivacharan-2022-pilot-study-of-responsive-nucleus]], OFC gamma=Utility [[nho-2026-human-orbitofrontal-neural-activity-is]]).
- **NHP**: [[ha-2024-hypothalamic-neuronal-activation-non-human|macaque 플랫폼]]에서 LH/NAc 단일뉴런으로 인간 신호의 세포 수준 접지.
- **성공지표**: 4 component의 인간 침습 biomarker 확립 + NHP 세포 정합.

## 5. 예상 결과 및 해석
- Aim1: NMPU를 인간에서 식별가능하게 분리하는 계산-행동 도구.
- Aim2: 4축의 비침습 신경 지도(시상하부 아핵 포함).
- Aim3: component-특이 침습 biomarker → **"어느 축이 dysregulated인가"로 환자 분류** 가능.

## 6. 한계·위험 및 대응
| 위험 | 근거 | 대응 |
|---|---|---|
| 인간 시상하부 심부·소형 → 기록 난이도 | — | 7T fMRI(Aim2)·NHP 세포 접지(Aim3) |
| component 신경 표상 중첩 | [[liu-2026-granular-motivational-interaction-and]] | 과제 설계로 직교화 + 모델 identifiability 분석 |
| 인간 iEEG 접근 제한 | [[person-halpern-casey]] | 수술 환자 piggyback·국제 협업 |
| 모델 식별성(identifiability) | [[kim-2024-normative-framework-dissociates-need]] | parameter recovery·모델 비교 사전 검증 |

## 7. 연구 일정 (5년)
- **Y1–2**: Aim1 모델·행동 패러다임.
- **Y2–4**: Aim2 7T fMRI.
- **Y3–5**: Aim3 인간 침습 + NHP 접지.

## 8. 기대효과 및 의의
- 사용자 lab 이론(NMPU)의 **인간 신경 검증** — 이론을 치료 표적으로 전환.
- 각 component의 인간 biomarker → **비만 정밀 분류**(어느 축 dysregulation) → 맞춤 치료 매칭([[proposal-ttis-feeding-reward-circuits|tTIS]]·DTx·약물).
- 동기·보상 신경과학의 통합 계산 framework를 인간으로 확장.
- 마우스([[kim-2024-normative-framework-dissociates-need]])→NHP([[ha-2024-hypothalamic-neuronal-activation-non-human]])→인간 삼중 검증 모델.

## 관련 페이지
- [[proposal-nmpu-nrf-junggyeon]] — 본 과제의 한국연구재단 **중견연구** 제출 양식 버전.
- [[overview-future-research-directions]] — 상위 로드맵(Tier 2 #4).
- [[concept-need-motivation-pleasure-utility]] — 본 과제가 인간으로 옮기는 framework.
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] · [[kim-2024-normative-framework-dissociates-need]] · [[lee-2023-lateral-hypothalamic-leptin-receptor]] — 이론·마우스 검증(사용자 lab).
- [[weber-2025-interoceptive-origin-reinforcement-learning]] · [[gershman-2024-explaining-dopamine-prediction-errors-beyond]] · [[blanco-pozo-2024-dopamine-independent-effect-rewards-choices]] · [[liu-2026-granular-motivational-interaction-and]] — 계산모델 backbone.
- [[shivacharan-2022-pilot-study-of-responsive-nucleus]] · [[parker-2022-appetitive-mapping-of-the-human]] · [[nho-2026-human-orbitofrontal-neural-activity-is]] · [[huang-2021-the-insulo-opercular-cortex-encodes]] · [[barbosa-2023-an-orexigenic-subnetwork-within-the]] — 인간 침습 노드 근거.
- [[concept-nucleus-accumbens]] · [[concept-lateral-hypothalamus]] · [[concept-orbitofrontal-cortex]] · [[concept-basolateral-amygdala]] · [[concept-arcuate-nucleus]] — 4축 표적 회로.
- [[xu-2020-behavioral-state-coding-by]]([[wang-2026-multimodal-alignments-of-in|CaRMA/TRU-FACT]]) — 활성↔분자정체 정합 방법; Aim의 회로 측정 도구·grouped-ensemble 부호화 선례.
- [[person-choi-hyung-jin]] · [[person-halpern-casey]] — 연구진·협력.
- [[proposal-ttis-feeding-reward-circuits]] · [[proposal-glp1ra-rebound-microbiota]] · [[proposal-food-insecurity-cross-species]] — 자매 연구계획서.
