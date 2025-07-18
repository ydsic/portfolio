import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faDatabase,
  faChartLine,
  faCogs,
  faUsers,
  faCode,
  faTrophy,
  faLightbulb,
  faX,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { skillIcons } from "../../../../constants/skillIcons";
import kovalt_new_1 from "../../../../assets/projectimg/kovalt_new_1.png";
import { useEffect, useState } from "react";

type CloseModal = {
  onClose: () => void;
  githubUrl?: string;
  liveUrl?: string;
};

export default function RiotGames({ onClose, githubUrl, liveUrl }: CloseModal) {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // 모달이 열릴 때 body에 overflow hidden 추가
  useEffect(() => {
    // 배경 스크롤 방지
    document.body.style.overflow = "hidden";

    // 컴포넌트 언마운트 시 원래대로 복원
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const techSkills = [
    "React",
    "TypeScript",
    "TailwindCSS",
    "Zustand",
    "Node.js",
    "MongoDB",
    "Jenkins",
    "Docker",
    "Github",
    "Unix",
    "Raspberry-Pi",
  ];

  const [imgModal, setImgModal] = useState<string | null>(null);

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-[10000] p-4 pt-[9vh]"
      onClick={handleOverlayClick}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
    >
      {/* 이미지 원본 모달 */}
      {imgModal && (
        <div
          className="fixed inset-0 z-[11000] flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setImgModal(null)}
        >
          <img
            src={imgModal}
            alt="원본 이미지"
            className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
      <div className="bg-[var(--sub-bg)] rounded-lg shadow-xl w-full max-w-6xl max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-[var(--sub-bg)] border-b border-[var(--border)] p-6 flex justify-between items-center rounded-t-lg">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faGlobe}
              size="2x"
              className="text-blue-500"
            />
            <h1 className="text-3xl font-bold text-[var(--main-text)]">
              KoValT.info
            </h1>
          </div>
          <div className="flex items-center gap-3">
            {/* GitHub 링크 버튼 */}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--sub-bg2)] text-[var(--main-text)] hover:bg-[var(--button-hover)] transition-all duration-300 py-2 px-4 rounded-lg flex items-center gap-2 border border-[var(--border)]"
                title="GitHub 저장소"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
                <span>GitHub</span>
              </a>
            )}

            {/* 홈페이지 링크 버튼 */}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--sub-bg2)] text-[var(--main-text)] hover:bg-[var(--button-hover)] transition-all duration-300 py-2 px-4 rounded-lg flex items-center gap-2 border border-[var(--border)]"
                title="사이트 방문하기"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" />
                <span>Live Demo</span>
              </a>
            )}

            {/* 닫기 버튼 */}
            <button
              onClick={onClose}
              className="text-[var(--sub-text)] hover:text-[var(--main-text)] transition-colors p-2"
            >
              <FontAwesomeIcon icon={faX} size="lg" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* 메인 이미지 */}
          <div className="flex justify-center">
            <img
              src={kovalt_new_1}
              alt="KoValT.info 메인"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>

          {/* 프로젝트 설명 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--main-text)] border-b border-[var(--border)] pb-2">
              프로젝트 소개
            </h2>
            <p className="text-[var(--main-text)] leading-relaxed">
              KoValt.info는 라이엇 게임즈에서 서비스하는 게임에 대한 경기 기록
              검색 및 인게임 정보를 제공하는 라이브 웹 서비스로, 현재는 발로란트
              (Valorant)에 대한 정보를 제공하고 있습니다.
            </p>
            <p className="text-[var(--main-text)] leading-relaxed">
              경기 기록과 같은 인게임 정보 이외에 영향력 있는 유튜버와의 협력을
              통해 플레이어가 많이 찾는 기능에 대해 전문적인 추천 기능과, 랜덤
              추첨 기능, 반응속도 테스트 등 다양한 즐길거리도 함께 제공합니다.
            </p>
          </section>

          {/* 사용 기술 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--main-text)] border-b border-[var(--border)] pb-2">
              사용 기술
            </h2>
            <div className="flex flex-wrap gap-3">
              {techSkills.map((skill) =>
                skillIcons[skill] ? (
                  <span
                    key={skill}
                    className="flex items-center bg-[var(--sub-bg2)] text-[var(--main-text)] text-sm rounded-full px-3 py-2 border border-[var(--border)]"
                  >
                    <img
                      src={skillIcons[skill]}
                      alt={skill}
                      className="w-4 h-4 mr-2"
                    />
                    {skill}
                  </span>
                ) : (
                  <span
                    key={skill}
                    className="bg-[var(--sub-bg2)] text-[var(--main-text)] text-sm rounded-full px-3 py-2 border border-[var(--border)]"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </section>

          {/* 주요 기능 및 특징 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--main-text)] border-b border-[var(--border)] pb-2 flex items-center gap-2">
              <FontAwesomeIcon icon={faCogs} />
              주요 기능 및 특징
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[var(--sub-bg2)] p-4 rounded-lg border border-[var(--border)]">
                <div className="flex items-center gap-2 mb-2">
                  <FontAwesomeIcon
                    icon={faDatabase}
                    className="text-blue-500"
                  />
                  <h3 className="font-semibold text-[var(--main-text)]">
                    게임 데이터 시각화
                  </h3>
                </div>
                <p className="text-[var(--sub-text)] text-sm">
                  게임 플레이 간에 기록된 모든 로그 정보를 UI로 변환 후
                  사용자에게 제공
                </p>
              </div>
              <div className="bg-[var(--sub-bg2)] p-4 rounded-lg border border-[var(--border)]">
                <div className="flex items-center gap-2 mb-2">
                  <FontAwesomeIcon
                    icon={faChartLine}
                    className="text-green-500"
                  />
                  <h3 className="font-semibold text-[var(--main-text)]">
                    SEO 최적화
                  </h3>
                </div>
                <p className="text-[var(--sub-text)] text-sm">
                  검색엔진 노출 및 SNS 공유 시 직관적인 정보 제공을 위한 SEO
                  적용
                </p>
              </div>
              <div className="bg-[var(--sub-bg2)] p-4 rounded-lg border border-[var(--border)]">
                <div className="flex items-center gap-2 mb-2">
                  <FontAwesomeIcon
                    icon={faChartLine}
                    className="text-purple-500"
                  />
                  <h3 className="font-semibold text-[var(--main-text)]">
                    모니터링 환경
                  </h3>
                </div>
                <p className="text-[var(--sub-text)] text-sm">
                  네이버 웹 마스터, Google Analytics를 이용한 모니터링 환경 구성
                </p>
              </div>
              <div className="bg-[var(--sub-bg2)] p-4 rounded-lg border border-[var(--border)]">
                <div className="flex items-center gap-2 mb-2">
                  <FontAwesomeIcon icon={faCogs} className="text-orange-500" />
                  <h3 className="font-semibold text-[var(--main-text)]">
                    CI/CD 파이프라인
                  </h3>
                </div>
                <p className="text-[var(--sub-text)] text-sm">
                  Raspberry Pi와 Jenkins를 통한 자동 빌드, 테스트, 배포 시스템
                  구축
                </p>
              </div>
            </div>
          </section>

          {/* 작업 기여도 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--main-text)] border-b border-[var(--border)] pb-2 flex items-center gap-2">
              <FontAwesomeIcon icon={faUsers} />
              작업 기여도
            </h2>
            <div className="space-y-4">
              <div className="bg-[var(--sub-bg2)] p-5 rounded-lg border border-[var(--border)]">
                <h3 className="font-semibold text-[var(--main-text)] mb-3 flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    className="text-yellow-500"
                  />
                  전체적인 프로젝트 기획 및 구성
                </h3>
                <ul className="text-[var(--sub-text)] space-y-2 text-sm">
                  <li>
                    • AI를 활용해 사이트 디자인 시안을 먼저 생성하고, 이를
                    바탕으로 실제 구현까지 진행
                  </li>
                  <li>
                    • 지속적인 프로젝트 개선을 위해 꾸준한 리팩토링 진행 중
                  </li>
                </ul>
              </div>

              <div className="bg-[var(--sub-bg2)] p-5 rounded-lg border border-[var(--border)]">
                <h3 className="font-semibold text-[var(--main-text)] mb-3 flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faChartLine}
                    className="text-blue-500"
                  />
                  사용자 경험 최적화
                </h3>
                <ul className="text-[var(--sub-text)] space-y-2 text-sm">
                  <li>
                    • Google Analytics로 수집한 데이터를 기반으로 UI/UX 최적화
                  </li>
                  <li>
                    • 사용자의 사이트 세션 지속 시간을 위한 컨텐츠 기획 및 개발
                  </li>
                </ul>
              </div>

              <div className="bg-[var(--sub-bg2)] p-5 rounded-lg border border-[var(--border)]">
                <h3 className="font-semibold text-[var(--main-text)] mb-3 flex items-center gap-2">
                  <FontAwesomeIcon icon={faCode} className="text-green-500" />
                  라이엇 API 활용
                </h3>
                <ul className="text-[var(--sub-text)] space-y-2 text-sm">
                  <li>• 게임 플레이 로그 정보를 기반으로 한 UI 페이지 구축</li>
                  <li>• 플레이어 정보 및 라운드 별 상태 정보를 제공</li>
                </ul>
              </div>

              <div className="bg-[var(--sub-bg2)] p-5 rounded-lg border border-[var(--border)]">
                <h3 className="font-semibold text-[var(--main-text)] mb-3 flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faTrophy}
                    className="text-purple-500"
                  />
                  전문가 협업
                </h3>
                <ul className="text-[var(--sub-text)] space-y-2 text-sm">
                  <li>
                    • 실제 프로팀 소속 전문 코치와 함께 게임 실력 향상을 위한
                    방향성 제공
                  </li>
                  <li>
                    • 영향력 있는 유튜버와 함께 게임 유저들의 인기 검색어 분야
                    정보 제공
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 팀원 소개 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--main-text)] border-b border-[var(--border)] pb-2 flex items-center gap-2">
              <FontAwesomeIcon icon={faUsers} className="text-blue-500" />
              팀원 소개
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[var(--sub-bg2)] p-5 rounded-lg border border-[var(--border)]">
                <h3 className="font-semibold text-[var(--main-text)] mb-3">
                  이예도 - 프론트엔드 총괄
                </h3>
                <ul className="text-[var(--sub-text)] space-y-2 text-sm">
                  <li>• 프론트엔드 전체적인 부분 UI/UX 기획 및 구현</li>
                  <li>• React 컴포넌트 및 상태 관리 구조 설계</li>
                  <li>• 데이터 시각화 및 인터랙티브 UI 요소 개발</li>
                </ul>
              </div>

              <div className="bg-[var(--sub-bg2)] p-5 rounded-lg border border-[var(--border)]">
                <h3 className="font-semibold text-[var(--main-text)] mb-3">
                  심형석 - 백엔드 총괄 / DevOps
                </h3>
                <ul className="text-[var(--sub-text)] space-y-2 text-sm">
                  <li>• 서버 인프라 구축 및 CI/CD 파이프라인 관리</li>
                  <li>• PostgreSQL 데이터베이스 설계 및 최적화</li>
                  <li>• 라이엇 API 연동 및 데이터 처리 로직 구현</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 작업 화면 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--main-text)] border-b border-[var(--border)] pb-2">
              작업 화면
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <img
                src={kovalt_new_1}
                alt="KoValT.info 메인 화면"
                className="rounded-lg shadow-lg w-full h-64 object-cover cursor-pointer"
                onClick={() => setImgModal(kovalt_new_1)}
              />
              {/* <img
                src={kovalt2}
                alt="KoValT.info 상세 화면"
                className="rounded-lg shadow-lg w-full h-64 object-cover cursor-pointer"
                onClick={() => setImgModal(kovalt2)}
              /> */}
            </div>
          </section>

          {/* 트러블 슈팅 & 회고 */}
          <div className="grid md:grid-cols-1 gap-6">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[var(--main-text)] border-b border-[var(--border)] pb-2">
                트러블 슈팅
              </h2>
              <div className="space-y-4">
                <div className="bg-[var(--sub-bg2)] p-5 rounded-lg border border-[var(--border)]">
                  <h3 className="font-semibold text-[var(--main-text)] mb-3 flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faChartLine}
                      className="text-blue-500"
                    />
                    복잡한 게임 데이터 시각화 및 UI 컴포넌트 개발
                  </h3>
                  <div className="text-[var(--sub-text)] space-y-2 text-sm">
                    <p>
                      <strong>문제:</strong> 발로란트 매치 데이터는 라운드별,
                      플레이어별 상세 정보가 복잡하게 얽혀 있어 효과적인 데이터
                      시각화 UI 구현이 어려웠음
                    </p>
                    <p>
                      <strong>해결:</strong> React 커스텀 훅으로 데이터 처리
                      로직 분리, 효율적인 컴포넌트 계층 구조 설계, 대시보드
                      형태의 통합 UI로 사용자 정보 인지 속도 50% 향상
                    </p>
                  </div>
                </div>

                <div className="bg-[var(--sub-bg2)] p-5 rounded-lg border border-[var(--border)]">
                  <h3 className="font-semibold text-[var(--main-text)] mb-3 flex items-center gap-2">
                    <FontAwesomeIcon icon={faCode} className="text-green-500" />
                    React 컴포넌트 성능 최적화
                  </h3>
                  <div className="text-[var(--sub-text)] space-y-2 text-sm">
                    <p>
                      <strong>문제:</strong> 대용량 게임 데이터를 렌더링할 때
                      React 컴포넌트의 불필요한 리렌더링으로 인한 UI 지연 및
                      메모리 사용량 증가
                    </p>
                    <p>
                      <strong>해결:</strong> React.memo와 useMemo 도입, 지연
                      로딩 전략 적용으로 초기 로드 시간 50% 단축
                    </p>
                  </div>
                </div>

                <div className="bg-[var(--sub-bg2)] p-5 rounded-lg border border-[var(--border)]">
                  <h3 className="font-semibold text-[var(--main-text)] mb-3 flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faCogs}
                      className="text-purple-500"
                    />
                    다크 모드 및 반응형 레이아웃 구현
                  </h3>
                  <div className="text-[var(--sub-text)] space-y-2 text-sm">
                    <p>
                      <strong>문제:</strong> 다양한 화면 크기와 사용자 환경
                      설정을 지원하는 반응형 레이아웃과 테마 시스템 구현의
                      복잡성
                    </p>
                    <p>
                      <strong>해결:</strong> 컴포넌트 기반 반응형 디자인 설계,
                      뷰포트에 따른 최적화된 레이아웃으로 모바일 사용자 경험
                      개선
                    </p>
                  </div>
                </div>

                <div className="bg-[var(--sub-bg2)] p-5 rounded-lg border border-[var(--border)]">
                  <h3 className="font-semibold text-[var(--main-text)] mb-3 flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faLightbulb}
                      className="text-orange-500"
                    />
                    사용자 인터랙션 및 애니메이션 최적화
                  </h3>
                  <div className="text-[var(--sub-text)] space-y-2 text-sm">
                    <p>
                      <strong>문제:</strong> 복잡한 데이터 차트와 애니메이션이
                      많은 UI에서 프레임 드롭과 렌더링 성능 저하 발생
                    </p>
                    <p>
                      <strong>해결:</strong> CSS 트랜지션 대신 transform 속성
                      활용, React 트랜지션 그룹 최적화로 성능 유지 및 사용자
                      만족도 증가
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[var(--main-text)] border-b border-[var(--border)] pb-2">
                회고
              </h2>
              <div className="bg-[var(--sub-bg2)] p-5 rounded-lg border border-[var(--border)]">
                <div className="text-[var(--sub-text)] space-y-3 text-sm">
                  <p>
                    프론트엔드 개발자로서 이 프로젝트는 게임 데이터를 시각적으로
                    표현하는 방법에 대해 많은 고민을 하게 해준 소중한
                    경험이었습니다. 특히 React를 활용한 컴포넌트 설계와 상태
                    관리 패턴을 실제 서비스에 적용해보며 이론적 지식을 넘어 실무
                    역량을 크게 향상시킬 수 있었습니다.
                  </p>
                  <p>
                    사용자 중심의 UI/UX 디자인을 통해 게임 데이터를 직관적으로
                    표현하는 과정에서 발생한 다양한 이슈들을 해결하며,
                    프론트엔드 개발의 깊이를 더할 수 있었고 사용자 피드백을
                    기반으로 지속적인 개선을 진행하는 과정이 매우 보람찼습니다.
                  </p>
                  <p>
                    현재 TypeScript와 TailwindCSS 도입으로 사이트의 전체적인
                    UI와 리펙토링을 진행 중입니다. 앞으로 더 나은 사용자 경험과
                    개발 생산성을 제공하고, 컴포넌트 라이브러리 구축을 통해
                    일관된 디자인 시스템을 확립하는 것이 목표입니다.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
