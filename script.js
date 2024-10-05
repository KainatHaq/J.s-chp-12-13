//Q#1
//take input check check lower ,uppercase
/*var char = prompt("Enter a Character");
document.write(`Character is ${char}</br>`);
if (char == Number.parseInt(char)) {
  document.write(`Input is a Number </br>`);
} else if (char == char.toUpperCase()) {
  document.write(`Input is an Uppercase letter </br></br>`);
} else if (char == char.toLowerCase()) {
  document.write(`Input is an Lowercase letter </br></br>`);
} else {
  document.write(`Invalid Character! </br></br>`);
}*/
//Q#2
//program that accept two integars and display larger and check two integars are equal

 /*function compareIntegers() 
 {
    let num1 = parseInt(prompt("Enter the first integer:"));
    let num2 = parseInt(prompt("Enter the second integer:"));

    // Check if the inputs are valid integers
    if (isNaN(num1) || isNaN(num2)) {
        document.write("Please enter valid integers.");
        return;
    }

    // Compare the integers and display the results
    if (num1 > num2) {
        document.write("The larger integer is: " + num1);
    } else if (num1 < num2) {
        document.write("The larger integer is: " + num2);
    } else {
        document.write("Both integers are equal.");
    }
}
// Call the function to execute the program
compareIntegers();*/

//Q#3
//Take input check number is negatiive positive or zero
/*
var user_Num = Number.parseInt(prompt("Enter Number to check"));
document.write(` Number: ${user_Num}`)
if(user_Num>0){
  document.write("Number is Positive" );
}
 else if(user_Num<0){
  document.write("Number is Negative" );
}
else{
  document.write("Number is zero" );
}*/
//Q#4
// Question# 4:
// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise
/*var character = prompt("Enter a Character! (Vowel or not)");
var vowels = ["a", "e", "i", "o", "u"];
document.write(`Character: ${character}</br>`);
if (
  character == vowels[0] ||
  character == vowels[1] ||
  character == vowels[2] ||
  character == vowels[3] ||
  character == vowels[4]
) {
  document.write("it is a vowel </br></br>");
} else {
  document.write("it is not vowel</br></br>");
}*/

//Q#5
//Write
// a program that a. Store correct password in a JS variable.
 //b.  Asks user to enter his/her password
 //c.  Validate the two passwords

 /*var password = "Kainat Haq";
 var user_password = prompt("Enter Your Password!");

if (user_password === "")
  alert("Please enter your password!");
{
  document.write("Please enter your password!");
}
  if (user_password == `correct_password`) 
  {
  document.write(
    "Correct! The password you entered matches the original password. </br>"
  );
}
 else {
  document.write("Incorrect password </br>");
}*/

//Q#6
// This if/else statement does not work.
// Try to fix it: var greeting; var hour = 13; if (hour < 18) 
//{ greeting = "Good day"; else greeting = "Good evening"; }

/*var greeting;
var hour = 20;
if (hour < 18) {
 document.write(( greeting = "Good day </br></br>"));
} else {
  document.write((greeting = "Good evening </br></br>"));
}*/

//Q#7
//Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. 
//Implement the following case using if, else & else if statements

var time = 1900;

var user_time = Number.parseInt(prompt("Enter 24 hours clock format time"));
if (user_time >= 0 && user_time < 1200) {
  document.write("Good Morning! </br></br>");
} else if (user_time >= 1200 && user_time < 1700) {
  document.write("Good Afternoon! </br></br>");
} else if (user_time >= 1700 && user_time < 2100) {
  document.write("Good Evening! </br></br>");
} else if (user_time >= 2100 && user_time <= 2359) {
  document.write("Good Night! </br></br>");
}