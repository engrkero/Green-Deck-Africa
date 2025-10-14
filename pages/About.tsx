import React from 'react';
import { TrophyIcon, HandRaisedIcon, BriefcaseIcon } from '@heroicons/react/24/solid';
import { FacebookIcon, XIcon } from '../components/icons/SocialIcons';

const teamMembers = [
    { name: 'John Doe', role: 'Business Development Director', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Jane Smith', role: 'Lead Developer', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Michael Johnson', role: 'Finance Specialist', img: 'https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Sarah Williams', role: 'Project Manager', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Mission Section */}
      <section className="py-24 bg-light-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base text-primary-green font-semibold tracking-wide uppercase">Our Mission</h2>
            <h1 className="mt-2 text-4xl font-bold text-text-dark">Fostering Innovation and Growth</h1>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <p className="text-lg text-dark-gray mb-6">
                GreenDeck Africa is a platform that provides 'Simply Better business solutions'. We offer an easy way for SMEs and enterprises across Africa to develop, manage and finance their businesses to the foremost value. With every business, we create a fun and flexible environment while maintaining professionalism, efficiencies and excellence.
              </p>
              <p className="text-lg text-dark-gray">
                Let's give your business idea an ultimate medium to show its traits. Our expertise is here to drive highly development, management, traffic and great revenue to your business or idea. We are committed to being the catalyst that transforms promising ideas into thriving enterprises.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Diverse African business team collaborating" className="rounded-lg shadow-2xl" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-dark mb-4">Our Core Values</h2>
            <p className="text-dark-gray max-w-3xl mx-auto text-lg">
              The principles that guide our work and partnerships.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="value-card bg-white rounded-lg p-8 shadow-custom text-center transition-transform duration-300 hover:-translate-y-2">
              <TrophyIcon className="h-16 w-16 text-primary-green mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-text-dark">Excellence</h3>
              <p className="text-dark-gray">We are committed to delivering the highest quality of service and results, constantly striving for improvement and innovation.</p>
            </div>
            <div className="value-card bg-white rounded-lg p-8 shadow-custom text-center transition-transform duration-300 hover:-translate-y-2">
              <HandRaisedIcon className="h-16 w-16 text-primary-green mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-text-dark">Partnership</h3>
              <p className="text-dark-gray">We believe in building strong, collaborative relationships with our clients, working together towards shared goals and mutual success.</p>
            </div>
            <div className="value-card bg-white rounded-lg p-8 shadow-custom text-center transition-transform duration-300 hover:-translate-y-2">
              <BriefcaseIcon className="h-16 w-16 text-primary-green mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-text-dark">Professionalism</h3>
              <p className="text-dark-gray">We uphold the highest standards of integrity and professionalism while fostering a fun and flexible working environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-dark mb-4">Our Expert Team</h2>
            <p className="text-dark-gray max-w-3xl mx-auto text-lg">
              Meet the professionals behind our success.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => (
                <div key={member.name} className="team-member text-center bg-white rounded-lg overflow-hidden shadow-custom">
                    <div className="h-64 overflow-hidden">
                        <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy" />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-text-dark mb-1">{member.name}</h3>
                        <p className="text-primary-green font-medium mb-4">{member.role}</p>
                        <div className="flex justify-center gap-4">
                            <a href="#" className="flex items-center justify-center w-9 h-9 rounded-full bg-light-green text-primary-green transition-all duration-300 hover:bg-primary-green hover:text-white hover:-translate-y-1"><FacebookIcon /></a>
                            <a href="#" className="flex items-center justify-center w-9 h-9 rounded-full bg-light-green text-primary-green transition-all duration-300 hover:bg-primary-green hover:text-white hover:-translate-y-1"><XIcon /></a>
                        </div>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;