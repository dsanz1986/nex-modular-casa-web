
import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ModelsSection from "@/components/ModelsSection";
import { PersonalizationSection } from "@/components/PersonalizationSection";
import NexBaseSection from "@/components/NexBaseSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import LicensesSection from "@/components/LicensesSection";
import PilotHouseSection from "@/components/PilotHouseSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navbar />
      <main>
        <section id="inicio">
          <HeroSection />
        </section>
        <section id="nosotros">
          <AboutSection />
        </section>
        <section id="modelos">
          <ModelsSection />
        </section>
        <section id="personalizacion">
          <PersonalizationSection />
        </section>
        <section id="nex-base">
          <NexBaseSection />
        </section>
        <section id="ventajas">
          <AdvantagesSection />
        </section>
        <section id="licencias">
          <LicensesSection />
        </section>
        <section id="casa-piloto">
          <PilotHouseSection />
        </section>
        <section id="preguntas-frecuentes">
          <FAQSection />
        </section>
        <section id="testimonios">
          <TestimonialsSection />
        </section>
        <section id="contacto">
          <ContactSection />
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
