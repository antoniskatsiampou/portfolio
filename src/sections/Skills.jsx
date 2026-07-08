const skillGroups = [
  {
    label: "Front End",
    items: [
      { name: "React", icon: "React" },
      { name: "JavaScript", icon: "JavaScript" },
      { name: "HTML5", icon: "HTML5" },
      { name: "CSS3", icon: "CSS3" },
      { name: "Tailwind CSS", icon: "Tailwind CSS" },
      { name: "Bootstrap", icon: "Bootstrap" },
    ],
  },
  {
    label: "Back End / Databases",
    items: [
      { name: "Java", icon: "Java" },
      { name: "PySpark", icon: "Apache Spark" },
      { name: "MySQL", icon: "MySQL" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git", icon: "Git" },
      { name: "VS Code", icon: "Visual Studio Code (VS Code)" },
      { name: "IntelliJ IDEA", icon: "IntelliJ IDEA" },
      { name: "Eclipse", icon: "Eclipse IDE" },
      { name: "Photoshop", icon: "Adobe Photoshop" },
      { name: "WordPress", icon: "WordPress" },
    ],
  },
];

function SkillCard({ skill }) {
  return (
    <div className="glass !flex-col justify-center !rounded-2xl gap-3 p-4 w-24 h-24 sm:w-32 sm:h-32 border-2 border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(118,171,174,0.55)] hover:border-accent">
      <img
        src={encodeURI(`/icons/${skill.icon}.svg`)}
        alt={skill.name}
        className="w-10 h-10 sm:w-12 sm:h-12"
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

        {skillGroups.map((group) => (
          <div key={group.label} className="mt-12">
            <h3 className="text-xl font-semibold opacity-70 text-center">
              {group.label}
            </h3>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6">
              {group.items.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
