'use client';

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, Send, Edit } from "lucide-react";

const ProfilePage = () => {
	return (
		<>
			<Header />
			<div className="max-w-5xl mx-auto p-6 py-[100px]">
				{/* Профиль */}
				<section className="bg-blue-100 p-6 rounded-lg flex items-center justify-between">
					<div className="flex items-center space-x-4">
						<div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-3xl">
							👤
						</div>
						<div>
							<h2 className="text-xl font-semibold">Никита Паремихов</h2>
							<p className="text-gray-600">Фронтend-разработчик</p>
							<p className="text-gray-500 text-sm">08.12.2005</p>
						</div>
					</div>
					<button className="text-gray-600 hover:text-black">
						<Edit size={20} />
					</button>
				</section>

				{/* Документы */}
				<section className="mt-8">
					<h3 className="text-xl font-semibold">Документы</h3>
					<p className="text-gray-600 text-sm mb-4">
						Тут ваши документы всегда под рукой. А мы бережно их храним
					</p>
					<div className="grid grid-cols-4 gap-4">
						{["паспорт РФ", "ИНН", "СНИЛС", "Полис"].map((doc, index) => (
							<button
								key={index}
								className="p-4 bg-gray-200 rounded-lg flex flex-col items-center text-sm hover:bg-gray-300"
							>
								➕ <span className="mt-2">{`Добавить ${doc}`}</span>
							</button>
						))}
					</div>
					<button className="mt-4 text-blue-500 hover:underline">
						Все документы →
					</button>
				</section>

				{/* Департамент */}
				<section className="mt-8">
					<h3 className="text-xl font-semibold">Департамент</h3>
					<div className="bg-gray-100 p-4 rounded-lg mt-2">
						<p className="text-gray-700 font-medium">IT-департамент</p>
						<p className="text-gray-500">Фронтенд-разработчик</p>
						<p className="text-gray-500">Руководитель: Варвара Тарасовна</p>
					</div>
				</section>

				{/* Коллеги */}
				<section className="mt-8">
					<h3 className="text-xl font-semibold">Коллеги</h3>
					<p className="text-gray-600 text-sm mb-4">
						Тут ваши коллеги из вашего департамента
					</p>
					<div className="flex gap-4">
						{["Григорьев Айаал", "Едесов Максим", "Христолюбов Ренат", "Пахом Энди"].map(
							(name, index) => (
								<div
									key={index}
									className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-sm"
								>
									{name.split(" ")[1].charAt(0)}
								</div>
							)
						)}
					</div>
					<button className="mt-4 text-blue-500 hover:underline">
						Все сотрудники →
					</button>
				</section>

				{/* Мероприятия */}
				<section className="mt-8">
					<h3 className="text-xl font-semibold">Мероприятия</h3>
					<p className="text-gray-600 text-sm mb-4">
						Тут ваши мероприятия, которые вы посетили
					</p>
					<div className="grid grid-cols-4 gap-4">
						{["День рождения", "Новогодний корпоратив", "DJ set от DJ Stack", "Поезд в темный лес"].map(
							(event, index) => (
								<div
									key={index}
									className="p-4 bg-gray-200 rounded-lg flex flex-col items-center text-center text-sm hover:bg-gray-300"
								>
									🎉 <span className="mt-2">{event}</span>
								</div>
							)
						)}
					</div>
					<button className="mt-4 text-blue-500 hover:underline">
						Все мероприятия →
					</button>
				</section>

				{/* Контакты */}
				<section className="mt-8">
					<h3 className="text-xl font-semibold">Контакты</h3>
					<div className="mt-4 space-y-2">
						<p className="flex items-center space-x-2">
							<Mail size={16} /> <a href="/" className="hover:text-blue-500">serito@cybered.ru</a>
						</p>
						<p className="flex items-center space-x-2">
							<Mail size={16} /> <a href="/" className="hover:text-blue-500">hotnikita412@gmail.com</a>
						</p>
						<p className="flex items-center space-x-2">
							<Phone size={16} /> <span>+7 (914) 281-30-18</span>
						</p>
						<p className="flex items-center space-x-2">
							<Send size={16} /> <a href="/" className="hover:text-blue-500">ntimm</a>
						</p>
					</div>
				</section>
			</div>
			<Footer />
		</>
	);
};

export default ProfilePage;
