---
title: "보상 예측 오류와 도파민 신호의 해석: RPE vs 현저성 vs 인과 학습"
type: concept
created: 2026-10-11
updated: 2026-10-11
aliases: [보상 예측 오류, 보상 예측 오차, utility prediction error, 효용 예측 오류, two-component dopamine response, 도파민 두 성분 반응, perceived saliency, 지각된 현저성]
---

> [!takeaway] 연구 방향 관점의 핵심
> 음식 cue·섭취에서 "도파민이 올랐다"를 **무엇으로 읽을지** 정하는 판별 hub. 위키 원전 기준으로 해석은 ① **RPE = 효용 예측 오류**(Schultz 2016: 감지 성분 → 가치 성분), ② **현저성**(강웅구 2011의 심리적 중요성, Kutlu 2021의 강도·새로움), ③ **회고적 인과 학습**(Jeong 2022 ANCCR), ④ **유인 현저성 = 원함**(Berridge: 예측과 분리), ⑤ **가치·활력·노력**(Hamid·Mohebi·Salamone)으로 갈린다. 이들은 cue 학습 전후·보상 누락처럼 **같은 예측을 하는 조건이 많고**, **valence 대조·무예측 보상 반복·소거·측정 수준(체세포/말단, core/shell)·시간창**에서 갈린다. [[concept-need-motivation-pleasure-utility|NMPU]] Pleasure의 교사 신호를 RPE 하나로 고정하지 않는 근거이며, 식락학 Ch 20 20.5의 개념 지도다.

# 보상 예측 오류와 도파민 신호의 해석: RPE vs 현저성 vs 인과 학습

## 한 줄 요약
**보상 예측 오류(reward prediction error, RPE)** = 받은 보상의 가치 − 예측한 가치. midbrain 도파민 뉴런의 phasic 반응이 이 값을 부호화한다는 가설은 30년 가까이 지배적이었지만, 위키의 원전들은 같은 도파민 신호를 **효용 예측 오류**, **현저성**, **회고적 인과 신호**, **유인 현저성('원함')**, **가치·활력**으로 달리 읽는다. 이 페이지는 각 해석의 정의·근거·예측을 나란히 놓고, 섭식 실험에서 무엇으로 갈라 볼지를 정리한다.

## 핵심 내용

### 1. 정의와 고전 RPE
- **정의** ([[schultz-2016-dopamine-reward-prediction-error-signalling|Schultz 2016]] p.187): 예측보다 큰 보상 → 짧은 활성(양의 PE), 예측보다 작은 보상 → 활동 감소(depression, 음의 PE), 정확히 예측된 보상 → 무변화. 이는 **Rescorla–Wagner**(결과 − 현재 예측에 학습 계수를 곱해 예측을 갱신)와 **TD 강화학습**(trial에 기반하지 않는 행동 계열에서 state의 기대값과 실제값의 차이를 교사 신호로 쓰는, RW의 실시간·고차 강화물 확장) 모형 오차항의 생물학적 구현이다(Glossary).
- **고전 실험** (Schultz, Dayan & Montague 1997): 예고 없는 보상 → burst; CS와 반복해 짝지으면 발화가 CS로 이동하고 보상 자체에는 반응하지 않음; 예측된 보상이 오지 않으면 그 시점에 발화 감소. ⚠️ **원전은 위키 raw에 없다** — [[kang-2011-dopamine-system-and-antipsychotic-drugs|강웅구 2011]]·[[adam-2026-dopamine-takes-hit-how-neuroscience|Adam 2026]]을 거친 2차 서술이며, 식락학 Ch 20 20.5.1·그림 20.5a도 같다.
- **Schultz 2016의 정밀화**: phasic 반응은 ① 비선택적 **감지 성분**(물리적 강도·보상 맥락·일반화·새로움이 키움)에서 ② 주관적 가치를 재는 **주성분**으로 곧바로 진화하고(단순 자극에서는 두 성분이 잘 분간되지 않음), 주성분은 위험 gamble로 추정한 **경제학적 효용 함수의 비선형성**을 따른다 → **"utility prediction error"**(위험·지연·노력을 고정했으므로 income utility). 학습 기전은 input·output·도파민의 three-factor Hebbian, striatum의 D1 수용체 매개 LTP·LTD.
- **RPE 진영의 확장** ([[gershman-2024-explaining-dopamine-prediction-errors-beyond|Gershman 2024]]): vector-valued PE·successor representation·average reward 등 "suitably generalized RPE"로 ramp·특징 부호화·행동 선택을 흡수하되, **ANCCR와 perceived saliency는 framework 밖**으로 인정. 단일 VTA 뉴런의 다중 변수 부호화를 vector RPE로 푸는 [[lee-2024-feature-specific-prediction-error|Lee 2024]]도 같은 진영.
- **RPE 틀 안의 균열**: 음의 RPE에 대한 도파민 dip이 예상보다 약하다(→ 비도파민 후보 [[concept-lateral-habenula|LHb]]); two-step task에서 도파민은 RPE 모양이지만 결과 시점 광유전 자극·억제가 다음 선택을 바꾸지 않았다([[blanco-pozo-2024-dopamine-independent-effect-rewards-choices|Blanco-Pozo 2024]]).

### 2. '현저성'은 위키 원전에서 적어도 여섯 가지 뜻으로 쓰인다
"도파민 = 현저성"이라는 문장은 **어느 현저성인지** 밝혀야 검증할 수 있다.

| 용어 | 정의 (원전) | 보상/처벌 | 도파민과의 관계 주장 | 출처 |
|---|---|---|---|---|
| **Physical salience** | 물리적 강도·눈에 띔으로 주의를 끄는 능력 | 둘 다 | 초기 성분을 강도에 따라 **등급적으로, 가치와 무관하게** 유발 | [[schultz-2016-dopamine-reward-prediction-error-signalling\|Schultz 2016]] |
| **Novelty salience** | 새로움으로 주의를 끄는 능력 | 둘 다 | 초기 성분을 키우고 반복하면 감소하지만 **새로움만으로는 불충분**(약한 새 자극은 무반응) | Schultz 2016 |
| 참신성(novelty) — 다른 평가 | "예측 자체가 불가능한 상황" | — | **에러 신호 중 가장 대표적인 것** | [[kang-2011-dopamine-system-and-antipsychotic-drugs\|강웅구 2011]] |
| **Surprise salience** | 예상 밖이어서 주의를 끄는 능력 | — | Pearce–Hall 규칙처럼 학습률을 높임 | Schultz 2016 |
| **Motivational salience** | 양·음의 동기 가치로 주의를 끄는 능력 | **공통** | 이에 기반한 도파민 이론(Kapur 2003)은 phasic 기능의 **불완전한 설명** — 진짜 혐오 활성이 비개연적이므로 | Schultz 2016 |
| **Incentive salience('원함')** | 보상 cue를 주의를 끄는 '동기의 자석'으로 만들어 다가가게 하는 과정 | 보상 cue(Schultz의 특징화) | mesolimbic 도파민이 매개; '좋아함'과도, **결과가치 예측과도 분리**될 수 있음; 감작은 예측 신호가 아니라 incentive salience를 증폭 | [[berridge-2009-dissecting-components-of-reward\|Berridge 2009]] · [[berridge-2023-separating-desire-from-prediction-of\|Berridge 2023]] · [[robinson-2008-the-incentive-sensitization-theory\|Robinson 2008]] |
| **Perceived saliency** | 자극의 **강도와 새로움** → 주의 가치 | **valence 무관** | **NAc core 도파민 방출 = 지각된 현저성**(Kutlu–Calipari–Schmajuk 모형) | Kutlu 2021 via [[chen-2021-neuromodulation-a-model-for-dopamine\|Chen & Bruchas 2021]] |
| 강웅구의 salience | 자극의 **심리적 중요성** — 쾌감 가치와 무관하게 학습으로도 부여됨 | 둘 다 | 도파민 신호는 쾌감이 아니라 salience; 과잉 → 비정상 salience(정신증 가설), 중독의 갈망(craving) = 생존에 불필요한 자극에 대한 원함이 작업기억을 점령한 상태 | 강웅구 2011 |

- **해석상의 함정**: Schultz의 "현저성은 초기 성분일 뿐"(physical·novelty·surprise)과 Kutlu의 "NAc core 도파민 = 지각된 현저성"(강도·새로움)은 **측정 수준이 다르다**(체세포 발화 vs core 방출). 강웅구의 salience는 Berridge & Robinson 1998(incentive salience), Redgrave 1999(짧은 잠복 도파민 반응 — 강웅구는 새로움 가설의 근거로 인용), Howes & Kapur 2009(정신증의 비정상 salience)를 묶은 넓은 개념이다. Schultz 2016은 Redgrave 계열의 주의 가설을 "보상 없이 시험해 초기 성분만 본 결과"로, motivational salience 이론(Kapur 2003 — 강웅구가 인용한 Howes & Kapur 2009와는 다른 논문)을 "불완전한 설명"으로 다룬다.
- Schultz는 유인 현저성과 PE가 **비교하기 어렵고 상호배타적이지 않을 수 있다**고 본다 — 유인 현저성은 도파민의 *행동 영향*, PE는 *신호 자체의 속성*에 관한 것이기 때문이다(p.192). 반면 Berridge 2023은 상태 변화가 학습 없이 원함을 즉석에서 바꾸는 사례를 들어 **예측 기반 도파민론으로는 동기를 다 설명할 수 없다**고 본다(→ [[concept-liking-wanting]], [[concept-incentive-sensitization]]).

### 3. 회고적 인과 학습 (ANCCR)
- [[jeong-2022-mesolimbic-dopamine-release-conveys-causal|Jeong 2022]]: NAc core 도파민 방출은 "방금 일어난 사건이 그 원인을 학습해야 할 **meaningful causal target**인가"를 신호한다. 전향적 TDRL RPE와 예측이 갈리도록 설계한 11개 검증에서 저자 판정상 모두 ANCCR 쪽 — 무경험 맥락의 반복 무예측 sucrose에 반응 **증가**(Test 1), 직전 보상 간격과 **양**의 상관(Test 2), 행동 소거 뒤에도 cue 반응 **잔존**(Test 6) 등. 상세는 [[concept-anccr]].
- **RPE를 통째로 버리지 않는다**: 사건률에 관한 예측오차는 프레임워크에 포함되고, 부정되는 것은 **관습적 state space의 TDRL RPE**다. ANCCR 시뮬레이션은 cue 학습 전후 cue↑/보상↓, 누락 반응, blocking 등 고전 RPE 결과를 재현한다(Fig. 2) → 저자: 지금까지 도파민은 **두 가설이 같은 예측을 하는 조건에서만** 검증돼 왔다.
- **처벌과 현저성**: 처벌도 meaningful causal target이며, ANCCR에 곱하는 강도를 **부호 있는 incentive value** 또는 **그 절댓값(salience)**으로 둘 수 있고 NAc core vs medial shell이 둘을 달리 신호할 수 있다는 추측(suppl. Note 8, 검증 없음). 원전 Discussion은 예측된 처벌에 대한 NAc 도파민 증가와 반복 처벌에 대한 감소(Kutlu 2021)를 ANCCR로 설명한다고 주장 — **같은 데이터에 대한 KCS 현저성 모형과의 경쟁 설명**.

### 4. 다른 축: 가치·활력·노력·소비
- **가치(state value)**: [[hamid-2016-mesolimbic-dopamine-signals-value-work|Hamid 2016]] — NAc 도파민 = 시간 할인된 미래 보상(V); 절댓값은 동기, 급격한 변화는 RPE.
- **발화와 방출의 분리**: [[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation|Mohebi 2019]]·[[rice-2019-closing-in-on-what-motivates|Rice 2019]] — VTA 발화 = 학습 신호(RPE), NAc 방출 = 학습 + 동기(V); 동기 신호는 발화 없이 국소적으로 생긴다.
- **노력·활성화**: [[salamone-2012-mysterious-motivational-functions-mesolimbic|Salamone 2012]] — NAc 도파민 = 노력 발휘·행동 활성화·비용편익 결정. 강웅구 2011의 노력 선택 실험(D2 차단 쥐는 레버를 눌러 얻는 설탕 대신 쉬운 사료를 먹지만, 둘 다 노력 없이 주면 설탕을 고른다)은 도파민 차단이 쾌감이 아니라 노력해서 얻으려는 동기를 줄인다는 근거(→ [[concept-effort-based-decision-making]]).
- **시간척도**: Schultz 2016 Box 1 — 초 이하 = 두 성분 PE, 초–분 = 행동 활성화·스트레스·주의·보상·처벌·운동(**RPE와 무관할 수 있음**), tonic = 운동·인지·주의·동기(PD·ADHD·조현병 결함). Salamone의 "다른 시간척도로 양립" 해석과 정합.
- **cue 도파민 = 주관적 가치**: [[pascoli-2026-conditioned-accumbal-dopamine-transients|Pascoli 2026]] — cue 유발 NAc 도파민이 객관적 보상 크기가 아니라 주관적 가치를 반영.

### 5. 판별표 — 어느 조건에서 해석이 갈리나 (위키 원전에 서술된 예측만; 빈칸 = 서술 없음)
| 조건 | 관습적 TDRL RPE (Jeong 2022 정리) | Schultz 2016 두 성분 | 지각된 현저성 (Kutlu via dispatch) | ANCCR (Jeong 2022) | 유인 현저성 (Berridge) |
|---|---|---|---|---|---|
| 예상 밖 보상 | 증가 | 초기 감지 + 주성분 증가(효용 곡선 따라 비선형) | 증가(sucrose; 양을 따라) | 증가 | — |
| cue 학습 후 | cue↑ / 보상↓ | 보상 시점 반응이 남은 예측을 검사(확률↑ → 감소) | sucrose: 보상 → cue 이동 / footshock: 이동 없음 | 같은 예측(Fig. 2 재현) | cue에 유인 현저성 부여 |
| 예측된 보상의 누락 | dip | depression | (dispatch 본문 서술 없음) | 누락이 state로 추론될 때만 반응(지연 영구 연장 시 dip 없음, Test 5) | — |
| 강도를 맞춘 혐오 자극 | (Schultz 열 참조) | 물리적 충격 → 초기 활성; 음의 가치는 주성분 depression | **강도를 따라 증가**, 학습 뒤 남고 증가, cue로 이동 없음 | 처벌도 MCT — 부호 또는 절댓값(추측) | 보상 cue 중심(Schultz의 특징화); 단 CeA 자극을 충격봉과 짝지으면 '아플 줄 알면서 원하기'([[warlow-2021-incentive-motivation-wanting-roles\|Warlow 2021]]·Berridge 2023) |
| 무경험 맥락의 반복 무예측 보상 | 감소 | 직접 서술 없음(새로운 자극의 반응은 반복하면 감소) | — | **증가**(Test 1) | — |
| 직전 보상 간격 | 음의 상관 | — | — | **양의 상관**(Test 2) | — |
| 소거 | cue 반응 → 0 | — | — | cue 반응 **잔존**(Test 6) | — |
| 생리 상태의 급변(나트륨 결핍), 새 학습 전 | 예측 기반 이론으로는 설명 못함(Berridge 2023의 논증) | — | — | — | 혐오로 학습된 소금 CS를 **즉시 원함** |

### 6. 측정 수준과 시간창이 해석을 바꾼다
- **체세포 발화 vs 말단 방출**: RPE 모형 대부분은 활동전위에 기반하는데 말단 방출과의 관계는 비선형이다(Chen & Bruchas). 발화–방출 해리를 위키의 Mohebi·Rice 페이지는 **NAc 국소 조절**로, dispatch는 **미지의 도파민 아집단** 가능성으로 읽는다. Schultz 2016도 acetylcholine·glutamate·substance P와 striosome–matrix 구획이 방출을 불균질하게 만든다고 적는다(→ [[concept-striatal-cholinergic-interneuron]]).
- **시간창**: Schultz의 두 성분 메커니즘은 10 ms 단위의 정밀 처리를 요구하고(p.190), 초기 성분이 주는 이득은 수십 ms의 시간 이득이다(p.187). dispatch는 이 시간 차가 너무 작아 **in vivo 검증이 어렵다**고 보지만, Schultz는 쥐 **NAc voltammetry**에서도 초기 비구별 성분과 후속 가치 성분을 제시한다(Fig. 2d). fiber photometry로 두 성분을 가를 수 있는지는 위키 원전에 없다(자료 없음).
- **아구역**: 혐오 자극에서 **NAc shell은 지연된 자극 후 방출**(relief, 회피 성공 예측), **core는 즉각적 변화**(물리적 충격·일반화·맥락 가능); risky cue에 core는 차별적, shell은 비차별적(Schultz 2016). core와 shell은 반대 기능이나 다른 방출 타이밍을 가질 수 있다(Chen & Bruchas). 더 넓은 축은 [[concept-striatal-dopamine-gradient]](전방·복측 = 가치·이력 / 후방 = 감각운동 / TS = 위협 평행 채널) — "NAc 도파민"은 core/shell과 시간창을 붙여야 정보가 된다(→ [[concept-nucleus-accumbens]]).
- **valence가 반대로 보이는 사례**: [[zhu-2025-hedonic-eating-is-controlled-by|Zhu 2025]]의 **VTA 도파민 체세포 칼슘**은 quinine을 섞은 Ensure 섭취 중 **감소**하고 부정적 쾌락 대비에서 음성이다(가치 방향). Kutlu(dispatch)의 **NAc core 방출**은 quinine 양을 따라 **증가**한다(강도 방향). 측정 수준과 과제(섞은 먹이 vs 단독 자극)가 다르므로 직접 모순이라고 할 수는 없다.

### 7. 한 끼 식사 안의 도파민 신호
[[zhu-2025-hedonic-eating-is-controlled-by|Zhu 2025]] Fig. 8의 네 단계는 **선행연구와 자신들의 소비 국면 결과를 묶은 모식도**다(Discussion).

| 단계 | 시간 | Zhu Fig. 8 라벨 | 위키 원전의 대응 |
|---|---|---|---|
| 음식 cue | ~0.1 s | Reward prediction error — 기호성 기대·접근 | 고전 RPE(cue로 이동한 반응); ANCCR에서는 학습된 MCT |
| 음식 접촉 | — | Reward utility — cue로 다 예측되지 않은 효용, 보상 기대에 민감(Cohen 2012; Fiorillo, Newsome & Schultz 2008 인용) | Schultz 2016: 액체 흐름 시작의 **감지 성분(양과 무관)** + 최종 양의 **효용 주성분** |
| 섭취 중 | 1–60 s | Sustain consumption — 기호성(+), 부정적 쾌락 대비·포만(−) | Zhu: VTA 도파민이 기호성을 부호화하고 bout 지속을 인과적으로 유지(세마글루타이드가 억제) |
| 섭취 후 | 600–3600 s | Postingestive reinforcement — 영양 성분 | [[weber-2025-interoceptive-origin-reinforcement-learning\|Weber 2025]]의 primary reward([[concept-primary-reward-signals]]), [[yang-2026-a-sync-state-in-the\|Yang 2026]]의 RPE로 환원되지 않는 sync state, [[grove-2022-dopamine-subsystems-track-internal\|Grove 2022]]의 자원별 도파민 subsystem |

- ⚠️ **소비 중 도파민의 행동 역할 충돌**: Zhu 2025는 photometry로 보정한 lick-contingent VTA 도파민 자극이 **bout 지속(duration)을 늘리고 bout 개시는 바꾸지 않았다**고 보고하는데, [[gordon-2026-lateral-hypothalamic-control-of-the|Gordon 2026]]은 도파민이 핥기의 **개시(bout 수)를 강화하고 유지는 강화하지 않는다**고 보고한다(→ [[concept-consumption-vigor]]). 자극 보정 방식·표적(체세포 vs 말단)이 다르다. [[guillaumin-2023-disentangling-the-role-of-nac|Guillaumin 2023]]의 정의(bout 길이 = 좋아함, bout 수 = 원함)에 대입하면 해석이 더 갈린다.

### 8. NMPU 대응 (연결 가설 — 원전 주장 아님)
- **Pleasure(즉각 결과 교사)**: NMPU는 Pleasure를 "Forward: 다음 motivation에 영향(RPE)"으로 적는다. 그 forward 교사 신호의 고전 후보가 Schultz의 **효용 주성분**이고, 회고적 대안이 [[concept-anccr|ANCCR]]다. NMPU의 "Pain/aversion은 부정적 pleasure"와 달리 Kutlu(dispatch)가 맞다면 NAc core 도파민은 Pleasure의 **부호가 아니라 크기**를 실을 수 있다.
- **Motivation**: 유인 현저성('원함'; Berridge), state value(Hamid), 노력(Salamone)이 후보.
- ⚠️ **용어 충돌 — 두 개의 'utility'**: Schultz의 utility는 **즉각 보상량의 경제학적 효용**(할인 실험도 2–16 s)이고, NMPU의 **Utility는 시간–일 지연된 최종 결과의 교사**다. Schultz의 "utility prediction error"를 NMPU Utility의 근거로 쓰면 안 된다.
- NMPU 원 논문([[kim-2024-unified-theoretical-framework-underlying-regulation|Kim 2024 BioEssays]])은 "Schultz RPE"를 네 성분을 명확히 구분하지 못한 기존 이론의 하나로 든다.

### 9. 식락학 Ch 20에서의 쓰임 (`ch20v3/body.txt`)
- **20.5.1 "쾌감이 아니라 현저성"**: 강웅구 2011의 현저성 해석(CS 반응 = 쾌감이 아닌 salience) → Kutlu 등(dispatch 경유)의 NAc core 결과 → Schultz 2016의 두 성분 모형 순서.
- **20.5.2 "예측 오류인가, 인과 학습인가"**: 고전 RPE와 전향적 TD 강화학습 → Jeong 2022 ANCCR → Berridge 2023의 유인 현저성 → Adam 2026(의견 엇갈림).
- **20.5.3**: 노력 선택 실험(강웅구·Salamone), 시간척도(Schultz Box 1 + dispatch Fig. 1D), Hamid·Mohebi.
- **20.8.2**: "보상 예측 오류가 음의 값이면 다음 동기는 줄어든다" — Schultz의 학습 기전 서술(음의 PE가 낮은 보상과 연관된 행동을 불리하게 함)과 정합.
- **20.9.1**: Zhu 2025의 네 단계(cue = 20.5.2의 RPE 신호, 음식 접촉 = 효용).
- **원문 대조 요점**: 20.5의 사실 서술은 두 논문과 일치한다. 다만 ① "위의 결과도 이 두 성분 모형으로 설명할 수 있다"는 두 원문 어디에도 없는 추론이고 부분적으로만 지지된다, ② 소제목의 '현저성'은 Schultz 2016의 결론(현저성 = 초기·일시 부분)과 긴장한다, ③ '효용'이 Schultz/Zhu의 즉각 효용과 NMPU의 지연 Utility에 함께 쓰인다(그림 20.9의 a와 b 패널), ④ 20.5.1의 "먹는 동안 도파민 농도가 오히려 떨어진다는 보고"(강웅구 2011이 인용한 Ahn & Phillips 2002)와 20.9.1의 "먹는 동안 도파민 뉴런 활동이 유지"(Zhu 2025)는 측정 대상·시간척도가 달라 함께 읽을 때 구분을 적어야 한다. 세부 문장 대조는 [[schultz-2016-dopamine-reward-prediction-error-signalling]]·[[chen-2021-neuromodulation-a-model-for-dopamine]]의 Ch 20 절과 [[overview-sikrakhak-ch20-opioid-dopamine-liking-wanting]].

### 10. 열린 문제와 자료 없음
- **Kutlu 2021 원전**과 KCS 모형의 식·파라미터 — 위키에 없음(dispatch 요약만).
- **Schultz, Dayan & Montague 1997 원전** — raw에 없음(2차 서술만).
- Schultz 2016의 **Supplementary S1(table)·S2(box)**, 혐오 재해석의 핵심 근거인 **Fiorillo 2013** — 위키에 없음.
- ANCCR에 대한 반박으로 언급되는 **Qian 2024** — 위키에 없음([[gershman-2024-explaining-dopamine-prediction-errors-beyond|Gershman 2024]] 페이지 참조).
- **음식 보상에서 두 성분을 분리한 실험** — Schultz의 근거는 원숭이·주스이며, 섭식 회로(LH·VTA·NAc)에서 감지 성분과 가치 성분을 나눈 위키 자료는 없다.
- 사람 근거로 dispatch가 든 L-DOPA/haloperidol 학습 차이와 fMRI RPE 상관(Pessiglione 2006) — 원전 없음.

## 사용자 연구 관점의 함의 (연결 가설)
- **판별 실험 체크리스트(섭식 photometry·전기생리)**: ① 감지 창과 가치 창 분리 + 물리적 강도·가치 동시 회귀(Schultz), ② 강도를 맞춘 혐오 대조(quinine 양, 쓴맛 농도)로 valence 의존성 검사(Kutlu), ③ 무경험 맥락의 반복 무예측 보상 추세와 직전 보상 간격과의 상관 부호(ANCCR vs RPE), ④ 소거 후 cue 반응 잔존, ⑤ 상태 급변(금식·나트륨 결핍) 직후 학습 없는 cue 반응 변화(유인 현저성), ⑥ VTA 체세포와 NAc core/shell 방출 동시 측정(발화–방출 해리).
- **LH–VTA–NAc 연구로의 이식**: LH 입력이 VTA에 "예측"을 준다는 [[sharpe-2017-lateral-hypothalamic-gabaergic-neurons|Sharpe 2017]]의 RPE 논리 검증, LH 비율이 striatum 도파민 지형을 정한다는 Gordon 2026과 함께, NMPU의 Motivation·Pleasure 신호가 **어느 해석에서 어느 측정 수준으로** 나타나는지를 설계 변수로 둔다.

## 관련 페이지
- [[schultz-2016-dopamine-reward-prediction-error-signalling]] — RPE 축의 원전급 정리(두 성분·효용 PE·혐오 재해석).
- [[chen-2021-neuromodulation-a-model-for-dopamine]] — 현저성 축(Kutlu 2021 지각된 현저성)의 2차 자료.
- [[jeong-2022-mesolimbic-dopamine-release-conveys-causal]] · [[concept-anccr]] — 인과 학습 축.
- [[kang-2011-dopamine-system-and-antipsychotic-drugs]] — 현저성 축(국내 리뷰): 쾌감이 아닌 salience, 노력 선택 실험, 뒤집힌 U.
- [[concept-dopamine-reward-system]] — 도파민 회로·RPE 논쟁의 상위 hub.
- [[concept-liking-wanting]] · [[concept-incentive-sensitization]] · [[berridge-2009-dissecting-components-of-reward]] · [[berridge-2023-separating-desire-from-prediction-of]] · [[robinson-2008-the-incentive-sensitization-theory]] · [[robinson-2025-incentive-sensitization-30-years]] — 유인 현저성 축.
- [[gershman-2024-explaining-dopamine-prediction-errors-beyond]] · [[lee-2024-feature-specific-prediction-error]] · [[blanco-pozo-2024-dopamine-independent-effect-rewards-choices]] — 일반화 RPE 진영과 그 한계.
- [[adam-2026-dopamine-takes-hit-how-neuroscience]] — 논쟁의 대중 서술.
- [[hamid-2016-mesolimbic-dopamine-signals-value-work]] · [[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation]] · [[rice-2019-closing-in-on-what-motivates]] · [[salamone-2012-mysterious-motivational-functions-mesolimbic]] · [[pascoli-2026-conditioned-accumbal-dopamine-transients]] — 가치·활력·노력 축.
- [[concept-lateral-habenula]] — 음의 RPE의 비도파민 후보.
- [[concept-nucleus-accumbens]] · [[concept-striatal-dopamine-gradient]] · [[concept-striatal-cholinergic-interneuron]] — 측정 부위·국소 조절.
- [[zhu-2025-hedonic-eating-is-controlled-by]] · [[gordon-2026-lateral-hypothalamic-control-of-the]] · [[concept-consumption-vigor]] — 소비 중 도파민.
- [[weber-2025-interoceptive-origin-reinforcement-learning]] · [[concept-primary-reward-signals]] · [[yang-2026-a-sync-state-in-the]] · [[grove-2022-dopamine-subsystems-track-internal]] — 섭취 후 강화.
- [[concept-need-motivation-pleasure-utility]] · [[kim-2024-unified-theoretical-framework-underlying-regulation]] — Pleasure 교사 신호, 두 개의 utility.
- [[concept-effort-based-decision-making]] — 노력 기반 의사결정 hub.
- [[overview-sikrakhak-ch20-opioid-dopamine-liking-wanting]] — 식락학 Ch 20 20.5의 개념 지도.
