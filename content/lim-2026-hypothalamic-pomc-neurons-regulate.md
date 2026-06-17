---
title: "Hypothalamic POMC neurons regulate intestinal glucose absorption via a gut–brain circuit"
type: paper
created: 2026-06-14
updated: 2026-06-14
source: raw/2026 Nature Communications. Hypothalamic POMC neurons regulate intestinal glucose absorption via a gut–brain circuit.pdf
authors: [Lim HS, Min SH, Kim HJ, Park CB, Kim SJ, Kim MG, Kim JS, Byun JY, Park SE, Kim MJ, Jeong SY, An JA, Seo S, Park J, Kim Y, Kim JY, Lee SJ, Kim SY, Yeo XY, London E, Shon JW, Kang GM, Jung S, Kim MS]
year: 2026
---

> [!takeaway] 연구 방향 관점의 핵심
> 시상하부 **ARC POMC → α-MSH → MC4R(DMV) → 부교감(미주 원심성) → 장 SGLT1↓ → 장 포도당 흡수↓** 라는 **뇌→장 원심성 회로**로 인슐린과 무관하게 식후 혈당을 낮춘다. 본 wiki의 gut-brain은 대부분 **구심성(장→뇌)**인데, 이 논문은 **원심성(뇌→장) parasympathetic** 축을 추가 — [[concept-pomc-neurons|POMC]]·[[concept-dorsal-vagal-complex|DVC/DMV]]·[[concept-mc4r|MC4R]] 페이지의 새 출력 회로. 결정적으로 **세마글루타이드의 혈당강하(체중감량 아님) 효과가 POMC PKA에 의존**(tirzepatide는 비의존) → 사용자 lab의 [[kim-2025-mechanisms-of-glucagon-like-peptide|뇌 GLP-1R cAMP-PKA 리뷰]]에 직접 회로 근거. 한국(Asan/Ulsan, **Min-Seon Kim**) 연구로 사용자 네트워크 접점. 함의: **POMC PKA−vagal−장 SGLT1 축**이 인슐린저항 환자의 인슐린-비의존 항당뇨 표적.

# Lim et al. 2026 — POMC PKA가 미주-장 SGLT1 회로로 장 포도당 흡수를 조절

> Lim HS, Min SH, Kim HJ, …, Jung S, **Kim MS** (Min-Seon Kim, lead). *Nat Commun* (2026, in press). Asan Medical Center · University of Ulsan College of Medicine, Seoul. OA (CC BY-NC-ND). https://doi.org/10.1038/s41467-026-74170-1

## 한 줄 요약
ARC POMC 뉴런의 cAMP-PKA 신호(식후·GLP-1/GIP 작용제로 활성)가 **α-MSH→MC4R**로 상부 장을 지배하는 **DMV(미주 운동) 뉴런**을 활성화 → 부교감 경로로 **장 SGLT1 의존 포도당 흡수↓·대변 포도당 배설↑** → 인슐린 감수성과 무관하게 식후 혈당을 낮춘다; 세마글루타이드의 혈당강하 효과가 이 POMC PKA 경로에 의존.

## 핵심 발견
1. **식후·약물이 POMC PKA 활성화**: 세마글루타이드·tirzepatide·식후 상태가 ARC POMC 뉴런의 핵 pCREB(PKA 의존)↑ → POMC PKA가 식후 대사 적응·incretin 작용제의 downstream.
2. **POMC-특이 PKA 항진 모델**(Prkar1a[RIα] 삭제 = constitutive PKA): **비만 + 고코르티솔혈증** 발생. 단 이는 **뇌하수체 corticotroph off-target**(ACTH↑→corticosterone↑, Cushing 유사; 부신절제로 비만·탈모 가역). ARC POMC-국한(shRNA·AAV) 조작은 체중·지방 무변 → 비만은 부수효과.
3. **인슐린저항에도 내당능 개선 = 장 기전**: Prkar1a^PomcKO는 ITT·HOMA-IR로 인슐린저항이지만 **OGTT 내당능 개선**(IVGTT는 정상). 신장 포도당 재흡수는 오히려↑(상쇄 안 됨). **대변 포도당 배설↑** + 장 **SGLT1 발현↓**(상부 공장), SGLT1 추적자 **Me-4FDG** 흡수↓·배설↑. GLP-1 혈중 무변 → **incretin-비의존 장 기전**.
4. **회로 = ARC POMC → DMV → 상부 장(부교감)**:
   - 자율신경 차단: **atropine·말초제한 ATMN**(부교감)만 내당능 개선·SGLT1↓를 역전(α/β-아드레날린 차단은 무효). acetylcholine 주입이 표현형 모사(장 포도당 흡수↓·SGLT1↓).
   - PRV 역행추적: 상부 공장 ← **DMV**(미주 운동핵) ← ARC POMC(다연접). POMC 축삭이 gut-innervating DMV 뉴런에 직접 시냅스. Prkar1a^PomcKO에서 gut-innervating DMV c-Fos↑.
   - **α-MSH→MC4R**: 8-Br-cAMP가 explant α-MSH 분비↑; 4뇌실 MC3/4R 작용제(MT-II)가 gut-innervating DMV c-Fos↑; DMV 뉴런이 **Mc4r** 발현. → POMC PKA→α-MSH→MC4R(DMV)→미주 원심성→장 SGLT1↓.
   - ARC POMC→DMV **chemogenetic 활성**(hM3Dq+4뇌실 DCZ)이 내당능 개선·장 포도당 배설↑·SGLT1↓(인슐린 감수성 무변)로 충분성 입증.
5. **세마글루타이드 의존성**: ARC POMC PKA 억제(Prkaca/b 결손)가 **세마글루타이드의 혈당강하·SGLT1↓·대변 포도당↑를 소실**(somatostatin으로 인슐린 차단 하에서). **tirzepatide는 POMC PKA 비의존**. 체중감량 효과는 둘 다 POMC PKA와 무관.

## 사용자 연구와의 접점
- **gut-brain 원심성(뇌→장) 축 추가**: 본 wiki의 gut-brain은 대부분 장→뇌 구심성([[concept-vagal-afferent-neurons]]·[[de-lartigue-2026-critical-role-gut-brain-signalling]]). 이 논문은 **POMC→DMV→장 부교감 원심성**으로 장 흡수 자체를 조절 → [[concept-dorsal-vagal-complex|DVC]]의 DMV(원심) 역할·[[concept-pomc-neurons|POMC]] 출력 회로 확장.
- **GLP-1R cAMP-PKA 회로**: 사용자 lab [[kim-2025-mechanisms-of-glucagon-like-peptide|Kim 2025 APEM]]가 뇌 GLP-1R의 cAMP-PKA·부위별 작용을 종합 → 본 논문이 그 POMC PKA 가지의 **장 SGLT1 출력**을 회로로 구체화. [[gao-2026-semaglutide-drives-weight-loss-through|Gao 2026]](세마글루타이드 AP·Gs-cAMP=체중)와 **상보**: 체중은 AP, 혈당은 ARC POMC PKA로 분업 시사.
- **멜라노코르틴**: α-MSH→MC4R가 **장 SGLT1**이라는 새 말초 출력 → [[concept-mc4r]]·[[concept-melanocortin-system]]에 대사(혈당) 가지 추가.

## 관련 페이지
- [[person-kim-min-seon]] — 교신저자. 시상하부-말초 대사 회로(Asan/Ulsan, 한국).
- [[concept-pomc-neurons]] — ARC POMC PKA→α-MSH 출력 회로의 본거지.
- [[concept-dorsal-vagal-complex]] — DMV(미주 운동핵) 원심성이 장 SGLT1 조절(원심 축 추가).
- [[concept-mc4r]] · [[concept-melanocortin-system]] — α-MSH→MC4R(DMV)→장 SGLT1 대사 가지.
- [[kim-2025-mechanisms-of-glucagon-like-peptide]] — 뇌 GLP-1R cAMP-PKA 리뷰(사용자 lab)에 POMC PKA→장 회로 근거.
- [[gao-2026-semaglutide-drives-weight-loss-through]] — 세마글루타이드 체중(AP/Gs-cAMP) vs 본 논문 혈당(ARC POMC PKA) 분업.
- [[concept-arcuate-nucleus]] — ARC POMC 대사 hub.
- [[concept-incretin-effect]] · [[concept-glp-1]] — 세마글루타이드/tirzepatide·incretin 맥락(단 본 효과는 incretin-비의존).
- [[mcknight-2026-attenuated-hypothalamic-response-to]] — 같은 시기 gut-brain×시상하부 짝(AgRP 구심성, 본 논문은 POMC 원심성).
- [[overview-appetite-energy-homeostasis]] — gut-brain 큰 그림.
