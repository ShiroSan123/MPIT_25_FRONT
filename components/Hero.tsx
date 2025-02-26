import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'

const Hero = () => {
	return (
		<div className='pt-[25vh] font-nunito'>
			<div className='flex justify-center relative z-10'>
					<div className='max-w-[60vw] flex flex-col items-center justify-center'>
						<h2 className='uppercase font-bold tracking-widest text-l text-center text-black max-w-100'>Добро пожаловать в корпоративный портал</h2>
						<TextGenerateEffect 
							className="pb-6"
							words="CYBERSTAFF"
						/>
						<p className='max-w-[80%] text-xl'>Корпоративный портал нового поколения для компаний. Основная наша задача - сделать красивым и удобным сайт компании, которым сотрудники будут пользоваться с удовольствием. </p>
					</div>
			</div>
			<div className='flex flex-col max-w-[66%] mx-auto mt-12'>
				<div className="relative w-full">
					<input
						type="text"
						placeholder="Введите запрос..."
						className="w-full py-6 pl-16 pr-10 rounded-[20px] bg-red-button text-white placeholder-white focus:outline-none text-xl"
					/>
					<button className="absolute inset-y-0 right-8 flex items-center px-6 py-6 text-white">
						➔
					</button>
				</div>
				
				<div className="mt-2 flex space-x-2">
					<button className="px-4 py-1 bg-gray-main text-black rounded-r-[10px] rounded-bl-[10px] text-sm">
						отпуск
					</button>
					<button className="px-4 py-1 bg-gray-main text-black rounded-r-[10px] rounded-bl-[10px] text-sm">
						заявление о декрете
					</button>
					<button className="px-4 py-1 bg-gray-main text-black rounded-r-[10px] rounded-bl-[10px] text-sm">
						заявление об увольнении
					</button>
				</div>
			</div>
		</div>
	)
}

export default Hero