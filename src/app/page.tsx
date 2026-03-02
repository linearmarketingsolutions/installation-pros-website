import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { SectionDivider } from "./components/SectionDivider";
import { ServicesSection } from "./components/ServicesSection";
import { WhyUsSection } from "./components/WhyUsSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { AboutSection } from "./components/AboutSection";
import { ServiceAreasSection } from "./components/ServiceAreasSection";
import { FAQSection } from "./components/FAQSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function InstallationProsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <div className="relative -mt-1">
        <SectionDivider />
      </div>
      <ServicesSection />
      <WhyUsSection />
      <ReviewsSection />
      <AboutSection />
      <ServiceAreasSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
