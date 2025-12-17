import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-4">
            Entre em contato
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você com atendimento de qualidade, sistema de compras online e entrega rápida.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="text-xl font-semibold text-foreground font-serif mb-6">
                Informações de contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Telefone</p>
                    <p className="text-muted-foreground">Fixo: (54) 3223-5788</p>
                    <a 
                      href="https://wa.me/5554992721618" 
                      className="text-primary hover:underline"
                    >
                      WhatsApp: (54) 99272-1618
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">E-mail</p>
                    <a 
                      href="mailto:biacchiartes@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      biacchiartes@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Endereço</p>
                    <p className="text-muted-foreground">
                      Rua General Osório, 44<br />
                      Bairro São Pelegrino<br />
                      CEP: 95010-170<br />
                      Caxias do Sul - RS - Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Horário de funcionamento</p>
                    <p className="text-muted-foreground">
                      Segunda a Sexta<br />
                      7:15 às 11:50 - 13:00 às 17:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="text-xl font-semibold text-foreground font-serif mb-6">
                Redes sociais
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/BiacchiArtes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300 text-primary"
                  aria-label="Facebook da BIACCHI ARTES EM METAL"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/biacchiartes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300 text-primary"
                  aria-label="Instagram da BIACCHI ARTES EM METAL"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-card rounded-2xl overflow-hidden shadow-soft h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.7234567890!2d-51.1788!3d-29.1678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951eb1234567890%3A0x0!2sRua%20General%20Os%C3%B3rio%2C%2044%20-%20S%C3%A3o%20Pelegrino%2C%20Caxias%20do%20Sul%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da BIACCHI ARTES EM METAL"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
