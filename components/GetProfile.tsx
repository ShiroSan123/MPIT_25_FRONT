'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ProfileData {
	id: number;
	user_id: number;
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

const Profile = () => {
	const [profile, setProfile] = useState<ProfileData | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchProfile = async () => {
			try {
				const response = await axios.get("http://localhost:8000/api/profiles", {
					withCredentials: true,
				});
				setProfile(response.data);
			} catch (err) {
				setError("Ошибка получения профиля");
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		fetchProfile();
	}, []);

	if (loading) return <p className="text-center text-gray-500">Загрузка...</p>;
	if (error) return <p className="text-center text-red-500">{error}</p>;

	return (
		<div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
			<h1 className="text-2xl font-bold text-center mb-6">Профиль</h1>

			{profile ? (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
					{/* Фото профиля */}
					<div className="flex justify-center">
						{profile.photo_url ? (
							<img
								src={profile.photo_url}
								alt="Фото профиля"
								className="w-32 h-32 object-cover rounded-full border"
							/>
						) : (
							<div className="w-32 h-32 flex items-center justify-center bg-gray-200 text-gray-500 text-3xl rounded-full">
								👤
							</div>
						)}
					</div>

					{/* Информация */}
					<div className="flex flex-col gap-3">
						<p><strong>Имя:</strong> {profile.user.first_name} {profile.user.last_name}</p>
						<p><strong>Корпоративный Email:</strong> {profile.corporate_email}</p>
						<p><strong>Роль:</strong> {profile.business_role || 'Не указана'}</p>
						<p><strong>Отдел:</strong> {profile.department || 'Не указан'}</p>
						<p><strong>Доп. информация:</strong> {profile.additional_info || 'Нет данных'}</p>
					</div>
				</div>
			) : (
				<p className="text-center text-gray-500">Профиль не найден</p>
			)}
		</div>
	);
};

export default Profile;
