// const user = {
//     username: "john_doe",
//     price : 100,

//     welcomemessage: function() {
//         console.log(`Welcome, ${this.username}! Your price is ${this.price}.`);
//     }
// }

// user.welcomemessage();
// user.username = "hitesh"

// user.welcomemessage();

// console.log(this);


// function chai(){
//     console.log(this);
// }

// chai();

// const chai = () => {
//     let username = "hitesh";
//     console.log(this);
// }
// chai();

const addtwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addtwo(3, 5));

const addthree = (num1, num2, num3) => num1 + num2 + num3;
