import { useState } from 'react';
import emailjs from '@emailjs/browser';

// Date helper functions
const getMinLeadDays = (packageType: string): number => {
  switch (packageType) {
    case 'large-reception': return 14;
    case 'small-event': return 7;
    case 'get-together': return 3;
    default: return 3;
  }
};

const getMinDate = (packageType: string): string => {
  const days = getMinLeadDays(packageType);
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().split('T')[0];
};

const getMaxDate = (): string => {
  const date = new Date();
  date.setMonth(date.getMonth() + 6);
  return date.toISOString().split('T')[0];
};

const getPackageLabel = (packageType: string): string => {
  switch (packageType) {
    case 'large-reception': return 'Large Reception';
    case 'small-event': return 'Small Event';
    case 'get-together': return 'Get-Together';
    default: return 'your selected package';
  }
};

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Validation function for individual fields
  const validateField = (name: string, value: string, currentFormData = formData): string => {
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
        if (!value.trim()) return ''; // Optional field
        const phoneRegex = /^[\d\s\-\(\)\+]+$/;
        if (!phoneRegex.test(value)) return 'Please enter a valid phone number';
        if (value.replace(/\D/g, '').length < 7) return 'Phone number seems too short';
        return '';
      
      case 'neededBy':
        if (!value) return 'Please select a date';
        const selectedDate = new Date(value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        // Check max date (6 months)
        const maxDate = new Date();
        maxDate.setMonth(maxDate.getMonth() + 6);
        if (selectedDate > maxDate) {
          return 'Please select a date within the next 6 months';
        }
        
        // Check min date based on package
        const packageType = currentFormData.cookiePackage;
        const minDays = getMinLeadDays(packageType);
        const minDate = new Date();
        minDate.setDate(minDate.getDate() + minDays);
        minDate.setHours(0, 0, 0, 0);
        
        if (selectedDate < minDate) {
          if (packageType) {
            return `${getPackageLabel(packageType)} requires at least ${minDays} days notice`;
          }
          return `Please select a date at least ${minDays} days from now`;
        }
        return '';
      
      case 'cookiePackage':
        if (!value) return 'Please select a package';
        return '';
      
      case 'flavor':
        if (!value) return 'Please select a flavor';
        return '';
      
      default:
        return '';
    }
  };

  // Validate all fields
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    const fieldsToValidate = ['name', 'email', 'phone', 'neededBy', 'cookiePackage', 'flavor'];
    
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

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          neededBy: formData.neededBy,
          cookiePackage: formData.cookiePackage,
          flavor: formData.flavor,
          address: formData.address || 'Not provided',
          message: formData.message || 'None',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        neededBy: '',
        cookiePackage: '',
        flavor: '',
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
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    
    // Validate on change if field has been touched
    if (touched[name]) {
      const error = validateField(name, value, newFormData);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
    
    // Re-validate date when package changes
    if (name === 'cookiePackage' && touched['neededBy'] && formData.neededBy) {
      const dateError = validateField('neededBy', formData.neededBy, newFormData);
      setErrors(prev => ({ ...prev, neededBy: dateError }));
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

  return (
    <section id="contact" className="section-anchor bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info - shows first on mobile, second on desktop */}
          <div className="md:order-2">
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
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClassName('phone')}
                />
                {touched.phone && errors.phone && (
                  <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                )}
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
                  onBlur={handleBlur}
                  className={getInputClassName('cookiePackage')}
                >
                  <option value="">Select a package</option>
                  <option value="get-together">Get-Together (20 cookies)</option>
                  <option value="small-event">Small Event (50 cookies)</option>
                  <option value="large-reception">Large Reception (100 cookies)</option>
                </select>
                {touched.cookiePackage && errors.cookiePackage && (
                  <p className="text-red-600 text-sm mt-1">{errors.cookiePackage}</p>
                )}
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
                  onBlur={handleBlur}
                  min={getMinDate(formData.cookiePackage)}
                  max={getMaxDate()}
                  className={getInputClassName('neededBy')}
                />
                {touched.neededBy && errors.neededBy && (
                  <p className="text-red-600 text-sm mt-1">{errors.neededBy}</p>
                )}
                {formData.cookiePackage && !errors.neededBy && (
                  <p className="text-gray-500 text-sm mt-1">
                    {getPackageLabel(formData.cookiePackage)} requires at least {getMinLeadDays(formData.cookiePackage)} days notice
                  </p>
                )}
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
                  onBlur={handleBlur}
                  className={getInputClassName('flavor')}
                >
                  <option value="">Select a flavor</option>
                  <option value="chocolate-chip">Classic Chocolate Chip</option>
                  <option value="peanut-butter-double-chocolate">Peanut Butter Double Chocolate</option>
                  <option value="both">Both</option>
                </select>
                {touched.flavor && errors.flavor && (
                  <p className="text-red-600 text-sm mt-1">{errors.flavor}</p>
                )}
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
                  onBlur={handleBlur}
                  className={getInputClassName('address')}
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
                  onBlur={handleBlur}
                  rows={4}
                  className={`${getInputClassName('message')} resize-none`}
                  placeholder="Tell us about your event, design preferences, or any special requests..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#333333] text-white px-8 py-4 rounded-lg hover:bg-[#1a1a1a] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-center">
                  Thank you! We'll get back to you within 24 hours.
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
