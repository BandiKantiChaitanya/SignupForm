const modeToggle = document.getElementById("mode-toggle");
const modeText = document.getElementById("mode-text");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    modeToggle.checked = false;
    modeText.textContent = "Light Mode";
} else {
    body.classList.remove("light-mode");
    modeToggle.checked = true;
    modeText.textContent = "Dark Mode";
}

modeToggle.addEventListener("change", () => {
    if (modeToggle.checked) {
        body.classList.remove("light-mode");
        modeText.textContent = "Dark Mode";
        localStorage.setItem("theme", "dark");
    } else {
        body.classList.add("light-mode");
        modeText.textContent = "Light Mode";
        localStorage.setItem("theme", "light");
    }
});
