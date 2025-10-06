"use client";

export default function EventsSection() {
  const events = [
    {
      title: "Science Fair 2025",
      desc: "Celebrating student innovations and research projects.",
    },
    {
      title: "Sports Week",
      desc: "Promoting teamwork and physical fitness among students.",
    },
    {
      title: "Arts & Culture",
      desc: "Showcasing student talents in music, dance, and arts.",
    },
  ];

  return (
    <section
      id="events"
      className="py-24 px-6 md:px-20 bg-white/80 backdrop-blur-md rounded-2xl mx-6 md:mx-20 mb-12"
    >
      <h3 className="text-3xl md:text-4xl font-bold text-green-700 mb-12 text-center">
        School Events
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {events.map((e, idx) => (
          <div
            key={idx}
            className="p-6 bg-green-100 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500"
          >
            <h4 className="font-semibold text-xl mb-2">{e.title}</h4>
            <p className="text-gray-700">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
