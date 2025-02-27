'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useSearchParams  } from "react-router-dom";

function Register() {
  const [password, setPassword] = useState('');
  const [username, setFirstName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post(
        'http://138.124.20.90:8000/register',
        { password, username },
        { headers: { 'Content-Type': 'application/json' } }
      );
      setSuccess('Регистрация успешна!');
      console.log('Registration successful', response.data);
    } catch (error) {
      setError('Ошибка при регистрации. Проверьте введенные данные.');
      console.error('Ошибка при регистрации', error);
    }
  };

	const [params] = useSearchParams();
	const user = params.get("user");

  return (
    <form onSubmit={handleSubmit} className='flex items-center flex-col gap-6'>
      <input
				className='border-2 w-1/2 text-base text-gray-dark rounded-[12px] border-gray-dark px-4 py-3'
        type='text'
        value={username}
        onChange={(e) => setFirstName(e.target.value)}
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
      <button type='submit' className='text-white bg-blue-main rounded-[12px] w-1/2 text-base py-3 mt-3 hover:bg-blue-800'>Регистрация</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
			<div className='w-1/2'>
				{user === "3" && <p className='text-left text-xs'>Если уже есть аккаунт то, <a href="/#/LogAndReg?user=2" className='underline'>войдите!</a></p>}
			</div>
    </form>
  );
}

export default Register;
