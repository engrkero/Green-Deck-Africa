import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { ChartBarIcon, CodeBracketIcon, BanknotesIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

const services = [
  {
    slug: 'business-development-management',
    name: 'Business Development & Management',
    description: 'We provide strategic guidance to foster growth and streamline operations.',
    icon: ChartBarIcon,
  },
  {
    slug: 'web-mobile-app-development',
    name: 'Website/Mobile App Development',
    description: 'Our exceptionally focused team offers the best digital solutions for your business.',
    icon: CodeBracketIcon,
  },
  {
    slug: 'business-loan-investment',
    name: 'Business Loan & Investment Plans',
    description: 'We offer the most efficient loan and investment plans for you and your organisation.',
    icon: BanknotesIcon,
  }
];

const StatCounter = ({ endValue, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    const end = endValue;
                    if (start === end) return;

                    let startTimestamp: number | null = null;
                    const step = (timestamp: number) => {
                        if (!startTimestamp) startTimestamp = timestamp;
                        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                        setCount(Math.floor(progress * (end - start) + start));
                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        }
                    };
                    window.requestAnimationFrame(step);
                    observer.unobserve(ref.current!);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [endValue, duration]);

    return (
        <div ref={ref} className="stat-number text-4xl font-bold mb-2">
            {count}
        </div>
    );
};


const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-light-green to-white py-24 sm:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-text-dark">
                Simply Better <span className="text-primary-green relative z-10 after:content-[''] after:absolute after:bottom-1.5 after:left-0 after:w-full after:h-3 after:bg-primary-green/20 after:-z-10">Business Solutions</span> for Africa
              </h1>
              <p className="text-lg text-dark-gray mb-8">
                GreenDeck Africa provides easy ways for SMEs and enterprises across Africa to develop, manage and finance their businesses to the highest value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <NavLink to="/services" className="btn bg-primary-green text-white py-3 px-8 rounded-full font-medium transition-all duration-300 border-2 border-primary-green hover:bg-transparent hover:text-primary-green hover:-translate-y-1 hover:shadow-lg">
                  Our Services
                </NavLink>
                <NavLink to="/contact#contact-form" className="btn bg-transparent text-primary-green py-3 px-8 rounded-full font-medium transition-all duration-300 border-2 border-primary-green hover:bg-primary-green hover:text-white hover:-translate-y-1 hover:shadow-lg">
                  Contact Us
                </NavLink>
              </div>
            </div>
            <div className="md:w-1/2 text-center">
              <img src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="African Business Professionals" className="max-w-full rounded-lg shadow-2xl"/>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-green py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="stat-item">
                <StatCounter endValue={250} />
                <div className="stat-text text-lg font-medium">Satisfied Clients</div>
            </div>
            <div className="stat-item">
                <StatCounter endValue={180} />
                <div className="stat-text text-lg font-medium">Projects Completed</div>
            </div>
            <div className="stat-item">
                <StatCounter endValue={85} />
                <div className="stat-text text-lg font-medium">Loans Facilitated</div>
            </div>
            <div className="stat-item">
                <StatCounter endValue={5} />
                <div className="stat-text text-lg font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-text-dark mb-4">Our Services</h2>
                <p className="text-dark-gray max-w-3xl mx-auto text-lg">
                    Our expertise is here to drive high development, management, traffic, and great revenue to your business or idea.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                    <div key={service.slug} className="group service-card bg-white rounded-lg overflow-hidden shadow-custom text-center p-10 flex flex-col">
                        <service.icon className="h-16 w-16 text-primary-green mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                        <h3 className="text-2xl font-bold mb-4 text-text-dark">{service.name}</h3>
                        <p className="text-dark-gray mb-6 flex-grow">{service.description}</p>
                        <NavLink to={`/services#${service.slug}`} className="btn mt-auto inline-flex items-center justify-center bg-primary-green text-white py-2 px-6 rounded-full font-medium transition-all duration-300 border-2 border-primary-green hover:bg-transparent hover:text-primary-green">
                            Learn More
                            <ArrowRightIcon className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;