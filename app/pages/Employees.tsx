'use client';

import Header from '@/components/Header';
import React, { useState } from "react";

interface Employee {
	id: number;
	name: string;
	department: string;
	position: string;
}

const employees: Employee[] = Array.from({ length: 25 }, (_, i) => ({
	id: i + 1,
	name: "Кристиан Бейл",
	department: "IT - отдел",
	position: "DevOps",
}));

const PAGE_SIZE = 10;

export default function Home() {
	const [currentPage, setCurrentPage] = useState(1);

	const startIndex = (currentPage - 1) * PAGE_SIZE;
	const endIndex = startIndex + PAGE_SIZE;
	const paginatedEmployees = employees.slice(startIndex, endIndex);
	const totalPages = Math.ceil(employees.length / PAGE_SIZE);

	return (
		<main className="relative">
			<Header />
			<div className="w-8/12 mx-auto p-4">
				<h1 className="text-2xl font-bold mb-4">Список сотрудников</h1>
				<div className="grid grid-cols-5 gap-5">
					{paginatedEmployees.map((employee) => (
						<div
							key={employee.id}
							className="p-6 bg-gray-200 rounded-xl shadow-md text-center"
						>
							<div className="w-24 h-24 mx-auto bg-gray-400 rounded-full flex items-center justify-center text-white text-4xl">
								👤
							</div>
							<h2 className="font-medium mt-2 text-2xl text-black">{employee.name}</h2>
							<div className='flex justify-between'>
								<div className='*:text-[10px] *:text-gray-600 *:text-left'>
									<p>Департамент:</p>
									<p>{employee.department}</p>
								</div>
								<div className='*:text-[10px] *:text-gray-600 *:text-right'>
									<p>Должность:</p>
									<p>{employee.position}</p>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Пагинация */}
				<div className="flex justify-center mt-6 space-x-2">
					{Array.from({ length: totalPages }, (_, i) => (
						<button
							key={i}
							onClick={() => setCurrentPage(i + 1)}
							className={`px-4 py-2 rounded-full ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-300"}`}
						>
							{i + 1}
						</button>
					))}
				</div>
			</div>
		</main>
	);
}