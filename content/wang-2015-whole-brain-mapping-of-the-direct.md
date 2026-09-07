---
title: "POMC·AgRP 뉴런의 직접 입력과 축삭 투사 전뇌 지도 (Wang 2015)"
type: paper
created: 2026-09-07
updated: 2026-09-07
source: raw/fnana-09-00040.pdf
authors: [Daqing Wang, Xiaobing He, Zhe Zhao, Qiru Feng, Rui Lin, Yue Sun, Ting Ding, Fuqiang Xu, Minmin Luo, Cheng Zhan]
year: 2015
journal: Frontiers in Neuroanatomy
---

> [!takeaway] 연구 방향 관점의 핵심
> 이 위키가 **회로 논문마다 조각으로 인용해 온 "ARC로 들어오는 입력"의 전체 좌표계**를 한 장에 깔아 주는 해부학 기준선이다. 세 가지가 사용자 연구에 직접 쓰인다.
> ① **POMC와 AgRP는 거의 같은 곳에서 입력을 받는다** — 52개 영역이 [[concept-pomc-neurons|POMC]]로, 그중 35개가 [[concept-npy-agrp-neurons|AgRP]]로도 투사. "기능이 반대니까 배선도 반대일 것"이라는 직관이 **해부 수준에서 기각**된다. 두 집단의 반대 작용은 입력의 출처가 아니라 **같은 입력을 받아 다르게 계산하는 데서** 나온다.
> ② 다만 **양이 다르다** — POMC는 시작세포당 ~49개, AgRP는 ~21개 입력. 공유 영역 35곳 대부분에서 POMC 쪽 입력 밀도가 유의하게 높다. **유일한 역전이 SO(시각교차상핵)** 로, AgRP에 더 많이 투사한다. 즉 POMC가 더 넓고 조밀하게 듣는다.
> ③ **NTS POMC는 ARC POMC와 배선이 아예 다른 세포다** — 입력의 ~80%가 뇌교·연수이고 소뇌핵까지 포함. 위키가 "NTS POMC = 즉시 satiety" 한 줄로만 다뤄 온 집단에 **해부학적 실체**가 생겼고, [[concept-dorsal-vagal-complex|DVC]] 약리(GLP-1RA의 hindbrain 무대)와 시상하부 경로를 가르는 구조적 근거가 된다.
> 덧붙여 **거의 모든 주요 입력원이 POMC/AgRP로부터 역방향 투사를 되받는다**(상호 연결). [[concept-lateral-septum|LS]]·[[concept-paraventricular-thalamus|PVT]]·MPO가 대표. 사용자 lab이 다루는 회로를 "일방향 화살표"로 그리면 안 된다는 경고이자, **폐루프 설계의 해부 근거**다.

# POMC·AgRP 뉴런의 직접 입력과 축삭 투사 전뇌 지도 (Wang 2015)

- **저널/연도**: Frontiers in Neuroanatomy 9:40 (2015-03-27). DOI: 10.3389/fnana.2015.00040
- **소속**: 칭화대 생명과학원 · **NIBS 베이징**(National Institute of Biological Sciences) · 중국과학원 우한 물리수학연구소 · 우한 광전자국가연구실.
- **교신**: Fuqiang Xu · **Minmin Luo** · **Cheng Zhan**. 제1저자 Daqing Wang.
- **라이선스**: CC BY (open access).

## 한 줄 요약
변형 광견병 바이러스 단시냅스 역행추적을 **세포타입 특이(Cre-loxP)** 로 적용해, ARC의 POMC·AgRP 뉴런과 NTS의 POMC 뉴런이 각각 받는 **전뇌 직접 입력**과 각각 내보내는 **축삭 투사**를 같은 기준으로 비교한 첫 지도. 세 집단 모두 자신의 주요 입력원으로 **역방향 투사를 되보낸다**.

## 배경 — 왜 필요했나
- 중추 멜라노코르틴계는 세 갈래 투사 뉴런으로 구성된다: **ARC POMC · NTS POMC · ARC AgRP** ([[concept-melanocortin-system]]).
- 고전적 tract tracing은 ARC·NTS가 넓은 영역과 주고받는다는 것까지만 보여 줬다. 문제는 **두 핵 안에서 세포타입이 섞여 있어**, 통상 추적 결과를 특정 세포집단에 귀속시킬 수 없다는 점.
- [[krashes-2014-an-excitatory-paraventricular-nucleus-to|Krashes 2014]]가 광견병 추적으로 **AgRP** 입력을 풀었으나, **POMC의 전뇌 입력은 미조사**였다. 출력 쪽도 [[betley-2013-parallel-redundant-circuit-organization-for|AgRP 축삭은 매핑됨]](Atasoy 2008, Betley 2013)에 비해 **ARC·NTS POMC 출력은 체계적 조사 부재**.

## 방법
| 항목 | 내용 |
|---|---|
| 유전 접근 | **POMC-Cre** Tg(Pomc1-cre)16Lowl/J (Balthasar 2004) · **AgRP-Cre** Agrptm1(cre)Lowl/J (Tong 2008). C57BL/6 백그라운드, 야생형 동복 대조. |
| 3-바이러스계 | AAV-DIO-**EGFP-TVA** + AAV-DIO-**RG**(광견병 당단백) → **3주** 후 **SAD-ΔG-mCherry(EnvA)** → **1주** 후 조직. |
| 표적 좌표 | ARC (AP/DV/ML −1.7/−5.5/−0.2) · NTS (8.4/3.3/0). AAV 80–300 nl(~2×10¹² gc/ml), 광견병 300 nl(2×10⁸ IU/ml). |
| 순행 추적 | AAV-DIO-**mtdTomato**(ARC, 적색) + AAV-DIO-**EmGFP**(NTS, 녹색)를 같은 POMC-Cre 개체에 동시 주입 → **1개월** 생존. AgRP-Cre에는 ARC EmGFP. |
| 정량 | 전뇌 절편 자동 슬라이드 스캔·공초점, Paxinos-Franklin 아틀라스로 핵 획정, ImageJ 자동 계수, **총 입력 수로 정규화**. 최소 한 라인에서 10개 이상 표지된 영역만 분석. |
| 3D | AutoAligner 정렬 + Imaris 재구성 (보충 동영상 3편). |

**특이도 검증**: EGFP-TVA가 ARC 뉴런의 **약 95%** 에서 POMC 또는 AgRP 면역반응과 공존. 시작세포(starter, RV-mCherry + EGFP-TVA 공발현)는 주입 측 ARC에 국한. **야생형 동복에서는 mCherry 세포 전무** → 표지가 Cre 의존 전달임을 확인.

## 결과

### 1. 규모 — POMC가 더 넓고 조밀하게 듣는다
| | 시작세포 | 전뇌 입력 뉴런 | 수렴비 |
|---|---|---|---|
| **ARC POMC** | ~900 | **43,990 ± 8,596** (n=4) | **~49** |
| **ARC AgRP** | ~800 | **17,191 ± 4,526** (n=5) | **~21** |
| **NTS POMC** | ~300 | **22,061 ± 5,092** (n=5) | **~74** |

시작세포 수가 비슷한데 입력 수가 2배 이상 차이 → **수렴비 자체가 다르다**. 전후축 분포 프로파일은 유사하나 ARC POMC 쪽이 전 구간에서 더 많이 표지된다.

### 2. ARC POMC vs AgRP — 같은 지형, 다른 밀도
- **52개 뇌영역**이 ARC POMC로 직접 투사. 그중 **35개**가 AgRP로도 투사.
- 공유 35개 영역에서 **POMC-표적 뉴런 밀도가 AgRP-표적보다 유의하게 높음**. 예: [[concept-lateral-septum|LS]]·MPO·AH·VTg·NI·VS.
- **유일한 예외 = SO(supraoptic nucleus)** — AgRP 개체에서 **가장 조밀하게 표지된 핵**이며 POMC보다 AgRP에 더 많이 투사. 두 집단을 가르는 유일한 해부 축.
- **POMC 전용 17개 영역**은 총 입력의 **~7%** 에 불과(소수). 예: **DS(배측 subiculum)** · **HDB(broca 대각선조 수평지)** · **DRN(배측 봉선핵)**.
- **시상하부가 입력의 대부분** — POMC ~60%, AgRP ~70%. 주요: AH · **DM** · LA · [[concept-paraventricular-nucleus|PVN]] · [[concept-lateral-hypothalamus|LH]] · SO · VMH · PH · MPA/MPO · LPO. **DM이 가장 많은 수**, **SO가 가장 높은 밀도**.
- **시상하부 밖 주요 전뇌** = 해마의 **subiculum(S)** · 중격의 **[[concept-lateral-septum|LS]]** · pallidum의 **[[concept-bed-nucleus-stria-terminalis|BST]]** — POMC ~15%, AgRP ~10%.
- 대부분의 피질·시상·선조체에는 **유의한 표지 없음**. 전뇌 밖 소수: **MM**(내측 유두체핵) · 정중 봉선 · 뇌교 중심회백질.

### 3. ★ NTS POMC — 배선이 다른 세포
- 입력의 **~80%가 뇌교·연수**. **소뇌핵**(Lat·Med)에서도 상당수 표지 — ARC 집단에는 없는 특징.
- 전뇌 입력은 총 **~10%** 에 불과하며 **CeM**([[concept-central-amygdala-glp1r|중심편도 내측부]]) · **PVN** · **PSTh**(부시상하핵)에서 온다.
- 후뇌 입력은 **29개 핵**에 걸쳐 있고, **Su5(상삼차신경핵)** 와 **IRt(중간세망핵)** 가 가장 조밀. 그 외 **LC(청반)** · **Gi** · **RMg(봉선대핵)** · **Rn(적핵)** · **PnO/PnC** 등.
- 피질에서는 **M1·S1**(및 M2·AI·S2)에 산발 표지.
- **ARC → NTS POMC 입력은 희박** — ARC에 성긴 표지만 있어 약한 연결.
- **12개 핵이 세 집단 모두에 직접 투사**: BST · DM · LH · Rch · TC · PVN · ARC · PAG · EW · **LPB** · RMg · ROb. → 멜라노코르틴 세 갈래를 **동시에 조율할 수 있는 공통 상류**.
- PSTh를 제외하면, NTS POMC로 투사하는 시상하부 영역은 **모두 ARC POMC로도 투사**한다.

### 4. 축삭 투사 (순행)
- **ARC POMC**: 시상하부에 최다(AH · MPA/MPO · LH · DM · VMH · PVN · PSTh · PH). 전뇌 조밀 영역 **BST · [[concept-lateral-septum|LS]] · DB · Acb(측좌핵)**. 중뇌 **PAG · DpG · DpMe**. 종말에 분지·varicosity가 많아 fiber-of-passage가 아닌 **진짜 종말**임을 시사.
- **NTS POMC**: 문측으로 **Acb까지** 도달. PVN·PSTh에 중등도. 최다 섬유는 뇌간의 **PCRt · MdD · MdV · SubC · Gi · PnO · IRt · Su5 · LPB**.
- **ARC AgRP**: ARC POMC와 대체로 유사하나 **POMC 쪽이 더 넓은 영역에 분포**.

### 5. ★ 상호 연결 (reciprocal) — 이 논문의 구조적 결론
- 총 입력의 **1%를 넘는 모든 영역**이 해당 POMC 뉴런으로부터 **역방향 투사를 되받는다**(Table 1).
- ARC POMC → **LS · PVT · MPO** (최대 입력원들). NTS POMC → **IRt · LPB · PVN**. ARC AgRP도 **LS · PVT · MPO** 등 지배적 입력원 전부로 투사.
- **ARC POMC → NTS**, 그리고 **NTS POMC → ARC** — 두 POMC 집단이 서로 투사한다.
- **PVN은 멜라노코르틴 세 갈래 모두와 상호 연결**을 이룬다.

## 저자가 명시한 한계·해석 (중요)

**① 통상 추적과의 불일치 — 양방향**
- **더 민감**: **subiculum** · **[[concept-zona-incerta|zona incerta]]** 의 역행 표지는 통상 tract tracing에서 이전에 동정되지 않았던 것. 광견병 추적이 소량 tracer 주입의 spill-over·fiber-of-passage 픽업 문제를 피하면서 감도가 높기 때문.
- **그럼에도 음성**: 통상 추적이 보고한 **SCN→ARC 투사**가 본 방법으로는 **표지되지 않음**. 저자 해석 — (a) SCN이 ARC 안의 **비-AgRP·비-POMC 뉴런**을 표적하거나, (b) ARC와 SCN이 인접해 통상 추적에서 **주입부 통과 섬유로 비선택 표지**됐을 가능성.
- 마찬가지로 **NTS→ARC**는 HRP 추적(Ricardo & Koh 1978) 보고가 있으나 본 방법에서 ARC POMC·AgRP 어느 쪽에서도 **NTS 표지 없음**. 반대 방향(NTS POMC의 축삭이 ARC로)은 관찰됨.

**② 같은 구조 안에서 같은 세포가 둘 다에 투사하는가는 미해결**
- POMC와 AgRP가 **분리된 입력 뉴런 집단**에서 오는지 **겹치는 집단**에서 오는지는 본 실험으로 판정 불가. 판정하려면 **한 개체 안에서 두 시작세포군을 서로 다른 색으로 표지**하는 이중색 단시냅스 추적이 필요.
- 저자 주: 최근 추적 연구들은 같은 구조 안의 **비중첩 세포타입이 유사한 입력 패턴**을 갖는 경우를 자주 보고한다(선조체 D1 vs D2 [[concept-medium-spiny-neuron|MSN]], 배측 봉선의 세로토닌성 vs GABA성).

**③ POMC의 출력은 GABA + 10종 이상 호르몬 산물**
- POMC 뉴런은 GABA 외에 **ACTH · β-endorphin · 멜라노사이트자극 펩타이드** 등 10가지 넘는 산물을 공방출할 수 있어, 넓은 입력을 통합해 **다양한 신호분자로 하류를 조절**한다.

**④ 이질성 미해결**
- ARC POMC는 서로 다른 신경전달물질 표현형의 **이질적 부분집합**으로 구성(Hentges 2004, 2009; Meister 2006)되며, 부분집합마다 다른 subcircuit에 묶여 다른 기능을 매개할 가능성. 본 지도는 **집단 평균**이다.

## 왜 이 위키에 중요한가

1. **"POMC vs AgRP = 반대"라는 틀에 해부학적 제동.** 입력 지형이 거의 같다면, 두 집단의 반대 작용은 **같은 정보를 받아 다르게 변환**하는 데서 나온다. [[concept-npy-agrp-neurons|AgRP]]·[[concept-pomc-neurons|POMC]] 페이지가 각각 정리해 온 "선택적 입력"(예: [[garfield-2016-dynamic-gabaergic-afferent-modulation|vDMH^LepR→AgRP 100% vs POMC 9%]])은 **전체 지형이 아니라 특정 분자 하위집단 수준의 선택성**임을 이 지도가 배경으로 확정한다. 두 층위를 혼동하면 안 된다.
2. **위키가 조각으로 쌓아 온 입력들의 좌표계 제공.** [[krashes-2014-an-excitatory-paraventricular-nucleus-to|PVH TRH/PACAP]] · [[garfield-2016-dynamic-gabaergic-afferent-modulation|vDMH^LepR/pDYN]] · [[walker-2026-a-hypothalamic-circuit-for|PVH^Sim2]] · [[goode-2026-a-dorsal-hippocampus-prodynorphinergic-dorsolateral|해마→LS]] 는 모두 이 52개 영역 안에 있다. 새 회로 논문이 나올 때 **"지도에 이미 있던 영역인가, 새 영역인가"** 를 묻는 기준선.
3. **상호 연결 = 폐루프 설계의 해부 근거.** 사용자 lab의 [[concept-deep-brain-stimulation|DBS]] 관심에서, 시상하부 표적을 "입력"이나 "출력" 한쪽으로만 모델링하면 안 된다. LS·PVT·MPO·PVN은 전부 양방향이다.
4. **NTS POMC의 실체화.** [[concept-dorsal-vagal-complex|DVC]] 무대에서 벌어지는 GLP-1RA 약리와 시상하부 경로가 왜 상보적인지를 **배선 수준**에서 설명한다. 두 POMC 집단은 같은 유전자를 쓰지만 **다른 회로에 산다**.
5. **저자가 남긴 숙제가 사용자 lab의 방법론과 맞물린다.** "같은 입력 세포가 POMC·AgRP 둘 다에 투사하는가"는 이중색 추적이 필요하고, "POMC 부분집합마다 다른 subcircuit인가"는 [[concept-activity-molecular-registration|활성–분자정체 정합]]이 답할 문제다.

## 관련 페이지
- [[concept-monosynaptic-rabies-tracing]] — 본 논문이 쓴 3-바이러스 단시냅스 역행추적의 방법론 hub(시작세포·수렴비·해석 함정).
- [[concept-pomc-neurons]] — ARC POMC와 **NTS POMC의 배선 분리**를 제공하는 1차 해부 자료.
- [[concept-npy-agrp-neurons]] — AgRP 입력 지형(52 중 35 공유·SO만 AgRP 우세)의 전뇌 좌표계.
- [[concept-arcuate-nucleus]] — ARC 두 first-order 집단이 받는 입력의 전뇌 분포(시상하부 60–70%).
- [[concept-melanocortin-system]] — 세 갈래 투사 뉴런(ARC POMC·NTS POMC·ARC AgRP)을 하나의 배선 지도로 묶은 구조적 backbone. **12개 공통 상류 핵**.
- [[krashes-2014-an-excitatory-paraventricular-nucleus-to]] — AgRP 광견병 입력 정량(ARC 38%·DMH 26%·PVH 18%)의 선행 연구. 본 논문이 **POMC를 같은 방법으로 추가**하고 비교 축을 만듦 (Nature 2014, Lowell lab).
- [[garfield-2016-dynamic-gabaergic-afferent-modulation]] — 본 지도의 DM 입력을 **분자 수준으로 좁힌** 후속: vDMH^LepR/pDYN이 AgRP에 100%·POMC에 9%로 선택적. 영역 수준 공유 ≠ 세포 수준 공유.
- [[betley-2013-parallel-redundant-circuit-organization-for]] — AgRP **출력**의 병렬·중복 배선. 본 논문은 같은 AgRP의 **입력** 쪽과 POMC 비교를 담당(짝을 이룸).
- [[concept-dorsal-vagal-complex]] — NTS POMC가 사는 hindbrain 무대. 본 논문이 그 POMC 집단의 입력 ~80%가 뇌교·연수임을 확정.
- [[concept-lateral-septum]] — ARC POMC의 **최대급 입력원이자 역방향 투사 표적**(양방향). 저자는 LS 활성이 위 팽창·ghrelin에 반응하고(Gong 2013) 중격 오피오이드·노르아드레날린이 섭취를 늘린다는 점을 들어, **LS→ARC 입력이 POMC/AgRP 생리에 어떤 영향을 주는지는 미검증 과제**로 남긴다.
- [[concept-paraventricular-thalamus]] — ARC POMC·AgRP 모두의 주요 상호 연결 상대(PVT).
- [[concept-medial-preoptic-area]] — MPO/MPA가 POMC 우세 입력원이자 상호 투사 표적.
- [[concept-paraventricular-nucleus]] — 멜라노코르틴 **세 갈래 모두**와 상호 연결을 이루는 핵. SO(supraoptic)는 AgRP 우세라는 유일한 역전.
- [[concept-zona-incerta]] — 통상 추적이 놓쳤던 ARC POMC 입력원으로 본 방법에서 새로 검출.
- [[concept-hippocampus-feeding]] — **subiculum(DS/VS)** 이 ARC POMC의 주요 전뇌 입력원(POMC 전용 영역 포함). 해마-섭식 축의 오래된 해부 근거.
- [[concept-lateral-hypothalamus]] · [[concept-dorsomedial-hypothalamus]] · [[concept-bed-nucleus-stria-terminalis]] — 시상하부·전뇌 주요 입력원.
- [[concept-central-amygdala-glp1r]] — **CeM이 NTS POMC의 전뇌 최대급 입력원**. CeA↔hindbrain 축의 해부 근거.
- [[concept-parabrachial-cgrp-alarm]] — LPB가 세 집단 공통 상류이자 NTS POMC의 상호 투사 표적.
- [[concept-area-postrema]] — NTS POMC 입력이 밀집한 연수 계열의 인접 CVO.
- [[concept-activity-molecular-registration]] — 저자가 남긴 "POMC 부분집합마다 다른 subcircuit인가"를 풀 방법론.
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
