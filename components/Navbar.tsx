import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { LogoIcon } from './icons/LogoIcon';

const NavLinks = [
  { name: 'HOME', path: '/' },
  { name: 'SERVICES', path: '/services' },
  { name: 'ABOUT', path: '/about' },
  { name: 'FAQ', path: '/faq' },
  { name: 'CONTACT US', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const linkClasses = "relative text-dark-gray hover:text-primary-green font-medium text-[1.1rem] transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-0 after:h-[3px] after:bg-primary-green after:transition-all after:duration-300 hover:after:w-full";
  const activeLinkClasses = "text-primary-green after:w-full";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If the click is on the toggle button, do nothing (its own onClick will handle it)
      if (buttonRef.current && buttonRef.current.contains(event.target as Node)) {
        return;
      }
      // If the click is outside the menu, close it
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="bg-white shadow-custom fixed w-full top-0 z-[1000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center py-4">
          <NavLink to="/" className="flex items-center">
            <LogoIcon className="h-12 w-auto" />
          </NavLink>

          <div className="hidden md:flex items-baseline space-x-8">
            {NavLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          
          <div className="md:hidden">
            <button
              ref={buttonRef}
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-gray text-2xl"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden absolute top-[76px] bg-white w-full h-[calc(100vh-76px)] transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        id="mobile-menu"
      >
        <div className="flex flex-col items-center pt-10 space-y-8">
          {NavLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `text-xl font-medium ${isActive ? 'text-primary-green' : 'text-dark-gray'}`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;