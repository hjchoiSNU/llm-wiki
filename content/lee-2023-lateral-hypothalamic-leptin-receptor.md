---
title: "Lee, Kim, Kim, Jang et al. 2023 — Lateral hypothalamic leptin receptor neurons drive hunger-gated food-seeking and consummatory behaviours in male mice"
type: paper
created: 2026-05-25
updated: 2026-10-03
source: raw/2023 Nature Communications. Lateral hypothalamic leptin receptor neurons drive hunger-gated food-seeking and consummatory behaviours in male mice.pdf
authors: [Young Hee Lee, Yu-Been Kim, Kyu Sik Kim, Mirae Jang, Ha Young Song, Sang-Ho Jung, Dong-Soo Ha, Joon Seok Park, Jaegeon Lee, Kyung Min Kim, Deok-Hyeon Cheon, Inhyeok Baek, Min-Gi Shin, Eun Jeong Lee, Sang Jeong Kim, Hyung Jin Choi]
year: 2023
journal: Nature Communications
---

> [!takeaway] 연구 방향 관점의 핵심
> 사용자 lab의 **LH LepR 회로 정의 paper**. LH GABA 뉴런의 4%에 불과한 LH LepR이 **food-specific LH GABA subpopulation의 79%**를 차지함을 발견. Microendoscopy로 **seeking vs consummatory 2 subpopulations 분리** — phase-specific paradigm의 중요성 정립. **NPY가 GABAergic disinhibition으로 LH LepR을 permissive gate**. NMPU의 Motivation 회로 분자·세포 기반.

# Lateral hypothalamic leptin receptor neurons drive hunger-gated food-seeking and consummatory behaviours

## 한 줄 요약
**LH LepR 뉴런이 seeking과 consummatory phase에 분리된 2 subpopulation으로 작동**하며, AgRP/NPY 뉴런이 NPY로 disinhibition gating을 통해 LH LepR을 활성화. 사용자 lab 대표 LH 회로 paper.

## 5가지 핵심 발견

### 1. LH LepR = food-specific LH GABA subpopulation (★)
- LH GABA 뉴런 중 **8%만 food-specific** (chocolate에 활성, Lego에는 비활성).
- LH LepR 뉴런은 LH GABA의 **4%에 불과**하지만, 중 **63%가 food-specific**.
- → **food-specific LH GABA 뉴런의 79% (63/80)가 LH LepR**. 극소수가 전체 식이 회로 거의 대부분 매개.
- Single-cell RNA-seq (Mickelsen 2019): LH LepR의 92%가 GABA. NPYR-expressing LH는 별도 GABA subpopulation.

### 2. Photometry — LH LepR 활성이 seeking·consummatory 모두 timestamp
- Fasted mouse에서 food contact 즉시 활성 ↑.
- **Voluntary seeking 초기에 이미 ↑** — seeking 시작 약 6초 전부터 활성 onset (3rd derivative analysis로 정밀 측정).
- Multi-phase test: pre-conditioning에서는 non-goal-directed locomotion에 비활성. Post-conditioning에서 goal-directed seeking과 consummatory 모두 활성.
- → LH LepR이 **seeking의 driver이지 consequence가 아님** (시간 인과성).

### 3. Microendoscopy — 2 distinct subpopulations (★)
- 단일세포 calcium imaging (GRIN lens).
- Food-trial vs no-food trial (same seeking 가능, food 부재).
- **25% Seeking LH LepR neurons**: seeking에만 활성, consummatory에 비활성.
- **39% Consummatory LH LepR neurons**: consummatory에만 활성, seeking에 비활성.
- 16% ambiguous, 20% non-responsive.
- → 두 subpopulation이 **sequential·exclusive 활성** (동시 활성 아님). 단일 LH LepR이 두 phase를 cover하는 게 아니라 분리된 cell이 cover.

### 4. Optogenetic — Phase-specific paradigm 중요성
**왜 이전 연구가 모순적이었나** 해명:
| Paradigm | Activation 결과 | 해석 |
|---|---|---|
| Seeking+consummatory **동시 가능** (large chamber) | **효과 없음** | 두 subpop 동시 활성이 unphysiological → 행동 선택 경쟁 |
| **Seeking phase isolated** (hidden food, bedding) | digging·food zone entry·locomotion ↑ | seeking subpop 활성 충분 |
| **Consummatory phase isolated** (small chamber, proximate food) | consumption ↑ + 식이량 ↑ | consummatory subpop 활성 충분 |

- **NpHR 억제**: consummatory phase isolation에서 식이 ↓ (필요성). Seeking phase 효과는 부재.
- → 이전 controversial 결과 (Siemian 2021 no effect; de Vrind 2019 decreased; Leinninger 2009 decreased after leptin; Shin 2023 increased via vlPAG)이 paradigm 차이로 해명됨.

### 5. NPY는 LH LepR의 permissive gate (disinhibition)
- 가설 근거: AgRP/NPY → LH 투사 + NPY receptor LH 발현 + NPY LH 주입 식이 ↑ + Chen 2019 NPY가 sustained hunger 매개.
- Ex vivo: NPY → LH LepR calcium ↑. NPY antagonist (Y1·Y5)로 완전 차단.
- **메커니즘**: LH LepR이 NPYR 직접 발현 거의 안 함. NPYR+ LH GABA interneuron이 LH LepR을 tonic inhibit. NPY → interneuron Gi 활성 → LH LepR disinhibition.
- sIPSC frequency ↓ (NPY 적용 후), amplitude 변화 없음 → presynaptic mechanism.
- Leptin도 LH LepR을 활성 (5/9 cells); 일부 (1/9) 억제 — heterogeneous, 이전 결과와 정합.

→ **Sated 상태** (낮은 AgRP/NPY 활성 → 낮은 NPY) = tonic inhibition으로 LH LepR locked → 식이 cue 무반응.
→ **Fasted 상태** (높은 AgRP/NPY 활성 → 높은 NPY) = disinhibition → LH LepR이 cue에 반응 가능.

## NMPU framework 매핑 (★)

이 paper가 [[kim-2024-normative-framework-dissociates-need|Kim 2024 Sci Adv]] (normative framework) **이전 발견**으로, 후속 framework가 build 된 회로 기반:

- **Motivation 회로 분자·세포 정의**: LH LepR = Motivation encoder (Kim 2024 Sci Adv가 광계측·model fitting으로 더 발전).
- **Seeking vs Consummatory subpopulation** 분리 = NMPU의 appetitive vs consummatory phase 회로 substrate.
- **NPY permissive gate** = NMPU의 **Need → Motivation 전환** 분자 메커니즘. AgRP (Need encoder) → NPY → LH LepR (Motivation enabler).

## 사용자 lab 후속 연구 연결
- [[kim-2024-normative-framework-dissociates-need|Kim 2024 Sci Adv]] = LH LepR이 Motivation encoder 정량 입증 (이 paper 직접 후속).
- [[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025 EMM]] = LH 전체 cell type review에서 LepR subset 정리.
- [[park-2025-glucagon-like-peptide-1-and-hypothalamic|Park 2025 DMJ]] · [[kim-2024-glp-1-increases-preingestive-satiation|Kim 2024 Science]] = DMH GLP-1R → ARC AgRP → (NPY) → LH LepR 회로 연결.
- [[lee-2025-hijacked-brain-modern-obesity-cue|Lee 2025 JOMES]] = 5 maladaptive eating type 임상 응용.

## 외부 정합
- [[korotkova-2026-balancing-acts-lateral-hypothalamic|Korotkova 2026]] — LepR LH가 hunger × anxiety × social 3-drive arbitration. Petzold 2023 Cell Metab (Korotkova lab) cites 사용자 lab의 본 paper. ⚠️ 단 **인과 조작의 부호는 서로 반대**다: 본 paper는 **ad libitum 수컷**에서 phase-isolated 조건의 LH^LepR 광유전 활성화가 seeking·consummatory를 **증가**시킨다고 보고하고(두 phase가 동시 가능한 대형 챔버에서는 효과 없음), [[petzold-2023-complementary-lateral-hypothalamic-populations|Petzold 2023]]은 **급성 식이제한 직후** 먹이·물·물체가 함께 있는 자유접근 조건에서 같은 조작이 feeding rebound를 **억제**한다고 보고한다(만성 제한·포만 상태에서는 무효). 'framework 정합'이 아니라 **조건 의존성(과제 구조·배고픔 상태·LH 아영역)으로 분해해야 할 쟁점** → [[concept-lateral-hypothalamus]]의 'LH^LepR 활성화는 섭취를 늘리는가 줄이는가' 절.
- Faour 2025 — AgRP→LH 식이·iBAT.
- Chen 2019 eLife — NPY sustained hunger 매개 (본 paper의 NPY gate 가설 근거).

## 임상 함의
- **Phase-specific 약물 표적**: GLP-1RA = preingestive·Need 단계 (DMH), 다른 약물 = Motivation 단계 (LH LepR) — 사용자 lab의 5 type personalized DTx 분자 path.
- **NPY antagonist** = hunger 차단 표적 (sated lock 유지).
- **AN treatment**: LepR LH 활성이 anxiety 감소·excessive exercise 차단 ([[korotkova-2026-balancing-acts-lateral-hypothalamic|Korotkova 2026]] Figge-Schlensok 2025).

## 관련 페이지
- [[onimus-2026-dopamine-ensembles-regulating-appetite]] — NAc^Sh D1R^Serpinb2→LH LepR이 leptin anorexia를 override; 본 LH^LepR 회로의 mesolimbic 상류 입력 (TEM 2026).
- [[concept-lateral-hypothalamus]] — 본문 통합.
- [[concept-leptin]] — LepR.
- [[concept-need-motivation-pleasure-utility]] — Motivation 회로 기반.
- [[concept-npy-agrp-neurons]] — NPY upstream.
- [[concept-appetitive-consummatory-phases]] — seeking·consummatory phase 정의.
- [[lee-2019-food-craving-seeking-and]] — 본 논문이 광유전적으로 분리한 seeking·consummatory phase의 framework 원전 (동일 제1저자 Lee YH).
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — LH 전체 review.
- [[kim-2024-normative-framework-dissociates-need]] — 후속 framework.
- [[kim-2024-glp-1-increases-preingestive-satiation]] — DMH GLP-1R 회로.
- [[korotkova-2026-balancing-acts-lateral-hypothalamic]] — LH arbitration framework (cited).
- [[lee-2025-hijacked-brain-modern-obesity-cue]] — 임상.
- [[faour-2025-emerging-role-of-agrp]] — AgRP→LH.
- [[johansen-2025-brain-control-of-energy]] — 본 LH^LepR 논문을 인용 (ref229); 회로 종합 (Cell 2025).
- [[stuber-2025-the-neurobiology-of-overeating]] — NAc D1R-MSN→LHA GABA gate가 본 LH^LepR seeking/consummatory의 mesolimbic 상류 입력 후보 (Neuron 2025).
- [[person-choi-hyung-jin]] — 교신저자.
- [[jia-2026-novelty-exploration-activated-ensemble-in]] — LH cell-type/projection 분업을 통증·정서 축에서 보여주는 또 다른 사례 (Nat Commun 2026).
- [[liu-2026-granular-motivational-interaction-and]] — 본 LH^LepR 논문을 인용(ref159); LH^GABA를 feeding initiation phase hub로 배치 (Neuron 2026).
- [[namkoong-2017-central-administration-of-glp-1]] — 1저자 Young Hee Lee 공저; 동일 lab 초기 GLP-1/GIP 중추 paper (BBRC 2017).
- [[thanarajah-2019-food-intake-recruits-orosensory]] — 인체 PET; 즉시(감각) 단계 시상하부(LH 추정) DA — 본 LH^LepR seeking 회로와 시간적 호응 (Cell Metab 2019).
- [[petzold-2023-complementary-lateral-hypothalamic-populations]] — 같은 LH^LepR을 영양 vs social arbitration 각도로.
- [[shin-2023-early-adversity-promotes-binge-like-eating]] — 같은 LH LepR이 초기역경으로 병적 폭식 회로 전환.
- [[rossi-2023-control-of-energy-homeostasis]] — LHA^LepR(appetitive learning)을 세포타입 taxonomy에 위치.
- [[sumarli-2026-multidimensional-control-of-ingestive-behavior]] — 같은 LH 안의 Nts 집단과 세포타입 분업 대비: LH^Nts 침묵은 총 섭취를 바꾸지 않는다 (bioRxiv 2026).
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
- [[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles]] — seeking vs consummatory 분리를 2P 단일세포 종단 추적으로 재현·혐오 영역까지 확장; 단 섭취 ensemble은 물·고형식으로 일반화(food-specific 정의 축과 다름) (Cell Rep 2026)
- [[jung-2022-a-forebrain-neural-substrate-for]] — 같은 LH^Vgat의 기능 정의 집단(thermal P&R vs 칼로리 보상). 본 논문의 분자 정의 LH^LepR이 어느 쪽에 속하는지는 미해결 (Neuron 2022, SNU 김성연 lab)
- [[lee-2026-distinct-lateral-hypothalamic-gabaergic]] — LH^Vgat를 salience(혐오 열자극+음식 cue) ensemble과 value-scaled consumption(먹이+물) ensemble로 분해했다 (SNU 김성연 lab, Cell Rep 2026). ⚠️ 비교 주의: 이 논문의 caged-PB 흥분 뉴런 22%(70/319) 중 상당수는 heat에도 반응해 **food-specific이 아님** → 본 논문의 "LH GABA의 8%만 food-specific"과 양립 가능(대부분은 비특이 salience)하지만, 정의·대조 자극·자유행동 vs head-fixed가 달라 수치를 직접 비교할 수 없다. LepR seeking/consummatory subset이 두 ensemble의 분자 부분집합인지는 검증 과제(연결 가설).
- [[gordon-2026-lateral-hypothalamic-control-of]] — LH^GABA가 FR:Suc에서 가치에 강하게 비례 scaling하고 전측 선조체 DA와 양의 결합. **이 value-scaling GABA 집단이 LH^LepR인지**가 직접 후속 질문(LepR-Cre dual-color 재현) (Neuron 2026, Stuber lab).
- [[jennings-2015-visualizing-hypothalamic-network-dynamics]] — LH^Vgat의 appetitive/consummatory 비중첩 subset을 microendoscope로 처음 보인 논문(Cell 2015, Stuber lab). 본 논문은 그 분업을 **LH^LepR(GABA의 4%, food-specific LH GABA의 79%)** 로 분자적으로 좁힌 사용자 lab 후속이다. Jennings가 열어 둔 "Vgat subset의 분자 정체(Nts·Gal 가능성)"에 LepR을 채워 넣음.
- [[siemian-2021-lateral-hypothalamic-lepr-neurons]] — 본문 §4에서 "no effect"로 인용한 원전(Cell Rep 2021, NIDA Aponte lab). ⚠️ **같은 LH^LepR의 섭취 효과 부호가 맞지 않는다**: 그쪽은 ablation·opto·chemo 어느 조작도 체중·섭취·lick을 바꾸지 못하고(ablation 체중 p=0.95·섭취 p=0.90; ChR2 섭식 p=0.21, NpHR p=0.32), 대신 **Pavlovian cue 변별 학습이 완전 실패**(block 5 변별 p=0.50)·RTPP 양방향·sucrose CPP 차단만 나타난다. 조건 차이: 좌표 ML ±1.10(alLH 경계) vs 본 논문 ML 0.9(pmLH), 섭취·탐색 동시 가능 조건(본 논문 기준 '대형 챔버'에 해당), 수컷+암컷. 본 논문의 paradigm 설명에 더해 **좌표·상태 축도 함께 병기**할 것.
- [[liu-2023-an-iterative-neural-processing]] — GAD2 LH^GABA bulk photometry: 접근 시작과 함께 상승하고 긴 접촉이 끝나기 전에 소실 → "섭식 조각 개시" 노드로 해석(Neuron 2023, Wang lab). 쥐를 물체 앞에 놓는 passive 과제에서 LH^GABA 활성 → 즉시 지속 물어뜯기, 15 min 억제 → 섭취 완전 차단 — 본 논문의 phase-isolated 논리와 정합. ⚠️ seeking 정의 차이: 본 논문 LepR은 seeking 약 6 s 전부터 상승하지만 Liu의 LH^GABA는 탐색 중 거의 무반응이고 접근(Wa) 시작에 상승한다(고정 펠릿 arena). LepR consummatory 39%가 bulk에서 가려진 "유지" 성분인지가 검증 과제(연결 가설).
- [[de-vrind-2019-effects-of-gaba-and]] — 본문 §4에서 'de Vrind 2019 decreased'로 인용한 원저(Obesity 2019, Utrecht Adan lab). LepRb-cre hM3Dq(CNO 1 mg/kg, ad lib, 암기 7 h) → **바닥 chow 섭취↓**(7 h P=5.3×10⁻⁸)·수평 운동↑·눈 온도↑·3일 반복 시 체중↓, palatable(sucrose·sugar·lard) 불변. ⚠️ 섭식↓는 **먹이가 쉽게 닿을 때만** 나타나고 cage-top chow 3일 반복에서는 무변 — 모든 LepR를 수 시간 동시에 켜는 비-phase 특이 조작이라 본 논문의 'paradigm 차이' 해명과 정합하며, 빈 우리 운동↑(seeking 유사 활성)가 근접 섭취와 경쟁했을 가능성(연결 가설). 주입 AP −1.2(anterior)로 본 논문 pmLH와 다름.
- [[sharpe-2017-lateral-hypothalamic-gabaergic-neurons]] — rat LH^GABA 모집단에서 **cue–음식 연합의 획득·발현 모두**가 필요함을 보인 원전(Curr Biol 2017). cue 구간만 억제하고 보상 구간은 건드리지 않는 설계 + **레이저 없는 소거 시험**으로 "수행 저하 vs 학습 실패"를 가른다 → 본 논문의 phase-isolated LH^LepR 패러다임에 그대로 이식 가능한 설계(연결 가설).
- [[sharpe-2024-the-cognitive-lateral-hypothalamus]] — Sharpe의 'cognitive LH' Opinion(Trends Cogn Sci 2024). LH는 보상 **근접** 예측자 학습을 밀고 중립·**원위** cue 학습은 억누르는 dial이며, 'LH 억제 → 원위 행동(lever press) 학습↑·근접 반응(port entry)↓'를 예측한다. 본 논문의 seeking(원위)/consummatory(근접) phase-isolated 챔버가 이 예측의 직접 검증 설계가 된다(연결 가설). ⚠️ 원문은 Siemian 2021을 근거로 'LepR = 학습만·섭취 무변'이라 서술한다 — 본 논문의 활성 → seeking·consummatory ↑와 병기. 'LepR가 갈증 시 물에도 반응하는 일반 학습자'(Petzold 근거)라는 해석도 본 논문의 'food-specific LH GABA의 79% = LepR'과 대조 자극이 달라(물 vs Lego) 직접 비교할 수 없다.
- [[rossi-2021-transcriptional-and-functional-divergence]] — ⚠️ 본문 §1의 **"LH LepR의 92%가 GABA"**(Mickelsen 2019 기반)에 대한 보완·긴장(Neuron 2021, Stuber lab). RNAscope에서 **Lepr mRNA가 LHA^Vglut2 투사 뉴런의 일부에 존재**하고, 그 비율이 **LHb 투사 > VTA 투사**로 유의하게 다르다(X²=121.67, p<0.0001; Ghsr은 차이 없음). 더 중요한 것은 **leptin이 두 glutamatergic 경로를 반대 방향으로 민다**는 점이다(LHb 투사 반응↓ / VTA 투사 반응↑, interaction F(1,370)=63.99, p=1.6e-14). 즉 leptin의 LH 효과는 GABA engine 억제 하나로 환원되지 않고 **brake 측에도 경로별 부호가 있다**. 본 논문의 seeking/consummatory 분해에 **투사 표적 축**을 더해 LH^LepR을 표적별로 다시 쪼개 보는 설계가 바로 가능하다(병기 — 두 논문은 세포타입·과제가 달라 비율을 직접 비교하면 안 된다).
- [[wang-2021-expansion-assisted-iterative-fish-defines-lateral]] — LHA 24-plex 공간 지도(EASI-FISH)지만 **패널에 Lepr가 없어** LH^LepR의 분자·공간 주소는 미해결이다. Nts/Gal 공발현 서술에 비추면 Inh-14(Nts/Gal/Gpr101, Hcrt 띠와 33% 중첩)와 Inh-11(Gal)이 후보다(연결 가설). 표본은 tuberal(AP 약 −1.2~−1.4)이라 본 논문의 pmLH와 직접 겹치지 않는다. RNA가 40일 넘게 안정해 Lepr를 재탐침하면 검증할 수 있다 (bioRxiv 2021).
- [[jennings-2013-the-inhibitory-circuit-architecture]] — ⚠️ 본 논문 LH^LepR(GABAergic, LH GABA의 4%) 축에 대한 **해부학적 제약**(Science 2013, Stuber lab): BNST 억제성 입력의 단시냅스 표지는 **LH^Vglut2에 조밀, LH^Vgat에는 최소**(F1,20=38.50, P<0.001)이고 강하게 억제받는 LH 세포는 Vglut2 발현이 높다(U=169.0, P=0.016, 48 cells). → **예측: BNST→LH^LepR 시냅스 강도는 BNST→LH^Vglut2보다 유의하게 낮다**. 성립하면 '확장편도·스트레스 주도 과식'과 '[[kim-2024-normative-framework-dissociates-need|need 주도 Motivation]]'이 LH 안에서 **세포 수준으로 갈린다**(연결 가설 — LepR-Cre에 FLEX-TVA/RG rabies, 또는 BNST ChR2 + LepR 세포 패치로 직접 검증 가능).
- [[mickelsen-2019-single-cell-transcriptomic-analysis-of]] — 본문 §1 "Single-cell RNA-seq (Mickelsen 2019): LH LepR의 92%가 GABA"의 원전(Nat Neurosci 2019, Jackson lab; LHA^Glut 15 + LHA^GABA 15 클러스터 census). ⚠️ 정밀화 필요: 원문 **본문에는 92%라는 수치가 없고**, 근거는 Supplementary Fig 9의 **Lepr-Cre;EYFP FACS 단일세포 qPCR**(마우스 2마리, "대다수가 Slc32a1⁺·Gad1⁺·Gad2⁺이고 Nts·Gal·Cartpt 풍부")이다. 같은 논문의 **scRNA-seq에서는 LHA^GABA의 Lepr·Mc4r이 낮거나 희박**하다고 명시한다 → 수치를 지우지 말고 "출처는 sc-qPCR, 전사체 검출은 낮음"으로 병기. 또한 그 논문의 LHA^GABA cluster 3(Nts/Cartpt)이 **Crh형 vs Tac1형으로 거의 상호배타 분할**(둘 다 9.9% / Tac1만 50.4% / Crh만 39.7%, 1,016 세포)되므로, 본 논문의 **seeking 25% vs consummatory 39%** 아집단과의 대응이 직접 검증 가능한 가설이다(병기 — 그쪽은 기능 미측정).
- [[leinninger-2009-leptin-acts-via-leptin]] — ★ 본문 §4가 "Leinninger 2009 decreased after leptin"으로 인용하는 **1차 원전**(Cell Metab 2009, Myers lab). 본 논문의 전제 — LH^LepR는 **GABAergic**이고 MCH·OX와 별개이며 **VTA로 투사**한다 — 를 처음 세웠다(Gad1^EGFP 전부 공존; Ad-iZ/EGFPf 추적에서 VTA 조밀·**선조체/NAc 투사 없음**, n=11). ⚠️ 두 가지를 구분해 인용할 것: ① 그 논문의 섭식↓는 **leptin 수용체 약리(intra-LHA leptin)** 결과이고 세포 활성 조작이 아니다(leptin은 LHA LepRb의 **34%만 탈분극·일부 과분극** — 본문 §5의 "5/9 활성·1/9 억제, heterogeneous, 이전 결과와 정합"이 바로 이 지점). ② 그 논문에서 **36 h 단식은 LHA LepRb c-Fos를 오히려 낮췄다**(12%±3%→5%±1%, p=0.05) — 본 논문의 NPY 탈억제 gate는 **cue·seeking 사건 시점의 반응성**이므로 tonic 활성과 층위가 다르다(병기).
- [[leinninger-2011-leptin-action-via-neurotensin]] — ⚠️ **도구 통약 문제의 1차 수치**: LHA LepRb 뉴런의 **약 60%가 neurotensin⁺**이다(Cell Metab 2011, Myers lab). 즉 본 연구의 LH^LepR와 위키의 LH^Nts 문헌([[sumarli-2026-multidimensional-control-of-ingestive-behavior|Sumarli 2026]]·[[petzold-2023-complementary-lateral-hypothalamic-populations|Petzold 2023]])은 **상당 부분 같은 세포를 다른 Cre로** 조작하고 있을 수 있다. 같은 논문의 Nts-LepRbKO는 **섭식 거의 불변 + 운동량↓ + 조기 비만**이어서, LH^LepR 조작의 섭취 부호 논쟁과는 **다른 축(활동·에너지 지출)** 을 가리킨다. 연결 가설: LepRb^Nts → 국소 **orexin 뉴런 GABA 억제** 배선이 seeking phase 조직에 쓰이는지(LH^LepR 활성 중 OX Ca²⁺ 동시 기록으로 검증 가능).
- [[oconnor-2015-accumbal-d1r-neurons-projecting]] — ★ 본 페이지가 "NAc D1R-MSN→LHA gate가 LH^LepR의 mesolimbic 상류 입력 후보"로 적어 둔 그 **1차 원전**(Neuron 2015, Lüscher lab). 수치: LH 투사 NAcSh 뉴런의 **93.6%가 D1R-MSN**, LH^Vgat의 **78%가 그 억제를 받고**(rabies 입력 97%가 D1R-MSN), **orexin·MCH 뉴런은 비표적**. 인과는 양방향 — D1R-MSN 광억제는 **포만 상태에서도 섭취를 개시**시키고, LH 말단 광자극은 **24 h 금식에도 섭취를 끊는다**. 본 논문과 맞물리는 직접 질문 둘: (1) LH GABA의 4%인 **LH^LepR가 이 D1R 억제를 받는가**(rabies·LepR-Cre 조건 기록으로 검증 가능), 받는다면 **seeking subset(25%)과 consummatory subset(39%) 중 어디인가** — 원전 효과가 섭취에 즉각적이므로 consummatory 우세 예측. (2) 본 논문의 **NPY → NPYR⁺ 개재뉴런 → LH^LepR 탈억제**(상류 허가)와 원전의 **D1R → LH^Vgat 직접 억제**(하류 차단)가 직렬이면 "배고픔이 문을 열고 외부 자극이 문을 닫는" **2단 AND-NOT 게이트**가 된다(연결 가설 — 양쪽 원문 주장 아님). ⚠️ 원전은 LH^Vgat의 분자 정체를 전혀 다루지 않았다.
- [[bonnavion-2016-hubs-and-spokes-of]] — ⚠️ LH^LepR를 **leptin이 켜는 포만·Hcrt억제 GABA 노드**로 그린 리뷰(de Lecea·Jackson, J Physiol 2016). 본 논문의 **배고픔 구동 seeking driver** 틀과 방향이 반대 — 하위집단·조작 방식 차이로 병기.
- [[thoeni-2020-depression-of-accumbal-to]] — 본 LH^LepR 회로에 들어오는 **상류 억제 게이트가 결핍 경험을 시냅스에 저장한다**는 증거(Neuron 2020, Lüscher lab). [[oconnor-2015-accumbal-d1r-neurons-projecting|O'Connor 2015]]의 NAcSh D1-MSN→LH^Vgat 억제가 **하룻밤 급성 식이제한·3일 고지방식에서 eCB–CB1R 의존적으로 depress**되고(체중 회복 후 1주면 소실), CB1R 차단이 결핍 유발 과식을, 반대로 **in vivo HFS potentiation이 24 h 금식 섭취를 막는다**. 사용자 lab 쪽 1순위 후속 질문: **LH^LepR(LH GABA의 4%, food-specific 집단의 79%)에서 같은 FSK-occlusion 실험**을 해 "결핍 기억이 어느 아집단에 저장되는가"를 특정하는 것. 예측 — 그쪽 과식 증가가 **bout 수(동기 추동)에만** 나타났으므로 **seeking subset 우세**. 본 논문의 **NPY→NPYR⁺ 개재뉴런 탈억제 gate**(상류 허가)와 합치면, 배고픔이 문을 열고(NPY) 결핍 가소성이 **문의 기본 세팅까지 낮추는**(eCB i-LTD) 2단 구조가 된다(연결 가설 — 양쪽 원문 모두 다루지 않음).
- [[hoang-2021-the-basolateral-amygdala-and]] — Sharpe lab 리뷰(Curr Opin Behav Sci 2021). LH가 BLA에서 온 cue 정보의 **현재 동기 상태 관련성**을 평가하고(LH Fos는 학습 후반 세션에야 동원), 보상 **근접** 예측자 쪽으로 학습을 편향시킨다는 가설. 연결 가설: 본 논문의 hunger-gated LH^LepR가 그 '관련성 평가' 세포 후보이고, consummatory(근접)/seeking(원위) phase 분리가 근접도 이론의 검증 설계다. 예측: 포만 시 BLA cue 반응은 남고 LH^LepR cue 반응만 사라진다.
- [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal]] — ⚠️ 같은 LH^LepR의 **맥락 의존 gate** 증거(Nat Neurosci 2025, Korotkova lab). 핵심 대조: 밝고 새로운 arena(NSFT, 22 h 금식)에서 화학유전 활성화는 섭식 개시를 **앞당기지만**(P=0.0286), **익숙하고 어두운 free feeding enclosure에서는 광유전 활성화가 섭식 지연을 전혀 바꾸지 못한다**(NS; food-excited LepR 비율도 낮음). 본 논문의 "대형 챔버(두 phase 동시 가능)에서는 효과 소실"과 **같은 방향의 조건 의존성**으로 읽을 수 있고, 위키의 'LH^LepR 활성화는 섭취를 늘리는가 줄이는가' 쟁점에 **맥락 불안도**라는 네 번째 변수를 더한다. 또 같은 세포가 **anxiogenic 자극 자체에 흥분**하고(EPM open arm-excited 34% vs closed 8%, P=1.1e-9) LH에서 **LepR 수용체를 제거하면 불안이 커진다**(open arm 체류 ↓ P=0.0027). 좌표는 AP −1.3·ML 0.9(본 논문 AP −1.5)이고 주 코호트는 **암컷**(본 논문 수컷 only)이라 직접 비교 시 병기 필요. 후속 설계: 본 논문의 seeking 25% / consummatory 39% 아집단이 그쪽 Lepr⁺ 클러스터(Gal⁺/Ebf1⁺ vs Tac1⁺/Opcml⁺)와 어떻게 겹치는지 post hoc RNAscope로 검증 가능(연결 가설).
- [[harris-2005-a-role-for-lateral]] — **같은 LH 좌표(fornix 외측)의 다른 세포군이 "cue→seeking"을 담당한다는 20년 전 원전**(Nature 2005, Harris & Aston-Jones). LH **orexin** 뉴런의 Fos 비율이 morphine·cocaine·food 장소선호와 **R=0.72–0.90** 비례하고(인접 PFA·DMH orexin은 P>0.20), LH 국소 화학 활성화(Y4 작용제 rPP)가 소거된 선호를 **전신 약물 priming과 동등하게** 복원하며 **OX1R 길항제가 차단**한다. 본 논문의 **LH^LepR seeking subset(25%)** 과의 관계가 바로 다음 질문이다 — [[leinninger-2011-leptin-action-via-neurotensin|Leinninger 2011]]이 **LHA Nts(LepRb와 60% 중첩) → 국소 orexin 뉴런의 GABA 배선**(MCH는 비표적)을 보였으므로, **배고픔(leptin↓) → LepRb/Nts 탈억제 → 국소 orexin 활성 → cue 유발 seeking**이 직렬인지 병렬인지를 **LepR-Cre 광억제 + orexin Fos/Ca²⁺ 동시 측정** 한 실험으로 판정할 수 있다(연결 가설 — 양쪽 원문 주장 아님). ⚠️ 대조점 둘: Harris의 음식 CPP는 **금식 없이** 수행돼 hunger-gating이 없고(= Need 비의존 Motivation), **비소비성 보상(novel object)에서는 LH orexin이 무반응**(18±2%)이다.
- [[domingos-2013-hypothalamic-melanin-concentrating-hormone]] — **LH^LepR와 분자적으로 겹치지 않는 병렬 LH 채널**인 MCH 원전(eLife 2013, Friedman lab). MCH 제거 시 sucrose 섭취 중 선조체 DA(+118%)와 sucrose-over-sucralose 선호(→ 40%)가 사라지지만 **단맛 선호는 남는다** → MCH = 섭취물의 영양(post-ingestive) 가치 채널. 연결 가설: **LepR = need 누적 Motivation(추구), MCH = 영양 가치 판정**으로 분업. 본 논문의 consummatory LepR subset(39%)이 sucrose와 sucralose를 섭취 후 수 분 척도에서 구분하는지 비교하면 두 채널이 분리된다. ⚠️ 그 논문은 MCH가 **LepR를 발현하지 않는다**고 쓰고([[leinninger-2011-leptin-action-via-neurotensin|Leinninger 2011]] 인용), [[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]]의 "Mch … Lepr 공발현" 서술과 긴장한다(병기).- [[subramanian-2023-hypothalamic-melanin-concentrating-hormone-neurons]] — **"분업형 vs 통합형" 대조군**(Nat Commun 2023, Kanoski lab, rat). 본 논문이 LH^LepR에서 seeking subset과 consummatory subset을 **분리**한 것과 달리, MCH 뉴런은 **한 집단이 cue 단계(CS+>CS−, P=0.0042; CPP 진입 P=0.0001)와 섭취 단계(bout 중 상승, 누적 칼로리 R²=0.9299)를 모두** 담당하고 화학유전 활성이 PIT·CPP·식사량을 함께 키운다. MCH는 LepRb와 **분자적으로 비중첩**([[leinninger-2009-leptin-acts-via-leptin|Leinninger 2009]])이므로, 같은 동물에서 두 집단을 동시 기록해 "LH가 분업 모듈과 통합 모듈을 병치한다"는 가설을 검증할 수 있다(연결 가설). ⚠️ 종·측정(bulk 광계측 vs microendoscopy)·조작 방향(활성화만)이 다름.
- [[linders-2022-stress-driven-potentiation-of-lateral]] — **같은 LH에서 "스트레스 채널"을 담당하는 glutamate 쪽 자료**(Nat Commun 2022, Meye·Adan lab). 이틀 사회 패배가 **LHA^glut→VTA^DA 시냅스를 후시냅스 GluA1-AMPAR로 강화**해 기호성 지방·당만 늘린다(chow 불변, 체중 불변). 본 논문의 축(food-specific LH GABA의 79% = LH^LepR)과 **세포형이 다르다** → 검증 가능한 분업 가설: 사회 스트레스가 LH^LepR(GABA)→VTA 경로에는 가소성을 만들지 않고 glutamate 경로에만 만든다면, "항상성 기반 Motivation(LepR)"과 "스트레스 기반 기호성 편향(glut)"이 같은 LH 안의 **분리된 두 채널**이라는 뜻이 된다. 사용자 lab microendoscopy 설계에 사회 스트레스 블록을 넣으면 직접 측정 가능(연결 가설 — 양쪽 모두 미검증).
- [[heiss-2024-distinct-lateral-hypothalamic-camkiia]] — **LH 조작 해석에서 "각성·보행운동"을 공변량으로 분리해야 하는 이유**(PNAS 2024, Kilduff lab). LH 억제성 뉴런을 64.6% 절제하면 **자발 활동기 보행속도가 68% 감소**(P=0.047)하는데 **24시간 수면 구조는 전혀 바뀌지 않는다** → LH^Vgat 계열 조작은 섭취량과 **독립적으로 LMA(에너지 소비) 축**을 건드릴 수 있다. 또 AAV-CaMKIIα promoter가 LH에서 **20–33% GABAergic을 함께 집는다**는 결과는 LH 드라이버·promoter 선택의 감사 항목이다. 연결 가설: LH^LepR photometry 과제에 EEG/EMG를 붙여 seeking 구간의 **각성 상태와 approach 속도가 해리되는지** 본다(원문 주장 아님).
