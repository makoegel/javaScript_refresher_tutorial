
const user = {
    name: "Test",
    age: 22
};

const extendedUser = {
    isAdmin: true,
    ...user
}

console.log(extendedUser);