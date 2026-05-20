import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Do you accept dental insurance?",
    answer: "Yes, we accept most major dental insurance plans. Our front desk team will happily verify your benefits and help you maximize your coverage before any treatment begins."
  },
  {
    question: "Is teeth whitening safe for my enamel?",
    answer: "Absolutely. We use professional-grade whitening systems that are clinically proven to be safe and effective. Our treatments are supervised by specialists to ensure your enamel remains strong and healthy."
  },
  {
    question: "What should I expect during my first visit?",
    answer: "Your initial visit includes a comprehensive examination, digital 3D scans (if needed), a professional cleaning, and a one-on-one consultation with our dentists to discuss your goals and create a personalized treatment plan."
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes! We believe everyone deserves a confident smile. We offer flexible, interest-free payment plans through CareCredit and other financing partners to make your treatments affordable."
  },
  {
    question: "How do you handle patients with dental anxiety?",
    answer: "Your comfort is our priority. We offer a spa-like environment, noise-canceling headphones, sedation dentistry options, and a gentle, communicative approach to ensure a completely stress-free experience."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 lg:py-20 bg-zinc-50 dark:bg-charcoal-800/30" id="faq">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-4 block"
          >
            Got Questions?
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold"
          >
            Frequently Asked <span className="font-light italic text-primary-600">Questions</span>
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full flex items-center justify-between p-6 rounded-2xl transition-colors ${openIndex === index ? 'bg-primary-50 dark:bg-primary-900/20' : 'bg-white dark:bg-charcoal-800 hover:bg-zinc-100 dark:hover:bg-charcoal-800/80 border border-black/5 dark:border-white/5'}`}
              >
                <span className="font-bold font-serif text-lg text-left">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === index ? 'bg-primary-500 text-white' : 'bg-zinc-100 dark:bg-charcoal-900 text-charcoal-800 dark:text-zinc-400'}`}>
                  {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-2 text-charcoal-800/80 dark:text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default FAQ;
