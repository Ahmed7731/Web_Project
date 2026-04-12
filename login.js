document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    const showBtn = document.getElementById("show");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let emailValue = email.value.trim();       
        let passwordValue = password.value.trim(); 

        emailError.textContent = "";
        passwordError.textContent = "";

        let isValid = true;

        // Email check
        if (emailValue === "") {
            emailError.textContent = "Email is required";
            isValid = false;
        } else if (!emailValue.includes("@")) {
            emailError.textContent = "Invalid email format";
            isValid = false;
        }

        // Password check
        if (passwordValue === "") {
            passwordError.textContent = "Password is required";
            isValid = false;
        } else if (passwordValue.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters";
            isValid = false;
        }

        if (isValid) {
            passwordError.textContent = "Email or password is incorrect";
        }
    });
    
showBtn.style.display = "none";

showBtn.addEventListener("click", function () {
    if (password.value === "") return;

    if (password.type === "password") {
        password.type = "text";
        showBtn.textContent = "Hide";
    } else {
        password.type = "password";
        showBtn.textContent = "Show";
    }
});

password.addEventListener("input", function () {
    if (password.value === "") {
        password.type = "password";
        showBtn.style.display = "none";
        showBtn.textContent = "Show";
    } else {
        showBtn.style.display = "inline-block";
    }
});
});
