---
title: "Hunger neurons track available food locations during foraging and spatial memory recall (Gruzdeva 2026)"
type: paper
created: 2026-08-15
updated: 2026-09-02
source: "raw/2026 bioRxiv. Hunger neurons track available food locations during foraging and spatial memory recall.pdf"
authors: [Anna Gruzdeva, Jamien Shea, Daniel Shi, Antonio Fernandez-Ruiz, Azahara Oliva, Nilay Yapici]
year: 2026
---

> [!takeaway] 연구 방향 관점의 핵심
> **AgRP hunger 뉴런이 "지금 배고픈가"를 넘어 "먹이가 어디에 있는가(거리)"까지 연속적으로 부호화**한다. 자유 foraging 중 AgRP 활성이 먹이까지의 **공간 거리에 비례**해 접근 시 하강·이탈 시 상승하는 **양방향 ramp**를 그리고, 이 신호는 (i) **단식 상태에서만**, (ii) **먹이를 발견해 학습한 뒤에만** 나타나며, (iii) 먹이를 치운 뒤 **기억 회상 중에도 유지**(시각 의존). → 사용자 lab의 [[kim-2024-normative-framework-dissociates-need|AgRP=Predicted Deficit(Need)]] 이론에 **공간(spatial) 차원**을 추가하는 결과: Need는 시간적 예측뿐 아니라 **"먹이까지의 거리"라는 학습된 공간 예측**으로도 계산된다. [[walker-2026-a-hypothalamic-circuit-for|Walker 2026]]의 "미래 결핍 예측" 회로와 짝을 이루며, 저자들이 제안한 **해마→LS→LH→DMH→AgRP** 후보 경로는 [[concept-hippocampus-feeding|해마-섭식 축]]을 hunger 회로에 직접 잇는 검증 가능한 가설. NMPU에서 Need(AgRP)와 Motivation(LH^LepR) 사이에 **공간 정보가 어디서 주입되는가**를 묻는 후속 실험 설계의 근거.

# Hunger neurons track available food locations during foraging and spatial memory recall

- **저널/연도**: bioRxiv preprint (posted 2026-07-30). DOI: 10.64898/2026.07.28.741066
- **소속**: Department of Neurobiology and Behavior, Cornell University. 교신 Nilay Yapici (Yapici·Oliva·Fernandez-Ruiz 랩 공동).

## 한 줄 요약
자유 foraging 마우스에서 fiber photometry로 ARC^AgRP 활성을 기록한 결과, **먹이 발견 이후의 AgRP 활성은 섭취·이동·grooming보다 "먹이까지의 공간 거리"로 가장 잘 설명**되며, 접근 시 감소·이탈 시 증가하는 방향성 gradient를 형성한다. 이 거리 신호는 대사상태(단식) 의존적이고, 학습으로 획득되며, 먹이가 사라진 뒤 기억 회상 중에도 (시각 cue가 있을 때) 유지된다.

## 핵심 내용

### 배경 — 왜 foraging인가
- [[concept-npy-agrp-neurons|ARC^AgRP]] 뉴런 연구는 대부분 **home-cage·cued-feeding** 패러다임(먹이가 고정된·쉽게 접근 가능한 위치)에서 수행됨. 이 조건에서 AgRP는 단식에 활성, 음식 감지 시 수 초 내 급강하(anticipatory drop)한다고 알려짐.
- 그러나 자연 foraging은 **공간적·동적 문제**: 넓은 환경을 탐색하고, 떨어진 자원 사이를 이동하고, 기억한 먹이 위치로 접근하고, 언제 떠날지 결정해야 한다.
- AgRP ablation이 공간·맥락 cue와 먹이 가용성의 연합 학습을 손상시킨다는 선행 보고가 있으나, **AgRP 활성 자체가 공간 차원을 추적하는지**는 미지.

### 방법
- **AgRP^Cre + AAV1-syn-FLEX-GCaMP6s** 또는 **AgRP^Cre > Ai162-TIGRE2.0-GCaMP6s** intersectional 계통. ARC 상부에 광섬유 → fiber photometry(465 nm 여기, 405 nm isosbestic).
- **3-arm maze** (~80 × 65 cm): 한 arm 끝에 처음엔 **접근 불가**한 먹이 구획(문). 문 열기 전후로 "먹이 없음" vs "먹이 발견 이후" 구간을 분리.
- **GLM**(일반화선형모형): ΔF/F를 food visit, eating bout, 이동속도, grooming, **시간적 거리**, **공간적 거리** regressor로 예측.
- 자극 대조: chow / 저취(low-odor) **sucrose gel** / **물** / **물체**.
- **Cheeseboard arena**(직경 ~76 cm, 156개 구멍, 통로 없음)로 미로 기하 의존성 검증.

### 결과 1 — AgRP 활성 = 먹이까지의 공간 거리
- 단식 마우스에서 AgRP는 높고, **먹이 발견 순간 급강하** 후 낮은 baseline 유지(기존 지견 재현). 단, **발견 이후에도** 접근 시 하강·이탈 시 상승하는 동적 조절이 fed·fasted 모두에서 관찰.
- **GLM**: full model이 AgRP 분산의 상당 부분을 설명(shuffle 대비 cross-validated R² 상회). **거리항(공간+시간)만 남긴 축소모델이 full model과 통계적으로 구별 불가**. 반면 food visit·eating·grooming·speed 단일 예측자 모델은 유의하게 열등. 거리항(특히 공간거리) 제거 시 예측력 감소가 최대.
- 이 예측 구조는 **먹이가 가용해진 이후에만** 출현.
- 공간 활성 지도: 24 h 단식 + chow에서 먹이 위치 기준 **뚜렷한 gradient**. 같은 마우스를 ad libitum 급여하면 gradient 소실 → **대사상태 의존**.

### 결과 2 — 냄새 gradient가 아니다 / 현저성(salience)도 아니다
- **저취 sucrose gel**에서도 동일한 거리-활성 상관 → 강한 후각 gradient 표본화로 설명 불가.
- **물·물체**를 같은 위치에 놓으면 거리 관련 조절이 없고 발견 시 급강하도 없음 → 일반적 자극 현저성이 아니라 **먹이 가용성**에 특이적.

### 결과 3 — 접근/이탈의 방향성 ramp
- 궤적을 "toward"(접근)·"away"(이탈) run으로 분할.
- 먹이 가용 이전: 평탄. **가용 이후**: toward run에서 하향 ramp(먹이 근처 최소), away run에서 상향 ramp. chow·gel 모두. 접근 slope는 유의하게 음(−), 이탈 slope는 유의하게 양(+).
- 같은 물리적 위치라도 **접근/이탈 방향에 따라 반대 궤적** → 단순한 소비·감각 검출 event(계단형 변화)로 설명 불가. AgRP는 "목표까지의 상대 위치"를 반영.
- 중요: 자유롭게 먹을 수 있는 먹이에서 **자발적으로 이탈**할 때도 AgRP가 상승 → 외부적 가용성 변화가 아니라 self-initiated departure에 동반.

### 결과 4 — 학습으로 획득되고 기억 회상 중 유지
- 3-arm maze의 세 arm 끝에 **냄새 투과 mesh 문 뒤 동일한 먹이**를 배치 → 탐색(모두 접근 불가) → 학습(한 arm만 접근 가능) → 2 h 후 기억 검사(모두 다시 폐쇄).
- **탐색 단계**: 세 arm 모두 거리-활성 상관 없음, 접근/이탈 slope 차이 없음. → 먹이 **냄새와 미로 기하만으로는 거리 신호가 생기지 않는다**.
- **학습 단계**: 접근 가능한 arm에서만 gradient 출현(다른 두 arm은 평탄). 행동적으로도 그 arm 선호 형성.
- **기억 검사**: 먹이가 없는데도 **이전에 접근 가능했던 arm에서만** 하향/상향 ramp 유지(학습 때보다 약하지만 유의, 대조 arm 상회). 행동 선호도 유지.
- **암(dark) 조건**: 학습 단계에서는 명·암 모두 gradient 형성(시각 필수 아님). 그러나 **기억 회상 단계에서는 암 조건에서 행동 선호와 거리 신호가 함께 소실** → 거리 신호가 **공간 기억 회상**에 연동됨을 시사.

### 결과 5 — 미로 기하에 의존하지 않음 (cheeseboard)
- 통로 없는 원형 개방 아레나에서도 10회 학습으로 baited hole 경로 단축, AgRP가 근접에 따라 하강.
- 기억 검사(먹이 없음): 이전 baited hole 주변 체류↑, 거리-활성 상관↑. 단 **접근 run에서만** 유의, 이탈 run은 유의하지 않음.
  - 저자 해석: 3-arm maze에서는 먹이가 물리적으로 남아 있어(접근만 불가) 냄새가 양방향으로 미래 가용성을 계속 신호할 수 있었으나, cheeseboard에서는 구멍이 비어 있고 마우스가 이미 부재를 확인 → 기억 기반 신호가 **접근 시에만** 발현.

### 해석·함의 (Discussion)
- AgRP의 공간 표상은 **1차 공간 지도(place map)라기보다 학습된·가치 및 상태 gated 기대(expectation) 신호**로 가장 절약적으로 해석됨.
- 기존 anticipatory drop이 **수 초 규모의 이산 감각 cue** 반응이라면, 여기서는 접근 중 **수십 초에 걸친 점진적 감소**(실제로 먹었는지와 무관)이며 이탈 시 증가.
- **도파민과 반대 부호**: 중뇌 도파민 활성·선조체 도파민 방출은 원거리 보상으로 접근할수록 **상승**(거리·가치에 비례). AgRP는 **하강** — 예상된 식사가 가까워지며 해소되는 hunger 신호에 부합. → [[concept-dopamine-reward-system|도파민 ramp]]와 **거울상**을 이루는 두 축.
- 기능 가설: 근접 시↓·이탈 시↑ 신호는 **기억된 먹이 쪽으로 편향**시키고 **언제 떠날지(leaving decision)** 에 영향. 대사상태 gating 덕분에 "임의의 장소"가 아니라 **먹이 장소의 공간 기억을 선택적으로 동원**하는 기전이 될 수 있음.
- **공간 정보의 상류 후보**: AgRP의 두 주요 입력인 [[concept-paraventricular-nucleus|PVH]]와 [[concept-dorsomedial-hypothalamus|DMH]]. LH→DMH→AgRP가 AgRP anticipatory 활성에 기여한다는 보고 + 해마 공간 신호가 외측중격(LS)을 통해 foraging 기억에 필수·LS→LH 투사 → 저자 제안 경로 **해마 → LS → LH → DMH → AgRP**. 미검증 가설.
- ⚠️ 한계: preprint(미심사). photometry 집단 신호라 세포 수준 공간 튜닝은 불명. 인과 조작(회로 차단 시 foraging 손상 여부) 없음. 거리 신호가 실제로 **행동을 지시하는지**는 미해결(상관 수준).

## 관련 페이지
- [[concept-npy-agrp-neurons]] — 본 논문의 대상 세포집단. AgRP가 부호화하는 변수 목록에 **학습된 공간 거리**를 추가.
- [[kim-2024-normative-framework-dissociates-need]] — **AgRP=Predicted Deficit(Need)** 정량 이론(사용자 lab). 본 논문의 거리 gradient는 "예측된 결핍"이 *공간적으로* 갱신되는 형태로 읽힘(접근=predicted gain→↓, 이탈=predicted loss→↑).
- [[walker-2026-a-hypothalamic-circuit-for]] — AgRP의 **미래 결핍 예측**(먹이 부재·탐색 실패)을 나르는 상류 PVH^Sim2 회로. 본 논문은 같은 "예측기 AgRP" 그림의 공간 축; Walker가 지목한 피질·복측 해마 입력과 본 논문의 해마→LS→LH→DMH 가설이 수렴.
- [[concept-hippocampus-feeding]] — 해마-섭식 축. 본 논문이 제안한 공간 정보 전달 경로의 출발점이자, 시각 의존적 기억 회상과 AgRP 신호가 함께 소실된다는 관찰의 해석 틀.
- [[concept-dorsomedial-hypothalamus]] · [[concept-lateral-hypothalamus]] — 제안된 relay(LH→DMH→AgRP). LH는 [[kim-2024-normative-framework-dissociates-need|Motivation]] 축이기도 해, 공간 정보가 Need/Motivation 어디로 들어가는지가 후속 질문.
- [[garfield-2016-dynamic-gabaergic-afferent-modulation]] — vDMH^LepR/pDYN이 음식 **가치·가시성**에 반응해 AgRP를 끄는 억제 입력. 본 논문의 "거리=가용성 기대"와 같은 preconsummatory 계열.
- [[aitken-2024-negative-feedback-control-of-hypothalamic]] — 섭취 bout마다의 taste 매개 AgRP 억제. 본 논문은 그보다 **느린(수십 초) 공간 규모**의 조절로 시간척도가 다름.
- [[concept-appetitive-consummatory-phases]] · [[lee-2019-food-craving-seeking-and]] — foraging = appetitive/seeking phase. AgRP가 seeking phase 내부에서 공간적으로 등급화된다는 증거.
- [[liu-2026-granular-motivational-interaction-and]] — 섭식을 seeking→approaching→…의 granular state로 분해하는 framework. 본 논문의 toward/away run 분해가 approaching/leaving 상태의 신경 상관에 해당.
- [[concept-need-motivation-pleasure-utility]] — NMPU의 Need 축에 **공간 예측** 차원 추가.
- [[weinreb-2026-spontaneous-behavior-is-a]] — 자유행동을 상태로 분해하는 분석 프레임; 본 논문의 toward/away segmentation과 방법론적 자매.
- [[concept-dopamine-reward-system]] — 접근 시 **상승**하는 도파민 ramp와 **하강**하는 AgRP ramp의 부호 대비.
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
- [[bhatti-mazo-2026-feature-specific-threat-coding-in]] — ★ 본 논문이 제안한 **해마→LS→LH→DMH→AgRP** 가설의 **첫 구간을 실증**: 복측 해마(vCA1·vCA3·ProS)→LS가 실재하며 **cue-outcome 정보**를 나른다(photometry+광억제). ⚠️ 단 이 논문이 매핑한 시상하부 축은 **LHA→LS(상행)** 로 방향이 반대여서, 가설이 성립하려면 **LS↔LH 상호 회로**를 전제해야 한다. 방향성 검증이 후속 실험 1순위 (Nature 2026). → [[concept-lateral-septum]]
- [[goode-2026-a-dorsal-hippocampus-prodynorphinergic-dorsolateral]] — ★★ 본 논문의 **해마→LS→LH** 구간이 실증됨: 배측 해마 CA3/2→**DLS^Pdyn**→**LHA GABA(Vgat) 단시냅스 억제**(ex vivo IPSC). 어느 지점을 끊어도 **맥락 조건화 섭식만** 무너지고 총 섭취량은 보존. 남은 미검증 구간은 **LH→DMH→AgRP** (Neuron 2026, Sahay lab). → [[concept-lateral-septum]]
- [[azevedo-2020-a-limbic-circuit-selectively-links]] — LS→LH 하행의 두 번째 채널(LS^Nts, 능동 도피 스트레스 시 섭식 억제). LS→LH는 단일 경로가 아니다 (eLife 2020).
