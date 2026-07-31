---
title: "강박적 섭식의 피질-시상하부 회로 mPFC→rZI (Leow 2026)"
type: paper
created: 2026-07-31
updated: 2026-07-31
source: "raw/2026 Neuron. A cortical-hypothalamic neural circuit for compulsive eating in mice.pdf"
authors: [Yi Ning Leow, Esra Senol, Xing Qian, Xiaoyu Wang, Aditya Nair, Ti-fei Yuan, Juan Helen Zhou, Hasan Mohammad, Yu Fu]
year: 2026
---

> [!takeaway] 연구 방향 관점의 핵심
> **강박적 섭식(compulsive eating)을 일반 식욕(appetite)과 회로 수준에서 분리**한 논문 — 사용자 lab의 [[concept-need-motivation-pleasure-utility|NMPU]] 프레임에 직접 대응. rostral zona incerta GABA 뉴런([[concept-zona-incerta|rZI^GABA]])은 **처벌(foot-shock·quinine)에 저항하며 기호식(HFD)을 계속 추구**하는 "강박" 성분을 담당하는 반면, tuberal N. somatostatin(TN^SST) 뉴런은 **일반 섭취량↑만** 담당 — 같은 시상하부 orexigenic 뉴런도 기능이 질적으로 다르다. 핵심 novelty는 **top-down 피질 통제**: [[concept-orbitofrontal-cortex|mPFC]](PL·ORBm·ACAd)→rZI 회로가 강박을 gate하고, binge 경험이 mPFC-rZI 뉴런을 **지속적 attractor 상태**(persistent food-seeking)로 재편한다. 결정적으로 **인간 3개 코호트(소아·청소년·성인) fMRI에서 rZI-ACC/mPFC 연결성이 BMI·binge eating과 상관** → [[concept-digital-therapeutics|DTx]]·[[concept-transcranial-electrical-stimulation|비침습 자극(TMS)]]·[[concept-deep-brain-stimulation|DBS]] 표적으로서 종간 보존된 biomarker 후보. 사용자의 강박·폭식·[[concept-loss-of-control-eating|LOC eating]] 신경조절 연구에 직접 참고.

# 강박적 섭식의 피질-시상하부 회로 mPFC→rZI (Leow 2026)

## 한 줄 요약
rostral zona incerta의 GABA성 뉴런(rZI^GABA)과 이를 구동하는 mPFC→rZI 피질 입력이 **처벌에 저항하는 강박적 기호식 섭취**를 인과적으로 gate하며, 폭식 경험은 mPFC-rZI 뉴런을 지속적 attractor 상태로 재편한다. 인간 3개 코호트에서 rZI-mPFC 기능적 연결성이 비만·binge eating과 상관 (Neuron 2026, Yu Fu·Juan Helen Zhou·Hasan Mohammad, A*STAR/NUS/상하이).

## 핵심 내용

### 배경·질문
- Binge-eating disorder(BED)는 가장 흔한 섭식장애이며 비만과 강하게 연관. **강박(compulsion) = "부정적 결과에도 지속되는 행동"** — 중독 연구에서 잘 정의됐으나 섭식에서의 회로 기전은 불분명.
- [[concept-orbitofrontal-cortex|mPFC]]는 강박 행동에 관여하고 다수 시상하부 세포타입에 투사하나, mPFC가 **어떤 시상하부 회로를 통해 처벌-저항성 food seeking**을 구동하는지 미지.
- **zona incerta(ZI)**: orexigenic 시상하부 영역. 감각·정서·동기 신호를 통합, 결정 지속성·action initiation·positive valence에 관여. ZI GABA 뉴런은 비항상성(non-homeostatic) 섭취를 촉진하고 동기를 높임([[concept-zona-incerta]]).

### 패러다임 2종
- **COE (Chemogenetic-induced Over-Eating)**: VGAT-Cre 마우스 rZI에 AAV-DIO-hM3D. 맥락 단서와 rZI^GABA 화학유전 활성을 반복 페어링 → **조건화 섭식**. LH^GABA·TN^SST 뉴런과 유사하게 조건화되나, rZI^GABA 조건화 섭식은 **extinction 후에도 지속**되고 **quinine(쓴맛) 첨가에도 저항** → 강박으로 전환. caudal ZI(cZI) 활성은 무효 → rostral 특이.
- **BiCOM (Binge-induced Compulsive eating)**: 2일마다 1시간 HFD 접근 → 야생형에서 견고한 binge 확립. 이후 금속 격자에 foot-shock을 걸어 **HFD 접근의 처벌 장벽**을 만드는 compulsion test. 대조군은 shock↑에 HFD 소비를 줄이나, **rZI^GABA 활성군은 shock 내성이 커져(threshold ~0.1 → 0.25 mA 초과) 처벌에도 HFD를 계속 추구**.

### rZI^GABA는 강박, TN^SST는 일반 식욕 (해리)
- **핵심 대비**: TN^SST(tuberal nucleus somatostatin) 뉴런 활성은 HFD 섭취량 자체는 늘리나 **foot-shock threshold를 이동시키지 못함**(강박 무유발) — 게다가 chow까지 늘리는 **일반 소비 drive**(비특이). rZI^GABA는 chow drive 없이 **HFD 특이 강박**만 유발.
- 진통(analgesia) 대조: 두 뉴런군의 shock threshold 차이는 통증 역치 차이로 설명되지 않음 → **강박 drive 자체의 차이**. clozapine 단독의 off-target 진통은 있으나 hM3D가 추가 진통을 주지 않음.
- 결론: 시상하부 orexigenic 뉴런들은 **기능적으로 분리** — rZI^GABA는 강박, 다른 경로(TN^SST)는 일반 식욕/각성. 서로 다른 섭식조절 측면에 기여.

### 상류 입력: mPFC→rZI (monosynaptic)
- **VITALISTIC**(rabies tracing + tissue clearing + whole-brain light-sheet)로 rZI^GABA 단일시냅스 입력 매핑: **mPFC가 주요 피질 입력**, 압도적 ipsilateral. 주요: **prelimbic(PL)·medial orbital(ORBm)·dorsal ACC(ACAd)**, 추가로 retrosplenial(RSP).
- ChR2 patch-clamp으로 mPFC→rZI **흥분성 연결** 확인.
- **세포 정체성**: rZI로 투사하는 mPFC 뉴런은 대부분 **Npr3+**(일부 Syt6+), NAc 투사 뉴런과 대비. 삼중 역행 매핑에서 rZI 투사 mPFC의 약 절반은 PAG/VTA에도 투사, 나머지 절반은 rZI 전용 → **PAG·VTA 투사와 부분적으로 독립된 출력 채널**(부적응 섭취 전담 가능성).

### 인과 조작 (필요·충분)
- **억제(hM4D)**: rZI^GABA 또는 mPFC-rZI 뉴런 억제 → **quinine-HFD(강박) 소비 급감**. 단, 야간 금식 후 refeeding·불안 상태는 불변 → mPFC 입력은 섭식을 광범위 억압하거나 정동을 맥락 밖에서 바꾸지 않음(**맥락 특이적**).
- **활성(hM3D)**: mPFC-rZI 활성 → foot-shock 없이도 BiCOM HFD binge↑, shock 격자 건너는 마우스 비율↑.
- **광유전 말단 자극**: mPFC→rZI 말단 활성 → HFD binge↑, shock 건너기↑, quinine-HFD 섭취↑. **naive 마우스에서는 섭식 무유발** → 이 경로는 일반 섭식이 아니라 **binge 경험 상태에서 기호식 소비**를 촉진.
- **positive valence**: mPFC-rZI 말단 광자극이 **place preference(RTPP)** 유발 → ZI GABA의 positive valence와 일치.

### In vivo imaging: 지속적 attractor 상태
- rZI 투사 mPFC 뉴런에 GCaMP6s microendoscopy + DeepLabCut. baseline/binge/quinine 세션 종단 추적.
- **BiCOM 마우스**: mPFC-rZI 뉴런이 HFD contact에 time-locked·반응↑, **quinine 세션에도 HFD 선택성 유지**(강박 drive 지속). CHF(continuous HFD, 비-binge) 대조군은 quinine에서 HFD 반응성 소실.
- **rSLDS**(recurrent switching linear dynamical systems) 잠재 동역학: BiCOM 군은 **큰 시간상수(>150 s)의 지속 attractor 차원(x1)** — food contact를 단순 부호화하는 게 아니라 **persistent food-seeking 상태**로 진입. CHF 군은 attractor 없이 transient 반응만.
- 즉 binge 경험이 mPFC-rZI 앙상블을 **가소적으로 재편**해 처벌에도 HFD 선택성을 유지하는 지속 상태를 형성.

### 인간 fMRI (종간 검증, 3개 코호트)
- **GUSTO(싱가포르 소아 4.5·6세)**: 좌측 rZI-ACC/mPFC 기능적 연결성(FC)이 **BMI**와 유의 상관(4.5·6세 모두). 4.5세에서 좌 rZI-ACC/mPFC FC는 **배고픔 없는 상태의 단 간식(sweet snack) 섭취량**과도 상관 → 초기 발달부터 검출.
- **ABCD(미국 청소년 9–10세, BED vs HC)**: 좌 rZI-subgenual ACC(sgACC) FC에서 group×BMI 상호작용; **고BMI BED > 대조**. rZI-sgACC FC는 BMI와 양의 상관, **MIND diet score와 음의 상관**(건강한 식이일수록 낮음).
- **중국 고도비만 성인**: sgACC의 resting mALFF가 비만에서↑; rZI-sgACC FC가 비만에서↑·**bulimia score와 상관**; food addiction score가 sgACC와 상관.
- 종합: mPFC-rZI 결합이 **소아·청소년·성인 3세대에서 과식·binge·비만 취약성**을 추적하는 종간 보존 biomarker.

### 함의 (discussion)
- 강박적 섭식은 단순 식욕↑이 아니라 **동기 신호의 회로 수준 재가중** — 기호식 추구가 혐오 회피보다 우선되도록 편향. rZI와 그 top-down mPFC 통제가 이 편향의 핵심.
- ZI가 [[concept-dopamine-reward-system|VTA]]로 투사하므로, 하류에서 mesolimbic 도파민을 탈억제해 부적응 섭식을 구동할 가능성(미검증).
- **치료 표적**: mPFC-rZI 회로를 [[concept-transcranial-electrical-stimulation|TMS]]·[[concept-deep-brain-stimulation|DBS]]로 조절하거나, 기호식의 가치 재평가·지속 attractor 상태 차단으로 개입 가능성.

## 관련 페이지
- [[concept-zona-incerta]] — 본 논문의 핵심 노드; rZI^GABA 개념 hub(신설).
- [[concept-need-motivation-pleasure-utility]] — 강박(rZI, 처벌-저항 wanting) vs 일반 식욕(TN^SST)의 NMPU 해석; 사용자 lab 이론.
- [[concept-loss-of-control-eating]] — 처벌-저항 강박 섭취 = LOC eating의 회로 기전; Halpern NAc biomarker와 상보(피질-시상하부 축).
- [[concept-lateral-hypothalamus]] — 인접 orexigenic 시상하부; ZI와 세포타입·투사 대비. LH^GABA→VTA 강박 sucrose seeking과 병렬.
- [[concept-orbitofrontal-cortex]] — mPFC/OFC top-down 통제; ORBm이 rZI 주요 입력.
- [[hjort-2026-prefrontal-to-ventral-tegmental-area]] — mPFC→VTA top-down 동기 통제와 병렬(별개 출력 채널); 본 논문은 mPFC→rZI 축.
- [[stuber-2025-the-neurobiology-of-overeating]] — 과식의 addiction-circuit 모델; 강박 성분의 회로 대응.
- [[concept-food-addiction]] — 처벌-저항 섭취 = 중독 framing과 겹침.
- [[concept-dopamine-reward-system]] — ZI→VTA 하류 탈억제 가설.
- [[concept-digital-therapeutics]] · [[concept-transcranial-electrical-stimulation]] · [[concept-deep-brain-stimulation]] — mPFC-rZI biomarker 기반 신경조절 표적.
- [[shin-2023-early-adversity-promotes-binge-like-eating]] — 반복 노출·역경이 빚는 binge-like eating 회로와 대비(LH^Lepr→vlPAG vs rZI).
- [[giovanniello-2025-a-dual-pathway-architecture-for]] — 스트레스가 goal→habit으로 전환; 지속 attractor·강박 자동성과 연결.
