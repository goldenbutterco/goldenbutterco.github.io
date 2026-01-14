export function PricingSection() {
  const pricingPlans = [
    {
      name: "Get-Together",
      price: "₪500",
      cookies: "20 cookies",
      leadTime: "3-5 days",
      features: [
        "Perfect for small gatherings",
        "Custom design sticker",
        "Premium packaging"
      ]
    },
    {
      name: "Small Event",
      price: "₪1,000",
      cookies: "50 cookies",
      leadTime: "1-2 weeks",
      features: [
        "Ideal for parties & celebrations",
        "Custom design sticker",
        "Premium packaging",
        "Delivery included"
      ]
    },
    {
      name: "Large Reception",
      price: "₪1,800",
      cookies: "100 cookies",
      leadTime: "2-3 weeks",
      features: [
        "Perfect for weddings & events",
        "Custom design sticker",
        "Premium packaging",
        "Delivery & setup included"
      ]
    }
  ];

  return (
    <section id="pricing" className="section-anchor bg-[#f9f7f4] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-center mb-12">
          Pricing
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 auto-rows-fr">
          {pricingPlans.map((plan, index) => (
            <div 
              key={plan.name}
              className="bg-white rounded-lg p-8 shadow-sm border border-[#e5e5e5] hover:shadow-lg transition-shadow flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-['Playfair_Display'] mb-4">
                  {plan.name}
                </h3>
                <div className="mb-6 space-y-2">
                  <div className="text-4xl font-['Playfair_Display'] text-[#333333]">
                    {plan.cookies}
                  </div>
                  <div className="text-4xl font-['Playfair_Display'] text-[#7A5C3E]">
                    {plan.price}
                  </div>
                  <div className="text-sm text-[#666]">Lead time: {plan.leadTime}</div>
                </div>
                
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-[#333333] text-sm">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <a
                href="#contact"
                className="w-full bg-[#7A5C3E] text-white px-6 py-3 rounded-full hover:bg-[#5d4630] transition-all mt-8 text-center inline-block"
                aria-label={`Order the ${plan.name} package`}
              >
                Order Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}