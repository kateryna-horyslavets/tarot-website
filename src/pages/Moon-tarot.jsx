import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../Language';

import MOON_BACKGROUND_IMG from '../assets/images/moon tarot page/moon_in_works_background.png';
import GROUP_MOON from '../assets/images/moon tarot page/Group_moon_in_works.png';

export default function MoonTarotPage() {
    const { language } = useContext(LanguageContext);

    const translations = {
        ua: {
            title: 'ЦЯ СТОРІНКА ЗНАХОДИТЬСЯ В РОЗРОБЦІ',
            button: 'Перейти на головну'
        },
        en: {
            title: 'THIS PAGE IS IN WORKS',
            button: 'Back to Home'
        }
    };

    const t = translations[language];

    return (
        <div
            className="h-screen w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-24 overflow-hidden relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${MOON_BACKGROUND_IMG})` }}
        >

            <div className="flex flex-col items-center lg:items-start z-10 max-w-lg text-center lg:text-left pt-20 -ml-8">
                <h1 className="text-7xl font-montserrat font-bold text-purple-800 drop-shadow-[4px_3px_0px_rgba(0,0,0,0.2)] pb-8">
                    {t.title}
                </h1>

                <Link
                    to="/"
                    className="px-8 py-3 bg-purple-50 text-amber-950 font-montserrat font-bold rounded-3xl hover:bg-purple-100 drop-shadow-[3px_3px_2px_rgba(0,0,0,0.3)]"
                >
                    {t.button}
                </Link>
            </div>

            <div className="absolute right-0 bottom-0 h-[94%] w-full md:w-[55%] overflow-hidden z-0">
                <img
                    src={GROUP_MOON}
                    className="w-full h-full object-contain lg:object-cover object-bottom-right"
                />
            </div>
        </div>
    );
};