"use client";

import data from "../data/data.json";
import { Title } from "@components/title";
import React from "react";
import { useState } from "react";
import img from "../../img/down.png";
import Image from "next/image";

export default function Flashcards() {
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

            <main className="grid grid-cols-3 gap-4">
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
