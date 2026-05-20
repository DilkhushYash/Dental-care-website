import React, { useEffect, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Patient",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1587&auto=format&fit=crop",
    content: "The most luxurious and pain-free dental experience I've ever had. The staff is incredibly attentive, and the results of my teeth whitening are stunning.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Patient",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1587&auto=format&fit=crop",
    content: "I had extreme dental anxiety before visiting Lumina. Their spa-like environment and gentle approach completely changed my perspective on dentistry.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Patient",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1661&auto=format&fit=crop",
    content: "From the moment you walk in, you're treated like VIP. My smile makeover exceeded all expectations. Thank you to the wonderful team!",
    rating: 5
  },
  {
    name: "David Thompson",
    role: "Patient",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop",
    content: "State-of-the-art facility with a team that truly cares. The digital scanning made my implant procedure seamless and incredibly precise.",
    rating: 5
  }
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 lg:py-20 bg-zinc-50 dark:bg-charcoal-800/30 overflow-hidden relative" id="testimonials">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-4 block"
            >
              Patient Stories
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold"
            >
              Smiles We've <span className="font-light italic text-primary-600 dark:text-primary-400">Transformed</span>
            </motion.h2>
          </div>
          
          <div className="flex gap-4">
            <button onClick={scrollPrev} className="w-12 h-12 rounded-full border border-charcoal-800/10 dark:border-white/10 flex items-center justify-center hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={scrollNext} className="w-12 h-12 rounded-full border border-charcoal-800/10 dark:border-white/10 flex items-center justify-center hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6 py-4">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6"
              >
                <div className="bg-white dark:bg-charcoal-800 rounded-2xl shadow-xl border border-black/5 dark:border-white/10 h-full p-8 relative group hover:-translate-y-2 transition-transform duration-500">
                  <Quote className="absolute top-8 right-8 w-12 h-12 text-primary-100 dark:text-primary-900/30 rotate-180 z-0" />
                  
                  <div className="relative z-10">
                    <div className="flex gap-1 mb-6 text-gold">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-charcoal-800/80 dark:text-zinc-300 mb-8 italic leading-relaxed min-h-[100px]">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-200 dark:border-primary-800">
                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold font-serif text-lg">{testimonial.name}</h4>
                        <p className="text-xs text-charcoal-800/60 dark:text-zinc-400 font-medium">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials;
