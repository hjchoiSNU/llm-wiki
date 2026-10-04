---
title: "Stress-driven potentiation of lateral hypothalamic synapses onto ventral tegmental area dopamine neurons causes increased consumption of palatable food (Linders 2022, Nat Commun)"
type: paper
created: 2026-10-03
updated: 2026-10-03
source: "raw/2023 Nature Communications. Stress-driven potentiation of lateral hypothalamic synapses onto ventral tegmental area dopamine neurons causes increased consumption of palatable food.pdf"
authors: [Louisa E. Linders, Lefkothea Patrikiou, Mariano Soiza-Reilly, Evelien H. S. Schut, Bram F. van Schaffelaar, Leonard Böger, Inge G. Wolterink-Donselaar, Mieneke C. M. Luijendijk, Roger A. H. Adan, Frank J. Meye]
year: 2022
journal: "Nature Communications 13:6898 (2022-11-15); doi:10.1038/s41467-022-34625-7 (Open Access CC BY)"
---

> [!takeaway] 연구 방향 관점의 핵심
> **위키가 "stress-induced eating = LH-VTA glutamatergic 강화 (Linders 2022)"로 2차 인용만 해 오던 바로 그 1차 자료다** ([[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]] §3, [[concept-lateral-hypothalamus]] 3가지 eating 표). 주장은 네 단계로 닫힌 고리다. ① **사회 스트레스(이틀, 총 4회 × 20 s 싸움)** 가 기호성 지방·당 섭취를 늘린다(chow는 늘지 않거나 오히려 줄어든다). ② 그 스트레스 중 **LHA^glut→VTA 뉴런이 직접 흥분**한다(fiber photometry; 이동·사회접촉으로는 안 켜짐). ③ 그 결과 **LHA^glut→VTA^DA 시냅스가 후시냅스 AMPAR 기전으로 potentiate**된다(AMPAR/NMDAR↑, rectification↑, PPR 불변, array tomography에서 GluA1 접촉↑) — 더구나 이 강화는 **mPFC 투사 VTA^DA에서만** 일어나고 NAc medial shell 투사에서는 일어나지 않는다. ④ 이 시냅스를 **인공으로 강화하면(20 Hz HFS, 또는 VTA 내 dexamethasone) 비스트레스 마우스도 지방을 더 먹고**, **스트레스 후 1 Hz LFS로 되돌리면(depotentiation) 스트레스성 지방 과식이 사라진다**. 즉 충분조건·필요조건을 한 논문에서 모두 채웠다.
> 사용자 연구에 닿는 지점 넷. (1) **[[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]]의 "상태(스트레스)가 Motivation gain을 바꾼다"를 시냅스 무게 한 개로 환원한 사례** — Need(chow 섭취)는 그대로인데 기호성 음식 쪽 Motivation만 올라간다. (2) **[[concept-drug-evoked-synaptic-plasticity|depotentiation 문법의 섭식판]]** — [[luscher-2021-consolidating-the-circuit-model-for|Lüscher]] 계열의 "잘못 강화된 시냅스를 되돌리면 행동이 되돌아온다"가 약물이 아니라 **스트레스 섭식**에서 성립한다. [[concept-deep-brain-stimulation|저주파 자극]] 기반 DTx·신경조절 설계의 직접 근거. (3) **[[lee-2023-lateral-hypothalamic-leptin-receptor|LH^LepR(GABA)]] 중심의 사용자 lab 축과 상보** — 여기서 움직이는 것은 GABA가 아니라 **glutamate** 쪽이며, 그래서 "LH^Vglut2 = brake"라는 위키 통념과 정면으로 긴장한다(아래 ⚠️). (4) 인간 쪽 anchor: 저자들이 인용한 **Martín-Pérez 2019**(과체중 청소년에서 LH–중뇌 rs-connectivity가 스트레스 반응·[[concept-emotional-eating|emotional eating]] 성향과 양의 상관)의 설치류 기전판이다.

# Stress-driven potentiation of LHA synapses onto VTA dopamine neurons causes increased consumption of palatable food (Linders et al. 2022)

- **저널**: Nature Communications 13, 6898 (2022-11-15; 접수 2021-12-06, 채택 2022-11-01). DOI: 10.1038/s41467-022-34625-7. ⚠️ Drive 원본 파일명은 "2023 Nature Communications…"로 시작하지만 **실제 출판연도는 2022년**이다(권호 13:6898).
- **소속**: Department of Translational Neuroscience, Brain Center, UMC Utrecht, Utrecht University (네덜란드) + IFIBYNE/CONICET, University of Buenos Aires (아르헨티나, array tomography). 교신 **Frank J. Meye** (F.J.Meye-2@umcutrecht.nl). 공저자 **Roger A. H. Adan** — 위키의 [[meye-2014-feelings-about-food-the|Meye & Adan 2014 TiPS]], [[de-vrind-2019-effects-of-gaba-and|de Vrind 2019]]와 같은 Utrecht 계보.
- **동물·모델**: 수컷만(20–35 g, >6주). C57Bl6J, **Pitx3-GFP**(VTA^DA 형광), Pitx3-Cre, **Vglut2-Cre**, **VGAT-Cre**, DRD1-Cre. 공격자는 proven-breeder **Swiss-CD1**(35–45 g).
- **스트레스 프로토콜**: resident-intruder 사회 종속. 하루 2회(오전·오후) 각 **20 s 싸움**, 이틀 → **총 4회·누적 80 s**. 나머지 시간은 구멍 뚫린 투명 칸막이로 감각 접촉만 유지. 대조군은 낯선 C57BL/6J와 동일하게 합사(물리적 접촉 없음). PSD1에 **EPM open arm 진입·head dip ↓**, **light-dark box 밝은 쪽 체류 ↓**로 스트레스 확인(Fig S1). **체중은 변하지 않았다**(Fig S1f) → 섭취량 해석의 교란 없음.
- 자금: ERC Horizon 2020 804089(ReCoDE), NWO Veni 863.15.012, NARSAD Young Investigator 25190, NWO Gravitation BRAINSCAPES.

## 한 줄 요약
이틀간의 가벼운 사회 패배 스트레스가 **LHA glutamate→VTA 도파민 시냅스를 후시냅스 GluA1-AMPAR 증가로 강화**하고, 이 강화가 **mPFC로 가는 도파민 출력을 키운다**(mPFC 경유가 지방 과식을 매개한다는 인과 사슬 자체는 미검증 — 저자들도 "부합한다"까지만 주장) — 인공 강화는 스트레스 없이도 과식을 만들고, 1 Hz 저주파 자극으로 되돌리면 스트레스성 과식이 막힌다.

## 핵심 내용

### Fig 1 — 사회 스트레스는 "기호성 음식만" 늘린다
- **Ad libitum HFHS choice diet**(lard 9.0 kcal/g · 10% 자당수 · chow 3.61 kcal/g · 물을 각각 별도 제공; **n = 17/group**, RM two-way ANOVA):
  - 지방 섭취 kcal/day ↑ — 주효과 stress **F(1,32) = 18.44, p = 0.0002**; PSD1 F = 11.19, p = 0.002; PSD2 F = 10.40, p = 0.003.
  - 자당수 ↑ — 주효과 **F(1,32) = 8.95, p = 0.005**(PSD1 p = 0.017, PSD2 p = 0.004).
  - **chow는 PSD1 불변, PSD2에는 오히려 감소** — interaction F(1,32) = 7.41, p = 0.01; PSD2 F = 10.34, p = 0.003.
  - 총 칼로리는 PSD1에만 ↑(F(1,32) = 15.64, p = 0.0004; PSD2 p = 0.47), **PSD2에는 총량이 아니라 "기호성 음식이 차지하는 칼로리 비율"이 ↑**(F(1,32) = 23.26, p = 0.00003).
- **Limited access binge model**(하루 2 h만 다른 cage에서 지방, 나머지 22 h chow; **n = 10/group**): 2 h 지방 섭취 ↑(주효과 F(1,18) = 7.071, p = 0.016), **chow는 불변**(p = 0.09), 총 칼로리 ↑(F(1,18) = 12.18, p = 0.0026).
- → 스트레스 효과는 **에너지 요구량 증가가 아니라 기호성 쪽으로의 선택 편향**이다.

### Fig 2 — LHA^glut→VTA 뉴런은 싸움 중에 켜진다 (이동·사회접촉 아님)
- **투사 특이 photometry**: VTA에 역행성 **HSV-LS1L-GCaMP6s**(대조는 HSV-LS1L-GFP), LHA 위 광섬유 → LHA의 VTA-투사 glutamate 세포만 기록.
- **싸움 개시에 강한 dF/F 상승** — GCaMP vs GFP, **n = 10/group, F(1,18) = 12.03, p = 0.003**. 싸움 종료에는 유의하지 않음(p = 0.072).
- 특이성 대조 3종: **고속 이동(>0.15 m/s) bout → 무반응**(n = 9, p = 0.33); **유년 마우스와의 비적대적 사회 상호작용 → 무반응**(n = 10, p = 0.20); **발바닥 전기충격 → 반응함**(Fig S2e) → 다른 modality의 혐오 자극에도 켜진다.
- 수동 채점 편향 통제로 **DeepLabCut + SimBA(Random Forest, 2000 trees) 자동 싸움 분류기**를 돌려 같은 결과(TPR 0.72, PPV 0.84, F1 0.76). LHA에 직접 AAV-DIO-GCaMP6s를 넣은 비투사-특이 기록에서도 싸움 반응 확인(Fig S2g).
- **지방 섭취 중에도 반응하지만, 그 반응 크기는 스트레스로 변하지 않는다** — nose poke 정렬, 대조 n = 4 / 스트레스 n = 8, stress 주효과 F(1,10) = 0.338, p = 0.54. → **세포체 활동이 아니라 시냅스 무게가 바뀐다**는 논문의 논리 분기점.

### Fig 3 — 후시냅스 AMPAR 기전의 potentiation
- LHA에 **AAV5-hSyn-ChR2-mCherry**, Pitx3-GFP의 VTA^DA에서 opto-assisted 패치클램프(PSD1에 희생).
- **AMPAR/NMDAR ratio ↑** — n cells 대조 15 / 스트레스 10, **F(1,23) = 14.72, p = 0.001**. +40 mV에서 약리적으로 분리해도 동일(Fig S3c).
- **AMPAR rectification index ↑** — 대조 18 / 스트레스 17 cells, **F(1,33) = 5.81, p = 0.02** → **GluA2-결손형(CP-AMPAR) 쪽으로의 subunit 전환** 시사.
- **Paired-pulse ratio 불변** — n = 31 cells/group, F(1,60) = 0.02, p = 0.89 → **전시냅스 방출확률 변화 아님**.
- **Array tomography**(100 nm 연속절편, LHA 말단 EYFP × synapsin × Vglut2 × GluA1 × TH, **n = 4 mice/group**): LHA 말단–VTA^DA GluA1 접촉 ↑(**F(1,6) = 18.26, p = 0.005**), Vglut2⁺ 말단으로 한정해도 ↑(**F(1,6) = 14.9, p = 0.008**). 단 **전체 LHA→VTA 해부학적 innervation 총량**과 **VTA 총 GluA1 양**은 불변(Fig S3d, e) → 축삭이 늘어난 게 아니라 **기존 시냅스의 수용체가 늘었다**.
- 비투사 특이 측정에서도 VTA^DA의 **sEPSC 진폭 ↑**(빈도는 불변), sIPSC는 빈도·진폭 모두 불변(Fig S4g, h).

### Fig 4 — E/I 균형은 VTA^DA에서만 기울고, 출력은 mPFC에서만 커진다
- **연결성**(opto 응답 >5 pA 기준): VTA^DA의 **81%**가 LHA 자극에 **적어도 흥분성** 응답을 보였다. 반응한 세포 전체를 분해하면 glutamate만 41% / 둘 다 47% / GABA만 12%(즉 41+47 = 88%가 흥분성 성분 보유). VTA^GABA는 **84%**가 적어도 흥분성 응답 — 반응 세포 중 AMPAR만 27% / 둘 다 53% / GABA_AR만 20%.
- **GABA_AR/AMPAR ratio**: VTA^DA에서 **감소**(대조 23 / 스트레스 25 cells, KS D = 0.499, **p = 0.003**) — 즉 억제 대비 흥분 쪽으로 이동. **VTA^GABA에서는 변화 없음**(25 / 29 cells, D = 0.34, p = 0.074). 두 세포형 모두 PPR 불변(Fig S5c).
- **투사 특이성**: Pitx3-Cre에 mPFC(retro-mCherry)·NAc medial shell(retro-GFP) 이중 역행 표지. **mPFC 투사 VTA^DA에서만 rectification ↑**(대조 7 / 스트레스 9 cells, KS D(1,15) = 1.70, **p = 0.006**); **NAc mshell 투사에서는 변화 없음**(Fig S5b). → [[person-lammel-stephan|Lammel]] 2011의 "통증 자극은 **mPFC 투사·NAc lateral shell 투사** DA를 potentiate하되 **NAc medial shell 투사는 아니다**"와 같은 투사 축을 **입력 기원까지 특정**해 재현(본 논문은 mPFC vs NAc medial shell 두 표적만 비교).
- **In vivo dLight1.1 도파민 측정**: LHA에 Cre-의존 **CoChR**, VTA 위 자극 섬유, mPFC(또는 NAc mshell)에 dLight + 기록 섬유. mPFC에서 20/33/50 Hz burst 자극에 대한 **DA 방출이 스트레스 후 증가**(n = 6 mice, 주효과 **F(1,5) = 6.92, p = 0.047**). **NAc mshell에서는 10·20 Hz 자극에서 변화 없음**(Fig S5f).
- **하류 보강**: mPFC^D1R 뉴런에 hM3Dq, C21 2 mg/kg i.p. 60분 후 2 h 지방 접근 → **지방 섭취 ↑**(Fig S5i) — "mPFC 도파민↑ → D1R 활성 → 지방 폭식"의 마지막 고리로 제시되지만, 저자들의 표현은 "이 연결과 **부합한다**(in accordance with)"까지이고 LFS 실험은 LHA–VTA 수준에서만 했으므로 **mPFC D1R가 스트레스성 과식을 매개한다는 인과는 미검증**(선행 근거는 Land 2014, Nat Neurosci 17:248).

### Fig 5a–c, Fig S6 — 글루코코르티코이드가 이 potentiation을 모사한다 (충분조건 ①)
- 20 s 싸움 후 30분 혈장 **corticosterone 상승** 확인(Fig S6a, RIA).
- 나이브 Pitx3-GFP 슬라이스를 **dexamethasone 100 µM 30분** 전처치 → LHA^glut-VTA^DA의 **opto-유발 AMPAR 최대 진폭 ↑**(n = 27 cells/group, KS D = 0.37, **p = 0.036**) + **rectification ↑**(Fig S6c, d) = 스트레스와 같은 서명.
- **VTA 내 양측 cannula로 dex 1 µg/300 nl 주입** → 30분 뒤 2 h 지방 접근. **지방 섭취 ↑**(대조 n = 6 / Dex n = 5, 주효과 **F(1,9) = 7.03, p = 0.03**), 주입 없는 **다음 날에도 유지**, **chow는 불변**(Fig S6e).

### Fig S6f–i — 광유전 HFS만으로 스트레스 없이 과식이 생긴다 (충분조건 ②)
- Vglut2-Cre LHA에 CoChR, VTA 양측 섬유. **20 Hz burst(5 s on / 10 s off) 10 min/day × 2일**, 스트레스 없음.
- 그 후 2 h 측정에서 **지방 섭취 ↑, chow 불변**. → 경로 강화 자체가 기호성 과식의 충분조건.

### Fig 5d–g — 1 Hz LFS depotentiation이 스트레스성 과식을 막는다 (필요조건)
- **Ex vivo 검증**: 1 Hz × 10 min LFS가 대조·스트레스 모두에서 EPSC를 강하게 줄이고 **30분 이상 지속**(Fig S7a).
- **In vivo 검증**: 스트레스 후 PSD1에 자유이동 상태로 **1 Hz × 30 min(10 ms, 8–10 mW)** 자극 → 직후 패치. opto-유발 AMPAR 진폭이 **Stress + mock stim 대비 유의하게 감소**(대조 26 / 스트레스 22 / 스트레스+1 Hz 24 cells, KS **D = 0.61, p = 0.0002**).
- **행동**: Vglut2-Cre에 CoChR 또는 YFP, 전 군이 PSD1에 30 min 1 Hz 자극을 받고 2 h 지방 접근(PSD2는 자극 없이 재측정).
  - **YFP(= 사실상 무자극)**: 스트레스군 지방 섭취 ↑ — F(1,58) = 12.78, **p = 0.001**.
  - **CoChR(= 실제 LFS)**: 스트레스 효과 **소멸** — F(1,38) = 0.28, p = 0.60. Interaction stress × virus **F(1,96) = 7.16, p = 0.009**. (n: YFP-control 30 / YFP-stress 30 / CoChR-control 21 / CoChR-stress 19)
  - LFS는 **chow 섭취에 대한 스트레스 효과는 바꾸지 않았다**(Fig S7c) → 효과가 **지방에 특이적**.

### Discussion — 저자들이 스스로 긋는 선
- 모델: **스트레스가 LHA^glut-VTA 회로를 "재평형"** 시킨다 — LHA^glut은 VTA^DA로의 단시냅스 흥분과 VTA^GABA 경유 이시냅스 억제를 동시에 보내는데, 스트레스가 **직접 흥분 쪽으로** 저울을 기울인다.
- 유도 기전은 **① 스트레스에 의한 경로 활성 + ② corticosterone-GR, 그리고 가능하다면 ghrelin·orexin의 합작**으로 가설화(Chuang 2011 ghrelin, Borgland 2006 orexin, Mizoguchi 2021 DA 특이 GR KO).
- **LHA^glut = "섭식 brake"** 라는 기존 개념(Nieh 2015/2016, Rossi 2019/2021 — 의외의 비선호 자극에 켜지고 licking을 끊는 "제동기")과의 관계를 저자들이 직접 다룬다: 그 brake의 **설정값이 내부 상태·경험으로 바뀔 수 있다**는 쪽으로 확장한다고 서술.
- **한계 4가지(원문 명시)**: ① ex vivo 회로 매핑을 **TTX/4-AP 없이** 했으므로 **단시냅스성 미확인**(선행 Nieh 2015의 강한 단시냅스 성분에 의존). ② LHA glutamate 뉴런은 **orexin 공방출 여부 등으로 이질적**인데 본 연구는 이들을 **한꺼번에 활성**시켰다 — 어느 하위집단이 스트레스로 변하는지 미해결. ③ VTA에는 DA·GABA 외 **glutamate 뉴런** 등 더 많은 집단이 있고 LHA 입력을 받는다(Barbano 2020) — 거기서의 가소성 미검증. ④ NAc는 subterritory가 여러 개이고 **lateral shell은 측정하지 않았다**(Lammel 2011에서는 통증이 NAc lateral shell 투사를 potentiate) → "NAc에 효과 없음"은 **medial shell에 한정**된다.
- **수컷만** 사용했다(Methods: "naïve adult male mice", 20–35 g, >6주). 단 성별 제한을 저자들이 한계로 따로 논하지는 않는다 — "사회 패배 모델이 수컷 공격성에 의존한다"는 해석은 원문 주장이 아니다.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **NMPU에서 "상태 → gain"의 최소 단위**: [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]]는 Need·Motivation·Pleasure·Utility를 분리한다. 이 논문에서 **Need 지표(chow 섭취·체중)는 움직이지 않고** 기호성 음식 쪽 섭취만 오른다 — 즉 스트레스는 Need가 아니라 **Motivation/Pleasure 쪽 gain**을 바꾼다. 그 gain이 **하나의 시냅스 무게(LHA^glut→VTA^DA AMPAR)** 로 환원되고, 그 무게를 되돌리면 gain이 사라진다. [[kim-2024-normative-framework-dissociates-need|Kim 2024]]의 "축적된 need = Motivation" 모델에 **스트레스라는 비항상성 입력이 들어오는 자리**를 지정해 볼 수 있다.
- **사용자 lab 축(LH^LepR·GABA)과의 분업 가설**: [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]은 food-specific LH GABA의 79%가 LepR⁺임을 보였고, [[kim-2024-normative-framework-dissociates-need|Kim 2024]]는 그 집단을 Motivation으로 매핑했다. 본 논문에서 움직이는 것은 **glutamate 쪽**이다. 검증 가능한 가설: 사회 스트레스가 **LH^LepR→VTA GABA 경로에는 가소성을 만들지 않고** glutamate 경로에만 만든다면, "항상성 기반 Motivation(LepR)"과 "스트레스 기반 기호성 편향(glut)"이 **같은 LH 안에서 분리된 두 채널**이라는 뜻이 된다. 사용자 lab의 microendoscopy 플랫폼에 사회 스트레스 블록을 넣으면 바로 측정 가능하다.
- **Depotentiation DTx·신경조절 설계**: [[concept-drug-evoked-synaptic-plasticity]]가 정리한 Lüscher 문법(**depotentiate → 행동 복귀**)이 약물이 아닌 **스트레스 섭식**에서 성립한 첫 사례다. 임상 번역 축은 둘 — (i) [[concept-deep-brain-stimulation|LHA DBS]]([[whiting-2013-lateral-hypothalamic-area-deep|Whiting 2013]]·[[whiting-2019-deep-brain-stimulation-of|Whiting 2019]])의 **자극 파라미터를 "저주파 depotentiation"으로 재설계**할 근거, (ii) 비침습 쪽에서는 **[[concept-temporal-interference-stimulation|tTIS]]** 같은 심부 저주파 자극의 표적 가설. 단 본 논문의 LFS는 **투사 특이 광유전**이므로, 전기자극으로 옮기면 선택성이 사라진다는 점은 [[luscher-2021-consolidating-the-circuit-model-for|Lüscher & Janak 2021]]이 정리하는 Creed 2015(DBS + **D1R 차단 병용**)가 푼 문제와 같은 종류다.
- **인간 영상 bridge**: 저자들이 Discussion에서 인용한 **Martín-Pérez 2019**(과체중 청소년의 LH–중뇌 resting-state connectivity ↔ 스트레스 반응·emotional eating)는 위키에 아직 페이지가 없다. [[guerrero-hreins-2026-bed-nucleus-of-the-stria|Guerrero-Hreins 2026]]의 7T BNST DCM과 묶으면 **"스트레스 → 시상하부-중뇌 결합 변화 → 기호성 섭취"** 의 인간 측 좌표가 된다. 사용자 DTx 코호트에서 LH–VTA/mPFC FC를 **치료 반응 biomarker**로 둘 수 있다.
- **mPFC D1R이라는 공통 병목**: 본 논문의 마지막 고리(mPFC DA↑ → D1R 활성 → 지방 폭식)는 [[hjort-2026-prefrontal-to-ventral-tegmental-area|Hjort 2026]]의 mPFC↔VTA 루프, [[leow-2026-a-cortical-hypothalamic-neural|Leow 2026]]의 mPFC→rZI top-down gate와 같은 피질 노드를 공유한다. 세 논문을 겹치면 **mPFC는 스트레스·강박·유연성이 동시에 통과하는 병목**이고, 그 출력 방향(→VTA / →ZI / ←VTA DA)에 따라 효과 부호가 갈린다.
- **빠른 시간척도**: 총 80초의 싸움, 이틀, 체중 변화 없음 — 이렇게 **작은 스트레스 용량**으로 시냅스·행동이 모두 움직인다. 인간 DTx에서 "일상적 미세 스트레스"가 왜 식이 중재를 무너뜨리는지에 대한 용량-반응 근거로 쓸 수 있다.

## ⚠️ 위키 내 충돌·긴장 (병기 — 덮어쓰지 않음)
- **"LH^Vglut2 = 섭식 brake" 통념과의 정면 긴장** — [[stuber-2016-lateral-hypothalamic-circuits-for|Stuber & Wise 2016]]·[[rossi-2019-obesity-remodels-activity-and|Rossi 2019]]·[[nieh-2016-inhibitory-input-from-the|Nieh 2016]]·[[concept-lateral-hypothalamus]]는 **LH glutamate = 혐오·회피·섭식 억제**로 기술한다. 본 논문은 같은 집단의 **VTA 투사 강화가 기호성 지방 섭취를 늘린다**고 보고한다. 모순을 줄이는 세 가지 읽기(모두 미검증): ① 변하는 것은 **세포체 활동이 아니라 시냅스 무게**이며(본 논문 Fig 2h에서 지방 섭취 중 세포체 반응은 스트레스로 불변), brake의 **설정값 재조정**으로 볼 수 있다. ② 본 논문에서 활성화되는 것은 **VTA^DA 단시냅스 흥분이 VTA^GABA 경유 이시냅스 억제를 이긴 상태**이지, glutamate 출력 전체가 아니다. ③ Nieh 2016의 **LH^glut→VTA 말단 자극 = 회피**(n=7 ChR2, p=0.0175)는 **급성·비스트레스** 조건이고, 본 논문의 HFS 효과는 **이틀에 걸친 가소성 유도 후**의 측정이다. 시간척도가 다르다.
- **[[rossi-2021-transcriptional-and-functional-divergence|Rossi 2021]]과 겹치는 지점·어긋나는 지점** — Rossi는 **LHA^Vglut2의 VTA 투사 = 후측 LHA·Pdyn/Hcrt(orexin)⁺·혐오/고salience 우세**로 규정했다. 본 논문의 좌표(LHA AP −1.3~−1.6)는 그 후측 집단과 겹치고, 저자들도 "VTA 투사 LHA^glut의 일부가 orexin을 공방출한다"(Rossi 2021 인용)를 한계로 적는다. ⚠️ 그러나 Rossi 2021은 이 경로의 **in vivo 반응을 혐오 쪽 증폭으로** 읽었고, 본 논문은 같은 경로의 **강화가 기호성 섭취를 늘린다**고 읽는다. 같은 해부 집단에 대한 **기능 해석이 반대 방향**이다 — 어느 하위집단이 스트레스 가소성을 지는지는 양쪽 모두 미해결(병기).
- **[[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026]]·[[jia-2026-novelty-exploration-activated-ensemble-in|Jia 2026]]의 "valence 무관 salience ensemble"과 수렴 가능** — 본 논문의 LHA^glut→VTA 뉴런은 **싸움에도 발바닥 충격에도 지방 섭취에도** 켜지고, 이동·사회접촉에는 안 켜진다. 이는 "valence가 아니라 행동적 중요도"를 코딩한다는 그림과 정합한다. ⚠️ 단 Lee 2026은 **GABA(Vgat)** 쪽 단일세포 영상이고 본 논문은 **glutamate** 쪽 bulk 투사 photometry다 — 세포형·해상도가 달라 같은 집단이라 말할 수 없다.
- **[[azevedo-2020-a-limbic-circuit-selectively-links|Azevedo 2020]]과 부호가 반대** — LS^Nts→LH는 **능동 도피 스트레스에서 섭식을 억제**한다. 본 논문은 **사회 패배(도피 불가·종속)** 에서 섭식이 **증가**한다. 두 결과를 합치면 "스트레스의 **대처 양식(능동 도피 vs 수동 종속)** 이 섭식 방향을 가른다"는 축이 생긴다(연결 가설). [[concept-emotional-eating]]의 "스트레스→과식" 단일 서술은 이 축으로 분해해야 한다.
- **[[tomiyama-2019-stress-and-obesity|Tomiyama 2019]]의 cortisol→보상 민감화 모델에 시냅스 수준 근거를 댄다** — 다만 Tomiyama는 **만성** 스트레스·복부지방·체중증가를 다루고, 본 논문은 **이틀·체중 불변**이다. 급성 가소성이 만성 비만으로 이어지는지는 **미검증**(본 논문 범위 밖).
- **[[shin-2023-early-adversity-promotes-binge-like-eating|Shin 2023]]·[[kim-2026-early-life-stress-alters-h3k4me1|Kim 2026]]의 two-hit priming과 층위 비교** — 그쪽은 **초기 역경이 회로/크로마틴에 저장되고 2차 hit에서 발현**된다. 본 논문은 **성체 급성 스트레스가 곧바로 시냅스에 저장**된다. 저장 매체(수용체 trafficking vs 전사·크로마틴)와 시간척도가 달라 **경쟁이 아니라 적층**으로 읽는 것이 안전하다.
- **[[concept-lateral-hypothalamus]]·[[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]]의 요약 한 줄("사회 스트레스로 LH-VTA glutamatergic synapse 강화")은 정확하지만 세 가지가 빠져 있다** — ① **투사 특이성**(mPFC 투사 VTA^DA에만), ② **GR/corticosterone이 모사한다**는 약리 고리, ③ **1 Hz LFS로 되돌릴 수 있다**는 치료적 함의. 이 페이지가 그 세 가지를 보충한다(요약 문장 자체는 유지).

## 관련 페이지
- [[concept-lateral-hypothalamus]] — 개념 hub. "3가지 eating" 표의 **Stress-induced** 칸이 인용하는 Linders 2022의 1차 자료.
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — 사용자 lab LH 리뷰 §3 "Stress-induced eating"의 출처. 투사 특이성·GR·LFS 세 항목을 보충.
- [[meye-2014-feelings-about-food-the]] — 같은 교신저자(Meye)·공저자(Adan)의 10년 전 리뷰. 본 논문은 그 리뷰가 예고한 "corticosterone·ghrelin·orexin → VTA → 정서적 과식"의 **시냅스 수준 실행판**.
- [[concept-emotional-eating]] — 스트레스 섭식 개념 hub. 본 논문은 그 설치류 인과 모델.
- [[tomiyama-2019-stress-and-obesity]] — 인간·만성 스트레스 상위 프레임. cortisol→보상 민감화의 회로 근거.
- [[concept-drug-evoked-synaptic-plasticity]] · [[luscher-2021-consolidating-the-circuit-model-for]] — depotentiation 문법. 본 논문은 그 문법이 **섭식**에서 성립한 사례.
- [[nieh-2016-inhibitory-input-from-the]] — LH→VTA GABA/glutamate 이분법의 원전. ⚠️ glutamate 경로 기능 해석이 본 논문과 긴장(병기).
- [[rossi-2021-transcriptional-and-functional-divergence]] — LHA^Vglut2→VTA 투사의 해부·전사체·반응 특성. ⚠️ 같은 경로에 대한 기능 해석 방향이 다름.
- [[rossi-2019-obesity-remodels-activity-and]] · [[stuber-2016-lateral-hypothalamic-circuits-for]] — "LH glutamate = brake" 통념의 출처.
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] · [[kim-2024-normative-framework-dissociates-need]] — 사용자 lab의 LH^LepR(GABA) 축. 본 논문의 glutamate 축과 분업 가설.
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] · [[concept-need-motivation-pleasure-utility]] — Need 불변·Motivation gain 변화라는 NMPU 매핑.
- [[concept-dopamine-reward-system]] · [[morales-2017-ventral-tegmental-area-cellular-heterogeneity]] — VTA 세포 이질성. 본 논문이 측정하지 않은 VTA^glut 집단이 남은 빈칸.
- [[hjort-2026-prefrontal-to-ventral-tegmental-area]] — mPFC↔VTA 루프. 본 논문의 mPFC DA 출력 증가와 같은 노드, 반대 방향.
- [[azevedo-2020-a-limbic-circuit-selectively-links]] — ⚠️ 스트레스성 섭식 **억제** 회로. 대처 양식 축으로 병기.
- [[guerrero-hreins-2026-bed-nucleus-of-the-stria]] — 인간 7T 스트레스×음식 cue. 본 논문의 인간 측 대응 좌표.
- [[shin-2023-early-adversity-promotes-binge-like-eating]] · [[kim-2026-early-life-stress-alters-h3k4me1]] — 초기 역경 two-hit 저장. 급성 시냅스 저장과 층위 비교.
- [[de-vrind-2019-effects-of-gaba-and]] — 같은 Utrecht Adan lab의 LH^Vgat/LepR 화학유전 연구(공저자 Wolterink-Donselaar·Luijendijk 중복).
- [[concept-deep-brain-stimulation]] · [[whiting-2019-deep-brain-stimulation-of]] — 저주파 depotentiation 프로토콜의 임상 번역 축.
- [[concept-loss-of-control-eating]] — 2 h limited access binge 모델의 임상 대응(폭식).
- [[harris-2005-a-role-for-lateral]] — LH orexin과 보상 cue. 본 논문이 미해결로 남긴 "orexin 공방출 하위집단" 질문의 배경.
