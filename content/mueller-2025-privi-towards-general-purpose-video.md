---
title: "PriVi: Towards a General-Purpose Video Model for Primate Behavior in the Wild"
type: paper
created: 2026-07-04
updated: 2026-07-04
source: raw/2025 PriVi- Towards a General-Purpose Video Model for Primate Behavior in the Wild.pdf
authors: [Mueller FB, Meier JF, Lueddecke T, Vogg R, et al. (Ecker AS)]
year: 2025
---

> [!takeaway] 연구 방향 관점의 핵심
> **행동 정량화(behavior quantification) 도구 논문** — appetite 회로 논문이 아님. NHP 영상에서 행동을 자동 인식하는 primate-specific video foundation model(V-JEPA 기반 self-supervised)로, frozen encoder + 경량 attentive classifier(~220k params)만으로 소량 라벨에서도 잘 동작. 최형진 lab 활용 현실선: (1) NHP 자유행동 영상의 markerless 행동 라벨링(eating, moving, climbing 등) 자동화 → 지금 수작업으로 하는 섭식·동기 행동 정량화 노동을 줄일 여지. (2) 단, 학습·평가 대상은 야생/동물원 침팬지·개코원숭이·마카크의 coarse ethogram(action recognition)이라, macaque operant/식이 실험의 fine-grained 계량(latency, bout, anticipatory)엔 그대로 쓰이지 않고 별도 라벨·튜닝 필요. 직접 appetite 관련성은 낮고, 어디까지나 방법 인프라로 참고.

# PriVi: Towards a General-Purpose Video Model for Primate Behavior in the Wild

## 한 줄 요약
비인간 영장류(NHP) 행동 인식을 위한 **primate-centric video pretraining 데이터셋(PriVi, 424시간)**과, 그 위에 V-JEPA를 self-supervised로 continue-pretraining한 뒤 **frozen encoder + 경량 attentive classifier**로 행동을 분류하는 프레임워크. 사람 중심(human-centric) 사전학습 모델보다 4개 벤치마크(ChimpACT, PanAf500, BaboonLand, ChimpBehave)에서 일관되게 우수하고, 라벨이 적을수록 이점이 커짐.

## 핵심 내용

**Problem.** 기존 컴퓨터비전 행동 인식은 (a) 대체로 human-centric 사전학습 모델에 의존해 out-of-domain이고, (b) 데이터셋마다 특화된 모델을 새로 학습해 일반화가 안 됨. 저자들은 model-centric에서 **data-centric**으로 관점을 옮겨, 영장류 영상만으로 broad하게 사전학습하는 **domain-level pretraining**을 제안(대상 데이터셋 자체는 사전학습에 포함하지 않음).

**Data (PriVi).** 424시간의 curated 영상. **R&O(Research & Observational)** 11개 source에서 174시간 + **YT-Filtered** 19개 YouTube playlist에서 relevance filtering으로 250시간. 종 구성: 마카크 43%, 침팬지 19%, 여우원숭이 10%, 개코원숭이 7% 등. 환경: in-the-wild 61%. 최종 720k개의 3초 snippet, 각 center frame에 bounding box·CLIP embedding 포함.

**Method (data curation pipeline).** seed dataset·text caption 없이 자동 curation. **Relevance filtering**(CLIP embedding + MLP, ROC-AUC 95.9%), **Detection filtering**(zero-shot GroundingDINO로 primate box 없는 chunk 폐기), **Subsampling**(다양성 비율 조정).

**Method (model).**
- **Domain-Level Pretraining**: V-JEPA(ViT-L)를 VideoMix2M 가중치에서 시작해 PriVi로 75k step self-supervised(latent masked prediction) continue-pretraining. **primate-centric cropping**이 유의미 기여.
- **Dataset-Level Pretraining(DaLP, optional)**: 대상 데이터셋 영상으로 추가 unsupervised 사전학습.
- **Attentive classifier**: encoder **frozen**, 클래스당 learnable CLS token + 3-layer self-attention, 단 **220k parameters**(V-JEPA2의 49M cross-attention이 소형 데이터셋엔 overfitting한다는 가설).

**Results.**
- 4개 벤치 전부 prior SOTA 상회. PriVi+DaLP가 ChimpVLM(167M), VideoMAEv2 full finetune 등을 220k param frozen classifier로 능가.
- **PriVi 사전학습이 human-centric(V-JEPA)보다 모든 데이터셋에서 우수**, YT-Filtered+R&O 결합 시 추가 이득.
- **Label efficiency**: PanAf500에서 라벨 10%로도 X3D의 100% 라벨 성능 상회.
- **Predicted detections(GT box 없이)**: zero-shot SAM3 + 본 방법이 ChimpACT에서 AlphaChimp(fully-finetuned SOTA) 상회.

**Limitations.** 여전히 11개 research setup만 포괄; 라벨 데이터 부족으로 **침팬지·개코원숭이에서만 평가**; coarse action classification 수준.

## 관련 페이지
- [[ha-2024-hypothalamic-neuronal-activation-non-human]] — 같은 NHP(마카크) 대상이나 목적이 반대: 저쪽은 자유행동 섭식을 chemogenetic으로 조작·계측하는 신경생물 실험, 이쪽은 그 종류의 NHP 영상에서 행동을 자동 라벨링하는 CV 도구. 행동 정량화 파이프라인 후보로 상호 참조.
- [[wang-2026-multimodal-alignments-of-in]] — 둘 다 신경과학용 **방법론/도구 논문**. 저쪽은 in vivo 영상↔분자정체 정합, 이쪽은 행동 영상↔행동 라벨 정합으로 "측정 인프라" 성격에서 나란함.
- [[matsuda-2020-diet-and-feeding-behavior-of]] — 야생 영장류 자연 섭식행동 관찰; 본 CV 도구가 정량화 대상으로 삼을 수 있는 자연주의 primate 행동 데이터의 예.
