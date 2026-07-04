---
title: "Gut-brain circuits for fat preference"
type: paper
created: 2026-07-02
updated: 2026-07-02
source: raw/Li2022.pdf
authors: [Mengtong Li, Hwei-Ee Tan, Zhengyuan Lu, Katherine S. Tsang, Ashley J. Chung, Charles S. Zuker]
year: 2022
---

> [!takeaway] 연구 방향 관점의 핵심
> **지방 선호는 혀가 아니라 장에서 만들어진다.** 미각 없이도(TRPM5-KO) 지방이 **[[concept-vagal-afferent-neurons|미주]] gut-brain 축**을 통해 강한 선호를 형성. Zuker lab은 두 병렬 경로를 분리: ① **CCK-의존 generalist**(당·지방·아미노산 공통, VIP⁺ nodose, [[concept-free-fatty-acid-receptors|GPR40/GPR120]] 수용체) + ② **CCK-비의존 fat-only**(TRPA1⁺ nodose). 사용자 핵심 함의: **liking(미각)과 wanting(gut-brain)의 명시적 분리** — "지방을 원함(wanting)은 gut-brain 축, 좋아함(liking)은 미각계"라고 논문이 직접 규정. [[grove-2025-lateralized-pathway-associating-nutrients|Grove 2025]](Knight)의 자매 규명이자 [[proposal-oral-fat-taste-pleasure-desire|구강 지방 연구계획서]]의 post-oral 회로 원전.

# Gut-brain circuits for fat preference (Li 2022, Zuker lab)

## 한 줄 요약
지방이 **미각 비의존적으로 장→미주→뇌(caudal NST)** 축을 통해 선호를 형성하며, 이를 매개하는 두 병렬 미주 경로(CCK-의존 generalist = GPR40/GPR120, CCK-비의존 fat-only = TRPA1)와 수용체를 유전학적으로 규명. *Nature* 610:722–730 (Zuker lab).

## 핵심 내용

### Background
- 당(sugar)은 미각과 독립적으로 **gut-brain 축**을 통해 선호를 만든다(Tan 2020 *Nature*: SGLT1→미주). 인공감미료는 미각 수용체를 켜도 선호를 못 만듦 → **post-ingestive 신호가 craving을 구동**.
- 본 연구는 **지방(fat)** 에 같은 논리를 적용·확장.

### Method
- fat(1.5% Intralipid) vs 인공감미료(AceK) **48h 선호 전환** 패러다임(초기 단맛→48h 지방 배타적 선호).
- 미각 비의존성: **TRPM5-KO**(지방 맛맹) 생쥐도 지방 선호 형성.
- 회로: cNST(caudal NST) Fos, 위내 직접 주입, **미주절단(vagotomy)**, TRAP2-TetTox로 fat-활성 cNST 뉴런 침묵, nodose ganglion **calcium imaging**(당·지방·아미노산 자극).
- 수용체: CCKAR 길항(devazepide), CRISPR로 **CD36·GPR40·GPR120 단·이·삼중 결손** + 미주 imaging + 선호 검사. VIP-cre·Trpa1-cre로 nodose 세포타입 표적(TetTox/DREADD).

### Result
1. **미각 비의존 gut-brain 지방 선호**: 지방은 cNST를 강하게 활성(위내 주입으로 충분, vagotomy로 소실). fat-활성 cNST 뉴런 침묵 → **즉각 매력(innate attraction)은 정상**이나 **post-ingestive 지방 선호 형성 실패** → liking≠wanting 분리.
2. **두 병렬 미주 경로**:
   - **Generalist(당·지방·아미노산 공통)**: **CCK-의존**. **VIP⁺(UTS2b) nodose** 뉴런; CCKAR 길항으로 세 영양소 반응 모두 차단. VIP 뉴런 침묵→선호 형성 실패, 인공활성(DREADD)→새 선호 창출.
   - **Fat-only**: **CCK-비의존**. **TRPA1⁺ nodose** 뉴런; CCKAR 길항 무효. TRPA1 뉴런 침묵→지방 선호만 소실(당 선호 보존).
3. **장 지방 수용체 = GPR40 + GPR120**: 삼중/이중 결손 imaging·행동에서 **GPR40/GPR120 이중결손(및 삼중결손)만** 지방 미주 반응·지방 선호를 소실. **CD36 단독결손·CD36 포함 이중결손은 정상** → 장의 gut-brain 지방 선호엔 **GPR40/GPR120이 필수, CD36는 불요**(구강 미뢰와 대비!). 당 반응은 모든 결손에서 보존(SGLT1 별도).

### Claim
- 당·지방 모두 **미각을 넘어 전용 gut-brain 회로**로 소비를 구동. 지방 선호 형성의 4단계(수용체 결합→EEC-CCK 신호→미주 활성→cNST 방송) 어디를 막아도 선호 차단.
- **CCK = generalist 축의 전달자**(포만호르몬이자 영양소 선호 신호의 이중 역할). VIP/UTS2b nodose = generalist, TRPA1 nodose = fat-specialist.
- Discussion 명제(사용자 핵심): **"Liking sweet and fat(선천적 매력)은 미각계의 활성; Wanting sugar and fat은 gut-brain 축의 결과."**

## 방법·해석 유의
- 본 회로는 **post-oral** 지방(장 수용체 GPR40/GPR120). 구강 미뢰의 [[concept-cd36|CD36]]([[laugerette-2005-cd36-involvement-in-orosensory-detection|Laugerette 2005]])와 **분자적으로 분리** — 같은 지방이라도 감지 부위별 수용체가 다름.
- [[grove-2025-lateralized-pathway-associating-nutrients|Grove 2025]](Knight)는 같은 fat gut sensor를 **GPR40/120 + CD36**로 기술 — 본 논문은 CD36 불요를 CRISPR로 명시(경미한 문헌 강조 차이; 향후 조율 필요).
- global(비-조건부) knockout — 발달 보상 가능성은 저자도 명시.

## 관련 페이지
- [[concept-vagal-afferent-neurons]] — 지방 gut-brain 축의 미주 conduit(VIP·TRPA1 nodose 세포타입).
- [[concept-cck]] — generalist 경로의 전달자(CCK-의존 vs fat-only 분리).
- [[concept-free-fatty-acid-receptors]] — 장 지방 수용체 GPR40(FFAR1)/GPR120(FFAR4) — 본 논문이 필수로 규명.
- [[concept-cd36]] — 구강엔 필수, 장 gut-brain 선호엔 불요(대비).
- [[concept-enteroendocrine-cells]] — CCK⁺ EEC가 당·지방·아미노산 gut sensor.
- [[grove-2025-lateralized-pathway-associating-nutrients]] — 자매 규명(fat→VTA-DA-CCK→aBLA); 병렬 회로 정체.
- [[concept-flavor-nutrient-conditioning]] — post-oral 영양=진짜 reinforcer; 지방 평행 경로.
- [[concept-primary-reward-signals]] — event-driven fat primary reward(GPR40/120/CD36).
- [[concept-liking-wanting]] — liking(미각) vs wanting(gut-brain) 명시적 분리.
- [[proposal-oral-fat-taste-pleasure-desire]] — 구강 vs post-oral 지방 신호 분리 연구계획서(본 논문=post-oral 원전).
- [[person-zuker-charles]] — 저자 hub(gut-brain 당·지방 선호, 미각 coding).
- [[concept-fat-taste]] — 구강 지방 감지와 대비되는 post-oral 축.
- [[de-lartigue-2026-critical-role-gut-brain-signalling]] — gut-brain 종합 맥락.
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
- [[dipatrizio-2011-endocannabinoid-signal-in-the-gut]] — 공저자 후속의 말초 endocannabinoid 축(선행 연구).
- [[concept-endocannabinoid-system]] — CB1 축 hub.
- [[bai-2022-enteroendocrine-cell-types-that-drive]] — 상보: 장→뇌 선호/혐오를 EEC 아형으로 해부.
