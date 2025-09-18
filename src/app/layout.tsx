import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Walisson Vinicius | Desenvolvedor Full Stack",
  description: "Desenvolvedor Full Stack especializado em React, Next.js, TypeScript e Node.js. Transformando ideias em soluções tecnológicas inovadoras.",
  keywords: ["Walisson Vinicius", "Desenvolvedor Full Stack", "React", "Next.js", "TypeScript", "Node.js", "JavaScript"],
  authors: [{ name: "Walisson Vinicius" }],
  creator: "Walisson Vinicius",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://walisson-portfolio.vercel.app",
    title: "Walisson Vinicius | Desenvolvedor Full Stack",
    description: "Desenvolvedor Full Stack especializado em React, Next.js, TypeScript e Node.js. Transformando ideias em soluções tecnológicas inovadoras.",
    siteName: "Walisson Vinicius Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Walisson Vinicius | Desenvolvedor Full Stack",
    description: "Desenvolvedor Full Stack especializado em React, Next.js, TypeScript e Node.js. Transformando ideias em soluções tecnológicas inovadoras.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
