/* window.onload = function() {
    document.getElementById('pa').className = "visible";
}; */

var pr1 = document.getElementById("p1");
var bT1 = document.getElementById("bt1");

const Http = new XMLHttpRequest();
const url = 'http://api.icndb.com/jokes/random';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
}

function makeItVisible() {
    pr1.className = "visible";
}

function alertMessage() {
    alert("Alert Message");
}

window.onload = makeItVisible();
bT1.addEventListener("click", () => alertMessage());

/* btV.addEventListener("click", () => makeItVisible()); */