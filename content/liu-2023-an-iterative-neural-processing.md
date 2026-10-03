---
title: "An iterative neural processing sequence orchestrates feeding (Liu 2023, Neuron)"
type: paper
created: 2026-10-03
updated: 2026-10-03
source: "raw/2023 Neuron. An iterative neural processing sequence orchestrates feeding.pdf"
authors: [Qingqing Liu, Xing Yang, Moxuan Luo, Junying Su, Jinling Zhong, Xiaofen Li, Rosa H.M. Chan, Liping Wang]
year: 2023
journal: "Neuron 111(10):1651–1665.e5 (2023-05-17; online 2023-03-15); doi:10.1016/j.neuron.2023.02.025 (Open Access CC BY-NC-ND)"
---

> [!takeaway] 연구 방향 관점의 핵심
> **배고픈 쥐도 한 번에 쭉 먹지 않는다.** 먹이 접촉(C)은 걷기(W)·챔버 탐색(E)과 계속 교대하는 **조각난(fragmented) 과정**이다. 저자들은 매 "feeding segment"마다 세 GABA성 노드가 **차례대로, 반복해서** 켜진다고 제안한다. ① **ARC^AgRP = preparation**: 비섭식 탐색 중에 켜져 탐색을 누르고 다음 접근을 준비한다. ② **LH^GABA = initiation**: 접근·접촉을 여는 "target probing impulse"이며, 접촉이 길어도 반응은 먼저 꺼진다. ③ **DR^GABA = maintenance**: 접촉 지속시간과 R=0.908로 같이 늘어나고 닫힌고리 조작으로 접촉 길이가 양방향으로 바뀐다. 같은 Wang lab(SIAT)의 리뷰 [[liu-2026-granular-motivational-interaction-and|Liu & Wang 2026]]이 내세운 "LH^GABA = initiation hub" 도식의 **1차 실험 근거**가 이 논문이다.
> 사용자 연구에 닿는 지점: (1) **[[kim-2024-normative-framework-dissociates-need|Kim 2024 normative model]]과 같은 방향** — 접근·접촉 때 AgRP↓·LH↑, 먹이를 떠나 탐색할 때 AgRP 재상승. 이 패턴은 "AgRP = predicted deficit(Need), LH = Motivation" 해석으로도 그대로 읽힌다(저자 해석은 "섭식 관련성의 실시간 평가"). (2) **phase 분리의 중요성 재확인** — LH^GABA 활성은 쥐를 물체 앞에 *옮겨 놓은* passive 과제에서 즉시 물어뜯기를 만든다. 이는 [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]의 "consummatory-isolated 조건에서만 효과" 결과와 같은 논리다. (3) **bulk photometry가 LH 이질성을 덮는다** — "LH^GABA는 개시만"이라는 결론은 GAD2 전체 평균에서 나왔다. LepR consummatory subset(39%)·[[lee-2026-distinct-lateral-hypothalamic-gabaergic|Lee 2026]] consumption ensemble 같은 지속형 하위집단과는 병기해야 한다. (4) C-W-n(E-W)-C 전이 구조는 **NMPU의 Motivation 누적·leak·threshold를 행동 미세구조로 측정할 지표 후보**다.

# An iterative neural processing sequence orchestrates feeding (Liu et al. 2023)

- **저널**: Neuron 111(10), 1651–1665.e5 (2023-05-17; 접수 2022-07-14, 수정 11-22, 채택 2023-02-16, 온라인 03-15). DOI: 10.1016/j.neuron.2023.02.025. PDF는 in-press 쪽수(1–15, e1–e5)로 표기돼 있다.
- **소속**: 중국과학원 선전선진기술연구원(SIAT) Brain Cognition and Brain Disease Institute, Shenzhen Key Lab of Neuropsychiatric Modulation — **Liping Wang lab**(교신·lead contact, lp.wang@siat.ac.cn). 공동: City University of Hong Kong 전기공학과(Rosa H.M. Chan, Moxuan Luo 소속). 행동 분석법은 X.Y.·M.L.이 확립했다(Author contributions). 공동 1저자 Qingqing Liu·Xing Yang·Moxuan Luo.
- **모델·방법**: C57BL/6J, AgRP-ires-Cre(Jax 021899), GAD2-ires-Cre(Jax 010802), 양성, 8–18주. 금식군은 22–26 h 절식. **LH^GABA·DR^GABA는 GAD2-Cre로 정의했다**(LH·DR에서 VGAT–GAD2 공발현을 Fig S3A로 확인). 기록은 fiber photometry(GCaMP6s, ARC–LH 이중기록 시 LH는 hVGAT-GCaMP6m), 조작은 ChR2(20 Hz, 10 ms, ~15 mW)·stGtACR2(연속광, ~2 mW)·hM4Di(CNO 4 mg/kg).
- **코드**: 행동 식별 Zenodo 10.5281/zenodo.7645588, 행동 군집 Zenodo 10.5281/zenodo.7645569. 행동 장치는 같은 lab의 AIBM(infrared touch frame; Liu 2021 Neurosci Bull).
- **사용자 주석본**: Drive에 "(최형진 의견)" 사본(2023-03-16 저장)이 있다. 텍스트 레이어는 원본과 글자 수까지 동일하고, 하이라이트·메모 주석은 텍스트 추출로 확인되지 않아 인용하지 않았다.

## 한 줄 요약
기계학습 행동 분류로 15분 자유섭식을 분해하면 **섭식은 먹이 접촉–걷기–탐색이 교대하는 조각난 과정**이다. 매 조각마다 **ARC^AgRP(준비: 비섭식 탐색 억제) → LH^GABA(개시: 접근·탐침 충동) → DR^GABA(유지: 접촉 지속)**가 순차적·반복적으로 동원돼 "먹이 소비 vs 환경 탐색"의 동기 경쟁을 정리한다는 모델을 photometry와 광유전·화학유전 조작으로 제시했다.

## 핵심 내용

### 행동 패러다임·ML 분류 (Methods, Fig S1)
- **챔버**: refuge alley(20×10×30 cm)와 원형 open field(지름 50 cm)를 연결했다. 중앙 바닥 구멍(지름 15 mm)에 **먹이 펠릿·같은 모양의 ABS 플라스틱 물체·땅콩버터(PB) 튜브** 중 하나를 고정했다(5–10 mm 돌출). 쥐는 **사전 습관화 없이** 넣고 15 min 기록했다. 고정하지 않은 펠릿으로 확인해 보니 쥐는 펠릿을 숨은 곳으로 끌고 가지 않고 원래 위치에서 먹었다(Fig S1A–D). 그래서 시야가 좋은 중앙 고정을 택했다.
- **분류 파이프라인**: K-means로 프레임을 군집화한 뒤 수동 라벨(14 action; 대부분 군집 >1000 프레임) → **ResNet50**으로 전 프레임 라벨링 → infrared 위치·속도와 **random forest**로 오류 교정 → **TICC**(Toeplitz inverse covariance-based clustering)로 분절. BIC가 **9요소(8 behavior + other)**에서 국소 최소였고, 8개 behavior가 프레임의 **>98%**를 덮었다.
- 8 behavior를 3범주로 묶었다. **Chamber exploration(E)**: refuge·edge·climbing·head-up. **Walking(W)**: head-straight·head-down·floor exploration. **Food contact(C)**. W는 다시 다음 행동에 따라 walking/approaching(Wa, 다음이 C)과 walking/not approaching(Wn, 다음이 E)으로 나눴다.
- 금식 쥐의 C segment 구성은 touching 38.4%, holding & eating 16.3%, mouth near food 15.6%, **biting 13.2%**, 기타 16.5%였다. segment 안에서 action의 **고정된 순서는 없었다**(Fig S1I–J).
- **실시간 폐쇄회로**: ResNet18이 biting·touching을 ~16 fps(평균 지연 62.5 ms)로 검출해 레이저를 켠다.

### Figure 1 — 섭식은 조각나 있다
- Segment 수(금식/자유급식, 각 10마리): E 602/669, W 734/766, C 264/194. 자유급식 쥐는 E segment가 W·C보다 유의하게 길었다. 금식 쥐는 C segment 평균 길이가 자유급식보다 길었고 E 길이는 차이가 없었다(rank-sum, ***p<0.001). 15 min 섭취량도 금식군이 컸다(***p<0.001).
- **C 다음은 대부분 W였다**: 자유급식 **92.4%**, 금식 **75.4%**. 그 뒤 E–W 교대가 n회 이어진 다음 다시 C로 돌아온다 → **C-W-n(E-W)-C** 구조. 공통 패턴은 E-W-C-W-E(EWCWE)였다(Fig S1L).
- 배고픔의 효과: **E→섭식 관련 행동 전이율이 금식에서 거의 2배**, C→Wa 전이↑, E→Wn 전이↓, n(E-W) 교대 수↓(Fig 1F–G, S1K).
- → 저자 해석: 먹이 소비는 식욕을 채우는 단순 과정이 아니라 **식욕과 탐색 동기의 동적 경쟁**이다.

### Figure 2 — 세 집단의 순차 반응 (금식 + 먹이)
- 가장자리·refuge에서 먹이로 곧장 걸어갈 때 **ARC^AgRP → LH^GABA → DR^GABA 순으로 반응**했다(AgRP 146 segments/9 mice, LH 86/5, DR 59/7).
  - **E 중**: AgRP↑, LH 거의 무반응, DR↓.
  - **Wa·C 중**: AgRP↓, LH↑, DR는 먹이에 거의 닿을 무렵부터 **지연 상승**.
  - **Wn 중**: AgRP는 baseline으로 복귀, DR↓, LH↑. 단 LH 최대 반응은 접근 때보다 낮았다(Fig S2D, p<0.05–0.01). 저자들은 이를 LH^GABA 이질성의 단서로 본다.
- **AgRP는 매 조각마다 다시 켜진다**: 1·3·6·10번째 접촉과 그 뒤 탐색을 비교하면 AgRP는 매 Wa·C마다 떨어지고 뒤따르는 탐색에서 다시 오른다(Fig S2B). "먹이 발견 시 꺼진다"는 고전 관찰(Chen 2015, Betley 2015)을 iterative 형태로 확장한 결과다.
- **접촉 길이 분석**(short <1 s, mid 1–5 s, long ≥5 s): LH^GABA 반응 곡선은 세 그룹에서 비슷했고, 반응 지속–접촉 지속 상관이 약했다(**Spearman R=0.387**). 긴 접촉에서는 **접촉이 끝나기 전에 반응이 사라졌다**(Fig 2J). DR^GABA는 **R=0.908**로 강한 상관을 보였고 긴 접촉 끝까지 반응이 유지됐다(Fig 2M).
- **이중기록**(Fig 2N–Q): 접근 때 AgRP와 LH는 음의 상관 모양이었다. LH가 DR보다 먼저 오르고, 먼저 정점에 닿고, 먼저 내려왔다. 그러나 단일 segment 수준 **mutual information은 AgRP–LH에서 낮고 LH–DR에서는 들쭉날쭉**했다(Fig S3I–J). AgRP→LH^GABA(Fu 2019), LH^GABA→DR^GABA(Gazea 2021, Weissbourd 2014) 연결이 알려져 있지만 저자들은 이 셋이 **단순 feedforward 회로는 아니라고** 결론 내린다.

### Figure 3 — 비식용 물체(금식)·자유급식 대조
- **금식 + 플라스틱 물체**: AgRP는 Wn에서 억제되고 E에서 활성되지 않았다. 다만 edge·refuge 탐색 *시작*에서 떨어지고 먹이를 찾지 못한 탐색 중에는 올랐다(Fig S2F). 물체에 접근·접촉할 때도 억제됐다(먹을 수 있는지 확인하는 섭식 관련 행동으로 해석). → 저자 결론: AgRP 반응은 **"지금 행동이 섭식 관련인가"의 실시간 평가**다.
- **LH^GABA는 물체에도 먹이와 같은 모양으로 반응**했다(Wa·접촉, 접촉 지속 상관 R=0.556). → **"표적(먹이든 물체든)에 다가가 탐침하는 충동(impulse to approach and probe)"**을 부호화한다는 가설.
- **DR^GABA**는 물체 접촉 중 활성, Wn·E에서 억제, 접촉 지속 상관 **R=0.788**. → 표적(식용 여부 무관) 접촉 **유지**, 억제는 주의 분산(distraction).
- **자유급식 + 먹이**: AgRP는 Wa·C뿐 아니라 **E·Wn에서도 억제**됐다. 즉 비섭식 탐색 중 AgRP 활성은 **배고플 때만** 나타난다. LH^GABA는 Wa·C에서 금식과 비슷하게 올랐고(R=0.479) E·Wn에서는 오르지 않았다. DR^GABA는 Wn·E 초기에 감소했고, Wa·C 반응은 baseline과 다르지 않았지만 접촉 지속과는 R=0.765로 상관했다. 저자들은 포만 시 DR^GABA 활성화 역치가 높아져 접촉이 짧아진다고 해석한다.

### Figure 4 — 쾌락 섭식(자유급식 + 땅콩버터)
- 행동 분석은 이중기록 쥐로 했다(AgRP-Cre 9, GAD2-Cre 4; PB에 3일 이상 하루 1 h 습관화). 쾌락 섭식도 조각나 있었다. 다만 항상성 섭식에서 보인 E↓·C↑ 패턴은 없었고, 행동 레퍼토리는 "자유급식 + 먹이"와 비슷했다(Fig S4).
- **AgRP는 PB 세션의 E 중 억제**됐다 → AgRP의 탐색 중 활성·준비 역할은 **항상성 섭식에 한정**된다.
- **LH^GABA**: PB 접촉마다 반응 지속이 거의 일정했다. **반응 정점은 쾌락 섭식·항상성 섭식·자유급식 탐침에서 비슷했다**(Fig 4G). → 쾌락 섭식에서도 개시를 부호화하지만, 정점이 palatability로 커지지는 않았다.
- **DR^GABA**: 접촉 지속과 함께 반응 지속이 늘었다. **정점은 배고픔과 맛있는 먹이 모두에서 커졌고, 쾌락 섭식 > 항상성 섭식**이었다(Fig 4H, **p<0.01–***p<0.001). → DR^GABA 반응은 **보상과 관련**될 수 있다.

### Figure 5 — ARC^AgRP 조작: 비섭식 행동 억제 = 준비
- **금식 쥐에서 억제**(hM4Di + CNO; c-Fos로 억제 확인): E→Wn 전이↑, E→Wa 전이↓ → 탐색↑·섭식 관련 행동↓. 섭취량은 감소했다(hM4Di+CNO 5 vs mCherry+CNO 9 vs hM4Di+saline 5, *p<0.05). 광억제에서도 감소했다(5 vs 5, **p<0.01).
- **자유급식 쥐에서 활성**(ChR2): E·C 뒤에 Wn 전이↓·Wa 전이↑ → 접근·접촉↑, 비섭식 걷기·탐색↓. 섭취량 증가(6 vs 5, **p<0.01).
- **물체 + 활성**: E·물체 접촉 뒤 Wa 전이는 약간 늘고 Wn 전이는 약간 줄었다. Wa·물체 접촉 bout 수는 늘었고 E·Wn 빈도는 변하지 않았다.
- → 저자 결론: AgRP 활성은 **조각 사이 간격에서 비섭식 행동을 억누르고 다음 섭식 행동 실행을 준비**한다.

### Figure 6 — LH^GABA 조작: 섭식 조각의 개시
- **Passive feeding 과제**(자유급식, 플라스틱 물체 앞에 손으로 옮겨 놓음): 보통은 곧바로 걸어 나간다. **LH^GABA 활성 시 놓이는 순간부터 물어뜯기 시작해 자극 내내 계속 물었다.** DR^GABA 활성 시에는 놓아주자마자 떠났다. 접촉 잠복기는 LH 활성군이 대조군·DR 활성군보다 짧았다(*p<0.05).
- LH^GABA를 30 s 활성화하면 **DR^GABA가 몇 초 탈억제된 뒤 강하게 억제**됐다(Fig S6E–F).
- **금식 쥐에서 실시간 억제**(stGtACR2, 먹이 주변 지름 125 mm trigger zone 진입 시 10 s): 먹이 접촉 잠복기↑(*p<0.05). 쥐는 먹이 주변에 머물며 가끔 건드렸지만 **물기·잡고 먹기 비율이 크게 감소**했고(***p<0.001) head-up 탐색이 늘었다(GtACR2 22 trials/6 mice vs 대조 39/8). **15 min 연속 억제 시 섭취가 완전히 차단**됐다(Fig S6A; 자유급식 활성 섭취 — 대조 8 vs ChR2 5; 금식 억제 섭취 — 대조 6 vs GtACR2 8; **p<0.01, ***p<0.001. 활성 시 섭취 변화의 방향은 본문에 서술되지 않았다).
- → 저자 결론: LH^GABA가 섭식 조각을 **개시**한다. DR^GABA는 개시하지 않는다.

### Figure 7 — DR^GABA 폐쇄회로 조작: 섭식 조각의 유지
- **자유급식 + 물체, 접촉 검출 시 10 s 활성**(ChR2 14 trials/8 mice vs 대조 16/7): 물체 접촉 비율·지속시간↑. 걷기(head-down·head-straight)와 edge 탐색은 감소했다.
- **금식 + 먹이, 접촉 검출 시 10 s 억제**(GtACR2 26/6 vs 대조 14/5): 먹이 접촉 비율·지속시간↓. head-down 걷기·refuge 체류↑.
- 15 min 섭취량(Fig S7A·D; 표본 4–6마리)에는 그림 범례에 유의성 표기가 없다. 효과는 **조각 단위 지속시간**에서 나타났다.
- → DR^GABA는 진행 중인 접촉을 **유지**하고, 억제되면 접촉이 끊겨 탐색으로 넘어간다.

### Discussion 요점
- 섭식은 **준비 단계**(식욕이 경쟁 동기와 겨루는 단계, 유연)와 **실행 단계**(개시 + 유지, 견고)의 교대다. 동기 경쟁이 실행을 끊으면 새 준비 단계가 시작된다. 이 순차·반복 처리는 구애·선천적 공포 같은 다른 선천 행동과 목표지향 동기의 **일반 원리**일 수 있다고 제안한다.
- **AgRP valence 논쟁의 통합 시도**: 음성 valence(Betley 2015)와 지속 양성 신호(Chen 2016)를 "비섭식 행동의 검출·억제"로 묶는다. 경쟁 동기 억제 문헌(Burnett 2016, Padilla 2016, Alhadeff 2018 등)과 정합한다고 본다.
- **LH^GABA 유발 물어뜯기의 재해석**: biting은 접촉 내내 일어나지만 LH^GABA는 접촉 중 정점을 찍고 baseline으로 돌아간다. 그래서 LH^GABA를 biting 운동 부호로 보지 않는다. LH^GABA 활성으로 생기는 지속적 물어뜯기(Navarro 2016의 indiscriminate eating 포함)는 **"반복된 개시" — 탐침 충동의 극단적 발현**이라고 해석한다.
- DR^GABA는 양성 valence를 부호화한다(McDevitt 2014). 10 s 넘는 긴 접촉에서는 반응 지속이 접촉 길이를 다 덮지 못해, **유지에는 다른 집단도 관여**할 것이다. 세 핵 모두에 섭식 억제 집단(ARC POMC, LH glutamatergic, DR glutamatergic)이 공존한다. 상류 후보로 DMH^LepR→AgRP(먹이 cue), septum GABA·NAc D1R→LH^GABA(개시 억제), CeA·VTA GABA→DR^GABA(위험 시 종료)를 든다.
- **인간 함의**: 사람의 "식사"는 대부분 학습된 행동일 수 있다(아이들은 식사 중 놀이를 멈추지 못한다). 성인도 식사 내내 음식에만 집중하지 않는다. 조각난 섭식의 신경 기반이 섭식장애 연구에 쓰일 수 있다고 본다.
- **한계(저자 명시)**: 먹이를 쥐가 있는 상태에서 넣어서 정확한 발견 시점을 정의하지 못했다. sniffing·stretching은 영상 샘플 부족으로 자동 식별하지 못했다. 첫 접촉 이전 segment(=food-searching phase)가 Wn의 4%(AgRP 16/276, LH 3/141, DR 16/384), E의 6%(23/297, 7/161, 25/455) 섞여 있다. population 기록이라 하위유형 정보가 손실된다.
- **추가 한계(위키 판단)**: 통계는 **segment·trial을 독립 표본으로** 처리한 rank-sum/signed-rank다(마우스 수준 nested 분석 아님). 섭취량 실험은 군당 4–9마리다. GAD2-Cre LH는 LepR·Nts·Gal 등 여러 GABA 하위집단을 포함한다. 습관화 없는 신규 환경이라 탐색 동기가 높게 설정됐다. 성별 분석이 없고 명기(light) 주기에 시험했다.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **NMPU 시간 전개 매핑**: [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]] 축에 대응시키면 preparation(AgRP) = **Need**가 경쟁 동기를 누르는 단계, initiation(LH^GABA) = **Motivation이 역치 K를 넘는 순간**, maintenance(DR^GABA; 쾌락 섭식에서 정점↑) = **Pleasure가 진행 중 행동을 붙잡는 단계**다. 이 논문은 NMPU를 시간축으로 펼친 실험적 단면이고, [[liu-2026-granular-motivational-interaction-and|Liu & Wang 2026]]의 granular state 분해와 NMPU의 "직교 보완" 관계를 1차 데이터로 연결한다.
- **조각난 섭식 = Motivation 누적의 leak/역치 동역학?** [[kim-2024-normative-framework-dissociates-need|Kim 2024]] 모델에서 Need만으로 행동을 구동하면 끊기고, Need가 Motivation으로 누적되면 지속된다. 금식 쥐도 75.4%의 확률로 접촉 뒤 걸어 나간다는 사실은 *Leak* 항이나 경쟁 동기(탐색의 Utility)가 실제로 크다는 뜻일 수 있다. 검증: Kim 2024의 M(t)=∫[a·N−Leak]dt, B=M−K 모델로 **C-W-n(E-W)-C 분포·전이 확률**을 적합하고, 금식/자유급식에서 a·Leak·K 중 무엇이 바뀌는지 추정한다.
- **AgRP 해석의 판별 실험**: 저자 해석은 "섭식 관련성 평가", NMPU 해석은 "예측 결핍(접근=predicted gain → ↓, 떠남·포기=predicted loss → ↑)"이다. 두 해석은 대부분 같은 예측을 하지만, **물체 세션**(먹이 없음)에서 탐색 시작 시 AgRP↓·탐색 지속 중 ↑는 "탐색이 먹이를 찾을 기대 = 예측 이득"으로 NMPU가 더 직접 설명한다. 상류 후보는 [[walker-2026-a-hypothalamic-circuit-for|PVH^Sim2]](먹이 부재·탐색 실패 시 AgRP 흥분)와 [[aitken-2024-negative-feedback-control-of-hypothalamic|DMH^LepR]](bout마다 맛으로 AgRP 억제)이다. 이들이 조각 사이 AgRP 재상승·하강을 나르는지 시험할 수 있다.
- **LH^LepR이 "개시"인가 "개시+유지"인가**: 사용자 lab [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]은 LepR의 seeking 25%·consummatory 39% subset을 보였다. 이 논문의 arena(고정 펠릿, TICC 분절)에서 **LepR-Cre photometry로 반응 지속–접촉 지속 상관**을 재면, GAD2 전체(R=0.387)보다 높은지로 "LepR consummatory subset = LH 안의 유지 성분" 가설을 시험할 수 있다. 또 폐쇄회로(Wa 검출 vs C 검출) LepR 조작은 Lee 2023의 phase-isolated 설계를 **한 세션 안에서** 구현하는 방법이 된다.
- **GLP-1RA의 작용 phase 예측**: [[kim-2024-glp-1-increases-preingestive-satiation|Kim 2024 Science]](DMH GLP-1R→AgRP 식전 포만)가 맞다면 GLP-1RA는 주로 **preparation**(AgRP)을 깎는다. 그러면 n(E-W) 교대 증가와 E→Wa 전이 감소가 예상되고, 접촉 지속(DR^GABA 축)은 상대적으로 덜 변해야 한다. [[lee-2026-distinct-lateral-hypothalamic-gabaergic|Lee 2026]]의 Ex-4가 LH^Vgat cue·섭취 반응을 모두 줄인 결과와 함께, **행동 미세구조 지표로 GLP-1RA 작용 phase를 분해**하는 설계가 가능하다.
- **인간 섭식 미세구조·DTx 지표**: "식사 중 주의 분산(대화·스마트폰)으로 조각나는 섭식"은 조각 간 E 단계의 인간판이다. 영상·wearable bite 검출로 **fragmentation index**(접촉→이탈 확률, 재개 잠복기)를 만들면 [[lee-2025-hijacked-brain-modern-obesity-cue|hijacked brain]] 표현형 분류나 mindful eating 개입의 매개 지표 후보가 될 수 있다.
- **NHP 번역**: 생쥐 LH^GABA 활성의 "비식용 물체 물어뜯기"를 저자들은 탐침 충동의 극단으로 해석한다. [[ha-2024-hypothalamic-neuronal-activation-non-human|Ha 2024]] macaque에서 aberrant gnawing이 없고 palatable food에 집중했다는 관찰은, 영장류에서 이 "개시 충동"이 전두엽 통제로 더 잘 표적화된다는 가설과 맞는다.

## ⚠️ 위키 내 충돌·긴장
- **"LH^GABA = 개시만" vs 지속형 LH^GABA 하위집단** — [[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]]·[[concept-appetitive-consummatory-phases]] 표([[jennings-2015-visualizing-hypothalamic-network-dynamics|Jennings 2015]] 기반 "LH^Vgat subset B: consummatory sustained ↑"), [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]의 consummatory LepR 39%, [[lee-2026-distinct-lateral-hypothalamic-gabaergic|Lee 2026]] consumption ensemble(섭취 10 s 내내 지속, value-scaled)은 모두 **섭취 중 지속 활동**을 보인다. 이 논문의 결론은 **GAD2 전체 bulk photometry**(긴 접촉에서 반응 소실, R=0.387)와 집단 단위 조작에 근거한다. 저자들도 Wn 반응 정점 차이(Fig S2D)를 이질성의 단서로 들고 하위유형 분석을 과제로 남겼다. → 모순이라기보다 **해상도 차이로 병기**한다. [[liu-2026-granular-motivational-interaction-and|Liu & Wang 2026]]의 "LH^GABA = initiation hub" 도식은 이 bulk 결과의 일반화임에 주의.
- **LH^GABA와 palatability** — [[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]]는 "LH GABAergic이 palatability를 부호화(칼로리 아님)"라고 정리한다. 이 논문에서는 **LH^GABA 반응 정점이 PB·일반 먹이·자유급식 탐침에서 비슷**했고(Fig 4G), 쾌락 섭식에서 정점이 커진 것은 **DR^GABA**였다(Fig 4H). [[gordon-2026-lateral-hypothalamic-control-of|Gordon 2026]]은 LH^GABA의 sustained 구간 value-scaling을 보고했다(FR:Suc). 측정 창(onset 정점 vs 2–3 s sustained), 과제(자유행동 vs head-fixed licking), Cre 라인(GAD2 vs Vgat)이 달라 직접 비교는 어렵다.
- **ARC^AgRP의 "섭식 중 지속 억제" 서술** — [[concept-appetitive-consummatory-phases]] 표의 "ARC AgRP: sensory cue로 즉시 ↓ / 지속 ↓"와 [[concept-npy-agrp-neurons]]의 "food sight·smell 즉시 억제"(Chen 2015)는 작은 우리에서 얻은 그림이다. 이 논문은 **넓은 arena의 배고픈 쥐에서 AgRP가 접촉 사이 탐색마다 다시 올라간다**고 보고한다(Fig S2B; 자유급식·PB 세션에서는 재상승 없음). [[aitken-2024-negative-feedback-control-of-hypothalamic|Aitken 2024]]의 bout 단위 AgRP 억제와 함께 보면 AgRP는 **식사 내내 평탄하게 꺼진 상태가 아니라 조각 단위로 진동**한다. 공간 규모·탐색 기회가 결과를 바꾸는 조건 변수다.
- **LH 활성화의 행동 효과 — paradigm 의존성** — [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]은 seeking과 consummatory가 동시에 가능한 큰 챔버에서 LH^LepR 활성이 **효과 없음**, phase-isolated에서만 효과를 보고했다. 이 논문의 LH^GABA 활성 효과는 쥐를 물체 앞에 옮겨 놓은 **passive(=consummatory-isolated에 가까운) 과제**에서 가장 극적이었다. 따라서 Lee 2023의 phase 논리와 **정합**한다. 단 세포 집단(LepR ≈ LH GABA의 4% vs GAD2 전체)이 달라 효과 크기는 비교하지 않는다.
- **"seeking 개시" 시점** — Lee 2023의 LepR은 자발적 seeking **약 6 s 전부터** 상승했다. 이 논문의 LH^GABA는 탐색(E) 중 거의 무반응이고 **Wa 시작과 함께** 올랐다. 먹이가 눈앞에 고정된 이 arena에서 "seeking"은 수 초짜리 접근이라, 숨긴 먹이를 찾는 Lee 2023의 seeking과는 행동 정의가 다르다. 시간 해상도도 다르게 비교해야 한다.
- **[[lee-2026-distinct-lateral-hypothalamic-gabaergic|Lee 2026]]·[[jia-2026-novelty-exploration-activated-ensemble-in|Jia 2026]]과는 대체로 정합**: LH^GABA가 **비식용 물체에도 같은 접근·접촉 반응**을 보인다(R=0.556). 이는 "food-specific이 아닌 salience/탐침 신호"라는 Lee 2026, Lee 2023의 "LH GABA 중 food-specific 8%" 결과와 같은 방향이다.
- **[[gordon-2026-lateral-hypothalamic-control-of|Gordon 2026]]과 수렴**: 선조체 DA가 섭취 **개시(bout 수)**만 강화하고 지속(bout 길이)은 강화하지 않는다. LH^GABA→(VTA)DA 축이 "개시", 비LH·비DA 노드(DR^GABA)가 "유지"라는 분업과 맞는다.
- **"LH^GABA = 개시만" vs "진행 중 섭취의 허가 게이트"** — [[oconnor-2015-accumbal-d1r-neurons-projecting|O'Connor 2015]]은 NAcSh D1R-MSN→LH^Vgat 억제를 섭식 **허가**로 보고, D1R 발화는 섭취 개시에 ↓·종료에 ↑하며 재활성·LH^Vgat 직접 억제가 진행 중 licking을 **한 lick 단위로 끊는다**(배고픈 쥐도 중단). 즉 그쪽에서 LH^GABA는 *외부 신호로 종료되는* 노드다. 이 논문은 같은 LH^GABA를 조각을 **여는 개시 노드**로 그린다. "LH^GABA 활성 = 섭취 진행" 부호는 일치하며(저자도 NAc D1R·septum GABA→LH^GABA를 개시 억제 상류 후보로 든다), 측정 축이 개시(Liu) vs 허가·종료(O'Connor)로 달라 병기한다.
## 관련 페이지
- [[concept-lateral-hypothalamus]] — LH^GABA = 섭식 조각 개시(탐침 충동). bulk photometry 수준 결론.
- [[liu-2026-granular-motivational-interaction-and]] — 같은 Wang lab 리뷰. 이 논문의 preparation/initiation/maintenance 3단을 5 phase granular state로 확장했다.
- [[concept-appetitive-consummatory-phases]] — 이분법을 preparation·initiation·maintenance로 세분. AgRP의 조각 단위 재상승은 표의 "지속 ↓"와 병기.
- [[concept-npy-agrp-neurons]] · [[concept-arcuate-nucleus]] — ARC^AgRP = 준비 단계(배고플 때 비섭식 탐색 억제). valence 논쟁의 통합 시도.
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] — 사용자 lab LH^LepR seeking/consummatory subset. phase-isolated 논리와 정합, 개시 시점 정의 차이.
- [[kim-2024-normative-framework-dissociates-need]] — AgRP=Need, LH^LepR=Motivation. 접근·접촉 시 AgRP↓·LH↑와 같은 방향. 조각난 섭식을 leak/역치 동역학으로 적합할 대상.
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] · [[concept-need-motivation-pleasure-utility]] — NMPU 시간 전개 매핑 가설(Need→Motivation 역치→Pleasure 유지).
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — 사용자 lab LH 리뷰. LH^GABA palatability 부호화 서술과 긴장.
- [[lee-2026-distinct-lateral-hypothalamic-gabaergic]] — LH^Vgat salience vs value-scaled consumption ensemble. bulk "개시만" 결론을 단일세포로 보완.
- [[gordon-2026-lateral-hypothalamic-control-of]] — 선조체 DA = 개시(bout 수)만 강화. 개시/유지 분업 수렴.
- [[aitken-2024-negative-feedback-control-of-hypothalamic]] — bout마다 맛으로 AgRP 억제. 조각 단위 AgRP 동역학의 상류 후보.
- [[walker-2026-a-hypothalamic-circuit-for]] — 먹이 부재·탐색 실패 시 PVH^Sim2→AgRP 흥분. 조각 사이 AgRP 재상승의 후보 입력.
- [[ha-2024-hypothalamic-neuronal-activation-non-human]] — 설치류 LH^GABA 활성의 aberrant gnawing(여기서는 "반복된 개시"로 재해석) vs NHP 무관찰.
- [[concept-computational-ethology]] — ResNet + random forest + TICC 행동 분절과 실시간 폐쇄회로 검출(16 fps)의 섭식 적용 사례.
- [[jennings-2015-visualizing-hypothalamic-network-dynamics]] — LH^Vgat appetitive/consummatory 비중첩 subset의 1차 출처(원문 ref 12). 이 논문의 bulk "개시만" 결론과 해상도 차이로 병기.
- [[jia-2026-novelty-exploration-activated-ensemble-in]] — LH 양가 salience ensemble. 비식용 물체 접근 반응과 같은 방향.
- [[lee-2025-hijacked-brain-modern-obesity-cue]] — 인간 섭식 fragmentation 지표의 DTx 응용 가설.
- [[de-vrind-2019-effects-of-gaba-and]] — LH^Vgat 화학유전 활성 → 나무 블록 갉기(t5=6.651, P=0.001)·chow 가루↑, 실제 섭취는 불변 (Obesity 2019, Adan lab). 본 논문의 '반복된 개시' 재해석이 설명하는 비식용 물어뜯기의 정량 사례. 같은 조작에서 운동↓·체온↑도 보고.
- [[mickelsen-2019-single-cell-transcriptomic-analysis-of]] — 같은 "비식용 물체 물어뜯기" 현상군의 **분자 하위집단 쪽 증거**(Nat Neurosci 2019, Jackson lab). LHA **Sst⁺** 화학유전 활성화가 비활동기에 gnawing(P=0.011)·digging·rearing·이동(P=0.038/0.009)을 끌어냈다. 본 논문은 GAD2 LH^GABA 전체를 다루고 이를 "표적 탐침 충동의 반복 개시"로 해석하는데, 그쪽 census는 LHA^GABA가 **15개 클러스터**(Sst형 3개 포함)로 갈린다고 적는다 → "어느 하위집단이 이 운동 프로그램을 내는가"는 두 논문 모두 미분해로 남겼다(병기).
- [[oconnor-2015-accumbal-d1r-neurons-projecting]] — NAc D1R-MSN→LH^Vgat 억제 = 섭식 허가·종료 게이트(진행 중 licking을 lick 단위로 중단). 본 논문이 LH^GABA 개시의 상류 억제 후보로 든 "NAc D1R→LH^GABA"의 1차 원전(⚠️ 참조).
- [[nieh-2016-inhibitory-input-from-the]] — LH^GABA→VTA 억제→DA 탈억제가 섭식뿐 아니라 사회·신기물체 조사 등 여러 행동을 활성화(motivational salience). 본 논문의 "LH^GABA가 비식용 물체에도 접근·탐침 반응(R=0.556)"과 같은 방향.
- [[siemian-2021-lateral-hypothalamic-lepr-neurons]] — LH^LepR이 appetitive(추구)만 구동하고 consummatory는 아님. 본 논문의 "LH^GABA = 개시(접근·탐침), 유지 아님"과 수렴(개시/추구 국소화).
- [[jennings-2013-the-inhibitory-circuit-architecture]] — BNST^GABA→LH^Vglut2 brake 해제로 섭식 개시. LH^GABA 활성(이 논문)과 더불어 LH 내 **두 개시 기전**(engine 켜기 vs brake 떼기).
- [[lu-2024-dorsolateral-septum-glp-1r-neurons]] — dLS^GLP-1R→LHA GABA 단시냅스 억제. 본 논문이 든 "septum GABA→LH^GABA(개시 억제)" 상류 후보의 분자 채널이자 GLP-1RA가 preparation phase를 깎는다는 예측의 회로.
- [[rossi-2023-control-of-energy-homeostasis]] — LHA 세포타입 taxonomy 리뷰(Vgat engine/Vglut2 brake). 본 논문은 LH^GABA를 시간축(preparation·initiation·maintenance 중 initiation)으로 기능 세분.
- [[korotkova-2026-balancing-acts-lateral-hypothalamic]] — LH = 욕구 arbitration 리뷰. 본 논문의 "섭식 vs 환경 탐색" 동기 경쟁을 행동 미세구조로 보인 사례(companion [[liu-2026-granular-motivational-interaction-and|Liu 2026]]와 함께).
