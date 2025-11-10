
import React from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, children, className = '', titleClassName = '' }) => {
  return (
    <section className={`py-12 md:py-20 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold text-brand-green tracking-tight ${titleClassName}`}>{title}</h2>
          {subtitle && <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-gray">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
