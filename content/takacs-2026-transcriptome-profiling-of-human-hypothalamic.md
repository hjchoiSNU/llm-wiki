---
title: "Transcriptome profiling of human hypothalamic AgRP and POMC neurons regulating energy homeostasis (Takács et al. 2026, Nature Communications)"
type: paper
created: 2026-08-19
updated: 2026-08-19
source: "raw/2026 Nature Communications. Transcriptome profiling of human hypothalamic agouti-related protein and proopiomelanocortin neurons regulating energy homeostasis.pdf"
authors: [Takács S, Skrapits K, Göcz B, Rumpler É, Sárvári M, Göblyös B, Biri D, Póliska S, Rácz G, Matolcsy A, Hrabovszky E]
year: 2026
journal: Nature Communications
---

> [!takeaway] 연구 방향 관점의 핵심
> **사람 사후 뇌에서 면역염색으로 정의한 AgRP·POMC 뉴런의 전사체를 세포당 14,000–16,000 transcript 깊이로 읽어낸 첫 데이터셋** — snRNA-seq([[concept-hypomap|HypoMap]]) 대비 7–8배 깊은 커버리지로, 단일세포 기법이 놓치던 **희귀 수용체·lncRNA·전사인자**가 드러났다. 사용자 lab에 즉시 쓰이는 두 가지: (1) **인간 POMC = GLP1R·CALCR·RAMP1/3·CNR1·HTR2C·OPRM1 보유**, 인간 AgRP = **GHSR·INSR·GHR·NR3C1(GR)·IL1R1/IL18R1·MC3R·AVPR1A·AGTR1 + 후각수용체 3종** — 즉 **semaglutide·cagrilintide·MC3R/MC4R 작용제의 인간 표적 세포가 분자 수준에서 확인**되고, β-endorphin·오피오이드·엔도카나비노이드 가설의 인간 좌표가 잡힌다. (2) **rodent와의 종차가 크다** — 인간 AgRP는 CART·GAL·TAC1·CRH·TRH를 공동발현하고 인간 POMC는 CART 음성, `Glp1r`는 마우스가 더 높다. 마우스 회로 결과를 인간에 옮길 때 **수용체 단위로 검증**해야 한다는 실무 규칙을 준다. 방법론(IHC/LCM-Seq)도 그 자체로 채택 가치가 있다.

# Transcriptome profiling of human hypothalamic AgRP and POMC neurons (Takács et al. 2026)

## 한 줄 요약
RNA 보존 면역조직화학 + 레이저 캡처 미세절제 + bulk RNA-seq(**IHC/LCM-Seq**)를 사람 침수고정 사후 뇌에 적용해, infundibular nucleus의 **AgRP·POMC·kisspeptin 뉴런 3종의 전사체**를 전례 없는 깊이로 비교했다.

## 핵심 내용

### 방법 — IHC/LCM-Seq의 인간 적용
- 사후 ~20–24 h 내 채취 + 냉(4 °C) 4% 포름알데히드 **침수고정 24–72 h** → RIN > 7.0 유지(고정 시간 무관).
- 문제는 면역염색: 항원부활(citrate, 80 °C, 30 min)이 RNA를 파괴(RIN 7.8 → 3.1).
- 해법: **RNase 억제제를 모든 완충액·항체액에 첨가**. ATA(0.05%)와 PVSA(2–10%) 모두 RNA 보존에 효과적이나, **ATA는 특이 염색을 훼손하고 배경을 높여** 최종 프로토콜은 **PVSA 2%** 채택.
- 세포종류당 피험자당 **~850개 표지 세포**를 LCM으로 포획 → TruSeq(random primer) 라이브러리 → Illumina.
- 남성 8명, 라이브러리 8개(AgRP 3 · POMC 2 · KP 3). 총 2.12억 raw read. **≥5 read 기준 15,000 ± 400 transcript**.
- PCA로 세 전사체가 명확히 분리되고, marker 펩타이드(`AGRP`·`POMC`·`KISS1`)가 서로의 전사체에 나타나지 않아 **교차오염 거의 없음**.
- 초기 RIN이 3.1–6.7로 낮아도 검출 transcript 수는 크게 영향받지 않음 — **random primer가 단편 RNA를 수용**하기 때문.

### 발견 1 — 세포종류 특이 전사인자
- 총 1,210 transcript가 세포종류 특이적으로 유의 농축(p.adj < 0.05, DESeq2). 902개 TF 중 **50개가 세포종류 간 차이**.
- **AgRP**: `NR3C1`(GR), `OTP`, `XBP1`, `KLF9`, `FOXO1`, `ETV5`, `CREM`, `ZBTB16`, `ST18`.
- **POMC**: `ZFHX4`, `ONECUT1`, `LEF1`.
- **AgRP+POMC 공유**: `BCL6`, `ISL1`, `PROX1`.
- **POMC+KP 공유**: `PGR`, `AR`, `ESR1`, `NHLH2`, `SOX1` → 성 스테로이드 신호가 대사·생식 조절을 잇는 분자 접점.
- **KP**: `SOX14`, `STAT5A`, `PLAGL1`.

### 발견 2 — 공동전달 펩타이드 (인간 특이 패턴)
- **AgRP**: `NPY`·`AGRP`·`SST`·`UTS2` 농축, `TAC1`(substance P)·`GAL`·`VGF`·`CRH` 상승. 면역형광으로 **NPY·substance P·CART·somatostatin·galanin이 AgRP-IR 뉴런에 가변적 비율로 공존** 확인.
- **POMC**: `POMC`·`VIP` 고유 발현, `ADCYAP1`(PACAP) > AgRP.
- **KP**: `TAC3`·`KISS1` 고유, `CBLN1`·`NXPH1`·`PENK`·`CBLN4`·`PDYN`·`NMU` 상승.
- ★ **인간 POMC는 CART 음성** (rodent와 정반대), 반면 **CARTPT는 AgRP와 KP 뉴런에서 검출** — 오래 보고돼 온 종차를 전사체+단백 양쪽에서 재확인.
- HypoMap이 AgRP를 **단일 cluster**로 본 것과 달리, 본 연구의 공존 염색은 AgRP 안에 **상당한 신경화학적 이질성**이 있음을 시사.

### 발견 3 — 수용체 지형 (약물 표적 관점의 본론)
205개 수용체 transcript 검출, 112개가 2배 이상 농축, 62개가 쌍별 비교에서 유의.

**AgRP 뉴런 농축**
- `ACVR1C`(ALK7) — **전체 수용체 중 최고 발현**, AgRP 배타적. 마우스에서 Alk7/activin B 결손은 NPY 세포 수·`Npy`/`AgRP` mRNA·MPOA 투사를 감소 → orexigenic 회로 유지의 trophic 인자.
- 대사호르몬: `GHSR`(ghrelin), `INSR`, `GHR`, **`NR3C1`(글루코코르티코이드 수용체)**.
- 전염증 사이토카인: `IL18R1`, `IL1R1` (MyD88–NF-κB/MAPK) + `IL6ST`, `IL13RA1`(JAK-STAT) → **AgRP = 면역-대사 통합 세포**.
- 신경펩타이드: `RXFP1`(relaxin), `NPY2R`, `AVPR1A`(V1a; 수분·스트레스↔섭식 연결 가능성), `MC3R`, `AGTR1`(안정시 대사율 적응), `CALCRL`+`RAMP1`(정준 CGRP 수용체).
- ★ **후각수용체 3종** `OR52N5`·`OR52N1`·`OR52H1` — 미확인 순환 대사산물·미생물 유래 화합물에 대한 반응 가능성.

**POMC 뉴런 농축**
- `NPY1R`, **`CALCR`**, `SSTR1`, `HCRTR2`(OX-2R), **`GLP1R`**, `CCKAR`, `PROKR1`, `GRPR`.
- **`CNR1`**(CB1), **`HTR2C`**(로카세린 표적), `HRH1`.
- `PRLR`(프로락틴) 풍부 + `LEPR`·`IL6ST`·`IL13RA1` 동반 → JAK-STAT 수렴.
- 오피오이드 수용체 `OPRM1`·`OPRL1`·`OPRK1`이 KP보다 POMC에서 우세.
- `PGR`·`AR`·`ESR1`·`PRLR` — POMC/KP 공유(생식-대사 연결).

**공유**: `LEPR`(AgRP+POMC), `IL6ST`·`ADCYAP1R1`(PACAP)·`INSR`(3종 모두).
**고아 GPCR**: AgRP — `GPR34`·`GPR27`·`GPR3`; POMC — `GPR101`·`GPR176`·`GPR83`·`GPR149`·`GPR85`.

### 발견 4 — 인간 vs 마우스 종차
- 마우스 공개 데이터(ad libitum / 24 h 절식) 재분석과 대조.
- **인간 AgRP 고유**: `TAC1`, `CARTPT`, `GAL`, `GHRH`, `CRH`, `UTS2`, `UBL5`, `TRH`. 마우스에만: `Scg5`, `Nampt`.
- **인간 POMC 농축**: `TAC1`, `CBLN1`, `NXPH1`, `ADCYAP1`, `TAC3`, `NTS`, `CBLN4`, `VIP`, `NMB`, `PENK`. 마우스 농축: `Cartpt`, `Chgb`, `Scg5`, `Pdyn`.
- 수용체: 인간 AgRP의 `ACVR1C`·`IL18R1`·`IL6ST`·`RXFP1`·`IL13RA1`·`HTR2A`는 마우스에서 낮고, 반대로 `Calcr`는 마우스 AgRP에서 훨씬 높음. 인간 POMC는 `IL6ST`·`LEPR`·`IL13RA2`·`ADGRB3`·`CALCR`·`HTR2C`가 더 높고, **`Gpr101`·`Glp1r`는 마우스 POMC가 더 높음**.
- 오렉신 수용체 전환: 마우스 POMC는 OX-1R, **인간은 `HCRTR2`(OX-2R)** 가능성.

### 발견 5 — 공간이 전사체를 만든다 (POMC DM vs VL)
- RNAscope(`CALCR`) + POMC 면역형광: **CALCR⁺ POMC는 소수(361개 중 54개, 14.96%)**. 배내측(DM) 21.14% vs 복외측(VL) 11.76% → HypoMap의 C4-374 클러스터 위치와 일치.
- DM·VL POMC를 각각 LCM(부위·피험자당 300–500 세포) → **1,052개 transcript가 2배 이상 차등**(DM 339 / VL 713).
- DM 농축: `CALCR`, `SSTR1`, **`RAMP1`**. VL 농축: `LEPR`, `RXFP2`, `GPR101`, `GLP1R`, **`RAMP3`**.
- 함의: CALCR+RAMP1 → **AMY1**, CALCR+RAMP3 → **AMY3** 아밀린 수용체가 각 아집단에서 형성될 수 있음 → **cagrilintide류 아밀린 작용제의 인간 표적 아집단이 공간적으로 분리**.

### 방법론적 위치 — snRNA-seq와의 분업
저자들이 정리한 IHC/LCM-Seq의 상대적 강점: (i) **공간 맥락 보존**, (ii) 고정이 전사체를 안정화, (iii) **단백질(면역염색) 기준 세포 정의** — 전사 클러스터링과 달리 RNA≠단백 문제를 피함, (iv) 피험자별 독립 replicate 유지, (v) **저빈도 transcript 민감도**(`CCKAR`·`IL1RL1`·`NPY2R`·`OR52N5`·`PROKR1` 등은 단일세포 기법으로 접근 곤란).
대가: bulk이므로 **세포 이질성·아집단 분해 불가** — POMC 이질성은 별도 공간 실험으로 우회해야 했다.

## 한계
- **남성 8명, 소수 라이브러리**(AgRP 3 · POMC 2 · KP 3) — 여성·연령·BMI 층화 없음. [[davila-2026-agrp-neurons-are-required-for|성별 의존적 AgRP 약물 반응]]을 감안하면 여성 데이터 부재는 실질적 공백.
- 종차 비교는 **직교유전자 가용성 + 표현형 정의 방식 차이**(인간 IHC vs 마우스 유전자 표지)에 제약.
- Article in Press(미편집본) 상태.

## 관련 페이지
- [[concept-npy-agrp-neurons]] — 인간 AgRP의 수용체·공동전달 지형을 확정.
- [[concept-pomc-neurons]] — 인간 POMC의 GLP1R·CALCR·CNR1·HTR2C·OPRM1 및 DM/VL 공간 분업.
- [[concept-arcuate-nucleus]] — 인간에서는 infundibular nucleus(INF).
- [[concept-hypomap]] — 상보적 snRNA-seq 아틀라스; 본 연구가 깊이로 보완하고 CALCR 공간 패턴을 독립 검증.
- [[concept-spatial-transcriptomics]] — 방법론 계열; IHC/LCM-Seq는 "단백 정의 + 공간 보존 + bulk 깊이" 조합.
- [[littleton-2025-from-identity-to-function-unveiling]] — atlas 기반 세포정체 리뷰; 본 연구는 그 정체를 **단백 기준**으로 재정의.
- [[yang-2026-spatial-transcriptomics-identifies-the-molecular]] — 인간 시상하부 3D 공간전사체; 좌표계 상보.
- [[concept-glp-1]] — 인간 POMC의 `GLP1R`이 semaglutide 식욕억제 표적임을 지지, 단 마우스보다 낮음.
- [[concept-amylin-receptor-agonists]] — `CALCR`+`RAMP1/3` → AMY1/AMY3; cagrilintide·병용요법의 인간 세포 근거.
- [[concept-melanocortin-system]] · [[concept-mc4r]] — AgRP의 `MC3R` 발현(MC3R/MC4R dual agonism 맥락).
- [[concept-endocannabinoid-system]] — 인간 POMC `CNR1`; CB1이 POMC를 통해 식욕을 조절한다는 마우스 모델의 인간 대응.
- [[concept-ectopic-olfactory-receptors]] — AgRP의 `OR52N5`·`OR52N1`·`OR52H1`; 이소성 후각수용체 개념의 시상하부 사례.
- [[concept-ghrelin]] · [[concept-leptin]] — `GHSR`·`LEPR` 인간 발현 확인.
- [[davila-2026-agrp-neurons-are-required-for]] — AgRP의 `NR3C1`(GR) 고발현이 GC→AgRP-GR 축에 인간 근거를 제공.
- [[gao-2026-semaglutide-drives-weight-loss-through]] · [[liskiewicz-2026-glp-1r-gipr-ppar]] — 약물 측; 본 연구는 표적 세포 측.
- [[concept-mc4r]] — 하류 수용체.
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
- [[su-2026-genetic-predictors-of-glp1-receptor]] — 인간 `GLP1R`·`GIPR` 코딩 변이가 약물 반응을 좌우; 본 연구가 그 수용체들이 **어느 세포에 얼마나** 있는지의 좌표를 제공 (Nature 2026).
- [[heyward-2025-single-nucleus-transcriptional-and-chromatin]] — **종간 수렴**: 본 논문의 인간 AgRP `ACVR1C` 고발현이, 마우스 AgRP를 **Sst형/Acvr1c형**으로 분할한 결과와 서로를 보강. 저쪽은 여기에 크로마틴 접근성 층을 더함 (bioRxiv 2025).
