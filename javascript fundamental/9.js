// for( i = 0;i<5;i++){
//     console.log(i);
// }

// let name = "Jay Kumawat";
// let a = name.length;
// for(i = 0;i<a;i++){
//     console.log(name[i]);
// }

let b = require("readline-sync");
let c = b.question("Enter number = ");
for(i=1;i<=c;i++){
    for(j=1;j<=10;j++){
        console.log(i + " X " + j + " = " + i*j);
    }
}