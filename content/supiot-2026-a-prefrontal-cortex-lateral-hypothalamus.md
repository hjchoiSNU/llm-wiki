---
title: "A prefrontal cortex-lateral hypothalamus circuit controls stress-driven increased food intake (Supiot 2026, Nat Commun)"
type: paper
created: 2026-10-28
updated: 2026-10-28
source: "raw/s41467-026-71073-z.pdf"
authors: [L. F. Supiot, K. L. Kooij, W. Du, A. A. C. Benschop, A. S. J. Nicolson, R. Haak, I. G. Wolterink-Donselaar, M. C. M. Luijendijk, D. Riga, R. A. H. Adan, R. B. Poorthuis, F. J. Meye]
year: 2026
journal: "Nature Communications 17:4620 (접수 2024-07-30, 채택 2026-03-09); doi:10.1038/s41467-026-71073-z"
---

> [!takeaway] 연구 방향 관점의 핵심
> 위키가 바로 어제 "**mPFC→LH 전용 1차 원전 없음**"이라고 공백으로 기록한 자리를 메우는 논문이다([[concept-prefrontal-cortex-feeding]]). 핵심 주장은 **mPFC→LHA가 스트레스를 과식으로 번역하는 데 필수적이되, 평상시 섭식에는 불필요한 "조건부(conditional)" 경로**라는 것이다. ① 경로 **5 Hz** 광자극이 기호성 지방 섭취를 늘리고(1 Hz·10 Hz는 무효), chow는 안 늘린다 — 효과는 **세션 초반이 아니라 후반**, 즉 음식 흥미가 꺼질 때 "계속 먹게" 하는 쪽이다. ② 사회 패배가 mPFC-LHA 뉴런을 **즉시 양방향으로** 변조한다(26 cells: 억제 13 / 흥분 7 / 무변 6). ③ hM4Di로 이 경로를 억제하면 **스트레스성 과잉 섭취만 완전히 사라지고**(비스트레스군 섭식은 불변, chow 불변), 운동량·불안은 그대로다. ④ 회로 지도상 mPFC는 **LHA^VGAT·LHA^VGLUT2·LHA^OREX·LHA^MCH 네 집단 모두에** 단시냅스 흥분성 입력을 주지만, 스트레스가 변화시키는 곳은 **LHA^VGLUT2 시냅스뿐**(EPSC↓ U=342 p=0.0152, PPR↑ = 전시냅스 방출확률↓; VGAT·OREX는 무변). ⑤ 그 변화가 **투사 표적별로 부호가 갈린다** — 섭식을 끄는 **peri-PVN 투사 LHA^VGLUT2로 가는 mPFC 시냅스는 약화**되고, 스트레스 과식을 매개하는 **VTA 투사 LHA^VGLUT2로 가는 시냅스는 강화**된다. ⑥ TRAP2로 태깅한 **mPFC^SOCIAL-STRESS 앙상블은 glutamatergic LHA에 선택적으로 연결**되고(LHA^VGAT에는 거의 입력 없음), 그 앙상블→LHA 5 Hz 자극만으로 지방 섭취가 늘어난다. ⑦ **스트레스 중 LHA^VGLUT2를 억제하면 이후의 폭식이 예방**된다.
> 사용자 연구에 닿는 지점 넷. (1) **[[figge-schlensok-2025-a-lateral-hypothalamic-neuronal|Figge-Schlensok 2025]]와의 부호 충돌이 "세포타입별 분기"로 해소될 수 있다** — 그쪽은 PFC→LH가 LH^LepR(대부분 GABAergic)를 **억제**하는 anxiogenic brake이고(저자들도 다시냅스 추정), 이쪽은 mPFC→LHA^VGLUT2가 **단시냅스 흥분성** drive다. 본 논문의 스트레스 앙상블이 **LHA^VGAT에 거의 입력을 주지 않는다**는 결과가 그 분기를 지지한다(연결 해석 — 두 논문 모두 이렇게 쓰지 않았다). (2) **주파수가 좁다**: 5 Hz만 듣고 10 Hz는 이미 실패하며 20 Hz·연속 화학유전은 chow 섭취를 **줄인다**(선행 연구). [[concept-transcranial-electrical-stimulation|tES]]·[[concept-temporal-interference-stimulation|tTIS]] 설계에서 "mPFC-LHA를 켠다/끈다"가 아니라 **어느 주파수로 어떤 분기를 켜는가**가 결과 부호를 정한다. (3) **[[linders-2022-stress-driven-potentiation-of-lateral|Linders 2022]]와 한 사슬로 이어진다**(같은 Utrecht Adan·Meye lab): 본 논문 = mPFC→LHA^VGLUT2-VTA 시냅스 강화, Linders = 그 하류 LHA^glut→VTA^DA 시냅스 강화·1 Hz LFS로 역전 가능. **피질에서 중뇌까지 세 시냅스가 같은 스트레스 과식 축으로 정렬된다.** (4) **종결점 설계**: 본 논문의 효과는 총 섭취량보다 **"흥미가 꺼질 시점에 계속 먹는가"**(post-binge phase)에서 드러난다 — 인간 DTx·신경조절 종결점을 식사량이 아니라 **식사 후반의 지속성·bout 구조**로 두어야 할 근거.

# A prefrontal cortex-lateral hypothalamus circuit controls stress-driven increased food intake (Supiot et al. 2026)

- **저널**: Nature Communications 17:4620. 접수 2024-07-30, 채택 2026-03-09. doi:10.1038/s41467-026-71073-z.
- **소속**: Department of Translational Neuroscience, Brain Center, UMC Utrecht, Utrecht University + Department of Human Genetics, CNCR, Amsterdam UMC. 공동 교신·동등 기여 **R. B. Poorthuis · F. J. Meye**. → [[linders-2022-stress-driven-potentiation-of-lateral|Linders 2022]]와 같은 lab(공저자 Wolterink-Donselaar·Luijendijk·Adan·Meye 중복).
- **동물**: ⚠️ **수컷만**(naïve adult male, 20–35 g, >6주). 초록도 "in male mice"로 명시. C57Bl6J, Vglut2-Cre, VGAT-Cre, **TRAP2**(Jax #030323). 공격자는 Swiss-CD1(35–45 g, >12주). 12:12 명암, ad libitum chow(3.61 kcal/g).
- **읽은 범위**: 본문 전체(Results·Discussion), Fig 1–7 legend, Methods 앞부분. Supplementary Fig의 본문 서술은 옮겼으나 **원문 보충자료 자체는 미확인**. 그림 본체의 막대 절대값은 텍스트 추출이 안 돼 **통계치·n·비율 위주**로 기록.

## 한 줄 요약
mPFC→LHA 경로는 평상시 섭식에는 불필요하지만 **스트레스성 기호식 과식에는 필수적**이며, 사회 패배는 이 경로를 즉시 양방향으로 변조한 뒤 **LHA^VGLUT2 시냅스에서만** 투사 표적별로 갈리는 전시냅스 가소성(peri-PVN 투사 약화 / VTA 투사 강화)을 일으켜 네트워크 전체를 과식 쪽으로 기울인다.

## 핵심 내용

### Fig 1 — 5 Hz에서만 지방 섭취가 늘고, 효과는 세션 후반에 나타난다
- mPFC에 **CoChR**(rAAV5-Syn-CoChR-GFP) 또는 eYFP, LHA 위에 광섬유. 발현은 **Cg1·PrL·IL** 세 하위영역에 걸침. 2-choice(chow vs fat) 1시간, 3일 baseline → 자극일(10분 ON/OFF 교대) → post일.
- **5 Hz만 지방 섭취↑**: YFP n=19 / CoChR n=19, Day-Virus 상호작용 F(2,72)=3.37, **p=0.04**; 자극일 vs baseline p=0.007. **1 Hz 무효**(F(2,72)=1.34, p=0.18), **10 Hz 무효**.
- **지방 특이**: chow는 안 늘어남. 5 Hz에서 fat zone 체류 시간↑.
- ★ **시간 구조가 핵심**: 지방에 대한 관심은 보통 1시간에 걸쳐 **꺼진다**. 5 Hz는 **drive가 아직 높은 초반에는 무효**이고, 관심이 꺼질 **후반에 계속 먹게** 만든다(Time-Virus F(5,110)=2.83, p=0.037; 30–40분 p=0.038, 50–60분 p=0.013). 결과적으로 지방 feeding bout 총수↑(F(1,22)=7.64, p=0.011; ON 블록 p=0.003), chow bout은 불변.
- **대안 설명 배제**: 운동량은 자극에 선형 증가하지만 섭식 효과와 **패턴이 다름**; RTPP에서 정서 valence 변화 없음.

### Fig 2 — 사회 패배가 mPFC-LHA 뉴런을 즉시 양방향으로 변조
- **opto-tagging in vivo ephys**: LHA에 Cav2-Cre(역행 Cre) + mPFC에 AAV-DIO-hChR2(H134R)-mCherry, mPFC에 **optrode**(32전극 + 광섬유). SALT test로 opto-tagged 판정.
- CD1 공격자 노출(감각 근접 → 실제 fight) 중 단일세포 기록. **n=26 opto-identified mPFC-LHA cells / 12 mice**: fight 구간에 **억제 13 / 흥분 7 / 무변 6**.
- 효과는 **fight 기간을 넘어 지속**. 반투과 격벽 뒤 CD1 도착(감각 스트레스)에서도 유사한 반응형이 나오고, 특히 감각 스트레스에 흥분한 뉴런은 물리적 노출에서도 **같은 방향**으로 변조.
- **비교**: opto-tagged가 아닌 putative pyramidal mPFC 뉴런도 흥분·억제로 반응하지만 mPFC-LHA 집단보다 **변조 빈도가 낮다**(= 스트레스 민감성이 LHA 투사 집단에 modest하게 농축).

### Fig 3 — 경로 억제는 스트레스성 과잉 섭취만 지운다 (필요조건)
- LHA에 Cav2-Cre + mPFC에 **AAV-DIO-hM4Di-mCherry**(양측). 슬라이스 patch에서 CNO가 해당 mPFC 뉴런을 강하게 과분극시킴을 확인. 발현은 **PrL·IL**.
- 2일 사회 패배(또는 대조) → 다음날 CNO 전신투여 → 45분 후 2-choice.
- **결과**: mCherry-Stress는 baseline 대비 뚜렷한 지방 과식. **hM4Di는 비스트레스군의 섭식을 바꾸지 않고**(mCherry-control vs hM4Di-control p=0.61), **스트레스군의 과잉분만 완전히 상쇄**(Treatment-Virus 상호작용 F(1,50)=4.69, **p=0.035**; mCherry-control vs mCherry-Stress p=0.015; hM4Di-control vs hM4Di-Stress **p>0.99**). n = 13/13/14/14.
- **chow 불변**(F(1,50)=0.07, p=0.79). 운동량·불안 효과 없음.
- **Photometry**(Cav2-Cre LHA + Cre-dependent GCaMP8s mPFC): 사회 공격에 **biphasic** 집단 반응 — peak(W=36, p=0.008) 후 dip(W=34, p=0.016), n=8 mice.
- **섭식 중에는 활동이 내려간다**: 음식 섭취 개시 시 mPFC-LHA 활동이 **일시적으로 감소**하고 음식 접촉이 끝나면 되돌아온다(선행 연구와 일치).
- ⚠️ **스트레스 후에도 mPFC-LHA 세포체 집단 활동은 음식 상호작용 중 변하지 않았다** — 이 음성 결과가 "변화는 하류 시냅스에 있을 것"이라는 Fig 4–5의 가설을 낳았다.

### Fig 4 — mPFC는 LHA 네 집단 모두에 단시냅스로 들어간다
- 표적 4집단: **LHA^VGLUT2 · LHA^VGAT**(VGLUT2-Cre / VGAT-Cre + DIO-mCherry) · **LHA^MCH**(AAV-MCHpr-Gq-mCherry) · **LHA^OREX**(AAV-hORXpr-TdTomato). 전사체 근거상 MCH·OREX는 glutamatergic(VGLUT2+) 하위집단이고 대부분의 LHA^VGLUT2는 그 둘에 속하지 않는다([[mickelsen-2019-single-cell-transcriptomic-analysis-of]]·[[wang-2021-expansion-assisted-iterative-fish-defines-lateral]] 계열 근거).
- 특이성 검증: biocytin 충전 세포의 post-hoc 표지, 그리고 **체세포 크기**가 전형적 LHA^VGLUT2와 OREX·MCH에서 강하게 다름.
- **4-AP + TTX** 조건에서 네 집단 모두 **높은 단시냅스 연결성**을 보이고 집단 간 차이 없음(Pearson χ²=3.166, **p=0.367**). ⚠️ 단 이 검정의 표본이 작다 — VGAT 10 cells/**1 mouse**, Vglut2 11/**1**, MCH 9/**2**, Orexin 12/**2**.
- Discussion에서 저자들은 **LHA glutamatergic 뉴런의 약 80%가 mPFC로부터 흥분성 입력을 받는다**고 요약한다.

### Fig 5 — 스트레스 가소성은 LHA^VGLUT2 시냅스에만, 그리고 전시냅스에서
- 2일 스트레스 후 **과식이 일어나는 시점**에 슬라이스를 만들어 네 집단으로 가는 mPFC 시냅스를 비교.
- **mPFC→LHA^VGLUT2만 변한다**: 최대 광유발 AMPAR EPSC **감소**(Mann-Whitney U=342, **p=0.0152**; control 30 cells/10 mice, stress 35/11). **LHA^VGAT 무변**(U=232, p=0.8341), **LHA^OREX 무변**(U=582, p=0.4663).
- **기전은 전시냅스**: mPFC→LHA^VGLUT2에서 **PPR 증가**(두방향 RM ANOVA 군 주효과 F(1,37)=4.55; IPI 60·100·200 ms; control 19/10, stress 20/11) = **방출확률 저하**. 후시냅스 glutamate 수용체 분포 불변, LHA 세포 흥분성·기본 막특성 불변.
- **다른 modality로 재현**: **restraint stress**도 이후 지방 섭취를 늘리고, mPFC→LHA^VGLUT2 EPSC를 줄이고 PPR을 올린다 → 사회 스트레스에 국한된 현상이 아니다.
- ★ **투사 표적별로 부호가 갈린다**(역행 표지로 LHA^VGLUT2 하위집단 구분):
  - **peri-PVN 투사**(제3뇌실 주변 midline hypothalamic; 혐오 처리·섭식 **억제**와 연관, 자극 시 섭취를 끈다): 스트레스 후 **PPR↑ = mPFC 시냅스 약화**.
  - **VTA 투사**: 스트레스 후 **PPR↓ = mPFC 시냅스 강화**(방출확률 상승).
  - **LHb 투사**: PPR 변화 없음.
- 저자 해석: **섭식을 줄이는 쪽으로 가는 mPFC 시냅스는 약화, 섭식을 늘리는 쪽으로 가는 시냅스는 강화** → 네트워크 전체가 기호식 과식을 선호하도록 이동.
- ⚠️ **원문 오기 주의**: Discussion의 요약 문장이 "branches (conditionally) linked to promoting food intake are either strengthened or unaffected, whereas branches linked to **promoting** food intake are either weakened or unaffected"로 **같은 단어를 두 번** 쓴다. 문맥·데이터상 뒤쪽은 **curtailing/reducing**이어야 한다. 인용 시 원문 문장을 그대로 옮기지 말 것.

### Fig 6 — 스트레스 후 경로는 과식을 더 잘 구동하도록 "priming"된다
- 2일 스트레스(또는 새 cage mate) → 2-choice 2시간, 5 Hz 또는 mock 자극.
- **스트레스 + 5 Hz가 지방 최대 소비군**: Control n=27, Stress n=23. 처리 주효과 F(1,46)=15, **p=0.0003**; 자극 주효과 F(1,46)=10.38, **p=0.002**; Stress-5Hz vs Stress-Mock t(46)=3.27, p=0.01; Stress-5Hz vs Ctrl-5Hz t(46)=3.78, p=0.003. chow 불변.
- ★ **스트레스는 binge-like 시간 구조를 만든다**: 자극 없는 스트레스군은 **첫 20분에 지방 bout의 75% 이상**을 수행하고 이후 급감. 대조군은 즉각 bout이 적은 대신 **더 오래 지속**. Binge phase(0–20분) unpaired t(24)=3.49, p=0.002.
- **5 Hz는 Binge phase에 무효, Post-binge phase(20–120분)에 효과** — 포만에 가까운 상태에서 지방으로 다시 끌어당기고, **정상적으로 일어나는 관심 감소를 상쇄**한다. Fig 1E의 naive 결과와 같은 패턴.

### Fig 7 — 하류 LHA^VGLUT2가 필수이고, 스트레스 앙상블은 glutamatergic LHA를 고른다
- **(A–C) 스트레스 중 LHA^VGLUT2 억제 → 이후 폭식 예방**: Vglut2-Cre LHA에 AAV-DIO-hM4Di, **스트레스 사건 전에** vehicle 또는 CNO. Stress-CNO 상호작용 F(1,21)=4.408, **p=0.048**; vehicle-control vs vehicle-stress p=0.034; **CNO-control vs CNO-stress p=0.99**; vehicle-stress vs CNO-stress p=0.03. n = 6/7/6/6.
- **(D–H) TRAP2 앙상블 태깅**: TRAP2 × VGAT-Cre / VGLUT2-Cre 교배, mPFC에 Cre-의존 CoChR, 2회 스트레스 각각에 4-OH tamoxifen 페어링 → **mPFC^SOCIAL-STRESS** 앙상블. 대조는 **mPFC^NOVEL-MOUSE**(새 마우스 노출). 교차간섭 회피 설계 2중(mPFC 뉴런은 VGLUT1이라 VGLUT2-Cre와 어긋남 + LHA 바이러스를 TRAP 수주 후 주입).
  - **mPFC^STRESS는 glutamatergic > GABAergic LHA에 더 연결**(n-VGAT=31 cells/6 mice, n-Vglut2=49/11, n-MCH=15/5, n-Orexin=23/8; Pearson χ² Z=21, **p=0.0007**).
  - mPFC^NOVEL보다 **LHA^VGLUT2**(Z=7.14, p=0.008)·**LHA^OREX**(Z=8.37, p=0.004)에 더 연결.
  - **LHA^VGAT는 스트레스 앙상블로부터 거의 입력을 받지 않는다.** mPFC^NOVEL 앙상블은 LHA 연결이 전반적으로 적고 LHA^MCH와만 일부 연결.
- **(I–K) 앙상블 경로 자극**: mPFC^STRESS→LHA를 5 Hz로 자극하면 **지방 섭취↑**(n=7 vs 7), chow 불변.
- → 저자 결론: **glutamatergic LHA 뉴런이 스트레스→과식 변환의 필수 하류 표적**.

### Discussion에서 저자들이 스스로 세운 틀과 유보
- **"조건부 경로"**: 평상시 섭식에 불필요(선행 연구와 일치)하고 스트레스로만 역할이 드러난다. 또 ad libitum 상태였기 때문에 음식 흥미가 빨리 꺼져 경로의 역할이 더 잘 보였을 수 있으므로, **금식 여부에 따라 결과가 달라질 것**이라고 명시.
- **"단일 경로가 아니라 multi-branched network"**: mPFC는 LHA^VGAT·VGLUT2·OREX·MCH에 모두 들어가고, mPFC가 접촉하는 glutamatergic LHA는 다시 **VTA·LHA 국소·peri-PVN**으로 분기한다. 전역 경로 조작·측정은 **여러 하위경로의 순합**을 본다는 점을 반드시 고려해야 한다.
- **완전 collateral은 아니다**: 앙상블 실험에서 **glutamatergic에는 시냅스를 주되 GABAergic에는 주지 않는** mPFC 뉴런, 혹은 LHA^MCH 같은 특정 펩타이드 집단에만 주는 뉴런이 관찰됨.
- **"섭식 중 dip"의 해석 두 가지**: ① ARC AgRP 뉴런처럼(자극하면 섭식↑, 실제 섭취 중에는 활동 dip) **조건부 에너지 요구 신호**일 수 있다. ② 혹은 **"다른 활동으로 넘어가지 말고 기호식에 계속 관여하라"는 engagement 신호**이고, 실제 소비를 위해서는 그 활동이 잠시 내려가야 한다(seeking↔consumption 전환). 여기서 저자들은 **피질→LHA 입력이 행동 전환 부호화에 참여한다**는 최근 근거를 인용한다(ref 44 = **Chen C. et al., "The dynamic state of a prefrontal–hypothalamic–midbrain circuit commands behavioral transitions", Nat Neurosci 2024**, doi:10.1038/s41593-024-01598-3 — 위키에 1차 페이지 없음).
- **자극 방식이 결과를 가른다**: 선행 연구에서 **100 Hz burst는 평상 섭식에 무효**, **연속 화학유전 또는 20 Hz는 chow 섭취를 감소**시켰다. 본 연구의 **연속 5 Hz는 증가**, 1 Hz·10 Hz는 무효. LHA→VTA에서도 **5 Hz가 2.5 Hz·20 Hz보다 강하게** 섭식을 구동한다는 선행 보고가 있다. 10 Hz 실패는 ex vivo에서 **10 Hz mPFC 입력을 LHA^VGAT가 LHA^VGLUT2보다 덜 충실히 따라간다**는 소견과 함께, **주파수 자체보다 연속 전달 방식** 탓일 수 있다고 유보.
- **명시한 미해결**: 개체별 취약성(stress-susceptible vs unsusceptible 분류)을 다루지 않았고, 투사 표적 분석은 **망라적이지 않으며**, "어느 하나의 하위분기가 단독으로 스트레스 과식을 책임진다고 주장하지 않는다".

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **PFC→LH 부호 충돌의 해소안**: [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal|Figge-Schlensok 2025]]의 PFC→LH는 **LH^LepR(대부분 GABAergic)를 억제**하는 anxiogenic brake이고 저자들도 **다시냅스**를 추정한다. 본 논문의 mPFC→LHA^VGLUT2는 **단시냅스 흥분성** drive다. 결정적 교차 증거는 본 논문의 **스트레스 앙상블이 LHA^VGAT에 거의 입력을 주지 않는다**는 결과다 — 즉 **같은 해부학적 투사 안의 서로 다른 분기**일 수 있다. 검증 설계: LepR-Cre에서 mPFC 입력의 단시냅스성(4-AP+TTX)과 스트레스 가소성(PPR)을 본 논문과 **같은 프로토콜**로 측정하면, "LepR 분기는 다시냅스·가소성 없음 / VGLUT2 분기는 단시냅스·가소성 있음"이라는 예측을 바로 검정할 수 있다. ⚠️ **성별이 반대**라는 교란이 남는다(본 논문 수컷 only vs Figge 암컷 중심).
- **세 시냅스가 한 축으로 정렬된다**: 본 논문(mPFC→LHA^VGLUT2-VTA **강화**) + [[linders-2022-stress-driven-potentiation-of-lateral|Linders 2022]](LHA^glut→VTA^DA **강화**, mPFC 투사 DA 한정, **1 Hz LFS로 역전**) → **mPFC → LHA^VGLUT2 → VTA^DA → mPFC** 로 닫히는 고리의 세 변이 모두 사회 패배로 강화된다. Linders의 1 Hz depotentiation이 LHA–VTA에서 작동했으므로, **mPFC–LHA 수준에서도 저주파 depotentiation이 가능한가**가 다음 질문이다(본 논문은 시도하지 않았다).
- **주파수 설계의 제약 — 위키 내 beta 가설 수정 필요**: [[concept-prefrontal-cortex-feeding]]은 mPFC→LH **beta(15–30 Hz)** 동기화([[liu-2026-granular-motivational-interaction-and]] 경유 Chen 2024 2차 인용)와 인간 LHA hunger=beta([[talakoub-2017-lateral-hypothalamic-activity-indicates]])의 대역 일치를 연결 가설로 적었다. 본 논문은 **섭식을 구동하는 자극 주파수가 5 Hz이고 10 Hz는 이미 실패**한다고 보고한다. 두 사실은 모순이 아니다(하나는 **관찰된 내재 리듬**, 하나는 **외부 자극 주파수**) — 그러나 "beta를 때리면 된다"는 단순 번역은 성립하지 않는다. 외부 자극의 유효 대역(theta 근방)과 내재 동기화 대역(beta)을 **구분해 적을 것**.
- **종결점은 총 섭취량이 아니라 시간 구조**: 본 논문의 효과는 두 번 모두 **"관심이 꺼질 시점의 지속"**(Fig 1E 후반, Fig 6F post-binge)에서만 나타났다. 인간 쪽 대응 지표는 식사량이 아니라 **식사 후반의 bout 재개·한입 간격**이다 — [[overview-lateral-hypothalamus-synthesis]]가 제안한 식사 microstructure 수집 설계와 직접 맞물린다.
- **스트레스 과식의 임상 분기**: [[lee-2025-hijacked-brain-modern-obesity-cue|Hijacked Brain]]의 **Emotional eating** 표현형(amygdala·insula·vmPFC↑, dlPFC↓)에 본 논문은 **"mPFC가 저활성이어서 과식한다"가 아니라 "mPFC의 특정 분기가 가소적으로 재편되어 과식한다"**는 대안 기전을 준다. 표현형 영상에서 dlPFC 전체 활성만 보면 이 분기 재편은 보이지 않는다.

## ⚠️ 위키 내 충돌·긴장 (병기 — 덮어쓰지 않음)
- **[[figge-schlensok-2025-a-lateral-hypothalamic-neuronal|Figge-Schlensok 2025]] "PFC→LH = anxiogenic brake" vs 본 논문 "mPFC→LHA = 스트레스 과식 drive"** — 가장 직접적인 긴장. 분해 변수 후보: ① **표적 세포타입**(LepR/GABAergic vs VGLUT2), ② **시냅스 차수**(다시냅스 추정 vs 단시냅스 확인), ③ **성별**(암컷 중심 vs 수컷 only), ④ **측정 축**(불안 맥락의 섭식 **개시 지연** vs 스트레스 후 기호식 **과잉량**), ⑤ **맥락**(anxiogenic arena·ABA vs 익숙한 2-choice). 위 §함의의 검증 설계 참조. 어느 쪽도 덮지 말 것.
- **[[concept-lateral-hypothalamus]]·[[stuber-2016-lateral-hypothalamic-circuits-for]]의 "mPFC → LH = 식이 억제" 분류** — 상류 목록이 PFC를 억제 쪽에 둔다. 본 논문은 **같은 경로가 5 Hz에서 섭식을 늘린다**고 보고하므로, 그 줄은 "억제"가 아니라 **"자극 방식·주파수에 따라 양방향"**으로 고쳐 읽어야 한다(선행 20 Hz·연속 화학유전 감소 결과도 함께 병기).
- **"LH^Vglut2 = brake" 통념** — [[rossi-2019-obesity-remodels-activity-and]]·[[stuber-2016-lateral-hypothalamic-circuits-for]]가 세운 이분법에 본 논문은 **LHA^VGLUT2가 스트레스 과식에 필요조건**이라는 또 하나의 반례를 더한다. [[linders-2022-stress-driven-potentiation-of-lateral|Linders 2022]]·[[rossi-2021-transcriptional-and-functional-divergence|Rossi 2021]]과 같은 방향의 "가소성·투사 특이성 차원 추가"로 읽는 것이 세 결과를 모두 살린다. 본 논문 자신도 peri-PVN 투사는 **섭식 억제** 쪽으로 두므로 **LHA^VGLUT2 내부에서 부호가 갈린다**.
- **[[wang-2026-a-hypothalamic-circuit-links|Wang 2026]] "ArcAgRP→PVN^CRH→LHA^Glu 순효과는 LHA^Glu 억제"** vs 본 논문 "mPFC→LHA^VGLUT2는 흥분성이고 VTA 분기 강화가 과식" — 같은 LHA^Glu를 두고 상류에 따라 부호가 다르다. 유발 조건도 다르다(만성 HFD vs 급성 사회 패배). 두 경로가 LHA^Glu의 **다른 하위집단**을 겨냥할 가능성으로 병기.
- **[[shin-2023-early-adversity-promotes-binge-like-eating|Shin 2023]] "LH^Lepr→vlPAG 탈억제가 폭식 구동"** — 스트레스·역경성 폭식의 또 다른 LH 출력 분기. 본 논문의 VTA·peri-PVN·LHb 세 분기에 **vlPAG가 빠져 있다**(본 논문도 "망라적이지 않다"고 명시).
- **[[de-vrind-2019-effects-of-gaba-and|de Vrind 2019]]** — 같은 Utrecht Adan lab이고 LHA 바이러스의 **ZI 확산**을 confound로 논의한 전례다. 본 논문의 LHA 역행·Cre 전략에서도 [[concept-zona-incerta|ZI]] 인접 확산 가능성은 원문에 다뤄지지 않았다(본 작업 관찰). [[leow-2026-a-cortical-hypothalamic-neural|Leow 2026]]의 mPFC→**rZI** 강박 섭식 회로와 해부학적으로 인접하므로, 두 논문의 표적 분리는 아직 실험적으로 확인되지 않았다.

## 관련 페이지
- [[concept-prefrontal-cortex-feeding]] — **PFC hub**. 이 페이지가 그 hub에 기록된 "mPFC→LH 전용 1차 원전 없음" 공백을 해소한다. drive 축의 LHA 분기 근거.
- [[linders-2022-stress-driven-potentiation-of-lateral]] — **같은 lab의 하류 짝**(LHA^glut→VTA^DA 강화, 1 Hz LFS 역전). 본 논문과 합치면 피질→시상하부→중뇌 세 시냅스가 같은 축으로 정렬.
- [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal]] — ⚠️ PFC→LH를 **brake**로 보는 1차 자료. 세포타입·시냅스 차수·성별·측정 축으로 분해해 병기.
- [[concept-lateral-hypothalamus]] — 개념 hub. 상류 목록의 "mPFC → 식이 억제" 분류를 양방향으로 정밀화할 근거.
- [[overview-lateral-hypothalamus-synthesis]] — LH 입출력 종합. 본 논문은 mPFC→LHA 행을 세포타입 4종·투사 3종으로 세분한다.
- [[korotkova-2026-balancing-acts-lateral-hypothalamic]] · [[liu-2026-granular-motivational-interaction-and]] — mPFC→LH **beta behavioral switch**(Chen 2024) 축. 본 논문 Discussion이 ref 44로 같은 논문을 인용하며 "engagement/전환 신호" 해석을 제시 — 그 1차 원전은 여전히 위키에 없다.
- [[leow-2026-a-cortical-hypothalamic-neural]] · [[concept-zona-incerta]] — mPFC→**rZI** 강박 섭식(처벌-저항). 해부학적으로 인접한 별개 표적이며, 본 논문과의 표적 분리는 미확인.
- [[hjort-2026-prefrontal-to-ventral-tegmental-area]] — mPFC→VTA 직접 경로. 본 논문의 mPFC→LHA→VTA 간접 경로와 **같은 종착점·다른 경유지**.
- [[rossi-2021-transcriptional-and-functional-divergence]] · [[rossi-2019-obesity-remodels-activity-and]] — ⚠️ "LHA^Vglut2 = brake" 통념의 출처. 본 논문은 필요조건 반례.
- [[nieh-2016-inhibitory-input-from-the]] — LH→VTA GABA/glutamate 이분법 원전. 본 논문의 VTA 투사 분기 해석의 배경.
- [[concept-paraventricular-nucleus]] — **peri-PVN**(제3뇌실 주변) 투사 분기가 섭식 억제 쪽. 본 논문에서 이 분기로 가는 mPFC 시냅스가 약화된다.
- [[concept-lateral-habenula]] — LHb 투사 분기는 PPR 변화 없음(음성 결과).
- [[concept-orexin-neurons]] · [[domingos-2013-hypothalamic-melanin-concentrating-hormone]] — LHA^OREX·LHA^MCH도 mPFC 입력을 받는다. 스트레스 앙상블은 OREX에 선택적으로 연결(Z=8.37, p=0.004).
- [[mickelsen-2019-single-cell-transcriptomic-analysis-of]] · [[wang-2021-expansion-assisted-iterative-fish-defines-lateral]] — OREX·MCH가 VGLUT2+ 하위집단이라는 전사체 근거(본 논문의 세포 분류 전제).
- [[wang-2026-a-hypothalamic-circuit-links]] — ⚠️ 상류에 따라 LHA^Glu 부호가 반대(병기).
- [[shin-2023-early-adversity-promotes-binge-like-eating]] — 스트레스성 폭식의 다른 LH 출력(→vlPAG^Penk). 본 논문이 보지 않은 분기.
- [[concept-emotional-eating]] · [[tomiyama-2019-stress-and-obesity]] — 스트레스→과식의 임상·내분비 층. 본 논문은 그 회로 기질.
- [[lee-2025-hijacked-brain-modern-obesity-cue]] — Emotional eating 표현형에 "dlPFC 저활성" 대신 **분기별 가소성 재편**이라는 대안 기전.
- [[concept-drug-evoked-synaptic-plasticity]] — 전시냅스 방출확률 변화(PPR)·depotentiation 가역성의 개념 좌표.
- [[de-vrind-2019-effects-of-gaba-and]] — 같은 lab, LHA 바이러스의 ZI 확산 confound 논의 전례.
- [[concept-loss-of-control-eating]] · [[concept-food-addiction]] — binge phase(첫 20분에 bout 75%)의 임상 대응.
- [[concept-need-motivation-pleasure-utility]] — 평상 섭식에는 불필요하고 스트레스에서만 필요해지는 **조건부** 경로 = Motivation의 state-dependent gain 성분.
- [[concept-transcranial-electrical-stimulation]] · [[concept-temporal-interference-stimulation]] · [[concept-deep-brain-stimulation]] — 주파수별 부호 역전(5 Hz↑ / 20 Hz·연속↓)이 비침습·침습 신경조절 설계에 주는 제약.
- [[talakoub-2017-lateral-hypothalamic-activity-indicates]] — 인간 LHA 주파수 서명. ⚠️ 내재 리듬(beta)과 외부 자극 유효 대역(5 Hz)을 구분해 읽을 것.
- ⚠️ [[miralpeix-2026-hypothalamic-pomc-neurons-gate]] — **시간척도가 반대**: 본 논문은 사회 패배 **이후**의 기호식 과식, 그쪽은 학습된 위협 **당시**의 섭취 중단(ARC POMC→PVN CRH→HPA). "스트레스 → 과식"을 쓸 때 위협기/회복기를 분리할 근거.
- [[person-choi-hyung-jin]] — 사용자 lab hub.
