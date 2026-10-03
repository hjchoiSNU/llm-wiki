---
title: "Lateral hypothalamic control of the striatal dopamine landscape during consummatory behavior (Gordon et al. 2026, Neuron)"
type: paper
created: 2026-10-03
updated: 2026-10-03
source: "raw/2026 Neuron (Stuber) Lateral hypothalamic control of the striatal dopamine landscape during consummatory behavior.pdf"
authors: [Gordon AG, Benowitz BM, Barbakh JM, Montequin I, Campuzano A, Stevenson HP, Lu P-Y, Hjort MM, Ancell E, Critz M, Witten D, Stuber GD]
year: 2026
journal: "Neuron 115:1–20 (in press online 2026; issue March 3, 2027); doi:10.1016/j.neuron.2026.09.002"
---

> [!takeaway] 연구 방향 관점의 핵심
> **LH의 GABA(Vgat)와 glutamate(Vglut2) 뉴런을 "섭식 on/off 스위치 한 쌍"이 아니라 하나의 연속 제어변수(GABA/Glu 비율)로 다시 읽은 논문.** 섭취 중 두 집단은 함께 켜지지만 용액 가치에 대해 반대로 scaling하고(GABA는 가치에 비례, Glu는 혐오 용액에서 반비례), 이 균형이 **선조체 전체의 도파민(DA) 지형을 전후(anterior–posterior) 축을 따라 공간적으로** 정한다. 섭취 중 선조체 DA는 **후측·외측(DLS·NAcShL)에서 먼저 오르고 전측으로 퍼지며**, 전측·복측은 **가치와 최근 이력**, 후측·배측은 **감각운동 변수**를 싣는다. 그리고 이 DA는 섭취를 **오래 지속시키기보다 다시 시작하게(bout 개시)** 강화한다.
> 사용자 연구에 가져갈 세 가지. (1) [[proposal-lh-nac-nmpu-neuron-discovery|LH–NAc NMPU 발굴 과제]]에서 LH 단일 집단의 활성만 볼 것이 아니라 **GABA/Glu 동시 기록과 비율**을 1차 지표로 삼고, NAc는 **아구역(NAcCR·NAcCC·shell)별로** 따로 읽어야 한다. (2) [[concept-consumption-vigor|consumption vigor]]를 "창 안의 lick 수" 하나로 재면 **개시(bout 수)와 유지(bout 길이)** 가 섞인다. 본 논문에서 DA는 전자만 올렸다. (3) [[concept-need-motivation-pleasure-utility|NMPU]] 관점에서 섭취 중 DA는 **절대가 아닌 상대 가치**(같은 물이 맥락에 따라 다른 크기)를 싣는다. Pleasure 신호가 Need·맥락에 의해 재조정된다는 회로 근거다.

# Lateral hypothalamic control of the striatal dopamine landscape during consummatory behavior (Gordon et al. 2026)

## 한 줄 요약
head-fixed 다중 용액 brief-access 과제에서 LHA^GABA·LHA^Glut를 이중색 photometry로 동시 기록하고, 세포체 광유전 조작을 최대 6개 선조체 부위 GRAB-DA 동시 기록과 결합해, **LHA GABA–Glu 균형이 선조체 DA의 전후축 공간 지형을 인과적으로 정하고, 섭취 중 DA는 후측에서 전측으로 퍼지는 시공간 기울기를 이루며, 그 DA는 licking의 개시를 강화한다**는 것을 보인 연구 (Neuron 2026, Stuber lab, UW; 통계 모델링 Daniela Witten).

## 핵심 내용

### Background — 섭취 중 DA는 "어디에서" 나오는가
- consummatory behavior(핥기·씹기·삼키기)는 대부분의 보상학습 과제에 들어 있지만, 섭취 중 DA가 **선조체의 어디에서** 방출되고 어떻게 공간적으로 조직되는지는 거의 그려지지 않았다. DA는 흔히 **단일·균일한 보상 broadcast**로 취급되어 왔다.
- LHA^GABA 자극은 섭취와 양성 valence를, LHA^Glut 자극은 섭취 억제와 음성 valence를 일으킨다고 알려져 있다. 그런데도 **두 집단 모두 섭취 중 칼슘 활성이 오른다**. 저자들은 둘 중 하나가 아니라 **둘의 균형**을 하류 DA 회로가 읽는다는 가설을 세웠다.
- 해부학적 배경(원문 Introduction): LHA^GABA·LHA^Glut는 VTA로 조밀하게 투사하고, LHA는 VTA·SNc DA 뉴런에 직접 투사하며, LHb·PAG·raphe·peri-LC를 거치는 다시냅스 경로도 있다. LHA는 **선조체 꼬리(TS)로 투사하는 DA 뉴런**에도 시냅스한다.
- 두 번째 질문: 선조체 DA는 각 부위에서 **국소적으로** 정해지는가, 아니면 영향력 있는 **striato-nigro-striatal 나선(spiral)** 모델처럼 복측→배측으로 **연쇄 전파**되는가?

### 과제·방법 개요
- **OHRBETS head-fixed multi-spout brief-access taste task** (Gordon-Fennell 2023 eLife): 세션당 100 trial, 매 trial 3초 동안 5개 용액 중 하나에 접근(10 trial마다 용액당 2회, 유사무작위), ITI 11–16초. lick당 약 1.5 μL. 마우스는 trial의 용액 정체를 모르고 **핥아서 맛봐야** 안다. 접근(approach)·고차 인지 confound를 줄이고 **용액 가치(농도)와 licking(운동)을 분리**하려는 설계.
- **세 가지 restriction/solution 구성**(체중 90%로 제한):
  - **WR:Suc** — 물 제한 + sucrose 0·5·10·20·30%
  - **FR:Suc** — 먹이 제한 + 같은 sucrose 세트
  - **WR:NaCl** — 물 제한 + NaCl 0·0.25·0.50·1.00·1.50 M (물이 가장 가치 있고 고농도 NaCl이 가장 혐오)
- 행동: sucrose 농도↑ → lick↑(FR에서 범위가 더 넓음), NaCl 농도↑ → lick↓. 행동 자료 n=59마리(Fig 1E), trial 수 WR:Suc 20,000 / FR:Suc 19,900 / WR:NaCl 19,800.
- 성별: 군 간 수컷·암컷을 대략 같은 수로 배정. 실험자는 genotype·처치에 대해 **비맹검**.

### Result 1 — LHA^GABA와 LHA^Glut는 함께 켜지되 가치에 대해 반대로 scaling한다 (Fig 1)
- **이중색 photometry**: Vglut2-Cre × Vgat-Flp 이중 형질전환 마우스의 LHA에 Cre 의존 jRCaMP1b(Glut, 적색) + Flp 의존 GCaMP6s(GABA, 녹색). 같은 광섬유로 동시 기록(n=12마리). 두 신호의 비율을 **LHA^Ratio(GABA/Glut)** 로 정의.
- 색 분리 검증: lock-in 복조에서 반대 파장 유래 분산 비율이 녹색 6.5×10⁻³, 적색 0.020(Fig 1H, n=7). 반대 반구 기록으로도 공동활성이 bleed-through가 아님을 확인(Fig S1).
- **조건별 scaling**:
  - **WR:Suc** — 둘 다 섭취 중 상승하나 scaling이 약함(지속 구간에서 둘 다 가치·섭취량과 양의 상관).
  - **FR:Suc** — **GABA는 가치·섭취량에 강하게 양의 scaling**, Glut는 상승은 하되 scaling 없음. 섭취 후 구간에서는 GABA만 직전 trial의 가치에 따라 scaling.
  - **WR:NaCl** — **GABA는 가치에 양의, Glut는 가치에 음의 scaling**(지속·섭취 후 구간 모두). 즉 혐오 용액일수록 Glut가 크다.
- **LHA^Ratio**: FR:Suc에서는 가치에 따라 양의 방향으로, WR:NaCl에서는 **양방향**(물=GABA>Glut로 상승, 고농도 NaCl=Glut>GABA로 하강). 혐오 용액에서 두 집단의 반대 scaling이 비율의 동적 범위를 넓혀 **향상된 양방향 신호**를 만든다.
- 두 집단은 혐오 용액 섭취 중 **부분적으로 탈동기화**(WR:NaCl에서 상관 감소가 가장 큼, Fig S1K).

### Result 2 — LHA는 선조체 DA를 전후축을 따라 반대 방향으로 정한다 (Fig 2)
- **자극**: LHA 양측에 Cre 의존 ChrimsonR(Vgat-Cre=GABA, Vglut2-Cre=Glut; 대조 mCherry). GRAB-DA2m을 **최대 6개 선조체 부위**(NAcCR·NAcCC·NAcShL·DMS·DLS·TS)에 동시 기록. 대조 n=6, GABA n=7, Glut n=7. 20 Hz·3초 자극에 초기(첫 1초)·지속(마지막 1초) 두 성분.
  - **LHA^GABA 자극**: 초기에는 NAcCR·NAcCC·NAcShL·DMS·DLS에서 DA↑(TS는 아님), 지속 구간에서는 NAcCR·NAcCC·NAcShL에서 DA 상승 유지.
  - **LHA^Glut 자극**: 초기에 NAcCC·TS에서 DA↑, NAcCR에서 DA↓. 지속 구간에서 NAcCR·DMS·DLS↓, **TS↑**.
  - 위치 상관: GABA 효과는 전후(AP) 축과 **양의 상관**(전측일수록 증가), 내외·배복 축과 음의 상관. Glut는 반대 패턴(AP 음, ML 양).
  - TS 평균 Z-score: 대조 0.41, GABA 1.76, **Glut 14.65**. 대조군에서도 TS의 미약한 증가로 AP 상관이 유의하게 나왔으나 크기는 훨씬 작다.
- **억제**: eNpHR3.0(대조 n=6, GABA n=6, Glut n=5). LHA^GABA 억제 → NAcCC 지속 DA↓·TS↑. LHA^Glut 억제 → NAcCR·NAcCC 지속 DA↑. 위치 상관은 자극과 대칭적으로 반대.
- **두 집단의 상호작용**: LHA^Glut를 hM4Di로 화학유전 억제하면서 LHA^GABA를 자극하면 DA가 **집단 수준에서만 약하게** 더 커졌다(개별 부위에서는 유의하지 않음, EYFP n=6 vs hM4Di n=6). 저자들은 장시간 Glut 억제가 tonic DA를 바꿨을 가능성을 들