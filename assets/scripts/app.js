let userMessage = "Hi";
console.log(userMessage);

userMessage = "Hello";
console.log(userMessage);

userMessage = userMessage.concat("!!!");
console.log(userMessage);

/* => pimitive values always produce new Values*/

const hobbies = ["Sports", "Cooking"];

hobbies.push("Working");

console.log(hobbies)

/*arrays are objects, objects are reference values*/