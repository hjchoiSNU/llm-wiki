---
title: One-shot learning (단일시행 학습)과 가소성 규칙
type: concept
created: 2026-08-15
updated: 2026-08-15
aliases: [one-shot learning, single-trial learning, one-trial learning, eCB-LTP, BTSP, 단일시행 학습, 일회 학습]
---

> [!takeaway] 연구 방향 관점의 핵심
> 단 한 번의 짧은 경험으로 만들어지는 기억은 **활동전위가 몇 개 없다**는 제약 때문에, 반복 자극을 요구하는 고전 LTP 규칙으로는 설명되지 않는다. 그래서 **비고전적 가소성 규칙**(선조체 **eCB-LTP**, 해마 **BTSP**)이 따로 필요하다는 것이 이 개념의 요지. 최형진 lab 관점: **conditioned taste aversion·flavor-nutrient conditioning처럼 식이 학습의 상당수가 단일시행**이라는 점, 그리고 **"짧은 경험 = eCB-LTP / 길거나 반복된 경험 = NMDA-LTP"** 라는 경험 지속시간 기반 분업이 **1회 폭식 경험이 습관으로 굳는 경로**를 묻는 데 쓰인다는 점이 핵심이다.

# One-shot learning (단일시행 학습)과 가소성 규칙

## 한 줄 요약
단 한 번의 짧고 현저한 경험으로 장기기억이 형성되는 현상, 그리고 이를 뒷받침하기 위해 **적은 수의 spike로도 유도되는 비고전적 시냅스 가소성 규칙**들.

## 핵심 내용

### 왜 별도 개념이 필요한가
- One-shot 경험은 정의상 **고유하고 짧다** → 동원되는 활동전위·버스트가 적다 → **반복 짝짓기를 요구하는 가소성 규칙으로는 원리상 설명 불가**.
- 실제로 [[piette-2026-striatal-endocannabinoids-drive-one-shot]]의 Neuropixels 기록에서, 짧은 접촉 중 피질·선조체 발화는 중앙값 1–3 Hz이고 뉴런의 27–30%는 아예 침묵했다.
- 자연에서 흔한 형태: 공간학습, 재인기억, 복합 episodic 연합(위협·식욕 자극), 도구적 학습, 새 단어 습득.

### 규칙 1 — eCB-LTP (선조체)
- **유도 조건**: 등외측 선조체(DLS) corticostriatal 시냅스에서 **~15회 post-pre 짝짓기**(1 Hz, Δt_STDP ≈ −15 ms). 대조적으로 **100회 짝짓기는 NMDA-LTP**를 유도.
- **성질**: 낮은 빈도(0.1 Hz에서도 유도)·**spike-timing jitter에 강건**·도파민 등 신경조절에 민감(**presynaptic CB1R과 D2R 모두 필요**).
- **부위 특이성**: DLS에서는 유도되나 **DMS(등내측 선조체)에서는 유도 불가**(1 Hz·2.5 Hz 모두) → DLS 시냅스가 성긴 발화만으로도 가소성을 표현하기에 더 유리.
- **행동 근거**([[piette-2026-striatal-endocannabinoids-drive-one-shot]]): 끈끈이 테이프와 **수 초** 접촉한 마우스에서만 DLS corticostriatal 강화가 24 h 후 남고, CB1R/D2R 조건부 KO나 DLS 국소 AM251이 학습을 막는다. **NMDAR 차단(D-AP5)은 무영향**. **긴 접촉(>20 s)에서는 이 모든 의존성이 사라진다**.
- **역할 모델**: eCB-LTP는 **priming** — 짧고 현저한 자극이 광범위한 집단에 빠른 시냅스 변화를 깔고, 이후 정교화·공고화가 시냅스 부분집합을 선택·안정화. 실제로 **두 번째 인출 시점에는 KO와 대조가 동등**해져, eCB-LTP는 최초 각인에만 필요.

### 규칙 2 — BTSP (해마)
- **Behavioral timescale synaptic plasticity**: 해마 CA1 추체세포에서 **초 단위로 떨어진 사건들**을 연결하는 수상돌기 plateau 기반 규칙. 장소장(place field)의 형성·리매핑과 연결.
- One-shot 학습 규칙의 대표 선례. [[piette-2026-striatal-endocannabinoids-drive-one-shot]] 저자들은 **선조체 SPN에도 BTSP 유사 칼슘 plateau 규칙이 있는지**를 후속 과제로 제시.
- **주의**: 이 위키에는 BTSP를 1차로 다룬 자료가 없다. 위 내용은 Piette 2026의 서술 범위 안에서만 기록한다.

### 규칙 3 — STDP와의 관계
- 고전 **STDP**는 수십 밀리초의 정밀한 pre-post 시간차를 요구해 노이즈에 취약하다는 비판을 받아 왔다(speed–amplitude trade-off).
- eCB-LTP는 그 예외 — **긴 eligibility trace를 통해 시간적으로 떨어진 사건도 통합**할 수 있고, 낮은 빈도에서도 작동한다.
- 계산 도구: **"plasticitymeter"** — 2-AG 농도와 pre/post spike train으로부터 eCB-LTD/eCB-LTP/NMDA-LTP 유도 이벤트를 예측하는 검증된 corticostriatal STDP 모델. 실제 in vivo spike train을 입력해 **어떤 가소성 규칙이 실제로 켜졌는지**를 추정할 수 있다.

### 경험 지속시간에 따른 분업 (핵심 주장)
| | 짧은 1회 경험 (<20–25 s) | 길거나 반복된 경험 |
|---|---|---|
| 발화 패턴 | 성긴 spike, 상관된 피질–선조체 쌍↑ | 조밀한 spike, 짝짓기 다수 |
| 가소성 규칙 | **eCB-LTP** | **NMDA-LTP** (및 다른 회로) |
| 차단 시 | 학습 실패 | 학습 정상 |
| 무대 | DLS | DMS·피질 등 (미규명) |

- 이 분업의 **역방향 검증**: 짧은 접촉 후에는 eCB-LTP가 ex vivo에서 **occlude**되지만 NMDA-LTP는 여전히 유도 가능; **인출(retrieval) 이후**에는 one-shot learner에서 NMDA-LTP도 occlude → 경험 직후 eCB 경로, 공고화 단계 NMDA 경로의 순차 구조.

## 섭식·보상 연구로의 함의 (가설)
- **단일시행 식이 학습**: [[concept-conditioned-taste-aversion]](1회 malaise로 평생 회피)·[[concept-flavor-nutrient-conditioning]]은 대표적 one-trial 학습이다. 다만 이들의 회로는 편도·PBN·NTS 축이므로 **DLS 결과를 그대로 이식할 수 없다** — 본 위키 자료 범위 내에서 미검증 가설로 표시.
- **1회 폭식 → 습관**: [[giovanniello-2025-a-dual-pathway-architecture-for]]는 만성 스트레스가 goal-directed→habit 전환을 만든다고 본다. eCB-LTP 분업은 그 전환의 **초기 각인 단계에 별도 규칙**이 있을 가능성을 제기한다.
- **전신 CB1 차단의 대가**: rimonabant류가 철회된 인지·정동 부작용은 [[concept-endocannabinoid-system]]의 말초 섭식 역할만으로는 설명되지 않는다. eCB-LTP가 중추 학습 규칙이라는 점이 회로 수준 설명을 제공한다.

## 관련 페이지
- [[piette-2026-striatal-endocannabinoids-drive-one-shot]] — 본 개념의 1차 출처(Nat Neurosci 2026, Venance lab).
- [[concept-endocannabinoid-system]] — eCB-LTP의 분자 기반(2-AG·CB1R) 개념 hub.
- [[concept-medium-spiny-neuron]] — 가소성이 일어나는 선조체 주 뉴런.
- [[concept-dopamine-reward-system]] — presynaptic D2R이 eCB-LTP에 필수 → 도파민이 학습 규칙을 gating.
- [[concept-conditioned-taste-aversion]] · [[concept-flavor-nutrient-conditioning]] — 단일시행 식이 학습 패러다임(연결 가설).
- [[giovanniello-2025-a-dual-pathway-architecture-for]] — goal-directed↔habit 전환(반복 경험 축).
- [[fallon-2026-striatal-pathways-dissociably-control-action]] — 같은 DLS의 dSPN/iSPN 출력 분업.
- [[huang-2024-dopamine-mediated-interactions-between-short]] — 단기↔장기 기억 gating의 도파민 기전(초파리 MB).
