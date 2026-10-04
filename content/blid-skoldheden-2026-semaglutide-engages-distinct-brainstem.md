---
title: "Semaglutide engages distinct brainstem-to-hypothalamus circuits to suppress motivated feeding and regulate ketogenesis and energy expenditure (Blid Sköldheden et al. 2026, bioRxiv preprint)"
type: paper
created: 2026-10-03
updated: 2026-10-03
source: "raw/2026 bioRxiv. Semaglutide engages distinct brainstem-to-hypothalamus circuits to suppress motivated feeding and regulate ketogenesis and energy expenditure.pdf"
authors: [Blid Sköldheden S, Teixidor-Deulofeu J, Ruud J, Engström Ruud L]
year: 2026
journal: "bioRxiv preprint (posted 2026-09-08); doi:10.64898/2026.09.04.749561 — ⚠️ preprint, **peer review 미통과**"
---

> [!takeaway] 연구 방향 관점의 핵심
> **GLP-1RA 기전 지도에서 비어 있던 "hindbrain → 시상하부" 구간을 회로 수준에서 채운 preprint.** 세마글루타이드가 활성화하는 **NTS Adcyap1⁺(PACAP) 뉴런**이 **ARC와 DMH로 각각 투사**하며, 두 경로는 ① 공통적으로 **단식·초콜릿 폭식 같은 "동기가 올라간 섭식"만 비혐오적으로 억제**(정상 암기 chow 섭취는 보존, CTA 없음)하고 ② **대사 효과는 완전히 분업** — **NTS→ARC = 섭취와 무관한 ketogenesis·체중 감소**, **NTS→DMH = 에너지소비(EE) 감소**. 셋째로 두 경로 모두 **단식 유발 AgRP 활성을 억제**한다.
> 사용자 연구와 닿는 지점: (1) **[[proposal-dmh-glp1r-human-imaging|DMH GLP1R 제안]]·[[kim-2024-glp-1-increases-preingestive-satiation|Kim 2024 Science]]의 DMH→ARC^AgRP GABA 억제**와 동일한 종착점(AgRP 억제)에 **상류 뇌간 입력**이 따로 존재함을 보임 → "시상하부 국소 GLP-1R" vs "뇌간에서 올라온 입력" 두 경로가 **같은 AgRP 노드로 수렴**. DMH GLP1R 연구에서 **뇌간 입력을 공변량/대조 조건으로 다뤄야 할 근거**. (2) **motivated feeding 선택적 억제** = [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU framework]]의 Need/Motivation 축만 깎고 baseline consummatory는 건드리지 않는 약리 표현형 — "약물이 무엇을 줄이는가"를 phase별로 쪼개는 사용자 lab 틀과 정확히 맞물린다. (3) **비혐오성(CTA 없음)** 은 오심 없는 차세대 GLP-1RA 표적 후보로서의 가치. (4) **ARC는 섭취 억제가 아니라 ketogenesis로 체중을 깎는다**는 결과는 체중 감량을 "식이 감소"로만 설명하는 모델을 흔든다.

# Semaglutide engages distinct brainstem-to-hypothalamus circuits (Blid Sköldheden et al. 2026)

⚠️ **bioRxiv preprint (2026-09-08 posted), peer review 미통과.** Gothenburg 대학 Sahlgrenska Academy, **Linda Engström Ruud lab**(lead contact). 선행 논문 [Teixidor-Deulofeu et al. 2025 Cell Metab 37:1530–1546](https://doi.org/10.1016/j.cmet.2025.04.018)(Adcyap1⁺ DVC 뉴런이 세마글루타이드 에너지균형 효과 매개)의 직접 후속편 — 그 논문은 아직 본 위키에 개별 페이지가 없다. 전 실험 **수컷 마우스**.

## 한 줄 요약
세마글루타이드가 활성화하는 **NTS Adcyap1⁺ 뉴런 → ARC / → DMH** 두 투사는 **동기화된 섭식(단식 후 재급식·초콜릿 폭식)만 비혐오적으로 억제**한다는 공통 기능과, **ARC = 섭취 무관 ketogenesis·체중↓ / DMH = 에너지소비↓** 라는 분리된 대사 기능을 가지며, 둘 다 **단식 유발 AgRP 뉴런 활성을 억제**한다.

## 핵심 내용

### 배경 — 비어 있던 구간
- GLP-1RA(세마글루타이드)의 체중 감량은 중추성이며, **DVC**(특히 AP GLP1R)가 핵심 관문 ([[gao-2026-semaglutide-drives-weight-loss-through|Gao 2026]], Huang 2024).
- 반대편에서는 **시상하부 국소 GLP1R 집단**(ARC TRH⁺ — Webster 2024; DMH GABA/GLP1R — [[kim-2024-glp-1-increases-preingestive-satiation|Kim 2024 Science]], [[rupp-2023-suppression-of-food-intake-by|Rupp 2023]])이 AgRP를 억제해 식욕을 꺾는다고 알려짐.
- 비어 있던 질문: 이 시상하부 회로는 **국소 GLP1R 신호로만** 동원되는가, 아니면 **뇌간의 약물 반응 뉴런이 올려 보내는 입력**으로도 동원되는가. 선행 연구에서 세마글루타이드 반응 DVC 뉴런이 ARC·DMH로 직접 투사함이 확인되어 해부학적 기반은 있었다.

### Figure 1 — 세마글루타이드는 "배고픔으로 켜진" AgRP를 끈다 (그리고 그게 체중 감량에 기여)
- **Ghrelin 1 mg/kg i.p.** 섭취 증가를 세마글루타이드(60 µg/kg s.c.) 전처치가 **완전 소거**; ARC c-Fos·`Agrp`⁺`Fos`⁺ 비율 모두 감소.
- **암기로 넘어가는 4시간 단식** 역시 ARC c-Fos를 강하게 유도하지만 세마글루타이드가 이를 둔화 — 단백질·mRNA 양쪽에서 확인.
- **DIO 마우스**(HFD ~12주) 8일 subchronic 투여(15→30→60 µg/kg 적정): 섭취·체중 감소 + **비만·장기 투여 조건에서도 단식 유발 AgRP 활성 억제 유지**.
- **역검증**: AgRP^Gq(hM3Dq) DIO 마우스에 세마글루타이드 + CNO(1 mg/kg, 암기 직전) → 섭취 감소 **완전 역전**, 체중 궤적이 **증가 방향으로 전환**. (Ctrl^fl/fl은 계속 감량.)

### Figure 2 — 그 억제는 DVC, 특히 Adcyap1^AP/NTS를 **통해** 일어난다
- **TRAP2 + hM3Dq**로 세마글루타이드 반응 DVC 뉴런을 포획 후 재활성(semaTRAP-Gq^DVC, CNO 0.1 mg/kg): 12h 암기 섭취↓, 체중↓, **2h 재급식(AgRP 의존 행동)↓**, ARC c-Fos·AgRP Fos 모두↓. vehTRAP 대조는 배경 recombination 희박.
- **Adcyap1-2A-Cre + Gq(AP/NTS)**: 암기 섭취 강하게 억제, **재급식 완전 차단**, ARC c-Fos↓.
- **Adcyap1^AP/NTS 삭제(taCasp3, AAV5 — DMV 미주 운동뉴런 보존)**: 세마글루타이드의 섭취·체중 효과 약화(선행 결과 재확인) + **재급식 억제 약화** + **AgRP Fos 억제가 더 이상 일어나지 않음**.
- → Adcyap1^AP/NTS는 "세마글루타이드 → 단식 재급식 억제 / AgRP 활성 억제"에 **필요한 뇌간 relay**.

### Figure 3 — 투사별 기능 분업 ①: baseline 섭식은 안 건드리고 대사만 갈린다
광유전(ChR2, 450 nm, 10 ms·30 Hz·1 s on/4 s off, 20 mW, **편측**), ARC 또는 DMH 위 fiber.
- **Adcyap1^NTS→ARC**: 암기 섭취 **억제 안 됨**(오히려 수치상 증가, 자극 주효과 p=0.0741), EE·RER 무변.
- **Adcyap1^NTS→DMH**: 암기 섭취 무변, RER 무변, **EE 유의하게 감소**.
- **광기 6시간·무식이 조건**(음식 없이 내인성 연료만): **→ARC는 혈중 β-hydroxybutyrate 증가(ketogenesis)·체중 감소**, RER 감소 경향(n.s.), EE 무변. **→DMH는 ketone·체중·RER·EE 전부 무변**.
- → **섭취 억제 없이도** 한쪽 경로는 "단식 유사 대사상태"를, 다른 쪽은 "에너지 절약"을 만든다.

### Figure 4 — 투사별 기능 분업 ②: 동기가 올라간 섭식만, 혐오 없이 억제
- **단식 후 2h 재급식**: →ARC·→DMH **둘 다 섭취↓·체중 회복 둔화**.
- **초콜릿 폭식**(2h 제한접근 5일로 >3 kcal·~0.5 g 안정화, 5 kcal/g): →ARC는 **초콜릿만↓**(동시 chow 변화 없음), →DMH는 초콜릿↓ **+ chow 소폭 유의 증가**(palatable→homeostatic 부분 전환 시사).
- **CTA**(5% sucrose + 1h 광자극): 두 경로 모두 이후 sucrose preference 변화 **없음** → **비혐오적**.
- **AgRP**: 두 경로 모두 단식 활성 AgRP 뉴런 수·비율 유의 감소.

### Figure 5 — Adcyap1^NTS는 흥분성만이 아니다 (세마글루타이드가 둘 다 동원)
- `Slc32a1`(VGAT) in situ: **Adcyap1^NTS의 ~30%가 Slc32a1⁺**, Slc32a1⁺의 ~30%가 Adcyap1⁺.
- 세마글루타이드는 Adcyap1⁺의 **~40%**, 억제성 Slc32a1⁺의 **~1/3**을 활성화하고, 삼중표지 뉴런을 유의하게 증가 → **세마글루타이드 반응 Adcyap1^NTS의 약 절반이 억제성(GABA)**.
- 선행 보고(Ilanges 2022: endotoxin 반응 Adcyap1^NTS = 글루타메이트성)와 달리 **분자적 이질성**이 있음. 투사별 신경전달물질 정체는 미규명.

### Figure 6 — 세마글루타이드 반응 뉴런만 골라도 같은 분업이 재현된다 (TRAP2 × 광유전)
TRAP2 + ChR2를 NTS에, fiber를 ARC 또는 DMH에. vehTRAP = 대조(양군 모두 광자극).
- **semaTRAP^NTS→ARC**: 암기 섭취·EE·RER 무변 → **광기·무식이에서 ketone↑·체중↓**(EE·RER n.s.) → **단식 재급식은 억제 못 함**, 그러나 **초콜릿 폭식 억제** + **단식 AgRP Fos 억제**(ARC 전체 Fos도 감소 경향).
- **semaTRAP^NTS→DMH**: 암기 섭취 무변·**EE↓**, 광기에도 **EE↓**(ketone·체중·RER 무변), **재급식↓·초콜릿 폭식↓·AgRP Fos↓**. DMH c-Fos 유도로 자극 유효성 확인.
- → 넓은 Adcyap1^NTS 집단에서 본 **투사별 표현형이 약물 반응 subset 안에도 보존**. 유일한 불일치는 semaTRAP→ARC의 재급식(저자 해석: 넓은 Adcyap1^NTS→ARC가 더 광범위한 기능을 가진 반면 약물 반응 투사는 더 제한적일 수 있음).

### 저자들이 스스로 짚은 한계
- 수컷만, **편측 자극**(약한 효과 탐지력 저하), 조작은 **충분성(sufficiency)** 만 입증 — 전체 약효 중 기여 비중은 미정.
- AgRP 판독은 **암기 초반**, ketogenesis는 **광기**에서 측정 → 둘의 인과 연결 불가(저자 명시).
- ARC 하류 기전(무엇이 ketogenesis를 만드는지)은 미해결.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **DMH GLP1R 제안의 대조 조건**: [[kim-2024-glp-1-increases-preingestive-satiation|Kim 2024]]의 DMH^GLP-1R→ARC^AgRP GABA 억제와 본 논문의 NTS→DMH→(AgRP 억제)는 **같은 종착점, 다른 상류**. DMH 국소 GLP1R 조작 실험에서 **뇌간 Adcyap1 입력을 차단/보존한 조건 비교**가 "국소 수용체 vs 상행 입력" 기여를 분리할 수 있다. 인간 영상 제안([[proposal-dmh-glp1r-human-imaging]])에서도 DMH 신호가 brainstem BOLD와 공변하는지가 검증 가능한 분기점.
- **NMPU 분해**([[kim-2024-unified-theoretical-framework-underlying-regulation]]): "baseline 암기 섭취는 보존, 단식·palatable 섭식만 억제"는 **Need(결핍 알람)·Motivation 증폭 단계만 깎는 약리 서명**으로 읽힌다. [[kim-2024-normative-framework-dissociates-need|AgRP=Need / LH LepR=Motivation]] 해리 위에 "GLP-1RA는 Need 축을 끈다"는 좌표를 줄 수 있다 — 단 원문은 NMPU를 언급하지 않는다.
- **EE 감소의 역설**: 항비만 약물의 downstream 경로 하나가 **EE를 낮춘다**는 결과는, GLP-1RA 장기 효과의 **적응적 대사 저항(체중 재증가 방어 — [[concept-weight-regain-defended-adiposity]])** 의 회로 후보일 수 있다. 사용자 lab의 GLP1RA 중단 후 rebound 제안([[proposal-glp1ra-rebound-nrf-junggyeon]])과 연결 가능한 가설.
- **비혐오성 분리**: CTA 없는 motivated-feeding 억제 경로가 존재한다면, 오심 축(AP·CGRP^PBN·CeA)을 피하면서 폭식만 억제하는 표적이 된다 → [[concept-central-amygdala-glp1r]]·[[concept-conditioned-taste-aversion]]과 교차 설계 여지.

## ⚠️ 위키 내 충돌·긴장 (병기 — 어느 쪽도 지우지 않음)
1. **"NTS가 세마글루타이드 체중감량에 기여하는가"** — [[gao-2026-semaglutide-drives-weight-loss-through|Gao 2026 (Krashes)]]: AP에만 Gs를 보존해도 체중 감량이 회복되고 NTS Gnas 결손 정도는 체중 변화와 **무상관**. 본 preprint: **NTS Adcyap1⁺ 뉴런과 그 시상하부 투사가 약효의 relay**. 층위가 다르다 — Gao는 **NTS^Glp1r의 Gs 신호(수용체 수준)**, 본 논문은 **AP GLP1R 하류의 Adcyap1^NTS(회로 수준, 수용체 비의존)**. 즉 "NTS가 약물을 직접 감지하지는 않지만 신호를 올려 보내는 중계는 한다"로 봉합 가능하지만, **아직 같은 실험 안에서 검증된 봉합은 아니다**.
2. **AgRP: 억제되는가, 동원되는가** — [[davila-2026-agrp-neurons-are-required-for|d'Avila 2026 (PNAS, Horvath)]]: 세마글루타이드가 AgRP를 **모집**하고 AgRP 기능이 없으면 체중 감량이 붕괴(암컷). 본 preprint: 세마글루타이드가 AgRP 활성을 **억제**하고 AgRP를 chemogenetic으로 켜면 체중 감량이 역전(수컷 DIO). 저자들도 이 논문을 인용해 "맥락·투여기간 의존"으로 유보한다. **단식 유발 급성 활성(본 논문의 판독) vs 지속 투여 중 적응적 대사 실행(d'Avila)** 은 다른 시간척도의 진술 — 성별 차이도 교란(본 연구 수컷 전용, d'Avila 암컷 특이).
3. **ketogenesis의 방향성** — Chen 2023(Cell Metab): AgRP **활성**이 간 β-oxidation·ketone 생성을 촉진, AgRP 억제는 단식 ketogenesis를 **감소**. 본 논문의 NTS→ARC는 **AgRP 활성을 낮추면서 ketone을 올린다**. 저자도 "단순 AgRP 매개 모델로는 설명 불가"라고 명시(측정 시점도 다름) — ARC 내 **AgRP 비의존 기전**이 열려 있다. (Chen 2023은 본 위키에 개별 페이지 없음.)
4. **NTS→ARC가 암기 섭취를 억제하는가** — Martinez de Morentin 2024(Curr Biol): GABAergic NTS→ARC 경로가 암기 chow 섭취를 비혐오적으로 **억제**. 본 논문의 Adcyap1^NTS→ARC는 암기 섭취를 **억제하지 못함**(수치상 증가, p=0.0741). 같은 해부학 경로 안의 **다른 분자 집단**일 가능성(본 논문 Fig 5의 Adcyap1/Slc32a1 부분중첩과 정합). (Martinez de Morentin 2024도 본 위키에 페이지 없음.)
5. **palatable 섭식 억제의 "주인"** — [[godschall-2026-a-brain-reward-circuit-inhibited|Godschall 2026]]·[[duran-2026-the-central-amygdala-gates|Duran 2026]]·[[concept-central-amygdala-glp1r]]은 hedonic/HFD 섭취 억제를 **NTS^Gcg→CeA^Glp1r→VTA** 축에 둔다. 본 논문은 **CeA를 거치지 않는 NTS→ARC / NTS→DMH** 경로도 초콜릿 폭식을 억제한다고 보고 → **단일 hedonic brake가 아니라 병렬 회로**. 어느 경로가 약효의 몇 %인지는 양쪽 모두 미정.
6. **DMH와 에너지소비의 부호** — Lee 2018(Mol Metab): DMH GLP-1 신호 **상실**이 BAT thermogenesis↓·지방↑. 본 논문: NTS→DMH **활성**이 EE↓. DMH는 EE를 양방향으로 조절하는 이질적 집단(Brs3·hibernation-like state 문헌)이므로 **같은 핵의 다른 세포**로 보는 것이 정합적이나, "GLP-1 경로 활성 = EE 증가"라는 단순 도식과는 충돌한다 → [[concept-dorsomedial-hypothalamus]]에 병기.

## 관련 페이지
- [[concept-dorsal-vagal-complex]] — NTS Adcyap1⁺(PACAP) relay와 그 시상하부 출력이 추가되는 무대.
- [[concept-arcuate-nucleus]] — NTS→ARC 입력: 섭취 무관 ketogenesis·체중↓ + AgRP 활성 억제.
- [[concept-dorsomedial-hypothalamus]] — NTS→DMH 입력: EE↓ + motivated feeding 억제; 사용자 lab DMH GLP1R 경로의 상류 대조군.
- [[concept-npy-agrp-neurons]] — 두 경로가 공통 수렴하는 종착 노드(단식 유발 활성 억제).
- [[concept-glp-1]] — GLP-1R 작용 hub; 본 논문은 "수용체 없는 하류 회로" 층을 보탠다.
- [[concept-ketogenesis]] — 섭취와 분리된 대사 효과(ketone·EE) 개념 hub.
- [[gao-2026-semaglutide-drives-weight-loss-through]] — AP=1차 수용 부위·Gs–cAMP 필수. **NTS 기여 해석에서 긴장** (위 ⚠️1).
- [[davila-2026-agrp-neurons-are-required-for]] — AgRP 모집·필요성(암컷). **AgRP 방향성 긴장** (위 ⚠️2).
- [[kim-2024-glp-1-increases-preingestive-satiation]] — DMH^GLP-1R→ARC^AgRP GABA 억제(사용자 lab); 같은 종착점의 **국소 수용체 경로**.
- [[rupp-2023-suppression-of-food-intake-by]] — DMH GABA성 Glp1r/Lepr 뉴런; DMH가 GLP-1 포만의 시상하부 노드임을 보강.
- [[godschall-2026-a-brain-reward-circuit-inhibited]] · [[duran-2026-the-central-amygdala-gates]] · [[concept-central-amygdala-glp1r]] — palatable/hedonic 섭취 억제의 **병렬 CeA 경로**와 대비.
- [[concept-conditioned-taste-aversion]] — 본 경로는 CTA를 만들지 않음(비혐오 축 증거).
- [[concept-area-postrema]] — Adcyap1^NTS의 상류 GLP1R 수용 부위(AP Adcyap1⁺는 소수).
- [[concept-need-motivation-pleasure-utility]] · [[kim-2024-unified-theoretical-framework-underlying-regulation]] — "baseline 보존·동기화된 섭식만 억제" 표현형의 이론 좌표.
- [[proposal-dmh-glp1r-human-imaging]] — DMH GLP1R 인간 검증 제안; 뇌간 상행 입력을 공변량으로 다룰 근거.
- [[concept-weight-regain-defended-adiposity]] · [[proposal-glp1ra-rebound-nrf-junggyeon]] — EE 감소 경로가 체중 재증가 방어와 맞물릴 가능성(가설).
- [[liu-2012-fasting-activation-of-agrp-neurons]] — 본 논문이 판독으로 쓰는 "단식 유발 AgRP 활성"의 시냅스·분자 기반.
- [[overview-appetite-energy-homeostasis]] — 약리·회로 통합.
