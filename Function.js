//subtract two numbers

function sub2(a,b) {
  return a-b;
}

// multpily numbers

function mult2(a,b) {
  return a*b;
}

// Divide numbers

function div2(a,b) {
  return a/b;
}

//Functin Greeting

function greet() {
  var name = prompt("What is your name?");
  alert("Hello " + name + "!");
}

//Reverse string


function reverseCharAt(str, position) {
  return str.charAt((str.length - position) - 1);
}

// Stretch Goal: The Lifetime Supply Calculator
// var age
// var amtperday
// ((maxage - age)*365.242)*amtperday
// var maxage = 80
function lifetimesupply(age, amtperday, max) {
  var supply = Math.round(((max - age)*365.242*amtperday));
  console.log(supply);
}
//The Temperature Converter

//celsius to farenheight
//
function celtofar(celsius) {
  var farenheight = celsius*9/5+32;
  console.log(farenheight);
}

//farenheight to celsius

function fartocel(farenheight) {
  var celsius = (farenheight-32)*5/9;
  console.log(celsius);
}
