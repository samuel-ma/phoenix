"use client";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { Title } from "@components/title";
import React from "react";

export default function Test() {
    return (
        <div className="container px-8 mx-auto mt-16 lg:mt-32 ">
            <Title>Test the Skills you have learned...</Title>
            <p className="mt-4 text-sm text-center text-zinc-600">
                Practice the skills you have acquired from this curriculum by
                undergoing a series of tests
            </p>

            <section className="p-20 flex flex-col items-center justify-center gap-2 my-20 text-sm text-center transition-all duration-150 rounded text-zinc-800 hover:text-zinc-100 bg-zinc-200 hover:bg-transparent ring-1 ring-zinc-100">
                <p className="mt-4 text-sm text-center text-zinc-600">
                    404 | Not Found...
                </p>
                <p className="mt-4 text-sm text-center text-zinc-600">
                    Note: Page is still under construction
                </p>
            </section>
        </div>
    );
}
