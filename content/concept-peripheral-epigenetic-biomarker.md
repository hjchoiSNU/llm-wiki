---
title: 말초 후성유전 바이오마커 (Peripheral epigenetic biomarkers)
type: concept
created: 2026-09-11
updated: 2026-09-11
aliases: [peripheral epigenetic biomarker, DNA methylation biomarker, NR3C1, BDNF methylation, SLC6A4, GRIN2B, PXDN, 말초 후성유전 표지, 혈액 메틸화]
---

> [!takeaway] 연구 방향 관점의 핵심
> **혈액·타액에서 읽은 메틸화는 위험을 층화하지만 뇌를 대리하지 못한다.** 이것이 [[cunningham-2026-early-life-experiences-the-neural|Cunningham & Maze 2026]]이 명시적으로 그은 선이고, 이 분야 논문을 읽을 때 가장 자주 넘어지는 지점이다.
> 사용자 lab에 직접 걸리는 이유: [[concept-digital-therapeutics|DTx]]와 [[kim-2020-multidimensional-cognitive-behavioral-therapy|다차원 표현형 연구]]는 **비침습 바이오마커로 반응자를 미리 고르는 것**을 목표로 한다. 말초 후성유전 표지는 그 용도에 후보로 자주 거론되지만, **기전 대리물로 쓰면 안 되고, 방향조차 코호트마다 뒤집힌다**. 이 페이지는 어디까지 주장할 수 있는지의 경계선이다.

# 말초 후성유전 바이오마커

## 한 줄 요약
뇌 조직에 접근할 수 없는 인간 연구에서 혈액·타액·면역세포의 DNA 메틸화를 프로파일링해 경험 노출과 질환 위험을 추정하는 접근, 그리고 그 해석의 한계.

## 왜 쓰는가
뇌 후성유전체는 사후 조직으로만 볼 수 있고, 초기 생애 스트레스(ELS)의 **발달 시점** 상태는 원리적으로 관찰 불가능하다. 그래서 임상 연구는 접근 가능한 말초 조직으로 우회해 왔다.

## 주요 표적과 소견

| 유전자 | 기능 | ELS 연관 소견 | 주의점 |
|---|---|---|---|
| **`NR3C1`** | 글루코코르티코이드 수용체(GR) | 모유수유 영아 타액에서 메틸화 **감소**. ELS 후 프로모터 메틸화 **증가**가 성인기까지 지속. 태내 친밀관계 폭력 노출·아동기 외상과 연관 | **방향 불일치** — 백혈구에서는 ACE 수·불안 증상과 **음의** 상관. 조직 특이적 동역학 시사 |
| **`BDNF`** | 신경영양인자, 시냅스 가소성 | ELS 이력 청년 혈액에서 프로모터 메틸화 증가 | **연령 의존** — 65세 이상에서는 연관 소실. 전체 문헌은 혼재 |
| **`SLC6A4`** | 세로토닌 수송체(5-HTT) | 붉은털원숭이 육아실 양육에서 고메틸화. 타액 CpG 섬 메틸화가 **ELS 노출량 의존적**으로 증가 | `HTR1A`는 반대로 연관이 약함 |
| **`GRIN2B`** | NMDAR GluN2B 서브유닛 | ELS 성인 혈액에서 다수 CpG 메틸화 증가 | ★ **ELS 후 MDD로 진행한 군과 진행하지 않은 군 사이에 차이 없음** → 노출의 각인이지 질환의 표지가 아니다 |
| **`PXDN`** | peroxidasin(심혈관 기능) | 고ELS 혈액에서 고메틸화 | ★ **정서적 학대와 양의 상관, 신체적 학대와는 무관** → 역경의 *종류*가 지형을 다르게 바꾼다 |

## 해석 규칙 (이 페이지의 핵심)

1. **말초 ≠ 뇌**. 말초 시그니처는 **전신(systemic) 반응**을 반영하며 뇌 특이적 후성유전 상태와 직접 대응하지 않는다. "혈액에서 `NR3C1` 메틸화가 올랐다"에서 "해마 GR 신호가 눌렸다"로 건너뛰면 안 된다.
2. **노출의 표지와 질환의 표지는 다르다**. `GRIN2B` 사례가 결정적이다 — ELS만 있고 MDD가 없어도 같은 변화가 있다. 노출 이력 추정에는 쓰이되 **질환 예측에는 그대로 쓸 수 없다**.
3. **방향이 뒤집힌다**. `NR3C1`은 조직(타액 vs 백혈구)과 코호트에 따라 증가·감소가 갈린다. 메타분석 없이 단일 코호트 방향을 인용하지 말 것.
4. **역경의 종류를 층화해야 한다**. 정서적 학대 vs 신체적 학대, 결핍 vs 위협이 서로 다른 지형을 만든다. ACE 총점 하나로 뭉개면 신호가 사라진다.
5. **세포 구성 문제**. 혈액은 세포 조성이 변하는 조직이다. bulk 메틸화 차이가 면역세포 구성 변화일 수 있다 — [[concept-glia-stress-plasticity|뇌 조직에서의 같은 함정]]과 동일한 논리.

## 사용자 lab 적용
- **쓸 수 있는 용도**: 코호트 층화(고위험 하위집단 식별), 노출 이력의 객관적 보조 지표, 종단 추적의 상대 변화.
- **쓰면 안 되는 용도**: 뇌 회로 상태의 대리, 치료 반응의 기전적 설명, 단일 CpG를 근거로 한 개인 수준 예측.
- **DTx 접점**: [[kim-2021-digital-therapeutics-for-obesity|비만 DTx]]의 반응 예측은 현재 **baseline 심리지표**가 주도한다([[kim-2020-multidimensional-cognitive-behavioral-therapy|Kim 2020]]). 말초 후성유전을 추가하려면 위 규칙 1·2를 만족하는 설계(질환 진행군·비진행군 분리, 다조직 비교)가 선행되어야 한다.
- **대사 쪽 대응 사례**: [[concept-cis-regulatory-element-obesity]]는 같은 크로마틴 정보를 **유전 변이** 쪽에서 읽는 상보적 접근이고, [[concept-glp1ra-response-variability]]는 약물 반응 예측의 유전·비유전 기여 상한(전체 예측 R² 약 25%)을 이미 정량화해 둔 사례다. 후성유전 표지도 같은 수준의 기여도 보고를 요구해야 한다.

## 관련 페이지
- [[cunningham-2026-early-life-experiences-the-neural]] — 본 개념의 1차 출처(NRN 2026). Fig. 3이 말초 시그니처의 범위와 한계를 도식화.
- [[concept-early-life-adversity]] — 노출 축의 상위 hub.
- [[concept-epigenetic-priming]] · [[concept-h3-dopaminylation]] — **뇌 쪽** 기전. 말초 표지가 대리하지 *못하는* 대상이 정확히 이것들이다.
- [[concept-glia-stress-plasticity]] — 세포 구성이 bulk 결과를 오염시키는 같은 문제의 뇌 조직판.
- [[concept-cis-regulatory-element-obesity]] — 크로마틴 정보를 유전 변이로 읽는 상보 축.
- [[concept-glp1ra-response-variability]] — 예측 바이오마커의 기여도를 정직하게 보고한 대사 분야 모범 사례.
- [[concept-digital-therapeutics]] · [[kim-2021-digital-therapeutics-for-obesity]] · [[kim-2020-multidimensional-cognitive-behavioral-therapy]] — 비침습 반응 예측이 필요한 사용자 lab 임상 라인.
- [[concept-emotional-eating]] · [[tomiyama-2019-stress-and-obesity]] — 스트레스 노출이 대사 표현형으로 이어지는 임상 경로.
- [[person-maze-ian]] — 출처 그룹.
