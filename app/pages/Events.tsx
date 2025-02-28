'use client';

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

const PAGE_SIZE = 6;

export default function Events() {
	const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.ceil(events.length / PAGE_SIZE);
	const startIndex = (currentPage - 1) * PAGE_SIZE;
	const paginatedEvents = events.slice(startIndex, startIndex + PAGE_SIZE);

	return (
		<main className="relative">
			<Header />
			<div className="w-8/12 mx-auto py-10">
				<h2 className="text-3xl font-semibold mb-6">Ближайшие мероприятия</h2>
				<div className="flex gap-6">
					<div className="w-3/4 mx-auto py-10">
						{!selectedEvent ? (
							<>
								{/* Сетка мероприятий */}
								<div className="grid grid-cols-2 gap-6">
									{paginatedEvents.map(event => (
										<div
											key={event.id}
											className="bg-[#E4ECFD] p-4 rounded-lg cursor-pointer shadow-lg transition-transform transform hover:scale-105 flex"
											onClick={() => setSelectedEvent(event)}
										>
											<div className="relative w-1/2">
												<Image src={event.img} alt={event.title} width={200} height={150} className="rounded-lg object-cover w-full" />
												<div className="absolute top-2 left-2 bg-gray-800 text-white text-sm px-3 py-1 rounded-md">
													{event.date_month} <br /> {event.date_day}
												</div>
											</div>
											<div className="w-1/2 p-2">
												<h3 className="font-bold text-lg">{event.title}</h3>
												<p className="text-sm text-gray-500">{event.location}</p>
												<p className="text-sm text-gray-500">{event.time}</p>
												<p className="text-xs text-gray-700 mt-2">Читать далее...</p>
											</div>
										</div>
									))}
								</div>

								{/* Пагинация */}
								<div className="flex justify-center mt-6 space-x-4">
									<button
										className={`px-4 py-2 rounded-md ${currentPage > 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
										disabled={currentPage === 1}
										onClick={() => setCurrentPage(currentPage - 1)}
									>
										Назад
									</button>

									<p className="text-lg font-medium">{currentPage} / {totalPages}</p>

									<button
										className={`px-4 py-2 rounded-md ${currentPage < totalPages ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
										disabled={currentPage === totalPages}
										onClick={() => setCurrentPage(currentPage + 1)}
									>
										Вперед
									</button>
								</div>
							</>
						) : (
							// Открытый Event
							<div className="bg-[#E4ECFD] p-6 rounded-2xl gap-6">
								<h2 className="text-3xl font-bold">{selectedEvent.title}</h2>
								<p className="text-gray-600">{selectedEvent.location} - {selectedEvent.time}</p>
								<Image src={selectedEvent.img} alt={selectedEvent.title} width={600} height={400} className="rounded-xl my-4" />
								<p>{selectedEvent.description}</p>
								<p>{selectedEvent.id}</p>
								<button
									className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
									onClick={() => setSelectedEvent(null)}
								>
									Закрыть
								</button>
							</div>
						)}

						{/* Карусель только если открыт Event */}
						{selectedEvent && (
							<div className="overflow-x-scroll flex gap-4 py-4 scrollbar-hide mt-6">
								{events
									.filter(event => event.id !== selectedEvent.id)
									.map(event => (
										<div
											key={event.id}
											className="min-w-[250px] bg-[#E4ECFD] p-4 rounded-lg cursor-pointer shadow-lg transition-transform transform hover:scale-105"
											onClick={() => setSelectedEvent(event)}
										>
											<Image src={event.img} alt={event.title} width={200} height={150} className="rounded-lg object-cover w-full" />
											<h3 className="mt-2 font-bold text-lg">{event.title}</h3>
											<p className="text-sm text-gray-500">{event.date_day} {event.date_month}</p>
										</div>
									))
								}
							</div>
						)}
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
					</div>
				</div>
			</div>
		</main >
	);
}