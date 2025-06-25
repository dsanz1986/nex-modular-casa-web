
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CookiePolicy = () => {
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
            Política de Cookies
          </h1>
          <p className="text-lg text-nex-text/80 font-inter">
            Última actualización: 25 de junio de 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-playfair font-semibold text-nex-text mb-4">
              ¿Qué son las cookies?
            </h2>
            <p className="text-nex-text/80 font-inter mb-4 leading-relaxed">
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web. 
              Nos ayudan a mejorar su experiencia de navegación y a proporcionarle contenido personalizado.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-playfair font-semibold text-nex-text mb-4">
              Tipos de cookies que utilizamos
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-playfair font-medium text-nex-text mb-2">
                  Cookies necesarias
                </h3>
                <p className="text-nex-text/80 font-inter leading-relaxed">
                  Estas cookies son esenciales para el funcionamiento básico de nuestro sitio web. 
                  No pueden ser desactivadas y no almacenan información personal identificable.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-playfair font-medium text-nex-text mb-2">
                  Cookies analíticas
                </h3>
                <p className="text-nex-text/80 font-inter leading-relaxed">
                  Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web, 
                  recopilando información de forma anónima para mejorar nuestros servicios.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-playfair font-medium text-nex-text mb-2">
                  Cookies de marketing
                </h3>
                <p className="text-nex-text/80 font-inter leading-relaxed">
                  Se utilizan para mostrarle contenido y anuncios más relevantes según sus intereses 
                  y para medir la efectividad de nuestras campañas publicitarias.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-playfair font-semibold text-nex-text mb-4">
              Gestión de cookies
            </h2>
            <p className="text-nex-text/80 font-inter mb-4 leading-relaxed">
              Puede gestionar sus preferencias de cookies en cualquier momento a través del banner 
              de cookies que aparece en su primera visita o modificando la configuración de su navegador.
            </p>
            <p className="text-nex-text/80 font-inter leading-relaxed">
              Tenga en cuenta que desactivar ciertas cookies puede afectar la funcionalidad del sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-playfair font-semibold text-nex-text mb-4">
              Contacto
            </h2>
            <p className="text-nex-text/80 font-inter leading-relaxed">
              Si tiene preguntas sobre nuestra política de cookies, puede contactarnos en:
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

export default CookiePolicy;
