import dobradicaTrevoImg from '@/assets/dobradica-trevo.png';
import hingesImg from '@/assets/products-hinges.jpg';
import nailsImg from '@/assets/products-nails.jpg';
import boxImg from '@/assets/products-box.jpg';
import cravosImg from '@/assets/product-cravos.png';
import dobradicasImg from '@/assets/product-dobradicas.png';
import fechosImg from '@/assets/product-fechos.png';
import cantoneirasImg from '@/assets/product-cantoneiras.png';
import correntesImg from '@/assets/product-correntes.png';
import gramposImg from '@/assets/product-grampos.png';
import parafusosImg from '@/assets/product-parafusos.png';

const Products = () => {
  const products = [
    {
      name: 'Cravos',
      description: 'Cravos em aço e latão com diversos banhos para acabamento perfeito.',
      image: cravosImg,
    },
    {
      name: 'Dobradiças',
      description: 'Dobradiças especiais em aço e latão, incluindo a exclusiva Trevo de 4 Folhas.',
      image: dobradicaTrevoImg,
    },
    {
      name: 'Fechos',
      description: 'Fechos de qualidade em aço e latão com variados acabamentos.',
      image: fechosImg,
    },
    {
      name: 'Prego Balmaz',
      description: 'Pregos Balmaz tradicionais em aço e latão para artesanato.',
      image: gramposImg,
    },
    {
      name: 'Cantoneiras',
      description: 'Cantoneiras em aço para proteção e acabamento de cantos.',
      image: cantoneirasImg,
    },
    {
      name: 'Correntes',
      description: 'Correntes decorativas em aço para diversos projetos artesanais.',
      image: correntesImg,
    },
    {
      name: 'Grampos',
      description: 'Grampos em aço de alta qualidade para fixações seguras.',
      image: gramposImg,
    },
    {
      name: 'Ponteiras e parafusos',
      description: 'Ponteiras, parafusos em aço e pezinhos egípcios em zamak.',
      image: parafusosImg,
    },
  ];

  const gallery = [
    { src: hingesImg, alt: 'Dobradiças decorativas em latão e aço com acabamento refinado' },
    { src: nailsImg, alt: 'Cravos e pregos decorativos em metal para artesanato' },
    { src: boxImg, alt: 'Caixa de madeira artesanal com ferragens decorativas em latão' },
  ];

  return (
    <section id="produtos" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground font-serif mb-3 sm:mb-4">
            Nossos produtos
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Ferragens para artesanato com tradição e qualidade. Todos os produtos disponíveis em diversos banhos.
          </p>
          <div className="w-20 sm:w-24 h-1 bg-accent mx-auto rounded-full mt-4 sm:mt-6" />
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl sm:rounded-2xl shadow-soft"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-12">
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative overflow-hidden border border-border rounded-xl sm:rounded-2xl hover-lift cursor-pointer bg-cover bg-center"
              style={{ backgroundImage: `url(${product.image})` }}
            >
              <div className="absolute inset-0 bg-foreground/50 group-hover:bg-foreground/60 transition-colors duration-300 rounded-xl sm:rounded-2xl" />
              <div className="relative z-10 p-4 sm:p-6">
                <h3 className="text-sm sm:text-lg font-semibold font-serif mb-1 sm:mb-2 text-white">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm line-clamp-3 text-white/80">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Materials Info */}
        <div className="bg-secondary rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12">
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground font-serif mb-3 sm:mb-4">
                Materiais disponíveis
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">Aço com diversos banhos</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">Latão com acabamentos variados</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">Zamak (pezinhos egípcios)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground font-serif mb-3 sm:mb-4">
                Diferenciais
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">Qualidade comprovada desde 1988</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">Produtos originais e exclusivos</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">Entrega para todo o Brasil e exterior</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
