const user = {
    name: "Test",
    age: 22,
    greet() {
        return("Hello" + " " + this.name + "!");
    }
};

console.log(user);
console.log("Name:" + user.name + ", Alter:" + user.age);
console.log(user.greet());



class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet (){
        return("Hello" + " " + this.name + "!");
    }
}

const user1 = new User("Test2", 35);
console.log(user1.greet());


