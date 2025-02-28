import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
	const navigate = useNavigate();

	useEffect(() => {
		localStorage.removeItem("token"); // Удаляем токен
		navigate("/"); // Перенаправляем на главную
	}, [navigate]);

	return null; // Компонент не рендерит ничего
};

export default Logout;