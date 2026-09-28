---
title: 도파민 기능 주요 이론 비교 (Comparison of Major Dopamine Function Theories)
type: overview
created: 2026-09-28
updated: 2026-09-28
aliases: [dopamine theories, 도파민 이론 비교, RPE vs incentive salience, dopamine function debate]
---

> [!takeaway] 연구 방향 관점의 핵심
> "도파민은 무엇을 하는가"에 대한 위키 내 **9개 진영을 한 표로 비교**하는 hub. 결론 셋:
> 1. 각 이론은 **같은 신호를 다른 축에서 본 것**에 가깝다 — *무엇을*(예측오차·가치·유인 현저성·노력·운동·인과), *언제*(phasic vs ramp vs 분 단위), *어디서*(VTA 발화 vs NAc 국소 방출 vs 자원별 sub-system). 충돌의 상당 부분은 **어느 채널을 측정했는가**의 문제로 재편된다([[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation|Mohebi 2019]] · [[grove-2022-dopamine-subsystems-track-internal|Grove 2022]]).
> 2. 그래도 **환원되지 않는 진짜 충돌**이 셋 남는다: ① 학습 신호인가 동기 신호인가([[blanco-pozo-2024-dopamine-independent-effect-rewards-choices|Blanco-Pozo 2024]]의 인과 null), ② 전향적 예측(RPE)인가 후향적 인과 추론(ANCCR)인가, ③ ‘갈망’이 예측 가치로 환원되는가([[berridge-2023-separating-desire-from-prediction-of|Berridge 2023]]).
> 3. [[concept-need-motivation-pleasure-utility|NMPU]] 기준으로 도파민은 **Motivation(갈망·노력·가치)과 Utility(학습·유연성)** 축에 걸치고, **Pleasure(좋아함)에서는 빠진다** — 이 점은 거의 모든 진영이 합의한다.

# 도파민 기능 주요 이론 비교

이 페이지는 위키에 흩어진 도파민 이론을 **나란히 비교**하기 위한 synthesis다. 개별 근거는 각 논문·개념 페이지에 있고, 회로 해부학은 [[concept-dopamine-reward-system]]에 있다. 🎯 index의 "진영" 분류를 그대로 따른다.

> [!note] 출처 표기
> 위키에 원문 페이지가 있는 주장은 위키 링크(`[[…]]`)로 표시했다. 링크 없이 연도만 적은 고전 문헌(Schultz 1997, Berridge & Robinson 1998, Redgrave & Gurney 2006 등)은 **위키 밖 일반 문헌**이며, 해당 원문은 아직 ingest되지 않았다.

---

## 1. 한눈에 비교

| # | 이론 (진영) | 도파민이 부호화하는 것 | 주 시간척도 | 대표 근거 (위키) | 강점 | 약점·반례 |
|---|---|---|---|---|---|---|
| 1 | **보상 예측오차 (RPE / TDRL)** — Schultz·Dayan·Montague | δ = 실제 − 예측 보상. 학습 교사 신호 | Phasic burst/dip (~100 ms) | [[concept-dopamine-reward-system]] (고전 요약) | 정량적·반증 가능. cue로의 반응 이동·누락 시 dip를 정확히 예측 | 혐오·새로움·운동·ramp 신호([[adam-2026-dopamine-takes-hit-how-neuroscience|Adam 2026]]); outcome 시점 조작의 행동 무효과([[blanco-pozo-2024-dopamine-independent-effect-rewards-choices|Blanco-Pozo 2024]]) |
| 1a | **일반화 / 벡터 RPE** — Gershman·Daw | 상태 feature별로 분해된 δᵢ, belief-state RPE, successor representation | Phasic + 상태 의존 | [[gershman-2024-explaining-dopamine-prediction-errors-beyond]] · [[lee-2024-feature-specific-prediction-error]] | 뉴런별 이질 반응(위치·시야각)을 RPE 틀 안에서 흡수 | 틀이 커질수록 반증 가능성↓; ANCCR·지각된 현저성은 여전히 틀 밖 |
| 2 | **유인 현저성 (Incentive salience, ‘갈망’)** — Berridge·Robinson | 단서에 ‘원함’의 동기 자력 부여. 학습된 예측과 **별개** | 단서 제시 시 즉시 (재학습 불필요) | [[concept-liking-wanting]] · [[berridge-2023-separating-desire-from-prediction-of]] · [[concept-incentive-sensitization]] · [[robinson-2025-incentive-sensitization-30-years]] | ‘좋아함’과의 이중해리; 소금욕구 첫 재노출 즉시 원함·‘아플 줄 알면서 원함’ = 예측으로 환원 불가 | 정량 모델 부족; RPE+상태의존 가치로 재기술 가능하다는 반론(Gershman 계열) |
| 3 | **노력·행동 활성 (Effort / activation)** — Salamone | 행동 비용 극복, 비용-편익 결정, 접근 행동 활성 | Tonic / 분 단위 | [[salamone-2012-mysterious-motivational-functions-mesolimbic]] · [[concept-effort-based-decision-making]] | DA 고갈 시 저노력-고보상 선택으로 이동하나 **섭취·쾌락은 보존** | 학습 신호(phasic)를 설명하지 않음; ‘reward’ 용어 폐기는 과잉이라는 비판 |
| 4 | **가치·동기 방송 (Value of work)** — Berke | 현재 상태의 시간할인 미래보상 가치 V(t); 그 급변분이 RPE | Ramp(분·초) + phasic | [[hamid-2016-mesolimbic-dopamine-signals-value-work]] · [[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation]] · [[jung-2024-dopamine-mediated-formation-of-a]] · [[pascoli-2026-conditioned-accumbal-dopamine-transients]] | RPE(1)와 노력(3)을 **한 신호의 두 시간척도**로 통합. Mohebi: 발화=학습, 국소 방출=동기로 채널 분리 | V와 δ를 행동적으로 구분하는 결정 실험 어려움 |
| 5 | **후향적 인과 추론 (ANCCR)** — Namboodiri | 보상이 일어난 뒤 “무엇이 이것을 일으켰나”를 거꾸로 찾는 순인과 기여도 | Phasic, 보상 후 역방향 | [[adam-2026-dopamine-takes-hit-how-neuroscience]] (Jeong 2022 Science 요약) | 소거·단서 재발(흡연 cue)을 RPE보다 잘 설명한다는 주장 | 위키에 1차 원문 미수록; 대부분 과제에서 RPE와 예측이 겹침 — 판별 실험이 핵심 쟁점 |
| 6 | **현저성·새로움·행위 예측 (Salience / action prediction)** — Redgrave·Calipari·Greenstreet | 보상 여부 무관 현저 사건, 혐오 자극, 행위 예측오차 | Phasic | [[adam-2026-dopamine-takes-hit-how-neuroscience]] (Kutlu 2021·Menegas 2018·Greenstreet 2025 요약) · [[warthen-2019-neuropeptide-y-and-representation]] | 전기충격·새로움에 대한 DA 상승 설명; 반복 행동·습관을 **가치 없는** 행위 예측으로 설명 | 값의 부호(좋음/나쁨)를 쓰는 행동을 설명하기 어려움; 부위(꼬리 선조체 vs NAc) 의존성 큼 |
| 7 | **자원·채널별 sub-system (Heterogeneity)** — Knight·Morales·Rayport | 단일 신호가 아님. 물·칼로리·단서별 별도 경로, 표적·공방출 이질성 | 채널마다 다름 (post-absorptive slow ramp ~ phasic) | [[grove-2022-dopamine-subsystems-track-internal]] · [[grove-2025-lateralized-pathway-associating-nutrients]] · [[morales-2017-ventral-tegmental-area-cellular-heterogeneity]] · [[mingote-2019-dopamine-glutamate-neuron-projections-to]] · [[hoang-2026-methamphetamine-potentiates-the-use-of]] | 진영 간 충돌을 “어느 채널을 쟀나”로 해소; 섭식 연구와 직결 | 자체로는 계산 이론이 아님 — 각 채널이 **무엇을** 계산하는지 여전히 1–6번에 기댐 |
| 8 | **내수용 1차 보상 · credit assignment** — Weber·Gong | 섭취 후 내부 상태 변화(칼로리·삼투압)를 1차 보상으로, 구강·위장 신호의 시간 일치로 학습 | 섭취 후 수십 초–분 | [[weber-2025-interoceptive-origin-reinforcement-learning]] · [[yang-2026-a-sync-state-in-the]] · [[thanarajah-2019-food-intake-recruits-orosensory]] · [[onimus-2026-the-gut-brain-vagal-axis-governs]] | RL의 ‘보상’이 어디서 오는지 답함; 0.8 Hz sync state = RPE 아닌 학습 게이트 | 음식·물 외 보상(사회·약물)으로의 일반화 미검증 |
| 9 | **학습 규칙 조절 (Meta-learning · plasticity gating · 후성)** — Stuber·Maze | 학습률 자체(meta-RPE), 시냅스 가소성 허가, 히스톤 공유결합으로 장기 전사 변화 | 시행 누적 ~ 일·평생 | [[hjort-2026-prefrontal-to-ventral-tegmental-area]] · [[piette-2026-striatal-endocannabinoids-drive-one-shot]] · [[ochan-2026-dopamine-drives-persistent-remodelling-of]] · [[concept-h3-dopaminylation]] · [[huang-2024-dopamine-mediated-interactions-between-short]] | 도파민을 “신호”가 아니라 **학습 기계의 조절자**로 확장; 인지 유연성·중독 지속성 설명 | 서로 다른 기전(수용체 신호 vs 후성)을 한 이론으로 묶기 어려움 |

**보조 진영 — 도파민이 아닌 것들**: 보상 ‘관여 지속’은 NAc 2-AG/CB1R([[marcus-2026-endocannabinoids-facilitate-reward-engagement-through]]), ‘좋아함’은 오피오이드 핫스폿([[concept-hedonic-hotspot]]), 음성강화 중독은 확장 편도 CRF/dynorphin([[vendruscolo-2026-neurobiology-of-negative-reinforcement]])이 담당한다. 여러 이론이 설명하려던 현상의 일부는 애초에 도파민 몫이 아닐 수 있다.

---

## 2. 비교 축별 정리

### 2.1 학습 신호인가, 동기 신호인가
- **학습 쪽**: RPE(1), 벡터 RPE(1a), ANCCR(5), meta-RPE(9). 도파민 조작은 **다음 시행의 선택**을 바꿔야 한다.
- **동기 쪽**: 유인 현저성(2), 노력(3). 도파민 조작은 **지금 수행의 강도**를 바꾸고 학습된 내용은 건드리지 않는다.
- **양쪽 모두**: 가치 방송(4) — 같은 V(t)의 느린 성분=동기, 급변=학습. [[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation|Mohebi 2019]]는 이것이 물리적으로도 다른 채널(VTA 발화 vs NAc 국소 방출)임을 보였다.
- **결정적 긴장**: [[blanco-pozo-2024-dopamine-independent-effect-rewards-choices|Blanco-Pozo 2024]] — RPE처럼 보이는 outcome 신호를 광조작해도 다음 선택이 바뀌지 않음(BF 0.048). 학습은 PFC hidden-state inference가 수행. → 최소한 **이 과제에서는** “RPE 모양 신호 = 학습 원인”이 성립하지 않는다.

### 2.2 전향적 예측인가, 후향적 추론인가
- RPE: cue → 보상을 **미리 예측**하고 오차로 갱신.
- ANCCR: 보상 → cue를 **거꾸로 검색**. 두 모델은 표준 조건화에서 비슷하게 예측하지만, cue-보상 간 인과를 끊는 조작(contingency degradation, 배경 보상 삽입)에서 갈라진다.
- 연결점: [[hjort-2026-prefrontal-to-ventral-tegmental-area|Hjort 2026]]의 contingency degradation은 바로 이 판별 영역에서 **meta-RPE**라는 제3의 답을 내놓는다(RPE의 gain 조절로 설명; ANCCR 불필요 주장인지는 원문 범위 확인 필요).

### 2.3 ‘갈망’은 예측 가치로 환원되는가
- 환원론: 벡터 RPE·가치 방송 진영은 상태의존 가치(배고픔·소금욕구 반영)로 ‘갈망’을 재기술할 수 있다고 본다.
- 비환원론: [[berridge-2023-separating-desire-from-prediction-of|Berridge 2023]] — ① 소금 결핍 상태에서 **한 번도 좋았던 적 없는** 짠 CS+를 첫 재노출에 즉시 원함(재학습 없음) ② CeA 자극 시 전기충격봉을 “아플 줄 알면서” 반복 접근. 예측·기억·실제 쾌락을 모두 초과하는 ‘원함’.
- 섭식 함의: [[pascoli-2026-conditioned-accumbal-dopamine-transients|Pascoli 2026]]의 cue-유발 NAc 도파민=**주관적 가치**가 compulsion을 예측 — 가치 방송(4)과 유인-감작(2) 어느 쪽 증거로도 읽힌다. 두 진영의 판별 증거로는 약함.

### 2.4 쾌락(좋아함)
- **거의 전 진영 합의**: 도파민은 ‘좋아함’에 불필요. 근거 — DA 고갈 후 맛 반응성 보존([[salamone-2012-mysterious-motivational-functions-mesolimbic|Salamone]]), 오피오이드 특이성([[korb-2020-dopaminergic-and-opioidergic-regulation|Korb 2020]]), 인간 anhedonia에서 예측 wanting↓·소비 liking 보존([[schulz-2026-blunted-anticipation-but-not|Schulz 2026]]).
- 부분 예외: [[guillaumin-2023-disentangling-the-role-of-nac|Guillaumin 2023]] — NAc D1 경로가 좋아함+갈망 둘 다에 관여. 도파민 **자체**가 아니라 D1-MSN 하류 회로의 역할로 읽는 것이 안전.

### 2.5 단일 신호인가, 다중 채널인가
- 1–6번은 대체로 **단일 계산 변수**를 가정한다.
- 7번(heterogeneity)은 그 가정을 무너뜨린다: Grove 2022의 물·칼로리·단서 sub-system, Mingote 2019의 DA-GLU 공방출 → ChI 전환 게이트, Hoang 2026의 VTA→LH 비-RPE ramp.
- 결과: “RPE냐 아니냐”는 **“어느 투사·어느 시간창을 봤느냐”**로 재정식화된다. 예) NAc core 단서 반응은 RPE형, DS post-absorptive 신호는 1차 보상형, 꼬리 선조체는 위협 현저성형.

---

## 3. NMPU 대응표

[[concept-need-motivation-pleasure-utility|Need–Motivation–Pleasure–Utility]]에 각 이론을 대응시키면:

| NMPU 축 | 도파민 관여 | 가장 잘 맞는 이론 |
|---|---|---|
| **Need** (내부 결핍) | 간접 — 상태가 도파민 신호를 **조절**함 | 8 (내수용 1차 보상), 7 (자원별 sub-system) |
| **Motivation** (갈망·노력) | **핵심** | 2 (유인 현저성), 3 (노력), 4 (가치 방송) |
| **Pleasure** (좋아함) | **거의 없음** | — (오피오이드·eCB 핫스폿) |
| **Utility** (결과로 행동 규칙 재구성) | **핵심** | 1/1a (RPE), 5 (ANCCR), 9 (meta-learning·가소성) |

→ “도파민 이론 논쟁”의 상당 부분은 **Motivation 채널을 본 연구와 Utility 채널을 본 연구가 같은 이름(‘보상’)으로 싸운 것**으로 재해석할 수 있다. *(해석 — 원문 주장 아님)*

---

## 4. 섭식·비만에 대한 이론별 예측

| 이론 | 과식·비만 설명 | 개입 함의 |
|---|---|---|
| RPE | 초가공식품(UPF)의 당·지방 조합이 예측보다 큰 δ를 반복 생성 → 과도한 cue 가치 학습 | 소거·예측 갱신 (cue exposure) |
| 유인 현저성 | cue의 ‘갈망’이 ‘좋아함’과 분리되어 감작 — 덜 즐기면서 더 원함 | 단서 차단·환경 설계; [[concept-cue-reactivity]] |
| 노력 | 저노력 고칼로리 접근성 → 비용-편익 계산이 섭취 쪽으로 기움 | 접근 비용 조작 ([[concept-food-environment-access]]) |
| 가치 방송 | cue-유발 NAc DA = 주관적 가치 → compulsion 예측 표지 | 조기 취약성 선별 ([[pascoli-2026-conditioned-accumbal-dopamine-transients|Pascoli 2026]]) |
| 내수용 보상 | 장-미주-VTA 경로가 칼로리를 1차 보상으로 보고; 비만에서 이 신호 둔화 | GLP-1RA·미주 조절 ([[onimus-2026-the-gut-brain-vagal-axis-governs|Onimus 2026]]) |
| 다중 채널 | 구강(proxy) vs 섭취후(primary) 채널 불일치 → 비영양 감미료·UPF 학습 교란 | 채널별 표적 치료 |
| Hedonic devaluation (반대 축) | 만성 HFD가 오히려 쾌락 가치를 **낮춤** — 유인-감작과 정면 긴장 | [[concept-hedonic-devaluation]] · [[gazit-shimoni-2025-changes-in-neurotensin-signalling-drive]] |

상세 임상 맥락: [[concept-food-addiction]] · [[overview-sikrakhak-ch20-opioid-dopamine-liking-wanting]] · [[overview-sikrakhak-ch24-food-craving-addiction]].

---

## 5. 판별 실험 — 이론들을 가르는 조건

| 조작 / 관찰 | RPE | 유인 현저성 | 노력 | 가치 방송 | ANCCR |
|---|---|---|---|---|---|
| Outcome 시점 DA 광억제 → 다음 선택 | 바뀜 | 거의 불변 | 불변 | 바뀜(작게) | 바뀜 |
| DA 고갈 → 맛 반응성(좋아함) | 불변 | 불변 | 불변 | 불변 | 불변 |
| DA 고갈 → 고노력 선택 | 약한 예측 | ↓ | **↓ (핵심)** | ↓ | 예측 없음 |
| 상태 전환 후 **첫** cue 노출 (재학습 없음) | 예측 못 함 | **즉시 ‘원함’** | — | 상태의존 V라면 가능 | 예측 못 함 |
| 배경 무조건 보상 삽입 (contingency ↓) | 느린 소거 | — | — | — | **빠른 소거** |
| 혐오 자극(충격) | DA dip | 부위 의존 | — | dip | 부위 의존 |

*(표는 각 이론의 표준 형태에서 도출한 예측. 수정판 이론은 여러 칸을 흡수할 수 있음 — 특히 1a와 4.)*

---

## 6. 종합 판단

1. **RPE는 죽지 않았지만 단일 이론으로서의 지위는 잃었다.** 가장 정확한 현재 표현은 “일부 투사(NAc core 등)의 phasic 신호는 RPE형이며, 그것이 학습의 **유일한** 원인은 아니다”이다 ([[gershman-2024-explaining-dopamine-prediction-errors-beyond|Gershman 2024]]의 방어 + [[blanco-pozo-2024-dopamine-independent-effect-rewards-choices|Blanco-Pozo 2024]]의 인과 null).
2. **Berke의 가치 방송(4)이 현재 가장 넓은 통합 틀**이다 — RPE·노력·ramp를 하나의 V(t)와 두 채널로 설명. 단 유인 현저성의 “첫 노출 즉시 원함”은 여전히 부담.
3. **Heterogeneity(7)는 이론이 아니라 메타 원칙**이다. 앞으로의 이론 비교는 항상 “어느 sub-system에서”를 명시해야 한다.
4. **섭식 연구에서 가장 생산적인 축은 8 (내수용 1차 보상)** — 도파민 신호의 *원천*을 묻기 때문에 다른 모든 이론의 “보상 r”을 채워 넣는다.
5. 위키의 공백: ANCCR 1차 문헌(Jeong 2022 Science), Redgrave 현저성 원문, 꼬리 선조체 위협 부호화(Menegas 2018) 원문이 아직 ingest되지 않았다 — 5·6번 진영의 비교는 2차 보도([[adam-2026-dopamine-takes-hit-how-neuroscience|Adam 2026]])에 의존한다.

---

## 관련 페이지
- 회로 hub: [[concept-dopamine-reward-system]] · [[concept-nucleus-accumbens]] · [[concept-medium-spiny-neuron]] · [[concept-striatal-cholinergic-interneuron]]
- 동기 틀: [[concept-need-motivation-pleasure-utility]] · [[kim-2024-unified-theoretical-framework-underlying-regulation]] · [[overview-behavioral-neuroscience-of-motivation-2016]] · [[redish-2016-the-computational-complexity-of-valuation]] · [[odoherty-2016-multiple-systems-for-the-motivational]]
- 중독 틀: [[luscher-2021-consolidating-the-circuit-model-for]] · [[concept-negative-reinforcement-hyperkatifeia]] · [[concept-compulsion]]
- 인물: [[person-knight-zachary]] · [[person-sharpe-melissa]] · [[person-luscher-christian]] · [[person-maze-ian]]
