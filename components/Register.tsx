'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';

function Register() {
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);
	const navigate = useNavigate(); // Инициализируем useNavigate
	const [params] = useSearchParams();
	const user = params.get('user');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);
		setSuccess(null);

		console.log("Отправляемые данные:", { phone, password, name, lastName });

		try {
			const response = await axios.post(
				'http://localhost:8000/api/register',
				{ phone, password, first_name: name, last_name: lastName },
				{ headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } }
			);

			setSuccess('Регистрация успешна!');
			console.log('Успешный ответ:', response.data);
			navigate('/');
		} catch (error: any) {
			console.error("Полная ошибка:", error);

			if (error.response) {
				// Сервер ответил, но с ошибкой
				console.error("Ошибка ответа сервера:", error.response);
				console.error("Статус:", error.response.status);
				console.error("Данные:", error.response.data);

				setError(`Ошибка: ${error.response.data?.message || 'Ошибка при регистрации.'}`);
			} else if (error.request) {
				// Запрос был отправлен, но ответ не получен
				console.error("Нет ответа от сервера. Возможно, проблема с CORS или сетью.", error.request);
				setError("Ошибка соединения. Проверьте сеть.");
			} else {
				// Ошибка при настройке запроса
				console.error("Ошибка при настройке запроса:", error.message);
				setError("Ошибка запроса.");
			}
		}
	};


	return (
		<form onSubmit={handleSubmit} className='flex items-center flex-col gap-6'>
			<input
				className='border-2 w-1/2 text-base text-gray-dark rounded-[12px] border-gray-dark px-4 py-3'
				type='text'
				value={phone}
				onChange={(e) => setPhone(e.target.value)}
				placeholder='Телефон'
				required
			/>
			<input
				className='border-2 w-1/2 text-base text-gray-dark rounded-[12px] border-gray-dark px-4 py-3'
				type='password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder='Пароль'
				required
			/>
			<input
				className='border-2 w-1/2 text-base text-gray-dark rounded-[12px] border-gray-dark px-4 py-3'
				type='text'
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder='Имя'
				required
			/>
			<input
				className='border-2 w-1/2 text-base text-gray-dark rounded-[12px] border-gray-dark px-4 py-3'
				type='text'
				value={lastName}
				onChange={(e) => setLastName(e.target.value)}
				placeholder='Фамилия'
				required
			/>
			<button type='submit' className='text-white bg-blue-main rounded-[12px] w-1/2 text-base py-3 mt-3 hover:bg-blue-800'>
				Регистрация
			</button>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			{success && <p style={{ color: 'green' }}>{success}</p>}
			<div className='w-1/2'>
				{user === '3' && (
					<p className='text-left text-xs'>
						Если уже есть аккаунт, <a href='/#/LogAndReg?user=2' className='underline'>войдите!</a>
					</p>
				)}
			</div>
		</form>
	);
}

export default Register;
