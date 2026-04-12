document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm_password");

    const usernameError = document.getElementById("username-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const confirmPasswordError = document.getElementById("confirm-password-error");
    
    const adminYes = document.getElementById("admin_yes");
    const adminNo = document.getElementById("admin_no");
    const adminError = document.getElementById("admin-error");

    const showBtn1 = document.getElementById("show1");
    const showBtn2 = document.getElementById("show2");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let usernameValue = username.value.trim();
        let emailValue = email.value.trim();
        let passwordValue = password.value.trim();
        let confirmPasswordValue = confirmPassword.value.trim();

        usernameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
        confirmPasswordError.textContent = "";
        adminError.textContent = "";

        let isValid = true;

        // Username check
        if (usernameValue === "") {
            usernameError.textContent = "Username is required";
            isValid = false;
        }
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

// Confirm password check 
if (confirmPasswordValue === "") {
    confirmPasswordError.textContent = "Please confirm your password";
    isValid = false;
} else if (passwordValue !== confirmPasswordValue) {
    confirmPasswordError.textContent = "Passwords do not match";
    isValid = false;
}
// Radio check
if (!adminYes.checked && !adminNo.checked) {
    adminError.textContent = "Please select an option";
    isValid = false;
}

    if (isValid) {

    const selectedAdmin = document.querySelector('input[name="is_admin"]:checked');

    if (selectedAdmin.value === "1") {
        window.location.href = "admin_home.html"; // admin page
    } else {
        window.location.href = "user_home.html"; // user page
    }
}
});
    
function setupToggle(input, button) {
    button.style.display = "none";

    button.addEventListener("click", function () {
        if (input.type === "password") {
            input.type = "text";
            button.textContent = "Hide";
        } else {
            input.type = "password";
            button.textContent = "Show";
        }
    });

    input.addEventListener("input", function () {
        if (input.value === "") {
            input.type = "password";
            button.style.display = "none";
            button.textContent = "Show";
        } else {
            button.style.display = "inline-block";
        }
    });
}
setupToggle(password, showBtn1);
setupToggle(confirmPassword, showBtn2);
});
