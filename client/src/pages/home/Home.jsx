import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import banner5 from "../../assets/visolve/banners/Banner5.jpg";
import banner02 from "../../assets/visolve/banners/banner_02.png";
import banner04 from "../../assets/visolve/banners/banner_04.png";
import banner05 from "../../assets/visolve/banners/banner_05.png";
import banner06 from "../../assets/visolve/banners/banner_06.png";
import banner01 from "../../assets/visolve/banners/banner_01.png";

import AnnouncementBanner from "../../components/home/AnnouncementBanner";
import ServicesGrid from "../../components/home/ServicesGrid";
import AIHealthcareBadge from "../../components/home/AIHealthcareBadge";

const slides = [
  {
    id: 1,
    image: banner5,
    title: "Enterprise Cloud Services",
    link: "/services/cloud",
    alt: "Enterprise Cloud Services Banner",
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
    title: "Open Source Contribution",
    link: "/services/opensource",
    alt: "Open Source Contribution Banner",
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
    title: "EHR Interoperability",
    link: "/services/interoperability",
    alt: "EHR Interoperability Banner",
  },
];

const SLIDE_MS = 6000;

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, SLIDE_MS);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  /* Only the outgoing, current and incoming slides need an <img> for the
     crossfade — mounting all six costs ~2MB on first paint. */
  const isNearCurrent = (index) => {
    const last = slides.length - 1;
    return (
      index === currentIndex ||
      index === (currentIndex === 0 ? last : currentIndex - 1) ||
      index === (currentIndex === last ? 0 : currentIndex + 1)
    );
  };

  return (
    <div className="w-full bg-white font-sans text-gray-800">
      {/* Top Announcement Banner (Contains single Primary Healthcare AI Portfolio CTA & Secondary Announcement) */}
      <AnnouncementBanner />

      {/* Hero Carousel & Portfolio Section */}
      <section className="relative w-full bg-white py-8 sm:py-10 lg:py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* LEFT: Hero Carousel (order-2 on mobile, order-1 on desktop) */}
            <div
              role="region"
              aria-roledescription="carousel"
              aria-label="Featured ViSolve services"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onFocusCapture={() => setIsPaused(true)}
              onBlurCapture={() => setIsPaused(false)}
              className="order-2 lg:order-1 lg:col-span-8 xl:col-span-8 group relative w-full aspect-[964/400] max-h-[480px] rounded-lg overflow-hidden shadow-sm border border-gray-200 bg-white"
            >
              {slides.map((slide, index) => {
                const isActive = index === currentIndex;
                return (
                  <div
                    key={slide.id}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} of ${slides.length}: ${slide.title}`}
                    aria-hidden={!isActive}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                      isActive
                        ? "opacity-100 z-10 pointer-events-auto"
                        : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <Link
                      to={slide.link}
                      tabIndex={isActive ? 0 : -1}
                      className="block w-full h-full"
                    >
                      {isNearCurrent(index) && (
                        <img
                          src={slide.image}
                          alt={slide.alt}
                          width={964}
                          height={400}
                          decoding="async"
                          fetchPriority={index === 0 ? "high" : "auto"}
                          className="w-full h-full object-contain sm:object-cover"
                        />
                      )}

                      {/* Caption — surfaces the slide title, which was previously
                          only a tooltip. Plain text so the slide stays one link. */}
                      <span className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between gap-3 bg-gradient-to-t from-[#08243F]/85 to-transparent px-4 pb-7 pt-10 sm:px-5">
                        <span className="text-sm sm:text-lg font-semibold text-white drop-shadow-sm">
                          {slide.title}
                        </span>
                        <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-[#FDBA74]">
                          View service
                          <FiChevronRight strokeWidth={1.5} />
                        </span>
                      </span>
                    </Link>
                  </div>
                );
              })}

              {/* Navigation Arrows — hidden until hover on pointer devices, but
                  always visible on touch, where group-hover never fires. */}
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-[#08243F]/70 hover:bg-[#EA580C] text-white p-2 sm:p-2.5 rounded-md backdrop-blur-xs opacity-0 group-hover:opacity-100 focus-visible:opacity-100 pointer-coarse:opacity-100 transition-[opacity,background-color]"
              >
                <FiChevronLeft className="text-lg" strokeWidth={1.5} />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-[#08243F]/70 hover:bg-[#EA580C] text-white p-2 sm:p-2.5 rounded-md backdrop-blur-xs opacity-0 group-hover:opacity-100 focus-visible:opacity-100 pointer-coarse:opacity-100 transition-[opacity,background-color]"
              >
                <FiChevronRight className="text-lg" strokeWidth={1.5} />
              </button>

              {/* Progress rail — the active segment fills across the interval */}
              <div className="absolute bottom-3 left-4 sm:left-5 z-20 flex gap-1.5">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                    aria-current={index === currentIndex}
                    className="relative h-[3px] w-7 sm:w-8 overflow-hidden rounded-full bg-white/35 transition-colors hover:bg-white/60"
                  >
                    {index === currentIndex && (
                      <span
                        key={currentIndex}
                        className={`carousel-progress absolute inset-0 bg-[#F97316] ${
                          isPaused ? "is-paused" : ""
                        }`}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT: AI Healthcare CTA (order-1 on mobile, order-2 on desktop) */}
            <div className="order-1 lg:order-2 lg:col-span-4 xl:col-span-4 flex items-center justify-center py-2 lg:py-0 lg:self-stretch">
              <AIHealthcareBadge />
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesGrid />
    </div>
  );
}

export default Home;
