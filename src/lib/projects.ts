export type ProjectStatus = 'featured' | 'additional' | 'current';

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  status: ProjectStatus;
  period: string;
  role: string;
  summary: string;
  stack: string[];
  highlights: string[];
  metrics: string[];
  challenge: string;
  solution: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: 'snaplink',
    title: 'Snaplink / Revede',
    subtitle: '스냅 작가와 고객을 연결하는 C2C 촬영 중개 플랫폼',
    status: 'featured',
    period: '2025 - 2026',
    role: '개발 팀장 · 프론트엔드 전반 · 앱/웹/어드민 운영',
    summary:
      'React Native 기반 iOS·Android 앱과 React 랜딩페이지·관리자 페이지를 개발하고, 앱 출시 이후 QA·버전 관리·웹 운영·사용자 행동 데이터 계측 환경까지 담당했습니다.',
    stack: ['React Native', 'React', 'React Query', 'Zustand', 'Firebase Analytics', 'Airbridge', 'BigQuery'],
    highlights: [
      '촬영 카테고리 탐색 → 작가 검색/프로필 조회 → 문의·예약 → 후기 작성으로 이어지는 핵심 사용자 플로우 구현',
      '회원가입·로그인 등 인증 관련 화면과 사용자 상태 관리 구현',
      '작가 포트폴리오, 작가 프로필, 검색·탐색, 문의·예약 관련 화면 개발',
      '서비스 소개 랜딩페이지와 운영용 어드민 대시보드 개발 및 호스팅 관리',
      'Firebase Analytics, Airbridge 기반 사용자 행동·유입 데이터 계측과 BigQuery 연동',
      '딥링크와 유입 추적 기능 구현',
    ],
    metrics: [
      '2026년 2월 iOS·Android 앱 출시',
      '초기 사용자 약 120명 가입',
      '별도의 본격적인 마케팅은 진행하지 않은 상태',
      '일부 작가와 사용자가 앱에 가입·접속했으나 실제 촬영 중개 및 예약 전환은 발생하지 않음',
      '초기 MVP 출시와 사용자 행동 데이터 수집 환경 구축 완료',
    ],
    challenge:
      '제한된 인력과 빠른 출시 일정 속에서 모바일 앱, 랜딩페이지, 관리자 페이지를 동시에 개발하고 실제 앱스토어 출시까지 완료해야 했습니다. 출시 이후에는 빠른 기능 구현 과정에서 분산된 화면 구조, 상태 관리, 이벤트 로깅을 운영 가능한 형태로 보완해야 했습니다. 특히 Firebase Analytics 이벤트 중복 수집, 잘못된 screen_view 기록, 자동 수집 이벤트와 커스텀 이벤트의 역할 중복으로 분석 데이터 신뢰성을 보장하기 어려웠습니다.',
    solution: [
      '공통 Analytics 모듈을 구축해 이벤트 로깅을 일원화했습니다.',
      '이벤트 중복 방지, 세션 단위 유입 정보 유지, 이벤트 버전 관리를 적용했습니다.',
      'Firebase Analytics 원본 데이터를 BigQuery와 연결했습니다.',
      '기존 어드민 UI에서 KPI·퍼널·유입 경로·행동 데이터를 확인할 수 있도록 데이터 구조를 정리했습니다.',
    ],
    links: [{ label: 'REVEDE-SNAPLINK Organization', href: 'https://github.com/REVEDE-SNAPLINK' }],
  },
  {
    slug: 'pertineo-ai-rookie',
    title: 'Pertineo / AI Rookie',
    subtitle: 'AI 자기소개서 분석 서비스 frontend와 FastAPI 기반 신규 백엔드 구축',
    status: 'featured',
    period: '2025 - 진행 중',
    role: '기존 Pertineo 프론트 팀원 · AI Rookie 풀스택 담당',
    summary:
      '기존 Pertineo 서비스의 기능과 사용자 흐름을 바탕으로, AI Rookie 버전에서 FastAPI 기반 백엔드를 새롭게 설계·구축하고 있습니다.',
    stack: ['React', 'React Query', 'Zustand', 'SSE', 'FastAPI', 'DynamoDB', 'Redis', 'AWS'],
    highlights: [
      '공지사항, 서비스 소개, 자기소개서 입력 내 회사/이력서 탭 입력 구현',
      '자기소개서 분석을 위한 자동완성 구현',
      '자기소개서 분석 대기 화면과 실시간 대기 화면 애니메이션 구현',
      'SSE 기반 실시간 스트림 처리와 pseudo progress bar 구현',
      '기존 서비스 경험을 기반으로 FastAPI 기반 신규 백엔드 설계·구축 중',
      'AI 서비스 자체를 제외한 프론트, 서버, 운영, 인프라 담당',
    ],
    metrics: ['기존 Pertineo client public repo 운영', 'AI Rookie 버전 현재 개발 중', '기존 서비스의 frontend 기능 구현 경험과 신규 FastAPI 백엔드 구축 경험 연결'],
    challenge:
      'AI Rookie 버전에서는 기존 Spring 코드를 단순히 문법 변환하는 것이 아니라, 기존 Pertineo의 기능과 요구사항을 바탕으로 FastAPI 백엔드를 새롭게 구축해야 합니다. 사용자 입력, 분석 요청, 실시간 대기 경험, 인증, 예외 처리, 로깅, 테스트, 운영 구조를 단계적으로 설계하면서 AI 분석 서비스와 제품 서버/API의 책임 경계를 분리해야 했습니다.',
    solution: [
      '기존 프론트엔드에서 사용자 입력, 분석 대기, SSE streaming 처리 등 실제 사용자 플로우를 구현하며 도메인을 파악했습니다.',
      'AI Rookie 버전에서는 AI 서비스 자체를 제외한 API, 서버 구조, 운영, 인프라 영역을 담당 범위로 분리했습니다.',
      'FastAPI 기반 구조를 새로 설계하며 인증, 예외 처리, 로깅, 테스트, 데이터베이스, 배포 구조를 단계적으로 구현 중입니다.',
    ],
    links: [{ label: 'khu-return-19', href: 'https://github.com/khu-return-19' }],
  },
  {
    slug: 'filterify-april',
    title: 'Filterify / April',
    subtitle: '앨범 커버를 반영한 멀티모달 음악 추천·필터링 프로젝트',
    status: 'featured',
    period: '2025',
    role: '데이터 수집 · 아키텍처 제안 · 평가/분석/실험 · 발표/보고서 일부 작성',
    summary:
      '앨범 커버 이미지와 앨범 소개 텍스트를 활용해 음원의 tone/theme 및 audio feature를 예측하고, 플레이리스트의 유기성을 해치는 트랙을 필터링한 데이터사이언스 캡스톤디자인 프로젝트입니다.',
    stack: ['Python', 'PyTorch', 'CLIP', 'LLM', 'Jupyter Notebook', 'Pandas', 'Scikit-learn'],
    highlights: [
      '약 500곡의 앨범 커버, 앨범 소개, audio feature 데이터셋 구축',
      'LLM 기반 tone/theme 추론과 CLIP image/text embedding 활용',
      'PyTorch 기반 lightweight Audio Feature Predictor 학습',
      'Mahalanobis distance, cosine similarity, K-means, ratio filtering 기반 필터링 전략 실험',
      '43명 대상 설문으로 ground truth 구축 후 Precision, Recall, F1-score 평가',
      'Cohen’s d, Information Gain, Logistic Regression coefficient, ROC 분석으로 모달리티 중요도 분석',
    ],
    metrics: ['약 500곡 데이터셋 구축', '43명 대상 설문 조사', 'λ=1.5 기준 MAE 0.15, Cosine Similarity 0.81', '앨범 커버 이미지/visual feature가 유기성 판별에 중요한 feature로 분석됨'],
    challenge:
      '기존 음악 추천 시스템은 청취 기록과 audio feature 중심으로 구성되는 경우가 많았고, 앨범 커버 이미지가 플레이리스트 유기성에 기여할 수 있는지 정량적으로 확인해야 했습니다.',
    solution: [
      '앨범 커버와 소개 텍스트를 수집하고 tone/theme 정보를 LLM으로 추론했습니다.',
      'CLIP embedding과 audio feature predictor를 활용해 멀티모달 feature를 구성했습니다.',
      '사용자 설문 기반 ground truth를 만들고 여러 filtering 전략을 비교했습니다.',
      '분석 결과 visual feature가 플레이리스트 유기성 판별에 중요한 역할을 할 수 있음을 확인했습니다.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/youngyoung2345/Filterify' }],
  },
  {
    slug: 'cooronite',
    title: 'Cooronite',
    subtitle: '공유형 이동장치 주차 문제 해결 서비스',
    status: 'additional',
    period: '2025',
    role: '개발 전반',
    summary: '전동킥보드, 전동자전거 등 공유형 이동장치의 주차 문제 해결을 위한 서비스를 개발했습니다.',
    stack: ['FastAPI', 'React Native', 'Vercel', 'Render'],
    highlights: ['Vercel + Render 기반 개발/배포 경험', '서버, 모바일, 웹 구성 경험'],
    metrics: ['보조 프로젝트로 짧게 언급'],
    challenge: '기존 파일이 일부 소실되어 구체적인 구현 설명은 제한적입니다.',
    solution: ['FastAPI와 배포 경험을 보여주는 보조 근거로 활용합니다.'],
  },
  {
    slug: 'mindlinker',
    title: 'Mindlinker',
    subtitle: '상담자-내담자 매칭 서비스',
    status: 'current',
    period: '진행 중',
    role: 'React 프론트엔드 개발',
    summary: '상담자와 내담자를 심리적 선호와 상담 스타일에 맞게 연결하는 서비스의 React 기반 프론트엔드를 개발 중입니다.',
    stack: ['React', 'JavaScript'],
    highlights: ['진행 중 프로젝트로 Currently Working On 섹션에 짧게 소개'],
    metrics: ['개발 중'],
    challenge: '현재 진행 중이라 메인 case study로 다루기에는 아직 이릅니다.',
    solution: ['진행 중 프로젝트로 짧게 소개하고 완성 후 case study로 확장합니다.'],
  },
];

export const featuredProjects = projects.filter((project) => project.status === 'featured');
export const additionalProjects = projects.filter((project) => project.status !== 'featured');

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
