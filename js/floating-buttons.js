document.addEventListener("DOMContentLoaded", function () {
	const chatButton = document.querySelector(".floating-button.chat");
	const chatMenu = document.querySelector(".chat-menu");

	chatButton.addEventListener("click", function (event) {
		event.stopPropagation();
		chatMenu.classList.toggle("active");
	});

	document.addEventListener("click", function (event) {
		if (!event.target.closest(".floating-button.chat")) {
			chatMenu.classList.remove("active");
		}
	});
});
