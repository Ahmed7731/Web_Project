document.addEventListener("DOMContentLoaded", function () {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    if (user) {
        document.getElementById("welcome").textContent =
            "Hello " + user.username + " 👋";
    }
});
document.addEventListener("DOMContentLoaded", function () {

    const logoutBtn = document.getElementById("logout-btn");

    logoutBtn.addEventListener("click", function (e) {
        e.preventDefault();

        // remove user session
        let users = JSON.parse(localStorage.getItem("users"));
        const currUser = JSON.parse(localStorage.getItem("currentUser"));
        users = users.map(user => user.username==currUser.username ? currUser:user);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.removeItem("currentUser");

        // redirect
        window.location.href = "home.html";
    });

});