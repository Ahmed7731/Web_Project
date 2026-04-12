import {loadBooks} from './utils.js'

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('bookID');
const booksData = await loadBooks();
const bookData = booksData[id-1];
console.log(bookData);
document.getElementById('title').innerHTML ="<strong>" + bookData.title + "</strong>";
document.getElementById('author').innerHTML = "<p><strong>Author: </strong>"+bookData.authors[0]+"</p>";
document.getElementById('thumbnail').setAttribute('src', bookData.thumbnailUrl);
document.getElementById('date').innerHTML ="<p><strong>Date: </strong>"+ bookData.publishedDate.$date.split('T')[0];
document.getElementById('longDesc').textContent = bookData.longDescription;
document.getElementById('categories').innerHTML = "<p><strong>Categories: </strong>"+ bookData.categories.join(", ") + "</p>";

document.getElementById('isbn').innerHTML ="<p><strong>ISBN: </strong>"+ bookData.isbn + "</p>";


document.addEventListener('DOMContentLoaded', () => {
    let titlebox = document.getElementById('title');
    titlebox.textContent = bookData.title;
    const bookname = titlebox.textContent;
    document.title = `book: ${bookname}`;

    const clickbtn = document.getElementById('btn');
    
    if (clickbtn) {
        clickbtn.addEventListener('click', () => {
            const check = confirm("request this item?");
            if (check) {
                alert("request logged.");
                clickbtn.textContent = "pending...";
                clickbtn.disabled = true;
                clickbtn.style.opacity = "0.5";
            }
        });
    }
});
