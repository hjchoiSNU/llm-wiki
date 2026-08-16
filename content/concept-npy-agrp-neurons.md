---
title: NPY/AgRP neurons
type: concept
created: 2026-04-29
updated: 2026-06-17
aliases: [AgRP neurons, NPY neurons, agouti-related peptide neurons]
---
	
> [!takeaway] 연구 방향 관점의 핵심
> NPY/AgRP 뉴런은 **식욕을 켜는 가장 강력한 known 회로 모듈** — 광유전 활성만으로도 즉시 폭식 유도. Ghrelin·단식의 1차 표적이며, leptin이 억제. 섭식 회로 manipulation 실험의 표준 entry point.
>
> ★ **2025 패러다임 확장** ([[faour-2025-emerging-role-of-agrp|Faour 2025]], Luquet lab): AgRP = 단순 hunger가 아닌 **metabolic·exteroceptive·interoceptive·circadian cue 4 modality 통합 master node**. **AgRP^Hindbrain** (AP/SubP/cNTS, Bachor 2024) + pituitary·adrenal AgRP — peripheral AgRP cell 등장. **Anorexia nervosa·sleep·thermogenesis·생식·뼈** 까지 광범위.

# NPY / AgRP neurons

## 위치
[[concept-arcuate-nucleus|시상하부 arcuate nucleus]]에 거주. 두 종류의 orexigenic 펩타이드(Neuropeptide Y, Agouti-related peptide)를 공동 발현.

## 작용 메커니즘
- **NPY**: Y1/Y5 receptor 매개 식이 자극.
- **AgRP**: MC3R/MC4R **inverse agonist** — αMSH 작용을 차단.
- 동시에 GABA 분비 → [[concept-pomc-neurons|POMC 뉴런]] 직접 억제.

## 입력 (regulators) — 호르몬·체액성
| 요인 | 효과 |
|---|---|
| [[concept-ghrelin\|Ghrelin]] | 활성 (수용체 94% 발현, c-fos↑) |
| 단식 / 저혈당 | 활성 |
| [[concept-leptin\|Leptin]] | 억제 |
| Insulin | 억제 |
| PYY | 억제 |
| 위장관 post-ingestive 영양 | 억제 ([[concept-vagal-afferent-neurons\|VAN]]→AgRP; [[de-lartigue-2026-critical-role-gut-brain-signalling]]) |
| Fructose(영양소 정체 특이) | 억제 — PYY→말초 Y2R·미주 (glucose=척수와 분리; [[mcknight-2026-attenuated-hypothalamic-response-to\|McKnight 2026]]) |

## ★ 입력 회로 지도 (synaptic afferents) — 흥분/억제 × 예측/실시간

rabies 정량([[krashes-2014-an-excitatory-paraventricular-nucleus-to\|Krashes 2014]]): AgRP 입력의 **ARC 국소 38% · DMH 26% · PVH 18%**. 핵심 fast-synaptic 입력:

| 입력원 | 전달 | 부호 | 무엇에 반응 | 출처 |
|---|---|---|---|---|
| **PVH TRH/PACAP** | Glu+PACAP→PAC1 | **흥분 ↑** | hunger 기저 흥분 드라이브 | [[krashes-2014-an-excitatory-paraventricular-nucleus-to\|Krashes 2014]] |
| **PVH^Sim2** (위의 분자 정제 subset) | Glu+PACAP | **흥분 ↑** | **미래 결핍 예측**(먹이 부재·탐색 실패); 식전 cue엔 ↓. 자신은 피질 ACC·복측 해마·LS·BNST·MeA 입력 | [[walker-2026-a-hypothalamic-circuit-for\|Walker 2026]] |
| **DMH glutamatergic** | Glu | 흥분 ↑(약) | — (PVH보다 ~3배 약·high failure) | [[krashes-2014-an-excitatory-paraventricular-nucleus-to\|Krashes 2014]] |
| **vDMH^LepR/pDYN** | GABA | **억제 ↓** | 음식 **sight/availability·가치**(초콜릿>chow), 식전 | [[garfield-2016-dynamic-gabaergic-afferent-modulation\|Garfield 2016]] |
| **DMH^LepR** | GABA | **억제 ↓** | 음식 **맛(taste, sweet/fat)**, 섭취 bout마다, meal termination | [[aitken-2024-negative-feedback-control-of-hypothalamic\|Aitken 2024]] |
| **DMH^GLP-1R** (LepR과 부분 공발현) | GABA (단일시냅스 IPSC 8/8) | **억제 ↓** | **인지·preingestive satiation**(음식 cue→"미리 브레이크"); **GLP-1RA 표적**·식이 시에만 잠재화 | ★ [[kim-2024-glp-1-increases-preingestive-satiation\|Kim 2024 Science]] (사용자 lab) |
| **ARC^Bnc2** | 억제 | **억제 ↓** | 식전 sensory cue (DMH^LepR과 병행) | [[concept-arcuate-nucleus\|Tan 2024]] |

**Walker의 3 feedforward 성분** — ① 음식-예측 cue 시: 흥분 ↓(PVH^Sim2) + 억제 ↑(vDMH^LepR·ARC^Bnc2) → 양방향으로 꺼짐; ② 먹이 제거·탐색 실패 시: PVH^Sim2 흥분 ↑(에너지 결핍 *이전*); ③ circadian SCN→[[concept-dorsomedial-hypothalamus\|DMH^Trh]]→AgRP (Douglass 2024; PVH^Sim2 비담당).

**DMH GABAergic 억제 cluster (부분 중첩)**: 세 DMH 억제 입력은 분자적으로 겹치는 한 GABAergic 집단의 모드들 — **Lepr/Glp1r 공발현**(Webster 2024 RAMPANT의 Trh⁺/Glp1r⁺/Lepr⁺ subset). ① sight/가치([[garfield-2016-dynamic-gabaergic-afferent-modulation\|Garfield 2016]], vDMH^LepR/pDYN) · ② taste([[aitken-2024-negative-feedback-control-of-hypothalamic\|Aitken 2024]], DMH^LepR) · ③ **인지·preingestive satiation**([[kim-2024-glp-1-increases-preingestive-satiation\|Kim 2024 Science]], DMH^GLP-1R, 사용자 lab). ③은 CRACM으로 DMH^GLP-1R→ARC NPY/AgRP 단일시냅스 IPSC(8/8)·회로 epistasis(DMH^GLP-1R hM4Di 또는 AgRP hM3Dq가 liraglutide 효과 차단)로 입증. (DMH glutamatergic 흥분 입력[Krashes]과는 별개 집단.)

**핵심 비대칭**: PVH 흥분 입력 = **인지·예측**(외부 맥락) vs DMH 억제 입력 = **감각·인지 피드백**(sight=Garfield / taste=Aitken / GLP-1R cognitive satiation=Kim). → [[kim-2024-normative-framework-dissociates-need\|AgRP=Need]]를 *어떻게 계산하는가*: 영양소 정체(McKnight)·미래 예측(Walker)·음식 가치/맛(Garfield·Aitken)·preingestive satiation(Kim). **약리**: GLP-1RA가 DMH^GLP-1R 억제 입력을 *식이 시에만* 잠재화해 AgRP를 끔 = 인간 체중감량의 cognitive·preingestive layer([[lee-2025-hijacked-brain-modern-obesity-cue\|hijacked brain]]·[[proposal-dmh-glp1r-human-imaging\|인간 번역 계획서]]).

## 행동 효과 (광유전·화학유전 실험)
- AgRP 뉴런 활성화 → 즉시·강력한 섭식 (몇 분 내).
- AgRP 뉴런 침묵 → 식이 감소.
- Ad libitum-fed 쥐에서도 AgRP mRNA가 식사 직전 상승 → 식사 시작 신호로 제안 (Watson 1999, Cummings 2001 인용).

## ★ Kim KS 2024 — AgRP = Need (NMPU 정량 backbone)
[[kim-2024-normative-framework-dissociates-need|Kim KS et al. 2024 Sci Adv]] (사용자 lab) 가 normative framework로 입증:
- **AgRP 활성 = Predicted Deficit (예측된 결핍)** 인코딩 — predicted gain (seeking, contact) 시 ↓, predicted loss (inaccessibility, abandon) 시 ↑.
- 짝지어진 [[concept-lateral-hypothalamus|LH^LepR]] = Motivation (accumulated need).
- 광유전 자극 dynamics: AgRP 자극 → 자극 종료 후 sustained eating (motivation accumulation으로 천천히 식음). LH^LepR 자극 → time-locked (motivation 직접 surge).
- → [[concept-need-motivation-pleasure-utility|NMPU framework]]의 첫 두 component 회로 정체 규명.

[[lee-2023-lateral-hypothalamic-leptin-receptor|Lee YH 2023 Nat Comm]] (사용자 lab) 가 NPY→LH^LepR **permissive gate** 분자 기전 입증: NPY가 LH 내 GABAergic interneuron의 sIPSC frequency 감소 (presynaptic disinhibition). Fasted state에서 NPY ↑ → LH^LepR tonic inhibition 해제 → food cue에 응답 가능.

## 임상 관련
- AgRP/NPY 신호 차단은 [[concept-ghrelin|ghrelin]] orexigenic 효과를 약화 → ghrelin 작용의 핵심 매개체.
- Bariatric surgery 후 ghrelin 감소 → AgRP 톤 감소 가능성 가설.

## Heterogeneity 확장 (Faour 2025)

### 위치별 AgRP cell types
- **ARC AgRP** — 전형. 그러나 Cai 2023 (Cell Rep)이 ad libitum feeding 비필수성 보고.
- **AgRP^Hindbrain** ★ (Bachor 2024 Mol Metab): AP·SubP·cNTS. 단식에 ↑, chemogenetic 활성으로 ARC 독립 hyperphagia + 체중 ↑.
- **Pituitary AgRP** (Liu 2023 JCI) — chemogenetic 억제 시 체중 ↓.
- **Adrenal AgRP** (Gupta 2017) — fasting에 ↑.

### Projection별 segregation
- AgRP→PVN (~30%, 가장 dense) = 식이 핵심 (melanocortin 의존).
- AgRP→LH = 식이 ↑ + iBAT 억제 + insulin resistance (NPY 매개).
- AgRP→aBNST = 식이 + iBAT 전사 reprogramming.
- AgRP→PVT = food odor attraction (NPY-Y5 매개).
- AgRP→MeA = territorial aggression 억제 → 식이 우선.
- AgRP→PBN·PAG·CeA = fiber 자극만으로는 식이 유도 못 함.

## De Solis 2024 model
- 식이 = **AgRP 활성 + POMC 억제 동시 + 협동** → PVN^Npy1R → NTS^Th+.
- Insulin·gluconeogenesis는 segregated autonomic branch.

## Circadian (Douglass 2024 Cell Metab ★)
- AgRP intrinsic circadian rhythm.
- **SCN → DMH^Trh → ARC AgRP feed-forward** — phase 매개.
- Prodynorphin DMH가 anticipatory behavior.

## Sensory · 회로 외 작용
- Food sight·smell 즉시 억제 (Chen·Knight 2015) — 학습 의존.
- AgRP 활성 (food 부재) → 강박행동·anxiolysis (Dietrich 2015 Cell).
- AgRP→MeA = 영토 공격 ↓.
- Negative valence: 학습에서 회피 강화.
- AgRP→LH^Glut = sweet sensitivity ↑ (Fu 2019).

## Anorexia nervosa
- *AGRP* 변이가 AN 위험 (Vink 2001, Dardennes 2007).
- ABA 모델: AgRP daily 활성 → running ↑ but **survival ↑** (Miletta 2020 Nat Metab).
- AgRP ablation + food restriction → 72시간 내 사망.

## Nutrient partitioning
- AgRP 활성 → RER ↑ (carb), lipid oxidation ↓, WAT browning 차단, iBAT 억제.
- NPY 매개 iBAT insulin resistance (Engström Ruud 2020).
- mTORC1 매개 (Burke 2017).

## 관련 페이지
- [[concept-arcuate-nucleus]] — 위치하는 핵.
- [[concept-pomc-neurons]] — 상호 길항 짝.
- [[concept-ghrelin]] — 직접 활성화 호르몬.
- [[concept-leptin]] — 직접 억제 호르몬.
- [[concept-lateral-hypothalamus]] — AgRP→LH 식이·iBAT.
- [[concept-paraventricular-nucleus]] — AgRP 가장 dense projection.
- [[concept-dorsomedial-hypothalamus]] — DMH^Trh→AgRP circadian.
- [[concept-melanocortin-system]] — α-MSH 길항.
- [[cummings-2001-preprandial-rise-in-plasma-ghrelin]] — ghrelin → NPY/AgRP 가설을 인간에서 지지.
- [[perakakis-2021-leptin-in-leanness-and-obesity]] — leptin → NPY/AgRP 억제 자세히.
- [[faour-2025-emerging-role-of-agrp]] — heterogeneity 종합.
- [[kim-2024-normative-framework-dissociates-need]] — AgRP=Need 정량 입증 (사용자 lab).
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] — NPY→LH^LepR disinhibition gate.
- [[concept-need-motivation-pleasure-utility]] — NMPU framework.
- [[park-2025-glucagon-like-peptide-1-and-hypothalamic]] — DMH GLP-1R → AgRP.
- [[liu-2026-granular-motivational-interaction-and]] — ARC^AgRP = feeding preparation phase hub(비섭식 동기 억제·음성 valence 부여) (Neuron 2026).
- [[kim-2025-mechanisms-of-glucagon-like-peptide]] — 사용자 lab 뇌 GLP-1R 리뷰; DMH GLP-1R → ARC AgRP 억제 회로를 brain-wide 맥락에서 정리 (APEM 2025).
- [[seiler-2026-dual-activation-of-mc3r-and]] — AgRP=MC3R/MC4R inverse agonist; 그 하류 수용체 dual-agonism 약리 (Nat Commun 2026).
- [[mcknight-2026-attenuated-hypothalamic-response-to]] — AgRP가 **칼로리 아닌 영양소 정체**에 반응(fructose≪glucose 억제); graded AgRP 억제가 food preference 지시; fructose 전용 PYY-Y2R-미주 경로 (Neuron 2026, Alhadeff lab).
- [[walker-2026-a-hypothalamic-circuit-for]] — ARC^AgRP의 상류 흥분성 입력 **PVH^Sim2**를 동정; 인지·맥락 예측 cue(먹이 부재·탐색 실패)가 PVH^Sim2→AgRP로 단식 초기 빠른 활성화 구동; gut/호르몬 feedback과 분리된 feedforward 예측 채널 (Neuron 2026, Lowell lab).
- [[garfield-2016-dynamic-gabaergic-afferent-modulation]] — AgRP preconsummatory suppression의 상류 **억제** 입력 **vDMH^LepR/pDYN GABAergic**(AgRP 100% vs POMC 9% 선택적); 음식 cue 시 활성·가치 부호화; Walker 2026 흥분성 입력의 거울상 (Nat Neurosci 2016, Lowell lab).
- [[krashes-2014-an-excitatory-paraventricular-nucleus-to]] — AgRP를 켜는 상류 **흥분성** 입력 **TRH⁺/PACAP⁺ PVH→AgRP**(글루타메이트+PACAP-PAC1) 동정; AgRP→PVH satiety GABA 역방향 = 상호 hunger 회로 (Nature 2014, Lowell lab).
- [[aitken-2024-negative-feedback-control-of-hypothalamic]] — AgRP가 hunger뿐 아니라 **bout-by-bout meal dynamics**도 조절: 음식 **맛(taste)**이 매 섭취 bout마다 AgRP를 일시 억제(DMH^LepR 매개)→satiation 앞당김 (Neuron 2024, Knight lab).
- [[kaduk-2026-glucose-levels-are-associated]] — AgRP가 신호하는 배고픔의 negative valence가 기분으로 번역되는 단계에 **의식적 지각(interoception)**이 매개(인간 CGM+EMA, Kroemer 랩).
- [[zhao-2026-direct-interoceptive-input-to-the]] — 섬엽 INS^LepR의 한 클러스터가 **섭취 직전↑·섭취 시↓**(AgRP와 유사)하며 포만상태 추적; AgRP hunger 회로의 피질 대응물.
- [[gruzdeva-2026-hunger-neurons-track-available-food]] — AgRP가 부호화하는 변수 목록에 **학습된 공간 거리**를 추가: 자유 foraging에서 먹이 접근 시 하강·이탈 시 상승하는 양방향 ramp, 단식 상태·학습 이후에만 출현하며 기억 회상 중에도 유지 (bioRxiv 2026, Yapici lab).
- [[jamieson-2026-neural-circuits-for-mammalian-parental]] — ★ **AgRP를 '섭식 뉴런'에서 '경쟁 동기 억제 스위치'로 재규정**: 절식 또는 ARC AgRP 활성화가 **GABA·NPY 방출로 MPOA 뉴런을 억제**해 처녀 암컷의 새끼 방치·공격을 유발하고, 역으로 새끼의 존재·흥분성 MPOA 활성은 배고픔 유발 섭식을 억제. 발정주기 프로게스테론:에스트라디올 비가 이 억제의 확률을 gating하며, **새끼 감작 경험이 있으면 절식해도 공격이 안 나타남**. 시상하부 밖에서는 절식이 **배측 봉선핵 Y1** 경유 NPY로 모성 돌봄을 억제 (NRN 2026). 개념 [[concept-medial-preoptic-area]].
- [[concept-medial-preoptic-area]] — AgRP/NPY의 억제 표적이자 양육 허브(동기 경쟁의 상대편).
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
