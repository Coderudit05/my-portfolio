import React from "react";

const TestimonialCard = ({ t }) => {
  const fallback = t.name ? t.name.charAt(0).toUpperCase() : "?";

  return (
    <div className="p-5 border rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between w-full h-[320px] overflow-hidden">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-2">
        {t.image ? (
          <img
            src={t.image}
            alt={t.name}
            className="w-14 h-14 object-cover rounded-full border"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-gray-200  flex items-center justify-center text-xl font-semibold text-gray-600">
            {fallback}
          </div>
        )}
        <div>
          <h3 className="font-semibold text-lg ">{t.name}</h3>
          <p className="text-sm text-gray-300">{t.college || "—"}</p>
        </div>
      </div>

      {/* LinkedIn */}
      <a
        href={t.linkedin || "#"}
        target="_blank"
        rel="noreferrer"
        className={`text-sm mt-1 inline-block ${
          t.linkedin ? "text-blue-600 hover:underline" : "text-gray-400"
        }`}
      >
        {t.linkedin ? "LinkedIn Profile" : "No LinkedIn"}
      </a>

      {/* Rating */}
      <p className="mt-2 text-yellow-500 font-medium text-sm">
        ⭐ {t.rating ?? "N/A"}/5
      </p>

      {/* Scrollable Feedback */}
      <div className="mt-3 flex-1 overflow-y-auto pr-1 custom-scrollbar">
        <p className="text-gray-200 text-sm leading-relaxed">
          {t.feedback || "No feedback provided."}
        </p>
      </div>
    </div>
  );
};

const TestimonialList = ({ testimonials }) => {
  return (
    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <TestimonialCard t={t} key={i} />
      ))}
    </div>
  );
};

export default TestimonialList;
