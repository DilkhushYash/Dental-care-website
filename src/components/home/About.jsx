import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const highlights = [
    "Over 15 years of clinical excellence",
    "State-of-the-art dental technology",
    "Strict sterilization & hygiene protocols",
    "Comfort-focused, pain-free treatments"
  ];

  return (
    <section className="py-16 lg:py-20 bg-zinc-50 dark:bg-charcoal-800/30 overflow-hidden" id="about">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Collage */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[600px] w-full max-w-lg mx-auto lg:mr-auto lg:ml-0">
              
              {/* Main Image */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute top-0 left-0 w-4/5 h-[80%] rounded-3xl overflow-hidden shadow-2xl z-10 border-8 border-white dark:border-charcoal-900"
              >
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1740&auto=format&fit=crop" 
                  alt="Modern Dental Clinic" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Secondary Image */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-0 right-0 w-3/5 h-[50%] rounded-3xl overflow-hidden shadow-xl z-20 border-8 border-white dark:border-charcoal-900"
              >
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1736&auto=format&fit=crop" 
                  alt="Dental Patient Smiling" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Decorative Element */}
              <div className="absolute top-1/2 -right-8 w-32 h-32 bg-primary-100 dark:bg-primary-900/40 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gold/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-4 block">
                About Lumina
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                Redefining The <span className="font-light italic text-primary-600">Dental Experience</span>
              </h2>
              
              <p className="text-charcoal-800/80 dark:text-zinc-300 text-lg mb-6 leading-relaxed">
                At Lumina Dental, we believe that a visit to the dentist should be a relaxing, positive experience. Our clinic blends luxury hospitality with advanced clinical dentistry to provide care that is second to none.
              </p>
              
              <p className="text-charcoal-800/80 dark:text-zinc-300 text-lg mb-8 leading-relaxed">
                Led by Dr. Sarah Jenkins and a team of specialized experts, we are dedicated to helping you achieve and maintain a beautiful, healthy smile for life.
              </p>

              <div className="space-y-4 mb-10">
                {highlights.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary-500 shrink-0" />
                    <span className="text-base font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              <a href="#about-more" className="group inline-flex items-center gap-2 bg-charcoal-900 dark:bg-white text-white dark:text-charcoal-900 px-8 py-4 rounded-full text-base font-medium hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white transition-all shadow-md">
                Discover Our Story
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
