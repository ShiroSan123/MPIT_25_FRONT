'use client';

import Header from '@/components/Header';
import Login from '@/components/LogIn';

export default function LogIn() {
  return (
    <main className="relative h-screen w-screen bg-[url('../app/cache/bg-auth.svg')] bg-cover bg-no-repeat bg-right">
			<div className="h-screen w-5/12 bg-white *:text-[#47464A]">
				<section className="flex flex-col mx-auto text-center pt-[20vh]">
					<a href="/"><div className="mx-auto bg-no-repeat bg-[url(../app/cache/gray-logo.svg)] bg-contain bg-center min-h-[100px] w-1/2"></div></a>
					<h2 className="text-[20px] font-normal">АДМИН</h2>
					<p className="text-[36px] font-medium mt-3">Вход</p>
					<Login />
				</section>
			</div>
		</main>
  );
}
