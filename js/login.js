
if(localStorage.getItem("userProfile")!=null){
    window.location.href = "./index.html";
}

async function verify(email, password){
    try{
        const response = await fetch('../json/users.json');
        if (!response.ok) {
        throw new Error("Failed to load file");
        }
        const users = await response.json();
        user = users.find(usr => usr.email == email && usr.password==password);
        console.log("Verified user: "+user);
        if(user ==  null){
            return -1;
        }
        else{
            return user.id;
        }
    }catch(error){
        console.error("Error:", error);
        return -1;
    }
    
}

document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    const showBtn = document.getElementById("show");

    form.addEventListener("submit", async function (e) {
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
        }
        const verified = await verify(emailValue, passwordValue);
        console.log(verified);
        if(verified>=0&&isValid){
            localStorage.setItem("userProfile", verified);
            window.location.href = "./index.html";
        }
        else if (isValid) {
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
