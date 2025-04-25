import { useState } from "react";
import TypingText from "./typingtext/TypingText";
import TypingTextList from "./typingtext/TypingTextList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const [showTypingList, setShowTypingList] = useState(false);

  return (
    <section className="w-full max-w-6xl mx-auto mt-30 px-6 py-16 flex flex-col md:flex-row gap-12 items-start">
      <div className="flex-shrink-0">
        <img
          src="/me/me.png"
          alt="프로필 이미지"
          className="w-[220px] md:w-[250px] rounded-2xl shadow-lg object-cover"
        />
      </div>

      <div className="flex-1">
        <h2 className="text-4xl font-bold text-[var(--main-text)] mb-4">
          About
        </h2>

        <div
          className="flex justify-between items-center border-b border-[var(--border)] pb-2 mb-2 cursor-pointer"
          onMouseOver={() => setShowTypingList(true)}
          onMouseLeave={() => setShowTypingList(false)}
          onClick={() => setShowTypingList((prev) => !prev)}
        >
          <div className="flex flex-wrap items-baseline gap-2 text-[22px] text-[var(--main-text)]">
            <span>저는</span>
            <TypingText />
            <span>개발자입니다.</span>
          </div>
          <FontAwesomeIcon
            icon={faCaretDown}
            className="text-white text-xl mr-3"
          />
        </div>

        <TypingTextList showTypingList={showTypingList} />

        <article className="mt-[20px] text-[var(--main-text)] text-lg leading-relaxed space-y-4">
          <p>안녕하세요. 프론트엔드 개발자 이예도입니다.</p>
          <p>
            프론트엔드는 다양한 개발자 직군 중에서 협업과 소통을 가장 많이 하는
            직군이라 생각합니다. <br />
            또한 신입 개발자에게 요구하는 역량 중 아키텍처를 잘 짜는 것뿐만
            아니라, <br />
            소통, 협업, 문서화, 학습 능력, 프로젝트 경험 등 다양한 부분에서 꽉
            찬 다각형 모양을 이룬다면 <br />
            정말 손색 없는 신입 프론트엔드 개발자라고 생각하며 열심히
            달려왔습니다.
          </p>
        </article>
      </div>
    </section>
  );
}
