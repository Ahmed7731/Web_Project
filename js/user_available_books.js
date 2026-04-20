
document.addEventListener("DOMContentLoaded", function () {

    let books = JSON.parse(localStorage.getItem("books")) || [];
    let borrowed = JSON.parse(localStorage.getItem("currentUser")).borrowedBooks || [];

    let table = document.querySelector("table");

    table.innerHTML = `
    <tr>
        <th>Cover</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Status</th>
        <th>Borrow</th>
        <th>Details</th>
    </tr>`;

    books.forEach((book, index) => {

        let alreadyBorrowed = borrowed.some(b => b._id === book._id);
        let available = book.count > 0 && !alreadyBorrowed;
        let row = table.insertRow(-1);
        cover = row.insertCell(0);
        title = row.insertCell(1);
        author = row.insertCell(2);
        categories = row.insertCell(3);
        availability = row.insertCell(4);
        borrow = row.insertCell(5);
        details = row.insertCell(6);


        let img = document.createElement("img");
        img.src = book.thumbnailUrl;
        cover.appendChild(img);
        title.textContent = book.title;
        author.textContent = book.authors[0];
        categories.textContent = book.categories.join(", ");
        availability.textContent = book.count>0? "Available": "Not available";
        let button1 = document.createElement("button");
        button1.textContent = book.count>0? "Borrow": "Borrowed";
        button1.disabled = book.count==0;
        button1.onclick = () => {borrowBook(index);};
        borrow.appendChild(button1)
        let button2 = document.createElement("button");
        button2.textContent = "Details";
        button2.onclick = ()=>{window.location.href = `user_book_details.html?bookID=${((typeof book._id) != "number" ? book._id.$oid: book._id)}`;};
        details.appendChild(button2);

        // table.innerHTML += `
        // <tr>
            
        //     <td>${book.title}</td>
        //     <td>${book.authors}</td>
        //     <td>${book.categories}</td>
        //     <td>${book.count > 0 ? "Available" : "Not Available"}</td>

        //     <td>
        //         ${
        //             alreadyBorrowed
        //             ? `<button dd>Borrowed </button>`
        //             : available
        //             ? `<button onclick="borrowBook(${index})">Borrow</button>`
        //             : `<button disabled>Not Available</button>`
        //         }
        //     </td>

        //     <td>
        //         <button onclick="goDetails(${})">Details</button>
        //     </td>
        // </tr>
        // `;
    });

});

function goDetails(id) { 
    window.location.href = `user_book_details.html?bookID=${id}`;
}