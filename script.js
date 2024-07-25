//
var rN1 = Math.floor(Math.random() * 6) + 1;
var img1 = document.querySelector(".img1");
img1.setAttribute("src", "/images/dice" + rN1 + ".png");

var rN2 = Math.floor(Math.random() * 6) + 1;
var img2 = document.querySelector(".img2");
img2.setAttribute("src", "/images/dice" + rN2 + ".png");

var h1 = document.querySelector("h1");
if (rN1 === rN2) {
  h1.innerHTML = "DRAW";
} else if (rN1 > rN2) {
  h1.innerHTML = "P1";
} else if (rN1 < rN2) {
  h1.innerHTML = "P2";
}
