import Footer from "@/layout/Footer";

const experiences = [
  {
    role: "E-Shop Assistant",
    period: "Sep 2024 - May 2025",
    points: [
      "Optimized web content for better user experience",
      "Managed order tracking and payment flows",
      "Provided customer support via phone and email",
    ],
    tags: [
      "CMS Joomla",
      "VirtueMart",
      "HTML",
      "CSS",
      "SEO",
      "Microsoft Excel",
      "Adobe Photoshop",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="min-h-screen flex flex-col pt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          <span className="text-accent">Experience</span>
        </h2>

        <div className="max-w-2xl mx-auto mt-12 flex flex-col gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="glass !flex-col !items-stretch !rounded-2xl gap-3 p-6 border-2 border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(118,171,174,0.55)] hover:border-accent"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold">{exp.role}</h3>

                <span className="shrink-0 text-sm opacity-70">
                  {exp.period}
                </span>
              </div>

              <ul className="flex flex-col gap-1 text-sm opacity-80 list-disc pl-5">
                {exp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-1">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs border border-accent/40 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </section>
  );
}

export default Experience;
