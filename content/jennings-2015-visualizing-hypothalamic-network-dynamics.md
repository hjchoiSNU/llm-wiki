---
title: "Visualizing hypothalamic network dynamics for appetitive and consummatory behaviors (Jennings, Stuber 2015, Cell)"
type: paper
created: 2026-10-03
updated: 2026-10-03
source: "raw/2015 Cell. Visualizing Hypothalamic Network Dynamics for Appetitive and Consummatory Behaviors.pdf"
authors: [Joshua H. Jennings, Randall L. Ung, Shanna L. Resendez, Alice M. Stamatakis, Johnathon G. Taylor, Jonathan Huang, Katie Veleta, Pranish A. Kantak, Megumi Aita, Kelson Shilling-Scrivo, Charu Ramakrishnan, Karl Deisseroth, Stephani Otte, Garret D. Stuber]
year: 2015
journal: "Cell 160(3):516–527 (2015-01-29); doi:10.1016/j.cell.2014.12.026"
---

> [!takeaway] 연구 방향 관점의 핵심
> **LH^Vgat(GABAergic) 뉴런이 섭식·보상 회로의 핵심이라는 통념을 세운 foundational paper이자, "appetitive vs consummatory를 비중첩 subset이 분담한다"는 위키 전반의 서술이 실제로 처음 나온 1차 출처.** Stuber lab(UNC)이 네 층위로 쌓았다 — ① **광유전 양방향 조작**(ChR2 활성 → 섭식·보상 모두↑; eArch3.0 억제 → 모두↓), ② **화학유전 bulk 활성**(hM3Dq/CNO)은 **소비(licking)만 늘리고 동기(nose poke·break point)는 안 늘림** — 대량 활성이 행동을 consumption 쪽으로 편향, ③ **유전적 ablation**(taCasp3)은 체중 증가·섭취·동기를 모두 깎고 MCH·Orx·운동·불안은 보존, ④ 심부 **microendoscope + GCaMP6m 단일세포 칼슘영상**(743 뉴런/6마리)으로 **appetitive(nose-poke 반응) 뉴런과 consummatory(lick 반응) 뉴런이 거의 겹치지 않음**을 직접 관찰. LH^Vgat은 MCH·Orx와 분자적으로 별개 집단이다.
> 사용자 연구에 닿는 지점: (1) **[[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]]의 Motivation hub = LH^Vgat**이라는 위키 매핑의 실험적 뿌리. 특히 bulk 활성이 consumption을 편향시키되 break point는 안 올린다는 결과는 **Motivation(동기)과 consummatory(소비) 축이 LH 안에서 분리됨**을 시사해 [[kim-2024-normative-framework-dissociates-need|Kim 2024]]의 need/motivation 해리, [[gordon-2026-lateral-hypothalamic-control-of|Gordon 2026]]의 "DA=개시 강화·지속 비강화"와 결이 맞는다. (2) **[[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]의 LH^LepR seeking/consummatory 2 subpopulation은 이 논문의 appetitive/consummatory 분업을 분자적으로(LepR, LH GABA의 4%) 좁힌 사용자 lab 후속**이다. (3) ⚠️ 그러나 이 논문이 "appetitive = food-seeking 코딩"으로 해석한 nose-poke 반응 세포가, 같은 SNU 이웃 lab의 [[lee-2026-distinct-lateral-hypothalamic-gabaergic|Lee 2026]]에서는 **혐오 열자극에도 반응하는 valence 무관 salience 코더**로 재해석된다 — 두 결과를 병기해 읽을 것.

# Visualizing hypothalamic network dynamics for appetitive and consummatory behaviors (Jennings et al. 2015)

- **저널**: Cell 160, 516–527 (2015-01-29). DOI: 10.1016/j.cell.2014.12.026. 접수 2014-07-31, 수정 2014-10-28, 채택 2014-11-24.
- **소속**: University of North Carolina at Chapel Hill (Depts. of Psychiatry·Cell Biology & Physiology, Neuroscience Center, Curriculum in Neurobiology) + Stanford Bioengineering(Deisseroth) + Inscopix(Stephani Otte). 교신 **Garret D. Stuber** (gstuber@med.unc.edu). J.H. Jennings·R.L. Ung 공동 1저자.
- **모델·방법**: Vgat-IRES-Cre 마우스(성체 수컷 25–30 g; Vong 2011). 조작: AAV5-DIO-ChR2-eYFP(20 Hz 광활성), AAV5-DIO-eArch3.0-eYFP(광억제), AAV8-hSyn-DIO-hM3Dq-mCherry(DREADD, CNO 1 mg/kg i.p.), AAV2-FLEX-taCasp3-TEVp(세포 ablation). 영상: AAVDJ-DIO-**GCaMP6m** + **8 mm 길이·0.5 mm 직경 microendoscope**(GRIN) + 소형 miniscope(Inscopix nVista, 15 fps). 과제: free-access feeding, real-time place preference, optical self-stimulation, operant feeding(FR1·PR3). 단일세포 추적은 Mukamel 2009 ICA/PCA, 세션 간 5 μm cutoff 등록.

## 한 줄 요약
분자적으로 정의된 **LH^Vgat(GABAergic) 뉴런**을 광유전·화학유전·유전적 ablation으로 양방향 조작해 **appetitive(food-seeking)·consummatory(소비) 행동을 모두 인과적으로 구동**함을 보이고, 심부 microendoscope 칼슘영상으로 수백 개 LH^Vgat 뉴런을 추적해 **appetitive 또는 consummatory 중 한쪽만 선택적으로 부호화하는 뉴런이 별개로 존재(거의 겹치지 않음)**함을 밝힌 Cell 논문. 긴밀히 얽힌 두 과정이 **세포 수준에서 분리 가능**함을 처음 시각화했다.

## 핵심 내용

### Fig 1 — 광유전 양방향 조작: 섭식·보상을 동시에 켜고 끈다
- **ChR2 활성화**(ad libitum-fed 마우스, 20 Hz; n=5/group): food zone 체류시간↑(F2,27=86.24, p<0.0001), 음식 섭취↑(F2,27=17.05, p<0.0001), 광자극-짝 챔버 선호(RTPP, t8=6.796, p<0.0001), **optical self-stimulation nose poke↑**(n=4, t5=5.744, p=0.0012). → 활성만으로 섭식과 보상(place preference·self-stim) 둘 다 유발.
- **eArch3.0 억제**(food-restricted 마우스; n=5/group): food zone 체류↓(F1,16=9.39, p=0.007), 섭취↓(F1,16=5.43, p=0.033), 억제-짝 챔버 **회피**(place aversion, t8=4.512, p=0.002).
- → LH^Vgat의 양방향 조작이 feeding·reward 표현형을 **bidirectional**하게 변조. appetitive·consummatory 과정이 LH GABAergic 뉴런에 함께 표상됨을 지지.

### Fig 2 — 화학유전 bulk 활성은 "소비"만 편향시킨다 (동기는 아님) ★
- **CNO 검증**: whole-cell에서 hM3Dq 뉴런 subset의 자발 발화↑(n=3 cells/3 mice, t4=12.37, p=0.0002). i.p. CNO가 LH Fos↑(F1,8=46.00, p<0.0001).
- **소비 과제**: 1 h free-access caloric consumption에서 lick 반응↑(n=6/group, F1,20=8.12, p=0.01). free-access feeding 섭취량↑(F1,20=6.37, p=0.02).
- **동기(PR3) 과제 — 핵심 해리**: CNO가 **lick(소비) 반응은 크게↑**(F1,20=24.37, p<0.0001)시켰으나 **active nose poke·break point(동기 지표)는 변화 없음**(nose poke: F1,20=1.47, p=0.24; break point는 본문에서 "변화 없음"으로만 기술). 저자들의 일화적(anecdotal) 관찰로, hM3Dq 마우스는 nose poke로만 보상이 나오는데도 대부분 시간을 **reward receptacle에서 핥는 데** 소비.
- → **bulk 활성은 행동을 consummatory 쪽으로 biasing**(최적 수행을 덮어씀). 대량 조작이 LH^Vgat의 기능적 다양성을 가리고 소비를 과대표상할 수 있다는 경고.

### Fig 3 — MCH·Orx와 분자적으로 별개 + 유전 ablation의 필요성 입증
- **중첩 없음**: Vgat-eYFP 뇌절편에서 MCH(223±13.77 Vgat vs 76±11.37 MCH cells/mm², **0% 중첩**)·Orx(266 vs 200 cells/mm², **0% 중첩**)와 전혀 공발현하지 않음. → Vgat-표적 LH 뉴런은 MCH/Orx와 **별개의 neurochemically distinct GABAergic 집단**.
- **taCasp3 ablation**: GAD67(GABA 마커) in situ↓(LH 선택적; VMH·EP는 불변; F2,15=5.58, p=0.01).
  - 60일 calorie-dense diet에서 **체중 증가 둔화**(n=7/group, F1,720=377.01, p=0.0174), 1개월 후 일일 섭취↓(t12=2.597, p=0.0234).
  - Food-restricted 급성 free-access 섭취↓(t12=3.239, p=0.0071), lick 반응↓(t12=5.332, p=0.0002).
  - **PR3 동기도 함께↓**: lick(t10=3.024, p=0.012), nose poke(t10=2.773, p=0.019), **break point↓**(t10=2.692, p=0.022). → bulk 활성과 달리 ablation은 소비·**동기 둘 다** 손상.
  - MCH·Orx 세포 수 불변(ablation 특이성 재확인), 개방장 운동·불안 표현형 정상(비특이 손상 배제).
- → LH GABAergic 뉴런이 섭식·동기·에너지 균형에 **필요(necessary)**. (bulk 활성이 소비만 편향한 것과 달리, 세포 소실은 동기 축까지 깎음에 유의.)

### Fig 4 — 심부 microendoscope 단일세포 칼슘영상 셋업
- LH는 뇌 심부(~5 mm)라 광학 수차·조직 혼탁으로 영상이 어렵다. **8 mm 길이 microendoscope(GRIN)**를 LH 위에 이식하고 miniscope로 GCaMP6m 신호를 포착.
- 자유행동 마우스에서 **743 LH^Vgat 뉴런(6마리)**을 단일세포 해상도로 기록, 세션 내·여러 날·여러 과제에 걸쳐 같은 뉴런을 추적(ICA/PCA, 세션 간 5 μm cutoff 등록).

### Fig 5 — 음식 위치에 흥분/억제하는 subset (공간적으로 섞여 있음)
- Food-restricted 마우스가 food zone(FZ)을 자유 탐색. 반응비(FZ/NFZ 사건빈도 log ratio) 기준으로 분류(전체 612 cells).
- **FZe(food zone excited) n=87**, **FZi(inhibited) n=73**(평균 0.0±0.3에서 ±1 SD 초과). FZe는 FZ에서 Ca²⁺↑(t86=14.92, p<0.0001), FZi는 FZ에서↓(t72=15.08, p<0.0001).
- 반응비로 색칠한 cell map에서 **서로 다른 반응 프로파일 세포가 공간적으로 뒤섞여** 있음(클러스터로 분리되지 않음). → 음식 관련 환경 위치가 LH^Vgat subset을 preferential하게 변조.

### Fig 6 — appetitive(nose poke) vs consummatory(lick) 뉴런은 거의 겹치지 않는다 ★★
- PR3 과제에서 **첫 lick(consummatory)** 또는 **unreinforced active nose poke(appetitive)**에 time-locked Ca²⁺ transient를 측정. 사건 전 −1.5~0 s vs 후 0~1.5 s 평균 차이로 반응성 분류.
- **consummatory lick-excited n=75 / 743**, **appetitive nose-poke-excited n=168 / 743**(nose-poke 반응 세포가 더 많되 진폭은 더 작음).
- 비강화 nose poke 뒤의 nonconsummatory lick은 Ca²⁺ 변화가 **훨씬 작음** → consummatory 반응은 칼로리 보상의 존재에 의존.
- **Venn 분석**: 소비(lick)에 반응하는 세포와 appetitive(nose poke)에 반응하는 세포가 **largely separate, rarely both**. → 기능적으로 분리된 LH^Vgat subpopulation이 appetitive 또는 consummatory의 한 측면을 부호화.

### Fig 7 — 두 과제 간 같은 뉴런 추적: 부분적 기능 중첩
- 같은 마우스에서 **free-access feeding과 PR3 과제** 세션 간 cell map을 등록(세션 간 472 paired cells; 거리 분포로 5 μm cutoff 정당화).
- free-access에서 FZ 반응을 보인 paired cell 125개 중 **40개가 PR3에서도 사건 반응**. 그중 **FZe→PR3 반응 28/40**(nose poke 또는 lick에 흥분), **FZi→PR3 반응 12/40**.
- 추적된 세포는 field of view 내 특정 위치나 해부학적 패턴에 국한되지 않음.
- → 음식 가용(FZ) 맥락에 반응한 subset이 보상 획득 과제에서도 동원됨 — LH^Vgat이 서로 다른 행동 요구를 가로질러 feeding 요소를 **통합·조절하는 유연성·복잡성**을 가짐.

### Discussion 요점
- LH는 역사적으로 appetitive·consummatory의 통합 governor로 여겨졌으나(Hoebel & Teitelbaum 1962 등), 전기자극·병변·전기생리는 유전적 세포타입을 구분하지 못했다. 이 논문은 **Vgat-표적 LH 뉴런이 두 과정을 모두 촉진하되, 세포 수준에서는 분리된 subset이 각 측면을 부호화**함을 보였다.
- **분자 정체의 한계(caveat)**: Vgat-IRES-Cre의 transgene penetrance가 내인성 Vgat보다 낮을 수 있고, 일부 MCH 뉴런이 GAD67·distal GABA를 쓸 수 있다(Jego 2013). 이 Vgat 집단이 **Neurotensin·Galanin 같은 다른 신경펩타이드**를 담을 가능성은 배제되지 않음 → LH subtype 세분은 여전히 과제.
- **회로 가설**: appetitive/consummatory 선택적 coding은 상·하류 회로(다른 시상하부 핵·midbrain·hindbrain·striatum)와의 **입력·투사 의존적** 연결성에서 비롯될 수 있음. LH GABAergic 망은 "기능적·계산적으로 구별되는 세포타입의 mosaic".
- bulk 조작만으로는 이런 세포 수준 차이를 놓쳤을 것 → **내인성 활성 동역학 식별의 필요성** 강조.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **NMPU의 Motivation hub = LH^Vgat의 실험적 뿌리**: [[concept-lateral-hypothalamus|LH]]를 [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]]의 Motivation 통합 hub로 두는 위키 전체의 매핑은 이 논문(+Nieh 2015/2016)이 세운 "LH^Vgat 활성 → seeking·consumption·reward"에 근거한다. 특히 **Fig 2의 해리**(bulk 활성이 lick↑·소비는 늘리되 break point는 안 올림)는 LH 안에서 **동기(motivation) 축과 소비(consummatory) 축이 분리 가능**함을 시사 — [[kim-2024-normative-framework-dissociates-need|Kim 2024]]의 need/motivation 해리, [[gordon-2026-lateral-hypothalamic-control-of|Gordon 2026]]의 "선조체 DA = 섭취 개시(bout 수)만 강화, 지속은 비강화"와 같은 방향의 초기 신호로 읽을 수 있다.
- **LepR로 좁히기(사용자 lab 후속)**: 이 논문의 appetitive/consummatory 비중첩 subset은 세포 정체가 열려 있었다. [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]은 **LH GABA의 4%인 LH^LepR이 food-specific LH GABA의 79%**를 차지하며 seeking/consummatory 2 subpopulation으로 분리됨을 보여, 이 논문의 분업을 **분자적으로 좁힌** 사용자 lab 후속이다. "Fig 6의 appetitive/consummatory 세포 중 LepR·Nts·Gal 비율은?"이 자연스러운 다음 질문(이 논문도 Nts·Gal 가능성을 명시).
- **bulk 조작의 해석 경계 = NHP 번역 설계 근거**: [[ha-2024-hypothalamic-neuronal-activation-non-human|Ha 2024]]가 영장류에서 수행한 비선택적 LHA GABAergic 화학유전 활성은 이 논문의 **bulk 활성이 consumption을 편향**시킨다는 경고와 같은 층위다. 세포타입·phase 선택성 없이 LH^Vgat을 켜면 동기·소비·보상·(Lee 2026 기준) 혐오 salience까지 뒤섞일 수 있어, DTx/electroceutical 설계에서 ensemble 선택성이 필요함을 뒷받침.
- **appetitive coding의 재해석 주의**: 이 논문은 nose-poke 반응 세포를 "appetitive food-seeking 부호화"로 읽었지만, head-fixed가 아니라 자유행동·보상 과제라는 점에서 [[lee-2026-distinct-lateral-hypothalamic-gabaergic|Lee 2026]]의 salience 재해석(아래 ⚠️)과 **측정 조건이 다르다**. 두 결과는 모순이라기보다 "같은 cue/appetitive 반응 세포가 음식 특이인지, valence 무관 salience인지"를 자유행동 seeking에서 직접 검증해야 할 과제로 남는다.

## ⚠️ 위키 내 충돌·긴장 (병기 — 덮어쓰지 않음)
- **appetitive(nose-poke) 세포 = food-seeking인가 vs valence 무관 salience인가** — [[lee-2026-distinct-lateral-hypothalamic-gabaergic|Lee 2026 Cell Rep]](SNU 김성연 lab): 같은 LH^Vgat 뉴런을 세션 간 2-photon 추적하면, 음식 cue(appetitive)에 반응하는 세포가 **혐오 열자극(37°C 환경에서의 IR heat)에도 흥분**한다(heat vs caged PB r=0.59). 즉 이 논문이 "appetitive"로 분류한 cue 반응 세포 중 일부는 **음식 특이가 아니라 motivational salience 코더**일 수 있다. 단 Lee 2026은 head-fixed라 자유행동 seeking phase를 직접 측정하지 않는다 — **방법·조건 차이로 병기**([[concept-appetitive-consummatory-phases]]의 LH^Vgat 행 참조).
- **bulk 활성(소비만↑) vs ablation(동기까지↓)의 비대칭** — 본 논문 내부에서도 Fig 2(화학유전 bulk 활성은 break point 불변)와 Fig 3(ablation은 break point↓)이 비대칭이다. "활성은 소비 편향, 소실은 동기까지 손상"은 모순이 아니라 **대량 조작이 뉴런 다양성을 덮어쓴다**는 저자들의 논지 그 자체. [[kim-2024-normative-framework-dissociates-need|Kim 2024]]의 "LH^LepR 광활성은 종료와 함께 섭식 즉시 중단(Motivation=즉시 효과)"과 달리 이 논문의 bulk hM3Dq는 소비를 지속 편향시키므로, **세포타입·조작 양식(opto vs DREADD vs ablation)에 따라 LH 출력의 성격이 달라짐**을 함께 읽을 것.
- **"LH^GABA = initiation만" 프레임** — [[liu-2026-granular-motivational-interaction-and|Liu 2026]]은 LH^GABA를 feeding **initiation phase hub**(개시만, 유지 아님)로 배치한다. 이 논문 Fig 6의 **consummatory(lick) 반응 세포 75개**와 Fig 2의 소비 편향은 LH^Vgat이 소비(maintenance 쪽)에도 표상을 가짐을 시사 → Liu의 phase 분류와 **병기**(단 Liu는 인과 조작 기반 분류, 이 논문 Fig 6은 활동 상관).
- **"engine" 단일 프레임 vs mosaic** — [[chen-2025-the-integrated-function-of-the|Chen 2025]]·[[rossi-2023-control-of-energy-homeostasis|Rossi 2023]]·[[concept-lateral-hypothalamus]]는 LHA^Vgat을 "먹기 engine"으로 요약하되 **appetitive/consummatory 비중첩 subset**을 함께 인용하는데, 그 1차 근거가 바로 이 논문(Jennings microendoscope)이다. 단일 "engine"이 아니라 **기능적으로 분리된 subset의 mosaic**이라는 점이 핵심 — 위키 서술의 출처 명시.
- **"appetitive/consummatory 중 어느 축이 Vgat의 어느 subset인가" — Nts 침묵의 반증** — [[sumarli-2026-multidimensional-control-of-ingestive-behavior|Sumarli 2026]](bioRxiv, Soden lab)은 LH^Nts를 TeTox로 침묵시켜도 **24 h 총 먹이 섭취·meal 구조가 불변**(물 섭취·체온·자발운동·novelty만 손상)이라고 보고한다. 본 논문은 Vgat 전체 ablation으로 섭취·체중·break point가 모두 떨어졌고, Discussion에서 이 Vgat 집단이 **Nts·Gal을 담을 가능성**을 열어 두었다. 두 결과를 병기하면 **본 논문의 섭식 기능은 Nts가 아닌 Vgat subset에 실릴 가능성**이 크다(조작 양식도 ablation vs 시냅스 침묵으로 다름).
- **Vgat subset의 분자 정체 — LepR로 좁히는 노선 vs 전사체 미검출** — 본 논문이 남긴 "이 Vgat 뉴런은 누구인가"에 [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]은 LepR를 넣는다. 그러나 [[mickelsen-2019-single-cell-transcriptomic-analysis-of|Mickelsen 2019]] scRNA-seq은 **LHA^GABA 전반에서 Lepr·Mc4r 전사체가 거의 검출되지 않는다**고 보고한다(검출 감도·드롭아웃 문제 가능). 어느 쪽도 상대를 배제하지 않으므로 **marker 기반 기능 분해와 전사체 census의 해상도 차이**로 병기한다.
- **"공간적으로 뒤섞여 있다"(Fig 5) vs 재현성 있는 분자 층판** — 본 논문은 FZe·FZi와 appetitive/consummatory 세포가 cell map에서 **클러스터로 분리되지 않고 섞여** 있다고 적는다. [[wang-2021-expansion-assisted-iterative-fish-defines-lateral|Wang 2021]](EASI-FISH)은 국소적으로는 그 섞임을 확인하면서도(반경 50 µm 안 평균 16 세포타입, 최다 27%) 그 **위에 Otp/Meis2 × Vglut2/Vgat의 재현성 있는 비스듬한 층판**이 있다고 본다. 본 논문의 진술은 **단일 GRIN 시야(FOV) 안의 관찰**로 한정해 읽어야 한다(스케일 차이로 병기).
- **불안 축의 비대칭** — 본 논문의 taCasp3 ablation은 섭취·체중·동기를 깎으면서도 **개방장 운동·불안 표현형은 정상**이었다(비특이 손상 배제 논거). 반면 [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal|Figge-Schlensok 2025]]의 LH^LepR(GABA subset)는 불안 상쇄가 핵심 기능이고, 비-anxiogenic·익숙한 맥락에서는 광유전 활성이 섭식에 **무효**였다. 모순이 아니라 **"Vgat 전체 = 섭식·보상 축 / LepR subset = 맥락(불안) gate 축"** 으로 층위를 나눠 읽을 후보(연결 가설).

## 관련 페이지
- [[concept-lateral-hypothalamus]] — 개념 hub. "LH GABAergic은 별도의 appetitive vs consummatory subset 보유(Jennings 2015)" 서술의 1차 출처.
- [[concept-appetitive-consummatory-phases]] — LH^Vgat subset A/B(appetitive/consummatory) 표의 근거 논문. Lee 2026의 salience 재해석과 병기.
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — 사용자 lab LH 리뷰. "appetitive/consummatory를 비중첩 subset이 분담" 서술이 이 논문 인용.
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] — 사용자 lab. 이 논문의 appetitive/consummatory 분업을 LH^LepR(GABA의 4%, food-specific의 79%)로 분자적으로 좁힌 후속.
- [[kim-2024-normative-framework-dissociates-need]] · [[kim-2024-unified-theoretical-framework-underlying-regulation]] — NMPU Motivation hub=LH^Vgat의 실험적 뿌리; need/motivation·소비 축 해리.
- [[gordon-2026-lateral-hypothalamic-control-of]] — 같은 Stuber lab 후속. LH^GABA/Glut 균형 → 선조체 DA 지형. DA=섭취 개시(bout 수) 강화와 Fig 2의 소비/동기 해리가 결이 맞음.
- [[stuber-2025-the-neurobiology-of-overeating]] — 같은 lab 리뷰. LHA GABA→VTA disinhibition→DA의 통념(Jennings 2013, Nieh 2016) 계열.
- [[ha-2024-hypothalamic-neuronal-activation-non-human]] — 비선택적 LHA GABAergic 영장류 활성; 이 논문의 bulk 활성 편향 경고와 같은 층위.
- [[lee-2026-distinct-lateral-hypothalamic-gabaergic]] — ⚠️ appetitive(cue) 세포를 valence 무관 salience 코더로 재해석(혐오 열자극+음식 cue). 방법·조건 차이로 병기.
- [[liu-2026-granular-motivational-interaction-and]] — LH^GABA=initiation hub 프레임과 소비 표상 병기.
- [[chen-2025-the-integrated-function-of-the]] · [[rossi-2023-control-of-energy-homeostasis]] — LHA^Vgat "engine" vs mosaic. 이 논문이 비중첩 subset 근거.
- [[grove-2022-dopamine-subsystems-track-internal]] — LH GABAergic→VTA DA(내부 상태 추적). LH^Vgat 출력 하류.
- [[korotkova-2026-balancing-acts-lateral-hypothalamic]] — LH 다중 동기 arbitration; LH^Vgat feeding/reward 서술.
- [[concept-activity-molecular-registration]] — GRIN microendoscope 단일세포 영상 ↔ 분자 정체 정합 방법론; 이 논문의 미해결 "Vgat subset의 분자 정체"를 잇는 전략.
- [[person-choi-hyung-jin]] — 사용자 lab hub(LH^LepR 후속의 교신).
- [[siemian-2021-lateral-hypothalamic-lepr-neurons]] — 본 논문이 열어 둔 "appetitive subset의 분자 정체"에 **LepR**를 넣고 LH^Vgat 모집단과 같은 과제 묶음에서 직접 비교한 연구(Cell Rep 2021, NIDA Aponte lab). LH^Vgat ablation은 체중·섭취·lick를 줄이지만 **LH^LepR ablation은 섭취를 전혀 바꾸지 않고 Pavlovian cue 변별 학습만 완전히 막는다**. 단일세포 영상에서 **cue 반응 LH^Vgat는 CS+/CS−를 구분하지 못하고 LH^LepR만 구분**한다(CS+ 선택성 centroid 2.00 vs 1.26) → 본 논문의 appetitive 축이 **변별적 예측(LepR)과 비특이 현저성(나머지 Vgat)으로 다시 쪼개진다**는 그림(연결 가설).
- [[liu-2023-an-iterative-neural-processing]] — 본 논문을 ref 12로 인용한 후속(Neuron 2023, Wang lab). GAD2 LH^GABA bulk photometry에서 반응이 접근·접촉 개시에 정점을 찍고 긴 접촉이 끝나기 전에 소실(R=0.387) → "LH^GABA = 섭식 조각 개시" 결론. ⚠️ 본 논문의 consummatory(lick 반응) subset과는 bulk vs 단일세포 해상도 차이로 병기. 단 본 논문은 첫 consummatory lick 후 0–1.5 s 창만 분석했으므로 섭취 중 **지속(sustained)** 활동은 직접 보이지 않았다. 저자들도 Wn 반응 정점 차이를 이질성의 단서로 든다.
- [[de-vrind-2019-effects-of-gaba-and]] — ⚠️ LH^Vgat hM3Dq 활성의 chow '섭취'↑(1–2 h)는 나무 블록·chow 갉기에 의한 spillage였고, chow 가루를 분리 칭량하면 실제 섭취는 불변. lard 섭취·palatable 선호는 오히려 ↓ (Obesity 2019, Adan lab). 저자들은 본 논문(ref 9)·Navarro 2016 등 선행 LH GABA 섭취 증가 보고가 spillage로 과대평가됐을 수 있다고 지적 — 화학유전 수 시간 활성 vs 광유전, 활성 강도 차이(Barbano 2016: 저주파 섭식·고주파 갉기)로 병기.
- [[sharpe-2017-lateral-hypothalamic-gabaergic-neurons]] — Sharpe가 본 논문에서 읽어 낸 "음식 위치에서 경험과 함께 증가하는 LH^GABA 활동"을 **appetitive 반응 부호화가 아니라 장소–음식 연합 정보의 획득**으로 재해석한 rat 인과 연구(Curr Biol 2017, Sharpe/Schoenbaum). cue 구간만 LH^GABA를 억제하면 cue 학습이 무너지지만 **직후 섭취는 정상**이다. ⚠️ 같은 데이터에 대한 상위 해석의 경쟁이며 어느 쪽도 상대를 배제하지 않는다(병기). ⚠️ 단 본 논문 본문에는 "경험에 따른 증가" 서술이 없고, 오히려 free-access 과제에서 FZe·FZi 두 군 모두 **전체 Ca²⁺ 활동이 시간에 따라 감소**했다고 적는다(Fig S6). "경험 의존 증가"는 Sharpe 측 해석이다.
- [[sharpe-2024-the-cognitive-lateral-hypothalamus]] — 본 논문을 원문 [47]로 인용한 Sharpe의 Opinion(Trends Cogn Sci 2024). 'LH^GABA 자극 → 음식 구역 체류·섭취↑, 억제 → 음식 지향 행동↓, 섭취 세포 vs 음식 위치 반응 세포 = appetitive 반응의 서로 다른 측면을 서로 다른 GABA ensemble이 부호화'로 정리한다(Sharpe의 요약. 본 논문의 실제 비중첩 비교 축은 consummatory lick vs appetitive nose poke이며, 음식 위치(FZ) 반응은 별도 분류). Opinion은 이를 섭식 스위치가 아니라 **보상 근접 cue 학습 편향** 이론의 출발점으로 쓴다.
- [[rossi-2019-obesity-remodels-activity-and]] — 같은 Stuber lab의 **glutamatergic 짝 연구**(Science 2019): 본 논문의 LH^Vgat 단일세포 영상 접근을 LHA^Vglut2로 옮겨 2-photon으로 12주 종단 추적. sucrose 반응이 포만(prefed)에서 더 크고 만성 HFD에서 둔화(내재 흥분성↓); LHA scRNA-seq에서 HFD 전사체 변화는 Vgat보다 **Vglut2 클러스터에 집중**.
- [[rossi-2021-transcriptional-and-functional-divergence]] — 같은 lab이 **glutamate 쪽에서 투사 축으로 mosaic를 보인** 후속(Neuron 2021). 본 논문이 LH^Vgat을 appetitive/consummatory **행동 phase**로 나눈 데 대해, 이 논문은 LHA^Vglut2를 **출력 표적(LHb vs VTA)** 으로 나눈다 — 해부(전측/후측)·전사체(Pax6 vs Pdyn/Hcrt, 106 DEG)·전기생리(LHb 투사가 더 흥분성)·in vivo 반응·호르몬 민감성이 모두 분기. LH 이질성의 축이 **세포타입 × 행동 phase × 투사 표적**으로 최소 3차원임을 보여 주는 짝 사례다.
- [[rossi-2018-overlapping-brain-circuits-for]] — 같은 lab의 선행 리뷰(Cell Metab 2018)가 본 논문의 LHA Vgat appetitive/consummatory·Vgat↔Vglut2 기능 대립을 feeding–reward overlap 논지의 핵심 사례로 인용(Figure 2B).
- [[jennings-2013-the-inhibitory-circuit-architecture]] — 같은 1저자·같은 lab의 2년 전 Science 341:1517(BNST→LH). ⚠️ 본 논문이 세운 "LH^Vgat engine" 서사와 **상류가 다르다**: 수정 rabies 단시냅스 추적에서 BNST 입력은 **LH^Vglut2에 조밀, LH^Vgat에는 최소**(F1,20=38.50, P<0.001)이고 강하게 억제받는 LH 세포는 Vglut2 발현이 높다(U=169.0, P=0.016, 48 cells). BNST 주도 과식은 engine 활성이 아니라 **Vglut2 브레이크 해제**로 일어난다(Vglut2^LH 광활성 → 굶긴 마우스 섭취↓ F1,36=13.31·혐오; 광억제 → 포만 중 섭식·기호식 선호). → "LH 안에 섭식을 켜는 길이 최소 둘"로 병기.
- [[oconnor-2015-accumbal-d1r-neurons-projecting]] — 본 논문이 정의한 **LH^Vgat 집단의 상류 억제 게이트**를 같은 해에 세포 수준에서 특정한 논문(Neuron 2015, Lüscher lab): LH^Vgat의 **78%(28/36)** 가 NAcSh 입력에서 광 유발 IPSC를 받고(803±217 pA), rabies 역추적에서 그 입력의 **97%가 D1R-MSN**이다. LH^Vgat 직접 광억제(eArch, 24 h 금식)만으로 지방 섭취가 억제되고 closed-loop 500 ms 억제로 **진행 중 licking이 한 lick 단위로 중단**된다(F(1,9)=86.6, p<0.001) → 본 논문의 "LH^Vgat 억제 → 음식 지향 행동↓"와 **같은 방향의 독립 재현**. ⚠️ 단 그쪽은 LH^Vgat를 **단일 집단으로 취급**했으므로, 본 논문이 보인 appetitive/consummatory 비중첩 subset(및 [[lee-2026-distinct-lateral-hypothalamic-gabaergic|Lee 2026]]의 salience vs consumption ensemble) 중 어느 쪽이 D1R 입력을 받는지는 미해결이다(병기).
- [[nieh-2016-inhibitory-input-from-the]] — 같은 Tye lab 후속(Neuron 2016). LH^GABA→VTA 자극이 접근·ICSS·사회·물체 조사를 가로질러 촉진 = valence 무관 behavioral activation. 본 논문의 appetitive/consummatory 비중첩 subset 해석과 "일반 동기 활성화" 해석의 대비(병기).
- [[bonnavion-2016-hubs-and-spokes-of]] — 본 논문의 LHA^GABA appetitive/consummatory 2군·MCH·Orx 비중첩 결과를 세포타입 분류 리뷰에 배치 (de Lecea·Jackson, J Physiol 2016).
- [[domingos-2013-hypothalamic-melanin-concentrating-hormone]] — 본 논문 Fig 3가 **0% 중첩으로 배제한 MCH 집단**의 섭식·보상 역할 원전(eLife 2013, Friedman lab). 대비점: LHA^Vgat 광자극은 그 자체로 자기자극(보상)이지만, **MCH 광자극은 물과 짝지으면 선호되지 않는다**. MCH 자극은 sucralose 섭취와 함께일 때만 선조체 DA(+69%)와 선호(sucrose 82% → 20%)를 바꾼다. 즉 LH 안에서 **"단독 보상 집단(Vgat)"과 "미각 맥락 의존 영양 가치 집단(MCH)"**이 분리된다(서로 다른 세포라 모순 아님).
- [[subramanian-2023-hypothalamic-melanin-concentrating-hormone-neurons]] — 본 논문 Fig 3가 **0% 중첩으로 배제한 MCH 집단**이 실제로 무엇을 하는지 rat에서 직접 기록·조작한 논문(Nat Commun 2023, Kanoski lab). 본 논문이 LH^Vgat에서 보인 **appetitive/consummatory 비중첩 분업**과 달리, MCH는 **한 집단이 cue(CS+>CS−, P=0.0042; CPP 진입 P=0.0001)와 섭취(bout 중 상승·식사 초기 최대·누적 칼로리 R²=0.9299)에 모두** 반응하고 화학유전 활성이 PIT·CPP·식사량(P=0.0277)을 함께 키운다 → **LH 안에 "분업형(Vgat)"과 "통합형(MCH)"이 병존**한다는 그림(병기). ⚠️ 종(rat)·bulk 광계측·활성화 방향 한정.
- [[mickelsen-2019-single-cell-transcriptomic-analysis-of]] — 본 논문이 "Vgat subset은 Nts·Gal을 담을 수 있다"로 열어 둔 분자 정체에 **후보 목록(LHA^GABA 15 클러스터: 1 Gal+Dlk1, 3 Nts+Cartpt …)** 을 준 census(Nat Neurosci 2019, Jackson lab). ⚠️ 단 Lepr·Mc4r 전사체 미검출로 LepR 노선과 병기.
- [[petzold-2023-complementary-lateral-hypothalamic-populations]] — ⚠️ 같은 GRIN 심부 영상 플랫폼인데 **부호가 반대**: 본 논문의 Vgat 전체 활성은 섭식↑, 그쪽 LH^LepR subset 활성은 (급성 제한 직후) 섭식·음수↓·social 우선. 전체 집단 vs 하위집단의 층위 차이로 병기 (Cell Metab 2023, Korotkova lab).
- [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal]] — ⚠️ LH^LepR = 불안 상쇄 gate. 본 논문 ablation이 불안·운동을 건드리지 않았다는 점과 층위를 나눠 병기 (Nat Neurosci 2025).
- [[sumarli-2026-multidimensional-control-of-ingestive-behavior]] — ⚠️ LH^Nts 침묵에도 총 먹이 섭취 불변. 본 논문의 섭식 기능이 Nts 아닌 Vgat subset에 실릴 가능성 (bioRxiv 2026, Soden lab).
- [[wang-2021-expansion-assisted-iterative-fish-defines-lateral]] — 본 논문 Fig 5의 "공간적으로 뒤섞인 cell map"에 대응하는 분자 지도(EASI-FISH). 국소 섞임은 재현하되 그 위의 층판 구조를 보고 — 스케일 차이로 병기.
- [[goode-2026-a-dorsal-hippocampus-prodynorphinergic-dorsolateral]] — 본 논문이 정의한 **LHA^Vgat의 상류 맥락 게이트**: DHPC→DLS^Pdyn→LHA(Vgat) 단시냅스 억제. 그 억제가 appetitive/consummatory 중 어느 subset에 걸리는지가 "총 섭취 불변·맥락 특이성만 소실" 표현형의 설명 후보 (Neuron 2026).
- [[johansen-2025-brain-control-of-energy]] — "LH GABAergic 활성 → appetitive·consummatory↑"로 본 논문을 요약하는 대형 리뷰(Cell 2025). 조작 양식별 축 차이(Fig 2 vs Fig 3)를 함께 읽을 것.
