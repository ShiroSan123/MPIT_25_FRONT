'use client';

import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const logoutUser = async () => {
			try {
				// Отправляем запрос на сервер для удаления сессии
				await axios.post(
					'http://localhost:8000/api/logout',
					{},
					{
						withCredentials: true, // Убедитесь, что куки удаляются
					}
				);

				// Очищаем все локальные данные
				localStorage.removeItem('token'); // Если хранили токен в localStorage
				localStorage.removeItem('user'); // Если хранили пользователя
				sessionStorage.clear(); // Очищаем sessionStorage

				// Перенаправляем на главную страницу
				navigate('/');
			} catch (error) {
				console.error('Ошибка при выходе:', error);
				navigate('/'); // Все равно переводим на главную
			}
		};

		logoutUser();
	}, [navigate]);

	return <p>Выход...</p>; // Можно сделать красивую страницу выхода
};

export default Logout;
