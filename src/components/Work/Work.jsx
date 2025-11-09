import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

function Work() {
  // ========================================
  // PROJECTS DATA
  // ========================================
  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce web application with user authentication, product catalog, shopping cart, and payment integration.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://demo-ecommerce.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      techStack: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      github: "https://github.com/yourusername/task-manager",
      demo: "https://demo-taskapp.com"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A beautiful weather application that displays current weather, forecasts, and interactive maps using third-party APIs.",
      techStack: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
      github: "https://github.com/yourusername/weather-app",
      demo: "https://demo-weather.com"
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media metrics with interactive charts, data visualization, and performance tracking.",
      techStack: ["React", "D3.js", "Express", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      github: "https://github.com/yourusername/social-dashboard",
      demo: "https://demo-social.com"
    },
    {
      id: 5,
      title: "AI Chatbot",
      description: "An intelligent chatbot powered by AI that can answer questions, provide recommendations, and learn from conversations.",
      techStack: ["React", "Python", "OpenAI API", "Flask"],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
      github: "https://github.com/yourusername/ai-chatbot",
      demo: "https://demo-chatbot.com"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website with animations, dark mode, and smooth scrolling sections.",
      techStack: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      github: "https://github.com/yourusername/portfolio",
      demo: "https://yourportfolio.com"
    }
  ];

  return (
    <section className="min-h-screen bg-[#0a0520] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      {/* ========================================
          ANIMATED HEXAGON BACKGROUND
          ======================================== */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Floating Hexagons */}
        {[...Array(8)].map((_, i) => {
          const left = (i * 15 + 5) % 90;
          const top = ((i * 23) % 80) + 10;
          const size = Math.random() * 40 + 30;
          const delay = (i * 1.2) + 's';
          return (
            <div
              key={`hex-${i}`}
              className="project-animate-hexagon absolute"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: delay
              }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon
                  points="50 1 95 25 95 75 50 99 5 75 5 25"
                  fill="none"
                  stroke="rgba(168, 85, 247, 0.3)"
                  strokeWidth="2"
                />
              </svg>
            </div>
          );
        })}

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => {
          const left = Math.random() * 95 + 2;
          const top = Math.random() * 95 + 2;
          const size = Math.random() * 6 + 3;
          const delay = (i * 0.5) + 's';
          return (
            <div
              key={`particle-${i}`}
              className="project-animate-particle absolute rounded-full bg-purple-400/40"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: delay
              }}
            />
          );
        })}
      </div>

      {/* ========================================
          SECTION HEADING
          ======================================== */}
      <div className="relative z-10 text-center mb-10 sm:mb-12 md:mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-purple-400 mb-3 sm:mb-4">
          My Projects
        </h2>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
          Here are some of my recent projects that showcase my skills and creativity
        </p>
      </div>

      {/* ========================================
          PROJECTS GRID
          ======================================== */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-[#1a1a2e] rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-400 transition-all duration-300 group hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#1a1a2e] to-transparent opacity-60"></div>
            </div>

            {/* Project Content */}
            <div className="p-4 sm:p-5 md:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-purple-400 mb-2 sm:mb-3">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 sm:gap-4 flex-wrap">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500/20 hover:bg-purple-500/40 text-purple-300 rounded-lg transition-all duration-300 border border-purple-500/30 hover:border-purple-400"
                >
                  <FaGithub className="text-sm sm:text-base" />
                  <span className="text-xs sm:text-sm font-semibold">Code</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-all duration-300 shadow-md shadow-purple-500/20"
                >
                  <FaExternalLinkAlt className="text-sm sm:text-base" />
                  <span className="text-xs sm:text-sm font-semibold">Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work
