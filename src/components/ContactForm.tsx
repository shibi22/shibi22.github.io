import React, { useState } from 'react';
import { Mail, User, Phone, ListFilter, Send } from 'lucide-react';

const serviceOptions = [
  'Resume Designing',
  'Portfolio Creation',
  'LinkedIn Optimization',
  'Project Selling',
  'Domain & Hosting'
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: serviceOptions[0]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.serviceType) {
      alert('Please fill in all fields');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    // Phone validation - allows various formats
    const phoneRegex = /^[\d\s()+.-]{10,}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert('Please enter a valid phone number');
      setIsSubmitting(false);
      return;
    }

    // Create mailto link with form data
    const mailtoLink = `mailto:shibi73201@gmail.com?subject=Service Inquiry: ${formData.serviceType}&body=Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AEmail: ${formData.email}%0D%0AService: ${formData.serviceType}`;
    window.location.href = mailtoLink;
    
    setIsSubmitting(false);
  };

  const InputWrapper = ({ children, label }: { children: React.ReactNode; label: string }) => (
    <div className="relative">
      <label className="absolute -top-2 left-2 bg-white px-2 text-xs font-medium text-gray-600">
        {label}
      </label>
      {children}
    </div>
  );

  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-indigo-100 p-3 rounded-full">
              <Mail className="h-8 w-8 text-indigo-600" />
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <InputWrapper label="Full Name">
              <div className="flex items-center border-2 rounded-lg px-4 py-3 focus-within:border-indigo-500 transition-colors">
                <User className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  required
                  className="ml-3 flex-1 outline-none text-gray-800 placeholder-gray-400"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            </InputWrapper>

            <InputWrapper label="Phone Number">
              <div className="flex items-center border-2 rounded-lg px-4 py-3 focus-within:border-indigo-500 transition-colors">
                <Phone className="h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  required
                  className="ml-3 flex-1 outline-none text-gray-800 placeholder-gray-400"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </InputWrapper>

            <InputWrapper label="Email Address">
              <div className="flex items-center border-2 rounded-lg px-4 py-3 focus-within:border-indigo-500 transition-colors">
                <Mail className="h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  required
                  className="ml-3 flex-1 outline-none text-gray-800 placeholder-gray-400"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </InputWrapper>

            <InputWrapper label="Service Type">
              <div className="flex items-center border-2 rounded-lg px-4 py-3 focus-within:border-indigo-500 transition-colors">
                <ListFilter className="h-5 w-5 text-gray-400" />
                <select
                  className="ml-3 flex-1 outline-none text-gray-800 bg-transparent"
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                >
                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </InputWrapper>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-indigo-600 text-white rounded-lg font-medium 
                hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 
                transform transition-all duration-200 hover:scale-[1.02]
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-5 w-5" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;