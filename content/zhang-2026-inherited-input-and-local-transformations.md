---
title: Inherited input and local transformations shape the spatiotemporal organization of pathway specific striatal signals for motivated behavior
type: paper
created: 2026-08-19
updated: 2026-08-19
source: raw/2026.06.04.730000.full.pdf
authors: [Zhang Z, Ding Y, Vu MA, Mroz L, Tong Y, Howe MW]
year: 2026
journal: bioRxiv (preprint)
doi: 10.64898/2026.06.04.730000
---

> [!takeaway] 연구 방향 관점의 핵심
> 선조체 신호를 볼 때 반드시 물어야 할 질문을 실험적으로 분리했다 — **"이 신호는 상류에서 물려받은 것인가(inherited), 선조체 안에서 만들어진 것인가(locally transformed)?"** 같은 부위·같은 시점의 SPN 칼슘 신호를 **동일 위치의 글루탐산 입력**과 직접 대조하는 설계로, 감각(cue 위치)·행동(licking) 신호는 입력에 이미 있고, **학습된 가치의 경로-대립(dSPN⁺ vs iSPN⁻)과 보상 근접 ramping은 입력에 없다**는 것을 보였다. 최형진 lab 관점 함의 셋.
> (1) [[concept-medium-spiny-neuron|D1/D2 MSN]] 해리를 보고할 때 "회로가 계산했다"는 주장에 **입력 대조군**이 필요하다는 방법론적 기준선. NAc·DS의 food-cue 신호를 볼 때 그대로 적용된다.
> (2) **학습이 전역 가치 표상을 만들지 않는다** — 이미 존재하는 감각 scaffold(pDMS의 cue 위치 지도) 위에만 가치가 얹힌다. [[concept-cue-reactivity|food cue reactivity]]가 왜 특정 부위·특정 감각 채널에 편중되는지에 대한 회로 문법.
> (3) **pVLS의 dSPN ramping이 예상 licking 개시 시점을 예측**(ramp 기울기↑ → 더 이른 lick) — [[concept-consumption-vigor|섭취 vigor]]·[[concept-appetitive-consummatory-phases|appetitive→consummatory 전이]]의 accumulator/drift-to-threshold 후보 신호.

# Inherited input and local transformations shape the spatiotemporal organization of pathway specific striatal signals for motivated behavior (Zhang et al. 2026, bioRxiv)

## 한 줄 요약
마우스 Pavlovian 시각 조건화 중 **선조체 전역(34–81 부위/마리)에서 dSPN·iSPN 칼슘 신호와 그에 대응하는 글루탐산 입력을 병렬 측정**해, cue 위치·licking 신호는 **입력에서 상속**되고 학습된 cue 가치의 경로-대립·보상 근접 ramping은 **선조체 국소 변환의 산물**임을 해리한 대규모 fiber photometry 연구 (Howe lab).

## 핵심 내용

**Background**
- SPN 활동이 상류(피질·시상·편도)에서 이미 계산된 신호를 물려받은 것인지, 선조체 국소 회로가 변환한 것인지 구분되지 않았다. 상류 구조 다수가 SPN과 **유사한 신호**(cue identity, 가치, 운동)를 갖기 때문.
- 방법론 제약이 원인: 전기생리는 넓게 샘플링하나 세포타입 동정에 optotagging이 필요해 저throughput; 칼슘 이미징은 경로 특이적이나 **단일 부위**에 집중돼 왔고 **국소 글루탐산 입력과 직접 대조한 적이 없다**.

**Method**
- **Task**: head-fixed Pavlovian delay conditioning. 시각 CS⁺(보상 연합) / CS⁻(무보상), CS⁺ 3초 지연 후 물 전달. 일부 마우스는 cue를 **3개 위치**(대측/중앙/동측)에 유사무작위 제시. 구형 treadmill 위 자유 이동(과제 결과에 영향 없음).
- **기록**: 소구경(46 µm) 광섬유 어레이로 선조체 용적 전반 34–81 부위/마리 병렬 측정. jGCaMP7f를 **D1-Cre(dSPN, n=8, 430 fiber)** / **A2A-Cre(iSPN, n=6, 329 fiber)** 로 분리 발현. micro-CT로 사후 위치 재구성. 405 nm isosbestic 대조로 운동·혈역학 artifact 배제.
- **입력 측정**: 같은 마우스 계통에서 **flex-iGluSnFR**를 dSPN(n=3)/iSPN(n=4)에 표적화해 **각 경로에 도달하는 글루탐산 방출**을 선조체 전역에서 측정.
- **분석**: FIR kernel 포함 선형회귀 GLM으로 cue 위치·cue 가치를 licking·treadmill 운동 회귀변수와 분리. ramping은 orthogonal time-basis 모델로 단조 성분만 추출. 3D 유의 영역 재구성 + bootstrap 공간중첩 검정.

**Result 1 — cue 반응의 시공간 조직화**
- 학습 후 CS⁺가 dSPN 333/364, iSPN 280/329 부위에서 반응 유발. 다수는 cue 후 **1초 내 정점**.
- 최단 잠복 반응은 **pDMS(후배내측 선조체)** 에 집중 → 약간 늦게 **전측 복측 선조체(NAc 포함)**.
- 별도 집단은 **보상 전달 예상 시점 근처**에서 늦게 정점 → **pVLS(후복외측 선조체)** 에 집중, **dSPN 우세**.
- CS⁻ 반응은 양 경로 모두 유의하게 짧은 잠복(dSPN p=4.87×10⁻²⁸, iSPN p=9.46×10⁻¹⁰)이며 지연 성분이 거의 없음.

**Result 2 — cue 위치: 학습 불변·경로 공유 (= 상속)**
- 위치 선택성은 **pDMS에 집중**, 전측·복측은 강한 cue 반응에도 위치 선택성 없음.
- 위치 선택 부위는 대측 편향(dSPN p=2.86×10⁻⁹, iSPN p=3.94×10⁻⁵). **dSPN vs iSPN 비율 차 없음**(p=0.172).
- **학습 이전에 이미 존재**하며 잠복·비율 모두 학습 전후 차이 없음 → 선재하는 감각 공간 표상.
- 운동(선형·각속도) 매칭·초기 licking 배제 후에도 보존(공간중첩 p<0.0001) → 운동 부산물 아님.
- **글루탐산 입력에도 동일하게 존재**(dSPN-표적 15/215, iSPN-표적 38/185 부위), 대측 편향·잠복·공간 분포가 칼슘과 중첩(p<0.001) → **상속 확정**.

**Result 3 — 학습된 가치: 두 종류의 표상**
- **① pDMS — 경로 대립(pathway-opponent), 짧은 잠복**
  - dSPN 가치 부위는 압도적 CS⁺ 선호(221/229, p=5.38×10⁻⁴⁵).
  - iSPN은 이질적이며 **CS⁻ 선호가 거의 iSPN 전용**(65/73 CS⁻ 선호 부위).
  - pDMS에서 가치 kernel이 **부호가 반대**(dSPN 양 / iSPN 음, p=6.83×10⁻¹⁷). 중심좌표 AP −0.65, ML 2.55, DV −2.75.
  - 이 빠른 pDMS 가치 신호는 **학습 전 감각 반응·위치 선택 영역과 공간·시간적으로 정렬**(dSPN 중첩 p=0.022, iSPN p=0.016; 잠복 ANOVA 차이 없음) → 선재 scaffold 위에 얹힘.
  - 일부 부위에서 **가치 × 위치 상호작용**(dSPN 3/12, iSPN 4/11): dSPN은 대측 CS⁺, iSPN은 대측 CS⁻를 선호 → 가치가 위치별로 균일 가산되지 않음.
- **② 전측 복측 선조체 — 경로 수렴, 긴 잠복**
  - dSPN·iSPN 모두 CS⁺ 선호, kernel 진폭 차 없음(p=0.85). 중심좌표 AP 0.85, ML 1.45, DV −4.6.
  - 학습으로 새로 생긴 늦은 성분.
- **입력 대조**: 글루탐산에서도 가치 부호화는 많으나(dSPN-표적 55/215, iSPN-표적 121/242) **거의 전부 CS⁺ 선호**(54/55, 112/121)이며 **전측 복측에서 최강, pDMS에서는 약하거나 없음**. pDMS 발산 영역에서 글루탐산 kernel은 경로 차 없음(p=0.326) vs 칼슘은 강한 차이(p=8.78×10⁻⁷).
  → **pDMS의 경로 대립 가치는 국소 변환의 산물**. 전측 복측의 CS⁺ 수렴 가치는 (적어도 부분적으로) 상속.

**Result 4 — 보상 시간 근접: pVLS dSPN ramping (= 국소 변환)**
- CS⁺ 지연기에 단조 상승 후 보상 시점 정점. **dSPN 75/364(20.6%) vs iSPN 13/329(4.0%)** (p=1.83×10⁻⁵), **pVLS 집중**. CS⁻에서는 거의 부재.
- **licking으로 환원 불가**: 첫 lick 이전에 시작, lick rate 공변량 투입 후에도 유의, ITI 자발 lick bout 앞에서는 미발생(75개 중 8개, 10.7%만).
- 단, **ramp 기울기가 예상 licking 개시 잠복을 예측**(가파를수록 이른 lick, p=4.32×10⁻¹¹; 마우스 수준 empirical p=0.002) → **accumulator / drift-to-threshold** 해석.
- **글루탐산 입력에는 ramping 부재**(dSPN-표적 0/65, iSPN-표적 7/82). 반면 **lick 관련 글루탐산 신호는 같은 pVLS에서 잘 검출** → 검출 실패가 아님.

**핵심 결론 (Fig. 6H 요지)**

| 신호 | 부위 | 경로 | 글루탐산 입력에 존재? | 해석 |
|---|---|---|---|---|
| cue 위치 (학습 불변) | pDMS | 공유 | **있음** | **상속** |
| licking | pVLS·후복측 | 공유 | **있음** | **상속** |
| 학습 가치 (CS⁺ 수렴, 긴 잠복) | 전측 복측 | 공유 | **있음** | 대체로 상속 |
| 학습 가치 (dSPN⁺/iSPN⁻ 대립, 짧은 잠복) | pDMS | **대립** | **없음** | **국소 변환** |
| 보상 근접 ramping | pVLS | **dSPN 편향** | **없음** | **국소 변환** |

**저자 해석·가설**
- 학습은 **전역 가치 표상을 부과하지 않는다**. 각 선조체 영역이 가진 **입력 scaffold가 "어떤 변수를 쓸 수 있는지"를 정하고**, 국소 가소성·신경조절이 **"그 변수가 dSPN/iSPN 불균형으로 표현될지"를 정한다**.
- pDMS 발산 기전 후보: dSPN/iSPN의 상이한 도파민 수용체 계열에 의한 경로별 가소성 규칙, 또는 수지상 통합·feedforward 억제·콜린성 조절 차이. 데이터는 **단순 상속 모델을 기각**하되 이들 사이를 구분하지 못함.
- pDMS 기능 가설(사변적): dSPN CS⁺ = 가치 있는 cue로의 orienting/주의 우선, iSPN CS⁻ = 무보상 cue로부터의 이탈(disengagement).
- pVLS ramping 기전 후보: ① 보상 시점 근처 활동 SPN ensemble의 선택적 강화(순차 timing 활동이 bulk 측정에서 가려짐), ② VLS로 전달되는 **도파민 ramp**가 dSPN 흥분성을 선택적으로 증가.

**한계 (저자 명시)**
- Fiber photometry는 **집단 칼슘**만 보고 — 개별 뉴런·수지상·축삭·neuropil 분해 불가. bulk 신호가 체세포 활동과 다를 수 있음.
- 은밀한 구강안면 운동·자세 조정 등 **측정되지 않은 준비 운동 변수**가 보상 근접과 공변해 ramping에 기여할 가능성 배제 못 함.
- 글루탐산 입력이 다른 과제 조건·특정 세포내 구획·더 미세한 방식으로 경로 특이적일 가능성 남음(해부학적으로 dSPN/iSPN 입력은 광범위 중첩하나 동일하지 않음).
- 도파민을 직접 측정·조작하지 않음 — ramping의 도파민 가설은 미검증.

## 사용자 lab 관점 함의

- **방법론 기준선**: 식이 cue에 대한 NAc·DS의 D1/D2 해리를 보고할 때, "선조체가 계산했다"는 주장은 **동일 부위 입력 측정** 없이는 성립하지 않는다. iGluSnFR 병렬 측정이 그 대조군의 구체적 형태다.
- **부위 분업의 재해석**: [[concept-nucleus-accumbens|NAc]]·전측 복측 선조체의 CS⁺ 신호는 상당 부분 **상류에서 이미 만들어진 것**일 수 있다. 반대로 배내측(pDMS)의 경로 대립은 선조체 고유 계산 → 개입 표적으로서의 성격이 다르다.
- **NMPU 축과의 접점**: pVLS dSPN ramp가 "언제 먹기 시작할지"의 임계 도달을 예측한다는 결과는 [[concept-need-motivation-pleasure-utility|NMPU]]의 Motivation→행동 개시 전이를 선조체 수준 accumulator로 읽을 가능성을 연다. [[yang-2026-a-sync-state-in-the|Yang 2026]]의 섭취 후 도파민 sync state와는 **시점이 상보적**(전자는 보상 도달 전, 후자는 섭취 후 credit assignment).
- **열린 질문**: 물 보상 Pavlovian에서 얻은 이 지도가 **음식(칼로리·팔라터빌리티)** 에서도 같은 부위 분업을 갖는지, 그리고 GLP-1RA 투여가 pDMS 경로 대립 또는 pVLS ramping 중 **무엇을 바꾸는지**는 검증되지 않았다.

## 관련 페이지
- [[concept-medium-spiny-neuron]] — dSPN/iSPN 개념 hub. 본 연구는 **경로 해리가 어디서 만들어지는가**라는 층을 추가.
- [[fallon-2026-striatal-pathways-dissociably-control-action]] — 같은 dSPN/iSPN push–pull을 **행동 출력(steering·counting)** 측면에서 인과 조작으로 보임. 본 연구는 그 신호의 **기원**(상속 vs 변환)을 묻는 상보적 관점.
- [[piette-2026-striatal-endocannabinoids-drive-one-shot]] — DLS vs DMS의 **시냅스 가소성 규칙 부위 분업**. 본 연구가 관찰한 "부위별 국소 변환"의 분자 후보 중 하나.
- [[concept-dopamine-reward-system]] — pDMS 경로 발산·pVLS ramping의 유력 상류 조절자(본 연구에서는 미측정).
- [[concept-nucleus-accumbens]] — 전측 복측 가치 신호가 관측된 영역. 본 연구는 이곳의 CS⁺ 선호가 **상속 성분**임을 시사.
- [[concept-cue-reactivity]] — 학습된 food cue 반응이 왜 특정 감각 scaffold 위에만 형성되는지에 대한 회로 문법.
- [[concept-consumption-vigor]] — pVLS ramp 기울기 → licking 개시 시점 예측. vigor의 선조체 accumulator 후보.
- [[concept-appetitive-consummatory-phases]] — ramping이 표시하는 appetitive→consummatory 전이 임계.
- [[yang-2026-a-sync-state-in-the]] — 보상 **이후** 도파민 sync state의 credit assignment. 본 연구의 보상 **이전** ramping과 시간축 상보.
- [[hamid-2016-mesolimbic-dopamine-signals-value-work]] — 도파민 ramp = value of work. 본 연구의 pVLS dSPN ramp가 이 도파민 ramp의 하류인지가 명시적 열린 질문.
- [[concept-need-motivation-pleasure-utility]] — Motivation→행동 개시 전이의 신경 구현.
