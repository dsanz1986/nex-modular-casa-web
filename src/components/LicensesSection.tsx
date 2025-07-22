
import { CheckCircle, FileText, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const LicensesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-nex-text mb-6">
            {t('licenses.title')}
          </h2>
          <p className="text-lg font-inter text-nex-text/80 max-w-3xl mx-auto leading-relaxed">
            {t('licenses.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tarjeta 1 - ¿Qué tienes que hacer? */}
          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white rounded-3xl overflow-hidden animate-slide-up">
            <CardContent className="p-8 text-center">
              <div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <FileText className="w-10 h-10 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-playfair font-bold text-nex-text mb-4">
                {t('licenses.whatToDo.title')}
              </h3>
              
              <p className="text-nex-text/80 font-inter leading-relaxed">
                {t('licenses.whatToDo.description')}
              </p>
            </CardContent>
          </Card>

          {/* Tarjeta 2 - Confianza */}
          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white rounded-3xl overflow-hidden animate-slide-up delay-100">
            <CardContent className="p-8 text-center">
              <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <Shield className="w-10 h-10 text-green-600" />
              </div>
              
              <h3 className="text-xl font-playfair font-bold text-nex-text mb-4">
                {t('licenses.trust.title')}
              </h3>
              
              <p className="text-nex-text/80 font-inter leading-relaxed">
                {t('licenses.trust.description')}
              </p>
            </CardContent>
          </Card>

          {/* Tarjeta 3 - Ventaja adicional */}
          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white rounded-3xl overflow-hidden animate-slide-up delay-200">
            <CardContent className="p-8 text-center">
              <div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <CheckCircle className="w-10 h-10 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-playfair font-bold text-nex-text mb-4">
                {t('licenses.simplified.title')}
              </h3>
              
              <p className="text-nex-text/80 font-inter leading-relaxed">
                {t('licenses.simplified.description')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LicensesSection;
