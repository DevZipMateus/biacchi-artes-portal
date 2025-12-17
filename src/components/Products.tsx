import { Wrench, CircleDot, Lock, Square, Link, Grip, Triangle, ScanLine } from 'lucide-react';
import hingesImg from '@/assets/products-hinges.jpg';
import nailsImg from '@/assets/products-nails.jpg';
import boxImg from '@/assets/products-box.jpg';

const Products = () => {
  const products = [
    {
      icon: CircleDot,
      name: 'Cravos',
      description: 'Cravos em aço e latão com diversos banhos para acabamento perfeito.',
    },
    {
      icon: Square,
      name: 'Dobradiças',
      description: 'Dobradiças especiais em aço e latão, incluindo a exclusiva Trevo de 4 Folhas.',
    },
    {
      icon: Lock,
      name: 'Fechos',
      description: 'Fechos de qualidade em aço e latão com variados acabamentos.',
    },
    {
      icon: Wrench,
      name: 'Prego Balmaz',
      description: 'Pregos Balmaz tradicionais em aço e latão para artesanato.',
    },
    {
      icon: Triangle,
      name: 'Cantoneiras',
      description: 'Cantoneiras em aço para proteção e acabamento de cantos.',
    },
    {
      icon: Link,
      name: 'Correntes',
      description: 'Correntes decorativas em aço para diversos projetos artesanais.',
    },
    {
      icon: Grip,
      name: 'Grampos',
      description: 'Grampos em aço de alta qualidade para fixações seguras.',
    },
    {
      icon: ScanLine,
      name: 'Ponteiras e parafusos',
      description: 'Ponteiras, parafusos em aço e pezinhos egípcios em zamak.',
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-4">
            Nossos produtos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ferragens para artesanato com tradição e qualidade. Todos os produtos disponíveis em diversos banhos.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6" />
        </div>

        {/* Gallery */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-soft"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-card border border-border rounded-2xl p-6 hover-lift cursor-pointer"
            >
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-300">
                <product.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground font-serif mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {product.description}
              </p>
            </div>
          ))}
        </div>

        {/* Materials Info */}
        <div className="bg-secondary rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground font-serif mb-4">
                Materiais disponíveis
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">Aço com diversos banhos</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">Latão com acabamentos variados</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">Zamak (pezinhos egípcios)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground font-serif mb-4">
                Diferenciais
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-muted-foreground">Qualidade comprovada desde 1988</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-muted-foreground">Produtos originais e exclusivos</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-muted-foreground">Entrega para todo o Brasil e exterior</span>
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
