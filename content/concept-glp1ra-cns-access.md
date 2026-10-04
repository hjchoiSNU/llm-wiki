---
title: "GLP-1RA의 중추 접근 경로 (CNS access / BBB penetration)"
type: concept
created: 2026-10-03
updated: 2026-10-03
aliases: [GLP-1RA BBB, GLP-1RA CNS penetration, GLP-1RA 중추 접근]
---

> [!takeaway] 연구 방향 관점의 핵심
> **"어느 약이 어디까지 닿는가"가 실험 결과를 결정한다.** 말초 GLP-1RA의 뇌 접근은 전부-또는-전무가 아니라 **4층**(뇌실주위기관 CVO → tanycyte 수송 → BBB 본체의 제한적·포화성 수송 → 미주 구심성 간접신호)이고, 약물마다 닿는 층이 다르다. 비아실화 **exendin-4 계열은 BBB 본체를 직접 통과**하지만(Kastin & Akerstrom 2003; Salameh 2020), **아실화 장기작용 펩타이드(liraglutide·semaglutide)는 측정 가능한 BBB 수송이 없고** CVO + tanycyte 경유로만 들어간다(Secher 2014; Gabery 2020; Imbernon 2022). 인간 CSF:plasma는 liraglutide **0.02%**, semaglutide **≈0.4%**, exenatide **1.4–2.1%** — 세 자릿수 차이다.
> 사용자 lab에 직결되는 세 가지: ① **DMH^GLP-1R에 말초 약물이 직접 닿는지는 미해결**이다. tanycyte 수송은 median eminence–MBH 축이고 DMH는 그 범위 밖일 수 있어, [[kim-2024-glp-1-increases-preingestive-satiation|Kim 2024 Science]]의 회로가 **국소 수용체**가 아니라 **뇌간 상행 입력**([[blid-skoldheden-2026-semaglutide-engages-distinct-brainstem|Blid Sköldheden 2026]])으로 동원될 가능성이 열려 있다 → [[proposal-dmh-glp1r-human-imaging|인간 영상 제안]]과 마우스 DMH 조작 실험 모두에서 **접근 경로를 설계 변수로 다룰 근거**. ② **약물을 바꾸면 부위가 바뀐다**: Ex-4로 얻은 변연계 결과를 세마글루타이드에 일반화하면 안 된다([[cao-2024-hunting-for-heroes-brain|Cao 2024]]의 비판 그대로). ③ **접근 경로 자체가 반응 이질성의 후보 축**이다 — 혈당·고지방식이 tanycyte gating을 끊는다는 보고(Bakker 2022)는 [[concept-glp1ra-response-variability|반응 이질성]]의 미설명 75%에 들어갈 생리 변수다.

# GLP-1RA의 중추 접근 경로 (CNS access / BBB penetration)

## 한 줄 요약
말초 투여 GLP-1 수용체 작용제는 혈뇌장벽(BBB)을 효율적으로 통과하지 못하지만, **뇌실주위기관(CVO)·tanycyte 수송·일부 약물의 제한적 BBB 통과·미주 구심성 간접신호**라는 서로 다른 네 경로로 중추에 작용하며, 어느 경로를 쓰는지가 약물별 분자 설계(아실화·분자량·albumin 결합)에 의해 결정되고, 그것이 다시 **어느 행동 효과가 중추성인지**를 가른다.

> [!info] 인용 규약
> 이 페이지는 **위키 내부 자료**와 **웹에서 확인한 1차 문헌**을 섞어 쓴다. 위키 자료는 wikilink로, 웹 문헌은 **저자-연도 + 저널 + DOI/URL**로 표기해 구분했다. 저자의 추론은 `(연결 가설 — 원문 주장 아님)`으로 명시한다. ⚠️ 본 세션에서 **egress 차단으로 원문 PDF를 직접 열지 못한 웹 문헌이 다수**이며(JCI·PMC·Cell·Springer 등 차단), 그 경우 검색 엔진이 반환한 2차 요약에 의존했다. 해당 항목은 `(원문 미열람)`으로 표시한다.

## 왜 문제인가

세 가지 사실이 동시에 성립하면서 모순처럼 보이는 것이 이 주제의 출발점이다.

1. **GLP-1RA는 분자적으로 BBB를 넘기 어려운 약이다.** 펩타이드이고(3.7–4.8 kDa), 대부분 지방산 아실화로 **albumin에 98–99% 이상 결합**해 유리 분율이 극히 낮다(liraglutide는 palmitic acid를 γ-Glu linker로 Lys26에, semaglutide는 C18 diacid를 OEG spacer로 Lys26에 결합 — Sen & Sen 2025, *J Diabetes Metab Disord*, doi:10.1007/s40200-025-01711-8, 원문 미열람). dulaglutide(≈63 kDa Fc 융합)·albiglutide(≈73 kDa albumin 융합)는 항체급 크기다.
2. **그런데 중추 작용은 인과적으로 입증된다.** 뇌 특이 GLP-1R 결손이 말초 약물 효과를 지우고([[liu-2025-gipr-ab-glp-1-peptide|Liu 2025]]의 `Glp1r^Wnt1−/−`), 부위별 수용체 조작이 효과를 부위별로 쪼갠다([[gao-2026-semaglutide-drives-weight-loss-through|Gao 2026]]·[[godschall-2026-a-brain-reward-circuit-inhibited|Godschall 2026]]·[[duran-2026-the-central-amygdala-gates|Duran 2026]]).
3. **인간에서 측정되는 CSF 농도는 민망할 정도로 낮다.** liraglutide 1.8 mg를 평균 14개월 복용하고 8.4 kg 감량한 T2D 환자 8명에서 혈중 31 nmol/L에 대해 **CSF는 6.5 pmol/L, 비율 0.02%**였고, **CSF 농도는 체중 감소와 상관이 없었다**(P=0.69) — Christensen et al. 2015, *Int J Obes* 39:1651–1654, doi:10.1038/ijo.2015.136 (원문 미열람).

즉 "BBB를 못 넘는다"와 "중추에서 작동한다"가 둘 다 맞다. 해소는 **BBB를 넘지 않고도 뇌 안의 수용체에 닿는 길이 있다**는 것이다. 위키의 [[concept-glp-1]]이 "**전혀 못 통과가 아니라 효율적이지 않다**가 정확한 표현"이라고 적은 것과, [[fang-2025-glucagon-like-peptide-1-medicines|Fang·Drucker 2025]]가 "BBB를 효율적으로 통과하지 못하지만 CVO에 접근하고 **GLP-1R 미발현 핵에서도 cFos를 유발**한다"고 적은 것이 같은 이야기다.

여기서 바로 따라오는 함정이 하나 있다. **접근(access)·수용체 점유(occupancy)·회로 동원(recruitment)·행동 효과는 네 개의 다른 층위**다. 약물이 닿지 않는 부위에서도 FOS는 올라가고([[liskiewicz-2026-glp-1r-gipr-ppar|Liskiewicz 2026]]은 BBB 미투과 5중작용제가 brainstem proteome를 350개 단백질 수준으로 바꿨다고 보고), 약물이 닿는 부위라도 그 부위가 효과에 필요하지 않을 수 있다(아래 Secher 2014의 AP·PVN 음성 결과).

## 접근 경로 4층

### 1층 — 뇌실주위기관(CVO): AP·NTS 일부·SFO·OVLT·정중융기

**해부**: fenestrated 모세혈관으로 BBB가 없거나 불완전한 부위. [[concept-area-postrema|area postrema(AP)]], subfornical organ(SFO), OVLT, median eminence(ME), 그리고 AP에 인접한 [[concept-dorsal-vagal-complex|NTS]]의 일부.

**근거(웹 1차)**:
- **Gabery et al. 2020, *JCI Insight* 5(6):e133429, doi:10.1172/jci.insight.133429** (Novo Nordisk + Lund; 공저 Casper G. Salinas) — 형광 세마글루타이드를 전신 투여한 rodent에서 whole-brain 영상(LSFM 기반 자동 뇌지도 + MRI)으로 분포를 지도화. 결론: 세마글루타이드는 **뇌간·septal nucleus·시상하부에 직접 접근하지만 BBB를 통과하지 않았고**, **CVO와 뇌실 인접 선택적 부위**를 통해 뇌와 상호작용했다. c-Fos는 10개 영역에서 상승했고, 그중에는 약물이 직접 닿은 뇌간뿐 아니라 **직접 GLP-1R 상호작용이 없는 2차 영역(lateral PBN)** 도 포함됐다. AP에서는 전사체 수준으로 **prolactin-releasing hormone·tyrosine hydroxylase 상향**. (원문 미열람)
- **Skovbjerg et al. 2023, *Neuropharmacology* 238:109637, doi:10.1016/j.neuropharm.2023.109637** (Gubra; 공저 Clemmensen, Hecksher-Sørensen) — 형광 exendin-4와 지질화 유도체를 말초 투여 후 정량 whole-brain 3D LSFM. 투여 **2시간** 시점에서 분포는 **주로 CVO에 국한**됐고 특히 **AP와 NTS**. 단 `Ex4_C16MA`·`Ex9-39_C16MA`는 **PVH와 medial habenula**에도 분포 → **지질화가 CNS 접근성을 높인다**. (원문 미열람)
- **Secher et al. 2014, *J Clin Invest* 124(10):4473–4488, doi:10.1172/JCI75276** — 형광 liraglutide 말초 투여 마우스에서 **CVO에서 약물이 검출**됐고, ARC 및 시상하부 몇 곳의 뉴런에 결합. **`Glp1r−/−` 마우스에서는 결합이 보이지 않음** → 뇌 내 liraglutide 흡수 자체가 GLP-1R 의존적. (원문 미열람)

**위키 쪽 정합 자료**: [[liu-2025-gipr-ab-glp-1-peptide|Liu 2025]]의 GIPR-Ab/GLP-1 접합체는 **OVLT·SFO·ME·AP 네 CVO에서 검출**되며 BBB를 우회했다. [[liskiewicz-2026-glp-1r-gipr-ppar|Liskiewicz 2026]]의 5중작용제는 in vitro human BBB 모델에서 미투과였으나 ARC·DMH·AP·NTS 네 부위 FOS는 GLP-1–GIP와 동일했다.

**이 층이 설명하는 것**: AP 매개 **오심·[[concept-conditioned-taste-aversion|CTA]]**([[zhang-2021-area-postrema-cell-types-that|Zhang 2021]]), 세마글루타이드 **체중 감량 그 자체**([[gao-2026-semaglutide-drives-weight-loss-through|Gao 2026]]: AP에만 Gs를 보존해도 −7.2% 전량 회복), hindbrain→elPBN→시상하부로 퍼지는 brain-wide FOS.
**설명하지 못하는 것**: 피질·해마의 신경보호([[concept-glp1-neuroprotection]]), 심부 변연계(CeA·VTA·NAc·LS)의 직접 약리, 그리고 — 중요하게 — **ME에서 떨어진 시상하부 핵(DMH 등)** 에 대한 직접 작용.

### 2층 — Tanycyte 수송 (median eminence → mediobasal hypothalamus)

**해부·세포**: 제3뇌실 벽과 ME 경계의 특화 ependymoglia. 과정(process)이 ARC parenchyma 깊이 침투 → [[concept-tanycytes]].

**근거(웹 1차)**:
- **Imbernon et al. 2022, *Cell Metab* 34(7):1054–1063.e7, doi:10.1016/j.cmet.2022.06.002** (Prévot·Nogueiras; PMID 35716660) — tanycyte가 GLP-1R를 발현하고 liraglutide를 **transcytosis로 MBH에 실어 나르며 BBB를 우회**. 두 조작: ① tanycyte 특이 GLP-1R knockdown(`GLP-1r^TanycyteKD`), ② tanycyte에 botulinum neurotoxin B light chain 발현(`iBot`)으로 transcytosis 차단. 둘 다 **liraglutide의 뇌 수송과 표적 시상하부 뉴런 활성화를 막고, 동시에 식이·체중·지방량·지방산 산화에 대한 항비만 효과도 차단**. 혈중 liraglutide는 **내피세포 수준에서 BBB를 넘지 않는다**고 명시. (원문 미열람)
- **Gabery et al. 2020** (위) — rat ARH에서 **GLP-1R은 tanycyte에는 있고 내피세포에는 없으며**, in vitro에서 세마글루타이드는 BBB 내피와 상호작용하지 않고 **tanycyte가 흡수**한다. → tanycyte 경로는 liraglutide 전용이 아니다.
- **Bakker, Imbernon et al. 2022, *Cell Rep* 41(8):111698, doi:10.1016/j.celrep.2022.111698** — **접근이 상태 의존적**이다: 인슐린 유발 저혈당이 GLP-1RA의 시상하부 진입을 **증가**시키고 전신 지방 산화를 키운다. 기전은 tanycyte의 **VEGF-A 방출**을 통한 CVO 혈관 적응. 그리고 **비만·고지방식은 혈당 변화와 GLP-1RA 뇌 진입의 연결을 끊는다(uncoupling)**. (원문 미열람)

**위키 쪽 정합·경쟁 자료**: [[hansford-2025-glucose-dependent-insulinotropic-polypeptide-receptor|Hansford 2025]]는 같은 ME에서 **올리고덴드로사이트 GIPR → VEGF-A → 혈관 fenestration↑ → 말초 GLP-1RA의 MBH 접근↑**라는 **별개의 투과성 조절 축**을 제시하며, 표적으로 **ME를 관통하는 PVH vasopressin 축삭의 GLP-1R**을 지목한다. 위키는 두 축(tanycyte transcytosis vs OL→VEGF-A→fenestration)이 "병존·경쟁 관계로 아직 대조 실험 없음"이라고 적는다.

**이 층이 설명하는 것**: ARC/MBH GLP-1R 작용(Secher 2014의 **ARC POMC/CART 뉴런 내재화**), liraglutide의 시상하부 매개 항비만 효과, 그리고 **식이·혈당 상태에 따른 약효 변동**.
**설명하지 못하는 것**: hindbrain(AP·NTS)·변연계·피질. 그리고 **tanycyte 과정이 실제로 어디까지 닿는가**: α/β subtype의 process는 ARC·ME 중심이며 DMH까지의 전달은 보고되지 않았다. → *DMH^GLP-1R에 말초 약물이 tanycyte 경유로 직접 닿는다는 근거는 현재 위키·웹 양쪽에 없다*(연결 가설 — 원문 주장 아님).

### 3층 — BBB 본체의 제한적·포화성 수송 (약물 종류에 전적으로 의존)

**근거(웹 1차)**:
- **Kastin & Akerstrom 2003, *Int J Obes Relat Metab Disord* 27(3):313–318, doi:10.1038/sj.ijo.0802206** — 마우스에서 **multiple-time regression analysis**로 exendin-4가 **BBB를 빠른 속도로 직접 통과**함을 보임. HPLC로 혈중 안정성 확인(대부분 온전한 상태로 뇌 도달), **capillary depletion**으로 내피에 갇힌 것이 아니라 **뇌 parenchyma에 도달**함을 확인. 고용량 비표지 exendin-4 동시 투여 시 **자기억제(포화)** 가 나타났으나 **4개 실험을 합쳐야 통계적 유의**해졌다 → "고용량에서 진입이 제한될 수 있다"는 조심스러운 결론. (원문 미열람)
- **Salameh, Rhea, Talbot, Banks 2020, *Biochem Pharmacol* 180:114187, doi:10.1016/j.bcp.2020.114187** (corrigendum 2023) — ★ **이 주제에서 가장 결정적인 대조 실험**. 비아실화·비PEG화 incretin 수용체 작용제(**exendin-4, lixisenatide, Peptide 17, DA3-CH, DA-JC4**)는 유의한 blood-to-brain 단방향 유입률(Ki)을 가졌으나, **아실화 약물(liraglutide, semaglutide, Peptide 18)은 측정 가능한 BBB 통과가 없었다**. 비아실 약물의 유입은 **1 μg까지 비포화**였고 내피 **adsorptive transcytosis**로 추정. (원문 미열람)
- **Rhea et al. 2024, *Tissue Barriers* 12(4):2292461, doi:10.1080/21688370.2023.2292461** (Correction 2026, doi:10.1080/21688370.2026.2634592) — 후속편. 상대 뇌 유입률 **exenatide(Ki 2.476) > albiglutide(1.379) > dulaglutide(1.095) ≫ DA4-JC(0.668) μl/g·min**이고 albiglutide·dulaglutide는 1시간 내 가장 빠른 흡수를 보였으나, **tirzepatide는 BBB를 통과하지 않는 것으로 보인다**. (원문 미열람)
- **Hunter & Hölscher 2012, *BMC Neurosci* 13:33** — lixisenatide는 시험한 **모든 용량(2.5·25·250 nmol/kg)** 에서 30분에 통과, 2.5–25 nmol/kg는 3시간에도 통과. liraglutide는 **25·250 nmol/kg에서만** 통과하고 2.5 nmol/kg에서는 30분에 증가가 검출되지 않았으며, 3시간에는 250 nmol/kg에서만. → **liraglutide는 낮은 비율로만, 고용량에서만** 통과. (원문 미열람)

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
| ③ BBB 본체 | 내피 adsorptive transcytosis | Kastin 2003; Salameh 2020; Rhea 2024 | Ex-4/lixisenatide의 변연계·해마 작용 | 아실화 장기작용 약물 전부 |
| ④ 미주 구심성 | 약물 진입 아님 | Secher 2014(음성); [[zhang-2021-area-postrema-cell-types-that]] | 급성 GI·일부 포만 | 만성 체중감량 |

## 약물별 중추 접근 증거

| 약물 | MW·구조 | albumin/fatty-acid 결합 | 반감기 | 중추 접근 증거(종·방법) | 표지된 영역 | 한계 |
|---|---|---|---|---|---|---|
| **Exendin-4 / exenatide** | 39 aa, ≈4.2 kDa, **비아실화**. Gila monster 유래, Gly8로 DPP-4 저항 | 없음 (유리 분율 높음) | exenatide BID ≈2.4 h | **BBB 본체 직접 통과**: 마우스 multiple-time regression + capillary depletion + HPLC (Kastin & Akerstrom 2003). 방사표지 Ki 최고치(2.476 μl/g·min, Rhea 2024). 형광 Ex4 whole-brain LSFM 2 h (Skovbjerg 2023). 인간 **CSF:plasma 0.014**(AD pilot, 10 µg s.c. 1 h 내) / **0.021**(PD, 2 mg 주1회) | LSFM 2 h에서는 **AP·NTS 중심(CVO 우세)**; capillary depletion은 parenchyma 전반. VTA·NAc는 기능적·미세주입 근거 | CVO 우세 분포와 "parenchyma 도달"이 같은 실험에서 조화되지 않음. 고용량 자기억제(포화) → **용량-비선형**. 인간 CSF는 BBB 투과의 나쁜 대리지표 |
| **Lixisenatide** | exendin-4 골격 + C-말단 Lys6, **비아실화** | 없음 | ≈3 h | 마우스 ELISA 기반 뇌 농도: **2.5·25·250 nmol/kg 전 용량에서 통과**(30 min), 2.5–25에서 3 h까지 (Hunter & Hölscher 2012). Salameh 2020에서 유의한 Ki | 뇌 전체 조직 농도(부위 해상도 없음) | 부위 분해 없음. 전신 ELISA는 혈액 잔류 교란 |
| **Liraglutide** | **3751.2 Da**, C16 palmitic acid를 γ-Glu로 Lys26에 | **>98% albumin 결합** | ≈13 h | 형광 liraglutide 마우스: **CVO + ARC·discrete 시상하부 뉴런 결합**, `Glp1r−/−`에서 소실, **ARC POMC/CART 내재화**(Secher 2014). **tanycyte transcytosis 의존**(Imbernon 2022, GLP-1R KD·iBot 둘 다 수송+항비만 효과 차단). Hunter & Hölscher 2012: 25·250 nmol/kg에서만 통과. ⚠️ **Salameh 2020: 측정 가능한 BBB influx 없음**. 인간 **CSF:plasma 0.02%**(n=8, Christensen 2015) | CVO·ME·ARC(POMC/CART)·일부 시상하부. 위키: [[concept-tanycytes]] | 형광 접합체 ≠ 약물 자체(분자량·전하 변화). 용량 비선형(저용량에서 미검출). 인간 CSF 농도는 **체중 감소와 무상관**. 체중감량은 **미주·AP·PVN GLP-1R 비의존**(Secher 2014) |
| **Semaglutide** | **4113.58 Da**, Aib8 + C18 diacid + OEG/γGlu spacer @Lys26 | **>99% albumin 결합** | ≈1주 | ★ **BBB 미통과 + CVO·뇌실 인접부 경유** — rodent whole-brain 형광 영상(LSFM 자동 뇌지도 + MRI), c-Fos 10개 영역, AP 전사체 변화(Gabery 2020). GLP-1R는 rat ARH **tanycyte에만, 내피엔 없음**; in vitro에서 tanycyte가 흡수(Gabery 2020). Salameh 2020: 측정 가능한 influx 없음. 위키: AP가 1차 작용부위([[gao-2026-semaglutide-drives-weight-loss-through]]). 인간 **CSF:plasma ≈0.4%**, 1.0 mg s.c. 12주 후 **10명 중 8명에서 LLOQ 초과**(EVOKE 하위연구, Johannsen, CTAD 2025 poster P091) | 뇌간(AP·NTS)·septal nucleus·시상하부 일부·SFO·OVLT·ME | **변연계·피질·해마 미도달** → [[cummings-2026-efficacy-and-safety-of-oral\|EVOKE]] 음성의 '뇌 도달 부족' 가설 근거. 인간 CSF 데이터는 **학회 포스터 수준**(peer review 전)이고 plasma–CSF 무상관 |
| **Dulaglutide** | GLP-1 analogue–IgG4 **Fc 융합, ≈63 kDa** | albumin 아님(Fc 재순환) | ≈5일 | ¹²⁵I-dulaglutide(BAF)에서 **측정 가능한 Ki 1.095 μl/g·min**, 1 h 내 빠른 흡수(Rhea 2024). ⚠️ **West 2025는 전임상에서 dulaglutide를 CNS penetrant로 분류하지 않음**(*Neurol Ther*, doi:10.1007/s40120-025-00724-y) → [[west-2025-are-glucagon-like-peptide-1]] | 부위 해상도 없음 | 63 kDa 단백이 수용체 매개 수송 없이 BBB를 넘는다는 것은 생물물리적으로 설명이 어렵다 → **방사표지 단편·유리 ¹²⁵I 혼입** 가능성(연결 가설 — 원문 주장 아님). REWIND의 인지 신호는 뇌 도달의 증거가 아니다 |
| **Tirzepatide** | 39 aa, ≈4.8 kDa, C20 diacid (GIP/GLP-1 dual) | 높은 albumin 결합 | ≈5일 | **BBB를 통과하지 않는 것으로 보임**(Rhea 2024). 돼지 PET([⁶⁸Ga]Ga-DO3A-Exendin-4): tirzepatide의 GLP-1R 점유는 비교약(SAR441255, CNS >60%)보다 **낮음**(*eBioMedicine* 2025, PMID 41274021) | — | 중추 효과는 전부 CVO·하류 회로로 설명되어야 함. **GIP 쪽이 ME 혈관 투과성을 올려 GLP-1RA 접근을 늘린다**는 별도 축이 있음([[hansford-2025-glucose-dependent-insulinotropic-polypeptide-receptor]]) |
| **Albiglutide** (단종) | albumin–GLP-1 융합 ≈73 kDa | 융합형 | ≈5일 | Ki 1.379 μl/g·min(Rhea 2024). [[sabbagh-2026-repurposing-glucagon-like-peptide-1\|Sabbagh 2026]]: 큰 분자도 제한적 침투에도 **CNS FOS를 강하게 유발** | — | dulaglutide와 같은 해석 문제 |
| **GIPR-Ab/GLP-1 접합체** (maridebart cafraglutide 계열) | 항체 + 펩타이드 접합 | — | 월 1회급 | **CVO(OVLT·SFO·ME·AP)에서 검출** — BBB 우회([[liu-2025-gipr-ab-glp-1-peptide\|Liu 2025]]). 중추 GIPR·GLP-1R **둘 다** 필요 | OVLT·SFO·ME·AP + 하류 c-Fos(BST·PVT·CeA·PBN·NTS·DMV) | CVO 한정. 위키는 이것이 **RMT 셔틀이 아님**을 명시([[concept-blood-brain-barrier-shuttle]]) |
| **경구 소분자** — danuglipron | **555.6 Da** 비펩타이드 (C₃₁H₃₀FN₅O₄) | 없음 | 단시간(BID) | **humanized `Glp1r^S33W`** 마우스에서 **심부 CeA 직접 활성**: hGLP1R 측에서만 FOS↑·GCaMP transient·Gs-cAMP 탈분극([[godschall-2026-a-brain-reward-circuit-inhibited\|Godschall 2026]]). 경구 투여는 IP보다 **AP 활성이 낮음**(느린 흡수·낮은 peak) | CeA·NTS·AP | 간독성으로 **개발 중단**(도구로만 존속). "직접"의 근거는 **대조측 수용체 음성**이지 **농도 측정이 아니다** |
| **경구 소분자** — orforglipron | 비펩타이드 소분자, allosteric agonist | 없음 | 1일 1회 | 위키: **AP보다 NTS 편향 FOS**, aversion 행동 프로파일과 분리([[godschall-2026-a-brain-reward-circuit-inhibited\|Godschall 2026]]). NIH 보도자료는 "과거 생각보다 **깊은** 뇌 영역(CeA)에 직접 닿는다"로 요약([nih.gov](https://www.nih.gov/news-events/news-releases/oral-small-molecule-glp-1-drugs-penetrate-deep-into-brain-suppress-cravings), 2026). ⚠️ **그러나 rat brain/plasma·CSF/plasma 비는 0.0078로 펩타이드 GLP-1 약물과 비슷한 수준**(orforglipron 종합 리뷰, *Int J Mol Sci* 2026;27:1409, doi:10.3390/ijms27031409, 원문 미열람) | CeA·NTS(기능적 FOS) | **소분자=뇌투과라는 직관은 측정값과 충돌**(0.0078). 'penetrant'를 농도로 정의하면 음성, 회로 동원으로 정의하면 양성 → 용어 혼용 주의 |
| **뇌투과 설계형** — OHP2 | exendin 계열 펩타이드, **caveolae 수송**으로 경구·BBB 투과 개선 | — | — | 뇌 특이 `Glp1r` KO가 효과를 크게 약화, 말초 KO는 부분만 → **뇌 주도**. 반면 세마글루타이드는 **말초 KO에서만** 약화([[du-2026-oral-glp1-receptor-agonist-promotes\|Du 2026]]) | 피질·해마(성상교세포 GLP-1R) | 수컷 마우스·Aβ 모델 한정, 임상 미진입. "뇌투과↑→임상효과↑"는 저자도 미검증이라 명시 |

> **MW 출처 주의**: liraglutide 3751.2 Da·semaglutide 4113.58 Da·danuglipron 555.6 Da는 본 세션에서 출처로 확인했다. exenatide ≈4.2 kDa·tirzepatide ≈4.8 kDa·dulaglutide ≈63 kDa·albiglutide ≈73 kDa는 **통상 값으로 표기했을 뿐 본 세션에서 1차 확인하지 않았다** — 인용 시 라벨·SPC로 재확인할 것.

## 방법론적 함정

### 1) 형광·방사표지 tracer는 약물이 아니다
- **형광 접합체**는 분자량·전하·지질친화도를 바꾼다. Secher 2014의 형광 liraglutide, Gabery 2020의 형광 세마글루타이드, Skovbjerg 2023의 형광 Ex4 모두 이 한계를 공유한다. 특히 Skovbjerg 2023의 핵심 결과가 "**지질화가 CNS 접근성을 바꾼다**"라는 것이므로, **표지에 쓰이는 지질·형광단 자체가 결과 변수를 건드린다**(연결 가설 — 원문 주장 아님).
- **¹²⁵I 표지**는 탈요오드화 산물·펩타이드 단편이 '뇌 유입'으로 집계될 수 있다. Rhea 2024에서 **63 kDa dulaglutide와 73 kDa albiglutide가 4 kDa급 exenatide와 같은 자릿수의 Ki**를 보인 것은 이 가능성을 강하게 시사한다(연결 가설 — 원문 주장 아님). Salameh 2020이 HPLC·capillary depletion 같은 대조를 함께 돌린 이유다.
- **표지 분포 ≠ 수용체 점유 ≠ 기능**. Secher 2014에서 liraglutide는 AP·PVN에 닿았지만 그 부위 GLP-1R는 체중 감소에 **필요하지 않았다**. 닿는다고 쓰는 것이 아니다.

### 2) 영상(FOS·fMRI·PET)은 접근을 측정하지 않는다
- **FOS**: Gabery 2020에서 활성 영역 10곳 중 lateral PBN은 **약물이 직접 닿지 않은** 2차 영역이었다. [[liskiewicz-2026-glp-1r-gipr-ppar|Liskiewicz 2026]]은 **BBB 미투과** 분자가 ARC·DMH·AP·NTS에서 FOS를 올렸다. → **FOS 지도는 회로 지도이고 분포 지도가 아니다.**
- **인간 fMRI**: [[bae-2019-glucagon-like-peptide-1-receptor|Bae 2019]](사용자 lab)·[[kim-2024-glp-1-increases-preingestive-satiation|Kim 2024]]의 인간 신호는 **약물이 그 voxel에 있다는 증거가 아니다**. [[west-2025-are-glucagon-like-peptide-1|West 2025]]가 CNS penetrance를 **"brain connectivity 효과로 대리(proxy)"** 한다고 명시한 것이 바로 이 약점의 자백이다 — 대리지표는 상류(접근)와 하류(회로 중계) 중 어느 쪽인지 구분하지 못한다.
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
   - **통과한다**: Hunter & Hölscher 2012(liraglutide 25·250 nmol/kg); [[sabbagh-2026-repurposing-glucagon-like-peptide-1|Sabbagh 2026]]은 "liraglutide·semaglutide·exenatide의 BBB 통과 자체는 전임상에서 보고됐다"고 적는다.
   - **통과하지 않는다**: Salameh/Rhea/Banks 2020(아실화 약물은 **측정 가능한 Ki 없음**); Gabery 2020(세마글루타이드 **BBB 미통과**, in vitro에서 BBB 내피와 상호작용 없음); Imbernon 2022(liraglutide는 **내피 수준에서 BBB를 넘지 않음**); [[liskiewicz-2026-glp-1r-gipr-ppar|Liskiewicz 2026]](in vitro human BBB 모델 미투과).
   - **위키의 현재 봉합**: [[concept-glp-1]]의 "**전혀 못 통과가 아니라 효율적이지 않다**". 이 페이지는 거기에 한 줄을 더한다 — 방법이 결론을 가른다. **전신 조직 농도(ELISA)** 는 양성, **단방향 유입률(Ki) + capillary depletion** 은 음성, **형광 영상**은 "CVO에는 있고 parenchyma에는 거의 없음"이다. 세 방법은 서로 다른 것을 재고 있다(연결 가설 — 원문 주장 아님).

5. **경구 소분자 = 뇌투과인가**
   [[godschall-2026-a-brain-reward-circuit-inhibited|Godschall 2026]]·NIH 보도자료는 danuglipron(555.6 Da)이 **심부 CeA를 직접 활성화**한다고 하고 위키의 [[concept-central-amygdala-glp1r]]·[[concept-glp-1]]도 이를 "BBB 통과 입증"으로 받아 적었다. 그러나 orforglipron의 **rat brain/plasma·CSF/plasma = 0.0078**은 펩타이드와 같은 수준이다. 두 진술은 **'penetrant'의 정의가 다르기 때문에 공존**한다 — 농도 기준으로는 음성, **부위 특이 수용체 humanization 대조로 본 회로 동원 기준으로는 양성**. 인용할 때 어느 기준인지 밝혀야 한다.

6. **dulaglutide는 CNS penetrant인가**
   Rhea 2024는 **측정 가능한 Ki(1.095)** 를, [[west-2025-are-glucagon-like-peptide-1|West 2025]]는 **전임상에서 CNS penetrant 아님**을 적는다. 63 kDa 단백질이라는 생물물리와 REWIND의 인지 신호 사이에서 양쪽으로 당겨지는 사례. 병기할 것.

7. **뇌 GLP-1R의 세포종류 — 접근 논쟁과 교차**
   [[du-2026-oral-glp1-receptor-agonist-promotes|Du 2026]]은 피질·해마에서 GLP-1R가 **성상교세포 우세**라 하고, [[sabbagh-2026-repurposing-glucagon-like-peptide-1|Sabbagh 2026]]은 CNS GLP-1R가 **주로 뉴런**이라 한다. 접근 경로 관점의 함의: 표적이 성상교세포라면 **혈관 주변 astrocyte endfoot**이 parenchymal 확산 없이도 닿을 수 있는 1차 후보가 되고, 뉴런이라면 더 깊은 침투가 필요하다(연결 가설 — 원문 주장 아님). [[concept-glp1-neuroprotection]]의 등급표를 함께 볼 것.

8. **AP 귀속: aversion 전담인가, 효능의 본체인가**
   [[concept-glp-1]]·[[concept-area-postrema]]에 이미 병기된 Huang 2024(AP=aversion, 식이 억제에 불필요) vs [[gao-2026-semaglutide-drives-weight-loss-through|Gao 2026]](AP=체중 감량의 본체) 충돌. 접근 경로 관점에서 이 충돌이 특히 중요한 이유: **AP는 BBB 밖이라 어떤 GLP-1RA든 반드시 닿는 부위**이므로, "AP를 피해 효능을 유지하는 약물"이라는 차세대 설계 목표가 성립하려면 **분포가 아니라 수용체 신호·세포종류 수준의 선택성**이 필요하다는 뜻이 된다.

## 미해결 질문

1. **말초 GLP-1RA가 DMH^GLP-1R에 직접 닿는가?** tanycyte process는 ARC·ME 중심이고 DMH 도달은 보고가 없다. 대안은 ① ME→3V CSF 경유 확산, ② 뇌간 Adcyap1^NTS 상행 입력, ③ DMH 국소 미세혈관 투과성. 사용자 lab의 [[kim-2024-glp-1-increases-preingestive-satiation|Science 2024]] 회로가 **약물 작용점**인지 **회로 중계점**인지가 여기서 갈린다 → [[proposal-dmh-glp1r-human-imaging]]에서 brainstem BOLD 공변량 설계로 부분 접근 가능.
2. **CSF:plasma 0.02–0.4%가 수용체 점유에 충분한가?** GLP-1R의 리간드 친화도가 sub-nM이라면 pmol/L 농도도 부분 점유를 낼 수 있다. 그러나 이를 직접 계산·검증한 자료를 본 세션에서 찾지 못했다. **인간 CNS 점유를 측정할 추적자가 없다**(⁶⁸Ga-exendin-4는 BBB 안쪽에서 음성).
3. **접근성의 상태 의존성이 인간 반응 이질성을 설명하는가?** Bakker 2022의 혈당 gating과 비만·HFD uncoupling은 **접근 자체가 개인·식이 상태의 함수**임을 뜻한다. [[concept-glp1ra-response-variability]]의 미설명 분산 75%에 들어갈 후보지만 인간 검증은 없다.
4. **지질화는 접근을 늘리나 줄이나?** Skovbjerg 2023은 지질화가 Ex4의 CNS 접근성을 **높인다**고 하고, Salameh 2020은 아실화 약물이 BBB를 **못 넘는다**고 한다. 지질화가 (ⅰ) CVO 내 체류·결합을 늘리면서 (ⅱ) 내피 통과는 줄이는 **상반된 두 효과**를 동시에 갖는지 분리되지 않았다.
5. **소분자 GLP-1RA의 실제 parenchymal 농도는 얼마인가?** brain/plasma 0.0078이 사실이라면 danuglipron의 CeA 직접 활성은 **국소 농도가 아니라 수용체 과발현(AAV-hGLP1R)** 에 의존한 결과일 수 있다. 내인성 발현 수준에서의 재현이 필요하다.
6. **AP를 피하면서 효능을 유지하는 것이 접근 경로 설계로 가능한가?** AP는 BBB 밖이므로 분포로는 피할 수 없다. 남는 수단은 biased agonism([[wan-2023-glp-1r-signaling-and-functional]])·세포종류 특이 전달([[concept-peptide-drug-conjugate]])·RMT 셔틀로 parenchyma 선택적 전달([[concept-blood-brain-barrier-shuttle]]·[[dolgin-2026-brain-shuttle-biologics-chart-new]]) — 단 위키에 GLP-1 펩타이드를 RMT 셔틀에 태운 **실물 데이터는 아직 없다**.
7. **BBB를 통과하지 않는 tirzepatide가 왜 더 강한가?** GIP 쪽이 ME 혈관 투과성을 올려 GLP-1RA 접근을 늘린다는 설명([[hansford-2025-glucose-dependent-insulinotropic-polypeptide-receptor|Hansford 2025]])과, GIPR가 뇌 GABAergic 뉴런에서 작동한다는 설명([[liskiewicz-2023-glucose-dependent-insulinotropic-polypeptide-regulates]])이 경쟁한다. **"약효 증강 = 접근 증강"인지 "약효 증강 = 추가 회로"인지** 미결.
8. **종간 차이**: [[gupta-2021-glucagon-like-peptide-1-and|Gupta 2021]]은 인간 뇌 GLP-1R 최대 발현부가 설치류의 시상하부가 아니라 **frontal cortex**라고 보고한다. 접근 경로(CVO·tanycyte)가 전부 **시상하부·뇌간 지향**인데 인간의 수용체가 피질에 더 많다면, 동물에서 세운 접근 모델이 인간 약효의 주요 경로를 놓치고 있을 수 있다(연결 가설 — 원문 주장 아님).

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
- [[west-2025-are-glucagon-like-peptide-1]] — GLP-1RA CNS penetrance 서술형 리뷰(West 2025, *Neurol Ther*). 'brain imaging을 penetrance 대리지표로' 쓰는 접근의 장단점.
- [[gupta-2021-glucagon-like-peptide-1-and]] — 인간 뇌 GLP-1R 분포. 접근 경로의 종간 불일치 근거.
- [[bae-2019-glucagon-like-peptide-1-receptor]] — 사용자 lab 인체 GLP-1RA fMRI. 기능 영상이 접근을 증명하지 못하는 예.
- [[namkoong-2017-central-administration-of-glp-1]] — ICV 대조의 원형(사용자 lab). "중추 충분성"은 말하되 "말초 약물 도달"은 말하지 못하는 설계.
- [[fang-2025-glucagon-like-peptide-1-medicines]] · [[sabbagh-2026-repurposing-glucagon-like-peptide-1]] — Drucker 계열 리뷰 2편. CSF 1/100·CVO 접근·"미정의 세포간 중계" 서술의 출처.
- [[stuber-2025-the-neurobiology-of-overeating]] · [[johansen-2025-brain-control-of-energy]] — GLP-1RA 저투과·CVO 작용을 전제로 쓴 상위 종합 리뷰.
- [[wan-2023-glp-1r-signaling-and-functional]] · [[concept-peptide-drug-conjugate]] — 분포가 아니라 **신호·전달 선택성**으로 부작용을 피하는 길.
- [[overview-next-gen-incretin-obesity-drugs-2026]] · [[petersen-2026-the-evolving-landscape-of]] · [[davies-2026-elecoglipron-an-oral-small]] · [[rosenstock-2026-oral-small-molecule-glp]] — 경구 소분자 시대의 접근 경로 재설정.
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
- [[person-choi-hyung-jin]] — 본 주제가 직접 겨누는 연구 라인(중추 GLP-1 기전).
