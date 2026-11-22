---
title: "고집·탐색·포기 상태의 subcortical switchboard — median raphe nucleus (Ahmadlou 2025)"
type: paper
created: 2026-11-23
updated: 2026-11-23
source: "raw/2025 Nature. A subcortical switchboard for perseverative, exploratory and disengaged states.pdf"
authors: [Mehran Ahmadlou, Maryam Yasamin Shirazi, Pan Zhang, Isaac L. M. Rogers, Julia Dziubek, Margaret Young, Sonja B. Hofer]
year: 2025
journal: "Nature 641:151–158 (2025-05-01); doi:10.1038/s41586-025-08672-1 — Sainsbury Wellcome Centre, UCL. 접수 2024-01-11, 승인 2025-01-17, 온라인 2025-03-05. Open access"
ingested_by: claude-opus5
aliases: [MRN switchboard, median raphe nucleus, MRN^VGAT, MRN^SERT, MRN^VGluT2, perseveration exploration disengagement, Ahmadlou 2025]
---

> [!takeaway] 연구 방향 관점의 핵심
> **"포기(disengagement)는 추구의 부재가 아니라 전용 회로가 켜지는 사건"임을 세포타입 수준에서 보인 논문.** median raphe nucleus(MRN)의 세 주요 세포타입이 서로 보완적으로 **고집(perseverance) · 탐색(exploration) · 포기(disengagement)**를 나눠 맡는다 — GABAergic(~60%) **억제**가 고집을, VGluT2⁺(~25%) **활성**이 탐색을, serotonergic(5–10%) 활성이 **과제 참여(engagement) 자체**를 담당한다. 상류가 결정적이다: **lateral hypothalamus GABA(LHA^VGAT)→MRN**이 강한 양성 valence를 실어 MRN^VGAT를 억제해 고집을 만들고, **lateral habenula(LHb)→MRN**이 음성 valence를 실어 MRN^VGAT 일부를 거쳐 MRN^SERT를 억제해 포기를 만든다.
> 사용자 연구에 닿는 지점 넷. ① [[overview-grand-quest-will-to-live|그랜드 퀘스트(삶의 의지)]]가 **1순위 ingest로 지목했던 바로 그 논문** — "의지가 꺾이는 것은 추구 회로가 꺼지는 사건이 아니라 그만두라는 신호가 켜지는 사건"이라는 가설에 **회로 정체(LHb→MRN^VGAT→MRN^SERT 억제)** 를 준다. ② [[concept-goal-commitment]]·[[holton-2026-the-adaptive-value-of-stubborn]]이 "이탈 결정의 전용 신경 구조 후보, **원전 위키에 없음**"으로 적어 둔 공백을 메운다. ③ **[[concept-lateral-hypothalamus|LH]] 출력축 중 가장 덜 다뤄진 것**: LHA^VGAT→MRN은 섭식·보상이 아니라 **"지금 하는 것을 계속할지"**를 정한다. ⚠️ 2026-11-23 확인 — 이 투사 자체는 위키에 **이미 2차 인용으로 있었다**([[liu-2026-granular-motivational-interaction-and|Liu & Wang 2026]] Initiation 절: "MRN^GABA(deep, grabbing/biting) vs MRN^VGLUT2(shallow); LH^GABA→MRN^GABA 억제 = deep interaction"). 없던 것은 **1차 원전**이다. ④ MRN^VGAT 억제가 **여우 오줌(TMT) 물체에 깊은 상호작용까지 유발** — 위키 [[concept-compulsion|강박]]의 조작적 정의("처벌에도 지속")를 회로 조작으로 재현한 드문 사례.
> ⚠️ 쥐의 자유행동·광유전 연구다. 인간 apathy·우울·OCD 연결은 저자들의 **전망**이며 이 논문이 검증한 것이 아니다.

# 고집·탐색·포기의 subcortical switchboard — median raphe nucleus (Ahmadlou 2025)

## 한 줄 요약
brainstem의 **median raphe nucleus(MRN)** 가 GABAergic·glutamatergic·serotonergic 세 세포타입을 통해 **고집·탐색·포기**를 각각 조절하는 중앙 전환판이며, 상류의 **lateral hypothalamus(양성 valence) → 고집**, **lateral habenula(음성 valence) → 포기** 라는 두 입력이 그 전환을 구동한다 (Nature 2025, Hofer lab).

## 핵심 내용

### Background — 무엇이 비어 있었나
- 동물은 **exploit(고집·활용) / explore(탐색) / disengage(포기)** 중 하나를 매 순간 고른다. 포기는 "에너지 보존 + 포식 위험 노출 최소화"라는 **고유 이득**을 가진 전략이다.
- 기존 연구는 거의 전부 **prefrontal cortex가 비용·가치를 계산하는 방식**과 **striatum·PFC 도파민이 기대가치를 갱신하는 방식**에 집중했다. 즉 **"어떤 전략을 쓸지 계산하는 쪽"은 연구됐지만, "그 전략을 실제로 구현하는 회로"는 몰랐다.**
- 저자들의 추론: 이 균형은 동물계 전반에서 생존에 필수이므로 **telencephalon·고차 인지와 독립적인 subcortical 경로**가 있어야 한다.
- MRN의 구성(기존 문헌 + 본 논문 Extended Data Fig. 1a–c로 재확인): **GABAergic(VGAT⁺) 약 60% · glutamatergic(VGluT2⁺) 약 25% · serotonergic 5–10%**, 세 집단은 **중첩이 최소**인 별개 클래스. 기존 5-HT 연구가 대부분 dorsal raphe nucleus(DRN)에 쏠려 있었다는 점도 공백.

### 행동 패러다임 — MNOI test (학습 없이 세 상태를 뽑는다)
- **multi-novel object interaction (MNOI)**: 자유행동 마우스를 **작은 새 물체 20개**에 노출(2분), 비디오로 행동을 라벨링(물체 접근·이탈, **deep interaction**=붙잡기·운반·물기, **shallow interaction**=냄새만 맡고 떠남, 물체 없이 앉기·걷기).
- 대조군에 **비지도 hidden Markov model(HMM)** 을 학습시켜 행동 서열을 3상태로 분류:
  - **state 1 = 고집(perseverative)**: 한두 물체와 깊고 긴 상호작용 지속
  - **state 2 = 탐색(exploratory)**: 깊은 상호작용 없이 여러 물체 사이를 빠르게 전환
  - **state 3 = 포기(disengaged)**: 물체 상호작용 없이 수동적이거나 돌아다님
- 대조군은 세 상태에 **거의 균등하게** 시간을 쓴다. → 사전 훈련·사전 지식 없이 세 전략을 동시에 관찰할 수 있는 설계. (학습 과제로는 T-maze, reversal T-maze, 3-armed bandit, nose poke–reward association을 추가 사용.)

### 결과 1 — MRN^VGAT 억제 = 고집
| 조작 | MNOI 세 상태 비율(중앙값) | 해석 |
|---|---|---|
| 대조(tdTomato) | 대략 균등 | — |
| **MRN^VGAT 억제**(stGtACR2) | **고집 99% / 탐색 1% / 포기 0%** | 탐색·포기가 **0에 가깝게** 사라짐 |
| MRN^VGAT 활성(ChR2) | 유의한 상태 비율 변화 없음 | 단 개별 물체 상호작용 시간↓·전환 빈도↑ |

- 물체가 없을 때의 **기본 운동 행동은 영향 없음**(Extended Data Fig. 3a–e) → 운동 결손이 아니다.
- **2초만 억제해도** 즉시 지속적 물체 상호작용이 유발된다(물체와 무관할 때·막 시작했을 때·깊이 상호작용 중일 때 **모든 구간에서**) → 실시간 전략 전환.
- **광계측(fibre photometry)**: MRN^VGAT 활성은 지속적 물체 상호작용 **동안 유의하게 억제**되고 다른 물체로 전환할 때 기저선으로 복귀. HMM 고집 상태에서 탐색·포기 상태보다 활성이 낮다. → 조작 결과와 자연 활성이 일치.
- **학습 과제에서도 같은 문법**:
  - T-maze(한쪽 팔만 보상, 2세션 연속 90% 이상 정답): MRN^VGAT **활성** → 비보상(=탐색) 팔 선택↑. 보상 팔을 고를 때 MRN^VGAT 활성은 일관되게 **감소**.
  - **reversal T-maze**(보상 위치를 뒤집음): MRN^VGAT **억제** → **이전에 보상받던 팔을 계속 고름** = 이전 최적 목표에 대한 고집.
  - **3-armed bandit**(보상확률 변동): MRN^VGAT 억제 → 당시 고확률 선택지를 강하게 선호하고 **다른 선택지 탐색을 중단**.

### 결과 2 — MRN^VGluT2 활성 = 탐색
- MNOI에서 **탐색 상태 68%**(고집 11% / 포기 20%)로 탐색 시간이 유의하게 늘고 **고집 상태가 특이적으로 감소**. 물체 간 전환 빈도도 증가.
- **2초 활성만으로도** 탐색 행동 진입 확률↑(빠른 시간척도의 전략 전환).
- **억제는 아무 상태도 유의하게 바꾸지 못했다** → MRN^VGluT2 활성은 탐색에 **충분하지만 필요하지 않다**. (저자: 탐색을 능동적으로 구동하는 하나의 경로일 뿐.)
- 기본 운동 행동 불변. 단 **phasic 활성은 운동량·각성(pupil 크기·whisking)을 증가**시킨다.

### 결과 3 — valence가 전략을 만든다 (self-stimulation · TMT)
- **self-stimulation test**(두 nose-poke 중 한쪽만 광자극 유발):
  - **MRN^VGAT 억제 → opto 포트로 돌아오려는 선호가 매우 강함** = 강화적·강한 **양성 valence**.
  - **MRN^VGluT2 활성 → 역시 양성 valence**(선행 연구와 달리 혐오적이지 않았다).
  - **MRN^VGAT 활성 → 양성 valence·각성·운동 증가 없음** → "활성이 능동적 탐색 상태를 만드는 것은 아니다"의 근거.
- **TMT 혐오 과제**(여우 오줌 성분 trimethylthiazoline을 바른 물체): 정상 마우스는 조심스럽게 몇 번만 접근하고 대개 **빠르게 도피(escape)**.
  - **MRN^VGAT 억제** → 접근 횟수 현저히 증가, **도피를 막고**, 정상 마우스에서 **결코 관찰되지 않는** TMT 물체와의 **deep interaction까지 유발**.
  - MRN^VGluT2 활성 → 접근↑·도피확률↓ (혐오 자극에 대한 탐색까지 구동).
- 저자 결론: MRN^VGAT 억제는 **현재 선택지에 매우 강한 양성 valence를 부여해 다른 동기를 압도**함으로써 고집을 만든다.

### 결과 4 — MRN^SERT = 참여(engagement) 그 자체
- MNOI에서 **MRN^SERT 억제 → 포기 상태 55%**(고집 5% / 탐색 40%), 고집 상태 감소. **2초 억제만으로도** 물체에서 이탈할 확률↑.
- **활성은 어떤 상태도 바꾸지 못함** → 참여에 **필요하지만 충분하지 않다**.
- self-stimulation에서 MRN^SERT 억제는 opto 포트 선호를 **감소** = **음성 valence**. 단 **각성·기본 운동 행동은 불변**(포기가 졸림·운동 결손이 아니라는 핵심 통제).
- **nose poke–reward association 과제**(완료 시행 빈도 = 참여 수준): MRN^SERT 억제 → 완료 시행 수 **유의하게 감소** → 학습된 목표지향 행동에서도 참여가 필요.
- **광계측**: MRN^SERT 활성은 물체에서 이탈할 때 감소하고, **새 물체와의 "첫" deep interaction에서 뚜렷하게 증가**한다. **같은 물체와의 이후 상호작용에서는 반응이 없다** → **신규성·현저성(salience) 신호**(DRN 5-HT와 유사). 먹이에서도 같은 패턴. **TMT 물체(음성 valence)에서는 평균 반응 변화 없음**.
- 요약: MRN^SERT는 explore–exploit 결정을 조절하지 않고, **"환경과 교류 자체를 유지하는가"**를 담당한다. 세 상태 중 **포기만 따로 떼어 내는 축**이다.

### 결과 5 — LHb → MRN = 포기 (음성 valence)
- 역추적(retrograde virus tracing)으로 MRN의 **두 주요 입력 = lateral hypothalamic area(LHA)와 lateral habenula(LHb)** 를 동정. 피질 입력은 주로 **anterior cingulate·orbitofrontal cortex**.
- LHb 축삭을 MRN에서 광조작(ChR2 활성 / eNpHR3.0 축삭 침묵):
  - **Neuropixels 통제**: LHb 축삭 활성은 **MRN의 발화는 강하게 바꾸지만 VTA는 바꾸지 않는다** → 고전적 LHb→RMTg→VTA 경로와 **분리된** 효과.
  - self-stimulation·real-time place preference에서 opto 선호 **감소**(침묵은 반대 효과) → 강한 **음성 valence**.
  - **만성 활성 → anhedonia**(sucrose preference test에서 당 선호 감소). 각성 수준도 감소.
  - MNOI: 활성 → **포기 상태 81%**(고집 4% / 탐색 14%). 침묵은 상태 비율을 바꾸지 않음.
  - nose poke–reward 과제: 활성 → 참여 감소.
  - MRN 내 LHb 축삭의 광계측: 새 물체에는 반응 없고, **TMT 물체를 만나 도피할 때 활성 증가** → 음성 valence 전달과 일치.
- **기전**: LHb→MRN 입력은 대부분 글루탐산성인데 효과는 MRN^SERT 억제와 같다. 동시 광계측으로 확인한 결과 — **LHb 활성은 MRN^SERT를 흥분시키지 않고 새 물체에 대한 반응을 강하게 억제**하며, **MRN^VGAT는 평균적으로 흥분(MRN^VGluT2는 아님)**. → **LHb → MRN^VGAT 일부 → MRN^SERT 억제 → 포기**.

### 결과 6 — LHA^VGAT → MRN = 고집 (양성 valence)
- **LHA→MRN 입력은 주로 GABAergic**이어서 VGAT-Cre 마우스에 Cre 의존 ChR2/eNpHR3.0을 LHA에 주입해 조작(Neuropixels로 MRN 억제·VTA 불변 확인).
- **활성**: opto 포트·chamber 선호↑, **각성↑**, TMT 혐오를 **압도해 깊은 상호작용 유발**(MRN^VGAT 억제와 동일한 모습). MNOI에서 **고집 상태 지속 강하게 증가**, 탐색·포기 모두 감소, 물체당 체류 시간↑. **reversal T-maze에서 이전 보상 팔을 계속 선택**.
- MRN 내 LHA^VGAT 축삭의 광계측: **deep interaction 동안, 그리고 고집 상태 전반에서 칼슘 활성 증가.**
- **침묵**: 고집 상태 감소, 탐색·포기가 약간 길어짐, 물체당 체류 시간 크게 감소(지속 상호작용 자체가 안 됨). T-maze에서 훈련된 보상 팔 대신 비보상 팔 선택이 늘어남. **각성은 불변** → "탐색을 구동"하는 것이 아니라 **"지속적 참여를 못 하게 만든다"**.
- **기전**: LHA^VGAT→MRN 활성이 **MRN^VGAT를 억제**함을 광계측으로 확인 → 두 조작의 행동 효과가 같은 이유를 설명.

### 저자들의 종합 (Extended Data Fig. 13)
```
LHA^VGAT (양성 valence) ──억제──> MRN^VGAT ──(억제될 때)──> 고집 / exploit
LHb (음성 valence) ──흥분──> MRN^VGAT 일부 ──억제──> MRN^SERT ──> 포기
                                   MRN^SERT (신규성·양성 현저성) ──> 참여 유지
                                   MRN^VGluT2 (상대적으로 독립) ──활성──> 탐색
```
- MRN^VGluT2는 위 두 경로와 **비교적 독립**으로 작동하며, 어떤 상류가 이를 켜는지, 유발된 탐색이 **목표지향인지 무작위·가치무관(value-free)인지**는 미결.
- 전망: MRN·DRN은 상호 연결되어 상보적 투사 패턴을 가지며 **협력적**으로 상태 균형을 맡을 가능성. **ACC→MRN^VGluT2**가 고차 비용–가치 계산에 따라 탐색 전환을 유발할 후보. MRN 세 세포타입은 모두 장거리 투사를 가진다. 저자들은 **우울·강박장애의 병인과 치료**에 MRN 회로가 중요할 수 있다고 적는다.

## 한계·주의
- **마우스 광유전·화학유전 연구**다. 인간 apathy·우울·OCD와의 연결은 **저자들의 전망**이며 본 논문이 검증하지 않았다.
- MNOI의 세 상태는 **대조군에 학습시킨 HMM의 산물**이다. "고집·탐색·포기"라는 이름은 행동 서열의 통계적 군집에 붙인 라벨이며, 인간의 같은 이름 개념과 동일하다는 보장은 없다([[concept-computational-ethology]]의 라벨 타당성 문제).
- **벌크 광계측**이라 세포 수준 이질성을 볼 수 없다. 저자도 "일부 개별 MRN^SERT 뉴런이 TMT 같은 자극에 반응할 가능성은 배제할 수 없다"고 적는다(DRN 5-HT에서 그러하듯).
- MRN^VGluT2 **활성이 혐오적이지 않았다**는 결과는 선행 연구(ref 26)와 **상충**한다. 저자들도 명시적으로 차이를 적는다.
- 하류 기전(MRN이 무엇을 통해 행동을 바꾸는가)과 세 세포타입 간 상호작용은 **미규명**.
- 포기의 상류로 LHb만 검증됐다. "포기 신호"가 LHb 외 어디서 오는지는 열려 있다.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)

### ① 그랜드 퀘스트(삶의 의지)의 핵심 공백을 메운다 ★
[[overview-grand-quest-will-to-live]]는 도전 가설을 **"의지가 꺾이는 것은 추구 회로가 꺼지는 사건이 아니라 그만두라는 신호가 켜지는 사건이다"**로 세우고, 본 논문을 **1순위 ingest**로 지목했다. 이제 그 가설에 회로 정체가 붙는다.
- **포기는 전용 입력(LHb)과 전용 세포타입(MRN^SERT 억제)을 가진 능동적 사건**이다. MRN^SERT 억제가 **각성·운동을 바꾸지 않으면서** 포기만 만든다는 통제가 결정적이다 — "졸려서·못 움직여서"가 아니다.
- **추구와 포기가 같은 축의 양끝이 아니라는 직접 증거**: MRN^VGluT2 억제는 아무 상태도 바꾸지 않는데(탐색에 불필요) MRN^SERT 억제는 포기를 만든다(참여에 필요). 세 축의 **필요·충분 구조가 서로 다르다.**
- §3의 "**임계값**" 언어로 읽으면: LHA^VGAT→MRN은 이탈 임계값을 **올리고**(고집), LHb→MRN은 **내린다**(포기). 두 입력이 같은 노드(MRN^VGAT)에 반대 부호로 수렴한다는 점이 **"공통 이득항 + 축 특이 신호"(H1)의 회로 구현 후보**다.

### ② [[concept-goal-commitment]]의 "이탈 전용 구조"가 원전과 함께 들어왔다
[[holton-2026-the-adaptive-value-of-stubborn|Holton 2026]]은 patch-leaving·momentum 알고리즘을 제시하면서 이탈 결정의 전용 신경 구조 후보로 ACC(Kolling 2012·Tervo 2021)와 본 논문(ref 66)을 들었고, 위키는 "**원전 없음**"으로 적어 두었다. 이제 **Holton의 세 기능과 본 논문의 세 세포타입을 맞춰 볼 수 있다**(연결 가설):
- Holton의 **자원 합리성·간섭 차단**(선택지 공간을 좁히는 filter) ↔ MRN^VGAT 억제가 만드는 "현재 선택지에 강한 양성 valence 부여, 다른 동기 압도"
- Holton의 **동기 비계**(목표-일치 선택지에 bonus) ↔ MRN^SERT의 **신규성·양성 현저성** 신호가 참여를 유지하는 방식
- Holton의 **apathy 역설**(과잉 지속 ↔ 과소 지속이 한 개인에 공존) ↔ MRN에서 **고집(VGAT)과 포기(SERT)가 별개 세포타입**이므로 둘이 독립적으로 고장날 수 있다는 예측

### ③ LH의 새 출력축 — "계속할지"를 정하는 LH
위키의 LH 출력 지도는 LH→VTA(보상)·LH→LHb(공격성·서열)·LH→PAG(사냥 vs 도피) 중심이고, 본 논문은 **LH^Vgat가 "무엇을 할지"가 아니라 "지금 하는 것을 계속할지"를 정한다**는 축을 더한다.
⚠️ **2026-11-23 수정**: 이 투사가 "위키에 없던 것"은 아니다. [[liu-2026-granular-motivational-interaction-and|Liu & Wang 2026]](Neuron 리뷰)의 Initiation 절이 **LH^GABA→MRN^GABA 억제 = deep interaction**을 이미 2차 인용으로 담고 있고, MRN^GABA(deep·grabbing/biting) vs MRN^VGluT2(shallow)의 대비까지 적어 두었다. 본 논문은 그 **1차 원전**이고, 세포타입 표의 LH 출력 행에 Vgat→MRN이 없었을 뿐이다. [[overview-lateral-hypothalamus-synthesis]]의 세포타입 표에는 **MCH→MRN**이, 투사 표에는 **LH→DR^GABA**가 이미 있다.
- [[korotkova-2026-balancing-acts-lateral-hypothalamic|Korotkova 2026]]의 arbitration framework(hunger × anxiety × loneliness)와 층이 다르다: arbitration은 **어느 동기가 이기는가**, MRN 축은 **이긴 동기를 얼마나 오래 붙드는가**. 두 층을 합치면 LH는 선택과 지속을 모두 쥔다(연결 가설).
- [[concept-lh-gabaergic-neurons|LH^Vgat hub]]가 정리한 "섭식 engine이 아니다 — valence 무관 salience·체온·학습까지 섞인다"는 논지에 **'고집' 축**이 하나 더 붙는다. 그 hub의 투사 기반 표적화 경고와도 맞물린다(같은 Vgat⁺에서 섭식 집단과 고집 집단이 갈리는지 미검증).
- ⚠️ 본 논문의 LHA^VGAT는 **분자 정체가 아니라 전달물질(Vgat)로만 정의**된다. 사용자 lab의 [[lee-2023-lateral-hypothalamic-leptin-receptor|LH^LepR]]과의 관계는 미검증이다. **2026-11-23 위키 확인 결과 `LH^LepR→MRN`은 0건이고, 주변 자료는 오히려 부정적 방향이다**:
  - **LepR 집단의 raphe 투사는 dorsal raphe(DR)로 기록돼 있다** — [[bonnavion-2016-hubs-and-spokes-of|Bonnavion 2016]]: "**Nts–LepRb 세포는 DR·VTA로 강하게 투사**하지만 MC4R–pSTAT3 세포는 둘 다로 투사하지 않는다"(Cui 2012 경유). LepRb의 60%가 Nts⁺이므로 적지 않은 분획이다.
  - **위키가 MRN 투사로 기록한 LH 집단은 MCH뿐이고, MCH는 LepR 미발현(4편 음성)** — [[overview-lateral-hypothalamus-synthesis]] 세포타입 표 MCH 행(표적: NAc shell·striatum·LS·MS·TMN·**MRN**) · [[chen-2025-the-integrated-function-of-the|Chen 2025]]("MCH→MRN로 BAT 교감억제"). 즉 위키 안에서 "MRN 투사 LH 집단"과 "LepR 집단"이 **서로 배타적으로** 적혀 있다.
  - **형식적으로 가장 닮은 선례는 MRN이 아니라 DR이다** — [[liu-2023-an-iterative-neural-processing|Liu 2023]]: LH 30초 활성 → DR^GABA가 수 초 탈억제 후 **강한 억제**, 기능 분담은 **LH = 조각 개시, DR^GABA = 접촉 유지**(R=0.908). 본 논문의 "LH^VGAT→MRN^VGAT 억제 → 지속(고집)"과 **같은 문법**이다.
  - → 질문을 **"LH^LepR→MRN이 있는가"**에서 **"LH^LepR의 raphe 투사는 DR인가 MRN인가 둘 다인가, 그리고 두 핵이 같은 지속 문법을 쓰는가"**로 좁히는 쪽이 근거에 맞다(제안 수정).

### ④ 강박의 조작적 정의를 회로로 재현했다
[[concept-compulsion]]은 강박 섭식을 "**처벌에도 지속되는 추구**"로 조작화한다. 본 논문의 TMT 결과는 그것을 회로 조작으로 만든다 — MRN^VGAT 억제(또는 LHA^VGAT→MRN 활성)가 **포식자 냄새 물체에 깊은 상호작용까지** 유발하며, 이는 정상 개체에서 결코 나타나지 않는다.
- [[concept-goal-commitment]]이 제기한 **강박의 계산적 분해**("대안 정보 둔감 vs 현재 목표 평가절하 둔감 vs 목표 비계형 내재 보상")에 대해, 본 논문은 세 번째에 가까운 기전을 제시한다 — **현재 선택지에 양성 valence를 덧씌움**.
- [[leow-2026-a-cortical-hypothalamic-neural|처벌 저항 HFD 추구]]와 같은 현상을 다른 회로에서 본 사례로 병치할 수 있다.

### ⑤ 참여(engagement)에 두 번째 신경화학 축이 생겼다
[[concept-will-volition-motivation]]은 '의지 ①'(대상 없는 기본 반응 준비성)의 기질로 **tonic dopamine**을 두고([[kang-2011-dopamine-system-and-antipsychotic-drugs|Kang 2011]] 가설, [[lodder-2026-tonic-dopamine-regulates-cell-type-specific-pka|Lodder 2026]]이 인과 실측) 있다. 본 논문은 **MRN^SERT = 과제 참여의 필요조건**을 더한다. 세 변수가 서로 다른 질문에 대응한다는 읽기가 가능하다(연결 가설):

| 변수 | 무엇을 정하는가 | 측정 |
|---|---|---|
| **tonic dopamine**(NAc core) | **얼마나 열심히** 일하는가 | progressive ratio breakpoint·poke rate |
| **MRN^SERT** | **판에 들어와 있는가**(참여) | 완료 시행 빈도, 포기 상태 지속 |
| **MRN^VGAT** | **이 선택지에 머무는가**(고집) | 물체당 체류, reversal 고집 |

- 이 분해는 [[concept-effort-based-decision-making]]에 **abandon/switch 조건**을 넣자는 제안([[overview-grand-quest-will-to-live]] §4③)에 회로 근거를 준다 — acceptance bias(의지 ①) 저하와 이탈 실패/과잉 이탈이 **다른 기질**이라면 과제에서도 분리돼야 한다.

### ⑥ anhedonia·음성강화 축의 두 번째 경로
[[concept-lateral-habenula]]는 LHb의 anhedonia 기여를 **LHb→RMTg 시냅스의 GluA1 삽입**(Meye 2015, 코카인 금단)으로 정리한다. 본 논문은 **LHb→MRN 만성 활성이 sucrose preference를 떨어뜨린다**는 두 번째 경로를 더하고, **Neuropixels로 VTA를 거치지 않음을 보였다.** → "보상계를 끄는 상류 스위치"라는 LHb 서술이 **VTA 도파민 억제 외에 raphe 세로토닌 억제라는 병렬 출력**을 갖게 된다. [[concept-negative-reinforcement-hyperkatifeia]]의 within-system 적응 프레임에도 노드가 하나 늘어난다.

## ⚠️ 위키 내 긴장·연결
- ⚠️ **위키의 raphe 약어가 2핵 4표기다(2026-11-23 감사)** — **dorsal raphe = `DR`**([[liu-2023-an-iterative-neural-processing]]·[[overview-lateral-hypothalamus-synthesis]] 투사 표) **또는 `DRN`**(18개 페이지), **median raphe = `MRN`**(본 페이지·[[liu-2026-granular-motivational-interaction-and]]·MCH 행) **또는 `MRR`**([[concept-lateral-habenula]]·[[luscher-2021-consolidating-the-circuit-model-for]]·[[concept-dopamine-reward-system]]). 같은 핵을 두 이름으로 쓰고 두 핵을 비슷한 이름으로 써서, "LH^GABA→raphe"가 **어느 핵인지 모르게 뭉뚱그려 읽힌다**. 가장 중요한 귀결: **`MRR`와 `MRN`은 둘 다 median raphe를 가리킨다** — 따라서 아래 항목은 "서로 다른 두 구조의 연결"이 아니라 **median raphe와 LHb가 양방향으로 연결돼 있다**는 뜻이다. ⚠️ 단 **`region`과 `nucleus`가 정확히 같은 범위인지는 위키에서 확인되지 않는다**(두 용어의 범위를 정의한 문장이 위키에 없고, [[concept-lateral-habenula]]는 Szőnyi 2019를 "마우스 median raphe의 vGluT2⁺ 뉴런"으로만 소개한다). 양방향이라는 결론은 이 유보와 무관하게 성립한다(어느 범위로 잡아도 median raphe다).
  - **감사 확인(2026-11-23)**: 위키의 `MRR` 줄은 대부분 LHb와 동반하며 전부 MRR→LHb 혐오 축(Szőnyi 2019 계열)이고, **`MRR` 표기 아래 숨은 LH 출력 주장은 0건**이다 → "LH→raphe 주장 3건 / 핵 2개"(DR: [[liu-2023-an-iterative-neural-processing]] / DRN: [[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles]] / MRN: 본 논문) 계산이 그대로 유효하고, **DR과 MRN을 구분해 역추적(retrograde)한 LH 자료는 위키에 0건**이다(개념 hub 쪽 정리는 [[concept-lh-gabaergic-neurons]] §5-7).
- **[[concept-lateral-habenula]]의 방향 서술 보완 필요**: 그 페이지는 **MRR(median raphe region) vGluT2⁺ → LHb**(Szőnyi 2019)를 "상류 허브"로 적는다. 본 논문은 **LHb → MRN**을 보인다. 둘은 모순이 아니라 **상호 연결(reciprocal)** 이지만, 페이지에 한 방향만 적혀 있어 오독 위험이 있다 — 양방향으로 병기해야 한다.
- **[[jia-2026-novelty-exploration-activated-ensemble-in|Jia 2026]]과의 병치**: LH novelty·exploration ensemble이 LHb로 투사하며 상류 세포타입에 따라 통증 부호가 뒤집힌다는 결과와, 본 논문의 LHA^VGAT→MRN(고집)·LHb→MRN(포기)은 **같은 세 구조(LH·LHb·raphe)의 다른 조합**이다. LH·LHb·MRN 삼각형의 부호 지도가 아직 없다.
- **[[zhao-2026-serotonin-neurons-in-the-dorsal|Zhao 2026]]과의 대비**: DRN 5-HT는 임신 상태에서 **기호식 추구(seeking)** 를 켜고(SK3 채널), MRN 5-HT는 **참여 자체**를 유지한다. 같은 신경전달물질이 핵에 따라 다른 계산 역할을 맡는다는 대비로 읽을 수 있다(두 논문이 서로를 다루지는 않는다).
- **[[grima-2026-a-global-dopaminergic-learning-rate|Grima 2026]]·[[concept-goal-commitment]]의 patch-leaving과의 관계**: MVT형 stay/leave가 도파민 학습률로 구현된다는 설명과, 본 논문의 MRN 세포타입 전환은 **같은 행동(이탈)의 서로 다른 기질 후보**다. 어느 쪽이 "임계값"을 들고 있는지는 미해결.
- **[[azevedo-2020-a-limbic-circuit-selectively-links|Azevedo 2020]]과의 결**: lateral septum Nts 뉴런이 **능동 도피에만** 반응하는 것과, 본 논문의 LHb→MRN이 **TMT 도피 시 활성 증가**하는 것은 "능동/수동 대처가 서로 다른 신호를 쓴다"는 같은 방향이다. 다만 두 회로의 관계는 위키·원문 모두에 자료 없음.
- **[[concept-dopamine-reward-system]]과의 분업**: 본 논문은 explore–exploit을 **도파민 없이** 설명하고, LHb·LHA 조작이 VTA를 거치지 않음을 명시적으로 통제했다. 도파민 중심 explore–exploit 서술에 **비도파민 subcortical 축**을 병기해야 한다.

## 관련 페이지
- [[overview-grand-quest-will-to-live]] — 본 논문을 1순위 ingest로 지목한 그랜드 퀘스트(삶의 의지) 페이지. "그만두라는 신호가 켜지는 사건"이라는 도전 가설에 본 논문이 회로 정체를 준다.
- [[holton-2026-the-adaptive-value-of-stubborn]] · [[concept-goal-commitment]] — 본 논문을 "이탈 결정의 전용 신경 구조"로 인용한 계산 틀(patch-leaving·momentum·apathy 역설). 위키의 "원전 없음" 공백을 본 페이지가 메운다.
- [[concept-lateral-habenula]] — LHb→MRN이 LHb의 두 번째 anhedonia 출력(VTA 비의존). ⚠️ 그 페이지의 MRR→LHb 방향 서술과 병기 필요.
- [[concept-lateral-hypothalamus]] · [[concept-lh-gabaergic-neurons]] · [[overview-lateral-hypothalamus-synthesis]] — LHA^VGAT→MRN = "계속할지"를 정하는 LH 출력축. ⚠️ 투사 자체는 [[liu-2026-granular-motivational-interaction-and|Liu 2026]]에 2차 인용으로 이미 있었고(본 논문이 1차 원전), 세포타입 표의 **Vgat→MRN 행**이 빠져 있었다. `LH^LepR→MRN`은 위키에 0건이다(2026-11-23 확인).
- [[liu-2026-granular-motivational-interaction-and]] — 위키에서 LH^GABA→MRN^GABA를 **처음 담은 페이지**(Initiation 절의 2차 인용). 본 논문이 그 1차 원전.
- [[bonnavion-2016-hubs-and-spokes-of]] · [[liu-2023-an-iterative-neural-processing]] — `LH^LepR→MRN` 질의의 핵심 근거: LepR/Nts의 raphe 투사는 **DR**로 기록돼 있고(Bonnavion), LH→DR^GABA의 "개시 vs 접촉 유지" 분담(Liu 2023)이 본 논문의 고집 문법과 형식적으로 같다.
- [[korotkova-2026-balancing-acts-lateral-hypothalamic]] · [[petzold-2023-complementary-lateral-hypothalamic-populations]] — LH arbitration framework. 그쪽이 "어느 동기가 이기는가", 본 논문이 "이긴 동기를 얼마나 붙드는가".
- [[concept-compulsion]] · [[leow-2026-a-cortical-hypothalamic-neural]] — "처벌에도 지속"의 조작적 정의를 TMT 실험이 회로 조작으로 재현.
- [[concept-will-volition-motivation]] · [[lodder-2026-tonic-dopamine-regulates-cell-type-specific-pka]] — 참여·활력·고집의 세 기질 분해(MRN^SERT / tonic DA / MRN^VGAT).
- [[concept-effort-based-decision-making]] — abandon/switch 조건 설계의 회로 근거.
- [[concept-anhedonia]] — LHb→MRN 만성 활성 → sucrose preference 감소.
- [[concept-negative-reinforcement-hyperkatifeia]] · [[luscher-2021-consolidating-the-circuit-model-for]] — 음성강화 회로도에 MRN 노드 추가.
- [[concept-dopamine-reward-system]] · [[grima-2026-a-global-dopaminergic-learning-rate]] — 도파민 중심 explore–exploit 서술과의 분업·긴장.
- [[jia-2026-novelty-exploration-activated-ensemble-in]] — LH novelty·exploration ensemble과 LHb 투사; LH·LHb·raphe 삼각형의 다른 조합.
- [[zhao-2026-serotonin-neurons-in-the-dorsal]] — DRN 5-HT(추구 구동) vs MRN 5-HT(참여 유지)의 대비.
- [[azevedo-2020-a-limbic-circuit-selectively-links]] · [[concept-lateral-septum]] — 능동 대처와 수동 포기가 다른 신호를 쓴다는 같은 방향의 증거.
- [[campos-2018-encoding-of-danger-by-parabrachial]] · [[bhatti-mazo-2026-feature-specific-threat-coding-in]] — TMT·포식자 위협 처리의 병렬 경보 축.
- [[concept-computational-ethology]] — MNOI의 HMM 상태 분류가 기대는 방법론과 그 라벨 타당성 문제.
- [[concept-orbitofrontal-cortex]] — MRN의 주요 피질 입력(ACC·OFC); ACC→MRN^VGluT2가 탐색 전환 후보.
