import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

// Создаем базовый экземпляр `axios`
const httpClient = axios.create({
	baseURL: API_URL,
	withCredentials: true, // Разрешает передачу HTTP-only cookies
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
});

// Функция для обработки ошибок API
const handleApiError = (error, message) => {
	if (error.response) {
		// Сервер ответил ошибкой (4xx, 5xx)
		console.error(`${message}:`, error.response.status, error.response.data);
	} else if (error.request) {
		// Запрос был отправлен, но сервер не ответил
		console.error(`${message}: Нет ответа от сервера`, error.request);
	} else {
		// Ошибка в настройке запроса
		console.error(`${message}: Ошибка запроса`, error.message);
	}
	throw error;
};

// 🔹 Регистрация пользователя
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
		handleApiError(error, 'Ошибка регистрации');
	}
};

// 🔹 Авторизация пользователя
export const loginUser = async (phone, password) => {
	try {
		const response = await httpClient.post('/login', { phone, password });
		return response.data;
	} catch (error) {
		handleApiError(error, 'Ошибка логина');
	}
};

// 🔹 Получение профиля
export const getProfile = async () => {
	try {
		const response = await httpClient.get('/profile');
		console.log("Данные профиля:", response.data);
		return response.data;
	} catch (error) {
		handleApiError(error, 'Ошибка получения профиля');
	}
};

// 🔹 Получение роли пользователя
export const getRole = async () => {
	try {
		const response = await httpClient.get('/role');
		return response.data;
	} catch (error) {
		handleApiError(error, 'Ошибка получения роли');
	}
};

// 🔹 Получение списка гостей
export const getGuests = async () => {
	try {
		const response = await httpClient.get('/users/guests');
		return response.data;
	} catch (error) {
		handleApiError(error, 'Ошибка получения списка гостей');
	}
};

// 🔹 Обновление роли пользователя
export const upgradeUser = async (userId) => {
	try {
		const response = await httpClient.patch(`/users/${userId}/upgrade`);
		return response.data;
	} catch (error) {
		handleApiError(error, 'Ошибка обновления роли');
	}
};