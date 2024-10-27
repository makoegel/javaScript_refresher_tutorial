/*define a function*/
function handleTimeout() {
    console.log("Timed out");
}

/*define constant that contains a function as a value */
const handleTimeout2 = () => {
    console.log("Timed out ... again!");
}

function setTimeout(value, limit) {
    if (limit <= 2000)
        value()
    else if (limit > 2000 && limit <= 3000)
        value()
    else
        value()
}

/*without Parantheses passing function as value => executed when called in the future*/
setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);

/*call with anonymous function*/
setTimeout(() => console.log("More Time out ..."), 4000);


/*passing anonymous function to function*/
function greeter(greetFn) {
    greetFn();
}

greeter(() => console.log("Hi"));

