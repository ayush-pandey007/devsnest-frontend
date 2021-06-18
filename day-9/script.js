const balcony = document.querySelector(".balcony");
let bs = document.querySelector(".bookedseats > span");
let rs = document.querySelector(".remaningseats > span");
let bookedseats = 0;
let remaningseats = 100;
balcony.addEventListener("click", (e) => {
  let color = e.target.style.backgroundColor;
  if (color === "") {
    color = "red";
  }
  console.log(color);
  if (color === "red") {
    color = "#440047";
    bookSeats();
  } else {
    color = "red";
    cancel();
  }
  e.target.style.backgroundColor = color;
});
function bookSeats() {
  bookedseats++;
  remaningseats--;
  bs.innerHTML = bookedseats;
  rs.innerHTML = remaningseats;
}
function cancel() {
  bookedseats--;
  remaningseats++;
  bs.innerHTML = bookedseats;
  rs.innerHTML = remaningseats;
}
