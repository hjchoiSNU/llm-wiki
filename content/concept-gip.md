---
title: GIP / GIPR (포도당 의존성 인슐린분비 자극 폴리펩타이드)
type: concept
created: 2026-07-05
updated: 2026-09-19
aliases: [GIP, GIPR, glucose-dependent insulinotropic polypeptide, gastric inhibitory polypeptide, GIP receptor]
---

> [!takeaway] 연구 방향 관점의 핵심
> GIP는 GLP-1과 함께 두 축을 이루는 인크레틴이며, 중추 GIPR은 시상하부·후뇌의 **억제성 GABA 뉴런**과 정중융기 **올리고덴드로사이트**에 발현해 식이·체중을 조절한다. tirzepatide 등 GIPR–GLP-1R 이중작용제의 절반을 담당하는 표적으로, 최형진 랩의 incretin 항비만·시상하부 회로 연구의 핵심 hub. 미해결 쟁점은 **GIPR agonism vs antagonism 역설**(둘 다 GLP-1R 작용과 결합 시 체중감소).

# GIP / GIPR

## 한 줄 요약
GIP(glucose-dependent insulinotropic polypeptide)는 장(K세포)에서 분비되는 인크레틴 호르몬으로, 수용체 GIPR을 통해 인슐린 분비를 촉진할 뿐 아니라 뇌(후뇌·시상하부)의 특정 세포군에 작용해 식이·체중을 조절한다. GLP-1과 별개의 리간드·수용체다.

## 핵심 내용
- **인크레틴의 한 축**: [[concept-glp-1|GLP-1]]과 함께 [[concept-incretin-effect]]를 구성. 별개 리간드·별개 수용체.
- **중추 GIPR의 세포 표적**:
  - **억제성 GABA 뉴런(Vgat+)**: acyl-GIP·이중작용제의 체중·식이 감소가 Vgat+ GIPR에 결정적 의존([[liskiewicz-2023-glucose-dependent-insulinotropic-polypeptide-regulates|Liskiewicz 2023]]). 후뇌 [[concept-area-postrema|AP]]·[[concept-arcuate-nucleus|ARC]]·PVN cFos 유도.
  - **비신경세포(정중융기 올리고덴드로사이트)**: ME OL의 GIPR가 성체 oligodendrogenesis·**혈관 투과성(VEGF-A·fenestration)**을 조절해 말초 GLP-1RA의 뇌 접근을 증가시켜 GLP-1R 효능을 증강([[hansford-2025-glucose-dependent-insulinotropic-polypeptide-receptor|Hansford 2025]]).
  - **뇌실주위기관(CVO)**: 전신 투여 GIPR-표적 항체가 OVLT·SFO·ME·AP에서 검출(BBB 우회)([[liu-2025-gipr-ab-glp-1-peptide|Liu 2025]]).
- **항비만 응용**: GIPR–GLP-1R 이중작용제(tirzepatide, MAR709)가 GLP-1 단독보다 우수한 감량; GIP 축 기여가 그 우월성의 근거.

## 중추 GIPR 표적세포 — 경쟁 가설 대조표

세 논문이 모두 "이 세포가 없으면 효과가 사라진다"는 **필요조건**을 주장하지만 지목 세포가 다르다. 조작한 리간드(작용 vs 길항)와 판독(단독 효과 vs GLP-1RA 증강)이 다르므로 아직 배타적 반증 관계는 아니다.

| 지목 세포 | 근거 페이지 | 조작 | 판독된 효과 | 근거 등급 |
|---|---|---|---|---|
| **Vgat⁺ 억제성 뉴런** | [[liskiewicz-2023-glucose-dependent-insulinotropic-polypeptide-regulates|Liskiewicz 2023]] | Vgat-Gipr KO | acyl-GIP **단독** 감량·MAR709 우월성 소실 | 마우스 조건부 KO(인과) |
| **정중융기 올리고덴드로사이트(비뉴런)** | [[hansford-2025-glucose-dependent-insulinotropic-polypeptide-receptor|Hansford 2025]] | Plp1-CreERT2 OL Gipr KO(결손 ~70%) | GIPR의 **GLP-1RA 증강분**만 소실(체중 자체는 정상) | 마우스 조건부 KO(인과, 부분 결손) |
| **범뉴런(Syn-Cre) CNS GIPR** | [[liu-2025-gipr-ab-glp-1-peptide|Liu 2025]] | Gipr^Syn−/− + GIPR **길항** 접합체 | 길항제의 **부가효과** 소실(단, KO 자체가 비만 저항이라 교란) | 마우스 조건부 KO(인과, 교란 명시) |

- 조직 발현 지도는 비뉴런 우세와 정합: "GIPR는 다수가 비뉴런(oligodendrocyte·pericyte)" ([[drucker-2023-beyond-the-pancreas-contrasting-cardiometabolic|Hammoud & Drucker 2023]]).
- **미해결**: 뉴런 축(Vgat⁺)과 접근성 축(OL→혈관 투과성)이 **직렬**인지(OL이 약물 접근을 열고 뉴런이 효과를 낸다) **병렬**인지 아무도 시험하지 않았다. 직렬이라면 OL GIPR 조작이 GIP 없이도 GLP-1RA 효능을 올릴 수 있다는 검증 가능한 예측이 나온다.
- 인간 데이터는 아직 세포 해상도가 없다 — 유전 층은 [[su-2026-genetic-predictors-of-glp1-receptor|Su 2026]]의 `GIPR` p.Glu354Gln뿐.

## GIPR agonism vs antagonism 역설 (핵심 미결 쟁점)
GLP-1R 작용과 결합할 때, GIPR을 **작용(agonism)**시키든 **길항(antagonism)**시키든 **둘 다 체중감소를 강화**한다 — 겉보기 역설.
- **길항 축**: anti-GIPR mAb+GLP-1(AMG 133/maridebart, [[veniant-2024-a-gipr-antagonist-conjugated-to]]; 기전 [[liu-2025-gipr-ab-glp-1-peptide]]). **GWAS**에서 GIPR 기능저하 SNP가 낮은 BMI와 연관 → 길항과 정합.
- **작용 축**: tirzepatide·5중작용제([[liskiewicz-2026-glp-1r-gipr-ppar]]).
- **세 번째 설명(인간 유전 근거)**: GIPR 작용이 감량을 직접 키우는 게 아니라 **GLP-1 유발 혐오(오심·구토)를 완충**해 유효 용량 도달을 돕는다는 쪽. [[su-2026-genetic-predictors-of-glp1-receptor|Su 2026]]에서 `GIPR` **p.Glu354Gln(부분 기능상실)**은 **tirzepatide 한정 구토 OR 1.83**인 반면 **효능에는 무영향(P=0.73)** — "GIPR 기능↓ → 혐오 완충↓"과 정확히 맞는다. [[drucker-2023-beyond-the-pancreas-contrasting-cardiometabolic|Hammoud & Drucker 2023]]도 같은 가설(AP 억제 경유)을 든다.
- ⚠️ 따라서 **GIPR 길항 전략([[veniant-2024-a-gipr-antagonist-conjugated-to|AMG 133]]·[[jastreboff-2025-once-monthly-maridebart-cafraglutide-for|MariTide]])에는 내약성 역풍 가능성**이 인간 유전 데이터에서 예고된다 — 감량과 별개로 GI 이상반응 프로파일을 따로 봐야 한다.
- **제안 설명**: 만성 GIP 노출→GIPR 발현·cAMP↓→**기능적 desensitization**(사실상 길항). 또는 agonism/antagonism이 서로 다른 세포군·신호(Gs vs β-arrestin)를 통할 가능성. 저자들도 "미해결"로 명시.

## 관련 페이지
- [[concept-glp-1]] — 다른 인크레틴 축.
- [[concept-incretin-effect]] — 상위 개념(GIP+GLP-1).
- [[liskiewicz-2023-glucose-dependent-insulinotropic-polypeptide-regulates]] — 중추 GABAergic GIPR 의존성.
- [[hansford-2025-glucose-dependent-insulinotropic-polypeptide-receptor]] — ME 올리고덴드로사이트 GIPR·혈관 투과성.
- [[liu-2025-gipr-ab-glp-1-peptide]] — 중추 GIPR·GLP-1R 요구성(길항 축 기전).
- [[veniant-2024-a-gipr-antagonist-conjugated-to]] — AMG 133(GIPR 길항+GLP-1 작용) 임상.
- [[liskiewicz-2026-glp-1r-gipr-ppar]] — GIPR 작용 5중작용제.
- [[concept-area-postrema]] · [[concept-dorsal-vagal-complex]] — 중추 GIPR 후뇌 무대.
- [[zhang-2022-brainstem-circuit-for-nausea]] — AP GIP-GIPR 억제뉴런 항오심 축.
- [[drucker-2023-beyond-the-pancreas-contrasting-cardiometabolic]] — GIP 췌장외 작용·agonism/antagonism 역설 authoritative 리뷰.
- [[scheen-2023-dual-gip-glp-1-receptor]] — tirzepatide twincretin 구조·임상.
- [[overview-next-gen-incretin-obesity-drugs-2026]] — 차세대 인크레틴 항비만 종합.
- [[su-2026-genetic-predictors-of-glp1-receptor]] — `GIPR` 미스센스 **p.Glu354Gln**(부분 기능상실)이 **tirzepatide 한정** 구토 위험 1.83배, **효능에는 무영향**. "GIPR 작용이 GLP-1 유발 혐오를 완충한다"는 전임상 가설의 인간 유전 근거 (Nature 2026).
