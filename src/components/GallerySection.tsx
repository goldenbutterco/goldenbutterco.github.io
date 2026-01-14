import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect, useState } from 'react';
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from './ui/carousel';

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

  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const totalSlides = galleryImages.length;

  useEffect(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());

    const handleSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    api.on('select', handleSelect);
    api.on('reInit', () => {
      setSelectedIndex(api.selectedScrollSnap());
    });

    return () => {
      api.off('select', handleSelect);
    };
  }, [api]);

  return (
    <section
      id="gallery"
      className="section-anchor bg-[#f9f7f4] py-24 md:py-32 px-4 md:px-6 overflow-x-hidden"
      aria-label="Gallery of our signature cookies"
    >
      <div className="max-w-7xl mx-auto mb-16 md:mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display'] text-center text-[#333333] mb-4 tracking-tight">
          Our Creations
        </h2>
        <p className="text-center text-[#666] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Discover the artistry behind each handcrafted cookie, where premium ingredients meet exquisite design
        </p>
      </div>

      {/* Carousel gallery */}
      <div className="relative w-full overflow-hidden px-2 sm:px-6 lg:px-10">
        <Carousel
          opts={{
            align: 'center',
            loop: false,
            containScroll: 'trimSnaps',
            slidesToScroll: 1,
            inViewThreshold: 0.6,
            skipSnaps: false,
          }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="items-center">
            {galleryImages.map((src, index) => {
              const isActive = index === selectedIndex;
              const cardClass = [
                'relative w-full h-full gallery-card motion-reduce:transition-none',
                isActive ? 'gallery-card--active' : 'gallery-card--muted',
              ].join(' ');
              const imageClass = [
                'gallery-image motion-reduce:transition-none',
                isActive ? 'gallery-image--active' : 'gallery-image--muted',
              ].join(' ');
              return (
                <CarouselItem
                  key={index}
                  className="gallery-slide"
                >
                  <div className="relative w-full gallery-frame transition-transform duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none">
                    <div className={cardClass}>
                      <ImageWithFallback
                        src={src}
                        alt={`Golden Butter creation ${index + 1}`}
                        className={imageClass}
                        loading={index < 2 ? 'eager' : 'lazy'}
                      />
                      <div
                        className={[
                          'absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent transition-opacity duration-500 pointer-events-none',
                          isActive ? 'opacity-100' : 'opacity-40',
                        ].join(' ')}
                      />
                      <span className="sr-only">
                        {`Slide ${index + 1} of ${totalSlides}`}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 bg-gradient-to-r from-[#f9f7f4] to-transparent z-[1]" aria-hidden />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 bg-gradient-to-l from-[#f9f7f4] to-transparent z-[1]" aria-hidden />
        <p className="sr-only" aria-live="polite">{`Showing slide ${selectedIndex + 1} of ${totalSlides}`}</p>
      </div>
    </section>
  );
}
