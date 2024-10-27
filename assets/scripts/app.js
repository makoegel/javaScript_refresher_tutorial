
function createGreeting(userName, message = "Hi") {
    return message + " " + userName + "!";
}

const greeting1 = createGreeting("Test1", "Hello");
const greeting2 = createGreeting("Test2", "Hello");
const greeting3 = createGreeting("Test3");

console.log(greeting1);
console.log(greeting2);
console.log(greeting3);


