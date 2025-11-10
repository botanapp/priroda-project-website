
import React from 'react';
import Section from '../components/Section';
import { curators, teamMembers } from '../data/mockData';
import { TeamMember } from '../types';

const CommunityPage: React.FC = () => {
  return (
    <div>
      <Section title="Наше Сообщество" subtitle="Сила нашего проекта — в людях, объединенных общими ценностями и мечтой." className="bg-white">
        <div className="max-w-4xl mx-auto text-lg text-brand-gray text-left space-y-4">
            <p>Мы — сообщество людей из разных сфер, которых объединяет стремление к осознанной жизни, творчеству и взаимной поддержке. Мы строим не просто дома, а отношения, основанные на доверии, открытости и сотрудничестве.</p>
            <h3 className="text-2xl font-bold text-brand-dark pt-4">Наши ценности:</h3>
            <ul className="list-disc list-inside space-y-2">
                <li><span className="font-semibold">Гармония с природой:</span> Бережное отношение к земле и ресурсам.</li>
                <li><span className="font-semibold">Развитие:</span> Постоянное обучение, личностный и духовный рост.</li>
                <li><span className="font-semibold">Открытость:</span> Честный диалог и готовность слышать друг друга.</li>
                <li><span className="font-semibold">Со-творчество:</span> Реализация совместных проектов на благо всех.</li>
            </ul>
        </div>
      </Section>

      <Section title="Как вступить в сообщество?">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
                <div className="flex items-center justify-center h-16 w-16 mx-auto bg-brand-light-green text-white rounded-full text-2xl font-bold">1</div>
                <h3 className="mt-4 text-xl font-semibold">Познакомьтесь с нами</h3>
                <p className="mt-2 text-brand-gray">Приезжайте на день открытых дверей или наш фестиваль, чтобы почувствовать атмосферу.</p>
            </div>
            <div className="p-6">
                <div className="flex items-center justify-center h-16 w-16 mx-auto bg-brand-light-green text-white rounded-full text-2xl font-bold">2</div>
                <h3 className="mt-4 text-xl font-semibold">Заполните анкету</h3>
                <p className="mt-2 text-brand-gray">Расскажите о себе, своих интересах и почему вы хотите присоединиться к нам.</p>
            </div>
            <div className="p-6">
                <div className="flex items-center justify-center h-16 w-16 mx-auto bg-brand-light-green text-white rounded-full text-2xl font-bold">3</div>
                <h3 className="mt-4 text-xl font-semibold">Пройдите собеседование</h3>
                <p className="mt-2 text-brand-gray">Пообщайтесь с основателями и кураторами, чтобы лучше узнать друг друга.</p>
            </div>
        </div>
      </Section>

      <Section title="Кураторы направлений" className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {curators.map((curator: TeamMember) => (
                  <div key={curator.name} className="flex flex-col items-center text-center">
                      <img src={curator.imageUrl} alt={curator.name} className="w-48 h-48 rounded-full object-cover shadow-lg" />
                      <h3 className="mt-6 text-2xl font-bold text-brand-dark">{curator.name}</h3>
                      <p className="text-brand-green font-semibold">{curator.role}</p>
                      <p className="mt-2 max-w-xs text-brand-gray">{curator.description}</p>
                  </div>
              ))}
          </div>
      </Section>
      
      <Section title="Фотогалерея участников">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[...teamMembers, ...curators].map((member, index) => (
            <div key={index}>
              <img src={member.imageUrl} alt={member.name} className="rounded-lg shadow-md aspect-square object-cover transform hover:scale-105 transition-transform" />
            </div>
          ))}
          <div className="rounded-lg shadow-md aspect-square object-cover bg-stone-200 flex items-center justify-center text-brand-gray">
              <p>Вы?</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default CommunityPage;
