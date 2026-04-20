document.addEventListener("DOMContentLoaded", function () {

    let books = JSON.parse(localStorage.getItem("books")) || [];
    let table = document.getElementById("booksTable");

    books.forEach(book => {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${book._id}</td>
            <td>${book.title}</td>
            <td>${book.authors[0]||""}</td>
            <td>${book.categories.join(", ")}</td>
            <td>${book.count > 0 ? "Available" : "Borrowed"}</td>
        `;

        table.appendChild(row);
    });

});