'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ProfileData {
	role: string;
	phone?: string;
}

const Header = () => {
	const [profile, setProfile] = useState<ProfileData | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchProfile = async () => {
			try {
				const response = await axios.get("http://localhost:8000/api/profiles", {
					withCredentials: true,
				});

				if (Array.isArray(response.data) && response.data.length > 0) {
					setProfile(response.data[0]);
				} else {
					setProfile(null);
					setError("Профиль не найден");
				}
			} catch (err) {
				console.error("Ошибка получения профиля:", err);
				setProfile(null);
				setError("Ошибка загрузки профиля");
			} finally {
				setLoading(false);
			}
		};

		fetchProfile();
	}, []);

	return (
		<header className="bg-white shadow-md py-4">
			<div className="container mx-auto flex justify-between items-center">
				<a href="/" className="text-xl font-bold">CyberOffice</a>
				<nav className="hidden sm:flex space-x-6">
					<a href="/#/News" className="hover:text-blue-600">Новости</a>
					<a href="/#/Events" className="hover:text-blue-600">Мероприятия</a>
					<a href="/#/Admin" className="hover:text-blue-600">Админка</a>
					<a href="/#/Employees" className="hover:text-blue-600">Сотрудники</a>
				</nav>
				<div>
					{loading ? (
						<p className="text-gray-500">Загрузка...</p>
					) : profile ? (
						<a href="/#/profile">
							<button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
								Профиль
							</button>
						</a>
					) : (
						<a href="/#/ChooseAuth">
							<button className="bg-gray-300 text-black px-4 py-2 rounded-lg">
								Войти
							</button>
						</a>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
