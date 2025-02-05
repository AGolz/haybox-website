// js/script.js

// Ждём полной загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
  console.log("HayBox сайт загружен!");

  /**
   * Плавная прокрутка для всех ссылок-якорей.
   * Ищем все <a> с href, начинающимся с "#", и при клике плавно переходим к целевому элементу.
   */
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Отменяем стандартное поведение ссылки
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });



  function toggleContactFields() {
  document.getElementById("telegram-field").classList.add("hidden");
  document.getElementById("whatsapp-field").classList.add("hidden");
  document.getElementById("phone-field").classList.add("hidden");

  const selectedMethod = document.getElementById("contact-method").value;
  if (selectedMethod === "telegram") {
    document.getElementById("telegram-field").classList.remove("hidden");
  } else if (selectedMethod === "whatsapp") {
    document.getElementById("whatsapp-field").classList.remove("hidden");
  } else if (selectedMethod === "phone") {
    document.getElementById("phone-field").classList.remove("hidden");
  }
}

function toggleServiceFields() {
  document.getElementById("moving-options").classList.add("hidden");
  document.getElementById("storage-options").classList.add("hidden");

  const selectedService = document.getElementById("service").value;
  if (selectedService === "moving") {
    document.getElementById("moving-options").classList.remove("hidden");
  } else if (selectedService === "storage") {
    document.getElementById("storage-options").classList.remove("hidden");
  }
}

// Валидация формы
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
