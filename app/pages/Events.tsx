'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import React, { useState } from 'react';

interface Event {
	id: number;
	title: string;
	date_month: string;
	date_day: string;
	img: string;
	location: string,
	time: string,
	description: string;
}

const events: Event[] = Array.from({ length: 10 }, (_, i) => ({
	id: i + 1,
	title: 'Корпоратив',
	date_month: 'МАРТ',
	date_day: '12',
	img: '/news/1.jpg',
	location: 'slay club',
	time: '19:40',
	description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum...',
}));

const newsList = Array.from({ length: 5 }).map((_, index) => ({
	title: 'Lorem Ipsum Lorem Ipsum',
	location: 'slay club',
	time: '19:40',
	image: '/news-r/1.jpg',
}));

const PAGE_SIZE = 4;

export default function Home() {
	const [currentPage, setCurrentPage] = useState(1);

	const startIndex = (currentPage - 1) * PAGE_SIZE;
	const endIndex = startIndex + PAGE_SIZE;
	const paginatedEvents = events.slice(startIndex, endIndex);
	const totalPages = Math.ceil(events.length / PAGE_SIZE);

	return (
		<main className="relative">
			<Header />
			<div className="w-8/12 mx-auto py-10">
				<h2 className="text-3xl font-semibold mb-6">Ближайшие мероприятия</h2>
				<div className="flex gap-6">
					<div className="grid grid-cols-2 gap-6 w-3/4">
						{paginatedEvents.map((event, index) => (
							<div key={index} className="bg-[#E4ECFD] rounded-2xl overflow-hidden flex h-[250px]">
								<div className="relative w-1/2 h-full">
									<Image src={event.img} alt={event.title} layout="fill" className="object-cover" />
									<div className="absolute top-2 left-2 bg-gray-800 text-white text-sm px-3 py-1 rounded-md">
										{event.date_month} <br /> {event.date_day}
									</div>
								</div>
								<div className="p-4 w-1/2">
									<h3 className="font-bold text-lg">{event.title}</h3>
									<p className="text-sm text-gray-500">LOCATION: {event.location}</p>
									<p className="text-sm text-gray-500">TIME: {event.time}</p>
									<p className="text-xs text-gray-700 mt-2">{event.description}</p>
								</div>
							</div>
						))}
						<div className="flex justify-center mt-6 space-x-2">
							{Array.from({ length: totalPages }, (_, i) => (
								<button
									key={i}
									onClick={() => setCurrentPage(i + 1)}
									className={`px-4 py-2 h-10 w-10 rounded-full ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-300"}`}
								>
									{i + 1}
								</button>
							))}
						</div>
					</div>
					<div className="w-1/4 bg-[#E4ECFD] rounded-2xl p-4">
						<h3 className="text-lg font-semibold mb-4">Все мероприятия</h3>
						{newsList.map((news, index) => (
							<div key={index} className="flex items-center mb-3 border-b border-gray-400 pb-3 last:border-b-0">
								<div className="flex-1">
									<h4 className="text-xs font-medium">{news.title}</h4>
									<p className="text-[10px] text-gray-500">{news.location}</p>
									<p className="text-[10px] text-gray-500">{news.time}</p>
								</div>
								<Image src={news.image} alt="news" width={50} height={50} className="rounded-md object-cover" />
							</div>
						))}
						<button className="w-full mt-4 py-2 bg-gray-700 text-white rounded-md">Загрузить больше</button>
					</div>
				</div>
			</div>
			<Footer />
		</main>
	);
}
