'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState<string | null>(null);
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);

		try {
			const response = await axios.post(
				'http://localhost:8000/api/login',
				{ phone, password },
				{
					headers: { 'Content-Type': 'application/json' },
					withCredentials: true,
				}
			);

			console.log("Успешный вход:", response.data);
			navigate('/');
		} catch (error) {
			setError('Ошибка при входе. Проверьте данные.');
			console.error('Ошибка:', error);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg">
			<h2 className="text-2xl font-semibold text-center mb-4">Вход</h2>

			<input
				className="border w-full text-base text-gray-800 rounded-lg px-4 py-3 mb-4"
				type="text"
				value={phone}
				onChange={(e) => setPhone(e.target.value)}
				placeholder="Телефон"
				required
			/>
			<input
				className="border w-full text-base text-gray-800 rounded-lg px-4 py-3 mb-4"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder="Пароль"
				required
			/>
			<button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700">
				Вход
			</button>

			{error && <p className="text-red-500 text-center mt-2">{error}</p>}
		</form>
	);
}

export default Login;
