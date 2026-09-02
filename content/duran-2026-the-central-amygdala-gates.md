---
title: "The central amygdala gates exogenous glucagon-like peptide 1 signals (Duran et al. 2026, Mol Metab)"
type: paper
created: 2026-07-04
updated: 2026-09-02
source: raw/2026 Molecular Metabolism. The central amygdala gates exogenous glucagon-like peptide 1 signals.pdf
authors: [Duran M, Zeng N, Cutts EJ, Polamarasetty A, Rodriguez M, Habegger KM, Hardaway JA]
year: 2026
---

> [!takeaway] 연구 방향 관점의 핵심
> **CeA가 말초 GLP-1RA(Ex-4)의 hypophagia를 게이팅하는 통합 노드**임을 확정한 [[duran-2026-the-central-amygdala-integrates|Duran bioRxiv 프리프린트]]의 **정식 출판판**(Mol Metab 2026, "integrates"→"gates"). 핵심 분업 재확인: **Prkcd^CeA(외측 CeL)** 억제가 Ex-4 hypophagia를 가장 강하게 차단, **Glp1r^CeA(내측 CeM)** 억제는 표준식이엔 약하나 **고지방·기호식(HFD)** 억제를 크게 rescue(~30%) → **Glp1r^CeA = hedonic feeding 전담**, **Sst^CeA**는 무관. 사용자 lab의 [[kim-2024-glp-1-increases-preingestive-satiation|DMH GLP-1R cognitive satiation]](homeostatic 축)과 대비되는 **hedonic 축** 표적 — [[concept-need-motivation-pleasure-utility|NMPU]]의 Pleasure/Motivation 축에 GLP-1RA가 진입하는 회로 근거. peer-review 통과판이므로 CeA^Glp1r 라인을 인용 시 이 버전을 1차로.

# The central amygdala gates exogenous glucagon-like peptide 1 signals (Duran et al. 2026)

## 한 줄 요약
말초 투여 GLP-1RA(Exendin-4)는 CeA GABAergic 뉴런을 빠르고 지속적으로 활성화하며, **Prkcd^CeA·Glp1r^CeA(단, Sst^CeA는 아님)** 가 그 hypophagia에 필요하고, 특히 **Glp1r^CeA는 기호성 고지방식(HFD) 억제**를 전담한다 — 여러 non-overlapping CeA 세포군이 함께 외인성 GLP-1R 신호를 게이팅한다.

## 핵심 내용

### 배경
- FDA 승인 GLP-1RA(liraglutide·semaglutide)의 식이 억제는 CNS 매개이나, 직접 vs 간접 회로 동원 메커니즘은 미규명. 시상하부·hindbrain 외에 **BNST·lateral septum·CeA** 등 limbic 부위에도 GLP-1R이 풍부하나 이들의 역할은 불명확.
- CeA는 fear·motivation·reward·appetite hub인 **GABAergic nucleus**로, GLP-1R은 특히 medial CeM에 풍부하며 Sst·PKCδ population과 **비중복**(Zeng 2021).

### 방법
- **vGat(Slc32a1)-Cre / Prkcd-Cre / Sst-Cre / Glp1r-Cre** 마우스에 부위·세포별 AAV.
- **Fiber photometry**: CeA에 GCaMP7f, 자유행동 중 i.p. Ex-4 반응 in vivo 측정 (Exendin-9 전처치로 GLP-1R 의존성 검증).
- **Chemogenetic 억제**: hM4d(Gi) + designer ligand **DCZ(deschloroclozapine)**; ex vivo whole-cell patch로 억제 검증.
- **행동 정량**: open-source **FED3** device로 FR1 refeed에서 pellet retrieval(consummatory)·active nose-poke(appetitive) 구분 측정. 기호식은 간헐적 **HFD(60 kcal% fat)** 접근 모델.

### 발견 1 — 말초 Ex-4가 CeA를 in vivo 활성화
- i.p. Ex-4(5 µg/kg) → **빠르고 지속적 CeA 활성**(2nd Tx 후 15–30분 net AUC 유의↑), **Exendin-9 전처치로 차단**. 활성은 최대 ~30분 지속. 동물 간 이질성 존재.

### 발견 2 — 세포종류별 chemogenetic 필요성
| CeA population | 위치 | Ex-4 hypophagia에 대한 효과 |
|---|---|---|
| **vGat (전체 GABAergic)** | 전체 | 유의하나 **불완전** attenuation |
| **Prkcd (PKCδ)** | 외측 CeL | **가장 강한 attenuation** |
| **Glp1r** | 내측 CeM | 표준식이에선 **약한** attenuation |
| **Sst (somatostatin)** | CeL | **효과 없음** (특이성 확인) |

- 모든 rescue가 **불완전** → CeA는 brain-wide anorexigenic system의 한 노드; 병렬 회로 존재.

### 발견 3 — Glp1r^CeA = hedonic(기호식) 전담
- 간헐적 HFD 접근(hedonic hyperphagia) 모델에서 **Glp1r^CeA 억제가 Ex-4의 HFD 섭취 억제를 강하게 rescue(~30%)** — 표준식이(~10%)보다 큼.
- 저자 해석: Glp1r^CeA는 **homeostatic보다 hedonic feeding 억제**를 선호적으로 담당; **Pnoc^CeA**(기호식 촉진, Hardaway 2019)와 **reciprocal** 관계 추정.

### 발견 4 — appetitive vs consummatory 분리
- FED3 active poke(seek)와 pellet retrieval(consume)을 분리 측정. population·성별에 따라 해리 → CeA 세포군이 seeking vs consumption을 차등 조절 가능성.

### 직접 vs 간접 활성 (미해결)
- 말초 large-peptide GLP-1RA는 대부분 circumventricular organ([[concept-dorsal-vagal-complex|AP]] 등)에 축적 → CeA는 상당 부분 **indirect(NTS^Gcg 경유)** 동원 가능. small-molecule은 BBB 통과해 CeA 직접 활성 가능 → 직·간접 혼재 시사.

## 관련 페이지
- [[duran-2026-the-central-amygdala-integrates]] — **동일 연구의 bioRxiv 프리프린트판**("integrates"). 본 페이지는 정식 출판판(Mol Metab)이며 결론 동일; 인용 시 이쪽 우선.
- [[concept-central-amygdala-glp1r]] — CeA^Glp1r 개념 hub(세포종류 분업·회로·약리 종합).
- [[gao-2026-semaglutide-drives-weight-loss-through]] — 세마글루타이드가 CeA를 Fos 동원; DVC 1차 작용과 downstream CeA 연결.
- [[concept-basolateral-amygdala]] — 인접·별개 nucleus(BLA vs CeA 대비).
- [[concept-glp-1]] — GLP-1R 분포·limbic 작용 hub.
- [[concept-dorsal-vagal-complex]] — CeA로 GLP-1 신호를 중계하는 hindbrain 상류(NTS^Gcg).
- [[kim-2024-glp-1-increases-preingestive-satiation]] — 시상하부 cognitive satiation(homeostatic 축)과 limbic hedonic 경로 대비 (사용자 lab).
- [[concept-need-motivation-pleasure-utility]] — Glp1r^CeA hedonic 전담 = Pleasure/Motivation 축 약리 진입점.
- [[park-2025-glucagon-like-peptide-1-and-hypothalamic]] — 부위별 GLP-1R 분업 review (사용자 lab).
- [[overview-cea-glp1r-food-safety-alarm]] — 본 논문 + Godschall 2026 + Woods 1991을 묶어 CeA^Glp1r을 "food safety alarm"으로 종합.
- [[bhatti-mazo-2026-feature-specific-threat-coding-in]] — 본 논문이 "GLP-1R 풍부하나 역할 불명"으로 남긴 **lateral septum**에 세포 좌표를 제공: **LS^Glp1r**(LS^Crhr2의 8.4%)가 행동 개시 표상 1위·SuM 최대 입력. 단 위협 회피 과제이며 섭식·GLP-1RA는 미시험 (Nature 2026). → [[concept-lateral-septum]]
