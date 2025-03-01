'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';

const news = [
	{
		title: 'Самый большой Дальневосточный медведь - Умка',
		date: '26.02.2025',
		img: 'url(https://example.com/news/umka.jpg)'
	},
	{
		title: 'Якутские театры готовят премьеры к 80-летию Великой Победы, которая состоится 9 мая',
		date: '26.02.2025',
		img: 'https://example.com/news/theater.jpg'
	},
	{
		title: 'Не просто история о любви. Режиссер Айал Струкин – о создании первой якутской дорамы «Мой парень – Айдол!»',
		date: '26.02.2025',
		img: 'https://example.com/news/drama.jpg'
	},
	{
		title: 'Фестиваль «Путешествие на Полюс холода-2025» пройдет в Оймяконе в самой холодной точке.',
		date: '26.02.2025',
		img: 'https://example.com/news/festival.jpg'
	},
	{
		title: 'Северное сияние: Как и где его лучше всего наблюдать в 2025 году',
		date: '27.02.2025',
		img: 'https://example.com/news/aurora.jpg'
	},
	{
		title: 'Арктический туризм: новые маршруты и программы в 2025 году',
		date: '27.02.2025',
		img: 'https://example.com/news/arctic_tourism.jpg'
	},
	{
		title: 'Ученые обнаружили новые виды животных в Якутии',
		date: '28.02.2025',
		img: 'https://example.com/news/new_species.jpg'
	},
	{
		title: 'Якутский стартап представил инновационный способ добычи льда',
		date: '28.02.2025',
		img: 'https://example.com/news/ice_extraction.jpg'
	},
	{
		title: 'Сохранение языков коренных народов: Новые инициативы в 2025 году',
		date: '01.03.2025',
		img: 'https://example.com/news/indigenous_languages.jpg'
	},
	{
		title: 'Экологическая экспедиция на Чукотку: итоги исследований',
		date: '02.03.2025',
		img: 'https://example.com/news/ecology.jpg'
	},
	{
		title: 'Традиционные якутские ремесла: как развивается народное искусство',
		date: '03.03.2025',
		img: 'https://example.com/news/crafts.jpg'
	},
	{
		title: 'Якутские ученые разрабатывают новый метод защиты вечной мерзлоты',
		date: '04.03.2025',
		img: 'https://example.com/news/permafrost.jpg'
	},
	{
		title: 'Арктический марафон 2025: подготовка к уникальному событию',
		date: '05.03.2025',
		img: 'https://example.com/news/marathon.jpg'
	},
	{
		title: 'Якутия разрабатывает новую стратегию экологического туризма',
		date: '06.03.2025',
		img: 'https://example.com/news/eco_tourism.jpg'
	},
	{
		title: 'Оленеводы Якутии внедряют современные технологии в традиционные промыслы',
		date: '07.03.2025',
		img: 'https://example.com/news/reindeer.jpg'
	},
	{
		title: 'Археологи нашли древние артефакты на территории Якутии',
		date: '08.03.2025',
		img: 'https://example.com/news/archaeology.jpg'
	},
	{
		title: 'Крупнейший ледовый фестиваль Якутии откроется в марте 2025 года',
		date: '09.03.2025',
		img: 'https://example.com/news/ice_festival.jpg'
	},
	{
		title: 'Уникальные природные явления Арктики: что можно увидеть в 2025 году',
		date: '10.03.2025',
		img: 'https://example.com/news/nature.jpg'
	},
	{
		title: 'Космические исследования в Арктике: новые проекты российских ученых',
		date: '11.03.2025',
		img: 'https://example.com/news/space.jpg'
	},
	{
		title: 'Глобальное потепление: как Якутия адаптируется к изменениям климата',
		date: '12.03.2025',
		img: 'https://example.com/news/climate.jpg'
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