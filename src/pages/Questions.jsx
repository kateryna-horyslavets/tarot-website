import React, { useState, useContext } from 'react';
import QUESTIONS_BACKGROUND_IMG from '../assets/images/questions page/questions-page-background.png';
import QUESTIONS_HERO_BACKGROUND_IMG from '../assets/images/questions page/hero-background-questions.png';
import { LanguageContext } from '../Language';

export default function Questions() {
    const { language } = useContext(LanguageContext);
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const content = {
        ua: [
            {
                title: "Яку колоду мені обрати для початку?",
                answer:
                    "Класика — найкращий вибір. Рекомендується почати з колоди Райдера-Вейта або її варіацій. Вона є основою для більшості сучасних колод, має чітку символіку, і про неї найбільше навчальних матеріалів.",
            },
            {
                title: "Чи потрібно мені запам'ятовувати всі 78 значень карт напам'ять?",
                answer:
                    "Ні, не потрібно. Сфокусуйтеся на розумінні архетипів та елементів. Запам'ятовування ключових слів (5-10 на карту) — гарний старт, але головне — відчути історію карти та як вона взаємодіє з питанням. Дозвольте своїй інтуїції говорити.",
            },
            {
                title: "Чи можна ворожити на таро самому собі?",
                answer:
                    "Можна і потрібно! Читання для себе — найкращий спосіб навчитися, практикуватися та будувати зв'язок із колодою. Результат може бути трохи «забарвлений» вашими бажаннями, тому формулюйте питання максимально об'єктивно і практикуйте відсторонене тлумачення.",
            },
            {
                title: "Як часто можна робити розклади на одне й те саме питання?",
                answer:
                    "Бажано не частіше ніж раз на кілька днів. Дайте ситуації час проявитися. Якщо робити один і той самий розклад надто часто, карти лише відображатимуть ваші емоції, а не реальну динаміку подій.",
            },
            {
                title: "Як правильно поставити питання, щоб отримати чітку відповідь?",
                answer:
                    "Формулюйте питання ясно і конкретно. Уникайте «так/ні» запитів — замість цього запитуйте «що мені потрібно знати про...», «який потенціал ситуації...». Це допоможе отримати глибше й корисніше тлумачення.",
            },
        ],
        en: [
            {
                title: "Which deck should I choose to start with?",
                answer:
                    "Classics are the best choice. It is recommended to start with the Rider-Waite deck or its variations. It forms the basis for most modern decks, has clear symbolism and almost all learning materials are about this deck.",
            },
            {
                title: "Do I need to memorize all 78 card meanings by heart?",
                answer:
                    "No, you don’t need to. Focus on understanding archetypes and elements. Memorizing key words (5-10 per card) is a good start, but the main thing is to feel the story of the card and how it interacts with the question. Let your intuition speak.",
            },
            {
                title: "Can I do tarot readings for myself?",
                answer:
                    "Yes, and you should! Reading for yourself is the best way to learn, practice, and build a connection with the deck. The result may be slightly 'colored' by your desires, so formulate questions as objectively as possible and practice detached interpretation.",
            },
            {
                title: "How often can I do readings on the same question?",
                answer:
                    "Preferably no more than once every few days. Give some time for the situation to unfold. Doing the same spread too often will just reflect your emotions, not the real dynamics of events.",
            },
            {
                title: "How to correctly ask a question to get a clear answer?",
                answer:
                    "Formulate questions clearly and specifically. Avoid yes/no questions — instead ask 'what do I need to know about...', 'what is the potential of the situation...'. This will help you to get a deeper and more useful interpretation.",
            },
        ],
    };

    const questions = content[language];

    return (
        <div
            className="font-montserrat"
            style={{
                backgroundImage: `url(${QUESTIONS_BACKGROUND_IMG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <section
                className="relative h-[677px] flex items-center justify-center text-center"
                style={{
                    backgroundImage: `url(${QUESTIONS_HERO_BACKGROUND_IMG})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <h1 className="text-7xl font-bold text-neutral-50 drop-shadow-[2px_2px_4px_rgba(69,26,3,1)] tracking-wide pt-14">
                    {language === 'ua' ? 'ПОШИРЕНІ' : 'FREQUENTLY ASKED'} <br /> {language === 'ua' ? 'ЗАПИТАННЯ' : 'QUESTIONS'}
                </h1>
            </section>

            <div className="py-12 px-4 md:px-12 lg:px-28">
                <div className="max-w-6xl mx-auto space-y-4">
                    {questions.map((q, index) => (
                        <div key={index} className="border-b border-amber-950">
                            <button
                                className="flex justify-between items-center w-full py-5 text-lg md:text-xl font-medium text-amber-950 uppercase hover:text-amber-800 transition-colors"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span>{q.title}</span>
                                <svg
                                    className={`w-4 h-4 transition-transform duration-300 ${
                                        openIndex === index ? '' : 'rotate-180'
                                    }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-500 ${
                                    openIndex === index ? 'max-h-40 py-4' : 'max-h-0'
                                }`}
                            >
                                <p className="text-amber-900 text-base md:text-lg leading-relaxed">
                                    {q.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
