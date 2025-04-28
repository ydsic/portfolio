import { faCode } from "@fortawesome/free-solid-svg-icons";
import { skillIcons } from "../../constants/skillIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "Zustand", "JavaScript", "TypeScript"],
    },
    {
      category: "Styling",
      items: ["CSS", "TailwindCSS"],
    },
    {
      category: "Deployment & DevOps",
      items: ["Github", "Docker"],
    },
    {
      category: "Hosting",
      items: ["Vercel", "Netlify"],
    },
    {
      category: "Collaboration & Documentation",
      items: ["Notion", "Jira", "Slack", "Figma"],
    },
  ];

  return (
    <section
      id="skills"
      className="w-full max-w-6xl mx-auto px-6 py-16 text-[var(--main-text)]"
    >
      <div className="flex items-center gap-3 mb-8 border-b border-[var(--border)] pb-2">
        <FontAwesomeIcon icon={faCode} size="2x" className="ml-2" />
        <h2 className="text-4xl font-bold">Skills</h2>
      </div>

      <div className="space-y-10 ml-3">
        {skills.map(({ category, items }) => (
          <div key={category}>
            <h3 className="text-2xl font-semibold mb-4">{category}</h3>
            <div className="flex flex-wrap gap-3 text-base">
              {items.map((item) => {
                const itemKey = item.split(" ")[0];
                const icon = skillIcons[itemKey];

                return (
                  <span
                    key={item}
                    className="flex items-center gap-2 bg-[var(--sub-bg2)] px-3 py-1 rounded-xl text-sm shadow-sm border border-[var(--border)]"
                  >
                    {icon && (
                      <img
                        src={icon}
                        alt={`${itemKey} logo`}
                        className="w-8 h-8 object-contain m-1"
                      />
                    )}
                    <p className="text-[18px]">{item}</p>
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
