"use client";

import React from "react";

export default function AboutPage() {
  return (
    <main className="px-6 py-16 max-w-5xl mx-auto space-y-16">
      {/* Title */}
      <section>
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          About Mantalongon National High School
        </h1>
        <p className="text-lg leading-relaxed text-gray-700">
          Mantalongon National High School (MNHS) is a public secondary
          institution located in Dalaguete, Cebu. It was founded in 1966 with
          only one classroom, one teacher, and thirteen (13) students. Since
          then, it has grown into one of the largest secondary schools in the
          municipality.
        </p>
      </section>

      {/* History & Growth */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600 mb-4">History & Growth</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          MNHS celebrated its first graduation in 1993. Through the years, it
          expanded from its humble beginnings to become the Mantalongon NHS –
          Dalaguete Extension Main Campus. With the support of the Department of
          Education and the Local Government Unit of Dalaguete, more facilities
          and classrooms were established to cater to the increasing population
          of learners.
        </p>
        <p className="text-gray-700 leading-relaxed">
          In 2015, a new six-classroom building was constructed for Senior High
          School. The Municipal Government also donated a 12,000 sqm lot in
          Barangay Suwa, where a 23-classroom building was built. This became
          the MNHS Suwa Campus. Today, MNHS continues to thrive as one of the
          biggest secondary institutions in the district.
        </p>
      </section>

      {/* Administrators */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600 mb-4">School Administrators</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Mr. Luis C. Carin (1988 – 2005)</li>
          <li>Mr. Ramon C. Cortes (2006 – 2012)</li>
          <li>Mr. Roberto D. Moran (2013 – 2017)</li>
          <li>Mr. Robert C. Ceniza (2017 – present)</li>
        </ul>
      </section>

      {/* Present Status */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Present Status</h2>
        <p className="text-gray-700 leading-relaxed">
          At present, Mantalongon National High School serves around{" "}
          <strong>2,300 learners</strong> from Junior and Senior High School,
          supported by <strong>65 dedicated teachers</strong>. The school is part
          of the Division of Cebu Province, under the District of Dalaguete I.
        </p>
      </section>

      {/* DepEd VMGO */}
      <section>
        <h2 className="text-3xl font-bold text-green-700 mb-6">
          DepEd Vision, Mission, Core Values, and Mandate
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-2">Vision</h3>
            <p className="text-gray-700 leading-relaxed italic">
              We dream of Filipinos who passionately love their country and
              whose values and competencies enable them to realize their full
              potential and contribute meaningfully to building the nation. We
              are a learner-centered public institution that continuously
              improves itself to pursue its mission.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-2">Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To protect and promote the right of every Filipino to quality,
              equitable, culture-based, and complete basic education where:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
              <li>
                Students learn in a child-friendly, gender-sensitive, safe, and
                motivating environment.
              </li>
              <li>
                Teachers facilitate learning and constantly nurture every
                learner.
              </li>
              <li>
                Administrators and staff ensure an enabling and supportive
                environment for effective learning to happen.
              </li>
              <li>
                Families, communities, and stakeholders actively engage and
                share responsibility for developing life-long learners.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-2">Core Values</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Maka-Diyos</li>
              <li>Maka-tao</li>
              <li>Makakalikasan</li>
              <li>Makabansa</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-2">Mandate</h3>
            <p className="text-gray-700 leading-relaxed">
              The Department of Education formulates, implements, and
              coordinates policies, plans, programs, and projects in the areas
              of formal and non-formal basic education. It supervises all
              elementary and secondary institutions, including alternative
              learning systems, and ensures the establishment of a complete,
              adequate, and integrated system of basic education relevant to the
              goals of national development.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
