import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
 
export function Mini1() {
	
  return (
		<section className="justify-center items-center text-center flex flex-col max-w-screen bg-gray-main pt-4 pb-[100px]">
			<button className="rounded-[20px] font-regular text-2xl text-black border-2 border-black px-5 py-2">Преимущества</button>
			<h2 className="text-[85px] font-poppins font-semibold bg-gradient-to-b from-[#656565] to-[#313131] text-transparent bg-clip-text inline-block">Какие преимущества </h2>
			<p className='text-4xl max-w-[60vw] text-[#3D3D3D]'>Платформа обеспечивает безопасное управление корпоративной информацией, упрощает поиск коллег и автоматизирует создание документов, экономя время и повышая эффективность работы.</p>

			<BentoGrid className="pt-[100px] *:text-left *:rounded-[35px] w-[80vw] grid-cols-2 grid grid-flow-col grid-rows-2 gap-7 *:bg-gradient-to-b *:from-[#2A283B] *:to-[#252231] *:text-white [&_h3]:text-[42px] [&_h3]:font-semibold [&_p]:text-[28px] [&_p]:font-light">
				{items.map((item, i) => (
					<BentoGridItem
						key={i}
						title={item.title}
						description={item.description}
						header={item.imgClass}
						className={item.className}
					/>
				))}
			</BentoGrid>
		</section>
  );
}
const Skeleton = () => (
  <div className=""></div>
);
const items = [
  {
    title: "Умный поиск",
		imgClass: "bg-[url(../app/cache/main-first.png)] w-full min-h-[617px] bg-contain bg-no-repeat",
    description: "Эта функция  на основе искусственного интеллекта обеспечивает мгновенный и точный поиск информации, сотрудников или документов, значительно упрощая работу и экономя время.",
    className: "row-span-2 col-span-1 py-11 px-[40px] items-center",
  },
  {
    title: "Proactive Risk",
    description: "Protect your financial future with AiFin's proactive risk management tools. Our AI algorithms monitor market trends, detect potential risks, and alert you to potential threats to your portfolio's performance.",
    className: "row-span-1 col-span-1 py-[120px] px-[70px] items-center",
  },
  {
    title: "Budgeting and Expense",
    description: "Take control of your finances with AiFin's intuitive budgeting and expense tracking tools. Monitor your spending, set savings goals, and track your progress in real-time, all in one place.",
    className: "row-span-1 col-span-1 py-[120px] px-[70px] items-center",
  },
];