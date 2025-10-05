let a = require("readline-sync");
let b = Number(a.question("Enter number = "));
if(b>0){
    if(b%2==0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}
else{
    console.log("Negative");
}