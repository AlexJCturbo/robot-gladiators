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

/*
function fight() {
    window.alert("The fight has begun");
}
fight();
*/

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

//Starting the game
//Alert players that they're starting the round.
window.alert("Welcome to Robot Gladiators!");

//Defining some variables
let playerName = window.prompt("What is your robot's name?");

var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerHealth, playerAttack);

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
/*
In string concatenation, we can write out a string as we typically would,
but in order to include variable data, we need to close the string.
To do that, put a plus sign + after the closing quotation, then write the
variable name.
*/

// console.log object
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


// Resuming code, enemy variables
let enemyName = "Roborto";
let enemyHealth = 50;
let enemyAttack = 12;

let fight = function() {
    //Ask player if he/she wants to figth.
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "Fight" or "Skip" to choose.');
    
    //Fight, using or operator || to compare different ways to write fight
    if (promptFight == 'FIGHT' || promptFight == 'Fight' || promptFight == 'fight'){
        //Substract playerAttack from enemyHealth, update result in enemyHealth
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaning.');

        //Condition used to check if enemy is alive
        if (enemyHealth <=0){
            window.alert(enemyName + ' has died.');
        }
        else {
            window.alert(enemyName + ' has ' + enemyHealth + ' health left.');
        }

        //Substract enemyAttack from playerHealth, update result in playerHealth
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaning.');

        //Condition used to check if player is alive
        if (playerHealth <= 0){
            window.alert(playerName + ' has died.');
        }
        else {
            window.alert(playerName + ' has ' + playerHealth + ' health left.');
            fight();
        }
    }

    //Skip, using or operator || to compare different ways to write skip
    else if (promptFight == 'SKIP' || promptFight == 'Skip' || promptFight == 'skip'){
        window.alert(playerName + ' has chosen to skip this fight!');
        //window.confirm is a built-in browser function that asks the user for input and stores their
        //response in a variable. Ir requires a simple "OK" or "Cancel" answer.
        let skipConfirm = window.confirm('Are you sure you want to skip this round?');
        //If yes, leave fight
        if(skipConfirm){
            window.alert(playerName + ' has decided to skip this fight. Goodbye!');
            playerMoney = playerMoney - 2;
        }
        //If no, ask again by running fight() function again
        else {
            fight();
        }
    }

    //Wrong input from user
    else {
        window.alert('You did not select "Fight" or "Skip". Please try again.');
        fight();
    }

        /*
        window.prompt('Would you like to fight or skip next round? Use "F" to fight and "S" to skip.'){
            if (window.prompt = 'F'){
                enemyHealth = enemyHealth - playerAttack;
                playerHealth = playerHealth - enemyAttack;
            }
            if (window.prompt = 'S'){
                enemyHealth = enemyHealth;
                playerHealth = playerHealth;
            }
            else {
                window.alert('You did not select F or S. Please select F to fight or S to skip.')
            }
        }
        */

}

fight();

/*
There are two ways to create a function in JavaScript:
Function declaration: when we create a function using the function keyword first.
E.g.
function fight() {
  window.alert("Welcome to Robot Gladiators!");
}

Function expression: This is when we create a function by assigning it to a variable.
E.g.
var fight = function() {
  window.alert("Welcome to Robot Gladiators!");
};
*/

/*
Variable names have different meanings on the left and right of an assignment
operator. Listing the variable on the left side means we'll store data to
that variable, and listing the variable on the right side means we'll use
the actual value that variable holds at that moment.
*/