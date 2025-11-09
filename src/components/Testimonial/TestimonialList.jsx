import React from "react";

const TestimonialCard = ({ t }) => {
  const fallback = t.name ? t.name.charAt(0).toUpperCase() : "?";

  return (
    <div className="p-4 sm:p-5 border rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between w-full h-80 sm:h-96 overflow-hidden">
      {/* Header Section */}
      <div className="flex items-center gap-2 sm:gap-3 mb-2">
        {t.image ? (
          <img
            src={t.image}
            alt={t.name}
            className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-full border"
          />
        ) : (
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-200 flex items-center justify-center text-lg sm:text-xl font-semibold text-gray-600">
            {fallback}
          </div>
        )}
        <div>
          <h3 className="font-semibold text-base sm:text-lg">{t.name}</h3>
          <p className="text-xs sm:text-sm text-gray-300">{t.college || "—"}</p>
        </div>
      </div>

      {/* Email */}
      {t.email && (
        <a
          href={`mailto:${t.email}`}
          className="text-xs sm:text-sm mt-1 inline-block text-gray-300 hover:text-blue-400 transition-colors duration-200"
        >
          📧 {t.email}
        </a>
      )}

      {/* LinkedIn */}
      <a
        href={t.linkedin || "#"}
        target="_blank"
        rel="noreferrer"
        className={`text-xs sm:text-sm mt-1 inline-block ${
          t.linkedin ? "text-blue-600 hover:underline" : "text-gray-400"
        }`}
      >
        {t.linkedin ? "🔗 LinkedIn Profile" : "No LinkedIn"}
      </a>

      {/* Rating */}
      <p className="mt-2 text-yellow-500 font-medium text-xs sm:text-sm">
        ⭐ {t.rating ?? "N/A"}/5
      </p>

      {/* Scrollable Feedback */}
      <div className="mt-3 flex-1 overflow-y-auto pr-1 custom-scrollbar">
        <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
          {t.feedback || "No feedback provided."}
        </p>
      </div>
    </div>
  );
};

const TestimonialList = ({ testimonials }) => {
  return (
    <div className="mt-6 sm:mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {testimonials.map((t, i) => (
        <TestimonialCard t={t} key={i} />
      ))}
    </div>
  );
};

export default TestimonialList;
