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

// Radio buttons
let opt1 = document.getElementById('opt1');
let opt2 = document.getElementById('opt2');
let opt3 = document.getElementById('opt3');
let opt4 = document.getElementById('opt4');

// Scoring System
let questionIndex = 0;
let answerIndex = 0;
let correct = 0;
let totalQuestions = 4;
let currentQuestion = 0;

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
    feedback.innerHTML = 'Incorrect!' + '</br>' + 'The correct answer was: ' + '<strong>' + questionArr[questionIndex].answer + '</strong>';
      
    if (currentQuestion === questionIndex) {
      currentQuestion++;
    }
  }

  // Check for total score after last question in questionArr (both else if below)
  else if (this.value === questionArr[questionIndex].answer && currentQuestion === (totalQuestions - 1)) {
    correct++;  // TODO: Double check if there is code duplication in this block
    currentQuestion++;
    correctIcon.style.backgroundColor = "green";
    feedback.innerHTML = 'Correct!' + '</br>' + 'Your total score: ' + correct + '/' + totalQuestions;
  }
  else if (this.value !== questionArr[questionIndex].answer && currentQuestion === (totalQuestions - 1)) {
    currentQuestion++; // TODO: Double check if there is code duplication in this block
    incorrectIcon.style.backgroundColor = "red";
    feedback.innerHTML = 'Incorrect!' + '</br>' + 'The correct answer is: ' + '<strong>' + questionArr[questionIndex].answer +
    '</strong>' + '</br>' + 'Your total score: ' + correct + '/' + totalQuestions;
  }
  
  scoreTracker.innerHTML = 'Score: ' + correct + '/' + (totalQuestions -1);
}

// Listener for on click events for check answer
let i;
for (i = 0; i < answerOption.length; i++) {
    answerOption[i].addEventListener("click", checkAnswer);
}

// Displays all questions/alternatives:
question.innerHTML = questionArr[questionIndex].question;
opt1.previousElementSibling.innerText = questionArr[answerIndex].options[0]
opt2.previousElementSibling.innerText = questionArr[answerIndex].options[1]
opt3.previousElementSibling.innerText = questionArr[answerIndex].options[2]
opt4.previousElementSibling.innerText = questionArr[answerIndex].options[3]

// Adding a listener for on click events for the next question
nextButton.addEventListener('click', nextQuestion);

/** Function: nextQuestion
   This function reacts to a click on the next question button
 */
function nextQuestion() {
  if (currentQuestion > questionIndex) {
      questionIndex++;
      answerIndex++;
      question.innerHTML = questionArr[questionIndex].question;

      // Here I'm assigning the option names to the radio button
      opt1.previousElementSibling.innerText = questionArr[answerIndex].options[0]
      opt2.previousElementSibling.innerText = questionArr[answerIndex].options[1]
      opt3.previousElementSibling.innerText = questionArr[answerIndex].options[2]
      opt4.previousElementSibling.innerText = questionArr[answerIndex].options[3]

      // Here I'm assigning the option names to the answer values for the next question
      opt1.value = questionArr[answerIndex].options[0]
      opt2.value = questionArr[answerIndex].options[1]
      opt3.value = questionArr[answerIndex].options[2]
      opt4.value = questionArr[answerIndex].options[3]

      // Resetting all the elements for the next question
      correctIcon.style.backgroundColor = "transparent";
      incorrectIcon.style.backgroundColor = "transparent";
      
      feedback.textContent = "";

      opt1.checked = false;
      opt2.checked = false;
      opt3.checked = false;
      opt4.checked = false;
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
