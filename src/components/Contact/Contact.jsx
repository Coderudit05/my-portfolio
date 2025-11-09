import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(()=>{
    if(status){
      const timer = setTimeout(() => {
        setStatus("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_ryoerql", // your EmailJS Service ID
        "template_t081yzb", // your Template ID
        form,               // form data
        "cgZ4NQJhMHw32zUOo" // your Public Key
      );

      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#0a0e27] text-white py-20 px-4 sm:px-8 relative overflow-hidden flex items-center justify-center">
      {/* Toast Notification - Top Right */}
      {status && (
        <div className="fixed top-4 right-4 sm:top-8 sm:right-8 z-50 toast-enter max-w-[90%] sm:max-w-none">
          <div className={`px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-2xl flex items-center gap-2 sm:gap-3 min-w-[250px] sm:min-w-[300px] ${
            status.includes('✅') 
              ? 'bg-green-500/90 backdrop-blur-sm border border-green-400' 
              : 'bg-red-500/90 backdrop-blur-sm border border-red-400'
          }`}>
            <span className="text-xl sm:text-2xl">
              {status.includes('✅') ? '✅' : '❌'}
            </span>
            <span className="text-white font-semibold flex-1 text-sm sm:text-base">
              {status.replace('✅', '').replace('❌', '').trim()}
            </span>
          </div>
        </div>
      )}

      <div className="w-full max-w-2xl mx-auto z-10">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-400 mb-3 sm:mb-4">
            Contact Me
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto px-4">
            Have a question, project, or just want to say hi? Fill out the form
            below and I'll get back to you soon!
          </p>
        </div>

        {/* ✅ Correct placement of onSubmit */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#181c2f] rounded-2xl shadow-lg shadow-blue-500/10 p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6"
        >
          <div>
            <label htmlFor="name" className="block text-base sm:text-lg font-semibold mb-2 text-blue-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              id="name"
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-[#101325] text-white text-sm sm:text-base border border-blue-500/30 focus:border-blue-400 outline-none transition"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-base sm:text-lg font-semibold mb-2 text-blue-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              id="email"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-[#101325] text-white text-sm sm:text-base border border-blue-500/30 focus:border-blue-400 outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-base sm:text-lg font-semibold mb-2 text-blue-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-[#101325] text-white text-sm sm:text-base border border-blue-500/30 focus:border-blue-400 outline-none transition resize-none"
              placeholder="Type your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300 shadow-md shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
