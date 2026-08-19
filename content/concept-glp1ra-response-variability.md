---
title: GLP-1RA 반응 이질성 (Response variability & precision anti-obesity)
type: concept
created: 2026-08-19
updated: 2026-08-19
aliases: [GLP-1RA 반응 이질성, response variability, 정밀 항비만, pharmacogenomics, precision obesity medicine, responder stratification]
---

> [!takeaway] 연구 방향 관점의 핵심
> "같은 약을 같은 용량으로 써도 누구는 25% 빠지고 누구는 5%도 안 빠진다" — GLP-1RA 임상의 가장 실용적인 미해결 문제이며, 사용자 lab의 **표현형 기반 개인화**([[concept-digital-therapeutics|DTx]]·[[lee-2025-hijacked-brain-modern-obesity-cue|hijacked brain framework]]) 노선이 정확히 겨냥하는 지점이다. 이 페이지는 반응을 가르는 요인을 **비유전 임상 / 유전 / 행동 표현형 / 회로·생리** 4층으로 모아, 각 층이 얼마나 설명하는지를 정직하게 기록한다. 현재 결론은 냉정하다 — **비유전 임상 요인이 분산의 ~21%, 유전을 더해도 ~25%**. 나머지 75%는 미설명이며, 그 공백이 바로 **행동 표현형·회로 수준 마커**가 들어갈 자리다. 사용자 lab이 external eating·cue reactivity·LOC eating으로 층화하려는 시도가 왜 경쟁력 있는지를 이 숫자가 설명한다.

# GLP-1RA 반응 이질성 (Response variability)

## 한 줄 요약
GLP-1 수용체 작용제의 체중 감량 효능과 부작용은 개인차가 매우 크며, 그 변동을 임상·유전·행동·회로 요인으로 분해해 **반응자를 사전 층화**하려는 문제 영역.

## 변동의 규모
- 실사용 코호트(n=27,885, 자가보고)에서 평균 BMI 감소 10.2%, 그러나 **4.9%는 25% 이상 감량**, **32.2%는 5% 미만 감량 또는 오히려 증가** ([[su-2026-genetic-predictors-of-glp1-receptor|Su 2026]]).
- 즉 "평균 효과"로는 임상 의사결정을 못 한다. 층화가 필요한 이유.

## 1층 — 비유전 임상 요인 (분산의 ~21%)
| 요인 | 방향 | 비고 |
|---|---|---|
| **성별** | 여성이 더 큼 (−12.2% vs −10.0%) | 전임상에서도 [[davila-2026-agrp-neurons-are-required-for|AgRP 의존성이 암컷 특이]]로 나타남 — 우연의 일치인지 공통 기전인지 미해결 |
| **약물 종류** | tirzepatide > semaglutide | 이중작용(GIPR+GLP-1R) |
| **용량·투여기간** | 강한 의존 | 증량 속도 데이터는 대부분 미확보 |
| **T2D 동반** | T2D면 **2.87 %p 덜** 빠짐 | 가장 강한 단일 임상 예측인자 (P=2×10⁻⁷³) |
| **치료 전 BMI** | 높을수록 더 큼 | 의존성은 약함 |
| **연령** | 10년마다 0.5 %p 감소 | |
| **동반질환** | MASLD·고혈압 진단이 낮은 효능과 연관 | |
| **조상(ancestry)** | 유럽계 > Latino > African American | 사회·의료접근 교란 배제 어려움 |

## 2층 — 유전 (추가로 ~4 %p)
[[su-2026-genetic-predictors-of-glp1-receptor|Su 2026 Nature]] (23andMe GWAS)가 **약물 표적 유전자 자체**에서 신호를 찾았다는 점이 중요하다.

| 변이 | 유전자 | 효과 | 약물 특이성 |
|---|---|---|---|
| **rs10305420** (p.Pro7Leu, 신호펩티드) | `GLP1R` | T 대립유전자당 **추가 −0.76 kg** (P=2.9×10⁻¹⁰) | tirzepatide(−0.95%) > semaglutide(−0.51%) |
| rs11760106 / rs9357296 | `GLP1R` 좌위 | 구토 OR 1.57 / 오심 OR 1.36 | 약물 무관 |
| **rs1800437** (p.Glu354Gln, 부분 기능상실) | `GIPR` | 구토 OR 1.83, **효능에는 무영향** | **tirzepatide 한정** |

- **핵심 관찰**: 효능 신호와 오심 신호가 **co-localize**(H4 96.6%, 같은 신호일 사후확률 72.6%) → "메스꺼움이 큰 사람이 많이 빠진다"가 유전적으로 뒷받침. 효능과 혐오를 분리하려는 차세대 약물 설계에 **분리 가능성 자체를 묻는** 데이터.
- **유전자 간 상호작용**: `GLP1R`·`GIPR` 양쪽 위험 동형접합 → tirzepatide 구토 오즈 **14.8배**(약한 근거, P=0.018).
- rs10305420은 **BMI·체중 자체와는 무관** — 효과가 **약물 맥락에서만** 드러난다. 기전 가설은 리간드 친화도가 아니라 **수용체 트래피킹·세포표면 밀도**.
- 한계: 효과 크기가 임상적으로 작고, 선행 연구와 **방향이 반대**인 미해결 쟁점이 있으며, 코호트가 82.4% 여성·78.3% 유럽계.

## 3층 — 행동·심리 표현형 (사용자 lab 노선)
- **External eating**(외부 cue 유발 섭식)이 높을수록 12개월 감량이 큼 (β=−2.68 kg, P=0.003); emotional·restrained eating은 무관 ([[koide-2025-association-between-eating-behavior|Koide 2025]]).
  - 해석: GLP-1RA는 **외부 음식 cue 반응성을 억제**하는 약이므로, 그 축이 높은 사람에게 잘 듣는다.
- [[concept-cue-reactivity]] · [[concept-loss-of-control-eating]] · [[concept-emotional-eating]] — 층화 후보 표현형들.
- [[kim-2020-multidimensional-cognitive-behavioral-therapy]] — DTx 맥락에서 **baseline 심리지표가 반응을 예측**한 선례.
- 장점: 문진·설문 한 줄로 측정 가능해 **임상 배치 비용이 낮다**. 유전자형 검사보다 실용적일 수 있다.

## 4층 — 회로·생리 (아직 마커화 안 됨)
- **뇌 영상**: 비만에서 food cue 과반응, GLP-1RA가 이를 차별적으로 조절 ([[bae-2019-glucagon-like-peptide-1-receptor|Bae 2019]], 사용자 lab fMRI).
- **AP vs NTS 분업**: 세마글루타이드의 1차 작용부위는 [[concept-area-postrema|area postrema]](혐오)이고 NTS는 non-aversive satiety — 개인별로 어느 쪽이 우세한지가 효능/부작용 비율을 가를 수 있다 ([[gao-2026-semaglutide-drives-weight-loss-through|Gao 2026]]).
- **AgRP 적응 반응**: AgRP 회로가 약물이 만든 음성 에너지 균형에 적응 대사반응을 라이선스하며, 이 의존성이 **성별·식이 상태에 따라 달라진다** ([[davila-2026-agrp-neurons-are-required-for|d'Ávila 2026]]). 임상의 정체기(plateau)·요요를 이 축으로 재해석할 여지.
- **인간 수용체 발현 지형**: 인간 POMC는 `GLP1R`을 발현하되 마우스보다 낮고, VL 아집단에 농축 ([[takacs-2026-transcriptome-profiling-of-human-hypothalamic|Takács 2026]]) — 개체 간 발현 변이가 반응 변이의 기질일 가능성(미검증).

## 현재 예측 성능의 상한
| 모델 | 성능 |
|---|---|
| 비유전 임상만 | 분산 **~21.4%** (adjusted R²) |
| 비유전 + 유전 | **~25%** (R², 훈련·검증셋 동일) |
| 오심 예측 | AUC **0.654** |
| 구토 예측 | AUC **0.680** |

→ **미설명 분산 ~75%**. 이것이 3·4층(행동 표현형·회로 마커)의 기회 공간이다.

## 열린 질문 (연구 설계 메모)
- 행동 표현형(external eating)과 유전형(rs10305420)이 **독립적으로 기여**하는가, 아니면 같은 축의 다른 측정인가? 두 데이터를 가진 코호트가 필요.
- 효능·오심의 co-localization이 **분리 불가능한 생물학**을 뜻하는가, 아니면 현재 약물의 약동학이 만든 우연한 결합인가? AP 국소 조작·경구 소분자·biased agonism이 시험대.
- **여성이 더 잘 빠진다**(임상)와 **암컷에서만 AgRP 의존**(마우스)이 같은 기전인가? 성호르몬-AgRP-GC 축이 후보.
- 한국인·동아시아 코호트에서 두 핵심 변이(동아시아 빈도 16–21%)의 효과가 재현되는가?

## 관련 페이지
- [[su-2026-genetic-predictors-of-glp1-receptor]] — 유전 층의 1차 근거(Nature 2026, 23andMe GWAS).
- [[koide-2025-association-between-eating-behavior]] — 행동 표현형 층의 1차 근거(external eating).
- [[concept-glp-1]] · [[concept-gip]] — 표적 수용체 hub.
- [[davila-2026-agrp-neurons-are-required-for]] — 성별·식이·조작시점 의존적 반응 이질성의 전임상 기전.
- [[gao-2026-semaglutide-drives-weight-loss-through]] — AP(혐오) vs NTS(포만) 분업; 효능/부작용 분리 가능성의 회로 근거.
- [[takacs-2026-transcriptome-profiling-of-human-hypothalamic]] — 인간 표적 세포의 수용체 발현 지형.
- [[concept-area-postrema]] · [[zhang-2022-brainstem-circuit-for-nausea]] — 오심·구토 회로.
- [[aronne-2023-continued-treatment-with-tirzepatide-for]] — 중단 후 rebound; 반응 이질성의 시간 축.
- [[concept-cue-reactivity]] · [[concept-loss-of-control-eating]] · [[concept-emotional-eating]] — 층화 후보 표현형.
- [[lee-2025-hijacked-brain-modern-obesity-cue]] — 표현형 기반 개인화 framework (사용자 lab).
- [[concept-digital-therapeutics]] · [[kim-2021-digital-therapeutics-for-obesity]] · [[kim-2020-multidimensional-cognitive-behavioral-therapy]] — DTx 개인화 노선.
- [[bae-2019-glucagon-like-peptide-1-receptor]] — 인체 fMRI cue 반응성 (사용자 lab).
- [[petersen-2026-the-evolving-landscape-of]] — 비만 약물치료 지형·정밀의료.
- [[overview-next-gen-incretin-obesity-drugs-2026]] — 차세대 약물 hub.
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
- [[heyward-2025-single-nucleus-transcriptional-and-chromatin]] — 미설명 분산을 **비코딩 조절 변이 × 세포아형** 축에서 탐색할 좌표계: 시상하부 LepR 39아형의 CRE를 인간 GWAS/eQTL/HuGE와 교차 (bioRxiv 2025).
- [[concept-cis-regulatory-element-obesity]] — 그 접근의 방법론 hub(OCR → liftOver → GWAS/eQTL/HuGE).
