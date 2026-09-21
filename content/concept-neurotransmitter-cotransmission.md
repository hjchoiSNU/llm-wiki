---
title: 신경전달물질 공방출 (Co-transmission / co-release)
type: concept
created: 2026-09-21
updated: 2026-09-21
---

> [!takeaway] 연구 방향 관점의 핵심
> **"어느 전달물질을 쓰는 뉴런인가"는 세포의 이름이 아니라 세포의 한 속성일 뿐이다.** 하나의 뉴런이 도파민·글루타메이트·GABA를 **함께** 방출할 수 있고, 같은 축삭 안에서도 소포가 구획화된다. 사용자 연구에 주는 함의 세 가지.
> ① **빠른 신호와 느린 신호의 분리**: 도파민 뉴런이 내는 **밀리초 단위 시냅스 효과는 글루타메이트**이고 도파민은 그 뒤에 수용체로 얹힌다 — [[mingote-2019-dopamine-glutamate-neuron-projections-to|Mingote 2019]]의 EPSC가 CNQX로 차단된다는 사실이 그 증거다. "도파민이 무엇을 부호화하는가" 논쟁([[concept-dopamine-reward-system]])은 **도파민이 아닌 물질이 일을 하고 있을 가능성**을 계산에 넣어야 한다.
> ② **공방출 아형 = 조작 가능한 표적**: 공방출 여부가 **투사 표적과 짝지어져 있어**(DA-GLU→NAc medial shell / DA-only→lateral shell·core) 교차 유전학으로 분리 조작할 수 있다.
> ③ **표지자 함정**: TH⁺이라고 도파민을 내는 것이 아니고, TH-Cre 계통은 위양성을 포함한다 — 회로 논문을 읽을 때 **드라이버 라인이 무엇을 정의했는지**를 먼저 확인해야 한다.

# 신경전달물질 공방출 (Co-transmission / co-release)

## 한 줄 요약
한 뉴런이 **둘 이상의 전달물질을 방출**하는 현상. 중뇌 도파민계에서 특히 체계적으로 규명됐으며([[morales-2017-ventral-tegmental-area-cellular-heterogeneity|Morales & Margolis 2017]]), 공방출 조합이 **해부학적 위치·투사 표적·행동 기능과 짝지어진다**는 점에서 "도파민 뉴런"이라는 단일 범주를 해체한다.

## 핵심 내용

### 주요 조합 (중뇌 VTA 기준)
[[morales-2017-ventral-tegmental-area-cellular-heterogeneity|Morales 2017]]이 정리한 4가지 비정통 조합:

1. **DA + 글루타메이트 (DA-GLU)**
   - VGLUT2를 공발현하는 도파민 뉴런. **같은 축삭 안에서 DA 소포와 Glu 소포가 별도 microdomain으로 분리**된다(Zhang 2015) → 빠른 흥분(Glu)과 느린 조절(DA)을 동시에 낼 수 있다.
   - 최초 보고는 **1990년대 말**(Sulzer 1998). 이후 TH·VGLUT2 mRNA 공발현 연구로 **내측 VTA 편중**이 확립(Kawano 2006; Yamaguchi 2011; Steinkellner 2018), 분자 아형 매핑으로 재확인(Poulin 2018).
2. **DA + GABA**
   - **비정통 경로**: GAD 효소 발현이 소수인데도 GABA를 방출한다. **혈장막 재흡수**(Tritsch 2014)와 **ALDH1A1 매개 합성**(Kim 2015)으로 GABA를 조달하고, vesicular GABA transporter 없이 **VMAT2로 소포에 적재**한다(Tritsch 2012).
3. **글루타메이트 + GABA** (mesohabenular)
   - 단일 말단에 **VGLUT2 + VGAT 동시 발현**(Root 2014). 같은 표적 뉴런에 비대칭·대칭 시냅스를 모두 형성.
4. **TH⁺ + GABA, 도파민 없음** (LHb 투사)
   - TH는 있으나 **VMAT2/DAT가 없어 사실상 도파민을 분비하지 않는다**. "TH 뉴런 = 도파민 뉴런"으로 분류하면 오류.

### 공방출은 해부학과 짝지어진다
[[mingote-2019-dopamine-glutamate-neuron-projections-to|Mingote 2019]]가 **INTRSECT 교차 유전학**(TH-Flp ; VGLUT2-Cre)으로 두 집단을 분리 표지해 정량한 결과:

| | DA-GLU (Con/Fon) | DA-only (Coff/Fon) |
|---|---|---|
| VTA TH⁺ 중 비율 | **~31 ± 2.6%** | **~71 ± 4.6%** |
| 위치 | 내측 VTA — **IF·CLi·PN** | 외측 VTA — **PBP** |
| 투사 | **NAc medial shell**(+후각결절)에 국한 | lateral shell·core·배측 선조체; **dorsal medial shell 회피** |
| 표지 특이도 | 87 ± 2.6% | 93 ± 1.0% |

→ NAc **dorsal medial shell의 도파민 말단은 사실상 전부 DA-GLU 기원**이다. 공방출 여부가 곧 **구획 특이적 조작 핸들**이 된다.

### 기능적 함의 — 어느 물질이 일을 하는가
- Mingote 2019에서 medial shell의 광유발 EPSC는 **CNQX로 차단**된다 → 빠른 시냅스 효과는 **글루타메이트/AMPA**. 도파민은 [[concept-striatal-cholinergic-interneuron|ChI]]의 **pause** 상에 D2/GIRK로 뒤늦게 개입한다.
- 따라서 "도파민 뉴런을 광자극했더니 행동이 바뀌었다"는 결과는 **도파민의 효과가 아닐 수 있다**. 실제로 도파민 뉴런 광자극의 NAc 후시냅스 효과는 **도파민 뉴런에서 VGLUT2를 결손시키면 사라진다**(Wang 2017).
- 행동 수준에서도: **도파민 뉴런의 글루타메이트 공전달을 손상시키면 잠재억제가 강화되고 행동 전환이 차단된다**(Mingote 2017) — 도파민은 그대로 두고 글루타메이트만 뺐을 때 나타나는 표현형.

### 방법론 — 표지자의 함정
- [[morales-2017-ventral-tegmental-area-cellular-heterogeneity|Morales 2017]] 스스로 경고: **TH-Cre 계통은 위양성**을 낸다(mRNA만 있고 단백질 없는 뉴런 포함).
- **교차 조합(intersectional) 유전학**이 그 해법이다. INTRSECT(Fenno 2014)의 **Con/Fon**(Cre-on/Flp-on)은 두 재조합효소가 **모두** 있는 세포만, **Coff/Fon**(Cre-off/Flp-on)은 Flp만 있고 Cre가 **없는** 세포만 표지한다.
- ⚠️ **Coff/Fon의 구조적 약점**: 재조합효소의 **부재**로 집단을 정의하므로, Cre 라인이 놓친 세포(위음성)가 그대로 "DA-only"로 분류된다. 즉 DA-only 집단의 순도는 VGLUT2-Cre 라인의 민감도에 상한이 걸린다.

## 관련 페이지
- [[morales-2017-ventral-tegmental-area-cellular-heterogeneity]] — 공방출 조합의 원 분류표(단, DA-GLU의 NAc 표적·PBP 귀속은 Mingote 2019와 충돌).
- [[mingote-2019-dopamine-glutamate-neuron-projections-to]] — DA-GLU 집단의 정량·투사 지형·시냅스 표적을 INTRSECT로 확정.
- [[concept-dopamine-reward-system]] — "도파민이 무엇을 부호화하는가" 논쟁에 **전달물질 정체**라는 축을 추가.
- [[concept-striatal-cholinergic-interneuron]] — DA-GLU 글루타메이트의 최강 수신자이자 도파민이 D2/GIRK로 뒤늦게 작용하는 세포.
- [[concept-nucleus-accumbens]] — 공방출 아형에 따라 medial/lateral shell 지배가 갈리는 표적 구조물.
- [[concept-lateral-habenula]] — Glu+GABA 공방출(mesohabenular)의 표적.
- [[onimus-2026-dopamine-ensembles-regulating-appetite]] — 도파민 ensemble 종합에서 공방출 아형의 섭식 역할이 미해명 과제로 남아 있는 지점.
- [[concept-medium-spiny-neuron]] — 공방출 입력이 직접 흥분시키면서도 국소회로를 경유해 순 억제하는 출력 세포.
