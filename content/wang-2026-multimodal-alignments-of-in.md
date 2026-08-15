---
title: "Wang et al. 2026 — TRU-FACT: in vivo 영상 × 공간생물학 세포 단위 정합 (bioRxiv)"
type: paper
created: 2026-06-02
updated: 2026-06-02
source: raw/2026 bioRxiv (CaRMA) Multimodal alignments of in vivo imaging and spatial biology datasets at cellular resolution.pdf
authors: [Lun Wang, Xiqian Jiang, Xiaochen Sun, "…", Mark J. Schnitzer]
year: 2026
---

> [!takeaway] 연구 방향 관점의 핵심
> **방법론 도구** — 같은 개별 뉴런의 **in vivo 활성 + 분자 정체(MERFISH/HCR-FISH) + 투사 표적(RNA-barcode retroAAV)**을 세포 단위·통계적 신뢰도로 연결하는 TRU-FACT 파이프라인. 사용자에게의 핵심: 시상하부 feeding 회로를 흔히 기록하는 **GRIN-렌즈·microendoscope·freely-behaving miniscope** 영상 뉴런에 사후 분자 cell-type(AgRP/POMC/LH 등)·projection을 부여 가능 → 섭식 상태 의존 활성을 분자정체에 매핑. [[proposal-nmpu-human-translation|NMPU 인간 번역]]·인간 atlas cross-validation([[concept-hypomap]])의 실험 도구이며, Sternson [[xu-2020-behavioral-state-coding-by|CaRMA]]의 차세대 일반화. ⚠️ raw 파일명 "CaRMA"는 오기 — 본 논문의 방법명은 **TRU-FACT**(CaRMA는 Xu 2020의 방법).

# Wang et al. 2026 — TRU-FACT (bioRxiv)

## 한 줄 요약
Wang L, Jiang X, Sun X … **Schnitzer MJ**(Stanford/HHMI), bioRxiv 2026 (doi 10.64898/2026.04.28.719500). **TRU-FACT**(Total Registration Under Functional Activity, Connectivity, and Transcriptomics) — in vivo intravital 영상과 사후 공간생물학 데이터에서 **동일 개별 세포를 대량·세포 단위로 정합**하는 실험+계산 파이프라인. (파일명 "CaRMA"는 오기.)

## 핵심 내용

### 문제
- in vivo 기능 영상과 공간전사체는 보통 별개 표본에서 수행 — 조직 변형·광학 수차·~10 µm 박절·영상 외형 차이로 **동일 세포 대량 정합이 미해결**, 신뢰도 지표 부재.

### 3가지 혁신
1. **Optomechanical tissue-handling**: in vivo 초점면과 사후 절단면을 평행화(6 자유도 추적). cranial window·microprism·**GRIN microlens** 워크플로 지원.
2. **Soma-print**: 각 세포의 이웃(~10+) 기하 관계를 graph fingerprint로 — 외형·대비 무관 매칭, 중등 변형에 강건, 2D/3D·mesoscope 확장, 수 분 내.
3. **통계 framework**: 매칭별 a-posteriori 확률·p-value·likelihood ratio.

### 정합 modality·검증
- 2-photon Ca²⁺(2P·microendoscope·microprism·**2P mesoscope ~4 mm²·freely-behaving miniature 2P**) ↔ **HCR-FISH(low-plex)·MERFISH(high-plex)** + **RNA-barcode retroAAV(8종)**로 projection mapping.
- 시연 영역: **신피질/운동피질**(skilled reaching). (시상하부 작업은 없음.)
- 검증: Drd1a-Cre×Ai14 희소 red(ground truth) + dense green jGCaMP8s.

### 주요 수치
- **10,522 세포** 정합(13 mice·5 in vivo prep) — 포유류 뇌 선행 최대.
- Optomechanical: 3,119 GCaMP 중 2,852 사후 재식별 → **>91% sensitivity**.
- Red ground-truth 778개 중 760 재식별 → **precision 98±1%·recall 97±2%**.

## 관련 페이지
- [[concept-activity-molecular-registration]] — 본 논문의 TRU-FACT가 속한 활성–분자정체 정합 방법론 hub(CaRMA 비교).
- [[xu-2020-behavioral-state-coding-by]] — Sternson **CaRMA**(Calcium+RNA Multiplexed) — 동일 목적(활성↔분자정체)의 선행/자매 방법.
- [[concept-hypomap]] — MERFISH/공간전사체·인간 atlas; TRU-FACT가 활성과 atlas 정체를 연결.
- [[proposal-nmpu-human-translation]] — in vivo 활성에 분자 cell-type 부여 = NMPU Aim의 측정 도구.
- [[ha-2024-hypothalamic-neuronal-activation-non-human]] · [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — 사용자 lab의 심부 영상·LH 세포타입 연구(적용 대상).
- [[concept-npy-agrp-neurons]] · [[concept-pomc-neurons]] · [[concept-lateral-hypothalamus]] — feeding 회로 분자정체·투사 매핑 후보.
- [[littleton-2025-from-identity-to-function-unveiling]] — "identity→function" atlas 시대와 직결.
- [[mueller-2025-privi-towards-general-purpose-video]] — 또 다른 신경과학 측정 도구 논문(행동 영상 자동 라벨링).
- [[liu-2025-castle-a-training-free-foundation-model]] · [[concept-computational-ethology]] — 행동 측 측정 인프라. 활성↔분자정체 정합(TRU-FACT)과 활성↔행동 정합이 짝을 이룸.
