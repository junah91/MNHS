"use client";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center h-screen bg-[url('/images/MNHS_school.jpg')] bg-contain bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-xl">
          Mantalongon National High School
        </h1>
        <p className="text-lg md:text-2xl text-gray-100 max-w-3xl mx-auto mb-8 drop-shadow-lg">
          Inspiring excellence in academics, leadership, and community for generations of learners.
        </p>
        <a
          href="#about"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-300"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
