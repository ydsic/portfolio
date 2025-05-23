// Projects.tsx
import { useState } from "react";
import "../../App.css";
import ProjectCard from "./projectCard/ProjectCard";
import { projects } from "./projectCard/projectsData";
import PortfolioContents from "./projectCard/projectdetail/portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import RiotGames from "./projectCard/projectdetail/riotgames";
import "./Projects.css";

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const closeDetail = () => setSelectedIndex(null);

  const renderProjectDetail = () => {
    if (selectedIndex === null) return null;
    switch (selectedIndex) {
      case 0:
        return <RiotGames onClose={closeDetail} />;
      case 1:
        return <PortfolioContents onClose={closeDetail} />;
    }
  };

  return (
    <section
      id="projects"
      className="w-full max-w-6xl mx-auto px-6 py-16 text-[var(--main-text)] projects_section"
    >
      <div className="flex items-center gap-3 mb-8 border-b border-[var(--border)] pb-2">
        <FontAwesomeIcon icon={faFolderOpen} size="2x" className="ml-2" />
        <h2 className="text-4xl font-bold projects_font_size">Projects</h2>
      </div>

      <div className="flex flex-col gap-5 items-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      {renderProjectDetail()}
    </section>
  );
}
