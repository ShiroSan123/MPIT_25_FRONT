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
  const token = typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;

  useEffect(() => {
    const fetchProfile = async () => {
      if (!token) return;
      
      try {
        const response = await axios.get<ProfileData>('http://138.124.20.90:8000/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(response.data);
      } catch (error) {
        setError('Ошибка при получении профиля');
        console.error("Ошибка при получении профиля", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token]);

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