
const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=500&fit=crop&crop=center"
                alt="Equipo Nex Modular Homes"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-nex-primary text-white px-6 py-3 rounded-2xl font-inter font-semibold shadow-lg">
              +50 casas entregadas
            </div>
          </div>
          
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-nex-text mb-6">
              ¿Quiénes somos?
            </h2>
            
            <div className="space-y-4 text-nex-text font-inter text-lg leading-relaxed">
              <p>
                En <span className="font-semibold text-nex-primary">Nex Modular Homes</span> distribuimos 
                casas modulares expandibles por toda España. Nuestras viviendas 
                no requieren cimentación ni obras complejas.
              </p>
              
              <p>
                Queremos acompañarte durante todo el proceso: desde la elección del modelo y la 
                personalización hasta la entrega final.
              </p>
              
              <div className="bg-wood-50 border-l-4 border-nex-secondary p-4 rounded-r-2xl">
                <p className="font-medium text-nex-text">
                  Además, disponemos de una casa piloto única en España situada en Campo Real (Madrid) 
                  para que puedas ver en persona cómo se vive en una casa modular.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
