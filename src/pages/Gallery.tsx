
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

/* Import de imagens*/
import GalleryImage from '@/components/GalleryImage';
import CaipirinhaMaracuja from '../path/drinks/CaipirinhaMaracuja.jpeg';
import CaipirinhaVinho from '../path/drinks/CaipirinhaVinho.jpeg';
import BatidinhaMaracuja from '../path/drinks/BatidinhaMaracuja.jpeg';
import BatidinhaMorango from '../path/drinks/BatidinhaMorango.jpeg';
import Familia from '../path/eventos/Familia.jpeg';
import Confraternizacao from '../path/eventos/Confraternizacao.jpeg';
import Casamento from '../path/eventos/Casamento.jpeg';
import Abacaxi from '../path/ingredientes/Abacaxi.jpeg';
import Morango from '../path/ingredientes/Morango.jpeg';
import Melancia from '../path/ingredientes/Melancia.jpeg';
import Limao from '../path/ingredientes/Limao.jpeg';
import Eu from '../path/eventos/Trabalhando.jpeg';
import Aniversario from '../path/eventos/Aniversario.jpeg';
import AniversarioQuinze from '../path/eventos/AniversarioQuinze.jpeg';
import CasamentoDois from '../path/eventos/CasamentoDois.jpeg';

import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const galleryItems = [
    {
      src: CaipirinhaVinho,
      alt: "Caipirinha de Vinho",
      category: "drinks"
    },
    {
      src: CaipirinhaMaracuja,
      alt: "Caipirinha de Maracuja",
      category: "drinks"
    },
    {
      src: Confraternizacao,
      alt: "Mesa de bar com utensílios",
      category: "setup"
    },
    {
      src:Familia,
      alt: "Familía",
      category: "setup"
    },
    {
      src: BatidinhaMorango,
      alt: "Batidinha de Morango",
      category: "drinks"
    },
    {
      src: BatidinhaMaracuja,
      alt: "Batidinha de Maracuja",
      category: "drinks"
    },
    {
      src: Eu,
      alt: "Servindo drinks",
      category: "evento"
    },
    {
      src: Casamento,
      alt: "Casamento no Monumentalle",
      category: "evento"
    },
    {
      src: CasamentoDois,
      alt: "Casamento em Graciosa",
      category: "evento"
    },
    {
      src: AniversarioQuinze,
      alt: "Aniversário de 15 anos",
      category: "evento"
    },
    {
      src: Aniversario,
      alt: "Aniversário de 18 anos",
      category: "evento"
    },
    {
      src: Abacaxi,
      alt: "Abacaxi",
      category: "ingredientes"
    },
    {
      src: Morango,
      alt: "Morango",
      category: "ingredientes"
    },
    {
      src: Limao,
      alt: "Limão",
      category: "ingredientes"
    },
    {
      src: Melancia,
      alt: "Melancia",
      category: "ingredientes"
    },
  ];

  const [activeCategory, setActiveCategory] = useState("todos");
  
  const categories = [
    { id: "todos", name: "Todos" },
    { id: "drinks", name: "Drinks" },
    { id: "setup", name: "Setup" },
    { id: "evento", name: "Eventos" },
    { id: "ingredientes", name: "Ingredientes" }
  ];

  const filteredImages = activeCategory === "todos" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header section */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Galeria</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto text-balance">
              Explore nossa coleção de imagens e inspire-se para o seu próximo evento.
              Cada foto conta uma história de sabor, criatividade e profissionalismo.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Filter section */}
      <section className="py-10 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={activeCategory === category.id 
                  ? "bg-amber-600 hover:bg-amber-700" 
                  : "border-gray-300 dark:border-gray-700"}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery grid */}
      <section className="py-10 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((item, index) => (
              <AnimatedSection key={index} delay={index % 3 * 100}>
                <div className="group relative overflow-hidden">
                  <GalleryImage 
                    src={item.src} 
                    alt={item.alt}
                    className="h-72 md:h-80"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm">{item.alt}</p>
                    <span className="text-xs text-amber-400">{item.category}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-balance">
              Pronto para ter drinks espetaculares no seu evento?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto text-balance">
              Nossos bartenders estão prontos para criar uma experiência única para você e seus convidados.
            </p>
            <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
              <Link to="/contato">Solicitar orçamento</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Gallery;
