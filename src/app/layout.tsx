import type { Metadata } from "next";
import { Nunito, Merriweather } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "600", "700", "800"],
});

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Cloudy - Your Daily Gratitude Companion",
    template: "%s | Cloudy"
  },
  description: "A simple, beautiful gratitude journal designed to help you build a positive habit. Track your progress, unlock companions, and find peace.",
  keywords: ["gratitude journal", "mindfulness app", "daily reflection", "mental health", "habit tracker", "Cloudy app"],
  authors: [{ name: "Egor Kabantsov" }],
  creator: "Egor Kabantsov",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cloudy-app.vercel.app", // Recommend updating this to your actual domain
    siteName: "Cloudy",
    title: "Cloudy - Your Daily Gratitude Companion",
    description: "Start your daily gratitude habit with Cloudy. A peaceful companion for daily mindfulness.",
    images: [
      {
        url: "/images/screenshotMain.png",
        width: 1200,
        height: 630,
        alt: "Cloudy App Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloudy - Your Daily Gratitude Companion",
    description: "Start your daily gratitude habit with Cloudy. A peaceful companion for daily mindfulness.",
    images: ["/images/screenshotMain.png"],
    creator: "@egorkabantsov",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="icon" href="/images/icon_no_bg.ico" />
      </head>
      <body className={`${nunito.variable} ${merriweather.variable} font-nunito antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
