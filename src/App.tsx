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
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProcessSection />
      <StorySection />
      <PricingSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
