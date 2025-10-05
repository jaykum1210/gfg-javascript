let a = require("readline-sync");
let b = a.question("Enter last number = ");
for(i=1;i<=b;i++){
    if(i%2==0){
        console.log(i);
    }
}