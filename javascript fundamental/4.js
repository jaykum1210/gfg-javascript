let a = require("readline-sync");
let b = a.question("Enter first string = ");
let c = a.question("Enter second string = ");
let d = a.question("Enter third string = ");

let e = b.length;
let f = c.length;
let g = d.length;
if(e<f && e<g){
    console.log(`${b} is smallest`);
}
else if(f<e && f<g){
    console.log(`${c} is smallest`);
}
else{
    console.log(`${d} is smallest`);
}