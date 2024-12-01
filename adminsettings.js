function saveSettings() {
    var theme = document.getElementById("theme").value;
    var backgroundColor = document.getElementById("background-color").value;
    var errorBox = document.getElementById("error-msg");
    var successBox = document.getElementById("success-msg");
    var suggestedTheme = document.getElementById("suggested-theme");

    if (theme === "light" && backgroundColor !== "#ffffff") {
        errorBox.style.display = "block";
        suggestedTheme.textContent = "dark";
        successBox.style.display = "none";
    } else if (theme === "dark" && backgroundColor === "#ffffff") {
        errorBox.style.display = "block";
        suggestedTheme.textContent = "light";
        successBox.style.display = "none";
    } else {
        errorBox.style.display = "none";
        successBox.style.display = "block";
        // Perform save operation (you can add your backend logic here)
    }
}

function validateColorSelection() {
    var errorBox = document.getElementById("error-msg");
    errorBox.style.display = "none";
}