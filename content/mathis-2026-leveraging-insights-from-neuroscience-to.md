---
title: "Leveraging insights from neuroscience to build adaptive artificial intelligence (Mathis 2026, Nature Neuroscience)"
type: paper
created: 2026-08-19
updated: 2026-08-19
source: "raw/2026 Nature Neuroscience. Leveraging insights from neuroscience to build adaptive artificial intelligence (1).pdf"
authors: [Mathis MW]
year: 2026
journal: Nature Neuroscience
---

> [!takeaway] 연구 방향 관점의 핵심
> 짝 논문([[mathis-2026-joint-modelling-of-brain-and|NRN 2026]])의 **역방향** — 뇌에서 배워 **적응형(adaptive) AI**를 만들자는 Perspective. 사용자 lab에 실질적인 대목은 두 가지다. (1) **internal model / prediction error를 학습 신호로 쓴다**는 프레임은 섭식 회로 해석과 구조적으로 같다 — [[concept-dopamine-reward-system|RPE]]가 보상 예측오차이듯, [[mcknight-2026-attenuated-hypothalamic-response-to|AgRP의 영양소별 차등 억제]]나 [[aitken-2024-negative-feedback-control-of-hypothalamic|맛에 의한 bout별 AgRP 억제]]는 **섭취 결과에 대한 예측오차 갱신**으로 읽을 수 있다. (2) 실무 도구 측면에서, 저자가 제안하는 **agentic 시스템**(pose·genomic·neural·vision-language 인코더를 LLM이 동적으로 라우팅하고 prediction error로 신뢰도를 감시)은 [[concept-computational-ethology|행동 자동 정량화]] 파이프라인의 다음 단계 청사진 그대로다. 단, 이 논문은 리뷰/제안이지 결과 논문이 아니며 제안된 아키텍처는 아직 구현·검증되지 않았다는 점은 분명히 해 둘 것.

# Leveraging insights from neuroscience to build adaptive artificial intelligence (Mathis 2026)

## 한 줄 요약
"온라인 학습·일반화·빠른 적응"이 가능한 **adaptive intelligence**를 다음 목표로 두고, 동물의 내부모델(internal model)·예측오차·기억 재생(memory replay)·모듈성에서 AI 설계 원리를 끌어오자는 Perspective.

## 핵심 내용

### 출발 전제 — internal model
- 감각처리 지연 때문에 우리의 지각은 항상 **수십 ms 과거**를 재구성한 것. 뇌는 이를 극복하려 **world model**을 만들고 행동의 감각·운동 결과를 예측한다.
- 그런데 현대 AI 대부분은 **train–test–deploy 사이클**에 묶여 본질적으로 비적응적이다. OOD(분포 밖) 데이터를 만나면 무너진다.

### 적응하는 동물 행동 — 실험 패러다임의 진화
- **Zero/few-shot 학습**: 미로에서 시간당 ~2,000 결정을 내리는 마우스가 **몇 번의 시행만으로** 물 보상 지점을 찾는다(기존 2AFC 과제 대비 학습률 1,000배). 새 보상 순서(A→B→C→D)를 zero-shot 추론.
- **mPFC의 task-structured memory buffer**: 과제 진행 단계를 추적하는 뉴런 — 기억 재생과 내부모델에 매핑될 수 있는 **neural schema**.
- **감각운동 적응**: visuomotor rotation·force-field 과제. 학습(새 내부모델 형성)과 적응(기존 모델 갱신)을 구분.
- **M1의 force memory indexing**: 운동 준비 전위(preparatory)에 학습된 force를 색인. force-predictive 부분공간과 직교하는 차원에서 **전 방향에 걸친 균일 이동**이 학습 후에도 지속 → 내부모델 갱신의 흔적.
- **BMI 연구**: 폐루프에서 어떤 뉴런이 얼마나 빨리 적응 가능한지 직접 검증 가능. 뉴런 유형별 차이 존재(pyramidal tract vs intratelencephalic 뉴런의 학습 속도 차).

### 생물학적 교사 신호 — prediction error (Fig. 2)
- **피질 예측오차 회로**: PV·SST·VIP 인터뉴런 아형별 기록으로 흥분·억제가 함께 학습 규칙을 구성. V1의 "mismatch" 뉴런(예상 시각 피드백 교란 시 반응), S1·M1·전두엽에도 유사 신호.
- **중뇌 RPE 회로**: VTA 도파민 + **GABA 뉴런**이 RPE 계산의 핵심 억제 회로.
- **위계적 예측오차**: cue-guided reward 과제에서 L2/3 체감각 뉴런의 보상 예측 자극 반응이 증강 → RPE 감소·confidence 증가. 규칙 반전 시 lateral OFC가 VIP 인터뉴런을 통해 **context-prediction error**를 신호(confidence 상실).

### AI 쪽의 현재 대응책과 한계
- **continual learning(평생학습)** — catastrophic forgetting 대응: local module composition, knowledge distillation, **EWC**(elastic weight consolidation), **synaptic intelligence**, memory replay.
  - EWC는 뇌영감은 아니지만 파라미터 제약으로 간섭을 줄임 → 신경 대응물은 "일부 회로(1차 감각영역)는 고정, 다른 회로(해마·신피질)는 가소적".
  - **synaptic intelligence**는 명시적으로 뇌 가소성에서 영감을 얻어 온라인 수행 가능.
- **memory replay**: 해마 sharp-wave ripple의 재생을 모사. Hopfield 네트워크의 연상기억과도 간접적으로 연결(2024 노벨상). LLM 쪽에선 AmadeusGPT(단·장기 메모리 모듈), MemGPT(벡터DB 지속 메모리), Voyager(Minecraft에서 과거 행동 재생) 등.
- **Box 1 — 신경발달과 inductive bias**: 세포 이주 타이밍, 활동 의존적 시냅스 가지치기(≈ knowledge distillation), Hox 유전자 기반 위계적 배선, 유전체 병목(genomic bottleneck ≈ 사전학습·전이학습), 발달기 **traveling wave**(트랜스포머 attention이 자연히 만드는 파동과의 유비).
- **Box 2 — SNN**: 스파이킹 신경망은 시간 의존·에너지 효율·엣지 컴퓨팅 친화(Loihi·TrueNorth·SpiNNaker). 학습 난이도가 컸으나 ANN→SNN 전이·직접 gradient 계산으로 개선 중.

### 저자의 제안 — 모듈형 agentic 시스템 (Fig. 4c)
1. **전문 인코더 모듈** 다수(pose estimation·genomic·neural spike·vision-language)를 개별 사전학습.
2. **LLM 기반 agent**가 사용자 질의("이 knock-out 유전자와 마우스 행동에 연관이 있나?")에 따라 인코더를 **동적으로 라우팅**.
3. 각 인코더 출력을 **공동 최적화된 하류 latent 공간**으로 토큰화 — 단일 파운데이션 모델보다 뇌에 가깝고 강력.
4. **prediction error를 LLM 디코더에 명시적으로 주입** — 인코더가 OOD·adversarial 공격에 대해 견고한지 상시 감시하고, 견고성이 임계 아래로 떨어지면 그 인코더만 "unlock"해 continual learning·memory replay·pseudolabeling으로 갱신. 전체 시스템은 오프라인이 되지 않는다.
   - 유비: **cortico-basal ganglia loop**의 skill learning ↔ habit formation 전환.
5. 논거: 뇌는 단일 거대 모델이 아니라 **각기 특화된 회로들의 상호연결**(매의 시각 해상도, 갯가재의 12색 광수용체) — "specialized agentic system"이 초지능 단일 모델보다 현실적인 길.

### 신경과학 쪽으로의 환류
- LLM이 이미 행동 신경과학에서 영상 데이터 디지털화·정량화에 사용 중.
- 신경 인코더를 통합해 **뇌의 모델**로도 쓰는 시도들 진행.
- 궁극적으로 적응형 agentic 시스템을 **로봇 하드웨어에 체화**해 완전 관측 가능한 감각운동계에서 강건성·일반화를 체계적으로 시험 → AI 발전이자 **마음 이론의 테스트베드**.

## 비판적 읽기
- Perspective 장르이므로 **새 실험 결과 없음**. Fig. 4c의 agentic 아키텍처는 제안이며, 인코더 "lock/unlock" 판정 기준·라우팅 신뢰성은 미구현.
- prediction error를 학습 신호로 쓰자는 주장은 매력적이나, 저자 스스로 "보상·예측 기반 지각 학습에서 순수 sensory prediction error의 역할은 제한적이라는 결과도 있다"고 단서를 단다.
- 생물학적 유비(genomic bottleneck ≈ pretraining, pruning ≈ distillation)는 시사적이지만 **느슨한 은유** 수준.

## 관련 페이지
- [[mathis-2026-joint-modelling-of-brain-and]] — 같은 저자 짝 논문. 이쪽이 "뇌→AI", 저쪽이 "AI→뇌·행동 모델링". 함께 읽어야 완결.
- [[concept-joint-brain-behaviour-modelling]] — 결합 모델링 개념 hub.
- [[concept-computational-ethology]] — 제안된 agentic 파이프라인이 향하는 실무 영역.
- [[concept-dopamine-reward-system]] — VTA RPE 회로가 본 논문의 "생물학적 교사 신호" 원형.
- [[gershman-2024-explaining-dopamine-prediction-errors-beyond]] — 예측오차의 확장(belief-state); 본 논문의 위계적 예측오차 논의와 직결.
- [[mcknight-2026-attenuated-hypothalamic-response-to]] · [[aitken-2024-negative-feedback-control-of-hypothalamic]] — 섭식 회로에서 예측오차형 갱신으로 읽을 수 있는 사례.
- [[concept-need-motivation-pleasure-utility]] — 내부모델·예측 프레임이 접속하는 이론 틀.
- [[weinreb-2026-spontaneous-behavior-is-a]] — mPFC task-structured 상태 부호화; 본 논문의 "neural schema" 논의와 대응.
- [[liu-2025-castle-a-training-free-foundation-model]] · [[mueller-2025-privi-towards-general-purpose-video]] — 제안된 "전문 인코더 모듈"의 실물 사례.
- [[weber-2025-interoceptive-origin-reinforcement-learning]] — RL을 interoception 기반으로 재정의; AI×Neuroscience 인접.
- [[padamsey-2022-neocortex-saves-energy-by]] — 에너지 제약이 coding precision을 바꾸는 사례; SNN 에너지 효율 논의와 대비.
