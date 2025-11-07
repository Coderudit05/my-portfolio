import React from "react";
import oriental1 from './workshops img/oriental1.jpg';
import oriental2 from './workshops img/oriental2.jpg';
import oriental3 from './workshops img/oriental3.jpg';
import oriental4 from './workshops img/oriental4.jpg';
import oriental5 from './Workshops img/oriental5.jpg';
import oriental6 from './workshops img/oriental6.jpg';

function WorkshopCWS() {
  const images = [oriental1, oriental2, oriental3, oriental4, oriental5, oriental6];

  return (
    <section className="min-h-screen bg-[#050414] text-white py-20 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold mb-10 text-center">
          Doubt-Clearing Session – Codewave Solution, Bhopal
        </h1>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              <img
                src={src}
                alt={`Session ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkshopCWS;
