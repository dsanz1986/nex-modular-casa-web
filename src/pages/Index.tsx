
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ModelsSection from "@/components/ModelsSection";
import PersonalizationSection from "@/components/PersonalizationSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import LicensesSection from "@/components/LicensesSection";
import PilotHouseSection from "@/components/PilotHouseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navbar />
      <div id="inicio">
        <HeroSection />
      </div>
      <div id="nosotros">
        <AboutSection />
      </div>
      <div id="modelos">
        <ModelsSection />
      </div>
      <div id="personalizacion">
        <PersonalizationSection />
      </div>
      <div id="ventajas">
        <AdvantagesSection />
      </div>
      <div id="licencias">
        <LicensesSection />
      </div>
      <div id="casa-piloto">
        <PilotHouseSection />
      </div>
      <div id="testimonios">
        <TestimonialsSection />
      </div>
      <div id="contacto">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
