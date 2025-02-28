import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const httpClient = axios.create({
  baseURL: API_URL,
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json'
  }
});

export const registerUser = async (phone, password, firstName, lastName) => {
  try {
    const response = await httpClient.post('/register', {
      phone,
      password,
      first_name: firstName,
      last_name: lastName    
    });
    return response.data;
  } catch (error) {
    console.error('Ошибка регистрации:', error);
    throw error;
  }
};

export const loginUser = async (phone, password) => {
  try {
    const response = await httpClient.post('/login', {
      phone,
      password
    });
    return response.data;
  } catch (error) {
    console.error('Ошибка логина:', error);
    throw error;
  }
};

export const getProfile = async () => {
  try {
    const response = await httpClient.get('/profile');
    return response.data;
  } catch (error) {
    console.error('Ошибка получения профиля:', error);
    throw error;
  }
};
