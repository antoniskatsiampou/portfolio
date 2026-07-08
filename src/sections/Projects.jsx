const projects = [
  {
    title: "Supercar",
    description:
      "A car marketplace with search and filtering, powered by preprocessed used-cars data.",
    category: "web",
    image: "/projects/supercar_1600x900.png",
    tags: ["JavaScript", "HTML", "CSS", "PySpark"],
    live: "https://supercar-sable.vercel.app/homepage.html",
    github: "https://github.com/antoniskatsiampou/supercar",
  },
  {
    title: "CSS Rescue",
    description:
      "A web-based serious game that teaches CSS fundamentals through interactive levels.",
    category: "web",
    image: "/projects/css_rescue_1600x900.png",
    tags: ["JavaScript", "HTML", "CSS"],
    live: "https://css-rescue.vercel.app/",
    github: "https://github.com/antoniskatsiampou/CSS-Rescue",
  },
  {
    title: "Real Madrid Blog",
    description:
      "A fan blog built to reproduce a specific given layout, with the goal of working smoothly across all devices.",
    category: "web",
    image: "/projects/real_madrid_1600x900.png",
    tags: ["JavaScript", "HTML", "CSS", "jQuery"],
    live: "https://real-madrid-blog.vercel.app/index.html",
    github: "https://github.com/antoniskatsiampou/real-madrid-blog",
  },
  {
    title: "Highway Run",
    description:
      "A Greenfoot arcade game where you dodge highway traffic at increasing speed.",
    category: "java",
    image: "/projects/highway_run.png",
    tags: ["Java"],
    live: null,
    github: "https://github.com/antoniskatsiampou/HighwayRun",
  },
  {
    title: "Ministry of Education Information System",
    description:
      "A desktop Java application prototyping an information system for the Ministry of Education. ",
    category: "java",
    image: "/projects/ministry_of_edu.png",
    tags: ["Java"],
    live: null,
    github: "https://github.com/antoniskatsiampou/School-Management",
  },
  {
    title: "AI-Assisted Software Development",
    description:
      "Development of a SaaS application, paired with research on how AI tools assist across development, quality assurance, testing and maintenance.",
    category: "other",
    image: null,
    tags: ["TypeScript", "Next.js", "PostgreSQL"],
    live: null,
    github: null,
    upcoming: true,
  },
  {
    title: "Athlete Training & Performance Database",
    description:
      "A team project. Developed a relational database for managing athlete training and performance from scratch.",
    category: "other",
    image: null,
    tags: ["MySQL"],
    live: null,
    github: null,
  },
];

// Map project tags to SVG icons
const tagIcons = {
  JavaScript: "JavaScript",
  HTML: "HTML5",
  CSS: "CSS3",
  "Tailwind CSS": "Tailwind CSS",
  PySpark: "Apache Spark",
  Java: "Java",
  MySQL: "MySQL",
  jQuery: "jQuery",
  TypeScript: "TypeScript",
  "Next.js": "Next.js",
  PostgreSQL: "PostgresSQL",
};

function Panel({ label, className = "", children }) {
  return (
    <div
      className={`flex flex-col rounded-2xl shadow-[0_8px_24px_rgba(118,171,174,0.35)] p-6 ${className}`}
    >
      <h3 className="text-xl font-semibold opacity-70">{label}</h3>
      {children}
    </div>
  );
}

function ProjectCard({ project, compact = false, fill = false }) {
  return (
    <div
      className={`glass !flex-col !items-stretch !p-0 !gap-0 !rounded-2xl overflow-hidden border-2 border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(118,171,174,0.55)] hover:border-accent ${
        fill ? "flex-1" : ""
      }`}
    >
      {/* Screenshot */}
      {project.image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Info */}
      <div className={`flex flex-col gap-3 ${compact ? "p-4" : "p-5"}`}>
        {project.kicker ? (
          <div className="flex flex-col gap-1">
            <div className="flex items-start justify-between gap-2">
              <span className="text-xs font-medium uppercase tracking-wide opacity-60">
                {project.kicker}
              </span>

              {project.upcoming && (
                <span className="shrink-0 text-xs font-medium rounded-full bg-accent/15 text-accent border border-accent/40 px-2.5 py-0.5">
                  Upcoming
                </span>
              )}
            </div>

            <h3 className="text-lg font-semibold">{project.title}</h3>
          </div>
        ) : (
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-semibold">{project.title}</h3>

            {project.upcoming && (
              <span className="shrink-0 text-xs font-medium rounded-full bg-accent/15 text-accent border border-accent/40 px-2.5 py-0.5">
                Upcoming
              </span>
            )}
          </div>
        )}

        <p className="text-sm opacity-80">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-1">
          {project.tags.map((tag) => {
            const icon = tagIcons[tag];
            return (
              <span
                key={tag}
                className="flex items-center gap-1.5 text-xs border border-accent/40 rounded-full px-3 py-1"
              >
                {icon && (
                  <img
                    src={encodeURI(`/icons/${icon}.svg`)}
                    alt=""
                    className="w-4 h-4"
                  />
                )}
                {tag}
              </span>
            );
          })}
        </div>

        {/* Actions */}
        {(project.live || project.github) && (
          <div className="flex items-center gap-3 mt-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-accent text-background text-sm font-medium px-4 py-2 hover:bg-accent-light transition-colors duration-200"
              >
                Live
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-accent text-sm px-4 py-2 hover:bg-accent hover:text-background transition-colors duration-200"
              >
                View Code
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function Projects() {
  const byCat = (id) => projects.filter((p) => p.category === id);
  const thesis = projects.find((p) => p.upcoming);
  const database = projects.find((p) => p.category === "other" && !p.upcoming);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          <span className="text-accent">Projects</span>
        </h2>

        {/* Web applications */}
        <Panel label="Web Applications" className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {byCat("web").map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Panel>

        {/* Java and other*/}
        <div className="mt-6 flex flex-col lg:flex-row gap-6">
          <Panel label="Java/Object-Oriented Programming" className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              {byCat("java").map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </Panel>

          <div className="flex flex-col gap-6 lg:w-1/3">
            <Panel label="Thesis" className="flex-1">
              <div className="mt-6 flex flex-1">
                <ProjectCard project={thesis} compact fill />
              </div>
            </Panel>

            <Panel label="Databases" className="flex-1">
              <div className="mt-6 flex flex-1">
                <ProjectCard project={database} compact fill />
              </div>
            </Panel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
