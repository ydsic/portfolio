import { useEffect, useRef } from "react";

export default function ScrollProgressBar() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const percent = (scrollTop / (scrollHeight - clientHeight)) * 100;

      if (progressRef.current) {
        progressRef.current.style.width = `${percent}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-[8vh] left-0 w-full h-[1px] bg-transparent z-[9999]">
      <div
        ref={progressRef}
        className="h-full bg-[var(--primary)] transition-all duration-150 ease-out"
        style={{ width: "0%" }}
      />
    </div>
  );
}
