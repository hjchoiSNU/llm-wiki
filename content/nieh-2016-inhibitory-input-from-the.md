---
title: "Inhibitory input from the lateral hypothalamus to the ventral tegmental area disinhibits dopamine neurons and promotes behavioral activation (Nieh 2016, Neuron)"
type: paper
created: 2026-10-03
updated: 2026-10-03
source: "raw/2016 Neuron Inhibitory Input from the Lateral Hypothalamus to the Ventral Tegmental Area Disinhibits Dopamine Neurons and Promotes Behavioral Activation.pdf"
authors: [Edward H. Nieh, Caitlin M. Vander Weele, Gillian A. Matthews, Kara N. Presbrey, Romy Wichmann, Christopher A. Leppla, Ehsan M. Izadmehr, Kay M. Tye]
year: 2016
journal: "Neuron 90(6):1286–1298 (2016-06-15); doi:10.1016/j.neuron.2016.04.035"
---

> [!takeaway] 연구 방향 관점의 핵심
> **위키 전체가 "LH GABAergic → VTA GABAergic 억제 → DA disinhibition → NAc DA↑ → 섭식↑"으로 수십 군데에서 인용하는 통념 모델(Nieh 2016)의 1차 원전.** MIT Tye lab은 [[concept-lateral-hypothalamus|LH]]→[[concept-dopamine-reward-system|VTA]] 투사를 **GABA성 vs glutamate성으로 분리**해, 둘이 정반대의 행동·도파민 효과를 낸다는 것을 광유전·FSCV·광계측·patch-clamp로 입증했다. ① GABA성 LH→VTA 자극은 **접근·장소선호·자기자극(ICSS)**을 지지하고, ② glutamate성 자극은 **회피**를 지지한다. ③ 결정적 역설 — **억제성 입력이 어떻게 DA 방출을 늘리는가?** — 는 "LH GABA가 **VTA GABA 개재뉴런을 더 강하게 억제** → VTA DA 뉴런 **disinhibition** → NAc DA↑"로 풀렸다(disinhibition). ④ 그 효과는 feeding에 국한되지 않고 **사회적 상호작용·신기 물체 조사 등 여러 동기 행동을 가로질러** 나타나므로, 저자들은 이 회로를 특정 행동 스위치가 아니라 **motivational salience(동기적 현저성)를 끌어올리는 일반 행동 활성화 장치**로 해석한다.
> 사용자 연구에 닿는 지점: (1) [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]]에서 LH를 **Motivation 통합 hub**로 두는 매핑의 핵심 실험 근거 — "여러 행동을 가로지르는 behavioral activation"은 vigor·우선순위라는 Motivation 축 그 자체다([[kim-2024-normative-framework-dissociates-need|LH^LepR=Motivation]]과 연결). (2) 저자들의 결론 "GABA성 LH-VTA 과활성 = **배고픔이 아닌 보상 동기로 유도되는 compulsive eating**의 후보"는 [[concept-compulsion|강박]]·[[concept-loss-of-control-eating|LOC eating]]의 회로 가설. (3) 사용자 lab의 [[lee-2023-lateral-hypothalamic-leptin-receptor|LH^LepR]]·[[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025 EMM]]·[[ha-2024-hypothalamic-neuronal-activation-non-human|Ha 2024 NHP]]가 다루는 "LH GABA가 reward 회로로 동기를 내보낸다"는 전제의 원형. (4) disinhibition 모델은 [[concept-liking-wanting|wanting]]·[[salamone-2012-mysterious-motivational-functions-mesolimbic|behavioral activation]] 프레임과 직접 맞물린다.

# Inhibitory input from the lateral hypothalamus to the ventral tegmental area disinhibits dopamine neurons and promotes behavioral activation (Nieh et al. 2016)

- **저널**: Neuron 90(6):1286–1298 (2016-06-15; 접수 2015-10-09, 수정 2016-03-04, 채택 2016-04-20). DOI: 10.1016/j.neuron.2016.04.035. video abstract 포함.
- **소속**: MIT Picower Institute for Learning and Memory, Dept. of Brain and Cognitive Sciences. 교신 **Kay M. Tye** (kaytye@mit.edu). E.H. Nieh·C.M. Vander Weele 공동 1저자. 당시 선행작 [[concept-lateral-hypothalamus|LH]] compulsive sucrose seeking(Nieh et al. 2015 Cell)의 후속.
- **모델·방법**: VGAT::Cre(GABA성)·VGLUT2::Cre(glutamate성) 수컷 마우스. LH에 **AAV5-DIO-ChR2-eYFP / AAV5-DIO-NpHR-eYFP / AAV5-DIO-eYFP**(LH 좌표 AP −0.4~−0.8, ML 1.0, DV −4.9~−5.35), 광섬유를 **VTA** 위에 삽입해 **말단(terminal) 자극**. 하류 측정은 NAc **in vivo fast-scan cyclic voltammetry(FSCV, urethane 마취 하)**, VTA GABA 뉴런 활동은 **ChrimsonR(LH)+GCaMP6m(VTA) 광계측(fiber photometry)**, 시냅스 강도는 VTA 급성 절편 **whole-cell patch-clamp**(TH⁺=DA / TH⁻=putative GABA). 모든 조작은 투사 특이적 광유전이다.

## 한 줄 요약
LH→VTA 투사의 **GABA성 성분은 접근·장소선호·자기자극·사회적 상호작용·물체 조사를 촉진**하고 **glutamate성 성분은 회피·억제**를 촉진한다. GABA성 자극이 NAc DA를 늘리는 역설은 **LH GABA가 VTA GABA 개재뉴런을 (DA 뉴런보다) 더 강하게 억제 → VTA DA disinhibition**으로 설명되며, 이 회로는 특정 행동이 아니라 **동기적 현저성·행동 활성화를 전반적으로 끌어올린다**.

## 핵심 내용

### Fig 1 — GABA성 자극 = 접근/자기자극, glutamate성 자극 = 회피
- VGAT::Cre에서 LH^GABA→VTA 말단을 473 nm(10 Hz, 20 mW, 5-ms)로 자극. **RTPP/A**에서 ChR2 마우스가 자극 짝 챔버를 선호(차이점수 ↑; **n=8 ChR2, n=10 eYFP; unpaired t, ****p<0.0001**).
- **ICSS**: active nose-poke 반응이 inactive·eYFP 대비 유의(**n=6 ChR2, n=8 eYFP; two-way ANOVA group×poke F₁,₁₂=19.40, p=0.0009; post-hoc ***p<0.001**) → 마우스가 LH^GABA-VTA 자극을 **일하면서 얻으려 한다**(positive reinforcement).
- 대조적으로 VGLUT2::Cre의 LH^glut→VTA 자극은 RTPP/A에서 **회피**(**n=7 ChR2, n=9 eYFP; t, *p=0.0175**), ICSS 선호 없음(F₁,₁₁=0.05, p=0.8307).

### Fig 2 — GABA성은 사회·물체 조사 촉진, glutamate성은 억제 (행동 일반화)
- 사회적 상호작용(resident-intruder, 20 Hz 자극): LH^GABA ChR2가 **juvenile**(n=10 ChR2/11 eYFP; F₂,₃₈=23.62, p<0.0001)·**female**(n=11/10; F₂,₃₈=10.05, p=0.0003) intruder와의 상호작용 시간을 ON epoch에서 증가. LH^glut는 female에서 상호작용 **감소**(n=7/6; F₂,₂₂=7.45, p=0.0034).
- 4-chamber 신기 물체 과제: LH^GABA ChR2는 가장 가까운(현저한) 물체 **조사 시간↑**(n=7/8, **p=0.0070**)·**zone crossing↓**(n=7/8, p=0.0080) → 한 현저 표적에 머문다. LH^glut ChR2는 정반대로 조사↓(n=8/7, p=0.0250)·crossing↑(p=0.0372).
- → 저자 해석: LH^GABA-VTA는 feeding 전용이 아니라 **환경에서 가장 현저한 표적**(먹이·사회 자극·물체)으로 행동을 몰아가는 **일반 동기 상태**를 만든다.

### Fig 3 — GABA성 투사 억제는 동기 상태의 행동을 약화
- VGAT·VGLUT2::Cre에 **NpHR**(589/593 nm, constant, 5 mW) 양측 발현, VTA 위 광섬유. RTPP/A·ICSS·사회 상호작용에서는 억제 단독 효과 미검출(floor).
- 그러나 **동기 상태(배고픔·현저 자극)**가 있을 때는 나타난다: 식이제한 마우스의 **feeding**에서 LH^GABA-VTA:NpHR가 섭식 시간을 유의하게 감소(**n=8 NpHR/9 eYFP; F₂,₃₀=4.46, p=0.0202; 차이점수 *p=0.0210**). LH^glut:NpHR는 무효(n=10/7, p=0.5963).
- 4-chamber에서 LH^GABA:NpHR는 물체 조사↓(n=7/8, p=0.0305)·zone crossing↑(n=8/8, ****p<0.0001) → 활성화와 **반대 방향**. glut 억제는 무효.

### Fig 4 — GABA성 자극은 NAc DA↑, glutamate성 자극은 DA↓ (FSCV)
- **c-Fos/TH**: LH^GABA 자극이 LH^glut 자극보다 **TH⁺(DA) 뉴런에서 c-Fos 공발현 비율↑**(TH⁺ 중 c-Fos⁺ = VGAT 263/401 vs VGLUT2 370/723; **chi-square=21.77, ****p<0.0001**; 자극 473 nm 20 Hz 10분, 80분 후 희생, blinded 2인이 VTA 전역 DAPI⁺ 400–500개 계수) → GABA성 자극이 VTA DA 뉴런 활동을 높인다.
- **NAc FSCV**: LH^GABA-VTA 자극이 extracellular [DA]를 유의하게 증가(**n=6 mice; paired t, **p=0.0013**), D2 길항제 **raclopride** 하에서도 증가(**p=0.0037**). 개별 phasic transient가 주를 이룸.
- LH^glut-VTA 자극은 baseline에서 [DA] **감소**(n=5, *p=0.0325), raclopride 하 robust 감소(n=6, **p=0.0089**). 자극 offset에 rebound DA transient(DA cell body 과분극 후 반동 발화).
- 10 Hz·20 Hz에서 같은 패턴. → **양방향** 조절: GABA성 = DA↑, glut성 = DA↓.

### Fig 5 — GABA성 자극은 VTA GABA 뉴런 활동을 낮춘다 (disinhibition의 직접 증거)
- **ChrimsonR(LH, 593 nm)로 LH^GABA 말단 자극 + GCaMP6m(VTA) 광계측**으로 VTA GABA 뉴런을 동시 기록. 20 Hz 자극 시 GCaMP6m 형광(=VTA GABA 활동) **유의 감소**(**n=6 GCaMP6m, n=5 eYFP; one-way ANOVA F₂,₁₄=24.39, ****p<0.0001**). constant 자극도 감소(F₂,₁₄=15.75, ***p=0.0003).
- → LH^GABA 자극이 VTA GABA 뉴런을 실제로 **억제**한다.

### Fig 6 — LH 입력은 DA 뉴런보다 VTA GABA 뉴런에 더 강하다 (기전 확정)
- VTA 절편 patch-clamp. LH^GABA→VTA의 **IPSC 진폭이 TH⁻(putative GABA) 뉴런에서 TH⁺(DA)보다 유의하게 큼**(**n=9 TH⁺, n=7 TH⁻; t, *p=0.0270**). LH^glut→VTA의 **EPSC도 TH⁻ > TH⁺**(**n=5/5; *p=0.0464**).
- → LH는 DA·GABA 뉴런 모두에 투사하지만(흥분·억제 양쪽, Nieh 2015), **상대적 강도가 VTA GABA 뉴런 쪽으로 치우쳐 있다**. 따라서 GABA성 입력 활성 = VTA GABA 억제 = **DA disinhibition → NAc DA↑**(모델, Fig 6D).

### Discussion·결론 요점
- **Kempadoo 2013 반박**: 이전 모델은 glutamate성(neurotensin 포함) LH-VTA가 reward·ICSS를 지지한다고 봤다. 본 논문은 ICSS·장소선호가 **GABA성** 성분에서 나오고 glut성은 회피임을 보여, VTA 내 NMDA 차단 효과는 "glutamate 작용 차단"이 아니라 **DA 뉴런 burst-firing 차단**의 혼입일 수 있다고 재해석한다.
- disinhibition은 morphine(Johnson & North 1992)·cocaine(Bocklisch 2013)이 VTA DA를 탈억제하는 고전 기전과 같은 계열. **억제성 입력이 보상을 지지하는 역설**을 회로 수준에서 해소.
- **Substitutability**(Valenstein 1968)·동기적 현저성: 원래의 substitutability는 **LH 전기자극**에서 먹이·물·나무토막 중 무엇이 있느냐에 따라 feeding·drinking·gnawing이 나온다는 관찰이며(본 논문이 인용), 본 논문은 LH-VTA 자극이 맥락(사회 자극·근접 물체)에 따라 다른 행동을 끌어낸다는 점으로 이를 투사 특이적 수준에서 재현한다. 저자 가설 — LH=항상성 회로의 **evaluator**, VTA=**adjuster**로 DA를 올려/내려 motor action을 생성.
- 임상 함의: **GABA성 LH-VTA 과활성 = 배고픔이 아닌 보상 동기로 유도되는 compulsive eating** 및 다른 자극 대상 강박(binge eating↔compulsive buying, 병적 도박↔약물남용 공존)의 후보 표적.
- **한계**(저자 명시): 광유전 말단 자극은 생리적 패턴을 재현하지 않을 수 있고 **antidromic 활성화**(LH 체세포 → BNST·DRN·편도·LHb 등 측부지 동원)를 배제 못 함. 억제 효과가 활성화보다 modest한 것은 LH-VTA가 VTA 활동의 **여러 기여 인자 중 하나**임을 시사. DA는 NAc에서만 측정(dorsal striatum·PFC 미측정). GABA성 LH-VTA가 **peptide(neurotensin 등) 공방출**을 일으킬 가능성.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **NMPU Motivation 축의 회로 원형**: "여러 동기 행동을 가로지르는 behavioral activation"(Fig 2)은 [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]]의 Motivation(vigor·우선순위)을 LH 출력으로 구현한 가장 이른 인과 증거다. [[kim-2024-normative-framework-dissociates-need|Kim 2024 Sci Adv]]가 LH^LepR=Motivation으로 좁힌 축의 상류 회로 전제. **검증 질문**: 본 논문의 GABA성 LH-VTA value-scaling/behavioral activation을 실제로 나르는 세포가 [[lee-2023-lateral-hypothalamic-leptin-receptor|LH^LepR]]인가 — 단 [[siemian-2021-lateral-hypothalamic-lepr-neurons|Siemian 2021]]은 LH^LepR이 섭취를 전혀 구동하지 않고 학습/appetitive만 바꾼다고 보고하므로, behavioral activation의 담당 세포는 LepR가 아닌 다른 GABA 아집단일 수 있다.
- **compulsive/LOC eating 회로 가설**: Discussion의 "보상 동기로 유도되는 compulsive eating" 가설은 [[concept-compulsion]]·[[concept-loss-of-control-eating|LOC eating]]·[[concept-food-addiction]]의 회로 후보다. 처벌 저항 섭식의 perseverer를 GABA성 LH-VTA tone으로 설명할 수 있는지가 [[holton-2026-the-adaptive-value-of-stubborn|over-persistence]] 분해와 교차하는 지점.
- **DTx·electroceutical 표적 정당화**: 사용자 lab의 [[ha-2024-hypothalamic-neuronal-activation-non-human|Ha 2024 NHP]] LH GABA chemogenetic 활성이 palatable food 한정 goal-directed 섭식을 늘린 것은 본 회로의 번역판이다. 단 본 논문의 비선택적 LH^GABA→VTA 조작이 salience·feeding을 가로질러 작동하므로, 효과(목표지향 섭식)와 부작용(전반적 동기 과활성)을 분리하려면 ensemble 선택성이 필요하다([[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026]] 참조).
- **liking vs wanting**: DA disinhibition을 통한 "behavioral activation"은 [[concept-liking-wanting|wanting(incentive salience)]]·[[salamone-2012-mysterious-motivational-functions-mesolimbic|Salamone의 activational/effort]] 프레임과 직접 맞물린다. 이 회로가 '좋아함'이 아니라 '갈망/현저성'을 올린다는 예측은 검증 가능.

## ⚠️ 위키 내 충돌·긴장 (병기 — 덮어쓰지 않음)
- **[[sharpe-2017-lateral-hypothalamic-gabaergic-neurons|Sharpe 2017]]·[[hoang-2026-methamphetamine-potentiates-the-use-of|Hoang 2026]] (같은 LH^GABA→VTA, 반대 기능)**: 본 논문은 LH^GABA→VTA를 **행동을 구동하는 disinhibition 회로**(자극→NAc DA↑→접근)로 본다. Sharpe 2017(rat)은 같은 투사가 **행동을 구동하지 않고 cue 기대값을 relay해 학습률만 조절**하며, VTA 말단 억제가 학습을 **촉진**한다고 보고한다. 두 모델은 "LH GABA 말단을 끄면 DA가 어떻게 변하는가"에 대해 **부호를 반대로** 예측한다(통념대로면 DA↓·학습↓, Sharpe는 학습↑). Sharpe는 "Nieh의 비선택적 LH-VTA 자극이 shock grid crossing을 바꿨지만 GABA 투사 한정 더 선택적 자극은 진행 중 행동을 못 바꿨다"로 봉합하지만, 어느 쪽도 DA를 측정하지 않아 **미해결**이다(후속 synthesis 담당).
- **[[grove-2022-dopamine-subsystems-track-internal|Grove 2022]] (같은 경로, 다른 내용)**: Grove는 LH^GABA→VTA DA가 **systemic 수분 균형(primary reward)**을 실시간 추적한다고 본다. 본 논문의 "현저 자극 유도 behavioral activation"과 **상호 배타적이지 않지만**, 한 경로가 (i) 내부 상태 신호, (ii) cue 기대값, (iii) 현저성 활성화를 어떻게 다중화하는지는 미해결. 병기.
- **[[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026]] (SNU 김성연 lab) — "appetitive LH^Vgat = 음식 추구" 재해석**: 본 논문은 GABA성 LH-VTA를 valence-무관 motivational salience 장치로 본다. Lee 2026은 단일세포 2-photon에서 LH^Vgat cue 반응 ensemble이 **혐오 열자극에도 반응하는 valence 무관 salience 코더**임을 직접 보여 본 논문의 "motivational salience" 해석과 **수렴**한다 — 단 Lee는 상관 영상(인과 조작 없음), 본 논문은 투사 특이 인과 조작이라 층위가 다르다. 병기.
- **[[liu-2026-granular-motivational-interaction-and|Liu 2026]] — "LH^GABA = initiation hub"**: 본 논문의 GABA성 LH-VTA는 접근·조사·사회 상호작용 등 광범위한 행동을 활성화하므로 단일 phase(개시)로 환원되지 않는다. Liu의 granular phase 분류와 **해상도·프레임 차이**로 병기.
- **[[de-vrind-2019-effects-of-gaba-and|de Vrind 2019]] — LH GABA '섭취 증가' spillage caveat**: Nieh 2015(선행작)의 LH GABA 자극 섭취 증가가 gnawing/spillage로 과대평가됐을 수 있다는 지적. 본 논문도 **gnawing을 피하려 RTPP/A·ICSS에서 10 Hz를 썼다**고 명시(사회·물체 과제는 20 Hz)하므로 자극 주파수·섭취 정량 해석 시 병기.
- **Jennings 2013 인용 중의성(위키 전반)**: 위키 여러 페이지가 "Jennings 2013"을 **Science 341:1517(BNST→LH, [[jennings-2013-the-inhibitory-circuit-architecture]])**과 **Nature(BNST→VTA)** 두 논문에 혼용한다. 본 논문의 LH^GABA→VTA GABA disinhibition 모델을 Jennings 2013과 묶어 인용할 때 어느 쪽인지 구분할 것.

## 관련 페이지
- [[concept-lateral-hypothalamus]] — 개념 hub. "LH GABAergic → VTA GABA 억제 → DA disinhibition → NAc DA↑"(Nieh 2015·2016) 다운스트림 서술의 1차 원전.
- [[concept-dopamine-reward-system]] — LH–VTA–NAc 회로 절의 핵심 원전; disinhibition에 의한 phasic DA 방출.
- [[stuber-2016-lateral-hypothalamic-circuits-for]] — 같은 해 Stuber-Wise 리뷰가 본 논문의 LH^GABA→VTA GABA 우선 지배·disinhibition 모델을 핵심 기전으로 정리(Fig 4 음성 되먹임 고리 포함).
- [[stuber-2025-the-neurobiology-of-overeating]] — 같은 계열 리뷰. "LHA GABA→VTA disinhibition→DA→섭식" 통념을 과식 addiction 모델에 매핑.
- [[sharpe-2017-lateral-hypothalamic-gabaergic-neurons]] — ⚠️ 같은 LH^GABA→VTA에 "학습률 조절(teaching signal)"을 싣는 경쟁 모델. DA 변화 부호 반대 예측(병기).
- [[grove-2022-dopamine-subsystems-track-internal]] — ⚠️ 같은 경로에 "systemic 수분 균형(primary reward) 추적" 내용. 다중화 미해결(병기).
- [[hoang-2026-methamphetamine-potentiates-the-use-of]] — 역방향 VTA^DA→LH. 본 논문의 정방향과 평행 스트림; VTA DA 입력의 LH 표적은 LH^GABA가 아님.
- [[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles]] — ⚠️ LH^Vgat cue ensemble = valence 무관 salience 코더. 본 논문의 "motivational salience" 해석과 수렴(상관 vs 인과·병기).
- [[gordon-2026-lateral-hypothalamic-control-of-the]] — LH^GABA/Glut 균형이 선조체 DA 전후축 지형을 설정. 본 논문의 단일 NAc FSCV를 선조체 전역으로 확장.
- [[jennings-2015-visualizing-hypothalamic-network-dynamics]] — LH^Vgat appetitive/consummatory 비중첩 subset. 본 논문의 "일반 behavioral activation" 해석과 phase-특이 해석의 대비.
- [[jennings-2013-the-inhibitory-circuit-architecture]] — BNST→LH(Vglut2 brake). 본 논문이 든 BNST→VTA의 VTA GABA 우선 지배 유비의 원전(⚠️ 인용 중의성).
- [[siemian-2021-lateral-hypothalamic-lepr-neurons]] — LH^LepR는 섭취 비구동·appetitive/학습만 조절; 본 논문의 behavioral activation 담당 세포 정체에 대한 제약.
- [[liu-2026-granular-motivational-interaction-and]] — ⚠️ LH^GABA=initiation 프레임과 광범위 활성화의 대비(병기).
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — 사용자 lab LH 리뷰. LH→VTA→NAc·pleasure-induced eating 서술의 근거 중 하나.
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] · [[kim-2024-normative-framework-dissociates-need]] — 사용자 lab LH^LepR seeking/consummatory·Motivation 축; 본 회로를 나르는 세포 후보 검증.
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] · [[concept-need-motivation-pleasure-utility]] — behavioral activation = Motivation 축의 회로 원형.
- [[concept-compulsion]] · [[concept-loss-of-control-eating]] · [[concept-food-addiction]] — GABA성 LH-VTA 과활성 = 보상 동기형 compulsive eating 가설.
- [[concept-liking-wanting]] · [[salamone-2012-mysterious-motivational-functions-mesolimbic]] — DA disinhibition→behavioral activation을 wanting·activational/effort 프레임으로.
- [[ha-2024-hypothalamic-neuronal-activation-non-human]] — NHP LH GABA chemogenetic 활성; 본 회로의 번역판.
- [[person-lammel-stephan]] — 본 논문이 인용한 VTA DA 투사 특이성(medial/lateral VTA→NAc shell 구분)의 근거 저자.
- [[de-vrind-2019-effects-of-gaba-and]] — ⚠️ LH GABA 섭취 증가 spillage caveat; 자극 주파수(10 vs 20 Hz) 해석 병기.
- [[hoang-2021-the-basolateral-amygdala-and]] — Sharpe lab 리뷰(2021)가 본 논문을 원문 [45]로 LH^GABA→VTA 투사의 근거 목록에 넣는다. 그러나 경로 기능은 **기대값 relay → 예상 보상에서 PE 억제**(Sharpe 2017)로 서술한다. ⚠️ 본 논문의 disinhibition → DA↑ 모델과 DA 부호가 반대라는 점은 그 리뷰에서 다뤄지지 않는다(위 충돌 절과 같은 미해결 긴장).
- [[linders-2022-stress-driven-potentiation-of-lateral]] — ⚠️ **본 논문 glutamate 결과와 긴장하는 가소성 자료**(Nat Commun 2022, Meye·Adan lab). 본 논문은 LH^glut→VTA 말단 자극이 **회피**(RTPA n=7 ChR2, p=0.0175)·DA↓라고 보고한다. 저쪽은 이틀 사회 패배 후 같은 경로의 **LHA^glut→VTA^DA 시냅스가 후시냅스 GluA1-AMPAR로 강화**되고(AMPAR/NMDAR F(1,23)=14.72, p=0.001; rectification p=0.02; PPR 불변), **20 Hz HFS로 인공 강화하면 지방 섭취가 늘고 1 Hz LFS로 되돌리면 스트레스성 과식이 사라진다**고 보고한다. 또한 LHA 입력의 **GABA_AR/AMPAR 비가 VTA^DA에서만 감소**(KS p=0.003)하고 **VTA^GABA에서는 불변**(p=0.074) — 본 논문의 "LH^GABA가 VTA GABA를 우선 억제해 DA를 탈억제"라는 고리와 **다른 축(glutamate 쪽 직접 흥분 증가)** 으로 같은 방향(DA↑)에 도달한다. 급성 자극(본 논문) vs 이틀 가소성 유도 후(저쪽)의 시간척도 차이로 병기.
- [[liu-2023-an-iterative-neural-processing]] — LH^GABA가 비식용 물체에도 접근·탐침 반응을 보이고 LH^GABA→(VTA)DA 축을 개시로 둔다. 본 논문의 "LH-VTA GABA = 여러 동기 행동을 가로지르는 motivational salience"와 같은 방향(food-specific 아님; Neuron 2023).
