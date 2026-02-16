import { Cookie, Palette, Heart } from 'lucide-react';

export function ProcessSection() {
  return (
    <section id="process" className="section-anchor bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Cookie size={64} className="text-[#7A5C3E]" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-['Playfair_Display'] mb-4">
              Step 1: The Base.
            </h3>
            <p className="text-[#333333] leading-relaxed">
              We start with our signature Golden Butter cookies, baked to golden 
              perfection with premium ingredients that create an unforgettable taste 
              and texture.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Palette size={64} className="text-[#7A5C3E]" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-['Playfair_Display'] mb-4">
              Step 2: The Personal Touch.
            </h3>
            <p className="text-[#333333] leading-relaxed">
              We translate your event into design. From weddings to corporate events, 
              we create a customized sticker that captures the soul of the occasion.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Heart size={64} className="text-[#7A5C3E]" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-['Playfair_Display'] mb-4">
              Step 3: The Connection.
            </h3>
            <p className="text-[#333333] leading-relaxed">
              We take a piece of your story and hand it to every guest. Each cookie 
              becomes a personal 'thank you' they can taste and remember.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
