'use client';

import { useState } from "react";
import Header from "@/components/Header";
import { Mail, Phone, Send } from "lucide-react";

interface Employee {
	id: number;
	name: string;
	age: number;
	email: string;
	corporateEmail: string;
	phone: string;
	telegram: string;
	department: string;
	position: string;
	status: string;
}

const employees: Employee[] = Array.from({ length: 25 }, (_, i) => ({
	id: i + 1,
	name: "Кристиан Бейл",
	age: 22,
	corporateEmail: "serito@cybered.ru",
	email: "hotnikita412@gmail.com",
	phone: "+7 (914) 281-30-18",
	telegram: "ntimm",
	department: "IT - департамент",
	position: "DevOps",
	status: "Сотрудник"
}));

const PAGE_SIZE = 10;

export default function Employees() {
	const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.ceil(employees.length / PAGE_SIZE);
	const startIndex = (currentPage - 1) * PAGE_SIZE;
	const paginatedEmployees = employees.slice(startIndex, startIndex + PAGE_SIZE);

	// Функции для смены страницы
	const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
	const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

	return (
		<main className="relative">
			<Header />
			<div className="w-8/12 mx-auto py-10">
				{!selectedEmployee ? (
					<>
						<h2 className="text-3xl font-medium mb-6">Список сотрудников</h2>
						<div className="grid grid-cols-5 gap-5">
							{paginatedEmployees.map(employee => (
								<div
									key={employee.id}
									className="p-6 bg-gray-200 rounded-xl shadow-md text-center cursor-pointer hover:scale-105 transition-transform"
									onClick={() => setSelectedEmployee(employee)}
								>
									<div className="w-24 h-24 mx-auto bg-gray-400 rounded-full flex items-center justify-center text-white text-4xl">
										👤
									</div>
									<h2 className="font-medium mt-2 text-2xl text-black">{employee.name}</h2>
									<div className="flex">
										<p className="text-sm text-gray-600 text-left">Отдел: {employee.department}</p>
										<p className="text-sm text-gray-600 text-right">Должность: {employee.position}</p>
									</div>

								</div>
							))}
						</div>

						{/* Пагинация */}
						<div className="flex justify-center mt-6 space-x-4">
							<button
								className={`px-4 py-2 bg-gray-300 rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-400"}`}
								onClick={prevPage}
								disabled={currentPage === 1}
							>
								Назад
							</button>
							<span className="text-lg font-semibold">{currentPage} / {totalPages}</span>
							<button
								className={`px-4 py-2 bg-gray-300 rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-400"}`}
								onClick={nextPage}
								disabled={currentPage === totalPages}
							>
								Вперед
							</button>
						</div>
					</>
				) : (
					<div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
						<div className="flex items-center space-x-4 p-4 bg-blue-100 rounded-lg">
							<div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center text-white text-4xl">👤</div>
							<div>
								<h2 className="text-3xl font-bold">{selectedEmployee.name}</h2>
								<p className="text-gray-600">{selectedEmployee.age} года</p>
								<p className="text-gray-600">Отдел: {selectedEmployee.department}</p>
								<p className="text-gray-600">Должность: {selectedEmployee.position}</p>
							</div>
						</div>
						<h3 className="text-xl font-semibold mt-6">Персональная информация</h3>
						<div className="mt-4 space-y-2">
							<p className="flex items-center space-x-2"><Mail size={16} /> <span>{selectedEmployee?.corporateEmail}</span></p>
							<p className="flex items-center space-x-2"><Mail size={16} /> <span>{selectedEmployee?.email}</span></p>
							<p className="flex items-center space-x-2"><Phone size={16} /> <span>{selectedEmployee?.phone}</span></p>
							<p className="flex items-center space-x-2"><Send size={16} /> <span>{selectedEmployee?.telegram}</span></p>
						</div>
						<button className="mt-6 px-6 py-2 bg-red-500 text-white rounded-md" onClick={() => setSelectedEmployee(null)}>
							Закрыть
						</button>
					</div>
				)}
			</div>
		</main>
	);
}
