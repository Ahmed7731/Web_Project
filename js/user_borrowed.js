import { loadUser, loadBooks } from "./utils.js";

if(localStorage.getItem("userProfile")==null){
    window.location.href = "./login.html";
}
const books = await loadBooks();
const user = await loadUser(localStorage.getItem("userProfile"));


console.log(user);
const borrowedBooks = user.borrowedBooks;
let table = document.getElementById("bBooks");
borrowedBooks.forEach(element => {
    const elementData = books.find(book => book._id==element);
    let row = table.insertRow(-1);
    let t0 = row.insertCell(0)
    let t1 = row.insertCell(1);
    let t2 = row.insertCell(2);
    let t3 = row.insertCell(3);
    let t4 = row.insertCell(4);
    let t5 = row.insertCell(5);
    t1.textContent = elementData.title;
    t2.textContent = elementData.authors[0];
    t3.textContent = elementData.categories.join(", ");
    t4.textContent = "Not set";
    let img = document.createElement("img");
    img.src = elementData.thumbnailUrl;
    t0.appendChild(img);
    t5.textContent = "Not set";
});
