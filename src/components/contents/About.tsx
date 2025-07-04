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
      className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-start about-section"
    >
      {/* 프로필 이미지 */}
      <div className="flex-shrink-0 w-full lg:w-auto flex flex-col items-center">
        <img
          src="/me/me.png"
          alt="프로필 이미지"
          className="w-[200px] sm:w-[240px] lg:w-[260px] rounded-2xl shadow-lg object-cover profile-img"
        />

        <a
          href="https://github.com/ydsic"
          target="_blank"
          rel="noopener noreferrer"
          className="flex bg-[var(--button)] justify-center items-center mt-3 sm:mt-4 lg:mt-5 px-3 py-2 rounded-lg gap-2 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <img src={skillIcons["Github"]} className="w-6 h-6 sm:w-8 sm:h-8" />
          <p className="text-[var(--main-text)] text-sm sm:text-base">Github</p>
        </a>
      </div>

      {/* 컨텐츠 */}
      <div className="flex-1 w-full">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 text-[var(--main-text)]">
          <FontAwesomeIcon icon={faDatabase} className="text-xl sm:text-2xl" />
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold about_font_size">
            About
          </h2>
        </div>

        <div
          className="flex justify-between items-center border-b border-[var(--border)] pb-2 mb-2 cursor-pointer"
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          onClick={toggleList}
        >
          <div className="flex flex-wrap items-baseline gap-1 sm:gap-2 text-base sm:text-lg lg:text-xl xl:text-[22px] text-[var(--main-text)]">
            <span>저는</span>
            <TypingText />
            <span>개발자입니다.</span>
          </div>
          <FontAwesomeIcon
            icon={faCaretDown}
            className="text-white text-lg sm:text-xl mr-2 sm:mr-3 flex-shrink-0"
          />
        </div>

        <TypingTextList showTypingList={showTypingList} />

        <article className="mt-4 sm:mt-5 lg:mt-[20px] text-[var(--main-text)] text-sm sm:text-base lg:text-lg xl:text-[20px] leading-relaxed space-y-3 sm:space-y-4">
          <p>안녕하세요. 프론트엔드 개발자 이예도입니다.</p>
          <p>
            저는 프론트엔드가 단순히 화면을 만드는 일을 넘어서, 다양한 사람들과
            협업하고 소통하는 직무라고 생각합니다.
          </p>
          <p>
            신입 개발자에게 필요한 역량은 단지 코드를 잘 짜는 것에 그치지
            않습니다.
          </p>
          <p className="mb-0">
            아키텍처 설계 능력은 물론이고, 협업, 문서화, 학습 능력, 프로젝트
            경험까지
          </p>
          <p>
            여러 영역에서 다각형처럼 균형 잡힌 성장을 이루는 것이 중요하다고
            생각합니다.
          </p>
          <p>
            이제는 제가 쌓아온 이 다각형을 바탕으로 팀과 함께 가치 있는 결과를
            만들어내고 싶습니다.
          </p>
        </article>
      </div>
    </section>
  );
}
