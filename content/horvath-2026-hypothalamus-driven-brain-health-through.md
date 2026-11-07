---
title: "Hypothalamus-driven brain health through metabolic flexibility (Horvath, Romanov, Matarese & Cota 2026, Neuron Review)"
type: paper
created: 2026-11-07
updated: 2026-11-07
source: "raw/2026 Neuron, Hypothalamus-driven brain health through metabolic flexibility.pdf"
authors: [Tamas L. Horvath, Roman Romanov, Giuseppe Matarese, Daniela Cota]
year: 2026
journal: "Neuron 115 (2027-01-06 호), Review, in press 2026; doi:10.1016/j.neuron.2026.09.028. 소속 Yale(비교의학·분자시스템대사, 부다페스트 수의대) · Medical University of Vienna(분자신경과학) · Università di Napoli Federico II(Treg Cell Lab) · University of Bordeaux INSERM Neurocentre Magendie"
---

> [!takeaway] 연구 방향 관점의 핵심
> **이 리뷰는 위키에 없던 개념 하나를 들고 온다 — [[concept-metabolic-flexibility|대사 유연성(metabolic flexibility)]]을 개체 수준 속성으로 보고, hypothalamus를 그 조율 허브로 세운다.** 핵심은 항상성과의 대비다: 항상성은 설정점 주변의 유지이고, 대사 유연성은 **끊임없는 적응적 변화**다. 저자들의 문장: 생물학적 목표는 **항상성(constancy)이 아니라 성공적인 지속 적응**이다. [[concept-need-motivation-pleasure-utility|NMPU]]의 Need 축을 "결핍의 크기"가 아니라 "전환 능력"으로 다시 쓸 수 있는 틀이다.
> 사용자 lab에 닿는 지점 넷.
> (1) **치료 평가 기준을 바꾸는 한 문단**(§9). 칼로리 제한·약리적 포만·인공 영양 신호는 **섭취를 줄인다는 이유만으로 동등하다고 가정해선 안 된다**. 칼로리 제한은 협응된 적응 상태(배고픔 신호↑·AgRP 활성 유지·POMC 출력 억제·말초 연료 전환·AMPK/mTORC1 재조정)를 켜지만, semaglutide 같은 인크레틴은 **약리적 포만**으로 섭취를 줄여 같은 시상하부·면역·생체에너지 상태를 재현하지 않을 수 있다. 저자들의 질문: **"체중이 줄었나"가 아니라 "생리적 배고픔 적응 프로그램을 켰나, 인공 포만 상태를 켰나"**. [[proposal-glp1ra-rebound-microbiota]]·[[concept-weight-regain-defended-adiposity]]에 바로 쓸 수 있는 가설 축이다. 단 저자들은 **인크레틴 치료에 반대하는 논거가 아니라고 명시**한다.
> (2) **POMC는 포만 뉴런만이 아니다** — melanocortin 외에 내인성 opioid를 분비해 섭취를 **촉진**하고 보상·기호성을 조절한다는 서술이 [[proposal-pomc-endorphin-food-pleasure]]의 전제를 리뷰 수준에서 뒷받침한다.
> (3) **AgRP → cortex의 비시냅스 경로**: AgRP 뉴런이 **순환 lysophospholipid**를 통해 cortical 흥분성을 바꾼다. 또 발달기 AgRP 교란이 medial prefrontal cortex의 뉴런 수·진동 활동·sensorimotor gating을 바꾸고 **도파민 조절로 되돌려진다**. [[concept-prefrontal-cortex-feeding]]·[[concept-inhibitory-control-demand]]에 시상하부 상류를 붙인다.
> (4) **사람 바이오마커 하나**: metabolically unhealthy obesity에서 **CSF pregnenolone 농도가 인지 점수와 양의 상관**. ARC POMC → neurosteroid → hippocampal 기억 축의 인체 접점이다.
> ⚠️ 저자들이 스스로 다는 한계가 둘. 근거 대부분이 설치류이고, **hypothalamus를 engineering 방법(opto/chemogenetics)으로 다루는 것 자체가 Cajal 뉴런 독트린에 기대 있어 이 영역에 잘 맞지 않는다**고 쓴다(§10).

# Hypothalamus-driven brain health through metabolic flexibility (Horvath et al. 2026)

## 한 줄 요약
몸에서 오는 신호는 뇌 기능의 **주변적 수정자가 아니라 근본적 결정자**이고, hypothalamus의 AgRP·POMC melanocortin 뉴런이 **개체 수준 대사 유연성**을 조율하면서 보상·학습·실행기능·사회행동까지 조형한다 — 이 유연성이 노화·과영양으로 무너지면 몸–뇌 소통이 경직되어 인지 저하·만성 염증·신경퇴행으로 간다는 관점 리뷰.

> [!note] 저자들이 명시한 범위 제한
> 저자들은 hypothalamus가 이 과정에 **유일하거나 진화적으로 우월한** 영역이라고 주장하는 것이 아니라고 못 박는다. 몸–뇌 소통이라는 관점을 **예시**하기 위해 hypothalamus와 그 뉴런 아집단을 쓴다고 서술한다.

## 핵심 내용

### 1. hypothalamus = 내부 상태의 감지기
- 해부학적으로 CNS와 내부 환경의 경계에 있고, median eminence·circumventricular 영역의 특화 혈관 구조와 **tanycyte**를 통해 순환 인자에 특권적으로 접근한다([[concept-tanycytes]]).
- 들어오는 신호: 영양소 가용성, 호르몬, 삼투압, 온도, 염증·면역 상태, circadian 위상, 내장 입력.
- **leptin**: adipose tissue가 장기 지방량을 보고 → ARC의 leptin 반응 뉴런이 AgRP·POMC를 조절. 그런데 leptin 수용체는 **hippocampus·cortex·midbrain**에도 있어 시냅스 가소성·수상돌기 구조·인지 수행에 영향을 주고, 탐색·학습·사회적 상호작용을 에너지 상태에 묶는다([[concept-leptin]]).
- **insulin**: 말초의 포도당 흡수 역할을 넘어, hypothalamus·hippocampus·cortex·amygdala·mesolimbic 경로의 중추 insulin 신호가 섭식·보상·기억·실행기능을 조절한다. **뇌 insulin 저항성은 노화와 Alzheimer병의 hallmark**가 됐다.
- **위장관**: 신경 구심성 섬유와 ghrelin·GLP-1·peptide YY·CCK로 영양 섭취와 소화 상태를 계속 보고([[steinert-2017-ghrelin-cck-glp-1-pyy-secretory]]). 단식 중 분비되는 **ghrelin**은 AgRP 뉴런을 활성화해 섭식을 촉진하지만 보상·동기·학습·스트레스 반응도 조절한다 → 저자들의 해석: 장 신호는 단순한 배고픔·포만 cue가 아니라 **행동 상태의 조절자**다([[concept-ghrelin]]).
- **면역계**: cytokine과 염증 매개체가 행동을 **"질병 행동(sickness)" 배치**로 재편한다 — 피로, 동기 감소, 사회적 위축, 식욕부진, 인지 변화. 이는 에너지와 행동을 방어·수선으로 재배분한다. 역으로 hypothalamic 회로에서의 cytokine 작용이 신경내분비 기능·자율 출력·섭식·체온조절을 조정한다.
- 정리: hypothalamus는 **내부 상태가 분산된 신경계로 들어가는 1차 관문**이고, 생리 정보를 진행 중인 신경 연산에 끼워 넣어 인지·동기·정서 과정이 펼쳐지는 조건을 설정한다.

### 2. 대사 유연성 = 몸–뇌 소통의 기전
- 전통적으로 조직별로 연구됐다: 골격근·심근의 탄수화물↔지질 산화 전환, adipose tissue의 저장·동원, 간의 포도당 생성·glycogen 대사·ketogenesis. 이 능력의 상실이 비만·insulin 저항성·2형 당뇨의 hallmark로 떠올랐다.
- **그러나 가장 두드러진 것은 개별 조직의 행동이 아니라 조직 간의 비범한 협응이다.** 단식 시: adipose tissue가 지질을 동원하고, 간 포도당 생성이 늘고, 골격근이 연료 사용을 바꾸고, 내분비계가 에너지 보존으로 이동하고, 행동 우선순위가 음식 획득으로 좁혀진다 — **빠르게, 고도로 협응되어**. 운동·임신·감염·심리적 스트레스·노화에서도 같은 협응이 일어난다.
- 그래서 대사 유연성은 세포·조직의 속성만이 아니라 **개체 수준 특성**으로 봐야 한다는 것이 저자들의 논지.
- **협응은 어떻게 이뤄지나?** 어느 말초 조직도 혼자 할 수 없다 — adipose tissue가 간 대사·면역·생식·행동을 조율할 수 없고, 간이 섭식 행동·내분비 분비·자율 활동을 동시에 조절할 수 없다. 여러 장기에서 정보를 받고 통합해 적응 지시를 개체 전체로 분배하는 시스템이 필요하다 → hypothalamus.
- ★ **항상성과의 구분**(이 리뷰의 개념적 핵): 항상성은 **미리 정해진 설정점** 주변의 상대적으로 일정한 생리 조건 유지를 함축한다. 대사 유연성은 **끊임없는 동적 적응 변화**를 강조한다. 개체는 모든 상황에서 동일한 생리 조건을 유지하려는 것이 아니라, 환경·내부 요구에 따라 **생리적 우선순위를 계속 조정**하고 있다. **생물학적 목표는 항상성이 아니라 성공적인 지속 적응이다.**

### 3. AgRP·POMC 뉴런 = 통합 노드
- ARC는 median eminence에 인접한 특권적 위치. 안에 서로 길항적인 두 집단: orexigenic **AgRP/NPY/GABA** 뉴런과 anorexigenic **POMC** 뉴런([[concept-arcuate-nucleus]], [[concept-npy-agrp-neurons]], [[concept-pomc-neurons]], [[concept-melanocortin-system]]).
- POMC는 α-MSH 등 melanocortin을 만들어 melanocortin 수용체를 활성화해 섭식을 억제; AgRP는 AgRP·NPY·GABA를 만들어 섭취를 늘리고 에너지 소비를 줄인다. 둘 다 leptin·insulin·ghrelin·glucocorticoid·성스테로이드·영양 관련 cue에 반응한다.
- ★ **"배고픔 vs 포만의 단순 균형"이라는 관점은 생물학적 복잡성을 크게 과소평가한다.** 섭식은 칼로리 소비가 아니라 감각 처리·동기·학습·기억·위험 평가·운동 계획·보상 평가·사회적 적응을 요구하는 고도로 조직된 행동 과정이다. 따라서 섭식을 조절하는 뉴런 집단은 **필연적으로 뇌 기능의 여러 영역에 영향을 주는 위치**에 있다.
- **회로 구조**: AgRP는 인접 POMC 뉴런에 조밀한 억제성 입력을 주면서 hypothalamus·brainstem·forebrain 전역으로 투사한다. 표적에 paraventricular hypothalamus, lateral hypothalamus, parabrachial nucleus, bed nucleus of the stria terminalis, lateral septum 등이 포함되는데, 이들은 정서 조절·위협 평가·보상 처리·행동 유연성에 관여한다 → **melanocortin 계의 해부학적 조직 자체가 섭식에만 국한된 해석을 반박한다**.
- ★ **AgRP와 "필요(need)"의 생물학**: NPY나 AgRP 같은 **개별 신호 분자**의 유전적 결손은 섭식에 비교적 미미한 효과를 냈지만, **AgRP 뉴런 자체의 제거는 성체에서 심각한 식욕부진과 사망**을 초래했다. → 임계적인 생물학적 실체는 어느 단일 분자가 아니라 **뉴런 집단**이다. 배고픔은 하나의 분자가 만드는 것이 아니라 **뇌 전역 활동을 재조직할 수 있는 뉴런 상태**다.
- AgRP 뉴런은 **섭취 직전에 빠르게 억제**되고 음식 가용성과 연관된 감각 cue에 반응한다 → 현재 에너지 결핍을 단순 반영한다는 고전적 항상성 모형과 어긋나고, **미래 생리 조건에 대한 예측 정보**를 담을 수 있음을 뜻한다. 위키의 [[liu-2012-fasting-activation-of-agrp-neurons]]·[[faour-2025-emerging-role-of-agrp]]와 같은 축.
- ★ **생존 신호로서의 GABA**: AgRP 뉴런의 생존 촉진 작용은 상당 부분 **억제성 GABA 신호**에 의존한다. AgRP의 GABA 출력을 교란하면 섭식이 크게 변하고 생존이 위협되며, **하류 표적에서 GABA 신호를 복원하면 AgRP 뉴런 상실 표현형의 일부가 구제된다**. → 시스템 관점의 해석: 배고픔은 섭식 경로의 활성화만으로 생기는 것이 아니라 **경쟁하는 행동 프로그램의 선택적 억제**를 통해 창발할 수 있다. 에너지 결핍기에 음식 추구를 우선화하면서 덜 급한 활동을 억누르는 기전.
- ★ **POMC: 포만만이 아니다**. melanocortin 펩타이드 외에 POMC 뉴런은 **내인성 opioid를 분비해 섭취를 자극하고 보상·기호성을 조절**할 수 있다 → 먹기를 그냥 "끄는" 것이 아니라 섭식의 **질적·동기적·쾌락적 측면을 상태 의존적으로 조형**한다. 또 AgRP와 마찬가지로 감각 정보에 반응하고 음식·음식 cue로 빠르게 활성화되며 **예기적 대사 반응**을 협응한다. 스트레스 반응·정서·인지도 조절한다. → [[proposal-pomc-endorphin-food-pleasure]]·[[concept-ghost-pomc-neurons]]·[[miralpeix-2026-hypothalamic-pomc-neurons-gate]]와 직접 이어진다.

### 4. 섭식을 넘어 — 상위 뇌 기능
- **분산된 뇌 상태로서의 배고픔**: 배고픔은 주의·지각·정서 반응성·보상 평가·기억 인출·의사결정·위험 감수를 바꾸는 **뇌 전역 상태**다. 칼로리 결핍 중 음식 연관 감각 cue의 현저성이 커지고, 인지 자원이 음식 관련 정보 식별·평가에 우선 배분되며, 경쟁 우선순위는 **능동적으로 억제**된다. AgRP 활성화는 음식 추구를 늘리고 **foraging 관련 회로의 장기강화(LTP)를 촉진**하며 음식 지향 행동의 지속성을 높인다. POMC는 melanocortin 방출로 반대 방향 — 섭식 억제, 음식의 동기적 현저성 감소, 에너지가 보충되면 비섭식 우선순위로의 복귀.
- **보상·동기**: AgRP·POMC는 ventral tegmental area·nucleus accumbens 투사를 포함해 mesolimbic 도파민 회로와 광범위하게 소통한다. leptin·ghrelin·melanocortin이 도파민 뉴런 활동과 보상 평가를 조절해 **내부 에너지 상태가 동기 우선순위를 재교정**하게 한다.
  - **anorexia nervosa 모형**: 음식 제한 동물에게 running wheel을 주면 음의 에너지 균형에서도 **강박적으로 달린다**. 이 조건에서 AgRP 활성화는 **달리기 지속력을 높이면서 동시에 말초 연료 분배 조절로 생존을 보장**한다. 저자들은 이동 욕구가 "먹을 것이 있을 다른 장소를 찾는" 필요와 일치한다고 해석한다.
  - AgRP의 광·화학유전학적 조작은 섭식뿐 아니라 **음식과 엄격히 묶이지 않은** 보상 추구·강화 학습도 조절한다.
  - **발달 임계기**의 AgRP 신호 교란은 medial prefrontal cortex 구조와 도파민 입력을 재편해 sensorimotor gating과 상위 행동 조절에 영향을 남긴다.
  - **도파민에 억제되는 POMC Drd2+ 뉴런**이 확인됐고, 화학유전학적 활성화가 섭식을 억제하고 체온조절 반응을 바꾼다 → 도파민 신호·melanocortin tone·동기 상태의 긴밀한 결합.
- **학습·기억**: leptin·insulin·ghrelin 수용체가 hippocampal 회로에 발현해 시냅스 가소성·LTP·기억 수행을 조절한다. AgRP 쪽은 더 구체적이다 — 화학유전학적 AgRP 활성화는 공간 학습을 크게 손상시키지는 않으나 **변형 Barnes maze에서 행동 유연성을 줄이고 Y-maze 자발적 교대를 감소**시키며, 이는 일부 **NPY 수용체 5** 신호가 매개한다. 해석: 에너지 결핍기의 AgRP 활동 증가가 hippocampal·연합 네트워크를 **유연한 탐색보다 정형화된 자원 추구 전략에 유리하게** 재구성해 기억 과정을 생존 필요에 정렬시킨다.
  - ★ **POMC 유래 neurosteroid**: POMC 뉴런에서 **pregnenolone** 합성을 유전적으로 교란하거나, 고열량 식이 노출로 **ARC의**(hippocampus나 perirhinal cortex가 아니라) pregnenolone을 낮추면 기억이 손상됐다. POMC 화학유전학적 억제도 hippocampal 기억을 손상시키고 **급성 중추 pregnenolone 투여의 인지 이득을 없앴다**. 그리고 **metabolically unhealthy obesity가 있는 사람에서 CSF pregnenolone 농도가 인지 점수와 양의 상관**을 보였다.
  - 간접 경로: AgRP·POMC는 수면–각성 구조·circadian 리듬·스트레스축 활동·내분비 출력을 조절해서도 hippocampal 기능에 영향을 준다.
- **실행기능·의사결정**: AgRP의 구성적 손상 또는 **사춘기 전후 화학유전학적 억제**는 medial prefrontal cortex의 **뉴런 수를 줄이고** 진동성 네트워크 활동을 바꾸며 sensorimotor gating과 보행 행동을 손상시키는데, **도파민 조절로 되돌릴 수 있다**. 또 AgRP 뉴런은 **말초 유래 순환 lysophospholipid 조절을 통해** cortical 흥분성을 바꿀 수 있다 — hypothalamus가 cortex를 바꾸는 **비뉴런적 경로**. leptin·ghrelin은 prefrontal 활동과 의사결정에 작용해 충동성·인지 유연성·노력 기반 선택에 영향을 준다 → 의사결정의 "비용–편익" 계산이 hypothalamic 회로를 거친 에너지 정보를 **포함**한다는 생각과 일치. [[concept-effort-based-decision-making]]·[[concept-inhibitory-control-demand]]·[[concept-prefrontal-cortex-feeding]].
- **정서 조절·사회행동**: AgRP 뉴런은 기아에 대한 적응 반응 — **영역 공격성 억제**, 위험 감수 증가, 음식 추구 촉진 — 을 협응한다. 최근 연구는 AgRP가 **연령 의존적으로 sociability를 조절**하고(에너지 감지 회로가 사회적 뇌 네트워크를 조형하는 발달 창), AgRP 활동이 **배고픔 유발 유아 지향 공격성을 gating**한다고 보고했다. POMC는 melanocortin과 β-endorphin 방출로 동기·정서 과정과 스트레스·불안 관련 행동에 관여한다.
- **영역 특화 재고**: 이는 cortical·hippocampal·amygdalar·basal ganglia 회로의 중요성을 깎아내리는 것이 아니라, 그 시스템들이 **몸에서 오는 신호로 계속 정보를 받는 생리적 틀 안에서 작동**한다는 점을 강조한다. AgRP·POMC는 에너지·호르몬 정보가 뇌 전역 네트워크에 접근하는 **주요 관문**이다. 몸–뇌 소통 장애는 **명백한 신경퇴행이 드러나기 훨씬 전부터** 신경 취약성과 인지 궤적에 영향을 줄 수 있다.

### 5. melanocortin 계 기능의 hallmark로서의 대사 유연성 (기전 핵심 — 저자 lab의 30년)
#### 세포 내 유연성
- 미토콘드리아가 연료 기질 변화에 맞춰 **fission·fusion**을 거치는 능력이 세포·조직·개체 대사 유연성의 핵심 성분.
- 1997년 **UCP2·UCP3** 발견(canonical uncoupler UCP1과 구조적 상동), 그중 **UCP2가 hypothalamus에 강하게 발현**됨을 확인. 이후 UCP2가 hypothalamic 뉴런의 미토콘드리아 역학 조절에 임계적으로 관여함을 밝혔다.
- ★ **ghrelin → AgRP 경로 (Fig. 3)**: ghrelin이 GHS-R1a에 결합 → Gαq/11 → PLCβ의 IP3/DAG 생성과 세포내 Ca²⁺ 동원 → 막 탈분극·흥분 → 지속적 활동전위가 막 근처 ATP 소비를 늘려 **AMP/ATP 비 상승** → **AMPK** 활성화 → **ACC** 인산화·억제 → **malonyl-CoA 감소** → **CPT1** 억제 해제 → 장쇄지방산이 미토콘드리아로 들어가 β-산화 → ATP 생산. 동시에 **UCP2가 ROS를 신호 수준으로 통제**(산화 손상이 아닌 신호 기전) → **DRP1 의존 미토콘드리아 fission** → 더 작고 대사적으로 반응성 높은 미토콘드리아 증가.
  - 기능적 의미: 이 연쇄가 **음의 에너지 균형이 지속되는 동안(분·시간·일·주·달·년) AgRP 뉴런이 계속 발화할 수 있게** 한다. [[concept-hypothalamic-ampk]]과 같은 축.
- **SIRT1**은 세포 자율적 NAD⁺ 의존 에너지 감지기로 AgRP 발화·시냅스 가소성·melanocortin 출력을 조절한다.
- ★ **POMC는 반대**: 포만·양의 에너지 균형에서의 활성화는 미토콘드리아 **fusion**에 기댄다. GTPase **MFN2**가 미토콘드리아–ER 소통, leptin 반응성, 에너지 균형을 조절한다. POMC 활동은 **탄수화물 이용과 mTOR** 신호로 조절되고, 이것이 기능적 이질성에 영향을 준다. **ROS 생성은 POMC 발화에 필수 신호**다. 포만은 단시간 현상(분~시간)이므로 ROS도 일시적인데, 비만 같은 병적 조건에서 **이 과정이 길어지면** 세포·조직·개체 통합성에 해로울 수 있다.
- ★ **연료별 분업**: **탄수화물 구동 POMC 뉴런은 말초 조직의 탄수화물(포도당) 이용을 촉진**하고, **지질 구동 AgRP 뉴런은 음의 에너지 균형 동안 모든 조직의 지질 이용을 촉진**한다.
- **CRAT**(carnitine O-acetyltransferase)은 AgRP 뉴런에서 지질↔포도당 유래 연료를 빠르게 전환하게 하는 **핵심 미토콘드리아 노드**다. AgRP에서 CRAT를 선택적으로 없애면 뉴런의 연료 전환이 깨지고 **전신 대사 유연성이 손상**되어 말초 영양소 분배·기질 이용이 바뀐다.
- ★ **AgRP·POMC는 말초에 대사 상태를 "부과"한다**:
  - 급성 AgRP 활성화는 **섭취를 통제해도** 기질 이용을 바꾸고 지방생성을 촉진한다.
  - AgRP 뉴런 제거는 간·근육·췌장의 자율 조절을 바꾸고 말초 영양소 분배를 변화시킨다.
  - AgRP 활성화는 **수 시간 안에 brown adipose tissue의 myostatin 신호를 통해 전신 insulin 저항성을 유도**할 수 있다.
- ★ **시간 논리**: 단기 AgRP·POMC 교란은 **말초 기질 사용**을 바꾸고, 장기 교란은 **뇌 구조와 행동**을 바꾼다.
- 비만은 여러 경로로 melanocortin 신호를 교란한다: 미토콘드리아 스트레스, **hypothalamic gliosis**, tanycyte와 ARC 혈액–뇌 계면을 통한 **대사 cue 수송 손상**([[concept-hypothalamic-inflammation]], [[concept-tanycytes]]).
- 저자들의 추론: ARC melanocortin 허브의 대사 유연성 상실이 자율·내분비·glial·면역·분산 뇌 네트워크로 **되울리는 대사 경직 상태**를 만든다면, 왜 비만이 노화를 가속하고 **우울·불안·다발성경화증(MS)·Alzheimer병**처럼 1차 병인이 다른데 만성 대사·면역 성분을 공유하는 질환의 취약성을 높이는지 설명할 틀이 된다.

#### 세포 간 유연성 → 시냅스 연결성
- 영양 상태 변화가 AgRP·POMC로 들어오는 시냅스 입력을 **빠르게** 바꾼다. 단식은 orexigenic 뉴런으로의 흥분성 구동을 늘리고, 재급식은 상당 부분 되돌린다. **leptin과 ghrelin**이 특히 중요하며, 순환 농도 변화에 따라 흥분성·억제성 입력이 재편된다([[concept-agrp-synaptic-plasticity]]).
- 개념적 함의: 내부 상태를 알리는 신호는 발화 패턴만 바꾸는 것이 아니라 **신경망의 상호연결 자체를 수정**한다 → hypothalamus는 **과거의 생리적 경험을 미래 행동 반응에 통합**할 수 있다.
- **hypothalamus 밖에서도 (Fig. 5)**:
  - **lateral hypothalamus의 orexin/hypocretin 뉴런**은 대사 변화에 따라 입력 조직이 빠르고 강하게 바뀐다 → 수면과 대사 건강의 역상관과 연관 제안([[concept-orexin-neurons]], [[yamanaka-2003-hypothalamic-orexin-neurons-regulate]]).
  - **VTA 도파민계**: ghrelin이 연결성과 기능적 출력에 강력한 영향. ghrelin은 또 위의 세포내 미토콘드리아 기전을 이용해 **Parkinson병 같은 병적 과정에서 midbrain 도파민 뉴런을 보호**한다.
  - **hippocampus**: ghrelin에 반응해 **spine 시냅스 수와 기능 출력이 빠르게 변한다**. 같은 연구에서 ghrelin의 Alzheimer병 모형 보호 효과도 확인됐다. 대사 도전으로 촉발되는 hippocampal·cortical 회로 가소성도 **UCP2**와 관련되며, 이 미토콘드리아 과정은 **운동으로 촉발되는 hippocampal formation 변화**에도 임계적으로 관여한다.
- **glia**:
  - astrocyte도 미토콘드리아 역학과 연관된 대사 유연성을 고유하게 갖고 AgRP 계 가소성에 역할을 한다.
  - ★ **astrocyte 양성 피드포워드 고리 (Fig. 6)**: AgRP 뉴런이 방출한 **GABA**가 astrocyte 적응과 **PGE2** 방출을 유도 → PGE2가 AgRP 뉴런의 **EP2 수용체**를 활성화 → AgRP 흥분성을 더 높인다. 이 glial 기전이 **배고픔 구동 섭식과 과식을 증폭**할 수 있다. 재급식은 이 적응을 되돌린다.
  - microglia는 시냅스 재편과 염증 반응에 참여. **tanycyte**는 제3뇌실 일부를 이루며 CSF·순환·hypothalamic 조직의 계면에 있어 혈중 신호 감지에 이상적이다.

### 6. 몸–뇌 단절 — 노화에서 신경퇴행으로
- 노화·대사질환·신경퇴행은 모두 **대사 유연성의 점진적 상실**로 특징지어진다.
- **염증은 필수적이지만 맥락 의존적** 성분이다. 급성·잘 통제된 염증은 숙주 방어와 조직 수선을 돕고 에너지·행동을 일시적으로 회복에 재배분한다. 이 과정은 **immunometabolic 재프로그래밍**과 긴밀히 결합한다 — 활성화된 면역세포는 산화적 인산화에서 **해당과정으로 전환**해 빠른 ATP와 cytokine 생산·증식·효과기 기능·세포 운명 결정에 필요한 대사 중간체를 얻는다.
- **대사 신호가 면역 기능을 조형한다**:
  - 배고픔 연관 인자(ghrelin·NPY·endocannabinoid)는 대체로 **항염증·조직 수선** 프로그램에 유리하다. ghrelin은 실험적 자가면역 뇌척수염(EAE)에서 encephalitogenic **Th1·Th17 반응을 줄이고 Treg 반응을 촉진**한다.
  - 반대로 **leptin**과 지방량 연관 신호는 면역세포 활성화와 염증 cytokine(IFN-γ 포함) 생산을 **높인다** — 특히 만성 과영양과 고지방식 연관 EAE에서.
- **melanocortin 회로는 면역을 능동적으로 조절한다**(염증 입력에 단순 반응하는 것이 아니라):
  - AgRP 뉴런에서 **SIRT1을 선택적으로 결손**시키면 적응면역이 바뀌고 항염증 Treg 조절이 손상되며 **EAE 감수성이 높아진다**.
  - AgRP 뉴런은 EAE 동안 **bone marrow와 thymus로 가는 noradrenergic 신호**를 조절해 면역세포 발달과 Treg 성숙에 영향을 주는데, 이 조절이 질병 중 교란된다.
  - 단식·칼로리 제한은 EAE의 염증 병변을 줄인다.
  - AgRP 활동은 **AgRP→paraventricular hypothalamus→vagus** 경로 등 투사 특이적 회로로 항염증 신호를 말초에 전달하고, **교감–간 축**(간 mTOR·CCL2)을 통해 순환 Ly6C-high 단핵구를 조절한다.
  - AgRP·POMC는 **HPA 축**도 조절한다.
- **병리는 이 적응 기전이 만성화되어 해소에 실패할 때 생긴다**: 비만·2형 당뇨에서 leptin과 염증 매개체의 지속 상승이 **hypothalamic "microinflammation"** — 지속적 microglia·astrocyte 활성화와 **IKK-β/NF-κB** 의존 스트레스 신호 — 를 촉진한다. 이 염증 상태가 leptin·insulin 반응성, 영양 감지, 미토콘드리아 기능, melanocortin 출력을 교란해 AgRP·POMC 기능을 손상시킨다 → insulin 저항성, 자율 불균형, 지속적 저등급 염증 (Fig. 7).
- **노화**:
  - hypothalamic **POMC 뉴런 기능이 손상**되는데, 부분적으로 **mTOR 신호 증가가 KATP 채널 활동을 높여 세포 자율적 침묵**을 일으킨다.
  - AgRP 뉴런과 POMC로의 시냅스 입력이 상당한 기능적·구조적 재편을 거친다.
  - ★ AgRP 뉴런에서 **CPT1A**(미토콘드리아 지방산 산화의 속도결정 효소)를 유도성으로 결손시키면 **노령 생쥐의 지속력·운동 협응·탐색 행동이 개선**됐다.
- **Alzheimer병**:
  - 동물 모형에서 hypothalamus의 **AgRP·POMC·MC4R 발현이 조기에 감소**하고, hypothalamic **neurovascular 계면 결손**과 **미토콘드리아 대사 결손**이 나타나는데 — 모두 **인지 손상 발생에 앞선다**.
  - ★ **HypoAD**(노화·AD에서 사람 hypothalamus의 포괄적 지도)는 **대사 조절·스트레스 반응·circadian 조절에 관여하는 hypothalamic 하위영역의 특별한 취약성**을 드러냈다. 이 영역들은 연령·AD 관련 부피·유전자 발현 변화를 보이며, **염증 반응과 circadian 리듬 조절 경로가 AD의 핵심 세포 예측인자**로 꼽혔다([[concept-hypomap]]과 같은 계열의 지도 자료).
  - 생쥐·사람 뇌 연구는 hypothalamic **tanycyte가 CSF→혈액 tau 제거를 조절**할 수 있다고 시사한다.
- **melanocortin 수용체 약리** (저자 표현: "솔깃하지만 아직 불완전하고 회로 의존적"):
  - melanocortin 작용제는 신경 항염증 기전으로 저산소·허혈 손상을 보호한다.
  - AD 유사 모형에서 **MC4R 매개 경로 포함** melanocortin 수용체 활성화가 인지 수행과 glial 프로필을 개선하고, **MC4R 길항은 이 이득의 여럿을 차단**한다.
  - ⚠️ **그런데 MC4R 길항제가 일부 행동 패러다임에서 항불안·항우울 효과를 보인다.** 저자들은 이것을 모순이 아니라 **회로 특이성**으로 읽는다 — melanocortin 신호가 신경퇴행·면역 관련 회로(hypothalamic·hippocampal)에서는 보호적이고, 다른 영역의 별개 MC4R 집단은 특정 맥락에서 길항이 유리한 방식으로 기분·불안을 조절할 수 있다([[concept-mc4r]]).
- ★ **hypothalamus를 "회춘"시키면 개체가 회춘한다**: hypothalamic 신경줄기세포를 보존·보충하거나, hypothalamic 염증 신호를 누그러뜨리거나, **IKK-β/NF-κB 의존 microglia–뉴런 면역 교신을 차단**하는 조작이 전신 노화 표현형을 지연시키고 대사 조절을 개선하며 생쥐의 health span을 늘렸다. → hypothalamus는 몸과 나란히 늙는 것이 아니라 **면역·내분비 기전으로 전신 노화를 능동적으로 지휘**한다.

### 7. hypothalamus 중심 뇌질환 틀
- 뉴런 독트린과 영역 특화에 기반한 고전적 틀은 감각·운동·기억·정서의 많은 것을 설명했으나 **AD·Parkinson병·우울·조현병·비만·중독·MS에 변혁적 치료를 내놓지 못했다**. 저자들은 빠진 차원이 **내부 신체 상태의 지속적 영향**이라고 본다.
- 이 틀에서 **내부 신체 상태는 뇌 상태의 master regulator**다. AgRP·POMC는 배고픔·포만, 질병 행동, 스트레스와 회복, 생식 욕구, 각성을 협응하며, 이 배치는 **온전한 대사 유연성**(기질 간 빠른 전환 능력)에 의존해 뉴런 기능과 면역 설정점에 직접 영향을 준다.
- 질병 재해석: 뉴런은 **에너지 공급·염증 tone·내분비 신호·circadian 조직으로 정의되는 변화된 개체 환경 안에서** 퇴화한다. ARC melanocortin 회로의 대사 유연성 상실이, 왜 대사질환·비만이 노화를 가속하고 AD·Parkinson·우울·MS 위험을 높이는지, 그리고 왜 "별개"로 보이는 여러 질환이 대사·염증·자율 이상을 공유하는지 설명하는 데 도움이 된다.
- ★ 저자들이 제시하는 개념적 전환: **몸에서 오는 신호는 주변적 수정자가 아니라 뇌 기능의 근본적 결정자다.** 이 틀은 전통적 회로 모형을 대체하지 않고, 대사 유연성과 몸–뇌 통합이 지배하는 더 큰 구조 안에 **배치**한다.

### 8. 치료에 대한 함의
- 대부분의 현대 접근은 영향받은 신경 회로 안의 특정 분자 표적을 수정하려 한다. 중요한 진전을 냈지만 **생리적 통합 수준에서 일어나는 교란은 충분히 다루지 못할 수 있다**.
- 미래 치료는 대사·내분비·면역·circadian·신경 시스템 **간의 소통 복원**에 점점 초점을 맞춰야 한다: 수면 질 개선, 만성 염증 감소, 대사 건강 향상, circadian 조직 보존, hypothalamic 기능 유지.
- 이런 접근은 **전임상 단계**에서 특히 가치 있을 수 있다 — 비가역적 뉴런 손실 전에 생리적 이상이 먼저 나타나는 경우가 많기 때문. 따라서 **몸–뇌 소통의 악화를 반영하는 바이오마커** 발굴이 기초·중개 연구의 중요한 목표가 될 수 있다.
- ★★ **칼로리 제한 ≠ 약리적 포만 ≠ 인공 영양 신호** (이 리뷰에서 사용자 lab에 가장 직접적인 대목):
  - **칼로리 제한**은 협응된 적응 상태를 켠다: 배고픔 신호가 오르고, AgRP 뉴런이 **활성을 유지**하고, POMC 출력이 **억제**되고, 말초 조직이 연료 사용을 전환하고, AMPK·mTORC1 같은 영양 감지 경로가 재조정된다.
  - **semaglutide** 같은 인크레틴 유사체는 **약리적으로 포만을 촉진하고 gut-brain 신호를 바꿔** 섭취를 줄인다. 포도당 대사 이상을 교정하고 강력한 감량을 내지만, **칼로리 제한과 같은 hypothalamic·면역·생체에너지 상태를 재현하지 않을 수 있다**.
  - ★ 저자들의 질문: **"체중이 줄었나"만이 아니라 "그 개입이 생리적 배고픔 연관 적응 프로그램을 켰나, 인공 포만 상태를 켰나"**.
  - 장기 뇌 건강에서 중요한 구분이다. 칼로리 제한은 health span·수명 개선과 연결된 가장 많이 연구된 개입의 하나이고 AMPK·mTORC1에 작용한다. **MS 환자에서 간헐적 칼로리 제한**이 예비 연구에서 cortical 지표를 개선하고 신경염증을 완화했다고 보고됐다. semaglutide 등은 감량에 매우 효과적이고, 실사용 자료는 **2형 당뇨 환자에서 첫 AD 진단 위험 감소와의 연관**을 시사한다. 그러나 사람에서 수십 년, 생쥐에서 수년 유지되는 **약리적 포만이 칼로리 제한과 생물학적으로 동일하지 않을 수 있다**.
  - ⚠️ 저자들의 명시: **이것은 인크레틴 치료에 반대하는 논거가 아니다.** 서로 다른 감량 경로의 **장기 중추 대사·면역 결과를 따로 연구해야 한다**는 뜻이다.
- **인공 감미료의 경고 사례**: 칼로리 없이 단맛을 모방하도록 설계됐지만 예상 밖 생물학적 효과를 낼 수 있다. **고용량 sucralose가 생쥐에서 T세포 증식·분화를 억제**했다 — 대사적으로 "무음"으로 여겨진 식이 화합물이 면역 기능을 바꿀 수 있다는 것. → 뇌와 면역계는 칼로리만이 아니라 **감각 신호·장 유래 신호·내분비 맥락·염증 상태**를 함께 해석한다. 배고픔·포만·단맛·영양 가용성을 모방하는 개입은 **체중 조절만으로는 예측할 수 없는 방식으로** 중추 대사 회로에 관여할 수 있다.
- **사람 자료의 부족**이 치료 함의의 중요한 한계다. 위 근거 대부분이 설치류 모형에서 나왔고 사람으로의 번역성은 아직 확립되지 않았다. 다만 초기 뒷받침이 있다:
  - **MS에서 순환 AgRP 농도가 임상 중증도와 MRI 신경염증 지표와 상관**한다고 최근 보고됐다 — AgRP 뉴런이 bone marrow·thymus의 교감 조절로 신경면역 소통을 조절한다는 실험 근거를 보완한다.
  - **AD에서 hypothalamus가 질병의 표적이면서 동시에 잠재적 추동자**로 제안돼 왔다. 다만 사람에서의 실험적 확인이 더 필요하다.

### 9. 방법론적 한계 (저자들이 직접 쓴 자기 비판)
- ★ **Cajal vs Golgi**: 저자들의 전제를 검증하는 일이 신경과학을 지배하는 개념·기술 틀 — 뉴런을 **별개의 극성화된 세포 단위**로 정의하는 Cajal의 뉴런 독트린 — 에 제약된다. Cajal은 Golgi가 1873년 발명한 은함침법으로 얻은 영상에서 이 관점을 세웠지만, **Golgi 자신은 그 해석을 거부하고 뇌가 연속적 syncytial "신경 기관"으로 작동한다고 제안**했다. 뉴런의 시작과 끝이 구분된다는 후속 증거가 Cajal의 틀을 뒷받침했고, 그 틀이 **정의된 뉴런의 선택적·원격 조작을 위한 현대 방법의 기반**이 됐다.
- **그런데 hypothalamus 같은 고도로 보존된 영역에서는 이 접근에 중대한 한계가 있다.** cortex나 hippocampus의 고도로 조직되고 비교적 이해 가능한 구성과 달리, hypothalamus의 뉴런 집단은 **공간 분포와 연결성 양쪽에서 오히려 무질서하다**. 여기에 앞서 다룬 세포 간·세포 내 가소성이 겹치면 engineering 기반 접근의 효용이 덜 분명해진다.
  - 예시: AgRP 뉴런에서 나온 신호가 cortical 구조에 닿는 **노드의 수는 계산조차 불가능하다**. 게다가 cortical 기능은 AgRP 뉴런이 크게 영향을 주는 자율 조절 아래의 **말초 조직**에 의해서도 쉽게 영향받을 수 있다.
- **대사 상태 측정의 한계**: PET는 생리 상태·질병에 걸친 뇌 영역 에너지 적응을 생체 내에서 보여 주지만 **세포 수준** 뇌 대사 상태 포착은 여전히 난제다. 고전적 metabolomics는 생화학적 정밀도는 높으나 **이질적 조직에 걸쳐 신호를 평균**해 세포형 특이 적응을 가린다. 뉴런·astrocyte·oligodendrocyte·microglia·내피세포·tanycyte·침윤 면역세포가 같은 전신 도전에 서로 다른 대사 상태로 반응하는 뇌에서 특히 중요하다.
- **새 도구들**:
  - 단세포·단핵 RNA 시퀀싱은 대사물을 직접 재지는 않지만 해당과정·산화적 인산화·지방산 산화·ketone 이용·일탄소 대사·지질 재편·산화환원 조절 유전자 발현으로 **협응된 대사 프로그램을 추론**할 수 있게 한다. **GAM clustering**(Gainullina 외)이나 **COMPASS**(전사체 + 대사 네트워크 모형 → 경로 활동·상대적 대사 flux 추정) 같은 계산 접근이 쓰인다. 대사 유연성이 정적 속성이 아니라 **세포 대사 상태 사이의 전이**를 반영하므로 특히 가치 있다.
  - ⚠️ **한계**: 전사체 추론만으로는 부족하다 — 대사 상태는 유전자 발현에 온전히 부호화되지 않는다(효소 활성, 기질 가용성, 번역후 조절, 국소 생화학 환경).
  - ★ **lipizone**: La Manno 외는 고해상도 **MALDI 질량분석 영상(MSI)** 으로 뇌 전역 지질체 지도를 만들어 **공간적으로 조직된 수백 개의 지질 영역("lipizones")** 을 찾아냈다 — 뇌가 전사체 정체성만이 아니라 **지질 조성으로 정의되는 별개의 생화학적 niche**를 담고 있다는 것. 중요하게도 **전사체 정보는 관찰된 지질 분산의 일부만 설명**했다 → 지질체 상태가 RNA 발현을 넘는 독립적 생물학 정보를 담는다. AgRP·POMC 뉴런·astrocyte·microglia·tanycyte·혈관·면역세포의 긴밀한 상호작용에 대사 감지가 의존하는 **ARC에 특히 적절**하다.
  - 공간 전사체는 어느 세포 집단이 특정 대사 프로그램을 쓰는지 식별하고, MALDI-MSI 등 공간 metabolomics는 인지질·sphingolipid·ceramide·지방산·ketone 관련 종을 **거의 세포 해상도로 직접 지도화**한다 → 두 접근의 통합([[concept-spatial-transcriptomics]], [[yang-2026-spatial-transcriptomics-identifies-the-molecular]]).

### 10. 결론과 다섯 가지 향후 방향
- 핵심 질문들이 미해결로 남았다: 인지가 어떻게 생기는가, 왜 신경퇴행 질환이 발생하는가, 왜 개인의 취약성·회복력 차이가 그렇게 큰가. 한 가지 한계는 대부분의 틀이 **뇌 안의 정보 처리에 집중하면서 몸의 내부 상태를 부차적으로 취급**해 온 것이다.
- AD·Parkinson병 등에서 **대사 이상·염증·수면·자율 이상·내분비 변화가 명백한 뉴런 손실에 앞서는 일이 많다** → 신경퇴행은 **점진적으로 조절이 깨진 생리적 환경 안에서** 전개된다.
1. 내부 상태 정보가 분산 신경계에 영향을 주는 방식을 더 정밀하게 정의해야 한다. 말초–뇌 경로는 점점 지도화되고 있으나 **시간·공간 규모에 걸쳐 통합되는 계산 원리는 대체로 미지**다.
2. **"항상성" hypothalamic 회로 vs "인지" 회로라는 경직된 구분을 넘어서야 한다.** 대사 조절자로 처음 식별된 뉴런 집단이 명백히 동기·보상·학습·기억·정서에 영향을 주고, 정전적 인지 영역은 풍부한 hypothalamic·말초 입력을 받는다.
3. **glia·혈관·면역** 기전에 더 주목해야 한다. 비뉴런 세포가 연산·가소성·질병에 능동적으로 참여한다.
4. hypothalamic 기능 이상이 **질병 진행의 반영이 아니라 개시에 기여**할 가능성을 체계적으로 검증해야 한다. 몸–뇌 소통의 조기 붕괴는 비가역적 뉴런 손실 전의 **개입 창**을 줄 수 있어, 몸–뇌 통합 손상의 바이오마커가 임상적으로 가치 있을 수 있다.
5. 생리·신경 과정을 여러 조직 수준에 걸쳐 통합하는 실험·개념 틀이 필요하다. 몸–뇌 소통의 복잡성은 엄격한 환원주의적 접근에 도전하며 **시스템 수준 분석**을 요구한다.

## 위키 관점의 메모
- ★ **위키에 없던 개념**: `metabolic flexibility`·"대사 유연성"은 이 리뷰 이전 위키 어디에도 쓰이지 않았다. 그래서 [[concept-metabolic-flexibility]]를 새로 만들었다. 저자들의 **항상성 vs 유연성** 대비는 위키의 설정점 계열 서술([[concept-weight-regain-defended-adiposity]]의 defended adiposity)과 **보완 관계이면서 긴장**한다 — 전자는 "지켜지는 값"을, 후자는 "전환 능력"을 강조한다. 같은 현상을 다른 변수로 기술하는 두 틀로 병기해 두는 것이 맞다.
- **POMC 재평가의 세 번째 출처**: POMC가 opioid로 섭취를 **촉진**한다는 서술은 위키의 [[proposal-pomc-endorphin-food-pleasure]](Jouque 2025·Minère 2025 근거)와 같은 방향이다. 이 리뷰는 1차 데이터가 아니라 **리뷰 수준의 승인**으로 센다.
- **AgRP = Need 이론과의 관계**: [[kim-2024-normative-framework-dissociates-need|AgRP=Need]]는 AgRP가 *어떤 변수*를 부호화하는지 답했다. 이 리뷰는 그 위에 **"그 뉴런이 동시에 말초 연료 분배를 부과한다"**는 출력 축을 얹는다(급성 활성화가 섭취를 통제해도 지방생성을 촉진, 수 시간 내 BAT myostatin 경유 전신 insulin 저항성). 즉 AgRP는 Need의 **판독기이면서 집행기**다.
- **긴장 1 — CPT1 방향**: §5에서 ghrelin→AgRP 활성화는 **CPT1 억제 해제(지방산 산화 증가)** 에 의존한다고 하고, §6에서는 노령 생쥐에서 **CPT1A 결손이 지속력·운동 협응·탐색을 개선**했다고 한다. 리뷰는 이 둘을 나란히 두면서 조정하지 않는다. 젊은 개체의 급성 배고픔 신호와 노화한 개체의 만성 상태에서 같은 경로의 부호가 뒤집힐 수 있다는 뜻으로 읽히지만, **원문이 명시하지 않는다**.
- **긴장 2 — melanocortin 작용제냐 길항제냐**: AD 유사 모형에서는 MC4R **작용**이 인지를 개선하고, 일부 기분·불안 패러다임에서는 MC4R **길항**이 유리하다. 저자들은 회로 특이성으로 설명하지만 구체적 회로·집단은 특정하지 않는다 → [[concept-mc4r]]에 열린 문제로 적을 값.
- **긴장 3 — ROS의 두 얼굴**: AgRP에서는 UCP2가 ROS를 **억눌러** 지속 발화를 가능하게 하고, POMC에서는 ROS가 발화의 **필수 신호**다. 같은 분자 종이 두 집단에서 반대 역할을 하므로, "항산화" 개입은 집단 선택성 없이는 방향을 예측할 수 없다.
- **위키의 GLP-1 라인과의 접점**: §8의 "약리적 포만 ≠ 칼로리 제한"은 [[gonzalez-rellan-2026-weight-loss-independent-actions-of]]의 체중 독립 효과 논쟁, [[hicks-2026-glp-1-therapies-and-cancer]]의 "치료 개시의 총효과 vs 분자의 효과", [[borchers-2026-obesity-pharmacotherapies-and-cognition]]의 직접 CNS vs 간접 대사 구분과 **같은 질문의 네 번째 판본**이다. 이 리뷰만 "무엇을 보정할까"가 아니라 **"어떤 생리 상태를 거쳤나"**를 변수로 세운다.
- ⚠️ **근거 등급**: 이 글은 **Review/perspective**이고 새 측정이 없다. 특히 §5의 기전 연쇄는 저자 본인 lab의 30년 연구를 1인칭("our work")으로 종합한 것이어서, 독립 재현 여부는 이 글로 판단할 수 없다.

## 원문 메모·불일치
- **서지**: 표지에 "Neuron 115, January 6, 2027 © 2026 Elsevier"로 적히고 doi는 `10.1016/j.neuron.2026.09.028`, 본문 머리글은 "in press". 위키는 `year: 2026`(doi·사용자 파일명 기준)으로 두고 호 날짜를 `journal`에 적었다.
- **저자 이니셜 불일치**: 저자 목록은 **Roman Romanov**인데 ACKNOWLEDGMENTS는 **R.A.R.** 로 적는다. 또 **T.L.H.(Horvath)의 연구비 기재가 없다** — D.C.·R.A.R.·G.M.만 있다.
- **이해상충**: 저자들은 **경쟁적 이해관계 없음**을 선언했다.
- **참고문헌 168편**, 그림 7개. Box는 없다. Supplementary는 이 PDF에 포함되지 않았다.
- **위키 미보유 1차 자료**(이 리뷰가 기대는 핵심 근거): POMC pregnenolone·CSF 상관 연구(ref 63), AgRP→mPFC 발달 효과(ref 58), AgRP lysophospholipid→cortex(ref 67), astrocyte PGE2-EP2 피드포워드(ref 112, Varela 외), CRAT(refs 95–96), BAT myostatin 경유 insulin 저항성(ref 98), AgRP SIRT1-Treg-EAE(ref 122), AgRP→bone marrow·thymus(ref 123), **HypoAD** 사람 hypothalamus 지도(ref 141), tanycyte tau 제거(ref 142), hypothalamic 줄기세포·NF-κB 회춘(refs 148–149), sucralose T세포(ref 156), **lipizone** MALDI 지도(refs 167–168), GAM clustering(ref 165)·COMPASS(ref 166).

## 관련 페이지
- [[concept-metabolic-flexibility]] — 이 리뷰에서 만든 개념 hub.
- [[person-horvath-tamas]] — 책임저자. UCP2·미토콘드리아 역학 라인의 출처.
- [[concept-npy-agrp-neurons]] · [[concept-pomc-neurons]] · [[concept-melanocortin-system]] · [[concept-arcuate-nucleus]] · [[concept-mc4r]] — melanocortin 계 hub.
- [[concept-agrp-synaptic-plasticity]] — §6의 leptin·ghrelin 시냅스 재편이 이 페이지의 1차 주제.
- [[concept-hypothalamic-ampk]] — §5의 ghrelin→AMPK→ACC→CPT1 연쇄.
- [[concept-hypothalamic-inflammation]] — §6의 microinflammation·IKK-β/NF-κB.
- [[concept-tanycytes]] — 혈액–뇌 계면, CSF→혈액 tau 제거.
- [[concept-ghrelin]] · [[concept-leptin]] · [[steinert-2017-ghrelin-cck-glp-1-pyy-secretory]] — 말초 신호.
- [[proposal-pomc-endorphin-food-pleasure]] · [[concept-ghost-pomc-neurons]] · [[miralpeix-2026-hypothalamic-pomc-neurons-gate]] · [[lim-2026-hypothalamic-pomc-neurons-regulate]] — POMC의 비포만 기능.
- [[faour-2025-emerging-role-of-agrp]] · [[liu-2012-fasting-activation-of-agrp-neurons]] · [[davila-2026-agrp-neurons-are-required-for]] — AgRP 통합자 라인.
- [[kim-2024-normative-framework-dissociates-need]] · [[concept-need-motivation-pleasure-utility]] — Need 축과의 관계.
- [[lopez-2026-hypothalamic-regulation-of-energy]] — 같은 분야의 history×frontier editorial. 이 리뷰와 정전(canon)이 겹친다.
- [[concept-interoception]] · [[concept-metabolic-interoception]] · [[knight-liberles-2025-interoception]] · [[weber-2025-interoceptive-origin-reinforcement-learning]] — 내수용 감각 틀.
- [[concept-orexin-neurons]] · [[yamanaka-2003-hypothalamic-orexin-neurons-regulate]] — Fig. 5B의 LH orexin 입력 재편.
- [[concept-prefrontal-cortex-feeding]] · [[concept-inhibitory-control-demand]] · [[concept-effort-based-decision-making]] — §4의 AgRP→mPFC·실행기능.
- [[concept-weight-regain-defended-adiposity]] · [[proposal-glp1ra-rebound-microbiota]] — §8의 "어떤 생리 상태를 거쳐 감량했나".
- [[borchers-2026-obesity-pharmacotherapies-and-cognition]] · [[hicks-2026-glp-1-therapies-and-cancer]] · [[gonzalez-rellan-2026-weight-loss-independent-actions-of]] — 직접/간접·총효과 구분의 같은 질문.
- [[concept-hypomap]] · [[concept-spatial-transcriptomics]] · [[yang-2026-spatial-transcriptomics-identifies-the-molecular]] — §9의 공간 omics·lipizone.
- [[concept-astrocyte-neuron-lactate-shuttle]] — glia의 대사 역할.
- [[overview-appetite-energy-homeostasis]] — 섭식·에너지 항상성 종합.
