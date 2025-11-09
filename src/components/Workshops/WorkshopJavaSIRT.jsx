import React from "react";
import img1 from './workshops img/SIRT Java/img1.jpg'

function WorkshopJavaSIRT() {
  const images = [img1];

  return (
    <section className="min-h-screen bg-[#050414] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-center">
          Java Fundamentals Workshop – SIRT College, Bhopal
        </h1>

        {/* Workshop Details */}
        <div className="bg-[#0a0e27] border border-blue-400 rounded-xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4 sm:mb-6">Workshop Overview</h2>
          
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-300 leading-relaxed">
            <p>
              A comprehensive Java Fundamentals workshop conducted at <span className="text-blue-400 font-semibold">SIRT College, Bhopal</span> in collaboration with <span className="text-blue-400 font-semibold">Codewave Solution</span>, alongside <span className="text-blue-400 font-semibold">Aman Pandey Sir</span>.
            </p>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">📊 Workshop Details:</h3>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                <li><span className="text-blue-400 font-semibold">Topic:</span> Java Programming Fundamentals</li>
                <li><span className="text-blue-400 font-semibold">Location:</span> SIRT College, Bhopal</li>
                <li><span className="text-blue-400 font-semibold">Focus:</span> Core Java Concepts and Basics</li>
                <li><span className="text-blue-400 font-semibold">Instructors:</span> Aman Pandey Sir & Udit Namdev</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">🎯 My Role & Responsibilities:</h3>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                <li>Assisted <span className="text-blue-400 font-semibold">Aman Pandey Sir</span> in delivering comprehensive Java sessions</li>
                <li>Helped students understand basic Java programming concepts</li>
                <li>Conducted doubt-clearing sessions for complex topics</li>
                <li>Provided one-on-one guidance to struggling students</li>
                <li>Demonstrated practical coding examples and best practices</li>
                <li>Ensured every student grasped fundamental concepts before moving forward</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">💡 Topics Covered:</h3>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                <li>Introduction to Java and JDK setup</li>
                <li>Basic syntax, variables, and data types</li>
                <li>Control structures (if-else, loops, switch)</li>
                <li>Object-Oriented Programming (OOP) basics</li>
                <li>Classes, objects, and methods</li>
                <li>Arrays and string manipulation</li>
                <li>Exception handling fundamentals</li>
                <li>Hands-on coding exercises and practice problems</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">🚀 Key Highlights:</h3>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                <li>Interactive learning environment with hands-on practice</li>
                <li>Real-time problem solving and code debugging</li>
                <li>Personalized attention to each student's learning pace</li>
                <li>Practical examples relating to real-world scenarios</li>
                <li>Building strong foundation for advanced Java concepts</li>
                <li>Encouraging students to ask questions and clarify doubts</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">📈 Outcomes:</h3>
              <p>
                Students gained a solid understanding of Java fundamentals and developed confidence in writing basic Java programs. 
                The workshop successfully bridged the gap between theoretical knowledge and practical implementation, 
                preparing students for more advanced Java topics and real-world programming challenges.
              </p>
            </div>

            <p className="text-blue-400 italic border-l-4 border-blue-400 pl-4 mt-6">
              "Working alongside Aman Sir at SIRT College was an enriching experience. Together, we ensured that every student 
              understood the basics of Java programming, creating a strong foundation for their coding journey."
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Workshop Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              <img
                src={src}
                alt={`Workshop ${index + 1}`}
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkshopJavaSIRT;
