//  singleton

//  Defination: An object is a collection of properties, where each property is a key-value pair. Objects can also have methods, which are functions that operate on the object's properties.
// Example:
const person = {
  name: "John",
    age: 30,
    greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

person.greet(); // Output: Hello, my name is John

//  objext literals

//  Defination: Object literals are a way to create objects using a simple syntax. They are defined using curly braces {} and can contain properties and methods.

const MySym = Symbol("mySymbol");

const jsUser = {
  name: "Alice",
  age: 25,
  [MySym]: "MyKey1",
  location: "New York",
  "full_name": "Alice Johnson",
  email: "alice@example.com",
  isLoggedIn: true,
  lastLoggeninDays :["Monday", "Tuesday", "Wednesday"],
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full_name"]);
// console.log(jsUser[MySym]);

// jsUser.email = "alice.new@example.com";
// Object.freeze(jsUser); // This will prevent any modifications to the jsUser object

// jsUser.email = "alice.updated@example.com"; // This line will not update the email because the object is frozen

// console.log(jsUser.email); // Still shows the original email value since the object is frozen


jsUser.greet = function() {
  console.log("Hello, my name is " + this.name);
}

console.log(jsUser.greet()); // Output: Hello, my name is Alice
