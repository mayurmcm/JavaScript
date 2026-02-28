//  premitive data types summary

// 1. String: A sequence of characters used to represent text. Example: "Hello, World!"

// 2. Number: Represents both integer and floating-point numbers. Example: 42, 3.14

// 3. Boolean: Represents a logical entity that can have two values: true or false. Example: true, false

// 4. Null: Represents the intentional absence of any object value. Example: null

// 5. Undefined: Represents a variable that has been declared but has not been assigned a value. Example: undefined

// 6. Symbol: Represents a unique identifier. Example: Symbol('description')

// 7. BigInt: Represents integers with arbitrary precision. Example: 9007199254740991n


// Reference data types summary (non-primitive data types that can store collections of data and more complex entities)

// 1. Object: A collection of properties, where each property is a key-value pair. Example: { name: "Alice", age: 30 }

// 2. Array: An ordered list of values, which can be of any type. Example: [1, 2, 3, "four", true]

// 3. Function: A block of code designed to perform a particular task. Example: function greet() { console.log("Hello!"); }

const id = Symbol("id");
const anotherId = Symbol("id");

console.log(id === anotherId); // false, because each Symbol is unique

let myObj = {
    name: "Alice",
    age: 30,
    [id]: 12345 // using a Symbol as a property key
}

const myFunction = function() {
    console.log("This is a function.");
}

//  ***********************************************************

//  Stack Memory (Primitive) vs Heap Memory (Reference || Non-Primitive)

// Stack Memory: Used for storing primitive data types and function calls. It is a last-in-first-out (LIFO) data structure. When a function is called, a new stack frame is created to hold the function's local variables and parameters. Once the function execution is complete, the stack frame is removed.

let myYouTubeChannel = "CodeWithHarry"; // stored in stack memory

let anothername = myYouTubeChannel; // another reference to the same string in stack memory
anothername = "hitesh"

console.log(myYouTubeChannel); // Output: CodeWithHarry
console.log(anothername); // Output: hitesh

// Heap Memory: Used for storing reference data types (objects, arrays, functions). It is a more complex memory structure that allows for dynamic memory allocation. When an object is created, it is stored in the heap, and a reference to that object is stored in the stack. When the reference goes out of scope, the memory allocated for the object in the heap can be garbage collected.