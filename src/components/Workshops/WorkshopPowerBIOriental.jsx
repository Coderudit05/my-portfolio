import React from "react";
import img1 from './workshops img/oriental/img1.jpg';
import img2 from './workshops img/oriental/img2.jpg';
import img3 from './workshops img/oriental/img3.jpg';
import img4 from './workshops img/oriental/img4.jpg';
import img5 from './workshops img/oriental/img5.jpg';
import img6 from './workshops img/oriental/img6.jpg';
import img7 from './workshops img/oriental/img7.jpg';

function WorkshopPowerBIOriental() {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <section className="min-h-screen bg-[#050414] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-center">
          Power BI Workshop – Oriental College, Bhopal
        </h1>

        {/* Workshop Details */}
        <div className="bg-[#0a0e27] border border-blue-400 rounded-xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4 sm:mb-6">Workshop Overview</h2>
          
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-300 leading-relaxed">
            <p>
              This comprehensive Power BI workshop was conducted at <span className="text-blue-400 font-semibold">Oriental Institute of Science & Technology (OIST)</span> in collaboration with <span className="text-blue-400 font-semibold">Codewave Solution</span>.
            </p>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">📊 Workshop Details:</h3>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                <li><span className="text-blue-400 font-semibold">Target Audience:</span> 2nd Year Data Science Students</li>
                <li><span className="text-blue-400 font-semibold">Duration:</span> 6 Days Intensive Workshop</li>
                <li><span className="text-blue-400 font-semibold">Batches:</span> 3 Different Batches</li>
                <li><span className="text-blue-400 font-semibold">Location:</span> Oriental Institute of Science & Technology, Bhopal</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">💡 Topics Covered:</h3>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                <li>Basic fundamentals of Power BI and its ecosystem</li>
                <li>Data import and transformation techniques</li>
                <li>Creating interactive visualizations and reports</li>
                <li>DAX (Data Analysis Expressions) basics</li>
                <li>Building relationships between tables</li>
                <li>Hands-on project: <span className="text-green-400 font-semibold">Sales Analysis Dashboard</span></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">🎯 Key Highlights:</h3>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                <li>Discussed fundamental concepts of Business Intelligence</li>
                <li>Guided students through creating a complete Sales Analysis Dashboard</li>
                <li>Provided hands-on practice with real-world datasets</li>
                <li>Helped students understand data storytelling through visualizations</li>
                <li>Conducted sessions across 3 batches ensuring personalized attention</li>
                <li>Empowered students to make data-driven decisions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">🚀 Outcomes:</h3>
              <p>
                Students gained practical knowledge of Power BI and successfully created their own Sales Analysis Dashboards. 
                They learned how to transform raw data into meaningful insights and create professional-grade reports that can 
                be used in real business scenarios.
              </p>
            </div>

            <p className="text-blue-400 italic border-l-4 border-blue-400 pl-4 mt-6">
              "This workshop was conducted in collaboration with Codewave Solution, alongside Aman Pandey Sir (Founder & CEO), 
              helping students bridge the gap between academic learning and industry requirements."
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

export default WorkshopPowerBIOriental;
