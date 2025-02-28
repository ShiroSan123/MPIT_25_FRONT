import type { Metadata } from "next";
import { Nunito_Sans, Inter, Poppins } from "next/font/google";
import "./globals.css";

import React from 'react';

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito_Sans({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["500", "400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
	title: "CyberOffice",
	description: "Created by BIMS",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				{/* Ваши мета-данные и шрифты */}
			</head>
			<body className={'font-helvetica-light text-gray-dark'}>
				{children}
			</body>
		</html>
	);
}
