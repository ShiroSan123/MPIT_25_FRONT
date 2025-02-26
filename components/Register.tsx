'use client';

import React, { useState } from 'react';
import axios from 'axios';

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

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        required
      />
      <input
        type='text'
        value={username}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder='Username'
        required
      />
      <button type='submit'>Register</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </form>
  );
}

export default Register;
