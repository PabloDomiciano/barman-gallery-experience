
import React, { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  animation?: 'fade-in' | 'fade-up' | 'slide-in';
}

const AnimatedSection = ({
  children,
  className,
  delay = 0,
  threshold = 0.1,
  animation = 'fade-up',
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setTimeout(() => {
            section.classList.add('opacity-100');
            
            if (animation === 'fade-up') {
              section.classList.add('translate-y-0');
            } else if (animation === 'slide-in') {
              section.classList.add('translate-x-0');
            }
          }, delay);
          
          hasAnimated.current = true;
          observer.unobserve(section);
        }
      });
    }, observerOptions);
    
    observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, [delay, threshold, animation]);
  
  return (
    <div
      ref={sectionRef}
      className={cn(
        'transition-all duration-700 ease-out opacity-0',
        animation === 'fade-up' && '-translate-y-10',
        animation === 'slide-in' && '-translate-x-20',
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
