alert("JavaScript töötab!");
// ========================================
// SCENT FINDER – JAVASCRIPT
// Eesti keeles nišiparfüümi leidmise test
// ========================================


// 1. KÜSIMUSED JA VASTUSEVARIANDID

const data = [
    {
        q: "Millist tunnet su lõhn edasi võiks anda?",
        key: "mood",
        opts: [
            ["elegant", "Vaoshoitud elegants", "Puhas, maitsekas ja ajatu", "images/elegant.jpg"],
            ["dark", "Tume ja salapärane", "Suitsune, sügav ja magnetiline", "images/smoky.jpg"],
            ["fresh", "Värske ja elav", "Tsitrused, rohelus ja energia", "photo-1547514701-42782101795e"]
        ]
    },

    {
        q: "Millised lõhnanoodid sind kõige rohkem kutsuvad?",
        key: "notes",
        opts: [
            ["woody", "Puit ja mets", "Seedripuu, vetiver ja sammal", "photo-1511497584788-876760111969"],
            ["amber", "Soe ja vürtsikas", "Merevaik, vürtsid ja vaik", "images/spices.jpg"],
            ["floral", "Lilled ja pehmus", "Iiris, roos ja valged õied", "photo-1490750967868-88aa4486c946"],
            ["citrus", "Tsitrused", "Bergamot, sidrun ja neroli", "images/citrusy.jpg"],
            ["gourmand", "Magus ja gurmeelik", "Vanill, kakao ja tonka", "photo-1578985545062-69928b1d9587"],
            ["smoky", "Suitsune ja omapärane", "Viiruk, nahk ja suits", "images/smoky1.jpg"]
        ]
    },

    {
        q: "Kui tugev võiks sinu lõhn olla?",
        key: "strength",
        opts: [
            ["soft", "Pehme ja lähedane", "Tuntav peamiselt lähedalt", "images/pehme.jpg"],
            ["medium", "Tasakaalus", "Märgatav, kuid mitte pealetükkiv", "images/tasakaalus.jpg"],
            ["bold", "Julge ja jõuline", "Silmapaistev ning meeldejääv", "images/julge.jpg"]
        ]
    },

    {
        q: "Millal tahad seda kõige rohkem kanda?",
        key: "season",
        opts: [
            ["everyday", "Iga päev", "Kool, töö, linn ja kohtumised", "images/everyday.jpg"],
            ["evening", "Õhtud ja erilised hetked", "Kohtingud, üritused ja õhtune linn", "images/date-night.jpg"],
            ["all", "Igal aastaajal", "Mitmekülgne signatuur-lõhn", "images/all.jpg"]
        ]
    },

    {
        q: "Kui omanäoline võiks sinu lõhn olla?",
        key: "style",
        opts: [
            ["approachable", "Lihtne armastada", "Eriline, aga kergesti kantav", "images/lihtne.jpg"],
            ["artistic", "Kunstiline ja ootamatu", "Natuke veider, kindlasti huvitav", "images/kunstiline.jpg"],
            ["statement", "Tõeline avaldus", "Ei pea kõigile meeldima", "images/avaldus.jpg"]
        ]
    },

    {
        q: "Milline hinnaklass sulle sobib?",
        key: "budget",
        opts: [
            ["value", "Soodsam nišš", "Umbes kuni 100 €", "images/1.jpg"],
            ["mid", "Keskmine hinnaklass", "Umbes 100–200 €", "images/2.jpg"],
            ["premium", "Hind pole peamine", "Oluline on leida õige lõhn", "images/3.jpg"]
        ]
    }
];


// 2. NIŠIPARFÜÜMIDE ANDMEBAAS

const scents = [
    {
        name: "Bois Impérial",
        brand: "Essential Parfums",
        notes: "Basiilik, vürtsikas puit, vetiver ja patšuli",
        mood: ["elegant", "fresh"],
        family: ["woody", "citrus"],
        strength: "medium",
        style: ["approachable"],
        budget: "value",
        season: ["everyday", "all"],
        img: "images/bois-imperial.jpg", 
        why: "Moodne, puidune ja väga kantav lõhn. Suurepärane algus inimesele, kes soovib avastada nišiparfüüme.",
        url: "https://essentialparfums.com/"
    },

    {
        name: "Ganymede",
        brand: "Marc-Antoine Barrois",
        notes: "Mandariin, violetileht, mineraalsed noodid ja nahk",
        mood: ["elegant", "dark"],
        family: ["woody", "smoky"],
        strength: "medium",
        style: ["artistic", "statement"],
        budget: "premium",
        season: ["everyday", "evening", "all"],
        img: "images/ganymede.jpg",
        why: "Mineraalne, metalliline ja nahkne lõhn, mis mõjub modernselt ning eristub tavapärastest parfüümidest.",
        url: "https://marcantoinebarrois.com/"
    },

    {
        name: "Gris Charnel",
        brand: "BDK Parfums",
        notes: "Viigimari, must tee, kardemon ja sandlipuu",
        mood: ["elegant", "dark"],
        family: ["woody", "amber"],
        strength: "medium",
        style: ["approachable", "artistic"],
        budget: "mid",
        season: ["everyday", "evening", "all"],
        img: "images/gris-charnel.jpg",
        why: "Kreemjas tee, viigimari ja puit loovad sooja ning elegantse terviku.",
        url: "https://bdkparfums.com/"
    },

    {
        name: "Molecule 01",
        brand: "Escentric Molecules",
        notes: "Iso E Super – läbipaistev, puidune ja nahalähedane",
        mood: ["elegant", "fresh"],
        family: ["woody"],
        strength: "soft",
        style: ["approachable", "artistic"],
        budget: "mid",
        season: ["everyday", "all"],
        img: "images/molecue.jpg",
        why: "Minimalistlik lõhn, mis sulandub naha loomuliku lõhnaga ja võib eri inimestel erinevalt areneda.",
        url: "https://www.escentric.com/"
    },

    {
        name: "Remarkable People",
        brand: "État Libre d’Orange",
        notes: "Greip, šampanjaakord, kardemon ja sandlipuu",
        mood: ["fresh", "elegant"],
        family: ["citrus", "woody"],
        strength: "medium",
        style: ["artistic", "approachable"],
        budget: "mid",
        season: ["everyday", "all"],
        img: "images/remarkable.jpg",
        why: "Särtsakas tsitruseline algus ja vürtsikas puidune põhi annavad sellele mängulise iseloomu.",
        url: "https://etatlibredorange.com/"
    },

    {
        name: "Mango Skin",
        brand: "Vilhelm Parfumerie",
        notes: "Mango, mustsõstar, must tee ja muskus",
        mood: ["fresh", "dark"],
        family: ["citrus", "gourmand"],
        strength: "medium",
        style: ["artistic", "statement"],
        budget: "premium",
        season: ["everyday", "evening", "all"],
        img: "images/mango.jpg",
        why: "Mahlane puuviljasus kohtub tumedamate nootidega. Hea valik inimesele, kes tahab midagi mängulist ja omanäolist.",
        url: "https://vilhelmparfumerie.com/"
    },

    {
        name: "Bois d’Ascèse",
        brand: "Naomi Goodsir",
        notes: "Viiruk, suits, tubakas ja puit",
        mood: ["dark"],
        family: ["smoky", "woody", "amber"],
        strength: "bold",
        style: ["artistic", "statement"],
        budget: "premium",
        season: ["evening", "all"],
        img: "images/bois.jpg",
        why: "Kuiv, suitsune ja atmosfääriline lõhn inimesele, kellele meeldivad tumedad ning julged aroomid.",
        url: "https://naomigoodsir.com/"
    },

    {
        name: "Dear Polly",
        brand: "Vilhelm Parfumerie",
        notes: "Must tee, bergamot, õun ja muskus",
        mood: ["elegant", "fresh"],
        family: ["citrus", "woody"],
        strength: "soft",
        style: ["approachable", "artistic"],
        budget: "premium",
        season: ["everyday", "all"],
        img: "images/dear.jpg",
        why: "Must tee ja tsitruseline värskus annavad puhta, rahuliku ning intelligentse mulje.",
        url: "https://vilhelmparfumerie.com/"
    },

    {
        name: "L’Air Barbes",
        brand: "19-69",
        notes: "Tsitrused, aromaatsed noodid, muskus ja puit",
        mood: ["fresh", "dark"],
        family: ["citrus", "woody"],
        strength: "medium",
        style: ["artistic"],
        budget: "premium",
        season: ["everyday", "all"],
        img: "images/19.jpg",
        why: "Linnalik ja veidi toore servaga lõhn inimesele, kellele tavaline värske parfüüm tundub liiga igav.",
        url: "https://www.1969.com/"
    },

    {
        name: "Lune Feline",
        brand: "Atelier des Ors",
        notes: "Vanill, kardemon, palsam ja puit",
        mood: ["dark", "elegant"],
        family: ["amber", "gourmand"],
        strength: "bold",
        style: ["artistic", "statement"],
        budget: "premium",
        season: ["evening", "all"],
        img: "images/lune.jpg",
        why: "Tume, soe ja luksuslik vanill koos vürtside ning puiduga. Sobib eriti hästi õhtuseks kandmiseks.",
        url: "https://atelierdesors.com/"
    },

    {
        name: "Iris Malikhan",
        brand: "Maison Crivelli",
        notes: "Iiris, vanill, nahk ja seemisnahk",
        mood: ["elegant", "dark"],
        family: ["floral", "woody", "amber"],
        strength: "medium",
        style: ["artistic", "approachable"],
        budget: "premium",
        season: ["everyday", "evening", "all"],
        img: "images/iris.jpg",
        why: "Puuderjas iiris kohtub pehme naha ja vanilliga, luues elegantse ning tekstuurse lõhna.",
        url: "https://maisoncrivelli.com/"
    }
];


// 3. TESTI SEIS

const answers = {};
let current = 0;


// 4. PILTIDE AADRESSID

function photo(img, width = 600) {
    if (img.startsWith("http://") || img.startsWith("https://")) {
        return img;
    }

    if (img.startsWith("images/")) {
        return img;
    }

    return `https://images.unsplash.com/${img}?auto=format&fit=crop&w=${width}&q=80`;
}


// 5. KÜSIMUSTE EKRAANILE KUVAMINE

function renderQs() {
    const questionsContainer = document.getElementById("qs");

    questionsContainer.innerHTML = data.map((question, index) => {
        const optionsHTML = question.opts.map(option => `
            <button
                type="button"
                class="option"
                data-value="${option[0]}"
            >
                <img
                    src="${photo(option[3])}"
                    alt="${option[1]}"
                >

                <div class="copy">
                    <strong>${option[1]}</strong>
                    <small>${option[2]}</small>
                </div>
            </button>
        `).join("");

        return `
            <div class="q ${index === 0 ? "active" : ""}"
                 data-index="${index}">

                <h2>${question.q}</h2>

                <p>Vali variant, mis sind kõige rohkem kõnetab.</p>

                <div class="options">
                    ${optionsHTML}
                </div>

            </div>
        `;
    }).join("");

    // Vastuse valimine
    document.querySelectorAll(".option").forEach(button => {
        button.addEventListener("click", function () {
            const question = data[current];

            // Eemaldame eelmise valiku märgistuse
            document.querySelectorAll(
                `.q[data-index="${current}"] .option`
            ).forEach(option => {
                option.classList.remove("selected");
            });

            // Märgime uue valiku
            this.classList.add("selected");

            // Salvestame vastuse
            answers[question.key] = this.dataset.value;
            setTimeout(() => {
    move(1);
}, 250);

            // Peidame veateate
            document.getElementById("err").style.display = "none";
        });
    });

    update();
}


// 6. TESTI ALUSTAMINE

function start() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// 7. EDENEMISRIBA UUENDAMINE

function update() {
    const percentage = Math.round(
        ((current + 1) / data.length) * 100
    );

    document.getElementById("step").textContent =
        `Küsimus ${current + 1} / ${data.length}`;

    document.getElementById("pct").textContent =
        percentage + "%";

    document.getElementById("bar").style.width =
        percentage + "%";

    document.getElementById("back").style.visibility =
        current === 0 ? "hidden" : "visible";

    document.getElementById("next").textContent =
        current === data.length - 1
            ? "Näita tulemusi ✨"
            : "Järgmine →";
}


// 8. KÜSIMUSTE VAHEL LIIKUMINE

function move(direction) {
    // Kontrollime, kas kasutaja valis vastuse
    if (direction === 1 && !answers[data[current].key]) {
        document.getElementById("err").style.display = "block";
        return;
    }

    // Kui viimane küsimus on vastatud, näitame tulemusi
    if (direction === 1 && current === data.length - 1) {
        showResults();
        return;
    }

    // Liigume järgmise või eelmise küsimuse juurde
    current = Math.max(
        0,
        Math.min(data.length - 1, current + direction)
    );

    // Näitame ainult aktiivset küsimust
    document.querySelectorAll(".q").forEach((question, index) => {
        question.classList.toggle("active", index === current);
    });

    // Taastame varasema valiku, kui see on olemas
    const savedAnswer = answers[data[current].key];

    document.querySelectorAll(
        `.q[data-index="${current}"] .option`
    ).forEach(button => {
        button.classList.toggle(
            "selected",
            button.dataset.value === savedAnswer
        );
    });

    document.getElementById("err").style.display = "none";

    update();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// 9. VASTUSTE JA LÕHNADE SOBIVUSE ARVUTAMINE

function score(scent) {
    let points = 0;

    // Millist tunnet lõhn edasi annab?
    if (scent.mood.includes(answers.mood)) {
        points += 3;
    }

    // Lõhnanoodid
    if (scent.family.includes(answers.notes)) {
        points += 5;
    }

    // Lõhna tugevus
    if (scent.strength === answers.strength) {
        points += 2;
    }

    // Lõhna omanäolisus
    if (scent.style.includes(answers.style)) {
        points += 3;
    }

    // Millal lõhna kantakse?
    if (scent.season.includes(answers.season)) {
        points += 1;
    }

    // Hinnaklass
    const budgetValues = {
        value: 0,
        mid: 1,
        premium: 2
    };

    const difference = Math.abs(
        budgetValues[scent.budget] -
        budgetValues[answers.budget]
    );

    if (difference === 0) {
        points += 3;
    } else if (difference === 1) {
        points += 1;
    }

    return points;
}


// 10. TULEMUSTE KUVAMINE

function showResults() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("results").style.display = "block";

    // Muudame pealkirja vastavalt kasutaja maitsele
    if (answers.mood === "dark") {
        document.getElementById("title").textContent =
            "Sinu salapärane lõhnaprofiil";
    } else if (answers.mood === "fresh") {
        document.getElementById("title").textContent =
            "Sinu värske lõhnaprofiil";
    } else {
        document.getElementById("title").textContent =
            "Sinu isikupärane lõhnaprofiil";
    }

    // Sorteerime lõhnad sobivuse järgi
    const recommendations = [...scents]
        .sort((a, b) => score(b) - score(a))
        .slice(0, 3);

    const cardsContainer = document.getElementById("cards");

    // Loome iga soovituse jaoks eraldi kaardi
    cardsContainer.innerHTML = recommendations.map(scent => `
        <article class="card">

            <img
                src="${photo(scent.img, 900)}"
                alt="${scent.name} lõhnamaailma illustratsioon"
            >

            <div class="body">

                <div class="brand">
                    ${scent.brand}
                </div>

                <h3>${scent.name}</h3>

                <div class="notes">
                    <b>Peamised noodid:</b>
                    ${scent.notes}
                </div>

                <p>${scent.why}</p>

                <p>
                    <a
                        href="${scent.url}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Brändi ametlik veebileht ↗
                    </a>
                </p>

            </div>

        </article>
    `).join("");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// 11. TESTI UUESTI ALUSTAMINE

function reset() {
    // Kustutame kõik vastused
    Object.keys(answers).forEach(key => {
        delete answers[key];
    });

    // Läheme tagasi esimese küsimuse juurde
    current = 0;

    document.getElementById("results").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("intro").style.display = "grid";
    document.getElementById("err").style.display = "none";

    // Loome küsimused uuesti
    renderQs();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// 12. KÄIVITAME KÜSIMUSTIKU

renderQs();
