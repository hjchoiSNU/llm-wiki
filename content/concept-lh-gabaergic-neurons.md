---
title: LH GABAergic 뉴런 (LH^Vgat)
type: concept
created: 2026-11-22
updated: 2026-11-22
ingested_by: claude-opus5
aliases: [LH^Vgat, LHA^GABA, LH^GABA, LH GABA, LHA GABA, Slc32a1 LH]
---

> [!takeaway] 연구 방향 관점의 핵심
> **"LH^Vgat = 섭식 engine"은 위키 안에서 더는 유지되지 않는 한 줄이다.** 같은 Vgat⁺ 집단이 ① 섭식·보상을 구동하고([[jennings-2015-visualizing-hypothalamic-network-dynamics|Jennings 2015]]), ② **행동성 체온조절에 필수**이며([[jung-2022-a-forebrain-neural-substrate-for|Jung 2022]]), ③ 상당수가 **혐오 열자극에 흥분하는 valence 무관 salience 코더**이고([[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026]]), ④ cue–보상 **학습**에 필요하며([[sharpe-2017-lateral-hypothalamic-gabaergic-neurons|Sharpe 2017]]), ⑤ bulk로 켜면 섭취가 아니라 **갉기**가 나온다([[de-vrind-2019-effects-of-gaba-and|de Vrind 2019]]). 이 다섯 가지는 서로를 반박하지 않는다 — **측정 창·조작 양식·대조 자극이 다른 축들**이다(§2는 여섯 축으로 나눠 다룬다).
> 사용자 연구에 주는 셋. (1) [[concept-need-motivation-pleasure-utility|NMPU]]에서 LH를 Motivation 노드로 둘 때 **LH^Vgat 전체 활성을 Motivation으로 읽으면 체온 동기·valence 무관 salience·구강운동 프로그램이 함께 섞여 들어간다**. 사용자 lab의 분자 정의 집단([[lee-2023-lateral-hypothalamic-leptin-receptor|LH^LepR]])이 Motivation 축에 더 가까운 이유도 여기에 있다. (2) **투사 기반 표적화 경고가 서로 다른 lab·기법에서 두 번 독립으로 나왔다** — 열 처벌 vs 칼로리 집단(Jung 2022 Fig S7), salience vs 섭취 집단(Lee 2026 Cal-Light) 모두 투사 패턴으로 갈리지 않았다. [[proposal-lh-nac-nmpu-neuron-discovery|LH–NAc 발굴 과제]]는 분자 정체 또는 기능 태깅을 써야 한다. (3) **섭취량 그램수 단일 지표는 이 집단에서 특히 위험하다** — 갉기 spillage·bout 구조·phase를 가르지 못한다.
> 분자 정체는 아직 비어 있다. 기능으로 정의된 ensemble과 전사체 클러스터(억제성 15개, [[mickelsen-2019-single-cell-transcriptomic-analysis-of|Mickelsen 2019]])의 **대응표는 위키 어디에도 없다**.

# Lateral hypothalamic GABAergic 뉴런 (LH^Vgat)

## 한 줄 요약
*Slc32a1*(Vgat, vesicular GABA transporter)로 정의되는 lateral hypothalamus의 억제성 뉴런 집단. tuberal LHA 뉴런의 약 절반을 차지하고, orexin·MCH와는 거의 겹치지 않으며, 섭식·보상·체온 동기·motivational salience·연합 학습·운동·에너지 소비에 걸쳐 결과가 보고돼 있다. 그러나 **단일 기능 레이블로 요약할 수 없고**, 기능으로 정의된 하위 ensemble과 분자·투사로 정의된 하위집단의 대응은 미해결이다.

## 1. 정의와 분자 마커

### 1.1 무엇으로 정의하는가
| 도구 | 종 | 정체 검증 | 출처 |
|---|---|---|---|
| **Vgat-IRES-Cre**(JAX 016962) | 마우스 | 위키에서 가장 널리 쓰이는 정의. 저자 자신이 **penetrance가 내인성 *Vgat*보다 낮을 수 있다**고 유보 | [[jennings-2015-visualizing-hypothalamic-network-dynamics|Jennings 2015]] |
| **Gad2-Cre / GAD2-Cre** | 마우스 | Gad2가 Gad1보다 *Slc32a1* 패턴에 더 일치 | [[mickelsen-2019-single-cell-transcriptomic-analysis-of|Mickelsen 2019]] · [[liu-2023-an-iterative-neural-processing|Liu 2023]] |
| **GAD-Cre rat**(LE-Tg(GAD1-iCre)3Ottc, RRRC#751) | 랫트 | Cre×*GAD1* 공발현이 **LH 80 ± 6%**(ACC는 32 ± 8%로 낮아 영역별 재검증 필요) | [[sharpe-2017-lateral-hypothalamic-gabaergic-neurons|Sharpe 2017]] |

- **전달물질 이분법은 수치상 유지된다**: tuberal LHA 뉴런 36,423개의 EASI-FISH에서 *Slc32a1*⁺ **55%**(20,029) vs *Slc17a6*⁺ **45%**(16,394) ([[wang-2021-expansion-assisted-iterative-fish-defines-lateral|Wang 2021]]).
- ⚠️ **흔들리는 것은 "GABA"를 어떤 marker로 잡는가다.** *Gad1*으로 잡으면 공발현이 흔해 보이고 *Slc32a1*로 잡으면 드물어 보인다. Mickelsen은 *Slc17a6*⁺·*Slc32a1*⁻이면서 *Gad1* 강발현인 LHA^Glut 클러스터를 4개 보고한다([[mickelsen-2019-single-cell-transcriptomic-analysis-of|Mickelsen 2019]]). MCH 분류 논쟁 전체가 이 한 문장에서 나온다 → [[concept-lateral-hypothalamus]] 참조.

### 1.2 전사체 census
- **억제성 15 + 흥분성 15 클러스터**(7,129 세포; 뉴런 3,589 중 LHA^GABA **1,900** / LHA^Glut 1,537) ([[mickelsen-2019-single-cell-transcriptomic-analysis-of|Mickelsen 2019]]).
- LHA^GABA 15 클러스터: 1 *Gal*/*Dlk1*, 2 *Npy*/*Npw*, 3 ***Nts*/*Cartpt***, 4 미배정, 5 *Meis2*/*Calb2*, 6 *Sst*/*Col25a1*, 7 *Tac2*/*Serpini1*, 8 *Lhx6*/*Tcf4*, 9 *Cbln2*/*Calb1*, 10 *Sst*/*Meis2*, 11 *Col25a1*/*Otp*, 12 *Th*/*Slc18a2*, 13 *Sst*/*Otp*, 14 *Atp1a2*, 15 *Calb1*/*Cbln4*.
- ⚠️ **"LHA 세포타입 총 개수"에는 정답이 없다** — 15+15(Mickelsen) / 뉴런 4([[rossi-2019-obesity-remodels-activity-and|Rossi 2019]]) / consensus 17+17·FISH 24+22([[wang-2021-expansion-assisted-iterative-fish-defines-lateral|Wang 2021]]) / ">30"(리뷰). 특정 숫자를 "정답"으로 인용하지 말 것.
- ⚠️ **어느 클러스터도 *Camk2a*로 지정되지 않는다** — LH의 "CaMKIIα 뉴런"은 세포 유형이 아니라 프로모터 농축 표지다 → [[concept-lh-camkii-neurons]].

### 1.3 다른 세포군과의 경계
- **orexin·MCH와 0% 중첩**: Vgat-eYFP와 MCH(223 ± 13.77 vs 76 ± 11.37 cells/mm²), orexin(266 vs 200 cells/mm²) 모두 중첩 0% ([[jennings-2015-visualizing-hypothalamic-network-dynamics|Jennings 2015]]). rat GAD-Cre에서도 eYFP⁺ 중 MCH 1.2%, ORX <1%, **VGAT/VGLUT2 공편재 1 ± 1%** ([[sharpe-2017-lateral-hypothalamic-gabaergic-neurons|Sharpe 2017]]).
- 즉 LH의 "GABA 뉴런"과 "펩타이드 뉴런(orexin·MCH)"은 서로 다른 좌표계이며, LH^Vgat 결과를 [[concept-orexin-neurons|orexin]]으로 번역할 수 없다.

### 1.4 펩타이드 공발현 (분모를 밝혀 인용할 것)
| 마커 | Vgat 쪽 비율 | 경고 |
|---|---|---|
| **Nts** | 리뷰 ~80% Vgat ([[cheon-2025-lateral-hypothalamus-and-eating-cell\|Cheon 2025]]) ↔ 1차 census **70.8% GABA / 29.2% Glut**, sc-qPCR *Slc32a1* 78.1% / *Slc17a6* 26.0% | *Gal* 공발현은 리뷰 "95%"가 아니라 ***Nts*⁺*Slc32a1*⁺의 59.0%**이고 *Nts*⁺*Slc32a1*⁻에서는 0%. *Cartpt* 공발현도 *Nts*⁺ 전체의 18.1%(FISH)/19.5%만 — 클러스터 이름 ≠ 공발현율 ([[mickelsen-2019-single-cell-transcriptomic-analysis-of\|Mickelsen 2019]]) |
| **Lepr** | ⚠️ **LH GABA의 4%**(사용자 lab 자체 매핑, 논문은 '4–20%' 병기; [[lee-2023-lateral-hypothalamic-leptin-receptor\|Lee 2023]]) ↔ **~20%**([[cheon-2025-lateral-hypothalamus-and-eating-cell\|Cheon 2025]]·[[siemian-2021-lateral-hypothalamic-lepr-neurons\|Siemian 2021]], Schiffino 2019 경유) | **어느 수치를 쓰는지 밝히지 않은 인용 금지.** 흔히 인용되는 "92% GABA"는 Mickelsen 원문 본문에 없고 근거는 **Lepr-Cre;EYFP sc-qPCR(마우스 2마리)**다 — 같은 논문 scRNA-seq에서는 LHA^GABA 전반에서 *Lepr*이 낮거나 희박 |
| **Crh** | 82% Vgat; *Lepr*와 ~50/52% 상호 공발현 ([[cheon-2025-lateral-hypothalamus-and-eating-cell\|Cheon 2025]]) | |
| **Gal** | ~50% Vgat ([[cheon-2025-lateral-hypothalamus-and-eating-cell\|Cheon 2025]]) | |
| **Penk** | 42% Vgat / 52% Vglut2 ([[cheon-2025-lateral-hypothalamus-and-eating-cell\|Cheon 2025]]) | |
| **Sst** | **아영역이 비율을 정한다** — perifornical *Slc32a1*⁺ 56.1% / *Slc17a6*⁺ 43.6%(952 세포, posterior로 가면 Glut 최대 71.1%) vs tuberal *Slc32a1*⁺ **97.3%**(1,116 세포) ([[mickelsen-2019-single-cell-transcriptomic-analysis-of\|Mickelsen 2019]]) | 소재 아영역을 밝히지 않은 Sst 결과 비교 금지 |
| **Hcrt / Pmch** | Hcrt sc-qPCR *Slc32a1* **4.0%** / *Slc17a6* 93.0%; Pmch *Slc17a6* 100% / *Slc32a1* 검출 안 됨 ([[mickelsen-2019-single-cell-transcriptomic-analysis-of\|Mickelsen 2019]]) | ⚠️ *Pmch*·*Hcrt*는 해리 손상 뉴런의 ambient mRNA로 전 클러스터에 번진다 |

> ⚠️ **LepR ↔ Nts는 별개 집단이 아니다** — LHA LepRb의 **약 60%가 *Nts*⁺**이고 *Nts*의 약 30%가 LepRb⁺이며 이 공존은 LHA에만 국한된다([[leinninger-2011-leptin-action-via-neurotensin|Leinninger 2011]]). LH^LepR 문헌과 LH^Nts 문헌은 상당 부분 **같은 세포를 다른 Cre로 조작**하고 있다.

## 2. 기능 축별 결과

> 아래 여섯 축은 **같은 Vgat⁺ 집단**에서 보고된 것이다. 서로 모순이 아니라 **측정 창·조작 양식·대조 자극이 다른 축**이다(§5 참조).

### 2.1 섭식·보상 — "engine" 축
- **양방향 광유전 조작**(자유행동 마우스, [[jennings-2015-visualizing-hypothalamic-network-dynamics|Jennings 2015]]): ChR2 활성(20 Hz, 자유급식) → food zone 체류(F2,27=86.24, p<0.0001)·섭취(F2,27=17.05, p<0.0001)·실시간 장소선호(t8=6.796, p<0.0001)·자가자극(t5=5.744, p=0.0012) 모두 ↑. eArch3.0 억제(먹이제한) → 체류(F1,16=9.39, p=0.007)·섭취(F1,16=5.43, p=0.033) ↓ 및 장소 혐오(t8=4.512, p=0.002).
- **유전적 제거**(taCasp3): 체중 증가 둔화, 일일·급성 섭취↓, lick↓, PR3 **break point↓**(t10=2.692, p=0.022). MCH·orexin 세포 수와 운동·불안은 보존 ([[jennings-2015-visualizing-hypothalamic-network-dynamics|Jennings 2015]]).
- **LH^GABA→VTA 말단 자극**은 접근·장소선호·자기자극을 지지하고(RTPP p<0.0001; ICSS group×poke F1,12=19.40, p=0.0009), LH^Glut 말단 자극은 회피를 지지한다 ([[nieh-2016-inhibitory-input-from-the|Nieh 2016]]).
- **기전 = disinhibition**: LH^GABA 말단 자극이 VTA GABA 뉴런 활동을 실제로 낮추고(광계측 F2,14=24.39, p<0.0001), IPSC 진폭이 **TH⁻(추정 GABA) > TH⁺**로 치우쳐 있으며(p=0.0270), NAc 세포외 DA가 증가한다(FSCV paired t p=0.0013). c-Fos도 TH⁺ 중 공발현이 VGAT 263/401 vs VGLUT2 370/723(χ²=21.77, p<0.0001) ([[nieh-2016-inhibitory-input-from-the|Nieh 2016]]).
- **영장류 번역**: macaque LHA GABAergic 화학유전 활성화는 **palatable food 한정**으로 목표지향 섭식·동기를 늘리고(object-touch latency p=4.52×10⁻⁷) 설치류식 이상 갉기를 만들지 않는다 ([[ha-2024-hypothalamic-neuronal-activation-non-human|Ha 2024]], 사용자 lab).

> ⚠️ **그런데 "섭취 증가"의 상당 부분은 갉기였다.** LH^Vgat hM3Dq 활성(CNO 1 mg/kg)에서 chow "무게 변화"는 1–2 h에만 늘었고, 나무 블록 무게는 줄었으며(**t5=6.651, P=0.001**), chow 가루를 따로 재니 **실제 섭취는 불변**이었다(갉기 주효과 F1,5=96.18, P=0.00019). lard 섭취는 3·5·7 h에 ↓(7 h P=7.7×10⁻⁵)였고 **palatable 선호비는 오히려 ↓**(t5=5.248, P=0.003) ([[de-vrind-2019-effects-of-gaba-and|de Vrind 2019]]; 원문 대조 확인). → **먹이통 무게 단일 지표 금지.**

### 2.2 phase — appetitive vs consummatory
- **1차 근거**: 자유행동 PR3 과제에서 LH^Vgat **743 뉴런/6마리** 중 nose-poke 흥분 **168**, 첫 lick 흥분 **75**가 "largely separate, rarely both" ([[jennings-2015-visualizing-hypothalamic-network-dynamics|Jennings 2015]]; 원문 대조 확인). 두 집단은 cell map에서 **공간 클러스터로 분리되지 않는다**.
- ⚠️ **조작 양식이 phase 결론을 만든다** — 같은 논문에서 bulk hM3Dq/CNO는 lick만 올리고(F1,20=24.37, p<0.0001) nose poke는 바꾸지 못했는데(F1,20=1.47, p=0.24) taCasp3 ablation은 lick·nose poke·break point를 **모두** 떨어뜨렸다.
- ⚠️ **"개시 전담"인가**: GAD2 bulk photometry에서 LH^GABA 반응은 접촉 개시에 정점이고 **긴 접촉이 끝나기 전에 사라진다**(접촉 지속 상관 R=0.387 vs DR^GABA R=0.908) → "preparation(ARC^AgRP) → **initiation(LH^GABA)** → maintenance(DR^GABA)" 3단 도식 ([[liu-2023-an-iterative-neural-processing|Liu 2023]]·[[liu-2026-granular-motivational-interaction-and|Liu 2026]]). 반대 증거는 §5-3.
- **진행 중 섭취의 허가 대상이기도 하다**: LH^Vgat 직접 광억제는 24 h 금식에도 **진행 중 licking을 한 lick 단위로 끊는다**(3-lick burst 분포 F(1,9)=86.6, p<0.001) ([[oconnor-2015-accumbal-d1r-neurons-projecting|O'Connor 2015]]).
- 상세는 [[concept-appetitive-consummatory-phases]].

### 2.3 체온 — 행동성 체온조절 (섭식 밖의 필수 기능)
[[jung-2022-a-forebrain-neural-substrate-for|Jung 2022]](SNU 김성연 lab). **아래 수치는 모두 원문 PDF 대조 확인.**
- **LH^Vgat 화학유전 억제 → 네 가지 체온조절 행동이 모두 손상**: 자가가온 operant(8°C), 온도 구배 이동(8°C·37°C 양쪽), 둥지 짓기(15°C), 자세 신전(37°C).
- **자율성 체온조절은 정상**: BAT 열생산, 심부체온 유지, 꼬리 혈관수축, **열 통각**(hot plate)까지 모두 정상.
- **양방향 부호화**: 자극의 물리 온도와 무관하게 **열 처벌에 활성↑, 열 보상에 활성↓**. 2광자 단일세포(260 뉴런/12마리, Fig 6B)에서 열 보상(8°C IR heat) 흥분 3%·**억제 43%**, 열 처벌(37°C) **흥분 52%**·억제 4%, 칼로리 보상 흥분 33%·억제 12%.
- **집단 벡터 각도**(Fig 6C): 칼로리–열 처벌 **81 ± 10°**, 칼로리–열 보상 **108 ± 9°**, 열 보상–열 처벌 **131 ± 7°** → 칼로리 벡터가 두 열 벡터와 거의 직교.
- **thermal P&R 집단 = 76개**(Fig 6H: 열 보상 억제 ∩ 열 처벌 흥분; 나머지 35·60, 무반응 89). 칼로리 보상 흥분 86개와의 교집합은 **17개뿐**(Fig 6I: thermal P&R 단독 59 / 칼로리 단독 69 / 둘 다 17 / 무반응 115).
- **K-means 3 클러스터**는 거의 균등하다 — cluster 1 n=85(33%, 열 P&R 양방향·칼로리 무반응), cluster 2 n=85(33%, 칼로리 흥분), cluster 3 n=90(34%, 대부분 무반응).
- **행동 중 동원**(Fig 7): head-fixed 레버 과제(112 뉴런/7마리, 20% 반응)에서 thermal P&R 뉴런 27개 중 15개가 레버에 흥분.
- **상류**: 단시냅스 rabies에서 LPB 표지가 강하고 그 **~80%가 lateral 하위핵**. LPB→LH 뉴런은 대부분 *Slc17a6*⁺·*Slc32a1*⁻(흥분성). **LPB→LH 말단 억제는 자가가온만 선택적으로 손상**하고 sucrose operant·자유 섭식·BAT 열생산은 그대로. LPB **세포체** 억제는 절식 마우스의 자유 섭식을 오히려 **늘렸다**.
- ⚠️ 선택성의 한계: thermal P&R 뉴런 **전부가 발 충격에 흥분**했다(Fig S5D). "열 특이"가 아니라 혐오 체감각 일반일 수 있다(저자 명시). 또 이득 기능(hM3Dq)은 체온조절 행동이 아니라 **갉기**를 유발했다 → 충분성 미검증.

### 2.4 Motivational salience — valence를 가로지르는 축
[[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026]](SNU 김성연 lab, Jung 2022의 직계 후속작). **아래 수치는 모두 원문 PDF 대조 확인.**
- 종단 2광자로 **같은 LH^Vgat 뉴런을 세션마다 추적**해 두 ensemble을 분리했다(k-means; IR heat·intraoral 액상 먹이 **두 자극만으로** 정의, Calinski–Harabasz 최대 k=3. caged PB·Pavlovian·tone 반응은 정의에 쓰지 않아 일반화를 독립 시험).
- **① salience ensemble**(cluster 1): 189 뉴런/4마리 중 **51개**(cluster 2 = 46, cluster 3 = 92; Fig 1H). 혐오 열자극(37°C IR heat)과 **닿지 않는 먹이 cue**(caged peanut butter)에 함께 흥분 — 겹침 **p = 4.69×10⁻⁴**(hypergeometric), 단일세포 반응 상관 **r = 0.59**(p = 2.37×10⁻¹⁹; Fig 1I·1M). 액상 먹이 흥분 ∩ caged PB 흥분은 **비유의**(p = 0.6441, r = −0.02; Fig 1N).
- Pavlovian(210 뉴런/4마리; cluster 1 n=67, 2 n=60, 3 n=83)에서 cluster 1은 **cue onset에 맞물린 빠른 phasic** 반응, cluster 2는 보상까지 **지연 ramp**. encoding model에서 cue kernel은 cluster 1 > 2, 보상·lick kernel은 2 > 1이고 **R² 분포는 클러스터 간 차이가 없었다**(적합도 차이로 설명 불가).
- **각성만으로는 설명되지 않는다**: pupil 모델 R²는 cluster 1 > cluster 2(열 세션 47 vs 69 뉴런, 먹이 세션 55 vs 74 뉴런, 각 8마리; Fig 3I·3J). 그러나 **Pavlovian CS와 주파수·길이가 같은 중립 tone(3 kHz, 85 dB, 2 s)** 은 유의한 pupil 확장을 일으키면서도 **두 클러스터 모두 기저 수준에 머물렀다**(cluster 1 43 / cluster 2 69 뉴런, 8마리; Fig 3N·3O). 저자는 "각성과 독립"이라고 주장하지 않고 **"pupil로 지표화한 각성만으로는 이 ensemble의 선택적 동원을 설명하기에 불충분"** 으로 한정한다.
- **② ingestion(consumption) ensemble**(cluster 2): 먹이·물·고형식을 가로질러 일반화. 366 뉴런/8마리에서 먹이 흥분 143 ∩ 물 흥분 126 = **90**(p = 6.7147×10⁻²⁰), 억제 겹침 59(p = 9.0409×10⁻¹²), 단일세포 상관 **r = 0.62**(p = 2.20×10⁻⁴⁰; Fig 4C·4D·4H). 고형식(132 뉴런/3마리): 액상 46 ∩ 고형 58 = 30(p = 6.0949×10⁻⁴; Fig 4K) → licking과 씹기라는 다른 구강운동을 넘어 일반화.
- **일반화는 불완전하다** — 먹이 전용(흥분 34·억제 41), 물 전용(26·25), 반대 극성(19·10)이 남는다.
- **value scaling**(Fig 5): 같은 F-Exc 뉴런(118/325, 8마리)에서 흥분 크기가 **F-D 100% > F-D 25% > ad lib 100%**, F-Inh(130)의 억제도 같은 순서. 턱 움직임(DeepLabCut)을 공변량으로 넣은 혼합효과 모형에서도 조건 효과가 유지된다. cue 쪽은 caged PB > chow > 빈 cage(Cue-Exc 70/319, 7마리)이나 저자는 **감각 정체가 달라 정량적 value scaling을 확립하지 못한다**고 명시한다.
- **GLP-1RA**(Fig 6): exendin-4 **100 μg/kg** i.p.가 cue 반응(241 뉴런/6마리; Cue-Exc 112)과 섭취 반응(322 뉴런/8마리; F-Exc 101, F-Inh 108)의 **진폭을 모두 깎되 반응 클래스 비율은 바꾸지 않는다**. Cue-Inh은 경향(p=0.053). 기저 활동은 Cue-Exc·F-Inh에서만 선택적으로 낮아졌다 → 균일한 억제가 아니라 하위집단 특이적 변화.
- ⚠️ **투사로는 갈리지 않았다**: Cal-Light로 열 처벌·sucrose 섭취를 각각 태깅한 두 집단이 DBB·VTA·DRN·PAG·periLC로 **정성적으로 유사한** 투사를 보냈다(대표 공초점 영상만, 정량 없음). Cal-Light 구성요소는 Cre 의존이 아니어서 태깅 집단이 Vgat에 한정되지도 않는다.
- **같은 방향의 독립 증거**: GAD2 bulk photometry에서 LH^GABA가 **비식용 플라스틱 물체에도 먹이와 같은 접근·접촉 반응**을 보이고(R=0.556 > 먹이 R=0.387) 반응 정점이 쾌락 섭식·항상성 섭식·물체 탐침에서 **비슷**했다(쾌락에서 커진 것은 DR^GABA) ([[liu-2023-an-iterative-neural-processing|Liu 2023]]). 또 LH^GABA→VTA 자극은 섭식뿐 아니라 **사회적 상호작용(F2,38=23.62, p<0.0001)·신기 물체 조사(p=0.0070)까지 가로질러** 행동을 활성화한다 ([[nieh-2016-inhibitory-input-from-the|Nieh 2016]]).

### 2.5 학습·인지 — "cognitive LH"
[[sharpe-2017-lateral-hypothalamic-gabaergic-neurons|Sharpe 2017]]·[[sharpe-2021-past-experience-shapes-the|Sharpe 2021]]·[[sharpe-2024-the-cognitive-lateral-hypothalamus|Sharpe 2024]](rat GAD-Cre, cue 구간 한정 광억제).
- **설계의 핵심**: 광억제를 **cue 구간에만**(onset 500 ms 전 ~ offset 500 ms 후) 걸고 **보상 전달·섭취 구간은 건드리지 않는다**. 결정적 시험은 거의 항상 레이저 없는 상태. [[concept-appetitive-consummatory-phases]]의 phase 한정 개입 모범 사례.
- **학습 자체가 막힌다**: 조건화 중 LH^GABA 체세포 억제 → CS+ 반응 획득 실패(group F(1,14)=5.2, p<0.04)인데 **CS+ 직후 pellet 전달 구간의 food port 체류는 두 군이 동일**(즉 먹기는 정상). 결손은 **레이저 없는 소거 시험까지 지속**(F(1,14)=15.7, p<0.01) → 일시적 동기·운동·주의 저하가 아니다. 정상 학습 후 **시험 때만** 억제해도 cue가 행동을 끌어내지 못한다(F(1,14)=5.2, p<0.05) → 저장·인출에도 필요 ([[sharpe-2017-lateral-hypothalamic-gabaergic-neurons|Sharpe 2017]]).
- **CS+와 CS−가 함께 떨어진다** — 비변별적 기대/salience 신호의 차단으로 읽을 수 있다(§5-2).
- **VTA 말단만 억제하면 학습이 빨라진다**(cue×group×session F(6,108)=3.0, p<0.02; 레이저를 끈 뒤에도 유지되고 그 뒤로는 대조군이 따라붙는다). 저자 해석: 기대값 relay 차단 → **RPE 과대 유지**. ⚠️ 도파민을 측정하지 않은 추론이며, 원문도 "an effect we interpret as…"로 적는다.
- **부호가 뒤집히는 조건**: 같은 조작이 **중립 cue끼리(sensory preconditioning)·보상 원위 cue(second-order) 학습은 촉진**하고(각 cue×group F(1,18)=5.691 P=0.028 / 4.657 P=0.045) **latent inhibition은 소실**시킨다(F(1,17)=6.333 P=0.022) ([[sharpe-2021-past-experience-shapes-the|Sharpe 2021]]). → "보상 근접 cue 쪽으로 학습을 기울이는 dial"이라는 [[sharpe-2024-the-cognitive-lateral-hypothalamus|Sharpe 2024]]의 이론(과활성=중독, 저활성=조현병 예측).
- **경험 의존 모집**: naive rat에서 LH^GABA 억제는 공포 학습에 **영향이 없고**(n=4/4), cue–보상 수반성 경험 후에만 공포 학습이 무너진다(맥락 분리 2×2, F(1,20)=3.913 P=0.031 — ⚠️ 단측 검정). ⚠️ 이 계열은 **활동 기록이 전혀 없고**, 저자들은 가소성 장소를 amygdala에 두고 LH를 "학습의 중재자(arbitrator)"로 열어 둔다.
- **변별은 소수 집단의 속성**: 단일세포에서 **LH^LepR만 CS+/CS−를 변별**하고 LH^Vgat cue 세포는 변별하지 못한다(CS+ centroid 비 **LepR 2.00 vs Vgat 1.26**, 선택성 p=0.0034) ([[siemian-2021-lateral-hypothalamic-lepr-neurons|Siemian 2021]]). → **"비변별 salience 다수 + 변별적 예측 소수"**.

### 2.6 운동·각성·에너지 소비 (섭식 밖의 출력)
- **열생산**: LH^Vgat hM3Dq는 **수평 운동이 줄어든 상태에서도**(t5=3.031, P=0.029) 눈 온도를 모든 구간에서 올렸고(Time×Injection F3,15=9.043, P=0.0012; AUC t5=4.397, P=0.0070), 3일 반복 시 체중이 줄었다(F3,15=5.353, P=0.0104) ([[de-vrind-2019-effects-of-gaba-and|de Vrind 2019]]; 원문 대조 확인). 저자는 **caudal PAG 경유 BAT 경로**를 가설로 든다. → 인간 [[whiting-2019-deep-brain-stimulation-of|LHA DBS의 RMR 상승]]을 매개할 세포 후보 ([[whiting-2013-lateral-hypothalamic-area-deep|Whiting 2013]]).
- ⚠️ 체온은 **눈 표면 온도 proxy**이고 BAT 온도·UCP1·간접 열량 측정은 없다. "thermogenesis"는 추론이다.
- **보행운동**: Gad2-Cre;FLEX-DTA로 LH 억제성 뉴런을 **64.6% 절제**하면 자발 활동기 보행속도가 68% 감소하고(P=0.047) CaMKIIα 유발 LMA 증가가 둔화되는데(+470% → +269%, 유전형 차 P=7.98×10⁻⁴), **24시간 수면 구조는 전혀 바뀌지 않았다** ([[heiss-2024-distinct-lateral-hypothalamic-camkiia|Heiss 2024]]).
- ⚠️ **각성 역할은 쟁점이다** — Heiss의 null은 ventral LH wake-promoting GABAergic 집단 보고(Venner 2016, 위키에 1차 페이지 없음 = 자료 없음)와 어긋나고, 저자들은 Gad2-Cre 미포착분(~10%)·불완전 절제·2차 효과를 해명으로 든다.
- ⚠️ **운동 방향도 조작에 따라 갈린다** — [[korotkova-2026-balancing-acts-lateral-hypothalamic|Korotkova 2026]] Box 1은 LH GABAergic을 "behavioral activation"으로 적지만 de Vrind의 Vgat 활성은 운동을 **줄였다**(저자도 영상 기반 수평 이동만 쟀다는 한계를 인정; telemetry를 쓴 Qualls-Creekmore 2017과는 반대 방향).
- **갉기(gnawing)는 반복되는 표현형이다** — LH^Vgat hM3Dq([[de-vrind-2019-effects-of-gaba-and|de Vrind 2019]]·[[jung-2022-a-forebrain-neural-substrate-for|Jung 2022]] Fig S6), LHA Sst⁺ hM3Dq(P=0.011, [[mickelsen-2019-single-cell-transcriptomic-analysis-of|Mickelsen 2019]]), 저주파/고주파 광자극 분기(Barbano 2016, 위키에 1차 페이지 없음)에서 모두 나온다. 반면 macaque에서는 이상 갉기가 **없다**([[ha-2024-hypothalamic-neuronal-activation-non-human|Ha 2024]]) → [[concept-consumption-vigor]].

## 3. 입력과 출력

### 3.1 입력
| 입력원 | 전달물질·성질 | 효과 | 출처 |
|---|---|---|---|
| **NAcSh D1R-MSN** | GABA성 단시냅스 억제. **LH^Vgat의 78%(28/36)** 가 연결(803 ± 217 pA), rabies 입력의 **97%가 D1R-MSN**. LH 투사 NAcSh 뉴런의 **93.6%**가 D1R(D2R 5.2%). biocytin 충전 62개 중 **29개(47%)가 연결**이고, 염색한 부분집합에서 **연결 세포 중 MCH⁺ 0/14·orexin-A⁺ 0/10**(MCH⁺ 2개·orexin⁺ 1개는 모두 비연결) | "feeding authorization" 게이트 — D1R 말단 자극은 24 h 금식에도 섭취 중단, D1R 광억제는 **포만 상태에서도 섭취 개시**(F(1,19)=5.55, p<0.05) | [[oconnor-2015-accumbal-d1r-neurons-projecting\|O'Connor 2015]] |
| 같은 경로의 **가소성** | eCB–CB1R 의존 **전시냅스 i-LTD**. 급성 식이제한(t(21)=2.91, p<0.01)·3일 고지방식에서 depress | 과식 허가. CB1R 차단이 보상 과식을 막고, in vivo HFS(100 Hz)로 potentiate하면 **24 h 금식 섭취가 준다**(lick t6=6.534, p<0.001). 늘어난 것은 **bout 수**(동기)이고 bout당 lick(기호성)은 불변 | [[thoeni-2020-depression-of-accumbal-to\|Thoeni 2020]] |
| **LPB**(lateral parabrachial) | 흥분성(*Slc17a6*⁺·*Slc32a1*⁻). rabies 표지 PB 뉴런의 **~80%가 lateral 하위핵** | **체온조절 행동 전용** — 말단 억제는 자가가온만 손상, 섭식·BAT는 무영향 | [[jung-2022-a-forebrain-neural-substrate-for\|Jung 2022]] |
| **DLS^Pdyn**(dorsal hippocampus CA3/2 경유) | GABA성 단시냅스 억제(TTX+4-AP 검증, EPSC 없음). norBNI(KOR 길항)가 IPSC 진폭을 바꾼다 | **맥락 조건화 섭식만** 선택적으로 매개 — 총 섭취량은 보존 | [[goode-2026-a-dorsal-hippocampus-prodynorphinergic-dorsolateral\|Goode 2026]] |
| **dLS^GLP-1R** | GABA성 단시냅스 억제(oIPSC 5/8, PTX 차단). **exendin-4가 이 시냅스를 강화**(oIPSC t(10)=2.312 p=0.0461, PPR t(10)=3.135 p=0.0120) | 억제 → 섭취↑, 투사 특이 활성·종말 자극 → 섭취↓ | [[lu-2024-dorsolateral-septum-glp-1r-neurons\|Lu 2024]] |
| **Vgat^BNST** | GABA성 — 다만 **LH^Vglut2를 선택 표적**하고 LH^Vgat에는 입력이 최소(rabies F1,20=38.50, P<0.001) | brake를 꺼서 포만 상태 폭식 | [[jennings-2013-the-inhibitory-circuit-architecture\|Jennings 2013]] |
| **mPFC** | 단시냅스 흥분성. LHA^VGAT·VGLUT2·OREX·MCH **네 집단 모두에** 연결(χ²=3.166, p=0.367) | ⚠️ 그러나 **스트레스 가소성은 LHA^VGLUT2에만** 생기고 LHA^VGAT는 무변(U=232, p=0.8341). 사회 스트레스 TRAP2 앙상블은 **LHA^VGAT에 거의 입력하지 않는다**(χ² Z=21, p=0.0007) | [[supiot-2026-a-prefrontal-cortex-lateral-hypothalamus\|Supiot 2026]] |
| 국소 **NPYR⁺ GABA interneuron** | LH^LepR를 tonic 억제(sIPSC 빈도↓, 진폭 불변 = 전시냅스) | NPY → interneuron Gi → **LH^LepR 탈억제**(permissive gate) | [[lee-2023-lateral-hypothalamic-leptin-receptor\|Lee 2023]] |

> ⚠️ **"NAc→LH 순효과의 역설"** — D1-MSN은 LH^Vgat **그리고** LH^VGluT2에 **모두** 억제를 보내고(VGluT2 starter rabies 입력 43/44 = 97% D1R, 기능 연결 65%), 급성 식이제한은 두 경로를 **똑같이** depress시킨다. engine 탈억제와 brake 탈억제가 상쇄되어야 하는데 순효과는 과식 — 원저도 "의외"로 적고 미해결로 남겼다 ([[thoeni-2020-depression-of-accumbal-to|Thoeni 2020]]).

### 3.2 출력
| 표적 | 내용 | 출처 |
|---|---|---|
| **VTA** | GABA성 기능 시냅스(IPSC 182.26 ± 39.62 pA, picrotoxin으로 8.15 ± 1.72 pA까지 차단). VTA GABA 뉴런을 DA보다 강하게 억제 → **disinhibition → NAc DA↑** | [[sharpe-2017-lateral-hypothalamic-gabaergic-neurons\|Sharpe 2017]]·[[nieh-2016-inhibitory-input-from-the\|Nieh 2016]] |
| **striatum 전역**(간접) | LHA^GABA 자극 → **전방**(NAcCR·NAcCC·NAcShL·DMS·DLS)에서 DA↑, **TS는 아님**. LHA^Glut는 거의 거울상(TS 평균 z: 대조 0.41 / GABA 1.76 / Glut 14.65). **두 집단의 비(LHA^Ratio)** 가 가치·valence를 연속 변수로 싣는다 | [[gordon-2026-lateral-hypothalamic-control-of-the\|Gordon 2026]](원문 대조 확인) |
| **whole-brain 지도**(rat, serial 2-photon) | LH 국소·**LHb·amygdala·BNST·septum·VTA(parabrachial pigmented area)·ventrolateral PAG·IL/PL mPFC**. VTA는 여러 표적 중 하나일 뿐 | [[sharpe-2017-lateral-hypothalamic-gabaergic-neurons\|Sharpe 2017]] |
| **PAG** | LH→PAG가 전달물질로 갈린다 — **GABA = 사냥, Glut = 도피**(Li 2018 경유) | [[korotkova-2026-balancing-acts-lateral-hypothalamic\|Korotkova 2026]] |
| **LHb** | ⚠️ LH^GABA→LHb는 **약하고** 대신 LHb 바로 아래 정중선 thalamus(PVT)를 지배한다 | [[stuber-2016-lateral-hypothalamic-circuits-for\|Stuber 2016]] |
| **dLS(상행)** | ⚠️ **GABA 축이 아니다** — perifornical CTb⁺Sst⁺의 75.3%가 *Slc17a6*⁺이고 *Slc32a1*⁺는 16.4%. Vgat-Cre 순행 섬유는 희박 | [[mickelsen-2019-single-cell-transcriptomic-analysis-of\|Mickelsen 2019]] |
| **mPFC(IL/PL) 역방향 분지** | ⚠️ **해부학적 존재만 기록돼 있고 기능 자료가 없다**(위키 내 명시적 빈칸) | — |

> ⚠️ **국소 연결은 극히 희박하다** — 인접 LH 뉴런끼리 시냅스 연결이 거의 없어("ultra-sparse connectivity", Burdakov & Karnani 2020 경유) 광억제 효과를 국소 탈억제로 설명하기 어렵다 ([[sharpe-2024-the-cognitive-lateral-hypothalamus|Sharpe 2024]]). 같은 이유로 LHA^GABA와 LHA^Glut가 왜 가치에 반대로 튜닝되는지도 국소 회로로 설명되지 않는다 ([[gordon-2026-lateral-hypothalamic-control-of-the|Gordon 2026]] 추정: 수렴 입력의 통합 방식 차이).

## 4. 하위집단 (위키에 1차 근거가 있는 것만)

### 4.1 기능으로 정의된 ensemble
| ensemble | 정의 자극 | 크기 | 출처 |
|---|---|---|---|
| **thermal P&R** | 8°C 열 보상(억제) ∩ 37°C 열 처벌(흥분) | **76 / 260**(12마리) | [[jung-2022-a-forebrain-neural-substrate-for\|Jung 2022]] |
| **칼로리 보상** | intraoral 액상 먹이 흥분 | 86 / 260, thermal P&R과 겹침 **17개뿐** | [[jung-2022-a-forebrain-neural-substrate-for\|Jung 2022]] |
| **motivational salience** | 열 처벌 + 먹이 cue 공통, 중립 tone 무반응 | **51 / 189**(4마리) | [[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles\|Lee 2026]] |
| **ingestion(consumption)** | 먹이·물·고형식 공통, 가치 스케일 | 46 / 189; 다른 세트에서 F-Exc 143 / 366 | [[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles\|Lee 2026]] |
| **appetitive(nose-poke)** | 보상 추구 조작 | **168 / 743**(6마리) | [[jennings-2015-visualizing-hypothalamic-network-dynamics\|Jennings 2015]] |
| **consummatory(첫 lick)** | 보상 전달 후 lick | **75 / 743**, appetitive와 "rarely both" | [[jennings-2015-visualizing-hypothalamic-network-dynamics\|Jennings 2015]] |

### 4.2 분자로 정의된 하위집단
- **LH^LepR** — 사용자 lab의 주 표적. LH GABA의 **4%**(자체 매핑)이고 그중 63%가 food-specific이며 **food-specific LH GABA의 79%(63/80)가 LepR**다. seeking 전용 25% / consummatory 전용 39%로 **순차·배타적**으로 작동하고, seeking 활성은 자발적 seeking 개시 **약 6초 전**부터 오른다 ([[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]). 광유전 효과는 **phase-isolated 과제에서만** 드러난다. → 상세·부호 논쟁은 [[concept-lateral-hypothalamus]]·[[siemian-2021-lateral-hypothalamic-lepr-neurons|Siemian 2021]]·[[petzold-2023-complementary-lateral-hypothalamic-populations|Petzold 2023]].
- **LH^Nts** — 70.8% GABA / 29.2% Glut. lick 운동량·거의 **inverse value**(물 > 20% sucrose) 채널이고, TeTox 침묵에도 **24 h 총 섭취·meal 구조는 불변**이며 음수·체온·체중·자발운동이 손상된다 ([[sumarli-2026-multidimensional-control-of-ingestive-behavior|Sumarli 2026]]·[[mickelsen-2019-single-cell-transcriptomic-analysis-of|Mickelsen 2019]]). → [[concept-neurotensin]].
- **LHA Sst⁺** — 억제성 3 + 흥분성 1 클러스터. **tuberal은 97.3% GABA, perifornical은 56.1% GABA**. 화학유전 활성 시 **갉기**(P=0.011)·digging·rearing·이동 증가 ([[mickelsen-2019-single-cell-transcriptomic-analysis-of|Mickelsen 2019]]).
- **LH^Gal / LH^Crh / LH^Penk** — 공발현 비율은 §1.4. Gal GABA 활성은 palatable 동기 섭식↑·chow 불변(Qualls-Creekmore 2017 경유, [[rossi-2018-overlapping-brain-circuits-for|Rossi 2018]]), Penk는 plLH→PAG에서 stress eating ([[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]]).
- ⚠️ **"LH^CaMKIIα"는 하위집단이 아니다** — 프로모터 농축 표지이고 GABA 분율이 보고에 따라 0%(정성)~33%로 갈린다 → [[concept-lh-camkii-neurons]].

### 4.3 공간 — 두 구획 체계가 대응하지 않는다
- **좌표 격자 4구획**(amLH/alLH/pmLH/plLH; AP −0.8~−2.2 × ML 1.0 경계) ([[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]], 사용자 lab).
- **발생 전사인자 기반 분자 층판 9구역**(*Otp*/*Meis2* × *Slc17a6*/*Slc32a1*; 두 띠가 약 60° 각도). 48개 세포타입 중 45개가 특정 구역에 농축되고, 억제성 우세 구역은 **LHAs-db**·**LHAfm** ([[wang-2021-expansion-assisted-iterative-fish-defines-lateral|Wang 2021]]).
- ⚠️ **대응표가 없다.** 분자 층판이 ML 1.0 경계를 가로지르고, Wang 표본은 tuberal 한 AP 구간뿐이다 → pmLH를 직접 매핑할 수 없다. 좌표 기반 아영역 주장(예: "anterior LepR = 섭식↓ vs pmLH = ↑")은 이 해상도 문제에 직접 걸린다.
- ⚠️ **국소적으로는 심하게 섞여 있다** — 반경 50 µm 안 평균 16개 세포타입, 최다 타입도 27%. 기능 쪽에서도 appetitive/consummatory 세포가 공간 클러스터로 분리되지 않는다.
- ⚠️ **ZI 경계는 분자적으로 연속** — LHAs-db가 Inh-9(*Nts*/*Meis2*)·Inh-13·17·19를 ZI와 공유한다. LH 좌표 주입의 'ZI 확산 기여는 작다'는 판단은 보류해야 한다 → [[concept-zona-incerta]].

## 5. ⚠️ 충돌·미해결

> 판정 범주는 [[overview-lateral-hypothalamus-synthesis]] §8을 따른다 — **genuine**(조건 축으로 해소되지 않음) / **reconcilable**(조건·방법 축으로 설명되는 겉보기 충돌, 병기 필수) / **misread**(인용 오류). 아래는 overview의 판정을 옮긴 것이 아니라 **LH^Vgat 축으로 다시 추린 것**이고, 수치가 원문으로 확인된 항목은 §7에 표시했다.

### ⚠️1. "LH^Vgat = 섭식 engine"인가 갉기 artifact인가 — reconcilable(genuine 잔여 있음)
- **A**: ChR2 → food zone·섭취·장소선호·자가자극↑(F2,27=86.24 / 17.05), ablation → 체중·섭취·PR break point↓ ([[jennings-2015-visualizing-hypothalamic-network-dynamics|Jennings 2015]]).
- **B**: hM3Dq의 "chow 섭취↑"는 **갉기 spillage**였고(나무 블록 t5=6.651 P=0.001, 갉기 주효과 F1,5=96.18 P=0.00019) 가루를 분리 칭량하면 실제 섭취 불변 ([[de-vrind-2019-effects-of-gaba-and|de Vrind 2019]], §7에서 원문 확인).
- **판정**: 조작 양식(분 단위 광유전 vs 7 h tonic 화학유전 + ZI 확산)·자극 강도(저주파 섭식 / 고주파 갉기)·측정 지표 차이로 대체로 해소된다. Jennings의 개시 latency·고지방 선호·배고픔 의존 자가자극처럼 spillage로 설명되지 않는 독립 지표가 같은 방향이다.
- ⚠️ **genuine 잔여**: de Vrind의 **palatable 선호비 감소**(t5=5.248, P=0.003)는 null이 아니라 **반대 부호**다. lard 단독 감소(t5=3.100, P=0.027)는 다중비교 보정 후 비유의이므로 이 논거는 선호비 하나에 걸려 있다.

### ⚠️2. cue 반응 세포는 "음식 특이"인가 "valence 무관 salience"인가 — reconcilable(세포 유형 분업)
- **A(특이)**: chocolate vs Lego 대조에서 **LH GABA의 8%만 food-specific**이고 그 79%가 LepR ([[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]). LH orexin은 소비성 보상 cue에만 선택적(novel object CPP에서 무반응) ([[harris-2005-a-role-for-lateral|Harris 2005]]).
- **B(비특이)**: 먹이 cue 반응 세포가 **혐오 열자극에도 흥분**하고(r = 0.59, 겹침 p = 4.69×10⁻⁴) 중립 tone에는 무반응 ([[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026]], §7 확인). 비식용 물체에도 같은 반응(R=0.556) ([[liu-2023-an-iterative-neural-processing|Liu 2023]]). cue 반응 LH^Vgat는 CS+/CS− 미변별(centroid 1.26 vs LepR 2.00) ([[siemian-2021-lateral-hypothalamic-lepr-neurons|Siemian 2021]]).
- **판정**: **세포 유형 분업**으로 봉합 가능 — Vgat salience ensemble(광범위·비변별) / orexin(소비성 보상 전용) / LepR(변별적 예측). ⚠️ **비율 직접 비교 금지**(대조 자극이 chocolate-vs-Lego / heat-vs-PB / CS+-vs-CS−로 모두 다르다).

### ⚠️3. "valence 무관"은 어디까지인가 — genuine(범위 미확정)
- [[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026]]은 같은 ensemble이 혐오 열자극과 식욕성 cue에 **함께 흥분**함을 근거로 valence 무관 salience라고 읽는다.
- 그러나 선행작 [[jung-2022-a-forebrain-neural-substrate-for|Jung 2022]]에서 **열 보상은 같은 집단을 억제**한다(열 보상 억제 43% vs 열 처벌 흥분 52%; 두 집합의 교집합 76개가 곧 thermal P&R ensemble; §7 확인). 즉 **열 영역 안에서는 부호가 있는(signed) 반응**이다.
- **판정**: "valence 무관"의 증거는 **"혐오 열자극 + 식욕성 먹이 cue를 공유한다"로 한정**된다. Lee 2026 원문은 이 제약을 한계로 따로 논의하지 않는다 — 인용할 때 반드시 병기할 것.
- 같은 방향의 추가 제약: LH^LepR는 **저불안 개체에서는 두 anxiogenic 자극을 변별**하고(중첩 46%, KS P=0.0005) **고불안 개체에서만 변별이 무너진다**(중첩 84%, P=0.8) ([[figge-schlensok-2025-a-lateral-hypothalamic-neuronal|Figge-Schlensok 2025]]) → "비변별 salience"가 개체 상태에 의존하는 성질일 수 있다.

### ⚠️4. LH^GABA는 개시 전담인가 유지에도 관여하는가 — reconcilable(해상도·측정 창)
- **A(개시만)**: GAD2 bulk photometry 반응이 개시에 정점이고 긴 접촉 종료 전에 소실(R=0.387), 유지는 DR^GABA(R=0.908) ([[liu-2023-an-iterative-neural-processing|Liu 2023]]·[[liu-2026-granular-motivational-interaction-and|Liu 2026]]).
- **B(유지에도)**: 첫 lick 흥분 세포 **75/743** ([[jennings-2015-visualizing-hypothalamic-network-dynamics|Jennings 2015]]), 섭취 10 s 내내 지속하며 value-scaled되는 ingestion ensemble ([[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026]]), sustained 2–3 s 가치 비례 + 섭취 중 광억제로 물 섭취↓ ([[gordon-2026-lateral-hypothalamic-control-of-the|Gordon 2026]]), LH^Vgat 억제가 **진행 중 licking을 한 lick 단위로 끊음**(F(1,9)=86.6) ([[oconnor-2015-accumbal-d1r-neurons-projecting|O'Connor 2015]]).
- **판정**: **bulk 평균 + onset 정점 vs 단일세포 subset + sustained 창**의 차이로 해소된다(Jennings도 첫 lick 후 0–1.5 s만 분석했다). 다만 **"biting을 직접 매개하지 않는다"** 는 명제는 Gordon의 필요성·O'Connor의 lick 단위 중단과 정면 충돌하므로 한정해 써야 한다.

### ⚠️5. LH^GABA→VTA가 DA에 무엇을 하는가 — **genuine**
- **A(disinhibition)**: 말단 자극이 VTA GABA를 DA보다 강하게 억제하고 NAc DA↑(FSCV p=0.0013), 행동 활성화 ([[nieh-2016-inhibitory-input-from-the|Nieh 2016]]).
- **B(기대값 relay)**: 같은 경로 **말단 억제가 학습을 촉진**한다(F(6,108)=3.0, p<0.02) → "기대값 전달 차단 → RPE 과대 유지" ([[sharpe-2017-lateral-hypothalamic-gabaergic-neurons|Sharpe 2017]]).
- **판정 genuine**: 통념대로면 말단 억제는 DA↓·학습↓여야 하므로 논리적 정면 대립이고, **두 연구 모두 그 조작 중에 DA를 측정하지 않았다**(Nieh의 DA 측정은 자극 조건). 봉합 후보 셋 모두 미검증 — ① 하위집단 분리(수화 상태 / 현저성 / 기대값), ② 자극 vs 억제의 시간 구조 비대칭, ③ 측정 층위(마취 FSCV vs 행동 추론). **결정 실험**: cue 한정 말단 억제 중 NAc·DMS GRAB-DA 동시 측정.
- ⚠️ 같은 경로에 실린 **네 번째 내용**: systemic osmolarity(수화 상태) 추적 ([[grove-2022-dopamine-subsystems-track-internal|Grove 2022]]). 한 경로가 이 넷을 어떻게 다중화하는지 미해결.
- ⚠️ [[sharpe-2024-the-cognitive-lateral-hypothalamus|Sharpe 2024]] Box 3은 LH→VTA 순효과를 "DA 발화·방출 증가"로 쓰면서 Sharpe 2017을 함께 인용한다 — **같은 저자 안에서 부호가 조정되지 않은 서술**이다.

### ⚠️6. 수화(물) 신호는 섭취 ensemble의 속성인가 — reconcilable(하위집단 분리)
- [[grove-2022-dopamine-subsystems-track-internal|Grove 2022]]: LH GABAergic이 체액 균형을 추적해 VTA DA에 전달.
- [[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026]]: 위내 물 주입 반응의 **지연 kinetics는 Grove와 정합**하지만, **구강 음수 흥분 뉴런과 위내 수화 흥분 뉴런의 겹침은 우연 수준**(77·28·10, p = 0.3488; 먹이에서는 유의, r = 0.40 p = 1.42×10⁻⁸).
- **판정**: "LH GABA = 수화 추적"은 **구강 섭취 ensemble과 다른 하위집단**의 속성일 가능성. 모달리티마다 구강–섭취후 대응이 다르다.

### ⚠️7. 투사 기반 표적화 — 충돌이 아니라 **두 번 독립으로 수렴한 경고**
- [[jung-2022-a-forebrain-neural-substrate-for|Jung 2022]] Fig S7(TRAP + synaptophysin-mRuby): 열 처벌 활성 뉴런과 칼로리 보상 활성 뉴런의 투사 패턴이 **구별되지 않았다**. 분자(Nts·Tac2)·투사(PAG) 정의 집단도 어느 반응 프로필과도 맞지 않았다.
- [[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026]] Cal-Light: salience 태깅 집단과 섭취 태깅 집단의 투사(DBB·VTA·DRN·PAG·periLC)가 **정성적으로 유사**했다.
- **판정**: 서로 다른 lab·태깅 기법·자극 축에서 같은 결론. [[proposal-lh-nac-nmpu-neuron-discovery]]·[[proposal-lh-nac-nmpu-nrf-junggyeon]]의 투사 기반 전략은 두 ensemble을 섞어 잡을 위험이 있고, **분자 정체 또는 기능 태깅**이 더 직접적이다 → [[concept-activity-molecular-registration]].

### ⚠️8. naive 동물은 혐오 정보를 다루는가 — reconcilable(활동 vs 필요성)
- **A(필요성 없음)**: naive rat 공포 학습에 LH^GABA 억제는 무효(n=4/4), cue–보상 경험 후에만 효과 ([[sharpe-2021-past-experience-shapes-the|Sharpe 2021]]).
- **B(활동 있음)**: LH^Vgat 189개 중 **51개가 열 처벌에 흥분** ([[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026]], §7 확인), LH^LepR도 anxiogenic 자극에 흥분 ([[figge-schlensok-2025-a-lateral-hypothalamic-neuronal|Figge-Schlensok 2025]]).
- **판정**: **활동(있음)과 필요성(없음)은 층위가 다르다** — 형식적 모순이 아니다. 단 "경험 전에는 LH가 혐오 정보를 다루지 않는다"로 읽으면 과잉 해석이고, n=4/4 null에 power 분석이 없다. ⚠️ 또 **Lee 2026 마우스는 같은 세션에서 액상식을 받으므로 Sharpe 기준의 "보상 naive"가 아니다** — 이 비교 자체가 성립하지 않는다.

### ⚠️9. LH^LepR는 LH^Vgat의 어떤 부분집합인가 — **genuine**(비율·순도 모두)
- **비율**: **4%**(사용자 lab 자체 매핑, [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]) vs **~20%**([[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]]·[[siemian-2021-lateral-hypothalamic-lepr-neurons|Siemian 2021]]). 정량 기법(Cre 리포터 / pSTAT3 / FISH)·좌표(pmLH vs alLH) 차이이고 상호 재현이 없다. 해석 효과는 실질적 — 4%라면 ablation 학습 결손이 "소수 세포의 큰 효과"가 된다.
- **순도**: *Lepr* mRNA가 LHA^**Vglut2** 투사뉴런 일부에도 있고 LHb 투사에서 유의하게 높다(X²=121.67, p<0.0001) ([[rossi-2021-transcriptional-and-functional-divergence|Rossi 2021]]). 반면 [[leinninger-2009-leptin-acts-via-leptin|Leinninger 2009]]는 단백 수준에서 LHA pSTAT3/LepRb가 **전부 GAD67⁺**이라고 보고한다.
- ⚠️ 널리 인용되는 **"LH^LepR의 92%가 GABA"는 Mickelsen 원문 본문에 없다** — 근거는 Supplementary의 Lepr-Cre;EYFP **sc-qPCR(마우스 2마리)**이고, 같은 논문 scRNA-seq에서는 LHA^GABA 전반에서 *Lepr*이 낮거나 희박하다.
- **실무 함의**: Lepr-Cre 효과를 GABA 단일 집단에 귀속할 수 없다 → **Lepr-Cre × Vgat-Flp INTERSECT** 필요.

### ⚠️10. "LH GABAergic = palatability 인코딩(calorie 아님)" — 한정 필요
- [[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]]의 서술이다. 그러나 ① **맛 없는 위내 먹이 주입에도** 반응하는 LH^Vgat 뉴런이 있고 그 반응이 구강 반응과 유의하게 겹치며(r = 0.40) ([[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026]]), ② GAD2 bulk 반응 **정점은 쾌락 섭식·항상성 섭식·물체 탐침에서 비슷**했고 쾌락에서 커진 것은 DR^GABA였다 ([[liu-2023-an-iterative-neural-processing|Liu 2023]]).
- **판정**: "calorie 아님"은 일반화하기에 강한 표현이다. palatability 코딩과 섭취후 영양 신호가 공존할 수 있다. (서지 메모: Garcia et al. 14:608047은 Jung 2022가 **2021**, Lee 2026이 **2020**으로 인용한다 — 같은 논문의 연도 표기 차이이므로 권·페이지를 함께 적을 것.)

### ⚠️11. 각성에서의 역할 — **genuine**
- Gad2-Cre;FLEX-DTA **64.6% 절제가 24시간 수면 구조를 전혀 바꾸지 않았다**([[heiss-2024-distinct-lateral-hypothalamic-camkiia|Heiss 2024]]) ↔ ventral LH wake-promoting GABAergic 집단 보고(Venner 2016 — **위키에 1차 페이지 없음, 자료 없음**).
- 저자 해명 3안(Gad2-Cre 미포착 ~10% / 불완전 절제 / 2차 효과) 모두 미검증. **현재 위키 입장**: "LH GABA의 각성 역할은 쟁점이며, 적어도 Gad2⁺ ∩ CaMKIIα⁺ 교집합은 수면 구조가 아니라 **LMA**를 조절한다".

### ⚠️12. 서지 — "Jennings 2013" 인용 중의성 — **misread**
- "LHA GABA → VTA disinhibition (Jennings 2013, Nieh 2016)"([[stuber-2025-the-neurobiology-of-overeating|Stuber 2025]])에서 Jennings 2013 **Science 341:1517은 BNST→LH 논문**이고 LH GABA의 VTA 투사를 다루지 않으며, 그 논문의 BNST→VTA 자극은 섭식을 **유발하지 않았다**([[jennings-2013-the-inhibitory-circuit-architecture|Jennings 2013]]).
- **조치**: "Jennings 2013 Science(BNST→LH)"와 "Jennings 2013 Nature(BNST→VTA)"를 구분 표기하고, LH→VTA 탈억제 축은 [[nieh-2016-inhibitory-input-from-the|Nieh 2016]]으로 귀속.

### 미해결 질문 (현재 위키로 답할 수 없는 것)
1. **기능 ensemble ↔ 분자 클러스터 대응표가 없다.** 억제성 15개 클러스터 중 어느 것이 salience / ingestion / thermal P&R에 해당하는지 측정된 적이 없다(Lee 2026 저자도 post hoc 전사체를 다음 단계로 제시).
2. [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]의 food-specific LH^LepR는 ingestion ensemble인가, 먹이에만 반응하는 모달리티 특이 소수 채널(Lee 2026의 "먹이 전용 34개" 같은)인가. **정의 축이 달라 직접 비교가 안 된다**(먹이 vs 레고 ≠ 먹이 vs 물).
3. salience ensemble과 ingestion ensemble 중 **어느 쪽이 NAc D1R-MSN 억제를 받는가** — 두 1차 원전 모두 LH^Vgat를 단일 집단으로 취급했다 ([[oconnor-2015-accumbal-d1r-neurons-projecting|O'Connor 2015]]·[[thoeni-2020-depression-of-accumbal-to|Thoeni 2020]]). dLS^GLP-1R 억제의 표적도 같은 질문 ([[lu-2024-dorsolateral-septum-glp-1r-neurons|Lu 2024]]는 하류를 **추정만** 했다).
4. 집단 광도측정에서 보이는 "양가 salience hub"([[jia-2026-novelty-exploration-activated-ensemble-in|Jia 2026]])가 분리된 두 ensemble의 **합**인지 — 단일세포 해상도 재검토 필요. Jia의 ensemble은 GABAergic 48.79%에 Vgat·Vglut2 양쪽을 포함하고 novelty로 태깅돼 직접 비교에 한계가 있다.
5. 만성 HFD에서 **GABA 쪽 ensemble도 둔화되는가** — HFD 전사체 변화와 인간 BMI 유전 연관이 모두 **Vglut2 쪽**에서 최대였고 Vgat 클러스터는 하나로 다뤄졌다 ([[rossi-2019-obesity-remodels-activity-and|Rossi 2019]]; GSE130597 재분석 가능).
6. LH^GABA → IL/PL mPFC 역방향 분지의 **기능 자료가 전혀 없다**.

## 6. NMPU 틀과의 연결 가설

> [!warning] 연결 가설 — 아래 전체가 **이 페이지의 제안**이며, 어떤 원문도 이렇게 주장하지 않았다
> 각 항목은 인용된 1차 결과에 기대지만 **그것들을 [[concept-need-motivation-pleasure-utility|NMPU]] 축에 잇는 것은 검증 대상**이다. findings로 인용하지 말 것.

[[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]]는 LH를 **Motivation**(Need의 누적을 행동 구동력으로 바꾸는 노드)에 배치하고, [[proposal-lh-nac-nmpu-neuron-discovery|LH–NAc 발굴 과제]]의 가설 표는 Vgat/GABA를 "Motivation·Pleasure, both phase, VTA 투사"로 두되 **아직 (발굴) 상태**로 적는다. 이 hub의 자료를 그 축에 얹으면 네 가지가 나온다.

1. **LH^Vgat 전체 활성 ≠ Motivation.** 같은 집단에 ① 체온 동기(thermal P&R 76/260), ② valence 무관 salience(51/189), ③ 섭취 운동 프로그램(갉기)이 함께 들어 있다. **Motivation으로 읽으려면 대조가 필요하다** — 혐오 자극(valence 분리), 물·비칼로리(모달리티 분리), 비식용 물체(목표 특이성 분리), 중립 tone(각성 분리). 네 대조를 모두 갖춘 설계는 위키에 없다.
2. **배정 규칙(가설)**: salience ensemble은 먹이 특이가 아닌 "우선순위화·에너지화" 신호여서 Motivation의 **valence 비특이 성분**에 가깝고, ingestion ensemble은 배고픔·영양 농도·GLP-1RA에 따라 스케일되므로 consummatory 단계의 **Pleasure/Utility 판독** 후보다. 사용자 lab의 [[lee-2023-lateral-hypothalamic-leptin-receptor|LH^LepR]] seeking/consummatory 분리는 이 두 축과 **수렴**하지만, 분자 집단이 두 기능 ensemble 중 어디에 속하는지는 미측정이다(§5 미해결 1–2).
3. **Need × Pleasure 곱셈 구조의 단일세포 검정**: ingestion ensemble 진폭이 Need(금식)와 영양가(농도)에 **함께** 비례한다. [[kim-2024-normative-framework-dissociates-need|Kim 2024]]의 곱셈 구조를 검증하려면 **금식 × 희석 2×2 설계**에서 진폭이 곱셈적으로 변하는지 보면 된다 — Lee 2026은 3조건뿐이라 상호작용을 판정할 수 없다.
4. **Motivation이 목표 없는 운동으로 새어 나가는가**: LH^LepR hM3Dq가 빈 우리에서 운동을 늘리고(t7=−4.820, P=0.002) **바닥 chow에서만** 섭취를 줄인 것([[de-vrind-2019-effects-of-gaba-and|de Vrind 2019]])은, Need 없이 Motivation 노드만 켜면 "목표 없는 seeking"이 생겨 근접 섭취와 경쟁한다는 읽기와 맞는다. 검증 설계: 같은 LepR-Cre hM3Dq 동물을 Lee 2023의 seeking-isolated·consummatory-isolated 챔버에 넣는다.
5. **설계 요구 세 가지**([[gordon-2026-lateral-hypothalamic-control-of-the|Gordon 2026]]에서 파생): ① NAc를 한 점으로 두지 말고 **전후축 다점 샘플링**(같은 조건에서 NAcCR과 NAcShM의 부호가 갈린다), ② LH 쪽 독립변수에 세포타입 활성뿐 아니라 **LHA^GABA/Glut 비**라는 집단 수준 gain 변수를 추가, ③ Motivation 출력을 lick 총량이 아니라 **bout 개시 vs bout 길이**로 분해(DA는 bout 수만 강화한다).
6. **GLP-1RA 약력학 판독치**: exendin-4가 LH^Vgat의 cue·섭취 반응 진폭과 일부 기저를 하위집단 특이적으로 낮췄다. 상류 후보는 **dLS^GLP-1R→LHA 억제 강화**([[lu-2024-dorsolateral-septum-glp-1r-neurons|Lu 2024]])이고, 사용자 lab의 식전 포만 회로(DMH GLP-1R→AgRP, [[kim-2024-glp-1-increases-preingestive-satiation|Kim 2024]])와 **병렬인 LH 작용점**일 수 있다. 검증된 바 없다 → [[concept-glp-1]].
7. **번역 함의**: 비선택적 LHA GABA 조작([[ha-2024-hypothalamic-neuronal-activation-non-human|Ha 2024]]·[[whiting-2019-deep-brain-stimulation-of|LHA DBS]])은 위 세 축을 동시에 건드린다. 효과(목표지향 섭식)와 부작용(혐오·각성·체온)을 분리하려면 ensemble 선택적 접근이 필요하다는 근거가 된다.

## 7. 원문 대조로 확인한 수치

이 페이지를 쓰면서 **위키 서술을 그대로 옮기지 않고 raw PDF에서 직접 확인한 항목**이다. 나머지 수치는 해당 위키 페이지의 기재를 따랐다. (O'Connor 2015는 작성 시점에 원본이 raw에 없었으나 **2026-11-23 사용자가 투입해 추가 대조**했다.)

| 수치 | 원문 위치 | 결과 |
|---|---|---|
| cluster 1/2/3 = **51 / 46 / 92** (n=189, 4마리) | Lee 2026, Fig 1H 범례 | 일치 |
| 열 흥분 ∩ caged PB 흥분 **p = 4.69×10⁻⁴**, 액상 먹이 ∩ caged PB **p = 0.6441** | Lee 2026, Fig 1I | 일치 |
| 열 vs caged PB **r = 0.59**(p = 2.37×10⁻¹⁹), 액상 먹이 vs caged PB **r = −0.02**(p = 7.56×10⁻¹) | Lee 2026, Fig 1M·1N | 일치 |
| Pavlovian n=210/4마리(cluster 1 67 / 2 60 / 3 83) | Lee 2026, Fig 2F 범례 | 일치 |
| pupil 예시 R² **0.302 vs 0.083**; 중립 tone 클러스터 n=43 vs 69(8마리) | Lee 2026, Fig 3G·3H·3N | 일치 |
| 먹이 ∩ 물 흥분 **90**(p = 6.7147×10⁻²⁰), 억제 **59**(p = 9.0409×10⁻¹²), **r = 0.62**(p = 2.20×10⁻⁴⁰) | Lee 2026, Fig 4C·4D·4H | 일치 |
| 고형식 액상 46 / 고형 58 / 둘 다 30(p = 6.0949×10⁻⁴) | Lee 2026, Fig 4K | 일치 |
| 가치 조작 n=325/8마리(F-Exc 118, F-Non 77, F-Inh 130) | Lee 2026, Fig 5E | 일치 |
| Ex-4 **100 μg/kg**; cue n=241/6마리(Cue-Exc 112), 섭취 n=322/8마리(F-Exc 101, F-Inh 108); Cue-Inh **p = 0.053** | Lee 2026, Fig 6A·6B·6G·6I | 일치 |
| 반응 비율 — 열 보상 흥분 3%·**억제 43%**, 열 처벌 **흥분 52%**·억제 4%, 칼로리 흥분 33%·억제 12% (260 뉴런/12마리) | Jung 2022, Fig 6B | 일치 |
| 집단 벡터 각도 **81 ± 10° / 108 ± 9° / 131 ± 7°** | Jung 2022, Fig 6C | 일치 |
| K-means cluster 1/2/3 = **85(33%) / 85(33%) / 90(34%)** | Jung 2022, Fig 6E–F | 일치 |
| thermal P&R **76**(35·60·무반응 89); 칼로리와의 교집합 **17**(단독 59·69, 무반응 115) | Jung 2022, Fig 6H·6I | 일치 |
| 레버 과제 112 뉴런/7마리, 20% 반응 | Jung 2022, Fig 7 본문 | 일치 |
| TS 평균 z — 대조 **0.41** / LHA^GABA **1.76** / LHA^Glut **14.65** | Gordon 2026, Result 2 본문(PDF p.6) | 일치 |
| 다음-trial 예측 OR — NAcCR 1.13(p=3.72e−13) · NAcCC 1.07 · NAcShL 1.07 · DMS 1.27 · DLS 1.32; **NAcShM 0.91(p=0.062)·TS 1.00(p=0.97)은 예측 못 함** | Gordon 2026, Result 6 본문(PDF p.14) | 일치. ⚠️ 위키의 NAcShL p=1.1e−6은 원문 **1.07e−6** |
| all-STR 동시 자극 > 개별 효과 산술합(paired t **T(8)=3.29, p=0.011**) | Gordon 2026, PDF p.14 | 일치 |
| LH^Vgat **743 뉴런/6마리**; nose-poke 흥분 **168**, 첫 lick 흥분 **75**, "rarely both" | Jennings 2015, Fig 6E·6F 범례 + Summary | 일치 |
| 나무 블록 **t5=6.651, P=0.001**; 갉기 주효과 **F1,5=96.18, P=0.00019** | de Vrind 2019, Results p.1126 | 일치 |
| palatable 선호비 **t5=5.248, P=0.003**; lard 단독 t5=3.100, P=0.027(보정 후 ns) | de Vrind 2019, Results p.1126 | 일치 |
| 운동 **t5=3.031, P=0.029**; 눈 온도 **F3,15=9.043, P=0.0012**; 3일 체중 **F3,15=5.353, P=0.0104** | de Vrind 2019, Results p.1127–1128 | 일치 |
| LH^LepR 운동 **t7=−4.820, P=0.002**; 눈 온도 F1,7=7.495, P=0.029 | de Vrind 2019, Results p.1127 | 일치 |
| LH 투사 NAcSh 뉴런 **93.6 ± 0.8%**가 D1R(1,173/1,246, n=3); D2R **5.2 ± 1.1%**(29/593, n=2) | O'Connor 2015, Results p.554 | 일치 |
| LH GABA 뉴런 **78% 연결(28/36, n=3)**, 평균 **803 ± 217 pA**; rabies EGFP 뉴런의 **97%**가 tdTomato⁺(D1R-MSN) | O'Connor 2015, Fig 6 본문 p.559 | 일치 |
| 포만 중 D1R-MSN 광억제 → 섭취↑ **F(1,19)=5.55, p<0.05**; LH^Vgat 직접 광억제(24 h 금식) **F(1,9)=8.64, p<0.05**; closed-loop 3-lick burst 분포 **F(1,9)=86.6, p<0.001** | O'Connor 2015, Fig 3·6 범례 | 일치 |
| ⚠️ biocytin 62개 중 연결 29개(47%) — 단 **MCH 염색은 25개(연결 14개 중 0개)**, **orexin-A 염색은 27개(연결 10개 중 0개)** | O'Connor 2015, Fig 5 본문 p.558 | **정밀화**: 연결 29개 전부를 두 마커로 염색한 것이 아니다 |

**해소된 1건**: [[gordon-2026-lateral-hypothalamic-control-of-the|Gordon 2026]] 페이지의 NAcShL 로지스틱 회귀 p값이 `1.1e-6`으로 적혀 있으나 원문은 **1.07e−6**이다(반올림 표기 차이, 결론 불변).

## 관련 페이지

### 상위 hub·종합
- [[concept-lateral-hypothalamus]] — LH 전체 개념 hub. 세포타입 표·아영역·회로·임상. 본 페이지는 그 "기능 정의 ensemble ↔ 분자·투사 정의 집단 — 대응 미해결" 절을 LH^Vgat 축으로 펼친 것
- [[overview-lateral-hypothalamus-synthesis]] — LH 종합(명제 1–6, 논쟁 지도 §8, 통합 모델, 연구 제안 16개). 본 페이지 §5의 판정 범주와 "가장 자주 반복된 해소 축"은 거기서 왔다
- [[concept-appetitive-consummatory-phases]] — phase 분해의 개념 hub. §2.2·§2.5의 설계 기준
- [[concept-need-motivation-pleasure-utility]] · [[kim-2024-unified-theoretical-framework-underlying-regulation]] · [[kim-2024-normative-framework-dissociates-need]] — 사용자 lab 이론 축. §6 연결 가설의 좌표계
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — 사용자 lab LH 리뷰. 본 페이지가 §1.4 펩타이드 비율과 §5-10 palatability 서술을 1차 census로 한정
- [[chen-2025-the-integrated-function-of-the]] · [[rossi-2023-control-of-energy-homeostasis]] · [[korotkova-2026-balancing-acts-lateral-hypothalamic]] — 외부 LHA taxonomy 리뷰. "engine/brake" 프레임의 출처이자 §2.6 운동 방향 긴장의 한쪽

### 1차 원전 — 섭식·보상·phase
- [[jennings-2015-visualizing-hypothalamic-network-dynamics]] — ★ 본 페이지 §2.1·§2.2의 핵심 원전(Cell 2015, Stuber lab). 743 뉴런 단일세포 + 양방향 광유전 + taCasp3 ablation. appetitive 168 / consummatory 75 "rarely both"
- [[jennings-2013-the-inhibitory-circuit-architecture]] — Vgat^BNST→**LH^Vglut2** 선택 억제(rabies F1,20=38.50)로 brake를 꺼서 폭식. LH^Vgat에는 BNST 입력이 최소라는 §3.1의 근거이자 §5-12 서지 주의의 정본
- [[nieh-2016-inhibitory-input-from-the]] — ★ LH^GABA→VTA disinhibition의 1차 원전(Neuron 2016, Tye lab). §2.1 기전·§2.4 salience 일반성·§5-5 충돌의 A측
- [[oconnor-2015-accumbal-d1r-neurons-projecting]] — ★ NAcSh D1R-MSN → LH^Vgat "feeding authorization" 게이트(78% 연결, 803±217 pA). §3.1 최상위 입력, §2.2 유지 의존성 증거
- [[thoeni-2020-depression-of-accumbal-to]] — 그 게이트의 eCB–CB1R i-LTD. §3.1 "순효과 역설"의 출처
- [[de-vrind-2019-effects-of-gaba-and]] — ★ 갉기 spillage·체온·운동 대비(Obesity 2019, Adan lab). §2.1·§2.6·§5-1. 측정 표준(가루 분리 칭량·비식품 대조물)의 근거
- [[liu-2023-an-iterative-neural-processing]] · [[liu-2026-granular-motivational-interaction-and]] — "LH^GABA = initiation" 축(§2.2·§5-4)과 비식용 물체 반응(R=0.556, §2.4)
- [[ha-2024-hypothalamic-neuronal-activation-non-human]] — 사용자 lab NHP 번역. palatable 한정 목표지향 섭식, 이상 갉기 없음(§2.1·§2.6)
- [[stuber-2016-lateral-hypothalamic-circuits-for]] · [[rossi-2018-overlapping-brain-circuits-for]] · [[stuber-2025-the-neurobiology-of-overeating]] — "LH^Vgat engine / LH^Vglut2 brake" 교과서 구도의 리뷰 계보

### 1차 원전 — 체온·salience
- [[jung-2022-a-forebrain-neural-substrate-for]] — ★ §2.3 전체(Neuron 2022, SNU 김성연 lab). 행동성 체온조절 필수, thermal P&R 76/260, 벡터 각도, LPB→LH, 투사 기반 표적화 실패(Fig S7)
- [[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles]] — ★ §2.4 전체(Cell Rep 2026, 같은 lab). salience vs ingestion ensemble, 중립 tone 대조, value scaling, Ex-4, Cal-Light 투사 미분리
- [[person-kim-sung-yon]] — 위 두 논문의 교신저자 hub(SNU). 사용자 lab과 같은 세포집단을 다른 축으로 다룬다
- [[jia-2026-novelty-exploration-activated-ensemble-in]] — 집단 광도측정 수준의 양가 salience hub(GABAergic 48.79%). §5 미해결 4
- [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal]] — LH^LepR의 불안 축. §5-3의 "비변별성은 개체 상태 의존일 수 있다"
- [[harris-2005-a-role-for-lateral]] — LH orexin은 소비성 보상 cue에만 선택적. §5-2 세포타입 분업의 반대 극
- [[rossi-2021-transcriptional-and-functional-divergence]] — LHA^Vglut2 투사 집단도 sucrose·quinine 모두에 흥분(LHb r=0.86, VTA r=0.72) → **세포타입을 가로지르는 valence 무관 흥분 코딩**이라는 수렴. §5-9의 LepR 순도 문제도 여기서

### 1차 원전 — 학습·인지
- [[sharpe-2017-lateral-hypothalamic-gabaergic-neurons]] — ★ §2.5의 원전(Curr Biol 2017). cue 구간 한정 광억제, GAD-Cre rat(LH 80±6%), VTA 말단 억제 → 학습 촉진
- [[sharpe-2021-past-experience-shapes-the]] — 같은 조작의 부호 반전(SPC·SOC 촉진, latent inhibition 소실, 경험 의존 공포 모집). §5-8
- [[sharpe-2024-the-cognitive-lateral-hypothalamus]] — "학습 편향 dial" 이론 종합. ⚠️ Box 3의 DA 부호 서술이 Sharpe 2017과 조정되지 않음(§5-5)
- [[siemian-2021-lateral-hypothalamic-lepr-neurons]] — LH^Vgat vs LH^LepR 나란히 비교. **cue 변별은 LepR만**(centroid 2.00 vs 1.26), LepR 조작은 섭취 무변
- [[hoang-2021-the-basolateral-amygdala-and]] · [[hoang-2026-methamphetamine-potentiates-the-use-of]] — BLA→LH→VTA 학습 편향 회로와, VTA^DA 입력을 받는 LH 표적이 **LH^GABA가 아니라는** disconnection 결과(평행 스트림)
- [[person-sharpe-melissa]] — cognitive LH 라인 인물 hub
- [[concept-dopamine-learning-rate]] — "학습률 조절" 요약의 한정(RPE 틀에서도 예측 입력 차단은 학습을 가속한다)

### 분자 정체·아틀라스
- [[mickelsen-2019-single-cell-transcriptomic-analysis-of]] — ★ §1.2 census(억제성 15 + 흥분성 15). Nts 70.8% GABA, Gal 59.0%, Sst 아영역 의존, "92% GABA"의 실제 출처
- [[wang-2021-expansion-assisted-iterative-fish-defines-lateral]] — ★ §1.1 전달물질 비(*Slc32a1* 55% vs *Slc17a6* 45%)와 §4.3 분자 층판 9구역
- [[rossi-2019-obesity-remodels-activity-and]] — 만성 HFD 전사체 변화·인간 BMI 연관이 **Vglut2 쪽에서 최대**(§5 미해결 5)
- [[concept-activity-molecular-registration]] — 기능 정의 ensemble ↔ 분자정체 정합. §5-7·미해결 1의 방법론 hub
- [[concept-lh-camkii-neurons]] — ⚠️ "LH^CaMKIIα"는 세포 유형이 아니다(§4.2)
- [[heiss-2024-distinct-lateral-hypothalamic-camkiia]] — Gad2-DTA 64.6% 절제: LMA는 바뀌고 수면 구조는 불변(§2.6·§5-11)
- [[tan-2022-lateral-hypothalamus-calcium-calmodulin-dependent-protein]] — 같은 프로모터·좌표에서 GABA 혼입을 반대로 결론(재현 불가)
- [[concept-zona-incerta]] — ZI 경계의 분자 연속성과 바이러스 확산 confound(§4.3)
- [[concept-spatial-transcriptomics]] · [[concept-monosynaptic-rabies-tracing]] · [[concept-hypomap]] — 방법 hub

### 분자 정의 하위집단
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] — ★ 사용자 lab LH^LepR 원저. LH GABA의 4%, food-specific의 79%, seeking 25% / consummatory 39%, NPY disinhibition gate
- [[petzold-2023-complementary-lateral-hypothalamic-populations]] — LH^LepR vs LH^Nts 상보 arbitration(amLH, AP −1.3). LepR 활성이 급성 제한 후 feeding rebound를 **억제**
- [[leinninger-2009-leptin-acts-via-leptin]] · [[leinninger-2011-leptin-action-via-neurotensin]] — "LH^LepR = GABA"의 1차 근거와 **LepRb의 ~60%가 Nts⁺**라는 도구 통약 문제(§1.4·§5-9)
- [[concept-neurotensin]] · [[sumarli-2026-multidimensional-control-of-ingestive-behavior]] — LH^Nts = lick 운동량·inverse value, 총 섭취 불변(§4.2)
- [[concept-orexin-neurons]] — LH^Vgat과 0% 중첩이면서 salience ensemble의 각성 결합 기전 후보(Lee 2026 Discussion 가설)
- [[domingos-2013-hypothalamic-melanin-concentrating-hormone]] · [[subramanian-2023-hypothalamic-melanin-concentrating-hormone-neurons]] — MCH: LH^Vgat과 0% 중첩이고, 두 phase를 한 집단이 겸한다는 대비 사례

### 회로 — 입력·출력
- [[concept-parabrachial-cgrp-alarm]] — LPB→LH^Vgat 흥분성 입력(체온조절 행동 전용)
- [[concept-lateral-septum]] · [[goode-2026-a-dorsal-hippocampus-prodynorphinergic-dorsolateral]] · [[lu-2024-dorsolateral-septum-glp-1r-neurons]] · [[azevedo-2020-a-limbic-circuit-selectively-links]] — LS→LH 하행 억제의 세 분자 채널(*Pdyn* / *Glp1r* / *Nts*). ⚠️ Lu의 하류 표적은 **추정만**
- [[concept-nucleus-accumbens]] · [[concept-bed-nucleus-stria-terminalis]] · [[concept-prefrontal-cortex-feeding]] · [[supiot-2026-a-prefrontal-cortex-lateral-hypothalamus]] — 상류 구조 hub와 mPFC 분기(스트레스 가소성은 LHA^VGLUT2에만)
- [[gordon-2026-lateral-hypothalamic-control-of-the]] — ★ LHA^GABA/Glut 비가 striatum 전후축 DA 지형을 인과 설정(§3.2·§6-5)
- [[concept-striatal-dopamine-gradient]] · [[concept-dopamine-reward-system]] — 하류 DA 좌표계
- [[grove-2022-dopamine-subsystems-track-internal]] · [[weber-2025-interoceptive-origin-reinforcement-learning]] · [[concept-primary-reward-signals]] — LH GABA→VTA가 나르는 네 번째 내용(수화 상태). §5-6
- [[concept-dynorphin-kappa-opioid]] — DLS^Pdyn→LHA^Vgat 시냅스의 KOR 조율

### 지표·측정·번역
- [[concept-consumption-vigor]] — 갉기·bout 구조·섭취량 지표 문제(§2.1·§2.6)
- [[concept-cue-reactivity]] — 중립 tone 대조 설계의 인간 이식(§2.4)
- [[concept-glp-1]] · [[kim-2024-glp-1-increases-preingestive-satiation]] · [[concept-glp1ra-response-variability]] — Ex-4가 두 phase를 함께 깎는다(§6-6)
- [[whiting-2013-lateral-hypothalamic-area-deep]] · [[whiting-2019-deep-brain-stimulation-of]] · [[concept-deep-brain-stimulation]] — 인간 LHA DBS의 RMR 상승과 그 세포 후보(§2.6)
- [[proposal-lh-nac-nmpu-neuron-discovery]] · [[proposal-lh-nac-nmpu-nrf-junggyeon]] — ★ 본 페이지 §5-7의 투사 기반 표적화 경고가 직접 겨냥하는 연구계획서
- [[person-choi-hyung-jin]] · [[person-stuber-garret]] · [[person-korotkova-tatiana]] — 인물 hub
