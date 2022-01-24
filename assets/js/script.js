
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








