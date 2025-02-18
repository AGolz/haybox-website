document.addEventListener("DOMContentLoaded", function () {
    const reviews = document.querySelectorAll(".review-image");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let currentIndex = 0;

    function showReview(index) {
        reviews.forEach((review, i) => {
            review.classList.remove("active");
            review.style.opacity = "0"; // Сначала скрываем все
        });

        setTimeout(() => {
            reviews[index].classList.add("active");
            reviews[index].style.opacity = "1"; // Затем показываем нужный
        }, 50);
    }

    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        showReview(currentIndex);
    });

    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % reviews.length;
        showReview(currentIndex);
    });

    reviews[currentIndex].classList.add("active");
    reviews[currentIndex].style.opacity = "1";
});
