import { ArrowDown } from "lucide-react";
import { useLanguage } from "../i18n/languageContext";
import { useExperienceMotion } from "../hooks/useExperienceMotion";

function Experience() {
  const { t, lang } = useLanguage();
  const sectionRef = useExperienceMotion(lang);
  const chapters = [
    { id: "work", label: t.experience.workTitle, items: t.experience.work },
    { id: "education", label: t.experience.educationTitle, items: t.experience.education },
  ];

  return (
    <section ref={sectionRef} className="section experience-section" id="experience" aria-labelledby="experience-title">
      <div className="container experience-story">
        <div className="experience-intro">
          <div className="experience-intro-content">
            <p className="section-kicker"><span>04</span> / {t.experience.kicker}</p>
            <h2 className="section-title" id="experience-title">{t.experience.title}</h2>
            <p className="section-description">{t.experience.intro}</p>
            <div className="experience-guide" aria-hidden="true">
              <span><ArrowDown size={15} />{t.experience.scrollHint}</span>
              <div className="experience-progress"><span /></div>
              <div className="experience-chapter-labels">
                <span data-chapter-label="work">01 / {t.experience.workTitle}</span>
                <span data-chapter-label="education">02 / {t.experience.educationTitle}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="experience-stream">
          <div className="journey-track">
            {chapters.map((chapter, chapterIndex) => (
              <div className="journey-chapter" key={chapter.id}>
                <h3 className="journey-chapter-title"><span aria-hidden="true">0{chapterIndex + 1} / </span>{chapter.label}</h3>
                {chapter.items.map((item, index) => (
                  <article className="journey-step" data-chapter={chapter.id} key={item.company || item.school}>
                    <div className="journey-card">
                      <p className="journey-card-category" aria-hidden="true">{chapter.label}</p>
                      <div className="journey-card-meta">
                        <span className="timeline-date">{item.date}</span>
                        <span className="journey-index" aria-hidden="true">0{index + 1 + (chapterIndex ? t.experience.work.length : 0)} / 0{t.experience.work.length + t.experience.education.length}</span>
                      </div>
                      <h4>{item.role || item.degree}</h4>
                      <p className="timeline-place">{item.company || item.school}</p>
                      <p className="journey-description">{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
