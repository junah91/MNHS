"use client";

export default function MissionVisionSection() {
  return (
    <section
      id="mission-vision"
      className="py-24 px-6 md:px-20 bg-white rounded-2xl shadow-xl mx-6 md:mx-20 mb-12"
    >
      <div className="grid md:grid-cols-2 gap-12">
        {/* Mission */}
        <div>
          <h2 className="text-4xl font-bold text-green-800 mb-4">Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            To protect and promote the right of every Filipino to quality,
            equitable, culture-based, and complete basic education where:
            students learn in a child-friendly, gender-sensitive, safe, and
            motivating environment; teachers facilitate learning and constantly
            nurture every learner; administrators and staff, as stewards of the
            institution, ensure an enabling and supportive environment for
            effective learning to happen; family, community, and other
            stakeholders are actively engaged and share responsibility for
            developing life-long learners.
          </p>
        </div>

        {/* Vision */}
        <div>
          <h2 className="text-4xl font-bold text-green-800 mb-4">Vision</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We dream of Filipinos who passionately love their country and whose
            competencies and values enable them to realize their full potential
            and contribute meaningfully to building the nation. We are a
            learner-centered public institution that continuously improves
            itself to pursue its mission.
          </p>
        </div>
      </div>

      {/* Core Values centered below */}
      <div className="mt-16 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-4">
          OUR CORE VALUES
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Maka-Diyos <br />
          Makatao <br />
          Makakalikasan <br />
          Makabansa
        </p>
      </div>
    </section>
  );
}
