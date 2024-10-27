const userNameData = ["Vorname", "Nachname"];

const firstName = userNameData[0];
const lastName = userNameData[1];

console.log(firstName + " " + lastName);

/*shorter: */
const[fName, lName] = ["Vorname", "Nachname"];

console.log(fName + " " + lName);