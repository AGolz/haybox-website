function translateSite(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem("selectedLanguage", lang);

    if (window.Ya) {
        Ya.translate.translatePage(lang);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const savedLang = localStorage.getItem("selectedLanguage") || "ru";

    const desktopSwitcher = document.getElementById("language-switcher");
    const mobileSwitcher = document.getElementById("mobile-language-switcher");

    const languageButtons = `
        <div class="yandex-translate">
            <img src="assets/icons/russian-flag.png" alt="Русский" onclick="translateSite('ru')">
            <img src="assets/icons/english-flag.png" alt="English" onclick="translateSite('en')">
            <img src="assets/icons/armenian-flag.png" alt="Հայերեն" onclick="translateSite('hy')">
        </div>
    `;

    if (desktopSwitcher) desktopSwitcher.innerHTML = languageButtons;
    if (mobileSwitcher) mobileSwitcher.innerHTML = languageButtons;

    translateSite(savedLang);
});
