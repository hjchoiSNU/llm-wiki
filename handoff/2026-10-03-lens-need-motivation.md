# LENS: Need vs Motivation & State Gating / Computation

> 범위: 위키 내 LH 문헌을 **Need–Motivation(–Pleasure–Utility)** 축과 **state gating·계산(computation)** 관점에서만 읽는다. 모든 주장은 해당 페이지가 서술한 범위로 한정하고, 원문이 주장하지 않은 통합은 **(연결 가설)** 로 표시한다. 일반 생리·심리 배경은 **(배경지식)** 으로 표시한다.

---

## 1. 종합 서술

### 1.1 축의 정의와 lab의 위치

사용자 lab의 이론 backbone은 동기 행동을 **Need(예측된 결핍 알람) → Motivation(행동 구동력) → Pleasure(즉각 결과 교사) → Utility(지연 결과 교사)** 네 성분으로 분리한다 [[kim-2024-unified-theoretical-framework-underlying-regulation]], [[concept-need-motivation-pleasure-utility]]. 이 분리의 결정적 논거는 두 성분이 해리된다는 관찰이다 — 전쟁터 군인은 에너지 결핍(need)이 있어도 식욕(motivation)이 없고, 만복 상태에서 케이크는 need 없이 motivation을 만든다 [[kim-2024-unified-theoretical-framework-underlying-regulation]]. 중요한 점은 Need가 **현재 결핍이 아니라 예측된 결핍**으로 정의된다는 것이다: Need Nf(t) = Deficit D + Predicted change PC [[kim-2024-normative-framework-dissociates-need]].

이 framework는 [[kim-2024-normative-framework-dissociates-need]]에서 정량 모델로 구현된다. Motivation은 need의 적분 M(t) = ∫[a·N(t) − Leak]dt, 행동은 역치 돌파 B(t) = M(t) − K다. Need만으로 행동을 구동하면 행동이 끊기는 oscillation이 나오고, need를 motivation으로 누적하면 지속적·효율적 행동이 나온다는 시뮬레이션이 축 분리의 **기능적 이유**를 제공한다. 실험 검증은 naturalistic foraging의 사건별 부호로 이루어졌다 — predicted gain(shelter에서 자발적 seeking 개시, 음식 접촉)에서 ARC AgRP↓·LH^LepR↑, predicted loss 중 **inaccessibility**(문 닫힘)에서 AgRP↑이지만 LH^LepR는 변화 없음(접근 불가 시 motivation = 0), **abandon**(도달 불가 음식 포기)에서 AgRP↑ sustained·LH^LepR↓. 단일 trial 적합 + leave-one-out CV + AIC + inverted model 대조에서 AgRP = Need model, LH^LepR = Motivation model이 각각 압도적으로 적합했고, PCA/t-SNE·CEBRA latent embedding에서도 두 궤적이 분리된다 [[kim-2024-normative-framework-dissociates-need]]. 광유전 dynamics가 모델 예측과 일치한 것이 정체성을 못 박는다: AgRP 10초 활성 → 자극 후에도 **지속되는** 섭식(need가 motivation으로 누적), LH^LepR 10초 활성 → 자극 종료와 **동시에 즉시 중단**(motivation이 즉시 역치 아래로).

계산 방법론 자체가 이 lens의 자산이다 — GCaMP6s kernel 합성곱 후 raw trace와 직접 비교, AIC = N·ln(RSS/N) + 2K로 Need model·Motivation model·inverted model을 경쟁시키는 설계, permutation test, 그리고 CEBRA 기반 nonlinear latent embedding이 모두 한 논문에 들어 있다 [[kim-2024-normative-framework-dissociates-need]]. 이 틀은 갈증(subfornical organ)이나 경쟁 need(food vs water)로 확장 가능하다고 명시되어 있고, drive-reduction theory(Hull 1943)의 정량화·신경기질 식별로 위치된다. 임상 질문도 같은 파라미터 언어로 적힌다 — 비만은 Need 과잉인가, Motivation 적분 과다인가, Leak 감소인가 [[kim-2024-normative-framework-dissociates-need]].

### 1.2 Motivation 노드의 세포 정의와 Need→Motivation 전환 기전

LH^LepR이 Motivation encoder로 지정된 회로 기반은 [[lee-2023-lateral-hypothalamic-leptin-receptor]]이다. 수치가 핵심이다 — LH GABA 뉴런 중 food-specific(chocolate에 반응, Lego에 무반응)은 **8%뿐**이고, LH^LepR은 LH GABA의 **4%**에 불과하지만 그중 63%가 food-specific이어서 **food-specific LH GABA의 79%(63/80)** 를 차지한다. 즉 극소수 세포가 식이 관련 LH GABA 신호의 대부분을 매개한다. Microendoscopy에서 이 집단은 **seeking 전용 25% / consummatory 전용 39%** 로 분리되고 두 아집단은 sequential·exclusive하게 활성화된다 — 단일 세포가 두 phase를 cover하지 않는다. Photometry에서 LH^LepR 활성은 seeking 개시 **약 6초 전**부터 상승(3rd derivative 분석)하므로 seeking의 driver이지 consequence가 아니다.

Need→Motivation 전환의 분자 기전은 같은 논문의 **NPY permissive gate**다. LH^LepR은 NPY 수용체를 거의 직접 발현하지 않고, NPYR⁺ LH GABA 개재뉴런이 LH^LepR을 tonic하게 억제한다. NPY는 개재뉴런의 Gi를 켜서 LH^LepR을 **탈억제**한다(sIPSC frequency↓, amplitude 불변 = presynaptic; Y1·Y5 길항제로 완전 차단). 따라서 sated 상태(AgRP/NPY 낮음)에서는 LH^LepR이 tonic inhibition으로 잠겨 식이 cue에 무반응이고, fasted 상태에서는 탈억제되어 cue에 반응 가능해진다 [[lee-2023-lateral-hypothalamic-leptin-receptor]]. 이것이 위키 전체에서 가장 구체적인 **state gating 기전**이며, NMPU에서 AgRP(Need) → NPY → LH^LepR(Motivation)의 분자 연결이다.

### 1.3 세포 유형 간 분업: LepR / Vgat / Nts / Orexin / Gal

[[cheon-2025-lateral-hypothalamus-and-eating-cell]]은 LH를 세포 유형 × 4 아영역(amLH·alLH·pmLH·plLH) × 시간 phase 3차원으로 정리하고, LH를 NMPU의 **Motivation 통합 hub**로 배치한다. 시간 동역학 표가 축 매핑에 직접 쓰인다 — LH^Vgat·Lepr은 appetitive에서 상승하고 별도 subset이 consummatory에서 지속, **LH^Vglut2는 brake**(food contact 시 상승, 혐오 tastant에 더 강함), **Orx는 appetitive 내내 지속되다 식사 시작 시 급감**, **Mch는 섭취 중 지속 상승**(Orx의 정반대). 분자 중첩은 도구 해석을 제약한다: Nts 뉴런의 95%가 Gal 공발현, Nts는 약 80% Vgat/20% Vglut2, MC4R 뉴런의 약 75%가 Nts 공발현, 리뷰 기준 Lepr은 LH GABAergic의 약 20%(원저 실측은 4%).

LH^Vgat 전체 집단의 foundational 자료는 [[jennings-2015-visualizing-hypothalamic-network-dynamics]]다. 743 뉴런 단일세포 영상에서 appetitive(nose poke 반응 168/743)·consummatory(lick 반응 75/743) 세포가 거의 비중첩이고, 두 집단은 MCH·Orx와 0% 중첩이다. 축 분리 관점에서 결정적인 것은 **조작 양식별 비대칭**이다 — 화학유전 bulk 활성은 lick(소비)만 늘리고 nose poke·break point(동기)는 바꾸지 못하는데(p=0.24), taCasp3 ablation은 섭취·체중과 **break point까지** 낮춘다(t10=2.692, p=0.022). 즉 LH 안에서 Motivation 축과 consummatory 축은 분리 가능하고, bulk 활성은 소비 쪽으로 행동을 편향시킨다.

Orexin은 Need/Motivation 어느 쪽도 아닌 **Deficit 센서 + 상태 gate**로 읽는 것이 자료에 가깝다 [[yamanaka-2003-hypothalamic-orexin-neurons-regulate]]. 시냅스와 분리한 orexin 뉴런은 glucose 10→30 mM에서 8/10이 과분극·발화 정지, leptin 10 nM에 7/9 과분극(−47.6 → −62.1 mV), ghrelin 10 nM에 6/9 흥분(184.4%)하고 insulin에는 무반응이다 — **현재 혈중 지표**를 직접 감지한다. 그 출력은 섭식이 아니라 각성·탐색 운동이며, orexin/ataxin-3 마우스는 단식에도 각성 증가·NREM 감소·REM 잠복기 연장·탐색 운동 증가가 **모두 나타나지 않는다**(보행 속도는 정상). 따라서 행동 개시 역치 K를 낮추는 state gate로 모델에 들어갈 수 있다(연결 가설 — 원문은 NMPU를 언급하지 않는다).

Vglut2는 축 구조상 **brake**다 [[cheon-2025-lateral-hypothalamus-and-eating-cell]]. 가치 scaling에서도 GABA와 반대 부호를 보이고(혐오 용액에서 GABA 양·Glut 음), 섭취 중 Glut 광억제는 혐오 용액 섭취를 오히려 늘린다 [[gordon-2026-lateral-hypothalamic-control-of]]. 만성 HFD에서는 이 brake가 상류 PVN^CRH에 의해 억제되어 과식이 나온다 [[wang-2026-a-hypothalamic-circuit-links]]. 즉 LH 안에서 Motivation은 **GABA engine과 Glut brake의 차**로 구현될 수 있고, 그 비율이 바로 가치·valence의 연속축이다 [[gordon-2026-lateral-hypothalamic-control-of]].

Nts 축은 **활동·에너지 지출 축**을 가리킨다. LHA LepRb의 약 60%가 Nts⁺이고(역으로 LHA Nts의 약 30%가 LepRb⁺), Nts 뉴런 한정 LepRb 결손은 섭식을 거의 바꾸지 않으면서(5주에만 미미, 체중 보정 후 NS) ambulatory 운동량·VO₂를 낮추고 조기 비만을 만든다 [[leinninger-2011-leptin-action-via-neurotensin]]. 같은 논문의 LepRb^Nts → 국소 orexin 뉴런 GABA 억제 모델(26 h 단식의 OX c-Fos 상승이 KO에서 소실)은 LH 내부 micro-circuit을 phase 설계에 넣을 근거다.

### 1.4 State gating: hunger, anxiety, social, thermal, 그리고 가치 scaling

LH^LepR의 출력이 **단일 hunger 축이 아니라 다중 욕구의 arbitration**이라는 그림은 Korotkova lab 계열에서 온다. [[petzold-2023-complementary-lateral-hypothalamic-populations]]에서 LH^LepR은 배고픔이 커질수록 섭식·음수를 **억제**하고 사회(특히 이성) 접근을 우선하며(수컷 LepR 60%가 이성에 반응, female-responsive↔food-responsive 역상관), LH^Nts는 갈증을 부호화해 음수를 촉진하고 사회를 억제한다. [[korotkova-2026-balancing-acts-lateral-hypothalamic]]은 이를 **hunger × safety(anxiety) × social 3-drive arbitration** framework로 격상하고, 행동 전환 ~2초 전에 LH beta oscillation(15–30 Hz)과 transition cell이 선행한다는 시간 동역학을 더한다.

안전 축의 1차 자료는 [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal]]이다. LH^LepR은 anxiogenic 자극 자체에 흥분하고(EPM open arm-excited 34% vs closed 8%, P=1.1e-9), 활성화는 불안을 줄이며(open arm 체류 P=0.0386 opto / 0.0028 chemo, 이동거리 불변), LH에서 LepR 수용체만 제거하면 불안이 커진다(P=0.0027). 기능적 귀결은 **맥락 특이적**이다 — 밝고 새로운 arena(NSFT, 22 h 금식)에서는 섭식 개시를 앞당기지만(P=0.0286) 익숙하고 어두운 enclosure에서는 광활성이 섭식 지연을 전혀 바꾸지 못한다. 상류에서 PFC→LH 입력이 LH^LepR을 억제하는데, 그 억제는 **고불안 개체에서만** 나타난다(포만 P=0.034 / 공복 P=0.005; 억제 크기 × 불안 R=−0.86). 이로부터 NMPU 행동 산출을 `Behavior ∝ Motivation × g(안전도)`로 확장하고 g를 LH^LepR 활동으로 읽는 연결 가설이 세워진다(원문 주장 아님). 반대로 [[wang-2026-a-hypothalamic-circuit-links]]는 만성 HFD에서 ArcAgRP→PVN^CRH→LHA^Glu가 재결합해 **불안과 과식이 함께 가는** 축을 보이고, 하류 LHA의 CRHR2는 과식만 전담한다(Astressin 2B → 과식만↓, 불안 무변). 즉 LH 안에서 불안–섭식 커플링의 부호가 세포 유형별로 갈린다.

열·체액·운동 상태까지 넓히면 Motivation 노드의 출력이 섭취량에 국한되지 않는다. [[de-vrind-2019-effects-of-gaba-and]]에서 포만 상태의 LH^LepR hM3Dq 수 시간 활성은 바닥 chow 섭취를 낮추고(7 h P=5.3e-8) 수평 운동을 올리며(t7=−4.820, P=0.002) 눈 온도를 올려 3일 반복 시 체중을 낮춘다. 단 섭취 감소는 **먹이가 쉽게 닿을 때만**(cage-top에서는 무변) 나타난다. [[lee-2026-distinct-lateral-hypothalamic-gabaergic]]은 LH^Vgat을 **valence 무관 salience ensemble**(혐오 열자극과 음식 cue에 함께 반응, heat vs caged PB r=0.59; 동공을 키우는 중립 tone에는 무반응)과 **value-scaled consumption ensemble**(먹이·물·고형식 공통, food vs water r=0.62; 금식+100% > 25% 희석 ≈ 자유급식, Ex-4로 진폭 감소)로 분해한다 — 전자는 Motivation 활성화, 후자는 Need × 영양가가 곱해진 consummatory 신호의 단일세포 지표 후보다(연결 가설).

가치 scaling의 회로 readout 후보는 [[gordon-2026-lateral-hypothalamic-control-of]]의 **LHA^Ratio(GABA/Glut)** 다. FR:Suc에서 LH^GABA는 가치에 강하게 비례하고 LH^Glut는 scaling이 없으며, 혐오 용액(NaCl)에서는 GABA가 양·Glut가 음으로 scaling해 비율이 가치·valence를 하나의 연속축으로 표현한다. 이 균형이 선조체 DA를 전후축 지형으로 인과 배치하고(LH^GABA → 전측 NAc DA↑, LH^Glut → TS DA↑ z=14.65 vs 대조 0.41), 그 DA는 섭취 **개시(bout 수)** 만 강화하고 지속은 강화하지 않는다. 같은 물에 대한 DA가 물이 최고가치인 WR:NaCl에서 최대이고 그 차이가 전측·복측에만 남는다는 결과는 **Need가 가치 채널만 변조하고 감각운동 채널은 건드리지 않는다**는 읽기를 가능하게 한다(연결 가설). 시간축 분해는 [[liu-2026-granular-motivational-interaction-and]]가 제공한다 — preparation(ARC^AgRP) → initiation(LH^GABA) → maintenance(DR^GABA·CeA^Htr2a) → interruption → termination(DVC·PBN)이고, NMPU의 성분 분해와 **직교 보완** 관계로 명시된다.

### 1.5 Pleasure·Utility 축과의 경계, 그리고 측정의 문제

Need·Motivation 축을 깨끗하게 읽으려면 Pleasure·Utility 축과의 경계를 측정 수준에서 정해야 한다. NMPU는 Pleasure를 즉각 결과 교사(초~분, NAc·VP·IC·도파민), Utility를 지연 결과 교사(시간~일, NTS·VMH·BLA·LH^HON)로 두고, Utility가 Pleasure·Need·Motivation 알고리즘 자체를 **reshape**한다고 본다 [[kim-2024-unified-theoretical-framework-underlying-regulation]], [[concept-need-motivation-pleasure-utility]]. 이 reshape 축에 LH가 들어올 수 있는 구체적 지점이 두 군데 있다. 첫째, LH^LepR→VTA 말단 억제가 Pavlovian 변별 학습의 asymptote를 **올리고** 그 효과가 소거 시험까지 지속된다는 결과(ArchT P=0.0032, ChR2는 변별 소멸 p>0.99)는, 이 경로가 '기대 보상 크기를 전달해 오차를 줄이는 교사 신호'로 작동함을 시사한다 — NMPU 어휘로는 **Utility→Motivation 되먹임** 회로 후보다(연결 가설) [[siemian-2021-lateral-hypothalamic-lepr-neurons]]. 둘째, 같은 세포군의 leptin 작용이 24 h 척도에서 VTA *Th*(~2.5배)·NAc DA 함량(~40%)을 바꾼다면, Motivation 노드의 출력은 초 단위 phasic 신호만이 아니라 하류 Pleasure/Utility 하드웨어의 **gain 설정값**일 수 있다(연결 가설) [[leinninger-2009-leptin-acts-via-leptin]]. 단 생리적 Nts 한정 LepRb 결손에서는 *Th*·DA 함량이 불변이고 대신 NAc shell 유발 DA 진폭↓·t₁ᐟ₂↑(DAT 기능 저하 추정)만 나타나므로, 이 주장은 **leptin 결핍 상태에 한정**해야 한다 [[leinninger-2011-leptin-action-via-neurotensin]].

개시와 지속의 분리도 축 경계에 걸린다. 선조체 DA 자극은 섭취의 **bout 수(개시)** 만 늘리고 bout 길이(지속)는 늘리지 않으며, DMS·DLS 자극은 오히려 licks/bout를 낮춘다 [[gordon-2026-lateral-hypothalamic-control-of]]. 같은 분리가 LH 자체에서도 이미 보고되었다 — LH^Vgat bulk 화학유전 활성은 lick(소비)만 늘리고 break point(동기)는 바꾸지 못한다 [[jennings-2015-visualizing-hypothalamic-network-dynamics]]. 즉 **개시 = Motivation, 지속 = 비선조체(Pleasure 쪽)** 라는 분업이 LH–선조체 축을 가로질러 반복된다(연결 가설).

측정 자체가 축 해석을 좌우한다는 교훈이 셋 있다. ① **phase 혼동**: 섭취·탐색이 동시 가능한 대형 챔버에서는 LH^LepR 광활성 효과가 사라지므로, 먹이통 무게 단일 지표는 두 아집단의 동시 활성을 상쇄로 읽을 수 있다 [[lee-2023-lateral-hypothalamic-leptin-receptor]]. ② **갉기/spillage**: LH^Vgat 화학유전 활성의 chow '섭취 증가'는 대부분 갉기로 생긴 부스러기였고, chow 가루를 따로 칭량하면 실제 섭취는 불변이었다(나무 블록 무게↓ t5=6.651, P=0.001) [[de-vrind-2019-effects-of-gaba-and]]. ③ **구강운동 공변량**: 금식 동물은 같은 양을 받아도 턱 움직임이 크므로, jaw를 통계적으로 통제하지 않으면 value-scaling을 운동 artifact와 구별할 수 없다 [[lee-2026-distinct-lateral-hypothalamic-gabaergic]]. 사용자 lab의 consummatory 지표에 갉기 분리와 jaw 공변량을 넣는 것은 선택이 아니라 요구다.

마지막으로 **상태 축의 목록이 계속 늘어나고 있다.** hunger(NPY 게이트 [[lee-2023-lateral-hypothalamic-leptin-receptor]]), 갈증·체액(LepR의 음수 억제, Nts의 갈증 부호화 [[petzold-2023-complementary-lateral-hypothalamic-populations]]; IG 물 반응의 지연 상승이 구강 ensemble과 우연 수준으로만 겹침 [[lee-2026-distinct-lateral-hypothalamic-gabaergic]]), 사회(이성 반응 60%, food-responsive와 역상관 [[petzold-2023-complementary-lateral-hypothalamic-populations]]), 안전·불안(맥락 의존 gate, PFC→LH 억제 [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal]]), 체온·대사(LepR 활성 → 눈 온도↑·운동↑ [[de-vrind-2019-effects-of-gaba-and]]; 열자극이 salience ensemble을 동원 [[lee-2026-distinct-lateral-hypothalamic-gabaergic]]), 그리고 혈당(고혈당이 orexin을 누름 [[yamanaka-2003-hypothalamic-orexin-neurons-regulate]]). [[korotkova-2026-balancing-acts-lateral-hypothalamic]]의 **multidimensional coding** 주장 — LH 뉴런의 정체 = 분자 marker × oscillatory phase × connectivity × stimulus response의 교집합이며 단일 분자 label로 환원 불가 — 은 이 목록에 대한 요약이자 경고다.

### 1.6 lab의 입장 요약

세 가닥이 수렴한다. ① Need와 Motivation은 서로 다른 회로가 다른 계산을 수행하며, 그 차이는 **적분·누적 여부**와 **광자극 종료 후 dynamics**로 조작적으로 판별된다 [[kim-2024-normative-framework-dissociates-need]]. ② Motivation 노드는 phase별로 분업된 극소수 세포(LH^LepR 25%/39%)이며 상류 need 신호(NPY)의 **허가(permissive gate)** 없이는 cue에 반응하지 않는다 [[lee-2023-lateral-hypothalamic-leptin-receptor]]. ③ Motivation→행동 전환은 단일 hunger 축이 아니라 안전·사회·체액·온도·가치 맥락이 곱해진 gated 변환이다 [[korotkova-2026-balancing-acts-lateral-hypothalamic]], [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal]], [[petzold-2023-complementary-lateral-hypothalamic-populations]]. 번역 축에서는 macaque LHA GABAergic 화학유전 활성이 **palatable food 전용**으로 goal-directed 행동·operant 동기를 올리고(unpalatable·물·비식품 무효) 설치류와 달리 갉기가 없다는 점이 보고되어 있다 [[ha-2024-hypothalamic-neuronal-activation-non-human]].

---

## 2. NMPU 매핑 표

| 논문 | 세포/회로 | 조작·측정 | 결과 | NMPU 축 | 근거 강도 |
|---|---|---|---|---|---|
| [[kim-2024-normative-framework-dissociates-need]] | ARC^AgRP vs LH^LepR (mouse) | Photometry + normative model 적합(AIC·LOO CV·inverted control) + ChR2 10 s | gain 사건: AgRP↓/LepR↑; inaccessibility: AgRP↑/LepR 무변; abandon: AgRP↑ sustained/LepR↓. AgRP 자극 후 섭식 지속 vs LepR 자극 종료 시 즉시 중단 | AgRP = **Need**(predicted deficit), LH^LepR = **Motivation**(∫need) | 강함(상관+인과+모델 비교) |
| [[lee-2023-lateral-hypothalamic-leptin-receptor]] | LH^LepR (pmLH, AP −1.5·ML 0.9, 수컷) | Microendoscopy + phase-isolated ChR2/NpHR + ex vivo NPY | seeking 25%/consummatory 39% 분리; seeking 6 s 전 onset; phase isolation 시 각각↑, 대형 챔버 무효; NpHR consummatory 섭식↓; NPY → 개재뉴런 Gi → 탈억제(sIPSC freq↓) | **Motivation** 세포 정의 + **Need→Motivation 전환 게이트**(NPY) | 강함(단일세포+인과+시냅스) |
| [[cheon-2025-lateral-hypothalamus-and-eating-cell]] | LH 전체 세포 유형 × 4 아영역 × phase | 리뷰 종합 | Vgat/Lepr appetitive+별도 consummatory subset; Vglut2 = brake; Orx = appetitive 지속·식사 시작 시 급감; Mch = 섭취 지속 | LH = **Motivation 통합 hub**; Vglut2 = 억제 축; Orx/Mch = 상태·consummatory 성분 | 중간(2차 종합) |
| [[siemian-2021-lateral-hypothalamic-lepr-neurons]] | LH^LepR vs LH^Vgat (ML ±1.10, 수컷+암컷) | taCasp3·ChR2/NpHR·hM3Dq/hM4Di + miniscope | LepR: 체중 p=0.95·섭취 p=0.90·ChR2 섭식 p=0.21 무변; Pavlovian 변별 완전 실패(block5 p=0.50); RTPP 양방향; CS+ centroid 2.00 vs Vgat 1.26; LepR→VTA ArchT → 변별 강화(소거까지 P=0.0032); sucrose CPP 차단·cocaine CPP 무효 | **Motivation = 접근·학습 변수**(소비 집행 아님); LepR→VTA = **Utility→Motivation 되먹임** 후보(연결 가설) | 강함(인과 3종 + 단일세포) |
| [[de-vrind-2019-effects-of-gaba-and]] | LH^LepR, LH^Vgat (AP −1.2, 수컷 n=8/6) | hM3Dq + CNO 1 mg/kg, 7 h 섭취·운동·눈 온도·3일 체중 | LepR: 바닥 chow↓(P=5.3e-8)·운동↑(P=0.002)·체온↑·체중↓, cage-top 무변; Vgat: 갉기↑(블록 P=0.001)·운동↓·실제 섭취 불변 | Motivation 노드 출력이 **에너지 소비(운동·체온)** 로 분기; consummatory 운동 프로그램과 Motivation 분리(연결 가설) | 중간(소표본·tonic bulk·좌표 해상도) |
| [[leinninger-2009-leptin-acts-via-leptin]] | LHA LepRb (GABA, VTA 투사) | LepRb^EGFP·pSTAT3·patch·Ad-iZ/EGFPf·intra-LHA leptin | LepRb 전부 GAD67⁺·MCH/OX 비중첩; VTA 조밀·선조체 투사 없음; leptin 100 nM 34% 탈분극·일부 과분극; intra-LHA leptin 섭식·체중↓; ob/ob 250 pg → VTA *Th* ~2.5배·NAc DA ~40%↑(intra-VTA 무효); **36 h 단식은 LepRb c-Fos를 12%→5%로 낮춤** | Motivation 노드의 해부·약리 기원; Motivation이 하류 Pleasure/Utility 하드웨어의 **장기 gain**을 설정(연결 가설) | 강함(해부) / 중간(약리≠세포 조작) |
| [[leinninger-2011-leptin-action-via-neurotensin]] | LepRb^Nts (LHA LepRb의 ~60%) | Nts 한정 LepRb 결손(Nts-LepRbKO) + CLAMS + amperometry | 조기 비만; 섭식은 5주에만 미미(보정 후 NS); 운동량·VO₂↓; 26 h 단식 OX c-Fos 상승 소실; VTA *Th*·NAc DA 함량 불변, NAc shell 유발 DA 진폭↓·t₁ᐟ₂↑ | Motivation의 **활동·각성 예산** 성분; LepR/Nts 도구 통약 문제 | 중간(수용체 결손 ≠ 세포 활성 조작) |
| [[petzold-2023-complementary-lateral-hypothalamic-populations]] | LH^LepR vs LH^Nts (AP −1.3) | 심부 Ca²⁺ 영상 + opto/chemo + leptin i.p. | LepR: 급성 제한 후 활성 → feeding rebound 억제(만성 무효), 음수도 억제, 사회(이성) 우선(수컷 60% 이성 반응); Nts: 갈증 부호화·음수↑·사회↓ | Motivation = **다중 need arbitration**(섭식·음수 억제 + 사회 우선) | 중간~강함(상태 의존성 큼) |
| [[korotkova-2026-balancing-acts-lateral-hypothalamic]] | LH 전체(LepR 중심) | 리뷰 | hunger×safety×social 3-drive arbitration; LepR = moderate hunger에서 섭식↓·사회↑·불안↓; beta(15–30 Hz)+transition cell ~2 s 선행; ABA에서 LepR 활성 → 강박 운동 중단 | Motivation = **우선순위 결정기**; 안전·사회를 need와 동렬에 배치 | 중간(2차 종합·일부 서술 정밀화 필요) |
| [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal]] | LH^LepR (AP −1.3·ML ±0.9, 암컷 중심) | miniscope 193 cells/16 mice + ChR2/hM3Dq + LepR-flox + PFC→LH ChRmine/eNPAC2.0 | open arm-excited 34% vs 8%; 활성 → 불안↓(P=0.0386/0.0028); 수용체 제거 → 불안↑(P=0.0027); PFC→LH 억제는 고불안에서만(R=−0.86); NSFT 섭식 개시 앞당김(P=0.0286)이나 익숙·어두운 맥락 무효; ABA running 기저로↓(P=0.004) | **Motivation × g(안전도)** 의 g를 LH^LepR이 운반(연결 가설); 맥락 gate | 강함(상관+양방향 인과) |
| [[wang-2026-a-hypothalamic-circuit-links]] | ArcAgRP → PVN^CRH → LHA^Glu (수컷, 12주 HFD) | photometry + 투사·말단 특이 chemo/opto + CRHR2 길항·KD | 불안-취약 아형만 과식·체중↑; 상류 억제 → 불안+과식 동시↓; LHA^Glu 억제 → 섭취↑(불안 무변); CRHR2 차단 → **과식만↓** | Need 축(AgRP)에 **정서 modulator**(PVN^CRH) 주입; LHA^Glu = Motivation brake | 중간~강함(HFD·수컷 한정) |
| [[lee-2026-distinct-lateral-hypothalamic-gabaergic]] | LH^Vgat (head-fixed 2-photon) | 세션 간 동일 세포 추적 + Ex-4 100 µg/kg | salience ensemble(heat vs caged PB r=0.59, 중립 tone 무반응) vs consumption ensemble(food vs water r=0.62; 금식>희석≈포만; Ex-4로 진폭↓) 거의 비중첩 | salience = **Motivation 활성화**, value-scaled consumption = **Need×영양가 consummatory 신호**(연결 가설) | 중간(전적으로 상관, 인과 없음) |
| [[gordon-2026-lateral-hypothalamic-control-of]] | LH^GABA / LH^Glut + 선조체 7 subregion DA | dual-color photometry + opto 양방향 + GRAB-DA(223 fibers/47 mice) | LHA^Ratio가 가치·valence 연속축 추적; GABA→전측 DA↑, Glut→TS DA↑/전측↓; 섭취 중 GABA 억제 → 물 섭취↓; DA는 **bout 수(개시)** 만 강화; 상대가치 효과는 전측·복측 한정 | LHA^Ratio = **Motivation 축의 회로 readout**; 개시=Motivation / 지속=비선조체(Pleasure 쪽) | 강함(다지점 인과+GLM) |
| [[yamanaka-2003-hypothalamic-orexin-neurons-regulate]] | LH orexin (mouse, 해리·절편·ataxin-3) | patch(glucose·leptin·ghrelin) + Northern + EEG/EMG + open field | glucose 30 mM 8/10 과분극, leptin 7/9 과분극, ghrelin 6/9 흥분(184%), insulin 무효; ataxin-3는 단식 유발 각성·탐색 운동 증가 소실(보행 속도 정상) | **Deficit(D) 센서 + 행동 역치 K의 state gate**(연결 가설); Need/Motivation과 별도 자리 | 강함(세포·발현·행동 3층) |
| [[liu-2026-granular-motivational-interaction-and]] | feeding 5 phase 회로 지도 | 리뷰 | ARC^AgRP=preparation(비섭식 동기 억제), LH^GABA=initiation, DR^GABA/CeA^Htr2a=maintenance, DVC/PBN=termination; mPFC→LH beta → switch cell | NMPU 성분 분해와 **직교 보완**(시간적 sub-state) | 중간(2차 종합) |
| [[jennings-2015-visualizing-hypothalamic-network-dynamics]] | LH^Vgat (743 뉴런/6마리) | ChR2/eArch + hM3Dq + taCasp3 + microendoscopy | appetitive(168)·consummatory(75) 세포 비중첩; MCH/Orx 0% 중첩; **bulk hM3Dq → lick만↑, break point 불변(p=0.24)**; ablation → 섭취·체중·break point 모두↓(불안·운동 정상) | Motivation hub의 실험적 뿌리; LH 내 **Motivation 축 vs consummatory 축 분리** | 강함(4층 조작) |
| [[ha-2024-hypothalamic-neuronal-activation-non-human]] | macaque LHA GABAergic (3 마리) | AAV9-hDlx-hM3Dq + CNO 10 mg/kg + 자연주의·CANTAB FR1 + rs-fMRI | palatable food 전용 goal-directed 행동↑(unpalatable·물·비식품 무효), operant latency↓·성공↑; LHA-frontal FC↑·intra-frontal FC↓(상관 수준); 갉기 없음 | Motivation 축의 **영장류 번역**; 보상 특이성 | 중간(N=3, 세포타입 비선택, FC는 상관) |

---

## 3. 위키 내 충돌

**(1) LH^LepR 활성화는 섭취를 늘리는가, 줄이는가, 안 바꾸는가**
- 측 A: phase-isolated 조건에서 활성 → seeking·consummatory **각각 증가**, NpHR → consummatory 섭식 감소 [[lee-2023-lateral-hypothalamic-leptin-receptor]]. 10 s 활성은 섭식을 유발하되 종료와 함께 즉시 중단 [[kim-2024-normative-framework-dissociates-need]].
- 측 B: 어떤 조작(ablation·opto·chemo)도 섭취·체중을 **바꾸지 않음**(ChR2 p=0.21, NpHR p=0.32) [[siemian-2021-lateral-hypothalamic-lepr-neurons]]; 급성 제한 직후 활성 → feeding rebound **억제** [[petzold-2023-complementary-lateral-hypothalamic-populations]]; 포만 tonic 활성 → 바닥 chow **감소** [[de-vrind-2019-effects-of-gaba-and]].
- 가능한 화해: 부호 충돌이 아니라 **조건 좌표계** 문제다. 네 축이 체계적으로 다르다 — ① 과제 구조(phase-isolated vs 섭취·탐색 동시 가능; 측 A 자신이 대형 챔버에서 효과 소실을 보고), ② 상태(포만 / 급성 제한 직후 / 만성 제한 / 자유급식), ③ 좌표(pmLH AP −1.5·ML 0.9 vs alLH 경계 ML ±1.10 vs anterior AP −1.2~−1.3), ④ 먹이 접근성(바닥 chow에서만 감소, cage-top 무변) [[de-vrind-2019-effects-of-gaba-and]]. 여기에 ⑤ **맥락 불안도**가 다섯 번째 변수로 추가된다 — anxiogenic 맥락에서만 섭식 개시를 앞당기고 익숙·어두운 맥락에서는 무효 [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal]]. 네 결과를 모두 살리는 읽기는 "LepR = 섭취량 구동기"가 아니라 **"조건부 개시 gate"** 다.

**(2) 불안 축에서 LH^LepR는 필요한가**
- 측 A: ChR2·hM3Dq 활성 → 불안↓, LepR 수용체 제거 → 불안↑(P=0.0027), PFC→LH 억제는 고불안 개체 한정 [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal]].
- 측 B: taCasp3 ablation에서 open field·marble burying 불안 유사 행동 **무변** [[siemian-2021-lateral-hypothalamic-lepr-neurons]].
- 가능한 화해: 조작 대상(세포 제거 vs 수용체만 제거·세포 보존), 과제(OF·marble burying vs EPM·NSFT), 좌표(ML ±1.10 vs ±0.9), 성별(혼합 vs 암컷 중심)이 다르고, 측 A의 효과가 **고불안 개체에 국한**되므로 코호트 평균 설계에서는 묻힐 수 있다. 섭취 축에서는 두 논문이 수렴한다(익숙·어두운 맥락에서는 활성화가 무효).

**(3) Motivation 노드를 켜면 섭취가 늘어야 하는가 (NMPU 1차 예측의 반례)**
- 측 A: M = ∫[a·N − Leak]dt 틀의 1차 예측은 Motivation 노드 활성 → 추구·섭취 증가 [[kim-2024-normative-framework-dissociates-need]].
- 측 B: 포만 동물에서 같은 세포를 수 시간 켜면 **운동만 늘고 섭취는 오히려 줄어든다** [[de-vrind-2019-effects-of-gaba-and]].
- 가능한 화해: 세 해석이 구별되지 않는다 — ① Motivation이 목표 없는 locomotion으로 소비되어 근접 섭취와 경쟁, ② seeking·consummatory 아집단(25%/39% [[lee-2023-lateral-hypothalamic-leptin-receptor]])을 동시에 켜서 상쇄, ③ 비생리적 활성 수준. 시간척도(10 s opto vs 수 시간 chemo)와 phase 특이성이 결정적 변수이므로, 같은 동물에서 phase-isolated 과제와 tonic 조작을 교차 적용해야 분해된다.

**(4) 단식은 LH^LepR를 켜는가**
- 측 A: 단식 상태에서 NPY 탈억제로 LH^LepR이 cue에 반응 가능해지고 [[lee-2023-lateral-hypothalamic-leptin-receptor]], seeking·contact 사건에서 활성이 올라간다 [[kim-2024-normative-framework-dissociates-need]].
- 측 B: 36 h 단식은 LHA LepRb c-Fos를 12%±3% → 5%±1%로 **낮춘다**(p=0.05) [[leinninger-2009-leptin-acts-via-leptin]].
- 가능한 화해: 측정 변수의 층위가 다르다 — **tonic Fos(사건 없는 정적 활성)** vs **cue·seeking 사건 시점의 Ca²⁺ 동역학**. "단식이 LH^LepR를 tonic하게 켠다"는 서술은 쓸 수 없고, "단식이 **event 반응성(gain)** 을 허가한다"가 두 자료를 모두 설명한다. NPY 게이트 모델은 정확히 후자다.

**(5) LepR와 Nts는 상보·길항 쌍인가, 교집합이 큰 두 표지인가**
- 측 A: LepR(섭식·음수 억제·사회 우선) vs Nts(음수 촉진·사회 억제)의 **상보·길항** [[petzold-2023-complementary-lateral-hypothalamic-populations]], [[korotkova-2026-balancing-acts-lateral-hypothalamic]].
- 측 B: LHA LepRb의 **약 60%가 Nts⁺**(역으로 Nts의 ~30%가 LepRb⁺) [[leinninger-2011-leptin-action-via-neurotensin]]; 리뷰 기준 Nts의 95%가 Gal 공발현 [[cheon-2025-lateral-hypothalamus-and-eating-cell]].
- 가능한 화해: 기능 분기는 **비중첩 분율**(LepR⁺Nts⁻, LepR⁻Nts⁺)에서 나올 수 있다. 실제로 불안 축에서 LH^Nts는 완전히 무반응이고(open-excited 6% < closed 14.6%, P=0.0055; OF chemo 무효) LH^LepR만 효과를 보이므로, 항불안 기능은 LepR⁺ 특이 또는 LepR⁺Nts⁻ 성질이라는 읽기와 60% 중첩이 양립한다 [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal]].

**(6) LH cue 반응 세포는 food-specific인가, valence 무관 salience인가**
- 측 A: LH GABA 중 food-specific은 8%뿐이고, 그 79%가 LepR이다 [[lee-2023-lateral-hypothalamic-leptin-receptor]].
- 측 B: LH^Vgat cue 반응 ensemble은 혐오 열자극에도 반응한다(r=0.59) [[lee-2026-distinct-lateral-hypothalamic-gabaergic]]; nose-poke 반응 세포를 appetitive로 해석한 원전도 분자 정체를 열어 두었다 [[jennings-2015-visualizing-hypothalamic-network-dynamics]].
- 가능한 화해: "변별하는 소수 vs 변별하지 않는 다수"로 수렴 가능하다 — 단일세포에서 **LH^LepR만 CS+/CS−를 변별**하고(centroid 2.00) LH^Vgat 전체는 변별하지 않는다(1.26) [[siemian-2021-lateral-hypothalamic-lepr-neurons]]. 단 자유행동 1-photon vs head-fixed 2-photon, 대조 자극(Lego vs 열자극)이 달라 비율을 직접 비교하면 안 된다.

**(7) 불안은 섭식을 막는가, 과식을 만드는가**
- 측 A: 불안이 섭식을 막고 LH^LepR이 그것을 푼다 [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal]].
- 측 B: 만성 HFD에서 불안과 과식이 함께 가고, 불안을 약으로 끄면(midazolam 0.2 mg/kg) 과식이 줄어든다 [[wang-2026-a-hypothalamic-circuit-links]].
- 가능한 화해: **세포 유형과 식이 조건이 다르다** — LH^LepR(GABA, ABA·NSFT) vs LHA^Glu(brake 해제, 12주 HFD). 같은 LH 안에서 불안–섭식 커플링의 부호가 세포 유형별로 갈린다는 그림으로 병기하면 임상 현상(불안성 제한 vs 정서적 과식)의 이질성과 호응한다. 측 B의 CRHR2는 과식만 매개하고 불안은 건드리지 않으므로 두 축은 하류에서 분리된다.

**(8) 섭취 중 value-scaling GABA 집단은 LH^LepR인가**
- 측 A: LH^GABA가 FR:Suc에서 가치에 강하게 비례 scaling하고 전측 선조체 DA와 양의 결합을 보인다 [[gordon-2026-lateral-hypothalamic-control-of]].
- 측 B: LH^LepR 조작은 섭취 자체를 전혀 바꾸지 못하고 cue 변별·place preference만 바꾼다 [[siemian-2021-lateral-hypothalamic-lepr-neurons]].
- 가능한 화해: 섭취 중 sustained(2–3 s) value-scaling은 **LepR이 아닌 다른 GABA 아집단**일 수 있고, LepR은 LH→VTA 축의 '기대 보상 relay/학습' 성분을 운반할 수 있다. 다만 측 A의 consummatory LepR subset(39%) [[lee-2023-lateral-hypothalamic-leptin-receptor]]이 어느 쪽인지는 미정이므로 LepR-Cre × Vglut2-Flp dual-color 재현이 필요하다.

**(9) LH^GABA는 개시 전담인가, 유지에도 관여하는가**
- 측 A: LH^GABA = initiation phase 전담 hub [[liu-2026-granular-motivational-interaction-and]].
- 측 B: consummatory(lick) 반응 세포 75/743이 별도로 존재하고 bulk 활성은 소비를 편향시킨다 [[jennings-2015-visualizing-hypothalamic-network-dynamics]]; consumption ensemble은 섭취 10 s 내내 지속 반응하고 value에 따라 조절된다 [[lee-2026-distinct-lateral-hypothalamic-gabaergic]]; LepR consummatory subset 39% [[lee-2023-lateral-hypothalamic-leptin-receptor]].
- 가능한 화해: 측 A는 bulk photometry·인과 분류 근거이고 측 B는 단일세포 상관이다. **해상도 차이**로 병기하되, 지속형 하위집단이 bulk 신호에서 가려지는지가 검증 과제다.

---

## 4. 미해결 질문

1. **Leak과 K의 세포 기질은 무엇인가.** M = ∫[a·N − Leak]dt, B = M − K에서 a(적분 이득)·Leak·K가 각각 어떤 회로 요소인지 미지다 [[kim-2024-normative-framework-dissociates-need]]. NPY 탈억제 게이트가 a인가 K인가 [[lee-2023-lateral-hypothalamic-leptin-receptor]], orexin이 K를 낮추는가 [[yamanaka-2003-hypothalamic-orexin-neurons-regulate]]는 구별 가능한 예측을 낸다.
2. **seeking(25%)·consummatory(39%) 아집단이 분자·공간·투사 좌표에서 어떻게 갈리는가.** Gal⁺/Ebf1⁺ vs Tac1⁺/Htr2c⁺/Opcml⁺ 두 Lepr⁺ 클러스터 [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal]], Nts 60% 중첩 [[leinninger-2011-leptin-action-via-neurotensin]], salience vs consumption ensemble [[lee-2026-distinct-lateral-hypothalamic-gabaergic]] 중 어느 축과 대응하는가.
3. **아영역(pmLH vs amLH/alLH)이 섭취 부호를 가르는가.** 좌표 축만으로 [[lee-2023-lateral-hypothalamic-leptin-receptor]](↑) / [[petzold-2023-complementary-lateral-hypothalamic-populations]]·[[de-vrind-2019-effects-of-gaba-and]](↓) / [[siemian-2021-lateral-hypothalamic-lepr-neurons]](무변)를 설명할 수 있는지는 같은 동물 내 좌표 비교로만 판정된다.
4. **g(안전도)는 Motivation 적분 기울기를 바꾸는가, 역치만 옮기는가.** `Behavior ∝ Motivation × g` 가설의 핵심 구별이며 아직 파라메트릭 검증이 없다 [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal]], [[kim-2024-normative-framework-dissociates-need]].
5. **경쟁하는 need(음식·물·사회·안전·온도)는 Need 수준에서 통합되는가, Motivation 수준에서 통합되는가.** NMPU는 motivation 수준 적분 가능성을 제시하지만 [[concept-need-motivation-pleasure-utility]], LepR의 사회 우선·음수 억제는 arbitration이 LH에서 일어남을 시사한다 [[petzold-2023-complementary-lateral-hypothalamic-populations]], [[korotkova-2026-balancing-acts-lateral-hypothalamic]].
6. **LH^LepR → VTA는 Utility→Motivation 되먹임 경로인가.** 말단 억제가 학습 asymptote를 올리고 소거까지 지속된다는 결과 [[siemian-2021-lateral-hypothalamic-lepr-neurons]]와, VTA-투사 LepRb 다수가 leptin c-Fos 음성이라는 단서 [[leinninger-2009-leptin-acts-via-leptin]]를 합치면 '같은 marker 안에서 투사별 축 분업' 가설이 나온다.
7. **Motivation 노드의 출력 화폐는 섭취량인가 활동 예산인가.** Nts-LepRbKO의 비만은 운동·VO₂ 감소에서 오고 [[leinninger-2011-leptin-action-via-neurotensin]], hM3Dq 활성은 운동·체온을 올린다 [[de-vrind-2019-effects-of-gaba-and]]. NMPU에 에너지 소비 출력 축을 공식화할지가 열려 있다.
8. **Need가 가치 채널만 변조한다는 공간적 주장이 AgRP 조작으로 재현되는가.** 상대가치 효과가 전측·복측 선조체에만 남는다는 결과 [[gordon-2026-lateral-hypothalamic-control-of]]는 AgRP 조작 + 다지점 DA로만 검증된다.
9. **단식의 tonic 효과와 event 반응성 변화를 한 지표로 묶을 수 있는가.** c-Fos 감소 [[leinninger-2009-leptin-acts-via-leptin]]와 event-locked 상승 [[kim-2024-normative-framework-dissociates-need]]을 동시에 설명하는 gain 모델이 필요하다.
10. **영장류에서 Need/Motivation 해리가 재현되는가.** NHP 자료는 palatable 특이성과 operant 동기 증가만 보이고 [[ha-2024-hypothalamic-neuronal-activation-non-human]], 세포타입(LepR) 선택성과 phase 분해는 없다.

---

## 5. 우리 연구실 연구 제안

> 모두 **연결 가설** — 해당 원문들이 주장하지 않은 통합이며, 위키 자료로부터 도출한 검증 설계다.

**제안 1. Normative model의 안전도 gate 확장 (연결 가설)**
[[kim-2024-normative-framework-dissociates-need]]의 naturalistic 과제를 밝기·개방도로 anxiogenicity를 파라메트릭하게 바꾸며 반복하고, LH^LepR photometry를 동시 기록한다. 예측: Motivation 적분 기울기 a는 유지된 채 **행동 개시 역치 K만 이동**한다. 대립 예측(기울기 변화)이 나오면 `B = M·g − K`가 아니라 `B = M − K(g)`로 모델을 수정한다. 근거: anxiogenic 맥락에서만 섭식 개시가 앞당겨지고 익숙·어두운 맥락에서는 무효 [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal]].

**제안 2. 같은 동물에서 phase-isolated × tonic 조작 교차 (연결 가설)**
같은 Lepr-Cre 코호트에 (a) [[lee-2023-lateral-hypothalamic-leptin-receptor]]의 seeking-isolated·consummatory-isolated 챔버, (b) [[siemian-2021-lateral-hypothalamic-lepr-neurons]]의 2-boat 자유급식 섭식 시험, (c) [[de-vrind-2019-effects-of-gaba-and]]의 7 h hM3Dq + 바닥/cage-top chow를 **모두** 적용하고, 좌표(pmLH vs alLH)를 피험동물 내 요인으로 둔다. 종결점에 갉기 분리(가루 칭량·비식품 대조물)를 포함하고, (c) 조건에는 **pair-feeding 분지**를 추가해 섭취량을 고정한 상태에서 운동량·간접 열량·체온(BAT·UCP1 포함)을 따로 읽는다 — 이것이 '운동만 늘고 섭취는 줄었다'는 결과 [[de-vrind-2019-effects-of-gaba-and]]를 목표 없는 seeking 때문인지 독립적 열생산 때문인지 가르고, Nts-LepRbKO의 운동↓ [[leinninger-2011-leptin-action-via-neurotensin]]와 거울상인지 확인한다. 전체적으로 섭취 부호 논쟁(충돌 1)을 과제 구조·접근성·좌표·출력 화폐의 교호작용으로 분해한다.

**제안 3. NPY 게이트가 적분 이득인지 역치인지 가르기 (연결 가설)**
Y1·Y5 길항제를 LH에 국소 주입한 상태에서 [[kim-2024-normative-framework-dissociates-need]]의 multi-predicted gain/loss 과제를 수행하고 LH^LepR 신호를 모델 적합한다. 예측: NPY 게이트가 **permissive gate**라면(측정된 기전은 개재뉴런 탈억제 [[lee-2023-lateral-hypothalamic-leptin-receptor]]) a가 줄고 M의 상승 기울기가 완만해져야 하며, 단순 역치 효과라면 기울기는 유지되고 개시 지연만 늘어야 한다.

**제안 4. seeking/consummatory 아집단의 분자 주소 확정 (연결 가설)**
LH^LepR microendoscopy 코호트에서 seeking(25%)·consummatory(39%) 세포를 기능적으로 분류한 뒤 **post hoc RNAscope(Lepr × Ebf1 × Tac1 × Nts × Gal)** 로 재방문한다. 가설: Gal⁺/Ebf1⁺ 클러스터는 안전 gate·seeking 쪽, Tac1⁺/Opcml⁺는 다른 축에 치우친다 [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal]]. 동시에 Nts 중첩률을 사용자 lab 좌표(AP −1.5, pmLH)에서 재정량해 도구 통약 문제를 수치로 고정한다 [[leinninger-2011-leptin-action-via-neurotensin]].

**제안 5. LH^LepR seeking 아집단과 국소 orexin의 부호 결정 (연결 가설)**
LH^LepR 광유전 활성(또는 seeking phase 중) 중 orexin 뉴런 Ca²⁺를 이중 색으로 동시 기록한다. 두 모델이 정반대 예측을 낸다 — LepRb^Nts → OX GABA 억제 모델이면 seeking 중 **OX 억제** [[leinninger-2011-leptin-action-via-neurotensin]], leptin 직접 억제·단식 각성 모델이면 seeking 중 **OX 동반 상승** [[yamanaka-2003-hypothalamic-orexin-neurons-regulate]]. 같은 실험에서 DORA 투여 시 LH^LepR 적분 기울기가 바뀌는지(Motivation 축) 개시 지연만 바뀌는지(역치 축)를 함께 본다.

**제안 6. LH→선조체 DA의 2단 제어 — 세포 정체 × 시간척도 (연결 가설)**
(a) **빠른 분배 축**: [[gordon-2026-lateral-hypothalamic-control-of]]의 multispout brief-access 과제(WR:Suc / FR:Suc / WR:NaCl)에서 LH^LepR과 LH^Glut을 dual-color로 기록하고 LHA^Ratio를 LepR 기준으로 재계산한다. 예측 분기 — LepR이 FR:Suc의 강한 value-scaling을 운반하면 Motivation=LepR 매핑이 가치 축까지 확장되고, 운반하지 않으면 섭취 중 scaling은 non-LepR GABA 아집단의 성질이며 [[siemian-2021-lateral-hypothalamic-lepr-neurons]]의 '섭취 무변'과 정합한다(head-fixed lick 정량은 갉기 혼입이 없다). (b) **느린 용량 축**: 같은 동물에서 LH^LepR을 24 h–수일 조작한 뒤 VTA *Th*·NAc DA 함량·GRAB-DA 동역학을 측정한다. 2단 제어 가설이 맞다면 LH *Lepr* knockdown에서 DA 지형의 **진폭만 축소되고 전후축 배열은 유지**된다 [[leinninger-2009-leptin-acts-via-leptin]]. ⚠️ 생리적 Nts-LepRbKO에서는 *Th*·DA 함량이 불변이고 NAc 유발 DA 진폭↓·t₁ᐟ₂↑만 나타났으므로 [[leinninger-2011-leptin-action-via-neurotensin]], 종결점에 **DAT clearance kinetics**를 반드시 포함한다.

**제안 7. 불안–섭식 커플링의 세포 유형별 부호를 한 동물에서 가르기 (연결 가설)**
같은 코호트를 12주 HFD와 정상식으로 나누고 불안도로 층화한 뒤, LH^LepR(GABA)과 LHA^Glu를 각각 기록·조작한다. 예측: LepR 축은 '불안이 섭식을 막고 LepR이 푸는' 방향 [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal]], Glu 축은 'brake 해제 → 과식' 방향 [[wang-2026-a-hypothalamic-circuit-links]]으로 분리되고, CRHR2 길항은 Glu 축의 과식만 깎는다. 성립하면 사용자 lab의 maladaptive eating 유형 중 emotional eating과 restraint가 **같은 LH 안의 서로 다른 세포 축**에 배정된다 [[concept-need-motivation-pleasure-utility]].

**제안 8. 영장류에서 Need/Motivation 해리 번역 (연결 가설)**
[[ha-2024-hypothalamic-neuronal-activation-non-human]]의 macaque 플랫폼에 **phase 분리 과제**(접근 불가 조건 = predicted loss, 접근 가능 = predicted gain)와 **체온·에너지 소비 측정**을 추가하고, 광자극 종료 후 dynamics(지속 vs 즉시 중단)를 종결점으로 둔다. 예측: 세포타입 비선택적 LHA GABA 활성은 Motivation 즉시성(즉시 중단)을 보여야 하고, Need 축(지속 섭식)은 재현되지 않아야 한다 [[kim-2024-normative-framework-dissociates-need]]. 설계상 한계로 세포타입 선택성 부재와 N=3를 명시한다.
