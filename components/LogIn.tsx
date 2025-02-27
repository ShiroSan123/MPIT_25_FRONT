'use client';

import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const formData = new URLSearchParams();
      formData.append('username', phone); // Обычно телефон используется как username
      formData.append('password', password);

      await axios.post(
        'http://138.124.20.90:8000/login',
        formData.toString(),
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          withCredentials: true, // Используем httpOnly cookies
        }
      );

      console.log("Success") // Перенаправление после успешного входа
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
      <button type="submit" className='text-white bg-blue-main rounded-[12px] w-1/2 text-base py-3 mt-3'>Вход</button>
			<div className='w-1/2 text-left *:text-gray-dark relative'>
				<div className='bg-blue-main w-[100%] h-full opacity-10 absolute rounded-[12px]'></div>
				<h3 className='text-base px-4 pt-3'>Вы в первый раз на сайте?</h3>
				<p className='text-xs px-4 pb-3'>Для получения доступа к оффису, пожалуйста, обратитесь к главному админу</p>
			</div>
			
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>	
  );
}

export default Login;
