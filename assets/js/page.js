var page = 1; //当前页
var PagesLen; //总页数 

function loadpage(p) {
    for (let i = 1; i < PagesLen + 1; i++) {
        document.getElementById("p" + i.toString()).style.display = "none";
        document.getElementById(i.toString()).children[0].className = "page";
        document.getElementById(i.toString()).classList.remove("now");
    }
    document.getElementById("p" + p.toString()).style.display = "flex";
    document.getElementById(p.toString()).children[0].className = "page active";
    document.getElementById(p.toString()).classList.add("now");
    document.getElementsByClassName("next")[0].children[0].className = "button";
    document.getElementsByClassName("prev")[0].children[0].className = "button";
    if (p == 1) {
        document.getElementsByClassName("prev")[0].children[0].className = "button disabled";
    }
    if (p == PagesLen) {
        document.getElementsByClassName("next")[0].children[0].className = "button disabled";
    }
    page = p;
}

function prev() {
    loadpage(page-1)
}

function next() {
    loadpage(page+1)
}

window.onload = function () {
    PagesLen = document.getElementById("section").children.length - 2;
    loadpage(1)
}
