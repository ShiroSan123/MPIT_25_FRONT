import React from "react";

const Header = () => {
	const login = localStorage.getItem('token');

	return (
		<header className="max-w-full">
			<div className="flex mx-auto justify-between items-center w-8/12 py-4">
				<a href="/"><div className="px-[70px] bg-no-repeat bg-[url(../app/cache/Logo.svg)] min-h-[30px]"></div></a>
				<nav className="hidden sm:inline-block">
					<ul className="flex lg:gap-[30px] font-regular text-xl text-black">
						<li className="hover:text-blue-main"><a href="/#/News">Новости</a></li>
						<li className="hover:text-blue-main"><a href="/#/Events">Мероприятия</a></li>
						<li className="hover:text-blue-main"><a href="/#/profile">Профиль</a></li>
						<li className="hover:text-blue-main"><a href="/#/Employees">Сотрудники</a></li>
					</ul>
				</nav>
				<div className="lg:gap-9">
					{login === '1' ? (
						<a href="/#/profile"><button className="font-regular text-l text-black border border-black rounded-[64px] md:py-2 lg:py-2 md:px-4 lg:px-16">Профиль</button></a>
					) : (
						<a href="/#/ChooseAuth"><button className="font-regular text-l text-black border border-black rounded-[64px] md:py-2 lg:py-2 md:px-4 lg:px-16">Войти</button></a>
					)}
				</div>
			</div>

		</header>
	)
}

export default Header