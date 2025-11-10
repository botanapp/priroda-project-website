
import React from 'react';
import { NavLink } from 'react-router-dom';
import Section from '../components/Section';
import { teamMembers, events } from '../data/mockData';
import { TeamMember, Event } from '../types';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-brand-dark text-white">
        <img src="https://picsum.photos/seed/nature-hero/1920/1080" alt="Nature" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Проект "Природа"</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-stone-200">
            Создаем пространство для жизни, творчества и развития в гармонии с окружающим миром.
          </p>
          <div className="mt-10">
            <NavLink
              to="/community"
              className="inline-block bg-brand-light-green text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-colors transform hover:scale-105"
            >
              Присоединиться к нам
            </NavLink>
          </div>
        </div>
      </div>

      {/* Banner Links Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border border-stone-200 rounded-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-brand-green">Поселение</h3>
              <p className="mt-2 text-brand-gray">Узнайте о нашей земле, планах строительства и эко-технологиях.</p>
              <NavLink to="/settlement" className="mt-4 inline-block text-brand-light-green font-semibold hover:underline">Подробнее &rarr;</NavLink>
            </div>
            <div className="p-8 border border-stone-200 rounded-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-brand-green">Сообщество</h3>
              <p className="mt-2 text-brand-gray">Познакомьтесь с нашими ценностями, участниками и миссией.</p>
              <NavLink to="/community" className="mt-4 inline-block text-brand-light-green font-semibold hover:underline">Подробнее &rarr;</NavLink>
            </div>
            <div className="p-8 border border-stone-200 rounded-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-brand-green">Календарь</h3>
              <p className="mt-2 text-brand-gray">Не пропустите наши фестивали, семинары и общие сборы.</p>
              <NavLink to="/events" className="mt-4 inline-block text-brand-light-green font-semibold hover:underline">Подробнее &rarr;</NavLink>
            </div>
          </div>
        </div>
      </section>
      
      {/* Video Presentation */}
      <Section title="Видео-презентация проекта" subtitle="Посмотрите короткое видео, чтобы лучше понять нашу идею и цели.">
        <div className="max-w-4xl mx-auto aspect-video bg-brand-dark rounded-lg shadow-2xl flex items-center justify-center">
            <div className="text-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
                <p>Видео скоро будет здесь</p>
            </div>
        </div>
      </Section>

      {/* Upcoming Events */}
      <Section title="Анонсы ближайших мероприятий" subtitle="Присоединяйтесь к нам на следующих событиях. Будет интересно!" className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.slice(0, 4).map((event: Event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-sm text-brand-light-green font-semibold">{event.date}</p>
                <h3 className="mt-2 text-xl font-bold text-brand-dark">{event.title}</h3>
                <p className="mt-2 text-brand-gray">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section title="Ядро проекта" subtitle="Познакомьтесь с людьми, которые стоят у истоков и двигают проект вперед.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member: TeamMember) => (
            <div key={member.name} className="text-center">
              <img src={member.imageUrl} alt={member.name} className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg" />
              <h3 className="mt-4 text-xl font-semibold text-brand-dark">{member.name}</h3>
              <p className="text-brand-green">{member.role}</p>
            </div>
          ))}
        </div>
      </Section>

    </div>
  );
};

export default Home;
