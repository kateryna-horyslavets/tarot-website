import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../Language';

import MANARA_BACKGROUND_IMG from '../assets/images/manara tarot page/Manara_in_works_background.png';
import GROUP_MANARA from '../assets/images/manara tarot page/Group_Manara_in_works.png';

export default function ManaraTarotPage() {
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
            style={{ backgroundImage: `url(${MANARA_BACKGROUND_IMG})` }}
        >

            <div className="flex flex-col items-center lg:items-start z-10 max-w-lg text-center lg:text-left pt-20 -ml-8">
                <h1 className="text-7xl font-montserrat font-bold text-red-500 drop-shadow-[4px_3px_0px_rgba(0,0,0,0.2)] pb-8">
                    {t.title}
                </h1>

                <Link
                    to="/"
                    className="px-8 py-3 bg-red-50 text-red-500 font-montserrat font-bold rounded-3xl hover:bg-red-100 drop-shadow-[3px_3px_2px_rgba(0,0,0,0.3)]"
                >
                    {t.button}
                </Link>
            </div>

            <div className="absolute right-0 bottom-0 h-[94%] w-full md:w-[55%] overflow-hidden z-0">
                <img
                    src={GROUP_MANARA}
                    className="w-full h-full object-contain lg:object-cover object-bottom-right"
                />
            </div>
        </div>
    );
};