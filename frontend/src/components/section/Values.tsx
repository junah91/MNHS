"use client";

export default function MissionVisionSection() {
  return (
    <section
      id="mission-vision"
      className="py-24 px-6 md:px-20 bg-white rounded-2xl shadow-xl mx-6 md:mx-20 mb-12"
    >
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold text-green-800 mb-4">Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            To provide the youth with basic quality secondary education through the efforts of committed administrators, knowledgeable and competent teachers, with the support of stakeholders.
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-green-800 mb-4">Vision</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            To produce quality graduates who are responsible citizens and globally competitive individuals.
          </p>
        </div>
      </div>
    </section>
  );
}
