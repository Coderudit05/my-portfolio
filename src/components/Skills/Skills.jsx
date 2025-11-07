import React from "react";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { RiPerplexityFill } from "react-icons/ri";
import { SiGithubcopilot } from "react-icons/si";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaJava,
  FaFigma,
  FaGithub,
  FaGit,
  FaSearchengin,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiGreensock,
  SiSqlite,
  SiEclipseide,
  SiNetlify,
  SiVercel,
  SiOpenai,
  SiClaude,
  SiCanva,
} from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";

function Skills() {
  const skillsData = {
    frontend: [
      {
        name: "HTML", // Skill ka naam
        icon: <FaHtml5 className="text-orange-500" />, // Icon with color
      },
      {
        name: "CSS",
        icon: <FaCss3Alt className="text-blue-500" />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      {
        name: "React",
        icon: <FaReact className="text-cyan-400" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-300" />,
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap className="text-purple-500" />,
      },
      {
        name: "GSAP",
        icon: <SiGreensock className="text-green-500" />,
      },
      {
        name: "Locomotive",
        icon: <span className="text-2xl">🚂</span>, // Emoji as icon (agar react-icon nahi hai)
      },
    ],

    // LANGUAGES CATEGORY
    // Programming languages jo tum jaante ho
    languages: [
      {
        name: "Java",
        icon: <FaJava className="text-orange-600" />,
      },
      {
        name: "Python",
        icon: <FaPython className="text-blue-400" />,
      },
      {
        name: "SQL",
        icon: <SiMysql className="text-blue-600" />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
    ],

    // TOOLS CATEGORY
    // Development tools jo tum use karte ho
    tools: [
      {
        name: "Git",
        icon: <FaGitAlt className="text-red-600" />,
      },
      {
        name: "GitHub",
        icon: <FaGithub className="text-gray-400" />,
      },
      {
        name: "VS Code",
        icon: <VscVscode className="text-2xl text-blue-500" />,
      },
      {
        name: "Eclipse",
        icon: <SiEclipseide className="text-purple-600" />,
      },
      {
        name: "Notepad++",
        icon: <span className="text-2xl">📝</span>,
      },
      {
        name: "Netlify",
        icon: <SiNetlify className="text-cyan-500" />,
      },
      {
        name: "Figma",
        icon: <FaFigma className="text-purple-400" />,
      },
      {
        name: "Vercel",
        icon: <SiVercel className="text-gray-300" />,
      },
    ],

    // AI TOOLS CATEGORY
    // AI tools jo tum use karte ho coding mein
    aiTools: [
      {
        name: "ChatGPT",
        icon: <SiOpenai className="text-green-500" />,
      },
      {
        name: "GitHub Copilot",
        icon: <SiGithubcopilot className="text-2xl" />,
      },
      {
        name: "Prompt Engineering",
        icon: <span className="text-2xl">🎯</span>,
      },
      {
        name: "Claude AI",
        icon: <SiClaude className="text-orange-500" />,
      },
      {
        name: "Deepseek",
        icon: <TbBrandOpenai className="text-blue-500" />,
      },
      {
        name: "Perplexity",
        icon: <RiPerplexityFill className="text-purple-500" />,
      },
      {
        name: "Canva",
        icon: <SiCanva className="text-cyan-400" />,
      },
    ],
  };

  const SkillCard = ({ title, skills }) => {
    return (
      <div className="bg-[#0a0e27] border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300">
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <div className="grid grid-cols-2 gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-2 bg-[#050414] rounded-lg hover:bg-[#1a1f3a] hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="text-sm text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="relative min-h-screen bg-[#050414] text-white py-20 px-8 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 animate-gradient-xy"></div>

      {/* ========================================
          ANIMATED GRID BACKGROUND EFFECT
          ======================================== */}
      {/* Grid pattern with glowing animated boxes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid lines - horizontal and vertical */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>

        {/* Animated glowing grid boxes */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute border-2 animate-grid-glow"
            style={{
              width: "60px",
              height: "60px",
              left: `${(i % 5) * 20}%`,
              top: `${Math.floor(i / 5) * 20}%`,
              borderColor:
                i % 3 === 0
                  ? "rgba(59, 130, 246, 0.4)"
                  : i % 3 === 1
                  ? "rgba(168, 85, 247, 0.4)"
                  : "rgba(34, 211, 238, 0.4)",
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          ></div>
        ))}

        {/* Plus sign decorations at grid intersections */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`plus-${i}`}
            className="absolute text-blue-400/50 text-xl animate-pulse-glow"
            style={{
              left: `${10 + (i % 5) * 20}%`,
              top: `${10 + Math.floor(i / 5) * 25}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            +
          </div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-3">SKILLS</h1>
          <div className="w-20 h-1 bg-linear-to-r from-blue-400 to-blue-600 rounded mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg md:text-xl">
            Explore the technologies, tools and AI-driven solutions I use to
            build performant, engaging and future-ready web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCard
            title="Frontend Development"
            skills={skillsData.frontend}
          />
          <SkillCard
            title="Programming Languages"
            skills={skillsData.languages}
          />
          <SkillCard title="Development Tools" skills={skillsData.tools} />
          <SkillCard title="AI & Automation" skills={skillsData.aiTools} />
        </div>
      </div>
    </section>
  );
}

export default Skills;
