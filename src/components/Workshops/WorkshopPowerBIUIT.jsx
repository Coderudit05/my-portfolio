import React from "react";
import img1 from './workshops img/RGPV/img1.jpg';
import img2 from './workshops img/RGPV/img2.jpg';
import img3 from './workshops img/RGPV/img3.jpg';

function WorkshopPowerBIUIT() {
  const images = [img1, img2, img3];

  return (
    <section className="min-h-screen bg-[#050414] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-center">
          Power BI Workshop – UIT-RGPV, Bhopal
        </h1>

        {/* Workshop Details */}
        <div className="bg-[#0a0e27] border border-blue-400 rounded-xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4 sm:mb-6">Workshop Overview</h2>
          
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-300 leading-relaxed">
            <p>
              A comprehensive Power BI workshop conducted at <span className="text-blue-400 font-semibold">UIT-RGPV (University Institute of Technology, RGPV), Bhopal</span> in collaboration with <span className="text-blue-400 font-semibold">Codewave Solution</span>.
            </p>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">📊 Workshop Details:</h3>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                <li><span className="text-blue-400 font-semibold">Location:</span> University Institute of Technology, RGPV, Bhopal</li>
                <li><span className="text-blue-400 font-semibold">Main Trainer:</span> Aman Pandey Sir (Founder & CEO, Codewave Solution)</li>
                <li><span className="text-blue-400 font-semibold">My Role:</span> Assistant & Student Support</li>
                <li><span className="text-blue-400 font-semibold">Focus:</span> Power BI Fundamentals and Dashboard Creation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">🎯 My Responsibilities:</h3>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                <li>Visited UIT-RGPV with <span className="text-blue-400 font-semibold">Aman Pandey Sir</span> as the main trainer</li>
                <li>Assisted students in understanding Power BI concepts and features</li>
                <li>Provided one-on-one support during hands-on sessions</li>
                <li>Helped students troubleshoot technical issues</li>
                <li>Guided students through data visualization exercises</li>
                <li>Ensured smooth execution of practical demonstrations</li>
                <li>Clarified doubts and explained complex concepts in simpler terms</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">💡 Workshop Content:</h3>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                <li>Introduction to Business Intelligence and Power BI</li>
                <li>Data import from various sources (Excel, CSV, databases)</li>
                <li>Data transformation and cleaning using Power Query</li>
                <li>Creating relationships between multiple tables</li>
                <li>Building interactive visualizations and charts</li>
                <li>Working with DAX (Data Analysis Expressions)</li>
                <li>Designing professional dashboards</li>
                <li>Creating a complete Sales Analysis Dashboard (Hands-on Project)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">🚀 Key Highlights:</h3>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                <li>Hands-on practice with real-world datasets</li>
                <li>Interactive learning environment with live demonstrations</li>
                <li>Personalized assistance for each student's queries</li>
                <li>Practical project: Building Sales Analysis Dashboard</li>
                <li>Understanding data storytelling through visualizations</li>
                <li>Learning industry-standard BI practices</li>
                <li>Exposure to enterprise-level data analytics tools</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">📈 Student Outcomes:</h3>
              <p>
                Students gained practical knowledge of Power BI and successfully created their own analytical dashboards. 
                They learned how to transform raw data into actionable insights, making them industry-ready for data analytics 
                and business intelligence roles. The workshop bridged the gap between theoretical knowledge and practical 
                implementation in the BI domain.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">🎓 University Experience:</h3>
              <p>
                Conducting this workshop at UIT-RGPV, one of the premier institutes under RGPV University, was an enriching 
                experience. The enthusiastic participation of students and their eagerness to learn made the workshop highly 
                interactive and successful.
              </p>
            </div>

            <p className="text-blue-400 italic border-l-4 border-blue-400 pl-4 mt-6">
              "Working alongside Aman Sir at UIT-RGPV was a great learning experience. Assisting students in understanding 
              Power BI and seeing them create their first dashboards was incredibly rewarding."
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

export default WorkshopPowerBIUIT;
