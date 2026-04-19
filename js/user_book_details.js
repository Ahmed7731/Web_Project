document.addEventListener("DOMContentLoaded", function () {

    let books = JSON.parse(localStorage.getItem("books")) || [];
    let index = localStorage.getItem("selectedBook");


    if (index === null || !books[index]) {
        document.body.innerHTML = "<h2>No Book Selected ❌</h2>";
        return;
    }

    let book = books[index];

    
    document.getElementById("title").innerText = book.name;
    document.getElementById("bName").innerText = book.name;
    document.getElementById("bAuthor").innerText = book.author;
    document.getElementById("bCategory").innerText = book.category;
    document.getElementById("bStatus").innerText =
    document.getElementById("bDesc").innerText = book.description;
        book.count > 0 ? "Available" : "Not Available";

   
    document.getElementById("borrowBtn").onclick = function () {
        borrowBook(index);
        window.location.href = "user_borrowed_books.html";
    };

});