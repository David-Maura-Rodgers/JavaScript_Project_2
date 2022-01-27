const questionArr = [
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

// Gets all the elements needed and stores them in variables:
let quiz = document.getElementById('quiz-area');
let question = document.getElementById('question');
let answerOption = document.getElementsByClassName('answer-option');
let feedback = document.getElementById('feedback');
let nextButton = document.getElementById('next-button');
let restartButton = document.getElementById('restart-button');
let correctIcon = document.getElementById('correct');
let incorrectIcon = document.getElementById('incorrect');
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


/** checkAnswer
this refers to the value of the radio button. It will read in the value of each of these and feedback to user if they are
correct or incorrect
*/
function checkAnswer(event) {
  // Check for running score after each question (both else if below)
  if (this.value === questionArr[q].answer) {
    correctIcon.style.backgroundColor = "green";
    feedback.innerHTML = 'Correct!';

      if (currentQuestion == q)
          correct++;
          currentQuestion++;
} 
  else if (this.value != questionArr[q].answer) {
    incorrectIcon.style.backgroundColor = "red";
    feedback.innerHTML = 'Incorrect!' + '</br>' + 'The correct answer was: ' + '<strong>' + questionArr[q].answer + '</strong>';
      
      if (currentQuestion == q)
      currentQuestion++;
}

  // Check for total score after last question in questionArr (both else if below)
  else if (this.value === questionArr[q].answer && currentQuestion == (totalQuestions - 1)) {
    correct++;  
    currentQuestion++;
    correctIcon.style.backgroundColor = "green";
    feedback.innerHTML = 'Correct!' + '</br>' + 'Your total score: ' + correct + '/' + totalQuestions;
  }
  else if (this.value != questionArr[q].answer && currentQuestion == (totalQuestions - 1)) {
    currentQuestion++;
    incorrectIcon.style.backgroundColor = "red";
    feedback.innerHTML = 'Incorrect!' + '</br>' + 'The correct answer is: ' + '<strong>' + questionArr[q].answer + 
    '</strong>' + '</br>' + 'Your total score: ' + correct + '/' + totalQuestions;
    } 
  
scoreTracker.innerHTML = 'Score: ' + correct + '/' + (totalQuestions -1);

}

let i;
for (i = 0; i < answerOption.length; i++) {
answerOption[i].addEventListener("click", checkAnswer);
}

// Displays all questions/alternatives:
question.innerHTML = questionArr[q].question;
opt1.previousElementSibling.innerText = questionArr[a].options[0]
opt2.previousElementSibling.innerText = questionArr[a].options[1]
opt3.previousElementSibling.innerText = questionArr[a].options[2]
opt4.previousElementSibling.innerText = questionArr[a].options[3]

nextButton.addEventListener('click', nextQuestion);

function nextQuestion() {
  if (currentQuestion > q) {
      q++;
      a++;
      question.innerHTML = questionArr[q].question;
      opt1.previousElementSibling.innerText = questionArr[a].options[0]
      opt2.previousElementSibling.innerText = questionArr[a].options[1]
      opt3.previousElementSibling.innerText = questionArr[a].options[2]
      opt4.previousElementSibling.innerText = questionArr[a].options[3]

      opt1.value = "Four"
      opt2.value = "Nine"
      opt3.value = "Twelve"
      opt4.value = "Eight"

      correctIcon.style.backgroundColor = "transparent";
      incorrectIcon.style.backgroundColor = "transparent";
      
      feedback.textContent = "";

      opt1.checked = false;
      opt2.checked = false;
      opt3.checked = false;
      opt4.checked = false;
         
         /*
         if (opt1.value === "Four") {
             opt1.value == "1914"
         }
         if (opt2.value === "Nine") {
             opt2.value == "1916"
        }
          if (opt3.value === "Twelve") {
              opt3.value == "1918"
        }
          if (opt4.value === "Eight") {
              opt4.value =="1912"
        }
        */

        /*
        if (currentQuestion > q) {
        q++;
        a++;
        question.innerHTML = questionArr[q].question;
        opt1.previousElementSibling.innerText = questionArr[a].options[0]
        opt2.previousElementSibling.innerText = questionArr[a].options[1]
        opt3.previousElementSibling.innerText = questionArr[a].options[2]
        opt4.previousElementSibling.innerText = questionArr[a].options[3]

        opt1.value = "1914"
        opt2.value = "1916"
        opt3.value = "1918"
        opt4.value = "1912"

        correctIcon.style.backgroundColor = "transparent";
        incorrectIcon.style.backgroundColor = "transparent;";
        feedback.textContent = "";
        opt1.checked = false;
        opt2.checked = false;
        opt3.checked = false;
        opt4.checked = false;
        }
        */
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
