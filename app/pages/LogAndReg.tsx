'use client';


import { useSearchParams  } from "react-router-dom";
import Login from '@/components/LogIn';
import Register from "@/components/Register";

// user = 1 - Вход для админов
// user = 2 - Вход для сотрудников
// user = 3 - Регистрация для сотрудников

export default function LogIn() {
	const [params] = useSearchParams();
	const user = params.get("user");

  return (
    <main className="relative h-screen w-screen bg-[url('../app/cache/bg-auth.svg')] bg-cover bg-no-repeat bg-right">
			<div className="h-screen w-5/12 bg-white *:text-[#47464A]">
				<section className="flex flex-col mx-auto text-center pt-[20vh]">
					<a href="/"><div className="mx-auto bg-no-repeat bg-[url(../app/cache/gray-logo.svg)] bg-contain bg-center min-h-[100px] w-1/2"></div></a>
					{/* Тип - (Админ/Сотрудник) */}
					{user === "1" && <h2 className="text-[20px] font-normal">АДМИН</h2>}
					{(user === "2" || user === "3") && <h2 className="text-[20px] font-normal">СОТРУДНИК</h2>}
					{/* Вход/Регистрация */}
					{(user === "1" || user === "2") && <p className="text-[36px] font-medium mt-3">Вход</p>}
					{user === "3" && <p className="text-[36px] font-medium mt-3">Регистрация</p>}
					{/* Форма - Регистрации/Авторизации */}
					{(user === "1" || user === "2") && <Login />}
					{user === "3" && <Register />}
				</section>
			</div>
		</main>
  );
}
