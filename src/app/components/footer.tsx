"use client";

import { useState } from "react";

export default function Footer() {

    const [date, setDate] = useState(new Date().getFullYear());

    return (

        <>
            <div className="bg-gray-800 text-white flex justify-between px-8 py-3">
                <p className="text-center">© {date} Thrashtech. All rights reserved.</p>
                <div className="flex space-x-16">
                    <a href="tel:+923312737076">+923312737076</a>
                    <a href="tel:813-722-1099">813-722-1099</a>
                    <a href="mailto:thrashtechinfo@gmail.com">thrashtechinfo@gmail.com</a>
                    <a href="mailto:greg@giraphixcreative.com">greg@giraphixcreative.com</a>
                </div>
            </div>
        </>
    );
}