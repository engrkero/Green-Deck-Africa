import React, { useState, useRef } from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/solid';

declare global {
  interface Window {
    emailjs: {
      sendForm: (serviceID: string, templateID: string, form: HTMLFormElement, publicKey: string) => Promise<any>;
    };
  }
}

const servicesNeeded = [
    { id: 'website', label: 'Website' },
    { id: 'loan', label: 'Business Loan' },
    { id: 'app', label: 'Mobile Application' },
    { id: 'dev', label: 'Business Development' },
    { id: 'mgmt', label: 'Business Management' },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    services: [] as string[],
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [formStatus, setFormStatus] = useState<{ message: string, type: 'sending' | 'success' | 'error' | '' }>({ message: '', type: '' });
  
  const formRef = useRef<HTMLFormElement>(null);

  const validate = (data: typeof formData): { [key: string]: string } => {
    const newErrors: { [key: string]: string } = {};

    if (!data.name.trim()) newErrors.name = 'Full name is required.';
    else if (data.name.trim().length < 2) newErrors.name = 'Full name must be at least 2 characters.';

    if (!data.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = 'Please enter a valid email address.';

    if (!data.subject.trim()) newErrors.subject = 'Subject is required.';
    else if (data.subject.trim().length < 5) newErrors.subject = 'Subject must be at least 5 characters.';

    if (!data.message.trim()) newErrors.message = 'Message is required.';
    else if (data.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters.';

    if (data.services.length === 0) newErrors.services = 'Please select at least one service of interest.';

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    if (touched[name]) {
      setErrors(validate(newFormData));
    }
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    const updatedServices = checked
      ? [...formData.services, value]
      : formData.services.filter(s => s !== value);
      
    const newFormData = { ...formData, services: updatedServices };
    setFormData(newFormData);

    if (touched.services) {
      setErrors(validate(newFormData));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(validate(formData));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validate(formData);
    setErrors(newErrors);
    setTouched({ name: true, email: true, subject: true, message: true, services: true });

    if (Object.keys(newErrors).length > 0) {
      return;
    }
    
    setFormStatus({ message: 'Sending...', type: 'sending' });

    // --- PASTE YOUR EMAILJS CREDENTIALS HERE ---
    // See README.md for instructions on how to get these.
    const serviceID = 'service_n26156w';
    const templateID = 'template_c8rywek'; // Template for emails TO YOU
    const autoReplyTemplateID = 'template_llbf4os'; // OPTIONAL: Template for emails TO THE CLIENT
    const publicKey = 'i9qoxuZMmmU_Xw989';
    // -----------------------------------------

    if (!formRef.current) return;
    
    // Send email to you (the site owner)
    window.emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then((result) => {
          console.log('Admin EmailJS Success:', result.text);
          
          // After successfully sending to admin, send auto-reply to the user if configured
          if (autoReplyTemplateID && formRef.current) {
              window.emailjs.sendForm(serviceID, autoReplyTemplateID, formRef.current, publicKey)
                .then((autoReplyResult) => {
                    console.log('Auto-Reply EmailJS Success:', autoReplyResult.text);
                }, (autoReplyError) => {
                    // Log error but don't show to user, as the main message went through
                    console.error('Auto-Reply EmailJS Error:', autoReplyError.text);
                });
          }

          // Update UI for the user
          setFormStatus({ message: 'Thank you! Your message has been sent successfully.', type: 'success' });
          setFormData({ name: '', email: '', subject: '', message: '', services: [] });
          setErrors({});
          setTouched({});
          formRef.current?.reset();
      }, (error) => {
          console.error('Admin EmailJS Error:', error.text);
          setFormStatus({ message: 'Failed to send message. Please try again later.', type: 'error' });
      });
  };

  const formInputBaseClasses = "w-full p-3 border rounded-md font-sans text-base text-text-dark transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-green/50";

  const getStatusClasses = () => {
    switch (formStatus.type) {
        case 'sending': return 'text-blue-600 bg-blue-100';
        case 'success': return 'text-green-800 bg-green-100';
        case 'error': return 'text-red-800 bg-red-100';
        default: return 'hidden';
    }
  };

  return (
    <div className="bg-white">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-text-dark mb-4">Contact Us</h1>
            <p className="text-dark-gray max-w-3xl mx-auto text-lg">
              Reach out to us for any inquiries or to start your business journey with us.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="contact-info">
              <div className="flex items-start mb-8">
                <MapPinIcon className="h-8 w-8 text-primary-green mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-text-dark mb-1">Our Location</h3>
                  <p className="text-dark-gray">Victoria Island, Lagos, Nigeria</p>
                </div>
              </div>
              <div className="flex items-start mb-8">
                <PhoneIcon className="h-8 w-8 text-primary-green mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-text-dark mb-1">Phone Number</h3>
                  <p className="text-dark-gray">+234-907-6755-027</p>
                </div>
              </div>
              <div className="flex items-start mb-8">
                <EnvelopeIcon className="h-8 w-8 text-primary-green mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-text-dark mb-1">Email Address</h3>
                  <p className="text-dark-gray">greendeeckafrica@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start mb-8">
                <ClockIcon className="h-8 w-8 text-primary-green mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-text-dark mb-1">Working Hours</h3>
                  <p className="text-dark-gray">Monday - Friday: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div id="contact-form" className="bg-light-green p-8 rounded-lg">
              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                 {/* Hidden input for services to be sent via EmailJS */}
                 <input type="hidden" name="services" value={formData.services.join(', ')} />

                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 font-medium text-dark-gray">Full Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} className={`${formInputBaseClasses} ${touched.name && errors.name ? 'border-red-500' : 'border-[#ddd]'}`} placeholder="Enter your name" required aria-required="true" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
                  {touched.name && errors.name && <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 font-medium text-dark-gray">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} className={`${formInputBaseClasses} ${touched.email && errors.email ? 'border-red-500' : 'border-[#ddd]'}`} placeholder="Enter your email" required aria-required="true" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
                  {touched.email && errors.email && <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block mb-2 font-medium text-dark-gray">Subject</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} onBlur={handleBlur} className={`${formInputBaseClasses} ${touched.subject && errors.subject ? 'border-red-500' : 'border-[#ddd]'}`} placeholder="Enter subject" required aria-required="true" aria-invalid={!!errors.subject} aria-describedby={errors.subject ? "subject-error" : undefined} />
                  {touched.subject && errors.subject && <p id="subject-error" className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>
                <fieldset className="mb-6">
                    <legend className="block mb-2 font-medium text-dark-gray">Services of Interest</legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                        {servicesNeeded.map(service => (
                            <div key={service.id} className="flex items-center">
                                <input type="checkbox" id={service.id} name="services_checkbox" value={service.label} checked={formData.services.includes(service.label)} onChange={handleCheckboxChange} className="h-4 w-4 rounded border-gray-300 text-primary-green focus:ring-primary-green" />
                                <label htmlFor={service.id} className="ml-2 text-dark-gray">{service.label}</label>
                            </div>
                        ))}
                    </div>
                    {touched.services && errors.services && <p id="services-error" className="text-red-500 text-sm mt-2">{errors.services}</p>}
                </fieldset>
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium text-dark-gray">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} onBlur={handleBlur} rows={5} className={`${formInputBaseClasses} ${touched.message && errors.message ? 'border-red-500' : 'border-[#ddd]'}`} placeholder="Enter your message" required aria-required="true" aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined}></textarea>
                  {touched.message && errors.message && <p id="message-error" className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                <button type="submit" className="w-full btn bg-primary-green text-white py-3 px-8 rounded-full font-medium transition-all duration-300 border-2 border-primary-green hover:bg-transparent hover:text-primary-green disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center" disabled={formStatus.type === 'sending'}>
                    {formStatus.type === 'sending' ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                        </>
                    ) : (
                        'Send Message'
                    )}
                </button>
                {formStatus.message && (
                    <div className={`mt-4 text-center p-3 rounded-md ${getStatusClasses()}`} role="status">
                        {formStatus.message}
                    </div>
                )}
              </form>
            </div>
          </div>
          <div className="mt-16 h-96 rounded-lg overflow-hidden shadow-custom">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63427.91572973887!2d3.385011681283621!3d6.447545464436531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0x573d66cb5f1a5624!2sVictoria%20Island%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1690000000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps location of GreenDeck Africa in Victoria Island, Lagos"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;