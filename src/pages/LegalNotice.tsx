
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const LegalNotice = () => {
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
            Aviso Legal
          </h1>
          <p className="text-lg text-nex-text/80 font-inter">
            Última actualización: 25 de junio de 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-playfair font-semibold text-nex-text mb-4">
              Datos del titular
            </h2>
            <p className="text-nex-text/80 font-inter mb-4 leading-relaxed">
              <strong>Denominación social:</strong> Nex Modular Homes
              <br />
              <strong>Dirección:</strong> P.º de Pozuelo, 24, 28510 Campo Real, Madrid
              <br />
              <strong>Email:</strong> info@nexmodularhomes.com
              <br />
              <strong>Teléfono:</strong> 611 48 66 94
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-playfair font-semibold text-nex-text mb-4">
              Objeto
            </h2>
            <p className="text-nex-text/80 font-inter leading-relaxed">
              El presente aviso legal regula el uso del sitio web nexmodularhomes.com (en adelante, "el sitio web"), 
              del que es titular Nex Modular Homes. La navegación por el sitio web atribuye la condición de usuario 
              del mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones 
              incluidas en este aviso legal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-playfair font-semibold text-nex-text mb-4">
              Condiciones de uso
            </h2>
            <p className="text-nex-text/80 font-inter mb-4 leading-relaxed">
              El acceso y uso de este sitio web está sujeto a las siguientes condiciones:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-nex-text/80 font-inter">
              <li>El uso del sitio web es gratuito</li>
              <li>Está prohibido utilizar el sitio web para fines ilegales o no autorizados</li>
              <li>El usuario se compromete a no dañar, inutilizar o sobrecargar el sitio web</li>
              <li>No se permite la reproducción, distribución o modificación del contenido sin autorización</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-playfair font-semibold text-nex-text mb-4">
              Propiedad intelectual
            </h2>
            <p className="text-nex-text/80 font-inter leading-relaxed">
              Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos, 
              tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya 
              propiedad pertenece a Nex Modular Homes, sin que puedan entenderse cedidos al usuario ninguno 
              de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el 
              correcto uso del sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-playfair font-semibold text-nex-text mb-4">
              Responsabilidad
            </h2>
            <p className="text-nex-text/80 font-inter leading-relaxed">
              Nex Modular Homes no se hace responsable de los daños o perjuicios que pudieran derivarse del 
              uso del sitio web, salvo en los casos de dolo o negligencia grave. La empresa se reserva el 
              derecho a suspender temporalmente, y sin previo aviso, la accesibilidad del sitio web con 
              motivo de operaciones de mantenimiento, reparación, actualización o mejora.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-playfair font-semibold text-nex-text mb-4">
              Modificaciones
            </h2>
            <p className="text-nex-text/80 font-inter leading-relaxed">
              Nex Modular Homes se reserva el derecho de efectuar sin previo aviso las modificaciones que 
              considere oportunas en su sitio web, pudiendo cambiar, suprimir o añadir tanto los contenidos 
              y servicios que se presten a través de la misma como la forma en la que éstos aparezcan 
              presentados o localizados en su sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-playfair font-semibold text-nex-text mb-4">
              Legislación aplicable
            </h2>
            <p className="text-nex-text/80 font-inter leading-relaxed">
              La relación entre Nex Modular Homes y el usuario se regirá por la normativa española vigente. 
              En caso de disputa, las partes se someterán a los Juzgados y Tribunales del domicilio del usuario. 
              No obstante, Nex Modular Homes se reserva el derecho a presentar las acciones judiciales que 
              considere necesarias para proteger sus derechos.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
