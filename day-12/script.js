const tasks = document.querySelector(".tasks");
const inputField = document.getElementById("myText");
const todobox = document.querySelector(".todo-box");
let count = 0;
console.log(tasks);
function func() {
  if (inputField.value === "") return;
  console.log(inputField.value);
  count++;
  if (count >= 8) {
    todobox.style.height = "auto";
  } else {
    todobox.style.height = "70%";
  }
  var btn = document.createElement("BUTTON");
  const para = document.createElement("p");
  const node = document.createTextNode(inputField.value);
  inputField.value = "";
  para.appendChild(btn);
  btn.classList.add("cross");
  para.appendChild(node);
  tasks.appendChild(para);
  btn.innerHTML = "X";
  btn.addEventListener("click", fun2);
}
function fun2(e) {
  count--;
  if (count < 8) {
    todobox.style.height = "70%";
  }
  e.target.parentElement.remove();
}
