import React from "react";

const Header = () => {
	return (
		<header className="max-w-full">
			<div className="flex mx-auto justify-between items-center max-w-[1228px] py-4">
				<a href="/"><div className="px-[70px] bg-no-repeat bg-[url(../app/cache/Logo.svg)] min-h-[30px]"></div></a>
				<nav className="hidden sm:inline-block">
					<ul className="flex lg:gap-[30px]">
						<li className="font-regular text-xl text-black"><a href="/#/ChooseAuth">Новости</a></li>
						<li className="font-regular text-xl text-black"><a href="#">Документы</a></li>
						<li className="font-regular text-xl text-black"><a href="#">Заявления</a></li>
						<li className="font-regular text-xl text-black"><a href="#">Мероприятия</a></li>
					</ul>
				</nav>
				<div className="lg:gap-9">
					<a href="/#/LogIn"><button className="font-regular text-l text-black border border-black rounded-[64px] md:py-2 lg:py-2 md:px-4 lg:px-16">Войти</button></a>
				</div>
			</div>
			
</header>
	)
}

export default Header