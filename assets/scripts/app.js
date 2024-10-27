
const User = {
    name: "Test",
    age: 22
};

const userName = User.name;
const userAge = User.age;

/*shorter*/
const {name, age} = {
    name: "Test1",
    age: 33
};

console.log (userName + " " + userAge);
console.log (name + " " + age);