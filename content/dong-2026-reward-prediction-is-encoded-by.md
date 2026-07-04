---
title: Reward prediction is encoded by orexin neuron activity during motivated behavior
type: paper
created: 2026-07-04
updated: 2026-07-04
source: raw/2026 PNAS reward-prediction-is-encoded-by-orexin-neuron-activity-during-motivated-behavior.pdf
authors: [Dong Y et al.]
year: 2026
---

> [!takeaway] 연구 방향 관점의 핵심
> [[concept-orexin-neurons|Orexin(hypocretin) 뉴런]]이 노력(effort) 기반 동기 행동에서 "보상 예측(reward prediction)"을 부호화하며, PR 과제에서 요구 노력이 커질수록 활성이 증가한다 — LH 회로가 단순 arousal이 아니라 예측·기대 신호를 표상함을 보인 rat 인과 증거. 최형진 lab의 시상하부 섭식·보상 회로 연구에서 orexin 뉴런을 "예측→행동 유발" 브리지로 다룰 근거이며, 광유전학 억제로 reward-seeking이 저하된다는 점은 anti-obesity/DTx 개입 표적으로서 orexin 조절의 함의를 제공.

# Reward prediction is encoded by orexin neuron activity during motivated behavior

## 한 줄 요약
Orexin-Cre BAC 형질전환 rat에서 세포 특이적 chemogenetic·optogenetic 조작과 fiber photometry로, orexin 뉴런 활성이 보상 예측 시 증가하고 보상 수령 후 감소하며 요구 노력이 클수록 강해짐을 보여, orexin이 예측된 기대를 동기 행동으로 연결한다고 주장한다.

## 핵심 내용

**Background**
- Orexin(=hypocretin) 뉴런은 시상하부(주로 lateral hypothalamus 포함)에 있으며 energy homeostasis, arousal, 동기 행동을 조절. 두 neuropeptide(orexin A/B)가 OX1R·OX2R로 작용.
- 기존 연구는 대부분 mice 대상. 저자들은 학습 능력이 높은 rat용 orexin-Cre BAC Tg rat를 자체 개발해 사용.

**Method**
- **동물/도구**: orexin-Cre BAC Tg Long-Evans rat. AAV-FLEX 기반 hM3Dq(DREADD 활성), DTA(세포 소실), ACR2(억제성 opto), ChR2(활성 opto), jGCaMP7s(Ca²⁺ photometry).
- **행동 과제**: touchscreen operant task. FR5/FR20(fixed ratio), PR(progressive ratio, breakpoint = 동기 지표).
- **약리**: CNO, methylphenidate, SB-334867(OX1R antagonist), TCS-OX2-29(OX2R antagonist); 일부 VTA 국소 microinjection.
- **기록**: wireless fiber photometry; brain slice patch-clamp로 opto 조작 검증.

**Result**
- **활성화 → 동기 증가**: hM3Dq+CNO로 orexin 뉴런 활성 시 PR breakpoint 상승. DTA로 소실 시 breakpoint 감소(52%±7.22%)이며 methylphenidate가 회복(단 orexin 발현 자체는 회복 못 함).
- **수용체**: OX1R antagonist SB-334867은 breakpoint·total touches 감소, poking은 유지 → OX1R은 노력 유지 관여. OX2R antagonist 무효. VTA 국소 주입 효과 미미.
- **동적 활성(photometry)**: FR5에서 보상 직전 터치에서 상승, 보상 획득 후 baseline 이하로 감소. FR20(고노력)에서 FR5보다 활성이 더 높음(effort-dependent).
- **보상 없을 때**: nonreward trial에서 활성이 감소 없이 유지(sustained) → reward omission 시 지속 활성. cue 있는 active reward-seeking이 inactive보다 활성 높음.
- **광유전학 억제(ACR2)**: 마지막 active touch 후 1.65 s 억제 시 FR5 완료 지연·breakpoint·cumulative presses 감소 → cue 유발 동기 행동에 인과적 필요. ITI 중 억제는 무효.
- **광유전학 활성(ChR2)**: cue 유발 동기 행동에 유의한 증가 효과 없음(기저 활성이 이미 높을 가능성).

**Claim**
- Orexin 뉴런은 보상 예측을 부호화하고 예측을 행동으로 잇는 브리지이며, 이 반응은 요구 노력의 크기에 의존한다("자기 노력 대비 인센티브 기대"). 단순 arousal만으로는 설명되지 않는다.
- 보상 예측 직전의 짧은 억제만으로 동기 행동이 차단되어, 이 시간창의 orexin 활성이 reward-seeking perseverance에 필수적.
- Orexin 활성은 dopamine 예측 오류와 유사하게 조절될 수 있으며(reward omission 시 지속 활성), VTA→LH 회로·mesolimbic dopamine과의 연관을 시사.

## 관련 페이지
- [[concept-orexin-neurons]] — orexin/hypocretin 뉴런 개념 hub.
- [[concept-lateral-hypothalamus]] — orexin 뉴런의 주 소재지이자 본 연구의 조작·기록 표적.
- [[barbosa-2023-an-orexigenic-subnetwork-within-the]] — LH 내 orexigenic 회로/섭식 유발 서브네트워크와의 관계.
- [[korotkova-2026-balancing-acts-lateral-hypothalamic]] — LH 세포군의 동기·행동 조절 균형 리뷰 맥락.
- [[concept-dopamine-reward-system]] — orexin→VTA/mesolimbic dopamine 연결, reward prediction 부호화 비교.
- [[concept-nucleus-accumbens]] — orexin 뉴런이 NAc GABA 투사 억제(disinhibition)로 섭식 조절.
- [[concept-primary-reward-signals]] — 보상 예측 vs 보상 수령(primary reward) 활성 구분.
- [[hamid-2016-mesolimbic-dopamine-signals-value-work]] — 노력/일 대비 가치 부호화와 effort-dependent orexin 활성 대비.
- [[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation]] — motivation vs learning 신호 분리 관점 비교.
- [[concept-appetitive-consummatory-phases]] — reward-seeking(appetitive) 증가·보상 후(consummatory) 감소 패턴과 대응.
- [[gershman-2024-explaining-dopamine-prediction-errors-beyond]] — reward prediction error 이론 관점에서 orexin 지속 활성 해석.
- [[overview-behavioral-neuroscience-of-motivation-2016]] — 동기의 행동신경과학 종합 맥락.
