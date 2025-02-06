document.addEventListener('DOMContentLoaded', function() {
  console.log("HayBox сайт загружен!");

  // Показываем нужные поля контактов в зависимости от выбора способа связи
  function toggleContactFields() {
    document.querySelectorAll(".contact-extra").forEach(field => field.style.display = "none");

    const selectedMethod = document.getElementById("contact-method").value;
    document.getElementById("telegram").removeAttribute("required");
    document.getElementById("whatsapp").removeAttribute("required");
    document.getElementById("phone").removeAttribute("required");

    if (selectedMethod === "telegram") {
      document.getElementById("telegram-field").style.display = "flex";
      document.getElementById("telegram").setAttribute("required", "true");
    } else if (selectedMethod === "whatsapp") {
      document.getElementById("whatsapp-field").style.display = "flex";
      document.getElementById("whatsapp").setAttribute("required", "true");
    } else if (selectedMethod === "phone") {
      document.getElementById("phone-field").style.display = "flex";
      document.getElementById("phone").setAttribute("required", "true");
    }
  }

  // Показываем чекбоксы в зависимости от выбора услуги
  function toggleServiceFields() {
    const movingOptions = document.getElementById("moving-options");
    const storageOptions = document.getElementById("storage-options");
    const serviceLabel = document.getElementById("service-label");
    const selectedService = document.getElementById("service").value;

    movingOptions.style.display = "none";
    storageOptions.style.display = "none";
    serviceLabel.style.display = "none";

    if (selectedService === "moving") {
      movingOptions.style.display = "block";
      serviceLabel.style.display = "block";
    } else if (selectedService === "storage") {
      storageOptions.style.display = "block";
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

    if (!contactMethod) {
      errors.push("Пожалуйста, выберите предпочтительный способ связи.");
    }

    if (contactMethod === "telegram" && !telegram) {
      errors.push("Пожалуйста, укажите ник в Telegram.");
    }

    if (contactMethod === "whatsapp" && !whatsapp) {
      errors.push("Пожалуйста, укажите ник в WhatsApp.");
    }

    if (contactMethod === "phone" && !phone) {
      errors.push("Пожалуйста, укажите номер телефона.");
    }

    if (!service) {
      errors.push("Пожалуйста, выберите услугу (Переезд или Хранение).");
    }

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
