'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ProfileData {
	id: number;
	user_id: number;
	corporate_email: string;
	user: {
	  first_name: string;
	  last_name: string;
	};
  }
  
  function Profile() {
	const [profile, setProfile] = useState<ProfileData | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const isAuth = true;
  
	useEffect(() => {
	  const fetchProfile = async () => {
		if (!isAuth) return;
		try {
		  const response = await axios.get('http://localhost:8000/api/profile', { withCredentials: true });
		  setProfile(response.data);
		} catch (error) {
		  setError('Ошибка при получении профиля');
		  console.error("Ошибка при получении профиля", error);
		} finally {
		  setLoading(false);
		}
	  };
  
	  fetchProfile();
	}, [isAuth]);
  
  

	if (loading) return <p>Загрузка...</p>;
	if (error) return <p>{error}</p>;

	return (
		<div>
			{profile ? (
				<div>
					    <h1>Профиль</h1>
						<p>Корпоративный Email: {profile?.corporate_email}</p>
						<p>Имя: {profile?.user.first_name} {profile?.user.last_name}</p>
				</div>
			) : (
				<p>Профиль не найден</p>
			)}
		</div>
	);
}

export default Profile;