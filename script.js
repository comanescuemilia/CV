document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const carousel = new Swiper("#careerCarousel", {
        loop: true,
        navigation: {
            nextEl: ".carousel-control-next",
            prevEl: ".carousel-control-prev",
        },
        mousewheel: true,
        keyboard: true,
    });

    // Load saved theme from localStorage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeToggle.textContent = "Light Mode";
    }

    themeToggle.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "Dark Mode";
        } else {
            body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "Light Mode";
        }
    });
});

