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
import useCardSpotlight from "./useCardSpotlight";

/**
 * AI & Precision Medicine portfolio landing page.
 *
 * The portfolio carries its own brand (DM Sans, a palette mirroring
 * shri-ai.org) and its own chrome, so it renders outside MainLayout.
 * `portfolio-root` scopes the portfolio design system — see `portfolio.css`.
 *
 * The page opens on a dark zone (hero → who-we-are → projects) and fades
 * through a violet crossover into bright pastel bands down to the footer.
 */
function Portfolio() {
  useCardSpotlight();

  return (
    <div className="portfolio-root overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <FeaturedProjects />
      {/* Carries the dark zone down into the light one; kept text-free so no
          copy ever straddles the crossover. */}
      <div aria-hidden="true" className="wash-dawn h-72" />
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
