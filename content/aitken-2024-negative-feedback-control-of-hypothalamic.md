---
title: "Negative feedback control of hypothalamic feeding circuits by the taste of food (Aitken 2024)"
type: paper
created: 2026-06-17
updated: 2026-06-17
source: "raw/2024 Neuron (Knight). Negative feedback control of hypothalamic feeding circuits by the taste of food.pdf"
authors: [Tara J. Aitken, Zhengya Liu, Truong Ly, Sarah Shehata, Nilla Sivakumar, Naymalis La Santa Medina, Lindsay A. Gray, Jingkun Zhang, Naz Dundar, Chris Barnes, Zachary A. Knight]
year: 2024
---

> [!takeaway] 연구 방향 관점의 핵심
> **음식의 "맛(taste)"이 보상(먹게 만드는 신호)일 뿐 아니라 식사를 *끝내는* 음성 피드백이기도 하다** — 맛 신호가 한 입(bout)마다 AgRP hunger 뉴런을 일시 억제하고, 이 dip이 meal 종료(satiation)를 앞당긴다. 상류 매개체는 **DMH^LepR 뉴런**(sweet·fat 맛에 동조, AgRP의 거울상으로 섭식에 time-locked 활성) — 방금 ingest한 [[garfield-2016-dynamic-gabaergic-afferent-modulation|Garfield 2016(vDMH^LepR→AgRP 억제)]]의 **맛-튜닝·meal termination 버전**. 사용자 lab의 [[concept-need-motivation-pleasure-utility|NMPU]]에서 **orosensory(맛)가 Pleasure(liking)와 satiation 음성 피드백을 동시에 담당**함을 분리한 회로 증거이고, [[concept-flavor-nutrient-conditioning|flavor-nutrient]]·[[thanarajah-2019-food-intake-recruits-orosensory|orosensory vs post-ingestive]] 연구의 시상하부 회로 짝.

# Negative feedback control of hypothalamic feeding circuits by the taste of food

- **저널/연도**: Neuron 112:1–17 (2024, OA, CC BY). DOI: 10.1016/j.neuron.2024.07.017
- **소속**: UCSF·HHMI. 교신 **[[person-knight-zachary|Zachary A. Knight]]**.

## 한 줄 요약
음식의 **맛(gustatory) 신호**가 섭취 bout마다 ARC^AgRP hunger 뉴런을 일시적으로 억제하며(post-ingestive feedback과 독립), 이 ingestion-triggered dip을 폐루프 광유전으로 막으면 satiation이 지연되어 섭취가 늘어난다. 상류의 **DMH^LepR 뉴런**이 sweet·fat 맛에 동조해 AgRP의 거울상으로 활성화되어 이 음성 피드백을 매개한다.

## 핵심 내용

### 1. AgRP는 섭취 bout마다 "맛"에 의해 일시 억제됨 (tonic 억제와 별개)
- AgRP photometry(Ensure self-paced): 식사 개시의 tonic 급감(sight/smell, 소비 전·meal 내내 지속)에 더해, **각 licking bout마다 별도의 time-locked dip**(첫 lick 직후 시작, 마지막 lick 근처 최저, τ≈9.5 s). Licking과 상관(shuffle 시 소실).
- **맛 신호가 원인, 칼로리 아님**: 물은 무효, 그러나 순수 지방(Intralipid)·당(glucose)·fructose·**sucralose(비칼로리 단맛)**·aMDG(SGLT1 자극 비칼로리)·**silicone oil(지방 식감 비칼로리)** 모두 bout dip 유발. post-ingestive 너무 빠름·CCK 길항제(devazepide) 무효 → **orosensory(sweet/fat 맛) 자체**가 매 bout AgRP를 일시 억제.
- 단, **칼로리는 baseline을 추가로 낮춤**(영양분 vs 비영양분: tonic 감소가 더 큼) → 두 성분: *맛 dip(매 bout)* + *칼로리성 지속 감소*.

### 2. ingestion-triggered dip = meal 지속(satiation) 제어
- 폐루프 광유전(ChR2 AgRP, licking에 yoked된 5 Hz로 dip 상쇄) → **섭취 증가**(satiation 개시 지연). 구체적으로 **licking bout 수↑**(bout 크기는 불변), 특히 trial 후반(satiation 시점).
- tonic 고빈도(20 Hz) 자극은 bout 수·크기 둘 다↑(인공 hunger). open-loop(무작위 타이밍)은 무효 → **타이밍이 핵심**.
- 해석: **bout 수 = incentive value(satiation 따라 감소)**, **bout 크기 = palatability/liking**. dip 차단은 bout 수(incentive value)만 바꿈 → ingestion-triggered dip은 **incentive value 감소(satiation)에 기여**하지 palatability엔 무관.

### 3. ★ 상류 = DMH^LepR, sweet/fat 맛에 동조한 AgRP의 거울상
- DMH^LepR 단일세포 GRIN imaging: 85%가 섭취에 변조. **Type 1(44%)=ingestion-activated**, licking에 time-locked(첫 lick 후 활성, 마지막 lick 근처 최대, τ≈8.8 s) = **AgRP dip의 거울상**. Type 3(28%)=trial 개시 억제.
- **맛 튜닝**: sweetness에 dose-dependent 활성(16% sucrose에서 peak, 32%에서 감소=마우스 선호와 일치). sucralose도 동일(칼로리와 분리). fat(Intralipid)·식감(silicone oil)도. salt/sour/bitter 선호 subpop은 없음 → **DMH^LepR의 맛 기능 = 칼로리(sweet/fat)의 존재를 신호**. sweet-preferring 뉴런이 가장 협소 튜닝(낮은 noise-to-signal·entropy).
- **nutrient + taste 통합**: 위내(IG) Ensure 주입도 DMH^LepR 25% 활성(느린 ramp, τ≈20 min). oral-only(60%)·IG-only(16.9%)·both(23.1%). **영양분이 맛 응답을 시간에 걸쳐 증강(potentiate)** — sweet taste alone → (분 단위) → sweet taste + nutrients = lick당 활성↑.
- **인과**: DMH^LepR 화학유전 억제(hM4Di+DCZ) → 섭취 증가(light·dark cycle), **bout 수↑**(크기 불변) = AgRP dip 차단과 동일 표현형.

### 의의
- 전통적으로 음식 맛은 *식사를 추동하는* 양성 피드백(food reward)으로 봤으나, 본 논문은 **동일 맛 신호가 satiation(meal termination) 음성 피드백도 동시에 개시**함을 보임. AgRP가 hunger의 1차 세포일 뿐 아니라 **섭취의 순간순간 dynamics(meal 크기)**도 조절.
- 회로: 음식 맛(sweet/fat) → DMH^LepR 활성(거울상) → GABAergic AgRP 억제(매 bout dip) → incentive value 감소 → meal 종료.

## 관련 페이지
- [[garfield-2016-dynamic-gabaergic-afferent-modulation]] — 같은 **DMH^LepR→AgRP 억제 회로**의 짝: Garfield는 음식 *sight/availability·가치*에 활성, 본 논문은 *taste(gustatory)*에 동조·meal termination 기능을 추가.
- [[concept-dorsomedial-hypothalamus]] — DMH^LepR이 sweet/fat 맛 + 위장관 영양을 통합해 AgRP를 끄는 거울상 노드.
- [[concept-npy-agrp-neurons]] — AgRP가 hunger뿐 아니라 bout-by-bout meal dynamics·satiation을 조절; 맛에 의한 일시 억제.
- [[concept-need-motivation-pleasure-utility]] — orosensory(맛)가 **Pleasure(liking, bout 크기)** 와 **satiation 음성 피드백(incentive value, bout 수)** 을 분리 부호화.
- [[concept-flavor-nutrient-conditioning]] — 맛 vs 영양분 분리; 본 논문은 영양분이 맛 응답을 potentiate하는 통합을 회로로 보임.
- [[thanarajah-2019-food-intake-recruits-orosensory]] — 인체 PET의 즉시 orosensory vs 지연 post-ingestive DA 분리와 정합(맛=즉시 신호).
- [[grove-2025-lateralized-pathway-associating-nutrients]] — 같은 Knight lab: post-oral fat/sugar nutrient identity→VTA-DA. 본 논문은 그 orosensory 짝(맛→DMH^LepR→AgRP).
- [[concept-appetitive-consummatory-phases]] — consummatory phase의 bout-by-bout AgRP 억제 기질.
- [[person-knight-zachary]] — 교신저자 인물 hub.
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
