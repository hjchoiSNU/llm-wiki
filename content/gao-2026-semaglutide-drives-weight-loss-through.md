---
title: "Semaglutide drives weight loss through cAMP-dependent mechanisms in GLP1R-expressing hindbrain neurons (Gao et al. 2026, Nature Metabolism)"
type: paper
created: 2026-05-31
updated: 2026-08-19
source: "raw/2026 Nat. Metab. (Krashes) Semaglutide drives weight loss through cAMP-dependent mechanisms in GLP1R-expressing hindbrain neurons.pdf"
authors: [Gao C, Geneve IC, Rodriguez-Gonzalez S, Li C, McElhern K, Reitman ML, Lutas A, Krashes MJ]
year: 2026
journal: Nature Metabolism
---

> [!takeaway] 연구 방향 관점의 핵심
> **세마글루타이드(블록버스터 GLP1RA)의 뇌 내 실제 기전을 세포내 신호 수준에서 해부**: 1차 작용부위는 **NTS가 아니라 area postrema(AP)**, 그리고 **Gs→cAMP**가 체중 감량에 필수(Gnas KO·PDE4 과발현 시 완전 차단). 예상 밖으로 **Gq(칼슘) 신호가 흥분성 permissive 역할** — Gq-DREADD 자극이 세마글루타이드보다 더 큰 체중 감량. 이는 사용자 lab의 **DMH GLP-1R cognitive satiation(시상하부·인지 경로)** ([[park-2025-glucagon-like-peptide-1-and-hypothalamic|Park 2025]]·[[kim-2024-glp-1-increases-preingestive-satiation|Kim 2024 Science]])과 **상보적인 hindbrain·약리 경로**를 정의하고, 방금 ingest한 [[godschall-2026-a-brain-reward-circuit-inhibited|Godschall 2026]](NTS^Gcg→CeA)와 같은 [[concept-dorsal-vagal-complex|DVC]] 무대를 공유. 차세대 약물 설계 단서: **cAMP-biased agonism, Gs+Gq 병용, AP 국소 PDE4 억제**로 효능·지속성 개선; AP vs NTS 분업으로 **메스꺼움 분리**.

# Semaglutide drives weight loss through cAMP-dependent mechanisms in GLP1R-expressing hindbrain neurons (Gao et al. 2026)

## 한 줄 요약
말초 투여 세마글루타이드는 BBB를 거의 통과하지 못하고 **circumventricular organ인 area postrema의 GLP1R 뉴런**에 작용하며, **Gs–cAMP 신호(+permissive Gq–calcium)** 가 그 신경 활성·downstream elPBN 동원·체중 감량에 필수다.

## 핵심 내용

### 배경
- GLP1RA(세마글루타이드)는 중추 GLP1R로 식이·체중을 줄이지만 **세포내 신호 기전은 불명**.
- 말초 투여 large-peptide GLP1RA는 BBB 투과 제한적 → AP·ARC 등 **circumventricular organ**에 강하게 표지.
- DVC(dorsal vagal complex = AP + NTS + DMX)의 Glp1r 뉴런이 핵심 매개체로 지목되어 옴.

### 발견 1 — AP가 1차 작용부위 (NTS 아님)
- DVC에서 Gs(Gnas) 국소 결손 → 세마글루타이드 체중 감량 **소실**(대조 -9.7% vs DVCGnas ~0%).
- **AP에만 Gs 보존(APMiss)되면 전체 체중 감량 회복** (-7.2%). AP Gnas 결손 정도가 체중 변화와 강하게 상관(R²=0.574); NTS는 무상관.
- Fos: 세마글루타이드는 AP·NTS·elPBN·CeA·SFO 활성; Gnas KO가 brain-wide Fos 소거.
- **NTS Gs 결손은 HFD 체중 증가** → NTS Gs는 세마글루타이드와 무관한 baseline 에너지항상성 brake.

### 발견 2 — Gs–cAMP가 신경활성·체중감량에 필수
- 2-photon calcium imaging(Glp1r;soma-GCaMP8s): 세마글루타이드 반응이 5개 cluster(low/mid/high/transient/inhibitory).
- GnasKO는 low-amplitude(c1)에 편중, GnasWT는 high-amplitude(c3)에 편중 → Gs가 spike-dependent 고진폭 반응을 구동.
- **PDE4**(cAMP 분해효소): roflumilast가 transient cAMP 억제·sustained cAMP 증강. **PDE4-cat 과발현 → 세마글루타이드 신경활성·체중감량 완전 차단** → cAMP는 필수 second messenger.
- β-arrestin은 transient 반응에 뚜렷한 역할 없음.

### 발견 3 — Gq(칼슘)의 예상 밖 역할
- Gq 약리 억제 → AP Glp1r slice 칼슘 반응 소거 → Gq가 칼슘 동원에 필요.
- 해석: Gq–IP3–calcium이 **permissive 흥분성 기전**으로 Gs–cAMP 활성을 촉진(PKC→adenylyl cyclase cross-talk 가능).
- 기능: Gs/Gq DREADD 둘 다 급성 식이 억제; **Gq 활성이 Gs보다 더 강한 식이·체중 억제**, 만성 Gq 활성은 세마글루타이드 단독을 초과하는 체중 감량.

### 발견 4 — downstream elPBN
- TRAP 기반으로 세마글루타이드에 ex vivo 직접 반응 안 하는 **external lateral PBN(elPBN) 뉴런**을 포획 → circuit-level 동원.
- elPBN^semaTRAP 뉴런이 세마글루타이드 유발 **CTA(조건성 미각 혐오)** 매개 + 체중 감량 부분 기여. CGRP 뉴런은 ~50%만 차지(나머지 미동정).

### 치료적 함의
- **cAMP-biased agonism / Gs+Gq 동시 강화 / AP 국소 PDE4 억제**로 효능·지속성 개선 가능.
- AP(혐오) vs NTS(non-aversive satiety) 분업 → **메스꺼움 분리 약물** 설계 단서; orforglipron 등 small-molecule은 뇌 투과 개선 기대.
- 단, **전신 roflumilast + 세마글루타이드 병용은 추가 체중 감량 없음** (국소 manipulation 필요).

## 관련 페이지
- [[concept-glp-1]] — GLP-1/GLP1R 작용 hub; 본 논문은 AP·Gs–cAMP·Gq 세포내 기전 추가.
- [[concept-dorsal-vagal-complex]] — AP·NTS·DMX 무대; AP=1차 약리 표적, NTS=baseline brake.
- [[godschall-2026-a-brain-reward-circuit-inhibited]] — 같은 DVC 출발(NTS^Gcg→CeA^Glp1r→VTA); hedonic 쪽, 본 논문은 homeostatic·세포내 신호 쪽 (Nature 2026).
- [[park-2025-glucagon-like-peptide-1-and-hypothalamic]] — 사용자 lab; 시상하부 DMH GLP-1R cognitive satiation = 상보적 중추 경로.
- [[kim-2024-glp-1-increases-preingestive-satiation]] — 사용자 lab Science; pre-ingestive cognitive satiation과 hindbrain 약리 경로 대비.
- [[de-lartigue-2026-critical-role-gut-brain-signalling]] — 사용자 공저; gut→DVC→brain 큰 그림.
- [[johansen-2025-brain-control-of-energy]] — incretin 약물·NTS satiety/AP aversion 종합 (Cell 2025).
- [[stuber-2025-the-neurobiology-of-overeating]] — GLP1RA BBB·CVO 기전 논의 (Neuron 2025).
- [[concept-basolateral-amygdala]] — CeA(세마글루타이드 Fos 동원) 구분.
- [[duran-2026-the-central-amygdala-integrates]] — CeA가 말초 GLP-1RA(Ex-4)를 통합; 세포종류별(Prkcd·Glp1r) hypophagia 분업 (bioRxiv 2026).
- [[concept-central-amygdala-glp1r]] — 세마글루타이드 Fos가 동원하는 CeA^Glp1r 노드 개념 hub.
- [[liskiewicz-2026-glp-1r-gipr-ppar]] — 5중작용제도 AP·NTS FOS는 GLP-1–GIP와 동일·BBB 미투과 → 본 논문의 AP/NTS 약리 무대 공유 (Nature 2026).
- [[lim-2026-hypothalamic-pomc-neurons-regulate]] — 세마글루타이드 **혈당강하**는 ARC POMC PKA→장 SGLT1 의존; 본 논문의 **체중**=AP/Gs-cAMP와 효과 분업(혈당 vs 체중) (Nat Commun 2026).
- [[overview-appetite-energy-homeostasis]] — 약리·회로 통합.
- [[person-choi-hyung-jin]] — GLP-1 satiation 연구 맥락(본 논문은 사용자 lab 비인용).
- [[duran-2026-the-central-amygdala-gates]] — CeA 세포종류별(Prkcd/Glp1r/Sst) Ex-4 hypophagia 필요성.
- [[zhang-2021-area-postrema-cell-types-that]] — 세마글루타이드 1차 표적 AP의 세포 아틀라스.
- [[campos-2016-parabrachial-cgrp-neurons-control-meal]] — 평행 PBN→CeA 포만/혐오 경로.
- [[concept-area-postrema]] — AP 독소감지 hub.
- [[cao-2024-hunting-for-heroes-brain]] — semaglutide 후뇌 GLP-1R 매개 논점 종합.
- [[wan-2023-glp-1r-signaling-and-functional]] — semaglutide 작동 수용체 신호 기반.
- [[drucker-2023-beyond-the-pancreas-contrasting-cardiometabolic]] — GLP-1 심혈관·중추 작용 대조.
- [[davila-2026-agrp-neurons-are-required-for]] — 본 논문이 정의한 AP·Gs–cAMP **상류 입력**의 하류에서, 시상하부 **AgRP가 적응 대사반응(지방 동원·β₃-교감신경)을 실행**해야 체중 감량이 완성됨을 보임. 입력(AP) vs 실행(AgRP) 분업 (PNAS 2026, Horvath lab).
- [[su-2026-genetic-predictors-of-glp1-receptor]] — 인간 유전학에서 **효능 신호와 오심 신호가 co-localize**(H4 96.6%) → 본 논문의 AP(혐오) vs NTS(non-aversive satiety) 분업이 실제로 **분리 가능한지**를 묻는 데이터 (Nature 2026).
- [[gonzalez-rellan-2026-weight-loss-independent-actions-of]] — 본 논문이 다루는 **체중 감소 기전의 반대편**: 체중과 무관하게 나타나는 장기 보호 작용 (Cell Metab 2026, Drucker).
