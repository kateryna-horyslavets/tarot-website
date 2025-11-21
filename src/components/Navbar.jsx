import React, { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { LanguageContext } from '../Language'; // поправ шлях, якщо треба

const LOGO_ICON_PATH = '/logo.png';

export default function Navbar() {
    const { language, toggleLanguage } = useContext(LanguageContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const translations = {
        ua: {
            home: 'ГОЛОВНА',
            decks: 'КОЛОДИ ТАРО',
            waite: 'ТАРО УЕЙТА',
            ceccoli: 'ТАРО НІККОЛЕТИ ЧЕККОЛІ',
            faq: 'ПОШИРЕНІ ПИТАННЯ',
            lang: 'UA',
        },
        en: {
            home: 'HOME',
            decks: 'TAROT DECKS',
            waite: 'RIDER-WAITE TAROT',
            ceccoli: 'NICOLETTA CECCOLI TAROT',
            faq: 'FAQ',
            lang: 'EN',
        },
    };

    const t = translations[language];

    const getLinkClasses = ({ isActive }) =>
        `py-2 px-3 transition-colors duration-200 text-lg font-normal whitespace-nowrap 
         md:p-0 ml-6
         ${isActive ? 'text-amber-800' : 'text-stone-700 hover:text-amber-800'}`;

    const handleLinkClick = () => {
        setIsDropdownOpen(false);
    };

    return (
        <nav className="bg-white border-b border-gray-200 font-tarot fixed top-0 left-0 w-full z-50">
            <div className="flex items-center justify-between h-20 px-4 md:px-6">
                <NavLink to="/" className="flex items-center space-x-4">
                    <img src={LOGO_ICON_PATH} className="h-12 w-12" />
                    <span className="self-center text-3xl font-tarot whitespace-nowrap text-amber-900 tracking-wider">
                        MyTarotGuide
                    </span>
                </NavLink>

                <div className="flex items-center">
                    <ul className="flex items-center">
                        <li>
                            <NavLink
                                to="/"
                                className={getLinkClasses}
                                onClick={handleLinkClick}
                            >
                                {t.home}
                            </NavLink>
                        </li>

                        <li className="relative ml-6">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center text-lg font-normal text-stone-700 hover:text-amber-800 transition-colors duration-200"
                            >
                                {t.decks}
                                <svg
                                    className={`w-2 h-2 ml-2 transform transition-transform duration-200 text-stone-500 ${
                                        isDropdownOpen ? 'rotate-180' : 'rotate-0'
                                    }`}
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute z-20 w-48 font-normal bg-white rounded-lg shadow-lg border border-gray-100 mt-2 right-0">
                                    <ul className="py-2 text-sm text-stone-700">
                                        <li>
                                            <Link
                                                to="/waite"
                                                className="block px-4 py-2 hover:bg-gray-50 hover:text-amber-800"
                                                onClick={handleLinkClick}
                                            >
                                                {t.waite}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/ceccoli"
                                                className="block px-4 py-2 hover:bg-gray-50 hover:text-amber-800"
                                                onClick={handleLinkClick}
                                            >
                                                {t.ceccoli}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>

                        <li>
                            <NavLink
                                to="/questions"
                                className={getLinkClasses}
                                onClick={handleLinkClick}
                            >
                                {t.faq}
                            </NavLink>
                        </li>
                    </ul>
                    <button
                        onClick={toggleLanguage}
                        className="bg-amber-950 text-white text-lg font-normal h-10 w-12 flex items-center justify-center rounded-lg shadow-md hover:bg-amber-900 transition-colors duration-200 ml-12"
                    >
                        {t.lang}
                    </button>
                </div>
            </div>
        </nav>
    );
}
