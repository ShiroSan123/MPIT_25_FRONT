'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ProfileData {
	username: string;
}

function Profile() {
	const [profile, setProfile] = useState<ProfileData | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const isAuth = true;

	useEffect(() => {
		const fetchProfile = async () => {
			if (!isAuth) return;
			console.log('hello');
			try {
				const response = axios.get('http://localhost:8000/api/protected');
				setProfile(response.data.username);
			} catch (error) {
				setError('Ошибка при получении профиля');
				console.error("Ошибка при получении профиля", error);
			} finally {
				setLoading(false);
			}
		};

		fetchProfile();
	});

	if (loading) return <p>Загрузка...</p>;
	if (error) return <p>{error}</p>;

	return (
		<div>
			{profile ? (
				<div>
					<h2>{profile.username}</h2>
				</div>
			) : (
				<p>Профиль не найден</p>
			)}
		</div>
	);
}

export default Profile;