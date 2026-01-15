import { useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProcessSection } from './components/ProcessSection';
import { StorySection } from './components/StorySection';
import { PricingSection } from './components/PricingSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    const scrollToHash = (behavior: ScrollBehavior) => {
      const hash = window.location.hash;
      if (!hash) return;
      const targetId = decodeURIComponent(hash.slice(1));
      const target = document.getElementById(targetId);
      if (!target) return;
      target.scrollIntoView({ behavior, block: 'start' });
    };

    const handleHashChange = () => scrollToHash('smooth');

    requestAnimationFrame(() => scrollToHash('auto'));
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <StorySection />
      <ProcessSection />
      <PricingSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
