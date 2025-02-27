'use client';

export default function ChooseAuth() {
	return (
		<main className="relative w-screen bg-no-repeat bg-[url('./cache/bg-springs.png')] bg-cover bg-[#E4ECFD] justify-center">
			<div className="h-screen w-5/12 bg-white mx-auto *:text-[#47464A]">
				<section className="w-[80%] flex flex-col mx-auto text-center pt-[20vh]">
					<a href="/"><div className="mx-auto bg-no-repeat bg-[url(../app/cache/gray-logo.svg)] bg-contain bg-center min-h-[70px] w-auto my-7"></div></a>
					<h2 className="text-[36px] font-medium">Добро пожаловать в киберофис</h2>
					<p className="text-[24px] font-light">Это твоя киберофисная платформа</p>

					{/* Сотрудник */}
					<div className="mb-6 pt-8">
						<p className="font-normal text-xl">Сотрудник</p>
						<div className="flex flex-col gap-4 pt-2">
							<a href="/#/LogAndReg?user=2">
								<button className="w-full py-2 bg-[#1B088D] text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
									Вход
								</button>
							</a>
							<a href="/#/LogAndReg?user=3">
								<button className="w-full py-2 bg-[#086D8D] text-white font-semibold rounded-lg hover:bg-teal-600 transition">
									Регистрация
								</button>
							</a>
						</div>
					</div>

					{/* Админ */}
					<div>
						<p className="font-normal text-xl">Админ</p>
						<a href="/#/LogAndReg?user=1">
							<button className="w-full py-2 mt-2 bg-[#1B088D] text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
								Вход
							</button>
						</a>
					</div>
				</section>
			</div>
		</main>
	)
}	