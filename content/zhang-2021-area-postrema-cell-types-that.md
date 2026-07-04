---
title: Area postrema cell types that mediate nausea-associated behaviors
type: paper
created: 2026-07-05
updated: 2026-07-05
source: raw/zhang-2021-area-postrema-cell-types-that.pdf
authors: [Zhang C, Kaye JA, Cai Z, Wang Y, Prescott SL, Liberles SD]
year: 2021
---

> [!takeaway] 연구 방향 관점의 핵심
> 최형진 랩의 food-safety-alarm(섭취후 순환독소 감지) 관점에서, 이 논문은 area postrema(AP)를 단일세포 해상도로 해부해 GLP1R·GFRAL·CaSR을 함께 발현하는 흥분성 뉴런(cluster 4)이 여러 오심신호를 하나로 funneling하는 "danger hub"임을 유전학으로 증명한다. 즉 GLP-1RA·GFRAL(GDF15)·cinacalcet의 항비만/오심 효과가 뇌간 AP GLP1R 뉴런이라는 공통 노드로 수렴함을 시사 — 치료효과와 오심 부작용의 회로적 분리 가능성을 제시하는 직접 근거.

# Area postrema cell types that mediate nausea-associated behaviors

## 한 줄 요약
single-nucleus RNA-seq로 area postrema를 4종 흥분성·3종 억제성 뉴런으로 아틀라스화하고, chemogenetics·세포절제·knockout/rescue로 **GLP1R 흥분성 뉴런(특히 GFRAL·CaSR 공발현 cluster 4)이 여러 독소(exendin-4·LiCl·LPS·cinacalcet)에 대한 혐오(flavor avoidance)를 매개하는 오심 신호의 공통 관문**임을 밝힌 연구(Neuron 2021, Zhang & Liberles).

## 핵심 내용

**Background** — AP는 혈뇌장벽 밖(제4뇌실 바닥) sensory circumventricular organ(CVO)으로 순환 독소를 직접 감지. 설치류는 구토 불가 → conditioned flavor avoidance로 오심 측정.

**Atlas** — 1,848 뉴런: 흥분성 4종(cl.1–4), 억제성 3종(cl.5–7). 수용체 세포타입별 분리:
- **Glp1r**: 흥분성 cl.2·3·4. **cluster 4 = Glp1r+Gfral+Casr** = 다중 malaise 신호 funneling 노드.
- **cluster 1**: Glp1r 음성, amylin receptor(Calcr). 억제성: ghrelin-R(cl.5)·GIP-R(cl.6).
- exendin-4는 GLP1R 뉴런 90%·CALCR 뉴런 12%만 반응(largely segregated).

**혐오 유도(활성)** — Gs-DREADD로 GLP1R·GFRAL 뉴런 활성 시 conditioned flavor avoidance 유발; **CALCR(cl.1)은 유발 안 함**. Gq-DREADD로도 동일(cAMP·calcium 다중 방아쇠).

**독소회피 제거(절제/KO)** — GLP1R 뉴런 절제 → exendin-4·LiCl·LPS 회피 소실. **GFRAL 뉴런 절제** → LiCl·LPS 회피 제거. AP 국소 Glp1r-KO → exendin-4 회피 소실(vagal rescue 무효) → **exendin-4 malaise는 미주 아닌 뇌간 AP GLP1R 경유**. 단 식이감소는 일부 잔존 → **식욕억제·오심 회로 부분 분리**.

**CaSR 경로** — cinacalcet(고칼슘 오심)이 AP GLP1R 뉴런에 Fos·혐오 유발, 절제로 소실.

**투사** — aversion 담당 GFRAL·SLC6A2 뉴런이 **PBN CGRP(general alarm) 근처 밀집 투사**; CALCR은 별도 투사.

**Claim** — 소수 흥분성 뉴런이 다양한 malaise 신호를 aversion으로 funneling. "적절 수용체+2차전령(cAMP/calcium)이면 어떤 수용체든 danger signal이 될 수 있다"는 일반 모델.

## 관련 페이지
- [[concept-area-postrema]] — 이 논문이 정의한 AP 세포 아틀라스 개념 hub.
- [[concept-parabrachial-cgrp-alarm]] — AP aversion 뉴런이 PBN CGRP 일반경보로 투사(상류→하류).
- [[concept-dorsal-vagal-complex]] — AP는 DVC(AP·NTS·DMX)의 CVO 독소감지 팔.
- [[concept-glp-1]] — AP GLP1R 뉴런이 exendin-4 malaise의 뇌간 표적.
- [[concept-central-amygdala-glp1r]] — CeA^Glp1r(hedonic)와 상보: AP=하류 오심 관문.
- [[overview-cea-glp1r-food-safety-alarm]] — AP GLP1R을 섭취후 독소 관문으로 편입.
- [[gao-2026-semaglutide-drives-weight-loss-through]] — 세마글루타이드 1차 표적=AP·Gs-cAMP·하류 elPBN; 본 논문 확장.
- [[godschall-2026-a-brain-reward-circuit-inhibited]] — GLP-1RA hedonic 억제 회로(NTS^Gcg→CeA)와 대비.
