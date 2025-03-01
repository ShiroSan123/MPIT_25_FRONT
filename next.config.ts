import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
};

module.exports = {
	images: {
		domains: ['upload.wikimedia.org'], // Добавьте домен, откуда загружаются изображения
	},
};

export default nextConfig;
