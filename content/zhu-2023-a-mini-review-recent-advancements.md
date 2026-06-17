---
title: "Zhu & Yin 2023 — TI 자극의 뇌기능·행동 조절 최근 진전 (mini-review)"
type: paper
created: 2026-06-01
updated: 2026-06-01
source: raw/2023 Front. Human. Neurosci. A mini-review recent advancements in temporal interference stimulation in modulating brain function and behavior.pdf
authors: [Zhiqiang Zhu, Lijun Yin]
year: 2023
---

> [!takeaway] 연구 방향 관점의 핵심
> 시간간섭자극([[concept-temporal-interference-stimulation|TI]])의 전임상·인간·시뮬레이션 증거를 한 장에 정리한 입문용 지도. 사용자에게의 함의는 **"비침습 심부자극의 현재 위치"** — 동물(해마·상구)에서는 초점·조향이 실증됐으나 인간은 전류가 너무 약해 결과가 sparse·혼재. 다룬 심부 표적이 **해마·창백핵·STN·VIM**(운동장애 frame)뿐이라 사용자의 시상하부·VTA·NAc 섭식·보상 표적은 아직 미개척 — 곧 사용자 lab이 선점할 수 있는 공백. 향후 길은 closed-loop EEG-gating·multi-target·TI-TMS, 그리고 안전 한도 내 modulation amplitude 상향.

# Zhu & Yin 2023 — TI 자극의 뇌기능·행동 조절 최근 진전 (mini-review)

## 한 줄 요약
Zhu Z & Yin L (Shenzhen University), *Front Hum Neurosci* 17:1266753. 시간간섭자극(TI)의 기전·파라미터·전임상/인간 증거·시뮬레이션·한계를 압축한 **mini-review**. 결론: TI는 conventional [[concept-transcranial-electrical-stimulation|tES]]보다 focality·steerability·내약성 우수하나, 인간 증거가 적고 일관되지 않아 프로토콜 최적화를 위한 추가 연구가 필요.

## 핵심 내용

### 기전
- 약간 다른 두 고주파(kHz) 교류가 간섭 → 심부에서 **저주파 envelope(Δf)** 형성(Grossman 2017). 신경막은 저주파엔 반응·고주파엔 무반응(Hutcheon & Yarom 2000) → 심부 초점 자극·표층 보존. 전극쌍 **전류 비율 변경**으로 표적 steer(전극 이동 불요).
- 기전 시뮬레이션(Mirzakhalili 2020): subthreshold TI에서 Na⁺ 전류 우세 → 순 내향 전류 → 축삭 탈분극 → 역치 시 활동전위; envelope의 **진폭변조(AM)가 AP 개시에 필수**. 위치 의존(정중선=생리적 활동, 1.7 mm=tonic, 3.5 mm=conduction block). Gomez-Tames 2021: 막 저역통과를 넘으려면 carrier 주파수가 높을수록 더 큰 전류 필요.

### 증거 — 동물
- **Grossman 2017**: 10 Hz TI(2000+2010 Hz)가 마우스 해마 c-fos 활성, 표층 피질 무영향; envelope 주파수에 맞춰 앞발/수염 운동. 20분 자극 후 분자 프로파일 불변, 피질 온도 +0.069±0.05°C(안전).
- Song 2021: 마우스 상구 Ca²⁺·안구운동 제어. Carmona-Barrón 2023: 쥐 BBB 세포 면역반응↑.

### 증거 — 인간 (5편, 결과 혼재)
- Acerbo 2022: cadaver 2구 SEEG — 130 Hz TI가 130 Hz tACS보다 해마 침투 우수.
- Zhu 2022: 40명 rs-fMRI — M1 20 Hz TI가 M1–이차운동영역 연결성↑.
- Zhang 2022: 고부하 N-back 작업기억 개선(vs sham-tACS). Ma 2021: 70 Hz TI 반응시간·M1 흥분성↑, 20 Hz TI 운동학습·MEP↑.
- von Conta 2022: 1 mA로는 EEG/alpha 변화 없음(전류 부족 시 무효).
- 안전(인간, Piao 2022): 2 mA·20/70 Hz·30분 active vs sham — 신경·신경심리 차이 無, 이상반응 無.

### 한계·향후
- **인간 전류 부족**(kHz 전류가 뇌 침투 중 소실), 결과 비일관, 프로토콜 이질, 행동검사 단순. 시뮬레이션 최대 E-field: 창백핵 0.37 / 해마 0.24 / 운동피질 0.57 V/m, modulation 역치 ~0.2 V/m.
- 길: 안전 한도 내 amplitude 상향(TI는 임피던스↓·내약성↑), **closed-loop EEG-gating**, **multi-target** 망 자극, **TI-TMS** 결합, SAI 같은 더 나은 행동·생리 marker. Montage 최적화에 신경망(Bahn 2023)·유전알고리즘(Stoupis 2022) 도입.

> 본 리뷰는 식욕·보상·시상하부·VTA·NAc를 다루지 않는다. 심부 표적은 해마(가장 많이 검증)·상구·창백핵·STN·VIM·M1에 한정 — 사용자 섭식·보상 회로로의 번역은 아직 공백.

## 관련 페이지
- [[concept-temporal-interference-stimulation]] — 본 리뷰가 개관하는 방법론 hub.
- [[concept-transcranial-electrical-stimulation]] — TI가 능가한다고 주장하는 비교 대상(tES).
- [[violante-2023-non-invasive-temporal-interference]] — 본 리뷰가 인간 심부 proof로 인용하는 해마 TI.
- [[guo-2023-a-novel-non-invasive-brain]] — 같은 해 자매 TI 종합 리뷰(기전·montage 더 상세).
- [[kwak-2023-effect-of-temporal-interference]] — 본 리뷰엔 없는 선조체 도파민 TI(사용자 보상 접점).
- [[person-grossman-nir]] — TI 개척자(Grossman 2017이 본 리뷰의 출발점).
- [[concept-deep-brain-stimulation]] — TI가 비침습으로 대체·보완하려는 침습 심부자극.
