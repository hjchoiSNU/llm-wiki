---
title: Striatal endocannabinoids drive one-shot learning (Piette 2026)
type: paper
created: 2026-08-15
updated: 2026-08-19
source: raw/2026 Nature Neuroscience. Striatal endocannabinoids drive one-shot learning.pdf
authors: [Charlotte Piette, Arnaud Hubert, Sylvie Perez, Jérémy Peixoto, Nicolas Gervasi, Hugues Berry, Jonathan Touboul, Laurent Venance]
year: 2026
journal: Nature Neuroscience
doi: 10.1038/s41593-026-02392-z
---

> [!takeaway] 연구 방향 관점의 핵심
> **단 한 번의 짧은 경험(수 초)으로 만들어지는 기억은 NMDA-LTP가 아니라 endocannabinoid-LTP(eCB-LTP)라는 "비고전적" 가소성 규칙이 담당**한다 — 15회 정도의 성긴 post-pre 짝짓기만으로 유도되고, spike-timing jitter에 강하며, 도파민 등 신경조절에 민감. 최형진 lab 관점: ① [[concept-endocannabinoid-system]]을 말초 지방 섭취 축에서 **중추 학습 규칙**으로 확장하는 논문이고, ② **conditioned taste aversion·flavor-nutrient conditioning 같은 one-trial 식이 학습**의 시냅스 기질 후보를 제공하며, ③ "짧은 경험 = eCB-LTP / 긴·반복 경험 = NMDA-LTP"라는 **경험 지속시간에 따른 가소성 분업**은 폭식 1회 경험이 습관으로 굳는 경로를 묻는 데 직접 쓰인다.

# Striatal endocannabinoids drive one-shot learning (Piette 2026)

## 한 줄 요약
마우스가 끈끈이 테이프와 **단 한 번, 수 초** 접촉한 것만으로 24시간~1개월 지속되는 회피 기억을 만드는데, 이 one-shot learning은 등외측 선조체(DLS)의 **CB1R·D2R 의존 eCB-LTP**를 필요로 하며 NMDAR는 불필요하다 (Nat Neurosci 2026, Venance lab / Collège de France).

## 핵심 내용

### 배경 — 왜 "비고전적" 가소성인가
- One-shot learning(단일·짧은 경험 후 장기기억)은 **적은 수의 활동전위·버스트**만 동원하므로, 반복 자극을 요구하는 고전 가소성 규칙으로 설명하기 어렵다.
- DLS의 corticostriatal 시냅스에서 STDP는 **적은 수의 짝짓기(~15 post-pre pairings)로 eCB-LTP**, **반복 자극(100 pairings)으로 NMDA-LTP**를 유도한다 — 저자들의 가설: 이 두 경로가 각각 **짧은 1회 경험 vs 길거나 반복된 경험**을 담당.
- 기존 one-shot 후보였던 해마 **BTSP**(behavioral timescale synaptic plasticity)의 선조체 대응물을 묻는 셈.

### 행동 패러다임 — STA test (sticky tape avoidance)
- 보상·처벌 없는 자발 행동: habituation → **familiarization**(빈 arena에 끈끈이 테이프 1장; 마우스가 반드시 붙었다가 떼어냄 = one-shot 경험) → **≥24 h 후 retrieval**(다른 위치에 새 테이프). 대조는 **n-STA**(안 끈적이는 테이프).
- 정량: 접촉 전후 행동 특징(latency-to-contact·detours·sniffings·U-turns·side passages·접촉 전 속도·접촉 부위·gaze)의 **PCA 기반 avoidance index**. Retrieval에서 **63%가 avoider**로 분류; latency·detour 등 개별 지표와 일치.
- **짧아도 충분**: 접촉 <5 s만으로도(전체의 58%) 장기 회피 형성. **>1 min의 긴 접촉은 avoider 비율을 늘리지 않음** — 학습은 수 초 만에 asymptote.
- **혐오·스트레스 아님**: corticosterone은 테이프 노출·retrieval 후 유의하게 오르지 않음. 단, familiarization **직후**(직전 아님) 절대 corticosterone이 avoidance index와 상관(r=0.750, P=0.032) → saliency 수준이 학습의 질에 영향.
- **지속·간섭 저항**: 72 h·1주·1개월 후에도 회피 유지. 사이에 다른 선조체 의존 과제 3종(가속 rotarod·cross-maze·novel object recognition)을 끼워도 유지.

### In vivo — 짧은 접촉만이 corticostriatal 강화를 남긴다
- S2 체성감각피질 종말에 ChR2 발현, DLS에 optrode 만성 삽입 → **ChR2-LFP 후기 성분**을 corticostriatal 가소성 proxy로 사용(TTX·AMPA/NMDA 차단으로 시냅스 성분 확인).
- Familiarization 24 h 후 **STA 조건에서만** ChR2-LFP 유의 강화(P=0.023). No-tape·n-STA는 변화 없음. 강화는 최소 **48 h 지속**, retrieval 시 재유도되지 않음(occlusion 시사).
- **접촉 지속시간이 분기점**: 짧은 접촉(2–20 s) 마우스의 **91%**가 강화, 긴 접촉(>20 s) 마우스의 **75%**는 강화 없음. 강화를 보인 개체는 모두 retrieval에서 **높은 avoidance index**(ANCOVA P=0.041).
- 긴 접촉에서도 회피 행동 자체는 나타남 → **긴 경험은 다른 회로/기전**(DMS·피질 등)이 담당할 가능성.

### Neuropixels + 계산 모델 — 접촉 중 발화 패턴이 eCB-LTP 영역에 있다
- Head-fixed **Mobile HomeCage**에서 S1 피질 58±24 뉴런 + DLS 73±39 뉴런 동시 기록(n=9).
- 접촉 중 발화는 **매우 성김**: 중앙값 1–3 Hz, 짧은 접촉 동안 피질 30%·선조체 27% 뉴런이 침묵, 28%·23%는 5–20 spikes. 긴 접촉(>80 s)에서는 90% 이상이 25 spikes 이상.
- **짧은 접촉은 상관된 피질–선조체 쌍 수를 늘리되(61% vs 긴 접촉 11%), 짝짓기 횟수가 많은 쌍은 줄인다(2% vs 38%)** → in vitro eCB-LTP 유도 조건(0.1–2.5 Hz에서 5–20 pairings)과 정확히 겹침.
- **"Plasticitymeter"**: 2-AG 농도와 pre/post spike로부터 eCB-LTD/eCB-LTP/NMDA-LTP를 예측하는 검증된 corticostriatal STDP 수학 모델에 실제 spike train을 입력. 짧은 접촉이 **eCB-LTP 유도 이벤트 밀도·누적시간 모두 유의하게 큼**(Z>3.59 누적시간, P=0.0079). eCB-LTD의 대칭적 증가로 상쇄되지 않음.
- **직접 측정**: DLS에 **GRAB_eCB2.0** 광섬유 photometry — 테이프 접촉 ~10 s 후 eCB 상승(무기능 변이체 GRAB_eCB2.0mut·시간 shuffle 대조 대비 P=0.011, P=0.040).

### Ex vivo occlusion — eCB-LTP는 소진되고 NMDA-LTP는 남는다
- **부위 특이성**: 15 post-pre pairings(1 Hz)로 eCB-LTP는 **DLS에서만** 유도, **DMS에서는 불가**(1 Hz·2.5 Hz 모두).
- **STA 후 occlusion**: 짧은 접촉 마우스에서 eCB-LTP가 **occlude**(30분 후 P=0.3906, 24 h 후 P=0.3090) — 즉 in vivo에서 이미 발현됨. **긴 접촉에서는 여전히 유도 가능**(P=0.0191) = 발현 안 됨. 실제로 **학습한(avoidance index>0) 개체에서만** occlude(P=0.2409), 학습 안 한 개체(P=0.0327)·수동 제거 개체(P=0.0436)는 유도 가능.
- **NMDA-LTP(100 pairings)는 짧은 접촉으로 occlude되지 않음**(P=0.0391, 여전히 유도) — 단 **retrieval 이후 one-shot learner에서는 occlude**(P=0.00015). 긴 접촉에서는 occlude 안 됨(P=0.1558).
- → **경험 직후엔 eCB 경로, 인출·공고화 단계에서 NMDA 경로**로 이어지는 순차 구조.

### 인과 — CB1R/D2R 결손과 약리 차단
- **조건부 KO**: S2 피질에 AAV-Cre 주입해 **presynaptic CB1R** 또는 **D2R** 삭제(CB1R^flox/flox·Drd2^lox/lox). 두 경우 모두 **eCB-LTP 소실**(acute slice, 15 pairings).
- 행동: familiarization은 정상. Retrieval에서 **짧은 접촉 시에만** 학습 장애 — latency-to-contact↓(CB1R P=0.006, D2R P=0.0078), detours↓, avoidance index↓(P=0.0094 / P=0.0006), avoider 비율↓(CB1R 18% vs 대조 유사 수준; P=0.022 / P=0.018). **긴 접촉에서는 KO도 정상**.
- **ChR2-LFP 확인**: 짧은 접촉 후 대조 67% 강화 vs KO 0%(Fisher P=0.009).
- **두 번째 retrieval(24 h 후)에서는 KO와 대조가 동등** → eCB-LTP는 **최초 각인**에만 필요, 공고화·기억 전달은 독립적으로 진행("priming mechanism").
- **약리**: DLS 국소 **AM251**(CB1R 길항, 5 µM) familiarization 30–45분 전 주입 → 짧은 접촉 학습 장애(latency P=0.017, detours P=0.008, avoidance index P=0.025, avoider 비율 P=0.00804), 긴 접촉 무영향. **D-AP5**(NMDAR 길항, 500 µM)는 **짧든 길든 전혀 영향 없음**.
- **운동학습으로 일반화**: 가속 rotarod 1–2일 차 이후 eCB-LTP가 occlude(P=0.709)되나 비가속 단일 세션 후엔 안 됨; D2R 결손 마우스는 rotarod 초기 2일 수행 저하 → eCB-LTP는 **절차학습의 초기 획득기**에도 관여.

### 저자 해석·한계
- eCB-LTP는 **적은 짝짓기·낮은 빈도(0.1 Hz도 가능)·spike-timing jitter 강건성**이라는 성질 때문에 성긴 발화만 있는 one-shot 경험에 적합. NMDA-LTP는 후기 학습 단계 정밀 튜닝.
- 저자들의 모델: **eCB-LTP = priming** — 짧고 현저한 자극이 광범위한 집단에 빠른 시냅스 변화를 깔고, 이후 정교화·공고화가 시냅스 부분집합을 선택·안정화.
- 한계: 긴 접촉 후 회피의 기질은 미규명(DLS에 LTP 없음, KO/약리 무영향 → DMS·피질 등 다른 회로 시사). Ex vivo NMDA 경로 부분 occlusion이 in vivo LFP로 안 잡힘 → LTP가 시냅스 부분집합에 국한되거나 eCB-LTD 등이 상쇄할 가능성. eCB-LTP는 여전히 "비전형" 규칙으로 특성·일반화 검증 필요.

## 왜 이 위키에 중요한가 (섭식·보상 관점)
- **개념 확장**: 본 위키의 [[concept-endocannabinoid-system]]은 지금까지 **말초(장) 2-AG→CB1→지방 섭취**([[dipatrizio-2011-endocannabinoid-signal-in-the-gut]]) 축 중심이었다. 본 논문은 같은 리간드·수용체가 **중추 시냅스의 학습 규칙**이라는 두 번째 얼굴을 붙인다 — rimonabant류 전신 CB1 차단의 인지·정동 부작용을 이해하는 회로 근거이기도 하다.
- **One-trial 식이 학습**: [[concept-conditioned-taste-aversion]]·[[concept-flavor-nutrient-conditioning]]은 대표적 단일시행 학습이다. 본 논문은 그 시냅스 규칙 후보(eCB-LTP)와 검증 도구(occlusion·plasticitymeter·GRAB_eCB2.0)를 제공한다. 다만 CTA는 편도·PBN·NTS 축이므로 **DLS 결과를 그대로 이식할 수는 없고**, 이 위키의 자료 범위 내에서는 미검증 가설이다.
- **1회 폭식이 습관이 되는가**: [[giovanniello-2025-a-dual-pathway-architecture-for]]는 만성 스트레스가 goal-directed→habit 전환을 만든다고 본다. 본 논문의 "짧은 경험=eCB-LTP / 반복 경험=NMDA-LTP" 분업은 **habit 고착의 초기 각인 단계**에 별도 규칙이 있음을 시사한다.

## 관련 페이지
- [[concept-one-shot-learning]] — 본 논문이 정의하는 단일시행 학습·가소성 규칙 개념 hub.
- [[concept-endocannabinoid-system]] — 리간드·수용체·대사 경로 hub. 본 논문이 **중추 학습 규칙** 축을 추가.
- [[concept-medium-spiny-neuron]] — 가소성이 일어나는 선조체 주 뉴런(SPN/MSN); D2R 결손이 학습을 막음.
- [[fallon-2026-striatal-pathways-dissociably-control-action]] — 같은 DLS의 dSPN/iSPN 기능 분업(steering vs counting); 본 논문은 그 시냅스 입력단 가소성.
- [[giovanniello-2025-a-dual-pathway-architecture-for]] — goal-directed↔habit arbitration; DLS=habit 무대라는 통설과 본 논문의 "DLS=초기 획득에도 관여" 주장 대비.
- [[concept-dopamine-reward-system]] — presynaptic **D2R**이 eCB-LTP에 필수 → 도파민이 학습 규칙 자체를 gating.
- [[concept-conditioned-taste-aversion]] · [[concept-flavor-nutrient-conditioning]] — one-trial 식이 학습 패러다임(가설적 연결).
- [[concept-hedonic-hotspot]] — NAc shell 핫스폿에서 엔도카나비노이드가 '좋아함'을 증폭하는 별개 축(같은 분자, 다른 기능).
- [[dipatrizio-2011-endocannabinoid-signal-in-the-gut]] — 말초 eCB→지방 섭취 축(본 논문의 중추 축과 대비).
- [[concept-computational-ethology]] — 본 논문의 PCA 기반 avoidance index·궤적 정량이 속한 행동 계측 문제.
- [[zhang-2026-inherited-input-and-local-transformations]] — 부위별 국소 변환의 존재를 신호 수준에서 확인(pDMS 경로대립 가치·pVLS ramping이 입력에 부재). 본 논문의 DLS vs DMS 가소성 규칙 분업이 그 분자 후보 중 하나 (bioRxiv 2026).
- [[concept-h3-dopaminylation]] — 도파민이 가소성 규칙을 넘어 **크로마틴 상태**까지 직접 쓰는 세 번째 층.
- [[marcus-2026-endocannabinoids-facilitate-reward-engagement-through]] — 같은 해 선조체 eCB 논문의 **상보 축**: 이쪽은 학습(가소성), 저쪽은 진행 중 행동의 실시간 조율 (Nature 2026).
