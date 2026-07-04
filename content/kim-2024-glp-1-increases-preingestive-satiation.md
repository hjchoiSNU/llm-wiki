---
title: "Kim, Park, Hwang et al. 2024 — GLP-1 increases preingestive satiation via hypothalamic circuits in mice and humans"
type: paper
created: 2026-05-25
updated: 2026-05-31
source: raw/2024 Science. GLP-1 increases preingestive satiation via hypothalamic circuits in mice and humans..pdf
authors: [Kyu Sik Kim, Joon Seok Park, Eunsang Hwang, Min Jung Park, Hwa Yun Shin, Young Hee Lee, Kyung Min Kim, Laurent Gautron, Elizabeth Godschall, Bryan Portillo, Kyle Grose, Sang-Ho Jung, So Lin Baek, Young Hyun Yun, Doyeon Lee, Eunseong Kim, Jason Ajwani, Seong Ho Yoo, Ali D. Güler, Kevin W. Williams, Hyung Jin Choi]
year: 2024
journal: Science
---

> [!takeaway] 연구 방향 관점의 핵심
> 사용자 lab의 **Science 2024 대표작**. GLP-1RA의 인간 임상 효과를 **DMH GLP-1R 뉴런 → ARC AgRP** 회로로 해명. 인간 RCT + 마우스 광유전·광계측·microendoscopy + ex vivo electrophysiology 통합. "신호등 보고 미리 브레이크" preingestive satiation의 분자·회로·임상 trifecta. wiki 전반의 DMH GLP-1R 회로 1차 자료. UT Southwestern Kevin Williams lab 공동.

# GLP-1 increases preingestive satiation via hypothalamic circuits in mice and humans

## 한 줄 요약
GLP-1RA가 인간에서 **preingestive satiation** (음식 cue만으로 포만감)을 증가시키고, 이 효과를 **DMH GLP-1R 뉴런이 ARC NPY/AgRP를 GABA로 억제**하는 회로로 매개. Science 2024, 사용자 lab + Williams lab 공동.

## 핵심 발견 5가지

### 1. 인간 RCT — preingestive satiation
- Phase-specific 임상시험: baseline → preingestive (cue 노출) → ingestive 3 phase.
- GLP-1RA 처치군 = preingestive phase에서 **prospective food ingestion·reward·motivation index 모두 ↑**.
- Control은 baseline → preingestive로 satiation 감소; GLP-1RA는 유지·증가.
- Baseline satiation × 처치 ANCOVA: GLP-1RA가 preingestive 단계에서 가장 큰 효과.

### 2. DMH GLP-1R 뉴런 — anatomical 표적
- 인간 hypothalamus에서 GLP-1R DMH 명확히 발현 (postmortem 면역염색).
- 마우스 GLP-1R-tdTomato reporter에서 DMH 발현 확인.
- ISH: DMH에 **GLP-1R only / LepR only / GLP-1R + LepR 공발현 세포** 모두 존재 — heterogeneity.
- Caudal DMH에 co-expression 더 많음. ARC·LH·PVH에서는 분리.
- DMH GLP-1R → VMH·TN·ZI·PVH·LHA·ARC 광범위 projection.

### 3. Optogenetic causality
- **NpHR 억제 (10 min)** fed/fasted 마우스 → **eating bout 지속시간 ↑**, bout 수는 fasted에서 감소. 총 식이량 ↑.
- **ChR2 활성 (10초 open-loop)** → bout duration·frequency·total 식이 ↓.
- **Closed-loop ChR2 (3.5초 during ingestion)** → 광자극과 동시에 **즉시 식이 중단** ★ (latency 평균 ~1초).
- → DMH GLP-1R 뉴런은 satiation에 **필요 + 충분** (satiety가 아닌 satiation — meal size 제어, meal initiation 아님).
- **Aversive valence**: 활성화는 negative valence + LHb 투사.

### 4. Photometry & microendoscopy — preingestive 인코딩
- **Multiphase test**: pre-conditioning day 1 = ingestion 시작에 신호 ↑. Post-conditioning day 2 = food accessibility·seeking 단계에서 이미 ↑ (학습 후 preingestive encoding).
- **T-maze**: goal-side choice 순간 신호 ↑, extinction으로 사라짐.
- **Operant nose-poke**: 학습 후 활성.
- **Microendoscopy** (GRIN lens, 150 cells 6 마우스):
  - **23% preingestion neurons** — seeking → ingestion start에 활성, 종료 시 감소. **No-ingestion trial에서도 활성** (food 존재만으로).
  - **21% ingestion neurons** — ingestion start에만 활성, no-ingestion에서 inactive.
  - 56% 둘 다 아님.

### 5. GLP-1RA가 DMH GLP-1R을 식이 시에만 잠재화
- Saline vs liraglutide IP injection 비교 (multiphase test).
- **Baseline activity는 변화 없음** — GLP-1RA가 무차별 활성 아님.
- Food accessibility·seeking·ingestion start 시 z-score, max amplitude, rate-of-change 모두 ↑.
- **Optogenetic 억제가 GLP-1RA의 식이 감소를 차단** — GLP-1RA 효과의 DMH GLP-1R 의존성 증명.

## DMH GLP-1R → ARC NPY/AgRP 회로 (★)

- **CRACM**: DMH GLP-1R ChR2 자극 → ARC NPY/AgRP picrotoxin-sensitive IPSC (8/8 cells) + APF ↓.
- **Chemogenetics**: hM3Dq DMH GLP-1R 활성 → ARC NPY/AgRP hyperpolarization. hM4Di 억제 → 식이 ↑.
- **Liraglutide ex vivo**: DMH GLP-1R·LepR 모두 depolarization. Exendin-3 (GLP-1R antagonist) 차단. DMH 내 GLP-1R conditional KO도 차단.
- **In vivo liraglutide IP 24h 후**: DMH neuron RMP·APF 지속 ↑.
- **회로 epistasis**: DMH GLP-1R hM4Di 또는 ARC AgRP hM3Dq 모두 liraglutide 효과 (체중·식이 감소) 차단.

## Water·thirst (보너스)
- Water-deprived 마우스에서 drinking 시 DMH GLP-1R 활성 ↑.
- 광유전 활성 → thirst satiation.
- DMH GLP-1R → SFO·MnPO·SON·OVLT 투사 — 수분 균형 회로.
- → 단순 식이가 아닌 **all nutritional needs satiation 회로**.

## Sex
- Female 마우스에서 동일 결과 (Pomc, DMH GLP-1R, liraglutide 효과 모두). 인간 sex difference 임상 자료와 동조.

## 동반작 / 인용
- [[park-2025-glucagon-like-peptide-1-and-hypothalamic|Park 2025 DMJ]] = 본 Science 2024 paper의 한국어 추가 분석 + 후속 review.
- [[concept-arcuate-nucleus|ARC]] feed-forward sensory cue 회로 — DMH GLP-1R이 매개자 정립.
- Webster 2024 Nat Metab RAMPANT: 인간 atlas의 **Trh+/Glp1r+/Lepr+ caudal ARC inhibitory subset** = 본 paper의 DMH GLP-1R+/LepR+ subset 신호 매개.
- Garfield 2016 Nat Neurosci — DMH LepR → ARC AgRP GABA.
- Berrios 2021 Nature — LH^Vglut2 → DMH LepR → ARC AgRP.

## 사용자 lab framework
- **NMPU framework** ([[concept-need-motivation-pleasure-utility|NMPU]]):
  - **DMH GLP-1R cognitive satiation** = **Need 갱신 (predicted deficit feed-forward 감소)** 분자 회로.
  - Preingestion neurons (23%) = Need encoder, ingestion neurons (21%) = Utility decoder.
- **Cheon 2025 LH**: LH^Vglut2 → DMH 신호 매개 (LH input source).
- **Hijacked brain**: GLP-1RA 효과가 5 maladaptive type 중 cue-evoked·habit·addiction 회로 표적.

## 임상 함의
- Semaglutide·tirzepatide의 인간 효과 = **cognitive·preingestive layer 변화**가 주요 부분 (단순 GI motility 아님).
- 인간 fMRI에서 GLP-1RA의 visual food cue brain response 감쇠와 일치.
- 사용자 lab + Williams lab (UT Southwestern) trans-Pacific 협업의 대표작.
- DMH GLP-1R+/LepR− subset이 별도 표적 후보 — well-known LepR-only subset과 분리.

## 관련 페이지
- [[concept-dorsomedial-hypothalamus]] — DMH 본문.
- [[concept-glp-1]] — GLP-1 통합.
- [[concept-arcuate-nucleus]] — 표적 ARC AgRP.
- [[concept-npy-agrp-neurons]] — direct GABA 표적.
- [[concept-need-motivation-pleasure-utility]] — NMPU Need 갱신 회로.
- [[concept-mc4r]] · [[concept-melanocortin-system]] — downstream.
- [[park-2025-glucagon-like-peptide-1-and-hypothalamic]] — DMJ 2025 review.
- [[kim-2024-normative-framework-dissociates-need]] — NMPU 실험 backbone (동일 lab).
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] — NMPU 이론.
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — LH input source.
- [[lee-2025-hijacked-brain-modern-obesity-cue]] — 임상 응용.
- [[proposal-dmh-glp1r-human-imaging]] — 본 논문의 마우스 회로를 인간 7T fMRI로 번역하는 연구계획서.
- [[jouque-2025-beyond-satiety-unraveling-the]] — POMC heterogeneity (parallel framework).
- [[barros-2026-from-diet-to-hypothalamic-dysfunction]] — semaglutide POMC·microbiota.
- [[godschall-2026-a-brain-reward-circuit-inhibited]] — 본 논문을 인용(ref16); DMH satiation = homeostatic 축, CeA = hedonic 축으로 분업 확장 (Nature 2026).
- [[gao-2026-semaglutide-drives-weight-loss-through]] — 시상하부 cognitive satiation과 대비되는 hindbrain(AP) Gs–cAMP 약리 경로 (Nat Metab 2026).
- [[duran-2026-the-central-amygdala-integrates]] — 본 논문을 인용(ref37); homeostatic cognitive satiation과 대비되는 limbic CeA hedonic GLP-1RA 경로 (bioRxiv 2026).
- [[concept-central-amygdala-glp1r]] — DMH GLP-1R(homeostatic)과 대비되는 hedonic 축 GLP-1R 노드 개념 hub.
- [[concept-dorsal-vagal-complex]] — hindbrain GLP1R 약리 무대.
- [[person-choi-hyung-jin]] — 교신저자 (사용자 본인).
- [[namkoong-2017-central-administration-of-glp-1]] — 동일 lab 7년 전 GLP-1/GIP 중추 식욕억제 paper; 본 DMH GLP-1R cognitive satiation의 계보 시작 (BBRC 2017).
- [[bae-2019-glucagon-like-peptide-1-receptor]] — 동일 lab 인체 GLP-1RA fMRI; 본 DMH 회로와 GLP-1 translational 계보 중간 단계 (DMJ 2019).
- [[lee-2017-glp-1-based-combination-therapy]] — 동일 lab GLP-1 병용요법 editorial; incretin combo 계보의 2017 로드맵 (JOMES 2017).
- [[kim-2025-mechanisms-of-glucagon-like-peptide]] — 동일 lab 뇌 GLP-1R 리뷰; 본 DMH GLP-1R preingestive satiation을 brain-wide GLP-1R 지도 안에 배치 (APEM 2025).
- [[thanarajah-2019-food-intake-recruits-orosensory]] — 인체 PET; 식이 즉시(감각) 단계에 시상하부 DA 분비 — pre-ingestive 단계 시상하부 관여의 인체 DA 증거 (Cell Metab 2019).
- [[onimus-2026-the-gut-brain-vagal-axis-governs]] — anticipatory(섭취 전) NAc DA 상승이 미주 의존; 본 preingestive 단계와 호응 (Sci Adv 2026).
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
- [[duran-2026-the-central-amygdala-gates]] — 대비되는 hedonic 축(Glp1r^CeA HFD 전담).
