import React from "react";

const Header = () => {
	return (
		<header className="max-w-full bg-gray-main">
			<div className="flex mx-auto justify-between items-center max-w-[1636px] py-4">
				<div className="flex items-center gap-3 border border-black rounded-[10px] lg:px-16 lg:py-2">Logo</div>
				<nav className="hidden sm:inline-block">
					<ul className="flex lg:gap-[30px]">
						<li className="font-regular text-l text-black"><a href="#">Документы</a></li>
						<li className="font-regular text-l text-black"><a href="#">Новости</a></li>
						<li className="font-regular text-l text-black"><a href="#">Заявления</a></li>
						<li className="font-regular text-l text-black"><a href="#">Мероприятия</a></li>
					</ul>
				</nav>
				<div className="lg:gap-9">
					<button className="font-regular text-l text-black border border-black rounded-[10px] md:py-2 lg:py-2 md:px-4 lg:px-16">Войти</button>
				</div>
			</div>
			
</header>
	)
}

export default Header