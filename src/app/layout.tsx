import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import type React from "react";
import { ErrorBoundary } from "@/components/error-boundary";
import { RESUME_DATA } from "@/data/resume-data";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
	adjustFontFallback: false,
});

export const metadata: Metadata = {
	metadataBase: new URL("https://cv.slowey.dev"),
	title: {
		default: `${RESUME_DATA.name} - ${RESUME_DATA.about}`,
		template: `%s | ${RESUME_DATA.name}`,
	},
	description: RESUME_DATA.about,
	icons: {
		icon: [
			{
				url: "/favicon.png",
				type: "image/png",
				sizes: "32x32",
			},
		],
		shortcut: "/favicon.png",
		apple: "/apple-icon.png",
	},
	keywords: [
		"resume",
		"cv",
		"portfolio",
		RESUME_DATA.name,
		"software engineer",
		"full stack developer",
		"react",
		"next.js",
		"typescript",
	],
	authors: [{ name: RESUME_DATA.name }],
	creator: RESUME_DATA.name,
	publisher: RESUME_DATA.name,
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: RESUME_DATA.personalWebsiteUrl,
		siteName: `${RESUME_DATA.name}'s CV`,
		title: `${RESUME_DATA.name} - ${RESUME_DATA.about}`,
		description: RESUME_DATA.about,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		card: "summary_large_image",
		title: `${RESUME_DATA.name} - ${RESUME_DATA.about}`,
		description: RESUME_DATA.about,
		creator: "@sloweyyy",
	},
	alternates: {
		canonical: RESUME_DATA.personalWebsiteUrl,
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.className}>
			<head>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
				<link rel="shortcut icon" href="/favicon.png" />
			</head>
			<body>
				<ErrorBoundary>{children}</ErrorBoundary>
			</body>
			<Analytics />
		</html>
	);
}
