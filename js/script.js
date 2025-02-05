// js/script.js

document.addEventListener('DOMContentLoaded', function() {
  console.log("HayBox сайт загружен!");

  function toggleContactFields() {
    document.querySelectorAll(".contact-extra").forEach(field => field.style.display = "none");

    const selectedMethod = document.getElementById("contact-method").value;
    if (selectedMethod === "telegram") {
      document.getElementById("telegram-field").style.display = "block";
    } else if (selectedMethod === "whatsapp") {
      document.getElementById("whatsapp-field").style.display = "block";
    } else if (selectedMethod === "phone") {
      document.getElementById("phone-field").style.display = "block";
    }
  }

  function toggleServiceFields() {
    document.querySelectorAll(".service-extra, .checkbox-group").forEach(field => field.style.display = "none");

    const selectedService = document.getElementById("service").value;
    if (selectedService === "moving") {
      document.getElementById("moving-options").style.display = "flex"; // Чекбоксы переезда
    } else if (selectedService === "storage") {
      document.getElementById("storage-options").style.display = "flex"; // Чекбоксы хранения
    }
  }

  // Включаем обработчики событий
  document.getElementById("contact-method").addEventListener("change", toggleContactFields);
  document.getElementById("service").addEventListener("change", toggleServiceFields);
});
