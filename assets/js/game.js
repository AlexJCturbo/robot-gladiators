/*
window. referes to the browser itself and allows to "communicate" with it.
The window object is supported by all browsers.
It represents the browser's window.

All global JavaScript objects, functions, and variables automatically
become members of the window object.

Global variables are properties of the window object.
Global functions are methods of the window object.
Even the document object (of the HTML DOM) is a property of the window object
E.g. 
window.document.getElementById("header");
is the same as:
document.getElementById("header");
*/

// There are no official standards for the Browser Object Model (BOM).
// alert() performs an action (pops an alert in the browser)

/*
The alert function is built in to the browser.
JavaScript functions must include parentheses, even if there's nothing between them.
When the browser reads the function name and sees the parentheses, it knows to execute the function.

Placing content between the parentheses is called
passing an argument into a function.

; (semicolon) tells the browser that a particular line is completed
and any code after it is a new piece of code.
Each piece of code, separated by semicolons, is known as an expression.

*/
//window.alert("This is an alert! JavaScript is running");

// Creating the "fight" function
// The code between {} curly braces is called a code block.
function fight() {
    window.alert("The fight has begun");
}
fight();

//window.prompt("What is your robot's name?")

/*
A collection of functionality and data that is accessed through one "name"
(for example, window) is an object. To access an object's data, we name
the object, then use a period followed by the property name or function
name we're looking for.
Using a period between the object name and property is called dot notation.
*/

/*
So the window.prompt() instructs the browser to find the window object,
then find and execute the prompt() function that belongs to the window object.
When a function like prompt() belongs to an object, it's called a method.
*/

/*
Even though our JavaScript code can access these properties, the window object
isn't actually part of the JavaScript language. We can use it because browsers
have built this functionality into their software and put it behind the name
window. This is called a web application programming interface (API),
which we'll learn more about throughout this project and in the coming weeks.
*/


let playerName = window.prompt("What is your robot's name?")

/*
A variable (var, let) is a named location for a value that gets stored in
the browser's memory when a program is run. Because the data coming from
the prompt is user-driven, the value is unpredictable. Giving the data
a variable name (in our case, playerName) allows us to refer to it
consistently by just calling on that name.
*/

/*
An alert isn't ideal to test and debug code. console.log() is the prefered
method to test code.
*/
//window.alert(playerName);

console.log("Your robot's name is " + playerName);

console.log("This logs a string, good for leaving yourself a message");

// this will do math and log 20
console.log(10 + 10);



// This is a String data type; it must be wrapped in
// double quotes (" ") or single quotes (' ').
var stringDataType = "This is a string, which is a fancy way to say text";

// This is a Number data type; it can be an integer (whole number)
// or have decimals (floated numbers).
var numberIntegerDataType = 10;
var numberFloatDataType = 10.428;

// This is a Boolean data type, which can only be given a value of true or false.
var booleanDataType = true;

