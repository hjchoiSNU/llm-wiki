---
title: cis-조절요소와 비만 유전학 — OCR/CRE에서 세포아형으로
type: concept
created: 2026-08-19
updated: 2026-08-19
aliases: [cis-regulatory element, CRE, OCR, open chromatin region, snATAC-seq, ATAC-seq, enhancer, liftOver, HuGE score, eQTL, GWAS 세포타입 귀속, 조절 변이]
---

> [!takeaway] 연구 방향 관점의 핵심
> 비만 GWAS의 근본 난제는 **연관 변이의 90% 이상이 비코딩 영역에 있고, 어느 세포에서 무엇을 하는지 모른다**는 것이다. 이 개념 축은 그 간극을 메우는 표준 파이프라인이다 — **세포타입별 열린 크로마틴(OCR) 측정 → 인간 게놈으로 보존 매핑(liftOver) → GWAS/eQTL/HuGE 점수와 교차**. 결과물은 "BMI 연관 변이"가 아니라 **"ARC의 Pomc/Prdm12 뉴런에서 작동하는 enhancer 위의 BMI 연관 변이"** 다.
> 최형진 lab 관점: 인간 코호트에서 얻는 유전·표현형 데이터를 **마우스 회로 실험과 같은 좌표계**에 올릴 수 있는 유일한 실용 경로. [[concept-glp1ra-response-variability|GLP-1RA 반응 이질성]]의 미설명 분산을 코딩 변이가 아닌 **조절 변이 × 세포아형** 축에서 찾을 때의 방법 틀이기도 하다.

# cis-조절요소와 비만 유전학

## 한 줄 요약
세포타입 특이적 **열린 크로마틴 영역(OCR)** 이 곧 그 세포의 **cis-조절요소(CRE, 대부분 원위 enhancer)** 이며, 이를 종간 보존 매핑해 인간 비만 연관 변이와 교차시키면 **비코딩 변이를 특정 세포아형에 귀속**시킬 수 있다는 방법론 축.

## 핵심 내용

### 왜 필요한가
- 비만 GWAS 신호 대부분이 **비코딩**. 근접 유전자 할당(nearest-gene)은 자주 틀린다.
- 조절요소는 **세포타입 특이적**이다 — 같은 게놈 좌표가 어떤 뉴런에서는 열려 있고 다른 뉴런에서는 닫혀 있다. 따라서 bulk 조직 데이터로는 귀속이 불가능.
- 조절 정보의 위치: [[heyward-2025-single-nucleus-transcriptional-and-chromatin|Heyward 2025]] 기준 시상하부 LepR 뉴런 OCR의 **intergenic 36–45%·intronic 43–50%·promoter는 3–11%뿐** → 프로모터만 보면 대부분을 놓친다.

### 표준 파이프라인
| 단계 | 방법 | 산출 |
|---|---|---|
| 1. 세포 농축 | Cre × NuTRAP 등 유전 표지 + FANS | 관심 세포만 선별 |
| 2. multiome | snRNA-seq + snATAC-seq 동시(10x Multiome) | 같은 핵의 전사체 + 접근성 |
| 3. 통합 클러스터링 | WNN(RNA PCA + ATAC LSI) → Louvain | 전사·후성유전 양쪽으로 구별되는 클러스터 |
| 4. 클러스터 특이 OCR | peak calling(MACS2) + 차등 접근성 | 아형 고유 CRE 후보 |
| 5. 발현 예측 검증 | **BETA**(TSS ±100 kb peak 근접·농축 → regulatory potential) | 접근성이 실제로 발현을 예측하는지 |
| 6. 종간 보존 | mm10 → hg38 **liftOver** | 인간 orthologous OCR |
| 7. 인간 유전 증거 교차 | **HuGE 점수**(GWAS+희귀변이+fine-mapping 통합 유전자 수준 점수), **GWAS Catalog** + LD proxy(r²≥0.8), 조직 **eQTL**(GTEx Brain_Hypothalamus) | 세포아형 특이 후보 기능 변이 |

- **HuGE 층**: Moderate ≥3 / Strong ≥10 / Very Strong ≥30 / Extreme ≥100 / Compelling ≥350.
- **수렴 지점**(보존 OCR × 유의 eQTL × 높은 HuGE)이 우선순위 표적이 된다.

### 이 방법의 한계 (구조적)
- **정적 스냅숏**: 기저 상태에서만 측정하면 **자극 후에만 열리는 masked enhancer**를 놓친다. AgRP 뉴런에서 절식 시 2,452개, leptin 처치 시 203개 OCR이 새로 열린 사례가 있다.
- **eQTL의 세포타입 미분해**: bulk 조직 eQTL과의 중첩은 세포 귀속을 **추론**할 뿐 증명하지 않는다.
- **상관 수준**: 파이프라인의 출력은 후보 목록이다. 실제로 그 변이가 발현·표현형을 바꾸는지는 **별도 in vitro/in vivo 검증**이 필요하다.
- **liftOver 보존 편향**: 종간 서열 보존이 낮은 진짜 인간 특이 조절요소는 원리상 잡히지 않는다.

## 사용자 lab 관점 활용
- **인간 표현형 층화의 분자 좌표**: 사용자 lab이 축적하는 섭식 행동·GLP-1RA 반응 표현형을, 이 파이프라인이 만든 **세포아형 특이 CRE 지도** 위에 얹으면 "어느 세포가 이 표현형 차이를 만드는가"를 유전 증거로 물을 수 있다.
- **Cre driver 설계**: 클러스터 특이 표지(예: DMH Lepr^Glp1r의 **Ebf1**)는 곧 회로 조작 도구의 후보다.
- **약물 표적 종간 번역**: [[concept-hypomap|atlas]]가 세포 정체의 종차를 보여줬다면, 이 축은 **조절 문법의 종차**를 본다. 마우스에서 열린 enhancer가 인간에서 보존되지 않으면 그 회로 논리는 번역되지 않을 수 있다.

## 관련 페이지
- [[heyward-2025-single-nucleus-transcriptional-and-chromatin]] — 본 개념의 1차 출처. 시상하부 LepR 뉴런 39아형의 OCR → 인간 비만 유전학 교차 (bioRxiv 2025).
- [[concept-hypomap]] — 전사체 층 atlas. 본 개념은 그 위에 **조절 층**을 얹는다.
- [[concept-spatial-transcriptomics]] — 위치 층. atlas·조절·공간의 3축.
- [[concept-leptin]] — 프로파일링 대상 세포집단의 정의 축.
- [[concept-npy-agrp-neurons]] · [[concept-pomc-neurons]] · [[concept-arcuate-nucleus]] · [[concept-dorsomedial-hypothalamus]] — 아형 특이 CRE가 정의된 회로.
- [[concept-glp1ra-response-variability]] — 반응 이질성의 미설명 분산을 조절 변이 축에서 탐색.
- [[su-2026-genetic-predictors-of-glp1-receptor]] — **코딩 변이** 쪽 인간 유전학(GLP1R p.Pro7Leu, GIPR p.Glu354Gln). 본 개념은 비코딩 쪽 짝.
- [[concept-epigenetic-priming]] · [[concept-h3-dopaminylation]] — 같은 크로마틴을 **경험 의존 변화** 쪽에서 읽는 상보적 축(유전 변이가 아닌 환경).
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
