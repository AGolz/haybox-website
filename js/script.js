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

  /**
   * Автоматический слайдер для блока отзывов.
   * Слайдер предполагает, что контейнер с отзывами имеет класс .reviews-slider,
   * а каждый отдельный отзыв – класс .review.
   */
  const slider = document.querySelector('.reviews-slider');
  if (slider) {
    let currentIndex = 0;
    const reviews = slider.querySelectorAll('.review');
    const reviewCount = reviews.length;

    // Функция для перехода к следующему отзыву
    function slideReviews() {
      // Вычисляем индекс следующего отзыва, циклично
      currentIndex = (currentIndex + 1) % reviewCount;
      // Получаем горизонтальное смещение следующего отзыва относительно контейнера
      const offset = reviews[currentIndex].offsetLeft;
      // Прокручиваем контейнер с плавной анимацией
      slider.scrollTo({
        left: offset,
        behavior: 'smooth'
      });
    }

    // Запускаем автопереключение каждые 5 секунд
    setInterval(slideReviews, 5000);
  }

  /**
   * Обработчик отправки формы "Оставить заявку".
   * Здесь перехватываем отправку формы, чтобы можно было добавить свою логику (например, AJAX-запрос).
   */
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Предотвращаем стандартное поведение отправки формы
      // Здесь можно добавить код для отправки данных на сервер через fetch/AJAX
      console.log("Форма отправлена!");

      // Сброс формы (если требуется)
      contactForm.reset();

      // Информируем пользователя
      alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
    });
  }
});
