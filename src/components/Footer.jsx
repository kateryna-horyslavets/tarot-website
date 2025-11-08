import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-amber-950 text-white shadow-inner pt-8 pb-4 font-tarot">
            <div className="max-w-screen-xl mx-auto px-8">
                <div className="flex flex-col items-center border-b border-amber-900 pb-6 mb-4">
                    <div className="text-center text-2xl font-bold text-white mb-2">
                        Made by:
                    </div>
                    <div className="text-center text-3xl font-bold text-white">
                        kloqaep
                    </div>
                </div>
                <div className="text-center text-xs text-neutral-50 pt-3">
                    &copy; {currentYear} MyTarotGuide. Усі права захищені.
                </div>

            </div>
        </footer>
    );
}