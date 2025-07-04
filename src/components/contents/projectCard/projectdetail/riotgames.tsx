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
} from "@fortawesome/free-solid-svg-icons";
import { skillIcons } from "../../../../constants/skillIcons";
import kovalt1 from "../../../../assets/projectimg/kovalt1.png";
import kovalt2 from "../../../../assets/projectimg/kovalt2.png";
import { useEffect, useState } from "react";

type CloseModal = {
  onClose: () => void;
};

export default function RiotGames({ onClose }: CloseModal) {
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
    "JavaScript",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "Jenkins",
    "Raspberry Pi",
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
          className="fixed inset-0 z-[11000] flex items-center justify-center bg-black bg-opacity-70"
          onClick={() => setImgModal(null)}
        >
          <img
            src={imgModal}
            alt="원본 이미지"
            className="max-w-3xl max-h-[90vh] rounded-lg shadow-2xl border-4 border-white"
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
          <button
            onClick={onClose}
            className="text-[var(--sub-text)] hover:text-[var(--main-text)] transition-colors p-2"
          >
            <FontAwesomeIcon icon={faX} size="lg" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* 메인 이미지 */}
          <div className="flex justify-center">
            <img
              src={kovalt1}
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

          {/* 작업 화면 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--main-text)] border-b border-[var(--border)] pb-2">
              작업 화면
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <img
                src={kovalt1}
                alt="KoValT.info 메인 화면"
                className="rounded-lg shadow-lg w-full h-64 object-cover cursor-pointer"
                onClick={() => setImgModal(kovalt1)}
              />
              <img
                src={kovalt2}
                alt="KoValT.info 상세 화면"
                className="rounded-lg shadow-lg w-full h-64 object-cover cursor-pointer"
                onClick={() => setImgModal(kovalt2)}
              />
            </div>
          </section>

          {/* 트러블 슈팅 & 회고 */}
          <div className="grid md:grid-cols-2 gap-6">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[var(--main-text)] border-b border-[var(--border)] pb-2">
                트러블 슈팅
              </h2>
              <div className="bg-[var(--sub-bg2)] p-4 rounded-lg border border-[var(--border)]">
                <p className="text-[var(--sub-text)] text-sm">
                  API 호출 최적화, 성능 개선, 반응형 디자인 구현 등의 기술적
                  도전 과제를 해결하며 프로젝트를 완성했습니다.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[var(--main-text)] border-b border-[var(--border)] pb-2">
                회고
              </h2>
              <div className="bg-[var(--sub-bg2)] p-4 rounded-lg border border-[var(--border)]">
                <p className="text-[var(--sub-text)] text-sm">
                  실제 사용자들의 피드백을 받으며 서비스를 개선해나가는 과정에서
                  많은 것을 배웠습니다.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
