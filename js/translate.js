async function translateText(text, targetLang) {
    const response = await fetch("/.netlify/functions/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, targetLang })  // ВАЖНО: передаем JSON
    });

    const data = await response.json();
    return data.translations ? data.translations[0].text : text;
}

function translateSite(targetLang) {
    document.documentElement.lang = targetLang;
    localStorage.setItem("selectedLanguage", targetLang);

    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach(async (el) => {
        const originalText = el.dataset.original || el.innerText;
        el.dataset.original = originalText;
        const translatedText = await translateText(originalText, targetLang);
        el.innerText = translatedText;
    });

    updateLanguageButton(targetLang);
}

function toggleLanguageMenu() {
    let menu = document.getElementById("language-menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}



function updateLanguageButton(lang) {
    const flagSrc = {
        ru: "https://flagcdn.com/w40/ru.png",
        en: "https://flagcdn.com/w40/gb.png",
    };

    document.getElementById("current-flag").src = flagSrc[lang];
    document.getElementById("mobile-current-flag").src = flagSrc[lang];

    const langText = {
        ru: "Рус",
        en: "Eng",
    };

    document.querySelectorAll("#language-menu li").forEach(li => li.classList.remove("selected"));
    document.querySelector(`#language-menu li[onclick="changeLanguage('${lang}')"]`).classList.add("selected");    
}

function changeLanguage(lang) {
    document.getElementById("current-lang").innerText = (lang === "en") ? "Eng" : "Рус";
    document.getElementById("current-flag").src = (lang === "en") ? "https://flagcdn.com/w40/gb.png" : "https://flagcdn.com/w40/ru.png";

    let items = document.querySelectorAll("#language-menu li");
    items.forEach(item => {
        item.classList.remove("active");
        if (item.getAttribute("onclick").includes(lang)) {
            item.classList.add("active");
        }
    });

    document.getElementById("language-menu").style.display = "none";
}
