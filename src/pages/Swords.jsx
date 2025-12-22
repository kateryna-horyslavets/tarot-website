import React, {useContext} from 'react';
import { LanguageContext } from '../Language';

import ACE_SWORDS from '../assets/images/swords page/Swords01.png';
import SWORDS_2 from '../assets/images/swords page/Swords02.png';
import SWORDS_3 from '../assets/images/swords page/Swords03.png';
import SWORDS_4 from '../assets/images/swords page/Swords04.png';
import SWORDS_5 from '../assets/images/swords page/Swords05.png';
import SWORDS_6 from '../assets/images/swords page/Swords06.png';
import SWORDS_7 from '../assets/images/swords page/Swords07.png';
import SWORDS_8 from '../assets/images/swords page/Swords08.png';
import SWORDS_9 from '../assets/images/swords page/Swords09.png';
import SWORDS_10 from '../assets/images/swords page/Swords10.png';
import PAGE_SWORDS from '../assets/images/swords page/Swords11.png';
import KNIGHT_SWORDS from '../assets/images/swords page/Swords12.png';
import QUEEN_SWORDS from '../assets/images/swords page/Swords13.png';
import KING_SWORDS from '../assets/images/swords page/Swords14.png';
import GROUP_SWORDS from '../assets/images/swords page/Group_swords.png';
import SWORDS_BACKGROUND_IMG from '../assets/images/swords page/swords_background.png';
import SWORDS_HERO_BACKGROUND_IMG from '../assets/images/swords page/swords_hero.png';

export default function Swords() {
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
            title: "МЕЧІ",
            defaultCards: "ПЕРЕЛІК КАРТ",
            courtiersCards: "ПРИДВОРНІ",
            meaning: "ЗНАЧЕННЯ КАРТ",
            defaultSwords: [
                {name: "TУЗ МЕЧІВ",
                    img: ACE_SWORDS,
                    text: "Основне значення: прорив, ясність думки, сила інтелекту, гостра істина, початок нової ідеї, перемога через розум.\n" +
                        "\n" +
                        "Символізм: рука, що виходить із хмари, тримає прямий меч, увінчаний короною. Це символ чистої, незамутненої істини, ментальної сили та непереборної логіки.\n" +
                        "\n" +
                        "Кохання: рішення прояснити ситуацію, відверта розмова, що може бути болісною, але необхідною. Перемогти у суперечці. Початок стосунків, що базуються на інтелектуальній сумісності.\n" +
                        "\n" +
                        "Кар'єра: успішне вирішення складної проблеми, перемога у суді чи дискусії, блискуча ідея. Початок кар'єри, де потрібен гострий розум.\n" +
                        "\n" +
                        "Порада: дійте рішуче та чесно. Проясніть ситуацію, використовуючи логіку, а не емоції. Оголосіть свою істину."},
                {name: "2 МЕЧІВ",
                    img: SWORDS_2,
                    text: "Основне значення: заперечення, блокада, відмова від вибору, перемир'я, нерішучість, емоційна самозахист.\n" +
                        "\n" +
                        "Символізм: фігура сидить із зав'язаними очима, тримаючи два мечі, схрещені на грудях. Це символізує блокування зовнішнього світу (щоб не бачити проблем) та внутрішній захист від прийняття рішення.\n" +
                        "\n" +
                        "Кохання: уникнення конфлікту, нерішучість щодо майбутнього стосунків. Відмова бачити правду про партнера чи ситуацію. Сліпе перемир'я.\n" +
                        "\n" +
                        "Кар'єра: застій через неможливість прийняти рішення. Вибір між двома рівнозначними варіантами. Уникання відповідальності.\n" +
                        "\n" +
                        "Порада: зіткніться з проблемою віч-на-віч і прийміть рішення."},
                {name: "3 МЕЧІВ",
                    img: SWORDS_3,
                    text: "Основне значення: розбите серце, біль, втрата, смуток, зрада, розчарування. Ментальне страждання.\n" +
                        "\n" +
                        "Символізм: три мечі пронизують серце на тлі похмурого неба. Це прямий символ гострого емоційного болю, що спричинений словами чи вчинками.\n" +
                        "\n" +
                        "Кохання: розлучення, розрив, зрада. Гостре почуття втрати та глибокого смутку. Необхідність пережити біль, щоб рухатися далі.\n" +
                        "\n" +
                        "Кар'єра: звільнення, втрата проєкту, гірке розчарування у колегах чи партнерах. Болісна критика.\n" +
                        "\n" +
                        "Порада: прийміть свій біль. Дозвольте собі пережити втрату, не пригнічуючи її, але й не занурюючись у неї повністю. Зцілення прийде з часом."},
                {name: "4 МЕЧІВ",
                    img: SWORDS_4,
                    text: "Основне значення: відпочинок, відновлення, одужання, медитація, тимчасова ізоляція, перемир'я.\n" +
                        "\n" +
                        "Символізм: фігура лежить на саркофазі, над якою висять три мечі. Четвертий меч лежить під фігурою. Це символізує тимчасове відсторонення від конфлікту, необхідне для ментального відновлення.\n" +
                        "\n" +
                        "Кохання: пауза у стосунках, потреба у просторі для роздумів, одужання після конфлікту.\n" +
                        "\n" +
                        "Кар'єра: відпустка, лікарняний. Час для планування та стратегії, а не для активних дій. Ментальний відпочинок від робочого стресу.\n" +
                        "\n" +
                        "Порада: зупиніться і відпочиньте. Не приймайте важливих рішень, доки повністю не відновите свої сили."},
                {name: "5 МЕЧІВ",
                    img: SWORDS_5,
                    text: "Основне значення: Піррова перемога, поразка, ганьба, конфлікт, що залишає всіх переможених, самоствердження коштом інших.\n" +
                        "\n" +
                        "Символізм: переможець збирає три мечі, тоді як дві фігури йдуть геть, засмучені та переможені. Вираз обличчя переможця не тріумфуючий, а звинувачувальний. Символ моральної поразки.\n" +
                        "\n" +
                        "Кохання: руйнівна сварка, де Ви перемогли, але зруйнували стосунки. Домінування одного партнера над іншим, емоційне знущання.\n" +
                        "\n" +
                        "Кар'єра: конфлікт у колективі, підступність, втрата поваги. Виграш справи, але ціною втрати репутації чи дружніх зв'язків.\n" +
                        "\n" +
                        "Порада: оцініть ціну перемоги. Шукайте компроміс, а не перевагу."},
                {name: "6 МЕЧІВ",
                    img: SWORDS_6,
                    text: "Основне значення: перехід, від'їзд, подорож (часто після труднощів), рух до кращих часів, подолання проблем.\n" +
                        "\n" +
                        "Символізм: фігура перевозить людей (чи принаймні шість мечів) на човні через річку. Вода спереду спокійна, а позаду — бурхлива. Це символізує залишення важкого минулого заради спокійного майбутнього.\n" +
                        "\n" +
                        "Кохання: відхід від токсичних стосунків, перехід на новий етап. Спільний переїзд, що покращує відносини.\n" +
                        "\n" +
                        "Кар'єра: зміна роботи чи відділу, подорож у справах, завершення складного проєкту. Перехідний період у бізнесі.\n" +
                        "\n" +
                        "Порада: рухайтеся вперед. Минулі проблеми залишаються позаду. Не озирайтеся і не повертайтеся до старих, нездорових ситуацій."},
                {name: "7 МЕЧІВ",
                    img: SWORDS_7,
                    text: "Основне значення: обман, хитрість, крадіжка, уникнення відповідальності, діяти потайки, ігнорування проблеми.\n" +
                        "\n" +
                        "Символізм: людина йде геть, несучи п'ять мечів, залишаючи два мечі у землі та озираючись. Це символізує втечу, спробу вкрасти перемогу або отримати вигоду обманним шляхом.\n" +
                        "\n" +
                        "Кохання: обман, невірність, приховування важливої інформації від партнера. Спроба \"втекти\" від зобов'язань. Нечесність у стосунках.\n" +
                        "\n" +
                        "Кар'єра: крадіжка ідей, плагіат, ухилення від виконання обов'язків. Спроба хитрими методами досягти успіху.\n" +
                        "\n" +
                        "Порада: будьте чесними (з собою та іншими). Якщо карта описує вас – припиніть хитрувати. Якщо іншу людину – будьте обережними."},
                {name: "8 МЕЧІВ",
                    img: SWORDS_8,
                    text: "Основне значення: обмеження, ізоляція, відчуття безсилля, самообмеження, страх, пастка.\n" +
                        "\n" +
                        "Символізм: жінка із зав'язаними очима оточена вісьмома мечами, але її ноги не зв'язані, і шлях відкрито. Це символізує, що пастка існує лише в її голові (ментальні обмеження та страх).\n" +
                        "\n" +
                        "Кохання: відчуття задухи та неволі у стосунках. Стосунки, де Ви боїтеся говорити про проблеми, вважаючи, що \"немає виходу\".\n" +
                        "\n" +
                        "Кар'єра: обмеження, накладені корпоративними правилами чи страхом змінити роботу. Ментальний блок, що заважає розвиватися.\n" +
                        "\n" +
                        "Порада: усвідомте, що Ви вільні. Зніміть пов'язку (страх) і пройдіть між мечами (обмеженнями). Змініть своє мислення."},
                {name: "9 МЕЧІВ",
                    img: SWORDS_9,
                    text: "Основне значення: кошмари, тривога, страх, провина, безсоння, глибоке ментальне страждання.\n" +
                        "\n" +
                        "Символізм: фігура сидить на ліжку, обхопивши голову руками, над якою висять дев'ять мечів. Це символізує гостре ментальне страждання та самокатування.\n" +
                        "\n" +
                        "Кохання: глибоке переживання через стосунки, провина за минулі вчинки, страх втрати, тривога. Партнер страждає від нічних кошмарів через стрес.\n" +
                        "\n" +
                        "Кар'єра: високий рівень стресу, страх провалити проєкт, відчуття провини за помилки. Ментальне вигорання.\n" +
                        "\n" +
                        "Порада: зверніться за допомогою. Поділіться своїми страхами та провиною з кимось."},
                {name: "10 МЕЧІВ",
                    img: SWORDS_10,
                    text: "Основне значення: кінець, повне руйнування, неминуча поразка, кульмінація болю, найгірший сценарій, але і початок нового циклу (оскільки гірше вже не буде).\n" +
                        "\n" +
                        "Символізм: фігура лежить на землі, пронизана десятьма мечами. Це графічне зображення повного краху та \"удару в спину\". Світанок на горизонті дає надію.\n" +
                        "\n" +
                        "Кохання: катастрофічний розрив, зрада, що призвела до повного кінця. Стосунки, які \"вбили\". Але це кінець, за яким прийде зцілення.\n" +
                        "\n" +
                        "Кар'єра: банкрутство, звільнення, публічне приниження, найгірший результат проєкту. Потреба почати все з нуля.\n" +
                        "\n" +
                        "Порада: прийміть кінець. Дозвольте ситуації повністю розвалитися, щоб звільнити місце для відновлення. Гірше вже позаду."},
            ],
            courtiersSwords: [
                {name: "ПАЖ МЕЧІВ",
                    img: PAGE_SWORDS,
                    text: "Особистість: допитливий, гострий на язик, енергійний, але недосвідчений. Людина, яка любить сперечатися, часто говорить бездумно. Шпигун чи носій перших, але неперевірених новин.\n" +
                        "\n" +
                        "Символізм: молода людина стоїть на вітряному полі, високо тримаючи меч. Вона озирається, ніби шукає ворога. Символ інтелектуальної цікавості та готовності до боротьби, але браку досвіду.\n" +
                        "\n" +
                        "Значення: нові ідеї, потреба у ясній комунікації. Новини, які можуть бути як правдивими, так і плітками. Початок інтелектуального проєкту чи суперечки.\n" +
                        "\n" +
                        "Порада: говоріть правду, але будьте обережні з тим, що говорите. Спочатку плануйте, а потім дійте. Використовуйте свій гострий розум для дослідження."},
                {name: "РИЦАР МЕЧІВ",
                    img: KNIGHT_SWORDS,
                    text: "Особистість: Імпульсивний, амбітний, швидкий, агресивний, сміливий. Вривається в бій, не думаючи про наслідки. Захисник чи загарбник.\n" +
                        "\n" +
                        "Символізм: лицар мчить галопом із піднятим мечем. Його рух швидкий і безкомпромісний. Символ нестримної енергії, поспіху та агресивного просування ідей.\n" +
                        "\n" +
                        "Значення: швидка дія, конфронтація, несподіваний напад. Різкий, небезпечний рух уперед. Стрімкий, але ризикований розвиток ситуації.\n" +
                        "\n" +
                        "Порада: дійте рішуче, але спочатку подумайте. Зберігайте швидкість, але направте свою енергію стратегічно, щоб уникнути конфлікту, який можна було уникнути."},
                {name: "КОРОЛЕВА МЕЧІВ",
                    img: QUEEN_SWORDS,
                    text: "Особистість: незалежна, прониклива, чесна, пряма і часто саркастична. Вона використовує інтелект без емоцій, бачить правду і не боїться її говорити. Може бути самотньою через свою прямолінійність.\n" +
                        "\n" +
                        "Символізм: королева сидить на троні, високо тримаючи меч. Вона дивиться вперед, її обличчя суворе і вільне від емоцій. Символ інтелектуальної незалежності та чіткості суджень.\n" +
                        "\n" +
                        "Значення: чітке прояснення ситуації. Використання логіки для розрізання плутанини. Потреба відділити емоції від фактів. Отримання чесної, хоча й холодної поради.\n" +
                        "\n" +
                        "Порада: будьте об'єктивними. Використовуйте свій розум, щоб встановити істину, і не дозволяйте почуттям впливати на рішення. Говоріть прямо."},
                {name: "КОРОЛЬ МЕЧІВ",
                    img: KING_SWORDS,
                    text: "Особистість: мудрий, інтелектуальний, авторитетний і справедливий. Це суддя, науковець, стратег чи керівник. Він є втіленням чистої логіки та етичного мислення.\n" +
                        "\n" +
                        "Символізм: король сидить на троні, оточений символами повітря (хмари, птахи), тримаючи меч. Його погляд проникливий та об'єктивний. Символ інтелектуальної влади та мудрого правління.\n" +
                        "\n" +
                        "Значення: мудре, юридичне чи стратегічне рішення. Час для об'єктивної оцінки фактів. Допомога чи порада від авторитетної особи у сфері закону чи науки.\n" +
                        "\n" +
                        "Порада: дійте справедливо та етично. Використовуйте свої знання та логіку для прийняття об'єктивного та далекоглядного рішення."},
            ],
        },

        en: {
            title: "SWORDS",
            defaultCards: "LIST OF CARDS",
            courtiersCards: "COURTIERS",
            meaning: "CARDS MEANING",
            defaultSwords: [
                {name: "ACE OF SWORDS",
                    img: ACE_SWORDS,
                    text: "Main meaning: breakthrough, clarity of thought, power of intellect, sharp truth, beginning of a new idea, victory through reason.\n" +
                        "\n" +
                        "Symbolism: a hand emerging from a cloud holds a straight sword crowned with a crown. This is a symbol of pure, unclouded truth, mental strength and irresistible logic.\n" +
                        "\n" +
                        "Love: a decision to clarify the situation, a frank conversation that may be painful but necessary. Winning an argument. Beginning of a relationship based on intellectual compatibility.\n" +
                        "\n" +
                        "Career: successful resolution of a difficult problem, victory in a court or discussion, a brilliant idea. Beginning of a career that requires a sharp mind.\n" +
                        "\n" +
                        "Advice: act decisively and honestly. Clarify the situation using logic, not emotions. Declare your truth."},
                {name: "2 SWORDS",
                    img: SWORDS_2,
                    text: "Main meaning: denial, blockade, refusal to choose, truce, indecision, emotional self-defense.\n" +
                        "\n" +
                        "Symbolism: The figure sits blindfolded, holding two swords crossed on his chest. This symbolizes blocking the outside world (so as not to see problems) and internal protection from making a decision.\n" +
                        "\n" +
                        "Love: avoiding conflict, indecision about the future of the relationship. Refusal to see the truth about a partner or situation. Blind truce.\n" +
                        "\n" +
                        "Career: stagnation due to the inability to make a decision. Choosing between two equally important options. Avoiding responsibility.\n" +
                        "\n" +
                        "Advice: face the problem head-on and make a decision."},
                {name: "3 SWORDS",
                    img: SWORDS_3,
                    text: "Main meaning: broken heart, pain, loss, sadness, betrayal, disappointment. Mental suffering.\n" +
                        "\n" +
                        "Symbolism: three swords piercing the heart against a cloudy sky. This is a direct symbol of acute emotional pain caused by words or actions.\n" +
                        "\n" +
                        "Love: divorce, breakup, betrayal. Acute feeling of loss and deep sadness. The need to experience pain in order to move on.\n" +
                        "\n" +
                        "Career: dismissal, loss of a project, bitter disappointment in colleagues or partners. Painful criticism.\n" +
                        "\n" +
                        "Advice: accept your pain. Allow yourself to experience the loss without suppressing it, but without completely immersing yourself in it. Healing will come with time."},
                {name: "4 SWORDS",
                    img: SWORDS_4,
                    text: "Main meaning: rest, recovery, convalescence, meditation, temporary isolation, truce.\n" +
                        "\n" +
                        "Symbolism: The figure lies on a sarcophagus, above which hang three swords. A fourth sword lies under the figure. This symbolizes a temporary withdrawal from the conflict, necessary for mental recovery.\n" +
                        "\n" +
                        "Love: a pause in a relationship, the need for space for reflection, recovery from a conflict.\n" +
                        "\n" +
                        "Career: vacation, sick leave. Time for planning and strategy, not for active actions. Mental rest from work stress.\n" +
                        "\n" +
                        "Advice: stop and rest. Do not make important decisions until you have fully recovered."},
                {name: "5 SWORDS",
                    img: SWORDS_5,
                    text: "Main meaning: Pyrrhic victory, defeat, shame, conflict that leaves everyone defeated, self-affirmation at the expense of others.\n" +
                        "\n" +
                        "Symbolism: the winner collects the three swords, while the two figures walk away, sad and defeated. The expression on the winner's face is not triumphant, but accusatory. A symbol of moral defeat.\n" +
                        "\n" +
                        "Love: a destructive quarrel, where you won, but destroyed the relationship. Dominance of one partner over the other, emotional abuse.\n" +
                        "\n" +
                        "Career: conflict in the team, deceit, loss of respect. Winning a case, but at the cost of losing reputation or friendships.\n" +
                        "\n" +
                        "Advice: assess the price of victory. Seek compromise, not advantage."},
                {name: "6 SWORDS",
                    img: SWORDS_6,
                    text: "Main meaning: transition, departure, journey (often after difficulties), movement towards better times, overcoming problems.\n" +
                        "\n" +
                        "Symbolism: The figure is transporting people (or at least the Six of Swords) in a boat across a river. The water is calm in front, and turbulent behind. This symbolizes leaving behind a difficult past for a peaceful future.\n" +
                        "\n" +
                        "Love: leaving behind a toxic relationship, moving on to a new stage. Moving together, improving relationships.\n" +
                        "\n" +
                        "Career: changing jobs or departments, traveling on business, completing a difficult project. A transitional period in business.\n" +
                        "\n" +
                        "Advice: Move forward. Past problems are left behind. Don't look back and don't return to old, unhealthy situations."},
                {name: "7 SWORDS",
                    img: SWORDS_7,
                    text: "Main meaning: deception, cunning, theft, avoiding responsibility, acting secretly, ignoring the problem.\n" +
                        "\n" +
                        "Symbolism: a person walks away carrying the Five of Swords, leaving the Two of Swords in the ground and looking back. This symbolizes escape, an attempt to steal victory or gain benefit by deception.\n" +
                        "\n" +
                        "Love: deception, infidelity, hiding important information from a partner. Attempting to \"escape\" from obligations. Dishonesty in relationships.\n" +
                        "\n" +
                        "Career: stealing ideas, plagiarism, evading duties. Attempting to achieve success by cunning methods.\n" +
                        "\n" +
                        "Advice: be honest (with yourself and others). If the card describes you - stop being cunning. If another person - be careful."},
                {name: "8 SWORDS",
                    img: SWORDS_8,
                    text: "Main meaning: limitation, isolation, feeling powerless, self-limitation, fear, trap.\n" +
                        "\n" +
                        "Symbolism: A blindfolded woman is surrounded by eight swords, but her legs are not tied, and the path is open. This symbolizes that the trap exists only in her head (mental limitations and fear).\n" +
                        "\n" +
                        "Love: Feeling suffocated and trapped in a relationship. A relationship where you are afraid to talk about problems, believing that there is \"no way out\".\n" +
                        "\n" +
                        "Career: Restrictions imposed by corporate rules or fear of changing jobs. A mental block that prevents development.\n" +
                        "\n" +
                        "Advice: Realize that you are free. Remove the blindfold (fear) and walk between the swords (limitations). Change your thinking."},
                {name: "9 SWORDS",
                    img: SWORDS_9,
                    text: "Main meaning: nightmares, anxiety, fear, guilt, insomnia, deep mental suffering.\n" +
                        "\n" +
                        "Symbolism: The figure sits on a bed with his hands clasped around his head, above which hang nine swords. This symbolizes acute mental suffering and self-torture.\n" +
                        "\n" +
                        "Love: Deep emotions due to a relationship, guilt for past actions, fear of loss, anxiety. Partner suffers from nightmares due to stress.\n" +
                        "\n" +
                        "Career: High stress levels, fear of failing a project, guilt for mistakes. Mental burnout.\n" +
                        "\n" +
                        "Advice: Seek help. Share your fears and guilt with someone."},
                {name: "10 SWORDS",
                    img: SWORDS_10,
                    text: "Main meaning: the end, complete destruction, inevitable defeat, the culmination of pain, the worst-case scenario, but also the beginning of a new cycle (since it can't get any worse).\n" +
                        "\n" +
                        "Symbolism: a figure lying on the ground, pierced by ten swords. This is a graphic representation of complete collapse and a \"stab in the back\". The dawn on the horizon gives hope.\n" +
                        "\n" +
                        "Love: a catastrophic breakup, betrayal that led to a complete end. A relationship that \"killed\". But this is the end, after which healing will come.\n" +
                        "\n" +
                        "Career: bankruptcy, dismissal, public humiliation, the worst outcome of a project. The need to start all over again.\n" +
                        "\n" +
                        "Advice: accept the end. Allow the situation to completely fall apart to make room for recovery. The worst is behind you."},
            ],
            courtiersSwords: [
                {name: "PAGE OF SWORDS",
                    img: PAGE_SWORDS,
                    text: "Personality: Inquisitive, sharp-tongued, energetic, but inexperienced. A person who likes to argue, often speaks thoughtlessly. A spy or bearer of first-hand but unverified news.\n" +
                        "\n" +
                        "Symbolism: A young man stands in a windy field, holding his sword high. He looks around as if searching for an enemy. A symbol of intellectual curiosity and readiness to fight, but lack of experience.\n" +
                        "\n" +
                        "Meaning: New ideas, the need for clear communication. News that can be both true and gossip. The beginning of an intellectual project or argument.\n" +
                        "\n" +
                        "Advice: Tell the truth, but be careful what you say. Plan first, then act. Use your sharp mind to research."},
                {name: "KNIGHT OF SWORDS",
                    img: KNIGHT_SWORDS,
                    text: "Personality: Impulsive, ambitious, fast, aggressive, bold. Charges into battle without thinking about the consequences. Defender or invader.\n" +
                        "\n" +
                        "Symbolism: A knight gallops with his sword raised. His movement is fast and uncompromising. A symbol of unbridled energy, haste, and aggressive advancement of ideas.\n" +
                        "\n" +
                        "Meaning: Quick action, confrontation, unexpected attack. A sharp, dangerous move forward. A rapid but risky development of the situation.\n" +
                        "\n" +
                        "Advice: Act decisively, but think first. Maintain speed, but direct your energy strategically to avoid avoidable conflict."},
                {name: "QUEEN OF SWORDS",
                    img: QUEEN_SWORDS,
                    text: "Personality: Independent, insightful, honest, direct, and often sarcastic. She uses intellect without emotion, sees the truth, and is not afraid to speak it. Can be lonely because of her straightforwardness.\n" +
                        "\n" +
                        "Symbolism: The queen sits on a throne, holding her sword high. She looks straight ahead, her face stern and free of emotion. Symbol of intellectual independence and clarity of judgment.\n" +
                        "\n" +
                        "Meaning: Clear clarification of a situation. Using logic to cut through confusion. Need to separate emotions from facts. Receiving honest, if cold, advice.\n" +
                        "\n" +
                        "Advice: Be objective. Use your mind to establish the truth, and don't let feelings influence decisions. Speak directly."},
                {name: "KING OF SWORDS",
                    img: KING_SWORDS,
                    text: "Personality: Wise, intellectual, authoritative, and just. He is a judge, scholar, strategist, or leader. He is the embodiment of pure logic and ethical thinking.\n" +
                        "\n" +
                        "Symbolism: The king sits on a throne surrounded by symbols of air (clouds, birds), holding a sword. His gaze is penetrating and objective. A symbol of intellectual power and wise rule.\n" +
                        "\n" +
                        "Meaning: A wise, legal, or strategic decision. Time for an objective assessment of the facts. Help or advice from an authority figure in the field of law or science.\n" +
                        "\n" +
                        "Advice: Act fairly and ethically. Use your knowledge and logic to make an objective and far-sighted decision."},
            ],
        }
    }

    const {
        title,
        defaultCards,
        courtiersCards,
        meaning,
        defaultSwords,
        courtiersSwords,
    } = content[language];

    return(
        <div
            className="font-tarot"
            style={{
                backgroundImage: `url(${SWORDS_BACKGROUND_IMG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <section
                className="relative h-[677px] flex items-center overflow-hidden"
                style={{
                    backgroundImage: `url(${SWORDS_HERO_BACKGROUND_IMG})`,
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
                        src={GROUP_SWORDS}
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
                        {defaultSwords.map((card, index) => (
                            <a
                                href={`#default-sword-${index}`}
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
                        {courtiersSwords.map((card, index) => (
                            <a
                                href={`#courtier-sword-${index}`}
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
                        {defaultSwords.map((card, index) => (
                            <div
                                id={`default-sword-${index}`}
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

                        {courtiersSwords.map((card, index) => (
                            <div
                                id={`courtier-sword-${index}`}
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