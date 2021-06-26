const options = document.querySelector(".option-box");
const QUESTIONS = [
  {
    name: " India's largest city by population",
    option1: "Delhi",
    option2: "Mumbai",
    option3: "Pune",
    option4: "Bangalore",
    answer: "Mumbai",
  },
  {
    name: "India is a federal union comprising twenty-nine states and how many union territories?",
    option1: "6",
    option2: "7",
    option3: "8",
    option4: "9",
    answer: "7",
  },
  {
    name: "What are the major languages spoken in Andhra Pradesh?",
    option1: " English and Telugu",
    option2: "Telugu and Urdu",
    option3: "Telugu and Kannada",
    option4: "All of the above languages",
    answer: "Telugu and Urdu",
  },
  {
    name: "What is the state flower of Haryana?",
    option1: "Lotus",
    option2: "Rhododendron",
    option3: "Golden Shower",
    option4: "Not declared",
    answer: "Rhododendron",
  },
  {
    name: " Where was the International Conference on 'Yoga for Diabetes' organized from January 4-6, 2017?",
    option1: "New Delhi ",
    option2: "Jharkhand",
    option3: "Jammu and Kashmir",
    option4: "Haryana",
    answer: "New Delhi ",
  },
];
var count = 0;
var score = 0;
let question = QUESTIONS[0];
function loadQuestion() {
  document.querySelector(".change > span").innerHTML = count + 1;
  for (let i = 1; i <= 7; i += 2) {
    options.childNodes[i].style.backgroundColor = "#212843";
  }
  document.querySelector(".question").innerHTML = question.name;
  document.querySelector(".option1").innerHTML = question.option1;
  document.querySelector(".option2").innerHTML = question.option2;
  document.querySelector(".option3").innerHTML = question.option3;
  document.querySelector(".option4").innerHTML = question.option4;
}

options.addEventListener("click", (e) => {
  if (e.target === options) return;

  if (e.target.innerHTML === question.answer) {
    score++;
    document.querySelector(".score > span").innerHTML = score;
  }

  console.log(options.childNodes);
  for (let i = 1; i <= 7; i += 2) {
    if (options.childNodes[i].innerHTML === question.answer) {
      options.childNodes[i].style.backgroundColor = "green";
    } else {
      options.childNodes[i].style.backgroundColor = "red";
    }
  }
  setTimeout(() => {
    console.log("hello");
    count++;
    question = QUESTIONS[count];
    if (count === 5) {
      var element = document.querySelector(".question-box");
      element.remove();
    }
    loadQuestion();
  }, 1000);
});
loadQuestion();
