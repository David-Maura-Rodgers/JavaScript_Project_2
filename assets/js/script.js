var questions = [
  {
    question: "What is the capital of Ireland?",
    options: ["Cork", "Dublin", "Galway", "Sligo"],
    answer: 1,
  },
  {
    question: "How many sides does an octagon have?",
    options: ["Four", "Nine", "Twelve", "Eight"],
    answer: 3,
  }
];

//Dont forget the tracker for which round you are on, and to increase it each time
function displayQuestion(round=0) {
  document.getElementById("question").innerHTML = (questions[round].question);
  const options = document.querySelectorAll(".opt");
  
  options.forEach((option, index) => {
    option.innerText = questions[round].options[index];
  });
};
document.getElementById("play").addEventListener("click", displayQuestion);


const options = document.querySelectorAll(".opt");
options.forEach(option => option.addEventListener("click", (event) => {
console.log(event.target)
﻿}))
















//document.getElementById("play").addEventListener("click", displayQuestion);
//let question = document.getElementById("myList")[0].innerHTML;
/*
function displayQuestion() {
for(var i = 0; i < questions.length; i++){
     var response = document.getElementById("question").innerHTML(questions[i]);
     if(response == questions[i].answer){
          score++;
          alert("Correct!");
     } else {
          alert("WRONG!");
    }
  }
}
document.getElementById("score").innerHTML
//alert("you got " + score + "/" + questions.length);

function displayQuestion() {
let numberOfQuestions = questions.length;

for (let i = 0; i < numberOfQuestions; i++) {
  document.getElementById("question").innerHTML = (questions)[0];
  }
}
*/
