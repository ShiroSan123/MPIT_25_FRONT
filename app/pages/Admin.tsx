'use client';

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getRole, getGuests, upgradeUser } from "@/api";

const AdminPage = () => {
  const [role, setRole] = useState(null);
  const [guestUsers, setGuestUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Получаем список гостей
  const fetchGuestUsers = async () => {
    try {
      const data = await getGuests();
      setGuestUsers(data);
    } catch (err) {
      console.error("Ошибка получения списка гостей:", err);
      setError("Ошибка получения списка гостей");
    }
  };

  // Одобряем гостя — обновляем его роль через PATCH‑запрос
  const approveUser = async (userId) => {
    try {
      const response = await upgradeUser(userId);
      alert(response.msg);
      await fetchGuestUsers();
    } catch (err) {
      console.error("Ошибка одобрения пользователя:", err);
      alert("Ошибка одобрения пользователя");
    }
  };

  useEffect(() => {
    const initialize = async () => {
      try {
        const userRole = await getRole();
        setRole(userRole);
        if (userRole.role === "admin") {
          await fetchGuestUsers();
        }
      } catch (err) {
        console.error("Ошибка при инициализации:", err);
        setError("Ошибка при получении роли");
      } finally {
        setLoading(false);
      }
    };

    initialize();
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <div className="max-w-5xl mx-auto p-6 py-[100px]">Загрузка...</div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <div className="max-w-5xl mx-auto p-6 py-[100px]">{error}</div>
        <Footer />
      </>
    );
  }

  // Если роль не admin
  if (!role || role.role !== "admin") {
    return (
      <>
        <Header />
        <div className="max-w-5xl mx-auto p-6 py-[100px]">
          У вас недостаточно прав для просмотра этой страницы.
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto p-6 py-[100px]">
        <h1 className="text-2xl mb-6">Список гостей</h1>
        {guestUsers.length ? (
          <table className="min-w-full border">
            <thead>
              <tr>
                <th className="border p-2">ID</th>
                <th className="border p-2">Имя</th>
                <th className="border p-2">Контакты</th>
                <th className="border p-2">Действия</th>
              </tr>
            </thead>
            <tbody>
              {guestUsers.map((guest) => {
                const name = guest.user
                  ? `${guest.user.first_name} ${guest.user.last_name}`
                  : `${guest.first_name} ${guest.last_name}`;
                let contact = guest.phone_number || guest.corporate_email || "нет данных";
                if (guest.phone_number === "79999999999") {
                  contact += " (самый умный)";
                }
                return (
                  <tr key={guest.id}>
                    <td className="border p-2">{guest.id}</td>
                    <td className="border p-2">{name}</td>
                    <td className="border p-2">{contact}</td>
                    <td className="border p-2">
                      <button
                        onClick={() => approveUser(guest.id)}
                        className="bg-blue-500 text-white py-1 px-3 rounded"
                      >
                        Одобрить
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p>Нет гостей для отображения.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default AdminPage;
