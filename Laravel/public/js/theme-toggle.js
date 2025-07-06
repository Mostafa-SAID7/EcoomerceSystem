document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("darkToggle");
    const body = document.body;
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        body.classList.add("dark-mode");
    }
    toggle?.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
    });
});
