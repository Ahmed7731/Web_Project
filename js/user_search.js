const books = JSON.parse(localStorage.getItem("books")) || [];

function search(searchParameter){
    searchParameter = searchParameter.toLowerCase();
    const header  = document.getElementById("searchTable").rows[0].cloneNode(true);
    document.getElementById("searchTable").replaceChildren();
    const searchTable = books.filter(book => book.title.toLowerCase().includes(searchParameter)||book.categories.join().toLowerCase().includes(searchParameter)||(book.authors[0]||"").toLowerCase().includes(searchParameter));
    let table = document.getElementById("searchTable");
    table.appendChild(header);
    searchTable.forEach(element => {
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
        t4.textContent = element.count >0 ? "Available": "Not Available";
        let img = document.createElement("img");
        img.src = element.thumbnailUrl;
        t0.appendChild(img);
        let link = document.createElement("button");
        link.textContent = "View";
        link.onclick = (e) => {window.location.href = "./user_book_details.html?bookID="+((typeof element._id) != "number" ? element._id.$oid: element._id)};
        t5.appendChild(link);
    });
    
}



document.addEventListener("DOMContentLoaded", (a) => {
    console.log("test");
    search("");
});

 document.getElementById("searchForm").addEventListener("submit", (e)=>{
    e.preventDefault();
    const searchVal = document.getElementById("searchInput").value.trim();
    search(searchVal);
});


