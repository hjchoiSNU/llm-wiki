---
title: "Obesity remodels activity and transcriptional state of a lateral hypothalamic brake on feeding (Rossi 2019, Science)"
type: paper
created: 2026-10-03
updated: 2026-10-03
source: "raw/2019 Science. Obesity remodels activity and transcriptional state of a lateral hypothalamic brake on feeding (1).pdf"
authors: [Mark A. Rossi, Marcus L. Basiri, Jenna A. McHenry, Oksana Kosyk, James M. Otis, Hanna E. van den Munkhof, Julien Bryois, Christopher Hübel, Gerome Breen, Wilson Guo, Cynthia M. Bulik, Patrick F. Sullivan, Garret D. Stuber]
year: 2019
journal: "Science 364(6447):1271–1274 (2019-06-28); doi:10.1126/science.aax1184 (Report; Perspective: Borgland, p.1233)"
---

> [!takeaway] 연구 방향 관점의 핵심
> **비만은 LH의 "먹기 엔진"보다 "브레이크"를 먼저 망가뜨린다.** Stuber lab(당시 UNC)은 LHA 세포 20,194개를 single-cell RNA-seq으로 분석했다. 그 결과 만성 HFD에 전사체가 가장 크게 바뀐 세포는 GABA(Vgat)도 orexin·MCH도 아닌 **glutamatergic LHA^Vglut2**였다. 같은 클러스터가 **인간 BMI GWAS 유전자 수준 연관에서도 가장 유의**했다. 이어 같은 LHA^Vglut2 뉴런을 head-fixed 2-photon으로 12주간 추적했다. 이 뉴런의 sucrose 섭취 반응은 **배부를 때(prefed) 더 크고 굶었을 때(24 h fast) 더 작다**(= satiety 상태 부호화). 그런데 HFD를 먹이면 그 반응이 **점진적으로 무뎌지고**, 휴지기 활동과 내재 흥분성(excitability)도 떨어진다. 저자 해석은 "내인성 섭식 brake가 약해져 과식·비만이 굳어진다"이다.
> 사용자 연구와 맞닿는 지점은 넷이다. (1) [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]]에서 LH는 Motivation hub인데, 사용자 lab의 LH 연구([[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]·[[kim-2024-normative-framework-dissociates-need|Kim 2024]])는 **GABA 쪽(LH^LepR)** 에 집중돼 있다. 이 논문은 비만의 전사체·인간 유전 신호가 **반대편 Vglut2 축**에 몰려 있음을 보여 준다. (2) LHA^Vglut2 반응은 Need가 낮을수록 커진다. 이는 Motivation을 깎는 **포만(satiation) 측 counter-signal** 후보다(연결 가설). (3) 데이터가 공개돼 있다(GEO **GSE130597**). 사용자 lab이 바로 **Lepr·Crh·Nts 아집단의 HFD DEG를 재분석**할 수 있다. (4) "식단을 되돌리면 brake가 회복되는가"는 저자들이 미해결로 남겼다. 이는 [[concept-weight-regain-defended-adiposity|체중 재증가]]·[[proposal-glp1ra-rebound-microbiota|GLP-1RA rebound]]의 회로 후보 질문과 겹친다.

# Obesity remodels activity and transcriptional state of a lateral hypothalamic brake on feeding (Rossi, Basiri et al. 2019)

- **저널**: *Science* 364(6447), 1271–1274, 2019-06-28 (Report). 접수 2019-02-26, 채택 05-10. DOI: 10.1126/science.aax1184. 같은 호에 Borgland의 Perspective(p.1233)가 실렸다.
- **소속**: University of North Carolina at Chapel Hill(Psychiatry, Neuroscience Center, Cell Biology & Physiology) **Stuber lab**. 인간 유전 분석은 Karolinska Institutet(Bryois·Hübel·Sullivan·Bulik)와 King's College London(Hübel·Breen; UK Biobank application 27546)가 맡았다. Bulik(UNC Nutrition)과 Sullivan(UNC Genetics)은 UNC에도 겸직한다. Rossi·Basiri는 공동 1저자이고, 교신은 **Garret D. Stuber**다(현 University of Washington).
- **데이터**: NCBI GEO **GSE130597**.
- **분업**: Rossi가 수술·영상·분석, Basiri가 sequencing을 맡았다. 시퀀싱 분석은 두 사람이 함께 했다. FISH는 Rossi·McHenry·Kosyk, slice 전기생리는 Rossi·Otis, 광유전은 Rossi·van den Munkhof·Guo, GWAS 연관은 Bryois·Hübel·Sullivan·Bulik·Breen이 수행했다.
- ⚠️ **자료 범위**: Drive에 있는 사본(4종)은 모두 **본문 4쪽만** 담고 있고 Supplementary Materials(Methods, fig. S1–S9, Table S1, Data S1–S2)는 없다. 아래에서 fig. S로 표기한 결과는 **본문이 요약한 문장만** 옮긴 것이다. HFD 조성, scRNA-seq 코호트의 HFD 기간, 통계 검정 종류, 렌즈 좌표 같은 세부는 확인하지 못했다.

## 한 줄 요약
만성 고지방식(HFD) 비만 마우스의 LHA를 single-cell RNA-seq과 같은 뉴런의 종단 2-photon calcium imaging으로 조사했다. **LHA^Vglut2 뉴런**은 HFD에 전사체가 가장 많이 바뀌는 세포군이었고, 인간 BMI 유전 연관도 가장 강했다. 이 뉴런은 포만 상태일수록 sucrose 섭취에 더 크게 반응하는 **섭식 brake**다. 그런데 HFD 12주 동안 sucrose 반응·휴지기 활동·내재 흥분성이 모두 감소했다. → 식이가 **내인성 섭식 억제 시스템을 약화**시켜 과식·비만을 촉진한다.

## 핵심 내용

### 배경
- LHA 병변은 섭식을 없애고 체중 조절을 바꾼다(Anand 1955). 국소 전기자극은 섭취를 촉진하고 그 자체로 보상적이다(Hoebel & Teitelbaum 1962). LHA가 섭식 등 동기 행동을 매개한다는 근거로는 Hoebel & Teitelbaum 1962, Rossi & Stuber 2018, Wise 1968, Margules & Olds 1962를 인용한다(refs 3–6). LHA는 여러 세포타입이 **독립적으로 섭식을 조절**하는 이질적 구조다(Jennings 2013·2015; Stamatakis 2016; Nieh 2015).
- 질문: 비만은 LHA 안의 **어떤 세포**를 바꾸는가?

### Figure 1 — LHA 단일세포 전사체 지도 (lean vs HFD-obese)
- 고처리량 scRNA-seq(Macosko 2015 Drop-seq 계열 [12])을 썼다. **대조 n = 7 마우스·10,086 세포, HFD n = 7 마우스·10,108 세포, 합계 20,194 세포**. 두 식이군 세포를 **함께 clustering**한 뒤 PCA → tSNE(Seurat [13])로 시각화했다.
- **14개 전사체 클러스터**를 canonical marker로 명명했다. 뉴런 클러스터 4개는 알려진 LHA 집단에 대응한다(**Vglut2·Vgat·Mch·Orx**). 나머지는 glia·stroma다: Astro, Endo, EOC(extraosseous osteopontin-expressing cells), MG, Olig, OPC, Peri, VSM. 범례에 약어로 나온 것은 이 8개이고, 뉴런 4개와 합쳐도 12개다. 14개 중 나머지 2개의 이름은 본문 4쪽에서 확인되지 않는다.
- **FISH 검증**: Vgat 단독·Vglut2 단독·Vgat+Vglut2 공발현 세포의 비율이 시퀀싱과 FISH에서 비슷했다(fig. S2–S3). → 통계적 clustering이 생물학적으로 타당하다.

### Figure 2 — HFD 전사체 변화는 LHA^Vglut2에 집중된다
- **클러스터별 HFD vs 대조 DEG**(Data S1): 세포타입마다 변화 양상이 달랐다.
  - (A) 유의 변화 유전자(P ≤ 0.001)의 signal-to-noise ratio 분포.
  - (B) **전체 유전자 중 유의 변화(P ≤ 0.0001, 그 클러스터 세포의 ≥ 50%에서 검출) 비율이 가장 큰 클러스터가 Vglut2**였다.
  - (C) 뉴런 클러스터별 DEG P값(P ≤ 0.1, 세포 ≥ 50%에서 검출) 누적분포에서 Vglut2가 다른 뉴런 클러스터와 유의하게 달랐다(*P < 0.0001). 범례에는 편향 방향이 적혀 있지 않다.
  - (D) Vglut2 클러스터 전 유전자의 asinh fold change 대 P값.
- **(E) 인간 BMI 유전 연관**: 클러스터별 **gene-level genetic association with human BMI**에서 **LHA^Vglut2가 가장 유의**했다(Bonferroni 기준선 표시). 저자들은 "LHA^Vglut2 안의 비슷한 변화가 인간 비만에도 기여할 수 있다"고 해석하고, HFD가 에너지균형 관련 시상하부 뉴런을 바꾼다는 선행 보고(Henry 2015 eLife; Chen 2017 Cell Rep)와 일치한다고 본다.
- **(F–G) Pseudotime**(Monocle, Trapnell 2014 [16]): LHA^Vglut2 세포만으로 비지도 학습 trajectory를 만들고, 예측된 **전사 변화 정도** 순으로 세포를 배열했다. **HFD 세포는 늦은 pseudotime에 농축**됐다(변화 정도의 gradient). 같은 HFD 세포 안에서 가장 많이 변한(late) 세포와 가장 덜 변한(early) 세포를 비교하면 **신경활동 관련 유전자**가 유의하게 달랐다(fig. S4B, Data S2).
- **(H) 기능 주석**(Enrichr, Kuleshov 2016 [17]): LHA^Vglut2 DEG(P ≤ 0.001)는 **ion homeostasis·synaptic activity·intracellular signaling** 같은 activity-dynamic 관련 범주에 몰렸다. 이 주석 패턴은 **Vgat 세포나 oligodendrocyte의 DEG 주석과 구분**됐다.
- 저자 단서: 이 데이터셋은 다른 LHA 뉴런·glia·stroma의 HFD 반응도 담은 **resource**다. 본문 분석은 glutamatergic 세포에 집중했다.

### Figure 3 — LHA^Vglut2 뉴런은 포만 상태를 부호화한다
- **준비**: Vglut2-Cre 마우스 LHA에 **AAVdj-DIO-GCaMP6m**을 주입하고, 주입 부위 약 150 μm 위에 microendoscopic(GRIN) lens를 삽입했다. Slice에서 GCaMP 신호 변동이 LHA^Vglut2 **활동전위 빈도를 신뢰성 있게 추적**함을 확인했다(fig. S5A–B).
- **과제**: head-fixed 2-photon(McHenry 2017 방식 [18])에서 sucrose를 **무작위 시점에 전달**했다.
- **결과** (모집단 **452 neurons / 13 mice**):
  - 개별 LHA^Vglut2 뉴런이 sucrose 섭취 **후에 흥분**했다.
  - **같은 뉴런**의 반응이 동기 상태에 따라 달랐다. **prefeeding(먹이 동기 낮음) 후 반응 > 24시간 금식 후 반응**이었다(AUC 분포 *P < 0.05).
  - 이 차이는 **lick rate 차이와 무관**했다(fig. S5C–E). → satiety가 특정 운동 출력과 독립적으로 LHA^Vglut2의 보상 부호화를 변조한다.
  - sucrose 섭취 중 신경 반응으로 **마우스의 포만/금식 상태를 decoding**할 수 있었다(Otis 2017 방식 [19]; **P = 0.002**).
  - 금식은 **기저 calcium dynamics**도 낮췄다(fig. S5G–J).
- **인과 조작**(fig. S6–S7): LHA^Vglut2 광자극은 consummatory licking을 **주파수 의존적으로 일시 억제**했고 **혐오적**이었다(Jennings 2013·Stamatakis 2016과 일치). → 이 집단은 "음성 섭식 조절자(negative feeding regulator)"다.

### Figure 4 — 만성 HFD가 LHA^Vglut2 활동을 억누른다 (종단 추적)
- **설계**: Fig 3의 영상 마우스를 HFD 또는 대조식으로 **12주** 유지하면서 0·2·12주에 영상화했다. 체중은 HFD에서 더 늘었다(**HFD n = 7, 대조 n = 6**).
- **기록 뉴런 수**:

  | 시점 | 대조 | HFD |
  |---|---|---|
  | 0주 | 232 neurons / 6 mice | 220 / 7 |
  | 2주 | 188 / 6 | 231 / 7 |
  | 12주 | **105 / 4** | 201 / 7 |

  12주 대조군은 마우스가 4마리로 줄었다(본문에 이유 미기재).
- **결과**:
  - 대조군 LHA^Vglut2는 sucrose 반응성을 **유지**했다. HFD군은 **점진적으로 덜 반응**했다(C–E).
  - HFD군은 **휴지기 활동도 감소**했다(fig. S8A–C).
  - sucrose 반응으로 **식이(HFD vs 대조)를 decoding**하면 **12주에서 가장 정확**했다(12주 vs 0·2주 P < 0.01; fig. S8E).
- **같은 세포 추적**(G–H; **대조 44 cells / 4 mice, HFD 33 cells / 4 mice**): 2주·12주 반응을 0주 기저 반응에 대해 그리면, HFD 세포는 **같은 뉴런 안에서** sucrose 반응이 둔화됐다(fig. S8E–J도 함께 인용; 범례에는 *P < 0.05와 ns가 함께 표기돼 있다. 대조 쪽이 ns라는 것은 본문 문맥에서 추정한 것이다). → 세포 구성이 바뀐 것이 아니라 **개별 뉴런의 food reward 부호화가 비만 중에 변한다**.
- **기전**(fig. S9): patch-clamp에서 **내재 흥분성 감소**가 HFD에 의한 LHA^Vglut2 억압의 바탕이었다.

### Discussion·한계 (원문)
- **Brake 가설**: 흥분성 LHA^Vglut2 신호는 추가 섭취를 억제하는 **brake의 작동**을 나타낸다. 먹이 동기가 낮을 때 더 흥분성이고, 만성 HFD는 이 세포의 활동을 저해해 **내인성 섭식 감쇠기(attenuator)를 약화**시키고 과식·비만을 촉진한다.
- **미해결로 남긴 것**:
  - LHA^Vglut2는 섭식 외에 **aversion**에도 기여한다(fig. S7M–O; Nieh 2016, Lazaridis 2019, Trusel 2019). **섭식 brake 집단과 혐오 집단이 분리돼 있는지**는 모른다.
  - **표준식으로 되돌리면 LHA^Vglut2 변화가 정상화되는지** 모른다.
  - 탈수 같은 **다른 항상성 도전**이 이 집단에 영향을 주는지도 모른다.
- Note added in proof: Mickelsen 2019 Nat Neurosci가 LHA scRNA-seq 이질성을 독립적으로 보고했다.
- **방법론적 한계(위키 관점)**:
  - scRNA-seq은 HFD 비만 **최종 시점의 단면** 비교이고 영상 코호트와는 다른 마우스다.
  - 2-photon은 head-fixed 무작위 sucrose 전달 과제라 자유행동 식사 구조(개시·지속·종료)는 보지 않았다.
  - BMI 연관은 **유전자 수준 enrichment**이지 인과 변이를 보여 주는 것은 아니다.
  - HFD 마우스에서 brake를 **회복시키는 조작**(예: HFD 마우스에서 LHA^Vglut2 활성화로 과식이 줄어드는지)은 본문에 없다. 비만의 원인인지 결과인지는 **상관 수준**에 머문다.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **NMPU의 포만 counter-term**: [[kim-2024-normative-framework-dissociates-need|Kim 2024]]는 ARC^AgRP = Need(predicted deficit), LH^LepR = Motivation(accumulated need)로 매핑했다. 본 논문의 LHA^Vglut2는 **같은 sucrose에 대해 Need가 낮을수록(prefed) 더 크게** 반응한다. 따라서 Motivation을 깎는 **satiation/Utility feedback 신호** 후보로 둘 수 있다. 검증 설계: Kim 2024의 normative model에 LHA^Vglut2 photometry를 넣어 **누적 섭취(consumption integral)를 추적하는지, 1 − Need를 추적하는지** 비교한다. 비만은 이 counter-term이 꺼져 **Motivation이 상쇄되지 않는 상태**로 정식화된다.
- **사용자 lab의 GABA 편향 보완**: [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]·[[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]]·[[ha-2024-hypothalamic-neuronal-activation-non-human|Ha 2024]]는 모두 LH GABA(LepR) 축을 다룬다. 본 논문에서는 **HFD 전사체 변화와 인간 BMI 연관이 모두 Vglut2 쪽에서 최대**였다. 비만 치료 표적으로는 "GABA engine을 끄는 것"보다 **"Vglut2 brake를 복원하는 것"** 이 인간 유전 근거에 더 가깝다는 작업 가설이 나온다. 재분석 1순위: GEO **GSE130597**에서 Vgat 클러스터 안 **Lepr⁺·Crh⁺·Nts⁺ 아집단**의 HFD DEG와 pseudotime을 Vglut2와 같은 기준으로 비교한다. 원문은 Vgat 클러스터를 하나로 다뤘다.
- **LHA^Ratio로의 번역**: [[gordon-2026-lateral-hypothalamic-control-of-the|Gordon 2026]](같은 Stuber lab)은 GABA/Glut 비율이 섭취물 가치와 선조체 DA 지형을 정한다고 보였다. 본 논문처럼 비만에서 Glut 쪽만 무뎌지면 **비율이 위로 치우친다**. 그러면 같은 음식에도 **전측(NAc) DA 가치 채널이 과대 설정**된다는 예측이 나온다. DIO 마우스에서 Gordon 과제를 반복하면 검증할 수 있다.
- **GLP-1RA·rebound**: 저자들이 남긴 "식단을 되돌리면 정상화되는가"는 [[concept-weight-regain-defended-adiposity]]의 회로 질문이다. GLP-1RA 투약·중단 동안 LHA^Vglut2 sucrose 반응과 흥분성이 **회복되는지, 감량 후에도 둔화가 남는지**를 보는 실험은 [[proposal-glp1ra-rebound-microbiota]]의 기전 축 하나로 넣을 수 있다. 시냅스 기억(PVH^TRH→AgRP, [[grzelka-2023-a-synaptic-amplifier-of-hunger|Grzelka 2023]])과 짝을 이루는 **"brake 측 기억"** 후보다.
- **DTx·인간 표현형**: 포만 상태에서 sucrose 반응이 커지는 brake가 비만에서 무뎌진다는 것은 인간의 **포만 후 섭취 억제 실패**(eating in the absence of hunger)와 형식이 같다. [[lee-2025-hijacked-brain-modern-obesity-cue|hijacked brain]] 표현형 중 "배불러도 멈추지 못함" 축의 회로 후보로 둘 수 있다.

## ⚠️ 위키 내 충돌·긴장
- **"비만 = 쾌락가치 저하(hedonic devaluation)의 LH판"이라는 서술 — [[concept-hedonic-devaluation]] · [[liu-2026-granular-motivational-interaction-and|Liu 2026]]**: 위키는 "LH^VGLUT2가 비만에서 보상 반응이 blunted"를 hedonic devaluation의 **LH 대응 현상**으로 적어 두었다. 그러나 원문 해석은 반대 방향의 함의를 갖는다. LHA^Vglut2 반응은 **동기가 낮을수록(포만) 커지는 brake 신호**다. 이것이 무뎌지면 **억제가 풀려 더 먹는다**. 가치가 떨어진 상태라면 오히려 brake 반응이 **커져야** 한다. 비만에서는 brake 반응이 작아지므로, 이 신호는 비만에서 **가치·포만 상태와 탈동조화**된다. 따라서 "보상 반응 blunting"이라는 같은 단어가 [[gazit-shimoni-2025-changes-in-neurotensin-signalling-drive|Gazit Shimoni 2025]](NAc→VTA NTS 고갈 → hedonic 섭식↓)에서는 **섭식↓**, 본 논문에서는 **섭식↑**를 뜻한다(병기, 덮어쓰지 않음).
- **brake 둔화의 기전: 내재 흥분성 vs 시냅스 억제 — [[wang-2026-a-hypothalamic-circuit-links|Wang 2026]]**: Wang은 만성 HFD **불안-취약 아형**에서 PVN^CRH가 LHA^Glu를 순억제(CRHR2)해 brake를 끄고, 그 결과 과식이 생긴다고 보고했다(섭식 후 c-Fos↓). 본 논문은 아형 구분 없이 HFD 전체에서 **세포 내재 흥분성 감소 + 활동 관련 유전자 변화**를 기전으로 든다. 두 연구는 **brake 기능 상실이라는 결론에서 수렴**하지만 기전 층위(외부 시냅스 입력 vs 내재 막 특성)와 표본(취약 아형 vs 전체)이 다르다. 상보 가설로 병기한다. 내재 흥분성 감소가 CRHR2 신호의 하류 결과인지는 미검증이다.
- **LH^Glut의 가치 scaling 방향 — [[gordon-2026-lateral-hypothalamic-control-of-the|Gordon 2026]]**: Gordon의 bulk photometry에서 LH^Glut는 FR:Suc 농도에 **scaling하지 않았고**, WR:NaCl에서는 가치에 **음(−)으로** scaling했다. 본 논문은 같은 sucrose에서 **내부 상태(fed > fasted)** 에 따른 변조를 보였다. "LH^Glut는 자극 농도보다 **내부 상태**(Need)를 따라간다"로 묶으면 정합하지만, 조작 축(농도 vs 상태)과 해상도(bulk vs 단일세포)가 달라 직접 비교는 안 된다(병기).
- **LH^Vgat consumption ensemble과 반대 부호의 상태 의존성 — [[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026]]**: LH^Vgat consumption ensemble의 섭취 반응은 **금식 > 자유급식**이고, 본 논문 LHA^Vglut2는 **prefed > fasted**다. 모순이 아니라 두 집단이 **거울상으로 상태를 부호화**한다는 그림이다(Gordon의 비율 개념과 정합). 단 Lee는 액상식 구강 주입, 본 논문은 sucrose 자발 섭취이고 동일 마우스 비교가 아니다.
- **appetitive/consummatory 표의 LH^Vglut2 행 — [[concept-appetitive-consummatory-phases]] · [[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]]**: 표는 LH^Vglut2를 "contact 시 sharp peak(brake), aversive에 강한 반응"으로 요약한다. 본 논문은 여기에 **(i) 반응 크기의 포만 의존성**과 **(ii) 비만에서의 둔화**라는 두 변조 축을 더한다. 충돌은 아니다. 다만 "brake"를 고정 속성으로 서술하면 **상태·식이 의존성**이 빠진다.
- **"ablation → HFD 과식·체중↑" 출처 — [[chen-2025-the-integrated-function-of-the|Chen 2025]] · [[stuber-2025-the-neurobiology-of-overeating|Stuber 2025]]**: 두 리뷰는 LHA^Vglut2 ablation 결과와 Rossi 2019를 한 문장에 묶어 인용한다. 그러나 **본 논문 본문에는 ablation·loss-of-function 실험이 없다**(활성 감소의 상관 관찰 + 광자극 gain-of-function만 있음). ablation 근거는 다른 원전(Stamatakis 2016 등)으로 귀속해야 한다.

## 관련 페이지
- [[concept-lateral-hypothalamus]] — 개념 hub. LH^Vglut2 = "brake"의 상태·식이 의존성(포만에서 ↑, 비만에서 둔화) 원전.
- [[rossi-2023-control-of-energy-homeostasis]] — 같은 1저자의 LHA 세포타입 리뷰(TiNS 2023). Vgat engine/Vglut2 brake 프레임의 상위 정리.
- [[stuber-2025-the-neurobiology-of-overeating]] — 같은 교신저자의 과식 리뷰. "DIO에서 LHA glutamate 활성 둔화(Rossi 2019)" 인용처.
- [[gordon-2026-lateral-hypothalamic-control-of-the]] — 같은 Stuber lab 후속. LH^GABA/LH^Glut 비율 → 선조체 DA 지형. 비만 시 Glut 둔화 → 비율 상향 예측.
- [[jennings-2015-visualizing-hypothalamic-network-dynamics]] — 같은 lab의 LH^Vgat microendoscope 원전. 본 논문은 짝이 되는 Vglut2 쪽을 2-photon으로 종단 추적.
- [[wang-2026-a-hypothalamic-circuit-links]] — HFD에서 LHA^Glu brake 상실의 **시냅스 기전**(PVN^CRH→CRHR2). 본 논문 **내재 흥분성** 기전과 상보.
- [[chen-2025-the-integrated-function-of-the]] · [[liu-2026-granular-motivational-interaction-and]] — 본 논문을 "HFD가 brake 둔화"로 인용한 리뷰.
- [[concept-hedonic-devaluation]] · [[gazit-shimoni-2025-changes-in-neurotensin-signalling-drive]] — 비만의 "blunted reward response"가 회로마다 섭식에 반대 부호로 작용한다는 병기.
- [[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles]] — LH^Vgat consumption ensemble(금식 ↑)과 거울상인 LHA^Vglut2(포만 ↑).
- [[concept-appetitive-consummatory-phases]] · [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — LH^Vglut2 brake 행의 상태·식이 변조 보강.
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] · [[kim-2024-normative-framework-dissociates-need]] · [[kim-2024-unified-theoretical-framework-underlying-regulation]] · [[concept-need-motivation-pleasure-utility]] — 사용자 lab LH^LepR(GABA)=Motivation 축과, 그 counter-term 후보인 Vglut2 brake.
- [[concept-obesity-genetics]] · [[heyward-2025-single-nucleus-transcriptional-and-chromatin]] — 인간 BMI 유전 신호의 세포타입 귀속(LHA^Vglut2 클러스터 최대 연관).
- [[concept-hypomap]] — 시상하부 단일세포 atlas. 본 논문은 HypoMap 이전 LHA 단독 scRNA-seq + HFD 비교 데이터셋(GSE130597).
- [[concept-weight-regain-defended-adiposity]] · [[proposal-glp1ra-rebound-microbiota]] — "식단 복귀 시 brake 회복 여부" 미해결 질문의 응용처.
- [[concept-lateral-habenula]] — LHA^Vglut2의 혐오 출력 표적(Stamatakis 2016·Lazaridis 2019 계열). 원문은 brake 집단과 aversion 집단의 분리 여부를 미해결로 남김.
- [[person-choi-hyung-jin]] — 사용자 lab hub.
- [[rossi-2021-transcriptional-and-functional-divergence]] — ★ 같은 1저자의 직계 후속(Neuron 2021): 본 논문이 하나로 다룬 LHA^Vglut2를 **LHb 투사(전측·Pax6⁺·고흥분성·leptin↓/ghrelin↑ 민감)** 와 **VTA 투사(후측·Pdyn/Hcrt=orexin·혐오 우세)** 로 분해. 본 논문이 남긴 "brake 집단과 aversion 집단이 분리돼 있는가"에 투사 축으로 답한다. ⚠️ **상태 의존성 방향이 어긋난다**: 본 페이지는 sucrose 반응이 **prefed > 24 h fasted**로 적는데, 2021 논문의 두 투사 집단은 **fasted > fed**(F(1,578)=21.77, p=3.8e-6)다. 2021 Discussion은 본 논문을 "less responsive after feeding"으로 인용하면서, 투사 집단이 전체 Vglut2의 **소수**이고 금식에서 반응이 커지는 소수 세포일 수 있다고 봉합한다(급식 상태에서 LHb 투사가 더 많이 반응하는 성질은 유지). 2019 원문 본문을 다시 확인하니 방향은 "After prefeeding … responses of the same LHAVglut2 neurons were greater than those after a 24-hour fast"였고, 본 페이지의 prefed > fasted 기술이 맞다. 따라서 2021 Discussion의 "less responsive after feeding" 인용은 2019 원문과 **방향이 반대**다. 두 논문의 차이는 집단 차이(전체 Vglut2 vs 투사 소수 집단)로 병기한다.
- [[rossi-2018-overlapping-brain-circuits-for]] — 같은 1저자(Rossi)의 선행 리뷰(Cell Metab 2018). 본 논문이 수행한 "활동 기록으로 부분집합 분리 + single-cell sequencing"을 **방법론 권고로 미리 제시**했고, LHA^Vglut2 **genetic ablation → 섭식·체중↑**를 정확히 **Stamatakis 2016**에 귀속한다 — 위키가 지적한 ablation 출처 혼동의 정본.
- [[wang-2021-expansion-assisted-iterative-fish-defines-lateral]] — 본 논문 scRNA-seq의 **대조군 2,087 cells**가 Mickelsen 2019·Sternson lab 자체 데이터와 통합됐다. 그 결과가 LHA consensus 클러스터(흥분성 17 + 억제성 17)이고, EASI-FISH 24-plex marker 선정의 기반이 됐다. 본 논문의 뉴런 4 클러스터(Vglut2·Vgat·Mch·Orx)와는 해상도 차이일 뿐이다 (bioRxiv 2021, Sternson lab).
- [[jennings-2013-the-inhibitory-circuit-architecture]] — 같은 lab 선행(Science 2013): LHA^Vglut2 = 섭식 브레이크(활성 → 섭취↓·혐오 / 억제 → 포만 중 섭식·기호식 선호)이고 **상류 BNST GABA 입력의 선택 표적**이다(rabies F1,20=38.50, P<0.001). 본 논문의 "만성 HFD 12주에 LHA^Vglut2 반응·내재 흥분성 둔화, 인간 BMI 유전 연관이 Vglut2 클러스터에 최대"와 묶으면 **비만에서 브레이크가 느슨해져 BNST 입력 없이도 탈억제된다**는 연결 가설이 된다(원문 주장 아님).
- [[mickelsen-2019-single-cell-transcriptomic-analysis-of]] — 본문 note added in proof가 가리키는 독립 LHA scRNA-seq(Nat Neurosci 2019, UConn Jackson lab × JAX Robson lab). 7,129 세포 → **흥분성 15 + 억제성 15** 클러스터로, 본 논문의 뉴런 4 클러스터(Vglut2·Vgat·Mch·Orx)와는 **해상도 차이**다(둘 다 [[wang-2021-expansion-assisted-iterative-fish-defines-lateral|Wang 2021]]의 17+17 consensus로 통합됨). ⚠️ 그쪽은 Pmch·Hcrt 전사체가 **모든 클러스터에서 낮게 검출**되는 현상을 해리 중 ambient mRNA로 귀속한다 — 해리 기반 LHA 데이터에서 "Pmch⁺/Hcrt⁺ 세포 비율"을 읽을 때의 공통 함정(병기).
