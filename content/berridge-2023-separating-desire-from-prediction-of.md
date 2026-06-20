---
title: "Berridge 2023 — Separating desire from prediction of outcome value"
type: paper
created: 2026-06-21
updated: 2026-06-21
source: raw/2023 Separating desire from prediction of outcome value.pdf
authors: [Kent C. Berridge]
year: 2023
journal: Trends in Cognitive Sciences
---

> [!takeaway] 연구 방향 관점의 핵심
> **‘갈망(wanting, incentive salience)’은 ‘결과가치 예측’으로 환원되지 않는 독립 동기 과정**이라는 Berridge의 정면 논증. 예측처리(PP)·시간차(TD) 강화학습이 욕망을 "이득 예측"으로 치환하는 데 반대하며, 두 결정적 반례 — **‘혐오스러운 줄 알면서 원하기’**(소금욕구 상태에서 CS+짠맛을 첫 재노출에 즉시 원함)와 **‘아플 줄 알면서 원하기’**(CeA 광자극+전기충격봉)— 로 **‘갈망’이 기억·예측·실제 ‘좋아함’을 모두 초과**할 수 있음을 보인다. 사용자 [[concept-need-motivation-pleasure-utility|NMPU]]의 **Motivation 축**이 Pleasure(liking)·예측가치와 분리됨을 뒷받침하고, [[concept-incentive-sensitization|중독·과식]]·[[adam-2026-dopamine-takes-hit-how-neuroscience|도파민 RPE 논쟁]]에 직접 개입. 식락학 [[overview-sikrakhak-ch20-opioid-dopamine-liking-wanting|Ch 20]]의 ‘wanting’ 절 1차 근거.

# Separating desire from prediction of outcome value (Berridge 2023)

## 한 줄 요약
욕망(desire)을 결과가치 예측(prediction of gain)으로 환원하려는 시도(predictive processing·TD 강화학습)에 맞서, **incentive salience(‘갈망’)가 고유한 작동규칙으로 예측·기억·‘좋아함’에서 완전히 분리될 수 있음**을 두 실험적 반례로 증명한 Berridge 단독 리뷰 (Trends Cogn Sci 2023).

## 배경 — 욕망 = 예측? (이론 쟁점)
- 통념: 사람은 ‘좋아할 것으로 예측’되는 것을 원한다(학습된 예측 = affective memory 기반). 일부 PP·계산 RL 진영은 **욕망을 ‘이득 예측’으로 치환**해 별도 동기과정을 제거.
- Berridge 반론: **‘갈망’(incentive salience)은 중뇌-변연계(VTA→[[concept-nucleus-accumbens|NAc]]·선조체+피질변연 glutamate) 회로의 고유 규칙**으로 작동. 의식/무의식 모두 가능 → 따옴표 ‘wanting’으로 표기. 인지적 wanting(피질 의존)과 구별.

## ‘갈망’(incentive salience)의 4규칙
1. **단서 = 동기적 자석**: 보상 CS가 주의 포획·접근 유발(sign-tracking; 보상 손실을 감수해도 지속). 인간 eye-tracking 주의 편향, cocaine 사용자의 ‘chase ghosts’.
2. **부재 단서 추구**: 조건강화 — 보상 없이 CS만 얻으려 새 반응 학습.
3. **단서가 유혹 점화**: cue-triggered ‘wanting’(PIT) — 음식 냄새가 갑자기 배고픔 유발; 도파민 자극·감작으로 증폭.
4. **뇌/생리 상태가 단서 유혹을 조절** ★: 배고픔·포만·중독·스트레스가 cue-triggered ‘wanting’의 크기·valence를 바꿈 = **incentive alliesthesia**(hedonic alliesthesia의 동기 버전). 이 상태조절이 ‘갈망’을 예측에서 떼어내는 무대.

## 두 결정적 반례 (desire ≠ prediction)
### ① ‘혐오스러운 줄 알면서 원하기’ (Robinson & Berridge 2013)
- CS+짠맛 레버 = Dead Sea 농도(9% NaCl) 혐오 UCS 예측 → 평소 회피.
- 새 **소금욕구 상태**(angiotensin II + aldosterone 주입) 유발 후, **첫 재노출에 즉시** CS+짠맛에 접근·nibble(sign-track) — **짠맛을 ‘좋아함’으로 재경험하기 전, 오직 부정적 기억만 있는 상태에서**.
- 신경기질: VTA·NAc Fos(mesolimbic incentive salience). 맥락의존 학습으로 설명 불가(긍정 맥락기억 없음). 감각짠맛 기억 × 상태가 incentive salience를 즉석 재계산(MAIS 모델).

### ② ‘아플 줄 알면서 원하기’ (Warlow et al. 2020)
- **CeA(중심편도) ChR2 광자극을 전기충격봉(shock rod) 접촉과 짝지음** → 쥐가 충격봉을 반복 접촉·장벽 넘어 추구·충격-CS 소리를 얻으려 새 반응 학습(‘wanting what hurts’).
- 충격은 여전히 아픔(flinch), 레이저 끄면 즉시 회피 복귀 → 예측은 정확. 그런데도 **정확히 ‘아플 줄 예측’되는 대상을 원함** → 예측기반 욕망론에 탈출구 없음.
- counterconditioning 아님(보상 UCS 없음, 레이저 단독 자가자극도 약함). **‘좋아함’ 증가 아님**(설탕 미각반응 무변). CeA ChR2 + 설탕/코카인 → 한 표적에 ‘중독’처럼 ‘갈망’ 집중(승자독식). 신경기질: VTA·NAc Fos.

## 계산 모델
- **model-free**: V(st)=r(rt+log κ)+γV — 상태 κ가 로그변환으로 음→양 전환하나 심리기전 부재.
- **MAIS(multi-attribute incentive salience, model-based)**: 감각기억 rNa × 상태 κNa 상호작용으로 incentive alliesthesia를 심리적으로 설명.

## 임상 함의
- **incentive-sensitization**: 취약 개인의 mesolimbic 감작 → cue-triggered ‘wanting’이 기억·예측·경험된 ‘좋아함’을 초과. 약 끊고 수개월~수년 뒤에도, 즐겁지 않아도, 부작용 알아도 재발 충동.
- **행동중독**: 도박·폭식·성·쇼핑 + Parkinson 도파민 직접작용제 유발 충동(선조체 도파민 과반응). fMRI에서 mesolimbic cue 과반응 서명.
- **avolition vs anhedonia**: 조현병·우울·Parkinson의 무동기를 ‘쾌락 결핍’이 아닌 **‘갈망’의 선택적 상실**(pleasure capacity는 보존)로 재해석.

## 사용자 lab 관점
- **NMPU 직격**: ‘갈망’=Motivation 축이 Pleasure(liking)·결과가치 예측과 분리됨을 가장 강하게 입증 → [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU framework]]의 4성분 분리 논거. ‘Need=예측된 결핍’과도 호환되나, ‘wanting’은 예측조차 초과 가능.
- **RPE 논쟁 진입**: TD/예측 도파민론에 대한 동기-기반 반론([[adam-2026-dopamine-takes-hit-how-neuroscience]], [[gershman-2024-explaining-dopamine-prediction-errors-beyond]], [[blanco-pozo-2024-dopamine-independent-effect-rewards-choices]])과 정렬 — 도파민=‘원함’ 분자(≠쾌락·≠순수 예측).
- **Ch 20 근거**: 식락학 [[overview-sikrakhak-ch20-opioid-dopamine-liking-wanting|Ch 20]]의 ‘갈망’·‘아픈 것을 원하기’·CeA 절의 1차 출처(Warlow 2020/2021).
- **비만·중독 치료**: incentive alliesthesia(스트레스·기아가 cue ‘wanting’ 증폭) → [[concept-food-addiction|음식 중독]]·stress eating·요요의 동기기전. ‘좋아함’ 아닌 ‘갈망’ 표적화.

## 관련 페이지
- [[concept-liking-wanting]] — ‘좋아함’/‘갈망’/‘학습’ 삼중 분리 개념 hub(본 논문 Box 1).
- [[concept-incentive-sensitization]] — ‘갈망’이 ‘좋아함’을 추월하는 중독 기전.
- [[warlow-2021-incentive-motivation-wanting-roles]] — CeA ‘갈망’ 승자독식·‘아픈 것을 원하기’ 동반 논문.
- [[berridge-2009-dissecting-components-of-reward]] — liking/wanting/learning 원전.
- [[robinson-2025-incentive-sensitization-30-years]] · [[robinson-2008-the-incentive-sensitization-theory]] — incentive-sensitization 이론.
- [[salamone-2012-mysterious-motivational-functions-mesolimbic]] — 도파민=노력·활성화(쾌락 아님).
- [[concept-dopamine-reward-system]] · [[concept-nucleus-accumbens]] — mesolimbic ‘갈망’ 회로.
- [[concept-need-motivation-pleasure-utility]] — ‘갈망’=Motivation 축.
- [[concept-interoception]] — incentive alliesthesia = 상태의존 동기.
- [[adam-2026-dopamine-takes-hit-how-neuroscience]] · [[gershman-2024-explaining-dopamine-prediction-errors-beyond]] · [[blanco-pozo-2024-dopamine-independent-effect-rewards-choices]] — 도파민 RPE/예측 논쟁.
- [[overview-sikrakhak-ch20-opioid-dopamine-liking-wanting]] — 식락학 Ch 20(‘갈망’ 절 근거).
- [[weber-2025-interoceptive-origin-reinforcement-learning]] — state-driven vs event-driven reward(예측·상태 framing 호환).
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
