var problem = {
  prompt: "What is the value of x in the equation 2x + 5 = 11?",
  answer: "x is equal to 3"
};

function solveProblem() {
  var solution = document.getElementById("solution");
  if (problem.answer === "x is equal to 3") {
    solution.innerHTML = "Correct! The value of x in the equation 2x + 5 = 11 is indeed 3.";
  } else {
    solution.innerHTML = "Incorrect. Please try again.";
  }
}
