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
    const menu = document.getElementById("language-menu");
    const mobileMenu = document.getElementById("mobile-language-menu");

    if (menu) {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    }

    if (mobileMenu) {
        mobileMenu.style.display = mobileMenu.style.display === "block" ? "none" : "block";
    }
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

    document.getElementById("current-lang").innerText = langText[lang];
}

function changeLanguage(lang) {
    translateSite(lang);
    
    document.getElementById("current-flag").src = flagSrc[lang];
    document.getElementById("mobile-current-flag").src = flagSrc[lang];

    document.getElementById("language-menu").style.display = "none";
    document.getElementById("mobile-language-menu").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    const savedLang = localStorage.getItem("selectedLanguage") || "ru";
    translateSite(savedLang);
});
