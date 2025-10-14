import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ChartBarIcon, CodeBracketIcon, BanknotesIcon, CheckCircleIcon, ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';

const services = [
  {
    slug: 'business-development-management',
    name: 'Business Development & Management',
    description: 'We provide strategic guidance to foster growth and streamline operations.',
    features: [
        'Market research and analysis',
        'Strategic business planning',
        'Operational efficiency improvements',
        'Performance management systems'
    ],
    icon: ChartBarIcon,
    tooltip: 'Icon representing business growth and analytics',
    details: {
      title: 'Strategic Business Development & Management',
      imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      sections: [
        {
          heading: "What We Do",
          content: [
            "Our Business Development & Management service is designed to be the engine of your company's growth. We partner with you to identify new market opportunities, build strategic partnerships, and create sustainable long-term value.",
            "From initial market analysis to implementing scalable operational models, we provide the expertise needed to navigate the complexities of the African market."
          ]
        },
        {
          heading: "Our Approach",
          content: [
            "We employ a data-driven approach, starting with a comprehensive analysis of your business and the competitive landscape. We then co-create a strategic roadmap with clear, actionable steps.",
            "Our hands-on management support ensures that these strategies are not just planned but are executed flawlessly, driving tangible results and improving your bottom line."
          ]
        },
        {
          heading: "Key Benefits",
          content: [
            "Increased market share and revenue streams.",
            "Enhanced operational efficiency and productivity.",
            "Improved decision-making through data-backed insights.",
            "Sustainable growth and long-term business resilience."
          ]
        }
      ],
      cta: "Ready to scale your business? Let's create a winning strategy together."
    }
  },
  {
    slug: 'web-mobile-app-development',
    name: 'Website/Mobile App Development',
    description: 'Our exceptionally focused team offers the best digital solutions for your business.',
    features: [
        'Custom website design and development',
        'Native and hybrid mobile applications',
        'E-commerce solutions and integrations',
        'UI/UX design and user testing'
    ],
    icon: CodeBracketIcon,
    tooltip: 'Icon representing code and digital solutions',
    details: {
      title: 'Cutting-Edge Web & Mobile App Development',
      imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      sections: [
        {
          heading: "What We Build",
          content: [
            "In today's digital-first world, a powerful online presence is non-negotiable. We build high-performance, visually stunning, and user-friendly websites and mobile applications that engage your audience and drive conversions.",
            "Whether you need a sophisticated e-commerce platform, a corporate website, or a cross-platform mobile app, our development team has the skills to bring your vision to life."
          ]
        },
        {
          heading: "Our Process",
          content: [
            "Our development process is collaborative and transparent. We follow agile methodologies, starting with UI/UX design and wireframing, moving through development and rigorous testing, and culminating in a seamless launch.",
            "We prioritize clean code, scalability, and security to ensure your digital asset is a long-term investment that grows with your business."
          ]
        },
        {
          heading: "Key Benefits",
          content: [
            "Enhanced brand credibility and online presence.",
            "Improved customer engagement and user experience.",
            "Scalable solutions that adapt to your business needs.",
            "Secure and reliable platforms built on modern technology."
          ]
        }
      ],
      cta: "Have a digital project in mind? Let's build something exceptional."
    }
  },
  {
    slug: 'business-loan-investment',
    name: 'Business Loan & Investment Plans',
    description: 'We offer the most efficient loan and investment plans for you and your organisation.',
    features: [
        'SME financing and loan applications',
        'Investment readiness and pitching',
        'Financial modeling and projections',
        'Connecting with venture capitalists and angel investors'
    ],
    icon: BanknotesIcon,
    tooltip: 'Icon representing finance and investment plans',
    details: {
      title: "Access to Capital: Business Loans & Investment",
      imageUrl: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      sections: [
        {
          heading: "How We Help",
          content: [
            "Access to funding is one of the biggest hurdles for African SMEs. We bridge this gap by connecting businesses with the right financial resources. We help you prepare compelling loan applications and investment pitches that resonate with lenders and investors.",
            "Our financial experts guide you through the entire process, from creating robust financial models to navigating due diligence."
          ]
        },
        {
          heading: "Our Network",
          content: [
            "Over the years, we have built a strong network of banks, venture capitalists, angel investors, and funding institutions across the continent.",
            "We leverage this network to match your business with the most suitable funding opportunities, ensuring you get the capital you need on favorable terms."
          ]
        },
        {
          heading: "Key Benefits",
          content: [
            "Improved chances of securing loans and investments.",
            "Access to a wide network of financial partners.",
            "Expert guidance on financial planning and pitching.",
            "Structured financial strategies for sustainable growth."
          ]
        }
      ],
      cta: "Looking for funding to fuel your growth? Let's get you investment-ready."
    }
  }
];

const ServiceDetail = ({ service }) => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/services')}
          className="group inline-flex items-center mb-8 font-semibold text-primary-green hover:text-dark-green transition-colors duration-200"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Services
        </button>

        <div className="mb-12">
            <img 
                src={service.details.imageUrl} 
                alt={service.details.title} 
                className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg" 
            />
        </div>

        <div className="bg-light-gray p-8 sm:p-12 rounded-lg shadow-custom">
            <h1 className="text-3xl sm:text-4xl font-bold text-text-dark mb-8">{service.details.title}</h1>
            
            {service.details.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-2xl font-semibold text-dark-gray mb-4 pb-2 border-b-2 border-primary-green/20">{section.heading}</h3>
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-dark-gray leading-relaxed mb-4">{paragraph}</p>
                ))}
              </div>
            ))}

            <div className="mt-12 p-6 bg-primary-green/10 rounded-lg text-center">
              <p className="text-lg text-text-dark font-medium mb-4">{service.details.cta}</p>
              <NavLink
                to="/contact"
                className="group btn inline-flex items-center justify-center bg-primary-green text-white py-3 px-8 rounded-full font-medium transition-all duration-300 border-2 border-primary-green hover:bg-transparent hover:text-primary-green"
              >
                Discuss Your Project
                <ArrowRightIcon className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </NavLink>
            </div>
        </div>
      </div>
    </section>
  );
};

const ServicesList = () => {
    return (
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
                        <div key={service.name} className="service-card bg-white rounded-lg overflow-hidden shadow-custom text-center p-8 flex flex-col">
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
                            <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                                <NavLink 
                                    to={`/services#${service.slug}`}
                                    className="font-semibold text-primary-green hover:text-dark-green transition-colors duration-200"
                                >
                                    Learn More
                                </NavLink>
                                <NavLink to="/contact" className="group btn inline-flex items-center justify-center bg-primary-green text-white py-2 px-6 rounded-full font-medium transition-all duration-300 border-2 border-primary-green hover:bg-transparent hover:text-primary-green text-sm">
                                    Get a Quote
                                    <ArrowRightIcon className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Services: React.FC = () => {
  const location = useLocation();
  
  const slug = location.hash.substring(1);
  const selectedService = services.find(s => s.slug === slug);

  return (
    <div className="bg-white">
        {selectedService ? <ServiceDetail service={selectedService} /> : <ServicesList />}
    </div>
  );
};

export default Services;