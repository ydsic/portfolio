type CloseModal = {
  onClose: () => void;
  githubUrl?: string;
  liveUrl?: string;
};

import { outerDiv } from "./projectDetailStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faX } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function PortfolioContents({
  onClose,
  githubUrl,
  liveUrl,
}: CloseModal) {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={outerDiv} onClick={handleOverlayClick}>
      <div className="bg-[var(--sub-bg)] rounded-lg shadow-xl w-full max-w-6xl max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-[var(--sub-bg)] border-b border-[var(--border)] p-6 flex justify-between items-center rounded-t-lg">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-[var(--main-text)]">
              Portfolio
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

        <div className="p-6">
          <p>프로젝트의 설명</p>
        </div>
      </div>
    </div>
  );
}
