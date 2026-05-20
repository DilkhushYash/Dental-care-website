import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ShieldCheck, Users, Stethoscope } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative flex items-center pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden" id="home">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop"
          alt="Premium Dental Clinic"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/70 dark:bg-charcoal-900/80 backdrop-blur-[2px]"></div>
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-charcoal-900 dark:via-charcoal-900/50"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Main Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold tracking-wide mb-6 border border-primary-200 dark:border-primary-800">
                Lumina Dental Excellence
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6">
                Advanced Dental Care For <span className="text-gradient">Confident Smiles</span>
              </h1>
              <p className="text-lg md:text-xl text-charcoal-800/80 dark:text-zinc-300 mb-10 leading-relaxed font-light">
                Experience world-class dentistry in a relaxing, spa-like environment. We combine state-of-the-art technology with compassionate care.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <a href="#booking" className="group flex items-center gap-2 bg-charcoal-900 dark:bg-white text-white dark:text-charcoal-900 px-8 py-4 rounded-full text-base font-medium hover:bg-charcoal-800 dark:hover:bg-zinc-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </a>
                <a href="#services" className="group flex items-center gap-2 bg-white/50 dark:bg-charcoal-800/50 backdrop-blur-sm border border-black/10 dark:border-white/10 text-charcoal-900 dark:text-white px-8 py-4 rounded-full text-base font-medium hover:bg-white dark:hover:bg-charcoal-800 transition-all">
                  View Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Floating Stats Cards */}
          <div className="relative h-full hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Decorative Circle */}
              <div className="absolute inset-0 rounded-full border border-primary-200 dark:border-primary-800/30 opacity-50 scale-[1.2]"></div>
              <div className="absolute inset-8 rounded-full border border-primary-300 dark:border-primary-700/30 opacity-30 scale-[1.1] animate-[spin_60s_linear_infinite]"></div>
              
              {/* Main Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute inset-4 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-charcoal-800 z-10"
              >
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1740&auto=format&fit=crop" 
                  alt="Dentist with patient" 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Card 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -left-12 top-24 bg-white dark:bg-charcoal-800 rounded-2xl shadow-xl border border-black/5 dark:border-white/10 p-4 flex items-center gap-4 z-20"
              >
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold font-serif text-charcoal-900 dark:text-white">10+</p>
                  <p className="text-xs font-medium text-charcoal-800/80 dark:text-zinc-400">Years Experience</p>
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -right-8 bottom-32 bg-white dark:bg-charcoal-800 rounded-2xl shadow-xl border border-black/5 dark:border-white/10 p-4 flex items-center gap-4 z-20"
              >
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold font-serif text-charcoal-900 dark:text-white">5000+</p>
                  <p className="text-xs font-medium text-charcoal-800/80 dark:text-zinc-400">Happy Patients</p>
                </div>
              </motion.div>

              {/* Floating Card 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute left-1/2 -bottom-6 -translate-x-1/2 bg-white dark:bg-charcoal-800 rounded-2xl shadow-xl border border-black/5 dark:border-white/10 p-4 flex items-center gap-4 z-20 whitespace-nowrap"
              >
                <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <p className="text-sm font-semibold text-charcoal-900 dark:text-white">Modern Equipment</p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
