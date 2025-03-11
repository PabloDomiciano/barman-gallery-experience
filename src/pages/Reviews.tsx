
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import Testimonial from '@/components/Testimonial';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Reviews = () => {
  const testimonials = [
    {
      name: "Aparecida dos Santos",
      rating: 5,
      date: "28/12/2024",
      text: "Contratei para meu casamento e foi um sucesso absoluto! Todos os convidados elogiaram os drinks e o atendimento dos bartenders. Profissionais educados e competentes."
    },
    {
      name: "Maria Oliveira",
      rating: 5,
      date: "02/06/2023",
      text: "A abordagem deles de trazer os equipamentos e nós comprarmos os ingredientes foi perfeita para nosso orçamento. Os drinks estavam incríveis e a apresentação impecável."
    },
    {
      name: "Empresa NextAge",
      rating: 5,
      date: "22/11/2024",
      text: "Serviço excelente na confraternização da nossa empresa. A lista de compras que eles forneceram foi muito clara e economizamos bastante seguindo as orientações deles."
    },
    {
      name: "Farm Life",
      rating: 5,
      date: "30/11/2024",
      text: "Confraternização da nossa empresa. Os bartenders são verdadeiros artistas e sabem como encantar os convidados. Super recomendo!"
    },
    {
      name: "Fernando Almeida",
      rating: 5,
      date: "15/09/2023",
      text: "Contratamos para um evento corporativo e superou todas as expectativas. Profissionalismo, pontualidade e drinks excepcionais. Todos os executivos ficaram impressionados."
    },
    {
      name: "Carolina Santos",
      rating: 5,
      date: "30/09/2023",
      text: "O modelo de eles trazerem os equipamentos e nós comprarmos os insumos foi perfeito para nosso evento. Conseguimos personalizar tudo conforme nosso gosto e orçamento."
    },
    {
      name: "Roberto Pereira",
      rating: 5,
      date: "12/10/2023",
      text: "Celebramos nosso aniversário de 25 anos de casamento com um serviço impecável. Os bartenders foram muito atenciosos e os drinks estavam divinos. Todos os convidados comentaram!"
    },
    {
      name: "Luciana Martins",
      rating: 5,
      date: "05/11/2023",
      text: "Profissionais incríveis! A apresentação dos drinks era digna de foto e o sabor superou todas as expectativas. A flexibilidade no orçamento foi um diferencial."
    },
    {
      name: "Rodrigo Neves",
      rating: 5,
      date: "08/03/2025",
      text: "Contratamos para um evento na empresa e foi um grande sucesso. O cardápio foi adaptado ao nosso tema e os bartenders foram extremamente profissionais."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header section */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-500 text-xs font-medium mb-5">
                DEPOIMENTOS
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                O que nossos clientes dizem
              </h1>
              <p className="text-lg text-gray-300 text-balance">
                Leia os depoimentos de quem já viveu a experiência +Drinks e 
                descobriu como podemos transformar seu evento.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Testimonials grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection 
                key={index} 
                delay={(index % 3) * 100}
              >
                <Testimonial 
                  name={testimonial.name} 
                  rating={testimonial.rating} 
                  date={testimonial.date} 
                  text={testimonial.text}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Leave review CTA */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-balance">
                Trabalhou conosco? Compartilhe sua experiência!
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-balance">
                Sua opinião é muito importante para nós. Se você já foi nosso cliente,
                adoraríamos ouvir sobre sua experiência.
              </p>
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link to="https://wa.me/44999194205?text=Oii!%20Gostaria%20de%20deixar%20meu%20depoimento!">
                  Deixar um depoimento
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6 text-white text-balance">
                Pronto para viver essa experiência?
              </h2>
              <p className="text-gray-300 mb-8 text-balance">
                Entre em contato conosco e descubra como podemos transformar seu evento
                com drinks excepcionais e um serviço impecável.
              </p>
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link to="https://wa.me/44999194205?text=Oi!%20Gostaria%20de%20fazer%20um%20orçamento">
                  Solicitar orçamento
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

export default Reviews;
