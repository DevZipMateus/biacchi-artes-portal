import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logo from '@/assets/logo-biacchi.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background shadow-soft py-2' : 'bg-background/95 py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#inicio" className="flex items-center">
          <img
            src={logo}
            alt="BIACCHI ARTES EM METAL - Tradição e qualidade em ferragens para artesanato"
            className="h-12 md:h-16 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground hover:text-primary font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5554992721618"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium hover:bg-royal-dark transition-colors duration-200"
          >
            <Phone size={18} />
            Fale conosco
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-border shadow-soft">
          <div className="container-custom py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary font-medium py-2 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5554992721618"
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-lg font-medium hover:bg-royal-dark transition-colors duration-200"
            >
              <Phone size={18} />
              Fale conosco
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
