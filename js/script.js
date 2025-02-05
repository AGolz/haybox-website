document.addEventListener('DOMContentLoaded', function() {
  console.log("HayBox сайт загружен!");

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

  function toggleServiceFields() {
    const movingOptions = document.getElementById("moving-options");
    const storageOptions = document.getElementById("storage-options");
    const selectedService = document.getElementById("service").value;
    const serviceLabel = document.getElementById("service-label");

    // Перед изменением скрываем оба блока
    movingOptions.style.display = "none";
    storageOptions.style.display = "none";
    serviceLabel.style.display = "none";

    if (selectedService === "moving") {
      movingOptions.style.display = "flex"; // Показываем чекбоксы переезда
      serviceLabel.style.display = "block";
    } else if (selectedService === "storage") {
      storageOptions.style.display = "flex"; // Показываем чекбоксы хранения
      serviceLabel.style.display = "block";
    }
  }

  function validateForm(event) {
    const contactMethod = document.getElementById("contact-method").value;
    const telegram = document.getElementById("telegram").value.trim();
    const whatsapp = document.getElementById("whatsapp").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;

    if (contactMethod === "telegram" && telegram === "") {
      alert("Пожалуйста, укажите ник в Telegram.");
      event.preventDefault();
      return false;
    }

    if (contactMethod === "whatsapp" && whatsapp === "") {
      alert("Пожалуйста, укажите ник в WhatsApp.");
      event.preventDefault();
      return false;
    }

    if (contactMethod === "phone" && phone === "") {
      alert("Пожалуйста, укажите номер телефона.");
      event.preventDefault();
      return false;
    }

    if (service === "") {
      alert("Пожалуйста, выберите услугу (Переезд или Хранение).");
      event.preventDefault();
      return false;
    }

    return true;
  }

  document.getElementById("contact-method").addEventListener("change", toggleContactFields);
  document.getElementById("service").addEventListener("change", toggleServiceFields);
  document.getElementById("contact-form").addEventListener("submit", validateForm);

  // Скрываем чекбоксы и заголовок "Выберите необходимые услуги" при загрузке страницы
  document.getElementById("moving-options").style.display = "none";
  document.getElementById("storage-options").style.display = "none";
  document.getElementById("service-label").style.display = "none";
});
