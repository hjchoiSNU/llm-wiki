---
title: "Distinct lateral hypothalamic GABAergic ensembles encode motivational salience and value-scaled consumption (Lee 2026, Cell Rep)"
type: paper
created: 2026-10-03
updated: 2026-10-03
source: "raw/2026 Cell Reports. Distinct lateral hypothalamic GABAergic ensembles encode motivational salience and value-scaled consumption.pdf"
authors: [Myungsun Lee, Sieun Jung, JiSoo Jennifer Kwon, Anna Kondaurova, Myungsun Nam, Donguk Kim, Jung Ho Hyun, Sung-Yon Kim]
year: 2026
journal: "Cell Reports 45:118049 (2026-10-27); doi:10.1016/j.celrep.2026.118049 (Open Access CC BY-NC)"
---

> [!takeaway] 연구 방향 관점의 핵심
> **LH^Vgat는 "보상·섭식 engine" 단일 집단이 아니라, 공간적으로 섞여 있는 두 기능 ensemble로 나뉜다** — 같은 뉴런을 여러 세션에 걸쳐 2-photon으로 추적해 보인 결과. ① **motivational salience ensemble**: 혐오 열자극(37°C 환경의 IR heat)에도, 먹을 수 없는 음식 cue(우리에 든 땅콩버터)에도, 학습된 음식 예측 tone에도 반응한다(valence 무관). 그러나 동공을 키우는 중립 tone에는 반응하지 않는다. ② **consumption ensemble**: 먹이·물·고형식을 가리지 않고 **섭취 그 자체**에 반응하며, 진폭이 **배고픔·영양 농도·GLP-1RA(Ex-4)**에 따라 **value-scaled**된다. 서울대 화학부 **김성연(Sung-Yon Kim) lab**(사용자 lab과 같은 SNU)의 연구로, 선행 [[concept-lateral-hypothalamus|LH]] 열조절 연구(Jung 2022 Neuron)를 섭식 영역으로 확장했다.
> 사용자 연구에 닿는 지점: (1) **[[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]] 매핑** — salience ensemble은 Motivation(활성화·우선순위)에, value-scaled consumption ensemble은 Need×Pleasure가 곱해진 consummatory Utility 신호에 대응한다는 *연결 가설*을 세울 수 있다. (2) **[[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]의 "food-specific LH GABA"와 긴장** — 이 논문의 cue 반응 ensemble 상당수는 혐오 열자극에도 반응하므로 food-specific이 아니다. (3) **[[concept-glp-1|GLP-1RA]]가 LH^Vgat의 cue 반응과 섭취 반응을 모두 깎는다** — 사용자 lab [[kim-2024-glp-1-increases-preingestive-satiation|Kim 2024 Science]](DMH GLP-1R→AgRP 식전 포만)와 나란히 LH 쪽에서도 식전·섭식 중 두 단계 모두에 작용함을 보여 준다. (4) [[concept-appetitive-consummatory-phases|appetitive/consummatory]] 이분법에서 "appetitive LH^Vgat subset"이 사실은 **valence 무관 salience 코더**일 수 있다.

# Distinct lateral hypothalamic GABAergic ensembles encode motivational salience and value-scaled consumption (Lee et al. 2026)

- **저널**: Cell Reports 45, 118049 (2026-10-27; 접수 2026-01-19, 수정 07-21, 채택 09-07). DOI: 10.1016/j.celrep.2026.118049. 코드는 Zenodo (10.5281/zenodo.22178035).
- **소속**: 서울대 분자생물학·유전학연구소/화학부/뇌인지과학 협동과정(김성연 lab) + DGIST 뇌과학과(현정호 — Cal-Light 실험). 교신 **Sung-Yon Kim** (sungyonkim@snu.ac.kr).
- **모델·방법**: Vgat-Cre 마우스(수컷·암컷, 8–12주), LH(AP −1.40, ML ±1.10, DV −5.35)에 AAV1-FLEX-jGCaMP8m + GRIN lens(600 μm). Head-fixed 2-photon(Bergamo II, 920 nm, 10 Hz). Suite2p+Cellpose로 ROI를 뽑고 **ROIMatchPub로 같은 세포를 세션 간 추적**했다. 동공·턱 움직임은 DeepLabCut으로 측정. 모든 결론은 **상관 관찰**이다(인과 조작 없음).

## 한 줄 요약
같은 LH^Vgat 뉴런을 세션마다 추적한 결과, **혐오 열자극·음식 cue·학습된 음식 예측 cue에 함께 반응하는 "motivational salience" ensemble**과, **먹이·물·고형식 섭취에 공통으로 반응하며 진폭이 배고픔·영양 농도·GLP-1R 작용제에 따라 조절되는 "value-scaled consumption" ensemble**이 서로 거의 겹치지 않음을 보였다. 이 단일세포 수준의 분리는 population 수준에서 보이던 혼합 신호를 설명한다.

## 핵심 내용

### 배경 — LH^Vgat는 보상 engine인가, 이질적 mosaic인가
- 통념은 LH^Vgat 활성 = 섭식·보상 추구 ↑ (Jennings 2015·Nieh 2015 등)이다. 그러나 일부 LH^Vgat는 혐오·회피·음성 valence 신호에도 관여한다(Sharpe 2021 등).
- 저자들의 선행 연구(**Jung 2022 Neuron**, ref 15)는 LH^Vgat 중 일부가 **열 처벌↔열 보상을 양방향으로 부호화**하고, operant 열조절 행동에도 동원되며, **칼로리 섭취 뉴런과는 거의 겹치지 않음**을 보였다.
- 질문: LH^Vgat 소집단은 **감각 modality·항상성 영역**(온도 vs 영양) 별로 나뉘는가, 아니면 **영역을 가로지르는 상위 기능**(valence 무관 salience vs 섭취) 별로 나뉘는가?
- 용어(원문 정의): **cue** = 동기적으로 중요한 대상·결과에서 나오거나 그것을 예측하는 외부 감각 자극. **motivational** = 현재 내부 상태에서의 행동적 관련성. **motivational salience** = valence와 무관하게 우선 처리가 필요한 appetitive·aversive 자극의 행동적 중요성.

### Figure 1 — 열 처벌 뉴런이 먹을 수 없는 음식 cue에도 반응
- 같은 뉴런을 세 조건에서 추적했다. ① 37°C 환경에서 IR heat 5 s(= 행동적으로 혐오적인 "thermal punishment"), ② 금식 마우스에 액상식 20 μL를 10 s 동안 구강 내 주입, ③ **caged peanut butter**(linear actuator로 7 s 접근 → 13 s 정지 → 7 s 후퇴; 냄새·시각은 있으나 섭취 불가).
- **k-means 군집화(heat·liquid food auROC만 사용)** → Calinski-Harabasz 지수가 k=3에서 최대. **n=189 neurons/4 mice** → cluster 1(heat-excited) 51, cluster 2(liquid food-excited) 46, cluster 3(약한 반응) 92.
- 군집 정의에 쓰지 않은 caged PB 반응: **cluster 1이 강하게 흥분**했고 cluster 2·3은 작았다. caged PB-excited 집단은 heat-excited와 유의하게 겹쳤고(hypergeometric p=4.69e-4), liquid food-excited와는 겹치지 않았다(p=0.64).
- 단일세포 반응 크기 상관: **heat vs caged PB r=0.59 (p=2.4e-19)**, **liquid food vs caged PB r=−0.02 (p=0.76)**.
- → 혐오 열자극에 반응하는 ensemble이 **음식 cue(appetitive)에도 동원**된다. valence를 가로지르는 첫 증거.

### Figure 2 — 학습된 음식 예측 cue: phasic cue 반응 vs ramping 섭취 반응
- Head-fixed Pavlovian: 3 kHz tone 2 s → 0.5–1.5 s trace → 액상식 ~8 μL. test session은 보상 70% / 생략 30%. 예기 핥기 rate가 Day 1→Day 7로 증가했다(n=5 mice).
- **n=210 neurons/4 mice** (cluster 1: 67, cluster 2: 60, cluster 3: 83).
- **Cluster 1**: cue onset에 시간 고정된 **빠른 phasic 반응**이 보상 전에 감쇠한다. **Cluster 2**: 예기 구간에 **ramping**해 보상 전달·섭취 시점에 정점을 찍는다. **Cluster 3**: 짧은 cue 반응 뒤 trace 구간 동안 지속 억제(또 다른 motif).
- **Lasso 회귀 encoding model**(cue·reward·omission·spout retraction·lick; B-spline 5 df; 5-fold CV): 군집 간 R² 분포는 차이가 없었다. 그 위에서 **cue kernel은 cluster 1 > 2**, **reward·lick kernel은 cluster 2 > 1**. 설명 분산의 상대 기여도 cluster 1은 cue, cluster 2는 reward/lick이 우세했다.

### Figure 3 — 동공 연동 각성과는 결합하지만, 각성만으로는 동원되지 않음
- DeepLabCut 8점 ellipse로 동공 면적을 측정했다. heat → 강한 동공 확장. 액상식 → 작은 변화. caged PB → 확장. **8°C 환경의 IR heat(열 보상)** → **동공 수축**(Fig S2).
- 뉴런별 **pupil-model R²** (ΔF/F = β0 + β1·pupil, 1 s bin): heat-encoding 뉴런이 consumption-encoding 뉴런보다 유의하게 높았다(예시 R² 0.302 vs 0.083; heat 세션 cluster 1 n=47 / cluster 2 n=69, food 세션 55 / 74, 8 mice).
- **결정적 대조**: 보상·처벌·행동 요구가 없는 **중립 tone(3 kHz, 85 dB)**은 동공을 유의하게 키웠지만(n=9 mice), **두 군집 모두 반응하지 않았다**(cluster 1 n=43, cluster 2 n=69).
- → 동공 연동 각성은 이 ensemble 동원의 **충분조건이 아니다**. 저자들은 "각성과 독립"이라고 주장하지 않고 "각성만으로는 설명되지 않는다"고 한정한다.

### Figure 4 — consumption ensemble은 먹이·물·고형식에 일반화
- 같은 뉴런에서 금식 시 액상식 vs **24–48 h 절수 시 물**을 구강 내 주입(각 20 μL / 10 s). **n=366 neurons/8 mice**.
- 흥분 중첩: F-Exc 143, W-Exc 126, **둘 다 90** (p=6.7e-20). 억제 중첩: F-Inh 110, W-Inh 103, **둘 다 59** (p=9.0e-12). 단일세포 **food vs water r=0.62 (p=2.2e-40)**.
- 일반화는 불완전하다. 반대 극성(먹이↑물↓ 19, 먹이↓물↑ 10)과 한쪽에만 반응하는 세포가 남아 있다(Fig S3). 저자들은 이것을 LH^Lepr·LH^Nts 같은 modality 특이 하위집단과 정합적이라고 본다.
- **고형식**(초코 과자 Pocky를 입 앞에 10 s): n=132/3 mice. liquid-Exc 46, solid-Exc 58, **둘 다 30** (p=6.1e-4). 반응 크기 r=0.54 (p=3.6e-11). → **목마름·배고픔, 액상·고형을 가로지르는 공통 "섭취 모드" 표상**이다.

### Figure 5 — cue·섭취 반응 모두 value에 따라 조절됨
- **Cue 단계**: caged PB vs caged chow vs 빈 우리(n=319/7 mice, Cue-Exc 70). PB > chow > 빈 우리(≈0) 순이었다. 단, 세 자극은 감각 정체도 서로 달라 이것만으로 정량적 value scaling을 입증하지는 못한다고 저자들 스스로 한정한다.
- **섭취 단계**(n=325/8 mice; F-Exc 118, F-Inh 130): 금식+100% 액상식 > 금식+25% 희석 ≈ 자유급식+100%. 같은 뉴런에서 **희석과 포만 모두 흥분 진폭을 줄이고, 억제 뉴런의 억제 깊이도 줄였다**. 흥분 뉴런 비율은 유지됐고, 억제 뉴런 비율은 자유급식에서 감소했다.
- **턱 움직임 통제**(Fig S4; n=228/5 mice): 금식 마우스는 같은 양을 받아도 턱 움직임이 더 컸다. 선형 혼합모형(ΔF/F ~ condition + trial + jaw + (1|mouse) + (1|neuron))에서 jaw도 유의한 예측변수였지만, **금식 vs 자유급식 조건 효과는 jaw를 통제한 뒤에도 유의**했다. → 단순한 구강운동 readout이 아니다.

### Figure S5 — 구강 vs 위내 신호: 먹이와 물에서 결합 방식이 다름
- 위내(IG) 카테터로 600 μL를 100 μL/min 주입하고, 구강 내(IO) 세션과 같은 뉴런을 비교했다.
- **액상식**: IG 반응은 주입 중 상승. IO-Exc 93, IG-Exc 43, 둘 다 30으로 **유의하게 중첩**했고 IO–IG 반응 크기도 양의 상관(n=192/5 mice).
- **물**: IG 반응이 **주입 종료 후 지연 상승**했다(10–40 min; VTA DA의 수화 신호 지연 kinetics와 유사, Grove 2022). IO-Exc 77, IG-Exc 28, 둘 다 10으로 **우연 수준**이었고 반응 크기 상관도 없었다(n=169/4 mice).
- → 먹이는 구강 신호와 섭취 후 신호가 **같은 뉴런에 수렴**하고, 물은 **다른 뉴런으로 분리**된다.

### Figure 6 — GLP-1R 작용제(Ex-4)가 cue·섭취 반응을 둘 다 약화
- 3일 금식(매일 2 h 재급식). Day 2·3에 saline vs **exendin-4 100 μg/kg i.p.**(순서 counterbalance)를 주고 10 min 뒤 시험했다.
- **Cue**(caged PB; n=241/6 mice, Cue-Exc 112): 반응 class 비율은 변하지 않았고 **Cue-Exc 진폭만 유의하게 감소**했다(Cue-Inh는 경향, p=0.053).
- **섭취**(액상식; n=322/8 mice, F-Exc 101, F-Inh 108): class 비율은 불변. **흥분·억제 진폭이 모두 감소**했고, jaw를 통제한 혼합모형에서도 Ex-4 효과가 유의했다.
- **기저 활동**(Fig S6): Ex-4가 **Cue-Exc 뉴런**과 **F-Inh 뉴런**의 기저 활동을 낮췄다(다른 class는 불변). → 균일한 억제가 아니라 subpopulation 선택적이다. GLP1R 뉴런→LH 억제 경로가 후보다(ref 66).

### Figure S7 — Cal-Light 활성 표지: 투사로는 구분 안 됨 (예비)
- 37°C heat(3 s × 60회) 또는 수크로스 FR1 섭취(60회)에 488 nm 광을 짝지어 활성 뉴런을 표지했다. 두 집단 모두 **DBB·VTA·DRN·PAG·periLC로 정성적으로 유사하게 투사**했다. → 거친 투사 해부만으로는 두 ensemble이 분리되지 않는다(정량 connectome 필요).

### Discussion 요점
- Salience ensemble은 접근/회피 **방향**이나 항상성 **영역**을 지정하지 않고, "행동을 우선시·활성화·재구성해야 할 조건"을 표상할 수 있다. 고전적 phase 이론의 **preparatory(appetitive)** 과정과 연관된다(Craig 1918, Salamone & Correa 2012). PVT·DRN·LC 같은 각성·salience 망, 국소 orexin 뉴런과의 상호연결이 후보 기전이다.
- Consumption ensemble은 상류의 modality 특이 노드(ARC^AgRP=배고픔, SFO^Nos1=갈증)의 **하류에서 수렴하는 consummatory "mode"**로 해석된다. modality 특이 채널(LepR·Nts)도 병존한다. 하류 후보는 NAc D1R·periLC Vglut2 섭취 표상 노드다.
- 분자 정체(Lepr·Nts·Crh·Gal)와 투사 정체는 미해결이다. 2-photon 추적 뒤 post hoc 전사체·projectome·activity-dependent 접근을 제안한다.
- **한계**: 전적으로 상관적이다(필요·충분성 미검증). head-fixed 패러다임이다. 동공은 각성의 간접 지표다. 지각적 salience는 파라메트릭하게 조작하지 않았다. 성차 검정력도 없다.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **NMPU 축 분리 후보**: salience ensemble = valence 무관 **Motivation 활성화/우선순위 신호**, consumption ensemble = Need(금식)×Pleasure/영양가(농도)에 비례하는 **consummatory Utility 실시간 신호**로 보는 가설. [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]]의 Need·Pleasure 곱셈 구조를 단일세포 수준에서 검증할 지표가 된다. 예: 금식 × 희석의 2×2 설계에서 consumption ensemble 진폭이 곱셈적으로 변하는지 본다(원문은 3조건뿐이라 상호작용을 판정할 수 없음).
- **Lee 2023 LH^LepR seeking/consummatory 2 subpopulation과의 대응**: [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]의 consummatory LepR subset이 이 논문의 value-scaled consumption ensemble의 분자 부분집합인지, seeking subset이 salience ensemble과 겹치는지(그렇다면 LepR seeking 뉴런도 혐오 자극에 반응해야 함)를 검증할 수 있다.
- **GLP-1RA 이중 작용 지점**: DMH GLP-1R→AgRP(식전, [[kim-2024-glp-1-increases-preingestive-satiation|Kim 2024]])에 더해 LH^Vgat cue·섭취 반응 동시 약화. GLP-1RA가 "식전 기대"와 "섭취 중 가치"를 모두 깎는 다층 기전 가설이다. [[concept-glp1ra-response-variability|GLP-1RA 반응 변이]]의 회로 수준 지표로 LH 섭취 반응 감쇠 폭을 쓸 수 있다.
- **Cue reactivity·DTx**: 음식 cue에 대한 salience ensemble 반응은 혐오 자극과 공유되는 "우선순위" 신호다. 인간 [[concept-cue-reactivity|cue reactivity]]의 각성 성분(동공·SCR)과 가치 성분을 분리해 측정해야 함을 시사한다. 중립 tone 대조 설계를 인간 fMRI/동공 실험에 이식할 수 있다.
- **LH 화학유전 유전자치료(Ha 2024 NHP)**: [[ha-2024-hypothalamic-neuronal-activation-non-human|Ha 2024]]의 비선택적 LH^Vgat 조작은 salience·consumption 두 ensemble을 동시에 건드린다. 효과(목표지향 섭식)와 부작용(혐오·각성)을 분리하려면 ensemble 선택 접근이 필요하다는 근거가 된다.

## ⚠️ 위키 내 충돌·긴장
- **"LH^Vgat = engine / 보상 추구" 프레임 vs 혐오 자극 반응 ensemble** — [[chen-2025-the-integrated-function-of-the|Chen 2025]](LHA^Vgat "engine")·[[concept-lateral-hypothalamus]](GABAergic = 식이 ↑)의 단순 서술과 달리, 이 논문은 LH^Vgat의 상당 부분(cluster 1, 189 중 51)이 **혐오 열자극에 흥분**하고 같은 세포가 음식 cue에도 반응함을 보인다. 인과 조작 결과(활성 → 섭식 ↑)와 활동 상관(일부는 valence 무관)은 층위가 달라 **모순이라기보다 병기할 사항**이다.
- **Appetitive LH^Vgat subset의 해석** — [[concept-appetitive-consummatory-phases]]·[[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]] 표의 "LH^Vgat subset A: food contact에서 peak(appetitive)"는 Jennings 2015 기반이다. 이 논문은 그런 cue/appetitive 반응 세포가 **음식 특이가 아니라 혐오 자극에도 반응하는 salience 코더**일 수 있음을 시사한다. 단, 이 논문은 head-fixed라 자유행동 seeking phase를 직접 측정하지 않았다.
- **[[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]] "LH GABA의 8%만 food-specific"과의 관계** — Lee 2023은 chocolate vs Lego로 food-specific을 정의했다(사용자 lab). 이 논문의 caged PB-excited 뉴런은 22%(70/319)이고, 그중 상당수가 heat에도 반응해 **food-specific이 아니다**. 섭취 ensemble(F-Exc 39%)도 물에 반응한다. 두 결과는 "음식 cue 반응의 다수는 비특이적 salience, 진짜 food-specific은 소수"라는 그림으로 **양립 가능**하다. 그러나 비율 수치를 같은 기준으로 비교하면 안 된다(자유행동 vs head-fixed, 대조 자극이 다름).
- **[[grove-2022-dopamine-subsystems-track-internal|Grove 2022]] "LH GABA가 체액 균형(수화)을 추적해 VTA DA에 전달"** — 이 논문에서 IG 물 주입에 대한 LH^Vgat 반응은 지연 상승으로 Grove의 kinetics와 정합한다. 다만 **구강 음수 반응 뉴런과 IG 수화 반응 뉴런이 우연 수준으로만 겹친다**. 즉 "LH GABA = 수화 추적"은 구강 섭취 ensemble과는 다른 하위집단의 속성일 가능성이 있다. 먹이에서는 IO·IG가 수렴한다.
- **[[liu-2026-granular-motivational-interaction-and|Liu 2026]] "LH^GABA = initiation hub(개시만, 유지 아님)"** — 이 논문의 consumption ensemble은 10 s 섭취 내내 지속 반응하고 value에 따라 조절된다. maintenance 단계에도 LH^Vgat 표상이 있음을 시사한다(단 상관 관찰이고, Liu의 분류는 인과 조작 기반).
- **[[jia-2026-novelty-exploration-activated-ensemble-in|Jia 2026]]과는 정합**: LH Fos novelty ensemble = 양가 high-salience 코더. 이 논문의 salience ensemble과 같은 집단인지는 미검증이다.

## 관련 페이지
- [[concept-lateral-hypothalamus]] — 개념 hub. LH^Vgat 이질성을 기능 ensemble(salience vs consumption)로 분해.
- [[concept-appetitive-consummatory-phases]] — salience ensemble = preparatory/appetitive, consumption ensemble = consummatory. phase 표의 LH^Vgat 행 재해석.
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — 사용자 lab LH 리뷰. LH^Vgat appetitive/consummatory subset 서술과 비교.
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] — 사용자 lab LH^LepR seeking/consummatory 2 subpopulation. food-specific 비율과의 긴장·대응 가설.
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] · [[concept-need-motivation-pleasure-utility]] — NMPU의 Motivation(salience)·Utility(value-scaled consumption) 매핑 가설.
- [[kim-2024-glp-1-increases-preingestive-satiation]] · [[concept-glp-1]] — Ex-4가 LH^Vgat cue·섭취 반응을 모두 약화. 식전 포만 회로(DMH)와 병렬인 LH 지점.
- [[grove-2022-dopamine-subsystems-track-internal]] — LH GABA 수화 추적. IG 물 반응의 지연 kinetics는 정합하지만 구강 ensemble과는 분리됨.
- [[sumarli-2026-multidimensional-control-of-ingestive-behavior]] — LH^Nts 음수 편향. 이 논문의 modality 특이 잔여 하위집단 후보.
- [[korotkova-2026-balancing-acts-lateral-hypothalamic]] — LH 다중 동기 arbitration. salience ensemble이 영역을 가로지르는 우선순위 신호 후보.
- [[chen-2025-the-integrated-function-of-the]] — LHA^Vgat "engine" 프레임과 대비.
- [[liu-2026-granular-motivational-interaction-and]] — LH^GABA = initiation hub 서술과 대비(섭취 중 지속·value 조절).
- [[jia-2026-novelty-exploration-activated-ensemble-in]] — LH 양가 salience ensemble(Fos-TRAP). 같은 결론을 다른 방법으로.
- [[concept-cue-reactivity]] — 음식 cue 반응의 각성 vs 가치 성분 분리(중립 tone 대조).
- [[ha-2024-hypothalamic-neuronal-activation-non-human]] — 비선택적 LH^Vgat 조작의 해석 한계.
- [[concept-orexin-neurons]] — salience ensemble과 각성망 연결의 국소 후보(원문 Discussion).
- [[salamone-2012-mysterious-motivational-functions-mesolimbic]] — 원문이 인용한 preparatory/consummatory·activational 동기 프레임(ref 5).
