var questionArr = [
  {
    question: "What is the capital of Ireland?",
    options: ["Cork", "Dublin", "Galway", "Sligo"],
    answer: 1,
  },
  {
    question: "How many sides does an octagon have?",
    options: ["Four", "Nine", "Twelve", "Eight"],
    answer: 3,
  },
  {
    question: "What year did World War I end?",
    options: ["1914", "1916", "1918", "1912"],
    answer: 2,
  }
];

//let button = document.getElementById("play");
//play.addEventListener("click", displayQuestion);


// Gets all the elements needed and stores them in variables:
let quiz = document.getElementById('quiz-area');
let question = document.getElementById('question');
let answerButton = document.getElementsByClassName('answer-button');
let nextButton = document.getElementById('next-button');
let q = 0;
let a = 0;
let totalQuestions = 3;
let currentQuestion = 0;

function displayQuestion(event) {
  if (this.innerHTML === questionArr[q].answer && currentQuestion == (totalQuestions - 1)) {
      currentQuestion++;
      question.innerHTML = 'Correct!' + '</br>' + 'Your total score: ' + correct + '/' + totalQuestions;
  } 
  else if (this.innerHTML != questionArr[q].answer && currentQuestion == (totalQuestions - 1)) {
      currentQuestion++;
      question.innerHTML = 'Incorrect!' + '</br>' + 'The correct answer was: ' + '<strong>' + questionArr[q].answer + 
      '</strong>' + '</br>' + 'Your total score: ' + correct + '/' + totalQuestions;
      } 
  else if (this.innerHTML === questionArr[q].answer && currentQuestion == q) {
      question.innerHTML = 'Correct!';
      currentQuestion++;
  } 
  else if (this.innerHTML != questionArr[q].answer && currentQuestion == q) {
      question.innerHTML = 'Incorrect!' + '</br>' + 'The correct answer was: ' + '<strong>' + questionArr[q].answer + '</strong>';
      currentQuestion++;
  }
  
  //scoreTracker.innerHTML = 'Score: ' + correct + '/' + totalQuestions; // Displays a value based on correctly answered questions and the total amount of questions.
}
let i;
for (i = 0; i < answerButton.length; i++){
answerButton[i].addEventListener("click", displayQuestion);
}

// Displays all questions/alternatives:
question.innerHTML = questionArr[q].question;
answerButton[0].textContent = questionArr[a].options[0]
answerButton[1].textContent = questionArr[a].options[1]
answerButton[2].textContent = questionArr[a].options[2]
answerButton[3].textContent = questionArr[a].options[3]

nextButton.addEventListener('click', nextQuestion);

function nextQuestion(){
  if (currentQuestion > q){
      q++;
      a++;
      question.innerHTML = questionArr[q].question;
      answerButton[0].textContent = questionArr[a].options[0]
      answerButton[1].textContent = questionArr[a].options[1]
      answerButton[2].textContent = questionArr[a].options[2]
      answerButton[3].textContent = questionArr[a].options[3]
      quizBox.style.backgroundColor = 'white';
  }
  else {
      alert('Please select your answer to continue');
  }
}






//Dont forget the tracker for which round you are on, and to increase it each time
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
