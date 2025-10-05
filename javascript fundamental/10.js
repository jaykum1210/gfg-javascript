let a = require("readline-sync");
let b = a.question("Enter number = ");
let c = "* ";
// for(i = 1;i<=b;i++){
//     console.log(c.repeat(i));
// }
let d = a.question("Enter name = ");
let count = 0;
for(i=0;i<d.length;i++){
    count++;
}
console.log(count);