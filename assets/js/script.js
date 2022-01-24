var questions = [
  {
    question: "What is the capital of Ireland?",
    option: "Cork",
    option: "Dublin",
    option: "Galway",
    option: "Sligo",
    answer: "b"

  },
  {
    question: "How many sides does an octagon have?",
    option: "12",
    option: "9",
    option: "6",
    option: "8",
    answer: "d"
  },
  {
    question: "What is the smallest planet in our solar system?",
    option: "Pluto",
    option: "Venus",
    option: "Mars",
    option: "Saturn",
    answer: "a"
  }
];

var score = 0;

function displayQuestion() {
  document.getElementById("question").innerHTML = (questions[0]);
  console.log(questions[0]);
  console.log(questions);
}
















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
*/



/*
document.getElementById("play").addEventListener("click", displayQuestion);

let questions = [ 
"What is the capital of Ireland?", 
"How many sides does an octagon have?",
"What is the smallest planet in our solar system?"
];


function displayQuestion() {
let numberOfQuestions = questions.length;

for (let i = 0; i < numberOfQuestions; i++) {
  document.getElementById("question").innerHTML = (questions)[0];
  }
}

function displayOptions(questions) {
    if (questions === questions[0])
    document.getElementById("opt1").innerHTML ="Dublin"
}
*/
