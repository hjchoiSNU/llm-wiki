---
title: "Lateral hypothalamus CaMKIIα neurons encode novelty-seeking signals to promote predatory eating (Tan 2022, Research)"
type: paper
created: 2026-10-03
updated: 2026-10-03
source: "raw/Lateral Hypothalamus Calcium:Calmodulin-Dependent Protein Kinase II α Neurons Encode Novelty-Seeking Signals to Promote Predatory Eating.pdf"
authors: [Na Tan, Jiaying Shi, Lingyu Xu, Yanrong Zheng, Xia Wang, Nanxi Lai, Zhuowen Fang, Jialu Chen, Yi Wang, Zhong Chen]
year: 2022
journal: "Research (AAAS/Science Partner Journal) 2022, Article ID 9802382, 19 pages; doi:10.34133/2022/9802382 (Open Access CC BY 4.0)"
---

> [!takeaway] 연구 방향 관점의 핵심
> **포식 행동(predatory hunting)을 "신규성 탐색 → 추격·공격 → 섭취"의 연속체로 보고, 그 마지막 단계인 *섭취(predatory eating)* 를 담당하는 LH 노드로 CaMKIIα⁺ 뉴런을 지목한 논문.** 선행 LH 포식 연구들(LH^GABA→PAG)은 공격까지만 몰고 죽인 먹이를 **먹지 않았는데**, 이 논문의 **MPOA^CaMKIIα → LH^CaMKIIα → vPAG** 간접 경로는 공격과 **섭취까지** 묶는다. 사용자 연구에 닿는 지점: (1) **[[concept-appetitive-consummatory-phases|appetitive/consummatory]] 분업의 교과서적 반례** — LH^CaMKIIα 칼슘 신호는 탐색·공격 중 **높고 섭취가 시작되면 떨어지는데**(= appetitive 코딩), 광자극하면 **섭취가 폭증한다**([[concept-npy-agrp-neurons|AgRP]]와 같은 "활동 부호 ↔ 인과 효과" 비대칭). (2) **[[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]] 매핑** — MPOA→LH 경로는 Motivation(탐색·추격)만, LH→vPAG 경로는 Motivation + **Utility(섭취 허가)** 를 함께 옮기는 두 단계 구조로 읽을 수 있다(*연결 가설*). (3) **세포 정체성 경고** — 이 논문의 "LH^CaMKIIα"는 transgenic line이 아니라 **AAV-CaMKIIα 프로모터**로 정의되었고, 그중 **63.87%만 vGluT2⁺**, 나머지 **36.13%는 vGluT2⁻·비GABA성 미확인 집단**이다. 저자들은 기능의 주역을 바로 그 36%로 돌린다. [[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]]의 "LH는 분자 정체로 정의해야 한다"는 요구와 정면으로 만나는 사례다.

# Tan et al. 2022 — LH CaMKIIα⁺ neurons encode novelty-seeking → predatory eating (Research)

- **저널**: *Research* (AAAS Science Partner Journal, Science and Technology Review Publishing House) 2022, Article ID 9802382, 19 pages. 접수 2022-02-15, 채택 2022-06-24, 출판 2022-08-08. DOI: 10.34133/2022/9802382. CC BY 4.0.
- **소속·lab**: 저장대학교(Zhejiang University) 약학원 약리독성학연구소 + 저장중의약대학 신경약리·중의중약 중점실험실. 교신저자 **Zhong Chen**(chenzhong@zju.edu.cn) — 통칭 **Chen lab**. 제1저자 **Na Tan**. (논문 안 행동 실험 경로 이름을 "CL = Chen Lab"으로 그렸다.)
- **모델·방법**: 수컷 C57BL/6J (SLAC) 중심. 유전자변형 라인은 **CaMKIIα-ires-cre (JAX 005359)**, **Vgat-ires-cre (016962)**, **vGluT2-ires-Cre (016963)**, **Ai47**(Cre 의존 GFP 삼중 cassette). 좌표(bregma 기준): **LH (AP −1.3, ML ±1.0, DV −5.0)**, **MPOA (AP +0.3, ML +0.2, DV −5.3)**, **vPAG (AP −4.2, ML −0.5, DV −2.3)**. 바이러스 0.1 μL, 20 nL/min, 주입 4주 후 행동. 광자극 **473 nm, 3–5 mW, 10 ms, 20 Hz, 30 s on/10 s off, 5 min**; 억제 **589/594 nm, 3–5 mW**(ArchT). 화학유전 **CNO 1.0 mg/kg i.p.**. 모든 행동 실험 09:00–17:00.

## 한 줄 요약
LH의 **CaMKIIα 프로모터로 표지되는 뉴런**은 신규 물체 접촉·포식 공격 때 칼슘 활성이 치솟고 섭취가 시작되면 떨어지는데, 광자극하면 well-fed 마우스가 물체를 쫓아 물고 크리켓을 사냥해 **끝까지 먹어 치우며**, 이 신호는 상류 **MPOA^CaMKIIα**(신규성 탐색 정보)에서 받아 하류 **vPAG**로 내보내는 간접 회로로 전달된다 — 즉 "사냥까지만" 몰던 기존 LH^GABA→PAG 회로와 달리 **포식의 섭취 단계**를 붙이는 평행 경로다.

## 핵심 내용

### 배경 — 왜 "predatory eating"인가
- 포식은 탐색/exploration → 추격 → 물기 → 포획 → 회수 → **소비**의 순차 행동이다. 신규성 탐색(novelty exploration)이 그 첫 단계다.
- 선행 회로들은 모두 **PAG 수렴**이지만 **소비를 포함하지 않는다**: ZI^GABA→PAG(먹이 시각·수염 신호 통합), CeA→PAG(추격 중 운동), **PAG 투사 LH^GABA 활성 → 즉각 포식 공격**, **PAG 투사 LH^Gad2⁺ → 포식 사냥**(단, 소비는 아님). MPOA–PAG 회로도 신규 물체 탐색 + 공격까지만 몰고 **먹이 소비는 없다**.
- 이 논문의 질문: **신규성 탐색 정보가 어떻게 "포식 섭취"로 전환되는가**.

### Figure 1 — LH^CaMKIIα는 신규 물체 탐색을 부호화하고, 활성화는 물체 추격·물기·비선택적 섭식을 유발
- **광섬유 광도측정**: `AAV-CaMKIIα-GCaMP6s`(AAV2/9, 2.05×10¹² vg/mL, 0.1 μL)를 LH에 일측 주입. 특이성 검증 — LH에서 **GCaMP6s 발현 857개 중 844개가 CaMKIIα 면역양성(98.48%, 2마리)**.
- 익숙한 환경에 **신규 물체** 투입: 코로 접촉하는 순간 형광이 급상승, **입으로 물어 옮기는 동안 고수준 유지**, 내려놓으면 즉시 하강. **n=5마리 × 3회 반복**, 접촉 전 2 s vs 후 2 s 비율 비교에서 유의(paired t-test, ****P<0.0001).
- **광유전 활성화**: `AAV-CaMKIIα-hChR2(H134R)-EYFP`(AAV2/8, 1.7×10¹³ vg/mL). 473 nm 조명 즉시 아레나 전체를 탐색, 빨간 Styrofoam cube를 코·앞발로 만지고 **입으로 물어 끌고 다님**. 물체 종류(플라스틱 공, 나무, 면봉, 플라스틱 뚜껑, 가위)에 따라 상호작용 양식이 달랐다(짧은 나무막대는 입으로 운반, 탁구공은 두 앞발로 껴안고 물기).
- 정량(**n=6, one-way ANOVA + Dunnett**): 회수 개시 **잠복기 ↓**(****P<0.0001), 물체 이동·물기 **지속시간 ↑**, 물체를 물고 이동하는 **평균 속도 ↑**, **이동 거리 ↑**.
- **촉각 비의존·시각 의존**: 물체를 공중에 매달아 수염으로 감지 불가·점프 없이는 획득 불가하게 만들어도, LH^CaMKIIα 활성화 시 **뛰어올라 물고 떨어졌다**.
- **움직이는 위협 → 추격 전환**: 탁구공을 막대에 묶고 "**CL**"(Chen Lab) 경로로 손으로 움직였다. 광자극 off에서는 공을 피했으나, on에서는 바짝 추격해 물려 했고 **마우스 궤적이 "CL" 모양으로 재현**되었다. "C"를 마친 뒤 빛을 끄면 즉시 추격을 멈추고 무작위 이동.
- **물기**: **0.5 g 솜뭉치** 투입 → 활성화 시 격렬히 물어 **3분 만에 산산조각**. 단 **솜 무게는 줄지 않았고**(= 섭취가 아니라 물기), 물기 잠복기 ↓ / 지속시간 ↑ (n=6, ****P<0.0001).
- **섭식**: **well-fed** 마우스가 광자극 중 사료 펠릿을 탐욕스럽게 물고 삼켰다 — 3분 섭취량 유의 증가(n=6, paired t-test ****P<0.0001). 또한 **식용 > 비식용 선호가 사라졌다**(비선택적 섭식).
- **사회 vs 비사회 경쟁**: 발정기 암컷 + 비사회 물체 동시 제시. 빛 off에서는 구애(추격·냄새맡기·마운팅) 중심, on에서는 **주의가 물체로 급격히 이동**(interaction index, n=6, ****P<0.0001 / ***P<0.001).
- **사회 공격은 아니다**: 공격적 수컷 침입자 + 신규 물체 동시 제시. 빛 on에서 마우스는 **침입자를 무시하고 물체를 회수**했고, 자극 구간 동안 **공격 발생이 전무**했다(n=6, ****P<0.0001). → LH^CaMKIIα는 social aggression이 아니라 **predatory attack** 쪽이다.

### Figure 2 — 실제 포식 중 활동 부호, 그리고 양방향 인과
- **크리켓 사냥(12 h 금식 유도)**: 크리켓을 물기 시작하는 순간 GCaMP 형광이 급등해 **사냥 전 과정 고수준 유지**, 그런데 **이어지는 소비(consumption) 동안에는 하강**했다(n=5 × 3회, one-way ANOVA + Dunnett, ****P<0.0001). **자유 보행 중에는 형광 변화가 없었다** → 단순 운동 artifact가 아님.
- **사료 펠릿**: 금식 마우스는 먼저 펠릿과 상호작용해 식용성을 확인 — 이때 Styrofoam 탐색과 **같은 패턴의 급성 상승**, 이후 **먹는 동안 급락**, 식사 종료 시 기저선 복귀(Figs 2(c)–2(e), ****P<0.0001).
- 저자 해석: LH^CaMKIIα는 **appetite(식욕) 자체를 부호화**한다 — 음식을 못 얻은 상태에서 높고, 공급되면 즉시 억제된다.
- **광유전 활성화(ChR2)**: 발현 특이성 **591개 중 578개 CaMKIIα 양성(97.80%)**. ① 비식용 **전동 인공 먹이**(빠르게 움직이며 장애물 회피) — off에서는 회피, on에서는 **즉시 추격·물기·붙잡기·구속**. ② **cricket-naïve·well-fed** 마우스에서 실제 크리켓에 대해 **머리를 겨눈 치명적 물기 + 앞발 고정 + 사체의 탐욕적 섭취**. 자극을 끄면 **즉시 크리켓을 버리고 완전히 무시**. 정량: 사냥 잠복기 ↓(Fig 2(g)), 사냥 지속 ↑(2(h)), **크리켓 섭취 지속 ↑**(2(i)), **주어진 크리켓 5마리 전부 공격·섭취**(2(j)) (n=6, paired t-test, ****P<0.0001 / ***P<0.001 / **P<0.01).
- **화학유전 억제(필요성)**: `AAV-CaMKIIα-hM4D(Gi)-mCherry`(AAV2/8, 1.4×10¹³ vg/mL) 양측. 특이성 **495개 중 482개(97.37%)**. **CNO 1.0 mg/kg i.p.** 투여 시, 금식 마우스가 **크리켓에 흥미를 잃었다**(잠복기 ↑ / 사냥 지속 ↓ / 섭취 지속 ↓; n=6, paired t-test ****P<0.0001 / ***P<0.001).
- → LH^CaMKIIα는 포식 섭취에 **충분하고 필요**하다.

### Figure 3 — CaMKIIα^LH→vPAG 투사: "칼로리 식품 식별"에 특화
- 해부: LH^CaMKIIα 축삭의 주요 시냅스 표적은 **vPAG(= lPAG + vlPAG)**, 세포체 자극 후 vPAG에 Fos 발현.
- **세포체 자극과 다른 표현형**: 말단 자극 시 마우스는 물체를 **물기만 하고 제자리에 머물며 옮기지 않았다**. 솜뭉치는 똑같이 조각났다. 물기 잠복기 ↓ / 지속 ↑, 그러나 **평균 속도 ↓ / 이동거리 ↓**(물기에 몰입). (n=6, one-way ANOVA + Dunnett, ****P<0.0001 / **P<0.01 / *P<0.05) → **구강 운동(maxillofacial) 과잉은 vPAG 경로, 전신 운반은 다른 경로**라는 가설.
- **섭식은 유발된다**: 식용 펠릿 제시 시 말단 자극이 **탐욕적 섭식**을 유발(paired t-test ****P<0.0001).
- **식별력**: 같은 "CL" 추격 과제에서 **탁구공은 거의 쫓지 않았고**(비식용 무관심), **칼로리 식품으로 바꾸면** 빛 전달 중 "C"·"L" 경로를 따라 **열심히 추격**했다. 빛을 끄면 무작위 이동.
- 암컷보다 물체 선호 ↑, 사회 공격 없음(****P<0.0001, Dunn's).
- **실제 크리켓**: 말단 자극 → 덮치고 입·앞발로 격렬히 공격, 구속 후 **빠르게 섭취**, **5분 내 모든 크리켓 사냥·소비**(n=6, paired t-test ****P<0.0001 / **P<0.01).
- **vPAG 역추적(CT-B 647)**: vPAG 투사 LH 뉴런 **91개 중 49개(53.85%)가 CaMKIIα⁺**, 별도로 **151개 중 67개(44.37%)가 GABA⁺**. → vPAG는 LH에서 **GABA성·CaMKIIα성 두 투사를 모두 받는다**.

### Figure S1 ★ — 분자 정체성: "scarcely GABAergic, 64%만 vGluT2⁺, 기능은 vGluT2⁻ 36%가 주도"
- **GABA 여부**: **Vgat-cre × Ai47** 교배로 GABA 뉴런을 GFP로 표지한 뒤 CaMKIIα 면역표지 → LH CaMKIIα⁺ 뉴런은 GABA성 뉴런과 **"거의 겹치지 않았다"(scarcely overlapped)**. ⚠️ **본문에 수치가 제시되지 않았다**(Fig S1(a) 정성 서술).
- **vGluT2 여부**(Fig S1(b)): 표적 LH에서 **vGluT2⁺ 426개 중 412개(96.71%)가 CaMKIIα⁺** — 즉 **vGluT2 뉴런은 거의 전부 CaMKIIα⁺**. 역방향으로는 **CaMKIIα⁺ 645개 중 412개(63.87%)만 vGluT2⁺** → **36.13%의 CaMKIIα⁺ 뉴런은 vGluT2⁻이면서 GABA성도 아닌 미확인 집단**.
- **그 36%를 직접 겨냥**: `AAV-CaMKIIα-DO-GCaMP6s`(**DO = Cre-OFF**, AAV2/9, 5.28×10¹² vg/mL)를 **vGluT2-cre** 마우스 LH에 주입 → **CaMKIIα⁺vGluT2⁻** 뉴런만 표지. 12 h 금식 후 크리켓 제시 → 추격 시작과 함께 형광 즉시 상승, 물기·붙잡기 동안 고수준 유지(Fig S1(d-e)).
- **vGluT2⁺ 제거 후 재검증**: `AAV-CMV-DIO-caspase3-TEVp-WPRE`(4.37×10¹² vg/mL)를 vGluT2-cre 마우스 LH에 주입해 **vGluT2⁺ 뉴런을 사멸**시키고, 같은 LH에 `AAV-CaMKIIα-ChR2-EYFP`를 감염 → **vGluT2⁺가 전멸해도 CaMKIIα-ChR2 발현은 풍부**했다(Fig S1(f-g)).
  - ★ **well-fed 마우스가 광자극 없이도 크리켓을 자발적으로 사냥**했다(Fig S1(k-n)).
  - 그 위에 **vGluT2⁻ CaMKIIα⁺ 광자극** → 더 빠르고 격렬한 사냥 + 사료 섭취 ↑(Fig S1(o)).
- → 저자 결론: **포식·섭식 촉진의 주역은 LH CaMKIIα⁺vGluT2⁻ 뉴런**이며, 선행 연구의 "LH^vGluT2 활성 → 섭식 억제"와의 모순은 LH glutamatergic 집단의 **극단적 이질성** 때문이라고 본다.

### Figures 4–5 — 상류 MPOA^CaMKIIα: 탐색·사냥은 몰지만 **섭취는 몰지 않는다**
- **CT-B 647을 LH에 국한 주입** → 전뇌 역추적에서 **MPOA의 조밀한 투사**를 확인. **LH 투사 MPOA 뉴런 340개 중 284개(83.53%)가 CaMKIIα⁺**.
- **기능 연결**: MPOA에 `AAV-CaMKIIα-hChR2-EYFP` → 세포체 30분 자극 후 전뇌 Fos. LH와 PAG에 축삭·Fos 풍부. **LH 내 Fos⁺ 243개 중 88.06%가 CaMKIIα⁺** → MPOA^CaMKIIα는 LH의 **CaMKIIα 뉴런을 선택적으로 켠다**.
- **직접 흥분 입증**: **CaMKIIα-cre** 마우스 MPOA에 `AAV-hSyn-DIO-ChrimsonR-mCherry`, LH에 `AAV-EF1α-DIO-GCaMP6s` → MPOA 광자극이 LH CaMKIIα 칼슘을 즉시 상승(paired t-test ****P<0.0001).
- **MPOA 세포체 자극**(Fig S3): 신규 물체 탐색·"CL" 추격·솜뭉치 물기·물체 > 암컷 주의 이동은 LH와 **동일**. 그러나 결정적 차이 — **사료 펠릿을 옮기기만 하고 먹지 않았다**(Fig S3(r)). MPOA GCaMP 특이성은 243개 중 **96.71%**.
- **MPOA 포식 활동·필요성**(Fig S4): 크리켓 포식 중 활성 ↑ → 사체 소비 중 ↓ → 종료 시 기저선. 광자극은 인공 먹이·실제 크리켓 추격·물기·포획을 유발하지만 **자기가 죽인 크리켓을 먹지 않고 그 위에 버티고 서 있었다**. `AAV-CaMKIIα-ArchT-EGFP`(AAV2/8, 1.61×10¹³ vg/mL; 특이성 **552개 중 547개 = 99.09%**) 광억제는 **본능적 식욕에 의한 포식을 폐지**했으나 **이동거리·속도는 불변**. 추가로 **MPOA 전기 병소(direct current)** → 12 h 금식 후에도 5분 내 추격·사냥 시도 없음, 그러나 **정상 사료 섭취는 보존**.
- **MPOA→LH 말단 자극**(Fig 5): LH에 Fos 유발, 세포체 자극과 동일하게 물체 탐색·매달린 물체로 점프·회수·추격·물기 유발(n=6, ****P<0.0001). 물체 > 암컷 선호(Fig S5), 사회 공격 없음. **well-fed 마우스에서 크리켓 추격·공격·포획·회수는 유발하지만 사체를 먹지 않았고**(Fig 5(u)), **사료 펠릿도 회수만 하고 먹지 않았다**(Fig 5(o), paired t-test **P=0.7926**).
- **MPOA→LH 말단 광억제**(ArchT, 589 nm, 3–5 mW, 50 ms, 20 Hz, 5 min): 금식으로 격렬히 포식하던 마우스의 포식 행동이 **극단적으로 억제**됨(Fig 5(v-y), ****P<0.0001 / **P<0.01).
- → **CaMKIIα^MPOA→LH는 사냥 동기는 만들지만 먹으려는 식욕(appetite to consume)은 만들지 않는다.**

### Figure 6 — MPOA→LH→vPAG 간접 경로의 구조·기능 확정과 한계
- **단시냅스 역추적 rabies**: **CaMKIIα-cre** 마우스 LH에 `AAV-Ef1α-DIO-EGFP-TVA` + `AAV-Ef1α-DIO-RVG` → 3주 후 **vPAG**에 `RV-EnvA-ΔG-dsRed`. LH에 노란 starter cell, vPAG에 붉은 축삭 말단, 그리고 **MPOA의 RV 표지 세포가 CaMKIIα⁺** → **vPAG로 투사하는 LH CaMKIIα 세포가 MPOA CaMKIIα 입력을 받는다**는 3자 연결 확정.
- **기능 연결**: MPOA(CaMKIIα-cre)에 ChrimsonR + LH에 `AAV-Ef1α-DIO-axon-GCaMP6s`(3.58×10¹² vg/mL) + vPAG에서 광도측정 → MPOA 자극 시 **vPAG 내 LH 축삭 신호 즉시 상승**(paired t-test ****P<0.0001).
- **경로 차단 실험의 한계(저자 자인)**: MPOA에 ChR2 + LH에 hM4Di를 동시에 넣고 **CNO 1.0 mg/kg**로 LH CaMKIIα를 억제한 상태에서 MPOA→LH 말단을 자극해도 **non-appetitive hunting은 여전히 나타났다**(Fig S6). 저자는 말단 자극의 **역행성 세포체 활성화**로 MPOA→vPAG **직접** 경로가 대신 작동했을 가능성을 들고, **CaMKIIα^MPOA-vPAG와 CaMKIIα^MPOA-LH-vPAG가 보상적(compensatory)** 이라고 해석한다. ⚠️ 즉 **LH 필요성은 이 디자인으로 분리되지 않았다**.
- **vPAG 투사 LH 뉴런의 조성(Fig S7)**: 약 **56.60% GABAergic / 40.57% glutamatergic**.
- **요약 모델(Fig 6(k))**: MPOA^CaMKIIα → (LH^CaMKIIα 중계) → vPAG. **MPOA→LH→vPAG 간접 경로 = 포식 + 섭취**, **MPOA→vPAG 직접 경로 = 포식만(소비 없음)**.

### Discussion에서 저자들이 스스로 꺼낸 긴장
- **LH^GABA 계열과의 분리**: vPAG 투사 LH^GABA / LH^Gad2⁺는 포식 사냥을 부호화하지만 **소비는 아니다**. 면역조직화학에서 GABA와 CaMKIIα가 겹치지 않고, CT-B 역추적에서 vPAG가 양쪽을 다 받으므로 → **GABA^LH-vPAG = non-appetitive hunting, CaMKIIα^LH-vPAG = appetitive hunting** 의 두 별개 투사.
- **"LH glutamatergic = brake"와의 충돌**: 선행 보고는 vPAG 투사 LH glutamatergic이 **위험 예측·회피**를, 다른 LH glutamatergic은 **방어 행동 촉진·섭취 억제**를 한다. 이 논문은 **96.71%의 vGluT2⁺가 CaMKIIα⁺인데도 CaMKIIα 전체 자극 시 회피 징후가 전혀 없었다**고 보고하며, **36.13%의 소수 집단이 행동 표현형을 지배한다**고 주장한다. "그 작은 비율이 어떻게 회피 구동을 압도하는지는 추후 연구 과제"라고 명시.
- **CeA와의 분업 가설**: CeA는 reticular formation으로 물기 공격을, PAG로 추격 운동을 보낸다. 이 논문의 CaMKIIα^LH-vPAG는 **구강 운동(물기)** 담당이고 **물체 운반용 운동 경로는 별도**일 것이라 추정.
- **PAG 내부 분업 인용**: PAG^vGat은 탐색·추격·공격(섭취 아님), PAG^vGluT2는 공격만.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **[[concept-appetitive-consummatory-phases|appetitive/consummatory]] 틀의 "활동 부호 ↔ 인과 효과" 비대칭 사례 추가**: LH^CaMKIIα는 광도측정상 **appetitive 코더**(탐색·공격에서 최고, 섭취 개시와 함께 하강)인데, 광자극은 **consummatory 행동을 폭증**시킨다. 이 비대칭은 [[concept-npy-agrp-neurons|AgRP]]에서 잘 알려진 형태다 — 활동이 "결핍 신호"이고 조작이 "그 신호가 지시하는 행동"을 강제하는 구조. phase 표에 LH^CaMKIIα 행을 넣을 때 **활동 열과 인과 열을 반드시 분리**해야 한다.
- **[[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]] 2단 매핑 가설**: MPOA^CaMKIIα→LH는 **Motivation(탐색·접근·추격의 활성화 성분)** 만 전달하고, LH^CaMKIIα→vPAG가 거기에 **Utility(먹을 가치가 있다는 허가)** 를 더한다. 검증 지표: MPOA→LH 말단 자극은 Need(금식) 수준과 무관하게 추격을 켜는가(= Motivation 순수 성분), LH→vPAG 자극의 섭취량은 Need에 따라 배율이 변하는가(= Need×Pleasure 곱셈). 원문은 well-fed/금식 두 조건을 섞어 썼을 뿐 2×2 설계를 하지 않아 판정 불가.
- **[[kim-2024-normative-framework-dissociates-need|Need vs Motivation 해리]] 설계에 쓸 수 있는 자연 행동 축**: "비식용 물체를 끈질기게 물고 다니는" 행동은 **Need가 0인 상태의 순수 Motivation 출력**이다. 사용자 lab의 normative framework를 operant 과제 밖 **본능 행동(hunting/object retrieval)** 으로 확장할 때의 행동 지표 후보 — 특히 **"식용 > 비식용 선호가 사라진다"**(Fig 1 Video S4)는 utility 비교 기능의 선택적 붕괴로 읽을 수 있다.
- **[[lee-2023-lateral-hypothalamic-leptin-receptor|LH^LepR]]와 교차 가설**: 사용자 lab의 LH^LepR seeking/consummatory 2분할은 GABA성 집단 안의 분업이다. 이 논문의 CaMKIIα⁺vGluT2⁻ 36% 집단이 **LepR·Nts·Gal 중 어느 분자 정체와 겹치는지**는 완전히 미검증 — [[mickelsen-2019-single-cell-transcriptomic-analysis-of|Mickelsen 2019]] census에서 **Vgat⁻·Vglut2⁻ 또는 저발현 LHA 뉴런**(펩타이드 우세 클러스터) 쪽을 조회해 후보를 좁힐 수 있다.
- **[[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]] 리뷰의 "분자 정체로 정의하라"는 요구의 반면교사**: 이 논문은 **프로모터 기반 정의**로 강력한 행동 표현형을 얻었으나, 그 표현형의 주역을 "기존 마커로 정의되지 않는 36%"로 돌림으로써 결국 **세포 정체를 미정으로 남겼다**. 사용자 lab 리뷰에 **"프로모터 정의 집단의 해석 한계"** 사례로 인용 가치가 있다.
- **임상 번역 각도**: LH^CaMKIIα 활성은 **식용·비식용 구별 없는 섭식(pica 유사)** 과 **사회 상호작용에서 물체로의 주의 강제 이동**을 동시에 만든다. 인간 쪽에서 LHA DBS([[overview-lateral-hypothalamus-synthesis|LH 종합]] 참조)의 비선택적 자극이 왜 섭식 외 행동 부작용을 낼 수 있는지에 대한 회로 수준 설명 후보.

## ⚠️ 위키 내 충돌·긴장
- **"LH^Vglut2 = brake(섭식 ↓·혐오)" 프레임과의 정면 충돌** — [[stuber-2016-lateral-hypothalamic-circuits-for|Stuber 2016]]·[[jennings-2013-the-inhibitory-circuit-architecture|Jennings 2013]]·[[rossi-2019-obesity-remodels-activity-and|Rossi 2019]]·[[rossi-2021-transcriptional-and-functional-divergence|Rossi 2021]]은 LHA^Vglut2 활성 → 섭취 ↓·혐오로 일관되게 적는다. 이 논문은 **vGluT2⁺의 96.71%가 CaMKIIα⁺인 집단을 통째로 켜고도 섭취 폭증·회피 전무**를 보고한다. ⚠️ 두 결과를 **병기**해야 한다: (a) 이 논문은 캘리브레이션된 섭취량이 아니라 well-fed 3분 펠릿 섭취·크리켓 사냥을 지표로 썼고, (b) 저자 자신의 봉합 시도는 "vGluT2⁻ 36%가 지배한다"인데 그 36%의 **세포 정체는 미규명**이며, (c) `AAV-CaMKIIα` 프로모터 발현량과 내인성 vGluT2 발현량의 관계도 측정되지 않았다. 흥미롭게도 **caspase3로 LH vGluT2⁺를 전멸시키면 well-fed 마우스가 자발적으로 사냥을 시작한다**는 Fig S1 결과는 **"Vglut2 = brake" 쪽을 오히려 지지**한다 — 즉 같은 논문 안에 양쪽 증거가 공존한다.
- **"LH CaMKIIα는 GABA와 거의 겹치지 않는다"는 주장의 취약성** — 본문에 **수치 없이 정성 서술**(Fig S1(a))로만 제시된다. 같은 시기 LH CaMKIIα 뉴런을 수면·운동 축에서 분해한 PNAS 연구(Heiss, Zhong, Lee, Yamanaka & Kilduff 2024, *PNAS* 121(16):e2316150121 — 본 위키의 별도 LH CaMKIIα 논문 페이지 참조)는 **LH CaMKIIα 발현 뉴런 중 "작지만 유의한 비율이 GABAergic"** 이며, 그 GABA성 부분집합을 선택적으로 제거하면 **운동 활동(LMA)만 둔화되고 수면 구조는 불변**임을 보고한다. 두 논문은 **같은 프로모터·같은 영역을 쓰면서 GABA 혼입 여부를 반대로 결론**한다. ⚠️ 어느 쪽이 맞다고 단정하지 말고 **프로모터 정의 집단의 재현성 문제로 병기**할 사항이다(항체·reporter·AAV serotype·역가·AP 좌표가 모두 다르다: 이 논문 AP −1.3 / AAV2/8·2/9, PNAS 연구 AP −1.4 / AAV8).
- **[[jia-2026-novelty-exploration-activated-ensemble-in|Jia 2026]]의 LH novelty ensemble과의 관계** — 둘 다 **LH가 신규성(novelty)을 부호화**한다고 하지만 세포 정체가 어긋난다. Jia는 Fos-TRAP ensemble이 **Vgat⁺와 Vglut2⁺ 양 subtype 모두에서 효과**가 있다고 하고, Tan은 **CaMKIIα⁺(≈비GABA)** 를 지목한다. 또 **행동 출력이 다르다**: Jia의 novelty ensemble은 **진통·항불안·CPO(보상)** 를, Tan의 CaMKIIα 집단은 **추격·물기·섭취**를 만든다. 두 ensemble이 같은 세포인지 전혀 미검증 — 교차 검증 방법은 Tan의 `AAV-CaMKIIα-DO-GCaMP6s`(Cre-OFF) 전략을 Fos-TRAP과 결합하는 것이다(연결 가설).
- **[[lee-2026-distinct-lateral-hypothalamic-gabaergic|Lee 2026]]·[[liu-2026-granular-motivational-interaction-and|Liu 2026]]의 "LH^GABA 내부 분업"과 평행 축** — Lee 2026은 LH^Vgat 안에서 **salience ensemble vs value-scaled consumption ensemble**을, Liu 2026은 **LH^GABA = initiation hub**를 본다. Tan은 같은 "탐색 vs 섭취" 분업을 **GABA 밖(CaMKIIα)·투사 표적별(soma vs vPAG terminal)** 로 그린다. ⚠️ 즉 위키에는 지금 **동일한 기능 이분법이 서로 다른 세포타입 좌표계에서 세 번 독립적으로 보고**되어 있다 — 수렴하는 상위 원리일 수도, 비특이 조작이 같은 행동 축을 반복적으로 끌어낸 결과일 수도 있다(병기).
- **[[liu-2023-an-iterative-neural-processing|Liu 2023]]과의 부분 수렴·부분 불일치** — Liu 2023은 LH^GABA(GAD2)가 **비식용 플라스틱 물체에도 먹이와 같은 접근·접촉 반응**(R=0.556)을 보이고 **긴 접촉 전에 신호가 소실**되어 "개시 전담"이라 결론했다. Tan의 LH^CaMKIIα도 **비식용 물체 물기·운반**을 강하게 만들고 **섭취 시작과 함께 활동이 떨어진다** — 방향이 같다. ⚠️ 그러나 Tan의 **인과 조작은 섭취 자체를 늘린다**(Liu의 "개시 전담" 분류와 불일치)는 점, 세포 정체가 GABA vs 비GABA로 반대인 점에서 직접 대응시킬 수 없다.
- **[[concept-medial-preoptic-area|MPOA]] 페이지의 "MPOA는 섭식 회로와 경쟁한다" 프레임과의 긴장** — 위키 MPOA 항목은 **흥분성 MPOA 활성이 섭식을 억제**하고 AgRP·절식이 MPOA를 억제해 양육을 끈다고 적는다. Tan의 MPOA^CaMKIIα(흥분성) 자극은 **섭식을 유발하지 않는다**는 점에서 정합하지만(펠릿을 옮기기만 함, P=0.7926), **포식 사냥 동기는 강하게 켠다**는 새 축을 추가한다. ⚠️ MPOA 전기 병소가 **포식만 없애고 정상 사료 섭취는 보존**한다는 결과는 "MPOA = 섭식 억제자"보다 **"MPOA = 비섭식 표적 추구의 활성화자"** 쪽에 가깝다. 병기 필요.
- **[[concept-zona-incerta|ZI]]와의 평행 경로 문제** — ZI^GABA→PAG도 "appetite-driven hunting"을 부호화한다고 보고되었다. 지금 위키에는 **PAG로 수렴하는 포식 경로가 LH^GABA, LH^CaMKIIα, ZI^GABA, CeA, MPOA 직접으로 최소 5개** 적혀 있고, 각 논문이 자기 경로의 **필요성**을 주장한다. Tan 자신의 Fig S6(LH 억제에도 MPOA→LH 자극이 사냥을 유발)이 보여주듯 **이들은 상호 보상적일 가능성**이 높아, "필요성" 주장들을 액면 그대로 합산하면 안 된다.
- **[[concept-orexin-neurons|orexin]]·[[harris-2005-a-role-for-lateral|Harris 2005]]의 선택성 주장과의 대비** — Harris 2005는 LH orexin이 **소비성 보상 cue에만 선택적**이고 **novelty 보상에는 무반응(18±2%)** 이라고 결론한다. Tan의 LH^CaMKIIα는 거꾸로 **novelty 접촉에서 가장 크게 반응**한다. 두 집단이 LH 안에서 **novelty vs consumptive-reward로 분업**한다는 읽기가 가능하지만, Tan은 Hcrt 공표지를 전혀 측정하지 않았다(연결 가설).
- **저자 자인한 설계 한계(위키에 그대로 남겨야 할 것)**: ① 말단 자극의 **역행성 세포체 활성화 대조군이 없다**(저자 명시). ② MPOA→LH 자극 + LH 화학유전 억제 실험이 실패했으므로 **LH의 필요성은 회로 수준에서 분리되지 않았다**. ③ Vgat/vGluT2 공표지 수치가 **마우스 2마리·수백 세포 규모**이고 GABA 중첩은 수치가 없다. ④ 암컷 데이터가 없다(수컷 전용, 암컷은 성행동 시험의 상대로만 사용).

## 관련 페이지
- [[concept-lh-camkii-neurons]] — ⚠️ **이 논문의 "GABA 거의 비중첩(수치 없음) + vGluT2⁻ 36.13%가 주역"이라는 조성 주장을 Heiss 2024와 나란히 놓고 판정하는 개념 hub.** 프로모터 라벨을 세포 유형으로 읽을 때의 인용·설계 규칙을 정리했다.
- [[heiss-2024-distinct-lateral-hypothalamic-camkiia]] — ⚠️ **같은 CaMKIIα 프로모터·거의 같은 좌표(AP −1.4)로 GABA 혼입을 인정한 짝 논문**(PNAS 2024, Kilduff lab). RNAscope로 프로모터 충실도 **95.6 ± 0.4%**를 방어하면서 같은 라벨이 **Vglut2 78.7% / Vgat 33%(IHC Gad2 20.1%)** 혼합임을 보이고, Gad2-DTA 절제로 **GABA 성분 = 보행운동(LMA), glutamatergic 성분 = 각성**으로 분업시킨다. 본 논문의 "scarcely GABAergic"과 정면 불일치 — 대조표는 [[concept-lh-camkii-neurons]].
- [[concept-lateral-hypothalamus]] — 개념 hub. LH 세포타입 목록에 "프로모터 정의 CaMKIIα 집단"과 포식/섭취 축을 추가.
- [[concept-appetitive-consummatory-phases]] — 활동 부호(appetitive)와 인과 효과(consummatory)가 어긋나는 사례. soma 자극(운반·추격) vs vPAG 말단 자극(물기·섭취)으로 phase가 투사별로 분리된다.
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — 사용자 lab LH 리뷰. "분자 정체로 세포를 정의하라"는 요구에 대한 반면교사 사례(프로모터 정의 + 미규명 36%).
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] — 사용자 lab LH^LepR seeking/consummatory 분업. CaMKIIα⁺vGluT2⁻ 36% 집단과의 분자 중첩은 미검증.
- [[kim-2024-normative-framework-dissociates-need]] · [[kim-2024-unified-theoretical-framework-underlying-regulation]] · [[concept-need-motivation-pleasure-utility]] — MPOA→LH(Motivation)와 LH→vPAG(Motivation+Utility)의 2단 분해 가설, Need=0 상태의 순수 Motivation 지표로서 비식용 물체 추구.
- [[jia-2026-novelty-exploration-activated-ensemble-in]] — LH novelty ensemble(Fos-TRAP, 양가 salience, Vgat·Vglut2 양쪽). 같은 "LH × novelty" 축인데 세포 정체와 행동 출력이 다르다.
- [[lee-2026-distinct-lateral-hypothalamic-gabaergic]] — LH^Vgat 안의 salience vs value-scaled consumption 분업. Tan의 탐색/섭취 분업과 평행하지만 좌표계(세포타입)가 다르다.
- [[liu-2023-an-iterative-neural-processing]] — LH^GABA의 "비식용 물체에도 반응하는 탐침 충동·개시 전담" 결과와 부분 수렴·부분 불일치.
- [[liu-2026-granular-motivational-interaction-and]] — LH^GABA = initiation hub 서술과 대비.
- [[concept-medial-preoptic-area]] — 상류 노드. LH 투사 MPOA 뉴런의 83.53%가 CaMKIIα⁺, MPOA 자극은 사냥은 켜지만 섭취는 켜지 않는다.
- [[concept-zona-incerta]] — PAG로 수렴하는 또 하나의 포식 경로(ZI^GABA). 다중 평행 경로의 "필요성" 주장 중복 문제.
- [[stuber-2016-lateral-hypothalamic-circuits-for]] · [[jennings-2013-the-inhibitory-circuit-architecture]] · [[rossi-2021-transcriptional-and-functional-divergence]] — "LH^Vglut2 = brake(섭식↓·혐오)" 프레임의 원전들. 본 논문의 섭취 폭증 결과와 병기.
- [[mickelsen-2019-single-cell-transcriptomic-analysis-of]] — CaMKIIα⁺vGluT2⁻ 36% 집단의 분자 후보를 조회할 LHA census(GABA 15 + Glut 15 클러스터).
- [[jennings-2015-visualizing-hypothalamic-network-dynamics]] — appetitive/consummatory 비중첩 단일세포 영상의 원전. 본 논문은 같은 이분법을 투사 표적으로 재현한다.
- [[concept-orexin-neurons]] · [[harris-2005-a-role-for-lateral]] — LH orexin의 "소비성 보상 cue 선택적·novelty 무반응"과 정반대 프로필. LH 내부 분업 가설.
- [[concept-npy-agrp-neurons]] — "결핍 신호로 활동이 높고, 조작은 그 신호가 지시하는 행동을 강제한다"는 동일 비대칭 구조의 선례.
- [[overview-lateral-hypothalamus-synthesis]] — LH 종합. 비선택적 LHA 자극의 행동 부작용(비선택적 섭식·주의 강제 이동) 회로 설명 후보.
