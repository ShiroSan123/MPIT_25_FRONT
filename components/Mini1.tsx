import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
 
export function Mini1() {
	
  return (
		<section className="justify-center flex flex-col max-w-screen  pt-4 pb-[100px] w-[68vw] mx-auto">
			<h2 className="text-[85px] font-poppins font-semibold text-[#3314F1] text-transparent bg-clip-text inline-block">Какие преимущества</h2>

			<BentoGrid className="*:text-left *:rounded-[35px] w-[80vw] grid-cols-2 grid grid-flow-col grid-rows-2 gap-7 *:bg-gradient-to-b *:from-[#2A283B] *:to-[#252231] *:text-white [&_h3]:text-[42px] [&_h3]:font-semibold [&_p]:text-[28px] [&_p]:font-light">
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

const items = [
  {
    title: "Умный поиск",
		imgClass: "bg-[url(../app/cache/main-first.png)] w-full min-h-[617px] bg-contain bg-no-repeat",
    description: "Эта функция  на основе ИИ обеспечивает мгновенный и точный поиск информации, сотрудников или документов, значительно упрощая работу и экономя время.",
    className: "row-span-2 col-span-1 py-[70px] px-[40px] items-center",
  },
  {
    title: "Новости компании",
    description: "Единое пространство для публикации, хранения и удобного доступа к актуальным корпоративным новостям, анонсам и обновлениям, что помогает сотрудникам всегда быть в курсе важных событий.",
    className: "row-span-1 col-span-1 py-[70px] px-[40px] items-center",
  },
  {
    title: "Оптимизация документов",
    description: "Интеграция с ИИ позволяет автоматически генерировать документы, отчёты и шаблоны, минимизируя ручной труд, ускоряя процессы и снижая вероятность ошибок при оформлении.",
    className: "row-span-1 col-span-1 py-[70px] px-[40px] items-center",
  },
];