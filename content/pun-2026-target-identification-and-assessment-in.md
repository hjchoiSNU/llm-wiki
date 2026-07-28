---
title: "AI 시대의 신약 표적 발굴·평가 (Pun 2026)"
type: paper
created: 2026-07-28
updated: 2026-07-28
source: "raw/Pun et al. - 2026 - Target identification and assessment in the era of AI.pdf"
authors: [Frank W. Pun, Feng Ren, Alex Zhavoronkov]
year: 2026
---

> [!takeaway] 연구 방향 관점의 핵심
> 위키의 사실상 첫 "**AI 신약 타깃 발굴**" 레퍼런스 — 최형진 lab의 식욕·비만 회로 지식([[concept-hypomap|HypoMap]]·[[concept-spatial-transcriptomics|공간전사체]]·GWAS)을 **치료 타깃 후보 발굴 파이프라인**으로 전환하는 프레임(멀티오믹스+지식그래프→GNN/LLM 스코어링→retrospective/experimental/prospective 검증)을 제공한다. AlphaFold 기반 druggability·cryptic pocket 평가는 [[concept-gpcr-drug-discovery|GPCR/펩타이드]] 타깃(비만 신약 주 modality)에 직접 연결.

# AI 시대의 신약 표적 발굴·평가 (Pun 2026)

## 한 줄 요약
AI(표현학습·GNN·생성형·foundation model·LLM·자동화 랩)가 초기 신약개발의 두 축 — 타깃 *발굴*과 타깃 *평가* — 을 어떻게 재편하는지, AI-지목 타깃이 실제 임상에 도달한 사례와 함께 정리한 Insilico Medicine 주도 리뷰. (Nature Reviews Drug Discovery 2026;25:534–552, Zhavoronkov)

## 핵심 내용
- **전체 프레임**: 타깃 *발굴* = disease biology(문헌·pathway·causal gene) + omics 분석. 타깃 *평가* = druggability·safety + patentability + experimental validation. 각 단계에 6개 AI 기술 매핑.
- **선정 4대 고려**: therapeutic hypothesis, druggability·safety(off-target), novelty↔confidence↔commercial trade-off, combination value.
- **규모**: ~20,000 단백질코딩 유전자 중 ~4,500 druggable 추정이나 승인약은 **716개 distinct target**에만 작용 → 방대한 미개척 공간.
- **인간 유전학**: genetic support 있는 타깃은 성공확률 2배↑. GWAS+QTL+Mendelian randomization으로 인과 타깃 지목.
- **AI 모델 유형**: supervised(L2G GWAS causal gene, TargetPro), representation learning(Phenom-Beta, ESM-1v), GNN(synthetic lethality), generative(Precious2GPT 멀티오믹스), foundation(Geneformer→GPR160 CRISPR 검증, scGPT), LLM(BioGPT, TxGemma, multi-agent "AI co-scientist"·OriGene).
- **검증 3종**: retrospective backtesting("time machine", PandaOmics), experimental(CRISPR/siRNA), prospective(inClinico가 phase II 결과 **79% 정확도** 예측).
- **Druggability**: AlphaFold2/3·Boltz-2 구조 예측 + GNN **PocketMiner**로 cryptic pocket 발굴 → "undruggable" 재분류.
- **임상 도달 사례**: ① **TNIK(IPF)** — Insilico 생성형 AI로 타깃 지목·inhibitor 설계, ~18개월·$2.6M 전임상, phase IIa 개선. ② APLNR(anti-ageing, azelaprag). ③ PIKfyve(ALS). ④ **DRD2(항암)** — ONC201/dordaviprone, 2025 FDA 승인.
- **closed-loop platform**: target AI→자동화 랩(imaging·omics)→모델 refine 반복(AstraZeneca iLab 등).
- **한계**: 데이터 편향(well-studied gene bias, 700/20,000 class imbalance), explainable AI 필요, 표준 벤치마크, synthetic data·digital twin.

## 관련 페이지
- [[concept-ai-drug-discovery]] — AI 타깃 발굴·평가 hub (본 논문이 앵커).
- [[weber-2025-interoceptive-origin-reinforcement-learning]] — 🤖 AI×Neuroscience 자매 페이지.
- [[mueller-2025-privi-towards-general-purpose-video]] — foundation model 방법론 병렬.
- [[concept-spatial-transcriptomics]] · [[concept-hypomap]] — 오믹스 입력 데이터(도메인 사례).
- [[concept-mc4r]] · [[concept-melanocortin-system]] — druggable appetite 타깃 예시.
- [[muratspahic-2026-de-novo-design-of-miniproteins]] · [[concept-de-novo-protein-design]] — AI 창약의 리간드 설계 축(상보).
