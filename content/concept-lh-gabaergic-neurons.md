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
