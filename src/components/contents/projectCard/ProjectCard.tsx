import { skillIcons } from "../../../constants/skillIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers, faCalendar } from "@fortawesome/free-solid-svg-icons";
import "./ProjectCard.css";

type ProjectCardProps = {
  title: string;
  date: string;
  projecttype: string;
  description: string;
  image1?: string;
  skills?: string[];
  onClick?: () => void;
};

export default function ProjectCard({
  title,
  date,
  projecttype,
  description,
  image1,
  skills = [],
  onClick,
}: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="
        w-[90%]
        bg-[var(--sub-bg2)] bg-opacity-80 backdrop-blur-sm
        border-2 border-[var(--border)]
        rounded-2xl p-6 flex flex-col justify-between cursor-pointer
        transform transition duration-300 ease-in-out
        hover:border-[var(--button-hover)] hover:shadow-lg hover:scale-103
        projectCardDiv
      "
    >
      <div>
        {/* 상단 정보: 프로젝트 타입과 날짜 */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              size="lg"
              icon={projecttype === "Personal" ? faUser : faUsers}
            />
            <p className="text-xl">{projecttype}</p>
          </div>

          <div className="flex gap-2 items-center">
            <FontAwesomeIcon
              icon={faCalendar}
              size="1x"
              style={{ color: "var(--sub-text)" }}
            />
            <p className="text-[16px] text-[var(--sub-text)]">{date}</p>
          </div>
        </div>

        {/* 이미지 */}
        {image1 && (
          <div className="flex gap-6 h-60 justify-center my-2 projectCardImages">
            <img src={image1} alt={title} className="object-cover rounded-lg" />
          </div>
        )}

        {/* 타이틀 + 설명 */}
        <h3 className="text-2xl mb-2 projectCardTitle">{title}</h3>
        <p className="text-base text-[var(--main-text)] line-clamp-3 mb-4 projectCardDes">
          {description}
        </p>
      </div>

      {/* 기술 스택 */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) =>
          skillIcons[skill] ? (
            <span
              key={skill}
              className="flex items-center bg-[var(--sub-bg)] text-[var(--sub-text)] text-[15px] rounded-full px-2.5 py-1.5 useSkill_style"
            >
              <img
                src={skillIcons[skill]}
                alt={skill}
                title={skill}
                className="w-4 h-4 mr-1 useSkill_img"
              />
              {skill}
            </span>
          ) : null
        )}
      </div>
    </div>
  );
}
