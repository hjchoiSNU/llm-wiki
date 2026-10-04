---
title: "Hypothalamic melanin-concentrating hormone neurons integrate food-motivated appetitive and consummatory processes in rats (Subramanian, Kanoski 2023, Nat Commun)"
type: paper
created: 2026-10-03
updated: 2026-10-03
source: "raw/2023 Nature Communications. (Kanoski) Hypothalamic melanin-concentrating hormone neurons integrate food-motivated appetitive and consummatory processes in rats.pdf"
authors: [Keshav S. Subramanian, Logan Tierno Lauer, Anna M. R. Hayes, Léa Décarie-Spain, Kara McBurnett, Anna C. Nourbash, Kristen N. Donohue, Alicia E. Kao, Alexander G. Bashaw, Denis Burdakov, Emily E. Noble, Lindsey A. Schier, Scott E. Kanoski]
year: 2023
journal: "Nature Communications 14:1755; doi:10.1038/s41467-023-37344-9 (Open Access CC BY)"
---

> [!takeaway] 연구 방향 관점의 핵심
> **LH MCH 뉴런을 "appetitive(식전 추구)와 consummatory(식사 중 유지)를 한 집단이 동시에 담당하는 integrator"로 세운 rat 논문.** 위키가 지금까지 담아 온 LH 펩타이드 분업 그림([[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]]·[[concept-lateral-hypothalamus]] 표: **Orx=appetitive, Mch=consummatory sustain, Mch의 appetitive는 "약한 ↑"**)과 정면으로 비교해야 한다. 여기서 MCH Ca²⁺는 **학습된 소리 cue**(CS+ > CS−, P=0.0042)와 **음식 맥락 cue**(CPP 진입, P=0.0001)에 또렷이 올라가고, cue 반응 크기가 **핥기 잠복을 예측**한다(R²=0.5039, P=1.08E-10). 즉 MCH의 appetitive 반응은 약하지 않다.
> 두 번째 축이 사용자 연구에 더 직접 닿는다. MCH 활동은 **섭취 중 올라가고 식사가 진행되면서 깎인다**(early > late tertile, R²=0.2005, P=0.0029)며 **그 크기가 그 식사의 총 섭취 칼로리를 강하게 예측한다**(bout 내 ΔCa vs 누적 chow R²=0.9299, P=0.0005). 저자들은 이를 Sclafani의 **appetition**(식사 초기 양성 되먹임; satiation의 반대쪽) 신호로 해석하고, 화학유전 활성으로 **식사량↑**(P=0.0277)과 **IG glucose 짝 비칼로리 flavor 선호↑**(P=0.0028)까지 보여 인과를 붙였다.
> 연결 지점: (1) **[[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]]에서 "식사 중 Utility→Motivation 되먹임"의 회로 후보** — 위키에는 satiation 쪽 신호(CCK·GLP-1·[[aitken-2024-negative-feedback-control-of-hypothalamic|taste→DMH^LepR→AgRP]])는 많고 **appetition 쪽은 비어 있다**. (2) 사용자 lab [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]은 LH^LepR에서 seeking·consummatory를 **서로 다른 subpopulation**으로 분리했는데, MCH는 **한 집단이 두 단계를 모두** 한다 — 같은 LH 안에서 "분업형(LepR·Vgat)"과 "통합형(MCH)"이 공존하는지가 검증 가능한 질문이 된다. (3) [[concept-flavor-nutrient-conditioning|FNC]]를 **증폭하는 중추 노드**로서 MCH는 [[grove-2025-lateralized-pathway-associating-nutrients|Grove 2025]]의 VTA-DA→left aBLA 경로와 어떻게 만나는지 미해결. (4) 인간 쪽으로는 **MCH→배외측 해마**([[barbosa-2023-an-orexigenic-subnetwork-within-the|Barbosa 2023]])가 이 appetition 신호의 번역 창구 후보.

# Hypothalamic MCH neurons integrate food-motivated appetitive and consummatory processes (Subramanian et al. 2023)

- **저널**: Nature Communications 14:1755 (2023-03-30; 접수 2022-10-21, 채택 2023-03-13). DOI: 10.1038/s41467-023-37344-9. 자료·코드 OSF(10.17605/OSF.IO/WMKGJ).
- **소속**: USC Dornsife(Human and Evolutionary Biology Section, **Scott E. Kanoski lab**; 교신 kanoski@usc.edu; **Lindsey A. Schier**도 같은 Section 소속 — IG catheter·flavor-nutrient) + USC Neuroscience Graduate Program(Subramanian·Bashaw·Schier·Kanoski 겸직), ETH Zürich(**Denis Burdakov** — 바이러스·전문성), U Georgia(**Emily E. Noble** — MCH volume transmission 선행).
- **모델·방법**: **수컷 Sprague-Dawley rat 300–400 g**(암컷은 estrous 단계가 MCH 섭식 효과를 좌우한다는 선행 때문에 제외 — 명시된 한계). ① 광계측: **AAV9.pMCH.GCaMP6s.hGH** 단측 LHA 주입(AP −2.9, ML +1.6, DV −8.8) + 광섬유(DV −8.6), Neurophotometrics 40 Hz, 470 nm/415 nm 교대(415를 감산해 motion 보정 후 z-score). ② 화학유전: **AAV2-rMCHp-hM3D(Gq)-mCherry**를 LHA+**zona incerta**에 4지점 양측(200 nl/site), **DCZ 100 µg/kg i.p.**(vehicle = 1% DMSO), within-subject counterbalance, 처치 간 72 h.
- **선택성**: GCaMP6s 형광은 **MCH 면역반응 뉴런에만** 국한. 정량 결과 **LHA MCH 뉴런의 70.9 ± 3.5%**, **perifornical MCH의 18.9 ± 1.1%**가 표지됐다. DREADDs는 선행 연구에서 **약 80% 전사·MCH 선택적**이며, MCH 뉴런의 2/3 미만 전사된 개체는 분석에서 제외했다(전원 통과).

## 한 줄 요약
MCH 뉴런 Ca²⁺는 **소리·맥락 음식 cue 둘 다에 반응하고 그 크기가 추구 행동을 예측**하며, **섭취 중에도 올라가 식사 초기에 가장 크고 총 칼로리를 예측**한다. 화학유전 활성화는 cue 유발 추구(PIT·CPP), **식사량**, **IG glucose 기반 flavor-nutrient 학습**을 모두 키운다 → MCH는 appetite(추구)와 **appetition**(식사 중 양성 되먹임)을 잇는 단일 통합 집단이다.

## 핵심 내용

### 배경 — "appetition"이라는 빈 칸
- 식사량은 두 반대 과정의 합으로 결정된다: 초기 **양성 되먹임 = appetition**(Sclafani; 섭취를 더 밀어붙임)과 후기 **음성 되먹임 = satiation**(식사 종료). satiation 회로와 식전 appetitive 회로는 많이 연구됐지만 **appetition의 신경 기질은 비어 있었다**.
- 후보로서 AgRP·orexin이 탈락하는 논리를 저자들이 명시한다: **ARC^AgRP는 음식 접근·cue만으로 즉시 꺾이고**(ref 7,9), **orexin은 섭취 시작과 동시에 활동이 멈춘다**(Gonzalez 2016; Mileykovskiy 2005) → 둘 다 appetitive와 prandial을 이어 주는 integrator가 될 수 없다.
- MCH가 후보인 이유: **glucose에 반응**(Burdakov 2005 — ref 제목상 glucose가 MCH·orexin을 차등 조절; Kong 2010), 약리 MCH 투여가 **식사량(meal size)을 키워** 섭식을 늘린다(Santollo & Eckel 2008), **MCH-1R 결손은 palatable food cue 유발 과식을 막는다**(Sherwood 2015).

### Fig 1 — 소리 cue(Pavlovian discrimination): CS+에 phasic 상승, 크기가 핥기 잠복을 예측 (n=6)
- 과제: 45 min 세션당 **CS+ 8회 / CS− 8회**(클릭음 vs 톤, 개체 간 counterbalance), 평균 110 s 간격. CS+ 직후 **11% sucrose 20 s 접근**, CS−는 무보상. 총 7세션, 하루 15 g chow 제한.
- 학습: CS+ 1회당 핥기 수↑, 핥기 잠복↓, 소비 반응이 있는 CS+ 시행 비율↑ (Day 1 → Day 7, one-way RM ANOVA).
- Day 7 시험: **CS+ > CS−**(cue 구간 최대값 − onset, **P=0.0042**), 그리고 **5 s-pre / 5 s-CS / 5 s-post** 비교에서 **CS 구간에만 차이**(P=0.001) → 반응이 cue 구간에 국한.
- **행동 예측**: 시행별 CS+ Ca²⁺ 크기 vs 핥기 잠복 **음의 선형 회귀 R²=0.5039, P=1.08E-10**(크게 올라간 시행에서 더 빨리 핥기 시작).
- **학습 의존성**: 상승한 CS+ 반응은 행동 학습 지표가 유의해지는 **Day 5에 나타나고 Day 2에는 없다**(Supplementary Fig 6) → 감각 반응이 아니라 학습된 예측 반응.

### Fig 2 — 맥락 cue(CPP): 음식 없는 시험에서도 음식-짝 맥락에 반응 (n=6)
- CPP: 두 구획(벽 색·바닥 질감), 습관화에서 덜 선호한 쪽을 음식-짝으로 배정. 훈련 12세션(20 min, 주 5일) 중 6세션은 **45% kcal 고지방/sucrose 식이 5 g**를 바닥에 두고(전량 섭취), 6세션은 무음식. **시험일에는 음식이 전혀 없다**(섭취 효과 배제 설계).
- 행동: 음식-짝 구획 체류 비율↑(**P=0.0027**), 기저 대비 선호 전환↑(**P=0.0016**).
- 생리: 시험 중 **음식-짝 구획에서 Ca²⁺ 높음**(P=0.0133). 다만 그 전체 평균 크기는 선호 전환과 상관 없음(R²=0.2711, **P=0.2895** — 음성 결과).
- **진입 순간**: 음식-짝 구획으로 들어가는 **첫 2 s** 반응이 비짝 구획보다 큼(**P=0.0001**)이고, 이 **진입 반응 크기는 선호 전환과 양의 상관**(**R²=0.7448, P=0.0269**) → 맥락 기반 음식 추구 기억과 연결된 신호.

### Fig 3 — 섭취 중 상승·식사 초기 최대·총 칼로리 예측 (n=7) ★ appetition의 핵심 증거
- 패러다임: **밤샘 금식** 후 중립 맥락 15 min(무음식) → **chow 30 min 자유 섭취**(자발적 종료까지) → 음식 제거 후 10 min. 섭취 bout·bout 간 구간을 모두 타임스탬프.
- **섭취 중 > bout 간 구간**(P=0.003)이고 **그 차이가 식사 초기에 가장 크다**.
- **식사 후 tone 상승**: 마지막 bout 후 5 min AUC > 음식 접근 전 5 min AUC(**P=0.0061**) → 저자 해석은 "MCH 활동 tone은 **금식 상태보다 포만 상태에서 더 높다**".
- **칼로리 예측력**: bout 내 평균 ΔCa²⁺ vs 누적 chow 섭취 **R²=0.9299, P=0.0005**; 식사 전체 ΔAUC(post-last-bout − pre-food) vs 누적 섭취 **R²=0.8594, P=0.0027**.
- **식사 내 시간 감쇠**: bout이 식사의 1/3분위(early·mid·late) 중 어디에 있는지와 음의 상관 **R²=0.2005, P=0.0029** → **초기 bout에서 가장 크고 종료에 가까워지며 사그라든다** = appetition의 시간 서명.
- **bout 길이 예측**: bout 내 ΔCa²⁺ vs bout 지속시간 **R²=0.2085, P=0.0024** → "섭취 행동을 활기차게 개시하고 길게 유지"하는 성분과 결합.

### Fig 4 — 화학유전 활성: cue 유발 appetitive 행동↑ (Pavlovian n=8, PIT n=12)
- **Pavlovian 시험일**(DCZ vs vehicle, 5 min 전 i.p.): CS+ 1회당 핥기 수↑(**P=0.0022**), 핥기 잠복↓(**P=0.0287**).
- **PIT 4단계**(Pavlovian → 도구적 조건화 → 소거 → 전이 시험). 소거로 레버 압하가 줄어든 뒤 시험일에 CS를 제시하고 **보상 없이** 레버 압하를 측정.
  - CS+ 후 레버 압하 **잠복↓**(**P=0.0498**), CS− 후 잠복은 불변(P=0.6894).
  - CS+ 후 **압하 수↑**(**P=0.0323**), 반대로 **CS− 후 압하 수는 ↓**(**P=0.0388**).
- 해석상의 무게: CS− 쪽 압하가 **줄었다**는 점이 "전반적 운동 활성화·비특이 흥분"을 배제하는 핵심 대조다. 또 PIT 시험에서는 **보상이 전달되지 않으므로** 섭취 2차 효과가 아니다.
- 대조: MCH promoter 대조 AAV(DREADDs 없음)에서 DCZ 효과 없음(Supplementary Fig 1).

### Fig 5 — 맥락 cue 추구↑·식사량↑ (n=12)
- **CPP**: DCZ가 음식-짝 구획 체류 비율(**P=0.0028**)과 선호 전환(**P=0.0028**)을 키웠다. **총 이동거리는 불변**(P=0.9829) → 운동 활성화 설명 배제(선행 연구에서도 MCH 활성이 단기 운동량을 바꾸지 않음, ref 27). 대조 AAV에서 DCZ 무효(Supplementary Fig 3).
- **식사량**: 광계측 실험과 **동일 조건**(24 h 금식 후 chow 자유 섭취, 자발적 종료)에서 DCZ가 **누적 섭취량↑**(**P=0.0277**, 비대응 t-test) → Fig 3의 섭취 중 신호가 **기능적으로 식사량에 연결됨**.
- 자유급식 home cage 섭취도 DCZ로 증가(선행 CNO 결과와 일치); 대조 AAV에서는 무효(Supplementary Fig 4).

### Fig 6 — IG glucose 기반 flavor-nutrient 학습 증폭 (n=12)
- 설계: 위내(IG) 카테터 + MCH DREADDs. **0.01% saccharin + 0.05% Kool-Aid** 두 향미를 각 6세션 훈련, 매 핥기마다 **IG glucose** 주입. 한 향미는 **DCZ(=CS+)**, 다른 향미는 vehicle(=CS−)과 짝. 시험일(훈련 전·후 2회)에는 **약물·주입·물제한 없이** 두 향미를 동시 제시. 세션당 **1499 핥기 상한**으로 두 향미의 glucose 총량을 동일화. 사전 시험에서 덜 선호한 향미를 DCZ에 배정.
- 결과: **CS+ 핥기 수가 훈련 후 증가**(**P=0.0028**), CS−는 pre–post 차이 없음. 핥기 수 변화량(post − pre)이 **CS+ > CS−**(**P=0.0353**).
- 대조 AAV에서는 DCZ가 향미 선호를 만들지 못했다(Supplementary Fig 5).
- 해석 한계(저자 명시): 이 효과는 **구강 쾌락(hedonic taste) 증폭·식후 영양 처리(appetition) 증폭·둘 다** 중 어느 것으로도 설명될 수 있다. MCH는 하행 **opioid** 신호를 통해 sucrose에 대한 긍정 구강안면 반응을 키운다는 선행(Lopez 2011)이 있어 전자도 살아 있다.

### Discussion 요점
- "먹기 시작하면 구강 쾌락이 더 먹게 만들고, 식후 장 신호는 satiation에 쓰인다"는 통념에 대해, 저자들은 **식후 과정에도 양성 되먹임(appetition)이 있다**는 Sclafani 노선을 택하고 MCH를 그 참여자로 제시한다.
- MCH의 통합 기전은 미해결로 남긴다. 제시된 후보: ① appetitive 단계에서 **음식의 정신적 표상(mental imagery)**을 강화해 추구 동기를 높임, ② consummatory 단계에서 **구강 감각(hedonic)** 혹은 **영양 처리** 성분을 증폭. ②의 구강 감각(hedonic) 성분에 대한 근거로, 측뇌실·NAc shell(ACBsh) MCH 투여가 긍정 쾌락 구강 반응을 키운다는 선행(ref 29)을 든다; 영양 성분 쪽은 향후 과제로 남긴다.
- **반대 증거의 병기**: **MCH 수용체 결손 마우스는 식후 glucose 기반 flavor-nutrient 조건화가 정상**이다(Sclafani 2016, ref 31). 저자들은 발생기 보상 기전, 그리고 MCH 뉴런이 **여러 신경펩타이드·전달물질 marker를 함께 발현**한다는 점(Mickelsen 2017, ref 32)으로 이를 설명하려 한다 — 즉 "MCH 수용체 활성만으로는 MCH 뉴런 효과를 재현하지 못할 수 있다".
- 인용된 수렴 증거: **광유전 MCH 활성이 섭취에 시간 고정될 때만 섭식을 늘린다**(Dilsiz 2020, ref 27), **MCH 활성이 sucrose > sucralose 선호를 뒤집는다**([[domingos-2013-hypothalamic-melanin-concentrating-hormone|Domingos 2013]], ref 28 — 칼로리 없이도 영양 신호를 공급할 가능성).
- **한계 2개(저자 명시)**: ① **기능 상실(loss-of-function) 실험이 없다** — 모든 인과는 활성화 방향뿐. ② **수컷만** 사용(MCH의 섭식 효과가 성·estrous 단계 의존적이기 때문).
- 추가로 적어 둘 해석 조건(작성자 주 — 원문 주장 아님): DREADDs는 **LHA + ZI**를 함께 표적했고(ZI의 MCH 집단 포함), 광계측은 **LHA 70.9% / perifornical 18.9%**를 본다 → 두 실험의 표본 공간이 완전히 같지 않다. 또 Ca²⁺–행동 상관은 전부 **상관**이며, Fig 3의 R²=0.93은 **개체 수 7의 개체 수준 회귀**임을 유의해야 한다.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **NMPU에서 "식사 중 되먹임"의 두 방향을 모두 채우기**: [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]]·[[concept-need-motivation-pleasure-utility]]에서 식사 중 신호는 대개 **satiation(음성)** 쪽으로만 구현돼 있다([[aitken-2024-negative-feedback-control-of-hypothalamic|맛→DMH^LepR→AgRP 억제]], CCK·GLP-1). MCH의 "초기 최대 → 종료로 감쇠" 서명은 **Need가 채워지는 동안에도 Motivation을 일시적으로 끌어올리는 양성항**의 회로 후보다. 모델 수준에서는 식사 내 섭취율을 `appetition(t) − satiation(t)`의 차이로 쓰고, MCH 신호를 전자의 관측 변수로 넣는 테스트가 가능하다(원문은 그런 모델을 제시하지 않는다).
- **"분업형 vs 통합형" LH 가설**: 사용자 lab [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]은 LH^LepR에서 **seeking subset과 consummatory subset을 분리**했고, [[jennings-2015-visualizing-hypothalamic-network-dynamics|Jennings 2015]]는 LH^Vgat에서 같은 분업을 보였다. MCH는 **한 집단이 두 단계 모두**에서 켜진다. 같은 동물에서 **MCH와 LH^LepR를 동시 기록**(이색 광계측 또는 단일세포)하면 "LH는 분업 모듈과 통합 모듈을 병치한다"는 구조 가설을 직접 검증할 수 있다. MCH와 LH^Vgat/LepR는 **분자적으로 비중첩**이므로([[leinninger-2009-leptin-acts-via-leptin|Leinninger 2009]]: MCH·OX와 LepRb 공존 0; Jennings 2015: Vgat–MCH 0% 중첩) 해석이 깔끔하다.
- **GLP-1RA 작용점 예측**: [[lee-2026-distinct-lateral-hypothalamic-gabaergic|Lee 2026]]에서 **Ex-4가 LH^Vgat의 cue·섭취 반응 진폭을 모두 깎았다**. 같은 논리를 MCH에 적용하면, GLP-1RA의 **식사량 감소**는 "appetition 신호(MCH 섭취 반응과 그 식사 내 초기 피크)를 깎는 것"으로 측정될 수 있다는 가설이 선다. 사용자 lab의 [[kim-2024-glp-1-increases-preingestive-satiation|식전 포만(DMH GLP-1R)]]은 Fig 1·2의 **cue 단계**에, appetition 감쇠는 Fig 3의 **섭취 단계**에 대응한다 → GLP-1RA의 두 단계 분해 실험 설계.
- **FNC 회로 지도에서 MCH의 자리**: [[concept-flavor-nutrient-conditioning|FNC]]의 필요 경로는 **vagus → hindbrain → VTA-DA(CCK) → left aBLA**([[grove-2025-lateralized-pathway-associating-nutrients|Grove 2025]])로 정리돼 있다. 본 논문은 **중추 MCH 활성이 FNC를 증폭**함을 보였을 뿐 경로상의 위치는 미지다. 검증 가능한 분기: (i) MCH→VTA 투사가 DA 쪽 gain을 올리는가([[rossi-2018-overlapping-brain-circuits-for|Rossi & Stuber 2018]]의 MCH→VTA 축; [[domingos-2013-hypothalamic-melanin-concentrating-hormone|Domingos 2013]]), (ii) MCH→NAc shell에서 구강 쾌락을 키워 간접적으로 학습을 돕는가(Lopez 2011·opioid), (iii) MCH→해마(dlHPC)로 **cue 기억** 쪽에 작용하는가([[barbosa-2023-an-orexigenic-subnetwork-within-the|Barbosa 2023]]·Noble 2019).
- **인간·임상 번역**: MCH 수용체 길항제는 과거 항비만 표적으로 시도됐다([[concept-gpcr-drug-discovery]] 맥락). 본 논문이 제시한 표현형 분해 — **cue 유발 추구 ↑ / 식사량 ↑ / 식후 학습 ↑** — 는 "MCH 축 차단이 임상에서 **어떤** 섭식 성분을 줄여야 하는지"를 지정한다. [[lee-2025-hijacked-brain-modern-obesity-cue|hijacked brain]] 유형 중 **cue-reactive**와 **대식(meal size) 표현형**을 같은 환자에서 분리 측정하는 근거가 된다([[concept-cue-reactivity]]·[[concept-loss-of-control-eating]]).
- **측정 지표로서의 appetition**: bout 내 ΔCa²⁺가 **bout 길이**와 **총 칼로리**를 예측한다는 점은 [[concept-consumption-vigor|consumption vigor]]를 **식사 내 시간 함수**로 확장하라는 요구다. [[gordon-2026-lateral-hypothalamic-control-of|Gordon 2026]]이 선조체 DA를 **bout 개시(수)** 강화로 못 박았다면, MCH는 **bout 지속·초기 가속** 쪽 후보다 — 같은 과제에서 두 신호를 동시에 재면 vigor의 개시/지속 성분을 회로별로 귀속할 수 있다.

## ⚠️ 위키 내 충돌·긴장 (병기 — 덮어쓰지 않음)
- **"LH^Mch = appetitive 약한 ↑"라는 표 서술과의 긴장** — [[concept-appetitive-consummatory-phases]]·[[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]] Fig 3 표와 [[concept-lateral-hypothalamus]] 표는 MCH를 "appetitive 약 ↑ / consummatory sustained ↑ (Orx과 정반대)"로 적는다. 본 논문은 **학습된 소리 cue·맥락 cue 모두에 뚜렷한 상승**과 **cue 반응이 행동을 예측**(R²=0.50; 진입 반응 R²=0.74)함을 보이고, **화학유전 활성으로 PIT·CPP가 증가**한다. ⚠️ 두 서술을 **병기**해야 한다: 기존 표는 주로 마우스·자유섭식 맥락의 요약이고, 본 논문은 **rat·학습된 cue·보상 부재 시험**이다. "MCH는 consummatory 전담"이라는 요약은 적어도 **학습된 cue 조건에서는 성립하지 않는다**.
- **Orx↔MCH "상보적 반대 쌍" 프레임** — [[chen-2025-the-integrated-function-of-the|Chen 2025]]는 orexin↔MCH를 상보적 기능 쌍으로 배치하고, 위키 전반이 "Orx=foraging/anticipation, Mch=consumption sustain"을 쓴다. 본 논문의 논리는 다르다: **orexin이 섭취 시작과 함께 꺼지기 때문에** integrator가 못 되고 MCH가 그 역할을 한다는 것이다. 즉 두 펩타이드는 **반대 부호가 아니라 시간 범위가 다른 중첩 집단**으로도 읽을 수 있다. [[harris-2005-a-role-for-lateral|Harris 2005]]는 LH orexin이 **소비성 보상 cue에 선택적**임을 보였는데(novel object CPP 무반응), 본 논문의 MCH도 음식 cue에 반응하므로 **cue 반응 자체는 두 집단이 공유**한다 — 분업의 경계는 cue 유형이 아니라 **섭취 개시 이후 유지 여부**일 가능성.
- **상태 의존성의 부호가 다른 결과들** — 본 논문은 **"MCH tone이 금식보다 포만 상태에서 더 높다"**(마지막 bout 후 5 min AUC > 음식 전 5 min)고 적는다. 반면 [[lee-2026-distinct-lateral-hypothalamic-gabaergic|Lee 2026]]의 LH^Vgat consumption ensemble은 **금식 > 자유급식**으로 value-scaled이고, [[rossi-2019-obesity-remodels-activity-and|Rossi 2019]]의 LHA^Vglut2는 **포만 > 금식**이다. ⚠️ 세포타입·종·지표(tone vs 자극 유발 진폭)가 모두 달라 직접 비교는 불가하지만, "LH 안에서 상태 의존 부호가 세포군마다 다르다"는 그림에 MCH를 **포만 쪽**으로 놓는 데이터로 병기할 수 있다.
- **MCH의 전달물질·수용체 정체 문제** — [[mickelsen-2019-single-cell-transcriptomic-analysis-of|Mickelsen 2019]] sc-qPCR은 Pmch 뉴런에서 **Slc17a6 100% / Slc32a1 검출 안 됨**(즉 glutamatergic)으로 보고하고, [[bonnavion-2016-hubs-and-spokes-of|Bonnavion 2016]]은 GAD65/67·VGLUT 혼재로 **"MCH를 GABAergic이라 부를 수 없다"**고 정리한다. 본 논문은 전달물질 정체를 다루지 않고 **펩타이드 집단으로서의 기능**만 본다. ⚠️ 중요한 연결: MCH가 glutamatergic이라면, 위키의 **"LH^Vglut2 = 섭식 brake"** 요약([[jennings-2013-the-inhibitory-circuit-architecture|Jennings 2013]]·[[rossi-2019-obesity-remodels-activity-and|Rossi 2019]])에 대한 **예외**가 된다 — MCH는 glutamatergic 계열이면서 섭식을 **촉진**한다. brake/engine 이분법은 전달물질이 아니라 **하위집단 단위**로 적어야 한다.
- **MCH 수용체 결손 vs 뉴런 활성의 불일치** — 본 논문의 flavor-nutrient 증폭 결과는, **MCH-1R 결손 마우스에서 glucose 기반 FNC가 정상**이라는 Sclafani 2016과 정면으로 어긋난다(저자들도 명시). 반대로 **MCH-1R은 palatable food cue 유발 과식에 필요**하다는 결과(Sherwood 2015)는 cue 쪽에서 수용체 필요성을 지지한다. ⚠️ 즉 **"MCH 뉴런 효과 = MCH 펩타이드 효과"로 등치하지 말 것** — MCH 뉴런은 다른 전달물질도 쓰며, 위키의 MCH 약리 서술([[bonnavion-2016-hubs-and-spokes-of]]: ICV MCH→섭식↑ 계열)과 뉴런 조작 결과는 층위가 다르다.
- **미각 맥락이 필요한가** — [[domingos-2013-hypothalamic-melanin-concentrating-hormone|Domingos 2013]]은 MCH 광자극의 가치 전달이 **구강 미각 맥락에서만** 작동하고 미각 결손(Trpm5⁻/⁻)에서는 성립하지 않는다고 결론했다. 본 논문의 flavor-nutrient 실험은 **구강 향미(saccharin+Kool-Aid)와 IG glucose를 분리**해 짝지었고, MCH 활성이 **위내 영양 짝 향미의 선호**를 키웠다. ⚠️ 두 결과를 함께 읽으면 "MCH는 구강 신호와 식후 신호를 **곱해서** 가치를 만든다"는 가설이 가능하지만, 본 논문 역시 그 효과가 구강 쾌락 증폭인지 식후 처리 증폭인지 **구분하지 못한다고 명시**했다(병기).
- **"MCH는 chow 급성 식욕에 불필요"라는 요약과의 관계** — [[chen-2025-the-integrated-function-of-the|Chen 2025]]는 MCH가 chow 급성 식욕에는 불필요하다고 적는다. 본 논문은 **chow 재급식 식사량을 활성화로 늘렸다**(P=0.0277)지만 이는 **충분성**이고, 본 논문 역시 **기능 상실 실험이 없다**고 한계에 적었다 → 두 서술은 **상충하지 않는다**(필요성 vs 충분성). 병기 시 이 구분을 유지할 것.

## 관련 페이지
- [[concept-lateral-hypothalamus]] — 개념 hub. MCH 행의 appetitive 서술을 재검토해야 하는 1차 근거.
- [[concept-appetitive-consummatory-phases]] — LH^Mch 행(appetitive 약 ↑ / consummatory sustained ↑)에 대한 rat 광계측·화학유전 반례·보강.
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — 사용자 lab LH 리뷰. Orx↔Mch 분업 표와의 긴장.
- [[chen-2025-the-integrated-function-of-the]] — "orexin↔MCH 상보 쌍"·"MCH는 chow 급성 식욕에 불필요" 서술과 병기(필요성 vs 충분성).
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] — 사용자 lab. seeking/consummatory **분업형** LH^LepR vs 본 논문의 **통합형** MCH.
- [[lee-2026-distinct-lateral-hypothalamic-gabaergic]] — LH^Vgat의 salience/consumption 2 ensemble·Ex-4 효과. 상태 의존 부호·GLP-1RA 예측과 연결.
- [[jennings-2015-visualizing-hypothalamic-network-dynamics]] — LH^Vgat appetitive/consummatory 분업의 1차 출처이자 **Vgat–MCH 0% 중첩**(별개 채널임을 보장).
- [[bonnavion-2016-hubs-and-spokes-of]] — MCH 집단의 전달물질·약리 종합(ICV MCH→섭식↑, Domingos 2013). 수용체 vs 뉴런 층위 구분.
- [[mickelsen-2019-single-cell-transcriptomic-analysis-of]] — Pmch 뉴런의 분자 정체(Slc17a6 100%, Cartpt로 갈리는 두 하위집단). 본 논문이 다루지 않은 세포 정체.
- [[domingos-2013-hypothalamic-melanin-concentrating-hormone]] — ★ 본 논문이 ref 28로 인용하는 **MCH = 설탕 영양가 전달자** 원전(eLife 2013, Friedman lab). MCH 광자극이 sucralose 선호를 sucrose 위로 뒤집고 선조체 DA를 올리며, MCH 제거 시 sucrose 유발 DA 상승이 사라진다. 본 논문의 **appetition·flavor-nutrient 증폭**과 같은 방향의 인과 증거다. ⚠️ 그쪽은 마우스·절수 상태·광유전·미각 맥락 필수(Trpm5 의존), 본 논문은 rat·금식·화학유전·IG glucose(미각 우회) — **"MCH가 영양 신호를 증폭한다"는 결론은 수렴하되 구강 미각 필요성에서 갈린다**(병기).
- [[concept-flavor-nutrient-conditioning]] — IG glucose 기반 학습을 MCH 활성이 증폭. 경로상 위치는 미해결.
- [[grove-2025-lateralized-pathway-associating-nutrients]] — FNC의 필요 경로(VTA-DA-CCK→left aBLA)와 MCH 증폭 효과의 접점 가설.
- [[concept-primary-reward-signals]] — appetition = event-driven primary reward. 본 논문이 그 중추 증폭기를 제시.
- [[barbosa-2023-an-orexigenic-subnetwork-within-the]] · [[concept-hippocampus-feeding]] — 인간 MCH→dlHPC orexigenic 투사. 번역 창구.
- [[concept-orexin-neurons]] — orexin이 섭취 개시와 함께 꺼지는 성질이 본 논문의 출발 논리.
- [[harris-2005-a-role-for-lateral]] — LH orexin의 cue 선택성. MCH와 cue 반응을 공유하는지의 대조.
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] · [[concept-need-motivation-pleasure-utility]] — appetition을 NMPU의 식사 내 양성항으로 넣는 매핑 가설.
- [[kim-2024-normative-framework-dissociates-need]] — Need(AgRP)/Motivation(LH^LepR) 분리. MCH는 식사 중 Motivation 되먹임 후보.
- [[kim-2024-glp-1-increases-preingestive-satiation]] · [[concept-glp-1]] — 식전 포만(cue 단계) vs appetition(섭취 단계)의 GLP-1RA 분해 설계.
- [[aitken-2024-negative-feedback-control-of-hypothalamic]] — 식사 중 **음성** 되먹임(맛→DMH^LepR→AgRP)의 대칭 짝.
- [[concept-consumption-vigor]] · [[gordon-2026-lateral-hypothalamic-control-of]] — bout 개시(선조체 DA) vs bout 지속·초기 가속(MCH 후보)의 분해.
- [[rossi-2023-control-of-energy-homeostasis]] — LHA 세포타입 종합에서 MCH 행의 기능 보강.
- [[stuber-2016-lateral-hypothalamic-circuits-for]] — MCH·Orx·Vgat 분자 분리와 "각성 상태에서 자연스럽게 나오는 행동 패턴" 가설.
- [[concept-cue-reactivity]] · [[lee-2025-hijacked-brain-modern-obesity-cue]] — cue 유발 추구 ↑ 성분의 인간 표현형 대응.
- [[rossi-2018-overlapping-brain-circuits-for]] — MCH 부분집합의 VTA 투사·DA 방출(Domingos 2013) 맥락.
- [[heiss-2024-distinct-lateral-hypothalamic-camkiia]] — ⚠️ **"MCH = GABAergic"에 대한 분자적 제동**(PNAS 2024, Kilduff lab, Discussion 인용). Mickelsen 2017에 따르면 **MCH 세포의 ~98%가 *Gad1*, 21%가 *Gad2*를 발현하지만 *Slc32a1*(Vgat)은 어떤 MCH 뉴런에서도 검출되지 않고**, 거의 전부가 *Slc17a6*(Vglut2)⁺이다(Chee 2015·Schneeberger 2018의 glutamatergic 보고와 정합). Heiss는 자신의 **CaMKIIα⁺ GABAergic 아집단(~20%)** 의 정체 후보로 MCH를 **암시만** 하고 공표지는 측정하지 않았다. ⚠️ 반대 증거도 있다 — Heiss의 CaMKIIα 집단은 **wake-active이고 NREM 선호 세포가 사실상 없는데**(131세포), MCH는 REM·수면 촉진 쪽이다(병기).
