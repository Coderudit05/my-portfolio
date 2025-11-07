import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { MdFeedback } from "react-icons/md";
import { FaUpload } from "react-icons/fa";

const TestimonialForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    linkedin: "",
    rating: "",
    feedback: "",
  });

  const [imageData, setImageData] = useState({ preview: "", fileBase64: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setImageData({ preview: reader.result, fileBase64: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Required field validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.college.trim() ||
      !formData.rating.trim() ||
      !formData.feedback.trim()
    ) {
      setError("Please fill all required fields (Name, Email, College, Rating, Feedback).");
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, "testimonials"), {
        ...formData,
        image: imageData.fileBase64 || null,
        createdAt: serverTimestamp(),
      });

      alert("✅ Testimonial submitted successfully!");

      setFormData({
        name: "",
        email: "",
        college: "",
        linkedin: "",
        rating: "",
        feedback: "",
      });
      setImageData({ preview: "", fileBase64: "" });
    } catch (error) {
      console.error("Error adding testimonial:", error);
      setError("Something went wrong, please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-700 bg-[#0a0e27] text-white"
    >
      <h2 className="text-2xl font-semibold text-center text-blue-400 mb-5 flex justify-center items-center gap-2">
        <MdFeedback className="text-blue-500 text-3xl" /> Share Your Feedback
      </h2>

      {error && (
        <p className="text-red-400 bg-red-900/30 p-2 rounded-md mb-3 text-center border border-red-500/30">
          {error}
        </p>
      )}

      {/* Input fields */}
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name *"
        required
        className="w-full mb-3 p-2 bg-transparent border border-gray-600 rounded-lg focus:border-blue-500 outline-none"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email *"
        required
        className="w-full mb-3 p-2 bg-transparent border border-gray-600 rounded-lg focus:border-blue-500 outline-none"
      />

      <input
        type="text"
        name="college"
        value={formData.college}
        onChange={handleChange}
        placeholder="College *"
        required
        className="w-full mb-3 p-2 bg-transparent border border-gray-600 rounded-lg focus:border-blue-500 outline-none"
      />

      <input
        type="url"
        name="linkedin"
        value={formData.linkedin}
        onChange={handleChange}
        placeholder="LinkedIn Profile (optional)"
        className="w-full mb-3 p-2 bg-transparent border border-gray-600 rounded-lg focus:border-blue-500 outline-none"
      />

      <input
        type="number"
        name="rating"
        value={formData.rating}
        onChange={handleChange}
        placeholder="Rating (1–5) *"
        required
        min="1"
        max="5"
        className="w-full mb-3 p-2 bg-transparent border border-gray-600 rounded-lg focus:border-blue-500 outline-none"
      />

      <textarea
        name="feedback"
        value={formData.feedback}
        onChange={handleChange}
        placeholder="Your Feedback *"
        required
        rows="4"
        className="w-full mb-3 p-2 bg-transparent border border-gray-600 rounded-lg focus:border-blue-500 outline-none resize-none"
      />

      {/* Styled File Upload */}
      <div className="flex flex-col mb-4">
        <label className="text-sm text-gray-300 mb-2">Profile Image (optional)</label>
        <label
          htmlFor="file-upload"
          className="flex items-center justify-center gap-2 border border-gray-600 rounded-lg py-2 cursor-pointer hover:border-blue-500 hover:bg-blue-500/10 transition"
        >
          <FaUpload className="text-blue-400" />
          <span className="text-gray-300">
            {imageData.preview ? "Change Image" : "Choose Image"}
          </span>
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleFile}
          className="hidden"
        />
      </div>

      {imageData.preview && (
        <div className="flex justify-center mb-3">
          <img
            src={imageData.preview}
            alt="Preview"
            className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
          />
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 rounded-lg font-semibold transition ${
          loading
            ? "bg-blue-800 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 shadow-md"
        }`}
      >
        {loading ? "Submitting..." : "Submit Testimonial"}
      </button>
    </form>
  );
};

export default TestimonialForm;
