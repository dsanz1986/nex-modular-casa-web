
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Button>
          </Link>
          <h1 className="text-4xl font-playfair font-bold text-nex-text mb-4">
            Política de Privacidad
          </h1>
          <p className="text-lg text-nex-text/80 font-inter">
            Última actualización: 25 de junio de 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-playfair font-semibold text-nex-text mb-4">
              Responsable del tratamiento
            </h2>
            <p className="text-nex-text/80 font-inter mb-4 leading-relaxed">
              <strong>Nex Modular Homes</strong>
              <br />
              Dirección: P.º de Pozuelo, 24, 28510 Campo Real, Madrid
              <br />
              Email: info@nexmodularhomes.com
              <br />
              Teléfono: 611 48 66 94
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-playfair font-semibold text-nex-text mb-4">
              Información que recopilamos
            </h2>
            <p className="text-nex-text/80 font-inter mb-4 leading-relaxed">
              Recopilamos diferentes tipos de información para proporcionarle y mejorar nuestros servicios:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-nex-text/80 font-inter">
              <li>Información de contacto (nombre, email, teléfono)</li>
              <li>Información sobre su consulta o proyecto</li>
              <li>Datos de navegación y uso del sitio web</li>
              <li>Información técnica del dispositivo utilizado</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-playfair font-semibold text-nex-text mb-4">
              Finalidades del tratamiento
            </h2>
            <p className="text-nex-text/80 font-inter mb-4 leading-relaxed">
              Utilizamos su información personal para:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-nex-text/80 font-inter">
              <li>Responder a sus consultas y proporcionar información sobre nuestros servicios</li>
              <li>Gestionar y procesar sus solicitudes</li>
              <li>Mejorar nuestro sitio web y servicios</li>
              <li>Enviarle información comercial (solo con su consentimiento)</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-playfair font-semibold text-nex-text mb-4">
              Base legal para el tratamiento
            </h2>
            <p className="text-nex-text/80 font-inter leading-relaxed">
              Tratamos sus datos personales basándonos en:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-nex-text/80 font-inter">
              <li>Su consentimiento explícito</li>
              <li>La ejecución de un contrato o medidas precontractuales</li>
              <li>Nuestro interés legítimo en mejorar nuestros servicios</li>
              <li>El cumplimiento de obligaciones legales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-playfair font-semibold text-nex-text mb-4">
              Sus derechos
            </h2>
            <p className="text-nex-text/80 font-inter mb-4 leading-relaxed">
              Usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-nex-text/80 font-inter">
              <li>Acceder a sus datos personales</li>
              <li>Rectificar datos inexactos</li>
              <li>Suprimir sus datos personales</li>
              <li>Limitar el tratamiento de sus datos</li>
              <li>Portabilidad de sus datos</li>
              <li>Oponerse al tratamiento</li>
              <li>Retirar su consentimiento en cualquier momento</li>
            </ul>
            <p className="text-nex-text/80 font-inter mt-4 leading-relaxed">
              Para ejercer estos derechos, puede contactarnos en info@nexmodularhomes.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-playfair font-semibold text-nex-text mb-4">
              Conservación de datos
            </h2>
            <p className="text-nex-text/80 font-inter leading-relaxed">
              Conservaremos sus datos personales durante el tiempo necesario para cumplir con las finalidades 
              para las que fueron recopilados y para cumplir con nuestras obligaciones legales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-playfair font-semibold text-nex-text mb-4">
              Contacto
            </h2>
            <p className="text-nex-text/80 font-inter leading-relaxed">
              Si tiene preguntas sobre esta política de privacidad, puede contactarnos en:
              <br />
              Email: info@nexmodularhomes.com
              <br />
              Teléfono: 611 48 66 94
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
