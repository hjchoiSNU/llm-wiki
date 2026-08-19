---
title: "Genetic predictors of GLP1 receptor agonist weight loss and side effects (Su et al. 2026, Nature)"
type: paper
created: 2026-08-19
updated: 2026-08-19
source: "raw/2026 Nature. Genetic predictors of GLP1 receptor agonist weight loss and side effects.pdf"
authors: [Su QJ, Ashenhurst JR, Xu W, Tran V, Wu RR, Weldon CH, Shi J, Hicks B, 23andMe Research Team, Abul-Husn NS, Aslibekyan S, Holmes MV, Koelsch BL, Auton A]
year: 2026
journal: Nature
doi: 10.1038/s41586-026-10330-z
---

> [!takeaway] 연구 방향 관점의 핵심
> **GLP-1RA 반응 이질성의 유전적 근거를 약물 표적 유전자 자체에서 찾은 첫 대규모 GWAS**(23andMe, n=27,885). 핵심은 `GLP1R` 미스센스 변이 **rs10305420 (p.Pro7Leu)** — 사본당 **체중 약 0.76 kg 추가 감량**, 그리고 `GIPR` **p.Glu354Gln**(부분 기능상실)이 **tirzepatide 한정으로 구토 위험**을 좌우한다. 사용자 lab에 세 갈래로 걸린다. (1) [[koide-2025-association-between-eating-behavior|external eating이 반응을 예측한다]]는 **행동 표현형 층화**에 **유전 층화**가 나란히 붙는다 — 두 축을 합치면 [[concept-digital-therapeutics|DTx]]·정밀 항비만의 층화 모델이 실질적으로 강해진다. (2) **효능과 오심·구토 신호가 co-localize**한다(H4 96.6%) — "많이 메스꺼운 사람이 많이 빠진다"는 관찰이 유전적으로 같은 신호일 가능성. 이는 [[concept-area-postrema|AP]] 혐오 축과 체중 감량을 분리하려는 차세대 약물 설계에 **분리 가능성 자체를 묻는** 데이터다. (3) 냉정한 상한선: 유전 기여는 **작다**. 전체 모델 R²가 25%인데 그 대부분은 비유전 요인(성별·약물종류·용량·T2D)이고, 부작용 모델 AUC는 0.65–0.68에 그친다. "유전자 검사로 반응자를 고른다"는 서사에는 아직 못 미친다.

# Genetic predictors of GLP1 receptor agonist weight loss and side effects (Su et al. 2026)

## 한 줄 요약
23andMe 참여자 27,885명의 **자가보고** GLP-1 계열 약물 사용 경험을 GWAS해, 약물 표적 유전자 `GLP1R`·`GIPR`의 코딩 변이가 체중 감량 효능과 오심·구토 부작용에 각각 연관됨을 보인 연구.

## 핵심 내용

### 코호트와 표현형
- 2024년 8월 설문 → 2025년 8월까지 **27,885명**이 Ozempic·Wegovy·Mounjaro·Zepbound·조제(compounded) semaglutide/tirzepatide 사용 보고.
- 인구: **82.4% 여성**, 중앙연령 52세, **78.3% 유럽계**(Latino 12.9%, African American 4.2%).
- 효능 표현형: `ΔBMI% = 100 × (BMI_후 − BMI_전) / BMI_전`. 치료 전 중앙 BMI 35.1, 중앙 치료기간 8.3개월, 중앙 감량 **11.3 kg (−11.7%)**.
- tirzepatide가 semaglutide보다 큼 (중앙 −4.75 vs −3.71 BMI 단위, P=9.7×10⁻²⁹).
- 부작용: 자가평가 중등도–중증(case) vs 경도–없음(control) 대조로 11개 표현형 정의.

### 비유전 예측인자 (먼저 짚어야 할 것)
선형모델이 %BMI 변화 분산의 **약 21.4%**를 설명. 기여 순서:
- **성별**: 여성이 더 큼 (−12.2% vs −10.0%, P=5.0×10⁻³¹).
- **약물 종류·용량·투여기간**에 강하게 의존, 치료 전 BMI에는 약하게 의존(시작 BMI가 높을수록 감량 큼).
- **T2D 상태**: 매우 유의(P=2.0×10⁻⁷³), T2D 있으면 평균 **2.87 %p 덜** 빠짐. (참여자 23.1%가 혈당 목적으로 시작.)
- **조상(ancestry)**: 유럽계 > Latino > African American 순으로 효능 (−12.1% vs −10.6%, P=4.7×10⁻¹⁶).
- **연령**: 10년마다 BMI 변화 0.5 %p 감소(≈0.45 kg 덜 빠짐).

### 발견 1 — `GLP1R` rs10305420 (p.Pro7Leu)가 효능을 높인다
- GWAS (n=15,237, 유럽계) → **6번 염색체 `GLP1R` 좌위**에서 유일한 genome-wide 유의 신호.
- **rs10305420** (참조 C, 효과 T): **P = 2.9 × 10⁻¹⁰**, T 대립유전자당 **ΔBMI% −0.641** ≈ **추가 −0.76 kg** (95% CI −1.27 ~ −0.34).
- **가산적**(우성효과 없음, P=0.80). 좌위 내 독립 신호 없음(조건부 분석).
- 99% credible set 42개 변이 중 **유일한 코딩 변이**이며 사후확률 최대(35%) → **인과 변이일 가능성**. eQTL colocalization 없음.
- 비유럽계에서는 개별 유의성 미달이나 **방향성 일치**, 고정효과 메타분석으로 P=1.1×10⁻¹².
- **약물별 차이**: tirzepatide(−0.95%) > semaglutide(−0.51%), 상호작용항 **P=0.02** (95% CI는 겹침).
- **복제**: All of Us 코호트(EHR 기반, n=4,855) **P=0.001**, 방향 일치. UK Biobank은 semaglutide·tirzepatide 이전 데이터라 검정력 부족으로 미복제.
- 대립유전자 빈도(gnomAD): 유럽 40%·중동 38%·Admixed American 20%·남아시아 16%·**동아시아 16%**·아프리카 7%.

**추정 기전** — Pro7Leu는 `GLP1R` **신호펩티드** 부위. 류신이 프롤린보다 소수성이 커 소수성 영역의 2차구조 안정성을 높일 수 있음 → **세포 내 수용체 트래피킹 개선 → 세포표면 수용체 밀도 증가**. 즉 리간드 친화도 변화가 아니라 **수용체 발현량** 쪽 가설.

> ⚠️ **선행 연구와 방향이 반대**: 기존 두 연구(refs 25, 26)는 rs10305420이 GLP-1RA 효능을 **낮춘다**고 보고했다. 저자들은 그 연구들이 표본이 훨씬 작고(검정력 부족) 특정 질환 맥락·약물 종류·분석 선택이 달랐다고 논박하며, All of Us에서의 독립 복제를 근거로 자사 방향성을 지지한다. **아직 완전히 정리된 쟁점은 아니다.**

### 발견 2 — 부작용도 `GLP1R` 좌위에서 나온다
- 11개 부작용 중 **오심·구토** 두 표현형이 `GLP1R` 근방에서 유의.
- 구토: **rs11760106** (P=2.5×10⁻²⁷, T 대립유전자 OR 1.57). 오심: **rs9357296** (P=2.6×10⁻²⁸, G 대립유전자 OR 1.36).
- semaglutide vs tirzepatide 간 차이 없음.
- 효능 신호와 **중등도 LD**(r²=0.57, 0.75)이고 credible set에 코딩 변이 미포함 → 인과 변이 불명.
- **Co-localization 분석**: ΔBMI%↔오심 **H4 = 96.6%**, ΔBMI%↔구토 88.5%, 오심↔구토 92.1%. 다형질 분석에서 **72.6% 사후확률로 같은 신호** → **오심·구토가 클수록 체중 감량 효능도 크다**는 유전적 연결.

### 발견 3 — `GIPR` p.Glu354Gln, tirzepatide 한정 구토
- **tirzepatide 사용자만** 대상 GWAS → 19번 염색체 `GIPR`에서 구토 신호 **rs71338792** (P=4.2×10⁻⁹, OR 1.84).
- 이 index 변이는 미스센스 **rs1800437 (p.Glu354Gln)** 과 거의 완전 LD(r²=0.99) → **인과 변이로 결론**.
- **G(Glu) 대립유전자가 보호적**(OR 0.546), **C(Gln)가 구토 위험 증가**(OR 1.83). p.Glu354Gln은 잘 알려진 **부분 기능상실** 변이.
- **효능에는 영향 없음**(P=0.73). semaglutide 사용자에서는 효과 없음(GIPR 표적이 아니므로 일관).
- 빈도: 동아시아 21%·유럽 20%·중동 18%·남아시아 14%·아프리카/Admixed American 11%.
- **기전 해석**: GIP 수용체 활성화가 GLP-1RA의 오심·구토를 **완충**한다는 전임상 근거(ref 29)와 부합 — GIPR 기능이 떨어지면 tirzepatide의 GLP-1 성분이 유발하는 혐오 효과를 덜 상쇄한다.
- **유전자 간 상호작용**(약한 근거, P=0.018): `GLP1R`·`GIPR` 양쪽 위험 대립유전자 **동형접합자**는 비위험 동형접합자 대비 tirzepatide 구토 **14.8배** 오즈 (95% CI 6.2–35.8).

### 발견 4 — Phenome-wide (rs10305420의 다면발현)
- T 대립유전자: **T2D 위험 감소**, 공복혈당·HbA1c 감소, 흡연 시작 소폭 증가.
- 23andMe 데이터에서 식이 관련 표현형과 연관 — **단 음식 선호·붉은 고기 섭취·충치 수**.
- **임신 중 입덧(morning sickness) 오즈 감소** — 오심 축과 흥미로운 대응.
- 특기: **BMI·체중 자체와는 연관 없음** → 이 SNP의 효과는 **GLP-1RA 치료 맥락에서만 드러난다**.
- `GIPR` p.Glu354Gln은 BMI·체중·T2D·혈압·망상적혈구 등 **광범위한 다면발현**을 이미 보임.

### 발견 5 — 통합 예측 모델의 실제 성능
- 효능 모델(유전+비유전+임상): 훈련·검증셋 모두 **R² ≈ 25%**. **대부분이 비유전 요인**. T2D·비알코올성 지방간·고혈압 진단이 낮은 효능과 연관.
- EHR(HealthKit) 실사용 검증: 모델이 높은 감량을 예측한 사람이 실제 종단 EHR에서 더 많이 감량(Fig. 3a).
- 부작용 모델: 오심 **AUC 0.654**, 구토 **AUC 0.680**. 저자 스스로 "두 경우 모두 유전의 기여는 비유전 요인 대비 상대적으로 작다"고 명시.

## 비판적 읽기
- **자가보고 기반**이 가장 큰 약점. 자가보고 감량(−14.14%)이 EHR 기록(−8.43%)보다 유의하게 큼(P=1×10⁻⁹). 저자들은 EHR 코호트가 더 젊고 남성 비율이 높으며 치료기간이 짧게 기록되는 점(원격의료·기관 이동으로 전체 경과가 안 잡힘)을 들지만, **하향 보고 편향**은 남는다.
- **표본 편향**: 82.4% 여성, 78.3% 유럽계. 비유럽계는 genome-wide 탐색을 아예 못 하고 발견된 변이의 검정만 수행. **한국인 등 동아시아 적용은 별도 검증 필요** — 다만 두 핵심 변이 모두 동아시아에서 16–21%로 드물지 않다.
- **효과 크기가 작다**: 사본당 0.76 kg은 통계적으로 견고해도 임상적 의사결정을 바꾸기엔 미미. 저자들도 "genetic effect sizes were modest"라고 인정하며 용량 증량 과정을 포함한 종단 데이터가 필요하다고 제언.
- 복용량·증량 속도 정보가 자가보고이며 EHR 기록보다 높게 보고되는 경향(semaglutide 88.8%, tirzepatide 84.3%가 EHR 이상으로 보고).
- 23andMe 소속 연구진의 자사 코호트 연구(이해상충 명시).

## 관련 페이지
- [[concept-glp1ra-response-variability]] — 본 논문이 유전 축을 채우는 **반응 이질성 hub**(유전·비유전·행동 표현형 3층).
- [[concept-glp-1]] — GLP-1/GLP1R hub; `GLP1R` 코딩 변이가 인간 치료반응을 좌우한다는 직접 근거.
- [[concept-gip]] — GIP/GIPR hub; p.Glu354Gln 부분 기능상실이 **tirzepatide 구토**를 좌우 → "GIPR agonism이 혐오를 완충한다"는 가설에 인간 유전 근거.
- [[koide-2025-association-between-eating-behavior]] — **행동 표현형 층화**(external eating). 본 논문의 유전 층화와 나란히 놓으면 층화 모델 2축이 완성된다.
- [[aronne-2023-continued-treatment-with-tirzepatide-for]] — tirzepatide SURMOUNT-4; 중단 후 rebound. 반응 이질성의 시간 축.
- [[concept-area-postrema]] · [[zhang-2022-brainstem-circuit-for-nausea]] — 오심·구토의 회로 기질; 효능·부작용 co-localization의 해부학적 무대.
- [[gao-2026-semaglutide-drives-weight-loss-through]] — 세마글루타이드 1차 작용부위 AP·Gs–cAMP; 본 논문의 "효능과 오심이 같은 신호"라는 관찰과 직접 대응(AP=혐오, NTS=non-aversive satiety 분업 논의).
- [[davila-2026-agrp-neurons-are-required-for]] — 반응 이질성의 다른 축(성별 의존적 AgRP 적응). 본 논문의 **여성이 더 잘 빠진다**는 임상 관찰과 흥미롭게 교차.
- [[takacs-2026-transcriptome-profiling-of-human-hypothalamic]] — 인간 POMC의 `GLP1R` 발현; 변이가 작용할 세포 좌표.
- [[veniant-2024-a-gipr-antagonist-conjugated-to]] · [[jastreboff-2025-once-monthly-maridebart-cafraglutide-for]] — GIPR **길항** 전략; 본 논문의 "GIPR 기능↓ → 구토↑"는 길항 전략의 내약성 우려와 맞물린다.
- [[liskiewicz-2026-glp-1r-gipr-ppar]] — 다중작용제; 표적 유전자 변이가 다중작용제 반응에 어떻게 작용할지가 후속 질문.
- [[wan-2023-glp-1r-signaling-and-functional]] — GLP-1R 신호·biased agonism; 신호펩티드 변이→트래피킹 가설의 수용체생물학 배경.
- [[concept-digital-therapeutics]] · [[kim-2021-digital-therapeutics-for-obesity]] — 다차원 개인화; 유전 층이 추가될 자리.
- [[lee-2025-hijacked-brain-modern-obesity-cue]] — 표현형 기반 개인화 framework (사용자 lab).
- [[petersen-2026-the-evolving-landscape-of]] — 비만 약물치료 지형; 정밀의료 섹션의 근거 논문.
- [[overview-next-gen-incretin-obesity-drugs-2026]] — 차세대 incretin 약물 hub.
