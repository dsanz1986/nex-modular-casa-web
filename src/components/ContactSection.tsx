
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    comentarios: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Crear el contenido del email
    const emailBody = `
Nueva solicitud de información desde la web:

Nombre: ${formData.nombre}
Email: ${formData.email}
Teléfono: ${formData.telefono}
Comentarios: ${formData.comentarios}
    `.trim();

    try {
      // Enviar por email usando mailto (esto abrirá el cliente de email del usuario)
      const subject = encodeURIComponent("Nueva solicitud de información - Nex Modular Homes");
      const body = encodeURIComponent(emailBody);
      const mailtoLink = `mailto:info@nexmodularhomes.com?subject=${subject}&body=${body}`;
      
      window.location.href = mailtoLink;
      
      // Mostrar mensaje de éxito
      toast({
        title: "¡Solicitud preparada!",
        description: "Se ha abierto tu cliente de email para enviar la solicitud.",
      });
      
      // Limpiar formulario
      setFormData({ nombre: "", email: "", telefono: "", comentarios: "" });
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al procesar tu solicitud. Por favor, inténtalo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-forest-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-nex-text mb-4">
            Solicita información sin compromiso
          </h2>
          <p className="text-lg font-inter text-nex-text/80 leading-relaxed">
            Cuéntanos tus necesidades y te ayudaremos a encontrar la casa modular perfecta para ti
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 animate-slide-up border border-forest-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-inter font-medium text-nex-text mb-2">
                  Nombre *
                </label>
                <Input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-forest-200 rounded-2xl focus:ring-2 focus:ring-nex-primary focus:border-transparent transition-all duration-300 font-inter"
                  placeholder="Tu nombre completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-inter font-medium text-nex-text mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-forest-200 rounded-2xl focus:ring-2 focus:ring-nex-primary focus:border-transparent transition-all duration-300 font-inter"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="telefono" className="block text-sm font-inter font-medium text-nex-text mb-2">
                Teléfono
              </label>
              <Input
                id="telefono"
                name="telefono"
                type="tel"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-forest-200 rounded-2xl focus:ring-2 focus:ring-nex-primary focus:border-transparent transition-all duration-300 font-inter"
                placeholder="+34 600 000 000"
              />
            </div>
            
            <div>
              <label htmlFor="comentarios" className="block text-sm font-inter font-medium text-nex-text mb-2">
                Comentarios / Consulta
              </label>
              <Textarea
                id="comentarios"
                name="comentarios"
                rows={4}
                value={formData.comentarios}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-forest-200 rounded-2xl focus:ring-2 focus:ring-nex-primary focus:border-transparent transition-all duration-300 resize-none font-inter"
                placeholder="Cuéntanos sobre tu proyecto, presupuesto, ubicación, etc."
              />
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-nex-primary hover:bg-nex-primary/90 text-white font-inter font-semibold py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando..." : "Enviar solicitud"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
