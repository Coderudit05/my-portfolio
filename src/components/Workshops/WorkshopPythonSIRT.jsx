import React from "react";
import img1 from './workshops img/SIRT Python/img1.jpg';
import img2 from './workshops img/SIRT Python/img2.jpg';
import img3 from './workshops img/SIRT Python/img3.jpg';
import img4 from './workshops img/SIRT Python/img4.jpg';
import img5 from './workshops img/SIRT Python/img5.jpg';

function WorkshopPythonSIRT() {
  const images = [img1, img2, img3, img4, img5];

  return (
    <section className="min-h-screen bg-[#050414] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-center">
          Python Fundamentals Workshop – SIRT College, Bhopal
        </h1>

        {/* Workshop Details */}
        <div className="bg-[#0a0e27] border border-blue-400 rounded-xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4 sm:mb-6">Workshop Overview</h2>
          
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-300 leading-relaxed">
            <p>
              An engaging Python Fundamentals workshop conducted at <span className="text-blue-400 font-semibold">SIRT College, Bhopal</span> in collaboration with <span className="text-blue-400 font-semibold">Codewave Solution</span>, alongside <span className="text-blue-400 font-semibold">Aman Pandey Sir</span>.
            </p>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">📊 Workshop Details:</h3>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                <li><span className="text-blue-400 font-semibold">Topic:</span> Python Programming Fundamentals</li>
                <li><span className="text-blue-400 font-semibold">Location:</span> SIRT College, Bhopal</li>
                <li><span className="text-blue-400 font-semibold">Focus:</span> Core Python Concepts and Practical Applications</li>
                <li><span className="text-blue-400 font-semibold">Instructors:</span> Aman Pandey Sir & Udit Namdev</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">🎯 My Role & Responsibilities:</h3>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                <li>Assisted <span className="text-blue-400 font-semibold">Aman Pandey Sir</span> in teaching Python fundamentals</li>
                <li>Helped students understand Python syntax and core concepts</li>
                <li>Conducted interactive coding sessions with live demonstrations</li>
                <li>Provided personalized support for students facing difficulties</li>
                <li>Explained complex topics with simple, relatable examples</li>
                <li>Ensured hands-on practice through coding exercises</li>
                <li>Created an encouraging environment for learning and experimentation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">💡 Topics Covered:</h3>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                <li>Introduction to Python and environment setup</li>
                <li>Variables, data types, and operators</li>
                <li>Control flow (if-else, loops)</li>
                <li>Functions and modules</li>
                <li>Lists, tuples, dictionaries, and sets</li>
                <li>String operations and manipulation</li>
                <li>File handling basics</li>
                <li>Error handling and debugging techniques</li>
                <li>Practical mini-projects and exercises</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">🚀 Key Highlights:</h3>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                <li>Beginner-friendly approach with step-by-step learning</li>
                <li>Real-world examples to make concepts relatable</li>
                <li>Live coding demonstrations and problem-solving</li>
                <li>Immediate doubt resolution and clarification</li>
                <li>Hands-on practice with guided exercises</li>
                <li>Building confidence in writing Python programs</li>
                <li>Encouraging students to explore Python's versatility</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">📈 Learning Outcomes:</h3>
              <p>
                Students developed a strong foundation in Python programming and gained the confidence to write their own programs. 
                The workshop emphasized practical coding skills, problem-solving abilities, and understanding how Python can be 
                applied in various domains like web development, data analysis, automation, and more.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">🌟 Why Python?</h3>
              <p>
                We highlighted Python's importance as one of the most popular programming languages, known for its:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4 mt-2">
                <li>Simple and readable syntax</li>
                <li>Versatility across multiple domains</li>
                <li>Rich library ecosystem</li>
                <li>Strong community support</li>
                <li>High demand in the job market</li>
              </ul>
            </div>

            <p className="text-blue-400 italic border-l-4 border-blue-400 pl-4 mt-6">
              "Python's simplicity makes it perfect for beginners. At SIRT College, alongside Aman Sir, we made sure students 
              not only learned the syntax but also understood how to think like programmers and solve real-world problems."
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

export default WorkshopPythonSIRT;
