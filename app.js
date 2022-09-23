console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function oddNumbers(count){
    for (i = 0; i <= 100; i++){
        if (i % 2){
            console.log(i);
        }
    }
}
console.log(oddNumbers());

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age){
    let aboveSixteen = 'Congrats ' + `${userName}` + ', you can drive!';
    let belowSixteen = "Sorry " + `${userName}`+ ", but you need to wait until you're 16.";
    if (age > 16){
        console.log(aboveSixteen);
    } else {
        console.log(belowSixteen);
    }
}
let userName = 'Dewel';
checkAge(`${userName}`, 17);