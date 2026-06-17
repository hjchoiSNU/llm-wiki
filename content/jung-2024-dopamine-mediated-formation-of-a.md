---
title: "Jung et al. 2024 — NAc의 도파민 매개 'memory module'과 목표지향 항법"
type: paper
created: 2026-06-02
updated: 2026-06-02
source: raw/2024 Nature Neuroscience. Dopamine-mediated formation of a memory module in the nucleus accumbens for goal-directed navigation.pdf
authors: [Kanghoon Jung, Sarah Krüssel, Sooyeon Yoo, Rui M. Costa, Hyung-Bae Kwon]
year: 2024
---

> [!takeaway] 연구 방향 관점의 핵심
> NAc가 **목표(은신처) 위치 기억을 저장하는 'memory module'**을 형성하고, **VTA 도파민이 안전/안도(safety/relief) 신호**로서 vHPC 입력과 함께 이 ensemble을 만든다는 직접 증거. 사용자에게의 함의: ① 도파민을 단순 reward가 아닌 **state-value(상태-가치) 신호**로 재정의 — [[concept-dopamine-reward-system|도파민 논쟁]]·[[concept-need-motivation-pleasure-utility|NMPU]]의 Utility/Pleasure 해석에 직결. ② NAc의 **목표 표상이 동기 상태에 의해 인출**된다는 점에서, 저자들은 **음식·물·배고픔·갈증 등 보상 종류별 NAc 목표 표상** 가능성을 명시 — 섭식 동기 연구의 직접 hook. ③ 방법으로 [[hyun-2022-tagging-active-neurons-by|Cal-Light]]로 NAc^shelter ensemble을 활성 기반 태깅.

# Jung et al. 2024 — NAc 도파민 매개 memory module

## 한 줄 요약
Jung K … Costa RM, **Kwon H-B** (Allen Institute·Johns Hopkins·Columbia), *Nat Neurosci* 27:2178–2192. 마우스가 은신처 위치를 빠르게 학습; **VTA^DA→NAc medial shell**이 안전/안도 신호를 인코딩하고 **vHPC^Glu** 입력과 수렴해 **은신처 부호화 NAc ensemble(NAc^shelter, 'memory module')**을 형성 → 위협 시 인출되어 목표지향 회피 항법을 유도.

## 핵심 내용

### 패러다임·방법
- 원형 arena + 은신처 + 시각 cue; 위협=looming disk/고주파음. dPAG=회피 개시 영역.
- 도구: VTA^DA photometry, NAc 이중 photometry(**dLight1.1** DA + jRGECO1a Ca²⁺), GRIN microendoscope Ca²⁺(704 뉴런/5 mice), closed-loop ChR2(VTA^DA·dPAG), hM4Di 침묵(NAc·vHPC^Glu→NAc), 6-OHDA DA 병변, D1/D2 길항제, **[[hyun-2022-tagging-active-neurons-by|Cal-Light]] 활성 태깅**(NAc^shelter), smFISH cell-typing.

### 핵심 발견
- **'Memory module'**: 은신처 위치 표상을 저장하는 충분한 NAc 하위집단 — 단독 활성화로 회피를 일으키진 않고, **회피 drive(위협·dPAG)가 있을 때 인출**되는 점에서 classic engram과 구분.
- **도파민 = safety/relief**: phasic(tonic 아님) VTA^DA 자극 단독으로 회피를 유도하는 place memory 생성. 6-OHDA 고갈·**D1(D2 아님) 차단**이 은신처 기억 손상.
- **회로**: VTA^DA + vHPC^Glu → NAc medial shell; ChAT 개재뉴런·Drd1·Drd2 MSN 포함.

### 주요 수치
- NAc: outside-선호 61.5%·shelter-선호 19.3%·비특이 19.2%(704 cells). 6-OHDA가 shelter-선호를 23%로 감소.
- DA peak=은신처 진입 후 430 ms, Ca²⁺ peak=137 ms. phasic=25 Hz/tonic=4 Hz.
- Cal-Light 태깅 8.6%(2,742/31,751); 활성 세포 Drd1 48.3%·Drd2 20.1%·ChAT 2.7%(ChAT 활성 최고).

### 해석 — state-value
- 저자는 위협 맥락 DA(은신처 진입 시 relief peak)를 **appetitive DA ramping(음식 보상)** 과 대비, NAc^DA를 순수 reward/motivation이 아닌 **state–value function**으로 제안. **보상 종류별(food·water·hunger·thirst) 별개 NAc 목표 표상** 가능성 시사(Tolman "Cathexis").

## 관련 페이지
- [[concept-nucleus-accumbens]] — NAc memory module·medial shell.
- [[concept-dopamine-reward-system]] — DA를 state-value로 재정의(논쟁 보강).
- [[concept-need-motivation-pleasure-utility]] — 목표 표상이 동기 상태로 인출(Utility·Need).
- [[hyun-2022-tagging-active-neurons-by]] — 본 논문이 ensemble 태깅에 쓴 Cal-Light(같은 Kwon lab).
- [[concept-hippocampus-feeding]] — vHPC→NAc 입력(해마-보상 축).
- [[adam-2026-dopamine-takes-hit-how-neuroscience]] · [[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation]] — DA 다기능 논쟁 맥락.
- [[person-kwon-hyung-bae]] — 교신저자.
