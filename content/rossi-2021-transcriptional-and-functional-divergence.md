---
title: "Transcriptional and functional divergence in lateral hypothalamic glutamate neurons projecting to the lateral habenula and ventral tegmental area (Rossi 2021, Neuron)"
type: paper
created: 2026-10-03
updated: 2026-10-03
source: "raw/2021 Neuron. Transcriptional and functional divergence in lateral hypothalamic glutamate neurons projecting to the lateral habenula and ventral tegmental area.pdf"
authors: [Mark A. Rossi, Marcus L. Basiri, Yuejia Liu, Yoshiko Hashikawa, Koichi Hashikawa, Lief E. Fenno, Yoon Seok Kim, Charu Ramakrishnan, Karl Deisseroth, Garret D. Stuber]
year: 2021
journal: "Neuron 109, 1–15 (2021-12-01 호; 온라인 2021-10-07); doi:10.1016/j.neuron.2021.09.020"
---

> [!takeaway] 연구 방향 관점의 핵심
> **"LH^Vglut2 = 섭식 brake"라는 단일 집단 서술이 투사 표적에 따라 두 개로 쪼개진다.** Stuber lab은 같은 LHA glutamate 뉴런을 **LHb 투사 vs VTA 투사**로 나눠 해부·전사체·전기생리·in vivo 2-photon을 모두 한 논문에서 비교했다. 네 층위 전부에서 갈린다. ① **해부**: LHb 투사는 **전측(anterior) LHA**, VTA 투사는 **후측(posterior) LHA**에 치우치고 이중표지 세포는 드물다. ② **전사체**: LHb 투사는 **Pax6⁺ Glut1**(및 Sostdc1⁺ Glut2) 클러스터, VTA 투사는 **Pdyn⁺/Hcrt⁺**(= orexin) 클러스터에 농축 — 106개 DEG. ③ **흥분성**: LHb 투사가 **휴지기 발화↑·rheobase↓·spike threshold 더 과분극**으로 더 흥분성이다. ④ **기능**: 둘 다 sucrose·quinine에 **흥분**으로 반응하고 quinine 반응이 더 크지만, **quinine 쪽은 VTA 투사가 더 강**하고 **포만 상태에서 sucrose에 더 많이 반응하는 쪽은 LHb 투사**다.
> 사용자 연구에 바로 닿는 지점은 셋이다. (1) **leptin이 두 경로를 반대 방향으로 민다** — leptin은 LHb 투사의 sucrose 반응을 **깎고** VTA 투사의 반응을 **키운다**(interaction p=1.6e-14). ghrelin은 LHb 투사만 움직인다. [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]]에서 Need→Motivation 변환이 **단일 스칼라가 아니라 출력 경로별로 부호가 다른 벡터**일 수 있다는 뜻이다. (2) **Lepr·Ghsr mRNA가 glutamatergic 투사 뉴런의 일부에 있다**(**Lepr**은 LHb 투사 비율이 VTA 투사보다 유의하게 높고 X²=121.67, **Ghsr은 두 경로 차이 없음** X²=1.80, p=0.18). 사용자 lab의 [[lee-2023-lateral-hypothalamic-leptin-receptor|LH^LepR = GABA 92%]] 프레임에 **소수의 glutamatergic LepR 축**을 병기해야 한다. (3) "LH^Vglut2 brake"의 섭식 관련 책임은 **LHb 투사 쪽**으로 좁혀진다(저자 결론: LHb 투사가 두 호르몬 모두에 민감하고 포만 시 더 반응 → 섭식 유도에 더 관여). [[rossi-2019-obesity-remodels-activity-and|Rossi 2019]]의 비만 brake 둔화가 **어느 투사에서 일어나는지**가 다음 질문이다.

# Transcriptional and functional divergence in LHA glutamate neurons projecting to LHb and VTA (Rossi et al. 2021)

- **저널**: Neuron 109, 1–15 (권호 2021-12-01; 접수 2021-03-10, 수정 05-28, 채택 09-10, 온라인 공개 10-07). DOI: 10.1016/j.neuron.2021.09.020.
- **소속**: University of Washington, Center for the Neurobiology of Addiction, Pain, and Emotion (Anesthesiology & Pain Medicine / Pharmacology) + UNC Chapel Hill + Stanford(Deisseroth lab — INTERSECT 바이러스 제작). 교신 **Garret D. Stuber** (gstuber@uw.edu). 1저자 **Mark A. Rossi**는 현재 Rutgers(Child Health Institute of New Jersey).
- **데이터·코드**: scRNA-seq GEO **GSE169176**; 분석 코드 Zenodo doi:10.5281/zenodo.5500492.
- **동물**: Vglut2-ires-Cre (JAX 028863, Vong 2011)와 C57BL/6J. 암수 모두 사용. 좌표(bregma 기준, mm): LHA −1.35 AP / 0.95 ML / −5.15 DV(뇌표면), VTA −3.08~3.10 / 0.55 / −4.25, LHb −1.5 / 1.2 / −3.15(수직 15°).
- **자금**: BBRF NARSAD Young Investigator(M.A.R., K.H.), NIH DK121883·NS007431·DA032750·DA038168·P30DA048736.

## 한 줄 요약
LHA glutamate(Vglut2) 뉴런을 LHb 투사와 VTA 투사로 나눠 보면 **해부학·전사체·전기생리·in vivo 반응 동역학이 모두 다르다**. 두 경로 모두 appetitive(sucrose)·aversive(quinine) 자극에 흥분으로 반응하지만 **혐오 쪽은 VTA 투사가, 포만·섭식호르몬 민감성은 LHb 투사가** 우세하며, **leptin은 두 경로를 반대 방향으로** 조절한다.

## 핵심 내용

### Figure 1 — 해부학적 분리: 전측 LHA→LHb, 후측 LHA→VTA
- **이중 retrograde 전략**: LHb에 retroAAV-DIO-eYFP, VTA에 retroAAV-DIO-mCherry를 주입(Vglut2-Cre)하고 LHA에서 FISH로 형광단백 mRNA를 셌다.
- AP 축을 따른 상대 밀도(**n = 10 hemispheres / 5 mice**): **Projection 효과 F(2,18)=65.83, p=5.3e-9**; AP 위치 주효과는 없고(F(6,54)=1.97, p=0.09) **상호작용 F(12,108)=12.05, p=4.0e-15**. → LHb 투사는 **전측**, VTA 투사는 **후측**에 농축.
- 세포 수는 **VTA 투사 > LHb 투사**, 그리고 둘 다 **이중표지 세포보다 훨씬 많다**(Fig 1G) → 두 경로는 대체로 **별개 세포 집단**.

### Figure 2 — 전사체 분리: Pax6(LHb) vs Pdyn/Hcrt(VTA)
- 야생형 마우스에 retroAAV-hSyn-eYFP(LHb) + retroAAV-CAG-tdTomato(VTA)를 주입하고 6주 후 LHA tissue punch → 10x Chromium v3 scRNA-seq (C57BL/6J **n = 7 주입**(4M/3F, 수술 시 6–8주) 중 1마리는 조직학 확인용, **시퀀싱은 6마리**; Hashikawa 2020 파이프라인).
- QC 후 **34,518 cells**로 clustering, 그중 **17,378개가 뉴런**으로 **32 subcluster** 형성. 본문 보고치는 뉴런당 median **5,544 UMI / 3,106 gene / 38,544 read / 5% mitochondrial read**(Methods의 전체 세포 기준 수치는 median 2,250 gene / 4,783 transcript, mean 25,640 read — 기준 집단이 달라 그대로 병기).
- 형광단백 transcript 검출: **eYFP⁺ 257 neurons(LHb 투사)**, **tdTomato⁺ 1,595 neurons(VTA 투사)**, 거의 겹치지 않음. **LHb 투사는 주로 glutamatergic**(Slc17a6⁺ 비율 차이 X²=9.85, p=0.0017)이고 **VTA 투사는 GABA 클러스터까지 포함해 더 이질적**(Fig S1J).
- Logistic regression 기반 DEG 분석: **106개 유전자가 차등 발현**(p<0.01).
- 클러스터 귀속:
  - **Glut1 = Pax6⁺** → eYFP(LHb) 농축.
  - **Glut2 = Sostdc1⁺** → eYFP 농축.
  - **Pdyn/Hcrt 클러스터**(= glutamatergic orexin) → tdTomato(VTA) 농축.
  - **Glut14 = Pitx2⁺** → tdTomato 농축.
  - **Nptx2** → Glut1과 Pdyn/Hcrt 양쪽에 분포.
- 해석 단서(저자): Hcrt 발현은 여러 subcluster에서 약하게 검출돼 검증 마커로는 **Pdyn**을 썼다. 다만 orexin 고발현 뉴런이 LHA^Vglut2→VTA의 상당 부분이고 Pdyn⁺ 집단과 대체로 겹치므로 **Pdyn/Hcrt를 한 집단으로 취급**한다고 명시.

### Figure 3 — 순차 HCR in situ 검증(9유전자 × 3 라운드)
- C57BL/6J **n = 3 mice**(마우스당 6–12 section). Round 1: Pax6·Sostdc1·eYFP / Round 2: tdTomato·Slc32a1(Vgat)·Slc17a6(Vglut2) / Round 3: Nptx2·Pdyn·Pitx2. 라운드 사이 DNase I으로 probe 분해 후 재hybridization, brightfield 기준 정렬, HALO로 single-cell puncta 정량.
- eYFP⁺·tdTomato⁺ 세포는 **공간적으로 섞여 있다**(Fig 3L) — AP 축 편향은 밀도 수준의 차이이지 영역 분리가 아니다.
- 시퀀싱 vs HCR 일치도: 유전자별 발현 세포 비율 **r = 0.81 (p = 0.00047)**, logFC **r = 0.94 (p = 0.00015)**. SVM 분류 성능도 두 방법이 동등(Fig 3Q).
- **불일치 1건**: 시퀀싱은 Nptx2가 양 경로를 표지하되 Pdyn⁺ 쪽에 농축될 것으로 예측했으나, HCR에서는 **LHb 투사 쪽에서 더 높게** 나왔다(저자 명시).

### Figure 4 — LHb 투사가 더 흥분성이다 (whole-cell patch)
- Vglut2-Cre **n = 20 mice (10M/10F, 수술 시 3–4개월)**, 양측 LHb·VTA에 retroAAV-Ef1a-DIO-eYFP/mCherry(**두 형광단백을 뇌영역 간에 counterbalance**), 약 6주 후 기록. 세포 수는 지표별로 **LHb 45–46 cells / VTA 46–47 cells (11/10 mice)**, cell-attached 기록만 **LHb 30 / VTA 35 cells (8/7 mice)**.
- 차이 **없는** 항목: 휴지막전위(t(91)=0.01, p=0.99), 활동전위 진폭(t(89)=0.01, p=0.99).
- 차이 **있는** 항목(모두 LHb 투사가 더 흥분성 방향):
  | 지표 | 통계 |
  |---|---|
  | 막 capacitance (LHb ↓) | t(91)=2.69, p=0.008 |
  | AP threshold (LHb 더 과분극) | t(89)=4.56, p=0.00002 |
  | AHP 진폭 (LHb ↓) | t(89)=2.53, p=0.01 |
  | cell-attached 자발 발화율 (LHb ↑) | t(63)=4.02, p=0.0002 (30/35 cells) |
  | rheobase (LHb ↓) | t(91)=5.62, p=2e-7 |
  | 양전류 주입 시 spike 수 | Projection F(1,89)=6.34, p=0.01 |
- 자발 활동 세포 비율도 **LHb 30/30 vs VTA 30/35 (X²=4.64, p=0.03)**. VTA 투사의 자발 발화율은 **약 2 Hz**로, 동정된 orexin 뉴런 기록치(Li 2002)와 일치 — 전사체(Pdyn/Hcrt) 결과와 수렴.
- **SVM 디코딩**: 전기생리 속성만으로 투사 표적을 맞출 수 있다(p = 0.002).

### Figure 5 — 두 경로 모두 sucrose·quinine에 흥분, 혐오는 VTA 쪽이 더 크다
- **INTERSECT 전략**(Fenno 2014·2020): LHb 또는 VTA에 retroAAV-Ef1a-mCherry-IRES-FlpO, LHA에 **AAV8-Ef1a-CreOn/FlpOn-GCaMP6m** → Vglut2-Cre × 투사 특이 교집합만 표지. LHA 위에 **0.6 mm × 7.3 mm GRIN lens**, head-fixation ring. **Vglut2-Cre n = 10 mice (6M/4F)**, LHb 5 / VTA 5. 5 Hz 2-photon(920 nm), 암주기 시작 4시간 내 측정.
- 과제: 24시간 절수 후 **60 trial 중 sucrose 10% 45 trial / quinine 1.5 mM 15 trial**을 무작위 순서로(cue 없음, 핥아야 정체를 안다). 두 용액 모두 핥지만 **quinine에서 licking이 더 일찍 중단**된다(Fig 5C).
- 두 경로 모두 섭취에 **시간 고정된 흥분** 반응이 다수. **Tastant 주효과 F(1,268)=63.48, p=4.7e-14**, Projection 주효과 없음(F(1,268)=1.75, p=0.19), **Interaction F(1,268)=3.97, p=0.047** → **quinine 증폭이 VTA 투사에서 더 크다**.
- 세포별 sucrose–quinine 반응은 강하게 상관(**LHb r=0.86, VTA r=0.72**, 둘 다 p<1e-15)이며 **절편이 다르다**(F(1,267)=10.48, p=0.0014). quinine>sucrose인 ROI 비율도 다르다(X²=15.60, p=0.0004).
- 개별 ROI 활동으로 **전달 용액을 디코딩**하면 둘 다 shuffle보다 우수하고 **VTA 모델이 LHb 모델보다 더 정확**(t(268)=2.10, p=0.037).
- **물 보상**(Fig S4, 갈증 상태): VTA 투사가 더 크게 반응(AUC t(291)=2.47, p=0.014; 반응 세포 비율 X²=11.90, p=0.0006). 단 물 반응은 sucrose·quinine보다 약하다. → 저자 해석: **VTA 투사는 특히 salience가 높은 자극(특히 음성 valence)에 민감**.

### Figure 6 — 금식이 두 경로를 모두 키우고, 둘 사이 차이를 지운다
- 같은 뉴런을 **ad lib 급식 vs 24시간 금식**에서 비교(sucrose 20 trial, n = 5 mice/group).
- 행동: 금식이 총 licking을 늘렸으나(t(9)=3.07, p=0.01) **consummatory lick patterning·latency는 비슷**(Fig S5B–C) → 반응 차이는 핥기 차이로 설명되지 않는다(Fig S5D–G: ROI별 lick rate 상관은 대부분 낮음).
- **AUC**: **Fasting 주효과 F(1,578)=21.77, p=3.8e-6**, Projection 주효과·상호작용 없음 → **두 경로 모두 금식에서 더 크게 반응**.
- 세포별 fed–fasted AUC는 상관(LHb r=0.79, VTA r=0.75)하되 **기울기가 다르다**(F(1,287)=5.96, p=0.015).
- **반응 세포 비율**: 금식에서 둘 다 증가(LHb X²=25.56, p=2.8e-6; VTA X²=36.95, p=9.4e-9). **급식 상태에서는 LHb 투사가 VTA 투사보다 더 많이 반응**(X²=12.58, p=1.9e-3)하지만 **금식에서는 차이 소멸**(X²=1.71, p=0.42).
- 반응 동역학: **LHb 투사의 peak가 VTA 투사보다 더 빠르다**(Fig 6·7) — 흥분성 차이와 정합.
- 개별 ROI 활동으로 **포만 상태 디코딩** 가능(LHb t(280.26)=7.13, p=8.5e-12; VTA t(237.27)=6.18, p=2.7e-9).
- **ex vivo도 같은 방향**(Fig S6): 금식이 AP threshold를 낮추고(F(1,137)=4.78, p=0.03) 기저 발화율을 낮췄으며(F(1,121)=4.75, p=0.03), 양전류 주입 반응에서 두 경로 차이는 **급식 상태에서만** 유의(Tukey p=0.04, 나머지 p>0.3). 전기생리 기반 SVM도 **급식 데이터가 금식보다 투사 표적을 잘 구분**(Bonferroni p=0.027)하고 둘을 합치면 구분 실패. 시냅스 입력은 두 경로에 **균일하게** 영향(IPSC rate F(1,50)=7.24, p=0.0097; EPSC/IPSC rate 비 F(1,50)=7.80, p=0.007; Projection 효과 없음).
- → **에너지 상태가 두 출력 경로의 기능적 분화 정도 자체를 조절**한다(금식 = 분화 축소).

### Figure 7 — leptin은 두 경로를 반대로, ghrelin은 LHb 쪽만 움직인다
- **leptin 1.5 mg/kg i.p.(금식 마우스)**, **ghrelin 1.0 mg/kg i.p.(급식 마우스)**, vehicle은 생리식염수. 영상 **30분 전** 투여, pseudorandom 순서 + washout day.
- 24시간 chow 섭취 대조(Fig S7I–J): leptin ↓(F(1,8)=6.83, p=0.03), ghrelin ↑(F(1,8)=7.52, p=0.03).
- 행동: **leptin은 보상 전달 후 핥기까지의 latency를 늘리고**(F(1,390)=5.02, p=0.026), **ghrelin은 줄인다**(F(1,389)=6.39, p=0.012). 둘 다 Projection 효과·상호작용 없음. lick patterning·섭취량은 불변(Fig S7K–L).
- **leptin (Fig 7E–H)**: **LHb 투사 반응 ↓, VTA 투사 반응 ↑**. Leptin F(1,370)=10.50, p=0.0013; Projection F(1,370)=7.60, p=0.006; **Interaction F(1,370)=63.99, p=1.6e-14** (Sidak p<0.001).
- **ghrelin (Fig 7I–L)**: 주효과 없음(Ghrelin F(1,313)=1.56, p=0.21; Projection F=2.94, p=0.087) + **Interaction F(1,313)=14.94, p=0.00013** (Sidak p<0.001). 본문·초록·Discussion은 일관되게 **"ghrelin이 LHb 투사 반응을 potentiate하고 VTA 투사에는 거의 효과 없음"**으로 기술한다. ⚠️ **단 Figure 7L 캡션은 "Ghrelin reduces evoked response magnitude in LHb projections"로 반대 방향으로 적혀 있다** — 상호작용 통계만 있고 방향은 캡션과 본문이 어긋난다. 위키는 **본문 방향(ghrelin → LHb 투사 ↑)** 을 채택하고 캡션 불일치를 병기한다(원문 판독 필요).
- vehicle 대비 반응이 유의하게 바뀐 세포 비율도 경로·호르몬별로 다르다(Fig S7M; LHb leptin vs ghrelin X²=43.95, p=3.4e-11; VTA leptin vs ghrelin X²=18.65, p=1.6e-5; leptin LHb vs VTA X²=52.2, p=5.0e-13; ghrelin LHb vs VTA X²=16.59, p=4.6e-5).
- **수용체 발현**(Fig S7A–H, RNAscope; Vglut2-Cre n=5, WT n=3): **Lepr·Ghsr mRNA가 두 투사 집단 일부에 존재**. **Lepr 발현 비율은 LHb 투사가 VTA 투사보다 유의하게 높고**(X²=121.67, p<0.0001), **Ghsr은 차이 없음**(X²=1.80, p=0.18). 다만 **LHA의 Lepr·Ghsr 발현 대부분은 이 투사 세포가 아닌 다른 세포**에 있다 → 저자들은 관찰된 효과가 **직접 작용 + 회로 수준 효과의 혼합**일 가능성을 명시(ARC 등 상류, VTA 등 하류, orexin·MCH 등 국소 세포 경유).
- 저자들의 한계 인정: **exogenous 호르몬은 fed/fasted 상태의 동역학을 완전히 재현하지 못했다** — 급식 마우스에 ghrelin을 줘도 **VTA 투사**가 금식처럼 반응하지 않았고, 금식 마우스에 leptin을 줘도 **VTA 투사**가 급식처럼 되지 않았다(저자들이 명시한 비재현 사례는 둘 다 VTA 투사 쪽이다). insulin·glucagon·GLP-1·amylin·CCK 등 다른 신호의 기여는 미검증.

### Discussion 요점
- **LHb 투사 = 전측 LHA·Pax6·고흥분성·호르몬 양방향 민감·급식 시 더 반응** / **VTA 투사 = 후측 LHA·Pdyn/Hcrt(orexin)·저흥분성·혐오·고salience 자극 우세**. 단 저자들은 "혐오 반응이 더 크다"를 **이 연구에서 쓴 농도 조건에 한정**해 적는다("at the concentrations used in this study").
- 저자 결론: 두 집단은 **공동으로 보상·혐오 행동을 조율**하되, **섭식(feeding) 유도에는 LHb 투사가 더 관여**한다. 근거 두 가지 — (1) LHb 투사만 leptin·ghrelin **양쪽**에 민감하다(leptin은 "배부른 것처럼", ghrelin은 "굶은 것처럼" 반응하게 만든다), (2) **급식 상태에서 LHb 투사가 음식 보상에 더 많이 반응**한다. 또한 선행 연구에서 LHA^Vglut2**→LHb** 조작은 섭취량을 바꾸지만(Stamatakis 2016) **→VTA** 조작은 바꾸지 않는다(Nieh 2015·2016).
- **"halt" 가설과의 정합**: 두 경로 모두 quinine에서 반응이 커지고 그때 licking bout가 잘려 나간다 → LHA^Vglut2 활성이 **진행 중인 appetitive 행동을 중단시킨다**는 기존 해석과 일치. 저자들은 이 뉴런들이 단순 reward/aversion 신호가 아니라 **섭식·consummatory·추구 행동의 종료(terminating ongoing actions)** 같은 상위 기능을 표상할 수 있다고 제안.
- **개체 수준 미해결**: LHA^Pax6→LHb, LHA^Pdyn/Hcrt→VTA 집단이 여기서 본 투사 집단과 기능적으로 같은지는 미검증(전사체 농축 ≠ 동일 집단). 조작 실험(광·화학유전)은 이 논문에 없다 — **전부 관찰·상관 데이터 + 분류 분석**이다.
- **방법 한계(저자 명시 + 위키 관점)**: VTA 투사가 더 많이 회수된 것은 VTA 투사의 이질성(GABA·Hcrt·Nts·MCH 포함)과 **프로모터 차이(hSyn vs CAG)** 때문일 수 있다. head-fixed·구강 전달 과제라 자유행동 식사 구조(개시·지속·종료)는 보지 않았다. Lepr/Ghsr은 **mRNA 수준**이고 수용체 기능 검증은 없다.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **Need→Motivation 변환이 경로별 벡터라는 가설**: [[kim-2024-normative-framework-dissociates-need|Kim 2024]]는 ARC^AgRP = Need(predicted deficit), LH^LepR = Motivation(accumulated need)으로 매핑했다. 본 논문은 **같은 호르몬(leptin)이 같은 LH 세포타입(Vglut2) 안에서 투사 표적에 따라 반대 부호**로 작동함을 보인다. [[concept-need-motivation-pleasure-utility|NMPU]]의 Motivation 항을 **스칼라가 아니라 "출력 경로별 가중 벡터"** 로 확장해야 하는지가 검증 가능한 질문이 된다. 설계: LH^LepR에 대해서도 **투사 표적별(VTA·LHb·NAc·PVT)** 로 photometry/2-photon을 나눠 leptin·GLP-1RA 반응 부호를 재보는 것.
- **glutamatergic LepR 축의 병기 필요**: 사용자 lab [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]은 Mickelsen 2019 기반으로 **LH^LepR의 92%가 GABA**라고 적는다. 본 논문은 그 나머지 쪽, 즉 **Vglut2 투사 뉴런 안의 Lepr⁺ subset**이 실재하고 **LHb 투사에서 비율이 더 높다**(X²=121.67)는 in situ 증거를 준다. "LepR = GABA engine"이라는 축약은 leptin의 **brake 측 작용점**을 빠뜨릴 수 있다. 재분석 1순위: GEO **GSE169176**(본 논문)과 **GSE130597**([[rossi-2019-obesity-remodels-activity-and|Rossi 2019]])에서 Lepr⁺ Vglut2 세포를 같은 기준으로 교차 확인.
- **비만 brake 둔화의 투사 귀속**: Rossi 2019는 HFD가 LHA^Vglut2 전체의 sucrose 반응·흥분성을 깎는다고 보고했다. 본 논문의 분해를 적용하면 **"어느 투사에서 둔화가 일어나는가"** 가 바로 다음 실험이다. LHb 투사(섭식 책임·고흥분성)에서 선택적으로 둔화된다면 비만의 brake 상실은 **전측 LHA→LHb 축의 병변**으로 좁혀진다. INTERSECT + GRIN lens로 DIO 종단 추적이 그대로 가능하다.
- **GLP-1RA 작용점 확장 가설**: 사용자 lab [[kim-2024-glp-1-increases-preingestive-satiation|Kim 2024 Science]](DMH GLP-1R→AgRP 식전 포만)와 [[lee-2026-distinct-lateral-hypothalamic-gabaergic|Lee 2026]](Ex-4가 LH^Vgat cue·섭취 반응 모두 감쇠)에 더해, 본 논문은 LH**^Vglut2**의 호르몬 민감성이 **경로별로 부호가 갈린다**는 선례를 준다. GLP-1RA가 LHA^Vglut2→LHb를 **brake 강화 방향으로** 밀어 주는지(leptin과 같은 방향인지, 반대인지)는 미검증이며, [[concept-glp1ra-response-variability|GLP-1RA 반응 변이]]의 회로 지표 후보가 된다.
- **DTx·인간 표현형**: "급식 상태에서 음식 보상에 더 반응하는 brake"가 꺼지면 **배불러도 멈추지 못함(eating in the absence of hunger)** 표현형이 된다. 본 논문은 그 신호가 **LHb 경유**임을 시사하므로, 인간 쪽에서 habenula 신호(fMRI; [[thanarajah-2019-food-intake-recruits-orosensory|Thanarajah 2019]]에서 밀크셰이크 섭취 시 habenula 활성)를 **포만 상태 × 보상 반응**의 교차 지표로 쓰는 설계가 가능하다. [[lee-2025-hijacked-brain-modern-obesity-cue|hijacked brain]]의 restraint 축과 연결.

## ⚠️ 위키 내 충돌·긴장 (병기 — 덮어쓰지 않음)
- **금식/포만 방향이 [[rossi-2019-obesity-remodels-activity-and|Rossi 2019]]와 반대로 읽힌다 (같은 1저자)**: 위키 Rossi 2019 페이지는 LHA^Vglut2의 sucrose 반응이 **prefed > 24 h fasted**(포만에서 더 큼, AUC p<0.05)라고 적는다. 본 논문의 투사 집단은 **둘 다 fasted > fed**(F(1,578)=21.77, p=3.8e-6)다. 저자들 자신이 이 긴장을 Discussion에서 다루며 두 가지로 봉합한다 — (1) 투사 집단은 전체 LHA^Vglut2의 **소수**이고, 금식에서 반응이 커지는 소수 세포가 바로 이들일 수 있다("We speculate that the small proportion of LHAVglut2 neurons projecting to LHb or VTA are among the cells that increased responding after fasting"), (2) **급식 상태에서는 LHb 투사가 더 많이 반응**하므로 "포만 민감 brake"라는 성질은 LHb 투사에 남는다. ⚠️ 다만 본 논문 Discussion은 Rossi 2019를 "LHAVglut2 neurons are **less responsive after feeding**"으로 요약해 **위키의 Rossi 2019 판독과 반대 방향으로 인용**한다. 원문 Rossi 2019 Fig 3 재확인이 필요한 미해결 항목이다(어느 쪽도 덮어쓰지 않고 병기).
- **"LH^Vglut2 = brake" 단일 서술 — [[chen-2025-the-integrated-function-of-the|Chen 2025]]·[[concept-lateral-hypothalamus]]·[[concept-appetitive-consummatory-phases]]**: 위키는 LHA^Vglut2를 "급성 활성 → 섭식 억제·혐오", "contact 시 sharp peak(brake)"로 한 줄로 요약한다. 본 논문은 그 집단이 **최소 두 개의 투사 정의 집단**이고 **섭식 책임은 LHb 투사 쪽**, **혐오 민감성은 VTA 투사 쪽**이라고 가른다. 모순이 아니라 **해상도 추가**다. 다만 "Vglut2 = brake"를 고정 속성으로 쓰면 투사·호르몬 의존성이 지워진다.
- **bulk LH^Glut 측정의 혼합 문제 — [[gordon-2026-lateral-hypothalamic-control-of|Gordon 2026]](같은 lab)**: Gordon은 LH^Glut를 **단일 채널**로 photometry 측정해 LHA^Ratio(GABA/Glut)를 정의했다. 본 논문에 따르면 그 신호는 **leptin에 반대 부호로 반응하는 두 집단의 합**이다. 따라서 호르몬·대사 상태를 바꾸는 조건에서는 Ratio의 해석이 **투사 조성에 의존**할 수 있다(상쇄 가능성). Gordon의 광유전 조작(LH^Glut → 전측 DA↓, TS DA↑)이 어느 투사 집단의 효과인지도 미분해 상태다(병기).
- **"LHA glutamate → LHb/VTA = 섭식 억제" 묶음 인용 — [[stuber-2025-the-neurobiology-of-overeating|Stuber 2025]]**: 리뷰는 LHb·VTA 투사를 한 문장으로 묶어 섭식 억제로 적는다. 본 논문(같은 교신저자)은 **→VTA 조작은 섭취를 바꾸지 않는다**(Nieh 2015·2016)고 명시하며 두 투사를 분리한다. 묶음 서술은 귀속을 LHb 쪽으로 좁혀야 한다.
- **LH→LHb의 기능 귀속 — [[concept-lateral-habenula]]**: LHb 페이지의 LH 접점은 **공격성·서열 상실**(Flanigan 2020, Fan 2023)로만 적혀 있다. 본 논문은 같은 LH→LHb 축에 **섭식·포만·섭식호르몬(leptin↓/ghrelin↑) 민감성**과 **전측 LHA·Pax6⁺·고흥분성**이라는 별개 기능 층을 더한다. 두 기능이 같은 세포인지는 미검증.
- **투사 표적별 부호 반전과의 관계 — [[jia-2026-novelty-exploration-activated-ensemble-in|Jia 2026]]**: Jia는 LH^Glu→**LHb**가 통각과민, →VTA는 주로 진통이라고 보고했다(novelty ensemble). 본 논문은 같은 두 표적을 **대사·보상 축**에서 가른다(LHb=섭식·호르몬, VTA=혐오·고salience). 두 결과는 "LH^Glu는 표적별로 기능이 갈린다"는 결론에서 수렴하지만, **어느 표적이 어느 부호인지는 축(통증 vs 섭식)에 따라 다르게 나온다** — 단일 "LHb=혐오/VTA=보상" 매핑으로 환원하면 안 된다(병기).
- **valence 무관 흥분 반응 — [[lee-2026-distinct-lateral-hypothalamic-gabaergic|Lee 2026]]**: Lee 2026은 LH^**Vgat**에서 혐오 열자극과 음식 cue에 공통 반응하는 salience ensemble을 보고했다. 본 논문은 LH^**Vglut2** 투사 집단이 sucrose·quinine 모두에 **흥분**으로 반응하고 세포 수준에서 상관(r=0.72–0.86)함을 보인다. 두 주요 세포타입 모두 **valence를 가로지르는 흥분 코딩**을 한다는 수렴적 그림이지만, 상태 의존성 부호는 서로 다르다(Lee 2026 consumption ensemble: 금식 ↑ / Rossi 2019 bulk Vglut2: 포만 ↑ / 본 논문 투사 집단: 금식 ↑). 셋을 한 축으로 정렬하려면 **같은 과제·같은 상태 조작**에서의 직접 비교가 필요하다.
- **orexin 뉴런의 소속 — [[concept-orexin-neurons]]·[[concept-dynorphin-kappa-opioid]]**: 본 논문은 LHA^Vglut2→VTA의 농축 클러스터가 **Pdyn⁺/Hcrt⁺**(orexin)이고 자발 발화율 ~2 Hz가 orexin 기록치와 맞는다고 본다. 즉 "LH^Vglut2 brake"의 VTA 분지 상당 부분이 **orexin/dynorphin 세포**일 수 있다 — 위키의 orexin(= 각성·보상 추구 촉진) 서술과 "Vglut2 = 섭식 brake" 서술이 **같은 세포에서 겹칠 수 있다**는 긴장이다. 단 저자들은 LHA^Pdyn/Hcrt→VTA 집단이 여기서 본 투사 집단과 기능적으로 동일한지는 **미검증**으로 남겼다.

## 관련 페이지
- [[concept-lateral-hypothalamus]] — 개념 hub. LH^Vglut2를 **투사 표적(LHb vs VTA)** 으로 분해한 1차 근거.
- [[rossi-2019-obesity-remodels-activity-and]] — 같은 1저자·같은 lab 선행(Science 2019). 비만에서 LHA^Vglut2 brake 둔화. ⚠️ 포만/금식 방향 판독이 본 논문과 어긋남(위 충돌 절).
- [[rossi-2023-control-of-energy-homeostasis]] — 같은 1저자의 LHA 세포타입 리뷰(TiNS 2023). 본 논문이 그 taxonomy에 **투사 축**을 추가.
- [[gordon-2026-lateral-hypothalamic-control-of]] — 같은 lab 후속. bulk LH^Glut 채널이 본 논문 기준으로는 **두 집단의 합**.
- [[concept-lateral-habenula]] — LHb hub. LH→LHb 축에 섭식·포만·호르몬 민감성 층을 추가.
- [[concept-orexin-neurons]] — LHA^Vglut2→VTA 농축 클러스터 = Pdyn/Hcrt(orexin), 자발 발화 ~2 Hz.
- [[concept-leptin]] · [[concept-ghrelin]] — 두 호르몬이 **같은 세포타입 안에서 투사별로 다른 부호**로 작용하는 사례.
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] · [[kim-2024-normative-framework-dissociates-need]] · [[kim-2024-unified-theoretical-framework-underlying-regulation]] · [[concept-need-motivation-pleasure-utility]] — 사용자 lab LH^LepR(GABA) 축과, Lepr⁺ glutamatergic 투사 subset의 병기·Motivation 벡터화 가설.
- [[lee-2026-distinct-lateral-hypothalamic-gabaergic]] — LH^Vgat의 valence 무관 salience ensemble. 세포타입을 달리한 수렴 결과.
- [[chen-2025-the-integrated-function-of-the]] · [[cheon-2025-lateral-hypothalamus-and-eating-cell]] · [[concept-appetitive-consummatory-phases]] — "Vglut2 = brake / contact sharp peak" 요약에 투사·호르몬 의존성 보강.
- [[stuber-2025-the-neurobiology-of-overeating]] — 같은 교신저자 과식 리뷰. LHb·VTA 투사 묶음 인용의 귀속 분리.
- [[jia-2026-novelty-exploration-activated-ensemble-in]] — LH^Glu→LHb/→VTA 표적별 기능 분기(통증 축). 같은 두 표적, 다른 부호.
- [[jennings-2015-visualizing-hypothalamic-network-dynamics]] — 같은 lab의 LH^Vgat 단일세포 원전. GABA 쪽 mosaic와 짝이 되는 glutamate 쪽 mosaic.
- [[morales-2017-ventral-tegmental-area-cellular-heterogeneity]] — VTA 하류 이질성(LH Glu → VTA non-TH → aversion). 본 논문의 VTA 투사 집단이 어느 VTA 세포를 때리는지는 미분해.
- [[concept-dynorphin-kappa-opioid]] — Pdyn⁺ VTA 투사 집단의 펩타이드 축.
- [[person-choi-hyung-jin]] — 사용자 lab hub.
- [[jennings-2013-the-inhibitory-circuit-architecture]] — 같은 lab 선행(Science 2013)이 **LHA^Vglut2를 단일 섭식 브레이크**로 정의했다: 광활성 → 굶긴 마우스 섭취·food zone 체류↓(F1,36=13.31 / 13.12, P<0.001)·장소 혐오, 광억제 → 포만 중 섭식 유발·기호식 선호. 또 BNST 억제성 입력이 이 Vglut2 집단을 선택 표적으로 삼는다(rabies F1,20=38.50, P<0.001). ⚠️ 본 논문은 그 Vglut2가 **투사 표적(LHb vs VTA)·전사체·호르몬 반응으로 갈린다**고 보므로, 2013년의 BNST 입력과 브레이크 효과가 어느 투사 집단의 것인지는 **미분해 상태**다(병기).
- [[mickelsen-2019-single-cell-transcriptomic-analysis-of]] — ⚠️ 본 논문의 **LHA^Vglut2 투사뉴런 내 Lepr⁺ subset**과 정면으로 맞물리는 census(Nat Neurosci 2019, Jackson lab). 그쪽 scRNA-seq는 **LHA^GABA 전반에서 Lepr·Mc4r을 거의 못 잡았고**(저검출로 귀속), Lepr-Cre;EYFP 단일세포 qPCR로 우회해 "Lepr 표지 LHA 뉴런의 대다수가 GABA 표현형"이라고 적는다. 즉 "Lepr=GABA 대다수"와 "Vglut2 투사뉴런 일부가 Lepr⁺"는 **검출감도 + Cre 계통 범위** 차이로 양립 가능하다(병기).
- [[leinninger-2009-leptin-acts-via-leptin]] — ⚠️ 본 논문이 **수정하는 통념의 1차 출처**(Cell Metab 2009, Myers lab). Leinninger는 `Gad1^EGFP`에서 **LHA의 pSTAT3-IR/LepRb 뉴런 전부가 GAD67⁺**이라고 보고해 "LH^LepR = GABAergic"을 확정했고, 그 LepRb 집단이 **VTA로 조밀 투사하되 선조체·NAc로는 투사하지 않음**을 보였다. 본 논문은 **LHA^Vglut2 투사 뉴런 일부에 *Lepr* mRNA가 있고 LHb 투사에서 유의하게 높다**(X²=121.67, p<0.0001), leptin이 LHb·VTA 투사 뉴런의 sucrose 반응을 **반대 부호로** 바꾼다(F(1,370)=63.99, p=1.6e-14)고 보고하므로 **소수 glutamatergic LepR 축**을 병기해야 한다(단백 pSTAT3 공존 vs mRNA 검출의 감도 차이). 또한 Leinninger의 VTA 투사 추적은 **dorsal perifornical LHA n=11**에 국한되므로, 본 논문의 **전측(LHb)·후측(VTA) 분기**와 좌표가 겹치는 범위도 한정적이다.
- [[harris-2005-a-role-for-lateral]] — ⚠️ **본 논문이 "혐오·고salience 우세"로 특징지은 LHA^Vglut2→VTA (Pdyn⁺/Hcrt⁺ = glutamatergic orexin) 집단을, 정반대로 "보상 추구 구동자"로 세운 원전**(Nature 2005, Harris & Aston-Jones). 거기서는 **orexin A 140 nM을 VTA에 직접 주입하는 것만으로 소거된 morphine 장소선호가 복원**되고(F(2,18)=11, P<0.01; VTA 주변부 주입은 무효), LH orexin 영역의 국소 활성화(rPP) 복원은 **OX1R 길항제로 완전 차단**된다. 두 서술은 **층위와 자극이 다르다** — 본 논문은 투사별 2-photon으로 **미각(sucrose·quinine) 섭취 반응**을, Harris는 **학습된 장소 cue에 대한 Fos와 펩타이드 약리**를 본다. 따라서 "orexin→VTA = 보상"이라는 단순 도식도, "LH^Vglut2→VTA = brake"라는 단순 도식도 쓸 수 없다(병기). 본 논문이 미검증으로 남긴 "**LHA^Pdyn/Hcrt→VTA 집단이 기록된 투사 집단과 기능적으로 동일한가**"가 이 긴장의 해소 지점이다.
- [[yamanaka-2003-hypothalamic-orexin-neurons-regulate]] — ⚠️ leptin 부호 긴장(Neuron 2003). Yamanaka는 **leptin이 orexin 뉴런을 과분극(7/9)**시킨다고 보고하지만, 본 논문은 Pdyn⁺/Hcrt⁺가 농축된 **LHA^Vglut2→VTA 집단의 sucrose 반응을 leptin이 키운다**(Interaction F(1,370)=63.99)고 본다. 측정 대상이 **안정막전위 vs 자극 유발 Ca²⁺ 반응**이고 그 집단이 동일 orexin 세포인지도 미검증이라 병기. ghrelin도 Yamanaka는 OX 흥분(6/9), 본 논문은 VTA 투사에 거의 무효(LHb 쪽만)로 층위가 다르다.
- [[linders-2022-stress-driven-potentiation-of-lateral]] — ⚠️ **같은 LHA^Vglut2→VTA 경로를 기능적으로 반대 방향으로 읽는 자료**(Nat Commun 2022, Meye·Adan lab). 본 논문은 VTA 투사 집단을 **후측 LHA·Pdyn/Hcrt⁺·혐오/고salience 우세**로 규정한다. 저쪽은 그 경로(좌표 AP −1.3~−1.6, 즉 후측과 겹침)의 **시냅스 강화가 기호성 지방 섭취를 늘린다**고 보고한다 — 사회 패배 후 AMPAR/NMDAR↑·rectification↑·GluA1 접촉↑, **mPFC 투사 VTA^DA에만** 국한(KS p=0.006), 20 Hz HFS는 과식을 만들고 1 Hz LFS는 막는다. 저자들도 본 논문을 인용해 "VTA 투사 LHA^glut의 일부가 orexin을 공방출한다"를 한계로 적으며, **어느 하위집단이 스트레스 가소성을 지는지는 양쪽 모두 미해결**이다(병기).
