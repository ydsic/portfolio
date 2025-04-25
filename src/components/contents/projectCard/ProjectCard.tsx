import { skillIcons } from "../../../constants/skillIcons";

type ProjectCardProps = {
  title: string;
  date: string;
  description: string;
  image?: string;
  skills?: string[];
  onClick?: () => void;
};

export default function ProjectCard({
  title,
  date,
  description,
  image,
  skills = [],
  onClick,
}: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="w-[350px] h-[400px] bg-[var(--sub-bg2)] border border-[var(--border)] shrink-0 p-4 flex flex-col justify-between
                 cursor-pointer transition-all duration-300 transform 
                 hover:scale-105 hover:bg-[var(--hover-bg)]"
    >
      <div>
        <p className="text-sm text-[var(--sub-text)] mb-1">{date}</p>
      </div>
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover mb-2 rounded"
        />
      )}
      <div className="flex flex-wrap gap-2 mt-2">
        {skills.map((skill) =>
          skillIcons[skill] ? (
            <img
              key={skill}
              src={skillIcons[skill]}
              alt={skill}
              title={skill}
              className="w-6 h-6"
            />
          ) : null
        )}
      </div>
      <div>
        <h3 className="text-xl font-bold my-1">{title}</h3>
        <p className="text-sm text-[var(--main-text)]">{description}</p>
      </div>
    </div>
  );
}
