import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import pilloIcon from "../assets/pillo-icon.png";
import unterwegsIcon from "../assets/unterwegs-icon.svg";
import { useLanguage } from "../i18n/languageContext";

const waveform = [12, 19, 29, 17, 36, 49, 31, 56, 42, 64, 48, 34, 53, 39, 62, 45, 28, 48, 34, 22, 38, 26, 16, 12];
const projectIcons = { pillo: pilloIcon, unterwegs: unterwegsIcon };

function Projects() {
  const { t } = useLanguage();

  return (
    <section className="section projects-section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-heading-row" data-reveal>
          <div>
            <p className="section-kicker"><span>02</span> / {t.projects.kicker}</p>
            <h2 className="section-title" id="projects-title">{t.projects.title}</h2>
          </div>
          <p className="section-description">{t.projects.intro}</p>
        </div>
        {t.projects.items.map((project, projectIndex) => (
          <article className="project-case" key={project.id} aria-labelledby={`${project.id}-title`} data-reveal>
            <div className="project-preview">
              <div className="project-preview-head">
                <img className="project-icon" src={projectIcons[project.id]} alt="" width="64" height="64" loading="lazy" />
                <span className="project-wordmark">{project.title}</span>
              </div>
              <p className="project-preview-caption">{project.subtitle}</p>
              {project.id === "pillo" ? (
                <div className="pillo-waveform" aria-hidden="true">
                  {waveform.map((height, index) => (
                    <span key={index} style={{ "--bar-height": `${height}px`, "--bar-index": index }} />
                  ))}
                </div>
              ) : (
                <div className="unterwegs-path" aria-hidden="true">
                  {["A1", "A2", "B1", "B2"].map((level) => <span key={level}>{level}</span>)}
                </div>
              )}
              <ol className="project-flow" aria-label={project.flowLabel}>
                {project.flow.map((step, index) => (
                  <li key={step}>
                    <span>{step}</span>
                    {index < project.flow.length - 1 && <ArrowRight size={14} aria-hidden="true" />}
                  </li>
                ))}
              </ol>
            </div>
            <div className="project-content">
              <div className="project-topline"><span>{project.category}</span><span>{String(projectIndex + 1).padStart(2, "0")}</span></div>
              <h3 id={`${project.id}-title`}>{project.title}</h3>
              <span className="project-status">{project.status}</span>
              <p className="project-description">{project.description}</p>
              <ul className="project-features">
                {project.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <div className="project-tags">
                {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              <details className="project-details">
                <summary>{t.projects.more}<ChevronDown size={17} aria-hidden="true" /></summary>
                <p>{project.detail}</p>
              </details>
            </div>
          </article>
        ))}
        <p className="projects-outro">{t.projects.outro} <a className="text-link" href="#contact">{t.projects.outroLink}<ArrowUpRight size={16} aria-hidden="true" /></a></p>
      </div>
    </section>
  );
}

export default Projects;
