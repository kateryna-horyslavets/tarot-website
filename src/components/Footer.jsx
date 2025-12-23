import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { LanguageContext } from '../Language';

export default function Footer() {
    const { language } = useContext(LanguageContext);

    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const translations = {
        ua: {
            home: 'Головна',
            decksTitle: 'Колоди таро',
            waite: 'Райдер-Уейт',
            ceccoli: 'Ніколетта Чекколі',
            manara: 'Манара',
            faq: 'Поширені питання',
            madeBy: 'MADE BY'
        },
        en: {
            home: 'Home',
            decksTitle: 'Tarot Decks',
            waite: 'Rider-Waite',
            ceccoli: 'Nicoletta Ceccoli',
            manara: 'Manara',
            faq: 'FAQ',
            madeBy: 'MADE BY'
        }
    };

    const t = translations[language];

    return (
        <footer className="bg-white text-amber-950 font-montserrat w-full pt-6 pb-6">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-start">

                <div className="flex flex-col items-center md:w-auto mb-8">
                    <img
                        src="/logo.png"
                        className="w-24 h-24 mb-2 object-contain"
                    />
                    <span className="text-xl text-amber-900 uppercase tracking-widest">
                        MyTarotGuide
                    </span>
                </div>

                <div className="flex flex-col md:flex-row gap-10 lg:gap-24 text-center md:text-left mx-auto">
                    <div>
                        <Link
                            to="/"
                            onClick={handleScrollToTop}
                            className="text-l font-bold hover:text-amber-700 transition-colors"
                        >
                            {t.home}
                        </Link>
                    </div>
                    <div>
                        <h3 className="text-l font-bold mb-4 cursor-default">
                            {t.decksTitle}
                        </h3>
                        <ul className="space-y-2 text-l text-amber-900">
                            <li>
                                <Link
                                    to="/waite"
                                    onClick={handleScrollToTop}
                                    className="hover:text-amber-700 transition-colors"
                                >
                                    {t.waite}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/ceccoli"
                                    onClick={handleScrollToTop}
                                    className="hover:text-amber-700 transition-colors"
                                >
                                    {t.ceccoli}
                                </Link>
                            </li>
                            <li>
                                <span className="text-amber-900">
                                    {t.manara}
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Link
                            to="/questions"
                            onClick={handleScrollToTop}
                            className="text-l font-bold hover:text-amber-700 transition-colors"
                        >
                            {t.faq}
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-end w-full md:w-auto mt-10">
                    <div className="text-xl font-bold uppercase tracking-wide">
                        {t.madeBy}
                    </div>
                    <div className="text-l font-bold uppercase tracking-wide">
                        kloqaep
                    </div>
                </div>

            </div>
        </footer>
    );
}