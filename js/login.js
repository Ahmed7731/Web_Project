document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();

        let users = JSON.parse(localStorage.getItem("users")) || [];

        let user = users.find(u =>
            u.email === email && u.password === password
        );

        if (!user) {
            alert("Invalid email or password ❌");
            return;
        }

        localStorage.setItem("currentUser", JSON.stringify(user));

        alert("Login successful ✅");

        if (user.isAdmin) {
            window.location.href = "admin_home.html";
        } else {
            window.location.href = "user_home.html";
        }
    });

});