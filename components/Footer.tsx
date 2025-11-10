
import React from 'react';

const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>;
const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const TelegramIcon: React.FC<{ className?: string }> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 21-5z"></path></svg>;


const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-brand-beige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-brand-light-green">Проект "Природа"</h3>
            <p className="mt-2 text-stone-300">Сообщество, создающее будущее в гармонии с природой.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white tracking-wider">Навигация</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#/" className="hover:text-brand-light-green transition-colors">Главная</a></li>
              <li><a href="#/settlement" className="hover:text-brand-light-green transition-colors">Поселение</a></li>
              <li><a href="#/community" className="hover:text-brand-light-green transition-colors">Сообщество</a></li>
              <li><a href="#/events" className="hover:text-brand-light-green transition-colors">Календарь</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white tracking-wider">Следите за нами</h3>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-stone-300 hover:text-brand-light-green transition-colors"><span className="sr-only">Telegram</span><TelegramIcon className="h-6 w-6"/></a>
              <a href="#" className="text-stone-300 hover:text-brand-light-green transition-colors"><span className="sr-only">Instagram</span><InstagramIcon className="h-6 w-6"/></a>
              <a href="#" className="text-stone-300 hover:text-brand-light-green transition-colors"><span className="sr-only">Twitter</span><TwitterIcon className="h-6 w-6"/></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-brand-gray text-center text-stone-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Проект "Природа". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
