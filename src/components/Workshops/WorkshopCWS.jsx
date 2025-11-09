import React from "react";
import img1 from './workshops img/practice session cws/img1.jpg';
import img2 from './workshops img/practice session cws/img2.jpg';
import img3 from './workshops img/practice session cws/img3.jpg';
import img4 from './workshops img/practice session cws/img4.jpg';



function WorkshopCWS() {
  const images = [img1, img2, img3, img4];

  return (
    <section className="min-h-screen bg-[#050414] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-center">
          Practice Sessions & Mock Interviews – Codewave Solution, Bhopal
        </h1>

        {/* Workshop Details */}
        <div className="bg-[#0a0e27] border border-blue-400 rounded-xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4 sm:mb-6">Session Overview</h2>
          
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-300 leading-relaxed">
            <p>
              Regular practice sessions and mock interviews conducted at <span className="text-blue-400 font-semibold">Codewave Solution, Bhopal</span> to prepare students for real-world technical interviews and enhance their coding skills.
            </p>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">📊 Session Details:</h3>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                <li><span className="text-blue-400 font-semibold">Location:</span> Codewave Solution, Bhopal</li>
                <li><span className="text-blue-400 font-semibold">Type:</span> Regular Practice Sessions & Mock Interviews</li>
                <li><span className="text-blue-400 font-semibold">Frequency:</span> Multiple sessions conducted regularly</li>
                <li><span className="text-blue-400 font-semibold">Focus:</span> Practical coding, problem-solving, and interview preparation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">🎯 My Responsibilities:</h3>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                <li>Conducted multiple <span className="text-green-400 font-semibold">practice sessions</span> for students at Codewave Solution</li>
                <li>Organized and executed <span className="text-purple-400 font-semibold">mock interviews</span> to simulate real interview environments</li>
                <li>Provided detailed feedback on interview performance and coding skills</li>
                <li>Helped students improve their problem-solving approach</li>
                <li>Guided students on how to articulate their thought process during interviews</li>
                <li>Conducted code review sessions to improve coding standards</li>
                <li>Shared interview tips and best practices for technical rounds</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">💡 Practice Session Activities:</h3>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                <li>Live coding challenges and problem-solving exercises</li>
                <li>Data Structures and Algorithms practice questions</li>
                <li>Core Java and Python concept revision</li>
                <li>Web development practical sessions (HTML, CSS, JavaScript, React)</li>
                <li>Debugging and code optimization techniques</li>
                <li>Project code reviews and improvement suggestions</li>
                <li>Doubt-clearing sessions on complex topics</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">🎤 Mock Interview Format:</h3>
              <div className="space-y-3 ml-2 sm:ml-4">
                <div className="bg-[#050414] p-3 sm:p-4 rounded-lg border border-gray-700">
                  <h4 className="text-lg font-semibold text-green-400 mb-2">Round 1: Technical Screening</h4>
                  <p className="text-sm">Core programming concepts, DSA questions, and basic problem-solving</p>
                </div>
                <div className="bg-[#050414] p-3 sm:p-4 rounded-lg border border-gray-700">
                  <h4 className="text-lg font-semibold text-green-400 mb-2">Round 2: Coding Challenge</h4>
                  <p className="text-sm">Live coding exercises with time constraints to test speed and accuracy</p>
                </div>
                <div className="bg-[#050414] p-3 sm:p-4 rounded-lg border border-gray-700">
                  <h4 className="text-lg font-semibold text-green-400 mb-2">Round 3: Project Discussion</h4>
                  <p className="text-sm">Detailed discussion about their projects, technologies used, and challenges faced</p>
                </div>
                <div className="bg-[#050414] p-3 sm:p-4 rounded-lg border border-gray-700">
                  <h4 className="text-lg font-semibold text-green-400 mb-2">Feedback Session</h4>
                  <p className="text-sm">Comprehensive feedback with ratings and personalized improvement areas</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">📈 Rating & Evaluation:</h3>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                <li>Evaluated students on technical knowledge, problem-solving ability, and communication</li>
                <li>Provided ratings on a scale to benchmark their performance</li>
                <li>Identified strengths and areas needing improvement</li>
                <li>Gave actionable suggestions for enhancement</li>
                <li>Discussed performance with seniors to create improvement plans</li>
                <li>Tracked progress through multiple mock interview sessions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">🚀 Key Highlights:</h3>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
                <li>Regular sessions helping students build confidence and consistency</li>
                <li>Real interview environment simulation to reduce anxiety</li>
                <li>Personalized feedback helping students target weak areas</li>
                <li>Focus on both technical and soft skills development</li>
                <li>Collaborative approach with senior team members for holistic improvement</li>
                <li>Building a supportive learning community at Codewave Solution</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">🌟 Impact & Outcomes:</h3>
              <p>
                Through regular practice sessions and mock interviews, students showed remarkable improvement in their 
                technical skills and interview confidence. Many students successfully cleared real interviews after 
                participating in these sessions. The continuous feedback loop and collaborative improvement approach 
                created a strong learning ecosystem at Codewave Solution.
              </p>
            </div>

            <p className="text-blue-400 italic border-l-4 border-blue-400 pl-4 mt-6">
              "Conducting practice sessions and mock interviews at Codewave Solution has been incredibly rewarding. 
              Seeing students grow from nervous beginners to confident developers ready to face real-world challenges 
              has been one of the most fulfilling aspects of my role."
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Session Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              <img
                src={src}
                alt={`Session ${index + 1}`}
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkshopCWS;
