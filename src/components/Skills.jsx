import { useLanguage } from "../i18n/languageContext";

const stacks = [
  ["React", "Vue.js", "JavaScript", "HTML & CSS", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
  ["Python", "SQL", "Excel", "Tableau", "Power BI", "Pandas", "AWS"],
  ["Premiere Pro", "After Effects", "DaVinci Resolve"],
];

function Skills() {
  const { t } = useLanguage();

  return (
    <section className="section skills-section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-heading-row" data-reveal>
          <div>
            <p className="section-kicker"><span>03</span> / {t.skills.kicker}</p>
            <h2 className="section-title" id="skills-title">{t.skills.title}</h2>
          </div>
          <p className="section-description">{t.skills.intro}</p>
        </div>
        <div className="skills-grid">
          {t.skills.groups.map((group, index) => (
            <article className="skill-card" key={group.title} data-reveal style={{ "--reveal-delay": index * 70 + "ms" }}>
              <span className="skill-number">0{index + 1}</span>
              <div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul className="skill-list">
                  {stacks[index].map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
