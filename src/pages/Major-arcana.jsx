import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LanguageContext } from '../Language';

import MAJOR_ARCANA_BACKGROUND_IMG from '../assets/images/major arcana page/arcanas_page_background.png';
import MAJOR_ARCANA_HERO_BACKGROUND_IMG from '../assets/images/major arcana page/hero-background-arcanas.png';
import GROUP_ARCANA from '../assets/images/major arcana page/Group_arcanas.png';
import ARCANA_THE_FOOL from '../assets/images/arcana/00-TheFool.png';
import ARCANA_THE_MAGICIAN from '../assets/images/arcana/01-TheMagician.png';
import ARCANA_THE_HIGH_PRIESTESS from '../assets/images/arcana/02-TheHighPriestess.png';
import ARCANA_THE_EMPRESS from '../assets/images/arcana/03-TheEmpress.png';
import ARCANA_THE_EMPEROR from '../assets/images/arcana/04-TheEmperor.png';
import ARCANA_THE_HIEROPHANT from '../assets/images/arcana/05-TheHierophant.png';
import ARCANA_THE_LOVERS from '../assets/images/arcana/06-TheLovers.png';
import ARCANA_THE_CHARIOT from '../assets/images/arcana/07-TheChariot.png';
import ARCANA_STRENGTH from '../assets/images/arcana/08-Strength.png';
import ARCANA_THE_HERMIT from '../assets/images/arcana/09-TheHermit.png';
import ARCANA_WHEEL_OF_FORTUNE from '../assets/images/arcana/10-WheelOfFortune.png';
import ARCANA_JUSTICE from '../assets/images/arcana/11-Justice.png';
import ARCANA_THE_HANGED_MAN from '../assets/images/arcana/12-TheHangedMan.png';
import ARCANA_DEATH from '../assets/images/arcana/13-Death.png';
import ARCANA_TEMPERANCE from '../assets/images/arcana/14-Temperance.png';
import ARCANA_THE_DEVIL from '../assets/images/arcana/15-TheDevil.png';
import ARCANA_THE_TOWER from '../assets/images/arcana/16-TheTower.png';
import ARCANA_THE_STAR from '../assets/images/arcana/17-TheStar.png';
import ARCANA_THE_MOON from '../assets/images/arcana/18-TheMoon.png';
import ARCANA_THE_SUN from '../assets/images/arcana/19-TheSun.png';
import ARCANA_JUDGEMENT from '../assets/images/arcana/20-Judgement.png';
import ARCANA_THE_WORLD from '../assets/images/arcana/21-TheWorld.png';

export default function MajorArcana() {
    const { language } = useContext(LanguageContext);
    const { hash } = useLocation();

    const arcanaID = [
        "the-fool", "the-magician", "the-high-priestess", "the-empress",
        "the-emperor", "the-hierophant", "the-lovers", "the-chariot",
        "strength", "the-hermit", "wheel-of-fortune", "justice",
        "the-hanged-man", "death", "temperance", "the-devil",
        "the-tower", "the-star", "the-moon", "the-sun",
        "judgement", "the-world"
    ];

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

    const content = {
        ua: {
            title: "СТАРШІ АРКАНИ",
            defaultCards: "ПЕРЕЛІК КАРТ",
            meaning: "ЗНАЧЕННЯ КАРТ",
            majorArcana: [
                {name: "0 - ДУРЕНЬ",
                    img: ARCANA_THE_FOOL,
                    text: "Особистість: новачок, мрійник, авантюрист. Людина, вільна від стереотипів, готова на ризик. Може бути наївною, але має відкриту душу.\n" +
                        "\n" +
                        "Символізм: юнак стоїть на краю прірви, дивлячись у небо. З ним маленький собака (інстинкт). Біла троянда в руці — символ чистоти помислів.\n" +
                        "\n" +
                        "Значення: новий початок \"з нуля\", несподіваний поворот, стрибок віри. Обнулення ситуації, свобода від зобов'язань.\n" +
                        "\n" +
                        "Кохання: початок нових, непередбачуваних стосунків. Відсутність зобов'язань, легкий флірт. Стрибок у невідоме з партнером. \n" +
                        "\n" +
                        "Порада: довіртеся Всесвіту. Не бійтеся починати спочатку. Будьте відкриті до пригод, але дивіться під ноги."},

                {name: "1 - МАГ",
                    img: ARCANA_THE_MAGICIAN,
                    text:"Особистість: майстер, лідер, маніпулятор (в хорошому сенсі). Людина, яка має всі ресурси для досягнення мети. Професіонал.\n" +
                        "\n" +
                        "Символізм: над головою знак нескінченності. На столі всі чотири масті (ресурси). Одна рука до неба, інша до землі — провідник волі.\n" +
                        "\n" +
                        "Значення: матеріалізація ідей, прояв волі, активна дія. Можливість змінити реальність своїми руками. Успіх у починаннях.\n" +
                        "\n" +
                        "Кохання: активне завоювання. Ініціатива в руках партнера.  Здатність змінити стосунки на краще силою волі.\n" +
                        "\n" +
                        "Порада: у вас є все необхідне. Дійте впевнено. Використовуйте свій розум і таланти, щоб досягти бажаного."},

                {name: "2 - ВЕРХОВНА ЖРИЦЯ",
                    img: ARCANA_THE_HIGH_PRIESTESS,
                    text: "Особистість: інтуїт, загадкова жінка, вчитель. Та, хто знає таємниці. Емоційно стримана, але глибока особа.\n" +
                        "\n" +
                        "Символізм:  жінка сидить між двома колонами (світло і темрява). У руках сувій \"Тора\" (знання). Місяць у ногах — символ підсвідомості.\n" +
                        "\n" +
                        "Значення: таємниця, інтуїція, пасивне очікування. Знання, які ще не відкриті. Потреба прислухатися до внутрішнього голосу.\n" +
                        "\n" +
                        "Кохання: глибокий платонічний зв'язок або приховані почуття. Період очікування. Можлива наявність таємниці чи \"третьої особи\".\n" +
                        "\n" +
                        "Порада: не поспішайте діяти. Довіртеся передчуттям. Зберігайте свої плани в таємниці та спостерігайте."},

                {name: "3 - ІМПЕРАТРИЦЯ",
                    img: ARCANA_THE_EMPRESS,
                    text: "Особистість: мати, кохана, творча особистість. Жінка, що дарує життя, затишок і красу. Втілення жіночності та родючості.\n" +
                        "\n" +
                        "Символізм: жінка сидить у квітучому саду на м'яких подушках. Скіпетр і корона з 12 зірок. Щит у формі серця з символом Венери.\n" +
                        "\n" +
                        "Значення: розквіт, достаток, вагітність (у всіх сенсах), творчість, природа. Матеріальний добробут і комфорт.\n" +
                        "\n" +
                        "Кохання: розквіт почуттів, шлюб, вагітність. Стосунки, сповнені тепла, турботи та сексуального задоволення.\n" +
                        "\n" +
                        "Порада: творіть і примножуйте. Дбайте про красу і комфорт. Дозвольте ситуації розвиватися природним шляхом."},

                { name: "4 - ІМПЕРАТОР",
                    img: ARCANA_THE_EMPEROR,
                    text: "Особистість: батько, керівник, захисник. Людина структури, закону та порядку. Авторитетна і владна фігура.\n" +
                        "\n" +
                        "Символізм:  суворий чоловік на кам'яному троні, прикрашеному головами баранів (Овен). В руках анкх (влада над життям).\n" +
                        "\n" +
                        "Значення: дисципліна, контроль, стабільність, державні структури, закон. Побудова фундаменту та логічний підхід.\n" +
                        "\n" +
                        "Кохання: стабільність і патріархат. Партнер, що забезпечує захист, але вимагає підпорядкування. Міцний, надійний шлюб.\n" +
                        "\n" +
                        "Порада: наведіть лад. Будьте твердими у своїх рішеннях. Візьміть на себе відповідальність за ситуацію."},

                { name: "5 - ІЄРОФАНТ",
                    img: ARCANA_THE_HIEROPHANT,
                    text:"Особистість: вчитель, традиціоналіст. Моральний авторитет, який дотримується правил та обрядів. Консерватор.\n" +
                        "\n" +
                        "Символізм: папська корона, потрійний хрест. Учні біля ніг. Жест благословення — передача традиції.\n" +
                        "\n" +
                        "Значення: традиції, освіта, віра. Соціальні норми та правила. Пошук сенсу.\n" +
                        "\n" +
                        "Кохання: класичний шлюб, вінчання. Стосунки, засновані на спільних цінностях і моралі, а не на пристрасті.\n" +
                        "\n" +
                        "Порада: дотримуйтеся правил. Зверніться до традицій або за порадою до досвідченої людини."},

                { name: "6 - ЗАКОХАНІ",
                    img: ARCANA_THE_LOVERS,
                    text: "Особистість: партнер, кохана людина. Людина, яка стоїть перед вибором серця або шукає гармонію між протилежностями.\n" +
                        "\n" +
                        "Символізм: Адам і Єва під благословенням ангела. Дерево життя і Дерево пізнання. Гора на фоні — символ високої мети та духовного росту.\n" +
                        "\n" +
                        "Значення: вибір, кохання, партнерство, союзи. Гармонія між розумом і серцем.\n" +
                        "\n" +
                        "Кохання: сильне тяжіння, закоханість, вибір партнера. Соціально схвалений союз. Важливість щирості та відкритості у відносинах.\n" +
                        "\n" +
                        "Порада: слухайте серце. Обирайте те, що відповідає вашим цінностям. Будуйте зв'язки на основі взаємодовіри."},

                { name: "7 - КОЛІСНИЦЯ",
                    img: ARCANA_THE_CHARIOT,
                    text: "Особистість: переможець, водій. Людина з величезною волею, дисциплінована, амбітна, яка тримає життя під контролем.\n" +
                        "\n" +
                        "Символізм: візник керує чорним і білим сфінксами. Це символ управління протилежними силами (емоціями та розумом) задля руху вперед.\n" +
                        "\n" +
                        "Значення: тріумф, прорив, переїзд, контроль над хаосом. Перемога через зусилля та волю.\n" +
                        "\n" +
                        "Кохання: завоювання об'єкта любові, стрімкий розвиток подій. Партнери можуть боротися за лідерство у стосунках. Спільна поїздка.\n" +
                        "\n" +
                        "Порада: тільки вперед! Візьміть емоції під контроль і цілеспрямовано рухайтеся до своєї перемоги. Не зупиняйтеся."},

                { name: "8 - СИЛА",
                    img: ARCANA_STRENGTH,
                    text: "Особистість: впевнена, терпляча людина. Той, хто вміє приборкувати власні інстинкти та емоції не грубою силою, а м'якістю.\n" +
                        "\n" +
                        "Символізм: жінка м'яко закриває пащу лева. Над її головою знак нескінченності. Біла сукня — символ чистоти помислів.\n" +
                        "\n" +
                        "Значення: внутрішня сила, м'яка влада, приборкання пристрастей, здоров'я, впевненість.\n" +
                        "\n" +
                        "Кохання: пристрасть під контролем. Глибока прихильність, терпіння до недоліків партнера. Вміння знайти підхід до \"складної\" людини.\n" +
                        "\n" +
                        "Порада: проявіть терпіння та м'якість. Груба сила зараз не допоможе — дійте любов'ю та стійкістю."},

                { name: "9 - ВІДЛЮДНИК",
                    img: ARCANA_THE_HERMIT,
                    text: "Особистість: мудрець, одинак, філософ. Людина, яка шукає істину всередині себе, а не в зовнішньому світі.\n" +
                        "\n" +
                        "Символізм: старець із ліхтарем (світло знань) та посохом (опора на досвід). Він стоїть на вершині гори, що символізує досягнення мудрості.\n" +
                        "\n" +
                        "Значення: пошук істини, самота, мудрість, самопізнання, відстороненість від суєти.\n" +
                        "\n" +
                        "Кохання: самотність удвох або період усвідомленої самотності. Переоцінка стосунків. Відстороненість заради пошуку істини.\n" +
                        "\n" +
                        "Порада: знайдіть час для себе. Відійдіть від справ, щоб подумати. Відповіді на ваші запитання — всередині вас."},

                { name: "10 - КОЛЕСО ФОРТУНИ",
                    img: ARCANA_WHEEL_OF_FORTUNE,
                    text: "Особистість: щасливчик або людина фатуму. Той, хто опинився в центрі важливих змін. Людина, яка вірить у долю.\n" +
                        "\n" +
                        "Символізм: колесо з фігурами, що підіймаються та падають. Сфінкс нагорі — стабільність посеред змін. Чотири крилаті істоти — знання Всесвіту.\n" +
                        "\n" +
                        "Значення: циклічність, доля, удача, зміни, неминучість подій. Везіння.\n" +
                        "\n" +
                        "Кохання: кармічна зустріч, несподіваний поворот у долі. Стосунки, на які ви не можете вплинути — все вирішує випадок.\n" +
                        "\n" +
                        "Порада: прийміть зміни. Не намагайтеся зупинити Колесо — довіртеся долі, зараз час змін на краще."},

                { name: "11 - СПРАВЕДЛИВІСТЬ",
                    img: ARCANA_JUSTICE,
                    text: "Особистість: суддя, юрист, чесна людина. Той, хто зважує кожен крок і несе відповідальність за свої вчинки.\n" +
                        "\n" +
                        "Символізм: фігура з терезами (баланс) та мечем (рішення). Вона сидить між колонами. Погляд прямий — символ об'єктивності.\n" +
                        "\n" +
                        "Значення: закон, відповідальність, рівновага, причинно-наслідкові зв'язки (карма).\n" +
                        "\n" +
                        "Кохання: офіційний шлюб або розлучення. Чесний розподіл обов'язків. Ви отримуєте від партнера те, що самі вклали.\n" +
                        "\n" +
                        "Порада: будьте об'єктивними. Зважте всі \"за\" і \"проти\". Пам'ятайте: що посієте, те й пожнете."},

                { name: "12 - ПОВІШАНИЙ",
                    img: ARCANA_THE_HANGED_MAN,
                    text: "Особистість: мислитель, жертва обставин. Людина, яка бачить світ інакше або свідомо пішла на обмеження заради вищої мети.\n" +
                        "\n" +
                        "Символізм: чоловік висить догори ногами, але його обличчя спокійне. Навколо голови — німб (осяяння). Це символ нового погляду та добровільної жертви.\n" +
                        "\n" +
                        "Значення: призупинення, переосмислення, жертовність, погляд з іншої перспективи, очікування.\n" +
                        "\n" +
                        "Кохання: застій у стосунках, стан невизначеності. Необхідність чимось пожертвувати заради партнера. Період \"заморозки\" почуттів для переосмислення.\n" +
                        "\n" +
                        "Порада: зупиніться і нічого не робіть. Зараз не час для активних дій. Змініть свій погляд на ситуацію — рішення прийде через спокій."},

                { name: "13 - СМЕРТЬ",
                    img: ARCANA_DEATH,
                    text: "Особистість: трансформатор, людина змін. Той, хто вміє безжально відсікати старе, щоб звільнити місце для нового.\n" +
                        "\n" +
                        "Символізм: скелет у доспехах на коні. Перед ним падають і королі, і діти. На фоні — сонце, що сходить. Це символ неминучого кінця, який веде до відродження.\n" +
                        "\n" +
                        "Значення: трансформація, завершення, глибокі зміни, прощання з минулим, новий цикл.\n" +
                        "\n" +
                        "Кохання: кінець етапу або розрив. Болісна, але необхідна трансформація стосунків. Відмирання старих почуттів для народження чогось нового.\n" +
                        "\n" +
                        "Порада: не тримайтеся за минуле. Тільки закривши одні двері, ви зможете побачити ті, що відкриваються попереду."},

                { name: "14 - ПОМІРНІСТЬ",
                    img: ARCANA_TEMPERANCE,
                    text: "Особистість: миротворець, цілитель, дипломат. Людина спокійна, гармонійна, яка вміє знаходити \"золоту середину\".\n" +
                        "\n" +
                        "Символізм: ангел переливає воду з однієї чаші в іншу. Одна нога на землі, інша у воді. Символ балансу між духовним та матеріальним.\n" +
                        "\n" +
                        "Значення: баланс, міра, терпіння, зцілення, компроміс, адаптація.\n" +
                        "\n" +
                        "Кохання: гармонія, спокій, примирення. Стосунки, засновані на терпінні та взаєморозумінні. Емоційне зцілення після кризи.\n" +
                        "\n" +
                        "Порада: дотримуйтеся міри. Уникайте крайнощів. Будьте терплячими і шукайте внутрішню рівновагу — час працює на вас."},

                { name: "15 - ДИЯВОЛ",
                    img: ARCANA_THE_DEVIL,
                    text: "Особистість: спокусник, маніпулятор. Людина, одержима пристрастями, грошима або владою. Може бути дуже харизматичною, але небезпечною.\n" +
                        "\n" +
                        "Символізм: диявол на камені, до якого ланцюгами прикуті люди. Ланцюги висять вільно — люди можуть піти, але не хочуть. Символ залежності та матеріальних спокус.\n" +
                        "\n" +
                        "Значення: залежність, матеріалізм, тіньові сторони, спокуси, неволя, пристрасть.\n" +
                        "\n" +
                        "Кохання: фатальна пристрасть, залежність, секс без любові. Токсичні стосунки, з яких важко вийти. Ревнощі та маніпуляції.\n" +
                        "\n" +
                        "Порада: усвідомте свою залежність. Настав час звільнитися від того, що вас руйнує."},

                { name: "16 - ВЕЖА",
                    img: ARCANA_THE_TOWER,
                    text: "Особистість: руйнівник основ. Людина, яка переживає глибокий шок або сама провокує радикальні зміни через правду.\n" +
                        "\n" +
                        "Символізм: блискавка влучає у вежу, люди падають вниз. Це символ краху ілюзій та раптового, неконтрольованого руйнування старого життя.\n" +
                        "\n" +
                        "Значення: хаос, катастрофа, прозріння, вивільнення енергії через руйнування, раптова зміна.\n" +
                        "\n" +
                        "Кохання: раптовий розрив, скандал, правда, що випливла назовні. Крах надій. Важке, але очищуюче розставання.\n" +
                        "\n" +
                        "Порада: дозвольте старому впасти. Не намагайтеся врятувати те, що вже руйнується. Будуйте нове на міцнішому фундаменті."},

                { name: "17 - ЗІРКА",
                    img: ARCANA_THE_STAR,
                    text: "Особистість: натхненник, оптиміст. Людина з чистою душею, яка вірить у краще та дарує надію іншим.\n" +
                        "\n" +
                        "Символізм: оголена жінка виливає воду на землю і в ставок під сяйвом восьми зірок. Це символ відкритості, надії та космічного спокою.\n" +
                        "\n" +
                        "Значення: надія, віра, зцілення, натхнення, спокій після шторму, ясне майбутнє.\n" +
                        "\n" +
                        "Кохання: романтичні мрії, надія на майбутнє. Платонічна любов або зцілення серця після \"Вежі\". Віра в ідеального партнера.\n" +
                        "\n" +
                        "Порада: вірте у свою мрію. Зараз час надії та відновлення. Будьте щирими та відкритими до світу — Всесвіт вас підтримує."},

                { name: "18 - МІСЯЦЬ",
                    img: ARCANA_THE_MOON,
                    text: "Особистість: творча, але тривожна людина. Той, хто має сильну інтуїцію, але часто піддається страхам, ілюзіям або бачить світ через призму своїх фантазій.\n" +
                        "\n" +
                        "Символізм: місяць, що плаче, собака і вовк (дике та приручене), рак, що виходить із води. Це символ підсвідомості, прихованих небезпек та блукання в сутінках душі.\n" +
                        "\n" +
                        "Значення: ілюзії, підсвідомі страхи, приховані вороги, інтуїція, плутанина, невідомість.\n" +
                        "\n" +
                        "Кохання: стосунки, в яких багато недомовок або ілюзій. Можлива зрада чи страх бути покинутим. Період емоційної нестабільності.\n" +
                        "\n" +
                        "Порада: будьте обережні. Не все є тим насправді. Довіряйте інтуїції, але не приймайте важливих рішень, доки не розсіється туман."},

                { name: "19 - СОНЦЕ",
                    img: ARCANA_THE_SUN,
                    text: "Особистість: харизматична, успішна, життєрадісна людина. Дитяча безпосередність, щирість, велич і впевненість у власних силах.\n" +
                        "\n" +
                        "Символізм: дитина на білому коні під величезним сяючим сонцем. Соняшники за парканом. Це символ абсолютного щастя, ясності, істини та тріумфу життя.\n" +
                        "\n" +
                        "Значення: успіх, радість, життєва енергія, ясність, тепло, тріумф, здоров'я та оптимізм.\n" +
                        "\n" +
                        "Кохання: щасливий союз, народження дитини, повна прозорість у стосунках. Велика радість, тепло, взаємна підтримка та процвітання пари.\n" +
                        "\n" +
                        "Порада: використовуйте свій успіх, щоб зігрівати інших. Зараз час пожинати плоди своєї праці та насолоджуватися життям на повну."},

                { name: "20 - СТРАШНИЙ СУД",
                    img: ARCANA_JUDGEMENT,
                    text: "Особистість: людина, що переродилася. Той, хто пройшов через серйозні випробування і вийшов з них з новим розумінням життя.\n" +
                        "\n" +
                        "Символізм: ангел сурмить у сурму, люди встають із трун. Це символ пробудження, звільнення від минулого та заклику до нового життя.\n" +
                        "\n" +
                        "Значення: відродження, заклик, прощення, підбиття підсумків, звільнення, кармічна розв'язка.\n" +
                        "\n" +
                        "Кохання: важливий переломний момент. Прийняття остаточного рішення (одружитися або розійтися назавжди). Повернення колишніх або прощення старих образ.\n" +
                        "\n" +
                        "Порада: прислухайтеся до заклику. Минуле більше не має влади над вами. Настав час прийняти важливе рішення і почати новий розділ свого життя."},

                { name: "21 - СВІТ",
                    img: ARCANA_THE_WORLD,
                    text: "Особистість: цілісна, реалізована особистість. Людина, яка знайшла своє місце у світі, відчуває гармонію та єдність із Всесвітом.\n" +
                        "\n" +
                        "Символізм: фігура в лавровому вінку, оточена символами чотирьох стихій. Це символ завершення великого циклу, досконалості та абсолютного успіху.\n" +
                        "\n" +
                        "Значення: завершення, цілісність, подорожі, гармонія, досягнення мети, всесвітній успіх.\n" +
                        "\n" +
                        "Кохання: досконалий союз, гармонія, повне взаєморозуміння. Можливий переїзд за кордон або шлюб з іноземцем.\n" +
                        "\n" +
                        "Порада: ви досягли мети. Насолоджуйтеся моментом тріумфу та цілісності. Ви на своєму місці, світ відкритий для вас — святкуйте свою перемогу."},
            ],
        },

        en: {
            title: "MAJOR ARCANA",
            defaultCards: "LIST OF CARDS",
            meaning: "CARDS MEANING",
            majorArcana: [
                {name: "0 - THE FOOL",
                    img: ARCANA_THE_FOOL,
                    text: "Personality: beginner, dreamer, adventurer. A person free from stereotypes, ready to take risks. Can be naive, but has an open soul.\n" +
                        "\n" +
                        "Symbolism: a young man stands on the edge of an abyss, looking into the sky. With him is a small dog (instinct). A white rose in his hand is a symbol of purity of thoughts.\n" +
                        "\n" +
                        "Meaning: a new beginning \"from scratch\", an unexpected turn, a leap of faith. Zeroing the situation, freedom from obligations.\n" +
                        "\n" +
                        "Love: the beginning of a new, unpredictable relationship. No obligations, light flirting. A leap into the unknown with a partner. \n" +
                        "\n" +
                        "Advice: trust the Universe. Don't be afraid to start over. Be open to adventures, but look under your feet."},

                {name: "1 - THE MAGICIAN",
                    img: ARCANA_THE_MAGICIAN,
                    text:"Personality: master, leader, manipulator (in a good way). A person who has all the resources to achieve the goal. Professional.\n" +
                        "\n" +
                        "Symbolism: infinity sign above the head. All four suits (resources) on the table. One hand to the sky, the other to the ground - the conductor of will.\n" +
                        "\n" +
                        "Meaning: materialization of ideas, manifestation of will, active action. The ability to change reality with your own hands. Success in undertakings.\n" +
                        "\n" +
                        "Love: active conquest. Initiative in the hands of a partner. The ability to change relationships for the better by force of will.\n" +
                        "\n" +
                        "Advice: you have everything you need. Act confidently. Use your mind and talents to achieve what you want."},

                {name: "2 - THE HIGH PRIESTESS",
                    img: ARCANA_THE_HIGH_PRIESTESS,
                    text: "Personality: intuitive, mysterious woman, teacher. One who knows secrets. Emotionally reserved, but deep person.\n" +
                        "\n" +
                        "Symbolism: a woman sits between two columns (light and darkness). In her hands is a scroll of \"Torah\" (knowledge). The moon at her feet is a symbol of the subconscious.\n" +
                        "\n" +
                        "Meaning: mystery, intuition, passive waiting. Knowledge that has not yet been discovered. The need to listen to the inner voice.\n" +
                        "\n" +
                        "Love: a deep platonic connection or hidden feelings. A period of waiting. There may be a secret or a \"third person\".\n" +
                        "\n" +
                        "Advice: do not rush to act. Trust your intuition. Keep your plans secret and observe."},

                {name: "3 - THE EMPRESS",
                    img: ARCANA_THE_EMPRESS,
                    text: "Personality: mother, beloved, creative personality. A woman who gives life, comfort and beauty. The embodiment of femininity and fertility.\n" +
                        "\n" +
                        "Symbolism: a woman sitting in a blooming garden on soft pillows. Scepter and crown of 12 stars. Heart-shaped shield with the symbol of Venus.\n" +
                        "\n" +
                        "Meaning: prosperity, abundance, pregnancy (in all senses), creativity, nature. Material well-being and comfort.\n" +
                        "\n" +
                        "Love: the flowering of feelings, marriage, pregnancy. Relationships full of warmth, care and sexual pleasure.\n" +
                        "\n" +
                        "Advice: create and multiply. Take care of beauty and comfort. Let the situation develop naturally."},

                { name: "4 - THE EMPEROR",
                    img: ARCANA_THE_EMPEROR,
                    text: "Personality: father, leader, protector. A man of structure, law and order. An authoritative and powerful figure.\n" +
                        "\n" +
                        "Symbolism: a stern man on a stone throne decorated with rams' heads (Aries). In the hands of an ankh (power over life).\n" +
                        "\n" +
                        "Meaning: discipline, control, stability, state structures, law. Building a foundation and a logical approach.\n" +
                        "\n" +
                        "Love: stability and patriarchy. A partner who provides protection but requires submission. A strong, reliable marriage.\n" +
                        "\n" +
                        "Advice: restore order. Be firm in your decisions. Take responsibility for the situation."},

                { name: "5 - THE HIEROPHANT",
                    img: ARCANA_THE_HIEROPHANT,
                    text:"Personality: Teacher, traditionalist. Moral authority who follows rules and rituals. Conservative.\n" +
                        "\n" +
                        "Symbolism: Papal crown, triple cross. Disciples at feet. Gesture of blessing - transmission of tradition.\n" +
                        "\n" +
                        "Meaning: Traditions, education, faith. Social norms and rules. Search for meaning.\n" +
                        "\n" +
                        "Love: Classic marriage, wedding. Relationships based on shared values and morality, not passion.\n" +
                        "\n" +
                        "Advice: Follow the rules. Turn to traditions or to an experienced person for advice."},

                { name: "6 - THE LOVERS",
                    img: ARCANA_THE_LOVERS,
                    text: "Personality: partner, loved one. A person facing a choice of the heart or seeking harmony between opposites.\n" +
                        "\n" +
                        "Symbolism: Adam and Eve under the blessing of an angel. The Tree of Life and the Tree of Knowledge. The mountain in the background is a symbol of a high goal and spiritual growth.\n" +
                        "\n" +
                        "Meaning: choice, love, partnership, alliances. Harmony between the mind and the heart.\n" +
                        "\n" +
                        "Love: strong attraction, falling in love, choosing a partner. A socially approved union. The importance of sincerity and openness in relationships.\n" +
                        "\n" +
                        "Advice: listen to your heart. Choose what matches your values. Build relationships based on mutual trust."},

                { name: "7 - THE CHARIOT",
                    img: ARCANA_THE_CHARIOT,
                    text: "Personality: winner, driver. A person with great will, disciplined, ambitious, who keeps life under control.\n" +
                        "\n" +
                        "Symbolism: the charioteer drives black and white sphinxes. This is a symbol of controlling opposing forces (emotions and reason) in order to move forward.\n" +
                        "\n" +
                        "Meaning: triumph, breakthrough, moving, control over chaos. Victory through effort and will.\n" +
                        "\n" +
                        "Love: conquering the object of love, rapid development of events. Partners can fight for leadership in a relationship. A joint journey.\n" +
                        "\n" +
                        "Advice: only forward! Take emotions under control and purposefully move towards your victory. Do not stop."},

                { name: "8 - STRENGTH",
                    img: ARCANA_STRENGTH,
                    text: "Personality: a confident, patient person. Someone who knows how to tame their own instincts and emotions not with brute force, but with softness.\n" +
                        "\n" +
                        "Symbolism: a woman gently closes the mouth of a lion. Above her head is the sign of infinity. A white dress is a symbol of purity of thoughts.\n" +
                        "\n" +
                        "Meaning: inner strength, soft power, taming passions, health, confidence.\n" +
                        "\n" +
                        "Love: passion under control. Deep affection, patience for the shortcomings of a partner. The ability to find an approach to a \"difficult\" person.\n" +
                        "\n" +
                        "Advice: show patience and softness. Brute force will not help now - act with love and stability."},

                { name: "9 - THE HERMIT",
                    img: ARCANA_THE_HERMIT,
                    text: "Personality: wise man, loner, philosopher. A person who seeks truth within himself, and not in the outside world.\n" +
                        "\n" +
                        "Symbolism: an old man with a lantern (the light of knowledge) and a staff (support for experience). He stands on top of a mountain, which symbolizes the achievement of wisdom.\n" +
                        "\n" +
                        "Meaning: the search for truth, solitude, wisdom, self-knowledge, detachment from vanity.\n" +
                        "\n" +
                        "Love: solitude together or a period of conscious loneliness. Reassessment of relationships. Detachment for the sake of searching for truth.\n" +
                        "\n" +
                        "Advice: find time for yourself. Step away from things to think. The answers to your questions are within you."},

                { name: "10 - WHEEL OF FORTUNE",
                    img: ARCANA_WHEEL_OF_FORTUNE,
                    text: "Personality: lucky person or a person of fate. Someone who finds themselves in the center of important changes. A person who believes in fate.\n" +
                        "\n" +
                        "Symbolism: a wheel with figures rising and falling. The sphinx at the top is stability in the midst of changes. Four winged creatures are knowledge of the Universe.\n" +
                        "\n" +
                        "Meaning: cyclicality, fate, luck, change, inevitability of events. Luck.\n" +
                        "\n" +
                        "Love: a karmic meeting, an unexpected turn of fate. Relationships that you cannot influence - everything is decided by chance.\n" +
                        "\n" +
                        "Advice: accept changes. Do not try to stop the Wheel - trust fate, now is the time for changes for the better."},

                { name: "11 - JUSTICE",
                    img: ARCANA_JUSTICE,
                    text: "Personality: judge, lawyer, honest person. Someone who weighs every step and is responsible for their actions.\n" +
                        "\n" +
                        "Symbolism: a figure with scales (balance) and a sword (decision). She sits between columns. The gaze is direct - a symbol of objectivity.\n" +
                        "\n" +
                        "Meaning: law, responsibility, balance, cause-and-effect relationships (karma).\n" +
                        "\n" +
                        "Love: official marriage or divorce. Fair division of responsibilities. You get from your partner what you put in.\n" +
                        "\n" +
                        "Advice: be objective. Weigh all the pros and cons. Remember: you reap what you sow."},

                { name: "12 - THE HANGED MAN",
                    img: ARCANA_THE_HANGED_MAN,
                    text: "Personality: thinker, victim of circumstances. A person who sees the world differently or has consciously gone to the limits for the sake of a higher goal.\n" +
                        "\n" +
                        "Symbolism: a man hangs upside down, but his face is calm. Around his head is a halo (enlightenment). This is a symbol of a new look and voluntary sacrifice.\n" +
                        "\n" +
                        "Meaning: suspension, rethinking, sacrifice, looking from a different perspective, waiting.\n" +
                        "\n" +
                        "Love: stagnation in relationships, a state of uncertainty. The need to sacrifice something for the sake of a partner. A period of \"freezing\" feelings for rethinking.\n" +
                        "\n" +
                        "Advice: stop and do nothing. Now is not the time for active actions. Change your view of the situation - the solution will come through calm."},

                { name: "13 - DEATH",
                    img: ARCANA_DEATH,
                    text: "Personality: transformer, a person of change. Someone who knows how to ruthlessly cut off the old to make room for the new.\n" +
                        "\n" +
                        "Symbolism: a skeleton in armor on a horse. Kings and children fall before him. In the background is the rising sun. This is a symbol of the inevitable end, which leads to rebirth.\n" +
                        "\n" +
                        "Meaning: transformation, completion, deep changes, farewell to the past, a new cycle.\n" +
                        "\n" +
                        "Love: the end of a stage or a breakup. A painful but necessary transformation of relationships. The dying out of old feelings for the birth of something new.\n" +
                        "\n" +
                        "Advice: do not hold on to the past. Only by closing one door will you be able to see those that open ahead."},

                { name: "14 - TEMPERANCE",
                    img: ARCANA_TEMPERANCE,
                    text: "Personality: peacemaker, healer, diplomat. A calm, harmonious person who knows how to find the \"golden mean\".\\n\" +\n" +
                        "\"\\n\" +\n" +
                        "\"Symbolism: an angel pours water from one bowl to another. One foot on the ground, the other in the water. A symbol of balance between the spiritual and the material.\\n\" +\n" +
                        "\"\\n\" +\n" +
                        "\"Meaning: balance, measure, patience, healing, compromise, adaptation.\\n\" +\n" +
                        "\"\\n\" +\n" +
                        "\"Love: harmony, peace, reconciliation. Relationships based on patience and mutual understanding. Emotional healing after a crisis.\\n\" +\n" +
                        "\"\\n\" +\n" +
                        "\"Advice: follow the measure. Avoid extremes. Be patient and seek inner balance - time works for you."},

                { name: "15 - THE DEVIL",
                    img: ARCANA_THE_DEVIL,
                    text: "Personality: a seducer, a manipulator. A person obsessed with passions, money or power. Can be very charismatic, but dangerous.\n" +
                        "\n" +
                        "Symbolism: a devil on a stone, to which people are chained. The chains hang freely - people can leave, but do not want to. A symbol of addiction and material temptations.\n" +
                        "\n" +
                        "Meaning: addiction, materialism, shadow sides, temptations, bondage, passion.\n" +
                        "\n" +
                        "Love: fatal passion, addiction, sex without love. Toxic relationships that are difficult to get out of. Jealousy and manipulation.\n" +
                        "\n" +
                        "Advice: realize your addiction. It is time to free yourself from what is destroying you."},

                { name: "16 - THE TOWER",
                    img: ARCANA_THE_TOWER,
                    text: "Personality: Destroyer of foundations. A person who experiences deep shock or provokes radical changes through the truth.\n" +
                        "\n" +
                        "Symbolism: Lightning strikes a tower, people fall down. This is a symbol of the collapse of illusions and the sudden, uncontrolled destruction of the old life.\n" +
                        "\n" +
                        "Meaning: chaos, catastrophe, insight, release of energy through destruction, sudden change.\n" +
                        "\n" +
                        "Love: sudden breakup, scandal, truth that has come out. Collapse of hopes. A difficult but cleansing parting.\n" +
                        "\n" +
                        "Advice: let the old fall. Do not try to save what is already crumbling. Build the new on a stronger foundation."},

                { name: "17 - THE STAR",
                    img: ARCANA_THE_STAR,
                    text: "Personality: inspiration, optimist. A person with a pure soul who believes in the best and gives hope to others.\n" +
                        "\n" +
                        "Symbolism: a naked woman pours water onto the ground and into a pond under the glow of eight stars. This is a symbol of openness, hope and cosmic peace.\n" +
                        "\n" +
                        "Meaning: hope, faith, healing, inspiration, calm after the storm, a bright future.\n" +
                        "\n" +
                        "Love: romantic dreams, hope for the future. Platonic love or healing of the heart after \"The Tower\". Faith in the ideal partner.\n" +
                        "\n" +
                        "Advice: believe in your dream. Now is the time of hope and renewal. Be sincere and open to the world - the Universe supports you."},

                { name: "18 - THE MOON",
                    img: ARCANA_THE_MOON,
                    text: "Personality: Creative but anxious person. Someone who has strong intuition but often succumbs to fears, illusions or sees the world through the prism of their fantasies.\n" +
                        "\n" +
                        "Symbolism: a crying moon, a dog and a wolf (wild and tame), a cancer emerging from the water. This is a symbol of the subconscious, hidden dangers and wandering in the twilight of the soul.\n" +
                        "\n" +
                        "Meaning: illusions, subconscious fears, hidden enemies, intuition, confusion, the unknown.\n" +
                        "\n" +
                        "Love: a relationship in which there are many omissions or illusions. Betrayal or fear of abandonment is possible. A period of emotional instability.\n" +
                        "\n" +
                        "Advice: be careful. Not everything is what it really is. Trust your intuition, but don't make important decisions until the fog clears."},

                { name: "19 - THE SUN",
                    img: ARCANA_THE_SUN,
                    text: "Personality: charismatic, successful, cheerful person. Childlike spontaneity, sincerity, greatness and self-confidence.\n" +
                        "\n" +
                        "Symbolism: a child on a white horse under a huge shining sun. Sunflowers behind a fence. This is a symbol of absolute happiness, clarity, truth and the triumph of life.\n" +
                        "\n" +
                        "Meaning: success, joy, vital energy, clarity, warmth, triumph, health and optimism.\n" +
                        "\n" +
                        "Love: a happy union, the birth of a child, complete transparency in relationships. Great joy, warmth, mutual support and prosperity of the couple.\n" +
                        "\n" +
                        "Advice: use your success to warm others. Now is the time to reap the fruits of your labor and enjoy life to the fullest."},

                { name: "20 - JUDGEMENT",
                    img: ARCANA_JUDGEMENT,
                    text: "Personality: a person who has been reborn. Someone who has gone through serious trials and emerged from them with a new understanding of life.\n" +
                        "\n" +
                        "Symbolism: an angel blows a trumpet, people rise from their graves. This is a symbol of awakening, liberation from the past and a call to a new life.\n" +
                        "\n" +
                        "Meaning: rebirth, call, forgiveness, summing up, release, karmic resolution.\n" +
                        "\n" +
                        "Love: an important turning point. Making a final decision (to marry or to part forever). Returning former ones or forgiving old grievances.\n" +
                        "\n" +
                        "Advice: listen to the call. The past no longer has power over you. It is time to make an important decision and start a new chapter in your life."},

                { name: "21 - THE WORLD",
                    img: ARCANA_THE_WORLD,
                    text: "Personality: a holistic, realized personality. A person who has found his place in the world feels harmony and unity with the Universe.\n" +
                        "\n" +
                        "Symbolism: a figure in a laurel wreath, surrounded by symbols of the four elements. This is a symbol of the completion of a great cycle, perfection and absolute success.\n" +
                        "\n" +
                        "Meaning: completion, integrity, travel, harmony, achievement of the goal, worldwide success.\n" +
                        "\n" +
                        "Love: perfect union, harmony, complete mutual understanding. Moving abroad or marriage to a foreigner is possible.\n" +
                        "\n" +
                        "Advice: you have achieved your goal. Enjoy the moment of triumph and integrity. You are in your place, the world is open to you - celebrate your victory."},
            ],
        }
    }

    const {
        title,
        defaultCards,
        meaning,
        majorArcana,
    } = content[language];

    return (
        <div className="font-montserrat" style={{ backgroundImage: `url(${MAJOR_ARCANA_BACKGROUND_IMG})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <section className="relative h-[677px] flex items-center overflow-hidden" style={{ backgroundImage: `url(${MAJOR_ARCANA_HERO_BACKGROUND_IMG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="z-10 p-4 max-w-4xl ml-10 md:ml-20 text-left">
                    <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-[2px_2px_4px_rgba(69,26,3,1)] tracking-wide pt-14">{title}</h1>
                </div>
                <div className="absolute right-0 bottom-0 h-[94%] w-full md:w-[55%] overflow-hidden z-0">
                    <img src={GROUP_ARCANA} className="w-full object-cover object-bottom-right" alt="Arcana Group" />
                </div>
            </section>

            <div className="py-20 max-w-7xl mx-auto px-4">
                <section className="mb-40">
                    <div className="relative flex items-center justify-center w-full my-8">
                        <div className="flex-grow border-t-2 border-amber-950 opacity-50 max-w-[calc(50%-100px)]"></div>
                        <h2 className={`${sectionHeadingStyle} text-center mx-10 whitespace-nowrap`}>{defaultCards}</h2>
                        <div className="flex-grow border-t-2 border-amber-950 opacity-50 max-w-[calc(50%-100px)]"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-28 gap-y-12 mt-12">
                        {majorArcana.map((card, index) => (
                            <a
                                href={`#${arcanaID[index]}`}
                                key={card.name}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const element = document.getElementById(arcanaID[index]);
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        window.history.pushState(null, null, `#${arcanaID[index]}`);
                                    }
                                }}
                                className={`text-center group transition-transform duration-300 hover:scale-105 ${
                                    index === 20 ? 'md:col-start-2' : ''
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

                <section className="pb-20">
                    <div className="relative flex items-center justify-center w-full my-8 mb-20">
                        <div className="flex-grow border-t-2 border-amber-950 opacity-50 max-w-[calc(50%-100px)]"></div>
                        <h2 className={`${sectionHeadingStyle} text-center mx-10 whitespace-nowrap`}>{meaning}</h2>
                        <div className="flex-grow border-t-2 border-amber-950 opacity-50 max-w-[calc(50%-100px)]"></div>
                    </div>

                    <div className="flex flex-col gap-24">
                        {majorArcana.map((card, index) => (
                            <div
                                id={arcanaID[index]}
                                key={card.name}
                                className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-start scroll-mt-28`}
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