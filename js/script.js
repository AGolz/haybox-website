// js/script.js

// Ждём полной загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
  console.log("HayBox сайт загружен!");

  /**
   * Плавная прокрутка для всех ссылок-якорей.
   */
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // === 🛠 Добавляем обработчики событий для форм ===
  document.getElementById("contact-method").addEventListener("change", toggleContactFields);
  document.getElementById("service").addEventListener("change", toggleServiceFields);

  function toggleContactFields() {
    console.log("Выбран способ связи:", document.getElementById("contact-method").value);
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
    console.log("Выбрана услуга:", document.getElementById("service").value);
    document.querySelectorAll(".service-extra").forEach(field => field.style.display = "none");

    const selectedService = document.getElementById("service").value;
    if (selectedService === "moving") {
      document.getElementById("moving-options").style.display = "block";
    } else if (selectedService === "storage") {
      document.getElementById("storage-options").style.display = "block";
    }
  }

  // Валидация формы перед отправкой
  document.querySelector(".contact-form").addEventListener("submit", function(event) {
    if (!validateForm()) {
      event.preventDefault(); // Отмена отправки, если валидация не пройдена
    }
  });

  function validateForm() {
    const contactMethod = document.getElementById("contact-method").value;
    const telegram = document.getElementById("telegram").value.trim();
    const whatsapp = document.getElementById("whatsapp").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;

    if (contactMethod === "telegram" && telegram === "") {
      alert("Пожалуйста, укажите ник в Telegram.");
      return false;
    }

    if (contactMethod === "whatsapp" && whatsapp === "") {
      alert("Пожалуйста, укажите ник в WhatsApp.");
      return false;
    }

    if (contactMethod === "phone" && phone === "") {
      alert("Пожалуйста, укажите номер телефона.");
      return false;
    }

    if (service === "") {
      alert("Пожалуйста, выберите услугу (Переезд или Хранение).");
      return false;
    }

    return true;
  }
});
