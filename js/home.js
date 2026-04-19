document.addEventListener("DOMContentLoaded", function () {

    const loginBtn = document.getElementById("login-btn");
    const signupBtn = document.getElementById("signup-btn");

    loginBtn.addEventListener("click", function () {
        window.location.href = "login.html";
    });

    signupBtn.addEventListener("click", function () {
        window.location.href = "signup.html";
    });

});