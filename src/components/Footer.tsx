import logo from '@/assets/logo-biacchi.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8 sm:py-12">
      <div className="container-custom px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <img
              src={logo}
              alt="BIACCHI ARTES EM METAL"
              className="h-12 sm:h-16 w-auto mb-3 sm:mb-4"
            />
            <p className="text-background/70 text-xs sm:text-sm">
              Tradição e qualidade em ferragens para artesanato desde 1988.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-background mb-3 sm:mb-4 text-sm sm:text-base">Links rápidos</h3>
            <nav className="space-y-1.5 sm:space-y-2">
              <a href="#inicio" className="block text-background/70 hover:text-accent transition-colors text-xs sm:text-sm">
                Início
              </a>
              <a href="#sobre" className="block text-background/70 hover:text-accent transition-colors text-xs sm:text-sm">
                Sobre
              </a>
              <a href="#produtos" className="block text-background/70 hover:text-accent transition-colors text-xs sm:text-sm">
                Produtos
              </a>
              <a href="#contato" className="block text-background/70 hover:text-accent transition-colors text-xs sm:text-sm">
                Contato
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-background mb-3 sm:mb-4 text-sm sm:text-base">Contato</h3>
            <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-background/70">
              <p>CNPJ: 25.096.300/0001-47</p>
              <p>Telefone: (54) 3223-5788</p>
              <p>WhatsApp: (54) 99272-1618</p>
              <p className="break-all">biacchiartes@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 sm:pt-8 text-center">
          <p className="text-background/60 text-xs sm:text-sm">
            © {currentYear} BIACCHI ARTES EM METAL. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
