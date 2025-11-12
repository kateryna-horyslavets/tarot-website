import React from 'react';
import { Link } from 'react-router-dom';

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
    const baseTextStyle = "text-amber-950 font-tarot-elegant text-opacity-90";
    const sectionHeadingStyle = "text-xl md:text-5xl font-normal text-amber-950 mb-2 font-tarot-elegant";

    const majorArcana = [
        { name: "0 - ДУРЕНЬ", img: ARCANA_THE_FOOL, path: "/waite/arcana/the-fool" },
        { name: "1 - МАГ", img: ARCANA_THE_MAGICIAN, path: "/waite/arcana/the-magician" },
        { name: "2 - ВЕРХОВНА ЖРИЦЯ", img: ARCANA_THE_HIGH_PRIESTESS, path: "/waite/arcana/the-high-priestess" },
        { name: "3 - ІМПЕРАТРИЦЯ", img: ARCANA_THE_EMPRESS, path: "/waite/arcana/the-empress" },
        { name: "4 - ІМПЕРАТОР", img: ARCANA_THE_EMPEROR, path: "/waite/arcana/the-emperor" },
        { name: "5 - ІЄРОФАНТ", img: ARCANA_THE_HIEROPHANT, path: "/waite/arcana/the-hierophant" },
        { name: "6 - ЗАКОХАНІ", img: ARCANA_THE_LOVERS, path: "/waite/arcana/the-lovers" },
        { name: "7 - КОЛІСНИЦЯ", img: ARCANA_THE_CHARIOT, path: "/waite/arcana/the-chariot" },
        { name: "8 - СИЛА", img: ARCANA_STRENGTH, path: "/waite/arcana/strength" },
        { name: "9 - ВІДЛЮДНИК", img: ARCANA_THE_HERMIT, path: "/waite/arcana/the-hermit" },
        { name: "10 - КОЛЕСО ФОРТУНИ", img: ARCANA_WHEEL_OF_FORTUNE, path: "/waite/arcana/wheel-of-fortune" },
        { name: "11 - СПРАВЕДЛИВІСТЬ", img: ARCANA_JUSTICE, path: "/waite/arcana/justice" },
        { name: "12 - ПОВІШАНИЙ", img: ARCANA_THE_HANGED_MAN, path: "/waite/arcana/the-hanged-man" },
        { name: "13 - СМЕРТЬ", img: ARCANA_DEATH, path: "/waite/arcana/death" },
        { name: "14 - ПОМІРНІСТЬ", img: ARCANA_TEMPERANCE, path: "/waite/arcana/temperance" },
        { name: "15 - ДИЯВОЛ", img: ARCANA_THE_DEVIL, path: "/waite/arcana/the-devil" },
        { name: "16 - ВЕЖА", img: ARCANA_THE_TOWER, path: "/waite/arcana/the-tower" },
        { name: "17 - ЗІРКА", img: ARCANA_THE_STAR, path: "/waite/arcana/the-star" },
        { name: "18 - МІСЯЦЬ", img: ARCANA_THE_MOON, path: "/waite/arcana/the-moon" },
        { name: "19 - СОНЦЕ", img: ARCANA_THE_SUN, path: "/waite/arcana/the-sun" },
        { name: "20 - СТРАШНИЙ СУД", img: ARCANA_JUDGEMENT, path: "/waite/arcana/judgement" },
        { name: "21 - СВІТ", img: ARCANA_THE_WORLD, path: "/waite/arcana/the-world" },
    ];

    const Suits = [
        {
            name: "ЧАШІ",
            path: "/waite/cups",
            img: CUPS,
            description: "Як стихія води, чаші занурюють нас у світ емоцій та інтуїції, відображаючи всі аспекти любові, дружби, чуттєвості та підсвідомих переживань, що формують наше внутрішнє життя"
        },
        {
            name: "ПЕНТАКЛІ",
            path: "/waite/pentacles",
            img: PENTACLES,
            description: "Ця земна масть уособлює матеріальні цінності та стабільність, охоплюючи всі питання фінансів, здоров'я, практичності, і нагадує про необхідність цінувати ресурси та дбати про своє фізичне благополуччя"
        },
        {
            name: "МЕЧІ",
            path: "/waite/swords",
            img: SWORDS,
            description: "Представляючи повітря, мечі є гострим інструментом інтелекту та логіки, що керує комунікацією, необхідністю приймати важкі рішення та боротьбою за істину, часто вказуючи на конфлікти, викликані думками"
        },
        {
            name: "ЖЕЗЛИ",
            path: "/waite/wands",
            img: WANDS,
            description: "Ця вогняна масть символізує енергію волі та творчості, вона керує нашими амбіціями, кар'єрним зростанням і є іскрою, що запалює нові проєкти та пристрасне бажання рухатися вперед"
        },
    ];

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
                        ТАРО РАЙДЕРА-ВЕЙТА
                    </h1>
                </div>
            </section>

            <div className="py-20 max-w-7xl mx-auto px-4">
                <section className="flex flex-col md:flex-row items-center justify-between gap-10 mb-40">
                    <div className="flex justify-center md:w-1/2">
                        <img
                            src={DECK_WAITE_IMG}
                            style={{

                                width: '600px', height: '550px',

                                position: 'relative',

                                left: -70,

                            }}
                        />
                    </div>
                    <div className="md:w-1/2 p-6 text-center md:text-right">
                        <p className={`text-3xl leading-relaxed ${baseTextStyle}`}>
                            Колода Вейта — це вікно у класичний окультизм, музей вічних архетипів, що говорить мовою, зрозумілою для мільйонів. Ця колода є обов'язковою для початківців, оскільки більшість навчальних матеріалів базується саме на ній. Вона ідеальна для класичних, універсальних розкладів на будь-яку тему, даючи чіткі, структурні відповіді
                        </p>
                    </div>
                </section>

                <section className="mb-40">
                    <div className="relative flex items-center justify-center w-full my-8">
                        <div className="flex-grow border-t-2 border-amber-950 opacity-50 max-w-[calc(50%-100px)]"></div>
                        <h2 className={`${sectionHeadingStyle} text-center mx-4 whitespace-nowrap`}>
                            СТАРШІ АРКАНИ
                        </h2>
                        <div className="flex-grow border-t-2 border-amber-950 opacity-50 max-w-[calc(50%-100px)]"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-28 gap-y-12 mt-12">
                        {majorArcana.map((card, index) => (
                            <Link
                                to={card.path}
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
                            МОЛОДШІ АРКАНИ
                        </h2>
                        <div className="flex-grow border-t-2 border-amber-950 opacity-50 max-w-[calc(50%-100px)]"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-x-20 gap-y-12 mt-12 max-w-2xl mx-auto">
                        {Suits.map((suit) => (
                            <Link
                                to={suit.path}
                                key={suit.name}
                                className="group block text-center group transition-all duration-300 transform hover:scale-105 relative p-4 rounded-xl"
                            >
                                <div className="absolute inset-0 rounded-3xl bg-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 group-hover:shadow-xl">
                                </div>
                                <img
                                    src={suit.img}
                                    alt={suit.name}
                                    className="relative z-10 max-w-full max-h-full object-contain rounded-md transition-transform duration-300 mx-auto"
                                />

                                <p className="mt-4 text-lg text-amber-950 font-normal group-hover:text-amber-800 leading-tight relative z-10">
                                    {suit.name}
                                </p>
                                <div className="relative z-10">
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