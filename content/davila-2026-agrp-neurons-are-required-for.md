---
title: "AgRP neurons are required for the weight-lowering effects of GLP-1 receptor agonists in female mice (d'Ávila et al. 2026, PNAS)"
type: paper
created: 2026-08-19
updated: 2026-08-19
source: "raw/2026 PNAS Agrp-neurons-are-required-for-the-weight-lowering-effects-of-glp-1-receptor-agonists-in-female-mice.pdf"
authors: [d'Ávila M, Cavalcanti-de-Albuquerque JP, Collado-Pérez R, Liu ZW, Hunter J, White A, Schlessinger J, D'Agostino G, Horvath TL]
year: 2026
journal: PNAS
---

> [!takeaway] 연구 방향 관점의 핵심
> **GLP-1RA 중추 기전의 통념을 뒤집는 논문**: 세마글루타이드가 [[concept-npy-agrp-neurons|AgRP 뉴런]]을 *억제·우회*하는 게 아니라 **오히려 모집(recruit)**하며, AgRP 회로가 망가지면 **식이 억제는 유지되는데 체중 감량만 무너진다**. 즉 AgRP는 "굶주림 스위치"가 아니라 약물이 만든 음성 에너지 균형에 **적응 대사반응(지방 동원·β₃-교감신경·기질 전환)을 라이선스하는 노드**다. 사용자 lab 관점에서 세 가지가 직결된다 — (1) [[concept-need-motivation-pleasure-utility|NMPU]]의 **Need 축이 섭취량과 분리되어 체중 결과를 좌우**하는 실험적 증거, (2) 임상적으로 **GLP-1RA 반응 이질성·정체기(plateau)·요요**를 "AgRP 적응 반응의 개인차"로 재해석할 여지, (3) **성별 의존성**(암컷에서만 뚜렷, 난소절제로 부분 회복)이라 여성 대상 비만 약물 반응 예측 연구 설계에 직접 함의. 매개축은 **glucocorticoid → AgRP-GR**로, [[tomiyama-2019-stress-and-obesity|스트레스-비만 축]]과 약물 반응이 만나는 접점을 제공한다.

# AgRP neurons are required for the weight-lowering effects of GLP-1 receptor agonists in female mice (d'Ávila et al. 2026)

## 한 줄 요약
암컷 마우스에서 세마글루타이드·GLP-140은 ARC AgRP 뉴런을 **활성화·구조적으로 재편**하며, AgRP 회로를 여러 방식으로 파괴하면 **식이 억제는 남되 지속적 체중 감량이 크게 약화**된다 — AgRP는 GLP-1RA에 저항하는 세포가 아니라 그 효과를 **완성하는** 세포다.

## 핵심 내용

### 배경 — 뒤집으려는 통념
- AgRP 뉴런은 음성 에너지 균형에 의해 켜지고 섭식·에너지 보존을 촉진하는 세포로 정의돼 왔다 ([[concept-arcuate-nucleus|ARC]] 멜라노코틴계의 orexigenic 축).
- 따라서 GLP-1RA가 체중을 줄이려면 AgRP를 **억제하거나 우회**해야 한다고 암묵적으로 가정돼 왔고, 선행 연구는 억제·무영향·상태의존 등 **엇갈린 결과**를 보고했다.
- AgRP 뉴런은 **GLP-1 수용체를 (거의) 발현하지 않으므로** 어떤 작용이든 **간접적**이어야 한다는 점이 본 논문의 출발 조건.

### 발견 1 — AgRP 기능 파괴 시 체중 감량이 무너진다 (3가지 독립 모델)
| 모델 | 성격 | 결과 |
|---|---|---|
| `AgRP-Sirt1` KO | 발달·만성 AgRP 활성화 결손 | 암컷에서 세마글루타이드 체중 감량 감소, 장기 투여 시 **기저 체중으로 완전 rebound**; 수컷은 보존 |
| `AgRP^DTR` (디프테리아 독소, 신생아기 ablation) | 발달기 AgRP 소실 | 성체 암컷에서 세마글루타이드 체중 감량 감소; 수컷은 보존 |
| `AgRP-Cre;LSL-hM3Dq` + Cre-의존 taCaspase3 AAV (성체 ARC 국소) | **성체 특이** ablation, HFD 5주 후 | GLP-140 유발 체중 감량 유의하게 약화 |

- 핵심 해리: `AgRP-Sirt1` KO에서 **칼로리 섭취는 오히려 약간 더 강하게 억제**되는데도 체중은 덜 빠졌다. 에너지 소비(kcal/h)도 유전형 간 동등.
- 즉 결손은 **섭취(intake)나 총 에너지 소비가 아니라 기질 사용(substrate utilization)** 쪽에 있다.

### 발견 2 — 결손의 정체는 지방 동원(fat mobilization) 실패
- 간접 열량계 기반 **whole-body fat utilization**: WT는 세마글루타이드로 뚜렷히 증가, `AgRP-Sirt1` KO는 **거의 증가하지 않음**.
- **β₃-아드레날린 수용체 길항제 SR59230A** 병용 → 세마글루타이드 체중 감량 약화 + 지방 산화 증가 억제 + 탄수화물 사용 감소 부분 차단 → **β₃-AR 의존 교감신경 출력**이 매개에 기여.
- **AgRP 특이 `Ucp2` 반수결손(`AgRP-Ucp2^+/-`)** 마우스는 세마글루타이드에도 지방 이용 전환이 일어나지 않음 → AgRP 뉴런의 **미토콘드리아 역량 자체**가 필요.

### 발견 3 — 세마글루타이드는 AgRP를 "켠다" (활성화 마커 총동원)
- **15일 투여 후**(2일 투여 후는 아님) `Agrp`·`Npy` mRNA 상승.
- c-FOS⁺ AgRP 뉴런 비율 증가.
- 전자현미경: AgRP 뉴런의 **미토콘드리아 밀도·피복률 증가**.
- 시냅스 재편(patch-clamp): 2일차엔 sIPSC·sEPSC 모두 증가, **15일차엔 sIPSC 빈도만 감소하고 sEPSC는 유지** → 순 흥분(net excitation) 쪽으로 이동.
- 시상하부 `Bdnf`·`Slc32a1` 증가, `Gfap` 감소(astrocyte reactivity↓). 이 전사 적응은 `AgRP-Sirt1` KO에서 **부재**.
- AgRP→**PVH** 말단: 투사 뉴런 수는 불변이나 **말단 총 면적·미토콘드리아 수 증가** → 구조적 강화.

### 발견 4 — 매개 축은 glucocorticoid → AgRP-GR
- ghrelin·leptin 변화로는 설명 안 됨: 세마글루타이드는 순환 ghrelin 불변; leptin은 WT에서 감소하나 KO에서는 (지방 rebound와 함께) 상승. leptin 병용은 오히려 체중 감량을 **강화**.
- 세마글루타이드 투여 암컷에서 **혈중 corticosterone 유의하게 상승**.
- **AgRP 특이 GR 결손(`AgRP-GR^KO`)** → GLP-140 유발 체중 감량 반응 감소 → **GC–GR 신호가 AgRP 모집의 상류**.

### 발견 5 — 성별·식이·조작 시점 의존성 (해석의 조건들)
- 전 모델에서 **암컷에서만 뚜렷**, 수컷은 반응 보존. `AgRP-Sirt1` KO 암컷을 **난소절제**하면 세마글루타이드 반응성이 **부분 회복** → gonadal hormone이 AgRP 의존성을 조절(단, 저자들은 직접 기전 미확립이라 신중히 해석).
- **식이 의존**: `AgRP-Sirt1` KO는 HFD에서는 세마글루타이드 반응이 부분 보존되나 표준식으로 되돌리면 다시 손상 → **비만 자체가 아니라 활성 영양 상태**가 AgRP 의존성을 결정.
- **조작 시점 의존**: 발달·만성 결손 vs 성체 ablation의 결과가 갈림 → 만성 AgRP 기능장애는 **보상적 회로 재편**을 부를 수 있음.
- 저자들이 명시한 불일치: 최근 성체 **AgRP-DTR ablation** 연구는 세마글루타이드 체중 감량이 대부분 보존된다고 보고 — ablation 전략·소실 동역학·투여 요법 차이로 추정하며 미해결로 남김.

## 비판적 읽기
- 인과 사슬은 **손실기능(loss-of-function) 위주**다. "AgRP 활성화가 지방 동원에 **충분**한가"는 직접 시험되지 않았다(기존 Gq-DREADD 만성 활성화 문헌을 원용).
- GC–GR 축은 `AgRP-GR^KO`로 필요성만 보였고, corticosterone 상승이 **AgRP 활성화를 직접 일으키는지**(예: 부신절제 + 대체)까지는 못 갔다.
- 대부분 표준식 조건이며 HFD 실험은 GLP-140(전임상 화합물)로 수행 → **세마글루타이드 임상 조건으로의 직결은 유보**.
- 그럼에도 "GLP-1RA 장기 효능 = 식욕 억제만이 아니라 **뇌가 조율하는 생리적 적응**"이라는 프레임 전환은 견고하다.

## 관련 페이지
- [[concept-npy-agrp-neurons]] — 본 논문의 주역; "hunger 스위치"에서 "적응 대사반응 라이선스 노드"로 역할 확장.
- [[concept-arcuate-nucleus]] — 무대.
- [[concept-glp-1]] — GLP-1/GLP1R hub; 본 논문은 **GLP1R 비발현 세포를 통한 간접 필수 경로**를 추가.
- [[gao-2026-semaglutide-drives-weight-loss-through]] — 세마글루타이드 1차 작용부위(AP)·Gs–cAMP 세포내 기전; 본 논문은 그 **하류에서 동원되는 시상하부 노드**에 해당(AP=입력, AgRP=적응 실행).
- [[concept-area-postrema]] · [[concept-dorsal-vagal-complex]] — 약물이 직접 붙는 상류 무대.
- [[concept-pomc-neurons]] — 길항 짝; GLP1R를 직접 발현하는 쪽과 대조.
- [[takacs-2026-transcriptome-profiling-of-human-hypothalamic]] — 인간 AgRP 뉴런이 **GHSR·INSR·GHR·NR3C1(GR)·사이토카인 수용체**를 풍부히 발현함을 보여 본 논문의 GC→AgRP-GR 축에 **인간 분자 근거**를 제공.
- [[concept-leptin]] · [[concept-ghrelin]] — 본 논문이 매개자에서 배제한 후보들.
- [[tomiyama-2019-stress-and-obesity]] — glucocorticoid–섭식 축; 본 논문의 GC→AgRP-GR와 접점.
- [[liskiewicz-2026-glp-1r-gipr-ppar]] — 차세대 다중작용제; 본 논문의 "AgRP 적응 반응" 프레임이 효능 상한 해석에 적용 가능.
- [[krashes-2014-an-excitatory-paraventricular-nucleus-to]] · [[walker-2026-a-hypothalamic-circuit-for]] — AgRP 상류 흥분성 입력; 약물 조건에서 어떤 입력이 모집되는지가 다음 질문.
- [[garfield-2016-dynamic-gabaergic-afferent-modulation]] — 15일차 sIPSC 감소가 어떤 상류 억제 입력의 약화인지 대응 후보.
- [[concept-need-motivation-pleasure-utility]] — Need 신호가 섭취량과 분리되어 체중 결과를 좌우한 사례.
- [[kim-2025-mechanisms-of-glucagon-like-peptide]] — 뇌 GLP-1R brain-wide 종합(사용자 lab); 본 논문은 그 지도에서 **비-GLP1R 세포의 필수성**을 추가.
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
