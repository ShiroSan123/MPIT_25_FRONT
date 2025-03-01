'use client';

import React, { useState, useEffect } from 'react';
import axios from "axios";
import Header from "@/components/Header";
import { Mail, Phone, Send, User, Briefcase, Building, Search } from "lucide-react";

interface Employee {
	id: number;
	user_id: number;
	business_role: string | null;
	corporate_email: string;
	photo_url: string | null;
	additional_info: string | null;
	department_id: number | null;
	user: {
		first_name: string;
		last_name: string;
	};
	department?: {
		id: number;
		name: string;
	} | null;
}

const PAGE_SIZE = 10;

export default function Employees() {
	const [employees, setEmployees] = useState<Employee[]>([]);
	const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
	const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		const fetchEmployees = async () => {
			try {
				const response = await axios.get("http://localhost:8000/api/profiles", {
					withCredentials: true,
				});
				setEmployees(response.data);
				setFilteredEmployees(response.data);
			} catch (err) {
				setError("Ошибка загрузки сотрудников");
				console.error("Ошибка при получении данных сотрудников:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchEmployees();
	}, []);

	// Фильтрация сотрудников по имени и фамилии
	useEffect(() => {
		const filtered = employees.filter((employee) => {
			const fullName = `${employee.user.first_name} ${employee.user.last_name}`.toLowerCase();
			return fullName.includes(searchQuery.toLowerCase());
		});
		setFilteredEmployees(filtered);
		setCurrentPage(1);
	}, [searchQuery, employees]);

	const totalPages = Math.ceil(filteredEmployees.length / PAGE_SIZE);
	const startIndex = (currentPage - 1) * PAGE_SIZE;
	const paginatedEmployees = filteredEmployees.slice(startIndex, startIndex + PAGE_SIZE);

	const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
	const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

	return (
		<main className="relative">
			<Header />
			<div className="w-8/12 mx-auto py-10">
				{/* Поле поиска */}
				<div className="mb-6 flex items-center border border-gray-300 rounded-lg p-2">
					<Search size={20} className="text-gray-500 mx-2" />
					<input
						type="text"
						placeholder="🔍 Поиск по имени и фамилии..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="w-full p-2 focus:outline-none"
					/>
				</div>

				{!selectedEmployee ? (
					<>
						<h2 className="text-3xl font-semibold mb-6 text-center">Список сотрудников</h2>
						{loading ? (
							<p className="text-center text-gray-500">Загрузка сотрудников...</p>
						) : error ? (
							<p className="text-center text-red-500">{error}</p>
						) : (
							<div className="grid grid-cols-4 gap-5">
								{paginatedEmployees.map(employee => (
									<div
										key={employee.id}
										className="p-6 bg-gray-200 rounded-xl shadow-md text-center cursor-pointer hover:scale-105 transition-transform"
										onClick={() => setSelectedEmployee(employee)}
									>
										<div className="w-24 h-24 mx-auto bg-gray-400 rounded-full flex items-center justify-center text-white text-4xl">
											{employee.photo_url ? (
												<img src={employee.photo_url} alt="Фото" className="w-full h-full rounded-full object-cover" />
											) : (
												<User size={40} />
											)}
										</div>
										<h2 className="font-medium mt-2 text-lg text-black">
											{employee.user.first_name} {employee.user.last_name}
										</h2>
										<p className="text-sm text-gray-600">{employee.business_role || "Роль не указана"}</p>
									</div>
								))}
							</div>
						)}

						{/* Пагинация */}
						{totalPages > 1 && (
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
						)}
					</>
				) : (
					<div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
						<div className="flex items-center space-x-4 p-4 bg-blue-100 rounded-lg">
							<div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center text-white text-4xl">
								{selectedEmployee.photo_url ? (
									<img src={selectedEmployee.photo_url} alt="Фото" className="w-full h-full rounded-full object-cover" />
								) : (
									<User size={40} />
								)}
							</div>
							<div>
								<h2 className="text-3xl font-bold">
									{selectedEmployee.user.first_name} {selectedEmployee.user.last_name}
								</h2>
								<p className="text-gray-600">{selectedEmployee.business_role || "Роль не указана"}</p>
							</div>
						</div>

						<h3 className="text-xl font-semibold mt-6">Контактная информация</h3>
						<div className="mt-4 space-y-2">
							<p className="flex items-center space-x-2"><Mail size={16} /> <span>{selectedEmployee.corporate_email}</span></p>
						</div>

						<h3 className="text-xl font-semibold mt-6">Детали работы</h3>
						<div className="mt-4 space-y-2">
							<p className="flex items-center space-x-2"><Briefcase size={16} /><span>Должность: {selectedEmployee.business_role || "Должность не указана"}</span></p>
							<p className="flex items-center space-x-2"><Building size={16} /><span>Отдел: {selectedEmployee.department?.name || "Без отдела"}</span></p>
						</div>

						<h3 className="text-xl font-semibold mt-6">Дополнительная информация</h3>
						<p className="text-gray-600">{selectedEmployee.additional_info || "Нет дополнительных данных"}</p>

						<button className="mt-6 px-6 py-2 bg-red-500 text-white rounded-md" onClick={() => setSelectedEmployee(null)}>
							Закрыть
						</button>
					</div>
				)}
			</div>
		</main>
	);
}
