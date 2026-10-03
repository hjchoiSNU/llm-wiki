---
title: Appetitive vs consummatory phases of eating
type: concept
created: 2026-04-30
updated: 2026-10-03
aliases: [appetitive phase, consummatory phase, eating phases]
---

> [!takeaway] 연구 방향 관점의 핵심
> 식이 행동의 **두 phase 분리**가 회로 연구의 표준 개념: **Appetitive** (탐색·접근, 학습된·유연한) vs **Consummatory** (씹기·삼키기, 본능적·정형적). 별도의 신경 집단이 두 phase를 매개 — calcium imaging으로 실시간 분리 가능. [[de-lartigue-2026-critical-role-gut-brain-signalling|NRGH 2026]]이 phase에 **non-prandial activity** 추가 (식간 satiety 단계). 광유전·단일세포 imaging 실험 디자인의 표준 framework.

# Appetitive vs consummatory phases of eating

## 역사적 배경

20세기 초 ethology vs behaviorism 갈등에서 출발 (Craig 1918, Sherrington 1906):
- **Behaviorism** (Watson): 행동은 학습으로 형성되는 유연한 반응
- **Ethology** (Lorenz, Tinbergen): species-specific stereotypical behavior가 특정 자극에 의해 발현

**Craig 1918**의 통합: 행동 sequence를 두 phase로 분리.

## 정의

### Appetitive phase
- 목표 도달 전 **탐색·접근** 행동.
- 학습된, 유연한 (adaptive, variable, flexible).
- 식이: foraging, predatory hunting, food approach.
- 시간척도: 분~시간.

### Consummatory phase
- 목표 접촉 후 **본능적 소비** 행동.
- 정형적, species-specific (innate, stereotypical).
- 식이: biting, chewing, swallowing.
- 시간척도: 분.

### Non-prandial activity phase ([[de-lartigue-2026-critical-role-gut-brain-signalling|NRGH 2026 추가]])
- 식사 종료 후 다음 식사 전.
- Satiety 신호가 hunger 억제, 점차 약화.
- 다른 essential behaviors (rest, social, sleep).

## 회로 매핑 (Cheon 2025 EMM, Figure 3)

[[concept-lateral-hypothalamus|LH]] cell type별 phase 활성:

| Cell type | Appetitive | Consummatory |
|---|---|---|
| LH^Vgat (subset A) | ↑ peak at food contact | baseline |
| LH^Vgat (subset B) | baseline | sustained ↑ |
| LH^Lepr (subset A) | ↑ during seeking | baseline |
| LH^Lepr (subset B) | baseline | sustained ↑ |
| LH^Vglut2 | sharp peak (brake) | strong response to aversive |
| LH^Camk2a | ↑ during hunting | rapid baseline |
| LH^Orx | sustained ↑ | 즉시 ↓ 식사 시작 시 |
| LH^Mch | weak ↑ | sustained ↑ |
| ARC AgRP | sensory cue로 즉시 ↓ (feedforward) | 지속 ↓ |
| DMH GLP-1R | ↑ pre-ingestive (cognitive satiation) | continued ↑ |

> ⚠️ **LH^Vgat 행 병기** ([[lee-2026-distinct-lateral-hypothalamic-gabaergic|Lee 2026 Cell Rep]]): 같은 뉴런을 추적하면, 음식 cue(appetitive)에 반응하는 LH^Vgat 세포가 **혐오 열자극에도 흥분**한다(heat vs caged PB r=0.59). 즉 subset A는 음식 특이 appetitive 세포라기보다 **valence 무관 motivational salience** 코더일 수 있다. Consummatory subset은 먹이·물·고형식에 일반화되고 금식·농도·Ex-4에 따라 value-scaled된다. 단 head-fixed 실험이다.

## 실험 paradigm

### 분리 도구
- **광유전 phase-specific stimulation** (Lee YH 2023 Nat Commun, 본 lab):
  - 음식 visible but unreachable → appetitive only
  - 음식 contact → consummatory
  - 별도 광 자극으로 phase 효과 분리 검증.
- **Fiber photometry**: 두 phase 신호 추적 (bulk).
- **One-photon miniscope** + **two-photon microscope**: single-cell resolution → 별도 ensemble 식별.

### 한계
- Bout duration 정의 차이로 결론 충돌 가능.
- 자연 환경에서는 두 phase가 빠르게 교대.
- Altafi 2024: sequential firing across phases 시사 — 단순 이분법 한계.

## Motivational components와의 매핑

[[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU framework]]에서:
- **Appetitive** = Motivation 단계 (행동 driver, target-dependent or independent).
- **Consummatory** = Pleasure (immediate outcome) 형성 + 행동 sustaining.
- **Non-prandial** = Utility (delayed outcome) 학습 + Need 점진 재상승.

## 임상 함의

- 약물·DTx·electroceutical 표적 선택에 phase 고려:
  - Pre-ingestive cognitive intervention (cue exposure, DMH GLP-1R) → appetitive 단계 감쇠.
  - Satiation 약물 (CCK·GLP-1) → consummatory 종료.
  - Postprandial satiety 연장 (PYY·long-acting GLP-1RA) → non-prandial 단계.

## 관련 페이지
- [[lee-2019-food-craving-seeking-and]] — 이 phase 분해를 식이 행동(craving→seeking→consumption)에 적용·측정법 종합한 본 lab 리뷰 원전.
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — phase × cell type 매핑.
- [[de-lartigue-2026-critical-role-gut-brain-signalling]] — 3 phases + non-prandial 정의.
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] — NMPU 매핑.
- [[concept-lateral-hypothalamus]] — phase별 LH 회로.
- [[concept-arcuate-nucleus]] — feedforward AgRP 억제 (appetitive 시작).
- [[concept-vagal-afferent-neurons]] — phase별 VAN 역할.
- [[garfield-2016-dynamic-gabaergic-afferent-modulation]] — preconsummatory(식전 감각) 단계에서 AgRP를 끄는 vDMH^LepR→AgRP 억제 회로 + 음식 가치 부호화 (Nat Neurosci 2016).
- [[aitken-2024-negative-feedback-control-of-hypothalamic]] — consummatory 단계의 bout-by-bout AgRP 억제(맛→DMH^LepR); bout 수=incentive value/satiation 조절 (Neuron 2024, Knight lab).
- [[liu-2026-granular-motivational-interaction-and]] — appetitive/consummatory 2분법을 5 phase(preparation·initiation·maintenance·interruption·termination) granular state로 정밀 확장 (Neuron 2026).
- [[concept-liking-wanting]] — appetitive=‘갈망’(도파민)·consummatory=‘좋아함’(오피오이드)의 신경화학 대응(쾌락 주기).
- [[kringelbach-2015-the-pleasure-of-food]] — pleasure cycle(appetitive wanting→consummatory liking→satiety) 원전.
- [[overview-sikrakhak-ch20-opioid-dopamine-liking-wanting]] — 두 phase의 신경화학을 정리한 사용자 Ch 20.
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
- [[woods-1991-the-eating-paradox-how]] — cephalic 반응 = preingestive 대사 조율.
- [[concept-cephalic-phase-response]] — cephalic 반응 hub.
- [[schiff-2018-an-insula-central-amygdala-circuit]] — 예측적(단서) vs 소비(전달 후) 단계 구분.
- [[campos-2018-encoding-of-danger-by-parabrachial]] — 섭취 직전 CGRP^PBN 억제(gating).
- [[concept-computational-ethology]] — 고전 ethology의 이분법을 계산 도구가 얼마나 세분할 수 있는지; [[liu-2025-castle-a-training-free-foundation-model|CASTLE]]이 consummatory 내부에서 "food approaching mouth"·"food releasing at mouth"를 자동 분리한 사례.
- [[zhang-2026-inherited-input-and-local-transformations]] — pVLS dSPN ramping이 **appetitive→consummatory 전이 임계**의 후보 신호(drift-to-threshold; ramp 기울기 → licking 개시 시점) (bioRxiv 2026).
- [[marcus-2026-endocannabinoids-facilitate-reward-engagement-through]] — appetitive(seeking) phase가 **유지되는** 시냅스 기전: NAc 2-AG → aPVT 말단 CB1R 역행성 억제 (Nature 2026).
- [[lee-2026-distinct-lateral-hypothalamic-gabaergic]] — LH^Vgat phase 분업의 단일세포 재해석: cue 반응(appetitive) 세포는 **혐오 열자극에도 반응하는 valence 무관 salience ensemble**이고, consummatory 세포는 먹이·물·고형식에 일반화되며 value에 따라 조절된다 (Cell Rep 2026). ⚠️ 위 표의 "LH^Vgat subset A(appetitive)"가 음식 특이가 아닐 수 있음 — 단 head-fixed 실험이라 자유행동 seeking은 미측정.
- [[gordon-2026-lateral-hypothalamic-control-of]] — multispout brief-access 과제로 consummatory 운동(licking)과 용액 가치를 분리; 섭취 DA가 후측→전측 시공간 gradient로 퍼지고, 선조체 DA는 **섭취 개시(bout 수)** 를 강화(지속은 비강화) (Neuron 2026, Stuber lab).
- [[jennings-2015-visualizing-hypothalamic-network-dynamics]] — ★ 위 표 "LH^Vgat subset A/B(appetitive/consummatory 분업)"의 **1차 출처**. microendoscope 단일세포 칼슘영상(743 LH^Vgat 뉴런)으로 nose-poke(appetitive) 반응 세포와 lick(consummatory) 반응 세포가 **거의 겹치지 않음**을 직접 관찰 (Cell 2015, Stuber lab).
- [[siemian-2021-lateral-hypothalamic-lepr-neurons]] — **appetitive 전용 세포타입의 교과서적 사례**: LH^LepR는 ablation·opto·chemo 어느 조작에도 섭취·체중·lick을 바꾸지 않고(ChR2 섭식 p=0.21, NpHR p=0.32), Pavlovian cue 변별 학습·RTPP·sucrose CPP만 바꾼다. 단일세포에서 **LH^LepR만 CS+/CS− 변별**(centroid 2.00 vs LH^Vgat 1.26) (Cell Rep 2021, Aponte lab). ⚠️ 위 표의 "LH^Lepr subset B: consummatory sustained ↑"는 상관(Lee 2023 영상) 근거이고, 이 논문의 **인과 조작은 consummatory 구동을 지지하지 않는다** — '활동이 있다'와 '구동한다'는 층위가 달라 병기.
- [[liu-2023-an-iterative-neural-processing]] — 이분법을 **preparation(ARC^AgRP)–initiation(LH^GABA)–maintenance(DR^GABA)** 3단으로 세분하고, 섭식이 매 조각(C-W-n(E-W)-C)마다 이 순서를 반복함을 보였다(Neuron 2023, Wang lab). ⚠️ 위 표의 "ARC AgRP 지속 ↓"와 병기: 넓은 arena의 금식 쥐에서 AgRP는 접촉 사이 탐색마다 재상승한다(자유급식·PB 세션에선 없음). LH^GABA 반응은 긴 접촉이 끝나기 전에 소실된다(bulk, GAD2) — 표의 "LH^Vgat subset B sustained"와는 해상도 차이.
- [[sharpe-2017-lateral-hypothalamic-gabaergic-neurons]] — **phase 한정 개입 설계의 모범**: rat LH^GABA를 cue(appetitive) 구간에만 광억제하고 보상 전달·섭취 구간은 레이저 없이 두어, cue 학습 결손과 정상 섭취를 같은 동물에서 동시에 얻었다(Curr Biol 2017). 여기에 **레이저 없는 소거 시험**을 더해 "일시적 수행 저하"와 "연합 획득 실패"를 분리한다.
- [[rossi-2019-obesity-remodels-activity-and]] — 회로 매핑 표의 **LH^Vglut2(brake)** 행에 상태·식이 변조를 보강하는 원저(Science 2019, Stuber lab): consummatory 단계 sucrose 반응이 **포만(prefed) > 금식**이고 lick rate와 무관, 광자극은 licking을 주파수 의존적으로 일시 억제·혐오. 만성 HFD 12주에 같은 뉴런의 반응이 둔화 → "brake"는 고정 속성이 아니라 **상태·식이 의존적**.
- [[rossi-2021-transcriptional-and-functional-divergence]] — 표의 **LH^Vglut2** 행을 **투사 표적별로 쪼개야 함**을 보인 원저(Neuron 2021, Stuber lab). LHA^Vglut2→LHb(전측·Pax6⁺)와 →VTA(후측·Pdyn/Hcrt)는 둘 다 sucrose·quinine 섭취에 **흥분**하지만, 혐오 증폭은 VTA 투사 쪽이 크고(interaction p=0.047) **포만 상태에서 음식 보상에 반응하는 세포 비율은 LHb 투사 쪽이 높다**(X²=12.58, p=1.9e-3). 금식은 두 경로의 반응을 모두 키우면서 **경로 간 차이 자체를 지운다**(ex vivo SVM도 급식에서만 투사 구분 성공). consummatory phase의 "brake" 서술에 **투사·상태 의존성**을 병기.
- [[jennings-2013-the-inhibitory-circuit-architecture]] — 위 표 **LH^Vglut2 행("brake"·aversive 반응)** 의 인과 원전(Science 341:1517, 2013, Stuber lab): Vglut2^LH 광활성 → 굶긴 마우스 섭취·food zone 체류↓(F1,36=13.31 / 13.12, P<0.001)·장소 혐오, 광억제 → 포만 중 섭식 유발·기호식 선호(table S1). 상류는 **Vgat^BNST → LH^Vglut2 선택적 억제**이며(rabies F1,20=38.50, P<0.001), BNST 입력이 LH^Vgat에는 거의 닿지 않는다 → appetitive/consummatory 분업(Vgat 쪽)과 **브레이크 해제(Vglut2 쪽)** 는 상류가 다른 두 경로다.
- [[subramanian-2023-hypothalamic-melanin-concentrating-hormone-neurons]] — ⚠️ 위 표 **LH^Mch 행("appetitive 약 ↑")의 반례**(Nat Commun 2023, Kanoski lab, rat). MCH Ca²⁺는 학습된 소리 cue(CS+>CS−, P=0.0042)와 음식 맥락 진입(P=0.0001)에 또렷이 오르고 cue 반응이 핥기 잠복을 예측하며(R²=0.5039), 화학유전 활성은 PIT·CPP를 키운다 → **MCH는 consummatory 전담이 아니라 두 phase의 integrator**. 섭취 중 반응은 **식사 초기에 최대·종료로 감쇠**(R²=0.2005)하며 총 칼로리를 예측(R²=0.9299) = **appetition**(식사 내 양성 되먹임) 신호로, 위 표가 비워 둔 consummatory 단계의 **양성항** 후보다. ⚠️ 기능 상실 실험 없음·수컷 rat만.
- [[de-vrind-2019-effects-of-gaba-and]] — 두 phase가 **반대로 갈린 화학유전 사례**(Obesity 2019): LH^LepR 활성은 빈 우리 운동↑(appetitive 쪽)인데 근접 먹이 섭취는 ↓(consummatory 쪽)였고, LH^Vgat 활성은 실제 섭취 없이 **비식용 물체 갉기**(consummatory 구강운동 프로그램)만 늘렸다 → "개시·추구"와 "섭취 실행"을 같은 지표(먹이통 무게)로 읽으면 안 된다는 정량 교훈. 갉기/spillage 분리(chow 가루 칭량·나무 블록 대조)를 consummatory 지표의 표준 통제로 제안.
