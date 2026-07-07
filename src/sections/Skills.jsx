const skills = [
  { name: "React", icon: "React" },
  { name: "JavaScript", icon: "JavaScript" },
  { name: "HTML5", icon: "HTML5" },
  { name: "CSS3", icon: "CSS3" },
  { name: "Tailwind CSS", icon: "Tailwind CSS" },
  { name: "Bootstrap", icon: "Bootstrap" },
  { name: "Java", icon: "Java" },
  { name: "MySQL", icon: "MySQL" },
  { name: "WordPress", icon: "WordPress" },
  { name: "Photoshop", icon: "Adobe Photoshop" },
  { name: "Git", icon: "Git" },
  { name: "VS Code", icon: "Visual Studio Code (VS Code)" },
  { name: "IntelliJ IDEA", icon: "IntelliJ IDEA" },
  { name: "Eclipse", icon: "Eclipse IDE" },
];

const exploring = [
  { name: "TypeScript", icon: "TypeScript" },
  { name: "Next.js", icon: "Next.js" },
  { name: "PostgreSQL", icon: "PostgresSQL" },
];

function SkillCard({ skill }) {
  return (
    <div className="glass !flex-col justify-center !rounded-2xl gap-3 p-4 w-32 h-32 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(118,171,174,0.55)] hover:border-accent">
      <img
        src={encodeURI(`/icons/${skill.icon}.svg`)}
        alt={skill.name}
        className="w-12 h-12"
      />
      <span className="text-sm text-center">{skill.name}</span>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          <span className="text-accent">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>

        {/* Currently exploring */}
        <h3 className="text-xl md:text-2xl text-accent-light text-center mt-20">
          Currently exploring
        </h3>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {exploring.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
