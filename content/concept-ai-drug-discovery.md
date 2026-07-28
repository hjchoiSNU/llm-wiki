---
title: "AI drug discovery (AI 신약개발)"
type: concept
created: 2026-07-28
updated: 2026-07-28
---

> [!takeaway] 연구 방향 관점의 핵심
> AI 창약은 두 축 — **타깃 발굴/평가**(멀티오믹스+지식그래프→GNN/LLM)와 **리간드 설계**([[concept-de-novo-protein-design|de novo 단백질 설계]]) — 로 나뉜다. 사용자의 식욕·비만 회로 지식(오믹스·아틀라스·GWAS)을 치료 타깃 파이프라인으로 전환하는 프레임을 제공한다.

# AI drug discovery (AI 신약개발)

## 한 줄 요약
머신러닝·생성형 AI·foundation model·LLM·자동화 실험을 신약개발 전 단계(타깃 발굴·평가·리간드 설계·검증)에 적용하는 분야.

## 핵심 내용
- **타깃 발굴/평가**([[pun-2026-target-identification-and-assessment-in|Pun 2026]]): 멀티오믹스+지식그래프 입력 → GNN·LLM·생성형 모델 스코어링 → retrospective/experimental/prospective 검증. AlphaFold 기반 druggability·cryptic pocket 평가. 임상 도달 사례 TNIK·DRD2 등.
- **리간드 설계**([[muratspahic-2026-de-novo-design-of-miniproteins|Muratspahić 2026]]): RFdiffusion·ProteinMPNN으로 GPCR 작용제/길항제 de novo 설계.
- **closed-loop**: AI 지목 타깃 → 자동화 랩 → 모델 refine 반복.
- **한계**: 데이터 편향·재현성, explainable AI, 표준 벤치마크 부재.

## 관련 페이지
- [[pun-2026-target-identification-and-assessment-in]] — 타깃 발굴·평가 종합(근거).
- [[concept-de-novo-protein-design]] · [[muratspahic-2026-de-novo-design-of-miniproteins]] — 리간드 설계 축.
- [[concept-gpcr-drug-discovery]] — GPCR 창약과의 접점.
- [[concept-spatial-transcriptomics]] · [[concept-hypomap]] — 오믹스 입력.
- [[weber-2025-interoceptive-origin-reinforcement-learning]] — 🤖 AI×Neuroscience.
