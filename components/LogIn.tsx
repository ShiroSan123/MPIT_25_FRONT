'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate

function Login() {
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState<string | null>(null);
	const navigate = useNavigate(); // Инициализируем useNavigate

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);

		try {
			const response = await axios.post(
				'http://localhost:8000/api/login',
				{ phone, password },
				{
					headers: { 'Content-Type': 'application/json' },
					withCredentials: true
				}
			);

			// Условие: если сервер вернул токен, перенаправляем
			if (response) {
				console.log("Успешный вход:", response.data);

				// Перенаправление в зависимости от роли
				if (response.data.role === 'admin') {
					navigate('/'); // Перенаправляем администратора
				} else {
					navigate('/'); // Обычный пользователь
				}
			} else {
				setError('Ошибка при входе. Неверные данные.');
			}
		} catch (error) {
			setError('Ошибка при входе. Проверьте данные.');
			console.error('Ошибка:', error);
		}
	};

	return (
		<form onSubmit={handleSubmit} className='flex items-center flex-col gap-6'>
			<input
				className='border-2 w-1/2 text-base text-gray-dark rounded-[12px] border-gray-dark px-4 py-3'
				type="text"
				value={phone}
				onChange={(e) => setPhone(e.target.value)}
				placeholder="Телефон"
				required
			/>
			<input
				className='border-2 w-1/2 text-base text-gray-dark rounded-[12px] border-gray-dark px-4 py-3'
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder="Пароль"
				required
			/>
			<button type="submit" className='text-white bg-blue-main rounded-[12px] w-1/2 text-base py-3 mt-3 hover:bg-blue-800'>
				Вход
			</button>
			{error && <p style={{ color: 'red' }}>{error}</p>}
		</form>
	);
}

export default Login;
