var email = document.getElementById("email");
var userSpan = document.getElementById("userspan");
var section = document.getElementById("section");
var rollNo = document.getElementById("rollno");
let flag = true;

// Form Submit
function valid(e) {
  flag = true;
  e.preventDefault();

  if (email.value === "" || section.value === "" || rollNo.value === "") {
    alert("Fill all the fields!");
    flag = false;
  }

  checkRollNo();
  checkEmail();

  if (flag) {
    window.location.href = "welcome.html";
  }
}

// Check Email With Regex
function checkEmail() {
  const emailErr = document.getElementById("emailErr");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.value.match(emailRegex)) {
    if (email.value === "") {
      emailErr.innerHTML = "Please Enter Your Email.";
    } else {
      emailErr.innerHTML = "Please enter a valid email.";
    }
    email.classList.add("red");
    email.classList.remove("black");
    flag = false;
  } else {
    emailErr.innerHTML = "";
    email.classList.add("black");
    email.classList.remove("red");
  }
}

// Check Roll No With Regex
function checkRollNo() {
  const rollNoErr = document.getElementById("rollNoErr");
  const rollNoregex = /^\d+$/;

  if (!rollNo.value.match(rollNoregex)) {
    if (rollNo.value === "") {
      rollNoErr.innerHTML = "Please Enter Your Roll No.";
    } else {
      rollNoErr.innerHTML = "Only Numbers Allowed.";
    }
    rollNo.classList.add("red");
    rollNo.classList.remove("black");
    flag = false;
  } else {
    rollNoErr.innerHTML = "";
    rollNo.classList.add("black");
    rollNo.classList.remove("red");
  }
}
