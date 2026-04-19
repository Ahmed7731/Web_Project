document.addEventListener("DOMContentLoaded", function () {

    let books = JSON.parse(localStorage.getItem("books")) || [];
    let borrowed = JSON.parse(localStorage.getItem("borrowedBooks")) || [];

    let table = document.querySelector("table");

    table.innerHTML = `
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Author</th>
        <th>Category</th>
        <th>Status</th>
        <th>Borrow</th>
        <th>Details</th>
    </tr>`;

    books.forEach((book, index) => {

        let alreadyBorrowed = borrowed.some(b => b.id === book.id);
        let available = book.count > 0 && !alreadyBorrowed;

        table.innerHTML += `
        <tr>
            <td>${book.id}</td>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.category}</td>
            <td>${book.count > 0 ? "Available" : "Not Available"}</td>

            <td>
                ${
                    alreadyBorrowed
                    ? `<button disabled>Borrowed </button>`
                    : available
                    ? `<button onclick="borrowBook(${index})">Borrow</button>`
                    : `<button disabled>Not Available</button>`
                }
            </td>

            <td>
                <button onclick="goDetails(${index})">Details</button>
            </td>
        </tr>
        `;
    });

});

function goDetails(index) {
    localStorage.setItem("selectedBook", index);
    window.location.href = "user_book_details.html";
}