"use strict"; //treat all js code as newer version

// alert(3 + 4);  // we are using nodejs not browser so alert will not work
// alert("mayur")

let name = "mayur";
let age = 22;
let isMarried = false;

// number => 2 to the power of 53
// bigint => greater than 2 to the power of 53
// string => "mayur"
// boolean => true or false
// null => standalone value that represents "nothing"
// undefined => variable that is declared but not assigned a value
// symbol => unique identifier


// object => collection of key-value pairs

console.log(typeof "mayur");
console.log(typeof null);  // object is a bug in js but it is not fixed for backward compatibility
console.log(typeof undefined); // undefined is a type and also a value
console.log(typeof 22); // number
console.log(typeof 22n); // bigint
console.log(typeof true); // boolean
console.log(typeof Symbol("id")); // symbol
