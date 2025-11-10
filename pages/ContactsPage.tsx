
import React from 'react';
import Section from '../components/Section';

const ContactsPage: React.FC = () => {
  return (
    <Section title="Свяжитесь с нами" subtitle="Мы всегда открыты к диалогу, новым идеям и сотрудничеству.">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-brand-dark mb-6">Форма обратной связи</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-gray">Ваше имя</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-gray">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green" />
            </div>
            <div>
              <label htmlFor="topic" className="block text-sm font-medium text-brand-gray">Тема обращения</label>
              <select id="topic" name="topic" className="mt-1 block w-full px-3 py-2 border border-stone-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green">
                <option>Общий вопрос</option>
                <option>Организация мероприятия</option>
                <option>Технический вопрос</option>
                <option>Коммерческое предложение</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-gray">Сообщение</label>
              <textarea id="message" name="message" rows={5} className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-brand-green text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-light-green transition-colors">
                Отправить сообщение
              </button>
            </div>
          </form>
        </div>
        
        {/* Contact Info & Map */}
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-brand-dark">Наши контакты</h3>
                <div className="mt-4 space-y-2 text-brand-gray">
                    <p><strong>Email:</strong> info@priroda.project</p>
                    <p><strong>Telegram:</strong> @priroda_project</p>
                    <p><strong>Адрес:</strong> Калужская область, рядом с деревней "Место Силы"</p>
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-brand-dark">Мы на карте</h3>
                <div className="mt-4 aspect-w-16 aspect-h-9 bg-stone-200 rounded-lg shadow-md flex items-center justify-center text-brand-gray">
                    <p>Карта скоро появится здесь</p>
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactsPage;
