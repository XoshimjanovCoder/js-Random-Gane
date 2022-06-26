const btn = document.getElementById("btn");
const raqam = document.getElementById("raqam1");
const result = document.getElementById("btn_resultad");
const raqam2 = document.getElementById("raqam2");
const btn2 = document.getElementById("btn2");
const winner = document.getElementById("text_winner");

let random1;
let random2;

btn.addEventListener("click", function () {
  random1 = Math.floor(Math.random() * 150);
  raqam.textContent = random1;
});
btn2.addEventListener("click", function () {
  random2 = Math.floor(Math.random() * 100);
  raqam2.innerHTML = random2;
});
btn_resultad.addEventListener("click", function () {
  if (random1 > random2) {
    alert("1-o'yinchi G'olib");
  } else if (random1 < random2) {
    alert("2-o'yinchi G'olib");
  }
});
