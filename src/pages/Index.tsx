
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import GalleryImage from '@/components/GalleryImage';
import Testimonial from '@/components/Testimonial';

/*Imagens*/ 
import CaipirinhaMaracuja from '../assets/drinks/CaipirinhaMaracuja.jpeg';
import BatidinhaMorango from '../assets/drinks/BatidinhaMorango.jpeg';
import BatidinhaMaracuja from '../assets/drinks/BatidinhaMaracuja.jpeg';

import { Link } from 'react-router-dom';
import { ArrowRight, ChefHat, Sparkles, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Banner from "../assets/Banner.jpeg";

const Index = () => {
  const features = [
    {
      icon: <ChefHat className="h-10 w-10 text-amber-500" />,
      title: "Profissionais Experientes",
      description: "Nossa equipe é composta por bartenders com anos de experiência em eventos de todos os portes."
    },
    {
      icon: <Sparkles className="h-10 w-10 text-amber-500" />,
      title: "Drinks Personalizados",
      description: "Criamos cardápios exclusivos que se adaptam ao estilo e tema do seu evento."
    },
    {
      icon: <Clock className="h-10 w-10 text-amber-500" />,
      title: "Serviço Eficiente",
      description: "Planejamento cuidadoso para garantir que seus convidados não esperem por suas bebidas."
    },
    {
      icon: <Users className="h-10 w-10 text-amber-500" />,
      title: "Atendimento Completo",
      description: "Do orçamento ao último drink servido, cuidamos de todos os detalhes para você."
    }
  ];

  const galleryImages = [
    {
      src: BatidinhaMorango,
      alt: "Batidinha de Morango",
      category: "drinks"
    },
    {
      src: CaipirinhaMaracuja,
      alt: "Caipirinha de Maracuja",
      category: "drinks"
    },
    {
      src: BatidinhaMaracuja,
      alt: "Batidinha de Maracuja",
      category: "drinks"
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Feature Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-amber-100 dark:bg-amber-900/20 text-amber-800 dark:text-amber-500 text-xs font-medium mb-5">
              NOSSOS DIFERENCIAIS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Elevando a experiência do seu evento
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-balance">
              Criamos momentos únicos através de bebidas excepcionais e um serviço impecável.
              Nossa paixão está nos detalhes que fazem toda a diferença.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection 
                key={index} 
                delay={index * 100}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-5">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* About/Approach Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="order-2 lg:order-1">
              <span className="inline-block py-1 px-3 rounded-full bg-amber-100 dark:bg-amber-900/20 text-amber-800 dark:text-amber-500 text-xs font-medium mb-5">
                NOSSA ABORDAGEM
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Uma forma diferente de pensar em bartending
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-balance">
                Nós temos uma abordagem um pouco diferente: nossos eventos são orçados com base 
                na mão de obra especializada. Trazemos todos os equipamentos necessários para o nosso trabalho, 
                deixando a matéria-prima sob responsabilidade do cliente.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-balance">
                Acreditamos que assim você consiga fazer o melhor orçamento que caiba no seu bolso. 
                Produzimos uma relação detalhada de ingredientes com base na quantidade de convidados, 
                e você fica à vontade para ajustar conforme suas preferências e possibilidades.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-8 text-balance">
                Este modelo permite maior flexibilidade e controle de custos, ao mesmo tempo que 
                garantimos o mais alto padrão de serviço e apresentação.
              </p>
              
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link to="/abordagem">
                  Saiba mais sobre nossa abordagem
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedSection>
            
            <AnimatedSection className="order-1 lg:order-2 animation-delay-200">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full bg-amber-500/20 rounded-2xl"></div>
                <img 
                  src={Banner}
                  alt="Barman preparando drinks"
                  className="rounded-2xl shadow-lg relative z-10"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Gallery Preview Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-amber-100 dark:bg-amber-900/20 text-amber-800 dark:text-amber-500 text-xs font-medium mb-5">
              GALERIA
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Um gostinho do nosso trabalho
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-balance">
              Conheça um pouco do nosso trabalho através dessas imagens. Cada drink é uma 
              obra de arte preparada com precisão e paixão.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {galleryImages.map((image, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <GalleryImage src={image.src} alt={image.alt} className="h-64 md:h-80" />
              </AnimatedSection>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
              <Link to="/galeria">
                Ver galeria completa
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-amber-100 dark:bg-amber-900/20 text-amber-800 dark:text-amber-500 text-xs font-medium mb-5">
              CLIENTES SATISFEITOS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              O que nossos clientes dizem
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-balance">
              A satisfação dos nossos clientes é nossa maior conquista. Confira alguns depoimentos 
              de quem já viveu a experiência BarmanGallery.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <AnimatedSection delay={100}>
              <Testimonial 
                name="Aparecida dos Santos" 
                rating={5} 
                date="28/12/2024" 
                text="Contratei para meu casamento e foi um sucesso absoluto! Todos os convidados elogiaram os drinks e o atendimento dos bartenders. Profissionais educados e competentes."
              />
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <Testimonial 
                name="Maria Oliveira" 
                rating={5} 
                date="02/06/2023" 
                text="A abordagem deles de trazer os equipamentos e nós comprarmos os ingredientes foi perfeita para nosso orçamento. Os drinks estavam incríveis e a apresentação impecável."
              />
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <Testimonial 
                name="Empresa NextAge" 
                rating={5} 
                date="22/11/2024" 
                text="Serviço excelente na confraternização da minha empresa. A lista de compras que eles forneceram foi muito clara e economizamos bastante seguindo as orientações deles."
              />
            </AnimatedSection>
          </div>
          
          <div className="text-center">
            <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
              <Link to="/avaliacoes">
                Ver todas as avaliações
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-500 text-xs font-medium mb-5">
              VAMOS TRABALHAR JUNTOS?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-balance">
              Transforme seu evento com uma experiência única de bartending
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-balance">
              Entre em contato para saber mais sobre nossos serviços, solicitar um orçamento 
              ou esclarecer qualquer dúvida. Estamos prontos para atender você!
            </p>
            
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              <Link to="/contato">
                Solicitar orçamento
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
