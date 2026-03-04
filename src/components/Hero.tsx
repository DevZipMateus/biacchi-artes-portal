import { ArrowRight } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden px-4 sm:px-6"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-royal-dark/95 via-primary/90 to-primary/80" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10 py-8 sm:py-12">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 sm:mb-6 font-serif animate-fade-in leading-tight">
            BIACCHI ARTES EM METAL
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-6 sm:mb-8 leading-relaxed animate-slide-up font-light">
            Excelência em ferragens para artesanato desde 1988. Desenvolvemos soluções originais e de qualidade para transformar suas criações em obras de arte.
          </h2>
          <p className="text-base sm:text-lg text-accent font-medium mb-8 sm:mb-10 animate-slide-up">
            Tradição e qualidade
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up">
            <a
              href="#produtos"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gold-dark transition-colors duration-200 text-sm sm:text-base"
            >
              Conheça nossos produtos
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-primary-foreground/20 transition-colors duration-200 text-sm sm:text-base"
            >
              Nossa história
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-10 hidden lg:block">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary-foreground" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary-foreground" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary-foreground" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
