'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';

const news = [
	{
		title: 'Айсен Николаев : Детская школа искусств в Якутске остается в прежнем здании',
		date: '1 день назад',
		img: '/news/1.jpg'
	},
	{
		title: 'Дирекция “ Дети Азии ” - обладатель премии “ Серебряный Лучник ” - Дальний Восток',
		date: '26.02.2025',
		img: '/news/2.jpg'
	},
	{
		title: 'Якутские театры готовят премьеры к 80-летию Великой Победы, которая состоится 9 мая',
		date: '26.02.2025',
		img: '/news/3.jpg'
	},
	{
		title: 'Не просто история о любви. Режиссер Айал Струкин – о создании первой якутской дорамы «Мой парень – Айдол!»',
		date: '26.02.2025',
		img: '/news/4.jpg'
	},
	{
		title: 'Фестиваль «Путешествие на Полюс холода-2025» пройдет в Оймяконе в самой холодной точке.',
		date: '26.02.2025',
		img: '/news/5.jpg'
	}
];

const staticNews = {
	title: "Якутские театры готовят премьеры к 80-летию Великой Победы, которая состоится 9 мая",
	date: "25.02.2025",
	image: "/news-r/1.jpg",
};

export default function Home() {
	return (
		<main className="relative">
			<Header />
			<div className='w-8/12 py-[100px] mx-auto flex gap-[20px]'>
				<div className='w-8/12 gap-5 flex flex-col'>
					{news.map((article, index) =>
					(
						index === 0 ? (
							// Первый элемент - большой баннер
							<div
								key={index}
								className="w-full h-[40vh] bg-cover bg-center rounded-[20px] relative overflow-hidden"
								style={{ backgroundImage: `url(${article.img})` }}
							>
								<div className='absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent'></div>
								<div className='absolute bottom-5 left-5 p-4 *:text-white'>
									<h6 className="font-bold uppercase text-2xl">{article.title}</h6>
									<p className="text-gray-500 text-sm">{article.date}</p>
								</div>
							</div>
						) : (
							// Остальные элементы - сетка из 2 колонок
							<div key={index} className="grid grid-cols-2 gap-5 p-10 rounded-[20px] shadow-md bg-[#E4ECFD] w-full">
								<div className="w-full h-[180px] relative">
									<Image
										src={article.img}
										alt={article.title}
										fill
										className="rounded-[20px] object-cover"
									/>
								</div>
								<div className="flex flex-col justify-between">
									<h6 className="font-bold">{article.title}</h6>
									<p className="text-gray-500 text-sm">{article.date}</p>
								</div>
							</div>
						)
					))}
				</div>
				<div className='w-4/12 bg-[#E4ECFD] rounded-[20px] p-10'>
					<h3 className='text-xl font-regular'>Все новости</h3>
					<div className="space-t-4">
						{Array.from({ length: 10 }).map((_, index) => (
							<div
								key={index}
								className="flex items-center py-2 border-b border-[#47464A] last:border-b-0"
							>
								<div className="flex-1">
									<h3 className="font-regular text-xs">{staticNews.title}</h3>
									<p className="text-[10px] text-gray-500 mt-2">{staticNews.date}</p>
								</div>
								<img
									src={staticNews.image}
									alt="news"
									className="w-24 h-24 object-cover rounded-md"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</main >
	);
}