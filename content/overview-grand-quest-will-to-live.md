---
title: "그랜드 퀘스트 — 삶의 의지는 '얼마나 남았나'가 아니라 '언제 그만두나'다"
type: overview
created: 2026-11-22
updated: 2026-11-23
---

> [!takeaway] 연구 방향 관점의 핵심
> **SNU 그랜드퀘스트 챌린지 과제(「생존·관계·이상을 추구하거나 포기하는 다차원 분자기전 지도를 그려, 삶의 의지를 측정하고 조절할 수 있을까?」)의 5문항을 위키 근거만으로 재검토한 페이지.** 핵심 제안 둘. ① **통념 절의 '단일성 전제'(의지는 스칼라)는 방어 불가** — [[redish-2016-the-computational-complexity-of-valuation|Redish 2016]]이 이미 common currency를 폐기 고려하고 [[concept-liking-wanting|liking/wanting 해리]]·[[concept-need-motivation-pleasure-utility|NMPU]]도 같은 방향이다. 대신 **"동기의 차원은 행동 종결점이 정한다"**와 **"포기는 추구의 부재다"**를 통념으로 세우면 반박이 어렵고 측정 설계가 바로 따라온다. ② 그래서 도전 가설을 **크기(얼마나 남았나) → 이탈 임계값(언제 그만두나)**으로 재정식화한다: *의지가 꺾이는 것은 추구 회로가 꺼지는 사건이 아니라, 그만두라는 신호가 켜지는 사건이다.*
> 제목에 새로 들어온 **'포기'가 위키 자산과 정확히 맞물린다** — [[holton-2026-the-adaptive-value-of-stubborn|Holton 2026]]의 apathy 역설·disengagement 역설, [[concept-goal-commitment]]의 patch-leaving·momentum, [[azevedo-2020-a-limbic-circuit-selectively-links|Azevedo 2020]]의 능동 도피 특이 LS^Nts, 그리고 **[[ahmadlou-2025-a-subcortical-switchboard-for-perseverative|Ahmadlou 2025]]의 median raphe switchboard**(2026-11-23 ingest) — 고집·탐색·포기가 **서로 다른 세포타입**에 할당되고, 포기에는 전용 상류 입력(LHb→MRN)이 있다. 자매 페이지는 [[overview-grand-quest-feeding-as-learning]](섭식판 그랜드 퀘스트), 상위 로드맵은 [[overview-future-research-directions]].
> **2026-11-23 개편**: §2–§4를 제안서 양식(A.탐색질문 1 차원축 / 2 시간축 / 3 방향축 + B.1–4 접근)에 **축별로 맞춰 다시 썼다.** 그 과정에서 드러난 가장 큰 구조적 공백은 **B의 네 접근 중 방향축을 직접 겨누는 것이 하나도 없다**는 것이다(§4 ⓞ 매트릭스). 또 "사람은 생존·관계·이상 셋 다, 동물은 생존본능 중심"이라는 전제를 받으면 **이상 축에는 종 사다리가 원리적으로 없다**(§2.4) — 선택지 두 길은 §3.4.
> ⚠️ 이 페이지는 **raw의 과제 자료 11건 + 위키 자료의 종합·해석(연결 가설)** 이며, 개별 1차 자료의 저자 주장이 아니다. 각 항의 근거 등급은 링크된 페이지에서 확인할 것.

# 그랜드 퀘스트 — 삶의 의지는 '얼마나 남았나'가 아니라 '언제 그만두나'다

## 한 줄 요약
삶의 의지를 **가치 총량(스칼라)**이 아니라 **축마다 따로 돌아가는 "계속할까/그만둘까" 결정의 집합**으로 세우고, 제안서의 **세 축(차원·시간·방향)별로** 통념(§2) → 가설·반증조건(§3) → 축×접근 매트릭스와 전략 보강(§4) → 동기 안전성이 중심이 되는 미래(§5) 순으로 정리한다. 2026-11-22 질의 답변의 보관본이며 2026-11-23 축별로 개편.

**근거 자료**(raw, 2026-11-22 업로드): 제안서 초안 docx(11-17) · 콜로퀴엄 슬라이드 2판(본판·사진판, 11-17) · 15분 발표판 · Gemini/ChatGPT 정리판 · 별첨 도식 PDF(원 개념도 + 종별 FM 통합 도식) · SNU 공모 PDF · 공동연구자 자료 3건(김형 영장류 subthalamic nucleus, 성지혜 형광센서/OptoXR, 신정환 파킨슨 apathy·자살률).

---

## 0. 제목 변경이 바꾼 것

| | 이전 (11-17판) | 새 제목 |
|---|---|---|
| 술어 | "다차원 분자 벡터로 **설명될 수 있는가**" | "분자기전 **지도를 그려**, **측정하고 조절할** 수 있을까" |
| 방향축 | 삶 추구 ↔ **죽음에 대한 반의지** | 추구 ↔ **포기** |
| 종결점 | 설명(explanation) | 측정 + 조절(인과) |

**'포기'로 바꾼 것이 실질적 개선이다.** '죽음에 대한 반의지'는 추구의 반대말이 아니면서 추구와 같은 축에 놓여야 하는 쌍인데, 조작적 정의가 "죽음 회피"로 내려오면 그냥 위협 회피가 된다(콜로퀴엄판 노트가 실제로 그렇게 후퇴했다: "죽음에 대한 반의지는 잠정적으로 죽음 회피 또는 생존 보호 경향으로 정의"). **추구와 포기는 같은 과제 안의 두 사건이고, 둘 다 능동적이며, 한 개체 안에서 따로 측정된다.** 그리고 §2–§3에서 보듯 위키에 근거가 쌓여 있는 쪽은 '죽음 반의지'가 아니라 '포기'다.

**대가 두 가지(기록).**
- 술어가 셋(지도·측정·조절)으로 늘어 6개월 탐색연구 범위로는 과해 보인다.
- **'분자기전 지도'는 '다차원 분자 벡터'보다 반증 가능성이 약하다** — 벡터는 차원 수를 틀릴 수 있지만 지도는 "그렸다"로 끝날 수 있다. 축 수가 틀릴 수 있다는 말이 제목에서 빠진 셈이다.

---

## 1. 질문의 제기 — "왜 지금"의 1순위

제안서는 5가닥(기술적 리모나반트 · 학문적 좌표 부재 · 사회적 자살률 · 경제 초고령 · AI)을 든다. **가장 강한 가닥이 빠져 있다.**

### (1) 올해 처음으로 '의지'에 해당하는 느린 상태 변수를 재고 조작할 수 있게 되었다 ★
- [[concept-will-volition-motivation]]에 정리된 대로 [[kang-2011-dopamine-system-and-antipsychotic-drugs|Kang 2011]]은 **의지(will) = 자극 없는 상태의 tonic dopamine 반응준비성**, 의욕(volition) = phasic dopamine이라는 대응을 제시했으나, 위키는 이를 "**직접 검증한 실험은 없다**"로 닫아 두었다.
- 그 실험이 2026년 11월에 나왔다. [[lodder-2026-tonic-dopamine-regulates-cell-type-specific-pka|Lodder & Sabatini 2026]]: nucleus accumbens core의 분 단위 tonic DA를 lifetime 광도측정으로 **절대값** 측정하고 Gq/Gi DREADD로 양방향 조작해 **progressive ratio breakpoint·poke rate를 인과적으로 결정**. 결정적으로 **보상 시 phasic DA의 크기는 이후 얼마나 일할지를 예측하지 못했다.**

이 한 자료가 과제의 세 축을 동시에 받친다.

| 과제의 축 | Lodder 2026이 주는 것 |
|---|---|
| **시간축(보존성)** | 의지의 신경 대응물이 순간 신호가 아니라 **분 단위 상태**임이 실측됨. "순간의 행동이 아니라 보존성"이 수사에서 측정 가능한 주장으로 바뀐다 |
| **성지혜 기술의 자리** | 핵심 결과가 **tonic DA는 D2R-SPN의 PKA를 직접, D1R-SPN은 phasic 증폭을 통해 간접** 조절한다는 세포타입 비대칭이다 → **축 분리가 일어나는 층이 수용체·세포내 신호 층**이라는 뜻. OptoXR이 겨누는 층이 바로 거기다 |
| **포기 측정** | breakpoint의 정의가 "**10분 이상 중단 전**까지 얻은 보상 수" = **이미 이탈 사건이다.** 새 제목의 '포기'가 표준 과제 안에 측정량으로 들어 있다 |

제안서는 OptoXR을 "기존 광유전학은 세포를 켜고 끌 뿐"이라고만 쓴다. **"축 분리가 일어나는 층이 수용체·세포내 신호 층이라는 것이 올해 실측되었다"**고 쓰면 원천기술이 역량 자랑이 아니라 **가설이 요구하는 유일한 도구**가 된다.

### (2) 리모나반트 논거는 수정이 필요하다
제안서 docx는 "표적 외 작용이 아니라 **표적 생물학 그 자체의 문제**", "식욕이라는 한 축만 누르려 했는데 **가치 공간 전체가 함께 내려앉았다**"고 단정한다. 위키 근거로는 그렇게 쓸 수 없다(콜로퀴엄판이 톤을 낮춘 것은 옳은 선택). 대신 위키는 **더 강한 두 갈래**를 준다.
- **계열 문제로 격상**: [[bluher-2026-obesity-management-medications-the|Blüher 2026]]은 orlistat를 뺀 승인·개발 중 비만약 대부분이 **중추 섭식 기전**을 겨누고, 그 회로가 보상·정서·인지와 겹쳐 **우울·불안·자살사고 위험**을 동반할 수 있다고 쓰며 rimonabant·sibutramine·lorcaserin 철수를 든다 → 단일 약물 일화가 아니다.
- **"표적 생물학"의 정체**: [[concept-endocannabinoid-system]]·[[concept-one-shot-learning]] — eCB-LTP는 **중추 학습 규칙**이고, 전신 CB1 차단의 인지·정동 부작용은 말초 섭식 역할만으로 설명되지 않는다. → 리모나반트는 "식욕 스위치를 눌렀더니 의지가 꺼진" 사례가 아니라 **"학습 규칙을 껐더니 가치 전체가 갱신을 멈춘" 사례**로 읽는 쪽이 근거에 맞고, 그게 바로 시간축(보존성)과 연결된다.

### (3) 자살률은 "왜 한국에서"의 답이지 "왜 지금"의 답이 아니다
2025년 사망원인통계(OECD 연령표준화 24.9 vs 보고서 수록 평균 10.9)와 WHO 사회적 연결 위원회(연간 87만 명 연관)는 **위키에 자료 없음**(외부 통계). 사회적 시급성의 근거로는 강하지만, 둘을 "왜 지금"에 섞으면 당위로 읽히고 "그래서 왜 이 방법이 지금 가능한가"가 그대로 남는다. **(1)을 "왜 지금", 통계를 "왜 한국에서"로 분리할 것.**

---

## 2. 기존의 통념 — 제안서의 세 축별 전제와 재정식화

제안서(A.탐색질문)는 축마다 "➤ 뒤집고자 하는 전제"를 적는다. **셋의 방어 가능성이 서로 다르다**는 것이 이 절의 논지다.

| 축 | 제안서가 적은 전제 | 방어 가능성 | 재정식화 권고 |
|---|---|---|---|
| **차원축** | 삶의 의지 = 생존 본능 중심, 1차원적 | △ "동기는 스칼라"로 읽히면 **불가** | **"차원은 측정 가능한 행동이 있는 만큼만 존재한다"** |
| **시간축** | 삶의 의지를 순간의 행동으로 측정 | **O 그대로 강하다** | 유지 (조작적 정의만 보강) |
| **방향축** | 삶의 의지는 일방향적 힘 | △ 서술은 맞지만 **조작적으로 약하다** | **"포기는 추구의 부재다"** |

### 2.1 차원축 — 전제의 '이유'가 실은 전제 본체다

제안서가 뒤집겠다고 적은 것은 "삶의 의지 = 생존 본능 중심, 1차원적"이다. 그런데 **단일성(의지는 스칼라)으로 읽히는 순간 방어가 안 된다.**
- [[redish-2016-the-computational-complexity-of-valuation|Redish 2016]]: 가치 측정 3법(revealed preference · willingness-to-pay · approach/avoidance)이 서로 다른 의사결정계를 건드려 **양립 불가한 순위**를 낳으므로 **"common currency로서의 value는 폐기 고려"**.
- 같은 방향: [[concept-liking-wanting|liking/wanting 해리]] · [[concept-need-motivation-pleasure-utility|NMPU 4성분]] · [[odoherty-2016-multiple-systems-for-the-motivational|O'Doherty 2016 3계 arbitration]] · [[berridge-2023-separating-desire-from-prediction-of|Berridge 2023]].
- → "동기가 스칼라라고 믿는 학자가 지금 누구인가"라는 질문 한 번에 절이 무너진다.

**해법은 제안서 안에 이미 있다.** 제안서는 전제의 *이유*로 이렇게 적었다 — "먹기, 위험 회피 등은 측정 가능하고 인과성 검증이 가능한 과학의 범위이기에 그동안 통용되어 왔음." **이 문장이 이유가 아니라 전제 본체다.**

> **통념 (재정식화): 삶의 의지의 차원은 측정 가능한 행동이 있는 만큼만 존재한다.**
> 그래서 생존은 축이 되고, 관계는 겨우 축이 되고, 이상은 축이 되지 못한다.

이렇게 쓰면 ⓐ 아무도 부정하지 않고(실제로 전 분야가 이렇게 한다), ⓑ **김형 교수팀 자료의 표("이상 = X")가 발견이 아니라 통념의 증거**가 되고, ⓒ 제안서의 해법(좌표계를 먼저 세우고 행동을 뒤에 배치)이 정확히 그 역전이 된다. 발표에서 그 표를 "우리가 아직 못 재는 것"이 아니라 **"분야가 축을 어떻게 정해 왔는지 보여주는 표"**로 읽을 것.

### 2.2 시간축 — 세 축 중 가장 정확하다

제안서의 전제("보상 선택이나 행동 개시 같은 **관찰 가능한 사건**으로 환원돼 왔다")는 **진짜 통념이고 그대로 쓸 수 있다.** 수식 전환도 세 축 중 가장 잘 정식화돼 있다.

```
기존:   Stimulus(t) → Neural response(t) → Behavior(t)
본 연구: Stimulus(t) + Accumulated history(0:t) → Neural state(t) → Behavior(t)
```

보강할 것은 전제가 아니라 **`Accumulated history` 항의 신경 대응물**이고, 그것이 §1에서 든 [[lodder-2026-tonic-dopamine-regulates-cell-type-specific-pka|Lodder & Sabatini 2026]]이다 — 분 단위 **tonic dopamine**이 progressive ratio breakpoint를 인과 결정하고 **phasic 크기는 이후 수행을 예측하지 못한다.** 즉 "순간 신호가 아니라 느린 상태"가 올해 처음 실측됐다.

### 2.3 방향축 — '포기'로 바꿔야 측정이 된다 ★

제안서의 전제 서술("죽음에 대한 반의지는 독립적 동기 체계라기보다 삶의 추구를 만든 진화적 이유이며, 근접 기제에서는 결국 접근 행동과 같은 한 방향으로 나타난다")은 **정확하지만 조작적으로 약하다.** '죽음 회피'로 내려오면 그냥 위협 회피가 되고, 콜로퀴엄판 노트가 실제로 그렇게 후퇴했다("잠정적으로 죽음 회피 또는 생존 보호 경향으로 정의").

새 제목에 들어온 **'포기'**가 이 문제를 푼다 — 추구와 포기는 **같은 과제 안의 두 사건**이고, 둘 다 능동적이며, 한 개체 안에서 따로 측정된다.

> **통념 (재정식화): 포기는 추구의 부재다.**
> 그래서 동기 측정은 전부 추구 쪽에서만 이뤄진다 — breakpoint, 선택률, 접근 속도. '그만둠'은 그 지표의 0이거나 과제의 끝이다.

이것은 **진짜로 검증되지 않은 전제**이고, 위키에 반증의 근거가 넷 있다(마지막은 2026-11-23 ingest).

| 근거 | 내용 |
|---|---|
| [[holton-2026-the-adaptive-value-of-stubborn\|Holton·Niv·O'Reilly 2026]] **apathy의 역설** | 특성 apathy가 높을수록 행동 서열에 **과도하게 지속**하고 제때 이탈하지 못한다. apathy↔충동성이 청년에서 높은 상관이고, over-/under-persistence가 **같은 개인에서 공존**한다 → "동기 없음"이 "안 움직임"이 아니라 "**못 그만둠**"으로 나타난다 |
| 같은 리뷰의 **disengagement 역설** | 일반 인구에서 포기 능력은 낮은 스트레스·더 나은 웰빙과 연관되는데 **우울 위험군에서는 포기가 우울 증상 증가와 연관** → 포기는 추구의 0이 아니라 **별도 축이며 양방향으로 고장난다** |
| [[azevedo-2020-a-limbic-circuit-selectively-links\|Azevedo 2020]] (Friedman lab) | lateral septum의 neurotensin 뉴런은 **도망칠 수 있을 때만** 켜지고, 몸이 묶여 움직이지 못하거나 freezing일 때는 **활성이 감소**한다. 켜지면 lateral hypothalamus 투사로 섭식·체중을 낮추되 불안·운동은 건드리지 않는다 → **같은 위협에서 능동 대처와 수동 포기가 서로 다른 분자 신호를 쓴다는 이미 출판된 분자 수준 증거.** LS^Nts의 70%가 `Glp1r` 공발현이라 랩의 GLP-1 라인과도 붙는다 |
| ★ [[ahmadlou-2025-a-subcortical-switchboard-for-perseverative\|Ahmadlou 2025]] (Nature, Hofer lab) | median raphe nucleus의 세 세포타입이 **고집(GABA 억제)·탐색(VGluT2 활성)·포기(SERT 억제)** 를 나눠 맡는다. 결정적 통제는 **MRN^SERT 억제가 각성·운동을 전혀 바꾸지 않으면서 포기 상태만 55%로 올린다**는 것이다("졸려서·못 움직여서"가 아니다). 포기에는 **전용 상류 입력**도 있다 — **LHb→MRN^VGAT→MRN^SERT 억제**가 포기를 81%까지 올린다. ⚠️ 단 이 LHb 조작은 **각성도 함께 낮추므로**(ED Fig 11e–i) 각성 비의존성의 근거는 LHb 쪽이 아니라 **SERT 쪽 통제**다. 그리고 **필요·충분 구조가 축마다 다르다**(VGluT2 억제는 아무 상태도 안 바꿈=탐색에 불필요 / SERT 억제는 포기를 만듦=참여에 필요) → **추구와 포기는 한 축의 양끝이 아니다** |

### 2.4 ⚠️ 세 축에 공통으로 걸리는 제약 — 종 사다리의 길이가 축마다 다르다

사용자가 세운 전제: **사람에게는 생존·관계·이상이 모두 존재하고, 동물에게는 생존본능이 주로 작용한다.** 이것을 받아들이면 콜로퀴엄판의 "환원의 딜레마"(분자기전은 동물에서만, 삶의 의지는 사람에게만)가 **축마다 다르게** 작용한다.

| 축 | 동물에서 분자 조작 | 인간에서 측정 | 종 사다리 |
|---|---|---|---|
| **생존** | O (B.1 적용 가능) | O | **완전** |
| **관계** | △ (사회적 접근·상호작용) | O | **부분** |
| **이상** | **X** | O | **없음** |

귀결 둘을 숨기지 않는 편이 낫다.
1. 제목은 "**다차원** 분자기전 지도를 그려"라고 약속하지만, **이상 축의 분자기전은 이 설계로 원리적으로 접근할 수 없다.**
2. 이 전제는 세부 탐색질문 ③("인간만의 고차원적 특성인가, 종을 넘어 보존된 공통 원리인가")을 **미리 답해 버린다.** 질문으로 열어 두면서 전제로 닫으면 모순으로 읽힌다.

→ 두 길 중 하나를 골라야 하고, 선택지는 §3.4에 정리했다.

**한편 이 전제는 방향축을 오히려 강화한다.** 동물이 생존본능 중심이라면 동물에서 나타나는 **생존에 반하는 행동**은 더더욱 설명되지 않는다. 그리고 위키에는 **동물에서 생존 축이 역전되는 회로 근거**가 있다 — **ABA(activity-based anorexia) 모델**에서 LH^LepR 화학유전 활성이 compulsive exercise를 중단시키고, 그 뉴런이 anorexia 위험 유전자 **Opcml·Ebf1**을 공발현한다([[korotkova-2026-balancing-acts-lateral-hypothalamic]] · [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal]]).

> **권고: 역방향 사례의 대표를 '거식증'으로 올릴 것.** 제안서가 든 단식투쟁·일벌·문어는 위키·raw에 근거가 없으나(단식투쟁은 검색 0건), 거식증은 위키 21개 페이지에 회로·분자·임상 근거가 있고 **사람과 동물 모두에 있으며**, 생존 축과 이상 축(마름 추구)의 충돌이라 차원축 주장과도 직결된다. [[lee-2025-hijacked-brain-modern-obesity-cue|restraint 표현형]]이 "동물 모델이 없는 유일한 유형"으로 적힌 것과 짝지으면 인간 특이성 논의까지 이어진다.

---

## 3. 도전적 가설 — 축별 정식화와 반증 조건

### 3.0 세 축을 묶는 한 문장 — 크기에서 임계값으로

제안서의 H1(차원)·H2(시간)·H3(방향)은 각각 좋으나 **셋이 하나의 문장으로 묶이지 않는다**(병렬). 새 제목의 "추구하거나 포기하는"을 살리면 묶인다.

> **삶의 의지는 가치의 총량이 아니라, 축마다 따로 돌아가는 "계속할까/그만둘까" 결정의 집합이다. 생존의 포기와 관계의 포기는 같은 힘이 약해진 것이 아니라, 서로 다른 임계값이 넘어간 것이다.**

**왜 전환인가**: 의지를 **크기(얼마나 남았나)**에서 **임계값(언제 그만두나)**으로 옮긴다. 크기는 종간·개인간 비교가 어렵지만 임계값은 측정된다 — [[concept-goal-commitment]]에 정리된 foraging **patch-leaving**, **marginal value theorem**(Charnov 1976), **momentum = 진행 × 진행률**(Aenugu & O'Doherty 2025)이 그 계산 틀이고, [[grima-2026-a-global-dopaminergic-learning-rate|Grima 2026]]은 시간·보상률 추정 없이도 MVT 같은 행동이 나오는 학습 모델(AQUA)을 마우스에서 구현했다.

세 하위 가설이 전부 임계값의 성질로 번역된다.

| 제안서의 축 | 임계값 언어로 | 측정량 |
|---|---|---|
| **H1 차원** | 임계값이 **축마다 독립적으로** 움직이는가 | 한 개체에서 생존·관계 과제의 이탈 임계값을 따로 추정 |
| **H2 시간** | 임계값이 **과거 경험의 적분으로 설정**되는가 | 중단 직전 수행량을 맞춘 뒤의 재개 확률·잠복기·지속 |
| **H3 방향** | 임계값을 넘는 사건이 **추구 신호의 소멸**인가 **별도의 '중단 신호'**인가 | 추구 지표와 중단 지표의 독립적 변동 |

### 3.1 H1 (차원축) — 축은 분리 가능하되 공통 이득을 공유한다

> 가치 축들은 완전히 직교하지도, 완전히 하나로 종속되지도 않는다. **공통 이득항을 함께 쓰는 층**이 있고 **축에 특이한 회로**가 따로 있다. 공통 이득을 건드리면 가치 공간 전체가 내려앉고, 축 특이 회로를 건드리면 한 축만 내려간다.

**위키 안의 현존하는 유일한 분자 수준 전례** — 생존 축과 관계 축이 한 분자 정의 집단 안에서 중재된다.

| 근거 | 내용 |
|---|---|
| [[korotkova-2026-balancing-acts-lateral-hypothalamic\|Korotkova 2026]] | lateral hypothalamus를 **hunger × anxiety × loneliness 세 동기의 arbitration node**로 격상. LH^LepR 뉴런이 moderate hunger에서 **섭식을 억제하면서 social interaction을 촉진하고 anxiety를 낮춘다** |
| [[petzold-2023-complementary-lateral-hypothalamic-populations\|Petzold 2023]] | LH^LepR과 LH^Nts가 상보적·길항적(LepR = 섭식·음수 억제 + social 촉진 / Nts = 음수 촉진 + social 억제). leptin i.p.가 food-anticipatory LepR subpopulation을 활성하며 social approach까지 촉진 |
| [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal\|Figge-Schlensok 2025]] (1차 자료) | open arm-excited **34% vs closed 8%**(P=1.1e-9, 193 cells/16 mice), **LH에서 LepR 제거 → open arm 체류↓(P=0.0027)**, anorexia 위험 유전자 **Ebf1 공발현만** 불안과 음의 상관(P=0.029) |

⚠️ [[siemian-2021-lateral-hypothalamic-lepr-neurons|Siemian 2021]]은 LH^LepR **ablation**이 불안·운동·섭취를 전혀 안 바꾸고 cue 변별 학습만 막는다고 본다 — 조작 대상·맥락이 달라 조건 의존으로 병기할 것.

**반증 조건**: 세 축이 모든 조작에서 완전히 함께 움직이면 단일 축 모델이 옳다.
⚠️ **필수 통제**: 운동·각성·전반적 정서를 따로 측정해야 한다. 안 하면 "전부 내려갔다"가 공통 이득항이 아니라 **운동 결손**일 수 있다. [[ahmadlou-2025-a-subcortical-switchboard-for-perseverative|Ahmadlou 2025]]가 이 통제의 모범이다(MRN^SERT 억제에서 각성·기본 운동 불변을 따로 보임).

### 3.2 H2 (시간축) — 의지는 수행량이 아니라 보존성이다

> 의지는 사건이 아니라 **상태**이고, 그 시정수는 섭식·보상 반응의 시정수와 다르다. 핵심 측정량은 지금의 수행량이 아니라 **자극이 끊긴 뒤 얼마나 남아 다시 이어지는가**다.

**조작적 정의를 못 박을 것** — 보존성 = **중단 직전 수행량을 맞춘 뒤에도 남는 이력 효과.**
- 측정량: **재개 확률 · 재개 잠복기 · 재개 후 지속시간**
- 설계: 과제 전 경험을 다르게 한 뒤 **중단 직전 수행 수준을 최대한 맞추고**, 같은 중단·같은 재개 기회를 준다.

**위키 근거**: [[lodder-2026-tonic-dopamine-regulates-cell-type-specific-pka|Lodder 2026]](분 단위 tonic DA = 일할 동기의 인과 결정자, phasic 크기는 비예측) · [[concept-will-volition-motivation|Kang 2011의 will = tonic DA 가설]]의 첫 실측 · [[concept-goal-commitment|momentum = 진행 × 진행률]].

**반증 조건**: 중단 후 재점화가 **직전 수행량만으로 완전히 예측되면** 상태 변수는 불필요하다.
⚠️ **필수 구별**: 기억 · 습관 · 피로 회복 · 운동 능력. [[holton-2026-the-adaptive-value-of-stubborn|Holton 2026]]은 "기억·습관·피로 모형을 **넘어서는** 예측력"을 요구한다. 또 '보존성'은 물리적 보존 법칙이나 불변량이 아니라 **중단 이후에도 남는 상태의 영향**이라는 점을 매번 명시할 것.

인간 쪽 자료도 이미 있다 — [[mehrhof-2026-computational-phenotyping-of-effort|Mehrhof 2026]]: T2D에서 effort acceptance bias가 낮아지고 **semaglutide로 회복되지 않았다**(⚠️ 단면 설계). "체중은 돌아왔는데 일할 의지는 안 돌아온다."

### 3.3 H3 (방향축) — 삶이 끊어지는 자리는 한 종류가 아니다 ★

> **의지가 꺾이는 것은 추구 회로가 꺼지는 사건이 아니라, 그만두라는 신호가 켜지는 사건이다.**

- **회로 정체가 이미 나왔다** — [[ahmadlou-2025-a-subcortical-switchboard-for-perseverative|Ahmadlou 2025]]의 **LHb→MRN^VGAT→MRN^SERT 억제**가 "그만두라는 신호"의 첫 구체 후보다. 임계값 언어로는 **LHA^VGAT→MRN이 이탈 임계값을 올리고(고집), LHb→MRN이 내린다(포기)** — 두 입력이 같은 노드(MRN^VGAT)에 반대 부호로 수렴하는 구조가 **H1("공통 이득항 + 축 특이 신호")의 회로 구현 후보**가 된다.
- 반증 가능하다([[azevedo-2020-a-limbic-circuit-selectively-links|Azevedo형 설계]]: 같은 위협에서 능동/수동 조건을 가르고 신호를 비교).
- **치료 표적이 바뀐다** — "추구를 올리기"에서 **"중단 신호를 끄기"**로.
- **신정환 교수팀 환자 자료와 바로 맞물린다** — 같은 도파민 소실에서 의지가 남는 사람과 사라지는 사람의 차이가 **도파민의 양이 아니라 중단 임계값**에 있다는 예측. 부록 C의 예상 질문("도파민이 곧 의지인가")에 대한 가장 좋은 답이기도 하다. 그 팀의 "**촉진 기전과 잃는 기전의 균형**" 가설은 이 임계값 가설과 사실상 같은 주장이므로 **표현을 통일하면 과제 내부 정합성이 올라간다.**

**반증 조건**: 포기(또는 죽음 회피)의 변화가 **언제나 추구 변화의 선형 함수**라면 양방향 모델은 기각된다. 즉 추구를 알 때 포기에 관한 정보가 **별도로 남아야** 한다.
⚠️ 임상 위험(능동적 자기파괴)은 별도의 검증된 절차로 평가하며, 이 좌표계를 진단·위험 판정으로 쓰지 않는다. 동물의 방어행동을 인간의 자살과 동일시하지 않는다.

### 3.4 '이상' 축을 어떻게 다룰 것인가 — 두 길 (§2.4의 귀결)

**길 A — 내용이 아니라 형식으로 정의한다 (위키에 근거 있음, 권고)**

'이상'을 "언어로 보고되는 신념·의미"로 정의하면 사람에게만 있다. 그러나 [[holton-2026-the-adaptive-value-of-stubborn|Holton 2026]]의 세 번째 기능 **동기 비계(scaffolding)**가 형식적 정의를 준다 — **기본 보상과 무관하게 스스로 생성된 목표에 붙는 몰입 bonus.**
- 원형은 **놀이**다(Chu 2024): 아이는 임의로 정한 블록 높이에 몰입하고, 방해하면 좌절하며, 완성 직후 스스로 무너뜨린다. **자기 선택 목표가 스스로 보상을 만들고, 그래서 포기가 혐오적이다.** 36년을 기둥 위에서 산 Simeon Stylites도 같은 틀.
- 같은 리뷰의 **calibration 예측**: **추상 가치에 기반한 목표(등산)가 기본 보상에 기반한 목표(배고픔 해소)보다 몰입 표지가 강해야 한다.**
- → 동물에서 측정 가능한 형태: **자기 선택 목표 vs 외부 보상 목표의 이탈 임계값 차이.** autotelic RL(스스로 목표를 생성하는 agent)이 계산적 대응이다.
- 김형 교수팀 표의 `X`를 `△`로 바꿀 **유일한 길**로 보이고, 그 전환 자체가 20분 토론에서 가장 반응이 올 지점이다.

**길 B — 축마다 사다리 길이를 다르게 선언한다 (정직한 길)**

"세 축을 세 종에 다 걸겠다"가 아니라 **"여기까지가 분자, 여기부터는 인간 전용"**을 설계에 못 박는다. 그러면 공백이 약점이 아니라 **경계 선언**이 되고, 그것이 D의 '분자 철학'이 실제로 할 일이다 — **환원되는 지점과 되지 않는 지점의 경계를 긋는 학문.**

→ **권고: A를 이상 축의 Aim으로 넣고, B를 전체 프레임으로 깐다.**

### 3.5 유한성(Memento mori) — 가장 매력적이고 근거가 가장 없다

유한성·mortality·future time perspective는 **위키에 자료가 전혀 없다.** 다만 [[holton-2026-the-adaptive-value-of-stubborn|Holton 2026]]의 **calibration 예측**이 형식적으로 같은 모양이다 — 몰입 정도는 전역 변수(대안의 수, 정보탐색 비용, 유혹 환경)에 따라 조정되어야 한다. '남은 시간'을 그 전역 변수 목록에 넣는 것, 즉 **"시간 지평은 이탈 임계값을 조정하는 전역 변수다"**로 쓰면 철학적 울림을 유지하면서 기존 계산 틀 안에서 검증 가능해진다.
- 예측은 **의지 총량의 일률적 증가가 아니라 가치 가중치의 재배분**이어야 한다(제안서도 그렇게 적었다).
- 인간 관찰 연구에서 먼저 쓸 것. 질병 중증도·통증·우울과 구별되는 변화인지를 반복 측정으로 가른다.

### 3.6 기각 조건 한눈에

| 가설 | 지지할 관찰 | 기각·축소할 결과 |
|---|---|---|
| **H1 차원** | 공통 변화와 **선택적 해리**가 재현 | 단일 축이 설명·예측에 충분 |
| **H2 보존성** | 과거 이력이 재개를 **추가** 예측 | 직전 수행만으로 충분히 예측 |
| **H3 방향** | 추구와 포기가 **독립적 정보**를 제공 | 포기가 추구의 선형 함수로 충분히 설명 |

공통 원칙: 단순한 모델보다 **더 잘 예측**하고, **독립 자료와 조작에서 재현**되어야 한다. 탐색과 확증을 나누고, 같은 개체의 자료가 학습과 검증에 섞이지 않게 하며, 복잡도 벌점을 포함한다.

---

## 4. 탐색전략 — 네 접근은 좋고, 세 곳을 보강

### ⓞ 축 × 접근 매트릭스 — 방향축에 방법이 없다 ★

제안서 B의 네 접근이 **A의 어느 축을 겨누는지** 대조하면 공백이 드러난다.

| B의 접근 | 차원축 | 시간축 | 방향축 |
|---|---|---|---|
| **B.1** 핵심 분자 신호의 시공간적 조절 (nucleus accumbens 도파민 수용체 광조절, 레버 누르기) | △ 축 특이성 미검증 | △ 급성/만성 설계 추가 시 | **✗** |
| **B.2** 설치류–영장류–인간 비교생물학 (상태공간 모델링) | **O** | △ | **✗** |
| **B.3** 도파민 고갈 환자 종단 추적 | O (누가 유지되는가) | **O** (종단 = 보존성) | **✗** |
| **B.4** 파운데이션 모델 잠재구조 발견 | **O** (축의 개수) | △ | **✗** |

- **방향축을 직접 겨누는 접근이 하나도 없다.** 제목에 '포기'를 넣었는데 방법에는 포기 측정이 없다 — 심사의견의 "질문과 방법 사이 간극"이 정확히 여기다. 반면 **차원축에는 세 접근이 몰려 있다**(B.2·B.3·B.4).
- **가장 값싼 보완 = 모든 행동 과제에 abandon/switch 조건**(아래 ③). [[concept-effort-based-decision-making]]과 [[holton-2026-the-adaptive-value-of-stubborn]]이 **둘 다 명시적으로** 처방한다.
- **B.1은 추가 비용 0으로 방향축에 걸칠 수 있다** — "레버 누르기"를 **progressive ratio breakpoint**로 바꾸면 된다. [[lodder-2026-tonic-dopamine-regulates-cell-type-specific-pka|Lodder 2026]]의 breakpoint 정의가 "**10분 이상 중단 전**까지 얻은 보상 수"이므로 **정의상 이미 이탈 사건**이고, 같은 광조절 실험에서 추구(poke rate)와 포기(breakpoint)를 **동시에** 얻는다.
- **B.1의 축 특이성도 아직 없다**(§4 끝의 '가장 큰 단일 위험' 참조) — 도파민 수용체 신호 조작이 생존 축만 바꾸는지, 세 축을 함께 내리는지가 H1의 핵심 검정인데 현재 설계는 레버 누르기 하나뿐이다. 최소 보완은 **같은 조작에서 사회적 접근 과제를 병행**하는 것이다.


### ① "같은 과제"가 아니라 "같은 파라미터"가 번역 단위다
사진판 슬라이드 11의 제목은 "같은 과제, 같은 신호"인데 15분판 슬라이드 12는 올바르게 "종에 맞는 과제로 측정하고 **공통 계산량**(노력 비용·선택·재개)을 비교"로 적는다. **둘이 충돌하므로 "같은 파라미터"로 통일할 것.**

그리고 이것은 새 약속이 아니라 **랩의 실적**이다 — [[kim-2024-normative-framework-dissociates-need]]는 `N(t)=D+PC`, `M(t)=∫[a·N−Leak]dt`, `B(t)=M−K`를 먼저 써 놓고 광계측 신호가 **어느 변수인지**를 AIC·LOO·inverted model로 판정했다. 심사의견의 "질문과 방법 사이 간극"에 대한 답은 이 선례를 전면에 두는 것이다.

### ② 파운데이션 모델 축의 성공 기준을 identifiability로 못 박을 것 ★
"축의 개수와 경계를 자료가 말하게 한다"로만 쓰면 반드시 "모델이 찾은 축이 실체라는 보장은?"이 온다. [[concept-joint-brain-behaviour-modelling]]에 답이 있다.
- **contrastive 결합 모델(CEBRA 계열)은 선형 identifiability가 보장**되어 seed·부분집합·개체·모달리티를 바꿔도 latent가 선형변환까지 복원된다 → **종간·개체간 비교가 수학적으로 의미를 갖는다.** (VAE 계열은 이 보장이 없어 cross-session 일관성이 떨어진다.)
- 더 중요한 것: 행동 변수를 auxiliary label로 넣었을 때 **관계가 없으면 embedding이 초구면 균일분포로 붕괴**한다 → **음성 결과가 해석 가능한 형태로 나온다.** "세 축이 실제로 세 개인가"를 붕괴 여부로 판정할 수 있다. 별첨 도식의 **Falsification Gate를 연구진의 검토가 아니라 이 수학적 성질로 구현**하는 것이 가장 강한 설계다.
- 같은 페이지가 경고하는 경계도 함께 쓸 것: **디코딩 정확도는 기전 통찰의 증거가 아니다.** 평가 기준으로 [[mathis-2026-joint-modelling-of-brain-and|trustworthiness scorecard]](consistency·robustness·identifiability + XAI·RSA/CKA)를 **미리 선언**하면 "AI가 찾은 축을 믿을 수 있나"에 선제 답이 된다.
- 종별 FM 후보로 위키에 있는 것: [[mice-2026-multi-animal-interaction-context-encoder|MICE]](생쥐 keypoint·사회 상호작용) · [[liu-2025-castle-a-training-free-foundation-model|CaSTLe]] · [[concept-computational-ethology]].

### ③ 빠진 설계 하나 — effort 과제에 abandon/switch 조건 ★
제목에 '포기'가 들어왔는데 네 접근의 측정량은 여전히 추구 쪽(breakpoint·선택·노력)이다. 위키가 이미 처방을 적어 두었다 — [[concept-effort-based-decision-making]]과 [[holton-2026-the-adaptive-value-of-stubborn]]이 둘 다 "**effort 과제에 switch/abandon 조건을 넣으면 동기 결손과 감시 결손을 분리할 수 있다**"고 명시한다.
- 측정량: **재개 확률 · 이탈 잠복기 · 이탈 직전 진행률(momentum) · 이탈 후 다른 축으로의 전환.**
- 6개월 안에 가장 값싸게 넣을 수 있고, **새 제목을 방법으로 번역하는 유일한 항목**이다. 세 종 모두에서 가능하다([[lodder-2026-tonic-dopamine-regulates-cell-type-specific-pka|PR breakpoint 자체가 이미 이탈 사건]]).

### 전략의 가장 큰 단일 위험 — 관계·이상 축을 조작할 분자 표적이 없다
생존 축은 분명하다(nucleus accumbens 도파민 수용체 신호, tonic/phasic, D1/D2). 관계 축에는 **위키에 후보가 있고 랩 전문성과 정확히 겹친다.**

| 근거 | 내용 |
|---|---|
| [[korotkova-2026-balancing-acts-lateral-hypothalamic\|Korotkova 2026]] | lateral hypothalamus를 **hunger × anxiety × loneliness 세 동기의 arbitration node**로 격상. LH^LepR 뉴런이 moderate hunger에서 **섭식을 억제하면서 social interaction을 촉진하고 anxiety를 낮춘다** |
| [[petzold-2023-complementary-lateral-hypothalamic-populations\|Petzold 2023]] | LH^LepR과 LH^Nts가 상보적·길항적(LepR = 섭식·음수 억제 + social 촉진 / Nts = 음수 촉진 + social 억제). leptin i.p.가 food-anticipatory LepR subpopulation을 활성하며 social approach까지 촉진 |
| [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal\|Figge-Schlensok 2025]] (1차 자료) | open arm-excited **34% vs closed 8%**(P=1.1e-9, 193 cells/16 mice), **LH에서 LepR 제거 → open arm 체류↓(P=0.0027)**, anorexia 위험 유전자 **Ebf1 공발현만** 불안과 음의 상관(P=0.029) |

→ **생존 축과 관계 축이 한 분자 정의 집단 안에서 중재되는 사례가 이미 있다.** H1("공통 이득항 + 축 특이 신호")의 **현존하는 유일한 분자 수준 전례**이고, 사진판 슬라이드 13에 열어 둔 질문("관계·이상 차원을 동물에서 어떻게 측정할 것인가")에 대한 구체적 답이다. arbitration 시냅스의 검증 template도 있다 — [[jamieson-2026-neural-circuits-for-mammalian-parental|Jamieson 2026]]의 AgRP/NPY→MPOA 억제(양육 vs 섭식·스트레스).

⚠️ 단 [[siemian-2021-lateral-hypothalamic-lepr-neurons|Siemian 2021]]은 LH^LepR **ablation**이 불안·운동·섭취를 전혀 안 바꾸고 cue 변별 학습만 막는다고 본다 — 조작 대상·맥락이 달라 조건 의존으로 병기할 것.

---

## 5. 대안적 미래

### (1) '동기 안전성 약리학'은 전망이 아니라 이미 현재다 ★
- [[mehrhof-2026-computational-phenotyping-of-effort|Mehrhof 2026]]: T2D에서 effort **acceptance bias가 낮아지고 semaglutide로 회복되지 않았다**(⚠️ 단면 설계). 즉 **"체중은 빠졌는데 일할 의지는 돌아오지 않았다"가 이미 사람 자료로 보고된 상태**다.
- 여기에 [[bluher-2026-obesity-management-medications-the|Blüher 2026]]의 계열 경고를 더하면, 이 항목이 **미래 전망에서 현재 진단으로** 바뀐다. GLP-1RA가 수억 명 규모로 쓰이는 지금 "이 약이 어느 축을 얼마나 내리는가"를 사전 표시하는 체계는 가정이 아니라 **규제 공백**이다.
- 측정 도구의 원형도 있다: [[concept-effort-based-decision-making|acceptance bias·effort sensitivity]] · [[concept-anhedonia|anhedonia의 예측 단계 결손]].

### (2) '의지 조절학'의 표적은 '추구를 올리기'가 아니라 '포기를 늦추기'다
- 추구를 올리는 약은 이미 있고 부작용도 알려져 있다(도파민 작용제 → 충동조절장애; [[concept-compulsion]]).
- 반면 **"그만두라는 신호"를 표적으로 한 약은 없다.**
- 단, Holton 2026의 역설이 경고한다 — 포기 능력은 일반 인구에서 웰빙과 정비례하지만 **우울 위험군에서는 우울과 정비례**한다. **포기를 일률적으로 억제하면 해롭다.**
- → 의지 조절학의 첫 규범은 "의지를 올린다"가 아니라 **"어느 축에서 언제 그만두는 것이 적응적인가를 먼저 정한다"**가 되어야 한다. 제안서의 야심("특정 의지만 선택적으로 치료 — 학문에 대한 의지·부성애·자살 의지")에 윤리적 바닥을 깔아 주는 문장이다.

### (3) 분자 철학 — 첫 사례는 '포기'여야 한다
제안서는 분자 철학(Molecular Philosophy)의 첫 사례로 '삶의 의지'를 들고 자유의지·의미·행복·자아로 확장한다고 쓴다. 더 좁혀서 **'포기'를 첫 사례로 두는 쪽이 유리하다** — 이미 계산 틀([[concept-goal-commitment]]), 임상 표현형(apathy 역설), 분자 증거([[azevedo-2020-a-limbic-circuit-selectively-links|LS^Nts]])가 모두 있는 유일한 철학 개념이기 때문이다.

### (4) 두 그랜드 퀘스트를 한 프로그램으로
[[overview-grand-quest-feeding-as-learning]]의 중심 명제는 "섭식 회로의 1차 기능은 섭취량 조절이 아니라 지연 결과에 대한 credit assignment"다. 새 퀘스트와 이렇게 이어진다 — **그 학습이 설정하는 것이 바로 '계속할까/그만둘까'의 임계값이다.** 두 제안이 경쟁하지 않고 한 프로그램이 된다.

섭식판에서 도달했던 "비만은 개인의 실패가 아니라 **환경이 뇌에 쓴 기록**"이라는 문장이 삶 전체로 확장되면: **"의지가 약해서"가 "그만두라는 신호가 먼저 켜졌다"로 바뀐다.** 자살·고립·무기력에 대해 이 문장이 갖는 사회적 무게가, 식락학에서 비만에 대해 가졌던 무게와 같은 종류다.

---

## 6. 공동연구팀 자산 지도 (raw 자료 기반, 위키 교차 확인)

| 연구자 | raw 자료가 말하는 역량 | 위키 안의 받침점 | 공백 |
|---|---|---|---|
| **최형진** (뇌인지과학과) | NMPU 이론 · 인간 fMRI·약물 RCT · DTx | [[concept-need-motivation-pleasure-utility]] · [[kim-2024-normative-framework-dissociates-need]] · [[person-choi-hyung-jin]] | — |
| **김형** (생명과학부) | 영장류 **subthalamic nucleus** 가치기반 행동, single-unit·LFP, D1/D2 길항제 국소 주입 | 영장류 플랫폼은 [[ha-2024-hypothalamic-neuronal-activation-non-human]]뿐 — **STN 자료 위키에 없음** | STN 1차 문헌 미수집 |
| **성지혜** (의과대학) | 형광 센서(DA·5-HT·orexin·adrenaline) + **OptoXR**(rhodopsin–GPCR 키메라, 신경전달과정 특이 광유전학) | [[lodder-2026-tonic-dopamine-regulates-cell-type-specific-pka]]가 "왜 수용체 층인가"를 받침 | OptoXR 1차 문헌 위키에 없음 |
| **신정환** (의과대학) | 파킨슨 — 도파민 신경 소실 ↔ 무의욕·apathy, 자살률(Costello 2023 · Jeong 2022), "촉진 기전과 잃는 기전의 균형 가설" | [[concept-anhedonia]] · [[concept-effort-based-decision-making]] · [[concept-will-volition-motivation]] | **Costello 2023·Jeong 2022 위키에 없음** |
| **차지욱** (심리학과) | raw 자료에 내용 없음 | — | **역할·역량 자료 없음** |

> 신정환 교수팀의 "**촉진 기전과 잃는 기전의 균형**" 가설은 §3의 임계값 가설과 사실상 같은 주장이다. 두 표현을 통일하면 과제 내부 정합성이 올라간다.

---

## 7. 정직한 공백 — 위키·raw 어디에도 자료 없음

| 항목 | 상태 |
|---|---|
| 유한성·memento mori의 실증 문헌 | **자료 없음** — 제안서의 가장 매력적인 주장에 근거 0 |
| 파킨슨 apathy·자살률 (Costello 2023 · Jeong 2022) | 위키 없음 (신정환 pptx에 인용만) |
| 말기 환자 47% 삶의 의지 증가 | 출처 미확인, 위키 없음 |
| OECD 자살률 24.9 / WHO 87만 | 외부 통계, 위키 없음 |
| **단식투쟁**(제안서의 역방향 사례) | **검색 0건**(2026-11-23 확인) → §2.4의 권고대로 **거식증**(위키 21개 페이지, ABA 모델 회로 있음)으로 교체할 것 |
| 일벌 치명적 방어행동 · 문어 산란 후 자기희생 | **자료 없음** — 토론에서 출처를 물으면 막힘 |
| 영장류 subthalamic nucleus 가치기반 행동 | 위키 없음 |
| '이상' 축의 동물 측정법 | 위키 전체에 없음 — §3의 '몰입 bonus' 우회가 유일한 후보 |

### ✅ 해결됨 (2026-11-23) — Ahmadlou 2025 Nature
*A subcortical switchboard for perseverative, exploratory and **disengaged** states.* 1순위 ingest 권고였고 **2026-11-23에 들어왔다** → [[ahmadlou-2025-a-subcortical-switchboard-for-perseverative]]. "포기에 전용 신경 구조가 있다"는 주장이 **가설에서 동정된 회로로** 바뀌었다(§2 통념 ② 표와 §3에 반영). 함께 생긴 새 과제는 **2026-11-23 위키 확인으로 한 번 좁혀졌다**. 처음 적은 질문은 "`LH^LepR→MRN` 투사가 존재하는가"였으나, 위키에 그 투사는 **0건**이고 주변 자료는 오히려 부정적이다 — LepR/Nts 집단의 raphe 투사는 **dorsal raphe(DR)** 로 기록돼 있고([[bonnavion-2016-hubs-and-spokes-of]]: "Nts–LepRb 세포는 DR·VTA로 강하게 투사"), 위키가 MRN 투사로 적은 LH 집단은 **MCH(LepR 미발현, 4편 음성)** 뿐이다([[overview-lateral-hypothalamus-synthesis]]·[[chen-2025-the-integrated-function-of-the]]). 반면 형식적으로 가장 닮은 선례는 MRN이 아니라 DR이다 — [[liu-2023-an-iterative-neural-processing|Liu 2023]]의 **LH = 조각 개시 / DR^GABA = 접촉 유지**(R=0.908)가 Ahmadlou의 "LH^VGAT→MRN^VGAT 억제 → 고집"과 같은 문법이다. → 수정된 질문: **"LH^LepR의 raphe 투사는 DR인가 MRN인가 둘 다인가, 그리고 두 핵이 같은 '지속' 문법을 쓰는가"**. 한 줄로 일반화하면 — **DR과 MRN을 구분해 역추적한 LH 자료가 위키에 0건**이고, 분자 쪽 입구(LepR)와 기능 태깅 쪽 입구(Cal-Light ensemble)가 **같은 빈칸에서 만난다**([[concept-lh-gabaergic-neurons]] §5-7에 같은 결론이 정리돼 있다; ⚠️ 위키가 dorsal raphe를 `DR`·`DRN`, median raphe를 `MRN`·`MRR`로 섞어 써 이 혼동이 쉬워진다)([[concept-lh-gabaergic-neurons]]·[[lee-2023-lateral-hypothalamic-leptin-receptor]]).

### 남은 ingest 권고 (2순위)
Chu & Schulz 2022(투자 없는 몰입) · Holton 2024 Nat Hum Behav(frustration > temptation 비대칭) · Aenugu & O'Doherty 2025(momentum) · Costello 2023·Jeong 2022(파킨슨 apathy·자살률, 신정환 교수팀 인용).

---

## 8. 제출용 5문항 답안 (2026-11-23)

> **§1–§5와의 관계**: 앞 절들은 제안서 초안을 **평가하고 교체를 권고**하는 작업용 서술이다. 이 절은 그 결론만 **제출 양식에 바로 쓸 수 있는 산문**으로 모은 것이다. 논증 과정은 §1–§5, 근거 등급과 공백은 §7을 볼 것. 중복 서술을 피하려고 여기서는 **결론과 한 문장 표현만** 적는다.

### 8.1 질문의 제기 — 왜 지금인가

**기술적 (1순위)**: 올해 처음으로 '의지'에 해당하는 느린 상태 변수를 측정·조작할 수 있게 되었다. [[concept-will-volition-motivation|Kang 2011]]의 "의지 = tonic dopamine 반응준비성"은 위키에서 **"직접 검증한 실험 없음"** 으로 닫혀 있었는데, [[lodder-2026-tonic-dopamine-regulates-cell-type-specific-pka|Lodder & Sabatini 2026]]이 분 단위 tonic DA를 절대값으로 재고 양방향 조작해 **일할 동기를 인과 결정**했다(phasic 크기는 비예측). 그 논문의 세포타입 비대칭(tonic → D2R-SPN PKA 직접 / D1R-SPN 간접)은 **축이 갈리는 층이 수용체·세포내 신호 층**임을 뜻하고, 그 층을 직접 조작하는 기술이 성지혜 교수팀의 OptoXR이다.

**학문적**: 보상·동기 연구 반세기가 생존을 향한 행동을 해부했으나 **정반대 방향의 사례는 어디에도 속하지 못한다.** 측정 단위가 없는 현상은 연구 대상이 되지 못하고, 연구 대상이 아닌 것은 치료 표적이 되지 못한다.

**사회적**: 2025년 한국 OECD 연령표준화 자살률 24.9(보고서 수록 평균 10.9), 10–40대 사망원인 1위가 질병이 아님. WHO 사회적 연결 위원회의 연간 87만 명 연관 보고. ⚠️ 이것은 **"왜 한국에서"의 답이지 "왜 지금"의 답이 아니다** — 분리해 쓸 것(§1-(3)).

**경제·산업적**: 중추 섭식 표적의 신경정신 위험은 **계열 문제**다([[bluher-2026-obesity-management-medications-the|Blüher 2026]]: rimonabant·sibutramine·lorcaserin 철수). 그리고 이미 현재의 문제다 — [[mehrhof-2026-computational-phenotyping-of-effort|Mehrhof 2026]]에서 T2D의 노력 수용편향이 낮아지고 **semaglutide로 회복되지 않았다**(⚠️ 단면). **"체중은 빠졌는데 일할 의지는 돌아오지 않았다"가 이미 사람 자료다.**

### 8.2 기존의 통념

> **한 문장: 삶의 의지는 생존을 향한 하나의 힘이고, 그 크기는 지금 하는 행동으로 읽히며, 포기는 그 힘이 0이 된 상태다.**

그런데 **의심되지 않는 것은 "의지가 하나다"가 아니다**(그건 [[redish-2016-the-computational-complexity-of-valuation|Redish 2016]]이 이미 흔들었다). 진짜 전제는 측정에 관한 것이다.

> **한 마디: 의지의 차원과 방향은, 측정 가능한 행동이 있는 만큼만 존재한다.**
> 그래서 생존은 축이 되고, 관계는 겨우 축이 되고, **이상은 축이 되지 못한다.** 추구는 측정되고 **포기는 측정되지 않는다.**

이 전제는 틀려서 생긴 것이 아니라 **측정할 수 있는 것만 남기는 과정에서** 생겼다(항상성 → 추동감소 → 도파민 예측오류가 한 순간의 신호를 측정 단위로 못 박았다). 세 축으로 펼치면 — **차원**: 행동이 있는 축만 축이다(김형 교수팀 표가 이 전제의 증거) · **시간**: 의지는 한 시점의 사건으로 환원된다 · **방향**: **포기는 추구의 부재다**.

그 결과 학계는 한 가지를 묻지 않게 되었다 — **한 가치가 무너진 사람에게 다른 가치가 남아 있는 것은 위로가 아니라 구조일 수 있다.**

### 8.3 도전적 가설

> **한 문장: 삶의 의지는 가치의 총량이 아니라, 축마다 따로 돌아가는 "계속할까 / 그만둘까" 결정의 집합이다. 생존의 포기와 관계의 포기는 같은 힘이 약해진 것이 아니라, 서로 다른 임계값이 넘어간 것이다.**

**사고의 전환이 일어나는 두 문장**:
> **의지가 꺾이는 것은 추구 회로가 꺼지는 사건이 아니라, 그만두라는 신호가 켜지는 사건이다.**
> **의지는 남아 있는 양이 아니라, 다시 켜질 수 있는 구조다.**

**H1 차원** = 공통 이득항을 공유하는 층 + 축 특이 회로 (임계값이 축마다 독립적으로 움직이는가) · **H2 시간** = 의지는 사건이 아니라 상태, 핵심 측정량은 중단 뒤 다시 이어지는 정도 (임계값이 과거 경험의 적분으로 설정되는가) · **H3 방향** = 포기는 추구의 거울상이 아니라 자기 기전을 가진다 (임계값을 넘는 사건이 추구의 소멸인가 별도의 중단 신호인가).

**올해 바뀐 점 — 가설이 이미 회로 근거를 갖는다**: [[ahmadlou-2025-a-subcortical-switchboard-for-perseverative|Ahmadlou 2025]](Nature)에서 median raphe nucleus의 세 세포타입이 고집·탐색·포기를 나눠 맡고, **MRN^SERT 억제가 각성·운동을 바꾸지 않으면서 포기만 55%로 올린다**("졸려서"가 아니다). **필요·충분 구조가 축마다 달라** 추구와 포기가 한 축의 양끝이 아니며, 포기에는 전용 상류 입력(LHb→MRN)이 있다. 임계값 언어로 **LH→MRN이 이탈 임계값을 올리고 LHb→MRN이 내린다.** 보강: [[holton-2026-the-adaptive-value-of-stubborn|Holton 2026]]의 apathy 역설·포기 역설, [[azevedo-2020-a-limbic-circuit-selectively-links|Azevedo 2020]]의 능동 도피 특이성.

**유한성**: "죽음은 영점이 아니라 계수다"는 가장 매력적이고 **근거가 가장 없다**(자료 0건). 안전한 정식화는 **"시간 지평은 이탈 임계값을 조정하는 전역 변수다"**이며, 예측은 총량 증가가 아니라 **가치 가중치의 재배분**이다.

**기각 조건**: 세 축이 모든 조작에서 함께 움직이면 H1 기각 · 재점화가 직전 수행량만으로 예측되면 H2 기각 · 포기가 언제나 추구의 선형 함수면 H3 기각.

### 8.4 탐색전략

> **한 줄: 기존 접근은 하나의 행동을 설명하는 회로를 찾는다. 우리는 여러 행동을 가로지르는 좌표계를 찾고, 그 좌표를 분자 수준에서 직접 흔들어 인과를 검증한다. 그리고 번역의 단위는 과제가 아니라 파라미터다.**

**측정의 순서를 뒤집는 것**이 결정적 차이다 — 지금까지는 행동을 먼저 고르고 그 회로를 찾았고, 이 연구는 좌표계를 먼저 세우고 어떤 행동이 그 좌표의 어디에 놓이는지를 뒤에 묻는다. 이것은 새 약속이 아니라 **랩의 실적**이다([[kim-2024-normative-framework-dissociates-need]]: 수식을 먼저 쓰고 광계측 신호가 어느 변수인지를 모델 비교로 판정).

네 접근의 차별점은 §4 표에, 반드시 넣어야 할 세 보완은 §4 ①–③에 있다. 요지만 — ⓐ **모든 과제에 abandon/switch 조건**(접근 ①에서는 레버 누르기를 progressive ratio breakpoint로 바꾸면 추가 비용 0: 그 정의가 이미 이탈 사건이다), ⓑ **"같은 과제"가 아니라 "같은 파라미터"**로 종을 잇는다, ⓒ 파운데이션 모델의 성공 기준을 **linear identifiability와 embedding 붕괴**로 못 박아 Falsification Gate를 수학적 성질로 구현한다(단 디코딩 정확도는 기전 통찰의 증거가 아니다).

**축마다 사다리 길이가 다르다는 것을 설계에 못 박는다**(§2.4) — 생존 **완전** / 관계 **부분** / 이상 **없음**. "다 하겠다"가 아니라 **"여기까지가 분자, 여기부터는 인간 전용"**을 선언하는 쪽이 방어에 유리하고, 그것이 분자 철학이 실제로 할 일이다. 이상 축에는 길이 하나 있다 — '이상'을 **"기본 보상과 무관하게 스스로 생성된 목표에 붙는 몰입"**으로 정의하면 동물에서 **자기 선택 목표 vs 외부 보상 목표의 이탈 임계값 차이**로 측정된다(§3.4 길 A).

**관계 축에는 이미 분자 표적 후보가 있다** — lateral hypothalamus LepR 뉴런이 적당한 배고픔에서 섭식을 억제하면서 사회적 상호작용을 촉진하고 불안을 낮춘다([[korotkova-2026-balancing-acts-lateral-hypothalamic]]·[[petzold-2023-complementary-lateral-hypothalamic-populations]]·[[figge-schlensok-2025-a-lateral-hypothalamic-neuronal]]). **생존 축과 관계 축이 한 분자 정의 집단에서 중재되는 현존하는 유일한 전례**다.

### 8.5 대안적 미래

**새로 열릴 분야 넷**
1. **동기 안전성 약리학** — 모든 중추 작용 약물에 어느 축을 얼마나 내리는지 사전 표시. 효능과 독성 사이의 제3의 축. GLP-1RA가 수억 명 규모로 쓰이는 지금 **전망이 아니라 규제 공백**이다.
2. **의지 조절학** — 표적이 "추구를 올리기"가 아니라 **"포기를 늦추기"**여야 한다. 추구를 올리는 약은 이미 있고 부작용도 알려져 있지만 중단 신호를 표적으로 한 약은 없다. ⚠️ Holton의 역설(우울 위험군에서는 포기가 우울과 정비례)이 윤리적 바닥을 요구한다 — 첫 규범은 **"어느 축에서 언제 그만두는 것이 적응적인가를 먼저 정한다"**.
3. **분자 철학** — 첫 사례는 **'포기'**여야 한다(계산 틀·임상 표현형·분자 증거가 모두 갖춰진 유일한 철학 개념). 본업은 환원이 아니라 **환원되는 지점과 되지 않는 지점의 경계를 긋는 일**이다.
4. **의지 바이오마커 종단 지표학** — 생존 기간과 증상 점수뿐이던 결과변수 지형에 새 축.

**임상의 질문이 교정된다**: "의지가 얼마나 남았나" → **"어느 축이 꺼졌고, 그 축은 다시 켜질 수 있는가."** 개입이 축별로 나뉘고, 말기 돌봄의 목표는 유지가 아니라 **다시 켜질 수 있는 축을 남기는 일**이 된다.

**세상을 보는 눈**: **"의지가 약해서"가 "그만두라는 신호가 먼저 켜졌다"로 바뀐다.** 자살·고립·무기력을 개인의 도덕적 결함으로 돌려 온 시선이 **측정하고 개입할 수 있는 조건**에 대한 질문으로 옮겨간다. 의지력은 특질이 아니라 **상태**이고, 상태는 개인의 책임이 아니라 **조건의 함수**다.

### 8.6 쓸 때 조심할 곳
근거 등급과 공백은 §7 표를 그대로 쓸 것. 특히 **말기암 47%**(출처 미확인) · **단식투쟁**(위키 0건 → **거식증**으로 교체) · **일벌·문어**(자료 없음) · **유한성**(자료 없음) · **영장류 subthalamic nucleus**(위키 없음)는 핵심 근거로 쓰면 토론에서 막힌다.

---

## 한 문장 요약
과제의 통념 절은 이미 학계가 버린 전제(단일성)에 기대어 약하고(§2), 제목에 새로 들어온 **'포기'** 가 그 자리를 채울 수 있는 유일한 전제다 — 포기는 추구의 0이 아니라 **전용 기전을 가진 능동적 사건**이라는 증거가 계산([[holton-2026-the-adaptive-value-of-stubborn]])·분자([[azevedo-2020-a-limbic-circuit-selectively-links]])·**회로**([[ahmadlou-2025-a-subcortical-switchboard-for-perseverative]]) 세 층에 이미 있다(§3). 의지를 **크기에서 이탈 임계값으로** 옮기면 세 하위 가설이 하나의 측정량으로 묶이고(§3), 번역 단위는 과제가 아니라 **파라미터**가 되며(§4), 종결점은 체중·설문에서 **"어느 축에서 언제 그만두는가"**로 바뀐다(§5). 가장 약한 고리는 숨기지 않는 편이 낫다 — **'이상' 축과 유한성에는 아직 측정법이 없다.** 그것이 약점이 아니라 그랜드 퀘스트가 필요한 이유다.

## 관련 페이지
- [[overview-grand-quest-feeding-as-learning]] — **자매 페이지**(섭식판 그랜드 퀘스트). 그쪽의 "섭식 = credit assignment"가 설정하는 것이 이쪽의 **이탈 임계값**이라는 읽기로 두 제안이 한 프로그램이 된다.
- [[concept-will-volition-motivation]] — '의지'의 두 뜻(기본 준비성 vs 자기통제) 지도. 본 페이지의 임계값 가설은 그 ①(tonic 반응준비성)에 **'중단 신호'라는 제3 성분**을 더하려는 시도다.
- [[holton-2026-the-adaptive-value-of-stubborn]] · [[concept-goal-commitment]] — §2 통념 ②와 §3 임계값 가설의 1차 근거(apathy 역설·disengagement 역설·patch-leaving·momentum·동기 비계).
- ★ [[ahmadlou-2025-a-subcortical-switchboard-for-perseverative]] — **"그만두라는 신호"의 회로 정체**(median raphe switchboard; LHA^VGAT→MRN=고집, LHb→MRN^VGAT→MRN^SERT 억제=포기). §7의 1순위 ingest가 해결된 결과.
- [[azevedo-2020-a-limbic-circuit-selectively-links]] — "능동 대처와 수동 포기가 서로 다른 분자 신호를 쓴다"의 현존 증거(LS^Nts, 능동 도피 특이).
- [[lodder-2026-tonic-dopamine-regulates-cell-type-specific-pka]] — §1의 "왜 지금": tonic DA가 일할 동기를 인과 결정하고, 축 분리가 일어나는 층이 수용체·세포내 신호 층임을 보인다.
- [[korotkova-2026-balancing-acts-lateral-hypothalamic]] · [[petzold-2023-complementary-lateral-hypothalamic-populations]] · [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal]] — §4의 '관계 축' 분자 표적 후보(LH^LepR의 hunger×anxiety×social arbitration).
- [[redish-2016-the-computational-complexity-of-valuation]] — §2에서 '단일성 전제'가 방어 불가인 이유(common currency 폐기 고려).
- [[concept-joint-brain-behaviour-modelling]] · [[mathis-2026-joint-modelling-of-brain-and]] — §4②의 identifiability·embedding 붕괴·trustworthiness scorecard.
- [[concept-effort-based-decision-making]] · [[mehrhof-2026-computational-phenotyping-of-effort]] — §4③의 abandon 조건과 §5의 '동기 안전성' 현재 증거.
- [[kim-2024-normative-framework-dissociates-need]] · [[concept-need-motivation-pleasure-utility]] — §4①의 모델-우선 선례와 이론 backbone.
- [[bluher-2026-obesity-management-medications-the]] · [[concept-endocannabinoid-system]] · [[concept-one-shot-learning]] — §1(2)의 리모나반트 재해석("학습 규칙을 껐다").
- [[concept-anhedonia]] · [[concept-compulsion]] — 임계값 양방향 고장의 임상 표현형(과소 지속 / 과잉 지속).
- [[jamieson-2026-neural-circuits-for-mammalian-parental]] — 축 간 arbitration 시냅스의 검증 template(AgRP/NPY→MPOA).
- [[mice-2026-multi-animal-interaction-context-encoder]] · [[concept-computational-ethology]] · [[liu-2025-castle-a-training-free-foundation-model]] — 종별 파운데이션 모델 후보.
- [[ha-2024-hypothalamic-neuronal-activation-non-human]] — 위키 안의 유일한 영장류 플랫폼(김형 교수팀 STN 축의 공백과 대비).
- [[overview-future-research-directions]] · [[overview-research-proposals]] — 상위 로드맵과 과제별 전개.
- [[person-choi-hyung-jin]] — 연구책임자·랩 역량 매트릭스.
