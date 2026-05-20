import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import About from './components/home/About';
import Services from './components/home/Services';
import WhyChooseUs from './components/home/WhyChooseUs';
import Testimonials from './components/home/Testimonials';
import Booking from './components/home/Booking';
import FAQ from './components/home/FAQ';
import LoadingScreen from './components/common/LoadingScreen';
import ScrollProgress from './components/common/ScrollProgress';
import WhatsAppButton from './components/common/WhatsAppButton';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  useEffect(() => {
    // Force scroll to top on reload
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-primary-200 selection:text-charcoal-900 dark:selection:bg-primary-700 dark:selection:text-white relative bg-zinc-50 dark:bg-charcoal-900 text-charcoal-900 dark:text-zinc-50 transition-colors duration-300">
      <LoadingScreen />
      <ScrollProgress />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Booking />
        <FAQ />
      </main>
      
      <Footer />
      
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}

export default App;
