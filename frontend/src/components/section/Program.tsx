"use client";

export default function ProgramsSection() {
  const programs = [
    {
      title: "Junior High School",
      desc: "Comprehensive curriculum for middle-grade students.",
    },
    {
      title: "Senior High School",
      desc: "Specialized tracks preparing students for college and careers.",
    },
    {
      title: "Special Programs",
      desc: "Leadership, arts, and community-oriented initiatives.",
    },
  ];

  return (
    <section
      id="programs"
      className="py-24 px-6 md:px-20 bg-green-50"
    >
      <h3 className="text-3xl md:text-4xl font-bold text-green-700 mb-12 text-center">
        Our Programs
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {programs.map((p, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500"
          >
            <h4 className="font-semibold text-xl mb-2">{p.title}</h4>
            <p className="text-gray-700">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
