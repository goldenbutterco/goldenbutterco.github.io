import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The cookies were absolutely divine! Our wedding guests couldn't stop talking about them. The custom design was the perfect touch.",
      name: "Lior Feldman",
      event: "Wedding Reception"
    },
    {
      quote: "Golden Butter transformed our corporate event. The attention to detail and quality was exceptional. Highly recommend!",
      name: "Idan Shemy",
      event: "Corporate Event"
    },
    {
      quote: "Every cookie was a work of art. The taste was incredible, and the presentation was stunning. Worth every shekel!",
      name: "Maya Cohen",
      event: "Birthday Celebration"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#9b7e5d] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Testimonial Card */}
          <div className="text-center text-white px-8 md:px-16">
            <p className="text-2xl md:text-3xl font-['Playfair_Display'] italic mb-8 leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </p>
            <p className="text-lg mb-1">
              {testimonials[currentIndex].name}
            </p>
            <p className="text-sm opacity-90">
              {testimonials[currentIndex].event}
            </p>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#9b7e5d] transition-all flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#9b7e5d] transition-all flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-white' : 'bg-white/40'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
