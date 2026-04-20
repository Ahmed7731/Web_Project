function returnBook(id){
    let user = JSON.parse(localStorage.getItem("currentUser"));
    let books = JSON.parse(localStorage.getItem("books"));
    books.forEach(book => {if(book._id === id){book.count++;}});
    user.borrowedBooks=user.borrowedBooks.filter(book => book._id !== id);
    localStorage.setItem("currentUser",JSON.stringify(user));
    localStorage.setItem("books", JSON.stringify(books));
    location.reload();
}

document.addEventListener("DOMContentLoaded", function () {
    let borrowed = JSON.parse(localStorage.getItem("currentUser")).borrowedBooks || [];
    console.log(JSON.parse(localStorage.getItem("currentUser")));
    let table = document.getElementById("borrowedTable");

    table.innerHTML = `
    <tr>
        <th>Cover</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Borrow Date</th>
        <th>Return Date</th>
        <th>Early Return</th>
    </tr>`;

    borrowed.forEach(book => {
        table.innerHTML += `
        <tr>
            <td><img src = ${book.thumbnailUrl}></td>
            <td>${book.title}</td>
            <td>${book.authors[0]}</td>
            <td>${book.categories.join(", ")}</td>
            <td>${book.borrowDate}</td>
            <td>${book.returnDate}</td>
            <td><button onclick="returnBook(${book._id})">Return</button></td>
        </tr>
        `;
    });

});