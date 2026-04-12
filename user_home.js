document.addEventListener("DOMContentLoaded", function () {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        document.getElementById("welcome").textContent =
            "Hello " + user.username + " 👋";
    }
});
