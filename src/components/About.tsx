import { Target, Eye, Heart, Award, Users, Lightbulb } from 'lucide-react';
import trevo1 from '@/assets/product-dobradica-trevo-1.png';
import trevo2 from '@/assets/product-dobradica-trevo-2.png';
import trevo3 from '@/assets/product-dobradica-trevo-3.png';

const About = () => {
  const values = [
    { icon: Users, label: 'Satisfação do cliente' },
    { icon: Eye, label: 'Transparência' },
    { icon: Award, label: 'Trabalho' },
    { icon: Target, label: 'Eficiência' },
    { icon: Lightbulb, label: 'Criatividade' },
    { icon: Heart, label: 'Integridade' },
  ];

  return (
    <section id="sobre" className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground font-serif mb-4">
            Sobre a empresa
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* History */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-10 sm:mb-16 items-center">
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground font-serif">Tradição e Excelência em cada detalhe</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Nascida em 06 de março de 2015, a BiacchiArtes em Metal tem sua origem na antiga BassaniArtes em Metal, fundada em 1988 para dar continuidade a uma linha de produtos que antes faziam parte da Metalúrgica Eberle.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Nossos produtos são oriundos da internacionalmente conhecida Metalúrgica Abramo Eberle S/A (MAESA), que por muito tempo foi a maior e mais importante indústria metalúrgica da cidade de Caxias do Sul.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              A BiacchiArtes é especializada no desenvolvimento de soluções originais e de qualidade focada no segmento de artesanato, sempre pensando na inovação, qualidade, acabamento e valorização do produto final.
            </p>
          </div>
          
          <div className="relative order-1 lg:order-2">
            {/* Dobradiça Trevo Collage */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <img
                src={trevo1}
                alt="Dobradiça Trevo de 4 Folhas - vista frontal"
                className="rounded-xl sm:rounded-2xl shadow-strong w-full h-auto object-cover col-span-2"
              />
              <img
                src={trevo2}
                alt="Dobradiças Trevo de 4 Folhas - conjunto"
                className="rounded-xl sm:rounded-2xl shadow-strong w-full h-auto object-cover"
              />
              <img
                src={trevo3}
                alt="Dobradiça Trevo de 4 Folhas - detalhe"
                className="rounded-xl sm:rounded-2xl shadow-strong w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-accent rounded-xl sm:rounded-2xl -z-10 hidden sm:block" />
          </div>
        </div>

        {/* Trevo Story */}
        <div className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-soft mb-10 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-semibold text-foreground font-serif mb-4 sm:mb-6">O trevo de quatro folhas</h3>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              A dobradiça Trevo de 4 Folhas é estampada em alguns produtos da BiacchiArtes. Segundo a lenda, no ano de 200 a.C., mestres e sacerdotes na Inglaterra e Irlanda consideravam o trevo de quatro folhas sagrado por formar a imagem da Cruz.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Cada folha possui um significado especial: <span className="text-primary font-medium">Esperança, Fé, Amor e Sorte</span>. Nós da BiacchiArtes desejamos que você, nosso cliente amigo, tenha tudo isso na vida pessoal e profissional!
            </p>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-16">
          <div className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-soft hover-lift">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <Target className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground font-serif mb-3 sm:mb-4">Missão</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Desenvolver, produzir e comercializar ferragens para artesanato com acabamento e originalidade.
            </p>
          </div>

          <div className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-soft hover-lift">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground font-serif mb-3 sm:mb-4">Visão</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Ser referência no mercado nacional e internacional na fabricação de soluções especiais para atender com variedade e qualidade.
            </p>
          </div>

          <div className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-soft hover-lift sm:col-span-2 md:col-span-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground font-serif mb-3 sm:mb-4">Valores</h3>
            <div className="flex flex-wrap gap-2">
              {values.map((value) => (
                <span
                  key={value.label}
                  className="inline-flex items-center gap-1 bg-secondary px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-muted-foreground"
                >
                  {value.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Market */}
        <div className="bg-primary rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-primary-foreground font-serif mb-3 sm:mb-4">
            Mercado de atuação
          </h3>
          <p className="text-sm sm:text-base text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Atuamos no mercado de ferragens para artesanato, lojas e distribuidores de ferragens, indústrias de caixas para presentes e indústrias moveleiras. Presente em todo território brasileiro e também no mercado internacional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
