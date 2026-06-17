---
title: 시간간섭자극 (Temporal Interference Stimulation, TI / tTIS)
type: concept
created: 2026-06-01
updated: 2026-06-01
aliases: [TI, tTIS, TIS, temporal interference, 시간간섭자극, temporally interfering stimulation, non-invasive deep brain stimulation]
---

> [!takeaway] 연구 방향 관점의 핵심
> TI는 **비침습으로 뇌 심부를 초점 자극**하려는 신경조절의 성배 — 두 개의 kHz 전류가 깊은 곳에서 저주파 envelope(Δf)를 만들어, 표층 피질은 건드리지 않고 심부만 자극(steerable). 사용자에게 결정적 함의: **수술 없이 시상하부·VTA·NAc 같은 심부 섭식·보상 회로에 접근**할 가능성. 한양대 연구가 **TI 2 Hz가 선조체 phasic 도파민을 ~40%↓**([[kwak-2023-effect-of-temporal-interference]])로 실증, 인간 해마 TI도 입증([[violante-2023-non-invasive-temporal-interference]]). 단 냉정한 현실: 영장류에서 **TI는 tACS보다 ~80% 약하고 주로 동기화를 깨뜨림(entrain 아님)**([[vieira-2024-temporal-interference-stimulation-disrupts]]) — 인간 심부 field는 subthreshold 가능성.

# 시간간섭자극 (Temporal Interference Stimulation, TI / tTIS)

## 한 줄 요약
주파수가 약간 다른 두 고주파(예: 2000·2010 Hz) 정현 전류를 두피에 흘려, 둘이 겹치는 **심부 초점에서 차주파(Δf=10 Hz) 진폭변조 envelope**를 생성. 신경막은 고주파엔 무반응·저주파 envelope엔 반응 → 표층 보존·심부 초점 자극. 전류 비율로 표적을 **steer**. Grossman 2017(마우스 해마)이 개척.

## 핵심 내용

### 원리·기전
- 두 kHz carrier 중첩 → Δf envelope이 심부에서 peak; 막의 **저역통과 필터/이온채널 정류**로 envelope을 demodulate(Mirzakhalili 2020). 대개 **subthreshold 조절**(직접 발화보다 진행 활동 modulation)([[guo-2023-a-novel-non-invasive-brain]], [[zhu-2023-a-mini-review-recent-advancements]]).
- 변형: square 파형 **PWM-TI**(envelope 일정·pulse-width 변조; 막 저역통과가 AM으로 변환, classic TI와 동등+약간 강함; [[luff-2024-pulse-width-modulated-temporal]]).

### 증거 — 동물·인간
- **선조체 도파민(★ 보상)**: [[kwak-2023-effect-of-temporal-interference]] (한양대, rat FSCV) — STr 또는 피질 적용 TI **2 Hz beat·400 µA**가 MFB 유발 phasic DA를 ~40%↓(frequency·intensity 특이); 첫 TI 신경화학 조절.
- **인간 해마**: [[violante-2023-non-invasive-temporal-interference]] (Nat Neurosci) — 5 Hz TI가 인간 해마를 초점·**steerable** 자극(1:3 비율로 anterior 이동), BOLD·연결성↓·일화기억↑; cadaver로 심부 초점 검증. **인간 첫 표적·조향 비침습 심부자극**.
- **종합/리뷰**: [[zhu-2023-a-mini-review-recent-advancements]]·[[guo-2023-a-novel-non-invasive-brain]] — 원리·파라미터·montage 최적화; 인간 결과는 적고 혼재(전류 너무 낮음).

### 현실 점검 (한계)
- **[[vieira-2024-temporal-interference-stimulation-disrupts]]** (Nat Commun, 영장류 단일뉴런): TI는 firing rate가 아니라 **spike timing**을 바꾸되, 인간 현실 조건에서 **tACS보다 ~80% 약함**; 대부분 기존 리듬을 **desynchronize**(새 entrain 아님). 두 손실 — 고주파 shunting + 불완전 demodulation. 유용 niche=병적 동기 억제.
- 인간 field <1 V/m로 **subthreshold 가능성**; 1,400배 큰 인간 뇌로의 depth/dose 번역 미해결.

### 비침습 심부자극 맥락
- [[hummel-2024-non-invasive-deep-brain]] (Nat Rev Neurol): tTIS가 depth-focality trade-off를 넘어 선조체·해마·STN을 비침습 조절(가소성↑·entrain·병적 진동 disrupt); DBS 보완(반응자 예측·다표적·closed-loop). focused ultrasound와 함께 non-invasive DBS 가족.

## 관련 페이지
- [[concept-transcranial-electrical-stimulation]] — TI의 모태(tES)·표층 피질 자극.
- [[concept-deep-brain-stimulation]] — TI가 비침습으로 대체·보완하려는 침습 심부자극.
- [[concept-dopamine-reward-system]] · [[concept-nucleus-accumbens]] · [[concept-lateral-hypothalamus]] — TI가 비침습 접근을 노리는 심부 보상·섭식 표적.
- [[concept-responsive-neurostimulation]] — closed-loop 신경조절(TI도 지향).
- [[person-grossman-nir]] — TI 개척자.
- [[concept-hippocampus-feeding]] — 인간 TI 첫 표적(해마).
- [[overview-appetite-energy-homeostasis]] — 큰 그림(신경조절 축).
