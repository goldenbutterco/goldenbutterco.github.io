import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Gift, Truck, Clock, Heart } from 'lucide-react';

export function PricingSection() {
  return (
    <section id="pricing" className="section-anchor bg-[#f9f7f4] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-center mb-4">
          Valentine's Day Gift Box
        </h2>
        <p className="text-center text-[#666] text-lg mb-12 max-w-2xl mx-auto">
          The sweetest way to say &ldquo;I love you&rdquo; - limited time only
        </p>

        {/* Single product card */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#e5e5e5] overflow-hidden md:flex">
          {/* Product image */}
          <div className="md:w-1/2 relative min-h-[300px] md:min-h-[420px]">
            <ImageWithFallback
              src="/assets/images/valentine-main.jpg"
              alt="Valentine's Day gift box with 4 chocolate chip cookies tied with a red ribbon"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product details */}
          <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart size={20} className="text-red-500" />
                <span className="text-sm font-medium text-red-500 uppercase tracking-wider">Limited Edition</span>
              </div>

              <h3 className="text-3xl font-['Playfair_Display'] mb-2">
                4 Chocolate Chip Cookies
              </h3>
              <p className="text-[#666] mb-6 leading-relaxed">
                Our signature handcrafted chocolate chip cookies, beautifully packaged
                in an elegant gift box with a red ribbon. The perfect last-minute Valentine's gift.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-[#333333]">
                  <Gift size={18} className="text-[#7A5C3E] flex-shrink-0" />
                  <span className="text-sm">Premium gift box packaging</span>
                </div>
                <div className="flex items-center gap-3 text-[#333333]">
                  <Truck size={18} className="text-[#7A5C3E] flex-shrink-0" />
                  <span className="text-sm">Free delivery to your door in Tel Aviv</span>
                </div>
                <div className="flex items-center gap-3 text-[#333333]">
                  <Clock size={18} className="text-[#7A5C3E] flex-shrink-0" />
                  <span className="text-sm">Delivered Friday Feb 13, 13:00&ndash;16:00</span>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-6">
                <div className="text-4xl font-['Playfair_Display'] text-[#7A5C3E]">
                  &#8362;80
                </div>
                <div className="text-sm text-[#666]">Delivery included</div>
              </div>

              <a
                href="#contact"
                className="w-full bg-[#7A5C3E] text-white px-6 py-4 rounded-full hover:bg-[#5d4630] transition-all text-center inline-block text-lg"
                aria-label="Order the Valentine's Day gift box"
              >
                Order Now
              </a>

              <p className="text-center text-sm text-[#999] mt-4">
                Order by Wednesday night (Feb 12)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}