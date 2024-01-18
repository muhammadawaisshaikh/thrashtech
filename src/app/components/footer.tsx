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
                <div className="lg:px-16 lg:py-24 sm:py-16 sm:px-16 grid lg:grid-cols-3 sm:grid-flow-row gap-4">
                    <div className="hidden lg:block">
                        <Image src={"https://i.ibb.co/SxQDp9Q/logo.png"} alt="Logo" width={300} height={300} />
                    </div>
                    <div className="bg-gray-100 text-gray-800 rounded-lg p-8 relative">
                        <i className="fa-solid fa-phone absolute top-12 right-20 text-7xl text-gray-500"></i>
                        <h5 className="font-extrabold text-lg">
                            Give us a call
                        </h5>
                        <div className="pt-4">
                            <a href="tel:+923312737076">+923312737076</a>
                        </div>
                        <div className="pt-2">
                            <a href="tel:813-722-1099">+1-813-722-1099</a>
                        </div>
                    </div>
                    <div className="bg-gray-100 text-gray-800 rounded-lg p-8 relative">
                        <i className="fa-solid fa-envelope absolute top-12 right-20 text-7xl text-gray-500"></i>
                        <h5 className="font-extrabold text-lg">Send us an email</h5>
                        <div className="pt-4">
                            <a href="mailto:thrashtechinfo@gmail.com">thrashtechinfo@gmail.com</a>
                        </div>
                        <div className="pt-2">
                            <a href="mailto:greg@giraphixcreative.com">greg@giraphixcreative.com</a>
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