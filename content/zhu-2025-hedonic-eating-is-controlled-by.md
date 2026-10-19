---
title: "쾌락적 섭식은 GLP-1R 포만에 맞서는 도파민 뉴런이 통제한다 (Zhu et al. 2025, Science)"
type: paper
created: 2026-10-11
updated: 2026-10-11
source: "raw/2025 Science. (Sternson) Hedonic eating is controlled by dopamine neurons that oppose GLP-1R satiety.pdf"
authors: [Zhenggang Zhu, Rong Gong, Vicente Rodriguez, Kathleen T. Quach, Xinyu Chen, Scott M. Sternson]
year: 2025
journal: "Science 387, eadt0773 (2025-03-28), doi:10.1126/science.adt0773 — UCSD / Janelia(HHMI), 교신 Scott M. Sternson"
---

> [!takeaway] 연구 방향 관점의 핵심
> **VTA 도파민 뉴런은 "먹을까 말까"가 아니라 "먹기 시작한 뒤 얼마나 오래 계속할까"를 정한다.** 조작을 **핥기에 시간을 맞춘 폐루프(lick-contingent)** 로 좁히자, 기존의 모순(도파민 자극이 섭취를 *줄인다*는 보고들)이 사라지고 **소비 중 도파민 = bout 길이 연장, bout 수는 불변**이라는 깨끗한 결과가 나왔다. 사용자 lab에 주는 값어치는 셋. (1) [[concept-need-motivation-pleasure-utility|NMPU]]에서 **소비 국면(consumption)** 을 Motivation(개시)과 분리해 독립 축으로 다뤄야 한다는 인과 근거 — [[concept-consumption-vigor|소비 vigor]]의 "유지" 성분에 VTA DA 인과가 붙는다. (2) **GLP-1RA의 식욕 억제가 쾌락 회로에서 되살아난다** — 세마글루타이드가 1일째에 누른 VTA DA 소비 반응이 투여를 이어 가며 **되돌아오고**, 그 회복을 도파민 억제로 되돌릴 수 있다 → [[concept-weight-regain-defended-adiposity|유지 실패]]·약물 내성의 회로 표적. (3) 상류 **periLC^VGLUT2 → VTA^VGAT ⊣ VTA^DA** 탈억제 경로는 [[concept-digital-therapeutics|DTx]]·neuromodulation이 겨냥할 "소비 브레이크"의 후보다.
> 식락학에서의 쓰임 — **Ch 20 (20.9.1)** 식사 중 도파민 네 단계(⚠️ 네 단계 도식은 선행연구 + 본 논문의 소비 국면 데이터를 묶은 **요약 그림(Fig. 8)**), **Ch 24 (24.5.3)** GLP-1RA의 보상 회로 작용, **Ch 25 (25.2.1)** 세마글루타이드로 눌린 VTA DA 반응이 감량과 함께 회복.

# 쾌락적 섭식은 GLP-1R 포만에 맞서는 도파민 뉴런이 통제한다 (Zhu 2025)

## 한 줄 요약
생쥐에서 **periLC^VGLUT2 → VTA^VGAT ⊣ VTA^DA ⊸ [[concept-nucleus-accumbens|NAc]] 도파민** 회로가 **기호성(palatability)에 비례해 소비 bout의 길이를 연장**하며, 이 소비 중 도파민 신호가 **세마글루타이드의 식욕 억제에 맞서** 맛있는 음식 섭취를 되살린다 (Science 2025, Sternson lab).

## 핵심 내용

### Background — 왜 기존 결과가 엇갈렸나
- **쾌락적 섭식(hedonic eating)** = 생리적 필요가 아니라 **기호성** 때문에 계속 먹는 것("salted-nut phenomenon"). 섭식은 **탐색(seeking) → 소비(consummatory) → 포만(satiety)** 세 국면으로 전개되는데([[concept-appetitive-consummatory-phases]]), 중간의 소비 국면을 무엇이 지탱하는지가 공백이었다.
- 도파민은 보상에 반응하므로 당연히 소비를 촉진할 것 같지만, **인과 실험은 반대**였다 — VTA^DA 활성화가 sucrose·먹이 섭취를 **줄인다**는 보고가 일관되게 나왔다(원문 ref 19–21).
- 저자들의 진단: 기존 조작이 **시간 비특이적(open-loop)** 이었다는 것. 본 논문은 **먹는 동안에만** 조작한다.

### Method — 폐루프 + 광계측 보정이 핵심 장치
- **과제**: 자유 속도(self-paced) lickometer. **3 lick마다 3 µl** 전달. 고기호성 **100% Ensure** vs 저기호성 **20% Ensure**(물로 희석) 또는 **100% Ensure + 3 mM 퀴닌**. 2분 교대 블록, 1–2시간 세션.
- **Bout 정의**: 먹이구역 체류시간 분석에서 유도 — 구역 반경 9.4 cm(입–꼬리기저 거리 95백분위수), 그 체류시간 하위 10%가 5초 → **ILI > 5초를 bout 경계**로 사용.
- **지표**: bout **길이**(기호성의 확립된 행동지표) vs bout **수**(탐색·개시) — [[guillaumin-2023-disentangling-the-role-of-nac|Guillaumin 2023]]의 lick microstructure 규약과 같은 분해.
- **폐루프(lick-contingent)**: lick이 레이저를 켠다. 대조로 **같은 통계의 비수반(noncontingent) 조작**을 yoked로 수행.
- ★ **광계측 보정 자극(photometry-calibrated photostimulation)**: 20% Ensure 소비 중 VTA^DA 활성을 **100% Ensure 수준**까지만 올리도록 광량을 맞춘다. 전이 효율이 부분적이므로(사후 **TH 양성 중 34±12%** 가 transgene 공발현) 100% 수준의 **약 2배**를 목표로 설정 → **초생리적 자극이 아님**을 명시. NAc 도파민(GRAB-DA2m)으로 보정한 별도 실험도 수행.
- 동물: Slc6a3-IRES-Cre(DA), Vglut2-IRES-Cre / -Flpo(periLC), C57BL/6J. 암수 모두, 8–48주령. **무작위화·맹검 없음**(저자 명시).

### Result 1 — 기호성은 bout "길이"를 늘린다
- 100% vs 20% Ensure: 섭취량·**bout 길이**↑, **bout 수는 유의차 없음**(n = 11). 퀴닌으로 기호성만 낮춘 비교에서도 동일(n = 7, 영양가 동일).

### Result 2 — periLC^VGLUT2 → VTA 축삭만이 소비를 바꾼다
- periLC^VGLUT2 축삭의 **lick 수반 광억제**를 BNST·LHA·VTA·PCRt에서 각각 시행(n = 3, 6, 9, 4) → **VTA에서만** 섭취↑, **bout 길이만 연장**(bout 수 불변).
- **비수반 광억제는 무효** → 효과는 **타이밍 의존**.
- 먹이 없는 상태의 폐루프 광억제는 **그 자체로 보상적**(장소선호 형성).
- 반대로 periLC→VTA 축삭 **광자극**은 섭취↓·bout 길이↓·**bout 수까지 감소**(n = 4).
- **해부**: periLC→VTA 하류는 **주로 VGAT 뉴런**, TH 뉴런은 소수(순행 경시냅스 WGA-Cre 추적) → **간접(탈억제) 경로**.
- **기능 연결**: periLC→VTA 축삭 자극 → VTA^DA 칼슘↓(n = 4), NAc 도파민↓(n = 5), **1초 이내** 발현.

### Result 3 — 소비 중 VTA DA는 bout 길이에 비례하고, 기울기가 기호성에 따라 커진다
- VTA^DA 반응은 첫 lick 직전부터 오르고 **bout 내내 지속**. bout별 AUC가 bout 길이와 선형 상관:

| 조건 | 20% Ensure | 100% Ensure | n |
|---|---|---|---|
| VTA^DA, 일정 기호성 세션 | R = 0.48, **기울기 0.17** | R = 0.78, **기울기 0.55** | 13마리 |
| VTA^DA, 가변 기호성 세션(쾌락 대비) | R = 0.11, 기울기 0.02 (**n.s.**) | R = 0.62, 기울기 0.71 | 8마리 |
| NAc 도파민, 일정 기호성 | R = 0.71, 기울기 0.36 | R = 0.78, 기울기 1.17 | 9마리 |
| NAc 도파민, 가변 기호성 | R = 0.61, 기울기 1.22 | R = 0.84, 기울기 2.36 | 13마리 |

- **상태 의존성**: 85% 체중까지 먹이제한한 **배고픔**에서 20% Ensure에 대한 반응↑, **LiCl(50 mg/kg) 내장 불쾌감**에서 반응↓. 2시간 세션 중 반응이 서서히 감소(포만).
- **쾌락 대비(hedonic contrast)**: 같은 세션에서 100%↔20%를 오가면 20% 쪽은 bout 길이가 줄고 **VTA^DA 반응이 음(−)** 이 된다. 즉 **도파민 상승은 소비 행동 자체에 필수가 아니고**, 긴 bout를 **지탱**하는 데 필요하다.

### Result 4 — 인과: 소비 중 도파민은 bout 길이를 양방향 통제
- **광계측 보정 폐루프 자극**(20% Ensure 중, n = 13): 섭취↑·**bout 길이↑, bout 수 불변**. 효과는 **자극 개시 3초 이후** 유의해짐. 기본 lick 진동자 주기(ILI mode)는 불변.
- **비수반 자극은 무효**(n = 8). opsin 없는 대조군도 무효.
- NAc 도파민 보정 자극(n = 5), 초생리적 고출력 자극에서도 **bout 길이↑·bout 수 불변**으로 동일.
- **JAWS 광억제**(n = 6): 폐루프에서만 섭취↓·bout 길이↓(**bout 수 불변**), **개시 5초 이후** 유의. 비수반 억제는 무효.

### Result 5 ★ — 세마글루타이드와의 대결
- **투여**: ad libitum 사료 C57BL/6J에 0일 PBS → **0.05(1일) → 0.1(2일) → 0.15 mg/kg(3–5일)** 1일 1회 복강 주사, 교차설계. 주사 **2시간 뒤** 고기호성 100% Ensure에 1–2시간 접근.
- **1일째**(체중 감소 전): Ensure 섭취↓, **bout 길이↓, bout 수도↓**, 그리고 **VTA^DA 소비 반응 AUC↓**(n = 8).
- ★ **용량을 올리는 동안 회복**: 섭취·bout 길이가 **투여 전 수준으로 되돌아왔고**, VTA^DA 반응도 **나란히 회복**(AUC는 4일째에 PBS군을 역전). 저자 표현으로는 "**체중이 빠지면서** VTA^DA 활성이 올라갔다".
- **양방향 인과**: ① 1일째 세마글루타이드 생쥐에서 VTA^DA를 **투여 전 수준으로 복원하는 자극** → bout 길이↑(bout 수 불변, n = 10). ② 4–6일째(최고 용량·회복기)에 **폐루프 광억제** → 되살아난 Ensure 섭취와 bout 길이가 다시 **억제**됨(bout 수 불변, n = 10; 대조 바이러스는 차이 없음).
- 결론: **소비 중 VTA^DA 신호는 GLP-1R 포만의 식욕 억제에 맞서는 축**이다.

### Claim / 저자 해석
- VTA^DA는 섭식의 세 국면 모두에 관여하지만, 본 논문이 채운 것은 **소비 국면(1–60초)** 이다. 요약 그림(Fig. 8)은 ① 단서 ~0.1초 **보상 예측 오류** ② 음식 접촉 시 **보상 효용**(단서로 예측되지 않은 부분) ③ **1–60초 소비 지속**(기호성 +, 부정적 쾌락 대비·포만 −) ④ **600–3600초 섭취 후 강화**로 배열한다.
- 하류 기전 가설: NAc → LH^GABA 탈억제로 소비 운동 출력이 유지된다는 기존 회로([[oconnor-2015-accumbal-d1r-neurons-projecting|O'Connor 2015]] 등)에 **기호성 부호화**를 얹는 그림.
- 번역 함의: GLP-1RA 치료 중 체중이 빠질수록 **단 음식에 다시 취약해질 수 있고**, 그 과정에 VTA^DA 반응이 **필요**하다.

## ⚠️ 한계와 읽을 때 주의
- **네 단계 도식은 본 논문의 새 데이터가 아니다.** 단서 RPE·보상 효용·섭취 후 강화는 선행연구(원문 ref 15, 25–28, 59, 60)이고, 본 논문이 직접 보인 것은 **소비 국면**이다. 교재에서 "Zhu 2025가 네 단계를 밝혔다"로 쓰면 과장이다.
- **세마글루타이드 실험은 5–6일**짜리, **마른 chow-fed 생쥐**다. 장기 치료·비만 모델이 아니며, 설계상 **약물 내성(시간)**과 **체중 감소**를 분리하지 못한다.
- **선행 보고와 충돌**: 20배 높은 세마글루타이드 용량을 쓴 연구는 소비 중 VTA^DA 활성이 **오히려 약간 증가**했다고 보고한다(원문 ref 80). 용량·프로토콜 의존성이 크다.
- **사람 자료는 엇갈린다.** 저자도 인용하듯 GLP-1RA는 **갈망 감소**를 보고하지만(ref 81–84), **단 음식의 섭취·기호성 자체는 유의하게 변하지 않은** 연구들이 있다(ref 81, 84) — [[coppin-2022-does-glp-1-receptor-agonist|Coppin 2022]]의 null과 같은 방향. 쥐에서는 만성 세마글루타이드 중 **sucrose 섭취가 증가**(ref 85), 사람에서는 감량이 진행되면 음식 단서에 대한 **OFC 반응이 증가**(ref 86).
- **주관적 쾌락은 측정하지 않았다.** 저자 스스로 "기호성의 **객관적 운동 효과**"를 본 것이며 동물의 주관적 경험은 추가 연구가 필요하다고 명시.
- **도파민 vs 소비 지속의 위키 내 긴장**: [[gordon-2026-lateral-hypothalamic-control-of-the|Gordon 2026]](Stuber lab)은 폐루프 선조체 DA 자극이 **bout 수(개시)만** 늘리고 **bout 길이는 늘리지 않는다**고 보고하며, 본 논문을 "DA가 진행 중 소비를 지탱한다"는 통념의 출처로 지목해 **수정**한다. 조작 위치(VTA 세포체 vs 선조체 말단)·과제(자유행동 자가속도 vs 머리고정 다중 spout)·보정 방식이 다르므로 **같은 실험으로 재대결하기 전에는 양립 불가**로 병기할 것.
- n이 대체로 **4–13마리**로 작고, 통계 상세는 table S1에 있다. 조직학으로 표적이 확인된 개체만 포함(targeting 실패 10/23 제외 사례 명시).

## 관련 페이지
- [[person-sternson-scott]] — 교신저자. 위키의 Sternson 라인([[yang-2011-hunger-states-switch-a-flip-flop]]·[[betley-2013-parallel-redundant-circuit-organization-for]]·[[xu-2020-behavioral-state-coding-by]])에 **중뇌 보상 축**이 추가된 지점.
- [[concept-dopamine-reward-system]] — 소비 국면 DA라는 네 번째 시간척도. ⚠️ 그 페이지의 "GLP-1RA: hedonic eating 억제 (Zhu 2025)" 한 줄은 **억제가 일시적이고 되돌아온다**는 본 결과로 보완이 필요하다.
- [[concept-nucleus-accumbens]] — GRAB-DA2m으로 잰 하류 도파민 방출; bout 길이와의 회귀 기울기가 기호성에 따라 커진다.
- [[concept-glp-1]] — GLP-1R 작용제가 **보상 회로까지** 누르되 그 억제가 유지되지 않는다는 약리 근거.
- [[concept-liking-wanting]] — bout 길이(=liking 지표) 쪽을 도파민이 움직인다는 결과. Berridge 전통("DA는 liking에 불필요")과 **표면적으로 충돌**하나, 본 논문은 주관적 쾌락이 아니라 **소비 지속이라는 운동 출력**을 잰 것이므로 층위가 다르다(병기).
- [[guillaumin-2023-disentangling-the-role-of-nac]] — 같은 lick microstructure 규약(bout 길이 vs bout 수)으로 NAc D1/D2를 가른 짝 논문.
- [[gordon-2026-lateral-hypothalamic-control-of-the]] — ⚠️ **정면 긴장**: 선조체 DA는 **개시(bout 수)** 만 강화한다는 반대 결과. 위 한계 항목 참조.
- [[concept-consumption-vigor]] — vigor의 **유지 성분**에 VTA^DA 인과를 붙이는 자료.
- [[concept-appetitive-consummatory-phases]] — 탐색/소비/포만 3국면 틀. 본 논문은 소비 국면 전용 조작의 모범 설계.
- [[oconnor-2015-accumbal-d1r-neurons-projecting]] — 저자들이 하류 기전으로 인용(NAc → LH^GABA 탈억제 → 소비 운동 출력).
- [[wang-2026-ventral-pallidal-gabaergic-neurons]] — 폐루프로 **bout를 연장**하는 또 하나의 노드(VP^GABA). "유지"를 맡는 비도파민 후보와의 분업 질문.
- [[stuber-2025-the-neurobiology-of-overeating]] — 본 논문을 "peri-LC glutamate→VTA GABA 억제 → DA 탈억제 → 세마글루타이드 포만 상쇄"로 요약·인용한 리뷰.
- [[godschall-2026-a-brain-reward-circuit-inhibited]] — 반대 방향의 짝: GLP-1RA가 **NTS^Gcg → CeA^Glp1r → VTA → NAc DA↓** 로 쾌락 섭식을 억제. 두 논문을 합치면 "GLP-1R 포만 ↔ VTA DA"는 **양방향 길항**으로 읽힌다.
- [[gao-2026-semaglutide-drives-weight-loss-through]] — 세마글루타이드의 1차 작용부위(area postrema) 논의; 본 논문의 "satiety pathway 관여"가 어디에서 시작하는지에 대한 상류 자료.
- [[coppin-2022-does-glp-1-receptor-agonist]] — 사람에서 GLP-1RA가 **liking을 바꾸지 않았다**는 null. 본 논문의 "쾌락 반응 회복"과 같은 방향의 임상 신호.
- [[aronne-2023-continued-treatment-with-tirzepatide-for]] — 끊으면 되돌아오는 임상 사실. 본 논문은 **끊기 전에도** 보상 반응이 먼저 회복될 수 있음을 시사.
- [[concept-weight-regain-defended-adiposity]] — 유지 실패의 회로 기전 목록에 "소비 국면 도파민 회복"을 추가.
- [[concept-hedonic-devaluation]] — 만성 HFD가 쾌락 가치를 **낮춘다**는 축과의 대조. 본 논문은 급성 기호성 scaling을 다루므로 시간척도가 다르다.
- [[gazit-shimoni-2025-changes-in-neurotensin-signalling-drive]] — NAc^Lat→VTA 뉴로텐신 소실로 쾌락 섭식이 사라지는 기전. 같은 VTA 노드의 반대 방향 조절.
- [[tellez-2016-separate-circuitries-encode-hedonic-nutritional]] · [[weber-2025-interoceptive-origin-reinforcement-learning]] · [[thanarajah-2019-food-intake-recruits-orosensory]] · [[grove-2022-dopamine-subsystems-track-internal]] — 식락학 Ch 20 20.9의 나머지 축(입안 보상 vs 몸 안 보상, 사람 PET 두 정점, 자원별 DA 하위계).
- [[concept-need-motivation-pleasure-utility]] · [[kim-2024-normative-framework-dissociates-need]] — 소비 국면을 Motivation과 분리해 다룰 근거.
- [[kim-2024-glp-1-increases-preingestive-satiation]] — 사용자 lab의 DMH GLP-1R 회로(섭취 **전** 포만)와 대조: 본 논문은 GLP-1R 포만이 **소비 중** 도파민까지 누른다는 쪽.
- [[hankir-2015-distinctive-striatal-dopamine-signaling-after]] — 감량 방식에 따른 선조체 도파민 재설정 방향 논의와 연결.
- [[sumithran-2011-long-term-persistence-of-hormonal-adaptations]] — 감량이 진행될수록 쾌락 회로 반응이 되살아난다는 생쥐 짝 자료. **두 초안이 함께 게시될 때만** 링크가 유효.
