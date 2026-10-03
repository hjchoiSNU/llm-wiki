---
title: "LH CaMKIIα 뉴런 (LH^CaMKIIα) — 세포 유형인가 프로모터 표지인가"
type: concept
created: 2026-10-03
updated: 2026-10-03
aliases: [LH CaMKII, LH CaMKIIa, LH^CaMKIIα, Camk2a LH]
---

> [!takeaway] 연구 방향 관점의 핵심
> **판정: LH의 CaMKIIα는 세포 유형이 아니라 프로모터로 정의된 "농축 표지(enrichment label)"다.** 위키에 있는 두 1차 논문 — [[heiss-2024-distinct-lateral-hypothalamic-camkiia|Heiss 2024 PNAS]]와 [[tan-2022-lateral-hypothalamus-calcium-calmodulin-dependent-protein|Tan 2022 Research]] — 은 **같은 프로모터·거의 같은 좌표**(AP −1.4 vs −1.3)를 쓰고도 그 라벨 안에 무엇이 들어 있는지를 **반대로 보고**한다. Heiss는 Vgat⁺ 20–33%를 세고 그 GABA 성분에 **보행운동(LMA)** 기능을 귀속시킨다. Tan은 GABA와 "거의 겹치지 않는다"고 **수치 없이** 적고, vGluT2⁻ **36.13%** 미확인 분획에 **포식 섭취** 기능을 귀속시킨다. 두 논문 모두 자기 도구를 **CaMKIIα 항체에만** 맞춰 검증했다 — 즉 "CaMKIIα 프로모터가 CaMKIIα 단백질이 있는 세포를 잡았다"는 **순환 검증**이다.
> 사용자 lab에 닿는 지점 셋.
> **(1) 도구 선택** — LH에서 "AAV-CaMKIIα = excitatory"는 쓸 수 없다. 흥분성 세포를 원하면 `Vglut2-ires-Cre`(또는 투사 정의 Cre), 억제성을 원하면 `Vgat`/`Gad2`-Cre를 쓰고, CaMKIIα 프로모터는 **"일부 영역에서 Camk2a⁺에 농축된 혼합 집단"** 으로만 쓴다. 프로모터 충실도(Heiss: mCherry⁺의 **95.6 ± 0.4%**가 *Camk2a* mRNA⁺)와 **세포 유형 특이성**은 별개 문제이고, 두 논문이 방어한 것은 전자뿐이다.
> **(2) 인용 규칙** — 이 두 편은 **"LH^CaMKIIα 뉴런이 X를 한다"로 합산 인용하면 안 된다**. Heiss는 각성·LMA를, Tan은 포식·섭취를 측정했고, 두 논문의 라벨 조성이 다르므로 **각자 측정한 축과 각자 보고한 조성을 함께** 적어야 한다. [[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]]·[[overview-lateral-hypothalamus-synthesis|LH 종합]]의 "Camk2a = 대부분 Vglut2(64–79%)" 행은 **두 논문의 서로 다른 분모를 한 칸에 눌러 담은 요약**이므로, 인용 시 근거 종류(IHC/FISH/Cre-reporter)와 분모 방향을 반드시 밝힌다.
> **(3) 해석 위험(일반 규칙)** — Cre 계통이든 프로모터 AAV든, **라벨은 세포 유형의 증거가 아니다**. 표현형을 "그 라벨"에 귀속시키는 순간, 라벨 안의 소수 분획이 표현형을 지배할 가능성(Tan은 36%가 나머지 64%의 반대 부호 기능을 압도한다고 **스스로** 주장한다)과, 라벨 밖의 같은 세포 유형이 빠져 있을 가능성을 동시에 떠안는다. 이것은 사용자 lab의 **`Lepr-Cre` 순도 문제와 같은 구조의 오류**다(§사용자 연구 관점).

# LH CaMKIIα 뉴런 — 세포 유형인가 프로모터 표지인가

## 한 줄 요약
LH에서 `AAV-CaMKIIα-프로모터`로 표지되는 뉴런은 *Camk2a* 발현에는 충실하지만(95.6%) **단일 전달물질 유형이 아니고**(Vglut2 약 79% + Vgat 20–33%, Heiss 2024 / vGluT2 63.87% + 미확인 36.13%, Tan 2022), 같은 프로모터·같은 부위를 쓴 두 논문이 **GABA 혼입 여부를 반대로 결론**하며 각각 **다른 분획에 다른 기능**(각성·보행운동 vs 포식 섭취)을 귀속시킨다 — 따라서 "LH^CaMKIIα 뉴런"은 자연종(natural kind)이 아니라 **도구가 만든 집합**으로 다뤄야 한다.

## 왜 문제인가 — cortex의 직관이 hypothalamus에서 깨진다

**피질에서의 통념 (배경지식)**: CaMKIIα(*Camk2a*)는 피질·해마의 **흥분성 추체뉴런 표준 마커**로 쓰여 왔고, `AAV-CaMKIIα-프로모터`는 Cre 계통 없이 흥분성 뉴런을 겨냥하는 관행적 도구가 되었다. 이 관행의 전제는 두 가지다 — ① 프로모터가 *Camk2a*⁺ 세포에서만 구동된다, ② *Camk2a*⁺ = 흥분성.

**LH에서는 두 전제가 서로 다른 방식으로 깨진다.** 이 두 문제를 구분하는 것이 이 페이지의 핵심이다.

| 문제 | 질문 | LH에서의 답 | 근거 |
|---|---|---|---|
| **프로모터 충실도 (promoter fidelity)** | 프로모터가 *Camk2a*⁺ 세포에서 구동되는가? | **예.** mCherry⁺ 934세포 중 **95.6 ± 0.4%**가 *Camk2a* mRNA 공발현(RNAscope, 3마리) | [[heiss-2024-distinct-lateral-hypothalamic-camkiia]] Fig. S2 |
| **세포 유형 특이성 (cell-type specificity)** | *Camk2a*⁺가 하나의 세포 유형인가? | **아니다.** 같은 집단이 Vglut2⁺ 78.7 ± 3.7% / Vgat⁺ 33 ± 2.2%(IHC Gad2⁺ 20.1 ± 0.7%)로 쪼개진다 | [[heiss-2024-distinct-lateral-hypothalamic-camkiia]] Fig. 3C·S2 |

- **왜 ①이 쟁점이 되었나**: **Veres 2023 (eNeuro)** 가 CaMKIIα 프로모터가 **CaMKIIα 단백질이 없는 피질 interneuron에서도 transgene을 구동**한다고 보고했다(He 2021 RNAscope, Liu & Jones 1996, Sik 1998과 대조). 즉 프로모터 자체의 누출 문제다. Heiss 2024는 이 보고를 **명시적 동기**로 삼아 LH에서 RNAscope로 재검증했고, 95.6% 공발현으로 **누출 문제를 방어했다**. (Veres 2023 자체는 위키에 1차 페이지가 없다 — Heiss 2024 경유 인용.)
- **그러나 ①을 방어하는 것이 ②를 방어하지 않는다.** Heiss 2024가 같은 Fig. S2에서 보여준 것은, 프로모터가 정확히 겨눈 *Camk2a*⁺ 집단 자체가 **LH에서는 전달물질 혼합**이라는 사실이다. 저자들도 Discussion에서 "CaMKIIα 프로모터로 표지된 세포의 약 **20–30%가 GABAergic**"이라고 정식화하고, 다음 단계로 "**CaMKIIα보다 더 특이적인** 분자 마커 동정"을 꼽는다.
- **census와도 대응되지 않는다**: [[mickelsen-2019-single-cell-transcriptomic-analysis-of|Mickelsen 2019]]의 LHA 15 GABA + 15 glutamatergic 클러스터 중 *Camk2a*가 지정하는 클러스터는 없다 — *Camk2a*는 여러 클러스터에 걸치는 **농축 마커**다. [[wang-2021-expansion-assisted-iterative-fish-defines-lateral|Wang 2021]]의 24유전자 EASI-FISH 패널에도 *Camk2a*는 **들어 있지 않다**(패널은 *Otp*/*Meis2* × *Slc17a6*/*Slc32a1* 축으로 짜였다). 즉 **CaMKIIα 라벨은 LHA의 어느 분자 좌표계에도 등록되어 있지 않다.**
- **같은 함정의 일반형**: LH에서 전달물질 귀속이 marker 선택에 따라 뒤집히는 사례는 CaMKIIα만이 아니다 — MCH(*Gad1* 98% vs *Slc32a1* 미검출), Hcrt(*Gad1* 56%·*Gad2* 16% vs Vgat 1.5%), Th(흥분성·억제성 클러스터 양쪽), Sst(아영역에 따라 GABA 97% ↔ 56%). [[concept-neurotransmitter-cotransmission]]·[[overview-lateral-hypothalamus-synthesis]] §2.3 표 5 참조.

## 두 논문이 같은 프로모터·같은 부위에서 다른 집단을 보고한다

| 항목 | [[heiss-2024-distinct-lateral-hypothalamic-camkiia\|Heiss 2024 (PNAS)]] | [[tan-2022-lateral-hypothalamus-calcium-calmodulin-dependent-protein\|Tan 2022 (Research)]] |
|---|---|---|
| **좌표/부위** | AP **−1.4**, ML ±1.0–1.2, DV −4.7~−4.8 (**pia 기준**). perifornical ~ tuberal LH. 감염 범위 fornix 외측 ~ cerebral peduncle 내측 | AP **−1.3**, ML ±1.0, DV −5.0 (**bregma 기준**). "LH" (하위구역 명시 없음) |
| **AAV serotype·프로모터** | **AAV8**-CaMKIIα-HA-hM3D(Gq)-IRES-mCitrine(370 nL 양측) / AAV8-CaMKIIα-hM3D(Gq)-mCherry(100 nL) / **AAV9**-CaMKII-GCaMP6f(370 nL) | **AAV2/8**(ChR2, hM4Di, ArchT) · **AAV2/9**(GCaMP6s, DO-GCaMP6s), 각 0.1 μL, 20 nL/min |
| **검증 방법** | ⚠️ 항체 단독이 아니다 — **RNAscope FISH(*Camk2a*·*Slc17a6*·*Slc32a1*)** + **Gad2-IRES-Cre;R26R-EYFP 리포터 이중 IHC** + Hcrt·ADA 항체 | ⚠️ **CaMKIIα 항체 단독** (각 바이러스별로 발현 세포 중 항체 양성률만 보고) + GABA는 **Vgat-cre × Ai47** 리포터, vGluT2는 **vGluT2-cre** 교차 |
| ***Camk2a* mRNA 일치율** | **95.6 ± 0.4%** (mCherry⁺ 934세포, 3마리, RNAscope) | **측정하지 않음.** 대신 항체 양성률 **97–98.5%** (GCaMP6s 844/857=98.48%; ChR2 578/591=97.80%; hM4Di 482/495=97.37%) — ⚠️ CaMKIIα 프로모터를 CaMKIIα 항체로 검증한 **순환 논증** |
| **Vglut2 분율** | **78.7 ± 3.7%** (mCherry⁺ 708세포, RNAscope *Slc17a6*) | **63.87%** (CaMKIIα⁺ 645개 중 412개). 역방향으로는 **vGluT2⁺ 426개 중 412개 = 96.71%가 CaMKIIα⁺** — ⚠️ **분모가 반대 방향**이므로 두 논문 수치를 직접 비교할 수 없다 |
| **GABA 분율** | **20–33% (범위로 병기)**: RNAscope *Slc32a1*⁺ **33 ± 2.2%**(613세포) vs IHC Gad2-EYFP⁺ **20.1 ± 0.7%**(2,486세포). 저자 자신의 요약은 "**약 20–30%가 GABAergic**". ⚠️ Vglut2 78.7 + Vgat 33 = **111.7%**로 100%를 넘는데 **원문은 이 초과분을 설명하지 않는다**(다른 절편·세포 집합이거나 공발현) | **"거의 겹치지 않음(scarcely overlapped)" — 수치 없음.** Vgat-cre × Ai47 GFP와 CaMKIIα 면역표지의 정성 서술(Fig S1(a))뿐 |
| **기능 주역으로 지목된 분획** | **두 아집단 분업**: glutamatergic ~80% = **각성**, GABAergic ~20% = **보행운동(LMA)·high-theta**. Gad2-DTA 절제로 분리 입증 | **vGluT2⁻ 36.13%의 미확인 집단**(GABA도 아니라고 주장). Cre-OFF(DO) GCaMP로 활성 확인 + vGluT2-caspase3 절제 후에도 ChR2 표현형 유지로 논증 |
| **행동 종결점** | EEG/EMG **수면·각성 채점**, 정량 EEG power, **보행 속도(cm/s)**, 24 h 자발 수면 구조. ⚠️ **섭식·보상은 전혀 측정하지 않음** | 신규 물체 탐색·운반·물기, **크리켓 포식(사냥·섭취)**, 사료 섭취량(3분), 식용/비식용 선호, 사회 vs 물체 경쟁. ⚠️ **수면·각성·보행 속도는 측정하지 않음** |
| **orexin 중첩** | **측정함**: Hcrt 뉴런 3,949세포 중 **9.3 ± 0.5%만** hM3Dq⁺. TMN histaminergic은 378세포 중 **6 ± 3%** | **측정하지 않음** (Hcrt 공표지 데이터 없음) |

**읽는 법.** 두 논문은 **같은 도구로 다른 집단을 손에 쥐었거나, 같은 집단을 다른 해상도로 봤다.** 어느 쪽인지는 현재 자료로 판정되지 않는다. 확실한 것은 다음이다.
1. **분모가 다르다.** Heiss는 "라벨된 세포 중 몇 %가 Vglut2/Vgat인가"(라벨 기준), Tan은 주로 "vGluT2⁺ 중 몇 %가 CaMKIIα⁺인가"(전달물질 기준)를 센다. Tan도 역방향 수치(63.87%)를 제시하지만 GABA에 대해서는 **역방향 수치가 없다**.
2. **GABA 검출 층위가 다르다.** Heiss는 *Slc32a1* mRNA(33%)와 Gad2 프로모터 리포터(20.1%) 두 층위를, Tan은 Vgat-Cre 리포터 한 층위를 쓴다. Gad2-IRES-Cre는 억제성 뉴런의 >90%를 특이도·효율 >90%로 잡는다(Taniguchi 2011; Heiss 인용) — 서로 다른 Cre 계통의 포착 범위 차이가 결과 차이를 만들 수 있다.
3. **좌표계 기준점이 다르다**(pia vs bregma). DV −4.7~−4.8 (pia) 와 DV −5.0 (bregma) 는 실제 침범 깊이가 다르고, AP 0.1 mm 차이는 [[wang-2021-expansion-assisted-iterative-fish-defines-lateral|Wang 2021]]의 비스듬한 분자 층판에서 **다른 하위구역을 칠 수 있다**(연결 가설 — 원문 주장 아님).

## 기능 — 무엇을 구동하는가

### (1) 각성 vs 보행운동 분리 — [[heiss-2024-distinct-lateral-hypothalamic-camkiia|Heiss 2024]]

- **Hcrt 비의존 7시간 각성**: `AAV8-CaMKIIα-hM3D(Gq)` + **CNO 3 mg/kg i.p.** → 투여 후 **7시간** 각성 증가. ZT5–ZT12 %Wake의 treatment × time **F(24,72)=17.53, P<0.001, n=4**. **dual orexin receptor antagonist almorexant 200 mg/kg**를 1시간 전 투여해도 **ALM–CNO와 VEH–CNO 사이에 어떤 상태에서도 유의차가 없었다** → orexin 신호 차단이 각성 총량을 전혀 바꾸지 못한다. 단 **>240분 초장시간 wake bout의 출현만** ALM이 막았다(64–240분 bin 비중이 ALM–CNO에서 유의하게 높음, P<0.05) → orexin은 bout **연속성** 기여.
- **wake-active 활동 부호**: `AAV9-CaMKII-GCaMP6f` + GRIN lens microendoscope, 4마리 **131세포**. 각 세포의 NREM Z-score 정규화 기준 **Wake 6.45 ± 0.35 / REM 2.72 ± 0.77 / NREM 1.00 ± 0.09**(세 상태 모두 상호 유의, Bonferroni t). NREM 선호 세포는 사실상 없었다. ⚠️ 4마리 중 3마리는 120분 기록에서 **REM epoch이 전혀 없었다**(REM n=56).
- **보행운동 +470%**: WT에서 CNO가 보행 속도를 **7.7 ± 0.6 → 36.2 ± 3.6 cm/s**로 올렸다(**+470%**, Bonferroni paired t, **P=7.75×10⁻⁶, n=9**).
- **★ GABA 성분 절제가 각성은 남기고 운동만 깎는다**: Gad2-IRES-Cre;R26R-EYFP에 `AAV-CMV-FLEX-mCherry/DTA` 공주입 → 억제성 뉴런 밀도 **800 → 285.35 cells/mm² (64.6% 감소)**. 결과:
  - **각성 불변** — CNO 유발 %Wake가 TG와 WT에서 동일, 어느 시간대에도 유의차 없음.
  - **LMA 둔화** — TG는 8.3 ± 0.6 → 22.2 ± 2.1 cm/s(**+269%**, P=1.13×10⁻⁵, n=10). 유전형 간 차이 **P=7.98×10⁻⁴** (없애지는 못했다).
  - **Hθ(8–10 Hz)·Hγ(60–80 Hz) 증가 소멸** (WT에서는 유지). 참고로 VEH–CNO의 정규화 power는 Hθ **377%**, Hγ **237%**, Vhγ **193%**였고, 순수 Vglut2 자극에서는 Hθ가 **145%**였다 — 저자들은 이 차이를 CaMKIIα 라벨에 **운동 유발 GABA 성분이 추가로 들어 있기 때문**으로 해석한다.
  - **자발 활동기 보행 속도 68% 감소**(unpaired t, P=0.047, n=9 vs 10), 그런데 **24시간 자발 수면 구조는 완전히 불변**(어떤 상태의 시간별 %·bout duration에도 차이 없음; 유일한 차이는 HθWP 감소).
- **정식화**: 같은 CaMKIIα 라벨 안에 **각성 담당 glutamatergic(~80%)** 과 **운동 담당 GABAergic(~20%)** 이 따로 들어 있다.

### (2) 신규성 추구 → 포식 섭취 — [[tan-2022-lateral-hypothalamus-calcium-calmodulin-dependent-protein|Tan 2022]]

- **활동 부호는 appetitive**: `AAV-CaMKIIα-GCaMP6s` 광도측정에서 신규 물체 코 접촉 순간 급상승, 입으로 물고 옮기는 동안 고수준 유지, 내려놓으면 즉시 하강(n=5 × 3회, paired t, P<0.0001). 크리켓 사냥에서는 물기 시작 시 급등·사냥 전 과정 고수준인데 **이어지는 소비 동안 하강**(one-way ANOVA + Dunnett, P<0.0001). 사료 펠릿도 같은 패턴 — 식용성 확인 중 상승, **먹는 동안 급락**. **자유 보행 중에는 형광 변화 없음**(운동 artifact 아님). 저자 해석: **appetite 자체의 부호화** — 못 얻은 상태에서 높고 공급되면 억제.
- **인과 효과는 consummatory**: 광자극 시 **well-fed·cricket-naïve** 마우스가 머리를 겨눈 치명적 물기 + 앞발 고정 후 사체를 탐욕적으로 섭취, **주어진 크리켓 5마리 전부 공격·섭취**. 자극을 끄면 즉시 크리켓을 버리고 완전히 무시. 사료 펠릿 3분 섭취량도 유의 증가(n=6, P<0.0001)하고 **식용 > 비식용 선호가 사라졌다**(비선택적 섭식). ⚠️ 이 **활동 부호 ↔ 인과 효과 비대칭**은 [[concept-npy-agrp-neurons|AgRP]]에서 잘 알려진 형태다 → [[concept-appetitive-consummatory-phases]].
- **섭취가 아닌 물기**: **0.5 g 솜뭉치**를 **3분 만에 산산조각**냈으나 **솜 무게는 줄지 않았다** — 물기와 섭취가 분리 측정되었다.
- **필요성**: `AAV-CaMKIIα-hM4D(Gi)` + **CNO 1.0 mg/kg i.p.** → 금식 마우스가 크리켓에 흥미를 잃음(잠복기 ↑ / 사냥 지속 ↓ / 섭취 지속 ↓; n=6, P<0.0001·P<0.001).
- **포식이지 사회 공격이 아니다**: 공격적 수컷 침입자를 동시 제시해도 **침입자를 무시하고 물체를 회수**했고, 자극 구간 동안 **공격 발생이 전무**했다(n=6, P<0.0001). 발정기 암컷보다 비사회 물체로 주의가 급격히 이동(interaction index, P<0.0001).
- **주역은 미확인 36%**: `AAV-CaMKIIα-DO-GCaMP6s`(Cre-OFF)를 **vGluT2-cre** 마우스에 넣어 **CaMKIIα⁺vGluT2⁻** 만 표지 → 금식 후 크리켓 추격 개시와 함께 즉시 상승·물기 중 고수준 유지. 또 `AAV-CMV-DIO-caspase3-TEVp`로 **vGluT2⁺를 사멸**시켜도 CaMKIIα-ChR2 발현이 풍부하고, 그 상태에서 vGluT2⁻ CaMKIIα⁺ 광자극이 더 빠르고 격렬한 사냥을 만들었다.

### (3) 회로 — MPOA → LH → vPAG

- **간접 = 포식 + 섭취 / 직접 = 포식만**: 요약 모델(Fig 6(k))은 **MPOA^CaMKIIα → LH^CaMKIIα → vPAG 간접 경로 = 포식 + 섭취**, **MPOA^CaMKIIα → vPAG 직접 경로 = 포식만(소비 없음)** 이다. 근거 — MPOA→LH 말단 자극은 well-fed 마우스에서 크리켓 추격·공격·포획·회수를 유발하지만 **사체를 먹지 않고**, **사료 펠릿도 회수만 하고 먹지 않았다**(paired t, **P=0.7926**). MPOA 세포체 자극도 같다(펠릿을 옮기기만 함). 반면 LH 세포체·LH→vPAG 말단 자극은 섭취를 유발한다.
- **투사 조성(CT-B 647, vPAG 역추적)**: vPAG 투사 LH 뉴런 **91개 중 49개(53.85%)가 CaMKIIα⁺**, 별도 계수에서 **151개 중 67개(44.37%)가 GABA⁺** → vPAG는 LH에서 **GABA성·CaMKIIα성 두 투사를 모두 받는다**. (별도로 Fig S7은 vPAG 투사 LH 뉴런을 약 **56.60% GABAergic / 40.57% glutamatergic**으로 적는다.)
- **상류 특이성**: LH에 CT-B를 넣으면 **LH 투사 MPOA 뉴런 340개 중 284개(83.53%)가 CaMKIIα⁺**. MPOA^CaMKIIα 자극 시 **LH 내 Fos⁺ 243개 중 88.06%가 CaMKIIα⁺**, ChrimsonR 자극이 LH CaMKIIα 칼슘을 즉시 상승(P<0.0001). 단시냅스 rabies로 **vPAG 투사 LH CaMKIIα 세포가 MPOA CaMKIIα 입력을 받는다**는 3자 연결 확정.
- **⚠️ LH의 필요성은 분리되지 않았다 (저자 자인)**: MPOA에 ChR2 + LH에 hM4Di를 넣고 **CNO 1.0 mg/kg**로 LH CaMKIIα를 억제한 상태에서 MPOA→LH 말단을 자극해도 **non-appetitive hunting이 여전히 나타났다**(Fig S6). 저자는 말단 자극의 **역행성 세포체 활성화**로 MPOA→vPAG 직접 경로가 대신 작동했을 가능성을 들고 두 경로가 **보상적(compensatory)** 이라고 해석한다 — 즉 회로 수준에서 **LH 중계의 필요성은 미입증**이다.

## ⚠️ 위키 내 충돌·긴장 (병기 — 어느 쪽도 덮어쓰지 않음)

### ① GABA 분율의 재현 불가 — 같은 프로모터, 같은 부위, 반대 결론
Heiss 2024는 CaMKIIα 라벨의 **20–33%가 GABAergic**이라고 세고 그 분획에 **LMA 기능**을 귀속시킨다. Tan 2022은 같은 라벨이 GABA와 **"거의 겹치지 않는다"**(수치 없음)고 적고, 비-GABA·비-vGluT2 분획에 **섭취 기능**을 귀속시킨다. **둘 다 맞을 수 없다** — 그러나 어느 쪽이 틀렸다고 판정할 자료도 없다. 차이를 만들 수 있는 변수를 전부 나열해 둔다.

| 변수 | Heiss 2024 | Tan 2022 |
|---|---|---|
| GABA 검출 도구 | *Slc32a1* RNAscope(33%) **+** Gad2-IRES-Cre;R26R-EYFP 이중 IHC(20.1%) | Vgat-ires-cre × Ai47 GFP + CaMKIIα 항체(수치 없음) |
| Cre 계통 | **Gad2**-IRES-Cre (JAX:010802) | **Vgat**-ires-cre (JAX:016962) |
| 리포터 | R26R-EYFP (JAX:006148) | **Ai47**(Cre 의존 GFP 삼중 cassette) |
| 전달 벡터 serotype | AAV8 (조성 계수용 100 nL) / AAV9 (imaging) | AAV2/8 · AAV2/9 |
| 좌표 | AP −1.4, DV −4.7~−4.8 **pia 기준** | AP −1.3, DV −5.0 **bregma 기준** |
| 계수 규모 | 2,486세포(IHC) / 613·708·934세포(FISH), 3마리 | 수백 세포, **2마리** (저자 자인) |
| 정체 검증 축 | mRNA(*Camk2a*·*Slc17a6*·*Slc32a1*) + 단백 | **단백(CaMKIIα 항체) 단독** + Cre 리포터 |

실무 결론: 위키 전역에서 LH CaMKIIα의 GABA 분율은 **"보고에 따라 0%(정성) ~ 33%"** 로 적고, 단일 수치로 요약하지 않는다. [[concept-neurotransmitter-cotransmission]]에 기록된 "*Gad* 발현 ≠ GABA 방출" 문제(MCH: *Gad1* 98%·*Slc32a1* 미검출 / Hcrt: *Gad1* 56%·Vgat 1.5%)가 **여기서는 역방향으로** 작동한다 — Heiss의 *Slc32a1* 33%는 소포수송체 기준이므로 오히려 **방출 가능성이 높은** 수치다.

### ② "LH^Vglut2 = brake" vs Tan의 섭취 폭증 — 그리고 한 논문 안에 양쪽 증거가 공존한다
[[jennings-2013-the-inhibitory-circuit-architecture|Jennings 2013]]·[[rossi-2019-obesity-remodels-activity-and|Rossi 2019]]·[[rossi-2021-transcriptional-and-functional-divergence|Rossi 2021]]·[[stuber-2016-lateral-hypothalamic-circuits-for|Stuber 2016]]은 LHA^Vglut2 활성 → **섭취 ↓·혐오**로 일관되게 적는다(5 Hz 광활성 → 굶긴 마우스 섭취·food zone ↓, F(1,36)=13.31/13.12; 광억제 → 포만 중 섭식 ↑ = brake). Tan은 **vGluT2⁺의 96.71%를 포함하는 집단을 통째로 켜고도 섭취 폭증·회피 징후 전무**를 보고한다.
- Tan 자신의 봉합 시도는 "**vGluT2⁻ 36.13%가 지배한다**"이고, 그 36%의 **세포 정체는 미규명**이다. 저자들도 "그 작은 비율이 어떻게 회피 구동을 압도하는지는 추후 연구 과제"라고 명시한다.
- ★ **그런데 Tan의 caspase3 결과는 brake 모델을 지지한다**: LH vGluT2⁺를 사멸시키자 **well-fed 마우스가 광자극 없이도 크리켓을 자발적으로 사냥**했다(Fig S1(k-n)) — 브레이크를 떼면 포식이 풀린다는 뜻이다. 즉 **같은 논문 안에 "Vglut2 = brake"를 반박하는 증거와 지지하는 증거가 공존**한다. 어느 쪽도 지우지 말고 이 공존 자체를 기록해야 한다.
- 추가 미측정 변수: `AAV-CaMKIIα` **프로모터 발현량과 내인성 vGluT2 발현량의 관계**가 측정되지 않았다. 프로모터 구동 강도가 세포 유형별로 다르면, "라벨됨"과 "효과적으로 조작됨"이 분리될 수 있다(연결 가설 — 원문 주장 아님).

### ③ *Camk2a*는 어느 클러스터·어느 하위구역에도 대응되지 않는다 — 전달물질 기반 vs 프로모터 기반 분할
[[mickelsen-2019-single-cell-transcriptomic-analysis-of|Mickelsen 2019]]의 **GABA 15 + glutamatergic 15** census, [[wang-2021-expansion-assisted-iterative-fish-defines-lateral|Wang 2021]]의 **9개 분자·공간 하위구역(consensus 17+17)** 어디에도 *Camk2a* 정의 집단은 없다. Heiss 저자들도 "지금까지 LH에서 최소 15개 GABAergic 집단이 동정되었으므로 평가할 후보 세포타입이 여럿 있다"며 **CaMKIIα보다 특이적인 마커를 찾는 것**을 다음 과제로 적는다.
- ⚠️ 따라서 **두 종류의 분할을 한 문장에 섞지 않는다**: "LH^CaMKIIα(프로모터) 집단은 Vglut2(전달물질 Cre) 집단의 부분집합이다" 같은 서술은 두 분할의 **분모가 다르므로 성립하지 않는다**.
- 반대로 이 상황은 **검증 가능한 틈**을 만든다: *Camk2a*를 EASI-FISH 패널에 추가하면(이 방법은 보관 샘플 재탐침이 가능하다) 라벨이 어느 구역·어느 클러스터에 농축되는지 **직접 측정**할 수 있다. 두 논문의 AP 0.1 mm 차이가 다른 층판을 칠 수 있다는 가설도 여기서 판정된다(연결 가설 — 원문 주장 아님).

### ④ orexin 중심 각성 서술 vs CaMKIIα 평행 경로
[[concept-orexin-neurons]]·[[yamanaka-2003-hypothalamic-orexin-neurons-regulate|Yamanaka 2003]]·[[bonnavion-2016-hubs-and-spokes-of|Bonnavion 2016]]은 LH 각성을 orexin 중심으로 서술한다. Heiss는 **Hcrt 세포의 9.3%만 전달**했고 **almorexant 200 mg/kg로 dual OXR을 완전 차단해도 각성이 전혀 깎이지 않았다** → **orexin과 평행한 각성 경로**다.
- ⚠️ **층위가 다르므로 병기한다**: Heiss는 *chemogenetic 최대 자극 하의 각성 총량*을, Yamanaka 2003은 *대사 상태 변화에 따른 생리적 각성 조절*(ataxin-3 ablation에서 단식성 각성 소실)을 측정했다. "orexin = 상태 의존적 안정화자, LH^CaMKIIα glut = 각성 총량을 밀어올리는 평행 경로"가 두 결과 모두와 정합하며, ALM이 **>240분 bout만** 막았다는 결과는 "orexin = flip-flop stabilizer"(Saper 2005)와 오히려 부합한다.
- ⚠️ **Tan은 Hcrt 공표지를 전혀 측정하지 않았다.** 그러면서 LH^CaMKIIα를 **novelty 접촉에서 최대 반응**으로 그린다 — [[harris-2005-a-role-for-lateral|Harris 2005]]는 LH orexin이 **소비성 보상 cue에만 선택적이고 novelty 보상에는 무반응(18 ± 2%)** 이라고 결론했다. 두 집단이 LH 안에서 novelty vs consumptive-reward로 분업한다는 읽기는 가능하지만 **공표지 측정이 없어 미검증**이다(연결 가설 — 원문 주장 아님).

### ⑤ LH × novelty 축에서 Jia 2026과 Tan 2022의 세포 정체 불일치
[[jia-2026-novelty-exploration-activated-ensemble-in|Jia 2026]]의 novelty-exploration Fos-TRAP ensemble은 **GABAergic 48.79% / CaMKII(+) 25.15% / Orexin ~26.25% / MCH ~5.96%** 로 구성되고, **Vgat-Cre와 Vglut2-Cre 양 subtype 모두에서** 유사한 진통·항불안 효과가 나온다. Tan은 같은 LH × novelty 축에서 **"거의 비GABA성"** 집단을 지목한다.
- ⚠️ 행동 출력도 다르다 — Jia는 **진통·항불안·CPP**, Tan은 **추격·물기·섭취**.
- 주목할 숫자: Jia의 novelty ensemble에서 **CaMKII(+)는 25.15%뿐**이고 **GABAergic이 48.79%로 최다**다. 즉 "LH novelty 세포 = CaMKIIα 세포"라는 등치는 Jia의 조성과 맞지 않는다. 두 ensemble이 같은 세포인지 **완전 미검증**이며, 교차 검증 경로는 Tan의 Cre-OFF(`AAV-CaMKIIα-DO-GCaMP6s`) 전략을 Fos-TRAP과 결합하는 것이다(연결 가설 — 원문 주장 아님).

### ⑥ Heiss vs Venner 2016 — wake-promoting LH GABA
**Venner 2016 (Curr Biol)** 은 ventral LH에 **wake-promoting GABAergic 집단**이 있다고 보고했다(Heiss 경유 인용; 위키에 1차 페이지 없음). Heiss의 Gad2-DTA **64.6% 절제**는 **24시간 수면 구조를 전혀 바꾸지 않았고**(Fig S5) CaMKIIα 자극 유발 각성도 그대로였다(Fig 4A) → 정면 불일치. 저자들이 병기한 세 설명:
1. Gad2-IRES-Cre가 억제성 뉴런의 >90%를 잡지만 Venner의 세포가 나머지 **10%**이고 **CaMKIIα 음성**일 수 있다.
2. FLEX-DTA 주입 부피가 해당 집단과 완전히 겹치지 않았고 절제가 **100%가 아니었다(64.6%)** — 남은 세포로 기능 유지 가능.
3. **Venner 쪽의 각성 증가가 LMA 증가의 2차 결과**일 수 있다(그들도 CNO 후 큰 Hθ 증가를 보고했다).
⚠️ 어느 쪽도 결론이 아니다. 위키에는 "LH GABA의 각성 역할은 **쟁점**이며, 적어도 Gad2⁺ ∩ CaMKIIα⁺ 교집합은 **수면 구조가 아니라 LMA**를 조절한다"로 병기한다. [[concept-lateral-hypothalamus]]의 "LH 억제성 뉴런이 각성을 촉진한다" 서술에 이 한정이 붙는다.

### ⑦ seeking/consumption 분업이 세 가지 서로 다른 세포타입 좌표계에서 보고되어 있다
동일한 기능 이분법이 위키에 **세 번 독립적으로**, 서로 다른 좌표계로 적혀 있다.

| 보고 | 좌표계 | 분업 |
|---|---|---|
| [[lee-2026-distinct-lateral-hypothalamic-gabaergic\|Lee 2026]] | LH^**Vgat** 내부 ensemble | salience ensemble vs **value-scaled consumption** ensemble (비중첩, Cal-Light 투사로도 구분 안 됨) |
| [[liu-2026-granular-motivational-interaction-and\|Liu 2026]] | LH^**GABA** 전체 | **initiation hub** (개시 vs 유지) |
| [[tan-2022-lateral-hypothalamus-calcium-calmodulin-dependent-protein\|Tan 2022]] | LH^**CaMKIIα**(비GABA 주장) × **출력 경로**(세포체 vs vPAG 말단) | 세포체 = 추격·운반 / vPAG 말단 = 물기·섭취 / 상류 MPOA→LH 말단 = 사냥만 |

⚠️ 두 해석이 모두 열려 있다: (a) **수렴하는 상위 원리** — LH는 어떤 세포 축으로 잘라도 "탐색/개시"와 "섭취/유지"를 분리해 싣는다. (b) **비특이 조작이 같은 행동 축을 반복해서 끌어낸 결과** — LH 자극은 세포타입과 무관하게 "접근·구강 운동·섭취"라는 공통 레퍼토리를 켠다. [[liu-2023-an-iterative-neural-processing|Liu 2023]]이 LH^GABA가 **비식용 플라스틱 물체에도 먹이와 같은 접근·접촉 반응**(R=0.556)을 보인다고 보고한 것과, Mickelsen의 Sst 활성화가 **비식용 물체 갉기**(P=0.011)를 끌어낸 것, Tan의 솜뭉치 물기(무게 불변)는 (b)와 정합한다. **판정에는 같은 동물에서 두 세포 축을 동시에 비교하는 설계가 필요하다.**

## 도구로서의 CaMKIIα 프로모터 — 인용·설계 규칙

> [!warning] 실무 규칙
> **1. 프로모터 결과가 licence하는 것** — "이 좌표에서 CaMKIIα 프로모터로 표지되는 **혼합 집단**을 조작하면 행동 X가 바뀐다." 이것은 유효한 결과이고, 좌표·serotype·역가·주입 부피와 함께 인용해야 재현 가능하다.
> **2. licence하지 않는 것** — ① "LH의 흥분성 뉴런이 X를 한다" ② "CaMKIIα 뉴런이라는 세포 유형이 X를 한다" ③ 다른 논문의 Vglut2-Cre/Vgat-Cre 결과와의 **직접 비교**. 라벨의 조성이 논문마다 다르므로 ③은 특히 위험하다.
> **3. 항체 단독 검증은 순환이다** — CaMKIIα 프로모터로 발현시킨 뒤 CaMKIIα 항체 양성률(97–98.5%)을 보고하는 것은 "프로모터가 자기 표적을 잡았다"를 확인할 뿐, **그 세포가 무엇인지**를 알려주지 않는다. 최소 요건은 **전달물질 marker(*Slc17a6*/*Slc32a1*) mRNA 공계수**이고, Heiss의 RNAscope + Cre-reporter 이중 검증이 현재 위키 안의 표준이다. 역방향 분율(라벨 기준)과 정방향 분율(전달물질 기준)을 **둘 다** 보고해야 한다.
> **4. 말단 자극에는 역행성 활성화 대조군이 필수** — Tan에는 없었고, 그 결과 MPOA→LH 말단 자극 + LH 억제 실험에서 **LH 중계의 필요성이 분리되지 않았다**(저자 자인). 최소 대조: 말단 자극 시 상류 세포체 Fos/칼슘 동시 측정, 또는 상류 세포체 국소 억제 동반.
> **5. 전달물질 기반 Cre 결과와 프로모터 AAV 결과를 한 문장에 합치지 말 것** — 예: "LH^Vglut2는 섭식을 억제하는데 LH^CaMKIIα는 촉진한다"는 문장은 **두 집단의 중첩 정도를 모른 채** 대비를 만든다. 올바른 형태는 "LH^Vglut2(Cre 정의) 자극은 섭취를 줄이고(Jennings 2013·Rossi 2019/2021), vGluT2⁺의 96.71%를 포함하는 CaMKIIα 프로모터 집단(Tan 2022) 자극은 섭취를 늘린다 — 저자는 차이를 vGluT2⁻ 36%에 귀속시키지만 그 집단의 정체는 미규명이다"다.
> **6. 리뷰 표에 한 칸으로 요약하지 말 것** — [[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]]·[[overview-lateral-hypothalamus-synthesis|LH 종합]]의 "Camk2a: 대부분 Vglut2(64–79%)" 행은 **Tan의 63.87%(라벨 기준)와 Heiss의 78.7%(라벨 기준)를 범위로 묶은 것**이고, 그 범위 안에 "GABA 0% vs 33%"라는 재현 불가가 숨는다.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)

- **`Lepr-Cre` 순도 문제와 같은 구조의 오류다.** [[rossi-2021-transcriptional-and-functional-divergence|Rossi 2021]]은 *Lepr* mRNA가 **LHA^Vglut2 투사뉴런 일부에도** 있고 **LHb 투사에서 비율이 유의하게 높다**(X²=121.67, p<0.0001; *Ghsr*은 경로 차 없음)고 보고한다. 즉 `Lepr-Cre` 라벨도 CaMKIIα 라벨처럼 **전달물질 혼합**이고, [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]·[[siemian-2021-lateral-hypothalamic-lepr-neurons|Siemian 2021]]·de Vrind 2019의 **부호 불일치**가 이 혼합에서 올 수 있다. CaMKIIα 사례는 그 가능성의 **극단적 실연**이다 — Tan에서는 라벨의 **36%**가 나머지 64%의 **반대 부호 기능을 압도**한다고 주장된다. LH^LepR 부호 충돌과 CaMKIIα 불일치가 **같은 뿌리(라벨 ≠ 세포 유형)** 인지는 직접 검증 가능한 질문이다.
- **출구 1 — 교집합 도구**: [[overview-lateral-hypothalamus-synthesis|LH 종합]] **제안 4(`Lepr-Cre` × `Vgat-Flp` INTERSECT)** 가 바로 이 문제의 처방이다. 같은 논리를 CaMKIIα에 적용하면 **`CaMKIIα-프로모터` × `Vgat-Cre`(또는 Cre-OFF)** 교집합/차집합 도구로 Heiss의 두 아집단과 Tan의 36%를 **같은 동물에서** 분리할 수 있다. Tan은 이미 Cre-OFF(DO) 전략을 가지고 있으므로 기술 장벽은 없다 — 빠진 것은 **두 논문의 조성 차이를 한 실험실에서 재측정하는 일**이다.
- **출구 2 — 활성–분자 정합**: 조성 논쟁의 근본 해법은 라벨을 더 좁히는 것이 아니라 **기록한 세포의 정체를 사후에 읽는 것**이다. [[concept-activity-molecular-registration|CaRMA·TRU-FACT]]로 Heiss식 GRIN 영상(131세포 규모)에 사후 다중 RNA-FISH를 붙이면, "wake-active 세포가 *Slc17a6*⁺인가 *Slc32a1*⁺인가"를 **라벨 없이** 판정할 수 있다. [[wang-2021-expansion-assisted-iterative-fish-defines-lateral|EASI-FISH]]의 300 µm 두께는 이 설계와 맞물린다. 사용자 lab의 LH^LepR photometry·miniscope 과제에 같은 정합을 붙이면 Lepr-Cre 순도 문제도 **도구 교체 없이** 정량된다.
- **NMPU 축에서의 함의**: [[kim-2024-normative-framework-dissociates-need|Kim 2024]]의 B = M − K 틀에서 Heiss는 **M의 출력단이 단일하지 않음**을 보인다 — 같은 라벨 안에서 **각성 상태(state)** 와 **운동 출력(vigor)** 이 다른 전달물질 아집단에 실린다. [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]] 매핑에서 Motivation을 **activational(각성·운동) vs directional(대상 선택)** 로 쪼갤 세포타입 근거가 된다. Tan 쪽은 MPOA→LH = Motivation만, LH→vPAG = Motivation + **Utility(섭취 허가)** 로 읽을 수 있으나, well-fed/금식 2×2 설계가 없어 판정 불가다.
- **설계 교훈 — 조작 도구와 측정 축을 쌍으로 기록하라**: Heiss는 섭식·보상을 **전혀 측정하지 않았고**, Tan은 수면·각성·보행 속도를 **전혀 측정하지 않았다**. 두 논문이 "다른 집단"을 보고한 것처럼 보이는 상당 부분이 **측정 축의 비중첩**일 수 있다. 사용자 lab의 LH 조작 실험에서 **같은 동물에서 EEG/EMG + 보행 속도 + 섭취량을 동시에** 기록하면, [[stuber-2016-lateral-hypothalamic-circuits-for|Stuber 2016]]의 가설("섭식 표현형이 특정 각성 상태의 행동 패턴일 수 있다")을 직접 검정하면서 이 비중첩을 메울 수 있다.
- **리뷰 집필에 쓸 수 있는 사례**: [[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]]가 요구한 **"LH 세포는 분자 정체로 정의해야 한다"** 의 가장 깔끔한 반면교사가 이 두 논문 쌍이다. 강한 행동 표현형(크리켓 5/5 완식, 7시간 각성)을 얻고도 **세포 정체가 미정으로 남았고**, 두 논문이 서로의 조성 주장을 반박한다. 리뷰에 "프로모터 정의 집단의 해석 한계" 박스를 넣을 때의 1차 근거다.

## 미해결 질문

1. **두 논문의 GABA 분율 불일치는 어디서 오는가** — Cre 계통(Gad2 vs Vgat), 리포터(R26R-EYFP vs Ai47), serotype, AP 0.1 mm, 혹은 계수 규모(2,486세포 vs 2마리 수백 세포) 중 무엇이 지배적인가. 한 실험실에서 네 조합을 교차하면 1편에 판정된다.
2. **Heiss의 Vglut2 78.7% + Vgat 33% = 111.7% 초과분의 정체** — 정말 공발현 세포가 있는가(그렇다면 LHA에서 *Slc17a6*/*Slc32a1* 공발현 클러스터의 실재 문제와 직결), 아니면 서로 다른 절편 집합의 산물인가. 삼중 FISH 한 번으로 해결된다.
3. **Tan의 vGluT2⁻·비GABA 36.13%는 무엇인가** — [[mickelsen-2019-single-cell-transcriptomic-analysis-of|Mickelsen]] census의 어느 클러스터인가(펩타이드 우세·저전달물질 집단?), *Lepr*·*Nts*·*Gal*·*Pmch* 중 무엇과 겹치는가. "36%가 64%의 반대 부호 기능을 압도한다"는 주장의 기전은 무엇인가(저자 자인 미해결).
4. ***Camk2a*는 LHA의 어느 분자 하위구역에 농축되는가** — EASI-FISH 패널에 *Camk2a*를 추가하면 직접 측정된다. 두 논문의 좌표 차이가 다른 층판을 칠 수 있다는 가설도 여기서 판정된다.
5. **Heiss의 wake-active 131세포는 어느 전달물질인가** — GRIN 영상 + 사후 FISH([[concept-activity-molecular-registration]])로 "각성 담당 = glutamatergic" 귀속을 **절제가 아닌 직접 측정**으로 확인할 수 있다. 현재 근거는 간접(절제 후 각성 불변)이다.
6. **Tan의 CaMKIIα 집단은 wake-active인가** — Tan은 수면·각성을 측정하지 않았다. 포식 섭취 표현형이 **각성·운동 증가의 2차 결과**인지(Heiss의 보행 속도 +470%를 생각하면 중요한 가능성) 분리되지 않았다.
7. **Heiss의 CaMKIIα 집단은 대사 상태에 반응하는가** — 단식·혈당·leptin 축이 전혀 측정되지 않았다. [[yamanaka-2003-hypothalamic-orexin-neurons-regulate|Yamanaka 2003]]이 orexin에 대해 한 작업의 CaMKIIα 버전이 비어 있다(단식 × LH^CaMKIIα Ca²⁺ imaging).
8. **GABA 아집단의 분자 정체** — Heiss의 LMA 담당 Gad2⁺∩CaMKIIα⁺ 집단은 *Nts*형인가([[sumarli-2026-multidimensional-control-of-ingestive-behavior|Sumarli 2026]]의 LH^Nts가 licking 운동량·각성·자발운동을 조율하고 Mickelsen에서 Nts⁺는 70.8% GABA), MCH형인가(Heiss가 Discussion에서 암시하되 공표지 미측정, 그러나 MCH는 REM·수면 촉진으로 알려져 wake-active 결과와 맞지 않는다).
9. **loss-of-function의 역방향** — Heiss가 다음 단계로 꼽은 질문: 이 뉴런을 억제하면 von Economo(1930)가 기술한 고전적 혼수가 재현되는가.
10. **CaMKIIα 프로모터 발현 강도 × 세포 유형** — 프로모터 구동 강도가 세포 유형별로 다르면 "라벨됨"과 "효과적으로 조작됨"이 분리되고, Tan의 "소수가 지배한다"가 조성 문제가 아니라 **발현 강도 문제**일 수 있다. 어느 논문도 측정하지 않았다.

## 관련 페이지

**1차 논문 (이 페이지의 두 축)**
- [[heiss-2024-distinct-lateral-hypothalamic-camkiia]] — 각성 vs LMA 분리 + 프로모터 충실도 95.6% / Vglut2 78.7% / Vgat 20–33% 조성 감사. GABA 혼입을 **인정**하는 쪽.
- [[tan-2022-lateral-hypothalamus-calcium-calmodulin-dependent-protein]] — 신규성 추구 → 포식 섭취 + MPOA→LH→vPAG. GABA 혼입을 **부정**(수치 없음)하고 vGluT2⁻ 36%에 기능을 귀속하는 쪽.

**분자 좌표계 — 라벨을 등록할 곳**
- [[mickelsen-2019-single-cell-transcriptomic-analysis-of]] — LHA 15+15 census. *Camk2a*는 어느 클러스터도 지정하지 않는다는 판단의 근거.
- [[wang-2021-expansion-assisted-iterative-fish-defines-lateral]] — EASI-FISH 9개 분자 하위구역. 패널에 *Camk2a*가 없고, 재탐침으로 추가 가능.
- [[concept-hypomap]] — 시상하부 atlas 기준에서 프로모터 라벨의 위치.
- [[concept-neurotransmitter-cotransmission]] — 드라이버·마커 함정의 일반 틀. "*Gad* 발현 ≠ GABA 방출"과 "프로모터 ≠ 세포 유형"을 구분해 적는 곳.
- [[concept-activity-molecular-registration]] — 라벨 논쟁의 출구. 기록한 세포의 정체를 사후에 읽는 CaRMA·TRU-FACT.

**기능 축 — 각성·운동**
- [[concept-orexin-neurons]] — ⚠️ almorexant 200 mg/kg 하에서도 7시간 각성, Hcrt 세포 9.3%만 전달. orexin 평행 경로.
- [[yamanaka-2003-hypothalamic-orexin-neurons-regulate]] — ⚠️ "orexin은 단식 각성에 필수"와의 층위 긴장.
- [[concept-neurotensin]] · [[sumarli-2026-multidimensional-control-of-ingestive-behavior]] · [[petzold-2023-complementary-lateral-hypothalamic-populations]] — LMA 담당 GABA 아집단의 분자 정체 후보(*Nts*).
- [[concept-weight-regain-defended-adiposity]] — LMA(에너지 소비) 축을 섭취량과 분리해 측정해야 하는 이유.

**기능 축 — 포식·섭취·novelty**
- [[concept-medial-preoptic-area]] — 상류 노드. LH 투사 MPOA의 83.53%가 CaMKIIα⁺, MPOA 자극은 사냥만 켠다(P=0.7926).
- [[concept-appetitive-consummatory-phases]] — 활동 부호(appetitive) ↔ 인과 효과(consummatory) 비대칭과 출력 경로별 phase 분리.
- [[concept-npy-agrp-neurons]] — 같은 비대칭 구조의 선례.
- [[jia-2026-novelty-exploration-activated-ensemble-in]] — ⚠️ 같은 LH × novelty 축, 다른 조성(GABA 48.79% / CaMKII 25.15%)과 다른 출력(진통·항불안·CPP).
- [[harris-2005-a-role-for-lateral]] — ⚠️ LH orexin은 novelty 보상에 무반응(18 ± 2%) — Tan과 정반대 프로필.
- [[concept-zona-incerta]] — PAG로 수렴하는 또 하나의 포식 경로. 다중 평행 경로의 "필요성" 주장 중복.

**⚠️ 충돌 상대 — brake 프레임과 분업 좌표계**
- [[jennings-2013-the-inhibitory-circuit-architecture]] · [[rossi-2019-obesity-remodels-activity-and]] · [[rossi-2021-transcriptional-and-functional-divergence]] · [[stuber-2016-lateral-hypothalamic-circuits-for]] — "LH^Vglut2 = brake" 원전들. Tan의 섭취 폭증과 병기(단, Tan의 caspase3 결과는 brake를 지지).
- [[lee-2026-distinct-lateral-hypothalamic-gabaergic]] · [[liu-2026-granular-motivational-interaction-and]] · [[liu-2023-an-iterative-neural-processing]] — 같은 seeking/consumption 분업의 다른 좌표계들.

**사용자 lab · 프레임**
- [[concept-lateral-hypothalamus]] — LH 개념 hub.
- [[overview-lateral-hypothalamus-synthesis]] — §2 세포 유형 표(Camk2a 행), §8 논쟁 지도, 제안 4 INTERSECT.
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — "분자 정체로 정의하라"는 요구의 반면교사 사례.
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] · [[siemian-2021-lateral-hypothalamic-lepr-neurons]] — LH^LepR 부호 충돌. 같은 뿌리(라벨 ≠ 세포 유형)인지 검증 대상.
- [[kim-2024-normative-framework-dissociates-need]] · [[kim-2024-unified-theoretical-framework-underlying-regulation]] · [[concept-need-motivation-pleasure-utility]] — Motivation을 activational/directional로 쪼개는 연결 가설.
