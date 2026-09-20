---
title: "CeA GLP-1R 뉴런의 역할 — Food safety alarm과 GLP-1RA 약리의 hijack"
type: overview
created: 2026-07-04
updated: 2026-09-19
---

> [!takeaway] 연구 방향 관점의 핵심
> **CeA GLP-1R 뉴런을 "음식 안전 경보(food safety alarm)"로 재해석하는 통합 framework.** [[woods-1991-the-eating-paradox-how|Woods 1991]]의 "먹기 = 항상성을 교란하는 위협" 이론에서, 중심편도(CeA)는 그 위협을 감지·방어하는 aversion hub다. CeA^Glp1r은 (1) **현재 식사를 멈추고**(hedonic 섭취 brake) (2) **혐오 연합학습으로 미래 식사를 줄이는** 두 방어 출력을 갖는다. [[godschall-2026-a-brain-reward-circuit-inhibited|Godschall 2026]]·[[duran-2026-the-central-amygdala-gates|Duran 2026]]가 규명한 GLP-1RA 약리는 바로 이 생리적 경보 회로를 **hijack**한다 — 치료효과(약물 유발 food aversion → 섭취↓)와 부작용(약물 유발 혐오정동·우울 증상)이 같은 뉴런의 두 얼굴. 사용자 lab의 hedonic 축([[concept-central-amygdala-glp1r|CeA^Glp1r]]) vs homeostatic 축([[kim-2024-glp-1-increases-preingestive-satiation|DMH GLP-1R]]) 분업을 **valence(혐오) 차원**으로 확장하는 관점.

# CeA GLP-1R 뉴런의 역할 — Food safety alarm과 GLP-1RA 약리의 hijack

## 한 줄 요약
[[concept-central-amygdala-glp1r|중심편도 GLP-1R(CeA^Glp1r) 뉴런]]을 **"음식 안전 경보"**로 개념화하는 종합 페이지. 생리적으로는 음식이라는 대사적 위협에 대한 방어(현재 섭취 중단 + 혐오학습으로 미래 섭취 감소)를 담당하고, GLP-1RA 약물은 이 경보를 약리적으로 활성화해 섭취를 줄이되(치료) 동시에 혐오정동·우울 증상을 유발할(부작용) 수 있다.

## 이론적 토대 — 왜 "경보(alarm)"인가

### 0) 왜 뇌에 food safety alarm이 필요한가 — 진화·기능적 배경
섭식은 동물이 **외부의 화학물질·미생물을 자기 몸 안으로 들이는 유일한 일상 행위**다. 즉 생존에 필수인 동시에 **가장 큰 위험 노출**이다. 위험은 네 종류로 겹친다: (i) **독소**(식물 알칼로이드·곰팡이독), (ii) **병원체**(상한 음식), (iii) **알레르겐**, (iv) **대사 교란**(혈중 연료 급증 — Woods의 축). 

이 문제의 핵심은 **비용의 비대칭성**이다. 한 번의 치명적 오섭취는 **회복 불가능한 죽음**을 부르지만, 굶주림 역시 죽음이다. 특히 잡식동물은 **새 먹이를 먹어야 살지만 새 먹이가 가장 위험한** "잡식동물의 딜레마(omnivore's paradox)"에 놓인다. 그래서 뇌는 먹느냐 마느냐를 단순 on/off로 결정할 수 없고, **정도를 매기고(graded)·여러 층에서 중복 감시하며(redundant)·경험으로 갱신하는(learnable)** 경보 시스템을 진화시켰다. 오탐(안전한 걸 거부)의 비용이 미탐(독을 삼킴)의 비용보다 훨씬 작으므로, **경보는 "better safe than sorry"로 보수적으로 편향**되어 있다 — 이것이 우리가 낯선 음식에 다가가면서도 긴장하고, 쓴맛·이상한 냄새에 즉각 거부감을 느끼는 이유다.

기능적으로 이 경보가 하는 일은 **매 순간 "접근(에너지 필요) vs 회피(위험)"를 실시간 중재(arbitrate)**하는 것이다. 위험이 감지되면 (a) **지금 먹기를 멈추고**, (b) **그 음식을 미래에 피하도록 학습**한다. 단일 뇌영역이 이 모든 위험 종류·시점을 감당할 수 없으므로, 경보는 **후각→미각→뇌간→편도→장축에 분산된 다층 구조**로 구현되며(아래 §다층 경보 아키텍처), 그 출력들이 **[[concept-central-amygdala-glp1r|중심편도(CeA)]]·[[concept-parabrachial-cgrp-alarm|팔곁핵(PBN)]]을 포함한 확장편도로 수렴**한다. 이 수렴 구조가 바로 CeA^Glp1r을 "food safety alarm의 노드"로 지목하는 이유다.

### 1) Woods의 두 위협 축 — 음식은 왜 위험한가
[[woods-1991-the-eating-paradox-how|Woods 1991 "The Eating Paradox"]]의 핵심 명제: **음식은 강력한 양성 강화물이면서 동시에 내부 환경을 교란하는 잠재적 위협**이다. 이 위협은 두 축을 갖는다.

- **(A) 대사적 위협(Woods의 주 논지)**: 식사 후 혈중 연료(포도당·지질·아미노산)의 급증은 그 자체로 항상성 교란이며, 만성화되면 비만·심혈관질환·당뇨 합병증·수명단축의 위험요인이다. Woods는 약물 내성의 유비로, 동물이 [[concept-cephalic-phase-response|cephalic 예측반응]]·소식·식후 억제로 이 충격을 방어한다고 본다.
- **(B) 독성(toxin) 위협**: 음식은 독·병원체를 담을 수 있다. Woods는 이를 **신기공포(neophobia)·"learned safety"**로 다룬다 — 동물은 **새로운 먹이를 아주 소량만, 경계하며 먹고**, 탈이 나지 않아야 비로소 "안전"으로 학습해 섭취량을 늘린다(Rozin & Kalat의 poison-avoidance·learned safety, Richter의 식중독 반응 인용). Woods는 "safe/unsafe 이분법으로 단순화하지 말라"며 이 학습이 **점진적·양적**임을 강조한다. 낯선 고급 요리(rich food)를 처음 접할 때 과식했다가 탈이 나는 "rich food 현상"이 예시다.

즉 음식 섭취는 **접근(강화)과 회피(위협)가 공존하는 근본적 ambivalence**를 갖는다. Woods는 나아가 **식사 자체가 경미한 스트레스 사건**임을 보인다(식사가 epinephrine·norepinephrine·ACTH·glucocorticoid·β-endorphin을 상승; "모든 행동은 최소한 경미한 stressor"). → **음식에 다가가면서도 긴장·경계·약간의 거부감을 느끼는** 현상의 생리적 근거.

### 2) 두 겹의 방어 관문 — 입(즉시) + 사후(학습)
위협 축(B)에 대응하는 거부감은 두 시점에서 작동한다.

- **입안 감각 관문(즉시 거부)**: 음식을 입에 넣는 순간 **쓴맛**은 진화적으로 **독소(toxin)의 신호**로, 선천적·즉각적 회피(뱉기·찡그림)를 유발한다. 이는 학습 없이 작동하는 first-line 방어다. 이 축의 회로 근거는 이제 위키에 있다: [[wang-2018-coding-of-valence-and-identity|Wang 2018]]은 **쓴맛피질→중심편도(CEA)** 배선이 이 선천 거부를 담당함을 보였고, [[jin-2021-top-down-control-of-sweet|Jin 2021]]은 쓴맛이 미각피질·CeA→뇌간(rNST) top-down 피드백으로 **동시에 존재하는 단맛(접근)까지 억제**해 "위험>보상"을 강제함을 보였다. *(Woods 1991은 이 쓴맛 관문을 직접 서술하지 않으나, 그의 neophobia와 결합하면 입안 감각이 "이 음식이 안전한가"를 실시간 심사하는 관문이 된다.)*
- **사후 혐오 연합학습(미래 거부)**: 먹은 뒤 malaise·대사 교란이 오면 그 음식과 **[[concept-conditioned-taste-aversion|조건화 미각 혐오(CTA)]]**가 형성되어 다음 접근을 줄인다. Woods는 이를 명시적으로 다룬다 — 급성 혈당 상승만으로 CTA가 형성되고(Deutsch 1974), NPY는 **큰 식사를 유발하면서 동시에 CTA를 형성**하며(Sipols 1987), 폭식증 환자는 기호식의 **시각·냄새·맛만으로 오심·vasopressin을 분비**한다(Broberg 1990). CTA의 회로 기반도 이제 위키에 있다: **[[concept-parabrachial-cgrp-alarm|CGRP^PBN]]**이 US(malaise) 경로로 필요·충분([[palmiter-2018-parabrachial-nucleus-cgrp-neurons-function]]), 장 **[[bai-2022-enteroendocrine-cell-types-that-drive|EC세포(5-HT)]]**·**[[concept-area-postrema|최후야]]**가 말초 기원. → 음식의 net 가치는 "강한 보상 − 잠재적 해악"으로, 개별 식사의 결과는 사전에 불확실하다.

### 3) 왜 이 거부감을 CeA GLP-1R 뉴런이 담당한다고 보는가 (본 페이지의 가설)
위 방어(접근 속 긴장 + 입안 즉시 거부 + 사후 혐오학습)를 담당할 유력 후보가 **[[concept-central-amygdala-glp1r|중심편도 GLP-1R(CeA^Glp1r) 뉴런]]**이다. 근거·정합성:

- **CeA = 혐오·위협·CTA의 중추 허브**: 중심편도는 fear·threat·malaise·conditioned taste aversion을 처리하는 canonical aversion 노드다. "음식이 위험할 수 있다"는 방어 신호를 **valence(위험가) 출력**으로 바꾸기에 해부학적으로 적합하다(인접한 [[concept-basolateral-amygdala|BLA]]는 가치 학습, CeA는 방어 출력).

  ⚠️ 반례를 함께 볼 것: [[cai-2014-central-amygdala-pkc-delta-neurons|Cai 2014]]에서 **외측 중심편도(CEl)의 PKC-δ⁺** 뉴런을 5 Hz로 광활성하면 24시간 절식 동물의 섭식이 강력히 차단되지만, **조건화 장소 회피(CPA)를 만들지 않고 CTA의 US로도 작용하지 못했으며**(동일 실험의 LiCl 대조는 정상적으로 CTA 형성), freezing·운동저하도 없었고 불안검사(EPM·open field·light-dark)에서는 오히려 **항불안 방향**이었다. 즉 CeA의 대표 anorexigenic 세포군은 **혐오정동 없이 섭식을 끌 수 있다**. 단 이는 **충분성 반례**이지 CeA의 CTA 필요성을 부정한 실험은 아니다(그 필요성 검증은 본 위키에 없음). 위키 안에서 CTA의 US 경로로 **필요·충분**이 입증된 노드는 CGRP^PBN([[palmiter-2018-parabrachial-nucleus-cgrp-neurons-function]])이며, [[concept-area-postrema|AP]]와 장 EC세포([[bai-2022-enteroendocrine-cell-types-that-drive]])는 말초·순환 기원 경로로 입증돼 있다. 따라서 "경보의 두 출력은 분리 불가"는 CeA 세포군 수준에서 이미 반례가 있는 명제다.

- **CeA는 valence-길항 세포군의 집합**: CeA는 단일체가 아니라 **혐오/식욕억제 극([[cai-2014-central-amygdala-pkc-delta-neurons|PKC-δ⁺, Cai 2014]] — CCK·LiCl·LPS의 Fos 수렴; 단 기능적 필요성은 CCK·(부분)LiCl에 한정되고 LPS에는 불필요)** 과 **접근/섭식촉진 극([[douglass-2017-central-amygdala-circuits-modulate-food|Htr2a⁺, Douglass 2017]] — PKC-δ를 억제해 양성-가치 섭식 촉진)** 이 국소 GABA로 경쟁하는 이질적 노드다. [[concept-central-amygdala-glp1r|CeA^Glp1r]]은 이 밸브에서 **섭식억제 쪽 출력**을 낸다([[duran-2026-the-central-amygdala-gates|Duran 2026]]: PKCδ와 Glp1r이 **각각 독립적인 비중복 세포군**으로 Ex-4 hypophagia에 기여하고 Glp1r은 HFD 전담, 단 모든 rescue는 불완전). 단 Glp1r⁺ 세포군은 PKCδ·Sst와 **비중복**이므로(Zeng 2021 → [[concept-central-amygdala-glp1r]]), PKCδ의 필요성을 Glp1r 세포군이 **혐오 축에 속한다**는 근거로 쓸 수는 없다. 이 단서를 붙인 채로 보면 경보가 CeA에서 세포군 수준으로 분해된다는 그림은 유지되며, 따라서 "food safety alarm"이 CeA에서 **세포군 수준으로 구현**됨을 뒷받침한다.
- **GLP-1 = 내수용 malaise/포만/nausea 신호**: GLP-1은 "먹은 것이 부담·위협"이라는 [[concept-interoception|내수용]] 경보를 나른다. 그 수용체(Glp1r)를 발현하는 CeA 뉴런은 이 경보를 받아 **현재 섭취 중단 + 미래 회피 학습**으로 번역하는 위치에 있다.
- **약리 증거와의 정합**: [[godschall-2026-a-brain-reward-circuit-inhibited|Godschall 2026]]은 CeA^Glp1r 조작이 **기호성 음식만 선택적으로 억제**함을 보이며, malaise/CTA 유발제인 **LiCl을 nausea 기준**으로 삼는다. [[duran-2026-the-central-amygdala-gates|Duran 2026]]은 CeA^Glp1r이 **hedonic(HFD) 섭취 억제 전담**임을 보인다 — "이 음식은 위험하니 그만/피하라"는 경보의 표적 특이성과 부합.

> **honest gap 명시**: CeA^Glp1r이 **쓴맛-toxin 즉시 거부·neophobia·혐오 연합학습을 실제로 매개한다**는 것은 위키 내 어떤 논문도 단독으로 증명하지 않은 **본 페이지의 통합 가설**이다. 확립된 사실은 (i) Woods의 위협·neophobia·CTA 이론, (ii) CeA가 혐오/CTA 허브라는 점, (iii) CeA^Glp1r이 기호성 섭취를 선택적으로 억제한다는 약리 결과이며, 이 셋을 잇는 "food 거부감 담당" 인과는 검증 대상 가설이다(→ 아래 §연구 함의).

---

## 다층·중복 경보 아키텍처 — 감각 순서대로 본 food safety alarm
왜 뇌 전반에 분산된 경보가 필요한가(§0)의 답은, 음식이 몸에 들어오는 **순서마다 다른 종류의 위험을 잡는 층**이 있기 때문이다. 각 층은 위키에 원저로 뒷받침된다. 앞 층일수록 값싸고 빠른(그러나 부정확한) 예측, 뒤 층일수록 확실하지만 이미 삼킨 뒤의 방어다 — 이 중복이 "better safe than sorry" 편향을 구현한다.

1. **섭취 전 — 후각 예측(pre-ingestive olfactory)**: 입에 넣기 전 냄새로 위험을 예측. 부패취(2MBA)는 [[dong-2026-nose-to-brain-axis-spoiled-food|후각→aPir에서 retching(운동)과 혐오(동기)로 분기]]하고, 선천적 냄새 유인/회피는 [[concept-cortical-amygdala|후각피질편도(plCoA)]]가 valence를 하류표적(NAc=유인/MeA=회피)으로 라우팅한다([[root-2014-participation-of-cortical-amygdala-innate|Root 2014]]·[[howe-2026-control-of-innate-olfactory-valence|Howe 2026]]).
2. **입안 — 선천 미각 관문(in-mouth taste)**: 쓴맛=toxin 신호가 [[concept-taste-valence-coding|쓴맛피질→CeA]]로 즉시 거부를 배선([[wang-2018-coding-of-valence-and-identity|Wang 2018]])하고, top-down으로 단맛까지 억제([[jin-2021-top-down-control-of-sweet|Jin 2021]]). 섬엽→CeL은 "이 맛을 피할지" 예측 회피를 학습([[schiff-2018-an-insula-central-amygdala-circuit|Schiff 2018]]).
3. **뇌간 — 일반 경보 중계(general alarm)**: [[concept-parabrachial-cgrp-alarm|PBN CGRP 뉴런]]이 통증·malaise·포만·신기음식 등 **모든 위협을 소스 구분 없이** CeA/BNST로 중계하고 혐오기억(CTA)·공포기억에 필요·충분([[palmiter-2018-parabrachial-nucleus-cgrp-neurons-function|Palmiter 2018]]·[[campos-2018-encoding-of-danger-by-parabrachial|Campos 2018]]), 생리적 식사 종료도 담당([[campos-2016-parabrachial-cgrp-neurons-control-meal|Campos 2016]]).
4. **섭취 후 — 순환 독소 감지(post-ingestive/circulating)**: [[concept-area-postrema|최후야(AP)]]가 혈뇌장벽 밖에서 순환 독소(LiCl·GDF15·GLP-1)를 GLP1R/GFRAL 뉴런으로 감지해 혐오로 funneling([[zhang-2021-area-postrema-cell-types-that|Zhang 2021]]); GIP-GIPR 억제뉴런이 이 오심을 끄는 **off-switch**([[zhang-2022-brainstem-circuit-for-nausea|Zhang 2022]]).
5. **장·면역 — 화학·항원 감지(gut/immune)**: 장내분비세포 아형이 선호(CCK/미주)와 혐오(5-HT·substance P/척수)를 분리 인코딩([[bai-2022-enteroendocrine-cell-types-that-drive|Bai 2022]]); 적응면역(IgE·비만세포)이 특정 항원을 위험으로 학습해 회피를 명령([[florsheim-2023-immune-sensing-of-food-allergens|Florsheim 2023]]).
6. **피질 내수용 예측층 — 섬엽(insula)**: 후측 섬엽이 통증·쓴맛·구역·목마름 등 **내수용 혐오신호를 다중감각적으로 통합**해 CeA·BNST로 하향 제어([[gehrlach-2019-aversive-state-processing-in-the|Gehrlach 2019]]), 동시에 현재·미래 생리상태를 예측 부호화해 "섭취의 예상 결과"를 미리 시뮬레이션([[livneh-2020-estimation-of-current-and-future|Livneh 2020]]). 앞 층들의 원신호를 **"먹을지/피할지" 상위 결정**으로 종합하는 피질 관문.
7. **학습 축 — 조건화 미각 혐오(CTA)**: 위 층들이 만든 malaise를 특정 맛과 영구 연합해 미래 섭취를 줄임([[concept-conditioned-taste-aversion]]).

**수렴점**: 이 일곱 층의 출력이 **확장편도(CeA + PBN + BNST)**로 수렴한다. 후각(plCoA→MeA)·미각(쓴맛피질→CeA)·뇌간(PBN→CeA/BNST)·순환독소(AP→PBN)·면역(→NTS·PBN·CeA)·피질 내수용(pIC→CeA/BNST)이 모두 CeA를 지나거나 그 상류로 모인다. 따라서 **CeA^Glp1r은 이 다층 경보가 만나는 병목(node)**이며, GLP-1(내수용 malaise 신호)을 받는 그 위치 때문에 "food safety alarm의 노드"로 지목된다 — 그리고 바로 이 병목이라서 GLP-1RA 약물이 여기를 누르면 여러 층의 혐오 출력을 한꺼번에 켜게 된다(→ §2 약리 hijack).

## 1. 생리적 역할 — Food safety alarm

### (1) 현재 식사 감소 (decrease current eating)
- CeA^Glp1r 활성화는 **진행 중인 (특히 기호성) 섭취를 멈춘다**. 회로적으로 **NTS^Gcg(내인성 GLP-1) → CeA^Glp1r(GABAergic) → [[concept-dopamine-reward-system|VTA DA]] 억제 → NAc 도파민 방출↓**로 hedonic feeding에 brake를 건다([[godschall-2026-a-brain-reward-circuit-inhibited|Godschall 2026]]).
- 선택성: CeA^Glp1r 조작은 **기호성 고지방식(HFD) 섭취만 억제하고 표준식이·체중·에너지소비는 거의 건드리지 않는다** — global hunger/satiety가 아니라 **food valence(쾌락가·위험가) 인코딩**([[godschall-2026-a-brain-reward-circuit-inhibited|Godschall]], [[duran-2026-the-central-amygdala-gates|Duran]]).
- 즉 "이 음식은 지금 그만" 신호 = 경보의 **급성(acute) 출력**.

### (2) 미래 식사 감소 — 혐오 연합학습 (decrease future eating by aversive association)
- Woods의 예측대로, 위협적 섭취 뒤에는 **conditioned (taste/food) aversion**이 형성되어 다음 번 그 음식 접근을 줄인다. CeA는 이 혐오 연합학습의 핵심 부위다.
- GLP-1 신호는 malaise/nausea 축과 얽혀 있어(예: LiCl-유사 aversion 프로파일; [[godschall-2026-a-brain-reward-circuit-inhibited|Godschall]]이 LiCl을 nausea reference로 사용), **CeA^Glp1r이 "먹은 뒤 나쁨"을 특정 음식과 연합시켜 미래 섭취를 억제**하는 학습 경보로 기능한다는 것이 본 framework의 제안이다.
- 즉 "이 음식은 앞으로도 피하라" 신호 = 경보의 **학습(long-term) 출력**.

> 참고(honest gap): (1) 현재 섭취 억제·HFD 선택성·NAc DA↓는 [[godschall-2026-a-brain-reward-circuit-inhibited|Godschall]]·[[duran-2026-the-central-amygdala-gates|Duran]]에서 **직접 입증**됨. (2) CeA^Glp1r이 **혐오 연합학습(미래 섭취 감소)을 매개한다**는 부분은 Woods 이론 + CeA aversion hub + GLP-1RA의 LiCl-유사 프로파일을 잇는 **통합 가설**로, 위키 내 세 논문이 이 특정 학습 인과를 단독으로 증명하지는 않는다.

---

## 2. GLP-1RA 약물 관련 역할 — 경보의 hijack

차세대 경구 small-molecule GLP-1RA(orforglipron·danuglipron)와 펩타이드(liraglutide·Ex-4)는 이 생리적 경보 회로를 **약리적으로 점거**한다. 같은 CeA^Glp1r 뉴런의 두 출력이 각각 치료효과와 부작용으로 나타난다.

### (1) 약물 유발 food aversion → 섭취 감소 (therapeutic)

⚠️ **인간 수준 제약 증거**: [[su-2026-genetic-predictors-of-glp1-receptor|Su 2026 (Nature 653:772, 23andMe n=27,885)]]에서 GLP-1RA의 **체중감량 효능 신호와 오심·구토 부작용 신호가 같은 `GLP1R` 좌위에 co-localize**했다 — ΔBMI%↔오심 **H4 96.6%**, ΔBMI%↔구토 **H4 88.5%**, 다형질 분석에서 같은 신호일 사후확률 **72.6%**이며 저자 결론은 "오심·구토가 클수록 BMI 감량 효능이 크다"는 유전적 연결(p.772). 단 부작용 index SNP은 효능 신호와 **중등도 LD**(r²=0.57·0.75)이고 credible set에 코딩 변이가 없어 **인과 변이는 미확정**이다. 즉 본 페이지가 전망하는 '급성 섭취 brake ↔ 정동(aversion) 출력' 분리는 인간에서 **분리 가능성 자체가 아직 열린 질문**이다. 반대로 같은 논문의 `GIPR` p.Glu354Gln(부분 기능상실; Gln 대립유전자 구토 OR 1.83)은 **tirzepatide 구토 위험만 높이고 효능에는 영향이 없었다**(P=0.73) — [[zhang-2022-brainstem-circuit-for-nausea|AP GIPR 억제뉴런 = 오심 off-switch]] 회로와 방향이 일치하며, **혐오 축만 따로 조절할 표적**이 존재할 가능성도 함께 시사한다.

- 말초/경구 GLP-1RA가 **NTS^Gcg→CeA^Glp1r→VTA→NAc DA↓** 회로를 구동해 기호성 음식의 보상가를 낮추고 섭취를 줄인다([[godschall-2026-a-brain-reward-circuit-inhibited|Godschall]]).
- 필요성·충분성: CeA에서 Glp1r 삭제 → liraglutide의 **HFD 억제 능력 감소**(SD 무변)([[godschall-2026-a-brain-reward-circuit-inhibited|Godschall 2026]]); CeA^Glp1r 화학유전 억제(hM4d+DCZ) → Ex-4의 HFD 억제를 **~30% rescue**(표준식이 ~10%보다 큼)([[duran-2026-the-central-amygdala-gates|Duran 2026]]). → 약물·방법이 다른 두 연구가 독립적으로 CeA^Glp1r이 GLP-1RA의 hedonic 억제 효과에 **필요**함을 지지.
- small-molecule(danuglipron 555.6 Da)은 **BBB를 넘어 심부 CeA를 직접 활성**할 수 있어, 약물이 경보 노드에 직접 개입하는 무대가 된다.

### (2) 약물 유발 혐오정동·우울 증상 (adverse)

⚠️ **부위 귀속 주의**: 아래 nausea-like 프로파일(LiCl 유사 locomotor↓·grooming/sheltering↑)은 **전신 약물 투여 수준**의 표현형이다. [[godschall-2026-a-brain-reward-circuit-inhibited|Godschall 2026]]이 오심 판정에 쓴 지표는 (i) LiCl을 nausea 기준으로 한 home-cage 행동 syllable 프로파일(Fig. 2d–f), (ii) **조건화 미각 회피** — LiCl·liraglutide에서만 나타나고 danuglipron·orforglipron에서는 검출되지 않음(Extended Data Fig. 2a–c), (iii) open field·EPM 불안검사(Extended Data Fig. 2d–m), (iv) **NTS:AP FOS 비율**(AP 편향 = nausea-like, Fig. 3j)이며, 모두 **전신(IP/경구) 투여** 조건에서 측정됐다. 저자들도 오심·malaise를 **AP 동원**에 귀속시킨다(본문 p.5: "side effects that are often linked to AP engagement"). 반면 **CeA 한정 조작에서 보고된 결과는 HFD 선택적 섭취 억제뿐**이다 — CeA-hGLP1R+danuglipron(Fig. 4f,k), CeA^Glp1r ChR2 광자극(Fig. 4u–w), CeA Glp1r 삭제+liraglutide(Fig. 4x,y) 모두 HFD만 변하고 SD는 무변이며, CPA·CTA 같은 혐오 검사는 CeA 한정 조건에서 시행되지 않았다. 위키 안에서 오심·조건화 회피의 인과 부위로 입증된 곳은 [[concept-area-postrema|최후야(AP)]]다([[zhang-2021-area-postrema-cell-types-that|Zhang 2021]]: AP 국소 Glp1r-KO → exendin-4 회피 소실). 따라서 nausea를 CeA^Glp1r 경보의 출력으로 단정하지 말 것.

- 경보의 aversion 출력이 과활성되면 **nausea·malaise 등 혐오정동**으로 나타난다. GLP-1RA(특히 danuglipron·liraglutide)는 LiCl-유사 locomotor↓·grooming/sheltering↑의 **nausea-like 행동 프로파일**을 보인다([[godschall-2026-a-brain-reward-circuit-inhibited|Godschall]]).
- **만성 CeA^Glp1r→VTA→NAc 도파민 억제**는 mesolimbic 보상 톤을 지속적으로 낮춰 **anhedonia·우울 유사 상태**를 초래할 수 있다 — Godschall 저자들이 orforglipron 대중화에 앞서 "장기 mesolimbic·동기행동 영향과 anhedonia 위험 정의 필요"를 명시적으로 경고했다.
- 즉 "food safety alarm"의 **오작동/과활성**이 임상적 혐오정동·기분 저하 부작용으로 발현된다는 해석. (Woods framework에서 경보의 부적응이 병리가 되는 것과 평행 — cf. cephalic 방어 오작동 → reactive hypoglycemia.)

> 참고(honest gap): 행동적 aversion 프로파일·NAc DA blunt·anhedonia 위험 경고는 [[godschall-2026-a-brain-reward-circuit-inhibited|Godschall]]에 근거. **CeA^Glp1r이 임상 우울증을 직접 매개한다**는 것은 위키에서 established fact가 아니라 회로 논리에서 도출된 **가설·주의사항**이다.

---

## 통합 그림 — 하나의 뉴런, 두 얼굴

| | 생리 (food safety alarm) | 약리 (GLP-1RA hijack) |
|---|---|---|
| **급성 출력** | 현재 (기호성) 섭취 중단 | 약물 유발 food aversion → 섭취↓ (치료) |
| **학습/지속 출력** | 혐오 연합학습 → 미래 섭취↓ *(CeA^Glp1r 인과 미검증)* | 만성 NAc DA↓ → 우울/anhedonia **가설**(Godschall에서 미측정, 저자의 향후 과제 경고 수준). nausea·malaise는 [[concept-area-postrema|AP]] 동원에 귀속되므로 같은 뉴런의 출력으로 단정 불가 |
| **회로** | NTS^Gcg → CeA^Glp1r(GABA) → VTA DA↓ → NAc DA↓ | 동일 회로를 약물이 구동(경구 small-molecule은 CeA 직접도 가능) |
| **선택성** | food valence(위험가) — HFD 선택적, 항상성 보존 | HFD 선택적 억제 + valence-linked 정동 부작용 |

**핵심 통찰**: CeA^Glp1r의 치료효과(섭취 억제)와 부작용(혐오·우울)은 분리 가능한 두 시스템이 아니라, **"음식은 위협"이라는 생리적 경보의 두 출력을 약물이 함께 켜기 때문에 동반**된다. 부작용 없는 차세대 약물 설계는 이 경보의 급성(섭취 brake) 출력과 정동(aversion) 출력을 분리할 수 있는지에 달려 있다(cf. Godschall의 NTS:AP 비율 = nausea 분리 지표; orforglipron의 aversion-separable 프로파일).

## ⚠️ 반대 증거 — 섭취 억제와 혐오는 이미 부분적으로 해리되어 있다

본 framework의 가장 강한 형태("치료효과 = 약물 유발 food aversion")는 이 위키 안의 두 자료와 충돌한다.

1. **약물별 해리** — [[godschall-2026-a-brain-reward-circuit-inhibited|Godschall 2026]]의 91-syllable 행동 분류에서 LiCl·liraglutide·danuglipron은 nausea-like 프로파일(locomotor↓·grooming/sheltering↑)을 보였으나 **orforglipron은 활동적·exploratory를 유지한 채 섭취만 줄였다** — 저자 표현으로 anorexia가 메스꺼움과 **separable**.
2. **개체 상태별 해리** — [[liskiewicz-2026-glp-1r-gipr-ppar|Liskiewicz 2026]]에서 GLP-1–GIP–Lani는 lean 마우스에서 **CTA를 유발하면서도 체중은 전혀 줄이지 않았다**. 즉 혐오 유발과 체중 감소는 같은 축이 아니다. 더욱이 **Vglut2-Cre Glp1r-KO에서는 CTA가 사라졌다** — 혐오 성분이 유전적으로 분리 가능한 회로에 얹혀 있다는 뜻.

> 따라서 본 페이지의 주장은 "CeA^Glp1r에서 두 출력이 **함께 켜지기 쉽다**"까지로 읽어야 하며, "원리상 분리 불가"로 읽으면 안 된다. 분리 가능성이야말로 차세대 약물 설계의 실제 쟁점이다(Godschall의 NTS:AP 비율 지표 참조).

## 식욕억제(anorexia) ↔ 혐오(aversion) 분리 근거표

| 조작 (모두 마우스) | 섭취 | 혐오(CTA/CPA/맛회피) | 출처 |
|---|---|---|---|
| CeA PKC-δ⁺ 광활성 | 강력 억제(공복에서도) | **없음** — 불안·CTA·freezing 미유도 | [[cai-2014-central-amygdala-pkc-delta-neurons|Cai 2014]] |
| AP 국소 Glp1r-KO + exendin-4 | 식이감소 **일부 잔존** | flavor avoidance **소실** | [[zhang-2021-area-postrema-cell-types-that|Zhang 2021]] |
| 예방적 GIP(AP GIPR⁺ 억제뉴런 경유) | — | GDF15·LiCl 맛회피 **소실** | [[zhang-2022-brainstem-circuit-for-nausea|Zhang 2022]] |
| EEC 아형 화학유전 활성 | Tac1·Cck 모두 억제 | CTA는 **Tac1(EC)만**, Cck는 오히려 **선호(CFP)** | [[bai-2022-enteroendocrine-cell-types-that-drive|Bai 2022]] |
| CGRP^PBN 광활성 + 맛 페어링 | 억제 | CTA 형성에 **충분** | [[palmiter-2018-parabrachial-nucleus-cgrp-neurons-function|Palmiter 2018]] |
| orforglipron vs danuglipron·liraglutide | 셋 다 섭취↓ | orforglipron만 nausea-like 프로파일과 **분리** | [[godschall-2026-a-brain-reward-circuit-inhibited|Godschall 2026]] |
| 외측중격 DLS^Pdyn 광활성 | 억제 | 실시간 장소회피 **동반** | [[goode-2026-a-dorsal-hippocampus-prodynorphinergic-dorsolateral|Goode 2026]] · [[concept-dynorphin-kappa-opioid]] |

**읽는 법**: 위 표는 "섭취 억제 = 혐오"가 **아님**을 보여준다. 분리는 (i) **세포군**(CeA PKC-δ vs 장 EC Tac1), (ii) **부위**(NTS 포만 vs AP 혐오), (iii) **약물 동역학**(orforglipron의 느린 흡수·낮은 peak) 세 수준에서 각각 확인된다. 다만 인간 유전 수준에서는 효능과 오심·구토 신호가 같은 `GLP1R` 좌위에 co-localize하므로([[su-2026-genetic-predictors-of-glp1-receptor|Su 2026]]), **회로적 분리 가능성과 임상적 분리 가능성은 아직 같은 답이 아니다**.

## 사용자 lab 연구 함의
- **가설 검증(핵심 실험)**: "food safety alarm" 가설의 결정적 검증 — CeA^Glp1r이 (i) **쓴맛·신기(novel) 음식** 같은 선천·후천 혐오 자극에 반응하는지(fiber photometry), (ii) **conditioned taste/food aversion**의 형성·발현에 필요·충분한지(광유전 gain/loss + CTA 패러다임), (iii) 이 혐오 학습이 **GLP-1RA로 강화**되는지를 직접 시험.
- **분업 지도 확장**: homeostatic 축([[kim-2024-glp-1-increases-preingestive-satiation|DMH GLP-1R cognitive satiation]], 사용자 lab) vs hedonic 축([[concept-central-amygdala-glp1r|CeA^Glp1r]])에 더해, CeA를 **valence(혐오) 축**으로 명시 → GLP-1RA의 효과·부작용을 회로 수준에서 분리하는 표적 논리.
- **NMPU 연결**: 이 경보는 [[concept-need-motivation-pleasure-utility|NMPU]]의 Pleasure(음식 쾌락 억제)와 부적 정동(aversion) 양쪽에 작용 — Pleasure를 낮추는 것이 곧 부적 정동을 올리는 trade-off 가설.
- **번역·표현형**: 인간에서 GLP-1RA 반응자 중 nausea·기분 부작용에 취약한 subgroup을 CeA-valence 회로 지표(예: 음식 cue 혐오 반응)로 예측할 수 있는지가 후속 질문.

## 관련 페이지
- [[woods-1991-the-eating-paradox-how]] — "음식=위협·혐오 연합학습" 이론 원전. 본 framework의 생리적 토대.
- [[godschall-2026-a-brain-reward-circuit-inhibited]] — NTS^Gcg→CeA^Glp1r→VTA→NAc DA↓ 회로·small-molecule·anhedonia 경고 (Nature 2026).
- [[duran-2026-the-central-amygdala-gates]] — CeA 세포종류별 GLP-1RA hypophagia 게이팅; Glp1r^CeA=hedonic 전담 (Mol Metab 2026).
- [[concept-central-amygdala-glp1r]] — CeA^Glp1r 세포·회로·약리 개념 hub.
- [[duran-2026-the-central-amygdala-integrates]] — 위 출판판의 프리프린트.
- [[concept-cephalic-phase-response]] — Woods framework의 예측적 방어 축(경보의 anticipatory 대응물).
- [[concept-dopamine-reward-system]] — 하류 VTA→NAc mesolimbic DA(부작용 anhedonia의 기질).
- [[concept-dorsal-vagal-complex]] — 상류 NTS^Gcg(내인성 GLP-1 공급)·AP nausea 축.
- [[kim-2024-glp-1-increases-preingestive-satiation]] — 대비되는 homeostatic 축 (사용자 lab).
- [[concept-need-motivation-pleasure-utility]] — Pleasure 억제 ↔ 부적 정동 trade-off.
- [[stuber-2025-the-neurobiology-of-overeating]] — hedonic 회로 가소성·중독 응용 맥락.
- [[concept-basolateral-amygdala]] — 인접·별개 nucleus(가치 학습 vs CeA valence 방어).
- [[concept-interoception]] — GLP-1의 malaise/nausea 내수용 경보가 CeA로 전달되는 축.
- [[gao-2026-semaglutide-drives-weight-loss-through]] — 세마글루타이드도 CeA Fos 동원(DVC→CeA).
- [[cai-2014-central-amygdala-pkc-delta-neurons]] — CeA PKC-δ⁺ anorexigenic 수렴 허브(경보의 CeA 세포 원전).
- [[douglass-2017-central-amygdala-circuits-modulate-food]] — CeA Htr2a⁺ 양성-가치 섭식촉진극(valence 밸브의 반대극).
- [[gehrlach-2019-aversive-state-processing-in-the]] — 후측 섬엽 혐오상태→CeA/BNST 하향 경보(피질층).
- [[livneh-2020-estimation-of-current-and-future]] — 섬엽의 예측적 내수용 상태추정(섭취 결과 시뮬레이션).
- [[su-2026-genetic-predictors-of-glp1-receptor]] — 인간 유전 근거: GLP-1RA 효능과 오심·구토가 같은 `GLP1R` 좌위에 co-localize(오심 H4 96.6%·구토 88.5%, 같은 신호 사후확률 72.6%) → 본 페이지의 '경보 출력 분리' 전망에 대한 인간 수준 제약. 반면 `GIPR` p.Glu354Gln은 tirzepatide 구토만 좌우하고 효능엔 무영향 → 분리 가능성의 단서도 함께 제공 (Nature 2026).
- [[liskiewicz-2026-glp-1r-gipr-ppar]] — **해리 반대 증거**: 5중작용제가 lean 마우스에서 CTA는 유발하되 체중은 안 줄임(혐오 ≠ 체중감소 기전), Vglut2-Glp1r KO에서 CTA 소실 (Nature 2026).
