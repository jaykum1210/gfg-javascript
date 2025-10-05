let a = "Jay";
// console.log(a ?? "kumawat");
let b;
// console.log(b??"kumawat");
// console.log(""??"hii");
// console.log(undefined??"hii");
// console.log(null??"bye");

const c = 0;
console.log(c||1);
console.log(c??1);

let d = 12;
let e = 0;
console.log(d+(e||10));
console.log(d+(e??10));