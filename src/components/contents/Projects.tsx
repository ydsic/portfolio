import { useEffect, useRef, useState } from "react";
import "../../App.css";
import ProjectCard from "./projectCard/ProjectCard";
import { projects } from "./projectCard/projectsData";

import PortfolioContents from "./projectCard/projectdetail/portfolio";

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const scrollByAmount = 400;

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    }
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: scrollByAmount, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollButtons();
    el.addEventListener("scroll", updateScrollButtons);

    return () => el.removeEventListener("scroll", updateScrollButtons);
  }, []);

  const renderProjectDetail = () => {
    const close = () => setSelectedIndex(null);

    switch (selectedIndex) {
      case 0:
        return <PortfolioContents onClose={close} />;
      // case 1:
      //   return <ProjectDetail />;
    }
  };

  return (
    <section
      id="projects"
      className="w-full max-w-6xl mx-auto px-6 py-16 text-[var(--main-text)] hide-scrollbar"
    >
      <h2 className="text-4xl font-bold mb-5 border-b border-[var(--border)] pb-2">
        Projects
      </h2>

      <div className="relative">
        {canScrollLeft && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
             bg-[var(--overlay-bg)] p-2 rounded-full shadow border border-[var(--sub-bg2)]
             hover:bg-[var(--hover-bg)] hover:scale-105 hover:shadow-lg 
             transition-all duration-300 transform"
          >
            ◀
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto px-5 py-5 scroll-smooth hide-scrollbar"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>

        {canScrollRight && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--sub-bg2)] 
            p-2 rounded-full shadow border border-[var(--border)]
            hover:bg-[var(--hover-bg)] hover:scale-105 hover:shadow-lg 
            transition-all duration-300 transform"
          >
            ▶
          </button>
        )}
      </div>
      {renderProjectDetail()}
    </section>
  );
}
