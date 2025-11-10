
import React, { useState } from 'react';
import { FAQItem } from '../types';

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
);

interface AccordionProps {
    items: FAQItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-3xl mx-auto">
            {items.map((item, index) => (
                <div key={index} className="border-b border-stone-200">
                    <button
                        onClick={() => toggleItem(index)}
                        className="w-full flex justify-between items-center text-left py-4 px-2 hover:bg-stone-100 transition-colors"
                    >
                        <span className="text-lg font-medium text-brand-dark">{item.question}</span>
                        <ChevronDownIcon className={`h-6 w-6 text-brand-green transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                    >
                        <div className="p-4 bg-white">
                            <p className="text-brand-gray">{item.answer}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
