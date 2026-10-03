---
title: "The inhibitory circuit architecture of the lateral hypothalamus orchestrates feeding (Jennings, Stuber 2013, Science)"
type: paper
created: 2026-10-03
updated: 2026-10-03
source: "raw/2013 Science. The inhibitory circuit architecture of the lateral hypothalamus orchestrates feeding.pdf"
authors: [Joshua H. Jennings, Giorgio Rizzi, Alice M. Stamatakis, Randall L. Ung, Garret D. Stuber]
year: 2013
journal: "Science 341(6153):1517–1521 (2013-09-27); doi:10.1126/science.1241812 (Report)"
---

> [!takeaway] 연구 방향 관점의 핵심
> **"LH가 섭식을 켠다"의 회로 문법을 engine 활성이 아니라 brake 해제로 처음 정의한 논문.** Stuber lab(UNC)은 세 단계를 이었다. ① **BNST GABAergic(Vgat^BNST) → LH** 투사를 광활성하면 **배부른 마우스가 즉시 폭식**하고(그리고 그 자극 자체가 보상적·자가자극 대상이 된다), 광억제하면 **굶긴 마우스의 섭식이 줄고 혐오적**이다. ② 이 BNST 입력은 LH 안에서 **아무 세포나 때리지 않는다** — ChR2-assisted mapping + 단일세포 유전자발현에서 **강하게 억제받는 LH 뉴런은 Vglut2가 높고**, 약하게 받는 뉴런은 Vgat이 높다. 수정 rabies 단시냅스 추적에서도 **LH^Vglut2는 BNST 표지 다수, LH^Vgat은 최소**다. ③ 따라서 하류 노드는 **LH^Vglut2 = brake**이고, 실제로 Vglut2^LH 광활성은 굶긴 마우스의 섭식을 **억제**하며 혐오적이고, 광억제는 배부른 마우스에서 **섭식을 유발**하고 기호식 선호를 만든다. 경로 특이성도 보였다 — 같은 BNST의 **→VTA** 투사 활성은 섭식을 전혀 유발하지 않는다.
> 사용자 연구에 닿는 지점 넷. (1) **[[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]]에서 Motivation 출력이 두 가지 방식으로 구현된다** — [[jennings-2015-visualizing-hypothalamic-network-dynamics|Jennings 2015]]의 *engine 활성*(LH^Vgat↑)과 이 논문의 *brake 해제*(LH^Vglut2↓)는 같은 행동(과식)을 서로 다른 세포·상류로 만든다. [[gordon-2026-lateral-hypothalamic-control-of|Gordon 2026]]의 **LHA^Ratio(GABA/Glut)** 는 사실 이 논문이 세운 두 축의 비율을 13년 뒤 스칼라로 측정한 것이다. (2) **사용자 lab의 LH^LepR 축과 해부학적으로 분리될 가능성** — [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]·[[kim-2024-normative-framework-dissociates-need|Kim 2024]]의 LH^LepR은 GABAergic(LH GABA의 4%)이므로, 이 논문의 rabies 결과대로라면 **BNST 입력을 거의 받지 않아야 한다** → "stress/extended amygdala 주도 과식"과 "need 주도 Motivation"이 LH 안에서 **다른 세포로 갈라지는** 검증 가능한 예측. (3) **인간 번역**: [[guerrero-hreins-2026-bed-nucleus-of-the-stria|Guerrero-Hreins 2026]]의 7T 인간 BNST stress 매핑에 대응하는 **설치류 기전 anchor**가 이 논문이며, 위키의 "BNST→LH GABAergic → 포만 중 기호식 과식" 서술의 1차 출처다. (4) **신경조절 극성(polarity) 설계** — LHA DBS/[[concept-temporal-interference-stimulation|tTIS]]로 섭식을 **줄이려면** LH^Vgat을 끄는 게 아니라 **LH^Vglut2를 켜는** 쪽이 이 논문의 논리다(비선택 전기자극은 두 축을 동시에 때린다).

# The inhibitory circuit architecture of the lateral hypothalamus orchestrates feeding (Jennings et al. 2013)

- **저널**: Science 341(6153), 1517–1521 (2013-09-27). DOI: 10.1126/science.1241812. 접수 2013-06-12, 채택 2013-08-28. Report(본문 5면 + Figs S1–S13, Tables S1–S2, Movie S1).
- **소속**: University of North Carolina at Chapel Hill — Dept. of Psychiatry, Neurobiology Curriculum, Bowles Center for Alcohol Studies, Neuroscience Center, Dept. of Cell Biology & Physiology. G. Rizzi는 Utrecht UMC Brain Center Rudolf Magnus 공동. 교신 **Garret D. Stuber** (gstuber@med.unc.edu).
- **지원**: Klarman Family Foundation, Brain & Behavior Research Foundation, Foundation of Hope, NIDA DA032750, NIAAA AA022234·AA011605. (A.M.S.: NS007431, DA034472.) 바이러스 구축물은 Deisseroth·Boyden, Vgat/Vglut2-ires-Cre 마우스는 Lowell·Vong 제공.
- **모델·방법**: **Vgat-ires-Cre**·**Vglut2-ires-Cre** 마우스. Cre 의존 ChR2-eYFP(광활성), eArch3.0-eYFP(광억제; Chow 2010·Mattis 2011) — ⚠️본문은 혈청형·DIO 표기를 적지 않는다(AAV5-DIO는 보충 methods 추정, 미확인). 본문에 명시된 혈청형은 rabies용 AAV5-FLEX-TVA-mCherry·AAV8-FLEX-RG뿐. 광섬유를 **LH 상방**에 두어 BNST 축삭 말단을 자극(terminal stimulation). 마취 하 LH 세포외 기록. **ChR2-assisted circuit mapping**(슬라이스 whole-cell로 oIPSC 측정) + 같은 세포의 **multiplexed 단일세포 유전자발현 프로파일링**. **수정 rabies 단시냅스 추적**(AAV5-FLEX-TVA-mCherry + AAV8-FLEX-RG → SADΔG-GFP(EnvA); Watabe-Uchida 2012·Wickersham 2007). 행동: free-access feeding(standard grain-based chow·high-fat), food zone 체류, real-time place preference(RTPP), optical self-stimulation.
- 모든 값은 mean ± SEM. *P<0.05, **P<0.001 (t-test 또는 ANOVA + Bonferroni post hoc).

## 한 줄 요약
확장편도(BNST)의 **억제성 입력이 LH의 glutamatergic 뉴런을 선택적으로 겨냥해 침묵시킴으로써 섭식을 일으킨다** — 즉 LH의 섭식 스위치는 "흥분성 섭식 뉴런을 켜는" 구조가 아니라 **"억제성 섭식 브레이크(LH^Vglut2)를 상류 GABA 입력이 눌러 끄는"** 구조라는 것을 광유전·회로 매핑·rabies 추적·단일세포 유전자발현으로 보인 Science Report.

## 핵심 내용

### 배경 — 반세기 묵은 "LH 자극 = 섭식" 현상의 회로 정체
- 설치류 LH 조작이 섭식 등 다양한 행동을 바꾼다는 것은 반세기 전부터 알려졌다(Hoebel & Teitelbaum 1962; Delgado & Anand 1953; Wise 1968 = 원문 ref 1–3). 그러나 해부·약리 조작(ref 4–5)은 **LH 내부의 이산적 회로 연결**에 대한 기전적 통찰을 주지 못했다. LH 내부 회로 복잡성(Hahn & Swanson 2012, ref 6)을 감안해 저자들은 **LH ↔ 확장편도 주요 구심로**를 해부하기로 했다.
- 후보 선택 논리: **BNST**는 확장편도의 구성요소(de Olmos & Heimer 1999)이고 **대부분 GABAergic**(Kudo 2012)이며, VTA(ref 8 = Jennings 2013 **Nature**)와 LH(ref 9 = Kim SY 2013 Nature)를 시냅스 표적으로 갖는 동기 상태 통합자다. 또 **음식 섭취가 BNST 뉴런을 활성화**한다(Ángeles-Castellanos 2007).

### Fig 1 — Vgat^BNST→LH 광활성: 배부른 마우스가 즉시 폭식하고, 그 자극 자체가 보상이다
- Vgat-ires-Cre 마우스 BNST에 Cre 의존 ChR2-eYFP, 광섬유는 LH 위. 발현 국소성 검증: **BNST의 eYFP 형광이 주변 영역보다 유의하게 높음**(F5,29 = 11.22, P<0.001, n=5 sections / 3 mice). BNST 체부와 LH 축삭 투사를 각각 영상화(Fig 1 B–E, fig. S1).
- **배부른(well-fed) 마우스에서 광자극 → 수 초 내 'voracious feeding'**(Fig 1 F–I, fig. S2, movie S1). 주파수 의존적으로 **grain-based(standard) 사료 섭취↑**와 **food zone 체류시간↑** (F2,24 = 18.61, P<0.001 / F2,24 = 201.6, P<0.001; n=5 mice per group). 공간 heat map에서 자극 20분 epoch에만 food zone으로 몰린다.
  - ⚠️ *OCR 주의*: 원문 Fig 1 legend는 PDF 2단 조판이 뒤섞여 F값–지표 대응이 토막나 있다. 다만 문장 순서("increased grain-based food intake … (G) and food zone time … (H)")와 Fig 2·Fig 4의 동일 구문 순서(섭취 → zone)로 보아 **18.61 = 섭취, 201.6 = zone time**이 가장 유력하다. 두 지표 모두 P<0.001로 유의하다는 사실은 확정적이다.
- **고주파 자극일수록 섭식 개시 latency↓** (F3,56 = 48.89, P<0.001, n=9 mice).
- **동기적 valence**: ① RTPP에서 **광자극-짝 챔버 선호**(P<0.001, n=5/group; Fig 1J). ② 회로 활성 자체를 위해 **nose-poke 자가자극**을 한다. 그 자가자극은 **굶기면 증폭, 포만이면 감쇠**했다 — 10·20 Hz 자가자극이 ⑴ 2일 자유급식, ⑵ 2일 자유급식 + 자가자극 전 2시간 고지방식 노출 조건보다 유의하게 높음(F2,204 = 40.87, P<0.001, n=9 mice; Fig 1K).
- **경로 특이성**: 같은 BNST의 **Vgat^BNST→VTA** 투사를 광활성하면 **섭식이 전혀 유발되지 않았다**(figs. S3–S4). → "BNST GABA 출력 일반"이 아니라 **→LH 경로 특이** 효과.
- **기호식 편향**: 배부른 Vgat^BNST→LH::ChR2 마우스는 광자극 중 **고지방식을 강하게 선호**했다(table S1, movie S1). → 에너지 요구가 충족된 상태에서도 **calorie-dense 쪽으로 섭식을 유도**하기에 충분.

### Fig 2 — Vgat^BNST→LH 광억제: 굶긴 마우스의 섭식이 줄고, 그 억제는 혐오적이다
- 내인성 활동의 기여를 보려고 BNST GABA 뉴런과 그 LH 투사 축삭에 **eArch3.0-eYFP**를 발현(Fig 2 A–B, fig. S5).
- **시냅스 전 억제의 탈억제 검증**: 마취 하 LH 세포외 기록에서 **광반응 LH unit의 평균 발화율이 5초 광억제 동안 유의하게 증가**했다(F2,12 = 19.52, P<0.001, n=5 units / 3 mice; Fig 2 C–E). → BNST GABA 말단을 끄면 **LH 후시냅스 뉴런이 탈억제**된다(이 회로가 평소 LH를 누르고 있다는 직접 증거).
- **굶긴(food-deprived) 마우스에서 광억제 → 섭취↓·food zone 체류↓** (F1,44 = 2.43, P = 0.028 / F1,44 = 16.30, P<0.001; n=6 mice per group; Fig 2 G–J, fig. S6). 배고픔의 압력에도 섭식이 깎였다.
  - ⚠️ *OCR 주의*: Fig 1과 같은 조판 뒤섞임이지만, 원문 구문("decreased standard food intake … and time spent in the food zone")의 순서상 **2.43 = 섭취, 16.30 = zone time**이 유력하다. 더구나 **F(1,44)=2.43은 P=0.028과 수치적으로 정합하지 않는다**(F(1,44)=2.43 → p≈0.13) → 이 쌍은 원문 PDF에서 토막난 값일 가능성이 높다. 인용 시 "섭취·zone time 모두 유의하게 감소"까지만 쓰고 정확한 F는 원문 재확인 권장.
- **혐오**: eArch3.0 마우스는 **광억제-짝 챔버를 유의하게 회피**했다(P = 0.004, n=6/group; Fig 2K). → 이 경로의 활동은 내인적으로 **양성 valence**를 띤다.

### Fig 3 ★ — BNST 억제성 입력은 LH^Vglut2를 선택적으로 겨냥한다 (논문의 심장)
- **ChR2-assisted circuit mapping + 단일세포 multiplex 유전자발현**(Fig 3A): 슬라이스에서 Vgat^BNST 입력을 광자극하며 LH 뉴런을 whole-cell 기록해 **optically evoked IPSC(oIPSC) 진폭**으로 "강하게 innervated vs 약하게 innervated"를 가른 뒤, **같은 세포의 유전자발현**을 프로파일링했다. 표적 유전자 세트는 LH에서 이질적으로 발현하며 섭식에 관여한다고 보고된 것들(Berthoud & Münzberg 2011): **Vglut2, Vgat, DYN(dynorphin), MCH, NTS(neurotensin), OX(orexin/hypocretin), TH**.
- **결과**: **강하게 innervated LH 뉴런의 Vglut2 평균 fold expression이 약하게 innervated 뉴런보다 유의하게 높았다**(U = 169.0, P = 0.016, n=6 mice, **n=48 cells**; U 통계량 — 검정명은 원문에 미기재, legend는 "t test 또는 ANOVA+Bonferroni, where applicable"만 적는다). 반대로 약하게 innervated 뉴런은 **Vglut2가 낮고 Vgat이 높았다**(Fig 3 B–C, fig. S7, table S2).
- **수정 rabies 단시냅스 추적으로 교차검증**(Fig 3D): Vglut2-ires-Cre 또는 Vgat-ires-Cre 마우스 LH에 AAV5-FLEX-TVA-mCherry + AAV8-FLEX-RG를 넣고 2주 뒤 SADΔG-GFP(EnvA)를 LH에 주입, 7일 뒤 BNST 슬라이스를 공초점 영상.
  - **Vglut2^LH::Rabies → BNST에 조밀한 transsynaptic 표지**(Fig 3 E–F).
  - **Vgat^LH::Rabies → BNST 표지 최소**(Fig 3 G–H, fig. S8).
  - 정량: **BNST 뉴런이 LH glutamatergic을 유의하게 더 많이 innervate**(F1,20 = 38.50, P<0.001, n=3 mice per group; Fig 3I).
- → 두 독립 방법(기능적 시냅스 강도 × 해부학적 단시냅스 입력)이 같은 결론: **BNST GABA → LH^Vglut2 우선 표적**.

### Fig 4 — 하류 노드 검증: LH^Vglut2는 섭식 브레이크이며 활성은 혐오적이다
- Vglut2-ires-Cre 마우스 LH에 ChR2-eYFP(Fig 4A, fig. S9). **5 Hz 광자극**.
- **굶긴 마우스에서 Vglut2^LH 광활성 → 섭취↓·food zone 체류↓**(F1,36 = 13.31, P<0.001 / F1,36 = 13.12, P<0.001; n=5 mice per group; Fig 4 C–F, fig. S10. Fig 4B는 5 Hz 자극 전/중/후 10분 epoch heat map).
  - ⚠️ *OCR 주의*: Fig 4 legend도 조판이 뒤섞여 **13.31/13.12 중 어느 쪽이 섭취이고 어느 쪽이 zone time인지는 확정 불가**(df·P가 같아 해석에는 영향 없음).
- **혐오**: Vglut2^LH::ChR2 마우스는 광자극-짝 챔버에서 유의하게 적은 시간을 보냈다(P<0.001, n=5/group; Fig 4G).
- **반대 방향**: **Vglut2^LH 광억제 → 배부른 마우스에서 섭식 유발**(figs. S11–S13)이고, **기호식(palatable food) 선호**를 만들었다(table S1).
- → BNST GABA 입력이 누르는 그 세포집단을 직접 조작하면 부호가 정확히 맞는다. **LH^Vglut2 활성 = 섭식 억제 + 혐오**, **억제 = 섭식 + 기호식 선호**.

### Discussion 요점 (원문 결론부)
- 50년 전 전기자극으로 관찰된 LH의 **섭식·강화(reinforcement) 현상**을 만드는 정확한 회로 요소가 지금까지 미궁이었다(ref 1, 2, 25 = Olds & Milner 1954).
- 이 논문의 답: **BNST의 억제성 입력이 LH glutamatergic 뉴런을 특이하게 innervate하고 억제해 섭식을 촉진한다.**
- 저자들의 번역 프레임(초록): **정의된 뇌 네트워크 안에서 여러 고유 노드의 활동 조절 이상이 연쇄적 실패(cascading failure)로 이어져 maladaptive feeding을 만든다** — 과식 장애·비만의 회로 해석 틀.
- 남긴 과제: **LH glutamatergic 뉴런의 유전자발현 패턴과 투사 표적을 더 쪼개면** 섭식장애·비만 치료의 새 개입점이 나올 수 있다.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **NMPU에서 "Motivation 출력"의 두 구현**: [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]]·[[concept-need-motivation-pleasure-utility]]는 LH를 Motivation 통합 hub로 둔다. 이 논문은 그 hub의 출력이 **engine(LH^Vgat 활성)과 brake(LH^Vglut2 억제)라는 두 부호로 구현**됨을 보인다. [[gordon-2026-lateral-hypothalamic-control-of|Gordon 2026]]이 측정한 **LHA^Ratio = GABA/Glut**는 이 논문이 세운 두 축의 비율이며, 따라서 **BNST 입력은 "분모(Glut)를 눌러 비율을 올리는" 상류 조절자**로 예측된다. dual-color photometry 중 Vgat^BNST→LH 말단을 광억제하면 LHA^Ratio가 내려가야 한다 — 바로 검증 가능한 실험.
- **LH^LepR(사용자 lab 축)은 BNST 입력에서 배제될 것**: [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]의 LH^LepR은 **GABAergic**(LH GABA의 4%, food-specific LH GABA의 79%)이고, 이 논문 Fig 3은 LH^Vgat이 BNST 단시냅스 입력을 **최소로** 받는다고 한다. → **예측: BNST→LH^LepR 시냅스 강도는 BNST→LH^Vglut2보다 유의하게 낮다**. 성립하면 "stress·extended amygdala 주도 과식"과 "[[kim-2024-normative-framework-dissociates-need|need 주도 Motivation]]"이 LH 안에서 **세포 수준으로 분리되는 이중 경로**가 된다(LepR-Cre에 FLEX-TVA/RG rabies, 또는 BNST ChR2 + LepR 세포 패치로 직접 측정 가능).
- **인간 stress eating의 기전 anchor**: [[guerrero-hreins-2026-bed-nucleus-of-the-stria|Guerrero-Hreins 2026]]은 7T에서 급성 스트레스가 **BNST→NAc·OFC·dmINS effective connectivity를 하향조절**함을 보였다. 이 논문은 같은 BNST의 **→LH 억제 출력이 포만 중에도 calorie-dense 섭식을 켠다**는 설치류 기전이다. 연결 가설: 인간에서 스트레스가 BNST의 피질 relay를 줄이면서 **피질하(→LH) 출력은 상대적으로 보존·우세**해질 때 cue 주도 과식이 나온다 → 7T DCM에 **BNST→시상하부 노드**를 명시적으로 넣어 검증할 설계 제안.
- **신경조절 극성 설계(DBS/tTIS)**: LHA DBS는 세포타입을 가리지 않아 결과가 비일관적이다([[rossi-2023-control-of-energy-homeostasis|Rossi 2023]]). 이 논문 논리대로면 **섭식을 줄이는 방향은 LH^Vglut2 흥분(또는 BNST→LH GABA 말단 억제)**, 늘리는 방향은 그 반대다. 두 축이 공간적으로 섞여 있으므로 비선택 자극은 서로 상쇄될 수 있다 — [[concept-temporal-interference-stimulation|tTIS]]·closed-loop 설계에서 **극성·주파수 선택이 세포타입 선택을 대체할 수 있는가**가 핵심 질문이 된다.
- **GLP-1RA가 brake 쪽에도 작용하는가**: [[lee-2026-distinct-lateral-hypothalamic-gabaergic|Lee 2026]]은 exendin-4가 **LH^Vgat의 cue·섭취 반응 진폭을 모두 깎음**을 보였다(engine 쪽 감쇠). 대칭 가설: GLP-1RA가 **LH^Vglut2 브레이크를 강화**(기저 활동↑ 또는 BNST 억제 입력 약화)하기도 하는가? 성립하면 [[concept-glp1ra-response-variability|GLP-1RA 반응 변이]]의 회로 지표가 engine 감쇠폭 + brake 강화폭 **두 성분**으로 늘어난다.
- **기호식 특이성의 기원**: 이 논문에서 **Vglut2^LH 억제는 기호식 선호를 만들고**, BNST→LH 활성도 고지방식을 선호했다. 반면 [[de-vrind-2019-effects-of-gaba-and|de Vrind 2019]]는 LH^Vgat 화학유전 활성이 lard 섭취와 기호식 선호를 오히려 **낮췄다**고 보고한다. → "LH 조작의 기호식 편향 부호"는 **engine 쪽(Vgat)과 brake 쪽(Vglut2)에서 서로 다를 수 있다**는 가설. [[concept-liking-wanting]]·[[concept-appetitive-consummatory-phases]]에서 분해해 볼 지점.

## ⚠️ 위키 내 충돌·긴장 (병기 — 덮어쓰지 않음)
- **★ "Jennings 2013" 인용 중의성 (위키 전반)** — 위키 여러 페이지가 "Jennings 2013"을 **두 가지 다른 논문**에 쓰고 있다. ⑴ 본 논문 = **Science 341:1517 (BNST→LH)**, ⑵ **Jennings et al. 2013 Nature 496:224 "Distinct extended amygdala circuits for divergent motivational states" (BNST→VTA)** = 본 논문 ref 8. 특히 [[stuber-2025-the-neurobiology-of-overeating|Stuber 2025]]·[[concept-lateral-hypothalamus]]의 **"LHA GABA → VTA disinhibition → DA → food-seeking (Jennings 2013, Nieh 2016)"** 서술에서 'Jennings 2013'이 본 논문을 뜻한다면 **부정확**하다 — 본 논문은 **LH GABA의 VTA 투사를 다루지 않으며**, LH→VTA 탈억제 축의 1차 출처는 Nieh 2015/2016이다. 본 논문의 BNST→VTA 결과는 오히려 **그 경로 활성이 섭식을 유발하지 않았다**(figs. S3–S4)는 쪽이다. 인용할 때 **"Jennings 2013 Science(BNST→LH)" vs "Jennings 2013 Nature(BNST→VTA)"** 를 반드시 구분해 표기할 것. ([[rossi-2018-overlapping-brain-circuits-for|Rossi 2018]]은 "Jennings 2013a"로 구분을 시도하고 있다.)
- **BNST→LH 투사의 전달물질 표기** — [[concept-lateral-hypothalamus]] Upstream 절은 **"BNST Vglut2 → pmLH (식이 ↑)"** 로 적고([[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]] 기반), [[concept-bed-nucleus-stria-terminalis]]·[[guerrero-hreins-2026-bed-nucleus-of-the-stria|Guerrero-Hreins 2026]]는 **"BNST→LH GABAergic"** 으로 적는다. 본 논문의 경로는 명확히 **Vgat^BNST(억제성)** 이며 BNST는 대부분 GABAergic이다(Kudo 2012). 두 표기는 **서로 다른 BNST 출력 집단**(glutamatergic 소수 vs GABAergic 다수)을 가리킬 수 있어 모순이 아닐 수 있으나, **"BNST→LH 섭식 촉진"의 1차 근거는 GABAergic 쪽(본 논문)** 임을 명시해야 한다. ⚠️ 개념 hub 정리는 후속 synthesis 단계 담당.
- **"LH^Vglut2 = 단일 브레이크" vs 투사·상태별 분기** — 본 논문은 LH^Vglut2를 **하나의 섭식 억제 노드**로 취급한다. [[rossi-2021-transcriptional-and-functional-divergence|Rossi 2021]](같은 lab)은 LHA^Vglut2가 **투사 표적별로 갈린다**고 본다(전측·Pax6⁺→LHb vs 후측·Pdyn/Hcrt⁺→VTA; leptin 반응 부호가 반대, interaction F(1,370)=63.99, p=1.6e-14). [[rossi-2019-obesity-remodels-activity-and|Rossi 2019]]는 LHA^Vglut2의 sucrose 반응이 **포만(prefed) > 24 h 금식**이고 만성 HFD에서 둔화된다고 한다. → 본 논문이 억제한 "그 Vglut2 세포"가 어느 투사 집단인지, 그리고 대사 상태에 따라 브레이크 세기가 달라지는지는 **본 논문 범위 밖**(병기). 연결 가설: 비만에서 Vglut2 브레이크가 둔화되면 BNST 입력 없이도 브레이크가 느슨해져 LHA^Ratio가 상향 고정될 수 있다.
- **LH^Vglut2는 혐오·섭식억제 전용인가** — 본 논문 Fig 4(활성 → 섭식↓·혐오)는 [[concept-appetitive-consummatory-phases]] 표의 "LH^Vglut2 = brake, aversive에 강한 반응" 서술과 정합한다. 그러나 [[rossi-2021-transcriptional-and-functional-divergence|Rossi 2021]]은 LHA^Vglut2 투사 뉴런이 **sucrose와 quinine에 둘 다 흥분**(LHb r=0.86, VTA r=0.72)한다고 보고한다 → 활동 수준에서는 **valence 무관 흥분 코딩**일 수 있다. 인과 조작의 부호(혐오)와 활동 상관(양가)은 **층위가 다르다**(병기). 같은 논리가 GABA 쪽에도 적용된다 — [[lee-2026-distinct-lateral-hypothalamic-gabaergic|Lee 2026]]의 LH^Vgat salience ensemble은 혐오 열자극에 흥분한다.
- **"BNST→LH 활성 = 포만 상태 과식" 서술의 섭취 측정 caveat** — [[de-vrind-2019-effects-of-gaba-and|de Vrind 2019]]는 LH 조작 실험의 **grain/chow '섭취 증가'가 갉기(gnawing)로 인한 spillage일 수 있다**고 지적했다(가루를 분리 칭량하면 실제 섭취 불변). 본 논문 Fig 1의 주요 섭취 지표도 **grain-based standard chow**이고, 측정 프로토콜은 Report 본문에 상세히 적혀 있지 않다. 다만 ⑴ 고지방식 선호(table S1), ⑵ latency 감소, ⑶ 자가자극의 배고픔 의존성 같은 **독립 지표들이 같은 방향**이라 spillage 단독 설명은 어렵다. 그래도 "chow 섭취 그램수" 수치만 인용하는 것은 피할 것(병기).
- **engine이냐 brake냐 — 같은 lab 안의 두 서사** — [[jennings-2015-visualizing-hypothalamic-network-dynamics|Jennings 2015]](같은 1저자·같은 lab, 2년 뒤)는 **LH^Vgat 활성 → 섭식·보상↑, ablation → 섭취·동기↓** 로 "LH^Vgat engine" 서사를 세웠고, 위키 다수 페이지([[chen-2025-the-integrated-function-of-the|Chen 2025]]·[[rossi-2023-control-of-energy-homeostasis|Rossi 2023]]·[[concept-lateral-hypothalamus]])가 이를 LH 섭식의 기본 문법으로 쓴다. 본 논문(2013)은 **그 Vgat 집단이 BNST 입력을 거의 받지 않으며, BNST 주도 섭식은 Vglut2 브레이크 해제로 일어난다**고 한다. 두 결과는 **모순이 아니라 서로 다른 상류·세포 경로**다: "LH 안에 섭식을 켜는 길이 최소 둘 있다"가 정확한 요약이며, 위키가 "LH^Vgat = 섭식 engine" 한 줄로 축약할 때 **2013년의 brake 축이 누락**된다는 점을 병기해야 한다.

## 관련 페이지
- [[concept-lateral-hypothalamus]] — 개념 hub. "LH^Vglut2 = brake" 와 "BNST → LH 섭식 촉진" 두 서술의 1차 출처. ⚠️ Upstream 절의 'BNST Vglut2 → pmLH' 표기와 본 논문의 Vgat^BNST 경로를 병기할 것.
- [[concept-bed-nucleus-stria-terminalis]] — "BNST→LH GABAergic 광활성 → 포만 상태에서도 기호식 즉시 과식" 서술의 **원전**. 본 논문은 거기에 **하류 표적이 LH^Vglut2라는 기전**과 **BNST→VTA 경로는 섭식을 유발하지 않는다는 경로 특이성**을 더한다.
- [[guerrero-hreins-2026-bed-nucleus-of-the-stria]] — 인간 7T BNST stress×food cue DCM. 본 논문이 그 설치류 기전 anchor이며, 'BNST→시상하부' 노드를 DCM에 넣을 근거.
- [[jennings-2015-visualizing-hypothalamic-network-dynamics]] — 같은 1저자·lab의 2년 뒤 짝 논문. LH^Vgat engine(광유전·ablation·microendoscope 743 뉴런). ⚠️ 본 논문의 rabies 결과(LH^Vgat은 BNST 입력 최소)와 **상류가 다른 두 섭식 경로**로 병기.
- [[gordon-2026-lateral-hypothalamic-control-of]] — 같은 lab 13년 뒤. **LHA^Ratio(GABA/Glut)** 가 선조체 DA 지형을 설정. 본 논문이 세운 두 축(engine/brake)을 하나의 연속 스칼라로 측정한 후속.
- [[rossi-2018-overlapping-brain-circuits-for]] — 같은 lab 리뷰(Cell Metab 2018)가 본 논문을 'Jennings 2013a'로 인용해 **BNST GABA→LHA 섭식·LHA Vglut2 활성 혐오** 사례로 정리.
- [[rossi-2021-transcriptional-and-functional-divergence]] — LHA^Vglut2를 **투사 표적(LHb vs VTA)·전사체·호르몬 반응**으로 쪼갠 후속. ⚠️ 본 논문의 '단일 브레이크' 취급과 병기.
- [[rossi-2019-obesity-remodels-activity-and]] — LHA^Vglut2의 **상태·식이 의존성**(prefed > 금식, 만성 HFD에서 둔화). 본 논문 브레이크 축의 비만 쪽 변형.
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — 사용자 lab LH 리뷰. "Glutamatergic 뉴런은 brake"·"BNST → pmLH 식이↑" 서술의 1차 근거 중 하나. ⚠️ 전달물질 표기 병기.
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] · [[kim-2024-normative-framework-dissociates-need]] — 사용자 lab의 LH^LepR(GABAergic) 축. 본 논문 Fig 3 논리상 **BNST 입력에서 배제될 것**이라는 검증 가능한 예측.
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] · [[concept-need-motivation-pleasure-utility]] — Motivation 출력이 engine 활성과 brake 해제 두 부호로 구현된다는 매핑.
- [[lee-2026-distinct-lateral-hypothalamic-gabaergic]] — LH^Vgat의 salience/consumption ensemble·Ex-4 효과. 본 논문의 brake 쪽에 대한 GLP-1RA 대칭 가설의 상대편.
- [[de-vrind-2019-effects-of-gaba-and]] — ⚠️ LH 조작 실험의 chow '섭취 증가' spillage caveat. 본 논문 Fig 1 섭취량 인용 시 병기.
- [[stuber-2025-the-neurobiology-of-overeating]] — 같은 lab 리뷰. ⚠️ 'Jennings 2013' 인용 중의성(Science BNST→LH vs Nature BNST→VTA)의 핵심 지점.
- [[concept-appetitive-consummatory-phases]] — LH^Vglut2 행(brake·aversive 반응)의 인과 근거.
- [[concept-lateral-habenula]] — LH^Vglut2의 주요 투사 표적. 본 논문이 미분해로 남긴 하류.
- [[rossi-2023-control-of-energy-homeostasis]] — LHA 세포타입 종합·coarse DBS 비일관. 본 논문의 극성 논리가 DBS 설계에 주는 함의.
- [[person-choi-hyung-jin]] — 사용자 lab hub.
- [[oconnor-2015-accumbal-d1r-neurons-projecting]] — ★ **같은 LH를 겨냥하는 두 억제성 입력의 부호가 왜 반대인지**를 분자 수준에서 설명해 주는 짝 논문(Neuron 2015, Lüscher lab). 본 논문은 **Vgat^BNST → LH^Vglut2 억제 = 섭식 개시**, 그쪽은 **NAcSh D1R-MSN → LH^Vgat 억제 = 섭식 중단**(역으로 D1R 광억제 → 포만 상태에서 섭취↑)이다. 결정적 수치: 같은 LH CTB 주입에서 LH 투사 뉴런의 D1R 발현이 **NAcSh 93.6% vs BNST dorsal 15.1%·ventral 22.8%(n=5)** 로 뒤집힌다. 저자들은 이 반전이 "두 억제 경로가 섭식에서 반대 역할을 하는 이유"의 한 설명이라고 쓴다(본 논문을 ref로 인용). 즉 모순이 아니라 **표적 세포형(Vglut2 brake vs Vgat engine)이 다른 병렬 게이트**다.
- [[nieh-2016-inhibitory-input-from-the]] — MIT **Tye lab**(본 논문은 UNC Stuber lab, 다른 lab)의 Neuron 2016. LH^GABA→VTA disinhibition 축의 1차 출처다. ⚠️ "BNST GABA가 VTA GABA 뉴런을 우선 지배"는 **본 논문의 결과가 아니라** Jennings 2013 **Nature** 496:224(ref 8) 쪽이며, 본 논문에서 BNST→VTA는 **섭식을 유발하지 않는 경로 특이성 대조**로만 쓰였다(figs. S3–S4). ⚠️ "Jennings 2013" 인용 중의성(Science BNST→LH vs Nature BNST→VTA) 주의.
- [[thoeni-2020-depression-of-accumbal-to]] — ⚠️ **"LH^Vglut2 = brake"** 프레임과 직접 긴장하는 결과(Neuron 2020, Lüscher lab). 본 논문은 LH^Vglut2를 억제하면 섭식이 개시된다고 본다. 그쪽은 **NAcSh D1-MSN이 LH^Vgat뿐 아니라 LH^VGluT2에도 단시냅스 억제를 보내고**(기록 세포의 **65%, 28/43**가 광유발 IPSC; LH^VGluT2 starter 단시냅스 rabies에서 NAcSh 입력 **44개 중 43개(97%)가 D1R-MSN**), **급성 식이제한이 두 집단으로 가는 억제를 똑같이 depress**시킨다고 보고한다(Vgat t(21)=2.91 p<0.01; VGluT2 t(17)=2.725 p<0.05). 단순 합산하면 **engine 탈억제(과식↑)와 brake 탈억제(과식↓)가 상쇄**되어야 하는데 순효과는 과식이다 — 원저도 "다소 의외"로 적고 Mickelsen 2019의 **LH GABA·glutamate 30여 아집단**을 해소 후보로 든다. 해소 후보 추가: 두 집단에 가는 **억제의 절대 크기 차이**(그쪽은 VGluT2 쪽 IPSC 진폭을 보고하지 않음)와 [[lee-2026-distinct-lateral-hypothalamic-gabaergic|Lee 2026]]의 ensemble 분해. **미해결로 병기**.
- [[liu-2023-an-iterative-neural-processing]] — LH^GABA 활성으로 섭식 조각을 **개시**(engine 켜기). 본 논문의 BNST^GABA→LH^Vglut2 brake 해제 개시와 더불어 LH 내 두 개시 기전(engine 켜기 vs brake 떼기; Neuron 2023, Wang lab).
