const user = {
    name: "Test",
    age: 22,
    greet() {
        return("Hello" + " " + this.name + "!");
    }
}

console.log(user);
console.log("Name:" + user.name + ", Alter:" + user.age);
console.log(user.greet());



