import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Home from "./components/Home/Home";
import ExperienceDetails from "./components/Experience/ExperienceDetails";
import Workshops from "./components/Workshops/Workshops";
import WorkshopPowerBIOriental from "./components/Workshops/WorkshopPowerBIOriental";
import WorkshopJavaSIRT from "./components/Workshops/WorkshopJavaSIRT";
import WorkshopPythonSIRT from "./components/Workshops/WorkshopPythonSIRT";
import WorkshopCWS from "./components/Workshops/WorkshopCWS";
import WorkshopAppDevIEHE from "./components/Workshops/WorkshopAppDevIEHE";
import WorkshopPowerBIUIT from "./components/Workshops/WorkshopPowerBIUIT";
import TestimonialWrapper from "./components/Testimonial/TestimonialWrapper";

function App() {
  return (
    <Router>
      <div className="bg-[#050414] min-h-screen text-white relative">
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
        <Navbar />
        <div className="relative pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Work />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/experience/:id" element={<ExperienceDetails />} />
            <Route path="/workshops" element={<Workshops />} />

            <Route
              path="/workshops/powerbi-oriental"
              element={<WorkshopPowerBIOriental />}
            />
            <Route path="/workshops/java-sirt" element={<WorkshopJavaSIRT />} />
            <Route
              path="/workshops/python-sirt"
              element={<WorkshopPythonSIRT />}
            />
            <Route
              path="/workshops/powerbi-uit"
              element={<WorkshopPowerBIUIT />}
            />
            <Route
              path="/workshops/doubt-clearing-cws"
              element={<WorkshopCWS />}
            />
            <Route
              path="/workshops/excellence-college"
              element={<WorkshopAppDevIEHE />}
            />
            <Route path="/testimonials" element={<TestimonialWrapper />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
