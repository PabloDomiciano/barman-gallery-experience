
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Acao from '../path/Acao.jpeg';
import { 
  ShoppingCart, 
  FileCheck, 
  Truck, 
  Clock, 
  Users, 
  CheckCircle,
  ArrowRight 
} from 'lucide-react';

const Approach = () => {
  const benefits = [
    {
      icon: <ShoppingCart className="h-6 w-6 text-amber-500" />,
      title: "Flexibilidade de orçamento",
      description: "Você controla os custos dos insumos de acordo com suas possibilidades."
    },
    {
      icon: <FileCheck className="h-6 w-6 text-amber-500" />,
      title: "Transparência total",
      description: "Lista detalhada de tudo o que você precisa comprar, sem surpresas."
    },
    {
      icon: <Truck className="h-6 w-6 text-amber-500" />,
      title: "Equipamentos profissionais",
      description: "Levamos coqueteleiras, colheres, baldes de gelo e tudo mais para o preparo."
    },
    {
      icon: <Clock className="h-6 w-6 text-amber-500" />,
      title: "Economia de tempo",
      description: "Fornecemos a lista de compras exata para facilitar sua organização."
    },
    {
      icon: <Users className="h-6 w-6 text-amber-500" />,
      title: "Personalização completa",
      description: "Adapte o cardápio de bebidas conforme as preferências dos seus convidados."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-amber-500" />,
      title: "Garantia de qualidade",
      description: "O melhor serviço de bartending com o orçamento que cabe no seu bolso."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero section */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-500 text-xs font-medium mb-5">
                METODOLOGIA
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Nossa Abordagem</h1>
              <p className="text-lg text-gray-300 mb-8 text-balance">
                Entenda como funcionam nossos serviços e como nossa metodologia única 
                proporciona mais flexibilidade e economia para o seu evento.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Main content section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <img 
                src={Acao} 
                alt="Bartenders em ação"
                className="rounded-2xl shadow-xl"
              />
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <span className="inline-block py-1 px-3 rounded-full bg-amber-100 dark:bg-amber-900/20 text-amber-800 dark:text-amber-500 text-xs font-medium mb-5">
                O MODELO DIFERENCIADO
              </span>
              <h2 className="text-3xl font-bold mb-6 text-balance">
                Nossa metodologia centrada na qualidade e na economia
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-balance">
                Nós temos uma abordagem um pouco diferente: nossos eventos são orçados com base 
                na mão de obra especializada. Trazemos todos os equipamentos necessários, como cubas 
                de vidro, coqueteleiras, colheres, pilões e todos os utensílios profissionais, deixando 
                a matéria-prima sob responsabilidade do cliente.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-balance">
                Acreditamos que assim você consiga fazer o melhor orçamento que caiba no seu bolso. 
                Produzimos uma relação detalhada de ingredientes com base na quantidade de convidados, 
                e você fica à vontade para ajustar conforme suas preferências e possibilidades.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-balance">
                Este modelo permite maior flexibilidade e controle de custos, ao mesmo tempo que 
                garantimos o mais alto padrão de serviço e apresentação. Você pode optar por produtos 
                premium ou alternativas mais acessíveis, tudo conforme sua necessidade.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* How it works section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-amber-100 dark:bg-amber-900/20 text-amber-800 dark:text-amber-500 text-xs font-medium mb-5">
              COMO FUNCIONA
            </span>
            <h2 className="text-3xl font-bold mb-6 text-balance">
              Processo simples e transparente
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-balance">
              Entenda como funciona nossa parceria, do primeiro contato até o dia do seu evento.
            </p>
          </AnimatedSection>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Line connector */}
              <div className="absolute left-16 top-0 bottom-0 w-1 bg-amber-200 dark:bg-amber-900/30"></div>
              
              {/* Steps */}
              <div className="space-y-12">
                <AnimatedSection className="relative flex gap-8">
                  <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center relative z-10 flex-shrink-0 mt-2">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Contato Inicial</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3 text-balance">
                      Entre em contato conosco informando a data, local, número de convidados e tipo de evento. 
                      Nesta fase inicial, também conversamos sobre suas preferências e expectativas.
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection className="relative flex gap-8" delay={100}>
                  <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center relative z-10 flex-shrink-0 mt-2">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Proposta e Orçamento</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3 text-balance">
                      Desenvolvemos uma proposta detalhada com o valor do serviço, número de bartenders necessários, 
                      cardápio sugerido de drinks e a lista completa de insumos a serem adquiridos, com quantidades.
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection className="relative flex gap-8" delay={200}>
                  <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center relative z-10 flex-shrink-0 mt-2">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ajustes e Personalização</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3 text-balance">
                      Você pode solicitar alterações no cardápio, ajustar a lista de insumos ou fazer qualquer 
                      adaptação para adequar ao seu orçamento e às preferências dos seus convidados.
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection className="relative flex gap-8" delay={300}>
                  <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center relative z-10 flex-shrink-0 mt-2">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Confirmação e Compras</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3 text-balance">
                      Após a aprovação, você efetua a reserva da data e fica responsável pela compra dos insumos 
                      conforme a lista fornecida. Nos colocamos à disposição para tirar dúvidas sobre produtos.
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection className="relative flex gap-8" delay={400}>
                  <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center relative z-10 flex-shrink-0 mt-2">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Execução do Evento</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3 text-balance">
                      No dia, nossa equipe chega com antecedência, trazendo todos os equipamentos necessários. 
                      Montamos a estrutura, organizamos os insumos e garantimos um serviço impecável do início ao fim.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-amber-100 dark:bg-amber-900/20 text-amber-800 dark:text-amber-500 text-xs font-medium mb-5">
              VANTAGENS
            </span>
            <h2 className="text-3xl font-bold mb-6 text-balance">
              Benefícios do nosso modelo
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-balance">
              Descubra porque nossa abordagem tem conquistado tantos clientes que buscam 
              qualidade e controle de custos.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection 
                key={index} 
                delay={index * 100}
                className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto p-8 md:p-10 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl text-amber-500">"</span>
                </div>
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic mb-8 text-balance">
                  A abordagem deles foi exatamente o que precisávamos para nosso casamento. 
                  Conseguimos adequar o cardápio ao nosso orçamento sem abrir mão da qualidade 
                  e da apresentação impecável. O serviço dos bartenders foi excepcional e todos 
                  os convidados comentaram sobre os drinks deliciosos!
                </p>
                <div>
                  <h4 className="font-semibold">Mariana e Pedro</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Casamento em Abril de 2023</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6 text-white text-balance">
                Pronto para orçar seu evento com nossa abordagem diferenciada?
              </h2>
              <p className="text-gray-300 mb-8 text-balance">
                Entre em contato conosco para discutir seu evento e descobrir como podemos 
                criar uma experiência incrível que caiba no seu orçamento.
              </p>
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link to="https://wa.me/44999194205?text=Oi!%20Gostaria%20de%20fazer%20um%20orçamento">
                  Solicitar orçamento agora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Approach;
