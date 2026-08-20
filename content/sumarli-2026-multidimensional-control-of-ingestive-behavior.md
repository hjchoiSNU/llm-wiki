---
title: "LH neurotensin 뉴런의 다차원 섭취행동 조율 (Sumarli 2026)"
type: paper
created: 2026-07-28
updated: 2026-07-28
source: "raw/2026 bioRxiv. Multidimensional control of ingestive behavior by lateral hypothalamic neurotensin neurons.pdf"
authors: [Dustin Sumarli, Mary C. Loveless, Grace O. Davis, Kyle W. Schroeder, Garret D. Stuber, Gregory J. Morton, Marta E. Soden]
year: 2026
---

> [!takeaway] 연구 방향 관점의 핵심
> LH neurotensin(Nts) 뉴런은 사용자 lab의 LH-동기·[[concept-need-motivation-pleasure-utility|NMPU]] 프레임에서 **중요한 반례이자 보완축**이다. 같은 head-fixed multispout 과제에서 [[concept-dopamine-reward-system|VTA 도파민]]이 강한 **value coding**(sucrose 농도 비례)을 보이는 반면, LH-Nts는 **거의 inverse value coding**(물>sucrose)이며 **licking의 운동량(lick rate)** 을 주로 표상한다. 즉 LH-Nts는 Need(배고픔)나 Pleasure(reward value)가 아니라 **arousal·자발적 운동·novelty-driven seeking**(Motivation의 운동/각성 성분)을 담당 — [[lee-2023-lateral-hypothalamic-leptin-receptor|LH^LepR]](seeking/consummatory, 사용자 lab)·[[petzold-2023-complementary-lateral-hypothalamic-populations|Korotkova LH^Nts]](thirst 촉진·social 억제)와 직접 대비되는 세포타입 분업 증거. NMPU 성분을 LH 세포타입에 귀속시키려는 사용자 연구의 직접 참고.

# LH neurotensin 뉴런의 다차원 섭취행동 조율 (Sumarli 2026)

## 한 줄 요약
LH neurotensin(Nts) 뉴런은 licking 운동량·물 섭취를 부호화하며, 이들을 침묵(TeTox)시키면 물 섭취·체온·체중·각성·신규성 탐색·자발적 운동이 손상되나 **총 먹이 섭취(hunger/satiety)는 거의 불변** — LH-Nts는 다차원 섭취행동을 조율하는 tonic "coordinating signal"이다. (bioRxiv 2026, Marta Soden lab, UW)

## 핵심 내용

### 모델·과제
- **NtsCre 마우스**, LH에 AAV-FLEX-GCaMP6m fiber photometry + head-fixed multispout(OHRBETS) 과제. 물 / 10%·20% sucrose / 20 mM saccharin / dry spout를 5분 블록으로 제시.
- Silencing은 양측 **AAV-FLEX-TeTox**(tetanus toxin light chain); 투사 지도는 synaptophysin-GFP + Allen atlas 정량.

### Lick rate가 최대 예측인자 (activity)
- 선형혼합효과모델의 drop-one ΔAIC 분석: **lick count가 GCaMP 신호의 가장 큰 예측변수**(> solution identity, restriction state, trial).
- Dry spout(액체 없음)에도 spout 확장만으로 강한 활성 → **lick-독립 성분 + lick-의존 성분 공존**.
- **Inverse-value 경향**: lick당 신호가 **물 > 20% sucrose**(interaction 유의), 물 trial 회귀 기울기가 더 가파름. Water restriction에서 신호가 food restriction보다 큼(갈증 상태 부스팅).
- **VTA-DA와 대비**: 동일 과제에서 도파민 뉴런은 sucrose 농도 비례 value coding·저가치 음성반응을 보이나(Bernstein 2025), LH-Nts는 solution identity 무관·물 선호로 **거의 반대 패턴**. LH-Nts는 DA로의 입력 중 하나일 뿐.

### Silencing 표현형 (인과)
- **행동**: multispout·물-only 세션에서 licking 감소(특히 초반 trial), 20% sucrose 총량은 보상적으로 불변. Food restriction 하에서는 저/무열량(10% sucrose·saccharin)만 감소, **최고열량(20% sucrose)은 무차이** → 에너지 요구에 민감.
- **대사(6주)**: 체중↓·**지방량↓(lean mass 불변)**, **24 h 총 food intake·meal 구조 불변**, **물 섭취 유의 감소**(만성 경미 탈수·skin turgor↓), locomotor↓(특히 dark cycle), EE 불변이나 dark-cycle **RER↑**(탄수화물 이용 이동)·**core body temperature↓(저체온)**.
- **고열량식**: HFD·Ensure에서 대조군과 같은 속도로 증량(섭취량 동일)하나 수술 전 체중은 못 따라잡음 → 열량밀도 높으면 섭취 정상.
- **DTA ablation(Brown 2018)과 상반**: DTA는 체지방↑·orexin 뉴런 감소; 본 TeTox는 orexin 뉴런 수 불변 → 불일치는 인접 orexin 부수손상 차이로 설명.

### 무엇을 표상하나: novelty·자발적 운동
- 고형식 operant: sucrose pellet head-entry에 활성, **Day1 초기 trial에서 신호 큼(novelty 성분, 학습되며 감소)**. **Omission trial 무반응 → reward prediction error가 아님**.
- Operant 손상: pellet 획득↓, 일부는 lever press 0회·FED3에서 48 h <10 pellet(**novel food source engagement 실패**). 단 sucrose preference(anhedonia)·chow 섭취·학습된 FR 정상.
- **Volitional vs reflexive movement 분리**: 신규 arena 첫 bite 지연·exploratory hyperlocomotion 소실·running wheel↓·nestlet shredding↓(자발적 운동 결손). LH-Nts 활성은 movement velocity와 양의 상관(r≈0.166). 그러나 **footshock 반사적 flight/freezing·conditioned freezing은 보존** → 자발적 운동 특이적.
- **광범위 투사**: 갈증(OVLT·MEPO·SO·PVH·PBN·NTS), 각성(LC·LDTg·VLPO·SI), reward(VTA·PAG·DR·BST), **facial/jaw motor control(MEV·SUT, 삼차운동핵 둘러쌈)**, 대사(ARH·DMH·VMH), 체온(MEPO·VMPO·DMH) → 다중 회로 조율 가설.
- **세포 이질성 미해결**: leptin-반응 vs dehydration-반응 하위집단(Brown 2019), Tac1 vs Crh 전사체 아형(Mickelsen 2019); 투사특이 분업은 미결.

## 관련 페이지
- [[concept-neurotensin]] — Nts 펩타이드/신호계 개념 hub (본 논문이 주요 근거).
- [[concept-lateral-hypothalamus]] — LH 동기 통합 hub; LH-Nts를 세포타입 축에 추가.
- [[petzold-2023-complementary-lateral-hypothalamic-populations]] — Korotkova LH^Nts(thirst 촉진·social 억제) vs LH^LepR; 본 연구가 LH-Nts thirst 역할을 기능적 silencing으로 보강.
- [[korotkova-2026-balancing-acts-lateral-hypothalamic]] — LH 3-drive arbitration; LH-Nts = drive component.
- [[rossi-2023-control-of-energy-homeostasis]] · [[chen-2025-the-integrated-function-of-the]] — LHA 세포타입(Vgat/Vglut2·Nts) 종합; LHA^Nts 프레임 대응.
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] — LH^LepR seeking/consummatory (사용자 lab); LH-Nts와 세포타입 대비.
- [[kim-2024-normative-framework-dissociates-need]] — AgRP=Need / LH LepR=Motivation; LH-Nts는 Motivation의 arousal/movement 성분.
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — LH·eating 종합 (사용자 lab).
- [[person-soden-marta]] — 교신저자·PI. LH-Nts↔VTA 신경펩타이드 회로.
- [[person-korotkova-tatiana]] — LH-Nts 상보 arbitration 연구자.
- [[concept-dopamine-reward-system]] · [[concept-need-motivation-pleasure-utility]] — VTA-DA value coding 대비, NMPU 축 배치.
- [[gazit-shimoni-2025-changes-in-neurotensin-signalling-drive]] — **출처 대비**: LH^Nts는 음수·운동을 촉진하는 반면, NAcLat^Nts→VTA는 hedonic feeding을 매개하고 비만에서 감소한다. VTA 내 NTS 출처별 통합은 미해결 (Nature 2025).
