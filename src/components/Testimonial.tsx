
import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  name: string;
  rating: number;
  date: string;
  text: string;
  className?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  rating,
  date,
  text,
  className,
}) => {
  return (
    <div className={cn(
      "p-6 rounded-2xl bg-white/80 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200 dark:border-gray-800",
      "hover:shadow-lg transition-all duration-300 ease-in-out",
      className
    )}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
        </div>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star 
              key={index} 
              size={16} 
              className={cn(
                "transition-colors",
                index < rating 
                  ? "text-amber-500 fill-amber-500" 
                  : "text-gray-300 dark:text-gray-600"
              )} 
            />
          ))}
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 italic">"{text}"</p>
    </div>
  );
};

export default Testimonial;
