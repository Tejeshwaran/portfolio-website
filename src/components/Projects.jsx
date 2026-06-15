import { useState } from "react";

function Projects() {
  const [category, setCategory] = useState("web");

  const webProjects = [
    {
      title: "Portfolio Website",
      tech: "React • Tailwind CSS",
      description:
        "A modern personal portfolio website with responsive design, smooth UI, and dark theme.",
      status: "Completed",
    },
    {
      title: "E-Commerce Store",
      tech: "Vue.js • CSS",
      description:
        "An online shopping website with product cards, cart system, and clean user interface.",
      status: "Coming Soon",
    },
    {
      title: "Social Media App",
      tech: "React • CSS",
      description:
        "A social media platform with posts, profiles, likes, and user-friendly design.",
      status: "Coming Soon",
    },
  ];

  const dataProjects = [
    {
      title: "Sales Dashboard",
      tech: "Excel • Power BI • SQL",
      description:
        "An interactive dashboard to analyze sales performance, revenue, and business KPIs.",
      status: "Completed",
    },
    {
      title: "Customer Analysis",
      tech: "Tableau • Excel",
      description:
        "A data analytics project focused on customer behavior, trends, and segmentation.",
      status: "Coming Soon",
    },
    {
      title: "Marketing Dashboard",
      tech: "Power BI • Google Analytics",
      description:
        "A dashboard for tracking marketing performance, website traffic, and conversions.",
      status: "Coming Soon",
    },
  ];

  const projects = category === "web" ? webProjects : dataProjects;

  return (
    <section id="projects" className="relative min-h-screen bg-black text-white py-24 px-6 overflow-hidden">
      {/* Background circles */}
      <div className="absolute w-72 h-72 bg-red-600 rounded-full right-32 top-64 blur-3xl opacity-20"></div>
      <div className="absolute w-32 h-32 bg-red-900 rounded-full right-24 top-32 blur-2xl opacity-30"></div>
      <div className="absolute w-52 h-52 bg-red-900 rounded-full -left-20 bottom-0 blur-3xl opacity-30"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-red-500">Projects</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            I build modern web applications and transform raw data into meaningful business insights.
          </p>
        </div>

        {/* Category buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setCategory("web")}
            className={`px-6 py-3 rounded-full font-semibold transition duration-300 ${
              category === "web"
                ? "bg-red-600 text-white shadow-lg shadow-red-600/40"
                : "bg-zinc-900 text-gray-300 hover:bg-red-600"
            }`}
          >
            Web Development
          </button>

          <button
            onClick={() => setCategory("data")}
            className={`px-6 py-3 rounded-full font-semibold transition duration-300 ${
              category === "data"
                ? "bg-red-600 text-white shadow-lg shadow-red-600/40"
                : "bg-zinc-900 text-gray-300 hover:bg-red-600"
            }`}
          >
            Data Analytics
          </button>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 hover:border-red-500 hover:-translate-y-2 transition duration-300"
            >
              <div className="h-40 bg-gradient-to-br from-red-900 to-black rounded-xl mb-6 flex items-center justify-center">
                <span className="text-5xl">
                  {category === "web" ? "💻" : "📊"}
                </span>
              </div>

              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold">{project.title}</h3>

                <span className="text-xs bg-red-600/20 text-red-400 px-3 py-1 rounded-full">
                  {project.status}
                </span>
              </div>

              <p className="text-red-400 text-sm mb-3">{project.tech}</p>

              <p className="text-gray-400 text-sm mb-6">
                {project.description}
              </p>

              <div className="flex gap-4">
                <button className="text-sm bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition">
                  Live Demo
                </button>

                <button className="text-sm border border-red-600 px-4 py-2 rounded-lg hover:bg-red-600 transition">
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;