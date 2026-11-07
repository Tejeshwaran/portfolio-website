import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChartNoAxesCombined, ChevronDown, Cpu, Flower2 } from "lucide-react";
import pilloIcon from "../assets/pillo-icon.png";
import unterwegsIcon from "../assets/unterwegs-icon.svg";
import { useLanguage } from "../i18n/languageContext";
import "./Projects.css";

const projectIcons = { pillo: pilloIcon, unterwegs: unterwegsIcon };
const trackIcons = { ai: Cpu, data: ChartNoAxesCombined };

function ProjectIcon({ project, size = 28 }) {
  if (projectIcons[project.id]) return <img src={projectIcons[project.id]} alt="" width={size} height={size} />;
  const Icon = project.id === "bloom-india" ? Flower2 : ChartNoAxesCombined;
  return <Icon size={size} strokeWidth={1.5} aria-hidden="true" />;
}

function ProjectDescription({ project, index, copy, titleRef }) {
  return (
    <article className="game-project-detail" aria-labelledby={`${project.id}-title`}>
      <div className="game-detail-topline"><span>{project.category}</span><span>{String(index + 1).padStart(2, "0")}</span></div>
      <div className="game-detail-heading">
        <span className="game-detail-icon"><ProjectIcon project={project} size={32} /></span>
        <h3 id={`${project.id}-title`} tabIndex={-1} ref={titleRef}>{project.title}</h3>
      </div>
      <p className="game-detail-subtitle">{project.subtitle}</p>
      <span className="game-detail-status">{project.status}</span>
      <p className="game-detail-description">{project.description}</p>
      {project.links?.length > 0 && <div className="game-detail-actions">{project.links.map((link) => <a className="text-link" href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.ariaLabel} key={link.href}>{link.label}<ArrowUpRight size={16} aria-hidden="true" /></a>)}</div>}
      <ul className="game-detail-features">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
      <div className="game-detail-tags">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
      <details className="game-detail-technical">
        <summary>{copy.more}<ChevronDown size={16} aria-hidden="true" /></summary>
        <p>{project.detail}</p>
      </details>
    </article>
  );
}

function Projects() {
  const { t } = useLanguage();
  const copy = t.projects;
  const [activeTrack, setActiveTrack] = useState(null);
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const categoryRefs = useRef([]);
  const categoryContentRefs = useRef([]);
  const projectRefs = useRef({});
  const projectStageRef = useRef(null);
  const projectPosition = useRef(null);
  const projectAnimation = useRef(null);
  const detailTitleRef = useRef(null);
  const detailScrollRef = useRef(null);
  const menuPositions = useRef(null);
  const menuAnimations = useRef([]);
  const selectedProject = copy.items.find((project) => project.id === activeProjectId);

  function captureMenuPositions() {
    menuPositions.current = categoryContentRefs.current.map((element) => element?.getBoundingClientRect());
    menuAnimations.current.forEach((animation) => animation.cancel());
    menuAnimations.current = [];
  }

  // Animate the same two menu choices between the split and left-hand layouts.
  // Their content moves from its actual last screen position, including on reversal.
  useLayoutEffect(() => {
    const previous = menuPositions.current;
    menuPositions.current = null;
    if (!previous || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    menuAnimations.current = categoryContentRefs.current.flatMap((element, index) => {
      if (!element || !previous[index] || typeof element.animate !== "function") return [];
      const current = element.getBoundingClientRect();
      return [element.animate([
        { transform: `translate(${previous[index].left - current.left}px, ${previous[index].top - current.top}px)` },
        { transform: "translate(0, 0)" },
      ], { duration: 820, easing: "cubic-bezier(.16, 1, .3, 1)" })];
    });
  }, [activeTrack]);

  function captureProjectPosition() {
    projectPosition.current = projectStageRef.current?.getBoundingClientRect();
    projectAnimation.current?.cancel();
  }

  useLayoutEffect(() => {
    const previous = projectPosition.current;
    const stage = projectStageRef.current;
    projectPosition.current = null;
    if (!previous || !stage || typeof stage.animate !== "function" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const current = stage.getBoundingClientRect();
    projectAnimation.current = stage.animate([
      { transform: `translate(${previous.left - current.left}px, ${previous.top - current.top}px)` },
      { transform: "translate(0, 0)" },
    ], { duration: 820, easing: "cubic-bezier(.16, 1, .3, 1)" });
  }, [detailOpen]);

  useEffect(() => () => {
    menuAnimations.current.forEach((animation) => animation.cancel());
    projectAnimation.current?.cancel();
  }, []);

  useEffect(() => {
    if (!detailOpen) return;
    if (detailScrollRef.current) detailScrollRef.current.scrollTop = 0;
    detailTitleRef.current?.focus({ preventScroll: window.matchMedia("(min-width: 521px)").matches });
  }, [detailOpen, activeProjectId]);

  function selectTrack(trackId) {
    if (activeTrack === null) captureMenuPositions();
    if (activeTrack !== trackId) {
      setDetailOpen(false);
    }
    setActiveTrack(trackId);
  }

  function selectProject(projectId) {
    if (!detailOpen) captureProjectPosition();
    setActiveProjectId(projectId);
    setDetailOpen(true);
  }

  function closeDetails() {
    captureProjectPosition();
    setDetailOpen(false);
    projectRefs.current[activeProjectId]?.focus({ preventScroll: window.matchMedia("(min-width: 521px)").matches });
  }

  function resetMenu() {
    captureMenuPositions();
    setDetailOpen(false);
    setActiveTrack(null);
    categoryRefs.current[0]?.focus({ preventScroll: window.matchMedia("(min-width: 521px)").matches });
  }

  function handleCategoryKey(event, index) {
    let nextIndex;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % copy.tracks.length;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + copy.tracks.length) % copy.tracks.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = copy.tracks.length - 1;
    if (nextIndex === undefined) return;
    event.preventDefault();
    selectTrack(copy.tracks[nextIndex].id);
    categoryRefs.current[nextIndex]?.focus();
  }

  function handleBackKey(event) {
    if (event.key !== "Escape" || activeTrack === null) return;
    event.preventDefault();
    event.stopPropagation();
    if (detailOpen) closeDetails();
    else resetMenu();
  }

  return (
    <section className="section projects-section" id="projects" aria-labelledby="projects-title" onKeyDown={handleBackKey}>
      <div className="container">
        <div className="section-heading-row" data-reveal>
          <div>
            <p className="section-kicker"><span>02</span> / {copy.kicker}</p>
            <h2 className="section-title" id="projects-title">{copy.title}</h2>
          </div>
          <p className="section-description">{copy.intro}</p>
        </div>
        <div className="project-game-menu" data-open={activeTrack !== null} data-track={activeTrack || "ai"} data-detail={detailOpen}>
          <div className="game-category-stage">
            <div className="game-category-menu" inert={detailOpen} aria-hidden={detailOpen || undefined}>
              <p className="game-step-label">{copy.chooseTrack}</p>
              <div className="game-category-list" role="tablist" aria-label={copy.trackLabel} aria-orientation={activeTrack ? "vertical" : "horizontal"}>
                {copy.tracks.map((track, index) => {
                  const Icon = trackIcons[track.id];
                  const count = copy.items.filter((project) => project.track === track.id).length;
                  return (
                    <button
                      className={`game-category game-category--${track.id}`}
                      type="button"
                      role="tab"
                      id={`project-tab-${track.id}`}
                      aria-selected={activeTrack === track.id}
                      aria-controls={`project-panel-${track.id}`}
                      tabIndex={activeTrack === track.id || (activeTrack === null && index === 0) ? 0 : -1}
                      ref={(element) => { categoryRefs.current[index] = element; }}
                      onClick={() => selectTrack(track.id)}
                      onKeyDown={(event) => handleCategoryKey(event, index)}
                      key={track.id}
                    >
                      <span className="game-category-content" ref={(element) => { categoryContentRefs.current[index] = element; }}>
                        <span className="game-category-symbol"><Icon size={34} strokeWidth={1.3} aria-hidden="true" /></span>
                        <span className="game-category-copy">
                          <span className="game-category-eyebrow">0{index + 1} / {track.eyebrow}</span>
                          <span className="game-category-title">{track.title}</span>
                          <span className="game-category-description">{track.description}</span>
                          <span className="game-category-meta">{String(count).padStart(2, "0")} {copy.projectCount}<ArrowRight size={17} aria-hidden="true" /></span>
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
              {activeTrack !== null && <button className="game-reset" type="button" onClick={resetMenu}><ArrowLeft size={14} aria-hidden="true" />{copy.allAreas}</button>}
            </div>
          </div>
          <div className="game-projects-stage" ref={projectStageRef} hidden={activeTrack === null}>
            {copy.tracks.map((track) => {
              const projects = copy.items.filter((project) => project.track === track.id);
              return (
                <div className="game-project-panel" role="tabpanel" id={`project-panel-${track.id}`} aria-labelledby={`project-tab-${track.id}`} hidden={activeTrack !== track.id} key={track.id}>
                  {activeTrack === track.id && (
                    <>
                      <p className="game-step-label">{copy.chooseProject}</p>
                      <div className="game-projects-heading"><h3>{track.title}</h3><span>{String(projects.length).padStart(2, "0")} {copy.projectCount}</span></div>
                      <div className="game-project-list" role="group" aria-label={track.title}>
                        {projects.map((project, index) => (
                          <button
                            className="game-project"
                            type="button"
                            aria-pressed={detailOpen && activeProjectId === project.id}
                            aria-controls="project-description-layer"
                            onClick={() => selectProject(project.id)}
                            ref={(element) => { projectRefs.current[project.id] = element; }}
                            style={{ "--project-index": index }}
                            key={project.id}
                          >
                            <span className="game-project-number">0{index + 1}</span>
                            <span className="game-project-icon"><ProjectIcon project={project} size={32} /></span>
                            <span className="game-project-copy"><strong className="game-project-title">{project.title}</strong><span className="game-project-subtitle">{project.subtitle}</span></span>
                            <ArrowUpRight className="game-project-arrow" size={19} aria-hidden="true" />
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
          <div className="game-description-stage">
            <div className="game-layer-viewport">
            <div className="game-detail-layer" id="project-description-layer" data-open={detailOpen} role="region" aria-label={copy.projectDetails} aria-hidden={!detailOpen} inert={!detailOpen}>
              <div className="game-layer-inner" ref={detailScrollRef}>
                <button className="game-layer-back" type="button" onClick={closeDetails}><ArrowLeft size={16} aria-hidden="true" />{copy.backToMenu}</button>
                {selectedProject && <ProjectDescription project={selectedProject} index={copy.items.filter((project) => project.track === selectedProject.track).findIndex((project) => project.id === selectedProject.id)} copy={copy} titleRef={detailTitleRef} key={selectedProject.id} />}
              </div>
            </div>
            </div>
          </div>
        </div>
        <p className="sr-only" role="status">{detailOpen && selectedProject ? `${copy.selectedProject}: ${selectedProject.title}` : ""}</p>
        <p className="projects-outro">{copy.outro} <a className="text-link" href="#contact">{copy.outroLink}<ArrowUpRight size={16} aria-hidden="true" /></a></p>
      </div>
    </section>
  );
}

export default Projects;
