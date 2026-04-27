import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const PILOT_HOUSES = [
  {
    id: "nexNatura",
    image: "/lovable-uploads/c6c6f354-9983-4867-82ff-da049a835f66.png",
    mapsUrl: "https://maps.app.goo.gl/iUWkZ5LaFUCkBY417",
    whatsappMessage:
      "Hola, me gustaría programar una visita a la casa piloto Nex Natura en Campo Real. ¿Cuándo sería posible?",
  },
  {
    id: "nexNido",
    image: "/lovable-uploads/nex-nido-pilot.jpeg",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Calle+Ebro+37,+28840+Mejorada+del+Campo,+Madrid",
    whatsappMessage:
      "Hola, me gustaría programar una visita a la casa piloto Nex Nido en Mejorada del Campo. ¿Cuándo sería posible?",
  },
] as const;

const PilotHouseSection = () => {
  const { t } = useTranslation();

  const handleWhatsApp = (message: string) => {
    window.open(
      `https://wa.me/34611486694?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleMapClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-nex-primary to-forest-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            {t("pilotHouse.title")}
          </h2>
          <p className="text-lg md:text-xl font-inter text-white/90 leading-relaxed max-w-3xl mx-auto">
            {t("pilotHouse.description")}
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {PILOT_HOUSES.map((house) => (
            <article
              key={house.id}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden shadow-2xl animate-slide-up flex flex-col"
            >
              <div className="relative">
                <img
                  src={house.image}
                  alt={`Casa piloto ${t(`pilotHouse.${house.id}.name`)} en ${t(
                    `pilotHouse.${house.id}.location`
                  )}`}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => handleMapClick(house.mapsUrl)}
                  className="absolute bottom-3 right-3 bg-white text-nex-text px-4 py-2 rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                  aria-label={`Ver ${t(`pilotHouse.${house.id}.name`)} en Google Maps`}
                >
                  <MapPin className="w-4 h-4 text-nex-primary" />
                  <span className="text-sm font-playfair font-semibold">
                    {t(`pilotHouse.${house.id}.location`)}
                  </span>
                </button>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-playfair font-bold mb-3">
                  {t(`pilotHouse.${house.id}.name`)}
                </h3>
                <a
                  href={house.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 mb-6 text-white/90 hover:text-white transition-colors"
                  aria-label={`Ver ${t(`pilotHouse.${house.id}.name`)} en Google Maps`}
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="font-inter">
                    {t(`pilotHouse.${house.id}.address`)}
                  </span>
                </a>

                <Button
                  size="lg"
                  className="mt-auto bg-white text-nex-primary hover:bg-white/90 font-inter font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => handleWhatsApp(house.whatsappMessage)}
                >
                  {t("pilotHouse.cta")}
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Common contact info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-white/90">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-white/80" />
            <a
              href="tel:+34611486694"
              className="font-inter hover:text-white transition-colors"
            >
              611 48 66 94
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-white/80" />
            <a
              href="mailto:info@nexmodularhomes.com"
              className="font-inter hover:text-white transition-colors"
            >
              info@nexmodularhomes.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilotHouseSection;
