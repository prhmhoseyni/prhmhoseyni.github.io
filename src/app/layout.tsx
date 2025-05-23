import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import Header from "~/components/Header";
import Navigation from "~/components/Navigation";
import "./globals.css";

const inter = Inter({
    variable: "--font-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Parham Hoseyni",
    description: "Web Developer",
    openGraph: {
        title: "Parham Hoseyni",
        description: "Web Developer",
        images: ["https://prhmhoseyni.github.io/images/open-graph.jpg"],
    },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en" dir="ltr">
            <body className={`${inter.className} container mx-auto max-w-6xl`}>
                <div className="flex flex-col gap-8 lg:flex-row lg:justify-center px-4 pt-4 pb-20">
                    <Header />

                    <main id="main" className="w-full bg-background-secondary border border-border-primary rounded-4xl">
                        <Navigation />

                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
