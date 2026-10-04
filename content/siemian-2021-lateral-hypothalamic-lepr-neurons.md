---
title: "Lateral hypothalamic LEPR neurons drive appetitive but not consummatory behaviors (Siemian 2021, Cell Rep)"
type: paper
created: 2026-10-03
updated: 2026-10-03
source: "raw/2021 Cell Reports (Aponte). Lateral hypothalamic LEPR neurons drive appetitive but not consummatory behaviors.pdf"
authors: [Justin N. Siemian, Miguel A. Arenivar, Sarah Sarsfield, Cara B. Borja, Charity N. Russell, Yeka Aponte]
year: 2021
journal: "Cell Reports 36:109615 (2021-08-24); doi:10.1016/j.celrep.2021.109615 (Report, Open Access CC BY-NC-ND)"
---

> [!takeaway] 연구 방향 관점의 핵심
> **LH^LepR는 "먹게 하는" 세포가 아니라 "음식을 향해 배우고 다가가게 하는" 세포다.** NIDA Aponte lab은 LH^Vgat 전체와 그 부분집합인 LH^LepR(LH^Vgat의 약 20%)를 같은 과제 묶음으로 나란히 비교했다. 조작은 ablation·광유전·화학유전 세 가지, 측정은 miniscope Ca²⁺ 영상이다. 결과는 한 방향이다. ① **LH^Vgat**: ablation하면 체중·섭취·lick이 줄고, 광활성/억제는 섭취를 양방향으로 바꾼다. ② **LH^LepR**: 어떤 조작도 **섭취·체중·운동·불안 유사 행동을 바꾸지 않는다**. 대신 ablation하면 **Pavlovian 음식 cue 변별 학습이 아예 일어나지 않고**, 광유전 조작은 RTPP(보상/혐오)를 양방향으로 바꾼다. ③ 단일세포 영상에서 **LH^LepR만 CS+와 CS−를 구분한다**(CS+ 선택성 centroid 2.00 vs LH^Vgat 1.26). ④ **LH^LepR→VTA 억제는 학습을 오히려 강화하고, 활성은 학습을 지운다**. 둘 다 extinction까지 지속된다. 이는 rat LH GABA→VTA에 대한 [[person-sharpe-melissa|Sharpe 2017]] "기대 보상 relay" 이론을 마우스의 **LepR 부분집합**에서 재현한 것이다.
> 사용자 연구와 닿는 지점: (1) [[kim-2024-normative-framework-dissociates-need|Kim 2024]]의 **LH^LepR = Motivation(소비가 아님)** 매핑에 독립 lab의 인과 근거를 더한다. (2) 반면 [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]의 "phase-isolated consummatory 활성 → 섭취↑, NpHR → 섭취↓"와는 **부호가 맞지 않는다**. Lee 2023 스스로 이 논문을 "no effect" 사례로 인용하고 paradigm 차이로 설명했다. 다만 좌표(본 논문 AP −0.9~−1.5·ML 1.1 = alLH 쪽 vs Lee pmLH)와 배고픔 상태도 다르다. (3) **sucrose CPP는 막지만 cocaine CPP는 못 막는다** → LH^LepR는 "음식 특이 동기 학습" 노드다. [[concept-food-addiction|food addiction]] 논쟁에서 음식과 약물의 회로가 갈리는 지점의 후보다.

# Lateral hypothalamic LEPR neurons drive appetitive but not consummatory behaviors (Siemian et al. 2021)

- **저널**: Cell Reports 36, 109615 (2021-08-24; 접수 2021-01-15, 수정 05-28, 채택 08-05). DOI: 10.1016/j.celrep.2021.109615. Report 형식.
- **소속**: Neuronal Circuits and Behavior Unit, **NIDA Intramural Research Program, NIH** (Baltimore) + Johns Hopkins Solomon H. Snyder Department of Neuroscience. 교신·lead contact **Yeka Aponte** (yeka.aponte@nih.gov). 설계는 J.N.S.와 Y.A.
- **모델**: Lepr-Cre(Leshan 2006, M. Myers 제공), Slc32a1(Vgat)-Cre, Lepr-Cre;Rosa26-YFP. 6–8주 **수컷·암컷**(성별 맞춤 배정, 성차 분석은 없음).
- **LH 주입 좌표**: AP −0.90~−1.50, ML ±1.10, DV −4.75~−5.20 (40–50 nL). [[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]]의 아영역 분류로는 **alLH(ML >1.0) 쪽 경계**에 해당한다. 영상용 GRIN lens는 AP −1.55·ML +0.95다.
- **읽은 범위**: 본문·Figure 1–5 legend·STAR Methods·참고문헌 전부. **Table S1(전체 통계)·Figure S1–S4(locomotion·marble burying·self-stimulation·pre-CS·CPP 도식)는 PDF에 없어** 본문 서술만 옮겼다.

## 한 줄 요약
LH^Vgat는 섭취·체중·보상·학습을 모두 움직이지만, 그 약 20%인 **LH^LepR는 섭취를 전혀 건드리지 않고 appetitive 행동만 선택적으로 조절**한다. 해당 행동은 Pavlovian cue 변별 학습, RTPP, operant 자기자극, sucrose CPP다. LH^LepR 활동은 보상 예측 cue와 비예측 cue를 구분하고, **LH^LepR→VTA 경로가 학습 습득 자체를 양방향으로 조절**한다. 이 역할은 **비약물 강화물(sucrose)에 한정**되며 cocaine 조건화에는 해당하지 않는다.

## 핵심 내용

### 배경 — 왜 LepR 부분집합인가
- LH^Vgat와 LH^Vglut2는 섭식·동기를 반대로 조절하지만(Jennings 2013·2015; Nieh 2016), 두 집단 모두 이질적이다(Mickelsen 2019). [[jennings-2015-visualizing-hypothalamic-network-dynamics|Jennings 2015]]는 LH^Vgat 안에서 appetitive 세포와 consummatory 세포가 거의 겹치지 않음을 보였지만, **그 분자 정체는 열려 있었다**.
- 같은 lab의 선행 Schiffino 2019(PLoS ONE)는 LH^LepR→VTA 활성이 음식 동기를 양방향으로 조절함을 보였다. 이 논문의 LH^LepR→VTA 실험은 그 연장이다.
- leptin을 LH에 직접 주면 섭식이 줄지만(Leinninger 2009), leptin은 LH^LepR 활동을 **이질적으로**(일부는 흥분, 일부는 억제) 바꾼다. 그래서 leptin 주입으로는 세포 기능을 읽을 수 없다. 저자들이 세포 특이 조작을 택한 이유다.

### Figure 1 — Caspase ablation: LH^LepR 소실은 섭취를 바꾸지 않고 학습만 막는다 (n = 6–8/group)
- taCasp3(Yang 2013) 양측 주입으로 ablation했다. 효율은 **별도 코호트**에서 반대쪽 반구 PBS 대조와 tdTomato⁺ 세포 수를 비교해 검증했다(30일 후).
- **LH^Vgat ablation**: 30일 체중 증가 둔화(ablation×day p<0.0001; day 30 p=0.002). 7–30일 일일 섭취 p<0.0001, 누적 섭취 p=0.037. Ensure lick 감소(p=0.039).
- **LH^LepR ablation**: 체중(p=0.95), 일일 섭취(p=0.90), 누적 섭취(p=0.91), lick(p=0.75) **모두 변화 없음**.
- **Pavlovian 변별**: CS+(10 s 청각 cue) 1 s 뒤 sucrose pellet 2개, CS−는 결과 없음. 하루 6+6 trial × 15 session, food port 체류로 측정했다(Sharpe 2017 설계).
  - Vgat:YFP는 block 3–5에서 변별했다(block×CS p=0.0046). **Vgat:taCasp3는 지연됐지만 결국 학습**했다(block 5 p=0.0004).
  - LepR:YFP는 block 4–5에서 변별했다(block×CS p=0.0219). **LepR:taCasp3는 끝까지 학습하지 못했다**: block p=0.31, CS p=0.13, 상호작용 p=0.23, block 5 변별 p=0.50.
  - 두 계통 모두 **CS+ trial의 pellet 회수는 정상**이었다(Vgat p=0.51, LepR p=0.87). 따라서 학습 결손은 먹지 못해서 생긴 것이 아니다.
- Fig S1: open field·marble burying에서 **Vgat ablation만** 운동·displacement/불안 유사 행동을 바꿨다. LepR ablation은 무효였다.
- → **LH^LepR 소실의 학습 결손이 모집단 LH^Vgat 소실보다 더 크다.** 섭식 결손은 Vgat에만 있다.

### Figure 2 — 광유전: LH^LepR는 보상적이지만 섭취를 유발하지 않는다 (n = 5–10/group)
- 자극은 450 nm, 5 ms, 10–15 mW, **20 Hz**다. 억제는 520 nm 연속광(eNpHR3.0)이다.
- **섭식 활성 시험**(자유급식, chow pellet vs cellulose, 20 min × 3 epoch: 전·자극·후):
  - Vgat:ChR2 섭취↑ (group×epoch p=0.002).
  - **LepR:ChR2 무효 (p=0.21)**.
- **섭식 억제 시험**(먹이 제한, 10 min × 4 epoch, 2·4번째에 광):
  - Vgat:NpHR 섭취↓ (p=0.0027).
  - **LepR:NpHR 무효 (p=0.32)**.
- **RTPP**(20 min, 자유급식, 광자극면 고정, 대조군은 7일 간격 재시험):
  - Vgat:ChR2 선호 (p<0.0001), Vgat:NpHR 회피 (p=0.045).
  - **LepR:ChR2 선호 (p=0.0003), LepR:NpHR 회피 (p=0.0049)** — 섭취와 달리 보상/혐오 축은 두 집단이 같다.
- Fig S2: LepR:ChR2는 **FR1 operant 자기자극**을 **빈도 의존적**(40·20·10·5 Hz)으로 수행했다. 먹이 제한을 걸어도 강화 효과가 바뀌는지 추가 검사했다(본문은 빈도 의존성만 명시).
- → LH^LepR는 LH^Vgat의 **appetitive·보상 효과만 물려받고 섭식 효과는 물려받지 않는다**.

### Figure 3 — miniscope 단일세포 영상: LH^LepR만 CS+/CS−를 구분한다
- GCaMP6f + 500 μm GRIN lens + 1-photon miniscope(Doric), 10 fps. MIN1PIPE(Lu 2018)로 추출했다. **Lepr-Cre 8마리에서 198 뉴런, Vgat-Cre 9마리에서 322 뉴런**이다.
- 과제 변형: CS+ 5 s 종료 1 s 전부터 vanilla Ensure 한 방울, CS− 5 s는 결과 없음. 각 10회, 8일 훈련 후 **1회 시험 세션**을 영상했다. 두 계통 모두 CS+ 뒤 lick이 더 많았다(Vgat n=9, Lepr n=8 마우스).
- 뉴런을 CS+ trial의 최대 활동 구간별로 **pre-cue / cue / reward** 세 군으로 나눴다. 세 군의 활동은 계통 간 대체로 같았으나 **cue 반응군에서만 갈렸다**: **LH^LepR cue 세포는 trial type을 구분했고 LH^Vgat cue 세포는 구분하지 않았다**(Fig 3F·3J). 군별 CS+ 최대 변화량 비교에서 trial type 효과가 계통에 의존했다(Fig 3L; p=0.017, p<0.0001).
- 시간 bin을 trial type 간에 맞추지 않은 보수적 분석(비동기 발화·시간역학 변조 가능성 배제):
  - **LH^Vgat centroid CS+/CS− 비 = 1.26**(CS+ 쪽으로 약한 편향, 선택성 분포가 넓다).
  - **LH^LepR centroid = 2.00**(CS+ 쪽으로 큰 편향).
  - CS+ 선택성 지수(CS+ 반응 / 전체 CS 반응 합)가 **LepR > Vgat (p=0.0034)**.
- → 저자 결론: 현저 자극에 반응하는 넓은 LH^Vgat 집단 안에서 **LH^LepR가 보상 예측 cue와 비예측 cue를 변별하는 특정 부분집합**이다.

### Figure 4 — LH^LepR→VTA: 억제는 학습을 키우고 활성은 지운다 (n = 5–8/group)
- 조건화 **전 과정**에서 CS+·CS− **둘 다**에 광을 줬다(cue 500 ms 전부터 종료 500 ms 후까지). 9 session 뒤 **광·먹이 없는 extinction(cue) 시험**을 1회 했다. 광자극 주파수 20 Hz 선택 근거는 sucrose-seeking 과제에서 대부분의 LH 뉴런이 20 Hz를 넘지 않기 때문이다(Nieh 2015).
- **LH 세포체 조작**:
  - Vgat:GFP는 변별, **Vgat:ChR2·Vgat:NpHR 모두 변별 실패**(p=0.0021). pellet 회수는 정상.
  - LepR:GFP는 변별, **LepR:ChR2·LepR:NpHR 모두 변별 실패**(p=0.0007). pellet 회수 정상.
  - **그러나 두 계통 모두 extinction 시험에서는 변별이 복구됐다**(Fig 4D·4G) → 세포체 조작은 **학습 자체가 아니라 cue 시기의 반응(responding)을 교란**했다.
- **VTA 말단 조작**(광섬유를 VTA 위 AP −3.0·ML ±1.12·DV −4.10에 양측 삽입):
  - **LH^Vgat→VTA**: ChR2·ArchT 모두 조건화 중 변별 실패(p=0.017)했지만 **extinction에서는 정상 복구**(Fig 4J).
  - **LH^LepR→VTA**: ChR2는 변별 실패. **ArchT(억제)는 조건화 중 block 3에서 정상·강화된 변별**(p=0.0047; 대조군 p=0.0063).
  - **Extinction까지 지속**(group×CS p=0.017): **ChR2군은 변별 소멸**(p>0.99), **ArchT군은 변별 증가**(p=0.0032), 대조군은 비유의(p=0.27).
- 모든 코호트에서 pre-CS 반응 차이가 없고(Fig S3B–S3E), 어떤 광조작도 운동량을 바꾸지 않았다(Fig S3F–S3I).
- **이론 해석(원문)**: Rescorla-Wagner·도파민 RPE 틀에서 LH GABA→VTA는 **기대 보상 크기**를 전달한다(Sharpe 2017). 전달을 막으면 도파민 오차가 계속 과대하게 유지되어 학습 asymptote가 통상 한계를 넘고, 전달을 과하게 켜면 오차가 계속 과소해져 학습이 느리고 약해진다. LH^LepR는 **VTA의 비도파민 뉴런과 주로 시냅스**한다(Schiffino 2019)는 점도 이 간접 경로 해석의 근거다.
- ⚠️ **LH^Vgat→VTA에서는 같은 지속 효과가 없었다.** 저자들은 ArchT 말단 억제의 인공적 방출(Mahn 2016) 때문은 아닐 것으로 보면서도 이유를 미해결로 남겼다.

### Figure 5 — sucrose-맥락 학습은 막지만 cocaine-맥락 학습은 막지 못한다 (n = 5–10/group)
- 화학유전(hM3Dq·hM4Di·mCherry) + **CNO 1 mg/kg i.p., 조건화 1시간 전** 투여다. 편향 설계 CPP(side A를 60–70% 선호)다.
- **Sucrose CPP**: phase 1(한쪽에 sucrose pellet 10개, 반대쪽 cellulose, 8 session)에서는 **세 군 모두 변화 없음**(post 1). **sucrose 100개로 올린 phase 2** 8 session 후(post 2): mCherry(p=0.0022)·hM3Dq(p=0.0023)는 선호 형성, **hM4Di는 형성 실패**(group p=0.0136; hM4Di vs mCherry p=0.0049, vs hM3Dq p=0.0127). **sucrose 섭취량은 세 군 모두 동일**(두 phase 모두; phase 2에서 전군 섭취 증가 p<0.0001).
- **Cocaine CPP**(15 mg/kg, CNO 1 h 전): hM4Di도 **선호 형성 정상**. 12회 extinction 후 cocaine 재주입 **reinstatement도 정상**.
- **Cocaine 운동 감작**: 야생형에서 **CNO만으로는** cocaine 급성 운동 반응이 바뀌지 않았고(Fig S4C–S4D), LepR 억제도 야외장 운동(Fig S4E–S4F)·cocaine 급성 운동 반응(Fig 5F)을 바꾸지 않았다. 그러나 **6일간(day 2–7) 반복 cocaine(15 mg/kg, CNO 30 min 전)** 동안의 **일일 운동 증가가 hM4Di에서 둔화**됐다(p=0.043, p=0.0078). **금단 1일(day 8, Fig 5H)·7일(day 16, Fig 5I) 후 cocaine 누적 용량-반응 시험(3.2·10·32 mg/kg)**에서도 CNO 없이 운동 반응이 약화돼 있었다(p<0.01).
- → LH^LepR 억제는 **sucrose 맥락 연합을 막지만 cocaine 맥락 연합은 막지 못한다**. 단 cocaine 감작의 발달에는 기여한다. 저자 결론: LH^LepR는 **비약물 강화물의 appetitive 학습**을 규제하며, cocaine이 LH 조작을 단순 우회하는 것은 아니다.

### Discussion·한계 (원문)
- gain/loss-of-function 어느 쪽도 **섭취·운동·displacement/불안 유사 행동을 바꾼 적이 없다**. 영향은 RTPP와 음식 cue 연합에 한정됐다.
- galanin⁺·neurotensin⁺ LH^LepR 하위집단 연구(Brown 2019; Laque 2015; Leinninger 2011)도 섭취보다 동기·appetitive에 효과가 컸다는 점과 정합한다. 즉 LH^LepR가 분자적으로 이질적이어도 기능 축은 appetitive로 수렴한다.
- 자극 **주파수·LH 내 위치**로 섭식과 보상을 분리한 선행(Barbano 2016; Urstadt & Berridge 2020)을 **유전적 기준으로** 다시 분리한 것이 기여다.
- 세포체 조작이 cue 시기 활동을 trial type 간에 **인위적으로 같게 만들어** 행동 일반화를 유발했다는 해석이다. 광조작은 cue 구간에만 적용됐으므로, 보상 전달·결과 평가 시기의 자발 활동이 남아 extinction에서 정상 반응을 지지했을 수 있다.
- **한계**: ① ablation 효율 검증을 **행동 코호트와 다른 동물**에서 했다(행동 코호트는 전수 포함 — 저자들은 저편향 접근이라고 설명). ② 인접 시상하부 영역도 LEPR·VGAT를 발현하므로 **off-target 주입** 가능성이 있다. ③ Pavlovian 과제는 먹이 제한(기저 체중 90%) 상태에서 수행했다. ④ 성차 분석은 없다.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **NMPU의 Motivation 축 = appetitive 전용 노드라는 독립 증거**: [[kim-2024-normative-framework-dissociates-need|Kim 2024]]는 LH^LepR를 **accumulated need = Motivation**으로 정량 입증했고, 광활성 종료와 동시에 섭식이 끊긴다는 점을 Motivation의 즉시성 근거로 삼았다. 본 논문은 같은 세포가 **섭취량 자체는 전혀 바꾸지 못하면서** cue 변별 학습과 place preference만 움직인다고 보고한다 → "Motivation은 소비 집행이 아니라 **접근·학습 단계의 변수**"라는 NMPU 해석과 방향이 같다. 정량 검증 설계: Kim 2024의 normative model을 **Pavlovian cue 변별 과제에 적용**해 LH^LepR 활동이 Motivation 항으로 CS+/CS− 차이를 설명하는지 보는 것.
- **[[concept-need-motivation-pleasure-utility|NMPU]]의 Utility(지연 결과 학습) 후보 경로**: LH^LepR→VTA 억제가 학습 asymptote를 **올린다**는 것은 이 경로가 "기대치를 낮춰 오차를 줄이는 교사 신호"라는 뜻이다. NMPU에서 Utility는 지연 결과로 Motivation을 교정하는 축이므로, **LH^LepR→VTA가 Utility→Motivation 되먹임의 회로 후보**가 된다(원문은 NMPU를 언급하지 않는다).
- **Phase-isolated 설계와의 교차 검증 과제**: [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]은 seeking 전용·consummatory 전용 챔버를 만들어 두 phase 효과를 각각 끌어냈고, 두 phase가 동시 가능한 대형 챔버에서는 효과가 사라졌다. 본 논문의 섭식 시험(자유급식 chow vs cellulose 2-boat, 20 min epoch)은 **섭취와 탐색이 동시 가능한 조건**이다. 즉 Lee 2023 틀에서는 "대형 챔버 = 무효"에 해당한다. **같은 Lepr-Cre 계통에서 본 논문의 과제 묶음과 Lee의 phase-isolated 과제를 동일 동물에 교차 적용**하면 두 결과의 조건 의존성을 직접 분해할 수 있다.
- **음식 특이성의 회로 좌표**: sucrose CPP는 막히고 cocaine CPP는 막히지 않는다. [[concept-food-addiction|food addiction]] 논쟁에서 "음식과 약물이 같은 회로를 쓴다"는 전제의 **반례 후보**다. 동시에 cocaine **감작**은 둔화되므로, 공유되는 것은 조건화가 아니라 **감작(가소성)** 쪽일 수 있다 → [[concept-incentive-sensitization|유인-감작]]과 [[concept-drug-evoked-synaptic-plasticity|약물 유발 가소성]] 중 어느 축이 공유되는지를 가르는 실험 설계로 쓸 수 있다.
- **DTx·표적 분화 함의**: LH^LepR 조작이 섭취량을 바꾸지 않는다면, 이 세포를 표적으로 하는 개입은 **총 섭취 감소가 아니라 cue→접근 학습의 약화**로 평가해야 한다. [[lee-2025-hijacked-brain-modern-obesity-cue|hijacked brain]]의 cue-driven 표현형·[[concept-digital-therapeutics|DTx]] 종결점 설계(섭취량 대신 cue 변별·접근 지표)에 바로 대입된다.
- **단일세포 지표의 재사용**: CS+ 선택성 지수(CS+ 반응 / 전체 CS 반응)와 centroid 비(LepR 2.00 vs Vgat 1.26)는 사용자 lab의 microendoscopy 자료에 그대로 적용할 수 있는 간단한 변별 지표다.

## ⚠️ 위키 내 충돌·긴장 (병기 — 덮어쓰지 않음)
- **[[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]](사용자 lab) "LH^LepR 활성 → seeking·consummatory 각각 ↑, NpHR → 섭취 ↓" vs 본 논문 "어떤 조작도 섭취 무변"** — Lee 2023 본문은 본 논문을 **"Siemian 2021 no effect"** 사례로 명시 인용하고, 원인을 **paradigm 차이**(phase-isolated vs 동시 가능 조건)로 설명한다. 본 논문 쪽의 추가 조건 차이도 병기해야 한다: ① 섭식 시험이 **자유급식(활성)·먹이제한(억제)** 상태이고 chow pellet 대상이다(Lee는 ad libitum + 과제 구조로 분리), ② 좌표가 **ML ±1.10, AP −0.9~−1.5**로 [[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]] 분류상 **alLH 경계**다(Lee는 AP −1.5·ML 0.9 = pmLH), ③ 자극 20 Hz, ④ 수컷·암컷 혼합(Lee는 수컷). → [[concept-lateral-hypothalamus]]의 'LH^LepR 활성화는 섭취를 늘리는가 줄이는가' 쟁점 절에 **세 번째 축(섭취 무변)**으로 함께 놓아야 한다. (⚠️ 그 절의 편집은 후속 synthesis 단계 담당)
- **[[petzold-2023-complementary-lateral-hypothalamic-populations|Petzold 2023]] "활성 → feeding rebound 억제"와도 다르다** — Petzold는 **감소**, Lee는 **증가**, 본 논문은 **무변**이다. 세 결과가 모두 LH^LepR 광유전 활성이다. 상태(급성 제한 직후 / 포만 / 자유급식·제한), 과제 구조, 좌표가 전부 다르므로 **부호 충돌이 아니라 조건 좌표계의 문제**로 병기한다.
- **[[concept-lateral-hypothalamus]] 표 "Lepr = LH GABAergic의 ~20%" vs 사용자 lab 실측 4%** — 본 논문은 Schiffino 2019를 근거로 **~20%**를 채택한다. [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]의 자체 매핑은 4%다(논문은 '4–20%' 병기). 본 논문의 "부분집합 vs 모집단" 비교 논리는 이 비율 추정에 의존하므로, 4%라면 **ablation 효과 차이의 해석 폭이 더 커진다**(소수 세포 소실이 더 큰 학습 결손) — 수치를 섞어 인용하지 말 것.
- **[[concept-appetitive-consummatory-phases]] 표 "LH^Lepr subset A: seeking ↑ / subset B: consummatory sustained ↑"** — 표의 근거는 Lee 2023 microendoscopy(상관)다. 본 논문의 **인과 조작**은 consummatory 쪽 기능을 지지하지 않는다. "consummatory 시기에 활동하는 LepR 세포가 있다"와 "그 세포가 소비를 구동한다"는 서로 다른 층위다 — 병기.
- **[[jennings-2015-visualizing-hypothalamic-network-dynamics|Jennings 2015]]·[[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026]]의 LH^Vgat appetitive 세포 정체** — Jennings는 분자 정체를 열어 뒀고, Lee 2026은 그 cue 반응 세포가 **혐오 열자극에도 반응하는 valence 무관 salience 코더**일 수 있다고 본다. 본 논문은 cue 반응 LH^Vgat는 CS+/CS−를 **구분하지 않고** LH^LepR만 구분한다고 보고한다 → **"LH^Vgat cue 세포 = 비특이 salience, LH^LepR = 변별적 보상 예측"**이라는 그림으로 세 논문이 수렴할 수 있다. 단 Lee 2026은 head-fixed 2-photon, 본 논문은 자유행동 1-photon이고 자극 세트도 다르다(본 논문에는 혐오 자극이 없다).
- **[[gordon-2026-lateral-hypothalamic-control-of-the|Gordon 2026]] "LH^GABA가 가치에 비례 scaling하고 선조체 DA 지형을 설정"** — Gordon의 미해결 질문은 "그 value-scaling을 LH^LepR가 나르는가"였다. 본 논문은 LH^LepR가 **cue 변별(예측)에는 필수지만 섭취 중 소비 조절에는 무관**하다고 보고하므로, Gordon의 **sustained(2–3 s, 섭취 중) value-scaling은 LepR가 아닌 다른 GABA 아집단**일 가능성을 시사한다 — 연결 가설.
- **[[person-sharpe-melissa|Sharpe]] 계열 rat LH^GABA→VTA 결과와의 차이** — Sharpe 2017은 rat에서 LH GABA 체세포 조작의 학습 결손이 **extinction까지 지속**된다고 봤다. 본 논문의 마우스 체세포 조작은 **지속되지 않았고**(cue 시기 반응 교란), 지속 효과는 **LepR→VTA 말단** 조작에서만 나왔다. 저자들 자신이 이 차이를 명시한다 — 종·조작 부위 차이로 병기.
- **[[ha-2024-hypothalamic-neuronal-activation-non-human|Ha 2024]]의 인용 맥락** — 그 페이지는 본 논문(Siemian 2021)을 "rodent에서 LHA GABA가 motivation·feeding을 매개한다"는 근거 목록에 넣었다. 본 논문의 실제 결론은 **LepR 부분집합에서는 feeding 매개가 아니다**이므로, 목록 인용 시 범위를 좁혀야 한다.
- **[[shin-2023-early-adversity-promotes-binge-like-eating|Shin 2023]](Nat Neurosci) "LH^Lepr 흥분성↑ → 폭식" vs 본 논문 "LH^LepR 조작은 섭취 무변"** — Shin은 신생기 역경(P3–4 모성분리)이 LH *Lepr*를 하향조절해 LH^Lepr 흥분성(E/I)을 올리고, **LH^Lepr→vlPAG^Penk 탈억제가 HFD 폭식을 구동**한다고 본다(VTA·MPA 경로는 무효). 즉 그쪽에서는 LH^Lepr 활성이 **섭취량을 직접 움직인다**. 병기할 조건 차이: ① **투사 특이성** — 그쪽 효과는 vlPAG 말단 한정이고 본 논문이 조작한 세포체·**VTA 말단**은 그쪽에서도 폭식에 무효였다 → 두 결과는 "경로별 분업"으로 양립할 수 있다. ② **먹이** — palatable HFD 재노출 vs chow pellet/Ensure. ③ **상태** — ELT 병태 vs 정상 동물. ④ 본 논문은 LepR 세포의 GABA 비율을 다루지 않지만 Shin은 80.7% GABAergic으로 보고한다. → "LH^LepR는 섭취를 구동하지 않는다"는 본 논문 결론은 **정상 동물·VTA 축에 한정**해 인용해야 한다.
- **[[chen-2025-the-integrated-function-of-the|Chen 2025]] 리뷰의 "LHA^Lepr = 지연 satiation·섭식 촉진" 서술** — 그 리뷰는 LHA^Lepr를 food-elicited 반응(53%, Petzold)·"sensitizing food-inhibited cells"를 통해 **섭식 동학에 직접 관여**하는 집단으로 요약한다. 본 논문의 인과 조작은 섭취·체중을 전혀 바꾸지 못했으므로, 그 서술의 근거는 **상관(영상) 자료**이고 인과 축에서는 반례가 있다 — 리뷰 인용 시 병기.
- **[[rossi-2021-transcriptional-and-functional-divergence|Rossi 2021]] "Lepr⁺가 LHA^Vglut2 투사 뉴런에도 있다" vs 본 논문의 "LH^LepR = LH^Vgat의 부분집합(~20%)" 전제** — 본 논문의 핵심 논리는 LepR 집단을 Vgat 모집단의 **부분집합**으로 놓고 두 계통을 나란히 비교하는 것이다. Rossi 2021은 RNAscope로 **LHb 투사 LHA^Vglut2 뉴런에서 Lepr 발현 비율이 VTA 투사보다 유의하게 높다**(X²=121.67, p<0.0001)고 보고한다 → Lepr-Cre 조작은 **glutamatergic 성분을 함께 포함**할 수 있고, 그렇다면 "Vgat 부분집합" 프레임과 ablation 효과 비교의 해석이 흔들린다. 본 논문은 이 가능성을 다루지 않는다(한계 ②의 off-target 주입과는 다른 축) — 병기.
- **[[de-vrind-2019-effects-of-gaba-and|de Vrind 2019]] "LH^LepR 화학유전 활성 → 바닥 chow 섭취↓·수평 운동↑·체온↑·3일 반복 체중↓" vs 본 논문 "LH^LepR 조작은 섭취·운동·체중 전부 무변"** — 두 논문 모두 Adan/NIDA 계열이 아닌 독립 lab에서 **같은 'LH^Vgat 전체 vs LepR subset' 비교**를 Lepr-Cre × hM3Dq로 수행했는데 LepR 활성의 출력 부호가 정면으로 갈린다. de Vrind는 LepR 활성화가 **섭취를 줄이고 운동·발열(에너지 소비)을 올려** 체중을 낮춘다고 보고한다(수평 운동 t₇=−4.820, P=0.002; cage-top chow에서는 무변). 본 논문은 광·화학·ablation 어느 조작에서도 섭취·운동·체중이 변하지 않았다(ChR2 섭식 p=0.21, NpHR p=0.32). 병기할 조건 차이: ① **상태** — de Vrind는 ad libitum 포만, 본 논문은 자유급식(활성)·먹이제한(억제) 혼합, ② **시간척도** — de Vrind는 CNO 수 시간 tonic, 본 논문은 20 Hz 광·조건화 1 h 전 CNO, ③ **먹이 제시** — de Vrind의 섭취↓는 **바닥(open) chow**에서만 나오고 cage-top에서는 무효, ④ **좌표/성별** — de Vrind AP −1.2·수컷 n=8 vs 본 논문 AP −0.9~−1.5·ML ±1.1·수컷+암컷. de Vrind의 "운동↑·발열" 출력은 본 논문이 명시적으로 무변이라고 본 바로 그 축이므로, '무변'은 **본 논문의 과제 묶음·좌표·상태에 한정**해 인용해야 한다.
- **[[figge-schlensok-2025-a-lateral-hypothalamic-neuronal|Figge-Schlensok 2025]](Nat Neurosci, Korotkova lab) "LH^LepR 활성 → 불안↓, 수용체 제거 → 불안↑" vs 본 논문 "LepR ablation은 불안 유사 행동 무변"** — 본 논문은 LepR 세포 **제거**(taCasp3)에서 open field·marble burying 불안/displacement 지표가 변하지 않았다고 보고한다(Fig S1). 그쪽은 ChR2·hM3Dq **활성화**가 EPM open arm 체류·진입을 늘리고(P=0.0386 opto / 0.0028 chemo, 운동량 불변), **LepR-flox에 Cre를 넣어 수용체만 제거하면 불안이 커진다**(P=0.0027)고 본다. 병기할 축: ① **조작 대상** — 세포 제거(본 논문) vs 세포 보존·수용체 제거(그쪽), ② **과제** — OF·marble burying vs **EPM/NSFT 중심**, ③ **좌표** ML ±1.1 vs ±0.9, ④ **성별** 수컷+암컷 vs 암컷 중심, ⑤ 그쪽 효과는 **고불안 개체·anxiogenic 맥락에 한정**(저불안 NS)이라 코호트 평균 설계에서는 묻힐 수 있다. 섭취 축에서는 수렴 — 그쪽도 익숙·어두운 맥락에서는 활성화가 섭식 지연을 못 바꿨다(본 논문의 '섭취 무변'과 같은 방향).
- **[[kim-2024-normative-framework-dissociates-need|Kim 2024]](사용자 lab) "LH^LepR ChR2 10 s 활성 → 섭식(자극 종료와 함께 즉시 중단)" vs 본 논문 "LepR:ChR2 → 섭식 무효(p=0.21)"** — Kim 2024는 LH^LepR 광활성이 **섭식을 유발하되 자극이 끊기면 즉시 멈춘다**는 점을 Motivation의 즉시성(motivation이 즉시 threshold 위/아래로 이동) 근거로 삼는다. 즉 그쪽에서는 LepR:ChR2가 **섭식을 구동한다**. 본 논문의 동일 조작은 섭식을 전혀 유발하지 않았다(자유급식 chow vs cellulose 20 min epoch). 두 연구는 '소비가 아니라 Motivation/접근'이라는 **큰 틀에서는 일치**하지만 광활성의 급성 섭식 효과 자체에서는 부호가 갈린다. 조건 차이: 과제 구조(Kim은 need-state·naturalistic foraging에서 photostim, 본 논문은 자유급식 2-boat), 자극 길이(10 s vs 20 min epoch), 좌표(Kim pmLH 쪽 vs 본 논문 alLH 경계), 배고픔 상태 — 병기.

## 관련 페이지
- [[concept-lateral-hypothalamus]] — 개념 hub. LH^LepR 인과 조작 결과의 세 번째 부호(섭취 무변).
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] — 사용자 lab LH^LepR seeking/consummatory 원저. ⚠️ 섭취 효과 부호가 맞지 않음(그 논문이 본 논문을 'no effect'로 인용).
- [[kim-2024-normative-framework-dissociates-need]] — LH^LepR=Motivation 정량 입증. 본 논문은 "소비가 아니라 appetitive"라는 독립 인과 근거.
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] · [[concept-need-motivation-pleasure-utility]] — Motivation/Utility 매핑; LH^LepR→VTA를 Utility 되먹임 후보로.
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — 사용자 lab LH 리뷰. Lepr 비율(~20%)·아영역(alLH/pmLH) 분류 기준.
- [[concept-appetitive-consummatory-phases]] — appetitive 전용 세포의 교과서적 사례. consummatory subset의 인과성은 미지지.
- [[petzold-2023-complementary-lateral-hypothalamic-populations]] — 같은 LH^LepR 광활성이 feeding을 **억제**. 조건 좌표계 비교.
- [[jennings-2015-visualizing-hypothalamic-network-dynamics]] — LH^Vgat appetitive/consummatory 분업의 원전. 본 논문은 그 appetitive 축의 분자 정체를 LepR로 좁히면서 섭식 축에서는 분리한다.
- [[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles]] — LH^Vgat cue 세포 = valence 무관 salience. 본 논문의 "Vgat는 CS+/CS− 미변별, LepR만 변별"과 수렴 가능.
- [[gordon-2026-lateral-hypothalamic-control-of-the]] — LH^GABA value-scaling의 세포 정체 질문; 본 논문은 섭취 중 scaling이 LepR가 아닐 가능성을 시사.
- [[person-sharpe-melissa]] — cognitive LH·LH^GABA→VTA 기대보상 relay 이론. 본 논문이 마우스 LepR에서 재현·수정.
- [[hoang-2026-methamphetamine-potentiates-the-use-of]] — VTA^DA→LH 역방향 경로와 약물. 본 논문의 LH^LepR→VTA 정방향과 짝.
- [[concept-dopamine-reward-system]] — RPE·기대보상 틀에서 LH→VTA의 교사 신호 역할.
- [[concept-food-addiction]] · [[concept-incentive-sensitization]] — sucrose CPP는 막히고 cocaine CPP는 안 막히지만 cocaine 감작은 둔화 → 음식·약물 회로가 갈리는 지점.
- [[concept-leptin]] — LH LepR 직접 작용; leptin 주입의 이질적 효과가 세포 특이 조작을 필요하게 만든 배경.
- [[rossi-2023-control-of-energy-homeostasis]] — "LHA^LepR ablation → appetitive learning 손상"이라는 taxonomy 서술의 1차 출처가 본 논문.
- [[chen-2025-the-integrated-function-of-the]] — LHA 세포타입 종합. LHA^Lepr 기능 서술과 비교.
- [[korotkova-2026-balancing-acts-lateral-hypothalamic]] — LepR LH를 hunger×anxiety×social arbitration에 배치. 본 논문은 불안 유사 행동 무변을 보고(ablation).
- [[ha-2024-hypothalamic-neuronal-activation-non-human]] — 본 논문을 LHA GABA motivation 근거로 인용(범위 주의).
- [[concept-digital-therapeutics]] · [[lee-2025-hijacked-brain-modern-obesity-cue]] — cue→접근 학습을 종결점으로 삼는 개입 설계.
- [[person-choi-hyung-jin]] — 사용자 lab hub.
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
- [[de-vrind-2019-effects-of-gaba-and]] — 같은 'LH^Vgat 전체 vs LepR 부분집합' 비교를 hM3Dq로 수행(Obesity 2019, Adan lab). ⚠️ 본 논문과 충돌: LepR 활성 → 바닥 chow 섭취↓·수평 운동↑(t7=−4.820, P=0.002)·눈 온도↑·3일 반복 체중↓(본 논문은 LepR 조작이 섭취·운동·체중 무변). 조건 차이: ad lib 암기 7 h, CNO 1 mg/kg, AP −1.2, 수컷 n=8, cage-top chow에서는 무변. LH^Vgat 활성은 운동↓·체온↑·체중↓이고 chow↑는 갉기 spillage(실제 섭취 불변) — 본 논문의 Vgat ablation 체중↓(섭취 경로)와는 다른 EE 경로로 병기.
- [[sharpe-2017-lateral-hypothalamic-gabaergic-neurons]] — 본 논문이 검증 대상으로 삼은 **rat 원전**(Curr Biol 2017). ⚠️ 이중 불일치를 병기해야 한다: ① Sharpe는 LH^GABA **체세포** 억제 결손이 레이저 없는 소거까지 **지속**(본 논문 마우스는 비지속), ② Sharpe는 **LH^GABA→VTA** 말단 억제가 **학습을 촉진**(본 논문에서 LH^Vgat→VTA ArchT는 조건화 중 변별 실패·소거 복구, 지속적 촉진은 **LepR→VTA에서만**). 종(rat/mouse)·opsin(NpHR/ArchT)·세션 수가 모두 달라 "Sharpe 효과를 LepR 부분집합이 나른다"는 해석은 가설 수준.
- [[sharpe-2024-the-cognitive-lateral-hypothalamus]] — 본 논문을 원문 [41]로 인용한 Sharpe의 Opinion(Trends Cogn Sci 2024). 'LepR GABA 뉴런 ablation = 학습만 손상·섭취 무변, cue Ca²⁺ 반응은 학습과 함께 증가'를 근거로 **LepR = 필요에 따라 유연한 일반 학습자**라고 해석한다. ⚠️ 원문은 이 집단을 'leptin-releasing'으로 잘못 표기한다(정확히는 LepR 발현). 또 본 논문 마우스 체세포 결손이 extinction까지 지속되지 않았다는 rat과의 차이는 다루지 않는다(병기).
- [[rossi-2018-overlapping-brain-circuits-for]] — Stuber lab 리뷰(Cell Metab 2018)는 섭식 조작 시 보상 표현형(RTPP·self-stimulation)을 함께 재라고 권고하며 두 표의 appetitive 열 다수가 "?"(미측정)임을 지적. 본 논문의 "LH^LepR는 섭취 무변·valence(RTPP·CPP)만 변화"는 그 "?" 칸을 채우는 후속 증거다.
- [[mickelsen-2019-single-cell-transcriptomic-analysis-of]] — 본문이 전제하는 "LH^Vgat·LH^Vglut2 모두 이질적(Mickelsen 2019)"의 원전 페이지(Nat Neurosci 2019, Jackson lab): 흥분성 15 + 억제성 15 클러스터. ⚠️ 그 census는 **LH^LepR의 분자 주소를 확정하지 못했다** — scRNA-seq에서 Lepr 전사체가 희박해 Lepr-Cre 정렬세포 qPCR로 우회했고, Lepr 전용 클러스터는 없다. 후보는 LHA^GABA cluster 3(Nts/Cartpt, Gal·Calcr·Gpr101·Jak1)·cluster 1(Gal/Dlk1)이며, cluster 3 내부가 **Crh형 vs Tac1형으로 거의 상호배타**로 갈린다 → 본 논문의 LH^LepR 기능 분해(appetitive만 구동)와 짝지을 분자 축 후보다(연결 가설).
- [[leinninger-2009-leptin-acts-via-leptin]] — ★ 본 논문의 **출발 모순을 만든 1차 원전**(Cell Metab 2009, Myers lab): intra-LHA leptin(rat 0.1–1 µg)이 24 h 섭식·체중을 줄이는데도 leptin은 LHA LepRb를 **이질적으로** 바꾼다(100 nM에서 **34% 탈분극**, 일부 과분극, 시냅스 차단제 무관 = 직접 작용) → "leptin 약리로는 세포 기능을 읽을 수 없다"는 본 논문의 논증 근거. 같은 논문이 LH^LepR→VTA 투사(Ad-iZ/EGFPf + VTA fluorogold 역추적)를 처음 보였고, 본 논문의 LH^LepR→VTA 말단 조작은 그 해부 위에 서 있다. ⚠️ 거의 인용되지 않는 단서 하나를 병기할 가치가 있다: Leinninger의 Fig S3에서 **VTA-투사 LHA LepRb 뉴런 대부분은 leptin 유발 c-Fos 음성**이었고 강한 c-Fos는 비투사 집단에서 나왔다 → 본 논문의 "학습을 조절하는 LepR→VTA 성분"과 "leptin이 켜는 LepR 성분"이 **서로 다른 세포**일 수 있다(연결 가설).
- [[leinninger-2011-leptin-action-via-neurotensin]] — 이 페이지가 인용하는 **Leinninger 2011의 원전 페이지**(Cell Metab 14:313–323). 실제 조작은 **Nts 뉴런 한정 LepRb 결손**(세포 제거나 활성 조작이 아니다)이며, 결과는 **섭식 거의 불변 + 운동량·VO₂↓ + 조기 비만**이다. 본 연구의 "LH^LepR 활성·억제 모두 섭취 무변"과 **섭취 축에서는 같은 방향**이고, 종말점(활동·에너지 지출 vs cue 변별 학습)만 다르다. 또 **LHA LepRb의 60%가 Nts⁺**라는 수치는 본 연구의 LepR 집단 정의와 LH^Nts 문헌을 연결한다.
- [[nieh-2016-inhibitory-input-from-the]] — LH^GABA→VTA disinhibition→behavioral activation의 Tye lab 원전(Neuron 2016). ⚠️ 본 논문은 그 활성화를 나르는 세포가 LH^LepR는 아님(LepR는 섭취 비구동·appetitive/학습만)을 시사(병기).
- [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal]] — ⚠️ **불안 축에서 본 논문과 정면으로 어긋난다**(Nat Neurosci 2025, Korotkova lab). 본 논문은 LepR 세포 ablation(taCasp3)에서 open field·marble burying 불안 유사 행동 **무변**을 보고했는데, 그쪽은 ChR2·hM3Dq 활성화가 EPM open arm 체류·진입을 늘리고(P=0.0386 / 0.0028, 운동량 불변) **LepR-flox에 Cre를 넣어 수용체만 제거하면 불안이 커진다**(P=0.0027)고 보고한다. 병기할 조건 차이: ① **조작 대상** — 세포 제거 vs 수용체 제거(세포 보존), ② **과제** — OF·marble burying vs **EPM 중심**, ③ **좌표** — 본 논문 ML ±1.1 vs 그쪽 ML ±0.9, ④ **성별** — 본 논문 수컷+암컷 vs 그쪽 암컷 중심, ⑤ 그쪽은 PFC→LH 억제 효과가 **고불안 개체에서만** 나타난다고 보고하므로(저불안 NS / 고불안 P=0.034) 코호트 평균 설계에서는 효과가 묻힐 수 있다. 섭취 축에서는 수렴 가능: 그쪽도 **익숙·어두운 맥락에서는 활성화가 섭식 지연을 바꾸지 못했다**(NS) — 본 논문의 '섭취 무변'과 같은 방향이고, 효과는 **anxiogenic 맥락에 한정**된다.
- [[liu-2023-an-iterative-neural-processing]] — 자유행동에서 LH^GABA = 섭식 조각 **개시(접근·탐침), 유지 아님**(긴 접촉에서 반응 소실, R=0.387). LepR이 appetitive만 구동한다는 본 논문 결론과 수렴(개시/추구 국소화; Neuron 2023).
- [[shin-2023-early-adversity-promotes-binge-like-eating]] — ⚠️ 같은 LH^Lepr 세포가 **ELT·leptin 저항 조건에서는 vlPAG^Penk 탈억제로 폭식을 구동**(Nat Neurosci 2023). 위 ⚠️ 절 참조: 본 논문의 '섭취 무변'은 정상 동물·세포체/VTA 축에 한정된다.
- [[rossi-2021-transcriptional-and-functional-divergence]] — ⚠️ Lepr⁺가 LHA^Vglut2 투사 뉴런(특히 LHb 투사)에도 있다는 RNAscope 증거. 본 논문의 'LepR = Vgat 부분집합' 전제의 순도 문제로 병기.
- [[oconnor-2015-accumbal-d1r-neurons-projecting]] — NAc D1R-MSN → LH^Vgat 직접 억제가 섭취를 멈추는 하류 게이트. 본 논문이 보여준 'LepR는 섭취 비구동'은 그 게이트의 표적이 LepR 부분집합은 아닐 가능성을 시사(연결 가설).
- [[liu-2026-granular-motivational-interaction-and]] — 동기를 food seeking→approach→consumption의 sub-state로 분해하는 리뷰. 본 논문의 LH^LepR는 그 분해에서 **seeking/approach 전용 노드**의 교과서적 사례다.
- [[stuber-2025-the-neurobiology-of-overeating]] — 과식의 addiction circuit model. 본 논문의 'sucrose CPP는 차단·cocaine CPP는 비차단, 단 cocaine 감작은 둔화'는 그 모델에서 공유되는 기질이 조건화가 아니라 가소성 쪽임을 가리킨다.
- [[jennings-2013-the-inhibitory-circuit-architecture]] — BNST→LH^Vgat 억제성 입력 구조. LH^Vgat 모집단 조작의 섭식 효과 쪽 맥락.
- [[stuber-2016-lateral-hypothalamic-circuits-for]] — LHA→VTA 보상 회로 리뷰(MFB 자기자극 전통 포함). 본 논문 LH^LepR→VTA 말단 조작의 배경 지도.
- [[bonnavion-2016-hubs-and-spokes-of]] — LHA LepRb를 Nts·Gal·MC4R 혼합 '세 번째 집단'으로 분류한 리뷰. 본 논문 Discussion의 galanin⁺·neurotensin⁺ 하위집단 논의와 직접 대응(LepRb 60% Nts⁺).
- [[concept-neurotensin]] — LHA LepRb의 약 60%가 Nts⁺. 본 논문이 '분자적으로 이질적이어도 기능 축은 appetitive로 수렴'이라 본 근거 집단.
- [[sharpe-2021-past-experience-shapes-the]] — rat LH^GABA(GAD1-Cre) 전체 집단의 **학습 전담 증거**(Nat Neurosci 2021, Sharpe·Schoenbaum). 본 논문의 "LH^LepR는 섭취·체중을 바꾸지 않고 학습만 바꾼다"와 **방향이 같다**: 그쪽 조작도 섭취를 종결점으로 쓰지 않고 cue 학습만 바꾼다(중립·원위 cue 학습은 오히려 **촉진**, latent inhibition은 **소실**, 공포 학습은 **보상 경험 후에만** 필요). ⚠️ 종(rat vs mouse)·세포 정의(전체 GAD1 vs LepR 부분집합)·opsin(NpHR vs ArchT)이 모두 달라, 그쪽 효과가 **LepR 부분집합의 속성인지는 미검증**이다. 본 논문의 "cue 변별은 LepR만, 전체 Vgat는 비변별"은 그 분해의 유력한 출발점(병기).

