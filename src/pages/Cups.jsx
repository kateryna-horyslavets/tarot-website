import React, {useContext} from 'react';
import { LanguageContext } from '../Language';

import ACE_CUPS from '../assets/images/cups page/Cups01.png';
import CUPS_2 from '../assets/images/cups page/Cups02.png';
import CUPS_3 from '../assets/images/cups page/Cups03.png';
import CUPS_4 from '../assets/images/cups page/Cups04.png';
import CUPS_5 from '../assets/images/cups page/Cups05.png';
import CUPS_6 from '../assets/images/cups page/Cups06.png';
import CUPS_7 from '../assets/images/cups page/Cups07.png';
import CUPS_8 from '../assets/images/cups page/Cups08.png';
import CUPS_9 from '../assets/images/cups page/Cups09.png';
import CUPS_10 from '../assets/images/cups page/Cups10.png';
import PAGE_CUPS from '../assets/images/cups page/Cups11.png';
import KNIGHT_CUPS from '../assets/images/cups page/Cups12.png';
import QUEEN_CUPS from '../assets/images/cups page/Cups13.png';
import KING_CUPS from '../assets/images/cups page/Cups14.png';
import GROUP_CUPS from '../assets/images/cups page/Group_cups.png';
import CUPS_BACKGROUND_IMG from '../assets/images/cups page/cups_background.png';
import CUPS_HERO_BACKGROUND_IMG from '../assets/images/cups page/cups_hero.png';

export default function Cups() {
    const { language } = useContext(LanguageContext);

    const baseTextStyle = "text-amber-950 font-tarot-elegant text-opacity-90";
    const sectionHeadingStyle = "text-xl md:text-5xl font-normal text-amber-950 font-tarot-elegant";

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
            title: "ЧАШІ",
            defaultCards: "ПЕРЕЛІК КАРТ",
            courtiersCards: "ПРИДВОРНІ",
            meaning: "ЗНАЧЕННЯ КАРТ",
            defaultCups: [
                {name: "TУЗ ЧАШ",
                    img: ACE_CUPS,
                    text: "Основне значення: новий початок в емоційній сфері, сильне почуття, любов, співчуття, радість, духовне наповнення, родючість, емоційна повнота.\n" +
                        "\n" +
                        "Символізм: чаша, що переповнюється, часто з голубом або гостею, що омиває її. Це джерело емоцій, духовна благодать, розкриття серця.\n" +
                        "\n" +
                        "Кохання: нова сильна любов, закоханість, душевна близькість, готовність відкрити серце. Глибоке задоволення у стосунках.\n" +
                        "\n" +
                        "Кар'єра: робота, що приносить задоволення, творчий проєкт, гармонія в колективі. Успіх у мистецтві чи психології.\n" +
                        "\n" +
                        "Порада: дозвольте своїм почуттям текти вільно, дійте від чистого серця."},
                {name: "2 ЧАШ",
                    img: CUPS_2,
                    text: "Основне значення: гармонійний союз, партнерство, взаємна любов, примирення, об'єднання, заручини, збалансовані стосунки.\n" +
                        "\n" +
                        "Символізм: чоловік і жінка обмінюються чашами, над якими зображено кадуцей (жезл Гермеса), що символізує гармонію, зцілення та взаємний обмін.\n" +
                        "\n" +
                        "Кохання: заручини, початок серйозних стосунків, пристрасть, що ґрунтується на взаємоповазі, ідеальний романтичний зв'язок.\n" +
                        "\n" +
                        "Кар'єра: успішне ділове партнерство, укладення вигідного контракту, співпраця.\n" +
                        "\n" +
                        "Порада: шукайте рівновагу та взаєморозуміння з партнерами.",},
                {name: "3 ЧАШ",
                    img: CUPS_3,
                    text: "Основне значення: святкування, радість, дружба, зустрічі, успішне завершення, вечірка, підтримка громади або друзів.\n" +
                        "\n" +
                        "Символізм: три жінки підіймають чаші в жесті тосту, святкуючи врожай чи успіх. Це символ спільної радості та достатку.\n" +
                        "\n" +
                        "Кохання: святкування любові, весілля, вагітність, міцні дружні стосунки, тріумф у сімейному житті.\n" +
                        "\n" +
                        "Кар'єра: успішне завершення проєкту, корпоративне свято, визнання заслуг у команді.\n" +
                        "\n" +
                        "Порада: радійте успіхам разом з іншими, дозвольте собі насолоджуватися моментом."},
                {name: "4 ЧАШ",
                    img: CUPS_4,
                    text: "Основне значення: апатія, нудьга, незадоволення тим, що є, перенасичення, відмова від пропозиції, ігнорування можливостей, самопоглинання.\n" +
                        "\n" +
                        "Символізм: людина сидить під деревом, схрестивши руки, і не звертає уваги на чашу, яку їй простягає хмара (дар від Всесвіту), тоді як три чаші стоять перед нею.\n" +
                        "\n" +
                        "Кохання: нудьга у стосунках, прийняття партнера як належне, потреба переоцінити почуття. Можлива відмова від залицянь.\n" +
                        "\n" +
                        "Кар'єра: незадоволення поточною роботою, ігнорування нових можливостей, відчуття, що \"це не те\".\n" +
                        "\n" +
                        "Порада: припиніть зациклюватися на собі; озирніться — можливості прямо перед вами."},
                {name: "5 ЧАШ",
                    img: CUPS_5,
                    text: "Основне значення: втрата, смуток, горе, жаль, зацикленість на минулому, розчарування у стосунках. Карта часто вказує, що хоча щось втрачено, ще не все пропало (дві чаші стоять позаду).\n" +
                        "\n" +
                        "Символізм: фігура, загорнута в плащ, оплакує три перекинуті чаші, не помічаючи двох чаш, що стоять позаду.\n" +
                        "\n" +
                        "Кохання: розбите серце, розлучення, жаль про минулі стосунки чи вчинки. Застрягання на втраті, а не на тому, що ще залишилося.\n" +
                        "\n" +
                        "Кар'єра: проєкт провалився, бізнес зазнав збитків, відчуття невдачі.\n" +
                        "\n" +
                        "Порада: змініть фокус! Перестаньте оплакувати втрачене і почніть цінувати те, що зберегли."},
                {name: "6 ЧАШ",
                    img: CUPS_6,
                    text: "Основне значення: спогади, ностальгія, дитинство, минуле, невинність, подарунки з минулого, безпека, повернення старих знайомих.\n" +
                        "\n" +
                        "Символізм: діти обмінюються квітами чи напоями у чашах. Асоціація з будинком, безпекою та ідилією минулого.\n" +
                        "\n" +
                        "Кохання: повернення колишнього партнера чи друга, відновлення старих стосунків, ностальгічний роман. Гармонія та безпека у сімейному житті.\n" +
                        "\n" +
                        "Кар'єра: повернення до старої роботи чи хобі, робота з дітьми, використання старих методів.\n" +
                        "\n" +
                        "Порада: пам'ятайте про уроки минулого, але не дозволяйте ностальгії заблокувати ваше сьогодення."},
                {name: "7 ЧАШ",
                    img: CUPS_7,
                    text: "Основне значення: ілюзії, мрії, фантазії, безліч виборів, плутанина, нереалістичні очікування, \"повітряні замки\", необхідність зосередитися на реальності.\n" +
                        "\n" +
                        "Символізм: людина дивиться на сім чаш, з яких виходять фантастичні образи (скарби, змії, обличчя), що символізує вибір між численними, часто нереалістичними, опціями.\n" +
                        "\n" +
                        "Кохання: вибір між кількома партнерами, ідеалізація кохання, фантазії замість реальних стосунків.\n" +
                        "\n" +
                        "Кар'єра: багато пропозицій, що збивають з пантелику, нечіткі цілі, планування без дії.\n" +
                        "\n" +
                        "Порада: приземліться! Виберіть одну, найбільш реалістичну мету, і відмовтеся від ілюзій."},
                {name: "8 ЧАШ",
                    img: CUPS_8,
                    text: "Основне значення: відхід від ситуації чи стосунків, які більше не приносять задоволення, пошук глибинного сенсу, залишення матеріального заради духовного, подорож.\n" +
                        "\n" +
                        "Символізм: фігура йде від восьми розставлених чаш у ніч чи в гори. Чаші залишені, бо вони більше не задовольняють на духовному рівні.\n" +
                        "\n" +
                        "Кохання: відхід від стосунків, які вичерпали себе емоційно, пошук глибшого зв'язку чи сенсу поза межами партнера.\n" +
                        "\n" +
                        "Кар'єра: зміна професії, звільнення заради пошуку більш значущої роботи, довга подорож.\n" +
                        "\n" +
                        "Порада: ви повинні залишити те, що не служить вашому найвищому благу, щоб знайти справжнє щастя."},
                {name: "9 ЧАШ",
                    img: CUPS_9,
                    text: "Основне значення: здійснення бажань, емоційне задоволення, розкіш, впевненість, достаток, щастя, \"карта бажання\".\n" +
                        "\n" +
                        "Символізм: задоволена людина сидить перед дев'ятьма виставленими чашами. Це карта емоційного та матеріального комфорту, виконання бажань.\n" +
                        "\n" +
                        "Кохання: стабільні, радісні стосунки, \"все, що я хочу, я маю\", емоційна насиченість.\n" +
                        "\n" +
                        "Кар'єра: фінансовий успіх, впевненість у своїх силах, задоволення від досягнутих результатів.\n" +
                        "\n" +
                        "Порада: насолоджуйтесь плодами своєї праці / ваше бажання буде виконано."},
                {name: "10 ЧАШ",
                    img: CUPS_10,
                    text: "Основне значення: повне сімейне щастя, гармонія, мир у домі, емоційна завершеність, постійне задоволення, блаженство. Часто стосується сім'ї та дому.\n" +
                        "\n" +
                        "Символізм: щаслива пара дивиться на свій будинок, де граються діти, а над ними вишикувалася райдуга з десяти чаш. Символ повного щастя.\n" +
                        "\n" +
                        "Кохання: шлюб, ідеальне сімейне життя, створення дому, повна гармонія та спільні цінності.\n" +
                        "\n" +
                        "Кар'єра: успішний сімейний бізнес, відчуття приналежності до колективу як до родини.\n" +
                        "\n" +
                        "Порада: цінуйте свою родину та гармонію, яку ви створили - це ваше справжнє багатство."},
            ],
            courtiersCups: [
                {name: "ПАЖ ЧАШ",
                    img: PAGE_CUPS,
                    text: "Особистість: чудовий, чутливий, мрійливий, наївний, творчий, інтуїтивний. Закоханий підліток або молода людина; партнер, який є емоційно незрілим, але щирим. Часто символізує нового залицяльника, який боязко відкриває свої почуття.\n" +
                        "\n" +
                        "Символізм: паж стоїть біля води, тримаючи чашу, з якої визирає риба (символ інтуїції, глибини і прихованих знань). Це момент здивування і відкриття.\n" +
                        "\n" +
                        "Значення: новина, пов'язана з емоціями чи творчістю, нове почуття, запрошення, початок художнього проєкту, інтуїтивне усвідомлення.\n" +
                        "\n" +
                        "Порада: будьте відкритими до несподіваних емоційних повідомлень. Дозвольте собі мріяти і довіряти своїй інтуїції, навіть якщо це здається нелогічним."},
                {name: "РИЦАР ЧАШ",
                    img: KNIGHT_CUPS,
                    text: "Особистість: чарівний, романтичний, ідеалістичний, галантний, але може бути дещо нерішучим чи непостійним. Це \"принц на білому коні\".\n" +
                        "Романтик і ідеаліст. Це той, хто приносить квіти, пише вірші та робить великі жести. Але він також може бути непостійним або більше любити ідею кохання, ніж саму людину.\n" +
                        "\n" +
                        "Символізм: лицар їде верхи, тримаючи чашу, часто підносить її як дар. Він — посланець почуттів.\n" +
                        "\n" +
                        "Значення: пропозиція (кохання, примирення, творчий проєкт), наближення романтичної події, запрошення. Може вказувати на ідеалізацію.\n" +
                        "\n" +
                        "Порада: прийміть пропозицію, що надходить. Дійте з витонченістю та дипломатією, але не дозволяйте ідеалізму затьмарити реальність."},
                {name: "КОРОЛЕВА ЧАШ",
                    img: QUEEN_CUPS,
                    text: "Особистість: емоційна, любляча, хороша слухачка, цілителька. Душа стосунків. Це надзвичайно інтуїтивна, турботлива і співчутлива жінка, яка здатна глибоко розуміти партнера. Вона дарує емоційну безпеку.\n" +
                        "\n" +
                        "Символізм: королева сидить на троні біля води, тримаючи витончену чашу, яка закрита (символ її внутрішньої мудрості та прихованої емоційної глибини).\n" +
                        "\n" +
                        "Значення: глибоке емоційне розуміння, співпереживання, потреба звернутися до інтуїції та почуттів. Символ материнської любові та підтримки.\n" +
                        "\n" +
                        "Порада: прислухайтеся до свого внутрішнього голосу. Проявляйте співчуття, але встановлюйте здорові емоційні кордони."},
                {name: "КОРОЛЬ ЧАШ",
                    img: KING_CUPS,
                    text: "Особистість: емоційно зрілий, спокійний, мудрий, дипломатичний, володіє собою, щедрий, терплячий. Може бути батьком, лікарем, священником, художником або лідером.\n" +
                        "\n" +
                        "Символізм: король сидить на троні, оточеному водою, символізуючи, що він може контролювати навіть найглибші емоційні потоки, тримаючи чашу та жезл.\n" +
                        "\n" +
                        "Значення:  емоційний контроль, мудре керівництво в справах почуттів, баланс між розумом та серцем. Допомога або порада від емоційно зрілої людини.\n" +
                        "\n" +
                        "Порада: підходьте до ситуації з доброзичливістю, але з абсолютною об'єктивністю. Використовуйте свою емоційну мудрість, щоб допомогти іншим."},
            ],
        },

        en: {
            title: "CUPS",
            defaultCards: "LIST OF CARDS",
            courtiersCards: "COURTIERS",
            meaning: "CARDS MEANING",
            defaultCups: [
                {name: "ACE OF CUPS",
                    img: ACE_CUPS,
                    text: "Main meaning: a new beginning in the emotional sphere, strong feeling, love, compassion, joy, spiritual fulfillment, fertility, emotional fullness.\n" +
                        "\n" +
                        "Symbolism: an overflowing cup, often with a dove or a guest washing it. This is a source of emotions, spiritual grace, opening the heart.\n" +
                        "\n" +
                        "Love: new strong love, infatuation, spiritual closeness, willingness to open the heart. Deep satisfaction in relationships.\n" +
                        "\n" +
                        "Career: satisfying work, creative project, harmony in the team. Success in art or psychology.\n" +
                        "\n" +
                        "Advice: let your feelings flow freely, act from a pure heart.",},
                {name: "2 CUPS",
                    img: CUPS_2,
                    text: "Main meaning: harmonious union, partnership, mutual love, reconciliation, union, engagement, balanced relationship.\n" +
                        "\n" +
                        "Symbolism: a man and a woman exchange cups, above which is depicted the caduceus (rod of Hermes), symbolizing harmony, healing and mutual exchange.\n" +
                        "\n" +
                        "Love: engagement, the beginning of a serious relationship, passion based on mutual respect, an ideal romantic relationship.\n" +
                        "\n" +
                        "Career: successful business partnership, conclusion of a profitable contract, cooperation.\n" +
                        "\n" +
                        "Advice: seek balance and mutual understanding with partners."},
                {name: "3 CUPS",
                    img: CUPS_3,
                    text: "Main meaning: celebration, joy, friendship, meetings, successful completion, party, support of community or friends.\n" +
                        "\n" +
                        "Symbolism: three women raise their bowls in a toast, celebrating a harvest or success. This is a symbol of shared joy and abundance.\n" +
                        "\n" +
                        "Love: celebration of love, wedding, pregnancy, strong friendships, triumph in family life.\n" +
                        "\n" +
                        "Career: successful completion of a project, corporate celebration, recognition of merit in the team.\n" +
                        "\n" +
                        "Advice: rejoice in successes with others, allow yourself to enjoy the moment."},
                {name: "4 CUPS",
                    img: CUPS_4,
                    text: "Main meaning: apathy, boredom, dissatisfaction with what is, oversaturation, rejection of the offer, ignoring opportunities, self-absorption.\n" +
                        "\n" +
                        "Symbolism: a person sits under a tree with his arms crossed and does not pay attention to the cup that a cloud is holding out to him (a gift from the Universe), while three cups stand in front of him.\n" +
                        "\n" +
                        "Love: boredom in relationships, taking a partner for granted, the need to reevaluate feelings. A refusal of courtship is possible.\n" +
                        "\n" +
                        "Career: dissatisfaction with the current job, ignoring new opportunities, the feeling that \"this is not it\".\n" +
                        "\n" +
                        "Advice: stop obsessing about yourself; look around - the opportunities are right in front of you."},
                {name: "5 CUPS",
                    img: CUPS_5,
                    text: "Main meaning: loss, sadness, grief, regret, obsession with the past, disappointment in relationships. The card often indicates that although something is lost, all is not lost (two cups are behind).\n" +
                        "\n" +
                        "Symbolism: a figure wrapped in a cloak mourns three overturned cups, oblivious to the two cups standing behind.\n" +
                        "\n" +
                        "Love: heartbreak, divorce, regret over past relationships or actions. Stuck on the loss, not on what is left.\n" +
                        "\n" +
                        "Career: a project has failed, a business has suffered losses, a feeling of failure.\n" +
                        "\n" +
                        "Advice: Change your focus! Stop mourning what is lost and start appreciating what is kept."},
                {name: "6 CUPS",
                    img: CUPS_6,
                    text: "Main meaning: memories, nostalgia, childhood, the past, innocence, gifts from the past, security, the return of old acquaintances.\n" +
                        "\n" +
                        "Symbolism: children exchanging flowers or drinks in cups. Association with home, security and the idyll of the past.\n" +
                        "\n" +
                        "Love: the return of a former partner or friend, the resumption of old relationships, a nostalgic romance. Harmony and security in family life.\n" +
                        "\n" +
                        "Career: returning to an old job or hobby, working with children, using old methods.\n" +
                        "\n" +
                        "Advice: remember the lessons of the past, but do not let nostalgia block your present."},
                {name: "7 CUPS",
                    img: CUPS_7,
                    text: "Main meaning: illusions, dreams, fantasies, many choices, confusion, unrealistic expectations, \"castles in the air\", the need to focus on reality.\n" +
                        "\n" +
                        "Symbolism: a person looks at the seven bowls, from which fantastic images (treasures, snakes, faces) emerge, which symbolizes the choice between numerous, often unrealistic, options.\n" +
                        "\n" +
                        "Love: choosing between several partners, idealization of love, fantasies instead of real relationships.\n" +
                        "\n" +
                        "Career: many confusing offers, unclear goals, planning without action.\n" +
                        "\n" +
                        "Advice: land! Choose one, the most realistic goal, and give up illusions."},
                {name: "8 CUPS",
                    img: CUPS_8,
                    text: "Main meaning: leaving a situation or relationship that no longer brings satisfaction, searching for deeper meaning, leaving the material for the spiritual, traveling.\n" +
                        "\n" +
                        "Symbolism: The figure walks from the eight of cups arranged into the night or into the mountains. The cups are left because they no longer satisfy on a spiritual level.\n" +
                        "\n" +
                        "Love: leaving a relationship that has exhausted itself emotionally, searching for a deeper connection or meaning outside of the partner.\n" +
                        "\n" +
                        "Career: changing careers, quitting to find more meaningful work, taking a long trip.\n" +
                        "\n" +
                        "Advice: You must let go of what is not serving your highest good in order to find true happiness."},
                {name: "9 CUPS",
                    img: CUPS_9,
                    text: "Main meaning: fulfillment of desires, emotional satisfaction, luxury, confidence, abundance, happiness, \"wish card\".\n" +
                        "\n" +
                        "Symbolism: a satisfied person sits in front of the nine bowls displayed. This is a card of emotional and material comfort, fulfillment of desires.\n" +
                        "\n" +
                        "Love: stable, joyful relationships, \"everything I want, I have\", emotional saturation.\n" +
                        "\n" +
                        "Career: financial success, self-confidence, satisfaction with the results achieved.\n" +
                        "\n" +
                        "Advice: enjoy the fruits of your labor / your desire will be fulfilled."},
                {name: "10 CUPS",
                    img: CUPS_10,
                    text: "Main meaning: complete family happiness, harmony, peace in the home, emotional completeness, constant satisfaction, bliss. Often refers to family and home.\n" +
                        "\n" +
                        "Symbolism: a happy couple looks at their house, where children are playing, and above them a rainbow of ten bowls is lined up. A symbol of complete happiness.\n" +
                        "\n" +
                        "Love: marriage, perfect family life, creating a home, complete harmony and shared values.\n" +
                        "\n" +
                        "Career: successful family business, a sense of belonging to the team as a family.\n" +
                        "\n" +
                        "Advice: value your family and the harmony you have created - this is your true wealth."},
            ],
            courtiersCups: [
                {name: "PAGE OF CUPS",
                    img: PAGE_CUPS,
                    text: "Personality: Wonderful, sensitive, dreamy, naive, creative, intuitive. A teenager or young person in love; a partner who is emotionally immature but sincere. Often symbolizes a new suitor who is timid in revealing his feelings.\n" +
                        "\n" +
                        "Symbolism: The page stands by the water, holding a bowl from which a fish is peering out (symbol of intuition, depth and hidden knowledge). This is a moment of surprise and discovery.\n" +
                        "\n" +
                        "Meaning: news related to emotions or creativity, a new feeling, an invitation, the beginning of an artistic project, intuitive awareness.\n" +
                        "\n" +
                        "Advice: Be open to unexpected emotional messages. Allow yourself to dream and trust your intuition, even if it seems illogical."},
                {name: "KNIGHT OF CUPS",
                    img: KNIGHT_CUPS,
                    text: "Personality: Charming, romantic, idealistic, gallant, but can be a bit indecisive or fickle. He is a \"prince on a white horse\".\n" +
                        "A romantic and idealist. He is someone who brings flowers, writes poetry and makes grand gestures. But he can also be fickle or loves the idea of ​​love more than the person himself.\n" +
                        "\n" +
                        "Symbolism: The knight rides on horseback, holding a cup, often offering it as a gift. He is a messenger of feelings.\n" +
                        "\n" +
                        "Meaning: Proposal (love, reconciliation, creative project), approaching romantic event, invitation. Can indicate idealization.\n" +
                        "\n" +
                        "Advice: Accept the offer that comes. Act with grace and diplomacy, but do not let idealism overshadow reality."},
                {name: "QUEEN OF CUPS",
                    img: QUEEN_CUPS,
                    text: "Personality: Emotional, loving, a good listener, a healer. The soul of relationships. She is an extremely intuitive, caring and compassionate woman who is able to deeply understand her partner. She gives emotional security.\n" +
                        "\n" +
                        "Symbolism: The queen sits on a throne by the water, holding an elegant bowl that is closed (a symbol of her inner wisdom and hidden emotional depth).\n" +
                        "\n" +
                        "Meaning: Deep emotional understanding, empathy, the need to turn to intuition and feelings. A symbol of maternal love and support.\n" +
                        "\n" +
                        "Advice: Listen to your inner voice. Show compassion, but set healthy emotional boundaries."},
                {name: "KING OF CUPS",
                    img: KING_CUPS,
                    text: "Personality: Emotionally mature, calm, wise, diplomatic, self-possessed, generous, patient. May be a father, doctor, priest, artist, or leader.\n" +
                        "\n" +
                        "Symbolism: The king sits on a throne surrounded by water, symbolizing that he can control even the deepest emotional currents, holding a cup and a scepter.\n" +
                        "\n" +
                        "Meaning: Emotional control, wise guidance in matters of the senses, balance between the mind and the heart. Help or advice from an emotionally mature person.\n" +
                        "\n" +
                        "Advice: Approach the situation with kindness, but with complete objectivity. Use your emotional wisdom to help others."},
            ],
        }
    }

    const {
        title,
        defaultCards,
        courtiersCards,
        meaning,
        defaultCups,
        courtiersCups,
    } = content[language];

    return(
        <div
            className="font-tarot"
            style={{
                backgroundImage: `url(${CUPS_BACKGROUND_IMG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <section
                className="relative h-[677px] flex items-center overflow-hidden"
                style={{
                    backgroundImage: `url(${CUPS_HERO_BACKGROUND_IMG})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'scroll',
                }}
            >
                <div className="z-10 p-4 max-w-4xl ml-10 md:ml-20 text-left">
                    <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg tracking-wide pt-14">
                        {title}
                    </h1>
                </div>

                <div className="absolute right-0 bottom-0 h-[94%] w-full md:w-[55%] overflow-hidden z-0">
                    <img
                        src={GROUP_CUPS}
                        className="w-full object-cover object-bottom-right"
                    />
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
                        {defaultCups.map((card, index) => (
                            <a
                                href={`#default-cup-${index}`}
                                key={card.name}
                                className={`text-center group transition-transform duration-300 hover:scale-105 ${
                                    index === 8 ? 'md:col-start-2' : ''
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
                        {courtiersCups.map((card, index) => (
                            <a
                                href={`#courtier-cup-${index}`}
                                key={card.name}
                                className={`text-center group transition-transform duration-300 hover:scale-105`}
                            >
                                <img
                                    src={card.img}
                                    alt={card.name}
                                    className="w-full rounded-lg shadow-lg"
                                />
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
                        {defaultCups.map((card, index) => (
                            <div
                                id={`default-cup-${index}`}
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

                        {courtiersCups.map((card, index) => (
                            <div
                                id={`courtier-cup-${index}`}
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