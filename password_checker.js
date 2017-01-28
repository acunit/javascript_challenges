//You are writing the user registration page for a secure web site.
//On the registration page, the user has to enter a user ID and a password, which
//has to adhere to the to following criteria:

//User Id and password cannot be the same
//User ID and password have to be atleast 6 characters long.
//User Id cannot contain the following characters: !#$
//Password has to contain atlease one of: !#$
//Password cannot be "password"

var userId = prompt("Please enter what User ID you would like.")
var pass = prompt("Please enter your password.")

//User Id and password cannot be the same
userId != pass;

//User ID and password have to be atleast 6 characters long.
userId.length >= 6;
pass.length >= 6;

//User Id cannot contain the following characters: !#$
!userId.includes("!")
!userId.includes("#")
!userId.includes("$")

//Password has to contain atlease one of: !#$
pass.includes("!")
pass.includes("#")
pass.includes("$")

//Password cannot be "password"
pass != "password";

userId.length >= 6 && pass.length >= 6

!userId.includes("!") && !userId.includes("#") && !userId.includes("$")

pass.includes("!") || pass.includes("#") || pass.includes("$")

// Function to determine whether userId is valid
function isuserIdvalid(string) {
  return string.length >= 6 && !string.includes("!") && !string.includes("#") && !string.includes("$");
}

// Function to determine whether pass is valid
function ispassvalid(str) {
  return str != "password" && str.length >= 6 && (str.includes("!") || str.includes("#") || str.includes("$")) && (str.includes("0") || str.includes("1") || str.includes("2") || str.includes("3") || str.includes("4") || str.includes("5") || str.includes("6") || str.includes("7") || str.includes("8") || str.includes("9")) && (str !== str.toLowerCase() && str !== str.toUpperCase());
}

//Function to determine whether credentials are valid
function arecredvalid(userId, pass){
  return isuserIdvalid(userId) && ispassvalid(pass)
}

// Function to gather credentials
function getcred() {
  var id = prompt("Please enter what User ID you would like.");
  var p = prompt("Please enter your password.");
  alert("Are your credentials valid?: " + arecredvalid(id, p));
}

// Stretch Goal - Password has to contain at least one digit
pass.includes

// Super Stretch Goal - Password has to contain a lower and an uppercase letter\
pass != pass.toUpperCase() || pass != pass.toLowerCase()
