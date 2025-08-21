
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
  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    console.error("Error loading video:", e);
    const video = e.currentTarget;
    console.log("Video source:", video.src);
    console.log("Video readyState:", video.readyState);
    console.log("Video networkState:", video.networkState);
  };

  const handleVideoLoad = () => {
    console.log("Video loaded successfully");
  };

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
            <div className="rounded-3xl overflow-hidden shadow-xl bg-black">
              <AspectRatio ratio={16 / 9}>
                <video 
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  onError={handleVideoError}
                  onLoadedData={handleVideoLoad}
                  poster="/lovable-uploads/4e8157c2-9463-4e6e-84ee-8e60aa2c16ee.png"
                  aria-label="Vídeo recorrido completo casa modular móvil Nex"
                >
                  <source src="/lovable-uploads/horizontal.mp4" type="video/mp4" />
                  <source src="/lovable-uploads/Video-casa.mp4" type="video/mp4" />
                  <p>Tu navegador no soporta la reproducción de video.</p>
                </video>
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
