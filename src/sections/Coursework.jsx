const courses = [
  {
    title: "Application Development & Big Data",
    grade: "8.5",
    topics: [
      "HTML",
      "CSS",
      "JavaScript",
      "REST APIs",
      "JSON",
      "Web Dev Best Practices",
      "Data Analysis",
      "Python",
      "PySpark",
    ],
  },
  {
    title: "Mobile & e-Commerce Technologies",
    grade: "9",
    topics: [
      "Mobile & E-commerce Theory",
      "Mobile & Web Development",
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery mobile",
      "Responsive Design",
    ],
  },
  {
    title: "Programming - Software Engineering",
    grade: "8.5",
    topics: [
      "SWE Best Practices",
      "OOP",
      "Analysis & Design",
      "Java",
      "UML",
      "CASE Tools",
      "GUI Development",
      "Eclipse",
      "Agile / Scrum",
    ],
  },
  {
    title: "Cloud Technologies & Data Management on the Web",
    grade: "8.5",
    topics: [
      "Relational Databases",
      "MySQL",
      "MySQL Workbench",
      "Cloud Computing",
      "Cloud Service Models",
      "Google Cloud Platform",
    ],
  },
  {
    title: "Information Systems & Processes",
    grade: "7.8",
    topics: [
      "BPMN Diagrams",
      "Business & Requirements Analysis",
      "Enterprise Systems",
      "ERP - SAP S/4HANA",
      "CMS - WordPress",
    ],
  },
  {
    title: "Statistics & Simulation",
    grade: "7",
    topics: [
      "Advanced Excel",
      "Advanced Statistical Functions",
      "Probability & Distributions",
      "Simulation",
    ],
  },
  {
    title: "Design & Development of Serious Games",
    grade: 9,
    topics: [
      "Game Design",
      "Serious Games Best Practices",
      "OOP",
      "Java",
      "C#",
      "Greenfoot",
      "Unity 3D",
      "Game Evaluation",
    ],
  },
  {
    title: "Digital Economy & Business",
    grade: "7.3",
    topics: [
      "E-Business",
      "Business Models",
      "Payments",
      "KPIs",
      "Cryptocurrencies",
      "Blockchain",
      "Open Source Software",
    ],
  },
];

function CourseCard({ course }) {
  return (
    <div className="glass !flex-col !items-stretch !rounded-2xl gap-3 p-5 border-2 border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(118,171,174,0.55)] hover:border-accent">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold">{course.title}</h3>

        <span className="shrink-0 rounded-full bg-accent text-background text-sm font-bold px-3 py-1">
          {course.grade ?? "—"}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {course.topics.map((topic) => (
          <span
            key={topic}
            className="text-xs border border-accent/40 rounded-full px-3 py-1"
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
}

function Coursework() {
  return (
    <section id="coursework" className="py-24 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          <span className="text-accent">Coursework</span>
        </h2>

        <h4 className="text-center text-xl font-semibold opacity-80 mt-3">
          MSc in Computer Science full coursework
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 max-w-5xl mx-auto">
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Coursework;
