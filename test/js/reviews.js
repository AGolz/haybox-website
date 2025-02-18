document.addEventListener("DOMContentLoaded", function () {
    const reviews = document.querySelectorAll(".review-image");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let currentIndex = 0;

    function showReview(index) {
        reviews.forEach((review, i) => {
            if (i === index) {
                review.style.opacity = "0"
                setTimeout(() => {
                    review.classList.add("active");
                    review.style.opacity = "1";
                }, 300);
            } else {
                review.classList.remove("active");
            }
        });
    }

    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        showReview(currentIndex);
    });

    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % reviews.length;
        showReview(currentIndex);
    });

    showReview(currentIndex);
});
