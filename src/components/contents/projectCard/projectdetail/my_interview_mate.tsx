type CloseModal = {
  onClose: () => void;
  githubUrl?: string;
  liveUrl?: string;
};

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

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
        <div className="p-6">
          <div className="flex flex-col gap-6">
            <p className="text-[var(--main-text)] text-lg leading-relaxed">
              이 프로젝트는 신입 프론트엔드 개발자들이 기술 면접을 준비하는 데
              도움을 주기 위해 개발되었습니다. ChatGPT API를 활용하여 다양한
              기술 질문에 대한 답변을 연습할 수 있는 기능을 제공합니다.
            </p>
            <div className="flex justify-center">
              <img
                src="/images/my_interview_mate.png"
                alt="My Interview Mate"
                className="rounded-lg shadow-md max-w-full h-auto"
              />
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-[var(--main-text)] mb-4">
              기술 스택
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-[var(--main-text)]">
              <li>React</li>
              <li>TypeScript</li>
              <li>ChatGPT API</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-[var(--main-text)] mb-4">
              기능
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-[var(--main-text)]">
              <li>ChatGPT API를 통한 기술 질문 답변 연습</li>
              <li>사용자 친화적인 인터페이스</li>
              <li>다양한 기술 스택 지원</li>
            </ul>
          </div>
        </div>
        {/* Footer */}
        <div className="p-6 border-t border-[var(--border)]">
          <p className="text-[var(--sub-text)] text-sm text-center">
            © 2025 My Interview Mate. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
