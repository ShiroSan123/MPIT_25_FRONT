'use client';

import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

interface NewsArticle {
	title: string;
	date: string;
	img: string;
}

const Home = () => {
	const [news, setNews] = useState<NewsArticle[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchNews = async () => {
			try {
				// Закомментируй эту строку, если API пока нет
				const response = await axios.get("http://localhost:8000/api/news");
				setNews(response.data);
			} catch (err) {
				setError("Ошибка загрузки новостей");
				console.error("Ошибка загрузки:", err);

				// Если API недоступно, использует статичные данные
				setNews([
					{
						title: "Айсен Николаев: Детская школа искусств в Якутске остается в прежнем здании",
						date: "1 день назад",
						img: "/news/1.jpg",
					},
					{
						title: "Дирекция “Дети Азии” - обладатель премии “Серебряный Лучник” - Дальний Восток",
						date: "26.02.2025",
						img: "/news/2.jpg",
					},
					{
						title: "Якутские театры готовят премьеры к 80-летию Великой Победы, которая состоится 9 мая",
						date: "26.02.2025",
						img: "/news/3.jpg",
					},
				]);
			} finally {
				setLoading(false);
			}
		};

		fetchNews();
	}, []);

	return (
		<main className="relative">
			<Header />
			<div className="w-8/12 py-[100px] mx-auto flex gap-[20px]">
				<div className="w-8/12 flex flex-col gap-5">
					{loading ? (
						<p className="text-center text-gray-500">Загрузка новостей...</p>
					) : (
						news.map((article, index) =>
							index === 0 ? (
								// Первый элемент - большой баннер
								<div
									key={index}
									className="w-full h-[40vh] bg-cover bg-center rounded-[20px] relative overflow-hidden"
									style={{ backgroundImage: `url(${article.img})` }}
								>
									<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
									<div className="absolute bottom-5 left-5 p-4 text-white">
										<h6 className="font-bold uppercase text-2xl">{article.title}</h6>
										<p className="text-gray-300 text-sm">{article.date}</p>
									</div>
								</div>
							) : (
								// Остальные элементы - сетка из 2 колонок
								<div key={index} className="grid grid-cols-2 gap-5 p-5 rounded-[20px] shadow-md bg-[#E4ECFD] w-full">
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
						)
					)}
				</div>

				{/* Боковая панель */}
				<div className="w-4/12 bg-[#E4ECFD] rounded-[20px] p-10">
					<h3 className="text-xl font-semibold">Все новости</h3>
					<div className="space-y-4 mt-4">
						{news.slice(0, 6).map((article, index) => (
							<div
								key={index}
								className="flex items-center py-2 border-b border-[#47464A] last:border-b-0"
							>
								<div className="flex-1">
									<h3 className="font-medium text-sm">{article.title}</h3>
									<p className="text-[10px] text-gray-500 mt-1">{article.date}</p>
								</div>
								<Image
									src={article.img}
									alt="news"
									width={70}
									height={70}
									className="object-cover rounded-md"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</main>
	);
};

export default Home;
