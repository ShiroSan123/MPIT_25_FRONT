"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Мок данные для роли пользователя
const mockRole = { role: "admin" };

// Компонент карточки профиля пользователя
const ProfileCard = ({ profile }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex items-center">
      <img
        src={profile.photo_url}
        alt={profile.user.first_name + " " + profile.user.last_name}
        className="w-16 h-16 rounded-full mr-4"
      />
      <div>
        <h3 className="text-xl font-bold">
          {profile.user.first_name} {profile.user.last_name}
        </h3>
        <p>
          {profile.business_role} – {profile.department}
        </p>
        <p className="text-sm text-gray-600">{profile.corporate_email}</p>
      </div>
    </div>
  );
};

// Компонент графика онлайн-пользователей за последние 24 часа
const OnlineChart = () => {
  // Мок-данные: 24 точки, по одной на каждый час
  const data = Array.from({ length: 24 }, (_, i) => ({
    hour: i + ":00",
    users: Math.floor(Math.random() * 50) + 10,
  }));

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2">
        Онлайн за последние 24 часа
      </h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="hour" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#2563EB"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// Компонент списка на одобрение (мок-данные)
const ApprovalList = () => {
  const approvalData = [
    {
      id: 1,
      user_id: 1001,
      business_role: "Developer",
      corporate_email: "i.petrov@cyber-ed.ru",
      photo_url: "https://randomuser.me/api/portraits/men/1.jpg",
      additional_info: null,
      department: "ИТ",
      user: { first_name: "Иван", last_name: "Петров" },
    },
    {
      id: 2,
      user_id: 1002,
      business_role: "Designer",
      corporate_email: "a.sidorova@cyber-ed.ru",
      photo_url: "https://randomuser.me/api/portraits/women/2.jpg",
      additional_info: "Лидер команды",
      department: "Дизайн",
      user: { first_name: "Анна", last_name: "Сидорова" },
    },
    {
      id: 3,
      user_id: 1003,
      business_role: "Manager",
      corporate_email: "d.ivanov@cyber-ed.ru",
      photo_url: "https://randomuser.me/api/portraits/men/3.jpg",
      additional_info: null,
      department: "Кадры",
      user: { first_name: "Дмитрий", last_name: "Иванов" },
    },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-4 mt-6">
      <h3 className="text-lg font-semibold mb-2">Пользователи на одобрение</h3>
      <ul>
        {approvalData.map((user) => (
          <li
            key={user.id}
            className="flex items-center justify-between border-b py-2"
          >
            <div className="flex items-center">
              <img
                src={user.photo_url}
                alt={user.user.first_name + " " + user.user.last_name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold">
                  {user.user.first_name} {user.user.last_name}
                </p>
                <p className="text-sm text-gray-600">{user.business_role}</p>
              </div>
            </div>
            <div>
              <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 mr-2">
                Одобрить
              </button>
              <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                Отклонить
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Компонент списка сотрудников с возможностью редактирования ролей и статусов
const EmployeesList = () => {
  const initialEmployees = [
    {
      id: 1,
      user: { first_name: "Иван", last_name: "Иванов" },
      role: "Developer",
      status: "active",
    },
    {
      id: 2,
      user: { first_name: "Анна", last_name: "Петрова" },
      role: "Designer",
      status: "inactive",
    },
    {
      id: 3,
      user: { first_name: "Дмитрий", last_name: "Сидоров" },
      role: "Manager",
      status: "active",
    },
  ];

  const [employees, setEmployees] = useState(initialEmployees);

  const handleRoleChange = (id, newRole) => {
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === id ? { ...emp, role: newRole } : emp))
    );
  };

  const handleStatusChange = (id, newStatus) => {
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === id ? { ...emp, status: newStatus } : emp))
    );
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 mt-6">
      <h3 className="text-lg font-semibold mb-2">Список сотрудников</h3>
      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Имя</th>
            <th className="border p-2">Роль</th>
            <th className="border p-2">Статус</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td className="border p-2">{emp.id}</td>
              <td className="border p-2">
                {emp.user.first_name} {emp.user.last_name}
              </td>
              <td className="border p-2">
                <select
                  value={emp.role}
                  onChange={(e) => handleRoleChange(emp.id, e.target.value)}
                  className="p-1 border rounded"
                >
                  <option value="Developer">Developer</option>
                  <option value="Designer">Designer</option>
                  <option value="Manager">Manager</option>
                  <option value="QA">QA</option>
                  <option value="HR">HR</option>
                </select>
              </td>
              <td className="border p-2">
                <select
                  value={emp.status}
                  onChange={(e) => handleStatusChange(emp.id, e.target.value)}
                  className="p-1 border rounded"
                >
                  <option value="active">active</option>
                  <option value="inactive">inactive</option>
                  <option value="on_leave">on_leave</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Компонент формы для создания новостей
const NewsForm = () => {
  const [news, setNews] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNews((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки формы на сервер
    alert(
      `Новость создана:\nЗаголовок: ${news.title}\nКонтент: ${news.content}`
    );
    setNews({ title: "", content: "" });
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 mt-6">
      <h3 className="text-lg font-semibold mb-2">Создать новость</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Заголовок</label>
          <input
            type="text"
            name="title"
            value={news.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Контент</label>
          <textarea
            name="content"
            value={news.content}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Создать новость
        </button>
      </form>
    </div>
  );
};

// Компонент дашборда с аналитикой (объединяет профиль и график)
const Dashboard = () => {
  const profileData = {
    id: 14,
    user_id: 1014,
    business_role: "CFO",
    corporate_email: "s.orlova@cyber-ed.ru",
    photo_url: "https://randomuser.me/api/portraits/women/14.jpg",
    additional_info: null,
    department: "Финансы",
    user: { first_name: "Светлана", last_name: "Орлова" },
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Админ-панель</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProfileCard profile={profileData} />
        <OnlineChart />
      </div>
      <div className="mt-6">
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Общая статистика</h3>
          <ul>
            <li className="py-1 border-b">
              Всего пользователей: <span className="font-bold">120</span>
            </li>
            <li className="py-1 border-b">
              Активных сейчас: <span className="font-bold">15</span>
            </li>
            <li className="py-1 border-b">
              Новых за месяц: <span className="font-bold">8</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const AdminPage = () => {
  // Используем мок данные для роли
  const role = mockRole;

  // Если роль не admin
  if (!role || role.role !== "admin") {
    return (
      <>
        <Header />
        <div className="max-w-5xl mx-auto p-6 py-[100px]">
          У вас недостаточно прав для просмотра этой страницы.
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto">
        {/* Дашборд с аналитикой */}
        <Dashboard />

        {/* Список на одобрение */}
        <ApprovalList />

        {/* Список сотрудников с возможностью изменения ролей и статусов */}
        <EmployeesList />

        {/* Форма для создания новостей */}
        <NewsForm />
      </main>
      <Footer />
    </>
  );
};

export default AdminPage;
