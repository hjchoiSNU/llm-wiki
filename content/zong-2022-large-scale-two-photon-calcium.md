---
title: "MINI2P: 자유행동 마우스 대규모 2-광자 칼슘 이미징 (Zong 2022)"
type: paper
created: 2026-07-28
updated: 2026-07-28
source: "raw/2022 Cell Large-scale two-photon calcium imaging in freely moving mice.pdf"
authors: [Weijian Zong, Horst A. Obenhaus, Emilie R. Skytøen, May-Britt Moser, Edvard I. Moser]
year: 2022
---

> [!takeaway] 연구 방향 관점의 핵심
> MINI2P는 **3 g 미만·0.7 mm 유연 케이블**의 소형 2-광자 현미경으로, 자유행동 마우스에서 **1,000개 이상(FOV 스티칭 시 10,000개 이상) 뉴런을 다중 평면으로 안정 기록**한다. 사용자 lab의 [[concept-lateral-hypothalamus|LH]]·[[concept-nucleus-accumbens|NAc]] 자연주의 섭식/보상 회로를 head-fixed 제약 없이 세포 단위로 관찰할 수 있는 오픈소스 도구 — [[concept-consumption-vigor|consumption vigor]]·granular motivational state 같은 자유행동 섭식 dynamics 측정 인프라. [[hyun-2022-tagging-active-neurons-by|Cal-Light]]·[[wang-2026-multimodal-alignments-of-in|TRU-FACT]] 등 활성-분자 정합 도구와 결합하면 NMPU 성분별 세포 발굴에 직결.

# MINI2P: 자유행동 마우스 대규모 2-광자 칼슘 이미징 (Zong 2022)

## 한 줄 요약
소형 2-광자 현미경 MINI2P를 개발해 자유행동 마우스에서 1,000개 이상 뉴런을 빠르고 고해상도로 다중 평면 이미징했고, 시각피질·내후각피질(grid cell)·해마 CA1(place cell)의 공간 튜닝을 자유 채집 중 보존된 채 기록했다. (Cell 2022;185:1240–1256, Moser lab, NTNU)

## 핵심 내용
- **무게·케이블 = 자유행동의 핵심 변수**: 자유 채집 행동은 miniscope 무게보다 **케이블 두께·강성**에 더 민감. MINI2P는 **<3 g(스티칭 어댑터 포함 2.4 g)**·**0.7 mm** 유연 케이블로 무구속 동물과 동등한 채집 행동 유지.
- **μTlens(quartet)**: 4개 piezo-membrane 렌즈 적층으로 만든 z-focusing 모듈. **0.06 g, <0.4 ms 반응, z-scanning 240 μm**(이전 60 μm 대비 확대) → 빠르고 안정적인 다중 interleaved 평면·3D 기능 이미징.
- **Tapered fiber bundle(TFB)**: tapered glass rod + 0.7 mm fiber bundle로, 1.5 mm 굵은 bundle에 근접한 형광 수집 효율을 0.7 mm 케이블로 달성.
- **MEMS scanner + HC-920 fiber**: hollow-core photonic-crystal fiber로 920 nm fs 펄스 전달; 두 버전 — **MINI2P-L**(대FOV, 15 Hz)·**MINI2P-F**(고속, 40 Hz).
- **세포 수율**: 단일 FOV로 VC 592·MEC 404·CA1 464 뉴런; FOV 확대(500×500 μm)로 VC 670·MEC 423; 다중 평면(4 planes)으로 **1,001 뉴런(비중복)**; **FOV 스티칭으로 같은 동물에서 10,000개 이상**(예: 2 평면 10,096 뉴런).
- **운동 아티팩트**: rigid motion SD <4 μm, nonrigid <3 μm(저속·고속 주행 모두), benchtop 2P 수준의 보정 품질(SPC drift ~0.25 μm).
- **장기 안정성**: 동일 세포를 5주(34일)까지 추적, 40% 이상 매칭.
- **검증**: VC(place-modulated)·MEC(grid cell)·CA1(place cell)에서 공간 튜닝 세포 기록 — 자유행동 중 spatial coding 보존.
- **접근성**: dry/water/glass 대물렌즈 교체 가능, 휴대형, **완전 오픈소스**.

## 관련 페이지
- [[concept-activity-molecular-registration]] — in vivo 활성↔분자정체 정합 방법론 hub(MINI2P 같은 in vivo 영상이 입력).
- [[hyun-2022-tagging-active-neurons-by]] — soma-targeted Cal-Light(활성 뉴런 태깅); 자유행동 이미징과 상보.
- [[wang-2026-multimodal-alignments-of-in]] — TRU-FACT(in vivo 영상↔공간전사체 정합); MINI2P 영상에 분자정체 부여 가능.
- [[xu-2020-behavioral-state-coding-by]] — CaRMA(칼슘+RNA-FISH); 세포타입 ensemble coding.
- [[mueller-2025-privi-towards-general-purpose-video]] — 자유행동 정량화 방법 인프라(행동 축).
- [[concept-lateral-hypothalamus]] · [[concept-nucleus-accumbens]] — 자연주의 섭식/보상 회로 기록 표적.
- [[concept-spatial-transcriptomics]] — 분자 아틀라스와의 결합 축.
- [[liu-2026-granular-motivational-interaction-and]] · [[concept-consumption-vigor]] — 자유행동 섭식 dynamics 측정 응용.
