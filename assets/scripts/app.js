
const User = {
    name: "Test",
    age: 22
};

const userName = User.name;
const userAge = User.age;

console.log (userName + " " + userAge);

/*shorter*/
const {name: lastName, age} = {
    name: "Test1",
    age: 33
};


console.log (lastName + " " + age);