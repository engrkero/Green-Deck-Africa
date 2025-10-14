import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 bg-white shadow-sm rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green/50"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-text-dark">{question}</h3>
        <ChevronDownIcon
          className={`h-6 w-6 text-primary-green transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
            <div className="p-6 pt-0 text-dark-gray leading-relaxed">
            {answer}
            </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;