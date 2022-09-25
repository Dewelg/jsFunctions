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
checkAge(`${userName}`, 18);

//Exercise3
function quadrant(x,y){
    if (x > 0 && y > 0){
        console.log("this is in quadrant one");
    }

    else if (x < 0 && y > 0){
        console.log('This is in qudrant two');
    }

    else if (x < 0 && y < 0){
        console.log('This is in qudrant three');
    }

    else if (x > 0 && y < 0){
        console.log('This is in qudrant four');
    }
}

let x = 4;
let y = -2;

quadrant(x,y);

//Exercise4
function checktrianglevalid(a, b, c){
     return a + b > c || a + c > b || b + c > a
}

function triangle(a, b, c){
    let checktriangle = checktrianglevalid(a, b, c);
    if (checktriangle){
        if (a == b || b == c){
            return('Equlaterial triangle');
        } 
        else if (a == b || b != c || a == c){
            return('Isosceles triangles');
        } 
        else {
            return('Not vaild triangle');
        }

    }

    
}

console.log(triangle(2, 2, 2));
console.log(triangle(2, 3, 2));

//exersice5
// need to get input of how many days left
// see how much data is left
// see how much they used data
//then calculate there average daily use
//the calcualte high low or medium usage 


function dataUsage(day){ 
    let daysDue = 30;
    
    if (daysDue > day){
        let product = daysDue - day;
        console.log(`${day}` + ' days used ' + `${product}` + ' days left');
    } 
    else if (daysDue <= day){
        return('No more days left for data');
    }
 
   
}

console.log(dataUsage(15));