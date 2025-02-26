import type { Metadata } from "next";
import { Nunito_Sans, Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"]});
const nunito = Nunito_Sans({ subsets: ["latin"]});
const poppins = Poppins({ weight: ["500","400","700"], subsets: ["latin"]});	

export const metadata: Metadata = {
  title: "Cyberstaff",
  description: "Created by BIMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'${inter.className} ${nunito.className} ${poppins.className}'}>
        {children}
      </body>
    </html>
  );
}
