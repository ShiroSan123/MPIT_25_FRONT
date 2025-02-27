'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const news = [
  {
    title: 'Айсен Николаев : Детская школа искусств в Якутске остается в прежнем здании',
    date: '1 день назад',
    img: 'url(../cache/news/1.jpg)'
  },
  {
    title: 'Дирекция “ Дети Азии ” - обладатель премии “ Серебряный Лучник ” - Дальний Восток',
    date: '26.02.2025',
    img: 'url(../cache/news/1.jpg)'
  },
  {
    title: 'Якутские театры готовят премьеры к 80-летию Великой Победы, которая состоится 9 мая',
    date: '26.02.2025',
    img: 'url(../cache/news/1.jpg)'
  },
  {
    title: 'Не просто история о любви. Режиссер Айал Струкин – о создании первой якутской дорамы «Мой парень – Айдол!»',
    date: '26.02.2025',
    img: 'url(../cache/news/1.jpg)'
  },
  {
    title: 'Фестиваль «Путешествие на Полюс холода-2025» пройдет в Оймяконе в самой холодной точке.',
    date: '26.02.2025',
    img: 'url(../cache/news/1.jpg)'
  }
];

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <div className='py-[100px]'>
        <div className='w-8/12 border-2 border-black py-[100px] mx-auto flex gap-[20px]'>
          <div className='w-8/12 border border-red-500'>
            {news.map((article, index) => (
              <div key={index} className={index === 0 ? 'w-full border-2 border-blue-500 h-[20vh] bg-[{article.img}] bg-cover' : ''}>
                <img src={article.img} className='w-20 h-20'/>
                <h6 className="font-bold uppercase">{article.title}</h6>
                <p className="text-gray-500 text-sm">{article.date}</p>
              </div>
            ))}
          </div>
          <div className='w-4/12 border border-red-500'></div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
