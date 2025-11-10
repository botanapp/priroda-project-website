
import React from 'react';
import Section from '../components/Section';
import Accordion from '../components/Accordion';
import { settlementFAQs } from '../data/mockData';

const TimelineStep: React.FC<{ title: string; description: string; isLast?: boolean }> = ({ title, description, isLast = false }) => (
    <div className="relative">
        {!isLast && <div className="absolute top-5 left-5 -ml-px w-0.5 h-full bg-brand-light-green"></div>}
        <div className="flex items-center space-x-4">
            <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-brand-light-green rounded-full text-white font-bold">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <div>
                <h4 className="text-xl font-semibold text-brand-dark">{title}</h4>
                <p className="mt-1 text-brand-gray">{description}</p>
            </div>
        </div>
    </div>
);

const SettlementPage: React.FC = () => {
  return (
    <div>
      <Section title="Наше Поселение" subtitle="Место, где мы строим наше будущее в гармонии с природой." className="bg-white">
        <div className="max-w-4xl mx-auto text-lg text-brand-gray text-left space-y-4">
            <p>Мы верим, что можно жить иначе: осознанно, экологично и в тесном контакте с природой и единомышленниками. Наше поселение — это не просто дома, это целая экосистема, основанная на принципах пермакультуры, уважения к ресурсам и добрососедства.</p>
            <p>Наша цель — создать самодостаточное и процветающее сообщество, где каждый сможет реализовать свой потенциал, растить здоровых детей и жить полной жизнью.</p>
        </div>
      </Section>

      <Section title="Дорожная карта строительства">
        <div className="max-w-2xl mx-auto space-y-8">
            <TimelineStep title="Этап 1: Приобретение земли и планирование" description="2023 г. - Выбор и оформление участка, разработка генплана." />
            <TimelineStep title="Этап 2: Инфраструктура и общинный дом" description="2024 г. - Прокладка дорог, строительство общего дома и мастерских." />
            <TimelineStep title="Этап 3: Первые жилые дома" description="2025 г. - Начало строительства индивидуальных эко-домов для участников." />
            <TimelineStep title="Этап 4: Развитие агрокультуры" description="2026 г. - Запуск пермакультурного огорода, закладка сада." isLast={true} />
        </div>
      </Section>
      
      <Section title="Галерея территории" className="bg-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <img src="https://picsum.photos/seed/gal1/600/600" alt="Территория 1" className="rounded-lg shadow-md aspect-square object-cover" />
              <img src="https://picsum.photos/seed/gal2/600/600" alt="Территория 2" className="rounded-lg shadow-md aspect-square object-cover" />
              <img src="https://picsum.photos/seed/gal3/600/600" alt="Территория 3" className="rounded-lg shadow-md aspect-square object-cover" />
              <img src="https://picsum.photos/seed/gal4/600/600" alt="Территория 4" className="rounded-lg shadow-md aspect-square object-cover" />
          </div>
      </Section>
      
      <Section title="Частые вопросы">
          <Accordion items={settlementFAQs} />
      </Section>
    </div>
  );
};

export default SettlementPage;
