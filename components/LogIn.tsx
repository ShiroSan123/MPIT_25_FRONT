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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default Login;
