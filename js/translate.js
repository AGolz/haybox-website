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

    if (desktopSwitcher) desktopSwitcher.value = savedLang;
    if (mobileSwitcher) mobileSwitcher.value = savedLang;

    translateSite(savedLang);
});
