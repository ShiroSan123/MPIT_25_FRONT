import axios from 'axios';

const API_URL = 'http://138.124.20.90:8000';  // Убедитесь, что это правильный URL вашего бэкенда

// Функция для регистрации
export const registerUser = async (phone, password, firstName, lastName) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      phone,
      password,
      first_initial: first_initial,
      last_name: last_name
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Функция для логина
export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, null, {
      params: { username, password }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Функция для получения профиля
export const getProfile = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
