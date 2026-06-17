---
title: Central amygdalar GLP-1R neurons (CeA^Glp1r)
type: concept
created: 2026-05-31
updated: 2026-05-31
aliases: [CeA Glp1r, CeA^Glp1r, central amygdala GLP-1R, 중심편도 GLP-1R, Glp1r^CeA, CeM Glp1r]
---

> [!takeaway] 연구 방향 관점의 핵심
> **CeA^Glp1r는 GLP-1RA 약리에서 "쾌락(hedonic) feeding 전담" 노드**로 2026년 새로 규명된 GABAergic 세포군. **NTS^Gcg → CeA^Glp1r(GABA) → VTA DA 억제 → NAc 도파민 방출↓** 회로로 **기호성 고지방식(palatable HFD) 섭취만 선택적으로 억제**하고 표준식이·체중 항상성은 거의 건드리지 않음. 사용자 lab의 [[kim-2024-glp-1-increases-preingestive-satiation|DMH GLP-1R cognitive satiation]]이 **homeostatic 축**이라면 CeA^Glp1r은 **hedonic 축** — [[concept-need-motivation-pleasure-utility|NMPU]]의 Motivation·Pleasure에 약리적으로 진입하는 새 표적. 경구 small-molecule(orforglipron·danuglipron)이 BBB를 넘어 직접 작용 가능하다는 점에서 차세대 항비만·중독 치료의 핵심 무대.

# Central amygdalar GLP-1R neurons (CeA^Glp1r)

## 정의
중심편도(central amygdala, CeA) — 특히 내측 CeM — 에 위치한 **GLP-1 수용체(Glp1r) 발현 GABAergic 뉴런**. 말초·중추 GLP-1RA 투여 시 일관되게 동원되며, GLP-1RA의 **기호성(hedonic) feeding 억제 효과를 전담**하는 회로 노드. 인접한 [[concept-basolateral-amygdala|기저외측 편도(BLA)]]와는 별개 nucleus.

## 분자·세포 정체
- **GABAergic** (glutamatergic marker 없음). [[godschall-2026-a-brain-reward-circuit-inhibited|Godschall 2026]] snRNA-seq: **Vdr(vitamin D receptor)+ cluster**.
- **~30% Pnoc(prepronociceptin) 공발현** — Pnoc^CeA는 palatable feeding 촉진(Hardaway 2019) → CeA^Glp1r과 **reciprocal(길항)** 관계 추정.
- CeM에서 Sst·PKCδ(Prkcd) population과 **비중복** 분포 (Zeng 2021).
- **Gs–cAMP** 신호: GLP1RA 결합 → cAMP 상승 → 탈분극·흥분성↑.

## 회로 — NTS^Gcg → CeA^Glp1r → VTA → NAc DA ↓ ★
[[godschall-2026-a-brain-reward-circuit-inhibited|Godschall 2026 (Nature)]]가 규명한 분산 mesolimbic 억제 회로:
- **상류**: [[concept-dorsal-vagal-complex|NTS]]^Gcg(중추 GLP-1 주공급원) → CeA에 종말 형성. NTS^Gcg→CeA 종말 자극 → **HFD만 억제**(SD 무변) = 내인성 GLP-1 입력.
- **노드**: CeA^Glp1r (GABAergic).
- **하류**: CeA^Glp1r → [[concept-dopamine-reward-system|VTA DA 뉴런]] 투사(retrograde + monosynaptic rabies 확인). CeA→VTA 종말 광자극 → HFD만 억제.
- **출력**: NAc 도파민 측정(dLight) — liraglutide·danuglipron·orforglipron 모두 **HFD 유발 NAc 도파민 peak 감쇠**. → hedonic feeding brake.
- 기존 hindbrain→midbrain GLP1R 경로(Alhadeff·Hayes 2012)와 **병렬**.

## 기능 — hedonic feeding 전담
- **selectivity**: CeA^Glp1r 활성(ChR2)·human GLP1R 발현+danuglipron → **기호성 HFD 섭취만 억제, 표준식이(SD)·체중·에너지소비 무변** ([[godschall-2026-a-brain-reward-circuit-inhibited|Godschall]]).
- **necessity**: CeA에서 Glp1r 삭제 → liraglutide의 HFD 억제 능력 감소(SD 무변).
- [[duran-2026-the-central-amygdala-integrates|Duran 2026]]: 말초 Ex-4가 CeA를 빠르고 지속적으로 활성(Exendin-9로 차단). **Glp1r^CeA 억제 → Ex-4의 HFD 억제를 강하게 rescue(~30%)**, 표준식이(~10%)보다 큼 → homeostatic보다 hedonic 억제.
- CeA = global hunger/satiety가 아닌 **food valence(쾌락가)** 인코딩.

## CeA 세포종류 분업 ([[duran-2026-the-central-amygdala-integrates|Duran 2026]])
| CeA population | Ex-4 hypophagia 효과 |
|---|---|
| **Prkcd(PKCδ)** | 필요 (광범위) |
| **Glp1r** | **HFD(hedonic) 전담**, SD 약한 attenuation |
| **Sst** | 불필요 |
- 모든 rescue가 **불완전** → CeA는 brain-wide anorexigenic system의 한 노드(병렬 회로 존재).

## 약리 — small-molecule·humanized 수용체
- **Glp1r^S33W humanized 마우스**(CRISPR Ser33→Trp): 경구 small-molecule(danuglipron·orforglipron) 감수성 획득. danuglipron(555.6 Da)이 **BBB 통과 → 심부 CeA 직접 활성** 입증.
- 말초 large-peptide GLP1RA는 대부분 circumventricular organ([[concept-dorsal-vagal-complex|AP]])에 축적 → CeA는 주로 **indirect(NTS^Gcg 경유)** 동원이나, posterior CeA·저분자 약물은 직접 결합 가능 → 직·간접 혼재.
- [[gao-2026-semaglutide-drives-weight-loss-through|Gao 2026]]: 세마글루타이드도 CeA를 Fos 동원 — DVC 1차 작용의 downstream으로 CeA 연결.

## 사용자 lab 관점
- **homeostatic vs hedonic 분업**: 사용자 lab의 [[kim-2024-glp-1-increases-preingestive-satiation|DMH GLP-1R]]·[[park-2025-glucagon-like-peptide-1-and-hypothalamic|Park 2025]] cognitive satiation = **homeostatic 축**, CeA^Glp1r = **hedonic 축**. GLP-1RA 약리의 두 평행 회로.
- **NMPU 진입점**: CeA^Glp1r은 [[concept-need-motivation-pleasure-utility|NMPU]]의 **Motivation·Pleasure(wanting 도파민 게이트)** 축에 약리적으로 진입.
- **중독 응용**: hedonic LHA→VTA→NAc 가소성([[stuber-2025-the-neurobiology-of-overeating]])에 GLP1RA가 NAc DA를 blunt → substance-use 확장 가능.

## 관련 페이지
- [[godschall-2026-a-brain-reward-circuit-inhibited]] — NTS^Gcg→CeA^Glp1r→VTA→NAc 회로 1차 규명·humanized 수용체 (Nature 2026).
- [[duran-2026-the-central-amygdala-integrates]] — CeA 세포종류 분업; Glp1r^CeA가 hedonic feeding 전담 (bioRxiv 2026).
- [[gao-2026-semaglutide-drives-weight-loss-through]] — 세마글루타이드 CeA Fos 동원; DVC→CeA 연결 (Nat Metab 2026).
- [[concept-glp-1]] — GLP-1R 작용 hub (CeA→VTA→NAc 경로·small-molecule 포함).
- [[concept-dorsal-vagal-complex]] — 상류 NTS^Gcg(중추 GLP-1 공급원).
- [[concept-dopamine-reward-system]] — 하류 VTA→NAc mesolimbic DA 출력.
- [[concept-basolateral-amygdala]] — 인접·별개 nucleus(BLA vs CeA 대비).
- [[concept-need-motivation-pleasure-utility]] — hedonic gate = Motivation·Pleasure 축.
- [[kim-2024-glp-1-increases-preingestive-satiation]] — 대비되는 homeostatic 축(DMH GLP-1R cognitive satiation).
- [[stuber-2025-the-neurobiology-of-overeating]] — hedonic LHA→VTA→NAc 가소성·중독 응용.
- [[concept-lateral-hypothalamus]] — hedonic feeding의 또 다른 mesolimbic 상류.
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
