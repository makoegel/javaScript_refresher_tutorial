
const hobbies = ["Sports", "Cooking"];
const newHobbies = ["Reading"];


/*generates array in array: */
const mergedHobbies1 = [hobbies, newHobbies];
console.log(mergedHobbies1);

/*spread operator "..." writes existing arrays in one new array*/
const mergedHobbies2 = [...hobbies, ...newHobbies];
console.log(mergedHobbies2);