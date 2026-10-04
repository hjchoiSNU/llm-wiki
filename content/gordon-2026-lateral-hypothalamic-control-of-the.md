---
title: "Lateral hypothalamic control of the striatal dopamine landscape during consummatory behavior (Gordon et al. 2026, Neuron)"
type: paper
created: 2026-10-03
updated: 2026-10-04
source: "raw/2026 Neuron (Stuber) Lateral hypothalamic control of the striatal dopamine landscape during consummatory behavior.pdf"
authors: [Adam G. Gordon, Barbara M. Benowitz, Joumana M. Barbakh, Isabella Montequin, Anthony Campuzano, Hannah P. Stevenson, Pei-Yun Lu, Madelyn M. Hjort, Ethan Ancell, Madalyn Critz, Daniela Witten, Garret D. Stuber]
year: 2026
journal: "Neuron 115:1–20 (in press 2026; 호 날짜 2027-03-03; 접수 2025-04-09 · 수정 2026-06-23 · 채택 2026-09-01), doi:10.1016/j.neuron.2026.09.002 — Stuber lab, University of Washington"
---

> [!takeaway] 연구 방향 관점의 핵심
> **"[[concept-lateral-hypothalamus|시상하부]]가 먹을지 말지를 정하는 중추"에서 "먹는 동안 선조체 어디에 도파민을 뿌릴지를 정하는 통제기"로** LHA의 위상을 바꾼 논문. 핵심 세 가지. (1) **LHA^GABA와 LHA^Glut는 같이 켜지지만 용액 가치에 대해 부호가 반대로 scaling**하고, 그 **비(LHA^Ratio)** 가 가치·valence를 연속 변수로 싣는다 — 사용자 lab의 "LH=Motivation hub"를 **스위치가 아닌 gain 변수**로 재정의. (2) 이 비가 선조체 **전후축(anterior–posterior) 도파민 지형**을 인과적으로 세운다: GABA는 전방(NAc)에서 DA↑, Glut은 후방([[concept-striatal-dopamine-gradient|TS]])에서 DA↑. 그리고 **한 아구역의 DA 방출이 다른 아구역을 끌어올리지 않는다**(striato-nigro-striatal "spiral"의 초 단위 반증) → 도파민은 **지역별로 국소 조립**된다. (3) ★ **도파민은 핥기의 "유지(bout 길이)"가 아니라 "개시(bout 수·다음 trial의 lick 확률)"를 강화**한다.
> 사용자 연구에 직접 닿는 지점: **[[concept-consumption-vigor|소비 vigor]]를 "개시 vigor(도파민)"와 "유지 vigor(비도파민: [[wang-2026-ventral-pallidal-gabaergic-neurons|VP^GABA]]·[[marcus-2026-endocannabinoids-facilitate-reward-engagement-through|eCB]])"로 쪼개야 한다**는 강한 근거; [[proposal-lh-nac-nmpu-neuron-discovery|LH–NAc NMPU 제안]]에 "NAc 한 점이 아니라 **전후축 다점 샘플링**이 필요하다"는 설계 요구; [[concept-need-motivation-pleasure-utility|NMPU]]에서 가치(Pleasure/Utility)는 **전방·복측**, 운동·감각(행동 출력)은 **후방·배측**이라는 공간 분업. 번역 함의는 저자들이 직접 쓴다 — GLP-1 계열을 포함해 **도파민을 겨냥한 비만 개입의 효과는 "선조체 어디"와 "상류 시상하부 균형"에 달려 있다**. 지표 수준에서는 **bout 수 = wanting / bout 길이 = liking**([[concept-liking-wanting]]) 분리와 그대로 겹치고, 바로 검증할 수 있는 다음 질문은 **이 value-scaling을 실제로 나르는 LHA^GABA 아집단이 [[lee-2023-lateral-hypothalamic-leptin-receptor|LH^LepR]]인가**이다.

# Lateral hypothalamic control of the striatal dopamine landscape during consummatory behavior (Gordon et al. 2026)

## 한 줄 요약
머리고정 다중-spout 미각 과제에서 **LHA GABA/글루타메이트 뉴런의 활동 비가 선조체 전역의 도파민 방출을 전후축으로 공간 조직**하며(전방=용액 가치·최근 이력, 후방=감각운동), 이 지형은 아구역마다 **국소적으로** 만들어지고, 그 도파민은 **소비의 개시를 강화**한다 (Neuron 2026, Stuber lab).

## 핵심 내용

### Background — 두 개의 공백
- 소비(consummatory) 행동 자체는 거의 모든 보상학습 패러다임에 들어 있는데도, **소비 중 도파민이 선조체 "어디"에 나오는지**는 매핑된 적이 없다. 도파민은 대개 **균일한 단일 보상 broadcast**로 취급돼 왔다.
- LHA는 대사상태·음식 cue의 통합 노드이자 중뇌 도파민 영역으로 투사한다. LHA^GABA 자극은 섭식·양성 valence를, LHA^Glut 자극은 억제·음성 valence를 만든다 — **그런데 소비 중에는 두 집단이 모두 활성이 올라간다**. 저자들의 출발 가설: 하류 도파민계가 읽는 변수는 어느 한 집단이 아니라 **두 집단의 균형(ratio)** 일 수 있다.
- 두 번째 쟁점: 선조체 도파민은 한 곳에서 방출돼 ventral→dorsal **상행 나선(striato-nigro-striatal spiral; Haber 2000)** 으로 전파되는가, 아니면 각 아구역이 독립적으로 통제되는가. 이 구분은 "goal-directed→습관 전환을 도파민 전파로 설명하는" 모델의 성립 여부와 직결된다 ([[luscher-2021-consolidating-the-circuit-model-for|dorsalization]] 참조).

### Method — 과제·측정 요약
- **소속·교신**: University of Washington, Center for the Neurobiology of Addiction, Pain, and Emotion(Anesthesiology & Pain Medicine / Pharmacology). 교신 Garret D. Stuber(gstuber@uw.edu), 통계 공저 Daniela Witten(Biostatistics·Statistics).
- **과제**: OHRBETS 머리고정 **brief-access taste task**(Gordon-Fennell 2023 eLife, 동일 lab의 오픈소스 플랫폼). 체중을 기저의 **90%** 로 제한한 뒤 세션당 **100 trial × 3초 접근**, 5개 용액을 유사무작위(10 trial마다 각 용액 2회), ITI 11–16초, lick 1회당 **≈1.5 µL**. **용액 정체는 마우스가 모르고 핥아서 맛봐야 알 수 있다** → approach·cue 학습 confound를 걷어내고 **consummatory 운동 성분(licking)과 용액 가치(농도)를 분리**하는 설계다.
- **3가지 제한/용액 조합**: `WR:Suc`(물 제한 + sucrose 0/5/10/20/30%; 모든 농도가 높은 갈증 수요를 충족), `FR:Suc`(먹이 제한 + 동일 sucrose; 고농도에 수요가 높고 저농도는 약한 혐오), `WR:NaCl`(물 제한 + NaCl 0.00/0.25/0.50/1.00/1.50 M). 각 조합이 서로 다른 **상대 가치 지형**을 만든다(WR:NaCl에서는 물이 최고가치, 고농도 NaCl이 혐오). lick rate 분석에 들어간 trial 수는 WR:Suc 20,000 / FR:Suc 19,900 / WR:NaCl 19,800(Fig 1C).
- **LHA 이중색 photometry**: `Vglut2-Cre; Vgat-Flp` 이중 형질전환에 Cre 의존 **jRCaMP1b(LHA^Glut, 적색)** + Flp 의존 **GCaMP6s(LHA^GABA, 녹색)** 동시 발현, LHA 단일 광섬유(n=12 mice). 두 신호의 비를 **LHA^Ratio** 로 정의(offset 후 나눈 뒤 z-score). 채널 분리는 lock-in 복조(Fig 1H)와 반대 반구 발현 기록(Fig S1)으로 검증했다. ⚠️ n 표기가 원문 안에서 갈린다 — Fig 1 범례는 n=12 mice, Fig 1I 패널 표기와 Fig S3A(Fig 1F–K 행)는 n=17 mice·17 fibers(병기).
- **선조체 다중 광섬유 GRAB-DA2m**: 마우스당 선조체 2–6부위(주 구성은 LHA 양측을 포함해 6–8 fiber)를 합쳐 **7개 아구역** — NAcCR(core rostral, AP +2.93), NAcCC(core caudal, AP +1.6), NAcShM(medial shell), NAcShL(ventral lateral shell), DMS(AP +0.95), DLS(AP −0.1), **TS**(tail, AP −1.45~−1.6). NAcShM은 같은 과제로 얻은 선행 연구(Gordon-Fennell 2023) 데이터 일부를 합친 것이다. 소비 과제 분석에 **총 223 fiber / 47 mice**. (LHA 이중색과 반대쪽 선조체 4부위를 동시 기록한 구성만 GRAB-DA3m.)
- **광유전**: LHA 자극=ChrimsonR(620 nm, 3 mW, 5 ms, 3 s train, 2–20 Hz; 20 Hz로 분석), LHA 억제=eNpHR3.0(620 nm, 10 mW, 10 s 연속), 도파민 자극=DAT-Cre + ChR2(470 nm, 20 Hz, closed-loop). ⚠️ 억제 광출력은 Methods 본문이 10 mW, Fig 2F·Fig 4A 도식이 3 mW로 원문 표기가 갈린다(병기).
- 암수 거의 동수 배정, 실험자 비맹검, 모든 마우스 과제 습득(행동 기준 탈락 없음), 광섬유 위치 조직학으로 사후 검증.

### Result 1 — LHA^GABA와 LHA^Glut는 가치에 대해 **반대 부호로** scaling한다
- 행동: sucrose 농도↑ → licking↑(FR에서 범위가 더 넓음), NaCl 농도↑ → licking↓. 과제가 **valence × 항상성 상태**의 범위를 실제로 포괄함을 확인.
- **두 집단 모두 소비 개시에서 활성이 오른다.** 갈리는 것은 유지(sustained, 2–3 s)·후속(post, 6–8 s) 구간의 **scaling**:
  | 조건 | LHA^GABA | LHA^Glut | LHA^Ratio |
  |---|---|---|---|
  | **WR:Suc** | 상승하나 scaling 약함(가치·섭취와 양의 상관) | 상승하나 scaling 약함 | 약함 |
  | **FR:Suc** | **가치·섭취와 강한 양의 scaling**; post 구간에서도 직전 trial 가치를 추적 | 상승하되 scaling 없음 | 양의 scaling |
  | **WR:NaCl** | **양의 scaling** | **음의 scaling** | **양방향**(물=GABA>Glut, 고농도 NaCl=Glut>GABA) |
- 즉 **혐오 용액을 소비할 때 두 신호가 모두 커지되 가치에 대한 부호가 갈리며**, 그 결과 LHA^Ratio의 **동적 범위가 확장**되고 양방향 신호가 된다. 반대 hemisphere 기록으로 공동활성이 광학적 bleed-through가 아님을 확인했고, WR:NaCl 소비 중 두 집단이 **부분적으로 비동기화**된다(Fig S1I–K).

### Result 2 — LHA가 선조체 도파민 지형을 **인과적으로** 세운다 (전후축 반대 부호)
- **자극**(control n=6, GABA n=7, Glut n=7 mice):
  - **LHA^GABA 자극** → 초기(0–1 s)에 NAcCR·NAcCC·NAcShL·DMS·DLS에서 DA↑, **TS는 아님**; 유지(2–3 s)에는 NAcCR·NAcCC·NAcShL에서 DA↑ 지속.
  - **LHA^Glut 자극** → 초기에 NAcCC·**TS**에서 DA↑, NAcCR은 DA↓; 유지 구간에 NAcCR·DMS·DLS **DA↓** + **TS DA↑**.
  - 공간 상관: GABA 자극 효과는 **AP축과 양의 상관**(전방일수록 큼), ML·DV와 음의 상관. Glut 자극은 **정반대**(AP 음·ML 양). 대조군도 TS의 미세한 증강 때문에 AP 상관이 유의했으나 크기가 비교가 안 된다 — **TS 평균 z: 대조 0.41 / GABA 1.76 / Glut 14.65**.
- **억제**(control n=6, GABA n=6, Glut n=5): LHA^GABA 억제 → NAcCC DA↓ + **TS DA↑**; LHA^Glut 억제 → NAcCR·NAcCC DA↑. 공간 상관은 자극의 **거울상**(GABA 억제=AP 음·ML 양). 대조군 조명은 위치 상관 없음. → 두 집단 모두 기저에서 선조체 DA를 **tonic하게 설정**한다는 뜻이다.
- **두 집단의 상호작용은 부분적**(Fig S4F–H; `Vglut2-Cre; Vgat-Flp`, hM4Di n=6 vs EYFP n=6): LHA^GABA를 ChrimsonR로 자극하면서 LHA^Glut를 hM4Di(CNO 5 mg/kg)로 침묵시키면 GABA 유발 DA가 **집단 수준에서만 소폭 증강**(개별 아구역에서는 유의하지 않음). 저자 표현은 "opposing and *partially interacting*"이다. 저자들은 만성 화학유전 억제가 tonic DA를 이미 바꿔 phasic 촉진 검출력을 떨어뜨렸을 수 있다고 명시하며, **실시간 협동 기전은 "완전히 입증되지 않았다"** 고 스스로 한계로 쓴다.
- **결론(저자 주장)**: LHA^GABA는 **전방(복측) DA를 올리고**, LHA^Glut는 **전반적으로 DA를 내리되 TS에서는 올린다** — 두 gradient의 교차가 LHA^Ratio를 선조체 전역 DA의 조정 변수로 만든다.

### Result 3 — 도파민은 아구역 사이로 **전파되지 않는다** (spiral 모델의 시간적 한계)
- DAT-Cre 마우스 중뇌(VTA+SNc)에 ChrimsonR, **같은 광섬유로 한 아구역의 말단을 자극하면서 4개 아구역(NAcCR·DMS·DLS·TS) DA를 동시 기록**(n=11 mice, 635 nm, 0.25 mW, 1–20 Hz).
- 결과: NAcCR·DMS·DLS 자극은 **자극한 아구역에서만** 빈도 의존적 DA 증가를 냈고, **TS 자극만 DLS에서 작지만 유의한 빈도 의존 증가**를 함께 냈다(Fig 3E). 20 Hz에서 자극-기록 행렬은 **근접성에 따른 약한 관계**만 보였고(Fig 3F), 각 부위 자극은 해당 부위에서 다른 모든 부위보다 유의하게 큰 DA를 만들었다(예외: DLS 자극이 DLS와 TS를 구분하지 못함; Fig 3G). 유일한 상호작용은 **DLS↔TS의 소폭 교차**(DLS 자극 시 TS DA > NAcCR, TS 자극 시 DLS DA > NAcCR).
- → LHA 조작·소비 중에 관찰된 공간 조직화는 **cascade가 아니라 아구역별 병렬·국소 통제**의 결과. 저자들은 **spiral framework를 반증한 것이 아니라 시간적으로 경계지었다**고 명시: 나선은 해부와 분 단위 신경화학 측정에 근거하며, **초 단위 소비 행동의 시간척도에서는 도파민이 국소적으로 설정**된다. 따라서 "도파민 전파로 습관 형성을 설명하는 이론은 그 기전을 **소비에 수반되는 빠른 방출과 다른 시간척도**에 두어야 한다."

### Result 4 — 소비 중 LHA 억제가 행동과 DA를 **양방향으로** 민다
- WR 상태에서 물 vs 1 M NaCl, trial 6초 전부터 접근 종료 6초 후까지(총 15초) 연속 억제(대조 n=6, GABA n=6, Glut n=5).
- **행동**: LHA^GABA 억제 → **물 섭취 감소**. LHA^Glut 억제 → **NaCl 섭취 증가**.
- **DA**: GABA 억제 → NAcCR·NAcCC·DMS에서 DA↓(용액 의존), Glut 억제 → NAcCR·NAcShL에서 DA↑. 공간 상관은 again 전후축에서 반대 부호. 접근 전 억제가 만든 baseline shift를 보정한 뒤에도 양방향 변조는 여러 아구역에서 유지된다(Fig S5).
- ⚠️ 저자 스스로 **"DA가 행동을 몰았는지, 행동이 DA를 만들었는지는 이 실험으로 결정되지 않는다"** 고 못 박는다(인과 방향은 Result 6의 다음-trial 예측과 Result 9의 자극 실험에서 따로 다룸).

### Result 5 — 소비 중 도파민 지형: **후→전 시공간 gradient** + 가치/운동의 공간 분업
분석 창 3개: **licking onset**(0.0–0.3 s; 평균 첫 lick 0.33 ± 0.27 s이므로 lick 잠복 >0.3 s trial만 사용), **sustained**(2–3 s), **post**(6–8 s).
- **개시 전**: licking 전인데도 NAcCC·NAcShL·DMS·DLS·TS에서 DA↑, lick이 있는 trial에서 더 큼. 선형 위치 상관은 약하고, 대신 **전후축을 따라 띠(band) 형태**로 서로 다른 동역학.
- ★ **후→전 파동**: 첫 lick에 정렬한 bootstrap onset 분석에서 반응이 **더 후방·외측(DLS, NAcShL)에서 먼저**, **더 전방·내측(NAcShM, NAcCC, NAcCR)에서 나중**에 나타난다 → **posterior-to-anterior 전파**. 저자들은 이것이 운동·tone 자극에서 보고된 **배측 선조체 도파민 파동**(Hamid 2021)을 **소비 행동과 더 넓은 선조체 범위로 확장**한 것이라고 본다.
- **sustained(2–3 s)**: DA가 **거의 모든 아구역에서 용액 rank와 함께 scaling**(최상위 rank = WR:NaCl의 물, sucrose 조합의 30%). 예외는 WR:Suc의 NAcCR·NAcShM(음의 scaling). 제한상태 상호작용은 **TS를 제외한 모든 아구역**에서 유의(FR에서 더 강한 scaling). WR:NaCl에서 scaling이 가장 강하고, **전방·내측·복측일수록 scaling이 크다**.
- **post(6–8 s)**: scaling 패턴은 유사하되 **후방·배측에서 감쇠**. 제한상태 의존 차이는 전방·복측(NAcCR·NAcCC·NAcShM·NAcShL)에만 나타나고 DMS·DLS·TS에는 없다.
- **요약 서사**: 후방이 소비 직전에 먼저 올라가고 → scaling이 선조체 전역으로 퍼지며 **전방에서 정점** → 전방 일부에서 **가치 분리가 지속**된다.

### Result 6 — GLM(Witten 통계): 핥기·용액·이력·시간의 공간 분업
- 각 fiber·조건마다 독립 선형모델(본문 Fig 6의 결과는 WR:NaCl 조합, 47 mice·223 fibers). 종속변수는 z-score·baseline 보정 GRAB-DA(trial당 −3~+3 s, 20 Hz = 180 timepoint). **설계행렬 180n × 551**, 4개 predictor set:
  1. **time-in-trial** 180개(trial 내 시점별 항등행렬) — 용액·행동과 무관한 감각/타이밍 성분(spout 전개 등).
  2. **solution concentration** 180개(0~1로 scaling된 농도 × 항등행렬).
  3. **solution history** 180개(직전 **3 trial** 농도 평균).
  4. **licking** 11개 — 이진 lick 시계열을 **half-normal kernel(σ = 2.5 s)** 로 convolve + **±0.05~0.25 s 5개씩 시간 지연** 버전.
- 기여도는 각 predictor set을 뺀 모델과의 **ΔR²** 로 정량. 용액 predictor를 **shuffle**하면 적합도가 유의하게 떨어진다 → 용액 정보는 licking과 **독립적으로** 기여.
- **공간 분업 결과**: **time-in-trial = 배측 선조체, 특히 DLS**가 최강(비행동·비용액 감각/과제 정보). **licking = NAcCC·NAcShL**이 최강. **용액 농도와 그 이력 = 전방·복측**이 최강(이력 ΔR² 막대그래프에는 축 밖 이상치가 하나 있다 — NAcCR, ΔR² = 0.60; Fig 6G 범례).
- 보조 분석(Fig S7G–I)도 같은 결론: 농도를 고정하면 섭취량↑ → DA↑, lick 수를 고정하면 선호 용액 → DA↑ (선형혼합모델에서 lick count·용액 **둘 다 주효과 유의**; 예외는 WR:Suc·FR:Suc의 TS lick count).
- **다음 trial 예측(로지스틱 회귀, WR:NaCl)**: trial *n* 의 DA가 trial *n+1* 의 licking 여부를 예측 — **NAcCR OR 1.13**(p=3.7e−13, 12,375 trial/39 mice), **NAcCC 1.07**(p=3.6e−5), **NAcShL 1.07**(p=1.1e−6), **DMS 1.27**(p=1.3e−28), **DLS 1.32**(p=6.3e−47). **NAcShM(OR 0.91, p=0.062)과 TS(OR 1.00, p=0.97)는 예측하지 못한다.**

### Result 7 — 칼로리·맥락·포만·자극 양식이 지형을 다시 빚는다
(Fig S9–S10. 칼로리·맥락(Fig S9A–I)과 꼬리 쇼크(Fig S10)는 기본 3조합 뒤 추가 조합까지 수행한 n=19 하위 코호트, 포만(Fig S9J–M)은 본 데이터셋이다.)
- **칼로리 정체**: 먹이 제한 `FR:Sacc` 조합(0/5/10/20% sucrose + 20 mM saccharin)에서 섭취량이 같은 **10% sucrose vs 20 mM saccharin** 비교 시, saccharin일 때 **LHA^GABA·LHA^Ratio·NAcCR/NAcCC/NAcShL DA가 더 크고, DMS·DLS DA는 더 작다** → 칼로리 함량과 용액 정체가 **licking과 독립적으로** 지형을 바꾼다.
- **맥락(상대 가치)**: 물이 등장하는 5개 조합(WR:Water·WR:Suc·FR:Suc·WR:NaCl·FR:Sacc)을 비교하면, 물에 대한 LHA·DA 반응은 **물이 가장 가치 있는 조합(WR:NaCl)에서 최대, 먹이제한 조합에서 최소**. 혼합모델에서 조합과 그 lick count 상호작용이 DA를 예측하는 반면 **lick count 단독은 NAcCC·DLS에서만** 유의 → **절대 가치가 아니라 상대 가치**를 싣는다.
- **포만**: 고가치 용액에 대한 DA가 trial 진행에 따라 감소하고, 감소 기울기가 조합·아구역마다 다르다.
- **혐오는 양식 특이적**: 수동 꼬리 전기자극(0 / 0.05 / 0.50 mA, 1 s·20 Hz)은 LHA^GABA·LHA^Glut를 **둘 다** 올리지만 **LHA^Ratio는 불변**이고, DA는 NAcCC·NAcShL·TS에서↑ / NAcCR·DMS·DLS에서↓(자극 강도 의존). **이 쇼크 반응은 물·혐오 미각 소비 중 반응과 상관이 없다** → "일반화된 혐오 신호"가 아니다.

### Result 8 — 선조체 전역 상관 구조는 TS만 떼어낸다 + LHA 활동을 추적한다
- 6부위 전부 정확히 들어간 **19마리**에서 쌍별 상관 분석. 기저에서 상관은 전반적으로 양이고 **광섬유 간 유클리드 거리에 따라 감소**(근접할수록 높음).
- 소비 중 상관이 전반적으로 **상승**(WR:NaCl에서 최대)하되, **TS만 다른 모든 부위와 유의하게 덜 상관**되고 그 분리가 **소비 중에 더 커진다**. PCA(19마리·15,902 trial·279 timepoint = 4,436,658행)에서도 궤적이 용액 가치에 따라 갈리고 **lick 수를 맞춰도 WR:NaCl에서는 분리가 유지**된다.
- **LHA↔DA 결합**(WR:NaCl, n=5 mice): 한 hemisphere에서 LHA 이중색, 반대쪽 4개 아구역(NAcCC·DMS·DLS·TS) DA 동시 기록. 기저에서 **LHA^GABA–NAcCC DA 양의 상관이 LHA^Glut보다 강함**. 소비 중 LHA^GABA는 NAcCC·DMS·DLS와 양의 상관이 강화되나 **TS는 아님**; NAcCC에서는 pre·post 구간 모두 Glut보다 더 양의 상관. **LHA^Glut는 음의 상관**을 보이며 NAcCC에서 가장 뚜렷하다(Fig 7I).

### Result 9 ★ — 도파민은 **핥기의 개시**를 강화한다 (유지가 아니라)
- DAT-Cre + ChR2(n=10) vs mCherry(n=6), **VTA 세포체 양측 + NAcCC·DMS·DLS·TS 말단 양측 총 10개 광섬유**. 먹이제한, 10% sucrose, **lick이 자극을 트리거하는 closed-loop**(1 s, 20 Hz).
- **free-access(2분 블록)**:
  - **VTA 세포체 자극 → 총 lick 수↑ + bout 수↑.**
  - **개별 말단 부위 단독 자극은 총 licking을 바꾸지 못했다.** 그러나 **4개 선조체 부위를 동시에 자극(all STR)하면 증가**했고, 그 증가폭이 **개별 부위 효과의 산술합보다 컸다**(paired t: T(8)=3.29, p=0.011) → **분산된 동시 방출은 단순 가산이 아니다**.
  - **DMS·DLS 말단 자극은 bout당 lick 수를 오히려 줄였다.** 반면 VTA·NAcCC·DMS·DLS 자극은 모두 **bout 수를 늘렸다**.
  - (bout 정의: ILI < 1 s인 연속 2 lick = 개시, 1 s 초과 정지 = 종료.)
- **brief-access(10 trial 블록)**: 총 lick·trial당 lick은 불변이나, VTA와 **DLS를 제외한 모든 말단** 자극이 **블록 내 licking 확률**을 높였다.
- Result 6의 로지스틱 회귀(trial *n* DA → trial *n+1* lick)와 합쳐, **도파민은 소비의 "시작"을 강화하고 "지속"은 강화하지 않는다**는 것이 이 논문의 행동 인과 결론. 저자 해석으로는 진행 중인 섭취를 바꾸려면 **분산된 거의 동시 방출**이 필요하고, 지속(ongoing intake)은 **비선조체 회로**가 맡을 가능성이 크다.

## 저자 주장 vs 해석의 경계
**저자 주장(데이터로 뒷받침)**
- LHA^GABA/Glut 활동의 **비**가 가치·valence를 연속적으로 싣고, 두 집단의 광유전 조작이 선조체 DA를 전후축을 따라 **반대 부호로** 민다.
- 소비 중 DA는 **후→전 시공간 gradient**를 그리며, **전방=가치·이력 / 후방=감각운동**으로 기능 분업한다(GLM).
- 선조체 DA는 **아구역별 국소 조립**이며 **초 단위에서 전파되지 않는다**.
- DA는 **licking 개시**를 강화한다.
- TS는 gradient 위의 한 점이 아니라 **평행 채널**이다(가치·licking scaling 약함, LHA 조작에 반대 방향, 상관 구조에서 분리).
- **세 갈래 문헌의 통합**: 복측 선조체의 가치 scaling(Hajnal 2004·Eshel 2015·Tobler 2005), TS의 위협·신기성 부호화(Menegas 2015·2018 등), 운동 중 배측 선조체 DA wave(Vu 2024·Hamid 2021)를 **하나의 전후축 gradient** 위에 놓는다. 지형이 **절대 가치가 아니라 상대 가치**를 싣는다는 점은 중뇌 DA 뉴런의 adaptive value coding(Tobler 2005)과 평행하다.
- 기존의 **LHA→VTA→NAc 이시냅스 motif**([[nieh-2016-inhibitory-input-from-the|Nieh 2016]] 등)를 단일 복측 표적에서 **선조체 전역 지도**로 확장하고, GABA/Glut를 '반대 스위치'가 아니라 **graded 제어 변수(비)** 로 재정의한다.

**저자가 명시한 가설·추정(원문 주장 아님에 주의)**
- LHA^GABA/Glut가 **왜** 반대로 튜닝되는가는 미해결. 두 집단은 국소적으로 **극히 희박하게만 연결**돼 있어(Burdakov & Karnani 2020), 차이는 LHA로 수렴하는 항상성·미각·가치 입력의 **통합 방식 차이**에서 나올 것이라고 **추정**한다.
- TS DA를 LHA가 **직접 신경지배**로 조절한다(VTA DA 뉴런을 여는 disynaptic GABA 중계가 아니라)는 것은 해부 문헌(LHA가 TS 투사 DA 뉴런에 시냅스한다는 Menegas 2015 등)에 기댄 **회로 해석**이며, 본 논문에서 경로 특이 조작으로 검증되지 않았다.
- LHA^Glut의 일부 DA 효과(예: NAcShL의 양방향 변화)가 단순 VTA 중계로 설명되지 않는 이유로 **외측고삐핵(LHb) 등 VTA 밖 투사**를 든다 — 역시 가설.

## ⚠️ 위키 내 충돌·긴장 (병기, 한쪽을 지우지 말 것)

1. **Striato-nigro-striatal "spiral" vs 국소 조립** — [[luscher-2021-consolidating-the-circuit-model-for|Lüscher & Janak 2021]]은 중독의 **dorsalization**(배쪽→등쪽 확산)을 **spiraling connectivity**(Haber 2000)로 설명하고, 이 위키의 [[concept-nucleus-accumbens]]·[[concept-medium-spiny-neuron]]·[[concept-compulsion]]·[[concept-drug-evoked-synaptic-plasticity]] 페이지도 그 서술(NAc→SNc→등쪽 선조체 전파 = 강박 dorsalization의 기전)을 싣고 있다. Gordon 2026 Fig 3은 **한 아구역의 DA 방출이 다른 아구역 DA를 거의 올리지 않음**을 직접 보였다. **두 주장이 양립하는 지점은 시간척도**다 — 저자들 자신이 "spiral을 반증한 게 아니라 **시간적으로 경계지었다**"고 쓴다(나선은 해부·분 단위 측정 근거, 본 결과는 초 단위 소비). 위키에서 dorsalization을 인용할 때 **"학습 시간척도에서"** 라는 단서를 붙일 것.
2. **물 보상의 도파민 표적은 어디인가** — [[grove-2022-dopamine-subsystems-track-internal|Grove 2022]]/[[weber-2025-interoceptive-origin-reinforcement-learning|Weber 2025]] 틀에서는 **state-driven(물) primary reward = 배측 선조체(DS)** 이고 LH GABA→VTA가 그 source다. Gordon 2026에서는 물이 최고가치인 WR:NaCl 조건에서 **가치 scaling이 전방·내측·복측에서 가장 강하다**. 측정 시간창이 다르다(Grove=흡수 후 분 단위 sustained, Gordon=3초 소비창)는 점을 달지 않으면 두 서술이 충돌해 보인다. **동일 과제에서 소비창과 post-absorptive 창을 함께 보는 것이 해소 설계.**
3. **소비 vigor는 하나가 아니다** — [[concept-consumption-vigor]]는 reward window 내 lick 수를 단일 지표로 쓴다. 그런데 Gordon 2026은 **도파민=bout 개시**, [[wang-2026-ventral-pallidal-gabaergic-neurons|VP^GABA 폐루프]]는 **bout 길이 연장**, [[marcus-2026-endocannabinoids-facilitate-reward-engagement-through|NAc 2-AG→aPVT]]는 **총 lick 불변·시간 구조만 변화**를 보고한다. 세 결과를 합치면 vigor는 최소한 **개시(도파민) / 유지(VP·eCB)** 두 성분으로 분해돼야 하며, 단일 lick 수 지표로는 세 논문이 서로 모순처럼 보인다. 지표 정의는 [[guillaumin-2023-disentangling-the-role-of-nac|Guillaumin 2023]]의 lick microstructure(bout 수·IBI = wanting / bout 길이·ILI = liking; NAc D2 세포 억제가 깊을수록 bout가 길다)와 맞물린다 — 본 논문의 DA 자극이 **bout 길이를 늘리지 못하고 DMS·DLS 자극은 licks/bout을 줄인** 것은 bout 길이(liking·consummatory 지속)가 **선조체 DA 바깥**(VP·LH^MCH 등)에 실린다는 예측과 정합한다. 부호 충돌이 아니라 **역할 분담**으로 병기.
4. **"도파민이 섭식을 유지한다"는 통념** — 저자들도 Discussion에서 "DA는 섭식을 구동하고 진행 중인 소비를 지탱한다고 널리 여겨진다"(ref 1–2: Zhu 2025·Palmiter 2007)고 쓰고 이를 **수정**한다. 위키 쪽 대응 서술은 [[stuber-2025-the-neurobiology-of-overeating|Stuber 2025]](같은 Stuber 공저 리뷰)가 정리한 NAc D1R-MSN→LHA GABA **"feeding authorization" 게이트**([[oconnor-2015-accumbal-d1r-neurons-projecting|O'Connor 2015]]; 섭식 on/off)다 — 본 논문은 단일 말단 자극이 진행 중 섭취를 바꾸지 못하고 DA가 **개시(bout 수)** 만 강화함을 보여 그 통념을 **부분 수정**한다. 다만 저자 스스로 경고하는 해석 한계가 있다: **licking에 시간 맞춘 도파민 증강은 무엇을 먹든 그 행동 자체를 강화**할 수 있어(두개내 자가자극과 유사) **가치 설명과 행동-강화 설명을 분리하려면 기호성이 다른 용액들 사이에서 자극을 비교해야 한다**.
5. **등쪽 선조체 도파민 = 칼로리 counter인가** — [[tellez-2016-separate-circuitries-encode-hedonic-nutritional|Tellez 2016]]은 **DS 도파민 = 영양(칼로리) 신호**로 본다. Gordon 2026의 saccharin(무칼로리) vs 10% sucrose 비교에서 **DMS·DLS DA는 saccharin에서 더 낮았다** — 방향은 Tellez와 정합적이지만, Gordon의 측정은 **섭취 3초 내 구강 단계**라 post-ingestive 기전으로 설명할 수 없다. 접점으로만 적고 인과를 넘겨짚지 말 것.
6. **단일 value 신호 vs 공간 분해된 지형** — [[hamid-2016-mesolimbic-dopamine-signals-value-work|Hamid 2016]]/[[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation|Mohebi 2019]] 계열은 NAc DA를 단일 value/motivation 신호(V)로 읽는다(위키의 Mohebi 2019 페이지에 따르면 Mohebi 자신은 microdialysis 매핑으로 균일 broadcast를 부정한다). 본 논문은 선조체 DA가 **공간적으로 분해된 지형**(전방 가치 / 후방 감각운동 / TS 평행 채널)이고 아구역마다 국소 통제됨을 보여, DA를 "V 하나"나 "uniform broadcast"로 요약하는 전제와 긴장한다. 단 Mohebi의 optotagging 대상은 medial shell을 회피하는 외측 VTA DA라 측정 대상이 다르다 — 직접 반박이 아니라 **공간 해상도 차이**로 병기.
7. **TS = 위협 PE labeled line인가** — [[gershman-2024-explaining-dopamine-prediction-errors-beyond|Gershman 2024]]는 TS DA를 threat PE·action PE의 labeled line으로 정리한다(Menegas 2017·Akiti 2022·Greenstreet 2022). 본 논문도 TS를 **평행 채널**(다른 아구역과 상관 낮음, LHA 조작에 반대 방향, 직접 신경지배 해석)로 보아 수렴하지만, TS를 "위협 PE"로 부르지 않고 **감각운동·modality 의존** 신호로 남긴다(꼬리 쇼크 DA가 혐오 미각 DA와 무상관). 해석 프레임 차이로 병기. ⚠️ 흡수 전 중복 페이지는 [[hoang-2026-methamphetamine-potentiates-the-use-of|Hoang 2026]]도 같은 진영으로 묶었으나, 그 페이지는 LH 도파민의 비-RPE(보상 근접 ramp) 신호를 다룰 뿐 TS를 직접 다루지 않는다 — feature-specific PE 논의의 인접 문헌으로만 연결.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **[[concept-need-motivation-pleasure-utility|NMPU]]에 "어디"라는 축을 추가**: 가치·최근 이력(Pleasure/Utility의 교사 신호 성격)은 **전방·복측 선조체**, 핥기라는 행동 출력과 과제 타이밍(감각운동)은 **후방·배측**. NMPU 성분을 세포타입으로 귀속시키려는 [[proposal-lh-nac-nmpu-neuron-discovery|LH–NAc 발굴 제안]]은 **NAc 한 지점이 아니라 전후축 다점 샘플링**을 설계에 넣어야 한다 — 같은 "NAc 도파민"이라도 NAcCR과 NAcShM은 WR:Suc에서 **부호가 반대**로 나왔다.
- **LH=Motivation hub의 재정의**: 사용자 lab의 [[lee-2023-lateral-hypothalamic-leptin-receptor|LH^LepR seeking/consummatory]]·[[kim-2024-normative-framework-dissociates-need|LH LepR=Motivation]] 결과는 "어떤 LH 집단이 켜지는가"를 다룬다. Gordon 2026은 **"두 집단의 비가 얼마인가"** 라는 아날로그 변수를 제시한다. LH^LepR(대부분 GABA성)을 LHA^Ratio 틀에 얹으면, **동일 자극이 배고픔 상태에 따라 다른 Ratio를 만들어 다른 섭취 결과를 낳는다**는 식으로 [[concept-lateral-hypothalamus|LH^LepR 활성화의 부호 불일치 쟁점]]을 다시 볼 수 있다(검증되지 않은 가설). 작업 가설로 적으면 **LHA^Ratio = [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]] Motivation 축의 스칼라 readout** — Motivation 값이 LH 두 집단의 균형으로 구현된다. 직접 검증 질문은 **FR:Suc에서 LHA^GABA가 보인 강한 value-scaling을 LH^LepR(GABA 아집단)이 실제로 나르는가**이며, LepR-Cre × Vglut2-Flp dual-color photometry로 본 논문 설계를 그대로 재현할 수 있다(선행 제약은 아래 관련 페이지의 Siemian 2021 항목).
- **상대 가치 = Need에 의한 Motivation 변조**: 같은 물에 대한 LHA·DA 반응이 물이 최고가치인 WR:NaCl에서 최대, 먹이제한 조합에서 최소다. WR vs FR의 제한상태 차이는 sustained 창에서 TS를 뺀 전 아구역에 나타나지만, post 창(6–8 s)에는 **전방·복측에만** 남는다(DMS·DLS·TS에는 없음). NMPU 식으로 읽으면 **Need는 전방 DA(가치 채널)를 지속적으로 변조하고 후방 감각운동 채널은 덜 건드린다**. [[concept-npy-agrp-neurons|AgRP]] 조작과 다지점 DA 기록을 결합하면 직접 검증할 수 있다.
- **개시 = wanting·Motivation / 지속 = liking·Pleasure**: DA 자극은 bout 수만 늘리고 bout 길이는 늘리지 않는다. Guillaumin 2023의 지표 정의를 대입하면 "선조체 DA = wanting 강화, liking은 비도파민"이라는 Berridge 계열 결론([[concept-liking-wanting]])의 **선조체 전역 버전**이고, NMPU의 Motivation ↔ Pleasure 분리와 그대로 겹친다. 지속을 맡는 "비선조체 회로" 후보는 [[wang-2026-ventral-pallidal-gabaergic-neurons|VP^GABA]](폐루프로 bout 연장), LH^MCH(consumption sustain), [[concept-consumption-vigor|consumption vigor]] 계열 노드다.
- **Saccharin > sucrose DA(전방)**: 칼로리 없는 감미료가 전방 DA와 LHA^GABA를 오히려 더 올린다. 3 s 창에서 보이는 것은 **순수 orosensory 가치**이고 칼로리 신호는 이후 배측(DMS·DLS) DA로 갈 수 있다는 가설 — [[concept-primary-reward-signals|orosensory vs post-ingestive]] 분리, [[yang-2026-a-sync-state-in-the|Yang 2026]]의 post-ingestive 동기화 이전 단계와 맞물린다([[thanarajah-2019-food-intake-recruits-orosensory|Thanarajah 2019]] 인간 PET: 지연 post-ingestive DA는 caudate head 등).
- **DTx·electroceutical 표적 선정**: 저자들은 결론에서 **"도파민을 겨냥한 개입(GLP-1 계열 포함)의 효과는 선조체의 어디에 도파민이 있고 상류 시상하부 균형이 그것을 어떻게 배치하느냐에 달려 있다"** 고 쓴다. [[concept-nucleus-accumbens|인간 NAc rDBS]](Halpern 라인)나 [[proposal-ttis-feeding-reward-circuits|tTIS]] 표적을 고를 때, "보상계 자극"이 아니라 **"전방 가치 채널을 올릴 것인가, 후방 감각운동 채널을 건드릴 것인가"** 로 질문이 바뀐다.
- **개시 vs 유지의 임상 번역**: 과식 표현형을 "한 끼를 오래 먹는가(유지)" vs "자꾸 다시 시작하는가(개시·snacking)"로 나누면, 본 논문은 **후자가 도파민 의존적**임을 시사한다. [[concept-loss-of-control-eating|LOC eating]]·binge의 인간 biomarker가 **한입 직전 ~1–2초에 ramp**한다는 Halpern 라인 결과와 **개시 강화**라는 그림이 형식적으로 맞물린다(가설).
- **방법 수입**: ① head-fixed 다중-spout에서 **용액 정체를 모르게 하고 핥아야 알게 하는** 설계는 가치와 운동을 분리하는 실용적 장치. ② **lick kernel(half-normal σ=2.5 s) + 시간지연 GLM**과 **predictor set 제거 ΔR²** 는 사용자 lab의 photometry 분석에 그대로 이식 가능. ③ **trial n 신호 → trial n+1 행동 로지스틱 회귀**는 "이 신호가 다음 행동을 강화하는가"를 묻는 저비용 분석.

## 한계 (저자 명시 + 읽기 주의)
1. **GRAB-DA는 세포외 도파민이지 중뇌 발화도 절대 농도도 아니다.** 전시냅스·콜린성 조절로 발화와 방출이 갈릴 수 있고 아구역마다 도파민 동역학(재흡수 등)이 달라, **NaCl 부하 시 전방의 지속 신호는 세포체 활동보다 방출 동역학을 반영할 수 있다**. microdialysis·형광수명 이미징이 잡을 **느린 tonic 변화는 놓친다**.
2. 선조체별 표상 차이가 **분자적으로 다른 도파민 아집단** 때문인지 **공유 집단의 국소 통제** 때문인지 미해결.
3. **LHA^GABA–LHA^Glut의 실시간 상호작용 증거가 불완전** — 화학유전 억제의 tonic 교란 때문. 스펙트럼이 호환되는 다중 opsin + 센서 동시 조작이 필요.
4. **머리고정·무작위 접근 설계**가 접근 행동·학습·post-ingestive 요인을 제거한다 — 해부에는 강점이나 **의사결정과 경험 의존 변화를 배제**한다. cued·operant·자유행동, 그리고 **고형식**(부분적으로 다른 LHA 회로를 동원할 수 있음)으로의 확장이 필수.
5. **경로 특이 조작 없음**: 모든 LHA 조작은 세포체 양측 조작이다. "LHA→VTA 직접", "LHA→TS 투사 DA 뉴런 직접 신경지배"는 **선행 해부 문헌에 기댄 해석**이며 본 논문이 terminal 수준에서 검증하지 않았다.
6. 실험자 **비맹검**, 일부 코호트는 여러 절차를 순차 수행(cross-over 이력 있음; 저자들이 subject matrix로 공개).
7. 코드·데이터 공개: GitHub `stuberlab/Gordon-et-al.-2026`, Zenodo `10.5281/zenodo.21809309`. (저자들은 분석 코드 정리·저장소 준비·원고 편집에 생성형 AI인 Claude(Anthropic)를 사용했다고 선언문에 명시.)

## 관련 페이지
- [[proposal-habitual-overeating-dls-miniscope]] — 음식 추구의 습관화와 포만 후 실제 섭취를 연결하는 DLS Miniscope 종단 기록·인과 검증 제안(2026-10-04).
- [[concept-striatal-dopamine-gradient]] — 본 논문이 만든 개념 hub: 선조체 도파민의 전후축·내외측 공간 조직, 파동, 국소 vs 전파 논쟁.
- [[concept-lateral-hypothalamus]] — 선조체 DA 지형을 설정하는 상류 hub. LHA^GABA/Glut 비가 설정 변수라는 재정의; LH를 "먹을지 결정(feeding switch)"에서 "도파민 배치 통제(DA landscape controller)"로 확장.
- [[concept-dopamine-reward-system]] — "단일 보상 broadcast" 가정에 대한 공간적 반례; 선조체 DA를 전후축 gradient·아구역별 국소 통제로 재정의.
- [[concept-nucleus-accumbens]] — 가치·용액 이력의 최강 부호화 지점(전방·복측 = NAcCR·NAcCC·NAcShL 채널); 단 NAcCR/NAcCC/NAcShM/NAcShL이 조건에 따라 **부호가 갈린다**. ⚠️ 그 페이지의 spiraling connectivity 서술과는 시간척도 충돌(위 충돌 1) 병기.
- [[concept-medium-spiny-neuron]] — 이 도파민 지형이 실제로 작용하는 표적 세포층.
- [[concept-consumption-vigor]] — ★ lick 수·bout 구조로 정량화하는 vigor를 **개시(bout 수) vs 유지(bout 길이)** 로 분해해야 한다는 근거: DA는 bout 수만 강화하고 bout 길이는 비도파민.
- [[concept-appetitive-consummatory-phases]] — consummatory 운동(licking)과 용액 가치를 분리하는 과제 설계; consummatory phase 내부의 **초 단위 시공간 구조**(후→전 파동, onset/sustained/post 3창).
- [[concept-need-motivation-pleasure-utility]] · [[kim-2024-unified-theoretical-framework-underlying-regulation]] — 가치=전방, 행동 출력=후방이라는 공간 분업을 NMPU 축에 매핑; LHA^Ratio = Motivation 축의 회로 readout 가설.
- [[concept-liking-wanting]] — DA = wanting(bout 수) 강화, liking(bout 길이)은 분리된다는 Result 9(Fig 8) 결과.
- [[stuber-2025-the-neurobiology-of-overeating]] — 동일 senior author의 과식 회로 리뷰. 그 리뷰의 "LHA GABA→VTA→NAc DA" 서사를 **선조체 전역 지도**로 확장. NAc→LHA feeding gate·"DA가 섭식을 지속" 통념의 부분 수정은 위 충돌 4에 병기.
- [[hjort-2026-prefrontal-to-ventral-tegmental-area]] — 같은 lab·**공저자 중복(M.M. Hjort, E. Ancell, D. Witten)**; 본 논문의 permutation 검정이 Hjort 2026의 circular-shift 방법을 차용. mPFC→VTA(meta-RPE)가 "언제 도파민을 바꿀까", 본 논문이 "어디에 도파민이 나올까"를 담당.
- [[person-stuber-garret]] — 교신저자 인물 hub.
- [[sumarli-2026-multidimensional-control-of-ingestive-behavior]] — **같은 OHRBETS 과제·같은 대학**의 자매 결과: LH^Nts는 lick 운동량·inverse value를 싣는다. LHA^GABA/Glut(가치 scaling)와 **세포타입별 변수 분업**의 직접 비교 대상.
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — 사용자 lab의 LH 종합. "GABA=engine / Glut=brake" 이분법에 **연속 ratio 변수**를 더한다.
- [[korotkova-2026-balancing-acts-lateral-hypothalamic]] · [[rossi-2023-control-of-energy-homeostasis]] · [[chen-2025-the-integrated-function-of-the]] — LHA 세포타입 taxonomy; 본 논문은 그 taxonomy의 **출력 좌표계**를 제공.
- [[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles]] — LH GABA 내부의 기능 분리(현저성 vs 가치-scaling 소비). 본 논문의 LHA^GABA bulk 신호가 **그 두 ensemble의 합**일 가능성.
- [[grove-2022-dopamine-subsystems-track-internal]] — LH GABA→VTA DA가 물 보상(내부 상태 추적) 채널 — 본 논문 LH→선조체 DA의 정방향 짝. ⚠️ 도파민 표적 부위(DS vs 전방·복측)에서 시간척도 단서를 달지 않으면 충돌.
- [[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation]] — "broadcast burst=학습 / **local control**=동기". 본 논문의 **아구역별 국소 조립**은 local-control 주장의 공간 버전이나, Mohebi가 NAc core만 reward rate와 상관한다고 본 반면 본 논문은 가치 scaling이 전방 전반에 퍼진다고 본다. ⚠️ 단일 value(V) 신호 틀과의 공간 해상도 긴장은 위 충돌 6.
- [[hamid-2016-mesolimbic-dopamine-signals-value-work]] — NAc DA=value of work. 본 논문은 그 "가치" 신호에 **전방 편중**이라는 좌표를 붙인다(단일 value 신호 진영 — 위 충돌 6).
- [[gershman-2024-explaining-dopamine-prediction-errors-beyond]] — 이 위키에서 **wave-like DA(Hamid 2021)** 와 **tail of striatum = threat/action PE labeled-line**을 다루는 페이지. 본 논문은 둘 다를 소비 맥락에서 확장·검증한다. TS를 "위협 PE"가 아닌 modality 의존 평행 채널로 남긴다는 프레임 차이는 위 충돌 7.
- [[hoang-2026-methamphetamine-potentiates-the-use-of]] — VTA DA→LH의 비-RPE(보상 근접 ramp) 채널. 도파민 feature-specific 신호 논의의 인접 문헌(TS 자체는 다루지 않음 — 위 충돌 7의 ⚠️).
- [[luscher-2021-consolidating-the-circuit-model-for]] — ⚠️ dorsalization의 전제인 **spiraling connectivity**를 본 논문이 **초 단위에서 반증**(Fig 3). 시간척도 단서 필수.
- [[zhang-2026-inherited-input-and-local-transformations]] — **방법·논지의 쌍둥이**: 선조체 전역 다중 광섬유로 "상속 vs 국소 변환"을 가른 연구. 본 논문은 같은 질문을 **신경전달물질(도파민) 층**에서 묻는다(아구역 간 전파 vs 국소 통제).
- [[tellez-2016-separate-circuitries-encode-hedonic-nutritional]] — VS=미각/DS=영양 이분법. 본 논문의 saccharin vs sucrose 결과와 **방향은 정합**하나 시간창이 다르다.
- [[weber-2025-interoceptive-origin-reinforcement-learning]] — primary/proxy/secondary reward의 VS/DS 배치; 본 논문의 공간 지도와 대조할 틀.
- [[wang-2026-ventral-pallidal-gabaergic-neurons]] — ⚠️ **상보·긴장**: VP^GABA 폐루프는 **bout를 연장**(유지), 본 논문의 도파민은 **bout 수를 늘림**(개시). 두 회로가 vigor의 다른 성분을 담당한다는 가설.
- [[guillaumin-2023-disentangling-the-role-of-nac]] — lick microstructure의 wanting(bout 수)/liking(bout 길이·ILI) 지표 정의 원전; 본 논문 "DA = bout 수" 결과를 읽는 틀(위 충돌 3).
- [[marcus-2026-endocannabinoids-facilitate-reward-engagement-through]] — eCB가 **총 licking 불변·시간 구조만 변화**시킨다는 결과와 직접 짝. "개시=도파민 / 지속=eCB" 분업 가설.
- [[yang-2026-a-sync-state-in-the]] — 소비 ~30초 후 VTA DA의 0.8 Hz sync state가 미래 **vigor**를 올린다. 본 논문의 "다음 trial lick 확률↑"와 **같은 방향**이되, 시간척도(초 vs 수십 초)와 측정 대상(방출 vs 발화 동기화)이 다르다. saccharin > sucrose 전방 DA 해석에서는 이 post-ingestive 동기화 **이전** 단계(orosensory)라는 대비.
- [[thanarajah-2019-food-intake-recruits-orosensory]] · [[concept-primary-reward-signals]] — orosensory vs post-ingestive DA 분리(인간 PET·개념 hub); saccharin > sucrose 전방 DA를 읽는 틀.
- [[jeong-2022-mesolimbic-dopamine-release-conveys-causal]] — 도파민 방출을 RPE가 아닌 **회고적 인과 연합(ANCCR)** 으로 읽는 틀. 본 논문의 "trial n DA → trial n+1 개시" 결과를 RPE 없이 해석할 수 있는 대안.
- [[pascoli-2026-conditioned-accumbal-dopamine-transients]] — NAc 도파민이 **주관적 가치**를 싣고 compulsion을 예측. 본 논문의 "상대 가치 부호화"와 같은 방향.
- [[piette-2026-striatal-endocannabinoids-drive-one-shot]] · [[fallon-2026-striatal-pathways-dissociably-control-action]] — DLS/DMS가 가치가 아니라 **행동·가소성 규칙**을 담당한다는 독립 증거; 본 논문의 "후방=감각운동" GLM 결과와 수렴.
- [[ravichandran-2026-spatiomolecular-mapping-reveals-anatomical]] — 인간 NAc의 **연속 공간 gradient**(내–외측). 설치류 도파민 지형의 인간 해부 대응 좌표.
- [[onimus-2026-the-gut-brain-vagal-axis-governs]] — 미주 tone이 **NAc DA만 gating하고 DS는 보존**한다는 결과 — 선조체 아구역이 서로 다른 상류 통제를 받는다는 또 다른 증거.
- [[proposal-lh-nac-nmpu-neuron-discovery]] — ★ 본 논문이 그 제안에 요구하는 설계 변경: 전후축 다점 샘플링, bout 구조 분석, LHA ratio 변수.
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] · [[kim-2024-normative-framework-dissociates-need]] — 사용자 lab의 LH 원저(LH^LepR seeking/consummatory 분리, LH^LepR=Motivation); LH 집단 정체성 축과 ratio 축의 접점. 본 논문 LHA^GABA value-scaling을 LepR 아집단이 나르는지가 검증 질문(세포 정체 후보).
- [[person-choi-hyung-jin]] — 사용자 lab hub.
- [[concept-loss-of-control-eating]] — "자꾸 다시 시작한다"는 임상 표현형에 대한 회로 가설.
- [[liu-2026-granular-motivational-interaction-and]] — feeding을 phase별 전용 회로로 분해; LH^GABA=initiation. 본 논문 "DA=개시 강화"와 수렴.
- [[mingote-2019-dopamine-glutamate-neuron-projections-to]] · [[concept-striatal-cholinergic-interneuron]] — NAc medial shell DA의 국소 제어(ChI)와 선조체 DA 말단(terminal) 제어의 분자 후보 — 본 논문이 보인 아구역 간 국소 독립성과의 기전적 접점.
- [[siemian-2021-lateral-hypothalamic-lepr-neurons]] — 본 논문이 던진 "LHA^GABA value-scaling을 LH^LepR가 나르는가"에 대한 선행 제약: LH^LepR는 ablation·opto·chemo 어느 조작에도 **섭취를 바꾸지 않고**(ChR2 섭식 p=0.21) cue 변별 학습·RTPP·sucrose CPP만 바꾼다 → 본 논문의 **섭취 중 sustained(2–3 s) value-scaling은 LepR가 아닌 다른 GABA 아집단**일 가능성(연결 가설). 반면 **LH^LepR→VTA 억제가 학습을 강화**하므로, LH→VTA 축의 '기대 보상 relay' 성분은 LepR가 나를 수 있다 (Cell Rep 2021, Aponte lab).
- [[jennings-2015-visualizing-hypothalamic-network-dynamics]] — 같은 Stuber lab 선행. LH^Vgat의 appetitive/consummatory 분업·bulk 활성의 consumption 편향(소비↑·break point 불변)을 세운 foundational paper. 본 논문의 "DA=섭취 개시(bout 수) 강화, 지속 비강화"는 Jennings Fig 2의 동기/소비 해리를 선조체 DA 지형으로 확장한 셈 (Cell 2015).
- [[jennings-2013-the-inhibitory-circuit-architecture]] — 같은 lab 13년 전 Science 341:1517. 본 논문의 **LHA^Ratio(GABA/Glut)** 라는 두 축을 처음 세운 논문: BNST GABA 입력이 **LH^Vglut2를 선택적으로 억제**해 섭식을 켜고(rabies F1,20=38.50, P<0.001), Vglut2^LH 직접 활성은 섭취·food zone 체류↓(F1,36=13.31 / 13.12, P<0.001)·혐오다. 연결 가설: Vgat^BNST→LH 말단을 광억제하면 분모(Glut)가 탈억제되어 **LHA^Ratio가 내려가야** 한다 — 본 논문의 dual-color photometry 설계로 바로 검증 가능.
- [[nieh-2016-inhibitory-input-from-the]] — LH^GABA→VTA disinhibition→NAc DA↑의 Tye lab 원전(Neuron 2016). 본 논문이 단일 NAc FSCV를 선조체 전후축 DA 지형으로 확장한 계보의 출발점.
- [[oconnor-2015-accumbal-d1r-neurons-projecting]] — ★ 위 충돌 4가 "Stuber 2025 (O'Connor & Lüscher 2015)"로 지목한 **1차 원전**(Neuron 2015). 방향이 본 논문과 **반대**다: 그쪽은 **NAc → LH**(NAcSh D1R-MSN → LH^Vgat 억제 = 섭취 중단, D1R 광억제 = 포만 상태에서 섭취 개시), 본 논문은 **LH → 선조체 DA**. 둘을 합치면 Stuber 2016이 그린 **LH^GABA → VTA → NAc → LH^GABA 음성 되먹임 고리**의 두 변이 각각 1차 데이터로 채워진다. 프레임 긴장은 병기: 원전은 섭식을 **on/off 허가 게이트**로, 본 논문은 LHA^Ratio가 DA 지형을 설정하는 **연속 조절기**로 본다(층위가 다른 상보 기술). 연결 가설 — 원전의 closed-loop 자극이 섭취를 끊을 때 **전방 선조체 DA도 함께 떨어져야** 하며, 본 논문의 dual-color + GRAB-DA 설계로 바로 검증 가능하다.
- [[liu-2023-an-iterative-neural-processing]] — 자유행동 섭식에서 LH^GABA = 조각 **개시**, DR^GABA = 접촉 **유지**(접촉 지속과 R=0.908, 폐쇄회로 조작으로 양방향) — 본 논문의 "DA는 개시(bout 수)만 강화, 지속은 비도파민"과 수렴하는 분업 (Neuron 2023, Wang lab). ⚠️ LH^GABA 반응 정점은 땅콩버터·일반 먹이에서 비슷했고 쾌락 scaling은 DR^GABA에서 나타났다 — 본 논문의 LHA^GABA sustained value-scaling과는 측정 창(onset 정점 vs 2–3 s)·과제(자유행동 vs head-fixed)·Cre 라인(GAD2 vs Vgat)이 다르다.
- [[sharpe-2017-lateral-hypothalamic-gabaergic-neurons]] — LH^GABA→VTA의 **학습 조절** 축(Curr Biol 2017, Sharpe/Schoenbaum). 본 논문은 LHA^GABA/Glut 균형이 선조체 DA **지형**을 설정하고 그 DA가 섭취 **개시**를 강화한다고 보는데, Sharpe는 같은 LH^GABA→VTA 투사가 행동을 구동하지 않고 **진행 중 학습의 크기만** 조절한다고 본다(말단 억제 → cue 학습 촉진) — 같은 투사의 **서로 다른 기능 층위**로 병기.
- [[rossi-2019-obesity-remodels-activity-and]] — 같은 Stuber lab 선행(Science 2019): LH^Glut(Vglut2) 단일세포 2-photon에서 같은 sucrose에 대한 반응이 **prefed > 24 h fast**(내부 상태 의존)이고 만성 HFD 12주에 **둔화**(내재 흥분성↓). ⚠️ 본 논문 FR:Suc에서 LHA^Glut는 **농도 scaling이 없었다** — "LH^Glut는 자극 농도보다 내부 상태를 따른다"로 묶이면 정합하나 조작 축(농도 vs 상태)·해상도(bulk vs 단일세포)가 달라 병기. 연결 가설: 비만에서 Glut만 둔화되면 **LHA^Ratio가 상향**되어 전방 DA 가치 채널이 과대 설정될 것.
- [[rossi-2021-transcriptional-and-functional-divergence]] — ⚠️ 같은 lab 선행(Neuron 2021): 본 논문이 **단일 채널**로 측정한 LHA^Glut는 사실 **투사 표적별로 호르몬 반응 부호가 반대인 두 집단의 합**이다. LHA^Vglut2→**LHb**(전측·Pax6⁺·고흥분성)는 leptin에 반응↓, →**VTA**(후측·Pdyn/Hcrt=orexin·저흥분성)는 leptin에 반응↑(interaction F(1,370)=63.99, p=1.6e-14). 따라서 대사 상태·호르몬을 바꾸는 조건에서는 bulk LHA^Glut 신호와 **LHA^Ratio의 해석이 투사 조성에 의존**하며 상쇄가 일어날 수 있다. 본 논문의 LHA^Glut 광유전 조작(전방 DA↓·TS DA↑)이 어느 투사 집단의 효과인지도 미분해 상태다(병기).
- [[leinninger-2009-leptin-acts-via-leptin]] — **LH→VTA→선조체 DA 축의 가장 이른 인과 고리**(Cell Metab 2009, Myers lab)이며 본 논문과 **시간척도가 다른 층위**다. *Lep^ob/ob*의 LHA에 **250 pg** leptin을 24 h 주면 동측 **VTA *Th* mRNA ~2.5배·NAc DA 함량 ~40%↑**이고 섭식·체중 증가는 억제된다(**intra-VTA leptin은 *Th* 무변**). 담당 세포는 LHA의 **LepRb⁺ GABAergic**(MCH·OX 비중첩, VTA 투사·선조체 투사 없음). 연결 가설: **느린 용량 설정(leptin→LH^LepR→VTA *Th*/DA 함량) × 빠른 분배(LHA^Ratio→아구역 DA)** 의 2단 제어 — 예측은 *Lep^ob/ob*나 LH *Lepr* knockdown에서 본 논문식 DA 지형의 **진폭만 축소되고 전후축 배열은 유지**되는 것이다. ⚠️ 부호도 병기 필요: 본 논문은 선조체 DA를 섭취 **개시 강화** 신호로 보는데, Leinninger는 DA **함량** 증가와 섭식 **감소**를 함께 보고한다(함량 vs 방출 구분).
- [[domingos-2013-hypothalamic-melanin-concentrating-hormone]] — **LH→선조체 DA를 섭취와 짝지어 조작한 가장 이른 사례**(eLife 2013, Friedman lab). 다만 세포는 GABA/Glut 이분법 밖의 **MCH**(Gad1+Slc17a6 공발현)다. sucralose lick 연동 MCH 20 Hz 자극 → 선조체 DA +69%(microdialysis), MCH 제거 → sucrose DA +118% 소실. ⚠️ 칼로리 축에서 긴장한다. 본 논문 Fig S9는 **saccharin이 sucrose보다 전방 DA를 더 올린다**(DMS·DLS는 반대)고 보고한다. Domingos는 sucralose 단독 DA 변화가 무의미하고(+8%) sucrose만 DA를 올린다고 보고한다. 측정 시간척도(GRAB-DA 초 단위 vs 6분 microdialysis)와 부위(7 아구역 vs 미명시 "striatum")가 달라, **빠른 orosensory 성분 vs 느린 post-ingestive 성분**으로 병기한다. 연결 가설: 본 논문의 FR:Sacc 조합(10% sucrose vs 20 mM saccharin) 비교에 MCH 제거를 더하면 **DMS·DLS의 sucrose 우세 성분만 사라질 것**이다.
- [[de-vrind-2019-effects-of-gaba-and]] — **필요성·충분성이 상보적인 LH^GABA 사례**(Obesity 2019): 본 논문은 섭취 중 LHA^GABA 광억제가 물 섭취를 줄여 **필요성**을 보이고, 그쪽은 LH^Vgat를 수 시간 hM3Dq로 켜도 실제 chow 섭취가 늘지 않고 갉기 spillage만 생긴다며 **충분성의 제한**을 보고한다. 측정 대비도 함께 — head-fixed multispout lick 정량에는 갉기 spillage 혼입이 없다.
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
- [[overview-habitual-overeating-dls]] — 습관적 과식과 DLS의 원문 대조 분석: 위키 1차 자료가 지지하는 DLS의 역할, bout 구조 가설, miniscope 중심 연구 제안 8개.
