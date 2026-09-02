---
title: "Changes in neurotensin signalling drive hedonic devaluation in obesity (Gazit Shimoni & Tose 2025)"
type: paper
created: 2026-08-20
updated: 2026-09-02
source: "raw/2025 Nature. Changes in neurotensin signalling drive hedonic devaluation in obesity.pdf"
authors: [Neta Gazit Shimoni, Amanda J. Tose, Charlotte Seng, Yihan Jin, Tamás Lukacsovich, Hongbin Yang, Jeroen P. H. Verharen, Christine Liu, Michael Tanios, Eric Hu, Jonathan Read, Lilly W. Tang, Byung Kook Lim, Lin Tian, Csaba Földy, Stephan Lammel]
year: 2025
journal: Nature 641:1238–1247
doi: 10.1038/s41586-025-08748-y
---

> [!takeaway] 연구 방향 관점의 핵심
> **비만에서 hedonic 축이 왜 꺼지는가**에 대해 지금까지 위키에서 가장 완결된 인과 사슬: 만성 HFD → **lateral NAc(NAcLat)→VTA 투사 뉴런의 *Nts* 발현·NTS 방출 감소** → VTA 도파민 뉴런 흥분 실패 → **hedonic feeding 소실**. 그리고 **NTS 과발현만으로 hedonic feeding·체중증가·활동성·불안이 동시에 정상화**된다. 사용자 lab의 [[concept-need-motivation-pleasure-utility|NMPU]]에서 **NAc = Pleasure 노드**라는 가정에 대해, 드디어 **분자 정체(Nts)·투사(→VTA)·인과(조건부 KO·수용체 길항·과발현)가 모두 붙은 세포타입**을 제공한다 — [[proposal-lh-nac-nmpu-neuron-discovery]]의 NAc 쪽 후보로 즉시 채택 가능. 또한 수용체(NTSR1)는 **비만에서도 온전**하고 리간드만 줄어드는 **presynaptic 병변**이므로, NTS 재공급·NTSR1 표적이 곧 전임상 치료 논리가 된다.

# Changes in neurotensin signalling drive hedonic devaluation in obesity

## 한 줄 요약
만성 고지방식(HFD) 마우스는 홈케이지에서 고지방 사료를 더 먹으면서도(칼로리↑·체중↑) **노력이 필요 없는 급성 섭취 검사에서는 고칼로리 음식을 덜 먹는다** — 이 역설적 [[concept-hedonic-devaluation|쾌락 가치 저하]]의 회로 기전이 **NAcLat→VTA 경로의 neurotensin(NTS) 신호 감소**임을 밝히고, NTS를 되돌리면 행동·체중이 함께 정상화됨을 보였다.

## 핵심 내용

### Background — 풀려던 역설
- 고칼로리 음식은 쾌락을 유발하지만, **장기 섭취는 오히려 그 hedonic value를 떨어뜨린다**(선행 보고 다수). 이 역설의 신경기전은 미상이었다.
- 비만·만성 HFD에서 **도파민 활성 저하**는 마우스·인간 모두에서 반복 보고돼 왔다([[concept-dopamine-reward-system]]). 그러나 연구는 대부분 VTA 도파민 뉴런 자체에 집중했고, **NAc→VTA 억제성 투사**가 어떻게 변하는지는 거의 다루지 않았다.
- 저자들의 선행 연구는 **NAcLat→VTA 광자극이 place preference·두개내 자가자극 등 보상 행동을 유발**함을 보였으나(도파민 뉴런 disinhibition 추정), 이 활성이 실제 **hedonic feeding**과 연결되는지는 미지였다.

### 해부학적 정의 — NAc lateral shell (NAcLat)
- 저자들은 NAc를 전통적 shell/core 이분법이 아니라, **core의 외측에 놓인 별개 아구역 "NAc lateral shell(NAcLat)"** 로 정의해 다룬다(bregma 1.34→0.74 좌표계). "lateral shell"이라는 명칭이 NAc shell의 일부로 오해될 수 있음을 스스로 인정하되, 해부 좌표에 근거해 유지.
- 대조적으로 **NAc medial shell** 자극은 VTA 도파민 뉴런을 억제하고 보상/혐오 비특이적 행동 억제를 유발해 섭식 해석이 어렵다고 명시. ([[concept-nucleus-accumbens]] 참조)

### Method
- **식이**: 표준 사료(REG, 4% fat) vs HFD(60% fat + 표준 사료 동시 자유섭취), 최소 4주.
- **행동**: 급성 섭취 검사(open field에 food cup 1 + empty cup 1, 15분 × 5 trial, jelly·chocolate·peanut butter·butter·HF chow·chow·water 중 하루 한 종). **piezo 센서**로 섭취 이벤트 타임스탬프, **DeepLabCut** 기반 행동 motif 분해(feeding·rearing·turning·속도 4단계).
- **회로**: retrograde RG-EIAV-Cre(VTA) + Cre-dependent ChR2(NAcLat) + **drivable optoelectrode**로 자유행동 중 opto-tagged 단일 unit 기록. 광유전 자극(473 nm, 20 Hz, 5 ms)·억제(ArchT), intra-VTA 약물 주입.
- **분자**: bead 표지된 NAcLat→VTA 세포의 **patch-seq**(전기생리 + 단일세포 RNA-seq), in situ hybridization.
- **NTS 측정**: 신규 GPCR 형광센서 **ntsLight1.1**(NTSR1 구조 기반, ex vivo) 및 감도 개선판 **ntsLight2.0**(in vivo fibre photometry).

### Result 1 — HFD가 NAcLat→VTA 활성과 hedonic feeding을 "탈동조(uncoupling)"
- HFD 마우스는 홈케이지에서 HF chow를 압도적으로 선호, 주당 칼로리 섭취·체중 유의하게 증가.
- 그럼에도 급성 검사에서 **jelly 섭취가 극적으로 감소**(REG ~0.45 g vs HFD 거의 0).
- REG 마우스: opto-tagged NAcLat→VTA unit의 다수가 **jelly 섭취 중 발화 증가(IR type)**. HFD 마우스: **유의한 IR unit이 하나도 없고** 오히려 발화율 감소. piezo 기반 분석도 동일.
- 즉 **"NAcLat→VTA 활성↑ = hedonic feeding"이라는 REG의 관계가 HFD에서 끊어진다.**

### Result 2 — 경로 자극은 REG에서만 hedonic feeding을 유발, 식이 복귀로 회복
- REG: NAcLat→VTA 20 Hz 자극이 **jelly·chocolate·peanut butter·butter·HF chow 섭취를 모두 증가**. **일반 chow와 물은 불변** → 고칼로리 특이적.
- palatability만 낮춘 대조(quinine 첨가 butter)는 반응하지 않음 → 단순 맛 선호 조작이 아님. 24 h 절식 후에도 chow 섭취는 불변.
- 부위 특이성: VTA 말단 자극은 효과, NAcLat 세포체 자극은 무효 → **투사 특이성이 필요**. ArchT 억제는 hedonic feeding 감소(필요조건).
- **HFD: 같은 자극이 어떤 음식에서도 섭취를 늘리지 못함**(24 h 절식 후에도). 그러나 **real-time place preference는 여전히 강하게 유발** → 자극의 보상성 자체는 보존되고 **섭식으로의 번역만 소실**.
- HFD → REG 복귀 시 **2–3주에 걸쳐 hedonic feeding이 점진적으로 회복** → 가역적.

### Result 3 — 원인은 *Nts* 발현·NTS 방출 감소 (presynaptic)
- patch-seq: NAcLat→VTA 세포의 **내재 흥분성·막특성은 REG/HFD 차이 없음**(발화빈도·capacitance·막저항·정지막전위 모두 n.s.).
- 8,000개 이상 유전자 중 **280개 하향·183개 상향**. 시냅스·섭식 관련 유전자로 좁히자 ***Nts*(neurotensin)가 압도적** — NAcLat→VTA 세포의 **95%(REG)·90%(HFD)** 에서 검출, 587개 유전자 중 상위 78 percentile 발현. HFD에서 **log₂FC = −1.52**, ISH로 독립 확인, **3주 정상식이 복귀 시 회복**.
- CTB 역행표지 + NTS-Cre × Ai14 교차: VTA로 투사하는 NAcLat 세포의 **약 75%가 *Nts* 발현**.
- **방출도 감소**: ntsLight1.1 슬라이스 실험에서 HFD의 NTS 방출 유의 감소; ntsLight2.0 in vivo photometry에서도 자극 후 **3–5 s 구간 신호가 HFD에서 감소**(빠른 음성 peak는 레이저 artefact, NTSR1 길항제 SR48692로 차단되는 것은 느린 양성 성분).

### Result 4 — NTS는 hedonic feeding에 **필요**하고, 도파민 뉴런 흥분을 매개
- **NTS-Cre 특이적 자극**만으로도 hedonic feeding 유발(일반 운동활성 변화 없이).
- **조건부 *Nts* KO**(*Nts^flox* + AAV-hSyn-Cre in NAcLat): 광자극이 **더 이상 jelly 섭취를 늘리지 못함**.
- **intra-VTA NTS 수용체 길항제 SR142948A**: 광자극 유발 hedonic feeding 완전 차단.
- 전기생리: NAcLat 말단 자극이 **NAcLat-투사 VTA 도파민 뉴런의 발화를 증가**시키며, 이는 SR142948A로 차단 → 단순 GABA disinhibition만이 아니라 **NTS→NTSR1 직접 흥분**이 관여. **HFD 마우스에서는 이 흥분 자체가 이미 소실**.

### Result 5 — 수용체는 멀쩡하다 (postsynaptic 정상)
- NTS 관류는 **REG·HFD 모두에서** VTA 도파민 뉴런 발화를 증가시킴.
- VTA GABA 뉴런은 NTS에 무반응(NTSR1 결여).
- 도파민 뉴런의 ***Ntsr1* mRNA·내재 흥분성 모두 HFD에서 변화 없음**.
- → 병변은 **전적으로 presynaptic**(리간드 발현·방출 감소).

### Result 6 — NTS 과발현이 비만 표현형을 광범위하게 되돌린다
Cre-dependent **NTS 과발현(AAV-NTS-OE)** 을 NAcLat→VTA 투사 뉴런에 국한 발현(RG-EIAV-Cre 조합):
- NTS 방출 증가(ntsLight1.1로 확인), HFD 마우스에서 **hedonic feeding 회복**(자발 섭취·광자극 반응 모두).
- **HFD 중 체중 증가가 유의하게 완만**, 정상식 복귀 시 차이 소멸. 독립된 2개 코호트에서 재현.
- **홈케이지 HF chow 섭취 감소**(4주 시점부터), **일반 chow 섭취는 전 시점 불변**.
- **운동성 증가**(running·fast walking motif 시간↑, 속도↑), **open field 중앙 체류 증가**(불안 유사 행동 감소). **체온은 불변.**

### Claim / Discussion
- 만성 HFD는 **NAcLat→VTA의 NTS 신호를 교란**해 hedonic feeding을 붕괴시키고, 이것이 도파민 활성 저하·체중 증가와 함께 **비만 진행에 기여**한다.
- 대안 설명(음식 획득 지연에 따른 일반적 동기 저하)은 노력이 불필요한 패러다임에서도 저하가 나타나고 sucrose preference도 감소한다는 점으로 반박된다.
- **NTS의 출처에 따라 방향이 반대**임을 명시: LH→VTA NTS는 섭식 촉진, 반면 lateral septum·시상하부 일부·고립로핵(NTS)의 NTS 뉴런은 섭식 억제. VTA 안에서 여러 출처의 NTS가 어떻게 통합되는지는 미해결.
- 제안 기전 4가지: 출처별 VTA 아집단 표적 차이 / NTSR2·astrocyte 경로 / NTSR1의 biased signalling(다양한 G protein·세포내 effector) / **과잉 NTS의 NTSR1 desensitization**.
- 치료 함의: NAcLat→VTA의 NTS 신호를 표적하면 **필수 NTS 기능을 깨지 않으면서** 섭취 조절·체중 유지가 가능할 수 있다.

## 위키 관점의 해석 — 무엇이 새로운가

| 축 | 기존 위키의 위치 | 이 논문이 더하는 것 |
|---|---|---|
| 비만의 도파민 저하 | [[concept-dopamine-reward-system]] · [[thanarajah-2019-food-intake-recruits-orosensory]] — "blunted DA" 현상 기술 | **상류 원인**을 특정: NAc→VTA 리간드(NTS) 고갈 |
| liking / wanting | [[concept-liking-wanting]] · [[morales-2020-liking-and-wanting-in-eating]] — 비만은 wanting↑([[concept-incentive-sensitization]]) 프레임 | 반대 방향의 **hedonic devaluation**을 회로로 인과 증명 → 두 프레임의 긴장 |
| NAc 세포타입 | [[concept-nucleus-accumbens]] — D1/D2 MSN·shell/core | **NAcLat^Nts→VTA**라는 투사·펩타이드 정의 세포타입 |
| Neurotensin | [[concept-neurotensin]] — LH·VTA·CeA 분포, LH^Nts 중심 | **NAc 기원 NTS**를 hedonic 축의 인과 인자로 추가 |
| 비만 치료 표적 | [[stuber-2025-the-neurobiology-of-overeating]] — GLP-1 이후 전략 필요 | **presynaptic 리간드 복구**(수용체는 온전)라는 새 표적 논리 |

## 한계
- NTS 과발현이 체중 증가를 늦춘 **주된 경로가 무엇인지 불명확** — hedonic feeding 회복·HF chow 섭취 감소·운동성 증가·불안 감소가 모두 동시에 일어났고, 저자 스스로 "primary driver uncertain"이라 기술.
- NTS 발현 NAcLat 뉴런이 **VTA 외 다른 표적으로도 투사**할 가능성을 배제하지 못함.
- 전부 마우스. 인간 NAc에서의 NTS 신호 측정 자료는 이 위키에 없음.
- patch-seq 차등발현 통계는 **다중비교 보정을 하지 않았다고 논문에 명시**.

## 관련 페이지
- [[concept-hedonic-devaluation]] — 이 논문이 회로 기전을 제공하는 현상 hub.
- [[concept-neurotensin]] — NTS 개념 hub. 이 논문으로 **NAc 기원 NTS** 축이 추가됨.
- [[concept-nucleus-accumbens]] — NAcLat(lateral shell) 아구역 정의와 medial shell과의 기능 대비.
- [[concept-dopamine-reward-system]] — 비만의 도파민 저하에 대한 상류 설명.
- [[concept-need-motivation-pleasure-utility]] · [[proposal-lh-nac-nmpu-neuron-discovery]] — NAc = Pleasure 노드의 분자·투사 정의 후보 세포타입.
- [[concept-liking-wanting]] · [[concept-incentive-sensitization]] — hedonic devaluation vs wanting 증폭의 방향 충돌.
- [[sumarli-2026-multidimensional-control-of-ingestive-behavior]] · [[petzold-2023-complementary-lateral-hypothalamic-populations]] — **LH^Nts**(섭취·음수 촉진)와 출처별 반대 방향 대비.
- [[stuber-2025-the-neurobiology-of-overeating]] — 과식 신경생물학 리뷰. 이 논문을 최신 두 연구 중 하나로 인용.
- [[liu-2026-granular-motivational-interaction-and]] · [[onimus-2026-dopamine-ensembles-regulating-appetite]] — 이 논문을 NtsR1+ VTA 아형 맥락에서 인용하는 리뷰.
- [[godschall-2026-a-brain-reward-circuit-inhibited]] — 차세대 체중감량 약물이 억제하는 보상 회로(NTS→CeA→VTA→NAc DA↓)와의 대비.
- [[hoang-2026-methamphetamine-potentiates-the-use-of]] · [[grove-2022-dopamine-subsystems-track-internal]] — LH↔VTA 양방향 축.
- [[person-lammel-stephan]] — 교신저자, mesolimbic 회로 이질성 연구.
- [[overview-sikrakhak-ch24-food-craving-addiction]] — 본 논문을 §24.4.3의 핵심 근거로 사용한 교재 챕터(식락학 Ch 24).
- [[concept-lateral-septum]] — 본 논문이 "LH→VTA NTS와 반대 방향(섭식 억제)"으로 지목한 **외측중격**의 분자·기능 지도. [[bhatti-mazo-2026-feature-specific-threat-coding-in]]이 LS^Crhr2를 10 아형으로 분해(NTS 아형은 미분류).
