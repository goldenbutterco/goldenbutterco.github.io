import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section id="hero" className="section-anchor relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <ImageWithFallback
          src="/assets/images/IMG_6764.png"
          alt="Golden chocolate chip cookies"
          className="w-full h-full object-cover scale-[1.3] blur-[20px]"
        />
        {/* White blurry edge overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent via-transparent to-white/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent via-transparent to-white/40"></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content - padding-top accounts for fixed header */}
      <div className="relative h-full flex items-center justify-center px-6 pt-14 sm:pt-20">
        <div className="text-center text-white max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-['Playfair_Display'] mb-6 text-white" style={{ color: 'white' }}>
            Hand Crafted Cookies.
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience the art of indulgence with our handcrafted premium cookies, 
            masterfully created in the heart of Tel Aviv.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#7A5C3E] text-white px-8 py-3 rounded-full hover:bg-[#5d4630] transition-all"
            >
              Order Now
            </button>
            <button 
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#333333] transition-all"
            >
              Event Catering
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
