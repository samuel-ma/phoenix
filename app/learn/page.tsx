"use client";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";
import img from "../../img/phoenix (1).png";
import { Title } from "@components/title";
import React from "react";

export default function Learn() {
    return (
        <div className="container px-8 mx-auto my-16 lg:mt-32 ">
            <header className="my-10">
                <Title>Learn the Telesales Training curriculum</Title>
                <p className="mt-4 text-sm text-center text-zinc-600">
                    You can download the pdf files and read through the main
                    topics
                </p>
            </header>

            <section className="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
                <div className="rounded-md p-4 mt-8 border border-zinc-600 focus-within:border-zinc-100/80 focus-within:ring-0 ">
                    <div>
                        <Image
                            className="w-full h-20 object-contain"
                            src={img}
                            alt="img"
                        />
                    </div>

                    <div>
                        <h1 className="py-2 text-xl font-bold text-center text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/60 to-white">
                            Day One
                        </h1>

                        <p className="my-2 text-sm text-center text-zinc-600">
                            {" "}
                            Learn the basic sales techniques, how to improve
                            your sales skills and alot more...
                        </p>

                        <Link
                            target="_blank"
                            href="https://drive.google.com/file/d/1BF4ndc46fW8H8PW__rpGyRwjGMAXTX50/view?usp=drive_link"
                            className="flex items-center justify-center w-full gap-2 px-4 py-2 mt-4 text-sm text-center transition-all duration-150 rounded text-zinc-800 hover:text-zinc-100 bg-zinc-200 hover:bg-transparent ring-1 ring-zinc-100"
                        >
                            <span>Learn</span>
                            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                <div className="rounded-md p-4 mt-8 border border-zinc-600 focus-within:border-zinc-100/80 focus-within:ring-0 ">
                    <div>
                        <Image
                            className="w-full h-20 object-contain"
                            src={img}
                            alt="img"
                        />
                    </div>

                    <div>
                        <h1 className="py-2 text-xl font-bold text-center text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/60 to-white">
                            Day Two
                        </h1>

                        <p className="my-2 text-sm text-center text-zinc-600">
                            You will learn about the sales script that we use,
                            from the introduction all the way to the trail
                            close.
                        </p>

                        <Link
                            target="_blank"
                            href="https://drive.google.com/file/d/11sOwFzA7bNJmWG0WmruvpfAtcG4pamxI/view?usp=drive_link"
                            className="flex items-center justify-center w-full gap-2 px-4 py-2 mt-4 text-sm text-center transition-all duration-150 rounded text-zinc-800 hover:text-zinc-100 bg-zinc-200 hover:bg-transparent ring-1 ring-zinc-100"
                        >
                            <span>Learn</span>
                            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                <div className="rounded-md p-4 mt-8 border border-zinc-600 focus-within:border-zinc-100/80 focus-within:ring-0 ">
                    <div>
                        <Image
                            className="w-full h-20 object-contain"
                            src={img}
                            alt="img"
                        />
                    </div>

                    <div>
                        <h1 className="py-2 text-xl font-bold text-center text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/60 to-white">
                            Day Three
                        </h1>

                        <p className="my-2 text-sm text-center text-zinc-600">
                            On day three, you are going to learn about rebuttals
                            and how to respond to the different types of
                            patients
                        </p>

                        <Link
                            target="_blank"
                            href="https://drive.google.com/file/d/1KuFpw1GcBccMif19pnkVJ7adJ4STuqRR/view?usp=drive_link"
                            className="flex items-center justify-center w-full gap-2 px-4 py-2 mt-4 text-sm text-center transition-all duration-150 rounded text-zinc-800 hover:text-zinc-100 bg-zinc-200 hover:bg-transparent ring-1 ring-zinc-100"
                        >
                            <span>Learn</span>
                            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                <div className="rounded-md p-4 mt-8 border border-zinc-600 focus-within:border-zinc-100/80 focus-within:ring-0 ">
                    <div>
                        <Image
                            className="w-full h-20 object-contain"
                            src={img}
                            alt="img"
                        />
                    </div>

                    <div>
                        <h1 className="py-2 text-xl font-bold text-center text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/60 to-white">
                            Day Four
                        </h1>

                        <p className="my-2 text-sm text-center text-zinc-600">
                            On day four, you are going to learn about rebuttals
                            and how to respond to the different types of
                            patients
                        </p>

                        <Link
                            target="_blank"
                            href="https://drive.google.com/file/d/12kFML6WurEhf0plyzFZ1OAXGbHyUB6dt/view?usp=drive_link"
                            className="flex items-center justify-center w-full gap-2 px-4 py-2 mt-4 text-sm text-center transition-all duration-150 rounded text-zinc-800 hover:text-zinc-100 bg-zinc-200 hover:bg-transparent ring-1 ring-zinc-100"
                        >
                            <span>Learn</span>
                            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                <div className="rounded-md p-4 mt-8 border border-zinc-600 focus-within:border-zinc-100/80 focus-within:ring-0 ">
                    <div>
                        <Image
                            className="w-full h-20 object-contain"
                            src={img}
                            alt="img"
                        />
                    </div>

                    <div>
                        <h1 className="py-2 text-xl font-bold text-center text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/60 to-white">
                            Script
                        </h1>

                        <p className="my-2 text-sm text-center text-zinc-600">
                            Here is the script, you are going to learn about
                            rebuttals and how to respond to the patients
                        </p>

                        <Link
                            target="_blank"
                            href="https://drive.google.com/file/d/1ZMwXwHxxlhIbXXNzuubQ5FCiI5G7JKj6/view?usp=drive_link"
                            className="flex items-center justify-center w-full gap-2 px-4 py-2 mt-4 text-sm text-center transition-all duration-150 rounded text-zinc-800 hover:text-zinc-100 bg-zinc-200 hover:bg-transparent ring-1 ring-zinc-100"
                        >
                            <span>Learn</span>
                            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                <div className="rounded-md p-4 mt-8 border border-zinc-600 focus-within:border-zinc-100/80 focus-within:ring-0 ">
                    <div>
                        <Image
                            className="w-full h-20 object-contain"
                            src={img}
                            alt="img"
                        />
                    </div>

                    <div>
                        <h1 className="py-2 text-xl font-bold text-center text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/60 to-white">
                            Rebuttels
                        </h1>

                        <p className="my-2 text-sm text-center text-zinc-600">
                            You are going to learn about rebuttals and how to
                            respond to the different types of patients
                        </p>

                        <Link
                            target="_blank"
                            href="https://drive.google.com/file/d/12kFML6WurEhf0plyzFZ1OAXGbHyUB6dt/view?usp=drive_link"
                            className="flex items-center justify-center w-full gap-2 px-4 py-2 mt-4 text-sm text-center transition-all duration-150 rounded text-zinc-800 hover:text-zinc-100 bg-zinc-200 hover:bg-transparent ring-1 ring-zinc-100"
                        >
                            <span>Learn</span>
                            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
