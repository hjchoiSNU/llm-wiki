---
title: "A dorsal hippocampus–prodynorphinergic dorsolateral septum–to–lateral hypothalamus circuit mediates contextual gating of feeding (Goode 2026, Neuron)"
type: paper
created: 2026-09-02
updated: 2026-09-02
source: raw/2026 Neuron. A dorsal hippocampus-prodynorphinergic dorsolateral septum-to-lateral hypothalamus circuit mediates contextual gating of feeding.pdf
authors: [Travis D. Goode, Mollie X. Bernstein, Michael S. Totty, Jason Bondoc Alipio, Cinzia Vicidomini, Devesh Pathak, Antoine Besnard, Delara Chizari, Nina Sachdev, Michael D. Kritzer, Ain Chung, Xin Duan, Evan Macosko, Stephanie C. Hicks, Larry S. Zweifel, Amar Sahay]
year: 2026
journal: "Neuron 114, 2050–2072 (3 June 2026)"
doi: 10.1016/j.neuron.2026.01.025
aliases: [DLS Pdyn, DHPC-DLS-LHA, contextual gating of feeding, Goode 2026]
---

> [!takeaway] 연구 방향 관점의 핵심
> **"어디서 먹는가"가 "얼마나 먹는가"를 정하는 회로가 세포 수준에서 확정됐다.** 배측 해마(DHPC) → **외측중격 등쪽의 prodynorphin 뉴런(DLS^Pdyn)** → **LHA GABA(Vgat) 뉴런 단시냅스 억제**. 이 축을 어느 지점에서 끊어도(입력·세포체·종말·`Pdyn` 유전자 삭제) **맥락 조건화 섭식만 선택적으로 무너진다** — 총 섭취량은 그대로인 채 "보상 맥락 특이성"이 사라진다.
> ① 이것이 [[bhatti-mazo-2026-feature-specific-threat-coding-in|Bhatti Mazo 2026]] 정리 때 제가 남긴 **LS↔LH 방향성 질문의 답**이다. Bhatti Mazo가 LHA→LS(상행)를 매핑했다면, 본 논문은 **LS→LHA(하행, 억제성)** 를 전기생리로 확정한다. [[gruzdeva-2026-hunger-neurons-track-available-food|Gruzdeva 2026]]의 **해마→LS→LH→DMH→AgRP** 가설에서 **해마→LS→LH 구간이 이제 실증**됐다(DMH·AgRP 구간은 여전히 미검증).
> ② **해마의 배측/복측 분업**이 드러난다: **배측 HPC(CA3/2)→DLS^Pdyn = 맥락**(본 논문), **복측 HPC→LS^Crhr2 = cue-결과 예측**(Bhatti Mazo). LS는 두 종류의 해마 정보를 서로 다른 세포군으로 나눠 받는다.
> ③ 사용자 lab의 [[concept-need-motivation-pleasure-utility|NMPU]]에 **"맥락"이라는 조절 변수**를 넣을 자리를 준다. DLS^Pdyn 억제는 Motivation(총 섭취량)을 건드리지 않고 **맥락 귀속(context attribution)만** 무너뜨렸다 — Utility 계산의 맥락 게이팅에 해당.

# DHPC–DLS(Pdyn)–LHA 회로와 섭식의 맥락 게이팅

Neuron 114, 2050–2072 (2026-06-03) · doi:10.1016/j.neuron.2026.01.025 · **Amar Sahay lab**(MGH Center for Regenerative Medicine / Harvard Stem Cell Institute / Broad) + Larry Zweifel(UW) · Evan Macosko(Broad) · Stephanie Hicks(JHU). Open access (CC BY-NC-ND). snRNA-seq 데이터 GEO **GSE316515**.

## 한 줄 요약
외측중격 등쪽부(DLS)의 **somatostatin(Sst) 뉴런 중 prodynorphin(Pdyn)을 함께 발현하는 소수 아집단**이 배측 해마로부터 조밀한 입력을 받아 **LHA GABA 뉴런을 단시냅스로 억제**하며, 이 축이 **맥락에 따라 얼마나 먹을지를 보정(contextual calibration)** 한다.

## 배경
- 섭식은 내수용 신호(항상성)뿐 아니라 **사회·환경 맥락 안에서의 쾌락적 섭식 경험의 연합**으로도 조절되고, 이 과정이 섭식장애에서 교란된다.
- 배측(D) 해마는 **맥락**, 복측(V) 해마는 **목표**를 부호화한다는 분업이 알려져 있다. 인간 영상에서 폭식장애 동반 과체중/비만 환자의 **해마–LHA 기능적 연결 이상**이 보고됐으나, DHPC와 LHA를 잇는 **세포·경로 정체는 공백**이었다.
- DLS는 (i) DHPC 입력이 조밀하고 (ii) LHA를 포함한 시상하부로 강하게 투사해 맥락 의존 행동의 관문으로 유력했다. DLS의 우세 세포형은 **Sst 억제성 뉴런**이나, 피질 Sst처럼 이질적일 것으로 예상됐다.

## 방법
snRNA-seq(Drop-seq) · RNA-FISH 지형 매핑 · 단시냅스 rabies 입력 매핑 · anterograde mWGA-mCherry 출력 매핑 + GABA 면역염색 · **ex vivo 광유발 IPSC 전기생리**(bigenic, TTX/4-AP 단시냅스 검증, KOR 길항제 norBNI) · 광유전 활성/억제(세포체·종말) · **`Pdyn` 조건부 삭제** · fiber photometry(GCaMP6m) · 행동(자발 섭식·**맥락 조건화 섭식**·RTPP·개방장·신규성억제섭식·청각/맥락 공포조건화).

## 핵심 결과

### 1. DLS^Pdyn = Sst 뉴런의 등쪽 제한 아집단 (진화적으로 보존)
- LS snRNA-seq **~29,000 세포** → GABAergic(Gad1/Gad2·Snap25/Syt1) 하위군집 **22,879 세포 / 22 클러스터** → **Sst 발현만 재군집 6,496 세포 / 8 클러스터**. `Pdyn`은 주로 Sst 클러스터 7.
- 마커에 신경펩티드(`Cartpt`·`Cck`·`Npy`·`Nts`·`Pdyn`·`Penk`·`Sst`·`Vip`), 글루탐산·세로토닌 수용체, **오피오이드 수용체(`Oprd1`·`Oprk1`·`Oprm1`)** 포함. 기존 LS 전사체 보고의 `Foxp2`·`Pax6`·`Etv1`·`Trpc4` 등 재현.
- **다른 septal 세포형 연구들(`Crhr2`·`Esr1`·`Glp1r`·`Mchr1`·`Pnoc`)의 마커 발현도 함께 제시** — 즉 본 논문의 좌표계와 [[bhatti-mazo-2026-feature-specific-threat-coding-in|Bhatti Mazo의 Crhr2 좌표계]]는 같은 LS를 다른 축으로 자른 것.
- FISH 지형: **Sst 최다**(등쪽·후방 우세), 다음 `Nts`, `Penk`·`Pdyn`은 비슷한 소수. **`Nts`↔`Pdyn` 중첩 거의 없음**, `Penk`↔`Pdyn`도 거의 없음. → DLS^Pdyn은 LS의 다른 신경펩티드 계열과 **분자·지형적으로 구별되는 별개 세포군**.

### 2. 입력 — 배측 해마 특이 (복측 아님)
단시냅스 rabies: 최다 시냅스전 세포는 **배측/중간 CA3·CA2**, 다음이 LS 자체, 그다음 D/iCA1. **복측 해마 입력은 미미**.

### 3. 출력 — LHA GABA 뉴런을 단시냅스 억제
- 축삭: DLS 국소, 대각선조/시삭전영역(DB/PO), **LHA**가 최다. MS·복측 LS·**SUM**은 중등도~희소. 암수 동일.
- Anterograde: **septum 밖에서는 LHA가 표지 세포 최다**(다음 SUM). LHA에서 **GABA 양성 시냅스후 세포** 확인. **orexin-A 세포와는 중첩 없음**, VTA 투사도 없음.
- Ex vivo: LHA(Vgat) 세포에서 광유발 **IPSC**(TTX+4-AP로 단시냅스 확인), **EPSC는 전무**. KOR 길항제 **norBNI**가 IPSC 진폭을 변화시킴 → dynorphin-KOR가 이 시냅스를 조율.

### 4. 자발 섭식 — 양방향 인과
| 조작 | 결과 |
|---|---|
| DLS^Pdyn **활성화**(ChR2) | 익숙한 맥락에서 **자발 섭취 급속 감소**(초콜릿 자당 펠릿·일반 사료 모두) |
| DLS^Pdyn 활성화 + RTPP | **자극 구역 회피** → 인위적 활성화에 **음성 정동(negative valence)** 동반 |
| DLS^Pdyn **억제** | 비단식 상태에서 **자발 섭취 급증** |
| DLS^Pdyn→**LHA 종말 억제** | 단식 세션에서 섭취 증가 |
| DLS^Pdyn→LHA 종말 억제 (음식 없음) | 개방장 운동량·불안 유사 행동 **변화 없음** |

### 5. 맥락 조건화 섭식 — 이 회로의 고유 기능
`맥락 조건화 섭식` 과제: 단식 상태로 특정 맥락에서 반복 급여 → 비단식 상태 시험에서 대조군은 **강화된 맥락에서 더 먹는다**.
- **DLS^Pdyn 세포체 억제** → 두 맥락 섭취량이 같아짐 = **맥락 특이성 소실**. 단 **총 섭취량은 대조군과 동등**(동기 자체는 보존).
- **DLS^Pdyn→LHA 종말 억제** → 동일 결과.
- **DHPC→DLS 종말 억제** → 동일하게 맥락 조건화 섭식 소실. **단 익숙한 홈케이지의 자발 섭식은 불변** → 해마 입력은 **맥락 정보 전달에 특화**.
- **DLS에서 `Pdyn` 조건부 삭제** → 같은 표현형(맥락 의존 섭식 둔화, 총 섭취량 동등, 체중·운동량 불변). → **dynorphin/KOR 신호 자체가 필요**.

> 핵심 해석: 이 회로를 끊으면 "덜 먹게" 되는 것이 아니라 **먹는 행동을 올바른 맥락에 귀속시키지 못하게** 된다.

### 6. Photometry — 훈련과 맥락이 신호를 조각한다
- 자발 섭식: head entry 시점에 미약한 상승(단식 시), **섭취 중(~5–7초 후)에는 감소**. → 광억제가 섭취를 늘리는 것은 이 "감소"를 모사하기 때문, 광활성은 섭취에 필요한 감소를 방해하기 때문일 가능성.
- 레버 과제: **훈련 마지막 날에만** 활성 레버 누르기 직전 유의한 상승(레버 변별이 가장 좋은 시점). **새 맥락에서는 이 신호가 평탄화**(같은 레버·CS·보상인데도).
- 혐오: 족부충격에 **강한 상승**. 청각 CS 반응은 **맥락 의존적**(맥락 A에서 상승, 맥락 B에서 하강 — freezing 수준은 동등).
- 공포 행동 양방향 조절: DLS^Pdyn **억제 → freezing 증가**, **활성화 → freezing 감소**(c-Fos와 상관).

## 저자 결론
- **LS와 LHA는 진화적으로 오래된 회로 모듈**이고, 해마를 가진 종이 등장하면서 이 고대 모듈이 **맥락 보정용으로 징발**됐다는 가설. DHPC(CA3/2)→DLS^Pdyn→LHA(Vgat) 억제가 맥락에 따라 섭식을 조율한다.
- 인간 영상의 **DHPC–LHA 연결 이상(폭식장애 동반 비만)** 이 DLS^Pdyn이 중계하는 신호에 의존할 가능성.
- **DLS^Glp1r와의 수렴**: snRNA-seq에서 `Glp1r`가 `Pdyn`과 **공발현**하고, `Glp1r` 역시 LS의 DHPC 종말 구역에 발현하며 **DLS^Glp1r 자극이 섭식을 줄인다**는 선행 보고와 맞물려, DHPC-DLS-LHA 회로 안에서 두 세포군이 수렴적 역할을 할 가능성.
- **KOR 치료제 함의**: KOR 작용제/길항제는 섭식 조절 잠재력이 있으나 **작용제는 불쾌감(dysphoria)** 위험. DLS^Pdyn 회로가 그 세포·회로 좌표 후보.
- 결론 문장: DHPC→DLS 경로 또는 DLS^Pdyn→LHA의 이상이 **비정상 맥락 섭식의 "circuitopathy"** 로서 섭식장애·비만의 새 표적일 수 있다.

## 한계 · 주의
- 광유전 활성화가 **음성 정동(RTPP 회피)** 을 동반 → 섭취 감소의 일부는 회피 때문일 수 있음(저자 스스로 명시).
- 세포체 억제와 종말 억제의 결과가 **단식/비단식 조건에서 엇갈림**(세포체=비단식에서 증가, 종말=단식에서 증가). 저자들은 종말 광억제의 off-target 가능성을 인정.
- Anterograde 표지가 LHA GABA와 **완전히 겹치지는 않음** → 비-GABA(추정 Vglut2) 표적도 존재.
- DLS^Pdyn은 septum 내부·다른 시상하부 영역에도 투사 → LHA만으로 설명되지 않을 수 있음.
- `Pdyn` 조건부 삭제 시 **Cre-tdTomato의 인접 구조 확산**이 일부 있었음.
- 선행 약리 연구가 지목한 **DHPC-LS-LHA orexin(및 VTA)** 경로와 달리 본 회로는 **orexin·VTA를 건드리지 않음** → DHPC-LS-LHA 안에 **병렬 경로 다수** 존재를 시사.
- 인간 데이터 없음. `Pdyn`의 진화적 보존은 언급되나 인간 검증은 미수행.

## 사용자 lab 함의
1. **LS→LH 방향 확정**. [[bhatti-mazo-2026-feature-specific-threat-coding-in|Bhatti Mazo 2026]]에서 LHA→LS(상행)만 확인돼 [[gruzdeva-2026-hunger-neurons-track-available-food|Gruzdeva]] 가설의 방향성이 열려 있었는데, 본 논문이 **LS→LHA(Vgat) 단시냅스 억제**를 전기생리로 확정했다. **해마→LS→LH 구간 실증 완료**. 남은 미검증 구간은 **LH→DMH→AgRP**.
2. **해마 배측/복측 분업**. 배측 CA3/2→DLS^Pdyn(맥락) vs 복측 HPC→LS^Crhr2(cue-결과). LS를 "하나의 중계소"가 아니라 **해마 정보 종류별 분배기**로 볼 것. → [[concept-hippocampus-feeding]] 갱신 필요.
3. **맥락 = 독립 조절 변수**. DLS^Pdyn 억제는 총 섭취량을 바꾸지 않고 **맥락 귀속만** 무너뜨렸다. [[concept-need-motivation-pleasure-utility|NMPU]]의 Motivation 크기와 **맥락 게이팅**이 분리 가능한 계산임을 보이는 드문 실험 증거. 사용자 lab의 [[concept-food-environment-access|음식 환경]]·[[concept-cue-reactivity|cue 반응성]] 연구에 "환경이 섭취량을 정하는" 회로 근거.
4. **LS^Glp1r 삼중 수렴**. `Glp1r`가 (i) 본 논문의 `Pdyn` 세포와 공발현, (ii) [[azevedo-2020-a-limbic-circuit-selectively-links|Azevedo 2020]]의 LS^Nts 뉴런의 **70%** 에서 공발현, (iii) [[bhatti-mazo-2026-feature-specific-threat-coding-in|Bhatti Mazo 2026]]의 LS^Crhr2 10아형 중 **독립 아형(8.4%)**. → **`Glp1r`가 LS의 세 독립 좌표계에서 반복 등장하는 수렴 마커**. GLP-1RA의 변연계 작용점 가설을 세울 때 이 삼중 교차가 근거가 된다. → [[concept-lateral-septum]]
5. **dynorphin/KOR**. `Pdyn` 삭제만으로 맥락 섭식이 무너진다는 것은 **펩티드 자체가 계산에 필요**하다는 뜻. Koob의 [[concept-negative-reinforcement-hyperkatifeia|음성 강화]] 프레임에서 dynorphin은 주로 확장편도 스트레스 축으로 다뤄져 왔는데, 여기서는 **맥락 학습**의 매개자다. → [[concept-dynorphin-kappa-opioid]]

## 관련 페이지
- [[concept-lateral-septum]] — LS hub. 본 논문으로 LS→LHA 출력 축이 확정.
- [[bhatti-mazo-2026-feature-specific-threat-coding-in]] — 같은 LS를 `Crhr2` 축으로 자른 짝 논문. 입력(LHA→LS) vs 출력(LS→LHA)에서 상보적.
- [[azevedo-2020-a-limbic-circuit-selectively-links]] — LS^Nts→LH 섭식 억제. 본 논문의 LS^Pdyn→LHA와 **평행하되 세포군은 거의 겹치지 않는** 경로.
- [[gruzdeva-2026-hunger-neurons-track-available-food]] — 해마→LS→LH→DMH→AgRP 가설. 앞 두 구간이 본 논문으로 실증.
- [[concept-hippocampus-feeding]] — 배측 CA3/2→DLS라는 새 축 추가.
- [[concept-lateral-hypothalamus]] — LHA^Vgat가 본 회로의 하류 표적.
- [[concept-dynorphin-kappa-opioid]] — Pdyn/KOR 개념 hub.
- [[concept-glp-1]] — DLS^Glp1r 수렴 논의.
- [[concept-food-environment-access]] · [[concept-cue-reactivity]] — 맥락이 섭취를 정하는 인간 쪽 대응.
- [[azevedo-2019-a-role-of-drd2]] — 해마 Drd2→중격(MS) 맥락 의존 섭식(같은 문제, 다른 축).
- [[concept-need-motivation-pleasure-utility]] — 맥락 게이팅과 Motivation의 분리.
- [[person-soden-marta]] — photometry 기술 지원으로 감사문에 등재(Zweifel lab 계열).
