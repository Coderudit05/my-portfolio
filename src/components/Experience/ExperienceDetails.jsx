import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function ExperienceDetails() {
  const { id } = useParams();

  // Full data (same as your main experienceData)
  const experiences = {
    1: {
      company: "CodeWave Solution",
      logo: "/company-logos/codewave.png",
      role: "Instructor",
      duration: "Apr 2025 – Present · 8 months",
      details: `
Promoted from Technical Assistant to Core Team Member and Instructor.

Responsibilities:
• Teaching Java, Python, DSA, and web technologies.  
• Conducting doubt-solving and practical coding sessions.  
• Designing workshop content and mentoring new interns.  
• Maintaining a project-driven learning ecosystem.  
• Exploring advanced tools and enhancing content quality.  
      `,
    },
    2: {
      company: "CodeWave Solution",
      logo: "/company-logos/codewave.png",
      role: "Technical Assistant",
      duration: "Jan 2025 – Apr 2025 · 4 months",
      details: `
As a Technical Assistant:
• Assisted students in mastering Java and web technologies.  
• Supported projects and internal technical sessions.  
• Focused on collaborative, hands-on learning.  
• Developed key communication and leadership skills.
      `,
    },
    3: {
      company: "RICR (Raj Institute of Coding and Robotics)",
      logo: "/company-logos/ricr.png",
      role: "Technical Content Writing Intern",
      duration: "May 2024 – Nov 2024 · 7 months",
      details: `
At RICR, I contributed to educational content development:

• Created Java and DSA question banks and detailed solutions.  
• Enhanced course structure for better learning outcomes.  
• Developed strong technical writing and presentation skills.  
• Gained exposure to IoT and technical documentation.
      `,
    },
  };

  const exp = experiences[id];

  if (!exp)
    return (
      <p className="text-center text-white py-20">Experience not found.</p>
    );

  return (
    <section className="min-h-screen bg-[#050414] text-white py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/experience"
          className="flex items-center text-blue-400 hover:text-white mb-8 transition"
        >
          <FaArrowLeft className="mr-2" /> Back to Experience
        </Link>

        <div className="bg-[#0a0e27] border border-blue-400 rounded-xl p-8">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={exp.logo}
              alt={exp.company}
              className="w-16 h-16 rounded-full border border-blue-500"
            />
            <div>
              <h2 className="text-3xl font-bold text-blue-400">
                {exp.company}
              </h2>
              <h3 className="text-xl text-white">{exp.role}</h3>
              <p className="text-sm text-gray-400 mt-1">{exp.duration}</p>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
            {exp.details}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ExperienceDetails;
