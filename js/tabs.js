document.addEventListener("DOMContentLoaded", function () {
    // По умолчанию показываем первую вкладку и делаем активной первую кнопку
    document.querySelectorAll(".tab-content").forEach(tab => tab.style.display = "none");
    document.querySelector(".tab-content").style.display = "block";
    document.querySelector(".tab-link").classList.add("active");
});

function openTab(tabName, element) {
    // Скрываем все вкладки
    document.querySelectorAll(".tab-content").forEach(tab => tab.style.display = "none");
    
    // Убираем класс active у всех кнопок
    document.querySelectorAll(".tab-link").forEach(btn => btn.classList.remove("active"));

    // Показываем нужную вкладку
    document.getElementById(tabName).style.display = "block";

    // Делаем активной нажатую кнопку
    element.classList.add("active");
}
