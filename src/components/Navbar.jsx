import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const mainNavItems = [
    { name: 'Головна', path: '/' },
];

// Define the deck links for the dropdown
const deckItems = [
    { name: 'Таро Уейта', path: '/tarots/waite' },
    { name: 'Таро Ніколетти Чекколі', path: '/tarots/ceccoli' },
];

const LOGO_ICON_PATH = '/logo.png';

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Removed font-tarot from here, as it will be applied to the parent <nav>
    const getLinkClasses = ({ isActive }) =>
        `py-2 px-3 transition-colors duration-200 text-lg font-normal whitespace-nowrap 
         md:p-0 ml-6
         ${
            isActive
                ? 'text-amber-800'
                : 'text-stone-700 hover:text-amber-800'
        }`;

    const handleLinkClick = () => {
        setIsDropdownOpen(false);
    };

    return (
        // *** FONT APPLIED HERE: font-tarot ensures all children inherit the font ***
        <nav className="bg-white border-b border-t border-gray-200 font-tarot">
            <div className="max-w-screen-2xl flex items-center justify-between mx-auto h-20 px-8">

                <NavLink to="/" className="flex items-center space-x-4">
                    <img
                        src={LOGO_ICON_PATH}
                        alt="MyTarotGuide Logo"
                        className="h-12 w-12"
                    />

                    {/* FONT is now inherited, removed redundant font-tarot class */}
                    <span className="self-center text-3xl font-normal whitespace-nowrap text-amber-900 tracking-wider">
                        MyTarotGuide
                    </span>
                </NavLink>

                <div className="flex items-center">

                    <ul className="flex items-center">

                        {/* Main Links (inherits font) */}
                        {mainNavItems.map((item) => (
                            <li key={item.name}>
                                <NavLink
                                    to={item.path}
                                    className={getLinkClasses}
                                    onClick={handleLinkClick}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}

                        <li className="relative ml-6">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                // FONT is now inherited, removed redundant font-tarot class
                                className={`flex items-center text-lg font-normal text-stone-700 hover:text-amber-800 transition-colors duration-200`}
                            >
                                Колоди таро
                                <svg className={`w-2 h-2 ml-2 transform transition-transform duration-200 text-stone-500 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute z-20 w-48 font-normal bg-white rounded-lg shadow-lg border border-gray-100 mt-2 right-0">
                                    <ul className="py-2 text-sm text-stone-700">
                                        {deckItems.map((item) => (
                                            <li key={item.name}>
                                                <Link
                                                    to={item.path}
                                                    // FONT is now inherited, removed redundant font-tarot class
                                                    className="block px-4 py-2 hover:bg-gray-50 hover:text-amber-800"
                                                    onClick={handleLinkClick}
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
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
                                Поширені питання
                            </NavLink>
                        </li>
                    </ul>

                    {/* FONT is now inherited, removed redundant font-tarot class */}
                    <button className="bg-amber-950 text-white text-lg font-normal h-10 w-12 flex items-center justify-center rounded-lg shadow-md hover:bg-amber-900 transition-colors duration-200 ml-12">
                        UA
                    </button>
                </div>
            </div>
        </nav>
    );
}