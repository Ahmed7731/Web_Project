let books = [
    { id: "1", name: "Clean Code", author: "Robert Martin", category: "Programming", description: "Best practices for writing clean code." },
    { id: "2", name: "Atomic Habits", author: "James Clear", category: "Self Development", description: "Build good habits." },
    { id: "3", name: "1984", author: "George Orwell", category: "Novel", description: "Dystopian novel." }
];

const stored = JSON.parse(localStorage.getItem("books"));
if (stored) books = stored;

const select = document.getElementById("bookSelect");

function loadBooks() {
    select.innerHTML = "";
    books.forEach((book, index) => {
        const option = document.createElement("option");
        option.textContent = book.name;
        option.value = index;
        select.appendChild(option);
    });
}

function loadBookDetails(index) {
    const book = books[index];
    document.getElementById("bookId").value = book.id;
    document.getElementById("bookName").value = book.name;
    document.getElementById("author").value = book.author;
    document.getElementById("category").value = book.category;
    document.getElementById("description").value = book.description;
}

select.addEventListener("change", () => {
    loadBookDetails(select.value);
});

document.getElementById("editForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const index = select.value;

    books[index] = {
        id: document.getElementById("bookId").value,
        name: document.getElementById("bookName").value,
        author: document.getElementById("author").value,
        category: document.getElementById("category").value,
        description: document.getElementById("description").value
    };

    localStorage.setItem("books", JSON.stringify(books));
    alert("Book updated successfully ✅");
});


loadBooks();
loadBookDetails(0);