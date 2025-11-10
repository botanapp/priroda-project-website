
import React, { useState } from 'react';
import Section from '../components/Section';
import { newsArticles } from '../data/mockData';
import { NewsArticle } from '../types';

const NewsCard: React.FC<{ article: NewsArticle }> = ({ article }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
        <img src={article.imageUrl} alt={article.title} className="w-full md:w-1/3 h-64 md:h-auto object-cover" />
        <div className="p-6 flex flex-col">
            <p className="text-sm text-brand-light-green font-semibold">{article.category} &bull; {article.date}</p>
            <h3 className="mt-2 text-2xl font-bold text-brand-dark">{article.title}</h3>
            <p className="mt-2 text-brand-gray flex-grow">{article.excerpt}</p>
            <a href="#" className="mt-4 text-brand-green font-bold hover:underline self-start">Читать далее &rarr;</a>
        </div>
    </div>
);

type Category = 'Все' | 'Поселение' | 'Сообщество' | 'Исследования' | 'Мероприятия';

const NewsPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('Все');
    const categories: Category[] = ['Все', 'Поселение', 'Сообщество', 'Исследования', 'Мероприятия'];

    const filteredArticles = activeCategory === 'Все'
        ? newsArticles
        : newsArticles.filter(article => article.category === activeCategory);

    return (
        <Section title="Новости проекта" subtitle="Будьте в курсе последних событий, достижений и анонсов.">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 text-sm md:text-base rounded-full font-semibold transition-colors ${activeCategory === category ? 'bg-brand-green text-white' : 'bg-white text-brand-gray hover:bg-stone-100'}`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="max-w-5xl mx-auto space-y-8">
                {filteredArticles.map(article => (
                    <NewsCard key={article.id} article={article} />
                ))}
            </div>
            {/* Pagination */}
            <div className="flex justify-center mt-12">
                <nav className="flex items-center space-x-2">
                    <button className="px-4 py-2 bg-white border border-stone-300 rounded-md text-brand-gray">&larr; Назад</button>
                    <button className="px-4 py-2 bg-brand-green border border-brand-green text-white rounded-md">1</button>
                    <button className="px-4 py-2 bg-white border border-stone-300 rounded-md text-brand-gray">2</button>
                    <button className="px-4 py-2 bg-white border border-stone-300 rounded-md text-brand-gray">3</button>
                    <button className="px-4 py-2 bg-white border border-stone-300 rounded-md text-brand-gray">Вперед &rarr;</button>
                </nav>
            </div>
        </Section>
    );
};

export default NewsPage;
