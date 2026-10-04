---
title: "A basolateral amygdala to dorsolateral striatum projection modulates stimulus-evoked motor behavior (Hobel 2026)"
type: paper
created: 2026-10-04
updated: 2026-10-04
source: "raw/2026.neuron.A basolateral amygdala to dorsolateral striatum projection modulates stimulus-evoked motor behavior.pdf"
authors: [Hobel ZB, Brechbill TR, Cruz AM, Yang LT, Jimenez K, Wu B, Liu Q, Kirsch SB, Fernandes NJ, Bock R, Alvarez VA, Blackwell KT, Plotkin JL]
year: 2026
journal: Neuron
doi: 10.1016/j.neuron.2026.08.025
aliases: [BLA-DLS, BLA→DLS, amygdala-sensorimotor striatum, Hobel 2026, Sapap3]
---

> [!takeaway] 연구 방향 관점의 핵심
> **정서(편도)가 습관(감각운동 선조체)에 "직접" 손을 댄다.** [[concept-basolateral-amygdala|BLA]]는 DMS·VS만 지배하고 sensorimotor **DLS(배외측 선조체)**는 피한다는 교과서 분리가 깨졌다. BLA→DLS 입력은 **드물고(sparse) SPN 원위 수상돌기에 붙어서**, 혼자서는 행동을 일으키지 않지만 **감각자극-반응이 일어나는 순간에 같이 켜지면 그 S-R 결합을 가소적으로 키운다**(이종시냅스 가소성).
> 사용자 연구에 주는 질문: [[lee-2025-hijacked-brain-modern-obesity-cue|Hijacked Brain]]의 **Emotion 유형과 Habit 유형이 회로 수준에서 이어지는 경로 후보** — "불안할 때 반복된 cue-섭식"이 DLS에 더 단단히 각인되는가? 실험 설계 원칙도 준다: 이런 **modulator 경로는 단독 자극으로는 효과 0**이고, **행동 유발 자극과 짝지을 때만** 드러난다(음성 결과 해석 주의). ※ 이 논문은 섭식을 다루지 않음 — 섭식으로의 연결은 위키 차원의 가설.

# A basolateral amygdala to dorsolateral striatum projection modulates stimulus-evoked motor behavior (Hobel 2026)

## 한 줄 요약
마우스에서 **BLA→DLS 직접 흥분성 투사**를 처음 기능적으로 확립: DMS로 가는 BLA 집단과 **다른 뉴런 집단**에서 기원하고, DLS SPN의 **원위 수상돌기(~100 μm)**를 표적해 수렴 입력을 증폭하며, 감각자극(물방울)으로 유발된 grooming과 짝지어 반복 활성화하면 grooming 반응이 **지연성으로 커지고** DLS 척추밀도가 증가한다. OCD 모델 **Sapap3 null** 마우스에서는 이 경로가 강화·탈조절되어 있고, BLA 만성 억제가 강박적 grooming의 발병을 막는다 (Neuron 2026, Plotkin lab, Stony Brook; NIH Alvarez lab 공동).

> ⚠️ 약어 주의: 이 페이지의 **DLS = dorsolateral striatum(배외측 선조체)**. 위키의 [[concept-lateral-septum]]·[[goode-2026-a-dorsal-hippocampus-prodynorphinergic-dorsolateral]] 등에서 쓰는 **DLS/dLS = 배외측 중격(dorsolateral septum)**과 다른 구조.

## 핵심 내용

### 1. 해부 — DLS와 DMS는 서로 다른 BLA 집단이 지배
- 전향 추적(ChR2-mCherry): BLA 축삭은 **VS·DMS에 조밀, DLS로 갈수록 희박하지만 모든 선조체 위치에서 검출**.
- 역행 추적(CTb, 섬유 통과를 배제하는 **AAVrg**): 선조체 투사 편도 뉴런은 거의 BLA(다른 핵 <5%; CeA·MeA 표지 없음). DMS 투사 뉴런이 DLS 투사보다 많음. **이중 표지 <2%** → 서로 다른 집단.
  - DMS 투사: 배내측 BLA, **BLAm·BLAc** 도메인, A-P 전반.
  - DLS 투사: 흩어져 있고 **문측·복외측**, **BLAl** 도메인.
- 축삭 전뇌 분포(AAVrg-Cre × Cre-의존 EGFP): DLS 투사 BLA 뉴런은 **더 외측 — 운동피질, 선조체·NAc의 외측부**; DMS 투사 뉴런은 **더 내측 — 연합·변연 피질**.
- 생체 내 신호: BLA GCaMP8s 이중 fiber photometry에서 DLS의 BLA 축삭 칼슘 transient는 DMS보다 작지만 **분명히 측정됨**.

### 2. 시냅스 — 경로(D1/D2) 비특이, 구획(striosome/matrix) 차이
- 슬라이스 광유전 자극: DMS·DLS 모두 **dSPN·iSPN에 단시냅스 흥분성 oEPSC**. DLS는 반응 SPN 비율·최대 진폭이 낮음(축삭 밀도 반영), dSPN vs iSPN 차이 없음.
- Nr4a1-EGFP로 구획 식별: 진폭은 striosome≈matrix이나, DLS에서 **반응 SPN 비율은 striosome이 높음**. PPR 차이 없음.
- **BLA→striosome 시냅스는 NMDA/AMPA 비가 높음**(특히 DLS; NMDA 성분 증가). 운동피질 입력은 구획 특이성 없음 → BLA-striosome 시냅스가 **LTP 유도에 유리한 위치**일 가능성(저자 해석).

### 3. 수상돌기 표적 — DLS에선 원위부
- 2P 광자극 시냅스 탐지(2P-DOS): BLA 시냅스는 수상돌기당 **<4개**로 드물고 주로 spine에 위치. SPN당 개수는 DLS≈DMS.
- **평균 soma 거리: DLS ~100 μm vs DMS ~70 μm** → DLS에서 원위 편향. 운동피질 시냅스는 많고 전 길이에 고르게(70–80 μm).
- 계산 모델(기존 matrix SPN 모델): 9개 흥분성 클러스터 입력에 BLA 시냅스를 더하면 **DLS에서 soma 탈분극 지속이 연장**(DMS에선 오히려 단축될 수 있음); 수상돌기 칼슘 transient를 **근위 편향 DMS 패턴보다 ~10배 더** 키우고 수십 μm로 확산 → upstate·plateau를 gate해 **가소성 신호를 증폭**한다는 해석.

### 4. 행동 — "구동(drive)"이 아니라 "조절(modulate)"
- BLA→DLS 단독 광자극: 자발 grooming·불안 유사 행동 **변화 없음**. (대조: BLA→DMS 자극은 자극 직후 grooming을 일시 증가 — 선행 연구와 일치.)
- **물방울(1–5회/분)로 grooming을 유발하면서 BLA→DLS를 짝지어 자극(10분, 매일)**: 자극 중·직후엔 차이 없음 → **2일째부터 1시간 뒤 유발 grooming이 연장**, 마지막 날 **probe 물방울 1회에 대한 grooming 증가**. 이동량은 오히려 약간 감소, 오픈필드 중앙 체류 감소(불안↑ 시사).
- 특이성: 같은 프로토콜의 **BLA→DMS 짝 자극은 probe 반응을 바꾸지 않음** → DLS 경로 특이적.
- 다른 감각·행동: 음향 놀람으로 유발한 digging과 짝지으면 probe digging은 **감소**, 이동량은 증가 → 일률적 촉진이 아니라 **행동 의존적 조절**.
- 기전: 짝 자극 후 DLS SPN **spine 밀도↑**(수상돌기 길이·분지 불변), BLA 축삭 근처 **VGLUT2(시상) 점 수↑·VGLUT1(피질) 점 크기↑**, BLA 축삭 자체의 점은 불변 → **피질·시상 입력에서의 이종시냅스 가소성**.

### 5. OCD 모델 Sapap3 null(cKI−/−)
- BLA·DS의 **ΔFosB↑**(만성 활성 표지).
- 슬라이스: **DLS SPN의 BLA 유발 반응만 커짐**(연결 비율 동일), DMS 불변; PPR·NMDA/AMPA 불변.
- 생체 photometry(머리 고정, 2초 빛 cue → 코에 물방울, 30 trial): 변이 마우스는 **기저 BLA→DLS 활동이 DMS보다 높음**(WT는 차이 없음). 물방울 뒤 BLA→DLS 활동은 WT에서 **강하고 오래 억제**되지만, 변이에서는 **억제가 약하고 짧고 가변적이며 일시적으로 기저 이상으로 반등**.
- 인과: 증상 직전 시기부터 **BLA 양측 hM4D(Gi) + CNO 음수 투여 5주** → 대조 변이군은 grooming이 점진 증가하나 **BLA 억제군은 증가하지 않음**. (BLA 전체 억제라 DLS 투사 특이성은 증명 못함 — 저자 명시.)
- 저자 가설: 정상에선 **자극 후 BLA→DLS 억제가 반응보다 오래 지속돼 일상 행동 시냅스의 과도한 강화를 막는다**; 이 억제 창이 무너지면 편도 입력이 S-R 시냅스를 부적절하게 증폭해 반복 행동을 만든다.

### 6. 주장·한계
- **주장**: 편도→감각운동 선조체의 **직접** 경로가 존재하며, 기존의 다중시냅스 "ascending spiral"(NAc→SN→DLS) 설명보다 빠르고 시냅스 특이적인 정서→습관 연결을 제공.
- **한계(저자)**: DLS·DMS 투사 BLA 집단의 분자 정체·부호화 정보 미상; Sapap3에서 강화 기전 미상; 행동 인과 실험은 BLA 전체 억제; striosome vs matrix 중 어느 쪽이 행동 효과를 매개하는지 미해결(spine 증가는 대부분 SPN에서 관찰 → matrix 관여 가능성).
- **위키 메모**: 섭식·보상은 다루지 않음. Figure 기반 수치(효과 크기·통계)는 PDF 그림에서 확인 필요.

## 사용자 연구와의 연결 (가설)
- **Emotion → Habit 회로 다리**: [[lee-2025-hijacked-brain-modern-obesity-cue]]의 Habit 유형(DLS 표적)과 Emotion 유형을 잇는 후보 경로. 정서적 각성 상태에서 반복되는 cue-섭식 결합이 BLA→DLS 짝 활성으로 더 깊이 각인되는지는 섭식 패러다임에서 직접 검증 가능(예: 음식 cue-섭취 + BLA→DLS 짝 자극 후 probe 반응·devaluation 민감도).
- **"짝지어야 보인다" 원칙**: modulator 경로는 단독 조작으로는 음성 — 섭식 회로 조작 실험(예: LH·편도 입력)에서 null 결과를 해석할 때 **행동 유발 맥락과의 pairing** 여부를 점검할 근거.
- **강박 축과의 대비**: [[concept-compulsion]]의 OFC→DST 강화(Pascoli 2018)가 **처벌 저항 추구**의 시냅스 기질이라면, 본 논문은 **편도 입력이 감각운동 선조체 S-R 시냅스를 키우는** 또 다른 경로 — 두 경로 모두 "선조체 시냅스 강화 = 반복 행동"이라는 공통 틀.
- **DMS 대비**: [[giovanniello-2025-a-dual-pathway-architecture-for]]의 BLA→DMS(agency) ↔ 본 논문의 BLA→DLS(S-R 증폭). BLA 안에서도 투사 표적별로 **목표지향 vs 습관 측에 따로 기여**하는 그림.

## 관련 페이지
- [[proposal-habitual-overeating-dls-miniscope]] — 음식 추구의 습관화와 포만 후 실제 섭취를 연결하는 DLS Miniscope 종단 기록·인과 검증 제안(2026-10-04).
- [[concept-basolateral-amygdala]] — BLA 개념 hub; 본 논문이 **DLS 출력과 BLAm/BLAc vs BLAl 도메인 분업** 추가.
- [[giovanniello-2025-a-dual-pathway-architecture-for]] — BLA→**DMS**(agency)·CeA→DMS(habit); 본 논문은 BLA→**DLS** 직접 경로.
- [[piette-2026-striatal-endocannabinoids-drive-one-shot]] — DLS SPN의 또 다른 가소성 규칙(eCB-LTP, 1회 경험); 본 논문은 반복 짝 활성에 의한 이종시냅스 가소성.
- [[concept-medium-spiny-neuron]] — dSPN/iSPN·striosome/matrix 구분, 원위 수상돌기 upstate.
- [[fallon-2026-striatal-pathways-dissociably-control-action]] — DLS dSPN/iSPN의 행동 제어 분업.
- [[concept-compulsion]] — 강박의 선조체 시냅스 기질(OFC→DST)과 대비.
- [[concept-orbitofrontal-cortex]] — OCD 회로의 피질 노드(인간 OFC biomarker).
- [[lee-2025-hijacked-brain-modern-obesity-cue]] — Habit·Emotion 유형 회로 표적(사용자 lab).
- [[concept-one-shot-learning]] — 선조체 가소성 규칙 hub.
- [[concept-striatal-dopamine-gradient]] — 선조체의 전후·내외측 기능 축(DLS=감각운동 쪽).
- [[concept-habit]] — 습관 개념 hub — BLA→DLS를 **경로 B(정서 각성이 S-R을 증폭)**로 정리; DMS(agency) vs DLS(S-R) 표적별 BLA 기여.
