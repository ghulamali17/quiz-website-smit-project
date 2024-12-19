var userdata = [];
var hide = document.getElementById("hide");
hide.style.display = "none";
var username = document.getElementById("username");
var userSpan = document.getElementById("userspan");
var grade = document.getElementById("class");
var rollNo = document.getElementById("rollno");

function valid(e) {
  e.preventDefault();

  if (username.value == "" || grade.value == "" || rollNo.value == "")
    return alert("Fill all the fields!");
  for (let i = 0; i < userdata.length; i++) {
    if (rollno.value == userdata[i].rollNo) {
      if (username.value != userdata[i].username) {
        alert("Enter correct username or roll-No");
      }
      return;
    }
  }
  // checkData();
  userdata2 = {
    username: username.value,
    grade: grade.value,
    rollNo: rollNo.value,
  };
  localStorage.setItem(`User ${rollNo.value}`, JSON.stringify(userdata2));
  userdata = [
    ...userdata,
    {
      username: username.value,
      grade: grade.value,
      rollNo: rollNo.value,
    },
  ];
  console.log(userdata);
  username.value = "";
  grade.value = "";
  rollNo.value = "";
  e.target.parentElement.style.display = "none";
  hide.style.display = "block";
}

function validname(e) {
  if (username.value.length < 3 && username.value.length != 0) {
    userSpan.innerText = "Username must contain more than 3 Char";
    username.setAttribute("class", "red");
  } else if (username.value.length == 0) {
    userSpan.innerText = "";
    username.setAttribute("class", "black");
  } else {
    userSpan.innerText = "";
    username.setAttribute("class", "black");
  }
}
