import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../Language';

import WAITE_BACKGROUND_IMG from '../assets/images/waite tarot page/waite-page-background.png';
import WAITE_HERO_BACKGROUND_IMG from '../assets/images/waite tarot page/hero-background-waite.png';
import DECK_WAITE_IMG from '../assets/images/waite tarot page/waite-deck.png';
import ARCANA_THE_FOOL from '../assets/images/waite tarot page/00-TheFool.png';
import ARCANA_THE_MAGICIAN from '../assets/images/waite tarot page/01-TheMagician.png';
import ARCANA_THE_HIGH_PRIESTESS from '../assets/images/waite tarot page/02-TheHighPriestess.png';
import ARCANA_THE_EMPRESS from '../assets/images/waite tarot page/03-TheEmpress.png';
import ARCANA_THE_EMPEROR from '../assets/images/waite tarot page/04-TheEmperor.png';
import ARCANA_THE_HIEROPHANT from '../assets/images/waite tarot page/05-TheHierophant.png';
import ARCANA_THE_LOVERS from '../assets/images/waite tarot page/06-TheLovers.png';
import ARCANA_THE_CHARIOT from '../assets/images/waite tarot page/07-TheChariot.png';
import ARCANA_STRENGTH from '../assets/images/waite tarot page/08-Strength.png';
import ARCANA_THE_HERMIT from '../assets/images/waite tarot page/09-TheHermit.png';
import ARCANA_WHEEL_OF_FORTUNE from '../assets/images/waite tarot page/10-WheelOfFortune.png';
import ARCANA_JUSTICE from '../assets/images/waite tarot page/11-Justice.png';
import ARCANA_THE_HANGED_MAN from '../assets/images/waite tarot page/12-TheHangedMan.png';
import ARCANA_DEATH from '../assets/images/waite tarot page/13-Death.png';
import ARCANA_TEMPERANCE from '../assets/images/waite tarot page/14-Temperance.png';
import ARCANA_THE_DEVIL from '../assets/images/waite tarot page/15-TheDevil.png';
import ARCANA_THE_TOWER from '../assets/images/waite tarot page/16-TheTower.png';
import ARCANA_THE_STAR from '../assets/images/waite tarot page/17-TheStar.png';
import ARCANA_THE_MOON from '../assets/images/waite tarot page/18-TheMoon.png';
import ARCANA_THE_SUN from '../assets/images/waite tarot page/19-TheSun.png';
import ARCANA_JUDGEMENT from '../assets/images/waite tarot page/20-Judgement.png';
import ARCANA_THE_WORLD from '../assets/images/waite tarot page/21-TheWorld.png';
import CUPS from '../assets/images/waite tarot page/Cups01.png';
import PENTACLES from '../assets/images/waite tarot page/Pentacles01.png';
import SWORDS from '../assets/images/waite tarot page/Swords01.png';
import WANDS from '../assets/images/waite tarot page/Wands01.png';

export default function WaiteTarotPage() {
    const { language } = useContext(LanguageContext);

    const baseTextStyle = "text-amber-950 font-tarot-elegant text-opacity-90";
    const sectionHeadingStyle = "text-xl md:text-4xl font-normal text-amber-950 font-tarot-elegant";

    const content = {
        ua: {
            title: "ТАРО РАЙДЕРА-ВЕЙТА",
            description: "Колода Вейта — це вікно у класичний окультизм, музей вічних архетипів, що говорить мовою, зрозумілою для мільйонів. Ця колода є обов'язковою для початківців, оскільки більшість навчальних матеріалів базується саме на ній. Вона ідеальна для класичних, універсальних розкладів на будь-яку тему, даючи чіткі, структурні відповіді",
            majorArcanaTitle: "СТАРШІ АРКАНИ",
            suitsTitle: "МОЛОДШІ АРКАНИ",
            majorArcana: [
                { name: "0 - ДУРЕНЬ", img: ARCANA_THE_FOOL },
                { name: "1 - МАГ", img: ARCANA_THE_MAGICIAN },
                { name: "2 - ВЕРХОВНА ЖРИЦЯ", img: ARCANA_THE_HIGH_PRIESTESS },
                { name: "3 - ІМПЕРАТРИЦЯ", img: ARCANA_THE_EMPRESS },
                { name: "4 - ІМПЕРАТОР", img: ARCANA_THE_EMPEROR },
                { name: "5 - ІЄРОФАНТ", img: ARCANA_THE_HIEROPHANT },
                { name: "6 - ЗАКОХАНІ", img: ARCANA_THE_LOVERS },
                { name: "7 - КОЛІСНИЦЯ", img: ARCANA_THE_CHARIOT },
                { name: "8 - СИЛА", img: ARCANA_STRENGTH },
                { name: "9 - ВІДЛЮДНИК", img: ARCANA_THE_HERMIT },
                { name: "10 - КОЛЕСО ФОРТУНИ", img: ARCANA_WHEEL_OF_FORTUNE },
                { name: "11 - СПРАВЕДЛИВІСТЬ", img: ARCANA_JUSTICE },
                { name: "12 - ПОВІШАНИЙ", img: ARCANA_THE_HANGED_MAN },
                { name: "13 - СМЕРТЬ", img: ARCANA_DEATH },
                { name: "14 - ПОМІРНІСТЬ", img: ARCANA_TEMPERANCE },
                { name: "15 - ДИЯВОЛ", img: ARCANA_THE_DEVIL },
                { name: "16 - ВЕЖА", img: ARCANA_THE_TOWER },
                { name: "17 - ЗІРКА", img: ARCANA_THE_STAR },
                { name: "18 - МІСЯЦЬ", img: ARCANA_THE_MOON },
                { name: "19 - СОНЦЕ", img: ARCANA_THE_SUN },
                { name: "20 - СТРАШНИЙ СУД", img: ARCANA_JUDGEMENT },
                { name: "21 - СВІТ", img: ARCANA_THE_WORLD },
            ],
            suits: [
                {
                    name: "ЧАШІ",
                    img: CUPS,
                    path: "/cups",
                    description: "Як стихія води, чаші занурюють нас у світ емоцій та інтуїції, відображаючи всі аспекти любові, дружби, чуттєвості та підсвідомих переживань, що формують наше внутрішнє життя"
                },
                {
                    name: "ПЕНТАКЛІ",
                    img: PENTACLES,
                    path: "/pentacles",
                    description: "Ця земна масть уособлює матеріальні цінності та стабільність, охоплюючи всі питання фінансів, здоров'я, практичності, і нагадує про необхідність цінувати ресурси та дбати про своє фізичне благополуччя"
                },
                {
                    name: "МЕЧІ",
                    img: SWORDS,
                    path: "/swords",
                    description: "Представляючи повітря, мечі є гострим інструментом інтелекту та логіки, що керує комунікацією, необхідністю приймати важкі рішення та боротьбою за істину, часто вказуючи на конфлікти, викликані думками"
                },
                {
                    name: "ЖЕЗЛИ",
                    img: WANDS,
                    path: "/wands",
                    description: "Ця вогняна масть символізує енергію волі та творчості, вона керує нашими амбіціями, кар'єрним зростанням і є іскрою, що запалює нові проєкти та пристрасне бажання рухатися вперед"
                },
            ],
        },
        en: {
            title: "RIDER-WAITE TAROT",
            description: "The Waite deck is a window into classical occultism, a museum of eternal archetypes which speaks a language understood by millions. This deck is essential for beginners as most of the teaching materials are based on it. It is ideal for classic, universal spreads on any topic, giving clear, structured answers.",
            majorArcanaTitle: "MAJOR ARCANA",
            suitsTitle: "MINOR ARCANA",
            majorArcana: [
                { name: "0 - THE FOOL", img: ARCANA_THE_FOOL },
                { name: "1 - THE MAGICIAN", img: ARCANA_THE_MAGICIAN },
                { name: "2 - THE HIGH PRIESTESS", img: ARCANA_THE_HIGH_PRIESTESS },
                { name: "3 - THE EMPRESS", img: ARCANA_THE_EMPRESS },
                { name: "4 - THE EMPEROR", img: ARCANA_THE_EMPEROR },
                { name: "5 - THE HIEROPHANT", img: ARCANA_THE_HIEROPHANT },
                { name: "6 - THE LOVERS", img: ARCANA_THE_LOVERS },
                { name: "7 - THE CHARIOT", img: ARCANA_THE_CHARIOT },
                { name: "8 - STRENGTH", img: ARCANA_STRENGTH },
                { name: "9 - THE HERMIT", img: ARCANA_THE_HERMIT },
                { name: "10 - WHEEL OF FORTUNE", img: ARCANA_WHEEL_OF_FORTUNE },
                { name: "11 - JUSTICE", img: ARCANA_JUSTICE },
                { name: "12 - THE HANGED MAN", img: ARCANA_THE_HANGED_MAN },
                { name: "13 - DEATH", img: ARCANA_DEATH },
                { name: "14 - TEMPERANCE", img: ARCANA_TEMPERANCE },
                { name: "15 - THE DEVIL", img: ARCANA_THE_DEVIL },
                { name: "16 - THE TOWER", img: ARCANA_THE_TOWER },
                { name: "17 - THE STAR", img: ARCANA_THE_STAR },
                { name: "18 - THE MOON", img: ARCANA_THE_MOON },
                { name: "19 - THE SUN", img: ARCANA_THE_SUN },
                { name: "20 - JUDGEMENT", img: ARCANA_JUDGEMENT },
                { name: "21 - THE WORLD", img: ARCANA_THE_WORLD },
            ],
            suits: [
                {
                    name: "CUPS",
                    img: CUPS,
                    path: "/cups",
                    description: "As the water element, cups immerse us in the world of emotions and intuition, reflecting all aspects of love, friendship, sensuality and subconscious experiences that shape our inner life."
                },
                {
                    name: "PENTACLES",
                    img: PENTACLES,
                    path: "/pentacles",
                    description: "This earth suit embodies material values and stability, encompassing all matters of finance, health, practicality and reminds us to appreciate resources and care for our physical well-being."
                },
                {
                    name: "SWORDS",
                    img: SWORDS,
                    path: "/swords",
                    description: "Representing air, swords are a sharp tool of intellect and logic, governing communication, the need to make hard decisions and the struggle for truth, often indicating conflicts caused by thoughts."
                },
                {
                    name: "WANDS",
                    img: WANDS,
                    path: "/wands",
                    description: "This fire suit symbolizes the energy of will and creativity, governing our ambitions, career growth and is the spark that ignites new projects and passionate desire to move forward."
                },
            ],
        }
    };

    const {
        title,
        description,
        majorArcanaTitle,
        suitsTitle,
        majorArcana,
        suits
    } = content[language];

    return (
        <div
            className="font-tarot"
            style={{
                backgroundImage: `url(${WAITE_BACKGROUND_IMG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <section
                className="relative h-[677px] flex items-center text-center"
                style={{
                    backgroundImage: `url(${WAITE_HERO_BACKGROUND_IMG})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'scroll',
                }}
            >
                <div className="z-10 p-4 max-w-4xl mx-auto">
                    <h1 className="text-6xl md:text-7xl font-bold text-white drop-shadow-lg tracking-wide pt-14">
                        {title}
                    </h1>
                </div>
            </section>

            <div className="py-20 max-w-7xl mx-auto px-4">
                <section className="flex flex-col md:flex-row items-center justify-between gap-10 mb-40">
                    <div className="flex justify-center md:w-1/2">
                        <img
                            src={DECK_WAITE_IMG}
                            alt="Waite Tarot Deck"
                            style={{
                                width: '600px',
                                height: '550px',
                                position: 'relative',
                                left: -70,
                            }}
                        />
                    </div>
                    <div className="md:w-1/2 p-6 text-center md:text-right">
                        <p className={`text-3xl leading-relaxed ${baseTextStyle}`}>
                            {description}
                        </p>
                    </div>
                </section>

                <section className="mb-40">
                    <div className="relative flex items-center justify-center w-full my-8">
                        <div className="flex-grow border-t-2 border-amber-950 opacity-50 max-w-[calc(50%-100px)]"></div>
                        <h2 className={`${sectionHeadingStyle} text-center mx-4 whitespace-nowrap`}>
                            {majorArcanaTitle}
                        </h2>
                        <div className="flex-grow border-t-2 border-amber-950 opacity-50 max-w-[calc(50%-100px)]"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-28 gap-y-12 mt-12">
                        {majorArcana.map((card, index) => (
                            <Link
                                to={card.path || "#"} // Added fallback for Major Arcana since they don't have paths yet
                                key={card.name}
                                className={`text-center group transition-transform duration-300 hover:scale-105 ${
                                    index === 20 ? 'md:col-start-2' : ''
                                }`}
                            >
                                <img
                                    src={card.img}
                                    alt={card.name}
                                    className="w-full rounded-lg shadow-lg"
                                />
                                <p className="mt-3 text-sm md:text-base text-amber-950 font-tarot-elegant">
                                    {card.name}
                                </p>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="mt-20 mb-20">
                    <div className="relative flex items-center justify-center w-full my-8">
                        <div className="flex-grow border-t-2 border-amber-950 opacity-50 max-w-[calc(50%-100px)]"></div>
                        <h2 className={`${sectionHeadingStyle} text-center mx-4 whitespace-nowrap`}>
                            {suitsTitle}
                        </h2>
                        <div className="flex-grow border-t-2 border-amber-950 opacity-50 max-w-[calc(50%-100px)]"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
                        {suits.map((suit) => (
                            <Link
                                to={suit.path}
                                key={suit.name}
                                className="group block text-center transition-all duration-300 transform hover:scale-105 relative p-6 rounded-xl"
                            >
                                <div className="absolute inset-0 rounded-3xl bg-white/60 opacity-0 group-hover:opacity-100
                                transition-opacity duration-300 z-0 group-hover:shadow-xl"></div>
                                <img
                                    src={suit.img}
                                    alt={suit.name}
                                    className="relative z-10 max-w-full max-h-full object-contain rounded-md transition-transform duration-300 mx-auto"
                                />
                                <p className="mt-4 text-lg text-amber-950 font-normal group-hover:text-amber-800 leading-tight relative z-10">
                                    {suit.name}
                                </p>
                                <div className="h-32 relative z-10">
                                    <p className="mt-2 px-1 text-sm text-amber-950 font-tarot-elegant opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        {suit.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}