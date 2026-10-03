---
title: "A hypothalamic circuit links high-fat diet exposure to anxiety-like behavior and anxiety-associated hyperphagia (Wang 2026)"
type: paper
created: 2026-10-03
updated: 2026-10-03
source: "raw/2026 Nat. Comm. A hypothalamic circuit links high-fat diet exposure to anxiety-like behavior and anxiety-associated hyperphagia.pdf"
authors: [Peng Wang, Jun Li, Xin Cheng, Wei Chen, Zhengyu Li, Zheng Fang, Dijia Wang, Bin Mei, Hu Liu, Shaohua Hu, Zhilai Yang, Jiqian Zhang, Gaolin Qiu, Xin Qing, Xuesheng Liu]
year: 2026
journal: "Nature Communications (2026, Article in Press); doi:10.1038/s41467-026-77749-w (Anhui Medical University 마취과; CC BY-NC-ND)"
---

> [!takeaway] 연구 방향 관점의 핵심
> **만성 고지방식(HFD)이 왜 불안과 과식을 동시에 만드는가**를 회로 수준으로 분해한 논문. 세 개의 잘 알려진 시상하부 노드 — [[concept-npy-agrp-neurons|ARC^AgRP]] → [[concept-paraventricular-nucleus|PVN^CRH]] → [[concept-lateral-hypothalamus|LHA^Glu]] — 가 평소엔 각자 섭식·스트레스·섭식억제를 담당하지만, **만성 HFD라는 질병 맥락에서만 하나의 긴 회로로 "동적으로 재결합(state-dependent recruitment)"** 되어 anxiety-associated hyperphagia를 만든다는 주장이다. 핵심은 **상류(ArcAgRP-PVNCRH)는 불안+과식을 함께 나르고, 하류 LHA의 CRHR2 신호는 과식만 떼어 매개(불안엔 무관)** 한다는 분리 — 즉 정서 축과 섭식 축이 같은 회로의 다른 분절에 분산된다.
> 사용자 연구([[concept-emotional-eating|정서적 섭식]]·[[tomiyama-2019-stress-and-obesity|스트레스-비만]]·[[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]])에 닿는 지점: (1) **HFD→HPA축 과활성→과식**이라는 사용자 lab emotional-eating 가설에 **순수 시상하부-내 회로 기질**을 제공(VTA→NAc 보상계를 거치지 않는 축). (2) **불안을 약으로 끄면(midazolam) HFD 과식이 준다** = 정서 상태가 섭식을 bias한다는 인과적 손잡이. (3) **CRHR2 = 과식 전용 분자 표적**(불안은 안 건드림) → 선택적 anti-hyperphagia 창. 단, 전부 **수컷 마우스**·HFD 맥락 한정이고, 보상계를 경유하는 사용자 lab의 기존 축과는 **상보/긴장** 관계(아래 ⚠️ 절).

# Wang et al. 2026 — HFD가 ArcAgRP-PVNCRH-LHAGlu 회로를 재결합해 불안·과식을 커플링

> Peng Wang, Jun Li, Xin Cheng 등 (공동 1저자 3인), …, **Gaolin Qiu · Xin Qing · Xuesheng Liu** (교신). *Nature Communications* (2026, Article in Press). doi:10.1038/s41467-026-77749-w. Anhui Medical University 제1부속병원 마취과·주술기의학. OA (CC BY-NC-ND). 수컷 마우스.

## 한 줄 요약
만성 HFD(12주)는 불안-취약 아형의 마우스를 만들고, 이들에서 **ArcAgRP → PVNCRH → LHAGlu** 장거리 회로가 섭식 bout에 locked되어 과활성된다. 이 회로의 상류(ArcAgRP-PVNCRH) 억제는 **불안+과식을 모두** 완화하지만, 하류 **LHA의 CRHR2 신호 차단은 과식만 선택적으로** 없앤다 — 즉 기존에 알려진 섭식·스트레스 노드가 질병 맥락에서 동적으로 재결합해 anxiety-associated hyperphagia를 만든다.

## 핵심 내용

### Fig.1 — 만성 HFD는 불안-취약 아형을 만들고, 그 아형이 더 먹고 더 찐다
- 수컷 C57 마우스 **12주 HFD** → 체중 증가(F(1,26)=1155, P<0.001), 혈중 HDL-C·LDL-C·TC·TG 전부 상승(모두 P<0.001).
- 불안: EPM open-arm 시간 ↓(12주 P=0.01), OFT center 시간 ↓(P=0.02), **총 이동거리는 불변**(운동장애 아님). 혈중 **corticosterone ↑**(8·12주) = HPA축 상향.
- **비지도 계층적 군집화**(EPM open-arm 시간 Z-score 기반)로 HFD 마우스를 **anxiety-susceptible(취약) vs unsusceptible(비취약)** 두 아형으로 분리. 취약군이 **일일 섭취·체중 유의하게 더 높음**(F(1,15)=18.28; day 2–7).
- **midazolam**(항불안제, 0.2 mg/kg i.p.) 투여 → 취약군의 섭취·체중 증가가 둘 다 감소 → **불안 완화가 과식을 줄인다**(정서→섭식 인과의 약리적 증거).

### Fig.2 — ArcAgRP 뉴런은 HFD 불안·과식에 feeding-locked로 모집·필수
- HFD는 다수 뇌영역 c-Fos ↑(Arc 포함); 활성 Arc 뉴런 상당수가 **AgRP⁺**.
- Fiber photometry(AgRP-GCaMP6m, GCaMP/AgRP 공표지 87%): HFD가 **baseline AgRP 활성 ↑** + **feeding-locked 모집 ↑**(섭식 개시 때 상승→종료 후 baseline; HFD>CD, 특히 취약군).
- 화학유전 억제(hM4Di, full factorial 8군 설계로 CNO·virus 교란 배제): HFD-취약군에서 **불안 완화 + 섭취 ↓ + corticosterone ↓**.
- **상태 의존성(★)**: CD 마우스에선 AgRP 억제가 **불안을 안 만들고 섭취만 ↓**; AgRP **활성(hM3Dq)** 은 **과식만 유발·불안 무변**. → AgRP의 불안 조절 능력은 **만성 HFD 상태에서만 창발**(constitutive 아님).

### Fig.3 — ArcAgRP → PVNCRH 단일시냅스(흥분+억제 혼재) 투사
- 순행 추적(AAV-DIO-EGFP in Arc): PVN에 robust AgRP fiber; PVN mCherry⁺의 **84%가 CRH⁺**.
- 광견병 역행(CRH-Cre): Arc에서 EGFP⁺, **80%가 AgRP⁺** → ArcAgRP-PVNCRH 경로 확인.
- Optogenetics+patch(ChR2 AgRP 말단, PVN CRH 기록): **oEPSC와 oIPSC 둘 다** 유발, TTX로 소실·4-AP로 복원 = 단일시냅스. AgRP 일부가 **글루타메이트+GABA 마커 공발현(~30%)** = co-transmission 구조 기반.
- **순효과는 흥분**: AgRP 말단 광자극·AgRP 화학유전 활성 모두 **PVNCRH 활성 ↑**(patch·photometry). → 혼재 시냅스지만 회로 수준 net = PVNCRH 모집.

### Fig.4 — ArcAgRP-PVNCRH 경로가 HFD 불안·과식에 필요·충분
- Patch: 이 경로의 흥분성이 **HFD-취약군에서만** 증가(비취약군 무변).
- Projection-specific photometry·화학유전(retro-FLP in PVN + fDIO-hM4Di in Arc): 취약군에서 baseline·feeding-locked 활성 ↑; **투사 특이 억제 → 불안 ↓ + corticosterone ↓ + 섭취 ↓**.
- **Terminal-level(PVN 국소 CNO)** 억제도 체세포 억제와 동일 재현 → 곁가지/전신 효과 배제.
- 역으로 이 경로 **선택 활성 → 불안+과식 phenocopy**. ⇒ 경로가 HFD 표현형에 **필요하고 충분**.

### Fig.5 — PVNCRH → LHAGlu: 섭식-억제성 LHA^Glu를 "억제"
- PVNCRH → LHA 투사 확인; LHA mCherry⁺의 **93%가 glutamate⁺**; 역행(VgluT2-Cre)으로 PVN EGFP⁺의 86%가 CRH⁺.
- Opto+patch: PVNCRH 말단 자극이 LHA^Glu에 **oEPSC**(단일시냅스). 그러나 photometry: PVNCRH-LHA 경로 **활성화가 LHA^Glu 활성을 "감소"** 시킴(opto·화학유전 모두) → **순 억제성** 투사.
- **역설 해소(★)**: LHA^Glu는 통설상 **섭식 억제(anorexigenic)** 뉴런. HFD-취약군에서 섭식 후 LHA^Glu c-Fos **↓**. LHA^Glu 활성(hM3Dq)→HFD 섭취 ↓(불안 무변), 억제→섭취 ↑(불안 무변). ⇒ PVNCRH가 LHA^Glu를 **disinhibit→ 섭식억제 해제=과식**. LHA^Glu는 **섭식 성분만** 담당(불안 X).

### Fig.6 — PVNCRH-LHA 경로도 HFD 불안·과식에 필요(단 CRHR2 분리는 Fig에서 예고)
- Photometry: PVNCRH-LHA 흥분성이 취약군에서 ↑(feeding-locked). Projection·terminal(LHA 국소 CNO) 억제 → 불안 ↓ + corticosterone ↓ + 섭취 ↓; 활성 → 불안·과식 phenocopy.
- **CRHR2(not CRHR1)** 가 LHA^Glu에 특이 발현. LHA에 CRHR2 길항제 **Astressin 2B** 미세주입 → **HFD 과식만 ↓, 불안 무변**. VgluT2-Cre에 Cre-의존 **shRNA로 CRHR2 knockdown** → 동일(과식만 ↓). ⇒ **LHA-CRHR2 = 과식 전용 하류 effector**, 불안 축과 분리.

### Fig.7–8 — 삼중(Arc-PVN-LHA) 장거리 회로의 직접 증명과 상태-의존 커플링
- Triple retrograde·순행 tracing(retro-Cre in LHA + helper in PVN + RV; AAV2/1 anterograde 보조)으로 **Arc(AgRP)→PVN(CRH)→LHA 삼중 연결** 해부학적 확정. Arc-PVN 투사 활성이 LHA^Glu 활성을 억제함을 opto+photometry로 확인.
- 삼중 회로 특이 GCaMP(hSyn-Cre in Arc + retro-FLP in LHA + fDIO-GCaMP in PVN): baseline·**feeding-locked 활성이 HFD-취약군에서만 크게 증가**.
- Projection·terminal 억제 → 불안 ↓ + corticosterone ↓ + 섭취 ↓; 활성 → phenocopy. ⇒ **장거리 Arc-PVN-LHA 회로가 HFD 불안-과식 커플링에 필요·충분**, 비만 유지에 기여.

### Discussion·모델(Fig.9)
- **핵심 주장**: 새 회로의 "발견"이 아니라 — AgRP(섭식)·PVNCRH(스트레스)·LHAGlu(섭식억제)라는 **기성 노드가 HFD라는 질병 맥락에서 기능적으로 재결합**한다는 점이 advance. 평소 AgRP는 섭식만, HFD에서 하류 PVNCRH·LHA가 **대사·신경내분비적으로 "priming"** 되면 AgRP 활성이 스트레스 회로를 끌어들여 불안-연합 섭식을 구동(metabolic-state로 gating).
- **예상 밖**: AgRP→PVNCRH에 **단일시냅스 흥분(oEPSC)** 이 존재(AgRP=GABA성 통설과 충돌). 저자 해석 — AgRP 이질성(~30% glutamate 공발현)·co-release·BNST 억제입력 억제를 통한 net 흥분(Douglass 2023 참조)·Cl⁻ 항상성 변화 시 GABA 탈분극 등 다층 기전.
- **한계**: ① **전부 수컷**(성차 미검); ② circadian phase 직접 측정 안 함; ③ AAV2/1 anterograde의 한계(단, 광견병·opto-ephys로 교차검증); ④ 흥분/억제 혼재의 분자 기전 미규명; ⑤ emotional feeding이 병리 아닌 적응적 보상 반응일 가능성, 장기 정서 결과 미평가.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **Emotional eating의 "순수 시상하부-내" 축**: 사용자 lab의 [[concept-emotional-eating|정서적 섭식]] 모델은 HPA축(cort/CRF)·ghrelin·orexin이 **VTA→NAc 보상계**로 수렴한다고 본다. 본 논문은 **보상계를 경유하지 않는** Arc-PVN-LHA 내부 축을 제시 → 정서적 과식이 **보상-기반(VTA)** 과 **항상성-기반(시상하부 내)** 두 경로로 이중 구현될 가능성. 두 축이 LHA(또는 CRH)에서 만나는지 검증 가치.
- **[[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]] 매핑 가설**: AgRP=Need(Kim KS 2024), LHA=Motivation 통합 hub라는 틀에서, PVNCRH는 **스트레스/정서 입력을 Need-Motivation 변환에 주입하는 modulator**로 읽을 수 있다 — HFD가 이 modulator를 상시 켜 Need 신호를 정서로 오염.
- **CRHR2 = 과식 전용 창**: 불안을 건드리지 않고 과식만 줄이는 분자 표적은 사용자 lab의 **선택적 anti-hyperphagia** 약리 전략(GLP-1RA 보조 등)에 흥미로운 후보. LHA^Glu 발현이라는 점에서 [[concept-lateral-hypothalamus|LH]] 표적화 가능.
- **불안-층화(hierarchical clustering) 방법론**: "불안-취약 아형"만 표현형을 보인다는 설계는 사용자 lab의 비만 이질성([[lee-2025-hijacked-brain-modern-obesity-cue|5-type]]) 층화와 직접 호응 — HFD 반응의 개체차를 정서 축으로 나누는 틀.

## ⚠️ 위키 내 충돌·긴장 (병기 — 덮어쓰지 않음)
- **AgRP→PVNCRH "흥분" vs [[krashes-2014-an-excitatory-paraventricular-nucleus-to|Krashes 2014]]**: Krashes는 **CRH·PDYN·OXT·AVP PVH 뉴런이 AgRP에 "무연결"** 이라고 보고했고(흥분성 입력은 TRH·PACAP 뉴런), 방향은 **PVH→AgRP 흥분 + AgRP→PVH satiety GABA 억제**(상호 hunger 회로)였다. 본 논문은 **반대 방향(AgRP→PVNCRH)** 에서 **단일시냅스 oEPSC+oIPSC** 를 보고 — Krashes 틀(AgRP=GABA성, PVN^CRH는 AgRP의 흥분 표적 아님)과 **직접 긴장**. 저자도 "예상 밖"으로 인정하며 AgRP 이질성·co-release로 설명. 두 결과는 방향·맥락(기아 vs 만성 HFD)이 달라 상호배타는 아니나, **AgRP→PVNCRH 흥분성의 분자 기질은 미해결**.
- **LHA^Glu "섭식억제" 통설 vs [[korotkova-2026-balancing-acts-lateral-hypothalamic|Korotkova 2026]]·[[concept-lateral-hypothalamus|LH concept]]**: 위키의 LH 틀은 LH^Vglut2=섭식 "brake", LH^Glu→LHb=aversive로 정리한다(Stamatakis 2016). 본 논문은 그 통설을 **유지하면서도** HFD에서 PVNCRH가 LHA^Glu를 **억제→brake 해제→과식**으로 뒤집어 읽는다(LHA^Glu가 과식을 "하는" 게 아니라 "덜 막는"). [[korotkova-2026-balancing-acts-lateral-hypothalamic|Korotkova]]의 LH=hunger×anxiety×loneliness arbitration 틀과는 **다른 cell type(LepR vs Vglut2)·다른 방향**이라 직접 충돌은 아니나, LH가 불안-섭식 교차의 노드라는 점에서 **같은 무대, 다른 세포**.
- **[[barros-2026-from-diet-to-hypothalamic-dysfunction|Barros 2026]] (HFD→시상하부 기능장애)**: Barros는 HFD가 microbiota·염증·대사 재프로그래밍으로 시상하부를 손상시키는 축을 정리. 본 논문의 "HFD priming"은 그 분자 하류일 수 있으나, **본 논문은 염증·gut 축을 전혀 다루지 않고** 순수 회로 재결합으로 설명 → 두 설명이 **같은 HFD 표현형의 다른 층**(염증 vs 회로)인지 병기 필요.
- **보상계 비경유 vs [[concept-emotional-eating|emotional eating]]·[[tomiyama-2019-stress-and-obesity|Tomiyama 2019]]**: 위키의 스트레스-섭식 축은 **VTA→NAc 도파민 보상 민감화** 중심. 본 논문은 그 축을 언급·검증하지 않고 시상하부-내 회로만 제시 → 정서적 과식의 **보상계 설명과 상보/경쟁** (어느 쪽이 지배적인지, 어디서 수렴하는지 미해결).

## 관련 페이지
- [[concept-npy-agrp-neurons]] — 회로 상류. ArcAgRP가 HFD에서 섭식을 넘어 **불안**까지 구동(상태 의존)·PVNCRH로 단일시냅스 투사.
- [[concept-paraventricular-nucleus]] — PVNCRH가 **정서·과식을 함께 나르는 통합 노드**. AgRP→PVNCRH 흥분성(Krashes 틀과 긴장)·PVNCRH→LHA 억제성 투사.
- [[concept-lateral-hypothalamus]] — 하류 LHA^Glu(섭식억제)가 **과식 성분 전용**; CRHR2(not CRHR1) 발현이 과식 효과 매개.
- [[concept-arcuate-nucleus]] — ArcAgRP 모집의 출발핵.
- [[concept-emotional-eating]] — ★ 정서적 섭식의 **시상하부-내 회로 기질**(보상계 비경유 축); midazolam 실험=정서→섭식 인과.
- [[tomiyama-2019-stress-and-obesity]] — HFD→HPA축 과활성(corticosterone↑)→과식·비만 유지를 회로로 구현.
- [[concept-negative-reinforcement-hyperkatifeia]] — 불안 상태 완화를 향한 과식(음성강화) 프레임과 호응(단 본 논문은 확장편도 대신 시상하부 축).
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] — NMPU: PVNCRH를 Need-Motivation 변환의 정서 modulator로 읽는 연결 가설.
- [[krashes-2014-an-excitatory-paraventricular-nucleus-to]] — ★ **직접 긴장**: PVH-AgRP 흥분의 방향·세포 정체가 본 논문(AgRP→PVNCRH)과 반대·충돌.
- [[walker-2026-a-hypothalamic-circuit-for]] — 같은 PVH↔AgRP 무대의 **예측-hunger 축**(PVH^Sim2→AgRP). 본 논문은 정서-과식 축으로, 동일 핵의 상이한 소집단·방향.
- [[korotkova-2026-balancing-acts-lateral-hypothalamic]] — LH를 hunger×anxiety arbitration 노드로 본 틀과 **같은 무대, 다른 세포**(LepR vs Vglut2).
- [[barros-2026-from-diet-to-hypothalamic-dysfunction]] — HFD→시상하부 기능장애(염증·gut 축)와 **상보**(분자 상류 가능).
- [[concept-hedonic-devaluation]] — 만성 HFD가 보상계·ARC를 재편하는 축(본 논문 회로 축과 병치).
- [[concept-hypothalamic-obesity]] · [[concept-hypothalamic-inflammation]] — HFD priming의 대사·염증 맥락.
- [[lee-2025-hijacked-brain-modern-obesity-cue]] — 비만 이질성 층화(불안-취약 아형 설계와 호응).
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
