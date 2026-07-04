---
title: 분리된 후각피질편도(plCoA) 회로에 의한 선천 후각 valence 제어
type: paper
created: 2026-07-05
updated: 2026-07-05
source: raw/howe-2026-control-of-innate-olfactory-valence.pdf
authors: [Howe JR, Chan CL, et al.]
year: 2026
---

> [!takeaway] 연구 방향 관점의 핵심
> 후각 valence(유인 vs 회피)가 단일 뇌영역 안에서 **투사표적(NAc=유인 / MeA=회피)으로 분리된 두 뉴런 집단**에 의해 결정된다 — 냄새의 좋고 나쁨은 감각영역에서 정체성으로 부호화되지 않고 **하류 valence 특이 표적으로 라우팅**되는 population code로 만들어진다. 최형진 랩의 식욕·food safety alarm 관점에서, [[concept-nucleus-accumbens]](접근·식욕) vs 편도(회피·혐오) 이분법이 미각·내수용뿐 아니라 **후각(음식 냄새의 안전/위험 판단)에서도 동일 회로 원리**로 구현됨을 보여주는 병렬 사례.

# 분리된 후각피질편도(plCoA) 회로에 의한 선천 후각 valence 제어

## 한 줄 요약
후측외측 피질편도(posterolateral cortical amygdala, plCoA)는 냄새 정체성을 sparse population code로만 부호화하고 valence는 부호화하지 않으며, 대신 전후축(AP)을 따라 위치·분자·투사표적이 분리된 뉴런 집단 — 전측(aplCoA)→MeA 투사=회피, 후측(pplCoA)→NAc 투사=유인 — 이 선천 후각 valence를 결정한다.

## 핵심 내용

**배경/문제** — plCoA는 후각구에서 정렬된 입력을 받는 3차 후각영역으로 선천 후각 유인·회피에 필요·충분(Root 2014). 선행연구 충돌(Root 2014 공간조직 有 vs Iurilli & Datta 2017 無)을 해소하고 회로 구조가 valence를 어떻게 제어하는지 규명.

**방법(다중 스케일)** — 2광자 Ca²⁺ 이미징(GRIN), 4-quadrant open field 광유전, snRNA-seq(47,132 nuclei), Visium 공간전사체, 회로추적, 세포형·투사표적 특이 chemogenetic 억제(hM4Di). 냄새: 유인 2PE·Peanut, 중립 heptanol·IAA, 회피 TMT·4MT.

**결과 1 — plCoA는 냄새 정체성만 부호화, valence는 안 함** — 반응 sparse. SVM이 집단 수준 **정체성**은 해독하나 valence는 해독 못함. 전측/후측 valence 차이 유의하지 않음.

**결과 2 — AP축이 valence의 기능축** — ChR2 광자극: **전측(aplCoA)=회피, 후측(pplCoA)=유인**. sparse ensemble 자극도 동일. 불안·이동성 무변(valence 특이적).

**결과 3 — 분자 세포형이 AP축을 따라 분리** — 글루타메이트 뉴런이 **Group1=VGluT2(Slc17a6), Group2=VGluT1(Slc17a7)**. 전측=VGluT2⁺ 우세, 후측=VGluT1⁺ 우세(연속 gradient, Visium 확인).

**결과 4 — 분자 정의 집단의 행동** — 중간부 주입 시 **VGluT2⁺ 자극=회피, VGluT1⁺ 자극=유인**. hM4Di 억제: **VGluT1⁺ 억제는 2PE 유인 제거**(TMT 회피 유지); VGluT2⁺는 회피에 충분하나 필요치 않음.

**결과 5 — 투사표적이 valence를 정의** — 역행 추적: **MeA 투사 뉴런=aplCoA 편중, NAc 투사 뉴런=pplCoA 편중**(반대 gradient). MeA/NAc 투사는 대체로 비중첩.

**결과 6 — 투사 정의 회로가 회피/유인 매개** — plCoA→MeA 광자극=회피, plCoA→NAc 광자극=유인. **plCoA→NAc 억제는 2PE 유인 제거**, **plCoA→MeA 억제는 TMT 회피 감소**(교차 무영향).

**모델/결론** — plCoA는 labeled-line도 divergent-path도 아닌 **하이브리드**: 정체성은 sparse population code로 유지하고 valence는 **하류표적(MeA=회피, NAc=유인) 라우팅**으로 결정. valence는 MeA-투사 vs NAc-투사 뉴런의 **비율(balance)**로 결정 가능. **한계**: TMT/2PE 2개 냄새만; head-fixed valence 부호화 부재의 인공산물 가능성.

## 관련 페이지
- [[concept-cortical-amygdala]] — 본 논문이 규명한 plCoA(후각피질편도) valence 라우팅 hub. Root 2014 계보.
- [[overview-cea-glp1r-food-safety-alarm]] — 편도 기반 회피·food safety alarm과 병렬: 후각 회피가 aplCoA→**MeA** 경로로 매개(후각판 안전/위험 판단).
- [[concept-nucleus-accumbens]] — pplCoA→**NAc** 투사가 후각 **유인**에 필요·충분.
- [[concept-basolateral-amygdala]] — 편도 divergent-path valence motif 비교; plCoA는 정체성 부호화 유지 점에서 구별.
- [[concept-liking-wanting]] — 후각 유인(→NAc) 경로가 접근/wanting 회로와 접점.
- [[concept-need-motivation-pleasure-utility]] — 선천 valence(감각→접근/회피)의 utility 프레임.
- [[concept-interoception]] — 외수용(후각) valence와 내수용의 대비(동일 NAc/편도 표적 이분법 반복).
