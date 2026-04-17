import { loadBooks } from "./utils.js";

const books = await loadBooks();

function search(searchParameter){
    searchParameter = searchParameter.toLowerCase();
    const header  = document.getElementById("searchResults").rows[0].cloneNode(true);
    document.getElementById("searchResults").replaceChildren();
    const searchResults = books.filter(book => book.title.toLowerCase().includes(searchParameter)||book.categories.join().toLowerCase().includes(searchParameter)||book.authors[0].toLowerCase().includes(searchParameter));
    let table = document.getElementById("searchResults");
    table.appendChild(header);
    searchResults.forEach(element => {
        let row = table.insertRow(-1);
        let t0 = row.insertCell(0)
        let t1 = row.insertCell(1);
        let t2 = row.insertCell(2);
        let t3 = row.insertCell(3);
        let t4 = row.insertCell(4);
        let t5 = row.insertCell(5);
        t1.textContent = element.title;
        t2.textContent = element.authors[0];
        t3.textContent = element.categories.join(", ");
        t4.textContent = "Available";
        let img = document.createElement("img");
        img.src = element.thumbnailUrl;
        t0.appendChild(img);
        let link = document.createElement("a");
        link.textContent = "View";
        console.log(element.id);
        link.href = "./book_details.html?bookID="+element._id;
        t5.appendChild(link);
    });
    
}


document.addEventListener("DOMContentLoaded", (a) => {
    search(""); 
});
const form = document.querySelector("form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const searchVal = document.getElementById("search").value.trim();
    search(searchVal);
    

});

