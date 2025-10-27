"use client";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-20 bg-gradient-to-r from-green-50 via-white to-green-50 flex flex-col md:flex-row items-center gap-12"
    >
      <div className="md:w-1/2">
        <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
          About MNHS
        </h2>
        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
          Mantalongon National High School has been providing quality education
          for our community’s youth since 1966. Our programs focus on academic
          excellence, values formation, and leadership development.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          With dedicated teachers, supportive staff, and an engaged community,
          we aim to nurture responsible, innovative, and globally-competitive
          students.
        </p>
      </div>
      <div className="md:w-1/2">
        <img
          src="/images/mnhs.jpg"
          alt="About MNHS"
          className="w-full rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
}
