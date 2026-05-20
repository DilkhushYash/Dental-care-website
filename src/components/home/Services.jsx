import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Activity, SmilePlus, Scissors, Star } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Teeth Whitening',
    description: 'Achieve a brighter, whiter smile with our advanced laser whitening treatments.',
  },
  {
    icon: Shield,
    title: 'Dental Implants',
    description: 'Permanent, natural-looking solutions to replace missing teeth with precision.',
  },
  {
    icon: Activity,
    title: 'Root Canal',
    description: 'Painless endodontic therapy to save and restore damaged or infected teeth.',
  },
  {
    icon: SmilePlus,
    title: 'Smile Makeover',
    description: 'Comprehensive aesthetic treatments tailored to create your perfect smile.',
  },
  {
    icon: Scissors,
    title: 'Braces & Aligners',
    description: 'Modern orthodontic solutions including invisible aligners for straight teeth.',
  },
  {
    icon: Star,
    title: 'Cosmetic Dentistry',
    description: 'Premium cosmetic procedures from veneers to bonding for flawless aesthetics.',
  },
];

const Services = () => {
  return (
    <section className="py-16 lg:py-20 bg-white dark:bg-charcoal-900 relative" id="services">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-4 block"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Comprehensive <span className="font-light italic text-primary-600">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-charcoal-800/70 dark:text-zinc-400 text-lg"
          >
            We offer a full spectrum of dental treatments, utilizing the latest technology and techniques to ensure optimal oral health and stunning aesthetics.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-[1px] rounded-2xl overflow-hidden bg-gradient-to-b from-transparent to-black/5 dark:to-white/5 hover:to-primary-400/50 transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/0 to-primary-600/0 group-hover:from-primary-400/10 group-hover:to-primary-600/10 transition-colors duration-500 z-0"></div>
              
              <div className="relative z-10 h-full bg-zinc-50 dark:bg-charcoal-800 p-8 rounded-2xl border border-white/20 dark:border-white/5 flex flex-col items-start transition-transform duration-500 group-hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                  <service.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-serif font-bold mb-3">{service.title}</h3>
                <p className="text-charcoal-800/70 dark:text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                <a href="#" className="inline-flex items-center gap-2 text-primary-600 font-medium text-sm mt-auto group/btn">
                  Learn More
                  <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Services;
