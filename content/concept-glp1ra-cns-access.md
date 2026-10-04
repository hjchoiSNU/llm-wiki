---
title: "GLP-1RA의 중추 접근 경로 (CNS access / BBB penetration)"
type: concept
created: 2026-10-03
updated: 2026-10-04
aliases: [GLP-1RA BBB, GLP-1RA CNS penetration, GLP-1RA 중추 접근, GLP-1RA CNS penetrance, GLP-1RA BBB 투과, 뇌 침투, CNS penetrant GLP-1, 뇌 도달]
---

> [!takeaway] 연구 방향 관점의 핵심
> **"어느 약이 어디까지 닿는가"가 실험 결과를 결정한다.** 말초 GLP-1RA의 뇌 접근은 전부-또는-전무가 아니라 **4층**(뇌실주위기관 CVO → tanycyte 수송 → BBB 본체의 제한적·포화성 수송 → 미주 구심성 간접신호)이고, 약물마다 닿는 층이 다르다. 비아실화 **exendin-4 계열은 BBB 본체를 직접 통과**하지만(Kastin & Akerstrom 2003; Salameh 2020), **아실화 장기작용 펩타이드(liraglutide·semaglutide)는 측정 가능한 BBB 수송이 없고** CVO + tanycyte 경유로만 들어간다(Secher 2014; Gabery 2020; Imbernon 2022). 인간 CSF:plasma는 liraglutide **0.02%**, semaglutide **≈0.4%**, exenatide **1.4–2.1%** — 약물 사이에 약 100배 범위로 벌어진다.
> 사용자 lab에 직결되는 세 가지: ① **DMH^GLP-1R에 말초 약물이 직접 닿는지는 미해결**이다. tanycyte 수송은 median eminence–MBH 축이고 DMH는 그 범위 밖일 수 있어, [[kim-2024-glp-1-increases-preingestive-satiation|Kim 2024 Science]]의 회로가 **국소 수용체**가 아니라 **뇌간 상행 입력**([[blid-skoldheden-2026-semaglutide-engages-distinct-brainstem|Blid Sköldheden 2026]])으로 동원될 가능성이 열려 있다 → [[proposal-dmh-glp1r-human-imaging|인간 영상 제안]]과 마우스 DMH 조작 실험 모두에서 **접근 경로를 설계 변수로 다룰 근거**. ② **약물을 바꾸면 부위가 바뀐다**: Ex-4로 얻은 변연계 결과를 세마글루타이드에 일반화하면 안 된다([[cao-2024-hunting-for-heroes-brain|Cao 2024]]의 비판 그대로). ③ **접근 경로 자체가 반응 이질성의 후보 축**이다 — 혈당·고지방식이 tanycyte gating을 끊는다는 보고(Bakker 2022)는 [[concept-glp1ra-response-variability|반응 이질성]]의 미설명 75%에 들어갈 생리 변수다.
> 쓰는 법 두 가지(실무 규칙은 맨 아래 절): ④ **"뇌에 간다"는 주장에는 증거등급을 붙인다** — 유입속도(A)·표지 리간드 부위 검출(B)·인간 CSF(D)만 '도달'의 근거이고, FOS·cAMP(C)와 fMRI·임상 종점(F)은 "중추 효과"까지만 말한다. ⑤ **표적 깊이가 약물 포맷을 정한다** — 전신 투여 semaglutide가 ARC/DMH/LH 실질의 GLP-1R를 "직접 때린다"고 쓰면 과장이고, 심부·변연계·피질 표적이면 exendin 골격·저분자·공학 설계가, 체중·오심 같은 CVO 표적이면 현행 아실화 펩타이드가 맞는다. 정박 리뷰 [[west-2025-are-glucagon-like-peptide-1-glp-1-receptor|West 2025]]는 초록("liraglutide·semaglutide·exenatide가 BBB 통과")과 본문(Salameh 2020: liraglutide·semaglutide 유입 미측정)이 엇갈리므로 **본문 수치로 인용**할 것.

# GLP-1RA의 중추 접근 경로 (CNS access / BBB penetration)

## 한 줄 요약
말초 투여 GLP-1 수용체 작용제는 혈뇌장벽(BBB)을 효율적으로 통과하지 못하지만, **뇌실주위기관(CVO)·tanycyte 수송·일부 약물의 제한적 BBB 통과·미주 구심성 간접신호**라는 서로 다른 네 경로로 중추에 작용하며, 어느 경로를 쓰는지가 약물별 분자 설계(아실화·분자량·albumin 결합)에 의해 결정되고, 그것이 다시 **어느 행동 효과가 중추성인지**를 가른다.

> [!info] 인용 규약
> 이 페이지는 **위키 내부 자료**와 **웹에서 확인한 1차 문헌**을 섞어 쓴다. 위키 자료는 wikilink로, 웹 문헌은 **저자-연도 + 저널 + DOI/URL**로 표기해 구분했다. 저자의 추론은 `(연결 가설 — 원문 주장 아님)`으로 명시한다. ⚠️ 본 세션에서 **egress 차단으로 원문 PDF를 직접 열지 못한 웹 문헌이 다수**이며(JCI·PMC·Cell·Springer 등 차단), 그 경우 검색 엔진이 반환한 2차 요약에 의존했다. 해당 항목은 `(원문 미열람)`으로 표시한다.
>
> **2026-10-04 병합·교차 확인**: 같은 날 따로 작성된 `concept-glp1ra-cns-penetrance`(6경로·증거등급·약물 지도·분자 설계 결정인자·실무 규칙)를 이 페이지에 합쳤다. 그 과정에서 `raw/` PDF로 다음을 확인했다 — ① [[west-2025-are-glucagon-like-peptide-1-glp-1-receptor|West 2025]] 전문(pp.1159–1163): Salameh 2020의 Ki·%ID/g, Kastin 2002, Fu 2020, Hunter & Hölscher 2012, Gabery 2020, Secher 2014, Imbernon 2022에 대한 리뷰 서술. ② [[sabbagh-2026-repurposing-glucagon-like-peptide-1|Sabbagh 2026]] 본문 p.59: liraglutide CSF 미량·plasma 무상관(Christensen 2015 인용), tanycyte `Glp1r` silencing(Imbernon 2022 인용), Rhea 2024 인용. ③ [[fang-2025-glucagon-like-peptide-1-medicines|Fang 2025]]: CSF exenatide가 순환 농도의 1/100(Vijiaratnam 2025 인용). 따라서 아래 `(원문 미열람)`은 **그 1차 논문 자체를 열지 못했다**는 뜻이고, 위 세 리뷰가 전하는 범위에서 2차 확인된 항목은 해당 줄에 따로 적었다.

## 왜 문제인가

세 가지 사실이 동시에 성립하면서 모순처럼 보이는 것이 이 주제의 출발점이다.

1. **GLP-1RA는 분자적으로 BBB를 넘기 어려운 약이다.** 펩타이드이고(3.7–4.8 kDa), 대부분 지방산 아실화로 **albumin에 98–99% 이상 결합**해 유리 분율이 극히 낮다(liraglutide는 palmitic acid를 γ-Glu linker로 Lys26에, semaglutide는 C18 diacid를 OEG spacer로 Lys26에 결합 — Sen & Sen 2025, *J Diabetes Metab Disord*, doi:10.1007/s40200-025-01711-8, 원문 미열람). dulaglutide(≈63 kDa Fc 융합)·albiglutide(≈73 kDa albumin 융합)는 항체급 크기다.
2. **그런데 중추 작용은 인과적으로 입증된다.** 뇌 특이 GLP-1R 결손이 말초 약물 효과를 지우고([[liu-2025-gipr-ab-glp-1-peptide|Liu 2025]]의 `Glp1r^Wnt1−/−`), 부위별 수용체 조작이 효과를 부위별로 쪼갠다([[gao-2026-semaglutide-drives-weight-loss-through|Gao 2026]]·[[godschall-2026-a-brain-reward-circuit-inhibited|Godschall 2026]]·[[duran-2026-the-central-amygdala-gates|Duran 2026]]).
3. **인간에서 측정되는 CSF 농도는 민망할 정도로 낮다.** liraglutide 1.8 mg를 평균 14개월 복용하고 8.4 kg 감량한 T2D 환자 8명에서 혈중 31 nmol/L에 대해 **CSF는 6.5 pmol/L, 비율 0.02%**였고, **CSF 농도는 체중 감소와 상관이 없었다**(P=0.69) — Christensen et al. 2015, *Int J Obes* 39:1651–1654, doi:10.1038/ijo.2015.136 (원문 미열람; 단 [[sabbagh-2026-repurposing-glucagon-like-peptide-1|Sabbagh 2026]] p.59가 이 논문을 인용해 "liraglutide 반응자의 CSF에서 미량 검출, plasma 농도와 무상관"을 전한다 — 0.02%·n=8·P값 같은 세부 수치는 위키 `raw/`로 확인되지 않았다).

즉 "BBB를 못 넘는다"와 "중추에서 작동한다"가 둘 다 맞다. 해소는 **BBB를 넘지 않고도 뇌 안의 수용체에 닿는 길이 있다**는 것이다. 위키의 [[concept-glp-1]]이 "**전혀 못 통과가 아니라 효율적이지 않다**가 정확한 표현"이라고 적은 것과, [[fang-2025-glucagon-like-peptide-1-medicines|Fang·Drucker 2025]]가 "BBB를 효율적으로 통과하지 못하지만 CVO에 접근하고 **GLP-1R 미발현 핵에서도 cFos를 유발**한다"고 적은 것이 같은 이야기다.

여기서 바로 따라오는 함정이 하나 있다. **접근(access)·수용체 점유(occupancy)·회로 동원(recruitment)·행동 효과는 네 개의 다른 층위**다. 약물이 닿지 않는 부위에서도 FOS는 올라가고([[liskiewicz-2026-glp-1r-gipr-ppar|Liskiewicz 2026]]은 BBB 미투과 5중작용제가 brainstem proteome를 350개 단백질 수준으로 바꿨다고 보고), 약물이 닿는 부위라도 그 부위가 효과에 필요하지 않을 수 있다(아래 Secher 2014의 AP·PVN 음성 결과).

## 접근 경로 4층

### 1층 — 뇌실주위기관(CVO): AP·NTS 일부·SFO·OVLT·정중융기

**해부**: fenestrated 모세혈관으로 BBB가 없거나 불완전한 부위. [[concept-area-postrema|area postrema(AP)]], subfornical organ(SFO), OVLT, median eminence(ME), 그리고 AP에 인접한 [[concept-dorsal-vagal-complex|NTS]]의 일부.

**근거(웹 1차)**:
- **Gabery et al. 2020, *JCI Insight* 5(6):e133429, doi:10.1172/jci.insight.133429** (Novo Nordisk + Lund; 공저 Casper G. Salinas) — 형광 세마글루타이드를 전신 투여한 rodent에서 whole-brain 영상(LSFM 기반 자동 뇌지도 + MRI)으로 분포를 지도화. 결론: 세마글루타이드는 **뇌간·septal nucleus·시상하부에 직접 접근하지만 BBB를 통과하지 않았고**, **CVO와 뇌실 인접 선택적 부위**를 통해 뇌와 상호작용했다. c-Fos는 10개 영역에서 상승했고, 그중에는 약물이 직접 닿은 뇌간뿐 아니라 **직접 GLP-1R 상호작용이 없는 2차 영역(lateral PBN)** 도 포함됐다. AP에서는 전사체 수준으로 **prolactin-releasing hormone·tyrosine hydroxylase 상향**. (원문 미열람; [[west-2025-are-glucagon-like-peptide-1-glp-1-receptor|West 2025]] p.1161은 같은 논문을 "체중·식이 효과에 광범위한 BBB 투과가 필요 없고, CVO·인접부를 통해 engage하며, ARC에서 POMC/CART 활성·NPY/AgRP 억제"로 요약한다)
- **Skovbjerg et al. 2023, *Neuropharmacology* 238:109637, doi:10.1016/j.neuropharm.2023.109637** (Gubra; 공저 Clemmensen, Hecksher-Sørensen) — 형광 exendin-4와 지질화 유도체를 말초 투여 후 정량 whole-brain 3D LSFM. 투여 **2시간** 시점에서 분포는 **주로 CVO에 국한**됐고 특히 **AP와 NTS**. 단 `Ex4_C16MA`·`Ex9-39_C16MA`는 **PVH와 medial habenula**에도 분포 → **지질화가 CNS 접근성을 높인다**. (원문 미열람)
- **Secher et al. 2014, *J Clin Invest* 124(10):4473–4488, doi:10.1172/JCI75276** — 형광 liraglutide 말초 투여 마우스에서 **CVO에서 약물이 검출**됐고, ARC 및 시상하부 몇 곳의 뉴런에 결합. **`Glp1r−/−` 마우스에서는 결합이 보이지 않음** → 뇌 내 liraglutide 흡수 자체가 GLP-1R 의존적. (원문 미열람; 2차 확인 — West 2025 p.1162: CVO와 상호작용하되 BBB로 보호되는 ARC·PVN에서도 검출, 가설은 PVN의 높은 모세혈관 밀도와 ARC tanycyte / [[sabbagh-2026-repurposing-glucagon-like-peptide-1|Sabbagh 2026]] p.59: 흡수에 기능적 GLP-1R가 필요하고 뇌실주위 영역·혈관 근접부에 국한)

**위키 쪽 정합 자료**: [[liu-2025-gipr-ab-glp-1-peptide|Liu 2025]]의 GIPR-Ab/GLP-1 접합체는 **OVLT·SFO·ME·AP 네 CVO에서 검출**되며 BBB를 우회했다. [[liskiewicz-2026-glp-1r-gipr-ppar|Liskiewicz 2026]]의 5중작용제는 in vitro human BBB 모델에서 미투과였으나 ARC·DMH·AP·NTS 네 부위 FOS는 GLP-1–GIP와 동일했다.

**이 층이 설명하는 것**: AP 매개 **오심·[[concept-conditioned-taste-aversion|CTA]]**([[zhang-2021-area-postrema-cell-types-that|Zhang 2021]]), 세마글루타이드 **체중 감량 그 자체**([[gao-2026-semaglutide-drives-weight-loss-through|Gao 2026]]: AP에만 Gs를 보존해도 −7.2% 전량 회복), hindbrain→elPBN→시상하부로 퍼지는 brain-wide FOS.
**설명하지 못하는 것**: 피질·해마의 신경보호([[concept-glp1-neuroprotection]]), 심부 변연계(CeA·VTA·NAc·LS)의 직접 약리, 그리고 — 중요하게 — **ME에서 떨어진 시상하부 핵(DMH 등)** 에 대한 직접 작용.

### 2층 — Tanycyte 수송 (median eminence → mediobasal hypothalamus)

**해부·세포**: 제3뇌실 벽과 ME 경계의 특화 ependymoglia. 과정(process)이 ARC parenchyma 깊이 침투 → [[concept-tanycytes]].

**근거(웹 1차)**:
- **Imbernon et al. 2022, *Cell Metab* 34(7):1054–1063.e7, doi:10.1016/j.cmet.2022.06.002** (Prévot·Nogueiras; PMID 35716660) — tanycyte가 GLP-1R를 발현하고 liraglutide를 **transcytosis로 MBH에 실어 나르며 BBB를 우회**. 두 조작: ① tanycyte 특이 GLP-1R knockdown(`GLP-1r^TanycyteKD`), ② tanycyte에 botulinum neurotoxin B light chain 발현(`iBot`)으로 transcytosis 차단. 둘 다 **liraglutide의 뇌 수송과 표적 시상하부 뉴런 활성화를 막고, 동시에 식이·체중·지방량·지방산 산화에 대한 항비만 효과도 차단**. 혈중 liraglutide는 **내피세포 수준에서 BBB를 넘지 않는다**고 명시. (원문 미열람; 2차 확인 — Sabbagh 2026 p.59: tanycyte `Glp1r` silencing이 liraglutide의 뇌 수송과 시상하부 유전자 발현 반응을 떨어뜨림 / West 2025 p.1163: "마우스에서 tanycyte transcytosis로 시상하부에 수송, 인간에서는 충분히 탐구되지 않음" 한 문장)
- **Gabery et al. 2020** (위) — rat ARH에서 **GLP-1R은 tanycyte에는 있고 내피세포에는 없으며**, in vitro에서 세마글루타이드는 BBB 내피와 상호작용하지 않고 **tanycyte가 흡수**한다. → tanycyte 경로는 liraglutide 전용이 아니다.
- **Bakker, Imbernon et al. 2022, *Cell Rep* 41(8):111698, doi:10.1016/j.celrep.2022.111698** — **접근이 상태 의존적**이다: 인슐린 유발 저혈당이 GLP-1RA의 시상하부 진입을 **증가**시키고 전신 지방 산화를 키운다. 기전은 tanycyte의 **VEGF-A 방출**을 통한 CVO 혈관 적응. 그리고 **비만·고지방식은 혈당 변화와 GLP-1RA 뇌 진입의 연결을 끊는다(uncoupling)**. (원문 미열람)

**위키 쪽 정합·경쟁 자료**: [[hansford-2025-glucose-dependent-insulinotropic-polypeptide-receptor|Hansford 2025]]는 같은 ME에서 **올리고덴드로사이트 GIPR → VEGF-A → 혈관 fenestration↑ → 말초 GLP-1RA의 MBH 접근↑**라는 **별개의 투과성 조절 축**을 제시하며, 표적으로 **ME를 관통하는 PVH vasopressin 축삭의 GLP-1R**을 지목한다. 위키는 두 축(tanycyte transcytosis vs OL→VEGF-A→fenestration)이 "병존·경쟁 관계로 아직 대조 실험 없음"이라고 적는다.

**이 층이 설명하는 것**: ARC/MBH GLP-1R 작용(Secher 2014의 **ARC POMC/CART 뉴런 내재화**), liraglutide의 시상하부 매개 항비만 효과, 그리고 **식이·혈당 상태에 따른 약효 변동**.
**설명하지 못하는 것**: hindbrain(AP·NTS)·변연계·피질. 그리고 **tanycyte 과정이 실제로 어디까지 닿는가**: α/β subtype의 process는 ARC·ME 중심이며 DMH까지의 전달은 보고되지 않았다. → *DMH^GLP-1R에 말초 약물이 tanycyte 경유로 직접 닿는다는 근거는 현재 위키·웹 양쪽에 없다*(연결 가설 — 원문 주장 아님).

### 3층 — BBB 본체의 제한적·포화성 수송 (약물 종류에 전적으로 의존)

**근거(웹 1차)**:
- **Kastin & Akerstrom 2003, *Int J Obes Relat Metab Disord* 27(3):313–318, doi:10.1038/sj.ijo.0802206** — 마우스에서 **multiple-time regression analysis**로 exendin-4가 **BBB를 빠른 속도로 직접 통과**함을 보임. HPLC로 혈중 안정성 확인(대부분 온전한 상태로 뇌 도달), **capillary depletion**으로 내피에 갇힌 것이 아니라 **뇌 parenchyma에 도달**함을 확인. 고용량 비표지 exendin-4 동시 투여 시 **자기억제(포화)** 가 나타났으나 **4개 실험을 합쳐야 통계적 유의**해졌다 → "고용량에서 진입이 제한될 수 있다"는 조심스러운 결론. (원문 미열람)
- **Salameh, Rhea, Talbot, Banks 2020, *Biochem Pharmacol* 180:114187, doi:10.1016/j.bcp.2020.114187** (corrigendum 2023) — ★ **이 주제에서 가장 결정적인 대조 실험**. 비아실화·비PEG화 incretin 수용체 작용제(**exendin-4, lixisenatide, Peptide 17, DA3-CH, DA-JC4**)는 유의한 blood-to-brain 단방향 유입률(Ki)을 가졌으나, **아실화 약물(liraglutide, semaglutide, Peptide 18)은 측정 가능한 BBB 통과가 없었다**. 비아실 약물의 유입은 **1 μg까지 비포화**였고 내피 **adsorptive transcytosis**로 추정. (원문 미열람)
  - **수치(West 2025 본문 p.1160으로 확인)**: Ki(μL/g-min) — DA-JC4 **0.6680 ± 0.1089** > exendin-4 **0.4231 ± 0.0703** > DA3-CH 0.3922 ± 0.0668 > Peptide 17 0.3489 ± 0.0228 > lixisenatide **0.3271 ± 0.0726**("중등도 투과성"); liraglutide·semaglutide·Peptide 18은 brain/serum 비와 노출시간 사이에 상관이 없어 **유의한 유입 없음**. 60분 뇌 흡수는 exendin-4 **0.54% ID/g**(최고), DA-JC4 0.17% ID/g(그중 89.7%가 실질 도달). 유입이 측정된다·안 된다와 Ki 값은 `raw/`로 확인됐고, "1 μg까지 비포화·adsorptive transcytosis"는 West 2025에 없어 웹 요약 그대로다.
- **Rhea et al. 2024, *Tissue Barriers* 12(4):2292461, doi:10.1080/21688370.2023.2292461** (Correction 2026, doi:10.1080/21688370.2026.2634592) — 후속편. 상대 뇌 유입률 **exenatide(Ki 2.476) > albiglutide(1.379) > dulaglutide(1.095) ≫ DA4-JC(0.668) μl/g·min**이고 albiglutide·dulaglutide는 1시간 내 가장 빠른 흡수를 보였으나, **tirzepatide는 BBB를 통과하지 않는 것으로 보인다**. (원문 미열람)
  - ⚠️ **병기 ① — 같은 분자의 Ki가 두 보고에서 다르다**: exenatide는 합성 exendin-4인데 Salameh 2020의 exendin-4 Ki는 **0.4231**(West 2025 p.1160으로 확인), 이 줄의 exenatide Ki는 **2.476**(웹 요약, 원문 미열람)으로 약 6배 차이다. 조건 차이를 위키 자료로 설명할 수 없으므로 **두 값을 한 순위표에 섞지 말 것**. 또 'DA4-JC 0.668'은 Salameh 2020의 DA-JC4 0.6680과 같은 숫자다 — Rhea 2024가 선행 최고치를 비교 기준으로 든 것일 수 있으나 미확인(Sabbagh 2026 ref #76에 적힌 Rhea 2024 제목의 시험 약물은 albiglutide·dulaglutide·tirzepatide·DA5-CH).
  - ⚠️ **병기 ② — tirzepatide**: 이 줄은 "통과하지 않는 것으로 보인다"(웹 요약)이고, 같은 Rhea 2024를 인용한 [[sabbagh-2026-repurposing-glucagon-like-peptide-1|Sabbagh 2026]] 본문(p.59)은 "dulaglutide와 tirzepatide는 서로 다른 속도로 BBB를 통과한다"고 적는다. Rhea 2024 원문이 `raw/`에 없어 판정 불가.
- **Hunter & Hölscher 2012, *BMC Neurosci* 13:33** — lixisenatide는 시험한 **모든 용량(2.5·25·250 nmol/kg)** 에서 30분에 통과, 2.5–25 nmol/kg는 3시간에도 통과. liraglutide는 **25·250 nmol/kg에서만** 통과하고 2.5 nmol/kg에서는 30분에 증가가 검출되지 않았으며, 3시간에는 250 nmol/kg에서만. → **liraglutide는 낮은 비율로만, 고용량에서만** 통과. (원문 미열람; West 2025 p.1161이 같은 방향으로 전한다 — liraglutide는 250 nmol/kg에서 30분 p<0.01·3시간 p<0.05, 뇌 cAMP↑는 25 nmol/kg에서 p<0.05 / lixisenatide는 30분에 2.5 nmol/kg p<0.01, 25·250 nmol/kg p<0.05, 3주 연일 투여로 세포 증식 1.8배·미성숙 뉴런 1.7배)
- **Kastin, Akerstrom & Pan 2002, *J Mol Neurosci* 18:7–14** (West 2025 pp.1159–1160으로 확인) — 약물이 아니라 **내인성 GLP-1과 안정 유사체 [Ser8]GLP-1**의 이야기. 둘 다 **비포화성**으로 뇌에 유입되고(과량의 비표지 유사체·GLP-1·exendin(9–39)로 억제되지 않음) [Ser8]GLP-1 방사능의 50.6%가 실질에 도달 → **수동확산**으로 해석. 지질용해도가 낮은데도 통과한다는 역설이 붙는다. [[steinert-2017-ghrelin-cck-glp-1-pyy-secretory|Steinert 2017]]이 내인성 GLP-1에 대해 "단순 확산으로 뇌에 들어가는 것으로 보인다"고 적는 근거가 이 논문이다. ⚠️ GLP-1 **의약**의 통과 근거로 쓰지 말 것.
- **Fu et al. 2020, *Front Physiol* 11:555** (West 2025 pp.1160–1161으로 확인) — 정맥 투여 exendin-4가 **5분 내 뇌에서 검출**되고 25분간 시간 의존적으로 증가, 뇌 PKA 활성↑. exendin(9–39) 전처치로 GLP-1-FAM 흡수 약 50%↓, **exendin-4-FAM 흡수는 거의 완전 소실** → 뇌 내피 **GLP-1R 매개 수송**. 같은 기간 CSF에서는 GLP-1이 검출되지 않아 blood–CSF barrier 경유가 아니라고 해석.

> ⚠️ **exendin-4가 3층을 넘는 '기전'은 보고마다 다르다(병기)**: 수용체 매개(Fu 2020 — exendin(9–39)로 차단) / 내피 adsorptive transcytosis·1 μg까지 비포화(Salameh 2020) / 고용량 자기억제 = 포화 시사(Kastin & Akerstrom 2003, 4개 실험 합산에서만 유의). 리간드가 다른 Kastin 2002(GLP-1·[Ser8]GLP-1)는 비포화·exendin(9–39) 불응이다. West 2025는 이를 조정하지 않고 "수동확산과 수용체 매개가 모두 제안되며 약물마다 다를 수 있다"로만 정리한다. 위키도 판정하지 않는다.

**이 층이 설명하는 것**: exendin-4/exenatide·lixisenatide 계열이 변연계·해마·VTA에서 직접 효과를 내는 이유. PD에서 exenatide·lixisenatide가 상대적으로 유망했던 패턴([[fang-2025-glucagon-like-peptide-1-medicines|Fang 2025]]·[[sabbagh-2026-repurposing-glucagon-like-peptide-1|Sabbagh 2026]])에 대한 약동학적 설명 후보.
**설명하지 못하는 것**: 임상에서 실제로 쓰이는 **아실화 장기작용 약물 전부**(liraglutide·semaglutide·tirzepatide·dulaglutide의 상당 부분). 즉 비만 약리의 주류는 이 층을 쓰지 않는다.

### 4층 — 미주 구심성 간접신호 (약물의 뇌 진입이 아니다)

Glp1r⁺ [[concept-vagal-afferent-neurons|미주 구심성 뉴런]]이 말초에서 약물을 감지해 NTS로 신호를 올리는 경로. **약물 분자가 뇌로 들어가지 않는다**는 점에서 1–3층과 범주가 다르다.

- **Secher et al. 2014** — rat에서 liraglutide 의존적 체중 감소는 **미주신경·area postrema·PVN의 GLP-1R와 무관**했다. → 미주 경로는 적어도 liraglutide 체중 감량에 **필요하지 않다**.
- 위키: [[zhang-2021-area-postrema-cell-types-that|Zhang 2021]] — exendin-4 malaise는 뇌간 AP GLP1R 경유이고 **vagal이 아니다**.
- 반면 급성 위배출 지연·일부 포만 신호에는 미주 경로가 기여한다([[de-lartigue-2026-critical-role-gut-brain-signalling|de Lartigue 2026]]).

**이 층이 설명하는 것**: 급성 GI 효과, 그리고 "중추 효과처럼 보이는 말초 기원" 혼동의 원천.
**설명하지 못하는 것**: 만성 체중 감량의 대부분. 다만 **교란 요인으로서는 모든 말초 투여 실험에 상주**한다(아래 '방법론적 함정').

### 4층 요약표

| 층 | 해부 관문 | 대표 근거 | 설명 가능 | 설명 불가 |
|---|---|---|---|---|
| ① CVO | AP·SFO·OVLT·ME·NTS 일부 | Gabery 2020; Skovbjerg 2023; [[liu-2025-gipr-ab-glp-1-peptide]] | 오심·CTA, 세마글루타이드 체중감량, brain-wide FOS | 피질·해마, 심부 변연계, ME 원거리 시상하부 |
| ② Tanycyte | ME→MBH transcytosis | Imbernon 2022; Gabery 2020; Bakker 2022 | ARC/MBH 작용, 혈당·식이 의존 약효 변동 | hindbrain, 변연계, DMH 도달 여부 미검증 |
| ③ BBB 본체 | 내피 통과 — 기전은 병기(수용체 매개 / adsorptive transcytosis / 수동확산) | Kastin 2003; Salameh 2020; Fu 2020; Rhea 2024; Kastin 2002(내인성 GLP-1) | Ex-4/lixisenatide의 변연계·해마 작용 | 아실화 장기작용 약물 전부 |
| ④ 미주 구심성 | 약물 진입 아님 | Secher 2014(음성); [[zhang-2021-area-postrema-cell-types-that]] | 급성 GI·일부 포만 | 만성 체중감량 |

### 6경로 분류와의 대응 (병합 전 `concept-glp1ra-cns-penetrance`)

병합된 페이지는 같은 현상을 **6경로**로 나눴다. 두 분류는 대부분 포개지지만 두 군데가 어긋난다.

| 6경로 (병합 전 페이지) | 그 페이지의 요지·근거 | 이 페이지의 층 |
|---|---|---|
| ① CVO 직접 노출 | AP·SFO·OVLT·정중융기는 BBB가 불완전 → 혈중 펩타이드를 그대로 감지. 대형 펩타이드 GLP-1RA의 주 무대 ([[concept-area-postrema]] · [[concept-dorsal-vagal-complex]] · [[gao-2026-semaglutide-drives-weight-loss-through]] · [[liu-2025-gipr-ab-glp-1-peptide]]) | **1층** |
| ② Tanycyte transcytosis | 정중융기·3V 벽의 tanycyte가 liraglutide를 시상하부로 수송(마우스). silencing 시 수송·식욕효과 감소 ([[concept-tanycytes]] · [[sabbagh-2026-repurposing-glucagon-like-peptide-1]]) | **2층** |
| ③ 수용체 매개 내피 수송 (RMT-유사) | 뇌 내피세포의 GLP-1R 경유. exendin(9–39) 전처치로 exendin-4 흡수 거의 완전 차단 (Fu 2020 → [[west-2025-are-glucagon-like-peptide-1-glp-1-receptor]]) | **3층**의 한 기전 |
| ④ 수동확산 | 내인성 GLP-1·[Ser8]GLP-1은 비포화성으로 유입, exendin(9–39)에 불응. 지질용해도가 낮은데도 통과하는 역설 (Kastin 2002 → [[west-2025-are-glucagon-like-peptide-1-glp-1-receptor]] · [[steinert-2017-ghrelin-cck-glp-1-pyy-secretory]]) | **3층**의 한 기전 |
| ⑤ 저분자의 직접 통과 | danuglipron(555.6 Da)이 BBB를 넘어 심부 CeA 뉴런을 직접 활성 ([[godschall-2026-a-brain-reward-circuit-inhibited]] · [[concept-central-amygdala-glp1r]]) | **3층**(분자군이 다름) — 단 아래 충돌 5 |
| ⑥ 회로 중계 (진입 아님) | 약물이 닿은 CVO·시상하부에서 출발한 신경 투사가 심부를 움직임. 큰 분자도 제한적 침투에 광범위 CNS FOS ([[sabbagh-2026-repurposing-glucagon-like-peptide-1]] · [[liu-2025-gipr-ab-glp-1-peptide]] · [[concept-central-amygdala-glp1r]]) | **층이 아님** — 이 페이지는 '접근'과 구분되는 **회로 동원** 층위로 다룬다('왜 문제인가' 마지막 문단, 충돌 1·2) |

- **3층 = 경로 ③ + ④ + ⑤**: 이 페이지의 3층은 "BBB 본체를 넘는가"로 묶고, 6경로는 그 안을 **기전**(수용체 매개 vs 수동확산)과 **분자군**(저분자)으로 쪼갠 것이다.
- **4층(미주 구심성)은 6경로에 대응 항목이 없다.** 경로 ⑥과 4층은 "약물 분자가 그 부위에 들어가지 않는다"는 점이 같지만 출발점이 다르다 — 4층은 **말초**(미주 구심성 Glp1r⁺ 뉴런), ⑥은 약물이 이미 닿은 **중추 부위**(CVO·시상하부).
- **공학적 우회**는 두 분류 모두 자연 경로와 따로 둔다: caveolae 수송([[du-2026-oral-glp1-receptor-agonist-promotes|OHP2]])과 TfR·CD98hc 수용체매개 transcytosis([[concept-blood-brain-barrier-shuttle]])는 **분자를 바꿔** 노출을 얻는 설계이며 현행 승인약의 경로가 아니다.
- 다른 페이지가 "6경로 중 ②"처럼 옛 번호로 가리키더라도 위 표로 환산하면 된다.

## 증거등급 사다리 (강→약)

"닿는다"는 주장이 어떤 종류의 측정에 기대는지를 여섯 등급으로 나눈다. 약물별 표와 다른 페이지의 "등급 A/B/F" 표기는 이 사다리를 가리킨다.

| 등급 | 무엇을 보나 | 종 | 실례 |
|---|---|---|---|
| **A. 뇌 유입속도 정량** | 방사표지 multiple-time regression의 **Ki**, %ID/g, capillary depletion(실질 vs 혈관 분리) | 설치류 | Salameh 2020(→ [[west-2025-are-glucagon-like-peptide-1-glp-1-receptor]] p.1160), Kastin & Akerstrom 2003, Rhea 2024 |
| **B. 표지 리간드 부위 검출** | 형광·방사 리간드의 뇌 부위 지도 | 설치류 | Secher 2014(CVO·ARC·PVN), Gabery 2020, Skovbjerg 2023, [[gao-2026-semaglutide-drives-weight-loss-through\|Gao 2026]](AP·ARC 표지), [[thorens-2024-building-the-glucagon-like-peptide-1-receptor\|Thorens 2024]]의 "쉽게 접근" 서술 |
| **C. 뇌내 2차 신호** | cAMP·PKA 상승, FOS 유도 | 설치류 | Hunter & Hölscher 2012(cAMP), Fu 2020(PKA), FOS 지도 다수 |
| **D. 인간 CSF 농도** | 직접 측정 | 인간 | exenatide **≈1–2%**(PD; West 2025가 든 유일한 인간 직접 수치) + 이 페이지가 웹에서 더한 liraglutide 0.02%·semaglutide ≈0.4%(원문 미열람) |
| **E. 인간 PET 수용체 점유** | in vivo 표적 engagement | 인간 | **뇌에서 점유를 정량한 자료 없음**. ⁶⁸Ga-NODAGA-exendin-4 PET 시도는 BBB 안쪽 음성(원문 미열람). West 2025가 다음 단계로 지목 |
| **F. 인간 기능·임상 proxy** | fMRI 활성·연결성, 운동·인지 종점 | 인간 | [[bae-2019-glucagon-like-peptide-1-receptor\|Bae 2019]], Watson 2019(DMN), LIXIPARK, Exenatide-PD |

- 뇌 **조직 농도**(ELISA; Hunter & Hölscher 2012)는 A와 B 사이에 놓이지만 혈액 잔류분을 분리하지 않는다(약물별 표 lixisenatide 칸).

> ⚠️ **C와 F는 '도달'의 증거가 아니다.** FOS·cAMP는 회로 중계로도 생기고, fMRI·임상 개선은 말초 대사 변화로도 생긴다. 위키 본문에서 "뇌에 간다"를 주장할 때는 **등급 A/B/D만** 근거로 쓰고, 나머지는 "중추 효과"라고만 쓸 것. D도 parenchyma 농도의 대리지표로는 체계적으로 틀릴 수 있다(방법론적 함정 3).
>
> ⚠️ **병합 시 정정**: 병합 전 페이지는 D를 "exenatide 1–2% 한 건이 사실상 유일", E를 "없음"으로 적었다. **West 2025 안에서는** 맞는 말이다. 이 페이지는 웹 1차 문헌에서 liraglutide·semaglutide CSF 수치와 인간 PET 시도(음성)를 따로 확보했으므로(모두 원문 미열람) 위 표처럼 고쳐 적는다.

## 약물별 중추 접근 증거

### 한눈 요약 — 약물 × 실질 통과 근거(A/B 등급) × 주 접근 층

| 약물 | 실질 통과 (A/B 등급) | 주 접근 층 |
|---|---|---|
| **Exendin-4 / exenatide** | **가장 강함** — A: Ki 0.4231(Salameh 2020)·2.476(Rhea 2024; ⚠️ 병기), 60분 0.54% ID/g; 5분 내 검출 + PKA↑(Fu 2020). B: 시상하부·뇌간 "쉽게 접근"([[thorens-2024-building-the-glucagon-like-peptide-1-receptor\|Thorens 2024]]), 단 LSFM 2 h는 CVO 우세(Skovbjerg 2023) | 3층 (+1층) |
| **Lixisenatide** | **중등도** — A: Ki 0.3271. 조직 농도: 저용량에서도 통과(Hunter & Hölscher 2012) | 3층 |
| **Liraglutide** | **⚠️ 상충** — A: 유입 미측정(Salameh 2020) / 조직 농도: 고용량에서 통과 + cAMP↑(Hunter & Hölscher 2012). B: CVO·ARC·PVN 검출(Secher 2014) | 1·2층 |
| **Semaglutide** | **없음(A)** — Salameh 2020 유입 미측정, in vitro 인간 BBB 모델 미투과([[liskiewicz-2026-glp-1r-gipr-ppar]]). B: CVO·뇌실 인접부(Gabery 2020), 시상하부·뇌간 "쉽게 접근"(Thorens 2024) | 1층(AP 중심)·2층 |
| **Dulaglutide** (Fc 융합) | A: Ki 1.095(Rhea 2024, 원문 미열람·해석 주의). West 2025에는 **데이터 없음** | 불명 |
| **Tirzepatide** (GLP-1/GIP) | A: ⚠️ 병기("통과하지 않는 것으로 보임" vs "다른 속도로 통과"). West 2025에는 **데이터 없음** | 1층 + GIP 축(ME 투과성) |
| **5중작용제** (GLP-1–GIP–PPAR) | 미투과(in vitro 인간 BBB 모델) | 1층(AP·NTS FOS) — [[liskiewicz-2026-glp-1r-gipr-ppar]] |
| **MariTide / GIPR-Ab–GLP-1** | 뇌 침투 최소(mAb 혈장의 0.1–0.4%, 전임상) | 1층(CVO에서 검출) — [[veniant-2024-a-gipr-antagonist-conjugated-to]] · [[liu-2025-gipr-ab-glp-1-peptide]] |
| **Danuglipron** (저분자, 555.6 Da) | 심부 CeA 직접 활성(수용체 대조 근거 — 농도 측정 아님) | 3층 |
| **Orforglipron** (저분자) | ⚠️ rat brain/plasma 0.0078(원문 미열람). **NTS 편향 FOS**는 프로파일 차이이지 침투 증거가 아니다 | 불명 |
| **OHP2** (공학 설계) | 통과(마우스) | 공학적 우회(caveolae 수송) — [[du-2026-oral-glp1-receptor-agonist-promotes]], 임상 미진입 |
| **내인성 GLP-1 / [Ser8]GLP-1** | 통과(비포화; Kastin 2002) | 3층(수동확산) — **약물과 분리해 읽을 것** |

### 상세 표

| 약물 | MW·구조 | albumin/fatty-acid 결합 | 반감기 | 중추 접근 증거(종·방법) | 표지된 영역 | 한계 |
|---|---|---|---|---|---|---|
| **Exendin-4 / exenatide** | 39 aa, ≈4.2 kDa, **비아실화**. Gila monster 유래, Gly8로 DPP-4 저항 | 없음 (유리 분율 높음) | exenatide BID ≈2.4 h | **BBB 본체 직접 통과**: 마우스 multiple-time regression + capillary depletion + HPLC (Kastin & Akerstrom 2003). Salameh 2020: Ki **0.4231 ± 0.0703 μL/g-min**, 60분 **0.54% ID/g**(West 2025 p.1160으로 확인). Rhea 2024: 방사표지 Ki 2.476 μl/g·min(원문 미열람; ⚠️ Salameh 값과 약 6배 차 — 3층 병기 ①). Fu 2020: 정맥 투여 5분 내 검출·PKA↑, exendin(9–39)로 흡수 소실. 형광 Ex4 whole-brain LSFM 2 h (Skovbjerg 2023). 인간 **CSF:plasma 0.014**(AD pilot, 10 µg s.c. 1 h 내) / **0.021**(PD, 2 mg 주1회); West 2025(p.1162)·[[fang-2025-glucagon-like-peptide-1-medicines\|Fang 2025]]는 PD 3상(Vijiaratnam 2025)을 인용해 각각 "혈청의 약 1–2%"·"순환 농도의 1/100"로 적어 같은 자릿수 | LSFM 2 h에서는 **AP·NTS 중심(CVO 우세)**; capillary depletion은 parenchyma 전반. VTA·NAc는 기능적·미세주입 근거 + 형광 Ex-4가 시상하부보다 깊은 VTA·NAc에서 보고됨(고용량 필요; [[kim-2025-mechanisms-of-glucagon-like-peptide\|Kim 2025]]). [[thorens-2024-building-the-glucagon-like-peptide-1-receptor\|Thorens 2024]]: 시상하부·뇌간 "쉽게 접근" | CVO 우세 분포와 "parenchyma 도달"이 같은 실험에서 조화되지 않음. 고용량 자기억제(포화) → **용량-비선형**. 인간 CSF는 BBB 투과의 나쁜 대리지표 |
| **Lixisenatide** | exendin-4 골격 + C-말단 Lys6, **비아실화** | 없음 | ≈3 h | 마우스 ELISA 기반 뇌 농도: **2.5·25·250 nmol/kg 전 용량에서 통과**(30 min), 2.5–25에서 3 h까지 (Hunter & Hölscher 2012); 3주 연일 투여로 세포 증식 1.8배·미성숙 뉴런 1.7배. Salameh 2020: Ki **0.3271 ± 0.0726 μL/g-min**("중등도 투과성"; West 2025 p.1160으로 확인) | 뇌 전체 조직 농도(부위 해상도 없음) | 부위 분해 없음. 전신 ELISA는 혈액 잔류 교란. 인체 근거는 fMRI([[bae-2019-glucagon-like-peptide-1-receptor\|Bae 2019]], 사용자 lab)·LIXIPARK로 모두 등급 F |
| **Liraglutide** | **3751.2 Da**, C16 palmitic acid를 γ-Glu로 Lys26에 | **>98% albumin 결합** | ≈13 h | 형광 liraglutide 마우스: **CVO + ARC·discrete 시상하부 뉴런 결합**, `Glp1r−/−`에서 소실, **ARC POMC/CART 내재화**(Secher 2014). **tanycyte transcytosis 의존**(Imbernon 2022, GLP-1R KD·iBot 둘 다 수송+항비만 효과 차단). Hunter & Hölscher 2012: 25·250 nmol/kg에서만 통과. ⚠️ **Salameh 2020: 측정 가능한 BBB influx 없음**. 인간 **CSF:plasma 0.02%**(n=8, Christensen 2015) | CVO·ME·ARC(POMC/CART)·일부 시상하부. 위키: [[concept-tanycytes]] | 형광 접합체 ≠ 약물 자체(분자량·전하 변화). 용량 비선형(저용량에서 미검출). 인간 CSF 농도는 **체중 감소와 무상관**. 체중감량은 **미주·AP·PVN GLP-1R 비의존**(Secher 2014) |
| **Semaglutide** | **4113.58 Da**, Aib8 + C18 diacid + OEG/γGlu spacer @Lys26 | **>99% albumin 결합** | ≈1주 | ★ **BBB 미통과 + CVO·뇌실 인접부 경유** — rodent whole-brain 형광 영상(LSFM 자동 뇌지도 + MRI), c-Fos 10개 영역, AP 전사체 변화(Gabery 2020). GLP-1R는 rat ARH **tanycyte에만, 내피엔 없음**; in vitro에서 tanycyte가 흡수(Gabery 2020). Salameh 2020: 측정 가능한 influx 없음. in vitro 인간 BBB 모델에서도 미투과([[liskiewicz-2026-glp-1r-gipr-ppar]]). ⚠️ [[thorens-2024-building-the-glucagon-like-peptide-1-receptor\|Thorens 2024]]는 형광 리간드 근거로 시상하부·뇌간 "쉽게 접근"이라 적는다(등급 B — 충돌 4). ⚠️ [[west-2025-are-glucagon-like-peptide-1-glp-1-receptor\|West 2025]] **초록**은 semaglutide를 BBB 통과 약물로 들지만 **본문**은 유입 미측정·CVO 경유다. 위키: AP가 1차 작용부위([[gao-2026-semaglutide-drives-weight-loss-through]]). 인간 **CSF:plasma ≈0.4%**, 1.0 mg s.c. 12주 후 **10명 중 8명에서 LLOQ 초과**(EVOKE 하위연구, Johannsen, CTAD 2025 poster P091) | 뇌간(AP·NTS)·septal nucleus·시상하부 일부·SFO·OVLT·ME | **변연계·피질·해마 미도달** → [[cummings-2026-efficacy-and-safety-of-oral\|EVOKE]] 음성의 '뇌 도달 부족' 가설 근거. 인간 CSF 데이터는 **학회 포스터 수준**(peer review 전)이고 plasma–CSF 무상관 |
| **Dulaglutide** | GLP-1 analogue–IgG4 **Fc 융합, ≈63 kDa** | albumin 아님(Fc 재순환) | ≈5일 | ¹²⁵I-dulaglutide(BAF)에서 **측정 가능한 Ki 1.095 μl/g·min**, 1 h 내 빠른 흡수(Rhea 2024, 원문 미열람). [[sabbagh-2026-repurposing-glucagon-like-peptide-1\|Sabbagh 2026]] p.59도 Rhea 2024를 인용해 "dulaglutide·tirzepatide가 다른 속도로 BBB 통과"라고 적는다. [[west-2025-are-glucagon-like-peptide-1-glp-1-receptor\|West 2025]]에는 dulaglutide 침투 데이터가 **없다** — 검색어·키워드에만 등장하고 "다뤄지지 않은 승인약"으로 남긴다(p.1163). '통과 못 함'의 근거가 아니라 **자료 공백** | 부위 해상도 없음 | 63 kDa 단백이 수용체 매개 수송 없이 BBB를 넘는다는 것은 생물물리적으로 설명이 어렵다 → **방사표지 단편·유리 ¹²⁵I 혼입** 가능성(연결 가설 — 원문 주장 아님). REWIND의 인지 신호는 뇌 도달의 증거가 아니다 |
| **Tirzepatide** | 39 aa, ≈4.8 kDa, C20 diacid (GIP/GLP-1 dual) | 높은 albumin 결합 | ≈5일 | **BBB를 통과하지 않는 것으로 보임**(Rhea 2024, 원문 미열람). ⚠️ 단 [[sabbagh-2026-repurposing-glucagon-like-peptide-1\|Sabbagh 2026]] p.59는 같은 논문을 "다른 속도로 통과"로 인용 — 3층 병기 ②. West 2025에는 데이터 없음(검색어에만). 돼지 PET([⁶⁸Ga]Ga-DO3A-Exendin-4): tirzepatide의 GLP-1R 점유는 비교약(SAR441255, CNS >60%)보다 **낮음**(*eBioMedicine* 2025, PMID 41274021) | — | 중추 효과는 전부 CVO·하류 회로로 설명되어야 함. **GIP 쪽이 ME 혈관 투과성을 올려 GLP-1RA 접근을 늘린다**는 별도 축이 있음([[hansford-2025-glucose-dependent-insulinotropic-polypeptide-receptor]]) |
| **Albiglutide** (단종) | albumin–GLP-1 융합 ≈73 kDa | 융합형 | ≈5일 | Ki 1.379 μl/g·min(Rhea 2024). [[sabbagh-2026-repurposing-glucagon-like-peptide-1\|Sabbagh 2026]]: 큰 분자도 제한적 침투에도 **CNS FOS를 강하게 유발** | — | dulaglutide와 같은 해석 문제 |
| **GIPR-Ab/GLP-1 접합체** (maridebart cafraglutide 계열) | 항체 + 펩타이드 접합(~153.5 kDa, [[veniant-2024-a-gipr-antagonist-conjugated-to\|Véniant 2024]]) | — | 월 1회급 | **CVO(OVLT·SFO·ME·AP)에서 검출** — BBB 우회([[liu-2025-gipr-ab-glp-1-peptide\|Liu 2025]]). 중추 GIPR·GLP-1R **둘 다** 필요. 뇌 침투 자체는 최소(mAb 혈장의 0.1–0.4%, 전임상; Véniant 2024) | OVLT·SFO·ME·AP + 하류 c-Fos(BST·PVT·CeA·PBN·NTS·DMV) | CVO 한정. 위키는 이것이 **RMT 셔틀이 아님**을 명시([[concept-blood-brain-barrier-shuttle]]) |
| **경구 소분자** — danuglipron | **555.6 Da** 비펩타이드 (C₃₁H₃₀FN₅O₄) | 없음 | 단시간(BID) | **humanized `Glp1r^S33W`** 마우스에서 **심부 CeA 직접 활성**: hGLP1R 측에서만 FOS↑·GCaMP transient·Gs-cAMP 탈분극([[godschall-2026-a-brain-reward-circuit-inhibited\|Godschall 2026]]). 경구 투여는 IP보다 **AP 활성이 낮음**(느린 흡수·낮은 peak) | CeA·NTS·AP | 간독성으로 **개발 중단**(도구로만 존속). "직접"의 근거는 **대조측 수용체 음성**이지 **농도 측정이 아니다** |
| **경구 소분자** — orforglipron | 비펩타이드 소분자, allosteric agonist | 없음 | 1일 1회 | 위키: **AP보다 NTS 편향 FOS**, aversion 행동 프로파일과 분리([[godschall-2026-a-brain-reward-circuit-inhibited\|Godschall 2026]]). NIH 보도자료는 "과거 생각보다 **깊은** 뇌 영역(CeA)에 직접 닿는다"로 요약([nih.gov](https://www.nih.gov/news-events/news-releases/oral-small-molecule-glp-1-drugs-penetrate-deep-into-brain-suppress-cravings), 2026). ⚠️ **그러나 rat brain/plasma·CSF/plasma 비는 0.0078로 펩타이드 GLP-1 약물과 비슷한 수준**(orforglipron 종합 리뷰, *Int J Mol Sci* 2026;27:1409, doi:10.3390/ijms27031409, 원문 미열람) | CeA·NTS(기능적 FOS) | **소분자=뇌투과라는 직관은 측정값과 충돌**(0.0078). 'penetrant'를 농도로 정의하면 음성, 회로 동원으로 정의하면 양성 → 용어 혼용 주의. NTS 편향 FOS는 **프로파일 차이이지 침투 증거가 아니다**(등급 C) |
| **뇌투과 설계형** — OHP2 | exendin 계열 펩타이드, **caveolae 수송**으로 경구·BBB 투과 개선 | — | — | 뇌 특이 `Glp1r` KO가 효과를 크게 약화, 말초 KO는 부분만 → **뇌 주도**. 반면 세마글루타이드는 **말초 KO에서만** 약화([[du-2026-oral-glp1-receptor-agonist-promotes\|Du 2026]]) | 피질·해마(성상교세포 GLP-1R) | 수컷 마우스·Aβ 모델 한정, 임상 미진입. "뇌투과↑→임상효과↑"는 저자도 미검증이라 명시 |
| **5중작용제** (GLP-1–GIP–PPAR) | GLP-1–GIP 골격에 PPAR 소분자(lanifibranor) 공유결합 | — | — | in vitro 인간 BBB 모델 **미투과**(liraglutide·semaglutide·acyl-GIP와 같음). 그럼에도 ARC·DMH·AP·NTS FOS는 GLP-1–GIP와 동일하고 brainstem proteome 350개 단백질 변동([[liskiewicz-2026-glp-1r-gipr-ppar\|Liskiewicz 2026]]) | ARC·DMH·AP·NTS — **FOS이지 분포가 아님** | 분포 데이터 없음. 근거는 등급 C뿐 → 1층 + 회로 중계로 읽을 것 |
| **내인성 GLP-1 / [Ser8]GLP-1** (약물 아님) | 천연 펩타이드 / DPP-4 저항 안정 유사체 | — | 내인성 GLP-1 혈장 반감기 1–2분([[kim-2025-mechanisms-of-glucagon-like-peptide\|Kim 2025]]) | **비포화성 유입 = 수동확산**: 마우스 multiple-time regression, [Ser8]GLP-1 방사능의 50.6%가 실질 도달, 과량 비표지 펩타이드·exendin(9–39)로 억제되지 않음(Kastin 2002; West 2025 pp.1159–1160으로 확인). [[steinert-2017-ghrelin-cck-glp-1-pyy-secretory\|Steinert 2017]]도 같은 논문을 인용 | 부위 해상도 없음 | **약물과 분리해 읽을 것**. 저지용성인데도 통과하는 역설. Fu 2020은 GLP-1-FAM 흡수가 exendin(9–39)로 약 50% 줄었다고 보고해 '비포화'와 어긋난다 |

> **MW 출처 주의**: liraglutide 3751.2 Da·semaglutide 4113.58 Da·danuglipron 555.6 Da는 본 세션에서 출처로 확인했다. exenatide ≈4.2 kDa·tirzepatide ≈4.8 kDa·dulaglutide ≈63 kDa·albiglutide ≈73 kDa는 **통상 값으로 표기했을 뿐 본 세션에서 1차 확인하지 않았다** — 인용 시 라벨·SPC로 재확인할 것. ⚠️ 병기: 2026-10-04에 병합된 West 2025 중복 페이지의 참고용 표는 dulaglutide를 **~59.7 kDa**로 적었다(역시 통상 값 표기). ≈63 kDa와 어느 쪽이 맞는지 위키 `raw/`로 확인되지 않는다. West 2025 원문에는 분자량·albumin 결합률·반감기 수치가 없다.

## 분자 설계 결정인자

- **Acylation(지방산 수식)**: albumin 결합↑ → 혈중 반감기↑ / **BBB 투과↓**. liraglutide·semaglutide가 뇌 유입을 보이지 않는 이유로 제시된다(Salameh 2020의 해석; [[west-2025-are-glucagon-like-peptide-1-glp-1-receptor|West 2025]] p.1160). ⚠️ 단 Skovbjerg 2023은 exendin-4에 지질(C16)을 붙이면 PVH·medial habenula까지 분포가 **넓어진다**고 보고한다 — 측정이 다르다(유입속도 vs 형광 분포). 미해결 질문 4.
- **배출 수송체는 원인이 아니다**: 표지·비표지 liraglutide를 함께 주입해도 뇌 유출이 달라지지 않았다 → 낮은 축적은 유입 문제이지 efflux 문제가 아니다(West 2025 p.1160).
- **분자 크기**: 저분자(danuglipron 555.6 Da)는 심부 CeA를 직접 활성화하고, 대형 항체접합체(~153.5 kDa)는 뇌 침투가 최소다. 단 **Fc 융합·분자량에 대한 체계적 비교는 위키 안에 없다** — West 2025에는 dulaglutide 데이터가 없고, Rhea 2024의 dulaglutide·albiglutide Ki(원문 미열람)는 크기 순서와 맞지 않아 해석이 걸려 있다(방법론적 함정 1, 충돌 6). 저분자 쪽도 농도로 재면 낮다(orforglipron 0.0078; 충돌 5).
- **지질친화도만으로 설명되지 않는다**: [Ser8]GLP-1은 저지용성인데도 통과한다(Kastin 2002). [[kim-2025-mechanisms-of-glucagon-like-peptide|Kim 2025]]는 Ex-4가 지질친화도가 높지만 BBB 통과에는 고용량이 필요하다고 적는다. 단순 친유성 규칙은 분자마다 깨진다.
- **뇌내 대사**: 빠르게 들어간 분자(DA-JC4·exendin-4·DA3-CH)일수록 뇌 안에서 온전한 분자로 회수되는 비율이 낮았다 → **도달 ≠ 체류**(West 2025 p.1160).

## 방법론적 함정

### 1) 형광·방사표지 tracer는 약물이 아니다
- **형광 접합체**는 분자량·전하·지질친화도를 바꾼다. Secher 2014의 형광 liraglutide, Gabery 2020의 형광 세마글루타이드, Skovbjerg 2023의 형광 Ex4 모두 이 한계를 공유한다. 특히 Skovbjerg 2023의 핵심 결과가 "**지질화가 CNS 접근성을 바꾼다**"라는 것이므로, **표지에 쓰이는 지질·형광단 자체가 결과 변수를 건드린다**(연결 가설 — 원문 주장 아님).
- **¹²⁵I 표지**는 탈요오드화 산물·펩타이드 단편이 '뇌 유입'으로 집계될 수 있다. Rhea 2024에서 **63 kDa dulaglutide와 73 kDa albiglutide가 4 kDa급 exenatide와 같은 자릿수의 Ki**를 보인 것은 이 가능성을 강하게 시사한다(연결 가설 — 원문 주장 아님). Salameh 2020이 HPLC·capillary depletion 같은 대조를 함께 돌린 이유다.
- **표지 분포 ≠ 수용체 점유 ≠ 기능**. Secher 2014에서 liraglutide는 AP·PVN에 닿았지만 그 부위 GLP-1R는 체중 감소에 **필요하지 않았다**. 닿는다고 쓰는 것이 아니다.

### 2) 영상(FOS·fMRI·PET)은 접근을 측정하지 않는다
- **FOS**: Gabery 2020에서 활성 영역 10곳 중 lateral PBN은 **약물이 직접 닿지 않은** 2차 영역이었다. [[liskiewicz-2026-glp-1r-gipr-ppar|Liskiewicz 2026]]은 **BBB 미투과** 분자가 ARC·DMH·AP·NTS에서 FOS를 올렸다. → **FOS 지도는 회로 지도이고 분포 지도가 아니다.**
- **인간 fMRI**: [[bae-2019-glucagon-like-peptide-1-receptor|Bae 2019]](사용자 lab)·[[kim-2024-glp-1-increases-preingestive-satiation|Kim 2024]]의 인간 신호는 **약물이 그 voxel에 있다는 증거가 아니다**. [[west-2025-are-glucagon-like-peptide-1-glp-1-receptor|West 2025]]가 초록(p.1158)에서 CNS penetrance를 **"brain connectivity 효과로 대리(proxy)"** 한다고 명시한 것이 바로 이 약점의 자백이다 — 대리지표는 상류(접근)와 하류(회로 중계) 중 어느 쪽인지 구분하지 못한다. 같은 리뷰는 인간 확인이 "제한적·간접적"이고 CNS 효과가 말초 경로로 매개될 수 있다고 스스로 적는다. 실제로 그 리뷰가 인용한 Bae 2019는 lean과 obese에서 조절 방향이 반대이고 GLP-1R 비발현 영역(방추이랑)이 변한 연구다.
- **PET**: ⁶⁸Ga-NODAGA-exendin-4 PET은 비만 성인의 **BBB 안쪽 뇌에서 유의한 흡수가 없었고 pituitary(BBB 밖)에서만 명확**했다(*PMC8699257*, 원문 미열람) → 현재 추적자로는 인간 CNS GLP-1R 분포를 볼 수 없다. 돼지 점유 PET은 가능하지만 종이 다르다(*eBioMedicine* 2025).

### 3) CSF 농도는 뇌 parenchyma 농도의 대리지표로 체계적으로 틀린다
- CSF는 choroid plexus(BBB 밖)에서 분비되고 ventricle→SAS로 흐른다. GLP-1R는 **choroid plexus 상피에도** 있어 CSF 자체가 약리 표적이 된다(exenatide의 두개내압 감소 효과 — 특발성 두개내압상승 RCT, [[fang-2025-glucagon-like-peptide-1-medicines|Fang 2025]]).
- 따라서 **CSF가 낮다고 parenchyma가 낮다는 보장도, CSF가 검출된다고 parenchyma에 닿았다는 보장도 없다**. Christensen 2015의 결정적 소견은 농도 자체가 아니라 **plasma–CSF 무상관(P=0.67)** 과 **CSF–체중감소 무상관(P=0.69)** 이다. EVOKE 하위연구도 **plasma–CSF 무상관**을 보고했다. 두 연구 모두 albumin 결합으로 설명한다.
- 자릿수 비교: liraglutide 0.02% ≪ semaglutide ≈0.4% < exenatide 1.4–2.1%. 참고로 AD 단클론항체는 혈중의 0.1–0.3%, 소분자 CNS 약물은 흔히 >5%(EVOKE 맥락 요약). 즉 **GLP-1RA는 항체보다는 높고 CNS 약물보다는 훨씬 낮은 띠**에 있다.

### 4) 말초 GLP-1R가 상주 교란 요인이다
- [[concept-vagal-afferent-neurons|미주 구심성 Glp1r⁺ 뉴런]], 위장 운동, 췌장 인슐린/글루카곤, 혈압·염증([[gonzalez-rellan-2026-weight-loss-independent-actions-of|González-Rellán 2026]]) — 전신 투여 실험에서 중추 효과와 분리되지 않는다.
- 분리 설계의 표준은 ① **부위 특이 수용체 조작**([[gao-2026-semaglutide-drives-weight-loss-through|Gao 2026]]의 AP Gs rescue, [[godschall-2026-a-brain-reward-circuit-inhibited|Godschall 2026]]의 부위별 hGLP1R), ② **조직 특이 KO**([[liu-2025-gipr-ab-glp-1-peptide|Liu 2025]]의 `Glp1r^Wnt1−/−`, [[du-2026-oral-glp1-receptor-agonist-promotes|Du 2026]]의 ICV vs IV AAV-Cre), ③ **ICV 대조**([[namkoong-2017-central-administration-of-glp-1|NamKoong 2017]], 사용자 lab) — 단 ICV는 말초 약동학을 전부 우회하므로 "중추 충분성"만 말하고 "말초 약물이 거기 닿는다"는 말하지 못한다.
- ⚠️ [[cao-2024-hunting-for-heroes-brain|Cao 2024]]의 비판을 그대로 옮기면: **GLP-1R 뉴런 조작 ≠ GLP-1R 결손**이고, 부위 간 불일치의 상당 부분은 **약물 종류와 BBB 투과성 차이**에서 온다.

### 5) 용량 비선형과 상태 의존성
- **포화**: Kastin 2003은 고용량에서 exendin-4 자기억제를 보고(단 4개 실험 합산에서만 유의), Salameh 2020은 1 μg까지 비포화라고 보고 — **충돌**. 어느 쪽이든 고용량 전임상 결과를 임상 용량으로 외삽할 수 없다.
- **저용량 절벽**: liraglutide는 2.5 nmol/kg에서 뇌 유입이 검출되지 않았고 25·250에서만 검출됐다(Hunter & Hölscher 2012). 전임상의 '뇌 효과'가 임상 노출에서 성립하는지 별도 확인이 필요하다.
- **상태 의존 gating**: 저혈당이 접근을 늘리고, **비만·고지방식이 그 gating을 끊는다**(Bakker 2022). 즉 **접근성은 상수가 아니라 피험자 상태의 함수**다. → 공복/식후, lean/obese를 섞은 실험은 접근 자체가 교란된다.
- **흡수 속도가 부위를 바꾼다**: 경구 danuglipron은 IP보다 AP 활성이 낮았다 — **느린 흡수·낮은 peak가 CVO(혈중 농도 민감 부위) 동원을 줄인다**([[godschall-2026-a-brain-reward-circuit-inhibited|Godschall 2026]]). 투여 경로·제형이 곧 부위 선택성이다.

## 행동 효과의 귀속 — 어느 효과가 어떤 접근을 요구하나

| 효과 | 귀속 부위 (위키 근거) | 필요한 접근 수준 | 현 근거 상태 |
|---|---|---|---|
| **오심·구토·CTA** | **AP** GLP1R(+GFRAL·CaSR subset) — [[zhang-2021-area-postrema-cell-types-that]]·[[concept-area-postrema]]·[[concept-conditioned-taste-aversion]] | **CVO만으로 충분**. BBB 통과 불필요 | 강함(마우스 인과). 인간 쪽은 `GLP1R` 좌위 변이가 오심을 좌우([[su-2026-genetic-predictors-of-glp1-receptor]]) |
| **체중 감량 그 자체(세마글루타이드)** | **AP** Gs–cAMP — [[gao-2026-semaglutide-drives-weight-loss-through]] (AP에만 Gs 보존 → −7.2% 전량 회복, NTS 무상관) | **CVO만으로 충분** | 강함(마우스). ⚠️ AP 단독 결손군 없음 → 필요성은 상관 수준 |
| **비혐오성 satiety / baseline brake** | **NTS^Glp1r** — [[concept-dorsal-vagal-complex]] (Huang 2024) | NTS는 AP 인접·부분적 BBB 결여 → **CVO 확산으로 설명 가능** | 중간. Gao 2026과 귀속 충돌(아래 ⚠️) |
| **preingestive cognitive satiation** | **DMH^GLP-1R → ARC AgRP GABA 억제** — [[kim-2024-glp-1-increases-preingestive-satiation]]·[[concept-dorsomedial-hypothalamus]] (사용자 lab) | ★ **미해결**. tanycyte 경로는 ME–MBH 축이고 DMH 도달은 미검증. 대안은 **뇌간 Adcyap1^NTS→DMH 상행 입력**([[blid-skoldheden-2026-semaglutide-engages-distinct-brainstem]]) | 회로는 강함(마우스 인과 + 인간 RCT n=28). **약물 도달 경로는 약함** |
| **항상성 섭취(SD) 억제** | **BMH/DMH** GLP1R — [[godschall-2026-a-brain-reward-circuit-inhibited]] | MBH는 tanycyte·ME 경유 설명 가능; DMH는 위와 같은 문제 | 중간(humanized 수용체 + 소분자) |
| **식후 혈당(체중 아님)** | **ARC POMC PKA → DMV → 장 SGLT1** — [[lim-2026-hypothalamic-pomc-neurons-regulate]] | ARC는 ME 인접 → **CVO/tanycyte로 설명 가능**. Secher 2014에서 **ARC POMC/CART 뉴런 내재화 직접 관찰** | 강함 |
| **기호식(hedonic) 섭취 억제** | **CeA^Glp1r → VTA → NAc DA↓** — [[concept-central-amygdala-glp1r]]·[[godschall-2026-a-brain-reward-circuit-inhibited]]·[[duran-2026-the-central-amygdala-gates]] | 심부 → **BBB 통과가 필요하거나, NTS^Gcg 중계로 우회**. 위키: 펩타이드는 주로 간접, 소분자는 직접 가능 | 회로는 강함. **직·간접 비중은 미정** |
| **동기·보상(wanting)·중독** | **VTA·NAc·LDTg** GLP-1R — [[fang-2025-glucagon-like-peptide-1-medicines]]·[[concept-dopamine-reward-system]] | Ex-4는 ③층으로 직접 가능; 아실화 약물은 CeA→VTA 중계 필요 | 전임상 강함, 인간은 관찰연구 위주 |
| **변연계 brake (LS)** | **LS^Glp1r → LHA** — [[concept-lateral-septum]]·[[azevedo-2020-a-limbic-circuit-selectively-links]]·[[lu-2024-dorsolateral-septum-glp-1r-neurons]] | 국소 Ex-4 투여 근거뿐 → **말초 약물의 LS 도달 경로는 미규명** | 회로 중간, 접근 근거 없음 |
| **신경보호(피질·해마)** | 성상교세포/뉴런 GLP-1R — [[concept-glp1-neuroprotection]]·[[du-2026-oral-glp1-receptor-agonist-promotes]] | ★ **가장 높은 접근 요구**. 아실화 약물로는 CVO·tanycyte 어느 경로도 피질·해마를 설명 못 함 | **임상 음성**([[cummings-2026-efficacy-and-safety-of-oral]]·[[edison-2026-liraglutide-in-mild-to-moderate]]). '뇌 도달 부족'은 여러 후보 중 하나 |
| **급성 위배출 지연** | 말초 + 미주 구심성 | **뇌 진입 불필요** | 강함 |

**읽는 법(연결 가설 — 원문 주장 아님)**: 위 표를 접근 요구 수준으로 정렬하면 **"오심·체중감량 = CVO로 충분 → 혈당·항상성 섭취 = ME/tanycyte → hedonic·동기 = 심부(중계 또는 소분자) → 신경보호 = 미해결"** 이라는 사다리가 된다. 임상에서 확립된 효과(체중·혈당·오심)는 모두 **접근 요구가 가장 낮은 칸**에 있고, 실패한 적응증(증상성 AD)은 **가장 높은 칸**에 있다. 이 상관은 '뇌 도달 부족' 가설과 정합적이지만, 병기·용량·표적 적합성 등 다른 설명을 배제하지 않는다([[concept-glp1-neuroprotection]]의 경고 참조).

## ⚠️ 위키 내 충돌·긴장 (병기 — 어느 쪽도 지우지 않음)

1. **시상하부 효과는 약물의 직접 진입을 요구하는가, 뇌간에서 중계되는가**
   - **직접 진입 쪽**: Secher 2014(형광 liraglutide가 ARC POMC/CART 뉴런에 내재화) + Imbernon 2022(tanycyte GLP-1R/transcytosis 차단만으로 liraglutide 항비만 효과 소실) → **시상하부 국소 수용체가 경로**.
   - **뇌간 중계 쪽**: [[gao-2026-semaglutide-drives-weight-loss-through|Gao 2026]]은 **AP에만 Gs를 보존해도 세마글루타이드 체중 감량이 전량 회복**된다고 보고 → 시상하부 진입이 체중 감량에 필수가 아님. [[blid-skoldheden-2026-semaglutide-engages-distinct-brainstem|Blid Sköldheden 2026]]은 **Adcyap1^NTS→ARC/→DMH** 상행 투사가 AgRP 억제와 대사 효과를 나른다고 보고 → **수용체 없는 하류 회로**로 설명.
   - **봉합 후보**: 약물이 다르다(liraglutide vs 세마글루타이드), 효과 축이 다르다(지방산 산화·식이 vs 체중), 조작 층위가 다르다(수송 차단 vs G단백 결손). 그러나 **양쪽 모두 "거의 전부"를 주장**하므로 둘 다 100%일 수는 없다. 상대 약물에서 재현한 실험은 없다(연결 가설 — 원문 주장 아님).

2. **Gao 2026 vs Blid Sköldheden 2026 — NTS의 역할**
   위키가 이미 [[concept-dorsal-vagal-complex]]·[[gao-2026-semaglutide-drives-weight-loss-through]]·[[blid-skoldheden-2026-semaglutide-engages-distinct-brainstem]]에 병기해 둔 긴장. Gao: **NTS^Glp1r의 Gs 신호는 체중 감량과 무상관**. Blid Sköldheden: **Adcyap1^NTS와 그 시상하부 투사가 약효 relay**. 층위가 다르다(수용체 G단백 vs AP 하류 회로 노드) — "NTS가 약물을 직접 감지하지 않아도 중계는 한다"가 가장 단순한 봉합이나 **한 실험 안에서 검증되지 않았다**. 접근 경로 관점의 함의: 이 봉합이 맞으면 **NTS는 접근 부위가 아니라 중계 부위**이고, '약물 분포 지도'와 '효과 지도'는 원칙적으로 달라야 한다.

3. **Tanycyte 경로의 크기(magnitude)**
   Imbernon 2022는 tanycyte 수송 차단만으로 liraglutide의 **식이·체중·지방량·지방산 산화 효과가 모두 차단**된다고 보고 — 사실상 "이 경로가 전부". 반면 [[gao-2026-semaglutide-drives-weight-loss-through|Gao 2026]]은 세마글루타이드 체중 감량이 **AP만으로 전량** 설명된다고 보고 — 사실상 "시상하부는 불필요". 위키의 [[concept-tanycytes]]는 Imbernon을 "**시상하부 진입의 분자 game-changer**"로, [[concept-dorsal-vagal-complex]]는 "말초 large-peptide GLP1RA는 **주로 DVC(AP)를 통해** 작용"으로 적고 있어 **두 서술이 위키 안에서 그대로 병존**한다. 추가로 [[hansford-2025-glucose-dependent-insulinotropic-polypeptide-receptor|Hansford 2025]]는 같은 ME에서 **tanycyte가 아니라 올리고덴드로사이트 GIPR→VEGF-A→혈관 fenestration**으로 접근을 설명해 **세 번째 경쟁 기전**을 추가하며, 위키는 이 둘 사이에 "대조 실험 없음"이라 적는다.

4. **liraglutide·semaglutide가 BBB를 통과하는가**
   - **통과한다**: Hunter & Hölscher 2012(liraglutide 25·250 nmol/kg); [[sabbagh-2026-repurposing-glucagon-like-peptide-1|Sabbagh 2026]]은 "liraglutide·semaglutide·exenatide의 BBB 통과 자체는 전임상에서 보고됐다"고 적는다(p.59). [[thorens-2024-building-the-glucagon-like-peptide-1-receptor|Thorens 2024]]는 형광 리간드 근거로 말초 exendin-4·semaglutide가 시상하부·뇌간에 "쉽게 접근"한다고 적는다.
   - ⚠️ **Sabbagh의 그 문장은 독립 근거가 아니다**: 인용 문헌이 [[west-2025-are-glucagon-like-peptide-1-glp-1-receptor|West 2025]](Sabbagh ref #74)와 Dong 2022(#75)이고, West 2025에서 이 세 약물을 **통과 약물로** 나열하는 곳은 **초록**뿐이다(고찰 p.1163은 셋을 "다룬 약물"로만 든다). West 2025 **본문**은 semaglutide에 대해 Salameh 2020(유입 미측정)과 Gabery 2020(제한적 접근·CVO 경유)만 싣는다. 즉 "semaglutide가 BBB 본체를 통과한다"는 쪽의 1차 데이터는 이 위키가 확인할 수 있는 범위에 없다(Dong 2022는 미열람). liraglutide의 "통과" 쪽 1차 데이터는 Hunter & Hölscher 2012 하나다.
   - **통과하지 않는다**: Salameh/Rhea/Banks 2020(아실화 약물은 **측정 가능한 Ki 없음**); Gabery 2020(세마글루타이드 **BBB 미통과**, in vitro에서 BBB 내피와 상호작용 없음); Imbernon 2022(liraglutide는 **내피 수준에서 BBB를 넘지 않음**); [[liskiewicz-2026-glp-1r-gipr-ppar|Liskiewicz 2026]](in vitro human BBB 모델 미투과).
   - **위키의 현재 봉합**: [[concept-glp-1]]의 "**전혀 못 통과가 아니라 효율적이지 않다**". 이 페이지는 거기에 한 줄을 더한다 — 방법이 결론을 가른다. **전신 조직 농도(ELISA)** 는 양성, **단방향 유입률(Ki) + capillary depletion** 은 음성, **형광 영상**은 "CVO에는 있고 parenchyma에는 거의 없음"이다. 세 방법은 서로 다른 것을 재고 있다(연결 가설 — 원문 주장 아님).

5. **경구 소분자 = 뇌투과인가**
   [[godschall-2026-a-brain-reward-circuit-inhibited|Godschall 2026]]·NIH 보도자료는 danuglipron(555.6 Da)이 **심부 CeA를 직접 활성화**한다고 하고 위키의 [[concept-central-amygdala-glp1r]]·[[concept-glp-1]]도 이를 "BBB 통과 입증"으로 받아 적었다. 그러나 orforglipron의 **rat brain/plasma·CSF/plasma = 0.0078**은 펩타이드와 같은 수준이다. 두 진술은 **'penetrant'의 정의가 다르기 때문에 공존**한다 — 농도 기준으로는 음성, **부위 특이 수용체 humanization 대조로 본 회로 동원 기준으로는 양성**. 인용할 때 어느 기준인지 밝혀야 한다.

6. **dulaglutide는 CNS penetrant인가**
   Rhea 2024는 **측정 가능한 Ki(1.095)** 를 보고하고(원문 미열람), [[sabbagh-2026-repurposing-glucagon-like-peptide-1|Sabbagh 2026]](p.59)은 그것을 "dulaglutide·tirzepatide가 다른 속도로 BBB 통과"로 옮긴다. ⚠️ **정정(2026-10-04)**: 이 항목은 "[[west-2025-are-glucagon-like-peptide-1-glp-1-receptor|West 2025]]가 dulaglutide를 CNS penetrant가 아니라고 적는다"고 썼었으나, 전문을 대조하니 West 2025에는 dulaglutide 침투 데이터가 **아예 없다**(검색어·키워드에만 등장, "다뤄지지 않은 승인약"으로 남김 p.1163). 따라서 West는 반대 근거가 아니라 **자료 공백**이다. 남는 긴장은 63 kDa 단백질이라는 생물물리(방법론적 함정 1의 표지 단편 가능성)와 Rhea 2024의 Ki·REWIND의 인지 신호 사이에 있다. 병기할 것.

7. **뇌 GLP-1R의 세포종류 — 접근 논쟁과 교차**
   [[du-2026-oral-glp1-receptor-agonist-promotes|Du 2026]]은 피질·해마에서 GLP-1R가 **성상교세포 우세**라 하고, [[sabbagh-2026-repurposing-glucagon-like-peptide-1|Sabbagh 2026]]은 CNS GLP-1R가 **주로 뉴런**이라 한다. 접근 경로 관점의 함의: 표적이 성상교세포라면 **혈관 주변 astrocyte endfoot**이 parenchymal 확산 없이도 닿을 수 있는 1차 후보가 되고, 뉴런이라면 더 깊은 침투가 필요하다(연결 가설 — 원문 주장 아님). [[concept-glp1-neuroprotection]]의 등급표를 함께 볼 것.

8. **AP 귀속: aversion 전담인가, 효능의 본체인가**
   [[concept-glp-1]]·[[concept-area-postrema]]에 이미 병기된 Huang 2024(AP=aversion, 식이 억제에 불필요) vs [[gao-2026-semaglutide-drives-weight-loss-through|Gao 2026]](AP=체중 감량의 본체) 충돌. 접근 경로 관점에서 이 충돌이 특히 중요한 이유: **AP는 BBB 밖이라 어떤 GLP-1RA든 반드시 닿는 부위**이므로, "AP를 피해 효능을 유지하는 약물"이라는 차세대 설계 목표가 성립하려면 **분포가 아니라 수용체 신호·세포종류 수준의 선택성**이 필요하다는 뜻이 된다.

9. **3층 수치·서술의 불일치 (2026-10-04 병합 때 발견)**
   세 가지가 조정되지 않은 채 남아 있다. ① exenatide/exendin-4의 Ki: Salameh 2020 **0.4231** vs Rhea 2024 **2.476** μL/g-min. ② tirzepatide: "통과하지 않는 것으로 보인다"(이 페이지의 웹 요약) vs "dulaglutide와 다른 속도로 통과"([[sabbagh-2026-repurposing-glucagon-like-peptide-1|Sabbagh 2026]] p.59, 같은 Rhea 2024 인용). ③ exendin-4의 수송 기전: 수용체 매개(Fu 2020) vs adsorptive transcytosis·비포화(Salameh 2020) vs 고용량 포화(Kastin & Akerstrom 2003). ①·②는 Rhea 2024 원문이, ③은 세 원문 모두가 `raw/`에 없어 판정 불가 — 3층 절의 병기 표시를 그대로 둔다.

10. **[[west-2025-are-glucagon-like-peptide-1-glp-1-receptor|West 2025]]의 초록과 본문**
    이 페이지의 정박 리뷰 자체가 내부에서 갈린다: 초록은 liraglutide·semaglutide·exenatide를 BBB 통과 약물로 들고, 본문은 semaglutide 유입 미측정·liraglutide 상충, Key Summary와 결론은 exendin-4·liraglutide만 든다. 이 페이지는 **본문 수치**를 따른다(층위별 대조표는 West 페이지).

## 미해결 질문

1. **말초 GLP-1RA가 DMH^GLP-1R에 직접 닿는가?** tanycyte process는 ARC·ME 중심이고 DMH 도달은 보고가 없다. 대안은 ① ME→3V CSF 경유 확산, ② 뇌간 Adcyap1^NTS 상행 입력, ③ DMH 국소 미세혈관 투과성. 사용자 lab의 [[kim-2024-glp-1-increases-preingestive-satiation|Science 2024]] 회로가 **약물 작용점**인지 **회로 중계점**인지가 여기서 갈린다 → [[proposal-dmh-glp1r-human-imaging]]에서 brainstem BOLD 공변량 설계로 부분 접근 가능.
2. **CSF:plasma 0.02–0.4%가 수용체 점유에 충분한가?** GLP-1R의 리간드 친화도가 sub-nM이라면 pmol/L 농도도 부분 점유를 낼 수 있다. 그러나 이를 직접 계산·검증한 자료를 본 세션에서 찾지 못했다. **인간 CNS 점유를 측정할 추적자가 없다**(⁶⁸Ga-exendin-4는 BBB 안쪽에서 음성).
3. **접근성의 상태 의존성이 인간 반응 이질성을 설명하는가?** Bakker 2022의 혈당 gating과 비만·HFD uncoupling은 **접근 자체가 개인·식이 상태의 함수**임을 뜻한다. [[concept-glp1ra-response-variability]]의 미설명 분산 75%에 들어갈 후보지만 인간 검증은 없다.
4. **지질화는 접근을 늘리나 줄이나?** Skovbjerg 2023은 지질화가 Ex4의 CNS 접근성을 **높인다**고 하고, Salameh 2020은 아실화 약물이 BBB를 **못 넘는다**고 한다. 지질화가 (ⅰ) CVO 내 체류·결합을 늘리면서 (ⅱ) 내피 통과는 줄이는 **상반된 두 효과**를 동시에 갖는지 분리되지 않았다.
5. **소분자 GLP-1RA의 실제 parenchymal 농도는 얼마인가?** brain/plasma 0.0078이 사실이라면 danuglipron의 CeA 직접 활성은 **국소 농도가 아니라 수용체 과발현(AAV-hGLP1R)** 에 의존한 결과일 수 있다. 내인성 발현 수준에서의 재현이 필요하다.
6. **AP를 피하면서 효능을 유지하는 것이 접근 경로 설계로 가능한가?** AP는 BBB 밖이므로 분포로는 피할 수 없다. 남는 수단은 biased agonism([[wan-2023-glp-1r-signaling-and-functional]])·세포종류 특이 전달([[concept-peptide-drug-conjugate]])·RMT 셔틀로 parenchyma 선택적 전달([[concept-blood-brain-barrier-shuttle]]·[[dolgin-2026-brain-shuttle-biologics-chart-new]]) — 단 위키에 GLP-1 펩타이드를 RMT 셔틀에 태운 **실물 데이터는 아직 없다**.
7. **BBB를 통과하지 않는 tirzepatide가 왜 더 강한가?** GIP 쪽이 ME 혈관 투과성을 올려 GLP-1RA 접근을 늘린다는 설명([[hansford-2025-glucose-dependent-insulinotropic-polypeptide-receptor|Hansford 2025]])과, GIPR가 뇌 GABAergic 뉴런에서 작동한다는 설명([[liskiewicz-2023-glucose-dependent-insulinotropic-polypeptide-regulates]])이 경쟁한다. **"약효 증강 = 접근 증강"인지 "약효 증강 = 추가 회로"인지** 미결.
8. **종간 차이**: [[gupta-2021-glucagon-like-peptide-1-and|Gupta 2021]]은 인간 뇌 GLP-1R 최대 발현부가 설치류의 시상하부가 아니라 **frontal cortex**라고 보고한다. 접근 경로(CVO·tanycyte)가 전부 **시상하부·뇌간 지향**인데 인간의 수용체가 피질에 더 많다면, 동물에서 세운 접근 모델이 인간 약효의 주요 경로를 놓치고 있을 수 있다(연결 가설 — 원문 주장 아님).

## 사용자 lab 실무 규칙 (연결 가설 — 특정 논문 주장 아님)

1. **표현 규칙**: 전신 투여 아실화 펩타이드의 시상하부 효과는 "**중추 작용**"이라 쓰고 "실질 통과"라고 쓰지 않는다. 쓰려면 어느 층(1–3층)인지, 아니면 회로 중계인지를 명시하고 **증거등급**(A–F)을 붙인다.
2. **도구 선택**: ARC/DMH/LH 실질의 수용체를 약리적으로 때려야 하면 **국소 투여 또는 exendin 골격**, 심부 변연계·피질이면 **저분자 또는 공학 설계**. 단 저분자의 "직접 도달"은 농도가 아니라 수용체 대조로 보인 것임을 기억할 것(충돌 5).
3. **[[park-2025-glucagon-like-peptide-1-and-hypothalamic|DMH GLP-1R preingestive satiation]] 해석의 분기**: (i) tanycyte·CVO 경유 국소 농도, (ii) 후뇌→상행 회로 중계, (iii) 내인성 GLP-1과 약물의 분리 — **위키 자료로는 판정 불가**(미해결 질문 1). 논문·제안서에서는 셋을 가설로 병기한다.
4. **다음 측정**: 등급 E(인간 PET 수용체 점유)가 공백이며, 사용자 lab의 [[bae-2019-glucagon-like-peptide-1-receptor|fMRI]]·[[proposal-dmh-glp1r-human-imaging|DMH 인간 영상]] 라인의 자연스러운 승급 지점이다. 다만 현재 추적자(⁶⁸Ga-exendin-4)는 BBB 안쪽에서 음성이었다는 보고가 있어(방법론적 함정 2) 추적자 자체가 병목이다.
5. **실험 설계**: 접근성은 상수가 아니라 피험자 상태의 함수다 — 공복/식후, lean/obese, 투여 경로·제형을 섞으면 접근 자체가 교란된다(방법론적 함정 5).

## 관련 페이지

- [[concept-glp-1]] — 상위 호르몬·약리 hub. BBB 경고 박스("효율적이지 않다")가 이 페이지의 출발점.
- [[kim-2025-mechanisms-of-glucagon-like-peptide]] — 사용자 lab 뇌 GLP-1R 리뷰. **약물별 침투 차등**("Ex-4는 변연계까지, lira/sema는 시상하부·뇌간까지")을 명시한 위키 내 1차 요약.
- [[park-2025-glucagon-like-peptide-1-and-hypothalamic]] · [[kim-2024-glp-1-increases-preingestive-satiation]] — 사용자 lab DMH GLP-1R cognitive satiation. **접근 경로가 미해결인 대표 사례.**
- [[proposal-dmh-glp1r-human-imaging]] — 인간 7T 검증 제안. 뇌간 상행 입력을 공변량으로 다룰 근거가 이 페이지에 있다.
- [[concept-tanycytes]] — ②층 관문. Imbernon 2022의 위키 좌표.
- [[concept-area-postrema]] · [[concept-dorsal-vagal-complex]] — ①층 관문. AP=혐오·체중, NTS=satiety·중계.
- [[concept-arcuate-nucleus]] · [[concept-dorsomedial-hypothalamus]] · [[concept-paraventricular-nucleus]] — ME 인접 시상하부 표적(접근 난이도 순으로 ARC < PVH < DMH).
- [[concept-blood-brain-barrier-shuttle]] · [[dolgin-2026-brain-shuttle-biologics-chart-new]] — ③층을 **공학적으로 만드는** 대안(RMT 셔틀). GLP-1 펩타이드 실물 데이터는 아직 없음.
- [[du-2026-oral-glp1-receptor-agonist-promotes]] — 위키 내 유일한 CNS-침투 설계 GLP-1RA 실물 사례(OHP2, caveolae 수송).
- [[concept-glp1-neuroprotection]] — 접근 요구가 가장 높은 적응증. '뇌 도달 부족' 가설과 그 반대 근거.
- [[cummings-2026-efficacy-and-safety-of-oral]] · [[edison-2026-liraglutide-in-mild-to-moderate]] — 접근 부족 가설이 설명하려는 임상 음성.
- [[gao-2026-semaglutide-drives-weight-loss-through]] — 세마글루타이드 1차 작용부위=AP. ①층의 가장 강한 인과 근거.
- [[blid-skoldheden-2026-semaglutide-engages-distinct-brainstem]] — **접근 없이도 효과가 전달되는** 경로(수용체 비발현 하류 회로). DMH 귀속의 대안.
- [[godschall-2026-a-brain-reward-circuit-inhibited]] · [[concept-central-amygdala-glp1r]] · [[duran-2026-the-central-amygdala-gates]] — 심부 변연계 접근 문제(직접 vs 중계)와 소분자 약리.
- [[liskiewicz-2026-glp-1r-gipr-ppar]] — **BBB 미투과 분자가 ARC·DMH·AP·NTS FOS를 다 올리는** 사례. FOS≠분포의 교과서적 예.
- [[liu-2025-gipr-ab-glp-1-peptide]] — 대형 접합체의 CVO 경유 BBB 우회 + 중추 수용체 요구성.
- [[hansford-2025-glucose-dependent-insulinotropic-polypeptide-receptor]] — ME 혈관 투과성을 **올려서** 접근을 늘리는 제3 기전(OL GIPR→VEGF-A).
- [[concept-gip]] · [[liskiewicz-2023-glucose-dependent-insulinotropic-polypeptide-regulates]] · [[veniant-2024-a-gipr-antagonist-conjugated-to]] — GIP 축이 접근·효능에 얹히는 지점.
- [[cao-2024-hunting-for-heroes-brain]] — "**BBB 투과성·약물 종류가 부위 차이를 만든다**"는 방법론 비판의 원전(위키 내).
- [[concept-vagal-afferent-neurons]] · [[de-lartigue-2026-critical-role-gut-brain-signalling]] — ④층(간접 신호)과 말초 교란.
- [[concept-conditioned-taste-aversion]] · [[concept-parabrachial-cgrp-alarm]] · [[concept-gdf15-gfral-axis]] — CVO 접근이 곧바로 만들어내는 혐오 축.
- [[concept-glp1ra-response-variability]] — 접근성의 상태 의존(혈당·HFD)이 들어갈 자리.
- [[west-2025-are-glucagon-like-peptide-1-glp-1-receptor]] — ★ **이 hub의 정박 논문**(West 2025, *Neurol Ther*; `raw/` 전문 확인): BBB 투과만 전용으로 다룬 narrative review이자 3층·등급 A 수치(Salameh 2020 Ki·%ID/g)의 출처. 'brain imaging을 penetrance 대리지표로' 쓰는 접근의 장단점도 여기서 나온다. ⚠️ 초록과 본문이 엇갈리므로 본문 수치로 인용(충돌 10).
- [[thorens-2024-building-the-glucagon-like-peptide-1-receptor]] — exendin-4·exendin(9–39) 도구의 기원(3층 수송 기전을 가르는 Kastin·Fu 실험의 전제)이자, 형광 probe로 말초 exendin-4·semaglutide가 시상하부·뇌간에 "쉽게 접근"한다는 등급 B 서술의 출처.
- [[steinert-2017-ghrelin-cck-glp-1-pyy-secretory]] — 내인성 GLP-1이 단순 확산으로 뇌에 들어가는 것으로 보인다는 서술(Kastin 2002 인용). 약물과 분리해 읽어야 하는 쪽.
- [[gupta-2021-glucagon-like-peptide-1-and]] — 인간 뇌 GLP-1R 분포. 접근 경로의 종간 불일치 근거.
- [[bae-2019-glucagon-like-peptide-1-receptor]] — 사용자 lab 인체 GLP-1RA fMRI. 기능 영상이 접근을 증명하지 못하는 예.
- [[namkoong-2017-central-administration-of-glp-1]] — ICV 대조의 원형(사용자 lab). "중추 충분성"은 말하되 "말초 약물 도달"은 말하지 못하는 설계.
- [[fang-2025-glucagon-like-peptide-1-medicines]] · [[sabbagh-2026-repurposing-glucagon-like-peptide-1]] — Drucker 계열 리뷰 2편. CSF 1/100·CVO 접근·"미정의 세포간 중계" 서술의 출처.
- [[stuber-2025-the-neurobiology-of-overeating]] · [[johansen-2025-brain-control-of-energy]] — GLP-1RA 저투과·CVO 작용을 전제로 쓴 상위 종합 리뷰.
- [[wan-2023-glp-1r-signaling-and-functional]] · [[concept-peptide-drug-conjugate]] — 분포가 아니라 **신호·전달 선택성**으로 부작용을 피하는 길.
- [[overview-next-gen-incretin-obesity-drugs-2026]] · [[petersen-2026-the-evolving-landscape-of]] · [[davies-2026-elecoglipron-an-oral-small]] · [[rosenstock-2026-oral-small-molecule-glp]] — 경구 소분자 시대의 접근 경로 재설정.
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
- [[person-choi-hyung-jin]] — 본 주제가 직접 겨누는 연구 라인(중추 GLP-1 기전).
