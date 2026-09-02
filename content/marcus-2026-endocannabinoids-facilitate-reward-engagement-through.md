---
title: Endocannabinoids facilitate reward engagement through retrograde gain control (Marcus 2026)
type: paper
created: 2026-09-03
updated: 2026-09-03
source: raw/2026 Nature. Endocannabinoids facilitate reward engagement through retrograde gain control.pdf
authors: [David J. Marcus, Anthony E. English, Gunn Chun, Emmaline F. Seth, Rachel Oommen, Sabrina Hwang, Bailey A. Wells, Sean C. Piantadosi, Azra Suko, Sayaka J. Kenmochi, Anupritaa A. Parasnis, Ethan Ancell, Yulong Li, Larry S. Zweifel, Benjamin B. Land, Nephi Stella, Michael R. Bruchas]
year: 2026
journal: Nature
doi: 10.1038/s41586-026-10967-w
---

> [!takeaway] 연구 방향 관점의 핵심
> **"보상을 계속 붙잡고 있는 힘(engagement)"의 분자 스위치가 [[concept-endocannabinoid-system|2-AG]]임을 in vivo에서 인과적으로 규명.** [[concept-nucleus-accumbens|NAc]] D2R-Penk [[concept-medium-spiny-neuron|MSN]]이 활동 의존적으로 2-AG를 만들어 **역행성(retrograde)**으로 [[concept-paraventricular-thalamus|aPVT]]^NTS 흥분성 말단의 CB1R을 눌러, 들어오는 글루타메이트 입력을 실시간으로 깎아내는 **gain control**이 곧 "계속 먹으러 가는 상태"를 유지시킨다. 최형진 lab 관점: ① 섭식의 **appetitive/seeking phase 지속성**([[concept-appetitive-consummatory-phases]])을 설명하는 새로운 시냅스 기전이고, ② [[concept-need-motivation-pleasure-utility|NMPU]]의 **Motivation(wanting)** 축을 도파민 밖의 제3 통화(eCB)로 확장하며, ③ **포만 관련 행동(총 섭취량)은 건드리지 않고 engagement의 시간 구조만 바꾼다**는 해리는 "얼마나 먹는가"와 "얼마나 매달리는가"를 분리하는 도구가 된다.

# Endocannabinoids facilitate reward engagement through retrograde gain control (Marcus 2026)

## 한 줄 요약
자유행동 마우스의 [[concept-nucleus-accumbens|측좌핵]]에서 보상 추구 중 **2-AG가 활동 의존적으로 방출**되어, 시상(aPVT)→NAc 흥분성 말단의 **CB1R을 통한 역행성 억제**로 글루타메이트 입력을 깎아내며, 이 되먹임이 **보상 추구에 대한 관여(engagement)를 유지**시킨다 (Nature 2026, Bruchas lab / Univ. of Washington).

## 핵심 내용

### 배경 — 왜 "retrograde gain control"인가
- eCB는 포유류 뇌에서 가장 널리 발현되는 신경조절 시스템으로, **후시냅스에서 on-demand 합성 → 역행성으로 전시냅스 CB1R 활성 → 신경전달 억제**라는 비정통 방식으로 작동한다.
- 슬라이스 전기생리에서 eCB가 흥분성·억제성 입력을 여과한다는 것은 오래 알려졌으나, **자유행동 동물에서 eCB의 역행성 gain control이 실제 행동을 촉진하는지**는 확립된 바 없었다. 지질 특성상 in vivo 측정이 어려웠던 것이 병목.
- NAc는 6개 이상의 글루타메이트 입력을 받는데, 이 다양한 입력이 국소 신경조절로 어떻게 걸러져 행동으로 바뀌는지 불명확했다.

### 1. 보상 소비 중 NAc에서 eCB가 방출된다
- medial NAc shell에 **GRAB_eCB2.0** 형광 바이오센서 + 광섬유. Pavlovian 보상 조건형성(cue → 10% sucrose sipper, 5일).
- 훈련 1일차: 소비에 시간 잠금된 eCB 신호 상승.
- **5일차: 신호가 cue 개시 쪽으로 앞당겨짐** — 최대 반응의 약 50%가 보상 전달 *이전*에 도달. 즉 eCB 방출은 소비에만 묶인 것이 아니라 **보상 추구 행동·cue 부호화에 관여**.
- **보상 생략(omission)** 시험: 보상이 오지 않아도 신호는 여전히 증가 → 소비 자체가 아니라 seeking 상태에 연동.
- **2-AG 특이적**: DAGL 억제제 **DO34**가 신호를 강하게 감쇠, MAGL 억제제 JZL184는 증강. anandamide 가수분해 억제는 무효.
- **valence 비특이**: Pavlovian 공포조건형성에서 **foot shock도 eCB 방출을 유발**. 단 shock-predictive cue 자체는 무효.

### 2. 상류 회로 — aPVT^NTS → NAc
- NAc 투사 뉴런 역행성 추적 + RNAscope: NAc로 가는 5대 흥분성 입력(mPFC, aPVT, pPVT, BLA, vHPC) 중 **aPVT가 최대 비중이자 CB1R 공발현 최다**.
- **neurotensin(NTS)**이 pPVT 대비 aPVT에 선택적으로 풍부 → aPVT 유전적 handle로 사용([[concept-neurotensin]]).
- 전기생리: aPVT 입력은 **D1R⁻(추정 D2R⁺) 뉴런**에서 DSE(depolarization-induced suppression of excitation)를 보이고, **tonic eCB 신호가 D1R⁻ 시냅스의 흥분성 편향**을 만든다(SR141716로 반전).

### 3. aPVT^NTS–NAc 활동은 engagement와 음의 상관
- aPVT^NTS→NAc 말단 GCaMP6s photometry + sipper 관여 행동 정량.
- **sipper에 관여할 때 말단 활동 억제, 관여에서 이탈할 때 흥분** — 5일 학습에 걸쳐 pre-sipper 구간은 억제로, post-sipper 구간은 그 반대로 전환.
- 보상 생략에서도 억제가 유지 → 소비 자체에 의존하지 않음. 이동·운동량으로도 설명되지 않음(FR1·PR·개방장 대조).
- 공포 소거에서도 **freezing 관여와 음의 상관** → "관여(engagement) 일반"의 신호이지 valence 부호화가 아님.

### 4. 인과성 — 광유전·CRISPR
- **ChR2로 aPVT^NTS→NAc 말단 자극** → licking·sipper 관여 감소. **PPO(억제성 Gi opsin)로 억제** → 관여 증가.
- **CRISPR–Cas9로 aPVT NTS 뉴런의 *Cnr1*(CB1R) 결손** → engagement 유발성 말단 억제가 감소하고 sipper 관여 시간 감소. DO34도 동일 방향(약리·유전 상호 폐색).
- 중요: *Cnr1* 결손은 **자유 접근 시 총 licking 수를 바꾸지 않고**, licking의 **길이와 시간 구조(temporal pattern)**만 바꾼다 → **포만 관련 항상성 지표와 해리**.
- BLA^VGLUT1→NAc에서 같은 조작은 보상 추구에 유의한 영향 없음 → **aPVT 특이적**.

### 5. 2-AG의 출처 — NAc D2R-Penk 뉴런
- NAc Penk 뉴런(D2R와 95% 중첩) **광자극 → GRAB_eCB 신호 증가** → in vivo에서 2-AG 생산 세포 확인.
- **Trans-synaptic 표지**(AAV1-trans-DIO-FLP)로 *aPVT 입력을 받는* NAc^Penk 뉴런만 특정.
- **SLEAP 자세추정 + 지도학습 행동분류**(engage/disengage/walk/rear/groom) 기반 **closed-loop 광유전**: engagement 신호 검출 시 aPVT–NAc^Penk 자극 → ITI 구간 engagement 증가. **DO34 전처치로 완전히 소거** → 2-AG 의존.

### 6. 앙상블 부호화와 위상 동조
- GRIN 렌즈 1-photon 이미징으로 aPVT–NAc^Penk 뉴런 206개를 1일↔5일 추적 → 5개 클러스터(transient/sustained excited, transient/sustained inhibited, null).
- GLM: **cluster 2가 engagement를 양으로, cluster 3이 음으로 부호화**.
- Hilbert 변환·Rayleigh 검정: cluster 3은 **aPVT 축삭말단 활동에**(R=0.936, 위상차 −21°), cluster 2는 **GRAB_eCB 신호에**(R=0.892, 위상차 −1.1°) 동조 → 국소 2-AG 방출과 사실상 동시.

### 종합 모델
> 보상 추구 관여 → NAc D2R-Penk MSN 활동 의존적 **2-AG 생산** → 역행성 **CB1R** 작용으로 aPVT^NTS 말단의 글루타메이트 방출 억제 → 흥분성 구동 감소가 **관여 상태를 지속**시킴. 관여에서 이탈하면 억제가 풀리며 aPVT 말단이 흥분.
>
> 즉 **eCB = 단일세포 활동·신경조절물질 방출·Gi-GPCR 매개 흥분성 입력 조율을 잇는 feedforward 음성 되먹임 gain control**.

## 한계·유의점
- *Cnr1* 결손은 보상 추구 engagement를 감쇠시키되 **혐오(freezing) 관여는 온전** → 공포 쪽 관여에는 아직 규명되지 않은 별도 기전 존재.
- 2-AG 방출 자체는 보상·혐오 모두에서 일어나므로(valence 비특이), **방출의 유무가 아니라 어느 회로에서 무엇을 거르는가**가 특이성을 만든다.
- NAc^Penk는 NAc 뉴런의 40–50%로 이질적이며, 본 연구는 trans-synaptic 표지로 **aPVT 입력 수용 집단**만 분리해 이 한계를 부분적으로 우회했다.

## 관련 페이지
- [[concept-endocannabinoid-system]] — 본 논문이 추가하는 **세 번째 축**: 말초 지방 섭취(gut) · 중추 학습 규칙(eCB-LTP) 에 이어 **in vivo 행동 지속성의 gain control**.
- [[piette-2026-striatal-endocannabinoids-drive-one-shot]] — 같은 해 선조체 eCB 논문(가소성/학습 축). 본 논문은 **학습이 아니라 진행 중 행동의 실시간 조율**을 다뤄 상보적.
- [[concept-paraventricular-thalamus]] — 본 논문의 상류 노드(aPVT)와 그 개념 hub.
- [[concept-nucleus-accumbens]] — 2-AG 생산지이자 회로의 수렴점.
- [[concept-medium-spiny-neuron]] — D1R⁻/D2R-Penk MSN의 분업이 eCB 생산·DSE 표현의 기질.
- [[concept-neurotensin]] — aPVT를 pPVT에서 분리하는 유전적 marker.
- [[concept-need-motivation-pleasure-utility]] — engagement 지속성은 NMPU의 **Motivation** 축; 총 섭취량(Need)과 해리된다는 점이 핵심.
- [[concept-appetitive-consummatory-phases]] — appetitive(seeking) phase의 **지속** 기전으로 직접 대응.
- [[concept-dopamine-reward-system]] — wanting의 기존 주 통화(도파민)와 나란한 **제2 통화**로서의 eCB.
- [[concept-liking-wanting]] — eCB는 NAc 핫스폿에서 'liking'을, 여기서는 'wanting/engagement'를 매개 — 같은 분자의 이중 역할.
