let a = prompt("Give a Number");
let b = prompt("Give a Number");
let c = prompt("Give a Number");

if(a>b && a>c) {
    console.log(`${a} is greater`);
} else if(b>a && b>c) {
    console.log(`${b} is greater`);
} else {
    console.log(`${c} is greater`);
}