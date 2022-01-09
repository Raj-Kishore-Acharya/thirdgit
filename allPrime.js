let a = prompt("Type A Number");

for(var i=1; i<=a; i++) {
    var count = 0;
    for(j=1; j<=i; j++) {
        if(i%j==0) {
            count++;
        }
    }if (count<=2) {
        console.log(`${i} is  a prime`);
    } 
}