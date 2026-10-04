---
title: "Dorsolateral septum GLP-1R neurons regulate feeding via lateral hypothalamic projections (Lu et al. 2024, bioRxiv preprint → Mol Metab)"
type: paper
created: 2026-10-03
updated: 2026-10-03
source: "raw/2024 bioRxiv. (Zhiping Pang, Rossi) Dorsolateral septum GLP-1R neurons regulate feeding via lateral hypothalamic projections.pdf"
authors: [Yi Lu, Le Wang, Fang Luo, Rohan Savani, Mark A. Rossi, Zhiping P. Pang]
year: 2024
journal: "bioRxiv preprint (posted 2024-03-27); doi:10.1101/2024.03.26.586855 — ⚠️ 본 위키가 읽은 파일은 **preprint 버전으로 peer review 미통과**. 이후 Molecular Metabolism 85:101960 (2024-05, PMID 38763494)로 정식 출판됨 — 아래 수치는 모두 preprint 판 기준"
aliases: [dLS GLP-1R, dLS-GLP-1R to LHA, septo-hypothalamic feeding, Lu 2024]
---

> [!takeaway] 연구 방향 관점의 핵심
> **위키가 "LS^Glp1r = GLP-1RA의 변연계 작용점 후보"로 세 좌표계에서 수렴시켜 놓았던 가설이, 드디어 세포형·투사 특이 인과 조작 + 시냅스 수준 약리로 직접 검증됐다.** `Glp1r-ires-Cre` 마우스에서 **dLS^GLP-1R → LHA** 축은 **GABA성 단시냅스 억제**이고(oIPSC 5/8 LHA 뉴런, TTX 차단 → 4-AP 회복, picrotoxin 차단), 이 경로를 **끄면 섭취가 늘고**(dark·light·금식 후 재급식 전부), **투사 특이로 켜면 금식 후 재급식만 줄고**(F(1,50)=11.01, p=0.0017), **LHA 내 종말을 광자극하면 즉각 섭취가 억제**된다. 불안·운동은 전혀 바뀌지 않는다(open field·light-dark·EPM 전부 ns).
> ① **GLP-1RA 작용 기전의 "시냅스 좌표"** — exendin-4가 **dLS^GLP-1R→LHA 억제 시냅스의 oIPSC를 키우고 PPR을 낮춘다**(IPSC t(10)=2.312, p=0.0461; PPR t(10)=3.135, p=0.0120). 즉 GLP-1R 작용이 세포체 흥분성만 바꾸는 게 아니라 **시냅스 전 GABA 방출 확률을 올려 LH engine을 더 세게 누른다**는 그림이다. 사용자 lab의 [[kim-2024-glp-1-increases-preingestive-satiation|Kim 2024 Science]](DMH GLP-1R→AgRP 식전 포만)가 시상하부 내부 채널이라면, 이쪽은 **변연계→LH 하행 채널**로 병렬 배치된다. → [[concept-glp-1]]
> ② **[[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]]에서 "상태 의존 브레이크"의 비대칭** — 억제는 **모든 상태에서** 섭취를 늘리는데(기저 brake tone이 상시 작동), 투사 특이 활성화는 **금식 후에만** 효과가 있다. "brake를 떼면 언제든 더 먹고, brake를 더 밟는 것은 Need가 높을 때만 측정 가능하다"는 **Need-gated gain** 구조로 읽을 수 있다(연결 가설).
> ③ **사용자 lab의 LH 세포형과 직접 맞물리는 미검증 칸** — 저자들은 하류 표적을 **LHA^Vgat로 추정만** 했다. [[lee-2023-lateral-hypothalamic-leptin-receptor|LH^LepR]](seeking/consummatory 2 subset)이 이 억제를 받는지는 완전히 비어 있고, [[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]] 리뷰의 LH 입력 지도에 **변연계 GLP-1R 채널**을 추가할 자리다.
> ④ **방법론적 교훈** — 세포체 활성화(hM3Dq)는 **아무 효과가 없었다**. 같은 집단 안의 **collateral 억제**(ChR2 자극 시 인접 EYFP⁻ dLS 뉴런 6/11에서 PTX 민감 IPSC) 때문이라는 해석. LS 문헌의 방향 불일치를 설명하는 구조적 이유이며, **LS 조작은 투사 특이로 해야 한다**는 일반 규칙을 준다. ⚠️ 이는 [[azevedo-2020-a-limbic-circuit-selectively-links|Azevedo 2020]](LS^Nts 세포체 활성화 → 섭취↓)과 직접 충돌한다.

# dLS^GLP-1R → LHA: septo-hypothalamic 섭식 브레이크 (Lu et al. 2024)

⚠️ **bioRxiv preprint (2024-03-27 posted), 이 버전은 peer review 미통과.** 같은 제목으로 **Molecular Metabolism 85:101960 (2024-05)** 에 정식 출판됐으므로, 최종판 수치·그림 번호는 다를 수 있다.

- **소속**: Rutgers Robert Wood Johnson Medical School, **Child Health Institute of New Jersey** (+ Brain Health Institute). 교신 **Mark A. Rossi** (Mark.Rossi@rutgers.edu) · **Zhiping P. Pang** (Zhiping.Pang@rutgers.edu).
- **lab 맥락**: Rossi는 위키의 [[rossi-2023-control-of-energy-homeostasis|LHA 리뷰]]·[[rossi-2019-obesity-remodels-activity-and|Rossi 2019 Science]]·[[rossi-2021-transcriptional-and-functional-divergence|Rossi 2021 Neuron]] 저자(Stuber lab 출신)로, **LHA 쪽 전문성이 상류 LS로 확장된 논문**이다. Pang lab은 선행 연구에서 **MCH가 해마→dLS 활동을 조절**함(Liu, Tsien & Pang 2022 Nat Neurosci)과 **dLS 내 강한 collateral 억제**를 보고했고, 본 논문의 핵심 해석(collateral inhibition)이 거기서 온다.
- **동물·수술**: `Glp1r-ires-Cre`, `Glp1r-ires-Cre:Ai14` **수컷** 6–8주. dLS 좌표 AP +0.5 / ML ±0.45 / DV −2.7 mm, LHA 좌표 AP −1.2 / ML ±1 / DV −5.1 mm. AAV 0.1–0.2 μl, 발현 3주, 개별 사육 3주 + 5일 handling.
- **약물·자극**: CNO **1 mg/kg i.p.**(섭취 측정 시점 0.5·1·2·3 h — **암기 실험만 "주사 30분 후부터" 시작**이고, 명기·금식 후 재급식은 주사 시점 기준; saline 1일 washout, CNO 6일 washout, 측정자 blind). Opto: **473 nm, 10 ms, 25 pulses/s, 1.5 s 주기, 1.8 mW, 20 min**(밤새 0.5 g만 급여한 경도 결핍 상태, 4일 적응 후). 슬라이스: CNO 10 μM 욕조 투여, 5 mV 이상 변화만 유효 반응으로 집계.
- **펀딩**: NIMH RF1MH120144, NIDDK R01DK131452 (Pang) / NIDDK R01136641, R00DK121883 (Rossi).

## 한 줄 요약
dLS의 **GLP-1R 발현 뉴런**은 **LHA로 GABA성 단시냅스 억제**를 보내 섭식을 상시 누르고 있으며, 이 경로를 끄면 섭취가 늘고 투사 특이로 켜면(또는 LHA 내 종말을 광자극하면) 섭취가 줄고, **GLP-1R 작용제 exendin-4는 이 억제 시냅스의 GABA 방출을 시냅스 전 기전으로 강화**한다 — 불안·운동 변화와 무관하게.

## 핵심 내용

### Figure 1 — dLS^GLP-1R 억제는 모든 상태에서 섭취를 늘린다
- `Glp1r-ires-Cre`의 dLS에 **fDIO-hM4Di-mCherry** 양측 주입(원문 Results 3.1 표기. ⚠️ 같은 실험을 Methods와 Fig S1 legend는 **DIO**-hM4Di로 적어 preprint 내부 표기가 엇갈린다 — FLP가 없는 `Glp1r-ires-Cre` 단독에서는 DIO가 맞는 조합이다). 슬라이스 검증: CNO가 **RMP 과분극 + 기저 발화율 감소**(paired t(12)=6.281, **p<0.0001**, n=12 cells / 3 mice).
- 섭취(두 요인 ANOVA, Group 주효과):
  | 조건 | Group 주효과 | 비고 |
  |---|---|---|
  | **암기(dark) 자유급식** | F(1,120)=14.44, **p=0.0002** | Time F(4,120)=71.72, 상호작용 ns(p=0.157) |
  | **명기(light) 자유급식** | F(1,120)=53.89, **p<0.0001** | 상호작용 F(4,120)=4.284, p=0.0028 |
  | **밤샘 금식 후 재급식** | F(1,120)=28.55, **p<0.0001** | 상호작용 F(4,120)=2.463, p=0.0488 |
- **n=13 mice/군**. → dLS^GLP-1R은 **상시 작동하는 섭식 브레이크**이며, 효과가 암기·명기·금식 후 모두에서 나타나 상태 특이적이지 않다.

### Figure 2 — 세포체 활성화는 무효, 이유는 dLS 내 collateral 억제
- **hM3Dq**를 같은 집단에 발현. 슬라이스에서 CNO는 **일관된 효과가 없었다**(paired t(17), **p=0.2523**, n=17 cells / 3 mice): **35%(6/17)는 과분극·발화 감소**, **29%(5/17)는 탈분극·발화 증가**.
- 섭취도 전부 ns: 암기 F(1,105)=3.402, p=0.0679 / 명기 F=0.06226, p=0.8034 / 금식 후 재급식 F=0.1432, p=0.7059. **n=13 control, 10 hM3Dq**.
- **기전 검증**: dLS^GLP-1R에 ChR2를 넣고 **인접 EYFP⁻ dLS 뉴런**을 패치 → 청색광이 **robust IPSC**를 유발(**6/11 세포**), **picrotoxin에 차단되고 CNQX에는 차단되지 않음**(one-way ANOVA F(4,25)=98.81, p<0.0001; Sidak p<0.0001 vs ACSF, n=6 cells / 3 mice).
- 저자 해석: LS 뉴런의 **>90%가 GABA성**(Zhao 2013)이므로 집단 전체를 켜면 **자기 집단을 포함한 국소 상호 억제**가 걸려 순 출력이 상쇄된다. 선행 LS-A2AR 연구(Wang 2023 Nat Commun: LS-A2AR 활성화가 주변 LS c-Fos를 낮춤)와 정합.
- ⚠️ **대안 해석(원문 미논의)**: hM3Dq 자체의 발현·효능 부족, 또는 `Glp1r-Cre` 집단이 흥분·억제 반응이 섞인 이질 집단이라는 가능성. 혼합 반응(35% vs 29%)만으로 collateral 억제를 확정하기는 어렵다.

### Figure S1–S3 — 불안·운동은 전혀 바뀌지 않는다
- **Open field**: center time F(2,35)=2.11, p=0.1364 / 이동거리 F(2,35)=1.898, p=0.1649 (n=13 control, 10 hM3Dq, 15 hM4Di).
- **Light-dark box**: light zone time F(2,25)=1.041, p=0.3679 / entries F(2,25)=1.813, p=0.1840 (n=8 control, 10 hM3Dq, 10 hM4Di).
- **EPM**: open arm time F(2,23)=3.414, **p=0.0503**(경계) / entries F(2,23)=2.941, p=0.0729 (n=8 control, 9 hM3Dq, 9 hM4Di).
- 투사 특이 억제(S2)·활성화(S3)에서도 6개 지표 모두 ns(t=0.18–1.40, p=0.19–0.86).
- → 섭취 변화가 **불안·운동의 2차 효과가 아니다**. 단 저자 스스로 "anxiolytic·anxiogenic 세포를 동시에 조작해 상쇄됐을 가능성"을 한계로 적는다. EPM p=0.0503은 **경계값**이라 null을 강하게 주장하기 어렵다.

### Figure 3 — dLS^GLP-1R → LHA는 GABA성 단시냅스 투사
- **순행**: dLS에 `DIO-EYFP` → dLS 세포체 EYFP⁺, **LHA에 EYFP⁺ 축삭**.
- **역행**: `Glp1r-ires-Cre:Ai14`의 LHA에 `retroAAV-Ef1a-DIO-EYFP` → **dLS 내 EYFP 역표지 뉴런**(tdTomato⁺와 겹침). 원문 표현: tdTomato⁺ 세포는 **"dLS 전역에 고르게 분포"**.
- **전기생리(ChR2-assisted circuit mapping)**: LHA 뉴런에서 광유발 **IPSC가 5/8(62.5%)** 기록. **TTX로 소멸 → 4-AP로 회복**(= 단시냅스), **picrotoxin으로 차단, CNQX로는 차단되지 않음**(= GABA_A). one-way ANOVA F(4,20)=10.7, p<0.0001, Sidak p<0.01 vs ACSF, **n=5 cells / 3 mice**.
- → **LS→LHA 하행 억제의 세 번째 분자 채널**이 확정됐다(① DLS^Pdyn — [[goode-2026-a-dorsal-hippocampus-prodynorphinergic-dorsolateral|Goode 2026]], ② LS^Nts — [[azevedo-2020-a-limbic-circuit-selectively-links|Azevedo 2020]], ③ dLS^GLP-1R — 본 논문).

### Figure 4 — 투사 특이 억제도 섭취를 늘린다
- **이중 바이러스 전략**: LHA에 `retroAAV-Ef1a-DIO-FLPo` + dLS에 `fDIO-hM4Di-mCherry` → **LHA로 투사하는 dLS^GLP-1R에만** 억제성 DREADD. 슬라이스 검증: 과분극·발화 감소(t(6)=2.897, p=0.0339, n=6 cells / 3 mice).
- 섭취: 암기 F(1,40)=26.01, **p<0.0001** / 명기 F(1,60)=27.88, **p<0.0001** / 금식 후 재급식 F(1,55)=44.88, **p<0.0001**(상호작용 F(4,55)=3.795). **n=7 control, 6 hM4Di**. 불안 지표 불변(S2).
- → **LHA가 이 섭식 효과를 매개하는 주요 표적**임을 투사 특이 수준에서 확인.

### Figure 5 — 투사 특이 활성화는 "금식 후에만" 섭취를 줄인다
- 같은 이중 바이러스 + **fDIO-hM3Dq**. 이번에는 슬라이스에서 **일관된 탈분극·발화 증가**(t(8)=2.702, p=0.0306, n=8 cells / 3 mice) → **collateral 억제 우회 성공**.
- 섭취: 암기 자유급식 F(1,45)=0.07858, p=0.7805 (ns) / 명기 자유급식 F(1,50)=3.272, **p=0.0765**(경계) / **금식 후 재급식 F(1,50)=11.01, p=0.0017 — 유의하게 감소**. **n=7 control, 5 hM3Dq**.
- → 활성화 효과는 **상태 의존적**이며 **섭취 압력이 높을 때만** 드러난다. 억제 효과(Fig 1·4)가 상태 무관인 것과 **비대칭**이다.

### Figure 6 — LHA 종말 광자극은 즉각 섭취를 억제하고, Ex-4는 그 시냅스를 강화한다
- **종말 광자극**: dLS에 ChR2-EYFP, **LHA에 광섬유**. 경도 금식 마우스에서 **섭취가 유의하게 억제**되고 **자극 중단 시 대조군 수준으로 복귀**.
  - 통계: **Stimulation 주효과 F(2,36)=3.816, p=0.0314**; Sidak p<0.05. ⚠️ **Group 주효과는 F(1,36)=3.382, p=0.0742로 비유의**이고 상호작용도 ns(F(2,36)=2.576, p=0.0900). **n=6 control, 8 ChR2**. → "유의하게 억제"라는 서술은 **자극 주효과 + 사후검정**에 기대고 있어, 군 간 비교로는 약하다(병기 필요).
- **GLP-1R 약리(핵심)**: dLS^GLP-1R 입력을 받는 LHA 뉴런에서 paired-pulse 광자극 → **exendin-4(Exn-4) 투여 후 oIPSC 진폭 증가**(paired t(10)=2.312, **p=0.0461**)와 **PPR 감소**(paired t(10)=3.135, **p=0.0120**). **n=10 cells / 3 mice**.
  - 통상적 해석으로 **PPR 감소 = 시냅스 전 방출 확률 상승**이다. ⚠️ 그런데 **Discussion에서는 "decrease the presynaptic release probability"로 적혀 있어 Results(PPR↓ → 방출 확률↑)와 어긋난다** — preprint 내부 불일치로 보이며, 정식 출판판에서 교정됐을 가능성이 있다. 위키에서는 **"IPSC↑ + PPR↓ = 시냅스 전 기전"** 이라는 사실만 확정으로 쓰고 방향 해석은 병기한다.

### Discussion 요점
- LS→시상(thalamus) 경로는 불안을 양방향으로 조절한다고 보고돼 왔으나, **dLS^GLP-1R→LHA는 섭식에 선택적**이다.
- 하류 표적은 **LHA^Vgat로 추정**(저자 speculation). 논거: LHA GABA 뉴런은 food seeking·섭취·양성 에너지균형을 촉진하므로([[rossi-2023-control-of-energy-homeostasis|Rossi 2023]]), **dLS 억제 → LHA^Vgat 탈억제 → 섭취↑**라는 부호가 맞는다. **직접 검증은 안 했다.**
- **저자가 미해결로 명시한 것은 두 가지뿐**: ① dLS 국소 억제 미세회로의 구조·기능, ② LHA 하류 세포 정체. (③ 체중·만성 효과를 측정하지 않은 점, ④ 전부 수컷 6–8주인 점은 **원문이 한계로 적지 않았고**, 본 위키의 지적이다.)
- 선행 약리와의 연결: LS 내 GLP-1 주입이 섭취를 줄인다(Terrill 2016 AJP·2019 Physiol Behav), septal GLP-1R은 cocaine 유발 행동 억제를 결정한다(Harasta 2015 Neuropsychopharmacology).

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **GLP-1RA 기전의 "시냅스 전 gain" 가설**: Ex-4가 dLS^GLP-1R→LHA GABA 방출을 강화한다면, GLP-1RA의 섭식 억제 일부는 **수용체 발현 뉴런의 발화 변화가 아니라 하행 억제 시냅스의 이득 상승**으로 구현된다. 사용자 lab [[kim-2024-glp-1-increases-preingestive-satiation|Kim 2024 Science]]의 **DMH GLP-1R→AgRP 식전 포만**과 층위가 다른(세포체 vs 시냅스) 병렬 기전이며, [[concept-glp1ra-response-variability|GLP-1RA 반응 변이]]의 후보 변수로 **변연계 시냅스 가소성**을 넣을 수 있다.
- **NMPU 매핑**: dLS^GLP-1R→LHA는 **Motivation engine(LHA)에 걸린 top-down tonic brake**. 억제는 상태 무관하게 섭취를 늘리고(brake 상시 작동), 활성화는 **금식 후에만** 섭취를 줄인다(Fig 5F) → **brake의 효과 크기가 Need에 비례**하는 곱셈 구조일 수 있다. 검증 설계: 금식 × 자극의 2×2에서 효과의 **상호작용항**을 본다(원문은 조건별 별개 실험이라 상호작용을 판정할 수 없다).
- **LH^LepR과의 접점(가장 비어 있는 칸)**: [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]의 LH^LepR seeking/consummatory subset이 dLS^GLP-1R 억제를 받는지. 받는다면 "변연계 GLP-1R → LH^LepR seeking 억제"라는 경로가 생기고, 사용자 lab의 LH 축에 GLP-1RA 작용점이 직접 연결된다. 받지 않는다면 LHA^Vgat 안에서 **GLP-1RA 민감 subset이 분리**된다는 뜻이다.
- **Collateral 억제의 일반 교훈**: LS처럼 GABA 뉴런이 >90%인 구조에서 **세포체 활성화의 null은 "기능 없음"이 아니다**. 사용자 lab이 LH·DMH 등에서 세포형 활성화를 설계할 때도, **투사 특이 조작과 종말 광자극을 쌍으로** 두는 것이 음성 결과 해석의 안전장치가 된다.
- **임상 번역 질문**: 인간 septum의 GLP-1R이 semaglutide/tirzepatide 반응의 변연계 성분(음식 cue 반응·식이 억제)에 기여하는가. 본 논문은 마우스 급성 섭취만 다루고 **체중·만성 효과를 측정하지 않았다** — [[cao-2024-hunting-for-heroes-brain|Cao 2024]]가 지적한 "급성 섭식 ≠ 만성 체중" 간극이 그대로 남는다.

## ⚠️ 위키 내 충돌·긴장
- **[[azevedo-2020-a-limbic-circuit-selectively-links|Azevedo 2020]]과 정면 충돌 — 세포체 활성화의 성패**: Azevedo는 **LS^Nts 세포체 화학유전 활성화만으로 섭취·체중이 감소**했다고 보고하고, 그 LS^Nts의 **70%가 `Glp1r`⁺**다. 본 논문은 **dLS^GLP-1R 세포체 활성화가 아무 효과도 없다**고 보고한다(Fig 2). 가능한 화해: ① `Nts`⁺ 아집단은 `Glp1r`⁺ 전체의 일부이고, 전체를 켜면 **아집단 간 상호 억제**로 상쇄된다, ② dLS(등쪽) vs LS 전체의 범위 차이, ③ DREADD 효능·발현량 차이. **어느 쪽도 검증되지 않았으므로 병기한다.** 두 논문이 공유하는 사실은 **LS 내 exendin-4/GLP-1R 작용이 섭취를 줄인다**는 방향이다.
- **[[goode-2026-a-dorsal-hippocampus-prodynorphinergic-dorsolateral|Goode 2026]]과 수렴 + 세 가지 긴장**: 둘 다 **LS→LHA 단시냅스 GABA 억제**이고 **억제 → 섭취↑ / 활성 → 섭취↓** 부호가 같다. 긴장은 ① Goode의 DLS^Pdyn 집단은 **`Glp1r`와 공발현**이 보고돼 **같은 세포를 다른 마커로 자른 것일 가능성**이 있는데 중첩률은 미측정, ② Goode의 표적은 **LHA^Vgat로 직접 확정**됐으나 본 논문은 **추정만** 했다, ③ Goode의 활성화는 **RTPP 회피(음성 정동)** 를 동반하는데 본 논문은 불안 지표 불변 + 장소선호 **미시험**이다. "맥락 게이팅(Goode) vs 총 섭취량(본 논문)"의 표현형 차이도 같은 세포를 가정하면 설명이 필요하다.
- **[[bhatti-mazo-2026-feature-specific-threat-coding-in|Bhatti Mazo 2026]]과 집단 규모 불일치**: snRNA-seq에서 **LS^Glp1r는 LS^Crhr2의 8.4%** 로 독립 아형이다. 본 논문의 `Glp1r-ires-Cre:Ai14`에서는 tdTomato⁺ 세포가 **"dLS 전역에 고르게 분포"** 한다고 서술된다. Cre 계통의 **누적·발달기 발현**이 전사체 기준 집단보다 넓게 표지할 가능성이 크다 — **"dLS^GLP-1R"이 전사체 아형과 같은 집단인지 불명**. ⚠️ 또한 Bhatti Mazo에서 `Glp1r` 아형은 **행동 개시 표상 1위**였는데, 본 논문은 섭식만 측정하고 위협·회피 과제를 시험하지 않았다.
- **[[kim-2025-mechanisms-of-glucagon-like-peptide|Kim 2025]] 리뷰의 "LS GLP-1R 활성 → feeding↓" 서술**: 본 논문은 **세포체 활성화로는 그 효과가 재현되지 않고**(ns), **투사 특이 활성화 + 금식 조건**에서만, 또는 **LHA 종말 광자극**에서만 나타난다. 리뷰의 요약 문장은 **조작 범위·상태 조건을 명시해 다시 써야 한다**(병기).
- **[[cao-2024-hunting-for-heroes-brain|Cao 2024]]의 비판과 정확히 겹침**: "**GLP-1R 뉴런 조작 ≠ GLP-1R 결손**"이라는 지적이 본 논문에 그대로 적용된다 — 본 논문은 `Glp1r`를 **삭제하지 않았다**. Cao가 소개한 **Chen 2024 JCI**(LS GLP-1R knockdown이 liraglutide 효과를 거의 소실시킴)가 **수용체 수준의 짝**이고, 본 논문은 **회로 수준의 짝**이다. 둘을 합치면 "LS GLP-1R = 필요(수용체) + 충분 경로(회로)"가 되지만, **같은 동물·같은 지표에서 함께 검증된 바는 없다**.
- **[[duran-2026-the-central-amygdala-gates|Duran 2026]]·[[johansen-2025-brain-control-of-energy|Johansen 2025]]가 "LS GLP-1R 역할 불명"으로 남긴 공백**: 본 논문이 그 공백의 **회로 쪽 답**이다. 단 Duran/Johansen이 다루는 **GLP-1RA의 NAc 도파민 억제·혐오 성분**과 본 논문의 LHA 채널이 같은 축인지는 미검증.
- **하류 LHA 세포형 가정의 취약성**: [[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026]]·[[gordon-2026-lateral-hypothalamic-control-of-the|Gordon 2026]]은 LHA^Vgat가 **단일 engine이 아니라 기능적으로 분화된 ensemble**임을 보였다. "dLS 억제 → LHA^Vgat 탈억제 → 섭취↑"라는 본 논문의 부호 논리는 **LHA^Vgat를 단일 집단으로 가정**해야 성립한다. 어느 ensemble이 억제를 받는지에 따라 결과 해석이 달라질 수 있다. (참고: Lee 2026은 Ex-4가 LH^Vgat cue·섭취 반응을 모두 약화시킨 기전 후보로 **GLP-1R 뉴런→LH 억제 경로**를 들었는데, 그 인용이 바로 이 계열의 결과다 — **두 논문이 서로의 빈 칸을 메운다**.)
- **preprint 수치 신뢰도**: 정식 출판(Mol Metab 85:101960)에서 통계·그림이 수정됐을 수 있다. 특히 **Fig 6C의 Group 주효과 비유의(p=0.0742)** 와 **Discussion의 PPR 해석 불일치**는 출판판 확인이 필요한 지점이다.

## 관련 페이지
- [[concept-lateral-septum]] — 개념 hub. LS→LHA 하행 억제의 **세 번째 분자 채널**(dLS^GLP-1R)과, `Glp1r` 삼중 수렴에 대한 **직접 회로 인과 증거**를 추가.
- [[concept-glp-1]] — GLP-1 개념 hub. GLP-1R 작용제가 **억제 시냅스의 시냅스 전 방출을 강화**한다는 시냅스 수준 좌표.
- [[azevedo-2020-a-limbic-circuit-selectively-links]] — LS^Nts(70% `Glp1r`⁺)·LS 내 exendin-4 섭취 억제. ⚠️ 세포체 활성화 효과 유무에서 직접 충돌.
- [[goode-2026-a-dorsal-hippocampus-prodynorphinergic-dorsolateral]] — DLS^Pdyn→LHA^Vgat 단시냅스 억제. 같은 부호·다른 마커·다른 표현형(맥락 게이팅).
- [[bhatti-mazo-2026-feature-specific-threat-coding-in]] — LS^Glp1r 전사체 아형(8.4%)과 Cre 계통 표지 범위의 불일치.
- [[cao-2024-hunting-for-heroes-brain]] — "GLP-1R 뉴런 조작 ≠ 수용체 결손" 비판 + Chen 2024 JCI(LS GLP-1R knockdown)의 짝.
- [[kim-2025-mechanisms-of-glucagon-like-peptide]] · [[park-2025-glucagon-like-peptide-1-and-hypothalamic]] — 뇌 GLP-1R 부위별 지도에서 LS 칸을 회로 수준으로 채움.
- [[rossi-2023-control-of-energy-homeostasis]] — 본 논문이 하류 표적 추정의 근거로 삼은 LHA 세포형 taxonomy(교신저자 본인 리뷰).
- [[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles]] — Ex-4가 LH^Vgat cue·섭취 반응을 약화시킨 기전 후보로 **GLP-1R 뉴런→LH 억제**를 지목. 서로의 빈 칸을 메우는 쌍.
- [[gordon-2026-lateral-hypothalamic-control-of-the]] — LHA^Vgat/Vglut 균형이 선조체 DA 지형을 정함. 하행 억제가 어느 ensemble에 걸리는지가 다음 질문.
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] — 사용자 lab LH^LepR seeking/consummatory subset. dLS^GLP-1R 억제의 하류 후보(미검증).
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — 사용자 lab LH 리뷰. LH 입력 지도에 변연계 GLP-1R 채널 추가.
- [[kim-2024-glp-1-increases-preingestive-satiation]] — DMH GLP-1R→AgRP 식전 포만. 같은 약물의 시상하부 내부 채널(병렬 배치).
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] · [[concept-need-motivation-pleasure-utility]] — Need-gated brake 가설(억제는 상태 무관, 활성화는 금식 후만).
- [[gruzdeva-2026-hunger-neurons-track-available-food]] — 해마→LS→LH→DMH→AgRP 가설. LS→LH 구간의 세 번째 분자 채널 보강.
- [[duran-2026-the-central-amygdala-gates]] · [[johansen-2025-brain-control-of-energy]] — "LS GLP-1R 역할 불명"으로 남겼던 공백의 회로 쪽 답.
- [[concept-glp1ra-response-variability]] — 변연계 시냅스 가소성을 반응 변이 후보 변수로.
- [[rossi-2019-obesity-remodels-activity-and]] · [[rossi-2021-transcriptional-and-functional-divergence]] — 교신저자 Rossi의 LHA 단일세포 계열. 상류 LS로의 확장.
- [[liu-2023-an-iterative-neural-processing]] — LH^GABA = 섭식 조각 개시. 본 논문의 dLS^GLP-1R→LHA GABA 억제가 그 개시를 누르는 상류 후보이고(Liu가 든 "septum GABA→LH^GABA 개시 억제"의 분자 채널), GLP-1RA가 preparation phase를 깎는다는 예측과 맞물린다(Neuron 2023).
