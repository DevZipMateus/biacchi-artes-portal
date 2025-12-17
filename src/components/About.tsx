import { Target, Eye, Heart, Award, Users, Lightbulb } from 'lucide-react';

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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-4">
            Sobre a empresa
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* History */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground font-serif">Nossa história</h3>
            <p className="text-muted-foreground leading-relaxed">
              Nascida em 06 de março de 2015, a BiacchiArtes em Metal tem sua origem na antiga BassaniArtes em Metal, fundada em 1988 para dar continuidade a uma linha de produtos que antes faziam parte da Metalúrgica Eberle.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nossos produtos são oriundos da internacionalmente conhecida Metalúrgica Abramo Eberle S/A (MAESA), que por muito tempo foi a maior e mais importante indústria metalúrgica da cidade de Caxias do Sul.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A BiacchiArtes é especializada no desenvolvimento de soluções originais e de qualidade focada no segmento de artesanato, sempre pensando na inovação, qualidade, acabamento e valorização do produto final.
            </p>
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-semibold text-foreground font-serif mb-6">O trevo de quatro folhas</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A dobradiça Trevo de 4 Folhas é estampada em alguns produtos da BiacchiArtes. Segundo a lenda, no ano de 200 a.C., mestres e sacerdotes na Inglaterra e Irlanda consideravam o trevo de quatro folhas sagrado por formar a imagem da Cruz.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cada folha possui um significado especial: <span className="text-primary font-medium">Esperança, Fé, Amor e Sorte</span>. Nós da BiacchiArtes desejamos que você, nosso cliente amigo, tenha tudo isso na vida pessoal e profissional!
            </p>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card rounded-2xl p-8 shadow-soft hover-lift">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground font-serif mb-4">Missão</h3>
            <p className="text-muted-foreground">
              Desenvolver, produzir e comercializar ferragens para artesanato com acabamento e originalidade.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-soft hover-lift">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground font-serif mb-4">Visão</h3>
            <p className="text-muted-foreground">
              Ser referência no mercado nacional e internacional na fabricação de soluções especiais para atender com variedade e qualidade.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-soft hover-lift">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground font-serif mb-4">Valores</h3>
            <div className="flex flex-wrap gap-2">
              {values.map((value) => (
                <span
                  key={value.label}
                  className="inline-flex items-center gap-1 bg-secondary px-3 py-1 rounded-full text-sm text-muted-foreground"
                >
                  {value.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Market */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-semibold text-primary-foreground font-serif mb-4">
            Mercado de atuação
          </h3>
          <p className="text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Atuamos no mercado de ferragens para artesanato, lojas e distribuidores de ferragens, indústrias de caixas para presentes e indústrias moveleiras. Presente em todo território brasileiro e também no mercado internacional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
