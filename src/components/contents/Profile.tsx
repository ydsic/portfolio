import { useState } from "react";
import TypingText from "./typingtext/TypingText";
import TypingTextList from "./typingtext/TypingTextList";

export default function Profile() {
  const [showTypingList, setShowTypingList] = useState(false);

  return (
    <div className="flex w-[75%] m-auto gap-12">
      <div>
        <img src="./me/me.png" className="w-[250px]" />
      </div>
      <div className="m-auto w-[80%]">
        <h2 className="text-[var(--main-text)] text-2xl mb-[20px]">About</h2>
        <div
          onMouseOver={() => setShowTypingList(true)}
          onMouseLeave={() => setShowTypingList(false)}
          className="flex mb-[0px] border-b-2 border-[var(--border)]"
        >
          <h3 className="text-[var(--main-text)] text-2xl">저는</h3>
          <TypingText />
          <h3 className="text-[var(--main-text)] text-2xl">개발자 입니다.</h3>
        </div>
        <TypingTextList showTypingList={showTypingList} />

        <p className="text-[var(--main-text)] text-[18px] leading-[35px] mt-[10px] ">
          안녕하세요.
          <br />
          프론트엔드 개발자 이예도입니다.
          <br />
          프론트엔드는 다양한 개발자 직군 중에서 협업과 소통을 가장 많이 하는
          직군이라 생각합니다.
          <br />
          또한 신입 개발자에게 요구하는 역량 중 아키텍쳐를 잘 짜는 것 뿐만
          아니라
          <br />
          소통, 협업, 문서화, 학습 능력, 프로젝트 경험 등 다양한 부분에 있어서
          꽉 찬 다각형 모양을 이룬다면
          <br />
          정말 손색 없는 신입 프론트엔드 개발자라고 생각하며 열심히
          달려왔습니다.
        </p>
        <p></p>
      </div>
    </div>
  );
}
