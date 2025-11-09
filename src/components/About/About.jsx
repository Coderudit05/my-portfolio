import React from "react";
import { TypeAnimation } from "react-type-animation";
import myPicture from "../../assets/MyPicture.png";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <section className="relative p-4 sm:p-8 md:p-14 flex items-center justify-center overflow-hidden min-h-screen">
      {/* Background Gradient for Section */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 animate-gradient-xy"></div>

      <div className="relative max-w-8xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center h-full z-10">
        {/* Left Side - Text Content */}
        <div className="text-left animate-[fadeInLeft_1s_ease-out]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white animate-[fadeInDown_0.8s_ease-out]">
            <TypeAnimation
              sequence={[
                "Hi, I'm Udit Namdev",
                2000,
                "Hi, I'm a Frontend Dev",
                2000,
                "Hi, I'm a Creator",
                2000,
                "Hi, I'm a Trainer",
                2000,
                "Hi, I'm AI Enthusiast",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              cursor={true}
              wrapper="span"
              className="text-blue-400"
            />
          </h1>

          <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed animate-[fadeInUp_1s_ease-out_0.3s_backwards]">
            I'm a passionate developer with expertise in React, Node.js, and
            modern web technologies. I love creating innovative solutions and
            bringing ideas to life through code.
          </p>
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed animate-[fadeInUp_1s_ease-out_0.5s_backwards]">
            With a background in full-stack development, I focus on building
            user-friendly applications that solve real-world problems. When I'm
            not coding, you'll find me exploring new technologies or
            contributing to open-source projects.
          </p>

          <div className="flex gap-3 sm:gap-4 flex-wrap animate-[fadeInUp_1s_ease-out_0.7s_backwards]">
            {/* Navigate to Experience Section */}
            <NavLink
              to="/experience"
              className="bg-blue-500 hover:bg-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition duration-300"
            >
              View My Work
            </NavLink>

            {/* Download Resume Button */}
            <a
              href="/UditNamdev_Resume.pdf"
              download
              className="border border-linear-to-r from-blue-400 to-purple-500 text-blue-400 hover:text-white hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-500 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition duration-300"
            >
              Get My Resume
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 sm:gap-6 mt-6 sm:mt-8 animate-[fadeInUp_1s_ease-out_0.9s_backwards]">
            {/* LinkedIn */}
            <a
              href="https://shorturl.at/K7OlT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition duration-300"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path d="M20.452 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.356V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Coderudit05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition duration-300"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386C24 5.373 18.627 0 12 0z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://shorturl.at/4PGO0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition duration-300"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 2.75a1 1 0 110 2 1 1 0 010-2zm-4.5 1.25a5.75 5.75 0 110 11.5 5.75 5.75 0 010-11.5zm0 1.5a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center items-center animate-[fadeInRight_1s_ease-out]">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 group">
            {/* ✅ Only Image (No Animated Background or Border) */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden p-1 group-hover:scale-105 transition-transform duration-500">
              <img
                src={myPicture}
                alt="Udit Namdev"
                className="w-full h-full rounded-xl object-cover group-hover:brightness-110 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
