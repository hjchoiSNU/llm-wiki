---
title: "Feature-specific threat coding in lateral septum guides defensive action (Bhatti Mazo 2026, Nature)"
type: paper
created: 2026-09-02
updated: 2026-09-02
source: raw/Bhatti Mazo et al., (2026) Feature-specific threat coding in lateral septum guides defensive action.pdf
authors: [Dionnet Leandro Bhatti Mazo, Marc Z. C. Berger, Amanda Loren Pasqualini, Sherry Jingjing Wu, Christopher M. Reid, Salvador Ignacio Brito, Shenfeng Qiu, Pat Levitt, Corey C. Harwell, Todd Erryl Anthony, Gord Fishell]
year: 2026
journal: "Nature 656, 415– (13 Aug 2026)"
doi: 10.1038/s41586-026-10520-9
aliases: [LS Crhr2 threat coding, Bhatti Mazo 2026, feature-specific threat coding]
---

> [!takeaway] 연구 방향 관점의 핵심
> **외측중격(LS)이 "위협 자극 → 방어 행동"을 계산하는 방식**을 분자·공간·기능·입력의 **4축 정합**으로 처음 해부했다. 사용자에게 직접적인 것은 셋.
> ① [[concept-lateral-septum|LS]]는 이 위키에서 여러 번 "경유지"로만 언급되던 노드였다 — 특히 [[gruzdeva-2026-hunger-neurons-track-available-food|Gruzdeva 2026]]의 미검증 가설 **해마→LS→LH→DMH→AgRP**. 본 논문이 **해마→LS**(top-down, cue-outcome)와 **[[concept-lateral-hypothalamus|LHA]]→LS**(bottom-up, action)를 photometry·광억제로 확립했다. 단 시상하부 축의 방향이 **LH→LS(상행)** 여서 Gruzdeva 가설의 LS→LH와는 **반대 방향의 짝**이다. ✅ 이 방향성 공백은 같은 날 ingest한 [[goode-2026-a-dorsal-hippocampus-prodynorphinergic-dorsolateral|Goode 2026]]이 **DLS^Pdyn→LHA^Vgat 단시냅스 억제**로 해소했다 — LS↔LHA는 상호 회로다.
> ② **LS^Glp1r 아형**이 분자적으로 정의되고 **행동 개시(Av-run onset) 표상 1위**·SuM 최대 입력 세포군으로 특정됐다 — [[duran-2026-the-central-amygdala-gates|Duran 2026]]·[[johansen-2025-brain-control-of-energy|Johansen 2025]]가 "LS의 GLP-1R 역할 불명"으로 남긴 공백에 **첫 세포 좌표**. (경고: 본 연구는 섭식·GLP-1RA를 전혀 시험하지 않았다.)
> ③ **방법론 템플릿**: `Crhr2^Flp × GeneX^Cre` 교차 유전학 + miniscope + snRNA-seq + rabies·STPT 뇌 전역 입력지도로 **분자 정체 × 공간 위치 × 기능 동역학 × 입력 구조**를 한 집단에서 정합. [[concept-activity-molecular-registration|CaRMA·TRU-FACT]]의 사후 정합과 짝을 이루는 **사전 유전 접근** 경로이며, LH·ARC 세포타입 작업에 그대로 이식 가능.

# Feature-specific threat coding in lateral septum guides defensive action

Nature 656, 415– (13 August 2026) · doi:10.1038/s41586-026-10520-9 · Fishell lab (Harvard Medical School / Broad) + Anthony lab (Boston Children's). 접수 2025-06-05 / 게재확정 2026-04-09 / 온라인 2026-05-20. 제1·교신저자 Bhatti Mazo는 현재 Rockefeller.

## 한 줄 요약
CRHR2 발현 외측중격 뉴런(**LS^Crhr2**)은 단일 집단이 아니라 **10개의 전사체 아형**으로 나뉘며, 각 아형이 **공간 위치·기능 동역학·상류 입력**에서 갈라진다. 이 집단은 **cue 제시 직후**와 **행동 개시 직전**의 두 시점에 방어 결과를 예측하는 표상을 만들고, 그 표상은 **해마(top-down, cue-outcome)** 와 **시상하부(bottom-up, action)** 입력의 수렴으로 형성된다.

## 배경
- LS는 한 세기 동안 보상 추구·섭식·사회행동·**방어행동**의 조절자로 알려졌다. 대표 현상이 **septal rage** — LS 병변이 무해 자극에 과반응을 일으키면서, **동시에 진짜 위협에 대한 학습된 방어반응은 손상**시킨다(역설). 저자들은 이를 "감각 입력과 행동 사이의 인지적 단절"로 해석한다.
- LS의 **CRHR2 신호**는 환경 자극에 대한 반응 방식에 결정적이며, LS^Crhr2 뉴런 활성은 위협 반응성·상태 의존적 행동 조절에 필수로 보고돼 왔다.
- LS^Crhr2의 주 입력은 **해마 + 시상하부**. 해마는 맥락·연합(경험 기반 예측), 시상하부는 내부 상태·추동·감각 현저성(salience)을 나른다는 것이 저자들의 작업가설.

## 방법

| 축 | 기법 |
|---|---|
| 행동 | **two-way signalled active avoidance**(양방향 신호 능동회피). CS=10초 청각신호, US=0.4 mA 족부충격. 10초 내 반대편으로 달리면(Av-run) CS 종료·shock 회피 = **CS-S(성공)**, 실패 시 shock = **CS-F**. 수일 내 성공률 ~70% |
| 기록 | GRIN lens + miniscope 단일세포 칼슘영상(GCaMP6f), **1,654 LS^Crhr2 뉴런**(본문 45마리; 그림 legend 47마리) |
| 인과 | Arch3(연속) 및 soma-targeted **stGtACR2**(시점 특이) 광억제 |
| 분자 | **snRNA-seq**(n=1,374 nuclei) + 공간 매핑 |
| 아형 기능 | **교차 유전학** `Crhr2^Flp` × 마커유전자 `Cre` → 아형별 GCaMP8m miniscope |
| 입력 지도 | **CVS-N2c ΔG rabies**(h2B–GFP) + serial two-photon tomography 뇌 전역 자동 세포 계수 |
| 입력 기능 | rabies-Flp-tdTomato → Flp 의존 GCaMP8m **fibre photometry**(입력 핵별) + Flp 의존 stGtACR2 광억제 |
| 분석 | PCA·coding direction(CD)·SVM 디코딩·k-means 클러스터링·**GLM(β 계수)** |

## 핵심 결과

### 1. 집단 동역학 — 두 개의 시간적 분기점
- CS 조절: **38.5% 활성 / 15% 억제**. 다수가 CS-S vs CS-F 결과 편향을 보임.
- Av-run: 개시 **직전(anticipatory) 10% 활성**, 개시 중 **12% 활성**. Shock: **63% 활성 / 5.5% 억제**.
- 개별 뉴런은 하나의 과제 변수에 전속되지 않고 **여러 변수에 부분적으로 상관** → 단일세포 전속 코딩이 아니라 **집단 통합**.
- 저차원 궤적: CS 제시 **1초 이내**에 CS-S/CS-F 궤적이 갈라지고, 이 시점 활성이 **수 초 뒤의 회피 성공을 예측**(행동 개시 전). 두 번째 분기는 **Av-run 약 1.5초 전**. 자발적 달리기(nonav-run)는 예측되지 않음 → 운동 자체가 아니라 **방어 결정**의 표상.

### 2. 두 시점의 인과적 분업 (stGtACR2)

| 광억제 시점 | 회피 확률 | 회피 지연시간 | 회피 vigour |
|---|---|---|---|
| **CS onset** (−1~+2.5 s) | 뚜렷이 ↓ | **지연** | Av-run 구조·속도 변화 |
| **prior-to-action** (CS 후 2.5 s~) | ↓ | 변화 없음 | **뚜렷이 ↓** |

→ 첫 시점 = **감각 평가/의사결정**, 두 번째 = **동기적 현저성이 회피를 이끄는 단계**. 두 국면이 분리 가능한 계산이다.
추가로 LS^Crhr2 **절제**는 고전적 병변 표현형(자극 반응성 이상)을 재현했고, **급성 억제**는 학습된 행동·생리 위협반응을 억제했다.

### 3. 기능 클러스터 10개 + 공간 topography
활동 패턴 k-means → 10 클러스터. 구분 기준: (1) CS 활성/억제, (2) CS-S vs CS-F 반응 크기 차, (3) CS 반응의 일시성/지속성, (4) shock 반응성, (5) 안전구역 진입·탈출 완료 반응, (6) Av-run 반응.
- **cue-outcome 변수**: 클러스터 1·2·4·8
- **prior-to-action 변수**: 클러스터 1·3·7·10
- cue / cue-outcome / prior-to-action / action 차원이 모두 **LS 해부 공간에 topographic하게 배열**.

### 4. 분자 아형 10개 (snRNA-seq, n=1,374 nuclei)
LS^Crhr2를 **단일 집단으로 취급한 최근 보고들과 반대로** 10개 전사체 아형이 분리됐다.

| 아형 | 비율 | 아형 | 비율 |
|---|---|---|---|
| `Foxp2` | 17.39% | `Met;Lmo2` | 9.32% |
| `Calcr-low;Calb1-high` | 13.90% | `Calcr-high;Calb1-low` | 8.66% |
| `Lhx2` | 12.59% | `Chat` | 8.22% |
| `Tshz2;Pde3a` | 8.15% | `Glp1r` | **8.37%** |
| `Tshz2` | 7.64% | `Chat;Lhx2` | 5.75% |

각 아형은 **고유한 공간 분포**를 가지며, §3의 기능 클러스터는 대체로 **분자 아형 내부에 갇힌다** → 분자 정체가 기능을 상당 부분 규정한다.

### 5. 아형별 기능 (GLM β 계수)
- **cue-outcome**(β_CS-S − β_CS-F): 모든 아형에 존재하되 강도·방향 상이. **`Lhx2` 최대**(CS-S에서 CS 반응 증가), **`Chat`은 반대 방향**.
- **anticipatory Av-run**(행동 1초 전): **`Met` · `Lhx2` · `Foxp2` · `Calcr`** 에서 최대.
- **Av-run onset**(행동 후 1초): **`Glp1r` 최대**, 이어 `Foxp2` · `Met`.

### 6. 입력 구조 (rabies + STPT)
- **해마·시상하부는 아형과 무관하게 모든 LS^Crhr2 집단을 강하게 지배**. 그 위에 아형 특이 입력이 얹힌다:
  - **[[concept-basolateral-amygdala|BLA]] → `Glp1r`·`Foxp2`** 선택적
  - **posterior amygdala(PA) → `Chat`** 선택적
  - **PVT(고차 시상핵) → 대부분의 아형**
- 입력 프로파일만으로 아형을 구분하는 디코더가 우연 이상 성능 → **입력 구조가 아형 정체의 일부**.
- 해마 세부: **vCA1·CA2·CA3·prosubiculum(ProS)** 이 최다. **CA2 → `Met`·`Glp1r`**, **ProS → `Chat`** 편향. CA2를 빼면 모두 **복측** 해마.
- 시상하부 세부: **SuM(유두체상핵)·PH·MPO·[[concept-ventromedial-hypothalamus|VMH]]·AHN·[[concept-lateral-hypothalamus|LHA]]** 가 최다. **SuM→`Glp1r`, VMH→`Chat`, LPO→`Met`, LHA→`Calcr`** 편향. LHA 입력은 특히 **subfornical area(LHAsf)** 에서 기원.

### 7. 입력이 나르는 정보 — top-down vs bottom-up의 실증
입력 핵별 photometry (해마 vCA1·vCA3·vSub / 시상하부 AHN·LHAsf·SuM):

| 입력 | CS 반응 | Av-run 반응 | GLM 우세 변수 |
|---|---|---|---|
| **vCA1** | CS-S 선호 | **없음** | cue-outcome |
| **vCA3** | CS-F 선호 | **없음** | cue-outcome |
| **LHAsf** | 활성 | CS-S 내내 **ramp up → Av-run까지** | action (anticipatory) |
| **SuM** | 활성 | **Av-run 개시 시점 급증** | action (onset) |

- 디코더: **CS onset 시점의 결과 예측은 해마 데이터가 우세**, **Av-run 직전 예측은 시상하부 데이터가 우세**.
- 입력 광억제(CS 동안): **vHPC·LHA 억제 → 회피 확률 ↓**, **SuM 억제 → 지연시간만 ↑**. 세 입력 모두 **vigour는 변화 없음** → vigour는 하류 또는 다른 입력이 통제.

## 저자 결론과 해석
- LS^Crhr2는 **top-down 인지 신호(해마)와 bottom-up 행동/현저성 신호(시상하부)의 수렴**으로 다면적 위협 표상을 만들고, 이것이 방어 행동 선택의 기질이다.
- **LS의 고유성**: BLA·PVT·선조체·전두피질은 CS 제시 중 이런 계산을 수행하지 않는다. 전두피질도 다가올 회피를 예측하지만 **cue 유발 집단 동역학과 무관하게**, 그리고 **방어 결과를 구분하지 못한 채** 예측한다. → LS는 전두피질보다 **상류**에서 환경 cue를 경험·내부 상태와 결합한다.
- **불안장애 모델**: bottom-up 시상하부 현저성 신호가 top-down 조절에 비해 과도해지면, 위협이 아닌 자극에도 방어 행동이 촉발된다는 예측. 스트레스가 CRHR2 신호로 LS 흥분성을 바꿔 두 입력의 균형을 이동시킬 가능성(미검증).
- **일반화 주장**: 같은 조직 원리가 보상(cue→reward seeking)·사회(화학감각/맥락 cue→접근·회피·영역행동) 맥락에도 적용될 것. **해마의 외부 감각 정보 + 시상하부의 신체 상태 정보가 LS에서 수렴**하는 것이 맥락 특이적 적응행동의 공통 모티프라는 제안.

## 한계 · 미해결
- **섭식·에너지대사 실험 없음.** `Glp1r`·`Calcr` 아형은 이름만 대사 관련이고, 본 논문에서 GLP-1RA·amylin·섭식은 전혀 시험되지 않았다. 대사 함의는 전부 **추론**이다.
- CRHR2 자체의 신호 기전(스트레스가 어떻게 입력 균형을 바꾸는가)은 다음 과제로 명시.
- **중격 내부 미세회로**(아형 간 상호 억제/조절)는 미해부. 저자들은 LS를 "하류 출력의 tonic 억제자"로 보는 통념 대신 **집단 코딩** 관점을 제안한다.
- LS의 **출력** 축(어디로 보내 방어 행동을 만드는가)은 본 논문의 초점 밖.
- 아형별 imaging의 **n이 작은 그룹**이 있다(`Met` 2마리 70뉴런, `Foxp2` 2마리 23뉴런, `Calcr` 2마리 26뉴런) — 아형 간 비교는 이 불균형을 감안해 읽어야 한다.
- 기록 마우스 수가 본문(45)과 그림 legend(47)에서 다르게 표기됨.

## 사용자 lab 함의
1. **해마-섭식 축의 잃어버린 고리.** [[gruzdeva-2026-hunger-neurons-track-available-food|Gruzdeva 2026]]이 AgRP 공간 신호의 상류로 제안한 **해마→LS→LH→DMH→AgRP**에서, 본 논문은 **해마(vCA1/vCA3/ProS)→LS**가 실재하고 **cue-outcome 정보**를 나른다는 것을 photometry+광억제로 보였다. 다만 본 논문이 매핑한 시상하부 축은 **LHA→LS(상행)** 로 Gruzdeva의 LS→LH와 방향이 반대다. 즉 **LS↔LH 상호 회로**를 전제해야 한다. ✅ [[goode-2026-a-dorsal-hippocampus-prodynorphinergic-dorsolateral|Goode 2026]](DLS^Pdyn→LHA^Vgat 단시냅스 억제)과 [[azevedo-2020-a-limbic-circuit-selectively-links|Azevedo 2020]](LS^Nts→LH 섭식 억제)이 **하행 축을 확정**해 상호 회로가 성립했다. 남은 미검증 구간은 **LH→DMH→AgRP**.
2. **LS^Glp1r = 새로운 변연계 GLP-1R 노드 후보.** [[concept-glp-1|GLP-1]] 회로 지도에서 LS는 [[johansen-2025-brain-control-of-energy|Johansen 2025]]가 NAc 도파민 억제의 간접 경유지로, [[duran-2026-the-central-amygdala-gates|Duran 2026]]이 "역할 불명"으로 남긴 곳이다. 본 논문은 LS^Glp1r가 (i) LS^Crhr2의 8.37%, (ii) **행동 개시 표상 1위**, (iii) **SuM 최대 입력 + BLA 선택적 입력**을 받는 뚜렷한 세포군임을 보였다. → "GLP-1RA가 LS^Glp1r를 통해 **행동 개시**를 누르는가"가 바로 시험 가능한 가설. ★ 나아가 `Glp1r`는 [[azevedo-2020-a-limbic-circuit-selectively-links|Azevedo 2020]](LS^Nts의 **70%**, LS 내 exendin-4가 섭식↓)·[[goode-2026-a-dorsal-hippocampus-prodynorphinergic-dorsolateral|Goode 2026]](`Pdyn`과 공발현)에서도 반복 등장 — **세 독립 좌표계의 수렴 마커**다.
3. **LS^Calcr.** [[concept-amylin-receptor-agonists|amylin(CALCR) 계열]]의 변연계 좌표 후보. LHA 입력을 가장 많이 받고 anticipatory 행동 표상에 기여 → cagrilintide류 중추 작용 부위 논의의 참고점(직접 증거는 아님).
4. **NMPU 매핑.** 해마 = 경험 기반 예측(학습된 결과 예측), 시상하부 = 내부 상태·현저성(행동 구동)이라는 분업이 **입력 수준에서 실측**됐다. 위협 맥락이지만 [[concept-need-motivation-pleasure-utility|NMPU]]가 배치한 "Motivation은 시상하부 / 학습된 Utility는 피질-해마"와 **독립 도메인에서 수렴**하는 증거.
5. **4축 정합 방법론.** `X^Flp × marker^Cre` 교차 유전학으로 **분자 아형별 freely-moving miniscope**를 돌리고 같은 아형에 **rabies+STPT 입력지도**를 붙이는 조합은 [[concept-lateral-hypothalamus|LH]]·[[concept-arcuate-nucleus|ARC]] 이질성 문제에 그대로 적용된다. [[concept-activity-molecular-registration|CaRMA/TRU-FACT]](사후 정합·마커 무편향) 대비 **사전 유전 접근**(마커를 미리 알아야 하지만 인과 조작까지 직결) — 두 전략의 trade-off를 명시적으로 비교할 것.

## 관련 페이지
- [[concept-lateral-septum]] — 본 논문이 정립한 LS hub 개념 페이지.
- [[gruzdeva-2026-hunger-neurons-track-available-food]] — 해마→LS→LH→DMH→AgRP 가설의 출처. 본 논문이 그 첫 구간을 실증(방향 주의).
- [[concept-hippocampus-feeding]] — 해마→피질하 축. 본 논문이 vCA1·vCA3·ProS→LS를 추가.
- [[concept-lateral-hypothalamus]] — LHAsf가 LS로 **상행 action 신호**를 보냄(LH의 새 출력 표적).
- [[concept-glp-1]] · [[duran-2026-the-central-amygdala-gates]] · [[johansen-2025-brain-control-of-energy]] — LS GLP-1R 공백에 세포 좌표를 제공.
- [[concept-amylin-receptor-agonists]] — LS^Calcr 아형.
- [[concept-basolateral-amygdala]] — BLA→LS^Glp1r/Foxp2 선택적 입력.
- [[concept-ventromedial-hypothalamus]] — VMH→LS^Chat 편향 입력.
- [[concept-bed-nucleus-stria-terminalis]] — 같은 스트레스·위협 변연계 축의 인접 노드(CRH 계열 비교).
- [[concept-activity-molecular-registration]] — 분자×기능 정합의 대안 전략(사후 정합) 비교.
- [[concept-need-motivation-pleasure-utility]] — top-down/bottom-up 분업의 이론 대응.
- [[azevedo-2019-a-role-of-drd2]] — 해마 Drd2→중격 회로가 맥락 의존 섭식을 조절(같은 해마-중격 축의 섭식판).
- [[jamieson-2026-neural-circuits-for-mammalian-parental]] — PeFA→LS가 새끼 repulsion을 매개(LS의 사회·방어 축).
- [[concept-computational-ethology]] — 집단 동역학·GLM·디코딩 분석 계열.
- [[goode-2026-a-dorsal-hippocampus-prodynorphinergic-dorsolateral]] — ★ 본 논문이 남긴 **LS→LHA 방향 공백을 해소**: 배측 해마 CA3/2→DLS^Pdyn→LHA^Vgat 단시냅스 억제가 **맥락 조건화 섭식**을 게이팅 (Neuron 2026, Sahay lab).
- [[azevedo-2020-a-limbic-circuit-selectively-links]] — LS^Nts→LH가 **능동 도피 스트레스** 시 섭식을 억제. LS^Nts의 70%가 `Glp1r`⁺ (eLife 2020, Friedman lab).
