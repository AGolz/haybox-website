function openTab(evt, tabName) {
  let i, tabcontent, tablinks;

  // Скрываем все вкладки
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Убираем активный класс у всех кнопок
  tablinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Показываем выбранную вкладку и делаем кнопку активной
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}
