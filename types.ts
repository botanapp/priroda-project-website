
export interface NavLinkItem {
  name: string;
  path: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  description?: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  type: 'settlement' | 'community' | 'research';
}

export interface NewsArticle {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  category: 'Поселение' | 'Сообщество' | 'Исследования' | 'Мероприятия';
}

export interface FAQItem {
  question: string;
  answer: string;
}
