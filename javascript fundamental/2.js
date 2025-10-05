// if(true){
//     console.log("True");
// }
// if(false){
//     console.log("False");
// }
// let a = true;
// if(a){
//     console.log("a is true");
// }

// let b = 10;
// if(b>18){
//     console.log("Great");
// }
// else{
//     console.log("Small");
// }


// let c = require("readline-sync");
// let d = c.question("Enter your age : ");
// if(d>18){
//     console.log("Great");
// }
// else{
//     console.log("Small");
// }

let e = require("readline-sync");
let f = Number(e.question("Enter number = "));
if(f % 3===0 && f % 5===0){
    console.log("FizzBuzz");
}
else if(f % 3===0){
    console.log("Fizz");
}
else if(f % 5===0){
    console.log("Buzz");
}
else{
    console.log("Not divisible");
}