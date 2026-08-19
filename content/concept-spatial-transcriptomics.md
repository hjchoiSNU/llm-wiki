---
title: Spatial transcriptomics (공간전사체)
type: concept
created: 2026-07-04
updated: 2026-08-19
aliases: [SRT, Visium, Xenium, MERFISH, spatial transcriptomics, snRNA-seq atlas]
---

> [!takeaway] 연구 방향 관점의 핵심
> 조직의 공간 좌표를 유지한 채 전사체를 측정해 **어떤 세포타입이 어디에 있는가**를 지도화하는 방법. 최형진 lab 관점에서 시상하부·NAc 등 식욕·보상 회로의 인간 조직 아틀라스를 만들고, rodent에서 얻은 회로·약물반응 지식을 인간 공간에 투영(transfer learning)하는 핵심 인프라.

# Spatial transcriptomics (공간전사체, SRT)

## 한 줄 요약
개별 세포/스팟의 유전자 발현을 **조직 내 공간 위치와 함께** 측정하는 기술군으로, snRNA-seq(세포타입 해상도)과 짝지어 세포타입의 해부학적 조직화·공간 도메인·세포간 신호(ligand-receptor)를 규명한다.

## 핵심 내용
- **주요 플랫폼**:
  - **Visium**(10x): spot 기반(여러 세포 혼합), 전사체 전장(whole-transcriptome). deconvolution 필요.
  - **Xenium / MERFISH / smFISH**: 단일세포~아세포 해상도, targeted panel.
- **통합 분석 파이프라인**: snRNA-seq로 세포타입 reference 구축 → spot **deconvolution(RCTD 등)** → 데이터 기반 **공간 도메인(PRECAST 등)** → 연속 gradient(MERINGUE/NMF) → 세포간 통신(LIANA) → GWAS 유전율 공간 매핑(s-LDSC) → rodent 프로그램 **transfer learning** 투영.
- **신경과학 활용**: 인간 뇌 부위(시상하부, NAc 등)의 세포타입 지도, 질환 위험 유전자의 공간 국소화, 종간(rodent↔human) 보존/차이 비교.
- **한계**: 사후 조직·해상도·batch, spot 혼합, 라벨 부족 등.

## 관련 페이지
- [[ravichandran-2026-spatiomolecular-mapping-reveals-anatomical]] — 인간 NAc의 Visium+snRNA-seq 아틀라스(대표 적용 사례).
- [[yang-2026-spatial-transcriptomics-identifies-the-molecular]] — 인간 시상하부 공간전사체 아틀라스.
- [[littleton-2025-from-identity-to-function-unveiling]] — single-cell atlas era의 종간 번역 roadmap.
- [[concept-hypomap]] — 시상하부 단일세포 아틀라스(HypoMap) 맥락.
- [[concept-medium-spiny-neuron]] — SRT로 인간 subtype 공간 정체가 규명된 세포군.
- [[takacs-2026-transcriptome-profiling-of-human-hypothalamic]] — **IHC/LCM-Seq**: RNA 보존 면역염색(PVSA 2%) + 레이저 캡처 + bulk RNA-seq. 침수고정 사람 사후 뇌에 적용, **단백질 기준 세포 정의 + 공간 맥락 보존 + bulk 깊이**의 조합. 항원부활이 RNA를 파괴하는 문제를 RNase 억제제로 해결 (Nat Commun 2026).
