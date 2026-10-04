---
title: "Leptin acts via leptin receptor-expressing lateral hypothalamic neurons to modulate the mesolimbic dopamine system and suppress feeding (Leinninger 2009, Cell Metab)"
type: paper
created: 2026-10-03
updated: 2026-10-03
source: "raw/2009 Cell Metabolism. Leptin Acts via Leptin Receptor-Expressing Lateral Hypothalamic Neurons to Modulate the Mesolimbic Dopamine System and Suppress Feeding.pdf"
authors: [Gina M. Leinninger, Young-Hwan Jo, Rebecca L. Leshan, Gwendolyn W. Louis, Hongyan Yang, Jason G. Barrera, Hilary Wilson, Darren M. Opland, Miro A. Faouzi, Yusong Gong, Justin C. Jones, Christopher J. Rhodes, Streamson Chua Jr., Sabrina Diano, Tamas L. Horvath, Randy J. Seeley, Jill B. Becker, Heike Münzberg, Martin G. Myers Jr.]
year: 2009
journal: "Cell Metabolism 10(2):89–98 (2009-08-06; online 2009-08-05; 접수 2008-12-05, 수정 2009-05-27, 채택 2009-06-25); doi:10.1016/j.cmet.2009.06.011"
---

> [!takeaway] 연구 방향 관점의 핵심
> **위키의 LH^LepR 라인 전체가 출발하는 1차 원전.** Myers lab(U. Michigan)은 `Lepr^cre` 기반 리포터(LepRb^EGFP)를 새로 만들어 LHA의 LepRb 뉴런을 가시화하고 네 가지를 한 논문에서 묶었다. ① LHA LepRb는 **MCH·orexin과 전혀 겹치지 않는 별개 집단**이며 **전부 GABAergic**(Gad1^EGFP 공존)이다. ② **intra-LHA leptin은 정상 rat에서 24 h 섭식·체중을 줄인다**(0.1·0.5·1 µg 모든 용량). ③ LHA LepRb는 **VTA로 조밀하게 투사**하되 **선조체·NAc로는 투사하지 않는다**(Ad-iZ/EGFPf cre-유도 추적 + VTA fluorogold 역추적). ④ *Lep^ob/ob* 마우스에 **250 pg**(생리적 농도 근사)의 intra-LHA leptin만 주면 섭식·체중 증가가 억제되고 동측 **VTA *Th* mRNA가 ~2.5배**, **NAc 도파민 함량이 ~40%** 올라간다 — 반면 **intra-VTA leptin은 *Th*를 유의하게 바꾸지 못한다**(원문: "did not significantly alter"). 즉 "leptin → mesolimbic DA" 축의 결정적 중계는 VTA LepRb가 아니라 **LHA LepRb**라는 주장이다.
> 사용자 연구에 닿는 지점 넷. (1) [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]·[[kim-2024-normative-framework-dissociates-need|Kim 2024]]가 세운 **LH^LepR = Motivation** 회로의 해부·약리 기원이 바로 이 논문이며, "LH^LepR는 GABA"라는 위키 전제의 1차 근거다. (2) [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]] 관점에서 이 논문은 **Motivation 노드(LH^LepR)가 Pleasure/Utility 하드웨어(mesolimbic DA)의 *설정값(DA 생산 용량)*을 장기적으로 정한다**는 그림을 제시한다 — 초 단위 phasic 신호가 아니라 **tonic 용량 조절**이다. (3) **leptin 약리 ≠ 세포 특이 조작**: leptin은 LHA LepRb의 34%만 탈분극시키고 일부는 과분극시킨다. 이 이질성이 이후 20년간의 LH^LepR 부호 논쟁([[concept-lateral-hypothalamus]]의 쟁점 절)의 뿌리다. (4) 거의 인용되지 않는 핵심 단서: **VTA-투사 LHA LepRb 뉴런의 대부분은 leptin에 c-Fos로 활성화되지 않았다** — "leptin이 켜는 LH^LepR → VTA"라는 단순 도식은 원문 자체가 부정한다.

# Leptin acts via LepRb-expressing lateral hypothalamic neurons to modulate the mesolimbic dopamine system and suppress feeding (Leinninger et al. 2009)

- **저널**: Cell Metabolism 10(2):89–98 (2009-08-06 발행, 온라인 2009-08-05). 접수 2008-12-05, 수정 2009-05-27, 채택 2009-06-25. DOI: 10.1016/j.cmet.2009.06.011
- **소속**: University of Michigan, Ann Arbor — Division of Metabolism, Endocrinology & Diabetes (Internal Medicine) / Molecular & Integrative Physiology / Molecular & Behavioral Neuroscience Institute. 공동: Albert Einstein College of Medicine(Y.-H. Jo, S. Chua — 전기생리), University of Cincinnati — Dept. Psychiatry & Genome Research Institute(J.G. Barrera, H. Wilson; rat cannulation 실험은 Cincinnati IACUC 승인), University of Chicago(C.J. Rhodes), Yale(S. Diano, T.L. Horvath — Gad1^EGFP). 저자 목록상 R.J. Seeley·J.B. Becker·H. Yang은 Michigan MBNI(소속 3)로 표기된다. 교신 **Martin G. Myers Jr.** (mgmyers@umich.edu). 1저자 **Gina M. Leinninger**(현 Michigan State, LHA Nts/LepR 라인의 주인), 공저 **Heike Münzberg**(당시 Pennington으로 이동).
- **지원**: Michigan Diabetes Research and Training Center, Michigan Comprehensive Diabetes Center, ADA·AHA(Myers), NIH(Myers·Rhodes·Becker), The Obesity Society(Leinninger). leptin은 NHPP 및 Amylin Pharmaceuticals 제공.

## 한 줄 요약
LHA의 LepRb 뉴런은 MCH·orexin과 별개인 **GABAergic 집단**이고, 이 영역에 leptin을 직접 주면 섭식·체중이 줄며, 이 뉴런들은 **VTA로 투사**해 *Lep^ob/ob* 마우스의 **VTA *Th* 발현과 NAc 도파민 함량을 정상 쪽으로 복원**한다(intra-VTA leptin으로는 복원되지 않는다) — 즉 LHA LepRb가 **anorexic leptin 작용과 mesolimbic DA 계를 잇는 주요 연결**이라는 결론.

## 핵심 내용

### 배경 — 왜 LHA였나
- leptin의 대부분 작용은 CNS LepRb(long form)를 통하고(Cohen 2001; de Luca 2005), MBH("satiety center": ARC POMC·AgRP/NPY)는 **전체 LepRb 뉴런의 소수**다(Elmquist 1998; Myers 2009). MBH 특이 조작으로는 leptin 작용의 일부만 재현된다(Balthasar 2004; Dhillon 2006; van de Wall 2008). → **MBH 밖 LepRb 집단**이 필수적이라는 논증.
- leptin은 포만뿐 아니라 **음식·보상의 incentive value를 낮춘다**(Figlewicz 2006; Fulton 2000). 당시 설명은 VTA DA 뉴런의 LepRb 직접 작용(Hommel 2006; Fulton 2006; Roseberry 2007)이었다.
- LHA는 "feeding center"이면서 mesolimbic 보상 회로의 구성요소다. LHA의 알려진 orexigenic 집단은 **MCH**(→선조체)와 **orexin**(→VTA) 둘이고, leptin은 orexin의 단식 유발 활성을 억제하며 MCH·OX 발현을 낮춘다(Qu 1996; Yamanaka 2003; Segal-Lieberman 2003). 저자들의 질문: **LHA의 LepRb 뉴런은 이 둘 중 하나인가, 제3의 집단인가?**

### Figure 1 — LepRb^EGFP 리포터로 LHA LepRb 집단을 가시화
- **계통**: `Lepr^cre`(Leshan 2006, 2009) × `Gt(ROSA)26Sor^tm2Sho`(cre→EGFP; Mao 1999)의 이중 호모(이하 **LepRb^EGFP**). CNS EGFP 분포가 기존 LepRb 발현 패턴과 일치하고, **LHA에 큰 EGFP⁺ 집단**이 있다.
- 검증(leptin 5 mg/kg i.p., 2 h 후 pSTAT3-IR): **LHA pSTAT3-IR 뉴런의 81% ± 4%가 EGFP⁺**, **EGFP⁺ 뉴런의 87% ± 1%가 pSTAT3-IR**. → 리포터가 LHA LepRb의 대다수를 잡고, 그 세포들이 전신 leptin에 반응하는 **기능적 LepRb**를 갖는다.

### Figure 2 — leptin이 LHA LepRb를 직접 조절한다 (단, 이질적으로)
- **c-Fos-IR**(EGFP⁺ LHA 뉴런 중 FosIR 비율):
  - ad libitum + vehicle: **12% ± 3%**
  - 36 h 단식 + vehicle: **5% ± 1%** (p = 0.05, 감소 경향)
  - ad libitum + leptin(5 mg/kg i.p., 4 h): **41% ± 7%** (p < 0.05)
  - → 전신 leptin은 LHA LepRb의 상당 부분을 **활성화**한다. 단식은 오히려 활성을 낮추는 경향.
- **전기생리**(LepRb^EGFP 급성 절편, P28–35, current clamp, leptin 100 nM): **34%의 LHA LepRb 뉴런이 탈분극**(p < 0.05). **일부는 과분극**. 시냅스 전달 차단제(±)가 반응 세포 비율을 바꾸지 않았다 → **직접 작용**. (본문이 명시한 수치는 **34% 탈분극**뿐이고, 과분극 세포의 비율은 Table S1에만 있다 — 후속 문헌이 인용하는 "탈분극/과분극 비율" 수치의 출처가 이 표다.)
- 저자 해석: **LHA LepRb는 단일 기능 단위가 아니다.** 전기 반응이 다른 복수의 하위집단이 leptin 작용에서 서로 다른 역할을 할 수 있다. ★ 이 한 문장이 이후 LH^LepR 논쟁의 출발점이다.

### Figure 3 — intra-LHA leptin은 정상 rat의 섭식·체중을 줄인다
- 수컷 **Long-Evans rat**(250–300 g), **편측(좌측)** LHA guide cannula 26G(AP −2.30 · ML −1.80 · DV −7.80, incisor bar −0.3 mm, 내부 cannula가 1.0 mm 더 내려감). 0.2 µl를 2분간 주입, 오전 9시 투여 → 오후 1시 먹이 복귀 → **24 h** 섭식·체중 측정. 72 h 후 교차(crossover)로 군 교체.
- 용량: saline / **0.1 µg** / **0.5 µg** / **1.0 µg** recombinant mouse leptin. 용량 선택 근거 — 낮은 용량은 intra-VTA leptin 연구(Hommel 2006)와 동급, **최고 용량 1 µg은 i.c.v. 최소 유효 용량보다 낮게**(Seeley 1996) 잡아 확산에 의한 전역 효과를 배제.
- 결과: **세 용량 모두 24 h 섭식·체중을 유의하게 감소**(원문 "p < 0.05 and p < 0.01"; 그림 범례는 saline 대비 \*p < 0.05·\*\*p < 0.01, one-way ANOVA + Dunnett). cannula 위치 확인·제외 기준 적용 후 군 크기: **saline n = 50, 0.1 µg n = 16, 0.5 µg n = 16, 1 µg n = 18 rats**.
- **작용 국소성 검증**(Fig S1): 최저 용량군의 pSTAT3-IR가 **동측 LHA에 국한**되고 ARC·VTA 등 원격 영역에서는 증가하지 않았다.
- **시간 경과**: 최고 용량도 **4 h 이전에는 섭식을 유의하게 줄이지 않았다**. 저자들은 이를 leptin이 급성 신호가 아니라 **장기 에너지 상태 신호**라는 역할과 정합한다고 본다.

### Figure 4 — LHA LepRb는 MCH·orexin과 별개이고, GABAergic이다
- **비중첩**: colchicine 처리(신경펩타이드를 체세포에 농축) LepRb^EGFP 마우스에서 EGFP와 **MCH·OX의 공존이 검출되지 않았다**. 역방향 검증으로 고용량 i.c.v. leptin(**3 µg**, 1 h — 기능적 수용체를 가진 모든 뉴런에서 pSTAT3를 유도하는 조건)에서도 **MCH·OX 뉴런에 pSTAT3-IR가 없었다**.
- **신경전달물질 정체**: `Gad1^EGFP`(GAD67-GFP knock-in; Abe 2005)에서 **LHA의 pSTAT3-IR/LepRb 뉴런 전부가 EGFP⁺** → **GABAergic**. 인접 OX·MCH 뉴런은 EGFP 음성.
- 논리적 귀결(원문): orexin은 glutamatergic/흥분성(Rosin 2003)이고 leptin은 단식 시 orexin 활성을 억제한다. 반면 LHA LepRb는 **억제성**이고 leptin이 (적어도 일부를) **활성화**하며 intra-LHA leptin은 섭식을 **줄인다** → LHA LepRb와 orexigenic OX 뉴런은 섭식 조절에서 **반대 역할**과 정합.

### Figure 5 — LHA LepRb → VTA (선조체·NAc 투사는 없다)
- 도구: **Ad-iZ/EGFPf** — cre 유도성 **farnesylated EGFP**(막 국재로 매우 긴 축삭도 표지; Zylka 2005; Leshan 2009)를 발현하는 아데노바이러스. `Lepr^cre` 마우스 LHA에 정위주입(AP −1.34 · ML −1.13 · DV −5.20, 250–500 nl, 100 nl/min) 후 **5일**에 관류.
- 특이성: wild-type에서는 EGFPf 발현 없음. `Lepr^cre`에서도 MCH·OX 뉴런에는 EGFPf가 없음(Fig S2).
- 분석 대상은 **주입 부위와 EGFP⁺ 체세포가 LHA의 dorsal perifornical 영역에 국한된 n = 11 마리**.
- 결과: **동측 VTA에 조밀한 EGFPf 투사**. **DMH·ARC 등 다른 시상하부 영역에는 거의/전혀 없음**. LHA 자체에는 다량의 국소 신경돌기. **LHA보다 caudal한 다른 영역들도 일부 투사를 받았으나**, **선조체(NAc 포함)와 그 밖의 rostral 영역으로는 투사가 관찰되지 않았다**(Fig S2).
- **역추적 검증**(Fig S3): LepRb^EGFP 마우스 VTA에 **fluorogold(FG)** → LHA의 많은 뉴런(LepRb⁺ 포함)이 표지. 반면 **ARC 등 다른 시상하부 LepRb 뉴런은 VTA로부터 FG를 축적하지 않았다** → VTA 투사는 시상하부 LepRb 집단 중 **LHA의 고유 속성**.
- ★ **거의 인용되지 않는 단서**(Fig S3): FG로 표지된(= VTA 투사) EGFP 뉴런의 **대부분은 leptin 유발 c-Fos-IR를 보이지 않았고**, 강한 c-Fos는 **FG 비표지 EGFP 뉴런**에서 나왔다. → **VTA로 투사하는 LHA LepRb 뉴런의 다수는 leptin이 활성화하는 그 세포가 아니다.**

### Figure 6 — *Lep^ob/ob*에서 intra-LHA leptin이 VTA *Th*·NAc DA를 복원 (intra-VTA는 아님)
- 설계 근거: leptin-replete 동물에서는 외인성 leptin 효과가 작지만, **leptin 결핍 모델에서는 극적으로 드러난다**(예: 정상 급식 동물에서는 leptin이 시상하부 *Pomc*를 올리지 않지만 *Lep^ob/ob*에서는 저하된 *Pomc*를 복원; Schwartz 1997).
- **(A) 기저선**: *Lep^ob/ob*의 VTA *Th* mRNA가 WT C57BL/6보다 낮다(p < 0.05; 2^−ΔΔCt, *Gapdh* 정규화) — Fulton 2006과 정합.
- **모델·용량**: 수컷 *Lep^ob/ob* 12주령, **49–61 g**, 총 20마리에 편측 LHA cannula. **250 nl × 0.001 ng/nl = 0.25 ng(250 pg)** 를 **12 h마다 24 h 동안** 투여 — **LHA 분포용적에서 순환 leptin 농도를 근사하도록 설계한 극소량**. PBS vs leptin. pSTAT3는 **cannula 동측 LHA에만** 유도되고 MBH에는 없었다(Fig S4). 제외 기준(위치 오류, 기저 섭식·체중 증가 실패, LHA 밖 pSTAT3) 적용 후 **PBS n = 5, leptin n = 6**.
- **(C, D) 에너지 균형**: intra-LHA leptin이 24 h 섭식을 줄이고 체중 증가를 억제(**p < 0.05**). 24 h보다 짧은 시점에서는 유의한 섭식 변화가 없었다(장기 신호와 정합).
- **(E, F) mesolimbic DA** — 편측 투사·편측 투여를 이용한 **within-mouse 동측 vs 반측** 비교(동물 간 변이 제거):
  - **VTA *Th* mRNA: 동측이 약 2.5배 ↑** (p < 0.05). PBS군에서는 동측이 오히려 약간 낮아지는 경향(cannula에 의한 LHA→VTA 경로 경미 손상 가능성).
  - **NAc 도파민 함량(HPLC-ECD): 동측이 약 40% ↑** (본문 p < 0.05; Fig 6E·F 범례에 \*p < 0.05·\*\*p < 0.01이 함께 표기됨).
  - 이 ~2.5배 증가 폭은 **WT vs *Lep^ob/ob*의 전체 *Th* 차이와 비슷한 크기**다.
- **(G) 결정적 음성 대조**: 같은 프로토콜로 **VTA에 직접** leptin을 주면(VTA cannula AP −3.2 · ML −0.5 · DV −4.3; PBS n = 7, leptin n = 9 마리) **VTA *Th* mRNA가 유의하게 변하지 않았다**. → *Th*·NAc DA 복원은 **intra-LHA leptin에 특이적**이며 VTA LepRb 직접 작용으로는 재현되지 않는다.

### Discussion — 저자들이 스스로 남긴 긴장과 한정
- **"DA↑인데 섭식↓"**: NAc DA 방출이 섭식을 촉진한다는 통념과 어긋난다. 저자들의 반박 — 코카인·암페타민도 NAc 세포외 DA를 올리면서 섭식을 **둔화**시킨다. mesolimbic DA는 섭식만이 아니라 **여러 행동의 incentive value**를 조절하므로 leptin은 섭식을 부호화하는 성분과 생식 등 다른 행동을 부호화하는 성분을 **다르게** 조절할 것으로 예측된다. 또한 DA 함량 변화가 **활동(locomotion)** 도 바꿀 수 있는데 이 실험에서는 측정하지 않았다.
- **함량(content) vs 방출(release)**: 본 논문이 보인 것은 **DA 생산 능력(Th)과 조직 함량**이다. 방출은 다르게 조절될 수 있다. 저자들은 **함량의 tonic 조절이 leptin의 만성·tonic 성격에 더 맞고**, 영양 상태 변화마다 급격한 mesolimbic DA 변동(남용 약물에서 보이는 식의 장기 변형)을 막는 완충 기능일 수 있다고 본다.
- **LepRb 집단별 분업**: MBH LepRb = 포만·에너지 소비·혈당, LHA LepRb = mesolimbic DA. VTA LepRb도 기여하지만(Hommel 2006에서 VTA leptin → DA 뉴런 활성↓·섭식↓), **ob/ob의 *Th* 복원은 LHA 경유**다.
- **LHA LepRb 내부 하위집단**: 전기 반응(탈분극 vs 과분극)과 투사 표적(VTA vs 국소)으로 나뉠 수 있다. **일부만 VTA로 투사**하므로 나머지는 **LHA 국소에서 OX·MCH 뉴런을 조절**할 수 있다(둘 다 leptin에 억제됨; Jo 2005; Yamanaka 2003).
- **열린 과제**: 배측 선조체 DA의 섭식 역할(Palmiter 2007)에서 leptin의 몫은 미탐색. 비만 상태에서 이 뉴런들의 탈조절 여부가 향후 핵심.

### 방법 메모(재현에 필요한 수치)
- 전기생리 절편 200 µm, 실온, aCSF 2 ml/min. 막전위는 기록 개시 5분 후와 leptin 최대 반응 시점에서 측정. two-group 비교는 Student *t*, 다중비교는 one-way ANOVA + posttest(Dunnett/Bonferroni).
- qPCR: 미세해부 VTA → TRIzol → **RNA 1 µg**을 cDNA로 역전사(SuperScript First-Strand), *Th*·*Gapdh* triplicate(ABI 7500), 2^−ΔΔCt를 **각 샘플의 반측 ΔCt로 정규화**(반측 = 1). *Th* 분석에서 샘플 1개 소실 → PBS n = 5, leptin n = 6.
- NAc DA: 10% TCA/0.1% sodium bisulfite 88 µl에 초음파 분쇄 → iso-octane 75 µl 추출 → HPLC-ECD(Coulochem II), 내부표준 dihydroxybenzylamine 200 mg/l(Hu & Becker 2003). 동측/반측 모두 반측 값으로 정규화.
- 항체: GFP 1:1000(Abcam), Orexin A 1:2000 + Orexin B 1:30(Calbiochem), MCH 1:200(Phoenix). DAB pSTAT3/c-Fos는 Photoshop pseudocolor.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **NMPU에서 "Motivation 노드가 Pleasure 하드웨어의 용량을 설정한다"**: [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]]와 [[kim-2024-normative-framework-dissociates-need|Kim 2024]]는 LH^LepR를 **Motivation(누적된 need)** 로 둔다. 본 논문은 같은 세포가 **mesolimbic DA의 생산 용량(*Th*·DA 함량)** 을 24 h 시간척도로 바꾼다고 보고한다. 즉 Motivation 노드의 출력이 초 단위 phasic DA가 아니라 **Pleasure/Utility 회로의 gain 설정값**으로도 작동할 수 있다 — NMPU에 **"상태 변수가 하류 회로의 파라미터를 느리게 재설정한다"** 는 층을 추가하는 가설. 검증: LH^LepR 광·화학유전 조작을 24 h–수일 유지한 뒤 VTA *Th*·NAc DA 함량·GRAB-DA 동역학을 재는 설계(사용자 lab의 LH^LepR 도구로 바로 가능).
- **[[gordon-2026-lateral-hypothalamic-control-of|Gordon 2026]]과의 2단 구조**: Gordon 2026은 LH^GABA/LH^Glut **비율**이 선조체 DA를 **초 단위 공간 지형**으로 배치한다고 본다. 본 논문은 LH^LepR(GABA 아집단) leptin 작용이 **같은 계의 장기 용량**을 정한다고 본다. 두 결과를 합치면 **"느린 용량 설정(leptin→LH^LepR→VTA *Th*) × 빠른 분배(LHA^Ratio→subregion DA)"** 라는 2단 제어 가설이 된다. 예측: *Lep^ob/ob* 또는 LH Lepr knockdown에서 Gordon식 DA 지형의 **진폭만 축소되고 공간 배열은 유지**되어야 한다.
- **[[siemian-2021-lateral-hypothalamic-lepr-neurons|Siemian 2021]]의 "LH^LepR→VTA 억제가 학습을 강화"와의 접점**: 본 논문의 ★단서(VTA-투사 LHA LepRb는 leptin에 c-Fos 음성)를 대입하면, **leptin이 켜는 LepRb 하위집단과 VTA로 교사 신호를 보내는 하위집단이 서로 다른 세포일 가능성**이 생긴다. 그렇다면 NMPU의 **Motivation(leptin 반응성 국소 집단)** 과 **Utility 되먹임(VTA 투사 집단)** 이 같은 분자 표지 안에서 **투사별로 분업**한다는 가설이 된다. 검증: Lepr^cre + VTA retro-Cre(또는 projection-specific pSTAT3/Fos 이중 표지)로 **leptin 반응 × VTA 투사** 2×2 분류.
- **ob/ob 복원 실험의 임상 번역**: 250 pg라는 **생리적 농도 근사 용량**으로 effect가 나온다는 점은, 인간 leptin 결핍(CLD·lipodystrophy)에서 metreleptin이 극적인 반면 일반 비만에서 무효라는 [[concept-leptin]]의 핵심 비대칭과 같은 논리 구조다. **"leptin은 결핍 상태에서만 작동하는 허용적 호르몬"** 이라는 해석의 회로 수준 실례로 인용할 수 있다.
- **LH 국소 leptin 저항 모델과의 연결**: [[shin-2023-early-adversity-promotes-binge-like-eating|Shin 2023]]은 초기역경이 **LH에서만** Lepr를 내려 국소 leptin 저항을 만든다고 보고했다. 본 논문의 회로를 대입하면 그 결과는 **LHA→VTA *Th* 설정값의 저하**로 이어져야 한다 — ELT 모델에서 VTA *Th*·NAc DA 함량을 재는 것이 직접 검증이다(원문은 vlPAG 분지만 다뤘다).
- **DBS·유전자치료 표적 해석**: [[ha-2024-hypothalamic-neuronal-activation-non-human|Ha 2024]]의 NHP LHA 조작이나 LHA DBS는 LepRb·OX·MCH를 동시에 건드린다. 본 논문은 이 세 집단이 **상호 배타적**이고 부호가 반대일 수 있음을 처음 보였으므로, coarse 자극의 결과 비일관성([[rossi-2023-control-of-energy-homeostasis|Rossi 2023]]의 논증)에 대한 1차 해부학적 근거가 된다.

## ⚠️ 위키 내 충돌·긴장 (병기 — 덮어쓰지 않음)
- **"LH^LepR는 (거의) 전부 GABAergic" vs glutamatergic LepR 축 — [[rossi-2021-transcriptional-and-functional-divergence]]**: 본 논문은 Gad1^EGFP에서 **LHA pSTAT3/LepRb 뉴런 전부가 GAD67⁺**라고 보고한다(정성 공존 분석). 반면 Rossi 2021은 **LHA^Vglut2 투사 뉴런 일부에 *Lepr* mRNA가 있고 LHb 투사에서 그 비율이 유의하게 높다**(X² = 121.67, p < 0.0001)고 보고하며, leptin이 LHb 투사와 VTA 투사 뉴런의 sucrose 반응을 **반대 부호로** 바꾼다(interaction F(1,370) = 63.99, p = 1.6e-14). 방법이 다르다(단백 수준 pSTAT3 공존 vs mRNA 검출; 2009년 항체·리포터 감도 한계). **"대다수 GABA + 소수 glutamatergic"** 로 병기해야 하며, 본 논문의 "전부"를 절대 수치로 인용하면 안 된다. 사용자 lab [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]의 "LH^LepR 92%가 GABA"(scRNA-seq 기반) 수치와도 구분할 것.
- **intra-LHA leptin(섭식↓) vs 세포 특이 LH^LepR 조작의 부호 불일치 — [[concept-lateral-hypothalamus]] 쟁점 절 · [[lee-2023-lateral-hypothalamic-leptin-receptor]] · [[siemian-2021-lateral-hypothalamic-lepr-neurons]] · [[de-vrind-2019-effects-of-gaba-and]] · [[petzold-2023-complementary-lateral-hypothalamic-populations]]**: 본 논문의 결과는 **leptin 약리(수용체 작용)** 이고, LepRb 세포 집단 전체의 활성 조작이 아니다. 같은 집단을 세포 특이로 조작하면 결과가 갈린다 — Lee 2023(phase-isolated·포만 수컷) **섭취↑**, Siemian 2021(ablation·opto·chemo) **섭취 무변**, de Vrind 2019(hM3Dq·포만) **섭취↓·운동↑·체온↑**, Petzold 2023(급성 제한 직후 다중자극) **섭취↓**. 본 논문 자체가 그 원인을 제공한다: **leptin은 LHA LepRb의 34%만 탈분극시키고 일부는 과분극시킨다.** Siemian 2021은 바로 이 모순을 자신들의 출발점으로 명시한다. → "Leinninger 2009 = LH^LepR 활성화가 섭식을 줄인다"로 환원 인용하면 안 된다(원문은 **수용체 약리**의 결과다).
- **"mesolimbic DA↑ = 섭식·wanting↑" 프레임 — [[concept-dopamine-reward-system]] · [[murray-2014-hormonal-and-neural-mechanisms]] · [[gordon-2026-lateral-hypothalamic-control-of]]**: 위키는 대체로 NAc DA를 섭식 동기/개시 강화 신호로 기술하고, Murray 2014는 "leptin이 VTA DA 발화·food cue 보상반응을 **억제**"한다고 정리한다. 본 논문은 거꾸로 leptin이 **VTA *Th*·NAc DA 함량을 올리면서 섭식을 줄인다**. 저자들 스스로 모순을 인정하고 **①함량 vs 방출, ②행동별 incentive 분해**로 해소를 시도한다. **"DA 생산 용량(tonic)"과 "DA 방출·phasic 신호"는 다른 변수**로 병기할 것 — Gordon 2026의 "DA = 섭취 개시 강화"는 **초 단위 방출** 층위다.
- **leptin의 mesolimbic 작용점: VTA vs LHA — Hommel 2006 / Fulton 2006 계열**: 본 논문의 Fig 6G는 **intra-VTA leptin이 VTA *Th*를 바꾸지 못한다**는 음성 결과다. 반면 Hommel 2006(VTA LepRb knockdown → 섭식↑)·Fulton 2006은 VTA 직접 작용을 지지한다. 본 논문의 결론은 "VTA LepRb가 무용"이 아니라 ***Th*·DA 함량이라는 특정 종말점은 LHA 경유**라는 한정이다. ⚠️ 두 작용점은 **종말점(행동 vs 유전자 발현)이 다른 실험**이므로 양립 가능하다 — 위키에서 "leptin의 mesolimbic 작용점"을 한쪽으로 단정하지 말 것.
- **LHA LepRb → NAc 직접 투사 부재 vs LH→선조체·septum 투사 서술**: 본 논문은 **선조체(NAc 포함)로의 LepRb 투사를 관찰하지 못했다**(MCH는 선조체로 투사). 반면 위키의 LH 출력 서술에는 LHA^Vgat→[[concept-lateral-septum|DLS^Pdyn]]([[concept-lateral-hypothalamus]] 참조) 등 전방·측방 투사가 있다. ⚠️ 본 논문의 추적은 **dorsal perifornical LHA에 국한된 n=11** 이고 아데노바이러스 5일 추적이므로, **아영역·시간 한계가 있는 음성 결과**로 병기해야 한다(LepRb 전체의 투사 지도가 아니다).
- **"LH LepR·GABA 모두 PAG로 강하게 투사(Leinninger 2009)" 인용 — [[de-vrind-2019-effects-of-gaba-and]]**: de Vrind 2019는 LH^LepR·LH^Vgat의 체온↑ 효과에 대해 **PAG 경유 가설**을 세우며 본 논문을 근거로 든다. ⚠️ 본 논문 **본문이 명시적으로 이름 붙인 조밀 표적은 VTA 하나**이고, 그 밖에는 "LHA보다 caudal한 영역 일부가 투사를 받았다"는 서술과 보충 그림(Fig S2)만 있다. PAG 특정은 보충자료·후속 문헌(Venner 2016 등) 수준이므로, 본 논문을 "PAG 투사의 1차 근거"로 쓸 때는 **본문 아닌 보충 근거**임을 밝혀야 한다.
- **단식이 LHA LepRb Fos를 낮춘다(12%→5%)** vs **LH^LepR = hunger-gated seeking driver** — [[lee-2023-lateral-hypothalamic-leptin-receptor]] · [[kim-2024-normative-framework-dissociates-need]]: 사용자 lab은 단식 상태에서 **NPY 탈억제로 LH^LepR가 cue에 반응 가능**해진다고 본다(Lee 2023)·LH^LepR 활성이 Motivation 누적을 따른다고 본다(Kim 2024). 본 논문의 36 h 단식 c-Fos는 오히려 **감소 경향**(p = 0.05)이다. ⚠️ 측정 변수가 다르다 — 본 논문은 **cue·섭식 사건 없는 상태의 정적 c-Fos**, 사용자 lab은 **cue·seeking 사건 시점의 Ca²⁺ 동역학**이다. "단식이 LH^LepR를 tonic하게 켠다"는 서술로 쓰면 안 되고, **tonic 활성 ≠ event 반응성**으로 병기해야 한다.

## 관련 페이지
- [[concept-leptin]] — leptin의 LH 직접 작용점을 세운 1차 원전. "결핍 상태에서만 강하게 작동"의 회로 수준 실례(250 pg로 ob/ob 복원).
- [[concept-lateral-hypothalamus]] — 개념 hub. LHA LepRb = MCH·OX와 별개의 GABA 집단 / VTA 투사 / LH^LepR 부호 쟁점의 뿌리.
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] — 사용자 lab LH^LepR 원저. 본 논문이 세운 "LH^LepR = GABA·VTA 투사" 해부 위에 seeking/consummatory 분리를 올렸다. ⚠️ 그 페이지가 본 논문을 "leptin 후 섭식 감소"로 인용하는 맥락과 **수용체 약리 vs 세포 조작**의 구분.
- [[kim-2024-normative-framework-dissociates-need]] · [[kim-2024-unified-theoretical-framework-underlying-regulation]] · [[concept-need-motivation-pleasure-utility]] — LH^LepR = Motivation. 본 논문은 그 노드가 mesolimbic DA의 **장기 용량(Th·DA 함량)** 을 정한다는 축을 더한다(연결 가설).
- [[siemian-2021-lateral-hypothalamic-lepr-neurons]] — 본 논문의 **leptin 반응 이질성(34% 탈분극·일부 과분극)** 을 출발점으로 삼아 세포 특이 조작으로 넘어간 후속. LH^LepR→VTA 억제가 학습을 강화.
- [[de-vrind-2019-effects-of-gaba-and]] — 본 논문을 LH^LepR·GABA 공존·PAG 투사·섭식↓의 근거로 다수 인용. ⚠️ PAG 특정은 본문 아닌 보충 근거.
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — 사용자 lab LH 리뷰. Lepr 비율·아영역·phase 표의 가장 이른 1차 출처 중 하나.
- [[rossi-2021-transcriptional-and-functional-divergence]] — ⚠️ "LepRb는 전부 GABA"에 **소수 glutamatergic LepR 축**을 병기해야 하는 상대 근거(Neuron 2021, Stuber lab).
- [[rossi-2018-overlapping-brain-circuits-for]] — LHA LepR 부분집합의 VTA 투사·DA 영향을 본 논문으로 인용하는 Stuber lab 리뷰.
- [[stuber-2016-lateral-hypothalamic-circuits-for]] — LHA 전기자극 보상의 **leptin 민감성**(Fulton 2000, 2006) 서술에 세포타입 기반을 제공하는 1차 데이터.
- [[gordon-2026-lateral-hypothalamic-control-of]] — LH→선조체 DA 지형(초 단위 분배). 본 논문의 **장기 용량 설정**과 2단 제어 가설.
- [[grove-2022-dopamine-subsystems-track-internal]] — LH^GABA→VTA DA가 내부 상태를 추적하는 정방향 축. 본 논문이 처음 보인 LHA LepRb→VTA 해부의 기능적 후속 계열.
- [[concept-dopamine-reward-system]] — ⚠️ "DA↑ = 섭식↑" 프레임과의 긴장(DA 함량 vs 방출).
- [[murray-2014-hormonal-and-neural-mechanisms]] — leptin이 VTA·LHA를 통해 TH·보상 반응을 조절한다는 리뷰 서술의 1차 근거. ⚠️ 방향(억제 vs Th↑) 병기.
- [[shin-2023-early-adversity-promotes-binge-like-eating]] — LH 국소 leptin 저항 모델. 본 논문 회로를 대입하면 VTA *Th* 설정값 저하를 예측(연결 가설).
- [[concept-orexin-neurons]] — 본 논문이 LepRb와 **완전 비중첩**(colchicine·고용량 icv leptin 이중 검증)을 보인 집단. leptin은 OX를 억제, LepRb(GABA)는 활성화 → 반대 역할.
- [[petzold-2023-complementary-lateral-hypothalamic-populations]] — 같은 LH^LepR의 세포 특이 활성이 섭식을 **억제**. 본 논문 약리 결과와 부호는 같지만 조작 층위가 다름.
- [[rossi-2023-control-of-energy-homeostasis]] — LHA 세포타입 taxonomy. coarse 조작 비일관성의 해부학적 근거로 본 논문의 상호 배타적 3집단(LepRb·OX·MCH).
- [[concept-neurotensin]] — 1저자 Leinninger가 이후 전개한 LHA Nts/LepR 하위집단 라인(Leinninger 2011)의 출발점.
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
- [[leinninger-2011-leptin-action-via-neurotensin]] — **직계 후속**(같은 1저자·교신, Cell Metab 2011). 본 논문의 LHA LepRb 집단에 **분자 손잡이(Nts)** 를 달고(LHA LepRb의 약 60%가 Nts⁺; leptin이 Nts 아집단의 **62%(8/13)** 를 탈분극 — 본 논문 전체 34%보다 높다), `Nts-ires-Cre`로 **Nts 뉴런 한정 LepRb 결손(Nts-LepRbKO)** 을 만들어 조기 비만·운동량↓·단식성 OX 활성화 소실을 보였다. ⚠️ **본 논문의 VTA *Th*(~2.5배)·NAc DA 함량(~40%)은 그 생리적 KO에서 재현되지 않는다**(둘 다 불변; 대조 n=12, KO n=15) — 저자들 스스로 ob/ob의 DA 저장 변화가 **만성 결핍의 보상 반응**일 수 있다고 물러서고, 종말점을 **NAc DAT 기능(유발 DA 진폭↓·t₁ᐟ₂↑)** 으로 옮긴다. "leptin → DA 생산 용량"을 인용할 때 반드시 병기.
- [[bonnavion-2016-hubs-and-spokes-of]] — 본 원전을 "세 번째 LHA 집단(LepRb/Nts/Gal/MC4R)" 틀로 종합한 리뷰. LHA^LepR→Hcrt 30% 접촉·27.5% GABA_A IPSC로 leptin의 Hcrt 억제를 설명 (de Lecea·Jackson, J Physiol 2016).
- [[yamanaka-2003-hypothalamic-orexin-neurons-regulate]] — ⚠️ 본 논문 Discussion이 "leptin이 OX를 억제한다"고 인용한 **Yamanaka 2003의 1차 자료**(Neuron 2003). 그쪽은 시냅스와 분리한 orexin/EGFP 뉴런의 **7/9가 leptin 10 nM에 과분극**(−47.6→−62.1 mV)하고 TTX 절편에서도 용량 의존 과분극을 보여 **직접 작용**을 주장한다(Håkansson 1999의 OX 내 LepR·STAT3 면역반응 인용). 본 논문의 "OX에 LepRb^EGFP·pSTAT3 없음 → 간접 효과"와 **정면 긴장**이다. 층위가 달라 병기한다: **청소년(3–4주령) 해리 세포의 급성 막전위** vs **성체 리포터·pSTAT3(STAT3 경로)**. 또 그쪽은 고혈당 자체가 OX를 누르므로 *ob/ob*의 OX 저발현은 leptin 결핍보다 **혈당 효과**일 수 있다고 본다.
