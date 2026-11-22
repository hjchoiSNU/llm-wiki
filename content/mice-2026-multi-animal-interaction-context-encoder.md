---
title: "MICE: 다개체 상호작용 맥락 인코더 — 생쥐 행동 파운데이션 모델 (Su 2026)"
type: paper
created: 2026-11-22
updated: 2026-11-22
source: "raw/2026 arXiv (Anqi Wu) MICE- Multi-animal Interaction Context Encoder - A Hierarchical Foundation Model for Mouse Behavior.pdf"
authors: [Yen-Shuo Su, Weihan Li, Anqi Wu]
year: 2026
journal: "arXiv:2611.11644 (2026-11-08), NeurIPS 2026 Spotlight — Georgia Tech(Anqi Wu lab). code/weights: github.com/eric0708/MICE"
---

> [!takeaway] 연구 방향 관점의 핵심
> **행동 정량화(behavior quantification) 도구 논문** — appetite 회로 논문이 아니다. 기존 pose 파운데이션 모델이 개체를 따로 인코딩하고 **동물 수 N을 고정**해 **사회 행동(공격·구애·mounting·allogrooming)의 상호작용 신호를 버리는** 문제를, 개체별 운동학 인코더 위에 **Perceiver 사회 인코더**(학습된 latent codebook, 가변 N)를 얹어 해결. 사용자 lab 관점의 쓸모: ① 섭식 연구의 읽어내는 지표가 아직 "총 섭취량(g)" 수준이라는 병목([[concept-computational-ethology]])을 좁히는 **사회적 먹이 경쟁·집단 섭식** 분석 도구, ② frozen embedding + 소량 라벨(few-shot)로도 작동하는 **583K 파라미터 경량** 체크포인트라 소규모 lab에도 이식 쉬움. 한계: 2D keypoint 전용, 섭식-특이 평가 없음, preprint/학회 논문(신경 데이터 없음).

# MICE: 다개체 상호작용 맥락 인코더 — 생쥐 행동 파운데이션 모델 (Su 2026)

## 한 줄 요약
생쥐 pose(keypoint) 시계열에서 행동을 self-supervised로 인코딩하는 **2단계 파운데이션 모델**: 다중 시간척도 개체 인코더 + **Perceiver 사회 인코더**(학습된 latent 16슬롯)로 **동물 수에 무관한 단일 체크포인트**를 만들고, 6개 데이터셋(N=1–4, keypoint 7–27) 공동 사전학습으로 linear probing·분할·전이·few-shot에서 기존 keypoint 기반 베이스라인과 **같거나 더 높은** 성능을 583K 파라미터(hBehaveMAE의 ~1/7)로 달성. (arXiv 2026, NeurIPS 2026 Spotlight, Anqi Wu lab)

## 핵심 내용

### 배경 — 문제
- pose 추정(DeepLabCut·SLEAP)으로 keypoint는 대량 생산되지만 병목은 **(x,y) 궤적 → 행동 라벨**의 해석. self-supervised 파운데이션 모델이 자연스러운 해법이나, 생쥐 행동의 상당수가 **본질적으로 사회적**(aggression·courtship·mounting·allogrooming).
- 기존 모델의 3가지 한계: ① **pooling이 상호작용 구조 파괴**(개체별 표현을 mean/max로 합치면 관계 신호 소실), ② **고정 순서·고정 N 입력**(학습 때 동물 수·순서를 못박음), ③ **골격 이질성**(lab마다 keypoint 집합이 달라 전이 불가).

### 방법 — 2단계 구조
- **보편 keypoint 공간**: MABe22 배치 따라 Kmax=12 keypoint(코·좌우 귀·목·좌우 앞발·등 중심·좌우 뒷발·꼬리 base/middle/tip)로 통일, named-synonym 매칭, 빠진 keypoint는 zero-pad+mask. 공동 사전학습에만 사용.
- **개체 인코더(Stage 1)**: 한 마리의 pose 시퀀스를 처리하는 **계층적 Transformer**(ALBERT 기반 양방향 attention). 12개 layer에서 **attention window가 깊이에 따라 연속적으로 확장**(ωshort=3 → ωlong=T) — paw step(수십 ms)·sniff(~1 s)·attack(수 초)의 다중 시간척도 포착. 4층씩 3 stage(가중치 공유)로 묶어 short/mid/long 3개 readout을 concat(96-d). 자기지도 손실 = Histogram-of-Activities(HoA) 예측 2개 + span-masked keypoint 재구성.
- **사회 인코더(Stage 2)**: frozen 개체 표현 위에서 작동하는 **Perceiver**. **학습된 latent codebook(M=16 슬롯)**이 현재 존재하는 N마리를 cross-attend → 시간축으로 refine → 각 개체로 되돌림(encode–process–decode). latent가 **행동 모티프(chasing·대면·평행 이동)에 특화**되고, 각 동물은 자기가 참여한 모티프를 조회. 쌍(pair) 표현은 swap-invariant(합·Hadamard). 자기지도 손실 = pairwise HoA + pairwise 거리 회귀.
- **가변 N의 핵심**: keypoint 수는 해부로 Kmax=12 상한이 있으나 **동물 수 N은 상한이 없다**(집단 사육·colony·cross-species). Perceiver가 존재하는 개체만 cross-attend → **단일 체크포인트가 임의 N에서 동작**(재학습 불필요). 고정입력 베이스라인(TBERT·hBehaveMAE)은 학습 때 Nmax 못박고, pooling 베이스라인(BAMS·PointNet)은 N은 받되 상호작용 신호 소실.

### 결과
- **6 데이터셋**(MABe22·CalMS21·CRIM13·MouseLockbox·AdaptableSnail·NiftyGoldfinch; N=1–4, native keypoint 7–27) 공동 사전학습, frozen embedding을 4 프로토콜로 평가.
- **Linear probing(macro-F1)**: MICE(ind+soc_cat)가 **모든 데이터셋에서 최강 베이스라인 이상**. 격차는 **마리 수가 많은 데이터셋**(MABe22 N=3, AdaptableSnail N=3–4)에서 가장 큼 → 가변-N·사회 모델링의 가치. 예: combined에서 MABe22 69.26 vs hBehaveMAE 47.82, CalMS21 84.56 vs 77.68.
- **사회 단계 기여**: ind_cat → ind+soc_cat 비교에서 모든 다개체 데이터셋(combined)에서 사회 인코더가 양의 기여. layer-wise probing도 사회 단계가 변별력을 점증.
- **공동 사전학습 이득**: 사회 구조를 공유한 5개 데이터셋에서 combined ≥ single. 비지도 **행동 분할**(K-means, ARI·NMI)에서 큰 차이로 선두(Boundary-F1은 hBehaveMAE와 동급).
- **경량**: 인코더 **583K 파라미터**(hBehaveMAE의 ~1/7)로 "가장 작은 경쟁 모델". 추가로 cross-dataset transfer·few-shot 라벨 효율·leave-one-dataset-out 평가.

### 한계·주의
- **2D keypoint 전용** 도구 논문. **신경 데이터·섭식 특이 평가 없음**(행동 인식 자체가 목적). 아키텍처는 생쥐 특이 가정 없이 타종 확장 가능하다고 주장.
- arXiv preprint이자 **NeurIPS 2026 학회 논문**(peer-review 통과). 사전학습 데이터는 공개 생쥐 사회행동 코퍼스라 **먹이 경쟁·집단 섭식** 같은 appetite-관련 사회행동에 바로 쓰려면 해당 라벨/데이터가 별도로 필요.

## 관련 페이지
- [[concept-computational-ethology]] — 행동 자동 정량화 hub. MICE는 지도 keypoint → 비지도 syllable → **파운데이션 모델** 세대 중 **다개체·사회 상호작용**을 가변 N으로 다루는 최신 축으로 추가(PriVi·CASTLE 옆).
- [[liu-2025-castle-a-training-free-foundation-model]] — CASTLE는 **영상(SAM+DINOv2)·training-free**로 행동 클래스 발견. MICE는 **keypoint·self-supervised pretraining**으로 사회 상호작용을 명시 모델링 — 입력 양식(영상 vs pose)·학습 패러다임이 상보.
- [[mueller-2025-privi-towards-general-purpose-video]] — PriVi는 primate **영상** foundation model(V-JEPA). MICE는 생쥐 **keypoint** foundation model로 **다개체 사회 구조**에 초점. 둘 다 frozen encoder + 경량 probe로 소량 라벨 대응(PriVi ~220k, MICE 583k).
- [[weinreb-2026-spontaneous-behavior-is-a]] — shMoSeq는 **단일 개체** 행동을 시간 위계(pose→syllable→state)로 분해. MICE의 개체 인코더가 다중 시간척도를 window 확장으로 포착하는 것과 같은 동기, 다만 MICE는 **사회(쌍) 상호작용**까지 확장.
- [[mathis-2026-joint-modelling-of-brain-and]] · [[concept-joint-brain-behaviour-modelling]] — 뇌–행동 결합 모델링 틀에서 **행동 임베딩 생성기**로 쓸 수 있는 후보(신경 데이터와 정합 전 단계). MICE 자체엔 신경 측정 없음.
- [[mathis-2026-leveraging-insights-from-neuroscience-to]] — 전문 인코더(pose·neural·VLM)를 라우팅하는 agentic AI 제안에서, MICE는 **pose·사회 행동 전문 인코더**의 구체 사례.
