import { div, li } from "framer-motion/client";
import React from "react";

const sections = [
	{
		title:'Контакты',
		items: ['+7 495 181-00-79','info@cyber-ed.ru','telegram @cyberedrussia','Москва, Мясницкая улица, 24/7c1']
	}
]

const Footer = () => {
	return (
		<div className="w-full bg-slate-900 text-gray-300 py-y rounded-t-[80px]">
			<div className="max-w-[1240px] mx-auto grid grid-cols-2 border-b-2 border-gray-600 py-16">
				{
					sections.map((section, index) => (
						<div key={index}>
							<h6 className="font-bold uppercase pb-2">
								{section.title}
							</h6>
							<ul className="gap-4 grid">
								{section.items.map((item,i)=>(
									<li key={i}
										className="pt-1 text-gray-500 hover:text-white cursor-pointer"
									>
										{item}	
									</li>
								))}
							</ul>
						</div>
					))
				}
				<div className="col-span-1 flex flex-col justify-between">
					<div>
						<p className="pb-4">
							Подписка на рассылку
						</p>
						<form action="" className="flex flex-row">
							<input type="email" placeholder="E-mail" className="w-full py-2 px-8 text-gray-dark mr-4 rounded-[20px] mb-4"/>
							<button className="py-2 px-8 mb-4 border-2 rounded-[20px] border-white hover:bg-gray-200 hover:text-gray-dark">Подписаться</button>
						</form>
					</div>
					<a href="/"><div className="bg-no-repeat bg-[url(../app/cache/Logo-white.svg)] min-h-[30px]"></div></a>
				</div>
			</div>
		</div>
	)
}

export default Footer