---
title: "Luff et al. 2024 — 펄스폭변조 시간간섭자극(PWM-TI)"
type: paper
created: 2026-06-01
updated: 2026-06-01
source: raw/2024 Brain Stimulation. Pulse-width modulated temporal interference (PWM-TI) brain stimulation.pdf
authors: [Charlotte E. Luff, Patrycja Dzialecka, Emma Acerbo, Adam Williamson, Nir Grossman]
year: 2024
---

> [!takeaway] 연구 방향 관점의 핵심
> Grossman lab이 [[concept-temporal-interference-stimulation|TI]]의 **사각파 변형(PWM-TI)**을 검증 — 진폭이 아니라 **pulse-width를 Δf로 변조**해도, 막의 저역통과 필터가 이를 진폭변조(AM)로 변환해 동일하게(약간 더 강하게) Δf 신경활동을 구동. 사용자에게의 함의: 비침습 심부자극의 **공학적 여지**가 아직 열려 있다는 신호 — 같은 인가 전류로 ~40% 큰 막 진동·~20–40% 낮은 역치는 TI의 고질적 약점(인간 field 부족)을 줄일 한 갈래. 단 여전히 설치류 field 강도라 인간 번역 격차는 남음.

# Luff et al. 2024 — 펄스폭변조 시간간섭자극(PWM-TI)

## 한 줄 요약
Luff CE, …, Grossman N (corresponding, Imperial College London), *Brain Stimul* 17(1):92–103. 두 biphasic **사각파** kHz field를 약간 다른 주파수로 인가하면, 합 field는 **envelope 진폭은 일정하되 pulse-width가 Δf로 변조**됨. 막의 RC 저역통과가 PWM을 AM 막탈분극으로 변환 → classic TI와 동등+약간 우세. ex-vivo 패치·in-vivo Ca²⁺ 이미징·NEURON 모델 3중 검증.

## 핵심 내용

### 원리 (PWM-TI vs classic TI)
- Classic TI: 두 **정현파** carrier 합 → **진폭이 Δf로 변조**된 envelope.
- PWM-TI: 두 50% duty biphasic **사각파**(예 2000·2010 Hz → Δf=10 Hz, 2.005 kHz carrier) 합 → **진폭 일정·pulse-width가 Δf로 변조**(완전 보강=inter-pulse 간격의 50%≈0.25 ms, 완전 상쇄=0%, 절반=25%≈0.125 ms). 막 저역통과가 짧은 펄스를 더 감쇠 → Δf AM 막탈분극 생성.

### 방법
- **Ex-vivo**: 마우스 L2/3 피질뉴런 whole-cell patch-clamp(n=12); PWM-TI vs 정현 TI vs 10 Hz AC 비교.
- **In-vivo**: GCaMP6s 마우스 V1 widefield Ca²⁺ 이미징(n=10), 두 전극쌍, Δf=0.5 Hz(느린 Ca 동역학용).
- **모델링**: NEURON, L2/3 추체뉴런 5종(Aberra) + 단순 RmCm 단일구획; 능동채널 0으로 두어 수동막만 분리 가능.

### 핵심 결과
- 3 방법 모두에서 PWM-TI가 classic TI **동등~약간 우세**.
- Ex-vivo subthreshold 진동 RMS가 PWM-TI에서 **~40% 큼**(0.67±0.081 vs 0.40±0.057 mV, p=0.010; 위상차 8.73±3.42°). AP 역치도 PWM-TI 약간 낮음(1.24±0.21 vs 1.55±0.29 AC 정규화, p=0.016).
- In-vivo Δf 역치: PWM-TI **2 vs TI 2.5 mA/mm²(20%↓)**; 2Δf에선 1.5 vs 2.5(40%↓).
- 모델: 능동채널 차단해도 PWM→AM 변환 지속 → **수동 저역통과만으로 충분**; 막 시정수 τ 커질수록 AM depth↓.
- **~40% 기계론**: 사각파 RMS=A, 정현 RMS=A/√2 → 같은 진폭에서 √2(≈1.4×) 큰 에너지.

### 한계
- TI 없는 순수 사각 kHz 자극 미검증; 부분 PWM·전류비율 steering 미검증; 설치류 field가 인간 초과(번역 격차); 모델–실험 효율 불일치(실험 TI/PWM-TI는 AC의 ~1.5배 비효율, 모델은 8–10배 예측).

## 관련 페이지
- [[concept-temporal-interference-stimulation]] — 본 변형이 속한 방법론 hub.
- [[person-grossman-nir]] — 교신저자(TI 개척자), 본 기술 확장.
- [[guo-2023-a-novel-non-invasive-brain]] — PWM 변형을 미리 언급한 종합 리뷰.
- [[violante-2023-non-invasive-temporal-interference]] — 같은 lab의 인간 해마 TI(임상 응용 끝).
- [[vieira-2024-temporal-interference-stimulation-disrupts]] — TI 효율 한계를 영장류에서 실측(PWM이 줄이려는 그 약점).
- [[concept-transcranial-electrical-stimulation]] · [[concept-deep-brain-stimulation]].
