"use client";

import { useState } from "react";

export default function Footer() {

    const [date, setDate] = useState(new Date().getFullYear());

    return (
        <div className="bg-gray-800 text-white">
            <p className="text-center py-3">© {date} Thrashtech. All rights reserved.</p>
        </div>
    );
  }