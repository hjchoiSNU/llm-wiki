---
title: "Lateral hypothalamic control of the striatal dopamine landscape during consummatory behavior (Gordon 2026, Neuron)"
type: paper
created: 2026-10-03
updated: 2026-10-03
source: "raw/2026 Neuron (Stuber) Lateral hypothalamic control of the striatal dopamine landscape during consummatory behavior.pdf"
authors: [Adam G. Gordon, Barbara M. Benowitz, Joumana M. Barbakh, Isabella Montequin, Anthony Campuzano, Hannah P. Stevenson, Pei-Yun Lu, Madelyn M. Hjort, Ethan Ancell, Madalyn Critz, Daniela Witten, Garret D. Stuber]
year: 2026
journal: "Neuron 115:1–20 (issue March 3, 2027; online 2026); doi:10.1016/j.neuron.2026.09.002"
---

> [!takeaway] 연구 방향 관점의 핵심
> **LH가 섭취 중 "먹을지 말지"를 정하는 스위치에서 "선조체 어디에 도파민을 뿌릴지"를 정하는 조절기로 바뀐다.** Stuber lab은 LH^GABA와 LH^Glut를 한 마우스에서 동시에 기록하고, 선조체 6–7개 subregion의 도파민(GRAB-DA)을 함께 측정했다. 세 가지가 나왔다. ① 두 집단의 **비율(LHA^Ratio = GABA/Glut)** 이 섭취물의 가치·valence를 연속 변수로 추적한다. 특히 혐오 용액(NaCl)에서는 GABA가 가치에 비례해, Glut가 가치에 반비례해 움직여 비율의 dynamic range가 넓어진다. ② 이 균형이 **선조체 전후(anterior-posterior) 축을 따라 공간적으로 배열된 도파민 지형**을 인과적으로 정한다. GABA는 전측(NAc)의 DA를 올리고, Glut는 전측 DA를 내리면서 **tail of striatum(TS)** 의 DA는 올린다. 지형은 subregion마다 국소적으로 만들어지고, 한 subregion의 방출이 다른 곳으로 퍼지지 않는다. ③ 선조체 DA는 섭취를 **개시(initiation, bout 수)** 하도록 강화할 뿐 **지속(maintenance, bout 길이)** 은 강화하지 않는다.
> 사용자 연구와 맞닿는 지점은 셋이다. (1) [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]]의 **Motivation 축을 LH가 출력하는 스칼라(GABA/Glut 비율)** 로 볼 수 있다. 같은 물이라도 그 맥락에서 가장 가치 있을 때 DA가 훨씬 크고, 그 차이는 전측 subregion에만 나타난다(**상대가치 = Need 의존 변조**). (2) "DA = 개시 강화, 지속은 비선조체 회로"라는 분해는 [[concept-liking-wanting|wanting(bout 수) vs liking(bout 길이)]] 지표 분리, 그리고 NMPU의 **Motivation ↔ Pleasure 분리**와 그대로 겹친다. (3) [[lee-2023-lateral-hypothalamic-leptin-receptor|LH^LepR]](LH GABA의 아집단)이 이 value-scaling을 실제로 나르는 세포인지가 사용자 lab이 바로 검증할 수 있는 다음 질문이다.

# Lateral hypothalamic control of the striatal dopamine landscape during consummatory behavior (Gordon et al. 2026)

- **저널**: Neuron 115, 1–20 (권호 표기 March 3, 2027; 2026년 온라인 in press. 접수 2025-04-09, 수정 2026-06-23, 채택 2026-09-01). DOI: 10.1016/j.neuron.2026.09.002
- **소속**: University of Washington, Center for the Neurobiology of Addiction, Pain, and Emotion (Anesthesiology & Pain Medicine / Pharmacology). 교신 **Garret D. Stuber** (gstuber@uw.edu). 통계 공동: Daniela Witten(Biostatistics).
- **데이터·코드**: GitHub `stuberlab/Gordon-et-al.-2026`, Zenodo doi:10.5281/zenodo.21809309. 과제 하드웨어는 **OHRBETS** (Gordon-Fennell 2023 eLife; [[sumarli-2026-multidimensional-control-of-ingestive-behavior|Sumarli 2026]]와 같은 multispout 플랫폼).
- 저자들은 분석 코드 정리·원고 편집에 Claude(Anthropic)를 썼다고 밝혔다.

## 한 줄 요약
LH^GABA와 LH^Glut는 섭취물의 가치에 따라 **서로 반대 방향**으로 활동량을 조절한다. 그 균형이 선조체 도파민을 **전후 축 gradient**로 배치한다(전측은 가치·직전 이력, 후측은 감각운동). 이 지형은 subregion별 국소 제어로 조립되고(ventral→dorsal 연쇄 전파가 아님), **licking 개시를 강화**한다.

## 핵심 내용

### 과제 — multi-spout brief-access taste task (Fig 1A–E)
- Head-fixed 마우스, 100 trial, 매 trial 3초 동안 다섯 용액 중 하나에 접근(10 trial마다 용액당 2회, pseudorandom; ITI 11–16 s; lick당 약 1.5 μL). 용액 정체는 핥아 봐야 알 수 있다 → approach·cue 학습 confound를 걷어내고 **consummatory 운동 성분(licking)과 용액 가치(농도)를 분리**.
- 세 restriction/solution 구성(체중 90%로 제한):
  - **WR:Suc**: 물 제한 + sucrose 0–30%. 모든 농도가 높은 갈증 수요를 충족.
  - **FR:Suc**: 먹이 제한 + sucrose. 저농도는 약한 혐오.
  - **WR:NaCl**: 물 제한 + NaCl 0–1.5 M. **물이 가장 가치 있고**, 고농도 NaCl은 강한 혐오.
- 행동: sucrose 농도↑ → lick↑(범위는 FR이 WR보다 넓다). NaCl 농도↑ → lick↓. 분석 trial 수는 WR:Suc 20,000 / FR:Suc 19,900 / WR:NaCl 19,800.

### Fig 1 — LH^GABA·LH^Glut의 tandem 동역학 (n = 12)
- Vglut2-Cre × Vgat-Flp 이중 형질전환 마우스. LH^Glut는 **jRCaMP1b**(Cre-의존), LH^GABA는 **GCaMP6s**(Flp-의존)로 표지해 **dual-color photometry**를 수행했다. Lock-in 복조와 반대 반구 기록으로 bleed-through가 없음을 검증(Fig S1).
- 두 집단 모두 **섭취 onset에 상승**한다. 차이는 sustained 구간(2–3 s)과 post 구간(6–8 s)에서 갈린다.
  - **WR:Suc**: 둘 다 가치·섭취량과 약한 양의 상관.
  - **FR:Suc**: LH^GABA는 **가치에 강하게 비례**, LH^Glut는 상승하지만 scaling은 없음. Post 구간에서는 LH^GABA만 직전 trial 가치를 반영.
  - **WR:NaCl**: LH^GABA는 가치에 **양(+)**, LH^Glut는 가치에 **음(−)** 으로 scaling. 혐오 용액에서 두 집단 모두 진폭은 커지지만 방향은 반대다.
- **LHA^Ratio**(GABA/Glut z-score 비율): FR:Suc에서는 양의 scaling. WR:NaCl에서는 **양방향**(물: GABA>Glut로 상승, 고몰 NaCl: Glut>GABA로 하강) → 가치·valence를 하나의 연속축으로 표현. WR:NaCl에서 두 집단의 상관이 부분적으로 탈동조화된다(Fig S1K).

### Fig 2 — LH 조작이 선조체 DA를 공간 gradient로 바꾼다
- 기록 부위(GRAB-DA2m): **NAcCR**(core rostral)·**NAcCC**(core caudal)·**NAcShL**(lateral shell)·**DMS**·**DLS**·**TS**. 일부 데이터는 NAcShM 포함.
- **흥분**(ChrimsonR, 20 Hz × 3 s; 대조 n=6, GABA n=7, Glut n=7):
  - LH^GABA → 초기에는 NAcCR·NAcCC·NAcShL·DMS·DLS의 DA↑(TS는 무변). Sustained에서는 **NAcCR·NAcCC·NAcShL만 상승 유지**.
  - LH^Glut → 초기에는 NAcCC·**TS** DA↑, NAcCR↓. Sustained에서는 **NAcCR·DMS·DLS↓, TS↑**.
  - TS 평균 z-score: 대조 0.41, GABA 1.76, **Glut 14.65**.
  - 위치 상관: GABA 효과는 AP 축과 **양**, ML·DV 축과 음의 상관. Glut는 그 반대(AP와 음, ML과 양).
- **억제**(eNpHR3.0, 10 s; 대조 6, GABA 6, Glut 5): LH^GABA 억제 → NAcCC sustained DA↓, TS↑. LH^Glut 억제 → NAcCR·NAcCC↑. 공간 상관 패턴도 자극과 거울상이다. **두 집단 모두 선조체 DA를 tonic하게 설정**한다는 뜻이다.
- **상호작용**(Fig S4F–H; Vglut2-Cre:Vgat-Flp, hM4Di vs EYFP 각 n=6): LH^Glut를 화학유전으로 억제하면 LH^GABA가 유발하는 DA가 **약하게 증폭**된다. Group 수준에서만 유의하고 개별 subregion에서는 유의하지 않다. 저자 표현은 "opposing and *partially interacting*"이고, 실시간 협동 기전은 **미입증**으로 남겼다.

### Fig 3 — 선조체 DA는 국소 제어된다 (ventral→dorsal 전파 없음; n = 11 DAT-Cre)
- 중뇌 DA 뉴런에 ChrimsonR을 발현시키고, 4개 subregion(NAcCR·DMS·DLS·TS) 중 한 곳의 **말단만 광자극**하면서 4곳의 DA를 동시에 기록했다.
- 주파수 의존 DA 증가는 **자극한 subregion에서만** 나타났다. 예외는 TS 자극 시 DLS에서 보인 작은 증가 하나. 20 Hz stimulation×recording 행렬을 보면 근접도에 따른 상관은 미미하다. **DLS–TS 사이에만 약한 상호작용**이 있다.
- 결론: LH는 소수 subregion을 건드려 그 방출이 퍼지게 하는 것이 아니라 **각 subregion에 직접·병렬로 작용**한다. Haber식 striato-nigro-striatal **spiral(ventral→dorsal cascade)** 이 초 단위 방출에서는 보이지 않는다(아래 ⚠️ 참조).

### Fig 4 — 섭취 중 LH 일시 억제가 행동과 DA를 함께 움직인다
- WR, 물 vs **1 M NaCl** 2-용액. 광억제는 접근 6 s 전부터 접근 종료 후 6 s까지(총 15 s).
- 행동: **LH^GABA 억제 → 물 섭취↓**, **LH^Glut 억제 → NaCl 섭취↑**.
- DA: LH^GABA 억제는 NAcCR·NAcCC·DMS의 DA↓(용액 의존), LH^Glut 억제는 NAcCR·NAcShL의 DA↑. 공간 상관은 Fig 2와 같다. 접근 전 baseline shift를 보정한 뒤에도 양방향 변조가 유지된다(Fig S5).
- 저자들은 DA가 행동을 바꾸는지, 행동이 DA를 바꾸는지는 **이 실험으로 판별할 수 없다**고 명시한다.

### Fig 5 — 섭취 중 선조체 DA 지형 (223 fibers / 47 mice / 7 subregions)
- **Licking onset 창(0–0.3 s, 평균 first lick 0.33 ± 0.27 s 이전)**: NAcCC·NAcShL·DMS·DLS·TS의 DA가 lick 이전에 이미 상승한다. Lick이 있는 trial에서 더 크다.
- **후측→전측 시공간 gradient**: 부트스트랩 onset 분석에서 DA 반응은 **꼬리·외측(DLS·NAcShL)에서 먼저**, 전측·내측(NAcShM·NAcCC·NAcCR)에서 나중에 나타난다. 이는 dorsal-striatal DA wave(움직임·tone)를 **consummatory 행동과 더 넓은 선조체로 확장**한 결과다.
- **Sustained 창(2–3 s)**: 거의 모든 subregion이 용액 순위(rank)와 함께 scaling한다(WR:NaCl의 물, Suc의 30%가 최대). 예외로 WR:Suc의 NAcCR·NAcShM은 **음의 scaling**을 보였다. WR vs FR sucrose 차이는 **TS를 제외한 모든 subregion**에서 나타났고 FR에서 더 강하다. **WR:NaCl의 scaling이 가장 크고**, 전측·내측·복측일수록 강하다(위치 상관).
- **Post 창(6–8 s)**: Sustained와 비슷하되 후측·배측에서 약해진다. Restriction 의존 차이는 **전측·복측(NAcCR·NAcCC·NAcShM·NAcShL)에만** 남고 DMS·DLS·TS에는 없다.
- **Lick vs 가치 분리**(Fig S7G–I): 같은 농도 안에서 lick이 많을수록 DA↑, 같은 lick 수 안에서 선호 용액일수록 DA↑. 혼합모형에서 lick·solution 주효과가 대부분 subregion에서 유의했다(예외: WR:Suc·FR:Suc의 TS lick 효과).

### Fig 6 — GLM 분해 (WR:NaCl, 551 predictor/fiber)
- Predictor 세트: time-in-trial(180) / 농도(180) / **직전 3 trial 농도 이력**(180) / licking kernel(11). 각 세트를 빼고 refit해 ΔR²를 계산했다. 용액 정체를 shuffle하면 R²가 유의하게 감소한다 → 용액 정보는 licking과 **독립적으로** 기여한다.
- **Time-in-trial(감각·타이밍)**: 배측, 특히 **DLS**에서 최대. **Licking**: 광범위하게 부호화되고 NAcCC·NAcShL에서 최강. **농도·이력**: **전측·복측**에서 최대(이력의 이상치는 NAcCR ΔR² = 0.60).
- → 후측·배측 = 감각운동, 전측·복측 = 가치·최근 이력이라는 **기능적 gradient**.

### Fig 7 — 선조체 DA 상관 구조와 LH 결합
- Baseline에서 subregion 간 DA 상관은 양(+)이고 거리에 따라 감소한다. 섭취 중에는 상관이 전반적으로 오르고 WR:NaCl에서 최대다. 단 **TS는 다른 모든 부위와 상관이 낮고**, 그 격리는 섭취 중 더 심해진다 → TS는 gradient 위의 한 점이 아니라 **평행 채널**이라는 해석. PCA(n=19, 15,902 trial)에서 lick 수를 맞춰도 WR:NaCl 궤적은 sucrose 구성과 분리된다.
- 한쪽 반구 LH dual-color + 반대쪽 4개 subregion DA(WR:NaCl). Baseline에서 LH^GABA는 NAcCC DA와 양의 상관(Glut보다 강함). 섭취 중에는 LH^GABA–NAcCC·DMS·DLS 상관이 강화되고(TS는 아님), LH^Glut는 **음의 상관**(NAcCC에서 가장 뚜렷).

### Fig S9–S10 — 칼로리·맥락·포만·감각양식
- **칼로리**: 10% sucrose vs 20 mM saccharin(lick 수 동일, FR:Sacc). **Saccharin에서** LH^GABA·LHA^Ratio, 그리고 NAcCR·NAcCC·NAcShL의 DA가 오히려 **더 높다**. DMS·DLS의 DA는 saccharin에서 더 낮다. → 칼로리와 용액 정체가 지형을 독립적으로 바꾼다.
- **맥락(상대가치)**: 물은 5개 구성 모두에 있었지만, LH·DA 반응은 물이 최고가치인 **WR:NaCl에서 최대**, FR 구성에서 최소. Lick 수 단독은 NAcCC·DLS에서만 DA를 예측한다.
- **포만**: 고가치 용액의 DA가 세션 동안 감소하고, 감소율은 구성·subregion마다 다르다.
- **Tail shock**(0–0.5 mA): LH^GABA·LH^Glut 둘 다 상승하지만 **Ratio는 불변**. DA는 NAcCC·NAcShL·TS↑, NAcCR·DMS·DLS↓. 쇼크 DA는 혐오 미각 섭취 시 DA와 **상관 없음** → LH·DA의 "혐오" 신호는 일반 aversion 신호가 아니라 **감각양식·맥락 의존적**이다.

### Fig 8 — 선조체 DA는 licking "개시"를 강화한다 (DAT-Cre ChR2 n=10, mCherry n=6)
- Lick에 연동한 closed-loop 자극(1 s, 20 Hz), FR + 10% sucrose. VTA 세포체 또는 NAcCC·DMS·DLS·TS 말단(양측)을 자극했다.
- **Free-access**(2분 블록): VTA 자극 → 총 lick·**bout 수↑**. 단일 말단 자극은 총 lick 무변. **4곳 동시 자극(all STR)만 총 lick↑**이고, 그 효과는 개별 효과의 산술합보다 크다(**초가산**, paired t T(8)=3.29, p=0.011). VTA·NAcCC·DMS·DLS 자극은 모두 **bout 수↑**. DMS·DLS 자극은 오히려 **licks/bout↓**.
- **Brief-access**(10-trial 블록): 총 lick 무변. VTA와 DLS를 뺀 모든 말단 자극이 **블록 내 lick 확률↑**.
- **Trial n DA → trial n+1 licking 예측**(logistic, WR:NaCl): NAcCR OR 1.13 · NAcCC 1.07 · NAcShL 1.07 · DMS 1.27 · **DLS 1.32**(p = 6.3e−47)로 유의. **NAcShM(0.91)·TS(1.00)는 비예측**.
- 결론: DA는 섭취의 **개시를 강화**하고 지속은 강화하지 않는다. 진행 중인 섭취를 바꾸려면 **분산된 거의 동시 방출**이 필요하며, 지속은 비선조체 회로가 담당할 가능성이 높다.

### Discussion·한계
- **세 갈래 통합**: 복측 가치 scaling(Schultz/Roitman 계열), TS 위협·신기성(Menegas·Watabe-Uchida), 배측 DA wave(움직임)를 **하나의 전후축 gradient**로 묶는다. DA 지형은 **절대가치가 아니라 상대가치**를 부호화한다(midbrain DA의 adaptive value coding과 평행).
- **LH의 재정의**: GABA/Glut의 "반대 스위치"가 아니라 **graded 제어 변수(비율)**. LH→VTA→NAc 단일 경로(Nieh 2016 등)를 **선조체 전역 지도로 확장**했다. 두 집단은 국소 연결이 희박하므로(sparsely interconnected) 비율은 서로 다른 입력(항상성·미각·가치)을 통합한 결과로 추정된다. LH^Glut→LHb 등 VTA 외 투사가 NAcShL의 양방향 효과처럼 단순 VTA-relay로 설명되지 않는 부분을 설명할 수 있다.
- **TS 예외**: LH 입력이 TS-투사 DA 뉴런에 **직접** 작용(Menegas 2015)해 VTA의 이시냅스 GABA relay를 우회할 수 있다는 해석.
- **Value vs action-reinforcement 논쟁**: 이 결과는 "선조체 DA = 섭취 개시의 강화 신호" 쪽이다. Lick에 연동한 자극은 섭취물과 무관하게 행동을 강화할 수 있으므로(ICSS 유사), palatability가 다른 용액 간 비교가 필요하다고 저자들도 인정한다.
- **한계**: GRAB-DA는 세포외 방출이며 spiking·절대농도가 아니다(presynaptic·cholinergic 제어, subregion별 kinetics 차이). 분자적으로 다른 DA 아집단 때문인지, 공통 집단의 국소 제어 때문인지는 미해결이다. 두 LH 집단의 실시간 상호작용 증거는 불완전하다. Head-fixed 무작위 접근이라 decision-making·학습·post-ingestive가 배제되어 있다. 고형식 섭취는 다른 LH 회로를 쓸 수 있다.
- **번역 함의**: GLP-1 기반 치료(Zhu 2025 Science 인용)는 효과가 **선조체 내 DA 위치와 상류 LH 균형**에 의존하는 계에 작용한다 → 개입 위치를 정교화할 근거.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **LHA^Ratio = NMPU Motivation 축의 회로 readout 후보**: [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]]에서 LH는 Motivation 통합 hub다. 본 논문의 GABA/Glut 비율은 가치·valence를 하나의 연속축으로 표현하고 선조체 DA를 인과적으로 배치한다 → **Motivation의 스칼라 값이 LH 두 집단의 균형으로 구현된다**는 작업 가설. [[kim-2024-normative-framework-dissociates-need|Kim 2024]]의 LH^LepR=Motivation과 연결하면, **LH^LepR(GABA 아집단)이 FR:Suc에서 LH^GABA의 강한 value-scaling을 실제로 나르는가?** 가 검증할 질문이다(LepR-Cre × Vglut2-Flp dual-color로 재현 가능).
- **상대가치 = Need의 Motivation 변조**: 같은 물에 대한 DA가 WR:NaCl(물이 최고가치)에서 최대, FR에서 최소이고, WR vs FR sucrose 차이는 **전측·복측에만** 남는다(TS·DMS·DLS 무변). NMPU 식으로 보면 **Need는 전측 DA(가치 채널)만 변조하고 후측 감각운동 채널은 건드리지 않는다**. [[concept-npy-agrp-neurons|AgRP]] 조작과 다지점 DA를 결합하면 직접 검증할 수 있다.
- **개시(Motivation) vs 지속(Pleasure)의 회로 분리**: DA 자극은 **bout 수**만 늘리고 bout 길이는 늘리지 않는다(DMS·DLS는 licks/bout↓). [[guillaumin-2023-disentangling-the-role-of-nac|Guillaumin 2023]]의 lick microstructure 정의(bout 수 = wanting, bout 길이·ILI = liking)를 대입하면 "선조체 DA = wanting 강화, liking은 비도파민"이라는 Berridge 계열 결론의 **선조체 전역 버전**이 된다. 지속을 담당하는 "비선조체 회로" 후보로는 [[wang-2026-ventral-pallidal-gabaergic-neurons|VP^GABA]](폐루프로 bout 연장), LH^MCH(consumption sustain), [[concept-consumption-vigor|consumption vigor]] 계열 노드가 있다.
- **Saccharin > sucrose DA(전측)**: 칼로리 없는 감미료가 전측 DA와 LH^GABA를 오히려 더 올린다. 이는 [[concept-primary-reward-signals|orosensory vs post-ingestive]] 분리와 [[yang-2026-a-sync-state-in-the|Yang 2026]]의 post-ingestive 동기화 이전 단계와 맞물린다. 3 s 창에서 보이는 것은 **순수 orosensory 가치**이고, 칼로리 신호는 이후 배측(DMS·DLS) DA로 갈 수 있다는 가설([[thanarajah-2019-food-intake-recruits-orosensory|Thanarajah 2019]] 인간 PET: 지연 post-ingestive DA는 caudate).

## ⚠️ 위키 내 충돌·긴장 (병기 — 덮어쓰지 않음)
- **Striato-nigro-striatal spiral (Haber 2000) — [[concept-nucleus-accumbens]] · [[concept-compulsion]] · [[concept-drug-evoked-synaptic-plasticity]] · [[luscher-2021-consolidating-the-circuit-model-for]]**: 위키의 중독 페이지들은 배쪽→등쪽 DA 전파(spiraling connectivity, NAc→SNc→DST)를 **강박 dorsalization의 기전**으로 확정 기술한다. 본 논문 Fig 3은 한 subregion의 evoked DA 방출이 다른 곳으로 거의 전파되지 않음을 보여 **초 단위(섭취 중) 방출은 국소 제어**라고 결론짓는다. 저자들은 이것이 spiral을 반박하지 않고 **시간척도를 제한**한다고 명시한다(spiral은 해부·분 단위 신경화학·학습 시간척도에서 작동). 두 주장은 **시간척도가 다른 상보적 그림**으로 병기한다.
- **단일 value broadcast — [[hamid-2016-mesolimbic-dopamine-signals-value-work]] · [[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation]]**: Hamid/Mohebi 계열은 NAc DA를 단일 value/motivation 신호(V)로 본다. 본 논문은 선조체 DA가 **공간적으로 분해된 지형**(전측 가치, 후측 감각운동, TS 평행 채널)이며 subregion마다 국소 제어됨을 보여 "uniform broadcast" 전제와 긴장한다. 단 Mohebi의 optotagging은 medial shell을 회피하는 외측 VTA DA라 측정 대상이 다르다 — 직접 반박이 아니라 **공간 해상도 차이**로 병기.
- **DA = 섭식 구동/지속 — [[stuber-2025-the-neurobiology-of-overeating]] (O'Connor & Lüscher 2015)**: 같은 Stuber가 공저한 리뷰는 NAc D1R-MSN→LHA GABA "feeding authorization"이 섭식을 on/off 한다고 정리하고, DA가 섭식을 "sustain"한다는 통념을 전한다. 본 논문은 선조체 DA가 **개시(bout 수)만 강화하고 지속은 강화하지 않는다**(단일 말단 자극은 진행 중 섭취 무변)고 정교화한다 → "DA가 섭식을 지속시킨다"는 통념의 **부분 수정**으로 병기.
- **wanting(bout 수) vs liking(bout 길이) — [[guillaumin-2023-disentangling-the-role-of-nac]] · [[wang-2026-ventral-pallidal-gabaergic-neurons]]**: Guillaumin은 NAc D2 억제↑ = bout 길이↑ = liking↑, Wang 2026은 VP^GABA가 bout 길이를 늘려 consummatory drive↑로 본다. 본 논문의 DA 자극은 **bout 길이를 늘리지 못하고 오히려 DMS·DLS 자극이 licks/bout↓** → bout 길이(liking/consummatory 지속)는 **선조체 DA 바깥**(VP·LH^MCH 등)이 담당한다는 예측과 정합. 부호 충돌이 아니라 **역할 분담**으로 병기.
- **LH 도파민·TS feature code — [[hoang-2026-methamphetamine-potentiates-the-use-of]] · [[gershman-2024-explaining-dopamine-prediction-errors-beyond]]**: Gershman/Hoang은 TS DA = threat/action PE(labeled line)로 둔다. 본 논문도 TS를 **평행 채널**(다른 subregion과 상관 낮음, LH 조작에 반대로 반응, 직접 innervation)로 보아 수렴한다 — 단 본 논문은 TS를 "위협 PE"로 부르지 않고 **감각운동·modality-dependent**로 남긴다(tail shock DA가 혐오 미각 DA와 무상관). 해석 프레임 차이로 병기.

## 관련 페이지
- [[concept-lateral-hypothalamus]] — LH^GABA/LH^Glut가 선조체 DA 지형을 설정하는 상류 hub. 본 논문이 "feeding switch → DA landscape controller"로 위상 확장.
- [[concept-dopamine-reward-system]] — 선조체 DA를 단일 broadcast가 아닌 전후축 gradient·국소 제어로 재정의.
- [[concept-nucleus-accumbens]] — 전측(NAcCR·CC·ShL) = 가치·이력 채널. spiral 충돌 병기.
- [[concept-appetitive-consummatory-phases]] — consummatory 운동(licking)과 용액 가치를 분리하는 과제 설계; DA onset의 후측→전측 gradient.
- [[concept-consumption-vigor]] — lick 수·bout 구조를 vigor로 정량화. DA=bout 수(개시) 강화, bout 길이(지속)는 비도파민.
- [[concept-liking-wanting]] — DA=wanting(bout 수) 강화, liking(bout 길이)은 분리된다는 Fig 8 결과.
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] · [[concept-need-motivation-pleasure-utility]] — LHA^Ratio = Motivation 축의 회로 readout 가설.
- [[kim-2024-normative-framework-dissociates-need]] — LH^LepR=Motivation. 본 논문의 LH^GABA value-scaling을 LepR 아집단이 나르는지 검증 질문.
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] — LH^LepR(GABA 아집단) seeking/consummatory 분리 (사용자 lab); 본 논문 GABA 집단의 세포 정체 후보.
- [[hjort-2026-prefrontal-to-ventral-tegmental-area]] — 같은 lab·공저자(M.M. Hjort) 인접 작업; mPFC→VTA DA meta-RPE. 본 논문과 Stuber lab DA 라인.
- [[stuber-2025-the-neurobiology-of-overeating]] — NAc→LHA feeding gate. DA=지속 통념의 부분 수정 병기.
- [[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation]] · [[hamid-2016-mesolimbic-dopamine-signals-value-work]] — 단일 value broadcast 진영. 공간 해상도 긴장 병기.
- [[mingote-2019-dopamine-glutamate-neuron-projections-to]] — NAc medial shell DA 국소 제어(ChI). 본 논문 국소 독립성과 기전적 접점.
- [[guillaumin-2023-disentangling-the-role-of-nac]] · [[wang-2026-ventral-pallidal-gabaergic-neurons]] — bout 구조 wanting/liking·지속 담당 회로 분담.
- [[sumarli-2026-multidimensional-control-of-ingestive-behavior]] — 같은 OHRBETS multispout 플랫폼; LH-Nts licking 운동량. 본 논문 과제의 자매.
- [[liu-2026-granular-motivational-interaction-and]] — feeding을 phase별 전용 회로로 분해; LH^GABA=initiation. 본 논문 "DA=개시 강화"와 수렴.
- [[siemian-2021-lateral-hypothalamic-lepr-neurons]] — 본 논문이 던진 "LH^GABA value-scaling을 LH^LepR가 나르는가"에 대한 선행 제약: LH^LepR는 ablation·opto·chemo 어느 조작에도 **섭취를 바꾸지 않고**(ChR2 섭식 p=0.21) cue 변별 학습·RTPP·sucrose CPP만 바꾼다 → 본 논문의 **섭취 중 sustained(2–3 s) value-scaling은 LepR가 아닌 다른 GABA 아집단**일 가능성(연결 가설). 반면 **LH^LepR→VTA 억제가 학습을 강화**하므로, LH→VTA 축의 '기대 보상 relay' 성분은 LepR가 나를 수 있다 (Cell Rep 2021, Aponte lab).
- [[grove-2022-dopamine-subsystems-track-internal]] — LH^GABA→VTA DA(내부 상태 추적). 본 논문 LH→선조체 DA의 정방향 짝.
- [[hoang-2026-methamphetamine-potentiates-the-use-of]] · [[gershman-2024-explaining-dopamine-prediction-errors-beyond]] — TS DA의 평행 채널·labeled-line. feature code 프레임 병기.
- [[thanarajah-2019-food-intake-recruits-orosensory]] · [[yang-2026-a-sync-state-in-the]] · [[concept-primary-reward-signals]] — orosensory vs post-ingestive DA; saccharin>sucrose 전측 DA 해석.
- [[concept-striatal-cholinergic-interneuron]] — 선조체 DA 국소(terminal) 제어의 분자 후보.
- [[jennings-2015-visualizing-hypothalamic-network-dynamics]] — 같은 Stuber lab 선행. LH^Vgat의 appetitive/consummatory 분업·bulk 활성의 consumption 편향(소비↑·break point 불변)을 세운 foundational paper. 본 논문의 "DA=섭취 개시(bout 수) 강화, 지속 비강화"는 Jennings Fig 2의 동기/소비 해리를 선조체 DA 지형으로 확장한 셈 (Cell 2015).
- [[person-choi-hyung-jin]] — 사용자 lab hub.
- [[liu-2023-an-iterative-neural-processing]] — 자유행동 섭식에서 LH^GABA = 조각 **개시**, DR^GABA = 접촉 **유지**(접촉 지속과 R=0.908, 폐쇄회로 조작으로 양방향) — 본 논문의 "DA는 개시(bout 수)만 강화, 지속은 비도파민"과 수렴하는 분업 (Neuron 2023, Wang lab). ⚠️ LH^GABA 반응 정점은 땅콩버터·일반 먹이에서 비슷했고 쾌락 scaling은 DR^GABA에서 나타났다 — 본 논문의 LH^GABA sustained value-scaling과는 측정 창(onset 정점 vs 2–3 s)·과제(자유행동 vs head-fixed)·Cre 라인(GAD2 vs Vgat)이 다르다.
- [[sharpe-2017-lateral-hypothalamic-gabaergic-neurons]] — LH^GABA→VTA의 **학습 조절** 축(Curr Biol 2017, Sharpe/Schoenbaum). 본 논문은 LH^GABA/Glut 균형이 선조체 DA **지형**을 설정하고 그 DA가 섭취 **개시**를 강화한다고 보는데, Sharpe는 같은 LH^GABA→VTA 투사가 행동을 구동하지 않고 **진행 중 학습의 크기만** 조절한다고 본다(말단 억제 → cue 학습 촉진) — 같은 투사의 **서로 다른 기능 층위**로 병기.
- [[rossi-2019-obesity-remodels-activity-and]] — 같은 Stuber lab 선행(Science 2019): LH^Glut(Vglut2) 단일세포 2-photon에서 같은 sucrose에 대한 반응이 **prefed > 24 h fast**(내부 상태 의존)이고 만성 HFD 12주에 **둔화**(내재 흥분성↓). ⚠️ 본 논문 FR:Suc에서 LH^Glut는 **농도 scaling이 없었다** — "LH^Glut는 자극 농도보다 내부 상태를 따른다"로 묶이면 정합하나 조작 축(농도 vs 상태)·해상도(bulk vs 단일세포)가 달라 병기. 연결 가설: 비만에서 Glut만 둔화되면 **LHA^Ratio가 상향**되어 전측 DA 가치 채널이 과대 설정될 것.
- [[rossi-2021-transcriptional-and-functional-divergence]] — ⚠️ 같은 lab 선행(Neuron 2021): 본 논문이 **단일 채널**로 측정한 LH^Glut는 사실 **투사 표적별로 호르몬 반응 부호가 반대인 두 집단의 합**이다. LHA^Vglut2→**LHb**(전측·Pax6⁺·고흥분성)는 leptin에 반응↓, →**VTA**(후측·Pdyn/Hcrt=orexin·저흥분성)는 leptin에 반응↑(interaction F(1,370)=63.99, p=1.6e-14). 따라서 대사 상태·호르몬을 바꾸는 조건에서는 bulk LH^Glut 신호와 **LHA^Ratio의 해석이 투사 조성에 의존**하며 상쇄가 일어날 수 있다. 본 논문의 LH^Glut 광유전 조작(전측 DA↓·TS DA↑)이 어느 투사 집단의 효과인지도 미분해 상태다(병기).
- [[jennings-2013-the-inhibitory-circuit-architecture]] — 같은 lab 13년 전 Science 341:1517. 본 논문의 **LHA^Ratio(GABA/Glut)** 라는 두 축을 처음 세운 논문: BNST GABA 입력이 **LH^Vglut2를 선택적으로 억제**해 섭식을 켜고(rabies F1,20=38.50, P<0.001), Vglut2^LH 직접 활성은 섭취·food zone 체류↓(F1,36=13.31 / 13.12, P<0.001)·혐오다. 연결 가설: Vgat^BNST→LH 말단을 광억제하면 분모(Glut)가 탈억제되어 **LHA^Ratio가 내려가야** 한다 — 본 논문의 dual-color photometry 설계로 바로 검증 가능.
- [[leinninger-2009-leptin-acts-via-leptin]] — **LH→VTA→선조체 DA 축의 가장 이른 인과 고리**(Cell Metab 2009, Myers lab)이며 본 논문과 **시간척도가 다른 층위**다. *Lep^ob/ob*의 LHA에 **250 pg** leptin을 24 h 주면 동측 **VTA *Th* mRNA ~2.5배·NAc DA 함량 ~40%↑**이고 섭식·체중 증가는 억제된다(**intra-VTA leptin은 *Th* 무변**). 담당 세포는 LHA의 **LepRb⁺ GABAergic**(MCH·OX 비중첩, VTA 투사·선조체 투사 없음). 연결 가설: **느린 용량 설정(leptin→LH^LepR→VTA *Th*/DA 함량) × 빠른 분배(LHA^Ratio→subregion DA)** 의 2단 제어 — 예측은 *Lep^ob/ob*나 LH *Lepr* knockdown에서 본 논문식 DA 지형의 **진폭만 축소되고 전후축 배열은 유지**되는 것이다. ⚠️ 부호도 병기 필요: 본 논문은 선조체 DA를 섭취 **개시 강화** 신호로 보는데, Leinninger는 DA **함량** 증가와 섭식 **감소**를 함께 보고한다(함량 vs 방출 구분).
- [[oconnor-2015-accumbal-d1r-neurons-projecting]] — ★ 본 페이지 ⚠️절이 "[[stuber-2025-the-neurobiology-of-overeating]] (O'Connor & Lüscher 2015)"로 지목한 **1차 원전**(Neuron 2015). 방향이 본 논문과 **반대**다: 그쪽은 **NAc → LH**(NAcSh D1R-MSN → LH^Vgat 억제 = 섭취 중단, D1R 광억제 = 포만 상태에서 섭취 개시), 본 논문은 **LH → 선조체 DA**. 둘을 합치면 Stuber 2016이 그린 **LH^GABA → VTA → NAc → LH^GABA 음성 되먹임 고리**의 두 변이 각각 1차 데이터로 채워진다. 프레임 긴장은 병기: 원전은 섭식을 **on/off 허가 게이트**로, 본 논문은 LHA^Ratio가 DA 지형을 설정하는 **연속 조절기**로 본다(층위가 다른 상보 기술). 연결 가설 — 원전의 closed-loop 자극이 섭취를 끊을 때 **전측 선조체 DA도 함께 떨어져야** 하며, 본 논문의 dual-color + GRAB-DA 설계로 바로 검증 가능하다.
- [[nieh-2016-inhibitory-input-from-the]] — LH^GABA→VTA disinhibition→NAc DA↑의 Tye lab 원전(Neuron 2016). 본 논문이 단일 NAc FSCV를 선조체 전후축 DA 지형으로 확장한 계보의 출발점.
- [[domingos-2013-hypothalamic-melanin-concentrating-hormone]] — **LH→선조체 DA를 섭취와 짝지어 조작한 가장 이른 사례**(eLife 2013, Friedman lab). 다만 세포는 GABA/Glut 이분법 밖의 **MCH**(Gad1+Slc17a6 공발현)다. sucralose lick 연동 MCH 20 Hz 자극 → 선조체 DA +69%(microdialysis), MCH 제거 → sucrose DA +118% 소실. ⚠️ 칼로리 축에서 긴장한다. 본 논문 Fig S9는 **saccharin이 sucrose보다 전측 DA를 더 올린다**(DMS·DLS는 반대)고 보고한다. Domingos는 sucralose 단독 DA 변화가 무의미하고(+8%) sucrose만 DA를 올린다고 보고한다. 측정 시간척도(GRAB-DA 초 단위 vs 6분 microdialysis)와 부위(7 subregion vs 미명시 "striatum")가 달라, **빠른 orosensory 성분 vs 느린 post-ingestive 성분**으로 병기한다. 연결 가설: 본 논문 FR:Suc vs FR:Sacc 비교에 MCH 제거를 더하면 **DMS·DLS의 sucrose 우세 성분만 사라질 것**이다.
