import { ShoppingBag, CreditCard, Heart } from 'lucide-react';

export function ProcessSection() {
  return (
    <section id="process" className="section-anchor bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-center mb-12">
          How to Order
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <ShoppingBag size={64} className="text-[#7A5C3E]" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-['Playfair_Display'] mb-4">
              1. Place Your Order
            </h3>
            <p className="text-[#333333] leading-relaxed">
              Fill out the order form below by Wednesday night (Feb 12).
              Choose how many gift boxes you'd like and provide your delivery address
              in the Tel Aviv area.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <CreditCard size={64} className="text-[#7A5C3E]" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-['Playfair_Display'] mb-4">
              2. Confirm &amp; Pay
            </h3>
            <p className="text-[#333333] leading-relaxed">
              We'll confirm your order and send you a Bit payment request.
              Once you complete the payment, your order is locked in!
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Heart size={64} className="text-red-500" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-['Playfair_Display'] mb-4">
              3. Enjoy Valentine's Day!
            </h3>
            <p className="text-[#333333] leading-relaxed">
              Your gift box of handcrafted chocolate chip cookies will be delivered
              to your door on Friday, February 13, between 13:00&ndash;16:00.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
