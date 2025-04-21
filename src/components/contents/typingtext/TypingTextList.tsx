import { useEffect, useState } from "react";
import { TypingCommentList } from "./TypingTextData";

type TypingTextListProps = {
  showTypingList: boolean;
};

export default function TypingTextList({
  showTypingList,
}: TypingTextListProps) {
  const [firstRenderDone, setFirstRenderDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFirstRenderDone(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  const baseStyle = `absolute ml-[25px] text-[18px] p-3 shadow-lg bg-[var(--sub-bg2)] text-[var(--main-text)] transition-all duration-500 ease-in-out`;
  const hiddenStyle = `opacity-0 translate-y-4 pointer-events-none`;
  const visibleStyle = `opacity-100 translate-y-0`;

  return (
    <div
      className={`
        ${baseStyle}
        ${
          !firstRenderDone
            ? hiddenStyle
            : showTypingList
            ? visibleStyle
            : hiddenStyle
        }
      `}
    >
      {TypingCommentList.map((data, idx) => (
        <div key={idx} className="p-2">
          {data}
          <hr className="mt-0.5" />
        </div>
      ))}
    </div>
  );
}
