---
title: "A brain reward circuit inhibited by next-generation weight-loss drugs in mice (Godschall/Güler 2026)"
type: paper
created: 2026-05-31
updated: 2026-05-31
source: "raw/2026 Nature. A brain reward circuit inhibited by next-generation weight-loss drugs in mice.pdf"
authors: [Elizabeth N. Godschall, Taha Bugra Gungul, Isabelle R. Sajonia, ..., John N. Campbell, Christopher D. Deppmann, Ali D. Güler]
year: 2026
journal: "Nature (2026); doi:10.1038/s41586-026-10444-4"
---

> [!takeaway] 연구 방향 관점의 핵심
> **차세대 경구 small-molecule GLP1RA(orforglipron·danuglipron)가 hedonic feeding을 억제하는 회로를 발견** — GLP-1↔보상의 결정적 bridge. 핵심 회로: **NTS^Gcg → CeA^Glp1r(GABAergic, Vdr+, ~30% Pnoc) → VTA DA → NAc 도파민 방출 ↓**. CeA에만 human GLP1R을 발현시키면 **HFD(쾌락)만 억제하고 SD(항상성)는 무변** — CeA = "food valence" gate. 연구 hook: (1) 사용자 lab의 [[kim-2024-glp-1-increases-preingestive-satiation|Kim KS 2024 Science]](ref16)와 [[park-2025-glucagon-like-peptide-1-and-hypothalamic|Park 2025]] DMH satiation을 보완 — 본 논문은 DMH/BMH는 homeostatic, CeA는 hedonic으로 **분업** 입증; (2) [[stuber-2025-the-neurobiology-of-overeating|Stuber·Lüscher 2025]]의 hedonic LHA→VTA→NAc 가소성 모델에 **GLP1RA가 NAc DA를 직접 blunt**하는 약리 경로 추가 — substance-use disorder·binge eating 적용; (3) **orforglipron은 nausea(AP)와 분리된 NTS-우세 프로파일** → 메스꺼움 없는 차세대 약물 설계 단서. **humanized Glp1r^S33W 마우스**(Ser→Trp at 33)가 small-molecule 연구의 핵심 도구.

# Godschall et al. 2026 — A brain reward circuit inhibited by next-generation weight-loss drugs (Nature)

## 한 줄 요약
경구 small-molecule GLP1RA가 **homeostatic(시상하부/뇌간)와 hedonic(CeA→VTA→NAc) feeding을 평행 회로로 동시 조절**. CeA^Glp1r 뉴런이 mesolimbic 도파민을 낮춰 palatable food 섭취만 선택적으로 억제하는 새 노드로 규명.

## 핵심 내용

### 1. Humanized Glp1r^S33W 마우스 (Fig 1)
- 문제: orforglipron·danuglipron 등 small-molecule GLP1RA는 **human GLP1R만 활성화, rodent는 안 됨** (33번 위치 Ser[rodent] vs Trp[human] 단일 아미노산 차이) → 전임상 기전 연구 불가.
- 해결: **CRISPR로 Ser33→Trp(S33W) knock-in** = mouse Glp1r를 humanize. Glp1r^S33W 마우스는 peptide(liraglutide) 반응 유지 + small-molecule 감수성 획득. 대사 표현형(RER·에너지소비·체중)은 WT와 동일.
- 검증: danuglipron·orforglipron이 Glp1r^S33W에서만 GTT 개선·SD/HFD 섭취 억제; WT는 liraglutide에만 반응. 경구 danuglipron·orforglipron 효과 = IP와 동등; 만성 orforglipron이 체중 감소.

### 2. 행동 프로파일 — aversion과 분리 (Fig 2)
- SLEAP pose estimation + Keypoint-MoSeq로 home-cage 행동 91 syllable 분류. LiCl='nausea' reference, pre-fed='satiety' reference.
- LiCl·liraglutide·danuglipron = locomotor↓·grooming/sheltering↑ (nausea-like blunting). **orforglipron = 활동적·exploratory 유지** → 섭취는 줄지만 aversion 프로파일과 분리.
- → orforglipron의 anorexia는 메스꺼움과 **separable**.

### 3. 뇌 활성 지도 — NTS·AP·CeA (Fig 3)
- FOS: small-molecule GLP1RA가 Glp1r^S33W에서 **NTS·AP·CeA 활성↑, DMH는 bulk 무변**.
- **NTS:AP FOS 비율**: orforglipron이 NTS-우세(메스꺼움 적음), danuglipron·liraglutide는 AP-편향(nausea-like). 경구 danuglipron은 IP보다 AP 활성↓ → 느린 흡수·낮은 peak이 AP(circulating-factor 민감) 동원 감소.

### 4. 부위별 GLP1R 분업 (Fig 4 b–k)
Glp1r-Cre 마우스에 부위별 human GLP1R 발현 후 danuglipron:
| 부위 | 효과 |
|---|---|
| **BMH / DMH** | SD(homeostatic)만 억제, HFD 무변 |
| **NTS–AP** | SD·HFD **둘 다** 억제 |
| **CeA** ★ | **HFD(hedonic)만 억제, SD 무변** |

→ DMH/BMH=항상성, CeA=쾌락의 **명확한 분업**. ([[park-2025-glucagon-like-peptide-1-and-hypothalamic|Park 2025]]·[[kim-2024-glp-1-increases-preingestive-satiation|Kim 2024 Science]]의 DMH satiation은 homeostatic 축에 해당.)

### 5. CeA^Glp1r 뉴런의 정체 & 직접 활성
- snRNA-seq: CeA^Glp1r = **GABAergic, glutamatergic marker 없음, Vdr(vitamin D receptor)+ cluster**. RNAscope ~30% **Pnoc** 공발현 (Pnoc은 palatable feeding 촉진, [[stuber-2025-the-neurobiology-of-overeating|Hardaway 2019]] 계열).
- danuglipron(555.6 Da, 저분자)이 **BBB 통과해 심부 CeA 직접 활성**: hGLP1R-발현 측 FOS↑(대조 mGLP1R 측 무), GCaMP calcium transient(hGLP1R only), Gs-cAMP 탈분극·흥분성↑.
- ChR2로 CeA^Glp1r 광자극 → **HFD만 억제, SD 무변** (danuglipron 효과 재현). Glp1r^flox/flox CeA에 AAV-Cre로 삭제 → liraglutide의 **HFD 억제 능력 감소**(SD 무변) = CeA Glp1r이 GLP1RA hedonic 효과에 필요.

### 6. 회로: NTS^Gcg → CeA^Glp1r → VTA → NAc DA ↓ (Fig 5) ★
- **상류**: NTS^Gcg(중추 GLP1 주공급원) synaptophysin이 CeA에 종말 형성. ChrimsonR로 NTS^Gcg→CeA 종말 자극 → **HFD만 억제**(SD 무변). → 내인성 GLP1 입력.
- **하류**: CeA^Glp1r → **VTA DA 뉴런** 투사(synaptophysin 추적 + retrograde + VTA DA monosynaptic rabies). CeA→VTA 종말 광자극 → HFD만 억제.
- **출력**: dLight1.3b로 NAc 도파민 측정 — liraglutide·danuglipron·orforglipron **모두 HFD-유발 도파민 peak·소비신호 감쇠**(WT는 무효 = humanized 수용체 필요). CeA hGLP1R 활성도 NAc DA blunt.
- → 모델: **NTS^Gcg → GABAergic CeA^Glp1r → VTA DA 억제 → NAc 도파민 방출↓ → hedonic feeding 억제**. 기존 hindbrain→midbrain GLP1R 경로(Alhadeff·Hayes 2012)와 **병렬**된 분산 network.

### 7. 함의
- CeA = global hunger/satiety가 아닌 **food valence(쾌락가)** 인코딩.
- GLP1RA의 **substance-use disorder·binge eating** 적용 근거(reward dysregulation).
- orforglipron 대중화 → **장기 mesolimbic·동기행동 영향 정의 필요**(저자 경고).

## 진영·관점
| 진영 | 본 논문과의 관계 |
|---|---|
| **GLP-1 hindbrain satiety/aversion (Huang 2024)** | 보완 — NTS satiety vs AP aversion 분리를 small-molecule·NTS:AP 비율로 재현; orforglipron이 NTS-우세. |
| **사용자 lab GLP-1 satiation (Kim 2024 Science, Park 2025)** | 보완·인용(ref16) — DMH/BMH=homeostatic satiation, CeA=hedonic으로 부위 분업 확장. |
| **Lüscher/Stuber addiction plasticity** | 직접 연결 — hedonic LHA→VTA→NAc 회로에 GLP1RA가 NAc DA를 약리적으로 blunt; substance-use 적용. |
| **Webster 2024 RAMPANT (ref17)** | 인용 — GLP1-sensitive satiety connectome 보완. |

## 본 wiki 적용
- **GLP-1 hub 반영**: [[concept-glp-1]]에 CeA^Glp1r→VTA→NAc 경로 + small-molecule(orforglipron·danuglipron)·Glp1r^S33W 모델 cross-link 완료.
- **NMPU 연결**: CeA가 hedonic "wanting" 도파민 게이트 — [[concept-need-motivation-pleasure-utility|NMPU]]의 Motivation·Pleasure 축에 GLP1RA 약리 진입점.
- **약물 부작용 설계**: NTS:AP 비율 = nausea 분리 지표 → 차세대 약물 스크리닝 원리.

## 한계
1. **마우스 humanized 수용체 모델** — 인간 CeA 회로 직접 검증 아님.
2. fiber photometry는 population-level — CeA^Glp1r subset 간 차등 동원 배제 못 함(저자 명시).
3. CeA^Glp1r 이질성(Vdr+/Pnoc+ 등) 내 기능 분해는 미완.
4. 장기 mesolimbic 영향·anhedonia 위험은 미측정(향후 과제로 제시).

## 관련 페이지
- [[concept-glp-1]] — GLP-1R 작용 hub (CeA→VTA→NAc·small-molecule 추가 필요).
- [[kim-2024-glp-1-increases-preingestive-satiation]] — 본 논문이 인용(ref16); DMH satiation = homeostatic 축 (사용자 lab).
- [[park-2025-glucagon-like-peptide-1-and-hypothalamic]] — 사용자 lab GLP-1 cognitive satiation review; 부위별 GLP1R 분업과 상보.
- [[stuber-2025-the-neurobiology-of-overeating]] — hedonic LHA→VTA→NAc 가소성에 GLP1RA NAc DA blunt 약리 추가.
- [[johansen-2025-brain-control-of-energy]] — GLP1R 분산 network·NTS satiety/AP aversion 종합 (Cell 2025).
- [[lee-2025-hijacked-brain-modern-obesity-cue]] — binge eating·addiction 임상 표적 (사용자 lab).
- [[concept-dopamine-reward-system]] — VTA→NAc mesolimbic DA 출력 억제.
- [[morales-2017-ventral-tegmental-area-cellular-heterogeneity]] — VTA DA 세포 이질성(하류 노드).
- [[concept-basolateral-amygdala]] — 인접 amygdala 회로(BLA vs CeA 대비).
- [[concept-dorsomedial-hypothalamus]] — DMH GLP1R = homeostatic 분업.
- [[gao-2026-semaglutide-drives-weight-loss-through]] — 같은 NTS/DVC 출발의 homeostatic·세포내(Gs–cAMP) 경로 (Nat Metab 2026).
- [[liskiewicz-2026-glp-1r-gipr-ppar]] — 5중작용제 중추작용은 ARC POMC 활성·DVC FOS로 수렴; 본 논문의 hedonic NTS^Gcg 축과 약리 무대 공유 (Nature 2026).
- [[concept-dorsal-vagal-complex]] — NTS^Gcg 회로의 출발 무대.
- [[concept-need-motivation-pleasure-utility]] — CeA hedonic gate = Motivation·Pleasure 약리 진입점.
- [[concept-central-amygdala-glp1r]] — 본 논문이 규명한 노드의 개념 hub(CeA^Glp1r 세포·회로·약리 종합).
- [[duran-2026-the-central-amygdala-integrates]] — 말초 Ex-4가 CeA 활성화; Glp1r^CeA(~30% Pnoc 추정)가 hedonic feeding 전담 — 본 논문 회로의 세포종류 보강 (bioRxiv 2026).
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
- [[person-choi-hyung-jin]] — 인용된 사용자 lab(Kim 2024 Science).
- [[overview-cea-glp1r-food-safety-alarm]] — 본 논문 회로를 Woods 1991 "음식=위협" 이론과 묶어 CeA^Glp1r을 food safety alarm으로 종합(치료효과=약물 유발 aversion, 부작용=혐오정동/anhedonia).
