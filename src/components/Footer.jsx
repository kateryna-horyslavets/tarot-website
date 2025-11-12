import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-amber-950 text-white shadow-inner pt-8 pb-4 font-tarot w-full m-0 p-0">
            <div className="flex flex-col items-center border-b border-amber-900 pb-6 px-0 w-full">
                <div className="text-center text-2xl font-tarot text-white">
                    MADE BY:
                </div>
                <div className="text-center text-xl font-tarot text-white">
                    KLOQAEP
                </div>
            </div>
            <div className="text-center text-xs text-neutral-50 pt-3">
                &copy; {currentYear} MyTarotGuide. Усі права захищені.
            </div>
        </footer>
    );
}
