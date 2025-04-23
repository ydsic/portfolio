import { skillIcons } from "../../constants/skillIcons";

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "Zustand", "JavaScript", "TypeScript"],
    },
    {
      category: "Styling",
      items: ["HTML", "CSS", "TailwindCSS"],
    },
    {
      category: "Deployment & DevOps",
      items: ["GitHub", "Docker"],
    },
    {
      category: "Hosting",
      items: ["Vercel", "Netlify"],
    },
    {
      category: "협업 및 문서화",
      items: [
        "Notion (기획 문서)",
        "Jira (태스크 관리)",
        "Slack (팀 커뮤니케이션)",
        "Figma (디자인 시안 해석 및 UI 구현 협업)",
        "Zoom (화상 회의)",
        "Discord (화상 회의 및 팀 커뮤니케이션)",
      ],
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16 text-[var(--main-text)]">
      <h2 className="text-4xl font-bold mb-10 border-b border-[var(--border)] pb-2">
        Skills
      </h2>

      <div className="space-y-10">
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
