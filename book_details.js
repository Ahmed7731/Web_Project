document.addEventListener('DOMContentLoaded', () => {
    const titlebox = document.getElementById('title');
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
