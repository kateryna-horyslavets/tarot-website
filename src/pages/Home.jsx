import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../Language';

import HOMEPAGE_BACKGROUND_IMG from '../assets/images/homepage/homepage-background.png';
import HERO_BACKGROUND_IMG from '../assets/images/homepage/hero-background-home.png';
import INTRO_DECKS_IMG from '../assets/images/homepage/groupdecks.png';
import MAJOR_ARCANA_SPREAD_IMG from '../assets/images/homepage/major-arcana.png';
import MINOR_ARCANA_SPREAD_IMG from '../assets/images/homepage/minor-arcana.png';
import DECK_RIDER_WAITE_IMG from '../assets/images/homepage/waite-deck.png';
import DECK_MAD_MOON_IMG from '../assets/images/homepage/moon-deck.png';
import DECK_CECOLI_IMG from '../assets/images/homepage/ceccoli-deck.png';
import DECK_MANARA_IMG from '../assets/images/homepage/manara-deck.png';
import DECK_CONSEQUENCES_IMG from '../assets/images/homepage/consequences-deck.png';

export default function Home() {
    const { language } = useContext(LanguageContext);

    const baseTextStyle = "text-amber-950 font-tarot-elegant text-opacity-90";
    const sectionHeadingStyle = "text-4xl md:text-6xl font-normal text-amber-950 mb-2 font-tarot-elegant";

    const content = {
        ua: {
            heroTitle: 'ЗНАЙДИ БАЖАНІ ВІДПОВІДІ НА СВОЇ ЗАПИТАТННЯ',
            introText: `Таро - це не просто колода карт, це стародавня, багатогранна система символів та архетипів, яка використовується як інструмент для самопізнання, медитації та передбачення.
            Кожна колода, найчастіше складена з 78 карт, є візуальною розповіддю про людський досвід`,
            section1Title: 'КОЛОДА ТРАДИЦІЙНО ПОДІЛЯЄТЬСЯ НА ДВІ ЧАСТИНИ',
            majorArcanaTitle: 'СТАРШІ АРКАНИ:',
            majorArcanaDesc: `22 карти, які зображують ключові життєві уроки, духовні стадії та універсальні архетипи. Вони часто вказують на значні, доленосні події або глибокі внутрішні зміни.`,
            minorArcanaTitle: 'МОЛОДШІ АРКАНИ:',
            minorArcanaDesc: `56 карт, розділених на чотири масті (Жезли, Кубки, Мечі та Пентаклі), які відповідають чотирьом стихіям та аспектам повсякденного життя. Вони відображають щоденні виклики, думки, емоції та дії.`,
            popularDecksTitle: 'ПОПУЛЯРНІ КОЛОДИ ТАРО',
            popularDecks: [
                {
                    name: "ТАРО РАЙДЕРА-ВЕЙТА",
                    path: "/waite",
                    img: DECK_RIDER_WAITE_IMG,
                    description: "Основа для вивчення Таро, часто використовується вчителями та читачами в усьому світі"
                },
                {
                    name: "ТАРО БОЖЕВІЛЬНОГО МІСЯЦЯ",
                    path: "/moon",
                    img: DECK_MAD_MOON_IMG,
                    description: "Чудово підходить для інтроспекції, дослідження складних емоцій, роботи з підсвідомістю та розкриття прихованих істин"
                },
                {
                    name: "ТАРО НІКОЛЕТТИ ЧЕККОЛІ",
                    path: "/ceccoli",
                    img: DECK_CECOLI_IMG,
                    description: "Ідеальна для тих, хто шукає колоду для дослідження інтуїтивної дивінації, казок, емоційних станів та стосунків. Вона має м'яку, але глибоку енергетику"
                },
                {
                    name: "ТАРО МАНАРА",
                    path: "/manara",
                    img: DECK_MANARA_IMG,
                    description: "Використовується для аналізу стосунків (романтичних, платонічних, сімейних), дослідження сексуальності, прихованих бажань та підсвідомих мотивів, пов'язаних з інтимністю"
                },
                {
                    name: "ТАРО НАСЛІДКІВ",
                    path: "/consequences",
                    img: DECK_CONSEQUENCES_IMG,
                    description: "Відмінно підходить для тих, хто вже знайомий з Таро Райдера-Вейта і хоче отримати свіжий погляд, розвинути свої інтерпретації та побачити 'що далі' у кожній історії"
                },
            ],
        },
        en: {
            heroTitle: 'FIND DESIRED ANSWERS TO YOUR QUESTIONS',
            introText: `Tarot is not just a deck of cards, it is an ancient, multifaceted system of symbols and archetypes used as a tool for self-knowledge, meditation, and divination.
            Each deck, usually consisting of 78 cards, is a visual story of human experience.`,
            section1Title: 'THE DECK IS TRADITIONALLY DIVIDED INTO TWO PARTS',
            majorArcanaTitle: 'MAJOR ARCANA:',
            majorArcanaDesc: `22 cards depicting key life lessons, spiritual stages, and universal archetypes. They often indicate significant, fateful events or deep internal changes.`,
            minorArcanaTitle: 'MINOR ARCANA:',
            minorArcanaDesc: `56 cards divided into four suits (Wands, Cups, Swords, and Pentacles), corresponding to the four elements and aspects of everyday life. They reflect daily challenges, thoughts, emotions, and actions.`,
            popularDecksTitle: 'POPULAR TAROT DECKS',
            popularDecks: [
                {
                    name: "RIDER-WAITE TAROT",
                    path: "/waite",
                    img: DECK_RIDER_WAITE_IMG,
                    description: "The foundation for studying Tarot, widely used by teachers and readers worldwide"
                },
                {
                    name: "MAD MOON TAROT",
                    path: "/moon",
                    img: DECK_MAD_MOON_IMG,
                    description: "Great for introspection, exploring complex emotions, subconscious work, and uncovering hidden truths"
                },
                {
                    name: "NICOLETTA CECCOLI TAROT",
                    path: "/ceccoli",
                    img: DECK_CECOLI_IMG,
                    description: "Ideal for those seeking a deck for intuitive divination, fairy tales, emotional states and relationships. It has a soft but deep energy"
                },
                {
                    name: "MANARA TAROT",
                    path: "/manara",
                    img: DECK_MANARA_IMG,
                    description: "Used for relationship analysis (romantic, platonic, family), exploring sexuality, hidden desires, and subconscious motives related to intimacy"
                },
                {
                    name: "CONSEQUENCES TAROT",
                    path: "/consequences",
                    img: DECK_CONSEQUENCES_IMG,
                    description: "Great for those familiar with Rider-Waite tarot who want a fresh perspective, develop interpretations, and see 'what’s next' in each story"
                },
            ],
        }
    };

    const {
        heroTitle,
        introText,
        section1Title,
        majorArcanaTitle,
        majorArcanaDesc,
        minorArcanaTitle,
        minorArcanaDesc,
        popularDecksTitle,
        popularDecks,
    } = content[language];

    const topRowDecks = popularDecks.slice(0, 3);
    const bottomRowDecks = popularDecks.slice(3);

    return (
        <div
            className="font-tarot"
            style={{
                backgroundImage: `url(${HOMEPAGE_BACKGROUND_IMG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <section
                className="relative h-[677px] flex items-center text-center"
                style={{
                    backgroundImage: `url(${HERO_BACKGROUND_IMG})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'scroll',
                }}
            >
                <div className="z-10 p-4 max-w-4xl mx-auto">
                    <h1 className="text-6xl md:text-7xl font-bold text-white drop-shadow-lg tracking-wide pt-14">
                        {heroTitle}
                    </h1>
                </div>
            </section>

            <div className="py-28 px-4 max-w-7xl mx-auto">
                <section className="flex flex-col md:flex-row items-center justify-between gap-15 mb-40">
                    <div className="md:w-1/2 p-4 text-center md:text-left">
                        <p className={`text-3xl leading-relaxed ${baseTextStyle}`}>
                            {introText}
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src={INTRO_DECKS_IMG}
                            alt="Intro decks"
                        />
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className={`${sectionHeadingStyle} text-center`}>
                        {section1Title}
                    </h2>

                    <div className="flex flex-col md:flex-row justify-center gap-16 mt-6">
                        <div className="md:w-1/2 text-center p-4">
                            <p className={`text-xl mb-2 ${baseTextStyle}`}>
                                {majorArcanaTitle}
                            </p>
                            <p className={`text-xl mb-6 ${baseTextStyle}`}>
                                {majorArcanaDesc}
                            </p>
                            <img
                                src={MAJOR_ARCANA_SPREAD_IMG}
                                alt="Major Arcana"
                                className="mx-auto"
                            />
                        </div>
                        <div className="md:w-1/2 text-center p-4">
                            <p className={`text-xl mb-2 ${baseTextStyle}`}>
                                {minorArcanaTitle}
                            </p>
                            <p className={`text-xl mb-2 ${baseTextStyle}`}>
                                {minorArcanaDesc}
                            </p>
                            <img
                                src={MINOR_ARCANA_SPREAD_IMG}
                                alt="Minor Arcana"
                                className="mx-auto"
                            />
                        </div>
                    </div>
                </section>

                <section className="mb-20 pt-10">
                    <h2 className={`${sectionHeadingStyle} text-center`}>
                        {popularDecksTitle}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 mt-12 max-w-5xl mx-auto">
                        {topRowDecks.map((deck) => (
                            <Link
                                to={deck.path}
                                key={deck.name}
                                className="group block text-center transition-all duration-300 transform hover:scale-105 relative p-4 rounded-xl"
                            >
                                <div className="absolute inset-0 rounded-3xl bg-white/60 opacity-0 group-hover:opacity-100
                                transition-opacity duration-300 z-0 group-hover:shadow-xl"></div>
                                <img
                                    src={deck.img}
                                    alt={deck.name}
                                    className="relative z-10 max-w-full max-h-full object-contain rounded-md transition-transform duration-300 mx-auto"
                                />
                                <p className="mt-4 text-lg text-amber-950 font-normal group-hover:text-amber-800 leading-tight relative z-10">
                                    {deck.name}
                                </p>
                                <div className="h-24 relative z-10">
                                    <p className="mt-2 px-1 text-sm text-amber-950 font-tarot-elegant opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        {deck.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 mt-8 lg:mt-12 max-w-3xl mx-auto">
                        {bottomRowDecks.map((deck) => (
                            <Link
                                to={deck.path}
                                key={deck.name}
                                className="group block text-center transition-all duration-300 transform hover:scale-105 relative p-4 rounded-xl"
                                style={{
                                    boxShadow: 'none',
                                    backgroundColor: 'transparent',
                                }}
                            >
                                <div className="absolute inset-0 rounded-3xl bg-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 group-hover:shadow-xl"></div>
                                <img
                                    src={deck.img}
                                    alt={deck.name}
                                    className="relative z-10 max-w-full max-h-full object-contain rounded-md transition-transform duration-300 mx-auto"
                                />
                                <p className="mt-4 text-lg text-amber-950 font-normal group-hover:text-amber-800 leading-tight relative z-10">
                                    {deck.name}
                                </p>
                                <div className="h-24 relative z-10">
                                    <p className="mt-2 px-1 text-sm text-amber-950 font-tarot-elegant opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        {deck.description}
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
