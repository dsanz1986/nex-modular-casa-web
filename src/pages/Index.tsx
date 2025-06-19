
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ModelsSection from "@/components/ModelsSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import PilotHouseSection from "@/components/PilotHouseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <HeroSection />
      <AboutSection />
      <ModelsSection />
      <AdvantagesSection />
      <PilotHouseSection />
      <ContactSection />
      <Footer />
      
      {/* WhatsApp floating button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/34611486694"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          aria-label="Contactar por WhatsApp"
        >
          <span className="text-2xl">💬</span>
        </a>
      </div>
    </div>
  );
};

export default Index;
