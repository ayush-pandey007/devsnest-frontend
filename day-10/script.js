const containier = document.querySelector(".containier");
const box = document.querySelector(".box");
const cards = document.querySelectorAll(".cards").length;
const inner = document.querySelectorAll(".cards > .inner");
const images = document.querySelectorAll(".cards > .inner > .flip-card-back");
let firstCard = 0;
let firstCard2;
let secondCard2;
let secondCard = 0;
let state1 = true;
let state2 = false;
for (let i = 0; i < cards; i++) {
  document
    .querySelectorAll(".cards > .inner")
    [i].addEventListener("click", fliper);
}
function fliper() {
  this.classList.toggle("inner1");
  if (state1) {
    firstCard = this.childNodes[3].childNodes[1].src;
    firstCard2 = this;
    state1 = false;
    state2 = true;
  } else if (state2) {
    secondCard = this.childNodes[3].childNodes[1].src;
    secondCard2 = this;
    console.log(typeof secondCard);
    state2 = false;
    state1 = true;
    checkIt();
  }
}

function checkIt() {
  console.log(secondCard2.classList);
  firstCard === secondCard ? success() : fail();
}
function success() {
  setTimeout(() => {
    firstCard2.classList.remove("inner");
    secondCard2.classList.remove("inner");
  }, 1000);

  // firstCard = 0;
  // firstCard2 = 0;
  // secondCard2 = 0;
  // secondCard = 0;
  // state1 = true;
  // state2 = false;
  // console.log("heheh");
}
function fail() {
  // firstCard = 0;
  // firstCard2 = 0;
  // secondCard2 = 0;
  // secondCard = 0;
  // state1 = true;
  // state2 = false;
  setTimeout(() => {
    secondCard2.classList.toggle("inner1");
    firstCard2.classList.toggle("inner1");
  }, 500);
}
(function shuffle() {
  document.querySelectorAll(".cards").forEach((inner) => {
    var index = Math.floor(Math.random() * 16);
    inner.style.order = index;
  });
})();
// box.addEventListener("click", (e) => {
//   console.log(cards);
//   let q = e.target.cards.id;
//   console.log(q);
//   q.classList.toggle("cards2");
// });
// const card = document.querySelector(".card");
// card.addEventListener("click", function () {
//   this.classList.toggle("card1");
// });
// const content = document.querySelector(".content");
// content.addEventListener("click", function () {
//   this.classList.toggle("content1");
// });
