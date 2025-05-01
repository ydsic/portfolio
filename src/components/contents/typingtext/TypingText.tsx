import { useEffect, useState, useRef } from "react";
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
  // 화면 밖일 때 true로 바뀌어 타이핑 중단
  const [isStopped, setIsStopped] = useState(false);
  const elRef = useRef<HTMLHeadingElement>(null);

  // 1) Intersection Observer 설정
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStopped(!entry.isIntersecting);
      },
      { root: null, rootMargin: "0px", threshold: 0 }
    );
    if (elRef.current) observer.observe(elRef.current);
    return () => {
      if (elRef.current) observer.unobserve(elRef.current);
    };
  }, []);

  // 2) 타이핑 이펙트 (isStopped 가 true 면 중단)
  useEffect(() => {
    if (isStopped) return;

    const currentText = TypingCommentList[state.currentCommentIndex];
    const fullTyped = state.displayText === currentText;
    const emptyText = state.displayText === "";

    let timeout: ReturnType<typeof setTimeout>;
    let speed = 100;

    if (!state.isDeleting && !fullTyped) {
      timeout = setTimeout(() => {
        setState((prev) => ({
          ...prev,
          displayText: currentText.slice(0, prev.displayText.length + 1),
        }));
      }, speed);
    } else if (!state.isDeleting && fullTyped) {
      timeout = setTimeout(() => {
        setState((prev) => ({ ...prev, isDeleting: true }));
      }, 1500);
    } else if (state.isDeleting && !emptyText) {
      timeout = setTimeout(() => {
        setState((prev) => ({
          ...prev,
          displayText: currentText.slice(0, prev.displayText.length - 1),
        }));
      }, 50);
    } else {
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
    <h3
      ref={elRef}
      className="flex text-[var(--primary)] text-[16px] xs:text-[20px] md:text-[22px]"
    >
      {state.displayText}
    </h3>
  );
}
