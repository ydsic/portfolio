import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faX } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { skillIcons } from "../../../../constants/skillIcons";

type CloseModal = {
  onClose: () => void;
  githubUrl?: string;
  liveUrl?: string;
};

export default function SigoroTalk({
  onClose,
  githubUrl,
  liveUrl,
}: CloseModal) {
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
    "Spring",
    "MySQL",
    "Docker",
    "Github",
    "OpenAI API",
  ];

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-[10000] p-4 pt-[9vh]"
      onClick={handleOverlayClick}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
    >
      <div className="bg-[var(--sub-bg)] rounded-lg shadow-xl w-full max-w-6xl max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-[var(--sub-bg)] border-b border-[var(--border)] p-6 flex justify-between items-center rounded-t-lg">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-[var(--main-text)]">
              SigoroTalk
            </h1>
          </div>
          <div className="flex items-center gap-3">
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
            <button
              onClick={onClose}
              className="text-[var(--sub-text)] hover:text-[var(--main-text)] transition-colors p-2"
            >
              <FontAwesomeIcon icon={faX} size="lg" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* 메인 이미지 */}
          <div className="flex justify-center">
            <img
              src="/images/sigorotalk1.png"
              alt="SigoroTalk 메인"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>

          {/* 프로젝트 설명 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--main-text)] border-b border-[var(--border)] pb-2">
              프로젝트 소개
            </h2>
            <p className="text-[var(--main-text)] leading-relaxed">
              인구 소멸 지역의 인구 유치 및 지역 발전을 위한 청년층과 노년층의
              1:1 커피챗 플랫폼입니다.
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
            <h2 className="text-2xl font-bold text-[var(--main-text)] border-b border-[var(--border)] pb-2">
              주요 기능 및 특징
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[var(--sub-bg2)] p-4 rounded-lg border border-[var(--border)]">
                <h3 className="font-semibold text-[var(--main-text)] mb-2">
                  기능 1
                </h3>
                <p className="text-[var(--sub-text)] text-sm">
                  기능 1에 대한 설명
                </p>
              </div>
              <div className="bg-[var(--sub-bg2)] p-4 rounded-lg border border-[var(--border)]">
                <h3 className="font-semibold text-[var(--main-text)] mb-2">
                  기능 2
                </h3>
                <p className="text-[var(--sub-text)] text-sm">
                  기능 2에 대한 설명
                </p>
              </div>
            </div>
          </section>

          {/* 작업 기여도 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--main-text)] border-b border-[var(--border)] pb-2">
              작업 기여도
            </h2>
            <div className="space-y-4">
              <div className="bg-[var(--sub-bg2)] p-5 rounded-lg border border-[var(--border)]">
                <h3 className="font-semibold text-[var(--main-text)] mb-3">
                  담당 역할 1
                </h3>
                <ul className="text-[var(--sub-text)] space-y-2 text-sm">
                  <li>• 상세 작업 내용 1</li>
                  <li>• 상세 작업 내용 2</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 팀원 소개 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--main-text)] border-b border-[var(--border)] pb-2">
              팀원 소개
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[var(--sub-bg2)] p-5 rounded-lg border border-[var(--border)]">
                <h3 className="font-semibold text-[var(--main-text)] mb-3">
                  이영재 - 프로젝트 총괄, 백엔드 개발
                </h3>
                <ul className="text-[var(--sub-text)] space-y-2 text-sm">
                  <li>• 전체적인 일정 관리</li>
                  <li>• AI 매칭 및 GPT 리포트 기능 개발</li>
                </ul>
              </div>
              <div className="bg-[var(--sub-bg2)] p-5 rounded-lg border border-[var(--border)]">
                <h3 className="font-semibold text-[var(--main-text)] mb-3">
                  조장호 - 백엔드 리드 개발
                </h3>
                <ul className="text-[var(--sub-text)] space-y-2 text-sm">
                  <li>• API 서버 구축</li>
                  <li>• JWT 기반 사용자 인증 시스템 개발</li>
                  <li>• 커피챗 예약 기능 추가</li>
                  <li>• 멘토 시스템 구축</li>
                </ul>
              </div>
              <div className="bg-[var(--sub-bg2)] p-5 rounded-lg border border-[var(--border)]">
                <h3 className="font-semibold text-[var(--main-text)] mb-3">
                  이예도 - 프론트엔드 팀장
                </h3>
                <ul className="text-[var(--sub-text)] space-y-2 text-sm">
                  <li>• UI 설계</li>
                  <li>• 예약/채팅 화면 개발</li>
                  <li>• 상태 관리 및 API 연동</li>
                </ul>
              </div>
              <div className="bg-[var(--sub-bg2)] p-5 rounded-lg border border-[var(--border)]">
                <h3 className="font-semibold text-[var(--main-text)] mb-3">
                  문지현 - 프론트엔드 개발
                </h3>
                <ul className="text-[var(--sub-text)] space-y-2 text-sm">
                  <li>• 전체적인 UI 구현</li>
                  <li>• 각 연동된 API 데이터 처리</li>
                </ul>
              </div>
              <div className="bg-[var(--sub-bg2)] p-5 rounded-lg border border-[var(--border)]">
                <h3 className="font-semibold text-[var(--main-text)] mb-3">
                  김지유 - UX 디자인
                </h3>
                <ul className="text-[var(--sub-text)] space-y-2 text-sm">
                  <li>• 사용자 리서치 및 분석</li>
                  <li>• 와이어프레임 및 프로토타입 제작</li>
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
                src="/images/sigorotalk1.png"
                alt="SigoroTalk 화면 1"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src="/images/sigorotalk2.png"
                alt="SigoroTalk 화면 2"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
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
                  <h3 className="font-semibold text-[var(--main-text)] mb-3">
                    문제 상황 1
                  </h3>
                  <div className="text-[var(--sub-text)] space-y-2 text-sm">
                    <p>
                      <strong>문제:</strong> 문제에 대한 설명
                    </p>
                    <p>
                      <strong>해결:</strong> 해결 방법에 대한 설명
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
                  <p>프로젝트를 통해 배운 점과 느낀 점을 작성해주세요.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
