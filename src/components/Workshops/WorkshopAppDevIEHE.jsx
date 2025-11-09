import React from "react";
import img1 from './workshops img/IEHE img/img1.jpg';
import img2 from './workshops img/IEHE img/img2.jpg';
import img3 from './workshops img/IEHE img/img3.jpg';
import img4 from './workshops img/IEHE img/img4.jpg';
import img5 from './workshops img/IEHE img/img5.jpg';
import img6 from './workshops img/IEHE img/img6.jpg';
import img7 from './workshops img/IEHE img/img7.jpg';
import img8 from './workshops img/IEHE img/img8.jpg';
import img9 from './workshops img/IEHE img/img9.jpg';
import img10 from './workshops img/IEHE img/img10.jpg';

function WorkshopAppDevIEHE() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  return (
    <section className="min-h-screen bg-[#050414] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-center">
          App Development with Python Workshop – Excellence College (IEHE), Bhopal
        </h1>

        {/* Workshop Details */}
        <div className="bg-[#0a0e27] border border-blue-400 rounded-xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4 sm:mb-6">Workshop Overview</h2>
          
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-300 leading-relaxed">
            <p>
              An intensive 10-day App Development workshop conducted at <span className="text-blue-400 font-semibold">Excellence College (IEHE), Bhopal</span> in collaboration with <span className="text-blue-400 font-semibold">Codewave Solution</span>, alongside <span className="text-blue-400 font-semibold">Aman Pandey Sir</span>.
            </p>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">📊 Workshop Details:</h3>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                <li><span className="text-blue-400 font-semibold">Duration:</span> 10 Days Intensive Bootcamp</li>
                <li><span className="text-blue-400 font-semibold">Technology Stack:</span> React (Frontend) + Flask (Backend)</li>
                <li><span className="text-blue-400 font-semibold">Location:</span> Excellence College (IEHE), Bhopal</li>
                <li><span className="text-blue-400 font-semibold">Projects Built:</span> 4 Full-Stack Applications</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">🎯 My Responsibilities:</h3>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                <li>Designed and developed frontend interfaces using <span className="text-cyan-400 font-semibold">React</span></li>
                <li>Created responsive and user-friendly UI components</li>
                <li>Implemented modern design patterns and best practices</li>
                <li>Collaborated with Aman Sir who connected frontends with <span className="text-green-400 font-semibold">Flask</span> backend</li>
                <li>Guided students in frontend development techniques</li>
                <li>Demonstrated integration between React and Flask</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">💻 Projects Developed:</h3>
              <div className="space-y-3 ml-2 sm:ml-4">
                <div className="bg-[#050414] p-3 sm:p-4 rounded-lg border border-gray-700">
                  <h4 className="text-lg font-semibold text-green-400 mb-2">1. Student Management System</h4>
                  <p className="text-sm">Complete system for managing student records, attendance, and academic performance.</p>
                </div>
                <div className="bg-[#050414] p-3 sm:p-4 rounded-lg border border-gray-700">
                  <h4 className="text-lg font-semibold text-green-400 mb-2">2. Library Management System</h4>
                  <p className="text-sm">Comprehensive application for managing books, members, and library operations.</p>
                </div>
                <div className="bg-[#050414] p-3 sm:p-4 rounded-lg border border-gray-700">
                  <h4 className="text-lg font-semibold text-green-400 mb-2">3. Event Management System</h4>
                  <p className="text-sm">Platform for organizing, managing, and tracking college events and registrations.</p>
                </div>
                <div className="bg-[#050414] p-3 sm:p-4 rounded-lg border border-gray-700">
                  <h4 className="text-lg font-semibold text-green-400 mb-2">4. Student Activity Management System</h4>
                  <p className="text-sm">System for tracking and managing extracurricular activities and student participation.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">🤖 AI-Powered Learning:</h3>
              <p>
                During this 10-day workshop, I learned and demonstrated how to <span className="text-purple-400 font-semibold">10x our productivity</span> using AI tools:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4 mt-2">
                <li>Leveraging AI assistants to write better code faster</li>
                <li>Using AI for debugging and code optimization</li>
                <li>Reducing repetitive work with AI-powered code generation</li>
                <li>Getting instant solutions to coding challenges</li>
                <li>Learning new concepts and patterns through AI guidance</li>
                <li>Improving code quality with AI suggestions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">🚀 Key Outcomes:</h3>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                <li>Students built 4 complete full-stack applications</li>
                <li>Gained hands-on experience with React and Flask integration</li>
                <li>Learned modern development workflows and best practices</li>
                <li>Understood the power of AI tools in accelerating development</li>
                <li>Developed industry-ready project portfolios</li>
              </ul>
            </div>

            <p className="text-blue-400 italic border-l-4 border-blue-400 pl-4 mt-6">
              "This intensive workshop showcased the perfect blend of frontend and backend development, while emphasizing 
              how AI tools can dramatically enhance productivity and learning outcomes."
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

export default WorkshopAppDevIEHE;
