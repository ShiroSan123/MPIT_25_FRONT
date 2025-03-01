'use client';

import { useState } from "react";
import Header from "@/components/Header";
import { Mail, Phone, Send } from "lucide-react";

interface Employee {
	id: number;
	name: string;
	corporateEmail: string;
	photoUrl: string;
	department: string;
	businessRole: string;
	additionalInfo: string | null;
}

const employees: Employee[] = [
	{
		"id": 1,
		"name": "Иван Петров",
		"corporateEmail": "i.petrov@cyber-ed.ru",
		"photoUrl": "https://randomuser.me/api/portraits/men/1.jpg",
		"department": "ИТ",
		"businessRole": "Developer",
		"additionalInfo": null
	},
	{
		"id": 2,
		"name": "Анна Сидорова",
		"corporateEmail": "a.sidorova@cyber-ed.ru",
		"photoUrl": "https://randomuser.me/api/portraits/women/2.jpg",
		"department": "Дизайн",
		"businessRole": "Designer",
		"additionalInfo": "Лидер команды"
	},
	{
		"id": 3,
		"name": "Дмитрий Иванов",
		"corporateEmail": "d.ivanov@cyber-ed.ru",
		"photoUrl": "https://randomuser.me/api/portraits/men/3.jpg",
		"department": "Кадры",
		"businessRole": "Manager",
		"additionalInfo": null
	},
	{
		"id": 4,
		"name": "Елена Смирнова",
		"corporateEmail": "e.smirnova@cyber-ed.ru",
		"photoUrl": "https://randomuser.me/api/portraits/women/4.jpg",
		"department": "Контроль качества",
		"businessRole": "QA Engineer",
		"additionalInfo": null
	},
	{
		"id": 5,
		"name": "Сергей Волков",
		"corporateEmail": "s.volkov@cyber-ed.ru",
		"photoUrl": "https://randomuser.me/api/portraits/men/5.jpg",
		"department": "ИТ",
		"businessRole": "Developer",
		"additionalInfo": "Удаленно"
	},
	{
		"id": 6,
		"name": "Марина Кузнецова",
		"corporateEmail": "m.kuznetsova@cyber-ed.ru",
		"photoUrl": "https://randomuser.me/api/portraits/women/6.jpg",
		"department": "Кадры",
		"businessRole": "HR Specialist",
		"additionalInfo": null
	},
	{
		"id": 7,
		"name": "Алексей Смирнов",
		"corporateEmail": "a.smirnov@cyber-ed.ru",
		"photoUrl": "https://randomuser.me/api/portraits/men/7.jpg",
		"department": "ИТ",
		"businessRole": "Developer",
		"additionalInfo": "Постоянный"
	},
	{
		"id": 8,
		"name": "Ольга Новикова",
		"corporateEmail": "o.novikova@cyber-ed.ru",
		"photoUrl": "https://randomuser.me/api/portraits/women/8.jpg",
		"department": "Дизайн",
		"businessRole": "Designer",
		"additionalInfo": null
	},
	{
		"id": 9,
		"name": "Михаил Фёдоров",
		"corporateEmail": "m.fedorov@cyber-ed.ru",
		"photoUrl": "https://randomuser.me/api/portraits/men/9.jpg",
		"department": "Бизнес",
		"businessRole": "Business Analyst",
		"additionalInfo": null
	},
	{
		"id": 10,
		"name": "Наталья Попова",
		"corporateEmail": "n.popova@cyber-ed.ru",
		"photoUrl": "https://randomuser.me/api/portraits/women/10.jpg",
		"department": "Менеджмент",
		"businessRole": "Project Manager",
		"additionalInfo": "Agile"
	},
	{
		"id": 11,
		"name": "Павел Семёнов",
		"corporateEmail": "p.semenov@cyber-ed.ru",
		"photoUrl": "https://randomuser.me/api/portraits/men/11.jpg",
		"department": "Поддержка",
		"businessRole": "Support Engineer",
		"additionalInfo": null
	}
]
	;

export default function Employees() {
	const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

	return (
		<main className="relative">
			<Header />
			<div className="w-8/12 mx-auto py-10">
				{!selectedEmployee ? (
					<>
						<h2 className="text-3xl font-medium mb-6">Список сотрудников</h2>
						<div className="grid grid-cols-3 gap-5">
							{employees.map(employee => (
								<div
									key={employee.id}
									className="p-6 bg-gray-200 rounded-xl shadow-md text-center cursor-pointer hover:scale-105 transition-transform"
									onClick={() => setSelectedEmployee(employee)}
								>
									<img src={employee.photoUrl} alt={employee.name} className="w-24 h-24 mx-auto rounded-full" />
									<h2 className="font-medium mt-2 text-2xl text-black">{employee.name}</h2>
									<p className="text-sm text-gray-600">{employee.businessRole}</p>
									<p className="text-sm text-gray-600">{employee.department}</p>
								</div>
							))}
						</div>
					</>
				) : (
					<div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
						<div className="flex items-center space-x-4 p-4 bg-blue-100 rounded-lg">
							<img src={selectedEmployee.photoUrl} alt={selectedEmployee.name} className="w-16 h-16 rounded-full" />
							<div>
								<h2 className="text-3xl font-bold">{selectedEmployee.name}</h2>
								<p className="text-gray-600">{selectedEmployee.businessRole}</p>
								<p className="text-gray-600">{selectedEmployee.department}</p>
							</div>
						</div>
						<h3 className="text-xl font-semibold mt-6">Персональная информация</h3>
						<div className="mt-4 space-y-2">
							<p className="flex items-center space-x-2"><Mail size={16} /> <span>{selectedEmployee?.corporateEmail}</span></p>
							<p className="text-gray-600">Должность: {selectedEmployee.businessRole}</p>
							<p className="text-gray-600">Отдел: {selectedEmployee.department}</p>
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