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

//A minimal viable product or MVP is the simplest version of an app
//We approach this project as an MVP

//Starting the PROJECT
//Alert players that they're starting the game.
window.alert("Robot Gladiators!");

//Defining some variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerAttack, playerHealth);
console.log("Your robot's name is " + playerName);


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


//Resuming PROJECT, enemy variables
//Array of robots
let enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
//var enemyName = "Roborto"

//By multiplying Math.random()*60, we've now specified a random range from 0 to 59.xx
//Math.random() will never be 1, so we would never get an even 60
//let enemyHealth = Math.floor(Math.random()*60);

//Math.random()*21 will give a random decimal number between 0 and 20.xx.
//Math.floor() will round this number down, so now the range is a whole number between 0 and 20.
//Adding 40 to the generated number we have our upper limits from 20 to 60.
//enemyHealth = Math.floor(Math.random() * 21) + 40;
let enemyHealth = 50;
let enemyAttack = 12;

/*
JavaScript array is a type of object. It has some useful built-in properties and methods.
E.g. the length property of the Array object contains the number of elements in the array.
*/
console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);

/*
For loop: a type of statement called control flow that enables us to loop through statements,
like arrays, no matter its length.

for ([initial expression]; [condition]; [increment expression]) {
    statement
}

A control flow is a control structure or compound statement, that determines the order in
which the computer executes statements in a JavaScript file or script, which normally runs
sequentially from the first line to the last line. Control flow statements, such as
conditional statements or for statements, change the control flow based on the
statement's conditions.
    */
//for(var i = 0; i < 3; i++) {
    //console.log("Counting i's " + i);
    //console.log("Counting i's", i);
//}

// function to generate a random numeric value
let randomNumber = function(min, max){
    let randomValue = Math.floor(Math.random()*(max - min + 1) + min);

    //As we write our own methods and functions, they can optionally give something back using a return statement.
    return randomValue;
};

enemyAttack = randomNumber(10, 14);

/*
The return statement actually serves two purposes. Yes, it returns a value, but it also
ends function execution right then and there. Consider the following example:
    var doubleIt = function(num) {
        console.log("beginning of function");
        var double = num * 2;
        return double;
        console.log("end of function");
    };

    var newNumber = doubleIt(5);            //is now 10

The second console log, "end of function", never happens because the function has returned,
or ended, before it reached that line. It's similar to using a break statement in a for or while loop.
*/

//Fight function
let fight = function(enemyRobotName) {
    //window.alert('Welcome to Robot Gladiators!');

    /*The while loop is a nother type of control flow statement that loops or repeatedly
    executes a statement while a condition remains true. Like the for loop, the while loop
    repeatedly executes a code block only if a condition remains true.
    E.g.
    while([Condition]) {
        statement
    }
    */
   //Added && (and operator)
    while(enemyHealth > 0 && playerHealth > 0){
        //Ask player if he/she wants to figth.
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

            //Skip, using or operator || to compare different ways to write skip
            if (promptFight === 'SKIP', promptFight === 'Skip', promptFight === 'skip'){

                //window.confirm is a built-in browser function that asks the user for input and stores their
                //response in a variable. Ir requires a simple "OK" or "Cancel" answer.

                //Confirm player wants to skip
                var confirmSkip = window.confirm("Are you sure you'd like to quit?");

                //If true, leave the fight
                if(confirmSkip) {
                    window.alert(playerName + " has decided to skip this fight!")
                    // subtract money from playerMoney for skipping
                    playerMoney = Math.max(0, (playerMoney - 10));
                    console.log('Player money: ', playerMoney);
                    break;
            
            //Not included in the module example
            } else{
                fight();
            }

        //Fight, using or operator || to compare different ways to write fight
        } else if (promptFight === 'FIGHT' || promptFight === 'Fight' || promptFight === 'fight') {
            //debugger;
            
            //Substract playerAttack from enemyHealth, update result in enemyHealth
            //enemyHealth = enemyHealth - playerAttack;

            //If we use something like Math.max(0, variableName), we can ensure that deducted values always stop at zero.
            //enemyHealth = Math.max(0, enemyHealth - playerAttack);

            //Because randomNumber() returns a value, that returned value can be stored in the enemyHealth variable.
            enemyHealth = Math.max(0, (enemyHealth - playerAttack));
            console.log(playerName + ' attacked ' + enemyRobotName + '. ' + enemyRobotName + ' now has ' + enemyHealth + ' health remaning.');

            //Condition used to check if enemy is alive
            if (enemyHealth <= 0) {
                playerHealth = Math.max(0, (playerHealth - enemyAttack));
                window.alert(enemyRobotName + " has died!");
                playerMoney = playerMoney + 20;

                //Not included in the module example
                window.alert(playerName + " still has " + playerHealth + " health left.");
                console.log(enemyRobotName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaning.');

                //Leave while loop if enemy is dead
                break;
            } else {
                window.alert(enemyRobotName + " still has " + enemyHealth + " health left.");
            }

            //Substract enemyAttack from playerHealth, update result in playerHealth
            playerHealth = Math.max(0, (playerHealth - enemyAttack));
            console.log(enemyRobotName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaning.');

            //Condition used to check if player is alive
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                /*
                We need to add a way to stop fighting after meeting playerHealth <= 0.
                JavaScript has the keyword 'break' that can be used just for this purpose. The break
                keyword allows us to exit the current loop.
                */
                //Break --> Leave while loop if player is dead
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }

        //Wrong input from user
        else {
            window.alert('You did not select "Fight" or "Skip". Please try again.');
            fight();
        }
    }
}

/*
Pseudocode:
1. Game States
2. WIN player defeats other robots --> fight all robots --> defeat them all
3. LOSE player health is zero or less- Add combatants to the battle using arrays.

Additional Pseudo Code
- Fight enemy-robot combatants using for loops.
- Fight each combatant using function arguments.
- Battle the combatants until defeated using a while loop.
- Improve the player's game experience.
*/

//Function to start the game
let startGame = function() {
    //We need to reset the player stats every time the game starts
    playerHealth = 100;
    playerAttack= randomNumber((playerAttack - 3), playerAttack);
    playerMoney = 10;


    for(var i = 0; i < enemyNames.length; i++) {
        //Using an if statement to check if playerHealth > 0
        if(playerHealth > 0){
                
            //Increasing the iterator by one allows the round number to be calculated.
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

            let pickedEnemy = enemyNames[i];
    
            //Reseting health of different robot enemies
            //enemyHealth = Math.floor(Math.random()*21) + 40;
            enemyHealth = randomNumber(40, 60);
            //debugger;

            //Run fight function to start game
            fight(pickedEnemy);

            //Addingthe code to access the shop after defeating an enemy or skipping a fight
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                let storeConfirm = window.confirm("Visit the store before the next round?");
                if (storeConfirm){
                    shop();
                }
            }
        //Let the user know his/her robot is dead
        } else {
            window.alert('You have lost your robot in battle! Game Over!');
            break;
        }
    
        console.log(enemyNames[i]);
        console.log(i);
        console.log(enemyNames[i] + " is at " + i + " index");
    }
    //endGame function after loop ends and player is eaither death or victorious
    endGame();
}

//Function to end the game
let endGame = function() {
    //If player still alive, WIN!
    if(playerHealth > 0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".")
    } else {
        window.alert("You've lost your robot in battle.");
    }
    
    let playAgainConfirm = window.confirm('Would you like to play again?');
    if (playAgainConfirm){
        startGame();
    } else {
        window.alert('Thank you for playing Robot Gladiators! Come back soon!');
    }
}

//shop function
let shop = function() {
    console.log('Welcome to the shop!');
    let shopOptions = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

    /*
    Instead of using an if statement, let's aplore the switch function.
    Because we only have one variable (shopOptions) that can be multiple values,
    a switch makes sense. The switch function allows us to move between different
    options depending on the selection made.
    E.g.
    var=5
    switch(num){
        case 1:
            console.log('Selected 1');
            break;
        case 2:
            console.log('Selected 2');
            break;
        case 3:
            console.log('Selected 1');
            break;
        default:
            console.log('The variable was something else');
            break;
    }

    Use switch statements when checking a single value against multiple possibilities,
    or cases. In this example, we're defining what should happen when the variable
    num equals 1, 2, 3, or something else (the default case). Each case ends with
    a break to specify that nothing more should happen.
    */
    switch (shopOptions) {
        case 'REFILL':
        case 'Refill':
        case 'refill':
            window.alert("Refilling player's health by 20 for 7 dollars.");
      
            //Increase health and decrease money
            playerHealth = playerHealth + 20;
            playerMoney = Math.max(0, (playerMoney - 7));
            break;

        case 'UPGRADE':
        case 'Upgrade':
        case 'upgrade':
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
      
            //Increase attack and decrease money
            playerAttack = playerAttack + 6;
            playerMoney = Math.max(0, (playerMoney - 7));
            break;

        case 'LEAVE':
        case 'Leave':
        case 'leave':
            window.alert("Leaving the store.");
      
            //Do nothing, so function will end
            break;
            
        default:
            window.alert("You did not pick a valid option. Try again.");
      
        //Call shop() again so that the player picks a valid option
            shop();
            break;
    }
}

//Start the game when the page loads
startGame();

/*
Arrays are designed to store data as a list. In JavaScript, there are two types of data:
primitives and objects. Primitive data is data that only holds one value, such as a
string, number, or Boolean. Objects are a looser term for a data type that can store
more than one value of data, arrays being one of them.
*/

/*
Primitive data types:
Boolean, true or false (yes/no)
Null, empty or absence of value (0)
Undefined, undefined (?)
Number, numeric value up to 2^53-1
BigInt, Numeric value over 2^53-1
String, textual data that cannot be changed
Symbol, key of an object property
*/

/*
- Pseudocode the steps or the game logic. Pseudocode is a plain-language description
of the steps that an algorithm or application must complete.
*/

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



/* IMPORTANT
Parameters often get confused with arguments because their syntax is similar.
The main distinction between them is their purpose in the function. In the
following function expression, a parameter serves as a variable placeholder
that indicates how the variable will be used in the function. Because the
parameter is only used for the scope of the function, its name isn't
particularly important—but it typically relates to the purpose of the variable,
as you can see in the following code:

var "name" = function (parameter)
var wash = function(soapType) {
 console.log("I wash with " + soapType);
}; 

When we call the wash() function, we can enter a type of soap into the argument.
The argument is used when a function is called with a value as an input.

"functionName"("argument");
wash("Irish Spring"); //=> I wash with Irish Spring, this will be displayed in the console.

An example using the definition of parameters and arguments:
    addTwoNumbers(number1, number2){        //number1 and number2 are the parameters of the addTwoNumbers function
        return number1 + number2;
    };

    addTwoNumbers(4, 6);                    //4 and 6 are the arguments.


*/

/* IMPORTANT
Two ways to declare functions:

FUNCTION DECLARATION
E.g.
function add(a,b){
    console.log(a+b);
}

FUNCTION EXPRESSION
E.g.
var add = function(){
    console.log(a+b);
}

The difference between these two ways to declare functions is Hoisiting

HOISTING is JavaScript's default behavior of moving declarations to the top of the code.
This means that in JavaScript some functions can be called before they are declared.

With function expression we can use the function no matter where in our code, E.g.
add(5, 6);  //This will log 11.
function add(a,b){
    console.log(a+b);
}

With function expression the order where a function is declared matters, E.g.
add(5, 6);  //This will output an error because JS tries to call the function before it was declared!
var add = function(){
    console.log(a+b);
}


=> Arrow function is similar to function expression
E.g.
const greet = () => "Hello World"
greet() // Hello World

let greet = (x) => console.log("x");
greet("Welcome to Javascript Arrow functions");

let greet = () => console.log("Welcome to Javascript Arrow functions");
greet();

Arrow functions also provide better syntax that is more user-friendly for promises and callbacks.
E.g.

From this sintax:
asyncFunction()
    .then(function () {
    return asyncFunction1();
    })
    .then(function () {
    return asyncFunction2();
    })
    .then(function () {
    // Finish:
    });

To this sintax:
asyncFunction()
    .then(() => asyncFunction1())
    .then(() => asyncFunction2())
    .then(() => finish)

*/



/*
OBJECT-ORIENTED PROGRAMMING

JavaScript Objects
JavaScript objects are written with curly braces {}.
Object properties are written as name:value pairs, separated by commas, E.g.:
    - const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

It is a programming paradigm centered around objects rather than functions.
Object oriented languages are diverse, but the most popular ones are class-based languages in which objects are instances of classes.
Objects contain data, which we also refer to as attributes or properties, and methods. Objects can interact with each other.

JavaScript Objects example
Object:
    -Car
Properties:
    - car.name = Ford
    - car.model = Mustang
    - car.weight = 1200 kg
    - car.color = red
Methods:
    - car.start()
    - car.drive()
    - car.brake()
    - car.stop()
All cars have the same properties, but the property values differ from car to car.
All cars have the same methods, but the methods are performed at different times.

Objects are variables too. But objects can contain many values.
This code assigns many values (Fiat, 500, white) to a variable named car, E.g.:
    - const car = {type:"Fiat", model:"500", color:"white"};
The values are written as name:value pairs (name and value separated by a colon).

You define (and create) a JavaScript object with an object literal, E.g.:
    - const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

Spaces and line breaks are not important. An object definition can span multiple lines, E.g.:
    - const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
    };

Object Properties
The name:values pairs in JavaScript objects are called properties, E.g.:
    firstName: "John",
    lastName: "Doe",
    age: 50,

Accessing Object Properties
You can access object properties in two ways:
    - objectName.propertyName
        or
    - objectName['propertyName']

Object Methods
Objects can also have methods.
Methods are actions that can be performed on objects.
Methods are stored in properties as function definitions, E.g.:

PROPERTY	    PROPERTY VALUE
- firstName	    - John
- lastName	    - Doe
- age	        - 50
- eyeColor	    - blue
- fullName	    - function() {return this.firstName + " " + this.lastName;}

IMPORTANT: A method is a function stored as a property. E.g.:
    const person = {
        firstName: "John",
        lastName : "Doe",
        id       : 5566,
        fullName : function() {
            return this.firstName + " " + this.lastName;
        }
    };

IMPORTANT
In the example above, this refers to the person object.
I.e. this.firstName means the firstName property of this.
I.e. this.firstName means the firstName property of person.

What is "this"?
In JavaScript, the "this" keyword refers to an object.
Which object depends on how "this" is being invoked (used or called).
The "this" keyword refers to different objects depending on how it is used:
    - In an object method, "this" refers to the object.
    - Alone, "this" refers to the global object.
    - In a function, "this" refers to the global object. 
    - In a function, in strict mode, "this" is undefined.
    - In a function definition, this refers to the "owner" of the function.
    - In an event, "this" refers to the element that received the event.
    - Methods like call(), apply(), and bind() can refer "this" to any object.

NOTE
this is not a variable. It is a keyword. You cannot change the value of this.

Math object
The Math object has many properties and functions attached to it. When a function belongs to an object, we refer to it as a method.
    - console.log(Math.PI);                 //prints 3.141592653589793
    - console.log(Math.round(4.4));         //rounds to the nearest whole number (4)
    - console.log(Math.sqrt(25));           //prints the square root (5)
    - console.log(Math.max(10, 20, 100));   //prints 100
    - console.log(Math.max(0, -50));        //prints 0

Accessing Object Methods
You access an object method with the following syntax:
    - objectName.methodName()
    E.g.:
        - name = person.fullName();

If you access a method without the () parentheses, it will return the function definition, E.g.:
    - name = person.fullName;       will return: function() { return this.firstName + " " + this.lastName; }


IMPORTANT!
DO NOT Declare Strings, Numbers, and Booleans as Objects!
When a JavaScript variable is declared with the keyword "new", the variable is created as an object, E.g.:
    x = new String();        // Declares x as a String object
    y = new Number();        // Declares y as a Number object
    z = new Boolean();       // Declares z as a Boolean object

Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed.

JavaScript String Methods
¬ String Length E.g.:
    - let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    - let length = txt.length;

¬ Extracting String Parts
There are 3 methods for extracting a part of a string:
    - slice(start, end)
    - substring(start, end)
    - substr(start, length)

¬ Replacing String Content
The replace() method replaces a specified value with another value in a string, E.g.:
    - let text = "Please visit Microsoft!";
    - let newText = text.replace("Microsoft", "W3Schools");
To replace case insensitive, use a regular expression with an /i flag (insensitive), E.g.:
    - let text = "Please visit Microsoft!";
    - let newText = text.replace(/MICROSOFT/i, "W3Schools");

¬ Converting to Upper and Lower Case
A string is converted to upper case with toUpperCase()
A string is converted to lower case with toLowerCase()

¬ JavaScript String trim()
The trim() method removes whitespace from both sides of a string, E.g.:
    - let text1 = "      Hello World!      ";
    - let text2 = text1.trim();

*/