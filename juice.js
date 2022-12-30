let hamburger = document.getElementById("hamb-icon");
let x = document.getElementById("x-icon");
let nav = document.getElementById("hamburger-list");

function displayNav() {
    let hamburger = document.getElementById("hamb-icon").style;
    let x = document.getElementById("x-icon").style;
    let nav = document.getElementById("mobile-nav").style;

    hamburger.display = "none";
    x.display = "block";
    nav.display = "flex";
}

closeNav = () => {
    let hamburger = document.getElementById("hamb-icon").style;
    let x = document.getElementById("x-icon").style;
    let nav = document.getElementById("mobile-nav").style;

    hamburger.display = "block";
    x.display = "none";
    nav.display = "none";
}
