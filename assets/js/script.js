
document.getElementById("play").addEventListener("click", displayQuestion);


function displayQuestion() {

const questions = [{
"question": "What is the capital of Ireland?", 
"option1": "Nikola Tesla",
"option2": "George Washington",
"option3": "Dublin",
"option4": "Elijah McCoy",
"answer": "3"
},
{
"question": "How many sides does an octagon have?",
"option1": "Nikola Tesla",
"option2": "George Washington",
"option3": "Dublin",
"option4": "8",
"answer": "4"
},
{
"question": "What country won the World Cup in 2018?",
"option1": "France",
"option2": "George Washington",
"option3": "Dublin",
"option4": "Elijah McCoy",
"answer": "1"
},
{
"question": "Who directed the 1995 movie, Heat?",
"option1": "Nikola Tesla",
"option2": "Michael Mann",
"option3": "Dublin",
"option4": "Elijah McCoy",
"answer": "2"
},
{
"question": "What is the smallest planet in our solar system?",
"option1": "Nikola Tesla",
"option2": "George Washington",
"option3": "Dublin",
"option4": "Elijah McCoy",
"answer": "3"
},
{
"question": "What element is denoted by the chemical symbol Sn in the periodic table?",
"option1": "Pluto",
"option2": "George Washington",
"option3": "Dublin",
"option4": "Elijah McCoy",
"answer": "1"
},
{
"question": "In which part of your body would you find the cruciate ligament?", 
"option1": "Nikola Tesla",
"option2": "George Washington",
"option3": "Dublin",
"option4": "Knee",
"answer": "4"
},
{
"question": "What was the Turkish city of Istanbul called before 1930?", 
"option1": "Nikola Tesla",
"option2": "Constanstinople",
"option3": "Dublin",
"option4": "Elijah McCoy",
"answer": "3"
},
{
"question": "What is the capital of Ireland?", 
"option1": "Nikola Tesla",
"option2": "George Washington",
"option3": "Whale",
"option4": "Elijah McCoy",
"answer": "3"
},
{
"question": "What does IPA stand for?", 
"option1": "---",
"option2": "India Pale Ale",
"option3": "Dublin",
"option4": "Elijah McCoy",
"answer": "2"
},
{
"question": "What grain is the Japanese spirit Sake made from?", 
"option1": "Rice",
"option2": "India Pale Ale",
"option3": "Dublin",
"option4": "Elijah McCoy",
"answer": "1"
}];
}

function displayOptions() {
}


function submitAnswer() {
let correctAnswer = document.getElementById("a3")
  if (correctAnswer === "a3")
    alert('You are correct')
    else {
      alert('wrong answer')
    }
}



/*
let result = ''; // Do not change this. You assign to this variable within the switch statement.
let questionOne = "What is the capital of Ireland"
let options = ["Cork", "Sligo", "Dublin", "Galway"]
let correctAnswer = "Dublin";

// write your code here
switch (correctAnswer) {
    case "Cork":
        result = "That username is incorrect, please try again.";
        break;
    case "Sligo":
        result = "Incorrect password, please try again.";
        break;
    case "Dublin":
        result = "Sorry this page doesn't exist.";
        break;
    case "Galway":
        result = "Sorry this page doesn't exist.";
        break;
    default:
        result = "Option not recognised";
}

console.log(result);
*/


/*
let question = document.getElementById("question");
question.innerHTML = "What is the capital of Ireland?"

let options = document.getElementById("options");
options.innerHTML = `
<h4>Options</h4>
<input type="radio" id="a1"> Cork
<input type="radio" id="a2"> Sligo
<input type="radio" id="a3"> Dublin
<input type="radio" id="a4"> Galway
`
}
*/












