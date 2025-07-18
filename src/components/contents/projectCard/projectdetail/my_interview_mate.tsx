type CloseModal = {
  onClose: () => void;
  githubUrl?: string;
  liveUrl?: string;
};

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { skillIcons } from "../../../../constants/skillIcons";
import interviewImg1 from "../../../../assets/projectimg/interview1.png";
import interviewImg2 from "../../../../assets/projectimg/interview2.png";

export default function MyInterviewMate({
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
    "Supabase",
    "Github",
    "Vercel",
    "OpenAI API",
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
            <h1 className="text-3xl font-bold text-[var(--main-text)]">
              My Interview Mate
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
              src={interviewImg1}
              alt="My Interview Mate 메인"
              className="rounded-lg shadow-lg max-w-full h-auto cursor-pointer"
              onClick={() => setImgModal(interviewImg1)}
            />
          </div>

          {/* 프로젝트 설명 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--main-text)] border-b border-[var(--border)] pb-2">
              프로젝트 소개
            </h2>
            <p className="text-[var(--main-text)] leading-relaxed">
              나의 인터뷰 메이트는 신입 프론트엔드 개발자들이 기술 면접을
              준비하는 데 도움을 주기 위해 개발되었습니다. ChatGPT API를
              활용하여 실제 기술면접과 유사한 환경을 만들어서 제공하고 다양한
              기술 질문에 대한 답변을 연습할 수 있는 기능을 제공합니다.
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
                  이예도 - 팀장
                </h3>
                <ul className="text-[var(--sub-text)] space-y-2 text-sm">
                  <li>• 프로젝트 전체 관리 및 개발 프로세스 총괄</li>
                  <li>• CI/CD 파이프라인 구축 및 배포 자동화</li>
                  <li>• 로그인/회원가입 기능 및 데이터베이스 설계</li>
                  <li>• ChatGPT API 연동 및 면접 질문 생성 시스템 개발</li>
                </ul>
              </div>
              <div className="bg-[var(--sub-bg2)] p-5 rounded-lg border border-[var(--border)]">
                <h3 className="font-semibold text-[var(--main-text)] mb-3">
                  김호영 - 팀원
                </h3>
                <ul className="text-[var(--sub-text)] space-y-2 text-sm">
                  <li>• 메인 페이지 핵심 기능 및 사용자 인터랙션 구현</li>
                  <li>• 면접 질문/답변 관리 컴포넌트 구조화</li>
                  <li>• 즐겨찾기 및 히스토리 기능 개발</li>
                  <li>• 사용자 경험 향상을 위한 로딩 상태 최적화</li>
                </ul>
              </div>
              <div className="bg-[var(--sub-bg2)] p-5 rounded-lg border border-[var(--border)]">
                <h3 className="font-semibold text-[var(--main-text)] mb-3">
                  정다정 - 팀원
                </h3>
                <ul className="text-[var(--sub-text)] space-y-2 text-sm">
                  <li>• 전체 서비스 UI/UX 디자인 기획 및 구현</li>
                  <li>• 메인화면 및 마이페이지 인터페이스 설계</li>
                  <li>• 사용자 맞춤형 테마 기능 개발</li>
                  <li>• 학습 진도 시각화 점수 대시보드 구현</li>
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
                src={interviewImg1}
                alt="My Interview Mate 화면 1"
                className="rounded-lg shadow-lg w-full h-64 object-cover cursor-pointer"
                onClick={() => setImgModal(interviewImg1)}
              />
              <img
                src={interviewImg2}
                alt="My Interview Mate 화면 2"
                className="rounded-lg shadow-lg w-full h-64 object-cover cursor-pointer"
                onClick={() => setImgModal(interviewImg2)}
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
