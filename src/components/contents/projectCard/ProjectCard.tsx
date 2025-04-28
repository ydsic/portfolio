import { skillIcons } from "../../../constants/skillIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers, faCalendar } from "@fortawesome/free-solid-svg-icons";

type ProjectCardProps = {
  title: string;
  date: string;
  projecttype: string;
  description: string;
  image1?: string;
  image2?: string;
  skills?: string[];
  onClick?: () => void;
};

export default function ProjectCard({
  title,
  date,
  projecttype,
  description,
  image1,
  image2,
  skills = [],
  onClick,
}: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="w-[90%] bg-[var(--sub-bg2)] backdrop-blur-sm bg-opacity-80 border border-[var(--border)] rounded-2xl p-6 flex flex-col justify-between
                 cursor-pointer transition-transform duration-300 transform hover:scale-103 hover:shadow-xl"
    >
      <div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              size="lg"
              icon={projecttype == "Personal" ? faUser : faUsers}
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

        {image1 && image2 && (
          <div className="flex gap-6 h-60 justify-center my-2">
            <img src={image1} alt={title} className="object-cover rounded-lg" />

            <img src={image2} alt={title} className="object-cover rounded-l" />
          </div>
        )}
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-base text-[var(--main-text)] line-clamp-3 mb-4">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) =>
          skillIcons[skill] ? (
            <span
              key={skill}
              className="flex items-center bg-[var(--sub-bg)] text-[var(--sub-text)] text-[15px] rounded-full px-2.5 py-1.5"
            >
              <img
                src={skillIcons[skill]}
                alt={skill}
                title={skill}
                className="w-4 h-4 mr-1"
              />
              {skill}
            </span>
          ) : null
        )}
      </div>
    </div>
  );
}
