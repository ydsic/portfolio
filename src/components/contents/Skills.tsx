import { faCode } from "@fortawesome/free-solid-svg-icons";
import { skillIcons } from "../../constants/skillIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Skills.css";

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 70 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 75 },
      ],
    },
    {
      category: "Styling",
      items: [
        { name: "CSS", level: 100 },
        { name: "TailwindCSS", level: 100 },
      ],
    },
    {
      category: "DevOps",
      items: [
        { name: "Github", level: 100 },
        { name: "Docker", level: 80 },
        { name: "Vercel", level: 100 },
        { name: "Netlify", level: 100 },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Notion", level: 100 },
        { name: "Jira", level: 80 },
        { name: "Slack", level: 80 },
        { name: "Figma", level: 100 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-16 text-[var(--main-text)] skills_section"
    >
      <div className="flex items-center gap-3 mb-8 border-b border-[var(--border)] pb-2">
        <FontAwesomeIcon icon={faCode} size="2x" className="ml-2" />
        <h2 className="text-4xl font-bold skills_font_size">Skills</h2>
      </div>

      <div className="space-y-8">
        {/* 첫 번째 줄: Frontend & Styling */}
        <div className="grid grid-cols-2 gap-8">
          {skills.slice(0, 2).map(({ category, items }) => (
            <div
              key={category}
              className="bg-[var(--sub-bg)] p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6 text-center skills_names">
                {category}
              </h3>
              <div className="space-y-4">
                {items.map((item) => {
                  const itemKey = item.name.split(" ")[0];
                  const icon = skillIcons[itemKey];

                  return (
                    <div key={item.name} className="flex items-center gap-3">
                      {/* 아이콘 */}
                      <div className="flex-shrink-0">
                        {icon && (
                          <div className="w-9 h-9 bg-white rounded-lg p-1 shadow-sm">
                            <img
                              src={icon}
                              alt={`${itemKey} logo`}
                              className="w-full h-full object-contain skill_img"
                            />
                          </div>
                        )}
                      </div>

                      {/* 이름 */}
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-[var(--main-text)] truncate skill_font_size">
                          {item.name}
                        </p>
                      </div>

                      {/* 게이지 바 */}
                      <div className="flex-1 mx-2">
                        <div className="w-full bg-[var(--border)] rounded-full h-2.5">
                          <div
                            className="bg-blue-500 h-2.5 rounded-full transition-all duration-300"
                            style={{ width: `${item.level}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* 퍼센트 */}
                      <div className="flex-shrink-0 w-9 text-right">
                        <span className="text-xs font-medium text-[var(--main-text)]">
                          {item.level}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* 두 번째 줄: DevOps & Tools */}
        <div className="grid grid-cols-2 gap-8">
          {skills.slice(2, 4).map(({ category, items }) => (
            <div
              key={category}
              className="bg-[var(--sub-bg)] p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6 text-center skills_names">
                {category}
              </h3>
              <div className="space-y-4">
                {items.map((item) => {
                  const itemKey = item.name.split(" ")[0];
                  const icon = skillIcons[itemKey];

                  return (
                    <div key={item.name} className="flex items-center gap-3">
                      {/* 아이콘 */}
                      <div className="flex-shrink-0">
                        {icon && (
                          <div className="w-9 h-9 bg-white rounded-lg p-1 shadow-sm">
                            <img
                              src={icon}
                              alt={`${itemKey} logo`}
                              className="w-full h-full object-contain skill_img"
                            />
                          </div>
                        )}
                      </div>

                      {/* 이름 */}
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-[var(--main-text)] truncate skill_font_size">
                          {item.name}
                        </p>
                      </div>

                      {/* 게이지 바 */}
                      <div className="flex-1 mx-2">
                        <div className="w-full bg-[var(--border)] rounded-full h-2.5">
                          <div
                            className="bg-blue-500 h-2.5 rounded-full transition-all duration-300"
                            style={{ width: `${item.level}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* 퍼센트 */}
                      <div className="flex-shrink-0 w-9 text-right">
                        <span className="text-xs font-medium text-[var(--main-text)]">
                          {item.level}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
