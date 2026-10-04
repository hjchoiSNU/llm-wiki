---
title: "Overlapping brain circuits for homeostatic and hedonic feeding (Rossi & Stuber 2018, Cell Metab)"
type: paper
created: 2026-10-03
updated: 2026-10-03
source: "raw/2018_Cell Metab_Rossi,Stuber_Overlapping brain circuits for homeostatic and hedonic feeding (rev) (1).pdf"
authors: [Mark A. Rossi, Garret D. Stuber]
year: 2018
journal: "Cell Metabolism 27(1):42–56 (2018-01-09); doi:10.1016/j.cmet.2017.09.021 (Review)"
---

> [!takeaway] 연구 방향 관점의 핵심
> **"항상성(homeostatic) 섭식 회로와 쾌락(hedonic) 섭식 회로는 현재 자료로는 분리할 수 없다"** 는 주장을 정면으로 편 Stuber lab의 Cell Metabolism 리뷰다. 저자들은 섭식 회로를 **ventricular(ARC·PVN) → intermediate(PBN·BNST·CeA·LHA) → monoaminergic(VTA DA·DR 5-HT)** 의 3층으로 놓는다. 아래층으로 갈수록 기능이 **특이적(에너지 항상성)에서 일반적(동기·각성·학습)** 으로 넓어진다. 경험칙도 하나 정리한다. **식욕을 올리는 세포의 활성은 대개 보상적이고, 식욕을 내리는 세포의 활성은 대개 혐오적**이다. 예외는 AgRP(먹이가 없으면 회피, 먹이가 있으면 자기자극)와 PVN^MC4R→PBN(섭식↓인데 선호)이다. [[concept-lateral-hypothalamus|LHA]]는 이 구도에서 **"feeding과 reward를 잇는 결정적 고리"** 로, 섞여 있는 Vgat(섭식↑·보상)와 Vglut2(섭식↓·혐오) 집단이 기능적으로 대립한다(Figure 2B).
> 실천 권고도 분명하다. 세포를 조작할 때 **섭식과 보상(RTPP·자기자극) 표현형을 둘 다 재라**는 것이다. 두 표의 appetitive 열은 **Table 1 38행 중 29행, Table 2 30행 중 20행이 '?'(미측정)** 였다.
> 사용자 연구와 닿는 지점: (1) [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]]가 homeostatic/hedonic 이분법 대신 Need·Motivation·Pleasure·Utility 축을 세운 이유를 회로 쪽에서 미리 논증한 선행 리뷰로 읽을 수 있다. (2) AgRP의 맥락 의존 valence는 [[kim-2024-normative-framework-dissociates-need|Kim 2024]]의 **AgRP = Need / LH^LepR = Motivation** 분해로 해석할 수 있다. 먹을 대상이 없을 때의 Need 신호는 혐오적이고, 대상이 있을 때만 보상으로 바뀐다(연결 가설). (3) **LHA^Vglut2 유전적 ablation → 섭식·체중↑** 을 **Stamatakis 2016**에 귀속해 인용한다. 위키의 [[rossi-2019-obesity-remodels-activity-and|Rossi 2019]] 페이지가 지적한 출처 혼동을 정리하는 근거다. (4) 같은 교신저자의 [[stuber-2025-the-neurobiology-of-overeating|Stuber 2025]]는 다시 "homeostatic + hedonic 두 시스템 + crosstalk"로 나눈다(⚠️ 병기).

# Overlapping brain circuits for homeostatic and hedonic feeding (Rossi & Stuber 2018)

- **저널**: Cell Metabolism 27, 42–56 (January 9, 2018). DOI: 10.1016/j.cmet.2017.09.021. Review(본문 + Figure 2개[schematic] + Table 2개; 새 실험 데이터 없음).
- **소속**: University of North Carolina at Chapel Hill — Department of Psychiatry, Neuroscience Center, Department of Cell Biology and Physiology. **Stuber lab**. 교신 **Garret D. Stuber** (gstuber@med.unc.edu; 현 University of Washington).
- **지원**: NIDA DA038168·DA032750, Foundation of Hope, Brain & Behavior Research Foundation, Simons Foundation(G.D.S.); NIDDK DK112564(M.A.R.).
- **위치**: 1저자 Rossi는 이후 [[rossi-2019-obesity-remodels-activity-and|Rossi 2019 Science]](LHA scRNA-seq + 2-photon)와 [[rossi-2023-control-of-energy-homeostasis|Rossi 2023 TiNS]](LHA 세포타입 리뷰)를 낸다. 본 리뷰 결론부의 권고(활동 기록으로 부분집단 분리, single-cell sequencing)를 Stuber lab이 실제로 수행한 경로다.

## 한 줄 요약
ARC·PVN의 항상성 뉴런은 PBN·확장편도·LHA 같은 중간 노드를 거쳐 중뇌 도파민계와 연결되고, 이 중간·모노아민 노드들은 섭식과 보상/혐오를 **함께** 바꾼다. 따라서 "homeostatic vs hedonic" 회로 구분은 현재 자료로 성립하지 않는다. 저자들은 섭식 연구에서 **섭취량 외 보상 표현형을 함께 측정**하라고 권고한다.

## 핵심 내용

### 문제 제기 — 이분법은 실용적 편의였다
- **정의(원문)**: homeostatic feeding = 정상 체중·대사 기능 유지에 **필요한** 섭취. hedonic feeding = **감각 지각이나 쾌락**이 이끄는 섭취.
- 두 주제는 반세기 넘게 얽혀 있었다(Hoebel & Teitelbaum 1962; Margules & Olds 1962 *"Identical 'feeding' and 'rewarding' systems in the lateral hypothalamus"*; Berridge 1996; Wise 2004). 그러나 실용적 이유로 따로 연구됐다. 둘을 함께 다룬 문헌은 소수다(Saper 2002; Castro 2015).
- **저자 논지**: 모든 섭식 상황에서 두 시스템은 **동시에 활성**되며, 그 비중이 **음식 종류(palatable vs aversive)** 와 **생리 상태(starvation)** 에 따라 이동한다. 이분법은 1차 기능 요소를 정의하는 데는 도움이 되지만, 해부학적 상호연결과 조작 결과를 보면 하나의 복합 동기 시스템이다.
- **경험칙**: 식욕 촉진 세포를 광유전·화학유전으로 활성화하면 대개 **보상적**(선호·자기자극)이고, 식욕 억제 세포의 활성은 대개 **혐오적**(회피)이다(Jennings 2013a, 2015). 이 규칙의 예외가 리뷰 전체의 논점을 이룬다.
- 임상 맥락: 신경성 식욕부진(hypophagia)·비만(hyperphagia) 같은 병리, 그리고 남용 약물이 섭식 회로를 **co-opt**한다는 관찰.

### Figure 1 — 3층 프레임 (ventricular → intermediate → monoaminergic)
| 층 | 구성 | 특징 | 기능 범위 |
|---|---|---|---|
| **Ventricular** | ARC, PVN (제3뇌실 인접) | 인슐린·leptin·ghrelin 수용체가 **가장 조밀**(Hill 1986; Scott 2009; Zigman 2006); intermediate로 투사 | **특이적** — 조작 시 에너지 항상성에 뚜렷한 효과 |
| **Intermediate** | PBN, BNST, CeA, LHA (비망라) | ventricular의 하류; ventricular로 synaptic feedback; 서로 강하게 상호연결 | **일반적** — 보상·혐오 + 섭식·체중 + 스트레스·불안 |
| **Monoaminergic** | VTA DA, DR 5-HT | intermediate 입력을 받음; ventricular→monoaminergic **직접 연결은 성체에서 드물거나 없음**(점선) | **가장 일반적** — 각성·운동·동기·적응 기능 전반 |

- 단서(원문): 이 배치는 **개념적 단순화**이며 다른 연결이 없다는 뜻이 아니다. 순환 호르몬은 뇌 전역에 작용할 수 있다. ventricular 뉴런도 주로 시상하부 내부에서 synaptic 입력을 받는다(Wang 2015). 그 입력이 feedback인지 독립 구동원인지는 불명이다. 다룬 세포타입은 섭식·보상 관련 부분집합뿐이다.

### Ventricular — ARC
- **AgRP**: 금식으로 활성화된다. 인간 AgRP 발현은 BMI와 **음의 상관**이다(Alkemade 2012). **성체** ablation은 식욕부진·아사를 일으키지만 **신생아기** ablation 마우스는 정상 발달한다(Gropp 2005; Luquet 2005). 배부른 마우스에서 급성 광·화학유전 자극은 금식 마우스 같은 섭식·먹이 지향 행동을 낸다(Aponte 2011; Krashes 2011; Nakajima 2016). AgRP·NPY·GABA를 공동 방출하며, **대부분 비중첩인 장거리 투사**를 낸다([[betley-2013-parallel-redundant-circuit-organization-for|Betley 2013]]). 광자극은 **수 분의 지연** 뒤에야 섭식을 일으키지만, 먹이 제시는 이들을 **즉시 억제**한다(Betley 2015; Chen 2015) — 기전 미상(중뇌·후뇌 상행 신호나 다시냅스 피질 감각 입력 추정).
- **POMC**: AgRP와 섞여 있고 입출력 연결이 비슷하다(Wang 2015). β-endorphin·CART를 공발현하고 leptin·insulin에 반응한다(leptin → Fos·Socs3 유도). ablation은 과식·비만을 낸다. **급성** 광자극은 섭식을 줄이지 못하고 **지속** 활성화만 MC 수용체를 통해 섭식·체중을 줄인다. 지속 억제는 섭식을 늘린다(Aponte 2011; Zhan 2013; Atasoy 2012). α-MSH는 MC4R 작용제, AgRP는 MC4R **inverse agonist**(Nijenhuis 2001)다. MC4R 결손은 마우스 비만(Huszar 1997), 인간 MC4R 변이는 일부 비만의 원인이다(Vaisse 2000). AgRP가 국소적으로 POMC를 억제하지만 AgRP 유발 섭식에 필수는 아니다(Atasoy 2012).
- **비정형 ARC 집단**: ARC **TH** 뉴런은 ghrelin을 감지해 AgRP를 흥분·POMC를 억제하고, 광자극은 배부른 마우스의 섭식을 늘린다(Zhang & van den Pol 2016). ARC **OXTR-Vglut2** 뉴런은 POMC와 함께 하류 MC4R 뉴런에 시너지로 작용해 **빠른 포만**을 낸다([[person-fenselau-henning|Fenselau]] 2017).

### Figure 2A — AgRP의 맥락 의존 valence (경험칙의 대표 예외)
- **먹이 없음**: 방의 한쪽을 AgRP 광자극과 짝지으면 마우스는 점점 그쪽을 **회피**한다(conditioned avoidance). AgRP가 negative-valence teaching signal로 행동을 이끈다는 해석이다(Betley 2015). 배고픔을 만들면서 먹이를 주지 않으면 불쾌하다는 논리다.
- **먹이 있음**: 마우스는 AgRP 자극을 얻으려 **레버를 누르고**, 먹이를 치운 뒤에도 자기자극을 지속한다. 그러나 **처음부터 먹이 없이 훈련하면 자기자극을 안정적으로 획득하지 못한다**(Chen 2016).
- 저자 결론: AgRP 활성의 보상성은 **먹이의 존재에 의존**한다. 두 표현형 모두 하류 표적과의 상호작용에 의존해야 하며, 그것이 중뇌 DA에 의존하는지가 열린 질문이다(Lammel 2012).

### Ventricular — PVN
- PVN NPY 미세주입 → 섭식↑, MC4R 작용제로 감쇠된다(Cowley 1999). AgRP→PVN 말단 자극은 세포체 자극의 섭식을 재현한다(Atasoy 2012). ARC OXTR-Vglut2→PVN은 섭식을 빠르게 억제한다(Fenselau 2017).
- PVN **Sim1** 화학유전 억제 → 섭식↑(Atasoy 2012), ablation → 과식·비만(Xi 2013). PVN **MC4R** 화학유전 활성 → 섭식↓(Garfield 2015).
- **예외 2**: PVN^MC4R→PBN 투사 광자극은 섭식을 줄이지만 CPP에서 **혐오적이지 않다**. 배고픈 마우스는 오히려 이 자극을 **선호**한다(Garfield 2015).
- 역설적으로 PVN에서 AgRP로 가는 **흥분성·식욕 촉진 투사**도 있다([[krashes-2014-an-excitatory-paraventricular-nucleus-to|Krashes 2014]]). 이 투사가 다른 집단과 어떻게 통합되는지는 불명이다.
- 소결: ARC·PVN 뉴런은 고차 상호작용을 통해 **항상성 섭식을 훨씬 넘어서는 기능**을 얻는다.

### Intermediate — PBN
- 미각 처리 핵(NTS에서 입력). PBN 병변은 conditioned taste aversion 획득을 막지만 conditioned flavor preference는 보존한다(Reilly 1993). CeA·LHA와 상호연결되어 있다(Li 2005).
- AgRP의 PBN 억제는 **malaise를 억누른다**고 여겨진다. AgRP의 GABA 방출을 유전적으로 제거하면 PBN이 과활성화되어 섭식이 멈춘다(Wu 2009, 2012). PBN은 malaise에 반응하고 음식의 보상성을 바꾼다(Söderpalm & Berridge 2000).
- **PBN^CGRP**: Fos 유도가 섭취량과 **반비례**한다. 세포체나 CGRP→CeA 투사를 활성하면 섭식이 억제된다. 억제하면 식욕 억제 조건에서 섭식이 회복되지만, **배부른 마우스에서 섭식을 유도하지는 않는다**(Carter 2013; Campos 2017). → [[concept-parabrachial-cgrp-alarm]].
- PBN은 LHA·VTA·PVN·BNST·CeA·NAc로 장거리 투사한다. 에너지 수요 신호와 내장 신호(malaise)를 통합해 목표 지향 행동을 조율하는 위치다.

### Intermediate — 확장편도 (BNST, CeA)
- **BNST**: 불안·공포 학습의 핵심 노드다. AgRP→BNST 말단 광자극은 배부른 마우스에서 섭식을 유발한다(Betley 2013). **BNST GABA→LHA** 광자극은 섭식과 보상 관련 행동을 함께 유발한다(Jennings 2013a). BNST CRF2 길항은 구속 스트레스 뒤 섭식을 늘린다(Ohata 2011). AgRP→BNST 섭식은 하류 BNST MC4R 억제로 막히지 않는다(Garfield 2015). MeA **Npy1R** 뉴런(AgRP 표적, BNST로 투사)을 활성하면 섭식↓·영역 공격성↑이다(Padilla 2016). 저자 해석: BNST는 **방어 행동 쪽으로 편향시키기 위해 섭식을 억제**할 수 있다. → [[concept-bed-nucleus-stria-terminalis]].
- **CeA**: AgRP→CeA 말단 자극은 BNST와 달리 섭식을 **유도하지 못한다**(Betley 2013). 반면 CeA MC4R 길항제는 섭식을 늘린다(Kask 2000). → ARC POMC가 CeA를 통해 고유하게 섭식에 영향을 줄 가능성(미검증).
  - **PKCδ** 뉴런은 식욕 억제 신호로 활성화되고, 광억제하면 섭식이 유도된다([[cai-2014-central-amygdala-pkc-delta-neurons|Cai 2014]]).
  - **Htr2a** 뉴런이나 그 PBN 말단을 활성하면 섭식이 촉진되고 접근이 늘어난다([[douglass-2017-central-amygdala-circuits-modulate-food|Douglass 2017]]).
  - CeA GABA→PAG는 **먹이 추격(prey pursuit)**, →reticular formation은 **턱 운동**을 조절한다(Han 2017).
  - 미해결 역설: CeA **병변**은 에너지 항상성·보상 행동에 효과가 작은데, **급성 조작**은 섭식을 바꾼다.
  - 저자 가설: CeA는 다양한 입력을 통합해 현재 상태에 맞는 행동을 선택한다. 위협이 지각되면 BNST와 함께 섭식 등 경쟁 drive를 억누른다(미검증).

### Figure 2B — Intermediate: LHA ("feeding과 reward의 결정적 고리")
- **입력**: ARC AgRP·POMC(Wang 2015; leptin이 이 투사를 활성 — Elias 1999), BNST(Jennings 2013a), VTA(Taylor 2014).
- **역사**: ablation → hypophagia·아사로 "feeding center"로 불렸다(Anand & Brobeck 1951). 전기자극은 섭식을 유발한다(Hoebel & Teitelbaum 1962; Margules & Olds 1962). 같은 부위에서 설치류·영장류가 **자기자극**을 한다(Rolls 1980). 결핍 상태와 insulin·glucagon·leptin이 ICSS 빈도를 바꾼다. 그러나 전기자극은 세포타입 비특이적이고 **통과섬유**도 건드려 해석이 어렵다.
- 저자 판단: 많은 세포타입 조작이 섭식과 자기자극을 **함께** 강하게 바꾸므로, 결과를 "feeding" 아니면 "reward"로 **이분 해석하는 것은 문제투성이**("fraught with problems")다.
- **LHA glutamatergic(Vglut2)**: 급성 활성 → 섭식 억제·혐오(Jennings 2013a). **유전적 ablation → 섭식·체중 증가(Stamatakis 2016)**. 주로 **LHb**로 투사한다. LHA Glu→LHb 말단 광억제는 섭식·보상 관련 행동을 늘린다(Stamatakis 2016). LHb→중뇌 광자극은 행동 회피와 consummatory 억제를 낸다(Stamatakis & Stuber 2012). → 섭식과 보상의 **음성 조절자**. [[concept-lateral-habenula]].
- **LHA GABAergic(Vgat)**: Vglut2와 섞여 있으면서 기능적으로 대립한다. 급성 활성 → 먹이 동기↑·섭취↑·보상적. 급성 억제·ablation → 섭식↓·혐오적(Jennings 2015; Navarro 2016). → [[jennings-2015-visualizing-hypothalamic-network-dynamics]].
  - 인접 **zona incerta GABA** 활성 → 접근·섭식↑, palatable 선호(Zhang & van den Pol 2017). → [[concept-zona-incerta]].
  - rat에서 LHA GABA는 **cue–보상 관계 학습**에도 필요할 수 있다([[sharpe-2017-lateral-hypothalamic-gabaergic-neurons|Sharpe 2017]]).
  - 이질적 하위집단: **galanin** LHA GABA 화학유전 활성 → palatable 음식 동기 섭식↑, chow 섭취는 불변(Qualls-Creekmore 2017). **Pdx1** LHA GABA→PVH 광자극 → 배부른 마우스 섭식↑(Wu 2015).
- **Orexin/hypocretin**: 섭취 직후 활동이 즉시 감소한다(González 2016). VTA로 투사하며, 급성 활성은 약물·음식 보상 추구를 모두 강화한다(Harris 2005; Inutsuka 2014). 더 일반적으로는 각성을 조절할 수 있다(Mahler 2014). → [[concept-orexin-neurons]].
- **MCH**([[domingos-2013-hypothalamic-melanin-concentrating-hormone|Domingos 2013]]), **LepR**(Leinninger 2009) 부분집합도 VTA로 투사해 DA 방출과 palatable 섭취에 영향을 준다. → [[lee-2023-lateral-hypothalamic-leptin-receptor]].
- **출력**: LHb(Stamatakis 2016), VTA(Nieh 2015, 2016), LC(Laque 2015) — 모두 섭식·보상에 영향을 준다.
- 저자 결론: LHA는 **"먹이를 향한 동기"를 폭넓게 조절**하는 영역일 수 있다.

### Monoaminergic — 도파민
- DA 뉴런은 자기자극되고, 그 광억제는 회피된다. **VTA GABA** 광자극(DA 방출↓)은 sucrose licking을 억제하고 혐오적이다(Tan 2012; van Zessen 2012). 6-OHDA DA 파괴(Ungerstedt 1971)나 DA 합성 결손(Zhou & Palmiter 1995)은 저활동·**aphagia**를 낸다.
- **호르몬 접점**: ghrelin은 VTA DA를 흥분시키고, 건강인에서 음식 사진에 대한 중뇌·선조체 BOLD를 키운다(Malik 2008). leptin은 VTA DA에 직·간접 작용해 섭식을 줄인다(Hommel 2006; Fulton 2006; Domingos 2011; Leinninger 2009). 단 호르몬 수용체 발현은 ventricular보다 훨씬 낮다.
- **AgRP–DA**: 성체에서 AgRP의 DA 직접 억제는 입증되지 않았다. AgRP는 발달기 VTA DA 가소성과 비섭식 행동(불안·상동행동)에 관여한다(Dietrich 2012, 2015). **AgRP 손상 마우스도 palatable 음식은 먹으며, 이것은 DA 의존적**이다(Denis 2015). → 적어도 하나의 intermediate 연결이 필요하다는 추론.
- **비만과 D2**: 선조체 D2 가용성은 인간·rat 비만과 반비례한다(Wang 2001; Johnson & Kenny 2010). 렌티바이러스 D2 knockdown은 고칼로리 식이에서 체중 증가 취약성을 높인다. 만성 D2 차단은 체중을 늘리지만 **D2 KO 마우스는 비만이 아니고**(Baik 1995), NAc D1·D2 길항제 미세주입은 섭식을 바꾸지 않는다(Baldo 2002). → 수용체 변화는 원인이라기보다 **비만의 결과**일 수 있다(Palmiter 2007).
- **선조체 구획 이질성**: DA 결손 aphagia는 **배측·복외측 선조체** DA 복원으로 회복되지만 복내측 복원으로는 회복되지 않는다(Szczypka 2001; Hnasko 2006; Darvas 2014). 위내 glucose는 배측·NAc 모두에서 DA를 올린다. **배측 선조체 D1** 광자극(NAc는 아님)은 위내 부하의 포만 효과를 무력화한다(Han 2016).
- **NAc DA = 먹이 동기·노력**: NAc DA 섬유를 파괴한 rat은 먹을 수는 있으나 먹이를 얻으려 노력하지 않는다(Aberman & Salamone 1999). → NAc DA는 식욕과 독립적으로 행동을 활성화하는 **gain 신호**라는 견해([[salamone-2012-mysterious-motivational-functions-mesolimbic|Salamone & Correa 2012]]). 배측 복원 마우스의 정상 PR 수행(Robinson 2007)과의 불일치는 **회복 기간 차이**(수개월 vs 수주)로 설명될 수 있다.
- **NAc D1R→LHA** 광자극은 섭식을 멈추고, 억제는 consummatory 행동을 늘린다(O'Connor 2015).
- **mPFC**: 흡인 병변 → 까다로운 섭식(finickiness)만 생기고 섭식 능력은 보존된다(Kolb & Nonneman 1975). 금식에 활성화되는 mPFC D1 뉴런은 섭식을 **양방향 조절**한다(Land 2014).

### Monoaminergic — 세로토닌
- 5-HT 가용성↑ → 섭식↓, 5-HT↓ → 반대. 5-HT2C·5-HT1B KO는 과식·비만이다(Tecott 1995; Bouwknecht 2001). 그러나 전신 5-HT2C 작용제는 마우스의 일일 섭취·체중을 바꾸지 않는다(Zhou 2007).
- DR 5-HT 뉴런은 섭취 **및 사회적 상호작용** 중 활동이 증가한다(Li 2016). 섭취 후 Fos 유도 뉴런은 적다. DR **Pet-1**(glutamate+5-HT) 활성은 보상적이다(Liu 2014). 5-HT 활성은 인내심(Miyazaki 2014)·불안·통증 감작도 바꾼다.
- 저자 해석: 5-HT는 기본적 각성·주의를 매개할 수 있으며, 섭식 효과는 **많은 결과 중 하나**다.

### Table 1·2 — 섭식 조작의 보상 표현형은 대부분 미측정
- **Table 1**(분자 정의 세포 조작, ARC·PVN·CeA·PBN·LHA·VTA·NAc·PFC): **38행 중 29행**이 appetitive 열 '?'다. appetitive behavior는 **place preference와 self-stimulation으로 한정**했다.
- **Table 2**(장거리 투사 조작): **30행 중 20행**이 '?'다.
- **위키 집계**(원문 표를 재분류한 것으로 원문 주장 아님):
  - Table 1에서 보상 표현형이 측정된 9행 중 6행은 섭식과 **같은 부호**다(LHA Vglut2 활성 −/− · 억제 +/+, LHA Vgat 활성 +/+ · 억제 −/−, VTA Vgat 활성 −/−, CeA Htr2a 활성 +/+). 2행은 섭식만 바뀌고 보상 효과가 없다(CeA PKCδ 활성, Htr2a 억제). 1행은 양방향이다(AgRP +/−).
  - Table 2에서 측정된 10행 중 6행은 같은 부호다(BNST Vgat→LH 활성·억제, CeA Htr2a→PBN, LHA Vglut2→LHb 억제, LHA Vgat→VTA, LHb→RMTg). 3행은 **섭식 변화 없이 valence만** 바뀐다(BNST Vgat→VTA +, BNST Vglut2→VTA −, LHA Vglut2→VTA −). 1행은 **반대 부호**다(PVN MC4R→PBN: 섭식↓·선호↑).
- ⚠️ 표기 확인 필요: 추출 텍스트에서 Table 2의 **NAc D1R→LHA ChR2 행 food intake가 '+'** 로 읽힌다. 본문은 같은 투사의 활성이 섭식을 **멈춘다**("halts feeding", O'Connor 2015)고 쓰고, Table 1의 NAc D1R 억제도 '+'다. 원문 표의 오기이거나 추출 오류일 수 있어 원 PDF 확인이 필요하다.

### Concluding remarks — 방법론 권고
- 세포타입·뇌영역을 homeostatic 또는 hedonic으로 배정하는 일은 **종종 도움이 되지 않는다**. 음식은 필수이므로, 섭식을 촉진하는 집단이 보상적이고 식욕을 억제하는 집단이 혐오적인 것은 놀랍지 않다.
- 층위별 요약: ventricular = 말초 대사 신호의 **진입점**(획득 개시·종료 지시). intermediate = 섭식·짝짓기·안전 등 **여러 needs 통합**. monoaminergic = 동기 + 실행기능·환경 학습.
- **이중 결과**(과식/보상 vs 저식/혐오)가 있으므로 **섭식과 보상 표현형을 모두 측정**하라("Note the frequency of question marks in Tables 1 and 2").
- **도구의 한계**:
  - 주입 위치·바이러스 제조·나이의 작은 차이가 결과를 크게 바꾼다. 형질도입량과 행동의 정량 관계를 보고해야 한다(Sternson 2016).
  - bulk 활성/억제는 상호연결 회로에서 예측하기 어렵고 하류 비의도 효과를 낳는다. 대규모 동기 활성화는 in vivo의 미세한 활동 패턴을 포착하지 못한다. → 자극 파라미터를 내인성 활동에 맞추고, **활동 기록으로 행동의 개별 측면을 부호화하는 부분집단을 분리**하라.
  - 단일 분자 marker는 기능 단위를 정의하기에 부족할 수 있다. → 교차(intersectional) 바이러스 전략(Fenno 2014) + **고처리량 single-cell sequencing**.
- 편향 없는 스크리닝이 필요하다. 불안·사회 행동 회로가 ventricular 활동과 독립적으로 intermediate·모노아민 경로를 통해 섭식을 억제할 수 있다(drive competition, Burnett 2016).
- **번역 함의**: 비만·약물중독 회로는 정상 섭식 회로와 크게 겹친다(Castro 2015; Volkow 2011). **비만 치료제 후보에서 보상계에 작용하는 약물을 성급히 배제하지 말라** — 섭식·에너지 항상성에도 큰 영향을 줄 수 있다.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **NMPU의 회로적 전사(前史)**: 본 리뷰는 "homeostatic vs hedonic" 범주가 회로 수준에서 성립하지 않는다고 결론짓지만, 대체 축은 제시하지 않는다. [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]]는 그 빈자리를 **Need·Motivation·Pleasure·Utility** 연속 축으로 채운 시도로 읽을 수 있다. 리뷰가 말한 "두 시스템의 상대 비중이 음식 종류와 생리 상태에 따라 이동한다"는 서술은 NMPU에서 **Need(상태) × Pleasure(음식) 2요인 설계**로 직접 조작화된다. LH 기록에서 금식/포만 × palatable/chow 2×2를 돌려 곱셈 상호작용을 검정하면, 이분법을 대체하는 정량 기준이 된다.
- **3층 위계 ↔ Need→Motivation 계층**: ventricular(특이적, 호르몬 수용체 조밀) → intermediate(일반적, 다중 need 통합) → monoaminergic(가장 일반적)의 구도는 [[kim-2024-normative-framework-dissociates-need|Kim 2024]]의 **ARC^AgRP = Need(예측 결핍) → LH^LepR = Motivation(need 누적)** 위계와 같은 방향이다. 예측: intermediate 노드(LH)의 활동은 단일 need보다 **여러 needs의 가중 합**에 더 잘 맞아야 한다. [[korotkova-2026-balancing-acts-lateral-hypothalamic|Korotkova 2026]]의 hunger×anxiety×social arbitration이 이 예측과 정합한다.
- **AgRP valence 역설의 NMPU 해석**: 먹이 없이 AgRP를 자극하면 회피, 먹이가 있으면 자기자극(Figure 2A)이다. NMPU식으로 보면 Need 단독은 음성 valence(결핍)이고, **충족 가능한 대상이 있을 때만 Motivation 경로(LH)를 통해 양성 강화**로 바뀐다. 검증: AgRP 광자극 ± 먹이 조건에서 LH^LepR 활동을 기록하면, 대상 존재 시에만 LH^LepR가 누적 상승하는지 볼 수 있다(사용자 lab의 [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]·Kim 2024 계통으로 실행 가능).
- **'?' 칸 채우기 = 저비용 고가치 실험**: 리뷰 이후에도 많은 LH 하위집단(LepR·Nts·Crh·Gal·Penk)의 섭식 조작은 보상 표현형 측정이 불완전하다. 사용자 lab 조작 실험에 **RTPP·ICSS를 기본 패널로 붙이면** "섭식 효과 = 보상 효과인가"를 세포타입별로 판정할 수 있다. [[siemian-2021-lateral-hypothalamic-lepr-neurons|Siemian 2021]]은 LH^LepR가 섭식을 바꾸지 않고 RTPP·CPP만 바꾼다고 보고했다. 이는 Table 2의 "섭식 무변·valence만 변화" 범주(3행)에 LepR가 속할 수 있음을 시사한다.

## ⚠️ 위키 내 충돌·긴장 (병기 — 덮어쓰지 않음)
- **"homeostatic/hedonic은 분리 불가" vs [[stuber-2025-the-neurobiology-of-overeating|Stuber 2025]]의 2-시스템 모델** — 같은 교신저자(Stuber)가 7년 뒤 쓴 과식 리뷰는 과식을 **homeostatic(ARC/PVH) + hedonic(LHA→VTA→NAc) 두 시스템의 dysregulation + crosstalk**으로 다시 나눈다. 본 리뷰의 "현재 자료로는 분리 불가" 주장과 **표면적으로 긴장**한다. 그러나 2018은 "범주 배정이 무용하다"는 **인식론적** 주장이고, 2025는 임상 번역을 위해 두 축 + crosstalk를 **실용적 축**으로 쓴다 — 모순이 아니라 목적이 다른 서술로 병기한다.
- **LHA^Vglut2 ablation 출처 — [[rossi-2019-obesity-remodels-activity-and|Rossi 2019]] 페이지의 지적과 정합** — 본 리뷰는 "LHA glutamatergic genetic ablation → 섭식·체중↑"를 명시적으로 **Stamatakis 2016**에 귀속한다. 위키의 Rossi 2019·Stuber 2025·Chen 2025 페이지는 이 ablation 결과를 Rossi 2019와 한 문장에 묶어 인용하는 사례를 "출처 혼동"으로 지적했는데, 본 2018 리뷰가 **정확한 1차 출처(Stamatakis 2016)**를 보여 준다. 인용 시 ablation = Stamatakis 2016, scRNA-seq/2-photon 둔화 = Rossi 2019로 분리할 것.
- **LHA GABA의 역할 — "섭식·보상 engine" vs "cue–보상 학습 중재자"** — 본 리뷰는 LHA GABA를 섭식↑·보상 집단으로 요약하되 **Sharpe 2017을 "학습에도 필요할 수 있다"로 한 줄 언급**한다. [[sharpe-2024-the-cognitive-lateral-hypothalamus|Sharpe 2024]]는 바로 이런 **항상성·섭식 중심 서술(Stuber & Wise 2016 포함)**을 비판 대상으로 삼아 LH를 학습 편향 dial로 재정의한다. 데이터 모순이 아니라 설명 수준의 경쟁으로 병기.
- **LHA GABA = valence 무관 salience? — [[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026]]** — 본 리뷰의 "식욕 촉진 세포 활성 = 보상, 식욕 억제 세포 활성 = 혐오" 경험칙은 bulk 조작 기반이다. 사용자 lab SNU 김성연 lab의 Lee 2026은 같은 LHA^Vgat 안에 **혐오 열자극·음식 cue에 함께 반응하는 valence 무관 salience ensemble**이 있음을 단일세포로 보였다 — 세포타입이 아니라 **기능 ensemble** 수준에서 valence 규칙이 깨질 수 있음을 시사(활동 상관 vs 인과 조작, 층위 차이로 병기).
- **AgRP valence — Betley 2015(음성) vs Chen 2016(맥락 의존)** — 본 리뷰는 두 결과를 "먹이 존재에 의존"으로 묶는다. [[concept-npy-agrp-neurons]]·[[liu-2023-an-iterative-neural-processing|Liu 2023]]은 이 논쟁을 "비섭식 행동의 검출·억제"로 통합하려 한다. 본 리뷰의 맥락 의존 해석과 수렴 가능하나 기전 설명이 다르다(병기).

## 관련 페이지
- [[concept-lateral-hypothalamus]] — LHA가 feeding–reward의 "결정적 고리"이자 intermediate 노드라는 본 리뷰의 자리매김.
- [[rossi-2019-obesity-remodels-activity-and]] — 같은 1저자의 후속 원저(Science 2019). 본 리뷰의 "활동 기록으로 부분집합 분리 + single-cell sequencing" 권고를 LHA^Vglut2에서 실행. ablation = Stamatakis 2016 귀속 정합.
- [[rossi-2023-control-of-energy-homeostasis]] — 같은 1저자의 LHA 세포타입 리뷰(TiNS 2023). 본 리뷰의 Vgat/Vglut2 대립을 ≥30 세포타입 taxonomy로 확장.
- [[stuber-2025-the-neurobiology-of-overeating]] — 같은 교신저자의 과식 리뷰(Neuron 2025). homeostatic+hedonic 2-시스템으로 재분할(⚠️ 병기).
- [[jennings-2015-visualizing-hypothalamic-network-dynamics]] — 본 리뷰 LHA Vgat appetitive/consummatory 서술의 1차 영상 근거(Cell 2015, 같은 lab).
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] · [[concept-need-motivation-pleasure-utility]] — homeostatic/hedonic 이분법의 대안 축(NMPU)으로 읽는 연결 가설.
- [[kim-2024-normative-framework-dissociates-need]] — AgRP=Need / LH^LepR=Motivation. AgRP valence 역설·3층 위계 해석의 틀.
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] — LHA^LepR→VTA(palatable 섭취)의 사용자 lab 정밀 규명. 본 리뷰가 든 LepR·MCH→VTA 축의 후속.
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — 사용자 lab LH 리뷰. homeostatic/pleasure/stress eating 3분류가 본 리뷰의 overlap 논지를 세포타입으로 재배치.
- [[concept-npy-agrp-neurons]] — AgRP 맥락 의존 valence(Figure 2A)의 개념 hub.
- [[betley-2013-parallel-redundant-circuit-organization-for]] — AgRP의 병렬·중복 투사(aBNST·PVH·LHA·CeA·PBN) 근거. 본 리뷰 ventricular→intermediate 배선의 원전.
- [[krashes-2014-an-excitatory-paraventricular-nucleus-to]] — PVH→AgRP 흥분성 역투사. 본 리뷰가 "역설"로 든 투사.
- [[cai-2014-central-amygdala-pkc-delta-neurons]] · [[douglass-2017-central-amygdala-circuits-modulate-food]] — CeA PKCδ(억제극)·Htr2a(촉진극) 이중 섭식 제어의 원전.
- [[concept-parabrachial-cgrp-alarm]] — PBN^CGRP malaise·섭식 억제 축.
- [[concept-bed-nucleus-stria-terminalis]] — BNST GABA→LHA 섭식·보상, 스트레스-섭식 억제.
- [[concept-lateral-habenula]] — LHA^Vglut2→LHb 섭식·보상 음성 조절.
- [[concept-dopamine-reward-system]] · [[salamone-2012-mysterious-motivational-functions-mesolimbic]] — 모노아민 층; NAc DA = 노력·gain 신호.
- [[concept-orexin-neurons]] · [[concept-zona-incerta]] — LHA Orexin(각성·보상)·인접 ZI GABA(palatable 섭식).
- [[sharpe-2017-lateral-hypothalamic-gabaergic-neurons]] · [[sharpe-2024-the-cognitive-lateral-hypothalamus]] — LHA GABA의 학습 기능; 항상성 중심 서술에 대한 비판(병기).
- [[siemian-2021-lateral-hypothalamic-lepr-neurons]] — LH^LepR가 섭식 무변·valence만 변화. 본 리뷰 Table의 '?' 칸·"섭식≠보상" 범주의 후속 증거.
- [[gordon-2026-lateral-hypothalamic-control-of-the]] · [[liu-2026-granular-motivational-interaction-and]] — LHA GABA/Glut 균형·phase별 회로로 overlap을 정량 분해한 후속.
- [[chen-2025-the-integrated-function-of-the]] — LHA Vgat"engine"/Vglut2"brake" 외부 리뷰. 본 리뷰 Vgat/Vglut2 대립의 확장.
- [[person-sternson-scott]] · [[person-fenselau-henning]] — 본 리뷰가 비중 있게 인용하는 ARC 회로(AgRP·OXTR-Vglut2) 연구자.
- [[person-sharpe-melissa]] — LHA GABA 학습 가설 주창자.
- [[person-choi-hyung-jin]] — 사용자 lab hub.
- [[jennings-2013-the-inhibitory-circuit-architecture]] — 본 리뷰가 'Jennings 2013a'로 인용한 Science 341:1517 원전(같은 lab). BNST GABA→LHA 광활성이 섭식·보상 관련 행동을 유발하고 LHA Vglut2 활성은 섭식 억제·혐오라는 두 서술이 한 논문에서 나오며, 핵심 주장은 **BNST 억제성 입력이 LH^Vglut2를 선택적으로 표적·억제**한다는 것이다(강하게 innervated 세포의 Vglut2↑ U=169.0, P=0.016 / rabies F1,20=38.50, P<0.001). ⚠️ 같은 저자의 Jennings 2013 **Nature** 496:224(BNST→VTA)와 구분해 인용할 것.
- [[leinninger-2009-leptin-acts-via-leptin]] — 본 리뷰가 "**LepR** 부분집합도 VTA로 투사해 DA 방출과 palatable 섭취에 영향"·"leptin은 VTA DA에 직·간접 작용해 섭식을 줄인다"로 인용한 **1차 원전**(Cell Metab 2009, Myers lab). 원문 실측: LHA LepRb(전부 GABAergic, MCH·OX와 비중첩)가 **VTA로 조밀 투사하되 선조체·NAc로는 투사하지 않으며**, *Lep^ob/ob*에 250 pg intra-LHA leptin → 동측 **VTA *Th* ~2.5배·NAc DA ~40%↑** + 섭식↓. ⚠️ 본 리뷰가 지적한 "feeding vs reward 이분 해석의 위험"의 교과서적 사례다 — 같은 조작이 **DA를 올리면서 섭식을 줄인다**. 또 **intra-VTA leptin은 *Th*를 바꾸지 못했으므로**(Fig 6G), 리뷰가 Hommel 2006·Fulton 2006과 함께 묶은 'VTA 직접 작용'과는 종말점이 다른 결과로 병기해야 한다.
- [[oconnor-2015-accumbal-d1r-neurons-projecting]] — ★ 본 페이지의 **Table 2 부호 표기 의문을 해소하는 1차 원전**(Neuron 2015, Lüscher lab). 원전 Figure 4C–4D는 **NAc D1R-MSN → LHA 말단 ChR2 자극이 지방·sucrose 섭취를 모두 억제**함을 보인다(자유급식에서 ANOVA p<0.01·총 섭취 p≤0.001, **24 h 금식에서도 유지**). 따라서 추출 텍스트의 "NAc D1R→LHA ChR2 행 food intake = '+'"는 **표 오기 또는 추출 오류**로 판정할 근거가 있다. 반면 Table 1의 "NAc D1R 억제 = +"는 원전 Figure 3B(자유급식 상태에서 광억제 → 지방 섭취↑, F(1,19)=5.55, p<0.05)와 **일치**한다.
- [[harris-2005-a-role-for-lateral]] — ★ 본 리뷰가 Orexin 절에서 "**급성 활성은 약물·음식 보상 추구를 모두 강화한다(Harris 2005; Inutsuka 2014)**"로 인용한 **1차 원전**(Nature 2005, Aston-Jones lab) — 이 리뷰의 "항상성·헤도닉 회로 중첩" 논제에 **가장 오래된 직접 증거**다. 같은 LH orexin 세포군이 **음식 CPP와 약물(morphine·cocaine) CPP 모두**에서 Fos 48–52%로 켜지고 선호와 **R=0.72–0.90** 비례한다. 결정적으로 **food CPP를 금식 없이** 수행했으므로 이 반응은 에너지 결핍이 아니라 **학습된 cue**에 의한 것이다. ⚠️ 중첩에 **경계가 있다**: 같은 크기의 선호를 만드는 **novel object CPP에서는 LH orexin Fos가 전혀 올라가지 않아**(18±2%) 저자들은 "**소비성(음식·약물) 보상 cue에 특이**"로 결론한다 — 보상 일반이 아니라 소비성 보상에서만 중첩이 성립한다는 한정.
- [[domingos-2013-hypothalamic-melanin-concentrating-hormone]] — 본 리뷰가 "**MCH** 부분집합도 VTA로 투사해 DA 방출과 palatable 섭취에 영향"으로 인용한 **1차 원전**(eLife 2013, Friedman lab). 원문 실측: MCH 축삭이 선조체·복측 중뇌를 조밀하게 지배하고 **TH⁺ 뉴런에 시냅스**를 만든다(EM). sucralose 섭취와 짝지은 MCH 20 Hz 자극 → 선조체 DA +69%, sucrose 선호 82% → 20%로 역전. MCH 제거 → sucrose DA(+118%) 소실, Trpm5⁻/⁻ 영양 조건화 소실. 본 리뷰의 "섭식 vs 보상 이분 해석의 위험"에 맞는 사례다. **MCH 자극만으로는(물과 짝지으면) 보상이 아니고**, 미각 맥락이 있을 때만 가치를 더한다. Table 1식으로 쓰면 "섭식 +, 단독 보상 0, 맥락 의존 보상 +"다.
- [[de-vrind-2019-effects-of-gaba-and]] — 본 리뷰의 실천 권고("세포를 조작하면 섭식과 보상을 **둘 다** 재라")가 비어 있는 동시기 사례이면서, 반대로 **섭식 정량 자체의 함정**을 보탠다(Obesity 2019, Adan lab): LH^Vgat hM3Dq 활성의 chow "무게 변화↑"는 갉기 spillage였고(가루만 증가, 실제 섭취 불변) palatable 선호는 ↓였다. RTPP·자기자극은 측정하지 않았으므로 두 표의 appetitive 열에 또 하나의 '?'가 된다. 대신 체온·운동·체중이라는 **에너지 소비 열**을 추가로 제안하는 사례다.
