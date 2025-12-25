import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LanguageContext } from '../Language';

import ACE_WANDS from '../assets/images/wands page/Wands01.png';
import WANDS_2 from '../assets/images/wands page/Wands02.png';
import WANDS_3 from '../assets/images/wands page/Wands03.png';
import WANDS_4 from '../assets/images/wands page/Wands04.png';
import WANDS_5 from '../assets/images/wands page/Wands05.png';
import WANDS_6 from '../assets/images/wands page/Wands06.png';
import WANDS_7 from '../assets/images/wands page/Wands07.png';
import WANDS_8 from '../assets/images/wands page/Wands08.png';
import WANDS_9 from '../assets/images/wands page/Wands09.png';
import WANDS_10 from '../assets/images/wands page/Wands10.png';
import PAGE_WANDS from '../assets/images/wands page/Wands11.png';
import KNIGHT_WANDS from '../assets/images/wands page/Wands12.png';
import QUEEN_WANDS from '../assets/images/wands page/Wands13.png';
import KING_WANDS from '../assets/images/wands page/Wands14.png';
import GROUP_WANDS from '../assets/images/wands page/Group_wands.png';
import WANDS_BACKGROUND_IMG from '../assets/images/wands page/wands_background.png';
import WANDS_HERO_BACKGROUND_IMG from '../assets/images/wands page/wands_hero.png';

export default function Wands() {
    const { language } = useContext(LanguageContext);
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, [hash]);

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.pushState(null, null, `#${targetId}`);
        }
    };

    const baseTextStyle = "text-amber-950 font-montserrat text-opacity-90";
    const sectionHeadingStyle = "text-xl md:text-5xl font-bold text-neutral-50 drop-shadow-[2px_2px_4px_rgba(69,26,3,1)] font-montserrat";

    const renderFormattedText = (text) => {
        return text.split('\n').map((line, index) => {
            if (!line.trim()) return <br key={index} className="block my-2" />;

            const splitIndex = line.indexOf(':');
            if (splitIndex !== -1) {
                const title = line.substring(0, splitIndex + 1);
                const content = line.substring(splitIndex + 1);
                return (
                    <span key={index} className="block mb-2">
                        <strong className="font-bold text-amber-950">{title}</strong>{content}
                    </span>
                );
            }
            return <span key={index} className="block mb-2">{line}</span>;
        });
    };

    const content = {
        ua: {
            title: "ЖЕЗЛИ",
            defaultCards: "ПЕРЕЛІК КАРТ",
            courtiersCards: "ПРИДВОРНІ",
            meaning: "ЗНАЧЕННЯ КАРТ",
            defaultWands: [
                {name: "TУЗ ЖЕЗЛІВ",
                    img: ACE_WANDS,
                    text: "Основне значення: новий початок, натхнення, спалах енергії, життєва сила, потенціал, нове підприємство.\n" +
                        "\n" +
                        "Символізм: рука, що виходить із хмари, тримає зелений жезл з листям. Це символ творчої сили та народження ідеї.\n" +
                        "\n" +
                        "Кохання: нова пристрасть, початок дуже динамічних стосунків. Відновлення вогню у старому союзі. Стосунки, сповнені енергії та ініціативи.\n" +
                        "\n" +
                        "Кар'єра: запуск нового проєкту, інноваційна ідея, отримання натхнення для роботи. Шанс почати власну справу або взяти на себе лідерство.\n" +
                        "\n" +
                        "Порада: використовуйте свій приплив енергії та натхнення. Не бійтеся братися за нове."},
                {name: "2 ЖЕЗЛІВ",
                    img: WANDS_2,
                    text: "Основне значення: планування, сміливі плани, майбутні рішення, прогрес, очікування результатів.\n" +
                        "\n" +
                        "Символізм: людина стоїть на вершині, тримаючи один жезл, і дивиться на світ, який знаходиться перед нею. Другий жезл закріплений. Символ володіння ситуацією та стратегічного бачення.\n" +
                        "\n" +
                        "Кохання: планування спільного майбутнього. Стосунки, що стоять на порозі важливого рішення щодо їхнього розвитку.\n" +
                        "\n" +
                        "Кар'єра: розробка глобальної стратегії, планування експансії, міжнародні проєкти. Оцінка свого прогресу та планування наступного кроку.\n" +
                        "\n" +
                        "Порада: оцініть свої ресурси і встановіть цілі. Переходьте від ідеї до конкретного плану дій."},
                {name: "3 ЖЕЗЛІВ",
                    img: WANDS_3,
                    text: "Основне значення: експансія, довгострокове бачення, партнерство, перші позитивні результати зусиль, завчасне очікування успіху.\n" +
                        "\n" +
                        "Символізм: людина стоїть на пагорбі, спостерігаючи за кораблями, що прибувають з товарами, спираючись на три жезли. Це символізує отримання перших плодів інвестицій та планування на майбутнє.\n" +
                        "\n" +
                        "Кохання: зростання стосунків та почуттів. Партнерство, яке розширює світогляд (можливо, через спільні подорожі).\n" +
                        "\n" +
                        "Кар'єра: успішне розширення бізнесу, вдале партнерство, міжнародні зв'язки. Початок отримання прибутку від попередніх зусиль.\n" +
                        "\n" +
                        "Порада: дивіться далеко вперед. Дозвольте своїм амбіціям вести Вас. Співпрацюйте і не бійтеся виходити за межі звичного."},
                {name: "4 ЖЕЗЛІВ",
                    img: WANDS_4,
                    text: "Основне значення: свято, гармонія, стабільність, повернення додому, задоволення, завершення етапу.\n" +
                        "\n" +
                        "Символізм: щаслива пара стоїть під навісом із квітів та чотирьох жезлів, вітаючи когось. Це символ безпеки, дому та спільного тріумфу.\n" +
                        "\n" +
                        "Кохання: весілля, заручини, святкування річниці. Створення міцного сімейного вогнища, гармонія та стабільність у домашньому житті.\n" +
                        "\n" +
                        "Кар'єра: успішне завершення проєкту, корпоративне свято, святкування успіху. Відчуття стабільності на робочому місці.\n" +
                        "\n" +
                        "Порада: радійте своїм досягненням та цінуйте безпеку та гармонію, які Ви створили. Відсвяткуйте цей успіх."},
                {name: "5 ЖЕЗЛІВ",
                    img: WANDS_5,
                    text: "Основне значення: конкуренція, суперечка, дрібний конфлікт, розбіжності, \"битва за ідеї\".\n" +
                        "\n" +
                        "Символізм: п'ять фігур махають жезлами, ніби борються, але без справжньої шкоди. Це символізує здорове суперництво, гру, яка може перерости в серйозний конфлікт.\n" +
                        "\n" +
                        "Кохання: невеликі сварки, розбіжності, що виникають через надлишок енергії або різних поглядів.\n" +
                        "\n" +
                        "Кар'єра: внутрішня конкуренція, командні суперечки щодо найкращого рішення, мозковий штурм. Необхідність боротися за свою ідею.\n" +
                        "\n" +
                        "Порада: не уникайте конкуренції, але переконайтеся, що вона конструктивна."},
                {name: "6 ЖЕЗЛІВ",
                    img: WANDS_6,
                    text: "Основне значення: перемога, визнання, тріумф, успіх, публічне схвалення, хороші новини.\n" +
                        "\n" +
                        "Символізм: людина їде верхи на коні, увінчана лавровим вінком, тоді як натовп вітає її. Жезл, який вона тримає, прикрашений вінком. Це символ успішного завершення місії та заслуженої слави.\n" +
                        "\n" +
                        "Кохання: визнання вашого статусу як пари, успіх у залицяннях, публічне підтвердження любові.\n" +
                        "\n" +
                        "Кар'єра: підвищення, премія, публічне визнання ваших заслуг, успіх проєкту. Вихід на перше місце серед конкурентів.\n" +
                        "\n" +
                        "Порада: насолоджуйтесь своїм успіхом. Прийміть похвалу. Ви заслужили цю перемогу."},
                {name: "7 ЖЕЗЛІВ",
                    img: WANDS_7,
                    text: "Основне значення: захист позицій, хоробрість, виклик, стійкість, боротьба з конкуренцією, перевага.\n" +
                        "\n" +
                        "Символізм: людина стоїть на височині (переважна позиція) і обороняється від шести жезлів, які підіймаються з нижчого рівня. Це символізує захист того, що ви здобули.\n" +
                        "\n" +
                        "Кохання: необхідність боротися за стосунки або відстоювати свою позицію перед партнером чи родичами. Стосунки під зовнішнім тиском.\n" +
                        "\n" +
                        "Кар'єра: жорстка конкуренція, боротьба за клієнта чи посаду. Ви повинні захистити свої ідеї та проєкти.\n" +
                        "\n" +
                        "Порада: стійте на своєму. Ви маєте перевагу, тому не відступайте. Проявіть хоробрість і впевненість."},
                {name: "8 ЖЕЗЛІВ",
                    img: WANDS_8,
                    text: "Основне значення: швидкість, дія, раптові зміни, швидкий розвиток, подорож повітрям. Всі справи прискорюються.\n" +
                        "\n" +
                        "Символізм: вісім жезлів летять повітрям із великою швидкістю, натякаючи на швидке завершення або стрімкий рух.\n" +
                        "\n" +
                        "Кохання: стрімкий розвиток стосунків, швидка закоханість. Несподіване зізнання. Новини, що швидко змінюють ситуацію у стосунках.\n" +
                        "\n" +
                        "Кар'єра: швидке підписання документів, стрімкий розвиток проєкту, термінова відпустка чи відрядження.\n" +
                        "\n" +
                        "Порада: дійте швидко, але контролюйте процес. Прийміть швидкість, яку приносить життя, і готуйтеся до раптових змін."},
                {name: "9 ЖЕЗЛІВ",
                    img: WANDS_9,
                    text: "Основне значення: готовність, оборона, стійкість, відновлення, сила волі. Потреба в останньому зусиллі.\n" +
                        "\n" +
                        "Символізм: поранена, але незламна фігура стоїть, спираючись на жезл, позаду якої стоять вісім інших жезлів. Це символізує загартованість досвідом та готовність витримати останній удар.\n" +
                        "\n" +
                        "Кохання: оборона стосунків від зовнішніх чи внутрішніх проблем. Стосунки після кризи. Недовіра.\n" +
                        "\n" +
                        "Кар'єра: останній етап складного проєкту. Потреба у стійкості перед обличчям перешкод. Ви вже майже досягли мети, але потрібна пильність.\n" +
                        "\n" +
                        "Порада: не здавайтеся! Ви пройшли крізь вогонь і воду. Зберіть останні сили, будьте пильними і готуйтеся до успіху."},
                {name: "10 ЖЕЗЛІВ",
                    img: WANDS_10,
                    text: "Основне значення: тягар, надмірний обов'язок, перевантаження, відповідальність, що пригнічує.\n" +
                        "\n" +
                        "Символізм: людина згинається під вагою десяти жезлів, які вона несе. Символ надмірної відповідальності, яку людина взяла на себе, хоча могла б її розділити.\n" +
                        "\n" +
                        "Кохання: перевантаження стосунками, надмірна відповідальність за партнера чи родину. Відчуття, що \"тягнете все на собі\".\n" +
                        "\n" +
                        "Кар'єра: вигорання, надмірний робочий тиск, проєкт, який став непосильним тягарем. Необхідність делегувати повноваження.\n" +
                        "\n" +
                        "Порада: скиньте частину вантажу. Делегуйте, просіть про допомогу або змініть пріоритети. Не дозволяйте обов'язкам вас задавити."},
            ],
            courtiersWands: [
                {name: "ПАЖ ЖЕЗЛІВ",
                    img: PAGE_WANDS,
                    text: "Особистість: ентузіаст, дослідник, новачок, сміливий, пристрасний, але може бути наївним і нестабільним. Людина з великими ідеями, яка прагне пригод.\n" +
                        "\n" +
                        "Символізм: молода людина стоїть у пустелі, тримаючи жезл, і виглядає натхненною. Символ відкриття нового світу, першої іскри натхнення та ентузіазму.\n" +
                        "\n" +
                        "Значення: новини про подорожі чи роботу. Початок креативного проєкту, отримання натхнення. Заклик до пригод чи навчання.\n" +
                        "\n" +
                        "Порада: дозвольте собі надихатися. Прийміть нові ідеї та сміливо вирушайте у нове підприємство."},
                {name: "РИЦАР ЖЕЗЛІВ",
                    img: KNIGHT_WANDS,
                    text: "Особистість: авантюрист, пристрасний, імпульсивний, рухливий, харизматичний, але непостійний. Людина, яка діє швидко, але може швидко втратити інтерес.\n" +
                        "\n" +
                        "Символізм: лицар мчить вперед на коні, що гарцює, тримаючи жезл. Його рух швидкий та нестримний. Символ швидкої зміни обстановки, поспіху та бездумної дії.\n" +
                        "\n" +
                        "Значення: раптова подорож, швидкий від'їзд. Стрімкий розвиток подій. Залицяльник, сповнений пристрасті, але не зобов'язань.\n" +
                        "\n" +
                        "Порада: дійте швидко, поки ентузіазм не згас. Будьте готові до змін, але намагайтеся планувати свої дії, щоб уникнути хаосу."},
                {name: "КОРОЛЕВА ЖЕЗЛІВ",
                    img: QUEEN_WANDS,
                    text: "Особистість: харизматична, незалежна, впевнена в собі, творча. Жінка, яка є чудовим лідером, надихає оточуючих і любить бути в центрі уваги.\n" +
                        "\n" +
                        "Символізм: королева сидить на троні зі своїм жезлом, оточена символами вогню та левами. Символ впевненості, сили волі та природженого лідерства.\n" +
                        "\n" +
                        "Значення: натхнення, громадське визнання, успіх у творчій діяльності. Допомога чи порада від сильної, харизматичної жінки.\n" +
                        "\n" +
                        "Порада: виявляйте впевненість і використовуйте свою харизму. Надихайте інших і йдіть до своєї мети, незважаючи на перешкоди."},
                {name: "КОРОЛЬ ЖЕЗЛІВ",
                    img: KING_WANDS,
                    text: "Особистість: лідер, підприємець, візіонер, авторитетний, чесний і мудрий. Чоловік, який є втіленням креативної сили та управління великими проєктами.\n" +
                        "\n" +
                        "Символізм: король сидить на троні, тримаючи жезл, його одяг прикрашений саламандрами та левами (символами вогню та сили). Це символізує зрілу творчу владу та управління ініціативами.\n" +
                        "\n" +
                        "Значення: успішне управління великим бізнесом, стратегічний розвиток, досягнення лідерства. Мудра порада від впливового та досвідченого чоловіка.\n" +
                        "\n" +
                        "Порада: дійте як лідер та візіонер. Використовуйте свій досвід для реалізації сміливих, інноваційних ідей та керування людьми."},
            ],
        },

        en: {
            title: "WANDS",
            defaultCards: "LIST OF CARDS",
            courtiersCards: "COURTIERS",
            meaning: "CARDS MEANING",
            defaultWands: [
                {name: "ACE OF WANDS",
                    img: ACE_WANDS,
                    text: "Main meaning: new beginning, inspiration, burst of energy, vitality, potential, new venture.\n" +
                        "\n" +
                        "Symbolism: a hand emerging from a cloud holds a green wand with leaves. This is a symbol of creative power and the birth of an idea.\n" +
                        "\n" +
                        "Love: new passion, the beginning of a very dynamic relationship. Renewing the fire in an old union. Relationships full of energy and initiative.\n" +
                        "\n" +
                        "Career: launching a new project, an innovative idea, getting inspiration for work. A chance to start your own business or take on leadership.\n" +
                        "\n" +
                        "Advice: use your surge of energy and inspiration. Don't be afraid to take on new things."},
                {name: "2 WANDS",
                    img: WANDS_2,
                    text: "Main meaning: planning, bold plans, future decisions, progress, expectation of results.\n" +
                        "\n" +
                        "Symbolism: a person stands on top, holding one wand, and looks at the world in front of him. The second wand is fixed. A symbol of mastery of the situation and strategic vision.\n" +
                        "\n" +
                        "Love: planning a joint future. Relationships on the verge of an important decision regarding their development.\n" +
                        "\n" +
                        "Career: developing a global strategy, planning expansion, international projects. Evaluating your progress and planning the next step.\n" +
                        "\n" +
                        "Tip: assess your resources and set goals. Go from an idea to a concrete action plan."},
                {name: "3 WANDS",
                    img: WANDS_3,
                    text: "Main meaning: expansion, long-term vision, partnership, first positive results of efforts, early expectation of success.\n" +
                        "\n" +
                        "Symbolism: a person stands on a hill, watching ships arriving with goods, leaning on the three of wands. This symbolizes receiving the first fruits of investments and planning for the future.\n" +
                        "\n" +
                        "Love: growth of relationships and feelings. Partnership that broadens the worldview (possibly through joint travel).\n" +
                        "\n" +
                        "Career: successful business expansion, successful partnership, international connections. Beginning to profit from previous efforts.\n" +
                        "\n" +
                        "Advice: look far ahead. Let your ambitions guide you. Collaborate and do not be afraid to go beyond the usual."},
                {name: "4 WANDS",
                    img: WANDS_4,
                    text: "Main meaning: celebration, harmony, stability, homecoming, satisfaction, completion of a stage.\n" +
                        "\n" +
                        "Symbolism: a happy couple stands under a canopy of flowers and the Four of Wands, welcoming someone. This is a symbol of security, home, and joint triumph.\n" +
                        "\n" +
                        "Love: wedding, engagement, anniversary celebration. Creating a strong family hearth, harmony and stability in home life.\n" +
                        "\n" +
                        "Career: successful completion of a project, corporate holiday, celebration of success. Feeling of stability in the workplace.\n" +
                        "\n" +
                        "Tip: rejoice in your achievements and appreciate the security and harmony you have created. Celebrate this success."},
                {name: "5 WANDS",
                    img: WANDS_5,
                    text: "Main meaning: competition, argument, petty conflict, disagreement, \"battle for ideas\".\n" +
                        "\n" +
                        "Symbolism: five figures waving their wands as if fighting, but without any real harm. This symbolizes healthy rivalry, a game that can escalate into a serious conflict.\n" +
                        "\n" +
                        "Love: small quarrels, disagreements arising from excess energy or different views.\n" +
                        "\n" +
                        "Career: internal competition, team arguments about the best solution, brainstorming. The need to fight for your idea.\n" +
                        "\n" +
                        "Tip: don't avoid competition, but make sure it is constructive."},
                {name: "6 WANDS",
                    img: WANDS_6,
                    text: "Main meaning: victory, recognition, triumph, success, public approval, good news.\n" +
                        "\n" +
                        "Symbolism: a person rides on horseback, crowned with a laurel wreath, while a crowd cheers her on. The staff she holds is decorated with a wreath. This is a symbol of the successful completion of a mission and well-deserved glory.\n" +
                        "\n" +
                        "Love: recognition of your status as a couple, success in courtship, public confirmation of love.\n" +
                        "\n" +
                        "Career: promotion, bonus, public recognition of your merits, success of a project. Coming out on top among competitors.\n" +
                        "\n" +
                        "Advice: enjoy your success. Accept the praise. You deserve this victory."},
                {name: "7 WANDS",
                    img: WANDS_7,
                    text: "Main meaning: defense of positions, courage, challenge, resilience, fighting competition, superiority.\n" +
                        "\n" +
                        "Symbolism: a person stands on high ground (a superior position) and defends himself from the Six of Wands rising from a lower level. This symbolizes the defense of what you have gained.\n" +
                        "\n" +
                        "Love: the need to fight for a relationship or defend your position in front of a partner or relatives. Relationships under external pressure.\n" +
                        "\n" +
                        "Career: fierce competition, the fight for a client or position. You must defend your ideas and projects.\n" +
                        "\n" +
                        "Advice: stand your ground. You have the advantage, so do not retreat. Show courage and confidence."},
                {name: "8 WANDS",
                    img: WANDS_8,
                    text: "Main meaning: speed, action, sudden changes, rapid development, air travel. All things accelerate.\n" +
                        "\n" +
                        "Symbolism: The Eight of Wands flies through the air at high speed, hinting at a quick completion or rapid movement.\n" +
                        "\n" +
                        "Love: rapid development of relationships, rapid love. Unexpected confession. News that quickly changes the situation in relationships.\n" +
                        "\n" +
                        "Career: rapid signing of documents, rapid development of a project, urgent vacation or business trip.\n" +
                        "\n" +
                        "Advice: act quickly, but control the process. Accept the speed that life brings and prepare for sudden changes."},
                {name: "9 WANDS",
                    img: WANDS_9,
                    text: "Main meaning: readiness, defense, resilience, recovery, willpower. The need for a last-ditch effort.\n" +
                        "\n" +
                        "Symbolism: A wounded but unbreakable figure stands leaning on a wand, behind which stand eight other wands. This symbolizes being tempered by experience and being ready to withstand the final blow.\n" +
                        "\n" +
                        "Love: defending a relationship from external or internal problems. Relationships after a crisis. Mistrust.\n" +
                        "\n" +
                        "Career: the final stage of a difficult project. The need for resilience in the face of obstacles. You are almost there, but vigilance is needed.\n" +
                        "\n" +
                        "Advice: Don't give up! You have been through fire and water. Gather your last strength, be vigilant and prepare for success."},
                {name: "10 WANDS",
                    img: WANDS_10,
                    text: "Main meaning: burden, excessive duty, overload, responsibility that oppresses.\n" +
                        "\n" +
                        "Symbolism: a person bends under the weight of the Ten of Wands that he carries. A symbol of excessive responsibility that a person has taken on, although he could share it.\n" +
                        "\n" +
                        "Love: relationship overload, excessive responsibility for a partner or family. Feeling like you are \"carrying everything on yourself\".\n" +
                        "\n" +
                        "Career: burnout, excessive work pressure, a project that has become an unbearable burden. The need to delegate authority.\n" +
                        "\n" +
                        "Advice: shed some of the load. Delegate, ask for help or change priorities. Don't let responsibilities crush you."},
            ],
            courtiersWands: [
                {name: "PAGE OF WANDS",
                    img: PAGE_WANDS,
                    text: "Personality: Enthusiast, explorer, beginner, bold, passionate, but can be naive and unstable. A person with big ideas, who seeks adventure.\n" +
                        "\n" +
                        "Symbolism: A young man standing in the desert, holding a staff, looking inspired. Symbol of discovering a new world, the first spark of inspiration and enthusiasm.\n" +
                        "\n" +
                        "Meaning: News about travel or work. Starting a creative project, getting inspired. A call to adventure or learning.\n" +
                        "\n" +
                        "Advice: Allow yourself to be inspired. Embrace new ideas and boldly embark on a new venture."},
                {name: "KNIGHT OF WANDS",
                    img: KNIGHT_WANDS,
                    text: "Personality: adventurous, passionate, impulsive, mobile, charismatic, but fickle. A person who acts quickly, but can quickly lose interest.\n" +
                        "\n" +
                        "Symbolism: a knight rushes forward on a prancing horse, holding a scepter. His movement is fast and unstoppable. A symbol of rapid change of scenery, haste and thoughtless action.\n" +
                        "\n" +
                        "Meaning: sudden journey, quick departure. Rapid development of events. A lover, full of passion, but not commitment.\n" +
                        "\n" +
                        "Advice: act quickly, before enthusiasm fades. Be ready for change, but try to plan your actions to avoid chaos."},
                {name: "QUEEN OF WANDS",
                    img: QUEEN_WANDS,
                    text: "Personality: Charismatic, independent, confident, creative. A woman who is a great leader, inspires others and loves to be the center of attention.\n" +
                        "\n" +
                        "Symbolism: The queen sits on a throne with her scepter, surrounded by symbols of fire and lions. A symbol of confidence, willpower and natural leadership.\n" +
                        "\n" +
                        "Meaning: Inspiration, public recognition, success in creative endeavors. Help or advice from a strong, charismatic woman.\n" +
                        "\n" +
                        "Advice: Show confidence and use your charisma. Inspire others and go towards your goal, despite obstacles."},
                {name: "KING OF WANDS",
                    img: KING_WANDS,
                    text: "Personality: Leader, entrepreneur, visionary, authoritative, honest and wise. A man who embodies creative power and managing large projects.\n" +
                        "\n" +
                        "Symbolism: The king sits on a throne, holding a scepter, his clothes are decorated with salamanders and lions (symbols of fire and power). This symbolizes mature creative power and managing initiatives.\n" +
                        "\n" +
                        "Meaning: Successful management of a large business, strategic development, achieving leadership. Wise advice from an influential and experienced man.\n" +
                        "\n" +
                        "Advice: Act as a leader and visionary. Use your experience to implement bold, innovative ideas and manage people."},
            ],
        }
    }

    const {
        title,
        defaultCards,
        courtiersCards,
        meaning,
        defaultWands,
        courtiersWands,
    } = content[language];

    return(
        <div
            className="font-montserrat"
            style={{
                backgroundImage: `url(${WANDS_BACKGROUND_IMG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <section
                className="relative h-[677px] flex items-center overflow-hidden"
                style={{
                    backgroundImage: `url(${WANDS_HERO_BACKGROUND_IMG})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="z-10 p-4 max-w-4xl ml-10 md:ml-20 text-left">
                    <h1 className="text-6xl md:text-8xl font-bold text-neutral-50 drop-shadow-[2px_2px_4px_rgba(69,26,3,1)] tracking-wide pt-14">
                        {title}
                    </h1>
                </div>

                <div className="absolute right-0 bottom-0 h-[94%] w-full md:w-[55%] overflow-hidden z-0">
                    <img src={GROUP_WANDS} alt="Group Wands" className="w-full object-cover object-bottom-right" />
                </div>
            </section>

            <div className="py-20 max-w-7xl mx-auto px-4">

                <section className="mb-40">
                    <div className="relative flex items-center justify-center w-full my-8">
                        <div className="flex-grow border-t-2 border-amber-950 opacity-50 max-w-[calc(50%-100px)]"></div>
                        <h2 className={`${sectionHeadingStyle} text-center mx-10 whitespace-nowrap`}>
                            {defaultCards}
                        </h2>
                        <div className="flex-grow border-t-2 border-amber-950 opacity-50 max-w-[calc(50%-100px)]"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-28 gap-y-12 mt-12">
                        {defaultWands.map((card, index) => (
                            <a
                                href={`#default-wand-${index}`}
                                key={card.name}
                                onClick={(e) => handleSmoothScroll(e, `default-wand-${index}`)}
                                className={`text-center group transition-transform duration-300 hover:scale-105 ${
                                    index === 8 ? 'md:col-start-2' : ''
                                }`}
                            >
                                <img src={card.img} alt={card.name} className="w-full rounded-lg shadow-lg" />
                                <p className="mt-3 text-sm md:text-base text-amber-950 font-tarot-elegant">
                                    {card.name}
                                </p>
                            </a>
                        ))}
                    </div>
                </section>

                <section className="mb-40">
                    <div className="relative flex items-center justify-center w-full my-8">
                        <div className="flex-grow border-t-2 border-amber-950 opacity-50 max-w-[calc(50%-100px)]"></div>
                        <h2 className={`${sectionHeadingStyle} text-center mx-10 whitespace-nowrap`}>
                            {courtiersCards}
                        </h2>
                        <div className="flex-grow border-t-2 border-amber-950 opacity-50 max-w-[calc(50%-100px)]"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-28 gap-y-12 mt-12">
                        {courtiersWands.map((card, index) => (
                            <a
                                href={`#courtier-wand-${index}`}
                                key={card.name}
                                onClick={(e) => handleSmoothScroll(e, `courtier-wand-${index}`)}
                                className={`text-center group transition-transform duration-300 hover:scale-105`}
                            >
                                <img src={card.img} alt={card.name} className="w-full rounded-lg shadow-lg" />
                                <p className="mt-3 text-sm md:text-base text-amber-950 font-tarot-elegant">
                                    {card.name}
                                </p>
                            </a>
                        ))}
                    </div>
                </section>

                <section className="pb-20">
                    <div className="relative flex items-center justify-center w-full my-8 mb-20">
                        <div className="flex-grow border-t-2 border-amber-950 opacity-50 max-w-[calc(50%-100px)]"></div>
                        <h2 className={`${sectionHeadingStyle} text-center mx-10 whitespace-nowrap`}>
                            {meaning}
                        </h2>
                        <div className="flex-grow border-t-2 border-amber-950 opacity-50 max-w-[calc(50%-100px)]"></div>
                    </div>

                    <div className="flex flex-col gap-24">
                        {defaultWands.map((card, index) => (
                            <div
                                id={`default-wand-${index}`}
                                key={card.name}
                                className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-start scroll-mt-24`}
                            >
                                <div className="w-full md:w-1/4 flex-shrink-0">
                                    <img src={card.img} alt={card.name} className="w-full rounded-lg shadow-2xl" />
                                </div>
                                <div className={`w-full md:w-3/4 ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <h3 className="text-4xl md:text-5xl font-bold text-amber-950 mb-10">{card.name}</h3>
                                    <div className={`${baseTextStyle} text-xl md:text-2xl leading-relaxed`}>
                                        {renderFormattedText(card.text)}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {courtiersWands.map((card, index) => (
                            <div
                                id={`courtier-wand-${index}`}
                                key={card.name}
                                className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-start scroll-mt-24`}
                            >
                                <div className="w-full md:w-1/4 flex-shrink-0">
                                    <img src={card.img} alt={card.name} className="w-full rounded-lg shadow-2xl" />
                                </div>
                                <div className={`w-full md:w-3/4 ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <h3 className="text-4xl md:text-5xl font-bold text-amber-950 mb-10">{card.name}</h3>
                                    <div className={`${baseTextStyle} text-xl md:text-2xl leading-relaxed`}>
                                        {renderFormattedText(card.text)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}