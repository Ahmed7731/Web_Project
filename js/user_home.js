import { loadUser } from "./utils.js";

document.addEventListener("DOMContentLoaded", async function () {

    const user = await loadUser(localStorage.getItem("userProfile"));
    if (user) {
        document.getElementById("welcome").textContent =
            "Hello " + user.username + " 👋";
    }
});
