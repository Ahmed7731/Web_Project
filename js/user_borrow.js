function borrowBook(index) {

    let books = JSON.parse(localStorage.getItem("books")) || [];
    let borrowed = JSON.parse(localStorage.getItem("currentUser")).borrowedBooks || [];

    let book = books[index];

    
    if (book.count <= 0) {
        alert("Book not available ❌");
        return;
    }

    
    let exists = borrowed.some(b => b._id === book._id);
    if (exists) {
        alert("You already borrowed this book ");
        return;
    }

  
    borrowed.push({
        ...book,
        borrowDate: new Date().toLocaleDateString(),
        returnDate: new Date(Date.now() + 14 * 86400000).toLocaleDateString()
    });

    book.count--;

    localStorage.setItem("books", JSON.stringify(books));
    let user = JSON.parse(localStorage.getItem("currentUser"));
    console.log(user);
    user.borrowedBooks=borrowed;
    localStorage.setItem("currentUser", JSON.stringify(user));

    alert("Borrowed successfully ");

    
    location.reload();
}