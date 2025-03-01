import React from "react";

interface UserProps {
	name: string;
	role: string;
	email: string;
	avatarUrl?: string;
}

const UserCard: React.FC<UserProps> = ({ name, role, email, avatarUrl }) => {
	return (
		<div className="bg-white shadow-md rounded-xl p-6 flex items-center space-x-4">
			<img
				src={avatarUrl || "/default-avatar.png"}
				alt={name}
				className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
			/>
			<div>
				<h3 className="text-xl font-semibold">{name}</h3>
				<p className="text-gray-600">{role}</p>
				<p className="text-gray-500 text-sm">{email}</p>
			</div>
		</div>
	);
};

export default UserCard;
