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
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "¡Solicitud enviada!",
        description: "Nos pondremos en contacto contigo muy pronto.",
      });
      setFormData({ nombre: "", email: "", telefono: "", comentarios: "" });
      setIsSubmitting(false);
    }, 1000);
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
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-forest-900 mb-4">
            Solicita información sin compromiso
          </h2>
          <p className="text-lg text-forest-700">
            Cuéntanos tus necesidades y te ayudaremos a encontrar la casa modular perfecta para ti
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 animate-slide-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-forest-700 mb-2">
                  Nombre *
                </label>
                <Input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-forest-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tu nombre completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-forest-700 mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-forest-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-300"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-forest-700 mb-2">
                Teléfono
              </label>
              <Input
                id="telefono"
                name="telefono"
                type="tel"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-forest-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-300"
                placeholder="+34 600 000 000"
              />
            </div>
            
            <div>
              <label htmlFor="comentarios" className="block text-sm font-medium text-forest-700 mb-2">
                Comentarios / Consulta
              </label>
              <Textarea
                id="comentarios"
                name="comentarios"
                rows={4}
                value={formData.comentarios}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-forest-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Cuéntanos sobre tu proyecto, presupuesto, ubicación, etc."
              />
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 text-white font-semibold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
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
