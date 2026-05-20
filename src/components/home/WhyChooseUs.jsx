import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Heart, Camera, CreditCard, Activity, Coffee } from 'lucide-react';

const AnimatedCounter = ({ end, duration = 2.5, separator = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame;
    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / (duration * 1000), 1);
      // easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  const formattedCount = separator ? count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator) : count;

  return <span>{formattedCount}</span>;
};

const features = [
  { icon: Award, title: "Certified Dentists", desc: "Top-tier specialists with international training and decades of combined experience." },
  { icon: Heart, title: "Pain-Free Treatment", desc: "Advanced anesthesia and gentle techniques for a completely comfortable experience." },
  { icon: Camera, title: "Digital Scanning", desc: "No more messy impressions. We use 3D digital scanners for ultimate precision." },
  { icon: CreditCard, title: "Affordable Care", desc: "Transparent pricing and flexible payment plans to suit your budget." },
  { icon: Activity, title: "Emergency Support", desc: "24/7 dedicated emergency line for immediate dental care when you need it." },
  { icon: Coffee, title: "Comfortable Environment", desc: "Relaxing lounges, soothing music, and a spa-like atmosphere to ease anxiety." },
];

const stats = [
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 25, suffix: '', label: 'Expert Specialists' },
  { value: 10, suffix: 'k+', label: 'Happy Smiles' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
];

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 lg:py-20 bg-white dark:bg-charcoal-900 relative border-t border-black/5 dark:border-white/5" id="why-us">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-4 block"
          >
            The Lumina Difference
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Why Patients <span className="font-light italic text-primary-600">Choose Us</span>
          </motion.h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6 p-6 rounded-2xl hover:bg-zinc-50 dark:hover:bg-charcoal-800/50 transition-colors border border-transparent hover:border-black/5 dark:hover:border-white/5 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 shrink-0 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 shadow-sm">
                <feature.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-2">{feature.title}</h3>
                <p className="text-charcoal-800/70 dark:text-zinc-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div 
          ref={ref}
          className="bg-charcoal-900 dark:bg-charcoal-800 rounded-3xl p-10 lg:p-16 text-white relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-400 mb-2">
                  {inView ? (
                    <AnimatedCounter end={stat.value} duration={2.5} separator="," />
                  ) : (
                    "0"
                  )}
                  {stat.suffix}
                </div>
                <p className="text-sm md:text-base font-medium text-zinc-300 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default WhyChooseUs;
