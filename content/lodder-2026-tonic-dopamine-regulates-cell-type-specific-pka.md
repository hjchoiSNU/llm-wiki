---
title: "Tonic dopamine가 세포타입별 PKA 활성과 동기를 조절한다 (Lodder & Kamath 2026)"
type: paper
created: 2026-11-22
updated: 2026-11-22
source: "raw/2026 bioRxiv (Sabatini) Tonic dopamine regulates cell-type-specific PKA activity and motivated behavior.pdf"
authors: [Bart Lodder, Tarun Kamath, Isa Hartman, Michelle S. Lopez, Sophie Hoogendoorn, Alloise van Kleef, Kwun Nok Mimi Man, Ximena Opitz-Araya, Michelle Raghubardayal, Joshua Timmins, Roger A.H. Adan, Jonathan Ting, Lin Tian, Bernardo L. Sabatini]
year: 2026
journal: "bioRxiv 2026.11.18.767692 v2 (2026-11-19), doi:10.64898/2026.11.18.767692 — HHMI/Harvard Medical School, 교신 Bernardo L. Sabatini. preprint(미심사)."
---

> [!takeaway] 연구 방향 관점의 핵심
> 위키 도파민 축은 거의 전부 **phasic DA**(RPE·학습률·cue 신호)였고 **tonic DA**(분 단위 느린 변화)의 인과·기전 자료는 비어 있었는데, 이 논문이 그 공백을 메운다. 핵심 전환: **분 단위 tonic DA가 "일할 동기"(progressive ratio breakpoint·poke rate)를 상관일 뿐 아니라 인과적으로 정한다**(DREADD 양방향). 사용자의 [[concept-need-motivation-pleasure-utility|NMPU]] Motivation 성분과 [[concept-will-volition-motivation|의지(will)=tonic DA 반응준비성]] 가설에 직접 실측 근거를 준다. 또 **tonic DA는 D2R-SPN의 PKA를 직접 조절하고 D1R-SPN은 phasic 증가의 크기를 바꿔 간접 조절**한다는 세포타입 비대칭을 in vivo로 확인 — 섭식·보상 회로 하류(NAc)의 가소성 해석에서 "느린 상태 변수"를 하나 더 다뤄야 한다는 뜻.

# Tonic dopamine가 세포타입별 PKA 활성과 동기를 조절한다 (Lodder & Kamath 2026)

## 한 줄 요약
nucleus accumbens core(NAC)의 **tonic dopamine**(분 단위 느린 변화)을 fluorescence lifetime 광도측정(FLIPR)으로 절대값 측정하고 광·화학유전으로 교란해, tonic DA가 **D2R-SPN의 PKA를 직접, D1R-SPN의 PKA를 phasic 증폭을 통해 간접**으로 바꾸며 **일할 동기(progressive ratio breakpoint)를 인과적으로 결정**함을 보였다. (bioRxiv 2026 v2, Sabatini lab, HHMI/Harvard)

## 핵심 내용

### 배경·문제
- striatum DA는 **phasic**(수백 ms, 버스트 발화)과 **tonic**(수초~수분, pacemaker 발화·transporter·autoreceptor가 결정)의 두 시간척도로 요동한다. phasic DA는 광범위 연구됐으나(RPE 등), **tonic DA가 하류 신호와 행동에 미치는 효과는 미지**였다.
- 가설 대립: ① tonic DA가 phasic DA의 절대 크기를 potentiate해 D1R/D2R 민감도 균형을 이동시킨다 vs ② **고친화 D2R은 느린 tonic 변화를, 저친화 D1R은 빠른 phasic transient만** 감지한다(시간 필터의 세포타입 분리). 기존 기법(intensity photometry=상대값만, microdialysis=느림·조직손상, FSCV=보정난점)으로는 tonic·phasic 동시측정이 불가능했다.
- DA는 striatum에서 **D1R(Gαs, PKA↑)·D2R(Gαi, PKA↓)**로 작용하고, 둘은 서로 다른 SPN 집단에 발현. 기존엔 phasic 증가가 D1R-SPN PKA를 올리고, phasic dip이 D2R-SPN PKA를 탈억제한다고 알려졌으나 **기저 DA 농도와 PKA를 동시에 잰 적은 없었다**.

### 모델·방법
- **FLIPR**(fluorescence lifetime photometry, high temporal resolution) + 유전자코딩 lifetime 센서로 **절대·고주파** 측정. DA 센서 dLight3.8(녹색)·신규 적색 lifetime 센서 **FLIM-rdLight1.1**, PKA 리포터 **FLIM-AKAR**(net PKA 활성과 역상관 → 그림은 반전표시).
- NAC에 AAV 발현. tonic DA 추출은 **1분 이동중앙값**(1-min moving median) 사용(4가지 방법 비교, median/mean/iterative Gaussian이 r>0.97로 유사). 결합 mutant dLight3.8mut3x·6-OHDA 병변·D1R 길항제로 lifetime이 결합부위 상호작용과 tonic DA를 반영함을 검증.
- 조작: VTA DAN에 **BiPoles**(Chrimson+gtACR2 양방향 opsin)로 보정된 광유전 phasic/tonic 교란; **Gq/Gi DREADD**(DCZ 유도)로 장시간 tonic DA 양방향 교란(고용량 DCZ는 phasic을 초생리적으로 교란 → phasic 영향 최소 용량으로 보정).

### 결과 1 — tonic DA의 시간척도와 행동 상관
- NAC DA lifetime은 **<100 ms(phasic)와 ~분(tonic)** 두 척도로 요동; 저주파(수십 초~분) 성분이 분산의 상당 부분을 차지. mut 센서는 이 저주파 분산이 없음.
- **Progressive ratio** 과제(먹이 1개에 필요한 nosepoke가 지수적으로 증가, breakpoint=10분 이상 중단 전 획득 보상 수): 과제 진행에 따라 tonic DA가 **점진적으로 상승**(보상 장치 도입 시 큰 조건반응). 
- breakpoint 직전 trial에서 **직전 보상 후~이탈까지의 tonic DA 변화량이 그 구간 poke 수(=얼마나 일하는가)와 양의 상관**. 반면 보상 시 **phasic DA 반응의 크기는 이후 poke 수를 예측하지 못함**. 비작동(non-operant)으로 보상률만 바꾼 통제에서 tonic·phasic 크기가 보상률에 불변 → tonic 상승은 단순 보상률 감소가 아니라 동기 변수.

### 결과 2 — tonic DA의 세포타입별 PKA 영향 (상관·인과)
- DA와 PKA 동시 측정: DA 변화는 **D1R-SPN PKA와 양의, D2R-SPN PKA와 음의** 상관. 교차상관에서 DA 요동이 PKA 요동에 **~4.5초 선행**(D1R 4.2 s, D2R 4.8 s). CNN 예측·선형분석 모두 DA 요동이 양 세포타입 PKA를 강하게 예측.
- **평균 tonic DA 절대값은 D2R-SPN 평균 PKA를 예측(D1R은 못함)**. 잔차(고주파만)는 양쪽 PKA를 잘 예측하지 못함 → **D2R-SPN이 tonic 변화에 더 민감**.
- 광유전 직접 교란(BiPoles): phasic 증가→D1R-SPN PKA↑(D2R 거의 무영향), phasic 감소→D2R-SPN PKA↑(D1R 거의 무영향), 크기 비례. **5분 tonic 교란의 마지막 2분 분석**: tonic DA 양방향 변화가 **D2R-SPN PKA를 선형·양방향으로 바꾸지만 D1R-SPN PKA는 직접 바꾸지 않음**.
- **상호작용**: tonic DA가 높으면 같은 자극의 **phasic 증가 크기가 작아짐**(dip 크기는 불변). 그 결과 (ⅰ) D1R-SPN은 tonic이 phasic 증가 크기를 바꿔 **간접**적으로 PKA 조절, (ⅱ) D2R-SPN은 같은 dip이 낮은 기저선 위에서 더 낮은 절대 DA에 닿아 **더 큰 PKA event** → tonic이 phasic dip의 효과를 bias. 두 SPN은 **phasic 부호(sign)와 주파수 성분(frequency) 둘 다로 DA 신호를 분리**한다(장기 모델 ①②를 모두 부분 지지).

### 결과 3 — tonic DA가 동기를 인과적으로 결정
- VTA DAN의 **Gq/Gi DREADD**로 tonic DA를 phasic 최소교란 용량에서 양방향 조작(NAC dLight3.8로 확인). DCZ 단독(무 DREADD)은 tonic DA·breakpoint·poke rate 불변.
- **tonic DA 증가 → breakpoint·poke rate 증가, 감소 → breakpoint·poke rate 감소** = 보상을 위해 일하려는 동기를 양방향으로 변화. (단 tonic 증가는 먹이 보상 phasic 반응을 소폭 유의하게 감소시킴 → 동기 표현형에 일부 기여 가능성, 저자 주의.)

### 한계·주의
- **preprint(미심사)**, 벌크 광도측정이라 tonic·phasic을 다수 뉴런에 걸쳐 합산(단일세포 2-photon FLIM 필요). tonic/phasic 이분법 자체가 넓은 주파수 스펙트럼의 편의적 구분이라 세분 필요.
- tonic DA가 cholinergic interneuron 등 non-SPN을 거쳐 다중시냅스로 SPN PKA에 작용할 가능성 배제 못 함. 고tonic에서 phasic·D1R-SPN PKA가 커지는 상관(Fig. S5)과 "고tonic이 phasic 증가를 억제"하는 결과의 불일치는 다른 신경조절물질의 공변으로 설명 가능성.

## 관련 페이지
- [[concept-will-volition-motivation]] — **의지(will)=자극 없는 tonic dopamine 반응준비성** 가설(Kang 2011)의 직접 실측: tonic DA가 "일할 동기"를 인과 결정. 그 페이지의 ① 반응준비성 성분에 정량 근거 추가.
- [[concept-need-motivation-pleasure-utility]] — NMPU의 **Motivation(노력·추진력) 성분의 느린 신경기질**로 tonic DA를 배치. progressive ratio breakpoint = Motivation 측정.
- [[salamone-2012-mysterious-motivational-functions-mesolimbic]] — NAc DA=behavioral activation·effort 진영의 고전. 본 논문이 그 "일할 동기"를 **tonic DA의 인과 교란**으로 분해.
- [[concept-medium-spiny-neuron]] — D1R-SPN(direct)·D2R-SPN(indirect)의 PKA가 tonic/phasic·부호/주파수로 분리됨을 보인 in vivo 근거. MSN 개념의 D1/D2 비대칭 심화.
- [[touponse-2026-cholinergic-modulation-of-dopamine-release]] — 같은 NAc·effort(progressive ratio 계열) 축. 본 논문이 미해결로 남긴 "tonic DA↔cholinergic/다른 신경조절물질 공변"을 ACh→DA 조절 쪽에서 다룸.
- [[concept-dopamine-learning-rate]] · [[coddington-2023-mesolimbic-dopamine-adapts-the-rate]] — DA를 느린 상태변수(학습률 등)로 보는 흐름과 대비: 여기선 느린 DA가 **학습률이 아니라 PKA·동기**를 조절.
- [[gershman-2024-explaining-dopamine-prediction-errors-beyond]] — PKA 신호 시간척도(초 단위)와 phasic DA(ms)의 간극 논의. 본 논문의 DA→PKA ~4.5 s 선행·분 단위 tonic 통합이 그 시간척도 지도에 실측 보탬.
- [[concept-nucleus-accumbens]] — 측정·교란 무대(NAC core). tonic DA 상태가 NAc 출력 가소성을 어떻게 bias하는지 추가.
- [[concept-dopamine-reward-system]] — phasic 중심 서술에 **tonic DA의 동기 인과**를 보완. "보상"보다 "일할 동기" 쪽 해석 강화.
- [[fallon-2026-striatal-pathways-dissociably-control-action]] — D1/D2(direct/indirect) striatal 경로의 기능 분리와 병치: 본 논문은 같은 분리를 **DA 주파수 성분**에서 제시.
- [[overview-grand-quest-will-to-live]] — 그랜드 퀘스트(삶의 의지)의 **"왜 지금인가" 1순위 근거**로 본 논문을 배치한 종합 페이지: ① 의지의 신경 대응물이 분 단위 상태임을 실측, ② 축 분리가 일어나는 층이 **수용체·세포내 신호 층**(OptoXR의 표적), ③ PR breakpoint 정의(10분 중단) 자체가 이미 **이탈 사건**.
