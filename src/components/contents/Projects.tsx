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
import MyInterviewMate from "./projectCard/projectdetail/my_interview_mate";
import SigoroTalk from "./projectCard/projectdetail/sigorotalk";

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const closeDetail = () => setSelectedIndex(null);

  const renderProjectDetail = () => {
    if (selectedIndex === null) return null;

    const project = projects[selectedIndex];

    switch (selectedIndex) {
      case 0:
        return (
          <RiotGames
            onClose={closeDetail}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        );
      case 1:
        return (
          <MyInterviewMate
            onClose={closeDetail}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        );
      case 2:
        return (
          <SigoroTalk
            onClose={closeDetail}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        );
      case 3:
        return null;
      case 4:
        return (
          <PortfolioContents
            onClose={closeDetail}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        );
      default:
        return null;
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
