'use client';

import React, { useState, useEffect } from 'react';
import { ITicker } from '../types/ticker';
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
        <div className='flex justify-center'>
            <div className="lg:w-1/2 relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 text-center">
                <span className={`transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>{ticker}</span>
                <a href="#" className="font-semibold text-dark-600"><span className="absolute inset-0" aria-hidden="true"></span></a>
            </div>
        </div>
    );
};

export default Ticker;
