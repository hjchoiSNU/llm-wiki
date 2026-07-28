---
title: "De novo protein design (신규 단백질 설계)"
type: concept
created: 2026-07-28
updated: 2026-07-28
---

> [!takeaway] 연구 방향 관점의 핵심
> 딥러닝(RFdiffusion·ProteinMPNN·AlphaFold)으로 표적 수용체에 결합하는 단백질을 **처음부터 설계**하는 기술. 이제 [[concept-gpcr-drug-discovery|GPCR]] 작용제·길항제까지 만들어내며, 사용자의 식욕·대사 수용체(GLP1R·GIPR·MC4R)를 겨냥한 맞춤 리간드 설계 도구가 된다.

# De novo protein design (신규 단백질 설계)

## 한 줄 요약
자연 단백질을 모방하지 않고, 원하는 기능(결합·촉매·구조)을 목표로 아미노산 서열·구조를 컴퓨터로 새로 설계하는 분야. David Baker의 2024 노벨화학상 주제.

## 핵심 내용
- **핵심 도구**: **RFdiffusion**(구조 diffusion 생성; motif-guided로 깊은 pocket 표적), **ProteinMPNN**(서열 설계), **AlphaFold2/RoseTTAFold**(구조 예측·필터), MetaGen(metaproteome scaffold).
- **GPCR 응용**([[muratspahic-2026-de-novo-design-of-miniproteins|Muratspahić 2026]]): 11개 GPCR에 miniprotein 작용제·길항제 설계(GLP1R·GIPR·GCGR·MC4R 포함), cryo-EM 검증, partial/full·[[concept-biased-agonism|biased]] agonism 튜닝.
- **의의**: 항체/펩타이드 스크리닝 없이 표적 맞춤 리간드 생성 → 창약 파이프라인 단축. [[pun-2026-target-identification-and-assessment-in|AI 표적 발굴]]과 함께 AI 창약의 두 축.

## 관련 페이지
- [[muratspahic-2026-de-novo-design-of-miniproteins]] — GPCR de novo 리간드(근거).
- [[person-baker-david]] — 분야 개척자.
- [[concept-gpcr-drug-discovery]] · [[concept-biased-agonism]] — 창약 응용.
- [[pun-2026-target-identification-and-assessment-in]] · [[concept-ai-drug-discovery]] — AI 창약 자매 축.
