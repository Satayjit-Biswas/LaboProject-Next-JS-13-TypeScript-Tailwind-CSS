import HeaderMain from "@/components/HeaderMain";
import HeaderTop from "@/components/HeaderTop";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import MobNavbar from "@/components/MobNavbar";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<HeaderTop></HeaderTop>
				<HeaderMain></HeaderMain>
				<Navbar></Navbar>
				<MobNavbar></MobNavbar>
				{children}
				<Footer></Footer>
			</body>
		</html>
	);
}
