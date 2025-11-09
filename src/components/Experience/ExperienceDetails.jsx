import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import cwsLogo from "./CWS Logo.jpg";
import ricrLogo from "./ricr.webp";

function ExperienceDetails() {
  const { id } = useParams();

  // Full data (same as your main experienceData)
  const experiences = {
    1: {
      company: "CodeWave Solution",
      logo: cwsLogo,
      role: "Instructor",
      duration: "Apr 2025 – Oct 2025 · 7 months",
      details: `
Promoted from Technical Assistant to Instructor at CodeWave Solution.

Key Responsibilities:

📚 Teaching & Mentoring:
• Conducting classes on Core Java and Python concepts
• Taking extra classes for students struggling with complex topics
• Providing personalized doubt-clearing sessions to ensure concept clarity
• Helping students understand fundamental and advanced programming concepts

💼 Project Guidance:
• Regularly conducting doubt session classes for hands-on learning
• Guiding students in creating and improving their resumes
• Mentoring students in developing small to medium-sized projects
• Teaching effective implementation strategies and best coding practices
• Demonstrating how to leverage AI tools for project ideation and development
• Helping students make their projects more innovative and effective

🎨 Frontend Development Focus:
• Major responsibility in creating frontend parts of projects
• Guiding students through modern frontend technologies and frameworks
• Teaching responsive design principles and UI/UX best practices
• Helping students build visually appealing and functional interfaces

🚀 Student Development:
• Focusing on making students industry-ready with practical skills
• Encouraging creative problem-solving using AI tools
• Building confidence in students through regular practice sessions
• Creating an engaging and supportive learning environment
      `,
    },
    2: {
      company: "CodeWave Solution",
      logo: cwsLogo,
      role: "Technical Assistant",
      duration: "Jan 2025 – Apr 2025 · 4 months",
      details: `
As a Technical Assistant at CodeWave Solution:

🎯 Core Responsibilities:

Interview Preparation & Assessment:
• Conducting mock interviews focused on Core Java
• Evaluating student performance in technical interviews
• Providing detailed ratings based on interview performance
• Offering constructive feedback to help improve interview skills
• Teaching students how to articulate answers effectively in front of interviewers

📊 Performance Analysis:
• Analyzing interview performance metrics and identifying weak areas
• Discussing improvement strategies with senior team members
• Creating personalized development plans for each student
• Tracking progress and suggesting targeted improvements
• Helping students understand what interviewers expect

💡 Doubt-Clearing Sessions:
• Taking regular doubt session classes on Core Java concepts
• Addressing student queries with detailed explanations
• Ensuring students have a strong foundation in programming fundamentals
• Creating a comfortable environment for students to ask questions

🤝 Collaboration:
• Working closely with seniors to enhance teaching methodologies
• Sharing insights on common student challenges
• Contributing to curriculum improvement based on student feedback
• Helping create a more effective learning ecosystem
      `,
    },
    3: {
      company: "RICR (Raj Institute of Coding and Robotics)",
      logo: ricrLogo,
      role: "Technical Content Writing Intern",
      duration: "May 2024 – Nov 2024 · 7 months",
      details: `
At RICR, I worked as a Technical Content Writing Intern with diverse responsibilities:

📝 Content Development & LMS Management:
• Working extensively with Learning Management System (LMS)
• Researching and creating comprehensive MCQs for multiple technologies
• Developing high-quality content for Core Java programming
• Creating structured learning materials for JavaScript fundamentals
• Designing practice questions for HTML, CSS, and React

💻 Technology Coverage:
• Core Java: Concepts, syntax, OOP principles, and best practices
• JavaScript: ES6+ features, DOM manipulation, and async programming
• HTML & CSS: Semantic HTML, responsive design, and modern CSS techniques
• React: Component-based architecture, hooks, and state management
• Providing MCQs covering beginner to advanced level topics

👨‍🏫 Teaching & Practice Sessions:
• Conducting doubt session classes at RICR
• Taking practice sessions to reinforce learning
• Helping students clarify concepts through interactive sessions
• Addressing specific student queries and challenges
• Creating an engaging learning environment

🎓 Educational Impact:
• Developed structured question banks for effective assessment
• Enhanced course materials based on student feedback
• Contributed to improved learning outcomes
• Strengthened students' understanding of web technologies and programming
• Built strong technical writing and communication skills
      `,
    },
  };

  const exp = experiences[id];

  if (!exp)
    return (
      <p className="text-center text-white py-12 sm:py-16 md:py-20 text-sm sm:text-base">
        Experience not found.
      </p>
    );

  return (
    <section className="min-h-screen bg-[#050414] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/experience"
          className="flex items-center text-blue-400 hover:text-white mb-6 sm:mb-8 transition text-sm sm:text-base"
        >
          <FaArrowLeft className="mr-2 text-sm sm:text-base" /> Back to
          Experience
        </Link>

        <div className="bg-[#0a0e27] border border-blue-400 rounded-xl p-4 sm:p-6 md:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <img
              src={exp.logo}
              alt={exp.company}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border border-blue-500"
            />
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-400">
                {exp.company}
              </h2>
              <h3 className="text-lg sm:text-xl text-white">{exp.role}</h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                {exp.duration}
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed whitespace-pre-line">
            {exp.details}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ExperienceDetails;
