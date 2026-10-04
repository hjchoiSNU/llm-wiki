# 뇌과학 LLM Wiki — 운영 규칙 (Schema)

이 위키는 사용자(뇌과학 연구자/교수)의 연구·학습에서 쌓이는 지식을 축적하는 개인 나무위키입니다.
사용자가 자료(주로 논문 PDF)를 Google Drive `llm-wiki-raw` 폴더에 넣으면, Claude가 읽고 정리해 이 저장소의 `content/`에 페이지로 만들고 유지합니다.

**이 저장소(`v4` 브랜치의 `content/`)가 위키의 유일한 원본입니다.** 클라우드 세션과 로컬 데스크톱 세션 모두 여기에 직접 커밋합니다. `v4`에 push하면 GitHub Actions가 공개 사이트를 자동 배포합니다.

---

## 핵심 원칙 (절대 규칙)

1. **No web search (default)**: 답변(query)·건강검진·일반 ingest 시 `WebSearch`/`WebFetch` 사용 금지. 답변은 이 위키 안의 내용에서만.
   **예외**: §4 일일 자동 ingest 모드에서는 PubMed E-utilities, journal RSS, PMC OA PDF, Crossref API 한정으로 web 사용 허용.
2. **Wiki-first**: 위키에서 답할 수 없으면 `llm-wiki-raw`의 원본을 다시 읽고 위키를 보강한 뒤 답합니다.
3. **Honest gaps**: 위키와 원본 어디에도 없으면 "자료 없음"이라고 명시합니다. 추측·창작 금지.
4. **Flat structure**: `content/`는 하위 폴더 없이 평면 관리. 분류는 `content/index.md`에서만. (digest 파일은 `content/digest-YYYY-MM-DD.md`로 평면 유지.)
5. **Read-only raw**: `llm-wiki-raw` 안의 파일은 절대 수정·삭제·이름변경하지 않습니다.
6. **PDF는 저장소에 넣지 않는다**: 이 저장소는 공개입니다. 논문 PDF(저작권)는 Drive에만 두고 커밋하지 않습니다.
7. **사이트 엔진은 건드리지 않는다**: `quartz/`, `quartz.config.ts`, `quartz.layout.ts`, `.github/`는 사용자가 요청할 때만 수정합니다.

---

## 저장 위치

```
이 저장소 (GitHub hjchoiSNU/llm-wiki, 브랜치 v4)
├── CLAUDE.md          ← 이 파일 (Schema)
├── content/           ← 위키 (Claude가 작성/관리, flat)
│   ├── index.md       ← 전체 목차 (카테고리별)
│   ├── log.md         ← 작업 이력 (append-only, 최신이 위)
│   ├── digest-YYYY-MM-DD.md   ← 일일 자동 ingest 결과 (flat)
│   └── *.md           ← 위키 페이지들 (flat)
├── handoff/           ← 세션 간 인계 메모
└── quartz/ 등         ← 사이트 엔진 (Quartz v4)

Google Drive
├── llm-wiki-raw/      ← 원본 자료 (사용자 추가, Claude 읽기 전용)
└── llm-wiki-inbox/    ← 일일 digest가 올리는 후보 PDF
```

**세션 종류별 작업 위치**

| | 클라우드 세션 | 로컬 데스크톱 세션 |
|---|---|---|
| 위키 읽기·쓰기 | 이 저장소의 `content/` | `C:\Users\hjcho\내 드라이브\llm-wiki-share` (Drive 동기화 폴더) |
| 원본 PDF 읽기 | Google Drive 커넥터로 `llm-wiki-raw` | `C:\Users\hjcho\내 드라이브\llm-wiki-raw` |
| 저장소 반영 | 직접 커밋·push | 동기화 스크립트가 자동 처리 (git 명령을 직접 쓰지 않음) |

이 문서에서 `raw/`는 Drive의 `llm-wiki-raw` 폴더를 뜻합니다. 페이지 frontmatter의 `source: raw/<파일명>`도 그 폴더 안의 파일명입니다.

**클라우드 세션의 작업 순서**

1. 시작 전에 `v4`를 최신으로 받습니다 (`git pull`).
2. `content/`를 수정합니다.
3. 커밋하고 `v4`에 push합니다. 다른 브랜치로 나누면 사이트에 배포되지 않습니다.
4. push가 거부되면 `git pull --rebase` 후 다시 push합니다. force push는 하지 않습니다.

**Drive `llm-wiki-share`는 데스크톱용 작업 사본입니다.** 데스크톱의 동기화 스크립트(`sync-wiki-to-site.ps1`, 세션 시작·종료 시와 30분마다 실행)가 이 폴더와 저장소를 양방향으로 맞춥니다. 클라우드 세션은 Drive 커넥터로 이 폴더에 위키 페이지를 만들거나 옮기지 않습니다 (커넥터는 기존 파일 내용을 고칠 수 없고, 새로 만든 파일은 저장소와 어긋납니다).

---

## 파일명 규칙

| 종류 | 패턴 | 예시 |
|---|---|---|
| 논문 페이지 | `{first-author-lastname}-{year}-{first-5-title-words}.md` | `tononi-2016-integrated-information-theory-of.md` |
| 개념 페이지 | `concept-{kebab-case}.md` | `concept-default-mode-network.md` |
| 인물 페이지 | `person-{lastname-firstname}.md` | `person-tononi-giulio.md` |
| 종합/리뷰 | `overview-{kebab-case}.md` | `overview-consciousness-theories.md` |

논문 페이지 파일명은 제목의 **첫 5단어를 모두** 씁니다 (하이픈으로 이어진 단어는 한 단어). `llm-wiki-raw`의 파일명은 사용자가 넣은 그대로 둡니다.

---

## 위키 페이지 형식 (필수 템플릿)

모든 위키 페이지는 다음 구조를 따릅니다:

```markdown
---
title: <페이지 제목>
type: paper | concept | person | overview
created: YYYY-MM-DD
updated: YYYY-MM-DD
source: raw/<파일명>           # 논문 페이지인 경우
source_suppl: raw/<파일명>     # (선택) 보충자료 PDF
source_alias: raw/<파일명>     # (선택) 같은 논문의 사본·다른 이름 파일. 여러 개면 ["raw/a.pdf", "raw/b.pdf"]
authors: [...]                  # 논문 페이지인 경우
year: YYYY                      # 논문 페이지인 경우
---

> [!takeaway] 연구 방향 관점의 핵심
> 이 내용에서 사용자가 자기 뇌과학 연구에 가져가야 할 핵심 1–3줄.
> 왜 중요한가, 어떻게 활용할 수 있는가.

# <페이지 제목>

## 한 줄 요약
...

## 핵심 내용
... (논문이면 background / method / result / claim 위주)

## 관련 페이지
- [[다른 페이지]] — 관계 설명
- [[또 다른 페이지]] — 관계 설명
```

**callout 블록은 페이지 맨 앞 frontmatter 직후에 반드시 위치**. 본문 어디에서도 다른 페이지를 언급하면 즉시 `[[wikilink]]`로 연결합니다.

---

## 운영 방법 (5가지)

### 1. 자료 넣기 (Ingest)

사용자가 `llm-wiki-raw`에 새 PDF를 넣고 "ingest" / "이거 정리해줘" / 파일명을 언급하면:

1. **새 자료 찾기**: `llm-wiki-raw`의 파일 목록을 모든 페이지의 `source:`·`source_suppl:`·`source_alias:` 값과 비교합니다(`source_alias` = 같은 논문의 사본·다른 이름 파일). 오래된 페이지는 `source:` 문자열이 실제 파일명과 조금 다를 수 있으니, "새 파일"로 판정하기 전에 제목의 특징적인 구절로 `content/`를 검색합니다.
2. **중복 확인**: 같은 논문의 페이지가 이미 있으면(제목, 또는 first-author + 연도 + 제목 주요어 일치) 새로 만들지 않고 기존 페이지를 보강합니다.
3. PDF **전문**을 읽습니다.
   - 클라우드 세션: Drive 커넥터 `read_file_content`(fileId)로 본문 텍스트를 받습니다. `download_file_content`(base64)는 컨텍스트를 크게 소모하므로 쓰지 않습니다. 받은 텍스트에 Methods·Results(또는 리뷰의 본문 절)와 끝부분(참고문헌 직전)이 모두 있는지 확인하고, 잘렸거나 스캔본이라 텍스트가 거의 없으면 "전문 미확보"로 봅니다. 그림·표의 시각 정보는 클라우드에서 볼 수 없으므로 figure legend 기준으로 정리하고, 그림 해석이 핵심인 논문은 데스크톱 세션에 남깁니다.
   - 데스크톱 세션: `C:\Users\hjcho\내 드라이브\llm-wiki-raw`의 PDF를 직접 읽습니다.
   - 전문을 읽지 못한 논문은 ingest하지 않고 사용자에게 `llm-wiki-raw`에 PDF를 넣어 달라고 요청합니다. 웹에서 초록·메타데이터를 가져와 페이지를 만들지 않습니다.
4. (선택) 핵심 takeaway를 사용자와 짧게 확인합니다.
5. `content/`에 새 페이지를 위 템플릿대로 작성합니다.
   - 맨 위 callout: 사용자의 뇌과학 연구 관점 takeaway.
   - 본문은 사실 그대로, 인용 가능하게.
6. **교차참조 적극 추가**:
   - `content/index.md`와 기존 페이지를 훑어 관련 페이지를 찾습니다. index 항목 끝의 `· 🔑` 검색 키(핵심 용어·약어·별칭)까지 대조합니다.
   - 이어서 새 논문의 핵심 용어·약어(동의어·풀네임 포함, 예: `GLP-1R|Glp1r|glucagon-like peptide-1 receptor`)로 `content/`를 grep해 index에 드러나지 않은 관련 페이지를 찾습니다. 페이지 전체가 아니라 일치한 단락만 읽어 비용을 줄입니다.
   - 새 페이지에서 기존 페이지로 `[[wikilink]]`.
   - 기존 페이지의 "관련 페이지" 섹션에도 새 페이지 역방향 링크 추가.
7. 새로 등장한 핵심 개념·인물은 별도 `concept-*` / `person-*` 페이지 생성 검토.
8. `content/index.md` 갱신: 적절한 카테고리에 한 줄 요약과 함께 추가하고 총 페이지 수를 맞춥니다. 항목 끝에 `· 🔑 키1, 키2, …` 형식으로 **요약 줄에 없는** 핵심 용어·약어·별칭 3–6개를 답니다(본문 풀네임은 `약어(풀네임)`).
9. `content/log.md` 맨 위에 ingest 항목 추가.
10. 커밋 후 `v4`에 push.

> 한 자료 ingest는 보통 **5–15개** 위키 페이지를 새로 만들거나 갱신합니다.

### 2. 질문하기 (Query)

사용자가 질문하면:

1. `content/index.md`를 먼저 읽어 관련 페이지 후보를 추립니다.
2. 관련 위키 페이지를 읽고 답변을 종합합니다.
3. **답변 시 출처를 `[[wikilink]]`로 명시**.
4. 위키에 답이 없으면:
   - (a) 관련 `llm-wiki-raw` 원본을 다시 읽고 위키를 보강한 뒤 답.
   - (b) 원본도 없으면 "자료 없음" 명시. 절대 추측 금지.
5. 답변이 가치 있는 새 통찰/종합이면 `content/`에 새 페이지로 보관 제안 (사용자 확인 후 작성).
6. `content/log.md`에 query 항목 추가 (한 줄로 간단히).

### 3. 건강검진 (Health Check / Lint)

사용자가 "건강검진" / "lint" / "위키 점검" 라고 하면:

1. **모순 검사** — 페이지 간 충돌하는 주장.
2. **신선도 검사** — 더 최신 논문이 들어와서 갱신이 필요한 페이지.
3. **고아 페이지** — 어디서도 인바운드 링크가 없는 페이지.
4. **누락 링크** — 본문에 언급된 다른 페이지/개념이 `[[wikilink]]`로 연결 안 된 곳.
5. **인덱스 일치** — `content/index.md`와 실제 `content/*.md` 파일 목록 비교.
6. **깨진 링크** — 존재하지 않는 페이지로의 `[[wikilink]]`.
7. **callout 누락** — 맨 앞 takeaway callout이 빠진 페이지.
8. **중복 페이지** — 같은 논문·주제가 다른 파일명으로 두 번 만들어진 경우.

발견사항을 리스트로 보고 → 사용자 승인 → 수정 → `content/log.md`에 lint 항목 추가.

### 4. 일일 자동 ingest (Daily Auto-ingest)

매일 **0800 KST**에 원격 cron agent가 실행. **Drive 업로드 + Gmail digest** 형태.

#### 검색 대상 저널 (11) + impact factor

| 저널 | NLM 약어 | IF (근사) |
|---|---|---|
| New England Journal of Medicine | N Engl J Med | 96 |
| Lancet | Lancet | 98 |
| Nature Medicine | Nat Med | 58 |
| Nature | Nature | 50 |
| Cell | Cell | 45 |
| Science | Science | 45 |
| Nature Neuroscience | Nat Neurosci | 21 |
| Nature Metabolism | Nat Metab | 18 |
| Nature Communications | Nat Commun | 15 |
| Neuron | Neuron | 14 |
| Science Advances | Sci Adv | 12 |

> ⚠️ IF는 **근사값(2023 JCR 기준)**으로 추천 가중치 계산용 **설정 파라미터**일 뿐, 위키 본문에 사실로 인용하지 않음. 값이 바뀌면 본 표만 사용자가 수정. 저널 추가 시 이 표에 IF도 함께 등록.

#### 토픽 필터 (any-match)
- **섭식·에너지대사**: appetite, "food intake", "feeding behavior", satiety, obesity, hypothalamus, arcuate, "lateral hypothalamus", leptin, ghrelin, GLP-1, PYY, melanocortin
- **gut-brain**: vagus, enteroendocrine, "gut-brain axis", "vagal afferent"
- **보상·동기**: dopamine, "food reward", "reward circuit", "feeding motivation", VTA, "nucleus accumbens", "reinforcement learning", "reward prediction error"
- **임상·치료**: "digital therapeutics", electroceutical, neuromodulation, "anti-obesity", "GLP-1 agonist", bariatric

**매칭 규칙 (오매칭 억제)**:
- 모든 키워드는 **`[tiab]` (Title/Abstract) 필드 한정**으로 매칭 (저자 소속·MeSH 확장·all-fields 매칭 금지).
- **인용부호로 PubMed 자동 확장(term mapping) 차단**: 예) bare `feeding`은 `feeds`로 확장돼 "social-media feeds"·곤충 "feeding"을 오매칭 → `"feeding behavior"[tiab]`·`"food intake"[tiab]`로 한정. `reward`·`motivation`·`prediction error` 같은 promiscuous 단어도 맥락 구절(`"food reward"`, `"feeding motivation"`, `"reward prediction error"`)로 좁힘.
- 단, 명확히 단일어로 충분한 도메인 특이어(leptin, ghrelin, obesity, hypothalamus, melanocortin, VTA, bariatric 등)는 그대로 둠.

(필터 키워드·매칭 규칙은 본 CLAUDE.md만 수정해 갱신.)

#### 추천 점수 (relevance × impact factor)

토픽 필터를 통과한 후보 각각에 **추천점수(0–1)**를 매겨 digest를 정렬한다. 점수가 높을수록 위에·강조.

1. **관련도 점수 (relevance, 0–10)** — agent(Claude)가 후보의 title+abstract를 읽고 **사용자 연구 관심사 대비 관련도**를 0–10으로 채점하고 **한 줄 추천사유**를 생성. 채점 기준은 토픽 필터 4축(섭식·에너지대사 / gut-brain / 보상·동기 / 임상·치료)과의 직접성·새로움·사용자 lab(최형진·NMPU·DTx·시상하부 회로) 연관성.
2. **IF 정규화** — `IF_norm = min(IF / 100, 1.0)` (위 저널 표 값 사용. 표에 없는 저널이 섞이면 IF=10으로 보수적 처리).
3. **최종 추천점수** — 가중 합산:
   ```
   추천점수 = 0.7 × (relevance / 10) + 0.3 × IF_norm
   ```
   (관련도 70% + IF 30%. 관련도가 주도하되 IF 높은 저널이 의미있게 끌어올림.)
4. **관련도 하한선 (floor, 오매칭 제거)** — relevance < **3**인 후보는 **digest에서 완전히 제외**(키워드 잔여 오매칭 제거). 제외분은 발송하지 않고, 메일 하단에 "제외 N건(오매칭/저관련)" 카운트만 한 줄로 표기.
5. **3-tier 분류** (제외되지 않은 후보):
   - relevance ≥ **6** → **★추천** (상단 강조 섹션).
   - **3 ≤ relevance < 6** → 일반 목록 (참고용, 하단).
6. 정렬: 각 tier 안에서 **추천점수 내림차순**. 동점이면 IF 높은 순.

(가중치 0.7/0.3, ★추천 임계값 6, **floor 3**, IF/100 정규화는 모두 본 CLAUDE.md에서만 조정.)

#### 워크플로
1. 각 저널의 **D-1 신규 논문**을 PubMed E-utilities로 조회 → 토픽 필터 매칭 → 최대 30건.
2. 각 후보의 metadata (title, authors, journal, DOI, PMID, PMC ID, abstract) 수집.
2.5. **위키 중복 제거 (이미 등록된 논문 배제)** — digest는 **위키에 아직 없는 논문만** 추천한다. 점수화 전에, 각 후보가 이미 `content/`에 등록돼 있는지 확인해 제외한다. 매칭 기준: 기존 논문 페이지의 `title` / `source: raw/…pdf` 파일명 / 페이지 파일명(`{lastname}-{year}-…`)을 하나의 텍스트 풀로 모아, 후보 제목을 정규화(소문자·구두점 제거)해 비교. 제목이 사실상 동일하거나 **first-author lastname + 연도 + 제목 주요어**가 일치하면 중복으로 제외. **애매하면 남긴다**(명백 동일 논문만 제외). 제외분은 발송하지 않고 "이미 위키에 등록 M건" 카운트만 표기.
3. **추천 점수화 + 오매칭 제거** (위 "추천 점수" 규칙, 2.5에서 남은 후보만 대상): 각 후보에 relevance(0–10)·한 줄 추천사유 부여 → **relevance < 3은 제외** → 저널 IF로 **추천점수** 산출 → relevance≥6은 ★추천. (제외 건수는 카운트만 보관.)
4. **OA 분기** (제외되지 않은 후보만):
   - PMC ID 또는 Crossref `is-oa=true` → PDF 다운, **Google Drive `llm-wiki-inbox/`** 폴더에 업로드 (파일명: `{first-author-lastname}-{year}-{first-5-title-words-kebab}.pdf`).
   - 비-OA → metadata만.
5. **출력**:
   - **Gmail** 발송 (subject: `📚 LLM-Wiki Daily Digest YYYY-MM-DD`) — **★추천(relevance≥6)** 섹션 → 일반(3≤rel<6) 섹션 순. 각 섹션 안에서 추천점수 내림차순.
   - 각 항목: 제목·저자·저널·**IF**·**relevance 점수**·**추천점수**·**추천사유**·DOI·OA여부·Drive 링크·abstract.
   - 메일 상단 요약에 **이미 위키에 등록돼 제외 M건**, 맨 하단에 **제외 N건(오매칭/저관련, relevance<3)** 카운트 한 줄.
   - 통과 후보 0건이면 "신규 후보 없음" 한 줄로 발송.
6. **사용자 작업** (수동, ~분 단위):
   - Drive `llm-wiki-inbox`에서 관심 OA PDF만 `llm-wiki-raw`로 이동.
   - 비-OA 중 본인 액세스로 받은 PDF도 `llm-wiki-raw`에 추가.
   - Claude 세션에서 "오늘 digest ingest" / "ingest" 트리거 → §1 ingest 워크플로 적용.

#### agent 제약
- web fetch는 PubMed/RSS/PMC OA/Crossref/Google API/Gmail API 한정.
- 토픽 필터·저널 목록 변경은 사용자만.

### 5. 예약 자동 ingest (Scheduled Auto-ingest: `llm-wiki-raw` → 위키)

사용자가 Drive `llm-wiki-raw`에 넣은 PDF를, 데스크톱이 꺼져 있어도 클라우드 예약 작업이 위키에 반영합니다. 실행 프롬프트가 "§5 예약 자동 ingest 실행"이면 이 절을 따릅니다. 사용자가 지켜보지 않으므로 **확인 질문 없이 진행하되, 애매하면 건너뛰고 보고**합니다.

1. **준비**: `git checkout v4 && git pull`. `llm-wiki-raw` 폴더 ID는 `1Q9o3PVjOdFfRinmnmVKgjRwXJJnAGuVt`. Drive 커넥터 `search_files`(`parentId = '<폴더 ID>'`, 페이지 끝까지)로 PDF 목록(제목·fileId·크기·createdTime)을 받습니다.
2. **새 파일 판정**: §1-1 규칙대로 `content/*.md`의 `source:`·`source_suppl:`·`source_alias:` 값과 비교합니다(유니코드 NFC 정규화 후 비교; YAML 목록 값은 따옴표 안의 쉼표를 구분자로 보지 않습니다). 정확히 일치하지 않으면 파일명의 특징적 제목 구절·제1저자·연도로 `content/`를 grep합니다. 같은 논문으로 보이는 페이지가 있으면 **이미 ingest된 것으로 간주**합니다(중복 생성 방지가 우선). ` 1.pdf`·`(1).pdf` 같은 사본, 책·챕터 전체 PDF는 건너뜁니다.
3. **건너뛰기 목록**: `handoff/auto-ingest-skipped.md`에 있는 파일은 다시 시도하지 않습니다(사용자가 그 줄을 지우면 재시도). 이번 실행에서 건너뛴 파일은 사유와 함께 이 목록에 추가합니다. 사유 예: 전문 미확보, 30MB 초과로 텍스트 추출 실패, 이미 있는 페이지와 같은지 애매, 그림 해석 필수.
4. **실행 한도**: createdTime 최신순으로 **한 번에 최대 3편**. 남은 새 파일은 다음 실행으로 넘깁니다.
5. **논문마다**: §1의 3–9단계를 수행합니다(4단계 사용자 확인은 생략). 기존 페이지는 "관련 페이지" 절, 해당 사실을 직접 다루는 문단, `index.md`, `log.md`만 고치고, 다른 페이지의 구조를 바꾸거나 페이지를 삭제·병합·이름변경하지 않습니다. `log.md` 항목 제목에는 `(자동)`을 붙입니다.
6. **반영**: 논문 한 편이 끝날 때마다 커밋(`auto-ingest: <새 페이지 파일명>`)하고 `v4`에 push합니다. 거부되면 `git pull --rebase` 후 재시도하고, 충돌이 나면 해당 논문 커밋을 되돌린 뒤 건너뛰기 목록에 "동기화 충돌"로 남깁니다. force push 금지.
7. **보고**: 마지막 메시지에 (a) ingest한 논문과 새로 만들거나 고친 페이지, (b) 건너뛴 파일과 사유, (c) 남은 새 파일 수를 짧게 정리합니다. 새 파일이 없으면 "새 PDF 없음" 한 줄로 끝냅니다.
8. **금지**: 웹 검색·웹 페치, Drive에 파일 생성·이동·삭제, `llm-wiki-share` 수정, PDF 커밋.

---

## 교차참조 원칙

- 본문에서 다른 페이지 주제가 언급되면 **즉시** `[[wikilink]]` 연결.
- 새 페이지 작성 시 최소 **2–3개** 기존 페이지로 링크 시도.
- 양방향 연결: A→B 링크 추가 시 B의 "관련 페이지"에도 A 추가.
- `[[concept-x]]`, `[[person-y]]` 같은 hub 페이지는 적극 활용.

---

## 카테고리 관리

카테고리는 `content/index.md`에서만 관리합니다. 자료가 쌓이며 자연스럽게 진화시킵니다.
한 카테고리가 30개 페이지를 넘거나 전체 페이지가 200개를 넘으면 카테고리 분할/재편을 사용자에게 제안합니다.

---

## 금지사항

- ❌ `WebSearch` / `WebFetch` 사용 (단, §4 일일 자동 ingest 시 제한적 허용)
- ❌ `llm-wiki-raw` 파일 수정·삭제·이름변경
- ❌ 위키·원본에 없는 사실을 추측으로 채우기
- ❌ 전문을 읽지 못한 논문을 초록·웹 정보만으로 ingest
- ❌ 사용자 확인 없이 페이지 대량 삭제·이동
- ❌ `content/` 안에 하위 폴더 생성
- ❌ PDF를 저장소에 커밋
- ❌ force push
