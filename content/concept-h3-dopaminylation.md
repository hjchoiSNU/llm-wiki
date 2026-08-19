---
title: H3 dopaminylation (히스톤 도파민화) — 모노아민의 후성유전 작용
type: concept
created: 2026-08-19
updated: 2026-08-19
aliases: [H3 dopaminylation, H3Q5dop, H3K4me3Q5dop, histone dopaminylation, monoaminylation, 히스톤 도파민화, 세로토닌화, H3 serotonylation, TG2, transglutaminase 2]
---

> [!takeaway] 연구 방향 관점의 핵심
> **신경전달물질이 시냅스를 떠나 핵으로 들어가 히스톤에 공유결합한다** — 도파민이 수용체를 통해서만 작동한다는 전제를 깨는 작용 양식. 실행 단위는 **transglutaminase 2(TG2)** 가 히스톤 H3의 **글루타민 5(H3Q5)** 에 모노아민을 transamidation하는 반응이며, 바로 옆 **H3K4me3**와 공존해 전사 활성 상태를 조율한다.
> 최형진 lab 관점: 도파민 동역학의 **일과성 변화가 어떻게 수 개월 지속되는 표현형으로 고정되는가**를 묻는 분자 후보. 만성 고지방식·다이어트 후 요요·[[concept-glp1ra-response-variability|GLP-1RA 장기 반응]]처럼 "노출은 끝났는데 상태는 남는" 대사 현상에 적용 가능한 프레임이며, 결정적으로 **Q5A 우성음성**이라는 되돌리기 도구가 이미 존재한다.

# H3 dopaminylation (히스톤 도파민화)

## 한 줄 요약
도파민·세로토닌·히스타민 등 **생체 모노아민이 히스톤 H3의 글루타민 5 잔기에 공유결합**하여 크로마틴 상태와 유전자 발현을 조절하는 히스톤 번역후변형(PTM). 총칭 **monoaminylation**.

## 핵심 내용

### 화학·효소
- **부위**: 히스톤 H3 **글루타민 5(H3Q5)**. 정식 표기 **H3Q5dop**(도파민), H3Q5ser(세로토닌), H3Q5his(히스타민).
- **효소**: 조직 **transglutaminase 2(TG2)** 가 transamidation 촉매. 세포 내 모노아민 pool에 의존 → **신경전달물질 농도 자체가 기질 공급량**이 된다.
- **인접성**: H3Q5는 canonical 활성 표지인 **H3K4me3(lysine 4 tri-methylation)** 바로 옆. 두 변형은 **공존 가능**하며 조합 표지 **H3K4me3Q5dop**로 검출된다.
- **기능적 방향**: H3K4me3Q5dop 농축 증가는 대체로 **유전자 발현 증가**와 연관. peak은 유전자 좌위에 집중하며 상당수가 **TSS 2 kb 이내**.

### 반응성
- 스트레스, 남용 약물 등 **환경 자극에 반응**해 변동한다. 즉 정적 표지가 아니라 **경험 의존적**이다.
- 생식 경험(parity)은 마우스·인간 dHF 모두에서 H3 dopaminylation을 **하향**시킨다([[ochan-2026-dopamine-drives-persistent-remodelling-of|O'Chan 2026]]).

### 인과 조작 도구
| 도구 | 원리 | 용도 |
|---|---|---|
| **H3K4me3Q5dop 항체 + CUT&RUN-seq** | 조합 표지의 게놈 전역 분포 | 부위·군별 차등 dopaminylation 맵 |
| **H3.3(Q5A) AAV** | 글루타민 5 → 알라닌 치환 **우성음성**. 유사분열 후 뉴런의 크로마틴에 H3.3가 통합되는 성질 이용 | monoaminylation **감소** 방향 인과 검증 |
| **H3.3 WT AAV** | 동일 전달·통합, 잔기 정상 | 위 조작의 짝 대조군 |
| **TG2 조작** | 촉매 효소 수준 개입 | 상류 차단(본 위키 자료에서는 미사용) |

> 방법론적 요점: H3.3(Q5A)는 **행동 수준까지 되돌린다** — [[ochan-2026-dopamine-drives-persistent-remodelling-of|O'Chan 2026]]에서 산후 스트레스가 없앤 맥락 공포 학습 이점이 stress RE + H3.3(Q5A)에서 회복됐다. 히스톤 변형 조작이 전사뿐 아니라 **행동 표현형의 인과 고리**임을 보인 드문 사례.

### 도파민 작용의 세 층
| 층 | 매개 | 시간척도 | 대표 |
|---|---|---|---|
| 수용체 신호 | D1/D2 GPCR → cAMP·PKA | ms–분 | [[concept-medium-spiny-neuron]], RPE |
| 시냅스 가소성 게이팅 | 수용체 의존 가소성 규칙 | 분–일 | [[piette-2026-striatal-endocannabinoids-drive-one-shot]] (D2R 의존 eCB-LTP) |
| **크로마틴 공유결합** | **TG2 → H3Q5dop** | **주–개월** | [[ochan-2026-dopamine-drives-persistent-remodelling-of]] |

## 열린 질문 (이 위키 자료 기준)
- 섭식·에너지 항상성 회로에서 H3 dopaminylation이 측정된 자료는 **현재 이 위키에 없다**. 시상하부·NAc에서의 존재 여부·방향은 미지.
- 만성 고지방식이나 GLP-1RA 장기 투여가 이 표지를 바꾸는지 검증된 바 없음.
- 세로토닌화·히스타민화와의 경쟁·교체 동역학(같은 Q5 잔기를 두고)이 대사 상태에 따라 달라지는지 불명.

## 관련 페이지
- [[ochan-2026-dopamine-drives-persistent-remodelling-of]] — 본 개념의 1차 출처(Nature 2026, Maze lab). 마우스 dHF + 인간 dorsal subiculum.
- [[concept-epigenetic-priming]] — "경험이 크로마틴에 저장된다"는 상위 개념 hub. H3K4me1/SETD7가 자매 사례.
- [[kim-2026-early-life-stress-alters-h3k4me1]] — 같은 문법의 다른 변형(H3K4me1·SETD7), 같은 도파민 회로(VTA) 무대.
- [[concept-dopamine-reward-system]] — 도파민 작용의 상위 hub; 본 개념은 그 세 번째 층.
- [[concept-astrocyte-neuron-lactate-shuttle]] — 대사 산물(젖산)이 히스톤 변형(H3K9 lactylation)을 쓰는 평행 축.
- [[concept-early-life-adversity]] — 경험이 남기는 지속 취약성의 행동·회로 층.
- [[concept-maternal-programming-hypothalamus]] — 세대 간 프로그래밍 축.
- [[concept-cis-regulatory-element-obesity]] — 크로마틴 상태를 **유전 변이** 쪽에서 읽는 상보적 축.
