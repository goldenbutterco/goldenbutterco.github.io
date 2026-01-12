import { ImageWithFallback } from './figma/ImageWithFallback';

export function StorySection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] mb-6">
              Our Story
            </h2>
            <p className="text-[#333333] leading-relaxed mb-6">
              What began as a passion project in a small Tel Aviv kitchen has grown 
              into a premium artisanal bakery beloved by cookie enthusiasts across 
              the city.
            </p>
            <p className="text-[#333333] leading-relaxed mb-6">
              Every batch is handcrafted with precision, using only the finest 
              ingredients sourced from trusted suppliers. Our signature Golden Butter 
              recipe creates cookies with the perfect balance of crispy edges and 
              soft, gooey centers.
            </p>
            <p className="text-[#333333] leading-relaxed mb-8">
              From intimate gatherings to grand celebrations, we transform your 
              special moments into edible memories that your guests will cherish.
            </p>
            <button className="bg-[#7A5C3E] text-white px-8 py-3 rounded-full hover:bg-[#5d4630] transition-all">
              Order Your Treats
            </button>
          </div>

          {/* Right: Image */}
          <div className="relative h-96 md:h-full min-h-[400px]">
            <ImageWithFallback
              src="/assets/images/IMG_7791.png"
              alt="Broken cookie with melted chocolate"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
