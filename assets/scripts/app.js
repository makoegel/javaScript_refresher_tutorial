
const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(hobbies[2]);

/*adding element with helper method*/
hobbies.push("Working");
console.log(hobbies);

/*using funktions*/
const index = hobbies.findIndex((item) => item ==="Sports");

console.log("Index: " + index + " => " + hobbies[index]);

const editedHobbies = hobbies.map((item) => "I love "+ item );
console.log(editedHobbies);