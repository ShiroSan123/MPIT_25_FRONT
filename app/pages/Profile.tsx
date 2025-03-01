'use client';

import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "@/components/UserCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, Send } from "lucide-react";

interface ProfileData {
	id: number;
	user_id: number;
	phone: string;
	business_role: string | null;
	corporate_email: string;
	photo_url: string | null;
	additional_info: string | null;
	department_id: number | null;
	user: {
		first_name: string;
		last_name: string;
	};
	department: string | null;
}

interface Session {
	phone: string;
	started_at: string;
}

const ProfilePage = () => {
	const [profile, setProfile] = useState<ProfileData | null>(null);
	const [sessions, setSessions] = useState<Session[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	// Получаем данные профиля и сессий
	useEffect(() => {
		const fetchData = async () => {
			try {
				const profileResponse = await axios.get("http://localhost:8000/api/profile", {
					withCredentials: true,
				});

				if (profileResponse.data && typeof profileResponse.data === "object") {
					setProfile(profileResponse.data);
				} else {
					setError("Профиль не найден");
				}

				const sessionResponse = await axios.get("http://localhost:8000/api/active_sessions", {
					withCredentials: true,
				});
				setSessions(sessionResponse.data);
			} catch (err) {
				setError("Ошибка загрузки данных");
				console.error("Ошибка загрузки:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<Header />
			<div className="max-w-5xl mx-auto p-6 py-[100px]">
				{/* Профиль */}
				<section className="rounded-lg flex items-center justify-between">
					{loading ? (
						<p className="text-gray-500">Загрузка...</p>
					) : error ? (
						<p className="text-red-500">{error}</p>
					) : profile ? (
						<UserCard
							name={`${profile.user.first_name} ${profile.user.last_name}`}
							role={profile.business_role || "Роль не указана"}
							email={profile.corporate_email}
							avatarUrl={profile.photo_url || "https://randomuser.me/api/portraits/men/1.jpg"}
						/>
					) : (
						<p className="text-gray-500">Нет данных о профиле.</p>
					)}
				</section>

				{/* Документы */}
				<section className="mt-8">
					<h3 className="text-xl font-semibold">Документы</h3>
					<p className="text-gray-600 text-sm mb-4">
						Тут ваши документы всегда под рукой. А мы бережно их храним
					</p>
					<div className="grid grid-cols-4 gap-4">
						{["паспорт РФ", "ИНН", "СНИЛС", "Полис"].map((doc, index) => (
							<button key={index} className="p-4 bg-gray-200 rounded-lg flex flex-col items-center text-sm hover:bg-gray-300">
								➕ <span className="mt-2">{`Добавить ${doc}`}</span>
							</button>
						))}
					</div>
					<button className="mt-4 text-blue-500 hover:underline">Все документы →</button>
				</section>

				{/* Департамент */}
				<section className="mt-8">
					<h3 className="text-xl font-semibold">Департамент</h3>
					<div className="bg-gray-100 p-4 rounded-lg mt-2">
						<p className="text-gray-700 font-medium">{profile?.department || "Не указан"}</p>
						<p className="text-gray-500">{profile?.business_role || "Роль не указана"}</p>
					</div>
				</section>

				{/* Контакты */}
				<section className="mt-8">
					<h3 className="text-xl font-semibold">Контакты</h3>
					<div className="mt-4 space-y-2">
						<p className="flex items-center space-x-2">
							<Mail size={16} /> <span>{profile?.corporate_email || "Email не указан"}</span>
						</p>
						<p className="flex items-center space-x-2">
							<Phone size={16} /> <span>{profile?.phone || "Телефон не указан"}</span>
						</p>
						<p className="flex items-center space-x-2">
							{/* <Send size={16} /> <span>ntimm</span> */}
						</p>
					</div>
				</section>

				{/* Активные сессии */}
				<section className="mt-8">
					<h3 className="text-xl font-semibold">Активные сессии</h3>
					<p className="text-gray-600 text-sm mb-4">Здесь отображаются ваши активные сессии.</p>

					{loading ? (
						<p className="text-gray-500">Загрузка...</p>
					) : error ? (
						<p className="text-red-500">{error}</p>
					) : sessions.length > 0 ? (
						<ul className="bg-gray-100 p-4 rounded-lg space-y-2">
							{sessions.map((session, index) => (
								<li key={index} className="flex justify-between items-center p-2 border-b">
									<span className="text-gray-700">{session.phone}</span>
									<span className="text-gray-500 text-sm">{new Date(session.started_at).toLocaleString()}</span>
								</li>
							))}
						</ul>
					) : (
						<p className="text-gray-500">Нет активных сессий.</p>
					)}
				</section>
			</div>
			<Footer />
		</>
	);
};

export default ProfilePage;