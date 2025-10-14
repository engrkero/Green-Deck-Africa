import React from 'react';
import { NavLink } from 'react-router-dom';
import { ChartBarIcon, CodeBracketIcon, BanknotesIcon, CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

const services = [
  {
    name: 'Business Development & Management',
    description: 'We provide strategic guidance to foster growth and streamline operations.',
    features: [
        'Market research and analysis',
        'Strategic business planning',
        'Operational efficiency improvements',
        'Performance management systems'
    ],
    icon: ChartBarIcon,
    tooltip: 'Icon representing business growth and analytics'
  },
  {
    name: 'Website/Mobile App Development',
    description: 'Our exceptionally focused team offers the best digital solutions for your business.',
    features: [
        'Custom website design and development',
        'Native and hybrid mobile applications',
        'E-commerce solutions and integrations',
        'UI/UX design and user testing'
    ],
    icon: CodeBracketIcon,
    tooltip: 'Icon representing code and digital solutions'
  },
  {
    name: 'Business Loan & Investment Plans',
    description: 'We offer the most efficient loan and investment plans for you and your organisation.',
    features: [
        'SME financing and loan applications',
        'Investment readiness and pitching',
        'Financial modeling and projections',
        'Connecting with venture capitalists and angel investors'
    ],
    icon: BanknotesIcon,
    tooltip: 'Icon representing finance and investment plans'
  }
];

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-text-dark mb-4">Our Services</h1>
                <p className="text-dark-gray max-w-3xl mx-auto text-lg">
                    Our expertise is here to drive high development, management, traffic, and great revenue to your business or idea.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                    <div key={service.name} className="service-card bg-white rounded-lg overflow-hidden shadow-custom transition-all duration-300 hover:-translate-y-2 hover:shadow-xl text-center p-8 flex flex-col">
                        <div title={service.tooltip}>
                          <service.icon className="h-16 w-16 text-primary-green mx-auto mb-6" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-text-dark">{service.name}</h3>
                        <p className="text-dark-gray mb-6 flex-grow">{service.description}</p>
                        <ul className="text-left space-y-3 mb-8">
                            {service.features.map(feature => (
                                <li key={feature} className="flex items-start">
                                    <CheckCircleIcon className="h-6 w-6 text-primary-green mr-3 flex-shrink-0 mt-0.5" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <NavLink to="/contact" className="group mt-auto btn inline-flex items-center justify-center bg-primary-green text-white py-3 px-8 rounded-full font-medium transition-all duration-300 border-2 border-primary-green hover:bg-transparent hover:text-primary-green">
                            Discuss Your Project
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

export default Services;