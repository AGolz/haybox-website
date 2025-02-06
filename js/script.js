document.addEventListener('DOMContentLoaded', function() {
  console.log("HayBox сайт загружен!");

  // Показываем нужные поля контактов в зависимости от выбора способа связи
  function toggleContactFields() {
    document.querySelectorAll(".contact-extra").forEach(field => field.style.display = "none");

    const selectedMethod = document.getElementById("contact-method").value;
    if (selectedMethod === "telegram") {
      document.getElementById("telegram-field").style.display = "flex";
    } else if (selectedMethod === "whatsapp") {
      document.getElementById("whatsapp-field").style.display = "flex";
    } else if (selectedMethod === "phone") {
      document.getElementById("phone-field").style.display = "flex";
    }
  }

  // Показываем чекбоксы в зависимости от выбора услуги
  function toggleServiceFields() {
    const movingOptions = document.getElementById("moving-options");
    const storageOptions = document.getElementById("storage-options");
    const serviceLabel = document.getElementById("service-label");
    const selectedService = document.getElementById("service").value;

    console.log("Выбрана услуга:", selectedService);

    // Перед изменением скрываем оба блока
    movingOptions.style.display = "none";
    storageOptions.style.display = "none";
    serviceLabel.style.display = "none";

    if (selectedService === "moving") {
      movingOptions.style.display = "block"; // Показываем чекбоксы переезда
      serviceLabel.style.display = "block";
    } else if (selectedService === "storage") {
      storageOptions.style.display = "block"; // Показываем чекбоксы хранения
      serviceLabel.style.display = "block";
    }
  }

  // Валидация формы перед отправкой
  function validateForm(event) {
    const contactMethod = document.getElementById("contact-method").value;
    const telegram = document.getElementById("telegram").value.trim();
    const whatsapp = document.getElementById("whatsapp").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;

    let errors = [];

    // Проверяем, что выбрали способ связи
    if (!contactMethod) {
      errors.push("Пожалуйста, выберите предпочтительный способ связи.");
    }

    // Проверяем, что введены данные в контактах
    if (contactMethod === "@username" && telegram === "") {
      errors.push("Пожалуйста, укажите ник в Telegram.");
    }

    if (contactMethod === "@username" && whatsapp === "") {
      errors.push("Пожалуйста, укажите ник в WhatsApp.");
    }

    if (contactMethod === "+374 (__) ___-____" && phone === "") {
      errors.push("Пожалуйста, укажите номер телефона.");
    }

    // Проверяем, что выбрана услуга
    if (!service) {
      errors.push("Пожалуйста, выберите услугу (Переезд или Хранение).");
    }

    // Блокируем отправку формы, если есть ошибки
    if (errors.length > 0) {
      alert(errors.join("\n"));
      event.preventDefault();
      return false;
    }

    return true;
  }

  // Назначаем обработчики событий
  document.getElementById("contact-method").addEventListener("change", toggleContactFields);
  document.getElementById("service").addEventListener("change", toggleServiceFields);
  document.getElementById("contact-form").addEventListener("submit", validateForm);

  // Скрываем чекбоксы и заголовок "Выберите необходимые услуги" при загрузке страницы
  document.getElementById("moving-options").style.display = "none";
  document.getElementById("storage-options").style.display = "none";
  document.getElementById("service-label").style.display = "none";
});
