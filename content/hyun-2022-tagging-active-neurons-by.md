---
title: "Hyun et al. 2022 — soma-targeted Cal-Light로 활성 뉴런 태깅"
type: paper
created: 2026-06-02
updated: 2026-06-02
source: raw/2020 Nature Communications. Tagging active neurons by soma-targeted Cal-Light.pdf
authors: [Jung Ho Hyun, Kenichiro Nagahama, Ho Namkung, Hyung-Bae Kwon]
year: 2022
---

> [!takeaway] 연구 방향 관점의 핵심
> **방법론 도구** — Cal-Light는 **칼슘(활성) AND 청색광의 동시 검출**을 영구 유전자 발현으로 바꿔 "특정 행동 시점에 활동한 뉴런"을 태깅하고, 이후 **재활성/침묵(tag-then-reactivate/silence)** 으로 인과 조작을 가능케 한다. soma-targeting(KA2/Kv2.1)이 수상돌기 배경을 줄여 SNR↑·필요 광시간↓. 사용자에게의 함의: 섭식·보상 시 활동한 시상하부(AgRP/POMC/LH)·VTA/NAc 뉴런을 **시점 특이적으로 태깅 후 조작** — [[concept-need-motivation-pleasure-utility|NMPU]] 회로 인과 검증의 도구. 조건부 KI 마우스로 cell-type 특이 태깅(AgRP-Cre 등) 가능. ⚠️ raw 파일명은 2020이나 실제 출판은 **Nat Commun 2022**. 교신 Kwon lab, 한국(DGIST·고려대) 연계 강함.

# Hyun et al. 2022 — soma-targeted Cal-Light

## 한 줄 요약
Hyun JH … **Kwon H-B** (Johns Hopkins·MPFI; lead Jung Ho Hyun=현 DGIST), *Nat Commun* 13:7692. **Cal-Light**(Ca²⁺ AND light "AND gate" 분자 스위치)에 **soma-targeting**을 더해 체세포 활동전위 기반 태깅의 배경↓·특이도↑. 활성 뉴런을 영구 유전자 접근(EGFP·NpHR·ChrimsonR)으로 표지.

## 핵심 내용

### 기전
- 막결합 TM–CaM–TEV-N–AsLOV2–TEVseq–**tTA** + 세포질 M13–TEV-C. **Ca²⁺↑** → CaM-M13 결합 → split TEV 재구성; **청색광(~470 nm)** → AsLOV2 Jα 풀림 → TEVseq 노출 → TEV 절단 → tTA 방출 → TetO/TRE reporter 발현. **Ca²⁺·광 둘 다** 필요.
- **soma-targeting**: KA2(150-aa) 또는 Kv2.1(65-aa) motif로 체세포막 농축 → 수상돌기/시냅스 Ca²⁺ 배경 억제, 국소 단백질 밀도↑로 반응성↑. **ST-KA2** 최저 배경·최고 SNR로 선택.

### 검증 (마우스)
- 배양·organotypic slice; in vivo: M1 lever-press(NpHR 침묵→학습 운동 손상, 가역), 해마 contextual fear(NpHR 침묵→freezing↓; ChrimsonR 재활성→novel context freezing 유발), mPFC 사회행동(침묵→사회선호↓), KA seizure(태깅 뉴런 침묵→발작 억제).
- **조건부 ST-Cal-Light KI 마우스**(GtROSA26, lox-stop-lox) → Emx1-Cre·PV-Cre 교배로 cell-type 특이 태깅.

### 주요 수치
- SNR: ST-KA2가 원조 Cal-Light 대비 배양 **1.8×**·slice **2×**.
- 유도 자극 감소: **~75 spikes**(원조 ~900 spikes). 공포조건화 **광 15초(5초×3)** 로 행동 인과 충분.
- AsLOV2 회복 30–60초 → 1–2초 펄스·~30초 간격 최적. KI cell-type 표지 특이도 Emx1 **86%**·PV **82%**.

## 관련 페이지
- [[concept-activity-molecular-registration]] — 활성↔분자/유전 접근 연결 방법론 hub(Cal-Light=**전향적 활성 태깅**, CaRMA/TRU-FACT=후향적 분자정체 정합과 상보).
- [[jung-2024-dopamine-mediated-formation-of-a]] — 본 Cal-Light로 NAc^shelter ensemble을 태깅한 같은 lab 응용.
- [[xu-2020-behavioral-state-coding-by]] — 활성↔정체 연결 계열(CaRMA).
- [[concept-need-motivation-pleasure-utility]] — tag-then-manipulate가 검증하는 동기 회로.
- [[concept-npy-agrp-neurons]] · [[concept-pomc-neurons]] · [[concept-lateral-hypothalamus]] · [[concept-nucleus-accumbens]] — 섭식·보상 적용 후보 회로.
- [[person-kwon-hyung-bae]] — 교신저자.
