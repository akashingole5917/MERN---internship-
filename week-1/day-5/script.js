let text = document.getElementById("myText");
let size = 20;

// Task 1
function changeColor(color) {
  text.style.color = color;
}
function changeFont(font) {
  text.style.fontFamily = font;
}
function increaseSize() {
  size = size + 2;
  text.style.fontSize = size + "px";
}
function decreaseSize() {
  size = size - 2;
  text.style.fontSize = size + "px";
}
function makeBold() {
  text.style.fontWeight = "bold";
}
function makeItalic() {
  text.style.fontStyle = "italic";
}
function makeUnderline() {
  text.style.textDecoration = "underline";
}
function makeNormal() {
  text.style.fontWeight = "normal";
  text.style.fontStyle = "normal";
  text.style.textDecoration = "none";
}

// Task 2
function validateForm() {
  let name = document.getElementById("nameInput").value;
  let email = document.getElementById("emailInput").value;
  let nameErr = document.getElementById("nameError");
  let emailErr = document.getElementById("emailError");

  if (name == "") {
    nameErr.innerText = "Name cannot be empty";
  } else {
    nameErr.innerText = "";
  }
  if (email == "") {
    emailErr.innerText = "Email cannot be empty";
  } else {
    emailErr.innerText = "";
  }
}

// Task 3
function calc(type) {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let res = document.getElementById("calcResult");

  if (document.getElementById("num1").value == "" || document.getElementById("num2").value == "") {
    res.innerText = "Please enter both numbers";
    return;
  }

  if (type == "add") res.innerText = "Result: " + (n1 + n2);
  if (type == "sub") res.innerText = "Result: " + (n1 - n2);
  if (type == "mul") res.innerText = "Result: " + (n1 * n2);
  if (type == "div") res.innerText = "Result: " + (n1 / n2);
}

// Bonus
function lightTheme() {
  document.body.style.background = "white";
  document.body.style.color = "black";
}
function darkTheme() {
  document.body.style.background = "black";
  document.body.style.color = "white";
}
