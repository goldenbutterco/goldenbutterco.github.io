import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: '1',
    address: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Validation function for individual fields
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';
      
      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        const phoneRegex = /^[\d\s\-\(\)\+]+$/;
        if (!phoneRegex.test(value)) return 'Please enter a valid phone number';
        if (value.replace(/\D/g, '').length < 7) return 'Phone number seems too short';
        return '';

      case 'quantity':
        if (!value) return 'Quantity is required';
        const qty = parseInt(value, 10);
        if (isNaN(qty) || qty < 1) return 'Minimum 1 gift box';
        if (qty > 10) return 'For orders above 10, please contact us directly';
        return '';

      case 'address':
        if (!value.trim()) return 'Delivery address is required';
        if (value.trim().length < 5) return 'Please enter a full address';
        return '';
      
      default:
        return '';
    }
  };

  // Validate all fields
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    const fieldsToValidate = ['name', 'email', 'phone', 'quantity', 'address'];
    
    fieldsToValidate.forEach(field => {
      const error = validateField(field, formData[field as keyof typeof formData]);
      if (error) {
        newErrors[field] = error;
      }
    });
    
    setErrors(newErrors);
    
    // Mark all fields as touched
    const allTouched: Record<string, boolean> = {};
    fieldsToValidate.forEach(field => {
      allTouched[field] = true;
    });
    setTouched(allTouched);
    
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate before submitting
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const totalPrice = parseInt(formData.quantity, 10) * 80;

    try {
      await emailjs.send(
        'service_s5ldz2v',
        'template_igkdcqr',
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          quantity: formData.quantity,
          total_price: `₪${totalPrice}`,
          address: formData.address,
          message: formData.message || 'None',
          cookiePackage: `Valentine's Gift Box x${formData.quantity}`,
          neededBy: 'Friday Feb 13 (Day before Valentine\'s Day)',
          flavor: 'Chocolate Chip',
        },
        'OBLI2n-6mqkUkrICw'
      );
      
      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        quantity: '1',
        address: '',
        message: ''
      });
      setErrors({});
      setTouched({});
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate on change if field has been touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  // Helper to get input className with error state
  const getInputClassName = (fieldName: string) => {
    const baseClasses = "w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors";
    const hasError = touched[fieldName] && errors[fieldName];
    return `${baseClasses} ${hasError 
      ? 'border-red-500 focus:border-red-500' 
      : 'border-[#d1d1d1] focus:border-[#7A5C3E]'}`;
  };

  const totalPrice = parseInt(formData.quantity || '0', 10) * 80;

  return (
    <section id="contact" className="section-anchor bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info - shows first on mobile, second on desktop */}
          <div className="md:order-2">
            <h2 className="text-4xl font-['Playfair_Display'] mb-6">
              Order Your Valentine's Gift
            </h2>
            <p className="text-[#333333] mb-8 leading-relaxed">
              Fill out the form and we'll confirm your order right away. 
              Delivery is on Friday, February 13 (day before Valentine's Day) between 12:00&ndash;3:00 PM 
              in the Tel Aviv area.
            </p>

            <div className="bg-[#f9f7f4] p-6 rounded-lg mb-6">
              <h3 className="text-xl font-['Playfair_Display'] mb-4">
                How It Works
              </h3>
              <ol className="space-y-3 text-[#333333] list-decimal list-inside">
                <li><strong>Submit your order</strong> using the form</li>
                <li><strong>We confirm</strong> and send you a Bit payment request</li>
                <li><strong>Pay via Bit</strong> to confirm your order</li>
                <li><strong>Receive your gift box</strong> on Friday, the day before Valentine's Day!</li>
              </ol>
            </div>

            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h3 className="text-lg font-['Playfair_Display'] mb-2 text-red-800">
                Order Deadline
              </h3>
              <p className="text-red-700 text-sm">
                Orders must be placed by <strong>Wednesday night, February 12</strong>. 
                Don't miss out - quantities are limited!
              </p>
            </div>
          </div>

          {/* Form - shows second on mobile, first on desktop */}
          <div className="md:order-1">
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
                  onBlur={handleBlur}
                  className={getInputClassName('name')}
                />
                {touched.name && errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                )}
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
                  onBlur={handleBlur}
                  className={getInputClassName('email')}
                />
                {touched.email && errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#333333] mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClassName('phone')}
                  placeholder="For Bit payment request"
                />
                {touched.phone && errors.phone && (
                  <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="quantity" className="block text-[#333333] mb-2">
                  Number of Gift Boxes *
                </label>
                <select
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClassName('quantity')}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'box' : 'boxes'} - &#8362;{n * 80}
                    </option>
                  ))}
                </select>
                {touched.quantity && errors.quantity && (
                  <p className="text-red-600 text-sm mt-1">{errors.quantity}</p>
                )}
              </div>

              <div>
                <label htmlFor="address" className="block text-[#333333] mb-2">
                  Delivery Address (Tel Aviv area) *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClassName('address')}
                  placeholder="Street, building, apartment, city"
                />
                {touched.address && errors.address && (
                  <p className="text-red-600 text-sm mt-1">{errors.address}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-[#333333] mb-2">
                  Special Requests
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={3}
                  className={`${getInputClassName('message')} resize-none`}
                  placeholder="Any special note for the gift, delivery instructions, etc."
                />
              </div>

              {/* Order summary */}
              <div className="bg-[#f9f7f4] p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-[#333333] font-medium">Total</span>
                  <span className="text-2xl font-['Playfair_Display'] text-[#7A5C3E]">
                    &#8362;{totalPrice}
                  </span>
                </div>
                <p className="text-xs text-[#999] mt-1">
                  {formData.quantity} gift {parseInt(formData.quantity) === 1 ? 'box' : 'boxes'} &middot; Delivery included
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#333333] text-white px-8 py-4 rounded-lg hover:bg-[#1a1a1a] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Place Order'}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-center">
                  <p className="font-medium">Order received!</p>
                  <p className="text-sm mt-1">
                    We'll confirm your order and send a Bit payment request shortly. 
                    Your order is confirmed once payment is received.
                  </p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-center">
                  Something went wrong. Please try again or email us directly at co.goldenbutter@gmail.com
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
