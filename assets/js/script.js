let questionArr = [
  {
    question: "What is the capital of Ireland?",
    options: ["Cork", "Dublin", "Galway", "Sligo"],
    answer: "Dublin" 
  },
  
  {
    question: "How many sides does an octagon have?",
    options: ["Four", "Nine", "Twelve", "Eight"],
    answer: "Eight"  
  },
  
  {
    question: "What year did World War I end?",
    options: ["1914", "1916", "1918", "1912"],
    answer: "1918"
  }
];

//let button = document.getElementById("play");
//play.addEventListener("click", displayQuestion);


// Gets all the elements needed and stores them in variables:
let quiz = document.getElementById('quiz-area');
let question = document.getElementById('question');
let answerOption = document.getElementsByClassName('answer-option');
let nextButton = document.getElementById('next-button');
let restartButton = document.getElementById('restart-button');
let scoreTracker = document.getElementById('score');
let opt1 = document.getElementById('opt1');
let opt2 = document.getElementById('opt2');
let opt3 = document.getElementById('opt3');
let opt4 = document.getElementById('opt4');

let q = 0;
let a = 0;
let correct = 0;
let totalQuestions = 4;
let currentQuestion = 0;

function displayQuestion(event) {
  if (this.innerHTML === questionArr[q].answer && currentQuestion == (totalQuestions - 1)) {
      correct++;  
      currentQuestion++;
      question.innerHTML = 'Correct!' + '</br>' + 'Your total score: ' + correct + '/' + totalQuestions;
  } 
  else if (this.innerHTML != questionArr[q].answer && currentQuestion == (totalQuestions - 1)) {
      currentQuestion++;
      correct++;
      question.innerHTML = 'Incorrect!' + '</br>' + 'The correct answer was: ' + '<strong>' + questionArr[q].answer + 
      '</strong>' + '</br>' + 'Your total score: ' + correct + '/' + totalQuestions;
      } 
  else if (this.innerHTML === questionArr[q].answer && currentQuestion == q) {
      question.innerHTML = 'Correct!';
      correct++;
      currentQuestion++;
  } 
  else if (this.innerHTML != questionArr[q].answer && currentQuestion == q) {
      question.innerHTML = 'Incorrect!' + '</br>' + 'The correct answer was: ' + '<strong>' + questionArr[q].answer + '</strong>';
      currentQuestion++;
  }
  
scoreTracker.innerHTML = 'Score: ' + correct + '/' + (totalQuestions -1);

}

let i;
for (i = 0; i < answerOption.length; i++){
answerOption[i].addEventListener("click", displayQuestion);
}

// Displays all questions/alternatives:
question.innerHTML = questionArr[q].question;
opt1.previousElementSibling.innerText = questionArr[a].options[0]
opt2.previousElementSibling.innerText = questionArr[a].options[1]
opt3.previousElementSibling.innerText = questionArr[a].options[2]
opt4.previousElementSibling.innerText = questionArr[a].options[3]

nextButton.addEventListener('click', nextQuestion);

function nextQuestion(){
  if (currentQuestion > q){
      q++;
      a++;
      question.innerHTML = questionArr[q].question;
      opt1.previousElementSibling.innerText = questionArr[a].options[0]
      opt2.previousElementSibling.innerText = questionArr[a].options[1]
      opt3.previousElementSibling.innerText = questionArr[a].options[2]
      opt4.previousElementSibling.innerText = questionArr[a].options[3]
  }
  else {
      alert('Please select your answer to continue');
  }
}

// Reloads/resets the entire quiz when button is clicked:
restartButton.addEventListener('click', restartQuiz);
function restartQuiz(){
    location.reload();
}





//Don't forget the tracker for which round you are on, and to increase it each time
/*
function displayQuestion(round=0) {
  
  document.getElementById("question").innerHTML = (questionArr[round].question);
  round++;

  const options = document.querySelectorAll(".opt");
  options.forEach((option, index) => {
    option.innerText = questionArr[round].options[index];
  });
  
};
*/


/*
const options = document.querySelectorAll(".opt");
options.forEach(option => option.addEventListener("click", (event) => {
console.log(event.target)
﻿}))
*/
















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
