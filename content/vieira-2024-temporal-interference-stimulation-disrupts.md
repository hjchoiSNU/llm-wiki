---
title: "Vieira et al. 2024 — TI 자극은 영장류 뇌에서 spike timing을 교란한다"
type: paper
created: 2026-06-01
updated: 2026-06-01
source: raw/2024 Nature Communications. Temporal interference stimulation disrupts spike timing in the primate brain.pdf
authors: [Pedro G. Vieira, Matthew R. Krause, Christopher C. Pack]
year: 2024
---

> [!takeaway] 연구 방향 관점의 핵심
> 비침습 심부자극([[concept-temporal-interference-stimulation|TI]])의 **냉정한 현실 점검** — 영장류 단일뉴런 234개로 보니 TI는 발화율(rate)이 아니라 **spike timing**만 바꾸고(28% 세포), 대부분 기존 리듬을 **새로 entrain하기보다 desynchronize**한다. 결정적으로 **tACS보다 ~80% 약함**(같은 전류 기준). 사용자에게의 함의: TI로 시상하부·VTA·NAc를 "켜는"(발화 유발) 건 현 인간 dose로는 비현실적 — 현실적 niche는 **병적 동기(synchrony)를 비침습·초점 억제**하는 것. 즉 사용자 보상회로 응용은 "활성화"보다 "병적 진동 차단" frame이 타당.

# Vieira et al. 2024 — TI 자극은 영장류 뇌에서 spike timing을 교란한다

## 한 줄 요약
Vieira PG, Krause MR, Pack CC (Montreal Neurological Institute, McGill), *Nat Commun* 15:4558. 깨어있는 마카크 단일뉴런 기록으로, TI-tACS는 발화율은 못 바꾸고 **timing만** 조절하며, 고주파 shunting + 불완전 demodulation 탓에 **conventional tACS의 ~12–34% 강도**에 그침. 현실적 용도는 새 리듬 부과가 아닌 **병적 동기 disrupt**.

## 핵심 내용

### 방법
- **마카크 2마리**(Sa 수컷 14 kg, Sh 암컷 8.4 kg), 시각 고정 과제. **234개 단일뉴런**(V4·7A·MT), 32채널 V-Probe.
- TI-tACS: 두피 전극 2쌍, carrier 2000 Hz 고정·2nd carrier 2005/2010/2020 Hz → **Δf(AM) 5/10/20 Hz**; ±1.0/2.0/2.5 mA/쌍. Conventional tACS는 1쌍·매칭 AM·±1 mA 기준.

### 핵심 결과
- **발화율 불변**: 기저 중앙값 4.1 vs 자극 중 3.9 Hz; 자극 진폭·주파수·영역 모두 발화율 예측 못함.
- **Spike timing은 28%(65/234)에서 유의 변화**(per-cell p<0.05).
- **Entrain < Desynchronize**: 반응 세포 65개 중 entrain(PLV↑) 25%(16개), **desynchronize 75%(49개)**. 기저 PLV가 높을수록 ΔPLV 음(ρ=−0.43) — 즉 TI는 진행 중 리듬과 "경쟁"해 깨뜨림.

### 두 손실 기전
1. **고주파 shunting**: 자극 유발 전위가 주파수↑에 따라 지수적 감쇠(chirp 10–2000 Hz) → kHz carrier에선 더 적은 전류만 뇌 도달.
2. **불완전 demodulation**: 뉴런이 AM을 잘 복조 못함 — AM-tACS는 PLV 중앙값 0.10에 그침(conventional tACS 0.20, p=0.01).
- 종합: TI-tACS는 conventional tACS 대비 entrain 뉴런 ~1/3(17% vs 46%); Deming 회귀 기울기 **0.34**(TI=tACS의 0.34배), mA 보정 시 ~**12%**. 저자 표현 **"같은 전류로 tACS보다 80% 약함"**.

### 인간 번역
- 모델 intracranial field: modulation depth ≤0.7 V/m/mA, 평균 AM field 0.62(7A)·0.5(MT) V/m — 인간 0.4–1.0 V/m 범위. 마우스 TI 연구는 **60–383 V/m**(orders of magnitude 강함). 인간 carrier 최대 ~7 mA 견뎌도 ~3배 강해질 뿐 — **발화율 변경엔 여전히 부족**.
- 막 시정수 10–50 ms ≫ carrier 주기 ≤500 µs → carrier 직접 막분극 비현실적; 효과는 축삭 종말/K⁺·비대칭 Na⁺·K⁺ 전도에 귀속.

### 저자 결론
TI-tACS는 새 리듬 부과·광역 entrainment에 부적합 — "focality를 얻는 대가로 효능에 큰 비용". 현실 niche = **병적 진동 동기를 초점·비침습 disrupt**(간질·파킨슨·조현병; DBS 유사 논리). AM-tACS는 "tACS의 단점만 있고 장점은 없다".

> 식욕·보상·시상하부·VTA·NAc는 직접 다루지 않음(V4·7A·MT 시각피질 기록). 사용자 접점은 frame 차원 — 보상회로 "병적 동기 차단" 응용의 현실적 한도를 정한다.

## 관련 페이지
- [[concept-temporal-interference-stimulation]] — 본 논문이 "현실 점검"으로 인용되는 hub.
- [[violante-2023-non-invasive-temporal-interference]] — 인간 해마 TI 긍정 결과(본 논문의 영장류 회의론과 대비).
- [[kwak-2023-effect-of-temporal-interference]] — 선조체 도파민 ~40%↓(TI가 timing/조절은 가능함을 보강).
- [[hummel-2024-non-invasive-deep-brain]] — 본 논문(Liu/Vieira 2024)을 영장류 근거로 인용하는 임상 전망.
- [[concept-transcranial-electrical-stimulation]] — TI의 비교 기준(tACS).
- [[person-grossman-nir]] · [[concept-deep-brain-stimulation]] · [[concept-dopamine-reward-system]].
