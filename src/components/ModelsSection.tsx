
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Clock } from "lucide-react";
import ModelImageCarousel from "./ModelImageCarousel";
import { useTranslation } from "react-i18next";

const ModelsSection = () => {
  const { t } = useTranslation();

  const models = [
    {
      id: "nexNatura",
      pdfPath: "/ficha-tecnica-nex-natura.pdf",
      images: [
        "/lovable-uploads/exterior blanca.jpeg",
        "/lovable-uploads/2c692612-5352-4091-9f9b-463d9521af51.png",
        "/lovable-uploads/5845baa7-852c-474a-86e5-371bfcb9e62e.png",
        "/lovable-uploads/abeef23b-3164-41d3-86b4-801639c11858.png",
        "/lovable-uploads/ce58701f-da18-44e6-9bde-2c9ef77024fe.png",
        "/lovable-uploads/bba57c36-edcb-45ac-ba78-1c52ea488f58.png",
        "/lovable-uploads/7f5a1fab-6eb9-48cc-a851-fa20830e232d.png",
        "/lovable-uploads/79ca2d0d-0900-4bb6-abf8-e8b64454f4cb.png",
        "/lovable-uploads/9539da88-04bd-4fa2-9e9c-8eb5a7566e96.png",
        "/lovable-uploads/3265b4fb-cc97-41e0-83a9-7bce4b13339d.png"
      ]
    },
    {
      id: "nexNido",
      pdfPath: "/ficha-tecnica-nex-nido.pdf",
      images: [
        "/lovable-uploads/exterior-blanca.jpeg",
        "/lovable-uploads/imgi_107_359e49_37c2435d4a0c47c9b238d6578cedc96d~mv2.jpg",
        "/lovable-uploads/imgi_113_359e49_274127b5de3d400f818d640c4f76c4a3~mv2.jpg",
        "/lovable-uploads/imgi_125_359e49_d7a3ee2a2a9a461385893361f8ab26b4~mv2.jpg",
        "/lovable-uploads/imgi_126_359e49_2040207d0f154ed8869049b3c41a5f73~mv2.jpg",
        "/lovable-uploads/imgi_128_359e49_7295abc7e432491bb4560bc32b1cc64e~mv2.jpg",
        "/lovable-uploads/imgi_129_359e49_78bff05cfc4c46bbab3d77a703ba8b3c~mv2.jpg",
        "/lovable-uploads/imgi_84_359e49_7295abc7e432491bb4560bc32b1cc64e~mv2.jpg",
        "/lovable-uploads/plano 36m2.png",
      ]
    }
  ];

  const handleDownloadPDF = (modelName: string, pdfPath: string) => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = `ficha-tecnica-${modelName.toLowerCase().replace(' ', '-')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-forest-50 to-forest-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-nex-text mb-4">
            {t('models.title')}
          </h2>
          <p className="text-lg font-inter text-nex-text/80 max-w-2xl mx-auto leading-relaxed">
            {t('models.subtitle')}
          </p>
          
          {/* Oferta especial banner */}
          <div className="mt-8 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-2xl inline-flex items-center gap-3 shadow-lg animate-pulse">
            <Clock className="w-5 h-5" />
            <span className="font-semibold font-inter">{t('models.specialOffer')}</span>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {models.map((model, index) => (
            <Card key={model.id} className={`group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg animate-slide-up bg-white rounded-3xl overflow-hidden relative ${index === 1 ? 'delay-200' : ''}`}>
              <CardContent className="p-8">
                {/* Carrusel de imágenes */}
                {model.images.length > 0 && (
                  <ModelImageCarousel images={model.images} modelName={t(`models.${model.id}.name`)} />
                )}

                {/* Título y dimensiones */}
                <header className="text-center mb-6 relative">
                  <h3 className="text-2xl font-playfair font-bold text-nex-text mb-4">
                    {t(`models.${model.id}.name`)}
                  </h3>
                  <p className="text-sm font-inter text-nex-text/70">
                    {t(`models.${model.id}.dimensions`)}
                  </p>
                </header>

                {/* Precios centrados y destacados */}
                <div className="text-center mb-6 bg-gradient-to-r from-forest-50 to-forest-100 rounded-2xl p-6 border border-forest-200">
                  <div className="flex items-center justify-center gap-4 mb-3">
                    <span className="text-xl text-gray-500 line-through font-inter font-medium">
                      {t(`models.${model.id}.originalPrice`)}
                    </span>
                    <span className="text-4xl font-bold text-nex-primary font-playfair">
                      {t(`models.${model.id}.offerPrice`)}
                    </span>
                  </div>
                  <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 px-4 py-2 rounded-xl text-sm font-medium inline-flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {t('models.reservationDeadline')}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {(t(`models.${model.id}.features`, { returnObjects: true }) as string[]).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-nex-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-nex-text font-inter">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full bg-nex-primary hover:bg-nex-primary/90 text-white font-inter font-semibold py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  onClick={() => handleDownloadPDF(t(`models.${model.id}.name`), model.pdfPath)}
                  aria-label={`Descargar ficha técnica de casa modular móvil ${t(`models.${model.id}.name`)}`}
                >
                  <Download size={18} />
                  {t('models.downloadPdf')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;
