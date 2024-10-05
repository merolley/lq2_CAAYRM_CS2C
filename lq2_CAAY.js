//implementing alert function
function alert(message ){
    console.log(message);
}
//implementing prompt-sync
const ps = require("prompt-sync");
const prompt = ps();
//user input
let name = prompt("What is your name: ");
let address = prompt("What is your address: ");
let age = parseInt(prompt("How old are you: "));
let classRole = prompt("What is your class role (Officer, Student, Teacher):");
let course = prompt("What course did you take (BSCS, BSM, BAEL):");

//conditional statement for course
if (course === "BSCS" || course === "BSM" || course === "BAEL") {
    
    if (classRole === "Officer") {
        alert("You are a responsible officer.");
    } else if (classRole === "Student") {
        alert("You are a hardworking student.");
    } else if (classRole === "Teacher") {
        alert("You are a wonderfull teacher.");
    } else {
        alert("Role not recognized."); //ivalid input message for role
    }
} else {
    alert("Course not recognized. Please check your input."); //invalid input message for course
}
//loop the user's name 1/4 of their age
let iterations = Math.floor(age / 4);
for (let i = 0; i < iterations; i++) {
    alert(name);  //print the user's name
}
