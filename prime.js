let a = prompt("Give a Number");

var count= 0;
for(var i=1; i<a; i++) {
    if(a%i==0) {
        count++;
    }
}

if(count>1) {
    console.log(`${a} is not a prime`);
} else {
    console.log(`${a} is a prime`); 
}