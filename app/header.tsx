"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import img from "../img/phoenix (1).png";
import { usePathname } from "next/navigation";

const navigation = [
    {
        name: "Learn",
        href: "/learn",
    },
    {
        name: "Test",
        href: "/test",
    },
    {
        name: "GitHub",
        href: "https://github.com/samuel-ma/phoenix",
        external: true,
    },
] satisfies { name: string; href: string; external?: boolean }[];

export const Header: React.FC = () => {
    const pathname = usePathname();

    return (
        <header className="top-0 z-30 w-full sm:fixed backdrop-blur bh-zinc-900/50">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-between gap-2 pt-6 sm:h-20 sm:flex-row sm:pt-0">
                    <Link
                        href="/"
                        className="font-bold duration-150 flex items-center gap-2 text-zinc-100 hover:text-white"
                    >
                        <Image src={img} alt="logo" className="w-[40px]" />
                        Phoenix DME
                    </Link>

                    {/* Desktop navigation */}
                    <nav className="flex items-center grow">
                        <ul className="flex flex-wrap items-center justify-end gap-4 grow">
                            {navigation.map((item) => (
                                <li className="" key={item.href}>
                                    <Link
                                        className={`flex items-center px-3 py-2 duration-150 sm:text-base  hover:text-zinc-50
                    ${
                        pathname === item.href
                            ? "text-zinc-200"
                            : "text-zinc-400"
                    }`}
                                        href={item.href}
                                        target={
                                            item.external ? "_blank" : undefined
                                        }
                                        rel={
                                            item.external
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Fancy fading bottom border */}
        </header>
    );
};
