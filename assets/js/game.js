/*
window. allows to "communicate" with the browser.
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
window.alert("This is an alert! JavaScript is running")