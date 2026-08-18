import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  {
    name: "Mohtashim M.",
    image: "https://www.tutorialspoint.com/about/images/mohtashim.jpg",
    text: "Mohtashim is an MCA from AMU (Aligarah) and a Project Management Professional. He has more than 17 years of experience in Telecom and Datacom industries covering complete SDLC. He is managing in-house innovations, business planning, implementation, finance and the overall business development of Tutorials Point.",
  },
  {
    name: "Gopal K Verma",
    image: "https://www.tutorialspoint.com/about/images/gopal_verma.jpg",
    text: "Gopal is an MCA from GJU (Hisar) and a Cisco Certified Network Professional. He has more than 11 years of experience in core data networking and telecommunications. He develops contents for Computer Science related subjects. He is also involved in developing Apps for various Mobile devices.",
  },
  {
    name: "Mukesh Kumar",
    image: "https://www.tutorialspoint.com/about/images/mukesh_kumar.jpg",
    text: "Mukesh Kumar, having 7+years experience in writing on various topics ranging from IT products and services, legal, medical, online advertisement & education to e-commerce businesses. He also has experience of text & copy-editing, & online research. He has done two masters – MA (Geography) from University of Delhi and MA (Mass Communication & Journalism) from Kurukshetra University.",
  },
];

function Flick() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-slate-900 min-h-[600px] flex items-center justify-center font-sans text-white py-16 px-4">
      <div className="max-w-4xl w-full bg-slate-800/80 border border-slate-700 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden backdrop-blur-sm">
        {/* Carousel controls */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold tracking-wider text-orange-400 uppercase">
            Team Showcase
          </h2>
          <div className="flex space-x-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === idx ? "bg-orange-500 scale-110" : "bg-slate-600 hover:bg-slate-500"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Active Slide Content */}
        <div className="flex flex-col items-center text-center space-y-6 animate-fadeIn">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].name}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-orange-500 shadow-lg"
          />
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            {slides[currentSlide].name}
          </h3>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed">
            {slides[currentSlide].text}
          </p>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
          aria-label="Previous Slide"
        >
          <FiChevronLeft className="text-xl" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
          aria-label="Next Slide"
        >
          <FiChevronRight className="text-xl" />
        </button>
      </div>
    </div>
  );
}

export default Flick;
