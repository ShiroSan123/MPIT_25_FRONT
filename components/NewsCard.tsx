import React from "react";

interface NewsProps {
	title: string;
	date: string;
	imageUrl: string;
}

const NewsCard: React.FC<NewsProps> = ({ title, date, imageUrl }) => {
	return (
		<div className="bg-white shadow-md rounded-xl overflow-hidden">
			<img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
			<div className="p-4">
				<h3 className="text-lg font-semibold">{title}</h3>
				<p className="text-gray-500 text-sm">{date}</p>
			</div>
		</div>
	);
};

export default NewsCard;
