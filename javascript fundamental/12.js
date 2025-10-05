let a = "Jay kumawat";
let b = "aeiou";
let count = 0;
for(i=0;i<a.length;i++){
    if(b.includes(a[i])){
        count++;
    }
}

console.log(`Number of vowels = ${count}`);