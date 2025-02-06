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

document.addEventListener("DOMContentLoaded", function () {
    console.log("HayBox сайт загружен!");

    // Функция переключения полей контактов
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

    // Функция переключения доп. услуг
    function toggleServiceFields() {
        document.getElementById("moving-options").style.display = "none";
        document.getElementById("storage-options").style.display = "none";
        document.getElementById("service-label").style.display = "none";

        const selectedService = document.getElementById("service").value;

        if (selectedService === "moving") {
            document.getElementById("moving-options").style.display = "block";
            document.getElementById("service-label").style.display = "block";
        } else if (selectedService === "storage") {
            document.getElementById("storage-options").style.display = "block";
            document.getElementById("service-label").style.display = "block";
        }
    }

    // Функция отправки формы через Netlify Functions
    async function sendToTelegram(event) {
    event.preventDefault();

    const form = document.getElementById("contact-form");
    const formData = new FormData(form);

    // Функция для экранирования спецсимволов в Markdown Telegram
    const escapeMarkdown = (text) => text.replace(/_/g, "\\_");

    let message = `📌 *Новая заявка!*\n\n`;
    message += `👤 *Имя:* ${escapeMarkdown(formData.get("name"))}\n`;
    message += `📞 *Способ связи:* ${formData.get("contact-method")}\n`;
    message += `🛠 *Услуга:* ${formData.get("service")}\n`;

    // Контактные данные
    const contactMethod = formData.get("contact-method");
    if (contactMethod === "telegram") {
        message += `🔹 Telegram: ${escapeMarkdown(formData.get("telegram"))}\n`;
    } else if (contactMethod === "whatsapp") {
        message += `🔹 WhatsApp: ${escapeMarkdown(formData.get("whatsapp"))}\n`;
    } else if (contactMethod === "phone") {
        message += `📱 Телефон: ${formData.get("phone")}\n`;
    }

    // Определяем, выбрана ли галочка "Не звонить"
    const noCallTelegram = document.getElementById("no-call-telegram").checked ? "Не звонить" : "";
    const noCallWhatsApp = document.getElementById("no-call-whatsapp").checked ? "Не звонить" : "";

    // Добавляем "Не звонить" в сообщение
    if (contactMethod === "telegram" && noCallTelegram) {
        message += `🚫 *${noCallTelegram} в Telegram*\n`;
    }
    if (contactMethod === "whatsapp" && noCallWhatsApp) {
        message += `🚫 *${noCallWhatsApp} в WhatsApp*\n`;
    }

    // Доп. услуги для переезда
    if (formData.get("service") === "moving") {
        message += `\n🚚 *Доп. услуги для переезда:*\n`;
        document.querySelectorAll("#moving-options input:checked").forEach(item => {
            message += `✅ ${escapeMarkdown(item.parentElement.innerText.trim())}\n`;
        });
    }

    // Доп. услуги для хранения
    if (formData.get("service") === "storage") {
        message += `\n📦 *Доп. услуги для хранения:*\n`;
        document.querySelectorAll("#storage-options input:checked").forEach(item => {
            message += `✅ ${escapeMarkdown(item.parentElement.innerText.trim())}\n`;
        });

        if (formData.get("storage-tariff")) {
            message += `💰 *Выбранный тариф:* ${formData.get("storage-tariff")}\n`;
        }
    }

    try {
        const response = await fetch("/.netlify/functions/telegram", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: message })
        });

        if (response.ok) {
            alert("✅ Заявка успешно отправлена!");
            form.reset();
        } else {
            alert("❌ Ошибка при отправке! Попробуйте позже.");
        }
    } catch (error) {
        alert("❌ Ошибка соединения!");
        console.error(error);
    }
}
    // Назначаем обработчики событий
    document.getElementById("contact-method").addEventListener("change", toggleContactFields);
    document.getElementById("service").addEventListener("change", toggleServiceFields);
    document.getElementById("contact-form").addEventListener("submit", sendToTelegram);

    // Скрываем чекбоксы при загрузке
    document.getElementById("moving-options").style.display = "none";
    document.getElementById("storage-options").style.display = "none";
    document.getElementById("service-label").style.display = "none";
});
