let count = 1;

function addBook() {
  let tableBody = document.getElementById("table_body");

  count++;
  const tr = document.createElement("tr");
  tr.className = "tr_input";
  tr.innerHTML = `<td><input type="text" name="Name" placeholder="name" /></td>
                <td><input type="text" name="Author" placeholder="author" /></td>
                <td>
                    <input type="text" name="Category" placeholder="category" />
                </td>
                <td><input type="number" name="Count" placeholder="count" min ="1"></td>
                <td><button type="button" class="DeleteBtn" onclick="removeBook(this)">delete</button>

                </td>`;

  tableBody.appendChild(tr);

  console.log(count);
}
function removeBook(btn) {
  const table_body = document.getElementById("table_body");
  if (table_body.children.length > 1) {
    btn.closest("tr").remove();
    count--;
  } else {
    alert("You should have at least one row");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit_all_button");
  submitButton.addEventListener("click", function () {
    const rows = document.querySelectorAll("#table_body tr");
    let validForm = true;
    let booksData = [];

    rows.forEach((row, index) => {
      const name = row.querySelector('input[name="Name"]').value.trim();
      const author = row.querySelector('input[name="Author"]').value.trim();
      const category = row.querySelector('input[name="Category"]').value.trim();
      const bookCount = row.querySelector('input[name="Count"]').value.trim();

      if (!name || !author || !category || !bookCount) {
        alert(`Please fill out all fields in row ${index + 1}.`);
        validForm = false;
        return;
      }

      booksData.push({
        name: name,
        author: author,
        category: category,
        count: Number(bookCount),
      });
      if (isNaN(count) || Number(bookCount) <= 0) {
        alert(
          `Enter a valid Number that is greater than 0 in the row ${index + 1}.`,
        );
        validForm = false;
        return;
      }
    });
    if (validForm) {
      console.log("Books ready to submit:", booksData);
      alert("All books validated and submitted successfully!");

      document.getElementById("submit_form").reset();
    }
  });
});
