

var companyName = "wishtree";
let studentName = "mahesh";

// global variables

var age ="";
let dob="";
function conceptofletandConst () {
  // local variables
  age = 20;
  dob = 1997;
  dob=1999;
  studentName="jyotishman";
}

conceptofletandConst();

function redirectToDifferentPage () {
  window.open("https://snapdeal.com");
  window.open("https://snapdeal.com", "_self");
}

function storeMyName(name) {
  localStorage.setItem("name of student", name)
}

function deleteMyName () {
  localStorage.removeItem("name of student")
}

function storeinSessionStorage() {
  sessionStorage.setItem("courseName", "React native")
}


