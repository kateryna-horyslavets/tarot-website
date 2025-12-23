import React, {useContext} from 'react';
import { LanguageContext } from '../Language';

import ACE_PENTACLES from '../assets/images/pentacles page/Pentacles01.png';
import PENTACLES_2 from '../assets/images/pentacles page/Pentacles02.png';
import PENTACLES_3 from '../assets/images/pentacles page/Pentacles03.png';
import PENTACLES_4 from '../assets/images/pentacles page/Pentacles04.png';
import PENTACLES_5 from '../assets/images/pentacles page/Pentacles05.png';
import PENTACLES_6 from '../assets/images/pentacles page/Pentacles06.png';
import PENTACLES_7 from '../assets/images/pentacles page/Pentacles07.png';
import PENTACLES_8 from '../assets/images/pentacles page/Pentacles08.png';
import PENTACLES_9 from '../assets/images/pentacles page/Pentacles09.png';
import PENTACLES_10 from '../assets/images/pentacles page/Pentacles10.png';
import PAGE_PENTACLES from '../assets/images/pentacles page/Pentacles11.png';
import KNIGHT_PENTACLES from '../assets/images/pentacles page/Pentacles12.png';
import QUEEN_PENTACLES from '../assets/images/pentacles page/Pentacles13.png';
import KING_PENTACLES from '../assets/images/pentacles page/Pentacles14.png';
import GROUP_PENTACLES from '../assets/images/pentacles page/Group_pentacles.png';
import PENTACLES_BACKGROUND_IMG from '../assets/images/pentacles page/pentacles_background.png';
import PENTACLES_HERO_BACKGROUND_IMG from '../assets/images/pentacles page/pentacles_hero.png';

export default function Pentacles() {
    const { language } = useContext(LanguageContext);

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
            title: "ПЕНТАКЛІ",
            defaultCards: "ПЕРЕЛІК КАРТ",
            courtiersCards: "ПРИДВОРНІ",
            meaning: "ЗНАЧЕННЯ КАРТ",
            defaultCups: [
                {name: "TУЗ ПЕНТАКЛІВ",
                    img: ACE_PENTACLES,
                    text: "Основне значення: нові можливості, процвітання, фінансовий успіх, матеріальний дар, прорив.\n" +
                        "\n" +
                        "Символізм: велика монета або диск, що ширяє в руці, яка виходить із хмари над квітучим садом. Це символ дару Всесвіту у матеріальній формі та родючого ґрунту для інвестицій.\n" +
                        "\n" +
                        "Кохання: новий, стабільний етап у стосунках. Партнерство, засноване на вірності, безпеці та матеріальній відповідальності.\n" +
                        "\n" +
                        "Кар'єра: прорив у кар'єрі, підвищення, нова вигідна робота, фінансування великого проєкту або щедра винагорода.\n" +
                        "\n" +
                        "Порада: сміливо беріться за нові можливості, які пропонує життя, особливо фінансові. Керуйте грошима розумно та розвивайте фінансову незалежність."},
                {name: "2 ПЕНТАКЛІВ",
                    img: PENTACLES_2,
                    text: "Основне значення: баланс, адаптація, гнучкість, невизначеність у виборі.\n" +
                        "\n" +
                        "Символізм: людина жонглює двома монетами, між якими зображено знак нескінченності.\n" +
                        "\n" +
                        "Кохання: пошук рівноваги між стосунками та іншими сферами (робота, фінанси). Необхідність адаптуватися до потреб партнера. Може вказувати на нестабільність або вибір між двома залицяльниками.\n" +
                        "\n" +
                        "Кар'єра: управління кількома проєктами одночасно, фріланс, друга робота.\n" +
                        "\n" +
                        "Порада: зберігайте спокій. Усвідомте, що не можете робити все одночасно, і навчіться ефективно розподіляти свої ресурси."},
                {name: "3 ПЕНТАКЛІВ",
                    img: PENTACLES_3,
                    text: "Основне значення: майстерність, навчання, робота в команді, визнання кваліфікації.\n" +
                        "\n" +
                        "Символізм: художник, архітектор чи ремісник працює над проєктом (наприклад, над вітражем) під наглядом двох інших людей.\n" +
                        "\n" +
                        "Кохання: спільне будівництво стосунків, спільні проєкти (ремонт, переїзд). Стосунки, в яких партнери працюють як одна команда, вдосконалюючи свій союз.\n" +
                        "\n" +
                        "Кар'єра: успіх у командному проєкті, отримання замовлення, де потрібна ваша унікальна навичка. Час для підвищення кваліфікації та професійного росту.\n" +
                        "\n" +
                        "Порада: співпрацюйте з іншими, вчіться і використовуйте свої навички. Якість вашої роботи незабаром принесе вам визнання."},
                {name: "4 ПЕНТАКЛІВ",
                    img: PENTACLES_4,
                    text: "Основне значення: матеріальність, заощадження, безпека, володіння. Страх втрати, схильність до накопичення та контролю.\n" +
                        "\n" +
                        "Символізм: людина сидить, міцно притискаючи до себе чотири монети. Символ захисту свого майна, але також жадібності та небажання ділитися.\n" +
                        "\n" +
                        "Кохання: емоційна скупість, небажання відкриватися або давати партнеру свободу. Стосунки, в яких домінує контроль та прив'язаність.\n" +
                        "\n" +
                        "Кар'єра: фінансова стабільність і заощадження. Вдалі інвестиції, що приносять безпеку. Але також — небажання ризикувати або інвестувати у розвиток.\n" +
                        "\n" +
                        "Порада: відпустіть необхідність контролювати все і всіх."},
                {name: "5 ПЕНТАКЛІВ",
                    img: PENTACLES_5,
                    text: "Основне значення: нестача, потреба, бідність, відчуття вигнання, ізоляція. Зосередження на негативі.\n" +
                        "\n" +
                        "Символізм: дві знедолені фігури проходять повз яскраво освітлене вікно церкви або притулку, не помічаючи його. Символ того, що допомога поруч, але її не бачать через фокус на власних стражданнях.\n" +
                        "\n" +
                        "Кохання: відчуття самотності або покинутості у стосунках. Партнери почуваються ізольованими та не підтримують один одного.\n" +
                        "\n" +
                        "Кар'єра: фінансова криза, втрата роботи, період безгрошів'я.\n" +
                        "\n" +
                        "Порада: шукайте допомоги та прийміть її. Подивіться навколо – ресурси для виходу з кризи існують, але ви їх ігноруєте."},
                {name: "6 ПЕНТАКЛІВ",
                    img: PENTACLES_6,
                    text: "Основне значення: щедрість, благодійність, справедливість, фінансова підтримка.\n" +
                        "\n" +
                        "Символізм: людина зважує монети на терезах, роздаючи їх нужденним. Це символізує розумне управління багатством та справедливий розподіл ресурсів.\n" +
                        "\n" +
                        "Кохання: збалансовані взаємні дарунки та підтримка. Партнерство, в якому обидва піклуються один про одного. Може вказувати на подарунок чи фінансову допомогу від коханої людини.\n" +
                        "\n" +
                        "Кар'єра: отримання кредиту, гранту чи інвестицій. Справедлива оплата праці. Можливість отримати підвищення.\n" +
                        "\n" +
                        "Порада: будьте щедрими, коли це можливо, і прийміть допомогу, коли вона потрібна. Дотримуйтесь принципу справедливості."},
                {name: "7 ПЕНТАКЛІВ",
                    img: PENTACLES_7,
                    text: "Основне значення: терпіння, очікування винагороди, оцінка прогресу. Час перепочинку перед збором урожаю.\n" +
                        "\n" +
                        "Символізм: селянин сперся на мотику, оглядаючи пентаклі, що ростуть на рослинах. Символ довгострокових інвестицій та необхідності терпляче чекати на результати.\n" +
                        "\n" +
                        "Кохання: перехідний етап у стосунках. Необхідність оцінити, скільки ви вже вклали та що отримали натомість.\n" +
                        "\n" +
                        "Кар'єра: інвестиції в бізнес, що повільно окуповуються. Очікування підвищення чи премії.\n" +
                        "\n" +
                        "Порада: наберіться терпіння. Ви вже пройшли більшу частину шляху. Оцініть свій прогрес, але не кидайте справу на фінальній стадії."},
                {name: "8 ПЕНТАКЛІВ",
                    img: PENTACLES_8,
                    text: "Основне значення: вдосконалення навичок, заняття ремеслом, наполеглива праця, концентрація.\n" +
                        "\n" +
                        "Символізм: людина зосереджено працює у майстерні, створюючи пентаклі. Символ майстерності через практику та уваги до деталей.\n" +
                        "\n" +
                        "Кохання: робота над стосунками, спільне створення кращого союзу. Партнер, який старанно працює, щоб забезпечити комфорт та стабільність сім'ї.\n" +
                        "\n" +
                        "Кар'єра: період інтенсивного навчання, стажування. Рутинна, але продуктивна праця. Висока якість виконання роботи.\n" +
                        "\n" +
                        "Порада: зануртеся у свою роботу або навчання. Удосконалюйте навички. Якість, а не швидкість, принесе успіх і винагороду."},
                {name: "9 ПЕНТАКЛІВ",
                    img: PENTACLES_9,
                    text: "Основне значення: достаток, розкіш, самодостатність, успіх, фінансова незалежність. Насолода результатами своєї праці.\n" +
                        "\n" +
                        "Символізм: елегантна жінка стоїть у своєму розкішному саду, оточена дев'ятьма монетами. Символ статусу, вишуканості та особистих досягнень.\n" +
                        "\n" +
                        "Кохання: впевненість та незалежність у стосунках. Партнер, який цінує свою свободу та простір, але готовий ділитися своїм достатком.\n" +
                        "\n" +
                        "Кар'єра: отримання значного прибутку, фінансовий успіх. Успіх у сфері, пов'язаній з красою, мистецтвом, або предметами розкоші.\n" +
                        "\n" +
                        "Порада: насолоджуйтесь своїм успіхом і незалежністю, які ви заслужили. Не бійтеся демонструвати свій статус."},
                {name: "10 ПЕНТАКЛІВ",
                    img: PENTACLES_10,
                    text: "Основне значення: багатство, спадок, сімейна спадщина, фінансова безпека, повна стабільність.\n" +
                        "\n" +
                        "Символізм: зображення великої, щасливої родини, що зібралася біля родового будинку. Символ родової підтримки та довговічного процвітання.\n" +
                        "\n" +
                        "Кохання: міцний шлюб, велика та щаслива родина. Стосунки, засновані на спільних цінностях, фінансовій надійності та традиціях.\n" +
                        "\n" +
                        "Кар'єра: успішний сімейний бізнес, отримання спадщини, велика пенсія. Забезпечене життя для майбутніх поколінь.\n" +
                        "\n" +
                        "Порада: цінуйте свою сім'ю та родинні зв'язки. Подумайте про довгострокову фінансову безпеку та збереження спадщини."},
            ],
            courtiersCups: [
                {name: "ПАЖ ПЕНТАКЛІВ",
                    img: PAGE_PENTACLES,
                    text: "Особистість: практична, старанна, серйозна та методична людина. Той, хто тільки починає свій шлях у бізнесі чи навчанні і зосереджений на здобутті матеріальних знань.\n" +
                        "\n" +
                        "Символізм: молода людина уважно розглядає пентакль на тлі родючого поля. Це символізує концентрацію, готовність до праці та потенціал для фінансового росту та реалізації ідей.\n" +
                        "\n" +
                        "Значення: нові фінансові чи робочі можливості. Початок навчання чи важливого проєкту. Добрі новини про гроші, стипендію чи роботу.\n" +
                        "\n" +
                        "Порада: дійте та вкладайте зусилля у своє майбутнє. Будьте відкритими до нових знань і фінансових пропозицій. Підходьте до всього практично та уважно до деталей."},
                {name: "РИЦАР ПЕНТАКЛІВ",
                    img: KNIGHT_PENTACLES,
                    text: "Особистість: надійний, терплячий, відповідальний, працьовитий і відданий своїй справі. Він неквапливий, але його обіцянки завжди виконуються. Може бути дещо консервативним.\n" +
                        "\n" +
                        "Символізм: лицар повільно їде верхи на великому коні, тримаючи пентакль. Він зосереджений на своїй місії, а не на швидкості. Символ непохитної відданості, систематичності та терпіння.\n" +
                        "\n" +
                        "Значення: повільний, але гарантований прогрес. Досягнення мети завдяки наполегливості та рутинній праці. Поява в житті надійної пропозиції чи допомоги. Період, коли потрібна велика витримка.\n" +
                        "\n" +
                        "Порада: не поспішайте. Дійте методично, відповідально та доведіть розпочате до кінця, навіть якщо це нудно. Ваш успіх залежить від дисципліни."},
                {name: "КОРОЛЕВА ПЕНТАКЛІВ",
                    img: QUEEN_PENTACLES,
                    text: "Особистість: щедра, практична, турботлива, надійна мати чи господиня. Втілює матеріальний комфорт та здатність створювати затишок і достаток. Часто успішна бізнесвумен чи берегиня сімейного вогнища.\n" +
                        "\n" +
                        "Символізм: королева сидить на розкішному троні в квітучому саду, тримаючи монету. Вона випромінює тепло, безпеку та плідність. Символ успішної та дбайливої жінки, яка контролює свій матеріальний світ.\n" +
                        "\n" +
                        "Значення: зростання фінансового комфорту, процвітання та безпеки. Отримання щедрої допомоги чи поради від мудрої жінки.\n" +
                        "\n" +
                        "Порада: турбуйтеся про себе та своє оточення. Використовуйте свої практичні навички, щоб створити комфорт та достаток. Будьте щедрими і відкритими, але залишайтеся приземленими."},
                {name: "КОРОЛЬ ПЕНТАКЛІВ",
                    img: KING_PENTACLES,
                    text: "Особистість: успішний, забезпечений, стабільний та досвідчений чоловік. Це бізнесмен, інвестор або керівник, який досяг високого фінансового та соціального становища. Надійний і практичний лідер.\n" +
                        "\n" +
                        "Символізм: король сидить на троні, прикрашеному символами багатства та процвітання.. Він втілює довгостроковий успіх, мудрість та вміння керувати великими матеріальними ресурсами.\n" +
                        "\n" +
                        "Значення: фінансова незалежність, великий успіх у бізнесі, безпечні інвестиції. Досягнення піку матеріального процвітання. Порада чи підтримка від впливової та забезпеченої особи.\n" +
                        "\n" +
                        "Порада: дійте як лідер. Використовуйте свій досвід і мудрість для створення багатства та стабільності. Управляйте своїми фінансами розумно і не бійтеся пожинати плоди своїх зусиль."},
            ],
        },

        en: {
            title: "PENTACLES",
            defaultCards: "LIST OF CARDS",
            courtiersCards: "COURTIERS",
            meaning: "CARDS MEANING",
            defaultCups: [
                {name: "ACE OF PENTACLES",
                    img: ACE_PENTACLES,
                    text: "Main meaning: new opportunities, prosperity, financial success, material gift, breakthrough.\n" +
                        "\n" +
                        "Symbolism: a large coin or disc floating in a hand emerging from a cloud over a blooming garden. This is a symbol of the Universe's gift in material form and fertile ground for investment.\n" +
                        "\n" +
                        "Love: a new, stable stage in a relationship. A partnership based on loyalty, security and financial responsibility.\n" +
                        "\n" +
                        "Career: a career breakthrough, promotion, new profitable job, financing of a large project or a generous reward.\n" +
                        "\n" +
                        "Advice: boldly take on new opportunities that life offers, especially financial ones. Manage money wisely and develop financial independence."},
                {name: "2 PENTACLES",
                    img: PENTACLES_2,
                    text: "Main meaning: balance, adaptation, flexibility, uncertainty in choice.\n" +
                        "\n" +
                        "Symbolism: a person juggles two coins, between which is depicted an infinity sign.\n" +
                        "\n" +
                        "Love: finding balance between relationships and other areas (work, finances). The need to adapt to the needs of a partner. May indicate instability or choosing between two suitors.\n" +
                        "\n" +
                        "Career: managing several projects at once, freelancing, second job.\n" +
                        "\n" +
                        "Advice: stay calm. Realize that you cannot do everything at once, and learn to allocate your resources effectively."},
                {name: "3 PENTACLES",
                    img: PENTACLES_3,
                    text: "Main meaning: skill, learning, teamwork, recognition of qualifications.\n" +
                        "\n" +
                        "Symbolism: an artist, architect or craftsman working on a project (for example, a stained glass window) under the supervision of two other people.\n" +
                        "\n" +
                        "Love: building relationships together, joint projects (renovation, moving). A relationship in which partners work as a team, perfecting their union.\n" +
                        "\n" +
                        "Career: success in a team project, receiving an order where your unique skill is needed. Time for professional development and growth.\n" +
                        "\n" +
                        "Advice: collaborate with others, learn and use your skills. The quality of your work will soon bring you recognition."},
                {name: "4 PENTACLES",
                    img: PENTACLES_4,
                    text: "Main meaning: materiality, savings, security, possessions. Fear of loss, tendency to accumulate and control.\n" +
                        "\n" +
                        "Symbolism: a person sits, tightly pressing four coins to himself. A symbol of protecting one's property, but also greed and unwillingness to share.\n" +
                        "\n" +
                        "Love: emotional stinginess, unwillingness to open up or give freedom to a partner. Relationships dominated by control and attachment.\n" +
                        "\n" +
                        "Career: financial stability and savings. Successful investments that bring security. But also - unwillingness to take risks or invest in development.\n" +
                        "\n" +
                        "Advice: let go of the need to control everything and everyone."},
                {name: "5 PENTACLES",
                    img: PENTACLES_5,
                    text: "Main meaning: lack, need, poverty, feeling of being outcast, isolation. Focusing on the negative.\n" +
                        "\n" +
                        "Symbolism: Two destitute figures walk past a brightly lit window of a church or shelter, not noticing it. Symbol that help is near, but is not seen because of the focus on one's own suffering.\n" +
                        "\n" +
                        "Love: Feeling lonely or abandoned in a relationship. Partners feel isolated and unsupportive.\n" +
                        "\n" +
                        "Career: Financial crisis, job loss, period of lack of money.\n" +
                        "\n" +
                        "Advice: Seek help and accept it. Look around - resources to get out of the crisis exist, but you are ignoring them."},
                {name: "6 PENTACLES",
                    img: PENTACLES_6,
                    text: "Main meaning: generosity, charity, justice, financial support.\n" +
                        "\n" +
                        "Symbolism: a person weighs coins on a scale, distributing them to those in need. This symbolizes wise management of wealth and fair distribution of resources.\n" +
                        "\n" +
                        "Love: balanced mutual gifts and support. A partnership in which both care for each other. May indicate a gift or financial assistance from a loved one.\n" +
                        "\n" +
                        "Career: receiving a loan, grant or investment. Fair pay. Opportunity to get a promotion.\n" +
                        "\n" +
                        "Advice: be generous when possible and accept help when needed. Follow the principle of justice."},
                {name: "7 PENTACLES",
                    img: PENTACLES_7,
                    text: "Main meaning: patience, waiting for a reward, assessing progress. A time of rest before harvesting.\n" +
                        "\n" +
                        "Symbolism: a farmer leaning on a hoe, examining the pentacles growing on plants. A symbol of long-term investments and the need to patiently wait for results.\n" +
                        "\n" +
                        "Love: a transitional stage in a relationship. The need to evaluate how much you have already invested and what you have received in return.\n" +
                        "\n" +
                        "Career: investments in a business that are slowly paying off. Expecting a promotion or bonus.\n" +
                        "\n" +
                        "Advice: be patient. You have already covered most of the way. Evaluate your progress, but do not give up at the final stage."},
                {name: "8 PENTACLES",
                    img: PENTACLES_8,
                    text: "Main meaning: improving skills, practicing a craft, hard work, concentration.\n" +
                        "\n" +
                        "Symbolism: a person works intently in a workshop, creating pentacles. A symbol of mastery through practice and attention to detail.\n" +
                        "\n" +
                        "Love: working on relationships, creating a better union together. A partner who works hard to ensure the comfort and stability of the family.\n" +
                        "\n" +
                        "Career: a period of intensive training, internship. Routine but productive work. High quality of work performance.\n" +
                        "\n" +
                        "Advice: immerse yourself in your work or studies. Improve your skills. Quality, not speed, will bring success and reward."},
                {name: "9 PENTACLES",
                    img: PENTACLES_9,
                    text: "Main meaning: wealth, luxury, self-sufficiency, success, financial independence. Enjoyment of the results of one's labor.\n" +
                        "\n" +
                        "Symbolism: An elegant woman standing in her luxurious garden, surrounded by nine coins. A symbol of status, sophistication, and personal achievement.\n" +
                        "\n" +
                        "Love: Confidence and independence in relationships. A partner who values their freedom and space, but is willing to share their wealth.\n" +
                        "\n" +
                        "Career: Making significant profits, financial success. Success in a field related to beauty, art, or luxury goods.\n" +
                        "\n" +
                        "Advice: Enjoy your success and independence that you have earned. Don't be afraid to show off your status."},
                {name: "10 PENTACLES",
                    img: PENTACLES_10,
                    text: "Main meaning: wealth, inheritance, family legacy, financial security, complete stability.\n" +
                        "\n" +
                        "Symbolism: image of a large, happy family gathered near the ancestral home. A symbol of ancestral support and lasting prosperity.\n" +
                        "\n" +
                        "Love: strong marriage, large and happy family. Relationships based on shared values, financial security and traditions.\n" +
                        "\n" +
                        "Career: successful family business, receiving an inheritance, large pension. Secure life for future generations.\n" +
                        "\n" +
                        "Advice: value your family and family ties. Think about long-term financial security and preserving your legacy."},
            ],
            courtiersCups: [
                {name: "PAGE OF PENTACLES",
                    img: PAGE_PENTACLES,
                    text: "Personality: Practical, diligent, serious and methodical person. Someone who is just starting their journey in business or education and is focused on acquiring material knowledge.\n" +
                        "\n" +
                        "Symbolism: A young person carefully examines the pentacle against the background of a fertile field. This symbolizes concentration, willingness to work and the potential for financial growth and the implementation of ideas.\n" +
                        "\n" +
                        "Meaning: New financial or work opportunities. The beginning of studies or an important project. Good news about money, a scholarship or a job.\n" +
                        "\n" +
                        "Advice: Take action and put effort into your future. Be open to new knowledge and financial offers. Approach everything practically and with attention to detail."},
                {name: "KNIGHT OF PENTACLES",
                    img: KNIGHT_PENTACLES,
                    text: "Personality: Reliable, patient, responsible, hardworking and dedicated. He is slow-moving, but his promises are always kept. Can be somewhat conservative.\n" +
                        "\n" +
                        "Symbolism: The knight rides slowly on a large horse, holding a pentacle. He is focused on his mission, not on speed. A symbol of unwavering dedication, systematicity and patience.\n" +
                        "\n" +
                        "Meaning: Slow but guaranteed progress. Achieving a goal through perseverance and routine work. The appearance in life of a reliable offer or help. A period when great endurance is needed.\n" +
                        "\n" +
                        "Advice: Take your time. Act methodically, responsibly and finish what you start, even if it is boring. Your success depends on discipline."},
                {name: "QUEEN OF PENTACLES",
                    img: QUEEN_PENTACLES,
                    text: "Personality: Generous, practical, caring, reliable mother or hostess. Represents material comfort and the ability to create comfort and abundance. Often a successful businesswoman or guardian of the family hearth.\n" +
                        "\n" +
                        "Symbolism: The queen sits on a luxurious throne in a flowering garden, holding a coin. She radiates warmth, security and fertility. A symbol of a successful and caring woman who is in control of her material world.\n" +
                        "\n" +
                        "Meaning: Increasing financial comfort, prosperity and security. Receiving generous help or advice from a wise woman.\n" +
                        "\n" +
                        "Advice: Take care of yourself and your surroundings. Use your practical skills to create comfort and abundance. Be generous and open, but stay down to earth."},
                {name: "KING OF PENTACLES",
                    img: KING_PENTACLES,
                    text: "Personality: A successful, wealthy, stable and experienced man. This is a businessman, investor or manager who has achieved a high financial and social position. A reliable and practical leader.\n" +
                        "\n" +
                        "Symbolism: The king sits on a throne decorated with symbols of wealth and prosperity. He embodies long-term success, wisdom and the ability to manage large material resources.\n" +
                        "\n" +
                        "Meaning: Financial independence, great success in business, safe investments. Reaching the peak of material prosperity. Advice or support from an influential and wealthy person.\n" +
                        "\n" +
                        "Advice: Act as a leader. Use your experience and wisdom to create wealth and stability. Manage your finances wisely and do not be afraid to reap the fruits of your efforts."},
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
            className="font-montserrat"
            style={{
                backgroundImage: `url(${PENTACLES_BACKGROUND_IMG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <section
                className="relative h-[677px] flex items-center overflow-hidden"
                style={{
                    backgroundImage: `url(${PENTACLES_HERO_BACKGROUND_IMG})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'scroll',
                }}
            >
                <div className="z-10 p-4 max-w-4xl ml-10 md:ml-20 text-left">
                    <h1 className="text-6xl md:text-8xl font-bold text-neutral-50 drop-shadow-[2px_2px_4px_rgba(69,26,3,1)] tracking-wide pt-14">
                        {title}
                    </h1>
                </div>

                <div className="absolute right-0 bottom-0 h-[94%] w-full md:w-[55%] overflow-hidden z-0">
                    <img
                        src={GROUP_PENTACLES}
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
                                href={`#default-pentacle-${index}`}
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
                                href={`#courtier-pentacle-${index}`}
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
                                id={`default-pentacle-${index}`}
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
                                id={`courtier-pentacle-${index}`}
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