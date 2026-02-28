const account_Id = 122333;
let account_Email = "mayur@gmail.com";
var account_Password = "12345";
let accountState;
var abc;

accountCity = "Pune";

// account_Id  = 2; // NOT ALLOWED

/*

prefer not to use var for variable declaration as it is function scoped and can lead to unexpected behavior. Instead, use let or const for block-scoped variables.

const is used for variables that should not be reassigned after their initial assignment. It provides immutability for the variable reference, meaning you cannot reassign a new value to a const variable. However, if the variable holds an object or an array, you can still modify the properties of that object or the elements of that array.
*/

console.log(account_Id);
console.table([account_Id, account_Email, account_Password, accountCity, accountState, abc]);
