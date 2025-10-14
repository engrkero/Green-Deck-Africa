import React from 'react';
import AccordionItem from '../components/AccordionItem';

const faqs = [
  {
    question: 'What is GreenDeck Africa?',
    answer: 'GreenDeck Africa is a business and financial solutions provider dedicated to helping Small and Medium-sized Enterprises (SMEs) and larger enterprises across Africa. We offer services in business development, management, web/mobile app development, and access to financing to help businesses grow and thrive.'
  },
  {
    question: 'What types of businesses do you work with?',
    answer: 'We work with a diverse range of businesses, from startups and SMEs to established enterprises across various industries. Our solutions are tailored to meet the unique needs and challenges of each client, regardless of their size or sector.'
  },
  {
    question: 'How does the business development process work?',
    answer: 'Our process begins with a deep-dive analysis of your business, market, and objectives. We then collaborate with you to create a strategic roadmap with actionable steps for growth. We provide hands-on support to ensure these strategies are implemented effectively, leading to measurable results.'
  },
  {
    question: 'What technologies do you use for web and mobile development?',
    answer: 'We use modern, robust, and scalable technologies to build high-quality digital products. Our stack includes popular frameworks like React, and others depending on the project requirements. We prioritize clean code, security, and a great user experience.'
  },
  {
    question: 'How can you help my business secure funding?',
    answer: 'We assist businesses in becoming "investment-ready". This includes developing solid business plans, creating financial models, and preparing compelling pitches. We then leverage our extensive network of banks, angel investors, and venture capitalists to connect you with the right funding opportunities.'
  },
  {
    question: 'What is the typical timeline for a project?',
    answer: 'Project timelines vary depending on the scope and complexity of the work. A simple website might take a few weeks, while a comprehensive business development strategy or mobile app could take several months. We always provide a detailed project timeline after our initial consultation.'
  }
];

const FAQ: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="py-24 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-text-dark mb-4">Frequently Asked Questions</h1>
            <p className="text-dark-gray max-w-2xl mx-auto text-lg">
              Have questions? We have answers. If you can't find what you're looking for, feel free to contact us directly.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;