const projects = [
  {
    title: "SUPERCAR",
    description:
      "A used cars web application, which loads and displays car data.",
    image: "/projects/supercar.png",
    tags: ["JavaScript", "HTML", "CSS", "PySpark"],
    live: "https://supercar-sable.vercel.app/homepage.html",
    github: "https://github.com/antoniskatsiampou/supercar",
  },
  {
    title: "CSS Rescue",
    description: "A Web-based serious game, for learning basic CSS.",
    image: "/projects/css_rescue.png",
    tags: ["JavaScript", "HTML", "CSS"],
    live: "https://css-rescue.vercel.app/",
    github: "https://github.com/antoniskatsiampou/CSS-Rescue",
  },
  {
    title: "Real Madrid Blog",
    description: "A simple front end.",
    image: "/projects/real_madrid.png",
    tags: ["JavaScript", "HTML", "CSS", "jQuery"],
    live: "https://real-madrid-blog.vercel.app/index.html",
    github: "https://github.com/antoniskatsiampou/real-madrid-blog",
  },
  {
    title: "Highway Run",
    description:
      "A Greenfoot-based game in which you are speeding and trying to avoid traffic",
    image: "/projects/highway_run.png",
    tags: ["Java"],
    live: null,
    github: "https://github.com/antoniskatsiampou/HighwayRun",
  },
];

function ProjectCard({ project }) {
  return (
    <div className="glass !flex-col !items-stretch !p-0 !gap-0 !rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(118,171,174,0.55)]">
      {/* Screenshot */}
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm opacity-80">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs border border-accent/40 rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent text-background text-sm font-medium px-4 py-2 hover:bg-accent-light transition-colors duration-200"
            >
              Live Demo
            </a>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-accent text-sm px-4 py-2 hover:bg-accent hover:text-background transition-colors duration-200"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          <span className="text-accent">Projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
