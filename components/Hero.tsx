"use client";
import React, { useState, useEffect } from "react";
import { TextGenerateEffect } from './ui/text-generate-effect'

const Hero = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = () => {
    const scrollPosition = window.scrollY; // Получаем текущую позицию прокрутки
    if (scrollPosition > -1) {
      setIsVisible(true); // Показываем блок, если прокрутка больше 100px
    } else {
      setIsVisible(false); // Прячем блок, если прокрутка меньше 100px
    }
  };

	useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Слушаем событие прокрутки

    return () => {
      window.removeEventListener("scroll", handleScroll); // Убираем слушателя при размонтировании компонента
    };
  }, []);

	return (		
		<div className='pt-[10vh] font-nunito'>
			<div className='flex justify-center relative z-10'>
					<div className='max-w-[90vw] flex flex-col items-center justify-center'>
						<div className="pr-[700px]">
							<TextGenerateEffect 
								className="pb-6"
								words="Привет, это"
							/>
							<div className={`w-1/3 h-[58px] absolute top-[21%] right-0 transform -translate-y-1/2 p-4 border-4 border-black rounded-[40px] shadow-lg transition-all duration-300 ${
									isVisible ? "-translate-x-[330px]" : "translate-x-full"}`}>
							</div>
						</div>
						<TextGenerateEffect 
							className="pb-6 pl-[100px]"
							words="корпоративный портал"
						/>
						<p className='max-w-[70%] text-xl'><span className="font-bold">CyberOffice</span> это защищённая платформа для управления корпоративной информацией с умным поиском, хранением новостей и автоматизацией документов, повышающая эффективность и безопасность. </p>
					</div>
			</div>
			<div className='flex flex-col max-w-[45%] mx-auto mt-[10vh]'>
				<div className="relative w-full">
					<input
						type="text"
						placeholder="Введите запрос..."
						className="w-full py-4 pl-16 pr-10 rounded-[50px] bg-[#1B088D] text-white placeholder-white focus:outline-none text-xl"
					/>
					<button className="absolute inset-y-0 right-8 flex items-center px-6 py-6 text-white">
						➔
					</button>
				</div>
				
				<div className="mt-2 flex space-x-2">
					<button className="px-4 py-1 border border-black text-black rounded-r-[50px] rounded-bl-[50px] text-xl">
						Назначить встречу с директором
					</button>
					<button className="px-4 py-1 border border-black text-black rounded-r-[50px] rounded-bl-[50px] text-xl">
						Заявление на отпуск
					</button>
				</div>
			</div>
			<div className="w-screen h-[200px] border mt-[10vh] bg-gradient-to-r from-[#1B088D] to-[#5E43FF]">

			</div>
		</div>
	)
}

export default Hero