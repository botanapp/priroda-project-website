
import React from 'react';
import Section from '../components/Section';
import { events } from '../data/mockData';
import { Event } from '../types';

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
        <img src={event.imageUrl} alt={event.title} className="w-full h-56 object-cover" />
        <div className="p-6 flex flex-col flex-grow">
            <p className="text-sm text-brand-light-green font-semibold">{event.date}</p>
            <h3 className="mt-2 text-xl font-bold text-brand-dark">{event.title}</h3>
            <p className="mt-2 text-brand-gray flex-grow">{event.description}</p>
            <button className="mt-4 w-full bg-brand-green text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-light-green transition-colors">
                Купить билет
            </button>
        </div>
    </div>
);


const EventsPage: React.FC = () => {
    const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const calendarDays = Array.from({ length: 35 }, (_, i) => {
        const day = i - 3;
        const event = events.find(e => new Date(e.date).getDate() === day);
        return { day, event };
    });


  return (
    <div>
        <Section title="Календарь мероприятий" subtitle="Все наши события в одном месте. Планируйте свой визит!">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-2 bg-white border border-brand-green text-brand-green rounded-full hover:bg-brand-green hover:text-white transition-colors">Все</button>
            <button className="px-6 py-2 bg-white border border-stone-300 text-brand-gray rounded-full hover:border-brand-green hover:text-brand-green transition-colors">Поселение</button>
            <button className="px-6 py-2 bg-white border border-stone-300 text-brand-gray rounded-full hover:border-brand-green hover:text-brand-green transition-colors">Сообщество</button>
            <button className="px-6 py-2 bg-white border border-stone-300 text-brand-gray rounded-full hover:border-brand-green hover:text-brand-green transition-colors">Исследования</button>
        </div>

        {/* Calendar Grid (Visual Mock) */}
        <div className="max-w-5xl mx-auto bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
                <button className="text-brand-green">&larr;</button>
                <h3 className="text-2xl font-bold text-brand-dark">Июль 2024</h3>
                <button className="text-brand-green">&rarr;</button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center font-semibold text-brand-gray">
                {days.map(day => <div key={day} className="py-2">{day}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-1">
                {calendarDays.map(({day, event}, index) => (
                    <div key={index} className={`h-20 sm:h-28 border border-stone-100 p-1 sm:p-2 text-left ${day <= 0 ? 'bg-stone-50 text-stone-400' : 'bg-white'}`}>
                       {day > 0 && <span className="text-sm">{day}</span>}
                       {event && (
                           <div className="mt-1 bg-brand-light-green text-white text-xs rounded p-1 truncate cursor-pointer" title={event.title}>
                               {event.title}
                           </div>
                       )}
                    </div>
                ))}
            </div>
        </div>
      </Section>
      <Section title="Список мероприятий" className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event: Event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
      </Section>
    </div>
  );
};

export default EventsPage;
