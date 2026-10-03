---
title: "Hypothalamic orexin neurons regulate arousal according to energy balance in mice (Yamanaka 2003, Neuron)"
type: paper
created: 2026-10-03
updated: 2026-10-03
source: "raw/2003 Neuron. Hypothalamic Orexin Neurons Regulate Arousal According to Energy Balance in Mice.pdf"
authors: [Akihiro Yamanaka, Carsten T. Beuckmann, Jon T. Willie, Junko Hara, Natsuko Tsujino, Michihiro Mieda, Makoto Tominaga, Ken-ichi Yagami, Fumihiro Sugiyama, Katsutoshi Goto, Masashi Yanagisawa, Takeshi Sakurai]
year: 2003
journal: "Neuron 38(5):701–713 (2003-06-05); doi:10.1016/S0896-6273(03)00331-3"
---

> [!takeaway] 연구 방향 관점의 핵심
> **"배고프면 깨어 돌아다닌다"는 적응 반응의 세포 기질을 orexin 뉴런으로 처음 지목한 foundational paper.** 근거는 세 층이다. ① **세포 수준**: 시냅스에서 분리한 orexin 뉴런이 포도당에 억제되고(10→30 mM에서 −45→−62 mV, 8/10 발화 정지) 저포도당에 흥분한다. leptin(10 nM)은 7/9을 억제하고, ghrelin(10 nM)은 6/9을 흥분시킨다. insulin은 효과가 없다. ② **유전자 발현 수준**: 시상하부 *prepro-orexin* mRNA가 혈당·leptin·섭식량과 반대로 움직인다. 고혈당인 *ob/ob*에서는 낮고, 혈당을 정상화하면 leptin 치료로는 leptin 처치 WT 수준까지, pair-feeding으로는 오히려 WT 이상으로 오른다. ③ **행동 수준**: orexin 뉴런을 없앤 *orexin/ataxin-3* 마우스는 단식해도 **각성·NREM 감소·REM 잠복기 연장·탐색 운동 증가가 모두 나타나지 않는다**(n=6 / n=5–6).
> 사용자 연구와 닿는 지점은 넷이다. (1) [[kim-2024-normative-framework-dissociates-need|Kim 2024]]의 normative model에서 orexin은 **현재 결핍(Deficit; glucose↓·leptin↓·ghrelin↑)을 직접 감지해 각성·운동 출력으로 바꾸는 노드**다. 예측된 결핍을 부호화하는 AgRP(Need)나 결핍을 적분하는 LH^LepR(Motivation)와는 다른 자리에 놓인다. 행동 개시 **문턱 K를 낮추는 state gate**라는 *연결 가설*을 세울 수 있다. (2) 이 논문의 "leptin이 orexin 뉴런을 **직접** 억제한다"는 주장은 위키의 [[leinninger-2009-leptin-acts-via-leptin|Leinninger 2009]]·[[leinninger-2011-leptin-action-via-neurotensin|2011]](OX에 LepRb 없음, LepRb^Nts GABA 탈억제 모델)과 **정면으로 긴장**한다. 이 때문에 [[lee-2023-lateral-hypothalamic-leptin-receptor|LH^LepR]]→OX 국소 회로가 사용자 lab의 검증 대상이 된다. (3) 고혈당이 orexin을 누른다는 결과는 T2D·비만의 **피로·활동 저하**를 설명하는 회로 후보다. (4) 비만 동물도 섭식을 제한하면 orexin이 **WT 이상으로** 올라간다는 결과는, 감량 후 [[concept-weight-regain-defended-adiposity|체중 재증가]] 압력의 각성·탐색 성분 후보다.

# Hypothalamic orexin neurons regulate arousal according to energy balance in mice (Yamanaka et al. 2003)

- **저널**: Neuron 38, 701–713 (2003-06-05; 접수 2003-02-24, 수정 04-18, 채택 05-20). DOI: 10.1016/S0896-6273(03)00331-3. PII: S0896-6273(03)00331-3. 같은 호에 자매 논문 Willie 2003(OX2R KO vs orexin KO 기면증 해부, Neuron 38:715–730)이 실렸다.
- **소속**: 츠쿠바대 기초의학(약리학, **Takeshi Sakurai**) + ERATO Yanagisawa Orphan Receptor Project + UT Southwestern·HHMI 분자유전학(**Masashi Yanagisawa**). 교신은 Sakurai·Yanagisawa이고, **Yamanaka·Beuckmann·Willie가 공동 1저자**다.
- **모델·방법**: 새로 만든 **orexin/EGFP** 형질전환 마우스(인간 *prepro-orexin* promoter–EGFP)로 해리 뉴런·절편을 whole-cell patch했다. 그 밖에 i.c.v. leptin 삼투압 펌프, Northern blot, **orexin/ataxin-3** 반접합 마우스(orexin 뉴런 선택 소실; Hara 2001)의 EEG/EMG와 open-field 활동을 측정했다.

## 한 줄 요약
orexin 뉴런은 **포도당·leptin에 억제되고 ghrelin에 흥분하는 대사 감지 세포**이며, 시상하부 orexin 발현은 혈당·leptin·섭식량과 반비례한다. 이 뉴런이 없으면 마우스는 단식에 **각성·탐색 운동 증가로 반응하지 못한다**. 즉 orexin 뉴런은 에너지 균형과 각성을 잇는 결정적 고리다.

## 핵심 내용

### 배경 — 왜 orexin인가
- 포유류는 먹이가 줄면 더 깨어 있고 더 움직인다(Borbely 1977; Danguir & Nicolaidis 1979; Dewasmes 1989; Itoh 1990; Challet 1997). 이 적응을 조정하는 중추 경로는 미지였다.
- orexin을 중추에 투여하면 교감 긴장·corticosterone·대사율·섭식·운동·각성이 오른다. 이는 **단식 동물의 표현형과 닮았다**. dopamine 길항제는 단식 유발 운동과 orexin 유발 운동을 **둘 다** 줄인다(Nakamura 2000; Itoh 1990). OX1R 길항은 섭식과 체중을 줄인다(Smart 2002).
- orexin 결손(*prepro-orexin* KO, orexin/ataxin-3, OX2R 변이 개·마우스)은 기면증을 일으킨다. 인간 기면증에서는 orexin 뉴런이 소실되고, NIDDM과 BMI가 높은 대사 이상이 동반된다. 단식하면 *prepro-orexin* mRNA가 오르고(Sakurai 1998), insulin 유발 저혈당은 orexin mRNA와 orexin 뉴런 c-Fos를 올린다(Griffond 1999; Moriguchi 1999).
- 질문: orexin 뉴런은 **에너지 상태 지표를 직접 감지**하는가? 그리고 단식 유발 각성에 **필요**한가?

### Figure 1 — orexin/EGFP 형질전환 마우스
- 인간 *prepro-orexin* promoter(orexin/nlacZ 구조체의 nLacZ를 EGFP로 치환)로 EGFP를 발현시켰다. 모든 계통에서 LHA에만 형광 뉴런이 보였고, **이소성 발현은 없었다**. 항 orexin 면역염색으로 형광 = orexin 뉴런임을 확인했다.
- 무작위 EGFP⁺ 세포 8개의 단일세포 RT-PCR에서 모두 *prepro-orexin* mRNA를 검출했다. EGFP⁻ 세포에서는 검출되지 않았다.
- **두 계통에서 orexin 뉴런의 최대 80%가 육안 형광**을 보였고, 항 EGFP 염색으로는 **95%**가 양성이었다(나머지는 검출 한계 이하로 추정).

### 기초 전기생리 — 해리 vs 절편
- **해리 orexin 뉴런**(3–4주령): 안정막전위 **−47.4 ± 0.8 mV**, 자발 발화 **15.0 ± 2.6 Hz**, 막전기용량 6.3 ± 0.5 pF (n=20).
- **절편**: **−61.4 ± 4.9 mV, 5.5 ± 3.9 Hz** (n=24). 해리 세포가 더 탈분극되어 있고 더 많이 발화한다. 저자들은 절편 안에 **강한 억제성 입력이 보존**되어 있음을 시사한다고 본다. 분석에는 안정막전위가 −45 mV보다 낮은 해리 세포만 썼다.
- 활동전위 뒤에 좁은 shoulder와 깊고 짧은 AHP가 나타났다. 연령·성별·계통과 무관했다.

### Figure 2 · Table 1 — 시냅스와 분리된 orexin 뉴런이 대사 신호에 직접 반응
| 인자 | 농도 | 반응 세포 | 효과 |
|---|---|---|---|
| Glutamate | 10 µM | 10/10 | 탈분극, 발화↑ |
| GABA | 10 µM | 10/10 | 과분극, 발화↓ |
| **Ghrelin** | 10 nM | **6/9** | 탈분극, 발화↑ (**184.4 ± 15.5%**, n=5, p<0.02) |
| **Leptin** | 10 nM | **7/9** | 과분극, 발화↓ (−47.6 ± 2.7 → **−62.1 ± 1.4 mV**, 5분 후, p<0.0001); 3·30 nM도 용량 의존 억제 |
| Glucose 10→5 mM | — | 4/4 | 탈분극(−41.4 ± 2.9 mV, p<0.01) |
| Glucose 10→0 mM | — | 8/10 | 탈분극, 발화 **174.4 ± 15.8%** (p<0.02) |
| Glucose 10→15 mM | — | 4/4 | 과분극(−61.2 ± 3.9 mV, p<0.0001) |
| Glucose 10→30 mM | — | 8/10 | 과분극(−45.4 ± 1.8 → **−62.1 ± 1.1 mV**, n=10, p<0.0001), **발화 정지** |
| Insulin | — | n=5 (본문 서술; Table 1에는 없음) | **직접 효과 없음** |
- 포도당 변화에는 전체 14개 중 **12개**가 반응했다. 포도당 농도를 바꿀 때는 mannitol로 삼투압을 맞췄다. 기저 세포외액 포도당은 10 mM이다.
- glutamate·GABA 반응은 orexin 뉴런이 LHA 안팎의 흥분·억제 시냅스로 **간접 조절**될 수 있음을 시사한다.

### Figure 3 — 절편 + TTX에서도 용량 의존 반응
- 시냅스 활동을 tetrodotoxin으로 막은 절편에서 **ghrelin은 용량 의존 탈분극**, **leptin은 용량 의존 과분극**을 일으켰다(vehicle 대비 p<0.05, 용량 간 p<0.05).
- 저자들의 한정: TTX로도 GABA·glutamate의 **시냅스전 효과를 완전히 배제하지는 못한다**. 다만 해리 세포 결과와 일치하고 용량 의존적이므로 **직접 작용**이라고 결론짓는다.

### Figure 4 — 혈당·leptin·섭식량이 orexin 발현을 반대로 움직인다
- 설계: WT와 *ob/ob*(C57BL/6J 배경)에 **3뇌실 i.c.v. leptin 100 ng/h × 2주**(ALZET 1002) 또는 vehicle을 주었다. 별도로 *ob/ob*를 **pair-feeding**(3.5 → 3.0 g/day, WT 섭식량에 맞춤)했다. 시상하부 *prepro-orexin* mRNA는 Northern blot으로 정량했다(two-way ANOVA).
- **WT 자유급식 + leptin**: 혈당은 정상 그대로인데 orexin mRNA가 vehicle보다 **유의하게 감소**했다.
- ***ob/ob* + leptin**: 고혈당이 **정상화**되고 orexin mRNA가 **유의하게 증가**해 leptin 처치 WT 수준에 도달했다(p<0.01).
- ***ob/ob* pair-feeding**: 혈당이 정상화되고 orexin mRNA가 **WT보다도 높게** 올랐다(p<0.01).
- 해석: *ob/ob*·*db/db*의 orexin 발현 저하(Yamamoto 1999)는 leptin 결핍 자체보다 **고혈당이 orexin을 누른 결과**일 수 있다. orexin 뉴런은 **서로 모순되는 대사 신호**(고혈당 + 저leptin)를 통합한다. 비만 동물이라도 먹이가 제한되면 orexin계는 음의 에너지 균형에 반응한다.

### Figure 5 — orexin 뉴런 소실 마우스는 단식에도 각성이 늘지 않는다 (EEG/EMG)
- 대상: **orexin/ataxin-3 반접합 수컷 n=6** vs 체중을 맞춘 WT 형제 n=6(N4–N5 backcross to C57BL/6J). 13주령에 전극을 삽입하고 2주 회복시켰다. **78 h 연속 기록** = 자유급식 48 h + **암기 시작부터 30 h 단식**. 20 s epoch를 눈가림한 2인이 채점했다. two-way ANOVA(genotype × feeding).
- **각성**: 단식 WT만 다른 세 군(급식 WT·급식 Tg·단식 Tg)보다 각성이 유의하게 많았다. 단식 직후 암기에는 간헐적이고 약한 증가였고, **다음 명기에 강한 증가**가 나타났다. 단식 Tg는 **눈에 띄는 증가가 없었다**.
- **NREM**: WT만 단식 시 유의하게 감소했다(6 h bin, p<0.01).
- **REM**: 단식은 **두 유전형 모두에서** REM을 억제했다. Tg는 기저 암기 REM이 높지만(기면증 표현형), 단식 후에는 두 군 모두 낮아졌다. → REM 총량 억제는 orexin 비의존으로 보인다(위키 해석; 원문은 두 유전형 모두 억제됐다고만 서술).
- **REM 잠복기**(수면 개시 후 첫 REM까지): 각성·수면량 변화보다 **먼저** 나타났다.
  - 단식 0–12 h(암기): WT **7.9 ± 0.5 → 12.2 ± 1.8 min (p=0.006)**, Tg 2.5 ± 0.3 → 4.5 ± 0.7 min(유의하지 않음).
  - 단식 12–24 h(명기): WT **9.2 ± 0.5 → 13.7 ± 0.7 min (p<0.0001)**, Tg 4.7 ± 0.3 → 5.9 ± 0.7 min(유의하지 않음).
  - → **단식 시 REM 개시를 억제하는 데도 orexin 뉴런이 필요**하다.

### Figure 6 — orexin 뉴런 소실 마우스는 단식 시 탐색 운동을 유지하지 못한다 (open field)
- 대상: Tg 수컷 **n=5** vs WT **n=6**, 10주령, 12:12 명암. Opto-Varimex 적외선 빔으로 측정했다. **암기 3 h 전에 먹이 없는 open field에 넣고 7 h 기록**한 뒤 홈케이지로 돌려 단식을 이어 갔다. 다음 날 같은 절차를 반복했다(**총 31 h 단식**). 기저 = 첫 7 h(급식), 단식 = 31 h 단식의 마지막 7 h.
- **급식 기저**: 두 유전형 모두 novelty 탐색 뒤 **3시간째까지 완전 습관화**(5분 bin 간 ANOVA로 변화 없음)했다. 급식 Tg의 암기 운동량은 WT보다 약간 낮았다(Hara 2001과 일치).
- **단식**: WT는 탐색 단계가 **더 길게 연장**됐다. 습관화 이후 구간(명기 마지막 1 h + 암기 첫 1 h, 1 h bin) 중 **명기 bin에서 총 활동(수평 + 수직 빔)이 WT만 유의하게 증가**했다(p<0.001; two-way ANOVA로 군별 기저 차이를 보정). 같은 명기 구간에서 WT는 그 밖에도 **수직 활동(rearing·jumping)·보행 시간·상동행동 시간·수평 이동거리↑, 휴식 시간↓**를 보였다. Tg는 어느 지표도 바뀌지 않았다.
- 이어지는 암기 bin에서는 어느 유전형에서도 유의한 변화가 없었다. 저자들은 그 이유로 높은 기저 활동을 가능성으로 든다. 마우스는 유전형·급식 상태와 무관하게 암기 첫 시간의 95–100%를 각성 상태로 보내므로 **천장 효과**일 수 있다.
- **대안 설명 배제**:
  - 운동 장애가 아니다. **보행 속도**(거리/보행시간)가 급식·단식 모두에서 WT와 같았다.
  - cataplexy 유사 정지가 아니다. 녹화로 잰 정지 시간이 급식 **239.0 ± 112.2 s/4 h**, 단식 **185.0 ± 45.0 s/4 h**로 단식에 따라 변하지 않았다(전체 시간의 극소수).
- **체중**: Tg 25.4 ± 0.5 → 20.1 ± 0.4 g, WT 24.5 ± 0.2 → 18.8 ± 0.2 g. 감량 폭이 유전형 간에 **약하지만 유의하게** 달랐다(p<0.05). Tg의 감량이 약간 작다(계산하면 Tg ~5.3 g ≈ 21%, WT ~5.7 g ≈ 23%). 저자들은 이것을 단식 대사율 차이와 연결하되, 기저대사 차이인지 각성·운동에 따른 소비 차이인지는 간접열량측정이 필요한 미해결 문제로 남긴다.

### Discussion 요점
- **포도당 감지**: 시상하부에는 두 부류가 있다. 고포도당에 흥분하는 내측 "glucose-responsive" 뉴런(섭식 억제)과, 고포도당에 억제되는 LHA "glucose-sensitive" 뉴런(섭식 촉진; Oomura & Yoshimatsu 1984)이다. 저자들은 orexin 뉴런이 고포도당에 과분극·발화 정지한다는 결과를 이 **후자의 성질과 나란히 제시**한다("분자 정체"라는 명시적 표현은 원문에 없음 — 위키 해석).
- **저혈당 인지(hypoglycemic awareness)**: orexin의 자율신경 투사와 교감 효과를 근거로 저자들은 다음을 제안한다. 저혈당 → 자율 반응·epinephrine·**수면 중 각성**이라는 방어를 orexin이 매개할 수 있다. 정상인은 수면 중(orexin 활성이 낮을 때) 저혈당 자율 반응이 둔하고, 1형 당뇨에서는 수면 관련 저혈당 자율신경 부전이 흔하다(Banarer & Cryer 2003).
- **leptin·ghrelin**: ARC POMC/NPY가 orexin 뉴런을 조밀하게 innervate하므로(Elias 1998) **간접 조절**도 있다. 저자들은 여기에 **직접 조절**을 더했다고 주장한다. 근거로 LHA의 leptin 수용체 mRNA(Elmquist 1998), **orexin 뉴런 안의 leptin 수용체·STAT3 면역반응**(Håkansson 1999), leptin이 단식성 orexin mRNA 상승을 억제한다는 보고(López 2000)를 든다. ghrelin 수용체(GHSR)는 당시 LHA에서 기술되지 않았다(TMN·뇌간 각성핵에는 있음). 시상하부 ghrelin 뉴런이 orexin 뉴런으로 투사한다는 보고(Cowley 2003; Toshinai 2003)는 있다.
- **단식 각성의 시간 의존성**: 차이가 **늦은 명기**에 가장 컸다. 정상적으로는 이 시기에 orexin 방출이 최저다. rat CSF orexin은 암기에 정점, 명기 말에 최저이고, **72 h 단식 후 늦은 명기에만 상승**한다(Fujiki 2001; Yoshida 2001). → 단식 효과는 **평소 orexin 방출이 낮은 시기에 가장 강하다**.
- **공발현 인자 주의**: orexin 뉴런은 glutamate도 내고(Abrahamson 2001), 일부는 galanin·angiotensin II나 미지 인자를 함유할 수 있다(본문 해당 문장에 dynorphin은 없음; 참고문헌에 Chou 2001 dynorphin 공발현 논문만 실림). ataxin 모델은 이것들을 모두 없앤다. 다만 이 인자들은 orexin 뉴런에만 있는 것이 아니고, *prepro-orexin* KO와 ataxin-3 마우스의 기저 표현형은 배경을 맞추면 비슷하다(미발표).
- **모델(Discussion 마지막)**: 먹이 결핍 → 혈중 포도당·leptin↓ + ghrelin 신호↑ → **orexin 뉴런 발화↑** → 각성·운동↑ → 먹이 탐색에 필요한 고각성 상태를 안정화한다. 동시에 NPY 등 다른 orexigenic 기제를 활성화할 수 있다(Yamanaka 2000).
- **열린 질문**: 식후 졸림(postprandial somnolence)이 orexin 억제 때문인가? orexin 작용제·길항제가 비만·섭식장애·자율/대사 질환 치료제가 될 수 있는가? 경구 OX 길항제의 항비만·항당뇨 효과(Smart 2002)가 근거다.
- 경쟁 연구: 같은 형질전환 마우스를 받아 쓴 Li 2002(van den Pol lab)는 절편만 썼고 포도당·leptin·ghrelin은 보지 않았다. 대신 glutamate·GABA 반응과, orexin 방출이 국소 glutamate 사이뉴런을 통해 주변 orexin 뉴런을 동원하는 기전, NA·5-HT 억제를 보고했다. Eggermann 2003은 사후 동정 기록을 썼다.

### 방법 메모(재현용 수치)
- 해리: 1 mm 관상 절편에서 LHA를 미세절제하고 proteinase K 1 mg/ml 5분 → trypsin 1 mg/ml 25분(30 °C) 처리 후 trituration했다. 기록은 33–34 °C에서 했다. 피펫 내액은 K-gluconate 기반이다. 기록 후 세포질을 흡입해 RT-PCR로 *prepro-orexin*을 확인했다.
- 절편: 3–6주령, 250 µm, 34 °C, 3 ml/min 관류.
- **해리 세포는 3–4주령(청소년) 마우스에서 얻었다**. 성체 생리로 일반화할 때 주의가 필요하다.

## 사용자 연구 관점의 함의 (연결 가설 — 원문 주장 아님)
- **NMPU에서 orexin의 자리: Deficit 감지 + 행동 문턱(K) 조절자**. [[kim-2024-normative-framework-dissociates-need|Kim 2024]]는 Need = Deficit(D) + Predicted change(PC), Motivation M = ∫(a·N − Leak)dt, 행동 B = M − K로 정식화한다. 이 논문의 orexin 뉴런은 **현재 혈중 지표(포도당·leptin·ghrelin)** 에 반응하는 **D형 센서**다. 또 그 출력은 섭식 자체가 아니라 **각성·일반 운동·탐색(foraging 준비 상태)** 이다. 따라서 orexin은 Need(AgRP의 예측 신호)나 M(LH^LepR의 적분)과 별개로, **행동 개시 문턱 K를 낮추는 state gate**로 모델에 들어갈 수 있다. 검증 설계: 사용자 lab의 LH^LepR 광계측 패러다임에서 DORA(또는 SB-334867)를 주면 **LH^LepR 적분 기울기(a)가 바뀌는지**(Motivation 축), 아니면 **행동 개시 지연만 바뀌는지**(문턱 축)를 본다.
- **LH^LepR → orexin 국소 회로의 부호를 사용자 lab이 결정할 수 있다**. 이 논문은 leptin의 orexin 억제를 직접 작용으로 보고, [[leinninger-2011-leptin-action-via-neurotensin|Leinninger 2011]]은 LepRb^Nts GABA 탈억제로 본다. [[lee-2023-lateral-hypothalamic-leptin-receptor|Lee 2023]]의 seeking LH^LepR 아집단이 단식 중 활발하다면, Leinninger 모델대로라면 **OX는 억제되어야** 하고 이 논문의 그림대로라면 **OX는 동반 상승**해야 한다. LH^LepR·OX 이중 색 photometry 한 번으로 둘이 갈린다.
- **고혈당 → orexin 억제 → 활동 저하는 T2D 동기 표현형의 회로 후보다**. [[mehrhof-2026-computational-phenotyping-of-effort|Mehrhof 2026]]의 T2D effort 수용 편향↓, 비만·T2D의 피로·좌식 경향을 "고혈당이 orexin을 누른다"(Fig 2·4)로 일부 설명할 수 있는지 검증할 수 있다. 예측: 혈당을 정상화하는 처치가 effort 수용과 자발 활동을 함께 올린다.
- **감량 후 재증가 압력의 각성·탐색 성분**: pair-fed *ob/ob*에서 orexin mRNA가 WT보다 **높아진** 결과(Fig 4)는, 비만 개체가 식이 제한을 받으면 orexin계가 **과보상**할 수 있음을 시사한다. 이는 [[concept-weight-regain-defended-adiposity]]의 "방어된 지방량" 신호가 섭식 욕구뿐 아니라 **수면 감소·각성·먹이 탐색 행동**으로도 표현될 수 있다는 가설이다.
- **"각성 = Motivation의 activational 성분"이라는 해석 틀**: orexin 소실 마우스는 보행 속도는 정상이지만 단식 시 탐색 지속·rearing이 늘지 않는다. 이는 [[salamone-2012-mysterious-motivational-functions-mesolimbic|Salamone 2012]]의 activational/directional 구분에서 **activational 쪽 결손**에 해당한다. 원문도 dopamine 길항제가 단식 유발 운동과 orexin 유발 운동을 함께 줄인다는 선행을 인용한다(Nakamura 2000; Itoh 1990). 따라서 orexin→VTA 축이 Need 상태를 활성화 성분으로 번역하는 경로라는 가설을 세울 수 있다([[dong-2026-reward-prediction-is-encoded-by|Dong 2026]]의 effort 의존 orexin 신호와 연결).

## ⚠️ 위키 내 충돌·긴장 (병기 — 덮어쓰지 않음)
- **leptin은 orexin 뉴런에 직접 작용하는가 — [[leinninger-2009-leptin-acts-via-leptin]] · [[leinninger-2011-leptin-action-via-neurotensin]] · [[concept-orexin-neurons]]**: 이 논문은 해리 orexin 뉴런 **7/9가 10 nM leptin에 과분극**하고, TTX 절편에서도 용량 의존 과분극을 보인다고 하여 **직접 작용**을 주장한다(근거로 Håkansson 1999의 orexin 뉴런 내 leptin 수용체·STAT3 면역반응 인용). 반면 Leinninger 2009는 LepRb^EGFP와 OX의 공존이 없고 고용량 i.c.v. leptin에도 OX에 pSTAT3가 없다고 보고했다. Leinninger 2011은 단식성 OX 활성화를 **LepRb^Nts GABA 탈억제**로 설명한다(Nts-LepRbKO에서 단식 c-Fos 상승 소실). ⚠️ 층위 차이로 병기한다: 이 논문은 **청소년(3–4주령) 해리 세포의 급성 막전위**, Leinninger는 **성체의 LepRb 리포터·pSTAT3(STAT3 경로)·회로 결손**이다. pSTAT3 음성이 STAT3 비의존 신호나 짧은 수용체 아형의 가능성을 배제하지는 않는다(위키 주석, 원문 주장 아님). 해리 표본의 비뉴런·잔여 시냅스 기여도 완전히 배제되지 않는다.
- **leptin이 *Ox* mRNA를 올리는가 내리는가 — [[leinninger-2011-leptin-action-via-neurotensin]]**: 이 논문에서는 **WT 자유급식 + i.c.v. leptin 100 ng/h × 2주**가 orexin mRNA를 **낮췄다**. *ob/ob*에서는 혈당 정상화와 함께 **올렸다**. Leinninger 2011은 대조 마우스에 **i.p. leptin 5 mg/kg(12 h 간격, 총 26 h)** 을 주면 LHA *Ox* mRNA가 **증가**한다고 보고한다. 경로(i.c.v. vs i.p.)·기간(2주 vs 26 h)·대사 상태(혈당 변화 여부)가 모두 달라 직접 비교할 수 없다. 단일 부호 서술을 피하고 조건을 함께 적어야 한다.
- **leptin의 부호가 투사별로 반대일 수 있다 — [[rossi-2021-transcriptional-and-functional-divergence]]**: Rossi 2021에서 leptin은 **Pdyn⁺/Hcrt⁺가 농축된 LHA^Vglut2→VTA 집단의 sucrose 반응을 키웠다**(Interaction F(1,370)=63.99). 이 논문의 "leptin → orexin 과분극"과 방향이 반대다. 측정 대상이 **자극 유발 Ca²⁺ 반응 vs 안정막전위**이고, 그 집단이 orexin 뉴런과 동일한지는 Rossi도 미검증으로 남겼다. 또 Rossi에서 i.p. ghrelin은 **VTA 투사 반응을 거의 바꾸지 않았다**. 이 논문의 "ghrelin이 orexin 뉴런 6/9을 흥분시킨다"와도 층위가 다르다(병기).
- **"식이예측 각성(food-anticipatory arousal)" 표현 — [[bonnavion-2016-hubs-and-spokes-of]]**: Bonnavion 2016(원문)은 이 논문을 "Hcrt 소실 마우스에서 food restriction으로 생기는 **food-anticipatory arousal**이 없다"로 인용하고, 위키 페이지도 "식이예측 각성 소실(Yamanaka 2003)"로 옮겼다. 그러나 이 논문의 실제 설계는 **30–31 h 총 단식**에 따른 각성·탐색 증가이며, **제한 급식 스케줄의 예측 활동(FAA)은 측정하지 않았다**. 인용 시 "단식 유발 각성 소실"로 정밀화해 병기하는 것이 안전하다.
- **orexin의 "섭식" 역할 — [[chen-2025-the-integrated-function-of-the]] · [[stuber-2016-lateral-hypothalamic-circuits-for]]**: Chen 2025는 orexin을 단식·저혈당·ghrelin이 활성화하는 food-seeking 세포로 정리한다(이 논문이 그 활성화 근거의 1차 출처 중 하나다). 다만 이 논문은 **orexin 뉴런 소실이 섭식량에 미치는 효과를 측정하지 않았고**(섭식량은 *ob/ob* pair-feeding 조작 변수로만 등장), 결손 표현형은 각성·탐색 운동이다. 이는 Stuber 2016의 가설(Orx의 섭식 표현형은 특정 각성 상태의 행동 패턴일 수 있다)과 **정합**한다. "orexin = 섭식 구동"보다 "orexin = 단식 시 각성·탐색 상태 유지"로 적는 것이 이 논문 근거에 더 가깝다.
- **[[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]](사용자 lab)의 "LH Lepr·Orx가 leptin·ghrelin 매개"**: Orx 쪽 서술의 1차 근거가 이 논문이다. 위 Leinninger 긴장을 함께 적어 "직접/간접"을 열린 문제로 두는 것이 좋다.

## 관련 페이지
- [[concept-orexin-neurons]] — orexin 뉴런 hub. "공복이 orexin을 활성"의 1차 근거(포도당·leptin 억제, ghrelin 흥분, 단식 각성 필요성).
- [[concept-lateral-hypothalamus]] — orexin 뉴런의 소재 영역.
- [[leinninger-2009-leptin-acts-via-leptin]] — ⚠️ OX에 LepRb·pSTAT3 없음 → leptin 직접 작용 주장과 긴장.
- [[leinninger-2011-leptin-action-via-neurotensin]] — ⚠️ 단식성 OX 활성화 = LepRb^Nts GABA 탈억제 모델; leptin→*Ox* mRNA 부호 긴장.
- [[rossi-2021-transcriptional-and-functional-divergence]] — ⚠️ Pdyn/Hcrt 농축 VTA 투사 집단에서 leptin이 반응을 키움(반대 부호).
- [[bonnavion-2016-hubs-and-spokes-of]] — 이 논문을 인용한 Hcrt 리뷰(인용 표현 정밀화 필요).
- [[concept-ghrelin]] — ghrelin의 orexin 뉴런 직접 흥분(6/9, 184%).
- [[concept-leptin]] — leptin의 orexin 억제(직접/간접 논쟁)와 *ob/ob* 고혈당 효과.
- [[chen-2025-the-integrated-function-of-the]] · [[rossi-2023-control-of-energy-homeostasis]] — LHA 세포타입 리뷰의 orexin 항목(단식·저혈당·ghrelin 활성, 각성·에너지 소비).
- [[stuber-2016-lateral-hypothalamic-circuits-for]] — Orx 섭식 표현형 = 각성 상태 행동이라는 가설과 정합.
- [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — 사용자 lab LH 리뷰; homeostatic eating에서 Orx의 leptin·ghrelin 매개 서술의 1차 근거.
- [[kim-2024-normative-framework-dissociates-need]] · [[kim-2024-unified-theoretical-framework-underlying-regulation]] · [[concept-need-motivation-pleasure-utility]] — orexin = Deficit 감지·행동 문턱 조절자라는 연결 가설.
- [[lee-2023-lateral-hypothalamic-leptin-receptor]] — LH^LepR seeking 아집단과 OX 국소 회로의 부호 검증 질문.
- [[dong-2026-reward-prediction-is-encoded-by]] — orexin의 reward prediction·effort 부호화(rat); 단식 각성과 동기 활성화의 연결.
- [[salamone-2012-mysterious-motivational-functions-mesolimbic]] — activational 동기 성분 틀.
- [[mehrhof-2026-computational-phenotyping-of-effort]] — T2D effort 편향과 고혈당-orexin 억제 가설.
- [[concept-weight-regain-defended-adiposity]] — 식이 제한 시 orexin 과보상 가설.
- [[figge-schlensok-2025-a-lateral-hypothalamic-neuronal]] — ABA(활동 기반 식욕부진) 모델의 단식 유발 과활동; orexin 의존성은 미검증(연결 가설).
- [[heiss-2024-distinct-lateral-hypothalamic-camkiia]] — ⚠️ **"LH 각성의 주역이 orexin인가"의 반대 축**(PNAS 2024, Kilduff lab). LH^CaMKIIα chemogenetic 활성은 **almorexant 200 mg/kg로 OXR을 막아도 7시간 각성**을 만들고(F(24,72)=17.53), 저자들은 서두에서 "Hcrt 뉴런은 24시간 총 수면·각성 시간에 거의 영향이 없다"고 적는다. ⚠️ 층위 차이로 병기 — 이 논문은 **단식 등 대사 상태에 따른 생리적 각성 조절**을, Heiss 2024는 **최대 자극 하 각성 총량**을 측정했다. 반대로 Heiss 2024는 LH^CaMKIIα 활동이 배고픔·혈당에 따라 변하는지 **측정하지 않았다**(이 논문이 orexin에 대해 한 작업의 공백).
