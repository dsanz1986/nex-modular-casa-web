
import { CheckCircle, FileText, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const LicensesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-nex-text mb-6">
            ¿Y qué pasa con las licencias? No te preocupes, te ayudamos
          </h2>
          <p className="text-lg font-inter text-nex-text/80 max-w-3xl mx-auto leading-relaxed">
            Sabemos que la parte legal puede generar dudas, por eso te acompañamos también en este paso.
            Al tratarse de casas prefabricadas sin cimentación ni anclaje permanente, no se consideran edificaciones tradicionales, 
            lo que facilita su tramitación urbanística.
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
                ¿Qué tienes que hacer?
              </h3>
              
              <p className="text-nex-text/80 font-inter leading-relaxed">
                Solo tendrás que presentar una solicitud de instalación ante tu ayuntamiento.
                Nosotros te proporcionamos el modelo de escrito, la ficha técnica y el anexo legal necesarios 
                para acreditar que se trata de una vivienda móvil y reversible.
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
                Confianza
              </h3>
              
              <p className="text-nex-text/80 font-inter leading-relaxed">
                Queremos que te sientas seguro en cada paso.
                No vendemos solo una casa: te damos las herramientas para instalarla con todas las garantías.
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
                Proceso simplificado
              </h3>
              
              <p className="text-nex-text/80 font-inter leading-relaxed">
                Al no requerir cimentación permanente, el proceso de tramitación es mucho más ágil que una construcción tradicional.
                Te acompañamos en cada paso del proceso legal.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LicensesSection;
