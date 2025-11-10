
import { TeamMember, Event, NewsArticle, FAQItem, NavLinkItem } from '../types';

export const navLinks: NavLinkItem[] = [
  { name: 'Главная', path: '/' },
  { name: 'Поселение', path: '/settlement' },
  { name: 'Сообщество', path: '/community' },
  { name: 'Календарь', path: '/events' },
  { name: 'Новости', path: '/news' },
  { name: 'Контакты', path: '/contacts' },
];

export const teamMembers: TeamMember[] = [
  { name: 'Алексей Иванов', role: 'Основатель, Идеолог', imageUrl: 'https://picsum.photos/seed/person1/400/400' },
  { name: 'Елена Петрова', role: 'Куратор сообщества', imageUrl: 'https://picsum.photos/seed/person2/400/400' },
  { name: 'Иван Сидоров', role: 'Главный по строительству', imageUrl: 'https://picsum.photos/seed/person3/400/400' },
  { name: 'Мария Кузнецова', role: 'Организатор мероприятий', imageUrl: 'https://picsum.photos/seed/person4/400/400' },
];

export const events: Event[] = [
  { id: 1, title: 'Летний фестиваль "Природа"', date: '20-22 Июля 2024', description: 'Три дня музыки, творчества и единения с природой.', imageUrl: 'https://picsum.photos/seed/event1/600/400', type: 'community' },
  { id: 2, title: 'Строительный уикенд', date: '05 Августа 2024', description: 'Присоединяйтесь к строительству общего дома. Нужны руки!', imageUrl: 'https://picsum.photos/seed/event2/600/400', type: 'settlement' },
  { id: 3, title: 'Семинар по пермакультуре', date: '15 Сентября 2024', description: 'Изучаем основы устойчивого земледелия.', imageUrl: 'https://picsum.photos/seed/event3/600/400', type: 'research' },
  { id: 4, title: 'День открытых дверей', date: '01 Октября 2024', description: 'Познакомьтесь с нашим проектом и сообществом.', imageUrl: 'https://picsum.photos/seed/event4/600/400', type: 'community' },
];

export const newsArticles: NewsArticle[] = [
  { id: 1, title: 'Завершение первого этапа строительства', date: '15 Июня 2024', excerpt: 'Мы успешно заложили фундамент главного общинного дома. Спасибо всем волонтерам!', imageUrl: 'https://picsum.photos/seed/news1/600/400', category: 'Поселение' },
  { id: 2, title: 'Наше сообщество выросло до 100 человек!', date: '10 Июня 2024', excerpt: 'Рады приветствовать новых участников в нашей большой и дружной семье.', imageUrl: 'https://picsum.photos/seed/news2/600/400', category: 'Сообщество' },
  { id: 3, title: 'Исследование местной флоры и фауны', date: '05 Июня 2024', excerpt: 'Наши исследователи каталогизировали более 50 видов растений.', imageUrl: 'https://picsum.photos/seed/news3/600/400', category: 'Исследования' },
  { id: 4, title: 'Анонс осеннего марафона мероприятий', date: '01 Июня 2024', excerpt: 'Готовьтесь к насыщенной осени! Скоро опубликуем полное расписание.', imageUrl: 'https://picsum.photos/seed/news4/600/400', category: 'Мероприятия' },
];

export const settlementFAQs: FAQItem[] = [
  { question: 'Можно ли приехать и посмотреть?', answer: 'Да, мы регулярно проводим дни открытых дверей. Следите за анонсами в календаре мероприятий.' },
  { question: 'Как принять участие в строительстве?', answer: 'Мы организуем строительные уикенды, где каждый может помочь. Опыт не требуется, только желание.' },
  { question: 'Какие технологии строительства вы используете?', answer: 'Мы придерживаемся принципов эко-строительства, используя местные и переработанные материалы.' },
  { question: 'Есть ли на территории коммуникации?', answer: 'Мы находимся в процессе подведения основных коммуникаций. На данный момент используем автономные системы.' },
];

export const curators: TeamMember[] = [
  { name: 'Дмитрий Волков', role: 'Направление "Эко-строительство"', imageUrl: 'https://picsum.photos/seed/curator1/400/400', description: 'Эксперт в области устойчивого строительства и натуральных материалов. Отвечает за все строительные проекты.' },
  { name: 'Анна Лебедева', role: 'Направление "Образование и Мероприятия"', imageUrl: 'https://picsum.photos/seed/curator2/400/400', description: 'Организует наши фестивали, семинары и мастер-классы. Создает образовательную программу проекта.' },
  { name: 'Сергей Козлов', role: 'Направление "Агрокультура"', imageUrl: 'https://picsum.photos/seed/curator3/400/400', description: 'Занимается развитием нашего огорода, сада и внедрением пермакультурных принципов.' },
];
