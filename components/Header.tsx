import React, { useState, useEffect } from 'react';
import { getProfile } from '@/api';

interface ProfileData {
	id: number;
}

const Header = () => {
	const [profile, setProfile] = useState<ProfileData | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [token, setToken] = useState<string | null>(null);

	// Получаем токен только один раз при монтировании
	useEffect(() => {
		const fetchProfile = async () => {
			try {
				const data = await getProfile();
				setProfile(data);
			} catch (err) {
				setError('Ошибка получения профиля');
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		fetchProfile();
	}, []);

	if (loading) {
		return (
			<header className="max-w-full">
				<div className="flex mx-auto justify-center items-center w-8/12 py-4">
					<p className="text-gray-500">Загрузка...</p>
				</div>
			</header>
		);
	}

	return (
		<header className="max-w-full">
			<div className="flex mx-auto justify-between items-center w-8/12 py-4">
				<a href="/">
					<div className="px-[70px] bg-no-repeat bg-[url(../app/cache/Logo.svg)] min-h-[30px]"></div>
				</a>
				<nav className="hidden sm:inline-block">
					<ul className="flex lg:gap-[30px] font-regular text-xl text-black">
						<li className="hover:text-blue-main"><a href="/#/News">Новости</a></li>
						<li className="hover:text-blue-main"><a href="/#/Events">Мероприятия</a></li>
						<li className="hover:text-blue-main"><a href="/">Заявления</a></li>
						<li className="hover:text-blue-main"><a href="/#/Employees">Сотрудники</a></li>
					</ul>
				</nav>
				<div className="lg:gap-9">
					{profile?.id ? (
						<a href="/#/profile">
							<button className="font-regular text-l text-black border border-black rounded-[64px] md:py-2 lg:py-2 md:px-4 lg:px-16">
								Профиль
							</button>
						</a>
					) : (
						<a href="/#/ChooseAuth">
							<button className="font-regular text-l text-black border border-black rounded-[64px] md:py-2 lg:py-2 md:px-4 lg:px-16">
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
