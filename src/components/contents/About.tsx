import { useState } from "react";
import TypingText from "./typingtext/TypingText";
import TypingTextList from "./typingtext/TypingTextList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faDatabase } from "@fortawesome/free-solid-svg-icons";
import "./About.css";
import { skillIcons } from "../../constants/skillIcons";

export default function About() {
  const [showTypingList, setShowTypingList] = useState(false);
  const handleMouseOver = () => setShowTypingList(true);
  const handleMouseLeave = () => setShowTypingList(false);
  const toggleList = () => setShowTypingList((prev) => !prev);

  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start about-section"
    >
      {/* 프로필 이미지 */}
      <div className="flex-shrink-0 w-full lg:w-auto flex flex-col items-center lg:items-start">
        <img
          src="/me/me.png"
          alt="프로필 이미지"
          className="w-[280px] sm:w-[320px] lg:w-[300px] rounded-2xl shadow-lg object-cover profile-img"
          loading="eager"
          fetchPriority="high"
        />

        <div className="w-full flex justify-center mt-4 lg:mt-6">
          <a
            href="https://github.com/ydsic"
            target="_blank"
            rel="noopener noreferrer"
            className="flex bg-[var(--button)] justify-center items-center px-6 py-3 rounded-lg gap-3 hover:bg-[var(--button-hover)] transition-colors duration-200 cursor-pointer"
          >
            <img src={skillIcons["Github"]} className="w-5 h-5" />
            <p className="text-white text-base font-medium">GitHub</p>
          </a>
        </div>
      </div>

      {/* 컨텐츠 */}
      <div className="flex-1 w-full">
        <div className="flex items-center gap-3 mb-6 text-[var(--main-text)]">
          <FontAwesomeIcon
            icon={faDatabase}
            className="text-2xl text-[var(--primary)]"
          />
          <h2 className="text-3xl lg:text-4xl font-bold about_font_size">
            About
          </h2>
        </div>

        <div
          className="flex justify-between items-center border-b border-[var(--border)] pb-3 mb-4 cursor-pointer hover:border-[var(--primary)] transition-colors duration-200"
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          onClick={toggleList}
        >
          <div className="flex flex-wrap items-baseline gap-1 sm:gap-2 text-lg lg:text-xl text-[var(--main-text)]">
            <span>저는</span>
            <TypingText />
            <span>개발자입니다.</span>
          </div>
          <FontAwesomeIcon
            icon={faCaretDown}
            className={`text-[var(--primary)] text-xl flex-shrink-0 transition-transform duration-300 ${
              showTypingList ? "rotate-180" : ""
            }`}
          />
        </div>

        <TypingTextList showTypingList={showTypingList} />

        <article className="mt-6 text-[var(--main-text)] text-base lg:text-lg leading-relaxed space-y-4">
          <p>안녕하세요. 프론트엔드 개발자 이예도입니다.</p>
          <p>
            저는 프론트엔드가 단순히 화면을 만드는 일을 넘어서, 다양한 사람들과
            협업하고 소통하는 직무라고 생각합니다.
          </p>
          <p>
            신입 개발자에게 필요한 역량은 코딩 실력뿐만 아니라 아키텍처 설계,
            협업, 문서화, 학습 능력, 프로젝트 경험까지 여러 영역에서 균형 잡힌
            성장을 이루는 것이 중요하다고 생각합니다.
          </p>
          <p>
            이제는 제가 쌓아온 경험을 바탕으로 팀과 함께 가치 있는 결과를
            만들어내고 싶습니다.
          </p>
        </article>
      </div>
    </section>
  );
}
