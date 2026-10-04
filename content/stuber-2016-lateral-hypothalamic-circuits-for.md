---
title: "Lateral hypothalamic circuits for feeding and reward (Stuber & Wise 2016, Nat Neurosci)"
type: paper
created: 2026-10-03
updated: 2026-10-03
source: "raw/2016 NN. Lateral hypothalamic circuits for feeding and reward.pdf"
authors: [Garret D. Stuber, Roy A. Wise]
year: 2016
journal: "Nature Neuroscience 19(2):198–205 (2016-02; online 2016-01-27; 접수 2015-07-15, 채택 2015-12-03); doi:10.1038/nn.4220 (Review)"
---

> [!takeaway] 연구 방향 관점의 핵심
> **전기자극 시대(1950s–80s)의 LH 결과를 광유전 시대의 세포타입·회로 언어로 다시 쓴 리뷰.** 이 리뷰가 위키 전체의 LH 통념 세 가지를 세웠다. ① **LH^Vgat(섭식↑·자기자극) vs LH^Vglut2(섭식↓·혐오)**는 서로 반대 방향의 출력이다. ② 그 출력은 직·간접으로 **VTA 도파민에 전달되어 "행동 출력을 항상성적으로 활성화(homeostatically invigorate)"**한다. ③ 입력 쪽에서는 **vBNST^GABA → LH^Glut**와 **NAc shell D1R → LH^GABA**가 섭식을 켜고 끈다(Fig 4 회로도). 저자는 UNC의 **Stuber lab**과 NIDA의 **Roy Wise**이고, Wise는 LH 전기자극 섭식·보상 연구를 직접 수행한 고전 세대다.
> 저자들은 **"drive–reward paradox"가 여전히 미해결**이라고 결론짓는다. LH 자극은 왜 동물을 배고프게 만들면서 동시에 보상이 되는가? bulk 광유전은 최대 **1 mm 조직·10,000개 LHA 뉴런**을 한꺼번에 켜거나 끄기 때문에 이 질문에 답할 수 없다는 것이다.
> 사용자 연구와 닿는 지점은 셋이다. (1) 리뷰는 **"ARC = 항상성 섭식, LHA = 강박적·hedonic 섭식"**으로 나눈다. 반면 사용자 lab의 [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]·[[kim-2024-normative-framework-dissociates-need|Kim 2024]]는 LH^LepR가 **배고픔에 gating된 need 누적(Motivation)**을 나른다고 보았다. 두 서술이 정면으로 긴장한다(⚠️ 절). (2) "drive vs reward" 역설은 [[concept-need-motivation-pleasure-utility|NMPU]]의 **Motivation(drive·vigor) vs Pleasure/Utility(reward)** 분해의 고전 판본이다. NMPU는 이 역설을 축 분리로 풀려는 시도로 읽을 수 있다. (3) 리뷰의 미래 과제(같은 세포의 혐오 반응 기록, LHA 10만 세포 scRNA-seq, 단일세포 해상도 조작)는 리뷰 자신이 인용한 [[jennings-2015-visualizing-hypothalamic-network-dynamics|Jennings 2015]](LH^Vgat 단일세포 영상, 리뷰 이전 출판)를 출발점으로, 이후 [[rossi-2019-obesity-remodels-activity-and|Rossi 2019]] → [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]] → [[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026]]로 실제 수행되었다.

# Lateral hypothalamic circuits for feeding and reward (Stuber & Wise 2016)

- **저널**: Nature Neuroscience 19(2):198–205 (2016년 2월호; 온라인 2016-01-27). DOI: 10.1038/nn.4220. Review, 참고문헌 150편, Figure 4개.
- **소속**: Garret D. Stuber — University of North Carolina at Chapel Hill(Department of Psychiatry · Cell Biology and Physiology · Neuroscience Center). Roy A. Wise — NIDA Intramural Research Program(Baltimore). 교신 **G.D.S.** (gstuber@med.unc.edu; 현 University of Washington — 원문 외 정보).
- **지원**: Klarman Family Foundation, Brain & Behavior Research Foundation, Foundation for Prader-Willi Research, Foundation of Hope, NIDA DA032750·DA038168, UNC Chapel Hill Department of Psychiatry(G.D.S.), NIDA IRP(R.A.W.). 원고에 J. Jennings가 의견을 주었다.
- **성격**: 원저 데이터 없음. Figure 3은 Jennings 2015 Cell(ref 111)을 각색했다고 명시하고, Figure 1은 Olds 1958(ref 150)을 각색했다. Figure 2(Vgat·Vglut2 in situ와 Cre 표지)에는 출처 표기가 없다. 아래 수치는 모두 인용 문헌의 값이다.

## 한 줄 요약
LHA 전기자극이 포만 상태에서도 폭식과 **포만 없는 자기자극**을 함께 일으킨다는 60년 전 발견에서 출발해, 그 기질을 하행 MFB 통과섬유에서 분자 정의 세포타입으로 옮긴 리뷰다. 중심 모델은 **LH^Vgat(섭식·보상↑)와 LH^Vglut2(섭식↓·혐오)가 반대 방향 출력을 내고, BNST·NAc·피질 입력이 이를 조율하며, 출력은 VTA·LHb를 거쳐 도파민으로 수렴한다**는 것이다(Fig 4). 다만 feeding과 reward가 회로 수준에서 분리되는지(drive–reward paradox)는 미해결로 남긴다.

## 핵심 내용

### 서론 — LHA는 "경계가 흐린 넓은 장(field)"
- 시상하부는 뇌 조직의 **~3%**에 불과하지만 항상성 기능과 원시 행동 상태를 직접 제어한다. 그 상당 부분은 해부학적 경계가 약한 뉴런·섬유의 장(field)인 **LHA**다.
- 위치: preoptic area 뒤, VTA 앞. **medial forebrain bundle(MFB)** 섬유가 지나가는 bed nucleus이며, 유전적으로 다른 여러 세포 집단을 담는다.
- 리뷰의 목표: 1950–80년대 병변·전기자극 고전 결과를 광유전 회로 연구와 통합해, "여러 개의 잘 정의된 LHA 회로 요소가 하류 계통과 접속해 특정 동기·실행 상태를 만든다"는 그림을 제시한다.

### 고전 병변·약리 실험 (1940s–80s)
- **전기분해 병변**: LHA 병변은 섭식(Anand & Brobeck 1951)과 음수(Montemurro & Stevenson 1957)를 억제한다. 인접 **VMH** 병변은 반대로 과식·체중 증가를 낳는다(Hetherington & Ranson 1940).
- **통과섬유 문제**: MFB를 지나는 노르에피네프린(Kapatos & Gold 1973)·도파민(Ungerstedt 1971, 6-OHDA) 섬유의 화학 병변도 섭식·음수를 바꾼다. 그러나 **통과섬유를 보존하고 세포체만 파괴하는 kainic acid 병변도** 섭식·음수를 억제한다(Grossman 1978; Grossman & Grossman 1982; Stricker 1978). → LHA 세포체 자체가 필요하다.
- **약리**: LHA 내 glutamate 수용체 작용제는 섭식을 유발하고(Stanley 1993), GABA 작용제(muscimol)는 억제한다(Kelly 1979). 전기자극·병변과 같은 방향이다.
- 주의: 전기자극이 **너무 강하거나 길면 혐오적**이 된다(Bower & Miller 1958; Mendelson & Freed 1973).

### Figure 1 — LHA 전기 자기자극은 "포만되지 않는다"
- (a) 동물은 복측 전뇌의 여러 부위에서 자기자극을 한다. (b) 그러나 **LHA에서만 자기자극이 거의 포만되지 않는다** — 수 시간에 걸친 누적 레버 반응이 수만 회 수준(그림 축 15,000·30,000)까지 꺾이지 않고 오른다(Olds 1958 각색). 초록의 표현으로는 "시간당 수천 회".
- (c) 자기자극을 지지하는 전뇌·시상하부 부위의 지도.
- **종-전형 행동의 유발**: LHA·MFB 자극은 먹기·마시기·교미·갉기·둥지 짓기(먹기·마시기·갉기는 포만 동물에서도)와 포식 공격을 유발한다. 먹기와 교미는 해부학적으로 분리되지만(posterior hypothalamic "copulation-reward site", Caggiula & Hoebel 1966), 먹기·갉기·포식 공격은 부위가 겹친다.
- **특정 운동이 아니라 "환경 자극에 대한 반응성 고양"**: 같은 자극이 어떤 개체에서는 먹기, 다른 개체에서는 마시기·갉기·공격을 낸다. 이 차이는 전극 위치 차이가 아니라(Wise 1971) **반복 시행 중 형성되는 반응 패턴** 때문이며(Valenstein 1968; Wise 1968), 시험 상자에 **어떤 목표물이 있느냐**에 따라 우세 반응이 바뀐다.
- **박탈 상태와의 유사성**: 자극 유발 섭식은 ① 새 음식-강화 도구 반응의 **학습**을 동기화하고(Coons 1965; Mendelson & Chorover 1965), ② 박탈 상태에서 학습한 반응의 **수행**도 유발하며, ③ 무조건 혐오(quinine; Tenen & Miller 1964)와 **조건 맛 혐오**(Wise & Albin 1973)의 영향을 받는다.
- 고양이 포식 공격(Flynn): 추적→접근→덮치기→입 벌림→물기로 이어지는 각 단계에 고유한 촉발 자극이 있고, 자극은 그 **촉발 자극에 대한 반응성을 높인다**. → 활성화되는 기질이 특정 동기 경로라기보다 **일반 각성계**라는 견해로 이어졌다.
- **반론 — 특이성의 증거**: ① MFB의 서로 다른 지점이 서로 다른 조절을 받는다. VMH 수준의 LHA는 **먹이 제한·leptin**에(Fulton 2000, 2006), 후부 시상하부 MFB는 **testosterone**에 민감하다. ② 먹기는 **저주파**, 마시기는 **고주파** 자극에 우선 반응한다(Mogenson 1971). ③ Morgane 1961은 하나가 다른 하나보다 약간 외측에 있는 두 개의 "hunger-motivational" 하위계를 제안했다. 그러나 이 영역에는 **50개 이상의 섬유계**가 지나가고 전기자극은 전극 끝 주변 섬유를 비선택적으로 활성화하므로(Ranck 1975), 단일계인지 다중계인지는 전기자극으로 결론 나지 않았다.
- **이름표의 역사**: 병변·자극 결과로 "hunger system"(Morgane)·"feeding center"(Anand & Brobeck)·"drinking center"(Greer)라 불렸고, 자기자극 발견 뒤 "pleasure center"(Olds 1956)라 불렸다. 동물을 배고프게 만드는 부위의 자극을 위해 동물이 일한다는 사실이 **"drive–reward paradox"**다(Wise 2013). 하나의 각성계가 drive 효과와 보상 효과를 함께 내는지, 두 독립계가 내는지가 쟁점이다.

### 뇌자극 보상(BSR)의 기질 — 도파민 섬유가 아니라 하행 유수 통과섬유
- 도파민 수용체 차단제(neuroleptic, pimozide)는 자극 유발 섭식(Phillips & Nikaido 1975)과 LHA BSR(Fouriezos & Wise 1976; Fouriezos 1978; Franklin 1978; Franklin & McCoy 1979; Gallistel 1982)을 모두 줄인다. → 전뇌 투사 중뇌 DA계가 중요하다.
- 그러나 **"전극 끝에서 DA 통과섬유가 직접 탈분극된다"는 가설은 모수 연구로 반증되었다.**
  - 보상 효과를 바꾸는 주파수 범위에서 DA계는 주파수 변화에 둔감하다(Wise 1978).
  - **Paired-pulse 불응기**: 직접 자극되는 "first-stage" 섬유의 불응기는 DA 섬유로 보기에 **너무 짧다**(Yeomans 1979; Gallistel 1981). 최소 두 아집단이 있다. 하나는 정체 미상이고, 다른 하나는 **콜린성 수용체 차단에 민감한 초고속 아집단**이다(Gratton & Wise 1985). 두 아집단 모두 섭식 효과와 보상 효과에 함께 기여한다.
  - **이중 전극 충돌 실험**: LHA와 VTA는 보상 관련 섬유로 이어져 있지만, 그 **전도 속도가 무수 DA 섬유보다 훨씬 빠르다**(Shizgal 1980).
  - **Bielajew & Shizgal 1986**: 한 지점의 음극 자극을 다른 지점의 양극 자극으로 막는 실험에서, 보상 관련 섬유의 대부분이 **꼬리 쪽(VTA를 향해) 하행**함을 보였다. 이후 **lateral preoptic area → VTA** 연결이 확인되었다(Bielajew 2000). → 보상 섬유는 **전측 시상하부 또는 그 앞쪽에서 기원하는 하행 섬유**다.
- 결론: BSR = **하행 MFB 통과섬유의 활성화 → VTA DA계의 직접(Wise & Bozarth 1981) 또는 간접(Yeomans 1982) 활성화**. 이 DA계는 음식(Wise 1978 "anhedonia")·정신자극제(Yokel & Wise 1975; de Wit & Wise 1977) 보상에도 관여한다.
- **자극 유발 섭식의 기질도 같은 기법으로 보면 BSR과 닮았다**:
  - 비중첩 first-stage 두 아집단: 불응기 **0.4–0.6 ms의 초고속 아집단**과 **0.7–~2.0 ms의 느린 아집단**(Gratton & Wise 1988a). LHA·VTA·그 사이 MFB 각 수준에서 같은 두 아집단이 보인다.
  - LHA 전극 + VTA 전극의 이중 전극 실험: 섭식과 보상이 두 위치에서 모두 나온다. **섭식에서 정렬(같은 축삭)이 확인된 경우엔 보상에서도 정렬**이 확인되고, 전도 속도도 매우 비슷하다(Gratton & Wise 1988b).
  - 저자 결론: 서로 다른 섬유 부분집합이 두 반응을 매개할 가능성은 배제되지 않는다. 그러나 **공통 부위·궤적·불응기 분포·전도 속도**는 공통 신경 기질 쪽을 가리킨다.

### Figure 2 — LHA에는 억제성·흥분성 뉴런이 섞여 있다
- (a) LHA **Vgat** mRNA in situ. (b) Vgat-IRES-Cre::Ai3로 표지한 Vgat 뉴런. (c) LHA **Vglut2** mRNA in situ. (d) Vglut2-IRES-Cre로 표지한 뉴런. 표지 영역: LH·VMH·Arc·DMH·fornix.
- Vglut2 mRNA는 LHA에 풍부하고(Collin 2003; Rosin 2003; Ziegler 2002), GABA 표지와 **대체로 공간적으로 섞여 있다**(Ziegler 2002).

### 분자 표현형 — Orx·MCH·Nts·Gal
- **Orexin/hypocretin**(Orx; de Lecea 1998): 설치류에서 **~3,500–5,000개**, LHA에 국한되며 Vglut2를 발현한다(Rosin 2003).
  - 뇌실 투여는 섭취를 늘리고(Sakurai 1999), 수용체 길항·유전 결손은 줄인다(Haynes 2002).
  - 화학 활성화 또는 VTA 내 펩타이드 주입은 **약물·음식 추구를 복원(reinstatement)**한다(Harris 2005).
  - 그러나 광자극은 각성을 늘리고(Adamantidis 2007), 세포 제거는 **기면증(narcolepsy)**을 낳는다(Hara 2001).
  - 저자 결론: Orx는 LHA 동기 행동 출력의 **"기여자이지 1차 결정자가 아니다"**.
- **MCH**: 주로 LHA에 있으며 광범위하게 투사하고 Orx와 별개다. 일부는 GAD67(GABA), 일부는 Vglut2를 발현한다(혼합 집단).
  - 뇌실 투여는 섭식·체중을 늘리고(Qu 1996), 과발현은 과식·비만을 낳는다(Ludwig 2001). MCH 뉴런 제거나 MCH 결손 마우스는 저식·마름이다(Alon & Friedman 2006; Shimada 1998).
  - 활성화는 **REM 수면**을 촉진한다(Jego 2013). 각성 조절에서 Orx와 반대 역할이다.
  - 저자 가설: Orx·MCH의 섭식 표현형은 **특정 각성 상태에서 자연스럽게 나오는 행동 패턴**과 더 관련될 수 있다.
- **Neurotensin(Nts)**: preoptic·전측 시상하부에 집중되지만 LHA와도 겹친다. **음성 에너지 균형** 쪽으로 가설화되었다.
  - 말초·중추 Nts 투여는 섭식을 억제한다(Cooke 2009). Nts 뉴런 일부의 유전 제거와 NTR1 결손은 과식·비만을 낳는다(Kim 2008; Leinninger 2011).
  - Nts 뉴런은 **galanin과 ~95% 공발현**하지만 MCH·Orx와는 겹치지 않는다(Laque 2013).
- **Vgat-IRES-Cre**(Vong 2011)로 표적되는 LHA 뉴런은 **MCH·Orx와 거의 공발현하지 않는다**(Fig 3). → 저자들은 Vgat 집단 일부가 **Nts를 발현할 수 있다**고 추정하고 향후 검증 과제로 남긴다.

### Figure 3 — Vgat 표적 뉴런은 MCH·Orx와 별개 (Jennings 2015 각색)
- (a) Vgat-eYFP(녹색) vs MCH 면역(적색). (b) Vgat-eYFP vs Orx 면역. (c) Vgat 표적 LHA 뉴런은 섭식을 매개하는 **별도 집단**이다. 원 논문의 정량치는 **두 쌍 모두 0% 중첩**이다([[jennings-2015-visualizing-hypothalamic-network-dynamics|Jennings 2015]] Fig 3).

### 광유전 시대 — LH^Vgat vs LH^Vglut2의 대립
- **전기자극 대비 장점**: 전기자극은 통과섬유를 우선 활성화하고, 그 자리에서 기원한 섬유와 먼 곳에서 온 섬유를 구분하지 못한다. 광유전은 특정 유전자를 발현하는 **기원 세포의 섬유만** 활성화할 수 있고, 특정 표적으로 가는 그 세포의 투사만 골라 자극할 수 있다.
- **LH^Vgat 직접 활성화** → **폭식 + 광 자기자극**(Jennings 2015). 전기자극 표현형(Hoebel & Teitelbaum 1962; Margules & Olds 1962)을 "놀랍도록 닮았다".
- **LH^Vglut2 활성화** → 반대다. 배고픈 마우스의 **섭식이 줄고**, 자극 장소를 **회피**한다(Jennings 2013 Science).
- **유전적 제거도 대칭이다**: LH^Vgat 제거 → 섭식·체중 증가·기호성 칼로리 보상을 얻으려는 동기가 **감소**한다(Jennings 2015). LH^Vglut2 제거 → 섭식·체중 증가가 **증가**한다(Stamatakis 2016).
- **저자 모델**: Vgat·Vglut2 LHA 뉴런은 **양방향 출력 신호**를 만들고, 이것이 직·간접으로 VTA DA 뉴런에 전달되어 **"행동 출력을 항상성적으로 활성화한다(homeostatically invigorate behavioral output)"**. 복잡하지만 반복되는 환경 표상은 **상류의 피질·해마 망에서 부호화**되어 LHA로 전달된다고 본다.

### 입력 회로
- **피질·해마**: mPFC 전기자극은 LHA 뉴런에 다양한 단·다시냅스 반응을 만든다(Kita & Oomura 1981). fornix를 통한 해마의 단시냅스 흥분성 입력은 **공간·맥락** 정보를 실어 나를 것이다(Nauta 1958).
- **억제성 GABA 입력**: lateral septum(Anthony 2014), 기저전뇌·확장편도 — NAc shell(Heimer 1991; Zahm & Brog 1992), BNST/preoptic area(Jennings 2013), ventral pallidum(Root 2015), nucleus basalis/substantia innominata(Grove 1988).
- **중뇌·뇌간 입력은 상대적으로 드물다**: 자율신경 처리 중추인 PBN·PAG(Yoshida 2006). 신경조절물질 DA·NE·5-HT도 LHA에 방출된다.
- **시상하부 내 입력**: arcuate(Broberger 1998; [[betley-2013-parallel-redundant-circuit-organization-for|Betley 2013]]), "periventricular hypothalamus"(Wu 2015), VMH(Canteras 1994). **ARC^AgRP→LHA**와 **"PVH^GABA–LHA"** 경로의 광자극은 섭식을 유발한다. ⚠️ 출처 방향 주의: 리뷰가 "PVH^GABA–LHA" 입력의 근거로 든 Wu 2015(J Neurosci, ref 125)의 제목은 "GABAergic projections from **lateral hypothalamus to paraventricular** hypothalamic nucleus promote feeding"으로, 실제 방향은 **LH^GABA → PVH**(출력)다. 리뷰 본문의 "periventricular hypothalamus" 표기도 원전의 paraventricular와 다르다.
- **저자 주장(핵심)**: **"arcuate 회로는 에너지 요구에 반응해 항상성 섭식을 직접 제어하고, LHA 회로는 VTA 보상 회로와의 긴밀한 연결 때문에 강박적(compulsive)·hedonic 섭식을 구동한다."**
- **vBNST^GABA → LH^Glut** (Jennings 2013 Science): vBNST 등의 GABA 뉴런은 LHA **glutamate 뉴런을 우선적으로** 단시냅스 억제한다. 이 경로의 광자극은 섭식을 일으키는데, 그 섭식은 ① 빠르게 개시되고, ② 자극 주파수와 상관하며, ③ 가장 **기호성 높고 칼로리 밀도 높은 음식**으로 향한다. 마우스는 이 경로를 광 자기자극하며, 자기자극 출력은 **먹이 박탈·포만 상태에 강하게 조절**된다. → LHA가 동기와 섭식을 함께 조율한다는 이중 역할과 정합한다.
- **NAc shell → LHA**: D1·D2 MSN 모두에서 입력이 온다.
  - Kelley 계열의 선행 연구: NAc shell의 AMPA 길항 또는 GABA 억제는 **LHA 의존적** 섭식을 유발한다(Maldonado-Irizarry 1995; Stratford & Kelley 1997, 1999).
  - O'Connor 2015(Neuron): LHA로 투사하는 NAc shell MSN의 **다수는 D1**이고 D2는 소수다. D1R 섬유는 LHA 복외측을 지배하며 **LHA GABA 뉴런을 표적**하고, Orx·MCH 뉴런은 표적하지 않는다. **NAcSh^D1R→LHA^GABA 광자극은 기호성 보상 licking을 억제**하고, 시냅스 후 LHA^GABA 광억제는 섭취를 억제한다.
- 소결: 확장편도와 인접 구조의 서로 다른 억제성 하위회로가 **분자적으로 다른 LHA 시냅스 후 뉴런을 선택적으로 표적**해 섭식과 보상을 조절한다.

### Figure 4 — 광유전 연구 기반 제안 회로도
- **LHA^GABA → VTA^GABA 억제 → VTA DA 탈억제** → NAc DA 방출 → **D1R MSN 흥분·가소성 유도** → 이 억제 신호가 되먹임으로 **LHA^GABA를 억제해 섭식 bout를 종료**한다. 즉 **LH^GABA → VTA → NAc → LH^GABA의 음성 되먹임 고리**다.
- **BNST^GABA → LHA^Glut** 우선 억제. LHA^Glut 일부는 **LHb**로 투사할 수 있고(범례: "may project"), LHA^Glut 활성은 **섭취 감소**로 이어진다.
- 그림에는 Orx·MCH 뉴런, ARC·PVN·PBN 노드도 함께 배치되어 있다. 색 구분: 추정 glutamatergic(하늘색), GABAergic(빨강), dopaminergic(남색).

### 출력 회로
- 고전 해부: VTA, "periventricular thalamus"(PVT), LHb 등으로 투사 특이적 출력(Berk & Finkelstein 1982).
- **LHA → VTA**: glutamatergic·GABAergic LHA 섬유가 **모두 VTA GABA와 VTA DA 뉴런을 기능적으로 지배**한다(Nieh 2015 Cell).
  - 저자 추정: 억제성 섬유는 BNST→VTA 경로(Jennings 2013 Nature)처럼 **VTA GABA를 우선 지배**할 것이다. 근거는 **LH^GABA→VTA 광자극이 섭식을 유발**하고(Nieh 2015), 마우스가 이 경로를 **광 자기자극**한다는 점이다(Kempadoo 2013). → **탈억제로 VTA DA 활동을 일시적으로 높여** 동기를 제어하는 기전이다.
  - 정합 증거: VTA GABA 짧은 광자극은 칼로리 보상의 **cue 유발 licking을 억제**하고(van Zessen 2012), **혐오적**이다(Tan 2012).
- **LHA^Vglut2 → LHb**: LHb 뉴런을 흥분시킨다. 이 LHb 뉴런은 VTA/RMTg GABA로 투사해 DA를 억제할 가능성이 높다(Poller 2013; Lammel 2012). **LHA^Vglut2→LHb 광억제는 칼로리 보상 licking을 늘리고, 광활성은 혐오적**이다(Stamatakis 2016).
  - 인접 **entopeduncular nucleus(EP)** glutamatergic→LHb 자극도 혐오적이다(Shabel 2012). → LHA·zona incerta·EP의 glutamatergic 집단이 **공통 행동·회로 기능**을 공유할 수 있다.
- **LHA^GABA → LHb는 훨씬 약하다**. 대신 LHb 바로 아래의 정중선 시상, 예컨대 **PVT**를 지배한다. PVT는 muscimol(GABA 작용제) 주입으로 섭식이 유발되는 부위다(Stratford & Wirtshafter 2013).
- **LHA → PBN**: GABA·glutamate 모두 PBN으로 강하게 투사한다. 기능은 미검증이지만, 섭식·맛 혐오를 조절하는 PBN 회로(Carter 2013, 2015)를 조율할 수 있다.
- **LHA → ARC**: 투사가 보고되어 있다(Horvath 1999).
- 한계: LHA 세포기능을 나눌 **Cre-driver 계통이 부족**하다.

### 내인성 부호화 동역학 — bulk 조작 비판
- **광유전·화학유전의 한계**: LHA 뉴런은 20 Hz 이상으로 발화할 수 있지만, 여러 세포 아형이 bulk 광유전처럼 **고도로 동기화된 패턴**으로 발화하지는 않을 것이다. 억제성 광·화학유전도 긴 시간 동안 활동을 누르므로 신경 전형적 신호와 맞지 않는다. 빛이 조직을 데우면 오히려 활동을 **올릴** 수도 있다.
- **초기 in vivo 전기생리**(설치류·토끼·영장류): LHA 개별 뉴런은 보상·혐오·조건 자극에 반응한다(Fukuda 1986; Ono 1986, 1992; Schwartzbaum 1988).
  - **Ono 1986**: 1차 보상 반응 뉴런은 대개 혐오 자극에 반응하지 않는다. 반응하더라도 **반대 방향**이다(보상에 흥분, 혐오에 억제).
  - 칼로리 보상 반응 뉴런은 ICSS를 유발하는 전기자극에도 비슷하게 반응한다. → 서로 다른 보상이 **같은 LHA 뉴런**을 동원한다.
  - CS 반응 뉴런은 **1차 보상 반응 뉴런과 대체로 별개**다(Ono 1986; Schwartzbaum 1988; Nieh 2015).
  - 한계: 당시에는 **동정된(identified)** 뉴런을 기록할 수 없었다.
- **Nieh 2015 (Cell)**: 역행성 Cre 바이러스로 **LHA→VTA 투사 뉴런**에 ChR2를 발현시키고(glut/GABA 미구분) LHA 내 청색광 반응으로 동정했다.
  - **직접 투사 뉴런**: 보상 회수 포트 진입 시 일부는 흥분, 일부는 억제.
  - **다시냅스 연결 뉴런**: nosepoke, 보상 예측 cue, 포트 진입에 반응.
- **Jennings 2015 (Cell)**: microendoscope로 **수백 개 LH^Vgat** 뉴런을 행동 중 영상화했다. 개별 뉴런은 칼로리 보상을 얻기 위한 **nosepoke 또는 보상 후 첫 lick 중 하나**에 시간 고정되고, **둘 다에 반응하는 세포는 매우 적다**.
- 저자 결론: 1차 보상·혐오 자극·조건 자극에 반응하는 LHA 뉴런은 **회로 연결성이나 분자 표현형으로 분리될 수 있다**.

### Future outlook
- 고전 전기자극·기록과 세포타입 특이 광유전이 공통으로 보여 주는 것: 개별 LHA 회로는 보상·섭식뿐 아니라 **혐오 상태**도 만들 수 있다.
- **당시의 공백**: 정의된 LHA 집단이 보상·예측 cue를 어떻게 부호화하는지는 일부 알려졌지만, **같은 세포타입이 혐오 자극에도 반응하는지, 다른 집단이 혐오를 부호화하는지에 대한 출판 자료는 없었다**.
- **근본 문제**: LHA에 뉴런 표현형이 정확히 몇 개인지 모른다. 고처리량 단일세포 전사체(Macosko 2015 Drop-seq)를 **LHA 뉴런 100,000개 이상**에 적용하면 정량 유전 자료로 아형 수를 셀 수 있을 것이다.
- **Drive–reward paradox는 미해결**: LHA 신경조절로 쉽게 나오는 "보상" 표현형과 "섭식" 표현형이 실제로 분리되는지 확실하지 않다. bulk 광유전은 최대 **1 mm 조직, 최대 10,000개 LHA 뉴런**과 관련 회로를 한꺼번에 켜거나 끈다. 반면 LHA 활동 동역학은 세포 수준에서도 복잡하다. → **단일세포 광유전 조절**이 필요하다.
- **즉시 검증 가능한 시나리오**: LHA 회로 동역학은 주로 **입·출력 회로**에 의해 결정될 수 있다. 확장편도·기저전뇌·피질·다른 시상하부 핵의 **구심성 입력 총합**이 LHA 회로에 더 특정한 ensemble 정보를 주고, LHA가 그에 맞는 **behavioral drive**를 생성한다.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **"Homeostatically invigorate" = NMPU Motivation의 원형**: 리뷰는 LH 출력을 "섭식 명령"이 아니라 **VTA DA를 거쳐 행동을 활성화(invigorate)하는 양방향 신호**로 정의한다. [[kim-2024-unified-theoretical-framework-underlying-regulation|NMPU]]의 Motivation 축(vigor·우선순위)과 [[kim-2024-normative-framework-dissociates-need|Kim 2024]]의 "LH^LepR = need 누적 = Motivation"이 바로 이 정의를 정량화한 것으로 읽을 수 있다. 그렇다면 리뷰의 "LHA = hedonic/compulsive" 이름표는 LH 고유 속성이 아니라 **VTA 연결로 인한 강화 부산물**일 수 있다. 검증: LH^LepR 광 자기자극(ICSS)의 반응률이 **금식·leptin에 따라 변하는지** 보면 된다. Fulton 2000이 전기자극 수준에서 보인 "VMH 수준 LHA BSR의 leptin 민감성"을 세포타입 수준에서 재현하는 실험이다. 리뷰가 미해결로 남긴 drive–reward 결합을 **need gating**이라는 단일 변수로 설명할 수 있는지 판정할 수 있다.
- **Drive–reward paradox를 NMPU 축으로 분해**: 리뷰의 "drive"(박탈 유사 상태, 목표물 반응성↑)는 Need→Motivation에, "reward"(자기자극)는 Pleasure/Utility 또는 **Motivation 신호 자체의 강화성**에 대응한다. Wise의 관찰 — 자극 섭식이 맛 혐오로 억제되고, 목표물 가용성에 따라 행동이 바뀌며, 학습된 반응을 수행시킨다 — 은 LH 출력이 **특정 운동이 아니라 "현재 가용한 목표물에 대한 incentive 가중"**임을 시사한다. 이는 [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]의 food-specific(초콜릿 vs Lego) 정의, [[lee-2026-distinct-lateral-hypothalamic-gabaergic-ensembles|Lee 2026]]의 salience ensemble과 같은 층위의 질문이다.
- **Fig 4 음성 되먹임 고리 = bout 종료의 회로 가설**: LH^GABA → VTA DA → NAc D1 → LH^GABA 억제로 bout가 끝난다는 고리는 [[concept-loss-of-control-eating|LOC eating]]의 회로 후보를 준다. [[stuber-2025-the-neurobiology-of-overeating|Stuber 2025]]가 정리한 대로 급성 먹이 제한은 D1R-MSN→LHA GABA 전달을 depression시킨다. 이 고리의 브레이크가 약해지면 bout가 길어지고, 이것이 **섭식 지속(maintenance) 과잉**으로 나타날 것이라고 예측할 수 있다. [[gordon-2026-lateral-hypothalamic-control-of-the|Gordon 2026]]의 "선조체 DA = 개시만 강화, 지속은 비강화"와 함께 보면, 지속 조절은 DA가 아니라 **NAc→LH 되먹임**에 있을 수 있다.
- [[oconnor-2015-accumbal-d1r-neurons-projecting]] — ★ 본 리뷰가 "NAc shell → LHA" 절에서 요약한 **1차 원전**(Neuron 2015, Lüscher lab). 본 페이지 서술을 수치로 확정한다: CTB 역추적에서 LH 투사 NAcSh 뉴런의 **93.6%가 D1R**(D2R 5.2%), BNST에서는 **15–23%로 반전**; LH 뉴런의 **56%가 D1R 유발 IPSC**(630±334 pA) vs D2R **17%**(177±79 pA); biocytin 충전 62개 중 연결 29개에서 **MCH⁺·orexin⁺ 0개**; LH^Vgat는 **78% 연결**(803±217 pA, rabies 입력 97%가 D1R-MSN). 인과는 양방향이고 LH^Vgat 직접 광억제로 **완전히 재현**된다(F(1,9)=8.64, p<0.05). 본 리뷰 Figure 4의 **LH^GABA→VTA→NAc→LH^GABA 음성 되먹임 고리** 중 "NAc→LH" 변에 해당하는 1차 데이터다.
- [[nieh-2016-inhibitory-input-from-the]] — 본 리뷰가 Fig 4 disinhibition 고리를 **추정**으로 제시한 기전(LH^GABA → VTA GABA 우선 억제)을 직접 검증한 Tye lab 후속 원저(Neuron 2016-06; 리뷰 출판 뒤라 리뷰는 인용하지 않았고, 리뷰의 근거는 Nieh 2015 Cell): LH^GABA→VTA GABA 우선 억제→DA disinhibition→NAc DA↑, glutamate성은 DA↓·회피.
- [[bonnavion-2016-hubs-and-spokes-of]] — **동시기 자매 리뷰**(J Physiol 2016, de Lecea·Jackson). 같은 광유전 결과(Jennings·Nieh·O'Connor·Barbano·Stamatakis)를 세포타입 분류·수면·스트레스 중심으로 재배치. 함께 읽을 것.
- [[harris-2005-a-role-for-lateral]] — ★ 본 리뷰가 Orx 절에서 "**화학 활성화 또는 VTA 내 펩타이드 주입은 약물·음식 추구를 복원한다(Harris 2005)**"로 한 줄 인용한 **1차 원전**(Nature 2005). 수치가 그 서술을 확정한다: morphine·cocaine·food CPP 표현 중 **LH orexin 뉴런 48–52%가 Fos⁺**(비조건화 17±2%)이고 선호와 **R=0.72–0.90**; **인접 PFA·DMH orexin은 상관 없음(P>0.20)**; LH 국소 **rPP 150 nM**(Y4 작용제) 복원은 전신 morphine priming과 동등(353±52 vs 424±103 s, P>0.5)하고 **SB-334867로 완전 차단**; **VTA orexin A 140 nM 단독으로도 복원**(F(2,18)=11, P<0.01); 발바닥 전기충격은 **DMH·PFA orexin만** 켜고 LH는 켜지 않는다(스트레스 설명 배제). ⚠️ 본 리뷰의 평가("Orx는 **기여자이지 1차 결정자가 아니다**")는 원전의 자기 평가(재발의 **충분 노드**)보다 보수적이다 — 양쪽 병기. ⚠️ 원전은 **novel object CPP에서 LH orexin Fos 무변화**(18±2%)로 "소비성 보상 특이"를 주장하는데, 이는 [[jia-2026-novelty-exploration-activated-ensemble-in|Jia 2026]]과 긴장한다.
- [[yamanaka-2003-hypothalamic-orexin-neurons-regulate]] — 본 리뷰가 Orx 절에서 "세포 제거가 기면증을 낳는다(Hara 2001)"로 인용한 orexin/ataxin-3 계통의 후속 자료(Neuron 2003; 리뷰는 이 논문을 인용하지 않으며 "단식 각성"도 다루지 않는다). orexin/ataxin-3 마우스가 **단식해도 각성·탐색 운동을 늘리지 못한다**(보행 속도는 정상)는 결과는, 본 리뷰의 가설 "Orx의 섭식 표현형은 특정 각성 상태에서 나오는 행동 패턴"과 정합한다.
- [[linders-2022-stress-driven-potentiation-of-lateral]] — ⚠️ 본 리뷰가 세운 **"LH^Vgat = 섭식·보상↑ / LH^Vglut2 = 섭식↓·혐오"** 이분법에 대한 상태-의존 반례(Nat Commun 2022, Meye·Adan lab). 이틀 사회 패배가 **LHA^glut→VTA^DA 시냅스를 강화**하고(후시냅스 GluA1-AMPAR; PPR 불변), 그 강화가 **mPFC 도파민 출력↑ → 기호성 지방 과식**으로 이어진다. 20 Hz HFS는 스트레스 없이 과식을 만들고 1 Hz LFS는 스트레스성 과식을 막는다. 저자들은 이를 "brake의 **설정값이 경험·내부 상태로 재조정된다**"로 읽는다 — 리뷰의 이분법을 부정하기보다 **가소성 차원을 추가**하는 쪽(병기). 리뷰가 강조한 LH^Vgat→VTA 탈억제 고리와는 **다른 축에서 같은 방향(DA↑)** 에 도달한다.
- [[de-vrind-2019-effects-of-gaba-and]] — 본 리뷰의 **bulk 조작 비판이 그대로 실현된 사례**(Obesity 2019, Adan lab): LH^Vgat 전체를 hM3Dq로 수 시간 켰더니 chow "무게 변화↑"는 **갉기 spillage**였고(나무 블록 t5=6.651, P=0.001; 가루만 증가, 실제 섭취 불변) lard·palatable 선호는 ↓, 운동은 ↓인데 체온은 ↑였다. 즉 "LH^Vgat = 섭식↑" 통념(①)은 조작 강도·정량법에 민감하다. 같은 좌표·같은 DREADD로 부분집합 LH^LepR를 켜면 섭취↓·운동↑로 **부호가 갈린다** → 리뷰의 "bulk로는 drive–reward paradox에 답할 수 없다"는 결론에 세포타입 해상도 쪽 근거를 보탠다.
- [[siemian-2021-lateral-hypothalamic-lepr-neurons]] — 본 리뷰의 LHA→VTA 자기자극·보상 전통(MFB BSR)에 **세포타입 해상도**를 붙인 후속: LH^Vgat의 ~20% subset(LepR)이 RTPP·operant self-stimulation·sucrose CPP 같은 보상/appetitive 축만 물려받고 섭식은 비구동. LH^LepR→VTA가 기대보상 relay로 Pavlovian 학습을 양방향 조절(Cell Rep 2021).
