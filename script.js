document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
        if (savedTheme === "dark-mode") {
            themeToggle.textContent = "Light Mode";
        }
    }
    
    themeToggle.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            localStorage.setItem("theme", "");
            themeToggle.textContent = "Dark Mode";
        } else {
            body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark-mode");
            themeToggle.textContent = "Light Mode";
        }
    });
});
