---
title: "Guo et al. 2023 — 시간간섭 전기자극(TI) 종합 리뷰"
type: paper
created: 2026-06-01
updated: 2026-06-01
source: raw/2023 Front. Neurosci. A novel non-invasive brain stimulation technique "Temporally interfering electrical stimulation".pdf
authors: [Wanting Guo, Yi He, Wenquan Zhang, Yiwen Sun, Jinsheng Wang, Shuang Liu, Dong Ming]
year: 2023
---

> [!takeaway] 연구 방향 관점의 핵심
> 시간간섭자극([[concept-temporal-interference-stimulation|TI]])의 물리·기전·응용·최적화·한계를 가장 폭넓게 정리한 종합 리뷰(Tianjin University). 사용자에게 핵심은 두 가지 냉정한 사실: ① **기전 논쟁이 미해결**(막 저역통과 vs Na⁺ 채널 정류 vs subthreshold 위상동기) — 어떤 세포가 반응할지 예측 어려움(PV 뉴런 무반응), ② **인간 뇌 field <1 V/m**로 직접 발화엔 부족(마우스보다 ~1,400배 큰 뇌). 즉 TI로 시상하부·VTA·NAc를 비침습 조절하려면 dose·montage 혁신이 선결. 한양대 선조체 도파민 TI([[kwak-2023-effect-of-temporal-interference]])가 보상 표적 proof의 드문 예외.

# Guo et al. 2023 — 시간간섭 전기자극(TI) 종합 리뷰

## 한 줄 요약
Guo W et al. (Tianjin University), *Front Neurosci* 17:1092539. TI(temporally interfering electrical stimulation)의 원리·기전·동물/인간 증거·focality·한계를 포괄한 **리뷰**. TI는 두 kHz carrier의 차주파 envelope(Δf)으로 심부를 비침습·초점·조향 자극(Grossman 2017)하나, 인간 전류 부족·기전 불확실이 핵심 병목.

## 핵심 내용

### 원리·역사
- 두 carrier f1·f2(kHz) 간섭 → envelope Δf=f1−f2. 선조: 1950년대 **간섭전류(IFC) 치료**(~4000 Hz + 4000–4250 Hz → 0–250 Hz, 말초 자극). 고주파는 조직 침투·피부 통증역치 회피.

### 기전 (논쟁 중)
- Grossman 원안 = **막 저역통과 필터**(누설 전도+capacitance가 HF 감쇠).
- 반론: Karimi 2019(축삭이 HF를 따르지 않고 demodulate), **Mirzakhalili 2020**(저역통과만으론 envelope 추출 불가 → Na⁺ 채널 게이팅 기반 **이온채널 정류**; off-target HF **conduction block** 경고).
- Howell & McIntyre 2021: HH 모델에서 **≤10 mA TI는 AP 개시 실패**(Na⁺ 비활성) → ≤2 mA에선 tACS류 **subthreshold 위상동기 조절**. Cao & Grover 2018: 추체뉴런 반응·**PV 뉴런 무반응**(세포형 선택성). 망/집단 효과가 단일뉴런보다 민감.

### 증거 — 동물
- Grossman 2017: 마우스 해마, 125 µA·2 kHz·Δf=10 Hz로 발화 유발(순수 2 kHz는 실패). Song 2021(상구·안구운동, tACS보다 깊음), Zhang 2022(쥐 M1), Missey 2021(해마 CA3 발작양 활동), Sunshine 2021(opioid 과량 후 횡격막/호흡), Botzanowski 2022(좌골신경), Lee 2021(과활동성 방광).

### 증거 — 인간
- **Ma 2021(최초 인간 시험)**: 좌 M1, 2 mA·2 kHz, envelope 20/70 Hz — 70 Hz 반응시간↑, 20 Hz 운동학습·MEP↑. 100명 중 4명만 경미 이상반응(피로·어지럼).
- Zhu 2022: 운동피질 rs-fMRI 연결성↑(tDCS와 차이 없음). Collavini 2021: SEEG 환자에서 10 kHz·Δf로 발작 유발(간질원성 mapping).

### Focality·depth·steerability
- 다전극이 초점↑: Song X 2021(3·6채널이 단일채널 대비 focality +54.4%·+70.2%, 두피감각 −28.5%). Lee 2020(61전극 최적화 — 우해마 최대 0.38 V/m). Rampersad 2019(2 mA에서 <0.8 V/m; 급성 조절엔 >150 mA 필요). 변형: MTI(단일전극 다주파), envelope의 PWM(Terasawa 2022 → [[luff-2024-pulse-width-modulated-temporal]] 참조), GHz endocranial antenna(Ahsan 2022, 12 V/m·3.6 cm).

### 한계
- 인간 in-brain field <1 V/m(spiking 영향엔 ≥1 V/m 필요, Vöröslákos 2018); 기전 미해결; HF conduction block의 off-target; 인간 데이터 대부분 모델링; 개인 해부 변이(von Conta 2021: 해마 0.24·창백핵 0.37·M1 0.57 V/m); PV 뉴런 무반응; 직접 검증된 심부 표적은 마우스 해마뿐.

> 본 리뷰도 식욕·보상·시상하부·VTA·NAc를 다루지 않는다(심부 표적=해마·상구·M1·창백핵·시상·망막·말초신경). 후보 적응증으로 뇌졸중·OCD·간질·우울·척수손상·파킨슨을 제시.

## 관련 페이지
- [[concept-temporal-interference-stimulation]] — 본 리뷰가 개관하는 방법론 hub.
- [[zhu-2023-a-mini-review-recent-advancements]] — 같은 해 자매 mini-review(증거 catalog).
- [[luff-2024-pulse-width-modulated-temporal]] — 본 리뷰가 언급한 PWM 변형의 정식 검증.
- [[vieira-2024-temporal-interference-stimulation-disrupts]] — 인간 field 부족 우려를 영장류 단일뉴런으로 실증.
- [[kwak-2023-effect-of-temporal-interference]] — 선조체 도파민 TI(보상 표적 proof).
- [[concept-transcranial-electrical-stimulation]] · [[person-grossman-nir]] · [[concept-deep-brain-stimulation]].
