'use client';

import React, { useState, useEffect } from 'react';
import { ITicker } from '../../types/ticker';
import { chips } from '@/utils/mock-data/tickers';

const tickers: ITicker[] = chips;

const getRandomTicker = () => {
    const randomIndex = Math.floor(Math.random() * tickers.length);
    return tickers[randomIndex].typo;
};

const Ticker = () => {
    const [ticker, setTicker] = useState('AI is embedded in everything we do.');
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setTicker(getRandomTicker());
                setVisible(true);
            }, 500);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center">
            <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 ring-1 ring-indigo-500/30 bg-indigo-500/10 text-center">
                <span
                    className={`transition-opacity duration-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-medium ${visible ? 'opacity-100' : 'opacity-0'}`}
                >
                    {ticker}
                </span>
            </div>
        </div>
    );
};

export default Ticker;
