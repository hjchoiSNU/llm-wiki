---
title: "활성–분자정체 정합 (Activity–Molecular Registration: CaRMA · TRU-FACT)"
type: concept
created: 2026-06-02
updated: 2026-09-02
aliases: [activity-molecular registration, CaRMA, TRU-FACT, calcium-RNA registration, 활성 분자정체 정합, in vivo imaging spatial transcriptomics alignment]
---

> [!takeaway] 연구 방향 관점의 핵심
> **in vivo 기능 영상(무엇을 하는가)** 과 **공간전사체/scRNA-seq(누구인가)** 를 같은 뉴런에서 잇는 방법론 — 기능 동역학을 분자 cell-type·투사 정체에 매핑한다. 사용자에게 결정적: GRIN·miniscope로 기록하는 **시상하부 feeding 회로 뉴런(AgRP/POMC/LH LepR 등)에 사후 분자정체를 부여** → [[concept-hypomap|인간/마우스 atlas]]와 functional dynamics를 연결하고, [[concept-need-motivation-pleasure-utility|NMPU]] 4축을 세포타입에 mapping하는 [[proposal-nmpu-human-translation|NMPU 인간 번역]]의 핵심 측정 기술. 위키에 두 구현이 있다: **CaRMA**([[xu-2020-behavioral-state-coding-by|Sternson 2020]], 칼슘+RNA-FISH 직접) vs **TRU-FACT**([[wang-2026-multimodal-alignments-of-in|Schnitzer 2026]], 범용·통계적·투사 포함).

# 활성–분자정체 정합 (Activity–Molecular Registration)

## 한 줄 요약
동일 개별 뉴런에서 **in vivo 활성**(2-photon/miniscope 칼슘)과 **분자 정체**(다중 RNA-FISH/MERFISH)·(선택적으로) **투사 표적**(RNA-barcode)을 정합하는 방법론. 기능(활성)과 정체(transcriptome)의 분리라는 신경과학의 오랜 간극을 메운다.

## 왜 필요한가
- **기능 영상**: 뉴런이 hunger·cue·reward에 어떻게 반응하는지 알려주나 **정체 모름**(pan-neuronal GRIN 영상은 Cre 비의존).
- **공간전사체/atlas**: 세포타입을 알려주나 **활성 모름**(고정 조직).
- 둘을 같은 세포에서 연결 → "**이 hunger-반응 뉴런은 AgRP인가 LH LepR인가, 어디로 투사하는가**" 가 가능.

## 위키 내 두 구현

### CaRMA (Calcium and RNA Multiplexed Activity) — [[xu-2020-behavioral-state-coding-by|Xu/Sternson 2020]]
- in vivo GRIN 2-photon GCaMP 볼륨 영상 → ex vivo↔in vivo 정합 → **반복 multiplexed RNA-FISH(12-plex)** 로 영상 뉴런마다 정량 유전자 프로파일.
- PVH에서 시연 → **grouped-ensemble coding**·Npy1r conductor 발견의 기반.
- 직접 FISH 기반, 표적 유전자 패널(plex 제한), 단일 영역 정밀.

### TRU-FACT (Total Registration Under Functional Activity, Connectivity, Transcriptomics) — [[wang-2026-multimodal-alignments-of-in|Wang/Schnitzer 2026]]
- **Optomechanical tissue-handling**(6 자유도 평행화) + **Soma-print**(이웃 기하 graph fingerprint 매칭) + **per-match 통계**(확률·p·likelihood ratio).
- 2P·microendoscope·microprism·**mesoscope·freely-behaving miniature 2P** ↔ **HCR-FISH·MERFISH** + **RNA-barcode retroAAV projection**.
- 신피질에서 10,522 cells 정합(precision 98%·recall 97%). 범용·대규모·통계적 신뢰도·투사 포함.

## 비교
| | CaRMA (Xu 2020) | TRU-FACT (Wang 2026) |
|---|---|---|
| 분자 readout | 반복 RNA-FISH(12-plex) | HCR-FISH·**MERFISH(high-plex)** |
| 투사 매핑 | 없음 | **RNA-barcode retroAAV** |
| 매칭 원리 | 영상 기반 정합 | **Soma-print graph** + 통계 |
| 규모 | PVH 수백 뉴런 | **10,522 cells**·13 mice |
| freely-behaving | (head-fixed) | **지원**(miniature 2P) |
| 신뢰도 지표 | — | **per-cell p·likelihood** |
| 시연 영역 | 시상하부 PVH | 신피질(심부 prep 기술 적용 가능) |

> 주의: bioRxiv 파일이 "CaRMA"로 명명됐으나 **그 논문의 방법은 TRU-FACT**다(CaRMA는 Xu 2020). 두 방법은 같은 목표의 별개 구현.

## 사용자 lab 함의
- 시상하부 feeding 회로 in vivo 영상([[ha-2024-hypothalamic-neuronal-activation-non-human|NHP]]·[[cheon-2025-lateral-hypothalamus-and-eating-cell|LH]])에 **분자 cell-type·projection 부여** → atlas([[concept-hypomap]]·[[littleton-2025-from-identity-to-function-unveiling]])와 활성 연결.
- [[proposal-nmpu-human-translation|NMPU 인간 번역]] Aim의 측정 backbone: Need/Motivation/Pleasure/Utility 활성을 세포타입에 mapping.

## 인접 계열 — 활성 의존 태깅 (prospective)
사후 분자정체 정합(CaRMA/TRU-FACT)과 달리, **활동한 뉴런을 그 시점에 영구 유전자 접근으로 표지**해 이후 재활성/침묵하는 prospective 접근.
- [[hyun-2022-tagging-active-neurons-by]] — soma-targeted **Cal-Light**(Ca²⁺ AND 광 → tTA → reporter); tag-then-manipulate.

## 관련 페이지
- [[xu-2020-behavioral-state-coding-by]] — CaRMA 원전(PVH grouped-ensemble).
- [[hyun-2022-tagging-active-neurons-by]] — Cal-Light(활성 의존 태깅, 인접 계열).
- [[wang-2026-multimodal-alignments-of-in]] — TRU-FACT 원전(범용·투사·통계).
- [[concept-hypomap]] — 정합 대상이 되는 단일세포 atlas.
- [[littleton-2025-from-identity-to-function-unveiling]] — "identity→function" atlas 시대.
- [[proposal-nmpu-human-translation]] — 본 방법을 NMPU 4축 매핑에 적용.
- [[proposal-lh-nac-nmpu-neuron-discovery]] — 세 방법(CaRMA·TRU-FACT·Cal-Light)을 LH·NAc NMPU 세포 발굴에 통합 적용.
- [[concept-need-motivation-pleasure-utility]] — 활성↔정체 연결이 검증하는 framework.
- [[concept-npy-agrp-neurons]] · [[concept-pomc-neurons]] · [[concept-lateral-hypothalamus]] · [[concept-paraventricular-nucleus]] — 적용 대상 feeding 세포타입.
- [[bhatti-mazo-2026-feature-specific-threat-coding-in]] — **사전 유전 접근(prospective genetic access)** 계열의 대안 전략: `Crhr2^Flp × marker^Cre` 교차 유전학으로 **분자 아형별 freely-moving miniscope**를 돌리고, 같은 아형에 rabies+STPT 입력지도를 붙여 분자×공간×기능×입력을 정합. CaRMA/TRU-FACT의 사후 정합(마커 무편향)과 trade-off — 마커를 미리 알아야 하지만 광유전 인과 조작까지 직결된다 (Nature 2026). → [[concept-lateral-septum]]
