'use client';

import React, { useState, useEffect } from 'react';
import { getProfile } from '@/api';

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

function Profile() {
	const [profile, setProfile] = useState<ProfileData | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

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

	if (loading) return <p>Загрузка...</p>;
	if (error) return <p>{error}</p>;

	return (
		<div>
			{profile ? (
				<div>
					<h1>Профиль</h1>
					{profile.photo_url && <img src={profile.photo_url} alt="Фото профиля" width={100} />}
					<p><strong>Имя:</strong> {profile.user.first_name} {profile.user.last_name}</p>
					<p><strong>Корпоративный Email:</strong> {profile.corporate_email}</p>
					<p><strong>Роль:</strong> {profile.business_role || 'Не указана'}</p>
					<p><strong>Отдел:</strong> {profile.department || 'Не указан'}</p>
					<p><strong>Доп. информация:</strong> {profile.additional_info || 'Нет данных'}</p>
				</div>
			) : (
				<p>Профиль не найден</p>
			)}
		</div>
	);
}

export default Profile;
