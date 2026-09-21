// Task 2: Display User's Name Dynamically
let userName = prompt("Enter your name:");
if (userName) {
  document.getElementById("welcome").innerText = "Welcome, " + userName + "!";
}

// Task 1: Normal function - Area of rectangle
function areaOfRectangle(length, width) {
  return length * width;
}

let area = areaOfRectangle(10, 5);
console.log("Area of rectangle (10x5) = " + area);
document.getElementById("area-result").innerText = "Length=10, Width=5 => Area = " + area;

// Aero function - Voter eligibility
const checkEligibility = (age) => {
  if (age > 18) {
    return "Eligible to Vote";
  } else {
    return "Not Eligible to Vote";
  }
}

function checkVote() {
  let age = document.getElementById("ageInput").value;
  let result = checkEligibility(age);
  document.getElementById("vote-result").innerText = result;
}

console.log("Age 20: " + checkEligibility(20));
console.log("Age 16: " + checkEligibility(16));
