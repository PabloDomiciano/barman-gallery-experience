import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section
      className={cn(
        "relative h-screen flex items-center justify-center overflow-hidden",
        className
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1520694146360-85079777e456?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Bartender preparando drinks"
          className="w-full h-full object-cover object-center animate-pulse-subtle"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-500 text-xs font-medium mb-5 animate-fade-in">
            SERVIÇO PREMIUM DE BARTENDER
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-up text-balance">
            Arte em forma de <span className="text-amber-500">drinks</span> para
            o seu evento
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-up [animation-delay:200ms] text-balance">
            Transformamos bebidas em experiências únicas com uma abordagem
            personalizada para cada evento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up [animation-delay:400ms]">
            <Button
              asChild
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white"
            >
              <Link
                to="https://wa.me/44999194205?text=Oi!%20Gostaria%20de%20fazer%20um%20orçamento"
              >
                Entre em contato
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              <Link to="/galeria">Ver galeria</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse-subtle"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
