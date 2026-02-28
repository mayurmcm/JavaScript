const tinderUser = new Object();

tinderUser.id = '123abc';
tinderUser.name = 'John Doe';
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: 'regular@example.com',
    fullName: {
        userFullName: {
            firstName: 'John',
            lastName: 'Doe'
        }
    }
}

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: 'a', 2: 'b'};
const obj2 = {3: 'c', 4: 'd'};

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

// obj4 = {...obj1, ...obj2};
// console.log(obj4);

// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));

const Course = {
    couseName: 'JavaScript',
    coursePrice: 999,
    courseInstructor: 'John Doe'
}

