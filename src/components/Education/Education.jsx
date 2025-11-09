import React from "react";
import my10_and_12th_marksheet from "../../../public/my docs/udit's 10_and_12th_marksheet.pdf";
import myGraduationMarksheet from "../../../public/my docs/Udit's Marksheet of Graduation.pdf";

function Education() {
  // ========================================
  // EDUCATION DATA
  // ========================================
  const educationData = [
    {
      id: 1,
      school: "Bansal Institute of Research & Technology, Bhopal",
      degree: "B.Tech in Electronics and Communication Engineering",
      duration: "2021 - 2025",
      description:
        "Pursuing B.Tech in ECE with a focus on embedded systems, digital communication, and modern signal processing. Actively engaged in IoT and AI-based hardware projects.",
      side: "left",
      marksheet: myGraduationMarksheet,
    },
    {
      id: 2,
      school: "Government H.S. School Anand Nagar, Bhopal",
      degree: "Higher Secondary (Class 12th) - PCM",
      duration: "2020 - 2021",
      description:
        "Completed Higher Secondary with 80% marks. Focused on Physics, Chemistry, and Mathematics. Participated in science exhibitions and technical quizzes.",
      side: "right",
      marksheet: my10_and_12th_marksheet,
    },
    {
      id: 3,
      school: "Jay Bharat H.S. School Kokta, Anand Nagar, Bhopal",
      degree: "Secondary School (Class 10th)",
      duration: "2018 - 2019",
      description:
        "Achieved excellent academic performance and actively participated in cultural and science events. Built a strong foundation in mathematics and computer science.",
      side: "left",
      marksheet: my10_and_12th_marksheet,
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      {/* =============================
          ANIMATED GRID BACKGROUND
        ============================= */}
      <div className="absolute inset-0 edu-animate-grid z-0"></div>

      {/* =============================
          FLOATING YELLOW SHAPES
        ============================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Decorative Shapes */}
        <div className="edu-animate-shape absolute left-[10%] top-[20%]" style={{ animationDelay: "0s" }}>
          <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
        </div>
        <div className="edu-animate-shape absolute left-[70%] top-[30%]" style={{ animationDelay: "1s" }}>
          <div className="w-5 h-5 bg-yellow-400"></div>
        </div>
        <div className="edu-animate-shape absolute left-[40%] top-[60%]" style={{ animationDelay: "2s" }}>
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "12px solid transparent",
              borderRight: "12px solid transparent",
              borderBottom: "20px solid #facc15",
            }}
          ></div>
        </div>
        <div className="edu-animate-shape absolute left-[80%] top-[15%]" style={{ animationDelay: "0.5s" }}>
          <div style={{ width: "22px", height: "22px", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "4px",
                background: "#facc15",
                transform: "rotate(45deg)",
                borderRadius: "2px",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "4px",
                background: "#facc15",
                transform: "rotate(-45deg)",
                borderRadius: "2px",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* =============================
          SECTION HEADING
        ============================= */}
      <div className="relative z-20 text-center mb-10 sm:mb-12 md:mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-400 mb-3 sm:mb-4">
          My Education
        </h2>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
          A glimpse of my academic journey and the milestones that shaped my technical foundation.
        </p>
      </div>

      {/* VERTICAL CENTER LINE */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 sm:w-1 bg-yellow-400/80 z-10"></div>

      {/* TIMELINE ITEMS */}
      <div className="relative z-20 space-y-8 sm:space-y-12">
        {educationData.map((edu) => (
          <div key={edu.id} className="relative">
            {/* Timeline Node */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
              <div className="w-4 h-4 sm:w-6 sm:h-6 bg-yellow-400 rounded-full border-2 sm:border-4 border-black shadow-lg shadow-yellow-400/40 animate-pulse"></div>
            </div>

            {/* Education Card */}
            <div
              className={`flex items-center ${
                edu.side === "left"
                  ? "justify-start pr-6 sm:pr-10 md:pr-16"
                  : "justify-end pl-6 sm:pl-10 md:pl-16"
              }`}
            >
              <div
                className={`w-full md:w-5/12 bg-[#181818] border border-yellow-500/40 rounded-xl p-4 sm:p-5 md:p-6 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20 ${
                  edu.side === "left" ? "text-right" : "text-left"
                }`}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400 mb-2">
                  {edu.school}
                </h3>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2">
                  {edu.degree}
                </h4>
                <p
                  className={`text-xs sm:text-sm text-yellow-300 mb-3 sm:mb-4 flex items-center gap-2 ${
                    edu.side === "left" ? "justify-end" : "justify-start"
                  }`}
                >
                  <span className="text-yellow-400">🎓</span>
                  {edu.duration}
                </p>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3 sm:mb-4">
                  {edu.description}
                </p>

                {/* Download Marksheet Button */}
                <div
                  className={`${
                    edu.side === "left" ? "justify-end" : "justify-start"
                  } flex`}
                >
                  <a
                    href={edu.marksheet}
                    download
                    className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm md:text-base font-medium transition duration-300"
                  >
                    Download Marksheet
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
