import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import banner5 from "../../assets/visolve/banners/Banner5.jpg";
import banner02 from "../../assets/visolve/banners/banner_02.png";
import banner04 from "../../assets/visolve/banners/banner_04.png";
import banner05 from "../../assets/visolve/banners/banner_05.png";
import banner06 from "../../assets/visolve/banners/banner_06.png";
import banner01 from "../../assets/visolve/banners/banner_01.png";

import AnnouncementBanner from "../../components/home/AnnouncementBanner";
import ServicesGrid from "../../components/home/ServicesGrid";
import VideoModal from "../../components/home/VideoModal";
import AIPortfolioBadge from "../../components/home/AIPortfolioBadge";

const slides = [
  {
    id: 1,
    image: banner5,
    title: "Interoperability Services",
    link: "/services/cloud",
    alt: "Interoperability Services Banner",
  },
  {
    id: 2,
    image: banner02,
    title: "Cloud Services",
    link: "/services/cloud",
    alt: "Cloud Services Banner",
  },
  {
    id: 3,
    image: banner04,
    title: "OpenEMR",
    link: "/services/openemr",
    alt: "OpenEMR Banner",
  },
  {
    id: 4,
    image: banner05,
    title: "Healthcare IT Engineering",
    link: "/services/emr",
    alt: "Healthcare IT Engineering Banner",
  },
  {
    id: 5,
    image: banner06,
    title: "OpenSource Support",
    link: "/services/opensource",
    alt: "OpenSource Support Banner",
  },
  {
    id: 6,
    image: banner01,
    title: "Cloud Consulting",
    link: "/services/cloud",
    alt: "Cloud Consulting Banner",
  },
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="w-full bg-white font-sans text-gray-800">
      {/* Top Announcement Banner (Contains single Primary Healthcare AI Portfolio CTA & Secondary Announcement) */}
      <AnnouncementBanner />

      {/* Hero Carousel & Portfolio Section */}
      <section className="relative w-full bg-white py-4 sm:py-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center">
            
            {/* LEFT: Hero Carousel (order-2 on mobile, order-1 on desktop) */}
            <div className="order-2 lg:order-1 lg:col-span-8 xl:col-span-8 relative w-full aspect-[964/400] max-h-[480px] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-white">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                    index === currentIndex
                      ? "opacity-100 z-10 pointer-events-auto"
                      : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Link
                    to={slide.link}
                    title={slide.title}
                    className="block w-full h-full"
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-contain sm:object-cover"
                    />
                  </Link>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-[#D9621E] text-white p-2.5 sm:p-3 rounded-full transition-colors focus:outline-none backdrop-blur-xs"
              >
                &#10094;
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-[#D9621E] text-white p-2.5 sm:p-3 rounded-full transition-colors focus:outline-none backdrop-blur-xs"
              >
                &#10095;
              </button>

              {/* Pagination Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-[#D9621E] w-6"
                        : "bg-gray-400/60 hover:bg-gray-600 w-2.5"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT: Portfolio CTA Area (order-1 on mobile, order-2 on desktop) */}
            <div className="order-1 lg:order-2 lg:col-span-4 xl:col-span-4 flex items-center justify-center py-2 lg:py-0">
              <AIPortfolioBadge />
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesGrid />

      {/* Video Modal Component */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />
    </div>
  );
}

export default Home;
