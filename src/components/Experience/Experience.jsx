import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

function Experience() {
  const experienceData = [
    {
      id: 1,
      company: "CodeWave Solution",
      logo: "/company-logos/codewave.png",
      role: "Instructor",
      duration: "Apr 2025 – Present · 8 months",
      location: "Bhopal, Madhya Pradesh, India · On-site",
      summary:
        "Promoted from Technical Assistant to Instructor, mentoring students in Java, Python, DSA, and web technologies...",
      linkedin: "https://www.linkedin.com/company/codewave-solution/",
      side: "left",
    },
    {
      id: 2,
      company: "CodeWave Solution",
      logo: "/company-logos/codewave.png",
      role: "Technical Assistant",
      duration: "Jan 2025 – Apr 2025 · 4 months",
      location: "Bhopal, Madhya Pradesh, India · On-site",
      summary:
        "Assisted students in Java and web development, organized workshops, and contributed to internal projects...",
      linkedin: "https://www.linkedin.com/company/codewave-solution/",
      side: "right",
    },
    {
      id: 3,
      company: "RICR (Raj Institute of Coding and Robotics)",
      logo: "/company-logos/ricr.png",
      role: "Technical Content Writing Intern",
      duration: "May 2024 – Nov 2024 · 7 months",
      location: "Remote / Bhopal, India",
      summary:
        "Developed engaging Java and DSA content, designed structured learning materials, and improved technical documentation...",
      linkedin:
        "https://www.linkedin.com/company/raj-institute-of-coding-and-robotics/",
      side: "left",
    },
  ];

  return (
    <section className="min-h-screen bg-[#0a0520] text-white py-20 px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-900/30 via-purple-900/30 to-blue-900/30 animate-gradient-xy"></div>

      <div className="text-center mb-20 relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-3 tracking-wide">
          EXPERIENCE
        </h1>
        <div className="w-20 h-1 bg-linear-to-r from-blue-400 to-blue-600 rounded mx-auto mb-6"></div>
        <p className="text-gray-300 text-lg md:text-xl">
          My professional journey, achievements, and growth in the tech
          industry.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-linear-to-b from-blue-400 via-purple-500 to-blue-600"></div>

        <div className="space-y-16">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
                <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-[#050414] shadow-lg shadow-blue-500/50 animate-pulse"></div>
              </div>

              <div
                className={`flex items-center ${
                  exp.side === "left"
                    ? "justify-start pr-12 md:pr-16"
                    : "justify-end pl-12 md:pl-16"
                }`}
              >
                <div
                  className={`w-full md:w-5/12 bg-[#0a0e27] border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 ${
                    exp.side === "left" ? "text-right" : "text-left"
                  }`}
                >
                  {/* Logo + LinkedIn */}
                  <div
                    className={`flex items-center gap-3 mb-3 ${
                      exp.side === "left" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <a
                      href={exp.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:scale-105 transition-transform"
                    >
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-10 h-10 rounded-full border border-blue-400 shadow-md"
                      />
                      <FaLinkedin className="text-blue-500 text-2xl" />
                    </a>
                  </div>

                  {/* Info */}
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">
                    {exp.company}
                  </h3>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    {exp.role}
                  </h4>
                  <p
                    className={`text-sm text-gray-400 mb-3 flex items-center gap-2 ${
                      exp.side === "left" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <span className="text-blue-400">📅</span>
                    {exp.duration}
                  </p>

                  <p className="text-gray-300 mb-4">{exp.summary}</p>

                  {/* View Full Description Button */}
                  <div
                    className={`${
                      exp.side === "left" ? "justify-end" : "justify-start"
                    } flex`}
                  >
                    <Link
                      to={`/experience/${exp.id}`}
                      className="text-blue-400 border border-blue-400 px-5 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
                    >
                      View Full Description →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
