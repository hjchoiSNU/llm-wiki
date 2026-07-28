---
title: "GPCR를 표적하는 미니단백질의 de novo 설계 (Muratspahić 2026)"
type: paper
created: 2026-07-28
updated: 2026-07-28
source: "raw/Muratspahić et al. - 2026 - De novo design of miniproteins targeting GPCRs.pdf"
authors: [Edin Muratspahić, David Feldman, Christopher G. Tate, Christopher Norn, David Baker]
year: 2026
---

> [!takeaway] 연구 방향 관점의 핵심
> GPCR을 표적하는 **작용제·길항제를 항체/펩타이드 스크리닝 없이 컴퓨터로 de novo 설계**할 수 있음을 처음으로 폭넓게 입증 — 사용자의 GPCR 표적 치료제(식욕·대사 수용체) + AI 단백질 설계 두 축에 정확히 걸친다. 이 논문이 이미 **[[concept-mc4r|MC4R]], [[concept-glp-1|GLP1R]], [[concept-gip|GIPR]], GCGR** 등 대사·식욕 GPCR을 설계 표적에 포함하고 class B ECD 길항제까지 만들었다 → 시상하부 식욕회로 수용체를 겨냥한 맞춤 miniprotein 설계의 직접 template. **partial vs full agonism을 설계로 튜닝**한 점은 오심 없는 [[concept-biased-agonism|biased]] 리간드 전략에 시사적.

# GPCR를 표적하는 미니단백질의 de novo 설계 (Muratspahić 2026)

## 한 줄 요약
De novo computational protein design(RFdiffusion + MetaGen scaffold)과 고처리량 현미경 스크리닝(OPS-RD)으로 11개 GPCR에 대한 miniprotein 작용제·길항제를 nM 역가로 생성, cryo-EM으로 결합양식을 확인하고 한 chemokine 수용체 길항제는 in vivo 효능까지 입증. (Nature 2026, David Baker lab/IPD)

## 핵심 내용
- **두 설계 파이프라인**: (1) **motif-guided RFdiffusion** — 5-잔기 hot-spot motif를 깊은 orthosteric pocket에 삽입 후 나머지를 diffusion; (2) **MetaGen** — AlphaFold 예측 "structural metaproteome" scaffold를 RifDock에 투입. 서열은 **ProteinMPNN**, 필터는 **AF2**.
- **신규 스크리닝(RD, receptor diversion)**: 세포 내에서 표적 수용체와 binder를 공발현, 결합 시 수용체가 ER로 diverted되어 colocalization으로 시각화(정제 불요, 막환경 유지). **OPS-RD**로 최대 100,000 designs를 barcode in-situ sequencing으로 스크리닝(SPR 대비 AUC 0.92).
- **작용제**: MRGPRX1(itch/pain) full agonist(최적화 EC50 **42 nM**, BAM8-22 수준); NK1R 작용제(EC50 1–231 nM).
- **길항제**: CXCR4(IC50 24 nM), CCR5, OXTR(옥시토신 수용체) 등.
- **Class B GPCR ECD 표적 길항제(대사 관련)**: **GLP1R**(IC50 ~39–61 nM), **GIPR**(dGP1_035 IC50 7.9 nM; dGP1_040은 GLP1R·GCGR에 무활성=선택적), **GCGR**, PTH1R, **CGRPR**(편두통). ECD 결합으로 펩타이드 접근을 입체차단.
- **구조 검증**: 5개 수용체-결합 설계의 **cryo-EM 구조**가 계산 모델과 거의 일치(MRGPRX1 Cα RMSD 0.7 Å, active-state 안정화 확인).
- **In vivo**: CXCR4 길항제 dCX1_001(5 mg/kg SC)이 조혈모/전구세포 동원을 임상약 plerixafor 수준으로 유도하되 **염증 부작용은 더 적음**.
- **한계**: target state만으로 작용/길항 보장 못함(일부는 allosteric일 수 있음); AF2/Rosetta metric이 binder를 완벽히 구분 못함. 현재는 peptide-binding GPCR(개방 pocket)에 집중, aminergic 소분자 수용체는 향후 과제.

## 관련 페이지
- [[concept-de-novo-protein-design]] — RFdiffusion·ProteinMPNN·AF2·MetaGen 설계 hub (본 논문이 대표 근거).
- [[person-baker-david]] — 교신저자·IPD. de novo 단백질 설계.
- [[concept-gpcr-drug-discovery]] · [[concept-biased-agonism]] — GPCR 창약·리간드 튜닝.
- [[concept-mc4r]] · [[concept-melanocortin-system]] — MC4R 설계 표적.
- [[concept-glp-1]] · [[concept-gip]] · [[concept-incretin-effect]] — GLP1R/GIPR/GCGR ECD 길항 설계.
- [[pun-2026-target-identification-and-assessment-in]] — AI 창약(표적 발굴) 자매 페이지.
- [[overview-next-gen-incretin-obesity-drugs-2026]] — 대사 GPCR 치료제 landscape.
