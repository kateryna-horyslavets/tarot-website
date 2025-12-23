import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../Language';

import NOT_FOUND_BACKGROUND_IMG from '../assets/images/not found/not-found-page-background.png';
import GROUP_NOT_FOUND from '../assets/images/not found/Group_not_found.png';

const NotFound = () => {
    const { language } = useContext(LanguageContext);

    const translations = {
        ua: {
            title: '404 - NOT FOUND',
            subtitle: 'Схоже, карти не показали цей шлях...',
            button: 'Перейти на головну'
        },
        en: {
            title: '404 - NOT FOUND',
            subtitle: 'It seems the cards did not reveal this path...',
            button: 'Back to Home'
        }
    };

    const t = translations[language];

    return (
        <div
            className="h-screen w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-24 overflow-hidden relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${NOT_FOUND_BACKGROUND_IMG})` }}
        >

            <div className="flex flex-col items-center lg:items-start z-10 max-w-lg text-center lg:text-left pt-28">
                <h1 className="text-6xl lg:text-8xl font-montserrat font-bold text-amber-950 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
                    {t.title}
                </h1>

                <h2 className="text-2xl lg:text-3xl font-montserrat font-bold text-amber-900 mt-6 mb-8">
                    {t.subtitle}
                </h2>

                <Link
                    to="/"
                    className="px-8 py-3 bg-amber-100 text-amber-950 font-montserrat font-bold rounded-3xl hover:bg-amber-500/70 transition-colors drop-shadow-[3px_3px_2px_rgba(0,0,0,0.3)]"
                >
                    {t.button}
                </Link>
            </div>

            <div className="absolute right-0 bottom-0 h-[94%] w-full md:w-[55%] overflow-hidden z-0">
                <img
                    src={GROUP_NOT_FOUND}
                    className="w-full h-full object-contain lg:object-cover object-bottom-right"
                />
            </div>
        </div>
    );
};

export default NotFound;