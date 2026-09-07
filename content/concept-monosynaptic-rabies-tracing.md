---
title: 단시냅스 광견병 역행추적 (Monosynaptic rabies tracing)
type: concept
created: 2026-09-07
updated: 2026-09-07
aliases: [rabies tracing, monosynaptic rabies, 광견병 추적, SAD-ΔG, EnvA-TVA, RVdG, starter cell, 단시냅스 역행추적, CVS-N2c, transsynaptic tracing]
---

> [!takeaway] 연구 방향 관점의 핵심
> 이 위키의 회로 논문 **17편 이상이 이 한 가지 방법의 결과를 근거로 삼는데**, 방법 자체를 다루는 페이지가 없었다. 읽을 때 반드시 붙잡아야 할 세 가지.
> ① **"입력이 있다"는 강한 주장, "입력이 없다"는 약한 주장.** 이 방법은 통상 tract tracing보다 민감해 새 입력을 찾아내지만([[wang-2015-whole-brain-mapping-of-the-direct|Wang 2015]]가 subiculum·[[concept-zona-incerta|ZI]]를 새로 검출), **음성 결과는 해석이 갈린다** — 같은 논문에서 통상 추적이 보고한 SCN→ARC가 표지되지 않았다.
> ② **영역 수준 공유 ≠ 세포 수준 공유.** 두 세포타입이 "같은 핵에서 입력을 받는다"는 결과는, **그 핵 안의 같은 뉴런에서 오는지 다른 뉴런에서 오는지 말해 주지 않는다**. 판정하려면 한 개체에 두 시작세포군을 다른 색으로 넣는 이중색 실험이 필요하다. 이 위키에서 [[wang-2015-whole-brain-mapping-of-the-direct|Wang 2015]](영역 수준: POMC·AgRP 입력 35영역 공유)와 [[garfield-2016-dynamic-gabaergic-afferent-modulation|Garfield 2016]](세포 수준: vDMH^LepR이 AgRP 100% vs POMC 9%)이 정확히 이 두 층위의 대비다.
> ③ **수는 시작세포 수에 종속된다.** 절대 입력 뉴런 수는 무의미하고 **수렴비(입력/시작세포)** 와 **총 입력 대비 비율**만 논문 간 비교 가능하다.
> 사용자 lab 관점: 시상하부 표적(ARC·DMH·LH)의 상류를 물을 때 1차 도구이며, [[concept-activity-molecular-registration|CaRMA·TRU-FACT]](활성↔분자정체)와 **짝을 이루는 축**이다. 이쪽은 "누가 입력을 주는가", 저쪽은 "이 활성 세포가 누구인가"를 답한다.

# 단시냅스 광견병 역행추적 (Monosynaptic rabies tracing)

## 한 줄 요약
유전적으로 규정된 특정 세포집단("시작세포")에만 감염하도록 조작한 광견병 바이러스를 써서, 그 집단에 **직접(단 한 시냅스 건너) 시냅스하는 상류 뉴런만** 전뇌 규모로 표지·계수하는 회로 해부 방법.

## 원리 — 왜 딱 한 시냅스만 건너는가

두 가지 조작이 겹쳐 있다. 아래는 [[wang-2015-whole-brain-mapping-of-the-direct|Wang 2015]]의 구현 기준.

**① 진입 제한 (EnvA–TVA)**
- 광견병 바이러스를 **EnvA**(조류 육종·백혈증 바이러스 외피)로 pseudotyping. 포유류 뉴런은 EnvA의 수용체 **TVA**를 갖고 있지 않으므로 감염되지 않는다.
- Cre 의존 **AAV-DIO-EGFP-TVA**로 표적 세포집단에만 TVA를 공급 → 광견병은 **그 세포에만** 진입.

**② 확산 제한 (ΔG + RG 보충)**
- 광견병 유전체에서 **당단백 유전자(RG/G)** 를 제거하고 그 자리에 형광단백(mCherry 등)을 넣음 → 복제는 하되 **스스로는 다음 뉴런으로 못 넘어감**.
- Cre 의존 **AAV-DIO-RG**로 시작세포에만 RG를 trans 공급 → 시작세포에서 만들어진 바이러스 입자만 외피를 갖춰 **역행으로 한 걸음** 이동. 도착한 상류 뉴런에는 RG가 없으므로 **거기서 멈춘다**.

**결과**: 형광 표지 = 시작세포 + 그 시작세포에 직접 시냅스하는 상류 뉴런.

## 핵심 용어

| 용어 | 정의 | 왜 중요한가 |
|---|---|---|
| **시작세포 (starter cell)** | 광견병 리포터 **와** TVA 리포터를 **함께** 발현하는 세포 | 분모. 이 수를 보고하지 않은 입력 지도는 정량 비교 불가 |
| **수렴비 (convergence ratio)** | 입력 뉴런 수 ÷ 시작세포 수 | 논문·집단 간 비교 가능한 유일한 절대량. [[wang-2015-whole-brain-mapping-of-the-direct\|Wang 2015]]: ARC POMC **~49** vs ARC AgRP **~21** vs NTS POMC **~74** |
| **정규화 비율** | 특정 핵의 입력 뉴런 수 ÷ 전뇌 총 입력 수 | 주입량·발현 효율 차이를 흡수. [[krashes-2014-an-excitatory-paraventricular-nucleus-to\|Krashes 2014]]의 "ARC 38%·DMH 26%·PVH 18%"가 이 형식 |
| **세포 밀도 (cells/mm²)** | 핵 부피로 보정한 표지 밀도 | 큰 핵이 비율에서 과대평가되는 것을 보정. 비율과 밀도의 순위가 어긋날 수 있음(Wang 2015: DM이 수 1위, SO가 밀도 1위) |

## 필수 대조군
- **야생형 동복 대조**: Cre가 없는 개체에 같은 3-바이러스를 넣어 **형광 세포가 전혀 없어야** 한다. Cre 비의존 누출 발현이 있으면 지도 전체가 무효. [[wang-2015-whole-brain-mapping-of-the-direct|Wang 2015]]가 이 대조를 명시(Figure 1G).
- **시작세포 국한 확인**: 시작세포가 주입 핵 밖으로 번지지 않았음을 보여야 표지된 상류를 그 핵에 귀속할 수 있다.
- **표지 특이도**: TVA 발현 세포가 실제로 표적 세포타입인지 면역염색으로 검증(Wang 2015에서 **~95%** 공존).
- [[concept-enteroendocrine-cells]] 페이지가 남긴 경고와 동일: **비특이 바이러스 발현 통제가 필수**.

## ★ 해석의 함정 (읽을 때 체크리스트)

**1. 음성 결과를 "연결 없음"으로 읽지 말 것**
[[wang-2015-whole-brain-mapping-of-the-direct|Wang 2015]]는 통상 추적이 보고해 온 **SCN→ARC**와 **NTS→ARC**를 표지하지 못했다. 저자가 제시한 두 해석은 서로 다른 결론으로 이어진다.
- (a) 그 입력이 ARC 안의 **비-POMC·비-AgRP 뉴런**을 표적한다 → 연결은 있으나 이 세포타입엔 없다.
- (b) 통상 추적 쪽이 **주입부 통과 섬유(fiber-of-passage)** 를 비선택적으로 잡은 위양성이었다 → 애초에 연결이 없었다.
→ 단시냅스 추적의 음성은 **"이 세포타입에는 표지되지 않았다"** 까지만 말한다.

**2. 영역 수준 공유를 세포 수준 공유로 승격하지 말 것**
같은 핵이 두 세포타입 모두에 투사한다는 결과는, 그 핵의 **같은 뉴런**이 둘 다에 투사하는지 **다른 뉴런**이 각각 투사하는지 구분하지 못한다. 구분하려면 **한 동물 안에서 두 시작세포군을 서로 다른 색으로 표지**하는 이중색 단시냅스 추적이 필요하다([[wang-2015-whole-brain-mapping-of-the-direct|Wang 2015]] 저자 명시).
> 저자 주: 최근 추적 연구들은 같은 구조 안의 **비중첩 세포타입이 유사한 입력 패턴**을 갖는 경우를 자주 보고한다(선조체 D1 vs D2 [[concept-medium-spiny-neuron|MSN]], 배측 봉선의 세로토닌성 vs GABA성). 즉 "입력 패턴이 비슷하다"는 결과 자체가 그리 놀랍지 않다.

**3. 해부는 기능이 아니다**
표지는 **시냅스가 있음**을 말할 뿐 부호(흥분/억제)·강도·행동적 필요성은 말하지 않는다. 이 위키에서 그 다음 단계를 밟은 사례:
- **부호·강도** → CRACM/광유발 IPSC-EPSC. [[krashes-2014-an-excitatory-paraventricular-nucleus-to|Krashes 2014]](PVH→AgRP가 DMH→AgRP보다 ~3배 진폭·0% failure), [[goode-2026-a-dorsal-hippocampus-prodynorphinergic-dorsolateral|Goode 2026]](TTX+4-AP로 단시냅스 검증).
- **인과** → 투사 특이 광유전/화학유전 조작.

**4. 집단 평균이다**
표적 세포집단이 이질적이면(예: ARC POMC의 신경전달물질 부분집합) 지도는 그 부분집합들의 **합**이다. 부분집합마다 다른 subcircuit일 가능성은 이 방법만으로 풀리지 않는다.

**5. 정량은 시작세포 수에 종속**
주입량·역가·발현 효율이 다르면 절대 수가 달라진다. **수렴비**와 **총 입력 대비 비율**만 비교하라.

## 위키 내 구현 계보

| 논문 | 변형·조합 | 무엇을 얻었나 |
|---|---|---|
| [[betley-2013-parallel-redundant-circuit-organization-for\|Betley 2013]] | pseudotyped SAD-ΔG-mCherry + **이중색 역행표지**(Fluoro-Gold·Retrobeads) | AgRP 축 담보화 정량(penetrance 4–27%) → 병렬·중복 배선 |
| [[krashes-2014-an-excitatory-paraventricular-nucleus-to\|Krashes 2014]] | Agrp-IRES-Cre 시작 + CRACM 후속 | AgRP 입력 **ARC 38%·DMH 26%·PVH 18%** |
| ★ [[wang-2015-whole-brain-mapping-of-the-direct\|Wang 2015]] | 3-바이러스 + **순행 AAV 이중색 병행** + 3D 재구성 | POMC·AgRP·NTS POMC **입력과 출력을 같은 개체·같은 기준**으로. 상호 연결 발견 |
| [[campos-2016-parabrachial-cgrp-neurons-control-meal\|Campos 2016]] | Calca-Cre 시작 | CGRP^PBN 상류에서 **AgRP** 확인 |
| [[douglass-2017-central-amygdala-circuits-modulate-food\|Douglass 2017]] | Htr2a-Cre 시작 + 역행추적 | CeA^Htr2a 회로 매핑 |
| [[goode-2026-a-dorsal-hippocampus-prodynorphinergic-dorsolateral\|Goode 2026]] | 단시냅스 + snRNA-seq + 순행 mWGA | DLS^Pdyn 최다 상류 = **배측/중간 CA3·CA2**, 복측 해마 미미 |
| [[leow-2026-a-cortical-hypothalamic-neural\|Leow 2026]] | **VITALISTIC** = 광견병 + 조직투명화 + light-sheet 전뇌 | rZI^GABA 입력의 **mPFC(PL·ORBm·ACAd) 우세**·압도적 동측 |
| [[bhatti-mazo-2026-feature-specific-threat-coding-in\|Bhatti Mazo 2026]] | **CVS-N2c ΔG**(h2B-GFP) + **serial two-photon tomography** 자동 계수 + rabies-Flp로 입력핵별 photometry·광억제 | 입력 지도에서 끝내지 않고 **표지된 입력에 기능·인과까지** 부여 |
| [[godschall-2026-a-brain-reward-circuit-inhibited\|Godschall 2026]] · [[duran-2026-the-central-amygdala-integrates\|Duran 2026]] | VTA DA 시작 단시냅스 | CeA^Glp1r → VTA DA 투사 확증 |
| [[chen-2026-striatal-control-of-amygdalar\|Chen 2026]] | SI ChAT 시작 | 표지 입력 다수가 Drd2⁺ |
| [[morales-2017-ventral-tegmental-area-cellular-heterogeneity\|Morales 2017]] | 리뷰 | VTA 이질성·mesohabenular 배선 정리 |

## 인접·대안 방법과의 관계

| 방법 | 답하는 질문 | 이 방법과의 관계 |
|---|---|---|
| **통상 tract tracing**(HRP·PHA-L·Fluoro-Gold) | 영역 간 연결 | 세포타입 무관. spill-over·통과 섬유 위양성 위험. 광견병이 이를 피하나 **음성 불일치** 발생 |
| **순행 AAV**(DIO-mtdTomato·EmGFP) | 이 세포는 어디로 가나 | **짝**. Wang 2015이 같은 개체에서 병행해 **상호 연결**을 발견 |
| **CRACM / 광유발 IPSC·EPSC** | 그 시냅스의 부호·강도 | 필수 후속. 해부→생리 |
| [[concept-activity-molecular-registration\|CaRMA · TRU-FACT]] | 이 활성 세포는 누구인가 | **직교 축**. 사후 분자 정합(마커 무편향)이나 입력 구조는 안 줌 |
| **사전 유전 접근**([[bhatti-mazo-2026-feature-specific-threat-coding-in\|Bhatti Mazo 2026]]) | 분자 아형별 기능·입력 | 마커를 미리 알아야 하지만 **광유전 인과 조작까지 직결**. 광견병과 결합 가능 |
| [[concept-spatial-transcriptomics\|공간전사체]] · [[concept-hypomap\|atlas]] | 세포타입 지형 | 배선 없음. 광견병 지도의 **세포 정체 층**을 채워 줌 |

## 사용자 lab 적용 메모
- ARC·DMH·LH 표적의 **상류를 묻는 1차 도구**. 단, 위 체크리스트 5항을 논문 읽기·설계 양쪽에 적용할 것.
- **미해결 과제로 남아 있는 것**: [[wang-2015-whole-brain-mapping-of-the-direct|Wang 2015]]가 남긴 이중색 실험(POMC·AgRP가 같은 입력 뉴런을 공유하는가)은 아직 위키 안에 답이 없다. [[concept-arcuate-nucleus|ARC]] 회로 연구의 열린 질문.
- **LS→ARC**는 Wang 2015이 큰 입력으로 확인했으나 **생리적 효과가 미검증**이라고 저자가 명시했고, 그 사이 위키에는 [[goode-2026-a-dorsal-hippocampus-prodynorphinergic-dorsolateral|LS→LHA]]·[[azevedo-2020-a-limbic-circuit-selectively-links|LS^Nts→LH]] 축이 쌓였다. **LS→ARC 구간이 비어 있는 칸**이다.

## 관련 페이지
- [[wang-2015-whole-brain-mapping-of-the-direct]] — 본 방법의 위키 내 기준 구현이자 해석 함정의 1차 출처 (Front Neuroanat 2015).
- [[krashes-2014-an-excitatory-paraventricular-nucleus-to]] · [[betley-2013-parallel-redundant-circuit-organization-for]] — AgRP 회로의 입력·출력 정량 선행.
- [[garfield-2016-dynamic-gabaergic-afferent-modulation]] — 영역 수준 지도를 **세포 수준 선택성**으로 좁힌 대비 사례.
- [[bhatti-mazo-2026-feature-specific-threat-coding-in]] — CVS-N2c + STPT + 입력별 photometry·광억제로 **해부를 기능·인과까지** 확장한 최신형.
- [[leow-2026-a-cortical-hypothalamic-neural]] — VITALISTIC(광견병+투명화+light-sheet) 전뇌 입력 매핑.
- [[goode-2026-a-dorsal-hippocampus-prodynorphinergic-dorsolateral]] · [[campos-2016-parabrachial-cgrp-neurons-control-meal]] · [[douglass-2017-central-amygdala-circuits-modulate-food]] · [[godschall-2026-a-brain-reward-circuit-inhibited]] · [[duran-2026-the-central-amygdala-integrates]] · [[chen-2026-striatal-control-of-amygdalar]] · [[morales-2017-ventral-tegmental-area-cellular-heterogeneity]] — 위키 내 적용 사례.
- [[concept-activity-molecular-registration]] — 직교 축(활성↔분자정체 정합).
- [[concept-spatial-transcriptomics]] · [[concept-hypomap]] — 배선 지도에 세포 정체를 채우는 층.
- [[concept-computational-ethology]] — 회로 조작의 행동 판독 층.
- [[concept-arcuate-nucleus]] · [[concept-npy-agrp-neurons]] · [[concept-pomc-neurons]] — 이 방법이 가장 많이 적용된 표적.
- [[concept-enteroendocrine-cells]] — 말초(neuropod) 역행 수송 입증에도 사용; 비특이 발현 통제 경고.
