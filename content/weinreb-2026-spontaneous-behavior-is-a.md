---
title: Spontaneous behavior is a succession of self-directed tasks (Weinreb 2026)
type: paper
created: 2026-08-05
updated: 2026-08-05
source: raw/2026 Neuron. Spontaneous behavior is a succession of self directed tasks.pdf
authors: [Caleb Weinreb, Lakshanyaa Thamarai Kannan, Alia Newman-Boulle, Tim Sainburg, Winthrop F. Gillis, Alex Plotnikoff, Sofia Makowska, Jonah E. Pearl, Mohammed Abdal Monium Osman, Scott W. Linderman, Sandeep Robert Datta]
year: 2026
---

> [!takeaway] 연구 방향 관점의 핵심
> 자유행동 마우스의 "자발적 행동"이 실은 **수 초~수 분 지속되는 task 같은 행동 상태(behavioral state)의 연속**으로 조직돼 있고, **dmPFC가 저수준 움직임보다 이 상태의 정체(identity)를 우선 부호화**한다는 것. 사용자의 [[concept-need-motivation-pleasure-utility|NMPU]]·자연주의 섭식행동 연구에 직접적 함의 — 섭식은 "먹는 syllable"의 나열이 아니라 **먹이 탐색·조사·섭취라는 self-directed task로 상태화**될 수 있으며, 이를 [[xu-2020-behavioral-state-coding-by|Sternson류 상태 코딩]]·hierarchical 행동 모델(shMoSeq)로 분해해 회로에 매핑할 수 있다. 결정적으로 **dmPFC 활성은 행동을 선행하지 않고 지연(lag)** — 순간순간의 top-down 지휘자가 아니라 맥락에 맞는 상태 표상·유지 장치라는 해석. NHP 자연주의 섭식([[mueller-2025-privi-towards-general-purpose-video]])·자유행동 이미징([[zong-2022-large-scale-two-photon-calcium]]) 도구와 결합할 분석 프레임.

# Spontaneous behavior is a succession of self-directed tasks (Weinreb 2026)

## 한 줄 요약
자유 탐색 중인 마우스의 저수준 행동(sub-second syllable)이 **수 초~수 분의 행동 상태로 위계적으로 조직**되며, 이 상태들은 환경 affordance(벽·물체·동종개체)에 따라 선택되는 **task 같은 프로그램**이다. dmPFC는 이 상태의 정체를 저수준 움직임보다 우선 부호화하고(단, 행동에 **후행**), dmPFC 손상은 맥락에 맞는 덜 흔한 상태의 발현과 장기 시간척도 조직을 교란한다. → 자발적 행동 = **self-directed task의 연속**; 구조화된 과제와 자유 탐색이 공통 신경제어 원리를 공유.

## 핵심 내용

### 배경·문제의식
- 뇌는 목표(goal)를 행동(action)으로 번역한다. 이 변환은 구조화된 과제(예: 좌/우 licking → 보상)에서 잘 연구됐고, 이때 **PFC가 맥락·과제·가치 변수**를 부호화한다고 알려짐.
- 그러나 동물이 대부분의 시간을 보내는 **자발적(spontaneous) 행동**이 식별 가능한 목표에 따라 조직되는지, PFC가 이때도 과제 관련 정보를 부호화하는지는 불분명.
- 저자들은 자발적 행동이 self-directed task로 조직된다면 충족해야 할 **3가지 기준**을 제시: (1) 각 상태는 prima facie 과제에 연결될 움직임을 포함, (2) 발현되는 상태는 가용 affordance에 의존, (3) 상태·과제 관련 정보가 PFC 같은 goal-directed 영역에 존재.

### 방법: shMoSeq (state-based hierarchical MoSeq)
- **MoSeq**: 깊이카메라 기반 3D pose에서 비지도 학습으로 sub-second "syllable"(행동 모티프) 분할. 여기서 72개 syllable 식별(locomotion·rearing·grooming·investigation 등).
- **문제**: syllable은 강한 자기상관·비-Markov 구조를 가져 단순 Markov 모델로 설명 안 됨 — 실제 syllable 시퀀스의 상호정보(MI)는 수십 초까지 예측 가능(Markov 시뮬은 수 초에 소멸).
- **shMoSeq**: 3-수준 위계 HHMM. **(밀리초) pose → (sub-second) syllable → (수 초) behavioral state**. 각 상태는 고유한 syllable 사용·전이 편향으로 정의. 합성 시퀀스가 실제와 MI에서 거의 동일 → 이 위계가 마우스 행동의 시간척도 스펙트럼을 충분히 설명.
- python 패키지로 공개(state-moseq).

### 발견 1 — 자발적 행동은 고차 상태로 조직
- 오픈필드(비어 있거나 수컷 동종개체/물체 추가)에서 수컷 마우스 기록.
- C57 동종개체 환경에서 **5개 행동 상태** 식별: **grooming, 시계/반시계 exploratory locomotion(2종), local investigation, social engagement**.
- 상태 지속 중앙값 ≈ 수 초, 최대 ~1분. syllable→state는 대부분 one-to-one이 아님(grooming 제외) — 같은 syllable이 여러 상태에서 맥락 의존적으로 재사용.

### 발견 2 — Affordance가 상태 분포를 조각
- 빈 아레나: 주로 벽과 상호작용(thigmotaxis) → 시계/반시계 두 exploratory 상태.
- 동종개체 추가: 근접·상호 syllable MI로 구별되는 **social state** 출현.
- 신규 물체: **local investigation** 상태가 3–4배 증가("sniffing"·"local investigation" 세분화).
- → 상태 전이는 하나의 affordance에서 이탈해 다른 affordance에 관여하는 과정.

### 발견 3 — dmPFC가 상태를 구조화(순간 움직임보다 우선)
- dmPFC 칼슘 이미징: 각 상태에서 뉴런의 최대 20% 활성/억제, 최대 60%가 ≥1 상태에 반응.
- 2D 신경 임베딩이 행동 상태별로 분리; 상태 축이 신경 PC와 정렬. **상태 디코딩 정확도 > syllable 디코딩** — dmPFC 활성은 순간 움직임(syllable)이 아니라 느린 상태 수준 변화를 추적.
- **대조 영역 DLS(dorsolateral striatum)**: syllable·kinematics를 더 잘 부호화, ~10배 빠른 시간척도. 상태 정보 추가는 DLS 인코더를 개선하지 못함 → **dmPFC=상태, DLS=syllable**의 신경행동 시간척도 분리.

### 발견 4 — Affordance 변수는 관련 상태에서 선택적으로 강조
- 벽 거리/방향·물체 정체·사회적 근접 같은 world-centric 변수가 **그 변수가 과제 관련이 되는 상태에서 dmPFC에 더 뚜렷이 표상**.
  - 벽 방향/근접 → exploratory locomotion(thigmotaxis) 상태에서 최강.
  - 물체 정체 → local investigation 상태에서 디코딩 최고.
  - 사회 근접 → social engagement 상태에서 강화(공격/위치 통제 후에도 유지).
- **과제 관련성 조작**: 공격적 동종개체(CD1)로 마우스를 공격 → 벽을 방어 affordance로 사용(도피/부동) → 벽 관련 표상이 공격 블록에서 강화. 반대로 친숙해질수록(neutral C57·반복 물체) affordance 표상은 약화 = de-emphasis.

### 발견 5 — dmPFC 신경 동역학은 행동의 **후행 지표**
- 하향식 행동 계획 모델이라면 신경 활성이 행동 개시에 **선행**해야 함. 그러나 상태 튜닝 뉴런은 상태 개시/종료 **이후**에 활성화(체계적 지연).
- tube test(사회적 우위) 재분석에서도 self·other 행동 모두에 대해 신경 활성이 ~1초 지연.
- → dmPFC는 순간순간 행동을 **구동**하기보다, 진행 중인 행동을 추상화·표상하고 맥락에 맞는 상태 분포를 형성(passive/lagging).

### 발견 6 — dmPFC 손상은 상태의 적절한 선택·순서를 교란
- dmPFC(prelimbic·infralimbic·ACC·medial orbital) 병변: raw 행동 영상·벽/물체 거리 분포는 대조군과 거의 동일.
- 그러나 **덜 흔한 상태(grooming·local investigation)의 발현↓**, 흔한 상태(exploratory locomotion)로 편향 → 행동의 장기 시간척도가 **수축**(syllable 간 MI 감쇠 시간 41s→21s).
- syllable 내용·상태 지속시간 자체는 불변. → dmPFC는 syllable 내용이 아니라 **맥락에 맞는(특히 드문) 상태의 발현을 촉진**하는 위계적 구조를 부여.
- 대조: DLS 병변은 syllable 사용·순서를 교란하되 상태 시간척도는 불변([[fallon-2026-striatal-pathways-dissociably-control-action|striatal pathways]] 계열과 정합).

### 결론·해석
- 자발적 탐색은 **밀리초 pose·sub-second syllable·수 초 상태**의 3층 위계로 조직되며, 상태는 self-motivated task에 해당.
- dmPFC는 구조화된 과제에서와 **동일한 원리**로 자유행동에서도 장기 상태를 부호화하고 저수준 움직임을 추상화 — 자발적 행동과 실험자 정의 과제의 신경제어 원리가 공유됨.
- dmPFC의 역할은 순간순간 행동 개시(action initiation)라기보다 **맥락 의존적 상태 선택·유지**의 permissive/scaffolding 기능. hunger·thirst 같은 더 긴 내부 상태는 여기서 다룬 수 초 "behavioral state"와 구별됨.

## 관련 페이지
- [[xu-2020-behavioral-state-coding-by]] — PVH ensemble의 **behavioral state coding**(Sternson, CaRMA); "행동 상태를 신경 앙상블이 부호화"라는 같은 개념 가족, 여기선 시상하부·항상성 상태 vs Weinreb의 dmPFC·수 초 task 상태.
- [[concept-need-motivation-pleasure-utility]] — 자발적 행동을 self-directed task(목표)의 연속으로 보는 관점은 NMPU의 goal/utility 프레임과 접점; 섭식을 상태화된 과제로 분해.
- [[giovanniello-2025-a-dual-pathway-architecture-for]] — goal-directed vs habit(BLA→DMS/CeA→DMS) 전환; dmPFC 상태 제어와 상보적인 "행동 제어 시스템 간 arbitration" 축.
- [[concept-orbitofrontal-cortex]] — OFC/vmPFC의 가치·목표 부호화; dmPFC의 상태 부호화와 함께 PFC의 goal-directed 표상 지도를 구성.
- [[fallon-2026-striatal-pathways-dissociably-control-action]] — 선조체 경로의 action counting·goal-directed steering 해리; 본 논문의 DLS=syllable 시간척도와 대비되는 선조체 관점.
- [[mueller-2025-privi-towards-general-purpose-video]] — NHP 자연주의 행동 정량화 foundation model; 자유행동을 상태로 분해하는 도구 계열(방법 인프라).
- [[zong-2022-large-scale-two-photon-calcium]] — 자유행동 마우스 대규모 자연주의 이미징(MINI2P); 상태-신경 매핑 확장 인프라.
- [[concept-dopamine-reward-system]] — self-directed task·보상 추구의 회로 기반; 상태별 affordance 강조와 도파민 보상 학습의 접점.
- [[liu-2025-castle-a-training-free-foundation-model]] — CASTLE: keypoint 없이 시각 파운데이션 모델 잠재특징으로 행동 클래스를 위계 군집. 위계적 분해라는 목표는 공유하되 입력(깊이 pose vs 시각 latent)과 층위(syllable 규모 vs 수 초 state)가 다름.
- [[gruzdeva-2026-hunger-neurons-track-available-food]] — foraging 궤적을 toward/away run으로 분해해 AgRP 신호와 정렬; 자유행동을 상태·세그먼트로 나눠 회로에 매핑하는 같은 계열.
- [[concept-computational-ethology]] — 행동 자동 정량화 도구 계열 hub; shMoSeq의 계보상 위치.
