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

    // Скрываем оба блока перед показом нужного
    movingOptions.style.display = "none";
    storageOptions.style.display = "none";

    if (selectedService === "moving") {
      movingOptions.style.display = "flex"; // Чекбоксы переезда
    } else if (selectedService === "storage") {
      storageOptions.style.display = "flex"; // Чекбоксы хранения
    }
  }

  // Включаем обработчики событий
  document.getElementById("contact-method").addEventListener("change", toggleContactFields);
  document.getElementById("service").addEventListener("change", toggleServiceFields);

  // Скрываем чекбоксы при загрузке страницы
  document.getElementById("moving-options").style.display = "none";
  document.getElementById("storage-options").style.display = "none";
});
