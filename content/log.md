# Wiki Log

작업 이력. **append-only, 시간 역순(최신이 위)**.

형식:
```
## YYYY-MM-DD HH:MM — {ingest|query|lint|init|other}
한 줄 요약. 변경된 페이지는 [[wikilink]]로.
```

## 2026-08-19 — other + ingest (wiki/ 오적재 PDF 정리 → 발견된 미정리 논문 1편)

**정리**: `wiki/` 폴더에 잘못 들어가 있던 PDF 4개(모두 6월 20일 동시 적재)를 사용자 승인 후 처리.
- 해시 동일 중복 2건 삭제 — Glycogen/POMC, Semaglutide/hindbrain (`raw/`에 동일 파일 존재).
- `2026 Nature. GLP-1R–GIPR–PPARαγδ quintuple agonism…` — `raw/` 판본과 파일크기가 달라 검증: **같은 DOI·27쪽·전 페이지 텍스트 동일**, 차이는 Springer 재다운로드 타임스탬프뿐(raw 2026-05-09 vs wiki 2026-06-17) → wiki 사본 삭제.
- `2026 Nature. Genetic predictors of GLP1 receptor agonist weight loss and side effects.pdf` — **`raw/`에 없는 유일본**이자 위키 페이지 부재 → `raw/`로 이동 후 ingest.
- 총 63.7 MB 회수. `wiki/` 내 PDF 0건. **`raw/` 파일은 일절 수정·삭제하지 않음**(추가만).

**새 페이지 2**
- [[su-2026-genetic-predictors-of-glp1-receptor]] — Nature 2026, 23andMe(n=27,885). `GLP1R` **rs10305420 (p.Pro7Leu)** 사본당 추가 −0.76 kg(P=2.9×10⁻¹⁰, All of Us 복제); `GLP1R` 좌위 오심·구토 신호가 **효능 신호와 co-localize**(H4 96.6%); `GIPR` **p.Glu354Gln**이 tirzepatide 한정 구토 OR 1.83(효능 무영향), 양쪽 위험 동형접합 시 14.8배. 통합 모델 R²=25%·부작용 AUC 0.65–0.68. 한계: 자가보고(EHR 대비 감량 과대), 82.4% 여성·78.3% 유럽계, 선행 연구와 **효능 방향 상충**.
- [[concept-glp1ra-response-variability]] — 신규 개념 hub. 반응 이질성을 **비유전 임상(~21%) / 유전(+~4%p) / 행동 표현형 / 회로·생리** 4층으로 분해하고 예측 성능 상한을 기록. 미설명 분산 ~75%가 사용자 lab의 표현형 층화 노선의 기회 공간임을 명시.

**갱신 페이지 11**: [[concept-glp-1]] · [[concept-gip]] · [[concept-area-postrema]] · [[koide-2025-association-between-eating-behavior]] · [[aronne-2023-continued-treatment-with-tirzepatide-for]] · [[veniant-2024-a-gipr-antagonist-conjugated-to]] · [[gao-2026-semaglutide-drives-weight-loss-through]] · [[concept-digital-therapeutics]] · [[lee-2025-hijacked-brain-modern-obesity-cue]] · [[takacs-2026-transcriptome-profiling-of-human-hypothalamic]] · [[davila-2026-agrp-neurons-are-required-for]] · [[index.md|wiki/index.md]].

**교차 함의 2건**
- 효능·오심 co-localization이 [[gao-2026-semaglutide-drives-weight-loss-through]]의 **AP(혐오) vs NTS(포만) 분업**에 직접 질문을 던진다 — 회로 수준에서 분리 가능해 보이는 두 축이 인간 유전학에서는 같은 신호일 확률이 72.6%.
- 임상의 "여성이 더 잘 빠진다"(−12.2% vs −10.0%)가 [[davila-2026-agrp-neurons-are-required-for]]의 **암컷 특이 AgRP 의존성**과 같은 기전인지가 열린 질문으로 등록됨.

## 2026-08-19 — ingest (raw/ 미정리분 5편: GLP-1RA×AgRP · 인간 시상하부 전사체 · 신경-행동 AI 모델링 2편 · 모성 뇌 도파민)

`raw/` 전체(305 PDF + 스텁 1)를 위키 `source:` 필드와 대조해 **미정리 5건**을 식별하고 ingest. 나머지 불일치 34건은 파일명 중복 변이(` 1`·`(1)`·`(2)`·supplement)로 확인해 제외.

**새 페이지 6**
- [[davila-2026-agrp-neurons-are-required-for]] — PNAS 2026, Horvath lab. GLP-1RA가 AgRP를 **모집**하며 AgRP가 체중 감량에 필수(식이 억제는 분리). 3가지 독립 loss-of-function 모델·지방 동원/β₃-AR/UCP2·GC→AgRP-GR 축·암컷 특이.
- [[takacs-2026-transcriptome-profiling-of-human-hypothalamic]] — Nat Commun 2026, Hrabovszky lab. **IHC/LCM-Seq**로 인간 AgRP·POMC·KP 전사체(14,000–16,000 transcript/세포). 인간 POMC `GLP1R`·`CALCR`·`RAMP1/3`·`CNR1`·`HTR2C`, 인간 AgRP `ACVR1C`·`NR3C1`·사이토카인·후각수용체 3종; CART 종차; POMC DM/VL 공간 분업.
- [[mathis-2026-joint-modelling-of-brain-and]] — NRN 2026. 결합 모델링 3계열(discriminative/generative/contrastive)·identifiability·trustworthiness scorecard.
- [[mathis-2026-leveraging-insights-from-neuroscience-to]] — Nat Neurosci 2026 Perspective. internal model·prediction error·memory replay 기반 적응형 AI, agentic 아키텍처 제안(미구현).
- [[ochan-2026-dopamine-drives-persistent-remodelling-of]] — Nature 2026, Maze lab. **H3 dopaminylation**이 모성 뇌 dHF 재편을 인과 매개, 인간 subiculum 보존. ⚠️ 원문 PDF 미확보 — `raw/`의 메타데이터 스텁(초록 기반)으로 작성, PDF 입수 시 재작성 필요.
- [[concept-joint-brain-behaviour-modelling]] — 신규 개념 hub. 결합 모델링 방법론 + 섭식 적용 설계 메모(NMPU 축 분리 검정, 약물 전후 표상 비교).

**갱신 페이지 17**
- 회로/세포: [[concept-npy-agrp-neurons]] · [[concept-pomc-neurons]] · [[concept-arcuate-nucleus]]
- 호르몬/약물: [[concept-glp-1]] · [[concept-amylin-receptor-agonists]] · [[concept-endocannabinoid-system]] · [[concept-ectopic-olfactory-receptors]] · [[gao-2026-semaglutide-drives-weight-loss-through]]
- 방법론/atlas: [[concept-hypomap]] · [[concept-spatial-transcriptomics]] · [[concept-computational-ethology]]
- 도파민/후성유전/발달: [[concept-dopamine-reward-system]] · [[concept-epigenetic-priming]] · [[kim-2026-early-life-stress-alters-h3k4me1]] · [[concept-maternal-programming-hypothalamus]]
- 이론: [[concept-need-motivation-pleasure-utility]]
- [[index.md|wiki/index.md]] — 🍽️ 회로·세포, 🧪 방법론, 🤖 AI×NS, 발달/DOHaD, 🎯 종합·메타, 💡 개념 6개 절 갱신.

**교차 함의**: d'Ávila(GC→AgRP-GR 필요)와 Takács(인간 AgRP `NR3C1` 고발현)가 서로를 보강 — 마우스 기전에 인간 분자 근거가 붙었다. 또 Takács의 종차 데이터(`Glp1r`가 마우스 POMC에서 더 높음, 인간 POMC는 CART 음성)는 기존 GLP-1 회로 페이지들의 rodent→human 번역 주장에 **수용체 단위 검증**이라는 단서를 단다.

**미해결**: `wiki/` 폴더에 PDF 4개가 잘못 놓여 있음(`2026 Nature Metabolism. Glycogen…`, `…Semaglutide…hindbrain…`, `2026 Nature. GLP-1R–GIPR–PPARαγδ…`, `2026 Nature. Genetic predictors of GLP1…`). 모두 대응 위키 페이지는 존재. 평면 구조 규칙상 `raw/`로 옮기는 게 맞으나 사용자 확인 후 처리 예정.

## 2026-08-16 — ingest (신규 3편: eCB-LTP one-shot learning · ELS 후성유전 priming · 양육 회로)

어제 18:11에 `raw/`에 추가된 3편 일괄 ingest. 페이지 418→424(+6: 논문 3 + 개념 3). 세 편 모두 기존 위키에 없던 신규(제목·저자·주제 전수 대조 확인).

**신규 논문 3**
- [[piette-2026-striatal-endocannabinoids-drive-one-shot]] — **단 한 번 수 초의 경험으로 생기는 기억은 NMDA-LTP가 아니라 등외측 선조체(DLS)의 eCB-LTP**가 담당 (Nat Neurosci 2026, Venance lab / Collège de France; DOI 10.1038/s41593-026-02392-z).
  - 새 행동과제 **STA test**(sticky tape avoidance, 보상·처벌 없는 자발 행동): familiarization에서 끈끈이 테이프와 1회 접촉 → 24 h 후 회피. **접촉 <5 s로 충분**(58%), >1 min은 더 낫지 않음. PCA 기반 avoidance index로 63%가 avoider. corticosterone 상승 없음(혐오·스트레스 아님). 72 h·1주·1개월 지속, 다른 선조체 과제 3종 간섭에 저항.
  - **짧은 접촉(2–20 s) 마우스의 91%만** 24 h 후 corticostriatal ChR2-LFP 강화, 긴 접촉(>20 s)의 75%는 무강화. 강화는 avoidance index와 상관.
  - Neuropixels(S1+DLS 동시): 접촉 중 발화 1–3 Hz·27–30% 침묵. **짧은 접촉이 상관 쌍↑(61% vs 11%)·다중 짝짓기 쌍↓(2% vs 38%)** → in vitro eCB-LTP 조건(5–20 pairings, 0.1–2.5 Hz)과 일치. **plasticitymeter** STDP 모델로 eCB-LTP 이벤트 밀도·누적시간 유의 증가(P=0.0079). **GRAB_eCB2.0** photometry로 접촉 ~10 s 후 eCB 상승 직접 확인.
  - Ex vivo occlusion: eCB-LTP는 **DLS에서만** 유도(DMS 불가); 짧은 접촉·학습한 개체에서만 occlude. NMDA-LTP는 짧은 접촉엔 안 occlude, **인출 이후** one-shot learner에서 occlude.
  - 인과: **presynaptic CB1R 또는 D2R 조건부 KO**(S2 피질 AAV-Cre) → eCB-LTP 소실 + **짧은 접촉 학습만** 실패(긴 접촉 정상). DLS **AM251** 동일, **D-AP5(NMDAR)는 무영향**. **두 번째 인출에서는 KO와 대조 동등** → eCB-LTP는 최초 각인(priming) 전용. 가속 rotarod 초기 획득기에도 관여.
- [[kim-2026-early-life-stress-alters-h3k4me1]] — **초기 역경(P10–17)이 성체 VTA 크로마틴을 허용적으로 바꿔 훗날 스트레스 반응을 통째로 증폭**; 실행자는 H3K4 단일메틸화 효소 **SETD7**과 **H3K4me1** (Neuron 2026 online / 115권 2027-01-06 호, Peña·Creed lab; DOI 10.1016/j.neuron.2026.07.018).
  - Bottom-up LC-MS/MS(200+ PTHM): 27개 히스톤 조각 중 6개에서 상호작용, 큰 효과 14개 변형이 **모두 증가**하고 **75%가 permissive(open·active·primed) 상태**와 연관. H3K27–K36(억제 축)은 불변. H3K4me1↑는 암수 western blot 검증.
  - 효소: **Setd7↑(P=0.0156)·Kmt2a(Mll1)↓(P=0.026)**, **성체 만성 스트레스로는 안 바뀜**(발달 특이). Setd7은 VTA/SN·도파민 뉴런 편중, P21에 이미 TH⁺ 핵 내 SETD7 단백질↑.
  - **충분**: Setd7-OE(P14) → H3K4me1 +34%(me3·K27Ac 불변) → 성체 스트레스 전사반응 방향 **반전**(대조 94% 하향 vs OE 94% 상향, RRHO), 도파민 뉴런 흥분성·**I_h↑**(비스트레스 상태에선 무효), 취약 50% vs Gfp 8.3%, open field 중앙시간↓.
  - **필요**: ELS 후 Setd7-KD(P14) → H3K4me1 −37% → ELS의 흥분성·I_h 증가 차단, 취약 85%→33%, **resilient 0%→33%**.
  - 한계(저자 명시): EF1a ubiquitous 프로모터라 DA 특이 아님, AAV OE는 **H3K4me1 배치 위치 통제 불가** → CRISPR-dCas9 표적 epigenetic editing 필요. 열린 질문: 같은 priming이 **긍정·풍요 자극 민감성**도 높이는가(개입 경로).
- [[jamieson-2026-neural-circuits-for-mammalian-parental]] — 포유류 **양육 회로** 종합 리뷰 (Nat Rev Neurosci 2026, Jamieson & Kohl / Francis Crick; DOI 10.1038/s41583-026-01073-x).
  - 구조: 다중감각 새끼신호 평가(A1 USV·VNO/MeA·PIL TIP39 촉각; **한 감각 차단은 무해, 둘 이상이면 결손**) → **MPOA(pro: Gal·Esr1·Calcr) ↔ PeFA^Ucn3·BNST^Esr1(anti)** 상호억제 → VTA-NAc 강화(**새끼 lever-press가 코카인 초과 가능**)·PAG 운동 실행·mPFC/OFC 하향 조절.
  - 가소성: **juvenile alloparenting이 P14–15에 갑자기 출현**(microglia 매개 MPOA^Gal 입력 pruning), 사춘기 성별 분기, **감작**(core 네트워크 동원·PVN^OT 충분·CeA→LC/BNST→LHb 혐오 경로 약화), **관찰학습**(SC→PVN^OT; 비양육 맥락 영상 시청만으로도 유도), 임신 호르몬(MPOA^Gal Esr1/Pgr 필수; 에스트라디올↔프로게스테론 상보 가소성으로 "더 적지만 더 선택적인" 집단).
  - ★ **섭식 접점**: 새끼 존재→섭식↓, 흥분성 MPOA 활성만으로 섭식 억제 충분. 역으로 **절식·ARC AgRP 활성 → GABA·NPY → MPOA 억제 → 새끼 방치·공격**. 발정주기 P:E 비가 이 억제 확률을 gating. **새끼 감작 경험이 있으면 절식해도 공격 안 나타남**. 시상하부 밖: 절식→배측 봉선핵 Y1 NPY→모성 돌봄 억제.

**신규 개념 3**
- [[concept-medial-preoptic-area]] — 위키에 비어 있던 시상하부 노드 MPOA. 양육 허브 + **섭식과의 동기 경쟁** 축.
- [[concept-epigenetic-priming]] — "기저 정상, 2차 hit에서만 증폭"의 크로마틴 저장 기전. H3K4me1/SETD7·LSD1, 히스톤 질량분석·epigenome editing 방법론, 대사(H3K9 젖산화) 축과의 공통 문법.
- [[concept-one-shot-learning]] — 단일시행 학습과 비고전적 가소성 규칙(eCB-LTP·BTSP·STDP 한계), **짧은 1회 vs 길거나 반복된 경험**의 가소성 분업 표.

**갱신 페이지 20(역링크)**: [[concept-endocannabinoid-system]](★ "중추 시냅스 학습 규칙 eCB-LTP" 본문 절 신설 — 기존 말초 지방 축에 두 번째 얼굴 추가)·[[concept-early-life-adversity]](★ 크로마틴 층 + "저장 층위" 비교표 신설)·[[concept-medium-spiny-neuron]]·[[concept-dopamine-reward-system]]·[[concept-npy-agrp-neurons]](★ AgRP=경쟁 동기 억제 스위치)·[[concept-maternal-programming-hypothalamus]]·[[concept-paraventricular-nucleus]]·[[concept-nucleus-accumbens]]·[[concept-lateral-hypothalamus]]·[[concept-bed-nucleus-stria-terminalis]]·[[concept-ventromedial-hypothalamus]]·[[concept-arcuate-nucleus]]·[[concept-astrocyte-neuron-lactate-shuttle]]·[[concept-conditioned-taste-aversion]]·[[concept-flavor-nutrient-conditioning]]·[[concept-need-motivation-pleasure-utility]]·[[shin-2023-early-adversity-promotes-binge-like-eating]]·[[fallon-2026-striatal-pathways-dissociably-control-action]]·[[giovanniello-2025-a-dual-pathway-architecture-for]]·[[korotkova-2026-balancing-acts-lateral-hypothalamic]].

[[index.md|wiki/index.md]] 🧠 시상하부 핵(MPOA)·🧩 인지행동(Piette·Jamieson·one-shot)·🍽️ 발달/DOHaD(Kim·epigenetic priming)·🎯 도파민(D2R gating·VTA priming)·💡 개념 목록에 등재. 총 페이지 카운트 392(2026-07-31 stale)→**424**로 정정.

**표시한 미검증 가설**: ① eCB-LTP를 CTA·flavor-nutrient conditioning 회로(편도·PBN·NTS)로 이식할 수 있는지, ② [[shin-2023-early-adversity-promotes-binge-like-eating]]의 ELS→LH^Lepr 폭식 회로에 크로마틴 priming 층이 있는지 — 둘 다 본 위키 자료 범위 내 **미검증**으로 명시.

**공백 기록**: 옥시토신(oxytocin)이 [[jamieson-2026-neural-circuits-for-mammalian-parental]]·[[concept-paraventricular-nucleus]]·[[concept-vagal-afferent-neurons]] 등 다수 페이지에 흩어져 있으나 `concept-oxytocin` hub 없음. 이번 ingest 자료만으로는 얇아질 우려가 있어 만들지 않음 — 옥시토신 1차 자료가 들어오면 생성 검토.

**미처리 확인**: `raw/`의 나머지 미매칭 파일은 기존 등재분의 중복 사본(` 1.pdf`·`(1)`·`(supp)`)이거나 다른 source 파일명으로 이미 등재된 논문, 그리고 교재·회의 `.docx` 문서들. 신규 논문 없음.

## 2026-08-15 — ingest (신규 1편: CASTLE 행동 자동 정량화) + 백로그 정리(Gruzdeva 2026 등재)

**신규 ingest**: [[liu-2025-castle-a-training-free-foundation-model]] — **CASTLE**(Combined Approach for Segmentation and Tracking with Latent Extraction). SAM(분할)+DeAOT(추적)+DINOv2(768-D 시각 잠재)를 **재학습·라벨 없이** 연결해 ROI별 "focused visual latent"를 만들고 UMAP→DBSCAN 위계 군집으로 행동 클래스를 발견 (bioRxiv 10.1101/2025.08.22.671685, posted 2025-08-27, Yu-Wei Wu lab / Academia Sinica).
- 핵심: 마우스 reach-and-grasp weighted F1 **0.9015**; 앞발 위치 신경 디코딩 R² **0.8554 vs DLC 0.8524**(차이 없음, p=0.579)이나 DLC 대비 정지구간 jitter 유의 감소; **CASTLE 분류가 전문가 라벨보다 신경 디코딩 정확도 우수**(grabbing·at mouth, p<0.001).
- 발견: 전문가가 놓친 섭식 하위행동 **"food approaching mouth"·"food releasing at mouth"** 자동 분리. OFT 5클래스(grooming/supported·unsupported rearing/walking/immobility)로 MPTP·6-OHDA 파킨슨 표현형 검출. 초파리 7클래스·선충 5 locomotor state(광유전 pirouette 전환 재현) — 모두 최적화 없이.
- 기술 트릭: DINOv2 잠재가 **회전에 민감** → 15°씩 **24회전 평균**으로 방향 중립화(대가: 추론시간↑). 한계: preprint·단일개체 검증·mask seeding 필요·DINOv2 편향 상속·장거리 시퀀스 취약.
- ⚠️ `raw/` 파일명은 "2026"이나 preprint 게시연도는 **2025** → 페이지·파일명은 2025로 표기.

**새 개념 페이지**: [[concept-computational-ethology]] — 행동 자동 정량화 hub. 1세대 지도 keypoint(DeepLabCut·SLEAP·Lightning Pose·AlphaTracker) → 2세대 비지도 syllable(MoSeq·B-SOiD·Keypoint-MoSeq·shMoSeq) → 3세대 VFM(PriVi·CASTLE) 세대별 지형 + 방법론 쟁점 5가지(인식 대 발견 / 신경 디코딩을 라벨 타당성 심판으로 / 시간 위계 / 운동학과 시각 잠재의 상보성 / 폐루프 state-contingent 자극).

**백로그 정리**: [[gruzdeva-2026-hunger-neurons-track-available-food]] 페이지가 본문만 있고 index·역링크·log 미반영 상태였음 → 전부 보강. AgRP가 **먹이까지의 학습된 공간 거리**를 부호화(접근↓·이탈↑ 양방향 ramp, 단식 의존, 기억 회상 중 유지).

**역링크 추가(11)**: [[mueller-2025-privi-towards-general-purpose-video]]·[[weinreb-2026-spontaneous-behavior-is-a]]·[[liu-2026-granular-motivational-interaction-and]]·[[godschall-2026-a-brain-reward-circuit-inhibited]]·[[zong-2022-large-scale-two-photon-calcium]]·[[wang-2026-multimodal-alignments-of-in]]·[[ha-2024-hypothalamic-neuronal-activation-non-human]]·[[leow-2026-a-cortical-hypothalamic-neural]]·[[fallon-2026-striatal-pathways-dissociably-control-action]]·[[concept-appetitive-consummatory-phases]]·[[concept-need-motivation-pleasure-utility]] (CASTLE/ethology hub 방향). Gruzdeva 방향: [[concept-npy-agrp-neurons]]·[[kim-2024-normative-framework-dissociates-need]]·[[walker-2026-a-hypothalamic-circuit-for]]·[[concept-hippocampus-feeding]]·[[concept-dopamine-reward-system]].

[[index.md|wiki/index.md]] 🧪 방법론(CASTLE·ethology hub)·🍽️ 회로·세포(Gruzdeva)·💡 개념 발달/atlas/방법론에 등재.

**미처리 확인**: 오늘 `raw/`에 추가된 나머지 8건은 8/5 ingest분의 중복 사본(`… 1.pdf`)이며, `2025 PNAS Reward prediction…orexin…`도 [[dong-2026-reward-prediction-is-encoded-by]]로 이미 등재된 논문의 중복 파일 — 신규 ingest 없음.

## 2026-08-06 — other (비공개 작업)

비공개 연구기획 작업. 위키 페이지로 보관하지 않음(로컬 문서로만 유지).

## 2026-08-05 — ingest (신규 1편: 섬엽 LepR 내수용 섭식 회로)

추가된 1편 ingest. 페이지 416→417.
- [[zhao-2026-direct-interoceptive-input-to-the]] — **섬엽(insula)-claustrum 심부층 LepR⁺(Car3⁺ glutamatergic) 뉴런(INS^LepR)이 렙틴을 직접 감지**하는 내수용 검출기; 섬엽내 렙틴 주입·광유전 활성이 **학습된 operant 섭식·동기(PR breakpoint)↓·체중↓**(항상성 섭식엔 불필요), Ca²⁺ 이미징서 섭식 bout·hunger상태 부호화(Cluster 4=AgRP 유사 섭취직전↑·섭취시↓), BLA 투사 (Stern lab, MPFI, bioRxiv 2026).
- 역링크: [[concept-insula]]·[[concept-leptin]]·[[concept-metabolic-interoception]]·[[concept-npy-agrp-neurons]]. [[index.md|wiki/index.md]] 🍽️ 회로·세포(섬엽 예측층)에 등재.

## 2026-08-05 — ingest (신규 3편: metabolic-interoception cluster 확장)

앞 배치 직후 추가된 3편(Sci Adv 2025 리뷰·AJP 2021 메타분석·eBioMedicine 2026) ingest. 페이지 413→416(+3, 논문만). 앞서 만든 [[concept-metabolic-interoception]]·[[person-nord-camilla]] 허브로 수렴.
- [[mehrhof-2025-an-interoceptive-model-of-energy]] — **interoceptive energy allostasis** 이론 리뷰(대사–우울 공존=예측적 에너지 조절 교란; vicious cycle·개인별 진입점). [[concept-metabolic-interoception]]의 1차 출처 (Mehrhof/Fleming/Nord, Sci Adv 2025).
- [[nord-2021-disrupted-dorsal-mid-insula]] — 정신질환 전반 **transdiagnostic 내수용 손상 locus=좌측 등쪽 중간섬엽**(ALE 메타 33연구); 정서회로·기존치료 영역과 구별 (Nord/Lawson/Dalgleish, Am J Psychiatry 2021).
- [[kaduk-2026-glucose-levels-are-associated]] — **혈당→기분이 대사상태 의식적 지각으로 매개**(indirect-only, 매개비율 0.68), interoceptive accuracy↑→기분 변동↓ (Kroemer 랩, eBioMedicine 2026).
- 역링크: [[concept-metabolic-interoception]]·[[concept-interoception]]·[[concept-insula]]·[[concept-npy-agrp-neurons]]·[[person-nord-camilla]]·[[person-kroemer-nils]]·[[fleming-2026-metabolism-and-the-mind]]·[[mehrhof-2026-computational-phenotyping-of-effort]]. [[index.md|wiki/index.md]] 🧩 Nord cluster 확장.

## 2026-08-05 — ingest (신규 3편: Nord 랩 metabolic-interoception 3부작)

오늘 추가된 3편(eClinicalMedicine·Biol Psychiatry GOS·Neuropsychopharmacology, 모두 Cambridge Nord 랩) 일괄 ingest. 페이지 407→413(+6: 논문 3 + 개념 2 + 인물 1). 나머지 raw 미매칭은 기존 중복/변형본(재확인).
- [[hickman-2025-breaking-through-the-mind-body]] — 정신건강 interoception **당사자 주도 연구 우선순위 10**(PPI, N=72); multimodal(위장·근긴장·배고픔) 강조 (2025).
- [[fleming-2026-metabolism-and-the-mind]] — 혈당조절 악화→**보상학습률↑(r=0.32)→우울↑**; 중추 인슐린→선조체 도파민(인간 RL 계산모델) (2026).
- [[mehrhof-2026-computational-phenotyping-of-effort]] — T2D **effort acceptance bias↓**(에너지 절약), 정신증상과 독립·**semaglutide 미회복** (2026).
- 신규 개념: [[concept-effort-based-decision-making]](SV=βR·R−βE·E·acceptance bias·도파민 vigor)·[[concept-metabolic-interoception]](대사→보상/기분·energy allostasis·인슐린→도파민). 신규 인물: [[person-nord-camilla]].
- 역링크: [[concept-interoception]]·[[concept-dopamine-reward-system]]·[[concept-need-motivation-pleasure-utility]]·[[concept-anhedonia]]·[[hamid-2016-mesolimbic-dopamine-signals-value-work]]·[[concept-glp-1]]·[[person-choi-hyung-jin]]. [[index.md|wiki/index.md]] 🧩(3부작)·💡(개념 2)·👤(Nord) 등재.

## 2026-08-05 — ingest (신규 1편: 자발적 행동 = self-directed task 연속)

raw/ 전수 대조(280 PDF vs 262 source): 미등록 신규는 1편뿐. 나머지 "미매칭" 파일은 전부 중복 다운로드(` 1.pdf`/`(1)`/`(supp)`/이름변형) 또는 다른 source 파일명으로 이미 등록됨(morales-2020·warlow-2021·roh-2021·guo-2023·edison-2026·walker-2026·gao-2026·godschall-2026 등으로 확인). 페이지 406→407.
- [[weinreb-2026-spontaneous-behavior-is-a]] — 자유행동 마우스의 자발적 행동이 **shMoSeq**로 pose→syllable→**수 초 behavioral state** 3층 위계 분해; dmPFC가 저수준 움직임보다 상태 정체 우선 부호화(행동에 **후행**), affordance 변수 상태별 선택적 강조, 손상 시 드문 상태(grooming·local investigation) 발현↓·장기 시간척도 수축; DLS=syllable 시간척도와 해리 (Neuron 2026, 922–937, Datta lab).
- 역링크: [[xu-2020-behavioral-state-coding-by]](behavioral state coding 개념 가족)·[[giovanniello-2025-a-dual-pathway-architecture-for]](goal/habit arbitration)·[[concept-need-motivation-pleasure-utility]](self-directed task=목표 프레임). [[index.md|wiki/index.md]] 🧩 인지·행동 + 🧪 방법론(shMoSeq)에 등재.

## 2026-07-31 — other (개념 추가: inhibitory control demand / trouble resisting)

사용자 요청 개념 페이지 신설(391→392). VR craving provocation에서 craving↑ → 억제통제 부하↑ → 제어 개입 시 dlPFC·ACC 활성이 craving에 비례해↑(제어 실패 시 dlPFC↓)라는 "trouble resisting" 기전.
- 신규 [[concept-inhibitory-control-demand]] — [[lee-2025-hijacked-brain-modern-obesity-cue|Hijacked Brain]] Restraint 표현형(ACC·dlPFC 제어노력↑+보상민감↑ 이중활성)·[[lee-2019-food-craving-seeking-and|Food Craving phase]](craving=내적 state, Go/NoGo 억제통제)에 근거. proportional-scaling 명제는 이들 자료에 정합적인 사용자 lab 정식화로 표기.
- 역링크: [[lee-2025-hijacked-brain-modern-obesity-cue]]·[[lee-2019-food-craving-seeking-and]]·[[concept-cue-reactivity]]·[[concept-digital-therapeutics]]·[[concept-need-motivation-pleasure-utility]]. [[index.md|wiki/index.md]] 🧩 인지·행동에 등재.

## 2026-07-31 — ingest (신규 1편: 강박적 섭식 피질-시상하부 회로)

raw/ 재대조 결과 미등록은 오늘 추가된 1편(나머지 Jul 28 배치·`… 1.pdf` 중복본은 이미 등록됨). 총 페이지 389→391(+2: 논문 1 + 개념 1), 기존 hub 5개 역링크.
- [[leow-2026-a-cortical-hypothalamic-neural]] — rostral ZI GABA가 처벌(quinine·foot-shock)-저항 강박 섭식 전담(일반 식욕 TN^SST와 해리); mPFC(PL·ORBm·ACAd)→rZI top-down이 gate, binge가 mPFC-rZI를 지속 attractor로 재편; 인간 3코호트 rZI-mPFC FC=BMI/binge biomarker (Neuron 2026, Yu Fu·Juan Helen Zhou·Hasan Mohammad).
- 신규 개념: [[concept-zona-incerta]] — LH 인접 orexigenic 노드 hub.
- 역링크: [[concept-loss-of-control-eating]]·[[concept-lateral-hypothalamus]]·[[stuber-2025-the-neurobiology-of-overeating]]·[[hjort-2026-prefrontal-to-ventral-tegmental-area]]·[[concept-food-addiction]]·[[concept-orbitofrontal-cortex]]. [[index.md|wiki/index.md]] 갱신.

## 2026-07-28 — ingest (신규 14편 일괄: 보상 회로·지질감지·비만약리·AI 창약)

raw/를 위키와 재대조해 미등록 14편 확정·일괄 ingest (총 페이지 355→389, +34: 논문 14 + 개념 16 + 인물 4). [[index.md|wiki/index.md]] 갱신, 기존 hub 8개 역링크.

**섭식·보상 회로 (핵심)**:
- [[sumarli-2026-multidimensional-control-of-ingestive-behavior]] — LH^Nts가 licking 운동량·음수·각성·자발운동 조율(총 섭식 불변); VTA-DA value coding과 inverse (bioRxiv, Soden). 신규 [[concept-neurotensin]]·[[person-soden-marta]].
- [[yang-2026-a-sync-state-in-the]] — VTA DA "0.8 Hz sync state"가 orosensory×위장 영양 신호 시간일치를 게이트로 interoceptive credit assignment(RPE 아님)·소비 vigor↑ (Neuron, Gong). 신규 [[concept-consumption-vigor]].
- [[schulz-2026-blunted-anticipation-but-not]] — 우울증 음식보상: anticipatory wanting↓·consummatory liking 보존; ghrelin·인슐린저항 증상 연동 (Cell Rep Med, Kroemer). 신규 [[concept-anhedonia]]·[[person-kroemer-nils]]. 🩺 질환 카테고리 첫 앵커.
- [[tabibnia-2026-cue-labeling-reduces-cigarette-craving]] — cue labeling(affect labeling)이 흡연갈망·precuneus↓, 고령서 baseline 회복 (Neuropsychopharmacology). 신규 [[concept-cue-reactivity]]·[[concept-affect-labeling]].

**지질 감지·대사 수용체**:
- [[garrido-2026-lipid-sensing-and-brain-hormone]] — gut–kidney–brain 지질감지 축(CCK·GLP-1·PYY·GIP·GDF15 시간차) (Nat Rev Endocrinol, Lam). 신규 [[concept-gdf15-gfral-axis]]·[[person-lam-tony]].
- [[ge-2026-identification-of-or5v1-olfr110]] — 간 이소성 후각수용체 Or5v1이 옥시리핀 12(S)-HEPE 감지→지방산화·항비만 (Cell). 신규 [[concept-ectopic-olfactory-receptors]]·[[concept-oxylipins]].

**비만 약리·창약**:
- [[petersen-2026-the-evolving-landscape-of]] — 비만약 지형 2026 종합 (NRDD, Clemmensen). 신규 [[concept-glucagon-receptor-agonism]]·[[concept-amylin-receptor-agonists]]·[[concept-peptide-drug-conjugate]].
- [[lorente-2025-gpcr-drug-discovery-new-agents]] — GPCR 창약 지형(GLP-1=최다 retarget) (NRDD). 신규 [[concept-gpcr-drug-discovery]]·[[concept-biased-agonism]].
- [[crunkhorn-2025-pairing-up-with-glp-1]] — GLP-1×렙틴 이중작용제가 DMH LepR^Glp1r 표적 (하이라이트).
- [[mullard-2025-from-gene-hunter-to]] — Amgen CSO 인터뷰·MariTide modular therapeutic (주변부).
- [[dolgin-2026-brain-shuttle-biologics-chart-new]] — BBB shuttle(TfR·CD98hc) 산업 동향 (NRDD News). 신규 [[concept-blood-brain-barrier-shuttle]].

**AI 창약 / 방법론**:
- [[pun-2026-target-identification-and-assessment-in]] — AI 신약 타깃 발굴·평가 (NRDD, Insilico). 신규 [[concept-ai-drug-discovery]].
- [[muratspahic-2026-de-novo-design-of-miniproteins]] — 11개 GPCR 표적 miniprotein de novo 설계(GLP1R·GIPR·MC4R) (Nature, Baker). 신규 [[concept-de-novo-protein-design]]·[[person-baker-david]].
- [[zong-2022-large-scale-two-photon-calcium]] — MINI2P 자유행동 대규모 2P 이미징 (Cell, Moser). 🧪 방법론.

**주의**: [[yang-2026-a-sync-state-in-the]]는 raw 파일명이 "Cell"이나 실게재지는 Neuron. 신규 개념/인물 20개는 스텁 수준 이상으로 작성했으나 후속 논문 유입 시 보강 권장.

## 2026-07-10 — ingest (신규 1편: GLP-1 신경·정신질환 광역 리뷰) + 위생복원

raw/ 재대조로 신규 1편 확정(count 257→258). ingest:
- [[fang-2025-glucagon-like-peptide-1-medicines]] — **Drucker(Fang·Cui·Drucker) 광역 리뷰**: GLP-1 의약을 신경퇴행(AD RCT 음성·PD 엇갈림)뿐 아니라 **물질사용장애(알코올·코카인·니코틴·대마)·정신질환(우울/불안)·발작·편두통·특발성두개내압상승·뇌졸중** 전 영역 검토. **SUD가 하이라이트**: semaglutide가 AUD/CUD/대마 신규·재발 위험을 관찰연구에서 큰 폭↓(AUD 재발 HR 0.25~0.44), 중변연계(VTA·NAc·LDTg) GLP-1R 매개 → 사용자 보상회로(‘갈망’·유인감작·음식중독) 직결. 사용자 lab [[bae-2019-glucagon-like-peptide-1-receptor|Bae fMRI]] 인용(ref #9). 결론: 어떤 신경질환도 확정 3상 부재 (Cell Rep Med 2025).

**갱신**: [[concept-glp1-neuroprotection]]·[[sabbagh-2026-repurposing-glucagon-like-peptide-1]](자매 리뷰 상호링크), [[bae-2019-glucagon-like-peptide-1-receptor]]·[[concept-food-addiction]](SUD-보상 역링크), [[index.md|wiki/index.md]], 본 log.
**위생복원**: [[zhang-2022-brainstem-circuit-for-nausea]] `source:`를 `.pdf.pdf`로 복원 — 직전 라운드에서 "오타"로 오판해 `.pdf`로 바꿨으나, 실제 raw 파일명이 `...suppression.pdf.pdf`(이중 확장자)임을 확인. source는 실제 파일명과 일치해야 하므로 원복.

---

## 2026-07-10 — ingest (신규 1편: GLP-1 신경보호 종합 리뷰) + 위생수정

raw/ 전수 재대조(위키 `source:` ↔ raw 파일명). unmatched 22건 중 21건은 중복(` 1`/`(1)`/`(2)`)·supplement·이미 다른 slug로 ingest된 파일(Edison/EVOKE/godschall/walker/gao/jia/mcknight 등)·frontmatter 오타로 확인 → **진짜 신규 1편**만 ingest:
- [[sabbagh-2026-repurposing-glucagon-like-peptide-1]] — **GLP-1RA 신경퇴행 repurposing 종합 리뷰**(Sabbagh·Cummings·Ballard·van der Flier·Heneka·Holst·Knudsen·Salloway·Tansey·**Drucker**). AD 중심(+PD·ALS): 역학 치매 28%↓(RR 0.72) vs **RCT(ELAD·EVOKE) 인지 음성**; PD lixisenatide(+)/exenatide phase3(−); ALS 악화. 실패 원인=뇌 침투·병기·용량-반응; **CNS-penetrant 차세대** 필요. Novo Nordisk 이해상충 명시 (Nature Aging 2026).

**갱신**: [[concept-glp1-neuroprotection]](서술형 종합본 링크·PD/ALS 확장 섹션), [[cummings-2026-efficacy-and-safety-of-oral]]·[[edison-2026-liraglutide-in-mild-to-moderate]]·[[du-2026-oral-glp1-receptor-agonist-promotes]](Sabbagh 역링크), [[index.md|wiki/index.md]], 본 log.
**위생**: [[zhang-2022-brainstem-circuit-for-nausea]] frontmatter `source:` 확장자 오타(`.pdf.pdf`→`.pdf`) 수정 — ingest 대조 정확도 개선.

---

## 2026-07-10 — ingest (신규 2편: GLP-1 신경보호 — pivotal RCT 음성 + 뇌투과 기전)

raw/ 신규 2편(2026-07-10 추가) ingest. **GLP-1 신경보호 서사의 전환점**: 관찰연구 양성 신호가 대규모 3상에서 음성으로 반증되고, 동시에 뇌투과 기전 논문이 "왜 실패했나"에 답.
- [[cummings-2026-efficacy-and-safety-of-oral]] — **EVOKE/EVOKE+** 경구 세마글루타이드 초기 증상성 AD 3상(n=3,808): **1차 CDR-SB·모든 2차 종점 음성 → 두 시험 조기 중단**; 단 CSF p-tau·총tau·neurogranin·YKL-40 5–10%↓·hsCRP↓·체중 −5.8%, 혈장 GFAP↑ = **바이오마커-임상 해리** (Lancet 2026, Novo Nordisk).
- [[du-2026-oral-glp1-receptor-agonist-promotes]] — 뇌투과 경구 GLP-1RA **OHP2**: 뇌 GLP-1R(성상교세포 우세)→호기성 해당→**젖산**→뉴런 **H3K9 젖산화**→뉴런→성상교세포 지질 역수송으로 AD 마우스 치료(효과 sema>OHP2, 뇌내 GLP-1R·성상교세포 LDHA 의존) (Cell Metabolism 2026, 中國藥科大 Du/Chen/Gao).

**신규 개념 1**: [[concept-astrocyte-neuron-lactate-shuttle]](ANLS·젖산화 hub).
**갱신**: [[concept-glp1-neuroprotection]](EVOKE 반영—RCT 표에 sema 음성 추가·"RCT 음성↔관찰 양성" 긴장·뇌도달/해리 해석·성상교세포 기전축), [[concept-glp-1]]·[[edison-2026-liraglutide-in-mild-to-moderate]](EVOKE·OHP2 역링크), [[index.md|wiki/index.md]], 본 log.

---

## 2026-07-10 — ingest (백로그 미처리 3편: GLP-1 신경보호 역학 2 + OFC→BLA 가치)

raw/ 전수 대조(위키 `source:` frontmatter ↔ raw 파일명)로 **진짜 미처리 신규 3편** 확정(나머지 unmatched 31건은 중복 다운로드 ` 1`/`(1)`·supplement·docx 초안 = 기존 페이지 존재). ingest:
- [[lin-2025-neurodegeneration-and-stroke-after-semaglutide]] — sema/tirze vs 기타 항당뇨제 코호트(TriNetX n=60,860): **치매 HR 0.63·뇌졸중 0.81·사망 0.70↓**, PD·뇌출혈 무차 (JAMA Netw Open 2025).
- [[zhang-2025-real-world-observations-of-glp1]] — GLP-1RA·**SGLT-2i** 모두 AD↓ vs DPP-4i(HR ≤0.69/≤0.67); liraglutide·semaglutide·글리플로진 약물별 유효; PD 무차 (Alz Dement 2025, Cheng·Cummings).
- [[malvaez-2019-distinct-cortical-amygdala-projections-drive]] — **lOFC→BLA=가치 부호화 / mOFC→BLA=가치 인출** 이중해리; palatability(좋아함) 불변·value(갈망)만 조작=회로 수준 liking≠wanting (Nat Neurosci 2019, Wassum lab).

**신규 인물 1**: [[person-wassum-kate]](UCLA, BLA reward valuation).
**갱신**: [[concept-glp1-neuroprotection]](실사용 역학 표·SGLT-2i 확장), [[concept-orbitofrontal-cortex]]·[[concept-basolateral-amygdala]]·[[concept-liking-wanting]](Malvaez 역링크), [[index.md|wiki/index.md]], 본 log.

**백로그 종결**: raw 268(pdf/docx) 중 `source:` 매칭 안 되는 34건을 개별 검증 → 신규 논문은 위 3편뿐, 나머지는 전부 기존 페이지의 중복본/보충/교재 docx. **미처리 논문 백로그 = 0**(2026-07-05 로그의 "≈144" 추정치는 W1–W4 대량 ingest로 이미 소진됨).

---

## 2026-07-09 — ingest (ELAD: liraglutide 알츠하이머 phase 2b)

오늘 `raw/`에 추가된 신규 1편([[edison-2026-liraglutide-in-mild-to-moderate]], Nat Med 2026, ELAD/NCT01843075) ingest. GLP-1RA의 **대사·섭식 밖 신경보호 repurposing**이라는 위키 신규 축.

**신규 페이지 3**:
- 논문 [[edison-2026-liraglutide-in-mild-to-moderate]] — 비당뇨 경도–중등도 AD 204명, liraglutide 1.8mg 52주. **1차 뇌 포도당대사([18F]FDG-PET) 음성**(−0.17, P=0.14), **2차 인지 ADAS-Exec 양성**(+0.15, P=0.01)·탐색 뇌위축 둔화. 안전·내약 양호(중대 AE는 위약군에 더 많음). 1차 음성의 함정=**PET 3일 전 투약 중단**·attrition·다중비교 미보정.
- 개념 [[concept-glp1-neuroprotection]] — GLP-1RA 신경퇴행(AD·PD) repurposing hub(전임상 기전·임상 근거표·방법론 함정).
- 인물 [[person-edison-paul]] — ELAD 총괄 PI, Imperial. 공저 Holscher(전임상)·Ballard.

**갱신 페이지 3**: [[concept-glp-1]](신경보호 §7 신설 + 관련링크), [[index.md|wiki/index.md]](임상·DTx GLP-1 신경보호 bullet·개념·인물 등록), 본 log.

**백로그 주의**: 2026-07-05 기준 미처리 raw ≈144건은 별개 배치로 대기 중(본 ingest와 무관, 오늘 신규분만 처리). 총 콘텐츠 페이지 ~358→361.

---

## 2026-07-05 — ingest (추천 논문 5편: CeA·섬엽 층)

food-safety-alarm 보강용 추천 논문 중 사용자가 받은 5편 ingest(병렬 subagent 추출→중앙 작성). 신규 페이지:
- [[cai-2014-central-amygdala-pkc-delta-neurons]] — CeA PKC-δ⁺ 다중 anorexigenic 수렴 허브 (Nat Neurosci 2014, Anderson).
- [[douglass-2017-central-amygdala-circuits-modulate-food]] — CeA Htr2a⁺ 양성-가치 섭식촉진(PKC-δ 억제) (Nat Neurosci 2017, Klein).
- [[gehrlach-2019-aversive-state-processing-in-the]] — 후측 섬엽 혐오상태→CeA/BNST 하향제어 (Nat Neurosci 2019, Gogolla).
- [[livneh-2020-estimation-of-current-and-future]] — 섬엽 현재·미래 생리상태 이중 부호화 (Neuron 2020, Andermann).
- [[betley-2013-parallel-redundant-circuit-organization-for]] — ARC^AgRP 병렬·중복 투사 배선 (Cell 2013, Sternson).

교차연결: [[overview-cea-glp1r-food-safety-alarm]]에 CeA valence-밸브(Cai/Douglass)·피질 내수용 예측층(Gehrlach/Livneh) 통합(다층 7층으로 확장). 역링크: [[concept-central-amygdala-glp1r]]·[[concept-parabrachial-cgrp-alarm]]·[[concept-insula]]·[[concept-interoception]]·[[concept-arcuate-nucleus]]. index 355. 남은 raw 미처리 백로그 ~144건(별도 배치 예정).

---

## 2026-07-05 — lint (건강검진)

대량 ingest(신규 62) 후 자동 점검: **깨진 링크 0·고아 0·callout 누락 0·index 미등재 0·index→없는페이지 0·동일 title 중복 0**. 총 350 콘텐츠 페이지. 같은 PDF 4-페이지 공유는 편저서(behavioral neuroscience of motivation 2016) 정상 구조. 유일 약한연결 [[matsuda-2020-diet-and-feeding-behavior-of]](저관련)에 [[mueller-2025-privi-towards-general-purpose-video]]·[[ha-2024-hypothalamic-neuronal-activation-non-human]] 링크 추가로 고아 위험 해소. 수정사항 없음(그 외).

---

## 2026-07-05 — ingest W2 (GLP-1/incretin)

- **W2a 완료(5편 + 개념 [[concept-gip]])**: [[liskiewicz-2023-glucose-dependent-insulinotropic-polypeptide-regulates]](GIP→GABAergic 뉴런), [[hansford-2025-glucose-dependent-insulinotropic-polypeptide-receptor]](GIP→ME 올리고덴드로사이트·혈관투과성), [[liu-2025-gipr-ab-glp-1-peptide]](중추 GIPR+GLP-1R 요구), [[veniant-2024-a-gipr-antagonist-conjugated-to]](AMG133/maridebart, GIPR 길항+GLP-1 작용 phase1), [[rupp-2023-suppression-of-food-intake-by]](DMH Glp1r·Lepr 수렴 뉴런). 핵심: **GIPR agonism vs antagonism 역설**을 concept-gip에 정리.
- **W2b 완료(임상·리뷰 13편)**: 임상 [[aronne-2023-continued-treatment-with-tirzepatide-for]](SURMOUNT-4)·[[jastreboff-2025-once-monthly-maridebart-cafraglutide-for]](MariTide)·[[coppin-2022-does-glp-1-receptor-agonist]](liraglutide liking)·[[koide-2025-association-between-eating-behavior]](external eating). 리뷰 [[drucker-2023-beyond-the-pancreas-contrasting-cardiometabolic]]·[[scheen-2023-dual-gip-glp-1-receptor]]·[[muller-2022-gut-hormone-triple-agonists-clinical]]·[[alfaris-2024-glp-1-single-dual-and]]·[[jastreboff-2023-new-frontiers-obesity-treatment]]·[[tschop-2023-gut-hormone-based-pharmacology-novel]]·[[wan-2023-glp-1r-signaling-and-functional]]·[[gupta-2021-glucagon-like-peptide-1-and]]·[[cao-2024-hunting-for-heroes-brain]]. index GLP-1/GIP 클러스터 등록·카운트 328. 역링크는 별도 pass.
- **W3 완료(NPY-NAc 6편 + 개념 [[concept-npy-nucleus-accumbens]])**: [[tanaka-2021-role-of-neuropeptide-y-in]](리뷰)·[[van-den-heuvel-2015-neuropeptide-y-activity-in-nucleus]](Y1→지방섭식)·[[wang-2020-npy-alterations-induced-by-chronic]](Y5→morphine CPP)·[[yamada-2021-efferent-and-afferent-connections-of]](→LH 회로)·[[smith-2022-neuropeptide-y-modulates-excitatory-synaptic]](시냅스·사회·DPP-IV)·[[warthen-2019-neuropeptide-y-and-representation]](인간 salience). ARC NPY와 구분되는 별개 회로로 정리. index·카운트 335.
- **W4 완료(마지막, 13편 + 개념 2: [[concept-emotional-eating]]·[[concept-early-life-adversity]])**: 보상/FA(murray-2014·meye-2014·hone-blanchet-2014·hankir-2015·tellez-2016·derman-2018), 해마-NAc 식욕기억(trouche-2019·azevedo-2019), LH(petzold-2023·rossi-2023·shin-2023), 편도 해부(ghashghaei-2002), 저관련 영장류 생태(matsuda-2020, 📦기타). index·카운트 350.

**== "모두 ingest" 완료: 4웨이브 총 신규 ~72페이지(W1 18·W2 19·W3 7·W4 15 + 정독완료 2·overview 강화). ==** primate diet ecology(matsuda-2020)는 저관련으로 명시. 각 웨이브 역링크 별도 pass 완료(W4 pass 진행).

---

## 2026-07-05 — ingest (대량 배치 시작: 정독완료 2편 + food-toxicity 웨이브 착수)

`raw/`에 미처리 ≈50편 대량 추가 확인 → 주제별 웨이브로 처리 시작.
- **신규 2편(정독완료)**: [[vendruscolo-2026-neurobiology-of-negative-reinforcement]](Koob 음성강화·hyperkatifeia, Neuron 2026) + 개념 [[concept-negative-reinforcement-hyperkatifeia]]; [[fallon-2026-striatal-pathways-dissociably-control-action]](Yin, DLS dSPN/iSPN counting·steering, Nat Neurosci 2026).
- **W1 완료(13편+5개념)**: food 독성·혐오 감지 다층 경보. 신규 논문 — 후각(dong-2026·root-2014·howe-2026), 미각(wang-2018·jin-2021·schiff-2018), 뇌간 CGRP(palmiter-2018·campos-2018·campos-2016), 최후야(zhang-2021·zhang-2022), 장·면역(bai-2022·florsheim-2023). 신규 개념 — [[concept-cortical-amygdala]]·[[concept-taste-valence-coding]]·[[concept-parabrachial-cgrp-alarm]]·[[concept-area-postrema]]·[[concept-conditioned-taste-aversion]].
- **[[overview-cea-glp1r-food-safety-alarm]] 배경 강화**: "§0 왜 뇌에 food safety alarm이 필요한가(진화·비용 비대칭·잡식동물 딜레마)" + "다층·중복 경보 아키텍처(후각→미각→뇌간→최후야→장/면역→CTA, 확장편도 수렴)" 신설.
- 대기: W2 GLP-1/incretin ~15 · W3 NPY-NAc ~7 · W4 LH/보상/food-addiction ~10.

---

## 2026-07-04 — update ([[overview-cea-glp1r-food-safety-alarm]] 이론 강화)

Woods 1991 원문(18p) 재정독 후 "이론적 토대" 섹션 강화: 음식의 **두 위협 축(대사 + toxin)**, neophobia·learned safety·poison avoidance, 식사=경미한 stressor(접근 속 긴장), **두 겹 방어관문(입안 쓴맛 즉시 거부 + 사후 CTA 혐오학습)**, 그리고 "왜 이 food 거부감을 CeA^Glp1r가 담당하는가" 가설 근거(CeA=혐오/CTA 허브 + GLP-1=malaise 내수용 + godschall/duran 약리 정합)를 추가. 쓴맛-toxin·CeA^Glp1r-혐오학습 인과는 honest-gap(가설)으로 명시, 검증 실험(CTA·photometry) 함의 추가. 교차링크 [[concept-interoception]] 보강.

---

## 2026-07-04 — synthesis ([[overview-cea-glp1r-food-safety-alarm]])

사용자 요청 종합 페이지 작성: **CeA GLP-1R 뉴런 = "food safety alarm"** framework. [[woods-1991-the-eating-paradox-how]](음식=위협·혐오학습) + [[godschall-2026-a-brain-reward-circuit-inhibited]](NTS^Gcg→CeA^Glp1r→VTA→NAc DA↓) + [[duran-2026-the-central-amygdala-gates]] 종합. 생리적 역할(현재 섭취↓ + 혐오 연합학습으로 미래 섭취↓) vs GLP-1RA 약리 역할(약물 유발 food aversion→섭취↓ / 혐오정동·우울). 혐오학습·우울 인과는 honest-gap으로 명시(가설). 역링크 4(concept-central-amygdala-glp1r·godschall·duran-gates·woods-1991) + index Overviews 등록.

---

## 2026-07-04 — ingest (7/4 raw 신규 PDF 6편: NAc·CeA·orexin·endocannabinoid·eating paradox·PriVi)

병렬 정독 후 정리. **신규 11 + 갱신 32(역링크 30 + index + log)**.

**신규 논문(6)**:
- [[ravichandran-2026-spatiomolecular-mapping-reveals-anatomical]] — 인간 NAc Visium+snRNA-seq 아틀라스; D1/D2 [[concept-medium-spiny-neuron|MSN]] 연속 공간 gradient·OPRM1+ D1 island(오피오이드 hedonic 상관)·rodent 약물반응 transfer learning (Neuron 2026).
- [[duran-2026-the-central-amygdala-gates]] — 기존 프리프린트 [[duran-2026-the-central-amygdala-integrates]]의 **정식 출판판**(Mol Metab 2026); CeA^Glp1r=hedonic(HFD) 전담 확정.
- [[dong-2026-reward-prediction-is-encoded-by]] — LH [[concept-orexin-neurons|orexin]] 뉴런이 reward prediction·effort 부호화, 예측 시점 광억제가 동기 차단 (PNAS 2026).
- [[dipatrizio-2011-endocannabinoid-signal-in-the-gut]] — 구강 지방→미주→소장 [[concept-endocannabinoid-system|endocannabinoid]]→CB1 지방섭취 양성 피드백 (PNAS 2011).
- [[woods-1991-the-eating-paradox-how]] — 먹기=항상성 위협, [[concept-cephalic-phase-response|cephalic]] 예측방어로 tolerate; Woods 2016·NMPU 이론 원전 (Psych Review 1991).
- [[mueller-2025-privi-towards-general-purpose-video]] — PriVi: NHP 행동 영상 video foundation model(방법 인프라, appetite 회로 아님).

**신규 개념(5)**: [[concept-orexin-neurons]] · [[concept-endocannabinoid-system]] · [[concept-cephalic-phase-response]] · [[concept-medium-spiny-neuron]] · [[concept-spatial-transcriptomics]].

**주요 교차참조**: NAc→MSN/hedonic-hotspot/food-addiction/dopamine, orexin→LH/dopamine/barbosa/korotkova, endocannabinoid→fat-taste/li-2022/vagal, cephalic→interoception/incretin/woods-2016, CeA gates↔integrates(프리프린트↔출판판).

---

## 2026-07-04 08:00 — daily-digest
자동 ingest: 조회 4건 · ★추천 1 (Neuron 인간 NAc 공간전사체 아틀라스, PMID 42385698) · 일반 2 (Lancet NCD-RisC 비만 대사형질, Lancet 논평) · 제외 1 (지질학 'arcuate' 오매칭). Drive 업로드 0건(무료 OA PDF 미확보). Gmail 초안 생성.

---

## 2026-07-02 — ingest (fat sensing 4편: 구강·장·중추 지방 감지)

Claude chat에서 다운로드해 `raw/`에 추가된 fat 관련 PDF 4편 정리(2026-07-02 18:01 추가분). 8개 신규 + 7개 갱신 + index·log. 사용자 [[proposal-oral-fat-taste-pleasure-desire]]가 위험요인으로 flag했던 "구강 지방 수용체 정체" 공백을 정확히 채움.

**신규 논문(4)**:
- [[laugerette-2005-cd36-involvement-in-orosensory-detection]] — [[concept-cd36|CD36]]가 혀 미뢰의 구강 지방(LCFA) 미각 수용체 최초 규명; CD36-null=지방선호 소실(단·쓴맛 정상)·cephalic-phase 소화분비 (JCI 2005, Besnard).
- [[martin-2011-the-lipid-sensor-candidates-cd36]] — 미뢰 CD36(식이지방에 후전사 급감=sensory-specific satiety 유사) vs GPR120(불변) 역할 분리 (PLoS ONE 2011).
- [[moulle-2013-fatty-acid-transporter-cd36-mediates]] — 시상하부 VMN CD36가 지방산 감지→식이 억제(acyl-CoA 의존, β-산화 비의존) (PLoS ONE 2013, Magnan·Levin).
- [[li-2022-gut-brain-circuits-for-fat-preference]] — ★ 미각 비의존 gut-brain 지방 선호(TRPM5-KO도 형성); CCK-의존 VIP generalist([[concept-free-fatty-acid-receptors|GPR40/120]]) + CCK-비의존 TRPA1 fat-only 두 미주 경로; **liking(미각)≠wanting(gut-brain)** 명시 (Nature 2022, Zuker).

**신규 개념·인물(4)**: [[concept-cd36]](지방 translocase 3층 backbone) · [[concept-fat-taste]](지방맛/제6의 미각 hub) · [[concept-free-fatty-acid-receptors]](GPR40/GPR120) · [[person-zuker-charles]].

**핵심 통찰 — 부위·기능별 수용체 분업**: 지방 감지가 **구강(미뢰 CD36 필수)·장(gut-brain 선호엔 GPR40/120 필수·CD36 불요)·중추(VMH CD36)** 3층에서 같은 분자군을 다르게 사용. Li 2022가 CRISPR로 장 CD36 불요를 명시(구강 CD36 필수와 대비).

**갱신(역링크, 7)**: [[concept-vagal-afferent-neurons]](VIP·TRPA1 nodose 세포타입·두 경로) · [[concept-cck]](generalist 선호 전달자) · [[concept-flavor-nutrient-conditioning]] · [[concept-primary-reward-signals]] · [[concept-ventromedial-hypothalamus]](CD36 FA 감지) · [[concept-enteroendocrine-cells]] · [[proposal-oral-fat-taste-pleasure-desire]](수용체 정체 위험 해소). [[index.md]] 페이지수 268→276·날짜·🍽️ "지방 감지" 소절 신설·💡 개념·👤 인물 추가. raw/ 미수정.

---

## 2026-06-30 — ingest (2026-06-30 batch: POMC 글리코겐 · VP hedonic · NAc cue 도파민 · BLA ACh salience)

`raw/`에 추가된 2026-06-30 신규 PDF 4편 정리(중복 1건 제외: 세마글루타이드 hindbrain 논문은 기존 [[gao-2026-semaglutide-drives-weight-loss-through]]와 동일 재추가라 ingest 안 함). 8개 신규 + 6개 갱신 + index·log.

**신규 논문(4)**:
- [[gomez-valades-2026-glycogen-drives-the-sensory]] — POMC sensory(sight/smell) 활성이 뉴런 국소 글리코겐(Gys1) 연료 의존; AgRP 비의존 (Nat Metab 2026, Claret lab).
- [[wang-2026-ventral-pallidal-gabaergic-neurons]] — VP^GABA가 hedonic 섭식·HFD 비만 인과 통제(항상성 보존) (bioRxiv 2026, Kravitz·Creed).
- [[pascoli-2026-conditioned-accumbal-dopamine-transients]] — cue-유발 NAc 도파민=주관적 가치·중독 취약성 표지 (Nat Neurosci 2026, Lüscher).
- [[chen-2026-striatal-control-of-amygdalar]] — NAc D1/D2→SI 콜린성→BLA ACh가 현저성(salience) 양방향 통제·연합학습 제어 (Nat Neurosci 2026, Xiao).

**신규 개념·인물(4)**: [[concept-ventral-pallidum]] · [[concept-basal-forebrain-cholinergic]] · [[person-luscher-christian]] · [[person-kravitz-alexxai]].

**갱신(역링크)**: [[concept-pomc-neurons]] · [[concept-nucleus-accumbens]] · [[concept-dopamine-reward-system]] · [[concept-basolateral-amygdala]] · [[concept-hedonic-hotspot]] · [[concept-incentive-sensitization]]. [[index.md]] 페이지수 260→268·날짜 갱신·카테고리 추가(🧠 회로·🧩 인지·🍽️ 회로세포·🎯 도파민·👤 인물·💡 개념). raw/ 미수정.

---

## 2026-06-21 — other (최형진 소속 정정)

사용자 정정: 소속 한글명 오류 수정. **해부학교실 · 의과학과(Department of Biomedical Sciences) · 뇌인지과학과(Brain & Cognitive Sciences)**. (기존 'Department of Biomedical Sciences (생화학교실)'의 한글이 오역 → '의과학과'로 정정해 유지.) [[person-choi-hyung-jin]](소속 섹션·callout)·[[index.md]](인물 한 줄)·[[person-kim-meelim]](lab 소속) 수정. tomiyama-2019의 '생화학'은 일반 용어(소속 아님)라 유지. raw/ 미수정.

---

## 2026-06-21 — other (식락학 Ch 20 완성본: 일반 독자용 재작성)

사용자 요청: Ch 20 독자가 다양한 학부 전공이므로 "식품영양학도" 표현을 제거하고 일반 독자층용으로 재작성(쉬운 사례는 유지). `식락학 최형진 Ch 20 (완성본).docx`의 해당 12개 단락 교체 — 도입 제목 "이 장을 읽는 독자에게", 도입부 "전공이 무엇이든…", 20.9 "이론에서 일상으로"/"일상과 여러 분야에 적용", 사례 문단 "일상의 사례로 정리해 보자" 등. '식품영양(학도)' 잔여 0 확인. [[overview-sikrakhak-ch20-opioid-dopamine-liking-wanting]] 메모 갱신.

---

## 2026-06-21 — other (식락학 Ch 20 합본 완성본 docx 작성)

사용자 요청으로 원본 + 보강을 합치고 신규 내용을 추가한 **합본 완성본** 작성: `식락학 최형진 Ch 20 (완성본).docx`(프로젝트 루트, raw/ 밖; 약 3.3만 자, 41개 절). 신규: ①식품영양학도 도입/적용(처음·끝, 사례 포함) ②20.3.6 엔도르핀↔liking ③20.4.6 도파민 논쟁(RPE/유인현저성/vigor)·wanting=motivation·vigor dopamine ④20.7 NMPU 통합(Pleasure=liking·Motivation=wanting) + 오늘의 liking이 RL로 내일의 wanting을 만드는 기전([[weber-2025-interoceptive-origin-reinforcement-learning|Weber 2025 TiCS]] primary/proxy/secondary 인용). 보강 5블록을 본문 통합.

**갱신**: [[overview-sikrakhak-ch20-opioid-dopamine-liking-wanting]](합본 완성본 절·역링크 추가). 근거: [[concept-need-motivation-pleasure-utility]]·[[concept-dopamine-reward-system]]·[[adam-2026-dopamine-takes-hit-how-neuroscience]]·[[berridge-2023-separating-desire-from-prediction-of]]·[[weber-2025-interoceptive-origin-reinforcement-learning]]. 뇌부위 한글(영문) 병기; 원본 raw/ 미수정.

> 후속(동일자): 완성본 docx의 뇌부위 표기를 [[reference-sikrakhak-glossary|교재 표준 용어집]]에 맞춰 통일 — 복측 피개부→복측 피개영역(VTA), 편도→편도체(amygdala), 전전두피질→전전두엽(PFC), 섬피질→섬엽(insula).

---

## 2026-06-21 — ingest (식락학 교재 표준 용어집)

`raw/ng tech word list.xlsx`(식락학 교재 8인 공저 공식 용어 통일 인덱스, Shepherd *Neurogastronomy* 색인 기반)를 집필 참조용 reference 페이지로 정리. 사용자 지시: "식락학 textbook 작성할 때 쓰는 용어집".

**신규(1)**: [[reference-sikrakhak-glossary]] — 표기 스타일 규칙 9항(시트2) + 용어 192개(확정 170 / ⚠미확정 22, 교수별 제안·각주 후보 병기). type: reference.

**역링크 갱신**: [[overview-sikrakhak-book-project]](마일스톤 "용어 통일=Neurogastronomy 번역 인덱스"에 본 페이지 링크 + 관련 페이지). **index.md** Overviews 섹션 추가, 페이지 259→260. 원본 xlsx는 규칙상 미수정(읽기 전용).

> 참고: 향후 식락학 챕터 집필·보강(Ch 18/20/24/25 등)은 본 용어집을 1차 기준으로 적용. 기존 [[overview-sikrakhak-ch20-opioid-dopamine-liking-wanting|Ch 20 보강 원고]]의 일부 뇌부위 표기(예: VTA "복측 피개부")는 용어집 표준("복측 피개영역")과 차이 있어 차기 개정 시 정합 필요.

---

## 2026-06-21 — ingest (차세대 비만·대사 약물 임상 5건)

raw/에 추가된 2026 비만·대사 신약 임상 PDF 5건 ingest. 작용 기전별 hub + 5개 논문 페이지 신규 작성, 교차링크.

**신규(6)**: [[overview-next-gen-incretin-obesity-drugs-2026]](기전별 색인 hub) · [[le-roux-2026-survodutide-once-weekly-for]](survodutide glucagon/GLP-1 dual, NEJM SYNCHRONIZE-1, phase 3, 76주 −13.0%) · [[kaplan-2026-survodutide-in-adults-with]](survodutide MASLD, Nat Med SYNCHRONIZE-MASLD, phase 3, 간지방 ≥30%↓ 84.2%) · [[davies-2026-elecoglipron-an-oral-small]](elecoglipron/AZD5004 경구 소분자 GLP-1RA, Lancet VISTA, phase 2) · [[rosenstock-2026-oral-small-molecule-glp]](aleniglipron/GSBR-1290 경구 소분자 GLP-1RA, Nat Med ACCESS, phase 2b, 위약-보정 −11.3%) · [[rosenstock-2026-cagrilintide-semaglutide-cagrisema-as]](CagriSema amylin+GLP-1, Lancet REIMAGINE 3, phase 3a, T2D basal insulin add-on).

**역링크 갱신**: [[concept-glp-1]] · [[concept-incretin-effect]] · [[concept-melanocortin-system]] · [[lee-2017-glp-1-based-combination-therapy]] · [[kim-2025-mechanisms-of-glucagon-like-peptide]]. **index.md** 임상·DTx + Overviews 섹션 추가, 페이지 253→259.

미해결: `ng tech word list.xlsx`는 용어 목록으로 추정(논문 아님) — 사용자 확인 대기.

---

## 2026-06-21 — other (식락학 Ch 20 보강: 최근 추가 문헌 반영)

사용자 요청으로 식락학 Ch 20(‘좋아함’/‘갈망’)을 최근 ingest 문헌으로 보강. **보강 원고(docx) + 위키 갱신** 형태, 뇌 부위명 한글(영문) 병기.

**산출물(보강 원고)**: `식락학 최형진 Ch 20 보강.docx`(프로젝트 루트, raw/ 밖). 5블록 — ①20.5.4 ‘갈망≠예측’·incentive alliesthesia·소금욕구 ‘혐오를 원하기’([[berridge-2023-separating-desire-from-prediction-of|Berridge 2023]]), ②PIT 회로([[odoherty-2016-multiple-systems-for-the-motivational|O'Doherty 2016]]), ③인간 노력동기 EEfRT(Salamone/Treadway 2016), ④20.7.4 avolition vs anhedonia + 스트레스성 cue 증폭([[guerrero-hreins-2026-bed-nucleus-of-the-stria|Guerrero-Hreins 2026]]), ⑤참고문헌.

**갱신**: [[overview-sikrakhak-ch20-opioid-dopamine-liking-wanting]](20.4·20.5·20.7 보강 inline + 보강 원고 절 추가)·[[odoherty-2016-multiple-systems-for-the-motivational]](Ch20 역링크). 원본 `raw/식락학 최형진 Ch 20.docx`는 규칙상 미수정.

## 2026-06-21 — ingest (편저서 처리: Behavioral Neuroscience of Motivation 2016, hub + 선별 3장)

`raw/2016 Book Behavioral Neuroscience of Motivation.pdf`(Springer, Simpson & Balsam eds., 5부 21장 편저서)를 **hub + 선별 장** 방식으로 처리(사용자 선택). 중복 장은 hub에서 cross-link, 비중복·고관련 3장만 개별 추출.

**새 페이지 4**:
- 종합(책 hub): [[overview-behavioral-neuroscience-of-motivation-2016]] — 21장 색인 + 편집자 cost-benefit arbiter 통합 틀(=NMPU 동형).
- 장: [[woods-2016-regulation-of-the-motivation]] — 섭식 동기=학습 의존 조건적 과정; homeostatic↔non-homeostatic crosstalk·cue 신뢰도 구배·cephalic 예측 (Woods & Begg).
- 장: [[odoherty-2016-multiple-systems-for-the-motivational]] — 인간 goal-directed/habitual/Pavlovian 3계+arbitration; general/specific PIT·vmPFC goal-value·choking.
- 장: [[redish-2016-the-computational-complexity-of-valuation]] — 가치 다중성(측정법별 의사결정계)·common currency 거부·craving·contingency management.

**갱신**: [[concept-need-motivation-pleasure-utility]]·[[overview-appetite-energy-homeostasis]]·[[weber-2025-interoceptive-origin-reinforcement-learning]]·[[concept-digital-therapeutics]]·[[concept-orbitofrontal-cortex]]·[[concept-arcuate-nucleus]]·[[concept-lateral-hypothalamus]](역링크); `index.md`(총 253).

**완료**: 이로써 `raw/`의 모든 연구 자료가 위키에 반영됨(2016 책 중복본 `(1).pdf`는 동일 파일이라 별도 처리 불요).

## 2026-06-21 — ingest (Berridge 2023: desire ≠ prediction; 누락분 처리)

이전 배치에서 누락됐던 `raw/2023 Separating desire from prediction of outcome value.pdf` ingest.

**새 페이지 1**:
- 논문: [[berridge-2023-separating-desire-from-prediction-of]] — ‘갈망’(incentive salience)이 결과가치 예측·기억·‘좋아함’에서 완전히 분리됨을 두 반례(‘혐오를 원하기’ 소금욕구·‘고통을 원하기’ CeA ChR2)로 증명; incentive alliesthesia·MAIS 모델·중독/avolition; TD·예측처리 RL에 대한 동기-기반 반론 (Trends Cogn Sci 2023, Kent Berridge).

**갱신**: [[concept-liking-wanting]]·[[concept-incentive-sensitization]]·[[warlow-2021-incentive-motivation-wanting-roles]]·[[concept-dopamine-reward-system]]·[[adam-2026-dopamine-takes-hit-how-neuroscience]]·[[overview-sikrakhak-ch20-opioid-dopamine-liking-wanting]](역링크); `index.md`(총 249).

**미처리(사용자 확인 필요)**: `raw/2016 Book Behavioral Neuroscience of Motivation.pdf`(+중복본) — 단행본(edited volume)이라 단일 paper 페이지 부적합; ingest 방식 사용자 결정 대기.

## 2026-06-21 — ingest (BNST stress-food cue 7T + 인간 시상하부 공간전사체 atlas)

`raw/`에 추가된 2026 신규 논문 2편 ingest.

**새 페이지 3**:
- 논문: [[guerrero-hreins-2026-bed-nucleus-of-the-stria]] — 급성 스트레스가 인간 BNST→NAc·OFC·dmINS effective connectivity를 하향조절; BNST→OFC 강도가 주관적 스트레스 예측(7T fMRI+DCM gustometer, Nat Commun 2026).
- 논문: [[yang-2026-spatial-transcriptomics-identifies-the-molecular]] — 성인 인간 시상하부 공간전사체 3D 아틀라스(serial ST+HD+MERFISH+snRNA 243k 세포, MRI 정합); 25영역·59뉴런타입·DMH 종간 비보존·Ltu 인간특이·GWAS 질환 niche (Research Square preprint 2026, Jun Yan lab).
- 개념: [[concept-bed-nucleus-stria-terminalis]] — 확장편도 stress↔reward 허브 hub.

**갱신**: [[concept-interoception]]·[[concept-nucleus-accumbens]]·[[concept-insula]]·[[concept-orbitofrontal-cortex]]·[[concept-lateral-hypothalamus]]·[[giovanniello-2025-a-dual-pathway-architecture-for]]·[[tomiyama-2019-stress-and-obesity]](BNST 역링크); [[concept-hypomap]]·[[littleton-2025-from-identity-to-function-unveiling]]·[[concept-arcuate-nucleus]]·[[concept-dorsomedial-hypothalamus]](DMH 비보존)·[[concept-paraventricular-nucleus]]·[[concept-ventromedial-hypothalamus]](atlas 역링크); `index.md`(총 248).

## 2026-06-20 — other (Ch 20 원본 raw/ 이동 + source 경로 정정)

`식락학 최형진 Ch 20.docx`를 프로젝트 루트 → `raw/`로 이동(원본 위치 규칙 정합). [[overview-sikrakhak-ch20-opioid-dopamine-liking-wanting]]의 `source` 및 본문 경로를 `raw/식락학 최형진 Ch 20.docx`로 갱신. 재-ingest 불필요(기존 정리본이 docx 전 섹션과 일치 확인).

## 2026-06-20 — ingest + 챕터 작성 (식락학 Ch 20: 오피오이드·도파민 / liking·wanting)

`raw/`에 추가된 Berridge 계열 보상 논문 10편을 ingest하고, 사용자 저작 식락학 교재 **Ch 20**(오피오이드 및 도파민 시스템: ‘좋아함(liking)’과 ‘갈망(wanting)’의 신경화학) 본문을 작성. 본문은 `[9장-2 본문]`·`12장 본문.docx`의 분량·형식을 참고(목차+번호 절+author-year 인용+맺음말+참고문헌; ~17,900자).

**산출물(챕터)**: `식락학 최형진 Ch 20.docx` (프로젝트 루트). raw/ 원본은 위키 규칙상 미수정.

**새 페이지 14**:
- 종합(챕터 정리): [[overview-sikrakhak-ch20-opioid-dopamine-liking-wanting]]
- 개념 3: [[concept-liking-wanting]], [[concept-hedonic-hotspot]], [[concept-incentive-sensitization]]
- 논문 10: [[berridge-2009-dissecting-components-of-reward]], [[nguyen-2021-positive-affect-nature-and-brain]], [[morales-2020-liking-and-wanting-in-eating]], [[kringelbach-2015-the-pleasure-of-food]], [[robinson-2008-the-incentive-sensitization-theory]], [[robinson-2025-incentive-sensitization-30-years]], [[warlow-2021-incentive-motivation-wanting-roles]], [[guillaumin-2023-disentangling-the-role-of-nac]], [[soutschek-2021-opioid-antagonism-modulates-wanting]], [[korb-2020-dopaminergic-and-opioidergic-regulation]]

**갱신**: [[overview-sikrakhak-book-project]](Ch 20 ✅), [[concept-dopamine-reward-system]], [[concept-need-motivation-pleasure-utility]], [[concept-nucleus-accumbens]], [[concept-food-addiction]], [[concept-appetitive-consummatory-phases]], [[concept-orbitofrontal-cortex]], [[salamone-2012-mysterious-motivational-functions-mesolimbic]], [[person-choi-hyung-jin]], [[proposal-pomc-endorphin-food-pleasure]], [[proposal-oral-fat-taste-pleasure-desire]] 역방향 링크 추가. `index.md` 갱신(총 245페이지, 🎯 도파민 섹션에 liking/wanting cluster 추가).

핵심 framing: 도파민=‘갈망’(좋아함 아님), 오피오이드/[[concept-hedonic-hotspot|핫스폿]]=‘좋아함’; ‘갈망’이 ‘좋아함’ 없이 폭주=중독·과식([[concept-incentive-sensitization|유인-감작]]); 비만은 동기 회로 신경화학 불균형. → 사용자 lab [[concept-need-motivation-pleasure-utility|NMPU]] Pleasure·Motivation 축과 직결.

---

## 2026-06-17 — other (AgRP 입력 지도에 DMH GLP-1R 입력 추가)

사용자 요청 "DMH GLP-1R neuron이 AgRP 입력으로 작동하는 내용 추가". [[concept-npy-agrp-neurons]] 입력 회로 지도 표에 **DMH^GLP-1R → ARC NPY/AgRP** 행 추가(GABA 단일시냅스 IPSC 8/8·LepR 부분 공발현·preingestive cognitive satiation·GLP-1RA 표적) — 사용자 lab [[kim-2024-glp-1-increases-preingestive-satiation|Kim 2024 Science]] CRACM·회로 epistasis 근거. 프레임 단락을 "**DMH GABAergic 억제 cluster(부분 중첩)**"로 확장: ①sight(Garfield)·②taste(Aitken)·③cognitive satiation(Kim, GLP-1R)이 Lepr/Glp1r 공발현 한 집단의 모드, GLP-1RA가 이 억제를 식이 시 잠재화해 AgRP를 끔(약리 layer). 신규 페이지 없음, web 미사용.

## 2026-06-17 — query (AgRP 입력 종합 → concept-npy-agrp 보강)

사용자 "AgRP 입력 정리". 최근 4편 ingest([[krashes-2014-an-excitatory-paraventricular-nucleus-to|Krashes 2014]]·[[garfield-2016-dynamic-gabaergic-afferent-modulation|Garfield 2016]]·[[aitken-2024-negative-feedback-control-of-hypothalamic|Aitken 2024]]·[[walker-2026-a-hypothalamic-circuit-for|Walker 2026]]) + 호르몬·gut 입력을 종합. 보관 방식 AskUserQuestion → **별도 overview 대신 [[concept-npy-agrp-neurons]]에 통합** 선택.

[[concept-npy-agrp-neurons]]에 **"★ 입력 회로 지도(synaptic afferents)" 섹션 신설**: rabies 정량(ARC 38%·DMH 26%·PVH 18%) + 흥분/억제×예측/실시간 6입력 표(PVH TRH/PACAP·PVH^Sim2·DMH Glu·vDMH^LepR/pDYN·DMH^LepR·ARC^Bnc2) + Walker 3 feedforward 성분 + "PVH 흥분=인지·예측 vs DMH^LepR 억제=감각 피드백(sight/taste)" 비대칭 + AgRP=Need 계산 통합. 기존 호르몬 표에 위장관 post-ingestive·fructose(McKnight) 2행 추가. updated 2026-06-17. 신규 페이지 없음(231 유지), web 미사용.

## 2026-06-17 — ingest (신규 raw 2편 — 맛→DMH^LepR→AgRP 음성 피드백[Knight 2024] + LHA 종합 리뷰[Chen 2025])

직전 ingest 후 사용자가 추가한 신규 raw 2편 ingest. 나머지 UNREFERENCED 11건은 기존 중복 사본.

새 페이지 3:
- [[aitken-2024-negative-feedback-control-of-hypothalamic]] (Neuron 2024, Aitken…**Zachary A. Knight**; UCSF/HHMI, OA) — 음식의 **맛(gustatory)**이 섭취 bout마다 ARC^AgRP를 일시 억제(post-ingestive와 독립: 물 무효, 비칼로리 sucralose·aMDG·silicone oil도 유발, CCK 길항제 무효). 폐루프 광유전으로 이 dip 차단→**satiation 지연·섭취↑**(bout 수↑=incentive value, 크기 불변=palatability). 상류 **DMH^LepR**이 sweet/fat 맛에 dose-dependent 동조(AgRP **거울상**, licking에 time-locked)·맛+위장관 영양 통합(영양분이 맛 응답 potentiate)·화학유전 억제 시 섭취↑. **맛=food reward이자 satiation 음성 피드백** 양면 입증.
- [[chen-2025-the-integrated-function-of-the]] (Cells 2025, Chen…Cui·Jiang; Peking U. 중국, OA) — **LHA 세포타입(>30 subtype)·에너지 항상성 종합 리뷰**(비-사용자 lab 레퍼런스). Vgat("engine"=섭식 추동)/Vglut2("brake"=억제)/orexin("check-engine light") 프레임; LHA^Lepr이 hunger 압력에도 food-seeking 축소→social 우선, LHA^Nts가 갈증>배고픔 우선; orexin/MCH glucose 반대 감수성·BAT/WAT; LHA→VTA/NAc/LHb reward interface.
- [[person-knight-zachary]] — 인물 hub(grove-2022·grove-2025·aitken-2024 3편 Knight lab). 시상하부 실시간 dynamics·예측 신호·자원별 DA.

핵심 합성: **Aitken 2024 = [[garfield-2016-dynamic-gabaergic-afferent-modulation|Garfield 2016(vDMH^LepR→AgRP 억제)]]의 taste·meal-termination 버전** — 같은 DMH^LepR→AgRP 억제 회로를 Garfield는 음식 sight/가치, Aitken은 taste(gustatory)·bout-by-bout satiation으로. 사용자 [[concept-need-motivation-pleasure-utility|NMPU]]에서 **orosensory가 Pleasure(liking=bout 크기)와 satiation 음성피드백(incentive value=bout 수)을 분리** 부호화하는 회로 증거. Chen 2025는 사용자 lab [[cheon-2025-lateral-hypothalamus-and-eating-cell|LH review]]·[[korotkova-2026-balancing-acts-lateral-hypothalamic|Korotkova arbitration]]과 짝이 되는 LH taxonomy 레퍼런스. Knight lab 3편이 person hub로 수렴(grove-2022/grove-2025 "Knight lab" 언급을 인물 링크로 보강).

백링크·갱신: [[index|index.md]] 🍽️ 회로·세포·👤 인물 등재, 페이지 수 **228→231·갱신일 2026-06-17**. Aitken→[[garfield-2016-dynamic-gabaergic-afferent-modulation]]·[[concept-dorsomedial-hypothalamus]]·[[concept-npy-agrp-neurons]]·[[concept-need-motivation-pleasure-utility]]·[[concept-flavor-nutrient-conditioning]]·[[thanarajah-2019-food-intake-recruits-orosensory]]·[[grove-2025-lateralized-pathway-associating-nutrients]]·[[concept-appetitive-consummatory-phases]]에 역링크. Chen→[[concept-lateral-hypothalamus]]·[[cheon-2025-lateral-hypothalamus-and-eating-cell]]·[[korotkova-2026-balancing-acts-lateral-hypothalamic]]에 역링크. person-knight→grove-2022·grove-2025. raw PDF 미접촉.

## 2026-06-17 — ingest (신규 raw 1편 — PVH TRH/PACAP→AgRP 흥분성 hunger 회로, Krashes/Lowell 2014)

직전 ingest 후 사용자가 추가한 신규 raw 1편 `2014 Nature. An excitatory paraventricular nucleus to AgRP neuron circuit that drives hunger.pdf`(6쪽 정독). 나머지 UNREFERENCED 11건은 기존 중복 사본.

새 페이지 1:
- [[krashes-2014-an-excitatory-paraventricular-nucleus-to]] (Nature 2014, **Michael J. Krashes**…**Bradford B. Lowell**; BIDMC/Harvard) — 광견병 추적+CRACM+화학유전으로 **PVH의 TRH⁺/PACAP⁺ 글루타메이트성 뉴런 → ARC^AgRP** 강력 단일시냅스 흥분(글루타메이트+PACAP-PAC1)을 동정, **"PVH=satiety center" 통설 반전**. PVH 입력이 DMH보다 ~3배 강함(0% vs ~32% failure). satiety 마커(PDYN/OXT/AVP/CRH)는 무연결, TRH·PACAP만 연결. 역방향 AgRP→PVH satiety GABA 억제(55% IPSC) = **상호 hunger 회로**(이 reciprocal 억제가 과거 PVH orexigenic 역할을 놓친 이유). hM3Dq TRH^PVH/PACAP^PVH 활성→AgRP Fos↑·섭식↑(occlusion: AgRP 억제 시 소실=AgRP 경유), hM4Di 억제→dark-cycle 섭식↓(필요성).

핵심 합성: **Lowell lab AgRP 회로 3부작 완성** — ① Krashes 2014(흥분성 PVH TRH/PACAP→AgRP, 출발점) → ② [[garfield-2016-dynamic-gabaergic-afferent-modulation|Garfield 2016]](억제성 vDMH^LepR→AgRP, 음식 cue 가치) → ③ [[walker-2026-a-hypothalamic-circuit-for|Walker 2026]](PVH^Sim2=Krashes의 Trh/Adcyap1 뉴런 **분자 정제**, 예측·맥락 cue). Walker의 PVH^Sim2가 바로 본 논문 TRH/PACAP^PVH 뉴런의 Sim2⁺ 부분집합. PVH를 **흥분/억제 양극 회로**로 재정의한 1차 자료 → 사용자 [[concept-paraventricular-nucleus|PVH]]·[[concept-npy-agrp-neurons|AgRP]] 회로 backbone. [[walker-2026-a-hypothalamic-circuit-for]]·[[concept-paraventricular-nucleus]]의 bare "Krashes 2014" 언급을 wikilink로 승격.

백링크·갱신: [[index|index.md]] 🍽️ 회로·세포 등재, 페이지 수 **227→228**. [[concept-paraventricular-nucleus]]·[[concept-npy-agrp-neurons]]·[[concept-arcuate-nucleus]]·[[concept-dorsomedial-hypothalamus]]·[[walker-2026-a-hypothalamic-circuit-for]]·[[garfield-2016-dynamic-gabaergic-afferent-modulation]]·[[person-lowell-bradford]]에 역링크. raw PDF 미접촉.

## 2026-06-17 — ingest (신규 raw 1편 — vDMH^LepR/pDYN GABAergic→AgRP 억제 입력, Garfield/Lowell 2016)

직전 ingest 후 사용자가 추가한 신규 raw 1편 `2016 Nature Neuroscience. Dynamic GABAergic afferent modulation of AgRP neurons.pdf`(7쪽 정독). 나머지 UNREFERENCED 11건은 모두 기존 중복 사본(변동 없음).

새 페이지 1:
- [[garfield-2016-dynamic-gabaergic-afferent-modulation]] (Nat Neurosci 2016, Garfield…**Bradford B. Lowell**·Krashes·Andermann; BIDMC/Harvard) — ARC^AgRP의 preconsummatory suppression(음식 cue 시 식전 급감)을 매개하는 **상류 억제 회로 = 복측 DMH의 LepR/pDYN GABAergic 뉴런(vDMH^LepR/pDYN)**. CRACM: vDMH^LepR→AgRP **100%** vs POMC **9%** vs 비-AgRP **5%** = 고도 선택적 단일시냅스 억제(GABA). 광유전 vDMH^LepR→ARC 자극 → dark-cycle 식이 ~88%↓·인공 포만(충분, 그러나 화학유전 silencing은 무변 = 불필요). ★거울상: vDMH^LepR는 음식 탐지 시 *빠르게 활성*(소비 이전·에너지 상태 의존)하고 **음식 가치·질 부호화**(큰 pellet>작은 것, 초콜릿>chow). vDMH^pDYN(LepR의 56%)은 AgRP 95% 억제·POMC 0%인 subset. 배측 DMH^LepR(glutamatergic·EE)과 구별.

핵심 합성: **방금 ingest한 [[walker-2026-a-hypothalamic-circuit-for|Walker 2026]](PVH^Sim2 흥분성 입력)의 거울상** — 같은 Lowell lab. 음식 cue 시 AgRP는 *흥분성 PVH^Sim2 입력↓ + 억제성 vDMH^LepR 입력↑* **양방향**으로 꺼진다(Walker가 본 논문을 억제 성분으로 인용). 음식의 **가치·질**을 식전에 부호화하는 점은 [[concept-need-motivation-pleasure-utility|NMPU]] Utility/Pleasure 신호를 Need(AgRP) 회로로 전달하는 회로 증거. [[concept-dorsomedial-hypothalamus|DMH]] 페이지의 bare "Garfield 2016" 언급을 wikilink로 승격.

백링크·갱신: [[index|index.md]] 🍽️ 회로·세포 등재, 페이지 수 **226→227**. [[concept-dorsomedial-hypothalamus]]·[[concept-npy-agrp-neurons]]·[[concept-arcuate-nucleus]]·[[concept-leptin]]·[[concept-need-motivation-pleasure-utility]]·[[concept-appetitive-consummatory-phases]]·[[walker-2026-a-hypothalamic-circuit-for]]·[[person-lowell-bradford]]에 역링크. raw PDF 미접촉.

## 2026-06-17 — ingest (신규 raw 1편 — PVH^Sim2→ARC^AgRP 미래 에너지 예측 회로, Lowell lab)

raw 전수 대조(wiki 142개 source 필드 vs raw 153 PDF/docx)로 미정리분 식별. UNREFERENCED 12건 중 11건은 중복 사본(`1.pdf`·`(2)`·`(supp)/(suppl)`·smart-quote 미스매치=guo-2023·"2026 Nature.A brain..."=godschall-2026)·동일 논문 재명명(`2021 Deep brain stimulation for obesity or binge-eating behavior.pdf`=[[roh-2021-deep-brain-stimulation-for|roh-2021]] JKSFN overview 사본, 1쪽 확인). **진짜 신규 1편만 ingest**: `A hypothalamic circuit for anticipating future changes in energy balance.pdf`(12MB, Neuron 2026, 14쪽 정독).

새 페이지 2:
- [[walker-2026-a-hypothalamic-circuit-for]] (Neuron 2026, Walker…**Bradford B. Lowell**; BIDMC/Harvard) — 전측 PVH의 **Sim2⁺ Trh/Adcyap1 흥분성 소집단(PVH^Sim2)**이 ARC^AgRP에 단일시냅스 흥분(글루타메이트+PACAP, Npy⁺ ~40% 연결)을 주고 섭식을 구동. ★핵심: PVH^Sim2는 **식전 외부 감각 cue로 억제**(수 초, first bite 이전·음식 특이)되나 **post-ingestive 신호엔 무반응**(위내 Ensure·위 팽창·IP leptin·IP ghrelin ✗ ↔ AgRP는 반응) = gut/호르몬 feedback과 분리된 **외부 예측 채널**. **먹이 제거·탐색 실패(FED3)**가 PVH^Sim2·AgRP를 음의 에너지 균형 도달 *이전*에 빠르게 활성; PVH^Sim2 억제(hM4Di/Trh-Cre)가 단식 초기 AgRP 상승을 **지연**(τ +1.8~2 h) = AgRP 빠른 활성의 feedforward 구동원. 입력=피질 ACC·**복측 해마(CA1/ProS-v 최상위, CRACM 특이)**·LS·BNST·MeA(인지·맥락). 만성 silencing(TeNT)→섭취·체중·체지방 지속 감소(장기 ad libitum 필수).
- [[person-lowell-bradford]] — 교신저자 인물 hub(AgRP/POMC·PVH 회로 인과 분해 현대 표준). 본 wiki 첫 등장.

핵심 합성: 사용자 lab [[kim-2024-normative-framework-dissociates-need|AgRP=Predicted Deficit(Need)]] 이론에 **상류 회로 기질** 제공 — Need가 *내부 feedback*뿐 아니라 **외부 인지·맥락 예측**으로 구동됨을 인과 입증([[concept-need-motivation-pleasure-utility|NMPU]] Need 축 확장). [[mcknight-2026-attenuated-hypothalamic-response-to|McKnight 2026(영양소 정체)]]와 함께 "AgRP=feedforward 예측기" 그림 보강. 복측 해마→PVH^Sim2는 [[concept-hippocampus-feeding|해마-섭식 축]]을 hunger 회로로 직접 연결. 치료=다이어트 후 체중 유지 cell-type 표적.

백링크·갱신: [[index|index.md]] 🍽️ 회로·세포·👤 인물 등재, 페이지 수 **224→226·갱신일 2026-06-17**. [[concept-npy-agrp-neurons]]·[[concept-paraventricular-nucleus]]·[[concept-arcuate-nucleus]]·[[kim-2024-normative-framework-dissociates-need]]·[[concept-need-motivation-pleasure-utility]]·[[concept-hippocampus-feeding]]·[[mcknight-2026-attenuated-hypothalamic-response-to]]에 역링크. raw PDF 미접촉(읽기 전용).

## 2026-06-15 — other (연구계획서 신규 — 배고픔=Need 축 부호화·인간 번역)

사용자 요청 "배고픔 연구계획서". 방향 확인(AskUserQuestion): **배고픔=Need 신경 부호화·인간 번역** / **과학 상세 버전**. 기존 8과제와 비중복이 되도록 Need 축만 정면으로 다룸.

새 페이지 1: [[proposal-hunger-need-encoding-human-translation]] — 배고픔을 '영양소 정체 기반 미래 에너지 결핍 예측(Need)'으로 재정의. Aim 1(마우스): [[kim-2024-normative-framework-dissociates-need|AgRP=Need]]에 [[mcknight-2026-attenuated-hypothalamic-response-to|영양소 정체(McKnight)]] 항을 더한 확장 normative model + AgRP photometry·[[concept-activity-molecular-registration|CaRMA/TRU-FACT]]. Aim 2(인간): 내측시상하부 7T fMRI + [[cummings-2001-preprandial-rise-in-plasma-ghrelin|ghrelin 식전 surge]] + 노력 분리(Need↔Motivation) + GLP-1RA 가역성. Aim 3(인간 침습): [[talakoub-2017-lateral-hypothalamic-activity-indicates|LHA hunger=beta/gamma]]를 Need biomarker로 정식화 + [[ha-2024-hypothalamic-neuronal-activation-non-human|NHP]] 접지. [[proposal-nmpu-human-translation|4축 통합 번역]]의 Need 축 심화·선행.

백링크·갱신: [[index|index.md]] 🔬 연구계획서 이론·계산 NMPU에 등재. [[overview-research-proposals]] 마스터표 #9 추가(과제 9·페이지 15로 갱신)·그룹·mermaid·관련페이지. 역링크 추가: [[kim-2024-normative-framework-dissociates-need]]·[[concept-need-motivation-pleasure-utility]]·[[mcknight-2026-attenuated-hypothalamic-response-to]]·[[talakoub-2017-lateral-hypothalamic-activity-indicates]]. 위키 내부 근거만 사용(web 미사용), raw 미접촉.

## 2026-06-14 — ingest (신규 raw 2편 — gut-brain × 시상하부: fructose AgRP 구심성 + POMC 원심성 장 SGLT1)

raw 2026-06-14 추가 PDF 2편 ingest. 둘 다 22–52쪽·**>20MB로 Read 불가** → pypdf로 텍스트 추출 후 정독(`_tmp_fructose.txt`·`_tmp_pomc.txt`). gut-brain×시상하부 한 쌍(구심성 vs 원심성).

새 페이지 3:
- [[mcknight-2026-attenuated-hypothalamic-response-to]] (Neuron 2026, McKnight…de Lartigue·**Alhadeff**; Monell+UPenn, OA) — **AgRP는 칼로리 아닌 영양소 정체**에 반응: 등칼로리 fructose가 glucose보다 AgRP 억제 훨씬 약함(농도·경로·경험 무관). 약한 억제는 단기 섭취 불변(장 팽만이 보상)이나 **food preference 지시**(graded AgRP 억제→선호; HFCS는 glucose 첨가로 선호·억제↑). 기전=fructose→**PYY**(+GLP-1)→**말초 Y2R(Npy2r)·미주 구심성**→AgRP 억제(vagotomy·Y2R+ VAN ablation이 소실); **glucose=척수 구심성**과 분리.
- [[lim-2026-hypothalamic-pomc-neurons-regulate]] (Nat Commun 2026, Lim…**Min-Seon Kim**; Asan/Ulsan 한국, OA) — ARC POMC **PKA→α-MSH→MC4R(DMV 미주 운동핵)→부교감→장 SGLT1↓→포도당 흡수↓·대변 배설↑** 원심성 회로가 인슐린 비의존적으로 식후 혈당↓. PKA 항진(Prkar1a 결손)은 비만+고코르티솔(뇌하수체 off-target, ARC-국한 조작은 체중 무변). OGTT만 개선(IVGTT 정상)=장 기전, GLP-1 무변=incretin 비의존. **세마글루타이드 혈당강하가 POMC PKA 의존**(tirzepatide 비의존, 체중감량은 둘 다 무관).
- [[person-kim-min-seon]] — 교신저자 인물 hub. 시상하부→말초 자율신경 대사 회로(한국 Asan/Ulsan).

핵심 합성: 둘 다 gut-brain×시상하부지만 **방향이 상보** — McKnight=장→뇌 **구심성**(AgRP 영양 감지), Lim=뇌→장 **원심성**(POMC가 장 흡수 제어). McKnight는 [[concept-need-motivation-pleasure-utility|NMPU]] Need=영양소 정체 예측을 정교화하고 [[grove-2025-lateralized-pathway-associating-nutrients|Grove 2025]]·[[weber-2025-interoceptive-origin-reinforcement-learning|Weber 2025]] "영양소 정체" 패러다임과 정합. Lim은 사용자 lab [[kim-2025-mechanisms-of-glucagon-like-peptide|뇌 GLP-1R cAMP-PKA 리뷰]]의 POMC PKA 가지를 회로로 구체화하고 [[gao-2026-semaglutide-drives-weight-loss-through|Gao 2026]](체중=AP)와 **혈당 vs 체중 분업** 시사.

백링크·갱신: [[index|index.md]] 🍽️ 회로·세포·👤 인물 등재, 페이지 수 **220→223·갱신일 2026-06-14**. McKnight→[[concept-npy-agrp-neurons]]·[[concept-vagal-afferent-neurons]]·[[concept-pyy-3-36]]·[[concept-arcuate-nucleus]]·[[de-lartigue-2026-critical-role-gut-brain-signalling]]에 역링크. Lim→[[concept-pomc-neurons]]·[[concept-dorsal-vagal-complex]]·[[concept-mc4r]]·[[concept-arcuate-nucleus]]·[[kim-2025-mechanisms-of-glucagon-like-peptide]]·[[gao-2026-semaglutide-drives-weight-loss-through]]에 역링크. raw PDF 미접촉(읽기 전용). ⚠️ 추출 임시파일 `_tmp_*.txt`는 wiki 외부(루트)라 평면구조 무관.

## 2026-06-10 — ingest (신규 raw 1편 — VTADA→LH outcome-specific 회로 + 메스암페타민, Sharpe lab)

raw 2026-06-10 추가 PDF 1편 ingest. `2026 Neuron (Sharpe) Methamphetamine potentiates ... hypothalamic-dopamine circuit.pdf`(22쪽 본문 + STAR Methods 정독). 직전 ingest(2026-06-02 Cal-Light/CaRMA) 이후 유일 신규 raw.

새 페이지 2:
- [[hoang-2026-methamphetamine-potentiates-the-use-of]] (Neuron 2026, Hoang…**Sharpe**; UCLA+Sydney, OA) — ① 역방향 **VTADA→LH** 투사(LH-투사 VTA 뉴런 ~64% TH+, D1/D2 국소 조절)가 cue–**특정 결과(outcome-specific)** 학습·의사결정(PIT)에 **필요·충분**(disconnection 이중해리: VTADA가 말하는 LH 표적은 **LH^GABA가 아닌** 다른 집단). ② LH 도파민은 cue-onset RPE 아닌 **보상 근접 ramp**(보상 근접 cue 편향 = Sharpe "cognitive LH"). ③ **메스암페타민 자가투여**가 outcome-specific PIT 강화(자가투여량과 R²=0.908) + LH-VTA **양방향 강화**(LH→VTA ICSS↑, VTA→LH↑) + LH 도파민 학습신호 증폭 → 중독 **habit 이론(무표상 자동성) 반박**.
- [[person-sharpe-melissa]] — 교신저자 인물 hub. "cognitive lateral hypothalamus" framework·도파민 결과-특이적·model-based 학습 신호 진영.

핵심 합성: 본 wiki가 정립한 **LH GABA→VTA**(정방향; [[grove-2022-dopamine-subsystems-track-internal|Grove 2022]] water reward·Nieh 2015)의 **역방향 VTADA→LH**를 인과로 채움. LH 도파민의 비-RPE ramp는 [[adam-2026-dopamine-takes-hit-how-neuroscience|RPE 논쟁]]에 회로-특이적 변형 추가. cue가 **target-dependent Motivation**(결과 표상)을 얻는다 = [[concept-need-motivation-pleasure-utility|NMPU]] Motivation 축 회로 기질. 중독·과식의 voluntary-control 가능성·LH 표적 함의 → [[concept-food-addiction]]·[[concept-loss-of-control-eating]]·[[lee-2025-hijacked-brain-modern-obesity-cue|hijacked brain]] 연결. ⚠️ 약물(메스) 모델 — 음식 cue 일반화는 가설.

백링크·갱신: [[index|index.md]] 🎯 도파민(Heterogeneity/cell types)·👤 인물 등재, 페이지 수 **218→220·갱신일 2026-06-10**. [[concept-lateral-hypothalamus]]·[[concept-dopamine-reward-system]]·[[concept-need-motivation-pleasure-utility]]·[[grove-2022-dopamine-subsystems-track-internal]]·[[concept-basolateral-amygdala]]·[[concept-orbitofrontal-cortex]]·[[concept-nucleus-accumbens]]·[[concept-food-addiction]]·[[concept-loss-of-control-eating]]에 역링크. raw PDF 미접촉(읽기 전용).

## 2026-06-08 — other (새 proposal #8 — 구강 지방 맛 쾌락·욕망)

사용자 요청: "입에서 느끼는 지방 맛 감지가 음식 쾌락과 욕망 현상에 미치는 역할" 연구계획서.

새 페이지 1 (type: proposal):
- [[proposal-oral-fat-taste-pleasure-desire]] — 구강 지방(orosensory)이 쾌락(liking)·욕망(wanting)을 구동하는지, **post-oral 영양(Utility)** 과 인과 분리. 근거: [[thanarajah-2019-food-intake-recruits-orosensory|Thanarajah 2019]](orosensory vs post-ingestive DA; wanting↔즉시 insula/해마/ACC DA 양의 상관·putamen 음의 상관)·[[grove-2025-lateralized-pathway-associating-nutrients|Grove 2025]](fat post-oral GPR40/120/CD36→VTA-DA-CCK→aBLA)·[[concept-primary-reward-signals|Weber 2025]](proxy vs primary)·[[concept-flavor-nutrient-conditioning|FNC]](taste≠reinforcer). 중심 가설 = 구강 지방은 Pleasure·Motivation 초안, Utility가 reshape. Aim 1(sham-feeding/IG bypass + GRAB-DA insula/aBLA)→2([[concept-activity-molecular-registration|CaRMA·TRU-FACT]]+[[hyun-2022-tagging-active-neurons-by|Cal-Light]] liking/wanting 인과)→3(인체 PET/fMRI+GLP-1RA+[[ha-2024-hypothalamic-neuronal-activation-non-human|NHP]]). **정직한 gap**: 위키는 GPR40/120/CD36를 gut sensor로 문서화 → lingual 작동은 가설로 검증, 실패 시 orosensory DA 회로 분리에 의존. 식락학 Ch 20·24 backbone. [[proposal-pomc-endorphin-food-pleasure|#7]]과 Pleasure 축 상보.

백링크·갱신: [[index|index.md]] 🔬 연구계획서(이론·NMPU)·페이지 수 **217→218**. [[thanarajah-2019-food-intake-recruits-orosensory]]·[[grove-2025-lateralized-pathway-associating-nutrients]]·[[concept-flavor-nutrient-conditioning]]·[[concept-primary-reward-signals]]·[[concept-need-motivation-pleasure-utility]]·[[person-choi-hyung-jin]]에 역링크. [[overview-research-proposals|비교 hub]] #8 추가. 연구계획서 **8과제(과학 8 + 중견 6 = 14 페이지)**.

## 2026-06-08 — other (새 proposal #7 — POMC β-endorphin 음식 쾌락)

사용자 요청: "POMC neuron에서 만드는 endorphin이 음식 쾌락과 만족을 주관하는 역할" 연구계획서.

새 페이지 1 (type: proposal):
- [[proposal-pomc-endorphin-food-pleasure]] — ARC POMC의 **α-MSH–β-endorphin 이원 분비**가 음식 쾌락(liking)·만족([[concept-need-motivation-pleasure-utility|NMPU]] Pleasure)을 부호화하는지 세포·회로·인과로 해부. 근거: [[jouque-2025-beyond-satiety-unraveling-the|Jouque 2025]]·Minère 2025 *Science*(β-endorphin→PVT→MOR→sugar appetite)·Koch 2015(CB1R-POMC)·Kang 2021(운동). 중심 질문 = **liking(Pleasure) vs wanting(Motivation)** 분리. Aim 1([[concept-activity-molecular-registration|CaRMA·TRU-FACT]] 이원 분비 subset 발굴)→2([[lee-2023-lateral-hypothalamic-leptin-receptor|phase-specific 광유전]]+[[hyun-2022-tagging-active-neurons-by|Cal-Light]] liking/wanting 인과)→3(naltrexone 약리+[[ha-2024-hypothalamic-neuronal-activation-non-human|NHP]]). 임상 출구=**setmelanotide(satiety) vs naltrexone(hedonic) 분리 표적**. 식락학 Ch 20 backbone.

백링크·갱신: [[index|index.md]] 🔬 연구계획서(이론·NMPU에 추가)·페이지 수 **216→217·갱신일**. [[concept-pomc-neurons]]·[[jouque-2025-beyond-satiety-unraveling-the]]·[[concept-need-motivation-pleasure-utility]]·[[person-choi-hyung-jin]]에 역링크. [[overview-research-proposals|비교 hub]] #7 추가(마스터표·축그룹·관계도·요약 7과제). 연구계획서 **7과제(과학 7 + 중견 6 = 13 페이지)**.

## 2026-06-02 — other (나머지 2과제 중견연구 양식 변환 — 전 과제 완비)

GLP-1RA rebound·식품 불안정을 중견 양식으로 변환 → **6과제 전부 중견 양식 보유**.

새 페이지 2 (type: proposal):
- [[proposal-glp1ra-rebound-nrf-junggyeon]] — GLP-1RA 중단 rebound microbiota·회로 공동중재(원 [[proposal-glp1ra-rebound-microbiota]] 중견판).
- [[proposal-food-insecurity-nrf-junggyeon]] — 식품 불안정 쥐·원숭이·사람 교차종(원 [[proposal-food-insecurity-cross-species]] 중견판).

백링크·갱신: [[index|index.md]] 🔬 연구계획서 각 subsection에 중견 추가, 페이지 수 **214→216**. 원 계획서 2건·[[overview-research-proposals|비교 hub]](#5·#6 중견양식 ✗→✔) 갱신. **연구계획서 6과제 = 과학 상세 6 + 중견 양식 6 = 12 페이지** 완비.

## 2026-06-02 — other (DMH GLP-1R 인간영상 — 중견연구 양식)

[[proposal-dmh-glp1r-human-imaging]]를 중견연구 양식으로 변환.

새 페이지 1 (type: proposal):
- [[proposal-dmh-glp1r-nrf-junggyeon]] — 중견 양식(필요성→독창성[자체 Science 발견 인간 검증·preingestive cognitive satiation·교차종]→연차별 목표·Aim 1–3→추진전략·위험→연구역량→기대효과→연구비→참고문헌). 과학 내용은 원 계획서와 동일.

백링크·갱신: [[index|index.md]] 🔬 약물·대사 GLP-1에 중견 버전 추가, 페이지 수 **213→214**. 원 계획서·[[overview-research-proposals|비교 hub]](#1 중견양식 ✗→✔) 갱신. 현재 중견 양식 보유: tTIS·NMPU·LH/NAc·DMH GLP-1R(4과제), 미보유: GLP-1RA rebound·식품불안정.

## 2026-06-02 — other (새 proposal #1 + 연구계획서 비교 hub)

사용자 선택(다음 할일): proposal #1 작성 + 비교 hub.

새 페이지 2:
- [[proposal-dmh-glp1r-human-imaging]] (type: proposal) — [[kim-2024-glp-1-increases-preingestive-satiation|Kim 2024 Science]] 마우스 DMH GLP-1R cognitive satiation 회로를 **인간 7T 음식 cue fMRI × GLP-1RA RCT**로 번역. Aim 1(시상하부 반응 매핑)→2(DMH vs ARC vs AP/NTS 분해)→3(마우스·atlas 교차종 정합). 최실현 후보(본인 Science + 인간 fMRI/GLP-1 라인).
- [[overview-research-proposals]] (type: overview) — **연구계획서 6과제 비교 hub**: 마스터 비교표(축·방법·종·기간·실현가능성·중견양식) + 주제축 그룹 + mermaid 관계도 + 우선순위 메모. NMPU를 공통 spine으로 6과제 배치.

백링크·갱신: [[index|index.md]] 🔬 연구계획서(약물·대사 GLP-1에 DMH 추가 + hub 포인터)·🌐 Overviews(hub) 등재, 페이지 수 **211→213**. [[overview-future-research-directions]](Tier 1 #2)·[[concept-dorsomedial-hypothalamus]]·[[kim-2024-glp-1-increases-preingestive-satiation]]에 역링크. 연구계획서 총 6과제(9페이지: 과학 6 + 중견 3).

## 2026-06-02 — other (NMPU × LH/NAc 세포타입 매핑 표·그림 추가)

[[proposal-lh-nac-nmpu-nrf-junggyeon]]에 **§4-A 발굴 매트릭스** 추가 — 표 1(NMPU 성분×표적 세포타입)·표 2(LH 세포타입별)·표 3(NAc 세포타입별) + **그림 1 mermaid 회로도**(ARC AgRP→LH LepR→VTA-DA→NAc). ✔(확립) vs (발굴) 구분, grouped-ensemble 가정 명시. [[proposal-lh-nac-nmpu-neuron-discovery]]에 요약판(표 1+mermaid) 추가, 상세표는 중견판 앵커로 링크. 신규 페이지 없음(211 유지), 깨진 링크·앵커 0.

## 2026-06-02 — other (LH·NAc NMPU 발굴 계획서 — 중견연구 상세 양식)

사용자 요청으로 [[proposal-lh-nac-nmpu-neuron-discovery]]를 중견연구 양식으로 변환하되 **배경·선행연구·방법 대폭 확장**.

새 페이지 1 (type: proposal):
- [[proposal-lh-nac-nmpu-nrf-junggyeon]] — §1 배경 4절(NMPU 패러다임·LH/NAc 세포 다양성·방법론 전환점·시의성), **§3 연구실 선행연구 9건**(BioEssays NMPU·Sci Adv normative·Nat Commun LH LepR microendoscopy·EMM LH review·Neuron NHP·Science DMH GLP-1R·JOMES phase·DMJ 인간 fMRI·hijacked brain) 상세 기술, **§4 방법 상세**(NMPU 분해 행동 패러다임·GRIN 영상·CaRMA RNA-FISH 패널·TRU-FACT MERFISH+retroAAV projection·Cal-Light tag-then-manipulate×cell-type Cre·ensemble decoding·계산모델·sex/​power rigor). 연차별 Aim 1(LH)→2(NAc)→3(인과+NHP).

백링크·갱신: [[index|index.md]] 🔬 "이론·계산 — NMPU"에 추가(8번째 proposal), 페이지 수 **210→211**. 원 계획서에 상호 링크. 선행연구 기술은 모두 wiki 수록 lab 논문 근거(추측 없음).

## 2026-06-02 — other (연구계획서 — LH·NAc NMPU 식욕신경 발굴, CaRMA·TRU-FACT·Cal-Light)

사용자 지정 주제로 신규 proposal 작성. 오늘 ingest한 방법 3종을 NMPU·LH·NAc와 결합.

새 페이지 1 (type: proposal):
- [[proposal-lh-nac-nmpu-neuron-discovery]] — 가설: LH·NAc가 분자적으로 구별되는 ensemble로 식욕의 NMPU 성분을 분리 부호화. **도구 역할분담**: [[xu-2020-behavioral-state-coding-by|CaRMA]]·[[wang-2026-multimodal-alignments-of-in|TRU-FACT]](활성→분자정체+투사, 발굴) → [[hyun-2022-tagging-active-neurons-by|Cal-Light]](NMPU epoch 활성 태깅, 인과). **Aim 1 LH**(LepR/Vgat/Vglut2/Hcrt/Pmch/Gal/Nts × NMPU tuning × 투사) → **Aim 2 NAc**(D1/D2/ChAT × Pleasure/state-value) → **Aim 3** Cal-Light tag-then-manipulate + [[ha-2024-hypothalamic-neuronal-activation-non-human|NHP]]. [[kim-2024-normative-framework-dissociates-need|LH LepR=Motivation]]·[[jung-2024-dopamine-mediated-formation-of-a|NAc state-value]]를 cell-type·회로 지도로 확장.

백링크·갱신: [[index|index.md]] 🔬 연구계획서 "이론·계산 — NMPU"에 추가(7번째 proposal), 페이지 수 **209→210**. [[concept-nucleus-accumbens]]·[[concept-lateral-hypothalamus]]·[[concept-activity-molecular-registration]]에 역링크.

## 2026-06-02 — ingest (신규 raw 2편 — NAc memory module + Cal-Light, Kwon lab)

raw 2026-06-02 09:11 추가 PDF 2편 ingest(subagent fan-out). 둘 다 교신 **Hyung-Bae Kwon**(JHU/MPFI), 도구↔응용 한 쌍.

새 페이지 3:
- [[jung-2024-dopamine-mediated-formation-of-a]] (Nat Neurosci 2024, Jung·Costa·Kwon) — VTA^DA(safety/relief)+vHPC^Glu가 NAc medial shell에 목표(은신처) **memory module** 형성, 위협 시 인출→회피 항법; **DA=state-value**(순수 reward 아님), D1 의존, 보상종류별(food·water) 목표표상 시사. ensemble 태깅에 Cal-Light 사용.
- [[hyun-2022-tagging-active-neurons-by]] (Nat Commun **2022**; raw 파일명 2020은 오기) — soma-targeted **Cal-Light**: Ca²⁺ AND 광 동시검출→영구 유전자 발현으로 활성 뉴런 태깅(tag-then-manipulate), SNR 1.8×·조건부 KI. 방법론.
- [[person-kwon-hyung-bae]] — 두 논문 교신저자 인물 hub(활성 태깅 도구·NAc 보상 회로; 한국 DGIST·고려대 연계).

핵심 합성: Cal-Light(도구)↔NAc memory module(응용)이 한 lab의 짝. DA를 **state-value**로 보는 관점이 [[concept-dopamine-reward-system|도파민 논쟁]]·[[concept-need-motivation-pleasure-utility|NMPU]]와 정합. Cal-Light는 [[concept-activity-molecular-registration]]의 인접 계열(prospective 활성 태깅)로 연결.

백링크·갱신: [[index|index.md]] 🎯 도파민(Jung)·🧪 방법론(Cal-Light)·👤 인물(Kwon) 등재, 페이지 수 **206→209**. [[concept-nucleus-accumbens]]·[[concept-activity-molecular-registration]]에 역링크. raw PDF 미접촉. (Cal-Light 실제 출판년도 2022로 슬러그·frontmatter 기재, 파일명 2020 불일치 명시.)

## 2026-06-02 — other (방법론 개념 페이지 — 활성–분자정체 정합)

사용자 요청으로 CaRMA vs TRU-FACT를 묶는 방법론 hub 신설.

새 페이지 1 (type: concept):
- [[concept-activity-molecular-registration]] — in vivo 기능 영상↔분자 cell-type/투사 정합 방법론 hub. [[xu-2020-behavioral-state-coding-by|CaRMA]](Sternson, 직접 RNA-FISH·PVH) vs [[wang-2026-multimodal-alignments-of-in|TRU-FACT]](Schnitzer, soma-print·MERFISH·projection·통계·범용) 비교 표. 사용자 함의: 시상하부 feeding 회로 in vivo 영상에 분자정체 부여 → [[concept-hypomap|atlas]] 연결·[[proposal-nmpu-human-translation|NMPU]] 측정 backbone.

백링크·갱신: [[index|index.md]] 🧪 방법론 + 💡 일반개념(발달/atlas/방법론) 등재, 페이지 수 **205→206**. [[xu-2020-behavioral-state-coding-by]]·[[wang-2026-multimodal-alignments-of-in]]에 역링크.

## 2026-06-02 — ingest (신규 raw 2편 — CaRMA/TRU-FACT 활성↔분자정체 정합)

raw에 2026-06-02 추가된 신규 PDF 2편 ingest(PDF 정독 subagent fan-out).

새 페이지 2:
- [[xu-2020-behavioral-state-coding-by]] (Science 2020, Xu…**Sternson**) — PVH 분자 세포타입을 in vivo 칼슘영상+사후 RNA-FISH(**CaRMA imaging**)로 동시 측정 → **grouped-ensemble coding**(labeled-line 아님), Npy1r=conductor, MC5-Crh/MC6-Pdyn=salience. 세포타입당 1뉴런(10개)로 11상태 93% 디코딩.
- [[wang-2026-multimodal-alignments-of-in]] (bioRxiv 2026, Wang…**Schnitzer**) — **TRU-FACT**: in vivo 영상↔공간전사체(MERFISH/HCR-FISH)↔projection(RNA-barcode retroAAV) 세포 단위 정합(10,522 cells·precision 98%). ⚠️ **raw 파일명 "CaRMA"는 오기** — 방법명은 TRU-FACT(CaRMA는 Xu 2020). 파일명 불일치를 페이지에 명시.

핵심 합성: 두 편 모두 **"in vivo 활성을 분자 cell-type 정체에 연결"**하는 도구 — [[concept-need-motivation-pleasure-utility|NMPU]]의 "상태·Need가 어떻게 조합 부호화되는가"(Xu) + 그 측정 기술(TRU-FACT). [[proposal-nmpu-human-translation|NMPU 인간 번역 계획서]]의 직접 방법 자산으로 연결.

백링크·갱신: [[index|index.md]] 🧪 방법론(TRU-FACT·CaRMA) + 🍽️ 회로·세포(Xu PVH) 등재, 페이지 수 **203→205**. [[concept-paraventricular-nucleus]](Npy1r conductor·관련)·[[concept-need-motivation-pleasure-utility]]·[[proposal-nmpu-human-translation]]·[[concept-hypomap]]에 역링크. raw PDF 미접촉.

## 2026-06-02 — other (NMPU 연구계획서 중견연구 양식화)

[[proposal-nmpu-human-translation|NMPU 인간 번역 계획서]]를 한국연구재단 **중견연구** 제출 양식으로 변환.

새 페이지 1 (type: proposal):
- [[proposal-nmpu-nrf-junggyeon]] — 중견연구 양식(필요성→독창성[자체 이론 검증·4축 분해·4중 방법 삼각]→연차별 목표·내용(Aim 1–3)→추진전략·위험관리→연구역량→기대효과→연구비→참고문헌). 과학 내용은 원 계획서와 동일.

백링크·갱신: [[index|index.md]] 🔬 연구계획서 "이론·계산 — NMPU"에 양식 버전 추가(6번째 proposal), 페이지 수 **202→203**. 원 계획서에 상호 링크.

## 2026-06-02 — other (연구계획서 — NMPU 4-component 인간 번역)

후보 #6 선택 → 정식 proposal 작성. 사용자 lab 이론을 인간으로 옮기는 signature 과제.

새 페이지 1 (type: proposal):
- [[proposal-nmpu-human-translation]] — 가설: [[concept-need-motivation-pleasure-utility|NMPU]] 4축이 인간 뇌에서 분리 매핑(Need=내측시상하부, Motivation=LH, Pleasure=NAc, Utility=OFC/BLA). **Aim 1**(계산모델 [[kim-2024-normative-framework-dissociates-need|normative]]+[[weber-2025-interoceptive-origin-reinforcement-learning|interoceptive RL]]+belief-state, 4축 분리 과제) → **Aim 2**(7T fMRI 시상하부 아핵 매핑) → **Aim 3**(인간 침습 [[person-halpern-casey|Halpern]] + [[ha-2024-hypothalamic-neuronal-activation-non-human|NHP]] 세포 접지). 마우스→NHP→인간 삼중 검증. 응용: "어느 축 dysregulation"으로 비만 정밀 분류 → 맞춤 치료([[proposal-ttis-feeding-reward-circuits|tTIS]]·DTx) 매칭.

백링크·갱신: [[index|index.md]] 🔬 연구계획서에 "이론·계산 — NMPU" subsection 추가(5번째 proposal), 페이지 수 **201→202**. [[concept-need-motivation-pleasure-utility]]·[[kim-2024-normative-framework-dissociates-need]]·[[overview-future-research-directions]](Tier 2 #4)에 역링크.

## 2026-06-02 — other (연구계획서 — GLP-1RA rebound microbiota·회로 공동중재)

연구계획서 후보 9건 제안 후 사용자가 #2(GLP-1RA rebound) 선택 → 정식 proposal 작성.

새 페이지 1 (type: proposal):
- [[proposal-glp1ra-rebound-microbiota]] — 가설: GLP-1RA 중단 rebound([[barros-2026-from-diet-to-hypothalamic-dysfunction|12주 71%]])은 microbiota·담즙산·SCFA reset 실패 + 시상하부 POMC/AMPK set-point 복귀의 결합 → 중단 시점 microbiome 공동중재(Akkermansia·SCFA·TGR5)로 차단. **Aim 1**(마우스 기전 분해: microbiota vs 회로 vs set-point, FMT·GPR43/AMPK) → **Aim 2**(공동중재 rebound 차단) → **Aim 3**([[ha-2024-hypothalamic-neuronal-activation-non-human|NHP]]/인간 코호트 + 음식 cue fMRI). 근거: [[gao-2026-semaglutide-drives-weight-loss-through|AP·Gs-cAMP]]·[[concept-microbiota-gut-brain-axis]]·[[concept-hypothalamic-ampk]].

백링크·갱신: [[index|index.md]] 🔬 연구계획서에 신규 "약물·대사 — GLP-1RA" subsection 추가(4번째 proposal), 페이지 수 **200→201**. [[concept-microbiota-gut-brain-axis]]·[[barros-2026-from-diet-to-hypothalamic-dysfunction]]·[[overview-future-research-directions]](Tier 1 #3)에 역링크.

## 2026-06-02 — other (카테고리 재편 — `proposal-*` 전용 타입 신설)

200페이지 도달 + 연구계획서 누적에 따라 사용자 승인으로 **연구계획서 전용 타입/카테고리** 분리.

- **파일명 변경 3건**: `overview-proposal-ttis-feeding-reward-circuits`→[[proposal-ttis-feeding-reward-circuits]], `overview-proposal-ttis-nrf-junggyeon`→[[proposal-ttis-nrf-junggyeon]], `overview-proposal-food-insecurity-cross-species`→[[proposal-food-insecurity-cross-species]]. 스크립트로 전체 wiki(8 파일)의 인바운드 wikilink 일괄 갱신 + 파일 rename + `type: overview`→`type: proposal` 변경.
- **index 재편**: 🌐 Overviews에서 3건 분리 → 신규 **🔬 연구계획서 (Research Proposals)** 섹션 신설(신경조절/사회결정요인 subsection). [[overview-future-research-directions]]는 로드맵이라 Overviews 유지.
- **검증**: 깨진 링크 0(log 이력 링크 포함 자동 갱신), 3건 모두 inbound 보유, 페이지 수 200 불변.

> 향후 `proposal-*` 명명: `proposal-{theme}` kebab-case. 신규 타입값 `proposal`은 index 🔬 섹션으로 관리(Flat structure·index-only 분류 원칙 유지). CLAUDE.md 파일명 표 미등재 — 필요 시 사용자가 schema 갱신.

## 2026-06-02 — other (연구계획서 — 식품 불안정 쥐·원숭이·사람 교차종)

사용자 요청으로 식품 불안정(FI) 비만 기전의 교차종 연구계획서 작성. wiki FI 클러스터 근거로만 구성.

새 페이지 1 (type: overview):
- [[proposal-food-insecurity-cross-species]] — 가설: 예측불가/불안정 먹이가 ARC 멜라노코르틴+중뇌변연 보상 회로를 "먹이 보상·과식·적응적 지방 저장"으로 재프로그램([[bateson-2023-food-insecurity-as-a-cause|insurance hypothesis]]). **Aim 1 쥐**(예측불가 먹이 모델 [[myers-2022-chronic-experience-with-unpredictable]]·발달 재프로그래밍 [[wilbrecht-2024-experimental-biology-can-inform]] 회로 인과) → **Aim 2 원숭이**([[ha-2024-hypothalamic-neuronal-activation-non-human|NHP 플랫폼]] 생태·인지 번역) → **Aim 3 사람**([[person-kim-kirang|한국 FI 코호트]]·HFSSM 층화 + 음식 cue fMRI). 번역 정합은 [[myers-2024-translational-science-approaches-for]] framework.

백링크·갱신: [[index|index.md]] Overviews 등재(7번째), 페이지 수 **199→200**. [[concept-food-insecurity]]·[[person-kim-kirang]]·[[overview-future-research-directions]]("사회결정요인↔회로 다리")에 역링크.

⚠️ **카테고리 재편 검토 시점**: 본 페이지로 총 **200 페이지** 도달 — CLAUDE.md 기준(200 초과 시 분할 제안)에 근접. 특히 Overviews에 연구계획서가 누적(현재 3건) → 향후 `proposal-*` 별도 타입/섹션 분리 또는 "연구계획서" 카테고리 신설을 사용자에게 제안 예정.

## 2026-06-02 — other (연구계획서 중견연구 양식화)

[[proposal-ttis-feeding-reward-circuits|tTIS 연구계획서]]를 사용자 요청으로 한국연구재단 **중견연구**(개인기초, 최대 5년·연 3억) 제출 양식으로 재구성.

새 페이지 1 (type: overview):
- [[proposal-ttis-nrf-junggyeon]] — 중견연구 양식: 필요성(국내외 동향·공백) → 독창성·차별성(TI 약점→병적 동기 차단 표적 전환) → 최종·연차별 목표(5년) → 연차별 내용·방법(Aim 1–3) → 추진전략·위험관리 → 연구역량·인프라 → 기대효과·활용 → 연구비(예시) → 참고문헌(wiki 근거). 과학 내용은 원 계획서와 동일, grant 섹션 구조로 정렬.

백링크·갱신: [[index|index.md]] Overviews 등재(6번째), 199페이지. 원 계획서 [[proposal-ttis-feeding-reward-circuits]]에 상호 링크. 연구비·일정 수치는 양식 예시로 명시(공고 기준 확정 필요).

## 2026-06-02 — other (연구계획서 — 비침습 tTIS 섭식·보상 회로)

[[overview-future-research-directions]] Tier 3 #7을 사용자 선택으로 정식 연구계획서화. wiki 내부 근거로만 구성.

새 페이지 1 (type: overview):
- [[proposal-ttis-feeding-reward-circuits]] — 비침습 tTIS로 인간 NAc·내측시상하부 신경조절. **핵심 설계**: [[vieira-2024-temporal-interference-stimulation-disrupts|Vieira]]의 "rate 불변·desynchronize·~80% 약" 약점을 [[shivacharan-2022-pilot-study-of-responsive-nucleus|NAc 저주파 LOC biomarker]]·[[talakoub-2017-lateral-hypothalamic-activity-indicates|LHA beta/gamma 리듬]]의 **병적 동기 차단** 표적과 정합 → [[person-halpern-casey|Halpern]] 침습 rDBS의 비침습 등가물. Aim 1(montage·PWM-TI·cadaver) → Aim 2([[ha-2024-hypothalamic-neuronal-activation-non-human|NHP]] 단일뉴런·FSCV·폐루프) → Aim 3(MRI-유도 상태의존 인간 pilot, sham crossover). Risk table에 field subthreshold·off-target·정동 부작용([[parvizi-2022-complex-negative-emotions-induced]]) 대응 명시.

백링크·갱신: [[index|index.md]] Overviews 등재(5번째), 198페이지. [[overview-future-research-directions]] Tier3 #7에 계획서 링크. 식락학 [[overview-sikrakhak-book-project|Ch 25]] 연계.

## 2026-06-02 — other (향후 연구 방향 종합 페이지 신설)

사용자 요청으로 위키 전반의 gap·"함의"·미해결 긴장을 종합한 연구 로드맵 페이지 작성. **외부 검색 없이 wiki 내부 근거로만** 구성, 각 제언을 출처 페이지로 연결.

새 페이지 1 (type: overview):
- [[overview-future-research-directions]] — 사용자 lab 관점 Tier 1–3 로드맵. **Tier 1**(회로 표현형별 맞춤 DTx+electroceutical 병용 / DMH GLP-1R 인간 영상 검증 / GLP-1RA microbiota rebound 중재), **Tier 2**(NMPU 4-component 인간 번역 / NHP 약물·회로 번역 / 인간 hypothalamic atlas cross-validation), **Tier 3**(★비침습 tTIS로 시상하부·VTA·NAc 접근 / NMPU 축 closed-loop / 미주 보상 gating / DOHaD 협업), 횡단 과제(concept-insulin 부재·도파민 RPE 섭식 적용·FI↔회로 다리).

근거 핵심: TI cluster가 시상하부·VTA·NAc를 "완전 공백"으로 남긴 점([[concept-temporal-interference-stimulation]]) + [[vieira-2024-temporal-interference-stimulation-disrupts]]의 ~80% 약 현실 → "병적 동기 차단" frame 권고. NMPU 마우스 검증([[kim-2024-normative-framework-dissociates-need]])의 인간 번역 미비 + Halpern 인간 침습([[person-halpern-casey]])을 연결.

백링크·갱신: [[index|index.md]] 🌐 Overviews 등재(4번째 overview), 페이지 수 196→197·갱신일 2026-06-02. [[overview-appetite-energy-homeostasis]]("향후 방향" 절)·[[person-choi-hyung-jin]](관련 페이지)에 역링크. 성격: ingest "논문"이 아닌 wiki 내부 종합 통찰 보관(§2-5 절차).

## 2026-06-02 — lint (전면 건강검진 — 196페이지)

마지막 full lint(2026-05-31, 89페이지) 이후 196페이지로 성장(특히 비침습 자극 cluster-C 18편·TI 5편·HD 코호트·식락학 2편이 미점검) → 스크립트 기반 전수 점검.

**깨끗**: 고아 0, callout 누락 0, 인덱스 완전(196/196 등재·총계 정확), 깨진 링크 0(표의 `\|` escape 18건은 유효한 alias = 오탐), 명백한 모순 없음, stale/TODO 마커 0.

**발견·수정**:
- **깨진 앵커 5건 수정**: [[concept-cck]]·[[concept-ghrelin]]·[[concept-glp-1]]·[[concept-pyy-3-36]]·[[steinert-2017-ghrelin-cck-glp-1-pyy-secretory]]가 [[concept-enteroendocrine-cells]]를 `#개방형`/`#폐쇄형`(bare)로 가리켰으나 실제 헤딩은 `### 개방형 (open-type)`/`### 폐쇄형 (closed-type)` → Obsidian exact-match 실패. 앵커를 전체 헤딩 텍스트(`#개방형 (open-type)`·`#폐쇄형 (closed-type)`)로 교정(alias 표시는 유지). (2026-05-31 lint가 "유효"로 본 것은 오탐이었음.)

**신선도**: TI 효능 논쟁([[vieira-2024-temporal-interference-stimulation-disrupts]] "tACS보다 ~80% 약" vs [[hummel-2024-non-invasive-deep-brain]] 임상 낙관)은 [[concept-temporal-interference-stimulation]] callout이 "성배 vs 냉정한 현실"로 양립 서술 → 모순 아닌 문서화된 긴장. cluster-C·오늘 추가분 모두 2026-06 최신.

**양방향 링크 보강(사용자 승인)**: [[lee-2023-obesity-mechanism-after-hypothalamic]]의 region 상관 소견에 대해 [[concept-orbitofrontal-cortex]](우 OFC↓↔무질서섭식·억제조절)·[[concept-hippocampus-feeding]](좌 해마↔주의·체중)·[[concept-basolateral-amygdala]](좌 편도↔주의지향) 3개 hub에 역링크 1줄씩 추가. caudate(미상핵)는 dorsal striatum이라 [[concept-nucleus-accumbens]](ventral)와 영역이 달라 제외.

## 2026-06-01 — ingest (식락학 교재 프로젝트 구조 — 출판 회의 안건)

`raw/출판 회의 안건_0406 수정 v2.docx`(Python으로 텍스트 추출) 정리. 회의 행정 세부는 생략하고 **교재 구조·집필 분담·프로젝트 현황**만 위키 지식으로 수록.

새 페이지 1 (type: overview):
- [[overview-sikrakhak-book-project]] — 식락학(Food Hedonology) 교재(8인 공저, 6 Part·28 챕터) 전체 목차·집필진·현황. 사용자(최형진) 담당 4개 챕터(Ch 18 호르몬 / Ch 20 opioid·dopamine liking-wanting / Ch 24 음식 갈망·중독 / Ch 25 비만 근본 치료)를 wiki 페이지로 연결. 출판사 수학사·2026말 계약, Food Hedonology Society 가을 발족, 이화여대 K-MOOC 2027 개발 승인.

의의: [[overview-sikrakhak-ch18-appetite-hormones|Ch 18]]을 전체 교재 맥락에 배치하는 상위 hub. wiki의 보상·호르몬·중독·DTx 지식이 사용자 담당 챕터(20·24·25)로 출력될 목적지를 명시 — 향후 해당 챕터 집필 시 직접 소스.

백링크·갱신: [[index|index.md]] 🌐 Overviews에 등재, 페이지 수 195→196. [[overview-sikrakhak-ch18-appetite-hormones]]·[[person-choi-hyung-jin]]에 프로젝트 링크 추가(person 페이지에 담당 4챕터 명시).

남은 raw: 연구 논문·교재 docx 모두 반영 완료. 미반영분은 중복 사본(`(1)`/`1.pdf`)·`.mp4` 영상·구버전(`Ch 18_v2.docx`)뿐 — ingest 대상 아님.

## 2026-06-01 — ingest (사용자 저작 식락학 교재 Ch 18 정리)

사용자 본인 저작 교재 챕터 `raw/식락학 최형진 Ch 18_v3.docx`(최신본; v3에서 CCK 절 신규 추가) 정리. docx는 텍스트 ~5.8K자(나머지 7MB는 그림) — Python zipfile로 document.xml 추출 후 전문 정독. raw 읽기 전용 유지.

새 페이지 1 (type: overview):
- [[overview-sikrakhak-ch18-appetite-hormones]] — "식욕과 포만감을 조절하는 호르몬: 그렐린·렙틴·인슐린·GLP-1·CCK". 8개 절(에너지 항상성→장 내분비 세포 분포/형태→그렐린→렙틴→인슐린→GLP-1→CCK→결론)을 section별로 충실히 정리하고, 각 개념을 위키 concept 페이지로 연결. 핵심 축: **장기 adiposity signal(렙틴·인슐린) vs 단기 식사 신호(그렐린=개시, CCK/GLP-1/PYY=종료)**; 위장관 nutrient sensing(GPRC6A·T1R·FFAR1/4·SGLT-1)·다중 호르몬 병용이 차세대 치료 전략.

성격: 본 챕터는 ingest "논문"이 아니라 사용자가 wiki·문헌을 종합해 집필한 **교육용 synthesis** → 위키 ↔ 교재 양방향 hub로 자리매김. 인슐린은 전용 concept 페이지가 없어(향후 후보) 본문 plaintext 처리(honest gap).

백링크·갱신: [[index|index.md]] 🌐 Overviews에 등재(2번째 overview), 페이지 수 194→195. [[person-choi-hyung-jin]] 식락학 Ch 18 항목을 새 페이지로 링크. [[overview-appetite-energy-homeostasis]]에 "교재" 관련 절 추가(spine overview ↔ 교재 상호 연결). 연계 소스로 [[cummings-2001-preprandial-rise-in-plasma-ghrelin]]·[[steinert-2017-ghrelin-cck-glp-1-pyy-secretory]]·[[perakakis-2021-leptin-in-leanness-and-obesity]]·[[kim-2025-mechanisms-of-glucagon-like-peptide]] 명시.

## 2026-06-01 — ingest (사용자 lab — 시상하부 손상 후 비만 다차원 코호트 1편)

raw 백로그의 마지막 미정리 연구 논문(2026-05-25 Tier 5 후보로 기록됐던 건) ingest. PDF(11쪽) 정독.

새 페이지 1:
- [[lee-2023-obesity-mechanism-after-hypothalamic]] (Front Endocrinol 2023; Lee M·Park M-J·Lee KH·Kim JH·**Choi HJ**·**Kim YH**, SNU) — **사용자 lab 작품**(최형진·김용휘 공동교신). 두개인두종 시상하부 손상(HD) 29명 vs 비기능성 뇌하수체 선종 31명 pair-matched. 구조 MRI+음식 cue fMRI+심리(DEBQ·VAS·YFAS)+인지(Go/NoGo·dot-probe) 통합. 핵심: 시상하부 위축(667 vs 783 mm³), 음식 cue에 **좌 미상핵(reward/motivation) 활성↓**·후두/하전두↑, **음식 부주의**(Go omission 9.1 vs 4.1%)·**저포만**(VAS 2.4 vs 4.4)·**억제섭식↑**(DEBQ_R 3.7 vs 3.2), 수술 후 +7.2% 체중. HD군 내 상관: 억제섭식↔fusiform↓, 무질서섭식↔OFC↓, 해마↔주의·체중, 편도↔주의. 성인 발병 두개인두종 첫 적정 대조 fMRI.

핵심 합성: 시상하부 손상이 단순 항상성 결손이 아니라 **음식 주의력 저하(mindless eating)·reward 처리 이상·억제섭식**의 신경-심리-행동 연쇄로 비만을 일으킴을 인간 lesion 코호트로 실증 → **Need(시상하부) 손상에도 reward가 비만 추동**([[concept-need-motivation-pleasure-utility|NMPU]] 임상 증거), cue·attention·restraint 표적이 [[lee-2025-hijacked-brain-modern-obesity-cue|hijacked brain]] DTx 표적과 일치.

백링크·갱신: [[concept-hypothalamic-obesity]](craniopharyngioma 절 + 관련 페이지에 user-lab 인간 코호트 추가), [[person-choi-hyung-jin]](인간 fMRI/phenotyping 라인 + publication 목록). [[index|index.md]] 🍽️ 임상·DTx에 등재, 페이지 수 193→194. raw PDF 미접촉(읽기 전용).

## 2026-06-01 — ingest (비침습 자극 클러스터 마무리 — TI 심부자극 5편 + 인덱스 통합)

Cluster C(비침습 경두개 자극: tDCS/tACS + 시간간섭 TI)는 직전 세션에서 페이지 13개가 생성됐으나 **index.md·log.md에 미등록**이고, 허브 [[concept-temporal-interference-stimulation]]가 **존재하지 않는 논문 페이지 5개를 wikilink로 가리키는 미완 상태**였음. 이번 ingest로 완결.

새 페이지 5 (TI 심부자극 — 허브의 깨진 링크 5개 해소; PDF 정독 subagent fan-out):
- [[zhu-2023-a-mini-review-recent-advancements]] (Front Hum Neurosci 2023) — TI 증거 catalog mini-review. 심부 표적=해마·상구·창백핵·STN·VIM(운동장애 frame); 인간 전류 부족·결과 혼재.
- [[guo-2023-a-novel-non-invasive-brain]] (Front Neurosci 2023, Tianjin) — TI 물리·기전(저역통과 vs Na⁺ 정류 vs subthreshold 논쟁)·montage 종합. 인간 field <1 V/m·PV 뉴런 무반응.
- [[luff-2024-pulse-width-modulated-temporal]] (Brain Stimul 2024, Grossman) — 사각파 **PWM-TI**: pulse-width를 Δf로 변조해도 막 저역통과가 AM으로 변환; ex-vivo RMS ~40%↑·in-vivo 역치 20–40%↓, classic TI 동등+약간 우세.
- [[vieira-2024-temporal-interference-stimulation-disrupts]] (Nat Commun 2024) — 마카크 단일뉴런 234개: TI는 rate 불변·**spike timing만**(28%) 조절·대부분 **desynchronize**; HF shunting+불완전 demodulation으로 **tACS보다 ~80% 약함**. niche=병적 동기 disrupt.
- [[hummel-2024-non-invasive-deep-brain]] (Nat Rev Neurol 2024, Comment) — 비침습 심부자극(tTIS) 분야 전망: 선조체·해마·STN 표적, DBS 보완(반응자 예측·multi-target·closed-loop). 선조체 강화학습 조절=보상회로 비침습 접근의 가장 가까운 인간 증거.

핵심 합성: TI/tTIS는 **수술 없이 심부 보상·섭식 회로(시상하부·VTA·NAc)에 접근**하려는 비침습 신경조절의 성배 — 동물·인간 해마에서 초점·조향 실증([[violante-2023-non-invasive-temporal-interference]]), 선조체 도파민 ~40%↓([[kwak-2023-effect-of-temporal-interference]])까지 왔으나, 영장류 단일뉴런([[vieira-2024-temporal-interference-stimulation-disrupts]])이 인간 dose의 한계(발화율 변경 불가·tACS 대비 ~80% 약)를 못박음 → 현실 frame은 "활성화"보다 "**병적 동기 차단**". 시상하부·NAc·VTA 표적은 어느 논문도 직접 다루지 않음 = 사용자 lab 선점 공백.

인덱스·통합: [[index|index.md]] ⚡ Neuromodulation에 **"비침습 경두개 전기자극(tDCS/tACS)" 9항목 + "비침습 심부자극 TI/tTIS" 9항목** subsection 신설, 일반개념에 [[concept-transcranial-electrical-stimulation]]·[[concept-temporal-interference-stimulation]] 추가, 인물에 [[person-grossman-nir]] 추가. 페이지 수 정정 **175→193**(직전 세션의 미등록 cluster-C 13편 + 신규 5편 일괄 반영). 모든 raw PDF 미접촉.

## 2026-06-01 — ingest (미주신경자극 VNS/tVNS 클러스터 12편)

Cluster B(VNS/tVNS) 일괄 ingest. raw PDF 12편 정독, subagent fan-out 1파.

새 페이지 13:
- 개념 hub 1: [[concept-vagus-nerve-stimulation]] (VNS/taVNS: NTS→LC-NE/도파민 구심성 + cholinergic anti-inflammatory pathway 원심성; 비만 FDA 2015).
- 식욕·보상 2: [[neuser-2020-vagus-nerve-stimulation-boosts]] (taVNS가 food reward 추동↑·좌측 귀 특이, Nat Commun), [[fadel-2023-vagal-nerve-therapy-in]] (미주 치료 비만 메타분석 %EWL ~17%).
- 방법·종합 2: [[hilz-2022-transcutaneous-vagus-nerve-stimulation]], [[wang-2021-vagus-nerve-stimulation-in]].
- 항염(CAP) 4: [[bonaz-2021-therapeutic-potential-of-vagus]] (IBD), [[bazoukis-2023-vagus-nerve-stimulation-and]] (심혈관), [[fang-2023-neuroimmunomodulation-of-vagus-nerve]] (신경면역), [[shao-2023-role-of-vagus-nerve]] (통증).
- 기분·인지·기억·뇌전증 4: [[austelle-2022-a-comprehensive-review-of]] (우울), [[naparstek-2023-transcutaneous-vagus-nerve-stimulation]] (인지노화), [[olsen-2023-vagus-nerve-stimulation-mechanisms]] (기억), [[fukuda-2024-vagus-nerve-stimulation-therapy]] (소아 뇌전증).

핵심 합성: VNS는 electroceutical의 **gut-brain·자율신경 팔** — 사용자 접점은 ① taVNS reward 추동(미주→NTS→도파민), ② 미주 조절의 비만 체중 효과. 기전 두 갈래(구심성 NTS→LC-NE/5-HT/DA + 원심성 CAP α7nAChR).

백링크·갱신: [[concept-vagal-afferent-neurons]]·[[concept-dorsal-vagal-complex]](VNS가 자극하는 구심성·NTS), [[onimus-2026-the-gut-brain-vagal-axis-governs]](미주 tone→DA gating; neuser 인간 짝), [[concept-deep-brain-stimulation]](electroceutical family), [[concept-dopamine-reward-system]](neuser taVNS reward). [[index|index.md]] 갱신 (162→175; ⚡ Neuromodulation에 "미주신경자극(VNS/tVNS)" subsection + 개념 hub). 비식욕 적응증 리뷰는 takeaway에 직접 관련성 한계를 정직히 명시. raw PDF 미접촉.

## 2026-06-01 — ingest (식품 불안정 & 사회결정요인 클러스터 20편)

Cluster D(식품 불안정/영양 공중보건) 일괄 ingest. raw PDF 21개 정독(2024 Appetite translational 중복 1쌍 → 20편). PDF 판독은 subagent fan-out 2파.

새 페이지 24:
- 개념 hub 4: [[concept-food-insecurity]] (FI 정의·HFSSM·비만 역설·기전), [[concept-food-environment-access]] (식품환경·5 A's·food desert), [[concept-food-addiction]] (초가공식품×reward), 인물 [[person-kim-kirang]] (한국 FI 역학 hub, 단국대).
- 종합·이론 5: [[dinour-2007-the-food-insecurity-obesity-paradox]], [[gundersen-2015-food-insecurity-and-health]], [[carvajal-aldaz-2022-food-insecurity-as-a]], [[bateson-2023-food-insecurity-as-a-cause]] (insurance hypothesis), [[myers-2024-translational-science-approaches-for]].
- 기전·동물·food addiction 4: [[myers-2022-chronic-experience-with-unpredictable]] (동물 불확실성 모델; raw 파일명 2019이나 실제 2022), [[wilbrecht-2024-experimental-biology-can-inform]] (ARC melanocortin·VTA→NAc DA 재프로그램, Ross lab), [[leung-2024-food-insecurity-an-emerging]] (FI→food addiction), [[tomiyama-2019-stress-and-obesity]] (stress→reward).
- 식이장애 2: [[bidopia-2023-food-insecurity-and-disordered]] (소아), [[loth-2025-food-insecurity-and-disordered]] (성인).
- 한국 코호트(Kirang Kim 라인) 9: [[kim-2013-the-impact-of-nutritional]], [[park-2018-food-acquisition-through-private]], [[shim-2018-spatial-disparity-in-food]], [[shim-2019-objective-and-perceived-food]], [[yang-2020-is-the-perceived-fruit]], [[kim-2020-combined-effects-of-disease]], [[kim-2021-effects-of-perceived-food]], [[lee-2022-regional-difference-in-the]], [[hong-2023-development-and-validation-of]].

핵심 합성: FI는 **사회·환경 노출이 식욕·보상 회로를 reshape하는 통로** — ① stress→cortisol→mesolimbic 민감화, ② feast-famine→binge/LOC, ③ insurance hypothesis(불확실성 cue→적응적 지방 저장, 섭취 무관). 동물 모델이 ARC melanocortin·VTA→NAc DA 재프로그래밍을 입증. 한국 코호트는 식품환경(농촌=접근성/도시=가격) 결정요인 축.

백링크·갱신: [[concept-loss-of-control-eating]](FI→binge), [[concept-dopamine-reward-system]]·[[concept-arcuate-nucleus]](FI 회로 재프로그램), [[stuber-2025-the-neurobiology-of-overeating]](food addiction 신중론), [[giovanniello-2025-a-dual-pathway-architecture-for]](stress). [[index|index.md]] 갱신 (138→162; 신규 top-level 카테고리 "🍞 식품 불안정 & 사회결정요인" + 개념/인물). 순수 역학 논문은 takeaway에 신경 관련성 부재를 정직히 명시. 모든 raw PDF는 기존 로컬 raw/ 배치(미접촉).

## 2026-06-01 — ingest (stragglers 3편: 인간 LH 전기생리·피질 에너지·스트레스 habit)

Cluster E(미정리 백로그의 자투리 3편) ingest. PDF 판독은 subagent fan-out.

새 페이지 3:
- [[talakoub-2017-lateral-hypothalamic-activity-indicates]] (Ann Clin Transl Neurol 2017, Talakoub·Hamani) — 인간 LHA LFP: hunger=beta/low-gamma·satiety=alpha; 8 Hz 자극이 fullness 유발하나 craving 불변(homeostatic vs non-homeostatic 분리). 기존 DBS 클러스터가 plaintext로 인용하던 Talakoub를 정식 페이지화.
- [[padamsey-2022-neocortex-saves-energy-by]] (Neuron 2022, Padamsey·Rochefort) — 먹이 부족 시 V1이 AMPAR 전류·ATP 29%↓·coding precision↓; **leptin이 gating**(보충 시 복원). 에너지항상성↔피질 코딩 다리.
- [[giovanniello-2025-a-dual-pathway-architecture-for]] (Nature 2025, Giovanniello·Wassum) — 만성 스트레스가 BLA→DMS(agency)↓·CeA→DMS(habit)↑ "one-two punch"로 goal-directed→habit 전환. NMPU Utility 무력화·stress eating 회로.

백링크·갱신: [[concept-lateral-hypothalamus]](Talakoub), [[concept-hypothalamic-obesity]]·[[dassen-2023-could-deep-brain-stimulation]](Talakoub plaintext→링크), [[concept-leptin]](Padamsey 피질 작용), [[concept-basolateral-amygdala]]·[[concept-need-motivation-pleasure-utility]]·[[concept-loss-of-control-eating]](Giovanniello). [[index|index.md]] 갱신 (135→138; Neuromodulation 시상하부 절에 Talakoub, 🤖 AI×Neuro에 Padamsey, 🧩 인지·행동에 Giovanniello). 모든 raw PDF는 기존 로컬 raw/ 배치(미접촉).

## 2026-06-01 — ingest (침습 DBS for obesity/eating 클러스터 20편)

`raw/`의 미정리 백로그 중 **Cluster A — 침습 뇌심부자극(DBS)** 일괄 ingest (사용자 선택). raw PDF 21개 정독(2008–2023; "2021 DBS for obesity or binge-eating"의 2개 파일은 동일 Roh 2021 overview로 1편 처리 → 20편). PDF 판독은 subagent fan-out으로 수행.

새 페이지 23:
- 개념 hub 3: [[concept-deep-brain-stimulation]] (침습 DBS 일반: 표적·기전·역사·부작용), [[concept-hypothalamic-obesity]] (craniopharyngioma·PWS 난치 비만), 인물 [[person-whiting-donald]] (LHA DBS for obesity 임상).
- 시상하부 표적 논문 5: [[whiting-2013-lateral-hypothalamic-area-deep]] (J Neurosurg 2013, LHA pilot RMR 28%↑), [[whiting-2019-deep-brain-stimulation-of]] (World Neurosurg 2019, RMR 16–20%·야간 SEE), [[franco-2018-assessment-of-safety-and]] (JAMA Netw Open 2018, PWS LHA 비효과), [[hamani-2008-memory-enhancement-induced-by]] (Ann Neurol 2008, 복측 시상하부 DBS 기억 증강 우연), [[li-2022-hypothalamic-deep-brain-stimulation]] (PNAS 2022, 마우스 LH orexin 정현파 항불안).
- NAc 표적 논문 4: [[harat-2016-nucleus-accumbens-stimulation-in]] (HO −13.4 kg), [[tronnier-2018-massive-weight-loss-following]] (우울 DBS 중 가속 감량), [[rezai-2018-feasibility-of-nucleus-accumbens]] (FDA IDE pilot 실현불가), [[mantione-2010-smoking-cessation-and-weight]] (OCD DBS 금연+감량 우연).
- Halpern rDBS 보강 4: [[wu-2022-local-accumbens-in-vivo]] (PNAS 2022, cDBS<rDBS mechanism), [[barbosa-2022-aberrant-impulse-control-circuitry]] (Mol Psychiatry 2022, vmPFC→NAc shell 회로), [[mahajan-2022-can-responsive-deep-brain]] (Obesity 2022, 비용효과 임계값), [[parvizi-2022-complex-negative-emotions-induced]] (Brain Stimul 2022, 복내측 시상하부 음성정동).
- 종합·고찰 6: [[dupre-2015-deep-brain-stimulation-for]], [[formolo-2019-deep-brain-stimulation-for]], [[roh-2021-deep-brain-stimulation-for]], [[contreras-lopez-2022-effectiveness-of-deep-brain]], [[hsu-2022-effectiveness-of-deep-brain]], [[dassen-2023-could-deep-brain-stimulation]], [[yuen-2022-deep-brain-stimulation-for]] (중독 DBS).

핵심 합성: **시상하부(homeostatic) 표적은 비일관·역설(PWS 체중↑)·정동 부작용, NAc(reward) 표적이 더 유망** → [[concept-need-motivation-pleasure-utility|Need vs Pleasure]] 분업의 임상 증거; 흐름이 [[concept-responsive-neurostimulation|폐루프 rDBS]]로 수렴.

백링크·갱신: [[concept-nucleus-accumbens]](비만 DBS 표적 절 신설), [[concept-lateral-hypothalamus]]·[[concept-ventromedial-hypothalamus]](임상 DBS 절), [[concept-responsive-neurostimulation]](cDBS 대비 우월성·경제성), [[person-halpern-casey]](rDBS 보강 4편), [[concept-loss-of-control-eating]](Barbosa 2022 링크화). [[index|index.md]] 갱신 (112→135; 신규 top-level 카테고리 "⚡ 신경조절 치료(Neuromodulation Therapy)" + Halpern 절 4편 추가 + 개념/인물). 모든 raw PDF는 기존 로컬 raw/ 배치(미접촉).

## 2026-06-01 — ingest (Halpern 인간 침습 전기생리·responsive DBS 클러스터 8편)

Casey Halpern 그룹의 인간 NAc/OFC/insula/해마 침습 전기생리 + closed-loop DBS 8편 full-depth ingest. `raw/` 원본 8편(+2025 supplement) 정독.

새 페이지 15:
- 논문 8: [[wu-2018-closing-the-loop-on]] (PNAS 2018, 마우스 NAc delta=binge biomarker + RNS; 번역 아크 출발), [[wu-2020-brain-responsive-neurostimulation-for-loss]] (Neurosurgery 2020, 인간 rDBS 프로토콜 "BITES" NCT03868670), [[parker-2022-appetitive-mapping-of-the-human]] (Biol Psychiatry 2022, 첫 피험자 수술 중 NAc 매핑), [[shivacharan-2022-pilot-study-of-responsive-nucleus]] (Nat Med 2022, 2인 pilot LOC −80%대; 정점), [[huang-2021-the-insulo-opercular-cortex-encodes]] (Nat Commun 2021, 인간 섬엽 음식 cue 선제 부호화), [[barbosa-2023-an-orexigenic-subnetwork-within-the]] (Nature 2023, 인간 dlHPC=LH MCH orexigenic subnetwork), [[choi-2025-brain-activity-associated-with-breakthrough]] (Nat Med 2025, tirzepatide×NAc delta-theta breakthrough 단일 사례), [[nho-2026-human-orbitofrontal-neural-activity-is]] (Cell 2026, amOFC low-gamma=OCD biomarker + NAc-VeP 자극).
- 인물 1: [[person-halpern-casey]] (UPenn 신경외과, 인간 reward 회로 closed-loop 신경조절).
- 개념 6: [[concept-nucleus-accumbens]], [[concept-responsive-neurostimulation]], [[concept-loss-of-control-eating]], [[concept-orbitofrontal-cortex]], [[concept-insula]], [[concept-hippocampus-feeding]].

백링크·갱신: [[concept-lateral-hypothalamus]](NAc→LH·LH→dlHPC), [[concept-dopamine-reward-system]](인간 NAc/OFC 침습), [[concept-interoception]](섬엽), [[concept-need-motivation-pleasure-utility]](Pleasure 축 인간 데이터), [[lee-2025-hijacked-brain-modern-obesity-cue]]·[[concept-digital-therapeutics]](electroceutical 라인), [[concept-basolateral-amygdala]](섬엽 입력), [[stuber-2025-the-neurobiology-of-overeating]](LOC 임상), [[concept-glp-1]](tirzepatide), [[concept-melanocortin-system]](MCH 구분). [[index|index.md]] 갱신 (95→110; 신규 subsection "인간 침습 전기생리·신경조절 (Halpern)" + 회로/개념/인물 항목). raw PDF는 OA(PNAS/Nat Commun/Nature/Nat Med/Cell)·기존 로컬 raw/ 배치.

## 2026-05-31 — ingest (MC3R/MC4R dual agonist NHP 비만 약리)

[[seiler-2026-dual-activation-of-mc3r-and|Seiler et al. 2026 (Nat Commun)]] ingest — 경구 MC3R/MC4R dual agonist 710GO가 비만 macaque에서 지방 선택적·제지방 보존 감량(15주 11.8%)·semaglutide 시너지·심혈관 안전. **MC3R=rheostat/boundary, MC4R=sustained driver** division of labor 모델. 신규: 논문 페이지 + 개념 [[concept-mc3r]]. 역링크: [[concept-melanocortin-system]]·[[concept-mc4r]](MC3R 보완)·[[concept-paraventricular-nucleus]]·[[concept-pomc-neurons]]·[[concept-npy-agrp-neurons]]·[[faour-2025-emerging-role-of-agrp]](AgRP=inverse agonist)·[[ha-2024-hypothalamic-neuronal-activation-non-human]](동일 macaque platform)·[[concept-glp-1]]·[[lee-2017-glp-1-based-combination-therapy]]·[[namkoong-2017-central-administration-of-glp-1]](GLP-1 병용)·[[kim-2024-normative-framework-dissociates-need]]·[[lee-2025-hijacked-brain-modern-obesity-cue]]. [[index|index.md]] 2곳 + [[overview-appetite-energy-homeostasis]](논문 26) 갱신. raw PDF는 Nature OA로 로컬 raw/ 배치.

## 2026-05-31 — other (§4 일일 추천 자동 실행 셋업)

§4 추천 파이프라인을 **매일 0800 KST 자동 실행**으로 등록. scheduled-task `llm-wiki-daily-digest` (cron `0 8 * * *`, 로컬=KST, 지터 ~3분 → 08:03 KST). 매 실행: PubMed esearch/esummary/efetch(11저널·[tiab]+구문 필터)로 D-1 신규 조회 → relevance 0–10 점수 + 추천점수 0.7·rel/10+0.3·min(IF/100,1), floor 3 제외 → OA PDF는 Drive `llm-wiki-inbox` 업로드 → **Gmail digest 초안**(자동 발송 권한 부재 → 초안까지) → log.md 한 줄 append. 제약: web은 PubMed/Crossref/PMC/Google API 한정, raw/ 미접촉, IF는 본문 비인용. 주의: 앱이 켜져 있을 때만 실행(꺼져 있으면 다음 실행 시).

## 2026-05-31 — other (§4 오매칭 제거 — 질의 강화 + 관련도 floor)

`CLAUDE.md` §4 추천 파이프라인 오매칭 2단계 제거. (1) 토픽 필터 매칭 규칙 추가: 전 키워드 `[tiab]` 한정 + promiscuous 단어(feeding/reward/motivation/prediction error)를 구절 인용("feeding behavior"·"food reward" 등)으로 좁혀 PubMed 자동확장 차단. (2) **관련도 floor 3** 신설 — relevance<3 digest 완전 제외, 출력 3-tier(★추천≥6 / 일반 / 제외 카운트). 실측 테스트: 동일 일자 후보 16→5(질의)→4(floor), MC3R/MC4R 비만 NHP 논문이 1위. 위키 페이지 변경 없음.

## 2026-05-31 — other (§4 일일 ingest 추천 기능 추가)

`CLAUDE.md` §4에 논문 추천 점수화 도입 (참고: github.com/Soo-Heon/Daily-Research-Articles). 저널별 impact factor 표(11개, 근사값) 추가 + Claude 관련도 점수(0–10) + **추천점수 = 0.7×(relevance/10) + 0.3×min(IF/100,1)** 가중 합산, relevance≥6 ★추천, 추천점수 내림차순 정렬. 가중치·임계값·IF 표는 CLAUDE.md에서만 조정. 위키 페이지 변경 없음.

## 2026-05-31 — ingest (DTx 클러스터 4편)

사용자 lab의 DTx·행동측정 라인 4편 ingest. `raw/` 원본 4편 정독.

새 페이지 6:
- 논문: [[lee-2019-food-craving-seeking-and]] (JOMES 2019, craving→seeking→consumption phase framework 원전), [[kim-2021-digital-therapeutics-for-obesity]] (EnM 2021, DTx 개념 리뷰), [[kim-2020-multidimensional-cognitive-behavioral-therapy]] (JMIR mHealth 2020, 다차원 CBT-DTx RCT), [[kim-2021-mental-health-of-people]] (IJCHP 2021, 왜곡 BWP·WCS-m 심리 부담).
- 개념: [[concept-digital-therapeutics]] (DTx hub).
- 인물: [[person-kim-meelim]] (제1저자).

백링크·갱신: [[lee-2025-hijacked-brain-modern-obesity-cue]] (Kim 2020 wikilink + 4편 관련 페이지), [[concept-appetitive-consummatory-phases]], [[person-choi-hyung-jin]] (DTx 섹션·publication·관련 페이지), [[kim-2024-normative-framework-dissociates-need]], [[lee-2023-lateral-hypothalamic-leptin-receptor]]. `wiki/index.md` 갱신 (89→95, 임상·DTx·종합·이론·인물·일반개념 항목 추가).

## 2026-05-31 — lint (전면 건강검진 — 89페이지 전체)

마지막 full lint(2026-04-30, 35페이지) 이후 89페이지로 성장 → 전체 점검(스크립트 기반). **깨끗**: 고아 0, callout 누락 0, 인덱스 완전(89/89 등재·카운트 정확), 앵커 헤딩 모두 유효(`concept-enteroendocrine-cells#개방형/폐쇄형`·`concept-glp-1#RYGB-후`), 명백한 모순 없음. 발견·수정:
- **깨진 링크 3건 수정** (나머지 "깨짐"은 표의 `\|` escape·`#앵커`·log.md 이력 = 오탐):
  - [[ha-2024-hypothalamic-neuronal-activation-non-human]]:23 — `[[ha-2024|본 페이지]]`(슬러그 잘린 자기참조) → `본 페이지` 평문화.
  - [[hjort-2026-prefrontal-to-ventral-tegmental-area]]:54 — `[[mohebi-2019-dissociable-dopamine-dynamics]]`(잘림) → [[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation]].
  - [[jouque-2025-beyond-satiety-unraveling-the]]:120 — `[[person-cota-daniela]]`(페이지 없음) → `Daniela Cota` 평문화(2026-04-30 외부 인물 평문화 선례).
- **stale 신선도 마커 2건 정리**: [[godschall-2026-a-brain-reward-circuit-inhibited]]:71·[[park-2025-glucagon-like-peptide-1-and-hypothalamic]]:86이 [[concept-glp-1]] "갱신 필요" 표시 → 실제로는 concept-glp-1이 godschall·gao·duran·liskiewicz·CeA 모두 cross-link 반영 완료(updated 2026-05-31)라 마커가 낡음 → "반영 완료"로 표현 정정.

## 2026-05-31 — lint (Dopamine·RPE 클러스터 건강검진)

Dopamine·RPE 13개 페이지 점검 — callout 전부 정상, 깨진 링크 0, 고아 0, 신선도 양호(기초 논문이 [[adam-2026-dopamine-takes-hit-how-neuroscience]]로 forward 링크). 발견·수정:
- **인덱스 누락**: [[ha-2024-hypothalamic-neuronal-activation-non-human]] (사용자 lab NHP chemogenetic, Neuron 2024)가 완전한 페이지로 존재하나 index 미등재 → index 회로·세포 섹션(LH 사용자 lab)에 등재.
- **카운터 드리프트**: `총 페이지 97` ↔ 실제 비-index/log 파일 89 → **89로 정정**.
- **양방향 링크 보강**: [[rice-2019-closing-in-on-what-motivates]] 인바운드 1→3 ([[hamid-2016-mesolimbic-dopamine-signals-value-work]]·[[adam-2026-dopamine-takes-hit-how-neuroscience]]에 역링크 추가).

## 2026-05-31 — ingest (Onimus et al. 2026 Science Advances — The gut-brain vagal axis governs mesolimbic dopamine dynamics and reward events; Gut-brain·vagal 클러스터)

Gut-brain·vagal 클러스터 ingest (실질 1편 — barros-2026·de-lartigue-2026는 기존 ingest 완료):
- 신규 페이지: [[onimus-2026-the-gut-brain-vagal-axis-governs]] — SDV(횡격막하 미주절단)로 장-뇌 미주 tone을 만성 차단하면 음식·약물(코카인·모르핀) 보상과 mesolimbic VTA→NAc DA 동역학·VTA DA burst·NAc SPN 가소성이 모두 약화; **DS(nigrostriatal)·시상하부 항상성 노드(ARC·VMH)는 보존** → 미주 tone이 보상계 DA를 permissive gating. 회로 vagus→NTS→PBN→VTA. 같은 Gangarossa lab [[onimus-2026-dopamine-ensembles-regulating-appetite]] TEM 리뷰의 실험적 backbone.
- 역링크 13개 추가: onimus-2026-dopamine-ensembles·[[concept-dopamine-reward-system]]·[[concept-vagal-afferent-neurons]]·[[concept-dorsal-vagal-complex]]·[[concept-interoception]]·[[de-lartigue-2026-critical-role-gut-brain-signalling]]·[[thanarajah-2019-food-intake-recruits-orosensory]]·[[grove-2022-dopamine-subsystems-track-internal]]·[[weber-2025-interoceptive-origin-reinforcement-learning]]·[[concept-need-motivation-pleasure-utility]]·[[stuber-2025-the-neurobiology-of-overeating]]·[[kim-2024-glp-1-increases-preingestive-satiation]]·[[adam-2026-dopamine-takes-hit-how-neuroscience]].
- index 96→97 (도파민 & 보상·동기 > Interoceptive primary reward), overview 논문 24→25.

## 2026-05-31 — other (concept 생성 — Central amygdalar GLP-1R neurons, CeA^Glp1r)

CeA^Glp1r 개념 hub 신규 작성 (사용자 요청):
- 신규 페이지: [[concept-central-amygdala-glp1r]] — GABAergic·Vdr+·~30% Pnoc 공발현; NTS^Gcg→CeA^Glp1r→VTA DA 억제→NAc DA↓로 기호성 HFD만 선택 억제(homeostatic 무변); Glp1r^S33W humanized·small-molecule(orforglipron·danuglipron) BBB 직접 작용; CeA 세포종류 분업(Prkcd/Glp1r/Sst). 1차 근거 [[godschall-2026-a-brain-reward-circuit-inhibited]]·[[duran-2026-the-central-amygdala-integrates]], 보조 [[gao-2026-semaglutide-drives-weight-loss-through]].
- 역링크 추가: godschall-2026·duran-2026·gao-2026·[[concept-glp-1]]·[[concept-dopamine-reward-system]]·[[concept-dorsal-vagal-complex]]·[[concept-basolateral-amygdala]]·[[concept-need-motivation-pleasure-utility]]·[[stuber-2025-the-neurobiology-of-overeating]]·[[kim-2024-glp-1-increases-preingestive-satiation]]·[[park-2025-glucagon-like-peptide-1-and-hypothalamic]]·[[concept-lateral-hypothalamus]].
- index 95→96 (기타 회로 + 일반 개념 섹션).

## 2026-05-31 — ingest (Thanarajah et al. 2019 Cell Metab — Food Intake Recruits Orosensory and Post-ingestive Dopaminergic Circuits to Affect Eating Desire in Humans; 인체 dopamine·섭식 클러스터)

"인체 dopamine·섭식" 클러스터 ingest (실질 1 paper — Knight nutrient-flavor paper는 이미 [[grove-2025-lateralized-pathway-associating-nutrients]]로 ingest됨):
- 신규 페이지: [[thanarajah-2019-food-intake-recruits-orosensory]] (Cell Metabolism 2019;29:695-706, doi:10.1016/j.cmet.2018.12.006).
- 핵심: 신규 연속 [11C]raclopride PET(rDA, Lippert 2018/2019)+fMRI로 인체에서 즉시 orosensory DA(20–25분: NTS+120%·전측 insula·SN/VTA·해마·시상하부 LH 추정)와 지연 post-ingestive DA(35–40분: caudate·GPe·BLA·VPM)를 해부·시간 분리. wanting↑이 즉시 DA(insula r=0.94·해마 r=0.95·ACC r=0.90)와 양의 상관·지연 putamen DA(r=−0.96)와 음의 상관 → wanting이 포만 DA 억제 가설.
- 12 forward links + reverse backlinks: [[concept-dopamine-reward-system]]·[[concept-lateral-hypothalamus]]·[[kim-2024-glp-1-increases-preingestive-satiation]]·[[concept-need-motivation-pleasure-utility]]·[[concept-dorsal-vagal-complex]]·[[concept-enteroendocrine-cells]]·[[grove-2025-lateralized-pathway-associating-nutrients]]·[[concept-basolateral-amygdala]]·[[lee-2023-lateral-hypothalamic-leptin-receptor]]·[[weber-2025-interoceptive-origin-reinforcement-learning]]·[[adam-2026-dopamine-takes-hit-how-neuroscience]]·[[de-lartigue-2026-critical-role-gut-brain-signalling]].
- index 94→95 (도파민 Interoceptive primary reward 섹션), overview 논문 23→24.

## 2026-05-31 — ingest (Kim, Park, Choi 2025 APEM — Mechanisms of GLP-1 in the brain beyond metabolic effects, 사용자 lab review; GLP-1 Tier B 클러스터 4/4 完)

GLP-1 Tier B 클러스터 마지막 paper ingest (Kyu Sik Kim·Joon Seok Park·Hyung Jin Choi senior; brain-wide review):
- 신규 페이지: [[kim-2025-mechanisms-of-glucagon-like-peptide]] (Ann Pediatr Endocrinol Metab 2025;30:165-174, doi:10.6065/apem.2448320.160).
- 핵심: 뇌 GLP-1R 작용을 (1) 발견·임상 적용, (2) 세포 내 cAMP-PKA→시냅스 가소성 신호, (3) 부위별 활성 — AP=aversion vs NTS=satiation dissociation(Huang 2024), DMH GLP-1R/LepR preingestive satiation, BBB/tanycyte 접근, (4) 차세대 GLP-1RA(tirzepatide·GLP-1+MK-801·GLP-1/LepR·GLP-1+MC4R; 소아청소년), (5) 비만 너머 응용으로 종합. 본 lab [[namkoong-2017-central-administration-of-glp-1|NamKoong 2017]](ref83)·[[kim-2024-glp-1-increases-preingestive-satiation|Kim KS 2024 Science]](ref61) 인용.
- 역링크 추가(16): [[concept-glp-1]] · [[kim-2024-glp-1-increases-preingestive-satiation]] · [[namkoong-2017-central-administration-of-glp-1]] · [[lee-2017-glp-1-based-combination-therapy]] · [[bae-2019-glucagon-like-peptide-1-receptor]] · [[concept-dorsomedial-hypothalamus]] · [[concept-arcuate-nucleus]] · [[concept-dorsal-vagal-complex]] · [[concept-pomc-neurons]] · [[concept-npy-agrp-neurons]] · [[concept-incretin-effect]] · [[liskiewicz-2026-glp-1r-gipr-ppar]] · [[concept-dopamine-reward-system]] · [[concept-tanycytes]] · [[concept-lateral-hypothalamus]] · [[person-choi-hyung-jin]].
- index.md 93→94 (회로·세포 카테고리); overview 논문 22→23; person 1차 author lab 논문 7→8.
- **GLP-1 Tier B 클러스터(NamKoong 2017 / Bae 2019 / Lee 2017 / Kim 2025) 4편 완료.**

---

## 2026-05-31 — ingest (Lee, Lee, Choi 2017 JOMES — GLP-1 Based Combination Therapy for Obesity and Diabetes, 사용자 lab editorial; GLP-1 Tier B 클러스터 3/4)

GLP-1 Tier B 클러스터 셋째 paper ingest (Young Hee Lee·Hee Won Lee·Hyung Jin Choi 교신; editorial/mini-review):
- 신규 페이지: [[lee-2017-glp-1-based-combination-therapy]] (J Obes Metab Syndr 2017;26:155-160, doi:10.7570/jomes.2017.26.3.155).
- 핵심: GLP-1 골격에 GIP·glucagon·PYY·leptin·CCK·amylin·naltrexone·calcitonin·gastrin을 결합하는 병용요법을 Table 1로 종합. (1) GLP-1/GIP unimolecular co-agonist(Finan 2013)가 liraglutide 단독보다 우월 → **tirzepatide 선행**. (2) GLP-1/GIP/glucagon triagonist 체중 15.1%↓+EE↑(Finan 2015) → **retatrutide·[[liskiewicz-2026-glp-1r-gipr-ppar|5중작용제]] 선행**. (3) GLP-1+PYY는 GLP-1R 비의존 시너지, GLP-1+naltrexone은 reward계 작용. 같은 lab·같은 해 [[namkoong-2017-central-administration-of-glp-1|NamKoong 2017]]을 Table 1 첫 행으로 인용 — 자매 paper. 결론: EE 기전 미규명이 과제, 목표는 personalized 치료.
- 역링크 추가(13): [[namkoong-2017-central-administration-of-glp-1]] · [[concept-glp-1]] · [[concept-incretin-effect]] · [[liskiewicz-2026-glp-1r-gipr-ppar]] · [[concept-arcuate-nucleus]] · [[concept-pomc-neurons]] · [[concept-pyy-3-36]] · [[concept-dopamine-reward-system]] · [[concept-leptin]] · [[concept-cck]] · [[bae-2019-glucagon-like-peptide-1-receptor]] · [[kim-2024-glp-1-increases-preingestive-satiation]] · [[person-choi-hyung-jin]].
- index.md 92→93 (회로·세포 카테고리, NamKoong 옆); overview 논문 21→22.

---

## 2026-05-31 — ingest (Bae, Choi et al. 2019 DMJ — GLP-1RA differentially affects brain activation to visual food cues in lean and obese T2DM, 사용자 lab; GLP-1 Tier B 클러스터 2/4)

GLP-1 Tier B 클러스터 둘째 paper ingest (Hyung Jin Choi 공동 1저자, Young Min Cho 교신; 인체 fMRI):
- 신규 페이지: [[bae-2019-glucagon-like-peptide-1-receptor]] (Diabetes & Metabolism Journal 2019, doi:10.4093/dmj.2019.0018; NCT02745470; 저자 Bae·Choi·Cho·Kim·Kwon·Cho).
- 핵심: randomized single-blind crossover, lean(15)·obese(14) T2DM에 lixisenatide vs saline 후 visual food cue fMRI. (1) 비만 > lean food cue 과반응(시상하부·pineal·parietal·OFC·visual cortex). (2) lixisenatide가 두 군에서 **반대 방향**으로 fusiform gyrus·lateral ventricle(choroid plexus) 활성 조절 — fusiform은 GLP-1R 비발현→간접 효과. (3) 칼로리 섭취 감소군(17)에서만 PCC·mPFC·시상하부·OFC·temporal lobe group×treatment 상호작용 → 약물반응 예측 biomarker 가능성. 동물 ICV [[namkoong-2017-central-administration-of-glp-1|NamKoong 2017]]→본 인체 fMRI→[[kim-2024-glp-1-increases-preingestive-satiation|DMH GLP-1R(2024)]] translational 계보.
- 역링크 추가: [[concept-glp-1]] · [[namkoong-2017-central-administration-of-glp-1]] · [[lee-2025-hijacked-brain-modern-obesity-cue]] · [[kim-2024-glp-1-increases-preingestive-satiation]] · [[concept-dopamine-reward-system]] · [[concept-arcuate-nucleus]] · [[person-choi-hyung-jin]].
- index.md 91→92 (임상·DTx 카테고리); overview 논문 19→21 (누락됐던 NamKoong 2017 동시 추가).

---

## 2026-05-31 — ingest (NamKoong et al. 2017 BBRC — Central administration of GLP-1 and GIP decreases feeding in mice, 사용자 lab; GLP-1 Tier B 클러스터 1/4)

GLP-1 Tier B 클러스터 첫 paper ingest (사용자 lab 최형진 교신, incretin 중추 병용 시너지):
- 신규 페이지: [[namkoong-2017-central-administration-of-glp-1]] (BBRC 490:247–252, doi:10.1016/j.bbrc.2017.06.031; 저자 NamKoong·MS Kim·BT Jang·YH Lee·YM Cho·HJ Choi).
- 핵심: ICV GLP-1·GIP 단독은 고용량에서만 식욕↓; subeffective 저용량(GLP-1 0.3+GIP 1 nmol) **병용 시 시너지로 식욕·체중·음수↓**. ARC c-fos·β-endorphin(POMC)↑이나 활성 c-fos⁺ 세포는 POMC와 거의 비공존 → 별도 non-POMC 집단 가설(POMC/AgRP로 중계 추정). incretin 병용의 중추 신경기전 first study; tirzepatide·[[liskiewicz-2026-glp-1r-gipr-ppar|5중작용제]] 선행 개념.
- 역링크 추가: [[concept-glp-1]] · [[concept-incretin-effect]] · [[concept-pomc-neurons]] · [[concept-arcuate-nucleus]] · [[liskiewicz-2026-glp-1r-gipr-ppar]] · [[kim-2024-glp-1-increases-preingestive-satiation]] · [[lee-2023-lateral-hypothalamic-leptin-receptor]] · [[person-choi-hyung-jin]].
- index.md 90→91 (회로·세포 카테고리).

---

## 2026-05-31 — ingest (Liu·Wang 2026 Neuron — Granular motivational interaction and behavioral choice during feeding, 이론·회로 종합 리뷰)

섭식 동기를 "granular motivational states"로 분해하는 이론 framework 리뷰 ingest (사용자 NMPU의 자매 framework, 사용자 lab Lee 2023 LH^LepR 인용 ref159):
- 신규 페이지: [[liu-2026-granular-motivational-interaction-and]] (Neuron 114, doi:10.1016/j.neuron.2025.12.025, Liu·Wang).
- 핵심: feeding을 5 phase(preparation·initiation·maintenance·interruption·termination)로 분해, 각 phase 전용 회로 매핑 — ARC^AgRP(preparation)·LH^GABA(initiation, approach/investigation/biting)·DR^GABA/CeA^Htr2a/VTA^DA(maintenance)·DVC/NTS/PBN(termination satiation/aversion)·LH^VGLUT2(interruption). BBQSM+AI 자연주의 패러다임으로 "food intake 단일 지표" 한계 극복 제언. NMPU(동기 구성요소)와 직교 보완(동기의 시간적 sub-state).
- 역링크 추가: [[kim-2024-unified-theoretical-framework-underlying-regulation]] · [[concept-need-motivation-pleasure-utility]] · [[concept-appetitive-consummatory-phases]] · [[lee-2023-lateral-hypothalamic-leptin-receptor]] · [[concept-npy-agrp-neurons]] · [[concept-arcuate-nucleus]] · [[concept-dorsal-vagal-complex]] · [[concept-lateral-hypothalamus]] · [[concept-dopamine-reward-system]] · [[stuber-2025-the-neurobiology-of-overeating]] · [[de-lartigue-2026-critical-role-gut-brain-signalling]] · [[korotkova-2026-balancing-acts-lateral-hypothalamic]].
- index.md 89→90 (종합·이론 카테고리). overview-appetite-energy-homeostasis Layer 1에 NMPU↔granular 자매 framework 노트 + 논문 18→19.

---

## 2026-05-31 — ingest (Jia·Zhou 2026 Nat Commun — Novelty exploration-activated ensemble in the lateral hypothalamus confers analgesic and anxiolytic effects, LH salience hub)

LH 통증·정서 클러스터 ingest (novelty 탐색의 opioid 비의존 진통·항불안 회로 — 사용자 lab Cheon 2025 EMM 인용, ref46):
- 신규 페이지: [[jia-2026-novelty-exploration-activated-ensemble-in]] (Nat Commun 17:4418, Xuzhou Medical Univ, Zhou/Cao/Xiao/Zhang; open access).
- 핵심: novelty(새 물체/환경) 탐색이 급·만성통증+불안 완화(naltrexone 무효=opioid 비의존). Fos-TRAP "novelty ensemble"(GABA 48.79%/CaMKII 25.15%/orexin~26%/MCH~6%)이 통각·air puff·EPM·보상에 모두 반응하는 양가 high-salience 코더. 전체 광유전: ChR2→진통+항불안+CPP, NpHR/Arch→통각과민+불안+CPA. GABA·Glu subtype 모두 효과; 투사별 분업(LH^GABA 진통=LHb / LH^Glu 진통+항불안=LPO·LPAG).
- 역링크 추가: [[concept-lateral-hypothalamus]] · [[cheon-2025-lateral-hypothalamus-and-eating-cell]] · [[korotkova-2026-balancing-acts-lateral-hypothalamic]] · [[concept-dopamine-reward-system]] · [[lee-2023-lateral-hypothalamic-leptin-receptor]].
- index.md 88→89. overview는 pain/anxiety 주제로 feeding synthesis 직접 관련성 낮아 항목 추가 보류.

## 2026-05-31 — ingest (Liskiewicz·Müller 2026 Nature — GLP-1R–GIPR–PPARα/γ/δ quintuple agonism corrects obesity and diabetes in mice, Tier B 5중작용제)

Tier B incretin 약물 클러스터 ingest (GLP-1R–GIPR 이중 펩타이드 MAR709에 pan-PPAR agonist lanifibranor를 공유결합한 단일분자 5중작용제):
- 신규 페이지: [[liskiewicz-2026-glp-1r-gipr-ppar]] (Nature 653:776–785, Müller/Helmholtz Munich; open access; 사용자 lab 비인용).
- 역링크 추가: [[concept-glp-1]] · [[concept-incretin-effect]] · [[concept-pomc-neurons]] · [[concept-arcuate-nucleus]] · [[concept-dorsal-vagal-complex]] · [[gao-2026-semaglutide-drives-weight-loss-through]] · [[godschall-2026-a-brain-reward-circuit-inhibited]] · [[park-2025-glucagon-like-peptide-1-and-hypothalamic]].
- index.md 87→88, overview 논문 17→18 + 약물 표에 GLP-1/GIP+PPAR 행 추가.
- 핵심: 두 incretin 수용체+PPAR 모두 체중·당대사 효과에 기여; 중추작용은 ARC POMC FOS 강화로 수렴, BBB 미투과 → AP/NTS hindbrain이 1차 무대 (Fig 5).

## 2026-05-31 — ingest (Duran·Hardaway 2026 bioRxiv — The central amygdala integrates exogenous glucagon-like peptide 1 signals, Tier B Hardaway CeA-GLP-1)

Tier B GLP-1/약물 클러스터 ingest (CeA 세포종류별 GLP-1RA hypophagia 분업 — 사용자 lab Kim KS 2024 Science 인용, ref37):
- 신규: [[duran-2026-the-central-amygdala-integrates]] — 말초 Ex-4(5 µg/kg i.p.)가 CeA in vivo 활성(GCaMP7f fiber photometry, vGat-Cre; Exendin-9로 차단). 세포종류별 chemogenetic(hM4d/DCZ) 억제: Prkcd^CeA(CeL)=hypophagia 최강 차단, Glp1r^CeA(CeM)=표준식이 약하나 HFD/기호식 억제 강하게 rescue(~30% vs ~10%)=hedonic feeding 전담(Pnoc^CeA reciprocal 추정), Sst^CeA=무효. CeA=brain-wide anorexigenic system의 한 노드.
- 백링크 추가: [[godschall-2026-a-brain-reward-circuit-inhibited]] · [[gao-2026-semaglutide-drives-weight-loss-through]] · [[concept-basolateral-amygdala]] · [[concept-glp-1]] · [[concept-dorsal-vagal-complex]] · [[kim-2024-glp-1-increases-preingestive-satiation]] · [[concept-need-motivation-pleasure-utility]] · [[lee-2025-hijacked-brain-modern-obesity-cue]] · [[park-2025-glucagon-like-peptide-1-and-hypothalamic]] · [[person-choi-hyung-jin]].
- 갱신: [[overview-appetite-energy-homeostasis]] (논문 16→17), index.md (86→87).

---

## 2026-05-31 — ingest (Gao·Krashes 2026 Nat Metab — Semaglutide drives weight loss through cAMP-dependent mechanisms in GLP1R-expressing hindbrain neurons, Tier B GLP-1/약물)

Tier B GLP-1/약물 클러스터 ingest (블록버스터 약물 기전 — 사용자 lab 비인용):

- [[gao-2026-semaglutide-drives-weight-loss-through]] — Nature Metabolism 2026 (Gao C et al.; senior Andrew Lutas·Michael J. Krashes, NIDDK; doi:10.1038/s42255-026-01534-8). **세마글루타이드의 뇌 내 세포내 신호 기전 해부**. 핵심: (1) **1차 작용부위=area postrema(AP)**, NTS 아님 — DVC Gs(Gnas) 결손 시 체중감량 소실, AP만 보존(APMiss)되면 회복; (2) **Gs–cAMP 필수** — Gnas KO·PDE4-cat 과발현이 신경활성·체중감량 완전 차단(roflumilast가 cAMP 동역학 제어, β-arrestin 무관); (3) **Gq(IP3-calcium) permissive 흥분성** — Gq-DREADD 자극이 Gs보다·세마글루타이드보다 더 큰 체중감량; (4) **NTS Gs=baseline 에너지항상성 brake**(결손 시 HFD 체중↑); (5) downstream **elPBN^semaTRAP**가 CTA·체중감량 부분 매개(CGRP ~50%). 치료 함의: cAMP-biased agonism, Gs+Gq 병용, AP 국소 PDE4 억제, AP/NTS 분업으로 메스꺼움 분리. PDF 36MB>20MB라 pdftotext로 sources/ 추출 후 ingest.

신규 hub 개념 페이지 1개 생성: [[concept-dorsal-vagal-complex]] (DVC = AP·NTS·DMX) — Gao·[[godschall-2026-a-brain-reward-circuit-inhibited]]·[[de-lartigue-2026-critical-role-gut-brain-signalling]]가 공유하는 hindbrain 무대 hub.

cross-ref(양방향) 갱신: [[concept-glp-1]], [[godschall-2026-a-brain-reward-circuit-inhibited]], [[park-2025-glucagon-like-peptide-1-and-hypothalamic]], [[kim-2024-glp-1-increases-preingestive-satiation]], [[de-lartigue-2026-critical-role-gut-brain-signalling]], [[concept-vagal-afferent-neurons]], [[concept-dorsomedial-hypothalamus]], [[concept-basolateral-amygdala]] 의 "관련 페이지"에 역링크. [[overview-appetite-energy-homeostasis]] 논문 16편·회로/세포에 DVC 추가. index.md 섭식 회로·세포 + 일반 개념 회로/세포에 등재(총 86 페이지, +2: gao 논문 + DVC 개념).

**남은 ingest 후보 (~13편)** — Tier A 나머지 1편(Sci Adv gut-brain vagal axis) → Tier B 나머지(GLP-1R–GIPR–PPARα quintuple, Hardaway CeA-GLP-1 bioRxiv, APEM/BBRC/DMJ/JOMES GLP-1) → Tier D 임상·DTx.

---

## 2026-05-31 — ingest (Hjort·Stuber 2026 Nature — Prefrontal to ventral tegmental area dynamics drive contingency degradation, Tier C 도파민·행동)

Tier C 도파민·행동 클러스터 ingest (도파민/RPE/행동 — 사용자 lab 비인용 순수 회로 논문):

- [[hjort-2026-prefrontal-to-ventral-tegmental-area]] — Nature 2026 (Hjort MM et al.; senior Garret D. Stuber, Univ. of Washington; doi:10.1038/s41586-026-10443-5; online 2026-05-06). **Contingency degradation(CD; cue가 더 이상 결과를 예측 안 함을 학습하는 인지 유연성)을 단순 RPE가 아닌 meta-RPE(mRPE; RPE의 rolling-average gain 조절, CD/CE 분리 항)로 설명** — 모델 비교에서 RPE/RPE2α/PH/eMack/RPEt-1 능가. Pavlovian reversal(H→L=CD, L→H=CE). mPFC ~13%가 CD 인코딩; holographic SLM optogenetics로 CD ensemble 자극→licking↓(인과). VTA→mPFC DA(GRAB-DA3h)=RPE/CE; mPFC→VTA 뉴런(mPFC ~10%) 중 61.5%가 CD; mPFC DA 길항제(SCH+RAC)→CD 손상; mPFC→VTA 자극→degradation 가속, 억제→지연. VTA GABA ~50%(excited)/DA ~36%(split). 중독·재발·hypofrontality 함의. 사용자 lab 비인용. PDF 10MB Read 직접.

cross-ref(양방향) 7개 페이지 갱신: [[stuber-2025-the-neurobiology-of-overeating]](동일 lab), [[concept-dopamine-reward-system]], [[adam-2026-dopamine-takes-hit-how-neuroscience]], [[gershman-2024-explaining-dopamine-prediction-errors-beyond]], [[morales-2017-ventral-tegmental-area-cellular-heterogeneity]], [[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation]], [[concept-need-motivation-pleasure-utility]] 의 "관련 페이지"에 역링크. index.md 🎯 도파민 클러스터에 신규 "Cognitive flexibility / meta-learning" 진영 추가(총 84 페이지).

**남은 ingest 후보 (14편)** — Tier A 나머지 1편(Sci Adv gut-brain vagal axis) → Tier B GLP-1/약물 → Tier D 임상·DTx.

---

## 2026-05-31 — ingest (Godschall·Güler 2026 Nature — A brain reward circuit inhibited by next-generation weight-loss drugs, Tier A #4)

Tier A 네 번째 bridge 논문 ingest (GLP-1↔보상 결정적 연결):

- [[godschall-2026-a-brain-reward-circuit-inhibited]] — Nature 2026 (Godschall EN et al.; senior Ali D. Güler·Christopher D. Deppmann, Univ. of Virginia; doi:10.1038/s41586-026-10444-4). **차세대 경구 small-molecule GLP1RA(orforglipron·danuglipron)가 hedonic feeding을 억제하는 회로 발견**. 핵심: **humanized Glp1r^S33W 마우스**(CRISPR Ser33→Trp)로 small-molecule 전임상 가능. 부위별 분업 — **DMH/BMH=homeostatic(SD), NTS-AP=둘 다, CeA=hedonic(HFD)만**. 회로: **NTS^Gcg → CeA^Glp1r(GABAergic·Vdr+·~30% Pnoc) → VTA DA → NAc 도파민 방출↓**(dLight, 3종 GLP1RA 공통). orforglipron은 NTS-우세(nausea/AP 분리). substance-use·binge eating 적용. 사용자 lab 인용: [[kim-2024-glp-1-increases-preingestive-satiation]](ref16). PDF 26MB>20MB라 pdftotext로 sources/ 추출 후 ingest.

cross-ref(양방향) 12개 페이지 갱신: [[concept-glp-1]](본문 갱신 필요 표시), [[kim-2024-glp-1-increases-preingestive-satiation]], [[park-2025-glucagon-like-peptide-1-and-hypothalamic]], [[stuber-2025-the-neurobiology-of-overeating]], [[johansen-2025-brain-control-of-energy]], [[concept-dopamine-reward-system]], [[morales-2017-ventral-tegmental-area-cellular-heterogeneity]], [[concept-dorsomedial-hypothalamus]], [[concept-basolateral-amygdala]](CeA vs BLA 구분), [[lee-2025-hijacked-brain-modern-obesity-cue]], [[concept-need-motivation-pleasure-utility]], [[person-choi-hyung-jin]] 의 "관련 페이지"에 역링크. [[overview-appetite-energy-homeostasis]] 논문 15편으로. index.md 회로·세포 섹션 등재(총 83 페이지).

**남은 ingest 후보 (15편)** — Tier A 나머지 1편(Sci Adv gut-brain vagal axis) → Tier B GLP-1/약물 → Tier C 도파민·행동 → Tier D 임상·DTx.

---

## 2026-05-30 — ingest (Stuber·Schwitzgebel·Lüscher 2025 Neuron — The neurobiology of overeating, Tier A #3)

Tier A 세 번째 bridge 논문 ingest:

- [[stuber-2025-the-neurobiology-of-overeating]] — Neuron 2025 리뷰 (Garret D. Stuber, Valerie M. Schwitzgebel, Christian Lüscher; Neuron 113:1–14, June 4). 과식을 **addiction-neuroscience 시냅스 가소성 회로 모델**로 재해석. **homeostatic(ARC AgRP/POMC·BNC2·PVH MC4R) + hedonic(LHA GABA/glut→VTA→NAc) + crosstalk(ghrelin/leptin→VTA, POMC→NAc μOR)**; 세포 기질 = 시냅스 가소성(NAc D1R-MSN→LHA GABA "feeding authorization" gate[O'Connor&Lüscher 2015], acute restriction→gate depression[Thoeni 2020], VTA glutamate potentiation, NMDAR→GLP-1-NMDAR conjugate[Petersen 2024]). 단일유전자 vs 다유전자 비만(Box). **"food addiction"은 신경생물학적 미입증 — 신중론(Box 3)**. 사용자 lab 인용: [[kim-2024-normative-framework-dissociates-need]](ref61, medial need/lateral motivation 분리를 본문 비중 인용).

cross-ref(양방향) 9개 페이지 갱신: [[lee-2025-hijacked-brain-modern-obesity-cue]](food addiction 긴장), [[kim-2024-normative-framework-dissociates-need]], [[concept-need-motivation-pleasure-utility]], [[concept-lateral-hypothalamus]], [[lee-2023-lateral-hypothalamic-leptin-receptor]], [[concept-dopamine-reward-system]], [[concept-arcuate-nucleus]], [[concept-glp-1]], [[johansen-2025-brain-control-of-energy]] 의 "관련 페이지"에 역링크. index.md 섭식&에너지항상성 종합·이론 섹션 등재(총 82 페이지).

**남은 ingest 후보 (16편)** — Tier A 나머지 2편(Sci Adv gut-brain vagal axis, Nature brain reward circuit/weight-loss drugs) → Tier B GLP-1/약물 → Tier C 도파민·행동 → Tier D 임상·DTx.

---

## 2026-05-30 — ingest (Johansen 2025 Cell — Brain control of energy homeostasis, Tier A #2)

Tier A 두 번째 bridge 논문 ingest:

- [[johansen-2025-brain-control-of-energy]] — Cell 2025 Leading Edge 리뷰 (Johansen VBI, Petersen J, Lund J, Mathiesen CV, Fenselau H, Clemmensen C; Novo Nordisk Foundation + Cologne). **비만 원인론(gene×env·push-pull·GWAS CNS-편향) → 신경내분비 신호 → CNS 회로(시상하부 ARC 멜라노코르틴 + beyond AgRP/POMC[BNC2·TRH·PNOC·OXTR], 뇌간 DVC[NTS satiety vs AP aversion], 보상) → neuroplasticity → 뇌 표적 항비만 약물(GLP-1/GIP/amylin/GCGR + CNTF·NMDAR/PSD-95/PICK1)**까지 field-spanning 통합. homeostatic/hedonic 이분법 해체(TEM 2026과 동일 메시지). 사용자 lab 3편 인용: [[ha-2024-hypothalamic-neuronal-activation-non-human]](ref215), [[kim-2024-normative-framework-dissociates-need]](ref228), [[lee-2023-lateral-hypothalamic-leptin-receptor]](ref229).

cross-ref(양방향) 10개 페이지 갱신: [[overview-appetite-energy-homeostasis]](논문 13편으로), [[concept-arcuate-nucleus]], [[concept-glp-1]], [[concept-need-motivation-pleasure-utility]], [[concept-dopamine-reward-system]], [[concept-dorsomedial-hypothalamus]], [[ha-2024-hypothalamic-neuronal-activation-non-human]], [[kim-2024-normative-framework-dissociates-need]], [[lee-2023-lateral-hypothalamic-leptin-receptor]], [[park-2025-glucagon-like-peptide-1-and-hypothalamic]] 의 "관련 페이지"에 역링크. index.md 섭식&에너지항상성 종합·이론 섹션 등재(총 81 페이지).

**남은 ingest 후보 (17편)** — Tier A 나머지 3편(Sci Adv gut-brain vagal axis, Nature brain reward circuit/weight-loss drugs, Neuron Lüscher neurobiology of overeating) → Tier B GLP-1/약물 → Tier C 도파민·행동 → Tier D 임상·DTx.

## 2026-05-30 — ingest (TEM 2026 Dopamine ensembles — 도파민↔섭식 bridge)

미정리 19편 중 **우선순위 추천** 후 Tier A(두 거대 클러스터를 잇는 다리 논문) 1편 ingest:

- [[onimus-2026-dopamine-ensembles-regulating-appetite]] — Trends Endocrinol Metab 2026 (Onimus O, Peters KZ, Naneix F, Gangarossa G; Paris). **homeostatic 시상하부 vs hedonic mesolimbic DA 이분법 폐기 → 분산 "DA ensembles" 통합 framework**. mesocorticolimbic(VTA·NAc·PFC) + 시상하부(A12–A15) + 말초(vagus·hormone) 가로지름. 핵심 회로: NAc^Sh D1R^Serpinb2 → LH LepR이 leptin anorexia override (Liu 2024 Nat Metab); D1R/D2R-SPN balance가 feeding↔EE 배분; Box 2 gut-brain→VTA DA 축; 치료는 말초 node 표적 권장.

cross-ref(양방향) 8개 페이지 갱신: [[concept-dopamine-reward-system]], [[concept-lateral-hypothalamus]], [[concept-need-motivation-pleasure-utility]], [[lee-2023-lateral-hypothalamic-leptin-receptor]], [[grove-2022-dopamine-subsystems-track-internal]], [[adam-2026-dopamine-takes-hit-how-neuroscience]], [[concept-vagal-afferent-neurons]], [[morales-2017-ventral-tegmental-area-cellular-heterogeneity]] 의 "관련 페이지"에 역방향 링크 추가. index.md 도파민&보상·동기 종합·메타 섹션에 등재(총 80 페이지).

**남은 ingest 후보 (18편)** — Tier A 나머지 4편(Cell Brain control of energy homeostasis, Sci Adv gut-brain vagal axis, Nature brain reward circuit/weight-loss drugs, Neuron Lüscher neurobiology of overeating) → Tier B GLP-1/약물 → Tier C 도파민·행동 → Tier D 임상·DTx.

## 2026-05-25 — ingest (Ha 2024 Neuron — NHP chemogenetic) + dedup

병렬 세션에서 raw/ 신규 PDF 중 사용자 lab Tier 3 항목 1편 ingest:
- [[ha-2024-hypothalamic-neuronal-activation-non-human]] — Neuron 2024 (Ha LJ first, Hyung Jin Choi corresponding). **NHP macaque LHA GABAergic chemogenetic 활성화 → palatable food specific goal-directed eating ↑**. PET ([18F]flumazenil) + 7T MRS (GABA/tCr) functional validation. rs-fMRI: LHA-frontal FC ↑, intra-frontal FC ↓. NMPU framework의 translational pipeline (rodent → NHP → 임상 path) 완성.

cross-ref 갱신: [[concept-lateral-hypothalamus]], [[concept-need-motivation-pleasure-utility]], [[concept-npy-agrp-neurons]], [[person-choi-hyung-jin]] 에 Ha 2024 + Kim 2024 normative + Lee 2023 LH^LepR 링크 추가.

**Dedup**: 동일 세션 중 [[kim-2024-normative-framework-dissociates-need]] (사용자 작성) 의 중복 페이지 `kim-ks-2024-...` 와 [[lee-2023-lateral-hypothalamic-leptin-receptor]] (사용자 작성) 의 중복 `lee-yh-2023-...` 두 개 삭제 — 사용자 명명 convention (저자 성만, ks/yh initial 생략) 으로 통일.

## 2026-05-25 — ingest (사용자 lab 핵심 3편 — NMPU framework backbone)

`raw/`의 22개 신규 PDF 중 **사용자 lab의 가장 중심적이고 wiki 전반에서 인용되는데 자체 페이지가 없던 3편** 우선 ingest:

1. [[kim-2024-normative-framework-dissociates-need]] — Sci Adv 2024 (Kim KS, Lee YH, Yun JW, Kim YB co-first; HyungGoo Kim + Hyung Jin Choi corresponding). **AgRP = Need + LH LepR = Motivation** normative model fitting + 광유전 검증. SKKU·IBS computational neuroscience 합류.
2. [[kim-2024-glp-1-increases-preingestive-satiation]] — Science 2024 (Kim KS, Park JS, Hwang E co-first; Kevin Williams + Hyung Jin Choi corresponding). 인간 RCT + 마우스 광유전·photometry·microendoscopy·CRACM로 **DMH GLP-1R → ARC AgRP 회로**가 GLP-1RA preingestive satiation 매개. UT Southwestern 협업 대표작.
3. [[lee-2023-lateral-hypothalamic-leptin-receptor]] — Nat Comm 2023 (Lee YH, Kim YB, Kim KS, Jang M co-first). **LH LepR = LH food-specific GABA의 79%**. Microendoscopy로 seeking vs consummatory **2 subpopulation 분리**. **NPY가 disinhibition으로 LH LepR permissive gate**. Sang Jeong Kim 공동.

**NMPU framework 강화** ([[concept-need-motivation-pleasure-utility]] 갱신):
- 2026 시상하부 cluster 통합 섹션 추가 — Need 회로 (AgRP heterogeneity·circadian·BNC2·DMH GLP-1R/LepR/Trh), Motivation 회로 (Korotkova arbitration), Pleasure (POMC β-endorphin paradox), Utility (microbiota·BLA·VAN), Algorithm reshape (Ghost POMC), 발달 가소성 (maternal programming), atlas era.
- 신규 paper cross-link 보강.

**다른 PC에서 wiki 보기**: Obsidian + iCloud/OneDrive sync 권장. `wiki` 폴더를 클라우드에 두고 다른 PC에서 "Open folder as vault" — `[[wikilink]]`·callout·graph view 모두 native. 모바일은 Obsidian iOS/Android + 같은 클라우드. Git+GitHub는 버전 관리 path. Read-only 공개는 Quartz·mdBook static site.

**남은 ingest 후보 (19편)** — 다음 세션에서 처리 권장:

*Tier 2: 2026 추적 핵심:*
- 2026 TEM. Dopamine ensembles regulating appetite, feeding, and energy homeostasis
- 2026 Nature. GLP-1R–GIPR–PPARαγδ quintuple agonism
- 2026 Nat Metab (Krashes). Semaglutide weight loss through cAMP in GLP1R hindbrain neurons
- 2026 Nature. A brain reward circuit inhibited by next-generation weight-loss drugs
- 2025 Cell. Brain control of energy homeostasis: anti-obesity pharmacotherapy
- 2026 Sci Adv. The gut-brain vagal axis governs mesolimbic dopamine

*Tier 3: 회로·행동 신규:*
- 2026 Nat Comm. Novelty exploration-activated ensemble in LH (analgesic·anxiolytic)
- 2025 Nature. Dual-pathway architecture for stress to disrupt agency and promote habit
- 2026 Nature (Stuber). PFC-VTA dynamics drive contingency degradation
- 2024 Neuron. Hypothalamic LH NHP goal-directed eating (Ha 2024 — Cheon 2025에 인용)

*Tier 4: 사용자 lab DTx 역사:*
- 2021 EnM. Digital Therapeutics for Obesity (사용자 lab)
- 2020 JMU. Multidimensional CBT for Obesity Digital Platform RCT (사용자 lab)
- 2019 JOMES. Food Craving Seeking Consumption Phases (사용자 lab Lee 2019; Kim 2024 Sci Adv·Lee 2023 Nat Comm 모두 인용)
- 2019 DMJ. GLP-1RA Differential Brain Activation Visual Food Cues (사용자 lab)
- 2017 JOMES. GLP-1 Based Combination Therapy (사용자 lab)
- 2021 IJCHP. Body weight perception medicinal remedies (사용자 lab)

*Tier 5: 기타:*
- 2017 BBRC. Central GLP-1/GIP decreases feeding mice
- 2023 Frontiers Endo. Obesity after hypothalamic damage
- 2025 APEM. GLP-1 in the brain beyond metabolic effects

**핵심 발견 (사용자 lab 통합)**:
- 사용자 lab의 **NMPU framework의 실험적 backbone** 3편이 wiki 정착 — BioEssays 이론 + Sci Adv normative model + Science DMH GLP-1R + Nat Comm LH LepR. Framework가 단순 이론이 아닌 **3 cell type (AgRP/Need, DMH GLP-1R/cognitive Need 갱신, LH LepR/Motivation) × 4 component**의 verified 회로 substrate.
- **NPY가 LH LepR permissive gate** — Kim 2024 Sci Adv의 Motivation accumulation 분자 메커니즘 해명. Sated/fasted state-dependent conditional 작동.
- **인간 + 마우스 trans-species 정합** (Kim 2024 Science): GLP-1RA 인간 임상 RCT preingestive satiation index ↑ ↔ 마우스 DMH GLP-1R 광유전 회로.
- **Phase-specific paradigm 정립** (Lee 2023): 이전 controversial 결과 (Siemian, de Vrind, Leinninger, Shin 등 LH LepR 작품들)가 paradigm 차이임을 해명.

총 79 페이지 (3개 신규 paper, 사용자 본인 lab 비중 크게 강화).

## 2026-05-25 — ingest (시상하부 special issue 7편 — REMD 2026 cluster)

`raw/`에 *Reviews in Endocrine and Metabolic Disorders* 2026 시상하부 special issue 7편 추가. 모두 **시상하부 식욕·EE 회로의 modern paradigm** 통합:

1. [[lopez-2026-hypothalamic-regulation-of-energy]] — 분야 history × frontier editorial (López·Friedman). 16C Vesalius → 2024 HypoMap·BNC2·Ghost POMC catalog.
2. [[korotkova-2026-balancing-acts-lateral-hypothalamic]] — LH가 hunger × anxiety × loneliness arbitration. LepR LH가 anorexia nervosa 회로.
3. [[faour-2025-emerging-role-of-agrp]] — AgRP = metabolic·sensory·circadian·환경 4-modality integrator (Luquet lab). AgRP^Hindbrain·circadian·AN 통합.
4. [[jouque-2025-beyond-satiety-unraveling-the]] — POMC heterogeneity mosaic + **Ghost POMC** (Quarta lab). β-endorphin → sugar appetite (Minère 2025 Science).
5. [[littleton-2025-from-identity-to-function-unveiling]] — HypoMap (mouse 2022) + 인간 atlas (Tadross 2025 Nature). 인간 POMC = LepR + GLP1R **공발현** (마우스 분리).
6. [[freire-agulleiro-2026-early-life-programming-of]] — 모체 비만 자손 시상하부 programming (Quarta lab). 6 메커니즘 (inflammation·ER stress·BBB·leptin surge·insulin·epigenetics).
7. [[barros-2026-from-diet-to-hypothalamic-dysfunction]] — Microbiota-시상하부-WAT axis. SCFA·LPS·bile acid → POMC GPR43-AMPK. Semaglutide·tirzepatide의 microbiota 의존성 + **중단 시 12주 71% rebound**.

**신규 concept 페이지 12개**:
- 시상하부 핵: [[concept-paraventricular-nucleus]], [[concept-ventromedial-hypothalamus]], [[concept-dorsomedial-hypothalamus]]
- 분자·세포: [[concept-mc4r]], [[concept-melanocortin-system]], [[concept-ghost-pomc-neurons]], [[concept-tanycytes]], [[concept-hypothalamic-ampk]]
- 메커니즘: [[concept-hypothalamic-inflammation]], [[concept-microbiota-gut-brain-axis]], [[concept-maternal-programming-hypothalamus]]
- Resource: [[concept-hypomap]]

**신규 person 페이지 5개**:
- [[person-friedman-jeffrey]] — leptin·BNC2 발견자.
- [[person-lopez-miguel]] — AMPK·sEV·Gazella Biotech.
- [[person-quarta-carmelo]] — Ghost POMC·"Ghostbuster" ERC.
- [[person-yeo-giles]] — HypoMap·인간 atlas.
- [[person-korotkova-tatiana]] — LH arbitration framework.

**기존 페이지 갱신** (callout + heterogeneity 섹션 추가):
- [[concept-pomc-neurons]] — heterogeneity mosaic, Ghost POMC, β-endorphin, 인간 LepR+GLP1R 공발현.
- [[concept-npy-agrp-neurons]] — AgRP^Hindbrain/pituitary/adrenal, projection segregation, De Solis 2024, circadian SCN→DMH^Trh, ABA 모델.
- [[concept-arcuate-nucleus]] — BNC2·Pnoc·Webster 2024 Trh/Glp1r/Lepr·Ghost POMC·인간 atlas heterogeneity.
- [[concept-lateral-hypothalamus]] — Korotkova arbitration framework + LepR LH anxiety·AN + 모체 비만 LH connectivity 강화.
- [[concept-leptin]] — BNC2·postnatal surge·tanycyte shuttle·발달 programming.
- [[concept-glp-1]] — microbiota 매개·인간 atlas LepR+GLP1R·Webster 2024·Tadross 2025·중단 rebound.
- [[index.md|wiki/index.md]] — 시상하부 핵 subsection + 발달/DOHaD + 미생물-뇌 axis 신설. 총 76 페이지.

**핵심 발견 (사용자 lab 직격)**:
- **POMC heterogeneity + Ghost POMC** = 사용자 lab의 [[lee-2025-hijacked-brain-modern-obesity-cue|hijacked brain]] 회로 가소성 가설의 분자 substrate. 비만에서 POMC 정체성이 functionally shift (neurogenesis 없이) — DTx 반응성·체중 rebound 메커니즘 후보.
- **인간 POMC = LepR + GLP1R 공발현** (Tadross 2025) — 사용자 lab의 [[park-2025-glucagon-like-peptide-1-and-hypothalamic|GLP-1 cognitive satiation]] 임상 번역의 분자 정당성. 마우스 분리 cluster를 인간은 single neuron에 통합.
- **Webster 2024 RAMPANT**: AgRP synaptic input의 **Trh+/Glp1r+/Lepr+ caudal ARC inhibitory subset**이 liraglutide 매개 — 사용자 lab의 DMH GLP-1R 회로와 동일 cluster.
- **모체 비만 programming**: pre-pregnancy + lactation period가 critical window. **Postnatal leptin surge** (P0–P14 mouse, prenatal 인간) blunting이 ARC projection 손상의 핵심. TUDCA·4-PBA·melatonin이 회로 복원 — 약물 path.
- **PVN MC4R → 자손 hypertension** (Samuelsson 2016) — 사용자 lab의 비만-심혈관 합병증 회로.
- **Korotkova LH framework**: LepR LH가 **anorexia nervosa** 회로 — 사용자 lab의 [[cheon-2025-lateral-hypothalamus-and-eating-cell|Cheon 2025 LH review]]가 cited. 5 type hijacked brain 중 emotion·restraint subtype 후보.
- **Microbiota-semaglutide 의존성**: ARC acetate → POMC GPR43-AMPK 회로. **Akkermansia Akk11 시너지**. 중단 시 회로 + microbiota + bile acid TGR5 동시 reset 실패 — **rebound의 핵심 메커니즘**.
- **인간 hypothalamic atlas (Tadross 2025 Nature)** = 사용자 lab 임상 sample 분석의 ground truth resource.
- **López sEV-AMPK 약물 path** = 사용자 lab의 LH gene therapy / DTx와 다른 분자 도구의 같은 분야 선구.

**실용 함의**:
- 사용자 lab 임상 환자: MC4R variant screening + 시상하부 MRI gliosis biomarker + 임신 가능 여성 GLP-1 안전성 평가.
- 사용자 lab + 서울대 산부인과·소아청소년과 협업 path (모체 비만 programming).
- DTx 회로별 분화 + microbiota co-modulation 병용 path (semaglutide rebound 차단).
- 사용자 lab 향후 paper에서 인간 atlas·HypoMap cross-validation 가능.

총 76 페이지 (24개 신규: paper 7 + concept 12 + person 5).

## 2026-05-01 — ingest (Knight lab + interoception × RL 4편)

`raw/`에 4편 추가. 모두 **interoception × reward × dopamine × hypothalamic feeding** 클러스터:

1. [[knight-liberles-2025-interoception]] — Curr Opin Neurobiol 2025 themed issue editorial. Interoception 2025 frontier 21개 review catalog.
2. [[weber-2025-interoceptive-origin-reinforcement-learning]] — Trends Cogn Sci 2025. RL framework를 interoception 기반으로 재정의. Primary/proxy/secondary reward, state-driven vs event-driven.
3. [[grove-2025-lateralized-pathway-associating-nutrients]] — bioRxiv 2025 (Knight lab). ★ flavor-nutrient learning이 NAc 아닌 **left anterior BLA** 도파민 매개. Mouse + human PET/fMRI lateralization.
4. [[grove-2022-dopamine-subsystems-track-internal]] — Nature 2022 (Knight lab). VTA DA의 자원별 sub-system, LH GABAergic → VTA water reward 회로. (raw는 .pptx 데크, 본문은 cross-citation 재구성)

**신규 개념 페이지 4개**:
- [[concept-interoception]] — 분야 정체성 hub.
- [[concept-basolateral-amygdala]] — anterior=nutrient/posterior=aversive, left lateralized.
- [[concept-flavor-nutrient-conditioning]] — Sclafani 50년 paradigm + 회로 정체.
- [[concept-primary-reward-signals]] — Weber 2025 핵심 정의.

**기존 페이지 갱신**:
- [[concept-dopamine-reward-system]] — DA 자원별 sub-system 섹션 추가.
- [[concept-lateral-hypothalamus]] — LH GABAergic→VTA water reward source 섹션.
- [[concept-vagal-afferent-neurons]] — VAN → primary reward (sugar/fat) 회로 섹션.
- [[concept-need-motivation-pleasure-utility]] — Weber 2025 RL framework 정렬 섹션 (NMPU↔primary/proxy/secondary 매핑).
- [[index.md|wiki/index.md]] — 신규 카테고리 entry, 🤖 AI×Neuroscience 첫 페이지 등록.

**핵심 발견 (사용자 lab 직격)**:
- **NMPU framework가 2025 frontier와 정렬** — Knight·Liberles의 anticipatory homeostasis = NMPU Need; Weber RL framework의 4-tier = NMPU 4-component.
- **DA의 표적 분리** — NAc (cue/effort) vs aBLA (nutrient 가치) vs LH→VTA (water/state). 30년 RPE 가설의 다채널화.
- **CCK+가 VTA-DA subset marker로 격상** — fat 회로 + flavor-nutrient 회로 모두 매개.
- **Lateralization** — left aBLA in mouse + human, 진화적 보존. bariatric/Klüver-Bucy 임상 함의.
- **5 maladaptive eating types 회로 분리 가능** — cue/habit (NAc), addiction (aBLA primary), DTx 표적 분화.

**실용 함의**:
- GLP-1 agonist의 행동 변화 측정 paradigm: [[concept-flavor-nutrient-conditioning|FNC]] 활용.
- DTx 회로별 분화 — Hijacked Brain 5 type별로 NAc/aBLA/LH 표적 다름.
- LH electroceutical/gene therapy의 정당성 강화 (LH가 reward channel input source).

총 43 페이지 (8개 신규).

## 2026-05-01 — other (schema 개정)

CLAUDE.md schema 5개 수정 — **§4 일일 자동 ingest 신설**:
- 핵심 원칙 1번: web 사용 default 금지는 유지하되, §4 모드에서 PubMed/RSS/PMC OA/Crossref 한정 허용.
- 핵심 원칙 4번: flat structure에 `digest-YYYY-MM-DD.md` 평면 유지 명시.
- 디렉토리 도식: digest 라인 추가.
- §4 신규 섹션: 11개 저널, 4개 토픽 카테고리 키워드, OA 분기 워크플로, Drive 업로드 + Gmail digest 발송 설계.
- 금지사항: web 규칙 §4 예외 표기.

원격 cron agent (매일 0800 KST = `0 23 * * *` UTC) 생성은 **사용자가 https://claude.ai/customize/connectors 에서 Gmail·Drive connector 연결 후** 진행 예정.

## 2026-04-30 — lint (건강검진)

전체 위키 점검 결과:
- ✅ PDF↔wiki 커버리지 (18/18), 고아 페이지 없음, takeaway callout 모두 존재, index.md 일치 (35 페이지).
- 🔧 깨진 wikilink 3개 평문화 (raw에 없는 외부 인용):
  - [[lee-2024-feature-specific-prediction-error]] — `[[engelhard-2019-...]]` → "Engelhard 2019".
  - [[kim-2024-unified-theoretical-framework-underlying-regulation]] — `[[kim-ks-2024-...]]` → "Kim KS et al. 2024 Sci Adv".
  - [[morales-2017-ventral-tegmental-area-cellular-heterogeneity]] — `[[lammel-2012]]` → "Lammel 2012 Nature".
- 🗑️ 루트(wiki/ 바깥) 0-byte stub 4개 삭제: `concept-ghrelin.md`, `concept-leptin.md`, `lee-2025-hijacked-brain-modern-obesity-cue.md`, `무제.md` (모두 wiki/에 정상본 존재).

## 2026-04-30 — ingest (도파민·RPE 논쟁 9편)

`raw/`에 도파민/RPE 핵심 1차 자료 9편 정리. RPE 30년 패권에 도전하는 4개 진영을 망라:

**진영별**:
- **Effort/activation** (Salamone): [[salamone-2012-mysterious-motivational-functions-mesolimbic]] — Neuron 2012.
- **Heterogeneity/cell types**: [[morales-2017-ventral-tegmental-area-cellular-heterogeneity]] (NRN 2017), [[lee-2024-feature-specific-prediction-error]] (NN 2024), [[huang-2024-dopamine-mediated-interactions-between-short]] (Nature 2024, fly MB).
- **Value/motivation broadcast**: [[hamid-2016-mesolimbic-dopamine-signals-value-work]] (NN 2016), [[mohebi-2019-dissociable-dopamine-dynamics-learning-motivation]] (Nature 2019), [[rice-2019-closing-in-on-what-motivates]] (Nature 2019 N&V).
- **Belief-state / hidden-state inference**: [[gershman-2024-explaining-dopamine-prediction-errors-beyond]] (NN 2024), [[blanco-pozo-2024-dopamine-independent-effect-rewards-choices]] (NN 2024).

**핵심 발견**:
- **Salamone 진영**: NAc DA = 노력·activation, "reward" 용어 폐기. Berridge wanting/liking 부분 호환.
- **Heterogeneity**: VTA에 dopaminergic·glutamatergic·GABAergic·co-release 다중 cell type. Feature-specific RPE (sub-population별 다른 RPE 변수).
- **Mohebi 2019** (★): VTA spike와 NAc DA release가 *분리* — fast phasic (학습) vs slow ramp (motivation/reward rate) 두 채널.
- **Blanco-Pozo 2024** (★): Two-step task에서 DA가 inferred-value RPE 모양 보이지만, **outcome-time DA stim/inhibition이 다음 trial 선택에 영향 없음** — DA-RPE가 학습에 인과 무력. 학습은 PFC hidden-state inference가 매개.
- **Gershman 2024**: Belief-state RPE framework — RPE가 inferred state에 작동, classical conditioning 데이터 재해석.
- **Huang 2024 (Drosophila)**: PPL1-DAN voltage-imaging로 bi-directional valence coding, STM이 LTM을 gate, **paradoxical extinction enhancement** (10분 후 extinction이 LTM 강화 → habit 끊기 어려움 회로 단서). 진화적 보존 강력 시사.

**갱신 페이지**:
- [[concept-dopamine-reward-system]] — 진영별 도전, fly evidence 추가.
- [[adam-2026-dopamine-takes-hit-how-neuroscience]] — 9편을 핵심 1차 자료로 cross-link.
- [[lee-2025-hijacked-brain-modern-obesity-cue]] — habit 회로 단서 (Huang 2024).
- [[index.md|wiki/index.md]] — 새 카테고리 🎯 도파민 & 보상·동기 신설 (10 entries). 총 34 페이지.

**식이 연구 함의**:
- 5 maladaptive eating types ([[lee-2025-hijacked-brain-modern-obesity-cue]])의 회로 분리에 진영별 framework 적용 가능.
- Cue-evoked·food addiction·habit의 **DA + cortical inference 이중 매개** 가설 — DTx/electroceutical 표적 분리.
- Habit이 끊기 어려움의 분자 단서 (paradoxical extinction) — DTx의 cue exposure 시점 설계 critical.

## 2026-04-30 — ingest (논문 6편 — 사용자 lab 4편 포함)

`raw/`에 6편 추가:
1. [[kim-2024-unified-theoretical-framework-underlying-regulation]] — NMPU framework (BioEssays 2024, 사용자 lab)
2. [[cheon-2025-lateral-hypothalamus-and-eating-cell]] — LH 종합 (EMM 2025, 사용자 lab)
3. [[park-2025-glucagon-like-peptide-1-and-hypothalamic]] — GLP-1 cognitive satiation (DMJ 2025, 사용자 lab)
4. [[de-lartigue-2026-critical-role-gut-brain-signalling]] — Gut-brain (NRGH 2026, 사용자 공저)
5. [[lee-2025-hijacked-brain-modern-obesity-cue]] — Hijacked brain (JOMES 2025, 사용자 lab)
6. [[adam-2026-dopamine-takes-hit-how-neuroscience]] — Dopamine 논쟁 (Nature Feature 2026)

**핵심 발견**:
- 4편이 사용자(최형진) 본인 lab — 연결된 연구 프로그램.
- **NMPU framework** (Need-Motivation-Pleasure-Utility) 가 wiki의 이론 backbone.
- DMH GLP-1R 뉴런이 **pre-ingestive cognitive satiation** 매개 — "신호등 보고 미리 브레이크".
- **3-stage diet-induced obesity**: reinforcement-driven → compensatory (vagal 보호) → vagal dysfunction.
- **5 maladaptive eating types** (cue·habit·addiction·emotion·restraint)별 personalized DTx + electroceutical.
- **Dopamine RPE** 가설이 도전 받는 중 (ANCCR, action prediction, threat 등).

**새 페이지 10**:
- 논문 6 (위)
- 회로 개념: [[concept-lateral-hypothalamus]], [[concept-vagal-afferent-neurons]], [[concept-dopamine-reward-system]]
- 행동 개념: [[concept-need-motivation-pleasure-utility]], [[concept-appetitive-consummatory-phases]]
- 인물: [[person-choi-hyung-jin]]

**갱신 페이지 4**:
- [[concept-glp-1]] — DMH GLP-1R cognitive satiation, hypothalamic 5 nucleus, hindbrain NTS vs AP, tanycytes 추가.
- [[concept-arcuate-nucleus]] — feed-forward sensory cue 억제, BNC2, NMPU Need 인코딩.
- [[overview-appetite-energy-homeostasis]] — 3-layer 통합 (이론·회로·임상).
- [[index.md|wiki/index.md]] — 카테고리 정리 (총 25 페이지).

## 2026-04-29 — other (Ch 18 보충안 v2 — Steinert 2017 통합)

`drafts/ch18-supplement-2026-04-29.md`를 v2로 보강. 새 추가 내용:
- 1차 reference로 [[steinert-2017-ghrelin-cck-glp-1-pyy-secretory|Steinert 2017]] 격상.
- **CCK paradigmatic RCT 3편** 본문 데이터 (Lieverse 1995 — 18%↓; Matzinger 2000 — loxiglumide 차단; Beglinger 2001 — loxiglumide 단독 식사량↑).
- 18.2 EEC 4-mode 분비 (endocrine·neurocrine·paracrine·**neuropod**) 단락.
- 18.3 GOAT/acyl-ghrelin 분자 사실 + 폐쇄형 함의 + hedonic 평가.
- 18.5.2 GLP-1 두 phase 분비 + 원위 소장 + RYGB 폭증.
- 영양소 감지 수용체 박스 (FFAR1/4, CASR, T1R, TGR5 등).
- PYY(3-36) 짧은 보조 언급.
- 참고문헌 13 → 38건 확장 (★표시 3건은 raw/ 원본 보유).
- 작업 체크리스트 23개 항목.

위키 ingest 아님 — 챕터 작성 지원 작업.

## 2026-04-29 — ingest (Steinert 2017 Physiol Rev)

`raw/`에 [[steinert-2017-ghrelin-cck-glp-1-pyy-secretory]] (Physiol Rev 97:411–463, 2017) 정리. Ghrelin·CCK·GLP-1·PYY(3-36) 4종 위장관 호르몬에 대한 권위 있는 종합 리뷰 — 6개 physiological criteria로 평가.

**핵심 발견**:
- 인간에서 endocrine 신호로 **완전 입증된 것은 CCK satiation과 GLP-1 incretin 뿐**.
- Ghrelin: physiological dose에서 식사량 효과 없음 → endocrine hunger signal 입증 부족, 보상 회로(VTA) 작용이 우세할 가능성.
- PYY(3-36): 효과적 IV 용량이 메스꺼움 유발 → physiological 신호 미입증.
- 4가지 signaling mode (endocrine, neurocrine, paracrine, **neuropod**) — local signaling 검증 방법 부재가 핵심 한계.

**새 페이지 6**:
- 논문: [[steinert-2017-ghrelin-cck-glp-1-pyy-secretory]]
- 호르몬: [[concept-cck]], [[concept-glp-1]], [[concept-pyy-3-36]]
- 회로/세포: [[concept-enteroendocrine-cells]]
- 메커니즘: [[concept-incretin-effect]]

**갱신 페이지 4**:
- [[concept-ghrelin]] — GOAT, 폐쇄형 구조, 식후 억제 매개체 (insulin·CCK·PYY), Steinert 2017 평가 추가.
- [[overview-appetite-energy-homeostasis]] — phase별 4-호르몬 프레임워크로 확장, 인간 입증 현황표, RYGB natural experiment, local signaling 한계 추가.
- [[index.md|wiki/index.md]] — 신규 페이지들 카테고리에 추가 (총 14페이지).
- 본 log.

**Ch 18 보충안 함의**: 본 논문은 `drafts/ch18-supplement-2026-04-29.md`의 1차 reference로 격상해야 함. CCK satiation의 paradigmatic RCT 3편 (Lieverse 1995, Matzinger 2000, Beglinger 2001) 모두 본 논문에서 정리. PYY(3-36)을 포함시킬지는 TOC 결정에 달림.

## 2026-04-29 — other (Ch 18 보충안 작성)

식락학 교재 Ch 18 (`raw/식락학 최형진 Ch 18_v2.docx`) 보충안을 출판회의 안건 (`raw/출판 회의 안건_0406 수정 v2.docx`) [첨부 1] 목차·운영 조항 기반으로 작성. 산출: `drafts/ch18-supplement-2026-04-29.md`.

핵심 발견: 목차는 ghrelin/leptin/insulin/**CCK**, 현 v2 제목은 GLP-1. CCK 본문 부재, 인슐린 본문 1줄. 코멘트 박스·Food Chemistry 참고문헌 미반영. 보충안에 인슐린 확장·CCK 신규·코멘트 박스·인용 13건·그림 5개 권장 포함. raw/ 원본은 위키 규칙상 미수정.

본 작업은 위키 ingest/query/lint가 아닌 chapter 작성 지원 작업. 위키 페이지 신규 생성 없음.

## 2026-04-29 — ingest (논문 2편)

`raw/`에 [[cummings-2001-preprandial-rise-in-plasma-ghrelin]] (Diabetes 2001), [[perakakis-2021-leptin-in-leanness-and-obesity]] (JACC 2021) 정리.

새 페이지 8:
- 논문: [[cummings-2001-preprandial-rise-in-plasma-ghrelin]], [[perakakis-2021-leptin-in-leanness-and-obesity]]
- 호르몬 개념: [[concept-ghrelin]], [[concept-leptin]]
- 회로 개념: [[concept-arcuate-nucleus]], [[concept-npy-agrp-neurons]], [[concept-pomc-neurons]]
- 종합: [[overview-appetite-energy-homeostasis]]

새 카테고리 추가: 🍽️ 섭식 & 에너지 항상성. `wiki/index.md` 갱신.

## 2026-04-29 — init

위키 초기화. `CLAUDE.md`, `raw/`, `wiki/`, `wiki/index.md`, `wiki/log.md` 생성.
초기 카테고리 10개 설정 (회로/시스템, 분자세포, 방법론, 인지행동, 질환, AI×NS, 개념, 인물, 종합, 기타).
