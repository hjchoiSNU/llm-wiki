---
title: LH GABAergic 뉴런 (LH^Vgat)
type: concept
created: 2026-11-22
updated: 2026-11-22
ingested_by: claude-opus5
aliases: [LH^Vgat, LHA^GABA, LH^GABA, LH GABA, LHA GABA, Slc32a1 LH]
---

> [!takeaway] 연구 방향 관점의 핵심
> **"LH^Vgat = 섭식 engine"은 위키 안에서 더는 유지되지 않는 한 줄이다.** 같은 Vgat⁺ 집단이 ① 섭식·보상을 구동하고([[jennings-2015-visualizing-hypothalamic-network-dynamics|Jennings 2015]]), ② **행동성 체온조절에 필수**이며([[jung-2022-a-forebrain-neural-substrate-for|Jung 2022]]), ③ 상당수가 **혐오 열자극에 흥분하는 valence 무관 salience 코더**이고([[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026]]), ④ cue–보상 **학습**에 필요하며([[sharpe-2017-lateral-hypothalamic-gabaergic-neurons|Sharpe 2017]]), ⑤ bulk로 켜면 섭취가 아니라 **갉기**가 나온다([[de-vrind-2019-effects-of-gaba-and|de Vrind 2019]]). 이 다섯 축은 서로를 반박하지 않는다 — **측정 창·조작 양식·대조 자극이 다른 축들**이다.
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
| **NAcSh D1R-MSN** | GABA성 단시냅스 억제. **LH^Vgat의 78%(28/36)** 가 연결(803 ± 217 pA), rabies 입력의 **97%가 D1R-MSN**. LH 투사 NAcSh 뉴런의 **93.6%**가 D1R(D2R 5.2%). biocytin 충전 62개 중 연결된 29개에서 **MCH⁺·orexin⁺는 0개** | "feeding authorization" 게이트 — D1R 말단 자극은 24 h 금식에도 섭취 중단, D1R 광억제는 **포만 상태에서도 섭취 개시**(F(1,19)=5.55, p<0.05) | [[oconnor-2015-accumbal-d1r-neurons-projecting\|O'Connor 2015]] |
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
