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
            waite: 'Райдера-Уейта',
            moon: 'Божевільного Місяця',
            ceccoli: 'Ніколетти Чекколі',
            manara: 'Манара',
            consequences: 'Наслідків',
            faq: 'Поширені питання',
            madeBy: 'MADE BY'
        },
        en: {
            home: 'Home',
            decksTitle: 'Tarot Decks',
            waite: 'Rider-Waite',
            moon: 'Deviant Moon',
            ceccoli: 'Nicoletta Ceccoli',
            manara: 'Manara',
            consequences: 'After',
            faq: 'FAQ',
            madeBy: 'MADE BY'
        }
    };

    const t = translations[language];

    return (
        <footer className="bg-white text-amber-950 font-montserrat w-full pt-8 pb-8">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-start">

                <div className="flex flex-col items-center md:w-auto mb-6 pt-6">
                    <img
                        src="/logo.png"
                        className="w-24 h-24 mb-2 object-contain"
                    />
                    <span className="text-xl text-amber-900 uppercase tracking-widest pt-2">
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
                                    to="/moon"
                                    onClick={handleScrollToTop}
                                    className="hover:text-amber-700 transition-colors"
                                >
                                    {t.moon}
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
                                <Link
                                    to="/manara"
                                    onClick={handleScrollToTop}
                                    className="hover:text-amber-700 transition-colors"
                                >
                                    {t.manara}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/consequences"
                                    onClick={handleScrollToTop}
                                    className="hover:text-amber-700 transition-colors"
                                >
                                    {t.consequences}
                                </Link>
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

                <div className="flex flex-col items-center md:items-end w-full md:w-auto mt-10 pt-6">
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