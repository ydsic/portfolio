import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Contact() {
  const buttonStyle = `flex justify-center items-center absolute w-[60px]
    h-[60px] right-[60px] rounded-full bg-[var(--button)] hover:bg-[var(--button-hover)] 
    shadow-lg shadow-black/60 cursor-pointer`;
  const [mouseOver, setMouseOver] = useState(false);
  const [copied, setCopied] = useState(false);
  const textToCopy = "ydsic99@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("클립보드 복사 실패:", err);
    }
  };

  return (
    <>
      <button
        className={`${buttonStyle} bottom-[140px]`}
        onMouseOver={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
        onClick={copyEmail}
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          size="xl"
          style={{ color: "#ffffff" }}
        />
      </button>
      {mouseOver && (
        <div className="flex flex-col absolute justify-center items-center bottom-[140px] right-[130px] w-[180px] py-1.5 bg-[var(--sub-bg2)]">
          <p className="text-[var(--main-text)]">ydsic99@gmail.com</p>
          <p
            className={`${
              copied ? "text-[var(--success)]" : "text-[var(--main-text)]"
            }`}
          >
            {copied ? "복사되었습니다!" : "버튼을 누르면 복사합니다."}
          </p>
        </div>
      )}
    </>
  );
}
