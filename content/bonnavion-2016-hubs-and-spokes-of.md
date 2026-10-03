---
title: "Hubs and spokes of the lateral hypothalamus: cell types, circuits and behaviour (Bonnavion, Mickelsen et al. 2016, J Physiol)"
type: paper
created: 2026-10-03
updated: 2026-10-03
source: "raw/2016 The_Journal_of_Physiology. Hubs and spokes of the lateral hypothalamus cell types, circuits and behaviour.pdf"
authors: [Patricia Bonnavion, Laura E. Mickelsen, Akie Fujita, Luis de Lecea, Alexander C. Jackson]
year: 2016
journal: "The Journal of Physiology 594(22):6443–6462 (2016; online 2016-06-15; 접수 2016-01-16, 수정 후 채택 2016-05-31); doi:10.1113/JP271946 (Topical Review)"
---

> [!takeaway] 연구 방향 관점의 핵심
> **단일세포 전사체 이전 시대에 LHA 세포타입을 "세 개의 펩타이드 집단 + 넓은 GABA/Glu 배경"으로 정리한 분류 리뷰.** 세 집단은 ① Hcrt/Ox, ② MCH, ③ **LepRb·Nts·Gal·MC4R이 섞인 "세 번째" 집단**이다. 이 틀 위에 섭식·보상(Fig 3A), 수면·각성(Fig 3B), 스트레스(Fig 3C) 회로를 광유전 결과로 배치한다. 공동 제1저자 Mickelsen과 교신 Jackson(UConn)은 3년 뒤 이 분류 질문에 scRNA-seq로 답한 [[mickelsen-2019-single-cell-transcriptomic-analysis-of|Mickelsen 2019]]의 저자다. 공동 저자 de Lecea(Stanford)·Bonnavion은 hypocretin–leptin 길항을 보인 Bonnavion 2015(Nat Commun) 저자다. 그래서 이 리뷰는 **LH^LepR를 섭식 세포(leptin의 섭식 억제 매개)로만이 아니라 "leptin 감지 → Hcrt 억제 → HPA 진정" 노드로도 그린다.**
> 사용자 연구에 닿는 지점 세 곳. (1) **LH^LepR의 정체성 충돌**: 이 리뷰의 LepR는 leptin(포만 신호)이 켜서 Hcrt를 억제하는 GABA 집단이다(Hcrt의 30%가 LepR 접촉, 27.5%가 GABA_A IPSC). [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]·[[kim-2024-normative-framework-dissociates-need|Kim 2024]]의 LepR는 **배고픔(NPY 탈억제)이 켜서 seeking·섭취를 구동**하는 Motivation 노드다. 같은 마커의 두 얼굴을 하위집단 문제로 풀어야 한다. (2) **섭식과 분리된 스트레스 축**: ob/ob에서 LH^LepR 광활성은 corticosterone을 정상화했지만 **섭식량·체중은 바꾸지 않았다**(Bonnavion 2015). 저자들은 LepR를 **불안장애와 섭식장애(AN·폭식) 공존의 교차점**으로 지목했다. 이는 [[korotkova-2026-balancing-acts-lateral-hypothalamic|Korotkova 2026]] 계열의 10년 전 원형이다. (3) **각성 상태라는 숨은 변수**: Herrera 2016에서 LH^LepR 활성화는 수면→각성 전이를 **지연**시켰다. [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]]의 Motivation 출력을 해석할 때 수면·각성 게이팅을 통제 변수로 넣어야 한다.

# Hubs and spokes of the lateral hypothalamus (Bonnavion, Mickelsen et al. 2016)

- **저널**: The Journal of Physiology 594(22):6443–6462 (2016). Topical Review. DOI 10.1113/JP271946. 접수 2016-01-16, 수정 후 채택 2016-05-31, 온라인 2016-06-15.
- **저자·소속**: Patricia Bonnavion*(Université Libre de Bruxelles, Lab. of Neurophysiology; 전 de Lecea lab 박사후), Laura E. Mickelsen*·Akie Fujita(UConn Physiology & Neurobiology, **Alexander C. Jackson** lab 대학원생), Luis de Lecea(Stanford Psychiatry). *공동 제1저자. 교신 **A. C. Jackson**.
- **재정**: IBRO·NARSAD·Hilda and Preston Davis Foundation(P.B.), NIMH·NIA·Klarman(L.dL.), NIMH R00MH097792(A.C.J.). 이해상충 없음.
- **성격**: 1차 데이터가 없는 리뷰다. 단 Fig 3C의 스트레스 절은 저자들의 **Bonnavion 2015 Nat Commun** 결과를 직접 요약한다. 아래 수치는 모두 리뷰가 인용한 원전 값이다(위키에 원전 페이지가 없는 것은 "리뷰 경유"로 읽을 것).
- **제목의 은유**: LHA는 중추·말초 신호가 모이는 **hub**이고, 국소·장거리 출력(**spokes**)으로 적응 행동을 조율한다.

## 한 줄 요약
LHA 뉴런을 신경화학 표현형으로 세 갈래(Hcrt/Ox, MCH, LepRb/Nts/Gal/MC4R 혼합 집단)와 넓은 GABA·glutamate 집단으로 나누고, 각 집단의 공발현·전달물질 모호성을 정리한다. 이어 광·화학유전 연구를 섭식·보상, 수면·각성, 스트레스 세 축에 배치한 2016년 J Physiol 리뷰다. LH^LepR→Hcrt 억제가 leptin 의존적으로 HPA 스트레스 반응을 누른다는 저자들의 자료가 중심 사례로 들어 있다.

## 핵심 내용

### 서론 — "세포타입"을 무엇으로 정의할 것인가
- 저자들은 세포타입을 **분자 marker, 발생 이력, 세포간 신호 능력, 내재 전기생리, 형태, 국소·장거리 입출력 패턴의 합류점**으로 정의한다(Nelson 2006; Bota & Swanson 2007).
- 문제의식: Hcrt/Ox·MCH 같은 **단일 marker는 유전자 발현·연결성·회로 기능·행동 역할의 다양성을 설명하지 못한다.**
- **동적 정체성 경고**: 신경전달물질 전환(respecification, Spitzer 2015)이 발달·행동 상태·대사 상태에 따라 일어날 수 있다. 그렇다면 LHA 세포타입 경계는 상태에 따라 흐려진다. 저자들은 "조율된 유전자 발현 패턴"으로 집단을 정의해야 할 수 있다고 본다. (위키 연결, 원문 주장 아님: 이 제안은 같은 lab의 [[mickelsen-2019-single-cell-transcriptomic-analysis-of|Mickelsen 2019]] scRNA-seq로 이어졌다.)

### Figure 1 — LHA 세포타입 다양성: 세 개의 주요 펩타이드 집단
원문 Fig 1은 정량이 아닌 예시용 Venn 도식이다. Hcrt/Ox(Dyn·N/OFQ·amylin과 중첩), MCH(nesfatin·CART와 중첩), 그리고 LepRb·Nts·MC4R·CART·Gal이 겹치는 세 번째 집단을 그린다. 주변부에는 UCN3·TRH·Enk·TH·CRH·PV가 있다. GABA/glutamate 소속은 "논쟁 중"이라 도식에 넣지 않았다고 명시한다.

#### ① Hypocretin/Orexin 뉴런
| 항목 | 리뷰의 정리 |
|---|---|
| 위치 | LHA 고유, **perifornical(PeF)** 영역에 밀집 |
| 공발현 펩타이드 | **다수가 Dyn**(Chou 2001; Muschamp 2014). N/OFQ는 논쟁(공발현 vs 인접 비중첩). Gal은 소수 하위집단만 중첩(Hakansson 1999; Gal-EGFP에서는 재현 안 됨, Laque 2013). Nts는 상충(Furutani 2013 vs Leinninger 2011). **Iapp(amylin 전구체)** 공발현(Li 2015) |
| 빠른 전달물질 | 말단이 **VGLUT2** 공존, LC에서 비대칭(흥분성) 시냅스. 광유전 공동방출: **저주파 → glutamate**(TMN HA 뉴런, Schöne 2012), **고주파 → Hcrt 펩타이드 추가**(Schöne 2014) |
| GABA 가능성 | Hcrt 뉴런 **약 20%가 GABA 면역반응 양성이지만 VGAT는 없다**(Apergis-Schoute 2015). Hcrt 광활성 → 인접 **MCH 뉴런 발화 억제**. 이 IPSC는 glutamate 차단에 무반응, Hcrt 수용체 차단에 감쇠, **gabazine에 소실**된다 → 국소 GABA 중계 혹은 Hcrt 뉴런 자체 GABA 방출(단시냅스 조건 검증 필요) |
| 전사인자 | **Lhx9**(종간 specifier 후보), **Dbx1**(여러 orexigenic LHA 집단 공통) |
| 내부 이질성 | 전기생리 **D-type / H-type**(Schöne 2011), 콜린성 반응 차이, 내측 vs 외측 기능 이분(Harris & Aston-Jones 2006) ↔ 확산 투사(González 2012). 저자 결론: "monolithic하지 않을 것" |

#### ② MCH 뉴런
- Hcrt와 섞여 분포하지만 각기 다른 국소 분포를 보인다(Hahn & Swanson 2010). **nesfatin-1** 공발현. **약 50%가 CART 공발현**. Dbx1⁺·Lhx9⁻.
- **GABA 근거**: GAD65·GAD67 공존. rat에서 MCH-IR 뉴런 **대다수가 GAD67⁺**. 시상하부 CART 뉴런의 **약 67%가 GAD67 mRNA⁺**. LC의 MCH-IR 말단 중 **약 6%만 VGAT 공존**(del Cid-Pellitero & Jones 2012). 광활성 시 TMN HA 뉴런에 **GABA 방출**(Jego 2013).
- **Glutamate 근거**: 일부 MCH 뉴런이 VGLUT1·VGLUT2 발현. **외측중격(LS) 투사 MCH 뉴런은 VGLUT2⁺이고 광자극 시 GABA가 아니라 glutamate를 단시냅스 방출**(Chee 2015). 또 Vgat-Cre·Gad65-EGFP로 표지한 LHA GABA 뉴런은 **MCH-IR과 겹치지 않는다**(Chee 2015; Jennings 2015; Karnani 2013).
- 저자 해석: **표적 특이 신호(target-specific signalling)**의 가능성. MCH를 단순히 "GABAergic"으로 부를 수 없다.

#### ③ 세 번째 집단 — leptin 감수성 펩타이드 뉴런(LepRb/Nts/Gal/MC4R)
- **LepRb**: leptin이 BBB를 건너 LepRb에 결합하고 JAK–STAT 경로를 켠다. Lepr-Cre 계통(DeFalco 2001; Leshan 2006) 덕분에 세포 특이 조작이 가능해졌다.
- **공발현 수치**:
  - LHA LepRb의 **약 60%가 Nts⁺**, 반대로 LHA Nts의 **약 30%가 LepRb⁺**(Leinninger 2011).
  - **Nts–LepRb 집단의 95%가 Gal 공존**. 반면 LHA LepRb 중 Gal⁺는 **약 20–44%**(Laque 2013).
- **GABA 표현형**: Gad67-EGFP에서 leptin 유발 pSTAT3가 EGFP⁺ 세포에 나타난다(Leinninger 2009). Vgat-Cre에서도 pSTAT3-IR이 putative GABA 뉴런에 있다(Vong 2011; ARC·DMH와 유사). **반례**: GABA_A 차단제 존재 하에서 LHA Nts→VTA 광자극은 **glutamate를 방출**한다(Kempadoo 2013) → Nts 집단의 신경화학 다양성.
- **MC4R 하위집단**: Hcrt·MCH·nesfatin-1과 별개. MC4R⁺의 **약 75%가 Nts 공존**(LHA 고유 Nts–MC4R 집단). leptin 주사 후 MC4R 세포의 **약 80%가 pSTAT3⁺**. LHA LepRb의 **약 1/3만 MC4R 공발현**(Cui 2012). Nts–LepRb 세포는 **DR·VTA로 강하게 투사**하지만 MC4R–pSTAT3 세포는 **둘 다로 투사하지 않는다** → 별개 하위집단. MC4R 뉴런은 GAD67 공존(Liu 2003).
- **LepRb → Hcrt 국소 회로**:
  - Lepr-Cre trans-synaptic 추적: 국소 LHA LepRb가 **Hcrt/Ox 뉴런의 약 30%**와 직접 시냅스 접촉(Louis 2010).
  - LepRb 광자극 ex vivo: 동정된 Hcrt 뉴런의 **약 27.5%에서 GABA_A 매개 시냅스 입력**(Bonnavion 2015). → leptin·LepRb 활성 시 관찰되는 Hcrt 활동 억제의 기전.
  - **GABA 비의존 경로도 있다**: LepRb–Nts 집단이 Hcrt(MCH 아님)와 접촉(Leinninger 2011). leptin은 GABA 차단 하에서도 Hcrt를 과분극(Goforth 2014). Gal이 Hcrt를 억제하고 Gal 수용체 차단은 leptin 유발 Hcrt 억제를 막는다. **Nts 자체는 Hcrt에 흥분성**(Tsujino 2005; Furutani 2013)인데도 LHA Nts 화학유전 활성화는 Hcrt를 과분극 → 펩타이드 공동전달의 복잡성.

#### 넓은 LHA GABA 집단과 기타 집단
- GAD65·GAD67·VGAT를 가진 큰 GABA 집단이 있고 **Hcrt·MCH와 구별되는 GAD65⁺ 집단**이 전기 신호로 **4개 아형**으로 나뉜다(Karnani 2013). 국소 억제가 투사 뉴런을 조절한다는 glutamate-drop·transgenic 증거.
- 기타: **TRH**(juxtaparaventricular에서 Enk-IR 16%·UCN3-IR 42% 중첩; Horjales-Araujo 2014), **TH, QRFP, PV(소수 glutamatergic 집단)**. VGLUT2-Cre로 표지되는 기능적으로 중요한 glutamatergic 집단(Jennings 2013; Nieh 2015; Stamatakis 2016).

### Figure 2 — 장거리 연결성 (hub으로서의 LHA)
- 고전 병변/자극 결과를 먼저 요약: LHA **병변 → lateral hypothalamic syndrome**(hypophagia·adipsia·hypoactivity·체중감소 + somnolence·sensory neglect). LHA **전기자극 → 폭식·체중증가·자기자극(ICSS)**, "food motivation의 pacemaker"(Bernardis & Bellinger 1993).
- **입력(afferents)**: mPFC, 외측중격(LS), NAc, BNST, BLA, 외측고삐(LHb) / 중뇌·뇌간에서 중뇌수도주위회백질·VTA·DR·LC·외측팔곁핵(LPB).
- **출력(efferents)**: 전뇌(인지·정서)로 상행 + 각성·섭식·자율·신경내분비 핵으로 하행 + 강한 시상하부 내 투사. 많은 표적이 LHA로 되먹임.

### Figure 3A — 섭식과 보상
- **MCH계**: 뇌내(intracerebral) MCH 투여 → 섭식↑(Qu 1996), 과발현 → 비만(Ludwig 2001), 결손/세포제거 → 저식·마름(Shimada 1998; Alon & Friedman 2006). NAc shell에서 MCH는 섭식↑·cocaine 자가투여 조절. 설탕 보상의 선조체 DA 방출 조절([[domingos-2013-hypothalamic-melanin-concentrating-hormone|Domingos 2013]]). 단 **Jennings 2015는 LHA^GABA 광활성의 폭식·자기자극에서 MCH의 관여를 배제**했다.
- **Hcrt계**: 섭식 역할은 논쟁적(동기·각성 결핍의 2차 효과일 수 있음). 식이예측 각성 소실(Yamanaka 2003). VTA DA·GABA로 흥분성 투사. **LHA^Hcrt→VTA_DA에서 Hcrt와 Dyn이 공발현·공동방출되나 VTA_DA 흥분성에 반대 방향, 보상에도 반대**(Muschamp 2014). 보상·혐오 cue 단일단위 부호화(Hassani 2016).
- **LHA^GABA·LHA^Glu 회로**(핵심):
  - **BNST^GABA→LHA** 광자극 → 빠른 폭식·자기자극. BNST는 **LHA^Glu(VGLUT2⁺)**를 우선 접촉. LHA^Glu 광자극 → 섭식 억제, 광억제 → 섭식 촉진(Jennings 2013) → BNST가 **anorexigenic LHA^Glu를 직접 억제하고, 섭식을 개시하는 orexigenic 뉴런은 탈억제**(Stuber & Wise 2016).
  - **LHA^GABA(non-Hcrt·non-MCH, VGAT⁺) 광활성 → 섭식·자기자극↑**, 억제/제거 → 섭식↓. deep-brain Ca 영상으로 **appetitive(보상 획득 행동) vs consummatory(섭취) 2 하위군** 분리(Jennings 2015).
  - **NAc^D1R/GABA→LHA^GABA** 광활성 → 배고픈 동물에서도 섭식 급속 중단(O'Connor 2015). 같은 투사 자극이 cocaine-seeking은 강화(Larson 2015) → 맥락·표적 신경화학 의존.
  - **LHA→VTA**: DA·non-DA 모두 표적, 흥분·억제 혼재. sucrose-seeking에서 **Type 1(분배기에 위상 반응)·Type 2(분배기+자극, 예상외 보상 또는 예상된 보상의 부재에 민감)** 두 활동 패턴(Nieh 2015). **LHA^GABA→VTA**는 주파수 의존: **5–10 Hz → 섭식**, **40 Hz → 보상**(Barbano 2016).
  - **LHA^Glu→LHb**: 광억제 → 쾌락적 섭취↑, 활성 → 회피(Stamatakis 2016) → LHA가 섭식·보상을 **음성** 조절하는 경로.
  - **LHA^LepR/Nts/Gal**: Hcrt·mesolimbic DA 조절, leptin의 섭식 억제 매개. **LHA^Nts 화학유전 → VTA Nts↑ → NAc DA 연장·운동↑**(Patterson 2015). LHA^Nts는 VTA DA에 GABA보다 **2배 많은 시냅스**(Beier 2015). **LHA^Gal는 VTA로 투사하지 않는다**(Laque 2015). **LHA^Pdx1/GABA→PVN** 광자극 → 섭식 촉진(Wu 2015).

### Figure 3B — 수면·각성
- **MCH 뉴런**: 각성 중 침묵, NREM에 간헐, **REM에 최대 발화(3–12 Hz)**. 광활성이 **REM을 선택적으로 조절**. NREM 중 활성 → REM 전이 촉진, 고주파 → REM 연장(Jego 2013). 24 h 만성 활성 → NREM·REM 모두↑(Konadhode 2013). 세포제거 → NREM↓(REM 불변)(Tsunematsu 2014). 경로: **LHA^MCH/GABA→TMN_HA**(HA 억제 유지로 각성 지연)·**→MS**(septo-hippocampal θ 안정)·→뇌간 GABA(REM 억제자 차단).
- **Hcrt/Ox 뉴런**: 각성 중 활성(3–13 Hz), NREM·REM 침묵, **각성 개시 직전 발화**. 결핍 → narcolepsy(사람·동물). 광활성 → 수면→각성 전이·수면 분절(Adamantidis 2007), 기억 공고화 저해(Rolls 2011), HPA 교란(Bonnavion 2015). LC가 핵심 하류 효과기(Carter 2012). sleep-active POA GABA가 Hcrt를 억제(Saito 2013). → Hcrt = **행동 상태 안정성의 gatekeeper**.
- **LHA^GABA 각성 뉴런**: 수면 중 발화하는 non-Hcrt·non-MCH GABA 집단(Hassani 2010). **LHA^GABA→TRN^GABA** 광자극(NREM 중)이 **빠른 각성** 유발 — 1 Hz는 전이, 20 Hz는 TRN 발화까지 억제해 빠른 피질 각성(Herrera 2016). LC·PVT 투사로도 각성. **대조적으로 LHA^LepR(LHA^GABA 추정 하위집단) 광활성은 수면→각성 전이를 지연** → LHA^GABA 안에서도 각성 촉진 vs 수면 촉진이 갈린다. LHA^LepR/Gal은 LC_NA로 조밀 투사(Laque 2015, 기능 미검증).

### Figure 3C — 스트레스·불안 (저자들의 Bonnavion 2015)
- Hcrt계는 스트레스·불안·공황의 핵심 조절자. 신규/예측불가 자극·구속 스트레스에 Hcrt 발화↑(Mileykovskiy 2005; González 2016). 사람 공황/불안과 Hcrt 전달 상승 연관(Johnson 2010). Hcrt-1 수용체 결손 → 공포 freezing 손상·외측편도 활성↓, **LC_NA의 Hcrt-1R 복원이 cue 공포 정상화**(Soya 2013). LC 내 Hcrt 광활성이 편도 의존적으로 위협 기억 형성 강화(Sears 2013).
- **저자들의 인과 데이터(Bonnavion 2015)**: Hcrt 뉴런 in vivo 광자극 → **hypercorticosteronaemia(HPA↑)** + 심혈관 반응·수면 분절·freezing성 탐색 교란. PVN·PVT·LC·DR 경유로 추정.
  - **영양 상태 의존**: 식이 박탈이 Hcrt 의존 HPA 활성화를 증폭. **LHA 국소 leptin 주입이 Hcrt 활동을 둔화시키고, LHA^LepR 광활성도 같은 효과에 더해 corticosterone 방출과 스트레스 유발 Hcrt 활성화를 억제.**
  - **ob/ob 구제**: 내인성 hypercorticosteronaemia를 보이는 비만 leptin-결핍 마우스에서 **LHA^LepR 광활성이 corticosterone을 급성 정상화 — 섭식량·체중은 불변**(Bonnavion 2015).
  - LHA^LepR는 **PVN으로 직접 투사하지 않는다** → PVN 억제는 간접적(Hcrt 억제 경유 추정). **LHA^Pdx1/GABA→PVN 직접 투사**(Wu 2015)는 별개 집단일 가능성.
  - 저자 전망: LHA^LepR가 대사 상태에 따라 스트레스·각성·보상·섭식을 조율 → **불안장애와 섭식장애(AN·폭식) 공존의 교차점**(Kaye 2004).

### Concluding remarks
**시상하부**(LHA가 아니라 시상하부 전체)는 인간 뇌 부피의 약 **0.3%**(Hofman & Swaab 1992)에 불과하지만 생존에 필수적이다. opto·chemogenetics가 필요·충분성 자료를 더하고 있으나, 열린 질문은 그대로다 — LHA 기능 세포타입의 **총 분류(taxonomy)**, 국소·장거리 회로의 시냅스 조직, 네트워크 동역학의 행동 부호화, 발달·질병에서의 변화. 치료 표적(신경정신·중독·수면장애·비만)의 전망.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **LH^LepR 부호 논쟁의 "leptin 축" 뿌리**: 위키의 LH^LepR 섭식 부호 논쟁([[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]] 섭취↑ · [[siemian-2021-lateral-hypothalamic-lepr-neurons|Siemian 2021]] 무변 · de Vrind 2019·[[petzold-2023-complementary-lateral-hypothalamic-populations|Petzold 2023]] 섭취↓)에서, 이 리뷰는 **네 번째 좌표 = "leptin이 켜는 포만·항스트레스 축"**을 제공한다. LepR를 "배고픔 구동 Motivation"으로 보는 사용자 lab 틀과, "leptin 감지 → Hcrt 억제 → HPA 진정"으로 보는 de Lecea 틀은 **같은 marker의 서로 다른 하위집단·방향**일 수 있다. 검증: Lepr-Cre × (Nts/Gal/MC4R) 교차 × phase-isolated paradigm으로 seeking subset(사용자 lab)과 Hcrt-억제 subset(이 리뷰)이 분자적으로 분리되는지.
- **NMPU에 각성·HPA 축 추가**: [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]]는 Need·Motivation·Pleasure·Utility를 다루지만, 이 리뷰는 LHA가 **수면·각성 상태**와 **HPA 스트레스 축**을 동시에 조율함을 보인다. Motivation 출력을 측정·조작할 때 **각성 상태와 corticosterone**을 통제·공변량으로 넣어야 한다는 설계 근거.
- **섭식과 분리된 스트레스 구제**: ob/ob에서 LH^LepR 활성이 **섭식을 바꾸지 않고 corticosterone만 정상화**한 결과는, 비만·AN의 정서·섭식 분리 표현형을 겨냥한 회로 선택적 중재(DTx·전기약물)의 원리 제공. [[korotkova-2026-balancing-acts-lateral-hypothalamic|Korotkova 2026]]의 hunger×anxiety arbitration 틀의 10년 전 선구.
- **co-transmission이 Motivation 신호의 "주파수 코드"**: Barbano 2016(LHA^GABA→VTA, 5–10 Hz=섭식 / 40 Hz=보상)과 Schöne 2012/2014(Hcrt: 저주파 glutamate / 고주파 펩타이드)는 **발화 주파수가 공동방출 성분을 선택**함을 시사. NMPU의 Motivation 스칼라가 발화 주파수로 인코딩된다면, 같은 세포가 주파수에 따라 섭식 vs 보상을 낸다 — [[gordon-2026-lateral-hypothalamic-control-of|Gordon 2026]]의 GABA/Glu 비율 코드와 보완.

## ⚠️ 위키 내 충돌·긴장 (병기 — 덮어쓰지 않음)
- **LH^LepR의 "섭식 방향"** — 이 리뷰(그리고 [[leinninger-2009-leptin-acts-via-leptin|Leinninger 2009]]·[[leinninger-2011-leptin-action-via-neurotensin|Leinninger 2011]])는 LH^LepR를 **leptin이 켜서 섭식을 줄이고 Hcrt를 억제하는 GABA 노드**로 그린다. [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]·[[kim-2024-normative-framework-dissociates-need|Kim 2024]](사용자 lab)는 LH^LepR를 **배고픔(NPY 탈억제)이 켜서 seeking·섭취를 구동하는 Motivation 노드**로 본다. 모순이 아니라 **하위집단·조작 방식(leptin 약리 vs 세포 광유전)·phase 설계**의 차이로 병기. [[concept-lateral-hypothalamus]] 쟁점 절과 연결.
- **MCH의 전달물질 소속** — 이 리뷰는 MCH를 "대체로 GABAergic(GAD65/67⁺)이되 일부 VGLUT1/2⁺, LS 투사는 glutamate 방출"로 **혼합**으로 정리한다. [[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]]·[[chen-2025-the-integrated-function-of-the|Chen 2025]]는 MCH를 **glutamatergic(Vglut1·2) 행**에, [[concept-lateral-hypothalamus]] 표는 "Vglut1·2 또는 Gad67"로 적는다. [[wang-2021-expansion-assisted-iterative-fish-defines-lateral|Wang 2021]]은 **Pmch⁺의 92%+가 Gad1+Slc17a6 공발현**이라 분류가 GABA marker 선택(Gad1 vs Vgat)에 달렸다고 본다. 이 리뷰의 "LC VGAT 공존 6%" 수치가 그 긴장의 원 데이터 중 하나다.
- **"세 번째 집단" vs scRNA-seq 분류** — 이 리뷰의 LepRb/Nts/Gal/MC4R "혼합 집단" 도식은 **같은 lab의 후속** [[mickelsen-2019-single-cell-transcriptomic-analysis-of|Mickelsen 2019]]에서 정밀화된다. 2019 scRNA-seq는 **LHA^GABA에서 Lepr·Mc4r을 거의 못 잡고**(Lepr-Cre sc-qPCR로 우회), Nts⁺를 **70.8% GABA/29.2% Glut**, Nts⁺Cartpt⁺를 **18–19%**로 정량했다. 즉 2016 도식의 "LepRb·Nts·Gal·MC4R 대량 공발현"은 **해부·리포터 기반 서술**이고, 전사체 해상도에서는 비율이 다르다. 2016을 숫자로 인용할 때는 리포터·IHC 근거임을 명시.
- **MC4R⁺의 ~75%가 Nts** 서술 — [[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]]가 방향 주의와 함께 인용하는 "약 75%의 Mc4r 뉴런이 Nts 공발현"(Cui 2012)의 1차 리뷰 경유 출처가 이 논문이다. 'Nts의 75%가 MC4R'이 아님.
- **Hcrt의 GABA성** — 이 리뷰는 Hcrt 뉴런의 약 20%가 GABA-IR(VGAT⁻)이고 Hcrt→MCH 억제가 gabazine 민감이라는 Apergis-Schoute 2015를 소개한다. [[concept-orexin-neurons]]·[[mickelsen-2019-single-cell-transcriptomic-analysis-of|Mickelsen 2019]](Hcrt sc-qPCR에서 Slc32a1 4.0%)와 **대체로 정합**하나, "국소 GABA 중계 vs Hcrt 자체 방출"은 미해결로 병기.

## 관련 페이지
- [[mickelsen-2019-single-cell-transcriptomic-analysis-of]] — **같은 lab(Mickelsen·Jackson)의 직계 후속**. 이 리뷰가 던진 "LHA 세포타입 taxonomy" 질문에 scRNA-seq로 답한다. ⚠️ 세 번째 집단의 Lepr·Nts·Gal·MC4R 공발현 비율이 전사체 해상도에서 재정량됨(병기).
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — 사용자 lab LH 리뷰. 세포타입 표(Nts 80/20·Gal·Mc4r~75% Nts·Mch)의 상위 리뷰 계보. 분류 마커·방향 주의 공유.
- [[concept-lateral-hypothalamus]] — 개념 hub. 세 집단 분류·LH^LepR 부호 쟁점·MCH 전달물질 분류의 뿌리 중 하나.
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] — 사용자 lab LH^LepR 원저. ⚠️ LepR를 배고픔 구동 seeking 노드로 보는 틀과 이 리뷰의 leptin-포만·Hcrt억제 틀의 긴장(병기).
- [[kim-2024-normative-framework-dissociates-need]] · [[kim-2024-unified-theoretical-framework-underlying-regulation]] — NMPU의 Motivation 축. 이 리뷰의 각성·HPA 축을 통제 변수로 추가.
- [[leinninger-2009-leptin-acts-via-leptin]] · [[leinninger-2011-leptin-action-via-neurotensin]] — LH^LepR/Nts→VTA·Hcrt 억제 축의 1차 원전. 이 리뷰가 요약·종합한 Myers lab 계열 데이터.
- [[concept-orexin-neurons]] — Hcrt 뉴런 hub. D/H-type·Dyn·amylin 공발현·국소 GABA 억제·HPA·각성 gatekeeper 서술의 상위 리뷰.
- [[concept-leptin]] — leptin의 LH LepRb 작용. 이 리뷰의 leptin→Hcrt 억제·HPA 진정 축.
- [[concept-neurotensin]] — LH^Nts 세포타입. ⚠️ LepRb 60% Nts / Nts의 30% LepRb / Nts–LepRb 집단 95% Gal 수치(Leinninger 2011·Laque 2013)의 리뷰 경유 출처.
- [[concept-mc4r]] — LHA MC4R 집단. MC4R⁺의 ~75%가 Nts 공발현·leptin 감수성(Cui 2012).
- [[stuber-2016-lateral-hypothalamic-circuits-for]] — **동시기 자매 리뷰**(Nat Neurosci 2016, Stuber & Wise). 같은 광유전 결과(Jennings·Nieh·O'Connor·Barbano·Stamatakis)를 보상 중심으로 재배치. 함께 읽을 것.
- [[jennings-2015-visualizing-hypothalamic-network-dynamics]] · [[jennings-2013-the-inhibitory-circuit-architecture]] — 이 리뷰 Fig 3A의 핵심 LHA^GABA/Glu·BNST→LHA 원전.
- [[oconnor-2015-accumbal-d1r-neurons-projecting]] — NAc^D1R→LHA^GABA 섭식 중단 회로(Fig 3A).
- [[nieh-2016-inhibitory-input-from-the]] — LHA^GABA→VTA disinhibition 보상 회로.
- [[lee-2026-distinct-lateral-hypothalamic-gabaergic]] — LH^Vgat salience vs consumption ensemble. 이 리뷰의 "LHA^GABA appetitive/consummatory 2군"(Jennings 2015) 서술의 단일세포 후속.
- [[korotkova-2026-balancing-acts-lateral-hypothalamic]] — LH hunger×anxiety×social arbitration. 이 리뷰의 LepR–불안–섭식 교차점 지목의 현대 확장.
- [[concept-paraventricular-nucleus]] — LHA^Pdx1/GABA→PVN 섭식(Wu 2015)·HPA 간접 억제.
- [[concept-lateral-septum]] — MCH→LS glutamate 방출(Chee 2015)·LHA^MCH→MS REM θ 안정.
- [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal]] — ★ 이 리뷰가 전망으로 적은 **"LHA^LepR = 불안장애×섭식장애 교차점"** 에 10년 뒤 붙은 인과 데이터(Nat Neurosci 2025, Korotkova lab). LH^LepR는 anxiogenic 자극에 **흥분**하고(EPM open arm-excited 34%), 활성화는 불안을 줄이고 **anxiogenic 맥락에서만** 섭식 개시를 앞당기며, ABA 거식 모델의 과잉 running을 차단한다. Lepr⁺ 클러스터는 **anorexia nervosa 위험 유전자 Ebf1·Opcml**을 발현한다. 이 리뷰의 'ob/ob에서 LH^LepR 활성이 섭식을 바꾸지 않고 corticosterone만 정상화'(Bonnavion 2015)와 **같은 방향**(섭취량보다 정서·개시가 바뀜)이다. ⚠️ 단 이 리뷰의 **"leptin이 켜는 포만 노드"** 서술은 그 논문에서 검증되지 않았다 — ABA는 저렙틴 상태인데 효과가 유지되고, 저자들은 BNST·복측해마·PFC 같은 leptin 비의존 입력을 든다(병기).
- [[yamanaka-2003-hypothalamic-orexin-neurons-regulate]] — 본 리뷰가 Fig 3A에서 "Hcrt 소실 마우스는 food restriction에 따른 **food-anticipatory arousal**이 없다"로 인용한 1차 자료(Neuron 2003). ⚠️ 실제 설계는 **30–31 h 총 단식** 중의 각성(EEG/EMG, n=6)·탐색 운동(open field, n=5–6) 증가이고 **제한 급식 스케줄의 예측 활동(FAA)은 측정하지 않았다** — "단식 유발 각성 소실"로 정밀화해 병기. 같은 논문이 OX 뉴런의 포도당·leptin 억제와 ghrelin 흥분(해리 세포)을 처음 보였다.
- [[harris-2005-a-role-for-lateral]] — ★ 이 리뷰가 Hcrt 절 "내부 이질성" 행에서 **"내측 vs 외측 기능 이분(Harris & Aston-Jones 2006)"** 으로 인용한 그 이분법의 **1차 실험 근거**(Nature 2005). morphine·cocaine·food CPP 표현 중 **fornix 외측(LH) orexin 뉴런만** Fos가 48–52%로 오르고 선호와 **R=0.72–0.90** 비례하는데, **PFA·DMH orexin은 Fos 양성률 자체는 높아도(42–74%) 선호와 상관이 전혀 없다(P>0.20)**. 두 번째 축: **발바닥 전기충격은 DMH·PFA orexin만 켜고 LH orexin은 켜지 않는다**(Supplementary Table 1) → "PFA/DMH = 스트레스·각성, LH = 보상". 이 리뷰의 유보("확산 투사(González 2012) ↔ 이분법; orexin 집단은 monolithic하지 않을 것")가 바로 이 자료에 대한 평가다. ⚠️ 덧붙일 긴장: [[wang-2021-expansion-assisted-iterative-fish-defines-lateral|Wang 2021]]에서 Hcrt⁺는 **단일 하위구역(LHAhcrt-db)에 국한되고 Calb2⁺가 93%** 로 분자 이질성이 작다 — Harris의 LH/PFA/DMH 구분은 **fornix 기준 좌표 구획이지 분자 구획이 아님**을 명시해 인용할 것(병기).
- [[domingos-2013-hypothalamic-melanin-concentrating-hormone]] — 이 리뷰 Fig 3A "설탕 보상의 선조체 DA 방출 조절(Domingos 2013)"의 **1차 원전**(eLife 2013, Friedman lab). Pmch-CRE;ChR2를 sucralose 섭취와 짝지어 20 Hz로 자극하면 sucrose 선호가 82% → 20%로 역전되고 선조체 DA가 +69% 오른다. DT로 MCH를 제거하면 sucrose DA(+118%)와 Trpm5⁻/⁻ 영양 조건화가 사라진다. MCH 자극만으로는(물과 짝지으면) 보상이 아니다. ⚠️ 이 리뷰 Fig 3B는 MCH가 **각성 중 침묵·REM 최대 3–12 Hz**라고 정리한다. Domingos는 생체 내 기록 없이 **깨어 있는 섭취 중 20 Hz** 자극을 썼다. 생리적 발화 범위와의 차이를 병기한다.
- [[subramanian-2023-hypothalamic-melanin-concentrating-hormone-neurons]] — 이 리뷰 §MCH계(뇌내 MCH→섭식↑·MCHR-1 길항제→섭식↓ 약리 계열)에 **세포 수준 생리·인과**를 붙인 rat 원저(Nat Commun 2023, Kanoski lab). MCH promoter GCaMP6s(LHA MCH의 70.9±3.5% 표지)로 학습된 cue(CS+>CS−, P=0.0042)와 섭취(식사 초기 최대·누적 칼로리 R²=0.9299)에 모두 반응함을 보이고, MCH DREADDs 활성이 PIT·CPP·식사량·IG glucose flavor 학습을 키운다. ⚠️ 이 리뷰가 정리한 **"MCH 수용체 약리"와 "MCH 뉴런 조작"은 등치되지 않는다** — MCH-1R 결손 마우스는 glucose 기반 flavor-nutrient 조건화가 정상(Sclafani 2016)인데, 본 논문은 뉴런 활성이 그 학습을 증폭한다고 보고한다(MCH 뉴런의 다중 전달물질 가능성으로 설명 시도).
- [[de-vrind-2019-effects-of-gaba-and]] — 본 리뷰의 "세 번째 집단"(LepRb/Nts/Gal/MC4R)을 **통째로 hM3Dq로 켠** 인과 사례(Obesity 2019, Adan lab): 바닥 chow 섭취↓·운동↑·체온↑·3일 반복 체중↓. ⚠️ 본 리뷰가 그리는 "leptin이 켜는 LepRb → Hcrt 억제 → 각성·HPA 진정" 그림과 달리 그쪽 LepR 활성은 **운동과 체온을 올렸다** — Hcrt 억제만으로는 설명되지 않으므로 LepR 하위집단(Nts·Gal 공발현 축)과 각성 상태 변수를 분리해 읽어야 한다. ob/ob LepR 활성이 corticosterone만 정상화하고 섭식·체중은 바꾸지 않았다는 Bonnavion 2015과도 종말점이 갈린다(병기).
