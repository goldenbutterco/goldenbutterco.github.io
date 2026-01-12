import { ImageWithFallback } from './figma/ImageWithFallback';

export function GallerySection() {
  // List of available images - using JPG files (HEIC files need to be converted to JPG/PNG for browser compatibility)
  const galleryImages = [
    '/assets/images/E3A8B85B-D0E1-4601-BA7F-E6D773700EBC.JPG',
    '/assets/images/IMG_5081 2.PNG',
    '/assets/images/IMG_6764.png',
    '/assets/images/IMG_7564.png',
    '/assets/images/IMG_7788.png',
    '/assets/images/IMG_7791.png',
    '/assets/images/IMG_8053.png',
  ];

  return (
    <section className="bg-[#f9f7f4] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-center mb-12">
          Our Creations
        </h2>
      </div>
      
      {/* Full-width carousel container */}
      <div className="relative w-full overflow-hidden">
        <div 
          className="overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
          style={{
            scrollSnapType: 'x mandatory',
          }}
        >
          <div className="flex gap-4" style={{ 
            paddingLeft: 'calc(50vw - 12rem - 0.5rem)',
            paddingRight: 'calc(50vw - 12rem - 0.5rem)',
          }}>
            {galleryImages.map((src, index) => (
              <div 
                key={index}
                className="relative w-96 aspect-square flex-shrink-0 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow group"
                style={{ scrollSnapAlign: 'center' }}
              >
                <ImageWithFallback
                  src={src}
                  alt={`Golden Butter creation ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
