---
title: "Distinct lateral hypothalamic GABAergic ensembles encode motivational salience and value-scaled consumption (Lee … Kim SY 2026, Cell Rep)"
type: paper
created: 2026-10-03
updated: 2026-10-04
source: "raw/2026 Cell Reports. Distinct lateral hypothalamic GABAergic ensembles encode motivational salience and value-scaled consumption.pdf"
authors: [Myungsun Lee, Sieun Jung, JiSoo Jennifer Kwon, Anna Kondaurova, Myungsun Nam, Donguk Kim, Jung Ho Hyun, Sung-Yon Kim]
year: 2026
journal: "Cell Reports 45:118049 (2026-10-27 issue; received 2026-01-19, revised 2026-07-21, accepted 2026-09-07); doi:10.1016/j.celrep.2026.118049 (Open Access, CC BY-NC)"
---

> [!takeaway] 연구 방향 관점의 핵심
> **같은 LH^Vgat 뉴런을 여러 세션에 걸쳐 단일세포 수준으로 추적해 보니, "보상·섭식 뉴런"으로 뭉뚱그려 온 [[concept-lateral-hypothalamus|LH GABA]]가 서로 다른 일반화 규칙을 가진 두 ensemble로 갈린다.** ① **motivational salience ensemble** — 혐오 열자극(37°C 환경의 IR heat)과 먹이 cue(닿지 않는 땅콩버터, 학습된 3 kHz tone)에 **함께** 흥분하고, cue 시작에 phasic하며, pupil-arousal과 더 강하게 결합하지만 **pupil만 키우는 중립 tone에는 반응하지 않는다**. ② **ingestion ensemble** — 먹이·물·고형식의 **섭취 자체**에 일반화되고, 그 크기가 **배고픔·영양 농도에 비례**하며 **exendin-4(GLP-1RA)로 감쇠**한다.
> 사용자 연구에 주는 함의 세 가지. (1) [[concept-need-motivation-pleasure-utility|NMPU]]의 Motivation 뉴런을 찾을 때 **혐오 자극·물 대조**가 없으면 valence 일반 salience를 Motivation으로, 섭취 일반 신호를 먹이 특이 Pleasure로 잘못 배정할 수 있다. (2) [[proposal-lh-nac-nmpu-neuron-discovery|LH–NAc 발굴 과제]]에 직접 경고가 된다. **Cal-Light로 태깅한 두 집단의 투사 패턴(DBB·VTA·DRN·PAG·periLC)이 정성적으로 구분되지 않았다**. 거친 투사 표적만으로 두 ensemble을 가르기 어려울 수 있고, 저자는 정량 connectivity mapping과 분자정체(post hoc 전사체) 대응을 다음 단계로 제시한다. (3) exendin-4가 cue·섭취 반응을 모두 감쇠시켰으므로 LH^Vgat 단일세포 반응은 **GLP-1RA 약리 효과의 판독치** 후보다. cue 단계 감쇠는 [[kim-2024-glp-1-increases-preingestive-satiation|Kim 2024]]의 preingestive satiation과 방향이 같다(연결 가설). (4) [[concept-appetitive-consummatory-phases|appetitive/consummatory]] 이분법에서 "appetitive LH^Vgat subset"으로 불러 온 세포가 실제로는 **valence 무관 salience 코더**일 수 있다.
> 교신은 서울대 화학부·분자생물학 및 유전학 연구소·Program in Neuroscience **김성연(Sung-Yon Kim) lab**으로, 사용자와 같은 SNU의 동료 lab이다. Cal-Light 실험은 DGIST(Department of Brain Sciences) **현정호(Jung Ho Hyun)**([[hyun-2022-tagging-active-neurons-by|soma-targeted Cal-Light]] 제1저자)가 지도했다. 장기 2P 추적과 열 처벌/보상 패러다임 쪽에서 협업 접점이 있다.

# Lee et al. 2026 — LH GABA의 두 ensemble: motivational salience vs value-scaled consumption

## 한 줄 요약
Vgat-Cre 마우스 LH에 jGCaMP8m을 발현시키고 GRIN 렌즈를 통해 **head-fixed 2광자 칼슘 영상을 여러 세션에 걸쳐 같은 뉴런에서 반복**했다. 그 결과 LH^Vgat 안에서 (i) **열 처벌과 먹이 cue에 함께 반응하는 salience ensemble**과 (ii) **섭식·음수·고형식에 일반화되는 ingestion ensemble**이 공간적으로 섞인 채 기능적으로 분리됨을 보였다. food cue 반응은 자극의 상대적 식욕 가치에 따라, 섭취 반응은 배고픔·농도에 따라 달랐고, exendin-4는 두 단계 모두를 감쇠시켰다. 모든 결론은 상관 수준이다(인과 조작 없음). 이 페이지의 **ingestion ensemble**은 원문 Results·graphical abstract의 "consumption(-encoding)" ensemble과 같은 집단이다(원문이 두 표현을 혼용하며, 위키 다른 페이지의 "consumption ensemble"도 이것을 가리킨다).

## 핵심 내용

### 배경 — 저자가 던진 질문
- LH^Vgat은 섭식·보상 추구를 강하게 촉진한다는 것이 지배적 견해다(원문 ref 11–14: [[jennings-2015-visualizing-hypothalamic-network-dynamics|Jennings 2015]]·[[siemian-2021-lateral-hypothalamic-lepr-neurons|Siemian 2021]] 등). 그러나 일부 부분집합은 혐오·회피·음성 valence에도 관여한다(ref 15–17: Jung 2022·[[sharpe-2021-past-experience-shapes-the|Sharpe 2021]]·Li 2018). 분자·투사로 정의된 하위집단(LH^Lepr = 배고픔 의존 food seeking, LH^Nts = 액체 섭취 편향 등)으로 이질성을 나누는 연구가 축적돼 왔다([[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]], [[petzold-2023-complementary-lateral-hypothalamic-populations|Petzold 2023]] 인용).
- 같은 lab의 선행 연구(Jung, Lee … Kim 2022 *Neuron*, ref 15; [[jung-2022-a-forebrain-neural-substrate-for|Jung 2022]])는 열 처벌과 열 보상에 **반대 방향으로 반응하는** LH^Vgat 집단을 찾았다. 이 집단은 operant 체온조절 행동 중 동원됐고, 칼로리 보상 섭취 집단과는 겹침이 적었다.
- 그래서 저자는 다음을 물었다. LH^Vgat의 조직 원리는 **감각 모달리티·항상성 영역(온도 vs 영양)**인가, 아니면 영역을 가로지르는 **상위 기능(접근·회피를 아우르는 motivational salience vs consummatory 행동)**인가?
- **용어의 조작적 정의(원문)**: "cue"는 동기적으로 의미 있는 표적·결과에서 나오거나 그것을 예측하는 외부 감각자극이다. "motivational"은 현재 내부 상태에서의 행동적 관련성이다. "motivational salience"는 **valence와 무관하게 우선 처리가 필요한** 식욕성·혐오성 자극의 행동적 중요성이다.

### 방법
- **소속·교신·코드**: SNU Institute of Molecular Biology and Genetics·Department of Chemistry·Program in Neuroscience(김성연 lab) + DGIST Department of Brain Sciences(현정호 — Cal-Light 실험 지도). 교신 Sung-Yon Kim(sungyonkim@snu.ac.kr). 데이터는 교신저자 요청 시 제공, 원 코드는 GitHub 공개 후 Zenodo 보관(doi:10.5281/zenodo.22178035).
- **동물**: Vgat-Cre/+ (JAX 016962, C57BL/6J 배경), 암수 모두 포함, 8–12주령. 성차를 검정하도록 설계·검정력이 잡힌 연구는 아니다(원문 명시). 역 12 h 명암 주기로 사육했고 암기(dark phase)에 시험했다. SNU IACUC 승인.
- **영상**: AAV1-hSyn-FLEX-jGCaMP8m 400 nL를 LH 한쪽에 주입했다(AP −1.40/ML ±1.10/DV −5.35 mm에서 AP를 0.2 mm 앞으로 옮김). GRIN 렌즈(600 μm 직경, 7.3 mm 길이; Inscopix)는 목표보다 200 μm 위에 두었다. **head-fixed 2광자**(Thorlabs Bergamo II, 920 nm, 20×/0.45 NA 공기 대물렌즈, 30 Hz로 획득해 10 Hz로 평균, 512×512 px ≈ 600×600 μm FOV, 대물렌즈 출력 ≤60 mW). 자유행동 miniscope가 아니다.
- **세포 추출·장기 추적**: Suite2p로 비강체 motion correction(128×128 패치)을 했고, Cellpose(세포 직경 26 px)로 ROI를 검출한 뒤 누락분은 수동으로 추가했다. neuropil 보정은 F_corr = F_raw − 0.7·F_np. **ROIMatchPub**으로 세션 1 FOV를 템플릿 삼아 각 세션을 정합했다(공간 겹침 역치 0.1, surround 5 px). 이후 **수동 검증으로 오정합을 제거**했다(Figure S1B).
- **반응 분류**: 시행별 직전 10 s 기저와 직후 10 s 반응을 Wilcoxon signed-rank(p < 0.05)로 비교해 excited / non-responsive / inhibited로 나눴다. caged food는 0–13 s 평균 정규화 ΔF/F가 >0.5 또는 <−0.5인지로, 위내 주입은 >1 또는 <−1인지로 나눴다(먹이 0–10 min, 물 10–40 min).
- **클러스터링(앙상블 정의)**: IR heat(37°C)와 intraoral 액상 먹이 **두 자극만** 썼다. 각 뉴런의 시간분해 auROC(기저 10 s vs 0–10 s 각 시점)를 이어 붙여 k-means에 넣었다. k = 2–20에서 Calinski–Harabasz 지수가 **k = 3**에서 최대였다(Figures 1–3 뉴런을 합친 자료; Figure S1C). 최종 클러스터링은 1,000회 반복 중 최소 within-cluster 거리 해를 택했다. **caged PB·Pavlovian·tone 반응은 클러스터 정의에 쓰지 않았다**. 일반화를 독립적으로 시험하는 설계다.
- **분석 도구**: 겹침은 hypergeometric test로 검정했다. Pavlovian에는 Lasso 정규화 선형 encoding model을 썼다(B-spline 5 df; cue·보상·누락·spout 후퇴는 0–8 s, lick은 −4~4 s; λ는 5-fold CV). 축소 모델과 비교한 상대 기여 = 1 − R²_reduced/R²_full. pupil은 DeepLabCut 8 landmark에 타원을 맞춰 추정했고(5 Hz) 1 s bin 선형회귀(ΔF/F = β0 + β1·pupil)로 R²를 구했다. 턱 움직임은 DeepLabCut으로 20 Hz 추적했고 시행 수준 **선형 혼합효과 모형**(ΔF/F ~ condition + trial + jaw + (1|mouse) + (1|neuron))에 넣었다.

#### 패러다임 요약
| 패러다임 | 조건 |
|---|---|
| **열 처벌** | 37°C 환경 챔버(수냉 패널)에서 IR heat 5 s, 15 trials, ITI 80 s. 선행연구에서 행동적 혐오로 확인된 조건 |
| 열 보상 (pupil만 측정, Figure S2) | 8°C 환경에서 IR heat |
| **Intraoral 액상 먹이** | 24 h 절식(F-D). 입 안 22G 무딘 바늘로 20 μL/10 s(syringe pump). 액상 먹이 = 분유 |
| **Intraoral 물** | 24 또는 48 h 절수(W-D), 20 μL/10 s |
| **닿지 않는 먹이 cue (caged food)** | F-D. linear actuator로 플라스틱 cage를 7 s 동안 내밀고, 13 s 정지, 7 s 후퇴. PB 단독은 15 trials; PB/chow/빈 cage는 각 4 trials, 순서 counterbalance |
| **Pavlovian** | 하루 2 h 급식 제한. 3 kHz tone 2 s → trace 0.5–1.5 s → 액상 먹이 ~8 μL. 훈련 1–10일(하루 50 trials, 매 시행 보상). **시험 세션에서만** 보상 70%·누락 30% |
| **중립 tone** | 3 kHz, 85 dB, 2 s, 보상·처벌·행동 요구와 짝짓지 않음. 5 trials, ITI 60 s |
| **고형식** | 초콜릿 코팅 비스킷 스틱(Pocky; Glico)을 actuator로 입에 10 s 대기, 후퇴 70 s |
| **가치 조작** | ① F-D·원액 100%, ② F-D·물로 희석한 25%, ③ ad libitum·원액 100% |
| **구강 vs 위내** | 위 fundus 카테터로 600 μL를 100 μL/min 주입(F-D 먹이 / W-D 물) |
| **GLP-1RA** | exendin-4 100 μg/kg i.p. vs saline, 순서 counterbalance. 주입 전 10 min과 주입 후 10 min 기록 → caged PB 또는 intraoral 먹이. 식이 일정은 Methods가 "24 h 절식 후 이틀 연속 실험일에 각 2 h 재급식", Figure 6 범례가 "3일 연속 절식·매일 2 h 재급식, 2·3일차 주사"로 표기가 약간 다르다 |
| **Cal-Light 태깅** | 열 처벌 태깅: 37°C 인큐베이터에서 IR heat 3 s를 30 s 간격으로 주고 heat 전후 1 s 포함 5 s 광, 60회(총 300 s). 섭취 태깅: **절수(하루 1.5 mL)** 마우스가 FR1 nose-poke로 10% sucrose를 얻고, 수용기 진입 시 5 s 광, 60회. 488 nm, 7 mW |

### 결과 1 — 열 처벌 ensemble이 닿지 않는 먹이 cue에도 반응 (Figure 1)
- n = 189 뉴런/4마리: **cluster 1(열 처벌 흥분) 51**, **cluster 2(액상 먹이 섭취 흥분) 46**, cluster 3(둘 다 약함) 92.
- caged PB 반응은 cluster 1에서 cluster 2·3보다 컸다(Kruskal–Wallis + Dunn).
- 겹침: **열 흥분 ∩ caged PB 흥분은 유의**(hypergeometric p = 4.69×10⁻⁴), **액상 먹이 흥분 ∩ caged PB 흥분은 비유의**(p = 0.6441).
- 단일세포 상관: 열 vs caged PB **r = 0.59** (p = 2.37×10⁻¹⁹), 액상 먹이 vs caged PB **r = −0.02** (p = 0.756).
- 즉 **혐오 자극과 식욕 cue가 같은 뉴런을 공유하고, 섭취는 다른 뉴런을 쓴다**. 저자는 이를 반응이 혐오·식욕 맥락을 가로질러 일반화된다는 **첫 증거(initial evidence)** 로 적는다.

### 결과 2 — 학습된 먹이 예측 cue: cue는 cluster 1, 보상·lick은 cluster 2 (Figure 2)
- 5마리에서 예측 licking(cue 후 0–3 s)이 Day 1 → Day 7로 증가했다(paired t, p < 0.05). 학습이 성립했다.
- n = 210 뉴런/4마리(cluster 1 67, cluster 2 60, cluster 3 83). 두 클러스터 모두 cue 이후 활동이 올랐지만 **시간 동역학이 달랐다**.
  - **cluster 1**: cue onset에 맞물린 빠른 phasic 반응이 보상 전에 감쇠했다.
  - **cluster 2**: 예측 구간 동안 **지연 ramp**를 보이다가 보상 전달·섭취 무렵 정점에 이르렀다.
  - cluster 3: 짧은 cue 반응 후 trace 구간 내내 억제됐다. 저자는 이를 집단 안의 추가 반응 motif로 본다.
- **encoding model**: 클러스터 간 R² 분포는 차이가 없었다. 따라서 kernel 차이가 모델 적합도 차이에서 왔다고 보기 어렵다. **cue kernel은 cluster 1 > cluster 2**, **보상·lick kernel은 cluster 2 > cluster 1**이었다. 설명분산의 상대 기여도 cluster 1은 cue, cluster 2는 보상·lick이 우세했다.

### 결과 3 — pupil-arousal과 결합하지만 arousal만으로는 동원되지 않음 (Figure 3, S2)
- 열 처벌은 강한 pupil 확장을, 액상 먹이 섭취는 미미한 변화를 일으켰다(8마리). caged PB도 확장을 일으켰다(S2B, 8마리). **8°C 환경의 열 보상은 pupil 수축**을 일으켰다(S2D, 8마리). 선행연구에서 열 보상은 열 처벌 ensemble을 억제했다.
- pupil 선형모델 R²는 **cluster 1 > cluster 2**였다. 열 세션(47 vs 69 뉴런)과 먹이 세션(55 vs 74 뉴런) 모두 그랬다(각 8마리). 예시 뉴런은 0.302 vs 0.083.
- **결정적 대조**: 중립 tone(3 kHz, 85 dB)은 유의한 pupil 확장을 일으켰지만(9마리) **두 클러스터 모두 기저 수준에 머물렀고** 클러스터 간 차이도 없었다(cluster 1 43, cluster 2 69 뉴런; 8마리). 이 tone은 Pavlovian CS와 **주파수·길이가 같은 3 kHz·2 s tone**이다. 같은 물리 자극이 먹이를 예측할 때만 cluster 1을 동원한 셈이다. 다만 두 실험이 같은 동물·같은 순서였는지는 본문에 명시되지 않았다.
- 저자의 단서: salience 관련 활동이 "각성과 독립"이라고 주장하지 않는다. pupil로 지표화한 각성**만으로는** 이 ensemble의 선택적 동원을 설명하기에 불충분하다고 한정한다. R² 차이는 **상대적 결합**을 보여 줄 뿐, pupil이 이 ensemble 활동을 절대적으로 잘 설명한다는 뜻은 아니다. pupil은 arousal의 간접·불완전 지표이고 지각적 salience를 독립적·모수적으로 조작하지 않았으므로 주의·행동 긴급성·예측 과정이 기여할 수 있다.

### 결과 4 — ingestion ensemble은 먹기와 마시기를 가로질러 일반화 (Figure 4, S3)
- 같은 뉴런에서 F-D 액상 먹이와 W-D 물을 비교했다. n = 366 뉴런/8마리(F-Exc 143, F-Non 113, F-Inh 110; W-Exc 126, W-Non 137, W-Inh 103).
- **흥분 겹침 90개**(p = 6.7×10⁻²⁰), **억제 겹침 59개**(p = 9.0×10⁻¹²). 단일세포 반응 크기 상관 **r = 0.62** (p = 2.20×10⁻⁴⁰).
- **일반화는 불완전하다**. 액상 먹이에만 반응한 뉴런(흥분 34, 억제 41), 물에만 반응한 뉴런(흥분 26, 억제 25), 반대 극성 뉴런(먹이 흥분·물 억제 19, 먹이 억제·물 흥분 10)이 있다.
- **고형식**(별도 실험 세트, n = 132 뉴런/3마리): 액상 먹이 흥분 46, 고형식 흥분 58, **둘 다 30**(p = 6.1×10⁻⁴). 단일세포 상관 r = 0.54 (p = 3.60×10⁻¹¹). 액상 먹이 흥분 뉴런은 고형식 섭취 중에도 강하게 흥분했다. licking과 씹기라는 서로 다른 구강운동 패턴을 넘어 일반화된다.

### 결과 5 — cue와 섭취 반응이 가치 관련 요인으로 조절됨 (Figure 5, S4)
- **cue**(n = 319 뉴런/7마리; caged PB 기준 Cue-Exc 70(22%), Non 236, Inh 13): PB 흥분 뉴런은 chow에 더 약하게, 빈 cage에는 거의 반응하지 않았다(Friedman). cage 제시 자체로는 설명되지 않는다. 저자도 **PB·chow·빈 cage는 감각 정체성이 다르므로 이 비교만으로 정량적 value scaling을 확립하지는 못한다**고 명시했다.
- **섭취**(n = 325 뉴런/8마리; F-D 100% 기준 F-Exc 118, F-Non 77, F-Inh 130):
  - 반응 방향은 조건 간 대체로 보존됐다. **흥분 비율은 안정적**이었고, **억제 비율은 ad libitum에서 감소**했다.
  - 같은 F-Exc 뉴런 안에서 **F-D 100%가 최대**였고, 희석(25%)이나 포만(ad lib)으로 줄었다. F-Inh 뉴런의 억제도 F-D 100%에서 최대였고 저가치 조건에서 약했다. 세 조건은 쌍별 비교가 모두 유의해 흥분·억제 크기 모두 **F-D 100% > F-D 25% > ad lib 100%** 순이다(Figure 5H·J; Friedman + Dunn).
- **턱 움직임 통제**: F-D 마우스는 같은 양을 받아도 ad lib보다 턱을 더 많이 움직였다(5마리). 혼합효과 모형에서 jaw는 시행 수준 ΔF/F의 **유의한 예측자**였다. 그래도 **F-D vs ad lib 조건 효과는 jaw·시행 진행을 통제한 뒤에도 F-Exc·F-Inh 모두에서 유의**했다(n = 228 뉴런/5마리). 즉 상태 의존 조절은 거친 구강운동만으로 설명되지 않는다.

### 결과 6 — 구강 vs 위내: 먹이와 물에서 결합 방식이 다름 (Figure S5)
- 위내(IG) 먹이 반응 뉴런은 **주입 중에** 주로 활성화됐다. IG 물 반응 뉴런은 **주입 종료 후 지연 활성**을 보였다. 저자는 VTA^DA에서 보고된 느린 수화 신호 동역학과 일치한다고 본다([[grove-2022-dopamine-subsystems-track-internal|Grove 2022]] 인용).
- **먹이**(192 뉴런/5마리): IO 흥분 93, IG 흥분 43, 둘 다 30, 겹침 유의(p = 0.0025). IO–IG 반응 크기 r = 0.40 (p = 1.42×10⁻⁸).
- **물**(169 뉴런/4마리): IO 흥분 77, IG 흥분 28, 둘 다 10, **겹침이 우연 수준**(p = 0.3488). r = −0.13 (p = 0.0858).
- 해석(원문): 구강 섭취는 먹이·물 모두 강하게 표상되지만, **구강 반응과 섭취 후(post-ingestive) 반응의 대응은 모달리티마다 다르다**.

### 결과 7 — GLP-1R 작용제가 cue·섭취 반응을 모두 감쇠 (Figure 6, S4, S6)
- **cue**(caged PB; 241 뉴런/6마리, Cue-Exc 112, Non 109, Inh 20): Ex-4는 반응 클래스 **비율은 바꾸지 않고**, **Cue-Exc 반응 크기를 크게 줄였다**. Cue-Inh은 감소 경향이었다(p = 0.053).
- **섭취**(322 뉴런/8마리, F-Exc 101, Non 113, Inh 108): 비율은 그대로였고 **F-Exc의 흥분과 F-Inh의 억제 크기가 모두 감쇠**했다.
- **기저 활동**(주입 후 기저): Ex-4는 **Cue-Exc의 기저를 낮췄고**(Non·Inh은 무변), 섭취 분류에서는 **F-Inh의 기저를 낮췄다**(F-Exc·F-Non은 무변). 저자는 이를 균일한 억제가 아니라 **하위집단 특이적 변화**로 해석한다.
- **턱 움직임 통제**(297 뉴런/9마리): Ex-4 효과는 jaw와 시행 진행을 통제한 뒤에도 F-Exc·F-Inh 모두에서 유의했다. jaw 자체는 F-Exc에는 유의한 예측자였고 F-Inh에는 아니었다.
- 같은 세션의 섭취량 행동 지표는 보고되지 않았다(intraoral 수동 전달 설계).

### 결과 8 — Cal-Light 태깅: 투사 해부로는 두 집단이 갈리지 않음 (Figure S7, 예비 실험)
- **방법**: Cal-Light AAV 3종(pCMV-TM-CaM-NES-TEVp(N)-AsLOV2-TEVseq-tTA / hSyn-M13-TEVp(C)-P2A-tdTomato / TRE-eGFP, 1:1:2)을 섞어 500 nL를 LH 한쪽에 주입했다(AP −1.40, ML ±1.00, DV −5.00 mm). 광섬유로 488 nm 빛을 행동 사건과 짝지었다(태깅 조건은 위 패러다임 표). [[hyun-2022-tagging-active-neurons-by|Cal-Light]]는 Ca²⁺와 빛이 동시에 있을 때만 eGFP를 발현시키는 활성 의존 태깅이다.
- **결과**: 열 처벌로 태깅한 집단과 sucrose 섭취로 태깅한 집단 모두 **DBB·VTA·DRN·PAG·periLC**에 eGFP 표지 투사를 보냈다. 패턴은 **정성적으로 유사**했다(대표 공초점 영상만 제시, 정량 없음).
- 저자 결론: 거친 투사 해부만으로는 두 태깅 집단의 해부학적 분리가 드러나지 않았다. 회로 조직을 밝히려면 더 포괄적이고 정량적인 connectivity mapping이 필요하다.
- **해석상 주의**: ① Cal-Light 구성 요소(CMV·hSyn·TRE 프로모터)는 Cre 의존이 아니어서 태깅 집단은 Vgat 뉴런에 한정되지 않는다(원문도 "LH populations"로 표기). ② 섭취 태깅은 **절수 마우스의 10% sucrose**(수분+칼로리)로 했다. 영상 실험의 cluster 2(액상 먹이로 정의)와 1:1로 대응하지 않는다.

### 저자 해석 (Discussion 요지)
- **salience ensemble = 준비(appetitive) 단계와 연관**: 선행연구에서 같은 ensemble이 operant 체온조절 행동 중 동원됐다. 섭취 ensemble과도 대체로 분리된다. 따라서 consummatory 단계보다 **준비 단계의 동기 과정**과 더 연관된다고 본다([[concept-appetitive-consummatory-phases]]; 고전적 phase 틀의 preparatory/appetitive 과정 — 원문 ref 2·5: LeDoux 2012·[[salamone-2012-mysterious-motivational-functions-mesolimbic|Salamone & Correa 2012]], 서론은 Craig 1918도 인용). 이 ensemble은 행동의 방향(접근 vs 회피)이나 항상성 영역(온도 vs 영양)을 지정하지 않을 수 있다. 대신 **행동을 우선·활성화·신속 재구성해야 할 조건**을 표상할 수 있다. 저자는 이것이 상관 수준이며 인과를 확립하지 않았다고 명시한다.
- **arousal과의 부분 결합 기전(가설)**: LH 억제성 회로는 국소 [[concept-orexin-neurons|orexin 뉴런]]과 뇌 전역 각성계에 밀접히 연결돼 있다. 그래서 salience ensemble이 동기적으로 중요한 감각 사건을 넓은 "행동 준비 상태"로 연결하고, 하류 회로 맥락과 자극 valence가 접근·회피 방향을 결정할 수 있다.
- **ingestion ensemble = consummatory 단계의 수렴 표상**: 상류의 내수용 노드는 모달리티 특이적이다. ARC^AgRP는 배고픔을([[concept-npy-agrp-neurons]]), SFO^Nos1은 갈증을 감시한다. 그 하류인 LH^Vgat는 서로 다른 항상성 요구에 걸친 **공통 consummatory "mode"**를 신호할 수 있다. 다만 모달리티 특이 채널(LH^Lepr·LH^Nts 등)도 공존한다. 저자의 종합은 **"공통 consummatory mode 집단 + 행동 특이성을 보존하는 병렬 모달리티 특이 채널"**이다([[petzold-2023-complementary-lateral-hypothalamic-populations|Petzold 2023]], [[concept-neurotensin]]).
- **가치·포만·구강운동 통합**: food 관련 LH^Vgat 활동은 cue 존재나 섭취 발생을 단순 보고하지 않는다. 두 단계 모두 현재 먹이 가치 관련 요인에 민감하며, 섭취 쪽 증거가 더 강하다. GLP-1R 작용은 표상을 신속히 갱신했다. 일부 하위집단의 기저 감소는 **GLP1R 발현 뉴런 → LH 억제 경로**가 매개할 수 있다(원문 가설, ref 66 = [[lu-2024-dorsolateral-septum-glp-1r-neurons|Lu 2024]]). 섭취 반응은 내부 상태·가치·거친 구강운동을 함께 반영한다. 이는 LH^Vgat 조작이 palatability 유도 섭취(Garcia 2020)와 비특이적 갉기(gnawing)를 바꾼다는 기존 인과 연구와 합치한다([[concept-consumption-vigor]]).
- **회로 후보(미검증)**: salience 쪽 입력 후보는 보상·혐오 모두에 반응하는 [[concept-paraventricular-thalamus|PVT]]·DRN·LC다. ingestion 쪽 후보는 섭취 사건을 표상하는 NAc D1R 뉴런([[concept-nucleus-accumbens]])과 periLC Vglut2 뉴런이다. 기능 정의 ensemble과의 직접 회로 관계는 모른다.
- **분자정체가 다음 단계**: Lepr·Nts·Crh·Gal 등 마커와 투사 정의 집단 중 무엇이 두 ensemble에 대응하는지가 핵심 후속 질문이다. 저자는 종단 기능영상 + post hoc 단일세포 전사체 + projectome + 활성 의존 유전적 접근의 통합을 제안한다([[concept-activity-molecular-registration]]).

### 한계
- **원문 명시**: 결론은 주로 상관적 활동 패턴에 기댄다. 인과를 확립하려면 기능 정의 ensemble을 선택적으로 표적해 cue 유발 동기·회피성 체온조절 행동·consummatory 섭취에 대한 필요·충분성을 시험해야 한다(활성 의존 태깅, 동정된 뉴런 대상 다광자 광유전학 제안). head-fixed 설계이므로 자유행동 패러다임과 다른 동기 영역으로의 확장이 필요하다. PB·chow·빈 cage 비교로 정량적 value scaling을 확립할 수 없다. pupil은 간접 지표이고 지각적 salience를 조작하지 않았다. 성차를 검정할 설계가 아니다.
- **추가 관찰(위키 정리자)**:
  - ensemble은 두 자극(IR heat, intraoral 액상 먹이)만으로 정의됐다(k = 3). 가장 큰 집단은 둘 다 약한 cluster 3(Figure 1에서 92/189)이다.
  - Ex-4 실험에서 섭취량 행동 지표가 없다(수동 intraoral 전달). 식이 일정 표기도 Methods와 Figure 6 범례가 약간 다르다.
  - 선행연구(Jung 2022)에서 **열 보상은 이 열 처벌 ensemble을 억제**했다. 따라서 "valence 무관" salience의 증거는 "혐오 열자극 + 식욕성 먹이 cue 공유"로 한정된다. 열 영역 안에서는 부호가 있는(signed) 반응이다. 원문은 이 점을 한계로 따로 논의하지 않는다.

### 연결 가설 (원문 주장 아님)
1. **NMPU 배정 규칙**: salience ensemble은 먹이 특이적이지 않은 "우선순위화·에너지화" 신호여서 [[concept-need-motivation-pleasure-utility|NMPU]]의 Motivation 중 **valence 비특이 성분**에 가깝다. ingestion ensemble은 가치 스케일링(배고픔·농도·GLP-1RA)을 보이므로 consummatory 단계의 Pleasure/Utility 판독 후보다. 먹이 특이 Motivation 뉴런을 주장하려면 **혐오 자극 + 물(비칼로리) 대조**를 같은 세포에서 시험해야 한다는 설계 기준이 나온다. 또 ingestion ensemble 진폭은 Need(금식)와 영양가(농도)에 함께 비례하므로 [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]]의 Need × Pleasure 곱셈 구조를 단일세포 수준에서 검증할 지표가 된다 — 금식 × 희석 **2×2 설계**에서 진폭이 곱셈적으로 변하는지 보면 된다(원문은 3조건뿐이라 상호작용을 판정할 수 없다).
2. **[[proposal-lh-nac-nmpu-neuron-discovery|LH–NAc 발굴 과제]]**: Cal-Light 결과대로라면 투사 표적(예: LH→VTA) 기반 접근은 두 ensemble을 섞어 잡을 수 있다. 자극 epoch별 기능 태깅(Cal-Light·[[jia-2026-novelty-exploration-activated-ensemble-in|Fos-TRAP]])이나 분자 교차 표지가 더 직접적이다.
3. **GLP-1RA 약력학 판독치**: Ex-4가 cue·섭취 반응과 일부 기저를 하위집단 특이적으로 낮췄다. 원문이 말한 "GLP1R 발현 뉴런 → LH 억제 경로"의 후보로 사용자 lab의 DMH GLP-1R 회로([[kim-2024-glp-1-increases-preingestive-satiation|Kim 2024]])를 검토할 수 있다. 검증되지 않았다([[concept-glp-1]]). DMH GLP-1R→AgRP(식전)에 더해 LH^Vgat cue·섭취 반응이 함께 약화되므로, GLP-1RA가 "식전 기대"와 "섭취 중 가치"를 모두 깎는 **다층 기전** 가설이 되고, LH 섭취 반응 감쇠 폭은 [[concept-glp1ra-response-variability|GLP-1RA 반응 변이]]의 회로 수준 지표 후보다.
4. **[[gordon-2026-lateral-hypothalamic-control-of-the|Gordon 2026]](Stuber lab)**: 같은 해 LHA GABA·Glu 활동이 용액 가치에 따라 반대로 스케일되고 섭취 중 선조체 도파민 기울기를 설정한다고 보고했다. 본 논문의 value-scaled ingestion ensemble이 그 GABA 신호의 단일세포 기질일 수 있다.
5. **[[liu-2026-granular-motivational-interaction-and|Liu 2026]]의 granular phase 분해**: seeking→approaching→sustained eating 단계 중 본 논문 두 ensemble은 "cue/준비" 대 "sustained eating" 축에 대응한다. 사이 단계(접근·탐색)의 코딩은 이 설계(head-fixed)로는 볼 수 없다.
6. **[[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]] LH^LepR 2 subpopulation과의 대응**: consummatory LepR subset이 본 논문 ingestion ensemble의 분자 부분집합인지, seeking subset이 salience ensemble과 겹치는지를 검증할 수 있다. 겹친다면 LepR seeking 뉴런도 혐오 자극에 반응해야 한다.
7. **Cue reactivity·DTx**: 먹이 cue에 대한 salience ensemble 반응은 혐오 자극과 공유되는 "우선순위" 신호다. 인간 [[concept-cue-reactivity|cue reactivity]]의 각성 성분(동공·SCR)과 가치 성분을 분리해 측정해야 함을 시사하며, 중립 tone 대조 설계는 인간 fMRI·동공 실험에 이식할 수 있다.
8. **LH 화학유전 유전자치료(NHP)**: [[ha-2024-hypothalamic-neuronal-activation-non-human|Ha 2024]]의 비선택적 LH^Vgat 조작은 salience·ingestion 두 ensemble을 동시에 건드린다. 효과(목표지향 섭식)와 부작용(혐오·각성)을 분리하려면 ensemble 선택 접근이 필요하다는 근거가 된다.

### ⚠️ 위키 내 충돌·긴장 (병기, 덮어쓰지 않음)
1. **[[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]](사용자 lab)**: "LH GABA 중 8%만 food-specific"은 **먹이(chocolate) vs 레고(비먹이 물체)** 비교로 정의된 값이다. 본 논문의 ingestion ensemble은 **물·고형식으로 일반화**되고, cue ensemble은 **혐오 열자극에도 반응**한다. 비교 축이 달라 직접 모순은 아니다(먹이 vs 물체 특이성 ≠ 섭취 모달리티 일반성). 수치로 보면 caged PB 흥분 뉴런은 Figure 5 데이터에서 22%(70/319)이고 Figure 1 데이터에서 PB 흥분 집단은 heat 흥분 집단과 유의하게 겹치며(p = 4.69×10⁻⁴), 액상 먹이 흥분 뉴런(F-Exc 39%, 143/366)도 다수가 물에 반응한다 — "먹이 cue 반응의 다수는 비특이 salience, 진짜 food-specific은 소수"라는 그림으로 **양립 가능**하다. 다만 자유행동 vs head-fixed, 대조 자극이 달라 비율 수치를 같은 기준으로 비교하면 안 된다. 오히려 Lee 2023의 **seeking vs consummatory 하위집단 분리**는 본 논문의 cue vs ingestion 분리와 **수렴**한다. 본 논문은 이를 2광자 단일세포 종단 추적으로 재현하고 혐오 영역까지 확장한 셈이다. 남는 질문: food-specific LepR 뉴런은 두 ensemble 중 어디에 속하는가, 아니면 모달리티 특이 소수 채널(먹이에만 반응하는 34개 같은)인가?
2. **[[concept-lateral-hypothalamus]]·[[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]]의 "LH GABA = palatability 인코딩(calorie 아님)"**: 본 논문에서는 **맛 없는 위내 먹이 주입에도** 반응하는 LH^Vgat 뉴런이 있었다. 그 반응은 구강 반응과 유의하게 겹쳤다(r = 0.40). 그러니 "calorie 아님"은 일반화하기에 강한 표현이다. palatability 코딩(Garcia: sucrose)과 post-ingestive 영양 신호가 공존할 수 있다. 서지 메모(2026-10-03 해소): 본 논문 참고문헌은 Garcia et al. **2020**, *Front Neurosci* 14:608047로 인용하고, [[jung-2022-a-forebrain-neural-substrate-for|Jung 2022]]는 **동일한 권·페이지를 2021**로 인용한다. 같은 논문의 연도 표기가 두 논문에서 다른 것이며 위키의 "Garcia 2021"은 오류가 아니다. 인용 시 14:608047을 함께 적는다.
3. **[[jia-2026-novelty-exploration-activated-ensemble-in|Jia 2026]]의 "LH = 양가 general salience hub"**: Jia는 Fos-TRAP 집단 광도측정에서 통각·air puff·보상(물·sucrose)에 **모두** 반응하는 hub를 보고했다. 본 논문은 단일세포 수준에서 **salience(혐오 열 + 먹이 cue)와 섭취(먹이·물)가 대체로 다른 뉴런**임을 보였다. 집단 광도측정이 두 ensemble의 합을 본 것일 수 있다(가설). 다만 Jia의 집단은 Vgat·Vglut2를 모두 포함하고 novelty로 태깅됐으므로 직접 비교에는 한계가 있다. salience 축에서는 두 논문이 정합하지만 같은 집단인지는 미검증이다.
4. **"LH^Vgat = 보상 추구·섭식 촉진(engine)" 지배 견해**([[stuber-2025-the-neurobiology-of-overeating|Stuber 2025]]·[[chen-2025-the-integrated-function-of-the|Chen 2025]]의 LHA^Vgat "engine"·[[concept-lateral-hypothalamus]]의 "GABAergic = 식이 ↑" 등): 본 논문은 LH^Vgat의 상당 부분(Figure 1 cluster 1, 189개 중 51개)이 혐오 열자극에 흥분하고 같은 세포가 식욕 cue도 공유함을 보여 이 견해를 넓힌다. 저자 스스로 "strictly reward-specific 해석과 조화되기 어렵다"고 쓴다. 다만 인과 조작 결과(활성 → 섭식 ↑)와 활동 상관(일부는 valence 무관)은 층위가 달라, **모순이라기보다 병기할 사항**이다.
5. **Appetitive LH^Vgat subset의 해석**: [[concept-appetitive-consummatory-phases]]·[[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]] 표의 "LH^Vgat subset A: food contact에서 peak(appetitive)"는 [[jennings-2015-visualizing-hypothalamic-network-dynamics|Jennings 2015]] 기반이다. 본 논문은 그런 cue/appetitive 반응 세포가 **먹이 특이가 아니라 혐오 자극에도 반응하는 salience 코더**일 수 있음을 시사한다. 단 본 논문은 head-fixed라 자유행동 seeking phase를 직접 측정하지 않았다.
6. **[[grove-2022-dopamine-subsystems-track-internal|Grove 2022]] "LH GABA가 체액 균형(수화)을 추적해 VTA DA에 전달"**: 본 논문에서 위내 물 주입에 대한 LH^Vgat 반응은 지연 상승으로 Grove의 kinetics와 정합한다. 그러나 **구강 음수 흥분 뉴런과 위내 수화 흥분 뉴런은 우연 수준으로만 겹친다**(77·28·10, p = 0.3488). "LH GABA = 수화 추적"은 구강 섭취 ensemble과는 다른 하위집단의 속성일 가능성이 있다(먹이에서는 구강·위내 반응이 유의하게 겹친다).
7. **[[liu-2026-granular-motivational-interaction-and|Liu 2026]] "LH^GABA = initiation hub(개시만, 유지 아님)"**: 본 논문의 ingestion ensemble은 10 s 섭취 내내 지속 반응하고 가치 요인에 따라 조절된다. maintenance 단계에도 LH^Vgat 표상이 있음을 시사한다(단 본 논문은 상관 관찰이고 Liu의 분류는 인과 조작 기반 — 병기).

## 관련 페이지
- [[concept-lateral-hypothalamus]] — LH hub; LH^Vgat 이질성을 기능 ensemble(salience vs ingestion)로 분해한 단일세포 근거 추가
- [[concept-appetitive-consummatory-phases]] — salience ensemble = 준비(preparatory/appetitive) 단계, ingestion ensemble = consummatory 단계의 세포 수준 분리; phase 표의 LH^Vgat 행 재해석(위 충돌 5)
- [[concept-need-motivation-pleasure-utility]] · [[kim-2024-unified-theoretical-framework-underlying-regulation]] — Motivation(valence 비특이 salience) vs Pleasure/Utility(가치 스케일 섭취) 배정 기준·매핑 가설
- [[proposal-lh-nac-nmpu-neuron-discovery]] · [[proposal-lh-nac-nmpu-nrf-junggyeon]] — 투사 기반 표적의 혼합 위험, 기능 태깅·분자 교차 필요
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] — 사용자 lab LH^LepR: seeking vs consummatory 2 subpopulation 분리와 수렴, food-specific 정의 축·비율 차이(위 충돌 1), LepR subset ↔ 두 ensemble 대응 가설(연결 가설 6)
- [[petzold-2023-complementary-lateral-hypothalamic-populations]] — LH^Lepr/LH^Nts 모달리티 편향 채널(본 논문의 "병렬 채널")
- [[sumarli-2026-multidimensional-control-of-ingestive-behavior]] — LH^Nts 음수 편향. 본 논문의 모달리티 특이 잔여 하위집단 후보
- [[gordon-2026-lateral-hypothalamic-control-of-the]] — 같은 해 Stuber lab: LHA GABA·Glu 가치 스케일링 → 선조체 DA 기울기
- [[jia-2026-novelty-exploration-activated-ensemble-in]] — 집단 수준 양가 salience hub(Fos-TRAP 광도측정) vs 단일세포 ensemble 분리; salience 축은 다른 방법으로 수렴하나 같은 집단인지는 미검증
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — 사용자 lab LH 리뷰(palatability vs calorie 서술과 긴장; LH^Vgat appetitive/consummatory subset 서술과 비교)
- [[chen-2025-the-integrated-function-of-the]] — LHA^Vgat "engine" 프레임과 대비(위 충돌 4)
- [[korotkova-2026-balancing-acts-lateral-hypothalamic]] — LH 다중 동기 arbitration. salience ensemble이 영역을 가로지르는 우선순위 신호 후보
- [[kim-2024-glp-1-increases-preingestive-satiation]] — GLP-1R 작용의 preingestive 단계 효과; 식전 포만 회로(DMH)와 병렬인 LH 작용 지점(연결 가설)
- [[concept-glp-1]] — exendin-4가 LH^Vgat cue·섭취 반응 감쇠
- [[concept-glp1ra-response-variability]] — Ex-4에 의한 LH 섭취 반응 감쇠 폭을 반응 변이의 회로 수준 지표 후보로(연결 가설 3)
- [[concept-cue-reactivity]] — 먹이 cue 반응의 각성 vs 가치 성분 분리(중립 tone 대조; 연결 가설 7)
- [[ha-2024-hypothalamic-neuronal-activation-non-human]] — 비선택적 LH^Vgat 조작의 해석 한계(연결 가설 8)
- [[salamone-2012-mysterious-motivational-functions-mesolimbic]] — 원문이 인용한 preparatory/consummatory·activational 동기 프레임(ref 5)
- [[hyun-2022-tagging-active-neurons-by]] — 본 논문 Cal-Light 태깅의 방법 원전(공저자 현정호)
- [[concept-activity-molecular-registration]] — 기능 정의 ensemble ↔ 분자정체 정합(저자가 제안한 다음 단계)
- [[grove-2022-dopamine-subsystems-track-internal]] — 물의 느린 post-ingestive 신호 동역학(IG 물 지연 반응 해석 근거). kinetics는 정합하지만 수화 반응 뉴런은 구강 음수 ensemble과 분리됨(위 충돌 6)
- [[concept-consumption-vigor]] — 섭취 반응이 턱 움직임·상태·가치를 함께 반영
- [[concept-orexin-neurons]] — salience ensemble과 arousal(각성망) 결합의 국소 기전 후보(원문 Discussion)
- [[concept-paraventricular-thalamus]] — 양가 salience 입력 후보
- [[concept-npy-agrp-neurons]] — 모달리티 특이 상류 노드(배고픔) vs LH 수렴 표상
- [[liu-2026-granular-motivational-interaction-and]] — 섭식 phase 세분화 framework와의 대응; "LH^GABA = initiation hub" 서술과는 대비(섭취 중 지속·가치 조절 — 위 충돌 7)
- [[stuber-2025-the-neurobiology-of-overeating]] — LH GABA 보상 추구 중심 견해(본 논문이 확장)
- [[xu-2020-behavioral-state-coding-by]] — PVH grouped-ensemble coding; 행동상태 일반 ensemble이라는 유사 조직 원리
- [[person-kim-sung-yon]] — 교신저자(SNU). 선행작 Jung 2022와 함께 LH^Vgat 단일세포 ensemble 연구 라인
- [[jung-2022-a-forebrain-neural-substrate-for]] — 같은 lab의 선행 원저(ref 15). 본 논문 "열 처벌 ensemble"의 출처: 열 처벌에 흥분·열 보상에 억제되는 LH^Vgat 하위집단, 칼로리 보상 집단과 분리 (Neuron 2022)
- [[jennings-2015-visualizing-hypothalamic-network-dynamics]] — 본 논문이 재해석하는 통념의 원전. Jennings는 microendoscope로 LH^Vgat의 **appetitive(nose-poke) 세포 vs consummatory(lick) 세포**가 거의 겹치지 않음을 보였다(Cell 2015). ⚠️ 본 논문은 그 "appetitive" cue 반응 세포가 **혐오 열자극에도 반응하는 valence 무관 salience 코더**일 수 있음을 시사 — 단 Jennings는 자유행동 보상 과제, 본 논문은 head-fixed라 조건이 다름(병기).
- [[nieh-2016-inhibitory-input-from-the]] — 본 논문 Discussion이 "LH^Vgat = 보상 추구·강화" 통념의 근거로 인용한 원전(ref 54; Tye lab, Neuron 2016). GABA성 LH→VTA를 valence 무관 motivational salience 장치로 본 해석은 본 논문의 salience ensemble과 수렴(인과 vs 상관·병기).
- [[bonnavion-2016-hubs-and-spokes-of]] — LHA 세포타입·회로 분류 리뷰(J Physiol 2016). 본 논문이 단일세포로 분해한 LHA^GABA "appetitive/consummatory 2군"(Jennings 2015)의 상위 리뷰 맥락.
- [[siemian-2021-lateral-hypothalamic-lepr-neurons]] — 본 논문이 미해결로 남긴 **분자 정체(Lepr)** 쪽 인과 데이터: LH^LepR는 섭취를 전혀 구동하지 않고 appetitive만 구동하며, 단일세포 영상에서 **cue 반응 LH^Vgat는 CS+/CS− 미변별, LH^LepR만 변별**한다(CS+ 선택성 centroid 2.00 vs 1.26) (Cell Rep 2021, Aponte lab). 본 논문의 "cue 반응 ensemble = valence 무관 salience"와 **수렴 가능**: 변별하는 소수(LepR) vs 변별하지 않는 다수(나머지 Vgat)로 읽을 수 있다. ⚠️ 단 Siemian은 자유행동 1-photon에 혐오 자극 없는 과제이고, ingestion ensemble에 해당하는 modality 일반화는 검사하지 않았다(병기).
- [[mickelsen-2019-single-cell-transcriptomic-analysis-of]] — 본 논문이 미해결로 남긴 **분자 정체(Lepr·Nts·Crh·Gal)** 를 조회할 1차 census(Nat Neurosci 2019, Jackson lab): LHA^GABA 15 + LHA^Glut 15 클러스터. 특히 **LHA^GABA cluster 3(Nts/Cartpt)이 Crh형 vs Tac1형으로 거의 상호배타**(둘 다 9.9% / Tac1만 50.4% / Crh만 39.7%)로 갈리는 결과는, 본 논문 salience ensemble vs ingestion ensemble의 **분자 후보 쌍**으로 바로 대조해 볼 수 있다(연결 가설 — 그쪽은 기능 미측정, 본 논문은 분자 미측정). ⚠️ 단 그쪽은 P30 juvenile 해리 세포이고 Pmch·Hcrt는 ambient mRNA로 전 클러스터에 번진다.
- [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal]] — LH^Vgat의 **분자 아집단(LepR)에서 본 valence 교차 반응**(Nat Neurosci 2025, Korotkova lab). LH^LepR는 anxiogenic 공간(EPM open arm-excited 34% vs closed 8%)과 **그 맥락의 음식**(NSFT 중앙 먹이)에 함께 반응하므로, 본 논문의 **valence 무관 salience ensemble**과 방향이 수렴한다. ⚠️ 다만 그쪽은 **저불안 개체에서는 두 anxiogenic 자극(EPM open arm vs NSFT 중앙)을 변별**하고(중첩 46%, KS P=0.0005) **고불안 개체에서만 변별이 무너진다**(중첩 84%, P=0.8) — 즉 "비변별 salience"는 개체의 불안 상태에 따라 달라지는 성질일 수 있다. 세포 정의(LepR 특이 vs 전체 Vgat)·과제(자유행동 vs head-fixed)·자극(공간 불안 vs 열 처벌)이 모두 달라 수치 직접 비교는 안 된다(병기). 또 그쪽은 **LH^Nts가 불안 자극에 반응하지 않음**(open-excited 6% < closed 14.6%, P=0.0055)을 보여 본 논문이 남긴 modality 특이 잔여 하위집단 해석에 제약을 더한다.
- [[liu-2023-an-iterative-neural-processing]] — GAD2 LH^GABA bulk photometry: 비식용 플라스틱 물체에도 먹이와 같은 접근·접촉 반응(R=0.556) → "표적 탐침 충동" 해석. 본 논문 salience ensemble과 같은 방향. ⚠️ 긴 접촉에서 반응이 끝나기 전에 소실(R=0.387)되어 "initiation만"으로 결론 — 본 논문 ingestion ensemble(섭취 내내 지속·value-scaled)과는 bulk vs 단일세포 해상도 차이로 병기 (Neuron 2023, Wang lab).
- [[sharpe-2017-lateral-hypothalamic-gabaergic-neurons]] — rat LH^GABA의 **인과** 원전(Curr Biol 2017). cue 구간만 광억제하면 CS+ **와 CS− 반응이 함께** 떨어진다(섭취는 정상) → 본 논문의 "cue 반응 ensemble = valence 무관·비변별 salience"와 **수렴 가능**한 인과 증거다. ⚠️ 단 Sharpe는 혐오 자극을 쓰지 않았고(자유행동 rat·광억제), 본 논문은 인과 조작이 없다(head-fixed 2-photon) — 수렴 가설 수준(병기).
- [[sharpe-2021-past-experience-shapes-the]] — 본 논문 배경에서 "일부 LH^Vgat는 혐오·회피 신호에도 관여한다"(ref 16)로 인용한 **원전 페이지**(Nat Neurosci 2021). 원전의 주장은 활동이 아니라 **필요성**이다: naive rat에서 LH^GABA 억제는 공포 학습에 **영향이 없고**(n=4/4), **cue–보상 수반성 경험 후에만** 공포 학습이 무너진다. ⚠️ 본 논문은 LH^Vgat의 상당수가 **열 처벌에 흥분**함을 보이므로, 두 결과는 **활동(있음) vs 필요성(없음)의 층위 차**로 병기해야 한다. 단 본 논문 마우스의 선행 보상 경험 이력은 PDF에서 확인되지 않는다(흡수 전 중복 페이지의 "거의 naive에 가까운 마우스"는 근거 미확인 ⚠️). 바로 맞물리는 후속: **사전 보상 경험 유무를 군으로 나눈 2-photon 추적** — 모집 가설은 naive 마우스에서 혐오 반응 ensemble이 더 작을 것을 예측한다(연결 가설).
- [[sharpe-2024-the-cognitive-lateral-hypothalamus]] — Sharpe 'cognitive LH' Opinion(Trends Cogn Sci 2024). LH는 중요한 사건(음식·물·사회·약물·**통증**) 쪽으로 학습을 편향시키고 **중립 정보 학습에는 반대**한다는 주장이다. 본 논문의 salience ensemble(혐오 열자극·음식 cue 반응, 동공을 키우는 **중립 tone 무반응**)은 이 이론과 활동 수준에서 정합한다. ⚠️ Opinion Box 2는 naive rat LH가 공포 학습에 관여하지 않고 **보상 경험 후에야 priming**된다고 한다. 본 논문 마우스의 강한 혐오 열 반응이 선행 음식 과제 경험에 의존하는지는 검증 대상이다(연결 가설). Ex-4의 cue 반응 약화는 'dial 낮추기' 가설의 근거가 된다.
- [[hoang-2021-the-basolateral-amygdala-and]] — Sharpe lab 리뷰(Curr Opin Behav Sci 2021)는 cue-onset **phasic salience를 BLA**에, 보상 예측 cue에 대한 **길고 지속적인 활동을 LH**(Otis 2019 LH 말단 영상)에 배정한다. ⚠️ 본 논문은 LH^Vgat **안에도** cue onset에 고정된 phasic·valence 무관 salience ensemble(cluster 1)과 보상까지 ramp하는 ensemble(cluster 2)이 공존함을 보인다. 그 분업은 단일세포 수준에서 단순화다(rat Fos·bulk vs mouse 단일세포 — 병기). 리뷰의 'LH = 현재 동기 상태 관련성 평가'는 본 논문 ingestion ensemble의 금식·Ex-4 value-scaling과 같은 방향이다.
- [[harris-2005-a-role-for-lateral]] — ⚠️ **선택성 주장의 반대편 극**(Nature 2005, Harris & Aston-Jones). 본 논문은 LH^Vgat에 **valence·modality를 가로지르는 salience ensemble**이 있다고 보지만, Harris 2005는 **LH orexin 뉴런이 소비성(음식·약물) 보상 cue에만 선택적**이라고 결론한다 — morphine·cocaine·food CPP에서 Fos 48–52%·선호와 R=0.72–0.90인데, 같은 크기의 선호를 만드는 **novel object CPP에서는 무변화(18±2%)** 이고 **발바닥 전기충격도 LH orexin을 켜지 않는다**(DMH·PFA만 켠다). 본 논문 Discussion이 salience ensemble의 후보 상호연결로 지목한 **국소 orexin 뉴런**이 바로 그 집단이다. **세포타입 분업으로 봉합 가능한 연결 가설**: LH^Vgat salience ensemble = 광범위·valence 무관 / LH^orexin = 소비성 보상 cue 선택적. 검증은 2-photon 추적 뒤 **post hoc Hcrt 표지**로 두 ensemble과 orexin의 중첩을 직접 재는 것이다(양쪽 원문 주장 아님).
- [[oconnor-2015-accumbal-d1r-neurons-projecting]] — 본 논문이 분해한 LH^Vgat의 **상류 억제 입력**(Neuron 2015, Lüscher lab): LH^Vgat의 **78%(28/36)** 가 NAcSh 입력의 광 유발 IPSC를 받고(803±217 pA), rabies 입력의 **97%가 NAcSh D1R-MSN**이다. 그 D1R-MSN은 섭취 중 발화가 떨어지고 **종료와 함께 오르며**(8/9 units, p<0.05), LH 말단 광자극이나 LH^Vgat 직접 광억제는 **24 h 금식에도 진행 중 licking을 한 lick 단위로 중단**시킨다. 본 논문이 열어 둔 질문과 바로 맞물린다 — **salience ensemble과 ingestion ensemble 중 어느 쪽이 이 D1R 억제를 받는가**(원전은 LH^Vgat를 단일 집단으로 취급). 연결 가설: 원전의 "섭취 중단"은 **ingestion ensemble 차단**으로, 방해자극 효율은 **salience ensemble 동원**으로 분해될 수 있다. ⚠️ 원전은 상관 기록이 아니라 인과 조작 중심이고 head-fixed가 아닌 자유 섭취 과제다.
- [[thoeni-2020-depression-of-accumbal-to]] — 본 논문이 분해한 LH^Vgat에 들어오는 **상류 억제 입력의 "상태 의존 가소성"**(Neuron 2020, Lüscher lab). [[oconnor-2015-accumbal-d1r-neurons-projecting|O'Connor 2015]]의 D1-MSN→LH 게이트가 **하룻밤 급성 식이제한 또는 3일 고지방식에서 eCB–CB1R 의존적으로 depress**되고(체중 회복 후 1주면 소실), CB1R 차단이 과식을, 역방향 HFS potentiation이 금식 섭취를 막는다. 본 논문과 바로 맞물리는 질문: **salience ensemble과 ingestion ensemble 중 어느 쪽이 이 i-LTD를 받는가**(원저는 LH^Vgat을 단일 집단으로 취급). 연결 가설 — 그쪽 과식 증가가 **bout 수(동기)에만** 나타났으므로 **salience/cue 쪽 ensemble 우세**를 예측할 수 있다. 참고로 원저는 **LH^VGluT2도** D1-MSN 억제를 받고(연결 65%, rabies 입력 97%가 D1R-MSN) 같은 가소성을 보인다고 보고하므로, 본 논문의 ensemble 분해가 그 "부호 상쇄 문제"의 해소 후보다. ⚠️ 그쪽은 ex vivo 전기생리·행동 인과이고 단일세포 활동 기록이 없다(병기).
- [[lu-2024-dorsolateral-septum-glp-1r-neurons]] — 본 논문이 Ex-4의 LH^Vgat 반응 약화 기전 후보로 지목한 **"GLP1R 뉴런→LH 억제 경로"(ref 66)** 의 1차 데이터 계열: **dLS^GLP-1R → LHA**가 GABA성 단시냅스 억제이고, **exendin-4가 그 시냅스의 oIPSC를 키우며 PPR을 낮춘다**(IPSC t(10)=2.312 p=0.0461 / PPR t(10)=3.135 p=0.0120) → GLP-1RA가 LH^Vgat 활동을 깎는 **시냅스 전 하행 기전** 후보. 두 논문이 서로의 빈 칸을 메운다(Lu는 하류 LHA 세포형을 추정만, 본 논문은 상류 억제원을 미측정). ⚠️ 단 Lu의 조작은 **LHA^Vgat를 단일 집단으로 가정**해야 부호가 맞으므로, 본 논문의 salience/ingestion ensemble 중 어느 쪽이 이 억제를 받는지가 다음 질문이다 (bioRxiv preprint 2024 → Mol Metab 85:101960). → [[concept-lateral-septum]]
- [[rossi-2019-obesity-remodels-activity-and]] — 같은 head-fixed 2-photon 접근의 **glutamatergic 짝**(Science 2019, Stuber lab). LHA^Vglut2의 sucrose 섭취 반응은 **prefed > 24 h fast**로, 본 논문 ingestion ensemble(금식 > 자유급식)과 **거울상 상태 의존성**을 보인다(Vgat=value/need 비례, Vglut2=포만 비례 brake). 만성 HFD에서는 Vglut2 쪽만 둔화됨이 보고됨 — 같은 HFD 조건에서 ingestion ensemble 진폭이 어떻게 변하는지는 미검증(연결 가설).
- [[rossi-2021-transcriptional-and-functional-divergence]] — **valence를 가로지르는 흥분 코딩의 glutamatergic 짝**(Neuron 2021, Stuber lab). LHA^Vglut2 투사 뉴런은 sucrose와 quinine에 **둘 다 흥분**으로 반응하고 세포 수준에서 강하게 상관(LHb r=0.86, VTA r=0.72)하며, 혐오 쪽 증폭은 VTA 투사에서 더 크다. 본 논문의 LH^Vgat salience ensemble과 **"LH는 세포타입을 가로질러 valence 무관 흥분 신호를 쓴다"** 는 방향에서 수렴한다. ⚠️ 단 **상태 의존성 부호가 서로 다르다**: 본 논문 ingestion ensemble은 금식↑, Rossi 2021의 두 투사 집단도 금식↑(F(1,578)=21.77, p=3.8e-6)인데 [[rossi-2019-obesity-remodels-activity-and|Rossi 2019]]의 bulk LHA^Vglut2는 포만↑로 적혀 있다. 과제(구강 주입 vs 자발 섭취)·해상도·투사 정의가 모두 달라 직접 비교는 안 된다(병기).
- [[subramanian-2023-hypothalamic-melanin-concentrating-hormone-neurons]] — **같은 LH의 다른 세포군(MCH)에서 본 cue+섭취 통합**(Nat Commun 2023, Kanoski lab, rat). 본 논문이 LH^Vgat에서 salience/ingestion **두 ensemble로 분리**한 기능을, MCH는 **한 집단이 둘 다** 보인다(cue CS+>CS−, P=0.0042 / 섭취 중 상승, 누적 칼로리 R²=0.9299). ⚠️ 상태 의존성의 **부호가 다르다**: 본 논문 ingestion ensemble은 금식>자유급식으로 value-scaled인데, MCH는 "tone이 **포만 상태에서 더 높다**"(마지막 bout 후 5 min AUC > 음식 전, P=0.0061)고 보고한다 — 세포타입·종·지표(진폭 vs tone)가 달라 직접 비교는 불가(병기). 본 논문의 **Ex-4가 cue·섭취 반응을 모두 깎는다**는 결과는, MCH의 appetition 신호에도 GLP-1RA가 작용하는지를 묻는 직접 후속 실험을 제안한다(연결 가설).
- [[de-vrind-2019-effects-of-gaba-and]] — 같은 LH^Vgat를 **bulk hM3Dq**로 수 시간 켠 대비 사례(Obesity 2019): 실제 chow 섭취는 불변인데 비식용 물체 갉기만 증가하고 palatable 선호는 ↓ → 본 논문이 분해한 **salience ensemble vs value-scaled ingestion ensemble**을 동시에 켜면 salience/개시 쪽이 우세하게 동원된다는 읽기(연결 가설, 원문 주장 아님). 방법 대비: 본 논문은 턱 움직임(DeepLabCut)을 공변량으로 넣어 구강운동 성분을 **통계적으로** 분리했고, 그쪽은 chow 가루 칭량·비식품 대조물로 **물리적으로** 분리했다.
- [[tan-2022-lateral-hypothalamus-calcium-calmodulin-dependent-protein]] — **같은 탐색/섭취 이분법을 GABA 밖에서 그린 짝**(Research 2022, Zhejiang Chen lab). 본 논문이 LH^Vgat **안에서** salience ensemble vs value-scaled ingestion ensemble로 가른 분업을, 그쪽은 **CaMKIIα⁺(Vgat-cre×Ai47에서 GABA와 거의 비중첩)** 집단의 **세포체 vs vPAG 말단**이라는 출력 축에서 재현한다 — 세포체 자극은 추격·운반, vPAG 말단 자극은 물기·섭취, 상류 MPOA→LH 말단 자극은 **사냥만(섭취 없음, P=0.7926)**. ⚠️ 활동 부호의 방향은 반대다: 그쪽 CaMKIIα 광계측은 **섭취가 시작되면 하강**하는데 인과 조작은 섭취를 늘린다(본 논문 ingestion ensemble은 섭취 중 지속·value-scaled). 두 집단의 중첩은 미검증이며, 위키에 동일 이분법이 **세 가지 세포타입 좌표계**에서 독립 보고되어 있다는 점을 병기(연결 가설).
