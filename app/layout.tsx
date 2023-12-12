import "./globals.css";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { Header } from "./header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={inter.variable}>
            <head />
            <body className="relative min-h-screen bg-black bg-gradient-to-tr from-zinc-900/50 to-zinc-700/30">
                <Header />

                <main className=" min-h-[80vh] ">{children}</main>

                <footer className="bottom-0 border-t inset-2x-0 border-zinc-500/10">
                    <div className="flex flex-col gap-1 px-6 py-12 mx-auto text-xs text-center text-zinc-700 max-w-7xl lg:px-8">
                        <p>
                            Built with 💖 by{" "}
                            <Link
                                href="https://github.com/samuel-ma"
                                className="font-semibold duration-150 hover:text-zinc-200"
                            >
                                @samuel-ma
                            </Link>
                        </p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
