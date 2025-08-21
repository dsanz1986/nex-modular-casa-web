
import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ModelsSection from "@/components/ModelsSection";
import { PersonalizationSection } from "@/components/PersonalizationSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import LicensesSection from "@/components/LicensesSection";
import PilotHouseSection from "@/components/PilotHouseSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
        
        {/* Vídeo de la casa */}
        <div className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <AspectRatio ratio={16 / 9}>
                <video 
                  src="/lovable-uploads/Video-casa.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  aria-label="Vídeo recorrido completo casa modular móvil Nex"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
        
        <section id="personalizacion">
          <PersonalizationSection />
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
