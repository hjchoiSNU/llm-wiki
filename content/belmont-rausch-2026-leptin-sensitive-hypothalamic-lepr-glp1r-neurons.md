---
title: "Leptin-sensitive hypothalamic Lepr+/Glp1r+ neurons limit hyperphagia and weight gain in diet-induced obesity (Belmont-Rausch et al. 2026, EMBO J)"
type: paper
created: 2026-10-25
updated: 2026-10-25
source: "raw/2026 EMBO J. Leptin-sensitive hypothalamic Lepr-Glp1r neurons limit hyperphagia and weight gain in diet-induced obesity.pdf"
authors: [Dylan M Belmont-Rausch, Benedicte Schultz Kapel, Abigail J Tomlinson, Chao Ding, Allison M Duensing, Bernd Coester, Cecilie Vad Mathiesen, Leonie Cabot, Jenny M Brown, Charlotte Høy Kruse, Shad Hassan, Elizabeth Heaton, Christoffer Clemmensen, Michael W Schwartz, Henning Fenselau, Martin G Myers Jr, Tune H Pers]
year: 2026
journal: "The EMBO Journal (2026). DOI 10.1038/s44318-026-00914-w · Received 6 May 2026 / Revised 18 Aug 2026 / Accepted 4 Sep 2026 · Open Access (CC BY 4.0)"
lab: "Novo Nordisk Foundation CBMR, University of Copenhagen (공동 교신 Tune H Pers) × Molecular & Integrative Physiology/Internal Medicine, University of Michigan (공동 교신 [[person-fenselau-henning|—]] 아님: Martin G Myers Jr) × MPI for Metabolism Research, Cologne ([[person-fenselau-henning|Henning Fenselau]]) × UW Seattle (Michael W Schwartz). Belmont-Rausch/Kapel/Tomlinson 공동 1저자(Kapel·Tomlinson 동등)"
---

> [!takeaway] 연구 방향 관점의 핵심
> **"비만에서 렙틴이 안 듣는다"는 통념을 세포 수준에서 재정의** — DIO에서 대부분 Lepr 뉴런은 LepR 신호를 *늘리지 못할* 뿐이고, **ventral DMH–caudal ARC에 걸친 단 하나의 Lepr/Glp1r 집단**만 leptin 민감성을 유지해 pSTAT3⁺ 세포의 60% 이상을 차지하고 [[concept-npy-agrp-neurons|AgRP]]를 긴장성 억제한다. 이 집단에서만 Lepr를 지우면 **HFD 초기 과식이 정상화되지 않고**(7일, 체중 ↑), 비만에서 사라졌던 **단식·ghrelin 과식 반응이 되살아나며**, 뜻밖에 **ARC microglia 수도 줄어든다**(염증이 식이가 아니라 leptin 작용의 산물). → 사용자 lab에는 [[rupp-2023-suppression-of-food-intake-by|Rupp 2023]]·[[kim-2024-glp-1-increases-preingestive-satiation|Kim 2024 Science]]가 지목한 **DMH LepR^Glp1r/GLP-1R 세포가 "비만에서 마지막까지 남는 렙틴 센서"일 가능성**과, defended body weight의 brake를 세포 단위로 집는 표적 가설을 준다.

# Leptin-sensitive hypothalamic Lepr+/Glp1r+ neurons limit hyperphagia and weight gain in diet-induced obesity (Belmont-Rausch et al. 2026)

## 한 줄 요약
공간전사체(Xenium + 동일 절편 pSTAT3)와 snRNA-seq로, DIO 마우스에서 LepR 신호가 *증가*하는 시상하부 뉴런은 사실상 **Lepr/Glp1r 공발현 GABA성 집단 하나뿐**임을 보이고, 이 집단에서만 Lepr를 조건부 삭제해 **DIO의 과식 제한·Agrp 탈감작·시상하부 microgliosis가 모두 "비만 자체"가 아니라 이 회로를 통한 지속적 leptin 작용의 결과**임을 입증한 논문.

## 핵심 내용

### 배경
- 비만은 leptin을 만성적으로 높이면서 외인성 leptin의 식욕 억제 효과를 떨어뜨린다('leptin resistance'). 반면 leptin 신호를 차단하면 DIO 동물의 과식·체중 증가는 **악화**되고(Pelleymounter 1995; Friedman 2016), DIO 마우스는 내인성 leptin 작용을 유지한다(Ottaway 2015) → **"비만에서도 leptin에 반응해 과식을 억제하는 특정 뉴런 집단이 있는가"** 가 미해결.
- 정식 표적인 ARC Agrp/Npy·Pomc는 DIO에서 leptin 직접 작용에 refractory(Tan 2025; Enriori 2007). 반면 [[concept-dorsomedial-hypothalamus|DMH]] 일부 Lepr 집단은 비만에서도 반응(Simonds 2014; Enriori 2011), 그리고 GABA성 Lepr/Glp1r 뉴런이 Agrp에 투사·억제하며(Webster 2024) chow 급이 마우스의 체중 조절에 필요하다(Xu 2018) — 단 **비만에서의 기능은 미상**.
- 가설: 이 뉴런이 leptin 반응성을 유지해 Agrp를 긴장성으로 억제하고 비만에서 과식을 줄인다.

### 방법 (요약)
- **공간전사체 + pSTAT3**: custom 300-gene Xenium 패널, 동일 절편에 pSTAT3 면역형광. >312,000 시상하부 세포, chow vs DIO(15주 HFD) 각 **n = 3마리(총 6), 마우스당 2–3 절편**. 뉴런 17집단 중 기존 보고된 Lepr 집단 7개 식별.
- **snRNA-seq(영양상태)**: >40,000 MBH 뉴런 핵(핵당 평균 12,401 transcripts). chow n = 7, 밤샘 단식 n = 3, 단식 후 **90분** 재급식 n = 4, DIO(15주 HFD) n = 8. 분석: scDist(전사체 거리), **LGS**(leptin gene signature — 독립 leptin 처치 데이터셋 3종에서 MINT-sPLS-DA로 도출; Socs3·Etv6·Atf3 등), edgeR/limma-voom pseudobulk, reference PCA projection.
- **snRNA-seq(급성 leptin)**: 야생형에 **leptin 3 mg/kg IP**(vehicle = 20 mM Tris-HCl), **1·3·6·24 h** 후 희생, 시점·군당 n = 4–6, 총 >100,000 핵. 1·3 h 군은 주사 전 2 h 절식.
- **마우스**: `Lepr^flox` × `Glp1r-ires-Cre` = **LeprGlp1rKO**. 역행 rabies 2종(`LeprCre-sun1Gfp;NpyFlp` / `AgrpCre;Glp1rFlp-TDT`). DREADD는 **Cre+Dre 교차**(`Glp1r-ires-Cre;Trh-p2a-Dre` + AAV1/2-FLEX-FREX-hM3Dq, caudal ARC/ventral DMH 단측 주입, 4주 후 행동) — **수컷만**.
- ⚠️ 식이가 군마다 다르다: 야생형 DIO는 **58 kcal% fat + sucrose**(D12331i), LeprGlp1rKO·대조는 **60 kcal% fat**(D12492). chow도 코호트별로 Altromin 1310 / Purina 5LOD / ssniff V1154.

### Result 1 — DIO의 pSTAT3는 Lepr/Glp1r 집단에 몰려 있다
- 전체 Lepr 뉴런 중 pSTAT3-IR: DIO **4.45 ± 0.65%** vs chow **0.47 ± 0.2%**, P < 0.001(이항 GLMM, 동물 random effect) = 저자 표현 "거의 10배".
- 이 증가는 거의 전적으로 Lepr/Glp1r 집단: **21.1 ± 1.1% vs 0.33 ± 0.2%**, P < 1 × 10⁻¹⁰ → 저자는 ">20배"로 기술(수치 비는 더 크다; 하한 표현으로 읽을 것). DIO에서 pSTAT3⁺ Lepr 뉴런의 **60% 초과**를 이 집단이 차지. 정식 ARC 표적(Agrp·Pomc)은 소폭 증가에 그침.
- 이 집단은 **ventral DMH와 caudal ARC에 걸친 큰 GABA성 Glp1r 집단**이며, label transfer로 기존의 **Lepr/Glp1r/Bnc2/Trh/Cxcl12 공발현 뉴런**(Rupp 2023, Webster 2024, Tan 2024)과 대응(Rupp 참조계의 `L12.Glp1r/Ebf1`).
- DIO는 이 세포에서 정식 LepR 표적(Socs3, Nlrc5, Sbno2, Atf3)과 활성 연관 IEG(Junb, Vgf)를 함께 올린다 — **Socs3가 강하게 유도되는데도 전사 반응이 꺼지지 않는다**는 점을 저자가 강조.

### Result 2 — 영양상태 스펙트럼 전체를 양방향으로 추적하는 유일한 집단
- scDist: 대부분 집단은 단식에 강하게 반응하나, **단식과 DIO 양쪽에 비슷하게 강한 반응**을 보이는 것은 Lepr/Glp1r뿐.
- LGS: DIO에서 Lepr/Glp1r(일부 Tbx19·Irx3/5)만 유의 증가(Chow vs HFD **P = 2.8 × 10⁻⁴**, Refeed vs Chow P = 2.1 × 10⁻³, Fasting vs Refeed P = 0.084), 단식에서는 Lepr/Glp1r·Pomc·Tbx19가 감소(POMC Refeed vs Chow P = 7.0 × 10⁻⁴). **AgRP 뉴런은 어떤 비교도 유의하지 않음.**
- 결정적 프레이밍: **DIO에서 LGS가 감소한 Lepr 집단은 하나도 없다** → DIO는 LepR 신호를 *없애는* 것이 아니라, 대부분의 Lepr 세포형이 비만에서 LepR 신호를 **늘리지 못하는** 것.
- Lepr/Glp1r의 식이 조절 유전자 **963개**가 일관된 프로그램을 이룸: 단식에서 오르는 유전자는 DIO에서 내리는 **거울상 패턴**(Pearson r = −0.35, P = 1.65 × 10⁻²⁸)이며 Agrp·Pomc에는 없다. 활성(Fos, Vgf, Sv2c)·사이토카인 신호(Stat3, Cxcl12, Socs3)는 단식→chow→DIO로 증가, GABA 수용체 subunit은 반대 방향(Gabra3/4/5 및 Gabrb1–b3). → 저자 해석: **지방량이 늘수록 더 활동적이고 억제 입력에 덜 민감**해진다.
  - ⚠️ 본문은 Gabrb1–b3을 "all three GABA**B** subunits"로 적는데 그림(Fig 2E, 3C) 주석은 단지 "GABA receptor"다. 수용체 분류 라벨은 원문 안에서 일관되지 않으므로 그대로 옮기고 해석하지 않는다.

### Result 3 — 급성 leptin만으로 DIO 프로그램의 상당 부분이 재현된다
- 급성 leptin(3 mg/kg IP)에 대한 전사 반응도 **Lepr/Glp1r가 모든 집단 중 최대**. leptin 조절 유전자 수: Lepr/Glp1r **251개** vs Agrp **28개**.
- 급성 leptin 유도 유전자 ∩ DIO 상향 유전자 = **93개 공유, odds ratio 185.3, P = 6.28 × 10⁻²⁴**(Fisher), Fig 3E 상관 r = 0.62.
- Agrp 뉴런은 Lepr를 발현함에도 외인성 leptin에 전사 반응이 거의 없다 → 저자 결론: **in vivo에서 leptin의 Agrp 조절은 주로 간접(상류 Lepr/Glp1r 경유)**.

### Result 4 — ARC와 DMH 양쪽의 Lepr/Glp1r 뉴런이 Agrp에 직접 입력
- 공개된 rabies-traced Agrp afferent snRNA-seq 재분석: Lepr/Glp1r가 Agrp로 가는 **Lepr 발현 GABA성 입력의 ~80%**(본문) — ⚠️ Fig EV7A 범례는 **~78%**로 적어 본문과 숫자가 다르다.
- 자체 역행 rabies 2종 모두 starter cell은 ARC였고, ARC Npy 뉴런·Agrp 뉴런 모두에서 **DMH의 Lepr·Glp1r 뉴런이 presynaptic으로 표지**. rabies 표지 뉴런 중 Glp1r 양성 비율은 **ARC 약 36%, DMH 약 48%**.
- 저자가 스스로 단 한계: ARC에서 Lepr와 Npy가 공발현하므로 **rabies 표지 ARC Lepr 세포가 상류인지 ARC Lepr/Npy 세포 자신인지 확정 불가**(dorsal lateral ARC 분포가 상류 존재를 시사할 뿐). 반면 Agrp 뉴런은 Glp1r를 발현하지 않으므로 ARC Glp1r 표지는 역행 추적 결과로 해석.

### Result 5 — 이 집단의 cell-autonomous LepR 신호가 DIO에서 Agrp 전사상태를 결정
- LeprGlp1rKO + 대조, chow 및 **15주 HFD**, 총 **35,538 cells**.
- KO의 Lepr/Glp1r에서 LGS 유의 감소(β = −0.087)와 **유전형 × 식이 교호작용 유의**(DIO에서 효과가 가장 큼). ⚠️ 두 P값의 지수는 추출 텍스트에서 끊겨 있다("P < 1.0 × 10", "P = 2 × 10") — 정확한 지수는 PDF 원본 확인 필요.
- PCA projection: KO의 Lepr/Glp1r는 **식이와 무관하게 단식 야생형과 군집**(PC1 permutation P = 0.001) → DIO 전사상태를 만들려면 세포 자율적 LepR 신호가 필요.
- KO에서 DIO의 IEG 유도(Fos, Vgf, Homer1)가 소실되고 GABA 수용체 subunit 하향이 역전 → 저자 해석: 활성 ↓·억제 입력 ↑.
- **Agrp 뉴런**: chow에서는 대조와 전사적으로 구분 불가. DIO KO에서는 **128개 유전자 차등 발현**, 단식 상향 유전자가 KO 상향 쪽에·단식 하향이 KO 하향 쪽에 농축되고 PC1이 단식 쪽으로 이동(P = 0.001) → **비만인데도 "단식 유사 활성 상태"를 유지**.
  - ⚠️ Fig 4G,H 범례의 Agrp 표본 수(chow Agrp n = 7, HFD Agrp n = 2)는 Fig 4M의 "n = 7 KO, 6 control"과 맞지 않는다. 범례 안에서 불일치.

### Result 6 — 화학유전 활성화는 섭식 억제에 **충분**
- Glp1r(Cre) × Trh(Dre) 교차로 hM3Dq를 ARC·ventral DMH의 Lepr/Glp1r 집단에 제한, within-subject crossover, **CNO 3 mg/kg IP**, **수컷만**.
- 억제된 것: dark-cycle 섭취(0·1·2·3 h, P = 8.2 × 10⁻⁸, n = 5), **16 h** 단식 후 재급식(0·1·2·4·6·8 h, P = 5.8 × 10⁻⁵, n = 5), **ghrelin 1 mg/kg IP** 유발 과식(n = 4; P값 지수가 추출 텍스트에서 깨짐 "P = 1.4 × 10").

### Result 7 — 외인성 leptin의 과식 억제에 이 집단의 LepR가 **필요**
- chow 급이 **혼성 성별** LeprGlp1rKO vs 대조, **leptin 5 mg/kg**(Novo Nordisk) vs saline crossover.
- ghrelin 유발 **24 h** 섭취: leptin × genotype **P = 1.7 × 10⁻³** — KO에서는 leptin이 ghrelin 과식을 못 줄인다.
- 단식 후 재급식: 야생형에서는 leptin이 억제하나 KO에서는 실패(treatment × genotype **P = 2.8 × 10⁻⁶**).

### Result 8 — HFD 전환 직후 과식의 '정상화'에 필요
- 8주령 혼성, 단독 사육, 3일 기저 후 HFD 전환. **초기 과식의 크기는 두 유전형이 동일**. 대조는 7일째 기저로 복귀했으나 **KO는 계속 높게 유지**(genotype × time P = 5.7 × 10⁻⁹; n = 9 KO, 10 control) → 체중 증가가 유의하게 더 큼(genotype × time P = 2.5 × 10⁻²⁸).
- 이후 추적(본문 "subsequent 8 weeks", Fig EV8G는 60일 HFD·지방량은 기저/1주/9주)에서 KO의 증가 속도가 결국 둔화되어 대조와 평행해짐 → 저자 논리: **초기 실패는 지방량 증가가 아니라 유전적 병변 때문**이고, 비-Lepr/Glp1r 기전이 결국 섭취를 정상화하되 **훨씬 높은 체중/지방량에서만** 그렇게 한다.

### Result 9 — 비만에서의 Agrp 탈감작이 이 집단의 leptin 신호 때문
- 단식 후 재급식: DIO 야생형은 lean 대조의 **대략 절반** 칼로리를 먹는 반면, DIO KO는 lean 대조와 비슷 → DIO의 억제가 **대부분 소실**(genotype × diet P = 0.049; within-genotype 야생형 P = 5.5 × 10⁻⁵, KO P = 0.074 — KO는 유의하지 않음).
- ghrelin(1 mg/kg IP) 후 **5 h** 섭취: DIO 야생형은 무반응(P = 0.70), DIO KO는 유의 증가(P = 1.7 × 10⁻⁴), genotype × treatment P = 4.1 × 10⁻³ (혼성, n = 11 WT, 12 KO).
- mbARC FOS-IR(Npy-Gfp 배경, ghrelin 90분 후): saline에서는 유전형 차 없음(P = 0.152; n = 6 control, 5 KO), ghrelin 후 DIO KO에서 증가(P = 0.013; n = 6 control, 7 KO) → **ghrelin 반응성 회복**.
- 저자의 핵심 논증: KO가 대조보다 **더 비만함에도** 과식 억제가 사라졌으므로, 제약을 매개하는 것은 지방량 증가가 아니라 **Lepr/Glp1r에 대한 leptin 작용**이다.
- ⚠️ 설계 주의: DIO 코호트는 혼성 성별이지만 비교에 쓰인 chow 집단은 Methods에 **8주령 수컷** chow LeprGlp1rKO로 기재되고, Fig EV9A는 chow·DIO 코호트가 **독립된 동물군**임을 명시.

### Result 10 — 시상하부 microgliosis도 leptin 작용의 산물
- IBA1 면역염색: **DIO LeprGlp1rKO의 ARC microglia 수가 DIO 대조보다 적다**(P < 0.01, unpaired t test) — **더 많이 먹고 더 무거운데도**.
- 저자 결론: 비만 연관 MBH neuroinflammation은 적어도 부분적으로 **Lepr/Glp1r에 대한 leptin 작용**이 구동하며, 이는 leptin 결핍 Lep^ob/ob 마우스가 동등하거나 더 심한 비만에도 microgliosis를 보이지 않는다는 선행 결과(Briggs 2014; Gao 2014)와 부합.
- ⚠️ 본문은 IBA1 정량을 "Fig. 6D"로 지칭하지만 범례상 6D는 FOS 정량, IBA1은 6E(대표 이미지)·6F(정량)다 — 패널 참조가 본문과 범례에서 어긋난다.

## 저자 주장 vs 해석, 그리고 한계
- **저자의 재정의**: 'leptin resistance' = ① 대부분 세포형에서 hyperleptinemia가 LepR 신호를 더 올리지 못하는 **천장 효과** + ② **하나의 결정적 회로에서는 leptin 작용이 오히려 증가**하는 것의 조합. 즉 DIO는 leptin 작용을 전반적으로 망가뜨리는 것이 아니라 **특정 집단을 점진적으로 동원**한다.
- **DIO 2국면 모델**(Discussion, 모델 수준 주장): ① 초기 — leptin이 아직 낮고 체중 증가 전, 강한 과식; ② 체중·지방·leptin 상승 — Lepr/Glp1r만 LepR 신호를 계속 키워 **HFD 개시 후 7–10일에 걸쳐 섭취가 거의 정상화**되고, 이전보다는 높지만 *이 반응이 없을 때보다는 훨씬 낮은* **새 방어 체중**이 선다.
- **배제된 기전 후보**: SOCS3로는 설명 불가(Lepr/Glp1r는 강한 Socs3 유도에도 반응 유지, Agrp는 Socs3 유도가 거의 없이도 무반응); 전사체에서 염증·ER stress 신호의 근거를 찾지 못함(Zhang 2008, Thaler 2012 가설과 불일치); mTOR 과활성 가설(Tan 2025)과도 반대 방향(Lepr/Glp1r가 오히려 mTOR 활성화 유전자 ↑·억제 유전자 ↓, Fig EV10). 저자의 대안 제안은 **Lepr 발현량이 높아 더 넓은 동적 범위**를 갖는다는 것 — 이는 검증되지 않은 가능성("it is possible that")으로 제시된다.
- **저자가 예상한 천장**: Lepr/Glp1r도 결국 최대 LepR 신호에 도달할 수 있고 Agrp(및 하류)도 완전히 억제될 수 있다(활성은 0 아래로 못 간다).
- **한계**(일부는 저자 명시, 일부는 본 페이지 정리):
  - 발달 효과 배제 불가(저자 명시). Agrp·Npy 발현 자체는 KO에서 정상이고, Agrp 특이 Lepr 결손(van de Wall 2008)보다 LeprGlp1rKO 표현형이 크다.
  - DREADD 행동은 **수컷만**, 다른 행동은 혼성 성별이며 성별 분리 통계는 EV 그림에만 일부 제시 → 성차 결론 유보.
  - 조작의 분자 좌표가 서로 다르다: 전사체·KO는 **Glp1r-Cre**(Glp1r 발현 세포 전체), DREADD는 **Glp1r × Trh 교차**. 따라서 Trh 음성 Lepr/Glp1r 세포는 활성화 실험에서 빠졌을 수 있다(본 페이지 해석).
  - microglia는 **IBA1 양성 세포 수**만 — 형태·활성화 상태·기능은 측정되지 않았다.
  - DIO 코호트와 chow 코호트가 독립 동물군이고 HFD 조성이 코호트별로 다르다(58% vs 60% kcal fat).
  - Lepr/Glp1r → Agrp 억제가 표현형에 기여한다는 것은 "presumably"로 서술되며, 저자들은 이 집단이 **다른 orexigenic 회로**도 억제할 가능성을 열어 둔다.

## ⚠️ 위키 내 충돌·긴장 (양쪽 병기, 상대 페이지는 수정하지 않음)
1. **이 집단은 ARC인가 DMH인가** — 위키의 여러 페이지는 Webster 2024의 Trh⁺/Glp1r⁺/Lepr⁺ 집단을 **caudal ARC**로, [[rupp-2023-suppression-of-food-intake-by|Rupp 2023]]의 LepRb^Glp1r을 **DMH 중심**으로 기록하고, [[heyward-2025-single-nucleus-transcriptional-and-chromatin|Heyward 2025]]의 Xenium은 **ARC/VMH = Trh형, DMH = Ebf1형**으로 갈린다고 보고한다([[concept-dorsomedial-hypothalamus]]·[[concept-npy-agrp-neurons]]의 ⚠️ 블록 참조). 본 논문은 같은 세포를 **"ventral DMH와 caudal ARC에 걸친 하나의 집단"** 으로 다루고 **양쪽 모두** Agrp에 직접 입력한다고 보고(rabies 표지 중 Glp1r⁺ ARC ~36%·DMH ~48%)해, '어느 핵이냐' 논쟁에는 *양쪽*이라는 답을 준다. 단 Trh형/Ebf1형 아형 구분은 다루지 않으며, DREADD가 **Trh 교차**인 점은 이 긴장을 해소하지 못한다.
2. **시상하부 염증의 인과 방향** — [[concept-hypothalamic-inflammation]]은 HFD 24–72시간 microglia 활성 → SOCS3·ER stress → leptin resistance라는 **염증이 원인** 사슬을 기록한다. 본 논문은 반대로 (a) DIO microgliosis가 **leptin 작용의 결과**이며 Lepr/Glp1r의 LepR를 지우면 감소하고, (b) Lepr 뉴런 전사체에서 염증·ER stress 신호의 근거를 **찾지 못했다**고 보고한다. 두 서술은 층위(교세포 vs 뉴런 전사체)와 시간척도(급성 24–72 h vs 15–19주)가 다르므로 한쪽을 폐기하지 말고 병기할 것.
3. **"비만에서 leptin은 무력하다"** — [[concept-leptin]]·[[perakakis-2021-leptin-in-leanness-and-obesity]]는 인간에서 leptin을 *결핍 상태에서만 작동하는 허용적 호르몬*으로, DIO 마우스를 'leptin tolerance'로 정리한다. 본 논문은 **마우스 DIO에서 내인성 leptin이 한 집단을 통해 계속, 오히려 더 강하게 작동**한다고 주장한다. 인간 외인성 leptin RCT 무효와 직접 모순은 아니지만(외인성 투여 ≠ 내인성 작용), "비만에서 렙틴 축은 꺼져 있다"는 단순 요약과는 충돌한다.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **GLP-1RA 표적 세포 = 마지막 렙틴 센서?** [[rupp-2023-suppression-of-food-intake-by|Rupp 2023]]·[[crunkhorn-2025-pairing-up-with-glp-1|GLP-1×렙틴 이중작용제]]·사용자 lab의 [[kim-2024-glp-1-increases-preingestive-satiation|DMH GLP-1R preingestive satiation]]·[[park-2025-glucagon-like-peptide-1-and-hypothalamic|Park 2025]]가 가리키는 세포와 본 논문의 "비만에서 유일하게 leptin 민감성을 유지하는 집단"이 같은 세포라면, **GLP-1RA가 비만에서도 듣는 이유**를 '렙틴 저항을 우회'가 아니라 '**아직 렙틴에 반응하는 바로 그 세포를 함께 때린다**'로 다시 쓸 수 있다. 본 논문은 이를 주장하지 않는다(Discussion에서 "일부 gut peptide 기반 치료가 leptin 민감성을 올리는 효과가 여기서 올 수 있다"는 **가능성**까지만 언급).
- **NMPU 배치** — 이 집단은 [[concept-need-motivation-pleasure-utility|NMPU]]의 **Need 축에 걸리는 brake**로 읽힌다: 지방량(leptin)에 비례해 Agrp 억제 톤을 걸어 '예측된 결핍' 알람의 이득을 낮춘다. [[kim-2024-normative-framework-dissociates-need|AgRP = Predicted Deficit]] 틀에서 보면, 본 논문은 그 Need 신호의 **gain을 체지방량에 맞춰 조정하는 상류 스케일러**를 지목한 셈.
- **defended adiposity / rebound** — '유전적 병변이 있으면 HFD 초기 과식이 정상화되지 않는다'는 Result 8의 표현형은 [[concept-weight-regain-defended-adiposity|방어되는 지방량]]의 **설정 단계(set-up) 쪽** 현상이다. [[grzelka-2023-a-synaptic-amplifier-of-hunger|Grzelka 2023]]의 PVH^TRH→AgRP 시냅스 증폭기(감량 후 *되돌아오는* 쪽)와 짝지으면, 같은 AgRP 노드에 **지방량 기반 억제 brake(본 논문)** 와 **결핍 기반 흥분 gain(Grzelka)** 이 양쪽에서 붙는 그림이 된다 — [[proposal-glp1ra-rebound-microbiota|GLP-1RA 중단 rebound 계획서]]에서 검증 가능한 대비.
- **인간 번역·영상 가설** — "비만에서 렙틴 민감성이 전부 사라진 게 아니라 **한 세포형에 남아 있다**"는 명제는 [[proposal-dmh-glp1r-human-imaging|DMH GLP-1R 인간 영상 계획서]]의 표적 정의에 직접 들어간다. 또한 MRI의 시상하부 gliosis를 '식이 손상 지표'가 아니라 **'leptin 작용 강도의 간접 지표'** 로 읽는 대안 해석이 생긴다(원문의 마우스 결과에서 유추한 가설일 뿐, 인간 데이터 없음).
- **DTx·electroceutical** — caudal ARC/ventral DMH의 이 brake를 모사하는 국소 신경조절은 사용자 lab의 electroceutical 노선과 직접 맞물린다. 단, 저자들은 **다른 Lepr 뉴런을 렙틴에 재민감화하는 전략의 위험**(교감신경 항진에 의한 혈압 상승 가능성)을 명시적으로 경고한다 — 표적 특이성이 안전성 문제이기도 하다.

## 관련 페이지
- [[concept-leptin]] — leptin 작용 hub. 본 논문은 "비만의 렙틴 저항"을 *천장 효과 + 단일 회로 동원*으로 재정의(위 ⚠️ 3 참조).
- [[concept-glp-1]] — Glp1r 공발현이 이 집단의 정의적 표지. GLP-1 작용 세포와 잔존 렙틴 센서의 동일성 문제.
- [[concept-npy-agrp-neurons]] — 하류 표적. 본 논문은 Lepr/Glp1r가 **Agrp로 가는 Lepr⁺ GABA성 입력의 ~80%(범례 ~78%)** 임을 재분석으로 제시하고, 비만의 Agrp 탈감작·ghrelin 저항이 이 상류 억제 때문임을 KO로 입증.
- [[rupp-2023-suppression-of-food-intake-by]] — **직접 모태**(같은 Myers lab 계열): LepRb^Glp1r 집단의 기능적 원전. 본 논문은 그 집단의 **비만에서의 역할**을 채운다.
- [[heyward-2025-single-nucleus-transcriptional-and-chromatin]] — 같은 집단을 Bnc2/Nkx2-4/Glp1r 3아형(Ebf1/Trh/Tbx19)으로 분해. 본 논문의 집단 정의(Lepr/Glp1r/Bnc2/Trh/Cxcl12)와 겹치나 **아형 수준 해상도는 본 논문에 없다**.
- [[concept-dorsomedial-hypothalamus]] — ventral DMH 쪽 좌표. 본 논문은 DMH와 caudal ARC를 **한 집단의 두 부분**으로 다룬다.
- [[concept-arcuate-nucleus]] — caudal ARC 쪽 좌표 + pSTAT3·FOS 정량이 이뤄진 mbARC.
- [[garfield-2016-dynamic-gabaergic-afferent-modulation]] — vDMH^LepR/pDYN → AgRP 억제 입력의 선행 회로. 본 논문은 같은 억제 축을 **만성 지방량·leptin 축**으로 확장(저쪽은 급성 음식 cue·가치).
- [[aitken-2024-negative-feedback-control-of-hypothalamic]] — DMH^LepR → AgRP 억제의 **맛(taste)·meal termination 버전**. 같은 상류 집단의 다른 입력 모드 가설.
- [[kim-2024-glp-1-increases-preingestive-satiation]] — 사용자 lab Science. DMH GLP-1R⁺/LepR⁺ 세포의 인지적 satiation; 본 논문의 집단과 동일 세포인지가 1차 검증 과제.
- [[crunkhorn-2025-pairing-up-with-glp-1]] — GLP-1×렙틴 이중작용제가 바로 이 LepR^Glp1r 세포를 표적. 본 논문은 그 표적 세포가 **DIO에서 왜 아직 렙틴에 반응하는지**를 설명.
- [[concept-hypothalamic-inflammation]] — ⚠️ 인과 방향 충돌(위 ⚠️ 2). 본 논문의 IBA1 결과는 microgliosis를 leptin 작용의 **결과** 쪽에 놓는다.
- [[concept-ghrelin]] — 비만의 ghrelin 저항이 Agrp 세포 내재적 결함이 아니라 **상류 억제**라는 본 논문 주장의 상대 호르몬 hub.
- [[concept-spatial-transcriptomics]] — 방법 축: Xenium 300-gene 패널 + 동일 절편 pSTAT3 면역형광이라는 **신호-전사체 동시 판독** 설계.
- [[concept-hypomap]] — 시상하부 세포 아틀라스 hub. 본 논문의 label transfer 참조계(Campbell 2017·Rupp 2023)와 Allen Brain Cell Atlas 공발현 분석(Fig EV7B).
- [[concept-weight-regain-defended-adiposity]] — 새 방어 체중이 *어떻게 세워지는가*의 세포 기질 후보.
- [[grzelka-2023-a-synaptic-amplifier-of-hunger]] — 같은 AgRP 노드의 반대편 축(결핍 기반 흥분 gain). 본 논문과 brake/gain 대비.
- [[person-fenselau-henning]] — 공저(DREADD·MPI Cologne 파트). `Trh-p2a-Dre` 라인과 교차 recombinase 설계가 본 논문의 세포 특이 활성화를 가능케 함.
- [[walker-2026-a-hypothalamic-circuit-for]] — AgRP 상류 입력 지도의 다른 갈래(PVH^Sim2 흥분성·예측 cue). 본 논문의 억제성·지방량 축과 상보.
- [[perakakis-2021-leptin-in-leanness-and-obesity]] — ⚠️ 인간 렙틴 생리와의 긴장(위 ⚠️ 3). 마우스 내인성 렙틴 작용 ↔ 인간 외인성 렙틴 무효.
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] — 다른 부위 LepR 뉴런의 섭식 제어. 본 논문이 "DIO에서 반응하는 것은 Lepr/Glp1r뿐"이라고 할 때의 대조군 집단.
- [[person-friedman-jeffrey]] — Bnc2(Tan 2024)·Tan 2025 렙틴 저항 모델의 출처 lab. 본 논문은 Tan 2025의 **mTOR 설명과 반대 방향** 데이터를 제시(Fig EV10).
- [[concept-melanocortin-system]] — Agrp/Pomc 정식 축이 DIO에서 왜 조용한지에 대한 본 논문의 답(LepR 신호를 못 올림).
- [[overview-appetite-energy-homeostasis]] — 큰 그림(지방량 feedback 축).
