import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import TestimonialForm from "./TestimonialForm";
import TestimonialList from "./TestimonialList";

const TestimonialWrapper = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const querySnapshot = await getDocs(collection(db, "testimonials"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTestimonials(data);
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-10">
        Testimonials
      </h1>
      <TestimonialForm />
      <TestimonialList testimonials={testimonials} />
    </div>
  );
};

export default TestimonialWrapper;
