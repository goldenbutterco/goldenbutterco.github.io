import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    neededBy: '',
    cookiePackage: '',
    flavor: '',
    address: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-anchor bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-[#333333] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#d1d1d1] rounded-lg focus:outline-none focus:border-[#7A5C3E]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#333333] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#d1d1d1] rounded-lg focus:outline-none focus:border-[#7A5C3E]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#333333] mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#d1d1d1] rounded-lg focus:outline-none focus:border-[#7A5C3E]"
                />
              </div>

              <div>
                <label htmlFor="neededBy" className="block text-[#333333] mb-2">
                  Needed By *
                </label>
                <input
                  type="date"
                  id="neededBy"
                  name="neededBy"
                  value={formData.neededBy}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#d1d1d1] rounded-lg focus:outline-none focus:border-[#7A5C3E]"
                />
              </div>

              <div>
                <label htmlFor="cookiePackage" className="block text-[#333333] mb-2">
                  Cookie Package *
                </label>
                <select
                  id="cookiePackage"
                  name="cookiePackage"
                  value={formData.cookiePackage}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#d1d1d1] rounded-lg focus:outline-none focus:border-[#7A5C3E]"
                >
                  <option value="">Select a package</option>
                  <option value="get-together">Get-Together (20 cookies)</option>
                  <option value="small-event">Small Event (50 cookies)</option>
                  <option value="large-reception">Large Reception (100 cookies)</option>
                </select>
              </div>

              <div>
                <label htmlFor="flavor" className="block text-[#333333] mb-2">
                  Flavor *
                </label>
                <select
                  id="flavor"
                  name="flavor"
                  value={formData.flavor}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#d1d1d1] rounded-lg focus:outline-none focus:border-[#7A5C3E]"
                >
                  <option value="">Select a flavor</option>
                  <option value="chocolate-chip">Classic Chocolate Chip</option>
                  <option value="peanut-butter-double-chocolate">Peanut Butter Double Chocolate</option>
                  <option value="both">Both</option>
                </select>
              </div>

              <div>
                <label htmlFor="address" className="block text-[#333333] mb-2">
                  Delivery Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#d1d1d1] rounded-lg focus:outline-none focus:border-[#7A5C3E]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#333333] mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-[#d1d1d1] rounded-lg focus:outline-none focus:border-[#7A5C3E] resize-none"
                  placeholder="Tell us about your event, design preferences, or any special requests..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#333333] text-white px-8 py-4 rounded-lg hover:bg-[#1a1a1a] transition-all"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div>
            <h2 className="text-4xl font-['Playfair_Display'] mb-6">
              Reach Out to Golden Butter
            </h2>
            <p className="text-[#333333] mb-8 leading-relaxed">
              Ready to make your event unforgettable? Fill out the form and we'll 
              get back to you within 24 hours with a custom quote.
            </p>

            <div className="bg-[#f9f7f4] p-6 rounded-lg">
              <h3 className="text-xl font-['Playfair_Display'] mb-4">
                Lead Times
              </h3>
              <ul className="space-y-3 text-[#333333]">
                <li>• <strong>Get-Together (20 cookies):</strong> 3-5 days</li>
                <li>• <strong>Small Event (50 cookies):</strong> 1-2 weeks</li>
                <li>• <strong>Large Reception (100 cookies):</strong> 2-3 weeks</li>
              </ul>
            </div>

            <div className="mt-8 p-6 border-l-4 border-[#7A5C3E]">
              <p className="text-[#333333] italic">
                "We recommend ordering as early as possible to ensure availability 
                for your preferred date, especially during peak season."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
