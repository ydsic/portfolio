import { useEffect, useState } from "react";
import "./TypingText.css";
import { TypingCommentList } from "./TypingTextData";

type CommentState = {
  currentCommentIndex: number;
  displayText: string;
  isDeleting: boolean;
};

export default function TypingText() {
  const [state, setState] = useState<CommentState>({
    currentCommentIndex: 0,
    displayText: "",
    isDeleting: false,
  });

  const [isStopped, setIsStopped] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !isStopped) {
        setIsStopped(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isStopped]);

  useEffect(() => {
    if (isStopped) return;

    const currentText = TypingCommentList[state.currentCommentIndex];
    const fullTextTyped = state.displayText === currentText;
    const isEmpty = state.displayText === "";

    let timeout: ReturnType<typeof setTimeout>;
    let speed = 100;

    if (!state.isDeleting && !fullTextTyped) {
      speed = 100;
      timeout = setTimeout(() => {
        setState((prev) => ({
          ...prev,
          displayText: currentText.slice(0, prev.displayText.length + 1),
        }));
      }, speed);
    } else if (!state.isDeleting && fullTextTyped) {
      speed = 1500;
      timeout = setTimeout(() => {
        setState((prev) => ({ ...prev, isDeleting: true }));
      }, speed);
    } else if (state.isDeleting && !isEmpty) {
      speed = 50;
      timeout = setTimeout(() => {
        setState((prev) => ({
          ...prev,
          displayText: currentText.slice(0, prev.displayText.length - 1),
        }));
      }, speed);
    } else if (state.isDeleting && isEmpty) {
      timeout = setTimeout(() => {
        setState((prev) => ({
          currentCommentIndex:
            (prev.currentCommentIndex + 1) % TypingCommentList.length,
          displayText: "",
          isDeleting: false,
        }));
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [state, isStopped]);

  return (
    <h3 className="flex text-[var(--primary)] text-[16px] xs:text-[20px] md:text-[22px]">
      {state.displayText}
    </h3>
  );
}
