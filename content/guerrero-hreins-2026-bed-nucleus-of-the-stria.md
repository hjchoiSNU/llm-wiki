---
title: "Guerrero-Hreins et al. 2026 — Bed nucleus of the stria terminalis connectivity during food cue and taste processing under stress"
type: paper
created: 2026-06-20
updated: 2026-06-20
source: raw/2026 Nature Communications. Bed nucleus of the stria terminalis connectivity during food cue and taste processing under stress.pdf
authors: [Eva Guerrero-Hreins, Matthew D. Greaves, Po-Han Kung, Bradford A. Moffat, Rebecca K. Glarin, Stuart B. Murray, Ben J. Harrison, Priya Sumithran, Robyn M. Brown, Trevor Steward]
year: 2026
journal: Nature Communications
---

> [!takeaway] 연구 방향 관점의 핵심
> **스트레스가 인간 [[concept-bed-nucleus-stria-terminalis|BNST]](분계선조 침상핵)–보상/내수용 회로의 effective connectivity를 하향조절**한다는 첫 7T fMRI+DCM 인과 증거. 음료 cue·맛 수용을 스캐너 안 gustometer로 주며, 고스트레스 cue가 **BNST→[[concept-nucleus-accumbens|NAc]]·[[concept-orbitofrontal-cortex|OFC]]·dorsal mid-[[concept-insula|insula]]** 출력을 모두 ↓, 맛 수용은 **dmINS→BNST**를 ↓. 특히 **BNST→OFC 하향조절 강도가 주관적 스트레스 변화를 예측**(leave-one-out 교차검증). 사용자의 **stress eating·식품 불안정([[concept-food-insecurity]])·[[concept-interoception|내수용감각]]·인간 보상 회로 번역** 관심과 직결되며, BNST를 stress-reward 허브로 인간에서 매핑한 도구(7T DCM)가 사용자 lab의 인간 회로 연구에 그대로 이식 가능.

# Bed nucleus of the stria terminalis connectivity during food cue and taste processing under stress

## 한 줄 요약
건강한 성인 48명에게 **저/고스트레스 유도 후** 초콜릿우유(보상)·물(중립) cue와 맛을 스캐너 안에서 주고, 7T fMRI + **dynamic causal modelling(DCM)**로 [[concept-bed-nucleus-stria-terminalis|BNST]] 중심 effective connectivity를 추정. **급성 스트레스가 BNST의 보상·내수용 회로 참여를 (전반적 증가가 아니라) 하향조절**하며, 그 정도가 개인의 스트레스 반응성과 cue 가치에 의존함을 인과적으로 보였다. Steward·Brown lab (Melbourne).

## 배경
- 스트레스는 종을 막론하고 food-seeking·기호식 과식을 유발하고 binge eating·비만과 연관. 스트레스 뇌는 "먹으려는 욕구↑ + 섭식 억제↓"로 편향되며 이는 보상 food cue 존재 시 촉발.
- [[concept-bed-nucleus-stria-terminalis|BNST]]는 **stress 회로와 reward 회로를 잇는 확장편도(extended amygdala) 허브**. 편도·[[concept-lateral-hypothalamus|외측시상하부]]·선조체·[[concept-insula|섬엽]]·[[concept-orbitofrontal-cortex|OFC]]와 연결. 마우스에서 **BNST→LH GABAergic(억제) 투사 광활성 → 포만 상태에서도 기호식 즉시 섭취**(Jennings 2013).
- 인간 BNST 연구는 주로 불안·중독에 집중. **음식 cue·맛 처리 중 BNST 연결성은 미규명**. BNST는 작아 표준 MRI로 분해 어려움 → **7T 초고자장**으로 극복.
- **방법론적 진전**: 상관 기반 functional connectivity 대신 **effective connectivity**(한 영역이 다른 영역에 미치는 부호·방향성 영향; +=흥분, −=억제)를 DCM으로 추정.

## 방법
- **참가자**: 건강 성인 48명(평균 26.2세, 남24/여24; 섭식장애·정신질환·약물복용 배제). GLM n=48, CUE DCM n=44, TASTE DCM n=47.
- **과제**: block-design 음료 과제 2런(저스트레스 1회 + 고스트레스 1회). 각 런 전 2분 stress induction(저=쉬운 자기페이스 뺄셈+긍정 피드백; 고=Montreal Imaging Stress Task 식 어려운 시간압박 serial subtraction + 부정 사회평가 피드백).
- **자극**: cue(초콜릿우유 vs 물 사진 5s) → TASTE(해당 음료 1 ml, gustometer로 전달, 5s) → 쾌적도 평정 → RINSE. 런당 12블록.
- **스트레스 검증**: 주관적 스트레스(고 5.04 vs 저 2.27, p≈2×10⁻¹⁶); HRV(RMSSD 등)로 생리적 각성↑ 확인(tonic EDA는 유의차 없음).
- **DCM 구조**: 4영역 **star 구조, BNST=중심 허브**(BNST↔NAc, ↔OFC, ↔dmINS). MNI 좌표: BNST(22,−8,−11), NAc(10,19,−8), OFC(43,42,−19), dmINS(37,5,10). OFC·dmINS는 우측 우세 활성으로 단측, BNST·NAc는 양측. 4모델: ① 고스트레스 cue, ② 고스트레스 초콜릿우유 cue, ③ 고스트레스 맛, ④ 고스트레스 초콜릿우유 맛. **PEB**로 집단효과·스트레스변화 공변량 분석.

## 핵심 결과
### 고스트레스 cue = BNST 출력 전반 하향조절 (Model 1)
- **BNST→NAc (−0.28), BNST→OFC (−0.45), BNST→dmINS (−0.34)** 모두 down-regulatory + **dmINS→BNST (−0.45)** 하향(Pp 0.87–0.99).
- 초콜릿우유 cue(Model 2): **BNST→dmINS ↓(−0.28)** + **NAc→BNST ↑(+0.68)** (보상 cue 특이적 상향; 스트레스가 NAc 도파민↑로 cue 유인가치 증폭한다는 동물 소견과 정합).
- 보충분석: 변조는 **주로 스트레스 주도**, 물 vs 초콜릿우유 자극특이 효과는 미약.

### 맛 수용 = dmINS→BNST 하향조절 (Model 3)
- **dmINS→BNST (−0.33)** down-regulatory(Pp 0.93). 초콜릿/물 분리 시 임계 미달.

### BNST→OFC 하향조절이 주관적 스트레스를 예측 ★ (Model 1 + 공변량)
- 주관적 스트레스 변화가 클수록 **BNST→OFC 하향조절이 덜함**.
- **Leave-one-out 교차검증**: BNST→OFC 변조로 빠진 참가자의 스트레스 변화 예측 가능(r=0.28, p=0.031) → BNST-연결성↔행동 관계의 강건성.
- 우반구 우세 패턴 = 내수용–현저성·보상가치 계산의 우반구 편중과 정합.

## 해석 (저자)
- BNST는 **bottom-up 내수용 정보를 OFC 등 피질에 전달해 valence를 부여**(Banasikowski·Hawken "valence surveillance"). 스트레스가 이 relay를 **상태의존적으로 gating** → cue 주도 반응으로 행동 편향 가능.
- BNST→NAc 하향은 스트레스 시 NAc cue 반응 둔화/불변 fMRI 소견과 정합. 단 인간 영상으로 세포 기전은 추정.
- BNST–dmINS 상호 경로: 섬엽→BNST glutamatergic 입력이 VTA 투사 GABA BNST 뉴런을 통해 도파민 의존적으로 food approach 강화(마우스 Girven 2021); dmINS=allostatic-내수용 허브(Zhang 2025 Nat Neurosci 7T). BNST CRF 길항 → 좌절-스트레스 binge 감소(설치류).
- **한계**: 포만 미통제; 저→고 고정순서(순서효과); 2분 스트레스로 cortisol/ACTH 미검증; 성차·호르몬 미검정.

## 사용자 lab 관점
- **stress eating 인간 회로**: 사용자의 [[concept-food-insecurity]]·feast-famine·stress→reward 재구성 라인을 **인간 7T에서 검증**하는 직접 도구. [[tomiyama-2019-stress-and-obesity|Tomiyama 2019]] stress→비만 모델, [[giovanniello-2025-a-dual-pathway-architecture-for|Giovanniello 2025]] 만성 스트레스 habit 전환의 인간 대응.
- **내수용감각**: dmINS↔BNST 축은 [[concept-interoception]] frontier의 인간 피질-피질하 연결. [[concept-insula]]·[[huang-2021-the-insulo-opercular-cortex-encodes|Halpern milkshake]] 패러다임과 같은 gustometer cue/receipt 분리.
- **방법론(7T DCM)**: 사용자 lab의 인간 회로 번역(예: [[proposal-ttis-feeding-reward-circuits|tTIS]]·[[proposal-dmh-glp1r-human-imaging|GLP-1R 인간 영상]])에서 effective connectivity·leave-one-out 예측 설계 차용 가능. BNST는 비침습 심부자극 후보 표적이 될 수 있음.
- **NMPU**: cue=Motivation(wanting), 맛 수용=Pleasure/Utility 국면 분리와 호환 ([[concept-need-motivation-pleasure-utility]]).

## 관련 페이지
- [[concept-bed-nucleus-stria-terminalis]] — 본 논문이 인간에서 매핑한 stress-reward 허브 개념 hub.
- [[concept-nucleus-accumbens]] · [[concept-orbitofrontal-cortex]] · [[concept-insula]] — DCM 4노드 중 셋.
- [[concept-interoception]] — dmINS↔BNST 내수용 축.
- [[concept-lateral-hypothalamus]] — BNST→LH GABAergic feeding(마우스 상류 회로).
- [[concept-dopamine-reward-system]] — 스트레스 NAc 도파민↑·NAc→BNST 상향.
- [[tomiyama-2019-stress-and-obesity]] · [[giovanniello-2025-a-dual-pathway-architecture-for]] — stress→과식/habit 모델(동물·이론).
- [[concept-food-insecurity]] · [[concept-loss-of-control-eating]] · [[concept-food-addiction]] — 스트레스성 과식·binge 임상 표적.
- [[huang-2021-the-insulo-opercular-cortex-encodes]] — 같은 gustometer cue/receipt 인간 전기생리 계열.
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
