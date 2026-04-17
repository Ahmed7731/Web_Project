import {loadUser} from "./utils.js";

document.addEventListener("DOMContentLoaded", async (e)=>{
    if(localStorage.getItem("userProfile")!=null){
        let logout = document.createElement("a");
        logout.textContent = "Sign out";
        logout.href = "./signout.html";
        document.getElementsByTagName("nav")[0].appendChild(logout);
        console.log(localStorage.getItem("userProfile"));
        let user = await loadUser(localStorage.getItem("userProfile"));
        console.log(user);
        if(user.isAdmin==1){
            let nav = [];
            nav.push(document.createElement("a"));
            nav.push(document.createElement("a"));
            nav.push(document.createElement("a"));
            nav[0].textContent = "Add Book";
            nav[0].href = "./admin_add_book.html";
            nav[1].textContent = "Edit Book";
            nav[1].href = "./admin_edit_book.html";
            nav[2].textContent = "Manage Books";
            nav[2].href = "./admin_manage_books.html";
            nav.forEach(item=>document.getElementsByTagName("nav")[0].appendChild(item));
        }
    }
    else{
        let login = document.createElement("a");
        login.textContent = "Login";
        login.href = "./login.html";
        let signup = document.createElement("a");
        signup.textContent = "Sign up";
        signup.href = "./signup.html";
        document.getElementsByTagName("nav")[0].appendChild(login);
        document.getElementsByTagName("nav")[0].appendChild(signup);
    }
})
