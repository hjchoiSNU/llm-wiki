---
title: "배고픔을 mesolimbic dopamine에 잇는 시상하부 회로: AgRP→PVH Y1R (Bacharach 2026)"
type: paper
created: 2026-11-22
updated: 2026-11-22
source: "raw/2026 bioRxiv (Alhadeff) A hypothalamic circuit links hunger to mesolimbic dopamine to drive feeding.pdf"
authors: [Sam Z. Bacharach, Katherine A. Zappetti, Laryssa O. Coutinho, Amanda Bacherer, Joseph I. Wahba, Heather M. Schneps, Zhong-Wu Liu, Marcelo O. Dietrich, Amber L. Alhadeff]
year: 2026
journal: "bioRxiv 2026.09.10.750730 v2 (2026-10-30), doi:10.64898/2026.09.10.750730 — Monell Chemical Senses Center / UPenn / Yale, 교신 Amber L. Alhadeff. preprint(미심사)."
---

> [!takeaway] 연구 방향 관점의 핵심
> 위키의 두 축 — **AgRP 항상성 회로**와 **mesolimbic dopamine 보상 회로** — 를 직접 잇는 회로 다리를 세운다. 핵심: hunger(AgRP 활성)는 dopamine을 **전반적으로 올리지 않고 "음식에만"** 선택적으로 증폭하며, 그 경로가 **AgRP→PVH의 Y1R(NPY1R) 글루탐산 뉴런 억제**다. 사용자 lab의 PVH(특히 `Npy1r`·MC4R·GLP-1R integrator) 연구와 정확히 겹치는 좌표이고, [[kim-2024-normative-framework-dissociates-need|Need(AgRP)→Motivation]] 전환의 세포·회로 구현 후보를 준다. 임상 함의: 이 회로가 HFD·비만에서 어떻게 깨지는지가 다음 질문 — DTx·GLP-1 표적으로서 PVH Y1R 노드가 후보.

# 배고픔을 mesolimbic dopamine에 잇는 시상하부 회로: AgRP→PVH Y1R (Bacharach 2026)

## 한 줄 요약
hunger(hypothalamic AgRP 뉴런 활성)는 VTA dopamine 뉴런에 대한 **억제성 입력을 줄여** mesolimbic dopamine이 **음식에만 선택적으로** 크게 반응하도록 gating하며, 이 경로는 **AgRP→PVH의 NPY→Y1R 뉴런 억제**가 매개하고, 음식 조우 초기(0–5분)의 그 dopamine 신호가 이후 섭취에 **인과적으로** 필요하다. (bioRxiv 2026 v2, Alhadeff lab, Monell)

## 핵심 내용

### 배경·문제
- hunger는 음식을 더 보상적으로 만들지만, **항상성 회로(hypothalamus)와 보상 회로(midbrain dopamine)가 어떻게 상호작용**해 섭식을 유도하는지는 불명확. [[concept-npy-agrp-neurons|AgRP 뉴런]]은 섭식·체중을 강력히 조절하고 [[concept-dopamine-reward-system|VTA]]→[[concept-nucleus-accumbens|NAc]] dopamine은 음식 동기를 매개하나, **AgRP 뉴런은 성체에서 VTA dopamine 뉴런과 직접 연결이 없다**. 그 사이 회로가 이 논문의 표적.

### 모델·방법
- GRAB-DA2h fiber photometry로 NAc dopamine 측정. AgRP 뉴런을 **hM3Dq(CNO)** 화학유전 활성 / **hM4Di** 억제, **ChR2** 광유전; VTA dopamine 뉴런은 **DAT-Cre;NPY-ires2-FlpO-D** 교배로 표지·조작. slice 전기생리로 VTA dopamine 뉴런의 mIPSC/mEPSC 측정. 6개 AgRP 투사(PVH·LHA·PVT·CEA·PAG·PBN) 광유전 projection-mapping. PVH 국소 약물(NPY·SHU9119·baclofen) 주입, PVH Y1R 뉴런 hM4Di.

### 결과 1 — AgRP는 DA를 직접 올리지 않고 "게이팅"한다
- AgRP 활성만으로는 NAc dopamine **평균 방출이 증가하지 않음**(dopamine transient 수만 소폭↑) → 직접 구동이 아니라 **더 흥분 가능한 상태로 전환**.
- AgRP 활성 60분 뒤 VTA dopamine 뉴런의 **mIPSC 빈도가 53% 감소**(실험 0.62 Hz vs 대조 1.32 Hz; 비 0.47, 95% CI 0.27–0.81, p=0.006; 31 cells/12 mice), **진폭·mEPSC는 불변** → **억제성 입력만 선택적으로 감소**.

### 결과 2 — 음식에만 선택적 증폭 (양방향)
- AgRP 활성은 **음식 제시 시 NAc dopamine을 크게 증폭**(대조는 불변); 새 초콜릿 펠릿은 초회엔 약하고 **경험 후 크게 증가**(학습된 음식).
- 비음식 자극엔 **반대**: 물체(Eppendorf tube)·코카인에 대한 dopamine 반응은 증폭되지 않고 오히려 **감소**(코카인은 유의) → hunger는 보상 처리를 전반적으로 올리는 게 아니라 **자극 종류에 따라 차등**(음식↑·비음식↓).
- food-restriction 마우스에서 AgRP를 **억제**하면 음식 유발 dopamine이 **뚜렷이 억제** → AgRP 활성이 hunger 시 음식-dopamine에 **필요·충분**.

### 결과 3 — 음식 조우 초기 dopamine이 섭식에 인과적으로 필요
- AgRP 유발 음식-dopamine 반응은 **이후 섭취량을 강하게 예측**하며, **초기 0–5분 반응이 최대 예측인자**(이후로 갈수록 예측력↓).
- NAc 국소 **flupentixol(D1/D2 길항)**이 AgRP 유발 섭식을 **용량의존적으로 감소**(운동량 불변).
- 음식 제시 후 **처음 5분만** VTA dopamine 광억제 → 이후 30분 섭취 감소; **10–15분** 억제는 효과 없음(운동량 불변).
- **closed-loop**: 음식에 접근할 때만 VTA dopamine 억제 → 섭취↓이지만 **접근 횟수는 불변** → 음식 추구 능력은 보존되나 **소비 개시/유지**가 손상(동기→consummatory 전환에 dopamine 필요).

### 결과 4 — AgRP→PVH Y1R 경로가 매개
- 6개 투사 중 **AgRP→PVH 말단 자극이 음식-dopamine 반응을 가장 강하게 증폭**(PVT 소폭, LHA·CEA·PAG·PBN 무효). PCA상 PVH 자극의 dopamine 동역학이 **세포체 활성과 가장 유사**. (섭식 자체는 PVH·LHA·PVT 자극이 올림.)
- 전 AgRP 활성 중 PVH 말단만 **eNpHR3.0로 억제**하면 음식-dopamine·섭취가 모두 감쇠 → AgRP→PVH가 **필요·충분**.
- PVH 국소 주입에서 **NPY만** 음식-dopamine·섭취를 증폭(SHU9119=MC4R·baclofen=GABA_B는 무효) → PVH에서 hunger-dopamine를 잇는 **주 신호는 NPY**.
- AgRP 활성이 **PVH Y1R 뉴런의 Fos를 감소**; **PVH Y1R 뉴런을 hM4Di로 억제**하면 음식-dopamine·섭취가 증가(AgRP 활성 재현) → **NPY에 의한 PVH Y1R 뉴런 억제**가 핵심 기전.

### 해석·한계
- 저자 제안 회로(미검증): AgRP → (NPY/Y1R) PVH 글루탐산 뉴런 억제 → VTA GABA 뉴런 흥분 감소 → VTA dopamine 뉴런 탈억제. 단 PVH Y1R→VTA 직접 시냅스 여부·중간 억제 노드(LDT·peri-LC) 가능성 미해결. "왜 음식 특이적인가"(food-specific DA 뉴런 vs 광범위 반응 뉴런의 입력 게인 변화)도 미결.
- **preprint(미심사)**. AgRP의 음성가치 신호와 섭식 맥락의 양성강화라는 상반 결과를 "hunger는 불쾌하나 먹기를 더 보상적으로 만든다"로 화해. HFD·비만에서 이 회로가 깨지는지는 후속 과제.

## 관련 페이지
- [[concept-npy-agrp-neurons]] — AgRP/NPY 뉴런 hub. 본 논문이 AgRP의 **보상 회로 게이팅** 기능과 그 출력 노드(PVH)를 추가.
- [[concept-paraventricular-nucleus]] — PVH가 항상성뿐 아니라 **음식의 동기가치 조절**에 참여함을 보임. 그 페이지의 **Npy1R+ Glut(=행동상태 conductor, Xu 2020)** 항목과 직결 — Y1R 뉴런이 hedonic eating state에 enrich.
- [[concept-arcuate-nucleus]] — AgRP 뉴런의 소재지(ARC). hunger 신호의 출발점.
- [[krashes-2014-an-excitatory-paraventricular-nucleus-to]] — PVH↔AgRP 회로(상류: PVH→AgRP). 본 논문은 **하류 AgRP→PVH** 방향을 보탬.
- [[grove-2022-dopamine-subsystems-track-internal]] — VTA dopamine의 **자원별(음식·물) 하위시스템**. 본 논문의 "음식 특이적 dopamine 증폭" 해석에 직접 인용되는 틀(food-specific DA 뉴런 가설).
- [[concept-dopamine-reward-system]] · [[concept-nucleus-accumbens]] — 측정·조작 하류(VTA→NAc). hunger가 phasic 음식-dopamine을 gating한다는 회로 근거.
- [[concept-mc4r]] · [[concept-melanocortin-system]] — PVH Y1R 뉴런은 MC4R·GLP-1R 집단과 **부분적으로만 겹침** → 보상 신호 전용 PVH 하위집단 가능성.
- [[smith-2022-neuropeptide-y-modulates-excitatory-synaptic]] · [[concept-npy-nucleus-accumbens]] — NPY→Y1R 억제 신호의 다른 맥락(흥분성 시냅스 조절). 본 논문은 PVH에서 NPY가 음식-dopamine을 잇는 주 신호임을 보탬.
- [[davila-2026-agrp-neurons-are-required-for]] — AgRP가 GLP-1RA 체중감소에 필요. AgRP의 또 다른 약물-회로 교차점(본 논문은 AgRP→dopamine 보상축).
- [[kim-2024-normative-framework-dissociates-need]] — AgRP=Need / dopamine·LH=Motivation 분리. 본 논문은 **Need(AgRP)→음식-Motivation(dopamine)** 변환의 회로 구현 후보.
- [[rossi-2018-overlapping-brain-circuits-for]] — homeostatic·hedonic 회로의 중첩. 본 논문이 그 중첩의 구체적 배선(AgRP→PVH→mesolimbic DA)을 제시.
