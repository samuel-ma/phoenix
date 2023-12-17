"use client";

import data from "../data/data.json";
import { Title } from "@components/title";
import React from "react";
import { useState } from "react";
import img from "../../img/down.png";
import Image from "next/image";
import { FaFilter } from "react-icons/fa6";

export default function Flashcards() {
    const tags = [
        {
            id: 0,
            name: "doctor",
        },
        {
            id: 1,
            name: "insurance",
        },
        {
            id: 2,
            name: "medicare",
        },
        {
            id: 3,
            name: "pain",
        },
        {
            id: 4,
            name: "location",
        },
        {
            id: 5,
            name: "list",
        },
        {
            id: 6,
            name: "uninterest",
        },
    ];
    const [current, setCurrent] = useState(null);

    const handleClick = (id: any) => {
        setCurrent(id !== current ? id : null);
    };

    return (
        <div className="container px-8 mx-auto my-10 lg:mt-32 ">
            <header className="my-10 flex items-center flex-col">
                <Image src={img} alt="logo" className="w-[60px]" />
                <Title>FLASH CARDS</Title>

                <p className="mt-4 text-sm text-center text-zinc-600">
                    Unlock the power of learning with the power of dynamic
                    flashcards
                </p>
            </header>

            <section>
                <div>
                    <input
                        className="bg-transparent text-white rounded-md my-4 w-full"
                        type="text"
                        placeholder="Search..."
                    />
                </div>

                <div className="md:flex md:items-center md:justify-between my-4 sm:grid sm:grid-cols-3 sm:gap-2">
                    <div className="flex items-center gap-3 justify-center text-[#6B7280] hover:border-white hover:text-white px-10 p-1 border border-[#6B7280] rounded-md cursor-pointer">
                        <div>
                            <FaFilter />
                        </div>
                        Filter
                    </div>

                    {tags.map((e) => (
                        <button
                            className="text-[#6B7280] px-10 p-1 border border-[#6B7280] hover:border-white hover:text-white rounded-md cursor-pointer"
                            key={e.id}
                        >
                            {e.name}
                        </button>
                    ))}
                </div>
            </section>

            <main className="grid md:grid-cols-1 lg:grid-cols-3 gap-4 my-10">
                {data.map((e) => (
                    <section
                        key={e.id}
                        className={e.id === current ? "card2" : "card"}
                        onClick={() => handleClick(e.id)}
                    >
                        <p>{e.id === current ? e.answer : e.question}</p>
                        <div className="round"></div>
                    </section>
                ))}
            </main>
        </div>
    );
}
