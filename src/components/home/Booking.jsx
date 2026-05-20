import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, Mail, User, Clock, MessageSquare, CheckCircle2 } from 'lucide-react';

const Booking = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-16 lg:py-20 relative" id="booking">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?q=80&w=2070&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-charcoal-900/80 dark:bg-charcoal-900/90 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="text-white">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary-400 font-semibold tracking-wider text-sm uppercase mb-4 block"
            >
              Book Your Visit
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight"
            >
              Ready For A <br/>
              <span className="font-light italic text-primary-400">Brighter Smile?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-300 text-lg mb-10 max-w-md leading-relaxed"
            >
              Schedule your consultation today. Our team is ready to provide you with the highest standard of personalized dental care.
            </motion.p>

            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-primary-400 backdrop-blur-md border border-white/10">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-zinc-400 font-medium">Emergency Line 24/7</p>
                  <p className="text-xl font-bold font-serif">+1 (555) 123-4567</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-primary-400 backdrop-blur-md border border-white/10">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-zinc-400 font-medium">Opening Hours</p>
                  <p className="text-xl font-bold font-serif">Mon - Sat: 8AM - 8PM</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Booking Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-charcoal-800 rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden"
          >
            {isSubmitted ? (
              <div className="absolute inset-0 bg-white dark:bg-charcoal-800 z-20 flex flex-col items-center justify-center p-8 text-center h-full">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-500 mb-6"
                >
                  <CheckCircle2 className="w-10 h-10" />
                </motion.div>
                <h3 className="text-2xl font-serif font-bold mb-2">Request Received!</h3>
                <p className="text-charcoal-800/70 dark:text-zinc-400">Our team will contact you shortly to confirm your appointment.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal-800/40 dark:text-zinc-500 group-focus-within:text-primary-500 transition-colors" />
                    <input type="text" required placeholder="Full Name" className="w-full bg-zinc-50 dark:bg-charcoal-900/50 border border-black/5 dark:border-white/5 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:bg-white dark:focus:bg-charcoal-900 transition-all text-sm font-medium text-charcoal-900 dark:text-white placeholder:text-zinc-500" />
                  </div>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal-800/40 dark:text-zinc-500 group-focus-within:text-primary-500 transition-colors" />
                    <input type="tel" required placeholder="Phone Number" className="w-full bg-zinc-50 dark:bg-charcoal-900/50 border border-black/5 dark:border-white/5 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:bg-white dark:focus:bg-charcoal-900 transition-all text-sm font-medium text-charcoal-900 dark:text-white placeholder:text-zinc-500" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal-800/40 dark:text-zinc-500 group-focus-within:text-primary-500 transition-colors" />
                    <input type="email" required placeholder="Email Address" className="w-full bg-zinc-50 dark:bg-charcoal-900/50 border border-black/5 dark:border-white/5 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:bg-white dark:focus:bg-charcoal-900 transition-all text-sm font-medium text-charcoal-900 dark:text-white placeholder:text-zinc-500" />
                  </div>
                  <div className="relative group">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal-800/40 dark:text-zinc-500 group-focus-within:text-primary-500 transition-colors" />
                    <input type="date" required className="w-full bg-zinc-50 dark:bg-charcoal-900/50 border border-black/5 dark:border-white/5 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:bg-white dark:focus:bg-charcoal-900 transition-all text-sm font-medium text-charcoal-900 dark:text-white" />
                  </div>
                </div>

                <div className="relative group">
                  <select required defaultValue="" className="w-full bg-zinc-50 dark:bg-charcoal-900/50 border border-black/5 dark:border-white/5 rounded-xl py-4 px-4 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:bg-white dark:focus:bg-charcoal-900 transition-all text-sm font-medium text-charcoal-900 dark:text-white appearance-none">
                    <option value="" disabled>Select Service</option>
                    <option value="consultation">General Consultation</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="implants">Dental Implants</option>
                    <option value="orthodontics">Orthodontics (Braces/Aligners)</option>
                    <option value="emergency">Emergency Care</option>
                  </select>
                </div>

                <div className="relative group">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-charcoal-800/40 dark:text-zinc-500 group-focus-within:text-primary-500 transition-colors" />
                  <textarea placeholder="Tell us about your dental needs..." rows="3" className="w-full bg-zinc-50 dark:bg-charcoal-900/50 border border-black/5 dark:border-white/5 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:bg-white dark:focus:bg-charcoal-900 transition-all text-sm font-medium text-charcoal-900 dark:text-white placeholder:text-zinc-500 resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Confirm Appointment
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Booking;
