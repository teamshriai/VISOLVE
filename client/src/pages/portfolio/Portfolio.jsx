import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import FeaturedProjects from "./components/FeaturedProjects";
import CoreExpertise from "./components/CoreExpertise";
import TechnicalCapabilities from "./components/TechnicalCapabilities";
import WhyChooseUs from "./components/WhyChooseUs";
import IndustriesWeServe from "./components/IndustriesWeServe";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

/**
 * AI & Precision Medicine portfolio landing page.
 *
 * The portfolio carries its own brand (IBM Plex Sans, indigo/violet palette)
 * and its own chrome, so it renders outside MainLayout. `portfolio-root`
 * scopes the portfolio design system — see `portfolio.css`.
 */
function Portfolio() {
  return (
    <div className="portfolio-root bg-stone-50 text-medical-dark overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <FeaturedProjects />
      <CoreExpertise />
      <TechnicalCapabilities />
      <WhyChooseUs />
      <IndustriesWeServe />
      <CTA />
      <Footer />
    </div>
  );
}

export default Portfolio;
