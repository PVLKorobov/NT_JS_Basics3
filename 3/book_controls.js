addEventListener("DOMContentLoaded", () => {
    const fontButtons = document.querySelector(".book__control.book__control_font-size").querySelectorAll(".font-size");
    for (let button of fontButtons) {
        button.href = "javascript:void(0)";
        button.addEventListener("click", (event) => {
            let activeButton = document.querySelector(".font-size_active");

            activeButton.classList.remove("font-size_active")
            event.target.classList.add("font-size_active")

            let book = document.querySelector(".book");
            if (event.target.dataset.size != undefined) {
                book.className = `book font-size_${event.target.dataset.size}`;
            }
            else {
                book.className = "book";
            }
        })
    }
})