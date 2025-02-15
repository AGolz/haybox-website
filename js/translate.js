const API_KEY = DEEPL_API

async function translateText(text, targetLang) {
    const url = "https://api-free.deepl.com/v2/translate";
    const params = new URLSearchParams();
    params.append("auth_key", API_KEY);
    params.append("text", text);
    params.append("target_lang", targetLang.toUpperCase());

    try {
        const response = await fetch(url, {
            method: "POST",
            body: params
        });
        const data = await response.json();
        return data.translations[0].text;
    } catch (error) {
        console.error("Ошибка перевода:", error);
        return text;
    }
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
    const menu = document.getElementById("language-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function updateLanguageButton(lang) {
    const flagSrc = {
        ru: "https://flagcdn.com/w40/ru.png",
        en: "https://flagcdn.com/w40/gb.png",
        hy: "https://flagcdn.com/w40/am.png"
    };

    document.getElementById("current-flag").src = flagSrc[lang];
    document.getElementById("mobile-current-flag").src = flagSrc[lang];

    const langText = {
        ru: "Рус",
        en: "Eng",
        hy: "Հայ"
    };

    document.getElementById("current-lang").innerText = langText[lang];
}

function changeLanguage(lang) {
    translateSite(lang);
    document.getElementById("language-menu").style.display = "none";
    document.getElementById("mobile-language-menu").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    const savedLang = localStorage.getItem("selectedLanguage") || "ru";
    translateSite(savedLang);
});

