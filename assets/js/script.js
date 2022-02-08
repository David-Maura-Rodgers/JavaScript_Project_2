// Array where questions are stored
const questionArr = [
  {
    question: "Q.1: What is the capital of Ireland?",
    options: ["Cork", "Dublin", "Galway", "Sligo"],
    answer: "Dublin" 
  },
  { 
    question: "Q.2: How many sides does an octagon have?",
    options: ["Four", "Nine", "Twelve", "Eight"],
    answer: "Eight"  
  },
  {
    question: "Q.3: What year did World War I end?",
    options: ["1914", "1916", "1918", "1912"],
    answer: "1918"
  },
  {
    question: "Q.4: In which part of your body would you find the cruciate ligament?",
    options: ["Knee", "Elbow", "Arm", "Nose"],
    answer: "Knee"
  },
  {
    question: "Q.5: What is the smallest planet in our solar system?",
    options: ["Pluto", "Mercury", "Venus", "Mars"],
    answer: "Mercury"
  },
  {
    question: "Q.6: How many films have Al Pacino and Robert De Niro appeared in together?",
    options: ["Seven", "Nine", "Six", "Four"],
    answer: "Four"
  },
  {
    question: "Q.7: What was the most popular girls name in the UK in 2019?",
    options: ["Emily", "Grace", "Fiadh", "Sophie"],
    answer: "Emily"
  },
  {
    question: "Q.8: In what year was the Battle of Clontarf?",
    options: ["1014", "1022", "1114", "1016"],
    answer: "1014"
  }
];

// Get and set variables
let question = document.getElementById('question');
let answerOption = document.getElementsByClassName('answer-option');
let feedback = document.getElementById('feedback');
let nextButton = document.getElementById('next-button');
let restartButton = document.getElementById('restart-button');
let correctIcon = document.getElementById('correct');
let incorrectIcon = document.getElementById('incorrect');
let scoreTracker = document.getElementById('score');

// Radio buttons
let opt1 = document.getElementById('opt1');
let opt2 = document.getElementById('opt2');
let opt3 = document.getElementById('opt3');
let opt4 = document.getElementById('opt4');

// Scoring System
let questionIndex = 0;
let answerIndex = 0;
let correct = 0;
let totalQuestions = 8;
let currentQuestion = 0;
let lastQuestion = questionArr[questionArr.length - 1];


/** Function: checkAnswer
     This refers to the value of the radio button. It will read in the value
     of each of these and feedback to user if they are correct or incorrect
*/

function checkAnswer(event) {
  // Check for running score after each question (both else if below)
  if (this.value === questionArr[questionIndex].answer) {
    correctIcon.style.backgroundColor = "green";
    feedback.innerHTML = 'Correct!';

    if (currentQuestion === questionIndex) {
      correct++;
      currentQuestion++;
    }
  }
  else if (this.value !== questionArr[questionIndex].answer) {
    incorrectIcon.style.backgroundColor = "red";
    feedback.innerHTML = 'Incorrect!' + '</br>' + 'The correct answer was: ' + '<strong>' + questionArr[questionIndex].answer + 
    '</strong>';
      
    if (currentQuestion === questionIndex) {
      currentQuestion++;
    }
  }
  // checks for last question in array and displays total score in feedback area to user
  if (currentQuestion === totalQuestions) {
    feedback.innerHTML =  '</strong>' + '</br>' + 'Quiz complete!' + ' ' + 'Your total score: ' + correct + '/' + totalQuestions;
    document.getElementById('feedback').style.color = "purple";
  }
 
  scoreTracker.innerHTML = 'Score: ' + correct + '/' + totalQuestions;
}

// Listener for on click events to call check answer function
let i;
for (i = 0; i < answerOption.length; i++) {
    answerOption[i].addEventListener("click", checkAnswer);
}

// Displays all questions/alternatives:
question.innerHTML = questionArr[questionIndex].question;
opt1.previousElementSibling.innerText = questionArr[answerIndex].options[0];
opt2.previousElementSibling.innerText = questionArr[answerIndex].options[1];
opt3.previousElementSibling.innerText = questionArr[answerIndex].options[2];
opt4.previousElementSibling.innerText = questionArr[answerIndex].options[3];


// Listener for on click events to disable radio button once user selects an answer
let ind;
for (ind = 0; ind < answerOption.length; ind++) {
    answerOption[ind].addEventListener("click", disable);
}

/** Function: disable
     Listener for on click events to disable radio button once user selects an answer
*/
function disable(event) {
  document.getElementById('opt1').disabled = true;
  document.getElementById('opt2').disabled = true;
  document.getElementById('opt3').disabled = true;
  document.getElementById('opt4').disabled = true;
}
  
// Adding a listener for on click events for the next question
nextButton.addEventListener('click', nextQuestion);

/** Function: nextQuestion
   This function reacts to a click on the next question button
 */
function nextQuestion() {
  console.log(questionIndex)
  if (currentQuestion > questionIndex) {
    questionIndex++;
    answerIndex++;
    question.innerHTML = questionArr[questionIndex].question;

    // Here I'm assigning the option names to the radio button
    opt1.previousElementSibling.innerText = questionArr[answerIndex].options[0];
    opt2.previousElementSibling.innerText = questionArr[answerIndex].options[1];
    opt3.previousElementSibling.innerText = questionArr[answerIndex].options[2];
    opt4.previousElementSibling.innerText = questionArr[answerIndex].options[3];

    // Here I'm assigning the option names to the answer values for the next question
    opt1.value = questionArr[answerIndex].options[0];
    opt2.value = questionArr[answerIndex].options[1];
    opt3.value = questionArr[answerIndex].options[2];
    opt4.value = questionArr[answerIndex].options[3];

    // Resetting all the elements for the next question
    correctIcon.style.backgroundColor = "transparent";
    incorrectIcon.style.backgroundColor = "transparent";
      
    feedback.textContent = "";

    document.getElementById('opt1').checked = false;
    document.getElementById('opt2').checked = false;
    document.getElementById('opt3').checked = false;
    document.getElementById('opt4').checked = false;

    document.getElementById('opt1').disabled = false;
    document.getElementById('opt2').disabled = false;
    document.getElementById('opt3').disabled = false;
    document.getElementById('opt4').disabled = false;
  }
  else if (currentQuestion === questionIndex[7]) {
    console.log(currentQuestion)
    console.log(questionIndex)
    document.getElementById('next-button').style.visibility = "hidden";    
    alert('Click the restart button to try the quiz again');
    }
  else {
    alert('Please select your answer to continue');
  }
}


// Hides next button at the end of the quiz
// nextButton.addEventListener ('click', hideNext);
// function hideNext() {
  // if (questionIndex === questionIndex[7]) {
  // document.getElementById('next-button').style.visibility = "hidden";    
  // alert('Click the restart button to try the quiz again');
  // }
// }

// Reloads/resets the entire quiz when button is clicked
restartButton.addEventListener('click', restartQuiz);
function restartQuiz(){
  location.reload();
}


// https://www.w3schools.com/jsref/prop_style_visibility.asp