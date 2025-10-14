import React from 'react';
import { NavLink } from 'react-router-dom';
import { FacebookIcon, XIcon, InstagramIcon, WhatsappIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  // --- START: Mailchimp Configuration ---
  // See README.md for instructions on how to get these values from your Mailchimp account.
  // 1. Paste your Mailchimp form action URL here.
  const mailchimpActionUrl = 'https://gmail.us22.list-manage.com/subscribe/post?u=d3cd8e84444a177a23ea6f43c&id=36531cb810&f_id=00edc2e1f0'; // e.g., 'https://yourname.us1.list-manage.com/subscribe/post?u=...&id=...'
  // 2. Paste the name of the hidden input field for bot protection.
  const mailchimpBotProtectionName = 'b_d3cd8e84444a177a23ea6f43c_36531cb810'; // e.g., 'b_1a2b3c4d...'
  // --- END: Mailchimp Configuration ---

  return (
    <footer className="bg-dark-green text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div className="footer-column">
            <h3 className="text-xl font-semibold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[50px] after:h-[3px] after:bg-primary-green">
              GreenDeck Africa
            </h3>
            <p className="text-[#bdc3c7]">
              Simply Better Business Solutions for Africa. Empowering SMEs and enterprises to reach their highest potential.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-primary-green hover:-translate-y-1">
                <FacebookIcon />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-primary-green hover:-translate-y-1">
                <XIcon />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-primary-green hover:-translate-y-1">
                <InstagramIcon />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-primary-green hover:-translate-y-1">
                <WhatsappIcon />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-column">
            <h3 className="text-xl font-semibold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[50px] after:h-[3px] after:bg-primary-green">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><NavLink to="/" className="text-[#bdc3c7] hover:text-primary-green transition-colors">Home</NavLink></li>
              <li><NavLink to="/services" className="text-[#bdc3c7] hover:text-primary-green transition-colors">Services</NavLink></li>
              <li><NavLink to="/about" className="text-[#bdc3c7] hover:text-primary-green transition-colors">About Us</NavLink></li>
              <li><NavLink to="/faq" className="text-[#bdc3c7] hover:text-primary-green transition-colors">FAQ</NavLink></li>
              <li><NavLink to="/contact" className="text-[#bdc3c7] hover:text-primary-green transition-colors">Contact</NavLink></li>
            </ul>
          </div>
          
          {/* Our Services Column */}
          <div className="footer-column">
            <h3 className="text-xl font-semibold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[50px] after:h-[3px] after:bg-primary-green">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li><NavLink to="/contact#contact-form" className="text-[#bdc3c7] hover:text-primary-green transition-colors">Business Development</NavLink></li>
              <li><NavLink to="/contact#contact-form" className="text-[#bdc3c7] hover:text-primary-green transition-colors">Website Development</NavLink></li>
              <li><NavLink to="/contact#contact-form" className="text-[#bdc3c7] hover:text-primary-green transition-colors">Mobile App Development</NavLink></li>
              <li><NavLink to="/contact#contact-form" className="text-[#bdc3c7] hover:text-primary-green transition-colors">Business Loans</NavLink></li>
            </ul>
          </div>
          
          {/* Newsletter Column */}
          <div className="footer-column">
            <h3 className="text-xl font-semibold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[50px] after:h-[3px] after:bg-primary-green">
              Newsletter
            </h3>
            <p className="text-[#bdc3c7] mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form 
              action={mailchimpActionUrl || undefined}
              method="post"
              target="_blank"
              noValidate
            >
              <div className="mb-4">
                <input 
                  type="email" 
                  name="EMAIL" // This name is required by Mailchimp
                  className="w-full p-2.5 border border-[#ddd] rounded-md font-sans text-base bg-white text-text-dark" 
                  placeholder="Enter your email" 
                  required 
                />
              </div>
              {mailchimpBotProtectionName && (
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                    <input type="text" name={mailchimpBotProtectionName} tabIndex={-1} defaultValue="" />
                </div>
              )}
              <button 
                type="submit" 
                disabled={!mailchimpActionUrl}
                className="w-full inline-block bg-primary-green text-white py-2.5 px-8 rounded-full font-medium transition-all duration-300 border-2 border-primary-green hover:bg-white hover:text-primary-green disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-white/10 text-[#bdc3c7] text-sm">
          <p>&copy; {new Date().getFullYear()} GreenDeck Africa. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;