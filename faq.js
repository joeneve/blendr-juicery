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

/* you might have to write different ids for every single bullet point */

function open1() {
    let minus = document.getElementById("minus1").style;
    let plus = document.getElementById("plus1").style;
    let answer = document.getElementById("answer1").style;
    minus.display = "block";
    plus.display = "none"; 
    answer.display = "block";
}

function close1() {
    let minus = document.getElementById("minus1").style;
    let plus = document.getElementById("plus1").style;
    let answer = document.getElementById("answer1").style;
    minus.display = "none";
    plus.display = "block"; 
    answer.display = "none";
}

function open2() {
    let minus = document.getElementById("minus2").style;
    let plus = document.getElementById("plus2").style;
    let answer = document.getElementById("answer2").style;
    minus.display = "block";
    plus.display = "none"; 
    answer.display = "block";
}

function close2() {
    let minus = document.getElementById("minus2").style;
    let plus = document.getElementById("plus2").style;
    let answer = document.getElementById("answer2").style;
    minus.display = "none";
    plus.display = "block"; 
    answer.display = "none";
}

function open3() {
    let minus = document.getElementById("minus3").style;
    let plus = document.getElementById("plus3").style;
    let answer = document.getElementById("answer3").style;
    minus.display = "block";
    plus.display = "none"; 
    answer.display = "block";
}

function close3() {
    let minus = document.getElementById("minus3").style;
    let plus = document.getElementById("plus3").style;
    let answer = document.getElementById("answer3").style;
    minus.display = "none";
    plus.display = "block"; 
    answer.display = "none";
}

function open4() {
    let minus = document.getElementById("minus4").style;
    let plus = document.getElementById("plus4").style;
    let answer = document.getElementById("answer4").style;
    minus.display = "block";
    plus.display = "none"; 
    answer.display = "block";
}

function close4() {
    let minus = document.getElementById("minus4").style;
    let plus = document.getElementById("plus4").style;
    let answer = document.getElementById("answer4").style;
    minus.display = "none";
    plus.display = "block"; 
    answer.display = "none";
}


function openBulletOne() {
    let minus = document.getElementById("minus1").style;
    let plus = document.getElementById("plus1").style;
    let answer = document.getElementById("answer1").style;
    if (minus.display === "block") {
        close1();
    } else {
        open1();
    }
}

function openBulletTwo() {
    let minus = document.getElementById("minus2").style;
    let plus = document.getElementById("plus2").style;
    let answer = document.getElementById("answer2").style;
    if (minus.display === "block") {
        close2();
    } else {
        open2();
    }
}

function openBulletThree() {
    let minus = document.getElementById("minus3").style;
    let plus = document.getElementById("plus3").style;
    let answer = document.getElementById("answer3").style;
    if (minus.display === "block") {
        close3();
    } else {
        open3();
    }
}

function openBulletFour() {
    let minus = document.getElementById("minus4").style;
    let plus = document.getElementById("plus4").style;
    let answer = document.getElementById("answer4").style;
    if (minus.display === "block") {
        close4();
    } else {
        open4();
    }
}