function Skills() {
  const skillGroups = [
    {
      title: "FRONTEND DEVELOPMENT",
      tagline: "Clients: Can you do all the codings? Editor: Yes! Clients: How? Editor: Because I am a developer!" ,
      stack: ["React JS", "Node JS", "Express JS", "MongoDB", "Vue JS", "Tailwind CSS"],
    },
    {
      title: "DATA ANALYSIS",
      tagline: "How does a data analyst make a decision? They don't. They make a dashboard and let the manager decide.",
      stack: ["Python", "SQL", "Pandas", "Tableau", "Power BI", "Excel"],
    },
    {
      title: "VIDEO EDITING",
      tagline: "Client: “Can you make a small change?” Editor: “Sure.” Client: “Just change the entire video.”",
      stack: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Thumbnails"],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-black text-white py-20 md:py-24 px-6 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className="group relative bg-gray-900 border border-gray-800 hover:border-red-500/40 hover:bg-gray-950 rounded-2xl p-6 md:p-8 h-64 flex flex-col justify-center overflow-hidden transition-colors duration-300"
            >
              <h3 className="text-xl font-bold text-red-500 mb-3">
                {group.title}
              </h3>

              <p className="text-gray-400 text-sm md:text-base transition-opacity duration-200 group-hover:opacity-0 group-hover:h-0 group-hover:mb-0 overflow-hidden">
                {group.tagline}
              </p>

              <div className="flex flex-wrap gap-2 mt-4 max-h-0 group-hover:max-h-40 transition-all duration-300 overflow-hidden">
                {group.stack.map((skill, j) => (
                  <span
                    key={skill}
                    className="text-xs md:text-sm font-mono text-red-400 border border-red-500/40 rounded-full px-3 py-1 bg-red-500/5 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                    style={{ transitionDelay: `${80 + j * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <span className="mt-4 text-xs uppercase tracking-widest text-gray-600 transition-opacity duration-200 group-hover:opacity-0">
                <i>Want to know my </i><b>SKILLS?</b>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
