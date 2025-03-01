"use client";

import { useState } from "react";
import Header from "@/components/Header";
import { Mail, Phone, Send, Loader } from "lucide-react";

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
    id: 1,
    name: "Иван Петров",
    corporateEmail: "i.petrov@cyber-ed.ru",
    photoUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    department: "ИТ",
    businessRole: "Developer",
    additionalInfo: null,
  },
  {
    id: 2,
    name: "Анна Сидорова",
    corporateEmail: "a.sidorova@cyber-ed.ru",
    photoUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    department: "Дизайн",
    businessRole: "Designer",
    additionalInfo: "Лидер команды",
  },
  {
    id: 3,
    name: "Дмитрий Иванов",
    corporateEmail: "d.ivanov@cyber-ed.ru",
    photoUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    department: "Кадры",
    businessRole: "Manager",
    additionalInfo: null,
  },
  {
    id: 4,
    name: "Елена Смирнова",
    corporateEmail: "e.smirnova@cyber-ed.ru",
    photoUrl: "https://randomuser.me/api/portraits/women/4.jpg",
    department: "Контроль качества",
    businessRole: "QA Engineer",
    additionalInfo: null,
  },
  {
    id: 5,
    name: "Сергей Волков",
    corporateEmail: "s.volkov@cyber-ed.ru",
    photoUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    department: "ИТ",
    businessRole: "Developer",
    additionalInfo: "Удаленно",
  },
  {
    id: 6,
    name: "Марина Кузнецова",
    corporateEmail: "m.kuznetsova@cyber-ed.ru",
    photoUrl: "https://randomuser.me/api/portraits/women/6.jpg",
    department: "Кадры",
    businessRole: "HR Specialist",
    additionalInfo: null,
  },
  {
    id: 7,
    name: "Алексей Смирнов",
    corporateEmail: "a.smirnov@cyber-ed.ru",
    photoUrl: "https://randomuser.me/api/portraits/men/7.jpg",
    department: "ИТ",
    businessRole: "Developer",
    additionalInfo: "Постоянный",
  },
  {
    id: 8,
    name: "Ольга Новикова",
    corporateEmail: "o.novikova@cyber-ed.ru",
    photoUrl: "https://randomuser.me/api/portraits/women/8.jpg",
    department: "Дизайн",
    businessRole: "Designer",
    additionalInfo: null,
  },
  {
    id: 9,
    name: "Михаил Фёдоров",
    corporateEmail: "m.fedorov@cyber-ed.ru",
    photoUrl: "https://randomuser.me/api/portraits/men/9.jpg",
    department: "Бизнес",
    businessRole: "Business Analyst",
    additionalInfo: null,
  },
  {
    id: 10,
    name: "Наталья Попова",
    corporateEmail: "n.popova@cyber-ed.ru",
    photoUrl: "https://randomuser.me/api/portraits/women/10.jpg",
    department: "Менеджмент",
    businessRole: "Project Manager",
    additionalInfo: "Agile",
  },
  {
    id: 11,
    name: "Павел Семёнов",
    corporateEmail: "p.semenov@cyber-ed.ru",
    photoUrl: "https://randomuser.me/api/portraits/men/11.jpg",
    department: "Поддержка",
    businessRole: "Support Engineer",
    additionalInfo: null,
  },
];

interface Message {
  sender: "user" | "assistant";
  text: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);

  // Получаем уникальные департаменты из массива сотрудников
  const departments = Array.from(
    new Set(employees.map((emp) => emp.department))
  ).join(", ");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedText = inputText.trim();
    if (!trimmedText || loading) return;

    // Добавляем сообщение пользователя
    const newMessage: Message = { sender: "user", text: trimmedText };
    setMessages((prev) => [...prev, newMessage]);
    setInputText("");

    // Показываем лоадер, имитируя время обдумывания от 1 до 2 секунд
    setLoading(true);
    const delay = Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;

    setTimeout(() => {
      let botResponseText = "Извините, я пока не знаю ответа на этот вопрос.";

      if (trimmedText.toLowerCase().includes("департаменты")) {
        botResponseText = `В корпоративном портале существуют следующие департаменты: ${departments}.`;
      } else if (trimmedText.toLowerCase().includes("начальник")) {
        botResponseText = "Павлов Станислав";
      } else if (trimmedText.toLowerCase().includes("отпуск")) {
        botResponseText =
          "Заявление на отпуск можно подать на странице документы -> доки -> заявление-на-отпуск.docx, после заполнения оно автоматически попадет вашему начальнику на подписания.";
      }

      const botResponse: Message = {
        sender: "assistant",
        text: botResponseText,
      };
      setMessages((prev) => [...prev, botResponse]);
      setLoading(false);
    }, delay);
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      <Header />
      <div className="w-10/12 mx-auto py-10">
        <h2 className="text-4xl font-bold mb-8 text-center">Чат-помощник</h2>
        <div className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col h-[550px]">
          <div className="flex-1 overflow-y-auto mb-6 space-y-4">
            {messages.length === 0 && (
              <div className="text-gray-500 italic text-center">
                Начните диалог...
              </div>
            )}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "assistant" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`px-5 py-3 rounded-3xl max-w-xs break-words ${
                    msg.sender === "assistant"
                      ? "bg-gray-200 text-gray-800 shadow-md"
                      : "bg-blue-600 text-white shadow-md"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex items-center justify-start space-x-2">
                <Loader className="animate-spin" size={20} />
              </div>
            )}
          </div>
          <form onSubmit={handleSend} className="flex">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 border border-gray-300 rounded-l-3xl px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Введите сообщение..."
              disabled={loading}
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-r-3xl px-6 py-3 flex items-center disabled:opacity-50"
              disabled={loading}
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
