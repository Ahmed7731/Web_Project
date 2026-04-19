import { loadBooks } from "./utils.js";

window.onload = function () {

    document.getElementById("add_book").onclick = function () {

        let table = document.querySelector("#submit_table tbody");

        let row = document.createElement("tr");



        table.appendChild(row);
    };

    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete")) {
            e.target.closest("tr").remove();
        }
    });
    document.getElementById("upload_btn").onclick = function (){
        uploadJson();
    }
    document.getElementById("submit_all_button").onclick = function () {

        let rows = document.querySelectorAll("#submit_table tbody tr");
        let books = JSON.parse(localStorage.getItem("books")) || [];

        rows.forEach(row => {

            let inputs = row.querySelectorAll("input");

            let book = {
                _id: inputs[0].value.trim(),
                title: inputs[1].value.trim(),
                authors: inputs[2].value.trim(),
                categories: inputs[3].value.trim(),
                pageCount: Number(inputs[4].value),
                longDescription: inputs[5].value.trim(),
                thumbnailUrl:inputs[6].value.trim(),
            };

            if (!book._id || !book.title) {
                alert("Fill required fields");
                return;
            }

            let exists = books.some(b => b._id === book._id);
            if (exists) {
                alert("Duplicate ID");
                return;
            }

            books.push(book);
        });

        localStorage.setItem("books", JSON.stringify(books));

        alert("Books added successfully !");

        location.reload();
    };
};

 async function uploadJson(){
        let table = document.getElementById("submit_table");
        const books = await loadBooks();
        localStorage.setItem("books", JSON.stringify(books));
        alert("Books added successfully !");
        location.reload();
}