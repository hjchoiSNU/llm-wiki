---
title: Dopamine reward system (VTA·NAc·RPE)
type: concept
created: 2026-04-30
updated: 2026-05-31
aliases: [VTA, NAc, nucleus accumbens, ventral tegmental area, mesolimbic dopamine, RPE, reward prediction error]
---

> [!takeaway] 연구 방향 관점의 핵심
> 도파민 회로 (VTA → NAc 등)는 [[kim-2024-unified-theoretical-framework-underlying-regulation|Need-Motivation-Pleasure-Utility framework]]에서 **Motivation과 Pleasure 둘 다** 매개 (혹은 그 이상). 30년 지배적이었던 **Reward Prediction Error (RPE) 가설**이 [[adam-2026-dopamine-takes-hit-how-neuroscience|2026년 현재 도전 중]] — 도파민이 reward 외 movement·threat·novelty·action prediction까지 인코딩한다는 새 데이터. 비만의 5 maladaptive types (특히 cue·addiction·habit) 회로의 핵심.

# Dopamine reward system

## 핵심 회로

### Mesolimbic pathway
- **VTA** (ventral tegmental area, midbrain) → **NAc** (nucleus accumbens, ventral striatum)
- 보상 가치·동기 인코딩, 약물 중독 회로의 핵심.

### Nigrostriatal pathway
- Substantia nigra pars compacta (SNc) → dorsal striatum
- Motivated intake에 필수 — DA-deficient mouse는 aphagia (Zhou & Palmiter 1995; Palmiter 2008).
- Dorsolateral striatum이 habit 학습 (Yin & Knowlton 2006).

### 추가 표적
- VTA → mPFC, amygdala, hippocampus
- 보상 회로 + 인지·감정·기억 통합

## RPE 가설 (classic, 1997-)

**Schultz, Dayan, Montague 1997 Science**:
- Unexpected reward → DA spike
- Cue → reward 학습 후 → DA spike가 cue로 transfer
- Expected reward → no signal
- Missing reward → downward dip

이후 **TDRL** (Temporal Difference RL)로 확장 — 시간 격차 학습.

## 도전 ([[adam-2026-dopamine-takes-hit-how-neuroscience|Adam 2026 Nature Feature]])

### 비-보상 변수 인코딩
- **Engelhard 2019 Nature**: maze position·speed.
- **Brown 2026 Nature**: goal proximity (movement).
- **Roeser 2023 Nature**: 다중 reward 우선순위 (state-dependent retuning).

### 비-보상 자극
- Foot shock에 DA 분비 (**Kutlu 2021**, Calipari).
- Threat, novelty, aversion 인코딩 (Menegas 2018, Kutlu 2022).
- **Greenstreet 2025 Nature**: action prediction → 반복 행동·중독 설명 가능.

### ANCCR 모델 (**Namboodiri**, UCSF)
- **Jeong 2022 Science**: RPE 역방향 — 보상이 도파민 burst 일으켜 거꾸로 cue 검색.
- 흡연 cue로 인한 relapse를 RPE보다 잘 설명.
- 논쟁 진행 중 (Seville Dopamine Society Session 31, 2026 May).

### Calipari의 입장
- 도파민은 단일 기능 아님 — 신경계 학습 효율 modulator.
- "I think it plays a role in whatever you're studying."

### 진화적 보존 — Drosophila evidence
- **[[huang-2024-dopamine-mediated-interactions-between-short|Huang 2024 Nature]]**: 무척추 voltage-imaging으로 PPL1-DAN의 **bi-directional**·heterogeneous valence coding 입증. Anti-Hebbian plasticity, STM↔LTM gating, paradoxical extinction enhancement (10분 후 extinction이 LTM 강화 → habit 끊기 어려움의 회로 단서). 포유류 basal ganglia로의 일반화 시사.

## 음식·비만 맥락

### Reinforcement learning
- Post-ingestive nutrient → VTA DA → NAc → cue-nutrient 학습 (McDougle 2024 Cell Metab).
- Fat·sugar 별도 vagal 경로 → DA → reinforcement (Han 2018 Cell, Tan 2020 Nature).
- Fat-sugar 조합은 supra-additive (DiFeliceantonio 2018) — UPF의 위험성.

### 비만에서의 변화
- D2R 발현 ↓ (Johnson & Kenny 2010 Nat Neurosci) — anhedonia·강박 식이.
- 인간 fMRI: 비만에서 striatum 식 cue 반응 ↓ (paradoxical).
- **Tellez 2013 Science**: 고지방 식이 → 장 lipid messenger → 도파민 결핍.

### 5 maladaptive eating types
- **Cue-evoked**: cue → DA ↑, OFC·ventral striatum hyperactive.
- **Habit-context**: dorsolateral striatum 우세 (goal → habit 전이).
- **Food addiction**: VTA → NAc DA, OFC, amygdala. D2R ↓, opioid 변화.
- **Emotional eating**: 감정 cue → DA·amygdala·insula.
- **Restrained eating**: NAc·OFC reward 민감 ↑, 동시에 dlPFC 제어 ↑.

## DA 자원별 sub-system (Knight 랩, 2022–2025) ★

[[grove-2022-dopamine-subsystems-track-internal|Grove 2022 Nature]]가 단일 RPE 가설에 결정적 도전. DA가 자원·표적·timescale별 분리된 sub-system:

| Sub-system | 자원 | Source | DA target | 신호 timescale |
|---|---|---|---|---|
| Water | Osmolarity | LH GABAergic → VTA | DS | Slow ramp post-absorptive |
| Sugar/fat | Caloric | Vagal → nodose → hindbrain → VTA-DA-CCK | DS, **left aBLA** | Slow ramp post-oral |
| Cue/effort | Predictive | Cortical → VTA-DA classical | NAc | Phasic |

[[grove-2025-lateralized-pathway-associating-nutrients|Grove 2025 bioRxiv]] ★ — flavor-nutrient learning은 NAc DA가 아닌 **left anterior basolateral amygdala** ([[concept-basolateral-amygdala]]) DA 매개. **Left lateralized in mouse + human PET/fMRI**. VTA-DA-**CCK+** subset이 source.

[[weber-2025-interoceptive-origin-reinforcement-learning|Weber 2025 Trends Cogn Sci]] — RL framework에 통합:
- **Primary reward** ([[concept-primary-reward-signals]]) = post-oral interoceptive (DS).
- **Proxy reward** = oral taste/flavor (VS).
- **Secondary reward** = cue (VS phasic shift).
- State-driven (water) vs Event-driven (sugar/fat) 구분.
- VS = hedonic/anticipation, **DS = action/primary reinforcement**.

→ "RPE의 어떤 측면을 도파민이 인코딩하는가" 논쟁이 **"어떤 도파민 채널을 보고 있느냐"** 의 문제로 재편.

## LH–VTA–NAc 회로

[[concept-lateral-hypothalamus|LH]] GABAergic → VTA GABAergic 억제 → DA disinhibition → NAc DA ↑ → palatable food 섭취 (Nieh 2015·2016).

[[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025]]에서 핵심 호메오·헤도닉 통합 회로로 정리.

★ **역방향 VTADA → LH** ([[hoang-2026-methamphetamine-potentiates-the-use-of|Hoang 2026 Neuron]]): LH-투사 VTA 뉴런 ~64% 도파민성, D1/D2로 LH 국소 시냅스 조절. 이 입력이 cue–**특정 결과** 학습·의사결정(PIT)에 필요·충분. LH 도파민은 cue-onset RPE가 아니라 **보상 근접 ramp**(보상 근접 cue 편향) — NAcC의 "일반 흥분 성분"(Taira 2024) 신호와 질적으로 다른 채널. 메스암페타민이 LH-VTA를 **양방향 강화**(LH→VTA ICSS↑ + VTA→LH↑)해 cue의 결과-특이적 통제력↑.

## 임상

- **Bupropion-naltrexone**: NAc opioid 표적, 일부 emotional·addiction eating에 효과.
- **GLP-1RA**: hedonic eating 억제 (Zhu 2025 Science) — DA 회로 저하 매개.
- **Setmelanotide** (MC4R agonist): downstream pathway 자극.
- **Electroceuticals** (tDCS·rTMS·TIS): dlPFC top-down 제어 강화 ([[lee-2025-hijacked-brain-modern-obesity-cue]]).

## 관련 페이지
- [[concept-liking-wanting]] — 도파민은 ‘갈망(wanting)’을 매개하되 ‘좋아함(liking)’에는 불필요; 보상 이중 해리 hub(식락학 Ch 20).
- [[concept-incentive-sensitization]] — 중변연계 도파민 감작이 ‘갈망’을 ‘좋아함’과 무관하게 폭주시키는 중독·과식 기전.
- [[concept-hedonic-hotspot]] — 도파민 ‘갈망’ 회로와 대조되는 오피오이드 ‘좋아함’ 증폭 부위.
- [[overview-sikrakhak-ch20-opioid-dopamine-liking-wanting]] — 본 hub의 ‘갈망’ 축을 교재 narrative로 정리한 사용자 Ch 20.
- [[guillaumin-2023-disentangling-the-role-of-nac]] — NAc D1/D2 세포의 좋아함–갈망 분리(세포 수준).
- [[warlow-2021-incentive-motivation-wanting-roles]] — 중심 편도가 중변연계(VTA·NAc)를 동원해 ‘갈망’을 표적에 집중.
- [[onimus-2026-dopamine-ensembles-regulating-appetite]] — 이 hub를 'reward 너머 에너지항상성'으로 확장한 통합 리뷰(DA ensembles, TEM 2026).
- [[adam-2026-dopamine-takes-hit-how-neuroscience]] — RPE 도전 종합.
- [[kim-2024-unified-theoretical-framework-underlying-regulation]] — Motivation·Pleasure 분리.
- [[concept-need-motivation-pleasure-utility]] — DA의 multi-component 역할.
- [[concept-lateral-hypothalamus]] — LH→VTA 회로.
- [[concept-arcuate-nucleus]] — ARC AgRP가 NAc·VTA 영향.
- [[lee-2025-hijacked-brain-modern-obesity-cue]] — 5 maladaptive types.
- [[de-lartigue-2026-critical-role-gut-brain-signalling]] — gut-DA reinforcement.
- [[johansen-2025-brain-control-of-energy]] — 비만 striatal DA blunting·HFD NAc 가소성·gut→reward를 항비만 약물 맥락에서 (Cell 2025).
- [[stuber-2025-the-neurobiology-of-overeating]] — 약물중독 시냅스 가소성 모델을 과식에 매핑; NAc D2R↓·VTA glutamate potentiation (Neuron 2025).
- [[godschall-2026-a-brain-reward-circuit-inhibited]] — GLP1RA가 CeA^Glp1r→VTA 경유 NAc 도파민 방출을 억제 → hedonic feeding brake (Nature 2026).
- [[concept-central-amygdala-glp1r]] — VTA DA를 억제하는 GLP-1R GABAergic 상류 노드 개념 hub.
- [[huang-2024-dopamine-mediated-interactions-between-short]] — fly MB voltage-imaging, STM↔LTM gating, paradoxical extinction.
- [[grove-2022-dopamine-subsystems-track-internal]] — DA 자원별 sub-system (water).
- [[hoang-2026-methamphetamine-potentiates-the-use-of]] — VTADA→LH(역방향) outcome-specific 학습 신호(비-RPE ramp); 메스암페타민 LH-VTA 양방향 강화 (Neuron 2026).
- [[person-sharpe-melissa]] — 도파민=결과-특이적·model-based 학습 신호 진영의 인물 hub.
- [[grove-2025-lateralized-pathway-associating-nutrients]] — flavor-nutrient는 left aBLA DA 매개.
- [[weber-2025-interoceptive-origin-reinforcement-learning]] — primary/proxy/secondary RL framework.
- [[hjort-2026-prefrontal-to-ventral-tegmental-area]] — mPFC↔VTA DA가 contingency degradation을 meta-RPE(RPE의 rolling-gain)로 표상·구동 (Nature 2026).
- [[knight-liberles-2025-interoception]] — interoception × reward frontier.
- [[concept-interoception]] — primary reward의 토대 개념.
- [[concept-primary-reward-signals]] — post-oral interoceptive primary.
- [[concept-basolateral-amygdala]] — flavor-nutrient 학습 hub.
- [[concept-flavor-nutrient-conditioning]] — primary reward 행동 paradigm.
- [[jia-2026-novelty-exploration-activated-ensemble-in]] — LH novelty ensemble의 VTA 투사가 CPP/CPA(보상·혐오) 매개; LH^GABA→VTA는 혐오, LH^Glu→VTA는 진통 (Nat Commun 2026).
- [[liu-2026-granular-motivational-interaction-and]] — VTA^DA가 feeding initiation(approach)·hedonic maintenance phase 매개; LH^GABA→VTA 탈억제 (Neuron 2026).
- [[bae-2019-glucagon-like-peptide-1-receptor]] — 비만 T2DM의 OFC·reward 영역 food cue 과반응을 인체 fMRI로 확인 (DMJ 2019, 본 lab).
- [[lee-2017-glp-1-based-combination-therapy]] — GLP-1+naltrexone(opioid antagonist)이 reward계 작용으로 식이 시너지↓; 병용요법 editorial (JOMES 2017, 본 lab).
- [[kim-2025-mechanisms-of-glucagon-like-peptide]] — 뇌 GLP-1R brain-wide 리뷰; mesolimbic 보상계 GLP-1R 작용을 부위별로 정리 (APEM 2025, 본 lab).
- [[wilbrecht-2024-experimental-biology-can-inform]] — 발달기 식품 불안정이 VTA→NAc DA(AMPA:NMDA↓·선조체 DA 분비↓)를 장기 재프로그램 (J Exp Biol 2024).
- [[concept-food-insecurity]] — 환경적 먹이 불확실성이 reward 회로를 reshape하는 상류.
- [[concept-food-addiction]] — 초가공식품이 mesolimbic 보상을 약물 유사 활성한다는 가설.
- [[tomiyama-2019-stress-and-obesity]] — cortisol/CRF가 NAc/dorsal striatum를 민감화해 palatable food wanting↑.
- [[thanarajah-2019-food-intake-recruits-orosensory]] — 인체 PET; 식이 시 즉시 orosensory DA vs 지연 post-ingestive DA를 분리, wanting과의 상관 (Cell Metab 2019).
- [[onimus-2026-the-gut-brain-vagal-axis-governs]] — SDV(미주절단)이 mesolimbic VTA→NAc DA를 약화(DS는 보존); 미주 tone이 음식·약물 보상 DA를 gating (Sci Adv 2026).
- [[neuser-2020-vagus-nerve-stimulation-boosts]] — taVNS가 reward 추동(invigoration)↑(food 특이적); 미주→NTS→도파민 tone 가설(인간) (Nat Commun 2020).
- [[concept-nucleus-accumbens]] — mesolimbic DA의 핵심 표적 핵; 인간 침습 biomarker 발생지 개념 hub.
- [[person-halpern-casey]] — 인간 NAc/OFC reward 회로를 침습 전기생리로 직접 측정·자극.
- [[shivacharan-2022-pilot-study-of-responsive-nucleus]] — 인간 NAc 저주파 biomarker로 LOC eating closed-loop 차단 (Nat Med 2022).
- [[nho-2026-human-orbitofrontal-neural-activity-is]] — OFC–NAc reward 루프의 강박(OCD) biomarker (Cell 2026).
- [[berridge-2023-separating-desire-from-prediction-of]] — 도파민='원함'(incentive salience) 분자이며 예측·'좋아함'과 분리됨; TD/예측 RL 도파민론에 대한 반론 (TiCS 2023).
- [[overview-appetite-energy-homeostasis]] — 큰 그림.
