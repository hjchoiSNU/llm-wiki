---
title: "Distinct lateral hypothalamic CaMKIIα neuronal populations regulate wakefulness and locomotor activity (Heiss 2024, PNAS)"
type: paper
created: 2026-10-03
updated: 2026-10-03
source: "raw/2024 PNAS Distinct lateral hypothalamic CaMKIIα neuronal populations regulate wakefulness and locomotor activity.pdf"
authors: [Jaime E. Heiss, Peng Zhong, Stephanie M. Lee, Akihiro Yamanaka, Thomas S. Kilduff]
year: 2024
journal: "PNAS 121(16):e2316150121 (2024-04-09; 접수 2023-09-19, 채택 2024-03-14); doi:10.1073/pnas.2316150121 (CC BY-NC-ND 4.0)"
---

> [!takeaway] 연구 방향 관점의 핵심
> **"각성"과 "움직임"을 LH 안에서 세포타입으로 쪼갠 논문. 그리고 동시에, LH에서 CaMKIIα promoter가 단일 세포타입을 집지 못한다는 반증을 스스로 제시한다.** AAV-CaMKIIα promoter로 LH 뉴런을 chemogenetic 활성화하면 **7시간 지속 각성 + 보행속도 +470%**가 나오고, 이 각성은 **dual orexin receptor antagonist(almorexant 200 mg/kg)로도 전혀 깎이지 않는다** — [[concept-orexin-neurons|orexin]]과 평행한 각성 경로다. 그런데 이 "CaMKIIα 집단"은 FISH로 **95.6%가 Camk2a⁺이면서도 약 79%는 Vglut2⁺, 20–33%는 Vgat⁺**인 **혼합 집단**이다. Gad2-Cre;FLEX-DTA로 LH 억제성 뉴런을 64.6% 지우면 **각성 증가는 그대로인데 보행속도 증가와 high-theta power 증가만 사라진다**. 즉 CaMKIIα 라벨 안에 **각성을 만드는 glutamatergic 성분**과 **운동(LMA)을 만드는 GABAergic 성분**이 따로 들어 있다.
> 사용자 연구에 닿는 지점: (1) **[[concept-need-motivation-pleasure-utility|NMPU]]의 Motivation을 "activational(각성·운동) vs directional(섭식 대상)"로 더 쪼갤 세포타입 근거** — [[salamone-2012-mysterious-motivational-functions-mesolimbic|Salamone]]의 activational 성분이 LH 안에서 두 갈래로 갈린다. (2) **마커·드라이버 감사(audit)의 교과서 사례** — 사용자 lab이 LH^LepR·LH^Vgat를 다룰 때 "AAV-CaMKIIα = glutamatergic"이라는 통념을 LH에서는 쓸 수 없다([[concept-neurotransmitter-cotransmission|마커 함정]]). (3) **[[lee-2023-lateral-hypothalamic-leptin-receptor|LH^LepR]]·[[sumarli-2026-multidimensional-control-of-ingestive-behavior|LH^Nts]]의 "각성·자발운동" 성분이 바로 이 CaMKIIα-GABA 성분일 수 있다**는 *연결 가설*. Nts⁺는 [[mickelsen-2019-single-cell-transcriptomic-analysis-of|Mickelsen 2019]]에서 70.8% GABA이고 Naganuma 2019에서 각성·체온을 올린다. (4) **에너지 소비 축** — 섭식 회로 조작의 체중 효과를 해석할 때 LMA(비운동성 활동열생성 포함)를 별도 세포타입이 조절한다는 것은 [[concept-weight-regain-defended-adiposity|방어된 지방량]] 논의에서 분리해야 할 변수다.

# Distinct lateral hypothalamic CaMKIIα neuronal populations regulate wakefulness and locomotor activity (Heiss et al. 2024)

- **저널**: PNAS 121(16):e2316150121. 2024-04-09 발행(접수 2023-09-19, 채택 2024-03-14). DOI: 10.1073/pnas.2316150121. PNAS Direct Submission, 담당 편집 **Joseph Takahashi**(UT Southwestern). CC BY-NC-ND 4.0.
- **소속·lab**: **Thomas S. Kilduff lab** — Center for Neuroscience, Biosciences Division, **SRI International**, Menlo Park, CA. 공동저자 **Akihiro Yamanaka**(Nagoya University, Research Institute of Environmental Medicine, Dept. of Neuroscience II; 현 CIBR 베이징)가 시약·분석도구 제공. Zhong은 현 Univ. of Nebraska Medical Center. 교신: thomas.kilduff@sri.com.
- **지원**: NIH R01NS077408, R01NS098813 (T.S.K.); KAKENHI 18H05124·18KK0223·18H02523 (A.Y.).
- **데이터**: National Sleep Research Resource(https://sleepdata.org) 공개 예정. MATLAB·Python 코드 GitHub 예정(논문에 구체 주소 없음).
- **배경 동기(중요)**: 저자들의 직전 논문 [Heiss, Yamanaka, Kilduff 2018 eNeuro]가 "LH에는 Hcrt와 **평행한** 각성 경로가 있다"를 보였고, Wang 2021(J Neurosci Res)이 LH glutamatergic 자극으로 6시간 각성을 보고했다. 문제는 glutamatergic 뉴런이 LH뿐 아니라 전 신경계에 널려 있어 **더 좁은 마커가 필요하다**는 것. 여기에 임상 동기가 붙는다 — 기면증 치료제 **GHB(sodium oxybate)가 CaMKIIα의 hub 영역에 선택적으로 결합**한다는 보고(Kilduff 2023 Sleep)가 나왔기 때문이다. 그래서 CaMKIIα를 후보 마커로 검증했다.

## 한 줄 요약
LH의 CaMKIIα promoter 표지 뉴런은 **wake-active**하고, 이들을 chemogenetic 활성화하면 **orexin 신호가 차단된 상태에서도 7시간 지속 각성**이 생긴다. 그러나 이 집단은 **~80% glutamatergic + ~20% GABAergic 혼합**이며, GABAergic 성분을 선택적으로 없애면 **각성은 유지되고 보행 운동(LMA)과 high-theta power만 사라진다** — LH 안에 각성 담당(glutamatergic)과 운동 담당(GABAergic) 두 CaMKIIα 아집단이 있다.

## 핵심 내용

### Fig. S1 — 선행 결과 재현: LH^Vglut2 자극은 6시간 각성을 만든다
- **대상·도구**: Vglut2-IRES-Cre 마우스 **n=8**, LH에 **AAV8-hSyn-DIO-hM3D(Gq)-mCherry 100 nL** (bregma 기준 AP −1.4, ML ±1.2, DV −5.0). 감염 범위는 **fornix 외측 ~ cerebral peduncle 내측** 대부분.
- **처치**: hM3Dq 작용제 **deschloroclozapine (DCZ) 0.3 mg/kg i.p.** vs saline, **ZT2**(수면 압력이 높은 시점), 교차설계(최소 1주 간격).
- **결과**: DCZ는 **거의 끊김 없는 각성 6시간**을 유발. treatment × time 상호작용 **F(11,77)=9.88, P<0.001, n=8** (two-way RM-ANOVA + Bonferroni). naive 마우스에서 DCZ 단독 효과는 없음.
- **EEG**: treatment × band 상호작용 **F(5,35)=7.32, P<0.001**. 각성 중 정규화 power가 **Hθ(8–10 Hz) 145%**, **Hγ(60–80 Hz) 180%**로 유의하게 증가. HθWP(각성 중 high-theta power) 상승이 수시간 지속(**F(11,77)=3.87, P<0.001**).
- **해석**: HθWP는 보행·탐색의 전기생리 지표(Vanderwolf 1969; Buzsáki 2002, 2013)다. EMG 상승과 함께 보면 이 각성에는 **LMA 증가가 동반**된다.

### Fig. 1 — LH^CaMKIIα 자극: orexin 수용체를 막아도 7시간 각성
- **도구(핵심)**: **transgenic Cre 라인이 아니라 AAV promoter**다. 야생형 C57BL/6J(8–12주령) LH에 **AAV8-CaMKIIα-HA-hM3D(Gq)-IRES-mCitrine 370 nL 양측**(**pia 기준** AP −1.4, ML ±1, DV −4.8).
- **처치 설계(2×2 교차, 전 마우스가 4조건 모두 수행, n=4)**: ZT4에 **almorexant(ALM) 200 mg/kg i.p.**(dual orexin receptor antagonist, SRI 합성) 또는 vehicle(HPMC) → 1시간 후 ZT5에 **CNO 3 mg/kg i.p.** 또는 saline. EEG/EMG는 ZT3–ZT12 연속 기록. CNO 투여 간 최소 1주.
- **각성량**: ALM–SAL은 ZT5·ZT9에 각성을 일시적으로 **감소**시켰다. 반면 CNO는 **ALM 존재 하에서도** 투여 후 **7시간** 각성을 증가시켰다. ZT5–ZT12 구간 %Wake의 treatment × time 상호작용 **F(24,72)=17.53, P<0.001, n=4**. **ALM–CNO와 VEH–CNO 사이에는 어떤 상태에서도 유의차가 없었다** → **Hcrt 신호 차단이 LH^CaMKIIα 유발 각성량을 전혀 바꾸지 못한다**.
- **Wake bout 분포(ZT5–ZT10)**: ALM–SAL에서는 각성의 대부분이 **2분 미만** bout. CNO 조건에서는 대부분이 **>64분** bout. 단, **64–240분 bin의 비중은 ALM–CNO에서 VEH–CNO보다 유의하게 높았다**(P<0.05, n=4) — VEH–CNO에서는 **>240분(4시간 초과) bout**이 여러 마리에서 나왔는데 **ALM이 그 4시간 초과 bout의 출현을 막았다**. 즉 orexin 차단은 각성 총량이 아니라 **초장시간 bout의 연속성**만 깎는다. (CNO 후 대부분 마우스에 수면 bout이 없어 수면 bout 통계는 수행하지 않았다.)
- **EEG power(ZT5–ZT8, baseline 정규화)**: treatment × band **F(15,45)=18.03, P<0.001, n=4**. VEH–CNO의 정규화 power는 VEH–SAL 대비 **Hθ 377%, Hγ 237%, Vhγ(90–200 Hz) 193%**. HθWP 시간경과 **F(24,72)=5.38, P<0.001**; ZT5–6에 VEH–CNO가 나머지 셋보다 유의하게 높았고, **ALM 존재 하에서도 CNO군이 SAL군보다 6시간 동안 높았다**.
- **비교 포인트**: 순수 glutamatergic(Vglut2) 자극의 HθWP 증가는 **145%**인데, CaMKIIα 자극은 **377%** — 저자들은 이 차이를 CaMKIIα 라벨에 **운동 유발 GABAergic 성분이 추가로 들어 있기 때문**이라고 해석한다(Discussion).

### Fig. 2 — LH^CaMKIIα 뉴런은 wake-active (microendoscopic Ca²⁺ imaging + EEG/EMG)
- **도구**: WT C57BL/6J **수컷 2 + 암컷 2 = 4마리**. **AAV9-CaMKII-GCaMP6f-WPRE 370 nL** (pia 기준 AP −1.4, ML −1.2, DV −4.7). 2주 후 EEG 두개골 나사 + 경부근 EMG + **0.5 mm GRIN lens** LH 위 삽입. 렌즈·전극 삽입 후 최소 2주 뒤 **nVista(Inscopix) 15 fps**로 freely-moving 기록.
- **기록 프로토콜**: ZT3–ZT5경 시작, **세션 120분**. 조직 과열 방지를 위해 **2분 imaging + 30초 rest** 교대. 프레임마다 TTL 펄스를 EEG와 함께 기록해 동기화.
- **상태 선호(한 마우스 56세포)**: **W 전용 16세포(28.6%)**, **W+REM 혼합 38세포(67.9%)**, REM 전용 1세포(1.8%), REM–NREM 혼합 1세포(1.8%). 즉 **~29%는 Wake에서 NREM·REM보다 유의하게 높고, 나머지 중 2개를 뺀 전부는 W와 REM이 NREM보다 높았다**. NREM 선호 세포는 사실상 없었다.
- **집단 평균(4마리 131세포; 각 세포의 NREM Z-score로 정규화)**: **Wake 6.45 ± 0.35**, **REM 2.72 ± 0.77**, **NREM 1.00 ± 0.09**. 세 상태 모두 서로 유의하게 다름(Bonferroni t, P<0.05; W n=131, NREM n=131, REM n=56). → **Wake에서 NREM 대비 평균 6배 이상**.
- **한정**: REM epoch이 너무 적었다 — **4마리 중 3마리는 120분 기록에서 REM epoch이 전혀 없었다**. 기록 길이는 implant 무게·장기 cell registration 등 기술적 한계로 제한되었다.

### Fig. 3 · Fig. S2 — ⭐ 분자 정체: 혼합 집단이다
이 절이 개념 hub의 핵심이다. 네 겹의 조직학으로 "CaMKIIα promoter가 LH에서 무엇을 집었나"를 감사했다.

**(a) Hcrt/orexin과 거의 겹치지 않는다 (Fig. 3A)**
- AAV8-CaMKIIα-HA-hM3D(Gq)-IRES-mCitrine 주입 마우스(Fig. 1과 동일 준비)를 4% PFA 관류, **30 µm 관상 절편**, 항-Hcrt 면역염색.
- 마우스당 평균 **987 ± 88개 Hcrt 뉴런**(총 **n=3,949 세포**) 중 **9.3 ± 0.5%만 hM3Dq⁺**(n=363 세포). hM3Dq-mCitrine 밀도가 매우 높은 영역에 Hcrt 세포가 있는데도 **겹침이 거의 없다**.

**(b) Histaminergic(TMN)과도 거의 겹치지 않는다 (Fig. 3B)**
- 항-**adenosine deaminase(ADA)** 항체(rabbit) + donkey anti-rabbit AF568로 tuberomammillary nucleus의 histaminergic 세포 계수.
- 마우스당 **95 ± 27개**(총 **378 세포**) 중 **6 ± 3%만 hM3Dq⁺**(n=25 세포).

**(c) 그러나 20%는 GABAergic이다 (Fig. 3C)**
- **Gad2-IRES-Cre;R26R-EYFP 마우스 3마리**(이 리포터는 억제성 뉴런의 >90%를 특이도·효율 >90%로 표지 — Taniguchi 2011)에 **AAV8-CaMKIIα-hM3D(Gq)-mCherry 100 nL 양측** 주입.
- chicken anti-GFP/AF488(억제성) + rabbit anti-RFP/AF568(전달)로 이중 계수. 마우스당 양측 주입부 주변 **4–5 절편**, 총 **n=2,486 transfected 세포**.
- **RFP⁺ 세포의 20.1 ± 0.7%가 Gad2⁺** → "소수지만 유의한 비율의 LH CaMKIIα 뉴런이 억제성"이다.

**(d) RNAscope FISH — promoter 자체는 Camk2a에 충실하지만 Camk2a⁺가 단일 전달물질 타입이 아니다 (Fig. S2)**
- 동기: Veres 2023(eNeuro)이 **CaMKIIα promoter가 CaMKIIα 단백질이 없는 피질 interneuron에서도 transgene을 구동**한다고 보고했다(He 2021 RNAscope, Liu & Jones 1996, Sik 1998 면역표지와 대조). 즉 promoter 특이도 자체가 의심받았다.
- 검증: 3마리에서 **mCherry⁺ 934세포**를 계수 → **95.6 ± 0.4%가 Camk2a mRNA 공발현**(Fig. S2 상단). **promoter는 LH에서 Camk2a에 충실하다.**
- 그런데 같은 mCherry 집단을 전달물질 marker로 나누면 **두 아집단**이 나온다:
  - **Vglut2(Slc17a6)⁺: 708 mCherry 세포 중 78.7 ± 3.7%** (Fig. S2 중단)
  - **Vgat(Slc32a1)⁺: 613 mCherry 세포 중 33 ± 2.2%** (Fig. S2 하단)
- 저자들은 이 비율이 "Gad2 promoter를 Vgat의 proxy, Gad2 부재를 Vglut2의 proxy로 본" IHC 결과(20.1%)와 **유사하다**고 적는다. ⚠️ 단 **78.7 + 33 = 111.7%**로 100%를 넘는다 — 서로 다른 절편·세포 집합에서 센 수치이거나 일부 세포가 두 marker를 **공발현**한다는 뜻이지만, **원문은 이 초과분을 설명하지 않는다**(위키 주석).
- Discussion의 저자 요약: "거의 모든 hM3Dq-mCherry 세포(95.6 ± 0.4%)가 *Camk2a* RNA를 공발현했고, **CaMKIIα promoter로 표지된 세포의 약 20–30%가 GABAergic**이었다."

**(e) 종합 — CaMKIIα는 "세포타입"이 아니라 "농축 마커"다**
- 최종 정식화: **glutamatergic wake-promoting 집단 ~80% + GABAergic 집단 ~20%**.
- 저자들의 자기 한정(Discussion 마지막): "향후 연구는 **CaMKIIα보다 더 특이적인** 이 glutamatergic wake-promoting 뉴런의 분자 마커와 입력 동정에 집중할 것이다." 또 "[[mickelsen-2019-single-cell-transcriptomic-analysis-of|지금까지 LH에서 최소 15개 GABAergic 집단]]이 동정되었으므로 평가할 후보 세포타입이 여럿 있다."
- **해부학적 범위(subregion)**: 주입 좌표는 **AP −1.4 / ML ±1.0–1.2 / DV −4.7~−4.8 (pia 기준)** — perifornical ~ tuberal LH. Vglut2 대조군의 감염 범위는 **fornix 외측 ~ cerebral peduncle 내측**이고, 저자들은 각성 효과를 "**fornix와 optic tract 사이에 있는 glutamatergic 뉴런**"에 귀속시킨다. Histaminergic 계수는 **TMN**에서 이루어졌다(바이러스 확산이 TMN 근방까지 평가되었음).

### Fig. 4 · Fig. S3–S5 — GABAergic 뉴런을 지우면 각성은 남고 운동만 사라진다
- **전략**: Gad2-IRES-Cre;R26R-EYFP(**TG, n=10**)와 WT 형제(**n=9**) LH에 **AAV8-CaMKIIα-hM3D(Gq)-mCherry + AAV-CMV-FLEX-mCherry/DTA(Sr10) 50:50 혼합 100 nL** 공주입(AP −1.4, ML −1.2, DV −4.7 from pia). TG에서만 Cre 의존적으로 **Diphtheria Toxin A**가 발현되어 국소 GABAergic 뉴런이 소실되고, hM3Dq는 양 계통 모두에서 CaMKIIα 뉴런에 발현된다.
- **절제 효율(Fig. S3)**: 주입부 주변 억제성 뉴런 밀도가 **800 cells/mm² → 285.35 cells/mm²**, 즉 **64.6% 감소**. (100% 절제가 아니다 — 아래 해석의 한정 조건.)
- **수면/각성(Fig. 4A)**: 공주입 ≥8주 후 ZT5에 CNO 3 mg/kg 또는 SAL, ZT4–ZT12 EEG/EMG. CNO는 **TG와 WT에서 동일한 양의 각성**을 유발했고, **어느 시간대에도 %Wake 유의차가 없었다**. → **LH 억제성 뉴런은 LH^CaMKIIα 유발 각성에 필요하지 않다.**
- **EEG(Fig. 4B–D)**: 반대로 유전형 효과가 강했다. TG에서는 CNO 후 **Hθ와 Hγ 증가가 모두 소멸**했다(WT에서는 유지).
- **보행 속도(Fig. 4E–F; Vium Smart Housing 비디오/스트리밍 추적, 10분 bin, ZT5–ZT10 평균, 주입 ≥6주 후)**:
  - **WT: 7.7 ± 0.6 → 36.2 ± 3.6 cm/s (+470%)**, Bonferroni paired t, **P = 7.75 × 10⁻⁶, n=9**
  - **TG: 8.3 ± 0.6 → 22.2 ± 2.1 cm/s (+269%)**, Bonferroni paired t, **P = 1.13 × 10⁻⁵, n=10**
  - CNO 유발 속도의 **유전형 간 차이: Bonferroni unpaired t, P = 7.98 × 10⁻⁴** → GABAergic 절제가 CNO 유발 LMA 증가를 **둔화**시켰다(없애지는 않았다).
- **자발 LMA(Fig. S4)**: 교란 없는 24시간 기록에서 **활동기 보행 속도가 절제 TG에서 WT보다 68% 낮았다**(unpaired t, **P = 0.047**, n=9 vs 10).
- **자발 수면 구조(Fig. S5)**: 같은 24시간 WT(n=9) vs TG(n=10) 비교에서 **어떤 수면 상태의 시간별 %나 bout duration에도 차이가 없었다**. 유일한 차이는 **HθWP 감소**였다.
- **행동 정상성**: 두 계통 모두 자발 활동기와 CNO 유발 과활동기(투여 후 30–120분, ZT6–8) 영상에서 상대적으로 정상 표현형을 보였다(Movies S1–S8).
- **결론**: LH 억제성 뉴런은 **활동기 LMA와 그에 수반되는 HθWP에 필요**하지만 **각성 자체의 경로에는 기여하지 않는다**.

### Discussion — 저자들의 주장과 자기 한정
- **두 아집단 모델**: (i) **glutamatergic ~80%** — Hcrt 비의존 지속 각성 담당. (ii) **GABAergic ~20%** — LMA와 HθWP 담당, 수면 구조에는 무관.
- **Hcrt 기여 배제 근거 두 가지**: Hcrt 세포의 **<10%만 전달**되었고, 각성 효과가 **ALM(dual OXR 길항) 존재 하에서도 그대로**였다.
- **MCH에 대한 서술(직접 측정은 없음, Discussion 인용만)**: MCH 뉴런은 오래 GABAergic으로 여겨졌다(Moragues 2003; Elias 2001). Mickelsen 2017에 따르면 **MCH 세포의 ~98%가 *Gad1*, 21%가 *Gad2*를 발현하지만 *Slc32a1*(Vgat)은 어떤 MCH 뉴런에서도 검출되지 않았다** → MCH의 GABA 방출 자체가 의문이다. 반대로 **거의 모든 MCH 세포가 *Slc17a6*(Vglut2)을 발현**하고 적어도 일부는 glutamatergic이다(Chee 2015; Schneeberger 2018). 저자들은 "CaMKIIα 억제성 뉴런의 다른 신경화학 마커 동정이 큰 관심사"라고 적은 직후 이 MCH 논의를 둔다 — 즉 **MCH를 후보로 암시하되 공표지 데이터는 제시하지 않는다**(위키 주석: 이 논문은 MCH 면역염색을 하지 않았다).
- **Hcrt의 전달물질 정체**: Hcrt 뉴런은 glutamatergic이고(Torrealba 2003) 전부 *Slc17a6*⁺이지만, Mickelsen 2017에서 **56%가 *Gad1*, 16%가 *Gad2*를 발현**했다. 단 **Vgat mRNA는 Hcrt 뉴런의 1.5%에서만** 발견되었다 → Gad 발현이 GABA 방출을 뜻하지 않는다.
- **Venner 2016(Curr Biol)과의 정면 불일치**: Venner 등은 ventral LH에 **wake-promoting GABAergic 집단**이 있다고 보고했다. 이 논문의 GABAergic 절제는 LMA를 줄였지만 **수면 구조를 전혀 바꾸지 않았다** → 모순이다. 저자들이 제시한 세 가지 설명: ① Gad2-IRES-Cre가 억제성 뉴런의 >90%를 잡지만 Venner의 세포가 나머지 **10%**에 속하고 **CaMKIIα 음성**일 수 있다. ② FLEX-DTA 주입 부피가 해당 집단과 완전히 겹치지 않았고 절제가 **100%가 아니었다**(64.6%) — 남은 세포로 수면 기능이 유지될 수 있다. ③ **Venner 쪽의 각성 증가가 LMA 증가의 2차 결과**일 수 있다(그들도 CNO 후 큰 Hθ 증가를 보고했다) → "LH 억제성 뉴런이 수면/각성 조절에 관여한다"는 통념 자체에 대한 도전.
- **평행 각성 경로의 정체 확정**: Heiss 2018(eNeuro)에서 기술한 Hcrt 비의존 평행 각성 경로는 Wang 2021의 glutamatergic 뉴런이 매개할 가능성이 높고, 그 집단은 CaMKIIα 집단과 **부분적으로 겹친다**.
- **다음 단계로 제시한 것**: CaMKIIα보다 특이적인 마커 동정, 입력 회로 추적, 그리고 **loss-of-function** — 이 뉴런을 억제하면 von Economo(1930)가 기술한 고전적 혼수(lethargy)가 재현되는지.
- **Perspective(임상)**: Hcrt 없이도 지속 각성을 만든다는 점은 **기면증의 핵심 증상(각성 유지 불능)** 치료 표적으로서 의미가 있다. hypersomnia·과도한 주간 졸림 전반으로 확장 가능.

### 방법 메모 (재현용 — 특히 EEG/EMG 수면 채점)
- **동물**: C57BL/6J (JAX:000664), Vglut2-IRES-Cre (JAX:016963), Gad2-IRES-Cre (JAX:010802), R26R-EYFP (JAX:006148). SRI International에서 번식. **24 ± 2 °C, 상대습도 50 ± 20%**, 먹이·물 자유, **12:12 명암**, 암기 handling을 위해 **dim red light(<2 lx) 상시 점등**. 성체(>8주) 암수 모두. SRI IACUC 승인.
- **각성 전 준비**: 실험 ≥5일 전부터 commutator(Pinnacle) tether에 연결해 순화. 투여 절차 순화를 위해 서로 다른 날 **saline i.p. 3회**. 실험은 전극 삽입 **≥21일** 후. 모든 마우스가 투여 전 **교란 없는 24시간 baseline** 기록.
- **기록 장비**: TDT **RZ2** + 96채널 **PZ2** 증폭기 + 저임피던스 **RA16LI-D** headstage. **800 Hz 수집**, 디지털 band-pass **0.5–300 Hz**.
- **채점**: **4초 epoch**을 **육안으로** W / NREM / REM 분류(Morairty 2013, Dittrich 2015, Heiss 2018 기준). **bout = 동일 상태 연속 2 epoch(=8초)** — bout duration 해상도를 높이려 최소 bout을 짧게 잡았다.
- **정량 EEG**: artifact 없는 각 4초 epoch에서 FFT 제곱진폭으로 power spectrum 계산. 밴드: **δ 0.5–4 / Lθ 4–8 / Hθ 8–10 / Lγ 15–50 / Hγ 60–80 / Vhγ 90–200 Hz**. **60 Hz artifact 처리**: 60 ± 1 Hz와 고조파 120·180 Hz의 power를 59/61, 119/121, 179/181 Hz 값의 **선형 보간으로 대체**. **정규화 Wake power = (각성 중 평균 power) ÷ (baseline 기록의 동일 시각대 각성 중 평균 power)**.
- **약물**: DCZ(Hellobio HB8555) 0.3 mg/kg i.p., 0.03 mg/mL saline. CNO(Tocris 4936) 3 mg/kg i.p., 0.5 mg/mL saline. **ALM 200 mg/kg i.p.**, vehicle = 1.25% HPMC + 0.1% dioctyl sodium sulfosuccinate + 0.25% methyl cellulose(30 mg/mL를 2시간 vortex). 투여 세션 간 ≥4일, CNO 간 ≥7일. 기록은 투여 1시간 전 시작, ZT12까지.
- **LMA**: **Vium Smart Housing**(Vium Inc., San Mateo CA)으로 홈케이지에서 호흡률·보행을 연속 스트리밍(Baran 2021). **10분 bin** csv로 내보내 Python 커스텀 스크립트로 처리.
- **통계**: two-way RM-ANOVA (SigmaPlot) + Bonferroni 보정 post hoc t. 단일 요인은 MATLAB `anova1` + Tukey(Bonferroni 보정). 두 집단 두 요인은 불균형 two-way ANOVA(`anovan`). 분포 동일성은 **two-sample Kolmogorov–Smirnov**(`kstest2`) + Bonferroni. **암수 결과가 유사해 성별을 합쳐 분석**했다.
- ⚠️ **CNO 자체의 off-target 가능성**(Gomez 2017: CNO→clozapine 전환)은 저자들도 인정하며, "이 농도·이 시각에서는 WT 각성에 영향이 없었다"는 선행(Heiss 2018)으로 방어한다. 또 chemogenetics 실험의 **n=4**(Fig. 1)는 작다.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **NMPU의 Motivation을 "activational"과 "directional"로 쪼개는 세포타입 근거**. [[kim-2024-normative-framework-dissociates-need|Kim 2024]]의 B = M − K 틀에서 이 논문은 **M의 출력단이 단일하지 않음**을 보여 준다: 같은 CaMKIIα 라벨 안에서 **각성 상태(state)** 와 **운동 출력(vigor/locomotion)** 이 다른 전달물질 아집단에 실린다. [[salamone-2012-mysterious-motivational-functions-mesolimbic|Salamone 2012]]의 activational 성분을 LH 수준에서 **"각성 성분(glutamatergic)"과 "운동 성분(GABAergic)"으로 재분해**하는 *연결 가설*을 세울 수 있다. 검증: 사용자 lab의 [[lee-2023-lateral-hypothalamic-leptin-receptor|LH^LepR]] photometry 과제에 EEG/EMG를 붙여 seeking 구간의 각성 상태와 approach 속도가 **해리되는지** 본다.
- **"AAV-CaMKIIα = excitatory"를 LH에서는 쓸 수 없다 — 사용자 lab 도구 감사 항목**. 피질에서 통용되는 이 전제가 LH에서는 **20–33% GABAergic 오염**을 뜻한다([[concept-neurotransmitter-cotransmission|마커 함정]]). LH에서 CaMKIIα promoter AAV로 얻은 섭식·보상 결과는 **LH^Vgat 성분의 기여를 배제하지 못한다**. 사용자 lab이 LH 조작 논문을 평가할 때의 체크리스트 항목으로 쓸 수 있다: ① transgenic line인가 AAV promoter인가, ② promoter 충실도(Camk2a 공발현)와 **전달물질 구성**을 따로 보고했는가.
- **LH^Nts가 CaMKIIα-GABA/LMA 성분의 분자 정체 후보다**. [[sumarli-2026-multidimensional-control-of-ingestive-behavior|Sumarli 2026]]의 LH^Nts는 **총 섭식은 바꾸지 않고 licking 운동량·각성·자발적 운동·novelty seeking**을 조율한다. [[mickelsen-2019-single-cell-transcriptomic-analysis-of|Mickelsen 2019]]에서 Nts⁺는 **70.8% GABA**이고, 이 논문이 인용하는 Naganuma 2019(PLoS Biol)는 **LH neurotensin 뉴런이 각성과 고체온을 촉진**한다고 보고했다. → "CaMKIIα⁺/Vgat⁺/Nts⁺ = LMA 담당 아집단"이라는 검증 가능한 *연결 가설*. Nts-Cre × CaMKIIα promoter 교차 표지로 바로 셀 수 있다. [[concept-neurotensin]]·[[petzold-2023-complementary-lateral-hypothalamic-populations|Petzold 2023]] 참조.
- **섭식 회로 조작의 체중 효과에서 LMA를 분리해야 한다**. 활동기 보행 속도가 **GABAergic 절제만으로 68% 감소**하는데 수면 구조는 멀쩡하다는 결과는, LH 조작이 섭취량과 **독립적으로 에너지 소비 축**을 건드릴 수 있음을 뜻한다. [[concept-weight-regain-defended-adiposity|방어된 지방량]] 논의와 GLP-1RA 체중 효과 해석에서 **활동량 변화를 공변량으로 측정**해야 한다는 실무적 함의다.
- **각성이 섭식 표현형의 교란변수다**. [[stuber-2016-lateral-hypothalamic-circuits-for|Stuber 2016]]은 "Orx의 섭식 표현형이 특정 각성 상태의 행동 패턴일 수 있다"고 가설했다. 이 논문은 그 각성 축을 **Hcrt 없이도** 켤 수 있음을 보였으므로, LH 조작 실험에서 **섭취량 변화가 각성·활동 증가의 2차 결과인지**를 분리하는 설계(동일 조작에서 EEG + food intake 동시 측정)가 필요하다. [[concept-appetitive-consummatory-phases]]와 연결된다.
- **임상 다리: GHB·기면증 → 대사**. CaMKIIα hub에 결합하는 GHB(sodium oxybate)가 기면증에 효과가 있다는 사실과 이 논문의 CaMKIIα 각성 집단을 이으면, **CaMKIIα를 표적으로 각성·활동을 올리는 약물**이 과도한 주간 졸림뿐 아니라 **비만·T2D의 활동 저하**([[mehrhof-2026-computational-phenotyping-of-effort|Mehrhof 2026]]의 effort 수용 편향 저하)에도 쓸 수 있는지 묻게 된다. 원문은 대사 적응증을 언급하지 않는다.
- **[[concept-interoception|내수용]]·need 신호는 이 논문에 없다**. LH^CaMKIIα 뉴런의 활동이 **배고픔·단식·혈당에 따라 달라지는지**를 측정하지 않았다 — [[yamanaka-2003-hypothalamic-orexin-neurons-regulate|Yamanaka 2003]]이 orexin에 대해 한 작업의 CaMKIIα 버전이 비어 있다. 사용자 lab이 바로 채울 수 있는 틈이다(단식 × LH^CaMKIIα Ca²⁺ imaging).

## ⚠️ 위키 내 충돌·긴장 (병기 — 덮어쓰지 않음)
- **"LH의 주 각성 세포 = orexin"인가 — [[concept-orexin-neurons]] · [[yamanaka-2003-hypothalamic-orexin-neurons-regulate]] · [[bonnavion-2016-hubs-and-spokes-of]]**: 이 논문은 서두에서 **"Hcrt 뉴런은 24시간 총 수면·각성 시간에 거의 영향이 없다"**고 단언하고, ALM 200 mg/kg로 OXR을 막아도 LH^CaMKIIα 유발 각성이 **전혀 줄지 않음**을 보인다(ALM–CNO vs VEH–CNO 유의차 없음). 반면 Yamanaka 2003은 orexin 뉴런이 **단식 유발 각성·탐색에 필수**라고 보고했다(orexin/ataxin-3 마우스에서 소실). ⚠️ **층위가 다르므로 병기한다**: 이 논문은 **chemogenetic 최대 자극 하 각성 총량**을, Yamanaka는 **대사 상태 변화에 따른 생리적 각성 조절**을 측정했다. "orexin은 각성의 **상태 의존적 안정화·조절자**이고, LH^CaMKIIα glutamatergic 집단은 **각성 총량을 밀어올리는 평행 경로**"로 적는 것이 두 결과 모두와 정합한다. 단 ALM–CNO에서 **>240분 초장시간 bout만 사라졌다**는 Fig. 1B 결과는 orexin이 bout **연속성**에 기여함을 시사한다 — "orexin = flip-flop stabilizer"(Saper 2005) 가설과 오히려 부합한다.
- **"LH 억제성 뉴런은 각성을 촉진한다"는 서술 — [[concept-lateral-hypothalamus]] · [[de-vrind-2019-effects-of-gaba-and]] · [[leinninger-2009-leptin-acts-via-leptin]]**: 위키에서 Venner 2016(ventral LH wake-promoting GABA)·Herrera 2016은 LH GABA의 각성 촉진 근거로 인용된다. 이 논문의 **Gad2-Cre;FLEX-DTA 64.6% 절제는 24시간 수면 구조를 전혀 바꾸지 않았고**(Fig. S5), CaMKIIα 자극 유발 각성도 그대로였다(Fig. 4A). 저자들은 세 가지 해석을 병기한다(Gad2-Cre가 못 잡는 10%, 불완전·비중첩 절제, **Venner의 각성 증가가 LMA 증가의 2차 결과**). ⚠️ 어느 쪽도 결론이 아니다. 위키에는 "LH GABA의 각성 역할은 **쟁점**이며, 적어도 Gad2⁺·CaMKIIα⁺ 교집합은 **수면 구조가 아니라 LMA**를 조절한다"로 병기해 둔다.
- **LH 세포타입을 "전달물질 축"으로 나눌 수 있는가 — [[mickelsen-2019-single-cell-transcriptomic-analysis-of]] · [[concept-hypomap]] · [[concept-neurotransmitter-cotransmission]]**: Mickelsen 2019는 LHA를 **GABAergic 15 + glutamatergic 15 클러스터**로 census했고, 위키는 이를 LH 세포타입 서술의 밑바탕으로 쓴다. 이 논문의 CaMKIIα 라벨은 그 census의 **어느 클러스터에도 대응하지 않는다** — *Camk2a*는 여러 glutamatergic 클러스터에 걸쳐 발현되는 **농축 마커**다. ⚠️ 따라서 "LH^CaMKIIα 뉴런"을 위키에서 **세포타입처럼 적지 않는다**. 또 이 논문의 FISH에서 Vglut2 78.7% + Vgat 33% = **111.7%**로 100%를 넘는데 원문이 설명하지 않으므로, "~80% glut / ~20–33% GABA(집계 방식에 따라 다름)"로 **범위로** 병기한다.
- **MCH는 GABAergic인가 — [[domingos-2013-hypothalamic-melanin-concentrating-hormone]] · [[subramanian-2023-hypothalamic-melanin-concentrating-hormone-neurons]]**: 이 논문 Discussion은 MCH 세포의 **~98%가 *Gad1*, 21%가 *Gad2*를 발현하지만 *Slc32a1*(Vgat)은 어떤 MCH 뉴런에서도 검출되지 않았고**, 거의 전부가 *Slc17a6*(Vglut2)⁺이라고 인용한다(Mickelsen 2017 eNeuro). ⚠️ "MCH = GABA 뉴런"이라는 통상 서술은 **GABA 합성효소 발현을 GABA 방출로 오독**한 결과일 수 있다. 다만 **이 논문은 MCH 공표지를 직접 측정하지 않았다** — MCH가 CaMKIIα-GABA 아집단의 정체인지는 **미검증**이며, 저자들도 암시만 한다. 또 MCH 뉴런은 REM·수면 촉진으로 알려져 있어, 이 논문의 "CaMKIIα 집단은 wake-active, NREM 선호 세포 거의 없음"(Fig. 2)과도 **잘 맞지 않는다** → MCH 후보 가설에 대한 반대 증거로 병기한다.
- **Hcrt 뉴런의 전달물질 — [[concept-orexin-neurons]] · [[concept-neurotransmitter-cotransmission]]**: Mickelsen 2017 인용에 따르면 Hcrt 뉴런의 **56%가 *Gad1*, 16%가 *Gad2*** 를 발현하지만 **Vgat mRNA는 1.5%뿐**이다. 위키에서 "Hcrt = glutamatergic"으로만 적은 곳이 있다면 이 수치를 병기해 두는 것이 안전하다(저자들도 "GABA 방출 가능성을 시사할 수 있으나 Vgat가 거의 없다"고 양쪽을 적는다).
- **LH GABA = 섭식·보상 engine이라는 틀 — [[lee-2026-distinct-lateral-hypothalamic-gabaergic]] · [[lee-2023-lateral-hypothalamic-leptin-receptor]] · [[stuber-2016-lateral-hypothalamic-circuits-for]]**: 위키의 LH^Vgat 서술은 섭식·보상·motivational salience 중심이다. 이 논문은 같은 Gad2⁺ 집단(의 CaMKIIα⁺ 부분)을 **보행 운동·HθWP** 쪽에서 기술한다. ⚠️ 충돌이 아니라 **측정하지 않은 축**이다 — 이 논문은 **섭식량·보상 행동을 전혀 측정하지 않았고**, Lee 2026·Lee 2023은 **수면/각성과 보행 속도를 측정하지 않았다**. 두 문헌을 합쳐 "LH^Vgat는 섭식 engine이면서 LMA 조절자다"라고 **단일 문장으로 적지 않는다**(각 논문이 실제 측정한 축을 명시해 병기).
- **CaMKIIα promoter의 특이도 — 외부 쟁점(위키에 아직 1차 페이지 없음)**: Veres 2023(eNeuro)은 CaMKIIα promoter가 **CaMKIIα 단백질이 없는 피질 interneuron에서도** transgene을 구동한다고 보고했다. 이 논문은 LH에서 **mCherry⁺의 95.6%가 *Camk2a* mRNA⁺**임을 보여 **promoter 충실도는 방어**했지만, 동시에 **Camk2a⁺ 자체가 LH에서는 혼합 전달물질 집단**임을 보였다. ⚠️ 두 문제(promoter 누출 vs 마커의 세포타입 비특이성)를 **구분해서** 적어야 한다 — 이 논문이 해결한 것은 전자뿐이다.

## 관련 페이지
- [[concept-lateral-hypothalamus]] — LH 개념 hub. 각성·LMA 축의 세포타입 분업 근거.
- [[concept-orexin-neurons]] — ⚠️ Hcrt 비의존 각성 경로의 1차 근거(ALM 200 mg/kg 하에서도 7시간 각성); Hcrt 세포 중 9.3%만 전달.
- [[yamanaka-2003-hypothalamic-orexin-neurons-regulate]] — ⚠️ "orexin은 단식 각성에 필수"와 층위 긴장; 대사 상태 축이 이 논문에는 없다.
- [[mickelsen-2019-single-cell-transcriptomic-analysis-of]] — ⚠️ LHA GABA 15 + Glut 15 클러스터 census. CaMKIIα는 클러스터가 아닌 농축 마커라는 판단의 근거.
- [[concept-neurotransmitter-cotransmission]] — ⚠️ 드라이버·마커 함정. "AAV-CaMKIIα = excitatory"를 LH에서 쓸 수 없는 이유.
- [[sumarli-2026-multidimensional-control-of-ingestive-behavior]] — LH^Nts의 licking 운동량·각성·자발운동 부호화; CaMKIIα-GABA/LMA 성분의 정체 후보.
- [[concept-neurotensin]] — Naganuma 2019(LH Nts → 각성·고체온)를 이 논문이 선행으로 인용.
- [[petzold-2023-complementary-lateral-hypothalamic-populations]] — LH^Nts 아집단 분업(Korotkova lab).
- [[lee-2026-distinct-lateral-hypothalamic-gabaergic]] — ⚠️ 같은 "LH GABA 아집단 분화" 주제를 섭식·salience 축에서 다룸(측정 축이 다름 → 병기).
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] — 사용자 lab LH^LepR seeking/consummatory; 각성·운동 성분 분리 검증 대상.
- [[kim-2024-normative-framework-dissociates-need]] · [[kim-2024-unified-theoretical-framework-underlying-regulation]] · [[concept-need-motivation-pleasure-utility]] — Motivation을 각성 성분과 운동 성분으로 재분해하는 연결 가설.
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — 사용자 lab LH 리뷰; LH 세포타입 분업 서술에 각성/LMA 축 추가.
- [[stuber-2016-lateral-hypothalamic-circuits-for]] — "섭식 표현형이 각성 상태의 행동 패턴일 수 있다"는 가설과 정합.
- [[bonnavion-2016-hubs-and-spokes-of]] — LHA hub-and-spokes 리뷰; Hcrt·MCH·GABA의 각성 역할 배치.
- [[domingos-2013-hypothalamic-melanin-concentrating-hormone]] · [[subramanian-2023-hypothalamic-melanin-concentrating-hormone-neurons]] — ⚠️ MCH의 Gad1⁺/Vgat⁻ 문제와 wake-active 결과의 불일치.
- [[salamone-2012-mysterious-motivational-functions-mesolimbic]] — activational 동기 성분 틀.
- [[concept-appetitive-consummatory-phases]] — 각성 축을 섭식 단계 구분의 교란변수로 다루기.
- [[concept-weight-regain-defended-adiposity]] — LMA(에너지 소비) 축을 섭취량과 분리해 측정해야 하는 이유.
- [[mehrhof-2026-computational-phenotyping-of-effort]] — 대사 질환의 활동·effort 저하; CaMKIIα 표적 가설의 임상 연결.
- [[concept-hypomap]] — 시상하부 세포타입 atlas 기준에서 CaMKIIα 라벨의 위치.
