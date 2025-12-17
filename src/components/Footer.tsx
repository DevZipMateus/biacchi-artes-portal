import logo from '@/assets/logo-biacchi.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <img
              src={logo}
              alt="BIACCHI ARTES EM METAL"
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-background/70 text-sm">
              Tradição e qualidade em ferragens para artesanato desde 1988.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-background mb-4">Links rápidos</h3>
            <nav className="space-y-2">
              <a href="#inicio" className="block text-background/70 hover:text-accent transition-colors text-sm">
                Início
              </a>
              <a href="#sobre" className="block text-background/70 hover:text-accent transition-colors text-sm">
                Sobre
              </a>
              <a href="#produtos" className="block text-background/70 hover:text-accent transition-colors text-sm">
                Produtos
              </a>
              <a href="#contato" className="block text-background/70 hover:text-accent transition-colors text-sm">
                Contato
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-background mb-4">Contato</h3>
            <div className="space-y-2 text-sm text-background/70">
              <p>CNPJ: 25.096.300/0001-47</p>
              <p>Telefone: (54) 3223-5788</p>
              <p>WhatsApp: (54) 99272-1618</p>
              <p>biacchiartes@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {currentYear} BIACCHI ARTES EM METAL. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
