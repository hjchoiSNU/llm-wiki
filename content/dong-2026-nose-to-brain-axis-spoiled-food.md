---
title: 부패취(spoiled food odor) nose-to-brain 방어회로 — retching과 혐오의 이중출력
type: paper
created: 2026-07-05
updated: 2026-07-05
source: raw/dong-2026-nose-to-brain-axis-spoiled-food.pdf
authors: [Wan-Ying Dong et al.]
year: 2026
---

> [!takeaway] 연구 방향 관점의 핵심
> 부패취(2MBA)가 후각→피질(aPir^Glu)에서 **두 갈래로 분기**해, 한쪽(MD→호흡근)은 **retching이라는 운동 방어**를, 다른 쪽(NAc)은 **혐오라는 동기 방어**를 독립적으로 구동한다 — 즉 "먹기 전(pre-ingestive) food-safety alarm"의 감각모달리티(후각) 버전이자, alarm이 운동출력과 가치출력으로 해리(dissociate)될 수 있음을 회로 수준에서 증명. 최형진 랩의 [[overview-cea-glp1r-food-safety-alarm]](섭취 후 CeA^GLP1R 경보) 틀을 **섭취 전 후각 경계 층위**로 확장하는 상보적 축이며, 시상하부-중심 식욕/혐오 회로에 "감각별 경보 → 이중출력" 설계 원리를 제공한다.

# 부패취(spoiled food odor) nose-to-brain 방어회로 — retching과 혐오의 이중출력

## 한 줄 요약
부패식품 냄새 성분 **2-methylbutyric acid (2MBA)**가 수컷 생쥐에서 **retching 유사행동**(호흡근 활성에 의한 입벌림/구역)과 **조건화 장소혐오(CPA)**를 유발하며, 이는 **후각상피(OSN)→후구(OB)→전방 조롱박피질 글루타메이트 뉴런(aPir^Glu)**에서 분기해 **aPir→MD^Glu→(VLPAG→VRG)→호흡근**(retching)과 **aPir→NAc^GABA**(혐오)의 **두 병렬 회로**로 각각 매개됨을 규명한 연구.

## 핵심 내용

### Background
- 부패취(rancid odor)는 사람에서 구토·retching·혐오를 유발해 상한 음식 섭취를 막고 대사 교란을 예방하지만, 그 신경기전은 불명확.
- 실험동물(생쥐)은 식도 골격근이 약해 실제 토출은 못 하나, **retching 유사행동**(횡격막·복부외사근 EMG 활성 = 흡기근·호기근 동시 수축)으로 구토 관련 반응을 모델링 가능.

### Method
- **행동**: 밀폐 상자 filter paper에 2MBA(15%/30%) 증발 → 흡입 중 입벌림 카운트; 대조 악취(FEN, HEX, LIM, TMT, H₂S) 및 물.
- **EMG**(횡격막·복부외사근), **CPA/RTPA**, **Anosmia 대조**(ZnSO₄ 비강 관류).
- **회로 도구**: Fos^TRAP2 표지, AAV-GCaMP6m microendoscopy(GRIN)·fiber photometry, in vivo multi-tetrode, RV/PRV/retro-AAV 추적, hM4Di 화학유전 억제, ChR2 광유전.

### Result
- **2MBA 특이성**: 오직 2MBA만 농도의존적 retching·CPA 유발(다른 악취·물 무효). ZnSO₄ anosmia에서 둘 다 소실 → **후각 경유**.
- **aPir^Glu가 핵심 노드**: 2MBA가 aPir 뉴런 활성(85% 글루타메이트성), 30%가 2MBA 반응. **hM4Di로 2MBA-TRAPed aPir^Glu 억제 → retching·혐오 둘 다 감소**.
- **분기 투사**: aPir^Glu → **MD^Glu**(mediodorsal thalamus) 및 → **NAc^GABA**로 각각 단일시냅스 투사. MD 투사 뉴런과 NAc 투사 뉴런은 대부분 별개 세포(75% 비중첩) → 두 출력 해부학적 분리.
- **회로-행동 해리(핵심 claim)**:
  - **nose→OB→aPir→MD**: retching 중 MD 특이 활성. MD 억제 → **retching 감소, 혐오 무변**. MD^Glu→VLPAG 광활성 → retching 유발(필요충분).
  - **nose→OB→aPir→NAc**: 혐오 시 NAc^GABA 활성. NAc 회로 억제 → **혐오 감소, retching 무변**. aPir→NAc 광활성 → 혐오 유발(필요충분).
- **뇌-근육 축**: MD^Glu→VLPAG→**VRG(ventral respiratory group)**→호흡근.

### Claim
부패취 방어반응은 **단일 감각노드(aPir^Glu)에서 두 개의 독립된 nose-to-brain 축**으로 분기한다: **retching(운동 방어)=aPir→MD^Glu→VLPAG→VRG→호흡근**, **aversion(동기 방어)=aPir→NAc^GABA**. 후각 기반 항구토·대사 항상성 개입의 개념 근거.

## 관련 페이지
- [[overview-cea-glp1r-food-safety-alarm]] — food-safety alarm의 **섭취 전 후각 경계** 층위(CeA^GLP1R는 섭취 후 GI 층위) — 감각모달리티만 다른 상보적 경보축.
- [[concept-cortical-amygdala]] — aPir와 인접한 후각피질편도(CoA/plCoA)가 냄새 valence를 부호화하는 자매 후각-혐오 축.
- [[concept-nucleus-accumbens]] — 본 논문의 **혐오 출력** 노드(NAc^GABA).
- [[concept-interoception]] — 구역/retching의 exteroceptive(후각) 트리거 사례.
- [[knight-liberles-2025-interoception]] — 구토·retching 방어반사의 interoception 프레임; 후각-구동 회로 사례.
- [[concept-need-motivation-pleasure-utility]] — retching(운동 방어)과 aversion(가치 방어)의 회로적 해리.
