'use client';

import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "@/components/UserCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone } from "lucide-react";

interface ProfileData {
	id: number;
	user_id: number;
	phone: string;
	business_role: string | null;
	system_role: string;
	corporate_email: string;
	photo_url: string | null;
	additional_info: string | null;
	department_id: number | null;
	user?: {
		first_name: string;
		last_name: string;
	};
	department: string | null;
}

interface Session {
	phone: string;
	started_at: string;
}

const ProfilePage = () => {
	const [profile, setProfile] = useState<ProfileData | null>(null);
	const [sessions, setSessions] = useState<Session[]>([]);
	const [systemRole, setSystemRole] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [profileResponse, roleResponse, sessionResponse] = await Promise.all([
					axios.get("http://localhost:8000/api/profile", { withCredentials: true }),
					axios.get("http://localhost:8000/api/role", { withCredentials: true }),
					axios.get("http://localhost:8000/api/active_sessions", { withCredentials: true })
				]);

				if (profileResponse.data && typeof profileResponse.data === "object") {
					setProfile(profileResponse.data);
				} else {
					setError("Профиль не найден");
				}

				console.log("Ответ из /api/role:", roleResponse.data);

				if (roleResponse.data && typeof roleResponse.data === "object" && roleResponse.data.name) {
					setSystemRole(roleResponse.data.name);
				} else {
					setError("Ошибка получения роли");
				}

				setSessions(sessionResponse.data || []);
			} catch (err) {
				setError("Ошибка загрузки данных");
				console.error("Ошибка загрузки:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (systemRole === "admin" || systemRole === "guest") {
		return (
			<div className="flex justify-center items-center h-screen">
				<h1 className="text-3xl font-bold text-red-500">Профиль недоступен</h1>
			</div>
		);
	}

	const userName = profile?.user ? `${profile.user.first_name} ${profile.user.last_name}` : "Имя не указано";

	return (
		<>
			<Header />
			<div className="max-w-5xl mx-auto p-6 py-[100px]">
				<section className="rounded-lg flex items-center justify-between">
					<UserCard
						name={userName}
						role={profile?.business_role || "Роль не указана"}
						email={profile?.corporate_email || "Email не указан"}
						avatarUrl={profile?.photo_url || "https://randomuser.me/api/portraits/men/1.jpg"}
					/>
				</section>

				<section className="mt-8">
					<h3 className="text-xl font-semibold">Контакты</h3>
					<div className="mt-4 space-y-2">
						<p className="flex items-center space-x-2">
							<Mail size={16} /> <span>{profile?.corporate_email || "Email не указан"}</span>
						</p>
						<p className="flex items-center space-x-2">
							<Phone size={16} /> <span>{profile?.phone || "Телефон не указан"}</span>
						</p>
					</div>
				</section>

				<section className="mt-8">
					<h3 className="text-xl font-semibold">Активные сессии</h3>
					<p className="text-gray-600 text-sm mb-4">Здесь отображаются ваши активные сессии.</p>

					{loading ? (
						<p className="text-gray-500">Загрузка...</p>
					) : sessions.length > 0 ? (
						<ul className="bg-gray-100 p-4 rounded-lg space-y-2">
							{sessions.map((session, index) => (
								<li key={index} className="flex justify-between items-center p-2 border-b">
									<span className="text-gray-700">{session.phone}</span>
									<span className="text-gray-500 text-sm">{new Date(session.started_at).toLocaleString()}</span>
								</li>
							))}
						</ul>
					) : (
						<p className="text-gray-500">Нет активных сессий.</p>
					)}
				</section>
			</div>
		</>
	);
};

export default ProfilePage;
