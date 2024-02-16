"use client";

import Image from "next/image";
import { useState } from "react";
import Shade from "./shade";

export default function Footer() {
    const [date, setDate] = useState(new Date().getFullYear());

    return (
        <>
            <div className="relative isolate text-white">
                <Shade position="top" />
                <div className="lg:px-16 lg:py-24 sm:py-16 sm:px-16 grid lg:grid-cols-3 sm:grid-flow-row gap-10">
                    <div className="hidden lg:block">
                        <Image src={"https://i.ibb.co/SxQDp9Q/logo.png"} alt="Logo" width={300} height={300} />
                    </div>
                    <div className="bg-gray-900 text-gray-800 rounded-lg p-8 relative text-white hover:bg-gray-800 hover:scale-110 transition ease-in-out delay-150">
                        <i className="fa-regular fa-building absolute top-12 right-20 text-7xl text-gray-500"></i>
                        <h5 className="font-extrabold text-lg flex items-center">
                            <span className="text-3xl">🇬🇧</span>
                            <span className="ml-3">Headquarter</span>
                        </h5>
                        <div className="pt-4">
                            <a>Cruickshank Road Stratford London</a>
                        </div>
                        <div className="pt-2">
                            <a href="tel:+442032896440">+442032896440</a>
                        </div>
                        <div className="pt-2">
                            <a href="mailto:thrashtechinfo@gmail.com">thrashtechinfo@gmail.com</a>
                        </div>
                    </div>
                    <div className="bg-gray-900 text-gray-800 rounded-lg p-8 relative text-white hover:bg-gray-800 hover:scale-110 transition ease-in-out delay-150">
                        <i className="fa-regular fa-building absolute top-12 right-20 text-7xl text-gray-500"></i>
                        <h5 className="font-extrabold text-lg flex items-center">
                            <span className="text-3xl">🇺🇸</span>
                            <span className="ml-3">USA Office</span>
                        </h5>
                        <div className="pt-4">
                            <a>Franklin St UNIT 1006, Tampa, FL</a>
                        </div>
                        <div className="pt-2">
                            <a href="tel:+18134678431">+18134678431</a>
                        </div>
                        <div className="pt-2">
                            <a href="mailto:thrashtechinfo@gmail.com">thrashtechinfo@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 text-white px-8 py-3">
                <p className="text-center">© {date} Thrashtech. All rights reserved.</p>
            </div>
        </>
    );
}