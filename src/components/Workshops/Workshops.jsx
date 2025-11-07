import React from "react";
import { Link } from "react-router-dom";

function Workshops() {
  const workshops = [
    {
      id: 1,
      title: "Power BI Workshop",
      location: "Oriental College, Bhopal",
      link: "/workshops/powerbi-oriental",
    },
    {
      id: 2,
      title: "Java Fundamentals Workshop",
      location: "SIRT College, Bhopal",
      link: "/workshops/java-sirt",
    },
    {
      id: 3,
      title: "Python Fundamentals Workshop",
      location: "SIRT College, Bhopal",
      link: "/workshops/python-sirt",
    },
    {
      id: 4,
      title: "Power BI Workshop",
      location: "UIT-RGPV, Bhopal",
      link: "/workshops/powerbi-uit",
    },
    {
      id: 5,
      title: "Doubt-Clearing Session",
      location: "Codewave Solution, Bhopal",
      link: "/workshops/doubt-clearing-cws",
    },
    {
      id: 6,
      title: "App Development with Python Workshop",
      location: "Excellence College (IEHE), Bhopal",
      link: "/workshops/excellence-college",
    },
  ];

  return (
    <section className="min-h-screen bg-[#050414] text-white py-20 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Workshops & Bootcamps</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A collection of <span className="text-blue-400 font-semibold">offline workshops</span> 
            and <span className="text-blue-400 font-semibold">interactive sessions</span> 
            I conducted in collaboration with{" "}
            <span className="text-blue-400 font-semibold">Aman Pandey Sir</span>, 
            Founder & CEO of <span className="text-blue-400">Codewave Solution</span>.
          </p>
        </div>

        {/* Workshop Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workshops.map((workshop) => (
            <Link
              key={workshop.id}
              to={workshop.link}
              className="group bg-[#0a0e27] border border-gray-700 rounded-xl p-8 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <h2 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {workshop.title}
              </h2>
              <p className="text-gray-400 text-lg mb-2">{workshop.location}</p>
              <p className="text-sm text-gray-500 italic">
                Conducted in collaboration with Codewave Solution
              </p>
              <p className="mt-4 text-blue-400 text-sm font-semibold group-hover:underline">
                View Workshop →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Workshops;
