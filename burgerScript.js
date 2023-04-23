let navBtn = document.querySelector(".navBtn");
let nav = document.querySelector(".nav");

navBtn.addEventListener("click", function () {
    if (nav.classList.contains("active")) {
        this.setAttribute("aria-expanded", "false");
        this.setAttribute("aria-label", "menu");
        nav.classList.remove("active");
    } 
    else {
        nav.classList.add("active");
        this.setAttribute("aria-label", "close menu");
        this.setAttribute("aria-expanded", "true");
    }
});